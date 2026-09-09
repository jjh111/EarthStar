(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Yl="180",ds={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cd=0,Ac=1,Pd=2,T0=1,Dd=2,On=3,hi=0,$e=1,hn=2,ai=0,Di=1,Ze=2,Rc=3,Cc=4,Ld=5,Ti=100,Id=101,Nd=102,Ud=103,Fd=104,Od=200,kd=201,Bd=202,zd=203,Bo=204,zo=205,Vd=206,Hd=207,Gd=208,$d=209,Wd=210,Xd=211,qd=212,jd=213,Yd=214,Vo=0,Ho=1,Go=2,gs=3,$o=4,Wo=5,Xo=6,qo=7,Kl=0,Kd=1,Zd=2,oi=0,Jd=1,Qd=2,tf=3,ef=4,nf=5,sf=6,rf=7,A0=300,_s=301,vs=302,jo=303,Yo=304,Sa=306,Ko=1e3,Ci=1001,Zo=1002,xn=1003,af=1004,fr=1005,Ue=1006,Fa=1007,ii=1008,Rn=1009,R0=1010,C0=1011,Ws=1012,Zl=1013,Ii=1014,zn=1015,sr=1016,Jl=1017,Ql=1018,Xs=1020,P0=35902,D0=35899,L0=1021,I0=1022,vn=1023,qs=1026,js=1027,N0=1028,tc=1029,U0=1030,ec=1031,nc=1033,Qr=33776,ta=33777,ea=33778,na=33779,Jo=35840,Qo=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37808,al=37809,ol=37810,ll=37811,cl=37812,ul=37813,hl=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,vl=37821,xl=36492,Sl=36494,Ml=36495,yl=36283,bl=36284,El=36285,wl=36286,of=3200,lf=3201,F0=0,cf=1,ei="",Ie="srgb",xs="srgb-linear",aa="linear",ae="srgb",Vi=7680,Pc=519,uf=512,hf=513,df=514,O0=515,ff=516,pf=517,mf=518,gf=519,Dc=35044,Lc="300 es",wn=2e3,oa=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,Tl=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function _f(n,t){return(n%t+t)%t}function Oa(n,t,e){return(1-e)*n+e*t}function Cs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vf={DEG2RAD:ia};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,p*b);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const v=o*b;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new P,Ic=new Ni;class Kt{constructor(t,e,i,s,r,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],x=s[4],v=s[7],T=s[2],E=s[5],C=s[8];return r[0]=a*_+o*b+l*T,r[3]=a*m+o*x+l*E,r[6]=a*p+o*v+l*C,r[1]=c*_+u*b+h*T,r[4]=c*m+u*x+h*E,r[7]=c*p+u*v+h*C,r[2]=d*_+f*b+g*T,r[5]=d*m+f*x+g*E,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Kt;function k0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xf(){const n=la("canvas");return n.style.display="block",n}const Nc={};function Ys(n){n in Nc||(Nc[n]=!0,console.warn(n))}function Sf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Uc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){const n={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xs]:{primaries:t,whitePoint:i,transfer:aa,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),n}const ne=Mf();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class yf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hi===void 0&&(Hi=la("canvas")),Hi.width=t.width,Hi.height=t.height;const s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bf=0;class ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(za(s[a].image)):r.push(za(s[a]))}else r=za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;const Va=new P;class Ne extends ki{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Ci,s=Ci,r=Ue,a=ii,o=vn,l=Rn,c=Ne.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=rr(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=A0;Ne.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,T=(p+1)/2,E=(u+d)/4,C=(h+_)/4,L=(g+m)/4;return x>v&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=E/i,r=C/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=L/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ne(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ic(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends wf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class B0 extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),mr.subVectors(this.max,Ps),Gi.subVectors(t.a,Ps),$i.subVectors(t.b,Ps),Wi.subVectors(t.c,Ps),Wn.subVectors($i,Gi),Xn.subVectors(Wi,$i),gi.subVectors(Gi,Wi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-gi.z,gi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,gi.z,0,-gi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-gi.y,gi.x,0];return!Ha(e,Gi,$i,Wi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,Gi,$i,Wi,mr))?!1:(gr.crossVectors(Wn,Xn),e=[gr.x,gr.y,gr.z],Ha(e,Gi,$i,Wi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,pr=new ar,Gi=new P,$i=new P,Wi=new P,Wn=new P,Xn=new P,gi=new P,Ps=new P,mr=new P,gr=new P,_i=new P;function Ha(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){_i.fromArray(n,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Af=new ar,Ds=new P,Ga=new P;class or{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Af.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Ga)),this.expandByPoint(Ds.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ln=new P,$a=new P,_r=new P,qn=new P,Wa=new P,vr=new P,Xa=new P;class Ma{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){$a.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),qn.copy(this.origin).sub($a);const r=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=qn.dot(this.direction),l=-qn.dot(_r),c=qn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($a).addScaledVector(_r,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,s,r){Wa.subVectors(e,t),vr.subVectors(i,t),Xa.crossVectors(Wa,vr);let a=this.direction.dot(Xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(vr.crossVectors(qn,vr));if(l<0)return null;const c=o*this.direction.dot(Wa.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(Xa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,s,r,a,o,l,c,u,h,d,f,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,i,s,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Cf)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),jn.crossVectors(i,en),jn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),jn.crossVectors(i,en)),jn.normalize(),xr.crossVectors(en,jn),s[0]=jn.x,s[4]=xr.x,s[8]=en.x,s[1]=jn.y,s[5]=xr.y,s[9]=en.y,s[2]=jn.z,s[6]=xr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],x=i[7],v=i[11],T=i[15],E=s[0],C=s[4],L=s[8],w=s[12],M=s[1],D=s[5],O=s[9],B=s[13],G=s[2],j=s[6],$=s[10],J=s[14],V=s[3],Q=s[7],tt=s[11],xt=s[15];return r[0]=a*E+o*M+l*G+c*V,r[4]=a*C+o*D+l*j+c*Q,r[8]=a*L+o*O+l*$+c*tt,r[12]=a*w+o*B+l*J+c*xt,r[1]=u*E+h*M+d*G+f*V,r[5]=u*C+h*D+d*j+f*Q,r[9]=u*L+h*O+d*$+f*tt,r[13]=u*w+h*B+d*J+f*xt,r[2]=g*E+_*M+m*G+p*V,r[6]=g*C+_*D+m*j+p*Q,r[10]=g*L+_*O+m*$+p*tt,r[14]=g*w+_*B+m*J+p*xt,r[3]=b*E+x*M+v*G+T*V,r[7]=b*C+x*D+v*j+T*Q,r[11]=b*L+x*O+v*$+T*tt,r[15]=b*w+x*B+v*J+T*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+e*c*h-e*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-e*l*h+e*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,x=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,v=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,T=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,E=e*b+i*x+s*v+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=b*C,t[1]=(_*d*r-h*m*r-_*s*f+i*m*f+h*s*p-i*d*p)*C,t[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*C,t[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*C,t[4]=x*C,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=v*C,t[9]=(g*h*r-u*_*r-g*i*f+e*_*f+u*i*p-e*h*p)*C,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*p+e*o*p)*C,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*f-e*o*f)*C,t[12]=T*C,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*m+e*h*m)*C,t[14]=(g*o*s-a*_*s-g*i*l+e*_*l+a*i*m-e*o*m)*C,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*d+e*o*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,b=l*c,x=l*u,v=l*h,T=i.x,E=i.y,C=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+x)*C,s[9]=(m-b)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,u=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=wn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===wn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===oa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=wn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===wn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===oa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new P,fn=new me,Rf=new P(0,0,0),Cf=new P(1,1,1),jn=new P,xr=new P,en=new P,Oc=new me,kc=new Ni;class Cn{constructor(t=0,e=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class z0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pf=0;const Bc=new P,qi=new Ni,In=new me,Sr=new P,Ls=new P,Df=new P,Lf=new Ni,zc=new P(1,0,0),Vc=new P(0,1,0),Hc=new P(0,0,1),Gc={type:"added"},If={type:"removed"},ji={type:"childadded",child:null},qa={type:"childremoved",child:null};class ze extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new P,e=new Cn,i=new Ni,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sr.copy(t):Sr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ls,Sr,this.up):In.lookAt(Sr,Ls,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(In),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gc),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new P(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new P,Nn=new P,ja=new P,Un=new P,Yi=new P,Ki=new P,$c=new P,Ya=new P,Ka=new P,Za=new P,Ja=new le,Qa=new le,to=new le;class _n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Nn.subVectors(i,e),ja.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Nn),l=pn.dot(ja),c=Nn.dot(Nn),u=Nn.dot(ja),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ja.setScalar(0),Qa.setScalar(0),to.setScalar(0),Ja.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,i),to.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ja,r.x),a.addScaledVector(Qa,r.y),a.addScaledVector(to,r.z),a}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Nn.subVectors(t,e),pn.cross(Nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,i),Ki.subVectors(r,i),Ya.subVectors(t,i);const l=Yi.dot(Ya),c=Ki.dot(Ya);if(l<=0&&c<=0)return e.copy(i);Ka.subVectors(t,s);const u=Yi.dot(Ka),h=Ki.dot(Ka);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Yi,a);Za.subVectors(t,r);const f=Yi.dot(Za),g=Ki.dot(Za);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ki,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return $c.subVectors(r,s),o=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector($c,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(Yi,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function eo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=_f(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=eo(a,r,t+1/3),this.g=eo(a,r,t),this.b=eo(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=V0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.workingToColorSpace(Oe.copy(this),t),Math.round(Jt(Oe.r*255,0,255))*65536+Math.round(Jt(Oe.g*255,0,255))*256+Math.round(Jt(Oe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ie){ne.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Mr);const i=Oa(Yn.h,Mr.h,e),s=Oa(Yn.s,Mr.s,e),r=Oa(Yn.l,Mr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new kt;kt.NAMES=V0;let Nf=0;class Bi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Di,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bo&&(i.blendSrc=this.blendSrc),this.blendDst!==zo&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ts extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new P,yr=new Vt;let Uf=0;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}}class H0 extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class G0 extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ff=0;const un=new me,no=new ze,Zi=new P,nn=new ar,Is=new ar,Le=new P;class xe extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k0(t)?G0:H0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(nn.min,Is.min),nn.expandByPoint(Le),Le.addVectors(nn.max,Is.max),nn.expandByPoint(Le)):(nn.expandByPoint(Is.min),nn.expandByPoint(Is.max))}nn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Le.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),Le.add(Zi)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new P,l[L]=new P;const c=new P,u=new P,h=new P,d=new Vt,f=new Vt,g=new Vt,_=new P,m=new P;function p(L,w,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[L].add(_),o[w].add(_),o[M].add(_),l[L].add(m),l[w].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,w=b.length;L<w;++L){const M=b[L],D=M.start,O=M.count;for(let B=D,G=D+O;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new P,v=new P,T=new P,E=new P;function C(L){T.fromBufferAttribute(s,L),E.copy(T);const w=o[L];x.copy(w),x.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(E,w);const D=v.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,w=b.length;L<w;++L){const M=b[L],D=M.start,O=M.count;for(let B=D,G=D+O;B<G;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wc=new me,vi=new Ma,br=new or,Xc=new P,Er=new P,wr=new P,Tr=new P,io=new P,Ar=new P,qc=new P,Rr=new P;class Re extends ze{constructor(t=new xe,e=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(io.fromBufferAttribute(h,t),a?Ar.addScaledVector(io,u):Ar.addScaledVector(io.sub(e),u))}e.add(Ar)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(br.containsPoint(vi.origin)===!1&&(vi.intersectSphere(br,Xc)===null||vi.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Wc),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=x;v<T;v+=3){const E=o.getX(v),C=o.getX(v+1),L=o.getX(v+2);s=Cr(this,p,t,i,c,u,h,E,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=Cr(this,a,t,i,c,u,h,b,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=x;v<T;v+=3){const E=v,C=v+1,L=v+2;s=Cr(this,p,t,i,c,u,h,E,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,x=m+1,v=m+2;s=Cr(this,a,t,i,c,u,h,b,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Of(n,t,e,i,s,r,a,o){let l;if(t.side===$e?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===hi,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:n}}function Cr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Er),n.getVertexPosition(l,wr),n.getVertexPosition(c,Tr);const u=Of(n,t,e,i,Er,wr,Tr,qc);if(u){const h=new P;_n.getBarycoord(qc,Er,wr,Tr,h),s&&(u.uv=_n.getInterpolatedAttribute(s,o,l,c,h,new Vt)),r&&(u.uv1=_n.getInterpolatedAttribute(r,o,l,c,h,new Vt)),a&&(u.normal=_n.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};_n.getNormal(Er,wr,Tr,d.normal),u.face=d,u.barycoord=h}return u}class lr extends xe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(h,2));function g(_,m,p,b,x,v,T,E,C,L,w){const M=v/C,D=T/L,O=v/2,B=T/2,G=E/2,j=C+1,$=L+1;let J=0,V=0;const Q=new P;for(let tt=0;tt<$;tt++){const xt=tt*D-B;for(let ot=0;ot<j;ot++){const Ct=ot*M-O;Q[_]=Ct*b,Q[m]=xt*x,Q[p]=G,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ot/C),h.push(1-tt/L),J+=1}}for(let tt=0;tt<L;tt++)for(let xt=0;xt<C;xt++){const ot=d+xt+j*tt,Ct=d+xt+j*(tt+1),Ht=d+(xt+1)+j*(tt+1),Gt=d+(xt+1)+j*tt;l.push(ot,Ct,Gt),l.push(Ct,Ht,Gt),V+=6}o.addGroup(f,V,w),f+=V,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=Ss(n[e]);for(const s in i)t[s]=i[s]}return t}function kf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Bf={clone:Ss,merge:Ge};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Je extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class W0 extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new P,jc=new Vt,Yc=new Vt;class sn extends W0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,jc,Yc),e.subVectors(Yc,jc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ia*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Hf extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new sn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const a=new sn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new sn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const l=new sn(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new sn(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class X0 extends Ne{constructor(t=[],e=_s,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gf extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new X0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:ai});r.uniforms.tEquirect.value=e;const a=new Re(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ue),new Hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Ke extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Wf extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ro=new P,Xf=new P,qf=new Kt;class ti{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ro.subVectors(i,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ro),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qf.getNormalMatrix(t),s=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new or,jf=new Vt(.5,.5),Pr=new P;class sc{constructor(t=new ti,e=new ti,i=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],x=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,p-g,T-b).normalize(),s[1].setComponents(c+a,f+u,p+g,T+b).normalize(),s[2].setComponents(c+o,f+h,p+_,T+x).normalize(),s[3].setComponents(c-o,f-h,p-_,T-x).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,T-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,T-v).normalize(),e===wn)s[5].setComponents(c+l,f+d,p+m,T+v).normalize();else if(e===oa)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=jf.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fi extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ca=new P,ua=new P,Kc=new me,Ns=new Ma,Dr=new or,ao=new P,Zc=new P;class ya extends ze{constructor(t=new xe,e=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ca.fromBufferAttribute(e,s-1),ua.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ca.distanceTo(ua);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Kc.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(Kc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),x=Lr(this,t,Ns,l,p,b,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Lr(this,t,Ns,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Lr(this,t,Ns,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Lr(this,t,Ns,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(ca.fromBufferAttribute(o,s),ua.fromBufferAttribute(o,r),e.distanceSqToSegment(ca,ua,ao,Zc)>i)return;ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ao);if(!(c<t.near||c>t.far))return{distance:c,point:Zc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Jc=new P,Qc=new P;class Ks extends ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Jc.fromBufferAttribute(e,s),Qc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jc.distanceTo(Qc);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q0 extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tu=new me,Al=new Ma,Ir=new or,Nr=new P;class Yf extends ze{constructor(t=new xe,e=new q0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;tu.copy(s).invert(),Al.copy(t.ray).applyMatrix4(tu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Nr.fromBufferAttribute(h,m),eu(Nr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Nr.fromBufferAttribute(h,g),eu(Nr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eu(n,t,e,i,s,r,a){const o=Al.distanceSqToPoint(n);if(o<e){const l=new P;Al.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Hs extends Ne{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class j0 extends Ne{constructor(t,e,i=Ii,s,r,a,o=xn,l=xn,c,u=qs,h=1){if(u!==qs&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Y0 extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rc extends xe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new P,v=new P,T=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],v),f(e[E+2],T),l(x,v,T,b)}function l(b,x,v,T){const E=T+1,C=[];for(let L=0;L<=E;L++){C[L]=[];const w=b.clone().lerp(v,L/E),M=x.clone().lerp(v,L/E),D=E-L;for(let O=0;O<=D;O++)O===0&&L===E?C[L][O]=w:C[L][O]=w.clone().lerp(M,O/D)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){const M=Math.floor(w/2);w%2===0?(d(C[L][M+1]),d(C[L+1][M]),d(C[L][M])):(d(C[L][M+1]),d(C[L+1][M+1]),d(C[L+1][M]))}}function c(b){const x=new P;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(b),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const b=new P;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const v=m(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;a.push(v,1-T)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){const x=a[b+0],v=a[b+2],T=a[b+4],E=Math.max(x,v,T),C=Math.min(x,v,T);E>.9&&C<.1&&(x<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,x){const v=b*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const b=new P,x=new P,v=new P,T=new P,E=new Vt,C=new Vt,L=new Vt;for(let w=0,M=0;w<r.length;w+=9,M+=6){b.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),T.copy(b).add(x).add(v).divideScalar(3);const D=m(T);_(E,M+0,b,D),_(C,M+2,x,D),_(L,M+4,v,D)}}function _(b,x,v,T){T<0&&b.x===1&&(a[x]=b.x-1),v.x===0&&v.z===0&&(a[x]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.vertices,t.indices,t.radius,t.details)}}class ac extends rc{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ac(t.radius,t.detail)}}class cr extends xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*d-a;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const x=b+c*p,v=b+c*(p+1),T=b+1+c*(p+1),E=b+1+c*p;f.push(x,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ba extends xe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new P,g=new Vt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const b=p+m,x=b,v=b+i+1,T=b+i+2,E=b+1;o.push(x,v,E),o.push(v,T,E)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class di extends xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const b=[],x=p/i;let v=0;p===0&&a===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const E=T/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-x),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const x=u[p][b+1],v=u[p][b],T=u[p+1][b],E=u[p+1][b+1];(p!==0||a>0)&&f.push(x,v,E),(p!==i-1||l<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class K0 extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F0,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kf extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zf extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Z0 extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const oo=new me,nu=new P,iu=new P;class Jf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new me,Us=new P,lo=new P;class Qf extends Jf{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),i.position.copy(Us),lo.copy(i.position),lo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(lo),i.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),su.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su,i.coordinateSystem,i.reversedDepth)}}class t1 extends Z0{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e1 extends W0{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class n1 extends Z0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class i1 extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}let ru=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class s1 extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function au(n,t,e,i){const s=r1(i);switch(e){case L0:return n*t;case N0:return n*t/s.components*s.byteLength;case tc:return n*t/s.components*s.byteLength;case U0:return n*t*2/s.components*s.byteLength;case ec:return n*t*2/s.components*s.byteLength;case I0:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case nc:return n*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qo:case el:return Math.max(n,16)*Math.max(t,8)/4;case Jo:case tl:return Math.max(n,8)*Math.max(t,8)/2;case nl:case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xl:case Sl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case yl:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case El:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r1(n){switch(n){case Rn:case R0:return{byteLength:1,components:1};case Ws:case C0:case sr:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case Ii:case Zl:case zn:return{byteLength:4,components:1};case P0:case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function J0(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function a1(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var o1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
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
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
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
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,M1=`#ifdef USE_BUMPMAP
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
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P1=`#define PI 3.141592653589793
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
} // validated`,D1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",k1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
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
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,ap=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,Em=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Im=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:o1,alphahash_pars_fragment:l1,alphamap_fragment:c1,alphamap_pars_fragment:u1,alphatest_fragment:h1,alphatest_pars_fragment:d1,aomap_fragment:f1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:_1,beginnormal_vertex:v1,bsdfs:x1,iridescence_fragment:S1,bumpmap_pars_fragment:M1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:w1,color_fragment:T1,color_pars_fragment:A1,color_pars_vertex:R1,color_vertex:C1,common:P1,cube_uv_reflection_fragment:D1,defaultnormal_vertex:L1,displacementmap_pars_vertex:I1,displacementmap_vertex:N1,emissivemap_fragment:U1,emissivemap_pars_fragment:F1,colorspace_fragment:O1,colorspace_pars_fragment:k1,envmap_fragment:B1,envmap_common_pars_fragment:z1,envmap_pars_fragment:V1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:Q1,envmap_vertex:G1,fog_vertex:$1,fog_pars_vertex:W1,fog_fragment:X1,fog_pars_fragment:q1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:Y1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Z1,lights_pars_begin:J1,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:ap,lights_fragment_maps:op,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:xp,morphcolor_vertex:Sp,morphnormal_vertex:Mp,morphtarget_pars_vertex:yp,morphtarget_vertex:bp,normal_fragment_begin:Ep,normal_fragment_maps:wp,normal_pars_fragment:Tp,normal_pars_vertex:Ap,normal_vertex:Rp,normalmap_pars_fragment:Cp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Ip,opaque_fragment:Np,packing:Up,premultiplied_alpha_fragment:Fp,project_vertex:Op,dithering_fragment:kp,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Gp,shadowmap_vertex:$p,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:jp,skinnormal_vertex:Yp,specularmap_fragment:Kp,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Qp,transmission_fragment:tm,transmission_pars_fragment:em,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:sm,worldpos_vertex:rm,background_vert:am,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:um,cube_frag:hm,depth_vert:dm,depth_frag:fm,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:Sm,meshbasic_frag:Mm,meshlambert_vert:ym,meshlambert_frag:bm,meshmatcap_vert:Em,meshmatcap_frag:wm,meshnormal_vert:Tm,meshnormal_frag:Am,meshphong_vert:Rm,meshphong_frag:Cm,meshphysical_vert:Pm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Im,points_vert:Nm,points_frag:Um,shadow_vert:Fm,shadow_frag:Om,sprite_vert:km,sprite_frag:Bm},ut={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},En={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};En.physical={uniforms:Ge([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ur={r:0,b:0,g:0},Si=new Cn,zm=new me;function Vm(n,t,e,i,s,r,a){const o=new kt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const T=g(x);T===null?p(o,l):T&&T.isColor&&(p(T,1),v=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Sa)?(u===void 0&&(u=new Re(new lr(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Ss(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(Si)),u.material.toneMapped=ne.getTransfer(T.colorSpace)!==ae,(h!==T||d!==T.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Re(new cr(2,2),new Je({name:"BackgroundMaterial",uniforms:Ss(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ne.getTransfer(T.colorSpace)!==ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Ur,$0(n)),i.buffers.color.setClear(Ur.r,Ur.g,Ur.b,v,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:b}}function Hm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,D,O,B,G){let j=!1;const $=h(B,O,D);r!==$&&(r=$,c(r.object)),j=f(M,B,O,G),j&&g(M,B,O,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(M,D,O,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,D,O){const B=O.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let j=G[D.id];j===void 0&&(j={},G[D.id]=j);let $=j[B];return $===void 0&&($=d(l()),j[B]=$),$}function d(M){const D=[],O=[],B=[];for(let G=0;G<e;G++)D[G]=0,O[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,D,O,B){const G=r.attributes,j=D.attributes;let $=0;const J=O.getAttributes();for(const V in J)if(J[V].location>=0){const tt=G[V];let xt=j[V];if(xt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),tt===void 0||tt.attribute!==xt||xt&&tt.data!==xt.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(M,D,O,B){const G={},j=D.attributes;let $=0;const J=O.getAttributes();for(const V in J)if(J[V].location>=0){let tt=j[V];tt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));const xt={};xt.attribute=tt,tt&&tt.data&&(xt.data=tt.data),G[V]=xt,$++}r.attributes=G,r.attributesNum=$,r.index=B}function _(){const M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const O=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;O[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),G[M]!==D&&(n.vertexAttribDivisor(M,D),G[M]=D)}function b(){const M=r.newAttributes,D=r.enabledAttributes;for(let O=0,B=D.length;O<B;O++)D[O]!==M[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function x(M,D,O,B,G,j,$){$===!0?n.vertexAttribIPointer(M,D,O,G,j):n.vertexAttribPointer(M,D,O,B,G,j)}function v(M,D,O,B){_();const G=B.attributes,j=O.getAttributes(),$=D.defaultAttributeValues;for(const J in j){const V=j[J];if(V.location>=0){let Q=G[J];if(Q===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const tt=Q.normalized,xt=Q.itemSize,ot=t.get(Q);if(ot===void 0)continue;const Ct=ot.buffer,Ht=ot.type,Gt=ot.bytesPerElement,W=Ht===n.INT||Ht===n.UNSIGNED_INT||Q.gpuType===Zl;if(Q.isInterleavedBufferAttribute){const Y=Q.data,lt=Y.stride,F=Q.offset;if(Y.isInstancedInterleavedBuffer){for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct,Y.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let ct=0;ct<V.locationSize;ct++)x(V.location+ct,xt/V.locationSize,Ht,tt,lt*Gt,(F+xt/V.locationSize*ct)*Gt,W)}else{if(Q.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)p(V.location+Y,Q.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Y=0;Y<V.locationSize;Y++)m(V.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let Y=0;Y<V.locationSize;Y++)x(V.location+Y,xt/V.locationSize,Ht,tt,xt*Gt,xt/V.locationSize*Y*Gt,W)}}else if($!==void 0){const tt=$[J];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(V.location,tt);break;case 3:n.vertexAttrib3fv(V.location,tt);break;case 4:n.vertexAttrib4fv(V.location,tt);break;default:n.vertexAttrib1fv(V.location,tt)}}}}b()}function T(){L();for(const M in i){const D=i[M];for(const O in D){const B=D[O];for(const G in B)u(B[G].object),delete B[G];delete D[O]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const O in D){const B=D[O];for(const G in B)u(B[G].object),delete B[G];delete D[O]}delete i[M.id]}function C(M){for(const D in i){const O=i[D];if(O[M.id]===void 0)continue;const B=O[M.id];for(const G in B)u(B[G].object),delete B[G];delete O[M.id]}}function L(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Gm(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $m(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:E}}function Wm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ti,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,x=b*4;let v=p.clippingState||null;l.value=v,v=u(g,d,x,f);for(let T=0;T!==x;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Xm(n){let t=new WeakMap;function e(a,o){return o===jo?a.mapping=_s:o===Yo&&(a.mapping=vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===jo||o===Yo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gf(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ls=4,ou=[.125,.215,.35,.446,.526,.582],Ai=20,co=new e1,lu=new kt;let uo=null,ho=0,fo=0,po=!1;const bi=(1+Math.sqrt(5))/2,ts=1/bi,cu=[new P(-bi,ts,0),new P(bi,ts,0),new P(-ts,0,bi),new P(ts,0,bi),new P(0,bi,-ts),new P(0,bi,ts),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],qm=new P;class uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=qm}=r;uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,ho,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:sr,format:vn,colorSpace:xs,depthBuffer:!1},s=hu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(r)),this._blurMaterial=Ym(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,i,s,r){const l=new sn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lu),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Ts({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new Re(new lr,_);let p=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(lu),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const T=this._cubeSize;Fr(s,v*T,x>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Fr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,co)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cu[(s-r-1)%cu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let b=0;for(let C=0;C<Ai;++C){const L=C/_,w=Math.exp(-L*L/2);p.push(w),C===0?b+=w:C<m&&(b+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const v=this._sizeLods[s],T=3*v*(s>x-ls?s-x+ls:0),E=4*(this._cubeSize-v);Fr(e,T,E,3*v,2*v),l.setRenderTarget(e),l.render(h,co)}}function jm(n){const t=[],e=[],i=[];let s=n;const r=n-ls+1+ou.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ls?l=ou[a-n+ls-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,L=E>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(w,_*g*E),x.set(d,m*g*E);const M=[E,E,E,E,E,E];v.set(M,p*g*E)}const T=new xe;T.setAttribute("position",new Tn(b,_)),T.setAttribute("uv",new Tn(x,m)),T.setAttribute("faceIndex",new Tn(v,p)),t.push(T),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hu(n,t,e){const i=new Ui(n,t,e);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ym(n,t,e){const i=new Float32Array(Ai),s=new P(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function du(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fu(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function Km(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===jo||l===Yo,u=l===_s||l===vs;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new uu(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new uu(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Zm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jm(n,t,e,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let x=0,v=b.length;x<v;x+=3){const T=b[x+0],E=b[x+1],C=b[x+2];d.push(T,E,E,C,C,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const T=x+0,E=x+1,C=x+2;d.push(T,E,E,C,C,T)}}else return;const m=new(k0(d)?G0:H0)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Qm(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),e.update(f,i,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function t2(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function e2(n,t,e){const i=new WeakMap,s=new le;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*T*4*h),C=new B0(E,v,T,h);C.type=zn,C.needsUpdate=!0;const L=x*4;for(let M=0;M<h;M++){const D=m[M],O=p[M],B=b[M],G=v*T*4*M;for(let j=0;j<D.count;j++){const $=j*L;f===!0&&(s.fromBufferAttribute(D,j),E[G+$+0]=s.x,E[G+$+1]=s.y,E[G+$+2]=s.z,E[G+$+3]=0),g===!0&&(s.fromBufferAttribute(O,j),E[G+$+4]=s.x,E[G+$+5]=s.y,E[G+$+6]=s.z,E[G+$+7]=0),_===!0&&(s.fromBufferAttribute(B,j),E[G+$+8]=s.x,E[G+$+9]=s.y,E[G+$+10]=s.z,E[G+$+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new Vt(v,T)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function n2(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Q0=new Ne,pu=new j0(1,1),th=new B0,eh=new Tf,nh=new X0,mu=[],gu=[],_u=new Float32Array(16),vu=new Float32Array(9),xu=new Float32Array(4);function As(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ea(n,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function i2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function s2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function r2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function a2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function o2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;xu.set(i),n.uniformMatrix2fv(this.addr,!1,xu),Pe(e,i)}}function l2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;vu.set(i),n.uniformMatrix3fv(this.addr,!1,vu),Pe(e,i)}}function c2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;_u.set(i),n.uniformMatrix4fv(this.addr,!1,_u),Pe(e,i)}}function u2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function h2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function d2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function f2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function p2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function m2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function g2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function _2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function v2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=O0,r=pu):r=Q0,e.setTexture2D(t||r,s)}function x2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||eh,s)}function S2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nh,s)}function M2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||th,s)}function y2(n){switch(n){case 5126:return i2;case 35664:return s2;case 35665:return r2;case 35666:return a2;case 35674:return o2;case 35675:return l2;case 35676:return c2;case 5124:case 35670:return u2;case 35667:case 35671:return h2;case 35668:case 35672:return d2;case 35669:case 35673:return f2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return M2}}function b2(n,t){n.uniform1fv(this.addr,t)}function E2(n,t){const e=As(t,this.size,2);n.uniform2fv(this.addr,e)}function w2(n,t){const e=As(t,this.size,3);n.uniform3fv(this.addr,e)}function T2(n,t){const e=As(t,this.size,4);n.uniform4fv(this.addr,e)}function A2(n,t){const e=As(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function R2(n,t){const e=As(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function C2(n,t){const e=As(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function P2(n,t){n.uniform1iv(this.addr,t)}function D2(n,t){n.uniform2iv(this.addr,t)}function L2(n,t){n.uniform3iv(this.addr,t)}function I2(n,t){n.uniform4iv(this.addr,t)}function N2(n,t){n.uniform1uiv(this.addr,t)}function U2(n,t){n.uniform2uiv(this.addr,t)}function F2(n,t){n.uniform3uiv(this.addr,t)}function O2(n,t){n.uniform4uiv(this.addr,t)}function k2(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Q0,r[a])}function B2(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function z2(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nh,r[a])}function V2(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function H2(n){switch(n){case 5126:return b2;case 35664:return E2;case 35665:return w2;case 35666:return T2;case 35674:return A2;case 35675:return R2;case 35676:return C2;case 5124:case 35670:return P2;case 35667:case 35671:return D2;case 35668:case 35672:return L2;case 35669:case 35673:return I2;case 5125:return N2;case 36294:return U2;case 36295:return F2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return z2;case 36289:case 36303:case 36311:case 36292:return V2}}class G2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y2(e.type)}}class $2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H2(e.type)}}class W2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Su(n,t){n.seq.push(t),n.map[t.id]=t}function X2(n,t,e){const i=n.name,s=i.length;for(mo.lastIndex=0;;){const r=mo.exec(i),a=mo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Su(e,c===void 0?new G2(o,n,t):new $2(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new W2(o),Su(e,h)),e=h}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);X2(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Mu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const q2=37297;let j2=0;function Y2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const yu=new Kt;function K2(n){ne._getMatrix(yu,ne.workingColorSpace,n);const t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case aa:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Y2(n.getShaderSource(t),o)}else return r}function Z2(n,t){const e=K2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J2(n,t){let e;switch(t){case Jd:e="Linear";break;case Qd:e="Reinhard";break;case tf:e="Cineon";break;case ef:e="ACESFilmic";break;case sf:e="AgX";break;case rf:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new P;function Q2(){ne.getLuminanceCoefficients(Or);const n=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function e3(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function n3(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function zs(n){return n!==""}function Eu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(i3,r3)}const s3=new Map;function r3(n,t){let e=Zt[t];if(e===void 0){const i=s3.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}const a3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(a3,o3)}function o3(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function l3(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===T0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function c3(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u3(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===vs&&(t="ENVMAP_MODE_REFRACTION"),t}function h3(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Zd:t="ENVMAP_BLENDING_ADD";break}return t}function d3(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function f3(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=l3(e),c=c3(e),u=u3(e),h=h3(e),d=d3(e),f=t3(e),g=e3(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==oi?J2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Z2("linearToOutputTexel",e.outputColorSpace),Q2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=Rl(a),a=Eu(a,e),a=wu(a,e),o=Rl(o),o=Eu(o,e),o=wu(o,e),a=Tu(a),o=Tu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+a,v=b+p+o,T=Mu(s,s.VERTEX_SHADER,x),E=Mu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(E)||"",j=O.trim(),$=B.trim(),J=G.trim();let V=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,E);else{const tt=bu(s,T,"vertex"),xt=bu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+tt+`
`+xt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||J==="")&&(Q=!1);Q&&(D.diagnostics={runnable:V,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(T),s.deleteShader(E),L=new sa(s,_),w=n3(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,q2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let p3=0;class m3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new g3(t),e.set(t,i)),i}}class g3{constructor(t){this.id=p3++,this.code=t,this.usedTimes=0}}function _3(n,t,e,i,s,r,a){const o=new z0,l=new m3,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,O,B){const G=O.fog,j=B.geometry,$=w.isMeshStandardMaterial?O.environment:null,J=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),V=J&&J.mapping===Sa?J.image.height:null,Q=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const tt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=tt!==void 0?tt.length:0;let ot=0;j.morphAttributes.position!==void 0&&(ot=1),j.morphAttributes.normal!==void 0&&(ot=2),j.morphAttributes.color!==void 0&&(ot=3);let Ct,Ht,Gt,W;if(Q){const se=En[Q];Ct=se.vertexShader,Ht=se.fragmentShader}else Ct=w.vertexShader,Ht=w.fragmentShader,l.update(w),Gt=l.getVertexShaderID(w),W=l.getFragmentShaderID(w);const Y=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),F=B.isInstancedMesh===!0,ct=B.isBatchedMesh===!0,qt=!!w.map,Dt=!!w.matcap,R=!!J,Bt=!!w.aoMap,gt=!!w.lightMap,pt=!!w.bumpMap,mt=!!w.normalMap,te=!!w.displacementMap,St=!!w.emissiveMap,Wt=!!w.metalnessMap,De=!!w.roughnessMap,ye=w.anisotropy>0,A=w.clearcoat>0,S=w.dispersion>0,k=w.iridescence>0,q=w.sheen>0,Z=w.transmission>0,X=ye&&!!w.anisotropyMap,Pt=A&&!!w.clearcoatMap,rt=A&&!!w.clearcoatNormalMap,Tt=A&&!!w.clearcoatRoughnessMap,At=k&&!!w.iridescenceMap,it=k&&!!w.iridescenceThicknessMap,ft=q&&!!w.sheenColorMap,$t=q&&!!w.sheenRoughnessMap,Rt=!!w.specularMap,ht=!!w.specularColorMap,Yt=!!w.specularIntensityMap,I=Z&&!!w.transmissionMap,st=Z&&!!w.thicknessMap,at=!!w.gradientMap,Mt=!!w.alphaMap,et=w.alphaTest>0,K=!!w.alphaHash,bt=!!w.extensions;let jt=oi;w.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(jt=n.toneMapping);const de={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:Ct,fragmentShader:Ht,defines:w.defines,customVertexShaderID:Gt,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ct,batchingColor:ct&&B._colorsTexture!==null,instancing:F,instancingColor:F&&B.instanceColor!==null,instancingMorph:F&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:qt,matcap:Dt,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:V,aoMap:Bt,lightMap:gt,bumpMap:pt,normalMap:mt,displacementMap:d&&te,emissiveMap:St,normalMapObjectSpace:mt&&w.normalMapType===cf,normalMapTangentSpace:mt&&w.normalMapType===F0,metalnessMap:Wt,roughnessMap:De,anisotropy:ye,anisotropyMap:X,clearcoat:A,clearcoatMap:Pt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:k,iridescenceMap:At,iridescenceThicknessMap:it,sheen:q,sheenColorMap:ft,sheenRoughnessMap:$t,specularMap:Rt,specularColorMap:ht,specularIntensityMap:Yt,transmission:Z,transmissionMap:I,thicknessMap:st,gradientMap:at,opaque:w.transparent===!1&&w.blending===Di&&w.alphaToCoverage===!1,alphaMap:Mt,alphaTest:et,alphaHash:K,combine:w.combine,mapUv:qt&&_(w.map.channel),aoMapUv:Bt&&_(w.aoMap.channel),lightMapUv:gt&&_(w.lightMap.channel),bumpMapUv:pt&&_(w.bumpMap.channel),normalMapUv:mt&&_(w.normalMap.channel),displacementMapUv:te&&_(w.displacementMap.channel),emissiveMapUv:St&&_(w.emissiveMap.channel),metalnessMapUv:Wt&&_(w.metalnessMap.channel),roughnessMapUv:De&&_(w.roughnessMap.channel),anisotropyMapUv:X&&_(w.anisotropyMap.channel),clearcoatMapUv:Pt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:$t&&_(w.sheenRoughnessMap.channel),specularMapUv:Rt&&_(w.specularMap.channel),specularColorMapUv:ht&&_(w.specularColorMap.channel),specularIntensityMapUv:Yt&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:Mt&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(mt||ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(qt||Mt),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:lt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:qt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===ae,decodeVideoTextureEmissive:St&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hn,flipSided:w.side===$e,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(b(M,w),x(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const M=g[w.type];let D;if(M){const O=En[M];D=Bf.clone(O.uniforms)}else D=w.uniforms;return D}function T(w,M){let D;for(let O=0,B=u.length;O<B;O++){const G=u[O];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new f3(n,M,w,r),u.push(D)),D}function E(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:L}}function v3(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function x3(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ru(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,d,f,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||x3),i.length>1&&i.sort(d||Ru),s.length>1&&s.sort(d||Ru)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function S3(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Cu,n.set(i,[a])):s>=r.length?(a=new Cu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function M3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function y3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let b3=0;function E3(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function w3(n){const t=new M3,e=y3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new me,a=new me;function o(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,x=0,v=0,T=0,E=0,C=0;c.sort(E3);for(let w=0,M=c.length;w<M;w++){const D=c[w],O=D.color,B=D.intensity,G=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*B,h+=O.g*B,d+=O.b*B;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],B);C++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,V=e.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=D.shadow.matrix,b++}i.directional[f]=$,f++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(B),$.distance=G,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[_]=$;const J=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,J.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[_]=J.matrix,D.castShadow){const V=e.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=j,v++}_++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(O).multiplyScalar(B),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const J=D.shadow,V=e.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(B),$.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=C,i.version=b3++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Pu(n){const t=new w3(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function T3(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pu(n),t.set(s,[o])):r>=a.length?(o=new Pu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R3=`uniform sampler2D shadow_pass;
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
}`;function C3(n,t,e){let i=new sc;const s=new Vt,r=new Vt,a=new le,o=new Kf({depthPacking:lf}),l=new Zf,c={},u=e.maxTextureSize,h={[hi]:$e,[$e]:hi,[hn]:hn},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:A3,fragmentShader:R3}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T0;let p=this.type;this.render=function(E,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==On&&this.type===On,G=p===On&&this.type!==On;for(let j=0,$=E.length;j<$;j++){const J=E[j],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();if(s.multiply(Q),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){const xt=this.type!==On?{minFilter:xn,magFilter:xn}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(s.x,s.y,xt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const tt=V.getViewportCount();for(let xt=0;xt<tt;xt++){const ot=V.getViewport(xt);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),O.viewport(a),V.updateMatrices(J,xt),i=V.getFrustum(),v(C,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===On&&b(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,D)};function b(E,C){const L=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ui(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,L,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,L,f,_,null)}function x(E,C,L,w){let M=null;const D=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,B=C.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let j=G[B];j===void 0&&(j=M.clone(),G[B]=j,C.addEventListener("dispose",T)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,w===On?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=L}return M}function v(E,C,L,w,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===On)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const B=t.update(E),G=E.material;if(Array.isArray(G)){const j=B.groups;for(let $=0,J=j.length;$<J;$++){const V=j[$],Q=G[V.materialIndex];if(Q&&Q.visible){const tt=x(E,Q,w,M);E.onBeforeShadow(n,E,C,L,B,tt,V),n.renderBufferDirect(L,null,B,tt,E,V),E.onAfterShadow(n,E,C,L,B,tt,V)}}}else if(G.visible){const j=x(E,G,w,M);E.onBeforeShadow(n,E,C,L,B,j,null),n.renderBufferDirect(L,null,B,j,E,null),E.onAfterShadow(n,E,C,L,B,j,null)}}const O=E.children;for(let B=0,G=O.length;B<G;B++)v(O[B],C,L,w,M)}function T(E){E.target.removeEventListener("dispose",T);for(const L in c){const w=c[L],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const P3={[Vo]:Ho,[Go]:Xo,[$o]:qo,[gs]:Wo,[Ho]:Vo,[Xo]:Go,[qo]:$o,[Wo]:gs};function D3(n,t){function e(){let I=!1;const st=new le;let at=null;const Mt=new le(0,0,0,0);return{setMask:function(et){at!==et&&!I&&(n.colorMask(et,et,et,et),at=et)},setLocked:function(et){I=et},setClear:function(et,K,bt,jt,de){de===!0&&(et*=jt,K*=jt,bt*=jt),st.set(et,K,bt,jt),Mt.equals(st)===!1&&(n.clearColor(et,K,bt,jt),Mt.copy(st))},reset:function(){I=!1,at=null,Mt.set(-1,0,0,0)}}}function i(){let I=!1,st=!1,at=null,Mt=null,et=null;return{setReversed:function(K){if(st!==K){const bt=t.get("EXT_clip_control");K?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),st=K;const jt=et;et=null,this.setClear(jt)}},getReversed:function(){return st},setTest:function(K){K?Y(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(K){at!==K&&!I&&(n.depthMask(K),at=K)},setFunc:function(K){if(st&&(K=P3[K]),Mt!==K){switch(K){case Vo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Go:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=K}},setLocked:function(K){I=K},setClear:function(K){et!==K&&(st&&(K=1-K),n.clearDepth(K),et=K)},reset:function(){I=!1,at=null,Mt=null,et=null,st=!1}}}function s(){let I=!1,st=null,at=null,Mt=null,et=null,K=null,bt=null,jt=null,de=null;return{setTest:function(se){I||(se?Y(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(se){st!==se&&!I&&(n.stencilMask(se),st=se)},setFunc:function(se,Pn,Mn){(at!==se||Mt!==Pn||et!==Mn)&&(n.stencilFunc(se,Pn,Mn),at=se,Mt=Pn,et=Mn)},setOp:function(se,Pn,Mn){(K!==se||bt!==Pn||jt!==Mn)&&(n.stencilOp(se,Pn,Mn),K=se,bt=Pn,jt=Mn)},setLocked:function(se){I=se},setClear:function(se){de!==se&&(n.clearStencil(se),de=se)},reset:function(){I=!1,st=null,at=null,Mt=null,et=null,K=null,bt=null,jt=null,de=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,T=null,E=null,C=new kt(0,0,0),L=0,w=!1,M=null,D=null,O=null,B=null,G=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=J>=2);let Q=null,tt={};const xt=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),Ct=new le().fromArray(xt),Ht=new le().fromArray(ot);function Gt(I,st,at,Mt){const et=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<at;bt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,et):n.texImage2D(st+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,et);return K}const W={};W[n.TEXTURE_2D]=Gt(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),a.setFunc(gs),pt(!1),mt(Ac),Y(n.CULL_FACE),Bt(ai);function Y(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function lt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function F(I,st){return h[I]!==st?(n.bindFramebuffer(I,st),h[I]=st,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=st),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=st),!0):!1}function ct(I,st){let at=f,Mt=!1;if(I){at=d.get(st),at===void 0&&(at=[],d.set(st,at));const et=I.textures;if(at.length!==et.length||at[0]!==n.COLOR_ATTACHMENT0){for(let K=0,bt=et.length;K<bt;K++)at[K]=n.COLOR_ATTACHMENT0+K;at.length=et.length,Mt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(at)}function qt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Dt={[Ti]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Nd]:n.FUNC_REVERSE_SUBTRACT};Dt[Ud]=n.MIN,Dt[Fd]=n.MAX;const R={[Od]:n.ZERO,[kd]:n.ONE,[Bd]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[Wd]:n.SRC_ALPHA_SATURATE,[Gd]:n.DST_COLOR,[Vd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[$d]:n.ONE_MINUS_DST_COLOR,[Hd]:n.ONE_MINUS_DST_ALPHA,[Xd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[jd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function Bt(I,st,at,Mt,et,K,bt,jt,de,se){if(I===ai){_===!0&&(lt(n.BLEND),_=!1);return}if(_===!1&&(Y(n.BLEND),_=!0),I!==Ld){if(I!==m||se!==w){if((p!==Ti||v!==Ti)&&(n.blendEquation(n.FUNC_ADD),p=Ti,v=Ti),se)switch(I){case Di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ze:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ze:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,x=null,T=null,E=null,C.set(0,0,0),L=0,m=I,w=se}return}et=et||st,K=K||at,bt=bt||Mt,(st!==p||et!==v)&&(n.blendEquationSeparate(Dt[st],Dt[et]),p=st,v=et),(at!==b||Mt!==x||K!==T||bt!==E)&&(n.blendFuncSeparate(R[at],R[Mt],R[K],R[bt]),b=at,x=Mt,T=K,E=bt),(jt.equals(C)===!1||de!==L)&&(n.blendColor(jt.r,jt.g,jt.b,de),C.copy(jt),L=de),m=I,w=!1}function gt(I,st){I.side===hn?lt(n.CULL_FACE):Y(n.CULL_FACE);let at=I.side===$e;st&&(at=!at),pt(at),I.blending===Di&&I.transparent===!1?Bt(ai):Bt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Mt=I.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),St(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function mt(I){I!==Cd?(Y(n.CULL_FACE),I!==D&&(I===Ac?n.cullFace(n.BACK):I===Pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),D=I}function te(I){I!==O&&($&&n.lineWidth(I),O=I)}function St(I,st,at){I?(Y(n.POLYGON_OFFSET_FILL),(B!==st||G!==at)&&(n.polygonOffset(st,at),B=st,G=at)):lt(n.POLYGON_OFFSET_FILL)}function Wt(I){I?Y(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function De(I){I===void 0&&(I=n.TEXTURE0+j-1),Q!==I&&(n.activeTexture(I),Q=I)}function ye(I,st,at){at===void 0&&(Q===null?at=n.TEXTURE0+j-1:at=Q);let Mt=tt[at];Mt===void 0&&(Mt={type:void 0,texture:void 0},tt[at]=Mt),(Mt.type!==I||Mt.texture!==st)&&(Q!==at&&(n.activeTexture(at),Q=at),n.bindTexture(I,st||W[I]),Mt.type=I,Mt.texture=st)}function A(){const I=tt[Q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(I){Ct.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ct.copy(I))}function $t(I){Ht.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ht.copy(I))}function Rt(I,st){let at=c.get(st);at===void 0&&(at=new WeakMap,c.set(st,at));let Mt=at.get(I);Mt===void 0&&(Mt=n.getUniformBlockIndex(st,I.name),at.set(I,Mt))}function ht(I,st){const Mt=c.get(st).get(I);l.get(st)!==Mt&&(n.uniformBlockBinding(st,Mt,I.__bindingPointIndex),l.set(st,Mt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,tt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,T=null,E=null,C=new kt(0,0,0),L=0,w=!1,M=null,D=null,O=null,B=null,G=null,Ct.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:lt,bindFramebuffer:F,drawBuffers:ct,useProgram:qt,setBlending:Bt,setMaterial:gt,setFlipSided:pt,setCullFace:mt,setLineWidth:te,setPolygonOffset:St,setScissorTest:Wt,activeTexture:De,bindTexture:ye,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:At,texImage3D:it,updateUBOMapping:Rt,uniformBlockBinding:ht,texStorage2D:rt,texStorage3D:Tt,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Pt,scissor:ft,viewport:$t,reset:Yt}}function L3(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):la("canvas")}function _(A,S,k){let q=1;const Z=ye(A);if((Z.width>k||Z.height>k)&&(q=k/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*Z.width),Pt=Math.floor(q*Z.height);h===void 0&&(h=g(X,Pt));const rt=S?g(X,Pt):h;return rt.width=X,rt.height=Pt,rt.getContext("2d").drawImage(A,0,0,X,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Pt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,S,k,q,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===n.RED&&(k===n.FLOAT&&(X=n.R32F),k===n.HALF_FLOAT&&(X=n.R16F),k===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.R8UI),k===n.UNSIGNED_SHORT&&(X=n.R16UI),k===n.UNSIGNED_INT&&(X=n.R32UI),k===n.BYTE&&(X=n.R8I),k===n.SHORT&&(X=n.R16I),k===n.INT&&(X=n.R32I)),S===n.RG&&(k===n.FLOAT&&(X=n.RG32F),k===n.HALF_FLOAT&&(X=n.RG16F),k===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RG8UI),k===n.UNSIGNED_SHORT&&(X=n.RG16UI),k===n.UNSIGNED_INT&&(X=n.RG32UI),k===n.BYTE&&(X=n.RG8I),k===n.SHORT&&(X=n.RG16I),k===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGB8UI),k===n.UNSIGNED_SHORT&&(X=n.RGB16UI),k===n.UNSIGNED_INT&&(X=n.RGB32UI),k===n.BYTE&&(X=n.RGB8I),k===n.SHORT&&(X=n.RGB16I),k===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),k===n.UNSIGNED_INT&&(X=n.RGBA32UI),k===n.BYTE&&(X=n.RGBA8I),k===n.SHORT&&(X=n.RGBA16I),k===n.INT&&(X=n.RGBA32I)),S===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),S===n.RGBA){const Pt=Z?aa:ne.getTransfer(q);k===n.FLOAT&&(X=n.RGBA32F),k===n.HALF_FLOAT&&(X=n.RGBA16F),k===n.UNSIGNED_BYTE&&(X=Pt===ae?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,S){let k;return A?S===null||S===Ii||S===Xs?k=n.DEPTH24_STENCIL8:S===zn?k=n.DEPTH32F_STENCIL8:S===Ws&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ii||S===Xs?k=n.DEPTH_COMPONENT24:S===zn?k=n.DEPTH_COMPONENT32F:S===Ws&&(k=n.DEPTH_COMPONENT16),k}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==Ue?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),L(S),S.isVideoTexture&&u.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),M(S)}function L(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,q=d.get(k);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(A),Object.keys(q).length===0&&d.delete(k)}i.remove(A)}function w(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const k=A.source,q=d.get(k);delete q[S.__cacheKey],a.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let q=0,Z=k.length;q<Z;q++){const X=i.get(k[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(k[q])}i.remove(A)}let D=0;function O(){D=0}function B(){const A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function G(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){const k=i.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function $(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){W(k,A,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function J(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){W(k,A,S);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function V(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Y(k,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const Q={[Ko]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},tt={[xn]:n.NEAREST,[af]:n.NEAREST_MIPMAP_NEAREST,[fr]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},xt={[uf]:n.NEVER,[gf]:n.ALWAYS,[hf]:n.LESS,[O0]:n.LEQUAL,[df]:n.EQUAL,[mf]:n.GEQUAL,[ff]:n.GREATER,[pf]:n.NOTEQUAL};function ot(A,S){if(S.type===zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ue||S.magFilter===Fa||S.magFilter===fr||S.magFilter===ii||S.minFilter===Ue||S.minFilter===Fa||S.minFilter===fr||S.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Q[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Q[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Q[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,tt[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==fr&&S.minFilter!==ii||S.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const q=S.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const X=G(S);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[X].usedTimes++;const Pt=Z[A.__cacheKey];Pt!==void 0&&(Z[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(S)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return k}function Ht(A,S,k){return Math.floor(Math.floor(A/k)/S)}function Gt(A,S,k,q){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,k,q,S.data);else{X.sort((it,ft)=>it.start-ft.start);let Pt=0;for(let it=1;it<X.length;it++){const ft=X[Pt],$t=X[it],Rt=ft.start+ft.count,ht=Ht($t.start,S.width,4),Yt=Ht(ft.start,S.width,4);$t.start<=Rt+1&&ht===Yt&&Ht($t.start+$t.count-1,S.width,4)===ht?ft.count=Math.max(ft.count,$t.start+$t.count-ft.start):(++Pt,X[Pt]=$t)}X.length=Pt+1;const rt=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),At=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let it=0,ft=X.length;it<ft;it++){const $t=X[it],Rt=Math.floor($t.start/4),ht=Math.ceil($t.count/4),Yt=Rt%S.width,I=Math.floor(Rt/S.width),st=ht,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Yt,I,st,at,k,q,S.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function W(A,S,k){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Ct(A,S),X=S.source;e.bindTexture(q,A.__webglTexture,n.TEXTURE0+k);const Pt=i.get(X);if(X.version!==Pt.__version||Z===!0){e.activeTexture(n.TEXTURE0+k);const rt=ne.getPrimaries(ne.workingColorSpace),Tt=S.colorSpace===ei?null:ne.getPrimaries(S.colorSpace),At=S.colorSpace===ei||rt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let it=_(S.image,!1,s.maxTextureSize);it=De(S,it);const ft=r.convert(S.format,S.colorSpace),$t=r.convert(S.type);let Rt=x(S.internalFormat,ft,$t,S.colorSpace,S.isVideoTexture);ot(q,S);let ht;const Yt=S.mipmaps,I=S.isVideoTexture!==!0,st=Pt.__version===void 0||Z===!0,at=X.dataReady,Mt=T(S,it);if(S.isDepthTexture)Rt=v(S.format===js,S.type),st&&(I?e.texStorage2D(n.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Rt,it.width,it.height,0,ft,$t,null));else if(S.isDataTexture)if(Yt.length>0){I&&st&&e.texStorage2D(n.TEXTURE_2D,Mt,Rt,Yt[0].width,Yt[0].height);for(let et=0,K=Yt.length;et<K;et++)ht=Yt[et],I?at&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,$t,ht.data):e.texImage2D(n.TEXTURE_2D,et,Rt,ht.width,ht.height,0,ft,$t,ht.data);S.generateMipmaps=!1}else I?(st&&e.texStorage2D(n.TEXTURE_2D,Mt,Rt,it.width,it.height),at&&Gt(S,it,ft,$t)):e.texImage2D(n.TEXTURE_2D,0,Rt,it.width,it.height,0,ft,$t,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Rt,Yt[0].width,Yt[0].height,it.depth);for(let et=0,K=Yt.length;et<K;et++)if(ht=Yt[et],S.format!==vn)if(ft!==null)if(I){if(at)if(S.layerUpdates.size>0){const bt=au(ht.width,ht.height,S.format,S.type);for(const jt of S.layerUpdates){const de=ht.data.subarray(jt*bt/ht.data.BYTES_PER_ELEMENT,(jt+1)*bt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,jt,ht.width,ht.height,1,ft,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,it.depth,ft,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Rt,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,it.depth,ft,$t,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Rt,ht.width,ht.height,it.depth,0,ft,$t,ht.data)}else{I&&st&&e.texStorage2D(n.TEXTURE_2D,Mt,Rt,Yt[0].width,Yt[0].height);for(let et=0,K=Yt.length;et<K;et++)ht=Yt[et],S.format!==vn?ft!==null?I?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Rt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,$t,ht.data):e.texImage2D(n.TEXTURE_2D,et,Rt,ht.width,ht.height,0,ft,$t,ht.data)}else if(S.isDataArrayTexture)if(I){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Rt,it.width,it.height,it.depth),at)if(S.layerUpdates.size>0){const et=au(it.width,it.height,S.format,S.type);for(const K of S.layerUpdates){const bt=it.data.subarray(K*et/it.data.BYTES_PER_ELEMENT,(K+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ft,$t,bt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,$t,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,ft,$t,it.data);else if(S.isData3DTexture)I?(st&&e.texStorage3D(n.TEXTURE_3D,Mt,Rt,it.width,it.height,it.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,$t,it.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,ft,$t,it.data);else if(S.isFramebufferTexture){if(st)if(I)e.texStorage2D(n.TEXTURE_2D,Mt,Rt,it.width,it.height);else{let et=it.width,K=it.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Rt,et,K,0,ft,$t,null),et>>=1,K>>=1}}else if(Yt.length>0){if(I&&st){const et=ye(Yt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Rt,et.width,et.height)}for(let et=0,K=Yt.length;et<K;et++)ht=Yt[et],I?at&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ft,$t,ht):e.texImage2D(n.TEXTURE_2D,et,Rt,ft,$t,ht);S.generateMipmaps=!1}else if(I){if(st){const et=ye(it);e.texStorage2D(n.TEXTURE_2D,Mt,Rt,et.width,et.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,$t,it)}else e.texImage2D(n.TEXTURE_2D,0,Rt,ft,$t,it);m(S)&&p(q),Pt.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,k){if(S.image.length!==6)return;const q=Ct(A,S),Z=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const X=i.get(Z);if(Z.version!==X.__version||q===!0){e.activeTexture(n.TEXTURE0+k);const Pt=ne.getPrimaries(ne.workingColorSpace),rt=S.colorSpace===ei?null:ne.getPrimaries(S.colorSpace),Tt=S.colorSpace===ei||Pt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!At&&!it?ft[K]=_(S.image[K],!0,s.maxCubemapSize):ft[K]=it?S.image[K].image:S.image[K],ft[K]=De(S,ft[K]);const $t=ft[0],Rt=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),Yt=x(S.internalFormat,Rt,ht,S.colorSpace),I=S.isVideoTexture!==!0,st=X.__version===void 0||q===!0,at=Z.dataReady;let Mt=T(S,$t);ot(n.TEXTURE_CUBE_MAP,S);let et;if(At){I&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Yt,$t.width,$t.height);for(let K=0;K<6;K++){et=ft[K].mipmaps;for(let bt=0;bt<et.length;bt++){const jt=et[bt];S.format!==vn?Rt!==null?I?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,0,0,jt.width,jt.height,Rt,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,Yt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,0,0,jt.width,jt.height,Rt,ht,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,Yt,jt.width,jt.height,0,Rt,ht,jt.data)}}}else{if(et=S.mipmaps,I&&st){et.length>0&&Mt++;const K=ye(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(it){I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Rt,ht,ft[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,ft[K].width,ft[K].height,0,Rt,ht,ft[K].data);for(let bt=0;bt<et.length;bt++){const de=et[bt].image[K].image;I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,0,0,de.width,de.height,Rt,ht,de.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,Yt,de.width,de.height,0,Rt,ht,de.data)}}else{I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,ht,ft[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Rt,ht,ft[K]);for(let bt=0;bt<et.length;bt++){const jt=et[bt];I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,0,0,Rt,ht,jt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,Yt,Rt,ht,jt.image[K])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),X.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,k,q,Z,X){const Pt=r.convert(k.format,k.colorSpace),rt=r.convert(k.type),Tt=x(k.internalFormat,Pt,rt,k.colorSpace),At=i.get(S),it=i.get(k);if(it.__renderTarget=S,!At.__hasExternalTextures){const ft=Math.max(1,S.width>>X),$t=Math.max(1,S.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,Tt,ft,$t,S.depth,0,Pt,rt,null):e.texImage2D(Z,X,Tt,ft,$t,0,Pt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),St(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,it.__webglTexture,0,te(S)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,it.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function F(A,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,X=v(S.stencilBuffer,Z),Pt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=te(S);St(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,X,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,A)}else{const q=S.textures;for(let Z=0;Z<q.length;Z++){const X=q[Z],Pt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),Tt=x(X.internalFormat,Pt,rt,X.colorSpace),At=te(S);k&&St(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Tt,S.width,S.height):St(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,Tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const Z=q.__webglTexture,X=te(S);if(S.depthTexture.format===qs)St(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(S.depthTexture.format===js)St(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function qt(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?ct(S.__webglFramebuffer[0],A):ct(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),F(S.__webglDepthbuffer[q],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),F(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(A,S,k){const q=i.get(A);S!==void 0&&lt(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&qt(A)}function R(A){const S=A.texture,k=i.get(A),q=i.get(S);A.addEventListener("dispose",C);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,Pt=Z.length>1;if(Pt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,a.memory.textures++),X){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)k.__webglFramebuffer[rt][Tt]=n.createFramebuffer()}else k.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)k.__webglFramebuffer[rt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let rt=0,Tt=Z.length;rt<Tt;rt++){const At=i.get(Z[rt]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&St(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const Tt=Z[rt];k.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);const At=r.convert(Tt.format,Tt.colorSpace),it=r.convert(Tt.type),ft=x(Tt.internalFormat,At,it,Tt.colorSpace,A.isXRRenderTarget===!0),$t=te(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,k.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),F(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ot(n.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)lt(k.__webglFramebuffer[rt][Tt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt);else lt(k.__webglFramebuffer[rt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let rt=0,Tt=Z.length;rt<Tt;rt++){const At=Z[rt],it=i.get(At);let ft=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),ot(ft,At),lt(k.__webglFramebuffer,A,At,n.COLOR_ATTACHMENT0+rt,ft,0),m(At)&&p(ft)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),ot(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)lt(k.__webglFramebuffer[Tt],A,S,n.COLOR_ATTACHMENT0,rt,Tt);else lt(k.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,rt,0);m(S)&&p(rt),e.unbindTexture()}A.depthBuffer&&qt(A)}function Bt(A){const S=A.textures;for(let k=0,q=S.length;k<q;k++){const Z=S[k];if(m(Z)){const X=b(A),Pt=i.get(Z).__webglTexture;e.bindTexture(X,Pt),p(X),e.unbindTexture()}}}const gt=[],pt=[];function mt(A){if(A.samples>0){if(St(A)===!1){const S=A.textures,k=A.width,q=A.height;let Z=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(A),rt=S.length>1;if(rt)for(let At=0;At<S.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Tt=A.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const it=i.get(S[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,k,q,0,0,k,q,Z,n.NEAREST),l===!0&&(gt.length=0,pt.length=0,gt.push(n.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(gt.push(X),pt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let At=0;At<S.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const it=i.get(S[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function te(A){return Math.min(s.maxSamples,A.samples)}function St(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function De(A,S){const k=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==xs&&k!==ei&&(ne.getTransfer(k)===ae?(q!==vn||Z!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Dt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=St}function I3(n,t){function e(i,s=ei){let r;const a=ne.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===P0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===D0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===R0)return n.BYTE;if(i===C0)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===sr)return n.HALF_FLOAT;if(i===L0)return n.ALPHA;if(i===I0)return n.RGB;if(i===vn)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===N0)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===U0)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===Qr||i===ta||i===ea||i===na)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jo||i===Qo||i===tl||i===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rl||i===al||i===ol||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xl||i===Sl||i===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xl)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yl||i===bl||i===El||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const N3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
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

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Y0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Je({vertexShader:N3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O3 extends ki{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new F3,p={},b=e.getContextAttributes();let x=null,v=null;const T=[],E=[],C=new Vt;let L=null;const w=new sn;w.viewport=new le;const M=new sn;M.viewport=new le;const D=[w,M],O=new i1;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=T[W];return Y===void 0&&(Y=new so,T[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=T[W];return Y===void 0&&(Y=new so,T[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=T[W];return Y===void 0&&(Y=new so,T[W]=Y),Y.getHandSpace()};function j(W){const Y=E.indexOf(W.inputSource);if(Y===-1)return;const lt=T[Y];lt!==void 0&&(lt.update(W.inputSource,W.frame,c||a),lt.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",J);for(let W=0;W<T.length;W++){const Y=E[W];Y!==null&&(E[W]=null,T[W].disconnect(Y))}B=null,G=null,m.reset();for(const W in p)delete p[W];t.setRenderTarget(x),f=null,d=null,h=null,s=null,v=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",$),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,F=null,ct=null;b.depth&&(ct=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=b.stencil?js:qs,F=b.stencil?Xs:Ii);const qt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ui(d.textureWidth,d.textureHeight,{format:vn,type:Rn,depthTexture:new j0(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const lt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ui(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(W){for(let Y=0;Y<W.removed.length;Y++){const lt=W.removed[Y],F=E.indexOf(lt);F>=0&&(E[F]=null,T[F].disconnect(lt))}for(let Y=0;Y<W.added.length;Y++){const lt=W.added[Y];let F=E.indexOf(lt);if(F===-1){for(let qt=0;qt<T.length;qt++)if(qt>=E.length){E.push(lt),F=qt;break}else if(E[qt]===null){E[qt]=lt,F=qt;break}if(F===-1)break}const ct=T[F];ct&&ct.connect(lt)}}const V=new P,Q=new P;function tt(W,Y,lt){V.setFromMatrixPosition(Y.matrixWorld),Q.setFromMatrixPosition(lt.matrixWorld);const F=V.distanceTo(Q),ct=Y.projectionMatrix.elements,qt=lt.projectionMatrix.elements,Dt=ct[14]/(ct[10]-1),R=ct[14]/(ct[10]+1),Bt=(ct[9]+1)/ct[5],gt=(ct[9]-1)/ct[5],pt=(ct[8]-1)/ct[0],mt=(qt[8]+1)/qt[0],te=Dt*pt,St=Dt*mt,Wt=F/(-pt+mt),De=Wt*-pt;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(Wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ct[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ye=Dt+Wt,A=R+Wt,S=te-De,k=St+(F-De),q=Bt*R/A*ye,Z=gt*R/A*ye;W.projectionMatrix.makePerspective(S,k,q,Z,ye,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function xt(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Y=W.near,lt=W.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),O.near=M.near=w.near=Y,O.far=M.far=w.far=lt,(B!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,G=O.far),O.layers.mask=W.layers.mask|6,w.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const F=W.parent,ct=O.cameras;xt(O,F);for(let qt=0;qt<ct.length;qt++)xt(ct[qt],F);ct.length===2?tt(O,w,M):O.projectionMatrix.copy(w.projectionMatrix),ot(W,O,F)};function ot(W,Y,lt){lt===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(lt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Tl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(W){return p[W]};let Ct=null;function Ht(W,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const lt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let F=!1;lt.length!==O.cameras.length&&(O.cameras.length=0,F=!0);for(let R=0;R<lt.length;R++){const Bt=lt[R];let gt=null;if(f!==null)gt=f.getViewport(Bt);else{const mt=h.getViewSubImage(d,Bt);gt=mt.viewport,R===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let pt=D[R];pt===void 0&&(pt=new sn,pt.layers.enable(R),pt.viewport=new le,D[R]=pt),pt.matrix.fromArray(Bt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Bt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(gt.x,gt.y,gt.width,gt.height),R===0&&(O.matrix.copy(pt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),F===!0&&O.cameras.push(pt)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const R=h.getDepthInformation(lt[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ct&&ct.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let R=0;R<lt.length;R++){const Bt=lt[R].camera;if(Bt){let gt=p[Bt];gt||(gt=new Y0,p[Bt]=gt);const pt=h.getCameraImage(Bt);gt.sourceTexture=pt}}}}for(let lt=0;lt<T.length;lt++){const F=E[lt],ct=T[lt];F!==null&&ct!==void 0&&ct.update(F,Y,c||a)}Ct&&Ct(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Gt=new J0;Gt.setAnimationLoop(Ht),this.setAnimationLoop=function(W){Ct=W},this.dispose=function(){}}}const Mi=new Cn,k3=new me;function B3(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),x=b.envMap,v=b.envMapRotation;x&&(m.envMap.value=x,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(k3.makeRotationFromEuler(Mi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function z3(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;i.uniformBlockBinding(b,v)}function c(b,x){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(b,T);const E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function u(b){const x=h();b.__bindingPointIndex=x;const v=n.createBuffer(),T=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],v=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,C=v.length;E<C;E++){const L=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,M=L.length;w<M;w++){const D=L[w];if(f(D,E,w,T)===!0){const O=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let j=0;j<B.length;j++){const $=B[j],J=_($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,O+G,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,x,v,T){const E=b.value,C=x+"_"+v;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{const L=T[C];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return T[C]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(b){const x=b.uniforms;let v=0;const T=16;for(let C=0,L=x.length;C<L;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,D=w.length;M<D;M++){const O=w[M],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,j=B.length;G<j;G++){const $=B[G],J=_($),V=v%T,Q=V%J.boundary,tt=V+Q;v+=Q,tt!==0&&T-tt<J.storage&&(v+=T-tt),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=J.storage}}}const E=v%T;return E>0&&(v+=T-E),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class V3{constructor(t={}){const{canvas:e=xf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Ie;let E=0,C=0,L=null,w=-1,M=null;const D=new le,O=new le;let B=null;const G=new kt(0);let j=0,$=e.width,J=e.height,V=1,Q=null,tt=null;const xt=new le(0,0,$,J),ot=new le(0,0,$,J);let Ct=!1;const Ht=new sc;let Gt=!1,W=!1;const Y=new me,lt=new P,F=new le,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Dt(){return L===null?V:1}let R=i;function Bt(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",et,!1),R===null){const N="webgl2";if(R=Bt(N,y),R===null)throw Bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let gt,pt,mt,te,St,Wt,De,ye,A,S,k,q,Z,X,Pt,rt,Tt,At,it,ft,$t,Rt,ht,Yt;function I(){gt=new Zm(R),gt.init(),Rt=new I3(R,gt),pt=new $m(R,gt,t,Rt),mt=new D3(R,gt),pt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),te=new t2(R),St=new v3,Wt=new L3(R,gt,mt,St,pt,Rt,te),De=new Xm(v),ye=new Km(v),A=new a1(R),ht=new Hm(R,A),S=new Jm(R,A,te,ht),k=new n2(R,S,A,te),it=new e2(R,pt,Wt),rt=new Wm(St),q=new _3(v,De,ye,gt,pt,ht,rt),Z=new B3(v,St),X=new S3,Pt=new T3(gt),At=new Vm(v,De,ye,mt,k,f,l),Tt=new C3(v,k,pt),Yt=new z3(R,te,pt,mt),ft=new Gm(R,gt,te),$t=new Qm(R,gt,te),te.programs=q.programs,v.capabilities=pt,v.extensions=gt,v.properties=St,v.renderLists=X,v.shadowMap=Tt,v.state=mt,v.info=te}I();const st=new O3(v,R);this.xr=st,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize($,J,!1))},this.getSize=function(y){return y.set($,J)},this.setSize=function(y,N,z=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,J=N,e.width=Math.floor(y*V),e.height=Math.floor(N*V),z===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set($*V,J*V).floor()},this.setDrawingBufferSize=function(y,N,z){$=y,J=N,V=z,e.width=Math.floor(y*z),e.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(xt)},this.setViewport=function(y,N,z,H){y.isVector4?xt.set(y.x,y.y,y.z,y.w):xt.set(y,N,z,H),mt.viewport(D.copy(xt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(ot)},this.setScissor=function(y,N,z,H){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,N,z,H),mt.scissor(O.copy(ot).multiplyScalar(V).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(y){mt.setScissorTest(Ct=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){tt=y},this.getClearColor=function(y){return y.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,z=!0){let H=0;if(y){let U=!1;if(L!==null){const nt=L.texture.format;U=nt===nc||nt===ec||nt===tc}if(U){const nt=L.texture.type,dt=nt===Rn||nt===Ii||nt===Ws||nt===Xs||nt===Jl||nt===Ql,yt=At.getClearColor(),_t=At.getClearAlpha(),zt=yt.r,Xt=yt.g,Lt=yt.b;dt?(g[0]=zt,g[1]=Xt,g[2]=Lt,g[3]=_t,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=zt,_[1]=Xt,_[2]=Lt,_[3]=_t,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),z&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),At.dispose(),X.dispose(),Pt.dispose(),St.dispose(),De.dispose(),ye.dispose(),k.dispose(),ht.dispose(),Yt.dispose(),q.dispose(),st.dispose(),st.removeEventListener("sessionstart",Mn),st.removeEventListener("sessionend",Mc),pi.stop()};function at(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=te.autoReset,N=Tt.enabled,z=Tt.autoUpdate,H=Tt.needsUpdate,U=Tt.type;I(),te.autoReset=y,Tt.enabled=N,Tt.autoUpdate=z,Tt.needsUpdate=H,Tt.type=U}function et(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const N=y.target;N.removeEventListener("dispose",K),bt(N)}function bt(y){jt(y),St.remove(y)}function jt(y){const N=St.get(y).programs;N!==void 0&&(N.forEach(function(z){q.releaseProgram(z)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,H,U,nt){N===null&&(N=ct);const dt=U.isMesh&&U.matrixWorld.determinant()<0,yt=bd(y,N,z,H,U);mt.setMaterial(H,dt);let _t=z.index,zt=1;if(H.wireframe===!0){if(_t=S.getWireframeAttribute(z),_t===void 0)return;zt=2}const Xt=z.drawRange,Lt=z.attributes.position;let Qt=Xt.start*zt,re=(Xt.start+Xt.count)*zt;nt!==null&&(Qt=Math.max(Qt,nt.start*zt),re=Math.min(re,(nt.start+nt.count)*zt)),_t!==null?(Qt=Math.max(Qt,0),re=Math.min(re,_t.count)):Lt!=null&&(Qt=Math.max(Qt,0),re=Math.min(re,Lt.count));const Se=re-Qt;if(Se<0||Se===1/0)return;ht.setup(U,H,yt,z,_t);let fe,ue=ft;if(_t!==null&&(fe=A.get(_t),ue=$t,ue.setIndex(fe)),U.isMesh)H.wireframe===!0?(mt.setLineWidth(H.wireframeLinewidth*Dt()),ue.setMode(R.LINES)):ue.setMode(R.TRIANGLES);else if(U.isLine){let Nt=H.linewidth;Nt===void 0&&(Nt=1),mt.setLineWidth(Nt*Dt()),U.isLineSegments?ue.setMode(R.LINES):U.isLineLoop?ue.setMode(R.LINE_LOOP):ue.setMode(R.LINE_STRIP)}else U.isPoints?ue.setMode(R.POINTS):U.isSprite&&ue.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))ue.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Nt=U._multiDrawStarts,_e=U._multiDrawCounts,ee=U._multiDrawCount,Qe=_t?A.get(_t).bytesPerElement:1,zi=St.get(H).currentProgram.getUniforms();for(let tn=0;tn<ee;tn++)zi.setValue(R,"_gl_DrawID",tn),ue.render(Nt[tn]/Qe,_e[tn])}else if(U.isInstancedMesh)ue.renderInstances(Qt,Se,U.count);else if(z.isInstancedBufferGeometry){const Nt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_e=Math.min(z.instanceCount,Nt);ue.renderInstances(Qt,Se,_e)}else ue.render(Qt,Se)};function de(y,N,z){y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=$e,y.needsUpdate=!0,dr(y,N,z),y.side=hi,y.needsUpdate=!0,dr(y,N,z),y.side=hn):dr(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),p=Pt.get(z),p.init(N),x.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const yt=nt[dt];de(yt,z,U),H.add(yt)}else de(nt,z,U),H.add(nt)}),p=x.pop(),H},this.compileAsync=function(y,N,z=null){const H=this.compile(y,N,z);return new Promise(U=>{function nt(){if(H.forEach(function(dt){St.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){U(y);return}setTimeout(nt,10)}gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let se=null;function Pn(y){se&&se(y)}function Mn(){pi.stop()}function Mc(){pi.start()}const pi=new J0;pi.setAnimationLoop(Pn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(y){se=y,st.setAnimationLoop(y),y===null?pi.stop():pi.start()},st.addEventListener("sessionstart",Mn),st.addEventListener("sessionend",Mc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(N),N=st.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,L),p=Pt.get(y,x.length),p.init(N),x.push(p),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ht.setFromProjectionMatrix(Y,wn,N.reversedDepth),W=this.localClippingEnabled,Gt=rt.init(this.clippingPlanes,W),m=X.get(y,b.length),m.init(),b.push(m),st.enabled===!0&&st.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Na(nt,N,-1/0,v.sortObjects)}Na(y,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,tt),qt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,qt&&At.addToRenderList(m,y),this.info.render.frame++,Gt===!0&&rt.beginShadows();const z=p.state.shadowsArray;Tt.render(z,y,N),Gt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const nt=N.cameras;if(U.length>0)for(let dt=0,yt=nt.length;dt<yt;dt++){const _t=nt[dt];bc(H,U,y,_t)}qt&&At.render(y);for(let dt=0,yt=nt.length;dt<yt;dt++){const _t=nt[dt];yc(m,y,_t,_t.viewport)}}else U.length>0&&bc(H,U,y,N),qt&&At.render(y),yc(m,y,N);L!==null&&C===0&&(Wt.updateMultisampleRenderTarget(L),Wt.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(v,y,N),ht.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Gt===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Na(y,N,z,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ht.intersectsSprite(y)){H&&F.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Y);const dt=k.update(y),yt=y.material;yt.visible&&m.push(y,dt,yt,z,F.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ht.intersectsObject(y))){const dt=k.update(y),yt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),F.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),F.copy(dt.boundingSphere.center)),F.applyMatrix4(y.matrixWorld).applyMatrix4(Y)),Array.isArray(yt)){const _t=dt.groups;for(let zt=0,Xt=_t.length;zt<Xt;zt++){const Lt=_t[zt],Qt=yt[Lt.materialIndex];Qt&&Qt.visible&&m.push(y,dt,Qt,z,F.z,Lt)}}else yt.visible&&m.push(y,dt,yt,z,F.z,null)}}const nt=y.children;for(let dt=0,yt=nt.length;dt<yt;dt++)Na(nt[dt],N,z,H)}function yc(y,N,z,H){const U=y.opaque,nt=y.transmissive,dt=y.transparent;p.setupLightsView(z),Gt===!0&&rt.setGlobalState(v.clippingPlanes,z),H&&mt.viewport(D.copy(H)),U.length>0&&hr(U,N,z),nt.length>0&&hr(nt,N,z),dt.length>0&&hr(dt,N,z),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function bc(y,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ui(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?sr:Rn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],dt=H.viewport||D;nt.setSize(dt.z*v.transmissionResolutionScale,dt.w*v.transmissionResolutionScale);const yt=v.getRenderTarget(),_t=v.getActiveCubeFace(),zt=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(G),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),qt&&At.render(z);const Xt=v.toneMapping;v.toneMapping=oi;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Gt===!0&&rt.setGlobalState(v.clippingPlanes,H),hr(y,z,H),Wt.updateMultisampleRenderTarget(nt),Wt.updateRenderTargetMipmap(nt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let re=0,Se=N.length;re<Se;re++){const fe=N[re],ue=fe.object,Nt=fe.geometry,_e=fe.material,ee=fe.group;if(_e.side===hn&&ue.layers.test(H.layers)){const Qe=_e.side;_e.side=$e,_e.needsUpdate=!0,Ec(ue,z,H,Nt,_e,ee),_e.side=Qe,_e.needsUpdate=!0,Qt=!0}}Qt===!0&&(Wt.updateMultisampleRenderTarget(nt),Wt.updateRenderTargetMipmap(nt))}v.setRenderTarget(yt,_t,zt),v.setClearColor(G,j),Lt!==void 0&&(H.viewport=Lt),v.toneMapping=Xt}function hr(y,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,nt=y.length;U<nt;U++){const dt=y[U],yt=dt.object,_t=dt.geometry,zt=dt.group;let Xt=dt.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),yt.layers.test(z.layers)&&Ec(yt,N,z,_t,Xt,zt)}}function Ec(y,N,z,H,U,nt){y.onBeforeRender(v,N,z,H,U,nt),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,N,z,H,y,nt),U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,v.renderBufferDirect(z,N,H,U,y,nt),U.side=hi,U.needsUpdate=!0,v.renderBufferDirect(z,N,H,U,y,nt),U.side=hn):v.renderBufferDirect(z,N,H,U,y,nt),y.onAfterRender(v,N,z,H,U,nt)}function dr(y,N,z){N.isScene!==!0&&(N=ct);const H=St.get(y),U=p.state.lights,nt=p.state.shadowsArray,dt=U.state.version,yt=q.getParameters(y,U.state,nt,N,z),_t=q.getProgramCacheKey(yt);let zt=H.programs;H.environment=y.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(y.isMeshStandardMaterial?ye:De).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,zt===void 0&&(y.addEventListener("dispose",K),zt=new Map,H.programs=zt);let Xt=zt.get(_t);if(Xt!==void 0){if(H.currentProgram===Xt&&H.lightsStateVersion===dt)return Tc(y,yt),Xt}else yt.uniforms=q.getUniforms(y),y.onBeforeCompile(yt,v),Xt=q.acquireProgram(yt,_t),zt.set(_t,Xt),H.uniforms=yt.uniforms;const Lt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),Tc(y,yt),H.needsLights=wd(y),H.lightsStateVersion=dt,H.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.directionalShadowMap.value=U.state.directionalShadowMap,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotShadowMap.value=U.state.spotShadowMap,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMap.value=U.state.pointShadowMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Xt,H.uniformsList=null,Xt}function wc(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=sa.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Tc(y,N){const z=St.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function bd(y,N,z,H,U){N.isScene!==!0&&(N=ct),Wt.resetTextureUnits();const nt=N.fog,dt=H.isMeshStandardMaterial?N.environment:null,yt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xs,_t=(H.isMeshStandardMaterial?ye:De).get(H.envMap||dt),zt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Xt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!z.morphAttributes.position,Qt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let Se=oi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Se=v.toneMapping);const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=fe!==void 0?fe.length:0,Nt=St.get(H),_e=p.state.lights;if(Gt===!0&&(W===!0||y!==M)){const Ve=y===M&&H.id===w;rt.setState(H,y,Ve)}let ee=!1;H.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==_e.state.version||Nt.outputColorSpace!==yt||U.isBatchedMesh&&Nt.batching===!1||!U.isBatchedMesh&&Nt.batching===!0||U.isBatchedMesh&&Nt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Nt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Nt.instancing===!1||!U.isInstancedMesh&&Nt.instancing===!0||U.isSkinnedMesh&&Nt.skinning===!1||!U.isSkinnedMesh&&Nt.skinning===!0||U.isInstancedMesh&&Nt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Nt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Nt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Nt.instancingMorph===!1&&U.morphTexture!==null||Nt.envMap!==_t||H.fog===!0&&Nt.fog!==nt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==rt.numPlanes||Nt.numIntersection!==rt.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Lt||Nt.morphNormals!==Qt||Nt.morphColors!==re||Nt.toneMapping!==Se||Nt.morphTargetsCount!==ue)&&(ee=!0):(ee=!0,Nt.__version=H.version);let Qe=Nt.currentProgram;ee===!0&&(Qe=dr(H,N,U));let zi=!1,tn=!1,Rs=!1;const ve=Qe.getUniforms(),ln=Nt.uniforms;if(mt.useProgram(Qe.program)&&(zi=!0,tn=!0,Rs=!0),H.id!==w&&(w=H.id,tn=!0),zi||M!==y){mt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ve.setValue(R,"projectionMatrix",y.projectionMatrix),ve.setValue(R,"viewMatrix",y.matrixWorldInverse);const We=ve.map.cameraPosition;We!==void 0&&We.setValue(R,lt.setFromMatrixPosition(y.matrixWorld)),pt.logarithmicDepthBuffer&&ve.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,tn=!0,Rs=!0)}if(U.isSkinnedMesh){ve.setOptional(R,U,"bindMatrix"),ve.setOptional(R,U,"bindMatrixInverse");const Ve=U.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ve.setValue(R,"boneTexture",Ve.boneTexture,Wt))}U.isBatchedMesh&&(ve.setOptional(R,U,"batchingTexture"),ve.setValue(R,"batchingTexture",U._matricesTexture,Wt),ve.setOptional(R,U,"batchingIdTexture"),ve.setValue(R,"batchingIdTexture",U._indirectTexture,Wt),ve.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&ve.setValue(R,"batchingColorTexture",U._colorsTexture,Wt));const cn=z.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&it.update(U,z,Qe),(tn||Nt.receiveShadow!==U.receiveShadow)&&(Nt.receiveShadow=U.receiveShadow,ve.setValue(R,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ln.envMap.value=_t,ln.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(ln.envMapIntensity.value=N.environmentIntensity),tn&&(ve.setValue(R,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Ed(ln,Rs),nt&&H.fog===!0&&Z.refreshFogUniforms(ln,nt),Z.refreshMaterialUniforms(ln,H,V,J,p.state.transmissionRenderTarget[y.id]),sa.upload(R,wc(Nt),ln,Wt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(sa.upload(R,wc(Nt),ln,Wt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(R,"center",U.center),ve.setValue(R,"modelViewMatrix",U.modelViewMatrix),ve.setValue(R,"normalMatrix",U.normalMatrix),ve.setValue(R,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ve=H.uniformsGroups;for(let We=0,Ua=Ve.length;We<Ua;We++){const mi=Ve[We];Yt.update(mi,Qe),Yt.bind(mi,Qe)}}return Qe}function Ed(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function wd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,z){const H=St.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),St.get(y.texture).__webglTexture=N,St.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const z=St.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Td=R.createFramebuffer();this.setRenderTarget=function(y,N=0,z=0){L=y,E=N,C=z;let H=!0,U=null,nt=!1,dt=!1;if(y){const _t=St.get(y);if(_t.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)Wt.setupRenderTarget(y);else if(_t.__hasExternalTextures)Wt.rebindTextures(y,St.get(y.texture).__webglTexture,St.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Lt=y.depthTexture;if(_t.__boundDepthTexture!==Lt){if(Lt!==null&&St.has(Lt)&&(y.width!==Lt.image.width||y.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(y)}}const zt=y.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(dt=!0);const Xt=St.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?U=Xt[N][z]:U=Xt[N],nt=!0):y.samples>0&&Wt.useMultisampledRTT(y)===!1?U=St.get(y).__webglMultisampledFramebuffer:Array.isArray(Xt)?U=Xt[z]:U=Xt,D.copy(y.viewport),O.copy(y.scissor),B=y.scissorTest}else D.copy(xt).multiplyScalar(V).floor(),O.copy(ot).multiplyScalar(V).floor(),B=Ct;if(z!==0&&(U=Td),mt.bindFramebuffer(R.FRAMEBUFFER,U)&&H&&mt.drawBuffers(y,U),mt.viewport(D),mt.scissor(O),mt.setScissorTest(B),nt){const _t=St.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,z)}else if(dt){const _t=N;for(let zt=0;zt<y.textures.length;zt++){const Xt=St.get(y.textures[zt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+zt,Xt.__webglTexture,z,_t)}}else if(y!==null&&z!==0){const _t=St.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_t.__webglTexture,z)}w=-1},this.readRenderTargetPixels=function(y,N,z,H,U,nt,dt,yt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){mt.bindFramebuffer(R.FRAMEBUFFER,_t);try{const zt=y.textures[yt],Xt=zt.format,Lt=zt.type;if(!pt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&z>=0&&z<=y.height-U&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+yt),R.readPixels(N,z,H,U,Rt.convert(Xt),Rt.convert(Lt),nt))}finally{const zt=L!==null?St.get(L).__webglFramebuffer:null;mt.bindFramebuffer(R.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,H,U,nt,dt,yt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t)if(N>=0&&N<=y.width-H&&z>=0&&z<=y.height-U){mt.bindFramebuffer(R.FRAMEBUFFER,_t);const zt=y.textures[yt],Xt=zt.format,Lt=zt.type;if(!pt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Qt),R.bufferData(R.PIXEL_PACK_BUFFER,nt.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+yt),R.readPixels(N,z,H,U,Rt.convert(Xt),Rt.convert(Lt),0);const re=L!==null?St.get(L).__webglFramebuffer:null;mt.bindFramebuffer(R.FRAMEBUFFER,re);const Se=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Sf(R,Se,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Qt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,nt),R.deleteBuffer(Qt),R.deleteSync(Se),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,z=0){const H=Math.pow(2,-z),U=Math.floor(y.image.width*H),nt=Math.floor(y.image.height*H),dt=N!==null?N.x:0,yt=N!==null?N.y:0;Wt.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,dt,yt,U,nt),mt.unbindTexture()};const Ad=R.createFramebuffer(),Rd=R.createFramebuffer();this.copyTextureToTexture=function(y,N,z=null,H=null,U=0,nt=null){nt===null&&(U!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=U,U=0):nt=0);let dt,yt,_t,zt,Xt,Lt,Qt,re,Se;const fe=y.isCompressedTexture?y.mipmaps[nt]:y.image;if(z!==null)dt=z.max.x-z.min.x,yt=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,zt=z.min.x,Xt=z.min.y,Lt=z.isBox3?z.min.z:0;else{const cn=Math.pow(2,-U);dt=Math.floor(fe.width*cn),yt=Math.floor(fe.height*cn),y.isDataArrayTexture?_t=fe.depth:y.isData3DTexture?_t=Math.floor(fe.depth*cn):_t=1,zt=0,Xt=0,Lt=0}H!==null?(Qt=H.x,re=H.y,Se=H.z):(Qt=0,re=0,Se=0);const ue=Rt.convert(N.format),Nt=Rt.convert(N.type);let _e;N.isData3DTexture?(Wt.setTexture3D(N,0),_e=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Wt.setTexture2DArray(N,0),_e=R.TEXTURE_2D_ARRAY):(Wt.setTexture2D(N,0),_e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const ee=R.getParameter(R.UNPACK_ROW_LENGTH),Qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),zi=R.getParameter(R.UNPACK_SKIP_PIXELS),tn=R.getParameter(R.UNPACK_SKIP_ROWS),Rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,fe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,zt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Lt);const ve=y.isDataArrayTexture||y.isData3DTexture,ln=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const cn=St.get(y),Ve=St.get(N),We=St.get(cn.__renderTarget),Ua=St.get(Ve.__renderTarget);mt.bindFramebuffer(R.READ_FRAMEBUFFER,We.__webglFramebuffer),mt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ua.__webglFramebuffer);for(let mi=0;mi<_t;mi++)ve&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.get(y).__webglTexture,U,Lt+mi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.get(N).__webglTexture,nt,Se+mi)),R.blitFramebuffer(zt,Xt,dt,yt,Qt,re,dt,yt,R.DEPTH_BUFFER_BIT,R.NEAREST);mt.bindFramebuffer(R.READ_FRAMEBUFFER,null),mt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||St.has(y)){const cn=St.get(y),Ve=St.get(N);mt.bindFramebuffer(R.READ_FRAMEBUFFER,Ad),mt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Rd);for(let We=0;We<_t;We++)ve?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,cn.__webglTexture,U,Lt+We):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,cn.__webglTexture,U),ln?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ve.__webglTexture,nt,Se+We):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ve.__webglTexture,nt),U!==0?R.blitFramebuffer(zt,Xt,dt,yt,Qt,re,dt,yt,R.COLOR_BUFFER_BIT,R.NEAREST):ln?R.copyTexSubImage3D(_e,nt,Qt,re,Se+We,zt,Xt,dt,yt):R.copyTexSubImage2D(_e,nt,Qt,re,zt,Xt,dt,yt);mt.bindFramebuffer(R.READ_FRAMEBUFFER,null),mt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ln?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(_e,nt,Qt,re,Se,dt,yt,_t,ue,Nt,fe.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,nt,Qt,re,Se,dt,yt,_t,ue,fe.data):R.texSubImage3D(_e,nt,Qt,re,Se,dt,yt,_t,ue,Nt,fe):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,nt,Qt,re,dt,yt,ue,Nt,fe.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,nt,Qt,re,fe.width,fe.height,ue,fe.data):R.texSubImage2D(R.TEXTURE_2D,nt,Qt,re,dt,yt,ue,Nt,fe);R.pixelStorei(R.UNPACK_ROW_LENGTH,ee),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,zi),R.pixelStorei(R.UNPACK_SKIP_ROWS,tn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rs),nt===0&&N.generateMipmaps&&R.generateMipmap(_e),mt.unbindTexture()},this.initRenderTarget=function(y){St.get(y).__webglFramebuffer===void 0&&Wt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Wt.setTextureCube(y,0):y.isData3DTexture?Wt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Wt.setTexture2DArray(y,0):Wt.setTexture2D(y,0),mt.unbindTexture()},this.resetState=function(){E=0,C=0,L=null,mt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}function H3(n){return n}function G3(n){if(n==null)return H3;var t,e,i=n.scale[0],s=n.scale[1],r=n.translate[0],a=n.translate[1];return function(o,l){l||(t=e=0);var c=2,u=o.length,h=new Array(u);for(h[0]=(t+=o[0])*i+r,h[1]=(e+=o[1])*s+a;c<u;)h[c]=o[c],++c;return h}}function $3(n,t){for(var e,i=n.length,s=i-t;s<--i;)e=n[s],n[s++]=n[i],n[i]=e}function ih(n,t){return typeof t=="string"&&(t=n.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return Du(n,e)})}:Du(n,t)}function Du(n,t){var e=t.id,i=t.bbox,s=t.properties==null?{}:t.properties,r=W3(n,t);return e==null&&i==null?{type:"Feature",properties:s,geometry:r}:i==null?{type:"Feature",id:e,properties:s,geometry:r}:{type:"Feature",id:e,bbox:i,properties:s,geometry:r}}function W3(n,t){var e=G3(n.transform),i=n.arcs;function s(u,h){h.length&&h.pop();for(var d=i[u<0?~u:u],f=0,g=d.length;f<g;++f)h.push(e(d[f],f));u<0&&$3(h,g)}function r(u){return e(u)}function a(u){for(var h=[],d=0,f=u.length;d<f;++d)s(u[d],h);return h.length<2&&h.push(h[0]),h}function o(u){for(var h=a(u);h.length<4;)h.push(h[0]);return h}function l(u){return u.map(o)}function c(u){var h=u.type,d;switch(h){case"GeometryCollection":return{type:h,geometries:u.geometries.map(c)};case"Point":d=r(u.coordinates);break;case"MultiPoint":d=u.coordinates.map(r);break;case"LineString":d=a(u.arcs);break;case"MultiLineString":d=u.arcs.map(a);break;case"Polygon":d=l(u.arcs);break;case"MultiPolygon":d=u.arcs.map(l);break;default:return null}return{type:h,coordinates:d}}return c(t)}const X3={land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},q3=JSON.parse("[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]]"),j3={scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]},sh={objects:X3,arcs:q3,transform:j3},Ei={ocean:"#1b3f63",oceanDeep:"#122d49",land:"#3f6145",coast:"#7ba383",graticule:"rgba(150, 190, 210, 0.13)"},si=(n,t,e,i)=>[(n+180)/360*e,(90-t)/180*i];function Lu(n,t,e,i){for(const s of t){n.beginPath();for(let r=0;r<s.length;r++){const a=s[r],[o,l]=si(a[0],a[1],e,i);r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill(),n.stroke()}}function Y3(n=2048){const t=n,e=n/2,i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d");if(!s)return i;const r=s.createLinearGradient(0,0,0,e);r.addColorStop(0,Ei.oceanDeep),r.addColorStop(.5,Ei.ocean),r.addColorStop(1,Ei.oceanDeep),s.fillStyle=r,s.fillRect(0,0,t,e),s.strokeStyle=Ei.graticule,s.lineWidth=Math.max(1,t/2048);for(let c=-180;c<=180;c+=30){const[u]=si(c,0,t,e);s.beginPath(),s.moveTo(u,0),s.lineTo(u,e),s.stroke()}for(let c=-60;c<=60;c+=30){const[,u]=si(0,c,t,e);s.beginPath(),s.moveTo(0,u),s.lineTo(t,u),s.stroke()}const a=sh,o=ih(a,a.objects.land),l=[];if(o.features)for(const c of o.features)c.geometry&&l.push(c.geometry);else o.geometry&&l.push(o.geometry);s.fillStyle=Ei.land,s.strokeStyle=Ei.coast,s.lineWidth=Math.max(1,t/1400),s.lineJoin="round";for(const c of l)if(c.type==="MultiPolygon")for(const u of c.coordinates)Lu(s,u,t,e);else Lu(s,c.coordinates,t,e);return i}function K3(n=2048){const t=n,e=n/2,i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d");if(!s)return i;s.strokeStyle=Ei.graticule,s.lineWidth=Math.max(1,t/2048);for(let l=-180;l<=180;l+=30){const[c]=si(l,0,t,e);s.beginPath(),s.moveTo(c,0),s.lineTo(c,e),s.stroke()}for(let l=-60;l<=60;l+=30){const[,c]=si(0,l,t,e);s.beginPath(),s.moveTo(0,c),s.lineTo(t,c),s.stroke()}const r=sh,a=ih(r,r.objects.land),o=[];if(a.features)for(const l of a.features)l.geometry&&o.push(l.geometry);else a.geometry&&o.push(a.geometry);s.strokeStyle="rgba(150, 200, 175, 0.75)",s.lineWidth=Math.max(1,t/1800),s.lineJoin="round";for(const l of o)if(l.type==="MultiPolygon")for(const c of l.coordinates)for(const u of c){s.beginPath();for(let h=0;h<u.length;h++){const[d,f]=si(u[h][0],u[h][1],t,e);h===0?s.moveTo(d,f):s.lineTo(d,f)}s.closePath(),s.stroke()}else for(const c of l.coordinates){s.beginPath();for(let u=0;u<c.length;u++){const[h,d]=si(c[u][0],c[u][1],t,e);u===0?s.moveTo(h,d):s.lineTo(h,d)}s.closePath(),s.stroke()}return i}function Z3(n,t){const i=n.width*4,s=(n.height-1)*4,r=t??document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d");if(!a)return r;a.clearRect(0,0,i,s);const o=a.createImageData(n.width,n.height);for(let c=0;c<n.width;c++)for(let u=0;u<n.height;u++){const h=n.values[c*n.height+u]??0,d=c>180?c-360:c,f=u+n.lat_start,[g,_]=si(d,f,n.width,n.height),m=Math.min(n.width-1,Math.max(0,Math.round(g))),b=(Math.min(n.height-1,Math.max(0,Math.round(_)))*n.width+m)*4;o.data[b]=h,o.data[b+1]=h,o.data[b+2]=h,o.data[b+3]=255}const l=document.createElement("canvas");return l.width=n.width,l.height=n.height,l.getContext("2d")?.putImageData(o,0,0),a.filter=`blur(${4*.9}px)`,a.drawImage(l,0,0,i,s),a.filter="none",r}const lc=173.1446326846693,J3=14959787069098932e-8,Ot=.017453292519943295,ha=57.29577951308232,Q3=365.24217,Iu=new Date("2000-01-01T12:00:00Z"),kn=2*Math.PI,Zn=3600*(180/Math.PI),cs=484813681109536e-20,tg=10800*60,eg=2*tg,ng=6378.1366,ig=ng/J3,rh=81.30056,cc=.0002959122082855911,Cl=2825345909524226e-22,Pl=8459715185680659e-23,Dl=1292024916781969e-23,Ll=1524358900784276e-23;function ah(n){if(n!==!0&&n!==!1)throw console.trace(),`Value is not boolean: ${n}`;return n}function li(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function es(n){return n-Math.floor(n)}var vt;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(vt||(vt={}));const sg=[vt.Star1,vt.Star2,vt.Star3,vt.Star4,vt.Star5,vt.Star6,vt.Star7,vt.Star8],rg=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function ag(n){const t=sg.indexOf(n);return t>=0?rg[t]:null}function uc(n){const t=ag(n);return t&&t.dist>0?t:null}var on;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(on||(on={}));const Vn={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function og(n){var t,e,i,s,r,a,o;const l=2e3+(n-14)/Q3;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,10583.6-1014.41*t+33.78311*e-5.952053*i-.1798452*s+.022174192*r+.0090316521*a):l<1600?(t=(l-1e3)/100,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,1574.2-556.01*t+71.23472*e+.319781*i-.8503463*s-.005050998*r+.0083572073*a):l<1700?(t=l-1600,e=t*t,i=t*e,120-.9808*t-.01532*e+i/7129):l<1800?(t=l-1700,e=t*t,i=t*e,s=e*e,8.83+.1603*t-.0059285*e+13336e-8*i-s/1174e3):l<1860?(t=l-1800,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,o=i*s,13.72-.332447*t+.0068612*e+.0041116*i-37436e-8*s+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(t=l-1860,e=t*t,i=t*e,s=e*e,r=e*i,7.62+.5737*t-.251754*e+.01680668*i-.0004473624*s+r/233174):l<1920?(t=l-1900,e=t*t,i=t*e,s=e*e,-2.79+1.494119*t-.0598939*e+.0061966*i-197e-6*s):l<1941?(t=l-1920,e=t*t,i=t*e,21.2+.84493*t-.0761*e+.0020936*i):l<1961?(t=l-1950,e=t*t,i=t*e,29.07+.407*t-e/233+i/2547):l<1986?(t=l-1975,e=t*t,i=t*e,45.45+1.067*t-e/260-i/718):l<2005?(t=l-2e3,e=t*t,i=t*e,s=e*e,r=e*i,63.86+.3345*t-.060374*e+.0017275*i+651814e-9*s+2373599e-11*r):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let lg=og;function Nu(n){return n+lg(n)/86400}class ps{constructor(t){if(t instanceof ps){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-Iu.getTime())/e,this.tt=Nu(this.ut);return}if(Number.isFinite(t)){this.date=new Date(Iu.getTime()+t*e),this.ut=t,this.tt=Nu(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new ps(t);for(;;){const i=t-e.tt;if(Math.abs(i)<1e-12)return e;e=e.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(t){return new ps(this.ut+t)}}function ge(n){return n instanceof ps?n:new ps(n)}function cg(n){function t(d){return d%eg*cs}const e=n.tt/36525,i=t(128710479305e-5+e*1295965810481e-4),s=t(335779.526232+e*17395272628478e-4),r=t(107226070369e-5+e*1602961601209e-3),a=t(450160.398036-e*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*e)*o+33386*l,u=(92052331+9086*e)*l+15377*o,h=2*(s-r+a);return o=Math.sin(h),l=Math.cos(h),c+=(-13170906-1675*e)*o-13696*l,u+=(5730336-3015*e)*l-4587*o,h=2*(s+a),o=Math.sin(h),l=Math.cos(h),c+=(-2276413-234*e)*o+2796*l,u+=(978459-485*e)*l+1374*o,h=2*a,o=Math.sin(h),l=Math.cos(h),c+=(2074554+207*e)*o-698*l,u+=(-897492+470*e)*l-291*o,o=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*e)*o+11817*l,u+=(73871-184*e)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function oh(n){var t=n.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var kr;function wa(n){if(!kr||Math.abs(kr.tt-n.tt)>1e-6){const t=cg(n),e=oh(n),i=e+t.deps/3600;kr={tt:n.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*Ot)/15,mobl:e,tobl:i}}return kr}function ug(n,t){const e=n*Ot,i=Math.cos(e),s=Math.sin(e);return[t[0],t[1]*i-t[2]*s,t[1]*s+t[2]*i]}function hg(n,t){return ug(oh(n),t)}function dg(n){const t=n.tt/36525;function e(Dt,R){const Bt=[];let gt;for(gt=0;gt<=R-Dt;++gt)Bt.push(0);return{min:Dt,array:Bt}}function i(Dt,R,Bt,gt){const pt=[];for(let mt=0;mt<=R-Dt;++mt)pt.push(e(Bt,gt));return{min:Dt,array:pt}}function s(Dt,R,Bt){const gt=Dt.array[R-Dt.min];return gt.array[Bt-gt.min]}function r(Dt,R,Bt,gt){const pt=Dt.array[R-Dt.min];pt.array[Bt-pt.min]=gt}let a,o,l,c,u,h,d,f,g,_,m,p,b,x,v,T,E,C,L,w,M,D,O,B=i(-6,6,1,4),G=i(-6,6,1,4);function j(Dt,R){return s(B,Dt,R)}function $(Dt,R){return s(G,Dt,R)}function J(Dt,R,Bt){return r(B,Dt,R,Bt)}function V(Dt,R,Bt){return r(G,Dt,R,Bt)}function Q(Dt,R,Bt,gt,pt){pt(Dt*Bt-R*gt,R*Bt+Dt*gt)}function tt(Dt){return Math.sin(kn*Dt)}d=t*t,g=0,O=0,m=0,p=3422.7;var xt=tt(.19833+.05611*t),ot=tt(.27869+.04508*t),Ct=tt(.16827-.36903*t),Ht=tt(.34734-5.37261*t),Gt=tt(.10498-5.37899*t),W=tt(.42681-.41855*t),Y=tt(.14943-5.37511*t);for(C=.84*xt+.31*ot+14.27*Ct+7.26*Ht+.28*Gt+.24*W,L=2.94*xt+.31*ot+14.27*Ct+9.34*Ht+1.12*Gt+.83*W,w=-6.4*xt-1.89*W,M=.21*xt+.31*ot+14.27*Ct-88.7*Ht-15.3*Gt+.24*W-1.86*Y,D=C-w,f=-3332e-9*tt(.59734-5.37261*t)-539e-9*tt(.35498-5.37899*t)-64e-9*tt(.39943-5.37511*t),b=kn*es(.60643382+1336.85522467*t-313e-8*d)+C/Zn,x=kn*es(.37489701+1325.55240982*t+2565e-8*d)+L/Zn,v=kn*es(.99312619+99.99735956*t-44e-8*d)+w/Zn,T=kn*es(.25909118+1342.2278298*t-892e-8*d)+M/Zn,E=kn*es(.82736186+1236.85308708*t-397e-8*d)+D/Zn,u=1;u<=4;++u){switch(u){case 1:l=x,o=4,c=1.000002208;break;case 2:l=v,o=3,c=.997504612-.002495388*t;break;case 3:l=T,o=4,c=1.000002708+139.978*f;break;case 4:l=E,o=6,c=1;break;default:throw`Internal error: I = ${u}`}for(J(0,u,1),J(1,u,Math.cos(l)*c),V(0,u,0),V(1,u,Math.sin(l)*c),h=2;h<=o;++h)Q(j(h-1,u),$(h-1,u),j(1,u),$(1,u),(Dt,R)=>(J(h,u,Dt),V(h,u,R)));for(h=1;h<=o;++h)J(-h,u,j(h,u)),V(-h,u,-$(h,u))}function lt(Dt,R,Bt,gt){for(var pt={x:1,y:0},mt=[0,Dt,R,Bt,gt],te=1;te<=4;++te)mt[te]!==0&&Q(pt.x,pt.y,j(mt[te],te),$(mt[te],te),(St,Wt)=>(pt.x=St,pt.y=Wt));return pt}function F(Dt,R,Bt,gt,pt,mt,te,St){var Wt=lt(pt,mt,te,St);g+=Dt*Wt.y,O+=R*Wt.y,m+=Bt*Wt.x,p+=gt*Wt.x}F(13.902,14.06,-.001,.2607,0,0,0,4),F(.403,-4.01,.394,.0023,0,0,0,3),F(2369.912,2373.36,.601,28.2333,0,0,0,2),F(-125.154,-112.79,-.725,-.9781,0,0,0,1),F(1.979,6.98,-.445,.0433,1,0,0,4),F(191.953,192.72,.029,3.0861,1,0,0,2),F(-8.466,-13.51,.455,-.1093,1,0,0,1),F(22639.5,22609.07,.079,186.5398,1,0,0,0),F(18.609,3.59,-.094,.0118,1,0,0,-1),F(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),F(3.215,5.44,.192,-.0386,1,0,0,-3),F(-38.428,-38.64,.001,.6008,1,0,0,-4),F(-.393,-1.43,-.092,.0086,1,0,0,-6),F(-.289,-1.59,.123,-.0053,0,1,0,4),F(-24.42,-25.1,.04,-.3,0,1,0,2),F(18.023,17.93,.007,.1494,0,1,0,1),F(-668.146,-126.98,-1.302,-.3997,0,1,0,0),F(.56,.32,-.001,-.0037,0,1,0,-1),F(-165.145,-165.06,.054,1.9178,0,1,0,-2),F(-1.877,-6.46,-.416,.0339,0,1,0,-4),F(.213,1.02,-.074,.0054,2,0,0,4),F(14.387,14.78,-.017,.2833,2,0,0,2),F(-.586,-1.2,.054,-.01,2,0,0,1),F(769.016,767.96,.107,10.1657,2,0,0,0),F(1.75,2.01,-.018,.0155,2,0,0,-1),F(-211.656,-152.53,5.679,-.3039,2,0,0,-2),F(1.225,.91,-.03,-.0088,2,0,0,-3),F(-30.773,-34.07,-.308,.3722,2,0,0,-4),F(-.57,-1.4,-.074,.0109,2,0,0,-6),F(-2.921,-11.75,.787,-.0484,1,1,0,2),F(1.267,1.52,-.022,.0164,1,1,0,1),F(-109.673,-115.18,.461,-.949,1,1,0,0),F(-205.962,-182.36,2.056,1.4437,1,1,0,-2),F(.233,.36,.012,-.0025,1,1,0,-3),F(-4.391,-9.66,-.471,.0673,1,1,0,-4),F(.283,1.53,-.111,.006,1,-1,0,4),F(14.577,31.7,-1.54,.2302,1,-1,0,2),F(147.687,138.76,.679,1.1528,1,-1,0,0),F(-1.089,.55,.021,0,1,-1,0,-1),F(28.475,23.59,-.443,-.2257,1,-1,0,-2),F(-.276,-.38,-.006,-.0036,1,-1,0,-3),F(.636,2.27,.146,-.0102,1,-1,0,-4),F(-.189,-1.68,.131,-.0028,0,2,0,2),F(-7.486,-.66,-.037,-.0086,0,2,0,0),F(-8.096,-16.35,-.74,.0918,0,2,0,-2),F(-5.741,-.04,0,-9e-4,0,0,2,2),F(.255,0,0,0,0,0,2,1),F(-411.608,-.2,0,-.0124,0,0,2,0),F(.584,.84,0,.0071,0,0,2,-1),F(-55.173,-52.14,0,-.1052,0,0,2,-2),F(.254,.25,0,-.0017,0,0,2,-3),F(.025,-1.67,0,.0031,0,0,2,-4),F(1.06,2.96,-.166,.0243,3,0,0,2),F(36.124,50.64,-1.3,.6215,3,0,0,0),F(-13.193,-16.4,.258,-.1187,3,0,0,-2),F(-1.187,-.74,.042,.0074,3,0,0,-4),F(-.293,-.31,-.002,.0046,3,0,0,-6),F(-.29,-1.45,.116,-.0051,2,1,0,2),F(-7.649,-10.56,.259,-.1038,2,1,0,0),F(-8.627,-7.59,.078,-.0192,2,1,0,-2),F(-2.74,-2.54,.022,.0324,2,1,0,-4),F(1.181,3.32,-.212,.0213,2,-1,0,2),F(9.703,11.67,-.151,.1268,2,-1,0,0),F(-.352,-.37,.001,-.0028,2,-1,0,-1),F(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),F(.36,.2,-.012,-.0043,2,-1,0,-4),F(-1.167,-1.25,.008,-.0106,1,2,0,0),F(-7.412,-6.12,.117,.0484,1,2,0,-2),F(-.311,-.65,-.032,.0044,1,2,0,-4),F(.757,1.82,-.105,.0112,1,-2,0,2),F(2.58,2.32,.027,.0196,1,-2,0,0),F(2.533,2.4,-.014,-.0212,1,-2,0,-2),F(-.344,-.57,-.025,.0036,0,3,0,-2),F(-.992,-.02,0,0,1,0,2,2),F(-45.099,-.02,0,-.001,1,0,2,0),F(-.179,-9.52,0,-.0833,1,0,2,-2),F(-.301,-.33,0,.0014,1,0,2,-4),F(-6.382,-3.37,0,-.0481,1,0,-2,2),F(39.528,85.13,0,-.7136,1,0,-2,0),F(9.366,.71,0,-.0112,1,0,-2,-2),F(.202,.02,0,0,1,0,-2,-4),F(.415,.1,0,.0013,0,1,2,0),F(-2.152,-2.26,0,-.0066,0,1,2,-2),F(-1.44,-1.3,0,.0014,0,1,-2,2),F(.384,-.04,0,0,0,1,-2,-2),F(1.938,3.6,-.145,.0401,4,0,0,0),F(-.952,-1.58,.052,-.013,4,0,0,-2),F(-.551,-.94,.032,-.0097,3,1,0,0),F(-.482,-.57,.005,-.0045,3,1,0,-2),F(.681,.96,-.026,.0115,3,-1,0,0),F(-.297,-.27,.002,-9e-4,2,2,0,-2),F(.254,.21,-.003,0,2,-2,0,-2),F(-.25,-.22,.004,.0014,1,3,0,-2),F(-3.996,0,0,4e-4,2,0,2,0),F(.557,-.75,0,-.009,2,0,2,-2),F(-.459,-.38,0,-.0053,2,0,-2,2),F(-1.298,.74,0,4e-4,2,0,-2,0),F(.538,1.14,0,-.0141,2,0,-2,-2),F(.263,.02,0,0,1,1,2,0),F(.426,.07,0,-6e-4,1,1,-2,-2),F(-.304,.03,0,3e-4,1,-1,2,0),F(-.372,-.19,0,-.0027,1,-1,-2,2),F(.418,0,0,0,0,0,4,0),F(-.33,-.04,0,0,3,0,2,0);function ct(Dt,R,Bt,gt,pt){return Dt*lt(R,Bt,gt,pt).y}_=0,_+=ct(-526.069,0,0,1,-2),_+=ct(-3.352,0,0,1,-4),_+=ct(44.297,1,0,1,-2),_+=ct(-6,1,0,1,-4),_+=ct(20.599,-1,0,1,0),_+=ct(-30.598,-1,0,1,-2),_+=ct(-24.649,-2,0,1,0),_+=ct(-2,-2,0,1,-2),_+=ct(-22.571,0,1,1,-2),_+=ct(10.985,0,-1,1,-2),g+=.82*tt(.7736-62.5512*t)+.31*tt(.0466-125.1025*t)+.35*tt(.5785-25.1042*t)+.66*tt(.4591+1335.8075*t)+.64*tt(.313-91.568*t)+1.14*tt(.148+1331.2898*t)+.21*tt(.5918+1056.5859*t)+.44*tt(.5784+1322.8595*t)+.24*tt(.2275-5.7374*t)+.28*tt(.2965+2.6929*t)+.33*tt(.3132+6.3368*t),a=T+O/Zn;let qt=(1.000002708+139.978*f)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+_;return{geo_eclip_lon:kn*es((b+g/Zn)/kn),geo_eclip_lat:Math.PI/(180*3600)*qt,distance_au:Zn*ig/(.999953253*p)}}function lh(n,t){return[n.rot[0][0]*t[0]+n.rot[1][0]*t[1]+n.rot[2][0]*t[2],n.rot[0][1]*t[0]+n.rot[1][1]*t[1]+n.rot[2][1]*t[2],n.rot[0][2]*t[0]+n.rot[1][2]*t[1]+n.rot[2][2]*t[2]]}function da(n,t,e){const i=ch(t,e);return lh(i,n)}function ch(n,t){const e=n.tt/36525;let i=84381.406,s=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,r=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+i,a=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;i*=cs,s*=cs,r*=cs,a*=cs;const o=Math.sin(i),l=Math.cos(i),c=Math.sin(-s),u=Math.cos(-s),h=Math.sin(-r),d=Math.cos(-r),f=Math.sin(a),g=Math.cos(a),_=g*u-c*f*d,m=g*c*l+f*d*u*l-o*f*h,p=g*c*o+f*d*u*o+l*f*h,b=-f*u-c*g*d,x=-f*c*l+g*d*u*l-o*g*h,v=-f*c*o+g*d*u*o+l*g*h,T=c*h,E=-h*u*l-o*d,C=-h*u*o+d*l;if(t===on.Into2000)return new Ms([[_,m,p],[b,x,v],[T,E,C]]);if(t===on.From2000)return new Ms([[_,b,T],[m,x,E],[p,v,C]]);throw"Invalid precess direction"}function fg(n){const t=.779057273264+.00273781191135448*n.ut,e=n.ut%1;let i=360*((t+e)%1);return i<0&&(i+=360),i}let Br;function pg(n){if(!Br||Br.tt!==n.tt){const t=n.tt/36525;let e=15*wa(n).ee;const i=fg(n);let r=((e+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+i)%360/15;r<0&&(r+=24),Br={tt:n.tt,st:r}}return Br.st}function mg(n){const t=ge(n);return pg(t)}function Il(n,t,e){const i=uh(t,e);return lh(i,n)}function uh(n,t){const e=wa(n),i=e.mobl*Ot,s=e.tobl*Ot,r=e.dpsi*cs,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r),d=u,f=-h*a,g=-h*o,_=h*l,m=u*a*l+o*c,p=u*o*l-a*c,b=h*c,x=u*a*c-o*l,v=u*o*c+a*l;if(t===on.From2000)return new Ms([[d,_,b],[f,m,x],[g,p,v]]);if(t===on.Into2000)return new Ms([[d,f,g],[_,m,p],[b,x,v]]);throw"Invalid precess direction"}function gg(n,t,e){return e===on.Into2000?da(Il(n,t,e),t,e):Il(da(n,t,e),t,e)}class be{constructor(t,e,i,s){this.x=t,this.y=e,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class ri{constructor(t,e,i,s,r,a,o){this.x=t,this.y=e,this.z=i,this.vx=s,this.vy=r,this.vz=a,this.t=o}}class hh{constructor(t,e,i){this.lat=li(t),this.lon=li(e),this.dist=li(i)}}class _g{constructor(t,e,i,s){this.ra=li(t),this.dec=li(e),this.dist=li(i),this.vec=s}}class Ms{constructor(t){this.rot=t}}class vg{constructor(t,e,i){this.vec=t,this.elat=li(e),this.elon=li(i)}}function xg(n){const t=ge(n).AddDays(-1/lc),e=Gs(Vn.Earth,t),i=[-e.x,-e.y,-e.z],[s,r,a]=gg(i,t,on.From2000),o=Ot*wa(t).tobl,l=Math.cos(o),c=Math.sin(o),u=new be(s,r,a,t);return Sg(u,l,c)}function Sg(n,t,e){const i=n.x,s=n.y*t+n.z*e,r=-n.y*e+n.z*t,a=Math.hypot(i,s);let o=0;a>0&&(o=ha*Math.atan2(s,i),o<0&&(o+=360));let l=ha*Math.atan2(r,a),c=new be(i,s,r,n.t);return new vg(c,l,o)}function Zs(n){const t=ge(n),e=dg(t),i=e.distance_au*Math.cos(e.geo_eclip_lat),s=[i*Math.cos(e.geo_eclip_lon),i*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=hg(t,s),a=da(r,t,on.Into2000);return new be(a[0],a[1],a[2],t)}function dh(n){const t=ge(n),e=1e-5,i=t.AddDays(-e),s=t.AddDays(+e),r=Zs(i),a=Zs(s);return new ri((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*e),(a.y-r.y)/(2*e),(a.z-r.z)/(2*e),t)}function Mg(n){const t=ge(n),e=dh(t),i=1+rh;return new ri(e.x/i,e.y/i,e.z/i,e.vx/i,e.vy/i,e.vz/i,t)}function ms(n,t,e){let i=1,s=0;for(let r of n){let a=0;for(let[l,c,u]of r)a+=l*Math.cos(c+t*u);let o=i*a;e&&(o%=kn),s+=o,i*=t}return s}function go(n,t){let e=1,i=0,s=0,r=0;for(let a of n){let o=0,l=0;for(let[c,u,h]of a){let d=u+t*h;o+=c*h*Math.sin(d),r>0&&(l+=c*Math.cos(d))}s+=r*i*l-e*o,i=e,e*=t,++r}return s}const Vs=365250,Nl=0,Ul=1,Fl=2;function Ol(n){return new Be(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function fh(n,t,e){const i=e*Math.cos(t),s=Math.cos(n),r=Math.sin(n);return[i*s,i*r,e*Math.sin(t)]}function Gs(n,t){const e=t.tt/Vs,i=ms(n[Nl],e,!0),s=ms(n[Ul],e,!1),r=ms(n[Fl],e,!1),a=fh(i,s,r);return Ol(a).ToAstroVector(t)}function kl(n,t){const e=t/Vs,i=ms(n[Nl],e,!0),s=ms(n[Ul],e,!1),r=ms(n[Fl],e,!1),a=go(n[Nl],e),o=go(n[Ul],e),l=go(n[Fl],e),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),f=+(l*h*c)-r*d*c*o-r*h*u*a,g=+(l*h*u)-r*d*u*o+r*h*c*a,_=+(l*d)+r*h*o,m=fh(i,s,r),p=[f/Vs,g/Vs,_/Vs],b=Ol(m),x=Ol(p);return new Oi(t,b,x)}function zr(n,t,e,i){const s=i/(i+cc),r=Gs(Vn[e],t);n.x+=s*r.x,n.y+=s*r.y,n.z+=s*r.z}function yg(n){const t=new be(0,0,0,n);return zr(t,n,vt.Jupiter,Cl),zr(t,n,vt.Saturn,Pl),zr(t,n,vt.Uranus,Dl),zr(t,n,vt.Neptune,Ll),t}const Bl=51,bg=29200,us=146,Bn=201,Pi=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Be{constructor(t,e,i){this.x=t,this.y=e,this.z=i}clone(){return new Be(this.x,this.y,this.z)}ToAstroVector(t){return new be(this.x,this.y,this.z,t)}static zero(){return new Be(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new Be(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new Be(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new Be(t*this.x,t*this.y,t*this.z)}div(t){return new Be(this.x/t,this.y/t,this.z/t)}mean(t){return new Be((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new Be(-this.x,-this.y,-this.z)}}class Oi{constructor(t,e,i){this.tt=t,this.r=e,this.v=i}clone(){return new Oi(this.tt,this.r,this.v)}sub(t){return new Oi(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function Eg(n){let[t,[e,i,s],[r,a,o]]=n;return new Oi(t,new Be(e,i,s),new Be(r,a,o))}function Vr(n,t,e,i){const s=i/(i+cc),r=kl(Vn[e],t);return n.r.incr(r.r.mul(s)),n.v.incr(r.v.mul(s)),r}function Fs(n,t,e){const i=e.sub(n),s=i.quadrature();return i.mul(t/(s*Math.sqrt(s)))}class Ta{constructor(t){let e=new Oi(t,new Be(0,0,0),new Be(0,0,0));this.Jupiter=Vr(e,t,vt.Jupiter,Cl),this.Saturn=Vr(e,t,vt.Saturn,Pl),this.Uranus=Vr(e,t,vt.Uranus,Dl),this.Neptune=Vr(e,t,vt.Neptune,Ll),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Oi(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=Fs(t,cc,this.Sun.r);return e.incr(Fs(t,Cl,this.Jupiter.r)),e.incr(Fs(t,Pl,this.Saturn.r)),e.incr(Fs(t,Dl,this.Uranus.r)),e.incr(Fs(t,Ll,this.Neptune.r)),e}}class Aa{constructor(t,e,i,s){this.tt=t,this.r=e,this.v=i,this.a=s}clone(){return new Aa(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class ph{constructor(t,e){this.bary=t,this.grav=e}}function fa(n,t,e,i){return new Be(t.x+n*(e.x+n*i.x/2),t.y+n*(e.y+n*i.y/2),t.z+n*(e.z+n*i.z/2))}function Uu(n,t,e){return new Be(t.x+n*e.x,t.y+n*e.y,t.z+n*e.z)}function zl(n,t){const e=n-t.tt,i=new Ta(n),s=fa(e,t.r,t.v,t.a),r=i.Acceleration(s).mean(t.a),a=fa(e,t.r,t.v,r),o=t.v.add(r.mul(e)),l=i.Acceleration(a),c=new Aa(n,a,o,l);return new ph(i,c)}const wg=[];function mh(n,t){const e=Math.floor(n);return e<0?0:e>=t?t-1:e}function Vl(n){const t=Eg(n),e=new Ta(t.tt),i=t.r.add(e.Sun.r),s=t.v.add(e.Sun.v),r=e.Acceleration(i),a=new Aa(t.tt,i,s,r);return new ph(e,a)}function Tg(n,t){const e=Pi[0][0];if(t<e||t>Pi[Bl-1][0])return null;const i=mh((t-e)/bg,Bl-1);if(!n[i]){const r=n[i]=[];r[0]=Vl(Pi[i]).grav,r[Bn-1]=Vl(Pi[i+1]).grav;let a,o=r[0].tt;for(a=1;a<Bn-1;++a)r[a]=zl(o+=us,r[a-1]).grav;o=r[Bn-1].tt;var s=[];for(s[Bn-1]=r[Bn-1],a=Bn-2;a>0;--a)s[a]=zl(o-=us,s[a+1]).grav;for(a=Bn-2;a>0;--a){const l=a/(Bn-1);r[a].r=r[a].r.mul(1-l).add(s[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(s[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(s[a].a.mul(l))}}return n[i]}function Fu(n,t,e){let i=Vl(n);const s=Math.ceil((t-i.grav.tt)/e);for(let r=0;r<s;++r)i=zl(r+1===s?t:i.grav.tt+e,i.grav);return i}function gh(n,t){let e,i,s;const r=Tg(wg,n.tt);if(r){const a=mh((n.tt-r[0].tt)/us,Bn-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),u=fa(n.tt-o.tt,o.r,o.v,c),h=Uu(n.tt-o.tt,o.v,c),d=fa(n.tt-l.tt,l.r,l.v,c),f=Uu(n.tt-l.tt,l.v,c),g=(n.tt-o.tt)/us;e=u.mul(1-g).add(d.mul(g)),i=h.mul(1-g).add(f.mul(g))}else{let a;n.tt<Pi[0][0]?a=Fu(Pi[0],n.tt,-us):a=Fu(Pi[Bl-1],n.tt,+us),e=a.grav.r,i=a.grav.v,s=a.bary}return s||(s=new Ta(n.tt)),e=e.sub(s.Sun.r),i=i.sub(s.Sun.v),new ri(e.x,e.y,e.z,i.x,i.y,i.z,n)}function ci(n,t){var e=ge(t);if(n in Vn)return Gs(Vn[n],e);if(n===vt.Pluto){const a=gh(e);return new be(a.x,a.y,a.z,e)}if(n===vt.Sun)return new be(0,0,0,e);if(n===vt.Moon){var i=Gs(Vn.Earth,e),s=Zs(e);return new be(i.x+s.x,i.y+s.y,i.z+s.z,e)}if(n===vt.EMB){const a=Gs(Vn.Earth,e),o=Zs(e),l=1+rh;return new be(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,e)}if(n===vt.SSB)return yg(e);const r=uc(n);if(r){const a=new hh(r.dec,15*r.ra,r.dist);return Ig(a,e)}throw`HelioVector: Unknown body "${n}"`}function Ag(n,t){let e=t,i=0;for(let s=0;s<10;++s){const r=n(e),a=r.Length()/lc;if(a>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-a);if(i=Math.abs(o.tt-e.tt),i<1e-9)return r;e=o}throw`Light-travel time solver did not converge: dt = ${i}`}class Rg{constructor(t,e,i,s){this.observerBody=t,this.targetBody=e,this.aberration=i,this.observerPos=s}Position(t){this.aberration&&(this.observerPos=ci(this.observerBody,t));const e=ci(this.targetBody,t);return new be(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function Cg(n,t,e,i){ah(i);const s=ge(n);if(uc(e)){const o=ci(e,s);if(i){const c=Dg(t,s),u=new be(o.x-c.x,o.y-c.y,o.z-c.z,s),h=lc/u.Length();return new be(u.x+c.vx/h,u.y+c.vy/h,u.z+c.vz/h,s)}const l=ci(t,s);return new be(o.x-l.x,o.y-l.y,o.z-l.z,s)}let r;i?r=new be(0,0,0,s):r=ci(t,s);const a=new Rg(t,e,i,r);return Ag(o=>a.Position(o),s)}function Ra(n,t,e){ah(e);const i=ge(t);switch(n){case vt.Earth:return new be(0,0,0,i);case vt.Moon:return Zs(i);default:const s=Cg(i,vt.Earth,n,e);return s.t=i,s}}function Pg(n,t){return new ri(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,t)}function Dg(n,t){const e=ge(t);switch(n){case vt.Sun:return new ri(0,0,0,0,0,0,e);case vt.SSB:const i=new Ta(e.tt);return new ri(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,e);case vt.Mercury:case vt.Venus:case vt.Earth:case vt.Mars:case vt.Jupiter:case vt.Saturn:case vt.Uranus:case vt.Neptune:const s=kl(Vn[n],e.tt);return Pg(s,e);case vt.Pluto:return gh(e);case vt.Moon:case vt.EMB:const r=kl(Vn.Earth,e.tt),a=n==vt.Moon?dh(e):Mg(e);return new ri(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,e);default:if(uc(n)){const o=ci(n,e);return new ri(o.x,o.y,o.z,0,0,0,e)}throw`HelioState: Unsupported body "${n}"`}}var Ou;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(Ou||(Ou={}));function Lg(n,t){return new Ms([[t.rot[0][0]*n.rot[0][0]+t.rot[1][0]*n.rot[0][1]+t.rot[2][0]*n.rot[0][2],t.rot[0][1]*n.rot[0][0]+t.rot[1][1]*n.rot[0][1]+t.rot[2][1]*n.rot[0][2],t.rot[0][2]*n.rot[0][0]+t.rot[1][2]*n.rot[0][1]+t.rot[2][2]*n.rot[0][2]],[t.rot[0][0]*n.rot[1][0]+t.rot[1][0]*n.rot[1][1]+t.rot[2][0]*n.rot[1][2],t.rot[0][1]*n.rot[1][0]+t.rot[1][1]*n.rot[1][1]+t.rot[2][1]*n.rot[1][2],t.rot[0][2]*n.rot[1][0]+t.rot[1][2]*n.rot[1][1]+t.rot[2][2]*n.rot[1][2]],[t.rot[0][0]*n.rot[2][0]+t.rot[1][0]*n.rot[2][1]+t.rot[2][0]*n.rot[2][2],t.rot[0][1]*n.rot[2][0]+t.rot[1][1]*n.rot[2][1]+t.rot[2][1]*n.rot[2][2],t.rot[0][2]*n.rot[2][0]+t.rot[1][2]*n.rot[2][1]+t.rot[2][2]*n.rot[2][2]]])}function Ig(n,t){t=ge(t);const e=n.lat*Ot,i=n.lon*Ot,s=n.dist*Math.cos(e);return new be(s*Math.cos(i),s*Math.sin(i),n.dist*Math.sin(e),t)}function _h(n){const t=Ng(n);return new _g(t.lon/15,t.lat,t.dist,n)}function Ng(n){const t=n.x*n.x+n.y*n.y,e=Math.sqrt(t+n.z*n.z);let i,s;if(t===0){if(n.z===0)throw"Zero-length vector not allowed.";s=0,i=n.z<0?-90:90}else s=ha*Math.atan2(n.y,n.x),s<0&&(s+=360),i=ha*Math.atan2(n.z,Math.sqrt(t));return new hh(i,s,e)}function Ca(n,t){return new be(n.rot[0][0]*t.x+n.rot[1][0]*t.y+n.rot[2][0]*t.z,n.rot[0][1]*t.x+n.rot[1][1]*t.y+n.rot[2][1]*t.z,n.rot[0][2]*t.x+n.rot[1][2]*t.y+n.rot[2][2]*t.z,t.t)}function vh(n){n=ge(n);const t=ch(n,on.From2000),e=uh(n,on.From2000);return Lg(t,e)}function xh(n){const e=wa(ge(n)).tobl*Ot,i=Math.cos(e),s=Math.sin(e);return new Ms([[1,0,0],[0,+i,+s],[0,-s,+i]])}var ku;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(ku||(ku={}));var Bu;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Bu||(Bu={}));class Sh{constructor(t,e,i,s){this.ra=t,this.dec=e,this.spin=i,this.north=s}}function Ug(n){const t=Il([0,0,1],n,on.Into2000),e=da(t,n,on.Into2000),i=new be(e[0],e[1],e[2],n),s=_h(i),r=190.41375788700253+360.9856122880876*n.ut;return new Sh(s.ra,s.dec,r,i)}function Fg(n,t){const e=ge(t),i=e.tt,s=i/36525;let r,a,o;switch(n){case vt.Sun:r=286.13,a=63.87,o=84.176+14.1844*i;break;case vt.Mercury:r=281.0103-.0328*s,a=61.4155-.0049*s,o=329.5988+6.1385108*i+.01067257*Math.sin(Ot*(174.7910857+4.092335*i))-.00112309*Math.sin(Ot*(349.5821714+8.18467*i))-1104e-7*Math.sin(Ot*(164.3732571+12.277005*i))-2539e-8*Math.sin(Ot*(339.1643429+16.36934*i))-571e-8*Math.sin(Ot*(153.9554286+20.461675*i));break;case vt.Venus:r=272.76,a=67.16,o=160.2-1.4813688*i;break;case vt.Earth:return Ug(e);case vt.Moon:const d=Ot*(125.045-.0529921*i),f=Ot*(250.089-.1059842*i),g=Ot*(260.008+13.0120009*i),_=Ot*(176.625+13.3407154*i),m=Ot*(357.529+.9856003*i),p=Ot*(311.589+26.4057084*i),b=Ot*(134.963+13.064993*i),x=Ot*(276.617+.3287146*i),v=Ot*(34.226+1.7484877*i),T=Ot*(15.134-.1589763*i),E=Ot*(119.743+.0036096*i),C=Ot*(239.961+.1643573*i),L=Ot*(25.053+12.9590088*i);r=269.9949+.0031*s-3.8787*Math.sin(d)-.1204*Math.sin(f)+.07*Math.sin(g)-.0172*Math.sin(_)+.0072*Math.sin(p)-.0052*Math.sin(T)+.0043*Math.sin(L),a=66.5392+.013*s+1.5419*Math.cos(d)+.0239*Math.cos(f)-.0278*Math.cos(g)+.0068*Math.cos(_)-.0029*Math.cos(p)+9e-4*Math.cos(b)+8e-4*Math.cos(T)-9e-4*Math.cos(L),o=38.3213+(13.17635815-14e-13*i)*i+3.561*Math.sin(d)+.1208*Math.sin(f)-.0642*Math.sin(g)+.0158*Math.sin(_)+.0252*Math.sin(m)-.0066*Math.sin(p)-.0047*Math.sin(b)-.0046*Math.sin(x)+.0028*Math.sin(v)+.0052*Math.sin(T)+.004*Math.sin(E)+.0019*Math.sin(C)-.0044*Math.sin(L);break;case vt.Mars:r=317.269202-.10927547*s+68e-6*Math.sin(Ot*(198.991226+19139.4819985*s))+238e-6*Math.sin(Ot*(226.292679+38280.8511281*s))+52e-6*Math.sin(Ot*(249.663391+57420.7251593*s))+9e-6*Math.sin(Ot*(266.18351+76560.636795*s))+.419057*Math.sin(Ot*(79.398797+.5042615*s)),a=54.432516-.05827105*s+51e-6*Math.cos(Ot*(122.433576+19139.9407476*s))+141e-6*Math.cos(Ot*(43.058401+38280.8753272*s))+31e-6*Math.cos(Ot*(57.663379+57420.7517205*s))+5e-6*Math.cos(Ot*(79.476401+76560.6495004*s))+1.591274*Math.cos(Ot*(166.325722+.5042615*s)),o=176.049863+350.891982443297*i+145e-6*Math.sin(Ot*(129.071773+19140.0328244*s))+157e-6*Math.sin(Ot*(36.352167+38281.0473591*s))+4e-5*Math.sin(Ot*(56.668646+57420.929536*s))+1e-6*Math.sin(Ot*(67.364003+76560.2552215*s))+1e-6*Math.sin(Ot*(104.79268+95700.4387578*s))+.584542*Math.sin(Ot*(95.391654+.5042615*s));break;case vt.Jupiter:const w=Ot*(99.360714+4850.4046*s),M=Ot*(175.895369+1191.9605*s),D=Ot*(300.323162+262.5475*s),O=Ot*(114.012305+6070.2476*s),B=Ot*(49.511251+64.3*s);r=268.056595-.006499*s+117e-6*Math.sin(w)+938e-6*Math.sin(M)+.001432*Math.sin(D)+3e-5*Math.sin(O)+.00215*Math.sin(B),a=64.495303+.002413*s+5e-5*Math.cos(w)+404e-6*Math.cos(M)+617e-6*Math.cos(D)-13e-6*Math.cos(O)+926e-6*Math.cos(B),o=284.95+870.536*i;break;case vt.Saturn:r=40.589-.036*s,a=83.537-.004*s,o=38.9+810.7939024*i;break;case vt.Uranus:r=257.311,a=-15.175,o=203.81-501.1600928*i;break;case vt.Neptune:const G=Ot*(357.85+52.316*s);r=299.36+.7*Math.sin(G),a=43.46-.51*Math.cos(G),o=249.978+541.1397757*i-.48*Math.sin(G);break;case vt.Pluto:r=132.993,a=-6.163,o=302.695+56.3625225*i;break;default:throw`Invalid body: ${n}`}const l=a*Ot,c=r*Ot,u=Math.cos(l),h=new be(u*Math.cos(c),u*Math.sin(c),Math.sin(l),e);return new Sh(r/15,a,o,h)}function An(n){return new P(n.x,n.z,-n.y)}const Mh={Mercury:vt.Mercury,Venus:vt.Venus,Earth:vt.Earth,Mars:vt.Mars,Jupiter:vt.Jupiter,Saturn:vt.Saturn,Uranus:vt.Uranus,Neptune:vt.Neptune},yh=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];function Og(n,t){const e=ge(t),i=Fg(Mh[n],e),s=Ca(vh(e),i.north);return An(s).normalize()}function Js(n){return Ca(vh(n.t),n)}function Qs(n,t){const e=ge(t),i=Js(ci(Mh[n],e)),s=Js(ci(vt.Earth,e));return{helio:new P(i.x,i.y,i.z),geo:new P(i.x-s.x,i.y-s.y,i.z-s.z)}}function bh(n){const t=ge(n),e=Js(Ra(vt.Moon,t,!1));return new P(e.x,e.y,e.z)}function Eh(n){const t=ge(n),e=Js(Ra(vt.Sun,t,!0)),i=new P(e.x,e.y,e.z),s=i.length();return{dir:i.clone().normalize(),distanceAu:s}}function hc(n){return(mg(ge(n))*15%360+360)%360}function Hl(n){const t=ge(n),e=Js(Ra(vt.Sun,t,!0)),i=_h(e);let r=i.ra*15-hc(n);return r=((r+180)%360+360)%360-180,{lat:i.dec,lon:r}}function kg(n){const t=xh(ge(n)),e=Ca(t,new be(0,0,1,ge(n))),i=An(e).normalize(),s=Eh(n).dir,r=An(s).normalize(),a=i.clone().addScaledVector(r,-i.dot(r)).normalize(),o=a.clone().cross(r);return{x:r,y:o,z:a}}function Bg(n,t){return new P().addScaledVector(t.x,n.x).addScaledVector(t.y,n.y).addScaledVector(t.z,n.z)}function zg(n){const t=ge(n),i=(73.6667+1.3958333*(t.tt-15020)/36525-90)*Math.PI/180,s=(90-7.25)*Math.PI/180,r=new be(Math.cos(s)*Math.cos(i),Math.cos(s)*Math.sin(i),Math.sin(s),t),a=Ca(xh(t),r);return An(a).normalize()}const Vg=-.309,Hg=.087,Gg=`
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;
  void main() {
    vLocalNormal = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$g=`
  uniform sampler2D uSurface;
  uniform sampler2D uNight;        // Black Marble city lights; black until loaded
  uniform float uNightStrength;    // 0 hides the lights entirely
  uniform sampler2D uOverlay;      // vector coastlines, transparent until built
  uniform float uOverlayOn;        // 0/1 — the optional coastline layer
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

    // Night lights are measured emission (Black Marble, city lights), not
    // reflected light, so they are added *after* the day blend and are
    // strongest where the blend is most night. The raster's dark land/ocean
    // background comes with the lights; it is quiet enough to read as ground.
    vec3 lights = texture2D(uNight, vec2(u, 1.0 - v)).rgb;
    vec3 night = surface * uNightTint + lights * uNightStrength;
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

    // Vector coastlines, optional. They are dimmed on the night side so the
    // lines do not outshine the city lights, which is where the eye should be.
    vec4 overlay = texture2D(uOverlay, vec2(u, 1.0 - v));
    color = mix(color, overlay.rgb, overlay.a * uOverlayOn * (0.35 + 0.65 * day));

    gl_FragColor = vec4(color, 1.0);
    // A raw ShaderMaterial bypasses Three's automatic output conversion. The
    // texture is decoded sRGB -> linear on sampling, so without re-encoding
    // here every colour is written ~2.2 gamma too dark and the lit day side
    // reads as night.
    #include <colorspace_fragment>
  }
`,Wg=`
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Xg=`
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
`;function qg(){const n=document.createElement("canvas");return n.width=1,n.height=1,new Hs(n)}function zu(){const n=document.createElement("canvas");return n.width=1,n.height=1,new Hs(n)}function Vu(n){const t=new Ne(n);return t.colorSpace=Ie,t.magFilter=Ue,t.generateMipmaps=!0,t.minFilter=ii,t.anisotropy=8,t}class jg{group=new Ke;spin=new Ke;globe;material;atmosphere;atmosphereMat;auroraCanvas=null;auroraTexture=null;auroraStamp=null;nightTexture=null;dayTexture=null;overlayCanvas=null;overlayTexture=null;constructor(t=1){const e=new Hs(Y3(2048));e.colorSpace=Ie,e.minFilter=Ue,e.magFilter=Ue,e.anisotropy=4,this.material=new Je({uniforms:{uSurface:{value:e},uNight:{value:zu()},uNightStrength:{value:0},uOverlay:{value:zu()},uOverlayOn:{value:0},uAurora:{value:qg()},uAuroraStrength:{value:0},uSunDir:{value:new P(1,0,0)},uTwilightStart:{value:Vg},uTwilightEnd:{value:Hg},uNightTint:{value:new kt(.1,.13,.2)}},vertexShader:Gg,fragmentShader:$g}),this.globe=new Re(new di(t,96,64),this.material),this.globe.name="earth-globe",this.spin.name="earth-fixed-frame",this.spin.add(this.globe),this.group.add(this.spin),this.atmosphereMat=new Je({uniforms:{uSunDir:{value:new P(1,0,0)},uColor:{value:new kt(.38,.62,1)}},vertexShader:Wg,fragmentShader:Xg,transparent:!0,blending:Ze,depthWrite:!1,side:$e}),this.atmosphere=new Re(new di(t*1.05,64,48),this.atmosphereMat),this.group.add(this.atmosphere)}setAurora(t,e){if(!t||!e){this.material.uniforms.uAuroraStrength.value=0;return}this.auroraStamp!==t.forecast_time&&(this.auroraStamp=t.forecast_time,this.auroraCanvas=Z3(t.grid,this.auroraCanvas??void 0),this.auroraTexture||(this.auroraTexture=new Hs(this.auroraCanvas),this.auroraTexture.colorSpace=Ie,this.auroraTexture.minFilter=Ue,this.auroraTexture.magFilter=Ue,this.material.uniforms.uAurora.value=this.auroraTexture),this.auroraTexture.needsUpdate=!0),this.material.uniforms.uAuroraStrength.value=1/100}setDayImage(t){this.dayTexture?.dispose(),this.dayTexture=Vu(t),this.material.uniforms.uSurface.value=this.dayTexture}setNightImage(t){this.nightTexture?.dispose(),this.nightTexture=Vu(t),this.material.uniforms.uNight.value=this.nightTexture,this.material.uniforms.uNightStrength.value=1}get surfaceIsImagery(){return this.dayTexture!==null}get lightsAreLoaded(){return this.nightTexture!==null}setCoastOverlay(t){this.material.uniforms.uOverlayOn.value=t?1:0,!(!t||this.overlayTexture)&&(this.overlayCanvas=K3(2048),this.overlayTexture=new Hs(this.overlayCanvas),this.overlayTexture.colorSpace=Ie,this.overlayTexture.minFilter=Ue,this.overlayTexture.magFilter=Ue,this.material.uniforms.uOverlay.value=this.overlayTexture)}get coastOverlayOn(){return this.material.uniforms.uOverlayOn.value>0}setRadius(t){this.globe.scale.setScalar(t),this.atmosphere.scale.setScalar(t)}update(t,e){this.spin.rotation.y=hc(t)*Math.PI/180,this.material.uniforms.uSunDir.value.copy(e),this.atmosphereMat.uniforms.uSunDir.value.copy(e)}dispose(){this.globe.geometry.dispose(),this.material.dispose(),this.atmosphereMat.dispose(),this.atmosphere.geometry.dispose(),this.material.uniforms.uSurface.value.dispose(),this.auroraTexture?.dispose(),this.dayTexture?.dispose(),this.nightTexture?.dispose(),this.overlayTexture?.dispose()}}const ys=1495978707e-1,tr={Sun:695700,Mercury:2439.7,Venus:6051.8,Earth:6371,Mars:3389.5,Jupiter:69911,Saturn:58232,Uranus:25362,Neptune:24622,Moon:1737.4},Hu={inner:1.24,outer:2.27},pa=8,Yg=3,Kg=.05;function bs(n,t){return t==="true"?n*pa:Yg*Math.log10(1+n/Kg)}function Qn(n,t){const e=tr[n]/ys;if(t==="true")return e*pa;const i={Sun:10,Mercury:380,Venus:265,Earth:300,Mars:360,Moon:320,Jupiter:54,Saturn:58,Uranus:103,Neptune:103};return e*pa*i[n]}function wh(n){return n==="globe"?"Globe scale — distances log-compressed, bodies enlarged":"True scale — distances and sizes to scale"}function Zg(n,t,e){return t==="true"?n*pa:e*3.2*(n/.00257)}const Jg=235,Qg=16;function Gu(n,t){return t==="true"?n:n/Jg*Qg}const t4=tr.Sun/ys,e4=`
  varying vec3 vLocal;
  void main() {
    // Position on the unit sphere in the Sun's own frame — the projection is
    // defined there, not in view space, so it does not move with the camera.
    vLocal = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,n4=`
  uniform sampler2D uDisk;
  uniform float uHasImage;
  uniform vec3 uEarthDir;     // unit, Sun -> Earth
  uniform vec3 uNorth;        // unit, solar rotation axis
  uniform vec2 uCentre;       // disk centre in texture coordinates
  uniform float uRadius;      // disk radius, fraction of image width
  uniform vec3 uBase;
  uniform vec3 uUnobserved;
  varying vec3 vLocal;

  void main() {
    vec3 n = normalize(vLocal);
    float facing = dot(n, uEarthDir);

    if (uHasImage < 0.5) {
      gl_FragColor = vec4(uBase, 1.0);
      #include <colorspace_fragment>
      return;
    }

    // The image plane: up is solar north with the line-of-sight component
    // removed, right completes a right-handed set about the direction to Earth.
    vec3 up = normalize(uNorth - uEarthDir * dot(uNorth, uEarthDir));
    vec3 right = normalize(cross(up, uEarthDir));

    // Orthographic projection, in solar radii, then into texture space. The
    // aspect is 1:1 because these frames are square.
    vec2 d = vec2(dot(n, right), dot(n, up));
    vec2 uv = uCentre + d * uRadius;

    vec3 img = texture2D(uDisk, uv).rgb;

    // The far side has not been observed. Fade across the limb rather than
    // cutting hard, because the projection degenerates there — a sliver of
    // sphere maps to a whole pixel — and a hard edge would read as a feature.
    float lit = smoothstep(-0.02, 0.20, facing);
    gl_FragColor = vec4(mix(uUnobserved, img, lit), 1.0);
    #include <colorspace_fragment>
  }
`,i4=`
  uniform vec3 uEarthDir;
  uniform vec3 uNorth;
  uniform float uExtent;      // half-width of the quad, scene units
  varying vec2 vRsun;         // position on the image plane, in solar radii
  uniform float uCover;       // half-width of the quad, solar radii

  void main() {
    // The same image plane the disc projects through: up is solar north with
    // the line-of-sight component removed, right completes the set about the
    // direction to Earth. Built here rather than by orienting the mesh, so the
    // two can never drift apart.
    vec3 up = normalize(uNorth - uEarthDir * dot(uNorth, uEarthDir));
    vec3 right = normalize(cross(up, uEarthDir));

    vRsun = position.xy * uCover;
    vec3 local = (right * position.x + up * position.y) * uExtent;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(local, 1.0);
  }
`,s4=`
  uniform sampler2D uImage;
  uniform vec2 uCentre;       // Sun centre in texture coordinates
  uniform float uRsun;        // one solar radius, fraction of image width
  uniform float uInner;       // draw nothing inside this, solar radii
  uniform float uInnerSoft;   // ...fading in to here
  uniform float uEdge;        // field of view radius, solar radii
  uniform vec3 uFloor;        // sky pedestal of the palette, per channel
  uniform float uFloorMix;    // how much of that pedestal to lift, 0..1
  uniform float uSkyOpacity;  // opacity of the darkest sky; bright detail is opaque
  uniform float uIntensity;
  varying vec2 vRsun;

  void main() {
    float r = length(vRsun);

    // Nothing inside the inner radius. For a coronagraph that is the occulted
    // zone, where the instrument saw nothing — and discarding it takes the
    // drawn limb circle with it. For a disk image it is the limb, because
    // everything inside is already on the sphere.
    if (r < uInner) discard;

    // The field of view is a circle. The frame it arrives in is a square, and
    // rendering the square would draw a rectangle of sky around the corona
    // whose corners are the vignette, not the Sun.
    if (r > uEdge) discard;

    vec2 uv = uCentre + vRsun * uRsun;
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;

    vec3 c = texture2D(uImage, uv).rgb;

    // The exposure is shown as the instrument rendered it. A fraction of the
    // palette's own zero can be lifted so the empty sky sits a little quieter
    // than the corona in it, but the picture stays a picture: this is a
    // mask, not a re-exposure.
    c = max(c - uFloor * uFloorMix, vec3(0.0)) / max(vec3(1e-3), vec3(1.0) - uFloor * uFloorMix);

    // The circle is the alpha. Soft at both ends, so neither cut reads as an
    // edge: wide at an occulter, whose rim is genuinely soft; nearly nothing at
    // a limb, where the card has to meet the sphere without a gap.
    float mask = smoothstep(uInner, uInnerSoft, r)
               * (1.0 - smoothstep(uEdge * 0.90, uEdge, r));

    // Bright structure is opaque; the darkest sky lets a little of the scene
    // through, so stars and the wind read faintly behind the empty parts of
    // the frame and the plane sits in space rather than on top of it.
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float alpha = mask * mix(uSkyOpacity, 1.0, clamp(lum * 1.5, 0.0, 1.0));

    gl_FragColor = vec4(c * uIntensity, alpha);
    #include <colorspace_fragment>
  }
`,$u={coronagraph:.2,disk:0},Wu={coronagraph:.8,disk:.3},r4=6.32;class Xu{mesh;mat;texture=null;cal=null;mode="globe";constructor(t){this.mat=new Je({uniforms:{uImage:{value:null},uEarthDir:{value:new P(1,0,0)},uNorth:{value:new P(0,1,0)},uCentre:{value:new Vt(.5,.5)},uRsun:{value:.02},uInner:{value:1},uInnerSoft:{value:1.05},uEdge:{value:6},uFloor:{value:new P(0,0,0)},uFloorMix:{value:$u.coronagraph},uSkyOpacity:{value:Wu.coronagraph},uExtent:{value:1},uCover:{value:1},uIntensity:{value:1}},vertexShader:i4,fragmentShader:s4,transparent:!0,blending:Di,depthWrite:!1,side:hn}),this.mesh=new Re(new cr(2,2),this.mat),this.mesh.visible=!1,this.mesh.renderOrder=t}get visible(){return this.mesh.visible}reachRsun(){return this.mesh.visible&&this.cal?this.cal.halfWidthRsun:0}set(t,e){if(!t||!e){this.mesh.visible=!1,this.cal=null;return}const i=new Ne(t);i.colorSpace=Ie,i.needsUpdate=!0,this.texture?.dispose(),this.texture=i,this.cal=e;const s=this.mat.uniforms;s.uImage.value=i,s.uCentre.value.set(e.centre.u,e.centre.v),s.uRsun.value=e.rsun,s.uInner.value=e.innerRsun,s.uInnerSoft.value=e.innerRsun*(e.kind==="disk"?1.015:1.15),s.uFloor.value.set(e.background.r,e.background.g,e.background.b),s.uFloorMix.value=$u[e.kind],s.uSkyOpacity.value=Wu[e.kind],this.applyScale(),this.mesh.visible=!0}setScaleMode(t){this.mode=t,this.applyScale()}setViewGeometry(t,e){this.mat.uniforms.uEarthDir.value.copy(t).normalize(),this.mat.uniforms.uNorth.value.copy(e).normalize()}applyScale(){if(!this.cal)return;const t=this.cal.halfWidthRsun;this.mat.uniforms.uExtent.value=bs(t*t4,this.mode),this.mat.uniforms.uCover.value=t,this.mat.uniforms.uEdge.value=t}dispose(){this.texture?.dispose(),this.mat.dispose(),this.mesh.geometry.dispose()}}class a4{group=new Ke;disc;discMat;texture=null;image=null;calibration=null;diskPlane=new Xu(2);coronaPlane=new Xu(3);constructor(t=1){this.discMat=new Je({uniforms:{uDisk:{value:null},uHasImage:{value:0},uEarthDir:{value:new P(1,0,0)},uNorth:{value:new P(0,1,0)},uCentre:{value:new Vt(.5,.5)},uRadius:{value:.3},uBase:{value:new kt(1,.93,.76)},uUnobserved:{value:new kt(.055,.042,.038)}},vertexShader:e4,fragmentShader:n4}),this.disc=new Re(new di(t,64,48),this.discMat),this.disc.name="sun-disc",this.group.add(this.disc),this.group.add(this.diskPlane.mesh),this.group.add(this.coronaPlane.mesh)}setRadius(t){this.disc.scale.setScalar(t)}setScaleMode(t){this.diskPlane.setScaleMode(t),this.coronaPlane.setScaleMode(t)}setDiskPlane(t,e){this.diskPlane.set(t,e)}setCoronaPlane(t,e){this.coronaPlane.set(t,e)}setImage(t,e){if(!t||!e){this.discMat.uniforms.uHasImage.value=0,this.image=null,this.calibration=null;return}this.image=t,this.calibration=e;const i=new Ne(t);i.colorSpace=Ie,i.needsUpdate=!0,this.texture?.dispose(),this.texture=i,this.discMat.uniforms.uDisk.value=i,this.discMat.uniforms.uCentre.value.set(e.centre.u,e.centre.v),this.discMat.uniforms.uRadius.value=e.radius,this.discMat.uniforms.uHasImage.value=1}reachRsun(){return Math.max(r4,this.diskPlane.reachRsun(),this.coronaPlane.reachRsun())}get hasImage(){return this.discMat.uniforms.uHasImage.value===1}projection(){return!this.image||!this.calibration?null:{image:this.image,calibration:this.calibration,north:this.discMat.uniforms.uNorth.value.clone(),earthDir:this.discMat.uniforms.uEarthDir.value.clone()}}setViewGeometry(t,e){this.discMat.uniforms.uEarthDir.value.copy(t).normalize(),this.discMat.uniforms.uNorth.value.copy(e).normalize(),this.diskPlane.setViewGeometry(t,e),this.coronaPlane.setViewGeometry(t,e)}dispose(){this.texture?.dispose(),this.discMat.dispose(),this.disc.geometry.dispose(),this.diskPlane.dispose(),this.coronaPlane.dispose()}}const Jn=256,Th=.94,o4=.12,l4=.92;function c4(n){const t=document.createElement("canvas");t.width=Jn,t.height=Jn;const e=t.getContext("2d",{willReadFrequently:!0});if(!e)return null;let i;try{e.drawImage(n,0,0,Jn,Jn),i=e.getImageData(0,0,Jn,Jn).data}catch{return null}return Ah(u4(i,Jn),Jn)}function u4(n,t){const e=new Float32Array(t*t);for(let i=0;i<t*t;i++)e[i]=.299*n[i*4]+.587*n[i*4+1]+.114*n[i*4+2];return e}function Ah(n,t){const e=Math.floor(t*Th);if(e<8)return null;let i=qu(n,t,e,null);if(!i)return null;let s=ju(n,t,e,i);if(s<0)return null;for(let r=0;r<2;r++){const a=qu(n,t,e,{...i,r:s*1.05});if(!a)break;const o=ju(n,t,e,a);if(o<=0)break;i=a,s=o}return{centre:{u:i.x/t,v:1-i.y/t},radius:s/t}}function qu(n,t,e,i){let s=0,r=0,a=0;for(let o=0;o<e;o++)for(let l=0;l<t;l++){if(i&&Math.hypot(l-i.x,o-i.y)>i.r)continue;const c=n[o*t+l]**2;s+=l*c,r+=o*c,a+=c}return a>0?{x:s/a,y:r/a}:null}function ju(n,t,e,i){const s=Math.floor(t/2),r=new Float64Array(s),a=new Float64Array(s);for(let h=0;h<e;h++)for(let d=0;d<t;d++){const f=Math.round(Math.hypot(d-i.x,h-i.y));f>=s||(r[f]+=n[h*t+d],a[f]+=1)}let o=-1,l=0;const c=Math.floor(s*o4),u=Math.floor(s*l4);for(let h=c;h<u-1;h++){if(a[h]===0||a[h+1]===0)continue;const d=r[h]/a[h]-r[h+1]/a[h+1];d>l&&(l=d,o=h)}return o}const Me=512,h4=[.05,.075,.11,.16],Rh=190,Ch=25,d4=.25,Yu=24,f4=2.5,p4=.6,m4=.25,_o=24;function Ku(n){const t=n.length;if(t<3)return null;let e=0,i=0,s=0,r=0,a=0,o=0,l=0,c=0;for(const{x,y:v}of n){const T=x*x+v*v;e+=x,i+=v,s+=x*x,r+=v*v,a+=x*v,o+=x*T,l+=v*T,c+=T}const u=2*(s-e*e/t),h=2*(a-e*i/t),d=2*(r-i*i/t),f=o-e*c/t,g=l-i*c/t,_=u*d-h*h;if(Math.abs(_)<1e-9)return null;const m=(f*d-h*g)/_,p=(u*g-f*h)/_;let b=0;for(const{x,y:v}of n)b+=Math.hypot(x-m,v-p);return{cx:m,cy:p,r:b/t}}function g4(n,t,e){const i=n.map(s=>Math.hypot(s.x-t,s.y-e)).sort((s,r)=>s-r);return(i[Math.floor(i.length*.9)]-i[Math.floor(i.length*.1)])/2}function _4(n,t){for(const e of h4){const i=v4(n,t,Math.round(t*e));if(i)return i}return null}function v4(n,t,e){const i=t/2;let s=[];for(let u=Math.max(0,Math.floor(i-e));u<Math.min(t,i+e);u++)for(let h=Math.max(0,Math.floor(i-e));h<Math.min(t,i+e);h++){const d=(u*t+h)*4,f=n[d],g=n[d+1],_=n[d+2],m=Math.min(f,g,_);m>Rh&&Math.max(f,g,_)-m<Ch&&s.push({x:h,y:u})}if(s.length<Yu)return null;let r=Ku(s);if(!r)return null;for(let u=0;u<3;u++){const h=s.filter(f=>Math.abs(Math.hypot(f.x-r.cx,f.y-r.cy)-r.r)<2.5);if(h.length<Yu)break;const d=Ku(h);if(!d)break;s=h,r=d}if(r.r<=1||r.r>e)return null;const a=g4(s,r.cx,r.cy);if(a>f4||x4(s,r.cx,r.cy)<p4||S4(n,t,r.cx,r.cy,r.r,s.length)>m4)return null;const o=M4(n,t,r.cx,r.cy,r.r),l=t/2/r.r,c=Ph(n,t,r.cx,r.cy,o,l*r.r);return{kind:"coronagraph",centre:{u:r.cx/t,v:1-r.cy/t},rsun:r.r/t,halfWidthRsun:l,innerRsun:o/r.r,background:c,residualPx:a}}function x4(n,t,e){const i=new Set;for(const{x:s,y:r}of n){const a=Math.atan2(r-e,s-t)+Math.PI;i.add(Math.min(_o-1,Math.floor(a/(2*Math.PI)*_o)))}return i.size/_o}function S4(n,t,e,i,s,r){const a=s*.6;let o=0;const l=Math.max(0,Math.floor(e-a)),c=Math.min(t,Math.ceil(e+a)),u=Math.max(0,Math.floor(i-a)),h=Math.min(t,Math.ceil(i+a));for(let d=u;d<h;d++)for(let f=l;f<c;f++){if(Math.hypot(f-e,d-i)>a)continue;const g=(d*t+f)*4,_=n[g],m=n[g+1],p=n[g+2],b=Math.min(_,m,p);b>Rh&&Math.max(_,m,p)-b<Ch&&o++}return r>0?o/r:1}function Ph(n,t,e,i,s,r){const a=[[],[],[]];for(let l=0;l<t;l+=2)for(let c=0;c<t;c+=2){const u=Math.hypot(c-e,l-i);if(u<s||u>r)continue;const h=(l*t+c)*4;a[0].push(n[h]),a[1].push(n[h+1]),a[2].push(n[h+2])}if(a[0].length<32)return{r:0,g:0,b:0};const o=l=>(l.sort((c,u)=>c-u),l[Math.floor(l.length*d4)]/255);return{r:o(a[0]),g:o(a[1]),b:o(a[2])}}function M4(n,t,e,i,s){const r=Math.floor(t/2),a=new Float64Array(r),o=new Uint32Array(r);for(let f=0;f<t;f++)for(let g=0;g<t;g++){const _=Math.round(Math.hypot(g-e,f-i));if(_>=r)continue;const m=(f*t+g)*4;a[_]+=(n[m]+n[m+1]+n[m+2])/3,o[_]+=1}const l=new Float64Array(r);for(let f=0;f<r;f++)l[f]=o[f]?a[f]/o[f]:0;const c=Math.max(2,Math.ceil(s*1.3)),u=Math.min(r-2,Math.floor(s*8));let h=Math.round(s*2.2),d=0;for(let f=c;f<u;f++){const g=l[f+1]-l[f-1];g>d&&(d=g,h=f)}return h}function y4(n){const t=document.createElement("canvas");t.width=Me,t.height=Me;const e=t.getContext("2d",{willReadFrequently:!0});if(!e)return null;try{return e.drawImage(n,0,0,Me,Me),_4(e.getImageData(0,0,Me,Me).data,Me)}catch{return null}}function b4(n){const t=document.createElement("canvas");t.width=Me,t.height=Me;const e=t.getContext("2d",{willReadFrequently:!0});if(!e)return null;let i;try{e.drawImage(n,0,0,Me,Me),i=e.getImageData(0,0,Me,Me).data}catch{return null}const s=new Float32Array(Me*Me);for(let c=0,u=0;c<s.length;c++,u+=4)s[c]=(i[u]+i[u+1]+i[u+2])/3;const r=Ah(s,Me);if(!r||r.radius<=0)return null;const a=r.radius*Me,o=r.centre.u*Me,l=(1-r.centre.v)*Me;return{kind:"disk",centre:r.centre,rsun:r.radius,halfWidthRsun:E4(Me,l,a),innerRsun:1,background:Ph(i,Me,o,l,a,Me/2),residualPx:null}}function E4(n,t,e){return Math.min(n/2/e,(Th*n-t)/e)}const ra={Mercury:10260355,Venus:14731680,Earth:4882357,Mars:12673340,Jupiter:14070924,Saturn:14930082,Uranus:10475742,Neptune:5996500};function w4(n){const t=new Re(new ba(1,1.12,32),new Ts({color:n,transparent:!0,opacity:.55,side:hn,blending:Ze,depthWrite:!1}));return t.renderOrder=3,t}class T4{constructor(t){this.name=t,this.mesh=new Re(new di(1,40,28),new K0({color:ra[t],emissive:ra[t],emissiveIntensity:.12})),this.mesh.name=`planet-${t}`,this.marker=w4(ra[t]),this.group.add(this.mesh,this.marker),t==="Saturn"&&(this.rings=new Re(new ba(Hu.inner,Hu.outer,72),new Ts({color:15260853,transparent:!0,opacity:.42,side:hn,depthWrite:!1})),this.rings.name="saturn-rings",this.group.add(this.rings))}name;group=new Ke;mesh;marker;rings=null;update(t,e,i){const s=Qs(this.name,t).helio,r=An(s),a=r.length();r.normalize().multiplyScalar(bs(a,e)),this.group.position.copy(r);const o=Qn(this.name,e);this.mesh.scale.setScalar(o),this.rings&&(this.rings.scale.setScalar(o),this.rings.quaternion.setFromUnitVectors(new P(0,0,1),Og(this.name,t)),this.rings.visible=o>.004);const c=i.distanceTo(r)*.012;this.marker.scale.setScalar(c),this.marker.visible=o<c*.9,this.marker.lookAt(i)}}class A4{line;constructor(t,e,i){const s=new xe;this.line=new ya(s,new Fi({color:ra[t],transparent:!0,opacity:.22})),this.line.name=`orbit-${t}`,this.rebuild(t,e,i)}rebuild(t,e,i){const s={Mercury:87.97,Venus:224.7,Earth:365.256,Mars:686.98,Jupiter:4332.6,Saturn:10759,Uranus:30689,Neptune:60195},r=240,a=[];for(let o=0;o<=r;o++){const l=new Date(i.getTime()+o/r*s[t]*864e5),c=An(Qs(t,l).helio),u=c.length();c.normalize().multiplyScalar(bs(u,e)),a.push(c.x,c.y,c.z)}this.line.geometry.setAttribute("position",new ie(a,3)),this.line.geometry.computeBoundingSphere()}}class R4{mesh;constructor(){this.mesh=new Re(new di(1,32,24),new K0({color:new kt(.72,.71,.68)})),this.mesh.name="moon"}}function C4(){const n=new Map;for(const t of yh)n.set(t,new T4(t));return n}function P4(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function D4(n=2600,t=900){const e=P4(3928446791),i=[],s=[];for(let l=0;l<n;l++){const c=e()*2-1,u=e()*Math.PI*2,h=Math.sqrt(1-c*c);i.push(t*h*Math.cos(u),t*c,t*h*Math.sin(u));const d=.65+e()*.35,f=e();s.push(d*(.85+f*.15),d*.9,d*(1-f*.12))}const r=new xe;r.setAttribute("position",new ie(i,3)),r.setAttribute("color",new ie(s,3));const a=new q0({size:1.4,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.85,blending:Ze,depthWrite:!1}),o=new Yf(r,a);return o.name="starfield",o.frustumCulled=!1,o}const Zu={type:"change"},dc={type:"start"},Dh={type:"end"},Hr=new Ma,Ju=new ti,L4=Math.cos(70*vf.DEG2RAD),Te=new P,qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vo=1e-6;class I4 extends s1{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ni,this._lastTargetPosition=new P,this._quat=new Ni().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ru,this._sphericalDelta=new ru,this._scale=1,this._panOffset=new P,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new P,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U4.bind(this),this._onPointerDown=N4.bind(this),this._onPointerUp=F4.bind(this),this._onContextMenu=G4.bind(this),this._onMouseWheel=B4.bind(this),this._onKeyDown=z4.bind(this),this._onTouchStart=V4.bind(this),this._onTouchMove=H4.bind(this),this._onMouseDown=O4.bind(this),this._onMouseMove=k4.bind(this),this._interceptControlDown=$4.bind(this),this._interceptControlUp=W4.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<L4?this.object.lookAt(this.target):(Ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(Ju,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vo||this._lastTargetPosition.distanceToSquared(this.target)>vo?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function N4(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function U4(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function F4(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dh),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function O4(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case ds.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case ds.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(dc)}function k4(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function B4(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dh))}function z4(n){this.enabled!==!1&&this._handleKeyDown(n)}function V4(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(dc)}function H4(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function G4(n){this.enabled!==!1&&n.preventDefault()}function $4(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W4(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const er=[{id:"deck",label:"Deck",title:"Behind Earth looking back down the Sun–Earth line: both bodies in frame, with the wind and the field lines running between them"},{id:"sunward",label:"Sunward",title:"Looking down the Sun–Earth line from the Sun: the magnetopause face-on"},{id:"profile",label:"Profile",title:"The noon–midnight meridian: nose compression against tail flaring"},{id:"polar",label:"Polar",title:"Over the north pole with noon at the top: the auroral oval as a ring, offset because it encircles the magnetic pole rather than this one"},{id:"corona",label:"Corona",title:"The Sun from where we stand, framed for the coronagraphs: LASCO photographs down this exact line, so its image plane is face-on here"},{id:"system",label:"System",title:"The whole solar system, all eight planets at their true positions"}],X4=1100,q4=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;class j4{camera;controls;view="deck";upHint=new P(0,1,0);from=new P;to=new P;fromTarget=new P;toTarget=new P;startedAt=0;transitioning=!1;reducedMotion=!1;constructor(t,e){this.camera=new sn(45,e,5e-4,5e3),this.camera.position.set(0,2.2,7.5),this.controls=new I4(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=.02,this.controls.maxDistance=400,this.controls.enablePan=!0}setReducedMotion(t){this.reducedMotion=t}goTo(t,e,i,s,r,a=!1){this.view=t;const o=new P(0,1,0);let l=t==="system"||t==="corona"?new P(0,0,0):e.clone(),c;if(t==="profile"){const u=new P().crossVectors(s,o).normalize();l=e.clone().addScaledVector(s,-i*6),c=e.clone().add(u.multiplyScalar(i*52)).add(s.clone().multiplyScalar(i*4)).add(new P(0,i*18,0))}else if(t==="sunward")c=e.clone().addScaledVector(s,i*26);else if(t==="polar")c=e.clone().addScaledVector(o,i*3.4);else if(t==="corona"){const u=r/Math.tan(this.camera.fov*Math.PI/360);c=s.clone().negate().normalize().multiplyScalar(u*1.25)}else if(t==="deck"){const u=new P().crossVectors(s,o).normalize();c=e.clone().addScaledVector(s,-i*14).add(u.multiplyScalar(i*1.5)).add(new P(0,i*1.5,0))}else c=new P(0,8.5,19);this.upHint=t==="polar"?s.clone().negate().normalize():o.clone(),this.camera.up.copy(this.upHint),this.animateTo(c,l,a)}animateTo(t,e,i=!1){if(this.reducedMotion||i){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update(),this.transitioning=!1;return}this.from.copy(this.camera.position),this.to.copy(t),this.fromTarget.copy(this.controls.target),this.toTarget.copy(e),this.startedAt=performance.now(),this.transitioning=!0}update(){if(this.transitioning){const t=Math.min(1,(performance.now()-this.startedAt)/X4),e=q4(t);this.camera.position.lerpVectors(this.from,this.to,e),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,e),t>=1&&(this.transitioning=!1)}this.controls.update()}followTarget(t){if(this.view!=="deck"||this.transitioning)return;const e=t.clone().sub(this.controls.target);e.lengthSq()!==0&&(this.controls.target.copy(t),this.camera.position.add(e))}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose()}}const nr=13,Pa=2025,ma=2030,Y4=6371.2,Ye=(n,t)=>n*(n+1)/2+t,ga=[0,-29350,-1410.3,-2556.2,2950.9,1648.7,1360.9,-2404.2,1243.8,453.4,894.7,799.6,55.8,-281.1,12,-232.9,369,187.2,-138.7,-141.9,20.9,64.3,63.8,76.7,-115.7,-40.9,14.9,-60.8,79.6,-76.9,-8.8,59.3,15.8,2.5,-11.2,14.3,23.1,10.9,-17.5,2,-21.8,16.9,14.9,-16.8,1,4.7,8,3,-.2,-2.5,-13.1,2.4,8.6,-8.7,-12.8,-1.3,-6.4,.2,2,-1,-.5,-.9,1.5,.9,-2.6,-3.9,3,-1.4,-2.5,2.4,-.6,0,-.6,-.1,1.1,-1,-.1,2.6,-2,-.1,.4,1.2,-1.2,.6,.5,.5,-.1,-.5,-.2,-1.2,-.7,.2,-.9,.6,.7,-.2,.5,.1,.7,0,.3,.2,.4,-.5,-.4],Lh=[0,0,4545.5,0,-3133.6,-814.2,0,-56.9,237.6,-549.6,0,278.6,-134,212,-375.4,0,45.3,220,-122.9,42.9,106.2,0,-18.4,16.8,48.9,-59.8,10.9,72.8,0,-48.9,-14.4,-1,23.5,-7.4,-25.1,-2.2,0,7.2,-12.6,11.5,-9.7,12.7,.7,-5.2,3.9,0,-24.8,12.1,8.3,-3.4,-5.3,7.2,-.6,.8,9.8,0,3.3,.1,2.5,5.4,-9,.4,-4.2,-3.8,.9,-9,0,0,2.8,-.6,.1,.5,-.3,-1.2,-1.7,-2.9,-1.8,-2.3,0,-1.2,.6,1,-1.5,0,.6,-.2,.8,.1,-.9,.1,.2,0,-.9,.7,1.2,-.3,-1.3,-.1,.2,-.2,.5,.6,-.6,-.3,-.5],K4=[0,12.6,10,-11.2,-5.3,-8.3,-1.5,-4.4,.4,-15.6,-1.7,-2.3,-5.8,5.4,-6.8,.6,1.3,0,.7,2.3,1,-.2,-.3,.8,1.2,-.8,.4,.9,-.1,-.1,-.1,.5,-.1,-.8,-.8,.9,-.1,.2,0,.4,-.1,.3,.1,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],Z4=[0,0,-21.5,0,-27.3,-11.1,0,3.8,-.2,-3.9,0,-1.3,4.1,1.6,-4.1,0,-.5,2.1,.5,1.7,1.9,0,.3,-1.6,-.4,.8,.7,.9,0,.6,.5,-.7,0,-.9,.5,-.3,0,-.3,.4,-.3,.4,-.5,-.6,.3,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function Da(n){const t=n.getUTCFullYear(),e=Date.UTC(t,0,1),i=Date.UTC(t+1,0,1);return t+(n.getTime()-e)/(i-e)}function Ih(n){const t=Da(n);return t>=Pa&&t<=ma}function Nh(n){const t=`IGRF-14 (IAGA, epoch ${Pa.toFixed(1)}`;return Ih(n)?`${t}, secular variation to now)`:`${t}, extrapolated past its ${ma.toFixed(1)} validity limit)`}function J4(n){const t=n-Pa,e=ga.length,i=new Float64Array(e),s=new Float64Array(e);for(let r=0;r<e;r++)i[r]=ga[r]+t*K4[r],s[r]=Lh[r]+t*Z4[r];return{g:i,h:s}}let Qu=Number.NaN,xo=null;function Uh(n){const t=Math.round(n*100)/100;return(t!==Qu||!xo)&&(Qu=t,xo=J4(t)),xo}const Fh=Ye(nr,nr)+1,je=new Float64Array(Fh),yn=new Float64Array(Fh),So=new Float64Array(nr+1),Mo=new Float64Array(nr+1);function Q4(n,t,e,i){const{g:s,h:r}=Uh(Da(i)),a=nr,o=1e-8;let l=Math.cos(n),c=Math.sin(n);Math.abs(c)<o&&(c=c>=0?o:-o,l=Math.sign(l)*Math.sqrt(1-o*o)),je[Ye(0,0)]=1,yn[Ye(0,0)]=0;for(let _=1;_<=a;_++)for(let m=0;m<=_;m++){const p=Ye(_,m);if(_===m)if(_===1)je[p]=c,yn[p]=l;else{const b=Math.sqrt((2*_-1)/(2*_)),x=Ye(_-1,_-1);je[p]=b*c*je[x],yn[p]=b*(c*yn[x]+l*je[x])}else{const b=Math.sqrt(_*_-m*m),x=(2*_-1)/b,v=Ye(_-1,m);if(_-2>=m){const T=Math.sqrt((_-1)*(_-1)-m*m)/b,E=Ye(_-2,m);je[p]=x*l*je[v]-T*je[E],yn[p]=x*(l*yn[v]-c*je[v])-T*yn[E]}else je[p]=x*l*je[v],yn[p]=x*(l*yn[v]-c*je[v])}}for(let _=0;_<=a;_++)So[_]=Math.cos(_*t),Mo[_]=Math.sin(_*t);const u=Y4/e;let h=0,d=0,f=0,g=u*u;for(let _=1;_<=a;_++){g*=u;let m=0,p=0,b=0;for(let x=0;x<=_;x++){const v=Ye(_,x),T=s[v],E=r[v],C=T*So[x]+E*Mo[x];m+=C*je[v],p+=C*yn[v],b+=x*(T*Mo[x]-E*So[x])*je[v]}h+=g*(_+1)*m,d-=g*p,f+=g*b}return f/=c,{br:h,btheta:d,bphi:f}}function t_(n,t,e=new P){const i=n.length();if(i<1)return e.set(0,0,0);const s=Math.acos(Math.max(-1,Math.min(1,n.z/i))),r=Math.atan2(n.y,n.x),{br:a,btheta:o,bphi:l}=Q4(s,r,i,t),c=Math.sin(s),u=Math.cos(s),h=Math.sin(r),d=Math.cos(r);return e.set(a*c*d+o*u*d-l*h,a*c*h+o*u*h+l*d,a*u-o*c)}function e_(n,t,e,i){const s=Math.PI/180,r=n*s,a=e*s,o=(i-t)*s,l=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(o);return Math.acos(Math.max(-1,Math.min(1,l)))*180/Math.PI}function n_(n){const{g:t,h:e}=Uh(Da(n)),i=t[Ye(1,0)],s=t[Ye(1,1)],r=e[Ye(1,1)],a=-s,o=-r,l=-i,c=Math.sqrt(a*a+o*o+l*l);return{lat:Math.asin(l/c)*180/Math.PI,lon:Math.atan2(o,a)*180/Math.PI}}const fi=6371.2,i_={innerRadiusKm:fi,outerRadiusKm:fi*15,maxSteps:4e3,stepFraction:.035,minStepKm:40,maxStepKm:2200},yo=new P,bo=new P,Eo=new P,t0=new P,wo=new P;function Gr(n,t,e){t_(n,t,e);const i=e.length();return i>1e-9?(e.divideScalar(i),!0):!1}function e0(n,t,e,i={}){const s={...i_,...i},r=[],a=n.clone();let o=a.length()/fi,l="steps";for(let c=0;c<s.maxSteps;c++){r.push(a.clone());const u=a.length();if(o=Math.max(o,u/fi),c>0&&u<=s.innerRadiusKm){l="surface";break}if(u>=s.outerRadiusKm){l="outer";break}const h=e*Math.min(s.maxStepKm,Math.max(s.minStepKm,s.stepFraction*u));if(!Gr(a,t,yo)){l="null-field";break}if(!Gr(wo.copy(a).addScaledVector(yo,h/2),t,bo)){l="null-field";break}if(!Gr(wo.copy(a).addScaledVector(bo,h/2),t,Eo)){l="null-field";break}if(!Gr(wo.copy(a).addScaledVector(Eo,h),t,t0)){l="null-field";break}a.addScaledVector(yo,h/6).addScaledVector(bo,h/3).addScaledVector(Eo,h/3).addScaledVector(t0,h/6)}return{points:r,startsAt:"surface",endsAt:l,apexRe:o,closed:!1}}function s_(n,t,e={}){const i=e0(n,t,1,e),s=e0(n,t,-1,e);return{points:[...s.points.slice(1).reverse(),...i.points],startsAt:s.endsAt,endsAt:i.endsAt,apexRe:Math.max(i.apexRe,s.apexRe),closed:s.endsAt==="surface"&&i.endsAt==="surface"}}function r_(n,t,e=0){const i=n*Math.PI/180,s=t*Math.PI/180,r=fi+e;return new P(r*Math.cos(i)*Math.cos(s),r*Math.cos(i)*Math.sin(s),r*Math.sin(i))}const fc={latitudes:[-72,-64,-55,-42,-28,28,42,55,64,72],meridianCount:12,altitudeKm:120},a_={latitudes:[-55,55],meridianCount:6,altitudeKm:120};function o_(n=fc){const t=[];for(const e of n.latitudes)for(let i=0;i<n.meridianCount;i++)t.push(r_(e,360/n.meridianCount*i,n.altitudeKm));return t}function l_(n,t=fc,e={}){return o_(t).map(i=>s_(i,n,e))}function c_(n,t){return 16726e-10*n*t*t}function u_(n,t){return(10.22+1.29*Math.tanh(.184*(n+8.14)))*Math.pow(t,-1/6.6)}function h_(n,t){return(.58-.007*n)*(1+.024*Math.log(t))}function d_(n,t,e){return n*Math.pow(2/(1+Math.cos(e)),t)}function pc(n,t,e){if(n===null||t===null||e===null||!(t>0)||!(e>0))return null;const i=c_(t,e),s=u_(n,i);return{r0Re:s,alpha:h_(n,i),dynPressureNPa:i,bowShockRe:f_(s)}}function f_(n,t=8){const e=1.6666666666666667,i=t*t;return n*(1+1.1*(((e-1)*i+2)/((e+1)*(i-1))))}const p_=fc;function m_(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const g_=120,__=80;function v_(n){return An(n).divideScalar(fi)}const x_=new kt(.42,.78,.95),S_=new kt(.72,.55,1),M_=`
  uniform float uTime;
  uniform float uShiver;      // 0-1, from Kp
  uniform float uR0;          // Shue standoff, Earth radii
  uniform float uAlpha;
  uniform vec3  uSunDir;      // unit, Earth-fixed frame
  uniform float uConfine;     // 0 = raw IGRF, 1 = clamped to the magnetopause
  varying float vDepth;
  varying float vViewZ;

  void main() {
    vec3 p = position;
    float r = max(length(p), 0.0001);

    if (uShiver > 0.001) {
      vec3 axis = normalize(cross(p, vec3(0.0, 1.0, 0.0)) + vec3(0.0001));
      float amp = uShiver * 0.0225 * min(r, 5.0);
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
    vec4 viewPos = modelViewMatrix * vec4(p, 1.0);
    vViewZ = -viewPos.z;
    gl_Position = projectionMatrix * viewPos;
  }
`,y_=`
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uCamDist;     // camera → Earth centre, scene units
  uniform float uGlobeR;      // globe radius, scene units
  varying float vDepth;
  varying float vViewZ;
  void main() {
    // Fade with distance so the near-Earth structure stays readable.
    float fade = 1.0 - smoothstep(2.0, 14.0, vDepth) * 0.55;
    // And behind the globe: from just in front of the centre plane to just
    // past the back limb, the line lets go of the frame.
    float behind = smoothstep(uCamDist - uGlobeR * 0.25, uCamDist + uGlobeR * 0.8, vViewZ);
    fade *= 1.0 - 0.85 * behind;
    gl_FragColor = vec4(uColor, uOpacity * fade);
    #include <colorspace_fragment>
  }
`;class b_{group=new Ke;lines=[];materials=[];tracedFor=null;tracedSet=null;far=!1;reduced=!1;frozenAt=0;constructor(){this.group.name="igrf-field-lines"}ensureTraced(t){const e=Math.floor(t.getTime()/864e5),i=this.far?"signature":"full";this.tracedFor===e&&this.tracedSet===i||(this.tracedFor=e,this.tracedSet=i,this.build(l_(t,i==="signature"?a_:p_)))}build(t){this.dispose();for(const e of t){if(e.points.length<2)continue;const i=[];for(const o of e.points){const l=v_(o);i.push(l.x,l.y,l.z)}const s=new xe;s.setAttribute("position",new ie(i,3));const r=new Je({uniforms:{uTime:{value:0},uShiver:{value:0},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new P(1,0,0)},uConfine:{value:1},uCamDist:{value:20},uGlobeR:{value:.1},uFarFade:{value:1},uColor:{value:e.closed?x_:S_},uOpacity:{value:e.closed?.34:.46}},vertexShader:M_,fragmentShader:y_,transparent:!0,blending:Ze,depthWrite:!1});this.materials.push(r);const a=new ya(s,r);a.name=e.closed?"field-line-closed":"field-line-open",this.lines.push(a),this.group.add(a)}}setCamera(t,e,i){const s=t>g_?!0:t<__?!1:this.far;s!==this.far&&(this.far=s);const r=this.far?.85:1-.45*m_(26,100,t);for(const a of this.materials)a.uniforms.uFarFade.value=r,a.uniforms.uCamDist.value=i,a.uniforms.uGlobeR.value=e}setScale(t){this.group.scale.setScalar(t)}setVisible(t){this.group.visible=t}setReducedMotion(t){t&&!this.reduced&&(this.frozenAt=this.materials[0]?.uniforms.uTime?.value??0),this.reduced=t}setDynamics(t,e,i,s,r){const a=this.reduced?this.frozenAt:t,o=r===null?0:Math.max(0,Math.min(1,(r-4)/5));for(const l of this.materials)l.uniforms.uTime.value=a,l.uniforms.uShiver.value=o,l.uniforms.uSunDir.value.copy(e).normalize(),l.uniforms.uConfine.value=i===null?0:1,i!==null&&(l.uniforms.uR0.value=i),s!==null&&(l.uniforms.uAlpha.value=s)}get lineCount(){return this.lines.length}get farSet(){return this.far}get pointCount(){return this.lines.reduce((t,e)=>t+(e.geometry.getAttribute("position")?.count??0),0)}dispose(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.lines=[],this.materials=[]}}const $r=48,Os=40,E_=100,w_=E_*Math.PI/180;function n0(n,t,e){const i=Math.abs(e.y)>.9?new P(1,0,0):new P(0,1,0),s=new P().crossVectors(e,i).normalize(),r=new P().crossVectors(e,s).normalize(),a=[];for(let u=0;u<=$r;u++){const h=u/$r*w_,d=d_(n,t,h),f=[];for(let g=0;g<Os;g++){const _=g/Os*Math.PI*2,m=e.clone().multiplyScalar(Math.cos(h)).addScaledVector(s,Math.sin(h)*Math.cos(_)).addScaledVector(r,Math.sin(h)*Math.sin(_));f.push(m.multiplyScalar(d))}a.push(f)}const o=[],l=(u,h)=>{o.push(u.x,u.y,u.z,h.x,h.y,h.z)};for(let u=0;u<=$r;u+=u<16?3:5){const h=a[u];for(let d=0;d<Os;d++)l(h[d],h[(d+1)%Os])}for(let u=0;u<Os;u+=4)for(let h=0;h<$r;h++)l(a[h][u],a[h+1][u]);const c=new xe;return c.setAttribute("position",new ie(o,3)),c}class T_{group=new Ke;magnetopause;bowShock;current=null;constructor(){this.group.name="magnetosphere",this.magnetopause=new Ks(new xe,new Fi({color:new kt(.45,.9,.8),transparent:!0,opacity:.34,blending:Ze,depthWrite:!1})),this.magnetopause.name="magnetopause-shue1998",this.bowShock=new Ks(new xe,new Fi({color:new kt(1,.62,.35),transparent:!0,opacity:.2,blending:Ze,depthWrite:!1})),this.bowShock.name="bow-shock-farris-russell",this.group.add(this.magnetopause,this.bowShock)}update(t,e){if(!t){this.group.visible=!1;return}if(this.group.visible=!0,!(!this.current||Math.abs(this.current.r0-t.r0Re)>.02||Math.abs(this.current.alpha-t.alpha)>.004||this.current.axis.dot(e)<.99995))return;const s=e.clone().normalize();this.magnetopause.geometry.dispose(),this.magnetopause.geometry=n0(t.r0Re,t.alpha,s),this.bowShock.geometry.dispose(),this.bowShock.geometry=n0(t.bowShockRe,t.alpha*.92,s),this.current={r0:t.r0Re,alpha:t.alpha,bow:t.bowShockRe,axis:s}}setScale(t){this.group.scale.setScalar(t)}setVisible(t){this.group.visible=t}dispose(){this.magnetopause.geometry.dispose(),this.magnetopause.material.dispose(),this.bowShock.geometry.dispose(),this.bowShock.material.dispose()}}const A_=62,Oh=20,R_=`
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

  const float CORRIDOR = ${A_.toFixed(1)};

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
    vFade *= 1.0 - smoothstep(0.35, 1.0, length(aOffset.xy) / ${Oh.toFixed(1)});

    vEnd = aEnd;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,C_=`
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
`;function P_(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class D_{points;mat;maxCount;reduced=!1;frozenAt=0;constructor(t=4200){this.maxCount=t;const e=P_(5249554),i=[],s=[],r=[],a=[];for(let l=0;l<t;l++){const c=e(),u=Math.sqrt(e())*Oh,h=e()*Math.PI*2,d=e(),f=u*Math.cos(h),g=u*Math.sin(h);for(const _ of[1,0])i.push(c),s.push(f,g,0),r.push(d),a.push(_)}const o=new xe;o.setAttribute("position",new ie(new Float32Array(t*6),3)),o.setAttribute("aPhase",new ie(i,1)),o.setAttribute("aOffset",new ie(s,3)),o.setAttribute("aSeed",new ie(r,1)),o.setAttribute("aEnd",new ie(a,1)),o.boundingSphere=null,this.mat=new Je({uniforms:{uTime:{value:0},uSpeed:{value:.05},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new P(1,0,0)},uStreak:{value:1.4},uColor:{value:new kt(.62,.86,1)},uOpacity:{value:.28}},vertexShader:R_,fragmentShader:C_,transparent:!0,blending:Ze,depthWrite:!1}),this.points=new Ks(o,this.mat),this.points.name="solar-wind-stream",this.points.frustumCulled=!1}setReducedMotion(t){t&&!this.reduced&&(this.frozenAt=this.mat.uniforms.uTime.value),this.reduced=t}setVisible(t){this.points.visible=t}get visible(){return this.points.visible}setScale(t){this.points.scale.setScalar(t)}update(t,e,i,s,r,a){const o=i!==null&&s!==null;if(this.points.visible=this.points.visible&&o,!o)return;this.mat.uniforms.uTime.value=this.reduced?this.frozenAt:t,this.mat.uniforms.uSpeed.value=.014+i/1e3*.055,this.mat.uniforms.uSunDir.value.copy(e).normalize(),r!==null&&(this.mat.uniforms.uR0.value=r),a!==null&&(this.mat.uniforms.uAlpha.value=a);const l=Math.max(0,Math.min(1,(s-1)/19)),c=Math.round(this.maxCount*(.25+.75*l));this.points.geometry.setDrawRange(0,c*2),this.mat.uniforms.uOpacity.value=.2+.2*l,this.mat.uniforms.uStreak.value=.7+i/1e3*3.4}dispose(){this.points.geometry.dispose(),this.mat.dispose()}}const L_=360/25.38;class mc{group=new Ke;markers=[];stamp="";constructor(){this.group.name="active-regions"}static direction(t,e){const i=t*Math.PI/180,s=e*Math.PI/180;return new P(Math.cos(i)*Math.cos(s),Math.sin(i),-Math.cos(i)*Math.sin(s))}setRegions(t){const e=t.map(i=>`${i.region}:${i.lat}:${i.lon}`).join(",");if(e!==this.stamp){this.stamp=e,this.dispose();for(const i of t){const s=i.area??10,r=.03+.055*Math.min(1,Math.log10(1+s)/3),a=Math.max(0,Math.min(1,(i.mProb??0)/50)),o=new Ts({color:new kt().setRGB(1,.62-.32*a,.22-.18*a),transparent:!0,opacity:.55+.4*a,blending:Ze,depthWrite:!1}),l=new Re(new di(r,12,10),o);l.position.copy(mc.direction(i.lat,i.lon)).multiplyScalar(1.01),l.name=`region-${i.region}`,l.userData.region=i,this.markers.push(l),this.group.add(l)}}}update(t,e,i){if(this.group.scale.setScalar(i),!e)return;const s=(t.getTime()-Date.parse(e))/864e5;Number.isFinite(s)&&(this.group.rotation.y=-(s*L_*Math.PI)/180)}setVisible(t){this.group.visible=t}get count(){return this.markers.length}dispose(){for(const t of this.markers)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.markers=[]}}const kh=695700,Bh=1495978707e-1,zh=21.5;function I_(n){const t=ge(n),e=73.6667+1.3958333*(t.tt-15020)/36525,s=(xg(t).elon-e)*Math.PI/180,r=7.25*Math.PI/180;return Math.asin(Math.sin(s)*Math.sin(r))*180/Math.PI}function Vh(n,t){const e=Math.PI/180,i=I_(t),s=n.latitude*e,r=i*e,a=n.longitude*e,o=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(a);return Math.acos(Math.max(-1,Math.min(1,o)))*180/Math.PI}function N_(n,t){return Vh(n,t)<=n.halfAngle}function U_(n,t=1){const e=Date.parse(n.time215);if(!Number.isFinite(e)||!(n.speedKms>0))return null;const s=(t*Bh-zh*kh)/n.speedKms/3600,r=Math.max(0,(n.speedKms-450)/450),a=Math.min(24,6+6*r);return{time:new Date(e+s*36e5).toISOString(),windowHours:Math.round(a),transitHours:s}}function i0(n,t){const e=Date.parse(n.time215);if(!Number.isFinite(e))return 0;const i=Math.max(0,(t.getTime()-e)/1e3);return(zh*kh+n.speedKms*i)/Bh}function F_(n,t){const e=Math.PI/180,i=Math.hypot(t.x,t.y,t.z)||1,s={x:t.x/i,y:t.y/i,z:t.z/i},r=Math.abs(s.y)>.9?{x:1,y:0,z:0}:{x:0,y:1,z:0},a={x:r.y*s.z-r.z*s.y,y:r.z*s.x-r.x*s.z,z:r.x*s.y-r.y*s.x},o=Math.hypot(a.x,a.y,a.z)||1;a.x/=o,a.y/=o,a.z/=o;const l={x:s.y*a.z-s.z*a.y,y:s.z*a.x-s.x*a.z,z:s.x*a.y-s.y*a.x},c=n.latitude*e,u=n.longitude*e,h=Math.cos(c);return{x:s.x*h*Math.cos(u)+a.x*h*Math.sin(u)+l.x*Math.sin(c),y:s.y*h*Math.cos(u)+a.y*h*Math.sin(u)+l.y*Math.sin(c),z:s.z*h*Math.cos(u)+a.z*h*Math.sin(u)+l.z*Math.sin(c)}}const O_=new kt(1,.52,.3),k_=new kt(.62,.66,.85);function B_(n,t,e,i){const s=Math.min(89,Math.max(2,t))*Math.PI/180,r=Math.abs(n.y)>.9?new P(1,0,0):new P(0,1,0),a=new P().crossVectors(n,r).normalize(),o=new P().crossVectors(n,a).normalize(),l=7,c=28,u=[],h=(_,m)=>{u.push(_.x,_.y,_.z,m.x,m.y,m.z)},f=Array.from({length:l},(_,m)=>e*(m+1)/l).map(_=>{const m=bs(_,i),p=m*Math.tan(s);return Array.from({length:c},(b,x)=>{const v=x/c*Math.PI*2;return n.clone().multiplyScalar(m).addScaledVector(a,p*Math.cos(v)).addScaledVector(o,p*Math.sin(v))})});for(const _ of f)for(let m=0;m<c;m++)h(_[m],_[(m+1)%c]);for(let _=0;_<c;_+=4){const m=new P(0,0,0);h(m,f[0][_]);for(let p=0;p<f.length-1;p++)h(f[p][_],f[p+1][_])}const g=new xe;return g.setAttribute("position",new ie(u,3)),g}class z_{group=new Ke;lines=[];stamp="";visible=!0;constructor(){this.group.name="cme-cones"}setVisible(t){this.visible=t,this.group.visible=t}get count(){return this.lines.length}update(t,e,i,s){if(!this.visible)return;const r=`${i}|${t.map(a=>`${a.id}:${i0(a,e).toFixed(2)}`).join(",")}`;if(r!==this.stamp){this.stamp=r,this.dispose();for(const a of t){const o=Math.min(1.7,i0(a,e));if(o<=.02)continue;const l=F_(a,s),c=new P(l.x,l.y,l.z).normalize(),u=B_(c,a.halfAngle,o,i),h=new Fi({color:a.earthDirected?O_:k_,transparent:!0,opacity:(a.earthDirected?.36:.09)*Math.max(.25,1-o/2.2),blending:Ze,depthWrite:!1}),d=new Ks(u,h);d.name=`cme-${a.id}`,d.userData.cme=a,this.lines.push(d),this.group.add(d)}}}dispose(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.lines=[]}}const V_=new kt(.62,.94,1),H_=new kt(.52,.56,.64),G_=new P;class $_{group=new Ke;craft=[];stamp="";axis;scale=1;constructor(){this.group.name="l1-monitors";const t=new xe;t.setAttribute("position",new ie([0,0,0,1,0,0],3)),this.axis=new ya(t,new Fi({color:new kt(.5,.55,.62),transparent:!0,opacity:.18,blending:Ze,depthWrite:!1})),this.axis.name="sun-earth-line",this.group.add(this.axis)}setVisible(t){this.group.visible=t}setScale(t){this.scale=t}build(t){this.disposeCraft();for(const e of t){const i=e.active?V_:H_,s=new Ke;s.name=`l1-${e.source}`;const r=new Re(new ac(1,0),new Ts({color:i,transparent:!0,opacity:e.active?.95:.5,blending:Ze,depthWrite:!1}));r.name=`l1-marker-${e.source}`;const a=new Ks(new xe,new Fi({color:i,transparent:!0,opacity:e.active?.55:.26,blending:Ze,depthWrite:!1}));a.name=`l1-dropline-${e.source}`,s.add(r,a),this.group.add(s),this.craft.push({group:s,marker:r,drop:a,source:e.source})}}update(t,e,i,s){if(t.length===0){this.group.visible=!1;return}const r=t.map(c=>`${c.source}:${c.time}:${c.active}`).join(",")+`|${i}`;t.map(c=>c.source).join(",")!==this.craft.map(c=>c.source).join(",")&&this.build(t);const o=Gu(280,i)*this.scale;this.axis.scale.setScalar(o),this.axis.position.set(0,0,0),this.axis.quaternion.setFromUnitVectors(new P(1,0,0),e.x);const l=r!==this.stamp;this.stamp=r;for(let c=0;c<t.length;c++){const u=t[c],h=this.craft[c];if(!h)continue;if(l){const g=Bg(u.gse,e).normalize(),_=Gu(u.distanceRe,i)*this.scale,m=g.multiplyScalar(_);h.group.position.copy(m);const b=e.x.clone().multiplyScalar(m.dot(e.x)).sub(m);h.drop.geometry.dispose();const x=new xe;x.setAttribute("position",new ie([0,0,0,b.x,b.y,b.z],3)),h.drop.geometry=x}const d=h.group.getWorldPosition(G_),f=s?s.distanceTo(d)*.011:this.scale*.26;h.marker.scale.setScalar(f)}}disposeCraft(){for(const t of this.craft)this.group.remove(t.group),t.marker.geometry.dispose(),t.marker.material.dispose(),t.drop.geometry.dispose(),t.drop.material.dispose();this.craft=[]}dispose(){this.disposeCraft(),this.axis.geometry.dispose(),this.axis.material.dispose()}}const W_=22;function X_(n,t,e,i){let s=null;for(const r of t){const a=r.position.clone().project(e);if(a.z<-1||a.z>1)continue;const o=(a.x*.5+.5)*i.width,l=(-a.y*.5+.5)*i.height,c=o-n.x,u=l-n.y,h=Math.hypot(c,u),d=r.position.clone().add(e.up.clone().normalize().multiplyScalar(r.radius)).project(e),f=Math.abs((-d.y*.5+.5)*i.height-l),g=Math.max(W_,f);h>g||(!s||h<s.distancePx)&&(s={...r,screen:{x:o,y:l},distancePx:h})}return s}const q_="https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get",s0=n=>{const t=String(n??"").trim();if(!t)return null;const e=Date.parse(/\dZ$/.test(t)&&t.length===17?t.replace("Z",":00Z"):t);return Number.isFinite(e)?new Date(e).toISOString():null},Wr=n=>{const t=Number(n);return Number.isFinite(t)?t:null};function j_(n,t=new Date){if(!Array.isArray(n))return[];const e=[];for(const i of n){const s=s0(i.time21_5),r=Wr(i.latitude),a=Wr(i.longitude),o=Wr(i.halfAngle),l=Wr(i.speed);if(s===null||r===null||a===null||o===null||l===null||l<=0)continue;const c={latitude:r,longitude:a,halfAngle:o,speedKms:l,time215:s},h=(Array.isArray(i.enlilList)?i.enlilList:[]).map(d=>s0(d.estimatedShockArrivalTime)).find(d=>d!==null)??null;e.push({...c,id:String(i.associatedCMEID??`${s}-${l}`),type:String(i.type??""),note:String(i.note??""),link:i.link??null,earthDirected:N_(c,new Date(s)),offAxisDeg:Vh(c,new Date(s)),arrival:h?{time:h,windowHours:7,transitHours:(Date.parse(h)-Date.parse(s))/36e5}:U_(c),arrivalFromEnlil:h!==null})}return e.sort((i,s)=>Date.parse(s.time215)-Date.parse(i.time215))}function Y_(n,t=new Date,e=3.5,i=6){const s=t.getTime(),r=n.filter(l=>{const c=(s-Date.parse(l.time215))/864e5;return c>=0&&c<=e}),a=r.filter(l=>l.earthDirected),o=r.filter(l=>!l.earthDirected).slice(0,i);return[...a,...o]}async function K_(n,t=7){const e=new Date,i=new Date(e.getTime()-t*864e5),s=`${q_}/CMEAnalysis?startDate=${i.toISOString().slice(0,10)}&endDate=${e.toISOString().slice(0,10)}&mostAccurateOnly=true`;try{const r=await fetch(s,{cache:"no-store",signal:n});return r.ok?j_(await r.json()):[]}catch{return[]}}const ui=[2,1.75,1.5,1.25,1,.85,.75];function Z_(n){return n?ui.length-1:ui.indexOf(1)}function Hh(n){return ui.find(t=>t<=n+1e-6)??ui[ui.length-1]}const J_=tr.Sun/ys,Gh=1e3/60,Q_=Gh*1.35,t5=Gh*1.05,e5=1e3;function n5(n){const t=n.ceiling??n.max;let e=n.demotedFrom??null,{good:i,bad:s}=n;n.medianFrameMs>Q_?(s++,i=0):n.medianFrameMs<t5?(i++,s=0):(i=0,s=0);const r=ui.indexOf(n.current);if(r<0)return{ratio:Hh(n.current),good:0,bad:0,ceiling:t,demotedFrom:e};if(s>=2&&r<Z_(n.msaa)){const a=ui[r+1],o=e===n.current?Math.min(t,a):t;return{ratio:a,good:0,bad:0,ceiling:o,demotedFrom:n.current}}if(i>=6&&r>0){const a=ui[r-1];if(a<=n.max&&a<=t)return{ratio:a,good:0,bad:0,ceiling:t,demotedFrom:e}}return{ratio:n.current,good:i,bad:s,ceiling:t,demotedFrom:e}}const $h=120;function r0(n,t){n.push(t),n.length>$h&&n.shift()}function To(n){if(n.length===0)return 0;const t=[...n].sort((e,i)=>e-i);return t[t.length>>1]}class i5{constructor(t){this.canvas=t,this.msaa=devicePixelRatio<2,this.renderer=new V3({canvas:t,antialias:this.msaa,powerPreference:"high-performance"}),this.pixelRatio=Hh(Math.min(devicePixelRatio,2)),this.maxPixelRatio=this.pixelRatio,this.ladderCeiling=this.pixelRatio,this.renderer.setPixelRatio(this.pixelRatio),this.scene.background=new kt(329485),this.rig=new j4(t,t.clientWidth/Math.max(1,t.clientHeight)),this.scene.add(D4()),this.scene.add(this.sun.group),this.sun.group.add(this.activeRegions.group),this.scene.add(this.cmeCones.group),this.scene.add(this.earth.group),this.scene.add(this.moon.mesh),this.scene.add(this.sunLight),this.earth.spin.add(this.fieldLines.group),this.earth.group.add(this.magnetosphere.group),this.earth.group.add(this.spacecraft.group),this.solarWind=new D_(window.devicePixelRatio>1.5?4200:2600),this.earth.group.add(this.solarWind.points),this.scene.add(new n1(2371658,.55)),this.planets=C4();for(const[e,i]of this.planets){e!=="Earth"&&this.scene.add(i.group);const s=new A4(e,this.mode,new Date);this.rings.set(e,s),this.scene.add(s.line)}this.resize(),window.addEventListener("resize",this.resize),t.addEventListener("pointermove",this.onPointerMove),t.addEventListener("pointerleave",this.onPointerLeave),t.addEventListener("click",this.onClick)}canvas;scene=new Wf;rig;renderer;sun=new a4;earth=new jg;moon=new R4;planets=new Map;rings=new Map;sunLight=new t1(16773853,1.6,0,0);fieldLines=new b_;magnetosphere=new T_;solarWind;activeRegions=new mc;cmeCones=new z_;cmes=[];regionsObservedAt=null;spacecraft=new $_;spacecraftPos=[];sunImageUrl=null;candidates=[];hovered=null;onHover=null;onSelect=null;shieldVisible=!0;windVisible=!0;sunDirEarthFixed=new P(1,0,0);mode="globe";lastReach=2;_reducedMotion=!1;earthSurface="loading";raf=0;clockStart=performance.now();now=null;aurora=null;auroraVisible=!0;frameTimes=[];lastFrame=performance.now();stats={fps:0,frames:0,cpuMs:0,updateMs:0,pixelRatio:1,maxPixelRatio:1,megapixels:0};cpuTimes=[];updateTimes=[];pixelRatio=1;maxPixelRatio=1;msaa=!1;lastLadderCheck=0;goodStreak=0;badStreak=0;ladderCeiling=1/0;demotedFrom=null;setNow(t){this.now=t}setEarthDayImage(t){this.earth.setDayImage(t)}setEarthNightImage(t){this.earth.setNightImage(t)}setCoastOverlay(t){this.earth.setCoastOverlay(t)}get coastOverlayOn(){return this.earth.coastOverlayOn}get earthSurfaceState(){return this.earthSurface}setEarthSurfaceState(t){this.earthSurface=t}setAurora(t){this.aurora=t}setRegions(t,e){this.activeRegions.setRegions(t),this.regionsObservedAt=e}get regionCount(){return this.activeRegions.count}setCmes(t){this.cmes=t}setSunImage(t){if(!t||!t.complete||t.naturalWidth===0){this.sun.setImage(null,null),this.sunImageUrl=null;return}t.src!==this.sunImageUrl&&(this.sunImageUrl=t.src,this.sun.setImage(t,c4(t)))}get sunHasImage(){return this.sun.hasImage}syncCoronaFraming(){if(this.rig.view!=="corona")return;const t=this.sun.reachRsun();Math.abs(t-this.lastReach)<.01*Math.max(1,this.lastReach)||this.setView("corona")}setCoronaPlane(t){if(!t)return this.sun.setCoronaPlane(null,null),null;const e=y4(t);return this.sun.setCoronaPlane(t,e),e}setSunCard(t){if(!t)return this.sun.setDiskPlane(null,null),null;const e=b4(t);return this.sun.setDiskPlane(t,e),e}sunProjection(){return this.sun.projection()}setSpacecraft(t){this.spacecraftPos=t}setSpacecraftVisible(t){this.spacecraft.setVisible(t)}setCmesVisible(t){this.cmeCones.setVisible(t)}get cmesOn(){return this.cmeCones.group.visible}get cmeCount(){return this.cmeCones.count}setAuroraVisible(t){this.auroraVisible=t}get auroraOn(){return this.auroraVisible}setScaleMode(t){if(t===this.mode)return;this.mode=t;const e=new Date;for(const[i,s]of this.rings)s.rebuild(i,t,e)}get scaleMode(){return this.mode}get reducedMotion(){return this._reducedMotion}setShieldVisible(t){this.shieldVisible=t,this.fieldLines.setVisible(t),this.magnetosphere.setVisible(t)}get shieldOn(){return this.shieldVisible}setWindVisible(t){this.windVisible=t,this.solarWind.setVisible(t)}get windOn(){return this.windVisible}get fieldLineStats(){return{lines:this.fieldLines.lineCount,points:this.fieldLines.pointCount,far:this.fieldLines.farSet}}setReducedMotion(t){this._reducedMotion=t,this.rig.setReducedMotion(t),this.fieldLines.setReducedMotion(t),this.solarWind.setReducedMotion(t)}setView(t,e=!1){const{earthPos:i,earthRadius:s,sunDir:r}=this.geometryNow(new Date);this.lastReach=this.sun.reachRsun(),this.rig.goTo(t,i,s,r,bs(this.lastReach*J_,this.mode),e)}geometryNow(t){const e=An(Qs("Earth",t).helio),i=e.length(),s=e.clone().normalize().multiplyScalar(bs(i,this.mode)),r=Qn("Earth",this.mode),a=Eh(t).dir;return{earthPos:s,earthRadius:r,sunDir:An(a).normalize()}}frame=()=>{const t=performance.now(),e=t-this.lastFrame;this.lastFrame=t,this.frameTimes.push(e),this.frameTimes.length>120&&this.frameTimes.shift();const i=this.frameTimes.reduce((E,C)=>E+C,0)/this.frameTimes.length;this.stats={fps:i>0?1e3/i:0,frames:this.stats.frames+1,cpuMs:To(this.cpuTimes),updateMs:To(this.updateTimes),pixelRatio:this.pixelRatio,maxPixelRatio:this.maxPixelRatio,megapixels:this.canvas.clientWidth*this.canvas.clientHeight*this.pixelRatio*this.pixelRatio/1e6},this.adaptResolution(t,To(this.frameTimes));const s=new Date,r=(t-this.clockStart)/1e3,{earthPos:a,earthRadius:o,sunDir:l}=this.geometryNow(s);this.sun.setRadius(Qn("Sun",this.mode)),this.sun.setScaleMode(this.mode),this.sun.setViewGeometry(l.clone().negate(),zg(s)),this.activeRegions.update(s,this.regionsObservedAt,Qn("Sun",this.mode)),this.sunLight.position.set(0,0,0);for(const E of this.planets.values())E.update(s,this.mode,this.rig.camera.position);this.earth.group.position.copy(a),this.earth.setRadius(o),this.earth.update(s,l),this.earth.setAurora(this.aurora,this.auroraVisible);const c=this.now?.solar_wind,u=this.now?.propagated,h=u?.bz??c?.bz_gsm??null,d=u?.density??c?.density??null,f=u?.speed??c?.speed??null,g=pc(h,d,f),_=hc(s)*Math.PI/180,m=Math.cos(-_),p=Math.sin(-_);if(this.sunDirEarthFixed.set(l.x*m+l.z*p,l.y,-l.x*p+l.z*m),this.shieldVisible){this.fieldLines.ensureTraced(s),this.fieldLines.setScale(o);const E=this.rig.camera.position.distanceTo(a);this.fieldLines.setCamera(E/Math.max(o,1e-6),o,E),this.fieldLines.setDynamics(r,this.sunDirEarthFixed,g?.r0Re??null,g?.alpha??null,this.now?.kp?.estimated_kp??null),this.magnetosphere.setScale(o),this.magnetosphere.update(g,l)}this.shieldVisible&&this.spacecraftPos.length>0?(this.spacecraft.setVisible(!0),this.spacecraft.setScale(o),this.spacecraft.update(this.spacecraftPos,kg(s),this.mode,this.rig.camera.position)):this.spacecraft.setVisible(!1),this.windVisible&&(this.solarWind.setVisible(!0),this.solarWind.setScale(o),this.solarWind.update(r,l,f,d,g?.r0Re??null,g?.alpha??null));const b=An(bh(s)),x=b.length(),v=b.clone().normalize().multiplyScalar(Zg(x,this.mode,o));this.moon.mesh.position.copy(a).add(v),this.moon.mesh.scale.setScalar(Qn("Moon",this.mode)),this.cmeCones.update(Y_(this.cmes,s),s,this.mode,a),this.candidates=[{kind:"sun",id:"Sun",label:"Sun",position:this.sun.group.position.clone(),radius:Qn("Sun",this.mode)},{kind:"moon",id:"Moon",label:"Moon",position:this.moon.mesh.position.clone(),radius:Qn("Moon",this.mode)},...[...this.planets].map(([E,C])=>({kind:"planet",id:E,label:E,position:C.group.position.clone(),radius:Qn(E,this.mode)})),...this.spacecraft.group.children.filter(E=>E.name.startsWith("l1-")&&E.name!=="sun-earth-line").map(E=>({kind:"spacecraft",id:E.name.slice(3),label:E.name.slice(3),position:E.getWorldPosition(new P),radius:0}))],this.rig.followTarget(a),this.rig.update();const T=performance.now();this.renderer.render(this.scene,this.rig.camera),r0(this.updateTimes,T-t),r0(this.cpuTimes,performance.now()-t),this.raf=requestAnimationFrame(this.frame)};start(){this.raf||(this.setView("deck",!0),this.raf=requestAnimationFrame(this.frame))}stop(){cancelAnimationFrame(this.raf),this.raf=0}adaptResolution(t,e){if(t-this.lastLadderCheck<e5||(this.lastLadderCheck=t,this.frameTimes.length<$h/2))return;const i=n5({current:this.pixelRatio,medianFrameMs:e,max:this.maxPixelRatio,msaa:this.msaa,good:this.goodStreak,bad:this.badStreak,ceiling:this.ladderCeiling,demotedFrom:this.demotedFrom});this.goodStreak=i.good,this.badStreak=i.bad,this.ladderCeiling=i.ceiling,this.demotedFrom=i.demotedFrom,i.ratio!==this.pixelRatio&&this.setPixelRatio(i.ratio)}setPixelRatio(t){t!==this.pixelRatio&&(this.pixelRatio=t,this.badStreak=0,this.goodStreak=0,this.renderer.setPixelRatio(t),this.resize(),this.frameTimes.length=0,this.cpuTimes.length=0,this.updateTimes.length=0)}pointerPick(t){const e=this.canvas.getBoundingClientRect();return X_({x:t.clientX-e.left,y:t.clientY-e.top},this.candidates,this.rig.camera,{width:e.width,height:e.height})}onPointerMove=t=>{if(t.buttons!==0){this.setHover(null);return}this.setHover(this.pointerPick(t))};onPointerLeave=()=>{this.setHover(null)};setHover(t){const e=t?.id===this.hovered?.id;this.hovered=t,this.canvas.style.cursor=t?"pointer":"",(!e||t)&&this.onHover?.(t)}onClick=t=>{const e=this.pointerPick(t);e&&this.onSelect?.(e)};resize=()=>{const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.rig.resize(t/Math.max(1,e))};dispose(){this.stop(),window.removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.removeEventListener("click",this.onClick),this.earth.dispose(),this.sun.dispose(),this.fieldLines.dispose(),this.magnetosphere.dispose(),this.solarWind.dispose(),this.activeRegions.dispose(),this.cmeCones.dispose(),this.rig.dispose(),this.renderer.dispose()}}function It(n){if(!n)return"--:--";const t=Date.parse(n);if(!Number.isFinite(t))return"--:--";const e=new Date(t);return`${String(e.getUTCHours()).padStart(2,"0")}:${String(e.getUTCMinutes()).padStart(2,"0")}`}function rn(n){if(!Number.isFinite(n))return"unknown";const t=Math.max(0,Math.round(n));if(t<90)return`${t}s`;const e=Math.round(t/60);return e<90?`${e} min`:`${(e/60).toFixed(1)} h`}function Ao(n){const{lane:t,received:e,meta:i,now:s=new Date}=n;if(t.loading&&!e&&!i?.data_time)return{state:"loading",label:"loading",short:"loading",ageS:null};if(!i||!i.data_time){const a=t.error??i?.error??null;return a?{state:"error",label:`unavailable · ${gn(a)}${s5(t,s)}`,short:"unavailable",ageS:null}:{state:"no-data",label:i?.error?`no data · ${i.error}`:"no data",short:"no data",ageS:null}}const r=(s.getTime()-Date.parse(i.data_time))/1e3;return Number.isFinite(r)?r>i.stale_after_s?{state:"stale",label:`stale · no data since ${It(i.data_time)} UTC (${rn(r)} old)`,short:`stale · ${rn(r)}`,ageS:r}:{state:"fresh",label:`${It(i.data_time)} UTC · ${rn(r)} old`,short:`${rn(r)} old`,ageS:r}:{state:"no-data",label:"no data",short:"no data",ageS:null}}function s5(n,t){const e=n.nextAttempt?Date.parse(n.nextAttempt):NaN;return Number.isFinite(e)&&e>t.getTime()?` · next attempt ${It(new Date(e).toISOString())} UTC`:""}function gn(n){const t=n instanceof Error?n.message:String(n??""),e=/^HTTP (\d{3})/.exec(t);if(e){const i=Number(e[1]);return i===404?"upstream 404":i>=500?`upstream HTTP ${i}`:i>=400?`upstream HTTP ${i}`:`upstream HTTP ${i}`}return t==="timeout"?"upstream timeout":/aborted|abort/i.test(t)?"cancelled":"offline or blocked"}const r5=96*1024*1024;class a5{constructor(t=r5){this.budgetBytes=t}budgetBytes;map=new Map;hits=0;misses=0;evictions=0;acquire(t){const e=this.map.get(t);if(e)return this.hits++,this.map.delete(t),this.map.set(t,e),e.img;this.misses++;const i=new Image;i.crossOrigin="anonymous",i.decoding="async",i.loading="eager";const s={img:i,bytes:0,loaded:!1,failed:!1};return i.addEventListener("load",()=>{s.loaded=!0,s.bytes=i.naturalWidth*i.naturalHeight*4,this.evict()},{once:!0}),i.addEventListener("error",()=>{s.failed=!0},{once:!0}),i.src=t,this.map.set(t,s),i}warm(t){for(const e of t)this.acquire(e)}isLoaded(t){const e=this.map.get(t);return!!e&&e.loaded}isFailed(t){const e=this.map.get(t);return!!e&&e.failed}evict(){let t=0;for(const e of this.map.values())t+=e.bytes;if(!(t<=this.budgetBytes))for(const[e,i]of this.map){if(t<=this.budgetBytes)break;i.img.isConnected||(this.map.delete(e),t-=i.bytes,this.evictions++,i.img.src="")}}stats(){let t=0;for(const e of this.map.values())t+=e.bytes;return{count:this.map.size,bytes:t,hits:this.hits,misses:this.misses,evictions:this.evictions}}clear(){for(const t of this.map.values())t.img.isConnected||(t.img.src="");this.map.clear()}}const Ro=24,a0="https://services.swpc.noaa.gov",Es=[{id:"suvi-304",label:"SUVI 304 Å",kind:"disk",product:"suvi-primary-304",instrument:"GOES SUVI",describes:"Chromosphere at ~50 000 K — prominences and filaments"},{id:"suvi-195",label:"SUVI 195 Å",kind:"disk",product:"suvi-primary-195",instrument:"GOES SUVI",describes:"Corona at ~1.5 million K — active regions and coronal holes"},{id:"suvi-171",label:"SUVI 171 Å",kind:"disk",product:"suvi-primary-171",instrument:"GOES SUVI",describes:"Quiet corona at ~600 000 K — coronal loops"},{id:"suvi-131",label:"SUVI 131 Å",kind:"disk",product:"suvi-primary-131",instrument:"GOES SUVI",describes:"Flaring plasma at ~10 million K — brightest during flares"},{id:"lasco-c2",label:"LASCO C2",kind:"coronagraph",product:"lasco-c2",instrument:"SOHO LASCO",describes:"Coronagraph, 2–6 solar radii — where CMEs first appear"},{id:"lasco-c3",label:"LASCO C3",kind:"coronagraph",product:"lasco-c3",instrument:"SOHO LASCO",describes:"Coronagraph, 3.7–30 solar radii — CMEs heading outward"}];function o5(n){const t=/_g(\d{1,2})_/.exec(n);if(!t)return null;const e=Number(t[1]);return Number.isFinite(e)&&e>0?e:null}function l5(n,t){return t===null?n:/\bGOES\b/.test(n)?n.replace(/\bGOES\b/,`GOES-${t}`):`${n} (GOES-${t})`}function c5(n){const t=/_s(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/.exec(n);if(t){const[,i,s,r,a,o,l]=t;return`${i}-${s}-${r}T${a}:${o}:${l}.000Z`}const e=/\/(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})_/.exec(n);if(e){const[,i,s,r,a,o]=e;return`${i}-${s}-${r}T${a}:${o}:00.000Z`}return null}async function Wh(n,t){const e=`${a0}/products/animations/${n.product}.json`,i=await fetch(e,{cache:"no-store",signal:t});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();if(!Array.isArray(s))return null;const r=[];for(const c of s){if(!c?.url)continue;const u=c5(c.url);u&&r.push({url:`${a0}${c.url}`,time:u,satellite:o5(c.url)})}if(r.sort((c,u)=>Date.parse(c.time)-Date.parse(u.time)),r.length===0)return null;const a=(Date.parse(r[r.length-1].time)-Date.parse(r[0].time))/36e5;let o=r;if(r.length>Ro){const c=(r.length-1)/(Ro-1);o=Array.from({length:Ro},(u,h)=>r[Math.round(h*c)])}const l=await h5(o,t);return{id:n.id,label:n.label,kind:n.kind,describes:n.describes,instrument:n.instrument,frames:o,totalAvailable:r.length,spanHours:a,frameBytes:l.bytes,newestGood:l.index,skippedDropouts:l.skipped,sourceUrl:e}}async function u5(n,t){try{const i=(await fetch(n,{method:"HEAD",signal:t})).headers.get("content-length");return i?Number(i):null}catch{return null}}async function h5(n,t){const e=n.length-1,i=Math.min(6,n.length),s=await Promise.all(Array.from({length:i},(o,l)=>u5(n[e-l].url,t))),r=s.filter(o=>o!==null&&o>0).sort((o,l)=>o-l);if(r.length===0)return{index:e,skipped:0,bytes:null};const a=r[Math.floor(r.length/2)];for(let o=0;o<i;o++){const l=s[o]??null;if(l!==null&&l>=a*.4)return{index:e-o,skipped:o,bytes:l}}return{index:e,skipped:0,bytes:s[0]??null}}function d5(n,t,e){let i=0;const s=n.frames.length;return new Promise(r=>{let a=0;const o=()=>{i++,a++,t(i,s),a>=s&&r()};for(const l of n.frames){const c=new Image;c.onload=o,c.onerror=o,c.src=l.url}})}const we="no data";function La(n){return n?n.tier==="modeled"?"D":n.tier==="ambient"?"M":"E":"E"}function gc(n){return n?n.tier==="modeled"?`Modeled — ${n.model?.name??"model"}${n.model?.ref?` (${n.model.ref})`:""}`:n.tier==="ambient"?"Ambient — artistic, parameter-driven":`Measured — ${n.source}`:""}function ks(n,t=1){return n==null||!Number.isFinite(n)?we:n.toFixed(t)}function Xr(n){return n==null||!Number.isFinite(n)?we:String(Math.round(n))}function hs(n,t=new Date){if(!n||!n.data_time)return{state:"no-data",ageS:null,label:n?.error?`no data · ${n.error}`:we,short:we};const e=(t.getTime()-Date.parse(n.data_time))/1e3;return Number.isFinite(e)?e>n.stale_after_s?{state:"stale",ageS:e,label:`stale · no data since ${It(n.data_time)} UTC (${rn(e)} old)`,short:`stale · ${rn(e)}`}:{state:"fresh",ageS:e,label:`${It(n.data_time)} UTC · ${rn(e)} old`,short:`${rn(e)} old`}:{state:"no-data",ageS:null,label:we,short:we}}const _a=[{id:"kp",label:"Planetary K",unit:"Kp",part:"kp",value:n=>ks(n?.kp?.estimated_kp??null,2),detail:n=>n?.kp?.kp?`NOAA ${n.kp.kp}`:"",meaning:"A 0–9 index of global geomagnetic disturbance, derived from ground magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic storm, and the aurora moves toward the equator."},{id:"bz",label:"IMF Bz",unit:"nT",part:"solar_wind",series:"bz_gsm",value:n=>ks(n?.solar_wind?.bz_gsm??null,1),detail:n=>{const t=n?.solar_wind?.bz_gsm;return t==null?"":t<0?"southward":"northward"},meaning:"The north–south component of the interplanetary magnetic field, in GSM coordinates. This is the single most useful predictor on the panel: when Bz turns southward it opposes Earth’s field, magnetic reconnection opens the magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what storms are made of."},{id:"bt",label:"IMF total",unit:"nT",part:"solar_wind",series:"bt",value:n=>ks(n?.solar_wind?.bt??null,1),meaning:"Total strength of the interplanetary magnetic field. A high Bt means there is a lot of field available to turn southward."},{id:"speed",label:"Wind speed",unit:"km/s",part:"solar_wind",series:"speed",value:n=>Xr(n?.solar_wind?.speed??null),detail:n=>n?.solar_wind?.spacecraft?`via ${n.solar_wind.spacecraft}`:"",meaning:"Bulk speed of the solar wind at L1, about a million miles sunward of Earth. Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal hole stream. Speed sets how hard the wind presses on the magnetosphere, and how long the warning is: at 400 km/s, L1 buys roughly an hour."},{id:"density",label:"Proton density",unit:"cm⁻³",part:"solar_wind",series:"density",value:n=>ks(n?.solar_wind?.density??null,1),meaning:"Protons per cubic centimetre in the solar wind. With speed it sets the dynamic pressure that compresses the magnetopause."},{id:"xray",label:"X-ray class",unit:"0.1–0.8 nm",part:"xray",value:n=>n?.xray?.class??we,detail:n=>n?.xray?.flux_long!=null?`${n.xray.flux_long.toExponential(1)} W/m²`:"",meaning:"Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. Each letter is ten times the one before: A, B, C, M, X. M and X class flares cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive at the speed of light, so there is no warning."},{id:"protons",label:"Radiation (S)",unit:"pfu ≥10 MeV",part:"particles",value:n=>{const t=n?.particles;return!t||t.proton_10mev===null?we:`S${t.s_scale??0}`},detail:n=>{const t=n?.particles;return t?.proton_10mev===null||t?.proton_10mev===void 0?"":`${t.proton_10mev.toFixed(2)} pfu · ${t.s_text??""}`},meaning:"Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S scale it defines. S1 begins at 10 particle flux units, and each step up is ten times the last. This is the one space-weather hazard that endangers people rather than equipment: at S3 and above, aviation crews on polar routes accumulate real dose and astronauts outside a hull are at risk. Protons from a flare can arrive within tens of minutes, far ahead of any CME."},{id:"electrons",label:"Electron flux",unit:"pfu ≥2 MeV",part:"particles",value:n=>Xr(n?.particles?.electron_2mev??null),detail:n=>{const t=n?.particles?.electron_2mev;return t==null?"":t>=1e3?"above NOAA alert level":"normal"},meaning:"Integral electron flux above 2 MeV at geostationary orbit. Sustained flux above 1000 particle flux units drives deep dielectric charging — electrons bury themselves inside insulating materials until the material discharges through the spacecraft. It is a leading cause of satellite anomalies, and it builds over days rather than minutes."},{id:"geosync",label:"Field at 6.6 Rₑ",unit:"nT",part:"geosync",value:n=>Xr(n?.geosync?.total_nt??null),detail:n=>{const t=n?.geosync;return!t||t.deficit_nt===null?"":t.arcjet?"thruster firing — suspect":`${t.deficit_nt>0?"−":"+"}${Math.abs(t.deficit_nt).toFixed(0)} vs dipole`},meaning:"Total magnetic field measured by GOES at geostationary orbit, 6.6 Earth radii out. This is the only in-situ magnetic measurement on the panel, and it is the one check available on the modelled shield: when the magnetopause is pushed inside 6.6 Rₑ, the spacecraft finds itself in the solar wind and the field it measures collapses. The reading normally sits below the dipole value for that distance, because the ring current and magnetopause currents subtract from Earth’s own field — the size of that deficit is itself a storm indicator."},{id:"dst",label:"Ring current",unit:"nT Dst",part:"dst",value:n=>Xr(n?.dst?.value_nt??null),detail:n=>n?.dst?.level??"",meaning:"Dst measures how much the ring current — a torus of trapped ions drifting westward around Earth at a few Earth radii — is subtracting from the surface magnetic field. It is the closest thing space weather has to a single number for the size of a storm, because it tracks the energy actually stored in the inner magnetosphere rather than the disturbance at any one station. Quiet is above −30 nT; below −100 nT is an intense storm. This value is MODELLED: NOAA’s Geospace run driven by the L1 solar wind, not Kyoto’s measured index, which has no route into the browser. Because the model propagates the wind to Earth it runs ahead of the clock — the value shown is the newest one that has actually arrived, and the panel says how far its forecast reaches beyond that."},{id:"mpause",label:"Magnetopause",unit:"Rₑ",part:"magnetopause",value:n=>ks(n?.magnetopause?.standoff_re??null,1),detail:()=>"Shue 1998",meaning:"Modelled distance from Earth’s centre to the sunward edge of the magnetosphere, in Earth radii, computed from the live solar wind. Typically 10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and exposed to the solar wind directly."}],he="https://services.swpc.noaa.gov",pe={mag:`${he}/json/rtsw/rtsw_mag_1m.json`,wind:`${he}/json/rtsw/rtsw_wind_1m.json`,kp1m:`${he}/json/planetary_k_index_1m.json`,xrayFlares:`${he}/json/goes/primary/xray-flares-latest.json`,xrays6h:`${he}/json/goes/primary/xrays-6-hour.json`,scales:`${he}/products/noaa-scales.json`,aurora:`${he}/json/ovation_aurora_latest.json`,regions:`${he}/json/solar_regions.json`,alerts:`${he}/products/alerts.json`,summaryMag:`${he}/products/summary/solar-wind-mag-field.json`,summarySpeed:`${he}/products/summary/solar-wind-speed.json`};function ce(n){if(!n||typeof n!="string")return null;let t=n.trim().replace(" ","T");/[Zz]$|[+-]\d{2}:?\d{2}$/.test(t)||(t+="Z");const e=Date.parse(t);return Number.isFinite(e)?new Date(e).toISOString():null}function Et(n){if(n==null||n==="")return null;const t=typeof n=="number"?n:Number(n);return!Number.isFinite(t)||t===-9999||t===-999?null:t}function Sn(n){return Array.isArray(n)?n:[]}function ir(n,t,e){let i=null,s=-1/0;for(const r of n){if(!e(r))continue;const a=Date.parse(ce(r[t])??"");Number.isFinite(a)&&a>s&&(s=a,i=r)}return i}const va=n=>n.active===!0;function f5(n,t){const e=ir(Sn(n),"time_tag",va),i=ir(Sn(t),"time_tag",va);if(!e&&!i)return null;const s=ce(e?.time_tag),r=ce(i?.time_tag),a=[s,r].filter(l=>!!l);return a.length===0?null:{time:a.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),bz_gsm:Et(e?.bz_gsm),by_gsm:Et(e?.by_gsm),bx_gsm:Et(e?.bx_gsm),bt:Et(e?.bt),speed:Et(i?.proton_speed),density:Et(i?.proton_density),temperature:Et(i?.proton_temperature),spacecraft:e?.source??i?.source??null}}function o0(n,t){const e=new Map,i=a=>ce(a.time_tag);for(const a of Sn(n)){if(!va(a))continue;const o=i(a);o&&((e.get(o)??e.set(o,{}).get(o)).m=a)}for(const a of Sn(t)){if(!va(a))continue;const o=i(a);if(!o)continue;const l=o.slice(0,17)+"00.000Z";(e.get(l)??e.set(l,{}).get(l)).w=a}const s=[...e.keys()].sort(),r={time:s,bx_gsm:[],by_gsm:[],bz_gsm:[],bt:[],density:[],speed:[],temperature:[]};for(const a of s){const{m:o,w:l}=e.get(a);r.bx_gsm.push(Et(o?.bx_gsm)),r.by_gsm.push(Et(o?.by_gsm)),r.bz_gsm.push(Et(o?.bz_gsm)),r.bt.push(Et(o?.bt)),r.density.push(Et(l?.proton_density)),r.speed.push(Et(l?.proton_speed)),r.temperature.push(Et(l?.proton_temperature))}return r}function p5(n){const t=ir(Sn(n),"time_tag",()=>!0),e=ce(t?.time_tag);return!t||!e?null:{time:e,estimated_kp:Et(t.estimated_kp),kp:t.kp??null}}function Xh(n){if(n===null||!Number.isFinite(n)||n<=0)return null;const t=[["X",1e-4],["M",1e-5],["C",1e-6],["B",1e-7],["A",1e-8]];for(const[e,i]of t)if(n>=i){const s=n/i;return`${e}${s.toFixed(1)}`}return`A${(n/1e-8).toFixed(1)}`}function m5(n){const t=Sn(n)[0],e=ce(t?.time_tag),i=t?.current_class;return!t||!e||!i?null:{time:e,class:i}}function g5(n){const t=Sn(n),e=ir(t,"time_tag",a=>String(a.energy).startsWith("0.1-0.8")),i=ir(t,"time_tag",a=>String(a.energy).startsWith("0.05-0.4")),s=ce(e?.time_tag);if(!e||!s)return null;const r=Et(e.flux);return{time:s,flux_long:r,flux_short:Et(i?.flux),class:Xh(r)}}function Co(n){const t=n??{},e=t.Text??null;return{scale:Et(t.Scale),text:e?e[0].toUpperCase()+e.slice(1):null,minor_prob:Et(t.MinorProb??t.Prob),major_prob:Et(t.MajorProb)}}function _5(n){const e=n?.["0"]??null;if(!e)return null;const i=e.DateStamp??null,s=e.TimeStamp??null;return{R:Co(e.R),S:Co(e.S),G:Co(e.G),date:i,time:i?ce(s?`${i}T${s}`:`${i}T00:00:00`):null}}function v5(n,t=8){return Sn(n).map(e=>{const i=ce(e.issue_datetime),s=(e.message??"").replace(/\r/g,"");if(!i)return null;const r=s.split(`
`).map(u=>u.trim()).filter(u=>u.length>0),a=r.find(u=>/^(ALERT|WARNING|WATCH|SUMMARY|EXTENDED WARNING|CANCEL)/i.test(u))??r.find(u=>!/^(Space Weather Message Code|Serial Number|Issue Time|Valid From|Valid To)\b/i.test(u))??r[0]??"",o=/^(EXTENDED WARNING|CANCEL WARNING|CANCEL|ALERT|WARNING|WATCH|SUMMARY)\s*:?\s*(.*)$/i.exec(a),l=(o?.[1]??"").toUpperCase(),c=l.startsWith("CANCEL")?"cancel":l==="ALERT"?"alert":l.includes("WARNING")?"warning":l==="WATCH"?"watch":l==="SUMMARY"?"summary":"other";return{issued:i,product:e.product_id??"",message:s,headline:a,level:c,text:(o?.[2]??a).trim()}}).filter(e=>e!==null).sort((e,i)=>Date.parse(i.issued)-Date.parse(e.issued)).slice(0,t)}const Bs=360,qr=181;function x5(n){const t=n,e=t?.coordinates;if(!Array.isArray(e)||e.length===0)return null;const i=ce(t?.["Observation Time"]),s=ce(t?.["Forecast Time"]);if(!i||!s)return null;const r=new Uint8Array(Bs*qr);let a=0;for(const o of e){if(!Array.isArray(o)||o.length<3)continue;const l=Number(o[0]),c=Number(o[1]),u=Number(o[2]);if(!Number.isFinite(l)||!Number.isFinite(c)||!Number.isFinite(u))continue;const h=(Math.round(l)%Bs+Bs)%Bs,d=Math.round(c)+90;if(d<0||d>=qr)continue;const f=Math.max(0,Math.min(100,u));r[h*qr+d]=f,f>a&&(a=f)}return{observation_time:i,forecast_time:s,max_probability:a,grid:{lon_start:0,lon_step:1,lat_start:-90,lat_step:1,width:Bs,height:qr,values:r}}}function S5(n,t,e){const i=(Math.round(e)%n.width+n.width)%n.width,s=Math.round(t)-n.lat_start;return s<0||s>=n.height?0:n.values[i*n.height+s]??0}function M5(n){const t=Sn(n).map(e=>({t:ce(e.time_tag),v:Et(e.estimated_kp)})).filter(e=>e.t!==null).sort((e,i)=>Date.parse(e.t)-Date.parse(i.t));return{time:t.map(e=>e.t),value:t.map(e=>e.v)}}function y5(n){const t=Sn(n).filter(e=>String(e.energy).startsWith("0.1-0.8")).map(e=>({t:ce(e.time_tag),v:Et(e.flux)})).filter(e=>e.t!==null).sort((e,i)=>Date.parse(e.t)-Date.parse(i.t));return{time:t.map(e=>e.t),value:t.map(e=>e.v)}}function as(n,t){if(n.time.length<=t)return n;const e=n.time.length/t,i=[],s=[];for(let r=0;r<t;r++){const a=Math.floor(r*e),o=Math.min(n.time.length,Math.floor((r+1)*e));let l=null,c=a;for(let u=a;u<o;u++){const h=n.value[u];h!=null&&(l===null||Math.abs(h)>Math.abs(l))&&(l=h,c=u)}i.push(n.time[c]??n.time[a]),s.push(l)}return{time:i,value:s}}function b5(n){const t=Sn(n);if(t.length===0)return[];let e="";for(const r of t){const a=String(r.observed_date??"");a>e&&(e=a)}if(!e)return[];const i=new Set,s=[];for(const r of t){if(String(r.observed_date)!==e)continue;const a=Et(r.region),o=Et(r.latitude),l=Et(r.longitude);a===null||o===null||l===null||i.has(a)||(i.add(a),s.push({region:a,observed:`${e}T12:00:00.000Z`,lat:o,lon:l,area:Et(r.area),spots:Et(r.number_spots),spotClass:r.spot_class??null,magClass:r.mag_class??null,cProb:Et(r.c_flare_probability),mProb:Et(r.m_flare_probability),xProb:Et(r.x_flare_probability)}))}return s.sort((r,a)=>(a.area??0)-(r.area??0))}function jr(n,t){const e=n.series?.data;return e?{time:e.time,value:e[t]}:null}function E5(n){const t=n.series?.data;if(!t)return null;const e=t.time.map((i,s)=>{const r=pc(t.bz_gsm[s]??null,t.density[s]??null,t.speed[s]??null);return r?r.r0Re:null});return{time:t.time,value:e}}const w5=110;function T5(n,t){const e=(i,s={})=>i&&i.value.some(r=>r!==null)?{series:as(i,w5),opts:s}:null;switch(n){case"bz":return e(jr(t,"bz_gsm"),{rule:0});case"bt":return e(jr(t,"bt"));case"speed":return e(jr(t,"speed"));case"density":return e(jr(t,"density"));case"kp":return e(t.kpSeries,{rule:5,band:[0,4]});case"xray":return e(t.xraySeries,{log:!0});case"protons":return e(t.protonSeries,{log:!0,rule:10});case"electrons":return e(t.electronSeries,{log:!0,rule:1e3});case"geosync":return e(t.geosyncSeries);case"dst":return e(t.dstSeries,{rule:0});case"mpause":return e(E5(t),{rule:6.6});default:return null}}function qh(n,t){const e=n.value;if(!e||e.length<2)return null;const i=m=>t.log?Math.log10(Math.max(m,1e-12)):m,s=[],r=[];for(let m=0;m<e.length;m++){const p=e[m];p==null||!Number.isFinite(p)||t.log&&p<=0||(s.push(m),r.push(i(p)))}if(r.length<2)return null;let a=Math.min(...r),o=Math.max(...r);if(t.rule!==null&&t.rule!==void 0){const m=i(t.rule);a=Math.min(a,m),o=Math.max(o,m)}t.band&&(a=Math.min(a,i(t.band[0])),o=Math.max(o,i(t.band[1])));const l=o-a||1,c=e.length-1,u=1.2,h=m=>m/c*(t.width-u*2)+u,d=m=>t.height-u-(m-a)/l*(t.height-u*2),f=s.map((m,p)=>({x:h(m),y:d(r[p]),v:r[p]}));let g=f[0],_=f[0];for(const m of f)m.v<g.v&&(g=m),m.v>_.v&&(_=m);return{pts:f,min:a,max:o,last:f[f.length-1]??null,lo:g,hi:_,w:t.width,h:t.height}}function A5(n){return n.map((t,e)=>`${e===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join("")}function Ri(n,t={}){const e={width:62,height:15,rule:null,band:null,log:!1,extremes:!1,label:"",className:"",...t},i=qh(n,e);if(!i)return'<span class="spark-missing" title="no history">—</span>';const s=d=>e.log?Math.log10(Math.max(d,1e-12)):d,r=i.max-i.min||1,a=1.2,o=d=>e.height-a-(d-i.min)/r*(e.height-a*2),l=e.band?`<rect class="spark-band" x="0" y="${o(s(e.band[1])).toFixed(2)}" width="${e.width}"
        height="${Math.max(.5,o(s(e.band[0]))-o(s(e.band[1]))).toFixed(2)}" />`:"",c=e.rule!==null&&e.rule!==void 0?`<line class="spark-rule" x1="0" y1="${o(s(e.rule)).toFixed(2)}" x2="${e.width}" y2="${o(s(e.rule)).toFixed(2)}" />`:"",u=e.extremes?`<circle class="spark-lo" cx="${i.lo.x.toFixed(2)}" cy="${i.lo.y.toFixed(2)}" r="1.3" />
       <circle class="spark-hi" cx="${i.hi.x.toFixed(2)}" cy="${i.hi.y.toFixed(2)}" r="1.3" />`:"",h=i.last?`<circle class="spark-last" cx="${i.last.x.toFixed(2)}" cy="${i.last.y.toFixed(2)}" r="1.6" />`:"";return`<svg class="spark-inline ${e.className}" viewBox="0 0 ${e.width} ${e.height}"
    width="${e.width}" height="${e.height}" role="img" aria-label="${R5(e.label||"trend")}"
    preserveAspectRatio="none">${l}${c}<path class="spark-path" d="${A5(i.pts)}" />${u}${h}</svg>`}function mn(n,t={}){const e={width:268,height:46,extremes:!0,...t},i=qh(n,{...e,width:e.width,height:e.height});if(!i)return'<p class="tile-meta">No history loaded.</p>';const s=e.format??(l=>l.toFixed(1)),r=l=>e.log?Math.pow(10,l):l,a=n.time.length>1?Date.parse(n.time[n.time.length-1])-Date.parse(n.time[0]):0,o=e.direction==="future";return`${Ri(n,{...e,label:e.label??(o?"forecast":"history")})}
    <p class="tile-meta">${s(r(i.lo.v))} to ${s(r(i.hi.v))}${e.unit?` ${e.unit}`:""}
    ${o?`over the next ${l0(a)} · <span class="spark-key-last">●</span> end of run`:`over the last ${l0(a)} · <span class="spark-key-last">●</span> now`}
    <span class="spark-key-ex">●</span> range</p>`}function l0(n){const t=n/36e5;if(t<48)return`${t.toFixed(0)} h`;const e=t/24;if(e<60)return`${e.toFixed(0)} days`;const i=e/30.44;return i<24?`${i.toFixed(0)} months`:`${(e/365.25).toFixed(0)} years`}function R5(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Po=60.3;function C5(n){if(n.length===0)return"";const t=n.reduce((l,c)=>Math.max(l,c.offAxisRe),0),e=Math.max(Po*1.12,t*1.25),i=78,s=i/e,r=96,a=92,o=n.map(l=>{const c=r+l.gse.y/6371.2*s,u=a-l.gse.z/6371.2*s,h=l.active?"l1-active":"l1-idle";return`<circle class="${h}" cx="${c.toFixed(1)}" cy="${u.toFixed(1)}" r="${l.active?4:3}" />
      <text class="l1-label ${h}" x="${(c+7).toFixed(1)}" y="${(u+3.5).toFixed(1)}">${wt(l.source)}</text>`}).join("");return`<svg class="l1-inset" viewBox="0 0 192 184" role="img"
      aria-label="Cross-section looking along the Sun–Earth line: the L1 monitors plotted at their true distance from the line, against the Moon's orbit for scale.">
    <circle class="l1-moon" cx="${r}" cy="${a}" r="${(Po*s).toFixed(1)}" />
    <text class="l1-tick" x="${r}" y="${(a+Po*s+10).toFixed(1)}">Moon’s orbit</text>
    <line class="l1-cross" x1="${r-i}" y1="${a}" x2="${r+i}" y2="${a}" />
    <line class="l1-cross" x1="${r}" y1="${a-i}" x2="${r}" y2="${a+i}" />
    <circle class="l1-earth" cx="${r}" cy="${a}" r="${Math.max(1.1,s).toFixed(2)}" />
    ${o}
    <text class="l1-axis" x="${r+i}" y="${a+12}" text-anchor="end">dusk</text>
    <text class="l1-axis" x="${r}" y="14" text-anchor="middle">ecliptic north</text>
  </svg>`}const P5="https://raw.githubusercontent.com/jjh111/EarthStar/data/v1",D5=15e3,L5=600;function I5(n){if(!n.startsWith(he))return null;const t=n.slice(he.length).split("?")[0];return t.startsWith("/images/")||t.includes("/animations/")?null:`${P5}/swpc${t}`}const Gl=new Set;function N5(n){return Gl.has(n)}async function Do(n,t,e="json"){const i=new AbortController,s=setTimeout(()=>i.abort(new Error("timeout")),D5),r=()=>i.abort(t?.reason);t?.addEventListener("abort",r,{once:!0});try{const a=await fetch(n,{cache:"no-store",signal:i.signal});return a.ok?{json:e==="json"?await a.json():await a.text()}:{json:null,error:`HTTP ${a.status}`}}catch(a){return{json:null,error:a instanceof Error?a.message:String(a),retryable:!t?.aborted}}finally{clearTimeout(s),t?.removeEventListener("abort",r)}}const U5=n=>new Promise(t=>setTimeout(t,n));async function jh(n,t,e="json"){Gl.delete(n);const i=await Do(n,t,e);if(!i.retryable)return{json:i.json,...i.error?{error:i.error}:{}};if(await U5(L5),t?.aborted)return{json:null,error:i.error??"aborted"};const s=await Do(n,t,e);if(!s.retryable)return{json:s.json,...s.error?{error:s.error}:{}};const r=I5(n);if(!r||t?.aborted)return{json:null,error:s.error??"unreachable"};const a=await Do(r,t,e);return a.json===null?{json:null,error:s.error??"unreachable"}:(Gl.add(n),{json:a.json,mirrored:!0})}const Ae=(n,t)=>jh(n,t,"json"),F5=(n,t)=>jh(n,t,"text"),O5=`${he}/json/enlil_time_series.json`,$s=.1;function k5(n,t=new Date){const e={past:[],ahead:[],peakSpeed:null,peakCloud:null,cloudArrival:null,firstTime:null,lastTime:null};if(!Array.isArray(n))return e;const i=[];for(const l of n){const c=ce(typeof l.time_tag=="string"?l.time_tag:null);c!==null&&i.push({time:c,speed:Et(l.v_r),density:Et(l.earth_particles_per_cm3),temperature:Et(l.temperature),br:Et(l.b_r),polarity:Et(l.polarity),cloud:Et(l.cloud)})}if(i.length===0)return e;i.sort((l,c)=>l.time.localeCompare(c.time));const s=t.getTime(),r=i.filter(l=>Date.parse(l.time)<=s),a=i.filter(l=>Date.parse(l.time)>s),o=(l,c)=>l.reduce((u,h)=>h[c]!==null&&(u===null||h[c]>u[c])?h:u,null);return{past:r,ahead:a,peakSpeed:o(a,"speed"),peakCloud:o(a,"cloud"),cloudArrival:a.find(l=>(l.cloud??0)>=$s)??null,firstTime:i[0].time,lastTime:i[i.length-1].time}}function c0(n,t){return{time:n.map(e=>e.time),value:n.map(e=>e[t])}}function B5(n,t,e=15){const i=t.getTime();let s=null,r=1/0;for(const a of[...n.past,...n.ahead]){const o=Math.abs(Date.parse(a.time)-i);o<r&&(r=o,s=a)}return r<=e*6e4?s:null}async function Yh(n,t=new Date){try{const e=await Ae(O5,n);return e.json===null?null:k5(e.json,t)}catch{return null}}const $l=`${he}/json/rtsw/rtsw_ephemerides_1h.json`,z5={SOLAR1:"SWFO-L1, NOAA’s operational wind monitor since 2026",DSCOVR:"NOAA, operational 2016–2026, now a backup",ACE:"NASA, launched 1997 and still returning data",IMAP:"NASA, launched 2025 — interstellar mapping, wind as a by-product"};function Kh(n){if(!Array.isArray(n))return[];const t=new Map;for(const i of n){const s=typeof i.source=="string"?i.source:null,r=ce(typeof i.time_tag=="string"?i.time_tag:null);if(!s||!r||Et(i.x_gse)===null||Et(i.y_gse)===null||Et(i.z_gse)===null)continue;const a=Date.parse(r);if(!Number.isFinite(a))continue;const o=t.get(s);(!o||a>o.t)&&t.set(s,{rec:i,t:a,iso:r})}const e=[];for(const[i,{rec:s,iso:r}]of t){const a=Et(s.x_gse),o=Et(s.y_gse),l=Et(s.z_gse),c=Math.hypot(o,l),u=Math.hypot(a,c);e.push({time:r,source:i,active:s.active===!0,gse:{x:a,y:o,z:l},distanceRe:u/fi,offAxisRe:c/fi,offAxisDeg:Math.atan2(c,a)*180/Math.PI})}return e.sort((i,s)=>Number(s.active)-Number(i.active)||i.distanceRe-s.distanceRe),e}const ns={particle:'<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="1.6"/><path d="M2 2l3.2 2.6M14 2l-3.2 2.6M2 10l3.2-2.6M14 10l-3.2-2.6"/></svg>',wind:'<svg class="glyph" viewBox="0 0 16 12"><path d="M1 3h8a2 2 0 1 0-2-2M1 6h11a2 2 0 1 1-2 2M1 9h6a1.6 1.6 0 1 1-1.6 1.6"/></svg>',field:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v10M8 1C4 3 2 5 2 6s2 3 6 5M8 1c4 2 6 4 6 5s-2 3-6 5"/></svg>',flare:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v3.4M8 7.6V11M2.6 6h3.2M10.2 6h3.2M4.2 2.4l2.2 2.2M9.6 7.6l2.2 2.2M11.8 2.4L9.6 4.6M6.4 7.6l-2.2 2.2"/></svg>',aurora:'<svg class="glyph" viewBox="0 0 16 12"><path d="M3 11V5c0-2 1-3.4 2.4-3.4M7 11V4.4c0-2 1-3.4 2.4-3.4M11 11V5.4c0-2 1-3.2 2.2-3.2"/></svg>',shield:'<svg class="glyph" viewBox="0 0 16 12"><path d="M12 1C7 1 3 3.2 3 6s4 5 9 5"/><circle cx="13.4" cy="6" r="1.5"/></svg>'},V5='<span class="sentence-missing">no data</span>',H5='<span class="sentence-loading">…</span>';function is(n,t,e,i=!1){if(n==null||!Number.isFinite(n))return i?H5:V5;const s=e==="%"?" tight":"";return`<b class="sentence-num">${n.toFixed(t)}</b><span class="sentence-unit${s}">${e}</span>`}function G5(n){const t=n.now?.data??null,e=t?.solar_wind??null,i=!n.now&&n.lanes.snapshot,s=[],r=n.series?{time:n.series.data.time,value:n.series.data.speed}:null,a=n.series?{time:n.series.data.time,value:n.series.data.bz_gsm}:null,o=e?.bz_gsm??null,l=o===null?"in an unknown direction":o<-5?"strongly southward":o<0?"southward":"northward",c=o===null?"":o<0?" &mdash; the orientation that opens Earth&rsquo;s field and lets energy in":" &mdash; the orientation that keeps Earth&rsquo;s field closed";s.push(`${ns.wind} The solar wind is blowing ${r?Ri(r,{label:"wind speed over the last 24 hours"}):""} ${is(e?.speed??null,0,"km/s",i)}, carrying a field that points ${i?"":l} ${a?Ri(a,{rule:0,extremes:!0,label:"Bz over the last 24 hours, rule at zero"}):""} ${is(o,1,"nT",i)}${i?"":c}.`);const u=t?.magnetopause?.standoff_re??null,h=u===null?"":u<8?", pushed well in":u>11.5?", standing off comfortably":"";s.push(`${ns.shield} It meets the magnetosphere ${is(u,1,"R⊕",i)} out on the sunward side${i?"":h}.`);const d=t?.kp?.estimated_kp??null,f=d===null?i?"":"of unknown disturbance":d>=5?"storming":d>=4?"unsettled":"quiet";s.push(`${ns.field} The ground beneath is ${f} ${n.kpSeries?Ri(n.kpSeries,{band:[0,4],extremes:!0,label:"Kp over the last 6 hours, quiet band shaded"}):""} ${is(d,2,"Kp",i)}.`);const g=t?.particles??null;if(g){const p=g.proton_10mev;s.push(`${ns.particle} Radiation is at <b class="sentence-num">${i?"…":`S${g.s_scale??0}`}</b>${n.protonSeries?` ${Ri(n.protonSeries,{log:!0,extremes:!0,label:"proton flux above 10 MeV, last 6 hours, logarithmic"})}`:""} ${is(p,2,"pfu",i)}`+(i?"":g.s_scale!==null&&g.s_scale>=1?" &mdash; a storm is under way":" &mdash; nothing to worry about")+".")}const _=t?.xray??null,m=n.aurora?.data??null;return s.push(`${ns.flare} The Sun is putting out ${n.xraySeries?Ri(n.xraySeries,{log:!0,extremes:!0,label:"X-ray flux over the last 6 hours, logarithmic"}):""} <b class="sentence-num">${i?"…":_?.class??"no data"}</b> X-rays, and ${ns.aurora} the aurora is forecast to reach ${is(m?.max_probability??null,0,"%",i)} at its brightest.`),s.join(" ")}function $5(n){if(!n.now&&n.lanes.snapshot)return"Solar wind, magnetopause standoff, planetary K index, radiation, X-ray class and aurora forecast: all loading. Positions and the scene are computed locally and are already live.";const e=n.now?.data??null,i=e?.solar_wind??null,s=(r,a)=>r==null||!Number.isFinite(r)?"no data":r.toFixed(a);return`Solar wind ${s(i?.speed,0)} kilometres per second, interplanetary field Bz ${s(i?.bz_gsm,1)} nanotesla, magnetopause standoff ${s(e?.magnetopause?.standoff_re,1)} Earth radii, planetary K index ${s(e?.kp?.estimated_kp,2)}, X-ray class ${e?.xray?.class??"no data"}, peak aurora probability ${s(n.aurora?.data?.max_probability,0)} percent.`}const ss={kp:`${he}/products/noaa-planetary-k-index-forecast.json`,probabilities:`${he}/json/solar_probabilities.json`,threeDay:`${he}/text/3-day-forecast.txt`,discussion:`${he}/text/discussion.txt`,flares7:`${he}/json/goes/primary/xray-flares-7-day.json`,f107:`${he}/products/summary/10cm-flux.json`},u0=async(n,t)=>(await F5(n,t)).json,Yr=async(n,t)=>(await Ae(n,t)).json;function W5(n){if(!Array.isArray(n))return[];const t=[];for(const e of n){const i=ce(e.time_tag),s=Number(e.kp);if(!i||!Number.isFinite(s))continue;const r=String(e.observed??"").toLowerCase();t.push({time:i,kp:s,kind:r==="observed"?"observed":r==="estimated"?"estimated":"predicted",scale:e.noaa_scale??null})}return t.sort((e,i)=>Date.parse(e.time)-Date.parse(i.time))}function X5(n){if(!Array.isArray(n))return[];const t=e=>{const i=Number(e);return Number.isFinite(i)?i:null};return n.map(e=>({date:String(e.date??"").slice(0,10),c:t(e.c_class_1_day),m:t(e.m_class_1_day),x:t(e.x_class_1_day)})).filter(e=>e.date).sort((e,i)=>i.date.localeCompare(e.date)).slice(0,3)}function q5(n){return Array.isArray(n)?n.map(t=>({begin:ce(t.begin_time)??"",max:ce(t.max_time),maxClass:String(t.max_class??""),region:Number.isFinite(Number(t.current_region))?Number(t.current_region):null})).filter(t=>t.begin&&t.maxClass).sort((t,e)=>Date.parse(e.begin)-Date.parse(t.begin)).slice(0,8):[]}function h0(n){const t=/:Issued:\s*(.+)/.exec(n)?.[1]?.trim()??null,e=n.split(`
`).filter(i=>!/^[:#]/.test(i)).join(`
`).replace(/\n{3,}/g,`

`).trim();return{issued:t,body:e}}async function j5(n){const[t,e,i,s,r,a,o]=await Promise.all([Yr(ss.kp,n),Yr(ss.probabilities,n),u0(ss.threeDay,n),u0(ss.discussion,n),Yr(ss.flares7,n),Yr(ss.f107,n),Yh(n)]),l=Array.isArray(a)?a[0]:void 0;return{kp:W5(t),odds:X5(e),threeDay:i,discussion:s,flares:q5(r),f107:{value:l&&Number.isFinite(Number(l.flux))?Number(l.flux):null,time:l?ce(l.time_tag):null},enlil:o,fetchedAt:new Date().toISOString()}}const Y5=`${he}/json/solar-cycle/observed-solar-cycle-indices.json`,Kr=n=>{const t=Number(n);return Number.isFinite(t)&&t>=0?t:null};function K5(n){if(!Array.isArray(n)||n.length===0)return null;const t={time:[],value:[]},e={time:[],value:[]},i={time:[],value:[]};let s=null,r=null;for(const a of n){const o=String(a["time-tag"]??"");if(!/^\d{4}-\d{2}$/.test(o))continue;const l=`${o}-01T00:00:00.000Z`,c=Kr(a.ssn);t.time.push(l),t.value.push(c),e.time.push(l),e.value.push(Kr(a.smoothed_ssn)),i.time.push(l),i.value.push(Kr(a["f10.7"])),c!==null&&(!r||c>r.ssn)&&(r={month:o,ssn:c}),s={month:o,ssn:c,f107:Kr(a["f10.7"])}}return t.time.length===0?null:{ssn:t,smoothed:e,f107:i,latest:s,allTimeMax:r}}function Z5(n,t){const e=Math.max(0,n.time.length-t);return{time:n.time.slice(e),value:n.value.slice(e)}}async function J5(n){const t=await Ae(Y5,n);if(t.json===null)throw new Error(t.error??"unreachable");return K5(t.json)}const Q5=299792.458,tv={Sun:"Every quantity on this panel starts here. The photosphere is 5 800 K and the corona above it is two million — the unsolved problem that makes the solar wind possible at all.",Mercury:"No atmosphere and only a weak global field, about 1% of Earth’s, so the solar wind reaches the surface. MESSENGER found its magnetosphere can be crushed to the ground during a strong event.",Venus:"No global magnetic field. The wind interacts directly with the ionosphere and strips the upper atmosphere, which is part of why Venus has almost no water left.",Earth:"The only planet here with a strong, stable dipole. Everything else in this instrument is about what that field is doing today.",Mars:"Lost its global field roughly four billion years ago and kept only crustal patches. MAVEN measured the wind stripping the atmosphere at a rate that, over that span, accounts for much of what is missing.",Jupiter:"The largest magnetosphere in the solar system — some twenty thousand times Earth’s magnetic moment, and if it glowed visibly it would be several times the size of the full Moon from here. Its aurorae are powered mostly by Io’s volcanoes rather than by the solar wind.",Saturn:"A magnetic axis aligned with its rotation axis to within a fraction of a degree, which is not supposed to be possible for a self-sustaining dynamo and is still not explained.",Uranus:"Its magnetic axis is tilted 59° from its rotation axis and misses the centre of the planet, so its magnetosphere opens and closes once a day.",Neptune:"A magnetic field tilted 47° and offset from the centre, like Uranus. Both suggest a field generated in a thin shell rather than a deep core.",Moon:"No field and no atmosphere, so the surface is exposed to the solar wind directly — which is why a radiation storm is an operational problem for anyone there, and why the S scale on this panel is the one that measures risk to people."};function Zh(n,t){const e=tr[n]??tr.Moon,i=tv[n]??"";let s=null,r=null;if(n==="Sun")r=Ra(vt.Sun,ge(t),!0).Length();else if(n==="Moon")r=bh(t).length(),s=Qs("Earth",t).helio.length();else if(yh.includes(n)){const l=Qs(n,t);s=l.helio.length(),r=n==="Earth"?null:l.geo.length()}const a=r===null?null:r*ys/Q5,o=r===null||r===0?null:2*Math.atan(e/(r*ys))*180*3600/Math.PI;return{name:n,auFromSun:s,auFromEarth:r,lightSeconds:a,radiusKm:e,arcsecFromEarth:o,note:i}}function Jh(n){if(n===null)return"—";if(n<90)return`${n.toFixed(1)} s`;if(n<3600){const t=Math.floor(n/60);return`${t} min ${Math.round(n-t*60)} s`}return`${(n/3600).toFixed(1)} h`}function xa(n){if(n===null)return"—";const t=n*ys;return n<.01?`${Math.round(t/1e3).toLocaleString("en-US")} thousand km`:`${n.toFixed(3)} AU`}const ev=[[9,"extreme storm"],[8,"severe storm"],[7,"strong storm"],[6,"moderate storm"],[5,"minor storm"],[4,"unsettled"],[0,"quiet"]];function nv(n){if(n===null)return"unknown";for(const[t,e]of ev)if(n>=t)return e;return"quiet"}function d0(n,t){const e=n>=0?"N":"S",i=t>=0?"E":"W";return`${Math.abs(n).toFixed(1)}°${e}, ${Math.abs(t).toFixed(1)}°${i}`}function rs(n){const t=n.nextAttempt?Date.parse(n.nextAttempt):NaN;return Number.isFinite(t)?` The next attempt is at ${It(new Date(t).toISOString())} UTC.`:" The next attempt is the next refresh cycle."}function Qh(n,t,e=new Date,i=null,s=[],r=[],a={snapshot:!1,aurora:!1,cmes:!1}){const o=[],l=`${It(e.toISOString())} UTC`;if(!n){if(a.snapshot){o.push(`Solar wind: loading. Positions, the terminator and the scene are computed locally and are already live; the measurements land as the feeds resolve, snapshot lane first (checked ${l}).`);const f=Hl(e);return o.push(`Scene: the Sun at centre, planets at their true positions for ${l} [D]; the Sun is overhead at ${d0(f.lat,f.lon)}. `+(t.earthSurface==="imagery"?"Earth's surface is NASA's Blue Marble composite (2004) [E].":"Earth's surface imagery is still loading; the vector base map is on the globe.")),o}o.push(`No space-weather data has loaded yet (checked ${l}). The scene below shows body positions only, which are computed locally and do not depend on the network.`)}const c=n?.data,u=n?.parts;if(c&&u){const f=hs(u.solar_wind,e),g=c.solar_wind;if(!g||f.state==="no-data")o.push(u.solar_wind?.error?`Solar wind: unavailable (${gn(u.solar_wind.error)}). ${rs(a)} Nothing is being substituted for it.`:"Solar wind: no data. Nothing is being substituted for it.");else{const T=g.bz_gsm,E=T===null?"unknown":T<-5?"strongly southward, which couples energy into the magnetosphere":T<0?"southward":"northward, which keeps the magnetosphere relatively closed";o.push(`Solar wind at L1, measured by ${g.spacecraft??"the active spacecraft"}: Bz ${T===null?"no data":`${T.toFixed(1)} nanotesla`} (${E}); total field ${g.bt===null?"no data":`${g.bt.toFixed(1)} nT`}; speed ${g.speed===null?"no data":`${Math.round(g.speed)} kilometres per second`}; density ${g.density===null?"no data":`${g.density.toFixed(1)} protons per cubic centimetre`}. Measured [E], timestamped ${It(g.time)} UTC`+(f.state==="stale"?`, and now STALE — ${rn(f.ageS??0)} old.`:`, ${rn(f.ageS??0)} old.`))}if(c.propagated){const T=c.propagated.lead_minutes,E=r.find(L=>L.active)??null,C=E?`at L1, ${(E.distanceRe*6371.2/1e6).toFixed(2)} million kilometres sunward and ${E.offAxisRe.toFixed(0)} Earth radii off the Sun–Earth line (${E.offAxisDeg.toFixed(1)}°) [E]`:"at L1, about 1.5 million kilometres sunward";o.push(`That wind was measured ${C}, and takes roughly an hour to arrive. NOAA propagates it to the bow shock nose [D · NOAA]: what is reaching Earth right now was observed at ${It(c.propagated.observed_at)} UTC, with Bz ${c.propagated.bz===null?"no data":`${c.propagated.bz.toFixed(1)} nT`} and speed ${c.propagated.speed===null?"no data":`${Math.round(c.propagated.speed)} km/s`}. `+(T!==null&&T>0?`There are about ${Math.round(T)} minutes of already-measured wind still in flight — that is the warning currently in hand.`:"No further measured wind is in flight."))}const _=c.geosync;if(_&&_.total_nt!==null){const T=c.magnetopause?.standoff_re??null;o.push(`GOES-${_.satellite??"?"} measures ${_.total_nt.toFixed(0)} nT at geostationary orbit, 6.6 Earth radii out [E], ${It(_.time)} UTC`+(_.arcjet?" — though its thruster was firing, so the reading is suspect":"")+`. That is ${_.deficit_nt!==null&&_.deficit_nt>0?`${_.deficit_nt.toFixed(0)} nT below`:"about"} the dipole value for that distance; the difference is the ring current and magnetopause currents subtracting from Earth's own field. `+(T!==null?T<=6.6?"With the modelled boundary inside 6.6 Rₑ, the spacecraft should be out in the solar wind — that is a claim this measurement can falsify.":"The modelled boundary is outside 6.6 Rₑ, so the spacecraft should be inside the magnetosphere, which is what this field says.":""))}const m=c.particles;if(m){const T=m.s_scale===null?"no data":`S${m.s_scale}${m.s_text?` (${m.s_text})`:""}`;o.push(`Energetic particles at geostationary orbit, measured by GOES [E], ${It(m.time)} UTC: protons above 10 MeV at ${m.proton_10mev===null?"no data":`${m.proton_10mev.toFixed(2)} pfu`}, radiation storm level ${T}`+(m.s_scale!==null&&m.s_scale>=3?" — at this level aviation crews on polar routes take real dose.":".")+` Electrons above 2 MeV at ${m.electron_2mev===null?"no data":`${Math.round(m.electron_2mev)} pfu`}`+(m.electron_2mev!==null&&m.electron_2mev>=1e3?", above NOAA’s alert level for satellite charging.":", below the level that charges satellites."))}else o.push(u.particles?.error?`Energetic particle flux: unavailable (${gn(u.particles.error)}). ${rs(a)} No radiation storm level is shown.`:"Energetic particle flux: no data. No radiation storm level is shown.");const p=hs(u.kp,e);!c.kp||p.state==="no-data"?o.push(u.kp?.error?`Planetary K index: unavailable (${gn(u.kp.error)}). ${rs(a)}`:"Planetary K index: no data."):o.push(`Planetary K index ${c.kp.estimated_kp===null?"no data":c.kp.estimated_kp.toFixed(2)} — geomagnetic conditions are ${nv(c.kp.estimated_kp)}. Measured [E], ${It(c.kp.time)} UTC${p.state==="stale"?" — STALE":""}.`);const b=hs(u.dst,e);if(!c.dst||b.state==="no-data")o.push(u.dst?.error?`Ring current (Dst): unavailable (${gn(u.dst.error)}). ${rs(a)}`:"Ring current (Dst): no data.");else{const T=c.dst.lead_minutes;o.push(`Ring current index Dst ${c.dst.value_nt===null?"no data":`${c.dst.value_nt.toFixed(0)} nanotesla`} — ${c.dst.level??"unclassified"}. This is how much a torus of trapped ions drifting around Earth is subtracting from the surface field; it is the single number that best tracks the size of a storm. Modelled [D] by NOAA's Geospace run from the L1 solar wind — not Kyoto's measured index, which has no route into a browser — for ${It(c.dst.time)} UTC${b.state==="stale"?" — STALE":""}. `+(T!==null&&T>0?`The model runs ${T} minutes ahead of that; the value quoted is the newest one whose time has arrived, not the newest one in the file.`:"The model has no lead beyond that sample."))}const x=hs(u.xray,e);if(!c.xray||x.state==="no-data"?o.push(u.xray?.error?`GOES X-ray flux: unavailable (${gn(u.xray.error)}). ${rs(a)}`:"GOES X-ray flux: no data."):o.push(`Solar X-ray background is class ${c.xray.class??"no data"} (${c.xray.flux_long===null?"no data":`${c.xray.flux_long.toExponential(1)} watts per square metre`}, 0.1–0.8 nanometre band, GOES). Measured [E], ${It(c.xray.time)} UTC${x.state==="stale"?" — STALE":""}.`),c.scales){const T=c.scales.G,E=c.scales.R,C=c.scales.S;o.push(`NOAA scales today: radio blackouts R${E.scale??"–"} (${E.text??"no data"}), solar radiation S${C.scale??"–"} (${C.text??"no data"}), geomagnetic storms G${T.scale??"–"} (${T.text??"no data"}). NOAA's own product, modeled [D].`)}else o.push(u.scales?.error?`NOAA R/S/G scales: unavailable (${gn(u.scales.error)}). ${rs(a)}`:"NOAA R/S/G scales: no data.");const v=c.magnetopause;if(v?.standoff_re!=null){const T=v.standoff_re<9?" That is a compressed magnetosphere — the shield is being pushed in.":v.standoff_re>11.5?" That is an expanded, quiet magnetosphere.":"";o.push(`Modeled [D] magnetopause standoff: ${v.standoff_re.toFixed(1)} Earth radii on the sunward side, with flaring parameter ${v.alpha?.toFixed(2)??"no data"}, computed from the ${c.propagated?"propagated":"L1"} solar wind above (dynamic pressure ${v.dyn_pressure_npa?.toFixed(2)??"no data"} nanopascals) using Shue et al. 1998, doi:10.1029/98JA01103.${T}`+(v.bow_shock_re!=null?` The bow shock stands off at ${v.bow_shock_re.toFixed(1)} Earth radii (Farris & Russell 1994).`:""))}else o.push("Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing. No boundary is drawn.");if(c.alerts.length>0){const T=c.alerts[0];o.push(`Most recent NOAA notice, ${It(T.issued)} UTC: ${T.headline||T.product}. ${c.alerts.length} notices in the last three days.`)}else o.push("No NOAA alerts, watches or warnings in the feed.")}const h=s.filter(f=>f.earthDirected&&f.arrival&&Date.parse(f.arrival.time)>e.getTime()).sort((f,g)=>Date.parse(f.arrival.time)-Date.parse(g.arrival.time));if(h.length>0){const f=h[0],g=(Date.parse(f.arrival.time)-e.getTime())/36e5;o.push(`A coronal mass ejection is on its way. NASA's DONKI catalogue analysed it leaving the Sun at ${Math.round(f.speedKms)} km/s on ${It(f.time215)} UTC, with a ${Math.round(f.halfAngle)}° half-angle cone pointed ${f.offAxisDeg<5?"almost directly at Earth":`${Math.round(f.offAxisDeg)}° off the Earth line`} [D · NASA]. Propagating it radially at that constant speed puts arrival near ${It(f.arrival.time)} UTC, about ${g<24?`${Math.round(g)} hours`:`${(g/24).toFixed(1)} days`} from now, give or take ${f.arrival.windowHours} hours [D · cone]. ${f.arrivalFromEnlil?"That arrival time is NOAA/NASA’s own Enlil run.":"Constant speed ignores drag — real ejections decelerate toward the ambient wind, so fast ones tend to arrive later than this and slow ones earlier. The window is an order-of-magnitude bound, not a fitted error."}${h.length>1?` ${h.length-1} more are also inbound.`:""}`)}else s.length>0&&o.push(`${s.length} coronal mass ejection${s.length>1?"s have":" has"} been analysed in the last few days, none of them Earth-directed with an arrival still ahead of us. Nothing is inbound.`);t.cmes&&t.cmes.count>0&&o.push(`${t.cmes.count} cone${t.cmes.count>1?"s are":" is"} drawn expanding from the Sun [D], warm where Earth lies inside the cone and cool where it does not. The apex direction, half-angle and speed are DONKI's analysis of coronagraph imagery; the radial propagation is ours.`);const d=Hl(e);if(o.push(`Scene: the Sun at centre, with all eight planets at their true positions for ${l}, computed locally with astronomy-engine [D]. The Sun is currently overhead at ${d0(d.lat,d.lon)}, and Earth's day/night terminator in the scene is drawn from that point [D]. The Moon is shown at its true direction from Earth.`),o.push(t.earthSurface==="imagery"?"Earth's surface is measured imagery [E]: NASA's Blue Marble Next Generation composite, acquired through 2004, with NASA's Black Marble 2016 night lights drawn as emission on the night side. Nothing about it is live — it is a dated composite, and it says so here rather than pretending to be today's clouds.":t.earthSurface==="loading"?"Earth's surface imagery (NASA's Blue Marble and Black Marble composites) is still loading; the vector base map is on the globe until it arrives.":"Earth's surface is the vector base map — NASA's raster composites (Blue Marble 2004, Black Marble 2016) did not load, so no imagery is implied."),!t.aurora)o.push("The aurora overlay is hidden.");else if(i?.data){const f=i.data,g=(e.getTime()-Date.parse(f.observation_time))/1e3,_=g>i.stale_after_s;o.push(`Aurora: NOAA's OVATION Prime model [D · NOAA] puts the peak probability of visible aurora at ${f.max_probability}% in this forecast, valid ${It(f.forecast_time)} UTC and computed from an observation at ${It(f.observation_time)} UTC (${rn(g)} old${_?", STALE":""}). It is drawn as the glowing oval over the poles, on a 1°-by-1° grid, teal through magenta with increasing probability — a legend for intensity, not the aurora's real colours. The oval encircles the magnetic pole, not the geographic one — which is why it sits off-centre.`)}else a.aurora?o.push("Aurora: loading. The OVATION forecast lands with the slow lane; no oval is drawn yet."):o.push("Aurora: the OVATION forecast is unavailable, so no oval is drawn.");if(t.shield){const f=t.fieldLines.far===!0;o.push(`The magnetic shield is drawn: ${t.fieldLines.lines} field lines traced through ${Nh(new Date)} [D], blue where they close between hemispheres and violet where they stay open toward the solar wind. The teal boundary is the Shue et al. 1998 magnetopause and the orange one the Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. The field lines rotate with the Earth because the main field is fixed to it, and they are clamped where they would cross the magnetopause — so the dayside visibly compresses as pressure rises. That clamp is geometry, not magnetohydrodynamics: a full treatment would also stretch the tail. The boundary surfaces stop at 100° from the sunward axis, inside the range Shue et al. fitted; the real magnetotail continues far beyond.`+(f?" From this far out the full line cage would read as noise, so it gives way to twelve signature lines and the boundary silhouette; the cage returns as the camera closes in.":""))}else o.push("The magnetic shield is hidden.");return o.push(`${wh(t.mode)}. Camera: ${er.find(f=>f.id===t.view)?.label??t.view} — ${er.find(f=>f.id===t.view)?.title??""}. ${t.reducedMotion?"Reduced motion is on — camera moves cut rather than glide.":"Motion is enabled."}`),t.wind!==!1&&c?.solar_wind?.speed!=null&&o.push(`The streaming particles are ambient [M] — far sparser and brighter than the real wind, which is invisible. What is real is their behaviour: they move at a rate set by the measured ${Math.round(c.solar_wind.speed)} km/s, their number follows the measured density, and they part around the same modelled magnetopause the HUD reports. When the boundary is pushed in, the flow closes in with it.`),(c?.kp?.estimated_kp??0)>4&&o.push("The field lines are shivering. That is ambient [M] — a legend for the elevated Kp above, not a motion the real field makes."),o.push("Colour and the starfield are ambient [M] — parameter-driven artwork, not measurements. There is no invented glow around the Sun: the region a painted corona would have occupied is the region the LASCO coronagraphs actually photograph, and that imagery is shown there instead when it is switched on."),o}const Fn=[{id:"report",label:"Now"},{id:"forecast",label:"Ahead"},{id:"sun",label:"Sun"},{id:"sources",label:"Sources"},{id:"checks",label:"Checks"}];function wt(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ni(n,t,e,i=!0,s){if(!e.trim())return"";const r=s?.(n),a=r===void 0?i:r;return`<details class="sect" data-sect="${wt(n)}"${a?" open":""}>
    <summary>${wt(t)}</summary>
    <div class="sect-body">${e}</div>
  </details>`}function iv(n,t,e){const i=Qh(n.now,t,e,n.aurora,n.cmes,n.spacecraft?.data??[],{snapshot:n.lanes.snapshot,aurora:n.lanes.aurora,cmes:n.lanes.cmes,nextAttempt:n.nextAttempt});return`
    <h2>Now</h2>
    <p class="state-sentence" aria-hidden="true">${G5(n)}</p>
    <p class="sr-only">${wt($5(n))}</p>
    <h3>Situation Report</h3>
    ${i.map(s=>`<p>${wt(s)}</p>`).join("")}`}function sv(n){if(n.kp.length===0)return'<p class="tile-meta">No Kp forecast loaded.</p>';const t=n.kp.slice(-40),e=Math.max(5,...t.map(c=>c.kp)),i=268,s=46,r=1,a=(i-r*(t.length-1))/t.length,o=t.map((c,u)=>{const h=c.kp/e*(s-10),d=c.kind==="predicted"?"kp-pred":"kp-obs",f=c.kp>=5?" kp-storm":"";return`<rect class="${d}${f}" x="${(u*(a+r)).toFixed(2)}" y="${(s-10-h).toFixed(2)}"
      width="${a.toFixed(2)}" height="${Math.max(.6,h).toFixed(2)}">
      <title>${It(c.time)} UTC — Kp ${c.kp.toFixed(2)} (${c.kind})</title></rect>`}).join(""),l=s-10-5/e*(s-10);return`<svg class="kp-chart" viewBox="0 0 ${i} ${s}" role="img"
      aria-label="Planetary K index, observed and predicted, storm threshold at 5">
      <line class="spark-rule" x1="0" y1="${l.toFixed(2)}" x2="${i}" y2="${l.toFixed(2)}" />
      ${o}</svg>
    <p class="tile-meta"><span class="key-obs">▮</span> observed
      <span class="key-pred">▮</span> predicted · rule at Kp 5, the storm threshold</p>`}function rv(n,t,e=[],i,s=null){if(!n)return`<h2>Ahead</h2><p>${t?'<span class="tile-state loading">Loading NOAA forecasts<span class="pulse">…</span></span>':s?`<span class="tile-state err"><span class="tile-state-word">unavailable</span> · ${wt(s)}</span>`:"no data — the forecasts could not be parsed."}</p>`;const r=n.threeDay?h0(n.threeDay):null,a=n.discussion?h0(n.discussion):null,o=n.odds[0];return`
    <h2>Ahead</h2>
    <p>Everything below is <span class="badge badge-d">D</span> NOAA's own forecast, not ours.
    Where the forecaster wrote prose, it is reproduced verbatim — a summary of a forecast is
    a different claim from the forecast.</p>

    <h3>Planetary K, observed and predicted</h3>
    ${sv(n)}

    ${o?`<h3>Flare probability, next 24 h</h3>
    <table class="prov"><tbody>
      <tr><td>C class</td><td class="num">${o.c??"—"}%</td>
          <td>common; minor or no effect at the ground</td></tr>
      <tr><td>M class</td><td class="num">${o.m??"—"}%</td>
          <td>radio blackouts on the sunlit side</td></tr>
      <tr><td>X class</td><td class="num">${o.x??"—"}%</td>
          <td>strong blackouts, possible radiation storm</td></tr>
    </tbody></table>
    <p class="tile-meta">Issued for ${wt(o.date)}.</p>`:""}

    ${n.flares.length?`<h3>Recent flares</h3>
    <table class="prov"><tbody>${n.flares.slice(0,6).map(l=>`
      <tr><td class="num">${wt(l.maxClass)}</td>
          <td class="num">${It(l.max??l.begin)}</td>
          <td>${l.region?`region ${l.region}`:""}
            <span class="tile-meta">${rn((Date.now()-Date.parse(l.begin))/1e3)} ago</span></td></tr>`).join("")}
    </tbody></table>`:""}

    ${n.f107.value!==null?`<h3>Solar radio flux</h3>
    <p>F10.7 at <b class="sentence-num">${n.f107.value}</b> solar flux units — the standard
    proxy for solar activity and the driver of upper-atmosphere density, so it sets how fast
    satellites in low orbit decay.</p>`:""}

    ${av(n.enlil,e,i)}

    ${ni("fc-3day","NOAA 3-day forecast",r?`
      <pre class="product">${wt(r.body)}</pre>
      ${r.issued?`<p class="tile-meta">Issued ${wt(r.issued)}.
        <a href="${lv.threeDay}" rel="noreferrer noopener" target="_blank">Source</a>.</p>`:""}
    `:"",!1,i)}

    ${ni("fc-discussion","Forecaster discussion",a?`
      <pre class="product">${wt(a.body)}</pre>
      ${a.issued?`<p class="tile-meta">Issued ${wt(a.issued)}.</p>`:""}
    `:"",!1,i)}`}function av(n,t=[],e){if(!n||n.ahead.length===0)return"";const i=n.peakSpeed,s=n.cloudArrival,r=n.past[n.past.length-1]?.speed??null,a=mn(c0(n.ahead,"speed"),{unit:"km/s",format:c=>c.toFixed(0),extremes:!0,direction:"future"}),o=mn(c0(n.ahead,"cloud"),{unit:"",format:c=>c.toFixed(2),rule:$s,direction:"future"}),l=c=>{const u=(Date.parse(c)-Date.now())/36e5;return u<1?"within the hour":`in about ${Math.round(u)} h`};return ni("fc-enlil","WSA-Enlil — the wind at Earth",`
    <p>A magnetohydrodynamic simulation of the inner heliosphere sampled at Earth
    <span class="badge badge-d">D</span>, run by NOAA from solar magnetograms and the
    analysed CME cones. It is the only forecast here that solves the physics rather than
    extrapolating, and unlike our own cone propagation it accounts for drag.</p>

    <p>Radial speed over the next
    ${Math.round((Date.parse(n.lastTime)-Date.now())/36e5)} hours${r!==null?`, from <b class="sentence-num">${r.toFixed(0)}</b> km/s now`:""}:</p>
    ${a}
    ${i?.speed!=null?`<p>Peaks at <b class="sentence-num">${i.speed.toFixed(0)}</b> km/s
      ${l(i.time)} — ${It(i.time)} UTC on
      ${new Date(i.time).toUTCString().slice(0,11)}.</p>`:""}

    <h4>Ejecta at Earth</h4>
    <p class="fine">The model carries a passive tracer that marks CME plasma. It is a mixing
    fraction, not a density and not a probability — it says where the ejection is in the
    simulation, and the simulation can be wrong about that.</p>
    ${o}
    ${s?`<p>The tracer crosses ${$s} at <b class="sentence-num">${It(s.time)}</b> UTC
         on ${new Date(s.time).toUTCString().slice(0,11)}, ${l(s.time)} —
         the model's arrival for the ejection now in flight.</p>
         ${ov(s.time,t)}`:`<p>The tracer stays below ${$s} throughout the run: no ejecta reach Earth
         in the model's window.${t.some(c=>c.earthDirected&&c.arrival&&Date.parse(c.arrival.time)>Date.now())?" Our cone propagation does put one here — the two disagree, and Enlil is the one that solves the physics.":""}</p>`}
    <p class="fine">Model output starts ${new Date(n.firstTime).toUTCString().slice(0,11)}
    at ${It(n.firstTime)} UTC — ${n.past.length}
    samples already elapsed and ${n.ahead.length} still ahead. The elapsed half is checked
    against the measured wind in the Checks panel.</p>`,!0,e)}function ov(n,t){const i=t.filter(a=>a.earthDirected&&a.arrival&&Date.parse(a.arrival.time)>Date.now()).sort((a,o)=>Date.parse(a.arrival.time)-Date.parse(o.arrival.time))[0];if(!i?.arrival)return`<p class="fine">No Earth-directed cone of ours has an arrival still ahead, so
      there is nothing to compare this against.</p>`;if(i.arrivalFromEnlil)return`<p class="fine">The arrival in the CME panel is NOAA and NASA's own Enlil
      figure, so it is the same model and not an independent comparison.</p>`;const s=(Date.parse(n)-Date.parse(i.arrival.time))/36e5,r=s>0;return`<p>Our cone puts it at <b class="sentence-num">${It(i.arrival.time)}</b> UTC,
    <b class="sentence-num">${Math.abs(s).toFixed(0)} h</b>
    ${r?"earlier":"later"} than Enlil.
    ${r?"That is the expected direction: the cone carries the ejection at the constant speed DONKI measured near the Sun, and real ejections decelerate toward the ambient wind. Enlil is the better number; ours is the geometry.":"That is the wrong direction for the usual reason — constant-speed propagation should run early against a model that includes drag — so either the cone speed is below the ambient wind, in which case the ejection accelerates, or the two are tracking different structures."}</p>`}const lv={threeDay:"https://services.swpc.noaa.gov/text/3-day-forecast.txt"};function cv(n,t){const e=La(t);return`<tr>
    <td>${wt(n)}</td>
    <td><span class="badge badge-${e.toLowerCase()}" title="${wt(gc(t))}">${e}</span></td>
    <td><a href="${t.source_url}" rel="noreferrer noopener" target="_blank">${wt(t.source)}</a>${t.model?`<br><span class="tile-meta">${wt(t.model.name)}</span>`:""}</td>
    <td class="num">${t.data_time?It(t.data_time):we}</td>
    <td class="num">${t.error?`<span class="err">${wt(t.error)}</span>`:t.latency_s===null?we:`${t.latency_s}s`}</td>
  </tr>`}function uv(n,t,e,i={surface:"vector",lights:!1,coast:!1}){const s=n.now;if(!s)return"<h2>Provenance</h2><p>No envelope loaded yet.</p>";const r=(u,h,d,f,g,_)=>`<tr>
      <td>${u}</td>
      <td><span class="badge badge-e">E</span></td>
      <td><a href="${d}" rel="noreferrer noopener" target="_blank">${h}</a>
        <br><span class="tile-meta">${g}</span></td>
      <td class="num">${f}</td>
      <td class="num">${_?"on screen":"—"}</td>
    </tr>`,a=`
      ${r("earth surface","NASA Blue Marble Next Generation","https://earthobservatory.nasa.gov/features/BlueMarble/blue_marble.php","2004-12","a composite, not live; public domain. Lazy-loaded after first paint.",i.surface==="imagery")}
      ${r("earth night lights","NASA Black Marble 2016","https://earthobservatory.nasa.gov/features/night-lights/page/2","2016","Suomi NPP VIIRS day/night band composite, drawn as emission on the night side.",i.lights)}`,o=n.aurora,l=o?`<tr>
    <td>aurora</td>
    <td><span class="badge badge-d">D</span></td>
    <td><a href="${o.source_url}" rel="noreferrer noopener" target="_blank">${wt(o.source)}</a>
      <br><span class="tile-meta">${wt(o.model?.name??"")}</span></td>
    <td class="num">${o.data?It(o.data.observation_time):we}</td>
    <td class="num">${o.data?`${o.latency_s}s`:we}</td>
  </tr>`:"",c=hv(n.spacecraft?.data??[],n.now?.data.solar_wind?.speed??null);return`
    <h2>Provenance</h2>
    <p>Every element on screen, its evidence tier, where it came from and how old it is.</p>
    ${t?td(t):""}
    ${ni("prov-table","Every element",`
      <table class="prov">
        <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Time</th><th>Lat.</th></tr></thead>
        <tbody>${Object.entries(s.parts).map(([u,h])=>cv(u,h)).join("")}${l}</tbody>
      </table>`,!0,e)}
    ${ni("prov-earth","The Earth base — imagery, not a feed",`
      <table class="prov">
        <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Acquired</th><th>On screen</th></tr></thead>
        <tbody>${a}
          <tr><td>coastlines</td><td><span class="badge badge-m">M</span></td>
            <td>Natural Earth 110m land (vector), optional overlay</td>
            <td class="num">static</td><td class="num">${i.coast?"on":"off"}</td></tr>
        </tbody>
      </table>
      <p class="tile-meta">Until the rasters arrive the globe carries the vector base map
      — cartography [M], not measurement — and the Situation Report says which is showing.</p>`,!1,e)}
    ${ni("prov-monitors","The monitors",c,!1,e)}
    ${ni("prov-tiers","What the tiers mean",`
      <p><span class="badge badge-e">E</span> Measured — read from an instrument, shown with its
      timestamp and latency.<br>
      <span class="badge badge-d">D</span> Modelled — computed from measured inputs by a named,
      cited model.<br>
      <span class="badge badge-m">M</span> Ambient — artwork. Parameter-driven, sometimes by real
      values, but never itself a measurement.</p>`,!1,e)}
    ${ni("prov-models","Models cited",`
      <p>Shue et al. 1998 (doi:10.1029/98JA01103) — magnetopause.<br>
      Farris &amp; Russell 1994 — bow shock.<br>
      ${Nh(new Date)} — the geomagnetic field and its lines.<br>
      OVATION Prime (NOAA SWPC) — aurora probability.<br>
      NOAA Geospace (Univ. Michigan BATS-R-US/RCM) — Dst.<br>
      WSA-Enlil (NOAA SWPC) — the heliospheric wind forecast.<br>
      astronomy-engine (VSOP87/Meeus) — every position, the sub-solar point, and the
      solar rotation axis the imagery is projected about.</p>`,!1,e)}`}const f0=6371.2;function hv(n,t){if(n.length===0)return"";const e=n.find(o=>o.active)??null,i=n.map(o=>`<tr${o.active?' class="l1-row-active"':""}>
      <td>${wt(o.source)}${o.active?' <span class="tag-live">live</span>':""}</td>
      <td class="num">${o.distanceRe.toFixed(0)}</td>
      <td class="num">${o.offAxisRe.toFixed(1)}</td>
      <td class="num">${o.offAxisDeg.toFixed(1)}°</td>
    </tr>`).join(""),s=n.map(o=>{const l=z5[o.source];return l?`<br><b>${wt(o.source)}</b> — ${wt(l)}`:""}).join("");let r="";if(e&&t&&t>0){const o=e.distanceRe*f0/t/60;r=` At the ${t.toFixed(0)} km/s now measured, the wind it is
      sampling reaches Earth about ${o.toFixed(0)} minutes later.`}const a=e?`<p>${wt(e.source)} is
       ${(e.distanceRe*f0/1e6).toFixed(2)} million km upstream and
       <b>${e.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line</b> —
       ${e.offAxisDeg.toFixed(1)}° away from the direction the wind actually has to
       travel to reach us.${r}</p>
       <p class="fine">The solar wind is structured on scales smaller than that offset, so
       the monitor does not always sample the plasma that arrives. It is the best warning
       there is, and it is not the same thing as a measurement taken here.</p>`:"<p>No spacecraft is currently flagged operational in the ephemeris feed.</p>";return`
    ${C5(n)}
    <p class="fine caption">Looking sunward along the Sun–Earth line. Nothing here is
    compressed — Earth, the Moon’s orbit and the spacecraft offsets are one scale.</p>
    <table class="prov l1-table">
      <thead><tr><th>Craft</th><th>Rₑ out</th><th>Rₑ off</th><th>Angle</th></tr></thead>
      <tbody>${i}</tbody>
    </table>
    ${a}
    <p class="fine">${s.replace(/^<br>/,"")}</p>`}function td(n){const t=n.rows.length-n.inconclusive;return`<p><span class="summary-pill ${n.passed===t?"ok":"bad"}">${n.passed} / ${t} checks pass</span>${n.inconclusive>0?` <span class="tile-meta">${n.inconclusive} could not be settled on today's data</span>`:""}</p>`}function dv(n,t){return t&&!n?"<h2>Checks</h2><p>Comparing our numbers with NOAA’s own, by an independent path…</p>":n?`
    <h2>Checks</h2>
    <p>Our values against NOAA’s own published figures, fetched by a separate path at the
    same timestamp. Drift is a bug, not a rounding preference.</p>
    ${td(n)}
    <table class="prov">
      <tbody>
        ${n.rows.map(e=>`
          <tr class="check-row">
            <td colspan="2"><strong>${wt(e.name)}</strong></td>
            <td class="${e.inconclusive?"verdict-none":e.ok?"verdict-ok":"verdict-bad"}">${e.inconclusive?"no signal":e.ok?"pass":"DRIFT"}</td>
          </tr>
          <tr class="check-row">
            <td class="num">${wt(e.ours)}</td>
            <td class="tile-meta">vs</td>
            <td class="num">${wt(e.theirs)}</td>
          </tr>
          <tr><td class="check-note" colspan="3">${wt(e.note)}</td></tr>`).join("")}
      </tbody>
    </table>
    <p class="tile-meta">Last run ${It(n.ranAt)} UTC.</p>`:"<h2>Checks</h2><p>Not run yet.</p>"}function fv(n,t){return n===null?"unknown size":`~${(n*t/1048576).toFixed(0)} MB`}function p0(n,t,e,i,s){if(t)return{state:"loading",text:`<p class="tile-state loading">Loading ${n} frames<span class="pulse">…</span></p>`};if(i){const r=s?` · retrying at ${It(s)} UTC`:"";return{state:"error",text:`<p class="tile-state err"><span class="tile-state-word">unavailable</span> · ${wt(i)}${r}</p>`}}return e?{state:"fresh",text:""}:{state:"no-data",text:'<p class="tile-state">no data — the frame list carried no usable frames.</p>'}}function pv(n,t,e){if(!n)return t?'<h3>Solar cycle</h3><p class="tile-state loading">Loading the sunspot record<span class="pulse">…</span></p>':e?`<h3>Solar cycle</h3><p class="tile-state err"><span class="tile-state-word">unavailable</span> · ${wt(e)}</p>`:'<h3>Solar cycle</h3><p class="tile-state">no data — the record could not be parsed.</p>';const i=n.latest,s=n.ssn.time.length/12;return`
    <h3>Solar cycle</h3>
    <p>Monthly sunspot number since ${wt(n.ssn.time[0].slice(0,4))} —
    ${Math.round(s)} years, the longest continuous record in science.</p>
    ${mn(n.ssn,{extremes:!0,format:r=>r.toFixed(0),unit:"spots",label:"monthly sunspot number, full record"})}
    <p>The last three cycles:</p>
    ${mn(Z5(n.ssn,396),{extremes:!0,format:r=>r.toFixed(0),unit:"spots",label:"monthly sunspot number, last 33 years"})}
    <p class="tile-meta">
      ${i?.ssn!==null&&i!==null?`Now <b class="sentence-num">${i.ssn.toFixed(0)}</b>
        for ${wt(i.month)}`:"Latest month unavailable"}${n.allTimeMax?` · record <b class="sentence-num">${n.allTimeMax.ssn.toFixed(0)}</b>
        in ${wt(n.allTimeMax.month)}`:""}.
      <span class="badge badge-e">E</span> NOAA SWPC solar-cycle indices.</p>`}function mv(n,t,e=null,i=!1,s=null){const r=(g,_,m,p)=>`<button class="ctl" ${p}="${g}" aria-pressed="${m}">${wt(_)}</button>`,a=t.filter(g=>g.kind==="disk"),o=t.filter(g=>g.kind==="coronagraph"),l=`
    <div class="sun-set">
      <span class="sun-set-label">Disk · sphere and card</span>
      <div class="sun-picker">${a.map(g=>r(g.id,g.label,g.id===n.loopId,"data-loop")).join("")}</div>
    </div>
    <div class="sun-set">
      <span class="sun-set-label">Corona · plane</span>
      <div class="sun-picker">${r("","Off",n.coronaId===null,"data-corona")}${o.map(g=>r(g.id,g.label,g.id===n.coronaId,"data-corona")).join("")}</div>
    </div>`,c=p0("SUVI",n.loading,!!n.loop,n.error,n.retryAt),u=n.loop?gv(n):c.text,h=n.coronaId!==null,d=h?p0("coronagraph",n.coronaLoading,!!n.corona,n.coronaError,n.coronaRetryAt):null,f=h?d.state==="fresh"?vv(n):d.text:"";return`
    <h2>The Sun</h2>
    ${l}
    <section class="sun-sec" data-state="${h?d.state:c.state}" aria-label="Disk imagery">
      ${u}
    </section>
    <section class="sun-sec" data-state="${d?d.state:"fresh"}" aria-label="Coronagraph">
      ${f}
    </section>
    ${pv(e,i,s)}`}function gv(n){const t=n.loop,e=t.frames[n.frameIndex]??t.frames[t.frames.length-1],i=l5(t.instrument,e.satellite),s=Math.round((Date.now()-Date.parse(e.time))/6e4),r=t.frames.length,a=n.preloading?`<span class="tile-meta">Loading ${n.preloaded}/${r} frames…</span>`:n.preloaded>=r?`<button class="ctl" id="sun-play" aria-pressed="${n.playing}">${n.playing?"Pause":"Play"}</button>
         <input type="range" id="sun-scrub" min="0" max="${r-1}" value="${n.frameIndex}" aria-label="Frame" />
         <span class="tile-meta">${n.frameIndex+1}/${r}</span>`:`<button class="ctl" id="sun-play">Load loop · ${r} frames, ${fv(t.frameBytes,r)}</button>`;return`
    <div class="sun-frame">
      <!-- The image element is not written here. It is owned by the image
           cache and moved into this slot after render, so that rebuilding the
           panel does not throw away a decode that costs 380 ms. -->
      <div class="sun-slot" id="sun-slot" data-frame="${wt(e.url)}"
           data-alt="${wt(i)} image of the Sun at ${It(e.time)} UTC"></div>
      <div class="sun-stamp"><span>${It(e.time)} UTC</span><span>${s} min ago</span></div>
    </div>
    <div class="sun-transport">${a}</div>
    <p><span class="badge badge-e">E</span> ${wt(i)}. ${wt(t.describes)}</p>
    ${_v(n)}
    <p class="tile-meta">${t.skippedDropouts>0?`The newest ${t.skippedDropouts} frame${t.skippedDropouts>1?"s were":" was"} a
         data dropout — a valid but near-empty image — so this is the newest usable one. `:"Showing the newest frame. "}Upstream published ${t.totalAvailable} frames
    over ${t.spanHours.toFixed(0)} hours; playback samples ${r} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${t.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>`}function _v(n){const t=n.diskPlane;return!n.loop||n.loop.kind!=="disk"||!t?"":`<p class="tile-meta">The disk is wrapped onto the sphere; the light
    <i>outside</i> the limb has no sphere to land on, so it is drawn flat on the
    image plane instead — a card reaching <b>${t.halfWidthRsun.toFixed(1)} solar radii</b>,
    measured from this frame's own limb. Prominences and the low corona are on that card.
    Nothing is extrapolated across the two: inside the limb belongs to the sphere,
    outside it to the plane.</p>`}function vv(n){const t=n.corona;if(!t)return"";const e=t.frames[t.newestGood],i=n.coronaPlane,s=Math.round((Date.now()-Date.parse(e.time))/6e4),r=i?`Drawn on a plane through the Sun, perpendicular to the line it was photographed
       along, reaching <b>${i.halfWidthRsun.toFixed(1)} solar radii</b> — measured from this
       frame's own limb circle (±${(i.residualPx??0).toFixed(1)} px), which agrees with the
       published field of view for the instrument. The occulted centre, inside
       ${i.innerRsun.toFixed(1)} R☉, is left out, so the Sun and the disk card show through
       it. From anywhere else the plane is edge-on, because that is what a photograph taken
       from Earth looks like from the side — the <b>Corona</b> view looks down the line
       LASCO photographs along.`:`This frame is not placed in the scene: the drawn limb circle it is measured against
       could not be found, and a guessed field of view would put the corona somewhere the
       instrument never looked.`;return`
    <div class="sun-frame sun-frame-sm">
      <div class="sun-slot" id="corona-slot" data-frame="${wt(e.url)}"
           data-alt="${wt(t.instrument)} coronagraph image at ${It(e.time)} UTC"></div>
      <div class="sun-stamp"><span>${It(e.time)} UTC</span><span>${s} min ago</span></div>
    </div>
    <p><span class="badge badge-e">E</span> ${wt(t.instrument)}.
      ${wt(t.describes)}</p>
    <p class="tile-meta">${r}</p>`}function xv(n,t){if(n.id==="kp"&&t.kpSeries)return mn(t.kpSeries,{band:[0,4],unit:"Kp",format:i=>i.toFixed(2),label:"Kp history, quiet band shaded"});if(n.id==="dst"&&t.dstSeries)return mn(t.dstSeries,{unit:"nT",format:i=>i.toFixed(0),rule:0,band:[-30,0],extremes:!0});if(n.id==="geosync"&&t.geosyncSeries)return mn(t.geosyncSeries,{unit:"nT",format:i=>i.toFixed(0),label:"total field at geostationary orbit"});if(n.id==="protons"&&t.protonSeries)return mn(t.protonSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(2),label:"proton flux above 10 MeV, logarithmic"});if(n.id==="electrons"&&t.electronSeries)return mn(t.electronSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(0),label:"electron flux above 2 MeV, logarithmic"});if(n.id==="xray"&&t.xraySeries)return mn(t.xraySeries,{log:!0,unit:"W/m²",format:i=>i.toExponential(1),label:"X-ray flux history, log scale"});if(!n.series||!t.series)return"";const e=n.series;return mn({time:t.series.data.time,value:t.series.data[e]},{rule:e==="bz_gsm"?0:null,unit:n.unit,format:i=>e==="speed"?i.toFixed(0):i.toFixed(1),label:`${n.id} history`})}const Wl="body:";function Sv(n,t){const e=Zh(n,t),i=(s,r)=>`<tr><td>${s}</td><td class="num">${r}</td></tr>`;return`
    <h2>${wt(e.name)}</h2>
    <table class="prov"><tbody>
      ${e.auFromSun!==null?i("From the Sun",xa(e.auFromSun)):""}
      ${e.auFromEarth!==null?i("From Earth",xa(e.auFromEarth)):""}
      ${e.lightSeconds!==null?i("Light travel time",Jh(e.lightSeconds)):""}
      ${i("Radius",`${e.radiusKm.toLocaleString("en-US")} km`)}
      ${e.arcsecFromEarth!==null?i("Apparent diameter",`${e.arcsecFromEarth.toFixed(1)}″`):""}
    </tbody></table>
    <p class="tile-meta"><span class="badge badge-d">D</span> Positions and distances from
    astronomy-engine at ${It(t.toISOString())} UTC — computed, not tabulated, so they
    move with the scene.</p>
    ${e.note?`<p>${wt(e.note)}</p>`:""}
    <p class="fine">Rendered size and orbital distance are both compressed at Globe scale;
    the True scale toggle removes the compression and the label says which is in force.</p>`}function Mv(n,t,e){if(n.startsWith(Wl))return Sv(n.slice(Wl.length),e);const i=_a.find(u=>u.id===n);if(!i)return"<p>Unknown instrument.</p>";const s=t.now,r=s?.data??null,a=s?.parts?.[i.part],o=hs(a,e),l=La(a),c=i.value(r);return`
    <h2>${wt(i.label)}</h2>
    <p class="tile-value" style="font-size:1.9rem">
      <span>${wt(c)}</span><span class="tile-unit">${wt(i.unit)}</span>
    </p>
    <p class="tile-meta"><span class="badge badge-${l.toLowerCase()}">${l}</span>
      ${wt(o.label)}</p>
    ${xv(i,t)}
    <h3>What it means</h3>
    <p>${wt(i.meaning)}</p>
    <h3>Provenance</h3>
    ${a?`<table class="prov"><tbody>
      <tr><td>Tier</td><td>${wt(gc(a))}</td></tr>
      <tr><td>Source</td><td><a href="${a.source_url}" rel="noreferrer noopener" target="_blank">${wt(a.source)}</a></td></tr>
      <tr><td>Data time</td><td class="num">${a.data_time?`${It(a.data_time)} UTC`:we}</td></tr>
      <tr><td>Latency</td><td class="num">${a.latency_s===null?we:`${a.latency_s}s`}</td></tr>
      <tr><td>Stale after</td><td class="num">${Math.round(a.stale_after_s/60)} min</td></tr>
      ${a.mirrored?`<tr><td>Transport</td><td class="warn">Earth Star mirror (stage B) —
        NOAA was unreachable; these are its bytes and its timestamps, copied</td></tr>`:""}
      ${a.error?`<tr><td>Error</td><td class="err">${wt(a.error)}</td></tr>`:""}
    </tbody></table>`:"<p>No provenance recorded.</p>"}`}const yv={E:"measured",D:"modelled",M:"ambient"};function bv(n,t,e,i,s){const r=La(i),a=hs(i,s),o=i?.data_time?`${It(i.data_time)} UTC`:"no time",l=i?.data_time?rn((s.getTime()-Date.parse(i.data_time))/1e3):"",c=a.state==="stale"?" — **stale**":"";return`| ${n} | ${t}${e?` ${e}`:""} | ${yv[r]??r} | ${o}${l?`, ${l} old`:""}${c} |`}function Ev(n){const{state:t,narration:e,checks:i,forecast:s}=n,r=n.now??new Date,a=t.now,o=`${r.toISOString().slice(0,16).replace("T"," ")} UTC`,l=[];if(l.push(`# Space weather — ${o}`),l.push(""),l.push("_From The Viewer (Earth Star). Every value below carries the time it was observed and how it was arrived at. Values age; this briefing does not._"),l.push(""),!a)return l.push("No data had loaded when this briefing was taken."),l.join(`
`);l.push("## Now"),l.push(""),l.push("| Quantity | Value | Evidence | Observed |"),l.push("|---|---|---|---|");for(const h of _a)l.push(bv(h.label,h.value(a.data),h.unit,a.parts[h.part],r));if(l.push(""),e.length>0){l.push("## Situation"),l.push("");for(const h of e)l.push(`${h}
`)}const c=s?.enlil;(c?.peakSpeed||c?.cloudArrival)&&(l.push("## Ahead"),l.push(""),c.peakSpeed?.speed!=null&&l.push(`- WSA-Enlil peaks at **${c.peakSpeed.speed.toFixed(0)} km/s** at ${It(c.peakSpeed.time)} UTC on ${new Date(c.peakSpeed.time).toUTCString().slice(0,11)} (modelled).`),l.push(c.cloudArrival?`- Its CME tracer crosses ${$s} at **${It(c.cloudArrival.time)} UTC** on ${new Date(c.cloudArrival.time).toUTCString().slice(0,11)} — the model's arrival for the ejection in flight.`:"- No ejecta reach Earth inside the model’s window."),l.push(""));const u=a.data.alerts??[];if(u.length>0){l.push("## NOAA alerts"),l.push("");for(const h of u.slice(0,6))l.push(`- ${It(h.issued)} UTC — ${h.headline||h.product}`);l.push("")}if(i){const h=i.rows.length-i.inconclusive;l.push("## Checks"),l.push(""),l.push(`${i.passed} of ${h} cross-checks pass${i.inconclusive>0?`; ${i.inconclusive} could not be settled on today's data`:""}, last run ${It(i.ranAt)} UTC.`),l.push("");for(const d of i.rows){const f=d.inconclusive?"no signal":d.ok?"pass":"DRIFT";l.push(`- **${d.name}** — ${f}: ${d.ours} vs ${d.theirs}`)}l.push("")}l.push("## Sources"),l.push("");for(const[h,d]of Object.entries(a.parts))l.push(`- \`${h}\` — ${d.source}${d.model?` (${d.model.name})`:""}: ${d.source_url}`);return l.push(""),l.push("---"),l.push(""),l.push("Evidence tiers: **measured** read from an instrument · **modelled** computed from measured inputs by a named model · **ambient** artwork, never a measurement."),l.push(""),n.origin&&l.push(`Taken ${o} from ${n.origin}`),l.join(`
`)}function wv(n=new Date){return`space-weather-${n.toISOString().slice(0,16).replace(/:/g,"").replace("T","-")}.md`}const m0={alert:0,warning:1,watch:2,cancel:3,summary:4,other:5},g0={alert:"now",warning:"expected",watch:"possible",cancel:"cancelled",summary:"ended",other:"notice"};class Tv{constructor(t){this.cb=t,this.instrumentsEl=document.getElementById("instruments"),this.tickerEl=document.getElementById("ticker"),typeof ResizeObserver<"u"&&new ResizeObserver(()=>this.fitTicker()).observe(this.tickerEl),this.tabsEl=document.getElementById("tabs"),this.bodyEl=document.getElementById("margin-body"),this.statusEl=document.getElementById("status"),this.perfEl=document.getElementById("perf"),this.headlineEl=document.getElementById("headline-alert"),this.copyEl=document.getElementById("brief-copy"),this.downloadEl=document.getElementById("brief-download"),this.copyEl.addEventListener("click",()=>{this.copyBriefing()}),this.loadSectionState(),this.bodyEl.addEventListener("toggle",this.onSectionToggle,!0),this.downloadEl.addEventListener("click",()=>this.downloadBriefing()),this.clockEl=document.getElementById("clock"),this.buildTiles(),this.buildTabs(),this.bindMargin()}cb;instrumentsEl;tickerEl;tickerExpanded=!1;fittingTicker=!1;tabsEl;bodyEl;statusEl;perfEl;headlineEl;copyEl;downloadEl;perfKey="";sparkKeys=new Map;sectionState=new Map;images=new a5;clockEl;tiles=new Map;tab="report";detailId=null;checksRequested=!1;state=null;checks=null;checksRunning=!1;forecast=null;forecastLoading=!1;forecastRequested=!1;forecastError=null;cycle=null;cycleLoading=!1;cycleRequested=!1;cycleError=null;sun={loop:null,loopId:Es[0].id,frameIndex:0,playing:!1,loading:!0,preloaded:0,preloading:!1,error:null,retryAt:null,corona:null,coronaId:null,coronaLoading:!1,coronaError:null,coronaRetryAt:null,diskPlane:null,coronaPlane:null};narration={mode:"globe",view:"deck",reducedMotion:!1,shield:!0,fieldLines:{lines:0,points:0},aurora:!0,cmes:{shown:!0,count:0}};setNarration(t){this.narration=t}setChecks(t,e){this.checks=t,this.checksRunning=e,this.renderMargin()}setCycle(t,e,i=null){this.cycle=t,this.cycleLoading=e,this.cycleError=i,this.renderMargin()}setForecast(t,e,i=null){this.forecast=t,this.forecastLoading=e,this.forecastError=i,this.renderMargin()}setSunLoop(t,e,i=null){this.sun.loop=t,this.sun.loading=e,this.sun.error=e?null:i,this.sun.frameIndex=t?t.newestGood:0,this.sun.playing=!1,this.sun.preloaded=0,this.sun.preloading=!1,this.renderMargin()}setSunPreload(t,e){this.sun.preloaded=t,this.sun.preloading=e,this.tab==="sun"&&this.renderMargin()}setSunFrame(t){this.sun.frameIndex=t,this.tab==="sun"&&this.updateSunFrame()}setSunPlaying(t){this.sun.playing=t,this.tab==="sun"&&this.renderMargin()}setPlaneCalibration(t,e){const i=t==="disk"?"diskPlane":"coronaPlane",s=this.sun[i],r=s===e||!!s&&!!e&&s.rsun===e.rsun&&s.innerRsun===e.innerRsun&&s.centre.u===e.centre.u&&s.centre.v===e.centre.v;this.sun[i]=e,!r&&this.tab==="sun"&&this.renderMargin()}setCoronaLoop(t,e,i=null){this.sun.corona=t,this.sun.coronaLoading=e,this.sun.coronaError=e?null:i,this.renderMargin()}setSunRetry(t){this.sun.retryAt=t,this.sun.error&&this.tab==="sun"&&this.renderMargin()}setCoronaRetry(t){this.sun.coronaRetryAt=t,this.sun.coronaError&&this.tab==="sun"&&this.renderMargin()}get sunState(){return this.sun}get activeTab(){return this.tab}buildTiles(){this.instrumentsEl.innerHTML="";for(const i of _a){const s=document.createElement("button");s.className="tile",s.id=`tile-${i.id}`,s.type="button",s.innerHTML=`
        <span class="tile-label">${wt(i.label)}</span>
        <span class="tile-value"><span data-v>—</span><span class="tile-unit">${wt(i.unit)}</span></span>
        <span class="tile-spark" data-spark aria-hidden="true"></span>
        <span class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></span>`,s.addEventListener("click",()=>this.openDetail(i.id)),this.tiles.set(i.id,s),this.instrumentsEl.appendChild(s)}const t=document.createElement("div");t.className="tile",t.id="tile-scales",t.innerHTML=`
      <span class="tile-label">NOAA scales</span>
      <span class="scales-row" data-scales></span>
      <span class="tile-spark" aria-hidden="true"></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,this.tiles.set("scales",t),this.instrumentsEl.appendChild(t);const e=document.createElement("button");e.className="tile",e.id="tile-aurora",e.type="button",e.innerHTML=`
      <span class="tile-label">Aurora peak</span>
      <span class="tile-value"><span data-v>—</span><span class="tile-unit">%</span></span>
      <span class="tile-spark" aria-hidden="true"></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,e.addEventListener("click",()=>this.selectTab("report")),this.tiles.set("aurora",e),this.instrumentsEl.appendChild(e)}buildTabs(){this.tabsEl.innerHTML=Fn.map(t=>`<button class="tab" role="tab" id="tab-${t.id}" data-tab="${t.id}"
        aria-controls="margin-body" aria-selected="${t.id===this.tab}"
        tabindex="${t.id===this.tab?"0":"-1"}">${t.label}</button>`).join(""),this.tabsEl.addEventListener("click",t=>{const e=t.target.closest("[data-tab]");e&&this.selectTab(e.dataset.tab)}),this.tabsEl.addEventListener("keydown",t=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(t.key))return;const i=Fn.findIndex(a=>a.id===this.tab),s=i<0?0:i,r=t.key==="Home"?0:t.key==="End"?Fn.length-1:t.key==="ArrowLeft"?(s-1+Fn.length)%Fn.length:(s+1)%Fn.length;t.preventDefault(),this.selectTab(Fn[r].id),this.tabsEl.querySelector(`#tab-${Fn[r].id}`)?.focus()})}bindMargin(){this.bodyEl.addEventListener("click",t=>{const e=t.target,i=e.closest("[data-loop]");if(i){this.cb.onSelectLoop(i.dataset.loop);return}const s=e.closest("[data-corona]");if(s){this.cb.onSelectCorona?.(s.dataset.corona||null);return}if(e.closest("#sun-play")){this.cb.onToggleSunPlay();return}}),this.bodyEl.addEventListener("input",t=>{const e=t.target;e.id==="sun-scrub"&&this.cb.onScrubSun(Number(e.value))})}selectTab(t){this.tab=t,t!=="detail"&&(this.detailId=null);for(const i of this.tabsEl.querySelectorAll("[data-tab]")){const s=i.getAttribute("data-tab")===t;i.setAttribute("aria-selected",String(s)),i.setAttribute("tabindex",s?"0":"-1")}Fn.some(i=>i.id===t)?(this.bodyEl.setAttribute("aria-labelledby",`tab-${t}`),this.bodyEl.removeAttribute("aria-label")):(this.bodyEl.removeAttribute("aria-labelledby"),this.bodyEl.setAttribute("aria-label","Detail"));for(const[,i]of this.tiles)i.removeAttribute("aria-current");t==="checks"&&!this.checksRequested&&(this.checksRequested=!0,this.cb.onRunChecks()),t==="sun"&&!this.cycleRequested&&(this.cycleRequested=!0,this.cb.onLoadCycle()),t==="forecast"&&!this.forecastRequested&&(this.forecastRequested=!0,this.cb.onLoadForecast()),this.renderMargin()}briefing(t=new Date){return this.state?Ev({state:this.state,narration:Qh(this.state.now,this.narration,t,this.state.aurora,this.state.cmes,this.state.spacecraft?.data??[],{snapshot:this.state.lanes.snapshot,aurora:this.state.lanes.aurora,cmes:this.state.lanes.cmes,nextAttempt:this.state.nextAttempt}),checks:this.checks,forecast:this.forecast,now:t,origin:`${location.origin}${location.pathname}`}):""}async copyBriefing(){const t=this.briefing();if(t)try{await navigator.clipboard.writeText(t),this.flash(this.copyEl,"Copied")}catch{this.flash(this.copyEl,"Blocked — use .md")}}downloadBriefing(){const t=this.briefing();if(!t)return;const e=URL.createObjectURL(new Blob([t],{type:"text/markdown"})),i=document.createElement("a");i.href=e,i.download=wv(),i.click(),URL.revokeObjectURL(e),this.flash(this.downloadEl,"Saved")}flash(t,e){const i=t.dataset.label??t.textContent??"";t.dataset.label=i,t.textContent=e,window.setTimeout(()=>{t.textContent=t.dataset.label??i},1600)}showBody(t){this.openDetail(Wl+t)}openDetail(t){this.tab="detail",this.detailId=t;for(const e of this.tabsEl.querySelectorAll("[data-tab]"))e.setAttribute("aria-selected","false");for(const[e,i]of this.tiles)i.tagName==="BUTTON"&&i.setAttribute("aria-current",String(e===t));this.renderMargin(),this.bodyEl.focus()}render(t){this.state=t;const e=new Date,i=t.now,s=i?.data??null;this.clockEl.textContent=`${e.toISOString().slice(0,10)} ${It(e.toISOString())} UTC`;const r={loading:t.lanes.snapshot,error:null,nextAttempt:null};for(const x of _a){const v=this.tiles.get(x.id),T=i?.parts?.[x.part];let E=Ao({lane:r,received:!!t.now,meta:T,now:e});const C=E.state==="fresh"||E.state==="stale"?x.value(s):null;(E.state==="fresh"||E.state==="stale")&&C===we&&(E={state:"no-data",label:`no data · ${E.label}`,short:we,ageS:E.ageS}),v.setAttribute("data-state",E.state),v.querySelector("[data-v]").textContent=C!==null?C:E.state==="loading"?"…":E.state==="error"?"unavailable":we;const L=v.querySelector("[data-badge]"),w=La(T);L.textContent=w,L.className=`badge badge-${w.toLowerCase()}`;const M=E.state==="fresh"?x.detail?.(s)??"":"";v.querySelector("[data-time]").textContent=M||E.short;const D=C!==null?`${C} ${x.unit}`:E.state==="loading"?"loading":E.state==="error"?`unavailable (${E.label})`:"no data";v.setAttribute("title",`${x.label}: ${D} · ${E.label} · ${gc(T)}`),v.setAttribute("aria-label",E.state==="fresh"||E.state==="stale"?`${x.label}: ${C} ${x.unit}, ${E.label}. Open detail.`:`${x.label}: ${E.state==="error"?`unavailable, ${E.label}`:E.state==="loading"?"loading":"no data"}. Open detail.`);const O=v.querySelector("[data-spark]"),B=E.state==="fresh"||E.state==="stale"?T5(x.id,t):null,G=B?`${B.series.time[B.series.time.length-1]??""}:${B.series.value.length}`:"";G!==this.sparkKeys.get(x.id)&&(this.sparkKeys.set(x.id,G),O.innerHTML=B?Ri(B.series,{...B.opts,width:108,height:17,label:`${x.label} trend`}):"")}const a=this.tiles.get("scales"),o=a.querySelector("[data-scales]"),l=s?.scales,c=Ao({lane:r,received:!!t.now,meta:i?.parts?.scales,now:e});o.innerHTML=l?["R","S","G"].map(x=>{const v=l[x].scale??null;return`<span class="scale-chip scale-${v??"na"}" title="${x} — ${wt(l[x].text??"no data")}">${x}${v??"–"}</span>`}).join(""):c.state==="loading"?'<span class="tile-loading-dots">…</span>':we,a.querySelector("[data-time]").textContent=c.short,a.setAttribute("title",`NOAA scales · ${c.label}`),a.setAttribute("data-state",c.state);const u=this.tiles.get("aurora"),h=t.aurora,d=h?{tier:"modeled",source:h.source,source_url:h.source_url,model:h.model,data_time:h.data?.observation_time??null,latency_s:h.latency_s,stale_after_s:h.stale_after_s,...t.laneErrors.aurora?{error:t.laneErrors.aurora}:{}}:void 0,f=Ao({lane:{loading:t.lanes.aurora,error:t.laneErrors.aurora,nextAttempt:t.nextAttempt},received:!!h?.data,meta:d,now:e});u.querySelector("[data-v]").textContent=h?.data?String(h.data.max_probability):f.state==="loading"?"…":f.state==="error"?"unavailable":we,u.querySelector("[data-time]").textContent=h?.data?`valid ${It(h.data.forecast_time)}`:f.short,u.setAttribute("data-state",f.state),u.setAttribute("title",`Aurora peak · ${f.label}`),u.setAttribute("aria-label",h?.data?`Aurora peak: ${h.data.max_probability} percent, ${f.label}. Open report.`:`Aurora peak: ${f.state==="loading"?"loading":f.state==="error"?`unavailable, ${f.label}`:"no data"}. Open report.`),this.setToggleState("aurora-toggle",f.state),this.setToggleState("cme-toggle",t.lanes.cmes&&t.cmes.length===0?"loading":t.laneErrors.cmes?"error":t.cmes.length===0?"no-data":"fresh"),this.setToggleState("wind-toggle",r.loading?"loading":s?.solar_wind?"fresh":i?.parts?.solar_wind?.error??t.lastError?"error":"no-data");const g=[...s?.alerts??[]].sort((x,v)=>(m0[x.level]??9)-(m0[v.level]??9)||Date.parse(v.issued)-Date.parse(x.issued)),_=g[0];this.headlineEl.hidden=!_,_&&(this.headlineEl.className=`headline-alert level-${_.level}`,this.headlineEl.innerHTML=`<span class="alert-level">${wt(g0[_.level]??"notice")}</span><span class="alert-text">${wt(_.text||_.product)}</span><span class="alert-time">${It(_.issued)} UTC</span>`,this.headlineEl.title=_.message.slice(0,400)),this.tickerEl.innerHTML='<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';const m=this.tickerEl.querySelector("[data-t]");m.innerHTML=g.length?g.slice(0,6).map(x=>`<span class="ticker-item level-${x.level}" title="${wt(x.message.slice(0,400))}"><span class="alert-level">${wt(g0[x.level]??"notice")}</span><span class="alert-text">${wt(x.text||x.product)}</span><span class="alert-time">${It(x.issued)}</span></span>`).join(""):`<span class="ticker-item level-none"><span class="alert-text">${s?"No watches, warnings or alerts outstanding.":t.lanes.snapshot?"Loading NOAA notices…":we}</span></span>`,this.fitTicker();const p=i?Object.values(i.parts).some(x=>x.mirrored):!1,b=i?Object.values(i.parts).some(x=>x.data_time):!1;this.statusEl.classList.toggle("is-error",!!t.lastError),this.statusEl.classList.toggle("is-mirror",!t.lastError&&p),this.statusEl.classList.toggle("is-degraded",!t.lastError&&!!i&&!b&&!p),t.lastError?this.statusEl.textContent=`Last refresh failed (${t.lastError}) at ${It(t.lastAttempt)} UTC. Showing last good data, ageing.`:i&&p?this.statusEl.textContent=`NOAA SWPC unreachable · reading Earth Star's mirror (stage B), captured ${It(i.fetched_at)} UTC · every value keeps NOAA's own timestamp`:i&&!b?this.statusEl.textContent=`NOAA SWPC unreachable — nothing has loaded yet. Retrying${t.nextAttempt?` at ${It(t.nextAttempt)} UTC`:""}.`:i?this.statusEl.textContent=`Live · NOAA SWPC · refreshed ${It(i.fetched_at)} UTC · DirectSource (stage A)`:this.statusEl.textContent="Fetching live data from NOAA SWPC…",this.renderMargin()}earthLights=!1;earthCoast=!1;setEarthLights(t){this.earthLights=t}setEarthCoast(t){this.earthCoast=t}setToggleState(t,e){document.getElementById(t)?.setAttribute("data-state",e)}setStats(t){const e=t.pixelRatio<t.maxPixelRatio,i=e?`${t.pixelRatio}/${t.maxPixelRatio}/${Math.round(t.fps)}`:"";i!==this.perfKey&&(this.perfKey=i,this.perfEl.hidden=!e,e&&(this.perfEl.textContent=`Rendering at ${t.pixelRatio}x rather than ${t.maxPixelRatio}x (${t.megapixels.toFixed(1)} MP) to hold the frame rate — ${Math.round(t.fps)} fps. Geometry and data are unaffected.`))}SECTION_KEY="viewer.sections";loadSectionState(){try{const t=localStorage.getItem(this.SECTION_KEY);if(!t)return;const e=JSON.parse(t);for(const[i,s]of Object.entries(e))this.sectionState.set(i,!!s)}catch{}}onSectionToggle=t=>{const e=t.target,i=e.dataset?.sect;if(i){this.sectionState.set(i,e.open);try{localStorage.setItem(this.SECTION_KEY,JSON.stringify(Object.fromEntries(this.sectionState)))}catch{}}};remembered=t=>this.sectionState.get(t);renderMargin(){const t=this.state;if(!t)return;const e=new Date;switch(this.tab){case"report":this.bodyEl.innerHTML=iv(t,this.narration,e);break;case"forecast":this.bodyEl.innerHTML=rv(this.forecast,this.forecastLoading,t?.cmes??[],this.remembered,this.forecastError);break;case"sun":this.bodyEl.innerHTML=mv(this.sun,Es,this.cycle,this.cycleLoading,this.cycleError),this.placeSunFrame();break;case"sources":this.bodyEl.innerHTML=uv(t,this.checks,this.remembered,{surface:this.narration.earthSurface??"vector",lights:this.earthLights,coast:this.earthCoast});break;case"checks":this.bodyEl.innerHTML=dv(this.checks,this.checksRunning);break;case"detail":this.bodyEl.innerHTML=this.detailId?Mv(this.detailId,t,e):"";break}}fillSlot(t,e){const i=document.getElementById(t),s=i?.dataset.frame;if(!i||!s)return;const r=this.images.acquire(s);r.alt=i.dataset.alt??"",r.className="sun-img",r.parentElement!==i&&i.replaceChildren(r),r.complete&&r.naturalWidth>0?e(r):r.addEventListener("load",()=>e(r),{once:!0})}placeSunFrame(){this.fillSlot("sun-slot",e=>this.cb.onSunFrame?.(e)),this.fillSlot("corona-slot",e=>this.cb.onCoronaFrame?.(e));const t=this.sun.loop?.frames;if(t){const e=this.sun.frameIndex;this.images.warm([t[(e+1)%t.length].url,t[(e+2)%t.length].url])}}updateSunFrame(){const t=document.getElementById("sun-slot"),e=this.sun.loop?.frames[this.sun.frameIndex];if(!t||!e){this.renderMargin();return}t.dataset.frame=e.url,this.placeSunFrame();const i=this.bodyEl.querySelector(".sun-stamp");if(i){const r=Math.round((Date.now()-Date.parse(e.time))/6e4);i.innerHTML=`<span>${It(e.time)} UTC</span><span>${r} min ago</span>`}const s=document.getElementById("sun-scrub");s&&document.activeElement!==s&&(s.value=String(this.sun.frameIndex))}fitTicker(){if(!this.fittingTicker){this.fittingTicker=!0;try{const t=this.tickerEl,e=t.querySelector("[data-t]");if(!e)return;const i=[...e.querySelectorAll(".ticker-item")];for(const a of i)a.hidden=!1;if(t.querySelector(".ticker-more")?.remove(),t.classList.toggle("is-expanded",this.tickerExpanded),this.tickerExpanded){i.length>1&&e.append(this.tickerMoreButton("show fewer",!0));return}if(t.scrollHeight<=t.clientHeight+1)return;const s=this.tickerMoreButton("",!1);e.append(s);let r=0;for(let a=i.length-1;a>=1&&(i[a].hidden=!0,r++,s.textContent=`+${r} more`,!(t.scrollHeight<=t.clientHeight+1));a--);s.textContent=`+${r} more`}finally{this.fittingTicker=!1}}}tickerMoreButton(t,e){const i=document.createElement("button");return i.className="ticker-more",i.type="button",i.textContent=t,i.setAttribute("aria-expanded",String(e)),i.addEventListener("click",()=>{this.tickerExpanded=!this.tickerExpanded,this.fitTicker()}),i}}class Av{constructor(t,e=6e4,i=5*6e4){this.source=t,this.intervalMs=e,this.auroraIntervalMs=i}source;intervalMs;auroraIntervalMs;state={now:null,series:null,kpSeries:null,xraySeries:null,protonSeries:null,electronSeries:null,geosyncSeries:null,dstSeries:null,aurora:null,regions:null,spacecraft:null,cmes:[],lastAttempt:null,lastError:null,loading:!0,lanes:{snapshot:!0,aurora:!0,regions:!0,cmes:!0,spacecraft:!0},laneErrors:{aurora:null,regions:null,cmes:null,spacecraft:null},nextAttempt:null};listeners=new Set;timer=null;inflight=null;auroraTimer=null;get(){return this.state}subscribe(t){return this.listeners.add(t),t(this.state),()=>this.listeners.delete(t)}emit(t){this.state={...this.state,...t};for(const e of this.listeners)e(this.state)}nextAttemptIso(){return new Date(Date.now()+this.intervalMs).toISOString()}async refresh(){this.inflight?.abort();const t=new AbortController;this.inflight=t,this.emit({loading:!0,lanes:{...this.state.lanes,snapshot:!0}});try{const{now:e,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,dstSeries:c}=await this.source.fetchSnapshot(t.signal);this.emit({now:e,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,dstSeries:c,lastAttempt:new Date().toISOString(),lastError:null,loading:!1,lanes:{...this.state.lanes,snapshot:!1},nextAttempt:this.nextAttemptIso()})}catch(e){if(t.signal.aborted)return;this.emit({lastAttempt:new Date().toISOString(),lastError:e instanceof Error?e.message:String(e),loading:!1,lanes:{...this.state.lanes,snapshot:!1},nextAttempt:this.nextAttemptIso()})}finally{this.inflight===t&&(this.inflight=null)}}async slow(t,e,i){this.emit({lanes:{...this.state.lanes,[t]:!0}});try{const s=await i(),r={lanes:{...this.state.lanes,[t]:!1},laneErrors:{...this.state.laneErrors,[t]:null}};r[e]=s,this.emit(r)}catch(s){this.emit({lanes:{...this.state.lanes,[t]:!1},laneErrors:{...this.state.laneErrors,[t]:s instanceof Error?s.message:String(s)}})}}async refreshAurora(){await this.slow("aurora","aurora",()=>this.source.fetchAurora()),await this.slow("regions","regions",()=>this.source.fetchRegions()),await this.slow("cmes","cmes",async()=>await K_()),await this.slow("spacecraft","spacecraft",()=>this.source.fetchEphemerides())}lane(t){return t==="snapshot"?{loading:this.state.lanes.snapshot,error:this.state.lastError,nextAttempt:this.state.nextAttempt}:{loading:this.state.lanes[t],error:this.state.laneErrors[t],nextAttempt:this.state.nextAttempt}}start(){this.timer===null&&(this.refresh(),this.refreshAurora(),this.timer=window.setInterval(()=>{this.refresh()},this.intervalMs),this.auroraTimer=window.setInterval(()=>{this.refreshAurora()},this.auroraIntervalMs),document.addEventListener("visibilitychange",this.onVisible))}stop(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.auroraTimer!==null&&(clearInterval(this.auroraTimer),this.auroraTimer=null),document.removeEventListener("visibilitychange",this.onVisible),this.inflight?.abort()}onVisible=()=>{document.visibilityState==="visible"&&(this.refresh(),this.refreshAurora())}}const Lo={protons:`${he}/json/goes/primary/integral-protons-6-hour.json`,electrons:`${he}/json/goes/primary/integral-electrons-6-hour.json`},Rv=[[5,1e5,"Extreme"],[4,1e4,"Severe"],[3,1e3,"Strong"],[2,100,"Moderate"],[1,10,"Minor"]];function Cv(n){if(n===null||!Number.isFinite(n))return null;for(const[t,e,i]of Rv)if(n>=e)return{scale:t,text:i};return{scale:0,text:"None"}}function Io(n,t){if(!Array.isArray(n))return null;let e=null,i=-1/0;for(const s of n){if(String(s.energy)!==t)continue;const r=Date.parse(ce(s.time_tag)??"");Number.isFinite(r)&&r>i&&(i=r,e=s)}return e}function _0(n,t){if(!Array.isArray(n))return{time:[],value:[]};const e=n.filter(i=>String(i.energy)===t).map(i=>({t:ce(i.time_tag),v:Et(i.flux)})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:e.map(i=>i.t),value:e.map(i=>i.v)}}function Pv(n,t){const e=Io(n,">=10 MeV"),i=Io(n,">=100 MeV"),s=Io(t,">=2 MeV");if(!e&&!s)return null;const r=[e,s].map(l=>ce(l?.time_tag)).filter(l=>!!l);if(r.length===0)return null;const a=r.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),o=Et(e?.flux);return{time:a,proton10:o,proton100:Et(i?.flux),electron2:Et(s?.flux),satellite:Et(e?.satellite??s?.satellite),s:Cv(o)}}const No=`${he}/products/geospace/propagated-solar-wind-1-hour.json`;function Dv(n,t=new Date){if(!Array.isArray(n)||n.length<2)return null;const e=n[0];if(!Array.isArray(e))return null;const i=m=>e.indexOf(m),s=i("time_tag"),r=i("propagated_time_tag");if(s<0||r<0)return null;const a=i("speed"),o=i("density"),l=i("temperature"),c=i("bz"),u=i("bt"),h=[];for(let m=1;m<n.length;m++){const p=n[m];if(!Array.isArray(p))continue;const b=ce(p[s]),x=ce(p[r]);!b||!x||h.push({observedAt:b,arrivesAt:x,speed:Et(p[a]),density:Et(p[o]),temperature:Et(p[l]),bz:Et(p[c]),bt:Et(p[u])})}if(h.length===0)return null;h.sort((m,p)=>Date.parse(m.arrivesAt)-Date.parse(p.arrivesAt));const d=t.getTime();let f=null;for(const m of h)Date.parse(m.arrivesAt)<=d&&(f=m);f??=h[0];const g=h[h.length-1],_=(Date.parse(g.arrivesAt)-d)/6e4;return{samples:h,arrivingNow:f,leadMinutes:Number.isFinite(_)?_:null}}const Xl=`${he}/json/geospace/geospace_dst_1_hour.json`;function v0(n){return n===null||!Number.isFinite(n)?null:n>-30?"quiet":n>-50?"weak":n>-100?"moderate":n>-200?"intense":n>-350?"severe":"great"}const Lv={quiet:"quiet",weak:"weak storm",moderate:"moderate storm",intense:"intense storm",severe:"severe storm",great:"great storm"};function ed(n){if(!Array.isArray(n))return[];const t=[];for(const e of n){const i=ce(typeof e.time_tag=="string"?e.time_tag:null),s=Et(e.dst);i===null||s===null||t.push({time:i,dst:s})}return t.sort((e,i)=>e.time.localeCompare(i.time)),t}function nd(n,t=new Date){const e=ed(n);if(e.length===0)return{now:null,ahead:[],minimum:null};const i=t.getTime();let s=null;const r=[];for(const o of e)Date.parse(o.time)<=i?s=o:r.push(o);const a=e.reduce((o,l)=>o===null||l.dst<o.dst?l:o,null);return{now:s,ahead:r,minimum:a}}function Iv(n,t=new Date){const e=t.getTime(),i=ed(n).filter(s=>Date.parse(s.time)<=e);return{time:i.map(s=>s.time),value:i.map(s=>s.dst)}}const x0=`${he}/json/goes/primary/magnetometers-6-hour.json`,ql=6.6;function id(n){const t=ga[Ye(1,0)],e=ga[Ye(1,1)],i=Lh[Ye(1,1)];return Math.sqrt(t*t+e*e+i*i)/(n*n*n)}function Nv(n){if(!Array.isArray(n))return null;let t=null,e=-1/0;for(const s of n){const r=Date.parse(ce(s.time_tag)??"");Number.isFinite(r)&&r>e&&(e=r,t=s)}const i=ce(t?.time_tag);return!t||!i?null:{time:i,satellite:Et(t.satellite),hp:Et(t.Hp),he:Et(t.He),hn:Et(t.Hn),total:Et(t.total),arcjet:t.arcjet_flag===!0}}function Uv(n,t="total"){if(!Array.isArray(n))return{time:[],value:[]};const e=n.map(i=>({t:ce(i.time_tag),v:Et(i[t])})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:e.map(i=>i.t),value:e.map(i=>i.v)}}const He="NOAA SWPC",ke={solar_wind:1200,kp:1200,xray:1200,scales:360*60,alerts:10080*60,magnetopause:1200,particles:1800,propagated:1800,geosync:1800,dst:1200,aurora:3600,regions:2160*60,spacecraft:10800};function wi(n,t){if(!t)return null;const e=(Date.parse(n)-Date.parse(t))/1e3;return Number.isFinite(e)?Math.round(e):null}function bn(n,t,e,i,s,r,a="measured",o=null){return{tier:a,source:i,source_url:s,model:o,data_time:t,latency_s:wi(n,t),stale_after_s:e,...r?{error:r}:{},...N5(s)?{mirrored:!0}:{}}}class sd{name="DirectSource (stage A · browser → NOAA SWPC)";async fetchNow(t){return(await this.fetchSnapshot(t)).now}async fetchSnapshot(t){const[e,i,s,r,a,o,l,c,u,h,d]=await Promise.all([Ae(pe.mag,t),Ae(pe.wind,t),Ae(pe.kp1m,t),Ae(pe.xrays6h,t),Ae(pe.scales,t),Ae(pe.alerts,t),Ae(Lo.protons,t),Ae(Lo.electrons,t),Ae(No,t),Ae(x0,t),Ae(Xl,t)]),f=new Date().toISOString(),g=e.json||i.json?f5(e.json,i.json):null,_=s.json?p5(s.json):null,m=r.json?g5(r.json):null,p=a.json?_5(a.json):null,b=o.json?v5(o.json):[],x=l.json||c.json?Pv(l.json,c.json):null,v=u.json?Dv(u.json):null,T=h.json?Nv(h.json):null,E=d.json?nd(d.json,new Date(f)):null,C=v?.arrivingNow??null,L=pc(C?.bz??g?.bz_gsm??null,C?.density??g?.density??null,C?.speed??g?.speed??null),w=e.error??i.error,M={solar_wind:bn(f,g?.time??null,ke.solar_wind,`${He} · real-time solar wind (L1)`,pe.mag,w),kp:bn(f,_?.time??null,ke.kp,`${He} · planetary K (estimated)`,pe.kp1m,s.error),xray:bn(f,m?.time??null,ke.xray,`${He} · GOES XRS (0.1–0.8 nm)`,pe.xrays6h,r.error),scales:bn(f,p?.time??null,ke.scales,`${He} · NOAA scales`,pe.scales,a.error,"modeled",{name:"NOAA G/S/R scales"}),alerts:bn(f,b[0]?.issued??null,ke.alerts,`${He} · alerts, watches & warnings`,pe.alerts,o.error),magnetopause:bn(f,C?.arrivesAt??g?.time??null,ke.magnetopause,C?"Earth Star (from SWPC wind propagated to Earth)":"Earth Star (from SWPC solar wind at L1)",C?No:pe.mag,w,"modeled",{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}),particles:bn(f,x?.time??null,ke.particles,`${He} · GOES particle detectors`,Lo.protons,l.error??c.error),geosync:bn(f,T?.time??null,ke.geosync,`${He} · GOES magnetometer at geostationary orbit`,x0,h.error),propagated:bn(f,C?.arrivesAt??null,ke.propagated,`${He} · solar wind propagated to the bow shock nose`,No,u.error,"modeled",{name:"NOAA SWPC propagation"}),dst:bn(f,E?.now?.time??null,ke.dst,`${He} · Dst from the Geospace model`,Xl,d.error,"modeled",{name:"NOAA Geospace (Univ. Michigan BATS-R-US/RCM)"})},D=E?.ahead[E.ahead.length-1]??null,O={solar_wind:g,kp:_,xray:m,scales:p,alerts:b,dst:E?.now?{time:E.now.time,value_nt:E.now.dst,level:v0(E.now.dst)===null?null:Lv[v0(E.now.dst)],lead_minutes:D===null?null:Math.round((Date.parse(D.time)-Date.parse(E.now.time))/6e4),min_nt:E.minimum?.dst??null,min_time:E.minimum?.time??null}:null,geosync:T?{time:T.time,satellite:T.satellite,hp_nt:T.hp,total_nt:T.total,deficit_nt:T.total===null?null:id(ql)-T.total,arcjet:T.arcjet}:null,particles:x?{time:x.time,proton_10mev:x.proton10,proton_100mev:x.proton100,electron_2mev:x.electron2,satellite:x.satellite,s_scale:x.s?.scale??null,s_text:x.s?.text??null}:null,propagated:C?{observed_at:C.observedAt,arrives_at:C.arrivesAt,speed:C.speed,density:C.density,bz:C.bz,bt:C.bt,lead_minutes:v?.leadMinutes??null}:null,magnetopause:L?{standoff_re:L.r0Re,alpha:L.alpha,bow_shock_re:L.bowShockRe,dyn_pressure_npa:L.dynPressureNPa,model:"Shue1998"}:null},B=Object.values(M).map(Q=>Q.data_time).filter(Q=>!!Q).map(Q=>Date.parse(Q)).filter(Number.isFinite),G=B.length?new Date(Math.min(...B)).toISOString():f,j={source:He,source_url:"https://services.swpc.noaa.gov/",tier:"mixed",model:null,fetched_at:f,data_time:G,latency_s:wi(f,G)??0,stale_after_s:ke.solar_wind,units:{bz_gsm:"nT",by_gsm:"nT",bx_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K",estimated_kp:"Kp",flux_long:"W/m^2",flux_short:"W/m^2",standoff_re:"Re",bow_shock_re:"Re",dyn_pressure_npa:"nPa",proton_10mev:"pfu",proton_100mev:"pfu",electron_2mev:"pfu",hp_nt:"nT",total_nt:"nT",deficit_nt:"nT"},data:O,parts:M},$=o0(e.json,i.json),J=$.time[$.time.length-1]??f,V={source:`${He} · real-time solar wind (L1)`,source_url:pe.mag,tier:"measured",model:null,fetched_at:f,data_time:J,latency_s:wi(f,J)??0,stale_after_s:ke.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:$};return{now:j,series:V,kpSeries:as(M5(s.json),120),xraySeries:as(y5(r.json),120),protonSeries:as(_0(l.json,">=10 MeV"),120),geosyncSeries:as(Uv(h.json,"total"),120),dstSeries:Iv(d.json,new Date(f)),electronSeries:as(_0(c.json,">=2 MeV"),120)}}async fetchAurora(t){const e=await Ae(pe.aurora,t);if(!e.json)throw new Error(e.error??"unreachable");const i=new Date().toISOString(),s=x5(e.json),r=s?.observation_time??i;return{source:`${He} · OVATION Prime aurora forecast`,source_url:pe.aurora,tier:"modeled",model:{name:"OVATION Prime (NOAA SWPC)"},fetched_at:i,data_time:r,latency_s:wi(i,r)??0,stale_after_s:ke.aurora,units:{values:"% probability of visible aurora"},data:s}}async fetchRegions(t){const e=await Ae(pe.regions,t);if(!e.json)throw new Error(e.error??"unreachable");const i=new Date().toISOString(),s=b5(e.json),r=s[0]?.observed??i;return{source:`${He} · solar region summary`,source_url:pe.regions,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:wi(i,r)??0,stale_after_s:ke.regions,units:{lat:"deg",lon:"deg from central meridian",area:"millionths of hemisphere"},data:s}}async fetchEphemerides(t){const e=await Ae($l,t);if(!e.json)throw new Error(e.error??"unreachable");const i=new Date().toISOString(),s=Kh(e.json),r=s.reduce((a,o)=>a===null||o.time>a?o.time:a,null)??i;return{source:`${He} · RTSW ephemerides`,source_url:$l,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:wi(i,r)??0,stale_after_s:ke.spacecraft,units:{gse:"km",distanceRe:"Earth radii",offAxisDeg:"deg"},data:s}}async fetchSolarWindSeries(t){const[e,i]=await Promise.all([Ae(pe.mag,t),Ae(pe.wind,t)]),s=new Date().toISOString(),r=o0(e.json,i.json),a=r.time[r.time.length-1]??s;return{source:`${He} · real-time solar wind (L1)`,source_url:pe.mag,tier:"measured",model:null,fetched_at:s,data_time:a,latency_s:wi(s,a)??0,stale_after_s:ke.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:r}}}class Fv{mq=window.matchMedia("(prefers-reduced-motion: reduce)");listeners=new Set;override=null;constructor(){this.mq.addEventListener("change",()=>this.emit())}get reduced(){return this.override??this.mq.matches}setOverride(t){this.override=t,this.emit()}subscribe(t){return this.listeners.add(t),t(this.reduced),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.reduced)}}const Ov=[["1–5","Deck, Sunward, Profile, Overhead, System views"],["s","Toggle Globe / True scale"],["m","Toggle reduced motion"],["f","Toggle the magnetic shield"],["a","Toggle the aurora overlay"],["w","Toggle the solar wind stream"],["c","Toggle CME cones"],["r","Refresh data now"],["?","This help"]];function kv(n){const t=e=>{const i=e.target;if(!(e.metaKey||e.ctrlKey||e.altKey)&&!(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))){switch(e.key){case"1":case"2":case"3":case"4":case"5":n.view(Number(e.key)-1);break;case"s":case"S":n.toggleScale();break;case"m":case"M":n.toggleMotion();break;case"f":case"F":n.toggleShield();break;case"a":case"A":n.toggleAurora();break;case"w":case"W":n.toggleWind();break;case"c":case"C":n.toggleCmes();break;case"r":case"R":n.refresh();break;case"?":Gn(Ov.map(([s,r])=>`${s}: ${r}`).join(". "));break;default:return}e.preventDefault()}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}function Gn(n){const t=document.getElementById("announce");t&&(t.textContent=n)}const Bv=360/25.38;function zv(n,t,e,i){const s=n*Math.PI/180,r=t*Math.PI/180,a=i.clone().addScaledVector(e,-i.dot(e)).normalize(),o=new P().crossVectors(e,a);return new P().addScaledVector(a,Math.cos(s)*Math.cos(r)).addScaledVector(o,-Math.cos(s)*Math.sin(r)).addScaledVector(e,Math.sin(s))}function Vv(n,t,e,i){const s=t.clone().addScaledVector(e,-t.dot(e)).normalize(),r=new P().crossVectors(s,e).normalize();return{u:i.centre.u+n.dot(r)*i.radius,v:i.centre.v+n.dot(s)*i.radius}}function Hv(n,t,e,i,s,r,a){const o=-(a/24)*Bv,l=(T,E)=>{const C=Math.round(T*t),L=Math.round((1-E)*t);if(C<1||L<1||C>=t-1||L>=t-1)return null;let w=0;for(let M=-1;M<=1;M++)for(let D=-1;D<=1;D++)w+=n[(L+M)*t+C+D];return w/9},c=T=>{let E=0,C=0;for(const L of e){const w=(L.lon+o)*(T?-1:1),M=zv(L.lat,w,i,s);if(M.dot(s)<.5)continue;const D=Vv(M,i,s,r),O=l(D.u,D.v);O!==null&&(E+=O,C++)}return{sum:E,n:C}},u=c(!1),h=c(!0),d=u.n;if(d<2||h.n<2)return null;const f=u.sum;let g=0,_=0;const m=r.centre.u*t,p=(1-r.centre.v)*t,b=r.radius*t*.85;for(let T=Math.max(0,Math.floor(p-b));T<Math.min(t,Math.ceil(p+b));T++)for(let E=Math.max(0,Math.floor(m-b));E<Math.min(t,Math.ceil(m+b));E++)Math.hypot(E-m,T-p)>b||(g+=n[T*t+E],_++);if(_===0)return null;const x=f/d,v=g/_;return v<=0?null:{tested:d,atRegions:x,acrossDisk:v,ratio:x/v,mirroredRatio:h.sum/h.n/v}}const yi=async(n,t)=>(await fetch(n,{cache:"no-store",signal:t})).json();function S0(n,t,e,i){const s=Math.PI/180,r=(i-t)*s,a=Math.sin(r)*Math.cos(e*s),o=Math.cos(n*s)*Math.sin(e*s)-Math.sin(n*s)*Math.cos(e*s)*Math.cos(r);return(Math.atan2(a,o)*180/Math.PI+360)%360}function Zr(n,t,e){return n===null||t===null||!Number.isFinite(n)||!Number.isFinite(t)?!1:Math.abs(n-t)<=e}function Gv(n,t){const e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d",{willReadFrequently:!0});if(!i)return null;try{i.drawImage(n,0,0,t,t);const s=i.getImageData(0,0,t,t).data,r=new Float32Array(t*t);for(let a=0;a<t*t;a++)r[a]=.299*s[a*4]+.587*s[a*4+1]+.114*s[a*4+2];return r}catch{return null}}async function $v(n,t){const e=[],i=new sd,[s,r,a,o,l,c,u,h,d]=await Promise.all([i.fetchNow(n),yi(pe.summaryMag,n),yi(pe.summarySpeed,n),yi(pe.xrayFlares,n),i.fetchSolarWindSeries(n),i.fetchAurora(n),yi($l,n),yi(Xl,n),Yh(n)]),f=s.data,g=r[0],_=a[0],m=(ot,Ct)=>{const Ht=String(ot??"").replace(" ","T").replace(/Z?$/,"Z"),Gt=Date.parse(Ht);if(!Number.isFinite(Gt))return null;const W=l.data.time.indexOf(new Date(Gt).toISOString());return W<0?null:l.data[Ct][W]??null},p=It(String(g?.time_tag??""));e.push({name:"IMF Bz (GSM), nT",ours:m(g?.time_tag,"bz_gsm")?.toFixed(2)??"no data",theirs:String(g?.bz_gsm??"no data"),ok:Zr(m(g?.time_tag,"bz_gsm"),Number(g?.bz_gsm),.55),note:`both at ${p} UTC · tol ±0.55 (their integer rounding)`}),e.push({name:"IMF total Bt, nT",ours:m(g?.time_tag,"bt")?.toFixed(2)??"no data",theirs:String(g?.bt??"no data"),ok:Zr(m(g?.time_tag,"bt"),Number(g?.bt),.55),note:`both at ${p} UTC · tol ±0.55`}),e.push({name:"Solar wind speed, km/s",ours:m(_?.time_tag,"speed")?.toFixed(1)??"no data",theirs:String(_?.proton_speed??"no data"),ok:Zr(m(_?.time_tag,"speed"),Number(_?.proton_speed),1.5),note:`both at ${It(String(_?.time_tag??""))} UTC · tol ±1.5`});const b=m5(o)?.class??"",x=f.xray?.class??Xh(f.xray?.flux_long??null);e.push({name:"X-ray class",ours:x??"no data",theirs:b||"no data",ok:!!x&&!!b&&x[0]===b[0]&&Math.abs(parseFloat(x.slice(1))-parseFloat(b.slice(1)))<=.35,note:`our thresholds on our parsed flux (${f.xray?.flux_long?f.xray.flux_long.toExponential(2):"—"} W/m²) vs SWPC's published label. This row caught current_int_xrlong being read as a flux.`});const v=await yi(pe.kp1m,n),T=f.kp?.time??null,E=T?v.find(ot=>`${String(ot.time_tag)}Z`===T.replace(".000Z","Z")||Date.parse(`${String(ot.time_tag)}Z`)===Date.parse(T)):void 0;e.push({name:"Planetary Kp (estimated)",ours:f.kp?.estimated_kp?.toFixed(2)??"no data",theirs:E?String(E.estimated_kp):"minute not in feed",ok:!!E&&Zr(f.kp?.estimated_kp??null,Number(E.estimated_kp),.001),note:`both at ${It(T)} UTC · exact match required. Checks our newest-record selection against the same minute upstream.`});const C=await yi(pe.mag,n),L=C.reduce((ot,Ct)=>Date.parse(`${String(Ct.time_tag)}Z`)>Date.parse(`${String(ot.time_tag)}Z`)?Ct:ot,C[0]),w=[...new Set(C.filter(ot=>ot.active===!0).map(ot=>String(ot.source)))];e.push({name:"L1 spacecraft selected",ours:f.solar_wind?.spacecraft??"no data",theirs:w.join(", ")||"none flagged active",ok:!!f.solar_wind?.spacecraft&&w.includes(f.solar_wind.spacecraft),note:`the feed interleaves several spacecraft; newest of ANY source right now is "${String(L.source)}". Taking that instead is the bug this row guards.`});const M=f.geosync,D=f.magnetopause?.standoff_re??null;if(M&&M.total_nt!==null&&D!==null){const ot=id(ql),Ct=D>ql,Ht=M.total_nt>ot*.25;e.push({name:"Shield model vs GOES at 6.6 Rₑ",ours:`standoff ${D.toFixed(1)} Rₑ → ${Ct?"inside":"OUTSIDE"}`,theirs:`${M.total_nt.toFixed(0)} nT → ${Ht?"inside":"outside"}`,ok:Ct===Ht,note:`Dipole at 6.6 Rₑ is ${ot.toFixed(0)} nT; GOES-${M.satellite??"?"} reads ${M.total_nt.toFixed(0)} nT, a deficit of ${(ot-M.total_nt).toFixed(0)} nT from the ring and magnetopause currents. The check is the agreement of the two verdicts, not the numbers — Shue's boundary and this magnetometer are independent.${M.arcjet?" NOTE: thruster firing, reading suspect.":""}`})}if(c.data){const ot=c.data.grid,Ct=n_(new Date);let Ht=0,Gt=0,W=0,Y=0;for(let lt=0;lt<ot.width;lt++)for(let F=45;F<=89;F++){const ct=S5(ot,F,lt);if(ct<=0)continue;const qt=F*Math.PI/180,Dt=lt*Math.PI/180;Ht+=ct*Math.cos(qt)*Math.cos(Dt),Gt+=ct*Math.cos(qt)*Math.sin(Dt),W+=ct*Math.sin(qt),Y+=ct}if(Y>0){const lt=Math.sqrt(Ht*Ht+Gt*Gt+W*W),F=Math.asin(W/lt)*180/Math.PI,ct=Math.atan2(Gt,Ht)*180/Math.PI,qt=e_(F,ct,Ct.lat,Ct.lon),Dt=Hl(new Date),R=(Dt.lon+360)%360-180,Bt=S0(Ct.lat,Ct.lon,F,ct),gt=S0(Ct.lat,Ct.lon,-Dt.lat,R),pt=Math.abs((Bt-gt+540)%360-180);e.push({name:"Aurora oval displaced toward magnetic midnight",ours:`centroid bears ${Bt.toFixed(0)}° from the pole`,theirs:`midnight bears ${gt.toFixed(0)}°`,ok:pt<90&&qt<25,note:`${pt.toFixed(0)}° apart in bearing — the nightside half — with the centroid ${qt.toFixed(1)}° from the pole. NOAA's OVATION grid, our IGRF-14 dipole axis and the sub-solar point are three independent computations; a transposed or mirrored grid puts the oval on the dayside and fails here.`})}}else e.push({name:"Aurora oval displaced toward magnetic midnight",ours:"no data",theirs:"—",ok:!1,inconclusive:!0,note:"OVATION grid did not load, so orientation could not be checked. This is the check having no evidence, not the oval being in the wrong place."});const O=Kh(u),B=O.find(ot=>ot.active)?.source??null,G=f.solar_wind?.spacecraft??null,j=O.find(ot=>ot.active);e.push({name:"Operational L1 spacecraft",ours:G??"no data",theirs:B??"no data",ok:!!G&&G===B,note:j?`wind/mag feed vs ephemeris feed · ${j.distanceRe.toFixed(0)} Rₑ upstream, ${j.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line`:"wind/mag feed vs ephemeris feed"});const $=nd(h,new Date),J=$.now?.dst??null,V=f.kp?.estimated_kp??null;if(J!==null&&V!==null){const ot=J<=-100?2:J<=-30?1:0,Ct=V>=6?2:V>=4?1:0,Ht=Math.abs(ot-Ct),Gt=["quiet","disturbed","severe"];e.push({name:"Modelled Dst vs measured Kp",ours:`Dst ${J.toFixed(0)} nT → ${Gt[ot]}`,theirs:`Kp ${V.toFixed(2)} → ${Gt[Ct]}`,ok:Ht===0,inconclusive:Ht===1,note:Ht>=2?"Two bands apart, which the difference between the indices cannot explain. A model driven by the L1 wind against a measurement from ground magnetometers; they share no input, so one of them is wrong.":Ht===1?`One band apart, which is what a storm beginning looks like: the ring current responds before the mid-latitude range does, so Dst crosses its threshold first. Not a contradiction, and not evidence of agreement either. ${$.ahead.length} of the Dst feed's samples lie in the future and are excluded from "now".`:`A model driven by the L1 wind against a measurement from ground magnetometers — they share no input. Bands are Dst −30 and −100 nT, Kp 4 and 6. ${$.ahead.length} of the feed's samples lie in the future and are excluded from "now".`})}const Q=f.propagated;if(d&&Q?.speed!=null&&Q.arrives_at){const ot=B5(d,new Date(Q.arrives_at));if(ot?.speed!=null){const Ct=ot.speed-Q.speed,Ht=Ct/Q.speed*100;e.push({name:"WSA-Enlil hindcast vs measured wind",ours:`measured ${Q.speed.toFixed(0)} km/s`,theirs:`Enlil ${ot.speed.toFixed(0)} km/s`,ok:Math.abs(Ct)<=200,note:`${Ct>=0?"+":""}${Ct.toFixed(0)} km/s (${Ht.toFixed(0)}%) at ${It(Q.arrives_at)} UTC. Enlil is driven by solar magnetograms and CME cone fits and never sees L1, so this is a model against a measurement of the same quantity. The tolerance is ±200 km/s: it catches a misread column or a time misalignment, not ordinary forecast error.`})}}if(t){const Ct=Gv(t.image,384),Ht=(await i.fetchRegions(n)).data,Gt=Ht[0]?.observed,W=Gt?(Date.now()-Date.parse(Gt))/36e5:0,Y=Ct?Hv(Ct,384,Ht,t.north,t.earthDir,t.calibration,W):null;if(Y){const lt=Y.mirroredRatio>0?Y.ratio/Y.mirroredRatio:0,F=Math.abs(lt-1)>=.06;e.push({name:"Solar imagery lines up with the region list",ours:`${Y.ratio.toFixed(2)}x disk mean at ${Y.tested} reported positions`,theirs:`${Y.mirroredRatio.toFixed(2)}x mirrored east–west`,ok:F&&lt>1,inconclusive:!F,note:F?`The imagery and the region list come from different pipelines, so this tests our projection — the rotation axis, the measured disk centre and radius, and the longitude convention — rather than either of theirs. Longitudes rotated ${W.toFixed(0)} h forward at the Carrington rate.`:`Too close to call today: the published positions and their mirror image score within ${(Math.abs(lt-1)*100).toFixed(0)}% of each other, so the picture cannot settle the projection. That happens when the regions are small — ${Y.tested} tested here — against a bright chromosphere. Reporting a defect on this evidence would be crying wolf.`})}}const tt=Da(new Date),xt=ma-tt;return e.push({name:"Field model inside its published validity",ours:`${tt.toFixed(2)}`,theirs:`IGRF-14, ${Pa.toFixed(1)}–${ma.toFixed(1)}`,ok:Ih(new Date),note:xt>=0?`${xt.toFixed(1)} years of validity remain; IAGA reissues the model every five years, so IGRF-15 is the successor to fetch.`:`Expired ${(-xt).toFixed(1)} years ago. The field lines are extrapolated beyond the published secular variation and are labelled as such; replace the coefficients with IGRF-15 via scripts/gen-igrf.mjs.`}),{rows:e,ranAt:new Date().toISOString(),passed:e.filter(ot=>ot.ok).length,inconclusive:e.filter(ot=>ot.inconclusive).length}}const rd=document.getElementById("scene"),Ft=await new Promise(n=>requestAnimationFrame(()=>n(new i5(rd)))),ur=new Av(new sd,6e4),ws=new Fv;let ad=null;const Li=new Map,M0=6e4,Uo=new Map;function od(n,t){const e=`${n}:${t}`;if(Uo.has(e))return;const i=new Date(Date.now()+M0).toISOString();n==="disk"?Ut.setSunRetry(i):Ut.setCoronaRetry(i);const s=window.setTimeout(()=>{Uo.delete(e),(n==="disk"?Ut.sunState.loopId===t:Ut.sunState.coronaId===t)&&(Li.delete(t),n==="disk"?_c(t):ld(t))},M0);Uo.set(e,s)}async function _c(n){const t=Es.find(e=>e.id===n&&e.kind==="disk")??Es[0];if(Ut.sunState.loopId=t.id,Li.has(t.id)){const e=Li.get(t.id)??null;Ut.setSunLoop(e,!1),y0(e);return}Ut.setSunLoop(null,!0);try{const e=await Wh(t);Li.set(t.id,e),Ut.sunState.loopId===t.id&&(Ut.setSunLoop(e,!1),y0(e))}catch(e){Ut.sunState.loopId===t.id&&(Ut.setSunLoop(null,!1,gn(e)),od("disk",t.id))}}async function ld(n){if(Ut.sunState.coronaId=n,n===null){Ut.setCoronaLoop(null,!1),Ft.setCoronaPlane(null),Ut.setPlaneCalibration("corona",null),Ft.syncCoronaFraming();return}const t=Es.find(e=>e.id===n&&e.kind==="coronagraph");if(t){if(Li.has(t.id)){Ut.setCoronaLoop(Li.get(t.id)??null,!1);return}Ut.setCoronaLoop(null,!0);try{const e=await Wh(t);Li.set(t.id,e),Ut.sunState.coronaId===t.id&&Ut.setCoronaLoop(e,!1)}catch(e){Ut.sunState.coronaId===t.id&&(Ut.setCoronaLoop(null,!1,gn(e)),od("corona",t.id))}}}function y0(n){const t=n?.frames[n.newestGood];if(!t){jl(null);return}const e=Ut.images.acquire(t.url),i=()=>jl(e);e.complete&&e.naturalWidth>0?i():e.addEventListener("load",i,{once:!0})}function jl(n){Ft.setSunImage(n),Ut.setPlaneCalibration("disk",Ft.setSunCard(n)),Ft.syncCoronaFraming()}function Wv(n){Ut.setPlaneCalibration("corona",Ft.setCoronaPlane(n)),Ft.syncCoronaFraming()}function Xv(){const n=Ut.sunState;!n.playing||!n.loop||Ut.activeTab!=="sun"||n.preloaded<n.loop.frames.length||Ut.setSunFrame((n.frameIndex+1)%n.loop.frames.length)}async function qv(){const n=Ut.sunState;if(n.loop){if(n.preloaded>=n.loop.frames.length){Ut.setSunPlaying(!n.playing);return}n.preloading||(Ut.setSunPreload(0,!0),await d5(n.loop,t=>Ut.setSunPreload(t,!0)),Ut.setSunPreload(n.loop.frames.length,!1),Ut.setSunPlaying(!0))}}let Fo=null;async function jv(){Ut.setChecks(null,!0);try{Fo=await $v(void 0,Ft.sunProjection())}catch(n){Fo={rows:[{name:"Checks could not run",ours:"no data",theirs:"—",ok:!1,inconclusive:!0,note:`NOAA could not be reached to compare against (${n instanceof Error?n.message:String(n)}). This is the comparison being unavailable, not a disagreement with it.`}],ranAt:new Date().toISOString(),passed:0,inconclusive:1}}Ut.setChecks(Fo,!1)}let Oo=null;async function Yv(){Ut.setForecast(null,!0);try{Oo=await j5(),Ut.setForecast(Oo,!1)}catch(n){Oo=null,Ut.setForecast(null,!1,gn(n))}}async function Kv(){Ut.setCycle(null,!0);try{Ut.setCycle(await J5(),!1)}catch(n){Ut.setCycle(null,!1,gn(n))}}const Ut=new Tv({onSelectLoop:n=>{_c(n)},onSelectCorona:n=>{ld(n)},onLoadCycle:()=>{Kv()},onLoadForecast:()=>{Yv()},onToggleSunPlay:()=>{qv()},onScrubSun:n=>{Ut.setSunPlaying(!1),Ut.setSunFrame(n)},onRunChecks:()=>{jv()},onSunFrame:n=>jl(n),onCoronaFrame:n=>Wv(n)}),$n=n=>document.getElementById(n),cd=$n("scale-globe"),ud=$n("scale-true"),hd=$n("motion-toggle"),dd=$n("shield-toggle"),fd=$n("aurora-toggle"),pd=$n("wind-toggle"),md=$n("cme-toggle"),gd=$n("coast-toggle"),Zv=document.getElementById("view-group"),_d=new Map;for(const n of er){const t=document.createElement("button");t.className="ctl",t.type="button",t.id=`view-${n.id}`,t.textContent=n.label,t.title=n.title,t.setAttribute("aria-pressed",String(n.id==="deck")),t.addEventListener("click",()=>xd(n.id)),Zv.append(t),_d.set(n.id,t)}let vd="deck";function an(){Ut.setNarration({mode:Ft.scaleMode,view:vd,reducedMotion:ws.reduced,shield:Ft.shieldOn,fieldLines:Ft.fieldLineStats,aurora:Ft.auroraOn,wind:Ft.windOn,earthSurface:Ft.earthSurfaceState,cmes:{shown:Ft.cmesOn,count:Ft.cmeCount}}),Ut.render(ur.get())}function xd(n){vd=n,Ft.setView(n);for(const[e,i]of _d)i.setAttribute("aria-pressed",String(e===n));const t=er.find(e=>e.id===n);Gn(`${t?.label??n} view — ${t?.title??""}`),(n==="profile"||n==="sunward")&&!Ft.shieldOn&&vc(!0),n==="polar"&&!Ft.auroraOn&&xc(!0),an()}function Ia(n){Ft.setScaleMode(n),cd.setAttribute("aria-pressed",String(n==="globe")),ud.setAttribute("aria-pressed",String(n==="true")),Gn(wh(n)),an()}function vc(n){Ft.setShieldVisible(n),dd.setAttribute("aria-pressed",String(n)),Gn(n?"Magnetic field lines and boundaries shown.":"Field hidden."),an()}function xc(n){Ft.setAuroraVisible(n),fd.setAttribute("aria-pressed",String(n)),Gn(n?"Aurora forecast shown.":"Aurora hidden."),an()}function Sc(n){Ft.setWindVisible(n),pd.setAttribute("aria-pressed",String(n)),Gn(n?"Solar wind stream shown.":"Solar wind stream hidden."),an()}const Sd=document.querySelector("header.top");function Md(){document.documentElement.style.setProperty("--header-real-h",`${Math.round(Sd.getBoundingClientRect().height)}px`)}Md();typeof ResizeObserver<"u"&&new ResizeObserver(Md).observe(Sd);const b0=$n("controls-toggle"),Jv=document.getElementById("controls");b0.addEventListener("click",()=>{const n=Jv.classList.toggle("is-open");b0.setAttribute("aria-expanded",String(n))});cd.addEventListener("click",()=>Ia("globe"));ud.addEventListener("click",()=>Ia("true"));dd.addEventListener("click",()=>vc(!Ft.shieldOn));fd.addEventListener("click",()=>xc(!Ft.auroraOn));pd.addEventListener("click",()=>Sc(!Ft.windOn));function yd(n){Ft.setCmesVisible(n),md.setAttribute("aria-pressed",String(n)),Gn(n?"CME cones shown.":"CME cones hidden."),an()}md.addEventListener("click",()=>yd(!Ft.cmesOn));function Qv(n){Ft.setCoastOverlay(n),gd.setAttribute("aria-pressed",String(n)),Gn(n?"Vector coastlines drawn over the surface imagery.":"Coastlines hidden — the raster surface only."),an()}gd.addEventListener("click",()=>Qv(!Ft.coastOverlayOn));hd.addEventListener("click",()=>ws.setOverride(!ws.reduced));ws.subscribe(n=>{Ft.setReducedMotion(n),hd.setAttribute("aria-pressed",String(!n)),an()});kv({view:n=>{const t=er[n];t&&xd(t.id)},toggleScale:()=>Ia(Ft.scaleMode==="globe"?"true":"globe"),toggleMotion:()=>ws.setOverride(!ws.reduced),toggleShield:()=>vc(!Ft.shieldOn),toggleAurora:()=>xc(!Ft.auroraOn),toggleWind:()=>Sc(!Ft.windOn),toggleCmes:()=>yd(!Ft.cmesOn),refresh:()=>{Gn("Refreshing."),ur.refresh()},focusReport:()=>Ut.selectTab("report")});let E0=!1;function t6(){E0||ur.get().lanes.snapshot||(E0=!0,_c(Es[0].id))}ur.subscribe(n=>{Ft.setNow(n.now?.data??null),Ft.setAurora(n.aurora?.data??null),Ft.setRegions(n.regions?.data??[],n.regions?.data?.[0]?.observed??null),Ft.setCmes(n.cmes),Ft.setSpacecraft(n.spacecraft?.data??[]),t6(),an()});let w0=!1;function e6(){if(w0)return;w0=!0;const n=Math.min(devicePixelRatio||1,3),e=(rd.clientWidth||window.innerWidth)*n>=2048?"4096":"2048",i=(s,r)=>{const a=new Image;a.decoding="async",a.onload=()=>r(a),a.onerror=()=>{Ft.setEarthSurfaceState("vector"),an()},a.src=`/viewer/earth-${s}.webp`};i(`day-${e}`,s=>{Ft.setEarthDayImage(s),Ft.setEarthSurfaceState("imagery"),an()}),i("night-2048",s=>{Ft.setEarthNightImage(s),Ut.setEarthLights(!0),an()})}function n6(n){requestAnimationFrame(()=>requestAnimationFrame(n))}window.setInterval(an,3e4);ad=window.setInterval(Xv,220);Ia("globe");Sc(!0);Ft.start();ur.start();n6(e6);const Jr=document.getElementById("tip");let ko="";Ft.onHover=n=>{if(!n){Jr.hidden=!0,ko="";return}const t=Zh(n.id,new Date),e=n.kind==="sun"?"Sun · open the Sun panel":n.kind==="spacecraft"?`${n.label} · L1 monitor`:t.auFromEarth!==null?`${n.label} · ${xa(t.auFromEarth)} · light ${Jh(t.lightSeconds)}`:t.auFromSun!==null?`${n.label} · ${xa(t.auFromSun)} from the Sun`:n.label;e!==ko&&(Jr.textContent=e,ko=e),Jr.hidden=!1,Jr.style.transform=`translate(${n.screen.x+14}px, ${n.screen.y+14}px)`};Ft.onSelect=n=>{n.kind==="sun"?Ut.selectTab("sun"):n.kind==="spacecraft"?Ut.selectTab("sources"):Ut.showBody(n.id)};window.setInterval(()=>Ut.setStats(Ft.stats),1e3);Object.assign(window,{__viewer:Ft,__hud:Ut,__stats:()=>Ft.stats,__sunTimer:ad});
