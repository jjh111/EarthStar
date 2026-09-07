(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _l="180",ts={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nh=0,Kl=1,ih=2,A0=1,sh=2,Cn=3,ti=0,Ie=1,_n=2,Yn=0,es=1,Be=2,Zl=3,Jl=4,rh=5,pi=100,ah=101,oh=102,lh=103,ch=104,uh=200,hh=201,dh=202,fh=203,oo=204,lo=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,Mh=212,Sh=213,yh=214,co=0,uo=1,ho=2,as=3,fo=4,po=5,mo=6,go=7,vl=0,bh=1,Eh=2,Kn=0,Th=1,wh=2,Ah=3,Rh=4,Ch=5,Ph=6,Dh=7,R0=300,os=301,ls=302,_o=303,vo=304,Zr=306,xo=1e3,gi=1001,Mo=1002,hn=1003,Lh=1004,Ks=1005,je=1006,ca=1007,_i=1008,Mn=1009,C0=1010,P0=1011,Ls=1012,xl=1013,Si=1014,Ln=1015,Gs=1016,Ml=1017,Sl=1018,Is=1020,D0=35902,L0=35899,I0=1021,U0=1022,un=1023,Us=1026,Ns=1027,N0=1028,yl=1029,F0=1030,bl=1031,El=1033,Ir=33776,Ur=33777,Nr=33778,Fr=33779,So=35840,yo=35841,bo=35842,Eo=35843,To=36196,wo=37492,Ao=37496,Ro=37808,Co=37809,Po=37810,Do=37811,Lo=37812,Io=37813,Uo=37814,No=37815,Fo=37816,Oo=37817,zo=37818,Bo=37819,ko=37820,Vo=37821,Ho=36492,Go=36494,Wo=36495,$o=36283,Xo=36284,qo=36285,jo=36286,Ih=3200,Uh=3201,O0=0,Nh=1,qn="",Xe="srgb",cs="srgb-linear",kr="linear",se="srgb",Ci=7680,Ql=519,Fh=512,Oh=513,zh=514,z0=515,Bh=516,kh=517,Vh=518,Hh=519,tc=35044,ec="300 es",vn=2e3,Vr=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,Yo=180/Math.PI;function Ws(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Gh(n,t){return(n%t+t)%t}function ua(n,t,e){return(1-e)*n+e*t}function gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wh={DEG2RAD:Or};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*g,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,f*y);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const x=o*y;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,h=h*m+g*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*p-c*d,t[e+1]=l*_+u*d+c*h-o*p,t[e+2]=c*_+u*p+o*d-l*h,t[e+3]=u*_-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new C,nc=new yi;class Ht{constructor(t,e,i,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],g=s[0],m=s[3],f=s[6],y=s[1],M=s[4],x=s[7],A=s[2],R=s[5],P=s[8];return r[0]=a*g+o*y+l*A,r[3]=a*m+o*M+l*R,r[6]=a*f+o*x+l*P,r[1]=c*g+u*y+h*A,r[4]=c*m+u*M+h*R,r[7]=c*f+u*x+h*P,r[2]=d*g+p*y+_*A,r[5]=d*m+p*M+_*R,r[8]=d*f+p*x+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=e*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*c-u*i)*g,t[2]=(o*i-s*a)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ht;function B0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $h(){const n=Hr("canvas");return n.style.display="block",n}const ic={};function Fs(n){n in ic||(ic[n]=!0,console.warn(n))}function Xh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const sc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:t,whitePoint:i,transfer:kr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:se,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}const Jt=qh();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class jh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pi===void 0&&(Pi=Hr("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Pi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Un(e[i]/255)*255):e[i]=Un(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class Tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fa(s[a].image)):r.push(fa(s[a]))}else r=fa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;const pa=new C;class ke extends wi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=gi,s=gi,r=je,a=_i,o=un,l=Mn,c=ke.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ws(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=R0;ke.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(p+1)/2,A=(f+1)/2,R=(u+d)/4,P=(h+g)/4,I=(_+m)/4;return M>x&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=P/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=I/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=I/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zh extends wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new ke(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Zh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class k0 extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Js.subVectors(this.max,_s),Di.subVectors(t.a,_s),Li.subVectors(t.b,_s),Ii.subVectors(t.c,_s),zn.subVectors(Li,Di),Bn.subVectors(Ii,Li),ai.subVectors(Di,Ii);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-ai.z,ai.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-ai.y,ai.x,0];return!ma(e,Di,Li,Ii,Js)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,Di,Li,Ii,Js))?!1:(Qs.crossVectors(zn,Bn),e=[Qs.x,Qs.y,Qs.z],ma(e,Di,Li,Ii,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bn=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,Zs=new $s,Di=new C,Li=new C,Ii=new C,zn=new C,Bn=new C,ai=new C,_s=new C,Js=new C,Qs=new C,oi=new C;function ma(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){oi.fromArray(n,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qh=new $s,vs=new C,ga=new C;class Xs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Qh.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(ga)),this.expandByPoint(vs.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const En=new C,_a=new C,tr=new C,kn=new C,va=new C,er=new C,xa=new C;class Jr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_a.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(_a);const r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=kn.dot(this.direction),l=-kn.dot(tr),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_a).addScaledVector(tr,d),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,s,r){va.subVectors(e,t),er.subVectors(i,t),xa.crossVectors(va,er);let a=this.direction.dot(xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(er.crossVectors(kn,er));if(l<0)return null;const c=o*this.direction.dot(va.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(xa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,a,o,l,c,u,h,d,p,_,g,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,d,p,_,g,m)}set(t,e,i,s,r,a,o,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;e[0]=d-g*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=a*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,i){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Vn.crossVectors(i,Je),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Vn.crossVectors(i,Je)),Vn.normalize(),nr.crossVectors(Je,Vn),s[0]=Vn.x,s[4]=nr.x,s[8]=Je.x,s[1]=Vn.y,s[5]=nr.y,s[9]=Je.y,s[2]=Vn.z,s[6]=nr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],y=i[3],M=i[7],x=i[11],A=i[15],R=s[0],P=s[4],I=s[8],E=s[12],b=s[1],D=s[5],z=s[9],O=s[13],X=s[2],G=s[6],W=s[10],Y=s[14],H=s[3],st=s[7],Q=s[11],ht=s[15];return r[0]=a*R+o*b+l*X+c*H,r[4]=a*P+o*D+l*G+c*st,r[8]=a*I+o*z+l*W+c*Q,r[12]=a*E+o*O+l*Y+c*ht,r[1]=u*R+h*b+d*X+p*H,r[5]=u*P+h*D+d*G+p*st,r[9]=u*I+h*z+d*W+p*Q,r[13]=u*E+h*O+d*Y+p*ht,r[2]=_*R+g*b+m*X+f*H,r[6]=_*P+g*D+m*G+f*st,r[10]=_*I+g*z+m*W+f*Q,r[14]=_*E+g*O+m*Y+f*ht,r[3]=y*R+M*b+x*X+A*H,r[7]=y*P+M*D+x*G+A*st,r[11]=y*I+M*z+x*W+A*Q,r[15]=y*E+M*O+x*Y+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*p-i*l*p)+g*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-e*l*h+e*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],y=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,M=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,x=u*g*c-_*h*c+_*o*p-a*g*p-u*o*f+a*h*f,A=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,R=e*y+i*M+s*x+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=y*P,t[1]=(g*d*r-h*m*r-g*s*p+i*m*p+h*s*f-i*d*f)*P,t[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*f+i*l*f)*P,t[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*P,t[4]=M*P,t[5]=(u*m*r-_*d*r+_*s*p-e*m*p-u*s*f+e*d*f)*P,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*f-e*l*f)*P,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*P,t[8]=x*P,t[9]=(_*h*r-u*g*r-_*i*p+e*g*p+u*i*f-e*h*f)*P,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*f+e*o*f)*P,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*p-e*o*p)*P,t[12]=A*P,t[13]=(u*g*s-_*h*s+_*i*d-e*g*d-u*i*m+e*h*m)*P,t[14]=(_*o*s-a*g*s-_*i*l+e*g*l+a*i*m-e*o*m)*P,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*d+e*o*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,g=a*u,m=a*h,f=o*h,y=l*c,M=l*u,x=l*h,A=i.x,R=i.y,P=i.z;return s[0]=(1-(g+f))*A,s[1]=(p+x)*A,s[2]=(_-M)*A,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(d+f))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(_+M)*P,s[9]=(m-y)*P,s[10]=(1-(d+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=vn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s);let _,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===vn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Vr)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=vn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s);let _,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===vn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Vr)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ui=new C,on=new fe,td=new C(0,0,0),ed=new C(1,1,1),Vn=new C,nr=new C,Je=new C,ac=new fe,oc=new yi;class Sn{constructor(t=0,e=0,i=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class V0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nd=0;const lc=new C,Ni=new yi,Tn=new fe,ir=new C,xs=new C,id=new C,sd=new yi,cc=new C(1,0,0),uc=new C(0,1,0),hc=new C(0,0,1),dc={type:"added"},rd={type:"removed"},Fi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ue extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new C,e=new Sn,i=new yi,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ht}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(xs,ir,this.up):Tn.lookAt(ir,xs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new C(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new C,wn=new C,Sa=new C,An=new C,Oi=new C,zi=new C,fc=new C,ya=new C,ba=new C,Ea=new C,Ta=new ae,wa=new ae,Aa=new ae;class cn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ln.subVectors(s,e),wn.subVectors(i,e),Sa.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(wn),l=ln.dot(Sa),c=wn.dot(wn),u=wn.dot(Sa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ta.setScalar(0),wa.setScalar(0),Aa.setScalar(0),Ta.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Aa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Aa,r.z),a}static isFrontFacing(t,e,i,s){return ln.subVectors(i,e),wn.subVectors(t,e),ln.cross(wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),ln.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,i),zi.subVectors(r,i),ya.subVectors(t,i);const l=Oi.dot(ya),c=zi.dot(ya);if(l<=0&&c<=0)return e.copy(i);ba.subVectors(t,s);const u=Oi.dot(ba),h=zi.dot(ba);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Oi,a);Ea.subVectors(t,r);const p=Oi.dot(Ea),_=zi.dot(Ea);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(zi,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return fc.subVectors(r,s),o=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(fc,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(i).addScaledVector(Oi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=Gh(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ra(a,r,t+1/3),this.g=Ra(a,r,t),this.b=Ra(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=H0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Jt.workingToColorSpace(De.copy(this),t),Math.round($t(De.r*255,0,255))*65536+Math.round($t(De.g*255,0,255))*256+Math.round($t(De.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(De.copy(this),e);const i=De.r,s=De.g,r=De.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Xe){Jt.workingToColorSpace(De.copy(this),t);const e=De.r,i=De.g,s=De.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(sr);const i=ua(Hn.h,sr.h,e),s=ua(Hn.s,sr.s,e),r=ua(Hn.l,sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ct;Ct.NAMES=H0;let ad=0;class Ai extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=es,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fs extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,rr=new Ot;let od=0;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class G0 extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class W0 extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ld=0;const rn=new fe,Ca=new Ue,Bi=new C,Qe=new $s,Ms=new $s,we=new C;class _e extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B0(t)?W0:G0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Qe.min,Ms.min),Qe.expandByPoint(we),we.addVectors(Qe.max,Ms.max),Qe.expandByPoint(we)):(Qe.expandByPoint(Ms.min),Qe.expandByPoint(Ms.max))}Qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),we.add(Bi)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new C,l[I]=new C;const c=new C,u=new C,h=new C,d=new Ot,p=new Ot,_=new Ot,g=new C,m=new C;function f(I,E,b){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,b),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[I].add(g),o[E].add(g),o[b].add(g),l[I].add(m),l[E].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,E=y.length;I<E;++I){const b=y[I],D=b.start,z=b.count;for(let O=D,X=D+z;O<X;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new C,x=new C,A=new C,R=new C;function P(I){A.fromBufferAttribute(s,I),R.copy(A);const E=o[I];M.copy(E),M.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(R,E);const D=x.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,D)}for(let I=0,E=y.length;I<E;++I){const b=y[I],D=b.start,z=b.count;for(let O=D,X=D+z;O<X;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new xn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new fe,li=new Jr,ar=new Xs,mc=new C,or=new C,lr=new C,cr=new C,Pa=new C,ur=new C,gc=new C,hr=new C;class Re extends Ue{constructor(t=new _e,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Pa.fromBufferAttribute(h,t),a?ur.addScaledVector(Pa,u):ur.addScaledVector(Pa.sub(e),u))}e.add(ur)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(ar.containsPoint(li.origin)===!1&&(li.intersectSphere(ar,mc)===null||li.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(pc.copy(r).invert(),li.copy(t.ray).applyMatrix4(pc),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,A=M;x<A;x+=3){const R=o.getX(x),P=o.getX(x+1),I=o.getX(x+2);s=dr(this,f,t,i,c,u,h,R,P,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const y=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=dr(this,a,t,i,c,u,h,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,A=M;x<A;x+=3){const R=x,P=x+1,I=x+2;s=dr(this,f,t,i,c,u,h,R,P,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const y=m,M=m+1,x=m+2;s=dr(this,a,t,i,c,u,h,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cd(n,t,e,i,s,r,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;hr.copy(o),hr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:n}}function dr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,or),n.getVertexPosition(l,lr),n.getVertexPosition(c,cr);const u=cd(n,t,e,i,or,lr,cr,gc);if(u){const h=new C;cn.getBarycoord(gc,or,lr,cr,h),s&&(u.uv=cn.getInterpolatedAttribute(s,o,l,c,h,new Ot)),r&&(u.uv1=cn.getInterpolatedAttribute(r,o,l,c,h,new Ot)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};cn.getNormal(or,lr,cr,d.normal),u.face=d,u.barycoord=h}return u}class qs extends _e{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function _(g,m,f,y,M,x,A,R,P,I,E){const b=x/P,D=A/I,z=x/2,O=A/2,X=R/2,G=P+1,W=I+1;let Y=0,H=0;const st=new C;for(let Q=0;Q<W;Q++){const ht=Q*D-O;for(let Lt=0;Lt<G;Lt++){const Xt=Lt*b-z;st[g]=Xt*y,st[m]=ht*M,st[f]=X,c.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[f]=R>0?1:-1,u.push(st.x,st.y,st.z),h.push(Lt/P),h.push(1-Q/I),Y+=1}}for(let Q=0;Q<I;Q++)for(let ht=0;ht<P;ht++){const Lt=d+ht+G*Q,Xt=d+ht+G*(Q+1),ee=d+(ht+1)+G*(Q+1),Wt=d+(ht+1)+G*Q;l.push(Lt,Xt,Wt),l.push(Xt,ee,Wt),H+=6}o.addGroup(p,H,E),p+=H,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=us(n[e]);for(const s in i)t[s]=i[s]}return t}function ud(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const hd={clone:us,merge:ze};var dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class X0 extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new C,_c=new Ot,vc=new Ot;class tn extends X0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,vc),e.subVectors(vc,_c)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Or*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Vi=1;class pd extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(ki,Vi,t,e);s.layers=this.layers,this.add(s);const r=new tn(ki,Vi,t,e);r.layers=this.layers,this.add(r);const a=new tn(ki,Vi,t,e);a.layers=this.layers,this.add(a);const o=new tn(ki,Vi,t,e);o.layers=this.layers,this.add(o);const l=new tn(ki,Vi,t,e);l.layers=this.layers,this.add(l);const c=new tn(ki,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class q0 extends ke{constructor(t=[],e=os,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class md extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new q0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qs(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Yn});r.uniforms.tEquirect.value=e;const a=new Re(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=je),new pd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Ye extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gd={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class _d extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const La=new C,vd=new C,xd=new Ht;class $n{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=La.subVectors(i,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(La),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xd.getNormalMatrix(t),s=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Xs,Md=new Ot(.5,.5),fr=new C;class wl{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,a=new $n){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],_=r[8],g=r[9],m=r[10],f=r[11],y=r[12],M=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,f-_,A-y).normalize(),s[1].setComponents(c+a,p+u,f+_,A+y).normalize(),s[2].setComponents(c+o,p+h,f+g,A+M).normalize(),s[3].setComponents(c-o,p-h,f-g,A-M).normalize(),i)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,p-d,f-m,A-x).normalize();else if(s[4].setComponents(c-l,p-d,f-m,A-x).normalize(),e===vn)s[5].setComponents(c+l,p+d,f+m,A+x).normalize();else if(e===Vr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=Md.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ei extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gr=new C,Wr=new C,xc=new fe,Ss=new Jr,pr=new Xs,Ia=new C,Mc=new C;class Qr extends Ue{constructor(t=new _e,e=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Gr.fromBufferAttribute(e,s-1),Wr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Gr.distanceTo(Wr);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;xc.copy(s).invert(),Ss.copy(t.ray).applyMatrix4(xc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=u.getX(g),y=u.getX(g+1),M=mr(this,t,Ss,l,f,y,g);M&&e.push(M)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),f=mr(this,t,Ss,l,g,m,_-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=mr(this,t,Ss,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){const g=mr(this,t,Ss,l,_-1,p,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Gr.fromBufferAttribute(o,s),Wr.fromBufferAttribute(o,r),e.distanceSqToSegment(Gr,Wr,Ia,Mc)>i)return;Ia.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ia);if(!(c<t.near||c>t.far))return{distance:c,point:Mc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Sc=new C,yc=new C;class Os extends Qr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Sc.fromBufferAttribute(e,s),yc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sc.distanceTo(yc);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bc=new fe,Ko=new Jr,gr=new Xs,_r=new C;class Sd extends Ue{constructor(t=new _e,e=new j0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;bc.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(bc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);_r.fromBufferAttribute(h,m),Ec(_r,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p;_<g;_++)_r.fromBufferAttribute(h,_),Ec(_r,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ec(n,t,e,i,s,r,a){const o=Ko.distanceSqToPoint(n);if(o<e){const l=new C;Ko.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zo extends ke{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Y0 extends ke{constructor(t,e,i=Si,s,r,a,o=hn,l=hn,c,u=Us,h=1){if(u!==Us&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class K0 extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Al extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new C,x=new C,A=new C;for(let R=0;R<e.length;R+=3)p(e[R+0],M),p(e[R+1],x),p(e[R+2],A),l(M,x,A,y)}function l(y,M,x,A){const R=A+1,P=[];for(let I=0;I<=R;I++){P[I]=[];const E=y.clone().lerp(x,I/R),b=M.clone().lerp(x,I/R),D=R-I;for(let z=0;z<=D;z++)z===0&&I===R?P[I][z]=E:P[I][z]=E.clone().lerp(b,z/D)}for(let I=0;I<R;I++)for(let E=0;E<2*(R-I)-1;E++){const b=Math.floor(E/2);E%2===0?(d(P[I][b+1]),d(P[I+1][b]),d(P[I][b])):(d(P[I][b+1]),d(P[I+1][b+1]),d(P[I+1][b]))}}function c(y){const M=new C;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const y=new C;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=m(y)/2/Math.PI+.5,A=f(y)/Math.PI+.5;a.push(x,1-A)}_(),h()}function h(){for(let y=0;y<a.length;y+=6){const M=a[y+0],x=a[y+2],A=a[y+4],R=Math.max(M,x,A),P=Math.min(M,x,A);R>.9&&P<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function _(){const y=new C,M=new C,x=new C,A=new C,R=new Ot,P=new Ot,I=new Ot;for(let E=0,b=0;E<r.length;E+=9,b+=6){y.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),R.set(a[b+0],a[b+1]),P.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),A.copy(y).add(M).add(x).divideScalar(3);const D=m(A);g(R,b+0,y,D),g(P,b+2,M,D),g(I,b+4,x,D)}}function g(y,M,x,A){A<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.vertices,t.indices,t.radius,t.details)}}class Rl extends Al{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rl(t.radius,t.detail)}}class ta extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const y=f*d-a;for(let M=0;M<c;M++){const x=M*h-r;_.push(x,-y,0),g.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const M=y+c*f,x=y+c*(f+1),A=y+1+c*(f+1),R=y+1+c*f;p.push(M,x,R),p.push(x,A,R)}this.setIndex(p),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cl extends _e{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,p=new C,_=new Ot;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}h+=d}for(let g=0;g<s;g++){const m=g*(i+1);for(let f=0;f<i;f++){const y=f+m,M=y,x=y+i+1,A=y+i+2,R=y+1;o.push(M,x,R),o.push(x,A,R)}}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nn extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const y=[],M=f/i;let x=0;f===0&&a===0?x=.5/e:f===i&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const R=A/e;h.x=-t*Math.cos(s+R*r)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(s+R*r)*Math.sin(a+M*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(R+x,1-M),y.push(c++)}u.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const M=u[f][y+1],x=u[f][y],A=u[f+1][y],R=u[f+1][y+1];(f!==0||a>0)&&p.push(M,x,R),(f!==i-1||l<Math.PI)&&p.push(x,A,R)}this.setIndex(p),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Z0 extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O0,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yd extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bd extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class J0 extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ua=new fe,Tc=new C,wc=new C;class Ed{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ac=new fe,ys=new C,Na=new C;class Td extends Ed{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),i.position.copy(ys),Na.copy(i.position),Na.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Na),i.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),Ac.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac,i.coordinateSystem,i.reversedDepth)}}class wd extends J0{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Td}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ad extends X0{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rd extends J0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cd extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}let Rc=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class Pd extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Cc(n,t,e,i){const s=Dd(i);switch(e){case I0:return n*t;case N0:return n*t/s.components*s.byteLength;case yl:return n*t/s.components*s.byteLength;case F0:return n*t*2/s.components*s.byteLength;case bl:return n*t*2/s.components*s.byteLength;case U0:return n*t*3/s.components*s.byteLength;case un:return n*t*4/s.components*s.byteLength;case El:return n*t*4/s.components*s.byteLength;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yo:case Eo:return Math.max(n,16)*Math.max(t,8)/4;case So:case bo:return Math.max(n,8)*Math.max(t,8)/2;case To:case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ho:case Go:case Wo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $o:case Xo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qo:case jo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dd(n){switch(n){case Mn:case C0:return{byteLength:1,components:1};case Ls:case P0:case Gs:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case Si:case xl:case Ln:return{byteLength:4,components:1};case D0:case L0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);function Q0(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ld(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,qd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Lf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,If=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
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
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,V1=`#define DISTANCE
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
}`,H1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,j1=`uniform vec3 diffuse;
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
}`,Y1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Z1=`#define MATCAP
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
}`,J1=`#define MATCAP
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
}`,Q1=`#define NORMAL
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
}`,tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ep=`#define PHONG
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
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ip=`#define STANDARD
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
}`,sp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,rp=`#define TOON
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
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,op=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hp=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Id,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:zd,aomap_fragment:Bd,aomap_pars_fragment:kd,batching_pars_vertex:Vd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Wd,bsdfs:$d,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:uf,colorspace_pars_fragment:hf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:wf,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Tf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Df,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Vf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:jf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Kf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:t1,normal_vertex:e1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:r1,iridescence_pars_fragment:a1,opaque_fragment:o1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:h1,dithering_pars_fragment:d1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:_1,shadowmask_pars_fragment:v1,skinbase_vertex:x1,skinning_pars_vertex:M1,skinning_vertex:S1,skinnormal_vertex:y1,specularmap_fragment:b1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:w1,transmission_fragment:A1,transmission_pars_fragment:R1,uv_pars_fragment:C1,uv_pars_vertex:P1,uv_vertex:D1,worldpos_vertex:L1,background_vert:I1,background_frag:U1,backgroundCube_vert:N1,backgroundCube_frag:F1,cube_vert:O1,cube_frag:z1,depth_vert:B1,depth_frag:k1,distanceRGBA_vert:V1,distanceRGBA_frag:H1,equirect_vert:G1,equirect_frag:W1,linedashed_vert:$1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:j1,meshlambert_vert:Y1,meshlambert_frag:K1,meshmatcap_vert:Z1,meshmatcap_frag:J1,meshnormal_vert:Q1,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:up,sprite_vert:hp,sprite_frag:dp},ot={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},gn={basic:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ze([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ze([ot.lights,ot.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};gn.physical={uniforms:ze([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const vr={r:0,b:0,g:0},ui=new Sn,fp=new fe;function pp(n,t,e,i,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1;const A=_(M);A===null?f(o,l):A&&A.isColor&&(f(A,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===Zr)?(u===void 0&&(u=new Re(new qs(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:us(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ui.copy(x.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(ui)),u.material.toneMapped=Jt.getTransfer(A.colorSpace)!==se,(h!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Re(new ta(2,2),new en({name:"BackgroundMaterial",uniforms:us(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,x){M.getRGB(vr,$0(n)),i.buffers.color.setClear(vr.r,vr.g,vr.b,x,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:g,addToRenderList:m,dispose:y}}function mp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(b,D,z,O,X){let G=!1;const W=h(O,z,D);r!==W&&(r=W,c(r.object)),G=p(b,O,z,X),G&&_(b,O,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(b,D,z,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,D,z){const O=z.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let G=X[D.id];G===void 0&&(G={},X[D.id]=G);let W=G[O];return W===void 0&&(W=d(l()),G[O]=W),W}function d(b){const D=[],z=[],O=[];for(let X=0;X<e;X++)D[X]=0,z[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,D,z,O){const X=r.attributes,G=D.attributes;let W=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const Q=X[H];let ht=G[H];if(ht===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),Q===void 0||Q.attribute!==ht||ht&&Q.data!==ht.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function _(b,D,z,O){const X={},G=D.attributes;let W=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let Q=G[H];Q===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const ht={};ht.attribute=Q,Q&&Q.data&&(ht.data=Q.data),X[H]=ht,W++}r.attributes=X,r.attributesNum=W,r.index=O}function g(){const b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function m(b){f(b,0)}function f(b,D){const z=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;z[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),X[b]!==D&&(n.vertexAttribDivisor(b,D),X[b]=D)}function y(){const b=r.newAttributes,D=r.enabledAttributes;for(let z=0,O=D.length;z<O;z++)D[z]!==b[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function M(b,D,z,O,X,G,W){W===!0?n.vertexAttribIPointer(b,D,z,X,G):n.vertexAttribPointer(b,D,z,O,X,G)}function x(b,D,z,O){g();const X=O.attributes,G=z.getAttributes(),W=D.defaultAttributeValues;for(const Y in G){const H=G[Y];if(H.location>=0){let st=X[Y];if(st===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const Q=st.normalized,ht=st.itemSize,Lt=t.get(st);if(Lt===void 0)continue;const Xt=Lt.buffer,ee=Lt.type,Wt=Lt.bytesPerElement,q=ee===n.INT||ee===n.UNSIGNED_INT||st.gpuType===xl;if(st.isInterleavedBufferAttribute){const Z=st.data,gt=Z.stride,B=st.offset;if(Z.isInstancedInterleavedBuffer){for(let ft=0;ft<H.locationSize;ft++)f(H.location+ft,Z.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ft=0;ft<H.locationSize;ft++)m(H.location+ft);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let ft=0;ft<H.locationSize;ft++)M(H.location+ft,ht/H.locationSize,ee,Q,gt*Wt,(B+ht/H.locationSize*ft)*Wt,q)}else{if(st.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)f(H.location+Z,st.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let Z=0;Z<H.locationSize;Z++)M(H.location+Z,ht/H.locationSize,ee,Q,ht*Wt,ht/H.locationSize*Z*Wt,q)}}else if(W!==void 0){const Q=W[Y];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(H.location,Q);break;case 3:n.vertexAttrib3fv(H.location,Q);break;case 4:n.vertexAttrib4fv(H.location,Q);break;default:n.vertexAttrib1fv(H.location,Q)}}}}y()}function A(){I();for(const b in i){const D=i[b];for(const z in D){const O=D[z];for(const X in O)u(O[X].object),delete O[X];delete D[z]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const z in D){const O=D[z];for(const X in O)u(O[X].object),delete O[X];delete D[z]}delete i[b.id]}function P(b){for(const D in i){const z=i[D];if(z[b.id]===void 0)continue;const O=z[b.id];for(const X in O)u(O[X].object),delete O[X];delete z[b.id]}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function gp(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _p(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function vp(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new $n,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,M=y*4;let x=f.clippingState||null;l.value=x,x=u(_,d,M,p);for(let A=0;A!==M;++A)x[A]=e[A];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==g;++M,x+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function xp(n){let t=new WeakMap;function e(a,o){return o===_o?a.mapping=os:o===vo&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===vo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new md(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Zi=4,Pc=[.125,.215,.35,.446,.526,.582],mi=20,Fa=new Ad,Dc=new Ct;let Oa=null,za=0,Ba=0,ka=!1;const di=(1+Math.sqrt(5))/2,Hi=1/di,Lc=[new C(-di,Hi,0),new C(di,Hi,0),new C(-Hi,0,di),new C(Hi,0,di),new C(0,di,-Hi),new C(0,di,Hi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Mp=new C;class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Mp}=r;Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,za,Ba),this._renderer.xr.enabled=ka,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:Gs,format:un,colorSpace:cs,depthBuffer:!1},s=Uc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(r)),this._blurMaterial=yp(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,i,s,r){const l=new tn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const g=new fs({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),m=new Re(new qs,g);let f=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,f=!0):(g.color.copy(Dc),f=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const A=this._cubeSize;xr(s,x*A,M>2?A:0,A,A),h.setRenderTarget(s),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===os||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Fa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lc[(s-r-1)%Lc.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const f=[];let y=0;for(let P=0;P<mi;++P){const I=P/g,E=Math.exp(-I*I/2);f.push(E),P===0?y+=E:P<m&&(y+=2*E)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const x=this._sizeLods[s],A=3*x*(s>M-Zi?s-M+Zi:0),R=4*(this._cubeSize-x);xr(e,A,R,3*x,2*x),l.setRenderTarget(e),l.render(h,Fa)}}function Sp(n){const t=[],e=[],i=[];let s=n;const r=n-Zi+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Zi?l=Pc[a-n+Zi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,y=new Float32Array(g*_*p),M=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,I=R>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];y.set(E,g*_*R),M.set(d,m*_*R);const b=[R,R,R,R,R,R];x.set(b,f*_*R)}const A=new _e;A.setAttribute("position",new xn(y,g)),A.setAttribute("uv",new xn(M,m)),A.setAttribute("faceIndex",new xn(x,f)),t.push(A),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uc(n,t,e){const i=new bi(n,t,e);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yp(n,t,e){const i=new Float32Array(mi),s=new C(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Nc(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Fc(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===vo,u=l===os||l===ls;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ic(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Ic(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Ep(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Fs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tp(n,t,e,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let M=0,x=y.length;M<x;M+=3){const A=y[M+0],R=y[M+1],P=y[M+2];d.push(A,R,R,P,P,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const A=M+0,R=M+1,P=M+2;d.push(A,R,R,P,P,A)}}else return;const m=new(B0(d)?W0:G0)(d,1);m.version=g;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function wp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*a,_),e.update(p,i,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,i,1)}function h(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,g,0,_);let f=0;for(let y=0;y<_;y++)f+=p[y]*g[y];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ap(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Rp(n,t,e){const i=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let b=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*R*4*h),I=new k0(P,A,R,h);I.type=Ln,I.needsUpdate=!0;const E=x*4;for(let D=0;D<h;D++){const z=f[D],O=y[D],X=M[D],G=A*R*4*D;for(let W=0;W<z.count;W++){const Y=W*E;_===!0&&(s.fromBufferAttribute(z,W),P[G+Y+0]=s.x,P[G+Y+1]=s.y,P[G+Y+2]=s.z,P[G+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,W),P[G+Y+4]=s.x,P[G+Y+5]=s.y,P[G+Y+6]=s.z,P[G+Y+7]=0),m===!0&&(s.fromBufferAttribute(X,W),P[G+Y+8]=s.x,P[G+Y+9]=s.y,P[G+Y+10]=s.z,P[G+Y+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Ot(A,R)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Cp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const tu=new ke,Oc=new Y0(1,1),eu=new k0,nu=new Jh,iu=new q0,zc=[],Bc=[],kc=new Float32Array(16),Vc=new Float32Array(9),Hc=new Float32Array(4);function ps(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ea(n,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function Lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Ip(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Up(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Hc.set(i),n.uniformMatrix2fv(this.addr,!1,Hc),Ee(e,i)}}function Np(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),Ee(e,i)}}function Fp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;kc.set(i),n.uniformMatrix4fv(this.addr,!1,kc),Ee(e,i)}}function Op(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function Bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function kp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Vp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function Gp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function $p(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Oc.compareFunction=z0,r=Oc):r=tu,e.setTexture2D(t||r,s)}function Xp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nu,s)}function qp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||iu,s)}function jp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||eu,s)}function Yp(n){switch(n){case 5126:return Pp;case 35664:return Dp;case 35665:return Lp;case 35666:return Ip;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return zp;case 35668:case 35672:return Bp;case 35669:case 35673:return kp;case 5125:return Vp;case 36294:return Hp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return jp}}function Kp(n,t){n.uniform1fv(this.addr,t)}function Zp(n,t){const e=ps(t,this.size,2);n.uniform2fv(this.addr,e)}function Jp(n,t){const e=ps(t,this.size,3);n.uniform3fv(this.addr,e)}function Qp(n,t){const e=ps(t,this.size,4);n.uniform4fv(this.addr,e)}function t2(n,t){const e=ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function e2(n,t){const e=ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function n2(n,t){const e=ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function i2(n,t){n.uniform1iv(this.addr,t)}function s2(n,t){n.uniform2iv(this.addr,t)}function r2(n,t){n.uniform3iv(this.addr,t)}function a2(n,t){n.uniform4iv(this.addr,t)}function o2(n,t){n.uniform1uiv(this.addr,t)}function l2(n,t){n.uniform2uiv(this.addr,t)}function c2(n,t){n.uniform3uiv(this.addr,t)}function u2(n,t){n.uniform4uiv(this.addr,t)}function h2(n,t,e){const i=this.cache,s=t.length,r=ea(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||tu,r[a])}function d2(n,t,e){const i=this.cache,s=t.length,r=ea(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nu,r[a])}function f2(n,t,e){const i=this.cache,s=t.length,r=ea(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||iu,r[a])}function p2(n,t,e){const i=this.cache,s=t.length,r=ea(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eu,r[a])}function m2(n){switch(n){case 5126:return Kp;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return t2;case 35675:return e2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return s2;case 35668:case 35672:return r2;case 35669:case 35673:return a2;case 5125:return o2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return p2}}class g2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yp(e.type)}}class _2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m2(e.type)}}class v2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Gc(n,t){n.seq.push(t),n.map[t.id]=t}function x2(n,t,e){const i=n.name,s=i.length;for(Va.lastIndex=0;;){const r=Va.exec(i),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gc(e,c===void 0?new g2(o,n,t):new _2(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new v2(o),Gc(e,h)),e=h}}}class zr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);x2(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Wc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const M2=37297;let S2=0;function y2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const $c=new Ht;function b2(n){Jt._getMatrix($c,Jt.workingColorSpace,n);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case kr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+y2(n.getShaderSource(t),o)}else return r}function E2(n,t){const e=b2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function T2(n,t){let e;switch(t){case Th:e="Linear";break;case wh:e="Reinhard";break;case Ah:e="Cineon";break;case Rh:e="ACESFilmic";break;case Ph:e="AgX";break;case Dh:e="Neutral";break;case Ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new C;function w2(){Jt.getLuminanceCoefficients(Mr);const n=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function R2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function C2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Rs(n){return n!==""}function qc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(n){return n.replace(P2,L2)}const D2=new Map;function L2(n,t){let e=Gt[t];if(e===void 0){const i=D2.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}const I2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(n){return n.replace(I2,U2)}function U2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function N2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===A0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function F2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O2(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ls&&(t="ENVMAP_MODE_REFRACTION"),t}function z2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case bh:t="ENVMAP_BLENDING_MIX";break;case Eh:t="ENVMAP_BLENDING_ADD";break}return t}function B2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function k2(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=N2(e),c=F2(e),u=O2(e),h=z2(e),d=B2(e),p=A2(e),_=R2(r),g=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?T2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,E2("linearToOutputTexel",e.outputColorSpace),w2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Jo(a),a=qc(a,e),a=jc(a,e),o=Jo(o),o=qc(o,e),o=jc(o,e),a=Yc(a),o=Yc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+m+a,x=y+f+o,A=Wc(s,s.VERTEX_SHADER,M),R=Wc(s,s.FRAGMENT_SHADER,x);s.attachShader(g,A),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(D){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(R)||"",G=z.trim(),W=O.trim(),Y=X.trim();let H=!0,st=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,A,R);else{const Q=Xc(s,A,"vertex"),ht=Xc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+Q+`
`+ht)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Y==="")&&(st=!1);st&&(D.diagnostics={runnable:H,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(A),s.deleteShader(R),I=new zr(s,g),E=C2(s,g)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,M2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let V2=0;class H2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new G2(t),e.set(t,i)),i}}class G2{constructor(t){this.id=V2++,this.code=t,this.usedTimes=0}}function W2(n,t,e,i,s,r,a){const o=new V0,l=new H2,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,D,z,O){const X=z.fog,G=O.geometry,W=E.isMeshStandardMaterial?z.environment:null,Y=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),H=Y&&Y.mapping===Zr?Y.image.height:null,st=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=Q!==void 0?Q.length:0;let Lt=0;G.morphAttributes.position!==void 0&&(Lt=1),G.morphAttributes.normal!==void 0&&(Lt=2),G.morphAttributes.color!==void 0&&(Lt=3);let Xt,ee,Wt,q;if(st){const ne=gn[st];Xt=ne.vertexShader,ee=ne.fragmentShader}else Xt=E.vertexShader,ee=E.fragmentShader,l.update(E),Wt=l.getVertexShaderID(E),q=l.getFragmentShaderID(E);const Z=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),B=O.isInstancedMesh===!0,ft=O.isBatchedMesh===!0,qt=!!E.map,Pt=!!E.matcap,w=!!Y,zt=!!E.aoMap,xt=!!E.lightMap,pt=!!E.bumpMap,dt=!!E.normalMap,Yt=!!E.displacementMap,_t=!!E.emissiveMap,Nt=!!E.metalnessMap,Te=!!E.roughnessMap,xe=E.anisotropy>0,T=E.clearcoat>0,v=E.dispersion>0,F=E.iridescence>0,j=E.sheen>0,J=E.transmission>0,$=xe&&!!E.anisotropyMap,Tt=T&&!!E.clearcoatMap,rt=T&&!!E.clearcoatNormalMap,yt=T&&!!E.clearcoatRoughnessMap,bt=F&&!!E.iridescenceMap,nt=F&&!!E.iridescenceThicknessMap,ut=j&&!!E.sheenColorMap,It=j&&!!E.sheenRoughnessMap,Et=!!E.specularMap,lt=!!E.specularColorMap,Vt=!!E.specularIntensityMap,L=J&&!!E.transmissionMap,it=J&&!!E.thicknessMap,at=!!E.gradientMap,vt=!!E.alphaMap,tt=E.alphaTest>0,K=!!E.alphaHash,St=!!E.extensions;let Bt=Kn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const le={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:Xt,fragmentShader:ee,defines:E.defines,customVertexShaderID:Wt,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ft,batchingColor:ft&&O._colorsTexture!==null,instancing:B,instancingColor:B&&O.instanceColor!==null,instancingMorph:B&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:cs,alphaToCoverage:!!E.alphaToCoverage,map:qt,matcap:Pt,envMap:w,envMapMode:w&&Y.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:xt,bumpMap:pt,normalMap:dt,displacementMap:d&&Yt,emissiveMap:_t,normalMapObjectSpace:dt&&E.normalMapType===Nh,normalMapTangentSpace:dt&&E.normalMapType===O0,metalnessMap:Nt,roughnessMap:Te,anisotropy:xe,anisotropyMap:$,clearcoat:T,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:v,iridescence:F,iridescenceMap:bt,iridescenceThicknessMap:nt,sheen:j,sheenColorMap:ut,sheenRoughnessMap:It,specularMap:Et,specularColorMap:lt,specularIntensityMap:Vt,transmission:J,transmissionMap:L,thicknessMap:it,gradientMap:at,opaque:E.transparent===!1&&E.blending===es&&E.alphaToCoverage===!1,alphaMap:vt,alphaTest:tt,alphaHash:K,combine:E.combine,mapUv:qt&&g(E.map.channel),aoMapUv:zt&&g(E.aoMap.channel),lightMapUv:xt&&g(E.lightMap.channel),bumpMapUv:pt&&g(E.bumpMap.channel),normalMapUv:dt&&g(E.normalMap.channel),displacementMapUv:Yt&&g(E.displacementMap.channel),emissiveMapUv:_t&&g(E.emissiveMap.channel),metalnessMapUv:Nt&&g(E.metalnessMap.channel),roughnessMapUv:Te&&g(E.roughnessMap.channel),anisotropyMapUv:$&&g(E.anisotropyMap.channel),clearcoatMapUv:Tt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(E.sheenRoughnessMap.channel),specularMapUv:Et&&g(E.specularMap.channel),specularColorMapUv:lt&&g(E.specularColorMap.channel),specularIntensityMapUv:Vt&&g(E.specularIntensityMap.channel),transmissionMapUv:L&&g(E.transmissionMap.channel),thicknessMapUv:it&&g(E.thicknessMap.channel),alphaMapUv:vt&&g(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(dt||xe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(qt||vt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:gt,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:qt&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:_t&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===Ie,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:St&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&E.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function f(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)b.push(D),b.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(y(b,E),M(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const b=_[E.type];let D;if(b){const z=gn[b];D=hd.clone(z.uniforms)}else D=E.uniforms;return D}function A(E,b){let D;for(let z=0,O=u.length;z<O;z++){const X=u[z];if(X.cacheKey===b){D=X,++D.usedTimes;break}}return D===void 0&&(D=new k2(n,b,E,r),u.push(D)),D}function R(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:I}}function $2(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function X2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,d,p,_,g,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),t++,f}function o(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||X2),i.length>1&&i.sort(d||Zc),s.length>1&&s.sort(d||Zc)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function q2(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Jc,n.set(i,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function j2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ct};break;case"SpotLight":e={position:new C,direction:new C,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Y2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let K2=0;function Z2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function J2(n){const t=new j2,e=Y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new fe,a=new fe;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,y=0,M=0,x=0,A=0,R=0,P=0;c.sort(Z2);for(let E=0,b=c.length;E<b;E++){const D=c[E],z=D.color,O=D.intensity,X=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*O,h+=z.g*O,d+=z.b*O;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],O);P++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,H=e.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=D.shadow.matrix,y++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(O),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[g]=W;const Y=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,Y.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[g]=Y.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=G,x++}g++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(z).multiplyScalar(O),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Y=D.shadow,H=e.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=W,_++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(O),W.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,I.directionalLength=p,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=P,i.version=K2++)}function l(c,u){let h=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const M=c[f];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Qc(n){const t=new J2(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q2(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Qc(n),t.set(s,[o])):r>=a.length?(o=new Qc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(n,t,e){let i=new wl;const s=new Ot,r=new Ot,a=new ae,o=new yd({depthPacking:Uh}),l=new bd,c={},u=e.maxTextureSize,h={[ti]:Ie,[Ie]:ti,[_n]:_n},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:tm,fragmentShader:em}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new _e;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Re(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A0;let f=this.type;this.render=function(R,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Yn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==Cn&&this.type===Cn,X=f===Cn&&this.type!==Cn;for(let G=0,W=R.length;G<W;G++){const Y=R[G],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||O===!0||X===!0){const ht=this.type!==Cn?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new bi(s.x,s.y,ht),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Q=H.getViewportCount();for(let ht=0;ht<Q;ht++){const Lt=H.getViewport(ht);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),z.viewport(a),H.updateMatrices(Y,ht),i=H.getFrustum(),x(P,I,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Cn&&y(H,I),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,b,D)};function y(R,P){const I=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new bi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,I,d,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,I,p,g,null)}function M(R,P,I,E){let b=null;const D=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=b.uuid,O=P.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let G=X[O];G===void 0&&(G=b.clone(),X[O]=G,P.addEventListener("dispose",A)),b=G}if(b.visible=P.visible,b.wireframe=P.wireframe,E===Cn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:h[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=n.properties.get(b);z.light=I}return b}function x(R,P,I,E,b){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Cn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const O=t.update(R),X=R.material;if(Array.isArray(X)){const G=O.groups;for(let W=0,Y=G.length;W<Y;W++){const H=G[W],st=X[H.materialIndex];if(st&&st.visible){const Q=M(R,st,E,b);R.onBeforeShadow(n,R,P,I,O,Q,H),n.renderBufferDirect(I,null,O,Q,R,H),R.onAfterShadow(n,R,P,I,O,Q,H)}}}else if(X.visible){const G=M(R,X,E,b);R.onBeforeShadow(n,R,P,I,O,G,null),n.renderBufferDirect(I,null,O,G,R,null),R.onAfterShadow(n,R,P,I,O,G,null)}}const z=R.children;for(let O=0,X=z.length;O<X;O++)x(z[O],P,I,E,b)}function A(R){R.target.removeEventListener("dispose",A);for(const I in c){const E=c[I],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const im={[co]:uo,[ho]:mo,[fo]:go,[as]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:as};function sm(n,t){function e(){let L=!1;const it=new ae;let at=null;const vt=new ae(0,0,0,0);return{setMask:function(tt){at!==tt&&!L&&(n.colorMask(tt,tt,tt,tt),at=tt)},setLocked:function(tt){L=tt},setClear:function(tt,K,St,Bt,le){le===!0&&(tt*=Bt,K*=Bt,St*=Bt),it.set(tt,K,St,Bt),vt.equals(it)===!1&&(n.clearColor(tt,K,St,Bt),vt.copy(it))},reset:function(){L=!1,at=null,vt.set(-1,0,0,0)}}}function i(){let L=!1,it=!1,at=null,vt=null,tt=null;return{setReversed:function(K){if(it!==K){const St=t.get("EXT_clip_control");K?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),it=K;const Bt=tt;tt=null,this.setClear(Bt)}},getReversed:function(){return it},setTest:function(K){K?Z(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(K){at!==K&&!L&&(n.depthMask(K),at=K)},setFunc:function(K){if(it&&(K=im[K]),vt!==K){switch(K){case co:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case fo:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case mo:n.depthFunc(n.GREATER);break;case go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=K}},setLocked:function(K){L=K},setClear:function(K){tt!==K&&(it&&(K=1-K),n.clearDepth(K),tt=K)},reset:function(){L=!1,at=null,vt=null,tt=null,it=!1}}}function s(){let L=!1,it=null,at=null,vt=null,tt=null,K=null,St=null,Bt=null,le=null;return{setTest:function(ne){L||(ne?Z(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(ne){it!==ne&&!L&&(n.stencilMask(ne),it=ne)},setFunc:function(ne,yn,pn){(at!==ne||vt!==yn||tt!==pn)&&(n.stencilFunc(ne,yn,pn),at=ne,vt=yn,tt=pn)},setOp:function(ne,yn,pn){(K!==ne||St!==yn||Bt!==pn)&&(n.stencilOp(ne,yn,pn),K=ne,St=yn,Bt=pn)},setLocked:function(ne){L=ne},setClear:function(ne){le!==ne&&(n.clearStencil(ne),le=ne)},reset:function(){L=!1,it=null,at=null,vt=null,tt=null,K=null,St=null,Bt=null,le=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,y=null,M=null,x=null,A=null,R=null,P=new Ct(0,0,0),I=0,E=!1,b=null,D=null,z=null,O=null,X=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Y>=2);let st=null,Q={};const ht=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Xt=new ae().fromArray(ht),ee=new ae().fromArray(Lt);function Wt(L,it,at,vt){const tt=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let St=0;St<at;St++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,tt):n.texImage2D(it+St,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tt);return K}const q={};q[n.TEXTURE_2D]=Wt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(as),pt(!1),dt(Kl),Z(n.CULL_FACE),zt(Yn);function Z(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function gt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function B(L,it){return h[L]!==it?(n.bindFramebuffer(L,it),h[L]=it,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=it),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=it),!0):!1}function ft(L,it){let at=p,vt=!1;if(L){at=d.get(it),at===void 0&&(at=[],d.set(it,at));const tt=L.textures;if(at.length!==tt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let K=0,St=tt.length;K<St;K++)at[K]=n.COLOR_ATTACHMENT0+K;at.length=tt.length,vt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,vt=!0);vt&&n.drawBuffers(at)}function qt(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const Pt={[pi]:n.FUNC_ADD,[ah]:n.FUNC_SUBTRACT,[oh]:n.FUNC_REVERSE_SUBTRACT};Pt[lh]=n.MIN,Pt[ch]=n.MAX;const w={[uh]:n.ZERO,[hh]:n.ONE,[dh]:n.SRC_COLOR,[oo]:n.SRC_ALPHA,[vh]:n.SRC_ALPHA_SATURATE,[gh]:n.DST_COLOR,[ph]:n.DST_ALPHA,[fh]:n.ONE_MINUS_SRC_COLOR,[lo]:n.ONE_MINUS_SRC_ALPHA,[_h]:n.ONE_MINUS_DST_COLOR,[mh]:n.ONE_MINUS_DST_ALPHA,[xh]:n.CONSTANT_COLOR,[Mh]:n.ONE_MINUS_CONSTANT_COLOR,[Sh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(L,it,at,vt,tt,K,St,Bt,le,ne){if(L===Yn){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),L!==rh){if(L!==m||ne!==E){if((f!==pi||x!==pi)&&(n.blendEquation(n.FUNC_ADD),f=pi,x=pi),ne)switch(L){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Be:n.blendFunc(n.ONE,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Be:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,A=null,R=null,P.set(0,0,0),I=0,m=L,E=ne}return}tt=tt||it,K=K||at,St=St||vt,(it!==f||tt!==x)&&(n.blendEquationSeparate(Pt[it],Pt[tt]),f=it,x=tt),(at!==y||vt!==M||K!==A||St!==R)&&(n.blendFuncSeparate(w[at],w[vt],w[K],w[St]),y=at,M=vt,A=K,R=St),(Bt.equals(P)===!1||le!==I)&&(n.blendColor(Bt.r,Bt.g,Bt.b,le),P.copy(Bt),I=le),m=L,E=!1}function xt(L,it){L.side===_n?gt(n.CULL_FACE):Z(n.CULL_FACE);let at=L.side===Ie;it&&(at=!at),pt(at),L.blending===es&&L.transparent===!1?zt(Yn):zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const vt=L.stencilWrite;o.setTest(vt),vt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function dt(L){L!==nh?(Z(n.CULL_FACE),L!==D&&(L===Kl?n.cullFace(n.BACK):L===ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),D=L}function Yt(L){L!==z&&(W&&n.lineWidth(L),z=L)}function _t(L,it,at){L?(Z(n.POLYGON_OFFSET_FILL),(O!==it||X!==at)&&(n.polygonOffset(it,at),O=it,X=at)):gt(n.POLYGON_OFFSET_FILL)}function Nt(L){L?Z(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Te(L){L===void 0&&(L=n.TEXTURE0+G-1),st!==L&&(n.activeTexture(L),st=L)}function xe(L,it,at){at===void 0&&(st===null?at=n.TEXTURE0+G-1:at=st);let vt=Q[at];vt===void 0&&(vt={type:void 0,texture:void 0},Q[at]=vt),(vt.type!==L||vt.texture!==it)&&(st!==at&&(n.activeTexture(at),st=at),n.bindTexture(L,it||q[L]),vt.type=L,vt.texture=it)}function T(){const L=Q[st];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){Xt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Xt.copy(L))}function It(L){ee.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function Et(L,it){let at=c.get(it);at===void 0&&(at=new WeakMap,c.set(it,at));let vt=at.get(L);vt===void 0&&(vt=n.getUniformBlockIndex(it,L.name),at.set(L,vt))}function lt(L,it){const vt=c.get(it).get(L);l.get(it)!==vt&&(n.uniformBlockBinding(it,vt,L.__bindingPointIndex),l.set(it,vt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},st=null,Q={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,y=null,M=null,x=null,A=null,R=null,P=new Ct(0,0,0),I=0,E=!1,b=null,D=null,z=null,O=null,X=null,Xt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:gt,bindFramebuffer:B,drawBuffers:ft,useProgram:qt,setBlending:zt,setMaterial:xt,setFlipSided:pt,setCullFace:dt,setLineWidth:Yt,setPolygonOffset:_t,setScissorTest:Nt,activeTexture:Te,bindTexture:xe,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:bt,texImage3D:nt,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:rt,texStorage3D:yt,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Tt,scissor:ut,viewport:It,reset:Vt}}function rm(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return p?new OffscreenCanvas(T,v):Hr("canvas")}function g(T,v,F){let j=1;const J=xe(T);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(j*J.width),Tt=Math.floor(j*J.height);h===void 0&&(h=_($,Tt));const rt=v?_($,Tt):h;return rt.width=$,rt.height=Tt,rt.getContext("2d").drawImage(T,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Tt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,v,F,j,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=v;if(v===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),v===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){const Tt=J?kr:Jt.getTransfer(j);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=Tt===se?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(T,v){let F;return T?v===null||v===Si||v===Is?F=n.DEPTH24_STENCIL8:v===Ln?F=n.DEPTH32F_STENCIL8:v===Ls&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===Is?F=n.DEPTH_COMPONENT24:v===Ln?F=n.DEPTH_COMPONENT32F:v===Ls&&(F=n.DEPTH_COMPONENT16),F}function A(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){const v=T.target;v.removeEventListener("dispose",R),I(v),v.isVideoTexture&&u.delete(v)}function P(T){const v=T.target;v.removeEventListener("dispose",P),b(v)}function I(T){const v=i.get(T);if(v.__webglInit===void 0)return;const F=T.source,j=d.get(F);if(j){const J=j[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(j).length===0&&d.delete(F)}i.remove(T)}function E(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const F=T.source,j=d.get(F);delete j[v.__cacheKey],a.memory.textures--}function b(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let J=0;J<v.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[j][J]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let j=0,J=F.length;j<J;j++){const $=i.get(F[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(F[j])}i.remove(T)}let D=0;function z(){D=0}function O(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function X(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function G(T,v){const F=i.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,T,v);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function W(T,v){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){q(F,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Y(T,v){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){q(F,T,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function H(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Z(F,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const st={[xo]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},Q={[hn]:n.NEAREST,[Lh]:n.NEAREST_MIPMAP_NEAREST,[Ks]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},ht={[Fh]:n.NEVER,[Hh]:n.ALWAYS,[Oh]:n.LESS,[z0]:n.LEQUAL,[zh]:n.EQUAL,[Vh]:n.GEQUAL,[Bh]:n.GREATER,[kh]:n.NOTEQUAL};function Lt(T,v){if(v.type===Ln&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===ca||v.magFilter===Ks||v.magFilter===_i||v.minFilter===je||v.minFilter===ca||v.minFilter===Ks||v.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,st[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,st[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,st[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Q[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Q[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==Ks&&v.minFilter!==_i||v.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Xt(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const j=v.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const $=X(v);if($!==T.__cacheKey){J[$]===void 0&&(J[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[$].usedTimes++;const Tt=J[T.__cacheKey];Tt!==void 0&&(J[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(v)),T.__cacheKey=$,T.__webglTexture=J[$].texture}return F}function ee(T,v,F){return Math.floor(Math.floor(T/F)/v)}function Wt(T,v,F,j){const $=T.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,j,v.data);else{$.sort((nt,ut)=>nt.start-ut.start);let Tt=0;for(let nt=1;nt<$.length;nt++){const ut=$[Tt],It=$[nt],Et=ut.start+ut.count,lt=ee(It.start,v.width,4),Vt=ee(ut.start,v.width,4);It.start<=Et+1&&lt===Vt&&ee(It.start+It.count-1,v.width,4)===lt?ut.count=Math.max(ut.count,It.start+It.count-ut.start):(++Tt,$[Tt]=It)}$.length=Tt+1;const rt=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),bt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let nt=0,ut=$.length;nt<ut;nt++){const It=$[nt],Et=Math.floor(It.start/4),lt=Math.ceil(It.count/4),Vt=Et%v.width,L=Math.floor(Et/v.width),it=lt,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Vt,L,it,at,F,j,v.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function q(T,v,F){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const J=Xt(T,v),$=v.source;e.bindTexture(j,T.__webglTexture,n.TEXTURE0+F);const Tt=i.get($);if($.version!==Tt.__version||J===!0){e.activeTexture(n.TEXTURE0+F);const rt=Jt.getPrimaries(Jt.workingColorSpace),yt=v.colorSpace===qn?null:Jt.getPrimaries(v.colorSpace),bt=v.colorSpace===qn||rt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let nt=g(v.image,!1,s.maxTextureSize);nt=Te(v,nt);const ut=r.convert(v.format,v.colorSpace),It=r.convert(v.type);let Et=M(v.internalFormat,ut,It,v.colorSpace,v.isVideoTexture);Lt(j,v);let lt;const Vt=v.mipmaps,L=v.isVideoTexture!==!0,it=Tt.__version===void 0||J===!0,at=$.dataReady,vt=A(v,nt);if(v.isDepthTexture)Et=x(v.format===Ns,v.type),it&&(L?e.texStorage2D(n.TEXTURE_2D,1,Et,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Et,nt.width,nt.height,0,ut,It,null));else if(v.isDataTexture)if(Vt.length>0){L&&it&&e.texStorage2D(n.TEXTURE_2D,vt,Et,Vt[0].width,Vt[0].height);for(let tt=0,K=Vt.length;tt<K;tt++)lt=Vt[tt],L?at&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,It,lt.data):e.texImage2D(n.TEXTURE_2D,tt,Et,lt.width,lt.height,0,ut,It,lt.data);v.generateMipmaps=!1}else L?(it&&e.texStorage2D(n.TEXTURE_2D,vt,Et,nt.width,nt.height),at&&Wt(v,nt,ut,It)):e.texImage2D(n.TEXTURE_2D,0,Et,nt.width,nt.height,0,ut,It,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Et,Vt[0].width,Vt[0].height,nt.depth);for(let tt=0,K=Vt.length;tt<K;tt++)if(lt=Vt[tt],v.format!==un)if(ut!==null)if(L){if(at)if(v.layerUpdates.size>0){const St=Cc(lt.width,lt.height,v.format,v.type);for(const Bt of v.layerUpdates){const le=lt.data.subarray(Bt*St/lt.data.BYTES_PER_ELEMENT,(Bt+1)*St/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Bt,lt.width,lt.height,1,ut,le)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ut,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Et,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ut,It,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Et,lt.width,lt.height,nt.depth,0,ut,It,lt.data)}else{L&&it&&e.texStorage2D(n.TEXTURE_2D,vt,Et,Vt[0].width,Vt[0].height);for(let tt=0,K=Vt.length;tt<K;tt++)lt=Vt[tt],v.format!==un?ut!==null?L?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Et,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?at&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,It,lt.data):e.texImage2D(n.TEXTURE_2D,tt,Et,lt.width,lt.height,0,ut,It,lt.data)}else if(v.isDataArrayTexture)if(L){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Et,nt.width,nt.height,nt.depth),at)if(v.layerUpdates.size>0){const tt=Cc(nt.width,nt.height,v.format,v.type);for(const K of v.layerUpdates){const St=nt.data.subarray(K*tt/nt.data.BYTES_PER_ELEMENT,(K+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ut,It,St)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,It,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,nt.width,nt.height,nt.depth,0,ut,It,nt.data);else if(v.isData3DTexture)L?(it&&e.texStorage3D(n.TEXTURE_3D,vt,Et,nt.width,nt.height,nt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,It,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Et,nt.width,nt.height,nt.depth,0,ut,It,nt.data);else if(v.isFramebufferTexture){if(it)if(L)e.texStorage2D(n.TEXTURE_2D,vt,Et,nt.width,nt.height);else{let tt=nt.width,K=nt.height;for(let St=0;St<vt;St++)e.texImage2D(n.TEXTURE_2D,St,Et,tt,K,0,ut,It,null),tt>>=1,K>>=1}}else if(Vt.length>0){if(L&&it){const tt=xe(Vt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Et,tt.width,tt.height)}for(let tt=0,K=Vt.length;tt<K;tt++)lt=Vt[tt],L?at&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ut,It,lt):e.texImage2D(n.TEXTURE_2D,tt,Et,ut,It,lt);v.generateMipmaps=!1}else if(L){if(it){const tt=xe(nt);e.texStorage2D(n.TEXTURE_2D,vt,Et,tt.width,tt.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,It,nt)}else e.texImage2D(n.TEXTURE_2D,0,Et,ut,It,nt);m(v)&&f(j),Tt.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Z(T,v,F){if(v.image.length!==6)return;const j=Xt(T,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const $=i.get(J);if(J.version!==$.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const Tt=Jt.getPrimaries(Jt.workingColorSpace),rt=v.colorSpace===qn?null:Jt.getPrimaries(v.colorSpace),yt=v.colorSpace===qn||Tt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const bt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!bt&&!nt?ut[K]=g(v.image[K],!0,s.maxCubemapSize):ut[K]=nt?v.image[K].image:v.image[K],ut[K]=Te(v,ut[K]);const It=ut[0],Et=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),Vt=M(v.internalFormat,Et,lt,v.colorSpace),L=v.isVideoTexture!==!0,it=$.__version===void 0||j===!0,at=J.dataReady;let vt=A(v,It);Lt(n.TEXTURE_CUBE_MAP,v);let tt;if(bt){L&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Vt,It.width,It.height);for(let K=0;K<6;K++){tt=ut[K].mipmaps;for(let St=0;St<tt.length;St++){const Bt=tt[St];v.format!==un?Et!==null?L?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St,0,0,Bt.width,Bt.height,Et,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St,Vt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St,0,0,Bt.width,Bt.height,Et,lt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St,Vt,Bt.width,Bt.height,0,Et,lt,Bt.data)}}}else{if(tt=v.mipmaps,L&&it){tt.length>0&&vt++;const K=xe(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){L?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,Et,lt,ut[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,ut[K].width,ut[K].height,0,Et,lt,ut[K].data);for(let St=0;St<tt.length;St++){const le=tt[St].image[K].image;L?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St+1,0,0,le.width,le.height,Et,lt,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St+1,Vt,le.width,le.height,0,Et,lt,le.data)}}else{L?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,lt,ut[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Et,lt,ut[K]);for(let St=0;St<tt.length;St++){const Bt=tt[St];L?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St+1,0,0,Et,lt,Bt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,St+1,Vt,Et,lt,Bt.image[K])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),$.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function gt(T,v,F,j,J,$){const Tt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),yt=M(F.internalFormat,Tt,rt,F.colorSpace),bt=i.get(v),nt=i.get(F);if(nt.__renderTarget=v,!bt.__hasExternalTextures){const ut=Math.max(1,v.width>>$),It=Math.max(1,v.height>>$);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,$,yt,ut,It,v.depth,0,Tt,rt,null):e.texImage2D(J,$,yt,ut,It,0,Tt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),_t(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,nt.__webglTexture,0,Yt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,nt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function B(T,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const j=v.depthTexture,J=j&&j.isDepthTexture?j.type:null,$=x(v.stencilBuffer,J),Tt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=Yt(v);_t(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,$,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,T)}else{const j=v.textures;for(let J=0;J<j.length;J++){const $=j[J],Tt=r.convert($.format,$.colorSpace),rt=r.convert($.type),yt=M($.internalFormat,Tt,rt,$.colorSpace),bt=Yt(v);F&&_t(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,yt,v.width,v.height):_t(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,yt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,yt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const J=j.__webglTexture,$=Yt(v);if(v.depthTexture.format===Us)_t(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===Ns)_t(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qt(T){const v=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=j}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?ft(v.__webglFramebuffer[0],T):ft(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),B(v.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,$)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),B(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(T,v,F){const j=i.get(T);v!==void 0&&gt(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&qt(T)}function w(T){const v=T.texture,F=i.get(T),j=i.get(v);T.addEventListener("dispose",P);const J=T.textures,$=T.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let yt=0;yt<v.mipmaps.length;yt++)F.__webglFramebuffer[rt][yt]=n.createFramebuffer()}else F.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)F.__webglFramebuffer[rt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let rt=0,yt=J.length;rt<yt;rt++){const bt=i.get(J[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const yt=J[rt];F.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const bt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),ut=M(yt.internalFormat,bt,nt,yt.colorSpace,T.isXRRenderTarget===!0),It=Yt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,ut,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),B(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)gt(F.__webglFramebuffer[rt][yt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt);else gt(F.__webglFramebuffer[rt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,yt=J.length;rt<yt;rt++){const bt=J[rt],nt=i.get(bt);let ut=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),Lt(ut,bt),gt(F.__webglFramebuffer,T,bt,n.COLOR_ATTACHMENT0+rt,ut,0),m(bt)&&f(ut)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),Lt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)gt(F.__webglFramebuffer[yt],T,v,n.COLOR_ATTACHMENT0,rt,yt);else gt(F.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,rt,0);m(v)&&f(rt),e.unbindTexture()}T.depthBuffer&&qt(T)}function zt(T){const v=T.textures;for(let F=0,j=v.length;F<j;F++){const J=v[F];if(m(J)){const $=y(T),Tt=i.get(J).__webglTexture;e.bindTexture($,Tt),f($),e.unbindTexture()}}}const xt=[],pt=[];function dt(T){if(T.samples>0){if(_t(T)===!1){const v=T.textures,F=T.width,j=T.height;let J=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(T),rt=v.length>1;if(rt)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const nt=i.get(v[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,J,n.NEAREST),l===!0&&(xt.length=0,pt.length=0,xt.push(n.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xt.push($),pt.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const nt=i.get(v[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Yt(T){return Math.min(s.maxSamples,T.samples)}function _t(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function Te(T,v){const F=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==cs&&F!==qn&&(Jt.getTransfer(F)===se?(j!==un||J!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function xe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Pt,this.setupRenderTarget=w,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=_t}function am(n,t){function e(i,s=qn){let r;const a=Jt.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===D0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===C0)return n.BYTE;if(i===P0)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Gs)return n.HALF_FLOAT;if(i===I0)return n.ALPHA;if(i===U0)return n.RGB;if(i===un)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===N0)return n.RED;if(i===yl)return n.RED_INTEGER;if(i===F0)return n.RG;if(i===bl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===Ir||i===Ur||i===Nr||i===Fr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===So||i===yo||i===bo||i===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===To||i===wo||i===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===To||i===wo)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ao)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ro||i===Co||i===Po||i===Do||i===Lo||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===zo||i===Bo||i===ko||i===Vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ro)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Po)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Do)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Io)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===No)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===Go||i===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ho)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$o||i===Xo||i===qo||i===jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
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

}`;class cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new K0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new en({vertexShader:om,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class um extends wi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=typeof XRWebGLBinding<"u",m=new cm,f={},y=e.getContextAttributes();let M=null,x=null;const A=[],R=[],P=new Ot;let I=null;const E=new tn;E.viewport=new ae;const b=new tn;b.viewport=new ae;const D=[E,b],z=new Cd;let O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=A[q];return Z===void 0&&(Z=new Da,A[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=A[q];return Z===void 0&&(Z=new Da,A[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=A[q];return Z===void 0&&(Z=new Da,A[q]=Z),Z.getHandSpace()};function G(q){const Z=R.indexOf(q.inputSource);if(Z===-1)return;const gt=A[Z];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<A.length;q++){const Z=R[q];Z!==null&&(R[q]=null,A[q].disconnect(Z))}O=null,X=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(M),p=null,d=null,h=null,s=null,x=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,B=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?Ns:Us,B=y.stencil?Is:Si);const qt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new bi(d.textureWidth,d.textureHeight,{format:un,type:Mn,depthTexture:new Y0(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new bi(p.framebufferWidth,p.framebufferHeight,{format:un,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let Z=0;Z<q.removed.length;Z++){const gt=q.removed[Z],B=R.indexOf(gt);B>=0&&(R[B]=null,A[B].disconnect(gt))}for(let Z=0;Z<q.added.length;Z++){const gt=q.added[Z];let B=R.indexOf(gt);if(B===-1){for(let qt=0;qt<A.length;qt++)if(qt>=R.length){R.push(gt),B=qt;break}else if(R[qt]===null){R[qt]=gt,B=qt;break}if(B===-1)break}const ft=A[B];ft&&ft.connect(gt)}}const H=new C,st=new C;function Q(q,Z,gt){H.setFromMatrixPosition(Z.matrixWorld),st.setFromMatrixPosition(gt.matrixWorld);const B=H.distanceTo(st),ft=Z.projectionMatrix.elements,qt=gt.projectionMatrix.elements,Pt=ft[14]/(ft[10]-1),w=ft[14]/(ft[10]+1),zt=(ft[9]+1)/ft[5],xt=(ft[9]-1)/ft[5],pt=(ft[8]-1)/ft[0],dt=(qt[8]+1)/qt[0],Yt=Pt*pt,_t=Pt*dt,Nt=B/(-pt+dt),Te=Nt*-pt;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Te),q.translateZ(Nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ft[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const xe=Pt+Nt,T=w+Nt,v=Yt-Te,F=_t+(B-Te),j=zt*w/T*xe,J=xt*w/T*xe;q.projectionMatrix.makePerspective(v,F,j,J,xe,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ht(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,gt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),z.near=b.near=E.near=Z,z.far=b.far=E.far=gt,(O!==z.near||X!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,X=z.far),z.layers.mask=q.layers.mask|6,E.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const B=q.parent,ft=z.cameras;ht(z,B);for(let qt=0;qt<ft.length;qt++)ht(ft[qt],B);ft.length===2?Q(z,E,b):z.projectionMatrix.copy(E.projectionMatrix),Lt(q,z,B)};function Lt(q,Z,gt){gt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return f[q]};let Xt=null;function ee(q,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let B=!1;gt.length!==z.cameras.length&&(z.cameras.length=0,B=!0);for(let w=0;w<gt.length;w++){const zt=gt[w];let xt=null;if(p!==null)xt=p.getViewport(zt);else{const dt=h.getViewSubImage(d,zt);xt=dt.viewport,w===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let pt=D[w];pt===void 0&&(pt=new tn,pt.layers.enable(w),pt.viewport=new ae,D[w]=pt),pt.matrix.fromArray(zt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(zt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(xt.x,xt.y,xt.width,xt.height),w===0&&(z.matrix.copy(pt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),B===!0&&z.cameras.push(pt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const w=h.getDepthInformation(gt[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(ft&&ft.includes("camera-access")&&g){t.state.unbindTexture(),h=i.getBinding();for(let w=0;w<gt.length;w++){const zt=gt[w].camera;if(zt){let xt=f[zt];xt||(xt=new K0,f[zt]=xt);const pt=h.getCameraImage(zt);xt.sourceTexture=pt}}}}for(let gt=0;gt<A.length;gt++){const B=R[gt],ft=A[gt];B!==null&&ft!==void 0&&ft.update(B,Z,c||a)}Xt&&Xt(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Wt=new Q0;Wt.setAnimationLoop(ee),this.setAnimationLoop=function(q){Xt=q},this.dispose=function(){}}}const hi=new Sn,hm=new fe;function dm(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,$0(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,hi.copy(x),hi.x*=-1,hi.y*=-1,hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(hi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fm(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;i.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(_(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const A=M.program;i.updateUBOMapping(y,A);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function u(y){const M=h();y.__bindingPointIndex=M;const x=n.createBuffer(),A=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],x=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,P=x.length;R<P;R++){const I=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,b=I.length;E<b;E++){const D=I[E];if(p(D,R,E,A)===!0){const z=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let G=0;G<O.length;G++){const W=O[G],Y=g(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,M,x,A){const R=y.value,P=M+"_"+x;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const I=A[P];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return A[P]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(y){const M=y.uniforms;let x=0;const A=16;for(let P=0,I=M.length;P<I;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,D=E.length;b<D;b++){const z=E[b],O=Array.isArray(z.value)?z.value:[z.value];for(let X=0,G=O.length;X<G;X++){const W=O[X],Y=g(W),H=x%A,st=H%Y.boundary,Q=H+st;x+=st,Q!==0&&A-Q<Y.storage&&(x+=A-Q),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Y.storage}}}const R=x%A;return R>0&&(x+=A-R),y.__size=x,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class pm{constructor(t={}){const{canvas:e=$h(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Xe;let R=0,P=0,I=null,E=-1,b=null;const D=new ae,z=new ae;let O=null;const X=new Ct(0);let G=0,W=e.width,Y=e.height,H=1,st=null,Q=null;const ht=new ae(0,0,W,Y),Lt=new ae(0,0,W,Y);let Xt=!1;const ee=new wl;let Wt=!1,q=!1;const Z=new fe,gt=new C,B=new ae,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Pt(){return I===null?H:1}let w=i;function zt(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),w===null){const U="webgl2";if(w=zt(U,S),w===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,pt,dt,Yt,_t,Nt,Te,xe,T,v,F,j,J,$,Tt,rt,yt,bt,nt,ut,It,Et,lt,Vt;function L(){xt=new Ep(w),xt.init(),Et=new am(w,xt),pt=new _p(w,xt,t,Et),dt=new sm(w,xt),pt.reversedDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Yt=new Ap(w),_t=new $2,Nt=new rm(w,xt,dt,_t,pt,Et,Yt),Te=new xp(x),xe=new bp(x),T=new Ld(w),lt=new mp(w,T),v=new Tp(w,T,Yt,lt),F=new Cp(w,v,T,Yt),nt=new Rp(w,pt,Nt),rt=new vp(_t),j=new W2(x,Te,xe,xt,pt,lt,rt),J=new dm(x,_t),$=new q2,Tt=new Q2(xt),bt=new pp(x,Te,xe,dt,F,p,l),yt=new nm(x,F,pt),Vt=new fm(w,Yt,pt,dt),ut=new gp(w,xt,Yt),It=new wp(w,xt,Yt),Yt.programs=j.programs,x.capabilities=pt,x.extensions=xt,x.properties=_t,x.renderLists=$,x.shadowMap=yt,x.state=dt,x.info=Yt}L();const it=new um(x,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(W,Y,!1))},this.getSize=function(S){return S.set(W,Y)},this.setSize=function(S,U,k=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Y=U,e.width=Math.floor(S*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(S,U,k){W=S,Y=U,H=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(ht)},this.setViewport=function(S,U,k,V){S.isVector4?ht.set(S.x,S.y,S.z,S.w):ht.set(S,U,k,V),dt.viewport(D.copy(ht).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Lt)},this.setScissor=function(S,U,k,V){S.isVector4?Lt.set(S.x,S.y,S.z,S.w):Lt.set(S,U,k,V),dt.scissor(z.copy(Lt).multiplyScalar(H).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(S){dt.setScissorTest(Xt=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){Q=S},this.getClearColor=function(S){return S.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,k=!0){let V=0;if(S){let N=!1;if(I!==null){const et=I.texture.format;N=et===El||et===bl||et===yl}if(N){const et=I.texture.type,ct=et===Mn||et===Si||et===Ls||et===Is||et===Ml||et===Sl,Mt=bt.getClearColor(),mt=bt.getClearAlpha(),Dt=Mt.r,Ft=Mt.g,wt=Mt.b;ct?(_[0]=Dt,_[1]=Ft,_[2]=wt,_[3]=mt,w.clearBufferuiv(w.COLOR,0,_)):(g[0]=Dt,g[1]=Ft,g[2]=wt,g[3]=mt,w.clearBufferiv(w.COLOR,0,g))}else V|=w.COLOR_BUFFER_BIT}U&&(V|=w.DEPTH_BUFFER_BIT),k&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),bt.dispose(),$.dispose(),Tt.dispose(),_t.dispose(),Te.dispose(),xe.dispose(),F.dispose(),lt.dispose(),Vt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",pn),it.removeEventListener("sessionend",Wl),si.stop()};function at(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=Yt.autoReset,U=yt.enabled,k=yt.autoUpdate,V=yt.needsUpdate,N=yt.type;L(),Yt.autoReset=S,yt.enabled=U,yt.autoUpdate=k,yt.needsUpdate=V,yt.type=N}function tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function K(S){const U=S.target;U.removeEventListener("dispose",K),St(U)}function St(S){Bt(S),_t.remove(S)}function Bt(S){const U=_t.get(S).programs;U!==void 0&&(U.forEach(function(k){j.releaseProgram(k)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,V,N,et){U===null&&(U=ft);const ct=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Ku(S,U,k,V,N);dt.setMaterial(V,ct);let mt=k.index,Dt=1;if(V.wireframe===!0){if(mt=v.getWireframeAttribute(k),mt===void 0)return;Dt=2}const Ft=k.drawRange,wt=k.attributes.position;let jt=Ft.start*Dt,ie=(Ft.start+Ft.count)*Dt;et!==null&&(jt=Math.max(jt,et.start*Dt),ie=Math.min(ie,(et.start+et.count)*Dt)),mt!==null?(jt=Math.max(jt,0),ie=Math.min(ie,mt.count)):wt!=null&&(jt=Math.max(jt,0),ie=Math.min(ie,wt.count));const ve=ie-jt;if(ve<0||ve===1/0)return;lt.setup(N,V,Mt,k,mt);let ue,oe=ut;if(mt!==null&&(ue=T.get(mt),oe=It,oe.setIndex(ue)),N.isMesh)V.wireframe===!0?(dt.setLineWidth(V.wireframeLinewidth*Pt()),oe.setMode(w.LINES)):oe.setMode(w.TRIANGLES);else if(N.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),dt.setLineWidth(Rt*Pt()),N.isLineSegments?oe.setMode(w.LINES):N.isLineLoop?oe.setMode(w.LINE_LOOP):oe.setMode(w.LINE_STRIP)}else N.isPoints?oe.setMode(w.POINTS):N.isSprite&&oe.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,pe=N._multiDrawCounts,Zt=N._multiDrawCount,Ke=mt?T.get(mt).bytesPerElement:1,Ri=_t.get(V).currentProgram.getUniforms();for(let Ze=0;Ze<Zt;Ze++)Ri.setValue(w,"_gl_DrawID",Ze),oe.render(Rt[Ze]/Ke,pe[Ze])}else if(N.isInstancedMesh)oe.renderInstances(jt,ve,N.count);else if(k.isInstancedBufferGeometry){const Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pe=Math.min(k.instanceCount,Rt);oe.renderInstances(jt,ve,pe)}else oe.render(jt,ve)};function le(S,U,k){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Ys(S,U,k),S.side=ti,S.needsUpdate=!0,Ys(S,U,k),S.side=_n):Ys(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),f=Tt.get(k),f.init(U),M.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const Mt=et[ct];le(Mt,k,N),V.add(Mt)}else le(et,k,N),V.add(et)}),f=M.pop(),V},this.compileAsync=function(S,U,k=null){const V=this.compile(S,U,k);return new Promise(N=>{function et(){if(V.forEach(function(ct){_t.get(ct).currentProgram.isReady()&&V.delete(ct)}),V.size===0){N(S);return}setTimeout(et,10)}xt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ne=null;function yn(S){ne&&ne(S)}function pn(){si.stop()}function Wl(){si.start()}const si=new Q0;si.setAnimationLoop(yn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(S){ne=S,it.setAnimationLoop(S),S===null?si.stop():si.start()},it.addEventListener("sessionstart",pn),it.addEventListener("sessionend",Wl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,I),f=Tt.get(S,M.length),f.init(U),M.push(f),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(Z,vn,U.reversedDepth),q=this.localClippingEnabled,Wt=rt.init(this.clippingPlanes,q),m=$.get(S,y.length),m.init(),y.push(m),it.enabled===!0&&it.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&oa(et,U,-1/0,x.sortObjects)}oa(S,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,Q),qt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,qt&&bt.addToRenderList(m,S),this.info.render.frame++,Wt===!0&&rt.beginShadows();const k=f.state.shadowsArray;yt.render(k,S,U),Wt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let ct=0,Mt=et.length;ct<Mt;ct++){const mt=et[ct];Xl(V,N,S,mt)}qt&&bt.render(S);for(let ct=0,Mt=et.length;ct<Mt;ct++){const mt=et[ct];$l(m,S,mt,mt.viewport)}}else N.length>0&&Xl(V,N,S,U),qt&&bt.render(S),$l(m,S,U);I!==null&&P===0&&(Nt.updateMultisampleRenderTarget(I),Nt.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,U),lt.resetDefaultState(),E=-1,b=null,M.pop(),M.length>0?(f=M[M.length-1],Wt===!0&&rt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function oa(S,U,k,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){V&&B.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const ct=F.update(S),Mt=S.material;Mt.visible&&m.push(S,ct,Mt,k,B.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ee.intersectsObject(S))){const ct=F.update(S),Mt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),B.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),B.copy(ct.boundingSphere.center)),B.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(Mt)){const mt=ct.groups;for(let Dt=0,Ft=mt.length;Dt<Ft;Dt++){const wt=mt[Dt],jt=Mt[wt.materialIndex];jt&&jt.visible&&m.push(S,ct,jt,k,B.z,wt)}}else Mt.visible&&m.push(S,ct,Mt,k,B.z,null)}}const et=S.children;for(let ct=0,Mt=et.length;ct<Mt;ct++)oa(et[ct],U,k,V)}function $l(S,U,k,V){const N=S.opaque,et=S.transmissive,ct=S.transparent;f.setupLightsView(k),Wt===!0&&rt.setGlobalState(x.clippingPlanes,k),V&&dt.viewport(D.copy(V)),N.length>0&&js(N,U,k),et.length>0&&js(et,U,k),ct.length>0&&js(ct,U,k),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Xl(S,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new bi(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Gs:Mn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const et=f.state.transmissionRenderTarget[V.id],ct=V.viewport||D;et.setSize(ct.z*x.transmissionResolutionScale,ct.w*x.transmissionResolutionScale);const Mt=x.getRenderTarget(),mt=x.getActiveCubeFace(),Dt=x.getActiveMipmapLevel();x.setRenderTarget(et),x.getClearColor(X),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),qt&&bt.render(k);const Ft=x.toneMapping;x.toneMapping=Kn;const wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Wt===!0&&rt.setGlobalState(x.clippingPlanes,V),js(S,k,V),Nt.updateMultisampleRenderTarget(et),Nt.updateRenderTargetMipmap(et),xt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ie=0,ve=U.length;ie<ve;ie++){const ue=U[ie],oe=ue.object,Rt=ue.geometry,pe=ue.material,Zt=ue.group;if(pe.side===_n&&oe.layers.test(V.layers)){const Ke=pe.side;pe.side=Ie,pe.needsUpdate=!0,ql(oe,k,V,Rt,pe,Zt),pe.side=Ke,pe.needsUpdate=!0,jt=!0}}jt===!0&&(Nt.updateMultisampleRenderTarget(et),Nt.updateRenderTargetMipmap(et))}x.setRenderTarget(Mt,mt,Dt),x.setClearColor(X,G),wt!==void 0&&(V.viewport=wt),x.toneMapping=Ft}function js(S,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=S.length;N<et;N++){const ct=S[N],Mt=ct.object,mt=ct.geometry,Dt=ct.group;let Ft=ct.material;Ft.allowOverride===!0&&V!==null&&(Ft=V),Mt.layers.test(k.layers)&&ql(Mt,U,k,mt,Ft,Dt)}}function ql(S,U,k,V,N,et){S.onBeforeRender(x,U,k,V,N,et),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,k,V,S,et),N.transparent===!0&&N.side===_n&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,x.renderBufferDirect(k,U,V,N,S,et),N.side=ti,N.needsUpdate=!0,x.renderBufferDirect(k,U,V,N,S,et),N.side=_n):x.renderBufferDirect(k,U,V,N,S,et),S.onAfterRender(x,U,k,V,N,et)}function Ys(S,U,k){U.isScene!==!0&&(U=ft);const V=_t.get(S),N=f.state.lights,et=f.state.shadowsArray,ct=N.state.version,Mt=j.getParameters(S,N.state,et,U,k),mt=j.getProgramCacheKey(Mt);let Dt=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?xe:Te).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",K),Dt=new Map,V.programs=Dt);let Ft=Dt.get(mt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ct)return Yl(S,Mt),Ft}else Mt.uniforms=j.getUniforms(S),S.onBeforeCompile(Mt,x),Ft=j.acquireProgram(Mt,mt),Dt.set(mt,Ft),V.uniforms=Mt.uniforms;const wt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=rt.uniform),Yl(S,Mt),V.needsLights=Ju(S),V.lightsStateVersion=ct,V.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function jl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Yl(S,U){const k=_t.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Ku(S,U,k,V,N){U.isScene!==!0&&(U=ft),Nt.resetTextureUnits();const et=U.fog,ct=V.isMeshStandardMaterial?U.environment:null,Mt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cs,mt=(V.isMeshStandardMaterial?xe:Te).get(V.envMap||ct),Dt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,ie=!!k.morphAttributes.color;let ve=Kn;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ve=x.toneMapping);const ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ue!==void 0?ue.length:0,Rt=_t.get(V),pe=f.state.lights;if(Wt===!0&&(q===!0||S!==b)){const Ne=S===b&&V.id===E;rt.setState(V,S,Ne)}let Zt=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==pe.state.version||Rt.outputColorSpace!==Mt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==mt||V.fog===!0&&Rt.fog!==et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==Dt||Rt.vertexTangents!==Ft||Rt.morphTargets!==wt||Rt.morphNormals!==jt||Rt.morphColors!==ie||Rt.toneMapping!==ve||Rt.morphTargetsCount!==oe)&&(Zt=!0):(Zt=!0,Rt.__version=V.version);let Ke=Rt.currentProgram;Zt===!0&&(Ke=Ys(V,U,N));let Ri=!1,Ze=!1,ms=!1;const me=Ke.getUniforms(),nn=Rt.uniforms;if(dt.useProgram(Ke.program)&&(Ri=!0,Ze=!0,ms=!0),V.id!==E&&(E=V.id,Ze=!0),Ri||b!==S){dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),me.setValue(w,"projectionMatrix",S.projectionMatrix),me.setValue(w,"viewMatrix",S.matrixWorldInverse);const Ve=me.map.cameraPosition;Ve!==void 0&&Ve.setValue(w,gt.setFromMatrixPosition(S.matrixWorld)),pt.logarithmicDepthBuffer&&me.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&me.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Ze=!0,ms=!0)}if(N.isSkinnedMesh){me.setOptional(w,N,"bindMatrix"),me.setOptional(w,N,"bindMatrixInverse");const Ne=N.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),me.setValue(w,"boneTexture",Ne.boneTexture,Nt))}N.isBatchedMesh&&(me.setOptional(w,N,"batchingTexture"),me.setValue(w,"batchingTexture",N._matricesTexture,Nt),me.setOptional(w,N,"batchingIdTexture"),me.setValue(w,"batchingIdTexture",N._indirectTexture,Nt),me.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(w,"batchingColorTexture",N._colorsTexture,Nt));const sn=k.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&nt.update(N,k,Ke),(Ze||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,me.setValue(w,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nn.envMap.value=mt,nn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),Ze&&(me.setValue(w,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&Zu(nn,ms),et&&V.fog===!0&&J.refreshFogUniforms(nn,et),J.refreshMaterialUniforms(nn,V,H,Y,f.state.transmissionRenderTarget[S.id]),zr.upload(w,jl(Rt),nn,Nt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zr.upload(w,jl(Rt),nn,Nt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&me.setValue(w,"center",N.center),me.setValue(w,"modelViewMatrix",N.modelViewMatrix),me.setValue(w,"normalMatrix",N.normalMatrix),me.setValue(w,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ne=V.uniformsGroups;for(let Ve=0,la=Ne.length;Ve<la;Ve++){const ri=Ne[Ve];Vt.update(ri,Ke),Vt.bind(ri,Ke)}}return Ke}function Zu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ju(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,U,k){const V=_t.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_t.get(S.texture).__webglTexture=U,_t.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const k=_t.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Qu=w.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){I=S,R=U,P=k;let V=!0,N=null,et=!1,ct=!1;if(S){const mt=_t.get(S);if(mt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)Nt.setupRenderTarget(S);else if(mt.__hasExternalTextures)Nt.rebindTextures(S,_t.get(S.texture).__webglTexture,_t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const wt=S.depthTexture;if(mt.__boundDepthTexture!==wt){if(wt!==null&&_t.has(wt)&&(S.width!==wt.image.width||S.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ct=!0);const Ft=_t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][k]:N=Ft[U],et=!0):S.samples>0&&Nt.useMultisampledRTT(S)===!1?N=_t.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[k]:N=Ft,D.copy(S.viewport),z.copy(S.scissor),O=S.scissorTest}else D.copy(ht).multiplyScalar(H).floor(),z.copy(Lt).multiplyScalar(H).floor(),O=Xt;if(k!==0&&(N=Qu),dt.bindFramebuffer(w.FRAMEBUFFER,N)&&V&&dt.drawBuffers(S,N),dt.viewport(D),dt.scissor(z),dt.setScissorTest(O),et){const mt=_t.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,k)}else if(ct){const mt=U;for(let Dt=0;Dt<S.textures.length;Dt++){const Ft=_t.get(S.textures[Dt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Dt,Ft.__webglTexture,k,mt)}}else if(S!==null&&k!==0){const mt=_t.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mt.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(S,U,k,V,N,et,ct,Mt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){dt.bindFramebuffer(w.FRAMEBUFFER,mt);try{const Dt=S.textures[Mt],Ft=Dt.format,wt=Dt.type;if(!pt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&k>=0&&k<=S.height-N&&(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Mt),w.readPixels(U,k,V,N,Et.convert(Ft),Et.convert(wt),et))}finally{const Dt=I!==null?_t.get(I).__webglFramebuffer:null;dt.bindFramebuffer(w.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,V,N,et,ct,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt)if(U>=0&&U<=S.width-V&&k>=0&&k<=S.height-N){dt.bindFramebuffer(w.FRAMEBUFFER,mt);const Dt=S.textures[Mt],Ft=Dt.format,wt=Dt.type;if(!pt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,jt),w.bufferData(w.PIXEL_PACK_BUFFER,et.byteLength,w.STREAM_READ),S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Mt),w.readPixels(U,k,V,N,Et.convert(Ft),Et.convert(wt),0);const ie=I!==null?_t.get(I).__webglFramebuffer:null;dt.bindFramebuffer(w.FRAMEBUFFER,ie);const ve=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Xh(w,ve,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,jt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,et),w.deleteBuffer(jt),w.deleteSync(ve),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,k=0){const V=Math.pow(2,-k),N=Math.floor(S.image.width*V),et=Math.floor(S.image.height*V),ct=U!==null?U.x:0,Mt=U!==null?U.y:0;Nt.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,ct,Mt,N,et),dt.unbindTexture()};const th=w.createFramebuffer(),eh=w.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,V=null,N=0,et=null){et===null&&(N!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=N,N=0):et=0);let ct,Mt,mt,Dt,Ft,wt,jt,ie,ve;const ue=S.isCompressedTexture?S.mipmaps[et]:S.image;if(k!==null)ct=k.max.x-k.min.x,Mt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,Dt=k.min.x,Ft=k.min.y,wt=k.isBox3?k.min.z:0;else{const sn=Math.pow(2,-N);ct=Math.floor(ue.width*sn),Mt=Math.floor(ue.height*sn),S.isDataArrayTexture?mt=ue.depth:S.isData3DTexture?mt=Math.floor(ue.depth*sn):mt=1,Dt=0,Ft=0,wt=0}V!==null?(jt=V.x,ie=V.y,ve=V.z):(jt=0,ie=0,ve=0);const oe=Et.convert(U.format),Rt=Et.convert(U.type);let pe;U.isData3DTexture?(Nt.setTexture3D(U,0),pe=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Nt.setTexture2DArray(U,0),pe=w.TEXTURE_2D_ARRAY):(Nt.setTexture2D(U,0),pe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=w.getParameter(w.UNPACK_ROW_LENGTH),Ke=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ri=w.getParameter(w.UNPACK_SKIP_PIXELS),Ze=w.getParameter(w.UNPACK_SKIP_ROWS),ms=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ue.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ue.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Dt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wt);const me=S.isDataArrayTexture||S.isData3DTexture,nn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const sn=_t.get(S),Ne=_t.get(U),Ve=_t.get(sn.__renderTarget),la=_t.get(Ne.__renderTarget);dt.bindFramebuffer(w.READ_FRAMEBUFFER,Ve.__webglFramebuffer),dt.bindFramebuffer(w.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let ri=0;ri<mt;ri++)me&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(S).__webglTexture,N,wt+ri),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,et,ve+ri)),w.blitFramebuffer(Dt,Ft,ct,Mt,jt,ie,ct,Mt,w.DEPTH_BUFFER_BIT,w.NEAREST);dt.bindFramebuffer(w.READ_FRAMEBUFFER,null),dt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||_t.has(S)){const sn=_t.get(S),Ne=_t.get(U);dt.bindFramebuffer(w.READ_FRAMEBUFFER,th),dt.bindFramebuffer(w.DRAW_FRAMEBUFFER,eh);for(let Ve=0;Ve<mt;Ve++)me?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,sn.__webglTexture,N,wt+Ve):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,sn.__webglTexture,N),nn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ne.__webglTexture,et,ve+Ve):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ne.__webglTexture,et),N!==0?w.blitFramebuffer(Dt,Ft,ct,Mt,jt,ie,ct,Mt,w.COLOR_BUFFER_BIT,w.NEAREST):nn?w.copyTexSubImage3D(pe,et,jt,ie,ve+Ve,Dt,Ft,ct,Mt):w.copyTexSubImage2D(pe,et,jt,ie,Dt,Ft,ct,Mt);dt.bindFramebuffer(w.READ_FRAMEBUFFER,null),dt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else nn?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(pe,et,jt,ie,ve,ct,Mt,mt,oe,Rt,ue.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(pe,et,jt,ie,ve,ct,Mt,mt,oe,ue.data):w.texSubImage3D(pe,et,jt,ie,ve,ct,Mt,mt,oe,Rt,ue):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,et,jt,ie,ct,Mt,oe,Rt,ue.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,et,jt,ie,ue.width,ue.height,oe,ue.data):w.texSubImage2D(w.TEXTURE_2D,et,jt,ie,ct,Mt,oe,Rt,ue);w.pixelStorei(w.UNPACK_ROW_LENGTH,Zt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ke),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ri),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ze),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ms),et===0&&U.generateMipmaps&&w.generateMipmap(pe),dt.unbindTexture()},this.initRenderTarget=function(S){_t.get(S).__webglFramebuffer===void 0&&Nt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Nt.setTextureCube(S,0):S.isData3DTexture?Nt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Nt.setTexture2DArray(S,0):Nt.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){R=0,P=0,I=null,dt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}function mm(n){return n}function gm(n){if(n==null)return mm;var t,e,i=n.scale[0],s=n.scale[1],r=n.translate[0],a=n.translate[1];return function(o,l){l||(t=e=0);var c=2,u=o.length,h=new Array(u);for(h[0]=(t+=o[0])*i+r,h[1]=(e+=o[1])*s+a;c<u;)h[c]=o[c],++c;return h}}function _m(n,t){for(var e,i=n.length,s=i-t;s<--i;)e=n[s],n[s++]=n[i],n[i]=e}function vm(n,t){return typeof t=="string"&&(t=n.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return t0(n,e)})}:t0(n,t)}function t0(n,t){var e=t.id,i=t.bbox,s=t.properties==null?{}:t.properties,r=xm(n,t);return e==null&&i==null?{type:"Feature",properties:s,geometry:r}:i==null?{type:"Feature",id:e,properties:s,geometry:r}:{type:"Feature",id:e,bbox:i,properties:s,geometry:r}}function xm(n,t){var e=gm(n.transform),i=n.arcs;function s(u,h){h.length&&h.pop();for(var d=i[u<0?~u:u],p=0,_=d.length;p<_;++p)h.push(e(d[p],p));u<0&&_m(h,_)}function r(u){return e(u)}function a(u){for(var h=[],d=0,p=u.length;d<p;++d)s(u[d],h);return h.length<2&&h.push(h[0]),h}function o(u){for(var h=a(u);h.length<4;)h.push(h[0]);return h}function l(u){return u.map(o)}function c(u){var h=u.type,d;switch(h){case"GeometryCollection":return{type:h,geometries:u.geometries.map(c)};case"Point":d=r(u.coordinates);break;case"MultiPoint":d=u.coordinates.map(r);break;case"LineString":d=a(u.arcs);break;case"MultiLineString":d=u.arcs.map(a);break;case"Polygon":d=l(u.arcs);break;case"MultiPolygon":d=u.arcs.map(l);break;default:return null}return{type:h,coordinates:d}}return c(t)}const Mm={land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},Sm=JSON.parse("[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]]"),ym={scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]},bm={objects:Mm,arcs:Sm,transform:ym},Gi={ocean:"#1b3f63",oceanDeep:"#122d49",land:"#3f6145",coast:"#7ba383",graticule:"rgba(150, 190, 210, 0.13)"},$r=(n,t,e,i)=>[(n+180)/360*e,(90-t)/180*i];function e0(n,t,e,i){for(const s of t){n.beginPath();for(let r=0;r<s.length;r++){const a=s[r],[o,l]=$r(a[0],a[1],e,i);r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill(),n.stroke()}}function Em(n=2048){const t=n,e=n/2,i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d");if(!s)return i;const r=s.createLinearGradient(0,0,0,e);r.addColorStop(0,Gi.oceanDeep),r.addColorStop(.5,Gi.ocean),r.addColorStop(1,Gi.oceanDeep),s.fillStyle=r,s.fillRect(0,0,t,e),s.strokeStyle=Gi.graticule,s.lineWidth=Math.max(1,t/2048);for(let c=-180;c<=180;c+=30){const[u]=$r(c,0,t,e);s.beginPath(),s.moveTo(u,0),s.lineTo(u,e),s.stroke()}for(let c=-60;c<=60;c+=30){const[,u]=$r(0,c,t,e);s.beginPath(),s.moveTo(0,u),s.lineTo(t,u),s.stroke()}const a=bm,o=vm(a,a.objects.land),l=[];if(o.features)for(const c of o.features)c.geometry&&l.push(c.geometry);else o.geometry&&l.push(o.geometry);s.fillStyle=Gi.land,s.strokeStyle=Gi.coast,s.lineWidth=Math.max(1,t/1400),s.lineJoin="round";for(const c of l)if(c.type==="MultiPolygon")for(const u of c.coordinates)e0(s,u,t,e);else e0(s,c.coordinates,t,e);return i}function Tm(n,t){const i=n.width*4,s=(n.height-1)*4,r=t??document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d");if(!a)return r;a.clearRect(0,0,i,s);const o=a.createImageData(n.width,n.height);for(let c=0;c<n.width;c++)for(let u=0;u<n.height;u++){const h=n.values[c*n.height+u]??0,d=c>180?c-360:c,p=u+n.lat_start,[_,g]=$r(d,p,n.width,n.height),m=Math.min(n.width-1,Math.max(0,Math.round(_))),y=(Math.min(n.height-1,Math.max(0,Math.round(g)))*n.width+m)*4;o.data[y]=h,o.data[y+1]=h,o.data[y+2]=h,o.data[y+3]=255}const l=document.createElement("canvas");return l.width=n.width,l.height=n.height,l.getContext("2d")?.putImageData(o,0,0),a.filter=`blur(${4*.9}px)`,a.drawImage(l,0,0,i,s),a.filter="none",r}const Dl=173.1446326846693,wm=14959787069098932e-8,ei=.017453292519943295,Xr=57.29577951308232,Am=365.24217,n0=new Date("2000-01-01T12:00:00Z"),Pn=2*Math.PI,Wn=3600*(180/Math.PI),Ji=484813681109536e-20,Rm=10800*60,Cm=2*Rm,Pm=6378.1366,Dm=Pm/wm,su=81.30056,Ll=.0002959122082855911,Qo=2825345909524226e-22,tl=8459715185680659e-23,el=1292024916781969e-23,nl=1524358900784276e-23;function ru(n){if(n!==!0&&n!==!1)throw console.trace(),`Value is not boolean: ${n}`;return n}function Zn(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function Wi(n){return n-Math.floor(n)}var Ut;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Ut||(Ut={}));const Lm=[Ut.Star1,Ut.Star2,Ut.Star3,Ut.Star4,Ut.Star5,Ut.Star6,Ut.Star7,Ut.Star8],Im=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function Um(n){const t=Lm.indexOf(n);return t>=0?Im[t]:null}function Il(n){const t=Um(n);return t&&t.dist>0?t:null}var dn;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(dn||(dn={}));const In={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function Nm(n){var t,e,i,s,r,a,o;const l=2e3+(n-14)/Am;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,10583.6-1014.41*t+33.78311*e-5.952053*i-.1798452*s+.022174192*r+.0090316521*a):l<1600?(t=(l-1e3)/100,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,1574.2-556.01*t+71.23472*e+.319781*i-.8503463*s-.005050998*r+.0083572073*a):l<1700?(t=l-1600,e=t*t,i=t*e,120-.9808*t-.01532*e+i/7129):l<1800?(t=l-1700,e=t*t,i=t*e,s=e*e,8.83+.1603*t-.0059285*e+13336e-8*i-s/1174e3):l<1860?(t=l-1800,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,o=i*s,13.72-.332447*t+.0068612*e+.0041116*i-37436e-8*s+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(t=l-1860,e=t*t,i=t*e,s=e*e,r=e*i,7.62+.5737*t-.251754*e+.01680668*i-.0004473624*s+r/233174):l<1920?(t=l-1900,e=t*t,i=t*e,s=e*e,-2.79+1.494119*t-.0598939*e+.0061966*i-197e-6*s):l<1941?(t=l-1920,e=t*t,i=t*e,21.2+.84493*t-.0761*e+.0020936*i):l<1961?(t=l-1950,e=t*t,i=t*e,29.07+.407*t-e/233+i/2547):l<1986?(t=l-1975,e=t*t,i=t*e,45.45+1.067*t-e/260-i/718):l<2005?(t=l-2e3,e=t*t,i=t*e,s=e*e,r=e*i,63.86+.3345*t-.060374*e+.0017275*i+651814e-9*s+2373599e-11*r):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let Fm=Nm;function i0(n){return n+Fm(n)/86400}class is{constructor(t){if(t instanceof is){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-n0.getTime())/e,this.tt=i0(this.ut);return}if(Number.isFinite(t)){this.date=new Date(n0.getTime()+t*e),this.ut=t,this.tt=i0(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new is(t);for(;;){const i=t-e.tt;if(Math.abs(i)<1e-12)return e;e=e.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(t){return new is(this.ut+t)}}function Se(n){return n instanceof is?n:new is(n)}function Om(n){function t(d){return d%Cm*Ji}const e=n.tt/36525,i=t(128710479305e-5+e*1295965810481e-4),s=t(335779.526232+e*17395272628478e-4),r=t(107226070369e-5+e*1602961601209e-3),a=t(450160.398036-e*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*e)*o+33386*l,u=(92052331+9086*e)*l+15377*o,h=2*(s-r+a);return o=Math.sin(h),l=Math.cos(h),c+=(-13170906-1675*e)*o-13696*l,u+=(5730336-3015*e)*l-4587*o,h=2*(s+a),o=Math.sin(h),l=Math.cos(h),c+=(-2276413-234*e)*o+2796*l,u+=(978459-485*e)*l+1374*o,h=2*a,o=Math.sin(h),l=Math.cos(h),c+=(2074554+207*e)*o-698*l,u+=(-897492+470*e)*l-291*o,o=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*e)*o+11817*l,u+=(73871-184*e)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function au(n){var t=n.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var Sr;function na(n){if(!Sr||Math.abs(Sr.tt-n.tt)>1e-6){const t=Om(n),e=au(n),i=e+t.deps/3600;Sr={tt:n.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*ei)/15,mobl:e,tobl:i}}return Sr}function zm(n,t){const e=n*ei,i=Math.cos(e),s=Math.sin(e);return[t[0],t[1]*i-t[2]*s,t[1]*s+t[2]*i]}function Bm(n,t){return zm(au(n),t)}function km(n){const t=n.tt/36525;function e(Pt,w){const zt=[];let xt;for(xt=0;xt<=w-Pt;++xt)zt.push(0);return{min:Pt,array:zt}}function i(Pt,w,zt,xt){const pt=[];for(let dt=0;dt<=w-Pt;++dt)pt.push(e(zt,xt));return{min:Pt,array:pt}}function s(Pt,w,zt){const xt=Pt.array[w-Pt.min];return xt.array[zt-xt.min]}function r(Pt,w,zt,xt){const pt=Pt.array[w-Pt.min];pt.array[zt-pt.min]=xt}let a,o,l,c,u,h,d,p,_,g,m,f,y,M,x,A,R,P,I,E,b,D,z,O=i(-6,6,1,4),X=i(-6,6,1,4);function G(Pt,w){return s(O,Pt,w)}function W(Pt,w){return s(X,Pt,w)}function Y(Pt,w,zt){return r(O,Pt,w,zt)}function H(Pt,w,zt){return r(X,Pt,w,zt)}function st(Pt,w,zt,xt,pt){pt(Pt*zt-w*xt,w*zt+Pt*xt)}function Q(Pt){return Math.sin(Pn*Pt)}d=t*t,_=0,z=0,m=0,f=3422.7;var ht=Q(.19833+.05611*t),Lt=Q(.27869+.04508*t),Xt=Q(.16827-.36903*t),ee=Q(.34734-5.37261*t),Wt=Q(.10498-5.37899*t),q=Q(.42681-.41855*t),Z=Q(.14943-5.37511*t);for(P=.84*ht+.31*Lt+14.27*Xt+7.26*ee+.28*Wt+.24*q,I=2.94*ht+.31*Lt+14.27*Xt+9.34*ee+1.12*Wt+.83*q,E=-6.4*ht-1.89*q,b=.21*ht+.31*Lt+14.27*Xt-88.7*ee-15.3*Wt+.24*q-1.86*Z,D=P-E,p=-3332e-9*Q(.59734-5.37261*t)-539e-9*Q(.35498-5.37899*t)-64e-9*Q(.39943-5.37511*t),y=Pn*Wi(.60643382+1336.85522467*t-313e-8*d)+P/Wn,M=Pn*Wi(.37489701+1325.55240982*t+2565e-8*d)+I/Wn,x=Pn*Wi(.99312619+99.99735956*t-44e-8*d)+E/Wn,A=Pn*Wi(.25909118+1342.2278298*t-892e-8*d)+b/Wn,R=Pn*Wi(.82736186+1236.85308708*t-397e-8*d)+D/Wn,u=1;u<=4;++u){switch(u){case 1:l=M,o=4,c=1.000002208;break;case 2:l=x,o=3,c=.997504612-.002495388*t;break;case 3:l=A,o=4,c=1.000002708+139.978*p;break;case 4:l=R,o=6,c=1;break;default:throw`Internal error: I = ${u}`}for(Y(0,u,1),Y(1,u,Math.cos(l)*c),H(0,u,0),H(1,u,Math.sin(l)*c),h=2;h<=o;++h)st(G(h-1,u),W(h-1,u),G(1,u),W(1,u),(Pt,w)=>(Y(h,u,Pt),H(h,u,w)));for(h=1;h<=o;++h)Y(-h,u,G(h,u)),H(-h,u,-W(h,u))}function gt(Pt,w,zt,xt){for(var pt={x:1,y:0},dt=[0,Pt,w,zt,xt],Yt=1;Yt<=4;++Yt)dt[Yt]!==0&&st(pt.x,pt.y,G(dt[Yt],Yt),W(dt[Yt],Yt),(_t,Nt)=>(pt.x=_t,pt.y=Nt));return pt}function B(Pt,w,zt,xt,pt,dt,Yt,_t){var Nt=gt(pt,dt,Yt,_t);_+=Pt*Nt.y,z+=w*Nt.y,m+=zt*Nt.x,f+=xt*Nt.x}B(13.902,14.06,-.001,.2607,0,0,0,4),B(.403,-4.01,.394,.0023,0,0,0,3),B(2369.912,2373.36,.601,28.2333,0,0,0,2),B(-125.154,-112.79,-.725,-.9781,0,0,0,1),B(1.979,6.98,-.445,.0433,1,0,0,4),B(191.953,192.72,.029,3.0861,1,0,0,2),B(-8.466,-13.51,.455,-.1093,1,0,0,1),B(22639.5,22609.07,.079,186.5398,1,0,0,0),B(18.609,3.59,-.094,.0118,1,0,0,-1),B(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),B(3.215,5.44,.192,-.0386,1,0,0,-3),B(-38.428,-38.64,.001,.6008,1,0,0,-4),B(-.393,-1.43,-.092,.0086,1,0,0,-6),B(-.289,-1.59,.123,-.0053,0,1,0,4),B(-24.42,-25.1,.04,-.3,0,1,0,2),B(18.023,17.93,.007,.1494,0,1,0,1),B(-668.146,-126.98,-1.302,-.3997,0,1,0,0),B(.56,.32,-.001,-.0037,0,1,0,-1),B(-165.145,-165.06,.054,1.9178,0,1,0,-2),B(-1.877,-6.46,-.416,.0339,0,1,0,-4),B(.213,1.02,-.074,.0054,2,0,0,4),B(14.387,14.78,-.017,.2833,2,0,0,2),B(-.586,-1.2,.054,-.01,2,0,0,1),B(769.016,767.96,.107,10.1657,2,0,0,0),B(1.75,2.01,-.018,.0155,2,0,0,-1),B(-211.656,-152.53,5.679,-.3039,2,0,0,-2),B(1.225,.91,-.03,-.0088,2,0,0,-3),B(-30.773,-34.07,-.308,.3722,2,0,0,-4),B(-.57,-1.4,-.074,.0109,2,0,0,-6),B(-2.921,-11.75,.787,-.0484,1,1,0,2),B(1.267,1.52,-.022,.0164,1,1,0,1),B(-109.673,-115.18,.461,-.949,1,1,0,0),B(-205.962,-182.36,2.056,1.4437,1,1,0,-2),B(.233,.36,.012,-.0025,1,1,0,-3),B(-4.391,-9.66,-.471,.0673,1,1,0,-4),B(.283,1.53,-.111,.006,1,-1,0,4),B(14.577,31.7,-1.54,.2302,1,-1,0,2),B(147.687,138.76,.679,1.1528,1,-1,0,0),B(-1.089,.55,.021,0,1,-1,0,-1),B(28.475,23.59,-.443,-.2257,1,-1,0,-2),B(-.276,-.38,-.006,-.0036,1,-1,0,-3),B(.636,2.27,.146,-.0102,1,-1,0,-4),B(-.189,-1.68,.131,-.0028,0,2,0,2),B(-7.486,-.66,-.037,-.0086,0,2,0,0),B(-8.096,-16.35,-.74,.0918,0,2,0,-2),B(-5.741,-.04,0,-9e-4,0,0,2,2),B(.255,0,0,0,0,0,2,1),B(-411.608,-.2,0,-.0124,0,0,2,0),B(.584,.84,0,.0071,0,0,2,-1),B(-55.173,-52.14,0,-.1052,0,0,2,-2),B(.254,.25,0,-.0017,0,0,2,-3),B(.025,-1.67,0,.0031,0,0,2,-4),B(1.06,2.96,-.166,.0243,3,0,0,2),B(36.124,50.64,-1.3,.6215,3,0,0,0),B(-13.193,-16.4,.258,-.1187,3,0,0,-2),B(-1.187,-.74,.042,.0074,3,0,0,-4),B(-.293,-.31,-.002,.0046,3,0,0,-6),B(-.29,-1.45,.116,-.0051,2,1,0,2),B(-7.649,-10.56,.259,-.1038,2,1,0,0),B(-8.627,-7.59,.078,-.0192,2,1,0,-2),B(-2.74,-2.54,.022,.0324,2,1,0,-4),B(1.181,3.32,-.212,.0213,2,-1,0,2),B(9.703,11.67,-.151,.1268,2,-1,0,0),B(-.352,-.37,.001,-.0028,2,-1,0,-1),B(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),B(.36,.2,-.012,-.0043,2,-1,0,-4),B(-1.167,-1.25,.008,-.0106,1,2,0,0),B(-7.412,-6.12,.117,.0484,1,2,0,-2),B(-.311,-.65,-.032,.0044,1,2,0,-4),B(.757,1.82,-.105,.0112,1,-2,0,2),B(2.58,2.32,.027,.0196,1,-2,0,0),B(2.533,2.4,-.014,-.0212,1,-2,0,-2),B(-.344,-.57,-.025,.0036,0,3,0,-2),B(-.992,-.02,0,0,1,0,2,2),B(-45.099,-.02,0,-.001,1,0,2,0),B(-.179,-9.52,0,-.0833,1,0,2,-2),B(-.301,-.33,0,.0014,1,0,2,-4),B(-6.382,-3.37,0,-.0481,1,0,-2,2),B(39.528,85.13,0,-.7136,1,0,-2,0),B(9.366,.71,0,-.0112,1,0,-2,-2),B(.202,.02,0,0,1,0,-2,-4),B(.415,.1,0,.0013,0,1,2,0),B(-2.152,-2.26,0,-.0066,0,1,2,-2),B(-1.44,-1.3,0,.0014,0,1,-2,2),B(.384,-.04,0,0,0,1,-2,-2),B(1.938,3.6,-.145,.0401,4,0,0,0),B(-.952,-1.58,.052,-.013,4,0,0,-2),B(-.551,-.94,.032,-.0097,3,1,0,0),B(-.482,-.57,.005,-.0045,3,1,0,-2),B(.681,.96,-.026,.0115,3,-1,0,0),B(-.297,-.27,.002,-9e-4,2,2,0,-2),B(.254,.21,-.003,0,2,-2,0,-2),B(-.25,-.22,.004,.0014,1,3,0,-2),B(-3.996,0,0,4e-4,2,0,2,0),B(.557,-.75,0,-.009,2,0,2,-2),B(-.459,-.38,0,-.0053,2,0,-2,2),B(-1.298,.74,0,4e-4,2,0,-2,0),B(.538,1.14,0,-.0141,2,0,-2,-2),B(.263,.02,0,0,1,1,2,0),B(.426,.07,0,-6e-4,1,1,-2,-2),B(-.304,.03,0,3e-4,1,-1,2,0),B(-.372,-.19,0,-.0027,1,-1,-2,2),B(.418,0,0,0,0,0,4,0),B(-.33,-.04,0,0,3,0,2,0);function ft(Pt,w,zt,xt,pt){return Pt*gt(w,zt,xt,pt).y}g=0,g+=ft(-526.069,0,0,1,-2),g+=ft(-3.352,0,0,1,-4),g+=ft(44.297,1,0,1,-2),g+=ft(-6,1,0,1,-4),g+=ft(20.599,-1,0,1,0),g+=ft(-30.598,-1,0,1,-2),g+=ft(-24.649,-2,0,1,0),g+=ft(-2,-2,0,1,-2),g+=ft(-22.571,0,1,1,-2),g+=ft(10.985,0,-1,1,-2),_+=.82*Q(.7736-62.5512*t)+.31*Q(.0466-125.1025*t)+.35*Q(.5785-25.1042*t)+.66*Q(.4591+1335.8075*t)+.64*Q(.313-91.568*t)+1.14*Q(.148+1331.2898*t)+.21*Q(.5918+1056.5859*t)+.44*Q(.5784+1322.8595*t)+.24*Q(.2275-5.7374*t)+.28*Q(.2965+2.6929*t)+.33*Q(.3132+6.3368*t),a=A+z/Wn;let qt=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+g;return{geo_eclip_lon:Pn*Wi((y+_/Wn)/Pn),geo_eclip_lat:Math.PI/(180*3600)*qt,distance_au:Wn*Dm/(.999953253*f)}}function ou(n,t){return[n.rot[0][0]*t[0]+n.rot[1][0]*t[1]+n.rot[2][0]*t[2],n.rot[0][1]*t[0]+n.rot[1][1]*t[1]+n.rot[2][1]*t[2],n.rot[0][2]*t[0]+n.rot[1][2]*t[1]+n.rot[2][2]*t[2]]}function il(n,t,e){const i=lu(t,e);return ou(i,n)}function lu(n,t){const e=n.tt/36525;let i=84381.406,s=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,r=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+i,a=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;i*=Ji,s*=Ji,r*=Ji,a*=Ji;const o=Math.sin(i),l=Math.cos(i),c=Math.sin(-s),u=Math.cos(-s),h=Math.sin(-r),d=Math.cos(-r),p=Math.sin(a),_=Math.cos(a),g=_*u-c*p*d,m=_*c*l+p*d*u*l-o*p*h,f=_*c*o+p*d*u*o+l*p*h,y=-p*u-c*_*d,M=-p*c*l+_*d*u*l-o*_*h,x=-p*c*o+_*d*u*o+l*_*h,A=c*h,R=-h*u*l-o*d,P=-h*u*o+d*l;if(t===dn.Into2000)return new hs([[g,m,f],[y,M,x],[A,R,P]]);if(t===dn.From2000)return new hs([[g,y,A],[m,M,R],[f,x,P]]);throw"Invalid precess direction"}function Vm(n){const t=.779057273264+.00273781191135448*n.ut,e=n.ut%1;let i=360*((t+e)%1);return i<0&&(i+=360),i}let yr;function Hm(n){if(!yr||yr.tt!==n.tt){const t=n.tt/36525;let e=15*na(n).ee;const i=Vm(n);let r=((e+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+i)%360/15;r<0&&(r+=24),yr={tt:n.tt,st:r}}return yr.st}function Gm(n){const t=Se(n);return Hm(t)}function s0(n,t,e){const i=cu(t,e);return ou(i,n)}function cu(n,t){const e=na(n),i=e.mobl*ei,s=e.tobl*ei,r=e.dpsi*Ji,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r),d=u,p=-h*a,_=-h*o,g=h*l,m=u*a*l+o*c,f=u*o*l-a*c,y=h*c,M=u*a*c-o*l,x=u*o*c+a*l;if(t===dn.From2000)return new hs([[d,g,y],[p,m,M],[_,f,x]]);if(t===dn.Into2000)return new hs([[d,p,_],[g,m,f],[y,M,x]]);throw"Invalid precess direction"}function Wm(n,t,e){return e===dn.Into2000?il(s0(n,t,e),t,e):s0(il(n,t,e),t,e)}class Ce{constructor(t,e,i,s){this.x=t,this.y=e,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class jn{constructor(t,e,i,s,r,a,o){this.x=t,this.y=e,this.z=i,this.vx=s,this.vy=r,this.vz=a,this.t=o}}class uu{constructor(t,e,i){this.lat=Zn(t),this.lon=Zn(e),this.dist=Zn(i)}}class $m{constructor(t,e,i,s){this.ra=Zn(t),this.dec=Zn(e),this.dist=Zn(i),this.vec=s}}class hs{constructor(t){this.rot=t}}class Xm{constructor(t,e,i){this.vec=t,this.elat=Zn(e),this.elon=Zn(i)}}function qm(n){const t=Se(n).AddDays(-1/Dl),e=Ds(In.Earth,t),i=[-e.x,-e.y,-e.z],[s,r,a]=Wm(i,t,dn.From2000),o=ei*na(t).tobl,l=Math.cos(o),c=Math.sin(o),u=new Ce(s,r,a,t);return jm(u,l,c)}function jm(n,t,e){const i=n.x,s=n.y*t+n.z*e,r=-n.y*e+n.z*t,a=Math.hypot(i,s);let o=0;a>0&&(o=Xr*Math.atan2(s,i),o<0&&(o+=360));let l=Xr*Math.atan2(r,a),c=new Ce(i,s,r,n.t);return new Xm(c,l,o)}function zs(n){const t=Se(n),e=km(t),i=e.distance_au*Math.cos(e.geo_eclip_lat),s=[i*Math.cos(e.geo_eclip_lon),i*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=Bm(t,s),a=il(r,t,dn.Into2000);return new Ce(a[0],a[1],a[2],t)}function hu(n){const t=Se(n),e=1e-5,i=t.AddDays(-e),s=t.AddDays(+e),r=zs(i),a=zs(s);return new jn((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*e),(a.y-r.y)/(2*e),(a.z-r.z)/(2*e),t)}function Ym(n){const t=Se(n),e=hu(t),i=1+su;return new jn(e.x/i,e.y/i,e.z/i,e.vx/i,e.vy/i,e.vz/i,t)}function ss(n,t,e){let i=1,s=0;for(let r of n){let a=0;for(let[l,c,u]of r)a+=l*Math.cos(c+t*u);let o=i*a;e&&(o%=Pn),s+=o,i*=t}return s}function Ha(n,t){let e=1,i=0,s=0,r=0;for(let a of n){let o=0,l=0;for(let[c,u,h]of a){let d=u+t*h;o+=c*h*Math.sin(d),r>0&&(l+=c*Math.cos(d))}s+=r*i*l-e*o,i=e,e*=t,++r}return s}const Cs=365250,sl=0,rl=1,al=2;function ol(n){return new Le(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function du(n,t,e){const i=e*Math.cos(t),s=Math.cos(n),r=Math.sin(n);return[i*s,i*r,e*Math.sin(t)]}function Ds(n,t){const e=t.tt/Cs,i=ss(n[sl],e,!0),s=ss(n[rl],e,!1),r=ss(n[al],e,!1),a=du(i,s,r);return ol(a).ToAstroVector(t)}function ll(n,t){const e=t/Cs,i=ss(n[sl],e,!0),s=ss(n[rl],e,!1),r=ss(n[al],e,!1),a=Ha(n[sl],e),o=Ha(n[rl],e),l=Ha(n[al],e),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=+(l*h*c)-r*d*c*o-r*h*u*a,_=+(l*h*u)-r*d*u*o+r*h*c*a,g=+(l*d)+r*h*o,m=du(i,s,r),f=[p/Cs,_/Cs,g/Cs],y=ol(m),M=ol(f);return new Ti(t,y,M)}function br(n,t,e,i){const s=i/(i+Ll),r=Ds(In[e],t);n.x+=s*r.x,n.y+=s*r.y,n.z+=s*r.z}function Km(n){const t=new Ce(0,0,0,n);return br(t,n,Ut.Jupiter,Qo),br(t,n,Ut.Saturn,tl),br(t,n,Ut.Uranus,el),br(t,n,Ut.Neptune,nl),t}const cl=51,Zm=29200,Qi=146,Dn=201,vi=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Le{constructor(t,e,i){this.x=t,this.y=e,this.z=i}clone(){return new Le(this.x,this.y,this.z)}ToAstroVector(t){return new Ce(this.x,this.y,this.z,t)}static zero(){return new Le(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new Le(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new Le(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new Le(t*this.x,t*this.y,t*this.z)}div(t){return new Le(this.x/t,this.y/t,this.z/t)}mean(t){return new Le((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new Le(-this.x,-this.y,-this.z)}}class Ti{constructor(t,e,i){this.tt=t,this.r=e,this.v=i}clone(){return new Ti(this.tt,this.r,this.v)}sub(t){return new Ti(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function Jm(n){let[t,[e,i,s],[r,a,o]]=n;return new Ti(t,new Le(e,i,s),new Le(r,a,o))}function Er(n,t,e,i){const s=i/(i+Ll),r=ll(In[e],t);return n.r.incr(r.r.mul(s)),n.v.incr(r.v.mul(s)),r}function bs(n,t,e){const i=e.sub(n),s=i.quadrature();return i.mul(t/(s*Math.sqrt(s)))}class ia{constructor(t){let e=new Ti(t,new Le(0,0,0),new Le(0,0,0));this.Jupiter=Er(e,t,Ut.Jupiter,Qo),this.Saturn=Er(e,t,Ut.Saturn,tl),this.Uranus=Er(e,t,Ut.Uranus,el),this.Neptune=Er(e,t,Ut.Neptune,nl),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Ti(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=bs(t,Ll,this.Sun.r);return e.incr(bs(t,Qo,this.Jupiter.r)),e.incr(bs(t,tl,this.Saturn.r)),e.incr(bs(t,el,this.Uranus.r)),e.incr(bs(t,nl,this.Neptune.r)),e}}class sa{constructor(t,e,i,s){this.tt=t,this.r=e,this.v=i,this.a=s}clone(){return new sa(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class fu{constructor(t,e){this.bary=t,this.grav=e}}function qr(n,t,e,i){return new Le(t.x+n*(e.x+n*i.x/2),t.y+n*(e.y+n*i.y/2),t.z+n*(e.z+n*i.z/2))}function r0(n,t,e){return new Le(t.x+n*e.x,t.y+n*e.y,t.z+n*e.z)}function ul(n,t){const e=n-t.tt,i=new ia(n),s=qr(e,t.r,t.v,t.a),r=i.Acceleration(s).mean(t.a),a=qr(e,t.r,t.v,r),o=t.v.add(r.mul(e)),l=i.Acceleration(a),c=new sa(n,a,o,l);return new fu(i,c)}const Qm=[];function pu(n,t){const e=Math.floor(n);return e<0?0:e>=t?t-1:e}function hl(n){const t=Jm(n),e=new ia(t.tt),i=t.r.add(e.Sun.r),s=t.v.add(e.Sun.v),r=e.Acceleration(i),a=new sa(t.tt,i,s,r);return new fu(e,a)}function t3(n,t){const e=vi[0][0];if(t<e||t>vi[cl-1][0])return null;const i=pu((t-e)/Zm,cl-1);if(!n[i]){const r=n[i]=[];r[0]=hl(vi[i]).grav,r[Dn-1]=hl(vi[i+1]).grav;let a,o=r[0].tt;for(a=1;a<Dn-1;++a)r[a]=ul(o+=Qi,r[a-1]).grav;o=r[Dn-1].tt;var s=[];for(s[Dn-1]=r[Dn-1],a=Dn-2;a>0;--a)s[a]=ul(o-=Qi,s[a+1]).grav;for(a=Dn-2;a>0;--a){const l=a/(Dn-1);r[a].r=r[a].r.mul(1-l).add(s[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(s[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(s[a].a.mul(l))}}return n[i]}function a0(n,t,e){let i=hl(n);const s=Math.ceil((t-i.grav.tt)/e);for(let r=0;r<s;++r)i=ul(r+1===s?t:i.grav.tt+e,i.grav);return i}function mu(n,t){let e,i,s;const r=t3(Qm,n.tt);if(r){const a=pu((n.tt-r[0].tt)/Qi,Dn-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),u=qr(n.tt-o.tt,o.r,o.v,c),h=r0(n.tt-o.tt,o.v,c),d=qr(n.tt-l.tt,l.r,l.v,c),p=r0(n.tt-l.tt,l.v,c),_=(n.tt-o.tt)/Qi;e=u.mul(1-_).add(d.mul(_)),i=h.mul(1-_).add(p.mul(_))}else{let a;n.tt<vi[0][0]?a=a0(vi[0],n.tt,-Qi):a=a0(vi[cl-1],n.tt,+Qi),e=a.grav.r,i=a.grav.v,s=a.bary}return s||(s=new ia(n.tt)),e=e.sub(s.Sun.r),i=i.sub(s.Sun.v),new jn(e.x,e.y,e.z,i.x,i.y,i.z,n)}function Jn(n,t){var e=Se(t);if(n in In)return Ds(In[n],e);if(n===Ut.Pluto){const a=mu(e);return new Ce(a.x,a.y,a.z,e)}if(n===Ut.Sun)return new Ce(0,0,0,e);if(n===Ut.Moon){var i=Ds(In.Earth,e),s=zs(e);return new Ce(i.x+s.x,i.y+s.y,i.z+s.z,e)}if(n===Ut.EMB){const a=Ds(In.Earth,e),o=zs(e),l=1+su;return new Ce(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,e)}if(n===Ut.SSB)return Km(e);const r=Il(n);if(r){const a=new uu(r.dec,15*r.ra,r.dist);return o3(a,e)}throw`HelioVector: Unknown body "${n}"`}function e3(n,t){let e=t,i=0;for(let s=0;s<10;++s){const r=n(e),a=r.Length()/Dl;if(a>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-a);if(i=Math.abs(o.tt-e.tt),i<1e-9)return r;e=o}throw`Light-travel time solver did not converge: dt = ${i}`}class n3{constructor(t,e,i,s){this.observerBody=t,this.targetBody=e,this.aberration=i,this.observerPos=s}Position(t){this.aberration&&(this.observerPos=Jn(this.observerBody,t));const e=Jn(this.targetBody,t);return new Ce(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function i3(n,t,e,i){ru(i);const s=Se(n);if(Il(e)){const o=Jn(e,s);if(i){const c=r3(t,s),u=new Ce(o.x-c.x,o.y-c.y,o.z-c.z,s),h=Dl/u.Length();return new Ce(u.x+c.vx/h,u.y+c.vy/h,u.z+c.vz/h,s)}const l=Jn(t,s);return new Ce(o.x-l.x,o.y-l.y,o.z-l.z,s)}let r;i?r=new Ce(0,0,0,s):r=Jn(t,s);const a=new n3(t,e,i,r);return e3(o=>a.Position(o),s)}function Ul(n,t,e){ru(e);const i=Se(t);switch(n){case Ut.Earth:return new Ce(0,0,0,i);case Ut.Moon:return zs(i);default:const s=i3(i,Ut.Earth,n,e);return s.t=i,s}}function s3(n,t){return new jn(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,t)}function r3(n,t){const e=Se(t);switch(n){case Ut.Sun:return new jn(0,0,0,0,0,0,e);case Ut.SSB:const i=new ia(e.tt);return new jn(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,e);case Ut.Mercury:case Ut.Venus:case Ut.Earth:case Ut.Mars:case Ut.Jupiter:case Ut.Saturn:case Ut.Uranus:case Ut.Neptune:const s=ll(In[n],e.tt);return s3(s,e);case Ut.Pluto:return mu(e);case Ut.Moon:case Ut.EMB:const r=ll(In.Earth,e.tt),a=n==Ut.Moon?hu(e):Ym(e);return new jn(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,e);default:if(Il(n)){const o=Jn(n,e);return new jn(o.x,o.y,o.z,0,0,0,e)}throw`HelioState: Unsupported body "${n}"`}}var o0;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(o0||(o0={}));function a3(n,t){return new hs([[t.rot[0][0]*n.rot[0][0]+t.rot[1][0]*n.rot[0][1]+t.rot[2][0]*n.rot[0][2],t.rot[0][1]*n.rot[0][0]+t.rot[1][1]*n.rot[0][1]+t.rot[2][1]*n.rot[0][2],t.rot[0][2]*n.rot[0][0]+t.rot[1][2]*n.rot[0][1]+t.rot[2][2]*n.rot[0][2]],[t.rot[0][0]*n.rot[1][0]+t.rot[1][0]*n.rot[1][1]+t.rot[2][0]*n.rot[1][2],t.rot[0][1]*n.rot[1][0]+t.rot[1][1]*n.rot[1][1]+t.rot[2][1]*n.rot[1][2],t.rot[0][2]*n.rot[1][0]+t.rot[1][2]*n.rot[1][1]+t.rot[2][2]*n.rot[1][2]],[t.rot[0][0]*n.rot[2][0]+t.rot[1][0]*n.rot[2][1]+t.rot[2][0]*n.rot[2][2],t.rot[0][1]*n.rot[2][0]+t.rot[1][1]*n.rot[2][1]+t.rot[2][1]*n.rot[2][2],t.rot[0][2]*n.rot[2][0]+t.rot[1][2]*n.rot[2][1]+t.rot[2][2]*n.rot[2][2]]])}function o3(n,t){t=Se(t);const e=n.lat*ei,i=n.lon*ei,s=n.dist*Math.cos(e);return new Ce(s*Math.cos(i),s*Math.sin(i),n.dist*Math.sin(e),t)}function l3(n){const t=c3(n);return new $m(t.lon/15,t.lat,t.dist,n)}function c3(n){const t=n.x*n.x+n.y*n.y,e=Math.sqrt(t+n.z*n.z);let i,s;if(t===0){if(n.z===0)throw"Zero-length vector not allowed.";s=0,i=n.z<0?-90:90}else s=Xr*Math.atan2(n.y,n.x),s<0&&(s+=360),i=Xr*Math.atan2(n.z,Math.sqrt(t));return new uu(i,s,e)}function gu(n,t){return new Ce(n.rot[0][0]*t.x+n.rot[1][0]*t.y+n.rot[2][0]*t.z,n.rot[0][1]*t.x+n.rot[1][1]*t.y+n.rot[2][1]*t.z,n.rot[0][2]*t.x+n.rot[1][2]*t.y+n.rot[2][2]*t.z,t.t)}function u3(n){n=Se(n);const t=lu(n,dn.From2000),e=cu(n,dn.From2000);return a3(t,e)}function h3(n){const e=na(Se(n)).tobl*ei,i=Math.cos(e),s=Math.sin(e);return new hs([[1,0,0],[0,+i,+s],[0,-s,+i]])}var l0;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(l0||(l0={}));var c0;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(c0||(c0={}));function Qn(n){return new C(n.x,n.z,-n.y)}const d3={Mercury:Ut.Mercury,Venus:Ut.Venus,Earth:Ut.Earth,Mars:Ut.Mars},f3=["Mercury","Venus","Earth","Mars"];function Bs(n){return gu(u3(n.t),n)}function Nl(n,t){const e=Se(t),i=Bs(Jn(d3[n],e)),s=Bs(Jn(Ut.Earth,e));return{helio:new C(i.x,i.y,i.z),geo:new C(i.x-s.x,i.y-s.y,i.z-s.z)}}function p3(n){const t=Se(n),e=Bs(Ul(Ut.Moon,t,!1));return new C(e.x,e.y,e.z)}function _u(n){const t=Se(n),e=Bs(Ul(Ut.Sun,t,!0)),i=new C(e.x,e.y,e.z),s=i.length();return{dir:i.clone().normalize(),distanceAu:s}}function Fl(n){return(Gm(Se(n))*15%360+360)%360}function vu(n){const t=Se(n),e=Bs(Ul(Ut.Sun,t,!0)),i=l3(e);let r=i.ra*15-Fl(n);return r=((r+180)%360+360)%360-180,{lat:i.dec,lon:r}}function m3(n){const t=h3(Se(n)),e=gu(t,new Ce(0,0,1,Se(n))),i=Qn(e).normalize(),s=_u(n).dir,r=Qn(s).normalize(),a=i.clone().addScaledVector(r,-i.dot(r)).normalize(),o=a.clone().cross(r);return{x:r,y:o,z:a}}function g3(n,t){return new C().addScaledVector(t.x,n.x).addScaledVector(t.y,n.y).addScaledVector(t.z,n.z)}const _3=-.309,v3=.087,x3=`
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;
  void main() {
    vLocalNormal = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,M3=`
  uniform sampler2D uSurface;
  uniform sampler2D uAurora;
  uniform float uAuroraStrength;   // 0 hides the layer entirely
  uniform vec3 uSunDir;        // unit, world space
  uniform float uTwilightStart;
  uniform float uTwilightEnd;
  uniform vec3 uNightTint;
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;

  const float PI = 3.141592653589793;

  void main() {
    // Explicit lon/lat mapping — u = 0.5 at the prime meridian, matching the
    // equirectangular texture, and matching the rotation applied on the CPU.
    vec3 n = normalize(vLocalNormal);
    float u = 0.5 - atan(n.z, n.x) / (2.0 * PI);
    float v = 0.5 + asin(clamp(n.y, -1.0, 1.0)) / PI;
    vec3 surface = texture2D(uSurface, vec2(u, 1.0 - v)).rgb;

    float d = dot(normalize(vWorldNormal), uSunDir);
    float day = smoothstep(uTwilightStart, uTwilightEnd, d);

    // Lambert falloff across the lit hemisphere — a diffuse sphere really is
    // dimmer where the Sun is low, and without it the day side reads as a flat
    // disc rather than a globe.
    float lambert = 0.42 + 0.58 * clamp(d, 0.0, 1.0);
    vec3 lit = surface * lambert;
    vec3 night = surface * uNightTint;
    vec3 color = mix(night, lit, day);

    // Warm scatter at the sunrise/sunset line. The twilight *band* is 18° wide
    // and the day/night blend above uses all of it, but the visible reddening
    // is concentrated much closer to the terminator, so this uses a narrower
    // window than the blend. Ambient [M].
    float limb = smoothstep(-0.16, -0.01, d) * (1.0 - smoothstep(-0.01, 0.05, d));
    color += vec3(0.42, 0.20, 0.07) * limb * 0.30;

    // OVATION aurora [D · NOAA]: emissive, added on top of the surface. It is
    // added everywhere the model puts it — the day side simply swamps it, which
    // is also why you cannot see the real aurora in daylight.
    float aurora = texture2D(uAurora, vec2(u, 1.0 - v)).r * uAuroraStrength;
    if (aurora > 0.001) {
      // Green at low intensity, reddening at high — the real 557.7 nm / 630 nm
      // ordering, used here as a legend rather than a spectral claim.
      // Teal-green through magenta. Real aurora green is 557.7 nm, a yellower
      // green — shifted toward teal here purely so the oval separates from the
      // green land beneath it. A legend, not a spectral claim, and the
      // Situation Report says so.
      vec3 auroraColor = mix(vec3(0.10, 1.0, 0.70), vec3(0.95, 0.30, 0.60),
                             smoothstep(0.35, 1.0, aurora));
      color += auroraColor * aurora * (0.35 + 0.65 * (1.0 - day));
    }

    gl_FragColor = vec4(color, 1.0);
    // A raw ShaderMaterial bypasses Three's automatic output conversion. The
    // texture is decoded sRGB -> linear on sampling, so without re-encoding
    // here every colour is written ~2.2 gamma too dark and the lit day side
    // reads as night.
    #include <colorspace_fragment>
  }
`,S3=`
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,y3=`
  uniform vec3 uSunDir;
  uniform vec3 uColor;
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vec3 n = normalize(vWorldNormal);
    // Back-facing shell: the rim is where the surface is edge-on to the eye.
    float fres = pow(1.0 - abs(dot(n, normalize(vViewDir))), 3.0);
    // Only the sunlit limb scatters.
    float lit = smoothstep(-0.35, 0.25, dot(-n, uSunDir));
    gl_FragColor = vec4(uColor, fres * lit * 0.85);
    #include <colorspace_fragment>
  }
`;function b3(){const n=document.createElement("canvas");return n.width=1,n.height=1,new Zo(n)}class E3{group=new Ye;spin=new Ye;globe;material;atmosphere;atmosphereMat;auroraCanvas=null;auroraTexture=null;auroraStamp=null;constructor(t=1){const e=new Zo(Em(2048));e.colorSpace=Xe,e.minFilter=je,e.magFilter=je,e.anisotropy=4,this.material=new en({uniforms:{uSurface:{value:e},uAurora:{value:b3()},uAuroraStrength:{value:0},uSunDir:{value:new C(1,0,0)},uTwilightStart:{value:_3},uTwilightEnd:{value:v3},uNightTint:{value:new Ct(.1,.13,.2)}},vertexShader:x3,fragmentShader:M3}),this.globe=new Re(new Nn(t,96,64),this.material),this.globe.name="earth-globe",this.spin.name="earth-fixed-frame",this.spin.add(this.globe),this.group.add(this.spin),this.atmosphereMat=new en({uniforms:{uSunDir:{value:new C(1,0,0)},uColor:{value:new Ct(.38,.62,1)}},vertexShader:S3,fragmentShader:y3,transparent:!0,blending:Be,depthWrite:!1,side:Ie}),this.atmosphere=new Re(new Nn(t*1.05,64,48),this.atmosphereMat),this.group.add(this.atmosphere)}setAurora(t,e){if(!t||!e){this.material.uniforms.uAuroraStrength.value=0;return}this.auroraStamp!==t.forecast_time&&(this.auroraStamp=t.forecast_time,this.auroraCanvas=Tm(t.grid,this.auroraCanvas??void 0),this.auroraTexture||(this.auroraTexture=new Zo(this.auroraCanvas),this.auroraTexture.colorSpace=Xe,this.auroraTexture.minFilter=je,this.auroraTexture.magFilter=je,this.material.uniforms.uAurora.value=this.auroraTexture),this.auroraTexture.needsUpdate=!0),this.material.uniforms.uAuroraStrength.value=1/100}setRadius(t){this.globe.scale.setScalar(t),this.atmosphere.scale.setScalar(t)}update(t,e){this.spin.rotation.y=Fl(t)*Math.PI/180,this.material.uniforms.uSunDir.value.copy(e),this.atmosphereMat.uniforms.uSunDir.value.copy(e)}dispose(){this.globe.geometry.dispose(),this.material.dispose(),this.atmosphereMat.dispose(),this.atmosphere.geometry.dispose(),this.material.uniforms.uSurface.value.dispose(),this.auroraTexture?.dispose()}}const T3=`
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,w3=`
  uniform float uTime;
  uniform float uIntensity;   // driven by X-ray background [M, from E]
  uniform vec3  uColor;
  varying vec3 vNormal;
  varying vec3 vView;

  // Cheap value noise — ambient only.
  float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float noise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                      mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                  mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                      mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    return n;
  }

  void main() {
    float rim = 1.0 - abs(dot(normalize(vNormal), normalize(vView)));
    float glow = pow(rim, 2.4);
    float turb = noise(normalize(vNormal) * 6.0 + vec3(0.0, 0.0, uTime * 0.05));
    float a = glow * (0.55 + 0.45 * turb) * uIntensity;
    gl_FragColor = vec4(uColor * (0.85 + 0.5 * turb), a);
    #include <colorspace_fragment>
  }
`;class A3{group=new Ye;disc;corona;coronaMat;reducedMotion=!1;constructor(t=1){this.disc=new Re(new Nn(t,64,48),new fs({color:new Ct(1,.93,.76)})),this.disc.name="sun-disc",this.group.add(this.disc),this.coronaMat=new en({uniforms:{uTime:{value:0},uIntensity:{value:1},uColor:{value:new Ct(1,.72,.35)}},vertexShader:T3,fragmentShader:w3,transparent:!0,blending:Be,depthWrite:!1,side:Ie}),this.corona=new Re(new Nn(t*2.2,48,32),this.coronaMat),this.group.add(this.corona)}setRadius(t){this.disc.scale.setScalar(t),this.corona.scale.setScalar(t)}setReducedMotion(t){this.reducedMotion=t}update(t,e){if(this.reducedMotion||(this.coronaMat.uniforms.uTime.value=t),e!==null&&e>0){const i=(Math.log10(e)+8)/4;this.coronaMat.uniforms.uIntensity.value=.75+.9*Math.max(0,Math.min(1,i))}}dispose(){this.disc.geometry.dispose(),this.corona.geometry.dispose(),this.coronaMat.dispose()}}const R3=1495978707e-1,C3={Sun:695700,Mercury:2439.7,Venus:6051.8,Earth:6371,Mars:3389.5,Moon:1737.4},jr=8,P3=3,D3=.05;function ra(n,t){return t==="true"?n*jr:P3*Math.log10(1+n/D3)}function Ps(n,t){const e=C3[n]/R3;if(t==="true")return e*jr;const i={Sun:10,Mercury:380,Venus:265,Earth:300,Mars:360,Moon:320};return e*jr*i[n]}function dl(n){return n==="globe"?"Globe scale — distances log-compressed, bodies enlarged":"True scale — distances and sizes to scale"}function L3(n,t,e){return t==="true"?n*jr:e*3.2*(n/.00257)}const I3=235,U3=16;function u0(n,t){return t==="true"?n:n/I3*U3}const Br={Mercury:10260355,Venus:14731680,Earth:4882357,Mars:12673340};function N3(n){const t=new Re(new Cl(1,1.12,32),new fs({color:n,transparent:!0,opacity:.55,side:_n,blending:Be,depthWrite:!1}));return t.renderOrder=3,t}class F3{constructor(t){this.name=t,this.mesh=new Re(new Nn(1,40,28),new Z0({color:Br[t],emissive:Br[t],emissiveIntensity:.12})),this.mesh.name=`planet-${t}`,this.marker=N3(Br[t]),this.group.add(this.mesh,this.marker)}name;group=new Ye;mesh;marker;update(t,e,i){const s=Nl(this.name,t).helio,r=Qn(s),a=r.length();r.normalize().multiplyScalar(ra(a,e)),this.group.position.copy(r);const o=Ps(this.name,e);this.mesh.scale.setScalar(o);const c=i.distanceTo(r)*.012;this.marker.scale.setScalar(c),this.marker.visible=o<c*.9,this.marker.lookAt(i)}}class O3{line;constructor(t,e,i){const s=new _e;this.line=new Qr(s,new Ei({color:Br[t],transparent:!0,opacity:.22})),this.line.name=`orbit-${t}`,this.rebuild(t,e,i)}rebuild(t,e,i){const s={Mercury:88,Venus:225,Earth:365.256,Mars:687},r=240,a=[];for(let o=0;o<=r;o++){const l=new Date(i.getTime()+o/r*s[t]*864e5),c=Qn(Nl(t,l).helio),u=c.length();c.normalize().multiplyScalar(ra(u,e)),a.push(c.x,c.y,c.z)}this.line.geometry.setAttribute("position",new te(a,3)),this.line.geometry.computeBoundingSphere()}}class z3{mesh;constructor(){this.mesh=new Re(new Nn(1,32,24),new Z0({color:new Ct(.72,.71,.68)})),this.mesh.name="moon"}}function B3(){const n=new Map;for(const t of f3)n.set(t,new F3(t));return n}function k3(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function V3(n=2600,t=900){const e=k3(3928446791),i=[],s=[];for(let l=0;l<n;l++){const c=e()*2-1,u=e()*Math.PI*2,h=Math.sqrt(1-c*c);i.push(t*h*Math.cos(u),t*c,t*h*Math.sin(u));const d=.65+e()*.35,p=e();s.push(d*(.85+p*.15),d*.9,d*(1-p*.12))}const r=new _e;r.setAttribute("position",new te(i,3)),r.setAttribute("color",new te(s,3));const a=new j0({size:1.4,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.85,blending:Be,depthWrite:!1}),o=new Sd(r,a);return o.name="starfield",o.frustumCulled=!1,o}const h0={type:"change"},Ol={type:"start"},xu={type:"end"},Tr=new Jr,d0=new $n,H3=Math.cos(70*Wh.DEG2RAD),ye=new C,Ge=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class G3 extends Pd{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new yi,this._lastTargetPosition=new C,this._quat=new yi().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new C,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new C,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$3.bind(this),this._onPointerDown=W3.bind(this),this._onPointerUp=X3.bind(this),this._onContextMenu=Q3.bind(this),this._onMouseWheel=Y3.bind(this),this._onKeyDown=K3.bind(this),this._onTouchStart=Z3.bind(this),this._onTouchMove=J3.bind(this),this._onMouseDown=q3.bind(this),this._onMouseMove=j3.bind(this),this._interceptControlDown=tg.bind(this),this._interceptControlUp=eg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h0),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ge:i>Math.PI&&(i-=Ge),s<-Math.PI?s+=Ge:s>Math.PI&&(s-=Ge),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Tr.origin.copy(this.object.position),Tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tr.direction))<H3?this.object.lookAt(this.target):(d0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tr.intersectPlane(d0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(h0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function W3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function $3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function X3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xu),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function q3(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ol)}function j3(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Y3(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(Ol),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xu))}function K3(n){this.enabled!==!1&&this._handleKeyDown(n)}function Z3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ol)}function J3(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function Q3(n){this.enabled!==!1&&n.preventDefault()}function tg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ng=1100,ig=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;class sg{camera;controls;view="deck";from=new C;to=new C;fromTarget=new C;toTarget=new C;startedAt=0;transitioning=!1;reducedMotion=!1;constructor(t,e){this.camera=new tn(45,e,5e-4,5e3),this.camera.position.set(0,2.2,7.5),this.controls=new G3(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=.02,this.controls.maxDistance=400,this.controls.enablePan=!0}setReducedMotion(t){this.reducedMotion=t}goTo(t,e,i,s,r=!1){this.view=t;let a=t==="orbit"?new C(0,0,0):e.clone(),o;if(t==="shield"){const l=new C().crossVectors(s,new C(0,1,0)).normalize();a=e.clone().addScaledVector(s,-i*6),o=e.clone().add(l.multiplyScalar(i*52)).add(s.clone().multiplyScalar(i*4)).add(new C(0,i*18,0))}else if(t==="deck"){const l=new C().crossVectors(s,new C(0,1,0)).normalize();o=e.clone().add(l.multiplyScalar(i*8)).add(s.clone().multiplyScalar(i*3.5)).add(new C(0,i*2.5,0))}else o=new C(0,4.2,9.5);this.animateTo(o,a,r)}animateTo(t,e,i=!1){if(this.reducedMotion||i){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update(),this.transitioning=!1;return}this.from.copy(this.camera.position),this.to.copy(t),this.fromTarget.copy(this.controls.target),this.toTarget.copy(e),this.startedAt=performance.now(),this.transitioning=!0}update(){if(this.transitioning){const t=Math.min(1,(performance.now()-this.startedAt)/ng),e=ig(t);this.camera.position.lerpVectors(this.from,this.to,e),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,e),t>=1&&(this.transitioning=!1)}this.controls.update()}followTarget(t){if(this.view!=="deck"||this.transitioning)return;const e=t.clone().sub(this.controls.target);e.lengthSq()!==0&&(this.controls.target.copy(t),this.camera.position.add(e))}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose()}}const ks=13,rg=2025,ag=6371.2,qe=(n,t)=>n*(n+1)/2+t,Yr=[0,-29350,-1410.3,-2556.2,2950.9,1648.7,1360.9,-2404.2,1243.8,453.4,894.7,799.6,55.8,-281.1,12,-232.9,369,187.2,-138.7,-141.9,20.9,64.3,63.8,76.7,-115.7,-40.9,14.9,-60.8,79.6,-76.9,-8.8,59.3,15.8,2.5,-11.2,14.3,23.1,10.9,-17.5,2,-21.8,16.9,14.9,-16.8,1,4.7,8,3,-.2,-2.5,-13.1,2.4,8.6,-8.7,-12.8,-1.3,-6.4,.2,2,-1,-.5,-.9,1.5,.9,-2.6,-3.9,3,-1.4,-2.5,2.4,-.6,0,-.6,-.1,1.1,-1,-.1,2.6,-2,-.1,.4,1.2,-1.2,.6,.5,.5,-.1,-.5,-.2,-1.2,-.7,.2,-.9,.6,.7,-.2,.5,.1,.7,0,.3,.2,.4,-.5,-.4],Mu=[0,0,4545.5,0,-3133.6,-814.2,0,-56.9,237.6,-549.6,0,278.6,-134,212,-375.4,0,45.3,220,-122.9,42.9,106.2,0,-18.4,16.8,48.9,-59.8,10.9,72.8,0,-48.9,-14.4,-1,23.5,-7.4,-25.1,-2.2,0,7.2,-12.6,11.5,-9.7,12.7,.7,-5.2,3.9,0,-24.8,12.1,8.3,-3.4,-5.3,7.2,-.6,.8,9.8,0,3.3,.1,2.5,5.4,-9,.4,-4.2,-3.8,.9,-9,0,0,2.8,-.6,.1,.5,-.3,-1.2,-1.7,-2.9,-1.8,-2.3,0,-1.2,.6,1,-1.5,0,.6,-.2,.8,.1,-.9,.1,.2,0,-.9,.7,1.2,-.3,-1.3,-.1,.2,-.2,.5,.6,-.6,-.3,-.5],og=[0,12.6,10,-11.2,-5.3,-8.3,-1.5,-4.4,.4,-15.6,-1.7,-2.3,-5.8,5.4,-6.8,.6,1.3,0,.7,2.3,1,-.2,-.3,.8,1.2,-.8,.4,.9,-.1,-.1,-.1,.5,-.1,-.8,-.8,.9,-.1,.2,0,.4,-.1,.3,.1,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],lg=[0,0,-21.5,0,-27.3,-11.1,0,3.8,-.2,-3.9,0,-1.3,4.1,1.6,-4.1,0,-.5,2.1,.5,1.7,1.9,0,.3,-1.6,-.4,.8,.7,.9,0,.6,.5,-.7,0,-.9,.5,-.3,0,-.3,.4,-.3,.4,-.5,-.6,.3,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function Su(n){const t=n.getUTCFullYear(),e=Date.UTC(t,0,1),i=Date.UTC(t+1,0,1);return t+(n.getTime()-e)/(i-e)}function cg(n){const t=n-rg,e=Yr.length,i=new Float64Array(e),s=new Float64Array(e);for(let r=0;r<e;r++)i[r]=Yr[r]+t*og[r],s[r]=Mu[r]+t*lg[r];return{g:i,h:s}}let f0=Number.NaN,Wa=null;function yu(n){const t=Math.round(n*100)/100;return(t!==f0||!Wa)&&(f0=t,Wa=cg(t)),Wa}const bu=qe(ks,ks)+1,We=new Float64Array(bu),mn=new Float64Array(bu),$a=new Float64Array(ks+1),Xa=new Float64Array(ks+1);function ug(n,t,e,i){const{g:s,h:r}=yu(Su(i)),a=ks,o=1e-8;let l=Math.cos(n),c=Math.sin(n);Math.abs(c)<o&&(c=c>=0?o:-o,l=Math.sign(l)*Math.sqrt(1-o*o)),We[qe(0,0)]=1,mn[qe(0,0)]=0;for(let g=1;g<=a;g++)for(let m=0;m<=g;m++){const f=qe(g,m);if(g===m)if(g===1)We[f]=c,mn[f]=l;else{const y=Math.sqrt((2*g-1)/(2*g)),M=qe(g-1,g-1);We[f]=y*c*We[M],mn[f]=y*(c*mn[M]+l*We[M])}else{const y=Math.sqrt(g*g-m*m),M=(2*g-1)/y,x=qe(g-1,m);if(g-2>=m){const A=Math.sqrt((g-1)*(g-1)-m*m)/y,R=qe(g-2,m);We[f]=M*l*We[x]-A*We[R],mn[f]=M*(l*mn[x]-c*We[x])-A*mn[R]}else We[f]=M*l*We[x],mn[f]=M*(l*mn[x]-c*We[x])}}for(let g=0;g<=a;g++)$a[g]=Math.cos(g*t),Xa[g]=Math.sin(g*t);const u=ag/e;let h=0,d=0,p=0,_=u*u;for(let g=1;g<=a;g++){_*=u;let m=0,f=0,y=0;for(let M=0;M<=g;M++){const x=qe(g,M),A=s[x],R=r[x],P=A*$a[M]+R*Xa[M];m+=P*We[x],f+=P*mn[x],y+=M*(A*Xa[M]-R*$a[M])*We[x]}h+=_*(g+1)*m,d-=_*f,p+=_*y}return p/=c,{br:h,btheta:d,bphi:p}}function hg(n,t,e=new C){const i=n.length();if(i<1)return e.set(0,0,0);const s=Math.acos(Math.max(-1,Math.min(1,n.z/i))),r=Math.atan2(n.y,n.x),{br:a,btheta:o,bphi:l}=ug(s,r,i,t),c=Math.sin(s),u=Math.cos(s),h=Math.sin(r),d=Math.cos(r);return e.set(a*c*d+o*u*d-l*h,a*c*h+o*u*h+l*d,a*u-o*c)}function dg(n,t,e,i){const s=Math.PI/180,r=n*s,a=e*s,o=(i-t)*s,l=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(o);return Math.acos(Math.max(-1,Math.min(1,l)))*180/Math.PI}function fg(n){const{g:t,h:e}=yu(Su(n)),i=t[qe(1,0)],s=t[qe(1,1)],r=e[qe(1,1)],a=-s,o=-r,l=-i,c=Math.sqrt(a*a+o*o+l*l);return{lat:Math.asin(l/c)*180/Math.PI,lon:Math.atan2(o,a)*180/Math.PI}}const ni=6371.2,pg={innerRadiusKm:ni,outerRadiusKm:ni*15,maxSteps:4e3,stepFraction:.035,minStepKm:40,maxStepKm:2200},qa=new C,ja=new C,Ya=new C,p0=new C,Ka=new C;function wr(n,t,e){hg(n,t,e);const i=e.length();return i>1e-9?(e.divideScalar(i),!0):!1}function m0(n,t,e,i={}){const s={...pg,...i},r=[],a=n.clone();let o=a.length()/ni,l="steps";for(let c=0;c<s.maxSteps;c++){r.push(a.clone());const u=a.length();if(o=Math.max(o,u/ni),c>0&&u<=s.innerRadiusKm){l="surface";break}if(u>=s.outerRadiusKm){l="outer";break}const h=e*Math.min(s.maxStepKm,Math.max(s.minStepKm,s.stepFraction*u));if(!wr(a,t,qa)){l="null-field";break}if(!wr(Ka.copy(a).addScaledVector(qa,h/2),t,ja)){l="null-field";break}if(!wr(Ka.copy(a).addScaledVector(ja,h/2),t,Ya)){l="null-field";break}if(!wr(Ka.copy(a).addScaledVector(Ya,h),t,p0)){l="null-field";break}a.addScaledVector(qa,h/6).addScaledVector(ja,h/3).addScaledVector(Ya,h/3).addScaledVector(p0,h/6)}return{points:r,startsAt:"surface",endsAt:l,apexRe:o,closed:!1}}function mg(n,t,e={}){const i=m0(n,t,1,e),s=m0(n,t,-1,e);return{points:[...s.points.slice(1).reverse(),...i.points],startsAt:s.endsAt,endsAt:i.endsAt,apexRe:Math.max(i.apexRe,s.apexRe),closed:s.endsAt==="surface"&&i.endsAt==="surface"}}function gg(n,t,e=0){const i=n*Math.PI/180,s=t*Math.PI/180,r=ni+e;return new C(r*Math.cos(i)*Math.cos(s),r*Math.cos(i)*Math.sin(s),r*Math.sin(i))}const Eu={latitudes:[-72,-64,-55,-42,-28,28,42,55,64,72],meridianCount:12,altitudeKm:120};function _g(n=Eu){const t=[];for(const e of n.latitudes)for(let i=0;i<n.meridianCount;i++)t.push(gg(e,360/n.meridianCount*i,n.altitudeKm));return t}function vg(n,t=Eu,e={}){return _g(t).map(i=>mg(i,n,e))}function xg(n,t){return 16726e-10*n*t*t}function Mg(n,t){return(10.22+1.29*Math.tanh(.184*(n+8.14)))*Math.pow(t,-1/6.6)}function Sg(n,t){return(.58-.007*n)*(1+.024*Math.log(t))}function yg(n,t,e){return n*Math.pow(2/(1+Math.cos(e)),t)}function Tu(n,t,e){if(n===null||t===null||e===null||!(t>0)||!(e>0))return null;const i=xg(t,e),s=Mg(n,i);return{r0Re:s,alpha:Sg(n,i),dynPressureNPa:i,bowShockRe:bg(s)}}function bg(n,t=8){const e=1.6666666666666667,i=t*t;return n*(1+1.1*(((e-1)*i+2)/((e+1)*(i-1))))}function Eg(n){return Qn(n).divideScalar(ni)}const Tg=new Ct(.42,.78,.95),wg=new Ct(.72,.55,1),Ag=`
  uniform float uTime;
  uniform float uShiver;      // 0-1, from Kp
  uniform float uR0;          // Shue standoff, Earth radii
  uniform float uAlpha;
  uniform vec3  uSunDir;      // unit, Earth-fixed frame
  uniform float uConfine;     // 0 = raw IGRF, 1 = clamped to the magnetopause
  varying float vDepth;

  void main() {
    vec3 p = position;
    float r = max(length(p), 0.0001);

    if (uShiver > 0.001) {
      vec3 axis = normalize(cross(p, vec3(0.0, 1.0, 0.0)) + vec3(0.0001));
      float amp = uShiver * 0.045 * min(r, 5.0);
      p += axis * amp * sin(uTime * 1.9 + r * 2.3 + p.y * 2.7);
      r = max(length(p), 0.0001);
    }

    if (uConfine > 0.001) {
      float ct = clamp(dot(p / r, uSunDir), -1.0, 1.0);
      float denom = max(1.0 + cos(acos(ct)), 0.004);
      float rmp = uR0 * pow(2.0 / denom, uAlpha);
      if (r > rmp) p *= mix(1.0, rmp / r, uConfine);
    }

    vDepth = r;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,Rg=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vDepth;
  void main() {
    // Fade with distance so the near-Earth structure stays readable.
    float fade = 1.0 - smoothstep(2.0, 14.0, vDepth) * 0.55;
    gl_FragColor = vec4(uColor, uOpacity * fade);
    #include <colorspace_fragment>
  }
`;class Cg{group=new Ye;lines=[];materials=[];tracedFor=null;reduced=!1;frozenAt=0;constructor(){this.group.name="igrf-field-lines"}ensureTraced(t){const e=Math.floor(t.getTime()/864e5);this.tracedFor!==e&&(this.tracedFor=e,this.build(vg(t)))}build(t){this.dispose();for(const e of t){if(e.points.length<2)continue;const i=[];for(const o of e.points){const l=Eg(o);i.push(l.x,l.y,l.z)}const s=new _e;s.setAttribute("position",new te(i,3));const r=new en({uniforms:{uTime:{value:0},uShiver:{value:0},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new C(1,0,0)},uConfine:{value:1},uColor:{value:e.closed?Tg:wg},uOpacity:{value:e.closed?.34:.46}},vertexShader:Ag,fragmentShader:Rg,transparent:!0,blending:Be,depthWrite:!1});this.materials.push(r);const a=new Qr(s,r);a.name=e.closed?"field-line-closed":"field-line-open",this.lines.push(a),this.group.add(a)}}setScale(t){this.group.scale.setScalar(t)}setVisible(t){this.group.visible=t}setReducedMotion(t){t&&!this.reduced&&(this.frozenAt=this.materials[0]?.uniforms.uTime?.value??0),this.reduced=t}setDynamics(t,e,i,s,r){const a=this.reduced?this.frozenAt:t,o=r===null?0:Math.max(0,Math.min(1,(r-4)/5));for(const l of this.materials)l.uniforms.uTime.value=a,l.uniforms.uShiver.value=o,l.uniforms.uSunDir.value.copy(e).normalize(),l.uniforms.uConfine.value=i===null?0:1,i!==null&&(l.uniforms.uR0.value=i),s!==null&&(l.uniforms.uAlpha.value=s)}get lineCount(){return this.lines.length}get pointCount(){return this.lines.reduce((t,e)=>t+(e.geometry.getAttribute("position")?.count??0),0)}dispose(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.lines=[],this.materials=[]}}const Ar=48,Es=40,Pg=100,Dg=Pg*Math.PI/180;function g0(n,t,e){const i=Math.abs(e.y)>.9?new C(1,0,0):new C(0,1,0),s=new C().crossVectors(e,i).normalize(),r=new C().crossVectors(e,s).normalize(),a=[];for(let u=0;u<=Ar;u++){const h=u/Ar*Dg,d=yg(n,t,h),p=[];for(let _=0;_<Es;_++){const g=_/Es*Math.PI*2,m=e.clone().multiplyScalar(Math.cos(h)).addScaledVector(s,Math.sin(h)*Math.cos(g)).addScaledVector(r,Math.sin(h)*Math.sin(g));p.push(m.multiplyScalar(d))}a.push(p)}const o=[],l=(u,h)=>{o.push(u.x,u.y,u.z,h.x,h.y,h.z)};for(let u=0;u<=Ar;u+=u<16?3:5){const h=a[u];for(let d=0;d<Es;d++)l(h[d],h[(d+1)%Es])}for(let u=0;u<Es;u+=4)for(let h=0;h<Ar;h++)l(a[h][u],a[h+1][u]);const c=new _e;return c.setAttribute("position",new te(o,3)),c}class Lg{group=new Ye;magnetopause;bowShock;current=null;constructor(){this.group.name="magnetosphere",this.magnetopause=new Os(new _e,new Ei({color:new Ct(.45,.9,.8),transparent:!0,opacity:.34,blending:Be,depthWrite:!1})),this.magnetopause.name="magnetopause-shue1998",this.bowShock=new Os(new _e,new Ei({color:new Ct(1,.62,.35),transparent:!0,opacity:.2,blending:Be,depthWrite:!1})),this.bowShock.name="bow-shock-farris-russell",this.group.add(this.magnetopause,this.bowShock)}update(t,e){if(!t){this.group.visible=!1;return}if(this.group.visible=!0,!(!this.current||Math.abs(this.current.r0-t.r0Re)>.02||Math.abs(this.current.alpha-t.alpha)>.004||this.current.axis.dot(e)<.99995))return;const s=e.clone().normalize();this.magnetopause.geometry.dispose(),this.magnetopause.geometry=g0(t.r0Re,t.alpha,s),this.bowShock.geometry.dispose(),this.bowShock.geometry=g0(t.bowShockRe,t.alpha*.92,s),this.current={r0:t.r0Re,alpha:t.alpha,bow:t.bowShockRe,axis:s}}setScale(t){this.group.scale.setScalar(t)}setVisible(t){this.group.visible=t}dispose(){this.magnetopause.geometry.dispose(),this.magnetopause.material.dispose(),this.bowShock.geometry.dispose(),this.bowShock.material.dispose()}}const Ig=62,wu=20,Ug=`
  uniform float uTime;
  uniform float uSpeed;        // scene units per second, from measured km/s
  uniform float uR0;           // Shue standoff, Earth radii
  uniform float uAlpha;
  uniform vec3  uSunDir;       // unit, this group's frame
  uniform float uStreak;       // streak length in Earth radii, from measured speed
  attribute float aPhase;      // 0-1 start position along the corridor
  attribute vec3  aOffset;     // lane, perpendicular to the flow
  attribute float aSeed;
  attribute float aEnd;        // 0 = trailing vertex, 1 = leading vertex
  varying float vFade;
  varying float vEnd;

  const float CORRIDOR = ${Ig.toFixed(1)};

  void main() {
    // Build a frame around the sunward axis.
    vec3 f = normalize(uSunDir);
    vec3 up = abs(f.y) > 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    vec3 e1 = normalize(cross(f, up));
    vec3 e2 = normalize(cross(f, e1));

    // March anti-sunward, wrapping at the far end. Each particle is drawn as a
    // short streak: the trailing vertex sits behind the leading one along the
    // flow, so the segment itself shows the direction and speed of travel.
    float travelled = fract(aPhase + uTime * uSpeed);
    float along = (0.5 - travelled) * CORRIDOR;      // +sunward -> -tailward
    along += (1.0 - aEnd) * uStreak * (0.6 + 0.8 * aSeed);
    vec3 p = f * along + e1 * aOffset.x + e2 * aOffset.y;

    // Deflection around the magnetopause. Inside the boundary the flow cannot
    // pass, so a particle that would be inside is pushed out onto it and slides
    // along — the same Shue surface the HUD reports a standoff for.
    float r = max(length(p), 0.0001);
    float ct = clamp(dot(p / r, f), -1.0, 1.0);
    float theta = acos(ct);
    float denom = max(1.0 + cos(theta), 0.001);
    float rmp = uR0 * pow(2.0 / denom, uAlpha);
    if (r < rmp) {
      // Push outward along the local normal, with a little slip so the stream
      // hugs the boundary rather than stacking on it.
      p = normalize(p) * (rmp * 1.04);
    }

    // Fade in at the sunward end and out down-tail, so particles do not pop.
    vFade = smoothstep(0.0, 0.12, travelled) * (1.0 - smoothstep(0.82, 1.0, travelled));
    // Dim the ones far off-axis; they are context, not subject.
    vFade *= 1.0 - smoothstep(0.35, 1.0, length(aOffset.xy) / ${wu.toFixed(1)});

    vEnd = aEnd;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,Ng=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  varying float vEnd;
  void main() {
    // Fade along the streak so it reads as a head with a tail behind it.
    float a = vFade * uOpacity * mix(0.05, 1.0, vEnd);
    gl_FragColor = vec4(uColor, a);
    #include <colorspace_fragment>
  }
`;function Fg(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Og{points;mat;maxCount;reduced=!1;frozenAt=0;constructor(t=4200){this.maxCount=t;const e=Fg(5249554),i=[],s=[],r=[],a=[];for(let l=0;l<t;l++){const c=e(),u=Math.sqrt(e())*wu,h=e()*Math.PI*2,d=e(),p=u*Math.cos(h),_=u*Math.sin(h);for(const g of[1,0])i.push(c),s.push(p,_,0),r.push(d),a.push(g)}const o=new _e;o.setAttribute("position",new te(new Float32Array(t*6),3)),o.setAttribute("aPhase",new te(i,1)),o.setAttribute("aOffset",new te(s,3)),o.setAttribute("aSeed",new te(r,1)),o.setAttribute("aEnd",new te(a,1)),o.boundingSphere=null,this.mat=new en({uniforms:{uTime:{value:0},uSpeed:{value:.05},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new C(1,0,0)},uStreak:{value:1.4},uColor:{value:new Ct(.62,.86,1)},uOpacity:{value:.5}},vertexShader:Ug,fragmentShader:Ng,transparent:!0,blending:Be,depthWrite:!1}),this.points=new Os(o,this.mat),this.points.name="solar-wind-stream",this.points.frustumCulled=!1}setReducedMotion(t){t&&!this.reduced&&(this.frozenAt=this.mat.uniforms.uTime.value),this.reduced=t}setVisible(t){this.points.visible=t}get visible(){return this.points.visible}setScale(t){this.points.scale.setScalar(t)}update(t,e,i,s,r,a){const o=i!==null&&s!==null;if(this.points.visible=this.points.visible&&o,!o)return;this.mat.uniforms.uTime.value=this.reduced?this.frozenAt:t,this.mat.uniforms.uSpeed.value=.014+i/1e3*.055,this.mat.uniforms.uSunDir.value.copy(e).normalize(),r!==null&&(this.mat.uniforms.uR0.value=r),a!==null&&(this.mat.uniforms.uAlpha.value=a);const l=Math.max(0,Math.min(1,(s-1)/19)),c=Math.round(this.maxCount*(.25+.75*l));this.points.geometry.setDrawRange(0,c*2),this.mat.uniforms.uOpacity.value=.4+.32*l,this.mat.uniforms.uStreak.value=.7+i/1e3*3.4}dispose(){this.points.geometry.dispose(),this.mat.dispose()}}const zg=360/25.38;class zl{group=new Ye;markers=[];stamp="";constructor(){this.group.name="active-regions"}static direction(t,e){const i=t*Math.PI/180,s=e*Math.PI/180;return new C(Math.cos(i)*Math.cos(s),Math.sin(i),-Math.cos(i)*Math.sin(s))}setRegions(t){const e=t.map(i=>`${i.region}:${i.lat}:${i.lon}`).join(",");if(e!==this.stamp){this.stamp=e,this.dispose();for(const i of t){const s=i.area??10,r=.03+.055*Math.min(1,Math.log10(1+s)/3),a=Math.max(0,Math.min(1,(i.mProb??0)/50)),o=new fs({color:new Ct().setRGB(1,.62-.32*a,.22-.18*a),transparent:!0,opacity:.55+.4*a,blending:Be,depthWrite:!1}),l=new Re(new Nn(r,12,10),o);l.position.copy(zl.direction(i.lat,i.lon)).multiplyScalar(1.01),l.name=`region-${i.region}`,l.userData.region=i,this.markers.push(l),this.group.add(l)}}}update(t,e,i){if(this.group.scale.setScalar(i),!e)return;const s=(t.getTime()-Date.parse(e))/864e5;Number.isFinite(s)&&(this.group.rotation.y=-(s*zg*Math.PI)/180)}setVisible(t){this.group.visible=t}get count(){return this.markers.length}dispose(){for(const t of this.markers)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.markers=[]}}const Au=695700,Ru=1495978707e-1,Cu=21.5;function Bg(n){const t=Se(n),e=73.6667+1.3958333*(t.tt-15020)/36525,s=(qm(t).elon-e)*Math.PI/180,r=7.25*Math.PI/180;return Math.asin(Math.sin(s)*Math.sin(r))*180/Math.PI}function Pu(n,t){const e=Math.PI/180,i=Bg(t),s=n.latitude*e,r=i*e,a=n.longitude*e,o=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(a);return Math.acos(Math.max(-1,Math.min(1,o)))*180/Math.PI}function kg(n,t){return Pu(n,t)<=n.halfAngle}function Vg(n,t=1){const e=Date.parse(n.time215);if(!Number.isFinite(e)||!(n.speedKms>0))return null;const s=(t*Ru-Cu*Au)/n.speedKms/3600,r=Math.max(0,(n.speedKms-450)/450),a=Math.min(24,6+6*r);return{time:new Date(e+s*36e5).toISOString(),windowHours:Math.round(a),transitHours:s}}function _0(n,t){const e=Date.parse(n.time215);if(!Number.isFinite(e))return 0;const i=Math.max(0,(t.getTime()-e)/1e3);return(Cu*Au+n.speedKms*i)/Ru}function Hg(n,t){const e=Math.PI/180,i=Math.hypot(t.x,t.y,t.z)||1,s={x:t.x/i,y:t.y/i,z:t.z/i},r=Math.abs(s.y)>.9?{x:1,y:0,z:0}:{x:0,y:1,z:0},a={x:r.y*s.z-r.z*s.y,y:r.z*s.x-r.x*s.z,z:r.x*s.y-r.y*s.x},o=Math.hypot(a.x,a.y,a.z)||1;a.x/=o,a.y/=o,a.z/=o;const l={x:s.y*a.z-s.z*a.y,y:s.z*a.x-s.x*a.z,z:s.x*a.y-s.y*a.x},c=n.latitude*e,u=n.longitude*e,h=Math.cos(c);return{x:s.x*h*Math.cos(u)+a.x*h*Math.sin(u)+l.x*Math.sin(c),y:s.y*h*Math.cos(u)+a.y*h*Math.sin(u)+l.y*Math.sin(c),z:s.z*h*Math.cos(u)+a.z*h*Math.sin(u)+l.z*Math.sin(c)}}const Gg=new Ct(1,.52,.3),Wg=new Ct(.62,.66,.85);function $g(n,t,e,i){const s=Math.min(89,Math.max(2,t))*Math.PI/180,r=Math.abs(n.y)>.9?new C(1,0,0):new C(0,1,0),a=new C().crossVectors(n,r).normalize(),o=new C().crossVectors(n,a).normalize(),l=7,c=28,u=[],h=(g,m)=>{u.push(g.x,g.y,g.z,m.x,m.y,m.z)},p=Array.from({length:l},(g,m)=>e*(m+1)/l).map(g=>{const m=ra(g,i),f=m*Math.tan(s);return Array.from({length:c},(y,M)=>{const x=M/c*Math.PI*2;return n.clone().multiplyScalar(m).addScaledVector(a,f*Math.cos(x)).addScaledVector(o,f*Math.sin(x))})});for(const g of p)for(let m=0;m<c;m++)h(g[m],g[(m+1)%c]);for(let g=0;g<c;g+=4){const m=new C(0,0,0);h(m,p[0][g]);for(let f=0;f<p.length-1;f++)h(p[f][g],p[f+1][g])}const _=new _e;return _.setAttribute("position",new te(u,3)),_}class Xg{group=new Ye;lines=[];stamp="";visible=!0;constructor(){this.group.name="cme-cones"}setVisible(t){this.visible=t,this.group.visible=t}get count(){return this.lines.length}update(t,e,i,s){if(!this.visible)return;const r=`${i}|${t.map(a=>`${a.id}:${_0(a,e).toFixed(2)}`).join(",")}`;if(r!==this.stamp){this.stamp=r,this.dispose();for(const a of t){const o=Math.min(1.7,_0(a,e));if(o<=.02)continue;const l=Hg(a,s),c=new C(l.x,l.y,l.z).normalize(),u=$g(c,a.halfAngle,o,i),h=new Ei({color:a.earthDirected?Gg:Wg,transparent:!0,opacity:(a.earthDirected?.36:.09)*Math.max(.25,1-o/2.2),blending:Be,depthWrite:!1}),d=new Os(u,h);d.name=`cme-${a.id}`,d.userData.cme=a,this.lines.push(d),this.group.add(d)}}}dispose(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.lines=[]}}const qg=new Ct(.62,.94,1),jg=new Ct(.52,.56,.64);class Yg{group=new Ye;craft=[];stamp="";axis;scale=1;constructor(){this.group.name="l1-monitors";const t=new _e;t.setAttribute("position",new te([0,0,0,1,0,0],3)),this.axis=new Qr(t,new Ei({color:new Ct(.5,.55,.62),transparent:!0,opacity:.18,blending:Be,depthWrite:!1})),this.axis.name="sun-earth-line",this.group.add(this.axis)}setVisible(t){this.group.visible=t}setScale(t){this.scale=t}build(t){this.disposeCraft();for(const e of t){const i=e.active?qg:jg,s=new Ye;s.name=`l1-${e.source}`;const r=new Re(new Rl(1,0),new fs({color:i,transparent:!0,opacity:e.active?.95:.5,blending:Be,depthWrite:!1}));r.name=`l1-marker-${e.source}`;const a=new Os(new _e,new Ei({color:i,transparent:!0,opacity:e.active?.55:.26,blending:Be,depthWrite:!1}));a.name=`l1-dropline-${e.source}`,s.add(r,a),this.group.add(s),this.craft.push({group:s,marker:r,drop:a,source:e.source})}}update(t,e,i){if(t.length===0){this.group.visible=!1;return}const s=t.map(o=>`${o.source}:${o.time}:${o.active}`).join(",")+`|${i}`;t.map(o=>o.source).join(",")!==this.craft.map(o=>o.source).join(",")&&this.build(t);const a=u0(280,i)*this.scale;if(this.axis.scale.setScalar(a),this.axis.position.set(0,0,0),this.axis.quaternion.setFromUnitVectors(new C(1,0,0),e.x),s!==this.stamp){this.stamp=s;for(let o=0;o<t.length;o++){const l=t[o],c=this.craft[o];if(!c)continue;const u=g3(l.gse,e).normalize(),h=u0(l.distanceRe,i)*this.scale,d=u.multiplyScalar(h);c.group.position.copy(d),c.marker.scale.setScalar(this.scale*.26);const _=e.x.clone().multiplyScalar(d.dot(e.x)).sub(d);c.drop.geometry.dispose();const g=new _e;g.setAttribute("position",new te([0,0,0,_.x,_.y,_.z],3)),c.drop.geometry=g}}}disposeCraft(){for(const t of this.craft)this.group.remove(t.group),t.marker.geometry.dispose(),t.marker.material.dispose(),t.drop.geometry.dispose(),t.drop.material.dispose();this.craft=[]}dispose(){this.disposeCraft(),this.axis.geometry.dispose(),this.axis.material.dispose()}}const Kg="https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get",v0=n=>{const t=String(n??"").trim();if(!t)return null;const e=Date.parse(/\dZ$/.test(t)&&t.length===17?t.replace("Z",":00Z"):t);return Number.isFinite(e)?new Date(e).toISOString():null},Rr=n=>{const t=Number(n);return Number.isFinite(t)?t:null};function Zg(n,t=new Date){if(!Array.isArray(n))return[];const e=[];for(const i of n){const s=v0(i.time21_5),r=Rr(i.latitude),a=Rr(i.longitude),o=Rr(i.halfAngle),l=Rr(i.speed);if(s===null||r===null||a===null||o===null||l===null||l<=0)continue;const c={latitude:r,longitude:a,halfAngle:o,speedKms:l,time215:s},h=(Array.isArray(i.enlilList)?i.enlilList:[]).map(d=>v0(d.estimatedShockArrivalTime)).find(d=>d!==null)??null;e.push({...c,id:String(i.associatedCMEID??`${s}-${l}`),type:String(i.type??""),note:String(i.note??""),link:i.link??null,earthDirected:kg(c,new Date(s)),offAxisDeg:Pu(c,new Date(s)),arrival:h?{time:h,windowHours:7,transitHours:(Date.parse(h)-Date.parse(s))/36e5}:Vg(c),arrivalFromEnlil:h!==null})}return e.sort((i,s)=>Date.parse(s.time215)-Date.parse(i.time215))}function Jg(n,t=new Date,e=3.5,i=6){const s=t.getTime(),r=n.filter(l=>{const c=(s-Date.parse(l.time215))/864e5;return c>=0&&c<=e}),a=r.filter(l=>l.earthDirected),o=r.filter(l=>!l.earthDirected).slice(0,i);return[...a,...o]}async function Qg(n,t=7){const e=new Date,i=new Date(e.getTime()-t*864e5),s=`${Kg}/CMEAnalysis?startDate=${i.toISOString().slice(0,10)}&endDate=${e.toISOString().slice(0,10)}&mostAccurateOnly=true`;try{const r=await fetch(s,{cache:"no-store",signal:n});return r.ok?Zg(await r.json()):[]}catch{return[]}}class t4{constructor(t){this.canvas=t,this.renderer=new pm({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.scene.background=new Ct(329485),this.rig=new sg(t,t.clientWidth/Math.max(1,t.clientHeight)),this.scene.add(V3()),this.scene.add(this.sun.group),this.sun.group.add(this.activeRegions.group),this.scene.add(this.cmeCones.group),this.scene.add(this.earth.group),this.scene.add(this.moon.mesh),this.scene.add(this.sunLight),this.earth.spin.add(this.fieldLines.group),this.earth.group.add(this.magnetosphere.group),this.earth.group.add(this.spacecraft.group),this.solarWind=new Og(window.devicePixelRatio>1.5?4200:2600),this.earth.group.add(this.solarWind.points),this.scene.add(new Rd(2371658,.55)),this.planets=B3();for(const[e,i]of this.planets){e!=="Earth"&&this.scene.add(i.group);const s=new O3(e,this.mode,new Date);this.rings.set(e,s),this.scene.add(s.line)}this.resize(),window.addEventListener("resize",this.resize)}canvas;scene=new _d;rig;renderer;sun=new A3;earth=new E3;moon=new z3;planets=new Map;rings=new Map;sunLight=new wd(16773853,1.6,0,0);fieldLines=new Cg;magnetosphere=new Lg;solarWind;activeRegions=new zl;cmeCones=new Xg;cmes=[];regionsObservedAt=null;spacecraft=new Yg;spacecraftPos=[];shieldVisible=!0;windVisible=!0;sunDirEarthFixed=new C(1,0,0);mode="globe";_reducedMotion=!1;raf=0;clockStart=performance.now();now=null;aurora=null;auroraVisible=!0;frameTimes=[];lastFrame=performance.now();stats={fps:0,frames:0};setNow(t){this.now=t}setAurora(t){this.aurora=t}setRegions(t,e){this.activeRegions.setRegions(t),this.regionsObservedAt=e}get regionCount(){return this.activeRegions.count}setCmes(t){this.cmes=t}setSpacecraft(t){this.spacecraftPos=t}setSpacecraftVisible(t){this.spacecraft.setVisible(t)}setCmesVisible(t){this.cmeCones.setVisible(t)}get cmesOn(){return this.cmeCones.group.visible}get cmeCount(){return this.cmeCones.count}setAuroraVisible(t){this.auroraVisible=t}get auroraOn(){return this.auroraVisible}setScaleMode(t){if(t===this.mode)return;this.mode=t;const e=new Date;for(const[i,s]of this.rings)s.rebuild(i,t,e)}get scaleMode(){return this.mode}get reducedMotion(){return this._reducedMotion}setShieldVisible(t){this.shieldVisible=t,this.fieldLines.setVisible(t),this.magnetosphere.setVisible(t)}get shieldOn(){return this.shieldVisible}setWindVisible(t){this.windVisible=t,this.solarWind.setVisible(t)}get windOn(){return this.windVisible}get fieldLineStats(){return{lines:this.fieldLines.lineCount,points:this.fieldLines.pointCount}}setReducedMotion(t){this._reducedMotion=t,this.sun.setReducedMotion(t),this.rig.setReducedMotion(t),this.fieldLines.setReducedMotion(t),this.solarWind.setReducedMotion(t)}setView(t,e=!1){const{earthPos:i,earthRadius:s,sunDir:r}=this.geometryNow(new Date);this.rig.goTo(t,i,s,r,e)}geometryNow(t){const e=Qn(Nl("Earth",t).helio),i=e.length(),s=e.clone().normalize().multiplyScalar(ra(i,this.mode)),r=Ps("Earth",this.mode),a=_u(t).dir;return{earthPos:s,earthRadius:r,sunDir:Qn(a).normalize()}}frame=()=>{const t=performance.now(),e=t-this.lastFrame;this.lastFrame=t,this.frameTimes.push(e),this.frameTimes.length>120&&this.frameTimes.shift();const i=this.frameTimes.reduce((A,R)=>A+R,0)/this.frameTimes.length;this.stats={fps:i>0?1e3/i:0,frames:this.stats.frames+1};const s=new Date,r=(t-this.clockStart)/1e3,{earthPos:a,earthRadius:o,sunDir:l}=this.geometryNow(s);this.sun.setRadius(Ps("Sun",this.mode)),this.sun.update(r,this.now?.xray?.flux_long??null),this.activeRegions.update(s,this.regionsObservedAt,Ps("Sun",this.mode)),this.sunLight.position.set(0,0,0);for(const A of this.planets.values())A.update(s,this.mode,this.rig.camera.position);this.earth.group.position.copy(a),this.earth.setRadius(o),this.earth.update(s,l),this.earth.setAurora(this.aurora,this.auroraVisible);const c=this.now?.solar_wind,u=this.now?.propagated,h=u?.bz??c?.bz_gsm??null,d=u?.density??c?.density??null,p=u?.speed??c?.speed??null,_=Tu(h,d,p),g=Fl(s)*Math.PI/180,m=Math.cos(-g),f=Math.sin(-g);this.sunDirEarthFixed.set(l.x*m+l.z*f,l.y,-l.x*f+l.z*m),this.shieldVisible&&(this.fieldLines.ensureTraced(s),this.fieldLines.setScale(o),this.fieldLines.setDynamics(r,this.sunDirEarthFixed,_?.r0Re??null,_?.alpha??null,this.now?.kp?.estimated_kp??null),this.magnetosphere.setScale(o),this.magnetosphere.update(_,l)),this.shieldVisible&&this.spacecraftPos.length>0?(this.spacecraft.setVisible(!0),this.spacecraft.setScale(o),this.spacecraft.update(this.spacecraftPos,m3(s),this.mode)):this.spacecraft.setVisible(!1),this.windVisible&&(this.solarWind.setVisible(!0),this.solarWind.setScale(o),this.solarWind.update(r,l,p,d,_?.r0Re??null,_?.alpha??null));const y=Qn(p3(s)),M=y.length(),x=y.clone().normalize().multiplyScalar(L3(M,this.mode,o));this.moon.mesh.position.copy(a).add(x),this.moon.mesh.scale.setScalar(Ps("Moon",this.mode)),this.cmeCones.update(Jg(this.cmes,s),s,this.mode,a),this.rig.followTarget(a),this.rig.update(),this.renderer.render(this.scene,this.rig.camera),this.raf=requestAnimationFrame(this.frame)};start(){this.raf||(this.setView("deck",!0),this.raf=requestAnimationFrame(this.frame))}stop(){cancelAnimationFrame(this.raf),this.raf=0}resize=()=>{const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.rig.resize(t/Math.max(1,e))};dispose(){this.stop(),window.removeEventListener("resize",this.resize),this.earth.dispose(),this.sun.dispose(),this.fieldLines.dispose(),this.magnetosphere.dispose(),this.solarWind.dispose(),this.activeRegions.dispose(),this.cmeCones.dispose(),this.rig.dispose(),this.renderer.dispose()}}const Za=24,x0="https://services.swpc.noaa.gov",Vs=[{id:"suvi-304",label:"SUVI 304 Å",product:"suvi-primary-304",instrument:"GOES-19 SUVI",describes:"Chromosphere at ~50 000 K — prominences and filaments"},{id:"suvi-195",label:"SUVI 195 Å",product:"suvi-primary-195",instrument:"GOES-19 SUVI",describes:"Corona at ~1.5 million K — active regions and coronal holes"},{id:"suvi-171",label:"SUVI 171 Å",product:"suvi-primary-171",instrument:"GOES-19 SUVI",describes:"Quiet corona at ~600 000 K — coronal loops"},{id:"suvi-131",label:"SUVI 131 Å",product:"suvi-primary-131",instrument:"GOES-19 SUVI",describes:"Flaring plasma at ~10 million K — brightest during flares"},{id:"lasco-c2",label:"LASCO C2",product:"lasco-c2",instrument:"SOHO LASCO",describes:"Coronagraph, 2–6 solar radii — where CMEs first appear"},{id:"lasco-c3",label:"LASCO C3",product:"lasco-c3",instrument:"SOHO LASCO",describes:"Coronagraph, 3.7–30 solar radii — CMEs heading outward"}];function e4(n){const t=/_s(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/.exec(n);if(t){const[,i,s,r,a,o,l]=t;return`${i}-${s}-${r}T${a}:${o}:${l}.000Z`}const e=/\/(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})_/.exec(n);if(e){const[,i,s,r,a,o]=e;return`${i}-${s}-${r}T${a}:${o}:00.000Z`}return null}async function n4(n,t){const e=`${x0}/products/animations/${n.product}.json`;try{const i=await fetch(e,{cache:"no-store",signal:t});if(!i.ok)return null;const s=await i.json();if(!Array.isArray(s))return null;const r=[];for(const c of s){if(!c?.url)continue;const u=e4(c.url);u&&r.push({url:`${x0}${c.url}`,time:u})}if(r.sort((c,u)=>Date.parse(c.time)-Date.parse(u.time)),r.length===0)return null;const a=(Date.parse(r[r.length-1].time)-Date.parse(r[0].time))/36e5;let o=r;if(r.length>Za){const c=(r.length-1)/(Za-1);o=Array.from({length:Za},(u,h)=>r[Math.round(h*c)])}const l=await s4(o,t);return{id:n.id,label:n.label,describes:n.describes,instrument:n.instrument,frames:o,totalAvailable:r.length,spanHours:a,frameBytes:l.bytes,newestGood:l.index,skippedDropouts:l.skipped,sourceUrl:e}}catch{return null}}async function i4(n,t){try{const i=(await fetch(n,{method:"HEAD",signal:t})).headers.get("content-length");return i?Number(i):null}catch{return null}}async function s4(n,t){const e=n.length-1,i=Math.min(6,n.length),s=await Promise.all(Array.from({length:i},(o,l)=>i4(n[e-l].url,t))),r=s.filter(o=>o!==null&&o>0).sort((o,l)=>o-l);if(r.length===0)return{index:e,skipped:0,bytes:null};const a=r[Math.floor(r.length/2)];for(let o=0;o<i;o++){const l=s[o]??null;if(l!==null&&l>=a*.4)return{index:e-o,skipped:o,bytes:l}}return{index:e,skipped:0,bytes:s[0]??null}}function r4(n,t,e){let i=0;const s=n.frames.length;return new Promise(r=>{let a=0;const o=()=>{i++,a++,t(i,s),a>=s&&r()};for(const l of n.frames){const c=new Image;c.onload=o,c.onerror=o,c.src=l.url}})}function Qt(n){if(!n)return"--:--";const t=Date.parse(n);if(!Number.isFinite(t))return"--:--";const e=new Date(t);return`${String(e.getUTCHours()).padStart(2,"0")}:${String(e.getUTCMinutes()).padStart(2,"0")}`}function xi(n){if(!Number.isFinite(n))return"unknown";const t=Math.max(0,Math.round(n));if(t<90)return`${t}s`;const e=Math.round(t/60);return e<90?`${e} min`:`${(e/60).toFixed(1)} h`}const Ae="no data";function Bl(n){return n?n.tier==="modeled"?"D":n.tier==="ambient"?"M":"E":"E"}function kl(n){return n?n.tier==="modeled"?`Modeled — ${n.model?.name??"model"}${n.model?.ref?` (${n.model.ref})`:""}`:n.tier==="ambient"?"Ambient — artistic, parameter-driven":`Measured — ${n.source}`:""}function Ts(n,t=1){return n==null||!Number.isFinite(n)?Ae:n.toFixed(t)}function Ja(n){return n==null||!Number.isFinite(n)?Ae:String(Math.round(n))}function Mi(n,t=new Date){if(!n||!n.data_time)return{state:"no-data",ageS:null,label:n?.error?`no data · ${n.error}`:Ae};const e=(t.getTime()-Date.parse(n.data_time))/1e3;return Number.isFinite(e)?e>n.stale_after_s?{state:"stale",ageS:e,label:`stale · no data since ${Qt(n.data_time)} UTC (${xi(e)} old)`}:{state:"fresh",ageS:e,label:`${Qt(n.data_time)} UTC · ${xi(e)} old`}:{state:"no-data",ageS:null,label:Ae}}const fl=[{id:"kp",label:"Planetary K",unit:"Kp",part:"kp",value:n=>Ts(n?.kp?.estimated_kp??null,2),detail:n=>n?.kp?.kp?`NOAA ${n.kp.kp}`:"",meaning:"A 0–9 index of global geomagnetic disturbance, derived from ground magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic storm, and the aurora moves toward the equator."},{id:"bz",label:"IMF Bz",unit:"nT",part:"solar_wind",series:"bz_gsm",value:n=>Ts(n?.solar_wind?.bz_gsm??null,1),detail:n=>{const t=n?.solar_wind?.bz_gsm;return t==null?"":t<0?"southward":"northward"},meaning:"The north–south component of the interplanetary magnetic field, in GSM coordinates. This is the single most useful predictor on the panel: when Bz turns southward it opposes Earth’s field, magnetic reconnection opens the magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what storms are made of."},{id:"bt",label:"IMF total",unit:"nT",part:"solar_wind",series:"bt",value:n=>Ts(n?.solar_wind?.bt??null,1),meaning:"Total strength of the interplanetary magnetic field. A high Bt means there is a lot of field available to turn southward."},{id:"speed",label:"Wind speed",unit:"km/s",part:"solar_wind",series:"speed",value:n=>Ja(n?.solar_wind?.speed??null),detail:n=>n?.solar_wind?.spacecraft?`via ${n.solar_wind.spacecraft}`:"",meaning:"Bulk speed of the solar wind at L1, about a million miles sunward of Earth. Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal hole stream. Speed sets how hard the wind presses on the magnetosphere, and how long the warning is: at 400 km/s, L1 buys roughly an hour."},{id:"density",label:"Proton density",unit:"cm⁻³",part:"solar_wind",series:"density",value:n=>Ts(n?.solar_wind?.density??null,1),meaning:"Protons per cubic centimetre in the solar wind. With speed it sets the dynamic pressure that compresses the magnetopause."},{id:"xray",label:"X-ray class",unit:"0.1–0.8 nm",part:"xray",value:n=>n?.xray?.class??Ae,detail:n=>n?.xray?.flux_long!=null?`${n.xray.flux_long.toExponential(1)} W/m²`:"",meaning:"Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. Each letter is ten times the one before: A, B, C, M, X. M and X class flares cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive at the speed of light, so there is no warning."},{id:"protons",label:"Radiation (S)",unit:"pfu ≥10 MeV",part:"particles",value:n=>{const t=n?.particles;return!t||t.proton_10mev===null?Ae:`S${t.s_scale??0}`},detail:n=>{const t=n?.particles;return t?.proton_10mev===null||t?.proton_10mev===void 0?"":`${t.proton_10mev.toFixed(2)} pfu · ${t.s_text??""}`},meaning:"Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S scale it defines. S1 begins at 10 particle flux units, and each step up is ten times the last. This is the one space-weather hazard that endangers people rather than equipment: at S3 and above, aviation crews on polar routes accumulate real dose and astronauts outside a hull are at risk. Protons from a flare can arrive within tens of minutes, far ahead of any CME."},{id:"electrons",label:"Electron flux",unit:"pfu ≥2 MeV",part:"particles",value:n=>Ja(n?.particles?.electron_2mev??null),detail:n=>{const t=n?.particles?.electron_2mev;return t==null?"":t>=1e3?"above NOAA alert level":"normal"},meaning:"Integral electron flux above 2 MeV at geostationary orbit. Sustained flux above 1000 particle flux units drives deep dielectric charging — electrons bury themselves inside insulating materials until the material discharges through the spacecraft. It is a leading cause of satellite anomalies, and it builds over days rather than minutes."},{id:"geosync",label:"Field at 6.6 Rₑ",unit:"nT",part:"geosync",value:n=>Ja(n?.geosync?.total_nt??null),detail:n=>{const t=n?.geosync;return!t||t.deficit_nt===null?"":t.arcjet?"thruster firing — suspect":`${t.deficit_nt>0?"−":"+"}${Math.abs(t.deficit_nt).toFixed(0)} vs dipole`},meaning:"Total magnetic field measured by GOES at geostationary orbit, 6.6 Earth radii out. This is the only in-situ magnetic measurement on the panel, and it is the one check available on the modelled shield: when the magnetopause is pushed inside 6.6 Rₑ, the spacecraft finds itself in the solar wind and the field it measures collapses. The reading normally sits below the dipole value for that distance, because the ring current and magnetopause currents subtract from Earth’s own field — the size of that deficit is itself a storm indicator."},{id:"mpause",label:"Magnetopause",unit:"Rₑ",part:"magnetopause",value:n=>Ts(n?.magnetopause?.standoff_re??null,1),detail:()=>"Shue 1998",meaning:"Modelled distance from Earth’s centre to the sunward edge of the magnetosphere, in Earth radii, computed from the live solar wind. Typically 10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and exposed to the solar wind directly."}],Qa=60.3;function a4(n){if(n.length===0)return"";const t=n.reduce((l,c)=>Math.max(l,c.offAxisRe),0),e=Math.max(Qa*1.12,t*1.25),i=78,s=i/e,r=96,a=92,o=n.map(l=>{const c=r+l.gse.y/6371.2*s,u=a-l.gse.z/6371.2*s,h=l.active?"l1-active":"l1-idle";return`<circle class="${h}" cx="${c.toFixed(1)}" cy="${u.toFixed(1)}" r="${l.active?4:3}" />
      <text class="l1-label ${h}" x="${(c+7).toFixed(1)}" y="${(u+3.5).toFixed(1)}">${kt(l.source)}</text>`}).join("");return`<svg class="l1-inset" viewBox="0 0 192 184" role="img"
      aria-label="Cross-section looking along the Sun–Earth line: the L1 monitors plotted at their true distance from the line, against the Moon's orbit for scale.">
    <circle class="l1-moon" cx="${r}" cy="${a}" r="${(Qa*s).toFixed(1)}" />
    <text class="l1-tick" x="${r}" y="${(a-Qa*s-4).toFixed(1)}">Moon’s orbit</text>
    <line class="l1-cross" x1="${r-i}" y1="${a}" x2="${r+i}" y2="${a}" />
    <line class="l1-cross" x1="${r}" y1="${a-i}" x2="${r}" y2="${a+i}" />
    <circle class="l1-earth" cx="${r}" cy="${a}" r="${Math.max(1.1,s).toFixed(2)}" />
    ${o}
    <text class="l1-axis" x="${r+i}" y="${a+12}" text-anchor="end">dusk</text>
    <text class="l1-axis" x="${r}" y="14" text-anchor="middle">ecliptic north</text>
  </svg>`}const ge="https://services.swpc.noaa.gov",he={mag:`${ge}/json/rtsw/rtsw_mag_1m.json`,wind:`${ge}/json/rtsw/rtsw_wind_1m.json`,kp1m:`${ge}/json/planetary_k_index_1m.json`,xrayFlares:`${ge}/json/goes/primary/xray-flares-latest.json`,xrays6h:`${ge}/json/goes/primary/xrays-6-hour.json`,scales:`${ge}/products/noaa-scales.json`,aurora:`${ge}/json/ovation_aurora_latest.json`,regions:`${ge}/json/solar_regions.json`,alerts:`${ge}/products/alerts.json`,summaryMag:`${ge}/products/summary/solar-wind-mag-field.json`,summarySpeed:`${ge}/products/summary/solar-wind-speed.json`};function ce(n){if(!n||typeof n!="string")return null;let t=n.trim().replace(" ","T");/[Zz]$|[+-]\d{2}:?\d{2}$/.test(t)||(t+="Z");const e=Date.parse(t);return Number.isFinite(e)?new Date(e).toISOString():null}function At(n){if(n==null||n==="")return null;const t=typeof n=="number"?n:Number(n);return!Number.isFinite(t)||t===-9999||t===-999?null:t}function fn(n){return Array.isArray(n)?n:[]}function Hs(n,t,e){let i=null,s=-1/0;for(const r of n){if(!e(r))continue;const a=Date.parse(ce(r[t])??"");Number.isFinite(a)&&a>s&&(s=a,i=r)}return i}const Kr=n=>n.active===!0;function o4(n,t){const e=Hs(fn(n),"time_tag",Kr),i=Hs(fn(t),"time_tag",Kr);if(!e&&!i)return null;const s=ce(e?.time_tag),r=ce(i?.time_tag),a=[s,r].filter(l=>!!l);return a.length===0?null:{time:a.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),bz_gsm:At(e?.bz_gsm),by_gsm:At(e?.by_gsm),bx_gsm:At(e?.bx_gsm),bt:At(e?.bt),speed:At(i?.proton_speed),density:At(i?.proton_density),temperature:At(i?.proton_temperature),spacecraft:e?.source??i?.source??null}}function M0(n,t){const e=new Map,i=a=>ce(a.time_tag);for(const a of fn(n)){if(!Kr(a))continue;const o=i(a);o&&((e.get(o)??e.set(o,{}).get(o)).m=a)}for(const a of fn(t)){if(!Kr(a))continue;const o=i(a);if(!o)continue;const l=o.slice(0,17)+"00.000Z";(e.get(l)??e.set(l,{}).get(l)).w=a}const s=[...e.keys()].sort(),r={time:s,bx_gsm:[],by_gsm:[],bz_gsm:[],bt:[],density:[],speed:[],temperature:[]};for(const a of s){const{m:o,w:l}=e.get(a);r.bx_gsm.push(At(o?.bx_gsm)),r.by_gsm.push(At(o?.by_gsm)),r.bz_gsm.push(At(o?.bz_gsm)),r.bt.push(At(o?.bt)),r.density.push(At(l?.proton_density)),r.speed.push(At(l?.proton_speed)),r.temperature.push(At(l?.proton_temperature))}return r}function l4(n){const t=Hs(fn(n),"time_tag",()=>!0),e=ce(t?.time_tag);return!t||!e?null:{time:e,estimated_kp:At(t.estimated_kp),kp:t.kp??null}}function Du(n){if(n===null||!Number.isFinite(n)||n<=0)return null;const t=[["X",1e-4],["M",1e-5],["C",1e-6],["B",1e-7],["A",1e-8]];for(const[e,i]of t)if(n>=i){const s=n/i;return`${e}${s.toFixed(1)}`}return`A${(n/1e-8).toFixed(1)}`}function c4(n){const t=fn(n)[0],e=ce(t?.time_tag),i=t?.current_class;return!t||!e||!i?null:{time:e,class:i}}function u4(n){const t=fn(n),e=Hs(t,"time_tag",a=>String(a.energy).startsWith("0.1-0.8")),i=Hs(t,"time_tag",a=>String(a.energy).startsWith("0.05-0.4")),s=ce(e?.time_tag);if(!e||!s)return null;const r=At(e.flux);return{time:s,flux_long:r,flux_short:At(i?.flux),class:Du(r)}}function to(n){const t=n??{},e=t.Text??null;return{scale:At(t.Scale),text:e?e[0].toUpperCase()+e.slice(1):null,minor_prob:At(t.MinorProb??t.Prob),major_prob:At(t.MajorProb)}}function h4(n){const e=n?.["0"]??null;if(!e)return null;const i=e.DateStamp??null,s=e.TimeStamp??null;return{R:to(e.R),S:to(e.S),G:to(e.G),date:i,time:i?ce(s?`${i}T${s}`:`${i}T00:00:00`):null}}function d4(n,t=8){return fn(n).map(e=>{const i=ce(e.issue_datetime),s=(e.message??"").replace(/\r/g,"");if(!i)return null;const r=s.split(`
`).map(a=>a.trim()).find(a=>/^(ALERT|WARNING|WATCH|SUMMARY|EXTENDED WARNING|CANCEL)/i.test(a))??s.split(`
`).find(a=>a.trim().length>0)?.trim()??"";return{issued:i,product:e.product_id??"",message:s,headline:r}}).filter(e=>e!==null).sort((e,i)=>Date.parse(i.issued)-Date.parse(e.issued)).slice(0,t)}const ws=360,Cr=181;function f4(n){const t=n,e=t?.coordinates;if(!Array.isArray(e)||e.length===0)return null;const i=ce(t?.["Observation Time"]),s=ce(t?.["Forecast Time"]);if(!i||!s)return null;const r=new Uint8Array(ws*Cr);let a=0;for(const o of e){if(!Array.isArray(o)||o.length<3)continue;const l=Number(o[0]),c=Number(o[1]),u=Number(o[2]);if(!Number.isFinite(l)||!Number.isFinite(c)||!Number.isFinite(u))continue;const h=(Math.round(l)%ws+ws)%ws,d=Math.round(c)+90;if(d<0||d>=Cr)continue;const p=Math.max(0,Math.min(100,u));r[h*Cr+d]=p,p>a&&(a=p)}return{observation_time:i,forecast_time:s,max_probability:a,grid:{lon_start:0,lon_step:1,lat_start:-90,lat_step:1,width:ws,height:Cr,values:r}}}function p4(n,t,e){const i=(Math.round(e)%n.width+n.width)%n.width,s=Math.round(t)-n.lat_start;return s<0||s>=n.height?0:n.values[i*n.height+s]??0}function m4(n){const t=fn(n).map(e=>({t:ce(e.time_tag),v:At(e.estimated_kp)})).filter(e=>e.t!==null).sort((e,i)=>Date.parse(e.t)-Date.parse(i.t));return{time:t.map(e=>e.t),value:t.map(e=>e.v)}}function g4(n){const t=fn(n).filter(e=>String(e.energy).startsWith("0.1-0.8")).map(e=>({t:ce(e.time_tag),v:At(e.flux)})).filter(e=>e.t!==null).sort((e,i)=>Date.parse(e.t)-Date.parse(i.t));return{time:t.map(e=>e.t),value:t.map(e=>e.v)}}function As(n,t){if(n.time.length<=t)return n;const e=n.time.length/t,i=[],s=[];for(let r=0;r<t;r++){const a=Math.floor(r*e),o=Math.min(n.time.length,Math.floor((r+1)*e));let l=null,c=a;for(let u=a;u<o;u++){const h=n.value[u];h!=null&&(l===null||Math.abs(h)>Math.abs(l))&&(l=h,c=u)}i.push(n.time[c]??n.time[a]),s.push(l)}return{time:i,value:s}}function _4(n){const t=fn(n);if(t.length===0)return[];let e="";for(const r of t){const a=String(r.observed_date??"");a>e&&(e=a)}if(!e)return[];const i=new Set,s=[];for(const r of t){if(String(r.observed_date)!==e)continue;const a=At(r.region),o=At(r.latitude),l=At(r.longitude);a===null||o===null||l===null||i.has(a)||(i.add(a),s.push({region:a,observed:`${e}T00:00:00.000Z`,lat:o,lon:l,area:At(r.area),spots:At(r.number_spots),spotClass:r.spot_class??null,magClass:r.mag_class??null,cProb:At(r.c_flare_probability),mProb:At(r.m_flare_probability),xProb:At(r.x_flare_probability)}))}return s.sort((r,a)=>(a.area??0)-(r.area??0))}const pl=`${ge}/json/rtsw/rtsw_ephemerides_1h.json`,v4={SOLAR1:"SWFO-L1, NOAA’s operational wind monitor since 2026",DSCOVR:"NOAA, operational 2016–2026, now a backup",ACE:"NASA, launched 1997 and still returning data",IMAP:"NASA, launched 2025 — interstellar mapping, wind as a by-product"};function Lu(n){if(!Array.isArray(n))return[];const t=new Map;for(const i of n){const s=typeof i.source=="string"?i.source:null,r=ce(typeof i.time_tag=="string"?i.time_tag:null);if(!s||!r||At(i.x_gse)===null||At(i.y_gse)===null||At(i.z_gse)===null)continue;const a=Date.parse(r);if(!Number.isFinite(a))continue;const o=t.get(s);(!o||a>o.t)&&t.set(s,{rec:i,t:a,iso:r})}const e=[];for(const[i,{rec:s,iso:r}]of t){const a=At(s.x_gse),o=At(s.y_gse),l=At(s.z_gse),c=Math.hypot(o,l),u=Math.hypot(a,c);e.push({time:r,source:i,active:s.active===!0,gse:{x:a,y:o,z:l},distanceRe:u/ni,offAxisRe:c/ni,offAxisDeg:Math.atan2(c,a)*180/Math.PI})}return e.sort((i,s)=>Number(s.active)-Number(i.active)||i.distanceRe-s.distanceRe),e}function Iu(n,t){const e=n.value;if(!e||e.length<2)return null;const i=m=>t.log?Math.log10(Math.max(m,1e-12)):m,s=[],r=[];for(let m=0;m<e.length;m++){const f=e[m];f==null||!Number.isFinite(f)||t.log&&f<=0||(s.push(m),r.push(i(f)))}if(r.length<2)return null;let a=Math.min(...r),o=Math.max(...r);if(t.rule!==null&&t.rule!==void 0){const m=i(t.rule);a=Math.min(a,m),o=Math.max(o,m)}t.band&&(a=Math.min(a,i(t.band[0])),o=Math.max(o,i(t.band[1])));const l=o-a||1,c=e.length-1,u=1.2,h=m=>m/c*(t.width-u*2)+u,d=m=>t.height-u-(m-a)/l*(t.height-u*2),p=s.map((m,f)=>({x:h(m),y:d(r[f]),v:r[f]}));let _=p[0],g=p[0];for(const m of p)m.v<_.v&&(_=m),m.v>g.v&&(g=m);return{pts:p,min:a,max:o,last:p[p.length-1]??null,lo:_,hi:g,w:t.width,h:t.height}}function x4(n){return n.map((t,e)=>`${e===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join("")}function Yi(n,t={}){const e={width:62,height:15,rule:null,band:null,log:!1,extremes:!1,label:"",className:"",...t},i=Iu(n,e);if(!i)return'<span class="spark-missing" title="no history">—</span>';const s=d=>e.log?Math.log10(Math.max(d,1e-12)):d,r=i.max-i.min||1,a=1.2,o=d=>e.height-a-(d-i.min)/r*(e.height-a*2),l=e.band?`<rect class="spark-band" x="0" y="${o(s(e.band[1])).toFixed(2)}" width="${e.width}"
        height="${Math.max(.5,o(s(e.band[0]))-o(s(e.band[1]))).toFixed(2)}" />`:"",c=e.rule!==null&&e.rule!==void 0?`<line class="spark-rule" x1="0" y1="${o(s(e.rule)).toFixed(2)}" x2="${e.width}" y2="${o(s(e.rule)).toFixed(2)}" />`:"",u=e.extremes?`<circle class="spark-lo" cx="${i.lo.x.toFixed(2)}" cy="${i.lo.y.toFixed(2)}" r="1.3" />
       <circle class="spark-hi" cx="${i.hi.x.toFixed(2)}" cy="${i.hi.y.toFixed(2)}" r="1.3" />`:"",h=i.last?`<circle class="spark-last" cx="${i.last.x.toFixed(2)}" cy="${i.last.y.toFixed(2)}" r="1.6" />`:"";return`<svg class="spark-inline ${e.className}" viewBox="0 0 ${e.width} ${e.height}"
    width="${e.width}" height="${e.height}" role="img" aria-label="${S4(e.label||"trend")}"
    preserveAspectRatio="none">${l}${c}<path class="spark-path" d="${x4(i.pts)}" />${u}${h}</svg>`}function Xn(n,t={}){const e={width:268,height:46,extremes:!0,...t},i=Iu(n,{...e,width:e.width,height:e.height});if(!i)return'<p class="tile-meta">No history loaded.</p>';const s=e.format??(o=>o.toFixed(1)),r=o=>e.log?Math.pow(10,o):o,a=n.time.length>1?Date.parse(n.time[n.time.length-1])-Date.parse(n.time[0]):0;return`${Yi(n,{...e,label:e.label??"history"})}
    <p class="tile-meta">${s(r(i.lo.v))} to ${s(r(i.hi.v))}${e.unit?` ${e.unit}`:""}
    over the last ${M4(a)} · <span class="spark-key-last">●</span> now
    <span class="spark-key-ex">●</span> range</p>`}function M4(n){const t=n/36e5;if(t<48)return`${t.toFixed(0)} h`;const e=t/24;if(e<60)return`${e.toFixed(0)} days`;const i=e/30.44;return i<24?`${i.toFixed(0)} months`:`${(e/365.25).toFixed(0)} years`}function S4(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const $i={particle:'<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="1.6"/><path d="M2 2l3.2 2.6M14 2l-3.2 2.6M2 10l3.2-2.6M14 10l-3.2-2.6"/></svg>',wind:'<svg class="glyph" viewBox="0 0 16 12"><path d="M1 3h8a2 2 0 1 0-2-2M1 6h11a2 2 0 1 1-2 2M1 9h6a1.6 1.6 0 1 1-1.6 1.6"/></svg>',field:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v10M8 1C4 3 2 5 2 6s2 3 6 5M8 1c4 2 6 4 6 5s-2 3-6 5"/></svg>',flare:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v3.4M8 7.6V11M2.6 6h3.2M10.2 6h3.2M4.2 2.4l2.2 2.2M9.6 7.6l2.2 2.2M11.8 2.4L9.6 4.6M6.4 7.6l-2.2 2.2"/></svg>',aurora:'<svg class="glyph" viewBox="0 0 16 12"><path d="M3 11V5c0-2 1-3.4 2.4-3.4M7 11V4.4c0-2 1-3.4 2.4-3.4M11 11V5.4c0-2 1-3.2 2.2-3.2"/></svg>',shield:'<svg class="glyph" viewBox="0 0 16 12"><path d="M12 1C7 1 3 3.2 3 6s4 5 9 5"/><circle cx="13.4" cy="6" r="1.5"/></svg>'},y4='<span class="sentence-missing">no data</span>';function Xi(n,t,e){if(n==null||!Number.isFinite(n))return y4;const i=e==="%"?" tight":"";return`<b class="sentence-num">${n.toFixed(t)}</b><span class="sentence-unit${i}">${e}</span>`}function b4(n){const t=n.now?.data??null,e=t?.solar_wind??null,i=[],s=n.series?{time:n.series.data.time,value:n.series.data.speed}:null,r=n.series?{time:n.series.data.time,value:n.series.data.bz_gsm}:null,a=e?.bz_gsm??null,o=a===null?"in an unknown direction":a<-5?"strongly southward":a<0?"southward":"northward",l=a===null?"":a<0?" &mdash; the orientation that opens Earth&rsquo;s field and lets energy in":" &mdash; the orientation that keeps Earth&rsquo;s field closed";i.push(`${$i.wind} The solar wind is blowing ${s?Yi(s,{label:"wind speed over the last 24 hours"}):""} ${Xi(e?.speed??null,0,"km/s")}, carrying a field that points ${o} ${r?Yi(r,{rule:0,extremes:!0,label:"Bz over the last 24 hours, rule at zero"}):""} ${Xi(a,1,"nT")}${l}.`);const c=t?.magnetopause?.standoff_re??null,u=c===null?"":c<8?", pushed well in":c>11.5?", standing off comfortably":"";i.push(`${$i.shield} It meets the magnetosphere ${Xi(c,1,"R⊕")} out on the sunward side${u}.`);const h=t?.kp?.estimated_kp??null,d=h===null?"of unknown disturbance":h>=5?"storming":h>=4?"unsettled":"quiet";i.push(`${$i.field} The ground beneath is ${d} ${n.kpSeries?Yi(n.kpSeries,{band:[0,4],extremes:!0,label:"Kp over the last 6 hours, quiet band shaded"}):""} ${Xi(h,2,"Kp")}.`);const p=t?.particles??null;if(p){const m=p.proton_10mev;i.push(`${$i.particle} Radiation is at <b class="sentence-num">S${p.s_scale??0}</b>${n.protonSeries?` ${Yi(n.protonSeries,{log:!0,extremes:!0,label:"proton flux above 10 MeV, last 6 hours, logarithmic"})}`:""} ${Xi(m,2,"pfu")}`+(p.s_scale!==null&&p.s_scale>=1?" &mdash; a storm is under way":" &mdash; nothing to worry about")+".")}const _=t?.xray??null,g=n.aurora?.data??null;return i.push(`${$i.flare} The Sun is putting out ${n.xraySeries?Yi(n.xraySeries,{log:!0,extremes:!0,label:"X-ray flux over the last 6 hours, logarithmic"}):""} <b class="sentence-num">${_?.class??"no data"}</b> X-rays, and ${$i.aurora} the aurora is forecast to reach ${Xi(g?.max_probability??null,0,"%")} at its brightest.`),i.join(" ")}function E4(n){const t=n.now?.data??null,e=t?.solar_wind??null,i=(s,r)=>s==null||!Number.isFinite(s)?"no data":s.toFixed(r);return`Solar wind ${i(e?.speed,0)} kilometres per second, interplanetary field Bz ${i(e?.bz_gsm,1)} nanotesla, magnetopause standoff ${i(t?.magnetopause?.standoff_re,1)} Earth radii, planetary K index ${i(t?.kp?.estimated_kp,2)}, X-ray class ${t?.xray?.class??"no data"}, peak aurora probability ${i(n.aurora?.data?.max_probability,0)} percent.`}const qi={kp:`${ge}/products/noaa-planetary-k-index-forecast.json`,probabilities:`${ge}/json/solar_probabilities.json`,threeDay:`${ge}/text/3-day-forecast.txt`,discussion:`${ge}/text/discussion.txt`,flares7:`${ge}/json/goes/primary/xray-flares-7-day.json`,f107:`${ge}/products/summary/10cm-flux.json`},S0=async(n,t)=>{try{const e=await fetch(n,{cache:"no-store",signal:t});return e.ok?await e.text():null}catch{return null}},Pr=async(n,t)=>{try{const e=await fetch(n,{cache:"no-store",signal:t});return e.ok?await e.json():null}catch{return null}};function T4(n){if(!Array.isArray(n))return[];const t=[];for(const e of n){const i=ce(e.time_tag),s=Number(e.kp);if(!i||!Number.isFinite(s))continue;const r=String(e.observed??"").toLowerCase();t.push({time:i,kp:s,kind:r==="observed"?"observed":r==="estimated"?"estimated":"predicted",scale:e.noaa_scale??null})}return t.sort((e,i)=>Date.parse(e.time)-Date.parse(i.time))}function w4(n){if(!Array.isArray(n))return[];const t=e=>{const i=Number(e);return Number.isFinite(i)?i:null};return n.map(e=>({date:String(e.date??"").slice(0,10),c:t(e.c_class_1_day),m:t(e.m_class_1_day),x:t(e.x_class_1_day)})).filter(e=>e.date).sort((e,i)=>i.date.localeCompare(e.date)).slice(0,3)}function A4(n){return Array.isArray(n)?n.map(t=>({begin:ce(t.begin_time)??"",max:ce(t.max_time),maxClass:String(t.max_class??""),region:Number.isFinite(Number(t.current_region))?Number(t.current_region):null})).filter(t=>t.begin&&t.maxClass).sort((t,e)=>Date.parse(e.begin)-Date.parse(t.begin)).slice(0,8):[]}function y0(n){const t=/:Issued:\s*(.+)/.exec(n)?.[1]?.trim()??null,e=n.split(`
`).filter(i=>!/^[:#]/.test(i)).join(`
`).replace(/\n{3,}/g,`

`).trim();return{issued:t,body:e}}async function R4(n){const[t,e,i,s,r,a]=await Promise.all([Pr(qi.kp,n),Pr(qi.probabilities,n),S0(qi.threeDay,n),S0(qi.discussion,n),Pr(qi.flares7,n),Pr(qi.f107,n)]),o=Array.isArray(a)?a[0]:void 0;return{kp:T4(t),odds:w4(e),threeDay:i,discussion:s,flares:A4(r),f107:{value:o&&Number.isFinite(Number(o.flux))?Number(o.flux):null,time:o?ce(o.time_tag):null},fetchedAt:new Date().toISOString()}}const C4=`${ge}/json/solar-cycle/observed-solar-cycle-indices.json`,Dr=n=>{const t=Number(n);return Number.isFinite(t)&&t>=0?t:null};function P4(n){if(!Array.isArray(n)||n.length===0)return null;const t={time:[],value:[]},e={time:[],value:[]},i={time:[],value:[]};let s=null,r=null;for(const a of n){const o=String(a["time-tag"]??"");if(!/^\d{4}-\d{2}$/.test(o))continue;const l=`${o}-01T00:00:00.000Z`,c=Dr(a.ssn);t.time.push(l),t.value.push(c),e.time.push(l),e.value.push(Dr(a.smoothed_ssn)),i.time.push(l),i.value.push(Dr(a["f10.7"])),c!==null&&(!r||c>r.ssn)&&(r={month:o,ssn:c}),s={month:o,ssn:c,f107:Dr(a["f10.7"])}}return t.time.length===0?null:{ssn:t,smoothed:e,f107:i,latest:s,allTimeMax:r}}function D4(n,t){const e=Math.max(0,n.time.length-t);return{time:n.time.slice(e),value:n.value.slice(e)}}async function L4(n){try{const t=await fetch(C4,{cache:"no-store",signal:n});return t.ok?P4(await t.json()):null}catch{return null}}const I4=[[9,"extreme storm"],[8,"severe storm"],[7,"strong storm"],[6,"moderate storm"],[5,"minor storm"],[4,"unsettled"],[0,"quiet"]];function U4(n){if(n===null)return"unknown";for(const[t,e]of I4)if(n>=t)return e;return"quiet"}function N4(n,t){const e=n>=0?"N":"S",i=t>=0?"E":"W";return`${Math.abs(n).toFixed(1)}°${e}, ${Math.abs(t).toFixed(1)}°${i}`}function F4(n,t,e=new Date,i=null,s=[],r=[]){const a=[],o=`${Qt(e.toISOString())} UTC`;n||a.push(`No space-weather data has loaded yet (checked ${o}). The scene below shows body positions only, which are computed locally and do not depend on the network.`);const l=n?.data,c=n?.parts;if(l&&c){const d=Mi(c.solar_wind,e),p=l.solar_wind;if(!p||d.state==="no-data")a.push(`Solar wind: no data. ${c.solar_wind.error?`The feed reported ${c.solar_wind.error}.`:""} Nothing is being substituted for it.`.trim());else{const M=p.bz_gsm,x=M===null?"unknown":M<-5?"strongly southward, which couples energy into the magnetosphere":M<0?"southward":"northward, which keeps the magnetosphere relatively closed";a.push(`Solar wind at L1, measured by ${p.spacecraft??"the active spacecraft"}: Bz ${M===null?"no data":`${M.toFixed(1)} nanotesla`} (${x}); total field ${p.bt===null?"no data":`${p.bt.toFixed(1)} nT`}; speed ${p.speed===null?"no data":`${Math.round(p.speed)} kilometres per second`}; density ${p.density===null?"no data":`${p.density.toFixed(1)} protons per cubic centimetre`}. Measured [E], timestamped ${Qt(p.time)} UTC`+(d.state==="stale"?`, and now STALE — ${xi(d.ageS??0)} old.`:`, ${xi(d.ageS??0)} old.`))}if(l.propagated){const M=l.propagated.lead_minutes,x=r.find(R=>R.active)??null,A=x?`at L1, ${(x.distanceRe*6371.2/1e6).toFixed(2)} million kilometres sunward and ${x.offAxisRe.toFixed(0)} Earth radii off the Sun–Earth line (${x.offAxisDeg.toFixed(1)}°) [E]`:"at L1, about 1.5 million kilometres sunward";a.push(`That wind was measured ${A}, and takes roughly an hour to arrive. NOAA propagates it to the bow shock nose [D · NOAA]: what is reaching Earth right now was observed at ${Qt(l.propagated.observed_at)} UTC, with Bz ${l.propagated.bz===null?"no data":`${l.propagated.bz.toFixed(1)} nT`} and speed ${l.propagated.speed===null?"no data":`${Math.round(l.propagated.speed)} km/s`}. `+(M!==null&&M>0?`There are about ${Math.round(M)} minutes of already-measured wind still in flight — that is the warning currently in hand.`:"No further measured wind is in flight."))}const _=l.geosync;if(_&&_.total_nt!==null){const M=l.magnetopause?.standoff_re??null;a.push(`GOES-${_.satellite??"?"} measures ${_.total_nt.toFixed(0)} nT at geostationary orbit, 6.6 Earth radii out [E], ${Qt(_.time)} UTC`+(_.arcjet?" — though its thruster was firing, so the reading is suspect":"")+`. That is ${_.deficit_nt!==null&&_.deficit_nt>0?`${_.deficit_nt.toFixed(0)} nT below`:"about"} the dipole value for that distance; the difference is the ring current and magnetopause currents subtracting from Earth's own field. `+(M!==null?M<=6.6?"With the modelled boundary inside 6.6 Rₑ, the spacecraft should be out in the solar wind — that is a claim this measurement can falsify.":"The modelled boundary is outside 6.6 Rₑ, so the spacecraft should be inside the magnetosphere, which is what this field says.":""))}const g=l.particles;if(g){const M=g.s_scale===null?"no data":`S${g.s_scale}${g.s_text?` (${g.s_text})`:""}`;a.push(`Energetic particles at geostationary orbit, measured by GOES [E], ${Qt(g.time)} UTC: protons above 10 MeV at ${g.proton_10mev===null?"no data":`${g.proton_10mev.toFixed(2)} pfu`}, radiation storm level ${M}`+(g.s_scale!==null&&g.s_scale>=3?" — at this level aviation crews on polar routes take real dose.":".")+` Electrons above 2 MeV at ${g.electron_2mev===null?"no data":`${Math.round(g.electron_2mev)} pfu`}`+(g.electron_2mev!==null&&g.electron_2mev>=1e3?", above NOAA’s alert level for satellite charging.":", below the level that charges satellites."))}else a.push("Energetic particle flux: no data. No radiation storm level is shown.");const m=Mi(c.kp,e);!l.kp||m.state==="no-data"?a.push("Planetary K index: no data."):a.push(`Planetary K index ${l.kp.estimated_kp===null?"no data":l.kp.estimated_kp.toFixed(2)} — geomagnetic conditions are ${U4(l.kp.estimated_kp)}. Measured [E], ${Qt(l.kp.time)} UTC${m.state==="stale"?" — STALE":""}.`);const f=Mi(c.xray,e);if(!l.xray||f.state==="no-data"?a.push("GOES X-ray flux: no data."):a.push(`Solar X-ray background is class ${l.xray.class??"no data"} (${l.xray.flux_long===null?"no data":`${l.xray.flux_long.toExponential(1)} watts per square metre`}, 0.1–0.8 nanometre band, GOES). Measured [E], ${Qt(l.xray.time)} UTC${f.state==="stale"?" — STALE":""}.`),l.scales){const M=l.scales.G,x=l.scales.R,A=l.scales.S;a.push(`NOAA scales today: radio blackouts R${x.scale??"–"} (${x.text??"no data"}), solar radiation S${A.scale??"–"} (${A.text??"no data"}), geomagnetic storms G${M.scale??"–"} (${M.text??"no data"}). NOAA's own product, modeled [D].`)}else a.push("NOAA R/S/G scales: no data.");const y=l.magnetopause;if(y?.standoff_re!=null){const M=y.standoff_re<9?" That is a compressed magnetosphere — the shield is being pushed in.":y.standoff_re>11.5?" That is an expanded, quiet magnetosphere.":"";a.push(`Modeled [D] magnetopause standoff: ${y.standoff_re.toFixed(1)} Earth radii on the sunward side, with flaring parameter ${y.alpha?.toFixed(2)??"no data"}, computed from the ${l.propagated?"propagated":"L1"} solar wind above (dynamic pressure ${y.dyn_pressure_npa?.toFixed(2)??"no data"} nanopascals) using Shue et al. 1998, doi:10.1029/98JA01103.${M}`+(y.bow_shock_re!=null?` The bow shock stands off at ${y.bow_shock_re.toFixed(1)} Earth radii (Farris & Russell 1994).`:""))}else a.push("Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing. No boundary is drawn.");if(l.alerts.length>0){const M=l.alerts[0];a.push(`Most recent NOAA notice, ${Qt(M.issued)} UTC: ${M.headline||M.product}. ${l.alerts.length} notices in the last three days.`)}else a.push("No NOAA alerts, watches or warnings in the feed.")}const u=s.filter(d=>d.earthDirected&&d.arrival&&Date.parse(d.arrival.time)>e.getTime()).sort((d,p)=>Date.parse(d.arrival.time)-Date.parse(p.arrival.time));if(u.length>0){const d=u[0],p=(Date.parse(d.arrival.time)-e.getTime())/36e5;a.push(`A coronal mass ejection is on its way. NASA's DONKI catalogue analysed it leaving the Sun at ${Math.round(d.speedKms)} km/s on ${Qt(d.time215)} UTC, with a ${Math.round(d.halfAngle)}° half-angle cone pointed ${d.offAxisDeg<5?"almost directly at Earth":`${Math.round(d.offAxisDeg)}° off the Earth line`} [D · NASA]. Propagating it radially at that constant speed puts arrival near ${Qt(d.arrival.time)} UTC, about ${p<24?`${Math.round(p)} hours`:`${(p/24).toFixed(1)} days`} from now, give or take ${d.arrival.windowHours} hours [D · cone]. ${d.arrivalFromEnlil?"That arrival time is NOAA/NASA’s own Enlil run.":"Constant speed ignores drag — real ejections decelerate toward the ambient wind, so fast ones tend to arrive later than this and slow ones earlier. The window is an order-of-magnitude bound, not a fitted error."}${u.length>1?` ${u.length-1} more are also inbound.`:""}`)}else s.length>0&&a.push(`${s.length} coronal mass ejection${s.length>1?"s have":" has"} been analysed in the last few days, none of them Earth-directed with an arrival still ahead of us. Nothing is inbound.`);t.cmes&&t.cmes.count>0&&a.push(`${t.cmes.count} cone${t.cmes.count>1?"s are":" is"} drawn expanding from the Sun [D], warm where Earth lies inside the cone and cool where it does not. The apex direction, half-angle and speed are DONKI's analysis of coronagraph imagery; the radial propagation is ours.`);const h=vu(e);if(a.push(`Scene: the Sun at centre, with Mercury, Venus, Earth and Mars at their true positions for ${o}, computed locally with astronomy-engine [D]. The Sun is currently overhead at ${N4(h.lat,h.lon)}, and Earth's day/night terminator in the scene is drawn from that point [D]. The Moon is shown at its true direction from Earth.`),!t.aurora)a.push("The aurora overlay is hidden.");else if(i?.data){const d=i.data,p=(e.getTime()-Date.parse(d.observation_time))/1e3,_=p>i.stale_after_s;a.push(`Aurora: NOAA's OVATION Prime model [D · NOAA] puts the peak probability of visible aurora at ${d.max_probability}% in this forecast, valid ${Qt(d.forecast_time)} UTC and computed from an observation at ${Qt(d.observation_time)} UTC (${xi(p)} old${_?", STALE":""}). It is drawn as the glowing oval over the poles, on a 1°-by-1° grid, teal through magenta with increasing probability — a legend for intensity, not the aurora's real colours. The oval encircles the magnetic pole, not the geographic one — which is why it sits off-centre.`)}else a.push("Aurora: the OVATION forecast has not loaded, so no oval is drawn.");return t.shield?a.push(`The magnetic shield is drawn: ${t.fieldLines.lines} field lines traced through IGRF-14 (IAGA, epoch 2025.0 with secular variation to now) [D], blue where they close between hemispheres and violet where they stay open toward the solar wind. The teal boundary is the Shue et al. 1998 magnetopause and the orange one the Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. The field lines rotate with the Earth because the main field is fixed to it, and they are clamped where they would cross the magnetopause — so the dayside visibly compresses as pressure rises. That clamp is geometry, not magnetohydrodynamics: a full treatment would also stretch the tail. The boundary surfaces stop at 100° from the sunward axis, inside the range Shue et al. fitted; the real magnetotail continues far beyond.`):a.push("The magnetic shield is hidden."),a.push(`${dl(t.mode)}. Camera: ${t.view} view. ${t.reducedMotion?"Reduced motion is on — the corona is still and camera moves cut rather than glide.":"Motion is enabled."}`),t.wind!==!1&&l?.solar_wind?.speed!=null&&a.push(`The streaming particles are ambient [M] — far sparser and brighter than the real wind, which is invisible. What is real is their behaviour: they move at a rate set by the measured ${Math.round(l.solar_wind.speed)} km/s, their number follows the measured density, and they part around the same modelled magnetopause the HUD reports. When the boundary is pushed in, the flow closes in with it.`),(l?.kp?.estimated_kp??0)>4&&a.push("The field lines are shivering. That is ambient [M] — a legend for the elevated Kp above, not a motion the real field makes."),a.push("Colour, starfield and the corona's texture are ambient [M] — they are parameter-driven artwork, not measurements. The corona's brightness follows the measured X-ray flux; its turbulence does not represent anything physical."),a}const O4=[{id:"report",label:"Now"},{id:"forecast",label:"Ahead"},{id:"sun",label:"Sun"},{id:"sources",label:"Sources"},{id:"checks",label:"Checks"}];function kt(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function z4(n,t,e){const i=F4(n.now,t,e,n.aurora,n.cmes,n.spacecraft?.data??[]);return`
    <h2>Now</h2>
    <p class="state-sentence" aria-hidden="true">${b4(n)}</p>
    <p class="sr-only">${kt(E4(n))}</p>
    <h3>Situation Report</h3>
    ${i.map(s=>`<p>${kt(s)}</p>`).join("")}`}function B4(n){if(n.kp.length===0)return'<p class="tile-meta">No Kp forecast loaded.</p>';const t=n.kp.slice(-40),e=Math.max(5,...t.map(c=>c.kp)),i=268,s=46,r=1,a=(i-r*(t.length-1))/t.length,o=t.map((c,u)=>{const h=c.kp/e*(s-10),d=c.kind==="predicted"?"kp-pred":"kp-obs",p=c.kp>=5?" kp-storm":"";return`<rect class="${d}${p}" x="${(u*(a+r)).toFixed(2)}" y="${(s-10-h).toFixed(2)}"
      width="${a.toFixed(2)}" height="${Math.max(.6,h).toFixed(2)}">
      <title>${Qt(c.time)} UTC — Kp ${c.kp.toFixed(2)} (${c.kind})</title></rect>`}).join(""),l=s-10-5/e*(s-10);return`<svg class="kp-chart" viewBox="0 0 ${i} ${s}" role="img"
      aria-label="Planetary K index, observed and predicted, storm threshold at 5">
      <line class="spark-rule" x1="0" y1="${l.toFixed(2)}" x2="${i}" y2="${l.toFixed(2)}" />
      ${o}</svg>
    <p class="tile-meta"><span class="key-obs">▮</span> observed
      <span class="key-pred">▮</span> predicted · rule at Kp 5, the storm threshold</p>`}function k4(n,t){if(!n)return`<h2>Ahead</h2><p>${t?"Loading NOAA forecasts…":"Forecasts have not loaded."}</p>`;const e=n.threeDay?y0(n.threeDay):null,i=n.discussion?y0(n.discussion):null,s=n.odds[0];return`
    <h2>Ahead</h2>
    <p>Everything below is <span class="badge badge-d">D</span> NOAA's own forecast, not ours.
    Where the forecaster wrote prose, it is reproduced verbatim — a summary of a forecast is
    a different claim from the forecast.</p>

    <h3>Planetary K, observed and predicted</h3>
    ${B4(n)}

    ${s?`<h3>Flare probability, next 24 h</h3>
    <table class="prov"><tbody>
      <tr><td>C class</td><td class="num">${s.c??"—"}%</td>
          <td>common; minor or no effect at the ground</td></tr>
      <tr><td>M class</td><td class="num">${s.m??"—"}%</td>
          <td>radio blackouts on the sunlit side</td></tr>
      <tr><td>X class</td><td class="num">${s.x??"—"}%</td>
          <td>strong blackouts, possible radiation storm</td></tr>
    </tbody></table>
    <p class="tile-meta">Issued for ${kt(s.date)}.</p>`:""}

    ${n.flares.length?`<h3>Recent flares</h3>
    <table class="prov"><tbody>${n.flares.slice(0,6).map(r=>`
      <tr><td class="num">${kt(r.maxClass)}</td>
          <td class="num">${Qt(r.max??r.begin)}</td>
          <td>${r.region?`region ${r.region}`:""}
            <span class="tile-meta">${xi((Date.now()-Date.parse(r.begin))/1e3)} ago</span></td></tr>`).join("")}
    </tbody></table>`:""}

    ${n.f107.value!==null?`<h3>Solar radio flux</h3>
    <p>F10.7 at <b class="sentence-num">${n.f107.value}</b> solar flux units — the standard
    proxy for solar activity and the driver of upper-atmosphere density, so it sets how fast
    satellites in low orbit decay.</p>`:""}

    ${e?`<h3>NOAA 3-day forecast</h3>
    <pre class="product">${kt(e.body)}</pre>
    ${e.issued?`<p class="tile-meta">Issued ${kt(e.issued)}.
      <a href="${V4.threeDay}" rel="noreferrer noopener" target="_blank">Source</a>.</p>`:""}`:""}

    ${i?`<h3>Forecaster discussion</h3>
    <pre class="product">${kt(i.body)}</pre>
    ${i.issued?`<p class="tile-meta">Issued ${kt(i.issued)}.</p>`:""}`:""}`}const V4={threeDay:"https://services.swpc.noaa.gov/text/3-day-forecast.txt"};function H4(n,t){const e=Bl(t);return`<tr>
    <td>${kt(n)}</td>
    <td><span class="badge badge-${e.toLowerCase()}" title="${kt(kl(t))}">${e}</span></td>
    <td><a href="${t.source_url}" rel="noreferrer noopener" target="_blank">${kt(t.source)}</a>${t.model?`<br><span class="tile-meta">${kt(t.model.name)}</span>`:""}</td>
    <td class="num">${t.data_time?Qt(t.data_time):Ae}</td>
    <td class="num">${t.error?`<span class="err">${kt(t.error)}</span>`:t.latency_s===null?Ae:`${t.latency_s}s`}</td>
  </tr>`}function G4(n,t){const e=n.now;if(!e)return"<h2>Provenance</h2><p>No envelope loaded yet.</p>";const i=n.aurora,s=i?`<tr>
    <td>aurora</td>
    <td><span class="badge badge-d">D</span></td>
    <td><a href="${i.source_url}" rel="noreferrer noopener" target="_blank">${kt(i.source)}</a>
      <br><span class="tile-meta">${kt(i.model?.name??"")}</span></td>
    <td class="num">${i.data?Qt(i.data.observation_time):Ae}</td>
    <td class="num">${i.data?`${i.latency_s}s`:Ae}</td>
  </tr>`:"";return`
    <h2>Provenance</h2>
    <p>Every element on screen, its evidence tier, where it came from and how old it is.</p>
    ${t?Uu(t):""}
    <table class="prov">
      <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Time</th><th>Lat.</th></tr></thead>
      <tbody>${Object.entries(e.parts).map(([r,a])=>H4(r,a)).join("")}${s}</tbody>
    </table>
    <h3>Tiers</h3>
    <p><span class="badge badge-e">E</span> Measured — read from an instrument, shown with its
    timestamp and latency.<br>
    <span class="badge badge-d">D</span> Modelled — computed from measured inputs by a named,
    cited model.<br>
    <span class="badge badge-m">M</span> Ambient — artwork. Parameter-driven, sometimes by real
    values, but never itself a measurement.</p>
    ${W4(n.spacecraft?.data??[],n.now?.data.solar_wind?.speed??null)}
    <h3>Models cited</h3>
    <p>Shue et al. 1998 (doi:10.1029/98JA01103) — magnetopause.<br>
    Farris &amp; Russell 1994 — bow shock.<br>
    IGRF-14 (IAGA, epoch 2025.0) — the geomagnetic field and its lines.<br>
    OVATION Prime (NOAA SWPC) — aurora probability.<br>
    astronomy-engine (VSOP87/Meeus) — every position, and the sub-solar point.</p>`}const b0=6371.2;function W4(n,t){if(n.length===0)return"";const e=n.find(o=>o.active)??null,i=n.map(o=>`<tr${o.active?' class="l1-row-active"':""}>
      <td>${kt(o.source)}${o.active?' <span class="tag-live">live</span>':""}</td>
      <td class="num">${o.distanceRe.toFixed(0)}</td>
      <td class="num">${o.offAxisRe.toFixed(1)}</td>
      <td class="num">${o.offAxisDeg.toFixed(1)}°</td>
    </tr>`).join(""),s=n.map(o=>{const l=v4[o.source];return l?`<br><b>${kt(o.source)}</b> — ${kt(l)}`:""}).join("");let r="";if(e&&t&&t>0){const o=e.distanceRe*b0/t/60;r=` At the ${t.toFixed(0)} km/s now measured, the wind it is
      sampling reaches Earth about ${o.toFixed(0)} minutes later.`}const a=e?`<p>${kt(e.source)} is
       ${(e.distanceRe*b0/1e6).toFixed(2)} million km upstream and
       <b>${e.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line</b> —
       ${e.offAxisDeg.toFixed(1)}° away from the direction the wind actually has to
       travel to reach us.${r}</p>
       <p class="fine">The solar wind is structured on scales smaller than that offset, so
       the monitor does not always sample the plasma that arrives. It is the best warning
       there is, and it is not the same thing as a measurement taken here.</p>`:"<p>No spacecraft is currently flagged operational in the ephemeris feed.</p>";return`<h3>The monitors</h3>
    ${a4(n)}
    <p class="fine caption">Looking sunward along the Sun–Earth line. Nothing here is
    compressed — Earth, the Moon’s orbit and the spacecraft offsets are one scale.</p>
    <table class="prov l1-table">
      <thead><tr><th>Craft</th><th>Rₑ out</th><th>Rₑ off</th><th>Angle</th></tr></thead>
      <tbody>${i}</tbody>
    </table>
    ${a}
    <p class="fine">${s.replace(/^<br>/,"")}</p>`}function Uu(n){return`<p><span class="summary-pill ${n.passed===n.rows.length?"ok":"bad"}">${n.passed} / ${n.rows.length} checks pass</span></p>`}function $4(n,t){return t&&!n?"<h2>Checks</h2><p>Comparing our numbers with NOAA’s own, by an independent path…</p>":n?`
    <h2>Checks</h2>
    <p>Our values against NOAA’s own published figures, fetched by a separate path at the
    same timestamp. Drift is a bug, not a rounding preference.</p>
    ${Uu(n)}
    <table class="prov">
      <tbody>
        ${n.rows.map(e=>`
          <tr class="check-row">
            <td colspan="2"><strong>${kt(e.name)}</strong></td>
            <td class="${e.ok?"verdict-ok":"verdict-bad"}">${e.ok?"pass":"DRIFT"}</td>
          </tr>
          <tr class="check-row">
            <td class="num">${kt(e.ours)}</td>
            <td class="tile-meta">vs</td>
            <td class="num">${kt(e.theirs)}</td>
          </tr>
          <tr><td class="check-note" colspan="3">${kt(e.note)}</td></tr>`).join("")}
      </tbody>
    </table>
    <p class="tile-meta">Last run ${Qt(n.ranAt)} UTC.</p>`:"<h2>Checks</h2><p>Not run yet.</p>"}function X4(n,t){return n===null?"unknown size":`~${(n*t/1048576).toFixed(0)} MB`}function q4(n,t){if(!n)return t?'<h3>Solar cycle</h3><p class="tile-meta">Loading the sunspot record…</p>':"";const e=n.latest,i=n.ssn.time.length/12;return`
    <h3>Solar cycle</h3>
    <p>Monthly sunspot number since ${kt(n.ssn.time[0].slice(0,4))} —
    ${Math.round(i)} years, the longest continuous record in science.</p>
    ${Xn(n.ssn,{extremes:!0,format:s=>s.toFixed(0),unit:"spots",label:"monthly sunspot number, full record"})}
    <p>The last three cycles:</p>
    ${Xn(D4(n.ssn,396),{extremes:!0,format:s=>s.toFixed(0),unit:"spots",label:"monthly sunspot number, last 33 years"})}
    <p class="tile-meta">
      ${e?.ssn!==null&&e!==null?`Now <b class="sentence-num">${e.ssn.toFixed(0)}</b>
        for ${kt(e.month)}`:"Latest month unavailable"}${n.allTimeMax?` · record <b class="sentence-num">${n.allTimeMax.ssn.toFixed(0)}</b>
        in ${kt(n.allTimeMax.month)}`:""}.
      <span class="badge badge-e">E</span> NOAA SWPC solar-cycle indices.</p>`}function j4(n,t,e=null,i=!1){const s=t.map(u=>`<button class="ctl" data-loop="${u.id}" aria-pressed="${u.id===n.loopId}">${kt(u.label)}</button>`).join("");if(n.loading&&!n.loop)return`<h2>The Sun</h2><div class="sun-picker">${s}</div><p>Loading frames…</p>`;if(!n.loop)return`<h2>The Sun</h2><div class="sun-picker">${s}</div>
      <p>That imagery did not load. Nothing is shown in its place.</p>`;const r=n.loop,a=r.frames[n.frameIndex]??r.frames[r.frames.length-1],o=Math.round((Date.now()-Date.parse(a.time))/6e4),l=r.frames.length,c=n.preloading?`<span class="tile-meta">Loading ${n.preloaded}/${l} frames…</span>`:n.preloaded>=l?`<button class="ctl" id="sun-play" aria-pressed="${n.playing}">${n.playing?"Pause":"Play"}</button>
         <input type="range" id="sun-scrub" min="0" max="${l-1}" value="${n.frameIndex}" aria-label="Frame" />
         <span class="tile-meta">${n.frameIndex+1}/${l}</span>`:`<button class="ctl" id="sun-play">Load loop · ${l} frames, ${X4(r.frameBytes,l)}</button>`;return`
    <h2>The Sun</h2>
    <div class="sun-picker">${s}</div>
    <div class="sun-frame">
      <img id="sun-img" src="${a.url}" alt="${kt(r.instrument)} image of the Sun at ${Qt(a.time)} UTC" />
      <div class="sun-stamp"><span>${Qt(a.time)} UTC</span><span>${o} min ago</span></div>
    </div>
    <div class="sun-transport">${c}</div>
    <p><span class="badge badge-e">E</span> ${kt(r.instrument)}. ${kt(r.describes)}</p>
    <p class="tile-meta">${r.skippedDropouts>0?`The newest ${r.skippedDropouts} frame${r.skippedDropouts>1?"s were":" was"} a
         data dropout — a valid but near-empty image — so this is the newest usable one. `:"Showing the newest frame. "}Upstream published ${r.totalAvailable} frames
    over ${r.spanHours.toFixed(0)} hours; playback samples ${l} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${r.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>
    ${q4(e,i)}`}function Y4(n,t){if(n.id==="kp"&&t.kpSeries)return Xn(t.kpSeries,{band:[0,4],unit:"Kp",format:i=>i.toFixed(2),label:"Kp history, quiet band shaded"});if(n.id==="geosync"&&t.geosyncSeries)return Xn(t.geosyncSeries,{unit:"nT",format:i=>i.toFixed(0),label:"total field at geostationary orbit"});if(n.id==="protons"&&t.protonSeries)return Xn(t.protonSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(2),label:"proton flux above 10 MeV, logarithmic"});if(n.id==="electrons"&&t.electronSeries)return Xn(t.electronSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(0),label:"electron flux above 2 MeV, logarithmic"});if(n.id==="xray"&&t.xraySeries)return Xn(t.xraySeries,{log:!0,unit:"W/m²",format:i=>i.toExponential(1),label:"X-ray flux history, log scale"});if(!n.series||!t.series)return"";const e=n.series;return Xn({time:t.series.data.time,value:t.series.data[e]},{rule:e==="bz_gsm"?0:null,unit:n.unit,format:i=>e==="speed"?i.toFixed(0):i.toFixed(1),label:`${n.id} history`})}function K4(n,t,e){const i=fl.find(u=>u.id===n);if(!i)return"<p>Unknown instrument.</p>";const s=t.now,r=s?.data??null,a=s?.parts?.[i.part],o=Mi(a,e),l=Bl(a),c=i.value(r);return`
    <h2>${kt(i.label)}</h2>
    <p class="tile-value" style="font-size:1.9rem">
      <span>${kt(c)}</span><span class="tile-unit">${kt(i.unit)}</span>
    </p>
    <p class="tile-meta"><span class="badge badge-${l.toLowerCase()}">${l}</span>
      ${kt(o.label)}</p>
    ${Y4(i,t)}
    <h3>What it means</h3>
    <p>${kt(i.meaning)}</p>
    <h3>Provenance</h3>
    ${a?`<table class="prov"><tbody>
      <tr><td>Tier</td><td>${kt(kl(a))}</td></tr>
      <tr><td>Source</td><td><a href="${a.source_url}" rel="noreferrer noopener" target="_blank">${kt(a.source)}</a></td></tr>
      <tr><td>Data time</td><td class="num">${a.data_time?`${Qt(a.data_time)} UTC`:Ae}</td></tr>
      <tr><td>Latency</td><td class="num">${a.latency_s===null?Ae:`${a.latency_s}s`}</td></tr>
      <tr><td>Stale after</td><td class="num">${Math.round(a.stale_after_s/60)} min</td></tr>
      ${a.error?`<tr><td>Error</td><td class="err">${kt(a.error)}</td></tr>`:""}
    </tbody></table>`:"<p>No provenance recorded.</p>"}`}class Z4{constructor(t){this.cb=t,this.instrumentsEl=document.getElementById("instruments"),this.tickerEl=document.getElementById("ticker"),this.tabsEl=document.getElementById("tabs"),this.bodyEl=document.getElementById("margin-body"),this.statusEl=document.getElementById("status"),this.clockEl=document.getElementById("clock"),this.buildTiles(),this.buildTabs(),this.bindMargin()}cb;instrumentsEl;tickerEl;tabsEl;bodyEl;statusEl;clockEl;tiles=new Map;tab="report";detailId=null;checksRequested=!1;state=null;checks=null;checksRunning=!1;forecast=null;forecastLoading=!1;forecastRequested=!1;cycle=null;cycleLoading=!1;cycleRequested=!1;sun={loop:null,loopId:Vs[0].id,frameIndex:0,playing:!1,loading:!0,preloaded:0,preloading:!1};narration={mode:"globe",view:"deck",reducedMotion:!1,shield:!0,fieldLines:{lines:0,points:0},aurora:!0,cmes:{shown:!0,count:0}};setNarration(t){this.narration=t}setChecks(t,e){this.checks=t,this.checksRunning=e,this.renderMargin()}setCycle(t,e){this.cycle=t,this.cycleLoading=e,this.renderMargin()}setForecast(t,e){this.forecast=t,this.forecastLoading=e,this.renderMargin()}setSunLoop(t,e){this.sun.loop=t,this.sun.loading=e,this.sun.frameIndex=t?t.newestGood:0,this.sun.playing=!1,this.sun.preloaded=0,this.sun.preloading=!1,this.renderMargin()}setSunPreload(t,e){this.sun.preloaded=t,this.sun.preloading=e,this.tab==="sun"&&this.renderMargin()}setSunFrame(t){this.sun.frameIndex=t,this.tab==="sun"&&this.updateSunFrame()}setSunPlaying(t){this.sun.playing=t,this.tab==="sun"&&this.renderMargin()}get sunState(){return this.sun}get activeTab(){return this.tab}buildTiles(){this.instrumentsEl.innerHTML="";for(const i of fl){const s=document.createElement("button");s.className="tile",s.id=`tile-${i.id}`,s.type="button",s.innerHTML=`
        <span class="tile-label">${kt(i.label)}</span>
        <span class="tile-value"><span data-v>—</span><span class="tile-unit">${kt(i.unit)}</span></span>
        <span class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></span>`,s.addEventListener("click",()=>this.openDetail(i.id)),this.tiles.set(i.id,s),this.instrumentsEl.appendChild(s)}const t=document.createElement("div");t.className="tile",t.id="tile-scales",t.innerHTML=`
      <span class="tile-label">NOAA scales</span>
      <span class="scales-row" data-scales></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,this.tiles.set("scales",t),this.instrumentsEl.appendChild(t);const e=document.createElement("button");e.className="tile",e.id="tile-aurora",e.type="button",e.innerHTML=`
      <span class="tile-label">Aurora peak</span>
      <span class="tile-value"><span data-v>—</span><span class="tile-unit">%</span></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,e.addEventListener("click",()=>this.selectTab("report")),this.tiles.set("aurora",e),this.instrumentsEl.appendChild(e)}buildTabs(){this.tabsEl.innerHTML=O4.map(t=>`<button class="tab" role="tab" data-tab="${t.id}" aria-selected="${t.id===this.tab}">${t.label}</button>`).join(""),this.tabsEl.addEventListener("click",t=>{const e=t.target.closest("[data-tab]");e&&this.selectTab(e.dataset.tab)})}bindMargin(){this.bodyEl.addEventListener("click",t=>{const e=t.target,i=e.closest("[data-loop]");if(i){this.cb.onSelectLoop(i.dataset.loop);return}if(e.closest("#sun-play")){this.cb.onToggleSunPlay();return}}),this.bodyEl.addEventListener("input",t=>{const e=t.target;e.id==="sun-scrub"&&this.cb.onScrubSun(Number(e.value))})}selectTab(t){this.tab=t,t!=="detail"&&(this.detailId=null);for(const e of this.tabsEl.querySelectorAll("[data-tab]"))e.setAttribute("aria-selected",String(e.getAttribute("data-tab")===t));for(const[,e]of this.tiles)e.removeAttribute("aria-current");t==="checks"&&!this.checksRequested&&(this.checksRequested=!0,this.cb.onRunChecks()),t==="sun"&&!this.cycleRequested&&(this.cycleRequested=!0,this.cb.onLoadCycle()),t==="forecast"&&!this.forecastRequested&&(this.forecastRequested=!0,this.cb.onLoadForecast()),this.renderMargin()}openDetail(t){this.tab="detail",this.detailId=t;for(const e of this.tabsEl.querySelectorAll("[data-tab]"))e.setAttribute("aria-selected","false");for(const[e,i]of this.tiles)i.tagName==="BUTTON"&&i.setAttribute("aria-current",String(e===t));this.renderMargin(),this.bodyEl.focus()}render(t){this.state=t;const e=new Date,i=t.now,s=i?.data??null;this.clockEl.textContent=`${e.toISOString().slice(0,10)} ${Qt(e.toISOString())} UTC`;for(const p of fl){const _=this.tiles.get(p.id),g=i?.parts?.[p.part],m=Mi(g,e),f=p.value(s);_.classList.toggle("is-stale",m.state==="stale"),_.classList.toggle("is-nodata",m.state==="no-data"||f===Ae),_.querySelector("[data-v]").textContent=f;const y=_.querySelector("[data-badge]"),M=Bl(g);y.textContent=M,y.className=`badge badge-${M.toLowerCase()}`;const x=p.detail?.(s)??"";_.querySelector("[data-time]").textContent=m.state==="fresh"&&x?x:m.state==="fresh"?`${xi(m.ageS??0)} old`:m.label,_.setAttribute("title",`${p.label}: ${f===Ae?"no data":`${f} ${p.unit}`} · ${m.label} · ${kl(g)}`),_.setAttribute("aria-label",`${p.label}: ${f===Ae?"no data":`${f} ${p.unit}`}, ${m.label}. Open detail.`)}const r=this.tiles.get("scales"),a=r.querySelector("[data-scales]"),o=s?.scales;a.innerHTML=o?["R","S","G"].map(p=>{const _=o[p].scale??null;return`<span class="scale-chip scale-${_??"na"}" title="${p} — ${kt(o[p].text??"no data")}">${p}${_??"–"}</span>`}).join(""):Ae,r.querySelector("[data-time]").textContent=Mi(i?.parts?.scales,e).label,r.classList.toggle("is-nodata",!o);const l=this.tiles.get("aurora"),c=t.aurora,u=c?{source:c.source,source_url:c.source_url,model:c.model,data_time:c.data?.observation_time??null,latency_s:c.latency_s,stale_after_s:c.stale_after_s}:void 0,h=Mi(u,e);l.querySelector("[data-v]").textContent=c?.data?String(c.data.max_probability):Ae,l.querySelector("[data-time]").textContent=c?.data?`valid ${Qt(c.data.forecast_time)}`:h.label,l.classList.toggle("is-stale",h.state==="stale"),l.classList.toggle("is-nodata",!c?.data),this.tickerEl.innerHTML='<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';const d=this.tickerEl.querySelector("[data-t]");d.innerHTML=s?.alerts?.length?s.alerts.slice(0,6).map(p=>`<span class="ticker-item">${Qt(p.issued)} ${kt(p.headline||p.product)}</span>`).join(""):`<span class="ticker-item">${s?"No alerts, watches or warnings in the feed.":Ae}</span>`,t.lastError?(this.statusEl.textContent=`Last refresh failed (${t.lastError}) at ${Qt(t.lastAttempt)} UTC. Showing last good data, ageing.`,this.statusEl.classList.add("is-error")):i?(this.statusEl.textContent=`Live · NOAA SWPC · refreshed ${Qt(i.fetched_at)} UTC · DirectSource (stage A)`,this.statusEl.classList.remove("is-error")):this.statusEl.textContent="Fetching live data from NOAA SWPC…",this.renderMargin()}renderMargin(){const t=this.state;if(!t)return;const e=new Date;switch(this.tab){case"report":this.bodyEl.innerHTML=z4(t,this.narration,e);break;case"forecast":this.bodyEl.innerHTML=k4(this.forecast,this.forecastLoading);break;case"sun":this.bodyEl.innerHTML=j4(this.sun,Vs,this.cycle,this.cycleLoading);break;case"sources":this.bodyEl.innerHTML=G4(t,this.checks);break;case"checks":this.bodyEl.innerHTML=$4(this.checks,this.checksRunning);break;case"detail":this.bodyEl.innerHTML=this.detailId?K4(this.detailId,t,e):"";break}}updateSunFrame(){const t=document.getElementById("sun-img"),e=this.sun.loop?.frames[this.sun.frameIndex];if(!t||!e){this.renderMargin();return}t.src=e.url;const i=this.bodyEl.querySelector(".sun-stamp");if(i){const r=Math.round((Date.now()-Date.parse(e.time))/6e4);i.innerHTML=`<span>${Qt(e.time)} UTC</span><span>${r} min ago</span>`}const s=document.getElementById("sun-scrub");s&&document.activeElement!==s&&(s.value=String(this.sun.frameIndex))}}class J4{constructor(t,e=6e4,i=5*6e4){this.source=t,this.intervalMs=e,this.auroraIntervalMs=i}source;intervalMs;auroraIntervalMs;state={now:null,series:null,kpSeries:null,xraySeries:null,protonSeries:null,electronSeries:null,geosyncSeries:null,aurora:null,regions:null,spacecraft:null,cmes:[],lastAttempt:null,lastError:null,loading:!0};listeners=new Set;timer=null;inflight=null;auroraTimer=null;get(){return this.state}subscribe(t){return this.listeners.add(t),t(this.state),()=>this.listeners.delete(t)}emit(t){this.state={...this.state,...t};for(const e of this.listeners)e(this.state)}async refresh(){this.inflight?.abort();const t=new AbortController;this.inflight=t,this.emit({loading:!0});try{const{now:e,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l}=await this.source.fetchSnapshot(t.signal);this.emit({now:e,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,lastAttempt:new Date().toISOString(),lastError:null,loading:!1})}catch(e){if(t.signal.aborted)return;this.emit({lastAttempt:new Date().toISOString(),lastError:e instanceof Error?e.message:String(e),loading:!1})}finally{this.inflight===t&&(this.inflight=null)}}async refreshAurora(){try{this.emit({aurora:await this.source.fetchAurora()})}catch{}try{this.emit({regions:await this.source.fetchRegions()})}catch{}try{this.emit({cmes:await Qg()})}catch{}try{this.emit({spacecraft:await this.source.fetchEphemerides()})}catch{}}start(){this.timer===null&&(this.refresh(),this.refreshAurora(),this.timer=window.setInterval(()=>{this.refresh()},this.intervalMs),this.auroraTimer=window.setInterval(()=>{this.refreshAurora()},this.auroraIntervalMs),document.addEventListener("visibilitychange",this.onVisible))}stop(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.auroraTimer!==null&&(clearInterval(this.auroraTimer),this.auroraTimer=null),document.removeEventListener("visibilitychange",this.onVisible),this.inflight?.abort()}onVisible=()=>{document.visibilityState==="visible"&&(this.refresh(),this.refreshAurora())}}const eo={protons:`${ge}/json/goes/primary/integral-protons-6-hour.json`,electrons:`${ge}/json/goes/primary/integral-electrons-6-hour.json`},Q4=[[5,1e5,"Extreme"],[4,1e4,"Severe"],[3,1e3,"Strong"],[2,100,"Moderate"],[1,10,"Minor"]];function t_(n){if(n===null||!Number.isFinite(n))return null;for(const[t,e,i]of Q4)if(n>=e)return{scale:t,text:i};return{scale:0,text:"None"}}function no(n,t){if(!Array.isArray(n))return null;let e=null,i=-1/0;for(const s of n){if(String(s.energy)!==t)continue;const r=Date.parse(ce(s.time_tag)??"");Number.isFinite(r)&&r>i&&(i=r,e=s)}return e}function E0(n,t){if(!Array.isArray(n))return{time:[],value:[]};const e=n.filter(i=>String(i.energy)===t).map(i=>({t:ce(i.time_tag),v:At(i.flux)})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:e.map(i=>i.t),value:e.map(i=>i.v)}}function e_(n,t){const e=no(n,">=10 MeV"),i=no(n,">=100 MeV"),s=no(t,">=2 MeV");if(!e&&!s)return null;const r=[e,s].map(l=>ce(l?.time_tag)).filter(l=>!!l);if(r.length===0)return null;const a=r.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),o=At(e?.flux);return{time:a,proton10:o,proton100:At(i?.flux),electron2:At(s?.flux),satellite:At(e?.satellite??s?.satellite),s:t_(o)}}const io=`${ge}/products/geospace/propagated-solar-wind-1-hour.json`;function n_(n,t=new Date){if(!Array.isArray(n)||n.length<2)return null;const e=n[0];if(!Array.isArray(e))return null;const i=m=>e.indexOf(m),s=i("time_tag"),r=i("propagated_time_tag");if(s<0||r<0)return null;const a=i("speed"),o=i("density"),l=i("temperature"),c=i("bz"),u=i("bt"),h=[];for(let m=1;m<n.length;m++){const f=n[m];if(!Array.isArray(f))continue;const y=ce(f[s]),M=ce(f[r]);!y||!M||h.push({observedAt:y,arrivesAt:M,speed:At(f[a]),density:At(f[o]),temperature:At(f[l]),bz:At(f[c]),bt:At(f[u])})}if(h.length===0)return null;h.sort((m,f)=>Date.parse(m.arrivesAt)-Date.parse(f.arrivesAt));const d=t.getTime();let p=null;for(const m of h)Date.parse(m.arrivesAt)<=d&&(p=m);p??=h[0];const _=h[h.length-1],g=(Date.parse(_.arrivesAt)-d)/6e4;return{samples:h,arrivingNow:p,leadMinutes:Number.isFinite(g)?g:null}}const T0=`${ge}/json/goes/primary/magnetometers-6-hour.json`,ml=6.6;function Nu(n){const t=Yr[qe(1,0)],e=Yr[qe(1,1)],i=Mu[qe(1,1)];return Math.sqrt(t*t+e*e+i*i)/(n*n*n)}function i_(n){if(!Array.isArray(n))return null;let t=null,e=-1/0;for(const s of n){const r=Date.parse(ce(s.time_tag)??"");Number.isFinite(r)&&r>e&&(e=r,t=s)}const i=ce(t?.time_tag);return!t||!i?null:{time:i,satellite:At(t.satellite),hp:At(t.Hp),he:At(t.He),hn:At(t.Hn),total:At(t.total),arcjet:t.arcjet_flag===!0}}function s_(n,t="total"){if(!Array.isArray(n))return{time:[],value:[]};const e=n.map(i=>({t:ce(i.time_tag),v:At(i[t])})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:e.map(i=>i.t),value:e.map(i=>i.v)}}const $e="NOAA SWPC",Fe={solar_wind:1200,kp:1200,xray:1200,scales:360*60,alerts:10080*60,magnetopause:1200,particles:1800,propagated:1800,geosync:1800,aurora:3600,regions:2160*60,spacecraft:10800},r_=15e3;async function Oe(n,t){const e=new AbortController,i=setTimeout(()=>e.abort(new Error("timeout")),r_),s=()=>e.abort(t?.reason);t?.addEventListener("abort",s,{once:!0});try{const r=await fetch(n,{cache:"no-store",signal:e.signal});return r.ok?{json:await r.json()}:{json:null,error:`HTTP ${r.status}`}}catch(r){return{json:null,error:r instanceof Error?r.message:String(r)}}finally{clearTimeout(i),t?.removeEventListener("abort",s)}}function fi(n,t){if(!t)return null;const e=(Date.parse(n)-Date.parse(t))/1e3;return Number.isFinite(e)?Math.round(e):null}function Rn(n,t,e,i,s,r,a="measured",o=null){return{tier:a,source:i,source_url:s,model:o,data_time:t,latency_s:fi(n,t),stale_after_s:e,...r?{error:r}:{}}}class Fu{name="DirectSource (stage A · browser → NOAA SWPC)";async fetchNow(t){return(await this.fetchSnapshot(t)).now}async fetchSnapshot(t){const[e,i,s,r,a,o,l,c,u,h]=await Promise.all([Oe(he.mag,t),Oe(he.wind,t),Oe(he.kp1m,t),Oe(he.xrays6h,t),Oe(he.scales,t),Oe(he.alerts,t),Oe(eo.protons,t),Oe(eo.electrons,t),Oe(io,t),Oe(T0,t)]),d=new Date().toISOString(),p=e.json||i.json?o4(e.json,i.json):null,_=s.json?l4(s.json):null,g=r.json?u4(r.json):null,m=a.json?h4(a.json):null,f=o.json?d4(o.json):[],y=l.json||c.json?e_(l.json,c.json):null,M=u.json?n_(u.json):null,x=h.json?i_(h.json):null,A=M?.arrivingNow??null,R=Tu(A?.bz??p?.bz_gsm??null,A?.density??p?.density??null,A?.speed??p?.speed??null),P=e.error??i.error,I={solar_wind:Rn(d,p?.time??null,Fe.solar_wind,`${$e} · real-time solar wind (L1)`,he.mag,P),kp:Rn(d,_?.time??null,Fe.kp,`${$e} · planetary K (estimated)`,he.kp1m,s.error),xray:Rn(d,g?.time??null,Fe.xray,`${$e} · GOES XRS (0.1–0.8 nm)`,he.xrays6h,r.error),scales:Rn(d,m?.time??null,Fe.scales,`${$e} · NOAA scales`,he.scales,a.error,"modeled",{name:"NOAA G/S/R scales"}),alerts:Rn(d,f[0]?.issued??null,Fe.alerts,`${$e} · alerts, watches & warnings`,he.alerts,o.error),magnetopause:Rn(d,A?.arrivesAt??p?.time??null,Fe.magnetopause,A?"Earth Star (from SWPC wind propagated to Earth)":"Earth Star (from SWPC solar wind at L1)",A?io:he.mag,P,"modeled",{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}),particles:Rn(d,y?.time??null,Fe.particles,`${$e} · GOES particle detectors`,eo.protons,l.error??c.error),geosync:Rn(d,x?.time??null,Fe.geosync,`${$e} · GOES magnetometer at geostationary orbit`,T0,h.error),propagated:Rn(d,A?.arrivesAt??null,Fe.propagated,`${$e} · solar wind propagated to the bow shock nose`,io,u.error,"modeled",{name:"NOAA SWPC propagation"})},E={solar_wind:p,kp:_,xray:g,scales:m,alerts:f,geosync:x?{time:x.time,satellite:x.satellite,hp_nt:x.hp,total_nt:x.total,deficit_nt:x.total===null?null:Nu(ml)-x.total,arcjet:x.arcjet}:null,particles:y?{time:y.time,proton_10mev:y.proton10,proton_100mev:y.proton100,electron_2mev:y.electron2,satellite:y.satellite,s_scale:y.s?.scale??null,s_text:y.s?.text??null}:null,propagated:A?{observed_at:A.observedAt,arrives_at:A.arrivesAt,speed:A.speed,density:A.density,bz:A.bz,bt:A.bt,lead_minutes:M?.leadMinutes??null}:null,magnetopause:R?{standoff_re:R.r0Re,alpha:R.alpha,bow_shock_re:R.bowShockRe,dyn_pressure_npa:R.dynPressureNPa,model:"Shue1998"}:null},b=Object.values(I).map(W=>W.data_time).filter(W=>!!W).map(W=>Date.parse(W)).filter(Number.isFinite),D=b.length?new Date(Math.min(...b)).toISOString():d,z={source:$e,source_url:"https://services.swpc.noaa.gov/",tier:"mixed",model:null,fetched_at:d,data_time:D,latency_s:fi(d,D)??0,stale_after_s:Fe.solar_wind,units:{bz_gsm:"nT",by_gsm:"nT",bx_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K",estimated_kp:"Kp",flux_long:"W/m^2",flux_short:"W/m^2",standoff_re:"Re",bow_shock_re:"Re",dyn_pressure_npa:"nPa",proton_10mev:"pfu",proton_100mev:"pfu",electron_2mev:"pfu",hp_nt:"nT",total_nt:"nT",deficit_nt:"nT"},data:E,parts:I},O=M0(e.json,i.json),X=O.time[O.time.length-1]??d,G={source:`${$e} · real-time solar wind (L1)`,source_url:he.mag,tier:"measured",model:null,fetched_at:d,data_time:X,latency_s:fi(d,X)??0,stale_after_s:Fe.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:O};return{now:z,series:G,kpSeries:As(m4(s.json),120),xraySeries:As(g4(r.json),120),protonSeries:As(E0(l.json,">=10 MeV"),120),geosyncSeries:As(s_(h.json,"total"),120),electronSeries:As(E0(c.json,">=2 MeV"),120)}}async fetchAurora(t){const e=await Oe(he.aurora,t),i=new Date().toISOString(),s=e.json?f4(e.json):null,r=s?.observation_time??i;return{source:`${$e} · OVATION Prime aurora forecast`,source_url:he.aurora,tier:"modeled",model:{name:"OVATION Prime (NOAA SWPC)"},fetched_at:i,data_time:r,latency_s:fi(i,r)??0,stale_after_s:Fe.aurora,units:{values:"% probability of visible aurora"},data:s}}async fetchRegions(t){const e=await Oe(he.regions,t),i=new Date().toISOString(),s=e.json?_4(e.json):[],r=s[0]?.observed??i;return{source:`${$e} · solar region summary`,source_url:he.regions,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:fi(i,r)??0,stale_after_s:Fe.regions,units:{lat:"deg",lon:"deg from central meridian",area:"millionths of hemisphere"},data:s}}async fetchEphemerides(t){const e=await Oe(pl,t),i=new Date().toISOString(),s=e.json?Lu(e.json):[],r=s.reduce((a,o)=>a===null||o.time>a?o.time:a,null)??i;return{source:`${$e} · RTSW ephemerides`,source_url:pl,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:fi(i,r)??0,stale_after_s:Fe.spacecraft,units:{gse:"km",distanceRe:"Earth radii",offAxisDeg:"deg"},data:s}}async fetchSolarWindSeries(t){const[e,i]=await Promise.all([Oe(he.mag,t),Oe(he.wind,t)]),s=new Date().toISOString(),r=M0(e.json,i.json),a=r.time[r.time.length-1]??s;return{source:`${$e} · real-time solar wind (L1)`,source_url:he.mag,tier:"measured",model:null,fetched_at:s,data_time:a,latency_s:fi(s,a)??0,stale_after_s:Fe.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:r}}}class a_{mq=window.matchMedia("(prefers-reduced-motion: reduce)");listeners=new Set;override=null;constructor(){this.mq.addEventListener("change",()=>this.emit())}get reduced(){return this.override??this.mq.matches}setOverride(t){this.override=t,this.emit()}subscribe(t){return this.listeners.add(t),t(this.reduced),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.reduced)}}const o_=[["1","Deck view"],["2","Magnetosphere view"],["3","Orbit view"],["s","Toggle Globe / True scale"],["m","Toggle reduced motion"],["f","Toggle the magnetic shield"],["a","Toggle the aurora overlay"],["w","Toggle the solar wind stream"],["c","Toggle CME cones"],["r","Refresh data now"],["?","This help"]];function l_(n){const t=e=>{const i=e.target;if(!(e.metaKey||e.ctrlKey||e.altKey)&&!(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))){switch(e.key){case"1":n.deck();break;case"2":n.shieldView();break;case"3":n.orbit();break;case"s":case"S":n.toggleScale();break;case"m":case"M":n.toggleMotion();break;case"f":case"F":n.toggleShield();break;case"a":case"A":n.toggleAurora();break;case"w":case"W":n.toggleWind();break;case"c":case"C":n.toggleCmes();break;case"r":case"R":n.refresh();break;case"?":ii(o_.map(([s,r])=>`${s}: ${r}`).join(". "));break;default:return}e.preventDefault()}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}function ii(n){const t=document.getElementById("scale-announce");t&&(t.textContent=n)}const ji=async(n,t)=>(await fetch(n,{cache:"no-store",signal:t})).json();function w0(n,t,e,i){const s=Math.PI/180,r=(i-t)*s,a=Math.sin(r)*Math.cos(e*s),o=Math.cos(n*s)*Math.sin(e*s)-Math.sin(n*s)*Math.cos(e*s)*Math.cos(r);return(Math.atan2(a,o)*180/Math.PI+360)%360}function Lr(n,t,e){return n===null||t===null||!Number.isFinite(n)||!Number.isFinite(t)?!1:Math.abs(n-t)<=e}async function c_(n){const t=[],e=new Fu,[i,s,r,a,o,l,c]=await Promise.all([e.fetchNow(n),ji(he.summaryMag,n),ji(he.summarySpeed,n),ji(he.xrayFlares,n),e.fetchSolarWindSeries(n),e.fetchAurora(n),ji(pl,n)]),u=i.data,h=s[0],d=r[0],p=(O,X)=>{const G=String(O??"").replace(" ","T").replace(/Z?$/,"Z"),W=Date.parse(G);if(!Number.isFinite(W))return null;const Y=o.data.time.indexOf(new Date(W).toISOString());return Y<0?null:o.data[X][Y]??null},_=Qt(String(h?.time_tag??""));t.push({name:"IMF Bz (GSM), nT",ours:p(h?.time_tag,"bz_gsm")?.toFixed(2)??"no data",theirs:String(h?.bz_gsm??"no data"),ok:Lr(p(h?.time_tag,"bz_gsm"),Number(h?.bz_gsm),.55),note:`both at ${_} UTC · tol ±0.55 (their integer rounding)`}),t.push({name:"IMF total Bt, nT",ours:p(h?.time_tag,"bt")?.toFixed(2)??"no data",theirs:String(h?.bt??"no data"),ok:Lr(p(h?.time_tag,"bt"),Number(h?.bt),.55),note:`both at ${_} UTC · tol ±0.55`}),t.push({name:"Solar wind speed, km/s",ours:p(d?.time_tag,"speed")?.toFixed(1)??"no data",theirs:String(d?.proton_speed??"no data"),ok:Lr(p(d?.time_tag,"speed"),Number(d?.proton_speed),1.5),note:`both at ${Qt(String(d?.time_tag??""))} UTC · tol ±1.5`});const g=c4(a)?.class??"",m=u.xray?.class??Du(u.xray?.flux_long??null);t.push({name:"X-ray class",ours:m??"no data",theirs:g||"no data",ok:!!m&&!!g&&m[0]===g[0]&&Math.abs(parseFloat(m.slice(1))-parseFloat(g.slice(1)))<=.35,note:`our thresholds on our parsed flux (${u.xray?.flux_long?u.xray.flux_long.toExponential(2):"—"} W/m²) vs SWPC's published label. This row caught current_int_xrlong being read as a flux.`});const f=await ji(he.kp1m,n),y=u.kp?.time??null,M=y?f.find(O=>`${String(O.time_tag)}Z`===y.replace(".000Z","Z")||Date.parse(`${String(O.time_tag)}Z`)===Date.parse(y)):void 0;t.push({name:"Planetary Kp (estimated)",ours:u.kp?.estimated_kp?.toFixed(2)??"no data",theirs:M?String(M.estimated_kp):"minute not in feed",ok:!!M&&Lr(u.kp?.estimated_kp??null,Number(M.estimated_kp),.001),note:`both at ${Qt(y)} UTC · exact match required. Checks our newest-record selection against the same minute upstream.`});const x=await ji(he.mag,n),A=x.reduce((O,X)=>Date.parse(`${String(X.time_tag)}Z`)>Date.parse(`${String(O.time_tag)}Z`)?X:O,x[0]),R=[...new Set(x.filter(O=>O.active===!0).map(O=>String(O.source)))];t.push({name:"L1 spacecraft selected",ours:u.solar_wind?.spacecraft??"no data",theirs:R.join(", ")||"none flagged active",ok:!!u.solar_wind?.spacecraft&&R.includes(u.solar_wind.spacecraft),note:`the feed interleaves several spacecraft; newest of ANY source right now is "${String(A.source)}". Taking that instead is the bug this row guards.`});const P=u.geosync,I=u.magnetopause?.standoff_re??null;if(P&&P.total_nt!==null&&I!==null){const O=Nu(ml),X=I>ml,G=P.total_nt>O*.25;t.push({name:"Shield model vs GOES at 6.6 Rₑ",ours:`standoff ${I.toFixed(1)} Rₑ → ${X?"inside":"OUTSIDE"}`,theirs:`${P.total_nt.toFixed(0)} nT → ${G?"inside":"outside"}`,ok:X===G,note:`Dipole at 6.6 Rₑ is ${O.toFixed(0)} nT; GOES-${P.satellite??"?"} reads ${P.total_nt.toFixed(0)} nT, a deficit of ${(O-P.total_nt).toFixed(0)} nT from the ring and magnetopause currents. The check is the agreement of the two verdicts, not the numbers — Shue's boundary and this magnetometer are independent.${P.arcjet?" NOTE: thruster firing, reading suspect.":""}`})}if(l.data){const O=l.data.grid,X=fg(new Date);let G=0,W=0,Y=0,H=0;for(let st=0;st<O.width;st++)for(let Q=45;Q<=89;Q++){const ht=p4(O,Q,st);if(ht<=0)continue;const Lt=Q*Math.PI/180,Xt=st*Math.PI/180;G+=ht*Math.cos(Lt)*Math.cos(Xt),W+=ht*Math.cos(Lt)*Math.sin(Xt),Y+=ht*Math.sin(Lt),H+=ht}if(H>0){const st=Math.sqrt(G*G+W*W+Y*Y),Q=Math.asin(Y/st)*180/Math.PI,ht=Math.atan2(W,G)*180/Math.PI,Lt=dg(Q,ht,X.lat,X.lon),Xt=vu(new Date),ee=(Xt.lon+360)%360-180,Wt=w0(X.lat,X.lon,Q,ht),q=w0(X.lat,X.lon,-Xt.lat,ee),Z=Math.abs((Wt-q+540)%360-180);t.push({name:"Aurora oval displaced toward magnetic midnight",ours:`centroid bears ${Wt.toFixed(0)}° from the pole`,theirs:`midnight bears ${q.toFixed(0)}°`,ok:Z<90&&Lt<25,note:`${Z.toFixed(0)}° apart in bearing — the nightside half — with the centroid ${Lt.toFixed(1)}° from the pole. NOAA's OVATION grid, our IGRF-14 dipole axis and the sub-solar point are three independent computations; a transposed or mirrored grid puts the oval on the dayside and fails here.`})}}else t.push({name:"Aurora oval displaced toward magnetic midnight",ours:"no data",theirs:"—",ok:!1,note:"OVATION grid did not load, so orientation could not be checked"});const E=Lu(c),b=E.find(O=>O.active)?.source??null,D=u.solar_wind?.spacecraft??null,z=E.find(O=>O.active);return t.push({name:"Operational L1 spacecraft",ours:D??"no data",theirs:b??"no data",ok:!!D&&D===b,note:z?`wind/mag feed vs ephemeris feed · ${z.distanceRe.toFixed(0)} Rₑ upstream, ${z.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line`:"wind/mag feed vs ephemeris feed"}),{rows:t,ranAt:new Date().toISOString(),passed:t.filter(O=>O.ok).length}}const u_=document.getElementById("scene"),Kt=new t4(u_),aa=new J4(new Fu,6e4),ds=new a_;let Ou=null;const so=new Map;async function zu(n){const t=Vs.find(i=>i.id===n)??Vs[0];if(de.sunState.loopId=t.id,so.has(t.id)){de.setSunLoop(so.get(t.id)??null,!1);return}de.setSunLoop(null,!0);const e=await n4(t);so.set(t.id,e),de.sunState.loopId===t.id&&de.setSunLoop(e,!1)}function h_(){const n=de.sunState;!n.playing||!n.loop||de.activeTab!=="sun"||n.preloaded<n.loop.frames.length||de.setSunFrame((n.frameIndex+1)%n.loop.frames.length)}async function d_(){const n=de.sunState;if(n.loop){if(n.preloaded>=n.loop.frames.length){de.setSunPlaying(!n.playing);return}n.preloading||(de.setSunPreload(0,!0),await r4(n.loop,t=>de.setSunPreload(t,!0)),de.setSunPreload(n.loop.frames.length,!1),de.setSunPlaying(!0))}}let ro=null;async function f_(){de.setChecks(null,!0);try{ro=await c_()}catch(n){ro={rows:[{name:"Checks could not run",ours:"error",theirs:"—",ok:!1,note:n instanceof Error?n.message:String(n)}],ranAt:new Date().toISOString(),passed:0}}de.setChecks(ro,!1)}let ao=null;async function p_(){de.setForecast(null,!0);try{ao=await R4()}catch{ao=null}de.setForecast(ao,!1)}async function m_(){de.setCycle(null,!0),de.setCycle(await L4(),!1)}const de=new Z4({onSelectLoop:n=>{zu(n)},onLoadCycle:()=>{m_()},onLoadForecast:()=>{p_()},onToggleSunPlay:()=>{d_()},onScrubSun:n=>{de.setSunPlaying(!1),de.setSunFrame(n)},onRunChecks:()=>{f_()}}),Fn=n=>document.getElementById(n),Bu=Fn("view-deck"),ku=Fn("view-shield"),Vu=Fn("view-orbit"),gl=Fn("scale-toggle"),Hu=Fn("motion-toggle"),Gu=Fn("shield-toggle"),Wu=Fn("aurora-toggle"),$u=Fn("wind-toggle"),Xu=Fn("cme-toggle"),g_=document.getElementById("scale-label");let qu="deck";function On(){de.setNarration({mode:Kt.scaleMode,view:qu,reducedMotion:ds.reduced,shield:Kt.shieldOn,fieldLines:Kt.fieldLineStats,aurora:Kt.auroraOn,wind:Kt.windOn,cmes:{shown:Kt.cmesOn,count:Kt.cmeCount}}),de.render(aa.get())}function rs(n){qu=n,Kt.setView(n),Bu.setAttribute("aria-pressed",String(n==="deck")),ku.setAttribute("aria-pressed",String(n==="shield")),Vu.setAttribute("aria-pressed",String(n==="orbit")),ii(`${n==="deck"?"Deck":n==="shield"?"Magnetosphere":"Orbit"} view.`),n==="shield"&&!Kt.shieldOn&&Hl(!0),On()}function Vl(n){Kt.setScaleMode(n),g_.textContent=n==="globe"?"Globe":"True",gl.setAttribute("aria-pressed",String(n==="true")),gl.title=dl(n),ii(dl(n)),On()}function Hl(n){Kt.setShieldVisible(n),Gu.setAttribute("aria-pressed",String(n)),ii(n?"Magnetic field lines and boundaries shown.":"Field hidden."),On()}function ju(n){Kt.setAuroraVisible(n),Wu.setAttribute("aria-pressed",String(n)),ii(n?"Aurora forecast shown.":"Aurora hidden."),On()}function Gl(n){Kt.setWindVisible(n),$u.setAttribute("aria-pressed",String(n)),ii(n?"Solar wind stream shown.":"Solar wind stream hidden."),On()}Bu.addEventListener("click",()=>rs("deck"));ku.addEventListener("click",()=>rs("shield"));Vu.addEventListener("click",()=>rs("orbit"));gl.addEventListener("click",()=>Vl(Kt.scaleMode==="globe"?"true":"globe"));Gu.addEventListener("click",()=>Hl(!Kt.shieldOn));Wu.addEventListener("click",()=>ju(!Kt.auroraOn));$u.addEventListener("click",()=>Gl(!Kt.windOn));function Yu(n){Kt.setCmesVisible(n),Xu.setAttribute("aria-pressed",String(n)),ii(n?"CME cones shown.":"CME cones hidden."),On()}Xu.addEventListener("click",()=>Yu(!Kt.cmesOn));Hu.addEventListener("click",()=>ds.setOverride(!ds.reduced));ds.subscribe(n=>{Kt.setReducedMotion(n),Hu.setAttribute("aria-pressed",String(!n)),On()});l_({deck:()=>rs("deck"),shieldView:()=>rs("shield"),orbit:()=>rs("orbit"),toggleScale:()=>Vl(Kt.scaleMode==="globe"?"true":"globe"),toggleMotion:()=>ds.setOverride(!ds.reduced),toggleShield:()=>Hl(!Kt.shieldOn),toggleAurora:()=>ju(!Kt.auroraOn),toggleWind:()=>Gl(!Kt.windOn),toggleCmes:()=>Yu(!Kt.cmesOn),refresh:()=>{ii("Refreshing."),aa.refresh()},focusReport:()=>de.selectTab("report")});aa.subscribe(n=>{Kt.setNow(n.now?.data??null),Kt.setAurora(n.aurora?.data??null),Kt.setRegions(n.regions?.data??[],n.regions?.data?.[0]?.observed??null),Kt.setCmes(n.cmes),Kt.setSpacecraft(n.spacecraft?.data??[]),On()});window.setInterval(On,3e4);Ou=window.setInterval(h_,220);Vl("globe");Gl(!0);Kt.start();aa.start();zu(Vs[0].id);Object.assign(window,{__viewer:Kt,__stats:()=>Kt.stats,__sunTimer:Ou});
