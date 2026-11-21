(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Zu=0,Qc=1,Ju=2;var ps=1,Ku=2,cr=3,Yi=0,ln=1,fn=2,ms=0,hr=1,jc=2,th=3,eh=4,$u=5;var gs=100,Qu=101,ju=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,nh=204,ih=205,od=206,ad=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,ya=0,va=1,Ma=2,Qs=3,Sa=4,ba=5,wa=6,Ta=7,sh=0,md=1,gd=2,ni=0,rh=1,oh=2,ah=3,xo=4,lh=5,ch=6,hh=7;var uh=300,xs=301,ur=302,il=303,sl=304,Aa=1e3,Qn=1001,Ea=1002,sn=1003,xd=1004;var _o=1005;var rn=1006,rl=1007;var Ti=1008;var Sn=1009,dh=1010,fh=1011,dr=1012,ol=1013,Xn=1014,Fn=1015,qn=1016,al=1017,ll=1018,_s=1020,ph=35902,mh=35899,gh=1021,xh=1022,Cn=1023,yi=1026,Ai=1027,cl=1028,hl=1029,Zi=1030,ul=1031;var dl=1033,yo=33776,vo=33777,Mo=33778,So=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,yl=37496,vl=37488,Ml=37489,bo=37490,Sl=37491,bl=37808,wl=37809,Tl=37810,Al=37811,El=37812,Rl=37813,Cl=37814,Il=37815,Pl=37816,Ll=37817,Dl=37818,Nl=37819,Ul=37820,Fl=37821,Ol=36492,zl=36494,Bl=36495,kl=36283,Gl=36284,wo=36285,Vl=36286;var Or=2300,Ra=2301,xa=2302,Vc=2303,Hc=2400,Wc=2401,Xc=2402;var _d=3200;var Hl=0,yd=1,Ei="",an="srgb",zr="srgb-linear",Br="linear",Re="srgb";var _a=7680;var vd=519,Md=512,Sd=513,bd=514,_h=515,wd=516,Td=517,yh=518,vh=519,Ad=35044,Wl=35048;var Mh="300 es",Nn=2e3,js=2001;function up(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ed(){let n=kr("canvas");return n.style.display="block",n}var uu={},tr=null;function Sh(...n){let t="THREE."+n.shift();tr?tr("log",t,...n):console.log(t,...n)}function Rd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function jt(...n){n=Rd(n);let t="THREE."+n.shift();if(tr)tr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function oe(...n){n=Rd(n);let t="THREE."+n.shift();if(tr)tr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Lr(...n){let t=n.join(" ");t in uu||(uu[t]=!0,jt(...n))}function Cd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Id={[ya]:ya,[Ma]:wa,[Sa]:Sa,[Qs]:ba,[va]:va,[wa]:Ma,[Ta]:Ta,[ba]:Qs},jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,Dr=Math.PI/180,er=180/Math.PI;function ys(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function xe(n,t,e){return Math.max(t,Math.min(e,n))}function bh(n,t){return(n%t+t)%t}function fp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function pp(n,t,e){return n!==t?(e-n)/(t-n):0}function Nr(n,t,e){return(1-e)*n+e*t}function mp(n,t,e,i){return Nr(n,t,1-Math.exp(-e*i))}function gp(n,t=1){return t-Math.abs(bh(n,t*2)-t)}function xp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function _p(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function yp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function vp(n,t){return n+Math.random()*(t-n)}function Mp(n){return n*(.5-Math.random())}function Sp(n){n!==void 0&&(du=n);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bp(n){return n*Dr}function wp(n){return n*er}function Tp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ap(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ep(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),h=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*h,a*u,a*c);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Th(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pd(n,t){if(t.constructor===Float32Array)return n;let e=Th(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ld(n,t){if(t.constructor===Float32Array)return n;let e=Th(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var To={DEG2RAD:Dr,RAD2DEG:er,generateUUID:ys,clamp:xe,euclideanModulo:bh,mapLinear:fp,inverseLerp:pp,lerp:Nr,damp:mp,pingpong:gp,smoothstep:xp,smootherstep:_p,randInt:yp,randFloat:vp,randFloatSpread:Mp,seededRandom:Sp,degToRad:bp,radToDeg:wp,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Ep,normalize:Ld,denormalize:Pd},zt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],m=r[o+2],y=r[o+3];if(d!==y||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*y;p<0&&(f=-f,h=-h,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+y*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+y*a;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],m=r[o+3];return t[e]=a*m+u*d+l*h-c*f,t[e+1]=l*m+u*f+c*d-a*h,t[e+2]=c*m+u*h+a*f-l*d,t[e+3]=u*m-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new k,fu=new vn,re=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],y=s[0],p=s[3],g=s[6],v=s[1],M=s[4],S=s[7],E=s[2],R=s[5],x=s[8];return r[0]=o*y+a*v+l*E,r[3]=o*p+a*M+l*R,r[6]=o*g+a*S+l*x,r[1]=c*y+u*v+d*E,r[4]=c*p+u*M+d*R,r[7]=c*g+u*S+d*x,r[2]=f*y+h*v+m*E,r[5]=f*p+h*M+m*R,r[8]=f*g+h*S+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,m=e*d+i*f+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=h*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(t,e)),this}rotate(t){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-t)),this}translate(t,e){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yc=new re,pu=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rp(){let n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:t,whitePoint:i,transfer:Br,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}var ye=Rp();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fs,Ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fs===void 0&&(Fs=kr("canvas")),Fs.width=t.width,Fs.height=t.height;let s=Fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Fs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cp=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vc(s[o].image)):r.push(vc(s[o]))}else r=vc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ca.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Ip=0,Mc=new k,_n=class n extends jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=rn,o=Ti,a=Cn,l=Sn,c=n.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=ys(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=uh;_n.DEFAULT_ANISOTROPY=1;var Ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,S=(h+1)/2,E=(g+1)/2,R=(u+f)/4,x=(d+y)/4,T=(m+p)/4;return M>S&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=x/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=T/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=T/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Ia{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Gr=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pa=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ae=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,m,y,p)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,h=o*d,m=a*u,y=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+m*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=m+h*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,h=l*d,m=c*u,y=c*d;e[0]=f+y*a,e[4]=m*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-m,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,h=l*d,m=c*u,y=c*d;e[0]=f-y*a,e[4]=-o*d,e[8]=m+h*a,e[1]=h+m*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,h=o*d,m=a*u,y=a*d;e[0]=l*u,e[4]=m*c-h,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=h*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,h=o*c,m=a*l,y=a*c;e[0]=l*u,e[4]=y-f*d,e[8]=m*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+m,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*l,h=o*c,m=a*l,y=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+y,e[5]=o*u,e[9]=h*d-m,e[2]=m*d-h,e[6]=a*u,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pp,t,Lp)}lookAt(t,e,i){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ui.crossVectors(i,wn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ui.crossVectors(i,wn)),Ui.normalize(),qo.crossVectors(wn,Ui),s[0]=Ui.x,s[4]=qo.x,s[8]=wn.x,s[1]=Ui.y,s[5]=qo.y,s[9]=wn.y,s[2]=Ui.z,s[6]=qo.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],y=i[6],p=i[10],g=i[14],v=i[3],M=i[7],S=i[11],E=i[15],R=s[0],x=s[4],T=s[8],C=s[12],I=s[1],N=s[5],B=s[9],W=s[13],b=s[2],D=s[6],U=s[10],z=s[14],et=s[3],q=s[7],J=s[11],st=s[15];return r[0]=o*R+a*I+l*b+c*et,r[4]=o*x+a*N+l*D+c*q,r[8]=o*T+a*B+l*U+c*J,r[12]=o*C+a*W+l*z+c*st,r[1]=u*R+d*I+f*b+h*et,r[5]=u*x+d*N+f*D+h*q,r[9]=u*T+d*B+f*U+h*J,r[13]=u*C+d*W+f*z+h*st,r[2]=m*R+y*I+p*b+g*et,r[6]=m*x+y*N+p*D+g*q,r[10]=m*T+y*B+p*U+g*J,r[14]=m*C+y*W+p*z+g*st,r[3]=v*R+M*I+S*b+E*et,r[7]=v*x+M*N+S*D+E*q,r[11]=v*T+M*B+S*U+E*J,r[15]=v*C+M*W+S*z+E*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],m=t[3],y=t[7],p=t[11],g=t[15],v=l*h-c*f,M=a*h-c*d,S=a*f-l*d,E=o*h-c*u,R=o*f-l*u,x=o*d-a*u;return e*(y*v-p*M+g*S)-i*(m*v-p*E+g*R)+s*(m*M-y*E+g*x)-r*(m*S-y*R+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],m=t[12],y=t[13],p=t[14],g=t[15],v=e*a-i*o,M=e*l-s*o,S=e*c-r*o,E=i*l-s*a,R=i*c-r*a,x=s*c-r*l,T=u*y-d*m,C=u*p-f*m,I=u*g-h*m,N=d*p-f*y,B=d*g-h*y,W=f*g-h*p,b=v*W-M*B+S*N+E*I-R*C+x*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/b;return t[0]=(a*W-l*B+c*N)*D,t[1]=(s*B-i*W-r*N)*D,t[2]=(y*x-p*R+g*E)*D,t[3]=(f*R-d*x-h*E)*D,t[4]=(l*I-o*W-c*C)*D,t[5]=(e*W-s*I+r*C)*D,t[6]=(p*S-m*x-g*M)*D,t[7]=(u*x-f*S+h*M)*D,t[8]=(o*B-a*I+c*T)*D,t[9]=(i*I-e*B-r*T)*D,t[10]=(m*R-y*S+g*v)*D,t[11]=(d*S-u*R-h*v)*D,t[12]=(a*C-o*N-l*T)*D,t[13]=(e*N-i*C+s*T)*D,t[14]=(y*M-m*E-p*v)*D,t[15]=(u*E-d*M+f*v)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,m=r*d,y=o*u,p=o*d,g=a*d,v=l*c,M=l*u,S=l*d,E=i.x,R=i.y,x=i.z;return s[0]=(1-(y+g))*E,s[1]=(h+S)*E,s[2]=(m-M)*E,s[3]=0,s[4]=(h-S)*R,s[5]=(1-(f+g))*R,s[6]=(p+v)*R,s[7]=0,s[8]=(m+M)*x,s[9]=(p-v)*x,s[10]=(1-(f+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Nn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Nn)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===js)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Nn,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),h=-(i+s)/(i-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Nn)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===js)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Os=new k,Gn=new Ae,Pp=new k(0,0,0),Lp=new k(1,1,1),Ui=new k,qo=new k,wn=new k,gu=new Ae,xu=new vn,vi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dp=0,_u=new k,zs=new vn,fi=new Ae,Yo=new k,wr=new k,Np=new k,Up=new vn,yu=new k(1,0,0),vu=new k(0,1,0),Mu=new k(0,0,1),Su={type:"added"},Fp={type:"removed"},Bs={type:"childadded",child:null},Sc={type:"childremoved",child:null},qe=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new vi,i=new vn,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new re}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return _u.copy(t).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yo.copy(t):Yo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(wr,Yo,this.up):fi.lookAt(Yo,wr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(fi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fp),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new k(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function bc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ye.workingColorSpace){if(t=bh(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bc(o,r,t+1/3),this.g=bc(o,r,t),this.b=bc(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let i=Dd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ye.workingToColorSpace(un.copy(this),t),Math.round(xe(un.r*255,0,255))*65536+Math.round(xe(un.g*255,0,255))*256+Math.round(xe(un.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(un.copy(this),e);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=an){ye.workingToColorSpace(un.copy(this),t);let e=un.r,i=un.g,s=un.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Zo);let i=Nr(Fi.h,Zo.h,e),s=Nr(Fi.s,Zo.s,e),r=Nr(Fi.l,Zo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new ae;ae.NAMES=Dd;var Hr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Wr=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new k,pi=new k,wc=new k,mi=new k,ks=new k,Gs=new k,bu=new k,Tc=new k,Ac=new k,Ec=new k,Rc=new Ge,Cc=new Ge,Ic=new Ge,ki=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Vn.subVectors(s,e),pi.subVectors(i,e),wc.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(pi),l=Vn.dot(wc),c=pi.dot(pi),u=pi.dot(wc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-h-m,m,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(t,e,i,s){return Vn.subVectors(i,e),pi.subVectors(t,e),Vn.cross(pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,i),Gs.subVectors(r,i),Tc.subVectors(t,i);let l=ks.dot(Tc),c=Gs.dot(Tc);if(l<=0&&c<=0)return e.copy(i);Ac.subVectors(t,s);let u=ks.dot(Ac),d=Gs.dot(Ac);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(ks,o);Ec.subVectors(t,r);let h=ks.dot(Ec),m=Gs.dot(Ec);if(m>=0&&h<=m)return e.copy(r);let y=h*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Gs,a);let p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return bu.subVectors(r,s),a=(d-u)/(d-u+(h-m)),e.copy(s).addScaledVector(bu,a);let g=1/(p+y+f);return o=y*g,a=f*g,e.copy(i).addScaledVector(ks,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Ko.subVectors(this.max,Tr),Vs.subVectors(t.a,Tr),Hs.subVectors(t.b,Tr),Ws.subVectors(t.c,Tr),Oi.subVectors(Hs,Vs),zi.subVectors(Ws,Hs),ss.subVectors(Vs,Ws);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-ss.y,ss.x,0];return!Pc(e,Vs,Hs,Ws,Ko)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,Vs,Hs,Ws,Ko))?!1:($o.crossVectors(Oi,zi),e=[$o.x,$o.y,$o.z],Pc(e,Vs,Hs,Ws,Ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gi=[new k,new k,new k,new k,new k,new k,new k,new k],Hn=new k,Jo=new ti,Vs=new k,Hs=new k,Ws=new k,Oi=new k,zi=new k,ss=new k,Tr=new k,Ko=new k,$o=new k,rs=new k;function Pc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ke=new k,Qo=new zt,zp=0,xn=class extends jn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ad,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?Th(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qo.fromBufferAttribute(this,e),Qo.applyMatrix3(t),this.setXY(e,Qo.x,Qo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ld(t,this.array)}};var Xr=class extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var qr=class extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _e=class extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Bp=new ti,Ar=new k,Lc=new k,Mi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Bp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);let e=Ar.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Lc)),this.expandByPoint(Ar.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kp=0,Dn=new Ae,Dc=new qe,Xs=new k,Tn=new ti,Er=new ti,nn=new k,Ye=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?qr:Xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Tn.min,Er.min),Tn.expandByPoint(nn),nn.addVectors(Tn.max,Er.max),Tn.expandByPoint(nn)):(Tn.expandByPoint(Er.min),Tn.expandByPoint(Er.max))}Tn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),nn.add(Xs)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new k,l[C]=new k;let u=new k,d=new k,f=new k,h=new zt,m=new zt,y=new zt,p=new k,g=new k;function v(C,I,N){c[C]=c[I]=c[N]=1,u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,I),f.fromBufferAttribute(i,N),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),d.sub(u),f.sub(u),m.sub(h),y.sub(h);let B=1/(m.x*y.y-y.x*m.y);isFinite(B)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(B),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(B),a[C].add(p),a[I].add(p),a[N].add(p),l[C].add(g),l[I].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,I=M.length;C<I;++C){let N=M[C],B=N.start,W=N.count;for(let b=B,D=B+W;b<D;b+=3)v(t.getX(b+0),t.getX(b+1),t.getX(b+2))}let S=new k,E=new k,R=new k,x=new k;function T(C){R.fromBufferAttribute(s,C),x.copy(R);let I=a[C];S.copy(I),S.sub(R.multiplyScalar(R.dot(I))).normalize(),E.crossVectors(x,I);let B=E.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,B)}for(let C=0,I=i.count;C<I;++C)c[C]&&T(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(t)for(let f=0,h=t.count;f<h;f+=3){let m=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let g=0;g<u;g++)f[m++]=c[h++]}return new xn(f,u,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nc=new k,Gp=new k,Vp=new re,Wn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Nc.subVectors(i,e).cross(Gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Vp.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hp=0,Si=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=hr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xi=new k,Uc=new k,jo=new k,ta=new k,Yr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Uc.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),ta.copy(this.origin).sub(Uc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jo),a=ta.dot(this.direction),l=-ta.dot(jo),c=ta.lengthSq(),u=Math.abs(1-o*o),d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=r*u,d>=0)if(f>=-m)if(f<=m){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Uc).addScaledVector(jo,f),h}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,h=t.z-o.z,m=e.x-o.x,y=e.y-o.y,p=e.z-o.z,g=i.x-o.x,v=i.y-o.y,M=i.z-o.z,S=Math.abs(l),E=Math.abs(c),R=Math.abs(u),x,T,C,I,N,B,W,b,D,U,z,et;if(S>=E&&S>=R?(C=l,B=d,D=m,et=g,l>=0?(x=c,T=u,I=f,N=h,W=y,b=p,U=v,z=M):(x=u,T=c,I=h,N=f,W=p,b=y,U=M,z=v)):E>=R?(C=c,B=f,D=y,et=v,c>=0?(x=u,T=l,I=h,N=d,W=p,b=m,U=M,z=g):(x=l,T=u,I=d,N=h,W=m,b=p,U=g,z=M)):(C=u,B=h,D=p,et=M,u>=0?(x=l,T=c,I=d,N=f,W=m,b=y,U=g,z=v):(x=c,T=l,I=f,N=d,W=y,b=m,U=v,z=g)),C===0)return null;let q=x/C,J=T/C,st=1/C,wt=I-q*B,xt=N-J*B,at=W-q*D,gt=b-J*D,yt=U-q*et,Nt=z-J*et,vt=yt*gt-Nt*at,Yt=wt*Nt-xt*yt,ie=at*xt-gt*wt;if(s){if(vt<0||Yt<0||ie<0)return null}else if((vt<0||Yt<0||ie<0)&&(vt>0||Yt>0||ie>0))return null;let Ht=vt+Yt+ie;if(Ht===0)return null;let ce=st*(vt*B+Yt*D+ie*et);return(Ht>0?ce<0:ce>0)?null:this.at(ce/Ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wu=new Ae,os=new Yr,ea=new Mi,Tu=new k,na=new k,ia=new k,sa=new k,Fc=new k,ra=new k,Au=new k,oa=new k,Ce=class extends qe{constructor(t=new Ye,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Fc.fromBufferAttribute(d,t),o?ra.addScaledVector(Fc,u):ra.addScaledVector(Fc.sub(e),u))}e.add(ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(ea.containsPoint(os.origin)===!1&&(os.intersectSphere(ea,Tu)===null||os.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(wu.copy(r).invert(),os.copy(t.ray).applyMatrix4(wu),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=v,E=M;S<E;S+=3){let R=a.getX(S),x=a.getX(S+1),T=a.getX(S+2);s=aa(this,g,t,i,c,u,d,R,x,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let p=m,g=y;p<g;p+=3){let v=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);s=aa(this,o,t,i,c,u,d,v,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=v,E=M;S<E;S+=3){let R=S,x=S+1,T=S+2;s=aa(this,g,t,i,c,u,d,R,x,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let p=m,g=y;p<g;p+=3){let v=p,M=p+1,S=p+2;s=aa(this,o,t,i,c,u,d,v,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Wp(n,t,e,i,s,r,o,a){let l;if(t.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;oa.copy(a),oa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:n}}function aa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,na),n.getVertexPosition(l,ia),n.getVertexPosition(c,sa);let u=Wp(n,t,e,i,na,ia,sa,Au);if(u){let d=new k;ki.getBarycoord(Au,na,ia,sa,d),s&&(u.uv=ki.getInterpolatedAttribute(s,a,l,c,d,new zt)),r&&(u.uv1=ki.getInterpolatedAttribute(r,a,l,c,d,new zt)),o&&(u.normal=ki.getInterpolatedAttribute(o,a,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};ki.getNormal(na,ia,sa,f.normal),u.face=f,u.barycoord=d}return u}var ls=class extends _n{constructor(t=null,e=1,i=1,s,r,o,a,l,c=sn,u=sn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class extends xn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new Ae,Eu=new Ae,la=[],Ru=new ti,Xp=new Ae,Rr=new Ce,Cr=new Mi,cs=class extends Ce{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,qs),Ru.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Ru)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,qs),Cr.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Eu.multiplyMatrices(i,qs),Rr.matrixWorld=Eu,Rr.raycast(t,la);for(let o=0,a=la.length;o<a;o++){let l=la[o];l.instanceId=r,l.object=this,e.push(l)}la.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ls(new Float32Array(s*this.count),s,this.count,cl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new Mi,qp=new zt(.5,.5),ca=new k,Vi=class{constructor(t=new Wn,e=new Wn,i=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],m=r[8],y=r[9],p=r[10],g=r[11],v=r[12],M=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,h-u,g-m,E-v).normalize(),s[1].setComponents(c+o,h+u,g+m,E+v).normalize(),s[2].setComponents(c+a,h+d,g+y,E+M).normalize(),s[3].setComponents(c-a,h-d,g-y,E-M).normalize(),i)s[4].setComponents(l,f,p,S).normalize(),s[5].setComponents(c-l,h-f,g-p,E-S).normalize();else if(s[4].setComponents(c-l,h-f,g-p,E-S).normalize(),e===Nn)s[5].setComponents(c+l,h+f,g+p,E+S).normalize();else if(e===js)s[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=qp.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cu=new Ae,La=class n{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Vi),i[s].setFromProjectionMatrix(Cu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Vi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var sr=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Da=new k,Na=new k,Iu=new Ae,Ir=new Yr,ha=new Mi,Oc=new k,Pu=new k,Ua=class extends qe{constructor(t=new Ye,e=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Da.fromBufferAttribute(e,s-1),Na.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Da.distanceTo(Na);t.setAttribute("lineDistance",new _e(i,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;Iu.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(Iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=h,p=m-1;y<p;y+=c){let g=u.getX(y),v=u.getX(y+1),M=ua(this,t,Ir,l,g,v,y);M&&e.push(M)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(h),g=ua(this,t,Ir,l,y,p,m-1);g&&e.push(g)}}else{let h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let y=h,p=m-1;y<p;y+=c){let g=ua(this,t,Ir,l,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=ua(this,t,Ir,l,m-1,h,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ua(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Da.fromBufferAttribute(a,s),Na.fromBufferAttribute(a,r),e.distanceSqToSegment(Da,Na,Oc,Pu)>i)return;Oc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oc);if(!(c<t.near||c>t.far))return{distance:c,point:Pu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Lu=new k,Du=new k,Zr=class extends Ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Lu.fromBufferAttribute(e,s),Du.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lu.distanceTo(Du);t.setAttribute("lineDistance",new _e(i,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Jr=class extends _n{constructor(t=[],e=xs,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kr=class extends _n{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends _n{constructor(t,e,i=Xn,s,r,o,a=sn,l=sn,c,u=yi,d=1){if(u!==yi&&u!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$r=class extends bi{constructor(t,e=Xn,i=xs,s,r,o=sn,a=sn,l,c=yi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mn=class n extends Ye{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function m(y,p,g,v,M,S,E,R,x,T,C){let I=S/x,N=E/T,B=S/2,W=E/2,b=R/2,D=x+1,U=T+1,z=0,et=0,q=new k;for(let J=0;J<U;J++){let st=J*N-W;for(let wt=0;wt<D;wt++){let xt=wt*I-B;q[y]=xt*v,q[p]=st*M,q[g]=b,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[g]=R>0?1:-1,u.push(q.x,q.y,q.z),d.push(wt/x),d.push(1-J/T),z+=1}}for(let J=0;J<T;J++)for(let st=0;st<x;st++){let wt=f+st+D*J,xt=f+st+D*(J+1),at=f+(st+1)+D*(J+1),gt=f+(st+1)+D*J;l.push(wt,xt,gt),l.push(xt,at,gt),et+=6}a.addGroup(h,et,C),h+=et,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hs=class n extends Ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new k,u=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let h=i+d/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wi=class n extends Ye{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],m=0,y=[],p=i/2,g=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(h,2));function v(){let S=new k,E=new k,R=0,x=(e-t)/i;for(let T=0;T<=r;T++){let C=[],I=T/r,N=I*(e-t)+t;for(let B=0;B<=s;B++){let W=B/s,b=W*l+a,D=Math.sin(b),U=Math.cos(b);E.x=N*D,E.y=-I*i+p,E.z=N*U,d.push(E.x,E.y,E.z),S.set(D,x,U).normalize(),f.push(S.x,S.y,S.z),h.push(W,1-I),C.push(m++)}y.push(C)}for(let T=0;T<s;T++)for(let C=0;C<r;C++){let I=y[C][T],N=y[C+1][T],B=y[C+1][T+1],W=y[C][T+1];(t>0||C!==0)&&(u.push(I,N,W),R+=3),(e>0||C!==r-1)&&(u.push(N,B,W),R+=3)}c.addGroup(g,R,0),g+=R}function M(S){let E=m,R=new zt,x=new k,T=0,C=S===!0?t:e,I=S===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*I,0),f.push(0,I,0),h.push(.5,.5),m++;let N=m;for(let B=0;B<=s;B++){let b=B/s*l+a,D=Math.cos(b),U=Math.sin(b);x.x=C*U,x.y=p*I,x.z=C*D,d.push(x.x,x.y,x.z),f.push(0,I,0),R.x=D*.5+.5,R.y=U*.5*I+.5,h.push(R.x,R.y),m++}for(let B=0;B<s;B++){let W=E+B,b=N+B;S===!0?u.push(b,b+1,W):u.push(b+1,b,W),T+=3}c.addGroup(g,T,S===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var jr=class n extends Ye{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new k,S=new k,E=new k;for(let R=0;R<e.length;R+=3)h(e[R+0],M),h(e[R+1],S),h(e[R+2],E),l(M,S,E,v)}function l(v,M,S,E){let R=E+1,x=[];for(let T=0;T<=R;T++){x[T]=[];let C=v.clone().lerp(S,T/R),I=M.clone().lerp(S,T/R),N=R-T;for(let B=0;B<=N;B++)B===0&&T===R?x[T][B]=C:x[T][B]=C.clone().lerp(I,B/N)}for(let T=0;T<R;T++)for(let C=0;C<2*(R-T)-1;C++){let I=Math.floor(C/2);C%2===0?(f(x[T][I+1]),f(x[T+1][I]),f(x[T][I])):(f(x[T][I+1]),f(x[T+1][I+1]),f(x[T+1][I]))}}function c(v){let M=new k;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(v),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function u(){let v=new k;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let S=p(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(S,1-E)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){let M=o[v+0],S=o[v+2],E=o[v+4],R=Math.max(M,S,E),x=Math.min(M,S,E);R>.9&&x<.1&&(M<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function h(v,M){let S=v*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function m(){let v=new k,M=new k,S=new k,E=new k,R=new zt,x=new zt,T=new zt;for(let C=0,I=0;C<r.length;C+=9,I+=6){v.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),R.set(o[I+0],o[I+1]),x.set(o[I+2],o[I+3]),T.set(o[I+4],o[I+5]),E.copy(v).add(M).add(S).divideScalar(3);let N=p(E);y(R,I+0,v,N),y(x,I+2,M,N),y(T,I+4,S,N)}}function y(v,M,S,E){E<0&&v.x===1&&(o[M]=v.x-1),S.x===0&&S.z===0&&(o[M]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new zt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new k,s=[],r=[],o=[],a=new k,l=new Ae;for(let h=0;h<=t;h++){let m=h/t;s[h]=this.getTangentAt(m,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(xe(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,m))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(xe(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],h*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},rr=class extends En{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fa=class extends rr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Nu=new k,Uu=new k,zc=new Ah,Bc=new Ah,kc=new Ah,Oa=class extends En{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new k){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Uu.subVectors(s[0],s[1]).add(s[0]),c=Uu);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Nu),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),h),y=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),zc.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,m,y,p),Bc.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,m,y,p),kc.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Bc.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),kc.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(zc.calc(l),Bc.calc(l),kc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Yp(n,t){let e=1-n;return e*e*t}function Zp(n,t){return 2*(1-n)*n*t}function Jp(n,t){return n*n*t}function Ur(n,t,e,i){return Yp(n,t)+Zp(n,e)+Jp(n,i)}function Kp(n,t){let e=1-n;return e*e*e*t}function $p(n,t){let e=1-n;return 3*e*e*n*t}function Qp(n,t){return 3*(1-n)*n*n*t}function jp(n,t){return n*n*n*t}function Fr(n,t,e,i,s){return Kp(n,t)+$p(n,e)+Qp(n,i)+jp(n,s)}var to=class extends En{constructor(t=new zt,e=new zt,i=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends En{constructor(t=new k,e=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new k){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y),Fr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends En{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends En{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends En{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends En{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Fu(a,l.x,c.x,u.x,d.x),Fu(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:Fa,CatmullRomCurve3:Oa,CubicBezierCurve:to,CubicBezierCurve3:za,EllipseCurve:rr,LineCurve:eo,LineCurve3:Ba,QuadraticBezierCurve:no,QuadraticBezierCurve3:ka,SplineCurve:io}),Ga=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ou[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},so=class extends Ga{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new eo(this.currentPoint.clone(),new zt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new no(this.currentPoint.clone(),new zt(t,e),new zt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new to(this.currentPoint.clone(),new zt(t,e),new zt(i,s),new zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new io(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new rr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},or=class extends so{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new so().fromJSON(s))}return this}};function tm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Nd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=rm(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let u=a,d=l;for(let f=e;f<s;f+=e){let h=n[f],m=n[f+1];h<a&&(a=h),m<l&&(l=m),h>u&&(u=h),m>d&&(d=m)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return ro(r,o,e,a,l,c,0),o}function Nd(n,t,e,i,s){let r;if(s===gm(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=zu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=zu(o/i|0,n[o],n[o+1],r);return r&&ar(r,r.next)&&(ao(r),r=r.next),r}function us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ar(e,e.next)||He(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ro(n,t,e,i,s,r,o){if(!n)return;!o&&r&&hm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?nm(n,i,s,r):em(n)){t.push(l.i,n.i,c.i),ao(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=im(us(n),t),ro(n,t,e,i,s,r,2)):o===2&&sm(n,t,e,i,s,r):ro(us(n),t,e,i,s,r,1);break}}}function em(n){let t=n.prev,e=n,i=n.next;if(He(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),h=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=h&&Pr(s,a,r,l,o,c,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nm(n,t,e,i){let s=n.prev,r=n,o=n.next;if(He(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,l,c),m=Math.min(u,d,f),y=Math.max(a,l,c),p=Math.max(u,d,f),g=qc(h,m,t,e,i),v=qc(y,p,t,e,i),M=n.prevZ,S=n.nextZ;for(;M&&M.z>=g&&S&&S.z<=v;){if(M.x>=h&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Pr(a,u,l,d,c,f,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=h&&S.x<=y&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Pr(a,u,l,d,c,f,S.x,S.y)&&He(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=g;){if(M.x>=h&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Pr(a,u,l,d,c,f,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=v;){if(S.x>=h&&S.x<=y&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Pr(a,u,l,d,c,f,S.x,S.y)&&He(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function im(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ar(i,s)&&Fd(i,e,e.next,s)&&oo(i,s)&&oo(s,i)&&(t.push(i.i,e.i,s.i),ao(e),ao(e.next),e=n=s),e=e.next}while(e!==n);return us(e)}function sm(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fm(o,a)){let l=Od(o,a);o=us(o,o.next),l=us(l,l.next),ro(o,t,e,i,s,r,0),ro(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function rm(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Nd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(dm(c))}s.sort(om);for(let r=0;r<s.length;r++)e=am(s[r],e);return e}function om(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function am(n,t){let e=lm(n,t);if(!e)return t;let i=Od(e,n);return us(i,i.next),us(e,e.next)}function lm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(ar(n,e))return e;do{if(ar(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ud(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);oo(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&cm(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function cm(n,t){return He(n.prev,n,t.prev)<0&&He(t.next,n,n.next)<0}function hm(n,t,e,i){let s=n;do s.z===0&&(s.z=qc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,um(s)}function um(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function qc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function dm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ud(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Pr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Ud(n,t,e,i,s,r,o,a)}function fm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!pm(n,t)&&(oo(n,t)&&oo(t,n)&&mm(n,t)&&(He(n.prev,n,t.prev)||He(n,t.prev,t))||ar(n,t)&&He(n.prev,n,n.next)>0&&He(t.prev,t,t.next)>0)}function He(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ar(n,t){return n.x===t.x&&n.y===t.y}function Fd(n,t,e,i){let s=fa(He(n,t,e)),r=fa(He(n,t,i)),o=fa(He(e,i,n)),a=fa(He(e,i,t));return!!(s!==r&&o!==a||s===0&&da(n,e,t)||r===0&&da(n,i,t)||o===0&&da(e,n,i)||a===0&&da(e,t,i))}function da(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fa(n){return n>0?1:n<0?-1:0}function pm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Fd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function oo(n,t){return He(n.prev,n,n.next)<0?He(n,t,n.next)>=0&&He(n,n.prev,t)>=0:He(n,t,n.prev)<0||He(n,n.next,t)<0}function mm(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Od(n,t){let e=Yc(n.i,n.x,n.y),i=Yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zu(n,t,e,i){let s=Yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ao(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gm(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zc=class{static triangulate(t,e,i=2){return tm(t,e,i)}},$s=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Bu(t),ku(i,t);let o=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ku(i,e[l]);let a=Zc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Bu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ku(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ds=class n extends jr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var fs=class n extends jr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},ei=class n extends Ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let v=g*f-o;for(let M=0;M<c;M++){let S=M*d-r;m.push(S,-v,0),y.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let M=v+c*g,S=v+c*(g+1),E=v+1+c*(g+1),R=v+1+c*g;h.push(M,S,R),h.push(S,E,R)}this.setIndex(h),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},lo=class n extends Ye{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,f=(e-t)/s,h=new k,m=new zt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let g=r+p/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(h.x/e+1)/2,m.y=(h.y/e+1)/2,u.push(m.x,m.y)}d+=f}for(let y=0;y<s;y++){let p=y*(i+1);for(let g=0;g<i;g++){let v=g+p,M=v,S=v+i+1,E=v+i+2,R=v+1;a.push(M,S,R),a.push(S,E,R)}}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},co=class n extends Ye{constructor(t=new or([new zt(0,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(o,2));function c(u){let d=s.length/3,f=u.extractPoints(e),h=f.shape,m=f.holes;$s.isClockWise(h)===!1&&(h=h.reverse());for(let p=0,g=m.length;p<g;p++){let v=m[p];$s.isClockWise(v)===!0&&(m[p]=v.reverse())}let y=$s.triangulateShape(h,m);for(let p=0,g=m.length;p<g;p++){let v=m[p];h=h.concat(v)}for(let p=0,g=h.length;p<g;p++){let v=h[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,g=y.length;p<g;p++){let v=y[p],M=v[0]+d,S=v[1]+d,E=v[2]+d;i.push(M,S,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xm(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function xm(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Hi=class n extends Ye{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new k,f=new k,h=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){let v=[],M=g/i,S=o+M*a,E=t*Math.cos(S),R=Math.sqrt(t*t-E*E),x=0;g===0&&o===0?x=.5/e:g===i&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let C=T/e,I=s+C*r;d.x=-R*Math.cos(I),d.y=E,d.z=R*Math.sin(I),m.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(C+x,1-M),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let M=u[g][v+1],S=u[g][v],E=u[g+1][v],R=u[g+1][v+1];(g!==0||o>0)&&h.push(M,S,R),(g!==i-1||l<Math.PI)&&h.push(S,E,R)}this.setIndex(h),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function vs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Gu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Gu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=vs(n[e]);for(let s in i)t[s]=i[s]}return t}function Gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _m(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Eh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var zd={clone:vs,merge:pn},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new re().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Va=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dn=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ha=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wa=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ys(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function pa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Wi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends Wi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,a=2*e-i;break;case Xc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:o=t,l=2*i-e;break;case Xc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(i-e)/(s-e),y=m*m,p=y*m,g=-f*p+2*f*y-f*m,v=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*m+1,M=(-1-h)*p+(1.5+h)*y+.5*m,S=h*p-h*y;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+v*o[c+E]+M*o[l+E]+S*o[d+E];return r}},qa=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},Ya=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Za=class extends Wi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(i-e)/(s-e),y=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*m;return r}let f=a*2,h=t-1;for(let m=0;m!==a;++m){let y=o[c+m],p=o[l+m],g=h*f+m*2,v=d[g],M=d[g+1],S=t*f+m*2,E=u[S],R=u[S+1],x=Sm(i,e,v,E,s);r[m]=Bd(x,y,M,R,p)}return r}};function Bd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Mm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Sm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Bd(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Mm(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Rn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),pa(t.settings)&&(i.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Za(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break;case Vc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;pa(this.settings)&&(Vu(this.settings.inTangents,t),Vu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;pa(this.settings)&&(Hu(this.settings.inTangents,t),Hu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){oe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&dp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let m=0;m!==i;++m){let y=e[d+m];if(y!==e[f+m]||y!==e[h+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,pa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Hu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ra;var Xi=class extends Rn{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Or;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};Ja.prototype.ValueTypeName="color";var Ka=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};Ka.prototype.ValueTypeName="number";var $a=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ho=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Rn{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Or;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Rn{constructor(t,e,i,s){super(t,e,i,s)}};Qa.prototype.ValueTypeName="vector";var ja=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],m=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kd=new ja,tl=class{constructor(t){this.manager=t!==void 0?t:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=class extends qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fo=class extends uo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gc=new Ae,Wu=new k,Xu=new k,el=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ma=new k,ga=new vn,$n=new k,po=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ma,ga,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ma,ga,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new k,qu=new zt,Yu=new zt,gn=class extends po{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mo=class extends po{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jc=class extends el{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zs=-90,Js=1,lr=class extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Zs,Js,t,e);s.layers=this.layers,this.add(s);let r=new gn(Zs,Js,t,e);r.layers=this.layers,this.add(r);let o=new gn(Zs,Js,t,e);o.layers=this.layers,this.add(o);let a=new gn(Zs,Js,t,e);a.layers=this.layers,this.add(a);let l=new gn(Zs,Js,t,e);l.layers=this.layers,this.add(l);let c=new gn(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},nl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Rh="\\[\\]\\.:\\/",bm=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",wm="[^"+Rh.replace("\\.","")+"]",Tm=/((?:WC+[\/:])*)/.source.replace("WC",Ch),Am=/(WCOD+)?/.source.replace("WCOD",wm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Cm=new RegExp("^"+Tm+Am+Em+Rm+"$"),Im=["material","materials","bones","map"],Kc=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(t){let e=Cm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Kc;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);var $c=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Ih(n,t,e,i){let s=Pm(i);switch(e){case gh:return n*t;case cl:return n*t/s.components*s.byteLength;case hl:return n*t/s.components*s.byteLength;case Zi:return n*t*2/s.components*s.byteLength;case ul:return n*t*2/s.components*s.byteLength;case xh:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case dl:return n*t*4/s.components*s.byteLength;case yo:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(n,8)*Math.max(t,8)/2;case xl:case _l:case vl:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:case bo:case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ol:case zl:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case kl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wo:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pm(n){switch(n){case Sn:case dh:return{byteLength:1,components:1};case dr:case fh:case qn:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case Xn:case ol:case Fn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zm(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){let m=d[f],y=d[h];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){let y=d[h];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
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
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
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
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
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
#endif`,jm=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,F0=`uniform sampler2D dfgLUT;
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
}`,O0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
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
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zg=`varying vec2 vUv;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform float backgroundBlurriness;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
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
}`,Xg=`#if DEPTH_PACKING == 3200
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
}`,qg=`#define DISTANCE
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
}`,Yg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Qg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,tx=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,sx=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,ox=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,lx=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,ux=`#define TOON
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
}`,dx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Bm,alphahash_pars_fragment:km,alphamap_fragment:Gm,alphamap_pars_fragment:Vm,alphatest_fragment:Hm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:Ym,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:Km,bsdfs:$m,iridescence_fragment:Qm,bumpmap_pars_fragment:jm,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:d0,emissivemap_pars_fragment:f0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:x0,envmap_pars_fragment:_0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:I0,envmap_vertex:v0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:b0,fog_pars_fragment:w0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:P0,lights_toon_pars_fragment:L0,lights_phong_fragment:D0,lights_phong_pars_fragment:N0,lights_physical_fragment:U0,lights_physical_pars_fragment:F0,lights_fragment_begin:O0,lights_fragment_maps:z0,lights_fragment_end:B0,lightprobes_pars_fragment:k0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:Z0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:K0,morphinstance_vertex:$0,morphcolor_vertex:Q0,morphnormal_vertex:j0,morphtarget_pars_vertex:tg,morphtarget_vertex:eg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:dg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:xg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Sg,shadowmask_pars_fragment:bg,skinbase_vertex:wg,skinning_pars_vertex:Tg,skinning_vertex:Ag,skinnormal_vertex:Eg,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ng,uv_pars_vertex:Ug,uv_vertex:Fg,worldpos_vertex:Og,background_vert:zg,background_frag:Bg,backgroundCube_vert:kg,backgroundCube_frag:Gg,cube_vert:Vg,cube_frag:Hg,depth_vert:Wg,depth_frag:Xg,distance_vert:qg,distance_frag:Yg,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:Kg,linedashed_frag:$g,meshbasic_vert:Qg,meshbasic_frag:jg,meshlambert_vert:tx,meshlambert_frag:ex,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:xx},Dt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},si={basic:{uniforms:pn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:pn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:pn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:pn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:pn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:pn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:pn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:pn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:pn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:pn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:pn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:pn([Dt.common,Dt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:pn([Dt.lights,Dt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};si.physical={uniforms:pn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Xl={r:0,b:0,g:0},_x=new Ae,hf=new re;hf.set(-1,0,0,0,1,0,0,0,1);function yx(n,t,e,i,s,r){let o=new ae(0),a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let S=v.backgroundBlurriness>0;M=t.get(M,S)}return M}function m(v){let M=!1,S=h(v);S===null?p(o,a):S&&S.isColor&&(p(S,1),M=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,M){let S=h(M);S&&S.isCubeTexture?(c===void 0&&(c=new Ce(new Mn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:vs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hf),c.material.toneMapped=ye.getTransfer(S.colorSpace)!==Re,(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ce(new ei(2,2),new Un({name:"BackgroundMaterial",uniforms:vs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ye.getTransfer(S.colorSpace)!==Re,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Xl,Eh(n)),e.buffers.color.setClear(Xl.r,Xl.g,Xl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:y,dispose:g}}function vx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(N,B,W,b,D){let U=!1,z=d(N,b,W,B);r!==z&&(r=z,c(r.object)),U=h(N,b,W,D),U&&m(N,b,W,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(N,B,W,b),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,B,W,b){let D=b.wireframe===!0,U=i[B.id];U===void 0&&(U={},i[B.id]=U);let z=N.isInstancedMesh===!0?N.id:0,et=U[z];et===void 0&&(et={},U[z]=et);let q=et[W.id];q===void 0&&(q={},et[W.id]=q);let J=q[D];return J===void 0&&(J=f(l()),q[D]=J),J}function f(N){let B=[],W=[],b=[];for(let D=0;D<e;D++)B[D]=0,W[D]=0,b[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:b,object:N,attributes:{},index:null}}function h(N,B,W,b){let D=r.attributes,U=B.attributes,z=0,et=W.getAttributes();for(let q in et)if(et[q].location>=0){let st=D[q],wt=U[q];if(wt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),st===void 0||st.attribute!==wt||wt&&st.data!==wt.data)return!0;z++}return r.attributesNum!==z||r.index!==b}function m(N,B,W,b){let D={},U=B.attributes,z=0,et=W.getAttributes();for(let q in et)if(et[q].location>=0){let st=U[q];st===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(st=N.instanceColor));let wt={};wt.attribute=st,st&&st.data&&(wt.data=st.data),D[q]=wt,z++}r.attributes=D,r.attributesNum=z,r.index=b}function y(){let N=r.newAttributes;for(let B=0,W=N.length;B<W;B++)N[B]=0}function p(N){g(N,0)}function g(N,B){let W=r.newAttributes,b=r.enabledAttributes,D=r.attributeDivisors;W[N]=1,b[N]===0&&(n.enableVertexAttribArray(N),b[N]=1),D[N]!==B&&(n.vertexAttribDivisor(N,B),D[N]=B)}function v(){let N=r.newAttributes,B=r.enabledAttributes;for(let W=0,b=B.length;W<b;W++)B[W]!==N[W]&&(n.disableVertexAttribArray(W),B[W]=0)}function M(N,B,W,b,D,U,z){z===!0?n.vertexAttribIPointer(N,B,W,D,U):n.vertexAttribPointer(N,B,W,b,D,U)}function S(N,B,W,b){y();let D=b.attributes,U=W.getAttributes(),z=B.defaultAttributeValues;for(let et in U){let q=U[et];if(q.location>=0){let J=D[et];if(J===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let st=J.normalized,wt=J.itemSize,xt=t.get(J);if(xt===void 0)continue;let at=xt.buffer,gt=xt.type,yt=xt.bytesPerElement,Nt=gt===n.INT||gt===n.UNSIGNED_INT||J.gpuType===ol;if(J.isInterleavedBufferAttribute){let vt=J.data,Yt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,ie=J.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Ht=0;Ht<q.locationSize;Ht++)g(q.location+Ht,vt.meshPerAttribute);N.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ht=0;Ht<q.locationSize;Ht++)p(q.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Ht=0;Ht<q.locationSize;Ht++)M(q.location+Ht,wt/q.locationSize,gt,st,Yt*yt,(ie+wt/q.locationSize*Ht)*yt,Nt)}else{if(J.isInstancedBufferAttribute){for(let vt=0;vt<q.locationSize;vt++)g(q.location+vt,J.meshPerAttribute);N.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<q.locationSize;vt++)p(q.location+vt);n.bindBuffer(n.ARRAY_BUFFER,at);for(let vt=0;vt<q.locationSize;vt++)M(q.location+vt,wt/q.locationSize,gt,st,wt*yt,wt/q.locationSize*vt*yt,Nt)}}else if(z!==void 0){let st=z[et];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(q.location,st);break;case 3:n.vertexAttrib3fv(q.location,st);break;case 4:n.vertexAttrib4fv(q.location,st);break;default:n.vertexAttrib1fv(q.location,st)}}}}v()}function E(){C();for(let N in i){let B=i[N];for(let W in B){let b=B[W];for(let D in b){let U=b[D];for(let z in U)u(U[z].object),delete U[z];delete b[D]}}delete i[N]}}function R(N){if(i[N.id]===void 0)return;let B=i[N.id];for(let W in B){let b=B[W];for(let D in b){let U=b[D];for(let z in U)u(U[z].object),delete U[z];delete b[D]}}delete i[N.id]}function x(N){for(let B in i){let W=i[B];for(let b in W){let D=W[b];if(D[N.id]===void 0)continue;let U=D[N.id];for(let z in U)u(U[z].object),delete U[z];delete D[N.id]}}}function T(N){for(let B in i){let W=i[B],b=N.isInstancedMesh===!0?N.id:0,D=W[b];if(D!==void 0){for(let U in D){let z=D[U];for(let et in z)u(z[et].object),delete z[et];delete D[U]}delete W[b],Object.keys(W).length===0&&delete i[B]}}}function C(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function Mx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Cn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let T=x===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Sn&&x!==Fn&&!T&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:E,samples:R}}function bx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Wn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){let m=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let v=r?0:i,M=v*4,S=g.clippingState||null;l.value=S,S=u(m,f,M,h);for(let E=0;E!==M;++E)S[E]=e[E];g.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,m){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=h+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,S=h;M!==y;++M,S+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Ro=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mn(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ms});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=rn),new lr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Gd=256,wx=3,Tx=20,uf=256,df=16,Ax=3,Ex=new k,Rx=new ae,Yl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new Ce(new Mn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Ex}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,m=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(Rx));let p=new lr(i,s,u);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=m,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gd,wh(t))}_fromTexture(t,e){t.mapping===xs||t.mapping===ur?this._setSize(t.image.length===0?Gd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Vd(t,!1,!1),i=Math.log2(t)-wx;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xs||t.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cx(),this._integrationMaterial=Ix());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/df);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Ax)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(uf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Px());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Vd(n,t,e){return new Ro(n,{minFilter:Ti,generateMipmaps:t,type:qn,colorSpace:zr,depthBuffer:e})}function Co(n,t,e){return new Un({name:n,uniforms:t,vertexShader:fe.cube_vert,fragmentShader:e,side:ln,blending:ms,depthTest:!1,depthWrite:!1})}function Cx(){return Co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uf}u

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
	`)}function Ix(){return Co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

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
	`)}function Px(){return Co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tx}
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
	`)}function Hd(){return Co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wd(){return Co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===il||h===sl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let y=new Ro(m.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,m=h===il||h===sl,y=h===xs||h===ur;if(m||y){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Yl(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new Yl(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===il?f.mapping=xs:h===sl&&(f.mapping=ur),f}function l(f){let h=0,m=6;for(let y=0;y<m;y++)f[y]!==void 0&&h++;return h===m}function c(f){let h=f.target;h.removeEventListener("dispose",c);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Dx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Lr("WebGLRenderer: "+i+" extension not supported."),s}}}function Nx(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let y=r.get(m);y&&(t.remove(y),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function u(m){let y=m.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function d(m){let y=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=y!==null?y.array.length:p.array.length/3-1,M=p.count>=65535?qr:Xr,S=new M(Math.ceil(v/3)*6,1),E=S.array;if(y!==null){let x=y.array;g=y.version;for(let T=0,C=0;T<v;T+=3){let I=x[T+0],N=x[T+1],B=x[T+2];E[C++]=I,E[C++]=N,E[C++]=N,E[C++]=B,E[C++]=B,E[C++]=I}}else{g=p.version;for(let x=0,T=0;x<v;x+=3){let C=x+0,I=x+1,N=x+2;E[T++]=C,E[T++]=I,E[T++]=I,E[T++]=N,E[T++]=N,E[T++]=C}}S.version=g;let R=r.get(m);R&&t.remove(R),r.set(m,S)}function f(m){let y=r.get(m);if(y){let p=m.index;p!==null&&y.version<p.version&&d(m)}else d(m);return r.get(m)}function h(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Ux(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),e.update(f,i,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let y=0;for(let p=0;p<h;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Fx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ox(n,t,e){let i=new WeakMap,s=new Ge;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let C=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;h===!0&&(M=1),m===!0&&(M=2),y===!0&&(M=3);let S=a.attributes.position.count*M,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let R=new Float32Array(S*E*4*d),x=new Gr(R,S,E,d);x.type=Fn,x.needsUpdate=!0;let T=M*4;for(let I=0;I<d;I++){let N=p[I],B=g[I],W=v[I],b=S*E*4*I;for(let D=0;D<N.count;D++){let U=D*T;h===!0&&(s.fromBufferAttribute(N,D),R[b+U+0]=s.x,R[b+U+1]=s.y,R[b+U+2]=s.z,R[b+U+3]=0),m===!0&&(s.fromBufferAttribute(B,D),R[b+U+4]=s.x,R[b+U+5]=s.y,R[b+U+6]=s.z,R[b+U+7]=0),y===!0&&(s.fromBufferAttribute(W,D),R[b+U+8]=s.x,R[b+U+9]=s.y,R[b+U+10]=s.z,R[b+U+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new zt(S,E)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let y=0;y<c.length;y++)h+=c[y];let m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function zx(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Bx={[rh]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function kx(n,t,e,i,s,r){let o=new An(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ye;u.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _e([0,2,0,0,2,0],2));let d=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ce(u,d),h=new mo(-1,1,1,-1,0,1),m=null,y=null,p=!1,g,v=null,M=[],S=!1;this.setSize=function(E,R){o.setSize(E,R),a!==null&&a.setSize(E,R),l!==null&&l.setSize(E,R);for(let x=0;x<M.length;x++){let T=M[x];T.setSize&&T.setSize(E,R)}},this.setEffects=function(E){M=E,S=M.length>0&&M[0].isRenderPass===!0;let R=o.width,x=o.height;M.length>0&&a===null&&(a=new An(R,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new An(R,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&M.some(C=>C.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new bi(R,x),r===!0&&(c.format=Ai,c.type=_s)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let C=0;C<M.length;C++){let I=M[C];I.setSize&&I.setSize(R,x),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(E,R){if(p||E.toneMapping===ni&&M.length===0)return!1;if(v=R,R!==null){let x=R.width,T=R.height;(o.width!==x||o.height!==T)&&this.setSize(x,T)}return S===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=ni,!0},this.hasRenderPass=function(){return S},this.end=function(E,R){E.toneMapping=g,p=!0;let x=o,T=a;for(let C=0;C<M.length;C++){let I=M[C];I.enabled!==!1&&(I.render(E,T,x,R),I.needsSwap!==!1&&(x=T,T=T===a?l:a))}if(m!==E.outputColorSpace||y!==E.toneMapping){m=E.outputColorSpace,y=E.toneMapping,d.defines={},ye.getTransfer(m)===Re&&(d.defines.SRGB_TRANSFER="");let C=Bx[y];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(f,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var ff=new _n,pf=new bi(1,1),mf=new $r(1),gf=new Gr,xf=new Pa,_f=new Jr,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function pr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Jl(n,t){let e=qd[t];e===void 0&&(e=new Int32Array(t),qd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function Hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function Wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function Xx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),je(e,i)}}function qx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,i))return;Zd.set(i),n.uniformMatrix3fv(this.addr,!1,Zd),je(e,i)}}function Yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,i))return;Yd.set(i),n.uniformMatrix4fv(this.addr,!1,Yd),je(e,i)}}function Zx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function Kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function $x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function Qx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function Kl(n){return n.version===0&&(n.compareFunction=vh,n.needsUpdate=!0),n}function n_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Kl(pf):r=ff,e.setTexture2D(t||r,s)}function i_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xf,s)}function s_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Kl(mf):r=_f,e.setTextureCube(t||r,s)}function r_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gf,s)}function o_(n){switch(n){case 5126:return Gx;case 35664:return Vx;case 35665:return Hx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return $x;case 5125:return Qx;case 36294:return jx;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(n,t){n.uniform1fv(this.addr,t)}function l_(n,t){let e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function c_(n,t){let e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function h_(n,t){let e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function u_(n,t){let e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function d_(n,t){let e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function f_(n,t){let e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function p_(n,t){n.uniform1iv(this.addr,t)}function m_(n,t){n.uniform2iv(this.addr,t)}function g_(n,t){n.uniform3iv(this.addr,t)}function x_(n,t){n.uniform4iv(this.addr,t)}function __(n,t){n.uniform1uiv(this.addr,t)}function y_(n,t){n.uniform2uiv(this.addr,t)}function v_(n,t){n.uniform3uiv(this.addr,t)}function M_(n,t){n.uniform4uiv(this.addr,t)}function S_(n,t,e){let i=this.cache,s=t.length,r=Jl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Kl(pf):o=ff;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function b_(n,t,e){let i=this.cache,s=t.length,r=Jl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xf,r[o])}function w_(n,t,e){let i=this.cache,s=t.length,r=Jl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Kl(mf):o=_f;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function T_(n,t,e){let i=this.cache,s=t.length,r=Jl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function A_(n){switch(n){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return x_;case 5125:return __;case 36294:return y_;case 36295:return v_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}var Dh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}},Nh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A_(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function Kd(n,t){n.seq.push(t),n.map[t.id]=t}function E_(n,t,e){let i=n.name,s=i.length;for(Ph.lastIndex=0;;){let r=Ph.exec(i),o=Ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kd(e,c===void 0?new Dh(a,n,t):new Nh(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Uh(a),Kd(e,d)),e=d}}}var fr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);E_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function $d(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var R_=37297,C_=0;function I_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qd=new re;function P_(n){ye._getMatrix(Qd,ye.workingColorSpace,n);let t=`mat3( ${Qd.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(n)){case Br:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+I_(n.getShaderSource(t),a)}else return r}function L_(n,t){let e=P_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var D_={[rh]:"Linear",[oh]:"Reinhard",[ah]:"Cineon",[xo]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function N_(n,t){let e=D_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ql=new k;function U_(){ye.getLuminanceCoefficients(ql);let n=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function O_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function z_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Eo(n){return n!==""}function tf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ef(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(n){return n.replace(B_,k_)}function k_(n,t){let e=fe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Fh(e)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(G_,V_)}function V_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var H_={[ps]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function W_(n){return H_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X_={[ur]:"ENVMAP_MODE_REFRACTION"};function q_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":X_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y_={[sh]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function Z_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Y_[n.combine]||"ENVMAP_BLENDING_NONE"}function J_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=W_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=q_(e),d=Z_(e),f=F_(e),h=O_(r),m=s.createProgram(),y,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Eo).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(y=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?fe.tonemapping_pars_fragment:"",e.toneMapping!==ni?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,L_("linearToOutputTexel",e.outputColorSpace),U_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),o=Fh(o),o=tf(o,e),o=ef(o,e),a=Fh(a),a=tf(a,e),a=ef(a,e),o=nf(o),a=nf(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+y+o,M=g+p+a,S=$d(s,s.VERTEX_SHADER,v),E=$d(s,s.FRAGMENT_SHADER,M);s.attachShader(m,S),s.attachShader(m,E),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",B=s.getShaderInfoLog(S)||"",W=s.getShaderInfoLog(E)||"",b=N.trim(),D=B.trim(),U=W.trim(),z=!0,et=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,E);else{let q=jd(s,S,"vertex"),J=jd(s,E,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+b+`
`+q+`
`+J)}else b!==""?jt("WebGLProgram: Program Info Log:",b):(D===""||U==="")&&(et=!1);et&&(I.diagnostics={runnable:z,programLog:b,vertexShader:{log:D,prefix:y},fragmentShader:{log:U,prefix:p}})}s.deleteShader(S),s.deleteShader(E),x=new fr(s,m),T=z_(s,m)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,R_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}var K_=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zh(t),e.set(t,i)),i}},zh=class{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}};function $_(n){return n===Zi||n===bo||n===wo}function Q_(n,t,e,i,s,r){let o=new Vr,a=new Oh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,T,C,I,N,B){let W=I.fog,b=N.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||D,U),et=f[x.type],q=i.precision;x.precision!==null&&(q=i.getMaxPrecision(x.precision),q!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let J=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,st=J!==void 0?J.length:0,wt=0;b.morphAttributes.position!==void 0&&(wt=1),b.morphAttributes.normal!==void 0&&(wt=2),b.morphAttributes.color!==void 0&&(wt=3);let xt,at,gt,yt;if(et){let Ct=si[et];xt=Ct.vertexShader,at=Ct.fragmentShader}else{xt=x.vertexShader,at=x.fragmentShader;let Ct=a.getVertexShaderStage(x),we=a.getFragmentShaderStage(x);a.update(x,Ct,we),gt=Ct.id,yt=we.id}let Nt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Yt=N.isInstancedMesh===!0,ie=N.isBatchedMesh===!0,Ht=!!x.map,ce=!!x.matcap,le=!!z,te=le&&z.isPMREMTexture===!0,$=!!x.aoMap,ct=!!x.lightMap,Ft=!!x.bumpMap&&x.wireframe===!1,Gt=!!x.normalMap,Jt=!!x.displacementMap,he=!!x.emissiveMap,Ee=!!x.metalnessMap,Pe=!!x.roughnessMap,Le=x.anisotropy>0,X=x.clearcoat>0,ve=x.diffuseRoughness>0,ne=x.dispersion>0,ue=x.retroreflectivity>0,bt=x.iridescence>0,De=x.sheen>0,Ut=x.transmission>0,Vt=Le&&!!x.anisotropyMap,L=X&&!!x.clearcoatMap,w=X&&!!x.clearcoatNormalMap,Y=X&&!!x.clearcoatRoughnessMap,ht=ve&&!!x.diffuseRoughnessMap,lt=bt&&!!x.iridescenceMap,Mt=bt&&!!x.iridescenceThicknessMap,St=De&&!!x.sheenColorMap,K=De&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ot=!!x.specularColorMap,F=!!x.specularIntensityMap,rt=Ut&&!!x.transmissionMap,j=Ut&&!!x.thicknessMap,mt=!!x.gradientMap,dt=!!x.alphaMap,pt=x.alphaTest>0,Tt=!!x.alphaHash,Zt=!!x.extensions,ut=ni;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(ut=n.toneMapping);let It=te?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,se={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:xt,fragmentShader:at,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:ie,batchingColor:ie&&N._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&N.instanceColor!==null,instancingMorph:Yt&&N.morphTexture!==null,outputColorSpace:Nt===null?n.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:ce,envMap:le,envMapMode:le&&z.mapping,envMapPMREM:te,envMapMaxLod:te?It.length-1:null,envMapSize:te?It[0].width:null,aoMap:$,lightMap:ct,bumpMap:Ft,normalMap:Gt,displacementMap:Jt,emissiveMap:he,normalMapObjectSpace:Gt&&x.normalMapType===yd,normalMapTangentSpace:Gt&&x.normalMapType===Hl,packedNormalMap:Gt&&x.normalMapType===Hl&&$_(x.normalMap.format),metalnessMap:Ee,roughnessMap:Pe,anisotropy:Le,anisotropyMap:Vt,clearcoat:X,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:Y,diffuseRoughness:ve,diffuseRoughnessMap:ht,dispersion:ne,retroreflection:ue,iridescence:bt,iridescenceMap:lt,iridescenceThicknessMap:Mt,sheen:De,sheenColorMap:St,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ot,specularIntensityMap:F,transmission:Ut,transmissionMap:rt,thicknessMap:j,gradientMap:mt,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:pt,alphaHash:Tt,combine:x.combine,mapUv:Ht&&h(x.map.channel),aoMapUv:$&&h(x.aoMap.channel),lightMapUv:ct&&h(x.lightMap.channel),bumpMapUv:Ft&&h(x.bumpMap.channel),normalMapUv:Gt&&h(x.normalMap.channel),displacementMapUv:Jt&&h(x.displacementMap.channel),emissiveMapUv:he&&h(x.emissiveMap.channel),metalnessMapUv:Ee&&h(x.metalnessMap.channel),roughnessMapUv:Pe&&h(x.roughnessMap.channel),anisotropyMapUv:Vt&&h(x.anisotropyMap.channel),clearcoatMapUv:L&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&h(x.sheenRoughnessMap.channel),specularMapUv:Z&&h(x.specularMap.channel),specularColorMapUv:ot&&h(x.specularColorMap.channel),specularIntensityMapUv:F&&h(x.specularIntensityMap.channel),transmissionMapUv:rt&&h(x.transmissionMap.channel),thicknessMapUv:j&&h(x.thicknessMap.channel),alphaMapUv:dt&&h(x.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(Gt||Le),vertexNormals:!!b.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!b.attributes.uv&&(Ht||dt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||b.attributes.normal===void 0&&Gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&ye.getTransfer(x.map.colorSpace)===Re,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&ye.getTransfer(x.emissiveMap.colorSpace)===Re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fn,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Zt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&x.extensions.multiDraw===!0||ie)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function y(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),g(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function g(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let T=f[x.type],C;if(T){let I=si[T];C=zd.clone(I.uniforms)}else C=x.uniforms;return C}function M(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new J_(n,T,x,s),c.push(C),u.set(T,C)),C}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function R(){a.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function j_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ty(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function rf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function of(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,y,p,g){let v=n[t];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:g},n[t]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.materialVariant=o(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,h,m,y,p,g,v){v.reversedDepth===!0&&(p=-p);let M=a(f,h,m,y,p,g);m.transmission>0?i.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(f,h,m,y,p,g){let v=a(f,h,m,y,p,g);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,h){e.length>1&&e.sort(f||ty),i.length>1&&i.sort(h||rf),s.length>1&&s.sort(h||rf)}function d(){for(let f=t,h=n.length;f<h;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function ey(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new of,n.set(i,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ny(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new ae};break;case"SpotLight":e={position:new k,direction:new k,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function iy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var sy=0;function ry(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function oy(n){let t=new ny,e=iy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new Ae,o=new Ae;function a(c){let u=0,d=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,m=0,y=0,p=0,g=0,v=0,M=0,S=0,E=0,R=0,x=0,T=0,C=0,I=0;c.sort(ry);for(let B=0,W=c.length;B<W;B++){let b=c[B],D=b.color,U=b.intensity,z=b.distance,et=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Zi?et=b.shadow.map.texture:et=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=D.r*U,d+=D.g*U,f+=D.b*U;else if(b.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(b.sh.coefficients[q],U);I++}else if(b.isSunLight){let q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J=b.shadow,st=e.get(b);st.shadowIntensity=J.intensity,st.shadowBias=J.bias,st.shadowNormalBias=J.normalBias,st.shadowRadius=J.radius,st.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[m]=st,i.sunShadowMap[m]=et;let wt=J.getViewportCount();for(let xt=0;xt<wt;xt++)i.sunShadowMatrix[y+xt]=J.getMatrix(xt),i.sunShadowCascade[y+xt]=J._cascadeData[xt];y+=wt,m++}i.sun[h]=q,h++}else if(b.isDirectionalLight){let q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J=b.shadow,st=e.get(b);st.shadowIntensity=J.intensity,st.shadowBias=J.bias,st.shadowNormalBias=J.normalBias,st.shadowRadius=J.radius,st.shadowMapSize=J.mapSize,i.directionalShadow[p]=st,i.directionalShadowMap[p]=et,i.directionalShadowMatrix[p]=b.shadow.matrix,E++}i.directional[p]=q,p++}else if(b.isSpotLight){let q=t.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(D).multiplyScalar(U),q.distance=z,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,i.spot[v]=q;let J=b.shadow;if(b.map&&(i.spotLightMap[T]=b.map,T++,J.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[v]=J.matrix,b.castShadow){let st=e.get(b);st.shadowIntensity=J.intensity,st.shadowBias=J.bias,st.shadowNormalBias=J.normalBias,st.shadowRadius=J.radius,st.shadowMapSize=J.mapSize,i.spotShadow[v]=st,i.spotShadowMap[v]=et,x++}v++}else if(b.isRectAreaLight){let q=t.get(b);q.color.copy(D).multiplyScalar(U),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),i.rectArea[M]=q,M++}else if(b.isPointLight){let q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){let J=b.shadow,st=e.get(b);st.shadowIntensity=J.intensity,st.shadowBias=J.bias,st.shadowNormalBias=J.normalBias,st.shadowRadius=J.radius,st.shadowMapSize=J.mapSize,st.shadowCameraNear=J.camera.near,st.shadowCameraFar=J.camera.far,i.pointShadow[g]=st,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=b.shadow.matrix,R++}i.point[g]=q,g++}else if(b.isHemisphereLight){let q=t.get(b);q.skyColor.copy(b.color).multiplyScalar(U),q.groundColor.copy(b.groundColor).multiplyScalar(U),i.hemi[S]=q,S++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.sunLength!==h||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==M||N.hemiLength!==S||N.numSunShadows!==m||N.numDirectionalShadows!==E||N.numPointShadows!==R||N.numSpotShadows!==x||N.numSpotMaps!==T||N.numLightProbes!==I)&&(i.sun.length=h,i.directional.length=p,i.spot.length=v,i.rectArea.length=M,i.point.length=g,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,N.sunLength=h,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=M,N.hemiLength=S,N.numSunShadows=m,N.numDirectionalShadows=E,N.numPointShadows=R,N.numSpotShadows=x,N.numSpotMaps=T,N.numLightProbes=I,i.version=sy++)}function l(c,u){let d=0,f=0,h=0,m=0,y=0,p=0,g=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let S=c[v];if(S.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(g),d++}else if(S.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(S.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function af(n){let t=new oy(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ay(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new af(n),t.set(s,[a])):r>=o.length?(a=new af(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`,hy=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],uy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],lf=new Ae,Ao=new k,Lh=new k;function dy(n,t,e){let i=new Vi,s=new zt,r=new zt,o=new Ge,a=new Ha,l=new Wa,c={},u=e.maxTextureSize,d={[Yi]:ln,[ln]:Yi,[fn]:fn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let m=new Ye;m.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ce(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let g=this.type;this.render=function(R,x,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===Ku&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let C=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ms),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=g!==this.type;W&&x.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(D=>D.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,D=R.length;b<D;b++){let U=R[b],z=U.shadow;if(z===void 0){jt("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let et=z.getFrameExtents();s.multiply(et),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,z.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===cr){if(U.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new An(s.x,s.y,{format:Zi,type:qn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new bi(s.x,s.y,Fn),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=yi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn}else U.isPointLight?(z.map=new Ro(s.x),z.map.depthTexture=new $r(s.x,Xn)):(z.map=new An(s.x,s.y),z.map.depthTexture=new bi(s.x,s.y,Xn)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=yi,this.type===ps?(z.map.depthTexture.compareFunction=q?yh:_h,z.map.depthTexture.minFilter=rn,z.map.depthTexture.magFilter=rn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();U.isPointLight!==!0&&z.updateMatrices(U,T);let st=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:T.layers;for(let wt=0;wt<J;wt++){let xt=z.getCamera(wt);if(U.isPointLight){let at=z.camera,gt=z.matrix,yt=U.distance||at.far;yt!==at.far&&(at.far=yt,at.updateProjectionMatrix()),Ao.setFromMatrixPosition(U.matrixWorld),at.position.copy(Ao),Lh.copy(at.position),Lh.add(hy[wt]),at.up.copy(uy[wt]),at.lookAt(Lh),at.updateMatrixWorld(),gt.makeTranslation(-Ao.x,-Ao.y,-Ao.z),lf.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),z._frustum.setFromProjectionMatrix(lf,at.coordinateSystem,at.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,wt),n.clear();else{wt===0&&(n.setRenderTarget(z.map),n.clear());let at=z.getViewport(wt);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),B.viewport(o)}i=z.getFrustum(wt),S(x,T,xt,U,st,this.type)}z.isPointLightShadow!==!0&&this.type===cr&&v(z,T),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(C,I,N)};function v(R,x){let T=t.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null?R.mapPass=new An(s.x,s.y,{format:Zi,type:qn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(x,null,T,f,y,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(x,null,T,h,y,null)}function M(R,x,T,C){let I=null,N=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)I=N;else if(I=T.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=I.uuid,W=x.uuid,b=c[B];b===void 0&&(b={},c[B]=b);let D=b[W];D===void 0&&(D=I.clone(),b[W]=D,x.addEventListener("dispose",E)),I=D}if(I.visible=x.visible,I.wireframe=x.wireframe,C===cr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=n.properties.get(I);B.light=T}return I}function S(R,x,T,C,I,N){if(R.visible===!1)return;if(R.layers.test(I)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===cr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);let b=t.update(R),D=R.material;if(Array.isArray(D)){let U=b.groups;for(let z=0,et=U.length;z<et;z++){let q=U[z],J=D[q.materialIndex];if(J&&J.visible){let st=M(R,J,C,N);R.onBeforeShadow(n,R,x,T,b,st,q),n.renderBufferDirect(T,null,b,st,R,q),R.onAfterShadow(n,R,x,T,b,st,q)}}}else if(D.visible){let U=M(R,D,C,N);R.onBeforeShadow(n,R,x,T,b,U,null),n.renderBufferDirect(T,null,b,U,R,null),R.onAfterShadow(n,R,x,T,b,U,null)}}let W=R.children;for(let b=0,D=W.length;b<D;b++)S(W[b],x,T,C,I,N)}function E(R){R.target.removeEventListener("dispose",E);for(let T in c){let C=c[T],I=R.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}}function fy(n,t){function e(){let F=!1,rt=new Ge,j=null,mt=new Ge(0,0,0,0);return{setMask:function(dt){j!==dt&&!F&&(n.colorMask(dt,dt,dt,dt),j=dt)},setLocked:function(dt){F=dt},setClear:function(dt,pt,Tt,Zt,ut){ut===!0&&(dt*=Zt,pt*=Zt,Tt*=Zt),rt.set(dt,pt,Tt,Zt),mt.equals(rt)===!1&&(n.clearColor(dt,pt,Tt,Zt),mt.copy(rt))},reset:function(){F=!1,j=null,mt.set(-1,0,0,0)}}}function i(){let F=!1,rt=!1,j=null,mt=null,dt=null;return{setReversed:function(pt){if(rt!==pt){let Tt=t.get("EXT_clip_control");pt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),rt=pt;let Zt=dt;dt=null,this.setClear(Zt)}},getReversed:function(){return rt},setTest:function(pt){pt?vt(n.DEPTH_TEST):Yt(n.DEPTH_TEST)},setMask:function(pt){j!==pt&&!F&&(n.depthMask(pt),j=pt)},setFunc:function(pt){if(rt&&(pt=Id[pt]),mt!==pt){switch(pt){case ya:n.depthFunc(n.NEVER);break;case va:n.depthFunc(n.ALWAYS);break;case Ma:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Sa:n.depthFunc(n.EQUAL);break;case ba:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=pt}},setLocked:function(pt){F=pt},setClear:function(pt){dt!==pt&&(dt=pt,rt&&(pt=1-pt),n.clearDepth(pt))},reset:function(){F=!1,j=null,mt=null,dt=null,rt=!1}}}function s(){let F=!1,rt=null,j=null,mt=null,dt=null,pt=null,Tt=null,Zt=null,ut=null;return{setTest:function(It){F||(It?vt(n.STENCIL_TEST):Yt(n.STENCIL_TEST))},setMask:function(It){rt!==It&&!F&&(n.stencilMask(It),rt=It)},setFunc:function(It,se,Ct){(j!==It||mt!==se||dt!==Ct)&&(n.stencilFunc(It,se,Ct),j=It,mt=se,dt=Ct)},setOp:function(It,se,Ct){(pt!==It||Tt!==se||Zt!==Ct)&&(n.stencilOp(It,se,Ct),pt=It,Tt=se,Zt=Ct)},setLocked:function(It){F=It},setClear:function(It){ut!==It&&(n.clearStencil(It),ut=It)},reset:function(){F=!1,rt=null,j=null,mt=null,dt=null,pt=null,Tt=null,Zt=null,ut=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},d={},f={},h=new WeakMap,m=[],y=null,p=!1,g=null,v=null,M=null,S=null,E=null,R=null,x=null,T=new ae(0,0,0),C=0,I=!1,N=null,B=null,W=null,b=null,D=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,et=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=et>=2);let J=null,st={},wt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),at=new Ge().fromArray(wt),gt=new Ge().fromArray(xt);function yt(F,rt,j,mt){let dt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(F,pt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<j;Tt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(rt+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return pt}let Nt={};Nt[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(n.DEPTH_TEST),o.setFunc(Qs),Ft(!1),Gt(Qc),vt(n.CULL_FACE),$(ms);function vt(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Yt(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ie(F,rt){return f[F]!==rt?(n.bindFramebuffer(F,rt),f[F]=rt,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=rt),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ht(F,rt){let j=m,mt=!1;if(F){j=h.get(rt),j===void 0&&(j=[],h.set(rt,j));let dt=F.textures;if(j.length!==dt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Tt=dt.length;pt<Tt;pt++)j[pt]=n.COLOR_ATTACHMENT0+pt;j.length=dt.length,mt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,mt=!0);mt&&n.drawBuffers(j)}function ce(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let le={[gs]:n.FUNC_ADD,[Qu]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};le[td]=n.MIN,le[ed]=n.MAX;let te={[nd]:n.ZERO,[id]:n.ONE,[sd]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[ld]:n.DST_COLOR,[od]:n.DST_ALPHA,[rd]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[cd]:n.ONE_MINUS_DST_COLOR,[ad]:n.ONE_MINUS_DST_ALPHA,[ud]:n.CONSTANT_COLOR,[dd]:n.ONE_MINUS_CONSTANT_COLOR,[fd]:n.CONSTANT_ALPHA,[pd]:n.ONE_MINUS_CONSTANT_ALPHA};function $(F,rt,j,mt,dt,pt,Tt,Zt,ut,It){if(F===ms){p===!0&&(Yt(n.BLEND),p=!1);return}if(p===!1&&(vt(n.BLEND),p=!0),F!==$u){if(F!==g||It!==I){if((v!==gs||E!==gs)&&(n.blendEquation(n.FUNC_ADD),v=gs,E=gs),It)switch(F){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:oe("WebGLState: Invalid blending: ",F);break}else switch(F){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case th:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",F);break}M=null,S=null,R=null,x=null,T.set(0,0,0),C=0,g=F,I=It}return}dt=dt||rt,pt=pt||j,Tt=Tt||mt,(rt!==v||dt!==E)&&(n.blendEquationSeparate(le[rt],le[dt]),v=rt,E=dt),(j!==M||mt!==S||pt!==R||Tt!==x)&&(n.blendFuncSeparate(te[j],te[mt],te[pt],te[Tt]),M=j,S=mt,R=pt,x=Tt),(Zt.equals(T)===!1||ut!==C)&&(n.blendColor(Zt.r,Zt.g,Zt.b,ut),T.copy(Zt),C=ut),g=F,I=!1}function ct(F,rt){F.side===fn?Yt(n.CULL_FACE):vt(n.CULL_FACE);let j=F.side===ln;rt&&(j=!j),Ft(j),F.blending===hr&&F.transparent===!1?$(ms):$(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let mt=F.stencilWrite;a.setTest(mt),mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(F){N!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),N=F)}function Gt(F){F!==Zu?(vt(n.CULL_FACE),F!==B&&(F===Qc?n.cullFace(n.BACK):F===Ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Yt(n.CULL_FACE),B=F}function Jt(F){F!==W&&(z&&n.lineWidth(F),W=F)}function he(F,rt,j){F?(vt(n.POLYGON_OFFSET_FILL),(b!==rt||D!==j)&&(b=rt,D=j,o.getReversed()&&(rt=-rt,j=-j),n.polygonOffset(rt,j))):Yt(n.POLYGON_OFFSET_FILL)}function Ee(F){F?vt(n.SCISSOR_TEST):Yt(n.SCISSOR_TEST)}function Pe(F){F===void 0&&(F=n.TEXTURE0+U-1),J!==F&&(n.activeTexture(F),J=F)}function Le(F,rt,j){j===void 0&&(J===null?j=n.TEXTURE0+U-1:j=J);let mt=st[j];mt===void 0&&(mt={type:void 0,texture:void 0},st[j]=mt),(mt.type!==F||mt.texture!==rt)&&(J!==j&&(n.activeTexture(j),J=j),n.bindTexture(F,rt||Nt[F]),mt.type=F,mt.texture=rt)}function X(){let F=st[J];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ve(){try{n.compressedTexImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function ne(){try{n.compressedTexImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function ue(){try{n.texSubImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function bt(){try{n.texSubImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function De(){try{n.compressedTexSubImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function Vt(){try{n.texStorage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function L(){try{n.texStorage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function w(){try{n.texImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function Y(){try{n.texImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function ht(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function lt(F,rt){d[F]!==rt&&(n.pixelStorei(F,rt),d[F]=rt)}function Mt(F){at.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),at.copy(F))}function St(F){gt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),gt.copy(F))}function K(F,rt){let j=c.get(rt);j===void 0&&(j=new WeakMap,c.set(rt,j));let mt=j.get(F);mt===void 0&&(mt=n.getUniformBlockIndex(rt,F.name),n.uniformBlockBinding(rt,mt,mt),j.set(F,mt))}function Z(F,rt,j){let dt=c.get(rt).get(F);l[dt]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,dt,j),l[dt]=j)}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,st={},f={},l={},h=new WeakMap,m=[],y=null,p=!1,g=null,v=null,M=null,S=null,E=null,R=null,x=null,T=new ae(0,0,0),C=0,I=!1,N=null,B=null,W=null,b=null,D=null,at.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Yt,bindFramebuffer:ie,drawBuffers:Ht,useProgram:ce,setBlending:$,setMaterial:ct,setFlipSided:Ft,setCullFace:Gt,setLineWidth:Jt,setPolygonOffset:he,setScissorTest:Ee,activeTexture:Pe,bindTexture:Le,unbindTexture:X,compressedTexImage2D:ve,compressedTexImage3D:ne,texImage2D:w,texImage3D:Y,pixelStorei:lt,getParameter:ht,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Vt,texStorage3D:L,texSubImage2D:ue,texSubImage3D:bt,compressedTexSubImage2D:De,compressedTexSubImage3D:Ut,scissor:Mt,viewport:St,reset:ot}}function py(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap,d=new Set,f,h=new WeakMap,m=new Set,y=new FinalizationRegistry(L=>m.delete(L)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):kr("canvas")}function v(L,w,Y){let ht=1,lt=Vt(L);if((lt.width>Y||lt.height>Y)&&(ht=Y/Math.max(lt.width,lt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Mt=Math.floor(ht*lt.width),St=Math.floor(ht*lt.height);f===void 0&&(f=g(Mt,St));let K=w?g(Mt,St):f;return K.width=Mt,K.height=St,K.getContext("2d").drawImage(L,0,0,Mt,St),jt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+Mt+"x"+St+")."),K}else return"data"in L&&jt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){n.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(L,w,Y,ht,lt,Mt=!1){if(L!==null){if(n[L]!==void 0)return n[L];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let St;ht&&(St=t.get("EXT_texture_norm16"),St||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=w;if(w===n.RED&&(Y===n.FLOAT&&(K=n.R32F),Y===n.HALF_FLOAT&&(K=n.R16F),Y===n.UNSIGNED_BYTE&&(K=n.R8),Y===n.UNSIGNED_SHORT&&St&&(K=St.R16_EXT),Y===n.SHORT&&St&&(K=St.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.R8UI),Y===n.UNSIGNED_SHORT&&(K=n.R16UI),Y===n.UNSIGNED_INT&&(K=n.R32UI),Y===n.BYTE&&(K=n.R8I),Y===n.SHORT&&(K=n.R16I),Y===n.INT&&(K=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(K=n.RG32F),Y===n.HALF_FLOAT&&(K=n.RG16F),Y===n.UNSIGNED_BYTE&&(K=n.RG8),Y===n.UNSIGNED_SHORT&&St&&(K=St.RG16_EXT),Y===n.SHORT&&St&&(K=St.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.RG8UI),Y===n.UNSIGNED_SHORT&&(K=n.RG16UI),Y===n.UNSIGNED_INT&&(K=n.RG32UI),Y===n.BYTE&&(K=n.RG8I),Y===n.SHORT&&(K=n.RG16I),Y===n.INT&&(K=n.RG32I)),w===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(K=n.RGB16UI),Y===n.UNSIGNED_INT&&(K=n.RGB32UI),Y===n.BYTE&&(K=n.RGB8I),Y===n.SHORT&&(K=n.RGB16I),Y===n.INT&&(K=n.RGB32I)),w===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),Y===n.UNSIGNED_INT&&(K=n.RGBA32UI),Y===n.BYTE&&(K=n.RGBA8I),Y===n.SHORT&&(K=n.RGBA16I),Y===n.INT&&(K=n.RGBA32I)),w===n.RGB&&(Y===n.UNSIGNED_SHORT&&St&&(K=St.RGB16_EXT),Y===n.SHORT&&St&&(K=St.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),w===n.RGBA){let Z=Mt?Br:ye.getTransfer(lt);Y===n.FLOAT&&(K=n.RGBA32F),Y===n.HALF_FLOAT&&(K=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(K=Z===Re?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&St&&(K=St.RGBA16_EXT),Y===n.SHORT&&St&&(K=St.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(L,w){let Y;return L?w===null||w===Xn||w===_s?Y=n.DEPTH24_STENCIL8:w===Fn?Y=n.DEPTH32F_STENCIL8:w===dr&&(Y=n.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xn||w===_s?Y=n.DEPTH_COMPONENT24:w===Fn?Y=n.DEPTH_COMPONENT32F:w===dr&&(Y=n.DEPTH_COMPONENT16),Y}function T(L,w){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){let w=new WeakRef(L);i.get(L).__ref=w,m.add(w),y.register(L,w,w)}function I(L){let w=i.get(L).__ref;w!==void 0&&(m.delete(w),y.unregister(w))}function N(L){W(L.target)}function B(L){b(L.target)}function W(L){L.removeEventListener("dispose",N),I(L),U(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&d.delete(L)}function b(L){L.removeEventListener("dispose",B),I(L),et(L)}function D(){for(let L of m){let w=L.deref();w!==void 0&&(w.isRenderTarget===!0?b(w):W(w))}m.clear(),d.clear()}function U(L){let w=i.get(L);if(w.__webglInit===void 0)return;let Y=L.source,ht=h.get(Y);if(ht){let lt=ht[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&z(L),Object.keys(ht).length===0&&h.delete(Y)}i.remove(L)}function z(L){let w=i.get(L);n.deleteTexture(w.__webglTexture);let Y=L.source,ht=h.get(Y);delete ht[w.__cacheKey],o.memory.textures--}function et(L){let w=i.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Y=L.depthTexture;if(Y&&Y.renderTarget===L&&W(Y),L.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(w.__webglFramebuffer[lt]))for(let Mt=0;Mt<w.__webglFramebuffer[lt].length;Mt++)n.deleteFramebuffer(w.__webglFramebuffer[lt][Mt]);else n.deleteFramebuffer(w.__webglFramebuffer[lt]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[lt])}else{if(Array.isArray(w.__webglFramebuffer))for(let lt=0;lt<w.__webglFramebuffer.length;lt++)n.deleteFramebuffer(w.__webglFramebuffer[lt]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let lt=0;lt<w.__webglColorRenderbuffer.length;lt++)w.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[lt]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ht=L.textures;for(let lt=0,Mt=ht.length;lt<Mt;lt++){let St=i.get(ht[lt]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(ht[lt])}i.remove(L)}let q=0;function J(){q=0}function st(){return q}function wt(L){q=L}function xt(){let L=q;return L>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,L}function at(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function gt(L,w){let Y=i.get(L);if(L.isVideoTexture&&De(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let ht=L.image;if(ht===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(Y,L,w);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function yt(L,w){let Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){ct(Y,L,w);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function Nt(L,w){let Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){ct(Y,L,w);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function vt(L,w){let Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Ft(Y,L,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}let Yt={[Aa]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Ea]:n.MIRRORED_REPEAT},ie={[sn]:n.NEAREST,[xd]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Ht={[Md]:n.NEVER,[vh]:n.ALWAYS,[Sd]:n.LESS,[_h]:n.LEQUAL,[bd]:n.EQUAL,[yh]:n.GEQUAL,[wd]:n.GREATER,[Td]:n.NOTEQUAL};function ce(L,w){if(w.type===Fn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===rl||w.magFilter===_o||w.magFilter===Ti||w.minFilter===rn||w.minFilter===rl||w.minFilter===_o||w.minFilter===Ti)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Yt[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Yt[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Yt[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ie[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==_o&&w.minFilter!==Ti||w.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function le(L,w){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N),C(w));let ht=w.source,lt=h.get(ht);lt===void 0&&(lt={},h.set(ht,lt));let Mt=at(w);if(Mt!==L.__cacheKey){lt[Mt]===void 0&&(lt[Mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),lt[Mt].usedTimes++;let St=lt[L.__cacheKey];St!==void 0&&(lt[L.__cacheKey].usedTimes--,St.usedTimes===0&&z(w)),L.__cacheKey=Mt,L.__webglTexture=lt[Mt].texture}return Y}function te(L,w,Y){return Math.floor(Math.floor(L/Y)/w)}function $(L,w,Y,ht){let Mt=L.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Y,ht,w.data);else{Mt.sort((F,rt)=>F.start-rt.start);let St=0;for(let F=1;F<Mt.length;F++){let rt=Mt[St],j=Mt[F],mt=rt.start+rt.count,dt=te(j.start,w.width,4),pt=te(rt.start,w.width,4);j.start<=mt+1&&dt===pt&&te(j.start+j.count-1,w.width,4)===dt?rt.count=Math.max(rt.count,j.start+j.count-rt.start):(++St,Mt[St]=j)}Mt.length=St+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let F=0,rt=Mt.length;F<rt;F++){let j=Mt[F],mt=Math.floor(j.start/4),dt=Math.ceil(j.count/4),pt=mt%w.width,Tt=Math.floor(mt/w.width),Zt=dt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(n.TEXTURE_2D,0,pt,Tt,Zt,ut,Y,ht,w.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function ct(L,w,Y){let ht=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ht=n.TEXTURE_3D);let lt=le(L,w),Mt=w.source;e.bindTexture(ht,L.__webglTexture,n.TEXTURE0+Y);let St=i.get(Mt);if(Mt.version!==St.__version||lt===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ut=ye.getPrimaries(ye.workingColorSpace),It=w.colorSpace===Ei?null:ye.getPrimaries(w.colorSpace),se=w.colorSpace===Ei||ut===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let Z=v(w.image,!1,s.maxTextureSize);Z=Ut(w,Z);let ot=r.convert(w.format,w.colorSpace),F=r.convert(w.type),rt=R(w.internalFormat,ot,F,w.normalized,w.colorSpace,w.isVideoTexture);ce(ht,w);let j,mt=w.mipmaps,dt=w.isVideoTexture!==!0,pt=St.__version===void 0||lt===!0,Tt=Mt.dataReady,Zt=T(w,Z);if(w.isDepthTexture)rt=x(w.format===Ai,w.type),pt&&(dt?e.texStorage2D(n.TEXTURE_2D,1,rt,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,rt,Z.width,Z.height,0,ot,F,null));else if(w.isDataTexture)if(mt.length>0){dt&&pt&&e.texStorage2D(n.TEXTURE_2D,Zt,rt,mt[0].width,mt[0].height);for(let ut=0,It=mt.length;ut<It;ut++)j=mt[ut],dt?Tt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,j.width,j.height,ot,F,j.data):e.texImage2D(n.TEXTURE_2D,ut,rt,j.width,j.height,0,ot,F,j.data);w.generateMipmaps=!1}else dt?(pt&&e.texStorage2D(n.TEXTURE_2D,Zt,rt,Z.width,Z.height),Tt&&$(w,Z,ot,F)):e.texImage2D(n.TEXTURE_2D,0,rt,Z.width,Z.height,0,ot,F,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Zt,rt,mt[0].width,mt[0].height,Z.depth);for(let ut=0,It=mt.length;ut<It;ut++)if(j=mt[ut],w.format!==Cn)if(ot!==null)if(dt){if(Tt)if(w.layerUpdates.size>0){let se=Ih(j.width,j.height,w.format,w.type);for(let Ct of w.layerUpdates){let we=j.data.subarray(Ct*se/j.data.BYTES_PER_ELEMENT,(Ct+1)*se/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Ct,j.width,j.height,1,ot,we)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,j.width,j.height,Z.depth,ot,j.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,rt,j.width,j.height,Z.depth,0,j.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Tt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,j.width,j.height,Z.depth,ot,F,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,rt,j.width,j.height,Z.depth,0,ot,F,j.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{dt&&pt&&e.texStorage2D(n.TEXTURE_2D,Zt,rt,mt[0].width,mt[0].height);for(let ut=0,It=mt.length;ut<It;ut++)j=mt[ut],w.format!==Cn?ot!==null?dt?Tt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,j.width,j.height,ot,j.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,rt,j.width,j.height,0,j.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Tt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,j.width,j.height,ot,F,j.data):e.texImage2D(n.TEXTURE_2D,ut,rt,j.width,j.height,0,ot,F,j.data)}else if(w.isDataArrayTexture)if(dt){if(pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Zt,rt,Z.width,Z.height,Z.depth),Tt)if(w.layerUpdates.size>0){let ut=Ih(Z.width,Z.height,w.format,w.type);for(let It of w.layerUpdates){let se=Z.data.subarray(It*ut/Z.data.BYTES_PER_ELEMENT,(It+1)*ut/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,Z.width,Z.height,1,ot,F,se)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ot,F,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,Z.width,Z.height,Z.depth,0,ot,F,Z.data);else if(w.isData3DTexture)dt?(pt&&e.texStorage3D(n.TEXTURE_3D,Zt,rt,Z.width,Z.height,Z.depth),Tt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ot,F,Z.data)):e.texImage3D(n.TEXTURE_3D,0,rt,Z.width,Z.height,Z.depth,0,ot,F,Z.data);else if(w.isFramebufferTexture){if(pt)if(dt)e.texStorage2D(n.TEXTURE_2D,Zt,rt,Z.width,Z.height);else{let ut=Z.width,It=Z.height;for(let se=0;se<Zt;se++)e.texImage2D(n.TEXTURE_2D,se,rt,ut,It,0,ot,F,null),ut>>=1,It>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),Z.parentNode!==ut){ut.appendChild(Z),d.add(w),ut.onpaint=It=>{let se=It.changedElements;for(let Ct of d)se.includes(Ct.image)&&(Ct.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let se=n.RGBA,Ct=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,se,Ct,we,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(mt.length>0){if(dt&&pt){let ut=Vt(mt[0]);e.texStorage2D(n.TEXTURE_2D,Zt,rt,ut.width,ut.height)}for(let ut=0,It=mt.length;ut<It;ut++)j=mt[ut],dt?Tt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,ot,F,j):e.texImage2D(n.TEXTURE_2D,ut,rt,ot,F,j);w.generateMipmaps=!1}else if(dt){if(pt){let ut=Vt(Z);e.texStorage2D(n.TEXTURE_2D,Zt,rt,ut.width,ut.height)}Tt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,F,Z)}else e.texImage2D(n.TEXTURE_2D,0,rt,ot,F,Z);M(w)&&w.mipmapsAutoUpdate===!0&&S(ht),St.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ft(L,w,Y){if(w.image.length!==6)return;let ht=le(L,w),lt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);let Mt=i.get(lt);if(lt.version!==Mt.__version||ht===!0){e.activeTexture(n.TEXTURE0+Y);let St=ye.getPrimaries(ye.workingColorSpace),K=w.colorSpace===Ei?null:ye.getPrimaries(w.colorSpace),Z=w.colorSpace===Ei||St===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ot=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,rt=[];for(let Ct=0;Ct<6;Ct++)!ot&&!F?rt[Ct]=v(w.image[Ct],!0,s.maxCubemapSize):rt[Ct]=F?w.image[Ct].image:w.image[Ct],rt[Ct]=Ut(w,rt[Ct]);let j=rt[0],mt=r.convert(w.format,w.colorSpace),dt=r.convert(w.type),pt=R(w.internalFormat,mt,dt,w.normalized,w.colorSpace),Tt=w.isVideoTexture!==!0,Zt=Mt.__version===void 0||ht===!0,ut=lt.dataReady,It=T(w,j);ce(n.TEXTURE_CUBE_MAP,w);let se;if(w.isDepthTexture){if(pt=x(w.format===Ai,w.type),Zt)if(Tt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,pt,j.width,j.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pt,j.width,j.height,0,mt,dt,null)}else if(ot){Tt&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,pt,j.width,j.height);for(let Ct=0;Ct<6;Ct++){se=rt[Ct].mipmaps;for(let we=0;we<se.length;we++){let Ve=se[we];w.format!==Cn?mt!==null?Tt?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,0,0,Ve.width,Ve.height,mt,Ve.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,pt,Ve.width,Ve.height,0,Ve.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,0,0,Ve.width,Ve.height,mt,dt,Ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we,pt,Ve.width,Ve.height,0,mt,dt,Ve.data)}}}else{if(se=w.mipmaps,Tt&&Zt){se.length>0&&It++;let Ct=Vt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,pt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(F){Tt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,rt[Ct].width,rt[Ct].height,mt,dt,rt[Ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pt,rt[Ct].width,rt[Ct].height,0,mt,dt,rt[Ct].data);for(let we=0;we<se.length;we++){let bn=se[we].image[Ct].image;Tt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,0,0,bn.width,bn.height,mt,dt,bn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,pt,bn.width,bn.height,0,mt,dt,bn.data)}}else{Tt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,mt,dt,rt[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pt,mt,dt,rt[Ct]);for(let we=0;we<se.length;we++){let Ve=se[we];Tt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,0,0,mt,dt,Ve.image[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,we+1,pt,mt,dt,Ve.image[Ct])}}}M(w)&&w.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),Mt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Gt(L,w,Y,ht,lt,Mt){let St=r.convert(Y.format,Y.colorSpace),K=r.convert(Y.type),Z=R(Y.internalFormat,St,K,Y.normalized,Y.colorSpace),ot=i.get(w),F=i.get(Y);if(F.__renderTarget=w,!ot.__hasExternalTextures){let rt=Math.max(1,w.width>>Mt),j=Math.max(1,w.height>>Mt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,Mt,Z,rt,j,w.depth,0,St,K,null):e.texImage2D(lt,Mt,Z,rt,j,0,St,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),bt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,lt,F.__webglTexture,0,ue(w)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,lt,F.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(L,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){let ht=w.depthTexture,lt=ht&&ht.isDepthTexture?ht.type:null,Mt=x(w.stencilBuffer,lt),St=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;bt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(w),Mt,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(w),Mt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,L)}else{let ht=w.textures;for(let lt=0;lt<ht.length;lt++){let Mt=ht[lt],St=r.convert(Mt.format,Mt.colorSpace),K=r.convert(Mt.type),Z=R(Mt.internalFormat,St,K,Mt.normalized,Mt.colorSpace);bt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(w),Z,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(w),Z,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Z,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(L,w,Y){let ht=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=i.get(w.depthTexture);lt.__renderTarget=w;let Mt=ht?w.depthTexture.image[0]:w.depthTexture.image;(!lt.__webglTexture||Mt.width!==w.width||Mt.height!==w.height)&&(Mt.width=w.width,Mt.height=w.height,w.depthTexture.needsUpdate=!0),ht?vt(w.depthTexture,0):gt(w.depthTexture,0);let St=lt.__webglTexture,K=ue(w),Z=ht?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,ot=w.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===yi)bt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Z,St,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ot,Z,St,0);else if(w.depthTexture.format===Ai)bt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Z,St,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ot,Z,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ee(L){let w=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let ht=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ht){let lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ht.removeEventListener("dispose",lt)};ht.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=ht}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let ht=0;ht<6;ht++)he(w.__webglFramebuffer[ht],L,ht);else L.texture.mipmaps.length>0?he(w.__webglFramebuffer[0],L,0):he(w.__webglFramebuffer,L,0);else if(Y){w.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ht]),w.__webglDepthbuffer[ht]===void 0)w.__webglDepthbuffer[ht]=n.createRenderbuffer(),Jt(w.__webglDepthbuffer[ht],L,!1);else{let lt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,Mt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Jt(w.__webglDepthbuffer,L,!1);else{let lt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(L,w,Y){let ht=i.get(L);w!==void 0&&Gt(ht.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ee(L)}function Le(L){let w=L.texture,Y=i.get(L),ht=i.get(w);L.addEventListener("dispose",B),C(L);let lt=L.textures,Mt=L.isWebGLCubeRenderTarget===!0,St=lt.length>1;if(St||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=w.version,o.memory.textures++),Mt){Y.__webglFramebuffer=[];for(let K=0;K<6;K++)if(w.mipmaps.length>0){Y.__webglFramebuffer[K]=[];for(let Z=0;Z<w.mipmaps.length;Z++)Y.__webglFramebuffer[K][Z]=n.createFramebuffer()}else Y.__webglFramebuffer[K]=n.createFramebuffer()}else{if(w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let K=0;K<w.mipmaps.length;K++)Y.__webglFramebuffer[K]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(St)for(let K=0,Z=lt.length;K<Z;K++){let ot=i.get(lt[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&bt(L)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<lt.length;K++){let Z=lt[K];Y.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);let ot=r.convert(Z.format,Z.colorSpace),F=r.convert(Z.type),rt=R(Z.internalFormat,ot,F,Z.normalized,Z.colorSpace,L.isXRRenderTarget===!0),j=ue(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,rt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Jt(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),ce(n.TEXTURE_CUBE_MAP,w);for(let K=0;K<6;K++)if(w.mipmaps.length>0)for(let Z=0;Z<w.mipmaps.length;Z++)Gt(Y.__webglFramebuffer[K][Z],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else Gt(Y.__webglFramebuffer[K],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(w)?S(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(St){for(let K=0,Z=lt.length;K<Z;K++){let ot=lt[K],F=i.get(ot),rt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(rt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,F.__webglTexture),ce(rt,ot),Gt(Y.__webglFramebuffer,L,ot,n.COLOR_ATTACHMENT0+K,rt,0),M(ot)&&S(rt)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(K=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,ht.__webglTexture),ce(K,w),w.mipmaps.length>0)for(let Z=0;Z<w.mipmaps.length;Z++)Gt(Y.__webglFramebuffer[Z],L,w,n.COLOR_ATTACHMENT0,K,Z);else Gt(Y.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,K,0);M(w)?S(K):w.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Ee(L)}function X(L){let w=L.textures;for(let Y=0,ht=w.length;Y<ht;Y++){let lt=w[Y];if(M(lt)&&lt.mipmapsAutoUpdate===!0){let Mt=E(L),St=i.get(lt).__webglTexture;e.bindTexture(Mt,St),S(Mt),e.unbindTexture()}}}let ve=[];function ne(L){if(L.samples>0){if(bt(L)===!1){let w=L.textures,Y=L.width,ht=L.height,lt=n.COLOR_BUFFER_BIT,Mt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(L),K=w.length>1;if(K)for(let ot=0;ot<w.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ot=0;ot<w.length;ot++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[ot]);let F=i.get(w[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,Y,ht,0,0,Y,ht,lt,n.NEAREST),l===!0&&(ve.length=0,ve.push(n.COLOR_ATTACHMENT0+ot),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ve.push(Mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<w.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,St.__webglColorRenderbuffer[ot]);let F=i.get(w[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,F,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function bt(L){let w=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(L){let w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ut(L,w){let Y=L.colorSpace,ht=L.format,lt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==zr&&Y!==Ei&&(ye.getTransfer(Y)===Re?(ht!==Cn||lt!==Sn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",Y)),w}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=xt,this.resetTextureUnits=J,this.getTextureUnits=st,this.setTextureUnits=wt,this.setTexture2D=gt,this.setTexture2DArray=yt,this.setTexture3D=Nt,this.setTextureCube=vt,this.rebindTextures=Pe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=bt,this.dispose=D}function my(n,t){function e(i,s=Ei){let r,o=ye.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dh)return n.BYTE;if(i===fh)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===ol)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===xh)return n.RGB;if(i===Cn)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===cl)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===ul)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===yo||i===vo||i===Mo||i===So)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===_l||i===yl||i===vl||i===Ml||i===bo||i===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xl||i===_l)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===vl)return r.COMPRESSED_R11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===wl||i===Tl||i===Al||i===El||i===Rl||i===Cl||i===Il||i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===zl||i===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ol)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===Gl||i===wo||i===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:gy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends jn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null,y=typeof XRWebGLBinding<"u",p=new Bh,g={},v=e.getContextAttributes(),M=null,S=null,E=[],R=[],x=new zt,T=null,C=null,I=new gn;I.viewport=new Ge;let N=new gn;N.viewport=new Ge;let B=[I,N],W=new nl,b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=E[at];return gt===void 0&&(gt=new ir,E[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=E[at];return gt===void 0&&(gt=new ir,E[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=E[at];return gt===void 0&&(gt=new ir,E[at]=gt),gt.getHandSpace()};function U(at){let gt=R.indexOf(at.inputSource);if(gt===-1)return;let yt=E[gt];yt!==void 0&&(yt.update(at.inputSource,at.frame,c||o),yt.dispatchEvent({type:at.type,data:at.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",et);for(let at=0;at<E.length;at++){let gt=R[at];gt!==null&&(R[at]=null,E[at].disconnect(gt))}b=null,D=null,p.reset();for(let at in g)delete g[at];if(t.setRenderTarget(M),h=null,f=null,d=null,s=null,S=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(x.width,x.height,!1),C!==null){let at=C.camera;at.fov=C.fov,at.zoom=C.zoom,at.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?Ai:yi,Nt=v.stencil?_s:Xn);let Yt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new An(f.textureWidth,f.textureHeight,{format:Cn,type:Sn,depthTexture:new bi(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new An(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(at){for(let gt=0;gt<at.removed.length;gt++){let yt=at.removed[gt],Nt=R.indexOf(yt);Nt>=0&&(R[Nt]=null,E[Nt].disconnect(yt))}for(let gt=0;gt<at.added.length;gt++){let yt=at.added[gt],Nt=R.indexOf(yt);if(Nt===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=R.length){R.push(yt),Nt=Yt;break}else if(R[Yt]===null){R[Yt]=yt,Nt=Yt;break}if(Nt===-1)break}let vt=E[Nt];vt&&vt.connect(yt)}}function q(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let gt=at.near,yt=at.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),W.near=N.near=I.near=gt,W.far=N.far=I.far=yt,(b!==W.near||D!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),b=W.near,D=W.far),W.layers.mask=at.layers.mask|6,I.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Nt=at.parent,vt=W.cameras;q(W,Nt);for(let Yt=0;Yt<vt.length;Yt++)q(vt[Yt],Nt);W.projectionMatrix.copy(I.projectionMatrix),W.projectionMatrixInverse.copy(I.projectionMatrixInverse),C===null&&at.isPerspectiveCamera&&(C={camera:at,fov:at.fov,zoom:at.zoom}),J(at,W,Nt)};function J(at,gt,yt){yt===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(yt.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=er*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(at){l=at,f!==null&&(f.fixedFoveation=at),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=at)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(at){return g[at]};let st=null;function wt(at,gt){if(u=gt.getViewerPose(c||o),m=gt,u!==null){let yt=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Nt=!1;yt.length!==W.cameras.length&&(W.cameras.length=0,Nt=!0);for(let Ht=0;Ht<yt.length;Ht++){let ce=yt[Ht],le=null;if(h!==null)le=h.getViewport(ce);else{let $=d.getViewSubImage(f,ce);le=$.viewport,Ht===0&&(t.setRenderTargetTextures(S,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(S))}let te=B[Ht];te===void 0&&(te=new gn,te.layers.enable(Ht),te.viewport=new Ge,B[Ht]=te),te.matrix.fromArray(ce.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ce.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(le.x,le.y,le.width,le.height),Ht===0&&(W.matrix.copy(te.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Nt===!0&&W.cameras.push(te)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ht=d.getDepthInformation(yt[0]);Ht&&Ht.isValid&&Ht.texture&&p.init(Ht,s.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Ht=0;Ht<yt.length;Ht++){let ce=yt[Ht].camera;if(ce){let le=g[ce];le||(le=new Qr,g[ce]=le);let te=d.getCameraImage(ce);le.sourceTexture=te}}}}for(let yt=0;yt<E.length;yt++){let Nt=R[yt],vt=E[yt];Nt!==null&&vt!==void 0&&vt.update(Nt,gt,c||o)}st&&st(at,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),m=null}let xt=new cf;xt.setAnimationLoop(wt),this.setAnimationLoop=function(at){st=at},this.dispose=function(){}}},_y=new Ae,yf=new re;yf.set(-1,0,0,0,1,0,0,0,1);function yy(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Eh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,M,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===ln&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===ln&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),M=v.envMap,S=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vy(n,t,e,i){let s={},r={};function o(v,M){let S=M.program;i.uniformBlockBinding(v,S,s[v.id])}function a(v,M){let S=s[v.id];S===void 0&&(m(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",p));let E=M.program;i.updateUBOMapping(v,E);let R=t.render.frame;r[v.id]!==R&&(c(v),r[v.id]=R)}function l(v){let M=n.createBuffer(),S=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(v){let M=s[v.id],S=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,x=S.length;R<x;R++){let T=S[R];if(Array.isArray(T))for(let C=0,I=T.length;C<I;C++)u(T[C],R,C,E);else u(T,R,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,M,S,E){if(f(v,M,S,E)===!0){let R=v.__offset,x=v.value;if(Array.isArray(x)){let T=0;for(let C=0;C<x.length;C++){let I=x[C],N=y(I,!0);d(I,v.__data,T),T+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,v.__data)}}function d(v,M,S){typeof v=="number"||typeof v=="boolean"?M[S]=v:v.isMatrix3?(M[S]=v.elements[0],M[S+1]=v.elements[1],M[S+2]=v.elements[2],M[S+3]=0,M[S+4]=v.elements[3],M[S+5]=v.elements[4],M[S+6]=v.elements[5],M[S+7]=0,M[S+8]=v.elements[6],M[S+9]=v.elements[7],M[S+10]=v.elements[8],M[S+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-S),S):v.toArray(M,S)}function f(v,M,S,E){let R=v.value,x=M+"_"+S;if(Array.isArray(R)){E[x]===void 0&&(E[x]=[]);let T=E[x],C=!1;for(let I=0;I<R.length;I++)h(R[I],T,I)===!0&&(C=!0);return C}return h(R,E,x)}function h(v,M,S){if(M[S]===void 0)return typeof v=="number"||typeof v=="boolean"?M[S]=v:ArrayBuffer.isView(v)?M[S]=v.slice():M[S]=v.clone(),!0;{let E=M[S];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return M[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function m(v){let M=v.uniforms,S=0,E=16;for(let x=0,T=M.length;x<T;x++){let C=Array.isArray(M[x])?M[x]:[M[x]];for(let I=0,N=C.length;I<N;I++){let B=C[I],W=Array.isArray(B.value)?B.value:[B.value],b=Array.isArray(M[x])||Array.isArray(B.value),D=S;for(let z=0,et=W.length;z<et;z++){let q=W[z],J=y(q,b),st=S%E,wt=st%J.boundary,xt=st+wt;S+=wt,xt!==0&&E-xt<J.storage&&(S+=E-xt),z===0&&(D=S),S+=J.storage}let U=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new U((S-D)/Float32Array.BYTES_PER_ELEMENT),B.__offset=D}}let R=S%E;return R>0&&(S+=E-R),v.__size=S,v.__cache={},this}function y(v,M){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(v){let M=v.target;M.removeEventListener("dispose",p),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var My=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function Sy(){return ii===null&&(ii=new ls(My,16,16,Zi,qn),ii.name="DFG_LUT",ii.minFilter=rn,ii.magFilter=rn,ii.wrapS=Qn,ii.wrapT=Qn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Zl=class{constructor(t={}){let{canvas:e=Ed(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Sn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=h,p=new Set([dl,ul,hl]),g=new Set([Sn,Xn,dr,_s,al,ll]),v=new Uint32Array(4),M=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},E=null,R=null,x=[],T=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,B=null,W=null,b=null,D=null;this._outputColorSpace=an;let U=0,z=0,et=null,q=-1,J=null,st=new Ge,wt=new Ge,xt=null,at=new ae(0),gt=0,yt=e.width,Nt=e.height,vt=1,Yt=null,ie=null,Ht=new Ge(0,0,yt,Nt),ce=new Ge(0,0,yt,Nt),le=!1,te=new Vi,$=new La,ct=!1,Ft=!1,Gt=new Ae,Jt=new k,he=new Ge,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Le(){return et===null?vt:1}let X=i;function ve(A,H){return e.getContext(A,H)}let ne,ue,bt,De,Ut,Vt,L,w,Y,ht,lt,Mt,St,K,Z,ot,F,rt,j,mt,dt,pt,Tt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),X===null){let H="webgl2";if(X=ve(H,A),X===null)throw ve(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(A){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),oe("WebGLRenderer: "+A.message),A}function Zt(){ne=new Dx(X),ne.init(),dt=new my(X,ne),ue=new Sx(X,ne,t,dt),bt=new fy(X,ne),ue.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),W=X.createFramebuffer(),b=X.createFramebuffer(),D=X.createFramebuffer(),De=new Fx(X),Ut=new j_,Vt=new py(X,ne,bt,Ut,ue,dt,De),L=new Lx(I),w=new zm(X),pt=new vx(X,w),Y=new Nx(X,w,De,pt),ht=new zx(X,Y,w,pt,De),rt=new Ox(X,ue,Vt),Z=new bx(Ut),lt=new Q_(I,L,ne,ue,pt,Z),Mt=new yy(I,Ut),St=new ey,K=new ay(ne),F=new yx(I,L,bt,ht,m,l),ot=new dy(I,ht,ue),Tt=new vy(X,De,ue,bt),j=new Mx(X,ne,De),mt=new Ux(X,ne,De),De.programs=lt.programs,I.capabilities=ue,I.extensions=ne,I.properties=Ut,I.renderLists=St,I.shadowMap=ot,I.state=bt,I.info=De}y!==Sn&&(C=new kx(y,e.width,e.height,a,s,r));let ut=new kh(I,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(yt,Nt,!1))},this.getSize=function(A){return A.set(yt,Nt)},this.setSize=function(A,H,it=!0){if(ut.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=A,Nt=H,e.width=Math.floor(A*vt),e.height=Math.floor(H*vt),it===!0&&(e.style.width=A+"px",e.style.height=H+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(yt*vt,Nt*vt).floor()},this.setDrawingBufferSize=function(A,H,it){yt=A,Nt=H,vt=it,e.width=Math.floor(A*it),e.height=Math.floor(H*it),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(y===Sn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(st)},this.getViewport=function(A){return A.copy(Ht)},this.setViewport=function(A,H,it,tt){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,H,it,tt),bt.viewport(st.copy(Ht).multiplyScalar(Le()).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,H,it,tt){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,H,it,tt),bt.scissor(wt.copy(ce).multiplyScalar(Le()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){bt.setScissorTest(le=A)},this.setOpaqueSort=function(A){Yt=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,it=!0){let tt=0;if(A){let Q=!1;if(et!==null){let Et=et.texture.format;Q=p.has(Et)}if(Q){let Et=et.texture.type,Bt=g.has(Et),At=F.getClearColor(),Pt=F.getClearAlpha(),qt=At.r,ee=At.g,me=At.b;Bt?(v[0]=qt,v[1]=ee,v[2]=me,v[3]=Pt,X.clearBufferuiv(X.COLOR,0,v)):(M[0]=qt,M[1]=ee,M[2]=me,M[3]=Pt,X.clearBufferiv(X.COLOR,0,M))}else tt|=X.COLOR_BUFFER_BIT}H&&(tt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(tt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&X.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),F.dispose(),St.dispose(),K.dispose(),Vt.dispose(),Ut.dispose(),L.dispose(),ht.dispose(),Y.dispose(),pt.dispose(),Tt.dispose(),lt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ci),ut.removeEventListener("sessionend",Ls),Bn.stop()};function It(A){A.preventDefault(),Sh("WebGLRenderer: Context Lost."),N=!0}function se(){Sh("WebGLRenderer: Context Restored."),N=!1;let A=De.autoReset,H=ot.enabled,it=ot.autoUpdate,tt=ot.needsUpdate,Q=ot.type;Zt(),De.autoReset=A,ot.enabled=H,ot.autoUpdate=it,ot.needsUpdate=tt,ot.type=Q}function Ct(A){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function we(A){let H=A.target;H.removeEventListener("dispose",we),Ve(H)}function Ve(A){bn(A),Ut.remove(A)}function bn(A){let H=Ut.get(A).programs;H!==void 0&&(H.forEach(function(it){lt.releaseProgram(it)}),A.isShaderMaterial&&lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,it,tt,Q,Et){H===null&&(H=Ee);let Bt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,At=pc(A,H,it,tt,Q);bt.setMaterial(tt,Bt);let Pt=it.index,qt=1;if(tt.wireframe===!0){if(Pt=Y.getWireframeAttribute(it),Pt===void 0)return;qt=2}let ee=it.drawRange,me=it.attributes.position,Wt=ee.start*qt,pe=(ee.start+ee.count)*qt;Et!==null&&(Wt=Math.max(Wt,Et.start*qt),pe=Math.min(pe,(Et.start+Et.count)*qt)),Pt!==null?(Wt=Math.max(Wt,0),pe=Math.min(pe,Pt.count)):me!=null&&(Wt=Math.max(Wt,0),pe=Math.min(pe,me.count));let ke=pe-Wt;if(ke<0||ke===1/0)return;pt.setup(Q,tt,At,it,Pt);let Ue,Me=j;if(Pt!==null&&(Ue=w.get(Pt),Me=mt,Me.setIndex(Ue)),Q.isMesh)tt.wireframe===!0?(bt.setLineWidth(tt.wireframeLinewidth*Le()),Me.setMode(X.LINES)):Me.setMode(X.TRIANGLES);else if(Q.isLine){let Ze=tt.linewidth;Ze===void 0&&(Ze=1),bt.setLineWidth(Ze*Le()),Q.isLineSegments?Me.setMode(X.LINES):Q.isLineLoop?Me.setMode(X.LINE_LOOP):Me.setMode(X.LINE_STRIP)}else Q.isPoints?Me.setMode(X.POINTS):Q.isSprite&&Me.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Me.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ze=Q._multiDrawStarts,Xt=Q._multiDrawCounts,Xe=Q._multiDrawCount,Te=Pt?w.get(Pt).bytesPerElement:1,hi=Ut.get(tt).currentProgram.getUniforms();for(let tn=0;tn<Xe;tn++)hi.setValue(X,"_gl_DrawID",tn),Me.render(Ze[tn]/Te,Xt[tn])}else if(Q.isInstancedMesh)Me.renderInstances(Wt,ke,Q.count);else if(it.isInstancedBufferGeometry){let Ze=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Xt=Math.min(it.instanceCount,Ze);Me.renderInstances(Wt,ke,Xt)}else Me.render(Wt,ke)};function Is(A,H,it,tt){B!==null&&A.isNodeMaterial&&B.setObject(tt,A),ct===!0&&Z.setState(A,it,!1),A.transparent===!0&&A.side===fn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Ln(A,H,tt),A.side=Yi,A.needsUpdate=!0,Ln(A,H,tt),A.side=fn):Ln(A,H,tt)}this.compile=function(A,H,it=null){it===null&&(it=A),B!==null&&B.renderStart(A,H,it),R=K.get(it),R.init(H),T.push(R),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),A!==it&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights(),B!==null&&B.updateLights(R.state.lightsArray),Ft=this.localClippingEnabled,ct=Z.init(this.clippingPlanes,Ft),ct===!0&&Z.setGlobalState(this.clippingPlanes,H),B!==null&&ot.render(R.state.shadowsArray,it,H);let tt=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Et=Q.material;if(Et)if(Array.isArray(Et))for(let Bt=0;Bt<Et.length;Bt++){let At=Et[Bt];Is(At,it,H,Q),tt.add(At)}else Is(Et,it,H,Q),tt.add(Et)}),R=T.pop(),B!==null&&B.renderEnd(),tt},this.compileAsync=function(A,H,it=null){let tt=this.compile(A,H,it);return new Promise(Q=>{function Et(){if(tt.forEach(function(Bt){let Pt=Ut.get(Bt).currentProgram;(Pt===void 0||Pt.isReady())&&tt.delete(Bt)}),tt.size===0){Q(A);return}setTimeout(Et,10)}ne.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ps=null;function Pi(A){Ps&&Ps(A)}function ci(){Bn.stop()}function Ls(){Bn.start()}let Bn=new cf;Bn.setAnimationLoop(Pi),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(A){Ps=A,ut.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},ut.addEventListener("sessionstart",ci),ut.addEventListener("sessionend",Ls),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(A,H);let it=ut.enabled===!0&&ut.isPresenting===!0,tt=C!==null&&(et===null||it)&&C.begin(I,et);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(H),H=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,H,et),R=K.get(A,T.length),R.init(H),R.state.textureUnits=Vt.getTextureUnits(),T.push(R),Gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?$.setFromArrayCamera(H):te.setFromProjectionMatrix(Gt,Nn,H.reversedDepth),Ft=this.localClippingEnabled,ct=Z.init(this.clippingPlanes,Ft),E=St.get(A,x.length),E.init(),x.push(E),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Bt=I.xr.getDepthSensingMesh();Bt!==null&&Be(Bt,H,-1/0,I.sortObjects)}Be(A,H,0,I.sortObjects),E.finish(),B!==null&&B.updateLights(R.state.lightsArray),I.sortObjects===!0&&E.sort(Yt,ie),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&F.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),ct===!0&&Z.beginShadows();let Q=R.state.shadowsArray;if(ot.render(Q,A,H),ct===!0&&Z.endShadows(),(tt&&C.hasRenderPass())===!1){let Bt=E.opaque,At=E.transmissive;if(R.setupLights(),H.isArrayCamera){let Pt=H.cameras;if(At.length>0)for(let qt=0,ee=Pt.length;qt<ee;qt++){let me=Pt[qt];Pn(Bt,At,A,me)}Pe&&F.render(A);for(let qt=0,ee=Pt.length;qt<ee;qt++){let me=Pt[qt];ns(E,A,me,me.viewport)}}else At.length>0&&Pn(Bt,At,A,H),Pe&&F.render(A),ns(E,A,H)}et!==null&&z===0&&(Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et)),tt&&C.end(I),A.isScene===!0&&A.onAfterRender(I,A,H),pt.resetDefaultState(),q=-1,J=null,T.pop(),T.length>0?(R=T[T.length-1],Vt.setTextureUnits(R.state.textureUnits),ct===!0&&Z.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,B!==null&&B.renderEnd()};function Be(A,H,it,tt){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){let Bt=H.isArrayCamera?$:te;if(!A.frustumCulled||A.intersectsFrustum(Bt)){tt&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);let At=ht.update(A),Pt=A.material;Pt.visible&&E.push(A,At,Pt,it,he.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){let Bt=H.isArrayCamera?$:te;if(!A.frustumCulled||A.intersectsFrustum(Bt)){let At=ht.update(A),Pt=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),he.copy(At.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Pt)){let qt=At.groups;for(let ee=0,me=qt.length;ee<me;ee++){let Wt=qt[ee],pe=Pt[Wt.materialIndex];pe&&pe.visible&&E.push(A,At,pe,it,he.z,Wt,H)}}else Pt.visible&&E.push(A,At,Pt,it,he.z,null,H)}}}let Et=A.children;for(let Bt=0,At=Et.length;Bt<At;Bt++)Be(Et[Bt],H,it,tt)}function ns(A,H,it,tt){let{opaque:Q,transmissive:Et,transparent:Bt}=A;R.setupLightsView(it),ct===!0&&Z.setGlobalState(I.clippingPlanes,it),tt&&bt.viewport(st.copy(tt)),Q.length>0&&mn(Q,H,it),Et.length>0&&mn(Et,H,it),Bt.length>0&&mn(Bt,H,it),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Pn(A,H,it,tt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[tt.id]===void 0){let Wt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[tt.id]=new An(1,1,{generateMipmaps:!0,type:Wt?qn:Sn,minFilter:Ti,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let Et=R.state.transmissionRenderTarget[tt.id],Bt=tt.viewport||st;Et.setSize(Bt.z*I.transmissionResolutionScale,Bt.w*I.transmissionResolutionScale);let At=I.getRenderTarget(),Pt=I.getActiveCubeFace(),qt=I.getActiveMipmapLevel();I.setRenderTarget(Et),I.getClearColor(at),gt=I.getClearAlpha(),gt<1&&I.setClearColor(16777215,.5),I.clear(),Pe&&F.render(it);let ee=I.toneMapping;I.toneMapping=ni;let me=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),R.setupLightsView(tt),ct===!0&&Z.setGlobalState(I.clippingPlanes,tt),mn(A,it,tt),Vt.updateMultisampleRenderTarget(Et),Vt.updateRenderTargetMipmap(Et),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let pe=0,ke=H.length;pe<ke;pe++){let Ue=H[pe],{object:Me,geometry:Ze,material:Xt,group:Xe}=Ue;if(Xt.side===fn&&Me.layers.test(tt.layers)){let Te=Xt.side;Xt.side=ln,Xt.needsUpdate=!0,Li(Me,it,tt,Ze,Xt,Xe),Xt.side=Te,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Vt.updateMultisampleRenderTarget(Et),Vt.updateRenderTargetMipmap(Et))}I.setRenderTarget(At,Pt,qt),I.setClearColor(at,gt),me!==void 0&&(tt.viewport=me),I.toneMapping=ee}function mn(A,H,it){let tt=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Et=A.length;Q<Et;Q++){let Bt=A[Q],{object:At,geometry:Pt,group:qt}=Bt,ee=Bt.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),At.layers.test(it.layers)&&Li(At,H,it,Pt,ee,qt)}}function Li(A,H,it,tt,Q,Et){B!==null&&Q.isNodeMaterial&&B.setObject(A,Q),A.onBeforeRender(I,H,it,tt,Q,Et),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(I,H,it,tt,A,Et),Q.transparent===!0&&Q.side===fn&&Q.forceSinglePass===!1?(Q.side=ln,Q.needsUpdate=!0,I.renderBufferDirect(it,H,tt,Q,A,Et),Q.side=Yi,Q.needsUpdate=!0,I.renderBufferDirect(it,H,tt,Q,A,Et),Q.side=fn):I.renderBufferDirect(it,H,tt,Q,A,Et),A.onAfterRender(I,H,it,tt,Q,Et)}function br(A){let H=0;for(let it of A)it.texture!==null&&H++;return H}function Ln(A,H,it){H.isScene!==!0&&(H=Ee);let tt=Ut.get(A),Q=R.state.lights,Et=R.state.shadowsArray,Bt=Q.state.version,At=lt.getParameters(A,Q.state,Et,H,it,R.state.lightProbeGridArray),Pt=lt.getProgramCacheKey(At),qt=tt.programs;tt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,tt.fog=H.fog;let ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;tt.envMap=L.get(A.envMap||tt.environment,ee),tt.envMapRotation=tt.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",we),qt=new Map,tt.programs=qt,tt.programVariants=new Map);let me=qt.get(Pt);if(me!==void 0){if(tt.currentProgram===me&&tt.lightsStateVersion===Bt)return Go(A,At),me}else At.uniforms=lt.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,it,At),A.onBeforeCompile(At,I),me=lt.acquireProgram(At,Pt),qt.set(Pt,me),tt.uniforms=At.uniforms;let Wt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Z.uniform),Go(A,At),tt.needsLights=Vo(A),tt.lightsStateVersion=Bt,tt.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.sunLights.value=Q.state.sun,Wt.sunLightShadows.value=Q.state.sunShadow,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Wt.sunShadowCascade.value=Q.state.sunShadowCascade,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.numLightProbeGrids=br(R.state.lightProbeGridArray),tt.currentProgram=me,tt.uniformsList=null,me}function ko(A,H,it,tt,Q){let Et=Ut.get(A),Bt=Et.currentProgram.id+","+tt+","+Q,At=Et.programVariants.get(Bt);return At===void 0?(At=Ln(A,H,it),Et.programVariants.set(Bt,At)):(Et.currentProgram=At,Et.uniformsList=null,Et.outputColorSpace=tt,Et.toneMapping=Q),At}function Ne(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=fr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Go(A,H){let it=Ut.get(A);it.outputColorSpace=H.outputColorSpace,it.batching=H.batching,it.batchingColor=H.batchingColor,it.instancing=H.instancing,it.instancingColor=H.instancingColor,it.instancingMorph=H.instancingMorph,it.skinning=H.skinning,it.morphTargets=H.morphTargets,it.morphNormals=H.morphNormals,it.morphColors=H.morphColors,it.morphTargetsCount=H.morphTargetsCount,it.numClippingPlanes=H.numClippingPlanes,it.numIntersection=H.numClipIntersection,it.vertexAlphas=H.vertexAlphas,it.vertexTangents=H.vertexTangents,it.toneMapping=H.toneMapping}function pc(A,H,it,tt,Q){H.isScene!==!0&&(H=Ee),Vt.resetTextureUnits();let Et=H.fog,Bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?H.environment:null,At=et===null?I.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ye.workingColorSpace,Pt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,qt=L.get(tt.envMap||Bt,Pt),ee=tt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,me=!!it.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Wt=!!it.morphAttributes.position,pe=!!it.morphAttributes.normal,ke=!!it.morphAttributes.color,Ue=ni;tt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ue=I.toneMapping);let Me=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ze=Me!==void 0?Me.length:0,Xt=Ut.get(tt),Xe=R.state.lights;if(ct===!0&&(Ft===!0||A!==J)){let Oe=A===J&&tt.id===q;Z.setState(tt,A,Oe)}let Te=!1,hi=!1;tt.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==Xe.state.version||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==qt||tt.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Z.numPlanes||Xt.numIntersection!==Z.numIntersection)||Xt.vertexAlphas!==ee||Xt.vertexTangents!==me||Xt.morphTargets!==Wt||Xt.morphNormals!==pe||Xt.morphColors!==ke||Xt.morphTargetsCount!==Ze||Xt.numLightProbeGrids!==br(R.state.lightProbeGridArray)?Te=!0:(Xt.outputColorSpace!==At||Xt.toneMapping!==Ue)&&(hi=!0):(Te=!0,Xt.__version=tt.version);let tn=Xt.currentProgram;(Te===!0||hi===!0)&&(tn=hi===!0?ko(tt,H,Q,At,Ue):Ln(tt,H,Q),B&&tt.isNodeMaterial&&B.onUpdateProgram(tt,tn,Xt));let Ns=!1,Jn=!1,ui=!1,Se=tn.getUniforms(),$e=Xt.uniforms;if(bt.useProgram(tn.program)&&(Ns=!0,Jn=!0,ui=!0),tt.id!==q&&(q=tt.id,Jn=!0),Ns||J!==A){bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(X,"projectionMatrix",A.projectionMatrix),Se.setValue(X,"viewMatrix",A.matrixWorldInverse);let Je=Se.map.cameraPosition;Je!==void 0&&Je.setValue(X,Jt.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&Se.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Se.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Jn=!0,ui=!0)}if(Xt.needsLights&&(Xe.state.sunShadowMap.length>0&&Se.setValue(X,"sunShadowMap",Xe.state.sunShadowMap,Vt),Xe.state.directionalShadowMap.length>0&&Se.setValue(X,"directionalShadowMap",Xe.state.directionalShadowMap,Vt),Xe.state.spotShadowMap.length>0&&Se.setValue(X,"spotShadowMap",Xe.state.spotShadowMap,Vt),Xe.state.pointShadowMap.length>0&&Se.setValue(X,"pointShadowMap",Xe.state.pointShadowMap,Vt)),Q.isSkinnedMesh){Se.setOptional(X,Q,"bindMatrix"),Se.setOptional(X,Q,"bindMatrixInverse");let Oe=Q.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Se.setValue(X,"boneTexture",Oe.boneTexture,Vt))}Q.isBatchedMesh&&(Se.setOptional(X,Q,"batchingTexture"),Se.setValue(X,"batchingTexture",Q._matricesTexture,Vt),Se.setOptional(X,Q,"batchingIdTexture"),Se.setValue(X,"batchingIdTexture",Q._indirectTexture,Vt),Se.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Se.setValue(X,"batchingColorTexture",Q._colorsTexture,Vt));let yn=it.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&rt.update(Q,it,tn),(Jn||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,Se.setValue(X,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&H.environment!==null&&($e.envMapIntensity.value=H.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Sy()),Jn){if(Se.setValue(X,"toneMappingExposure",I.toneMappingExposure),Xt.needsLights&&Di($e,ui),Et&&tt.fog===!0&&Mt.refreshFogUniforms($e,Et),Mt.refreshMaterialUniforms($e,tt,vt,Nt,R.state.transmissionRenderTarget[A.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let Oe=S,Je=0;for(let kn of R.state.lightProbeGridArray)kn.texture!==null&&(Oe.textures[Je]=kn.texture,Oe.min[Je]=kn.boundingBox.min,Oe.max[Je]=kn.boundingBox.max,Oe.resolution[Je]=kn.resolution,Je++);for(let kn in Oe)Oe[kn].length=Je;$e.probesSH.value=Oe.textures,$e.probesMin.value=Oe.min,$e.probesMax.value=Oe.max,$e.probesResolution.value=Oe.resolution}fr.upload(X,Ne(Xt),$e,Vt)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(fr.upload(X,Ne(Xt),$e,Vt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Se.setValue(X,"center",Q.center),Se.setValue(X,"modelViewMatrix",Q.modelViewMatrix),Se.setValue(X,"normalMatrix",Q.normalMatrix),Se.setValue(X,"modelMatrix",Q.matrixWorld),tt.uniformsGroups!==void 0){let Oe=tt.uniformsGroups;for(let Je=0,kn=Oe.length;Je<kn;Je++){let Us=Oe[Je];Tt.update(Us,tn),Tt.bind(Us,tn)}}return tn}function Di(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Vo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(A,H,it){let tt=Ut.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Ut.get(A.texture).__webglTexture=H,Ut.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:it,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let it=Ut.get(A);it.__webglFramebuffer=H,it.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,it=0){et=A,U=H,z=it;let tt=null,Q=!1,Et=!1;if(A){let At=Ut.get(A);if(At.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(X.FRAMEBUFFER,At.__webglFramebuffer),st.copy(A.viewport),wt.copy(A.scissor),xt=A.scissorTest,bt.viewport(st),bt.scissor(wt),bt.setScissorTest(xt),q=-1;return}else if(At.__webglFramebuffer===void 0)Vt.setupRenderTarget(A);else if(At.__hasExternalTextures)Vt.rebindTextures(A,Ut.get(A.texture).__webglTexture,Ut.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ee=A.depthTexture;if(At.__boundDepthTexture!==ee){if(ee!==null&&Ut.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(A)}}let Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);let qt=Ut.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[H])?tt=qt[H][it]:tt=qt[H],Q=!0):A.samples>0&&Vt.useMultisampledRTT(A)===!1?tt=Ut.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[it]:tt=qt,st.copy(A.viewport),wt.copy(A.scissor),xt=A.scissorTest}else st.copy(Ht).multiplyScalar(vt).floor(),wt.copy(ce).multiplyScalar(vt).floor(),xt=le;if(it!==0&&(tt=W),bt.bindFramebuffer(X.FRAMEBUFFER,tt)&&bt.drawBuffers(A,tt),bt.viewport(st),bt.scissor(wt),bt.setScissorTest(xt),Q){let At=Ut.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,it)}else if(Et){let At=H;for(let Pt=0;Pt<A.textures.length;Pt++){let qt=Ut.get(A.textures[Pt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Pt,qt.__webglTexture,it,At)}}else if(A!==null&&it!==0){let At=Ut.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,At.__webglTexture,it)}q=-1};function Ds(A){let H=Ut.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=ue.textureFormatReadable(A.format),H.__typeReadable=ue.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,it,tt,Q,Et,Bt,At=0){if(!(A&&A.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Pt=Pt[Bt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){bt.bindFramebuffer(X.FRAMEBUFFER,Pt);try{let qt=A.textures[At],ee=qt.format,me=qt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+At);let Wt=Ds(qt);if(Wt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-tt&&it>=0&&it<=A.height-Q&&X.readPixels(H,it,tt,Q,dt.convert(ee),dt.convert(me),Et)}finally{let qt=et!==null?Ut.get(et).__webglFramebuffer:null;bt.bindFramebuffer(X.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,H,it,tt,Q,Et,Bt,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Pt=Pt[Bt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(H>=0&&H<=A.width-tt&&it>=0&&it<=A.height-Q){bt.bindFramebuffer(X.FRAMEBUFFER,Pt);let qt=A.textures[At],ee=qt.format,me=qt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+At);let Wt=Ds(qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,pe),X.bufferData(X.PIXEL_PACK_BUFFER,Et.byteLength,X.STREAM_READ),X.readPixels(H,it,tt,Q,dt.convert(ee),dt.convert(me),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let ke=et!==null?Ut.get(et).__webglFramebuffer:null;bt.bindFramebuffer(X.FRAMEBUFFER,ke);let Ue=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Cd(X,Ue,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,pe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Et),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(pe),X.deleteSync(Ue),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,it=0){let tt=Math.pow(2,-it),Q=Math.floor(A.image.width*tt),Et=Math.floor(A.image.height*tt),Bt=H!==null?H.x:0,At=H!==null?H.y:0;Vt.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,it,0,0,Bt,At,Q,Et),bt.unbindTexture()},this.copyTextureToTexture=function(A,H,it=null,tt=null,Q=0,Et=0){let Bt,At,Pt,qt,ee,me,Wt,pe,ke,Ue=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(it!==null)Bt=it.max.x-it.min.x,At=it.max.y-it.min.y,Pt=it.isBox3?it.max.z-it.min.z:1,qt=it.min.x,ee=it.min.y,me=it.isBox3?it.min.z:0;else{let Se=Math.pow(2,-Q);Bt=Math.floor(Ue.width*Se),At=Math.floor(Ue.height*Se),A.isDataArrayTexture?Pt=Ue.depth:A.isData3DTexture?Pt=Math.floor(Ue.depth*Se):Pt=1,qt=0,ee=0,me=0}tt!==null?(Wt=tt.x,pe=tt.y,ke=tt.z):(Wt=0,pe=0,ke=0);let Me=dt.convert(H.format),Ze=dt.convert(H.type),Xt;H.isData3DTexture?(Vt.setTexture3D(H,0),Xt=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Vt.setTexture2DArray(H,0),Xt=X.TEXTURE_2D_ARRAY):(Vt.setTexture2D(H,0),Xt=X.TEXTURE_2D),bt.activeTexture(X.TEXTURE0),bt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),bt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),bt.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let Xe=bt.getParameter(X.UNPACK_ROW_LENGTH),Te=bt.getParameter(X.UNPACK_IMAGE_HEIGHT),hi=bt.getParameter(X.UNPACK_SKIP_PIXELS),tn=bt.getParameter(X.UNPACK_SKIP_ROWS),Ns=bt.getParameter(X.UNPACK_SKIP_IMAGES);bt.pixelStorei(X.UNPACK_ROW_LENGTH,Ue.width),bt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ue.height),bt.pixelStorei(X.UNPACK_SKIP_PIXELS,qt),bt.pixelStorei(X.UNPACK_SKIP_ROWS,ee),bt.pixelStorei(X.UNPACK_SKIP_IMAGES,me);let Jn=A.isDataArrayTexture||A.isData3DTexture,ui=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let Se=Ut.get(A),$e=Ut.get(H),yn=Ut.get(Se.__renderTarget),Oe=Ut.get($e.__renderTarget);bt.bindFramebuffer(X.READ_FRAMEBUFFER,yn.__webglFramebuffer),bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Je=0;Je<Pt;Je++)Jn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ut.get(A).__webglTexture,Q,me+Je),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ut.get(H).__webglTexture,Et,ke+Je)),X.blitFramebuffer(qt,ee,qt+Bt,ee+At,Wt,pe,Wt+Bt,pe+At,X.DEPTH_BUFFER_BIT,X.NEAREST);bt.bindFramebuffer(X.READ_FRAMEBUFFER,null),bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Ut.has(A)){let Se=Ut.get(A),$e=Ut.get(H);bt.bindFramebuffer(X.READ_FRAMEBUFFER,b),bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,D);for(let yn=0;yn<Pt;yn++)Jn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Se.__webglTexture,Q,me+yn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Se.__webglTexture,Q),ui?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.__webglTexture,Et,ke+yn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$e.__webglTexture,Et),Q!==0?X.blitFramebuffer(qt,ee,qt+Bt,ee+At,Wt,pe,Wt+Bt,pe+At,X.COLOR_BUFFER_BIT,X.NEAREST):ui?X.copyTexSubImage3D(Xt,Et,Wt,pe,ke+yn,qt,ee,Bt,At):X.copyTexSubImage2D(Xt,Et,Wt,pe,qt,ee,Bt,At);bt.bindFramebuffer(X.READ_FRAMEBUFFER,null),bt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ui?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Xt,Et,Wt,pe,ke,Bt,At,Pt,Me,Ze,Ue.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Xt,Et,Wt,pe,ke,Bt,At,Pt,Me,Ue.data):X.texSubImage3D(Xt,Et,Wt,pe,ke,Bt,At,Pt,Me,Ze,Ue):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Et,Wt,pe,Bt,At,Me,Ze,Ue.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Et,Wt,pe,Ue.width,Ue.height,Me,Ue.data):X.texSubImage2D(X.TEXTURE_2D,Et,Wt,pe,Bt,At,Me,Ze,Ue);bt.pixelStorei(X.UNPACK_ROW_LENGTH,Xe),bt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Te),bt.pixelStorei(X.UNPACK_SKIP_PIXELS,hi),bt.pixelStorei(X.UNPACK_SKIP_ROWS,tn),bt.pixelStorei(X.UNPACK_SKIP_IMAGES,Ns),Et===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&X.generateMipmap(Xt),bt.unbindTexture()},this.initRenderTarget=function(A){Ut.get(A).__webglFramebuffer===void 0&&Vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Vt.setTextureCube(A,0):A.isData3DTexture?Vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Vt.setTexture2DArray(A,0):Vt.setTexture2D(A,0),bt.unbindTexture()},this.resetState=function(){U=0,z=0,et=null,bt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var ri=[-57,-19,19,57],Yn=[-38,0,38],Io={x:14,z:-7},mr={x:12.05,z:-5.45},cn={x:2,z:38},On={x:38,z:-38},gr={x:42.3,z:-41.25},be=(n,t,e)=>Math.max(t,Math.min(e,n)),Rt=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function In(n,t,e,i){return Math.abs(n)+e<65&&Math.abs(t)+e<65&&i.every(s=>{let r=n-be(n,s.x-s.w/2,s.x+s.w/2),o=t-be(t,s.z-s.d/2,s.z+s.d/2);return r*r+o*o>=e*e})}function Po(n,t,e,i,s){let r=n.x,o=n.z;return In(t,n.z,i,s)&&(n.x=t),In(n.x,e,i,s)&&(n.z=e),n.x!==r||n.z!==o}function oi(n,t,e){let i=Math.atan2(Math.sin(t-n),Math.cos(t-n));return n+be(i,-e,e)}function vf(n=0){return Math.sign(n)*Math.max(0,(Math.abs(n)-.16)/(1-.16))}function Sf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ye;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0,h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(e){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let m=0;m<h.count;++m)d.push(h.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Mf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let y=0;y<o[u].length;++y)h.push(o[u][y][f]);let m=Mf(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Mf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new xn(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let f=0,h=u.count;f<h;f++)for(let m=0;m<e;m++){let y=u.getComponent(f,m);a.setComponent(f+d,m,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Lo=new k;function zn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Lo.copy(t),Lo[i]=0,Lo.normalize();let c=.5*o/(o+a),u=1-Lo.angleTo(n)/l;return Math.sign(Lo[e])===1?u*c:a/(o+a)+c+c*(1-u)}var Ql=class n extends Mn{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new k,c=new k,u=new k(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,m=d.length/6,y=new k,p=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:y.set(1,0,0),h[v+0]=zn(y,c,"z","y",r,i),h[v+1]=1-zn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),h[v+0]=1-zn(y,c,"z","y",r,i),h[v+1]=1-zn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),h[v+0]=1-zn(y,c,"x","z",r,t),h[v+1]=zn(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),h[v+0]=1-zn(y,c,"x","z",r,t),h[v+1]=1-zn(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),h[v+0]=1-zn(y,c,"x","y",r,t),h[v+1]=1-zn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),h[v+0]=zn(y,c,"x","y",r,t),h[v+1]=1-zn(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var bf={car:{width:.99,length:2.135,radius:.98,offsets:[-1.17,0,1.17],mass:1},bike:{width:.35,length:1.105,radius:.39,offsets:[-.73,0,.73],mass:.39}},No=n=>bf[n]??bf.car;function Ms(n,t){Object.assign(n,t,{vx:0,vz:0,speed:0,integrity:100,steer:0,impact:0})}function Ri(n,t,e,i,s="car"){let r=Math.sin(e),o=Math.cos(e),{offsets:a,radius:l}=No(s);return a.every(c=>In(n+r*c,t+o*c,l,i))}function Ss(n,t,e,i=0){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=t-n.x,a=e-n.z,{width:l,length:c}=No(n.kind),u=Math.abs(o*r-a*s)-l,d=Math.abs(o*s+a*r)-c;return u<=0&&d<=0||Math.hypot(Math.max(0,u),Math.max(0,d))<i}function Ji(n,t=0){let{width:e,length:i}=No(n),s=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t));return{width:e*s+i*r,length:i*s+e*r}}function Vh(n,t,e,i=n){return Ri(n.x,n.z,n.angle,t,n.kind)&&!Do(i,n.x,n.z,n.angle,e)}function Do(n,t,e,i,s){let r=Math.sin(i),o=Math.cos(i),a=No(n.kind);for(let l of s){if(l===n||Math.abs(l.x-t)>4.5||Math.abs(l.z-e)>4.5)continue;let c=Math.sin(l.angle),u=Math.cos(l.angle),d=No(l.kind),f=a.radius+d.radius,h=f,m=0,y=0;for(let p of a.offsets)for(let g of d.offsets){let v=t+r*p-l.x-c*g,M=e+o*p-l.z-u*g,S=Math.hypot(v,M);if(S>=h)continue;h=S;let E=Math.hypot(t-l.x,e-l.z);m=S>.02?v/S:E>.02?(t-l.x)/E:r,y=S>.02?M/S:E>.02?(e-l.z)/E:o}if(h<f)return{other:l,nx:m,nz:y,mass:a.mass,otherMass:d.mass}}return null}function Gh(n,t){t<2.4||(n.integrity=Math.max(0,n.integrity-(t-2.4)*2.6),n.impact=Math.max(n.impact,t))}function ai(n,t,e,i,s){let{brake:r}=e,o=n.kind==="bike",a=n.integrity>0?e.throttle:0,l=n.integrity>0?e.steer:0;n.impact=Math.max(0,n.impact-t*21),n.steer+=(l-n.steer)*(1-Math.exp(-t*10));let c=Math.sin(n.angle),u=Math.cos(n.angle),d=n.vx*c+n.vz*u,f=Math.sign(a)*d<-.6?28:a<0?o?4.7:10:o?19.7:15.4;d=be(d+a*f*t,o?-2.7:-8.4,o?31:27);let h=n.integrity<=0?3.8:r?o?6.7:5.5:Math.abs(a)<.07?1.58:.36;d*=Math.exp(-t*h);let m=o?r?5.2:13.5:r?2.15:8.1,y=(n.vx*u-n.vz*c)*Math.exp(-t*m);n.vx=d*c+y*u,n.vz=d*u-y*c;let p=be(1.9-Math.abs(d)/24,.75,1.65),g=n.steer*t*p*Math.min(1,Math.abs(d)/2.1)*Math.sign(d),v=n.angle+g*(o?1.26:r?1.58:1);Ri(n.x,n.z,v,i,n.kind)&&!Do(n,n.x,n.z,v,s)&&(n.angle=v);let M=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*t/.34)),S=t/M;for(let E=0;E<M;E++){let R=n.x+n.vx*S,x=n.z+n.vz*S,T=Do(n,R,x,n.angle,s);if(T){let{other:C,nx:I,nz:N,mass:B,otherMass:W}=T,b=n.vx*I+n.vz*N,D=b-(C.vx*I+C.vz*N);if(D<0&&b<0){let z=-D*1.22/(1/B+1/W);n.vx+=I*z/B,n.vz+=N*z/B,C.vx-=I*z/W,C.vz-=N*z/W,Gh(n,-D),Gh(C,-D*.9);break}let U=Math.hypot(n.x-C.x,n.z-C.z);if(Math.hypot(R-C.x,x-C.z)<=U)break}if(Ri(R,x,n.angle,i,n.kind))n.x=R,n.z=x;else{let C=Ri(R,n.z,n.angle,i,n.kind)&&!Do(n,R,n.z,n.angle,s),I=Ri(n.x,x,n.angle,i,n.kind)&&!Do(n,n.x,x,n.angle,s),N=Math.hypot(C?0:n.vx,I?0:n.vz);C!==I?(C&&(n.x=R),I&&(n.z=x),n.vx*=C?.84:-.22,n.vz*=I?.84:-.22):(n.vx*=-.21,n.vz*=-.21),Gh(n,N||Math.hypot(n.vx,n.vz));break}}n.speed=n.vx*Math.sin(n.angle)+n.vz*Math.cos(n.angle)}function Zn(n,t){let e=0;return Yn.some(i=>Math.abs(n-i)<=13.55)&&Yn.some(i=>Math.abs(t-i)<=13.55)&&(e=.16),Math.abs(n-38)<6.05&&Math.abs(t+38)<5.04&&(e=.228),Math.abs(n-2)<9.5&&Math.abs(t-38)<11&&(e=.191),n>-10.91&&n<-3.49&&Math.abs(t-38)<9.77&&(e=.234),e}function Ki(n,t,e,i,s,r,o=.34){if(!In(t,e,o,i))return!1;for(let a of s)if(!(Rt(a,{x:t,z:e})>3.4||!Ss(a,t,e,o))&&(!Ss(a,n.x,n.z,o)||Rt(a,{x:t,z:e})<=Rt(a,n)))return!1;for(let a of r){if(a===n||a.health<=0||a.seated||Math.abs((n.floorY??0)-(a.floorY??0))>1.05)continue;let l=o+.28;if(Rt(a,{x:t,z:e})<l&&Rt(a,{x:t,z:e})<=Rt(a,n))return!1}return!0}function Hh(n,t,e,i,s,r,o=.34){let a=Math.max(1,Math.ceil(Math.hypot(t,e)/.14)),l=n.x,c=n.z,u=t/a,d=e/a;for(let f=0;f<a;f++){let h=n.x+u,m=n.z+d;if(Ki(n,h,m,i,s,r,o)){n.x=h,n.z=m;continue}u&&Ki(n,h,n.z,i,s,r,o)&&(n.x=h),d&&Ki(n,n.x,m,i,s,r,o)&&(n.z=m)}return Math.hypot(n.x-l,n.z-c)}function wf(n,t,e){if(!t)return Ss(n,e.x,e.z,.28);let i=Math.max(1,Math.ceil(Rt(t,n)/.26));for(let s=0;s<=i;s++){let r=s/i,o=t.x+(n.x-t.x)*r,a=t.z+(n.z-t.z)*r,l={x:o,z:a,angle:n.angle,kind:n.kind};if(Ss(l,e.x,e.z,.28))return!0}return!1}function Tf(n,t,e){let i=t.x-n.x,s=t.z-n.z,r=i*i+s*s;if(r<.001)return!1;let o=((e.x-n.x)*i+(e.z-n.z)*s)/r;return o>=0&&o<=1.05&&Math.hypot(e.x-n.x-i*o,e.z-n.z-s*o)<1.2}var by=new Mn,wy=new Ql(1,1,1,1,.135),Cf=new Hi(1,10,7),Ty=new wi(1,1,1,12),Wh=new Map,Ay=new dn({vertexColors:!0,roughness:.82}),Af=new dn({vertexColors:!0,roughness:.36,metalness:.18});function $i(n,t,e=Ay){if(!t.length)return;let i=t.map(r=>{r.updateMatrix();let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrix);let a=o.attributes.position.count,l=new Float32Array(a*3),c=r.material.color;for(let u=0;u<l.length;u+=3)l[u]=c.r,l[u+1]=c.g,l[u+2]=c.b;return o.setAttribute("color",new xn(l,3)),o});n.remove(...t);let s=new Ce(Sf(i),e);s.receiveShadow=!0,n.add(s);for(let r of i)r.dispose()}var ws=n=>n.children.filter(t=>t instanceof Ce);function Ie(n,t,e,i,s,r,o,a,l,c=!1){let u=e+":"+c;Wh.has(u)||Wh.set(u,new dn({color:e,roughness:c?.33:.87,metalness:c?.2:0}));let d=new Ce({box:by,cloth:wy,sphere:Cf,cylinder:Ty}[t],Wh.get(u));return d.scale.set(o,a,l),d.position.set(i,s,r),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}var Ey=new hs(1,16),Ry=new on({color:2169110,transparent:!0,opacity:.22,depthWrite:!1});function If(n,t,e){let i=new Ce(Ey,Ry);return i.rotation.x=-Math.PI/2,i.position.y=.025,i.scale.set(t,e,1),n.add(i),i}function Qi(n,t,e,i,s=!1){let r=new Fe,o=If(r,.41,.38),a=new Fe;r.add(a);let l=(y,p,g,v,M,S,E,R)=>Ie(a,y,p,g,v,M,S,E,R);l("cloth",e,0,.94,0,.44,.25,.29),l("cloth",t,0,1.22,0,.49,.49,.31),l("cloth",t,0,1.39,0,.55,.215,.337),l("cloth",s?8486469:t,0,1.05,.006,.473,.049,.312),s&&(l("cloth",12891226,-.128,1.343,.169,.078,.057,.014),l("cloth",2445379,0,1.427,-.132,.29,.132,.084)),l("cylinder",i,0,1.5,0,.09,.13,.09),l("sphere",i,0,1.67,.015,.168,.197,.157),l("sphere",3023645,0,1.77,-.031,.162,.112,.141),l("sphere",i,0,1.655,.165,.033,.034,.034),l("cloth",5652794,0,1.588,.154,.072,.012,.015);for(let y of[-1,1])l("sphere",i,y*.155,1.66,.023,.032,.052,.025),l("cloth",2894120,y*.061,1.711,.152,.043,.012,.012),l("cloth",10985105,y*.061,1.692,.156,.032,.012,.012),l("cloth",3024931,y*.06,1.693,.163,.016,.012,.009);s&&(l("sphere",1522486,0,1.79,.012,.181,.132,.164),l("cloth",2508606,0,1.77,.159,.27,.033,.17));let c=[],u=[],d=[],f=[];for(let y of[-1,1]){let p=new Fe;p.position.set(y*.31,1.42,0),a.add(p),Ie(p,"cloth",t,0,-.105,0,.173,.226,.187);let g=new Fe;g.position.y=-.23,p.add(g),Ie(g,"cloth",i,0,-.101,0,.132,.22,.119),Ie(g,"sphere",i,0,-.227,.012,.082,.084,.077),d.push(g),c.push(p);let v=new Fe;v.position.set(y*.128,.94,0),a.add(v),Ie(v,"cloth",e,0,-.205,0,.21,.427,.228);let M=new Fe;M.position.y=-.412,v.add(M),Ie(M,"cloth",e,0,-.18,0,.182,.38,.198),Ie(M,"cloth",s?13812648:3156777,0,-.386,.062,.201,.143,.304),Ie(M,"cloth",s?6839635:2696483,0,-.445,.059,.202,.037,.313),f.push(M),u.push(v)}let h=new Fe;h.position.set(0,-.227,.012),Ie(h,"box",2635321,0,.012,-.002,.066,.078,.12,!0),Ie(h,"box",2635321,0,-.105,.054,.074,.25,.079,!0),Ie(h,"box",10263691,0,-.189,.095,.031,.028,.018);let m=new qe;m.position.set(0,-.235,.053),h.add(m),d[0].add(h);for(let y of[a,...c,...d,...u,...f,h])$i(y,ws(y));return h.visible=!1,n.add(r),{root:r,body:a,arms:c,legs:u,forearms:d,shins:f,pistol:h,muzzle:m,shadow:o,stride:0}}function Ts(n,t,e,i,s,r=0,o=0,a=!1){n.stride+=t*(4.6+e*1.65);let l=Math.sin(n.stride)*Math.min(.78,e*.15);n.body.position.set(0,Math.abs(l)*.072,0),n.body.rotation.set(0,0,0),n.legs[0].rotation.set(l,0,0),n.legs[1].rotation.set(-l,0,0),n.shins[0].rotation.set(Math.max(0,l)*.51,0,0),n.shins[1].rotation.set(Math.max(0,-l)*.51,0,0);for(let c of n.forearms)c.rotation.set(0,0,0);if(n.arms[0].rotation.set(i?-Math.PI/2+o:-l*.76,0,0),n.arms[1].rotation.set(i?-1.16:l*.76,0,0),n.arms[0].rotation.z=a?-.25:0,n.arms[1].rotation.z=a?.25:0,a&&(n.arms[0].rotation.x=n.arms[1].rotation.x=-2.55),r>0){let c=Math.sin(r*Math.PI);n.arms[1].rotation.x=-.64,n.arms[0].rotation.x=-.5-c*1.11,n.forearms[0].rotation.x=-.62*(1-c),n.body.rotation.y=-c*.37}else n.body.rotation.y=0;n.pistol.visible=s}var Ef=new k(0,-1,0),Xh=new k,bs=new k,qh=new k,Yh=new k,jl=new k,Pf=new vn;function Rf(n,t,e,i,s,r){bs.subVectors(e,n.position);let o=Math.min(i+s-.001,Math.max(.015,bs.length()));bs.normalize();let a=(i*i-s*s+o*o)/(2*o);qh.set(r[0],r[1],r[2]).addScaledVector(bs,-qh.dot(bs)).normalize(),Xh.copy(n.position).addScaledVector(bs,a).addScaledVector(qh,Math.sqrt(Math.max(0,i*i-a*a))),jl.subVectors(Xh,n.position).normalize(),n.quaternion.setFromUnitVectors(Ef,jl),jl.copy(n.position).addScaledVector(bs,o).sub(Xh).normalize(),t.quaternion.setFromUnitVectors(Ef,jl.applyQuaternion(Pf.copy(n.quaternion).invert()))}function Zh(n,t){t.root.updateMatrixWorld(!0),n.root.position.copy(t.body.localToWorld(Yh.set(0,.1,-.31))),n.root.quaternion.copy(t.body.getWorldQuaternion(Pf)),n.shadow.visible=!1,n.pistol.visible=!1;let e=.63;n.body.rotation.set(e,0,0),n.body.position.set(0,.94*(1-Math.cos(e)),-.94*Math.sin(e)),n.root.updateMatrixWorld(!0);for(let i=0;i<2;i++){let s=i===0?-1:1,r=n.body.worldToLocal(t.handlebar.localToWorld(Yh.set(s*.342,.44,-.09)));Rf(n.arms[i],n.forearms[i],r,.23,.227,[s*.57,-1,.16]);let o=n.body.worldToLocal(t.body.localToWorld(Yh.set(s*.245,.39,-.22)));Rf(n.legs[i],n.shins[i],o,.412,.388,[s*.65,0,1])}}function Uo(n,t,e=!1){let i=new Fe;If(i,1.14,2.21);let s=new Fe;i.add(s);let r=(p,g,v,M,S,E,R,x,T=!1)=>Ie(s,p,g,v,M,S,E,R,x,T);r("box",2435629,0,.44,0,1.86,.4,4.14),r("box",t,0,.72,0,1.94,.43,4.24,!0);let o=r("box",t,0,.94,1.23,1.9,.15,1.55,!0);r("box",t,0,.93,-1.51,1.89,.14,1.1,!0);let a=new Ye,l=[-.87,.92,-1.14,.87,.92,-1.14,.87,.92,.66,-.87,.92,.66,-.71,1.49,-.78,.71,1.49,-.78,.71,1.49,.16,-.71,1.49,.16];a.setAttribute("position",new _e(l,3)),a.setIndex([0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5]),a.computeVertexNormals();let c=new Ce(a,new dn({color:3561828,roughness:.24,metalness:.42,flatShading:!0,side:fn}));c.castShadow=!0,s.add(c);let u=new Fe;u.position.set(-.974,0,.67),Ie(u,"box",t,0,.75,-.57,.036,.38,1.18,!0),Ie(u,"box",13418919,-.024,.881,-.89,.04,.04,.15,!0),$i(u,ws(u),Af),s.add(u),r("box",t,0,1.495,-.31,1.43,.075,.96,!0),r("box",3355961,0,.69,2.126,.86,.13,.05),r("box",13156268,0,.54,2.13,1.92,.12,.045,!0),r("box",13156268,0,.53,-2.13,1.93,.12,.05,!0),r("box",16707771,0,.72,-2.132,.4,.145,.03);let d=[];for(let p of[-1,1]){r("box",16769956,p*.68,.77,2.132,.43,.17,.055,!0),r("box",11021858,p*.65,.77,-2.132,.48,.17,.055,!0),r("box",2898236,p*.953,1.02,.3,.22,.11,.21),r("box",13089700,p*.98,.89,-.5,.035,.04,.26,!0);for(let g of[-1.31,1.33]){let v=new Fe;v.position.set(p*.945,.39,g),i.add(v),Ie(v,"cylinder",2434600,0,0,0,.408,.26,.408).rotation.z=Math.PI/2,Ie(v,"cylinder",11052964,p*.138,0,0,.217,.02,.217,!0).rotation.z=Math.PI/2,d.push(v)}}let f=[];e&&(f.push(r("box",15550262,-.33,1.62,-.32,.55,.14,.25)),f.push(r("box",5487086,.33,1.62,-.32,.55,.14,.25)));let h=ws(s).filter(p=>p!==c&&p!==o&&!f.includes(p));$i(s,h.filter(p=>p.material.metalness===0)),$i(s,h.filter(p=>p.material.metalness>0),Af);for(let p of d)$i(p,ws(p));s.traverse(p=>{p instanceof Ce&&(p.castShadow=!1)});let m=new Fe,y=new on({color:6643544,transparent:!0,opacity:.29,depthWrite:!1});for(let p=0;p<3;p++){let g=new Ce(Cf,y);m.add(g)}return m.position.set(0,1.04,1.25),m.visible=!1,i.add(m),n.add(i),{root:i,body:s,wheels:d,lamps:f,hood:o,smoke:m,speed:0,angle:0,x:0,z:0,vx:0,vz:0,integrity:100,steer:0,impact:0,stolen:!1,abandoned:0,driver:null,routeIndex:-1,smokeTime:0,kind:"car",rider:null,door:u,doorTime:0,wheelSpin:0,handlebar:null}}function Jh(n,t){let e=Uo(n,t),{body:i,hood:s,wheels:r,smoke:o}=e;i.clear(),e.root.remove(...r),r.length=0,e.kind="bike",e.root.children[0].scale.set(.42,1.07,1);let a=(c,u,d,f,h,m,y,p)=>Ie(i,c,u,d,f,h,m,y,p);a("box",3882300,0,.48,-.04,.32,.38,.7),a("sphere",t,0,.89,.34,.24,.23,.46),a("box",2369834,0,.85,-.36,.36,.13,.59),a("box",t,0,.65,-.7,.32,.17,.58),a("box",13940106,0,.8,.88,.25,.21,.11),a("box",10433836,0,.7,-.99,.2,.11,.11);let l=new Fe;l.position.set(0,.76,.38),Ie(l,"box",3949122,0,.44,-.09,.684,.057,.059),Ie(l,"box",6780281,0,.25,.02,.061,.39,.058).rotation.x=-.46,$i(l,ws(l)),e.handlebar=l,i.add(l),a("box",5461330,0,.39,-.22,.52,.07,.11),a("box",11578016,.232,.36,-.54,.12,.12,.72),s.visible=!1,i.add(s),o.position.set(0,.55,.32);for(let c of[-.73,.78]){let u=new Fe;u.position.set(0,.33,c),Ie(u,"cylinder",2434601,0,0,0,.33,.12,.33).rotation.z=Math.PI/2,Ie(u,"cylinder",8750213,0,0,0,.205,.14,.205).rotation.z=Math.PI/2,$i(u,ws(u)),r.push(u),i.add(u),a("box",5988704,0,.55,c,.09,.49,.085).rotation.x=c>0?-.21:.46}return $i(i,ws(i).filter(c=>c!==s)),e}function ji(n,t,e=0){let i=Math.sin(n.angle),s=Math.cos(n.angle),r=n.kind==="bike",o=0,a=0,l=0,c=0,u=n.wheels.map(p=>{let{x:g,z:v}=p.position,M=Zn(n.x+g*s+v*i,n.z-g*i+v*s);return v>0?o+=M:a+=M,g<0?l+=M:c+=M,M}),d=(o+a)/n.wheels.length;n.root.rotation.y=n.angle,n.body.rotation.x=-Math.atan2((o-a)/(r?1:2),r?1.51:2.64);let f=r?n.integrity<=0?1.25:-e*Math.min(.53,Math.abs(n.speed)*.039):e*Math.min(.09,Math.abs(n.speed)*.004),h=r?0:Math.atan2((c-l)*.5,1.89);n.body.rotation.z+=(f+h-n.body.rotation.z)*(t>0?Math.min(1,t*(r?7:13)):1),n.doorTime=Math.max(0,n.doorTime-t),n.door.rotation.y=Math.sin(Math.min(1,n.doorTime/.65)*Math.PI)*1.06;let m=r?.33:.408,y=r?n.body.rotation.z:0;n.root.position.set(n.x,d+(r?Math.abs(Math.sin(y))*.06:0),n.z),n.handlebar&&(n.handlebar.rotation.y=e*.22),n.wheelSpin=(n.wheelSpin+n.speed*t/m)%(Math.PI*2),n.wheels.forEach((p,g)=>{r||(p.position.y=u[g]-d+m),p.rotation.set(n.wheelSpin,p.position.z>0?e*(r?.22:.23):0,0,"YXZ")}),n.hood.rotation.x=(100-n.integrity)*.0031,n.hood.rotation.z=(100-n.integrity)*.0013,n.smoke.visible=n.integrity<43,n.smoke.visible&&(n.smokeTime+=t,n.smoke.children.forEach((p,g)=>{let v=(n.smokeTime*(n.integrity<=0?.72:1.04)+g/3)%1;p.position.set(Math.sin(g*3.9+v*3)*v*.4,v*1.85,-v*.58),p.scale.setScalar(.12+v*.32)}))}function Lf(n,t){let{id:e,x:i,z:s,w:r,d:o,angle:a,kind:l,label:c,color:u}=t,{box:d,solid:f,door:h,sign:m,glazing:y,support:p,volume:g}=n,v=l==="apartments",M=l==="shop"||l==="armory",S=v?t.stories:1,E=v?3.58:M?4.16:3.45,R=$=>.228+$*E,x=($,ct,Ft=.228)=>({x:i+Math.cos(a)*$+Math.sin(a)*ct,z:s-Math.sin(a)*$+Math.cos(a)*ct,y:Ft}),T=Math.abs(Math.cos(a)),C=Math.abs(Math.sin(a)),I=($,ct,Ft,Gt)=>({...x($,ct),w:Ft*T+Gt*C,d:Ft*C+Gt*T}),N=o/2,B=-o/2,W=-r/2,b=r/2,D=W+2.85,U=($,ct,Ft,Gt,Jt,he,Ee,Pe=!1,Le=0)=>{let X=x($,ct);d(X.x,Ft,X.z,Gt,Jt,he,Ee,Pe,a+Le)},z=($,ct,Ft,Gt,Jt,he,Ee,Pe=!0)=>{U($,ct,Ft,Gt,Jt,he,Ee,Pe);let Le=I($,ct,Gt,he);f.push({x:Le.x,z:Le.z,w:Le.w,d:Le.d,y0:Ft-Jt*.5,h:Ft+Jt*.5,buildingId:e})},et=($,ct,Ft,Gt,Jt,he,Ee)=>z(ct,Ft,$+he/2,Gt,he,Jt,Ee),q=($,ct,Ft,Gt,Jt,he)=>et($,(Ft+Gt)/2,ct,Gt-Ft,.22,Jt,he),J=($,ct,Ft,Gt,Jt,he)=>et($,ct,(Ft+Gt)/2,.22,Gt-Ft,Jt,he),st=($,ct,Ft,Gt,Jt,he)=>{z($,ct,Jt-.066,Ft,.132,Gt,he,!1),f[f.length-1].walkSurface=!0,p.push({...I($,ct,Ft,Gt),y:Jt,buildingId:e})},wt=($,ct,Ft,Gt,Jt,he,Ee=0)=>{let Pe=x($,ct,Ft);return h(Pe.x,Pe.z,a+Ee,Gt,Jt,Ft,{buildingId:e,...he})},xt=v?W+1.43:t.doorAt??.1,at=Math.min(r*.25,3.72),gt=M?[xt-r*.248,xt+r*.248]:[],yt=[],Nt=wt(xt-1.28/2,N,.228,1.28,M?4285290:6836289,{private:!v&&!M,unitId:v||M?null:e+":0",normallyOpen:t.open===!0});yt.push(Nt.id);let vt=x(xt,N),Yt=x(xt,N+1.05,.16),ie=x(xt,N-1.05),Ht=x(xt,N+2.45,.16),ce=[],le=null;for(let $=0;$<S;$++){let L=function(K,Z,ot,F,rt,j){z(K,Z*Ut,ct+F/2,ot,F,rt,j,!1)},ct=R($),Ft=E-.14;if(g.push({...I(0,0,r-.2,o-.2),floor:ct,ceiling:ct+Ft,buildingId:e}),!v||$===0)st(0,0,r-.03,o-.03,ct,M?11972762:11049602);else{st((D+b)/2,0,b-D,o-.1,ct,11115395);for(let K of[-1,1])st((W+D)/2,K*(N-.73),D-W,1.46,ct,10460044)}let Gt=$===0?u:t.upperColor??u;if(J(ct,W,B,N,Ft,Gt),J(ct,b,B,N,Ft,Gt),q(ct,B,W,b,Ft,Gt),$===0){let K=W,Z=[{center:xt,width:1.28,door:!0},...gt.map(ot=>({center:ot,width:at,door:!1}))];Z.sort((ot,F)=>ot.center-F.center);for(let ot of Z){let F=ot.center-ot.width*.5,rt=ot.center+ot.width*.5;if(q(ct,N,K,F,Ft,Gt),K=rt,ot.door)continue;let j=.61,mt=2.58,dt=mt-j;et(ct,ot.center,N,ot.width,.22,j,Gt),et(ct+mt,ot.center,N,ot.width,.22,Ft-mt,Gt);let pt=x(ot.center,N+.068,ct+(mt+j)*.5);y(pt.x,pt.y,pt.z,ot.width,dt,a);let Tt=I(ot.center,N,ot.width,.2);f.push({x:Tt.x,z:Tt.z,w:Tt.w,d:Tt.d,y0:ct+j,h:ct+mt,buildingId:e});for(let ut of[-1,0,1])U(ot.center+ut*(ot.width*.5-.042),ct+(mt+j)*.5,N+.13,.07,dt,.084,5989472,!1);for(let ut of[j,j+dt*.34,mt])U(ot.center,ct+ut,N+.13,ot.width+.07,.081,.096,7831928,!1);U(ot.center,ct+j-.025,N+.17,ot.width+.2,.091,.25,10065280,!1);let Zt=N-.48;U(ot.center,ct+.83,Zt,ot.width-.24,.078,.45,11771260,!1);for(let ut of[-.78,-.39,.39,.78])U(ot.center+ut,ct+.95+(Math.abs(ut)<.5?.055:0),Zt,.23,.26,.26,t.awning??12089684,!1)}q(ct,N,K,b,Ft,Gt),z(xt,N,ct+2.22+(Ft-2.22)/2,1.28,Ft-2.22,.21,Gt)}else q(ct,N,W,b,Ft,Gt);U(0,ct+.25,N+.04,r+.05,.34,.11,8484463,!1);for(let K of[W+.17,b-.17])U(K,ct+Ft/2,N+.11,.22,Ft,.17,As(Gt),!1);U(0,ct+E-.05,N+.07,r+.25,.22,.13,As(Gt),!1);for(let K of $===0&&M?[]:[W+r*.25,W+r*.51,W+r*.77]){if($===0&&Math.abs(K-xt)<1.35)continue;let Z=M?2.06:1.44;U(K,ct+1.66,N+.104,Z+.2,1.29,.19,6642515,!1),U(K,ct+1.66,N+.215,Z,1.11,.055,M?5535878:4216415,!1);for(let ot of[-Z*.45,0,Z*.45])U(K+ot,ct+1.66,N+.252,.052,1.11,.037,M?12041645:11575948,!1);if(U(K,ct+1.45,N+.252,Z,.052,.037,11182981,!1),U(K,ct+1.1,N+.264,Z+.25,.11,.19,As(Gt),!1),$>0&&K===W+r*.77){U(K,ct+.92,N+.41,Z+.24,.12,.64,8484463,!0);for(let ot of[-.56,-.28,0,.28,.56])U(K+ot,ct+1.27,N+.72,.039,.6,.055,6576195,!1);U(K,ct+1.58,N+.72,Z,.055,.061,6576195,!1)}}for(let K of[W,b])for(let Z of[B+2.14,N-2]){let ot=K===W?-.128:.128;U(K+ot,ct+1.82,Z,.08,1.11,1.37,5795182,!1),U(K+ot*1.65,ct+1.24,Z,.2,.1,1.53,As(Gt),!1),U(K+ot*1.5,ct+1.82,Z,.064,1.1,.059,As(Gt),!1)}if(M){le=x(0,B+1.89,ct),le.angle=a;let K=x(0,N+.18,ct+E-.64);m(c,K.x,K.y,K.z,a,3232851,Math.min(5.25,r-.72),.58),U(0,ct+E-1.37,N+.6,r-.56,.19,1.22,t.awning??7820863,!0);for(let Z=W+.68;Z<b-.42;Z+=.46)U(Z,ct+E-1.46,N+1.21,.225,.23,.062,14006413,!1);z(.46,B+3,ct+.55,4.4,1.1,.7,6968131),U(.46,ct+1.15,B+3,4.58,.14,.79,12166795,!0),U(1.33,ct+1.42,B+3.02,.48,.41,.36,4083022,!1),U(1.33,ct+1.58,B+3.22,.34,.19,.051,7968922,!1);for(let Z of[W+.46,b-.46])for(let ot of[B+1.75,B+4.2]){z(Z,ot,ct+.83,.61,1.66,1.79,7037271);for(let F=0;F<3;F++)for(let rt of[-.55,-.17,.22,.57]){let j=[12490344,11953479,5997179][(Math.floor((rt+.6)*2.3)+F)%3];U(Z+(Z<0?.37:-.37),ct+.47+F*.43,ot+rt,.15,.25,.22,j,!1)}}for(let Z of[-.26,.26])U(Z*r,ct+E-.23,0,.32,.085,1.91,16245436,!1);U(0,ct+.009,N-.8,1.71,.016,.87,5863786,!1);continue}let Jt=W+.14,he=vt,Ee=Yt,Pe=ie,Le=[],X=$===0&&!v?[Nt.id]:[];if(v){Jt=D+.1;let Z=($%2===0?1:-1)*(N-.84),ot=1.17;J(ct,D,B,Z-ot/2,Ft,14798003),J(ct,D,Z+ot/2,N,Ft,14798003),z(D,Z,ct+2.22+(Ft-2.22)/2,.2,Ft-2.22,ot,14798003);let F=wt(D,Z-ot/2,ct,ot,8412486,{private:!0,unitId:e+":"+$},-Math.PI/2);yt.push(F.id),X.push(F.id),he=x(D,Z,ct),Ee=x(D-.73,Z,ct),Pe=x(D+.74,Z,ct);let rt=j=>j%2===0?W+.79:D-.77;for(let j=0;j<$;j++){let mt=j%2===0?1:-1,dt=rt(j);Le.push(x(dt,mt*(N-.71),R(j)));for(let pt=0;pt<=20;pt+=4){let Tt=mt*(N-1.3-(o-2.6)*pt/20);Le.push(x(dt,Tt,R(j)+E*pt/20))}Le.push(x(dt,-mt*(N-.82),R(j+1)))}if($<S-1){let j=$%2===0?1:-1,mt=rt($),dt=21,pt=(o-2.82)/dt;for(let Tt=1;Tt<=dt;Tt++){let Zt=j*(N-1.41-(Tt-.5)*pt),ut=ct+E*Tt/dt;U(mt,ut-.063,Zt,1.38,.126,pt+.028,Tt%2===0?9405300:10390909,!0);let It=I(mt,Zt,1.42,pt+.025);p.push({...It,y:ut,buildingId:e}),f.push({x:It.x,z:It.z,w:It.w,d:It.d,y0:ut-.127,h:ut,buildingId:e,stair:!0})}for(let Tt=0;Tt<=10;Tt++){let Zt=j*(N-1.43-(o-2.86)*Tt/10),ut=ct+E*Tt/10,It=mt+($%2===0?.7:-.7);U(It,ut+.55,Zt,.051,1.1,.062,6183505,!1),U(It,ut+1.04,Zt,.061,.082,pt*2.14,6837059,!1)}}U(W+1.32,ct+E-.2,Z,.44,.11,.63,15063470,!1)}let ve=b-Jt,ne=Jt+ve*.44,ue=Math.max(B+3.18,-.48),bt=Jt+ve*.24,De=ne+(b-ne)*.46,Ut=v&&$%2===1?-1:1,Vt=(K,Z,...ot)=>U(K,Z*Ut,...ot);for(let[K,Z]of[[Jt,bt-.48],[bt+.48,De-.53],[De+.53,b]])q(ct,ue*Ut,K,Z,Ft,14798003);J(ct,ne,Math.min(B*Ut,ue*Ut),Math.max(B*Ut,ue*Ut),Ft,14798003);for(let[K,Z,ot]of[[bt,.96,9271398],[De,1.06,8544846]]){let F=wt(K-Z*Ut/2,ue*Ut,ct,Z,ot,{private:!1},Ut===1?0:Math.PI);X.push(F.id),yt.push(F.id),z(K,ue*Ut,ct+2.22+(Ft-2.22)/2,Z,Ft-2.22,.2,14798003)}let w=b-1.25;L(w,B+1.2,1.47,.44,2.08,7687224),Vt(w,B+1.19,ct+.52,1.47,.17,2.02,t.fabrics??6848113,!1),Vt(w,B+.45,ct+.64,1.02,.15,.46,13945005,!1),L(ne+.53,B+.36,.88,1.87,.68,7687224),Vt(ne+.55,B+.72,ct+1.11,.038,.69,.044,13150075,!1);let Y=ne-.63;L(Y,B+.51,1.04,.53,.75,14999502),Vt(Y,B+.42,ct+.58,.81,.07,.48,12373706,!1),L(Jt+.47,B+1.28,.45,.53,.62,14013634),Vt(Jt+.47,B+1.32,ct+.55,.39,.055,.43,11643795,!1),L(Jt+.45,ue-.58,.57,.81,.5,9737094),Vt(Jt+.46,ue-.58,ct+.84,.54,.1,.49,15130568,!1),Vt((Jt+ne)*.5,(B+ue)*.5,ct+.011,ne-Jt-.24,.019,ue-B-.25,11580070,!1);let ht=Jt+.45;L(ht,N-2.76,.75,.87,1.65,8415561),Vt(ht,N-2.76,ct+.91,.83,.09,1.74,13217414,!1),Vt(ht,N-2.42,ct+.963,.45,.022,.49,5141109,!1),L(Jt+.45,ue+.63,.72,1.75,.71,13353637),Vt(Jt+.81,ue+.62,ct+1.19,.049,.28,.064,7498586,!1);let lt=b-.63;L(lt,N-1.54,1.04,.51,2.03,t.fabrics??7037784),Vt(lt+.43,N-1.54,ct+.79,.25,.69,2.04,6187358,!1);let Mt=b-2.02;Vt(Mt,N-1.93,ct+.014,1.96,.025,1.87,10188389,!1),L(Mt,N-1.72,.64,.43,.82,8413514);for(let K of[[Jt+1.82,N-3.16],[b-2.5,B+2.13]])Vt(K[0],K[1],ct+E-.19,.31,.067,.32,16443063,!1);let St=v?x(D+1.2,(N-1.03)*Ut,ct):x(xt,N-1.35,ct);ce.push({id:e+":"+$,buildingId:e,floor:ct,entry:he,outside:Ee,inside:Pe,resident:St,doorIds:X,stairs:Le})}let te=R(S);if(z(0,0,te-.053,r+.17,.2,o+.17,8613472,!1),l==="house"){for(let $=1;$<=7;$++){let ct=r+.68-$*.33,Ft=o+.65-$*.58;U(0,te+$*.112,0,ct,.171,Ft,$%2===0?9986376:10643532,!0)}for(let $=-4;$<=4;$++){let ct=$*o/9,Ft=te+Math.max(.09,.85-Math.abs(ct)*.14);U(0,Ft+.01,ct,r+.56,.079,.081,12024662,!1)}}else{for(let $ of[W,b])U($,te+.28,0,.25,.59,o+.15,As(u),!0);for(let $ of[B,N])U(0,te+.28,$,r+.2,.59,.25,As(u),!0);if(U(b-1.5,te+.46,B+1.45,1.34,.64,1.21,8418922,!0),U(b-1.5,te+.7,B+1.45,1.14,.12,1.21,10261379,!1),U(W+1.52,te+.39,N-1.55,.56,.57,.57,4873822,!0),U(W+1.52,te+.71,N-1.55,.62,.13,.62,6715769,!1),!M){let $=x(xt+1.33,N+.17,2.758);m(c,$.x,$.y,$.z,a,5589560,2.27,.42)}}return{id:e,kind:l,label:c,entry:vt,outside:Yt,inside:ie,approach:Ht,resident:ce[0]?.resident??null,clerk:le,doorIds:yt,units:ce}}function As(n){let t=Math.min(255,(n>>16&255)+26),e=Math.min(255,(n>>8&255)+23),i=Math.min(255,(n&255)+19);return t*65536+e*256+i}var Df=(n,t)=>[Math.floor((n-t*.5-1.1)/10),Math.floor((n+t*.5+1.1)/10)];function tc(n){let t=new Map;for(let e of n){let[i,s]=Df(e.x,e.w),[r,o]=Df(e.z,e.d);for(let a=i;a<=s;a++)for(let l=r;l<=o;l++){let c=a+","+l;t.has(c)||t.set(c,[]),t.get(c).push(e)}}return(e,i)=>t.get(Math.floor(e/10)+","+Math.floor(i/10))??[]}var Nf=(n,t,e)=>Math.abs(n-e.x)<e.w*.5+.002&&Math.abs(t-e.z)<e.d*.5+.002,Cy=n=>n&&n.health!==0&&!n.seated;function Uf(n,t,e,i,s){let r=tc(n),o=tc(t),a=tc(e),l=tc(i.map(M=>M.closedSolid)),c=new Map(i.map(M=>[M.id,M])),u=M=>{let S=c.get(M.doorId);return!S.breached&&S.openAmount<1.06},d=n.filter(M=>(M.y0??0)<.95&&M.h>.28&&!M.stair);function f(M,S,E=0){let R=s(M,S);for(let x of o(M,S))x.y>R&&x.y<=E+.305&&Nf(M,S,x)&&(R=x.y);return R}function h(M,S,E=0){let R=T=>!T.stair&&(!T.walkSurface||T.h>E+.305)&&(T.y0??0)<E+1.72&&T.h>E+.13,x=r(M,S).filter(R);for(let T of l(M,S))R(T)&&u(T)&&x.push(T);return x}function m(M,S,E=0){let R=null;for(let x of a(M,S))x.floor<=E+.14&&x.ceiling>=E&&Nf(M,S,x)&&(!R||x.floor>R.floor)&&(R=x);return R}function y(){return i.map(M=>M.closedSolid).filter(u)}function p(M){let S=c.get(M);return!S||!S.private||S.breached?!1:(S.breached=!0,S.hold=1/0,!0)}function g(M,S){for(let E of i){let R=E.breached||E.normallyOpen;E.hold=Math.max(0,E.hold-M);for(let T of S){if(R||!Cy(T))continue;let C=T.floorY??T.y??0;if(Math.abs(C-E.base)>.64)continue;let I=T.x-E.x,N=T.z-E.z,B=I*I+N*N;if(B>3.68)continue;let W=T.buildingId===E.buildingId&&(!E.unitId||T.unitId===E.unitId),b=I*E.normalX+N*E.normalZ<-.22;(!E.private||W||b&&B<2.43||E.opened&&B<1.92)&&(R=!0,E.hold=1.1)}let x=R||E.hold>0?1.48:0;E.openAmount+=(x-E.openAmount)*(1-Math.exp(-M*13)),E.opened=E.openAmount>=1.06,E.door.rotation.y=E.angle+E.openAmount}}function v(){for(let M of i)M.breached=!1,M.hold=0,M.opened=M.normallyOpen,M.openAmount=M.normallyOpen?1.48:0,M.door.rotation.y=M.angle+M.openAmount}return{vehicleSolids:d,floorAt:f,walkSolids:h,interiorAt:m,closedDoorSolids:y,breachDoor:p,updateDoors:g,resetDoors:v}}var ec=473021;function We(){return ec=Math.imul(1664525,ec)+1013904223>>>0,ec/4294967296}var Ci=n=>n[Math.floor(We()*n.length)],Kh=3751484;function Ff(n){ec=473021,n.background=new ae(15316107),n.fog=new Hr(15316107,.0068),n.add(new fo(15266035,7890017,2.3));let t=new go(16763540,3);t.position.set(-45,48,-32),t.castShadow=!0,Object.assign(t.shadow.camera,{left:-69,right:69,top:69,bottom:-69,near:.5,far:175}),t.shadow.bias=-35e-5,t.shadow.normalBias=.12,t.shadow.mapSize.set(2048,2048),t.shadow.autoUpdate=!1,n.add(t);let e=new Ce(new Hi(330,32,16),new Un({side:ln,depthWrite:!1,uniforms:{sun:{value:new k(-.66,.29,-.6).normalize()}},vertexShader:"varying vec3 vDir; void main(){vDir=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
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
      }`}));n.add(e);let i=[],s=[],r=[],o=[],a={},l={box:new Mn,foliage:new ds(1,1),pole:new wi(.8,1,1,8),hill:new Hi(1,14,9)},c=new qe;function u(b,D,U,z,et,q,J,st,wt,xt=0){let at=D===0&&z===0?"center":Math.round(D/31)+","+Math.round(z/31),gt=b+":"+!!wt+":"+at,yt=a[gt]??={shape:b,shadow:!!wt,items:[]};c.position.set(D,U,z),c.scale.set(et,q,J),c.rotation.y=xt,c.updateMatrix(),yt.items.push({matrix:c.matrix.clone(),color:new ae(st)})}function d(b,D,U,z,et,q,J,st=!1,wt=0){u("box",b,D,U,z,et,q,J,st,wt)}function f(b,D,U,z,et,q,J){d(b,D,U,z,et,q,J,!0),i.push({x:b,z:U,w:z,d:q,y0:D-et/2,h:D+et/2})}function h(b,D,U=!1){let z=3.25+We()*2.65;if(u("pole",b,z*.48,D,U?.16:.22,z,.22,8020048,!0),U)for(let et=0;et<7;et++){let q=et*Math.PI*2/7;u("foliage",b+Math.sin(q)*.86,z,D+Math.cos(q)*.86,.42,.24,1.58,Ci([3432266,4879699,7111766]),!0,q)}else for(let et=0;et<4;et++)u("foliage",b+(We()-.5)*2,z+(We()-.3)*1.6,D+(We()-.5)*2,1+We()*.7,1.15,1.35,Ci([4614992,6718801,8889436]),!0,We()*6);i.push({x:b,z:D,w:.45,d:.45,h:.9*z})}function m(b,D,U,z,et,q=1784375,J=4.2,st=.65){let wt=document.createElement("canvas");wt.width=512,wt.height=115;let xt=wt.getContext("2d");xt.fillStyle="#e9d4a0",xt.fillRect(0,0,512,115),xt.strokeStyle="#645a47",xt.lineWidth=6,xt.strokeRect(7,7,498,101),xt.font="900 50px system-ui",xt.textAlign="center",xt.textBaseline="middle",xt.fillStyle="#"+q.toString(16).padStart(6,"0"),xt.fillText(b,256,57,470);let at=new Kr(wt);at.colorSpace=an;let gt=new Ce(new ei(J,st),new on({map:at}));gt.position.set(D,U,z),gt.rotation.y=et,n.add(gt)}let y=new Fe;n.add(y);let p=[],g=new ei,v=new dn({color:8563623,roughness:.23,metalness:.11,opacity:.31,transparent:!0,depthWrite:!1,side:fn});function M(b,D,U,z,et,q){let J=new Ce(g,v);J.position.set(b,D,U),J.scale.set(z,et,1),J.rotation.y=q,n.add(J)}let S={box:d,solid:i,door:E,sign:m,glazing:M,support:s,volume:r};function E(b,D,U,z,et,q=.228,J={}){let st=new Fe,wt=J.id??"door-"+p.length;st.position.set(b,q,D);let xt=Ie(st,"box",et,z*.5,1.088,0,z-.045,2.147,.074);xt.castShadow=!1;let at=Ie(st,"box",10191979,z*.5,1.47,-.04,z*.64,.56,.013);at.castShadow=!1;for(let ie of[-1,1])Ie(st,"box",10191195,z-.14,.99,ie*.046,.11,.13,.035).castShadow=!1,Ie(st,"box",12691318,z-.174,1.011,ie*.073,.132,.042,.037).castShadow=!1;let gt=b+Math.cos(U)*z*.5,yt=D-Math.sin(U)*z*.5,Nt=J.normallyOpen?1.48:0;st.rotation.y=U+Nt,n.add(st);let vt={x:gt,z:yt,w:Math.abs(Math.cos(U))*z+.083,d:Math.abs(Math.sin(U))*z+.083,y0:q,h:q+2.155,doorId:wt,buildingId:J.buildingId??null},Yt={door:st,id:wt,x:gt,z:yt,base:q,angle:U,openAmount:Nt,opened:!!J.normallyOpen,breached:!1,private:!!J.private,normallyOpen:!!J.normallyOpen,hold:0,buildingId:J.buildingId??null,unitId:J.unitId??null,normalX:Math.sin(U),normalZ:Math.cos(U),handle:{x:b+Math.cos(U)*(z-.17),y:q+1.008,z:D-Math.sin(U)*(z-.17)},closedSolid:vt};p.push(Yt);for(let ie of[0,z])d(b+Math.cos(U)*ie,q+1.09,D-Math.sin(U)*ie,.105,2.18,.178,6640456,!1,U);return d(gt,q+2.185,yt,z+.12,.11,.178,6640456,!1,U),Yt}function R(){let{x:b,z:D}=On,U=14073500,z=3.33;d(b,.17,D,12.1,.09,10.1,10319970),d(b-2.8,.218,D,5.3,.017,9.45,11705977),d(b+2.9,.218,D+2.2,5.45,.017,4.75,12625282);let et=(vt,Yt,ie,Ht)=>f(b+vt,.2+z/2,D+Yt,ie,z,Ht,U);et(-6,0,.22,10.22),et(6,0,.22,10.22),et(0,-5,12.1,.23),et(-3.195,5,5.61,.23),et(3.415,5,5.17,.23),et(.45,-3.92,.15,2.1),et(.45,-.69,.15,1.9),et(3.5,.05,4.8,.15),et(-4.3,-.6,3.45,.15),et(-2.63,-3.92,.15,2.05),f(b+.22,2.99,D+5,1.24,1.08,.25,U),f(b+.45,2.99,D-2.23,.16,1.08,1.27,U);let q=E(b-.39,D+5,0,1.22,4351321,.228,{id:"player-house-entry",buildingId:"player-home",unitId:"player-home:0",private:!0}),J=E(b+.45,D-1.64,Math.PI/2,1.22,8413516),st=E(b-2.63,D-1.69,Math.PI/2,1.17,9007194);f(b-2.63,2.99,D-2.27,.16,1.08,1.2,U);let wt={x:b+.22,z:D+5,y:.228},xt={x:b+.22,z:D+6.1,y:.16},at={x:b+.22,z:D+4,y:.228},gt=[q.id,J.id,st.id],yt={id:"player-home:0",buildingId:"player-home",floor:.228,entry:wt,outside:xt,inside:at,resident:null,doorIds:gt,stairs:[]};o.push({id:"player-home",kind:"house",label:"CASA 38",entry:wt,outside:xt,inside:at,approach:xt,resident:null,clerk:null,doorIds:gt,units:[yt]}),s.push({x:b,z:D,w:12.04,d:10.04,y:.228,buildingId:"player-home"}),r.push({x:b,z:D,w:11.88,d:9.88,floor:.228,ceiling:3.55,buildingId:"player-home"}),d(b+.28,.11,D+5.9,2.55,.19,1.55,10193781);let Nt=(vt,Yt,ie,Ht,ce,le)=>f(b+vt,.224+Ht/2,D+Yt,ie,Ht,ce,le);Nt(4,-3.63,1.46,.64,2,6901828),d(b+4,.72,D-3.57,1.39,.19,1.95,5797999),d(b+4,.84,D-4.23,1.1,.13,.41,14931641),Nt(5.3,-1.2,.96,1.84,1.12,7689789),Nt(-4.84,-3.75,1.4,.81,.62,14207675),Nt(-4.47,-2.72,.43,.43,.64,14342095),Nt(-5.27,-1.7,.66,.79,.5,14342095),Nt(-5.18,1.3,.78,.88,2.45,7761240),Nt(-4.95,3.77,1.04,1.76,.75,13420459),d(b-5.18,1.12,D+1.29,.8,.12,2.45,14540226),d(b-5.2,1.19,D+1.44,.52,.025,.6,8097936),Nt(4.76,2.82,.91,.53,2.55,5797740),d(b+5.16,.88,D+2.82,.2,.67,2.56,4416859),Nt(2.78,2.8,1.15,.4,.68,8871231),Nt(-.36,2.98,1.23,.75,1.14,9069630),d(b+2.76,.245,D+2.77,2.12,.02,2,11109736),d(b+5.88,1.53,D+2.85,.11,1.16,2.13,11506290),d(b+6.13,1.53,D+2.85,.1,1.02,1.99,5402993),d(b+6.2,1.53,D+2.85,.08,1.04,.075,14729630),d(b+6.2,1.54,D+2.85,.08,.075,2.07,14729630),d(b+6.18,1.01,D+2.85,.23,.1,2.21,11901822),d(b-3.18,1.57,D+5.16,1.78,1.02,.14,6388343),d(b-3.18,1.55,D+5.25,.08,1.06,.1,14729630),d(b-3.18,1.59,D+5.25,1.83,.07,.1,14729630),d(b-3.18,1.03,D+5.24,1.95,.11,.24,11966585);for(let vt of[-3.6,2.62])d(b+vt,3.45,D+1.6,.35,.11,.35,16309677);d(b-3.73,.27,D+5.63,2.18,.09,1.23,8622181),d(b+3.76,.255,D+5.9,2.15,.09,1.58,8292960),Ie(y,"box",13548189,b,3.63,D,12.34,.16,10.33).castShadow=!1,i.push({x:b,z:D,w:12.34,d:10.33,y0:3.55,h:3.71,buildingId:"player-home"});for(let vt of[-1,1]){let Yt=Ie(y,"box",9589308,b+vt*3.08,4.21,D,6.56,.17,10.78);Yt.rotation.z=-vt*.205,Yt.castShadow=!1;for(let ce=-2;ce<=2;ce++){let le=Ie(y,"box",10641478,b+vt*3.08,4.31,D+ce*1.84,6.54,.064,.07);le.rotation.z=Yt.rotation.z,le.castShadow=!1}let ie=new or;ie.moveTo(-6.1,3.67),ie.lineTo(6.1,3.67),ie.lineTo(0,4.8),ie.closePath();let Ht=new Ce(new co(ie),new dn({color:12626054,side:fn}));Ht.position.set(b,0,D+vt*5.04),y.add(Ht)}Ie(y,"box",8866099,b,4.92,D,.28,.121,10.84).castShadow=!1,m("CASA 38",b+2.65,2.27,D+5.125,0,4868146,1.65,.34),h(b-9.5,D-5,!0),d(b+8.8,.19,D-4,4.2,.08,7.6,7570519)}function x(){let b=cn.z;d(2,.169,b,19,.045,22,6908773);let D=8886169,U={x:-3.62,z:b,y:.234},z={x:-2.46,z:b,y:.191},et={x:-4.78,z:b,y:.234};s.push({x:-7.18,z:b,w:7.35,d:19.56,y:.234,buildingId:"station"}),r.push({x:-7.17,z:b,w:7.12,d:19.4,floor:.234,ceiling:3.75,buildingId:"station"}),d(-7.4,.195,b,6.9,.078,19.5,12038048),f(-10.78,1.97,b,.3,3.53,19.8,D);for(let st of[-9.77,9.77])f(-7.1,1.97,b+st,7.6,3.53,.29,D);for(let st of[-5.51,5.51])f(-3.62,1.97,b+st,.28,3.53,8.59,D);f(-3.62,3.095,b,.29,1.32,2.46,D),d(-7.2,3.84,b,7.64,.24,20.08,5406866),d(-7.2,4,b,7.58,.12,20.03,4548982);let q=E(-3.62,b+1.22,Math.PI/2,1.2,5338246,.22,{buildingId:"station"}),J=E(-3.62,b-1.21,-Math.PI/2,1.22,5338246,.22,{buildingId:"station"});o.push({id:"station",kind:"station",label:"POL\xCDCIA \xB7 VILA BRASA",entry:U,outside:z,inside:et,approach:z,resident:null,clerk:null,doorIds:[q.id,J.id],units:[]}),m("RECEP\xC7\xC3O",-3.44,2.63,b,Math.PI/2,2311763,2.16,.35);for(let st of[-5.5,5.5])f(-9.36,.74,b+st,1.35,1.04,2.1,6646115),d(-9.3,1.28,b+st,1.47,.13,2.2,11380883),d(-9.42,1.51,b+st,.44,.44,.62,2702146),d(-10.6,1.74,b+st,.07,1.16,2.8,12698800),d(-7.6,3.05,b+st,1.18,.08,.26,16771254);f(-6.82,.7,b-2.1,2.86,1.01,.62,7046533),d(-6.82,1.24,b-2.1,2.99,.12,.77,11446944),d(-2.5,3.33,b,7.1,.25,19.5,5401719,!0),f(-1.5,1.42,b-9.72,5.4,2.54,.35,8229008),f(-1.5,1.42,b+9.72,5.4,2.54,.35,8229008);for(let st of[-9.5,9.5])f(1.04,1.65,b+st,.28,3,.31,8689042);d(1.1,2.88,b,.25,.42,19.54,5994626),m("POL\xCDCIA \xB7 VILA BRASA",1.26,2.87,b,Math.PI/2,2704468,7.2,.63);for(let st of[-8.2,-3.95,.3,4.55,8.8])d(8.15,.208,b+st,5.3,.016,.1,14537646);for(let st of[-6.1,-1.85,2.4])d(5.5,.208,b+st,.1,.016,3.25,14537646);d(-3.75,1.67,b-6.8,.16,1.18,2.05,3626589),d(-3.75,1.67,b+6.8,.16,1.18,2.05,3626589),d(-3.52,.21,b+3.1,.64,.08,2.45,6446161)}d(0,-.3,0,720,.1,720,8880242),d(0,-.18,0,132,.34,132,4605770);for(let b=0;b<1250;b++){let D=We()*130-65,U=We()*130-65;d(D,.001,U,.04+We()*.3,.007,.04+We()*.3,Ci([5460823,4934733,4473414,5855058]),!1,We()*6)}for(let b of ri)for(let D of Yn){for(let U=-10;U<=10;U+=4)d(b,.014,D+U,.12,.015,1.82,14132838);for(let U of[-14.4,14.4])for(let z=-2;z<=2;z+=.85)d(b+z,.015,D+U,.45,.016,1.44,13156273)}for(let b of ri)for(let D of Yn){for(let U=-10;U<=10;U+=4)d(D+U,.014,b,1.82,.015,.12,14132838);for(let U of[-14.4,14.4])for(let z=-2;z<=2;z+=.85)d(D+U,.015,b+z,1.44,.016,.45,13156273)}for(let b of Yn)for(let D of Yn){d(b,.067,D,27.1,.16,27.1,13022103),d(b,.125,D,26.7,.07,26.7,10721158);for(let U of[-12.25,12.25])for(let z=-12;z<=12;z+=2.1)d(b+U,.164,D+z,2.32,.008,.023,12956566),d(b+z,.164,D+U,.023,.008,2.32,12956566);if(b===cn.x-2&&D===cn.z)x();else if(b===On.x&&D===On.z)R();else if(b===0&&D===-38){for(let U of[-6,6]){d(b+U,.185,D,8.2,.08,19,7438938);for(let z of[-7,0,7])h(b+U,D+z,!0)}for(let U=-8;U<=8;U+=4)d(b,.177,D+U,3.1,.033,3.2,13218964);m("PRA\xC7A DA BRASA",b,1.6,D-10,Math.PI)}else{for(let U of[-1,1]){let z=b===0&&D===0&&U===1,et=o.filter(yt=>yt.id.startsWith("lot-")||yt.id==="armory").length,q=et+10,J=z?"armory":et%5===1||et%5===3?"shop":et%5===0?"house":"apartments",st=["CAF\xC9 SOL","MERCADO BRASA","QUITANDA DA RUA","ARMAZ\xC9M LUZ","BAR DO PORTO","PADARIA IP\xCA"],wt=J==="shop"?st[Math.floor(et/2)%st.length]:J==="apartments"?"ED. "+["IP\xCA","VISTA","BRISA","ESTA\xC7\xC3O","HORIZONTE","CAPITAL"][Math.floor(et/2)%6]:"CASA "+q,xt=Ci([12354665,12821368,9015157,9807514,13675652,10974047,12167569]),at=Lf(S,{id:z?"armory":"lot-"+q,kind:J,label:z?"LOJA DE ARMAS":wt,x:b+U*(z?5.7:6.25),z:D+(z?-5.45:0),angle:U*Math.PI/2,w:z?11.35:(J==="house"?13.7:15.3)+We()*.57,d:z?9.36:9.38+We()*.25,color:xt,upperColor:Ci([12163192,10394757,12426376,11971991]),awning:Ci([7821376,6190959,10446933]),fabrics:Ci([7373431,8152675,9534300]),stories:et%3===0?3:2,doorAt:z?0:void 0,open:J==="house"&&et%3!==0});o.push(at);let gt=z?4.32:D+9.83;d(b+U*6.8,.168,gt,8.3,.017,2.51,10919820);for(let yt=-3.5;yt<=3.5;yt+=.7)d(b+U*6.8+yt,.18,gt,.022,.012,2.5,12169372)}h(b+12.55,D-12.05,We()>.37),h(b-11.5,D+12.15,We()>.42)}for(let U of[-1,1]){let z=b+U*12.85,et=D-U*9.85;u("pole",z,2.39,et,.083,4.5,.083,Kh,!0),i.push({x:z,z:et,w:.17,d:.17,h:4.65}),d(z+U*.35,4.52,et,.79,.075,.075,Kh,!0),d(z+U*.73,4.48,et,.32,.12,.19,14924165,!0),d(b+U*9,.56,D-U*12.5,1.52,.075,.46,8476742,!0),d(b+U*9,.78,D-U*12.66,1.52,.23,.075,9791828,!0),i.push({x:b+U*9,z:D-U*12.5,w:1.52,d:.5,h:.89});for(let J of[-.54,.54])d(b+U*9+J,.35,D-U*12.5,.06,.37,.37,Kh,!0);let q=b+U*10.1;u("pole",q,.52,D-U*12.55,.24,.69,.24,3493961,!0),u("pole",q,.88,D-U*12.55,.267,.1,.267,2506039,!0),i.push({x:q,z:D-U*12.55,w:.5,d:.5,h:.94}),d(q+.72,.38,D-U*12.58,.09,.39,.09,7104343,!0),d(q+.72,.58,D-U*12.58,.13,.08,.13,14197880,!0)}}for(let b=0;b<52;b++){let D=b/52*Math.PI*2,U=118+We()*58,z=Ci([9670532,10525321,10001560,9212560]),et=Math.sin(D)*U,q=Math.cos(D)*U;u("hill",et,-1,q,12+We()*33,3+We()*22,10+We()*20,z,!1,D);let J=4+We()*16;d(et*.76,J*.5-1,q*.76,3+We()*9,J,4+We()*8,Ci([10194306,8949389,10128258]),!1)}let T=[];for(let b of[-24.93,24.93,62.93]){for(let D of[-52,-26,1,27,51])u("pole",b,3.42,D,.095,6.81,.095,7692631,!0),i.push({x:b,z:D,w:.21,d:.21,y0:.16,h:6.82}),d(b,6.39,D,.92,.11,.095,6577237,!1),d(b-.38,6.49,D,.12,.16,.1,11182228,!1),d(b+.38,6.49,D,.12,.16,.1,11182228,!1);for(let[D,U]of[[-52,-26],[-26,1],[1,27],[27,51]])for(let z of[-.39,.39])for(let et=0;et<10;et++){let q=et/10,J=(et+1)/10;T.push(b+z,6.53-.57*Math.sin(Math.PI*q),D+(U-D)*q,b+z,6.53-.57*Math.sin(Math.PI*J),D+(U-D)*J)}}let C=new Ye;C.setAttribute("position",new _e(T,3)),n.add(new Zr(C,new sr({color:5985100,transparent:!0,opacity:.77})));let I=new dn({roughness:.88});I.onBeforeCompile=b=>{b.vertexShader=`varying vec3 vDistrictSurface;
`+b.vertexShader.replace("#include <worldpos_vertex>",`
      #include <worldpos_vertex>
      vec4 districtPoint = vec4( transformed, 1.0 );
      #ifdef USE_INSTANCING
        districtPoint = instanceMatrix * districtPoint;
      #endif
      vDistrictSurface = (modelMatrix * districtPoint).xyz;
    `),b.fragmentShader=`varying vec3 vDistrictSurface;
`+b.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec3 surfaceCell = floor(vDistrictSurface * 35.0);
      float speckle = fract(sin(dot(surfaceCell,vec3(17.41,47.13,98.51)))*21418.65)-.5;
      float patina = sin(vDistrictSurface.y * 1.39 + vDistrictSurface.x * .98) * sin(vDistrictSurface.z * 1.81 + vDistrictSurface.y * 1.39);
      diffuseColor.rgb *= 1.0 + .11 * speckle + .036 * patina;
    `)};for(let{shape:b,shadow:D,items:U}of Object.values(a)){let z=new cs(l[b],I,U.length);U.forEach(({matrix:et,color:q},J)=>{z.setMatrixAt(J,et),z.setColorAt(J,q)}),z.castShadow=D,z.receiveShadow=!0,n.add(z)}let N=new Fe,B=new Ce(new lo(1.6,1.85,40),new on({color:15794054,side:fn,transparent:!0,opacity:.85,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.26,N.add(B);let W=new Ce(new fs(.43),new on({color:15794054}));return W.position.y=2.8,N.add(W),n.add(N),{solid:i,marker:N,beacon:W,sun:t,sky:e,houseRoof:y,bed:gr,doors:p,buildings:o,...Uf(i,s,r,p,Zn)}}var xr=2.05,nc=7.15;function Iy(n){let t=[];return n.forEach((e,i)=>{let s=n[(i+n.length-1)%n.length],r=n[(i+1)%n.length],o=Math.sign(e[0]-s[0]),a=Math.sign(e[1]-s[1]),l=Math.sign(r[0]-e[0]),c=Math.sign(r[1]-e[1]),u={x:e[0]-a*xr-o*nc,z:e[1]+o*xr-a*nc},d={x:e[0]-c*xr+l*nc,z:e[1]+l*xr+c*nc},f=o===l&&a===c,h={x:e[0]-(f?a:a+c)*xr,z:e[1]+(f?o:o+l)*xr},m={x:e[0],z:e[1],id:e.join(",")};for(let y=0;y<=6;y++){let p=y/6,g=1-p;t.push({x:g*g*u.x+2*g*p*h.x+p*p*d.x,z:g*g*u.z+2*g*p*h.z+p*p*d.z,junction:m,curve:!f,angle:Math.atan2(o,a)})}}),t}var Es=(n,t,e,i)=>[[n,t],[n,i],[e,i],[e,t]],Py=[Es(-57,-57,57,57),Es(-57,-19,19,57).reverse(),Es(-19,-57,57,19),Es(-19,-19,19,19).reverse(),Es(-57,-57,19,19).reverse(),[[-19,19],[-19,57],[57,57],[57,-19],[19,-19],[19,19]],Es(-57,-57,57,57).reverse(),Es(-19,-57,57,57).reverse()];function Ly(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=t[0]===i[0]?1:0,r=1-s,o=ri.filter(a=>a>Math.min(t[s],i[s])&&a<Math.max(t[s],i[s]));return i[s]<t[s]&&o.reverse(),[t,...o.map(a=>r===0?[t[0],a]:[a,t[1]])]})}var Dy=Py.map(n=>Iy(Ly(n))),Ny=[1,3,1,1,5,5,7,10];function Fo(n,t){let e=Dy[t],i=Ny[t]*7%e.length,s=e[i],r=e[(i+e.length-1)%e.length],o=.49;Ms(n,{x:r.x+(s.x-r.x)*o,z:r.z+(s.z-r.z)*o,angle:s.angle}),n.driver={route:e,next:i,cruise:8.7+t%4*1.02,stuck:0,routeIndex:t,pass:null},n.stolen=!1,n.abandoned=0}function sc(n,t,e){let i=Math.atan2(t.x-n.x,t.z-n.z),s=Math.atan2(Math.sin(i-n.angle),Math.cos(i-n.angle)),r=e*(1-.52*Math.min(1,Math.abs(s)/1.2));return{steer:be(s*1.9,-1,1),throttle:be((r-n.speed)*.47,-.6,1),brake:r<1.2||n.speed>r+1.8}}function $h(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),o=Ji(n.kind),a=n.kind==="bike",l=i;for(let c of t){if(c===n||Rt(c,n)>20)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s),m=Ji(c.kind,c.angle-n.angle);if(f<.2||h>o.width+m.width+.16)continue;let y=Math.max(0,f-o.length-m.length-(a?.39:.64)),p=Math.max(0,c.vx*s+c.vz*r);l=Math.min(l,p+y*.87)}for(let c of e){if(c.down>0||c.health<=0||c.seated||Rt(c,n)>11)continue;let u=c.x-n.x,d=c.z-n.z,f=u*s+d*r,h=Math.abs(u*r-d*s);f>0&&h<o.width+.4&&(l=Math.min(l,Math.max(0,f-o.length-.9)*.94))}return l}function Of(n,t,e,i){let s=Math.sin(n.angle),r=Math.cos(n.angle),a=[...t.filter(c=>c!==n&&Math.hypot(c.vx,c.vz)<2).map(c=>({other:c,radius:1.05})),...e.filter(c=>c.down<=0&&c.health!==0&&!c.seated).map(c=>({other:c,radius:.43}))].find(({other:c,radius:u})=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>2.25&&h<13.4&&Math.abs(d*r-f*s)<u+1.05});if(!a)return null;let l=(c,u)=>{let d=c.x-n.x,f=c.z-n.z,h=d*s+f*r;return h>-3&&h<23&&Math.abs(d*r-f*s-u)<2.3};for(let c of[2.72,-2.72]){if(t.some(f=>f!==n&&f!==a.other&&l(f,c))||e.some(f=>f!==a.other&&f.down<=0&&l(f,c)))continue;let u=n.x+s*8+r*c,d=n.z+r*8-s*c;if(Ri(u,d,n.angle,i,n.kind)&&Ri((u+n.x)*.5,(d+n.z)*.5,n.angle,i,n.kind))return{x:u,z:d}}return null}function zf(n,t,e,i){let s=n.kind==="bike",r=Ji(n.kind),o=Math.sin(n.angle),a=Math.cos(n.angle),l=p=>({along:(p.x-n.x)*o+(p.z-n.z)*a,across:(p.x-n.x)*a-(p.z-n.z)*o}),c=[...t.filter(p=>p!==n).map(p=>({actor:p,...Ji(p.kind,p.angle-n.angle),moving:!0})),...e.filter(p=>p.health>0&&!p.seated&&!p.down).map(p=>({actor:p,width:.34,length:.34,moving:!1}))].map(p=>({...p,...l(p.actor)})),u=c.filter(({actor:p,along:g,across:v,width:M,length:S,moving:E})=>g>Math.max(s?1.2:2.4,r.length+S-.3)&&g<19&&Math.abs(v)<r.width+M+.16&&(!E||Math.hypot(p.vx,p.vz)<(s?8:6)));u.sort((p,g)=>p.along-g.along);let d=u[0];if(!d||d.along-r.length-d.length<(s?1.85:2.45))return null;let f=r.width+d.width+(s?.23:.38),h=s?Math.max(1.12,f):2.95,m=s?[h,-h,2.02,-2.02,2.75,-2.75,3.35,-3.35]:[h,-h,3.45,-3.45],y=d.along+r.length+d.length+(s?3:4.1);for(let p of m){if(Math.abs(d.across-p)<f)continue;let g=r.length+(s?3.9:5.8);if(!c.every(x=>{if(x===d)return!0;let T=x.moving?Math.max(0,-x.actor.vx*o-x.actor.vz*a):0;return x.along<-r.length-x.length-.2||x.along>y+g+Math.min(10,T)||Math.abs(x.across-p)>r.width+x.width+(s?.25:.46)}))continue;let M=Math.max(s?2.4:3.8,Math.min(s?5:6.1,d.along-r.length+1.2)),S=Zn(n.x,n.z),E=Math.ceil(y/.72),R=!0;for(let x=1;x<=E;x++){let T=x*y/E,C=p*Math.min(1,T/M),I=n.x+o*T+a*C,N=n.z+a*T-o*C,B=s?.27:.9;if(Math.abs(Zn(I+a*B,N-o*B)-S)>=.08||Math.abs(Zn(I-a*B,N+o*B)-S)>=.08||!Vh({x:I,z:N,angle:n.angle,kind:n.kind},i,t,n)){R=!1;break}}if(R)return{x:n.x,z:n.z,sx:o,sz:a,offset:p,obstacle:d.actor,phase:"out",age:0,clearAfter:r.length+d.length+(s?.9:1.2)}}return null}function Uy(n,t,e,i,s=[]){t.age+=i;let r=n.kind==="bike",o=Ji(n.kind),{sx:a,sz:l,offset:c}=t,u=(n.x-t.x)*a+(n.z-t.z)*l,d=(n.x-t.x)*l-(n.z-t.z)*a,f=(t.obstacle.x-t.x)*a+(t.obstacle.z-t.z)*l;if(t.age>(r?10:13)||t.phase==="merge"&&Math.abs(d)<.53)return null;t.phase==="out"&&Math.abs(d-c)<(r?.28:.55)&&(t.phase="pass"),t.phase!=="merge"&&u>f+t.clearAfter&&e.every(S=>{if(S===n)return!0;let E=Ji(S.kind,S.angle-Math.atan2(a,l));return Math.abs((S.x-t.x)*l-(S.z-t.z)*a)>o.width+E.width+.3||Math.abs((S.x-n.x)*a+(S.z-n.z)*l)>o.length+E.length+1.25})&&(t.phase="merge");let h=t.phase==="merge"?0:c,m=e.some(M=>{if(M===n||M===t.obstacle)return!1;let S=(M.x-n.x)*a+(M.z-n.z)*l,E=(M.x-t.x)*l-(M.z-t.z)*a,R=Ji(M.kind,M.angle-Math.atan2(a,l));return S>0&&S<o.length+R.length+2.7&&Math.abs(E-h)<o.width+R.width+.28})||s.some(M=>{if(M.health<=0||M.seated||M.down)return!1;let S=(M.x-n.x)*a+(M.z-n.z)*l,E=(M.x-t.x)*l-(M.z-t.z)*a;return S>0&&S<o.length+2.1&&Math.abs(E-h)<o.width+.45}),y=t.phase==="out"?r?2.3:4.4:r?4.8:7,p={x:t.x+a*(u+y)+l*h,z:t.z+l*(u+y)-a*h},g=t.phase==="out"?r?4.5:4.8:r?8.1:6.5,v=sc(n,p,m?0:g);return m&&(v.throttle=0),v}function ic(n,t,e,i,s){return Vh(t,s,e,n)&&i.every(r=>r.health<=0||r.seated||r.down||!Ss(t,r.x,r.z,.26))}function Fy(n,t,e,i,s){let r=n.kind==="bike",o=r?1.75:2.75,a=e.filter(u=>u!==n&&Rt(n,u)<29),l=null,c=-1/0;for(let u of[0,-.62,.62,-1,1]){let d={x:n.x,z:n.z,angle:n.angle,kind:n.kind},f=0;for(let g=0;g<(r?13:19)&&(d.angle-=u*.18*(r?.75:.56),d.x-=Math.sin(d.angle)*.18,d.z-=Math.cos(d.angle)*.18,!!ic(n,d,e,i,s));g++)f+=.18;if(f<(r?.9:1.35))continue;ic(n,d,e,i,s)||(d.x+=Math.sin(d.angle)*.18,d.z+=Math.cos(d.angle)*.18,d.angle+=u*.18*(r?.75:.56));let h={...d},m=0;for(let g=0;g<27;g++){let v=Math.atan2(t.x-h.x,t.z-h.z);if(h.angle=oi(h.angle,v,r?.13:.092),h.x+=Math.sin(h.angle)*.24,h.z+=Math.cos(h.angle)*.24,!ic(n,h,e,i,s))break;m+=.24}let y=r&&zf(d,a,i,s),p=m*.67+(Rt(n,t)-Rt(h,t))*.38+f*.31-Math.abs(u)*.12+(y?4.6:0);p>c&&(c=p,l={steer:u,pace:o,distance:Math.max(.7,f-.26),age:0,x:n.x,z:n.z})}return l}function Qh(n,t,e,i,s,r,o,a,l=!0){let c=n.kind==="bike",u=t.recoverPosition;t.recoverPosition={x:n.x,z:n.z};let d=u&&Rt(u,n)>o*.57;if(t.recoverRetry=Math.max(0,(t.recoverRetry??0)-o),t.maneuver){let h=t.maneuver;h.age+=o;let m=Math.min(.26,Math.max(.035,Math.abs(n.speed)*o*1.35)),y={x:n.x-Math.sin(n.angle)*m,z:n.z-Math.cos(n.angle)*m,angle:n.angle,kind:n.kind};return Rt(n,h)>=h.distance||h.age>(c?2.4:2.8)||!ic(n,y,i,s,r)?(t.maneuver=null,t.recoverWait=0,t.recoverRetry=.58,{steer:0,throttle:0,brake:!0}):{steer:h.steer,throttle:n.speed>-h.pace?be((n.speed+h.pace)*-.64,-.54,-.05):0,brake:!1}}t.recoverWait=!l||d||Rt(n,e)<1.2?0:(t.recoverWait??0)+o;let f=c?1.08:1.75;return t.recoverRetry>0||t.recoverWait<f||n.integrity<=0?a:(t.maneuver=Fy(n,e,i,s,r),t.maneuver?(t.recoverWait=0,{steer:t.maneuver.steer,throttle:-.47,brake:!1}):(t.recoverRetry=.85,a))}function Bf(n,t,e,i,s,r){for(let[o,a]of r)(!a.driver||a.integrity<=0||Rt(a,a.driver.route[a.driver.next].junction)>11)&&r.delete(o);for(let o of n){let a=o.driver;if(!a||o.integrity<=0){o!==t.player&&Math.hypot(o.vx,o.vz)>.06?ai(o,s,{throttle:0,steer:0,brake:!0},i,t.vehicles):o!==t.player&&(o.impact=Math.max(0,o.impact-s*21));continue}let{route:l}=a,c=o.kind==="bike",u=l[a.next],d=Math.sin(o.angle),f=Math.cos(o.angle);for(let C=0;!a.maneuver&&C<6;C++){let I=u.x-o.x,N=u.z-o.z;if(Math.hypot(I,N)>2.55&&(I*d+N*f>0||Math.hypot(I,N)>5))break;a.next=(a.next+1)%l.length,u=l[a.next]}let{junction:h}=u,m=Rt(o,h),y=r.get(h.id);!y&&m<9.7&&r.set(h.id,o);let p=a.cruise*(c?1.13:1),g=u.curve&&m<12?Math.min(c?7.1:5.9,p):p,v=y&&y!==o&&m<15;v&&(g=Math.min(g,Math.max(0,m-7.4)*.96));let M=$h(o,t.vehicles,e,g);!a.pass&&!a.maneuver&&!v&&M<g*(c?.88:.78)&&(!u.curve||m>(c?8:11))&&(a.pass=zf(o,t.vehicles,e,i));let S=a.pass?Uy(o,a.pass,t.vehicles,s,e):null;S||(a.pass=null);let E=S??sc(o,u,M);!S&&M<.4&&(E.throttle=0);let R=o.x,x=o.z,T=Qh(o,a,u,t.vehicles,e,i,s,E,!v||a.stuck>4.4);a.maneuver&&(a.pass=null),ai(o,s,T,i,t.vehicles),a.stuck=Math.hypot(o.x-R,o.z-x)<s*.62?a.stuck+s:0}}function kf(n,t,e,i){return Rt(n,e)>13&&Ri(n.x,n.z,n.angle,i,n.kind)&&t.every(s=>Rt(s,n)>5.2)}var Oy=[];function jh(n,t,e,i,s){let r=-1/0,o=1/0,a=-1,l=-1;for(let c=0;c<3;c++){let u=n[c],d=t[c],f=e[c],h=e[c+3];if(Math.abs(d)<1e-5){if(u<f||u>h)return 1/0;continue}let m=1/d,y=(d>0?f-u:h-u)*m,p=(d>0?h-u:f-u)*m;if(y>r&&(r=y,a=c*2+ +(d<0)),p<o&&(o=p,l=c*2+ +(d>0)),r>o)return 1/0}return o<0||r>=i?1/0:r>=0?(s.face=a,r):o>=i?1/0:(s.face=l,Math.max(0,o))}function zy(n,t,e,i){if(!i)return t[1]<-1e-5&&n[1]>=0?-n[1]/t[1]:1/0;if(t[1]>1e-5)return 1/0;let s=o=>n[1]+t[1]*o-i(n[0]+t[0]*o,n[2]+t[2]*o);if(s(0)<-.005)return 1/0;let r=Math.min(1.3,e/12);if(r<1e-5)return 1/0;for(let o=0;o<e;o+=r){let a=o,l=Math.min(o+r,e);if(!(s(l)>0)){for(let c=0;c<10;c++){let u=(a+l)*.5;s(u)>0?a=u:l=u}return l}}return 1/0}function Gf(n,t,e,i,s,r){let o=s,a=null,l=null,c=null,u=-1,d=0,f={face:-1};for(let m of e){let y=m.bounds??[m.x-m.w*.5,m.y0??m.base??0,m.z-m.d*.5,m.x+m.w*.5,m.h,m.z+m.d*.5],p=jh(n,t,y,o,f);p>=o||(o=p,l=m,c="solid",u=f.face)}let h=zy(n,t,o,r);h<o&&(o=h,l=null,c="ground",u=3);for(let m of i){let y,p=m.oriented;if(p){let{center:g,half:v,angle:M}=p,S=n[0]-g[0],E=n[1]-g[1],R=n[2]-g[2],x=Math.sin(M),T=Math.cos(M),C=[T*S-x*R,E,x*S+T*R],I=[T*t[0]-x*t[2],t[1],x*t[0]+T*t[2]];y=jh(C,I,[-v[0],-v[1],-v[2],v[0],v[1],v[2]],o,f)}else if(m.bounds)y=jh(n,t,m.bounds,o,f);else continue;y>=o||(o=y,a=m,l=null,c="target",u=f.face,d=p?.angle??0)}return{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}}function tu(n,t,e,i,s=52){let{distance:r,hit:o}=Gf(n,t,e,i,s,null);return{distance:r,hit:o}}function rc(n,t,e,i,s=52,{ground:r=null}={}){let{distance:o,hit:a,solid:l,surface:c,face:u,rotation:d}=Gf(n,t,e,i,s,r),f=n.map((m,y)=>m+t[y]*o),h=null;if(u!==-1&&(h=[0,0,0],h[Math.floor(u/2)]=u%2?1:-1,d)){let[m,y,p]=h,g=Math.sin(d),v=Math.cos(d);h=[v*m+g*p,y,-g*m+v*p]}return{distance:o,hit:a,point:f,normal:h,solid:l,surface:c}}function Vf(n,t,e,i,s,{limit:r=52,ground:o=null}={}){let a=Math.hypot(...t),l=a>1e-5?t.map(m=>m/a):[0,0,1],c=rc(n,l,i,s,r,{ground:o}),u=c.point.map((m,y)=>m-e[y]),d=u.reduce((m,y,p)=>m+y*l[p],0),f=Math.hypot(...u),h=d>.025&&f>1e-5?u.map(m=>m/f):l;return{direction:h,sight:c,impact:rc(e,h,i,s,r,{ground:o})}}function Rs(n,t,e){let i=t.map((o,a)=>o-n[a]),s=Math.hypot(...i);if(s<=1e-5)return!0;let r=i.map(o=>o/s);return tu(n,r,e,Oy,s).distance>=s-.01}function oc(n,t,e,{fov:i=Math.PI*.72,range:s=25,eye:r=1.59,aim:o=1.25,verticalFov:a=Math.PI*.84}={}){let l=t.x-n.x,c=t.z-n.z,u=Math.hypot(l,c),d=(n.ground??0)+r,f=(t.ground??0)+o;if(Math.hypot(u,f-d)>s)return!1;if(u>1e-5){let h=n.angle??0;if((Math.sin(h)*l+Math.cos(h)*c)/u<Math.cos(Math.min(Math.PI,i*.5)))return!1}return a<Math.PI&&Math.abs(Math.atan2(f-d,u)+(n.pitch??0))>a*.5?!1:Rs([n.x,d,n.z],[t.x,f,t.z],e)}function Hf(n,t,e,i){let s=null,r=1.86;for(let o of t){if(o.down>0)continue;let a=o.x-n.x,l=o.z-n.z,c=Math.hypot(a,l),u=Math.sin(n.angle)*a+Math.cos(n.angle)*l;c>=r||u<c*.36||!Rs([n.x,e+1,n.z],[o.x,e+1,o.z],i)||(s=o,r=c)}return s}var _r=44,Cs=12,eu=new k(0,1,0),By=new k(0,0,1),ts=new vn,Ii=new Ae,li=new k,ac=new k,lc=new k,ky=new re;function Gy(){let t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){let r=(s-16+.5)/16,o=(i-32*.5+.5)/(32*.5),a=Math.atan2(o,r),l=Math.hypot(r,o),c=.78+Math.sin(a*5)*.075+Math.sin(a*11)*.067,u=l<.35+Math.sin(a*4)*.06,d=(s*239+i*167)%19/19,f=u?9+d*27:101+d*64,h=u?.99:Math.min(.84,Math.max(0,(c-l)*3.6))*(.51+d*.49),m=(i*32+s)*4;t[m]=f,t[m+1]=f*.92,t[m+2]=f*.81,t[m+3]=Math.round(h*255)}let e=new ls(t,32,32,Cn);return e.colorSpace=an,e.magFilter=rn,e.minFilter=rn,e.needsUpdate=!0,e}function cc(n,t,e,i){let s=new cs(t,e,i);return s.frustumCulled=!1,s.instanceMatrix.setUsage(Wl),n.add(s),s}function Vy(n){let t=new ei(1,1),e=new Gi(new Float32Array(_r),1);e.setUsage(Wl),t.setAttribute("markAlpha",e);let i=new on({map:Gy(),transparent:!0,depthWrite:!1,alphaTest:.035,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float markAlpha;
varying float vMarkAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMarkAlpha=markAlpha;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying float vMarkAlpha;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=vMarkAlpha;
#include <alphatest_fragment>`)};let s=cc(n,t,i,_r);return s.renderOrder=3,{mesh:s,fade:e}}function Wf(n){let{mesh:t,fade:e}=Vy(n),i=new on({color:16777215,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),s=cc(n,new wi(.015,.015,1,5),i,Cs),r=new on({color:16766867,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.83}),o=cc(n,new ds(1,0),r,Cs),a=new on({color:16762752,toneMapped:!1,depthWrite:!1,transparent:!0,opacity:.75}),l=cc(n,new fs(1),a,Cs),c=Array.from({length:Cs},()=>({age:1/0,distance:0,point:new k,start:new k,direction:new k,surface:null})),u=Array.from({length:_r},()=>({time:0,life:0,point:new k,normal:new k,attachment:null,radius:0})),d=0,f=0,h=new Ae().makeScale(0,0,0),m=new ae(16768142),y=new ae(16754545);function p(){for(let M=0;M<Cs;M++)c[M].age=1/0,s.setMatrixAt(M,h),o.setMatrixAt(M,h),l.setMatrixAt(M,h);for(let M=0;M<_r;M++)u[M].time=0,u[M].attachment=null,t.setMatrixAt(M,h),e.setX(M,0);s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=t.instanceMatrix.needsUpdate=e.needsUpdate=!0,d=f=0}p();function g(M,S,{enemy:E=!1,mark:R=S.surface==="solid"||S.surface==="ground",attach:x=null}={}){let T=c[d],C=d;if(d=(d+1)%Cs,T.start.fromArray(M),T.point.fromArray(S.point),T.distance=T.start.distanceTo(T.point),T.direction.subVectors(T.point,T.start).normalize(),T.surface=S.surface,T.age=0,s.setColorAt(C,E?y:m),s.instanceColor.needsUpdate=!0,R&&S.normal&&S.surface){let I=u[f];f=(f+1)%_r,I.life=(S.surface==="ground"?8:13)+Math.random()*4,I.time=I.life,I.point.copy(T.point),I.normal.fromArray(S.normal).normalize(),I.attachment=x,I.radius=.053+Math.random()*.031,x&&(x.updateWorldMatrix(!0,!1),x.worldToLocal(I.point),I.normal.transformDirection(Ii.copy(x.matrixWorld).invert()))}}function v(M){let S=!1,E=!1;for(let R=0;R<Cs;R++){let x=c[R];if(!Number.isFinite(x.age))continue;S=!0,x.age+=M;let T=234,C=Math.min(x.distance,x.age*T+1.7),I=Math.max(0,x.age*T-3.1),N=C-I;if(N>.018){li.copy(x.start).addScaledVector(x.direction,(C+I)*.5),ts.setFromUnitVectors(eu,x.direction);let W=Math.min(1,N/1.3);Ii.compose(li,ts,ac.set(W,N,W)),s.setMatrixAt(R,Ii)}else s.setMatrixAt(R,h);if(x.age<.071){let W=Math.max(.025,.084-x.age*.78);ts.setFromUnitVectors(eu,x.direction),li.copy(x.start).addScaledVector(x.direction,.052),Ii.compose(li,ts,ac.set(W,W*2.2,W)),o.setMatrixAt(R,Ii)}else o.setMatrixAt(R,h);let B=x.age-x.distance/T;if(x.surface&&B>=0&&B<.13){let W=Math.max(.006,.041-B*.27);li.copy(x.point).addScaledVector(x.direction,-(.039+B*.38)),ts.setFromUnitVectors(eu,x.direction),Ii.compose(li,ts,ac.set(W,W*2.14,W)),l.setMatrixAt(R,Ii)}else l.setMatrixAt(R,h);x.age>x.distance/T+.14&&(x.age=1/0)}for(let R=0;R<_r;R++){let x=u[R];if(!(x.time<=0)){if(E=!0,x.time-=M,x.time<=0||x.attachment&&!x.attachment.visible){x.time=0,x.attachment=null,t.setMatrixAt(R,h),e.setX(R,0);continue}li.copy(x.point),lc.copy(x.normal),x.attachment&&(x.attachment.updateWorldMatrix(!0,!1),li.applyMatrix4(x.attachment.matrixWorld),lc.applyNormalMatrix(ky.getNormalMatrix(x.attachment.matrixWorld))),li.addScaledVector(lc,.014),ts.setFromUnitVectors(By,lc),Ii.compose(li,ts,ac.set(x.radius,x.radius,x.radius)),t.setMatrixAt(R,Ii),e.setX(R,Math.min(1,x.time*.57))}}S&&(s.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0),E&&(t.instanceMatrix.needsUpdate=e.needsUpdate=!0)}return{emit:g,update:v,reset:p}}var zo=.42,yr=.145,Xf=n=>.94*n,nu=n=>n*n*(3-2*n),Oo=(n,t,e)=>n+(t-n)*e;function Hy(n){return n<.065?-.32*nu(n/.065):n<yr?Oo(-.32,1,nu((n-.065)/(yr-.065))):n<.182?Oo(1,.89,(n-yr)/(.182-yr)):.89*(1-nu((n-.182)/(zo-.182)))}function qf(n,{aim:t=!1,punch:e=0,pitch:i=0}={}){if(!t&&e<=0)return;let[s,r]=n.arms,[o,a]=n.forearms,l=e>0?Hy(be(zo-e,0,zo)):0,c=Math.max(0,l),u=Math.max(0,-l),d=be(i,-.64,.53)*.62,f=.068+c*.17-u*.09;n.body.rotation.set(f,.09+c*.35-u*.48,-.019-c*.041),n.body.position.y+=Xf(1-Math.cos(f))-.028,n.body.position.z+=Xf(-Math.sin(f))+c*.07,s.rotation.set(Oo(-.79,-1.82+d,c)+u*.88,.1-c*.065,Oo(.2,-.047,c)-u*.31),o.rotation.set(Oo(-1.16,-.047,c)-u*.31,.04,.11-c*.1),r.rotation.set(-.91-c*.18+d*.28,-.11,-.18-c*.02),a.rotation.set(-1.04+c*.17,-.04,-.075),n.pistol.visible=!1}function $t(n){return document.getElementById(n)}function Yf(n,t){let e=new Set,i=new Set,s=new Set,r={x:0,y:0,aim:!1},o={x:0,y:0},a=$t("stick"),l=$t("nub"),c=$t("look"),u=$t("game"),d=$t("view"),f=-1,h=-1,m=[],p=matchMedia("(pointer:coarse), (max-width: 600px)").matches?"touch":"keyboard",g=C=>{p=C,$t("touch").hidden=C!=="touch",u.classList.toggle("touching",C==="touch")};g(p);let v=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyQ","KeyR","KeyG","KeyV","Escape"]);window.addEventListener("keydown",C=>{if(!(!v.has(C.code)||C.target instanceof HTMLSelectElement&&!t())){if((t()||C.code==="Escape")&&C.preventDefault(),C.code==="Escape"){C.repeat||n();return}t()&&(g("keyboard"),e.add(C.code),C.repeat||(C.code==="KeyE"&&i.add("interact"),C.code==="KeyF"&&i.add("fire"),C.code==="KeyR"&&i.add("punch"),C.code==="KeyG"&&i.add("recruit"),C.code==="KeyV"&&i.add("weapon"),C.code==="Space"&&i.add("jump")))}}),window.addEventListener("keyup",C=>e.delete(C.code));function M(){e.clear(),i.clear(),s.clear(),o.x=0,o.y=0,l.style.transform="",f=-1,h=-1,r.x=0,r.y=0,r.aim=!1,$t("aim").setAttribute("aria-pressed","false")}window.addEventListener("blur",M),d.addEventListener("contextmenu",C=>C.preventDefault()),d.addEventListener("wheel",C=>{!t()||!C.deltaY||(C.preventDefault(),s.has("wheel")||(i.add("weapon"),s.add("wheel")),clearTimeout(S),S=window.setTimeout(()=>s.delete("wheel"),125))},{passive:!1});let S=0;d.addEventListener("pointerdown",C=>{t()&&C.pointerType==="touch"&&g("touch")}),window.addEventListener("mousedown",C=>{if(!(!t()||document.pointerLockElement!==d&&(!(C.target instanceof Node)||!d.contains(C.target)))){if(C.button===0&&document.pointerLockElement!==d&&d.requestPointerLock){let I=d.requestPointerLock();I&&I.catch(()=>{})}g("keyboard"),C.button===0&&(i.add("fire"),s.add("mouseFire")),C.button===2&&(r.aim=!0)}}),window.addEventListener("mouseup",C=>{C.button===0&&s.delete("mouseFire"),C.button===2&&(r.aim=!1)}),window.addEventListener("pointermove",C=>{!t()||p!=="keyboard"||C.pointerType==="touch"||(document.pointerLockElement===d||C.target===d||d.contains(C.target))&&(r.x+=C.movementX,r.y+=C.movementY)});function E(C){let I=a.getBoundingClientRect(),N=C.clientX-I.left-I.width/2,B=C.clientY-I.top-I.height/2,W=I.width*.37,b=Math.max(W,Math.hypot(N,B));o.x=N/b,o.y=B/b,l.style.transform="translate("+o.x*W+"px,"+o.y*W+"px)"}a.addEventListener("pointerdown",C=>{f===-1&&(g("touch"),f=C.pointerId,a.setPointerCapture(C.pointerId),E(C))}),a.addEventListener("pointermove",C=>{C.pointerId===f&&E(C)}),a.addEventListener("lostpointercapture",C=>{C.pointerId===f&&(f=-1,o.x=0,o.y=0,l.style.transform="")});let R=0,x=0;c.addEventListener("pointerdown",C=>{h===-1&&(h=C.pointerId,R=C.clientX,x=C.clientY,c.setPointerCapture(C.pointerId))}),c.addEventListener("pointermove",C=>{C.pointerId===h&&(r.x+=(C.clientX-R)*1.45,r.y+=(C.clientY-x)*1.45,R=C.clientX,x=C.clientY)}),c.addEventListener("lostpointercapture",C=>{C.pointerId===h&&(h=-1)});for(let C of["interact","fire","aim","sprint","punch","jump","weapon","recruit"]){let I=$t(C);I.addEventListener("pointerdown",N=>{N.preventDefault(),g("touch"),I.setPointerCapture(N.pointerId),C==="aim"?(s.has("aim")?s.delete("aim"):s.add("aim"),I.setAttribute("aria-pressed",String(s.has("aim")))):C==="sprint"||C==="fire"?(s.add(C),C==="fire"&&i.add(C)):i.add(C)}),(C==="sprint"||C==="fire")&&I.addEventListener("lostpointercapture",()=>s.delete(C))}let T=!1;return{clear:M,read(C,I){T!==C&&(s.delete("aim"),$t("aim").setAttribute("aria-pressed","false"),T=C);let N=Array.from(navigator.getGamepads?.()??[]).find(J=>J?.connected&&J.mapping==="standard"),B=N?.buttons.map(J=>J.pressed||J.value>.45)??[],W=J=>B[J]&&!m[J],b=Array.from({length:4},(J,st)=>vf(N?.axes[st]));(B.some(Boolean)||b.some(J=>Math.abs(J)>.1))&&g("pad"),(W(9)||!t()&&W(0))&&n();let U=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),z=Number(e.has("KeyW")||e.has("ArrowUp"))-Number(e.has("KeyS")||e.has("ArrowDown")),et=(N?.buttons[7]?.value??0)-(N?.buttons[6]?.value??0),q={x:be(U+o.x+b[0],-1,1),y:be(z-o.y+(C&&Math.abs(et)>.05?et:-b[1]),-1,1),lookX:be(r.x,-140,140)*.0032+b[2]*I*2.45,lookY:be(r.y,-140,140)*.0028+b[3]*I*1.8,aim:!C&&(r.aim||e.has("KeyQ")||s.has("aim")||!!B[6]),run:s.has("sprint")||e.has("ShiftLeft")||e.has("ShiftRight")||!!B[0],brake:e.has("Space")||s.has("sprint")||!!B[2],interact:i.has("interact")||W(3),fire:i.has("fire")||s.has("fire")||s.has("mouseFire")||!C&&!!B[7],punch:i.has("punch")||W(1),recruit:i.has("recruit")||W(12),weapon:i.has("weapon")||W(15),jump:i.has("jump")||W(2),confirm:W(0),mode:p};return m=B,r.x=0,r.y=0,i.clear(),q}}}function Zf(){let n,t,e,i,s=!0;function r(){if(s)try{n||(n=new AudioContext,t=n.createGain(),t.gain.value=.46,t.connect(n.destination),e=n.createOscillator(),e.type="triangle",i=n.createGain(),i.gain.value=0,e.connect(i).connect(t),e.start()),n.state==="suspended"&&n.resume().catch(()=>{})}catch{s=!1}}function o(a,l,c,u,d="sine",f=0){if(!n||!s||n.state!=="running")return;let h=n.currentTime+f,m=n.createOscillator(),y=n.createGain();m.type=d,m.frequency.setValueAtTime(a,h),m.frequency.exponentialRampToValueAtTime(l,h+c),y.gain.setValueAtTime(u,h),y.gain.exponentialRampToValueAtTime(.001,h+c),m.connect(y).connect(t),m.start(h),m.stop(h+c)}return{start:r,get enabled(){return s},toggle(){return s=!s,t&&(t.gain.value=s?.46:0),r(),s},motor(a,l){n&&(e.frequency.setTargetAtTime(34+Math.abs(a)*5,n.currentTime,.075),i.gain.setTargetAtTime(l?.13:0,n.currentTime,.11))},step(){o(79,47,.085,.12,"triangle")},shot(){o(194,44,.15,.59,"square")},punch(a){o(a?109:187,a?39:73,a?.125:.084,a?.45:.13,"triangle")},crash(){o(98,29,.24,.34,"sawtooth")},bell(){o(442,521,.2,.25),o(660,840,.29,.2,"sine",.11)},siren(){o(440,660,.35,.15),o(660,400,.36,.15,"sine",.33)}}}function iu(n){return n>1.53?54:n>.92?32:n>.63?24:15}function su(n){return Math.round(be(Math.max(0,n-2.4)**2*.24,0,86))}function hc(n){return n>=36?3:n>=20?2:n>0?1:0}function Jf(n){let i=62.474999999999994,s=Array.from({length:2500},(u,d)=>({x:d%50*2.55-i,z:Math.floor(d/50)*2.55-i})),r=s.map(u=>In(u.x,u.z,.38,n)),o=s.map((u,d)=>r[d]?[d>=50?d-50:-1,d<2450?d+50:-1,d%50?d-1:-1,d%50<49?d+1:-1].filter(h=>h>=0&&r[h]&&In((u.x+s[h].x)*.5,(u.z+s[h].z)*.5,.38,n)):[]),a=(u,d)=>[.18,.35,.53,.72,.89,1].every(f=>In(u.x+(d.x-u.x)*f,u.z+(d.z-u.z)*f,.29,n)),l=u=>{let d=-1,f=1/0;for(let h=0;h<s.length;h++)if(r[h]){let m=s[h].x-u.x,y=s[h].z-u.z,p=m*m+y*y;p<f&&a(u,s[h])&&(d=h,f=p)}return d},c=(u,d)=>{let f=l(u),h=l(d);if(f<0||h<0||f===h)return[];let m=new Int32Array(s.length).fill(-1),y=[f];m[f]=f;for(let p=0;p<y.length;p++){let g=y[p];if(g===h){let v=[];for(let M=h;M!==f;M=m[M])v.push(s[M]);return v.reverse()}for(let v of o[g])m[v]===-1&&(m[v]=g,y.push(v))}return[]};return(u,d,f,h)=>{u.repath=(u.repath??0)-h;let m=d.x-u.x,y=d.z-u.z,p=Math.hypot(m,y);if(p<.16)return 0;let g=p<7&&a(u,d);for(!g&&u.repath<=0&&(u.route=c(u,d),u.repath=1.25);u.route?.length&&(Rt(u,u.route[0])<.7||u.route.length>1&&Rt(u,u.route[1])<4&&a(u,u.route[1]));)u.route.shift();let v=g?d:u.route?.[0]??d,M=Math.atan2(v.x-u.x,v.z-u.z),S=Math.min(f*h,Rt(u,v));u.angle=oi(u.angle,M,h*8.5);let E=Po(u,u.x+Math.sin(M)*S,u.z+Math.cos(M)*S,.24,n);return E||(u.repath=Math.min(u.repath,.18)),E?f:0}}var uc=n=>ri.reduce((t,e)=>Math.abs(n-e)<Math.abs(n-t)?e:t,ri[0]);function Kf(n,t,e,i,s,r){let o=n.car;if(n.departing)if(o.x<15&&!n.stop)n.stop={x:15.6,z:n.berth.z};else if(n.stop?.x===15.6&&o.x>=14.9){let y=t.z<o.z;n.stop={x:y?20.9:17.2,z:o.z+(y?-1:1)*10}}else n.stop&&n.stop.x!==15.6&&Rt(o,n.stop)<3.4&&(n.departing=!1,n.stop=null);if(!n.stop||!n.departing&&Rt(o,n.stop)<2.6){let y=uc(o.x),p=uc(o.z),g=uc(t.x),v=uc(t.z);Math.abs(o.x-y)>3&&Math.abs(o.z-p)>3?n.stop={x:y,z:o.z}:Math.abs(o.x-y)>2.4&&Math.abs(o.z-p)<2.4?n.stop={x:g,z:p}:Math.abs(o.z-p)>2.4?n.stop={x:y,z:v}:g!==y?n.stop={x:y+Math.sign(g-y)*38,z:p}:v!==p?n.stop={x:y,z:p+Math.sign(v-p)*38}:n.stop={x:g,z:t.z}}let a=Rt(o,t),l=n.departing?6:14,c=Math.min(l,a*.85,Math.max(3,Rt(o,n.stop)*1.85)),u=$h(o,i,s,c),d=!n.departing&&u<2.5?Of(o,i,s,e):null,f=sc(o,d??n.stop,d?4.4:u),h=Qh(o,n,n.stop,i,s,e,r,f),m=o.impact>3||Math.abs(o.speed)<1;n.stall=m&&!n.maneuver?n.stall+r:0,ai(o,r,h,e,i)}var $f="gtbase:progress:1";function Qf(n){try{let t=JSON.parse((n??globalThis.localStorage).getItem($f));return!t||t.version!==1||!Number.isFinite(t.cash)||!Number.isFinite(t.ammo)||!Number.isFinite(t.health)?null:{x:On.x+2.5,z:On.z-2.73,cash:be(Math.floor(t.cash),0,999999),armed:t.armed===!0,equipped:t.equipped===!0,ammo:be(Math.floor(t.ammo),0,360),health:be(Math.floor(t.health),1,100),recruits:Array.isArray(t.recruits)?[...new Set(t.recruits.filter(e=>Number.isInteger(e)&&e>=0||typeof e=="string"&&/^[\w:-]{1,80}$/.test(e)))]:[]}}catch{return null}}function jf(n,t){try{return(t??globalThis.localStorage).setItem($f,JSON.stringify({...n,version:1})),!0}catch{return!1}}var Bo=$t("view"),Wy=$t("menu"),Sr=$t("play"),vr=$t("quality"),es=$t("shop"),Mr=$t("buy"),ru=180,tp=260,dc=36;function fc(n,t){try{return t!==void 0&&localStorage.setItem("gtbase:"+n,t),localStorage.getItem("gtbase:"+n)}catch{return null}}function Xy(){let n=matchMedia("(pointer:coarse), (max-width: 600px)").matches,t=new Zl({antialias:!n,alpha:!1,powerPreference:"high-performance"});t.toneMapping=xo,t.toneMappingExposure=1.17,t.shadowMap.type=ps,Bo.append(t.domElement);let e=new Wr,i=new gn(57,1,.12,370),s=Ff(e),r=s.vehicleSolids,o=Jf(s.vehicleSolids),a=Wf(e),l=_=>_.floorY??s.floorAt(_.x,_.z,0),c=_=>s.walkSolids(_.x,_.z,l(_)),u=()=>[...s.solid,...s.closedDoorSolids()],d=_=>{_.floorY=s.floorAt(_.x,_.z,l(_))},f=_=>l(_)>1.25?[]:I,h={...Io,buildingId:"player-home",unitId:"player-home:0",floorY:0,angle:0,health:100,lift:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,model:Qi(e,2386265,3553348,12220240,!0)},m=[{x:15.75,z:-1.8,angle:Math.PI,color:11422e3},{x:-22.8,z:4,angle:0,color:4362871},{x:36,z:15.3,angle:Math.PI/2,color:13084242},{x:53.3,z:-36,angle:0,color:5795484}],y=[{x:13.9,z:-12.1,angle:Math.PI,color:12095033},{x:22.85,z:28,angle:0,color:4678008}],p=[...m.map(({color:_})=>Uo(e,_)),...y.map(({color:_})=>Jh(e,_))],g=[14783826,5143689,9063749,4690289,9799551,5858695,13023648,11442778].map((_,P)=>{let O=P===3||P===7?Jh(e,_):Uo(e,_);return O.routeIndex=P,O.kind==="bike"&&(O.rider=Qi(e,7429204,3751493,10711635),O.rider.root.visible=!1),O}),v=[...p,...g],M=new Map,S=Array.from({length:15},(_,P)=>{let O=Yn[P%3],nt=Yn[Math.floor(P/3)%3],G=[{x:O+12,z:nt-12},{x:O+12,z:nt+12},{x:O-12,z:nt+12},{x:O-12,z:nt-12}],V=P%4,ft=G[V],_t=G[(V+1)%4],Lt=(P%3+1)/4,Kt={x:ft.x+(_t.x-ft.x)*Lt,z:ft.z+(_t.z-ft.z)*Lt,next:(V+1)%4},de=[11626316,14333537,7242655,8810644,13024669];return st({...Kt,id:"street:"+P},"civilian",Qi(e,de[P%5],P%2?5199188:5522251,[12684900,8737330,15052936][P%3]),G)}),E=s.buildings.flatMap(_=>_.units.filter(P=>_.id!=="player-home"&&P.resident).map((P,O)=>{let nt=P.resident,G=[10184273,6190974,10654562,9532307];return st({...nt,next:0,id:"resident:"+P.id,buildingId:_.id,unitId:P.id},"resident",Qi(e,G[(O+_.id.length)%G.length],4867397,11766629),[])})),R=s.buildings.filter(_=>_.clerk).map((_,P)=>st({..._.clerk,next:0,id:"clerk:"+_.id,buildingId:_.id},"clerk",Qi(e,P%2?4615014:7691090,4802374,12817263),[])),x=new Map(s.buildings.flatMap(_=>_.units.map(P=>[P.id,{building:_,unit:P}]))),T=s.buildings.filter(_=>_.clerk),C=Array.from({length:3},(_,P)=>{let O=cn.z-6.1+P*4.25,nt={x:-7.1,z:cn.z+[-.23,-4.4,3.94][P],next:0,id:"officer:"+P,buildingId:"station"},G=st(nt,"police",Qi(e,3558501,2503491,12157017),[]),V={x:8.2,z:O,angle:Math.PI/2},ft=Uo(e,3626613,!0);return{officer:G,berth:V,car:ft,mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null,maneuver:null}}),I=[...v,...C.map(_=>_.car)],N=new Map,B=Array.from({length:5},(_,P)=>{let O=st({x:0,z:0,next:0,id:"driver:"+P},"civilian",Qi(e,8549210,4342337,[11765348,8475704][P%2]),[]);return O.seated=!0,O.model.root.visible=!1,O}),W=[...S,...E,...R,...C.map(_=>_.officer),...B],b=W,D=new Map(W.map(_=>[_.id,_])),U=new hs(1,14),z=new on({color:6560802,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),et=new Mn(.27,.115,.38),q={cash:new dn({color:7838308}),ammo:new dn({color:14395738}),weapon:new dn({color:4805464})},J=[];function st(_,P,O,nt){return{home:_,baseRole:P,role:P,model:O,path:nt,..._,pace:1.15+Math.abs(_.z)%4*.11,angle:_.angle??0,floorY:_.y??0,scheduleClock:9+Math.abs(_.z*1.17)%29,itinerary:[],rearWait:0,fear:0,health:100,down:0,stagger:0,seated:!1,robbed:!1,surrender:0,drop:null,attack:0,injuryCooldown:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",exitAnim:0,exitSide:1,exitAge:0,pushX:0,pushZ:0}}function wt(_){_.drop&&(e.remove(_.drop),_.drop=null),Object.assign(_,_.home,{role:_.baseRole,health:100,fear:0,down:0,angle:_.home.angle??0,floorY:_.home.y??0,scheduleClock:9+Math.abs(_.home.z*1.17)%29,itinerary:[],rearWait:0,seated:!1,stagger:0,attack:0,surrender:0,robbed:!1,injuryCooldown:0,exitAnim:0,repath:0,route:[],pursuitRoute:[],pursuitKey:"",pushX:0,pushZ:0}),_.model.root.rotation.set(0,_.angle,0),_.model.shadow.visible=!0,_.model.root.visible=!0,d(_),_.model.root.position.set(_.x,l(_),_.z)}let xt=Zf();fc("sound")==="off"&&xt.toggle();let at=new k,gt=new k,yt=new k,Nt=new k,vt=new k,Yt=new k,ie=new k,Ht=new k,ce=new k,le=!1,te=!1,$=null,ct=!1,Ft=0,Gt=null,Jt=0,he=0,Ee=0,Pe=0,Le=0,X=0,ve=0,ne=.23,ue=0,bt=0,De=0,Ut=0,Vt=!0,L="keyboard",w=tp,Y=!1,ht=!1,lt=0,Mt=!1,St=0,K=0,Z=null,ot=null,F=null,rt=null,j=27,mt=0,dt=null,pt=0,Tt=[],Zt=Qf(),ut=()=>{Sr.textContent=Zt?"Continuar do save":"Jogar agora"},It=0,se=0,Ct=0,we=0,Ve=!1,bn=0,Is=!1,Ps="",Pi=0,ci=1,Ls=0,Bn=0,Be=$t("map").getContext("2d"),ns=document.createElement("canvas");ns.width=ns.height=256;let Pn=ns.getContext("2d"),mn=_=>128+_*1.92;Pn.fillStyle="#1d3433",Pn.fillRect(0,0,256,256),Pn.fillStyle="#46605b";for(let _ of ri)Pn.fillRect(mn(_)-10,0,20,256),Pn.fillRect(0,mn(_)-10,256,20);Pn.fillStyle="#345048";for(let _ of s.vehicleSolids)Pn.fillRect(mn(_.x-_.w/2),mn(_.z-_.d/2),_.w*1.92,_.d*1.92);Pn.fillStyle="#6a7859",Pn.fillRect(mn(-10),mn(28),38,38);function Li(){let _=vr.value==="high",P=vr.value==="low";t.setPixelRatio(Math.min(devicePixelRatio,_?2:P?1:n?1.45:1.8)*(P?.85:ci)),t.setSize(Bo.clientWidth,Bo.clientHeight),t.shadowMap.enabled=!P&&(_||ci>.76),s.sun.shadow.needsUpdate=!0,i.aspect=Bo.clientWidth/Math.max(1,Bo.clientHeight),i.updateProjectionMatrix()}function br(){$t("sound").textContent=xt.enabled?"Som ligado":"Som desligado",$t("sound").setAttribute("aria-pressed",String(xt.enabled))}function Ln(_){es.open&&Di(),le=_,Wy.hidden=_,$t("hud").hidden=!_,Ho.clear(),_?(xt.start(),te||(ve=.32,ne=.22),te=!0,Vt=!0,ue=performance.now(),$t("pause").focus({preventScroll:!0}),$t("pause").blur()):(document.pointerLockElement&&document.exitPointerLock(),xt.motor(0,!1),$t("help").removeAttribute("open"),$t("title").innerHTML="GT<span>BASE</span>",$t("intro").textContent="Jogo pausado em Vila Brasa.",Sr.textContent="Continuar",$t("reset").hidden=!1,Sr.focus())}function ko(){$=null,Z=null,rt=null,F=null,ot=null,Tt.length=0,j=27,w=tp,Y=!1,ht=!1,lt=0,Mt=!1,Jt=Ee=X=Pe=Le=Pi=0,Ft=0,ct=!1,Gt=null,a.reset(),s.resetDoors(),It=se=Ct=St=K=0,Ve=!1,bn=0,Is=!1,ve=.32,ne=.22,Ut=0,Object.assign(h,Io,{angle:0,lift:0,health:100,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),d(h),h.model.root.position.set(h.x,0,h.z),h.model.root.rotation.set(0,0,0),h.model.root.visible=!0,h.model.shadow.visible=!0,Ts(h.model,0,0,!1,!1),p.forEach((P,O)=>{Ms(P,[...m,...y][O]),P.stolen=!1,P.body.rotation.z=0,ji(P,0)}),M.clear(),g.forEach((P,O)=>{Fo(P,O),ji(P,0)});for(let P of C)Ms(P.car,P.berth),Object.assign(P,{mode:"ready",stall:0,stop:null,intent:0,combat:null,departing:!1,retaliation:null}),ji(P.car,0);for(let P of W)wt(P);for(let P of B)P.seated=!0,P.model.root.visible=!1;for(let P of J)e.remove(P.mesh);J.length=0,mc(C[0]);let _=T.find(P=>P.kind==="armory")?.entry??mr;s.marker.position.set(_.x,.02,_.z),s.marker.scale.setScalar(.44),s.marker.visible=!0,De=0}function Ne(_){Ps=_,Pi=2.4}function Go(){$t("shop-detail").textContent=Y?"Reponha a muni\xE7\xE3o at\xE9 "+dc+" balas, sem custo.":"Uma pistola e "+dc+" balas por R$ "+ru+".",$t("shop-balance").textContent="Saldo: R$ "+w+" \xB7 Balas: "+lt,Mr.textContent=Y?"Repor muni\xE7\xE3o":"Comprar pistola",Mr.disabled=Y?lt>=dc:w<ru}function pc(){Ho.clear(),document.pointerLockElement&&document.exitPointerLock(),Go(),es.showModal(),Mr.disabled?$t("close-shop").focus():Mr.focus()}function Di(){es.close(),Ho.clear(),De=0}function Vo(){!es.open||Mr.disabled||(Y?Ne("Muni\xE7\xE3o reposta."):(Y=!0,ht=!0,w-=ru,Ne("Pistola comprada.")),lt=dc,xt.bell(),Di())}function Ds(_){let P={..._,ground:I.includes(_)?_.root.position.y:l(_),angle:_.angle},O=u();return C.some(nt=>{let{officer:G,car:V,mode:ft}=nt;return G.health<=0?!1:G.seated&&["driving","patrol","returning"].includes(ft)?oc({...V,ground:V.root.position.y},P,O,{range:32,fov:Math.PI*.62,eye:1.48,aim:1.13}):oc({...G,ground:l(G)},P,O,{range:26,fov:Math.PI*.78,eye:1.66,aim:1.2})})}function A(_,P=$??h,O=Ds(P)){if(!O)return!1;let nt=hc(Jt);return Jt=Math.min(64,Math.max(Jt+(Jt>0?_*.52:0),_)),ct=!0,Ft=.24,Gt={x:P.x,z:P.z,y:l(P),health:100,seated:!1,angle:P.angle},nt||Ne("Crime visto pela pol\xEDcia."),!0}let H=()=>!$&&l(h)<1&&T.some(_=>_.kind==="armory"&&s.interiorAt(h.x,h.z,l(h))?.buildingId===_.id&&Rt(h,_.clerk)<3),it=()=>!$&&l(h)<1&&Et(h)&&Rt(h,gr)<2&&Rs([h.x,l(h)+.96,h.z],[gr.x,l(h)+.96,gr.z],u()),tt=()=>I,Q=_=>_&&_.health>0&&!_.seated,Et=_=>s.interiorAt(_.x,_.z,l(_))?.buildingId==="player-home",Bt=({x:_,z:P})=>_>-10.72&&_<-3.5&&Math.abs(P-cn.z)<9.68,At=_=>_.kind==="bike"?"Moto":"Cup\xEA",Pt=()=>!$&&s.doors.find(_=>_.private&&!_.breached&&!_.opened&&Math.abs(_.base-l(h))<.85&&Rt(_,h)<1.62);function qt(){if(l(h)>1.02)return null;let _=null,P=3;for(let O of v){let nt=Rt(h,O);nt>=P||O.integrity<=0||Math.abs(O.speed)>3.4||(_=O,P=nt)}return _}function ee(_=!1){if(!$)return;let{angle:P,x:O,z:nt}=$;if(!_&&Math.hypot($.vx,$.vz)>4.2){Ne("Reduza a velocidade para sair.");return}let G=$.kind==="bike"?1.02:1.64,V=[G,-G,G+.53,-G-.53].map(_t=>[O+Math.cos(P)*_t,nt-Math.sin(P)*_t]);V.push([O-Math.sin(P)*2.75,nt-Math.cos(P)*2.75],[O+Math.sin(P)*2.77,nt+Math.cos(P)*2.77]);let ft=V.find(([_t,Lt])=>Ki({x:_t,z:Lt},_t,Lt,s.walkSolids(_t,Lt,0),I,b,.36));if(!ft&&!_){Ne("Sem espa\xE7o para abrir a porta.");return}[h.x,h.z]=ft??[Io.x,Io.z],h.floorY=0,d(h),h.angle=P,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0}),$.abandoned=0,$=null,h.model.root.visible=!0,h.model.shadow.visible=!0,h.model.root.rotation.set(0,P,0),Ts(h.model,0,0,!1,ht)}function me(){ee(!0),Object.assign(h,{x:On.x+2.5,z:On.z-2.73,health:100,lift:0,angle:0,vx:0,vz:0,pushX:0,pushZ:0,trip:0,floorY:0}),d(h),St=0,Jt=0,K=0,ve=-Math.PI/2,Vt=!0,Ne("Voc\xEA voltou para casa.")}function Wt(){if(Z||h.health<=0)return;if($){ee();return}if(H()){pc();return}if(it()){let P={health:h.health,cash:w,armed:Y,equipped:ht,ammo:lt,recruits:Tt.map(O=>O.id)};Ne(jf(P)?"Progresso salvo na cama.":"O navegador bloqueou o salvamento."),xt.bell();return}let _=qt();if(!_){Ne(Pt()?"Porta trancada.":"Nada para interagir aqui.");return}if(_.driver){let P=B.find(O=>O.seated)??B.find(O=>O.exitAge>14&&O.role==="civilian"&&Rt(O,h)>11);if(P){let O=_.angle-Math.PI/2,nt=_.x+Math.sin(O)*(_.kind==="bike"?.95:1.51),G=_.z+Math.cos(O)*(_.kind==="bike"?.95:1.51),V=Ki({x:nt,z:G},nt,G,s.walkSolids(nt,G,0),I,b,.29)?{x:nt,z:G}:{x:h.x,z:h.z};wt(P),Object.assign(P,V,{angle:O,exitAnim:.44,fear:6,exitSide:-1,exitAge:0}),_.rider&&(_.rider.root.visible=!1)}_.driver=null,_.vx=_.vz=_.speed=0,_.doorTime=.65,Z={car:_,delay:.46},Ne(_.kind==="bike"?"Tirando o piloto da moto\u2026":"Tirando o motorista do carro\u2026")}else pe(_)}function pe(_){$=_,_.driver=null,h.lift=0,Object.assign(h,{vx:0,vz:0,pushX:0,pushZ:0,trip:0}),St=0,h.model.root.visible=_.kind==="bike",_.stolen||(_.stolen=!0,A(13)),ve=_.angle,Ut=0,Vt=!0}function ke(_,P,O){let nt=new Ce(et,q[_]),G=l(P)+.13;nt.position.set(P.x+.22,G,P.z+.19),e.add(nt),J.push({mesh:nt,kind:_,count:O,y:G,wait:.32,left:105})}function Ue(_){for(let P=J.length-1;P>=0;P--){let O=J[P];O.left-=_,O.wait-=_,O.mesh.rotation.y+=_*2.1,O.mesh.position.y=O.y+Math.sin(O.left*3.8)*.08;let nt=!$&&h.health>0&&O.wait<0&&Math.abs(l(h)-O.y)<.65&&Math.hypot(h.x-O.mesh.position.x,h.z-O.mesh.position.z)<1.03;nt&&(O.kind==="cash"?(w+=O.count,Ne("R$ "+O.count+" recolhidos.")):!Y&&O.kind==="weapon"?(Y=ht=!0,lt+=O.count,Ne("Pistola recolhida.")):(lt=Math.min(360,lt+O.count),Ne("+"+O.count+" balas.")),xt.bell()),(nt||O.left<=0)&&(e.remove(O.mesh),J.splice(P,1))}}function Me(_,P){if(_.health<=0||P<=0)return;if(_.health=Math.max(0,_.health-P),_===h){Ct=.22,_.health<=0&&(ee(!0),K=3,Ne("Voc\xEA caiu. Voltando para casa\u2026"));return}if(_.stagger=.32,_.fear=6,_.surrender=0,F?.npc===_&&(F=null),_.health>0)return;ot===_&&(ot=null),_.down=_.role==="police"?28:19,_.model.shadow.visible=!1;let O=new Ce(U,z);O.position.set(_.x,l(_)+.019,_.z),O.rotation.x=-Math.PI/2,O.scale.set(.52,.32,1),e.add(O),_.drop=O,_.role==="police"?ke(Y?"ammo":"weapon",_,12):_.role!=="ally"&&!_.robbed&&ke("cash",_,24+Math.floor(Math.abs(_.z)%27)),rt===_&&(rt=null,j=29);let nt=Tt.indexOf(_);nt>=0&&Tt.splice(nt,1)}function Ze(_){return[...b,h].filter(O=>O!==_&&Q(O)&&!(O===h&&$&&$.kind==="car")).map(O=>{let nt=l(O)+(O===h?h.lift:0);return{actor:O,y:nt,bounds:[O.x-.31,nt+.1,O.z-.31,O.x+.31,nt+1.9,O.z+.31]}})}function Xt(){i.getWorldDirection(Yt);let _=Ze(h),P=u(),O=tu(i.position.toArray(),Yt.toArray(),P,_,28).hit,nt=[h.x,l(h)+1.38+h.lift,h.z];if(O&&Rt(h,O.actor)<24&&Rs(nt,[O.actor.x,O.y+1.25,O.actor.z],P))return O.actor;let G=.15,V=null;for(let{actor:ft,y:_t}of _){if(Rt(h,ft)>18)continue;Nt.set(ft.x,_t+1.25,ft.z).project(i);let Lt=Math.hypot(Nt.x,Nt.y);Nt.z>=1||Lt>=G||!Rs(nt,[ft.x,_t+1.25,ft.z],P)||(G=Lt,V=ft)}return V}function Xe(_){_&&_.role!=="ally"&&_.health>0&&(ot=_)}function Te(_,P){let O=u(),nt={..._,ground:l(_)};for(let G of C){let V=G.officer;Q(V)&&(V===P||oc({...V,ground:l(V)},nt,O,{range:25,fov:Math.PI*.84,eye:1.6,aim:1.24}))&&(G.retaliation=_)}}function hi(_){if(!_||!["civilian","resident"].includes(_.role)||_.health<=0){Ne("Mire em um pedestre dispon\xEDvel para recrutar.");return}_.role="ally",_.surrender=0,_.fear=0,_.route=[],Tt.push(_),F?.npc===_&&(F=null),Ne("Guarda-costas recrutado."),xt.bell()}function tn(_,P){if(h.health<=0||!P||!["civilian","resident","clerk"].includes(P.role)||P.robbed||Rt(h,P)>9||Math.abs(l(h)-l(P))>.65){F&&(F.npc.surrender=0,F=null);return}let O=h.x-P.x,nt=h.z-P.z,G=Math.sin(P.angle)*O+Math.cos(P.angle)*nt;if(F?.npc!==P){if(F&&(F.npc.surrender=0),F=null,G<Math.hypot(O,nt)*.3||P.stagger>0||P.fear>0)return;F={npc:P,left:5}}P.surrender=1,P.angle=Math.atan2(O,nt),F.left-=_,F.left<=0&&(P.robbed=!0,P.surrender=0,P.fear=7,ke("cash",P,(P.role==="clerk"?104:38)+Math.floor(Math.abs(P.z)%31)),A(15),Ne(P.role==="clerk"?"Dinheiro da loja no ch\xE3o.":"Dinheiro no ch\xE3o."),F=null)}function Ns(){It>0||h.health<=0||h.trip>.15||Z||(h.angle=ve,It=zo,Ve=!0,bn=yr,Xe(dt),xt.punch(!1))}function Jn(){if(Ve=!1,h.health<=0||$)return;let _=Hf(h,b.filter(G=>Q(G)&&G.role!=="ally"&&Math.abs(l(h)-l(G))<.73),l(h)+h.lift,u());if(!_)return;Xe(_),xt.punch(!0);let P=_.x-h.x,O=_.z-h.z,nt=Math.max(.2,Math.hypot(P,O));_.pushX=P/nt*3.6,_.pushZ=O/nt*3.6,Me(_,18),se=.19,A(_.role==="police"?28:12),Ne(_.health<=0?"Pedestre derrubado.":"Soco acertou.")}function ui(_){if(It>0||Ee>0||h.health<=0||!Y||!ht)return;if(lt<=0){Ee=.32,Ne("Sem balas. Reponha na loja.");return}let P=Ds(h);lt--,Ee=.28,X=.095,h.angle=ve,h.model.root.rotation.y=ve,Ts(h.model,0,0,!0,!0,0,_?ne:ne-.22),h.model.muzzle.getWorldPosition(vt),xt.shot();let O=Ze(h),nt=I.map(kt=>{let Qt=kt.kind==="bike"?.31:.96,Ot=kt.kind==="bike"?1.08:1.84,ge=kt.root.position.y;return{car:kt,oriented:{center:[kt.x,ge+(kt.kind==="bike"?.67:.87),kt.z],half:[Qt,kt.kind==="bike"?.44:.65,Ot],angle:kt.angle}}});i.getWorldDirection(Yt);let G=u(),V=[...O,...nt],ft=vt.toArray(),_t=Vf(i.position.toArray(),Yt.toArray(),ft,G,V,{ground:Zn}).impact,Lt=_t.hit,Kt=s.doors.find(kt=>kt.private&&!kt.breached&&_t.solid===kt.closedSolid&&Math.hypot(_t.point[0]-kt.handle.x,_t.point[1]-kt.handle.y,_t.point[2]-kt.handle.z)<.28),de=17;Kt&&s.breachDoor(Kt.id)?(de=23,Ne("Fechadura rompida.")):Lt?.actor&&Lt.actor.role!=="ally"?(Xe(Lt.actor),Me(Lt.actor,iu(_t.point[1]-Lt.y)),de=Lt.actor.role==="police"?34:23,se=.21,Ne(Lt.actor.health<=0?"Alvo derrubado.":"Disparo acertou.")):Lt?.car?(Lt.car.integrity=Math.max(0,Lt.car.integrity-5),se=.16):_&&Xe(dt),A(de,h,P);for(let kt of b)["civilian","resident"].includes(kt.role)&&Rt(kt,h)<17&&(kt.fear=Math.max(kt.fear,4.8));a.emit(ft,_t,{mark:Lt?.car?!0:void 0,attach:Lt?.car?.root})}function Se(_,P){let O=$;ai(O,_,{throttle:P.y,steer:-P.x,brake:P.brake},r,tt()),Ut>1.15&&Math.abs(O.speed)>2.4&&(ve=oi(ve,O.angle,_*2.3))}function $e(_,P){let O=Math.min(1,Math.hypot(P.x,P.y)),nt=h.health>0&&!Z&&h.trip<.12,G=nt?O*(P.aim?2.1:P.run?7.4:4.2):0,V=ve+Math.atan2(-P.x,P.y||0);P.jump&&nt&&h.lift===0&&(St=4.18),(St!==0||h.lift>0)&&(h.lift=Math.max(0,h.lift+St*_-11.8*_*_),St=h.lift>0?St-23.6*_:0);let ft=1-Math.exp(-_*(G>.02?19:27));h.vx+=(Math.sin(V)*G-h.vx)*ft,h.vz+=(Math.cos(V)*G-h.vz)*ft;let _t=Hh(h,(h.vx+h.pushX)*_,(h.vz+h.pushZ)*_,c(h),f(h),b);h.pushX*=Math.exp(-_*6.2),h.pushZ*=Math.exp(-_*6.2),h.trip=Math.max(0,h.trip-_),It<=0&&nt&&(P.aim||O>.05)&&(h.angle=oi(h.angle,P.aim?ve:V,_*11));let Lt=h.model;d(h),Lt.root.position.set(h.x,l(h)+h.lift,h.z),Lt.root.rotation.set(h.health<=0?1.53:Math.min(1.25,h.trip*2.7),h.angle,0),Lt.shadow.visible=h.health>0&&h.lift<.06,Ts(Lt,_,h.trip>.05?0:Math.min(7.5,_t/_),ht&&(P.aim||X>0)&&It<=0,ht&&It<=0,0,P.aim?ne:0),(It>0||P.aim&&!ht)&&qf(Lt,{aim:P.aim,punch:It,pitch:ne}),_t&&Le<=0&&h.lift===0&&(xt.step(),Le=P.run?.27:.41)}function yn(_){let P=Math.sin(_.angle),O=Math.cos(_.angle);return[{x:_.x-O*1.66,z:_.z+P*1.66},{x:_.x+O*1.66,z:_.z-P*1.66}].find(nt=>Ki(nt,nt.x,nt.z,s.walkSolids(nt.x,nt.z,0),I,b,.38))}function Oe(_,P,O){let nt=Math.sin(P.angle),G=Math.cos(P.angle);if(!O)return null;if(![.28,.5,.73,.92].some(Lt=>{let Kt=_.x+(O.x-_.x)*Lt,de=_.z+(O.z-_.z)*Lt,kt=Kt-P.x,Qt=de-P.z;return Math.abs(kt*nt+Qt*G)<2.47&&Math.abs(kt*G-Qt*nt)<1.33}))return O;let ft=(_.x-P.x)*nt+(_.z-P.z)*G>0?2.9:-2.9,_t=(O.x-P.x)*G-(O.z-P.z)*nt;return{x:P.x+nt*ft+G*_t,z:P.z+G*ft-nt*_t}}function Je(_){let P=_.officer,O=_.car,nt=Math.sin(O.angle),G=Math.cos(O.angle),V=yn(O)??[{x:O.x-nt*2.83,z:O.z-G*2.83},{x:O.x+nt*2.87,z:O.z+G*2.87}].find(ft=>Ki(ft,ft.x,ft.z,s.walkSolids(ft.x,ft.z,0),I,b,.37));return V?(P.seated=!1,P.model.root.visible=!0,P.x=V.x,P.z=V.z,P.floorY=0,d(P),P.angle=O.angle,P.exitAnim=.38,P.model.shadow.visible=!0,O.doorTime=.65,_.mode="foot",!0):!1}function kn(_,P){let O=I.includes(P)?P:null;if(Rt(_,P)>18||Rt(_,P)<.5||(O?O.integrity<=0:!Q(P)))return!1;let nt=l(_),G=(O?O.root.position.y:l(P))+(P===h?h.lift:0)+(O?1.08:1.27),V=u();if(!Rs([_.x,nt+1.35,_.z],[P.x,G,P.z],V))return!1;_.angle=Math.atan2(P.x-_.x,P.z-_.z),_.model.root.position.set(_.x,nt,_.z),_.model.root.rotation.y=_.angle;let ft=Math.atan2(nt+1.42-G,Math.max(.4,Rt(_,P)));Ts(_.model,0,0,!0,!0,0,ft),_.model.muzzle.getWorldPosition(ie);let _t=bt*14+_.x,Lt=Math.sin(_t)*(_.role==="ally"?.35:.48),Kt=P.x+Math.cos(_.angle)*Lt,de=P.z-Math.sin(_.angle)*Lt;Ht.set(Kt,G+Math.cos(_t*1.4)*.32,de);let kt=Math.min(24,ie.distanceTo(Ht)+1.65),Qt=ce.subVectors(Ht,ie).normalize(),Ot=Ze(_);O&&Ot.push({actor:O,y:0,bounds:[P.x-.93,.3,P.z-1.02,P.x+.93,1.52,P.z+1.02]});let ge=rc(ie.toArray(),Qt.toArray(),V,Ot,kt,{ground:Zn});if(_.role==="ally"&&(P.role==="police"||ge.hit?.actor.role==="police")&&Te(_,ge.hit?.actor),ge.hit&&(ge.hit.actor===P||ge.hit.actor.role==="civilian")){let di=_.role==="police"&&P===h?.62:.83;O&&ge.hit.actor===O?(O.integrity=Math.max(0,O.integrity-5),O.kind==="bike"&&Me(h,12)):Me(ge.hit.actor,Math.round(iu(ie.y+Qt.y*ge.distance-ge.hit.y)*di))}return Ht.copy(ie).addScaledVector(Qt,ge.distance),_.role!=="ally"&&(P===h||P===$||Tf(ie,Ht,$??h))&&Xe(_),a.emit(ie.toArray(),ge,{enemy:!0}),_.attack=(_.role==="police"?.91:1.07)+(Math.sin(_t)+1)*.18,Rt(_,$??h)<31&&xt.shot(),!0}function Us(_,P,O){let nt=Rt(_,P);return _.stagger>0||_.exitAnim>0?{speed:0,aim:!1}:nt<17&&_.attack<=0&&kn(_,P)||_.attack>.28&&nt<15.5?(_.angle=oi(_.angle,Math.atan2(P.x-_.x,P.z-_.z),O*12),{speed:0,aim:!0}):{speed:nt>3.3||Math.abs(l(_)-l(P))>1.8?au(_,P,4.4,O):0,aim:nt<12}}function ep(_,P){if(j-=P,rt){j<=0&&(rt.role="civilian",rt.fear=4,rt=null,j=37);return}if(j>0)return;let O=S.find(nt=>nt.role==="civilian"&&Q(nt)&&Rt(nt,_)>14&&Rt(nt,cn)<55);if(!O){j=8;return}O.role="rogue",rt=O,j=63,O.attack=.1}function ou(_,P){return _.x<-5.2?{x:-4.65,z:_.z}:_.x<-3.63&&Math.abs(_.z-cn.z)>.46?{x:-4.65,z:cn.z}:_.x<-2.64?{x:-2.38,z:cn.z}:P}function np(_){return _.x>-3.58&&(_.x>-2.55||Math.abs(_.z-cn.z)>.5)?{x:-2.66,z:cn.z}:_.x>-4.33?{x:-4.68,z:cn.z}:_.x>-5.15&&Math.abs(_.z-_.home.z)>.5?{x:-4.68,z:_.home.z}:_.home}function mc(_,P=!0){let{car:O,officer:nt}=_;if(P)Fo(O,3),O.x-=Math.sin(O.angle)*6.5,O.z-=Math.cos(O.angle)*6.5;else{let G={};Fo(G,3),O.driver=G.driver;let V=Math.sin(O.angle),ft=Math.cos(O.angle),_t=1/0;O.driver.route.forEach((Lt,Kt)=>{let de=Lt.x-O.x,kt=Lt.z-O.z,Qt=Math.hypot(de,kt)+(de*V+kt*ft<0?16:0);Qt<_t&&(_t=Qt,O.driver.next=Kt)})}_.mode="patrol",_.retaliation=null,_.stop=null,nt.seated=!0,nt.model.root.visible=!1,ji(O,0)}function ip(_,P){Ft-=_,Ft<=0&&Jt>0&&(ct=Ds(P),ct&&(Gt={x:P.x,z:P.z,y:l(P),health:100,seated:!1,angle:P.angle}),Ft=.24);let O=Jt>0&&h.health>0?ct?P:Gt:rt,nt=O===rt?rt?1:0:hc(Jt);Jt>0&&(Jt=Math.max(0,Jt-_*(ct?.23:1.1)),Jt===0&&(Gt=null,ct=!1,Ne("Voc\xEA despistou a pol\xEDcia."))),C.forEach((G,V)=>{let ft=G.officer,_t=G.car;G.retaliation&&!Q(G.retaliation)&&(G.retaliation=null);let Lt=G.retaliation,Kt=Lt??O,de=!!(Lt||O&&V<nt);if(ft.health<=0){G.mode="disabled",_t.driver=null,ft.down<=0&&Rt(ft,P)>13&&I.every(Ot=>Ot===_t||Rt(Ot,G.berth)>3.5)&&(wt(ft),Ms(_t,G.berth),ji(_t,0),G.mode="ready",G.retaliation=null);return}if(G.mode==="patrol"&&(de||_t.integrity<=0)&&(G.mode="driving",_t.driver=null,G.stop=null,G.stall=0,G.departing=!1),G.mode==="patrol")return;Lt&&(G.mode==="ready"||G.mode==="boarding")&&(G.mode="foot");let kt=C.slice(0,V).some(Ot=>Ot.mode==="boarding"&&Ot.officer.x<-3.12);if(G.mode==="ready"&&de&&!kt&&(G.mode="boarding",G.stop=null,G.stall=0,G.departing=!0),G.mode==="boarding")if(!de)G.mode="foot";else{let Ot=yn(_t);Ot&&Rt(ft,Ot)<.63?(ft.seated=!0,ft.model.root.visible=!1,G.mode="driving",_t.doorTime=.6):Ot&&(G.intent=Ni(ft,ou(ft,Oe(ft,_t,Ot)),3.75,_))}if(G.mode==="driving"){if(!de&&V===0&&_t.integrity>0&&!G.departing){mc(G,!1);return}let Ot=Kt?Rt(_t,Kt):1/0;!de||_t.integrity<=0||G.stall>8.2&&!G.maneuver||Ot<12.7&&!(Kt===$&&Math.abs($.speed)>6)?(ai(_t,_,{throttle:0,steer:0,brake:!0},r,I),Math.hypot(_t.vx,_t.vz)<2.7&&!Je(G)&&_t.integrity>0&&ai(_t,_,{throttle:.21,steer:.26,brake:!1},r,I)):Kf(G,Kt,r,I,b,_)}else if(G.mode==="foot"){let Ot=Bt(ft)||ft.x>-3.62&&ft.x<-2.64&&Math.abs(ft.z-cn.z)<1.2;de&&Ot&&!Bt(Kt)?G.intent=Ni(ft,ou(ft,Kt),4.5,_):de&&Kt===Gt?G.intent=Ni(ft,Kt,3.45,_):de?G.combat=Us(ft,Kt,_):Rt(ft,ft.home)>.72?G.intent=Ni(ft,np(ft),3.15,_):Rt(P,_t)>12&&Rt(P,G.berth)>9&&I.every(ge=>ge===_t||Rt(ge,G.berth)>3.5)&&(Ms(_t,G.berth),ji(_t,0),G.mode="ready")}else G.mode==="ready"&&V===0&&!O&&Rt(P,G.berth)>19&&mc(G);let Qt=G.mode==="driving"||de&&G.mode==="foot";_t.lamps.forEach((Ot,ge)=>{Ot.visible=!Qt||Math.floor(bt*8+ge)%2===0}),Qt&&he<=0&&Rt(P,_t)<42&&(xt.siren(),he=1.35)})}function sp(_,P){let O={player:$,vehicles:tt()},nt=C.filter(G=>G.mode==="patrol").map(G=>G.car);Bf([...g,...nt],O,b,r,_,M);for(let G of p)G!==$&&Math.hypot(G.vx,G.vz)>.06?ai(G,_,{throttle:0,steer:0,brake:!0},r,O.vehicles):G!==$&&(G.impact=Math.max(0,G.impact-_*21));for(let G of I){if(G.routeIndex>=0&&G!==$){G.abandoned+=_;let V=!G.driver&&G.abandoned>25,ft=G.integrity<=0||(G.driver?.stuck??0)>13;if((V||ft)&&Rt(P,G)>17){let _t={};Fo(_t,G.routeIndex),_t.kind=G.kind,kf(_t,O.vehicles.filter(Lt=>Lt!==G),P,r)&&Object.assign(G,_t)}}G!==$&&G.impact>5&&Rt(P,G)<18&&Pe<=0&&(xt.crash(),Pe=.32),ji(G,_,G.steer),G.rider&&(G.rider.root.visible=!!G.driver&&G.integrity>0,G.rider.root.visible&&Zh(G.rider,G))}if($){if($.impact>4.1&&Pe<=0){xt.crash(),Ct=.24,Pe=.36;let G=$,V=G.impact;Ne(G.integrity<43?"Motor avariado.":"Colis\xE3o."),V>9&&Me(h,Math.min(58,Math.round(V*(G.kind==="bike"?2.45:1.05)))),$&&G.kind==="bike"&&V>10.5&&(G.integrity=Math.max(0,G.integrity-8),ee(!0),Ne("Voc\xEA caiu da moto."))}if($&&$.integrity<=0&&Math.hypot($.vx,$.vz)<3){let G=At($);ee(!0),Ne(G+" sem condi\xE7\xF5es de rodar.")}}}function Ni(_,P,O,nt){if(!P)return 0;let G=c(_),V=Rt(_,P);if(V<.13)return 0;let ft=s.interiorAt(_.x,_.z,l(_)),_t=s.interiorAt(P.x,P.z,P.y??l(P));if(!ft&&!_t&&V>5.9)return o(_,P,O,nt);let Lt=P,Kt=(Qt,Ot)=>[.24,.46,.68,.88,1].every(ge=>In(Qt.x+(Ot.x-Qt.x)*ge,Qt.z+(Ot.z-Qt.z)*ge,.29,G));if(!Kt(_,P)){let Qt=1/0;for(let Ot of G)if(!(Rt(_,Ot)>Math.hypot(Ot.w,Ot.d)*.5+3.1))for(let ge of[-1,1])for(let di of[-1,1]){let Kn={x:Ot.x+ge*(Ot.w*.5+.44),z:Ot.z+di*(Ot.d*.5+.44)},en=Rt(_,Kn),Wo=Rt(Kn,P);if(en<.3||en>4.5||!Kt(_,Kn))continue;let Xo=en+Wo+(Wo>V+.25?1.7:0);Xo<Qt&&(Qt=Xo,Lt=Kn)}}let de=Math.atan2(Lt.x-_.x,Lt.z-_.z);_.angle=oi(_.angle,de,nt*8.5);let kt=Math.min(O*nt,Rt(_,Lt));return Po(_,_.x+Math.sin(de)*kt,_.z+Math.cos(de)*kt,.26,G)?O:0}function rp(_,P){let O=l(_);if(s.interiorAt(_.x,_.z,O))return{x:_.x,z:_.z,y:O};let nt=Math.floor((Math.sqrt(1+P)-1)*.75),G=(P%2===0?1:-1)*(1.05+P%5*.66),V=3.1+nt*1.1,ft=Math.sin(_.angle),_t=Math.cos(_.angle);return{x:_.x-ft*V+_t*G,z:_.z-_t*V-ft*G,y:O}}function au(_,P,O,nt){let G=s.interiorAt(_.x,_.z,l(_)),V=s.interiorAt(P.x,P.z,P.y??l(P));if(G?.buildingId===V?.buildingId&&Math.abs((G?.floor??0)-(V?.floor??0))<1.1)return _.pursuitRoute=[],_.pursuitKey="",Ni(_,P,O,nt);let ft=(V?.buildingId??"street")+":"+(V?.floor??0);if(_.pursuitKey!==ft){_.pursuitKey=ft;let _t=[],Lt=s.buildings.find(Qt=>Qt.id===G?.buildingId),Kt=s.buildings.find(Qt=>Qt.id===V?.buildingId),de=Lt?.units.find(Qt=>Math.abs(Qt.floor-G.floor)<.25),kt=Kt?.units.find(Qt=>Math.abs(Qt.floor-V.floor)<.25);Lt&&_t.push(de?.inside,de?.entry,de?.outside,...[...de?.stairs??[]].reverse(),Lt.inside,Lt.entry,Lt.outside),Kt&&_t.push(Kt.outside,Kt.entry,Kt.inside,...kt?.stairs??[],kt?.outside,kt?.entry,kt?.inside),_.pursuitRoute=_t.filter(Boolean)}for(;_.pursuitRoute.length&&Rt(_,_.pursuitRoute[0])<.66&&Math.abs(l(_)-(_.pursuitRoute[0].y??0))<.85;)_.pursuitRoute.shift();return Ni(_,_.pursuitRoute[0]??P,O,nt)}function gc(_,P,O){let nt=_.itinerary[0];return nt?Rt(_,nt)<.58&&Math.abs(l(_)-(nt.y??0))<1.1?(_.itinerary.shift(),0):Ni(_,nt,P,O):0}function op(_,P){let O=x.get(_.unitId);if(!O)return 0;let{building:nt,unit:G}=O;if(_.itinerary.length)return gc(_,_.pace,P);if(_.scheduleClock-=P,_.scheduleClock>0)return 0;let V=Rt(_,nt.outside)>5&&s.interiorAt(_.x,_.z,l(_))?.buildingId!==nt.id,ft=nt.approach??nt.outside,_t=G.stairs??[];if(V)_.itinerary=[ft,nt.outside,nt.entry,nt.inside,..._t,G.outside,G.entry,G.inside,G.resident];else{let Lt={x:ft.x+Math.sin(_.id.length)*4.3,z:ft.z+Math.cos(_.home.z)*4.3,y:0};_.itinerary=[G.inside,G.entry,G.outside,...[..._t].reverse(),nt.inside,nt.entry,nt.outside,ft,Lt]}return _.itinerary=_.itinerary.filter(Boolean),_.scheduleClock=22+Math.abs(_.home.x+bt)%22,gc(_,_.pace,P)}function lu(_,P,O=!1){b=W.filter(V=>Rt(V,P)<(V.role==="civilian"?69:47)||V.role==="ally"||V.role==="police"||V===rt||V===ot);let nt=new Set(b);for(let V of W)V.model.root.visible=nt.has(V)&&!V.seated;let G=new Map(b.map(V=>[V,{x:V.x,z:V.z}]));O||(ep(P,_),ip(_,P));for(let V of b){if(V.seated)continue;if(V.attack-=_,V.stagger=Math.max(0,V.stagger-_),V.injuryCooldown-=_,V.exitAnim=Math.max(0,V.exitAnim-_),V.exitAge+=_,V.health<=0){if(V.down=Math.max(0,V.down-_),V.model.root.rotation.x+=(Math.PI/2-V.model.root.rotation.x)*Math.min(1,_*8),V.model.root.position.y=l(V)+.19,V.drop){let kt=Math.min(.63,.32+(19-V.down)*.09);V.drop.rotation.z=V.angle,V.drop.scale.set(Math.max(.38,kt),Math.max(.24,kt*.68),1)}V.role!=="police"&&V.down<=0&&Rt(V.home,P)>7&&Rt(V,P)>7&&(wt(V),B.includes(V)&&(V.seated=!0,V.model.root.visible=!1));continue}let ft=0,_t=!1,Lt=C.find(kt=>kt.officer===V);if(Lt)ft=Lt.combat?.speed??Lt.intent??0,_t=!!Lt.combat?.aim,Lt.intent=0,Lt.combat=null;else if(V.role==="ally")if(ot&&Q(ot))({speed:ft,aim:_t}=Us(V,ot,_));else{let kt=rp(P,Tt.indexOf(V));(Rt(kt,V)>1.25||Math.abs(l(V)-kt.y)>1.75)&&(ft=au(V,kt,$?6.1:4.45,_))}else if(V.role==="rogue"){let kt=S.filter(Ot=>Ot!==V&&Ot.role==="civilian"&&Q(Ot)).sort((Ot,ge)=>Rt(V,Ot)-Rt(V,ge))[0],Qt=C.map(Ot=>Ot.officer).find(Ot=>Q(Ot)&&Rt(Ot,V)<15);(Qt||kt)&&({speed:ft,aim:_t}=Us(V,Qt??kt,_))}else if(V.surrender<=0){let kt=V.path[V.next];if(V.role==="civilian"&&!V.itinerary.length&&V.fear<=0&&T.length&&(V.scheduleClock-=_,V.scheduleClock<=0)){let Qt=T[Math.floor(Math.abs(V.home.x*11+V.home.z*4+bt))%T.length];Rt(V,Qt.outside)<38&&(V.itinerary=[Qt.outside,Qt.entry,Qt.inside,Qt.entry,Qt.outside]),V.scheduleClock=36+Math.abs(V.home.x)%25}if(V.fear=Math.max(0,V.fear-_),V.fear>0&&Rt(V,P)<15){let Qt=Math.atan2(V.x-P.x,V.z-P.z);for(let Ot of[0,.84,-.84,1.52,-1.52]){let ge=Qt+Ot;if(Po(V,V.x+Math.sin(ge)*3.7*_,V.z+Math.cos(ge)*3.7*_,.22,c(V))){V.angle=oi(V.angle,ge,_*8),ft=3.7;break}}}else V.role==="resident"?ft=op(V,_):V.itinerary.length?ft=gc(V,V.pace,_):kt&&(Rt(V,kt)<.54&&(V.next=(V.next+1)%V.path.length,kt=V.path[V.next]),ft=Ni(V,kt,V.pace,_))}let Kt=G.get(V);if(Kt&&V.exitAnim<=0){let kt=V.x-Kt.x+V.pushX*_,Qt=V.z-Kt.z+V.pushZ*_;V.x=Kt.x,V.z=Kt.z;let Ot=Lt?.mode==="boarding"?I.filter(di=>di!==Lt.car):I,ge=Hh(V,kt,Qt,c(V),l(V)>1.25?[]:Ot,[...b,...$?[]:[h]],.29);ft>0&&(ft=Math.min(ft,ge/_))}if(V.pushX*=Math.exp(-_*7.6),V.pushZ*=Math.exp(-_*7.6),!O&&V.injuryCooldown<=0){let kt=cu(V,2.8);if(kt){let{car:Qt,speed:Ot,vx:ge,vz:di}=kt,Kn=su(Ot);V.pushX=be(ge,-8,8)*.59,V.pushZ=be(di,-8,8)*.59,Kn>0&&(V.injuryCooldown=1.18,Me(V,Kn),Qt===$&&Kn>12&&A(19))}}let de=V.model;V.health<=0||(d(V),de.root.position.set(V.x,l(V)+V.exitAnim*.35,V.z),de.root.rotation.set(V.exitAnim*.7,V.angle,V.exitAnim*V.exitSide*.89+(V.stagger>0?Math.sin(V.stagger*9)*.21:0)),Ts(de,_,V.exitAnim>0?2.9:ft,_t,["police","rogue","ally"].includes(V.role),0,0,V.surrender>0))}if(!O&&!$&&l(h)<1.15&&h.health>0&&h.lift<.3&&we<=0){let V=cu(h,2.35);if(V){let{speed:ft,vx:_t,vz:Lt}=V,Kt=su(ft);h.pushX=be(_t,-13,13)*.73,h.pushZ=be(Lt,-13,13)*.73,h.trip=ft>=5.3?Math.min(.82,.35+ft*.021):.12,h.vx=h.vz=0,Kt>0&&(Me(h,Kt),xt.crash(),Ne("Voc\xEA foi atropelado.")),we=.87}}}function cu(_,P){for(let O of I){if(l(_)>1.2||Rt(O,_)>5)continue;let nt=N.get(O),G=nt&&Rt(nt,O)<3?nt:null,V=G?Math.hypot(G.vx,G.vz):0,ft=Math.hypot(O.vx,O.vz),_t=Math.max(ft,V);if(!(_t<P||!wf(O,G,_)))return{car:O,speed:_t,vx:V>ft?G.vx:O.vx,vz:V>ft?G.vz:O.vz}}return null}function ap(_,P){s.updateDoors(_,[P,...b.filter(O=>Q(O))])}function lp(_,P,O){let nt=l(P),G=$?null:s.interiorAt(P.x,P.z,nt),V=!!G;Is!==V&&(Is=V,Vt=!0);let ft=i.aspect<.85,Lt=V?O?2.25:3.4:$?$.kind==="bike"?8.2:ft?12:10.2:O?4.45:ft?7.9:6.5,Kt=$?1.95+$.root.position.y:1.38+nt+h.lift*.46,de=$?0:O?.61:.22,kt=O?.1+ne*.19:Math.max(V?.28:.1,ne);gt.set(P.x+Math.cos(ve)*de,Kt,P.z-Math.sin(ve)*de),yt.set(gt.x-Math.sin(ve)*Lt*Math.cos(kt),Kt+Math.sin(kt)*Lt,gt.z-Math.cos(ve)*Lt*Math.cos(kt));function Qt(en){G&&(en.x=be(en.x,G.x-G.w*.5+.3,G.x+G.w*.5-.3),en.z=be(en.z,G.z-G.d*.5+.3,G.z+G.d*.5-.3),en.y=be(en.y,G.floor+.55,G.ceiling-.42))}Qt(yt);let Ot=c(P).filter(en=>en.h>nt+1.45);for(let en=.11;en<=1;en+=.067){let Wo=To.lerp(gt.x,yt.x,en),Xo=To.lerp(gt.z,yt.z,en);if(!In(Wo,Xo,.2,Ot)){yt.lerp(gt,1-Math.max(.06,en-.105)),yt.y=Math.max(yt.y,nt+1.95);break}}Qt(yt);let ge=O?14:1,di=Mt?ne:ne-.22,Kn=O?Kt-Math.tan(di)*ge:Kt-.07;at.set(gt.x+Math.sin(ve)*ge,Kn,gt.z+Math.cos(ve)*ge),Vt?(i.position.copy(yt),Vt=!1):i.position.lerp(yt,1-Math.exp(-_*14)),Qt(i.position),i.lookAt(at),i.updateMatrixWorld()}function is(_,P,O){Be.fillStyle=P,Be.beginPath(),Be.arc(mn(_.x),mn(_.z),O,0,Math.PI*2),Be.fill()}function cp(_,P){let O=hc(Jt),nt=Math.round(Rt(_,On));$t("detail").textContent="Casa "+nt+" m \xB7 Loja "+Math.round(Rt(_,mr))+" m",$t("cash").textContent="R$ "+w.toLocaleString("pt-BR"),$t("crew").textContent="Gangue "+Tt.length;let G=$t("prompt"),V=L==="pad"?"Y \xB7 ":L==="keyboard"?"E \xB7 ":"",ft=H(),_t=it(),Lt=Pt(),Kt=$??qt(),de=F&&P&&Pi<=0;G.hidden=!(Kt||ft||_t||Lt||Pi>0||de);let kt=$?"Sair "+($.kind==="bike"?"da moto":"do carro"):_t?"Salvar na cama":ft?"Abrir loja de armas":Lt?"Porta trancada":Kt?"Pegar "+(Kt.kind==="bike"?"a moto":"o cup\xEA"):"";G.textContent=Pi>0?Ps:de?"Mantenha a mira \xB7 "+Math.ceil(F.left)+" s":V+kt,$t("heat").hidden=!O,$t("heat").textContent="\u2605".repeat(O)+" PROCURADO",$t("mode").textContent=$?At($)+" \xB7 "+Math.round($.integrity)+"%":ht?"Pistola":"Vila Brasa",$t("reading").textContent=$?Math.round(Math.hypot($.vx,$.vz)*3.6)+" km/h":ht?lt+" balas":"Punhos";let Qt=$t("health");Qt.value=h.health,Qt.title="Vida: "+Math.ceil(h.health)+"%",$t("crosshair").hidden=!(P||ht&&pt>0&&!$),$t("interact").textContent=$?"Sair":_t?"Salvar":ft?"Loja":"Entrar",$t("sprint").textContent=$?"Freio":"Correr",$t("aim").hidden=!!$,$t("fire").hidden=!!$||!ht,$t("weapon").hidden=!!$||!Y,$t("weapon").textContent=ht?"Punhos":"Pistola",$t("jump").hidden=$t("punch").hidden=!!$,$t("recruit").hidden=!!$||!P,$t("hud").classList.toggle("armed",!$),$t("hud").classList.toggle("driving",!!$),Be.drawImage(ns,0,0);for(let Ot of v)Ot!==$&&Ot.integrity>0&&is(Ot,Ot.driver?"#82b9b3":"#eab987",Ot.kind==="bike"?2.2:Ot.driver?2.6:3.5);is(mr,"#eaff89",6),is(On,"#dcc39b",5),is(cn,"#99c6ff",5);for(let Ot of T)Ot.kind!=="armory"&&is(Ot.entry,"#dbae80",2.5);for(let Ot of C)["driving","patrol","foot"].includes(Ot.mode)&&is(Ot.officer.seated?Ot.car:Ot.officer,Ot.mode==="patrol"?"#8fc9f8":"#ff7769",4.3);for(let Ot of Tt)is(Ot,"#97ebaf",3.5);Be.save(),Be.translate(mn(_.x),mn(_.z)),Be.rotate(-($?$.angle:h.angle)),Be.fillStyle="#fff9e6",Be.strokeStyle="#243938",Be.lineWidth=2.7,Be.beginPath(),Be.moveTo(0,10),Be.lineTo(-6,-6),Be.lineTo(0,-3),Be.lineTo(6,-6),Be.closePath(),Be.stroke(),Be.fill(),Be.restore()}function hp(_){let P=(_-ue)/1e3,O=be(P,1/240,.05);ue=_,bt+=O;let nt=Ho.read(!!$,O);if(es.open){nt.punch||nt.interact?Di():nt.confirm&&Vo(),t.render(e,i);return}if(te){if(le){L=nt.mode;for(let Kt of I)N.set(Kt,{x:Kt.x,z:Kt.z,vx:Kt.vx,vz:Kt.vz});nt.weapon&&Y&&!$&&(ht=!ht,dt=null,pt=0);let G=nt.aim&&!$&&It<=0&&h.health>0;if(G!==Mt&&(ne=G?.015:.22,Mt=G),Ut=Math.abs(nt.lookX)+Math.abs(nt.lookY)>.003?0:Ut+O,ve-=nt.lookX,ne=be(ne+nt.lookY,G?-1.03:-.31,.84),$&&Ut>1.2&&(ne+=(.24-ne)*O),Pe-=O,Ee-=O,Le-=O,we-=O,he-=O,Pi-=O,X-=O,a.update(O),It=Math.max(0,It-O),Ve&&(bn-=O,bn<=0&&Jn()),se-=O,Ct-=O,pt-=O,mt-=O,K>0&&(K-=O,K<=0&&me()),Z&&(Z.delay-=O,Z.delay<=0)){let Kt=Z.car;Z=null,h.health>0&&Kt.integrity>0&&Rt(h,Kt)<3.75&&pe(Kt)}if(nt.interact&&Wt(),es.open)return;ap(O,$??h),$?Se(O,nt):$e(O,{...nt,aim:G}),sp(O,$??h),$&&(h.x=$.x,h.z=$.z),$?.kind==="bike"&&Zh(h.model,$),lu(O,$??h),Ue(O),xt.motor($?.speed??0,!!$);let ft=$??h,_t=G&&!$&&h.health>0;nt.fire&&ht&&!$&&h.health>0&&lt>0&&(pt=1.38),lp(O,ft,_t||!$&&pt>0),_t&&(mt<=0||nt.recruit||nt.punch||nt.fire&&Ee<=0)?(dt=Xt(),mt=.092):_t||(dt=null),nt.recruit&&!$&&hi(dt),tn(O,_t&&ht?dt:null),(nt.punch||nt.fire&&!ht)&&!$&&Ns(),nt.fire&&!$&&ui(_t),$t("hitmark").hidden=se<=0,$t("impact").hidden=Ct<=0,s.marker.visible=Rt(ft,mr)>2.8&&Rt(ft,mr)<13,s.beacon.rotation.y=bt*2,s.beacon.position.y=2.55+Math.sin(bt*4)*.27,De-=O,De<=0&&(cp(ft,_t),De=.1)}}else{let G=.54+Math.sin(bt*.13)*.19,V=i.aspect<1?26:30;i.position.set(24+Math.sin(G)*V,14,17+Math.cos(G)*V),i.lookAt(10,2,13),lu(O,h,!0)}t.render(e,i),le&&vr.value==="auto"&&P>0&&P<.22&&ci>.7&&(Bn+=P,++Ls>=85&&(Bn/Ls>.026&&(ci=Math.max(.69,ci-.16),Li()),Ls=0,Bn=0))}let Ho=Yf(()=>{es.open?Di():le?Ln(!1):hu()},()=>le),xc=fc("quality");(xc==="low"||xc==="high")&&(vr.value=xc),vr.addEventListener("change",()=>{fc("quality",vr.value),ci=1,Li()}),$t("sound").addEventListener("click",()=>{fc("sound",xt.toggle()?"on":"off"),br()}),$t("pause").addEventListener("click",()=>Ln(!1)),$t("reset").addEventListener("click",()=>{ko(),Ln(!0)}),Mr.addEventListener("click",Vo),$t("close-shop").addEventListener("click",Di),es.addEventListener("cancel",_=>{_.preventDefault(),Di()});function hu(){if(!te&&Zt){Object.assign(h,{x:Zt.x,z:Zt.z,health:Zt.health,floorY:0}),d(h),w=Zt.cash,Y=Zt.armed,ht=Y&&Zt.equipped,lt=Y?Zt.ammo:0;for(let _ of new Set(Zt.recruits)){let P=typeof _=="number"?S[_]:D.get(_);P&&(P.role="ally",P.seated=!1,P.model.root.visible=!0,Tt.push(P))}Ln(!0),ve=-Math.PI/2}else Ln(!0)}Sr.addEventListener("click",hu),document.addEventListener("visibilitychange",()=>{document.hidden&&le&&Ln(!1)}),window.addEventListener("resize",Li),t.domElement.addEventListener("webglcontextrestored",Li),ko(),br(),Li(),ut(),Sr.disabled=!1,ue=performance.now(),t.setAnimationLoop(hp)}try{Xy()}catch(n){console.error(n),Sr.textContent="3D indispon\xEDvel",$t("intro").textContent="Este navegador n\xE3o conseguiu iniciar o WebGL 2 necess\xE1rio para jogar."}})();
