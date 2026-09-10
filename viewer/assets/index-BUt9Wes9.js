(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Cc="180",Ms={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xp=0,Oh=1,yp=2,$d=1,bp=2,Gn=3,bi=0,Kt=1,pn=2,gi=0,zi=1,rn=2,kh=3,Bh=4,Sp=5,Ni=100,Mp=101,wp=102,Ep=103,Tp=104,Ap=200,Rp=201,Cp=202,Pp=203,xl=204,yl=205,Dp=206,Lp=207,Ip=208,Np=209,Up=210,Fp=211,Op=212,kp=213,Bp=214,bl=0,Sl=1,Ml=2,As=3,wl=4,El=5,Tl=6,Al=7,Pc=0,zp=1,Vp=2,_i=0,Hp=1,Gp=2,$p=3,Wp=4,Xp=5,jp=6,qp=7,Wd=300,Rs=301,Cs=302,Rl=303,Cl=304,$a=306,Pl=1e3,Oi=1001,Dl=1002,Mn=1003,Yp=1004,Ur=1005,kt=1006,_o=1007,di=1008,Nn=1009,Xd=1010,jd=1011,or=1012,Dc=1013,Hi=1014,jn=1015,br=1016,Lc=1017,Ic=1018,lr=1020,qd=35902,Yd=35899,Kd=1021,Zd=1022,Sn=1023,cr=1026,hr=1027,Jd=1028,Nc=1029,Qd=1030,Uc=1031,Fc=1033,Sa=33776,Ma=33777,wa=33778,Ea=33779,Ll=35840,Il=35841,Nl=35842,Ul=35843,Fl=36196,Ol=37492,kl=37496,Bl=37808,zl=37809,Vl=37810,Hl=37811,Gl=37812,$l=37813,Wl=37814,Xl=37815,jl=37816,ql=37817,Yl=37818,Kl=37819,Zl=37820,Jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,sc=36285,rc=36286,Kp=3200,Zp=3201,e0=0,Jp=1,ui="",Ft="srgb",Ps="srgb-linear",Ca="linear",ct="srgb",Ji=7680,zh=519,Qp=512,e1=513,t1=514,t0=515,n1=516,i1=517,s1=518,r1=519,Vh=35044,Hh="300 es",Dn=2e3,Pa=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,ac=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function a1(n,e){return(n%e+e)%e}function vo(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const o1={DEG2RAD:Ta};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,p*S);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const v=o*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new P,Gh=new Gi;class qe{constructor(e,t,i,s,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],x=s[4],v=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*_+o*S+l*T,r[3]=a*m+o*x+l*w,r[6]=a*p+o*v+l*C,r[1]=c*_+h*S+u*T,r[4]=c*m+h*x+u*w,r[7]=c*p+h*v+u*C,r[2]=f*_+d*S+g*T,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new qe;function n0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l1(){const n=Da("canvas");return n.style.display="block",n}const $h={};function ur(n){n in $h||($h[n]=!0,console.warn(n))}function c1(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Wh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h1(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:e,whitePoint:i,transfer:Ca,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}const rt=h1();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class u1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=Da("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d1=0;class Oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bo(s[a].image)):r.push(bo(s[a]))}else r=bo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?u1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f1=0;const So=new P;class Ot extends ji{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Oi,s=Oi,r=kt,a=di,o=Sn,l=Nn,c=Ot.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Sr(),this.name="",this.source=new Oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pl:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pl:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Wd;Ot.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,T=(p+1)/2,w=(h+f)/4,C=(u+_)/4,L=(g+m)/4;return x>v&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=C/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=L/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p1 extends ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ot(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends p1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class i0 extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m1 extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Or.subVectors(this.max,Xs),es.subVectors(e.a,Xs),ts.subVectors(e.b,Xs),ns.subVectors(e.c,Xs),ti.subVectors(ts,es),ni.subVectors(ns,ts),Mi.subVectors(es,ns);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!Mo(t,es,ts,ns,Or)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,es,ts,ns,Or))?!1:(kr.crossVectors(ti,ni),t=[kr.x,kr.y,kr.z],Mo(t,es,ts,ns,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Fr=new Mr,es=new P,ts=new P,ns=new P,ti=new P,ni=new P,Mi=new P,Xs=new P,Or=new P,kr=new P,wi=new P;function Mo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){wi.fromArray(n,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const g1=new Mr,js=new P,wo=new P;class wr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):g1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(wo)),this.expandByPoint(js.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new P,Eo=new P,Br=new P,ii=new P,To=new P,zr=new P,Ao=new P;class Er{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Eo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Eo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=ii.dot(this.direction),l=-ii.dot(Br),c=ii.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eo).addScaledVector(Br,f),d}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,s,r){To.subVectors(t,e),zr.subVectors(i,e),Ao.crossVectors(To,zr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(zr.crossVectors(ii,zr));if(l<0)return null;const c=o*this.direction.dot(To.cross(ii));if(c<0||l+c>a)return null;const h=-o*ii.dot(Ao);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_1,e,v1)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),si.crossVectors(i,on),si.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),si.crossVectors(i,on)),si.normalize(),Vr.crossVectors(on,si),s[0]=si.x,s[4]=Vr.x,s[8]=on.x,s[1]=si.y,s[5]=Vr.y,s[9]=on.y,s[2]=si.z,s[6]=Vr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],x=i[7],v=i[11],T=i[15],w=s[0],C=s[4],L=s[8],E=s[12],b=s[1],D=s[5],k=s[9],V=s[13],X=s[2],Y=s[6],j=s[10],J=s[14],z=s[3],te=s[7],Q=s[11],be=s[15];return r[0]=a*w+o*b+l*X+c*z,r[4]=a*C+o*D+l*Y+c*te,r[8]=a*L+o*k+l*j+c*Q,r[12]=a*E+o*V+l*J+c*be,r[1]=h*w+u*b+f*X+d*z,r[5]=h*C+u*D+f*Y+d*te,r[9]=h*L+u*k+f*j+d*Q,r[13]=h*E+u*V+f*J+d*be,r[2]=g*w+_*b+m*X+p*z,r[6]=g*C+_*D+m*Y+p*te,r[10]=g*L+_*k+m*j+p*Q,r[14]=g*E+_*V+m*J+p*be,r[3]=S*w+x*b+v*X+T*z,r[7]=S*C+x*D+v*Y+T*te,r[11]=S*L+x*k+v*j+T*Q,r[15]=S*E+x*V+v*J+T*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+_*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,x=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,v=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,T=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,w=t*S+i*x+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*C,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*C,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*C,e[4]=x*C,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*C,e[8]=v*C,e[9]=(g*u*r-h*_*r-g*i*d+t*_*d+h*i*p-t*u*p)*C,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*C,e[12]=T*C,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*C,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=l*c,x=l*h,v=l*u,T=i.x,w=i.y,C=i.z;return s[0]=(1-(_+p))*T,s[1]=(d+v)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+x)*C,s[9]=(m-S)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Dn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Pa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Dn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Dn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Pa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new P,_n=new _t,_1=new P(0,0,0),v1=new P(1,1,1),si=new P,Vr=new P,on=new P,jh=new _t,qh=new Gi;class Un{constructor(e=0,t=0,i=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x1=0;const Yh=new P,ss=new Gi,Bn=new _t,Hr=new P,qs=new P,y1=new P,b1=new Gi,Kh=new P(1,0,0),Zh=new P(0,1,0),Jh=new P(0,0,1),Qh={type:"added"},S1={type:"removed"},rs={type:"childadded",child:null},Ro={type:"childremoved",child:null};class $t extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new P,t=new Un,i=new Gi,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(qs,Hr,this.up):Bn.lookAt(Hr,qs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Bn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S1),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,b1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new P(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new P,zn=new P,Co=new P,Vn=new P,as=new P,os=new P,eu=new P,Po=new P,Do=new P,Lo=new P,Io=new ut,No=new ut,Uo=new ut;class bn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),zn.subVectors(i,t),Co.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(zn),l=vn.dot(Co),c=zn.dot(zn),h=zn.dot(Co),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Io.setScalar(0),No.setScalar(0),Uo.setScalar(0),Io.fromBufferAttribute(e,t),No.fromBufferAttribute(e,i),Uo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(No,r.y),a.addScaledVector(Uo,r.z),a}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),zn.subVectors(e,t),vn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;as.subVectors(s,i),os.subVectors(r,i),Po.subVectors(e,i);const l=as.dot(Po),c=os.dot(Po);if(l<=0&&c<=0)return t.copy(i);Do.subVectors(e,s);const h=as.dot(Do),u=os.dot(Do);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(as,a);Lo.subVectors(e,r);const d=as.dot(Lo),g=os.dot(Lo);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(os,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(eu,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=a1(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=s0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return rt.workingToColorSpace(Vt.copy(this),e),Math.round(Qe(Vt.r*255,0,255))*65536+Math.round(Qe(Vt.g*255,0,255))*256+Math.round(Qe(Vt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ft){rt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Gr);const i=vo(ri.h,Gr.h,t),s=vo(ri.s,Gr.s,t),r=vo(ri.l,Gr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new He;He.NAMES=s0;let M1=0;class qi extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=zi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xl&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ks extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,$r=new Ve;let w1=0;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}}class r0 extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a0 extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let E1=0;const fn=new _t,Oo=new $t,ls=new P,ln=new Mr,Ys=new Mr,Ut=new P;class bt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?a0:r0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(ln.min,Ys.min),ln.expandByPoint(Ut),Ut.addVectors(ln.max,Ys.max),ln.expandByPoint(Ut)):(ln.expandByPoint(Ys.min),ln.expandByPoint(Ys.max))}ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Ut.add(ls)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new P,l[L]=new P;const c=new P,h=new P,u=new P,f=new Ve,d=new Ve,g=new Ve,_=new P,m=new P;function p(L,E,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[L].add(_),o[E].add(_),o[b].add(_),l[L].add(m),l[E].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,E=S.length;L<E;++L){const b=S[L],D=b.start,k=b.count;for(let V=D,X=D+k;V<X;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new P,v=new P,T=new P,w=new P;function C(L){T.fromBufferAttribute(s,L),w.copy(T);const E=o[L];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(w,E);const D=v.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,E=S.length;L<E;++L){const b=S[L],D=b.start,k=b.count;for(let V=D,X=D+k;V<X;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new _t,Ei=new Er,Wr=new wr,nu=new P,Xr=new P,jr=new P,qr=new P,ko=new P,Yr=new P,iu=new P,Kr=new P;class Pt extends $t{constructor(e=new bt,t=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ko.fromBufferAttribute(u,e),a?Yr.addScaledVector(ko,h):Yr.addScaledVector(ko.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Wr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Wr,nu)===null||Ei.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(tu),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=x;v<T;v+=3){const w=o.getX(v),C=o.getX(v+1),L=o.getX(v+2);s=Zr(this,p,e,i,c,h,u,w,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=Zr(this,a,e,i,c,h,u,S,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=x;v<T;v+=3){const w=v,C=v+1,L=v+2;s=Zr(this,p,e,i,c,h,u,w,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;s=Zr(this,a,e,i,c,h,u,S,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function T1(n,e,t,i,s,r,a,o){let l;if(e.side===Kt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===bi,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:n}}function Zr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Xr),n.getVertexPosition(l,jr),n.getVertexPosition(c,qr);const h=T1(n,e,t,i,Xr,jr,qr,iu);if(h){const u=new P;bn.getBarycoord(iu,Xr,jr,qr,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,l,c,u,new Ve)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,u,new Ve)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};bn.getNormal(Xr,jr,qr,f.normal),h.face=f,h.barycoord=u}return h}class Tr extends bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(_,m,p,S,x,v,T,w,C,L,E){const b=v/C,D=T/L,k=v/2,V=T/2,X=w/2,Y=C+1,j=L+1;let J=0,z=0;const te=new P;for(let Q=0;Q<j;Q++){const be=Q*D-V;for(let $e=0;$e<Y;$e++){const Ze=$e*b-k;te[_]=Ze*S,te[m]=be*x,te[p]=X,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,h.push(te.x,te.y,te.z),u.push($e/C),u.push(1-Q/L),J+=1}}for(let Q=0;Q<L;Q++)for(let be=0;be<C;be++){const $e=f+be+Y*Q,Ze=f+be+Y*(Q+1),et=f+(be+1)+Y*(Q+1),je=f+(be+1)+Y*Q;l.push($e,Ze,je),l.push(Ze,et,je),z+=6}o.addGroup(d,z,E),d+=z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Ds(n[t]);for(const s in i)e[s]=i[s]}return e}function A1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function o0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const R1={clone:Ds,merge:Yt};var C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class l0 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new P,su=new Ve,ru=new Ve;class cn extends l0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,su,ru),t.subVectors(ru,su)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,hs=1;class D1 extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(cs,hs,e,t);s.layers=this.layers,this.add(s);const r=new cn(cs,hs,e,t);r.layers=this.layers,this.add(r);const a=new cn(cs,hs,e,t);a.layers=this.layers,this.add(a);const o=new cn(cs,hs,e,t);o.layers=this.layers,this.add(o);const l=new cn(cs,hs,e,t);l.layers=this.layers,this.add(l);const c=new cn(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class c0 extends Ot{constructor(e=[],t=Rs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L1 extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new c0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tr(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:gi});r.uniforms.tEquirect.value=t;const a=new Pt(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=kt),new D1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class sn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I1={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class N1 extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zo=new P,U1=new P,F1=new qe;class hi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=zo.subVectors(i,t).cross(U1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||F1.getNormalMatrix(e),s=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new wr,O1=new Ve(.5,.5),Jr=new P;class Bc{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],x=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,p-g,T-S).normalize(),s[1].setComponents(c+a,d+h,p+g,T+S).normalize(),s[2].setComponents(c+o,d+u,p+_,T+x).normalize(),s[3].setComponents(c-o,d-u,p-_,T-x).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,p-m,T-v).normalize();else if(s[4].setComponents(c-l,d-f,p-m,T-v).normalize(),t===Dn)s[5].setComponents(c+l,d+f,p+m,T+v).normalize();else if(t===Pa)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=O1.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Jr.x=s.normal.x>0?e.max.x:e.min.x,Jr.y=s.normal.y>0?e.max.y:e.min.y,Jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wi extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new P,Ia=new P,au=new _t,Ks=new Er,Qr=new wr,Vo=new P,ou=new P;class Wa extends $t{constructor(e=new bt,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)La.fromBufferAttribute(t,s-1),Ia.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=La.distanceTo(Ia);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;au.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),x=ea(this,e,Ks,l,p,S,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=ea(this,e,Ks,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=ea(this,e,Ks,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ea(this,e,Ks,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ea(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Ia.fromBufferAttribute(o,r),t.distanceSqToSegment(La,Ia,Vo,ou)>i)return;Vo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Vo);if(!(c<e.near||c>e.far))return{distance:c,point:ou.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const lu=new P,cu=new P;class dr extends Wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)lu.fromBufferAttribute(t,s),cu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lu.distanceTo(cu);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h0 extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hu=new _t,oc=new Er,ta=new wr,na=new P;class k1 extends $t{constructor(e=new bt,t=new h0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;hu.copy(s).invert(),oc.copy(e.ray).applyMatrix4(hu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);na.fromBufferAttribute(u,m),uu(na,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)na.fromBufferAttribute(u,g),uu(na,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uu(n,e,t,i,s,r,a){const o=oc.distanceSqToPoint(n);if(o<t){const l=new P;oc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sr extends Ot{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class u0 extends Ot{constructor(e,t,i=Hi,s,r,a,o=Mn,l=Mn,c,h=cr,u=1){if(h!==cr&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class d0 extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zc extends bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new P,v=new P,T=new P;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],v),d(t[w+2],T),l(x,v,T,S)}function l(S,x,v,T){const w=T+1,C=[];for(let L=0;L<=w;L++){C[L]=[];const E=S.clone().lerp(v,L/w),b=x.clone().lerp(v,L/w),D=w-L;for(let k=0;k<=D;k++)k===0&&L===w?C[L][k]=E:C[L][k]=E.clone().lerp(b,k/D)}for(let L=0;L<w;L++)for(let E=0;E<2*(w-L)-1;E++){const b=Math.floor(E/2);E%2===0?(f(C[L][b+1]),f(C[L+1][b]),f(C[L][b])):(f(C[L][b+1]),f(C[L+1][b+1]),f(C[L+1][b]))}}function c(S){const x=new P;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(S),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const S=new P;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const v=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;a.push(v,1-T)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],v=a[S+2],T=a[S+4],w=Math.max(x,v,T),C=Math.min(x,v,T);w>.9&&C<.1&&(x<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const S=new P,x=new P,v=new P,T=new P,w=new Ve,C=new Ve,L=new Ve;for(let E=0,b=0;E<r.length;E+=9,b+=6){S.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),T.copy(S).add(x).add(v).divideScalar(3);const D=m(T);_(w,b+0,S,D),_(C,b+2,x,D),_(L,b+4,v,D)}}function _(S,x,v,T){T<0&&S.x===1&&(a[x]=S.x-1),v.x===0&&v.z===0&&(a[x]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.vertices,e.indices,e.radius,e.details)}}class Vc extends zc{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class Ar extends bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,v=S+c*(p+1),T=S+1+c*(p+1),w=S+1+c*p;d.push(x,v,w),d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xa extends bt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,d=new P,g=new Ve;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const S=p+m,x=S,v=S+i+1,T=S+i+2,w=S+1;o.push(x,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Si extends bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let v=0;p===0&&a===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const x=h[p][S+1],v=h[p][S],T=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&d.push(x,v,w),(p!==i-1||l<Math.PI)&&d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class f0 extends qi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B1 extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z1 extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class p0 extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ho=new _t,du=new P,fu=new P;class V1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pu=new _t,Zs=new P,Go=new P;class H1 extends V1{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zs),Go.copy(i.position),Go.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Go),i.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),pu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu,i.coordinateSystem,i.reversedDepth)}}class G1 extends p0{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new H1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $1 extends l0{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W1 extends p0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class X1 extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mu=new _t;class j1{constructor(e,t,i=0,s=1/0){this.ray=new Er(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,i=[]){return lc(e,this,i,t),i.sort(gu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)lc(e[s],this,i,t);return i.sort(gu),i}}function gu(n,e){return n.distance-e.distance}function lc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)lc(r[a],e,t,!0)}}let _u=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class q1 extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vu(n,e,t,i){const s=Y1(i);switch(t){case Kd:return n*e;case Jd:return n*e/s.components*s.byteLength;case Nc:return n*e/s.components*s.byteLength;case Qd:return n*e*2/s.components*s.byteLength;case Uc:return n*e*2/s.components*s.byteLength;case Zd:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case Fc:return n*e*4/s.components*s.byteLength;case Sa:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:case Ul:return Math.max(n,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y1(n){switch(n){case Nn:case Xd:return{byteLength:1,components:1};case or:case jd:case br:return{byteLength:2,components:1};case Lc:case Ic:return{byteLength:2,components:4};case Hi:case Dc:case jn:return{byteLength:4,components:1};case qd:case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);function m0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function K1(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J1=`#ifdef USE_ALPHAHASH
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
#endif`,Q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,Ym=`struct PhysicalMaterial {
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
}`,Km=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a2=`#if defined( USE_POINTS_UV )
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
#endif`,o2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`#ifdef USE_MORPHTARGETS
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
#endif`,f2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x2=`#ifdef USE_NORMALMAP
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
#endif`,y2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,F2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,k2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$2=`#ifdef USE_TRANSMISSION
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
#endif`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z2=`uniform sampler2D t2D;
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`#include <common>
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
}`,i3=`#if DEPTH_PACKING == 3200
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
}`,s3=`#define DISTANCE
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
}`,r3=`#define DISTANCE
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
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`uniform float scale;
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
}`,c3=`uniform vec3 diffuse;
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
}`,h3=`#include <common>
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
}`,u3=`uniform vec3 diffuse;
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
}`,d3=`#define LAMBERT
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
}`,f3=`#define LAMBERT
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
}`,p3=`#define MATCAP
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
}`,m3=`#define MATCAP
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
}`,g3=`#define NORMAL
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
}`,_3=`#define NORMAL
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
}`,v3=`#define PHONG
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
}`,x3=`#define PHONG
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
}`,y3=`#define STANDARD
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
}`,b3=`#define STANDARD
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
}`,S3=`#define TOON
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
}`,M3=`#define TOON
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
}`,w3=`uniform float size;
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
}`,E3=`uniform vec3 diffuse;
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
}`,T3=`#include <common>
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
}`,A3=`uniform vec3 color;
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
}`,R3=`uniform float rotation;
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
}`,C3=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Z1,alphahash_pars_fragment:J1,alphamap_fragment:Q1,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:vm,color_vertex:xm,common:ym,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:Mm,displacementmap_vertex:wm,emissivemap_fragment:Em,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Dm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Nm,fog_pars_vertex:Um,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:km,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Hm,lights_toon_fragment:$m,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:jm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Km,lights_fragment_maps:Zm,lights_fragment_end:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:e2,logdepthbuf_pars_vertex:t2,logdepthbuf_vertex:n2,map_fragment:i2,map_pars_fragment:s2,map_particle_fragment:r2,map_particle_pars_fragment:a2,metalnessmap_fragment:o2,metalnessmap_pars_fragment:l2,morphinstance_vertex:c2,morphcolor_vertex:h2,morphnormal_vertex:u2,morphtarget_pars_vertex:d2,morphtarget_vertex:f2,normal_fragment_begin:p2,normal_fragment_maps:m2,normal_pars_fragment:g2,normal_pars_vertex:_2,normal_vertex:v2,normalmap_pars_fragment:x2,clearcoat_normal_fragment_begin:y2,clearcoat_normal_fragment_maps:b2,clearcoat_pars_fragment:S2,iridescence_pars_fragment:M2,opaque_fragment:w2,packing:E2,premultiplied_alpha_fragment:T2,project_vertex:A2,dithering_fragment:R2,dithering_pars_fragment:C2,roughnessmap_fragment:P2,roughnessmap_pars_fragment:D2,shadowmap_pars_fragment:L2,shadowmap_pars_vertex:I2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:F2,skinning_pars_vertex:O2,skinning_vertex:k2,skinnormal_vertex:B2,specularmap_fragment:z2,specularmap_pars_fragment:V2,tonemapping_fragment:H2,tonemapping_pars_fragment:G2,transmission_fragment:$2,transmission_pars_fragment:W2,uv_pars_fragment:X2,uv_pars_vertex:j2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:K2,background_frag:Z2,backgroundCube_vert:J2,backgroundCube_frag:Q2,cube_vert:e3,cube_frag:t3,depth_vert:n3,depth_frag:i3,distanceRGBA_vert:s3,distanceRGBA_frag:r3,equirect_vert:a3,equirect_frag:o3,linedashed_vert:l3,linedashed_frag:c3,meshbasic_vert:h3,meshbasic_frag:u3,meshlambert_vert:d3,meshlambert_frag:f3,meshmatcap_vert:p3,meshmatcap_frag:m3,meshnormal_vert:g3,meshnormal_frag:_3,meshphong_vert:v3,meshphong_frag:x3,meshphysical_vert:y3,meshphysical_frag:b3,meshtoon_vert:S3,meshtoon_frag:M3,points_vert:w3,points_frag:E3,shadow_vert:T3,shadow_frag:A3,sprite_vert:R3,sprite_frag:C3},de={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pn={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Pn.physical={uniforms:Yt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ia={r:0,b:0,g:0},Ai=new Un,P3=new _t;function D3(n,e,t,i,s,r,a){const o=new He(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const T=g(x);T===null?p(o,l):T&&T.isColor&&(p(T,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===$a)?(h===void 0&&(h=new Pt(new Tr(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(P3.makeRotationFromEuler(Ai)),h.material.toneMapped=rt.getTransfer(T.colorSpace)!==ct,(u!==T||f!==T.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pt(new Ar(2,2),new an({name:"BackgroundMaterial",uniforms:Ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(ia,o0(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,v,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:S}}function L3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(b,D,k,V,X){let Y=!1;const j=u(V,k,D);r!==j&&(r=j,c(r.object)),Y=d(b,V,k,X),Y&&g(b,V,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(b,D,k,V),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,k){const V=k.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let Y=X[D.id];Y===void 0&&(Y={},X[D.id]=Y);let j=Y[V];return j===void 0&&(j=f(l()),Y[V]=j),j}function f(b){const D=[],k=[],V=[];for(let X=0;X<t;X++)D[X]=0,k[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:V,object:b,attributes:{},index:null}}function d(b,D,k,V){const X=r.attributes,Y=D.attributes;let j=0;const J=k.getAttributes();for(const z in J)if(J[z].location>=0){const Q=X[z];let be=Y[z];if(be===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),Q===void 0||Q.attribute!==be||be&&Q.data!==be.data)return!0;j++}return r.attributesNum!==j||r.index!==V}function g(b,D,k,V){const X={},Y=D.attributes;let j=0;const J=k.getAttributes();for(const z in J)if(J[z].location>=0){let Q=Y[z];Q===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const be={};be.attribute=Q,Q&&Q.data&&(be.data=Q.data),X[z]=be,j++}r.attributes=X,r.attributesNum=j,r.index=V}function _(){const b=r.newAttributes;for(let D=0,k=b.length;D<k;D++)b[D]=0}function m(b){p(b,0)}function p(b,D){const k=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;k[b]=1,V[b]===0&&(n.enableVertexAttribArray(b),V[b]=1),X[b]!==D&&(n.vertexAttribDivisor(b,D),X[b]=D)}function S(){const b=r.newAttributes,D=r.enabledAttributes;for(let k=0,V=D.length;k<V;k++)D[k]!==b[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function x(b,D,k,V,X,Y,j){j===!0?n.vertexAttribIPointer(b,D,k,X,Y):n.vertexAttribPointer(b,D,k,V,X,Y)}function v(b,D,k,V){_();const X=V.attributes,Y=k.getAttributes(),j=D.defaultAttributeValues;for(const J in Y){const z=Y[J];if(z.location>=0){let te=X[J];if(te===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){const Q=te.normalized,be=te.itemSize,$e=e.get(te);if($e===void 0)continue;const Ze=$e.buffer,et=$e.type,je=$e.bytesPerElement,B=et===n.INT||et===n.UNSIGNED_INT||te.gpuType===Dc;if(te.isInterleavedBufferAttribute){const W=te.data,se=W.stride,O=te.offset;if(W.isInstancedInterleavedBuffer){for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce,W.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ce=0;ce<z.locationSize;ce++)x(z.location+ce,be/z.locationSize,et,Q,se*je,(O+be/z.locationSize*ce)*je,B)}else{if(te.isInstancedBufferAttribute){for(let W=0;W<z.locationSize;W++)p(z.location+W,te.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let W=0;W<z.locationSize;W++)m(z.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let W=0;W<z.locationSize;W++)x(z.location+W,be/z.locationSize,et,Q,be*je,be/z.locationSize*W*je,B)}}else if(j!==void 0){const Q=j[J];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(z.location,Q);break;case 3:n.vertexAttrib3fv(z.location,Q);break;case 4:n.vertexAttrib4fv(z.location,Q);break;default:n.vertexAttrib1fv(z.location,Q)}}}}S()}function T(){L();for(const b in i){const D=i[b];for(const k in D){const V=D[k];for(const X in V)h(V[X].object),delete V[X];delete D[k]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const k in D){const V=D[k];for(const X in V)h(V[X].object),delete V[X];delete D[k]}delete i[b.id]}function C(b){for(const D in i){const k=i[D];if(k[b.id]===void 0)continue;const V=k[b.id];for(const X in V)h(V[X].object),delete V[X];delete k[b.id]}}function L(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function I3(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function N3(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Sn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function U3(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new hi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,x=S*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let T=0;T!==x;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function F3(n){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=Rs:o===Cl&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Cl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new L1(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const xs=4,xu=[.125,.215,.35,.446,.526,.582],Ui=20,$o=new $1,yu=new He;let Wo=null,Xo=0,jo=0,qo=!1;const Di=(1+Math.sqrt(5))/2,us=1/Di,bu=[new P(-Di,us,0),new P(Di,us,0),new P(-us,0,Di),new P(us,0,Di),new P(0,Di,-us),new P(0,Di,us),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],O3=new P;class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=O3}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,jo),this._renderer.xr.enabled=qo,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:br,format:Sn,colorSpace:Ps,depthBuffer:!1},s=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k3(r)),this._blurMaterial=B3(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,s,r){const l=new cn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(yu),u.toneMapping=_i,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new ks({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Pt(new Tr,_);let p=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(yu),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const T=this._cubeSize;sa(s,v*T,x>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bu[(s-r-1)%bu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let S=0;for(let C=0;C<Ui;++C){const L=C/_,E=Math.exp(-L*L/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[s],T=3*v*(s>x-xs?s-x+xs:0),w=4*(this._cubeSize-v);sa(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(u,$o)}}function k3(n){const e=[],t=[],i=[];let s=n;const r=n-xs+1+xu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-xs?l=xu[a-n+xs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,L=w>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];S.set(E,_*g*w),x.set(f,m*g*w);const b=[w,w,w,w,w,w];v.set(b,p*g*w)}const T=new bt;T.setAttribute("position",new Ln(S,_)),T.setAttribute("uv",new Ln(x,m)),T.setAttribute("faceIndex",new Ln(v,p)),e.push(T),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function B3(n,e,t){const i=new Float32Array(Ui),s=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wu(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Eu(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function z3(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Cl,h=l===Rs||l===Cs;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Su(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Su(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function V3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function H3(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const T=S[x+0],w=S[x+1],C=S[x+2];f.push(T,w,w,C,C,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const T=x+0,w=x+1,C=x+2;f.push(T,w,w,C,C,T)}}else return;const m=new(n0(f)?a0:r0)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function G3(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function W3(n,e,t){const i=new WeakMap,s=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*T*4*u),C=new i0(w,v,T,u);C.type=jn,C.needsUpdate=!0;const L=x*4;for(let b=0;b<u;b++){const D=m[b],k=p[b],V=S[b],X=v*T*4*b;for(let Y=0;Y<D.count;Y++){const j=Y*L;d===!0&&(s.fromBufferAttribute(D,Y),w[X+j+0]=s.x,w[X+j+1]=s.y,w[X+j+2]=s.z,w[X+j+3]=0),g===!0&&(s.fromBufferAttribute(k,Y),w[X+j+4]=s.x,w[X+j+5]=s.y,w[X+j+6]=s.z,w[X+j+7]=0),_===!0&&(s.fromBufferAttribute(V,Y),w[X+j+8]=s.x,w[X+j+9]=s.y,w[X+j+10]=s.z,w[X+j+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Ve(v,T)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function X3(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const g0=new Ot,Tu=new u0(1,1),_0=new i0,v0=new m1,x0=new c0,Au=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Du=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ja(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Z3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),Lt(t,i)}}function J3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),Lt(t,i)}}function Q3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Lt(t,i)}}function eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function lg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=t0,r=Tu):r=g0,t.setTexture2D(e||r,s)}function cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||v0,s)}function hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||x0,s)}function ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_0,s)}function dg(n){switch(n){case 5126:return j3;case 35664:return q3;case 35665:return Y3;case 35666:return K3;case 35674:return Z3;case 35675:return J3;case 35676:return Q3;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(n,e){n.uniform1fv(this.addr,e)}function pg(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function mg(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function gg(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function _g(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vg(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xg(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yg(n,e){n.uniform1iv(this.addr,e)}function bg(n,e){n.uniform2iv(this.addr,e)}function Sg(n,e){n.uniform3iv(this.addr,e)}function Mg(n,e){n.uniform4iv(this.addr,e)}function wg(n,e){n.uniform1uiv(this.addr,e)}function Eg(n,e){n.uniform2uiv(this.addr,e)}function Tg(n,e){n.uniform3uiv(this.addr,e)}function Ag(n,e){n.uniform4uiv(this.addr,e)}function Rg(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||g0,r[a])}function Cg(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||v0,r[a])}function Pg(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||x0,r[a])}function Dg(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_0,r[a])}function Lg(n){switch(n){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return Mg;case 5125:return wg;case 36294:return Eg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}}class Ng{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lg(t.type)}}class Ug{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Lu(n,e){n.seq.push(e),n.map[e.id]=e}function Fg(n,e,t){const i=n.name,s=i.length;for(Yo.lastIndex=0;;){const r=Yo.exec(i),a=Yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lu(t,c===void 0?new Ig(o,n,e):new Ng(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ug(o),Lu(t,u)),t=u}}}class Aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Fg(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Og=37297;let kg=0;function Bg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Nu=new qe;function zg(n){rt._getMatrix(Nu,rt.workingColorSpace,n);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ca:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bg(n.getShaderSource(e),o)}else return r}function Vg(n,e){const t=zg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hg(n,e){let t;switch(e){case Hp:t="Linear";break;case Gp:t="Reinhard";break;case $p:t="Cineon";break;case Wp:t="ACESFilmic";break;case jp:t="AgX";break;case qp:t="Neutral";break;case Xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ra=new P;function Gg(){rt.getLuminanceCoefficients(ra);const n=ra.x.toFixed(4),e=ra.y.toFixed(4),t=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Wg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function nr(n){return n!==""}function Fu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(jg,Yg)}const qg=new Map;function Yg(n,e){let t=Ye[e];if(t===void 0){const i=qg.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(Kg,Zg)}function Zg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Jg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e4(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Cs&&(e="ENVMAP_MODE_REFRACTION"),e}function t4(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case zp:e="ENVMAP_BLENDING_MIX";break;case Vp:e="ENVMAP_BLENDING_ADD";break}return e}function n4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function i4(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jg(t),c=Qg(t),h=e4(t),u=t4(t),f=n4(t),d=$g(t),g=Wg(r),_=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ye.tonemapping_pars_fragment:"",t.toneMapping!==_i?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),Gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=cc(a),a=Fu(a,t),a=Ou(a,t),o=cc(o),o=Fu(o,t),o=Ou(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,v=S+p+o,T=Iu(s,s.VERTEX_SHADER,x),w=Iu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(w)||"",Y=k.trim(),j=V.trim(),J=X.trim();let z=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,w);else{const Q=Uu(s,T,"vertex"),be=Uu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+Q+`
`+be)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(j===""||J==="")&&(te=!1);te&&(D.diagnostics={runnable:z,programLog:Y,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(T),s.deleteShader(w),L=new Aa(s,_),E=Xg(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Og)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let s4=0;class r4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new a4(e),t.set(e,i)),i}}class a4{constructor(e){this.id=s4++,this.code=e,this.usedTimes=0}}function o4(n,e,t,i,s,r,a){const o=new kc,l=new r4,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,D,k,V){const X=k.fog,Y=V.geometry,j=E.isMeshStandardMaterial?k.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),z=J&&J.mapping===$a?J.image.height:null,te=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=Q!==void 0?Q.length:0;let $e=0;Y.morphAttributes.position!==void 0&&($e=1),Y.morphAttributes.normal!==void 0&&($e=2),Y.morphAttributes.color!==void 0&&($e=3);let Ze,et,je,B;if(te){const tt=Pn[te];Ze=tt.vertexShader,et=tt.fragmentShader}else Ze=E.vertexShader,et=E.fragmentShader,l.update(E),je=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);const W=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),O=V.isInstancedMesh===!0,ce=V.isBatchedMesh===!0,Be=!!E.map,Ee=!!E.matcap,A=!!J,Le=!!E.aoMap,me=!!E.lightMap,fe=!!E.bumpMap,ge=!!E.normalMap,Ke=!!E.displacementMap,ve=!!E.emissiveMap,Oe=!!E.metalnessMap,wt=!!E.roughnessMap,yt=E.anisotropy>0,R=E.clearcoat>0,y=E.dispersion>0,F=E.iridescence>0,q=E.sheen>0,Z=E.transmission>0,$=yt&&!!E.anisotropyMap,ye=R&&!!E.clearcoatMap,oe=R&&!!E.clearcoatNormalMap,_e=R&&!!E.clearcoatRoughnessMap,Re=F&&!!E.iridescenceMap,re=F&&!!E.iridescenceThicknessMap,pe=q&&!!E.sheenColorMap,Te=q&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,he=!!E.specularColorMap,Xe=!!E.specularIntensityMap,I=Z&&!!E.transmissionMap,ie=Z&&!!E.thicknessMap,le=!!E.gradientMap,Se=!!E.alphaMap,ee=E.alphaTest>0,K=!!E.alphaHash,Ae=!!E.extensions;let We=_i;E.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=n.toneMapping);const ot={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:et,defines:E.defines,customVertexShaderID:je,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ce,batchingColor:ce&&V._colorsTexture!==null,instancing:O,instancingColor:O&&V.instanceColor!==null,instancingMorph:O&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ps,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:Ee,envMap:A,envMapMode:A&&J.mapping,envMapCubeUVHeight:z,aoMap:Le,lightMap:me,bumpMap:fe,normalMap:ge,displacementMap:f&&Ke,emissiveMap:ve,normalMapObjectSpace:ge&&E.normalMapType===Jp,normalMapTangentSpace:ge&&E.normalMapType===e0,metalnessMap:Oe,roughnessMap:wt,anisotropy:yt,anisotropyMap:$,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:y,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:q,sheenColorMap:pe,sheenRoughnessMap:Te,specularMap:Ce,specularColorMap:he,specularIntensityMap:Xe,transmission:Z,transmissionMap:I,thicknessMap:ie,gradientMap:le,opaque:E.transparent===!1&&E.blending===zi&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:ee,alphaHash:K,combine:E.combine,mapUv:Be&&_(E.map.channel),aoMapUv:Le&&_(E.aoMap.channel),lightMapUv:me&&_(E.lightMap.channel),bumpMapUv:fe&&_(E.bumpMap.channel),normalMapUv:ge&&_(E.normalMap.channel),displacementMapUv:Ke&&_(E.displacementMap.channel),emissiveMapUv:ve&&_(E.emissiveMap.channel),metalnessMapUv:Oe&&_(E.metalnessMap.channel),roughnessMapUv:wt&&_(E.roughnessMap.channel),anisotropyMapUv:$&&_(E.anisotropyMap.channel),clearcoatMapUv:ye&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(E.sheenRoughnessMap.channel),specularMapUv:Ce&&_(E.specularMap.channel),specularColorMapUv:he&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ie&&_(E.thicknessMap.channel),alphaMapUv:Se&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||yt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(Be||Se),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:se,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:$e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:ve&&E.emissiveMap.isVideoTexture===!0&&rt.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pn,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)b.push(D),b.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(S(b,E),x(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const b=g[E.type];let D;if(b){const k=Pn[b];D=R1.clone(k.uniforms)}else D=E.uniforms;return D}function T(E,b){let D;for(let k=0,V=h.length;k<V;k++){const X=h[k];if(X.cacheKey===b){D=X,++D.usedTimes;break}}return D===void 0&&(D=new i4(n,b,E,r),h.push(D)),D}function w(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:L}}function l4(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function c4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||c4),i.length>1&&i.sort(f||zu),s.length>1&&s.sort(f||zu)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function h4(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Vu,n.set(i,[a])):s>=r.length?(a=new Vu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function u4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function d4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let f4=0;function p4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m4(n){const e=new u4,t=d4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new _t,a=new _t;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,T=0,w=0,C=0;c.sort(p4);for(let E=0,b=c.length;E<b;E++){const D=c[E],k=D.color,V=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*V,u+=k.g*V,f+=k.b*V;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],V);C++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=D.shadow.matrix,S++}i.directional[d]=j,d++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(k).multiplyScalar(V),j.distance=X,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[_]=j;const J=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,J.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=J.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Y,v++}_++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(k).multiplyScalar(V),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const J=D.shadow,z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=j,g++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(V),j.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=C,i.version=f4++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Hu(n){const e=new m4(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function g4(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Hu(n),e.set(s,[o])):r>=a.length?(o=new Hu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v4=`uniform sampler2D shadow_pass;
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
}`;function x4(n,e,t){let i=new Bc;const s=new Ve,r=new Ve,a=new ut,o=new B1({depthPacking:Zp}),l=new z1,c={},h=t.maxTextureSize,u={[bi]:Kt,[Kt]:bi,[pn]:pn},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:_4,fragmentShader:v4}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(w,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(gi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=p!==Gn&&this.type===Gn,X=p===Gn&&this.type!==Gn;for(let Y=0,j=w.length;Y<j;Y++){const J=w[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const te=z.getFrameExtents();if(s.multiply(te),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||V===!0||X===!0){const be=this.type!==Gn?{minFilter:Mn,magFilter:Mn}:{};z.map!==null&&z.map.dispose(),z.map=new $i(s.x,s.y,be),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Q=z.getViewportCount();for(let be=0;be<Q;be++){const $e=z.getViewport(be);a.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),k.viewport(a),z.updateMatrices(J,be),i=z.getFrustum(),v(C,L,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&S(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,b,D)};function S(w,C){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,L,d,_,null)}function x(w,C,L,E){let b=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=b.uuid,V=C.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let Y=X[V];Y===void 0&&(Y=b.clone(),X[V]=Y,C.addEventListener("dispose",T)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,E===Gn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=n.properties.get(b);k.light=L}return b}function v(w,C,L,E,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const V=e.update(w),X=w.material;if(Array.isArray(X)){const Y=V.groups;for(let j=0,J=Y.length;j<J;j++){const z=Y[j],te=X[z.materialIndex];if(te&&te.visible){const Q=x(w,te,E,b);w.onBeforeShadow(n,w,C,L,V,Q,z),n.renderBufferDirect(L,null,V,Q,w,z),w.onAfterShadow(n,w,C,L,V,Q,z)}}}else if(X.visible){const Y=x(w,X,E,b);w.onBeforeShadow(n,w,C,L,V,Y,null),n.renderBufferDirect(L,null,V,Y,w,null),w.onAfterShadow(n,w,C,L,V,Y,null)}}const k=w.children;for(let V=0,X=k.length;V<X;V++)v(k[V],C,L,E,b)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const E=c[L],b=w.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const y4={[bl]:Sl,[Ml]:Tl,[wl]:Al,[As]:El,[Sl]:bl,[Tl]:Ml,[Al]:wl,[El]:As};function b4(n,e){function t(){let I=!1;const ie=new ut;let le=null;const Se=new ut(0,0,0,0);return{setMask:function(ee){le!==ee&&!I&&(n.colorMask(ee,ee,ee,ee),le=ee)},setLocked:function(ee){I=ee},setClear:function(ee,K,Ae,We,ot){ot===!0&&(ee*=We,K*=We,Ae*=We),ie.set(ee,K,Ae,We),Se.equals(ie)===!1&&(n.clearColor(ee,K,Ae,We),Se.copy(ie))},reset:function(){I=!1,le=null,Se.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,le=null,Se=null,ee=null;return{setReversed:function(K){if(ie!==K){const Ae=e.get("EXT_clip_control");K?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ie=K;const We=ee;ee=null,this.setClear(We)}},getReversed:function(){return ie},setTest:function(K){K?W(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(K){le!==K&&!I&&(n.depthMask(K),le=K)},setFunc:function(K){if(ie&&(K=y4[K]),Se!==K){switch(K){case bl:n.depthFunc(n.NEVER);break;case Sl:n.depthFunc(n.ALWAYS);break;case Ml:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case wl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case Tl:n.depthFunc(n.GREATER);break;case Al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=K}},setLocked:function(K){I=K},setClear:function(K){ee!==K&&(ie&&(K=1-K),n.clearDepth(K),ee=K)},reset:function(){I=!1,le=null,Se=null,ee=null,ie=!1}}}function s(){let I=!1,ie=null,le=null,Se=null,ee=null,K=null,Ae=null,We=null,ot=null;return{setTest:function(tt){I||(tt?W(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(tt){ie!==tt&&!I&&(n.stencilMask(tt),ie=tt)},setFunc:function(tt,mn,Jt){(le!==tt||Se!==mn||ee!==Jt)&&(n.stencilFunc(tt,mn,Jt),le=tt,Se=mn,ee=Jt)},setOp:function(tt,mn,Jt){(K!==tt||Ae!==mn||We!==Jt)&&(n.stencilOp(tt,mn,Jt),K=tt,Ae=mn,We=Jt)},setLocked:function(tt){I=tt},setClear:function(tt){ot!==tt&&(n.clearStencil(tt),ot=tt)},reset:function(){I=!1,ie=null,le=null,Se=null,ee=null,K=null,Ae=null,We=null,ot=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,T=null,w=null,C=new He(0,0,0),L=0,E=!1,b=null,D=null,k=null,V=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=J>=2);let te=null,Q={};const be=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),Ze=new ut().fromArray(be),et=new ut().fromArray($e);function je(I,ie,le,Se){const ee=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<le;Ae++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ie+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return K}const B={};B[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(n.DEPTH_TEST),a.setFunc(As),fe(!1),ge(Oh),W(n.CULL_FACE),Le(gi);function W(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function se(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function O(I,ie){return u[I]!==ie?(n.bindFramebuffer(I,ie),u[I]=ie,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function ce(I,ie){let le=d,Se=!1;if(I){le=f.get(ie),le===void 0&&(le=[],f.set(ie,le));const ee=I.textures;if(le.length!==ee.length||le[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Ae=ee.length;K<Ae;K++)le[K]=n.COLOR_ATTACHMENT0+K;le.length=ee.length,Se=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Se=!0);Se&&n.drawBuffers(le)}function Be(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ee={[Ni]:n.FUNC_ADD,[Mp]:n.FUNC_SUBTRACT,[wp]:n.FUNC_REVERSE_SUBTRACT};Ee[Ep]=n.MIN,Ee[Tp]=n.MAX;const A={[Ap]:n.ZERO,[Rp]:n.ONE,[Cp]:n.SRC_COLOR,[xl]:n.SRC_ALPHA,[Up]:n.SRC_ALPHA_SATURATE,[Ip]:n.DST_COLOR,[Dp]:n.DST_ALPHA,[Pp]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[Np]:n.ONE_MINUS_DST_COLOR,[Lp]:n.ONE_MINUS_DST_ALPHA,[Fp]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[kp]:n.CONSTANT_ALPHA,[Bp]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(I,ie,le,Se,ee,K,Ae,We,ot,tt){if(I===gi){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(W(n.BLEND),_=!0),I!==Sp){if(I!==m||tt!==E){if((p!==Ni||v!==Ni)&&(n.blendEquation(n.FUNC_ADD),p=Ni,v=Ni),tt)switch(I){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rn:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,T=null,w=null,C.set(0,0,0),L=0,m=I,E=tt}return}ee=ee||ie,K=K||le,Ae=Ae||Se,(ie!==p||ee!==v)&&(n.blendEquationSeparate(Ee[ie],Ee[ee]),p=ie,v=ee),(le!==S||Se!==x||K!==T||Ae!==w)&&(n.blendFuncSeparate(A[le],A[Se],A[K],A[Ae]),S=le,x=Se,T=K,w=Ae),(We.equals(C)===!1||ot!==L)&&(n.blendColor(We.r,We.g,We.b,ot),C.copy(We),L=ot),m=I,E=!1}function me(I,ie){I.side===pn?se(n.CULL_FACE):W(n.CULL_FACE);let le=I.side===Kt;ie&&(le=!le),fe(le),I.blending===zi&&I.transparent===!1?Le(gi):Le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Se=I.stencilWrite;o.setTest(Se),Se&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function ge(I){I!==xp?(W(n.CULL_FACE),I!==D&&(I===Oh?n.cullFace(n.BACK):I===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),D=I}function Ke(I){I!==k&&(j&&n.lineWidth(I),k=I)}function ve(I,ie,le){I?(W(n.POLYGON_OFFSET_FILL),(V!==ie||X!==le)&&(n.polygonOffset(ie,le),V=ie,X=le)):se(n.POLYGON_OFFSET_FILL)}function Oe(I){I?W(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function wt(I){I===void 0&&(I=n.TEXTURE0+Y-1),te!==I&&(n.activeTexture(I),te=I)}function yt(I,ie,le){le===void 0&&(te===null?le=n.TEXTURE0+Y-1:le=te);let Se=Q[le];Se===void 0&&(Se={type:void 0,texture:void 0},Q[le]=Se),(Se.type!==I||Se.texture!==ie)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(I,ie||B[I]),Se.type=I,Se.texture=ie)}function R(){const I=Q[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(I){Ze.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function Te(I){et.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function Ce(I,ie){let le=c.get(ie);le===void 0&&(le=new WeakMap,c.set(ie,le));let Se=le.get(I);Se===void 0&&(Se=n.getUniformBlockIndex(ie,I.name),le.set(I,Se))}function he(I,ie){const Se=c.get(ie).get(I);l.get(ie)!==Se&&(n.uniformBlockBinding(ie,Se,I.__bindingPointIndex),l.set(ie,Se))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},te=null,Q={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,T=null,w=null,C=new He(0,0,0),L=0,E=!1,b=null,D=null,k=null,V=null,X=null,Ze.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:se,bindFramebuffer:O,drawBuffers:ce,useProgram:Be,setBlending:Le,setMaterial:me,setFlipSided:fe,setCullFace:ge,setLineWidth:Ke,setPolygonOffset:ve,setScissorTest:Oe,activeTexture:wt,bindTexture:yt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Re,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:_e,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:ye,scissor:pe,viewport:Te,reset:Xe}}function S4(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return d?new OffscreenCanvas(R,y):Da("canvas")}function _(R,y,F){let q=1;const Z=yt(R);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(q*Z.width),ye=Math.floor(q*Z.height);u===void 0&&(u=g($,ye));const oe=y?g($,ye):u;return oe.width=$,oe.height=ye,oe.getContext("2d").drawImage(R,0,0,$,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+ye+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,y,F,q,Z=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),y===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),y===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),y===n.RGBA){const ye=Z?Ca:rt.getTransfer(q);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=ye===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(R,y){let F;return R?y===null||y===Hi||y===lr?F=n.DEPTH24_STENCIL8:y===jn?F=n.DEPTH32F_STENCIL8:y===or&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===lr?F=n.DEPTH_COMPONENT24:y===jn?F=n.DEPTH_COMPONENT32F:y===or&&(F=n.DEPTH_COMPONENT16),F}function T(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==kt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){const y=R.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&h.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),b(y)}function L(R){const y=i.get(R);if(y.__webglInit===void 0)return;const F=R.source,q=f.get(F);if(q){const Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(R),Object.keys(q).length===0&&f.delete(F)}i.remove(R)}function E(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const F=R.source,q=f.get(F);delete q[y.__cacheKey],a.memory.textures--}function b(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,Z=F.length;q<Z;q++){const $=i.get(F[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(R)}let D=0;function k(){D=0}function V(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function X(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Y(R,y){const F=i.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,R,y);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function j(R,y){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){B(F,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function J(R,y){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){B(F,R,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function z(R,y){const F=i.get(R);if(R.version>0&&F.__version!==R.version){W(F,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const te={[Pl]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},Q={[Mn]:n.NEAREST,[Yp]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},be={[Qp]:n.NEVER,[r1]:n.ALWAYS,[e1]:n.LESS,[t0]:n.LEQUAL,[t1]:n.EQUAL,[s1]:n.GEQUAL,[n1]:n.GREATER,[i1]:n.NOTEQUAL};function $e(R,y){if(y.type===jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kt||y.magFilter===_o||y.magFilter===Ur||y.magFilter===di||y.minFilter===kt||y.minFilter===_o||y.minFilter===Ur||y.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,te[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,te[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,te[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mn||y.minFilter!==Ur&&y.minFilter!==di||y.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));const q=y.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const $=X(y);if($!==R.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[$].usedTimes++;const ye=Z[R.__cacheKey];ye!==void 0&&(Z[R.__cacheKey].usedTimes--,ye.usedTimes===0&&E(y)),R.__cacheKey=$,R.__webglTexture=Z[$].texture}return F}function et(R,y,F){return Math.floor(Math.floor(R/F)/y)}function je(R,y,F,q){const $=R.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,F,q,y.data);else{$.sort((re,pe)=>re.start-pe.start);let ye=0;for(let re=1;re<$.length;re++){const pe=$[ye],Te=$[re],Ce=pe.start+pe.count,he=et(Te.start,y.width,4),Xe=et(pe.start,y.width,4);Te.start<=Ce+1&&he===Xe&&et(Te.start+Te.count-1,y.width,4)===he?pe.count=Math.max(pe.count,Te.start+Te.count-pe.start):(++ye,$[ye]=Te)}$.length=ye+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let re=0,pe=$.length;re<pe;re++){const Te=$[re],Ce=Math.floor(Te.start/4),he=Math.ceil(Te.count/4),Xe=Ce%y.width,I=Math.floor(Ce/y.width),ie=he,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Xe,I,ie,le,F,q,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function B(R,y,F){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Ze(R,y),$=y.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+F);const ye=i.get($);if($.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const oe=rt.getPrimaries(rt.workingColorSpace),_e=y.colorSpace===ui?null:rt.getPrimaries(y.colorSpace),Re=y.colorSpace===ui||oe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=_(y.image,!1,s.maxTextureSize);re=wt(y,re);const pe=r.convert(y.format,y.colorSpace),Te=r.convert(y.type);let Ce=x(y.internalFormat,pe,Te,y.colorSpace,y.isVideoTexture);$e(q,y);let he;const Xe=y.mipmaps,I=y.isVideoTexture!==!0,ie=ye.__version===void 0||Z===!0,le=$.dataReady,Se=T(y,re);if(y.isDepthTexture)Ce=v(y.format===hr,y.type),ie&&(I?t.texStorage2D(n.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ce,re.width,re.height,0,pe,Te,null));else if(y.isDataTexture)if(Xe.length>0){I&&ie&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,Xe[0].width,Xe[0].height);for(let ee=0,K=Xe.length;ee<K;ee++)he=Xe[ee],I?le&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,Te,he.data):t.texImage2D(n.TEXTURE_2D,ee,Ce,he.width,he.height,0,pe,Te,he.data);y.generateMipmaps=!1}else I?(ie&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,re.width,re.height),le&&je(y,re,pe,Te)):t.texImage2D(n.TEXTURE_2D,0,Ce,re.width,re.height,0,pe,Te,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ce,Xe[0].width,Xe[0].height,re.depth);for(let ee=0,K=Xe.length;ee<K;ee++)if(he=Xe[ee],y.format!==Sn)if(pe!==null)if(I){if(le)if(y.layerUpdates.size>0){const Ae=vu(he.width,he.height,y.format,y.type);for(const We of y.layerUpdates){const ot=he.data.subarray(We*Ae/he.data.BYTES_PER_ELEMENT,(We+1)*Ae/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,We,he.width,he.height,1,pe,ot)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,re.depth,pe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ce,he.width,he.height,re.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,re.depth,pe,Te,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ce,he.width,he.height,re.depth,0,pe,Te,he.data)}else{I&&ie&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,Xe[0].width,Xe[0].height);for(let ee=0,K=Xe.length;ee<K;ee++)he=Xe[ee],y.format!==Sn?pe!==null?I?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,Te,he.data):t.texImage2D(n.TEXTURE_2D,ee,Ce,he.width,he.height,0,pe,Te,he.data)}else if(y.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ce,re.width,re.height,re.depth),le)if(y.layerUpdates.size>0){const ee=vu(re.width,re.height,y.format,y.type);for(const K of y.layerUpdates){const Ae=re.data.subarray(K*ee/re.data.BYTES_PER_ELEMENT,(K+1)*ee/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,pe,Te,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,Te,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,pe,Te,re.data);else if(y.isData3DTexture)I?(ie&&t.texStorage3D(n.TEXTURE_3D,Se,Ce,re.width,re.height,re.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,Te,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,pe,Te,re.data);else if(y.isFramebufferTexture){if(ie)if(I)t.texStorage2D(n.TEXTURE_2D,Se,Ce,re.width,re.height);else{let ee=re.width,K=re.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ce,ee,K,0,pe,Te,null),ee>>=1,K>>=1}}else if(Xe.length>0){if(I&&ie){const ee=yt(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ce,ee.width,ee.height)}for(let ee=0,K=Xe.length;ee<K;ee++)he=Xe[ee],I?le&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,pe,Te,he):t.texImage2D(n.TEXTURE_2D,ee,Ce,pe,Te,he);y.generateMipmaps=!1}else if(I){if(ie){const ee=yt(re);t.texStorage2D(n.TEXTURE_2D,Se,Ce,ee.width,ee.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Te,re)}else t.texImage2D(n.TEXTURE_2D,0,Ce,pe,Te,re);m(y)&&p(q),ye.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function W(R,y,F){if(y.image.length!==6)return;const q=Ze(R,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const $=i.get(Z);if(Z.version!==$.__version||q===!0){t.activeTexture(n.TEXTURE0+F);const ye=rt.getPrimaries(rt.workingColorSpace),oe=y.colorSpace===ui?null:rt.getPrimaries(y.colorSpace),_e=y.colorSpace===ui||ye===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!Re&&!re?pe[K]=_(y.image[K],!0,s.maxCubemapSize):pe[K]=re?y.image[K].image:y.image[K],pe[K]=wt(y,pe[K]);const Te=pe[0],Ce=r.convert(y.format,y.colorSpace),he=r.convert(y.type),Xe=x(y.internalFormat,Ce,he,y.colorSpace),I=y.isVideoTexture!==!0,ie=$.__version===void 0||q===!0,le=Z.dataReady;let Se=T(y,Te);$e(n.TEXTURE_CUBE_MAP,y);let ee;if(Re){I&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Xe,Te.width,Te.height);for(let K=0;K<6;K++){ee=pe[K].mipmaps;for(let Ae=0;Ae<ee.length;Ae++){const We=ee[Ae];y.format!==Sn?Ce!==null?I?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,0,0,We.width,We.height,Ce,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,0,0,We.width,We.height,Ce,he,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,Xe,We.width,We.height,0,Ce,he,We.data)}}}else{if(ee=y.mipmaps,I&&ie){ee.length>0&&Se++;const K=yt(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Xe,K.width,K.height)}for(let K=0;K<6;K++)if(re){I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Ce,he,pe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,pe[K].width,pe[K].height,0,Ce,he,pe[K].data);for(let Ae=0;Ae<ee.length;Ae++){const ot=ee[Ae].image[K].image;I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,0,0,ot.width,ot.height,Ce,he,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,Xe,ot.width,ot.height,0,Ce,he,ot.data)}}else{I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,he,pe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Ce,he,pe[K]);for(let Ae=0;Ae<ee.length;Ae++){const We=ee[Ae];I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,0,0,Ce,he,We.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,Xe,Ce,he,We.image[K])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),$.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function se(R,y,F,q,Z,$){const ye=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),_e=x(F.internalFormat,ye,oe,F.colorSpace),Re=i.get(y),re=i.get(F);if(re.__renderTarget=y,!Re.__hasExternalTextures){const pe=Math.max(1,y.width>>$),Te=Math.max(1,y.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,_e,pe,Te,y.depth,0,ye,oe,null):t.texImage2D(Z,$,_e,pe,Te,0,ye,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ve(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,re.__webglTexture,0,Ke(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,re.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(R,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,$=v(y.stencilBuffer,Z),ye=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ke(y);ve(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,$,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,R)}else{const q=y.textures;for(let Z=0;Z<q.length;Z++){const $=q[Z],ye=r.convert($.format,$.colorSpace),oe=r.convert($.type),_e=x($.internalFormat,ye,oe,$.colorSpace),Re=Ke(y);F&&ve(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,_e,y.width,y.height):ve(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,_e,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_e,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const Z=q.__webglTexture,$=Ke(y);if(y.depthTexture.format===cr)ve(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===hr)ve(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Be(R){const y=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?ce(y.__webglFramebuffer[0],R):ce(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),O(y.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),O(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,y,F){const q=i.get(R);y!==void 0&&se(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Be(R)}function A(R){const y=R.texture,F=i.get(R),q=i.get(y);R.addEventListener("dispose",C);const Z=R.textures,$=R.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)F.__webglFramebuffer[oe][_e]=n.createFramebuffer()}else F.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)F.__webglFramebuffer[oe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ye)for(let oe=0,_e=Z.length;oe<_e;oe++){const Re=i.get(Z[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const _e=Z[oe];F.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const Re=r.convert(_e.format,_e.colorSpace),re=r.convert(_e.type),pe=x(_e.internalFormat,Re,re,_e.colorSpace,R.isXRRenderTarget===!0),Te=Ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),O(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$e(n.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)se(F.__webglFramebuffer[oe][_e],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e);else se(F.__webglFramebuffer[oe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,_e=Z.length;oe<_e;oe++){const Re=Z[oe],re=i.get(Re);let pe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),$e(pe,Re),se(F.__webglFramebuffer,R,Re,n.COLOR_ATTACHMENT0+oe,pe,0),m(Re)&&p(pe)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),$e(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)se(F.__webglFramebuffer[_e],R,y,n.COLOR_ATTACHMENT0,oe,_e);else se(F.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,oe,0);m(y)&&p(oe),t.unbindTexture()}R.depthBuffer&&Be(R)}function Le(R){const y=R.textures;for(let F=0,q=y.length;F<q;F++){const Z=y[F];if(m(Z)){const $=S(R),ye=i.get(Z).__webglTexture;t.bindTexture($,ye),p($),t.unbindTexture()}}}const me=[],fe=[];function ge(R){if(R.samples>0){if(ve(R)===!1){const y=R.textures,F=R.width,q=R.height;let Z=n.COLOR_BUFFER_BIT;const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),oe=y.length>1;if(oe)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const _e=R.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const re=i.get(y[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),l===!0&&(me.length=0,fe.length=0,me.push(n.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(me.push($),fe.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const re=i.get(y[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ke(R){return Math.min(s.maxSamples,R.samples)}function ve(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Oe(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function wt(R,y){const F=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ps&&F!==ui&&(rt.getTransfer(F)===ct?(q!==Sn||Z!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Ee,this.setupRenderTarget=A,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ve}function M4(n,e){function t(i,s=ui){let r;const a=rt.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xd)return n.BYTE;if(i===jd)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Dc)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===br)return n.HALF_FLOAT;if(i===Kd)return n.ALPHA;if(i===Zd)return n.RGB;if(i===Sn)return n.RGBA;if(i===cr)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===Jd)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===Qd)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===Sa||i===Ma||i===wa||i===Ea)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Il||i===Nl||i===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Ol||i===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fl||i===Ol)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bl||i===zl||i===Vl||i===Hl||i===Gl||i===$l||i===Wl||i===Xl||i===jl||i===ql||i===Yl||i===Kl||i===Zl||i===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const w4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E4=`
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

}`;class T4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new d0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new an({vertexShader:w4,fragmentShader:E4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A4 extends ji{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new T4,p={},S=t.getContextAttributes();let x=null,v=null;const T=[],w=[],C=new Ve;let L=null;const E=new cn;E.viewport=new ut;const b=new cn;b.viewport=new ut;const D=[E,b],k=new X1;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=T[B];return W===void 0&&(W=new Bo,T[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=T[B];return W===void 0&&(W=new Bo,T[B]=W),W.getGripSpace()},this.getHand=function(B){let W=T[B];return W===void 0&&(W=new Bo,T[B]=W),W.getHandSpace()};function Y(B){const W=w.indexOf(B.inputSource);if(W===-1)return;const se=T[W];se!==void 0&&(se.update(B.inputSource,B.frame,c||a),se.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",J);for(let B=0;B<T.length;B++){const W=w[B];W!==null&&(w[B]=null,T[B].disconnect(W))}V=null,X=null,m.reset();for(const B in p)delete p[B];e.setRenderTarget(x),d=null,f=null,u=null,s=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",j),s.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,O=null,ce=null;S.depth&&(ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?hr:cr,O=S.stencil?lr:Hi);const Be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new $i(f.textureWidth,f.textureHeight,{format:Sn,type:Nn,depthTexture:new u0(f.textureWidth,f.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $i(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(B){for(let W=0;W<B.removed.length;W++){const se=B.removed[W],O=w.indexOf(se);O>=0&&(w[O]=null,T[O].disconnect(se))}for(let W=0;W<B.added.length;W++){const se=B.added[W];let O=w.indexOf(se);if(O===-1){for(let Be=0;Be<T.length;Be++)if(Be>=w.length){w.push(se),O=Be;break}else if(w[Be]===null){w[Be]=se,O=Be;break}if(O===-1)break}const ce=T[O];ce&&ce.connect(se)}}const z=new P,te=new P;function Q(B,W,se){z.setFromMatrixPosition(W.matrixWorld),te.setFromMatrixPosition(se.matrixWorld);const O=z.distanceTo(te),ce=W.projectionMatrix.elements,Be=se.projectionMatrix.elements,Ee=ce[14]/(ce[10]-1),A=ce[14]/(ce[10]+1),Le=(ce[9]+1)/ce[5],me=(ce[9]-1)/ce[5],fe=(ce[8]-1)/ce[0],ge=(Be[8]+1)/Be[0],Ke=Ee*fe,ve=Ee*ge,Oe=O/(-fe+ge),wt=Oe*-fe;if(W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(wt),B.translateZ(Oe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ce[10]===-1)B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const yt=Ee+Oe,R=A+Oe,y=Ke-wt,F=ve+(O-wt),q=Le*A/R*yt,Z=me*A/R*yt;B.projectionMatrix.makePerspective(y,F,q,Z,yt,R),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function be(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let W=B.near,se=B.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(se=m.depthFar)),k.near=b.near=E.near=W,k.far=b.far=E.far=se,(V!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,X=k.far),k.layers.mask=B.layers.mask|6,E.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const O=B.parent,ce=k.cameras;be(k,O);for(let Be=0;Be<ce.length;Be++)be(ce[Be],O);ce.length===2?Q(k,E,b):k.projectionMatrix.copy(E.projectionMatrix),$e(B,k,O)};function $e(B,W,se){se===null?B.matrix.copy(W.matrixWorld):(B.matrix.copy(se.matrixWorld),B.matrix.invert(),B.matrix.multiply(W.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ac*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(B){return p[B]};let Ze=null;function et(B,W){if(h=W.getViewerPose(c||a),g=W,h!==null){const se=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let O=!1;se.length!==k.cameras.length&&(k.cameras.length=0,O=!0);for(let A=0;A<se.length;A++){const Le=se[A];let me=null;if(d!==null)me=d.getViewport(Le);else{const ge=u.getViewSubImage(f,Le);me=ge.viewport,A===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let fe=D[A];fe===void 0&&(fe=new cn,fe.layers.enable(A),fe.viewport=new ut,D[A]=fe),fe.matrix.fromArray(Le.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Le.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(me.x,me.y,me.width,me.height),A===0&&(k.matrix.copy(fe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),O===!0&&k.cameras.push(fe)}const ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const A=u.getDepthInformation(se[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(ce&&ce.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let A=0;A<se.length;A++){const Le=se[A].camera;if(Le){let me=p[Le];me||(me=new d0,p[Le]=me);const fe=u.getCameraImage(Le);me.sourceTexture=fe}}}}for(let se=0;se<T.length;se++){const O=w[se],ce=T[se];O!==null&&ce!==void 0&&ce.update(O,W,c||a)}Ze&&Ze(B,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const je=new m0;je.setAnimationLoop(et),this.setAnimationLoop=function(B){Ze=B},this.dispose=function(){}}}const Ri=new Un,R4=new _t;function C4(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,o0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(R4.makeRotationFromEuler(Ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P4(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;i.uniformBlockBinding(S,v)}function c(S,x){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(S,T);const w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function h(S){const x=u();S.__bindingPointIndex=x;const v=n.createBuffer(),T=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=s[S.id],v=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,C=v.length;w<C;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,b=L.length;E<b;E++){const D=L[E];if(d(D,w,E,T)===!0){const k=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let Y=0;Y<V.length;Y++){const j=V[Y],J=_(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,k+X,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,x,v,T){const w=S.value,C=x+"_"+v;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const L=T[C];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[C]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(S){const x=S.uniforms;let v=0;const T=16;for(let C=0,L=x.length;C<L;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,D=E.length;b<D;b++){const k=E[b],V=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Y=V.length;X<Y;X++){const j=V[X],J=_(j),z=v%T,te=z%J.boundary,Q=z+te;v+=te,Q!==0&&T-Q<J.storage&&(v+=T-Q),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=J.storage}}}const w=v%T;return w>0&&(v+=T-w),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class D4{constructor(e={}){const{canvas:t=l1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Ft;let w=0,C=0,L=null,E=-1,b=null;const D=new ut,k=new ut;let V=null;const X=new He(0);let Y=0,j=t.width,J=t.height,z=1,te=null,Q=null;const be=new ut(0,0,j,J),$e=new ut(0,0,j,J);let Ze=!1;const et=new Bc;let je=!1,B=!1;const W=new _t,se=new P,O=new ut,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Ee(){return L===null?z:1}let A=i;function Le(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ee,!1),A===null){const N="webgl2";if(A=Le(N,M),A===null)throw Le(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let me,fe,ge,Ke,ve,Oe,wt,yt,R,y,F,q,Z,$,ye,oe,_e,Re,re,pe,Te,Ce,he,Xe;function I(){me=new V3(A),me.init(),Ce=new M4(A,me),fe=new N3(A,me,e,Ce),ge=new b4(A,me),fe.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),Ke=new $3(A),ve=new l4,Oe=new S4(A,me,ge,ve,fe,Ce,Ke),wt=new F3(v),yt=new z3(v),R=new K1(A),he=new L3(A,R),y=new H3(A,R,Ke,he),F=new X3(A,y,R,Ke),re=new W3(A,fe,Oe),oe=new U3(ve),q=new o4(v,wt,yt,me,fe,he,oe),Z=new C4(v,ve),$=new h4,ye=new g4(me),Re=new D3(v,wt,yt,ge,F,d,l),_e=new x4(v,F,fe),Xe=new P4(A,Ke,fe,ge),pe=new I3(A,me,Ke),Te=new G3(A,me,Ke),Ke.programs=q.programs,v.capabilities=fe,v.extensions=me,v.properties=ve,v.renderLists=$,v.shadowMap=_e,v.state=ge,v.info=Ke}I();const ie=new A4(v,A);this.xr=ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(j,J,!1))},this.getSize=function(M){return M.set(j,J)},this.setSize=function(M,N,G=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,J=N,t.width=Math.floor(M*z),t.height=Math.floor(N*z),G===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(j*z,J*z).floor()},this.setDrawingBufferSize=function(M,N,G){j=M,J=N,z=G,t.width=Math.floor(M*G),t.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,N,G,H){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,N,G,H),ge.viewport(D.copy(be).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,N,G,H){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,N,G,H),ge.scissor(k.copy($e).multiplyScalar(z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){ge.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){te=M},this.setTransparentSort=function(M){Q=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,G=!0){let H=0;if(M){let U=!1;if(L!==null){const ne=L.texture.format;U=ne===Fc||ne===Uc||ne===Nc}if(U){const ne=L.texture.type,ue=ne===Nn||ne===Hi||ne===or||ne===lr||ne===Lc||ne===Ic,Me=Re.getClearColor(),xe=Re.getClearAlpha(),Ne=Me.r,Ge=Me.g,De=Me.b;ue?(g[0]=Ne,g[1]=Ge,g[2]=De,g[3]=xe,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Ne,_[1]=Ge,_[2]=De,_[3]=xe,A.clearBufferiv(A.COLOR,0,_))}else H|=A.COLOR_BUFFER_BIT}N&&(H|=A.DEPTH_BUFFER_BIT),G&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Re.dispose(),$.dispose(),ye.dispose(),ve.dispose(),wt.dispose(),yt.dispose(),F.dispose(),he.dispose(),Xe.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Jt),ie.removeEventListener("sessionend",Cr),Bt.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=Ke.autoReset,N=_e.enabled,G=_e.autoUpdate,H=_e.needsUpdate,U=_e.type;I(),Ke.autoReset=M,_e.enabled=N,_e.autoUpdate=G,_e.needsUpdate=H,_e.type=U}function ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){const N=M.target;N.removeEventListener("dispose",K),Ae(N)}function Ae(M){We(M),ve.remove(M)}function We(M){const N=ve.get(M).programs;N!==void 0&&(N.forEach(function(G){q.releaseProgram(G)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,H,U,ne){N===null&&(N=ce);const ue=U.isMesh&&U.matrixWorld.determinant()<0,Me=Hs(M,N,G,H,U);ge.setMaterial(H,ue);let xe=G.index,Ne=1;if(H.wireframe===!0){if(xe=y.getWireframeAttribute(G),xe===void 0)return;Ne=2}const Ge=G.drawRange,De=G.attributes.position;let Je=Ge.start*Ne,st=(Ge.start+Ge.count)*Ne;ne!==null&&(Je=Math.max(Je,ne.start*Ne),st=Math.min(st,(ne.start+ne.count)*Ne)),xe!==null?(Je=Math.max(Je,0),st=Math.min(st,xe.count)):De!=null&&(Je=Math.max(Je,0),st=Math.min(st,De.count));const vt=st-Je;if(vt<0||vt===1/0)return;he.setup(U,H,Me,G,xe);let lt,it=pe;if(xe!==null&&(lt=R.get(xe),it=Te,it.setIndex(lt)),U.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Ee()),it.setMode(A.LINES)):it.setMode(A.TRIANGLES);else if(U.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),ge.setLineWidth(Ie*Ee()),U.isLineSegments?it.setMode(A.LINES):U.isLineLoop?it.setMode(A.LINE_LOOP):it.setMode(A.LINE_STRIP)}else U.isPoints?it.setMode(A.POINTS):U.isSprite&&it.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ie=U._multiDrawStarts,pt=U._multiDrawCounts,nt=U._multiDrawCount,Wt=xe?R.get(xe).bytesPerElement:1,ei=ve.get(H).currentProgram.getUniforms();for(let Xt=0;Xt<nt;Xt++)ei.setValue(A,"_gl_DrawID",Xt),it.render(Ie[Xt]/Wt,pt[Xt])}else if(U.isInstancedMesh)it.renderInstances(Je,vt,U.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pt=Math.min(G.instanceCount,Ie);it.renderInstances(Je,vt,pt)}else it.render(Je,vt)};function ot(M,N,G){M.transparent===!0&&M.side===pn&&M.forceSinglePass===!1?(M.side=Kt,M.needsUpdate=!0,Qn(M,N,G),M.side=bi,M.needsUpdate=!0,Qn(M,N,G),M.side=pn):Qn(M,N,G)}this.compile=function(M,N,G=null){G===null&&(G=M),p=ye.get(G),p.init(N),x.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==G&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const Me=ne[ue];ot(Me,G,U),H.add(Me)}else ot(ne,G,U),H.add(ne)}),p=x.pop(),H},this.compileAsync=function(M,N,G=null){const H=this.compile(M,N,G);return new Promise(U=>{function ne(){if(H.forEach(function(ue){ve.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){U(M);return}setTimeout(ne,10)}me.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let tt=null;function mn(M){tt&&tt(M)}function Jt(){Bt.stop()}function Cr(){Bt.start()}const Bt=new m0;Bt.setAnimationLoop(mn),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(M){tt=M,ie.setAnimationLoop(M),M===null?Bt.stop():Bt.start()},ie.addEventListener("sessionstart",Jt),ie.addEventListener("sessionend",Cr),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,N,L),p=ye.get(M,x.length),p.init(N),x.push(p),W.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(W,Dn,N.reversedDepth),B=this.localClippingEnabled,je=oe.init(this.clippingPlanes,B),m=$.get(M,S.length),m.init(),S.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&Yi(ne,N,-1/0,v.sortObjects)}Yi(M,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,Q),Be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Be&&Re.addToRenderList(m,M),this.info.render.frame++,je===!0&&oe.beginShadows();const G=p.state.shadowsArray;_e.render(G,M,N),je===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ne=N.cameras;if(U.length>0)for(let ue=0,Me=ne.length;ue<Me;ue++){const xe=ne[ue];Ki(H,U,M,xe)}Be&&Re.render(M);for(let ue=0,Me=ne.length;ue<Me;ue++){const xe=ne[ue];Pr(m,M,xe,xe.viewport)}}else U.length>0&&Ki(H,U,M,N),Be&&Re.render(M),Pr(m,M,N);L!==null&&C===0&&(Oe.updateMultisampleRenderTarget(L),Oe.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(v,M,N),he.resetDefaultState(),E=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],je===!0&&oe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Yi(M,N,G,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||et.intersectsSprite(M)){H&&O.setFromMatrixPosition(M.matrixWorld).applyMatrix4(W);const ue=F.update(M),Me=M.material;Me.visible&&m.push(M,ue,Me,G,O.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||et.intersectsObject(M))){const ue=F.update(M),Me=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),O.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),O.copy(ue.boundingSphere.center)),O.applyMatrix4(M.matrixWorld).applyMatrix4(W)),Array.isArray(Me)){const xe=ue.groups;for(let Ne=0,Ge=xe.length;Ne<Ge;Ne++){const De=xe[Ne],Je=Me[De.materialIndex];Je&&Je.visible&&m.push(M,ue,Je,G,O.z,De)}}else Me.visible&&m.push(M,ue,Me,G,O.z,null)}}const ne=M.children;for(let ue=0,Me=ne.length;ue<Me;ue++)Yi(ne[ue],N,G,H)}function Pr(M,N,G,H){const U=M.opaque,ne=M.transmissive,ue=M.transparent;p.setupLightsView(G),je===!0&&oe.setGlobalState(v.clippingPlanes,G),H&&ge.viewport(D.copy(H)),U.length>0&&Jn(U,N,G),ne.length>0&&Jn(ne,N,G),ue.length>0&&Jn(ue,N,G),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ki(M,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new $i(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?br:Nn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ne=p.state.transmissionRenderTarget[H.id],ue=H.viewport||D;ne.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);const Me=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ne=v.getActiveMipmapLevel();v.setRenderTarget(ne),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Be&&Re.render(G);const Ge=v.toneMapping;v.toneMapping=_i;const De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),je===!0&&oe.setGlobalState(v.clippingPlanes,H),Jn(M,G,H),Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne),me.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let st=0,vt=N.length;st<vt;st++){const lt=N[st],it=lt.object,Ie=lt.geometry,pt=lt.material,nt=lt.group;if(pt.side===pn&&it.layers.test(H.layers)){const Wt=pt.side;pt.side=Kt,pt.needsUpdate=!0,zs(it,G,H,Ie,pt,nt),pt.side=Wt,pt.needsUpdate=!0,Je=!0}}Je===!0&&(Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne))}v.setRenderTarget(Me,xe,Ne),v.setClearColor(X,Y),De!==void 0&&(H.viewport=De),v.toneMapping=Ge}function Jn(M,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=M.length;U<ne;U++){const ue=M[U],Me=ue.object,xe=ue.geometry,Ne=ue.group;let Ge=ue.material;Ge.allowOverride===!0&&H!==null&&(Ge=H),Me.layers.test(G.layers)&&zs(Me,N,G,xe,Ge,Ne)}}function zs(M,N,G,H,U,ne){M.onBeforeRender(v,N,G,H,U,ne),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,N,G,H,M,ne),U.transparent===!0&&U.side===pn&&U.forceSinglePass===!1?(U.side=Kt,U.needsUpdate=!0,v.renderBufferDirect(G,N,H,U,M,ne),U.side=bi,U.needsUpdate=!0,v.renderBufferDirect(G,N,H,U,M,ne),U.side=pn):v.renderBufferDirect(G,N,H,U,M,ne),M.onAfterRender(v,N,G,H,U,ne)}function Qn(M,N,G){N.isScene!==!0&&(N=ce);const H=ve.get(M),U=p.state.lights,ne=p.state.shadowsArray,ue=U.state.version,Me=q.getParameters(M,U.state,ne,N,G),xe=q.getProgramCacheKey(Me);let Ne=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?yt:wt).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",K),Ne=new Map,H.programs=Ne);let Ge=Ne.get(xe);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===ue)return Zi(M,Me),Ge}else Me.uniforms=q.getUniforms(M),M.onBeforeCompile(Me,v),Ge=q.acquireProgram(Me,xe),Ne.set(xe,Ge),H.uniforms=Me.uniforms;const De=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=oe.uniform),Zi(M,Me),H.needsLights=Dr(M),H.lightsStateVersion=ue,H.needsLights&&(De.ambientLightColor.value=U.state.ambient,De.lightProbe.value=U.state.probe,De.directionalLights.value=U.state.directional,De.directionalLightShadows.value=U.state.directionalShadow,De.spotLights.value=U.state.spot,De.spotLightShadows.value=U.state.spotShadow,De.rectAreaLights.value=U.state.rectArea,De.ltc_1.value=U.state.rectAreaLTC1,De.ltc_2.value=U.state.rectAreaLTC2,De.pointLights.value=U.state.point,De.pointLightShadows.value=U.state.pointShadow,De.hemisphereLights.value=U.state.hemi,De.directionalShadowMap.value=U.state.directionalShadowMap,De.directionalShadowMatrix.value=U.state.directionalShadowMatrix,De.spotShadowMap.value=U.state.spotShadowMap,De.spotLightMatrix.value=U.state.spotLightMatrix,De.spotLightMap.value=U.state.spotLightMap,De.pointShadowMap.value=U.state.pointShadowMap,De.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Vs(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Aa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Zi(M,N){const G=ve.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Hs(M,N,G,H,U){N.isScene!==!0&&(N=ce),Oe.resetTextureUnits();const ne=N.fog,ue=H.isMeshStandardMaterial?N.environment:null,Me=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ps,xe=(H.isMeshStandardMaterial?yt:wt).get(H.envMap||ue),Ne=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,st=!!G.morphAttributes.color;let vt=_i;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=v.toneMapping);const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=lt!==void 0?lt.length:0,Ie=ve.get(H),pt=p.state.lights;if(je===!0&&(B===!0||M!==b)){const At=M===b&&H.id===E;oe.setState(H,M,At)}let nt=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==pt.state.version||Ie.outputColorSpace!==Me||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==xe||H.fog===!0&&Ie.fog!==ne||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Ge||Ie.morphTargets!==De||Ie.morphNormals!==Je||Ie.morphColors!==st||Ie.toneMapping!==vt||Ie.morphTargetsCount!==it)&&(nt=!0):(nt=!0,Ie.__version=H.version);let Wt=Ie.currentProgram;nt===!0&&(Wt=Qn(H,N,U));let ei=!1,Xt=!1,En=!1;const mt=Wt.getUniforms(),It=Ie.uniforms;if(ge.useProgram(Wt.program)&&(ei=!0,Xt=!0,En=!0),H.id!==E&&(E=H.id,Xt=!0),ei||b!==M){ge.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(A,"projectionMatrix",M.projectionMatrix),mt.setValue(A,"viewMatrix",M.matrixWorldInverse);const Nt=mt.map.cameraPosition;Nt!==void 0&&Nt.setValue(A,se.setFromMatrixPosition(M.matrixWorld)),fe.logarithmicDepthBuffer&&mt.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Xt=!0,En=!0)}if(U.isSkinnedMesh){mt.setOptional(A,U,"bindMatrix"),mt.setOptional(A,U,"bindMatrixInverse");const At=U.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),mt.setValue(A,"boneTexture",At.boneTexture,Oe))}U.isBatchedMesh&&(mt.setOptional(A,U,"batchingTexture"),mt.setValue(A,"batchingTexture",U._matricesTexture,Oe),mt.setOptional(A,U,"batchingIdTexture"),mt.setValue(A,"batchingIdTexture",U._indirectTexture,Oe),mt.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(A,"batchingColorTexture",U._colorsTexture,Oe));const jt=G.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&re.update(U,G,Wt),(Xt||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,mt.setValue(A,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(It.envMap.value=xe,It.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(It.envMapIntensity.value=N.environmentIntensity),Xt&&(mt.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&Gs(It,En),ne&&H.fog===!0&&Z.refreshFogUniforms(It,ne),Z.refreshMaterialUniforms(It,H,z,J,p.state.transmissionRenderTarget[M.id]),Aa.upload(A,Vs(Ie),It,Oe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Aa.upload(A,Vs(Ie),It,Oe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(A,"center",U.center),mt.setValue(A,"modelViewMatrix",U.modelViewMatrix),mt.setValue(A,"normalMatrix",U.normalMatrix),mt.setValue(A,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const At=H.uniformsGroups;for(let Nt=0,$s=At.length;Nt<$s;Nt++){const Fn=At[Nt];Xe.update(Fn,Wt),Xe.bind(Fn,Wt)}}return Wt}function Gs(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Dr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,N,G){const H=ve.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ve.get(M.texture).__webglTexture=N,ve.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const G=ve.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const so=A.createFramebuffer();this.setRenderTarget=function(M,N=0,G=0){L=M,w=N,C=G;let H=!0,U=null,ne=!1,ue=!1;if(M){const xe=ve.get(M);if(xe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(xe.__hasExternalTextures)Oe.rebindTextures(M,ve.get(M.texture).__webglTexture,ve.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const De=M.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ue=!0);const Ge=ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?U=Ge[N][G]:U=Ge[N],ne=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?U=ve.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?U=Ge[G]:U=Ge,D.copy(M.viewport),k.copy(M.scissor),V=M.scissorTest}else D.copy(be).multiplyScalar(z).floor(),k.copy($e).multiplyScalar(z).floor(),V=Ze;if(G!==0&&(U=so),ge.bindFramebuffer(A.FRAMEBUFFER,U)&&H&&ge.drawBuffers(M,U),ge.viewport(D),ge.scissor(k),ge.setScissorTest(V),ne){const xe=ve.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,G)}else if(ue){const xe=N;for(let Ne=0;Ne<M.textures.length;Ne++){const Ge=ve.get(M.textures[Ne]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ne,Ge.__webglTexture,G,xe)}}else if(M!==null&&G!==0){const xe=ve.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xe.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(M,N,G,H,U,ne,ue,Me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){ge.bindFramebuffer(A.FRAMEBUFFER,xe);try{const Ne=M.textures[Me],Ge=Ne.format,De=Ne.type;if(!fe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&G>=0&&G<=M.height-U&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Me),A.readPixels(N,G,H,U,Ce.convert(Ge),Ce.convert(De),ne))}finally{const Ne=L!==null?ve.get(L).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,H,U,ne,ue,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe)if(N>=0&&N<=M.width-H&&G>=0&&G<=M.height-U){ge.bindFramebuffer(A.FRAMEBUFFER,xe);const Ne=M.textures[Me],Ge=Ne.format,De=Ne.type;if(!fe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Je),A.bufferData(A.PIXEL_PACK_BUFFER,ne.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Me),A.readPixels(N,G,H,U,Ce.convert(Ge),Ce.convert(De),0);const st=L!==null?ve.get(L).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,st);const vt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await c1(A,vt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Je),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ne),A.deleteBuffer(Je),A.deleteSync(vt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,G=0){const H=Math.pow(2,-G),U=Math.floor(M.image.width*H),ne=Math.floor(M.image.height*H),ue=N!==null?N.x:0,Me=N!==null?N.y:0;Oe.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,ue,Me,U,ne),ge.unbindTexture()};const Lr=A.createFramebuffer(),ro=A.createFramebuffer();this.copyTextureToTexture=function(M,N,G=null,H=null,U=0,ne=null){ne===null&&(U!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let ue,Me,xe,Ne,Ge,De,Je,st,vt;const lt=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(G!==null)ue=G.max.x-G.min.x,Me=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,Ge=G.min.y,De=G.isBox3?G.min.z:0;else{const jt=Math.pow(2,-U);ue=Math.floor(lt.width*jt),Me=Math.floor(lt.height*jt),M.isDataArrayTexture?xe=lt.depth:M.isData3DTexture?xe=Math.floor(lt.depth*jt):xe=1,Ne=0,Ge=0,De=0}H!==null?(Je=H.x,st=H.y,vt=H.z):(Je=0,st=0,vt=0);const it=Ce.convert(N.format),Ie=Ce.convert(N.type);let pt;N.isData3DTexture?(Oe.setTexture3D(N,0),pt=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Oe.setTexture2DArray(N,0),pt=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(N,0),pt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),Wt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ei=A.getParameter(A.UNPACK_SKIP_PIXELS),Xt=A.getParameter(A.UNPACK_SKIP_ROWS),En=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,lt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ne),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ge),A.pixelStorei(A.UNPACK_SKIP_IMAGES,De);const mt=M.isDataArrayTexture||M.isData3DTexture,It=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const jt=ve.get(M),At=ve.get(N),Nt=ve.get(jt.__renderTarget),$s=ve.get(At.__renderTarget);ge.bindFramebuffer(A.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Fn=0;Fn<xe;Fn++)mt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(M).__webglTexture,U,De+Fn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,ne,vt+Fn)),A.blitFramebuffer(Ne,Ge,ue,Me,Je,st,ue,Me,A.DEPTH_BUFFER_BIT,A.NEAREST);ge.bindFramebuffer(A.READ_FRAMEBUFFER,null),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||ve.has(M)){const jt=ve.get(M),At=ve.get(N);ge.bindFramebuffer(A.READ_FRAMEBUFFER,Lr),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,ro);for(let Nt=0;Nt<xe;Nt++)mt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,jt.__webglTexture,U,De+Nt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,jt.__webglTexture,U),It?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,At.__webglTexture,ne,vt+Nt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,At.__webglTexture,ne),U!==0?A.blitFramebuffer(Ne,Ge,ue,Me,Je,st,ue,Me,A.COLOR_BUFFER_BIT,A.NEAREST):It?A.copyTexSubImage3D(pt,ne,Je,st,vt+Nt,Ne,Ge,ue,Me):A.copyTexSubImage2D(pt,ne,Je,st,Ne,Ge,ue,Me);ge.bindFramebuffer(A.READ_FRAMEBUFFER,null),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else It?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(pt,ne,Je,st,vt,ue,Me,xe,it,Ie,lt.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(pt,ne,Je,st,vt,ue,Me,xe,it,lt.data):A.texSubImage3D(pt,ne,Je,st,vt,ue,Me,xe,it,Ie,lt):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ne,Je,st,ue,Me,it,Ie,lt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ne,Je,st,lt.width,lt.height,it,lt.data):A.texSubImage2D(A.TEXTURE_2D,ne,Je,st,ue,Me,it,Ie,lt);A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Wt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ei),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,En),ne===0&&N.generateMipmaps&&A.generateMipmap(pt),ge.unbindTexture()},this.initRenderTarget=function(M){ve.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){w=0,C=0,L=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function L4(n){return n}function I4(n){if(n==null)return L4;var e,t,i=n.scale[0],s=n.scale[1],r=n.translate[0],a=n.translate[1];return function(o,l){l||(e=t=0);var c=2,h=o.length,u=new Array(h);for(u[0]=(e+=o[0])*i+r,u[1]=(t+=o[1])*s+a;c<h;)u[c]=o[c],++c;return u}}function N4(n,e){for(var t,i=n.length,s=i-e;s<--i;)t=n[s],n[s++]=n[i],n[i]=t}function y0(n,e){return typeof e=="string"&&(e=n.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(t){return Gu(n,t)})}:Gu(n,e)}function Gu(n,e){var t=e.id,i=e.bbox,s=e.properties==null?{}:e.properties,r=U4(n,e);return t==null&&i==null?{type:"Feature",properties:s,geometry:r}:i==null?{type:"Feature",id:t,properties:s,geometry:r}:{type:"Feature",id:t,bbox:i,properties:s,geometry:r}}function U4(n,e){var t=I4(n.transform),i=n.arcs;function s(h,u){u.length&&u.pop();for(var f=i[h<0?~h:h],d=0,g=f.length;d<g;++d)u.push(t(f[d],d));h<0&&N4(u,g)}function r(h){return t(h)}function a(h){for(var u=[],f=0,d=h.length;f<d;++f)s(h[f],u);return u.length<2&&u.push(u[0]),u}function o(h){for(var u=a(h);u.length<4;)u.push(u[0]);return u}function l(h){return h.map(o)}function c(h){var u=h.type,f;switch(u){case"GeometryCollection":return{type:u,geometries:h.geometries.map(c)};case"Point":f=r(h.coordinates);break;case"MultiPoint":f=h.coordinates.map(r);break;case"LineString":f=a(h.arcs);break;case"MultiLineString":f=h.arcs.map(a);break;case"Polygon":f=l(h.arcs);break;case"MultiPolygon":f=h.arcs.map(l);break;default:return null}return{type:u,coordinates:f}}return c(e)}const F4={land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},O4=JSON.parse("[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]]"),k4={scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]},b0={objects:F4,arcs:O4,transform:k4},Li={ocean:"#1b3f63",oceanDeep:"#122d49",land:"#3f6145",coast:"#7ba383",graticule:"rgba(150, 190, 210, 0.13)"},fi=(n,e,t,i)=>[(n+180)/360*t,(90-e)/180*i];function $u(n,e,t,i){for(const s of e){n.beginPath();for(let r=0;r<s.length;r++){const a=s[r],[o,l]=fi(a[0],a[1],t,i);r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill(),n.stroke()}}function B4(n=2048){const e=n,t=n/2,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");if(!s)return i;const r=s.createLinearGradient(0,0,0,t);r.addColorStop(0,Li.oceanDeep),r.addColorStop(.5,Li.ocean),r.addColorStop(1,Li.oceanDeep),s.fillStyle=r,s.fillRect(0,0,e,t),s.strokeStyle=Li.graticule,s.lineWidth=Math.max(1,e/2048);for(let c=-180;c<=180;c+=30){const[h]=fi(c,0,e,t);s.beginPath(),s.moveTo(h,0),s.lineTo(h,t),s.stroke()}for(let c=-60;c<=60;c+=30){const[,h]=fi(0,c,e,t);s.beginPath(),s.moveTo(0,h),s.lineTo(e,h),s.stroke()}const a=b0,o=y0(a,a.objects.land),l=[];if(o.features)for(const c of o.features)c.geometry&&l.push(c.geometry);else o.geometry&&l.push(o.geometry);s.fillStyle=Li.land,s.strokeStyle=Li.coast,s.lineWidth=Math.max(1,e/1400),s.lineJoin="round";for(const c of l)if(c.type==="MultiPolygon")for(const h of c.coordinates)$u(s,h,e,t);else $u(s,c.coordinates,e,t);return i}function z4(n=2048){const e=n,t=n/2,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");if(!s)return i;s.strokeStyle=Li.graticule,s.lineWidth=Math.max(1,e/2048);for(let l=-180;l<=180;l+=30){const[c]=fi(l,0,e,t);s.beginPath(),s.moveTo(c,0),s.lineTo(c,t),s.stroke()}for(let l=-60;l<=60;l+=30){const[,c]=fi(0,l,e,t);s.beginPath(),s.moveTo(0,c),s.lineTo(e,c),s.stroke()}const r=b0,a=y0(r,r.objects.land),o=[];if(a.features)for(const l of a.features)l.geometry&&o.push(l.geometry);else a.geometry&&o.push(a.geometry);s.strokeStyle="rgba(150, 200, 175, 0.75)",s.lineWidth=Math.max(1,e/1800),s.lineJoin="round";for(const l of o)if(l.type==="MultiPolygon")for(const c of l.coordinates)for(const h of c){s.beginPath();for(let u=0;u<h.length;u++){const[f,d]=fi(h[u][0],h[u][1],e,t);u===0?s.moveTo(f,d):s.lineTo(f,d)}s.closePath(),s.stroke()}else for(const c of l.coordinates){s.beginPath();for(let h=0;h<c.length;h++){const[u,f]=fi(c[h][0],c[h][1],e,t);h===0?s.moveTo(u,f):s.lineTo(u,f)}s.closePath(),s.stroke()}return i}function V4(n,e){const i=n.width*4,s=(n.height-1)*4,r=e??document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d");if(!a)return r;a.clearRect(0,0,i,s);const o=a.createImageData(n.width,n.height);for(let c=0;c<n.width;c++)for(let h=0;h<n.height;h++){const u=n.values[c*n.height+h]??0,f=c>180?c-360:c,d=h+n.lat_start,[g,_]=fi(f,d,n.width,n.height),m=Math.min(n.width-1,Math.max(0,Math.round(g))),S=(Math.min(n.height-1,Math.max(0,Math.round(_)))*n.width+m)*4;o.data[S]=u,o.data[S+1]=u,o.data[S+2]=u,o.data[S+3]=255}const l=document.createElement("canvas");return l.width=n.width,l.height=n.height,l.getContext("2d")?.putImageData(o,0,0),a.filter=`blur(${4*.9}px)`,a.drawImage(l,0,0,i,s),a.filter="none",r}const Gc=173.1446326846693,H4=14959787069098932e-8,ze=.017453292519943295,Na=57.29577951308232,G4=365.24217,Wu=new Date("2000-01-01T12:00:00Z"),$n=2*Math.PI,oi=3600*(180/Math.PI),ys=484813681109536e-20,$4=10800*60,W4=2*$4,X4=6378.1366,j4=X4/H4,S0=81.30056,$c=.0002959122082855911,hc=2825345909524226e-22,uc=8459715185680659e-23,dc=1292024916781969e-23,fc=1524358900784276e-23;function M0(n){if(n!==!0&&n!==!1)throw console.trace(),`Value is not boolean: ${n}`;return n}function vi(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function ds(n){return n-Math.floor(n)}var we;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(we||(we={}));const q4=[we.Star1,we.Star2,we.Star3,we.Star4,we.Star5,we.Star6,we.Star7,we.Star8],Y4=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function K4(n){const e=q4.indexOf(n);return e>=0?Y4[e]:null}function Wc(n){const e=K4(n);return e&&e.dist>0?e:null}var dn;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(dn||(dn={}));const qn={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function Z4(n){var e,t,i,s,r,a,o;const l=2e3+(n-14)/G4;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,t=e*e,i=e*t,s=t*t,r=t*i,a=i*i,10583.6-1014.41*e+33.78311*t-5.952053*i-.1798452*s+.022174192*r+.0090316521*a):l<1600?(e=(l-1e3)/100,t=e*e,i=e*t,s=t*t,r=t*i,a=i*i,1574.2-556.01*e+71.23472*t+.319781*i-.8503463*s-.005050998*r+.0083572073*a):l<1700?(e=l-1600,t=e*e,i=e*t,120-.9808*e-.01532*t+i/7129):l<1800?(e=l-1700,t=e*e,i=e*t,s=t*t,8.83+.1603*e-.0059285*t+13336e-8*i-s/1174e3):l<1860?(e=l-1800,t=e*e,i=e*t,s=t*t,r=t*i,a=i*i,o=i*s,13.72-.332447*e+.0068612*t+.0041116*i-37436e-8*s+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(e=l-1860,t=e*e,i=e*t,s=t*t,r=t*i,7.62+.5737*e-.251754*t+.01680668*i-.0004473624*s+r/233174):l<1920?(e=l-1900,t=e*e,i=e*t,s=t*t,-2.79+1.494119*e-.0598939*t+.0061966*i-197e-6*s):l<1941?(e=l-1920,t=e*e,i=e*t,21.2+.84493*e-.0761*t+.0020936*i):l<1961?(e=l-1950,t=e*e,i=e*t,29.07+.407*e-t/233+i/2547):l<1986?(e=l-1975,t=e*e,i=e*t,45.45+1.067*e-t/260-i/718):l<2005?(e=l-2e3,t=e*e,i=e*t,s=t*t,r=t*i,63.86+.3345*e-.060374*t+.0017275*i+651814e-9*s+2373599e-11*r):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let J4=Z4;function Xu(n){return n+J4(n)/86400}class Es{constructor(e){if(e instanceof Es){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Wu.getTime())/t,this.tt=Xu(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Wu.getTime()+e*t),this.ut=e,this.tt=Xu(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new Es(e);for(;;){const i=e-t.tt;if(Math.abs(i)<1e-12)return t;t=t.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Es(this.ut+e)}}function xt(n){return n instanceof Es?n:new Es(n)}function Q4(n){function e(f){return f%W4*ys}const t=n.tt/36525,i=e(128710479305e-5+t*1295965810481e-4),s=e(335779.526232+t*17395272628478e-4),r=e(107226070369e-5+t*1602961601209e-3),a=e(450160.398036-t*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*t)*o+33386*l,h=(92052331+9086*t)*l+15377*o,u=2*(s-r+a);return o=Math.sin(u),l=Math.cos(u),c+=(-13170906-1675*t)*o-13696*l,h+=(5730336-3015*t)*l-4587*o,u=2*(s+a),o=Math.sin(u),l=Math.cos(u),c+=(-2276413-234*t)*o+2796*l,h+=(978459-485*t)*l+1374*o,u=2*a,o=Math.sin(u),l=Math.cos(u),c+=(2074554+207*t)*o-698*l,h+=(-897492+470*t)*l-291*o,o=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*t)*o+11817*l,h+=(73871-184*t)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+h*1e-7}}function w0(n){var e=n.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var aa;function qa(n){if(!aa||Math.abs(aa.tt-n.tt)>1e-6){const e=Q4(n),t=w0(n),i=t+e.deps/3600;aa={tt:n.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*ze)/15,mobl:t,tobl:i}}return aa}function e_(n,e){const t=n*ze,i=Math.cos(t),s=Math.sin(t);return[e[0],e[1]*i-e[2]*s,e[1]*s+e[2]*i]}function t_(n,e){return e_(w0(n),e)}function n_(n){const e=n.tt/36525;function t(Ee,A){const Le=[];let me;for(me=0;me<=A-Ee;++me)Le.push(0);return{min:Ee,array:Le}}function i(Ee,A,Le,me){const fe=[];for(let ge=0;ge<=A-Ee;++ge)fe.push(t(Le,me));return{min:Ee,array:fe}}function s(Ee,A,Le){const me=Ee.array[A-Ee.min];return me.array[Le-me.min]}function r(Ee,A,Le,me){const fe=Ee.array[A-Ee.min];fe.array[Le-fe.min]=me}let a,o,l,c,h,u,f,d,g,_,m,p,S,x,v,T,w,C,L,E,b,D,k,V=i(-6,6,1,4),X=i(-6,6,1,4);function Y(Ee,A){return s(V,Ee,A)}function j(Ee,A){return s(X,Ee,A)}function J(Ee,A,Le){return r(V,Ee,A,Le)}function z(Ee,A,Le){return r(X,Ee,A,Le)}function te(Ee,A,Le,me,fe){fe(Ee*Le-A*me,A*Le+Ee*me)}function Q(Ee){return Math.sin($n*Ee)}f=e*e,g=0,k=0,m=0,p=3422.7;var be=Q(.19833+.05611*e),$e=Q(.27869+.04508*e),Ze=Q(.16827-.36903*e),et=Q(.34734-5.37261*e),je=Q(.10498-5.37899*e),B=Q(.42681-.41855*e),W=Q(.14943-5.37511*e);for(C=.84*be+.31*$e+14.27*Ze+7.26*et+.28*je+.24*B,L=2.94*be+.31*$e+14.27*Ze+9.34*et+1.12*je+.83*B,E=-6.4*be-1.89*B,b=.21*be+.31*$e+14.27*Ze-88.7*et-15.3*je+.24*B-1.86*W,D=C-E,d=-3332e-9*Q(.59734-5.37261*e)-539e-9*Q(.35498-5.37899*e)-64e-9*Q(.39943-5.37511*e),S=$n*ds(.60643382+1336.85522467*e-313e-8*f)+C/oi,x=$n*ds(.37489701+1325.55240982*e+2565e-8*f)+L/oi,v=$n*ds(.99312619+99.99735956*e-44e-8*f)+E/oi,T=$n*ds(.25909118+1342.2278298*e-892e-8*f)+b/oi,w=$n*ds(.82736186+1236.85308708*e-397e-8*f)+D/oi,h=1;h<=4;++h){switch(h){case 1:l=x,o=4,c=1.000002208;break;case 2:l=v,o=3,c=.997504612-.002495388*e;break;case 3:l=T,o=4,c=1.000002708+139.978*d;break;case 4:l=w,o=6,c=1;break;default:throw`Internal error: I = ${h}`}for(J(0,h,1),J(1,h,Math.cos(l)*c),z(0,h,0),z(1,h,Math.sin(l)*c),u=2;u<=o;++u)te(Y(u-1,h),j(u-1,h),Y(1,h),j(1,h),(Ee,A)=>(J(u,h,Ee),z(u,h,A)));for(u=1;u<=o;++u)J(-u,h,Y(u,h)),z(-u,h,-j(u,h))}function se(Ee,A,Le,me){for(var fe={x:1,y:0},ge=[0,Ee,A,Le,me],Ke=1;Ke<=4;++Ke)ge[Ke]!==0&&te(fe.x,fe.y,Y(ge[Ke],Ke),j(ge[Ke],Ke),(ve,Oe)=>(fe.x=ve,fe.y=Oe));return fe}function O(Ee,A,Le,me,fe,ge,Ke,ve){var Oe=se(fe,ge,Ke,ve);g+=Ee*Oe.y,k+=A*Oe.y,m+=Le*Oe.x,p+=me*Oe.x}O(13.902,14.06,-.001,.2607,0,0,0,4),O(.403,-4.01,.394,.0023,0,0,0,3),O(2369.912,2373.36,.601,28.2333,0,0,0,2),O(-125.154,-112.79,-.725,-.9781,0,0,0,1),O(1.979,6.98,-.445,.0433,1,0,0,4),O(191.953,192.72,.029,3.0861,1,0,0,2),O(-8.466,-13.51,.455,-.1093,1,0,0,1),O(22639.5,22609.07,.079,186.5398,1,0,0,0),O(18.609,3.59,-.094,.0118,1,0,0,-1),O(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),O(3.215,5.44,.192,-.0386,1,0,0,-3),O(-38.428,-38.64,.001,.6008,1,0,0,-4),O(-.393,-1.43,-.092,.0086,1,0,0,-6),O(-.289,-1.59,.123,-.0053,0,1,0,4),O(-24.42,-25.1,.04,-.3,0,1,0,2),O(18.023,17.93,.007,.1494,0,1,0,1),O(-668.146,-126.98,-1.302,-.3997,0,1,0,0),O(.56,.32,-.001,-.0037,0,1,0,-1),O(-165.145,-165.06,.054,1.9178,0,1,0,-2),O(-1.877,-6.46,-.416,.0339,0,1,0,-4),O(.213,1.02,-.074,.0054,2,0,0,4),O(14.387,14.78,-.017,.2833,2,0,0,2),O(-.586,-1.2,.054,-.01,2,0,0,1),O(769.016,767.96,.107,10.1657,2,0,0,0),O(1.75,2.01,-.018,.0155,2,0,0,-1),O(-211.656,-152.53,5.679,-.3039,2,0,0,-2),O(1.225,.91,-.03,-.0088,2,0,0,-3),O(-30.773,-34.07,-.308,.3722,2,0,0,-4),O(-.57,-1.4,-.074,.0109,2,0,0,-6),O(-2.921,-11.75,.787,-.0484,1,1,0,2),O(1.267,1.52,-.022,.0164,1,1,0,1),O(-109.673,-115.18,.461,-.949,1,1,0,0),O(-205.962,-182.36,2.056,1.4437,1,1,0,-2),O(.233,.36,.012,-.0025,1,1,0,-3),O(-4.391,-9.66,-.471,.0673,1,1,0,-4),O(.283,1.53,-.111,.006,1,-1,0,4),O(14.577,31.7,-1.54,.2302,1,-1,0,2),O(147.687,138.76,.679,1.1528,1,-1,0,0),O(-1.089,.55,.021,0,1,-1,0,-1),O(28.475,23.59,-.443,-.2257,1,-1,0,-2),O(-.276,-.38,-.006,-.0036,1,-1,0,-3),O(.636,2.27,.146,-.0102,1,-1,0,-4),O(-.189,-1.68,.131,-.0028,0,2,0,2),O(-7.486,-.66,-.037,-.0086,0,2,0,0),O(-8.096,-16.35,-.74,.0918,0,2,0,-2),O(-5.741,-.04,0,-9e-4,0,0,2,2),O(.255,0,0,0,0,0,2,1),O(-411.608,-.2,0,-.0124,0,0,2,0),O(.584,.84,0,.0071,0,0,2,-1),O(-55.173,-52.14,0,-.1052,0,0,2,-2),O(.254,.25,0,-.0017,0,0,2,-3),O(.025,-1.67,0,.0031,0,0,2,-4),O(1.06,2.96,-.166,.0243,3,0,0,2),O(36.124,50.64,-1.3,.6215,3,0,0,0),O(-13.193,-16.4,.258,-.1187,3,0,0,-2),O(-1.187,-.74,.042,.0074,3,0,0,-4),O(-.293,-.31,-.002,.0046,3,0,0,-6),O(-.29,-1.45,.116,-.0051,2,1,0,2),O(-7.649,-10.56,.259,-.1038,2,1,0,0),O(-8.627,-7.59,.078,-.0192,2,1,0,-2),O(-2.74,-2.54,.022,.0324,2,1,0,-4),O(1.181,3.32,-.212,.0213,2,-1,0,2),O(9.703,11.67,-.151,.1268,2,-1,0,0),O(-.352,-.37,.001,-.0028,2,-1,0,-1),O(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),O(.36,.2,-.012,-.0043,2,-1,0,-4),O(-1.167,-1.25,.008,-.0106,1,2,0,0),O(-7.412,-6.12,.117,.0484,1,2,0,-2),O(-.311,-.65,-.032,.0044,1,2,0,-4),O(.757,1.82,-.105,.0112,1,-2,0,2),O(2.58,2.32,.027,.0196,1,-2,0,0),O(2.533,2.4,-.014,-.0212,1,-2,0,-2),O(-.344,-.57,-.025,.0036,0,3,0,-2),O(-.992,-.02,0,0,1,0,2,2),O(-45.099,-.02,0,-.001,1,0,2,0),O(-.179,-9.52,0,-.0833,1,0,2,-2),O(-.301,-.33,0,.0014,1,0,2,-4),O(-6.382,-3.37,0,-.0481,1,0,-2,2),O(39.528,85.13,0,-.7136,1,0,-2,0),O(9.366,.71,0,-.0112,1,0,-2,-2),O(.202,.02,0,0,1,0,-2,-4),O(.415,.1,0,.0013,0,1,2,0),O(-2.152,-2.26,0,-.0066,0,1,2,-2),O(-1.44,-1.3,0,.0014,0,1,-2,2),O(.384,-.04,0,0,0,1,-2,-2),O(1.938,3.6,-.145,.0401,4,0,0,0),O(-.952,-1.58,.052,-.013,4,0,0,-2),O(-.551,-.94,.032,-.0097,3,1,0,0),O(-.482,-.57,.005,-.0045,3,1,0,-2),O(.681,.96,-.026,.0115,3,-1,0,0),O(-.297,-.27,.002,-9e-4,2,2,0,-2),O(.254,.21,-.003,0,2,-2,0,-2),O(-.25,-.22,.004,.0014,1,3,0,-2),O(-3.996,0,0,4e-4,2,0,2,0),O(.557,-.75,0,-.009,2,0,2,-2),O(-.459,-.38,0,-.0053,2,0,-2,2),O(-1.298,.74,0,4e-4,2,0,-2,0),O(.538,1.14,0,-.0141,2,0,-2,-2),O(.263,.02,0,0,1,1,2,0),O(.426,.07,0,-6e-4,1,1,-2,-2),O(-.304,.03,0,3e-4,1,-1,2,0),O(-.372,-.19,0,-.0027,1,-1,-2,2),O(.418,0,0,0,0,0,4,0),O(-.33,-.04,0,0,3,0,2,0);function ce(Ee,A,Le,me,fe){return Ee*se(A,Le,me,fe).y}_=0,_+=ce(-526.069,0,0,1,-2),_+=ce(-3.352,0,0,1,-4),_+=ce(44.297,1,0,1,-2),_+=ce(-6,1,0,1,-4),_+=ce(20.599,-1,0,1,0),_+=ce(-30.598,-1,0,1,-2),_+=ce(-24.649,-2,0,1,0),_+=ce(-2,-2,0,1,-2),_+=ce(-22.571,0,1,1,-2),_+=ce(10.985,0,-1,1,-2),g+=.82*Q(.7736-62.5512*e)+.31*Q(.0466-125.1025*e)+.35*Q(.5785-25.1042*e)+.66*Q(.4591+1335.8075*e)+.64*Q(.313-91.568*e)+1.14*Q(.148+1331.2898*e)+.21*Q(.5918+1056.5859*e)+.44*Q(.5784+1322.8595*e)+.24*Q(.2275-5.7374*e)+.28*Q(.2965+2.6929*e)+.33*Q(.3132+6.3368*e),a=T+k/oi;let Be=(1.000002708+139.978*d)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+_;return{geo_eclip_lon:$n*ds((S+g/oi)/$n),geo_eclip_lat:Math.PI/(180*3600)*Be,distance_au:oi*j4/(.999953253*p)}}function E0(n,e){return[n.rot[0][0]*e[0]+n.rot[1][0]*e[1]+n.rot[2][0]*e[2],n.rot[0][1]*e[0]+n.rot[1][1]*e[1]+n.rot[2][1]*e[2],n.rot[0][2]*e[0]+n.rot[1][2]*e[1]+n.rot[2][2]*e[2]]}function Ua(n,e,t){const i=T0(e,t);return E0(i,n)}function T0(n,e){const t=n.tt/36525;let i=84381.406,s=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,r=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+i,a=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;i*=ys,s*=ys,r*=ys,a*=ys;const o=Math.sin(i),l=Math.cos(i),c=Math.sin(-s),h=Math.cos(-s),u=Math.sin(-r),f=Math.cos(-r),d=Math.sin(a),g=Math.cos(a),_=g*h-c*d*f,m=g*c*l+d*f*h*l-o*d*u,p=g*c*o+d*f*h*o+l*d*u,S=-d*h-c*g*f,x=-d*c*l+g*f*h*l-o*g*u,v=-d*c*o+g*f*h*o+l*g*u,T=c*u,w=-u*h*l-o*f,C=-u*h*o+f*l;if(e===dn.Into2000)return new Ls([[_,m,p],[S,x,v],[T,w,C]]);if(e===dn.From2000)return new Ls([[_,S,T],[m,x,w],[p,v,C]]);throw"Invalid precess direction"}function i_(n){const e=.779057273264+.00273781191135448*n.ut,t=n.ut%1;let i=360*((e+t)%1);return i<0&&(i+=360),i}let oa;function s_(n){if(!oa||oa.tt!==n.tt){const e=n.tt/36525;let t=15*qa(n).ee;const i=i_(n);let r=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;r<0&&(r+=24),oa={tt:n.tt,st:r}}return oa.st}function r_(n){const e=xt(n);return s_(e)}function pc(n,e,t){const i=A0(e,t);return E0(i,n)}function A0(n,e){const t=qa(n),i=t.mobl*ze,s=t.tobl*ze,r=t.dpsi*ys,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r),f=h,d=-u*a,g=-u*o,_=u*l,m=h*a*l+o*c,p=h*o*l-a*c,S=u*c,x=h*a*c-o*l,v=h*o*c+a*l;if(e===dn.From2000)return new Ls([[f,_,S],[d,m,x],[g,p,v]]);if(e===dn.Into2000)return new Ls([[f,d,g],[_,m,p],[S,x,v]]);throw"Invalid precess direction"}function a_(n,e,t){return t===dn.Into2000?Ua(pc(n,e,t),e,t):pc(Ua(n,e,t),e,t)}class Mt{constructor(e,t,i,s){this.x=e,this.y=t,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class pi{constructor(e,t,i,s,r,a,o){this.x=e,this.y=t,this.z=i,this.vx=s,this.vy=r,this.vz=a,this.t=o}}class R0{constructor(e,t,i){this.lat=vi(e),this.lon=vi(t),this.dist=vi(i)}}class o_{constructor(e,t,i,s){this.ra=vi(e),this.dec=vi(t),this.dist=vi(i),this.vec=s}}class Ls{constructor(e){this.rot=e}}class l_{constructor(e,t,i){this.vec=e,this.elat=vi(t),this.elon=vi(i)}}function c_(n){const e=xt(n).AddDays(-1/Gc),t=rr(qn.Earth,e),i=[-t.x,-t.y,-t.z],[s,r,a]=a_(i,e,dn.From2000),o=ze*qa(e).tobl,l=Math.cos(o),c=Math.sin(o),h=new Mt(s,r,a,e);return h_(h,l,c)}function h_(n,e,t){const i=n.x,s=n.y*e+n.z*t,r=-n.y*t+n.z*e,a=Math.hypot(i,s);let o=0;a>0&&(o=Na*Math.atan2(s,i),o<0&&(o+=360));let l=Na*Math.atan2(r,a),c=new Mt(i,s,r,n.t);return new l_(c,l,o)}function fr(n){const e=xt(n),t=n_(e),i=t.distance_au*Math.cos(t.geo_eclip_lat),s=[i*Math.cos(t.geo_eclip_lon),i*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],r=t_(e,s),a=Ua(r,e,dn.Into2000);return new Mt(a[0],a[1],a[2],e)}function C0(n){const e=xt(n),t=1e-5,i=e.AddDays(-t),s=e.AddDays(+t),r=fr(i),a=fr(s);return new pi((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*t),(a.y-r.y)/(2*t),(a.z-r.z)/(2*t),e)}function u_(n){const e=xt(n),t=C0(e),i=1+S0;return new pi(t.x/i,t.y/i,t.z/i,t.vx/i,t.vy/i,t.vz/i,e)}function Ts(n,e,t){let i=1,s=0;for(let r of n){let a=0;for(let[l,c,h]of r)a+=l*Math.cos(c+e*h);let o=i*a;t&&(o%=$n),s+=o,i*=e}return s}function Ko(n,e){let t=1,i=0,s=0,r=0;for(let a of n){let o=0,l=0;for(let[c,h,u]of a){let f=h+e*u;o+=c*u*Math.sin(f),r>0&&(l+=c*Math.cos(f))}s+=r*i*l-t*o,i=t,t*=e,++r}return s}const ir=365250,mc=0,gc=1,_c=2;function vc(n){return new Gt(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function P0(n,e,t){const i=t*Math.cos(e),s=Math.cos(n),r=Math.sin(n);return[i*s,i*r,t*Math.sin(e)]}function rr(n,e){const t=e.tt/ir,i=Ts(n[mc],t,!0),s=Ts(n[gc],t,!1),r=Ts(n[_c],t,!1),a=P0(i,s,r);return vc(a).ToAstroVector(e)}function xc(n,e){const t=e/ir,i=Ts(n[mc],t,!0),s=Ts(n[gc],t,!1),r=Ts(n[_c],t,!1),a=Ko(n[mc],t),o=Ko(n[gc],t),l=Ko(n[_c],t),c=Math.cos(i),h=Math.sin(i),u=Math.cos(s),f=Math.sin(s),d=+(l*u*c)-r*f*c*o-r*u*h*a,g=+(l*u*h)-r*f*h*o+r*u*c*a,_=+(l*f)+r*u*o,m=P0(i,s,r),p=[d/ir,g/ir,_/ir],S=vc(m),x=vc(p);return new Xi(e,S,x)}function la(n,e,t,i){const s=i/(i+$c),r=rr(qn[t],e);n.x+=s*r.x,n.y+=s*r.y,n.z+=s*r.z}function d_(n){const e=new Mt(0,0,0,n);return la(e,n,we.Jupiter,hc),la(e,n,we.Saturn,uc),la(e,n,we.Uranus,dc),la(e,n,we.Neptune,fc),e}const yc=51,f_=29200,bs=146,Wn=201,ki=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Gt{constructor(e,t,i){this.x=e,this.y=t,this.z=i}clone(){return new Gt(this.x,this.y,this.z)}ToAstroVector(e){return new Mt(this.x,this.y,this.z,e)}static zero(){return new Gt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Gt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Gt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Gt(e*this.x,e*this.y,e*this.z)}div(e){return new Gt(this.x/e,this.y/e,this.z/e)}mean(e){return new Gt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Gt(-this.x,-this.y,-this.z)}}class Xi{constructor(e,t,i){this.tt=e,this.r=t,this.v=i}clone(){return new Xi(this.tt,this.r,this.v)}sub(e){return new Xi(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function p_(n){let[e,[t,i,s],[r,a,o]]=n;return new Xi(e,new Gt(t,i,s),new Gt(r,a,o))}function ca(n,e,t,i){const s=i/(i+$c),r=xc(qn[t],e);return n.r.incr(r.r.mul(s)),n.v.incr(r.v.mul(s)),r}function Js(n,e,t){const i=t.sub(n),s=i.quadrature();return i.mul(e/(s*Math.sqrt(s)))}class Ya{constructor(e){let t=new Xi(e,new Gt(0,0,0),new Gt(0,0,0));this.Jupiter=ca(t,e,we.Jupiter,hc),this.Saturn=ca(t,e,we.Saturn,uc),this.Uranus=ca(t,e,we.Uranus,dc),this.Neptune=ca(t,e,we.Neptune,fc),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new Xi(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=Js(e,$c,this.Sun.r);return t.incr(Js(e,hc,this.Jupiter.r)),t.incr(Js(e,uc,this.Saturn.r)),t.incr(Js(e,dc,this.Uranus.r)),t.incr(Js(e,fc,this.Neptune.r)),t}}class Ka{constructor(e,t,i,s){this.tt=e,this.r=t,this.v=i,this.a=s}clone(){return new Ka(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class D0{constructor(e,t){this.bary=e,this.grav=t}}function Fa(n,e,t,i){return new Gt(e.x+n*(t.x+n*i.x/2),e.y+n*(t.y+n*i.y/2),e.z+n*(t.z+n*i.z/2))}function ju(n,e,t){return new Gt(e.x+n*t.x,e.y+n*t.y,e.z+n*t.z)}function bc(n,e){const t=n-e.tt,i=new Ya(n),s=Fa(t,e.r,e.v,e.a),r=i.Acceleration(s).mean(e.a),a=Fa(t,e.r,e.v,r),o=e.v.add(r.mul(t)),l=i.Acceleration(a),c=new Ka(n,a,o,l);return new D0(i,c)}const m_=[];function L0(n,e){const t=Math.floor(n);return t<0?0:t>=e?e-1:t}function Sc(n){const e=p_(n),t=new Ya(e.tt),i=e.r.add(t.Sun.r),s=e.v.add(t.Sun.v),r=t.Acceleration(i),a=new Ka(e.tt,i,s,r);return new D0(t,a)}function g_(n,e){const t=ki[0][0];if(e<t||e>ki[yc-1][0])return null;const i=L0((e-t)/f_,yc-1);if(!n[i]){const r=n[i]=[];r[0]=Sc(ki[i]).grav,r[Wn-1]=Sc(ki[i+1]).grav;let a,o=r[0].tt;for(a=1;a<Wn-1;++a)r[a]=bc(o+=bs,r[a-1]).grav;o=r[Wn-1].tt;var s=[];for(s[Wn-1]=r[Wn-1],a=Wn-2;a>0;--a)s[a]=bc(o-=bs,s[a+1]).grav;for(a=Wn-2;a>0;--a){const l=a/(Wn-1);r[a].r=r[a].r.mul(1-l).add(s[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(s[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(s[a].a.mul(l))}}return n[i]}function qu(n,e,t){let i=Sc(n);const s=Math.ceil((e-i.grav.tt)/t);for(let r=0;r<s;++r)i=bc(r+1===s?e:i.grav.tt+t,i.grav);return i}function I0(n,e){let t,i,s;const r=g_(m_,n.tt);if(r){const a=L0((n.tt-r[0].tt)/bs,Wn-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),h=Fa(n.tt-o.tt,o.r,o.v,c),u=ju(n.tt-o.tt,o.v,c),f=Fa(n.tt-l.tt,l.r,l.v,c),d=ju(n.tt-l.tt,l.v,c),g=(n.tt-o.tt)/bs;t=h.mul(1-g).add(f.mul(g)),i=u.mul(1-g).add(d.mul(g))}else{let a;n.tt<ki[0][0]?a=qu(ki[0],n.tt,-bs):a=qu(ki[yc-1],n.tt,+bs),t=a.grav.r,i=a.grav.v,s=a.bary}return s||(s=new Ya(n.tt)),t=t.sub(s.Sun.r),i=i.sub(s.Sun.v),new pi(t.x,t.y,t.z,i.x,i.y,i.z,n)}function xi(n,e){var t=xt(e);if(n in qn)return rr(qn[n],t);if(n===we.Pluto){const a=I0(t);return new Mt(a.x,a.y,a.z,t)}if(n===we.Sun)return new Mt(0,0,0,t);if(n===we.Moon){var i=rr(qn.Earth,t),s=fr(t);return new Mt(i.x+s.x,i.y+s.y,i.z+s.z,t)}if(n===we.EMB){const a=rr(qn.Earth,t),o=fr(t),l=1+S0;return new Mt(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,t)}if(n===we.SSB)return d_(t);const r=Wc(n);if(r){const a=new R0(r.dec,15*r.ra,r.dist);return M_(a,t)}throw`HelioVector: Unknown body "${n}"`}function __(n,e){let t=e,i=0;for(let s=0;s<10;++s){const r=n(t),a=r.Length()/Gc;if(a>1)throw"Object is too distant for light-travel solver.";const o=e.AddDays(-a);if(i=Math.abs(o.tt-t.tt),i<1e-9)return r;t=o}throw`Light-travel time solver did not converge: dt = ${i}`}class v_{constructor(e,t,i,s){this.observerBody=e,this.targetBody=t,this.aberration=i,this.observerPos=s}Position(e){this.aberration&&(this.observerPos=xi(this.observerBody,e));const t=xi(this.targetBody,e);return new Mt(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function x_(n,e,t,i){M0(i);const s=xt(n);if(Wc(t)){const o=xi(t,s);if(i){const c=b_(e,s),h=new Mt(o.x-c.x,o.y-c.y,o.z-c.z,s),u=Gc/h.Length();return new Mt(h.x+c.vx/u,h.y+c.vy/u,h.z+c.vz/u,s)}const l=xi(e,s);return new Mt(o.x-l.x,o.y-l.y,o.z-l.z,s)}let r;i?r=new Mt(0,0,0,s):r=xi(e,s);const a=new v_(e,t,i,r);return __(o=>a.Position(o),s)}function Za(n,e,t){M0(t);const i=xt(e);switch(n){case we.Earth:return new Mt(0,0,0,i);case we.Moon:return fr(i);default:const s=x_(i,we.Earth,n,t);return s.t=i,s}}function y_(n,e){return new pi(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,e)}function b_(n,e){const t=xt(e);switch(n){case we.Sun:return new pi(0,0,0,0,0,0,t);case we.SSB:const i=new Ya(t.tt);return new pi(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,t);case we.Mercury:case we.Venus:case we.Earth:case we.Mars:case we.Jupiter:case we.Saturn:case we.Uranus:case we.Neptune:const s=xc(qn[n],t.tt);return y_(s,t);case we.Pluto:return I0(t);case we.Moon:case we.EMB:const r=xc(qn.Earth,t.tt),a=n==we.Moon?C0(t):u_(t);return new pi(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,t);default:if(Wc(n)){const o=xi(n,t);return new pi(o.x,o.y,o.z,0,0,0,t)}throw`HelioState: Unsupported body "${n}"`}}var Yu;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(Yu||(Yu={}));function S_(n,e){return new Ls([[e.rot[0][0]*n.rot[0][0]+e.rot[1][0]*n.rot[0][1]+e.rot[2][0]*n.rot[0][2],e.rot[0][1]*n.rot[0][0]+e.rot[1][1]*n.rot[0][1]+e.rot[2][1]*n.rot[0][2],e.rot[0][2]*n.rot[0][0]+e.rot[1][2]*n.rot[0][1]+e.rot[2][2]*n.rot[0][2]],[e.rot[0][0]*n.rot[1][0]+e.rot[1][0]*n.rot[1][1]+e.rot[2][0]*n.rot[1][2],e.rot[0][1]*n.rot[1][0]+e.rot[1][1]*n.rot[1][1]+e.rot[2][1]*n.rot[1][2],e.rot[0][2]*n.rot[1][0]+e.rot[1][2]*n.rot[1][1]+e.rot[2][2]*n.rot[1][2]],[e.rot[0][0]*n.rot[2][0]+e.rot[1][0]*n.rot[2][1]+e.rot[2][0]*n.rot[2][2],e.rot[0][1]*n.rot[2][0]+e.rot[1][1]*n.rot[2][1]+e.rot[2][1]*n.rot[2][2],e.rot[0][2]*n.rot[2][0]+e.rot[1][2]*n.rot[2][1]+e.rot[2][2]*n.rot[2][2]]])}function M_(n,e){e=xt(e);const t=n.lat*ze,i=n.lon*ze,s=n.dist*Math.cos(t);return new Mt(s*Math.cos(i),s*Math.sin(i),n.dist*Math.sin(t),e)}function N0(n){const e=w_(n);return new o_(e.lon/15,e.lat,e.dist,n)}function w_(n){const e=n.x*n.x+n.y*n.y,t=Math.sqrt(e+n.z*n.z);let i,s;if(e===0){if(n.z===0)throw"Zero-length vector not allowed.";s=0,i=n.z<0?-90:90}else s=Na*Math.atan2(n.y,n.x),s<0&&(s+=360),i=Na*Math.atan2(n.z,Math.sqrt(e));return new R0(i,s,t)}function Ja(n,e){return new Mt(n.rot[0][0]*e.x+n.rot[1][0]*e.y+n.rot[2][0]*e.z,n.rot[0][1]*e.x+n.rot[1][1]*e.y+n.rot[2][1]*e.z,n.rot[0][2]*e.x+n.rot[1][2]*e.y+n.rot[2][2]*e.z,e.t)}function U0(n){n=xt(n);const e=T0(n,dn.From2000),t=A0(n,dn.From2000);return S_(e,t)}function F0(n){const t=qa(xt(n)).tobl*ze,i=Math.cos(t),s=Math.sin(t);return new Ls([[1,0,0],[0,+i,+s],[0,-s,+i]])}var Ku;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Ku||(Ku={}));var Zu;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Zu||(Zu={}));class O0{constructor(e,t,i,s){this.ra=e,this.dec=t,this.spin=i,this.north=s}}function E_(n){const e=pc([0,0,1],n,dn.Into2000),t=Ua(e,n,dn.Into2000),i=new Mt(t[0],t[1],t[2],n),s=N0(i),r=190.41375788700253+360.9856122880876*n.ut;return new O0(s.ra,s.dec,r,i)}function T_(n,e){const t=xt(e),i=t.tt,s=i/36525;let r,a,o;switch(n){case we.Sun:r=286.13,a=63.87,o=84.176+14.1844*i;break;case we.Mercury:r=281.0103-.0328*s,a=61.4155-.0049*s,o=329.5988+6.1385108*i+.01067257*Math.sin(ze*(174.7910857+4.092335*i))-.00112309*Math.sin(ze*(349.5821714+8.18467*i))-1104e-7*Math.sin(ze*(164.3732571+12.277005*i))-2539e-8*Math.sin(ze*(339.1643429+16.36934*i))-571e-8*Math.sin(ze*(153.9554286+20.461675*i));break;case we.Venus:r=272.76,a=67.16,o=160.2-1.4813688*i;break;case we.Earth:return E_(t);case we.Moon:const f=ze*(125.045-.0529921*i),d=ze*(250.089-.1059842*i),g=ze*(260.008+13.0120009*i),_=ze*(176.625+13.3407154*i),m=ze*(357.529+.9856003*i),p=ze*(311.589+26.4057084*i),S=ze*(134.963+13.064993*i),x=ze*(276.617+.3287146*i),v=ze*(34.226+1.7484877*i),T=ze*(15.134-.1589763*i),w=ze*(119.743+.0036096*i),C=ze*(239.961+.1643573*i),L=ze*(25.053+12.9590088*i);r=269.9949+.0031*s-3.8787*Math.sin(f)-.1204*Math.sin(d)+.07*Math.sin(g)-.0172*Math.sin(_)+.0072*Math.sin(p)-.0052*Math.sin(T)+.0043*Math.sin(L),a=66.5392+.013*s+1.5419*Math.cos(f)+.0239*Math.cos(d)-.0278*Math.cos(g)+.0068*Math.cos(_)-.0029*Math.cos(p)+9e-4*Math.cos(S)+8e-4*Math.cos(T)-9e-4*Math.cos(L),o=38.3213+(13.17635815-14e-13*i)*i+3.561*Math.sin(f)+.1208*Math.sin(d)-.0642*Math.sin(g)+.0158*Math.sin(_)+.0252*Math.sin(m)-.0066*Math.sin(p)-.0047*Math.sin(S)-.0046*Math.sin(x)+.0028*Math.sin(v)+.0052*Math.sin(T)+.004*Math.sin(w)+.0019*Math.sin(C)-.0044*Math.sin(L);break;case we.Mars:r=317.269202-.10927547*s+68e-6*Math.sin(ze*(198.991226+19139.4819985*s))+238e-6*Math.sin(ze*(226.292679+38280.8511281*s))+52e-6*Math.sin(ze*(249.663391+57420.7251593*s))+9e-6*Math.sin(ze*(266.18351+76560.636795*s))+.419057*Math.sin(ze*(79.398797+.5042615*s)),a=54.432516-.05827105*s+51e-6*Math.cos(ze*(122.433576+19139.9407476*s))+141e-6*Math.cos(ze*(43.058401+38280.8753272*s))+31e-6*Math.cos(ze*(57.663379+57420.7517205*s))+5e-6*Math.cos(ze*(79.476401+76560.6495004*s))+1.591274*Math.cos(ze*(166.325722+.5042615*s)),o=176.049863+350.891982443297*i+145e-6*Math.sin(ze*(129.071773+19140.0328244*s))+157e-6*Math.sin(ze*(36.352167+38281.0473591*s))+4e-5*Math.sin(ze*(56.668646+57420.929536*s))+1e-6*Math.sin(ze*(67.364003+76560.2552215*s))+1e-6*Math.sin(ze*(104.79268+95700.4387578*s))+.584542*Math.sin(ze*(95.391654+.5042615*s));break;case we.Jupiter:const E=ze*(99.360714+4850.4046*s),b=ze*(175.895369+1191.9605*s),D=ze*(300.323162+262.5475*s),k=ze*(114.012305+6070.2476*s),V=ze*(49.511251+64.3*s);r=268.056595-.006499*s+117e-6*Math.sin(E)+938e-6*Math.sin(b)+.001432*Math.sin(D)+3e-5*Math.sin(k)+.00215*Math.sin(V),a=64.495303+.002413*s+5e-5*Math.cos(E)+404e-6*Math.cos(b)+617e-6*Math.cos(D)-13e-6*Math.cos(k)+926e-6*Math.cos(V),o=284.95+870.536*i;break;case we.Saturn:r=40.589-.036*s,a=83.537-.004*s,o=38.9+810.7939024*i;break;case we.Uranus:r=257.311,a=-15.175,o=203.81-501.1600928*i;break;case we.Neptune:const X=ze*(357.85+52.316*s);r=299.36+.7*Math.sin(X),a=43.46-.51*Math.cos(X),o=249.978+541.1397757*i-.48*Math.sin(X);break;case we.Pluto:r=132.993,a=-6.163,o=302.695+56.3625225*i;break;default:throw`Invalid body: ${n}`}const l=a*ze,c=r*ze,h=Math.cos(l),u=new Mt(h*Math.cos(c),h*Math.sin(c),Math.sin(l),t);return new O0(r/15,a,o,u)}function In(n){return new P(n.x,n.z,-n.y)}const k0={Mercury:we.Mercury,Venus:we.Venus,Earth:we.Earth,Mars:we.Mars,Jupiter:we.Jupiter,Saturn:we.Saturn,Uranus:we.Uranus,Neptune:we.Neptune},B0=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];function A_(n,e){const t=xt(e),i=T_(k0[n],t),s=Ja(U0(t),i.north);return In(s).normalize()}function pr(n){return Ja(U0(n.t),n)}function mr(n,e){const t=xt(e),i=pr(xi(k0[n],t)),s=pr(xi(we.Earth,t));return{helio:new P(i.x,i.y,i.z),geo:new P(i.x-s.x,i.y-s.y,i.z-s.z)}}function z0(n){const e=xt(n),t=pr(Za(we.Moon,e,!1));return new P(t.x,t.y,t.z)}function V0(n){const e=xt(n),t=pr(Za(we.Sun,e,!0)),i=new P(t.x,t.y,t.z),s=i.length();return{dir:i.clone().normalize(),distanceAu:s}}function Xc(n){return(r_(xt(n))*15%360+360)%360}function Oa(n){const e=xt(n),t=pr(Za(we.Sun,e,!0)),i=N0(t);let r=i.ra*15-Xc(n);return r=((r+180)%360+360)%360-180,{lat:i.dec,lon:r}}function R_(n){const e=F0(xt(n)),t=Ja(e,new Mt(0,0,1,xt(n))),i=In(t).normalize(),s=V0(n).dir,r=In(s).normalize(),a=i.clone().addScaledVector(r,-i.dot(r)).normalize(),o=a.clone().cross(r);return{x:r,y:o,z:a}}function C_(n,e){return new P().addScaledVector(e.x,n.x).addScaledVector(e.y,n.y).addScaledVector(e.z,n.z)}function P_(n){const e=xt(n),i=(73.6667+1.3958333*(e.tt-15020)/36525-90)*Math.PI/180,s=(90-7.25)*Math.PI/180,r=new Mt(Math.cos(s)*Math.cos(i),Math.cos(s)*Math.sin(i),Math.sin(s),e),a=Ja(F0(e),r);return In(a).normalize()}const D_=-.309,L_=.087,I_=`
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;
  void main() {
    vLocalNormal = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,N_=`
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

    // v runs 0 at the south pole to 1 at the north, and is sampled directly.
    //
    // Every texture on this globe is equirectangular with north at the top row
    // -- the NASA rasters, the vector base map, the coastline overlay and the
    // aurora grid all share (90 - lat) / 180 * height. three.js uploads images
    // with flipY on by default, which puts the image's *bottom* row at t = 0.
    // So t = 1 is north, and sampling 1.0 - v put north at t = 0 and read the
    // southern hemisphere onto the northern one. The whole planet was upside
    // down, and had been since the base map was flat green blobs where nobody
    // could tell.
    float v = 0.5 + asin(clamp(n.y, -1.0, 1.0)) / PI;
    vec3 surface = texture2D(uSurface, vec2(u, v)).rgb;

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
    vec3 lights = texture2D(uNight, vec2(u, v)).rgb;
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
    float aurora = texture2D(uAurora, vec2(u, v)).r * uAuroraStrength;
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
    vec4 overlay = texture2D(uOverlay, vec2(u, v));
    color = mix(color, overlay.rgb, overlay.a * uOverlayOn * (0.35 + 0.65 * day));

    gl_FragColor = vec4(color, 1.0);
    // A raw ShaderMaterial bypasses Three's automatic output conversion. The
    // texture is decoded sRGB -> linear on sampling, so without re-encoding
    // here every colour is written ~2.2 gamma too dark and the lit day side
    // reads as night.
    #include <colorspace_fragment>
  }
`,U_=`
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,F_=`
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
`;function O_(){const n=document.createElement("canvas");return n.width=1,n.height=1,new sr(n)}function Ju(){const n=document.createElement("canvas");return n.width=1,n.height=1,new sr(n)}function Qu(n){const e=new Ot(n);return e.needsUpdate=!0,e.colorSpace=Ft,e.magFilter=kt,e.generateMipmaps=!0,e.minFilter=di,e.anisotropy=8,e}class k_{group=new sn;spin=new sn;globe;material;atmosphere;atmosphereMat;auroraCanvas=null;auroraTexture=null;auroraStamp=null;nightTexture=null;dayTexture=null;overlayCanvas=null;overlayTexture=null;constructor(e=1){const t=new sr(B4(2048));t.colorSpace=Ft,t.minFilter=kt,t.magFilter=kt,t.anisotropy=4,this.material=new an({uniforms:{uSurface:{value:t},uNight:{value:Ju()},uNightStrength:{value:0},uOverlay:{value:Ju()},uOverlayOn:{value:0},uAurora:{value:O_()},uAuroraStrength:{value:0},uSunDir:{value:new P(1,0,0)},uTwilightStart:{value:D_},uTwilightEnd:{value:L_},uNightTint:{value:new He(.1,.13,.2)}},vertexShader:I_,fragmentShader:N_}),this.globe=new Pt(new Si(e,96,64),this.material),this.globe.name="earth-globe",this.spin.name="earth-fixed-frame",this.spin.add(this.globe),this.group.add(this.spin),this.atmosphereMat=new an({uniforms:{uSunDir:{value:new P(1,0,0)},uColor:{value:new He(.38,.62,1)}},vertexShader:U_,fragmentShader:F_,transparent:!0,blending:rn,depthWrite:!1,side:Kt}),this.atmosphere=new Pt(new Si(e*1.05,64,48),this.atmosphereMat),this.group.add(this.atmosphere)}setAurora(e,t){if(!e||!t){this.material.uniforms.uAuroraStrength.value=0;return}this.auroraStamp!==e.forecast_time&&(this.auroraStamp=e.forecast_time,this.auroraCanvas=V4(e.grid,this.auroraCanvas??void 0),this.auroraTexture||(this.auroraTexture=new sr(this.auroraCanvas),this.auroraTexture.colorSpace=Ft,this.auroraTexture.minFilter=kt,this.auroraTexture.magFilter=kt,this.material.uniforms.uAurora.value=this.auroraTexture),this.auroraTexture.needsUpdate=!0),this.material.uniforms.uAuroraStrength.value=1/100}setDayImage(e){this.dayTexture?.dispose(),this.dayTexture=Qu(e),this.material.uniforms.uSurface.value=this.dayTexture}setNightImage(e){this.nightTexture?.dispose(),this.nightTexture=Qu(e),this.material.uniforms.uNight.value=this.nightTexture,this.material.uniforms.uNightStrength.value=1}get surfaceIsImagery(){return this.dayTexture!==null}get lightsAreLoaded(){return this.nightTexture!==null}setCoastOverlay(e){this.material.uniforms.uOverlayOn.value=e?1:0,!(!e||this.overlayTexture)&&(this.overlayCanvas=z4(2048),this.overlayTexture=new sr(this.overlayCanvas),this.overlayTexture.colorSpace=Ft,this.overlayTexture.minFilter=kt,this.overlayTexture.magFilter=kt,this.material.uniforms.uOverlay.value=this.overlayTexture)}get coastOverlayOn(){return this.material.uniforms.uOverlayOn.value>0}setRadius(e){this.globe.scale.setScalar(e),this.atmosphere.scale.setScalar(e)}update(e,t){this.spin.rotation.y=Xc(e)*Math.PI/180,this.material.uniforms.uSunDir.value.copy(t),this.atmosphereMat.uniforms.uSunDir.value.copy(t)}dispose(){this.globe.geometry.dispose(),this.material.dispose(),this.atmosphereMat.dispose(),this.atmosphere.geometry.dispose(),this.material.uniforms.uSurface.value.dispose(),this.auroraTexture?.dispose(),this.dayTexture?.dispose(),this.nightTexture?.dispose(),this.overlayTexture?.dispose()}}const Is=1495978707e-1,gr={Sun:695700,Mercury:2439.7,Venus:6051.8,Earth:6371,Mars:3389.5,Jupiter:69911,Saturn:58232,Uranus:25362,Neptune:24622,Moon:1737.4},ed={inner:1.24,outer:2.27},ka=8,B_=3,z_=.05;function Ns(n,e){return e==="true"?n*ka:B_*Math.log10(1+n/z_)}function ci(n,e){const t=gr[n]/Is;if(e==="true")return t*ka;const i={Sun:10,Mercury:380,Venus:265,Earth:300,Mars:360,Moon:320,Jupiter:54,Saturn:58,Uranus:103,Neptune:103};return t*ka*i[n]}function H0(n){return n==="globe"?"Globe scale — distances log-compressed, bodies enlarged":"True scale — distances and sizes to scale"}function V_(n,e,t){return e==="true"?n*ka:t*3.2*(n/.00257)}const H_=235,G_=16;function td(n,e){return e==="true"?n:n/H_*G_}const $_=gr.Sun/Is,W_=`
  varying vec3 vLocal;
  void main() {
    // Position on the unit sphere in the Sun's own frame — the projection is
    // defined there, not in view space, so it does not move with the camera.
    vLocal = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,X_=`
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
`,j_=`
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
`,q_=`
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
`,nd={coronagraph:.2,disk:0},id={coronagraph:.8,disk:.3},Y_=6.32;class sd{mesh;mat;texture=null;cal=null;mode="globe";sunRadius=1;constructor(e){this.mat=new an({uniforms:{uImage:{value:null},uEarthDir:{value:new P(1,0,0)},uNorth:{value:new P(0,1,0)},uCentre:{value:new Ve(.5,.5)},uRsun:{value:.02},uInner:{value:1},uInnerSoft:{value:1.05},uEdge:{value:6},uFloor:{value:new P(0,0,0)},uFloorMix:{value:nd.coronagraph},uSkyOpacity:{value:id.coronagraph},uExtent:{value:1},uCover:{value:1},uIntensity:{value:1}},vertexShader:j_,fragmentShader:q_,transparent:!0,blending:zi,depthWrite:!1,side:pn}),this.mesh=new Pt(new Ar(2,2),this.mat),this.mesh.visible=!1,this.mesh.renderOrder=e}get visible(){return this.mesh.visible}reachRsun(){return this.mesh.visible&&this.cal?this.cal.halfWidthRsun:0}set(e,t){if(!e||!t){this.mesh.visible=!1,this.cal=null;return}const i=new Ot(e);i.colorSpace=Ft,i.needsUpdate=!0,this.texture?.dispose(),this.texture=i,this.cal=t;const s=this.mat.uniforms;s.uImage.value=i,s.uCentre.value.set(t.centre.u,t.centre.v),s.uRsun.value=t.rsun,s.uInner.value=t.innerRsun,s.uInnerSoft.value=t.innerRsun*(t.kind==="disk"?1.015:1.15),s.uFloor.value.set(t.background.r,t.background.g,t.background.b),s.uFloorMix.value=nd[t.kind],s.uSkyOpacity.value=id[t.kind],this.applyScale(),this.mesh.visible=!0}setScaleMode(e){this.mode=e,this.applyScale()}setSunRadius(e){this.sunRadius=e,this.applyScale()}setViewGeometry(e,t){this.mat.uniforms.uEarthDir.value.copy(e).normalize(),this.mat.uniforms.uNorth.value.copy(t).normalize()}applyScale(){if(!this.cal)return;const e=this.cal.halfWidthRsun,t=Ns(e*$_,this.mode),i=this.sunRadius*e/this.cal.innerRsun;this.mat.uniforms.uExtent.value=Math.max(t,i),this.mat.uniforms.uCover.value=e,this.mat.uniforms.uEdge.value=e}dispose(){this.texture?.dispose(),this.mat.dispose(),this.mesh.geometry.dispose()}}class K_{group=new sn;disc;discMat;texture=null;image=null;calibration=null;diskPlane=new sd(2);coronaPlane=new sd(3);constructor(e=1){this.discMat=new an({uniforms:{uDisk:{value:null},uHasImage:{value:0},uEarthDir:{value:new P(1,0,0)},uNorth:{value:new P(0,1,0)},uCentre:{value:new Ve(.5,.5)},uRadius:{value:.3},uBase:{value:new He(1,.93,.76)},uUnobserved:{value:new He(.055,.042,.038)}},vertexShader:W_,fragmentShader:X_}),this.disc=new Pt(new Si(e,64,48),this.discMat),this.disc.name="sun-disc",this.group.add(this.disc),this.group.add(this.diskPlane.mesh),this.group.add(this.coronaPlane.mesh)}setRadius(e){this.disc.scale.setScalar(e),this.diskPlane.setSunRadius(e),this.coronaPlane.setSunRadius(e)}setScaleMode(e){this.diskPlane.setScaleMode(e),this.coronaPlane.setScaleMode(e)}setDiskPlane(e,t){this.diskPlane.set(e,t)}setCoronaPlane(e,t){this.coronaPlane.set(e,t)}setImage(e,t){if(!e||!t){this.discMat.uniforms.uHasImage.value=0,this.image=null,this.calibration=null;return}this.image=e,this.calibration=t;const i=new Ot(e);i.colorSpace=Ft,i.needsUpdate=!0,this.texture?.dispose(),this.texture=i,this.discMat.uniforms.uDisk.value=i,this.discMat.uniforms.uCentre.value.set(t.centre.u,t.centre.v),this.discMat.uniforms.uRadius.value=t.radius,this.discMat.uniforms.uHasImage.value=1}reachRsun(){return Math.max(Y_,this.diskPlane.reachRsun(),this.coronaPlane.reachRsun())}get hasImage(){return this.discMat.uniforms.uHasImage.value===1}projection(){return!this.image||!this.calibration?null:{image:this.image,calibration:this.calibration,north:this.discMat.uniforms.uNorth.value.clone(),earthDir:this.discMat.uniforms.uEarthDir.value.clone()}}setViewGeometry(e,t){this.discMat.uniforms.uEarthDir.value.copy(e).normalize(),this.discMat.uniforms.uNorth.value.copy(t).normalize(),this.diskPlane.setViewGeometry(e,t),this.coronaPlane.setViewGeometry(e,t)}dispose(){this.texture?.dispose(),this.discMat.dispose(),this.disc.geometry.dispose(),this.diskPlane.dispose(),this.coronaPlane.dispose()}}const li=256,G0=.94,Z_=.12,J_=.92;function Q_(n){const e=document.createElement("canvas");e.width=li,e.height=li;const t=e.getContext("2d",{willReadFrequently:!0});if(!t)return null;let i;try{t.drawImage(n,0,0,li,li),i=t.getImageData(0,0,li,li).data}catch{return null}return $0(e5(i,li),li)}function e5(n,e){const t=new Float32Array(e*e);for(let i=0;i<e*e;i++)t[i]=.299*n[i*4]+.587*n[i*4+1]+.114*n[i*4+2];return t}function $0(n,e){const t=Math.floor(e*G0);if(t<8)return null;let i=rd(n,e,t,null);if(!i)return null;let s=ad(n,e,t,i);if(s<0)return null;for(let r=0;r<2;r++){const a=rd(n,e,t,{...i,r:s*1.05});if(!a)break;const o=ad(n,e,t,a);if(o<=0)break;i=a,s=o}return{centre:{u:i.x/e,v:1-i.y/e},radius:s/e}}function rd(n,e,t,i){let s=0,r=0,a=0;for(let o=0;o<t;o++)for(let l=0;l<e;l++){if(i&&Math.hypot(l-i.x,o-i.y)>i.r)continue;const c=n[o*e+l]**2;s+=l*c,r+=o*c,a+=c}return a>0?{x:s/a,y:r/a}:null}function ad(n,e,t,i){const s=Math.floor(e/2),r=new Float64Array(s),a=new Float64Array(s);for(let u=0;u<t;u++)for(let f=0;f<e;f++){const d=Math.round(Math.hypot(f-i.x,u-i.y));d>=s||(r[d]+=n[u*e+f],a[d]+=1)}let o=-1,l=0;const c=Math.floor(s*Z_),h=Math.floor(s*J_);for(let u=c;u<h-1;u++){if(a[u]===0||a[u+1]===0)continue;const f=r[u]/a[u]-r[u+1]/a[u+1];f>l&&(l=f,o=u)}return o}const St=512,t5=[.05,.075,.11,.16],W0=190,X0=25,n5=.25,od=24,i5=2.5,s5=.6,r5=.25,Zo=24;function ld(n){const e=n.length;if(e<3)return null;let t=0,i=0,s=0,r=0,a=0,o=0,l=0,c=0;for(const{x,y:v}of n){const T=x*x+v*v;t+=x,i+=v,s+=x*x,r+=v*v,a+=x*v,o+=x*T,l+=v*T,c+=T}const h=2*(s-t*t/e),u=2*(a-t*i/e),f=2*(r-i*i/e),d=o-t*c/e,g=l-i*c/e,_=h*f-u*u;if(Math.abs(_)<1e-9)return null;const m=(d*f-u*g)/_,p=(h*g-d*u)/_;let S=0;for(const{x,y:v}of n)S+=Math.hypot(x-m,v-p);return{cx:m,cy:p,r:S/e}}function a5(n,e,t){const i=n.map(s=>Math.hypot(s.x-e,s.y-t)).sort((s,r)=>s-r);return(i[Math.floor(i.length*.9)]-i[Math.floor(i.length*.1)])/2}function o5(n,e){for(const t of t5){const i=l5(n,e,Math.round(e*t));if(i)return i}return null}function l5(n,e,t){const i=e/2;let s=[];for(let h=Math.max(0,Math.floor(i-t));h<Math.min(e,i+t);h++)for(let u=Math.max(0,Math.floor(i-t));u<Math.min(e,i+t);u++){const f=(h*e+u)*4,d=n[f],g=n[f+1],_=n[f+2],m=Math.min(d,g,_);m>W0&&Math.max(d,g,_)-m<X0&&s.push({x:u,y:h})}if(s.length<od)return null;let r=ld(s);if(!r)return null;for(let h=0;h<3;h++){const u=s.filter(d=>Math.abs(Math.hypot(d.x-r.cx,d.y-r.cy)-r.r)<2.5);if(u.length<od)break;const f=ld(u);if(!f)break;s=u,r=f}if(r.r<=1||r.r>t)return null;const a=a5(s,r.cx,r.cy);if(a>i5||c5(s,r.cx,r.cy)<s5||h5(n,e,r.cx,r.cy,r.r,s.length)>r5)return null;const o=u5(n,e,r.cx,r.cy,r.r),l=e/2/r.r,c=j0(n,e,r.cx,r.cy,o,l*r.r);return{kind:"coronagraph",centre:{u:r.cx/e,v:1-r.cy/e},rsun:r.r/e,halfWidthRsun:l,innerRsun:o/r.r,background:c,residualPx:a}}function c5(n,e,t){const i=new Set;for(const{x:s,y:r}of n){const a=Math.atan2(r-t,s-e)+Math.PI;i.add(Math.min(Zo-1,Math.floor(a/(2*Math.PI)*Zo)))}return i.size/Zo}function h5(n,e,t,i,s,r){const a=s*.6;let o=0;const l=Math.max(0,Math.floor(t-a)),c=Math.min(e,Math.ceil(t+a)),h=Math.max(0,Math.floor(i-a)),u=Math.min(e,Math.ceil(i+a));for(let f=h;f<u;f++)for(let d=l;d<c;d++){if(Math.hypot(d-t,f-i)>a)continue;const g=(f*e+d)*4,_=n[g],m=n[g+1],p=n[g+2],S=Math.min(_,m,p);S>W0&&Math.max(_,m,p)-S<X0&&o++}return r>0?o/r:1}function j0(n,e,t,i,s,r){const a=[[],[],[]];for(let l=0;l<e;l+=2)for(let c=0;c<e;c+=2){const h=Math.hypot(c-t,l-i);if(h<s||h>r)continue;const u=(l*e+c)*4;a[0].push(n[u]),a[1].push(n[u+1]),a[2].push(n[u+2])}if(a[0].length<32)return{r:0,g:0,b:0};const o=l=>(l.sort((c,h)=>c-h),l[Math.floor(l.length*n5)]/255);return{r:o(a[0]),g:o(a[1]),b:o(a[2])}}function u5(n,e,t,i,s){const r=Math.floor(e/2),a=new Float64Array(r),o=new Uint32Array(r);for(let d=0;d<e;d++)for(let g=0;g<e;g++){const _=Math.round(Math.hypot(g-t,d-i));if(_>=r)continue;const m=(d*e+g)*4;a[_]+=(n[m]+n[m+1]+n[m+2])/3,o[_]+=1}const l=new Float64Array(r);for(let d=0;d<r;d++)l[d]=o[d]?a[d]/o[d]:0;const c=Math.max(2,Math.ceil(s*1.3)),h=Math.min(r-2,Math.floor(s*8));let u=Math.round(s*2.2),f=0;for(let d=c;d<h;d++){const g=l[d+1]-l[d-1];g>f&&(f=g,u=d)}return u}function d5(n){const e=document.createElement("canvas");e.width=St,e.height=St;const t=e.getContext("2d",{willReadFrequently:!0});if(!t)return null;try{return t.drawImage(n,0,0,St,St),o5(t.getImageData(0,0,St,St).data,St)}catch{return null}}function f5(n){const e=document.createElement("canvas");e.width=St,e.height=St;const t=e.getContext("2d",{willReadFrequently:!0});if(!t)return null;let i;try{t.drawImage(n,0,0,St,St),i=t.getImageData(0,0,St,St).data}catch{return null}const s=new Float32Array(St*St);for(let c=0,h=0;c<s.length;c++,h+=4)s[c]=(i[h]+i[h+1]+i[h+2])/3;const r=$0(s,St);if(!r||r.radius<=0)return null;const a=r.radius*St,o=r.centre.u*St,l=(1-r.centre.v)*St;return{kind:"disk",centre:r.centre,rsun:r.radius,halfWidthRsun:p5(St,l,a),innerRsun:1,background:j0(i,St,o,l,a,St/2),residualPx:null}}function p5(n,e,t){return Math.min(n/2/t,(G0*n-e)/t)}function m5(n,e,t){const i=[];t&&i.push({label:"disk, on the sphere",fromRsun:0,toRsun:1}),n&&i.push({label:"off-limb, on the card",fromRsun:1,toRsun:n.halfWidthRsun}),e&&i.push({label:"coronagraph",fromRsun:e.innerRsun,toRsun:e.halfWidthRsun}),i.sort((a,o)=>a.fromRsun-o.fromRsun);const s=[];let r=0;for(const a of i)a.fromRsun>r+.05&&s.push({label:null,fromRsun:r,toRsun:a.fromRsun}),s.push(a),r=Math.max(r,a.toRsun);return s}const Ra={Mercury:10260355,Venus:14731680,Earth:4882357,Mars:12673340,Jupiter:14070924,Saturn:14930082,Uranus:10475742,Neptune:5996500};function g5(n){const e=new Pt(new Xa(1,1.12,32),new ks({color:n,transparent:!0,opacity:.55,side:pn,blending:rn,depthWrite:!1}));return e.renderOrder=3,e}class _5{constructor(e){this.name=e,this.mesh=new Pt(new Si(1,40,28),new f0({color:Ra[e],emissive:Ra[e],emissiveIntensity:.12})),this.mesh.name=`planet-${e}`,this.marker=g5(Ra[e]),this.group.add(this.mesh,this.marker),e==="Saturn"&&(this.rings=new Pt(new Xa(ed.inner,ed.outer,72),new ks({color:15260853,transparent:!0,opacity:.42,side:pn,depthWrite:!1})),this.rings.name="saturn-rings",this.group.add(this.rings))}name;group=new sn;mesh;marker;rings=null;update(e,t,i){const s=mr(this.name,e).helio,r=In(s),a=r.length();r.normalize().multiplyScalar(Ns(a,t)),this.group.position.copy(r);const o=ci(this.name,t);this.mesh.scale.setScalar(o),this.rings&&(this.rings.scale.setScalar(o),this.rings.quaternion.setFromUnitVectors(new P(0,0,1),A_(this.name,e)),this.rings.visible=o>.004);const c=i.distanceTo(r)*.012;this.marker.scale.setScalar(c),this.marker.visible=o<c*.9,this.marker.lookAt(i)}}class v5{line;constructor(e,t,i){const s=new bt;this.line=new Wa(s,new Wi({color:Ra[e],transparent:!0,opacity:.22})),this.line.name=`orbit-${e}`,this.rebuild(e,t,i)}rebuild(e,t,i){const s={Mercury:87.97,Venus:224.7,Earth:365.256,Mars:686.98,Jupiter:4332.6,Saturn:10759,Uranus:30689,Neptune:60195},r=240,a=[];for(let o=0;o<=r;o++){const l=new Date(i.getTime()+o/r*s[e]*864e5),c=In(mr(e,l).helio),h=c.length();c.normalize().multiplyScalar(Ns(h,t)),a.push(c.x,c.y,c.z)}this.line.geometry.setAttribute("position",new at(a,3)),this.line.geometry.computeBoundingSphere()}}class x5{mesh;constructor(){this.mesh=new Pt(new Si(1,32,24),new f0({color:new He(.72,.71,.68)})),this.mesh.name="moon"}}function y5(){const n=new Map;for(const e of B0)n.set(e,new _5(e));return n}function b5(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function S5(n=2600,e=900){const t=b5(3928446791),i=[],s=[];for(let l=0;l<n;l++){const c=t()*2-1,h=t()*Math.PI*2,u=Math.sqrt(1-c*c);i.push(e*u*Math.cos(h),e*c,e*u*Math.sin(h));const f=.65+t()*.35,d=t();s.push(f*(.85+d*.15),f*.9,f*(1-d*.12))}const r=new bt;r.setAttribute("position",new at(i,3)),r.setAttribute("color",new at(s,3));const a=new h0({size:1.4,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.85,blending:rn,depthWrite:!1}),o=new k1(r,a);return o.name="starfield",o.frustumCulled=!1,o}const cd={type:"change"},jc={type:"start"},q0={type:"end"},ha=new Er,hd=new hi,M5=Math.cos(70*o1.DEG2RAD),Rt=new P,en=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jo=1e-6;class w5 extends q1{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Gi,this._lastTargetPosition=new P,this._quat=new Gi().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _u,this._sphericalDelta=new _u,this._scale=1,this._panOffset=new P,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new P,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T5.bind(this),this._onPointerDown=E5.bind(this),this._onPointerUp=A5.bind(this),this._onContextMenu=N5.bind(this),this._onMouseWheel=P5.bind(this),this._onKeyDown=D5.bind(this),this._onTouchStart=L5.bind(this),this._onTouchMove=I5.bind(this),this._onMouseDown=R5.bind(this),this._onMouseMove=C5.bind(this),this._interceptControlDown=U5.bind(this),this._interceptControlUp=F5.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Rt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<M5?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jo||this._lastTargetPosition.distanceToSquared(this.target)>Jo?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function E5(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function T5(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function A5(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(q0),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function R5(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case Ms.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case Ms.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(jc)}function C5(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function P5(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(q0))}function D5(n){this.enabled!==!1&&this._handleKeyDown(n)}function L5(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(jc)}function I5(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function N5(n){this.enabled!==!1&&n.preventDefault()}function U5(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F5(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _r=[{id:"deck",label:"Deck",title:"Behind Earth looking back down the Sun–Earth line: both bodies in frame, with the wind and the field lines running between them"},{id:"sunward",label:"Sunward",title:"Looking down the Sun–Earth line from the Sun: the magnetopause face-on"},{id:"profile",label:"Profile",title:"The noon–midnight meridian: nose compression against tail flaring"},{id:"polar",label:"Polar",title:"Over the north pole with noon at the top: the auroral oval as a ring, offset because it encircles the magnetic pole rather than this one"},{id:"corona",label:"Corona",title:"The Sun from where we stand, framed for the coronagraphs: LASCO photographs down this exact line, so its image plane is face-on here"},{id:"system",label:"System",title:"The whole solar system, all eight planets at their true positions"}],O5=1100,k5=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;class B5{camera;controls;view="deck";upHint=new P(0,1,0);from=new P;to=new P;fromTarget=new P;toTarget=new P;startedAt=0;transitioning=!1;reducedMotion=!1;constructor(e,t){this.camera=new cn(45,t,5e-4,5e3),this.camera.position.set(0,2.2,7.5),this.controls=new w5(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=.02,this.controls.maxDistance=400,this.controls.enablePan=!0}setReducedMotion(e){this.reducedMotion=e}goTo(e,t,i,s,r,a=!1){this.view=e;const o=new P(0,1,0);let l=e==="system"||e==="corona"?new P(0,0,0):t.clone(),c;if(e==="profile"){const h=new P().crossVectors(s,o).normalize();l=t.clone().addScaledVector(s,-i*6),c=t.clone().add(h.multiplyScalar(i*52)).add(s.clone().multiplyScalar(i*4)).add(new P(0,i*18,0))}else if(e==="sunward")c=t.clone().addScaledVector(s,i*26);else if(e==="polar")c=t.clone().addScaledVector(o,i*3.4);else if(e==="corona"){const h=r/Math.tan(this.camera.fov*Math.PI/360),u=t.length()*.92;c=s.clone().negate().normalize().multiplyScalar(Math.min(h*1.25,u))}else if(e==="deck"){const h=new P().crossVectors(s,o).normalize();c=t.clone().addScaledVector(s,-i*14).add(h.multiplyScalar(i*1.5)).add(new P(0,i*1.5,0))}else c=new P(0,8.5,19);this.upHint=e==="polar"?s.clone().negate().normalize():o.clone(),this.camera.up.copy(this.upHint),this.animateTo(c,l,a)}get focus(){return this.controls.target}animateTo(e,t,i=!1){if(this.reducedMotion||i){this.camera.position.copy(e),this.controls.target.copy(t),this.controls.update(),this.transitioning=!1;return}this.from.copy(this.camera.position),this.to.copy(e),this.fromTarget.copy(this.controls.target),this.toTarget.copy(t),this.startedAt=performance.now(),this.transitioning=!0}update(){if(this.transitioning){const e=Math.min(1,(performance.now()-this.startedAt)/O5),t=k5(e);this.camera.position.lerpVectors(this.from,this.to,t),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,t),e>=1&&(this.transitioning=!1)}this.controls.update()}followTarget(e){if(this.view!=="deck"||this.transitioning)return;const t=e.clone().sub(this.controls.target);t.lengthSq()!==0&&(this.controls.target.copy(e),this.camera.position.add(t))}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose()}}const vr=13,Qa=2025,Ba=2030,z5=6371.2,nn=(n,e)=>n*(n+1)/2+e,za=[0,-29350,-1410.3,-2556.2,2950.9,1648.7,1360.9,-2404.2,1243.8,453.4,894.7,799.6,55.8,-281.1,12,-232.9,369,187.2,-138.7,-141.9,20.9,64.3,63.8,76.7,-115.7,-40.9,14.9,-60.8,79.6,-76.9,-8.8,59.3,15.8,2.5,-11.2,14.3,23.1,10.9,-17.5,2,-21.8,16.9,14.9,-16.8,1,4.7,8,3,-.2,-2.5,-13.1,2.4,8.6,-8.7,-12.8,-1.3,-6.4,.2,2,-1,-.5,-.9,1.5,.9,-2.6,-3.9,3,-1.4,-2.5,2.4,-.6,0,-.6,-.1,1.1,-1,-.1,2.6,-2,-.1,.4,1.2,-1.2,.6,.5,.5,-.1,-.5,-.2,-1.2,-.7,.2,-.9,.6,.7,-.2,.5,.1,.7,0,.3,.2,.4,-.5,-.4],Y0=[0,0,4545.5,0,-3133.6,-814.2,0,-56.9,237.6,-549.6,0,278.6,-134,212,-375.4,0,45.3,220,-122.9,42.9,106.2,0,-18.4,16.8,48.9,-59.8,10.9,72.8,0,-48.9,-14.4,-1,23.5,-7.4,-25.1,-2.2,0,7.2,-12.6,11.5,-9.7,12.7,.7,-5.2,3.9,0,-24.8,12.1,8.3,-3.4,-5.3,7.2,-.6,.8,9.8,0,3.3,.1,2.5,5.4,-9,.4,-4.2,-3.8,.9,-9,0,0,2.8,-.6,.1,.5,-.3,-1.2,-1.7,-2.9,-1.8,-2.3,0,-1.2,.6,1,-1.5,0,.6,-.2,.8,.1,-.9,.1,.2,0,-.9,.7,1.2,-.3,-1.3,-.1,.2,-.2,.5,.6,-.6,-.3,-.5],V5=[0,12.6,10,-11.2,-5.3,-8.3,-1.5,-4.4,.4,-15.6,-1.7,-2.3,-5.8,5.4,-6.8,.6,1.3,0,.7,2.3,1,-.2,-.3,.8,1.2,-.8,.4,.9,-.1,-.1,-.1,.5,-.1,-.8,-.8,.9,-.1,.2,0,.4,-.1,.3,.1,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],H5=[0,0,-21.5,0,-27.3,-11.1,0,3.8,-.2,-3.9,0,-1.3,4.1,1.6,-4.1,0,-.5,2.1,.5,1.7,1.9,0,.3,-1.6,-.4,.8,.7,.9,0,.6,.5,-.7,0,-.9,.5,-.3,0,-.3,.4,-.3,.4,-.5,-.6,.3,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function eo(n){const e=n.getUTCFullYear(),t=Date.UTC(e,0,1),i=Date.UTC(e+1,0,1);return e+(n.getTime()-t)/(i-t)}function K0(n){const e=eo(n);return e>=Qa&&e<=Ba}function Z0(n){const e=`IGRF-14 (IAGA, epoch ${Qa.toFixed(1)}`;return K0(n)?`${e}, secular variation to now)`:`${e}, extrapolated past its ${Ba.toFixed(1)} validity limit)`}function G5(n){const e=n-Qa,t=za.length,i=new Float64Array(t),s=new Float64Array(t);for(let r=0;r<t;r++)i[r]=za[r]+e*V5[r],s[r]=Y0[r]+e*H5[r];return{g:i,h:s}}let ud=Number.NaN,Qo=null;function J0(n){const e=Math.round(n*100)/100;return(e!==ud||!Qo)&&(ud=e,Qo=G5(e)),Qo}const Q0=nn(vr,vr)+1,tn=new Float64Array(Q0),Tn=new Float64Array(Q0),el=new Float64Array(vr+1),tl=new Float64Array(vr+1);function $5(n,e,t,i){const{g:s,h:r}=J0(eo(i)),a=vr,o=1e-8;let l=Math.cos(n),c=Math.sin(n);Math.abs(c)<o&&(c=c>=0?o:-o,l=Math.sign(l)*Math.sqrt(1-o*o)),tn[nn(0,0)]=1,Tn[nn(0,0)]=0;for(let _=1;_<=a;_++)for(let m=0;m<=_;m++){const p=nn(_,m);if(_===m)if(_===1)tn[p]=c,Tn[p]=l;else{const S=Math.sqrt((2*_-1)/(2*_)),x=nn(_-1,_-1);tn[p]=S*c*tn[x],Tn[p]=S*(c*Tn[x]+l*tn[x])}else{const S=Math.sqrt(_*_-m*m),x=(2*_-1)/S,v=nn(_-1,m);if(_-2>=m){const T=Math.sqrt((_-1)*(_-1)-m*m)/S,w=nn(_-2,m);tn[p]=x*l*tn[v]-T*tn[w],Tn[p]=x*(l*Tn[v]-c*tn[v])-T*Tn[w]}else tn[p]=x*l*tn[v],Tn[p]=x*(l*Tn[v]-c*tn[v])}}for(let _=0;_<=a;_++)el[_]=Math.cos(_*e),tl[_]=Math.sin(_*e);const h=z5/t;let u=0,f=0,d=0,g=h*h;for(let _=1;_<=a;_++){g*=h;let m=0,p=0,S=0;for(let x=0;x<=_;x++){const v=nn(_,x),T=s[v],w=r[v],C=T*el[x]+w*tl[x];m+=C*tn[v],p+=C*Tn[v],S+=x*(T*tl[x]-w*el[x])*tn[v]}u+=g*(_+1)*m,f-=g*p,d+=g*S}return d/=c,{br:u,btheta:f,bphi:d}}function W5(n,e,t=new P){const i=n.length();if(i<1)return t.set(0,0,0);const s=Math.acos(Math.max(-1,Math.min(1,n.z/i))),r=Math.atan2(n.y,n.x),{br:a,btheta:o,bphi:l}=$5(s,r,i,e),c=Math.sin(s),h=Math.cos(s),u=Math.sin(r),f=Math.cos(r);return t.set(a*c*f+o*h*f-l*u,a*c*u+o*h*u+l*f,a*h-o*c)}function X5(n,e,t,i){const s=Math.PI/180,r=n*s,a=t*s,o=(i-e)*s,l=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(o);return Math.acos(Math.max(-1,Math.min(1,l)))*180/Math.PI}function ef(n){const{g:e,h:t}=J0(eo(n)),i=e[nn(1,0)],s=e[nn(1,1)],r=t[nn(1,1)],a=-s,o=-r,l=-i,c=Math.sqrt(a*a+o*o+l*l);return{lat:Math.asin(l/c)*180/Math.PI,lon:Math.atan2(o,a)*180/Math.PI}}function dd(n,e,t=new P){const i=n*Math.PI/180,s=e*Math.PI/180,r=Math.cos(i);return t.set(r*Math.cos(s),r*Math.sin(s),Math.sin(i))}function j5(n){const e=Oa(n),t=ef(n),i=dd(e.lat,e.lon),s=dd(t.lat,t.lon),r=new P().crossVectors(s,i).normalize(),a=new P().crossVectors(i,r).normalize(),o=Math.atan2(s.dot(i),s.dot(a));return{x:i,y:r,z:a,tilt:o,dipole:s}}function tf(n,e,t=new P){return t.set(n.dot(e.x),n.dot(e.y),n.dot(e.z))}function nf(n,e,t=new P){return t.set(0,0,0).addScaledVector(e.x,n.x).addScaledVector(e.y,n.y).addScaledVector(e.z,n.z)}const xr=7,q5=["0, 0+","1−, 1, 1+","2−, 2, 2+","3−, 3, 3+","4−, 4, 4+","5−, 5, 5+","≥ 6−"],sf=70,Y5=[[-116.53,-10719,42.375,59.753,-11363,1.7844,30.268,-.035372,-.066832,.016456,-1.3024,.0016529,.0020293,20.289,-.025203,224.91,-9234.8,22.788,7.8813,1.8362,-.27228,8.8184,2.8714,14.468,32.177,.01,0,7.0459,4,20],[-55.553,-13198,60.647,61.072,-16064,2.2534,34.407,-.038887,-.094571,.027154,-1.3901,.001346,.0013238,23.005,-.030565,55.047,-3875.7,20.178,7.9693,1.4575,.89471,9.4039,3.5215,14.474,36.555,.01,0,7.0787,4,20],[-101.34,-13480,111.35,12.386,-24699,2.6459,38.948,-.03408,-.12404,.029702,-1.4052,.0012103,.0016381,24.49,-.037705,-298.32,4400.9,18.692,7.9064,1.3047,2.4541,9.7012,7.1624,14.288,33.822,.01,0,6.7442,4,20],[-181.69,-12320,173.79,-96.664,-39051,3.2633,44.968,-.046377,-.16686,.048298,-1.5473,.0010277,.0031632,27.341,-.050655,-514.1,12482,16.257,8.5834,1.0194,3.6148,8.6042,5.5057,13.778,32.373,.01,0,7.3195,4,20],[-436.54,-9001,323.66,-410.08,-50340,3.9932,58.524,-.038519,-.26822,.074528,-1.4268,-.0010985,.0096613,27.557,-.056522,-867.03,20652,14.101,8.3501,.72996,3.8149,9.2908,6.4674,13.729,28.353,.01,0,7.4237,4,20],[-707.77,-4471.9,432.81,-435.51,-60400,4.6229,68.178,-.088245,-.21002,.11846,-2.6711,.0022305,.01091,27.547,-.05408,-424.23,1100.2,13.954,7.5337,.89714,3.7813,8.2945,5.174,14.213,25.237,.01,0,7.0037,4,20],[-1190.4,2749.9,742.56,-1110.3,-77193,7.6727,102.05,-.096015,-.74507,.11214,-1.3614,.0015157,.022283,23.164,-.074146,-2219.1,48253,12.714,7.6777,.57138,2.9633,9.3909,9.7263,11.123,21.558,.01,0,4.4518,4,20]];function rf(n){return Number.isFinite(n)?Math.max(0,Math.min(xr-1,Math.floor(n))):null}function fd(n){return!Number.isFinite(n)||n>=xr-1?.5:Math.max(0,Math.min(1,n-Math.floor(n)))}const K5=20;function Z5(n){return n<=sf}function J5(n){return Z5(n.length())&&n.x<=K5}function af(n){const e=Math.max(0,Math.min(xr-1,n|0));return`band ${e+1} of ${xr}, Kp ${q5[e]}`}function Q5(){return"Tsyganenko 1989 (T89c), external field, Kp-driven — no IMF dependence"}function ev(n,e,t,i=new P){if(!J5(n))return null;const s=Y5[Math.max(0,Math.min(xr-1,e|0))],r=25,a=170,o=30,l=0,c=40,h=4,u=50,f=s[0],d=s[1],g=s[2],_=s[3],m=s[4],p=s[5],S=s[6],x=s[7],v=s[8],T=s[9],w=s[10],C=s[11],L=s[12],E=s[13],b=s[14],D=s[15],k=s[16],V=s[17],X=s[18],Y=s[19],j=s[20],J=s[21],z=s[22],te=s[23],Q=s[24],be=s[25],$e=s[26],Ze=s[27],et=s[28],je=s[29],B=je*je,W=.5*r,se=1/B,O=-.5*u,ce=-2*se,Be=-.5*a,Ee=Y,A=-.5/V,Le=2*be,me=A*2,fe=-1/3,ge=fe/V,Ke=-.5,ve=-3,Oe=p*A+T*Ke,wt=S*me-w,yt=x*me+C*ve,R=v*ge+L*fe,y=n.x,F=n.y,q=n.z,Z=t*t,$=Math.sin(t),ye=Math.sqrt(1-$*$),oe=y*y,_e=F*F,Re=q*q,pe=$/ye*.5,Te=y*ye-q*$,Ce=y*$+q*ye,he=Te+J,Xe=Math.sqrt(he*he+16),I=_e*_e,ie=I+1e4,le=$/ie,Se=z*le,ee=pe*(he-Xe),K=-ee/Xe,Ae=ee-Se*I,We=z*(-le/ie*4e4*_e*F),ot=Te*Te,tt=Math.sqrt(ot+r),mn=.5*(1+Te/tt),Jt=Y+j*mn,Cr=W/(tt*tt*tt),Bt=Ce-Ae,Yi=Math.sqrt(Bt*Bt+Jt*Jt),Pr=1/Yi,Ki=ot+_e,Jn=X+Yi,zs=Jn*Jn,Qn=1/(zs+Ki),Vs=Qn*Qn*Math.sqrt(Qn),Zi=3*Jn*Vs*Pr,Hs=Te*Bt,Gs=F*Bt,Dr=Zi*Hs,so=Zi*Gs,Lr=Te*K+F*We,ro=Bt*Lr-Jt*j*Cr*Te,M=Vs*(2*zs-Ki)+Zi*ro,N=Dr*ye+M*$,G=M*ye-Dr*$;let H=Ee+be*_e,U=0;if(Math.abs(et)>=1e-6){const go=Te-l,Uh=1/(go*go+c),Fh=Math.sqrt(Uh),_p=.5*(1+go*Fh),vp=20*Uh*Fh;H+=et*_p,U=-H*(Te*et*vp)}const ne=Math.sqrt(Bt*Bt+H*H),ue=Te-Ze,Me=1/(ue*ue+a),xe=Math.sqrt(Me),Ne=.5*(1-ue*xe),Ge=Be*xe*Me,De=Math.sqrt(Math.sqrt(ot+16)-Te),Je=-De/(De*De+Te)*.5,st=1/(Q+$e*De),vt=Je*Ne,lt=st*st,it=1/(1+_e*lt),Ie=Ne*it,pt=2*it*_e*lt,nt=pt*st*it,Wt=Ge*it+nt*$e*vt,ei=-Ne*pt*it,Xt=Le*F,En=te+ne,mt=Math.sqrt(En*En+Ki),It=1/mt,jt=1/(mt+En),At=It*jt,Nt=It*It*It,$s=En*Nt,Fn=Bt*Lr-H*F*Xt+U,nh=Te*Wt+ei,ao=Ie/ne,ih=ao*At,sh=ao*Nt,rh=ih*Hs,ah=sh*Hs,oh=ih*Gs,lh=sh*Gs,ch=ao*Fn,hh=Ie*It+nh*jt+ch*At,uh=Ie*$s+nh*At+ch*Nt,dh=rh*ye+hh*$,fh=ah*ye+uh*$,ph=hh*ye-rh*$,mh=uh*ye-ah*$,oo=q+o,lo=q-o,gh=oe+_e,_h=Math.sqrt(oo*oo+gh),vh=Math.sqrt(lo*lo+gh),co=y-h,xh=1/(co*co+u),yh=Math.sqrt(xh),ho=1/(1+_e*se),uo=.5*(1-co*yh)*ho,Zf=O*xh*yh*ho,Jf=ce*uo*ho*F,bh=1/(_h+oo),Sh=1/(vh-lo),Mh=y*Zf+F*Jf,wh=uo/_h,Eh=uo/vh,Th=wh*bh,Ah=Eh*Sh,Rh=y*Th,Ch=-y*Ah,Ph=F*Th,Dh=-F*Ah,Lh=wh+Mh*bh,Ih=Eh+Mh*Sh,Qf=Rh+Ch,ep=(Rh-Ch)*$,tp=Ph+Dh,np=(Ph-Dh)*$,ip=Lh+Ih,sp=(Lh-Ih)*$,Nh=Math.exp(y/V),fo=Nh*ye,po=Nh*$,mo=fo*q,Ir=po*q,rp=Ir*_e,ap=Ir*Re,op=mo*q,Nr=po*F,lp=p*mo+S*po+x*Nr*F+v*Ir*q,cp=T*mo*F+w*Nr+C*Nr*_e+L*Nr*Re,hp=E*fo+b*fo*_e+Oe*op+wt*Ir+yt*rp+R*ap,up=g*Qf+_*ep,dp=g*tp+_*np,fp=g*ip+_*sp,pp=f*dh+d*fh+up+(D*dh+k*fh)*Z,mp=f*oh+d*lh+dp+(D*oh+k*lh)*Z,gp=f*ph+d*mh+fp+(D*ph+k*mh)*Z;return i.set(pp+m*N+lp,mp+m*so+cp,gp+m*G+hp)}const Zt=6371.2,tv=Zt*160,nv={innerRadiusKm:Zt,outerRadiusKm:Zt*15,maxSteps:4e3,stepFraction:.035,minStepKm:40,maxStepKm:2200,maxArcLengthKm:1/0},iv={outerRadiusKm:Zt*sf,maxStepKm:Zt*.25,maxArcLengthKm:tv},nl=new P,il=new P,sl=new P,pd=new P,rl=new P,al=new P,md=new P,sv=new P;function rv(n,e,t,i){return W5(n,e,i),t?(tf(al.copy(n).divideScalar(Zt),t.basis,al),ev(al,t.band,t.basis.tilt,md)?i.add(nf(md,t.basis,sv)):null):i}function ua(n,e,t,i){if(!rv(n,e,t,i))return"out-of-model";const s=i.length();return s>1e-9?(i.divideScalar(s),"ok"):"null-field"}function gd(n,e,t,i={}){const s=i.external??null,r={...nv,...s?iv:null,...i},a=[],o=n.clone();let l=o.length()/Zt,c=0,h="steps";for(let u=0;u<r.maxSteps;u++){a.push(o.clone());const f=o.length();if(l=Math.max(l,f/Zt),u>0&&f<=r.innerRadiusKm){h="surface";break}if(f>=r.outerRadiusKm){h=s?"out-of-model":"outer";break}if(c>=r.maxArcLengthKm){h="truncated";break}const d=Math.min(r.maxStepKm,Math.max(r.minStepKm,r.stepFraction*f)),g=t*d,_=ua(o,e,s,nl);if(_!=="ok"){h=_;break}const m=ua(rl.copy(o).addScaledVector(nl,g/2),e,s,il);if(m!=="ok"){h=m;break}const p=ua(rl.copy(o).addScaledVector(il,g/2),e,s,sl);if(p!=="ok"){h=p;break}const S=ua(rl.copy(o).addScaledVector(sl,g),e,s,pd);if(S!=="ok"){h=S;break}o.addScaledVector(nl,g/6).addScaledVector(il,g/3).addScaledVector(sl,g/3).addScaledVector(pd,g/6),c+=d}return{points:a,startsAt:"surface",endsAt:h,apexRe:l,closed:!1,truncated:h==="truncated"||h==="out-of-model"}}function of(n,e,t={}){const i=gd(n,e,1,t),s=gd(n,e,-1,t);return{points:[...s.points.slice(1).reverse(),...i.points],startsAt:s.endsAt,endsAt:i.endsAt,apexRe:Math.max(i.apexRe,s.apexRe),closed:s.endsAt==="surface"&&i.endsAt==="surface",truncated:i.truncated||s.truncated}}function av(n,e,t=0){const i=n*Math.PI/180,s=e*Math.PI/180,r=Zt+t;return new P(r*Math.cos(i)*Math.cos(s),r*Math.cos(i)*Math.sin(s),r*Math.sin(i))}const qc={latitudes:[-72,-64,-55,-42,-28,28,42,55,64,72],meridianCount:8,altitudeKm:120},ov={latitudes:[-55,55],meridianCount:6,altitudeKm:120};function lv(n=qc){const e=[];for(const t of n.latitudes)for(let i=0;i<n.meridianCount;i++)e.push(av(t,360/n.meridianCount*i,n.altitudeKm));return e}function lf(n,e){if(e===null)return null;const t=rf(e);return t===null?null:{basis:j5(n),band:t}}function cv(n,e){const t=Zt+qc.altitudeKm,i=new P,s={external:e,outerRadiusKm:Zt*25},r=u=>{const f=u*Math.PI/180;return nf(i.set(Math.cos(f),0,Math.sin(f)).multiplyScalar(t),e.basis)},a=u=>{const f=of(r(u),n,s);if(!f.closed)return-1/0;let d=-1/0;for(const g of f.points)d=Math.max(d,tf(i.copy(g).divideScalar(Zt),e.basis,i).x);return d},o=(u,f,d)=>{let g=u,_=-1/0;for(let m=u;m<=f;m+=d){const p=a(m);p>_&&(_=p,g=m)}return _===-1/0?Number.NaN:g},l=o(-88,88,4);if(Number.isNaN(l))return null;const c=o(l-4,l+4,1),h=a(Number.isNaN(c)?l:c);return Number.isFinite(h)?h:null}function hv(n,e){return 16726e-10*n*e*e}function uv(n,e){return(10.22+1.29*Math.tanh(.184*(n+8.14)))*Math.pow(e,-1/6.6)}function dv(n,e){return(.58-.007*n)*(1+.024*Math.log(e))}function fv(n,e,t){return n*Math.pow(2/(1+Math.cos(t)),e)}function to(n,e,t){if(n===null||e===null||t===null||!(e>0)||!(t>0))return null;const i=hv(e,t),s=uv(n,i);return{r0Re:s,alpha:dv(n,i),dynPressureNPa:i,bowShockRe:pv(s)}}function pv(n,e=8){const t=1.6666666666666667,i=e*e;return n*(1+1.1*(((t-1)*i+2)/((t+1)*(i-1))))}const mv=qc;function gv(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const _v=120,vv=80,xv=3,yv=Math.cos(xv*Math.PI/180),bv=4;function Sv(n){return In(n).divideScalar(Zt)}const Mv=new He(.42,.78,.95),wv=new He(.72,.55,1),Ev=`
  uniform float uTime;
  uniform float uShiver;      // 0-1, from Kp
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

    vDepth = r;
    vec4 viewPos = modelViewMatrix * vec4(p, 1.0);
    vViewZ = -viewPos.z;
    gl_Position = projectionMatrix * viewPos;
  }
`,Tv=`
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
`;class Av{group=new sn;lines=[];materials=[];tracedFor=null;tracedSet=null;tracedBand=null;tracedSun=null;far=!1;reduced=!1;frozenAt=0;lastTraceMs=0;truncated=0;external=null;job=null;constructor(){this.group.name="field-lines-igrf14-t89"}ensureTraced(e,t){const i=Math.floor(e.getTime()/864e5),s=this.far?"signature":"full",r=lf(e,t),a=r?.band??null,o=u=>r!==null&&u!==null&&u.dot(r.basis.x)<yv,l=this.tracedSun!==null&&this.tracedFor===i&&this.tracedSet===s&&this.tracedBand===a&&!o(this.tracedSun);if(this.job&&(this.job.set!==s||this.job.band!==a||this.job.day!==i||o(this.job.sun))&&(this.job=null),l&&!this.job)return;if(!this.job){const u=s==="signature"?ov:mv;this.job={date:new Date(e.getTime()),ext:r,set:s,band:a,day:i,sun:r?r.basis.x.clone():new P(1,0,0),seeds:lv(u),done:[],next:0,spentMs:0}}const c=this.job,h=performance.now();for(;c.next<c.seeds.length&&performance.now()-h<bv;)c.done.push(of(c.seeds[c.next],c.date,{external:c.ext})),c.next++;c.spentMs+=performance.now()-h,!(c.next<c.seeds.length)&&(this.tracedFor=c.day,this.tracedSet=c.set,this.tracedBand=c.band,this.tracedSun=c.sun,this.external=c.ext,this.lastTraceMs=c.spentMs,this.truncated=c.done.filter(u=>u.truncated).length,this.build(c.done),this.job=null)}get retracing(){return this.job!==null}get traceMs(){return this.lastTraceMs}get truncatedCount(){return this.truncated}get externalUsed(){return this.external}build(e){this.dispose();for(const t of e){if(t.points.length<2)continue;const i=[];for(const o of t.points){const l=Sv(o);i.push(l.x,l.y,l.z)}const s=new bt;s.setAttribute("position",new at(i,3));const r=new an({uniforms:{uTime:{value:0},uShiver:{value:0},uCamDist:{value:20},uGlobeR:{value:.1},uFarFade:{value:1},uColor:{value:t.closed?Mv:wv},uOpacity:{value:t.closed?.34:.46}},vertexShader:Ev,fragmentShader:Tv,transparent:!0,blending:rn,depthWrite:!1});this.materials.push(r);const a=new Wa(s,r);a.name=t.closed?"field-line-closed":"field-line-open",this.lines.push(a),this.group.add(a)}}setCamera(e,t,i){const s=e>_v?!0:e<vv?!1:this.far;s!==this.far&&(this.far=s);const r=this.far?.85:1-.45*gv(26,100,e);for(const a of this.materials)a.uniforms.uFarFade.value=r,a.uniforms.uCamDist.value=i,a.uniforms.uGlobeR.value=t}setScale(e){this.group.scale.setScalar(e)}setVisible(e){this.group.visible=e}setReducedMotion(e){e&&!this.reduced&&(this.frozenAt=this.materials[0]?.uniforms.uTime?.value??0),this.reduced=e}setDynamics(e,t){const i=this.reduced?this.frozenAt:e,s=t===null?0:Math.max(0,Math.min(1,(t-4)/5));for(const r of this.materials)r.uniforms.uTime.value=i,r.uniforms.uShiver.value=s}get lineCount(){return this.lines.length}get farSet(){return this.far}get pointCount(){return this.lines.reduce((e,t)=>e+(t.geometry.getAttribute("position")?.count??0),0)}dispose(){for(const e of this.lines)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.lines=[],this.materials=[]}}const da=48,Qs=40,Rv=100,Cv=Rv*Math.PI/180;function _d(n,e,t){const i=Math.abs(t.y)>.9?new P(1,0,0):new P(0,1,0),s=new P().crossVectors(t,i).normalize(),r=new P().crossVectors(t,s).normalize(),a=[];for(let h=0;h<=da;h++){const u=h/da*Cv,f=fv(n,e,u),d=[];for(let g=0;g<Qs;g++){const _=g/Qs*Math.PI*2,m=t.clone().multiplyScalar(Math.cos(u)).addScaledVector(s,Math.sin(u)*Math.cos(_)).addScaledVector(r,Math.sin(u)*Math.sin(_));d.push(m.multiplyScalar(f))}a.push(d)}const o=[],l=(h,u)=>{o.push(h.x,h.y,h.z,u.x,u.y,u.z)};for(let h=0;h<=da;h+=h<16?6:10){const u=a[h];for(let f=0;f<Qs;f++)l(u[f],u[(f+1)%Qs])}for(let h=0;h<Qs;h+=8)for(let u=0;u<da;u++)l(a[u][h],a[u+1][h]);const c=new bt;return c.setAttribute("position",new at(o,3)),c}class Pv{group=new sn;magnetopause;bowShock;get magnetopauseObject(){return this.magnetopause}get bowShockObject(){return this.bowShock}current=null;constructor(){this.group.name="magnetosphere",this.magnetopause=new dr(new bt,new Wi({color:new He(.45,.9,.8),transparent:!0,opacity:.22,blending:rn,depthWrite:!1})),this.magnetopause.name="magnetopause-shue1998",this.bowShock=new dr(new bt,new Wi({color:new He(1,.62,.35),transparent:!0,opacity:.13,blending:rn,depthWrite:!1})),this.bowShock.name="bow-shock-farris-russell",this.group.add(this.magnetopause,this.bowShock)}update(e,t){if(!e){this.group.visible=!1;return}if(this.group.visible=!0,!(!this.current||Math.abs(this.current.r0-e.r0Re)>.02||Math.abs(this.current.alpha-e.alpha)>.004||this.current.axis.dot(t)<.99995))return;const s=t.clone().normalize();this.magnetopause.geometry.dispose(),this.magnetopause.geometry=_d(e.r0Re,e.alpha,s),this.bowShock.geometry.dispose(),this.bowShock.geometry=_d(e.bowShockRe,e.alpha*.92,s),this.current={r0:e.r0Re,alpha:e.alpha,bow:e.bowShockRe,axis:s}}setScale(e){this.group.scale.setScalar(e)}setVisible(e){this.group.visible=e}dispose(){this.magnetopause.geometry.dispose(),this.magnetopause.material.dispose(),this.bowShock.geometry.dispose(),this.bowShock.material.dispose()}}const Dv=62,cf=20,Lv=`
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

  const float CORRIDOR = ${Dv.toFixed(1)};

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
    vFade *= 1.0 - smoothstep(0.35, 1.0, length(aOffset.xy) / ${cf.toFixed(1)});

    vEnd = aEnd;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,Iv=`
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
`;function Nv(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Uv{points;mat;maxCount;reduced=!1;frozenAt=0;constructor(e=4200){this.maxCount=e;const t=Nv(5249554),i=[],s=[],r=[],a=[];for(let l=0;l<e;l++){const c=t(),h=Math.sqrt(t())*cf,u=t()*Math.PI*2,f=t(),d=h*Math.cos(u),g=h*Math.sin(u);for(const _ of[1,0])i.push(c),s.push(d,g,0),r.push(f),a.push(_)}const o=new bt;o.setAttribute("position",new at(new Float32Array(e*6),3)),o.setAttribute("aPhase",new at(i,1)),o.setAttribute("aOffset",new at(s,3)),o.setAttribute("aSeed",new at(r,1)),o.setAttribute("aEnd",new at(a,1)),o.boundingSphere=null,this.mat=new an({uniforms:{uTime:{value:0},uSpeed:{value:.05},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new P(1,0,0)},uStreak:{value:1.4},uColor:{value:new He(.62,.86,1)},uOpacity:{value:.28}},vertexShader:Lv,fragmentShader:Iv,transparent:!0,blending:rn,depthWrite:!1}),this.points=new dr(o,this.mat),this.points.name="solar-wind-stream",this.points.frustumCulled=!1}setReducedMotion(e){e&&!this.reduced&&(this.frozenAt=this.mat.uniforms.uTime.value),this.reduced=e}setVisible(e){this.points.visible=e}get visible(){return this.points.visible}setScale(e){this.points.scale.setScalar(e)}update(e,t,i,s,r,a){const o=i!==null&&s!==null;if(this.points.visible=this.points.visible&&o,!o)return;this.mat.uniforms.uTime.value=this.reduced?this.frozenAt:e,this.mat.uniforms.uSpeed.value=.014+i/1e3*.055,this.mat.uniforms.uSunDir.value.copy(t).normalize(),r!==null&&(this.mat.uniforms.uR0.value=r),a!==null&&(this.mat.uniforms.uAlpha.value=a);const l=Math.max(0,Math.min(1,(s-1)/19)),c=Math.round(this.maxCount*(.25+.75*l));this.points.geometry.setDrawRange(0,c*2),this.mat.uniforms.uOpacity.value=.2+.2*l,this.mat.uniforms.uStreak.value=.7+i/1e3*3.4}dispose(){this.points.geometry.dispose(),this.mat.dispose()}}const Fv=360/25.38;class Yc{group=new sn;markers=[];stamp="";constructor(){this.group.name="active-regions"}static direction(e,t){const i=e*Math.PI/180,s=t*Math.PI/180;return new P(Math.cos(i)*Math.cos(s),Math.sin(i),-Math.cos(i)*Math.sin(s))}setRegions(e){const t=e.map(i=>`${i.region}:${i.lat}:${i.lon}`).join(",");if(t!==this.stamp){this.stamp=t,this.dispose();for(const i of e){const s=i.area??10,r=.03+.055*Math.min(1,Math.log10(1+s)/3),a=Math.max(0,Math.min(1,(i.mProb??0)/50)),o=new ks({color:new He().setRGB(1,.62-.32*a,.22-.18*a),transparent:!0,opacity:.55+.4*a,blending:rn,depthWrite:!1}),l=new Pt(new Si(r,12,10),o);l.position.copy(Yc.direction(i.lat,i.lon)).multiplyScalar(1.01),l.name=`region-${i.region}`,l.userData.region=i,this.markers.push(l),this.group.add(l)}}}update(e,t,i){if(this.group.scale.setScalar(i),!t)return;const s=(e.getTime()-Date.parse(t))/864e5;Number.isFinite(s)&&(this.group.rotation.y=-(s*Fv*Math.PI)/180)}setVisible(e){this.group.visible=e}get count(){return this.markers.length}dispose(){for(const e of this.markers)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.markers=[]}}const hf=695700,uf=1495978707e-1,df=21.5;function Ov(n){const e=xt(n),t=73.6667+1.3958333*(e.tt-15020)/36525,s=(c_(e).elon-t)*Math.PI/180,r=7.25*Math.PI/180;return Math.asin(Math.sin(s)*Math.sin(r))*180/Math.PI}function ff(n,e){const t=Math.PI/180,i=Ov(e),s=n.latitude*t,r=i*t,a=n.longitude*t,o=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(a);return Math.acos(Math.max(-1,Math.min(1,o)))*180/Math.PI}function kv(n,e){return ff(n,e)<=n.halfAngle}function Bv(n,e=1){const t=Date.parse(n.time215);if(!Number.isFinite(t)||!(n.speedKms>0))return null;const s=(e*uf-df*hf)/n.speedKms/3600,r=Math.max(0,(n.speedKms-450)/450),a=Math.min(24,6+6*r);return{time:new Date(t+s*36e5).toISOString(),windowHours:Math.round(a),transitHours:s}}function vd(n,e){const t=Date.parse(n.time215);if(!Number.isFinite(t))return 0;const i=Math.max(0,(e.getTime()-t)/1e3);return(df*hf+n.speedKms*i)/uf}function zv(n,e){const t=Math.PI/180,i=Math.hypot(e.x,e.y,e.z)||1,s={x:e.x/i,y:e.y/i,z:e.z/i},r=Math.abs(s.y)>.9?{x:1,y:0,z:0}:{x:0,y:1,z:0},a={x:r.y*s.z-r.z*s.y,y:r.z*s.x-r.x*s.z,z:r.x*s.y-r.y*s.x},o=Math.hypot(a.x,a.y,a.z)||1;a.x/=o,a.y/=o,a.z/=o;const l={x:s.y*a.z-s.z*a.y,y:s.z*a.x-s.x*a.z,z:s.x*a.y-s.y*a.x},c=n.latitude*t,h=n.longitude*t,u=Math.cos(c);return{x:s.x*u*Math.cos(h)+a.x*u*Math.sin(h)+l.x*Math.sin(c),y:s.y*u*Math.cos(h)+a.y*u*Math.sin(h)+l.y*Math.sin(c),z:s.z*u*Math.cos(h)+a.z*u*Math.sin(h)+l.z*Math.sin(c)}}const Vv=new He(1,.52,.3),Hv=new He(.62,.66,.85);function Gv(n,e,t,i){const s=Math.min(89,Math.max(2,e))*Math.PI/180,r=Math.abs(n.y)>.9?new P(1,0,0):new P(0,1,0),a=new P().crossVectors(n,r).normalize(),o=new P().crossVectors(n,a).normalize(),l=7,c=28,h=[],u=(_,m)=>{h.push(_.x,_.y,_.z,m.x,m.y,m.z)},d=Array.from({length:l},(_,m)=>t*(m+1)/l).map(_=>{const m=Ns(_,i),p=m*Math.tan(s);return Array.from({length:c},(S,x)=>{const v=x/c*Math.PI*2;return n.clone().multiplyScalar(m).addScaledVector(a,p*Math.cos(v)).addScaledVector(o,p*Math.sin(v))})});for(const _ of d)for(let m=0;m<c;m++)u(_[m],_[(m+1)%c]);for(let _=0;_<c;_+=4){const m=new P(0,0,0);u(m,d[0][_]);for(let p=0;p<d.length-1;p++)u(d[p][_],d[p+1][_])}const g=new bt;return g.setAttribute("position",new at(h,3)),g}class $v{group=new sn;lines=[];stamp="";visible=!0;constructor(){this.group.name="cme-cones"}setVisible(e){this.visible=e,this.group.visible=e}get count(){return this.lines.length}update(e,t,i,s){if(!this.visible)return;const r=`${i}|${e.map(a=>`${a.id}:${vd(a,t).toFixed(2)}`).join(",")}`;if(r!==this.stamp){this.stamp=r,this.dispose();for(const a of e){const o=Math.min(1.7,vd(a,t));if(o<=.02)continue;const l=zv(a,s),c=new P(l.x,l.y,l.z).normalize(),h=Gv(c,a.halfAngle,o,i),u=new Wi({color:a.earthDirected?Vv:Hv,transparent:!0,opacity:(a.earthDirected?.36:.09)*Math.max(.25,1-o/2.2),blending:rn,depthWrite:!1}),f=new dr(h,u);f.name=`cme-${a.id}`,f.userData.cme=a,this.lines.push(f),this.group.add(f)}}}dispose(){for(const e of this.lines)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.lines=[]}}const Wv=new He(.62,.94,1),Xv=new He(.52,.56,.64),jv=new P;class qv{group=new sn;craft=[];stamp="";axis;scale=1;constructor(){this.group.name="l1-monitors";const e=new bt;e.setAttribute("position",new at([0,0,0,1,0,0],3)),this.axis=new Wa(e,new Wi({color:new He(.5,.55,.62),transparent:!0,opacity:.18,blending:rn,depthWrite:!1})),this.axis.name="sun-earth-line",this.group.add(this.axis)}setVisible(e){this.group.visible=e}setScale(e){this.scale=e}build(e){this.disposeCraft();for(const t of e){const i=t.active?Wv:Xv,s=new sn;s.name=`l1-${t.source}`;const r=new Pt(new Vc(1,0),new ks({color:i,transparent:!0,opacity:t.active?.95:.5,blending:rn,depthWrite:!1}));r.name=`l1-marker-${t.source}`;const a=new dr(new bt,new Wi({color:i,transparent:!0,opacity:t.active?.55:.26,blending:rn,depthWrite:!1}));a.name=`l1-dropline-${t.source}`,s.add(r,a),this.group.add(s),this.craft.push({group:s,marker:r,drop:a,source:t.source})}}update(e,t,i,s){if(e.length===0){this.group.visible=!1;return}const r=e.map(c=>`${c.source}:${c.time}:${c.active}`).join(",")+`|${i}`;e.map(c=>c.source).join(",")!==this.craft.map(c=>c.source).join(",")&&this.build(e);const o=td(280,i)*this.scale;this.axis.scale.setScalar(o),this.axis.position.set(0,0,0),this.axis.quaternion.setFromUnitVectors(new P(1,0,0),t.x);const l=r!==this.stamp;this.stamp=r;for(let c=0;c<e.length;c++){const h=e[c],u=this.craft[c];if(!u)continue;if(l){const g=C_(h.gse,t).normalize(),_=td(h.distanceRe,i)*this.scale,m=g.multiplyScalar(_);u.group.position.copy(m);const S=t.x.clone().multiplyScalar(m.dot(t.x)).sub(m);u.drop.geometry.dispose();const x=new bt;x.setAttribute("position",new at([0,0,0,S.x,S.y,S.z],3)),u.drop.geometry=x}const f=u.group.getWorldPosition(jv),d=s?s.distanceTo(f)*.011:this.scale*.26;u.marker.scale.setScalar(d)}}disposeCraft(){for(const e of this.craft)this.group.remove(e.group),e.marker.geometry.dispose(),e.marker.material.dispose(),e.drop.geometry.dispose(),e.drop.material.dispose();this.craft=[]}dispose(){this.disposeCraft(),this.axis.geometry.dispose(),this.axis.material.dispose()}}const Yv=22;function Kv(n,e,t,i){let s=null;for(const r of e){const a=r.position.clone().project(t);if(a.z<-1||a.z>1)continue;const o=(a.x*.5+.5)*i.width,l=(-a.y*.5+.5)*i.height,c=o-n.x,h=l-n.y,u=Math.hypot(c,h),f=r.position.clone().add(t.up.clone().normalize().multiplyScalar(r.radius)).project(t),d=Math.abs((-f.y*.5+.5)*i.height-l),g=Math.max(Yv,d);u>g||(!s||u<s.distancePx)&&(s={...r,screen:{x:o,y:l},distancePx:u})}return s}const fa=new j1,xd=new Ve,pa=new P,Zv=6;function Jv(n,e,t,i,s){const r=e.visibleRoots;if(r.length===0||i.width===0||i.height===0)return null;xd.set(n.x/i.width*2-1,-(n.y/i.height)*2+1),fa.setFromCamera(xd,t);const a=t.fov,o=Math.max(1e-6,t.position.distanceTo(s)),c=(a?2*Math.tan(a*Math.PI/360)*o/i.height:o/i.height)*Zv;let h=null,u=1/0;for(const f of r){f.getWorldScale(pa);const d=(Math.abs(pa.x)+Math.abs(pa.y)+Math.abs(pa.z))/3,g=c/Math.max(d,1e-9);fa.params.Line.threshold=g,fa.params.Points.threshold=g;for(const _ of fa.intersectObject(f,!0)){if(_.distance>=u)break;const m=e.subjectFor(_.object);if(m){u=_.distance,h={subject:m,screen:{...n},point:_.point.clone()};break}}}return h}class Qv{roots=new Map;register(e,t){this.roots.set(e,t)}unregister(e){this.roots.delete(e)}subjectFor(e){for(let t=e;t;t=t.parent){const i=this.roots.get(t);if(i)return i}return null}get visibleRoots(){const e=[];for(const[t]of this.roots)t.visible&&e.push(t);return e}get size(){return this.roots.size}}const e6="https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get",yd=n=>{const e=String(n??"").trim();if(!e)return null;const t=Date.parse(/\dZ$/.test(e)&&e.length===17?e.replace("Z",":00Z"):e);return Number.isFinite(t)?new Date(t).toISOString():null},ma=n=>{const e=Number(n);return Number.isFinite(e)?e:null};function t6(n,e=new Date){if(!Array.isArray(n))return[];const t=[];for(const i of n){const s=yd(i.time21_5),r=ma(i.latitude),a=ma(i.longitude),o=ma(i.halfAngle),l=ma(i.speed);if(s===null||r===null||a===null||o===null||l===null||l<=0)continue;const c={latitude:r,longitude:a,halfAngle:o,speedKms:l,time215:s},u=(Array.isArray(i.enlilList)?i.enlilList:[]).map(f=>yd(f.estimatedShockArrivalTime)).find(f=>f!==null)??null;t.push({...c,id:String(i.associatedCMEID??`${s}-${l}`),type:String(i.type??""),note:String(i.note??""),link:i.link??null,earthDirected:kv(c,new Date(s)),offAxisDeg:ff(c,new Date(s)),arrival:u?{time:u,windowHours:7,transitHours:(Date.parse(u)-Date.parse(s))/36e5}:Bv(c),arrivalFromEnlil:u!==null})}return t.sort((i,s)=>Date.parse(s.time215)-Date.parse(i.time215))}function n6(n,e=new Date,t=3.5,i=6){const s=e.getTime(),r=n.filter(l=>{const c=(s-Date.parse(l.time215))/864e5;return c>=0&&c<=t}),a=r.filter(l=>l.earthDirected),o=r.filter(l=>!l.earthDirected).slice(0,i);return[...a,...o]}async function i6(n,e=7){const t=new Date,i=new Date(t.getTime()-e*864e5),s=`${e6}/CMEAnalysis?startDate=${i.toISOString().slice(0,10)}&endDate=${t.toISOString().slice(0,10)}&mostAccurateOnly=true`;try{const r=await fetch(s,{cache:"no-store",signal:n});return r.ok?t6(await r.json()):[]}catch{return[]}}const yi=[2,1.75,1.5,1.25,1,.85,.75];function s6(n){return n?yi.length-1:yi.indexOf(1)}function pf(n){return yi.find(e=>e<=n+1e-6)??yi[yi.length-1]}const r6=gr.Sun/Is,mf=1e3/60,a6=mf*1.35,o6=mf*1.05,l6=1e3;function c6(n){const e=n.ceiling??n.max;let t=n.demotedFrom??null,{good:i,bad:s}=n;n.medianFrameMs>a6?(s++,i=0):n.medianFrameMs<o6?(i++,s=0):(i=0,s=0);const r=yi.indexOf(n.current);if(r<0)return{ratio:pf(n.current),good:0,bad:0,ceiling:e,demotedFrom:t};if(s>=2&&r<s6(n.msaa)){const a=yi[r+1],o=t===n.current?Math.min(e,a):e;return{ratio:a,good:0,bad:0,ceiling:o,demotedFrom:n.current}}if(i>=6&&r>0){const a=yi[r-1];if(a<=n.max&&a<=e)return{ratio:a,good:0,bad:0,ceiling:e,demotedFrom:t}}return{ratio:n.current,good:i,bad:s,ceiling:e,demotedFrom:t}}const gf=120,h6=60;function bd(n,e){n.push(e),n.length>gf&&n.shift()}function ol(n){if(n.length===0)return 0;const e=[...n].sort((t,i)=>t-i);return e[e.length>>1]}class u6{constructor(e){this.canvas=e,this.msaa=devicePixelRatio<2,this.renderer=new D4({canvas:e,antialias:this.msaa,powerPreference:"high-performance"}),this.pixelRatio=pf(Math.min(devicePixelRatio,2)),this.maxPixelRatio=this.pixelRatio,this.ladderCeiling=this.pixelRatio,this.renderer.setPixelRatio(this.pixelRatio),this.scene.background=new He(329485),this.rig=new B5(e,e.clientWidth/Math.max(1,e.clientHeight)),this.scene.add(S5()),this.scene.add(this.sun.group),this.sun.group.add(this.activeRegions.group),this.pickables.register(this.activeRegions.group,"layer.active-regions"),this.scene.add(this.cmeCones.group),this.pickables.register(this.cmeCones.group,"layer.cme-cones"),this.scene.add(this.earth.group),this.scene.add(this.moon.mesh),this.scene.add(this.sunLight),this.earth.spin.add(this.fieldLines.group),this.earth.group.add(this.magnetosphere.group),this.earth.group.add(this.spacecraft.group),this.pickables.register(this.fieldLines.group,"layer.field-lines"),this.pickables.register(this.magnetosphere.magnetopauseObject,"layer.magnetopause"),this.pickables.register(this.magnetosphere.bowShockObject,"layer.bow-shock"),this.solarWind=new Uv(window.devicePixelRatio>1.5?4200:2600),this.earth.group.add(this.solarWind.points),this.pickables.register(this.solarWind.points,"layer.solar-wind"),this.scene.add(new W1(2371658,.55)),this.planets=y5();for(const[t,i]of this.planets){t!=="Earth"&&this.scene.add(i.group);const s=new v5(t,this.mode,new Date);this.rings.set(t,s),this.scene.add(s.line)}this.resize(),window.addEventListener("resize",this.resize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),e.addEventListener("click",this.onClick)}canvas;scene=new N1;rig;renderer;sun=new K_;earth=new k_;moon=new x5;planets=new Map;rings=new Map;sunLight=new G1(16773853,1.6,0,0);fieldLines=new Av;magnetosphere=new Pv;solarWind;activeRegions=new Yc;cmeCones=new $v;cmes=[];regionsObservedAt=null;spacecraft=new qv;spacecraftPos=[];sunImageUrl=null;candidates=[];hovered=null;pickables=new Qv;hoveredLayer=null;lastLayerPick=0;layerPickMs=0;onLayerHover=null;onLayerSelect=null;onHover=null;onSelect=null;shieldVisible=!0;windVisible=!0;sunDirEarthFixed=new P(1,0,0);mode="globe";lastReach=2;_reducedMotion=!1;earthSurface="loading";raf=0;clockStart=performance.now();now=null;aurora=null;auroraVisible=!0;frameTimes=[];lastFrame=performance.now();stats={fps:0,frames:0,cpuMs:0,updateMs:0,pixelRatio:1,maxPixelRatio:1,megapixels:0};cpuTimes=[];updateTimes=[];pixelRatio=1;maxPixelRatio=1;msaa=!1;lastLadderCheck=0;goodStreak=0;badStreak=0;ladderCeiling=1/0;demotedFrom=null;setNow(e){this.now=e}setEarthDayImage(e){this.earth.setDayImage(e)}setEarthNightImage(e){this.earth.setNightImage(e)}setCoastOverlay(e){this.earth.setCoastOverlay(e)}get coastOverlayOn(){return this.earth.coastOverlayOn}get earthSurfaceState(){return this.earthSurface}setEarthSurfaceState(e){this.earthSurface=e}setAurora(e){this.aurora=e}setRegions(e,t){this.activeRegions.setRegions(e),this.regionsObservedAt=t}get regionCount(){return this.activeRegions.count}setCmes(e){this.cmes=e}setSunImage(e){if(!e||!e.complete||e.naturalWidth===0){this.sun.setImage(null,null),this.sunImageUrl=null;return}e.src!==this.sunImageUrl&&(this.sunImageUrl=e.src,this.sun.setImage(e,Q_(e)))}get sunHasImage(){return this.sun.hasImage}syncCoronaFraming(){if(this.rig.view!=="corona")return;const e=this.sun.reachRsun();Math.abs(e-this.lastReach)<.01*Math.max(1,this.lastReach)||this.setView("corona")}setCoronaPlane(e){if(!e)return this.sun.setCoronaPlane(null,null),null;const t=d5(e);return this.sun.setCoronaPlane(e,t),t}setSunCard(e){if(!e)return this.sun.setDiskPlane(null,null),null;const t=f5(e);return this.sun.setDiskPlane(e,t),t}sunProjection(){return this.sun.projection()}setSpacecraft(e){this.spacecraftPos=e}setSpacecraftVisible(e){this.spacecraft.setVisible(e)}setCmesVisible(e){this.cmeCones.setVisible(e)}get cmesOn(){return this.cmeCones.group.visible}get cmeCount(){return this.cmeCones.count}setAuroraVisible(e){this.auroraVisible=e}get auroraOn(){return this.auroraVisible}setScaleMode(e){if(e===this.mode)return;this.mode=e;const t=new Date;for(const[i,s]of this.rings)s.rebuild(i,e,t)}get scaleMode(){return this.mode}get reducedMotion(){return this._reducedMotion}setShieldVisible(e){this.shieldVisible=e,this.fieldLines.setVisible(e),this.magnetosphere.setVisible(e)}get shieldOn(){return this.shieldVisible}setWindVisible(e){this.windVisible=e,this.solarWind.setVisible(e)}get windOn(){return this.windVisible}get fieldLineStats(){const e=this.fieldLines.externalUsed;return{lines:this.fieldLines.lineCount,points:this.fieldLines.pointCount,far:this.fieldLines.farSet,band:e?.band??null,tiltDeg:e?e.basis.tilt*180/Math.PI:null,truncated:this.fieldLines.truncatedCount,traceMs:this.fieldLines.traceMs}}setReducedMotion(e){this._reducedMotion=e,this.rig.setReducedMotion(e),this.fieldLines.setReducedMotion(e),this.solarWind.setReducedMotion(e)}setView(e,t=!1){const{earthPos:i,earthRadius:s,sunDir:r}=this.geometryNow(new Date);this.lastReach=this.sun.reachRsun(),this.rig.goTo(e,i,s,r,Ns(this.lastReach*r6,this.mode),t)}geometryNow(e){const t=In(mr("Earth",e).helio),i=t.length(),s=t.clone().normalize().multiplyScalar(Ns(i,this.mode)),r=ci("Earth",this.mode),a=V0(e).dir;return{earthPos:s,earthRadius:r,sunDir:In(a).normalize()}}frame=()=>{const e=performance.now(),t=e-this.lastFrame;this.lastFrame=e,this.frameTimes.push(t),this.frameTimes.length>120&&this.frameTimes.shift();const i=this.frameTimes.reduce((w,C)=>w+C,0)/this.frameTimes.length;this.stats={fps:i>0?1e3/i:0,frames:this.stats.frames+1,cpuMs:ol(this.cpuTimes),updateMs:ol(this.updateTimes),pixelRatio:this.pixelRatio,maxPixelRatio:this.maxPixelRatio,megapixels:this.canvas.clientWidth*this.canvas.clientHeight*this.pixelRatio*this.pixelRatio/1e6},this.adaptResolution(e,ol(this.frameTimes));const s=new Date,r=(e-this.clockStart)/1e3,{earthPos:a,earthRadius:o,sunDir:l}=this.geometryNow(s);this.sun.setRadius(ci("Sun",this.mode)),this.sun.setScaleMode(this.mode),this.sun.setViewGeometry(l.clone().negate(),P_(s)),this.activeRegions.update(s,this.regionsObservedAt,ci("Sun",this.mode)),this.sunLight.position.set(0,0,0);for(const w of this.planets.values())w.update(s,this.mode,this.rig.camera.position);this.earth.group.position.copy(a),this.earth.setRadius(o),this.earth.update(s,l),this.earth.setAurora(this.aurora,this.auroraVisible);const c=this.now?.solar_wind,h=this.now?.propagated,u=h?.bz??c?.bz_gsm??null,f=h?.density??c?.density??null,d=h?.speed??c?.speed??null,g=to(u,f,d),_=Xc(s)*Math.PI/180,m=Math.cos(-_),p=Math.sin(-_);if(this.sunDirEarthFixed.set(l.x*m+l.z*p,l.y,-l.x*p+l.z*m),this.shieldVisible){const w=this.now?.kp?.estimated_kp??null;this.fieldLines.ensureTraced(s,w),this.fieldLines.setScale(o);const C=this.rig.camera.position.distanceTo(a);this.fieldLines.setCamera(C/Math.max(o,1e-6),o,C),this.fieldLines.setDynamics(r,w),this.magnetosphere.setScale(o),this.magnetosphere.update(g,l)}this.shieldVisible&&this.spacecraftPos.length>0?(this.spacecraft.setVisible(!0),this.spacecraft.setScale(o),this.spacecraft.update(this.spacecraftPos,R_(s),this.mode,this.rig.camera.position)):this.spacecraft.setVisible(!1),this.windVisible&&(this.solarWind.setVisible(!0),this.solarWind.setScale(o),this.solarWind.update(r,l,d,f,g?.r0Re??null,g?.alpha??null));const S=In(z0(s)),x=S.length(),v=S.clone().normalize().multiplyScalar(V_(x,this.mode,o));this.moon.mesh.position.copy(a).add(v),this.moon.mesh.scale.setScalar(ci("Moon",this.mode)),this.cmeCones.update(n6(this.cmes,s),s,this.mode,a),this.candidates=[{kind:"sun",id:"Sun",label:"Sun",position:this.sun.group.position.clone(),radius:ci("Sun",this.mode)},{kind:"moon",id:"Moon",label:"Moon",position:this.moon.mesh.position.clone(),radius:ci("Moon",this.mode)},...[...this.planets].map(([w,C])=>({kind:"planet",id:w,label:w,position:C.group.position.clone(),radius:ci(w,this.mode)})),...this.spacecraft.group.children.filter(w=>w.name.startsWith("l1-")&&w.name!=="sun-earth-line").map(w=>({kind:"spacecraft",id:w.name.slice(3),label:w.name.slice(3),position:w.getWorldPosition(new P),radius:0}))],this.rig.followTarget(a),this.rig.update();const T=performance.now();this.renderer.render(this.scene,this.rig.camera),bd(this.updateTimes,T-e),bd(this.cpuTimes,performance.now()-e),this.raf=requestAnimationFrame(this.frame)};start(){this.raf||(this.setView("deck",!0),this.raf=requestAnimationFrame(this.frame))}stop(){cancelAnimationFrame(this.raf),this.raf=0}adaptResolution(e,t){if(e-this.lastLadderCheck<l6||(this.lastLadderCheck=e,this.frameTimes.length<gf/2))return;const i=c6({current:this.pixelRatio,medianFrameMs:t,max:this.maxPixelRatio,msaa:this.msaa,good:this.goodStreak,bad:this.badStreak,ceiling:this.ladderCeiling,demotedFrom:this.demotedFrom});this.goodStreak=i.good,this.badStreak=i.bad,this.ladderCeiling=i.ceiling,this.demotedFrom=i.demotedFrom,i.ratio!==this.pixelRatio&&this.setPixelRatio(i.ratio)}setPixelRatio(e){e!==this.pixelRatio&&(this.pixelRatio=e,this.badStreak=0,this.goodStreak=0,this.renderer.setPixelRatio(e),this.resize(),this.frameTimes.length=0,this.cpuTimes.length=0,this.updateTimes.length=0)}pointerPick(e){const t=this.canvas.getBoundingClientRect();return Kv({x:e.clientX-t.left,y:e.clientY-t.top},this.candidates,this.rig.camera,{width:t.width,height:t.height})}pointerPickLayer(e){const t=this.canvas.getBoundingClientRect();return Jv({x:e.clientX-t.left,y:e.clientY-t.top},this.pickables,this.rig.camera,{width:t.width,height:t.height},this.rig.focus)}onPointerMove=e=>{if(e.buttons!==0){this.setHover(null),this.setLayerHover(null);return}const t=this.pointerPick(e);if(this.setHover(t),t){this.setLayerHover(null);return}const i=performance.now();if(i-this.lastLayerPick<h6)return;this.lastLayerPick=i;const s=performance.now(),r=this.pointerPickLayer(e);this.layerPickMs=performance.now()-s,this.setLayerHover(r)};onPointerLeave=()=>{this.setHover(null),this.setLayerHover(null)};setHover(e){const t=e?.id===this.hovered?.id;this.hovered=e,this.canvas.style.cursor=e||this.hoveredLayer?"pointer":"",(!t||e)&&this.onHover?.(e)}setLayerHover(e){const t=e?.subject===this.hoveredLayer;this.hoveredLayer=e?.subject??null,this.hovered||(this.canvas.style.cursor=e?"pointer":""),(!t||e)&&this.onLayerHover?.(e)}get layerPickCostMs(){return this.layerPickMs}onClick=e=>{const t=this.pointerPick(e);if(t){this.onSelect?.(t);return}const i=this.pointerPickLayer(e);this.onLayerSelect?.(i)};resize=()=>{const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.rig.resize(e/Math.max(1,t))};dispose(){this.stop(),window.removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.removeEventListener("click",this.onClick),this.earth.dispose(),this.sun.dispose(),this.fieldLines.dispose(),this.magnetosphere.dispose(),this.solarWind.dispose(),this.activeRegions.dispose(),this.cmeCones.dispose(),this.rig.dispose(),this.renderer.dispose()}}function Ue(n){if(!n)return"--:--";const e=Date.parse(n);if(!Number.isFinite(e))return"--:--";const t=new Date(e);return`${String(t.getUTCHours()).padStart(2,"0")}:${String(t.getUTCMinutes()).padStart(2,"0")}`}function hn(n){if(!Number.isFinite(n))return"unknown";const e=Math.max(0,Math.round(n));if(e<90)return`${e}s`;const t=Math.round(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function ll(n){const{lane:e,received:t,meta:i,now:s=new Date}=n;if(e.loading&&!t&&!i?.data_time)return{state:"loading",label:"loading",short:"loading",ageS:null};if(!i||!i.data_time){const a=e.error??i?.error??null;return a?{state:"error",label:`unavailable · ${yn(a)}${d6(e,s)}`,short:"unavailable",ageS:null}:{state:"no-data",label:i?.error?`no data · ${i.error}`:"no data",short:"no data",ageS:null}}const r=(s.getTime()-Date.parse(i.data_time))/1e3;return Number.isFinite(r)?r>i.stale_after_s?{state:"stale",label:`stale · no data since ${Ue(i.data_time)} UTC (${hn(r)} old)`,short:`stale · ${hn(r)}`,ageS:r}:{state:"fresh",label:`${Ue(i.data_time)} UTC · ${hn(r)} old`,short:`${hn(r)} old`,ageS:r}:{state:"no-data",label:"no data",short:"no data",ageS:null}}function d6(n,e){const t=n.nextAttempt?Date.parse(n.nextAttempt):NaN;return Number.isFinite(t)&&t>e.getTime()?` · next attempt ${Ue(new Date(t).toISOString())} UTC`:""}function yn(n){const e=n instanceof Error?n.message:String(n??""),t=/^HTTP (\d{3})/.exec(e);if(t){const i=Number(t[1]);return i===404?"upstream 404":i>=500?`upstream HTTP ${i}`:i>=400?`upstream HTTP ${i}`:`upstream HTTP ${i}`}return e==="timeout"?"upstream timeout":/aborted|abort/i.test(e)?"cancelled":"offline or blocked"}const f6=96*1024*1024;class p6{constructor(e=f6){this.budgetBytes=e}budgetBytes;map=new Map;hits=0;misses=0;evictions=0;acquire(e){const t=this.map.get(e);if(t)return this.hits++,this.map.delete(e),this.map.set(e,t),t.img;this.misses++;const i=new Image;i.crossOrigin="anonymous",i.decoding="async",i.loading="eager";const s={img:i,bytes:0,loaded:!1,failed:!1};return i.addEventListener("load",()=>{s.loaded=!0,s.bytes=i.naturalWidth*i.naturalHeight*4,this.evict()},{once:!0}),i.addEventListener("error",()=>{s.failed=!0},{once:!0}),i.src=e,this.map.set(e,s),i}warm(e){for(const t of e)this.acquire(t)}isLoaded(e){const t=this.map.get(e);return!!t&&t.loaded}isFailed(e){const t=this.map.get(e);return!!t&&t.failed}evict(){let e=0;for(const t of this.map.values())e+=t.bytes;if(!(e<=this.budgetBytes))for(const[t,i]of this.map){if(e<=this.budgetBytes)break;i.img.isConnected||(this.map.delete(t),e-=i.bytes,this.evictions++,i.img.src="")}}stats(){let e=0;for(const t of this.map.values())e+=t.bytes;return{count:this.map.size,bytes:e,hits:this.hits,misses:this.misses,evictions:this.evictions}}clear(){for(const e of this.map.values())e.img.isConnected||(e.img.src="");this.map.clear()}}const cl=24,Sd="https://services.swpc.noaa.gov",Us=[{id:"suvi-304",label:"SUVI 304 Å",kind:"disk",product:"suvi-primary-304",instrument:"GOES SUVI",describes:"Chromosphere at ~50 000 K — prominences and filaments"},{id:"suvi-195",label:"SUVI 195 Å",kind:"disk",product:"suvi-primary-195",instrument:"GOES SUVI",describes:"Corona at ~1.5 million K — active regions and coronal holes"},{id:"suvi-171",label:"SUVI 171 Å",kind:"disk",product:"suvi-primary-171",instrument:"GOES SUVI",describes:"Quiet corona at ~600 000 K — coronal loops"},{id:"suvi-131",label:"SUVI 131 Å",kind:"disk",product:"suvi-primary-131",instrument:"GOES SUVI",describes:"Flaring plasma at ~10 million K — brightest during flares"},{id:"lasco-c2",label:"LASCO C2",kind:"coronagraph",product:"lasco-c2",instrument:"SOHO LASCO",describes:"Coronagraph, 2–6 solar radii — where CMEs first appear"},{id:"lasco-c3",label:"LASCO C3",kind:"coronagraph",product:"lasco-c3",instrument:"SOHO LASCO",describes:"Coronagraph, 3.7–30 solar radii — CMEs heading outward"}];function m6(n){const e=/_g(\d{1,2})_/.exec(n);if(!e)return null;const t=Number(e[1]);return Number.isFinite(t)&&t>0?t:null}function g6(n,e){return e===null?n:/\bGOES\b/.test(n)?n.replace(/\bGOES\b/,`GOES-${e}`):`${n} (GOES-${e})`}function _6(n){const e=/_s(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/.exec(n);if(e){const[,i,s,r,a,o,l]=e;return`${i}-${s}-${r}T${a}:${o}:${l}.000Z`}const t=/\/(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})_/.exec(n);if(t){const[,i,s,r,a,o]=t;return`${i}-${s}-${r}T${a}:${o}:00.000Z`}return null}async function _f(n,e){const t=`${Sd}/products/animations/${n.product}.json`,i=await fetch(t,{cache:"no-store",signal:e});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();if(!Array.isArray(s))return null;const r=[];for(const c of s){if(!c?.url)continue;const h=_6(c.url);h&&r.push({url:`${Sd}${c.url}`,time:h,satellite:m6(c.url)})}if(r.sort((c,h)=>Date.parse(c.time)-Date.parse(h.time)),r.length===0)return null;const a=(Date.parse(r[r.length-1].time)-Date.parse(r[0].time))/36e5;let o=r;if(r.length>cl){const c=(r.length-1)/(cl-1);o=Array.from({length:cl},(h,u)=>r[Math.round(u*c)])}const l=await x6(o,e);return{id:n.id,label:n.label,kind:n.kind,describes:n.describes,instrument:n.instrument,frames:o,totalAvailable:r.length,spanHours:a,frameBytes:l.bytes,newestGood:l.index,skippedDropouts:l.skipped,sourceUrl:t}}async function v6(n,e){try{const i=(await fetch(n,{method:"HEAD",signal:e})).headers.get("content-length");return i?Number(i):null}catch{return null}}async function x6(n,e){const t=n.length-1,i=Math.min(6,n.length),s=await Promise.all(Array.from({length:i},(o,l)=>v6(n[t-l].url,e))),r=s.filter(o=>o!==null&&o>0).sort((o,l)=>o-l);if(r.length===0)return{index:t,skipped:0,bytes:null};const a=r[Math.floor(r.length/2)];for(let o=0;o<i;o++){const l=s[o]??null;if(l!==null&&l>=a*.4)return{index:t-o,skipped:o,bytes:l}}return{index:t,skipped:0,bytes:s[0]??null}}function y6(n,e,t){let i=0;const s=n.frames.length;return new Promise(r=>{let a=0;const o=()=>{i++,a++,e(i,s),a>=s&&r()};for(const l of n.frames){const c=new Image;c.onload=o,c.onerror=o,c.src=l.url}})}const Tt="no data";function no(n){return n?n.tier==="modeled"?"D":n.tier==="ambient"?"M":"E":"E"}function Kc(n){return n?n.tier==="modeled"?`Modeled — ${n.model?.name??"model"}${n.model?.ref?` (${n.model.ref})`:""}`:n.tier==="ambient"?"Ambient — artistic, parameter-driven":`Measured — ${n.source}`:""}function er(n,e=1){return n==null||!Number.isFinite(n)?Tt:n.toFixed(e)}function ga(n){return n==null||!Number.isFinite(n)?Tt:String(Math.round(n))}function Ss(n,e=new Date){if(!n||!n.data_time)return{state:"no-data",ageS:null,label:n?.error?`no data · ${n.error}`:Tt,short:Tt};const t=(e.getTime()-Date.parse(n.data_time))/1e3;return Number.isFinite(t)?t>n.stale_after_s?{state:"stale",ageS:t,label:`stale · no data since ${Ue(n.data_time)} UTC (${hn(t)} old)`,short:`stale · ${hn(t)}`}:{state:"fresh",ageS:t,label:`${Ue(n.data_time)} UTC · ${hn(t)} old`,short:`${hn(t)} old`}:{state:"no-data",ageS:null,label:Tt,short:Tt}}const Va=[{id:"kp",subject:"inst.kp",label:"Planetary K",unit:"Kp",part:"kp",value:n=>er(n?.kp?.estimated_kp??null,2),detail:n=>n?.kp?.kp?`NOAA ${n.kp.kp}`:""},{id:"bz",subject:"inst.bz",label:"IMF Bz",unit:"nT",part:"solar_wind",series:"bz_gsm",value:n=>er(n?.solar_wind?.bz_gsm??null,1),detail:n=>{const e=n?.solar_wind?.bz_gsm;return e==null?"":e<0?"southward":"northward"}},{id:"bt",subject:"inst.bt",label:"IMF total",unit:"nT",part:"solar_wind",series:"bt",value:n=>er(n?.solar_wind?.bt??null,1)},{id:"speed",subject:"inst.speed",label:"Wind speed",unit:"km/s",part:"solar_wind",series:"speed",value:n=>ga(n?.solar_wind?.speed??null),detail:n=>n?.solar_wind?.spacecraft?`via ${n.solar_wind.spacecraft}`:""},{id:"density",subject:"inst.density",label:"Proton density",unit:"cm⁻³",part:"solar_wind",series:"density",value:n=>er(n?.solar_wind?.density??null,1)},{id:"xray",subject:"inst.xray",label:"X-ray class",unit:"0.1–0.8 nm",part:"xray",value:n=>n?.xray?.class??Tt,detail:n=>n?.xray?.flux_long!=null?`${n.xray.flux_long.toExponential(1)} W/m²`:""},{id:"protons",subject:"inst.protons",label:"Radiation (S)",unit:"pfu ≥10 MeV",part:"particles",value:n=>{const e=n?.particles;return!e||e.proton_10mev===null?Tt:`S${e.s_scale??0}`},detail:n=>{const e=n?.particles;return e?.proton_10mev===null||e?.proton_10mev===void 0?"":`${e.proton_10mev.toFixed(2)} pfu · ${e.s_text??""}`}},{id:"electrons",subject:"inst.electrons",label:"Electron flux",unit:"pfu ≥2 MeV",part:"particles",value:n=>ga(n?.particles?.electron_2mev??null),detail:n=>{const e=n?.particles?.electron_2mev;return e==null?"":e>=1e3?"above NOAA alert level":"normal"}},{id:"geosync",subject:"inst.geosync",label:"Field at 6.6 Rₑ",unit:"nT",part:"geosync",value:n=>ga(n?.geosync?.total_nt??null),detail:n=>{const e=n?.geosync;return!e||e.deficit_nt===null?"":e.arcjet?"thruster firing — suspect":`${e.deficit_nt>0?"−":"+"}${Math.abs(e.deficit_nt).toFixed(0)} vs dipole`}},{id:"dst",subject:"inst.dst",label:"Ring current",unit:"nT Dst",part:"dst",value:n=>ga(n?.dst?.value_nt??null),detail:n=>n?.dst?.level??""},{id:"mpause",subject:"inst.mpause",label:"Magnetopause",unit:"Rₑ",part:"magnetopause",value:n=>er(n?.magnetopause?.standoff_re??null,1),detail:()=>"Shue 1998"}],ft="https://services.swpc.noaa.gov",gt={mag:`${ft}/json/rtsw/rtsw_mag_1m.json`,wind:`${ft}/json/rtsw/rtsw_wind_1m.json`,kp1m:`${ft}/json/planetary_k_index_1m.json`,xrayFlares:`${ft}/json/goes/primary/xray-flares-latest.json`,xrays6h:`${ft}/json/goes/primary/xrays-6-hour.json`,scales:`${ft}/products/noaa-scales.json`,aurora:`${ft}/json/ovation_aurora_latest.json`,regions:`${ft}/json/solar_regions.json`,alerts:`${ft}/products/alerts.json`,summaryMag:`${ft}/products/summary/solar-wind-mag-field.json`,summarySpeed:`${ft}/products/summary/solar-wind-speed.json`};function dt(n){if(!n||typeof n!="string")return null;let e=n.trim().replace(" ","T");/[Zz]$|[+-]\d{2}:?\d{2}$/.test(e)||(e+="Z");const t=Date.parse(e);return Number.isFinite(t)?new Date(t).toISOString():null}function Pe(n){if(n==null||n==="")return null;const e=typeof n=="number"?n:Number(n);return!Number.isFinite(e)||e===-9999||e===-999?null:e}function wn(n){return Array.isArray(n)?n:[]}function yr(n,e,t){let i=null,s=-1/0;for(const r of n){if(!t(r))continue;const a=Date.parse(dt(r[e])??"");Number.isFinite(a)&&a>s&&(s=a,i=r)}return i}const Ha=n=>n.active===!0;function b6(n,e){const t=yr(wn(n),"time_tag",Ha),i=yr(wn(e),"time_tag",Ha);if(!t&&!i)return null;const s=dt(t?.time_tag),r=dt(i?.time_tag),a=[s,r].filter(l=>!!l);return a.length===0?null:{time:a.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),bz_gsm:Pe(t?.bz_gsm),by_gsm:Pe(t?.by_gsm),bx_gsm:Pe(t?.bx_gsm),bt:Pe(t?.bt),speed:Pe(i?.proton_speed),density:Pe(i?.proton_density),temperature:Pe(i?.proton_temperature),spacecraft:t?.source??i?.source??null}}function Md(n,e){const t=new Map,i=a=>dt(a.time_tag);for(const a of wn(n)){if(!Ha(a))continue;const o=i(a);o&&((t.get(o)??t.set(o,{}).get(o)).m=a)}for(const a of wn(e)){if(!Ha(a))continue;const o=i(a);if(!o)continue;const l=o.slice(0,17)+"00.000Z";(t.get(l)??t.set(l,{}).get(l)).w=a}const s=[...t.keys()].sort(),r={time:s,bx_gsm:[],by_gsm:[],bz_gsm:[],bt:[],density:[],speed:[],temperature:[]};for(const a of s){const{m:o,w:l}=t.get(a);r.bx_gsm.push(Pe(o?.bx_gsm)),r.by_gsm.push(Pe(o?.by_gsm)),r.bz_gsm.push(Pe(o?.bz_gsm)),r.bt.push(Pe(o?.bt)),r.density.push(Pe(l?.proton_density)),r.speed.push(Pe(l?.proton_speed)),r.temperature.push(Pe(l?.proton_temperature))}return r}function S6(n){const e=yr(wn(n),"time_tag",()=>!0),t=dt(e?.time_tag);return!e||!t?null:{time:t,estimated_kp:Pe(e.estimated_kp),kp:e.kp??null}}function vf(n){if(n===null||!Number.isFinite(n)||n<=0)return null;const e=[["X",1e-4],["M",1e-5],["C",1e-6],["B",1e-7],["A",1e-8]];for(const[t,i]of e)if(n>=i){const s=n/i;return`${t}${s.toFixed(1)}`}return`A${(n/1e-8).toFixed(1)}`}function M6(n){const e=wn(n)[0],t=dt(e?.time_tag),i=e?.current_class;return!e||!t||!i?null:{time:t,class:i}}function w6(n){const e=wn(n),t=yr(e,"time_tag",a=>String(a.energy).startsWith("0.1-0.8")),i=yr(e,"time_tag",a=>String(a.energy).startsWith("0.05-0.4")),s=dt(t?.time_tag);if(!t||!s)return null;const r=Pe(t.flux);return{time:s,flux_long:r,flux_short:Pe(i?.flux),class:vf(r)}}function hl(n){const e=n??{},t=e.Text??null;return{scale:Pe(e.Scale),text:t?t[0].toUpperCase()+t.slice(1):null,minor_prob:Pe(e.MinorProb??e.Prob),major_prob:Pe(e.MajorProb)}}function E6(n){const t=n?.["0"]??null;if(!t)return null;const i=t.DateStamp??null,s=t.TimeStamp??null;return{R:hl(t.R),S:hl(t.S),G:hl(t.G),date:i,time:i?dt(s?`${i}T${s}`:`${i}T00:00:00`):null}}function T6(n,e=8){return wn(n).map(t=>{const i=dt(t.issue_datetime),s=(t.message??"").replace(/\r/g,"");if(!i)return null;const r=s.split(`
`).map(h=>h.trim()).filter(h=>h.length>0),a=r.find(h=>/^(ALERT|WARNING|WATCH|SUMMARY|EXTENDED WARNING|CANCEL)/i.test(h))??r.find(h=>!/^(Space Weather Message Code|Serial Number|Issue Time|Valid From|Valid To)\b/i.test(h))??r[0]??"",o=/^(EXTENDED WARNING|CANCEL WARNING|CANCEL|ALERT|WARNING|WATCH|SUMMARY)\s*:?\s*(.*)$/i.exec(a),l=(o?.[1]??"").toUpperCase(),c=l.startsWith("CANCEL")?"cancel":l==="ALERT"?"alert":l.includes("WARNING")?"warning":l==="WATCH"?"watch":l==="SUMMARY"?"summary":"other";return{issued:i,product:t.product_id??"",message:s,headline:a,level:c,text:(o?.[2]??a).trim()}}).filter(t=>t!==null).sort((t,i)=>Date.parse(i.issued)-Date.parse(t.issued)).slice(0,e)}const tr=360,_a=181;function A6(n){const e=n,t=e?.coordinates;if(!Array.isArray(t)||t.length===0)return null;const i=dt(e?.["Observation Time"]),s=dt(e?.["Forecast Time"]);if(!i||!s)return null;const r=new Uint8Array(tr*_a);let a=0;for(const o of t){if(!Array.isArray(o)||o.length<3)continue;const l=Number(o[0]),c=Number(o[1]),h=Number(o[2]);if(!Number.isFinite(l)||!Number.isFinite(c)||!Number.isFinite(h))continue;const u=(Math.round(l)%tr+tr)%tr,f=Math.round(c)+90;if(f<0||f>=_a)continue;const d=Math.max(0,Math.min(100,h));r[u*_a+f]=d,d>a&&(a=d)}return{observation_time:i,forecast_time:s,max_probability:a,grid:{lon_start:0,lon_step:1,lat_start:-90,lat_step:1,width:tr,height:_a,values:r}}}function R6(n,e,t){const i=(Math.round(t)%n.width+n.width)%n.width,s=Math.round(e)-n.lat_start;return s<0||s>=n.height?0:n.values[i*n.height+s]??0}function C6(n){const e=wn(n).map(t=>({t:dt(t.time_tag),v:Pe(t.estimated_kp)})).filter(t=>t.t!==null).sort((t,i)=>Date.parse(t.t)-Date.parse(i.t));return{time:e.map(t=>t.t),value:e.map(t=>t.v)}}function P6(n){const e=wn(n).filter(t=>String(t.energy).startsWith("0.1-0.8")).map(t=>({t:dt(t.time_tag),v:Pe(t.flux)})).filter(t=>t.t!==null).sort((t,i)=>Date.parse(t.t)-Date.parse(i.t));return{time:e.map(t=>t.t),value:e.map(t=>t.v)}}function _s(n,e){if(n.time.length<=e)return n;const t=n.time.length/e,i=[],s=[];for(let r=0;r<e;r++){const a=Math.floor(r*t),o=Math.min(n.time.length,Math.floor((r+1)*t));let l=null,c=a;for(let h=a;h<o;h++){const u=n.value[h];u!=null&&(l===null||Math.abs(u)>Math.abs(l))&&(l=u,c=h)}i.push(n.time[c]??n.time[a]),s.push(l)}return{time:i,value:s}}function D6(n){const e=wn(n);if(e.length===0)return[];let t="";for(const r of e){const a=String(r.observed_date??"");a>t&&(t=a)}if(!t)return[];const i=new Set,s=[];for(const r of e){if(String(r.observed_date)!==t)continue;const a=Pe(r.region),o=Pe(r.latitude),l=Pe(r.longitude);a===null||o===null||l===null||i.has(a)||(i.add(a),s.push({region:a,observed:`${t}T12:00:00.000Z`,lat:o,lon:l,area:Pe(r.area),spots:Pe(r.number_spots),spotClass:r.spot_class??null,magClass:r.mag_class??null,cProb:Pe(r.c_flare_probability),mProb:Pe(r.m_flare_probability),xProb:Pe(r.x_flare_probability)}))}return s.sort((r,a)=>(a.area??0)-(r.area??0))}function va(n,e){const t=n.series?.data;return t?{time:t.time,value:t[e]}:null}function L6(n){const e=n.series?.data;if(!e)return null;const t=e.time.map((i,s)=>{const r=to(e.bz_gsm[s]??null,e.density[s]??null,e.speed[s]??null);return r?r.r0Re:null});return{time:e.time,value:t}}const I6=110;function N6(n,e){const t=(i,s={})=>i&&i.value.some(r=>r!==null)?{series:_s(i,I6),opts:s}:null;switch(n){case"bz":return t(va(e,"bz_gsm"),{rule:0});case"bt":return t(va(e,"bt"));case"speed":return t(va(e,"speed"));case"density":return t(va(e,"density"));case"kp":return t(e.kpSeries,{rule:5,band:[0,4]});case"xray":return t(e.xraySeries,{log:!0});case"protons":return t(e.protonSeries,{log:!0,rule:10});case"electrons":return t(e.electronSeries,{log:!0,rule:1e3});case"geosync":return t(e.geosyncSeries);case"dst":return t(e.dstSeries,{rule:0});case"mpause":return t(L6(e),{rule:6.6});default:return null}}function xf(n,e){const t=n.value;if(!t||t.length<2)return null;const i=m=>e.log?Math.log10(Math.max(m,1e-12)):m,s=[],r=[];for(let m=0;m<t.length;m++){const p=t[m];p==null||!Number.isFinite(p)||e.log&&p<=0||(s.push(m),r.push(i(p)))}if(r.length<2)return null;let a=Math.min(...r),o=Math.max(...r);if(e.rule!==null&&e.rule!==void 0){const m=i(e.rule);a=Math.min(a,m),o=Math.max(o,m)}e.band&&(a=Math.min(a,i(e.band[0])),o=Math.max(o,i(e.band[1])));const l=o-a||1,c=t.length-1,h=1.2,u=m=>m/c*(e.width-h*2)+h,f=m=>e.height-h-(m-a)/l*(e.height-h*2),d=s.map((m,p)=>({x:u(m),y:f(r[p]),v:r[p]}));let g=d[0],_=d[0];for(const m of d)m.v<g.v&&(g=m),m.v>_.v&&(_=m);return{pts:d,min:a,max:o,last:d[d.length-1]??null,lo:g,hi:_,w:e.width,h:e.height}}function U6(n){return n.map((e,t)=>`${t===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join("")}function Fi(n,e={}){const t={width:62,height:15,rule:null,band:null,log:!1,extremes:!1,label:"",className:"",...e},i=xf(n,t);if(!i)return'<span class="spark-missing" title="no history">—</span>';const s=f=>t.log?Math.log10(Math.max(f,1e-12)):f,r=i.max-i.min||1,a=1.2,o=f=>t.height-a-(f-i.min)/r*(t.height-a*2),l=t.band?`<rect class="spark-band" x="0" y="${o(s(t.band[1])).toFixed(2)}" width="${t.width}"
        height="${Math.max(.5,o(s(t.band[0]))-o(s(t.band[1]))).toFixed(2)}" />`:"",c=t.rule!==null&&t.rule!==void 0?`<line class="spark-rule" x1="0" y1="${o(s(t.rule)).toFixed(2)}" x2="${t.width}" y2="${o(s(t.rule)).toFixed(2)}" />`:"",h=t.extremes?`<circle class="spark-lo" cx="${i.lo.x.toFixed(2)}" cy="${i.lo.y.toFixed(2)}" r="1.3" />
       <circle class="spark-hi" cx="${i.hi.x.toFixed(2)}" cy="${i.hi.y.toFixed(2)}" r="1.3" />`:"",u=i.last?`<circle class="spark-last" cx="${i.last.x.toFixed(2)}" cy="${i.last.y.toFixed(2)}" r="1.6" />`:"";return`<svg class="spark-inline ${t.className}" viewBox="0 0 ${t.width} ${t.height}"
    width="${t.width}" height="${t.height}" role="img" aria-label="${F6(t.label||"trend")}"
    preserveAspectRatio="none">${l}${c}<path class="spark-path" d="${U6(i.pts)}" />${h}${u}</svg>`}function xn(n,e={}){const t={width:268,height:46,extremes:!0,...e},i=xf(n,{...t,width:t.width,height:t.height});if(!i)return'<p class="tile-meta">No history loaded.</p>';const s=t.format??(l=>l.toFixed(1)),r=l=>t.log?Math.pow(10,l):l,a=n.time.length>1?Date.parse(n.time[n.time.length-1])-Date.parse(n.time[0]):0,o=t.direction==="future";return`${Fi(n,{...t,label:t.label??(o?"forecast":"history")})}
    <p class="tile-meta">${s(r(i.lo.v))} to ${s(r(i.hi.v))}${t.unit?` ${t.unit}`:""}
    ${o?`over the next ${wd(a)} · <span class="spark-key-last">●</span> end of run`:`over the last ${wd(a)} · <span class="spark-key-last">●</span> now`}
    <span class="spark-key-ex">●</span> range</p>`}function wd(n){const e=n/36e5;if(e<48)return`${e.toFixed(0)} h`;const t=e/24;if(t<60)return`${t.toFixed(0)} days`;const i=t/30.44;return i<24?`${i.toFixed(0)} months`:`${(t/365.25).toFixed(0)} years`}function F6(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const ul=60.3;function O6(n){if(n.length===0)return"";const e=n.reduce((l,c)=>Math.max(l,c.offAxisRe),0),t=Math.max(ul*1.12,e*1.25),i=78,s=i/t,r=96,a=92,o=n.map(l=>{const c=r+l.gse.y/6371.2*s,h=a-l.gse.z/6371.2*s,u=l.active?"l1-active":"l1-idle";return`<circle class="${u}" cx="${c.toFixed(1)}" cy="${h.toFixed(1)}" r="${l.active?4:3}" />
      <text class="l1-label ${u}" x="${(c+7).toFixed(1)}" y="${(h+3.5).toFixed(1)}">${ae(l.source)}</text>`}).join("");return`<svg class="l1-inset" viewBox="0 0 192 184" role="img"
      aria-label="Cross-section looking along the Sun–Earth line: the L1 monitors plotted at their true distance from the line, against the Moon's orbit for scale.">
    <circle class="l1-moon" cx="${r}" cy="${a}" r="${(ul*s).toFixed(1)}" />
    <text class="l1-tick" x="${r}" y="${(a+ul*s+10).toFixed(1)}">Moon’s orbit</text>
    <line class="l1-cross" x1="${r-i}" y1="${a}" x2="${r+i}" y2="${a}" />
    <line class="l1-cross" x1="${r}" y1="${a-i}" x2="${r}" y2="${a+i}" />
    <circle class="l1-earth" cx="${r}" cy="${a}" r="${Math.max(1.1,s).toFixed(2)}" />
    ${o}
    <text class="l1-axis" x="${r+i}" y="${a+12}" text-anchor="end">dusk</text>
    <text class="l1-axis" x="${r}" y="14" text-anchor="middle">ecliptic north</text>
  </svg>`}const k6="https://raw.githubusercontent.com/jjh111/EarthStar/data/v1",B6=15e3,z6=600;function V6(n){if(!n.startsWith(ft))return null;const e=n.slice(ft.length).split("?")[0];return e.startsWith("/images/")||e.includes("/animations/")?null:`${k6}/swpc${e}`}const Mc=new Set;function H6(n){return Mc.has(n)}async function dl(n,e,t="json"){const i=new AbortController,s=setTimeout(()=>i.abort(new Error("timeout")),B6),r=()=>i.abort(e?.reason);e?.addEventListener("abort",r,{once:!0});try{const a=await fetch(n,{cache:"no-store",signal:i.signal});return a.ok?{json:t==="json"?await a.json():await a.text()}:{json:null,error:`HTTP ${a.status}`}}catch(a){return{json:null,error:a instanceof Error?a.message:String(a),retryable:!e?.aborted}}finally{clearTimeout(s),e?.removeEventListener("abort",r)}}const G6=n=>new Promise(e=>setTimeout(e,n));async function yf(n,e,t="json"){Mc.delete(n);const i=await dl(n,e,t);if(!i.retryable)return{json:i.json,...i.error?{error:i.error}:{}};if(await G6(z6),e?.aborted)return{json:null,error:i.error??"aborted"};const s=await dl(n,e,t);if(!s.retryable)return{json:s.json,...s.error?{error:s.error}:{}};const r=V6(n);if(!r||e?.aborted)return{json:null,error:s.error??"unreachable"};const a=await dl(r,e,t);return a.json===null?{json:null,error:s.error??"unreachable"}:(Mc.add(n),{json:a.json,mirrored:!0})}const Ct=(n,e)=>yf(n,e,"json"),$6=(n,e)=>yf(n,e,"text"),W6=`${ft}/json/enlil_time_series.json`,ar=.1;function X6(n,e=new Date){const t={past:[],ahead:[],peakSpeed:null,peakCloud:null,cloudArrival:null,firstTime:null,lastTime:null};if(!Array.isArray(n))return t;const i=[];for(const l of n){const c=dt(typeof l.time_tag=="string"?l.time_tag:null);c!==null&&i.push({time:c,speed:Pe(l.v_r),density:Pe(l.earth_particles_per_cm3),temperature:Pe(l.temperature),br:Pe(l.b_r),polarity:Pe(l.polarity),cloud:Pe(l.cloud)})}if(i.length===0)return t;i.sort((l,c)=>l.time.localeCompare(c.time));const s=e.getTime(),r=i.filter(l=>Date.parse(l.time)<=s),a=i.filter(l=>Date.parse(l.time)>s),o=(l,c)=>l.reduce((h,u)=>u[c]!==null&&(h===null||u[c]>h[c])?u:h,null);return{past:r,ahead:a,peakSpeed:o(a,"speed"),peakCloud:o(a,"cloud"),cloudArrival:a.find(l=>(l.cloud??0)>=ar)??null,firstTime:i[0].time,lastTime:i[i.length-1].time}}function Ed(n,e){return{time:n.map(t=>t.time),value:n.map(t=>t[e])}}function j6(n,e,t=15){const i=e.getTime();let s=null,r=1/0;for(const a of[...n.past,...n.ahead]){const o=Math.abs(Date.parse(a.time)-i);o<r&&(r=o,s=a)}return r<=t*6e4?s:null}async function bf(n,e=new Date){try{const t=await Ct(W6,n);return t.json===null?null:X6(t.json,e)}catch{return null}}const wc=`${ft}/json/rtsw/rtsw_ephemerides_1h.json`,q6={SOLAR1:"SWFO-L1, NOAA’s operational wind monitor since 2026",DSCOVR:"NOAA, operational 2016–2026, now a backup",ACE:"NASA, launched 1997 and still returning data",IMAP:"NASA, launched 2025 — interstellar mapping, wind as a by-product"};function Sf(n){if(!Array.isArray(n))return[];const e=new Map;for(const i of n){const s=typeof i.source=="string"?i.source:null,r=dt(typeof i.time_tag=="string"?i.time_tag:null);if(!s||!r||Pe(i.x_gse)===null||Pe(i.y_gse)===null||Pe(i.z_gse)===null)continue;const a=Date.parse(r);if(!Number.isFinite(a))continue;const o=e.get(s);(!o||a>o.t)&&e.set(s,{rec:i,t:a,iso:r})}const t=[];for(const[i,{rec:s,iso:r}]of e){const a=Pe(s.x_gse),o=Pe(s.y_gse),l=Pe(s.z_gse),c=Math.hypot(o,l),h=Math.hypot(a,c);t.push({time:r,source:i,active:s.active===!0,gse:{x:a,y:o,z:l},distanceRe:h/Zt,offAxisRe:c/Zt,offAxisDeg:Math.atan2(c,a)*180/Math.PI})}return t.sort((i,s)=>Number(s.active)-Number(i.active)||i.distanceRe-s.distanceRe),t}const fs={particle:'<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="1.6"/><path d="M2 2l3.2 2.6M14 2l-3.2 2.6M2 10l3.2-2.6M14 10l-3.2-2.6"/></svg>',wind:'<svg class="glyph" viewBox="0 0 16 12"><path d="M1 3h8a2 2 0 1 0-2-2M1 6h11a2 2 0 1 1-2 2M1 9h6a1.6 1.6 0 1 1-1.6 1.6"/></svg>',field:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v10M8 1C4 3 2 5 2 6s2 3 6 5M8 1c4 2 6 4 6 5s-2 3-6 5"/></svg>',flare:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v3.4M8 7.6V11M2.6 6h3.2M10.2 6h3.2M4.2 2.4l2.2 2.2M9.6 7.6l2.2 2.2M11.8 2.4L9.6 4.6M6.4 7.6l-2.2 2.2"/></svg>',aurora:'<svg class="glyph" viewBox="0 0 16 12"><path d="M3 11V5c0-2 1-3.4 2.4-3.4M7 11V4.4c0-2 1-3.4 2.4-3.4M11 11V5.4c0-2 1-3.2 2.2-3.2"/></svg>',shield:'<svg class="glyph" viewBox="0 0 16 12"><path d="M12 1C7 1 3 3.2 3 6s4 5 9 5"/><circle cx="13.4" cy="6" r="1.5"/></svg>'},Y6='<span class="sentence-missing">no data</span>',K6='<span class="sentence-loading">…</span>';function ps(n,e,t,i=!1){if(n==null||!Number.isFinite(n))return i?K6:Y6;const s=t==="%"?" tight":"";return`<b class="sentence-num">${n.toFixed(e)}</b><span class="sentence-unit${s}">${t}</span>`}function Z6(n){const e=n.now?.data??null,t=e?.solar_wind??null,i=!n.now&&n.lanes.snapshot,s=[],r=n.series?{time:n.series.data.time,value:n.series.data.speed}:null,a=n.series?{time:n.series.data.time,value:n.series.data.bz_gsm}:null,o=t?.bz_gsm??null,l=o===null?"in an unknown direction":o<-5?"strongly southward":o<0?"southward":"northward",c=o===null?"":o<0?" &mdash; the orientation that opens Earth&rsquo;s field and lets energy in":" &mdash; the orientation that keeps Earth&rsquo;s field closed";s.push(`${fs.wind} The solar wind is blowing ${r?Fi(r,{label:"wind speed over the last 24 hours"}):""} ${ps(t?.speed??null,0,"km/s",i)}, carrying a field that points ${i?"":l} ${a?Fi(a,{rule:0,extremes:!0,label:"Bz over the last 24 hours, rule at zero"}):""} ${ps(o,1,"nT",i)}${i?"":c}.`);const h=e?.magnetopause?.standoff_re??null,u=h===null?"":h<8?", pushed well in":h>11.5?", standing off comfortably":"";s.push(`${fs.shield} It meets the magnetosphere ${ps(h,1,"R⊕",i)} out on the sunward side${i?"":u}.`);const f=e?.kp?.estimated_kp??null,d=f===null?i?"":"of unknown disturbance":f>=5?"storming":f>=4?"unsettled":"quiet";s.push(`${fs.field} The ground beneath is ${d} ${n.kpSeries?Fi(n.kpSeries,{band:[0,4],extremes:!0,label:"Kp over the last 6 hours, quiet band shaded"}):""} ${ps(f,2,"Kp",i)}.`);const g=e?.particles??null;if(g){const p=g.proton_10mev;s.push(`${fs.particle} Radiation is at <b class="sentence-num">${i?"…":`S${g.s_scale??0}`}</b>${n.protonSeries?` ${Fi(n.protonSeries,{log:!0,extremes:!0,label:"proton flux above 10 MeV, last 6 hours, logarithmic"})}`:""} ${ps(p,2,"pfu",i)}`+(i?"":g.s_scale!==null&&g.s_scale>=1?" &mdash; a storm is under way":" &mdash; nothing to worry about")+".")}const _=e?.xray??null,m=n.aurora?.data??null;return s.push(`${fs.flare} The Sun is putting out ${n.xraySeries?Fi(n.xraySeries,{log:!0,extremes:!0,label:"X-ray flux over the last 6 hours, logarithmic"}):""} <b class="sentence-num">${i?"…":_?.class??"no data"}</b> X-rays, and ${fs.aurora} the aurora is forecast to reach ${ps(m?.max_probability??null,0,"%",i)} at its brightest.`),s.join(" ")}function J6(n){if(!n.now&&n.lanes.snapshot)return"Solar wind, magnetopause standoff, planetary K index, radiation, X-ray class and aurora forecast: all loading. Positions and the scene are computed locally and are already live.";const t=n.now?.data??null,i=t?.solar_wind??null,s=(r,a)=>r==null||!Number.isFinite(r)?"no data":r.toFixed(a);return`Solar wind ${s(i?.speed,0)} kilometres per second, interplanetary field Bz ${s(i?.bz_gsm,1)} nanotesla, magnetopause standoff ${s(t?.magnetopause?.standoff_re,1)} Earth radii, planetary K index ${s(t?.kp?.estimated_kp,2)}, X-ray class ${t?.xray?.class??"no data"}, peak aurora probability ${s(n.aurora?.data?.max_probability,0)} percent.`}const ms={kp:`${ft}/products/noaa-planetary-k-index-forecast.json`,probabilities:`${ft}/json/solar_probabilities.json`,threeDay:`${ft}/text/3-day-forecast.txt`,discussion:`${ft}/text/discussion.txt`,flares7:`${ft}/json/goes/primary/xray-flares-7-day.json`,f107:`${ft}/products/summary/10cm-flux.json`},Td=async(n,e)=>(await $6(n,e)).json,xa=async(n,e)=>(await Ct(n,e)).json;function Q6(n){if(!Array.isArray(n))return[];const e=[];for(const t of n){const i=dt(t.time_tag),s=Number(t.kp);if(!i||!Number.isFinite(s))continue;const r=String(t.observed??"").toLowerCase();e.push({time:i,kp:s,kind:r==="observed"?"observed":r==="estimated"?"estimated":"predicted",scale:t.noaa_scale??null})}return e.sort((t,i)=>Date.parse(t.time)-Date.parse(i.time))}function ex(n){if(!Array.isArray(n))return[];const e=t=>{const i=Number(t);return Number.isFinite(i)?i:null};return n.map(t=>({date:String(t.date??"").slice(0,10),c:e(t.c_class_1_day),m:e(t.m_class_1_day),x:e(t.x_class_1_day)})).filter(t=>t.date).sort((t,i)=>i.date.localeCompare(t.date)).slice(0,3)}function tx(n){return Array.isArray(n)?n.map(e=>({begin:dt(e.begin_time)??"",max:dt(e.max_time),maxClass:String(e.max_class??""),region:Number.isFinite(Number(e.current_region))?Number(e.current_region):null})).filter(e=>e.begin&&e.maxClass).sort((e,t)=>Date.parse(t.begin)-Date.parse(e.begin)).slice(0,8):[]}function Ad(n){const e=/:Issued:\s*(.+)/.exec(n)?.[1]?.trim()??null,t=n.split(`
`).filter(i=>!/^[:#]/.test(i)).join(`
`).replace(/\n{3,}/g,`

`).trim();return{issued:e,body:t}}async function nx(n){const[e,t,i,s,r,a,o]=await Promise.all([xa(ms.kp,n),xa(ms.probabilities,n),Td(ms.threeDay,n),Td(ms.discussion,n),xa(ms.flares7,n),xa(ms.f107,n),bf(n)]),l=Array.isArray(a)?a[0]:void 0;return{kp:Q6(e),odds:ex(t),threeDay:i,discussion:s,flares:tx(r),f107:{value:l&&Number.isFinite(Number(l.flux))?Number(l.flux):null,time:l?dt(l.time_tag):null},enlil:o,fetchedAt:new Date().toISOString()}}const ix=`${ft}/json/solar-cycle/observed-solar-cycle-indices.json`,ya=n=>{const e=Number(n);return Number.isFinite(e)&&e>=0?e:null};function sx(n){if(!Array.isArray(n)||n.length===0)return null;const e={time:[],value:[]},t={time:[],value:[]},i={time:[],value:[]};let s=null,r=null;for(const a of n){const o=String(a["time-tag"]??"");if(!/^\d{4}-\d{2}$/.test(o))continue;const l=`${o}-01T00:00:00.000Z`,c=ya(a.ssn);e.time.push(l),e.value.push(c),t.time.push(l),t.value.push(ya(a.smoothed_ssn)),i.time.push(l),i.value.push(ya(a["f10.7"])),c!==null&&(!r||c>r.ssn)&&(r={month:o,ssn:c}),s={month:o,ssn:c,f107:ya(a["f10.7"])}}return e.time.length===0?null:{ssn:e,smoothed:t,f107:i,latest:s,allTimeMax:r}}function rx(n,e){const t=Math.max(0,n.time.length-e);return{time:n.time.slice(t),value:n.value.slice(t)}}async function ax(n){const e=await Ct(ix,n);if(e.json===null)throw new Error(e.error??"unreachable");return sx(e.json)}const ox=[{id:"concept.reconnection",kind:"concept",tier:"D",label:"Magnetic reconnection",oneLine:"Where the Sun’s field and Earth’s splice together, and energy crosses in.",meaning:"The interplanetary magnetic field is the Sun’s own field, dragged out by the wind. When it arrives pointing south it opposes Earth’s northward field at the dayside boundary, the two break and rejoin, and a field line that had both feet on Earth ends up with one foot on Earth and the other threading back to the corona. That is a literal magnetic circuit from the Sun’s surface to the polar cap, and it is how the solar wind’s energy gets inside a cavity that is otherwise closed to it. Everything a geomagnetic storm does begins here.",howMade:"Not drawn. It is the mechanism behind three things that are: southward Bz on the panel, the open field lines in violet, and the aurora.",limits:"Nothing in the Viewer models reconnection. The violet lines are open because IGRF + T89 does not close them, not because reconnection opened them — T89 has no IMF term at all, so a southward Bz changes the drawn shape by exactly nothing. The panel can tell you the conditions for reconnection are present; the scene cannot yet show it happening.",sources:[{name:"Dungey 1961, Interplanetary magnetic field and the auroral zones",ref:"doi:10.1103/PhysRevLett.6.47"}],related:["inst.bz","layer.field-lines","model.t89","layer.aurora","inst.protons"],toPromote:"T96 carries IMF By/Bz and dynamic pressure, and every input it needs is already fetched. Dayside opening under southward Bz would then be in the geometry rather than only in the prose."},{id:"concept.gsm",kind:"concept",tier:"D",label:"GSM coordinates and the dipole tilt",oneLine:"The frame every external-field model is written in: +X to the Sun, dipole in the X–Z plane.",meaning:"A magnetosphere is organised by two directions and nothing else — where the Sun is, and which way the dipole leans. GSM is the frame built from exactly those two. The angle between the dipole and the frame’s vertical is the dipole tilt, which swings ±32.6° over a year and about ±9° again over each day as the offset pole turns. It decides whether the tail current sheet warps north or south, and it is why the same solar wind produces a different magnetosphere in June and December.",howMade:"Built from the sub-solar point (astronomy-engine) and the IGRF-14 dipole axis. Checked against the Python geopack package at sixteen epochs across the annual and diurnal cycles: 0.0044° of tilt, 0.0070° of axis, and that residual is the solar ephemeris rather than the frame.",limits:"The sunward axis uses the apparent Sun rather than the geometric one, which differs by aberration — 20.5 arcseconds, four orders below anything that matters here, and it keeps one definition of where the Sun is across the whole app.",sources:[{name:"Hapgood 1992, Space physics coordinate transformations",ref:"doi:10.1016/0032-0633(92)90012-D"}],related:["model.t89","model.igrf14","layer.field-lines"]},{id:"concept.tiers",kind:"concept",tier:"M",label:"Measured, Modelled, Ambient",oneLine:"Three tiers, on everything: what was read from an instrument, what was computed, and what was drawn.",meaning:"Every element here belongs to exactly one tier and says which. [E] Measured is a value read from an instrument, with its timestamp and latency. [D] Modelled is computed from measured inputs by a named, cited model. [M] Ambient is artwork — and splits again, because artwork can still carry a real number: the wind particles’ rate and speed come from the measured density and speed, while the starfield carries nothing at all. Where a layer is keyed to a real quantity, its card says which dimension is real and which is invented.",howMade:"Asserted in code and enforced by tests: no subject may ship without saying what it does not say, and no ambient subject may ship without declaring whether it carries a measurement.",limits:"A tier is a claim about provenance, not about accuracy. A [D] model can be cited, current, correctly implemented and still wrong about the sky — which is why the Checks tab holds independent models against each other rather than trusting the badges.",keyedTo:null,sources:[{name:"Earth Star viewer platform plan, §2"}],related:["concept.reconnection"]}],lx=[{id:"model.igrf14",kind:"model",tier:"D",label:"IGRF-14",oneLine:"The Earth’s own field, from the inside: a spherical-harmonic model to degree 13.",meaning:"The internal field, generated by the moving iron of the outer core. It is a tilted, offset dipole plus higher-degree structure, and the higher-degree terms are why the South Atlantic Anomaly exists — a real weak spot where trapped radiation reaches lower altitude and satellites take more dose. The model is the reason the drawn field lines have the shape they do rather than a shape we chose.",howMade:"IAGA’s published coefficients, vendored and generated into the bundle rather than fetched. Epoch 2025.0 with secular variation extrapolated to now. Checked against the BGS calculator at six points: worst residual 0.509 nT, which is BGS’s own integer rounding.",limits:"It contains no external currents whatsoever. On its own it would extend forever, with no compressed dayside, no tail and no ring current — everything that makes a magnetosphere a magnetosphere comes from T89 beside it. The secular variation is a linear extrapolation and expires in 2030.",sources:[{name:"IGRF-14 (IAGA, Nov 2024)",url:"https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt"}],related:["model.t89","layer.field-lines","concept.gsm","inst.geosync"],toPromote:"IGRF-15 is due in 2030 and drops in through scripts/gen-igrf.mjs."},{id:"model.t89",kind:"model",tier:"D",label:"Tsyganenko T89c",oneLine:"The external field of the magnetospheric currents — what makes the shape a magnetosphere.",meaning:"Four current systems deform the Earth’s field into the shape it actually has: the Chapman–Ferraro currents that compress the dayside, the cross-tail sheet that stretches the nightside into lobes, the ring current that inflates the inner region — the one Dst measures — and their closure. T89 is an empirical fit to all of them, built from IMP, HEOS and ISEE spacecraft data, and it is what turned the drawn field from a dipole into a magnetosphere.",howMade:"A line-by-line port of Tsyganenko’s own Fortran, with the 210 coefficients generated from the vendored source rather than retyped. Verified against the Python geopack package over 1540 points spanning the inner region, dayside, cusps, tail, lobes and flanks: worst deviation 4.3×10⁻¹⁴ nT, which is floating-point round-off and nothing else. No JavaScript port existed before this one.",limits:"It knows a Kp band and the dipole tilt, and nothing else. There is no IMF term at all: a southward Bz opens the real dayside and changes this model by nothing. No solar-wind pressure either. And Kp enters as one of seven discrete fits, so the field steps between bands rather than gliding: Kp 3.0 and Kp 3.9 draw exactly the same shape. It is fitted inside 70 Rₑ and has no magnetopause in it, so the trace stops at the edge of what it describes rather than following it into nonsense.",sources:[{name:"Tsyganenko 1989, A magnetospheric magnetic field model with a warped tail current sheet",ref:"Planet. Space Sci. 37(1) 5–20"}],related:["model.igrf14","layer.field-lines","concept.gsm","concept.reconnection","model.shue1998","inst.kp","inst.dst"],toPromote:"T96 adds IMF By/Bz and dynamic pressure, and the Viewer already fetches every one of its inputs. TS05 adds storm-time ring-current dynamics after that."},{id:"model.shue1998",kind:"model",tier:"D",label:"Shue et al. 1998 magnetopause",oneLine:"Where the solar wind’s pressure balances the Earth’s field — the edge of the cavity.",meaning:"The magnetopause is not a wall; it is the surface where two pressures balance. Shue’s fit gives its distance as a function of the wind’s dynamic pressure and the IMF Bz, which is why the drawn boundary moves in when the wind hits harder and when the field turns south. Its nose distance is the single number that says how much room the magnetosphere has — and whether geostationary orbit is still inside it.",howMade:"r = r₀(2/(1+cosθ))^α, with r₀ and α from the propagated solar wind every minute. Drawn as a wireframe rather than a shell, because a translucent closed surface hides the field lines inside it and the field lines are the subject.",limits:"Truncated at 100° from the sunward axis: the surface flares without bound and the real magnetotail runs for hundreds of Earth radii, so what is drawn is cut, not ended. It is also an average fit — the real boundary ripples, and surface waves travel along it. And it is a boundary drawn *around* the field rather than one the field produces, which is why the Checks tab holds it against T89’s own standoff.",sources:[{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}],related:["layer.magnetopause","model.farris-russell","inst.mpause","inst.geosync","model.t89"]},{id:"model.farris-russell",kind:"model",tier:"D",label:"Farris & Russell 1994 bow shock",oneLine:"Where the supersonic solar wind is forced to slow down, upstream of the magnetopause.",meaning:"The solar wind arrives faster than the speed at which the plasma can carry a signal, so it cannot flow around the magnetosphere smoothly — it shocks. The bow shock is where that happens, a few Earth radii ahead of the magnetopause, and the heated, slowed, turbulent plasma between the two is the magnetosheath.",howMade:"The standoff distance is Farris & Russell’s relation to the magnetopause standoff and the magnetosonic Mach number. The flaring away from the nose is drawn with the Shue law scaled to it.",limits:"Farris & Russell pin the nose; the rest of the drawn surface is the Shue shape borrowed and scaled, which is a rendering choice rather than a fitted result. More importantly, the shock is not really what deflects the wind — the deflection is the IMF *draping* through the sheath between the two surfaces, and two wireframe domes cannot say that.",sources:[{name:"Farris & Russell 1994",ref:"doi:10.1029/94JA00170"}],related:["layer.bow-shock","model.shue1998","layer.solar-wind"],toPromote:"Draped sheath field lines between the two surfaces would show the deflection itself. That is its own brief."},{id:"model.ovation",kind:"model",tier:"D",label:"OVATION Prime",oneLine:"NOAA’s short-range forecast of where the aurora will be bright.",meaning:"A statistical model relating the solar wind at L1 to the energy flux poured into the upper atmosphere at auroral latitudes, 30 to 90 minutes ahead. It is the only genuinely predictive product on the panel: everything else says what is, this says what is about to be.",howMade:"Fetched from NOAA SWPC as a 1° global grid of aurora probability and drawn as a texture on the globe.",limits:"A probability of visible aurora, not a brightness and not a guarantee. It is organised around the geomagnetic pole rather than the geographic one and brightens toward magnetic midnight, so the oval is never centred on either pole. Cloud, moonlight and daylight decide what anyone actually sees, and none of the three are in it.",sources:[{name:"OVATION Prime (NOAA SWPC)",url:"https://services.swpc.noaa.gov/json/ovation_aurora_latest.json"}],related:["layer.aurora","inst.kp","concept.reconnection"]},{id:"model.geospace-dst",kind:"model",tier:"D",label:"NOAA Geospace (Dst)",oneLine:"A magnetohydrodynamic run at NOAA, driven by the L1 wind, producing the ring-current index.",meaning:"Dst is the closest thing space weather has to a single number for the size of a storm, because it tracks the energy actually stored in the inner magnetosphere rather than the disturbance at any one ground station.",howMade:"The University of Michigan BATS-R-US/RCM coupled model, run operationally by NOAA and consumed here as a product.",limits:"This is a *modelled* Dst, not Kyoto’s measured index — which has no route into a browser. Because the model propagates the wind to Earth it runs ahead of the clock, so the value shown is the newest one that has actually arrived and the panel says how far its forecast reaches beyond that.",sources:[{name:"NOAA Geospace / Univ. Michigan BATS-R-US + RCM",url:"https://services.swpc.noaa.gov/json/geospace/geospace_dst_1_hour.json"}],related:["inst.dst","model.t89","inst.kp"]},{id:"model.enlil",kind:"model",tier:"D",label:"WSA-Enlil",oneLine:"NOAA’s heliospheric wind forecast, from the Sun’s surface field out past Earth.",meaning:"A three-dimensional magnetohydrodynamic simulation of the solar wind filling the inner heliosphere, driven by solar magnetograms with CMEs inserted as cones. It is where CME arrival times come from, and it is the reason a forecast can say anything at all about tomorrow.",howMade:"Consumed as a published time series at Earth. Not run here.",limits:"A forecast, with a forecast’s error — CME arrival times are routinely wrong by several hours. The Checks tab holds its wind speed against the measured one at the same moment, with a deliberately wide tolerance, because that row is there to catch a misread column rather than to grade the forecast.",sources:[{name:"WSA-Enlil (NOAA SWPC)",url:"https://services.swpc.noaa.gov/json/enlil_time_series.json"}],related:["layer.cme-cones","model.cme-cone","inst.speed"]},{id:"model.cme-cone",kind:"model",tier:"D",label:"CME cone model",oneLine:"A coronal mass ejection as a cone of plasma expanding radially from the Sun.",meaning:"A CME is a billion tonnes of magnetised plasma thrown off the Sun. The cone model is the working approximation used to say where one is heading and when it arrives: a direction, a half-width and a speed, fitted to coronagraph images.",howMade:"Cone parameters from NASA DONKI’s analysed CMEs — latitude, longitude, half angle, speed at 21.5 solar radii — propagated radially at constant speed.",limits:"A real CME is a magnetic flux rope, not a cone of uniform plasma, and its internal field — which decides whether it causes a storm at all — is not in the cone parameters. It also decelerates or accelerates toward the ambient wind speed, which constant-speed propagation does not do. Arrival times carry a stated window.",sources:[{name:"NASA DONKI",url:"https://kauai.ccmc.gsfc.nasa.gov/DONKI/"}],related:["layer.cme-cones","model.enlil","inst.xray"]},{id:"model.astronomy-engine",kind:"model",tier:"D",label:"astronomy-engine",oneLine:"Every position in the scene: planets, Moon, the sub-solar point, the solar rotation axis.",meaning:"The scene is not a diagram — the planets are where they actually are, the terminator falls where the Sun actually is, and Saturn’s rings lie in Saturn’s own equatorial plane. All of that comes from one ephemeris, computed in the browser.",howMade:"A VSOP87/Meeus-derived ephemeris library. Positions are produced in the true-equator-of-date frame and mapped to the scene by a pure rotation, so obliquity and sidereal spin fall out of the geometry rather than being applied by hand.",limits:"Positions only. Nothing here models how the planets influence each other or the wind — Jupiter’s magnetosphere is described in its card and drawn nowhere.",sources:[{name:"astronomy-engine (VSOP87/Meeus)",url:"https://github.com/cosinekitty/astronomy"}],related:["body.earth","layer.terminator","concept.gsm"],toPromote:"Checked against JPL Horizons at recorded epochs; tightening that comparison is cheap, and is the prerequisite for anything that models interactions rather than positions."}],cx=[{id:"layer.field-lines",kind:"layer",tier:"D",label:"Magnetic field lines",oneLine:"The Earth’s field, traced through IGRF-14 + T89c. Blue closes, violet stays open.",meaning:"These are the paths a charged particle is bound to follow, and they are the shield: a blue line has both feet on Earth and traps what is on it, a violet line has one foot on Earth and leads out toward the solar wind. The boundary between the two is the edge of the polar cap, and it moves equatorward as a storm grows.",howMade:"Runge–Kutta integration along the total field from seed points at 120 km altitude, in both directions, until each end reaches the surface or leaves the model. Retraced when the Kp band changes or the Earth has turned 3° under the Sun-fixed external field, spread across frames so no single one stalls.",limits:"Open does not mean reconnected — these lines are open because the model does not close them, and T89 has no IMF term, so a southward Bz changes nothing here. Lines that leave the model are cut and labelled, not ended: the tail continues far past 70 Rₑ. Brightness is uniform and carries no flux information. The eighty drawn lines are a legible sample of a continuum, not a count of anything.",sources:[{name:"IGRF-14 (IAGA)"},{name:"Tsyganenko 1989 (T89c)"}],related:["model.igrf14","model.t89","concept.reconnection","layer.magnetopause","concept.gsm"],toPromote:"Line brightness keyed to flux-tube volume, which the trace already computes and discards, would make the shield show where the field is strong rather than only where it goes.",scene:["field-lines-igrf14-t89","field-line-closed","field-line-open"]},{id:"layer.magnetopause",kind:"layer",tier:"D",label:"Magnetopause surface",oneLine:"The teal wireframe: the modelled edge of the magnetosphere, moving with the wind.",meaning:"The outer wall of the cavity the Earth’s field holds open in the solar wind. Watch it compress when the dynamic pressure rises — that is the shield being pushed in, and when it goes inside 6.6 Rₑ the geostationary satellites are outside it.",howMade:"The Shue et al. 1998 surface, rebuilt from the propagated solar wind, oriented to the Sun rather than to the Earth’s spin.",limits:"Drawn sparsely on purpose: a dense surface reads as a glass dome, and a magnetopause is a pressure balance, not a wall. Truncated at 100° from the nose. With no measured wind there is nothing to compute and nothing is drawn.",sources:[{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}],related:["model.shue1998","layer.bow-shock","inst.mpause","layer.field-lines"],scene:["magnetopause-shue1998","magnetosphere"]},{id:"layer.bow-shock",kind:"layer",tier:"D",label:"Bow shock",oneLine:"The orange wireframe: where the supersonic wind is forced to slow, ahead of the magnetopause.",meaning:"The outermost surface in the scene, and the first thing the solar wind meets. Between it and the magnetopause is the magnetosheath — slowed, heated, turbulent plasma flowing around the cavity.",howMade:"Farris & Russell 1994 standoff from the Shue nose and the Mach number, flared with the Shue law scaled to it.",limits:"Only the nose distance is fitted; the rest of the shape is borrowed. The sheath between the two surfaces is drawn as empty when it is the most physically active region in the picture.",sources:[{name:"Farris & Russell 1994",ref:"doi:10.1029/94JA00170"}],related:["model.farris-russell","layer.magnetopause","layer.solar-wind"],scene:["bow-shock-farris-russell"]},{id:"layer.aurora",kind:"layer",tier:"D",label:"Aurora oval",oneLine:"OVATION Prime’s forecast probability, painted on the globe.",meaning:"Where the energy coming in down the open field lines is being deposited in the atmosphere. The oval encircles the geomagnetic pole rather than the geographic one, and it is displaced toward magnetic midnight — both of those are visible in the shape, and both are checked.",howMade:"NOAA’s 1° probability grid, sampled onto the globe’s surface.",limits:"A probability of visible aurora over the next half hour, not brightness and not certainty. Nothing here knows about cloud, moonlight or daylight. When the grid fails to arrive no oval is drawn, and the report says so rather than showing a quiet one.",sources:[{name:"OVATION Prime (NOAA SWPC)"}],related:["model.ovation","layer.field-lines","concept.reconnection","inst.kp"],scene:["earth-globe"]},{id:"layer.solar-wind",kind:"layer",tier:"M",label:"Solar wind stream",oneLine:"Ambient particles — their rate and speed are the measured wind, the look is invented.",meaning:"The wind is a real, continuous flow of plasma at a few hundred kilometres per second, and it is invisible. These particles are a way of feeling its speed and density change, and of seeing it part around the magnetosphere.",howMade:"A GPU particle stream whose emission rate follows the measured proton density and whose travel speed follows the measured bulk speed, parting at the modelled magnetopause.",limits:"The real wind is not made of visible grains and does not look like this. Two dimensions carry information — rate and speed — and everything else about the appearance is invented: size, colour, spacing, the individual tracks. Nothing here is a particle trajectory.",keyedTo:"Proton density (rate) and bulk speed (velocity), both measured at L1",sources:[{name:"NOAA SWPC real-time solar wind"}],related:["inst.speed","inst.density","layer.bow-shock","concept.tiers"],scene:["solar-wind-stream"]},{id:"layer.cme-cones",kind:"layer",tier:"D",label:"CME cones",oneLine:"Analysed coronal mass ejections, expanding from the Sun at their measured speed.",meaning:"Where the big storms come from. The cone shows the direction and angular width fitted to coronagraph images, and its leading edge is where the model puts the front now — so a cone that has grown wide enough to contain the Earth is one worth reading the arrival time for.",howMade:"DONKI cone parameters propagated radially at their fitted speed, with arrival times from Enlil where they exist.",limits:"A cone is a working approximation of a magnetic flux rope. The thing that decides whether a CME causes a storm — the direction of the field inside it — is not in the cone parameters and cannot be known until it arrives at L1.",sources:[{name:"NASA DONKI"}],related:["model.cme-cone","model.enlil","inst.bz","inst.xray"],scene:["cme-cones","cme-"]},{id:"layer.sun-disc",kind:"layer",tier:"E",label:"Solar imagery",oneLine:"Real telescope frames of the Sun, projected back onto a sphere.",meaning:"Each wavelength shows a different height and temperature in the solar atmosphere — the photosphere in visible light, the million-degree corona in extreme ultraviolet. Active regions bright in EUV are where flares come from, and coronal holes, the dark patches, are where the fast wind escapes.",howMade:"GOES SUVI and SDO frames, re-projected onto the sphere about the true solar rotation axis for the moment of the exposure, so features land where they were.",limits:"A projection of a flat image onto a sphere is only correct near disc centre; toward the limb it stretches, and the far hemisphere is not observed at all. The part of each frame beyond the limb is corona, not surface, and is shown on a separate card rather than smeared onto the sphere.",sources:[{name:"GOES SUVI / SDO (NOAA SWPC)"}],related:["layer.coronagraph","layer.active-regions","inst.xray","body.sun"],scene:["sun-disc"]},{id:"layer.coronagraph",kind:"layer",tier:"E",label:"Coronagraphs (LASCO C2, C3)",oneLine:"The corona with the Sun occulted, shown at the distance it actually covers.",meaning:"A coronagraph blocks the disc so the faint corona around it can be seen — which is where a CME is first visible, before anything at Earth has changed. C2 covers roughly 2 to 6 solar radii, C3 out to 30.",howMade:"SOHO LASCO frames on a plane through the Sun, scaled from each frame’s own occulting-disc calibration so the Sun sits inside its cutout at the true distance.",limits:"A coronagraph image is a plane, and the corona is not. The Viewer states its coverage as a ladder in solar radii because there is a real gap: nothing in this set observes between about 1.5 and 2.3 R☉. That gap is shown, not filled.",sources:[{name:"SOHO LASCO (NASA/ESA, via NOAA SWPC)"}],related:["layer.sun-disc","layer.cme-cones","body.sun"],toPromote:"MLSO K-Cor covers 1.05–3 R☉ and would close the gap exactly, but it sends no CORS header, is ground-based and weather-bound, and its recent coverage is intermittent. It is recorded as a mirror candidate.",scene:["sun-disc"]},{id:"layer.active-regions",kind:"layer",tier:"E",label:"Active regions",oneLine:"NOAA’s numbered sunspot groups, marked at their reported heliographic positions.",meaning:"Active regions are where the Sun’s field is concentrated and tangled, and that is where flares and CMEs originate. A big, complex region rotating onto the Earth-facing side is the standard reason to expect a bad week.",howMade:"Positions from NOAA’s solar region summary, placed on the sphere by the same projection as the imagery — which is why the Checks tab can hold one against the other and catch a mirrored image.",limits:"A marker, not a measurement of the region’s size or complexity. The summary is issued daily, so positions lag the imagery by up to a day of solar rotation.",sources:[{name:"NOAA SWPC solar region summary"}],related:["layer.sun-disc","inst.xray","body.sun"],scene:["active-regions","region-"]},{id:"layer.l1-monitors",kind:"layer",tier:"E",label:"L1 monitors",oneLine:"The spacecraft the wind readings come from, at their real positions.",meaning:"Everything on the left-hand panel about the solar wind is measured *here*, a million and a half kilometres sunward, roughly an hour upstream. The markers are drawn because that hour is the warning, and because the spacecraft are not exactly on the Sun–Earth line — they orbit around L1, tens of Earth radii off-axis, so what they measure is not precisely what hits us.",howMade:"Positions from NOAA’s published spacecraft ephemerides, in GSE, rotated into the scene.",limits:"Markers, not models of the spacecraft. Which one is feeding the panel changes without notice — the feed interleaves several — so the panel names the source of each reading rather than assuming.",sources:[{name:"NOAA SWPC RTSW ephemerides"}],related:["inst.speed","inst.bz","inst.density"],scene:["l1-monitors","l1-","l1-marker-","l1-dropline-"]},{id:"layer.terminator",kind:"layer",tier:"D",label:"Terminator and surface",oneLine:"Day and night on the globe, from the real sub-solar point.",meaning:"The line between day and night is where the sunlit ionosphere ends, and that matters: radio blackouts from a flare affect the sunlit hemisphere only, and the aurora is only visible on the dark side.",howMade:"The sub-solar latitude and longitude from the ephemeris, applied in the globe’s shader over NASA Blue Marble imagery.",limits:"A hard shading boundary stands in for a soft one; real twilight is broad, and the atmosphere bends light past the geometric edge. The surface imagery is a fixed composite, not today’s cloud.",sources:[{name:"astronomy-engine"},{name:"NASA Blue Marble"}],related:["model.astronomy-engine","layer.aurora","inst.xray","body.earth"],scene:["earth-globe","earth-fixed-frame"]},{id:"layer.orbits",kind:"layer",tier:"D",label:"Orbits and the Sun–Earth line",oneLine:"Planetary orbits, and the line the whole instrument is organised around.",meaning:"The Sun–Earth line is the axis of everything here: the magnetosphere points down it, the wind arrives along it, and the L1 monitors sit on it. The orbits give the scene its scale.",howMade:"Orbits sampled from the ephemeris; the Sun–Earth line drawn between the two computed positions.",limits:"At Globe scale distances are logarithmically compressed and bodies are enlarged, so no distance in the picture is readable as a ratio. The True scale toggle removes the compression, and the label always says which is in force.",sources:[{name:"astronomy-engine"}],related:["model.astronomy-engine","layer.l1-monitors"],scene:["sun-earth-line","orbit-","saturn-rings"]},{id:"layer.starfield",kind:"layer",tier:"M",label:"Starfield",oneLine:"Ambient backdrop. Carries no information at all.",meaning:"Depth and orientation for the eye, and nothing more.",howMade:"Generated points on a distant sphere.",limits:"Not a star catalogue. These are not real stars, they are not in real positions, and no constellation in this scene is one. Nothing about them responds to anything measured.",keyedTo:null,sources:[],related:["concept.tiers"],scene:["starfield"]}],An={name:"NOAA SWPC",url:"https://services.swpc.noaa.gov/"},hx=[{id:"inst.kp",kind:"measurement",tier:"E",label:"Planetary K",oneLine:"A 0–9 index of how disturbed the Earth’s field is, worldwide.",meaning:"A 0–9 index of global geomagnetic disturbance, derived from ground magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic storm, and the aurora moves toward the equator.",howMade:"NOAA’s estimated Kp, updated every minute from a network of ground magnetometers, ahead of the definitive three-hourly index.",limits:"A range over three hours, quantised to thirds, and a planetary average — it says nothing about where the disturbance is. It is also the *only* thing driving T89, so the drawn magnetosphere inherits its coarseness: seven bands, stepping.",sources:[An],related:["model.t89","layer.field-lines","inst.dst","model.ovation"]},{id:"inst.bz",kind:"measurement",tier:"E",label:"IMF Bz",oneLine:"The north–south tilt of the Sun’s field as it arrives. Southward is the dangerous one.",meaning:"The north–south component of the interplanetary magnetic field, in GSM coordinates. This is the single most useful predictor on the panel: when Bz turns southward it opposes Earth’s field, magnetic reconnection opens the magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what storms are made of.",howMade:"Measured by a magnetometer on whichever spacecraft is currently feeding NOAA’s real-time solar wind stream at L1, about an hour upstream.",limits:"One point in a wind that is not uniform: the spacecraft sits tens of Earth radii off the Sun–Earth line, so what it measures is not exactly what arrives. And nothing in the rendered magnetosphere responds to it — T89 has no IMF term, so this number predicts a storm the drawn shape cannot show.",sources:[An],related:["concept.reconnection","model.t89","inst.bt","layer.solar-wind","model.shue1998"]},{id:"inst.bt",kind:"measurement",tier:"E",label:"IMF total",oneLine:"How much interplanetary field there is, whichever way it points.",meaning:"Total strength of the interplanetary magnetic field. A high Bt means there is a lot of field available to turn southward.",howMade:"The magnitude of the same L1 magnetometer vector Bz comes from.",limits:"A magnitude says nothing about direction, and direction is what decides whether a storm happens. High Bt with steady northward Bz is quiet.",sources:[An],related:["inst.bz","concept.reconnection"]},{id:"inst.speed",kind:"measurement",tier:"E",label:"Wind speed",oneLine:"How fast the solar wind is arriving — and how much warning L1 buys.",meaning:"Bulk speed of the solar wind at L1, about a million miles sunward of Earth. Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal hole stream. Speed sets how hard the wind presses on the magnetosphere, and how long the warning is: at 400 km/s, L1 buys roughly an hour.",howMade:"Measured by the plasma instrument on the L1 monitor now feeding the stream.",limits:"Bulk speed of the protons, not the speed of any disturbance travelling through the wind — a shock front moves faster than the plasma behind it.",sources:[An],related:["inst.density","layer.solar-wind","layer.l1-monitors","model.enlil"]},{id:"inst.density",kind:"measurement",tier:"E",label:"Proton density",oneLine:"How thick the wind is. With speed, it sets the pressure on the shield.",meaning:"Protons per cubic centimetre in the solar wind. With speed it sets the dynamic pressure that compresses the magnetopause.",howMade:"Measured by the same L1 plasma instrument as the speed.",limits:"Protons only. Alpha particles are roughly 4% by number and carry about 16% of the mass, so the true dynamic pressure is a little above what this implies.",sources:[An],related:["inst.speed","inst.mpause","model.shue1998","layer.solar-wind"]},{id:"inst.xray",kind:"measurement",tier:"E",label:"X-ray class",oneLine:"Flare brightness in soft X-rays, on the A–B–C–M–X scale. Arrives at light speed.",meaning:"Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. Each letter is ten times the one before: A, B, C, M, X. M and X class flares cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive at the speed of light, so there is no warning.",howMade:"The 0.1–0.8 nm channel of the X-ray sensor on a GOES spacecraft at geostationary orbit, converted to the NOAA letter class.",limits:"A whole-Sun measurement: it cannot say where on the disc the flare was, and position is what decides whether its particles reach us. A flare is also not a CME — the two often come together and either can happen alone.",sources:[An],related:["layer.active-regions","inst.protons","model.cme-cone","layer.sun-disc"]},{id:"inst.protons",kind:"measurement",tier:"E",label:"Radiation (S)",oneLine:"Solar protons at geostationary orbit — the hazard that endangers people, not equipment.",meaning:"Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S scale it defines. S1 begins at 10 particle flux units, and each step up is ten times the last. This is the one space-weather hazard that endangers people rather than equipment: at S3 and above, aviation crews on polar routes accumulate real dose and astronauts outside a hull are at risk. Protons from a flare can arrive within tens of minutes, far ahead of any CME.",howMade:"Measured by the particle detectors on a GOES spacecraft.",limits:"Measured at one point outside the atmosphere. Dose on the ground or in an aircraft depends on the atmosphere above you and on the geomagnetic cutoff at your latitude, and neither is modelled here.",sources:[An],related:["concept.reconnection","inst.xray","body.moon","inst.electrons"]},{id:"inst.electrons",kind:"measurement",tier:"E",label:"Electron flux",oneLine:"High-energy electrons that bury themselves in satellite insulation over days.",meaning:"Integral electron flux above 2 MeV at geostationary orbit. Sustained flux above 1000 particle flux units drives deep dielectric charging — electrons bury themselves inside insulating materials until the material discharges through the spacecraft. It is a leading cause of satellite anomalies, and it builds over days rather than minutes.",howMade:"Measured by the particle detectors on a GOES spacecraft.",limits:"The hazard is the accumulated dose over days, so an instantaneous number above the alert level is much less informative than a week spent there.",sources:[An],related:["inst.protons","inst.geosync"]},{id:"inst.geosync",kind:"measurement",tier:"E",label:"Field at 6.6 Rₑ",oneLine:"The only in-situ magnetic measurement here — and the one real check on the drawn shield.",meaning:"Total magnetic field measured by GOES at geostationary orbit, 6.6 Earth radii out. This is the only in-situ magnetic measurement on the panel, and it is the one check available on the modelled shield: when the magnetopause is pushed inside 6.6 Rₑ, the spacecraft finds itself in the solar wind and the field it measures collapses. The reading normally sits below the dipole value for that distance, because the ring current and magnetopause currents subtract from Earth’s own field — the size of that deficit is itself a storm indicator.",howMade:"The magnetometer on a GOES spacecraft, compared here against the dipole value for that distance.",limits:"One point on one orbit, and the spacecraft’s own thrusters disturb it — a reading during an arcjet firing is flagged rather than used.",sources:[An],related:["model.igrf14","model.shue1998","inst.mpause","inst.dst"]},{id:"inst.dst",kind:"measurement",tier:"D",label:"Ring current",oneLine:"How much energy the storm has actually put into the inner magnetosphere.",meaning:"Dst measures how much the ring current — a torus of trapped ions drifting westward around Earth at a few Earth radii — is subtracting from the surface magnetic field. It is the closest thing space weather has to a single number for the size of a storm, because it tracks the energy actually stored in the inner magnetosphere rather than the disturbance at any one station. Quiet is above −30 nT; below −100 nT is an intense storm.",howMade:"NOAA’s Geospace run — the Michigan BATS-R-US/RCM model driven by the L1 solar wind.",limits:"MODELLED, not Kyoto’s measured index, which has no route into a browser. Because the model propagates the wind to Earth it runs ahead of the clock, so the value shown is the newest that has actually arrived and the panel says how far the forecast reaches beyond it. T89 does respond to the ring current, but through Kp rather than through this number.",sources:[An],related:["model.geospace-dst","model.t89","inst.kp","inst.geosync"]},{id:"inst.mpause",kind:"measurement",tier:"D",label:"Magnetopause",oneLine:"How much room the magnetosphere has on the sunward side, right now.",meaning:"Modelled distance from Earth’s centre to the sunward edge of the magnetosphere, in Earth radii, computed from the live solar wind. Typically 10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and exposed to the solar wind directly.",howMade:"The Shue et al. 1998 nose distance from the propagated wind’s dynamic pressure and Bz.",limits:"A modelled average surface, not a measurement. The Checks tab holds it against T89’s own standoff, which is driven by Kp and shares none of its inputs; the two routinely differ by an Earth radius or two, and that gap is real rather than a fault in either.",sources:[{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}],related:["model.shue1998","layer.magnetopause","inst.geosync","model.t89"]}],ux={name:"astronomy-engine (VSOP87/Meeus)",url:"https://github.com/cosinekitty/astronomy"};function Rn(n,e,t,i,s,r){return{id:`body.${n}`,kind:"body",tier:"D",label:e,oneLine:t,meaning:i,howMade:"Position, distance, light-time and apparent size computed from the ephemeris at the moment of the query, not tabulated.",limits:`${s} At Globe scale the rendered size and the orbital distance are both compressed; the True scale toggle removes the compression and the label says which is in force.`,sources:[ux],related:r}}const dx=[Rn("sun","Sun","The source of everything on this panel.","Every quantity on this panel starts here. The photosphere is 5 800 K and the corona above it is two million — the unsolved problem that makes the solar wind possible at all.","The disc you see is imagery projected onto a sphere, not a model of the Sun.",["layer.sun-disc","layer.coronagraph","layer.active-regions","inst.xray"]),Rn("mercury","Mercury","A magnetosphere so small the wind can crush it to the ground.","No atmosphere and only a weak global field, about 1% of Earth’s, so the solar wind reaches the surface. MESSENGER found its magnetosphere can be crushed to the ground during a strong event.","Nothing of Mercury’s own field or magnetosphere is drawn here.",["body.earth","layer.solar-wind"]),Rn("venus","Venus","No global field — the wind strips its atmosphere directly.","No global magnetic field. The wind interacts directly with the ionosphere and strips the upper atmosphere, which is part of why Venus has almost no water left.","The induced ionospheric interaction is not modelled or drawn.",["body.earth","body.mars"]),Rn("earth","Earth","The only planet here with a strong, stable dipole.","The only planet here with a strong, stable dipole. Everything else in this instrument is about what that field is doing today.","The globe’s surface imagery is a fixed composite, not today’s cloud.",["model.igrf14","model.t89","layer.field-lines","layer.terminator","layer.aurora"]),Rn("mars","Mars","Lost its global field, and much of its atmosphere with it.","Lost its global field roughly four billion years ago and kept only crustal patches. MAVEN measured the wind stripping the atmosphere at a rate that, over that span, accounts for much of what is missing.","The crustal field patches are real and are not drawn.",["body.earth","body.venus","layer.solar-wind"]),Rn("jupiter","Jupiter","The largest magnetosphere in the solar system, powered from inside.","The largest magnetosphere in the solar system — some twenty thousand times Earth’s magnetic moment, and if it glowed visibly it would be several times the size of the full Moon from here. Its aurorae are powered mostly by Io’s volcanoes rather than by the solar wind.","None of it is drawn. Nothing here models Jupiter’s field, its aurorae, or its gravitational influence on anything else in the scene.",["body.earth","model.astronomy-engine"]),Rn("saturn","Saturn","A dynamo whose axis is aligned with its spin, which should be impossible.","A magnetic axis aligned with its rotation axis to within a fraction of a degree, which is not supposed to be possible for a self-sustaining dynamo and is still not explained.","The rings are laid in Saturn’s own equatorial plane from the IAU rotational elements; nothing else about the system is modelled.",["body.jupiter","model.astronomy-engine"]),Rn("uranus","Uranus","A magnetosphere that opens and closes once a day.","Its magnetic axis is tilted 59° from its rotation axis and misses the centre of the planet, so its magnetosphere opens and closes once a day.","Not drawn.",["body.neptune","body.earth"]),Rn("neptune","Neptune","A tilted, offset field like Uranus — both made in a thin shell.","A magnetic field tilted 47° and offset from the centre, like Uranus. Both suggest a field generated in a thin shell rather than a deep core.","Not drawn.",["body.uranus","body.earth"]),Rn("moon","Moon","No field, no atmosphere — the surface takes the wind directly.","No field and no atmosphere, so the surface is exposed to the solar wind directly — which is why a radiation storm is an operational problem for anyone there, and why the S scale on this panel is the one that measures risk to people.","The Moon spends part of each month inside Earth’s magnetotail, which changes its radiation environment and is not represented here.",["inst.protons","layer.field-lines","body.earth"])],Mf=[...ox,...lx,...cx,...hx,...dx],fx=new Map(Mf.map(n=>[n.id,n]));function Fs(n){return fx.get(n)??null}function px(n){return`body.${n.toLowerCase()}`}function Rd(n){return Mf.filter(e=>e.kind===n)}const wf={E:"Measured",D:"Modelled",M:"Ambient"},mx=299792.458;function Ef(n,e){const t=gr[n]??gr.Moon;let i=null,s=null;if(n==="Sun")s=Za(we.Sun,xt(e),!0).Length();else if(n==="Moon")s=z0(e).length(),i=mr("Earth",e).helio.length();else if(B0.includes(n)){const o=mr(n,e);i=o.helio.length(),s=n==="Earth"?null:o.geo.length()}const r=s===null?null:s*Is/mx,a=s===null||s===0?null:2*Math.atan(t/(s*Is))*180*3600/Math.PI;return{name:n,auFromSun:i,auFromEarth:s,lightSeconds:r,radiusKm:t,arcsecFromEarth:a}}function Tf(n){if(n===null)return"—";if(n<90)return`${n.toFixed(1)} s`;if(n<3600){const e=Math.floor(n/60);return`${e} min ${Math.round(n-e*60)} s`}return`${(n/3600).toFixed(1)} h`}function Ga(n){if(n===null)return"—";const e=n*Is;return n<.01?`${Math.round(e/1e3).toLocaleString("en-US")} thousand km`:`${n.toFixed(3)} AU`}const gx=[[9,"extreme storm"],[8,"severe storm"],[7,"strong storm"],[6,"moderate storm"],[5,"minor storm"],[4,"unsettled"],[0,"quiet"]];function _x(n){if(n===null)return"unknown";for(const[e,t]of gx)if(n>=e)return t;return"quiet"}function Cd(n,e){const t=n>=0?"N":"S",i=e>=0?"E":"W";return`${Math.abs(n).toFixed(1)}°${t}, ${Math.abs(e).toFixed(1)}°${i}`}function gs(n){const e=n.nextAttempt?Date.parse(n.nextAttempt):NaN;return Number.isFinite(e)?` The next attempt is at ${Ue(new Date(e).toISOString())} UTC.`:" The next attempt is the next refresh cycle."}function Af(n,e,t=new Date,i=null,s=[],r=[],a={snapshot:!1,aurora:!1,cmes:!1}){const o=[],l=`${Ue(t.toISOString())} UTC`;if(!n){if(a.snapshot){o.push(`Solar wind: loading. Positions, the terminator and the scene are computed locally and are already live; the measurements land as the feeds resolve, snapshot lane first (checked ${l}).`);const d=Oa(t);return o.push(`Scene: the Sun at centre, planets at their true positions for ${l} [D]; the Sun is overhead at ${Cd(d.lat,d.lon)}. `+(e.earthSurface==="imagery"?"Earth's surface is NASA's Blue Marble composite (2004) [E].":"Earth's surface imagery is still loading; the vector base map is on the globe.")),o}o.push(`No space-weather data has loaded yet (checked ${l}). The scene below shows body positions only, which are computed locally and do not depend on the network.`)}const c=n?.data,h=n?.parts;if(c&&h){const d=Ss(h.solar_wind,t),g=c.solar_wind;if(!g||d.state==="no-data")o.push(h.solar_wind?.error?`Solar wind: unavailable (${yn(h.solar_wind.error)}). ${gs(a)} Nothing is being substituted for it.`:"Solar wind: no data. Nothing is being substituted for it.");else{const T=g.bz_gsm,w=T===null?"unknown":T<-5?"strongly southward, which couples energy into the magnetosphere":T<0?"southward":"northward, which keeps the magnetosphere relatively closed";o.push(`Solar wind at L1, measured by ${g.spacecraft??"the active spacecraft"}: Bz ${T===null?"no data":`${T.toFixed(1)} nanotesla`} (${w}); total field ${g.bt===null?"no data":`${g.bt.toFixed(1)} nT`}; speed ${g.speed===null?"no data":`${Math.round(g.speed)} kilometres per second`}; density ${g.density===null?"no data":`${g.density.toFixed(1)} protons per cubic centimetre`}. Measured [E], timestamped ${Ue(g.time)} UTC`+(d.state==="stale"?`, and now STALE — ${hn(d.ageS??0)} old.`:`, ${hn(d.ageS??0)} old.`))}if(c.propagated){const T=c.propagated.lead_minutes,w=r.find(L=>L.active)??null,C=w?`at L1, ${(w.distanceRe*6371.2/1e6).toFixed(2)} million kilometres sunward and ${w.offAxisRe.toFixed(0)} Earth radii off the Sun–Earth line (${w.offAxisDeg.toFixed(1)}°) [E]`:"at L1, about 1.5 million kilometres sunward";o.push(`That wind was measured ${C}, and takes roughly an hour to arrive. NOAA propagates it to the bow shock nose [D · NOAA]: what is reaching Earth right now was observed at ${Ue(c.propagated.observed_at)} UTC, with Bz ${c.propagated.bz===null?"no data":`${c.propagated.bz.toFixed(1)} nT`} and speed ${c.propagated.speed===null?"no data":`${Math.round(c.propagated.speed)} km/s`}. `+(T!==null&&T>0?`There are about ${Math.round(T)} minutes of already-measured wind still in flight — that is the warning currently in hand.`:"No further measured wind is in flight."))}const _=c.geosync;if(_&&_.total_nt!==null){const T=c.magnetopause?.standoff_re??null;o.push(`GOES-${_.satellite??"?"} measures ${_.total_nt.toFixed(0)} nT at geostationary orbit, 6.6 Earth radii out [E], ${Ue(_.time)} UTC`+(_.arcjet?" — though its thruster was firing, so the reading is suspect":"")+`. That is ${_.deficit_nt!==null&&_.deficit_nt>0?`${_.deficit_nt.toFixed(0)} nT below`:"about"} the dipole value for that distance; the difference is the ring current and magnetopause currents subtracting from Earth's own field. `+(T!==null?T<=6.6?"With the modelled boundary inside 6.6 Rₑ, the spacecraft should be out in the solar wind — that is a claim this measurement can falsify.":"The modelled boundary is outside 6.6 Rₑ, so the spacecraft should be inside the magnetosphere, which is what this field says.":""))}const m=c.particles;if(m){const T=m.s_scale===null?"no data":`S${m.s_scale}${m.s_text?` (${m.s_text})`:""}`;o.push(`Energetic particles at geostationary orbit, measured by GOES [E], ${Ue(m.time)} UTC: protons above 10 MeV at ${m.proton_10mev===null?"no data":`${m.proton_10mev.toFixed(2)} pfu`}, radiation storm level ${T}`+(m.s_scale!==null&&m.s_scale>=3?" — at this level aviation crews on polar routes take real dose.":".")+` Electrons above 2 MeV at ${m.electron_2mev===null?"no data":`${Math.round(m.electron_2mev)} pfu`}`+(m.electron_2mev!==null&&m.electron_2mev>=1e3?", above NOAA’s alert level for satellite charging.":", below the level that charges satellites."))}else o.push(h.particles?.error?`Energetic particle flux: unavailable (${yn(h.particles.error)}). ${gs(a)} No radiation storm level is shown.`:"Energetic particle flux: no data. No radiation storm level is shown.");const p=Ss(h.kp,t);!c.kp||p.state==="no-data"?o.push(h.kp?.error?`Planetary K index: unavailable (${yn(h.kp.error)}). ${gs(a)}`:"Planetary K index: no data."):o.push(`Planetary K index ${c.kp.estimated_kp===null?"no data":c.kp.estimated_kp.toFixed(2)} — geomagnetic conditions are ${_x(c.kp.estimated_kp)}. Measured [E], ${Ue(c.kp.time)} UTC${p.state==="stale"?" — STALE":""}.`);const S=Ss(h.dst,t);if(!c.dst||S.state==="no-data")o.push(h.dst?.error?`Ring current (Dst): unavailable (${yn(h.dst.error)}). ${gs(a)}`:"Ring current (Dst): no data.");else{const T=c.dst.lead_minutes;o.push(`Ring current index Dst ${c.dst.value_nt===null?"no data":`${c.dst.value_nt.toFixed(0)} nanotesla`} — ${c.dst.level??"unclassified"}. This is how much a torus of trapped ions drifting around Earth is subtracting from the surface field; it is the single number that best tracks the size of a storm. Modelled [D] by NOAA's Geospace run from the L1 solar wind — not Kyoto's measured index, which has no route into a browser — for ${Ue(c.dst.time)} UTC${S.state==="stale"?" — STALE":""}. `+(T!==null&&T>0?`The model runs ${T} minutes ahead of that; the value quoted is the newest one whose time has arrived, not the newest one in the file.`:"The model has no lead beyond that sample."))}const x=Ss(h.xray,t);if(!c.xray||x.state==="no-data"?o.push(h.xray?.error?`GOES X-ray flux: unavailable (${yn(h.xray.error)}). ${gs(a)}`:"GOES X-ray flux: no data."):o.push(`Solar X-ray background is class ${c.xray.class??"no data"} (${c.xray.flux_long===null?"no data":`${c.xray.flux_long.toExponential(1)} watts per square metre`}, 0.1–0.8 nanometre band, GOES). Measured [E], ${Ue(c.xray.time)} UTC${x.state==="stale"?" — STALE":""}.`),c.scales){const T=c.scales.G,w=c.scales.R,C=c.scales.S;o.push(`NOAA scales today: radio blackouts R${w.scale??"–"} (${w.text??"no data"}), solar radiation S${C.scale??"–"} (${C.text??"no data"}), geomagnetic storms G${T.scale??"–"} (${T.text??"no data"}). NOAA's own product, modeled [D].`)}else o.push(h.scales?.error?`NOAA R/S/G scales: unavailable (${yn(h.scales.error)}). ${gs(a)}`:"NOAA R/S/G scales: no data.");const v=c.magnetopause;if(v?.standoff_re!=null){const T=v.standoff_re<9?" That is a compressed magnetosphere — the shield is being pushed in.":v.standoff_re>11.5?" That is an expanded, quiet magnetosphere.":"";o.push(`Modeled [D] magnetopause standoff: ${v.standoff_re.toFixed(1)} Earth radii on the sunward side, with flaring parameter ${v.alpha?.toFixed(2)??"no data"}, computed from the ${c.propagated?"propagated":"L1"} solar wind above (dynamic pressure ${v.dyn_pressure_npa?.toFixed(2)??"no data"} nanopascals) using Shue et al. 1998, doi:10.1029/98JA01103.${T}`+(v.bow_shock_re!=null?` The bow shock stands off at ${v.bow_shock_re.toFixed(1)} Earth radii (Farris & Russell 1994).`:""))}else o.push("Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing. No boundary is drawn.");if(c.alerts.length>0){const T=c.alerts[0];o.push(`Most recent NOAA notice, ${Ue(T.issued)} UTC: ${T.headline||T.product}. ${c.alerts.length} notices in the last three days.`)}else o.push("No NOAA alerts, watches or warnings in the feed.")}const u=s.filter(d=>d.earthDirected&&d.arrival&&Date.parse(d.arrival.time)>t.getTime()).sort((d,g)=>Date.parse(d.arrival.time)-Date.parse(g.arrival.time));if(u.length>0){const d=u[0],g=(Date.parse(d.arrival.time)-t.getTime())/36e5;o.push(`A coronal mass ejection is on its way. NASA's DONKI catalogue analysed it leaving the Sun at ${Math.round(d.speedKms)} km/s on ${Ue(d.time215)} UTC, with a ${Math.round(d.halfAngle)}° half-angle cone pointed ${d.offAxisDeg<5?"almost directly at Earth":`${Math.round(d.offAxisDeg)}° off the Earth line`} [D · NASA]. Propagating it radially at that constant speed puts arrival near ${Ue(d.arrival.time)} UTC, about ${g<24?`${Math.round(g)} hours`:`${(g/24).toFixed(1)} days`} from now, give or take ${d.arrival.windowHours} hours [D · cone]. ${d.arrivalFromEnlil?"That arrival time is NOAA/NASA’s own Enlil run.":"Constant speed ignores drag — real ejections decelerate toward the ambient wind, so fast ones tend to arrive later than this and slow ones earlier. The window is an order-of-magnitude bound, not a fitted error."}${u.length>1?` ${u.length-1} more are also inbound.`:""}`)}else s.length>0&&o.push(`${s.length} coronal mass ejection${s.length>1?"s have":" has"} been analysed in the last few days, none of them Earth-directed with an arrival still ahead of us. Nothing is inbound.`);e.cmes&&e.cmes.count>0&&o.push(`${e.cmes.count} cone${e.cmes.count>1?"s are":" is"} drawn expanding from the Sun [D], warm where Earth lies inside the cone and cool where it does not. The apex direction, half-angle and speed are DONKI's analysis of coronagraph imagery; the radial propagation is ours.`);const f=Oa(t);if(o.push(`Scene: the Sun at centre, with all eight planets at their true positions for ${l}, computed locally with astronomy-engine [D]. The Sun is currently overhead at ${Cd(f.lat,f.lon)}, and Earth's day/night terminator in the scene is drawn from that point [D]. The Moon is shown at its true direction from Earth.`),o.push(e.earthSurface==="imagery"?"Earth's surface is measured imagery [E]: NASA's Blue Marble Next Generation composite, acquired through 2004, with NASA's Black Marble 2016 night lights drawn as emission on the night side. Nothing about it is live — it is a dated composite, and it says so here rather than pretending to be today's clouds.":e.earthSurface==="loading"?"Earth's surface imagery (NASA's Blue Marble and Black Marble composites) is still loading; the vector base map is on the globe until it arrives.":"Earth's surface is the vector base map — NASA's raster composites (Blue Marble 2004, Black Marble 2016) did not load, so no imagery is implied."),!e.aurora)o.push("The aurora overlay is hidden.");else if(i?.data){const d=i.data,g=(t.getTime()-Date.parse(d.observation_time))/1e3,_=g>i.stale_after_s;o.push(`Aurora: NOAA's OVATION Prime model [D · NOAA] puts the peak probability of visible aurora at ${d.max_probability}% in this forecast, valid ${Ue(d.forecast_time)} UTC and computed from an observation at ${Ue(d.observation_time)} UTC (${hn(g)} old${_?", STALE":""}). It is drawn as the glowing oval over the poles, on a 1°-by-1° grid, teal through magenta with increasing probability — a legend for intensity, not the aurora's real colours. The oval encircles the magnetic pole, not the geographic one — which is why it sits off-centre.`)}else a.aurora?o.push("Aurora: loading. The OVATION forecast lands with the slow lane; no oval is drawn yet."):o.push("Aurora: the OVATION forecast is unavailable, so no oval is drawn.");if(e.shield){const d=e.fieldLines.far===!0,g=e.fieldLines.band??null,_=e.fieldLines.tiltDeg??null,m=e.fieldLines.truncated??0;o.push(`The magnetic shield is drawn: ${e.fieldLines.lines} field lines traced through ${Z0(new Date)} [D], blue where they close between hemispheres and violet where they stay open toward the solar wind. The teal boundary is the Shue et al. 1998 magnetopause and the orange one the Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. `+(g===null?"No Kp index reached us, so the external field is not modelled and these lines are the Earth's internal field alone — a tilted dipole, with none of the compression or tail stretching the solar wind actually imposes. Read the shape as incomplete rather than quiet.":`Added to it is ${Q5()} [D], ${af(g)}, at a dipole tilt of ${_===null?"—":`${_.toFixed(1)}°`}. That is what compresses the dayside, stretches the nightside into lobes and inflates the inner region: the shape is the field's, integrated, not a surface drawn around a dipole. T89 bins Kp into seven fits, so the field steps between them rather than gliding, and it carries no IMF term at all — a southward Bz opens the real dayside and changes nothing here.`)+(m>0?` ${m} line${m===1?"":"s"} run past where ${m===1?"it is":"they are"} drawn, and ${m===1?"is":"are"} cut rather than ended: T89 is fitted inside 70 Rₑ and has no magnetopause, so the trace stops at the edge of what the model describes — down the tail, and 20 Rₑ sunward.`:"")+" The boundary surfaces stop at 100° from the sunward axis, inside the range Shue et al. fitted; the real magnetotail continues far beyond."+(d?" From this far out the full line cage would read as noise, so it gives way to twelve signature lines and the boundary silhouette; the cage returns as the camera closes in.":""))}else o.push("The magnetic shield is hidden.");return o.push(`${H0(e.mode)}. Camera: ${_r.find(d=>d.id===e.view)?.label??e.view} — ${_r.find(d=>d.id===e.view)?.title??""}. ${e.reducedMotion?"Reduced motion is on — camera moves cut rather than glide.":"Motion is enabled."}`),e.wind!==!1&&c?.solar_wind?.speed!=null&&o.push(`The streaming particles are ambient [M] — far sparser and brighter than the real wind, which is invisible. What is real is their behaviour: they move at a rate set by the measured ${Math.round(c.solar_wind.speed)} km/s, their number follows the measured density, and they part around the same modelled magnetopause the HUD reports. When the boundary is pushed in, the flow closes in with it.`),(c?.kp?.estimated_kp??0)>4&&o.push("The field lines are shivering. That is ambient [M] — a legend for the elevated Kp above, not a motion the real field makes."),o.push("Colour and the starfield are ambient [M] — parameter-driven artwork, not measurements. There is no invented glow around the Sun: the region a painted corona would have occupied is the region the LASCO coronagraphs actually photograph, and that imagery is shown there instead when it is switched on."),o}const Hn=[{id:"report",label:"Now"},{id:"forecast",label:"Ahead"},{id:"sun",label:"Sun"},{id:"sources",label:"Sources"},{id:"checks",label:"Checks"}];function ae(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Xn(n,e,t,i=!0,s){if(!t.trim())return"";const r=s?.(n),a=r===void 0?i:r;return`<details class="sect" data-sect="${ae(n)}"${a?" open":""}>
    <summary>${ae(e)}</summary>
    <div class="sect-body">${t}</div>
  </details>`}function vx(n,e,t){const i=Af(n.now,e,t,n.aurora,n.cmes,n.spacecraft?.data??[],{snapshot:n.lanes.snapshot,aurora:n.lanes.aurora,cmes:n.lanes.cmes,nextAttempt:n.nextAttempt});return`
    <h2>Now</h2>
    <p class="state-sentence" aria-hidden="true">${Z6(n)}</p>
    <p class="sr-only">${ae(J6(n))}</p>
    <h3>Situation Report</h3>
    ${i.map(s=>`<p>${ae(s)}</p>`).join("")}`}function xx(n){if(n.kp.length===0)return'<p class="tile-meta">No Kp forecast loaded.</p>';const e=n.kp.slice(-40),t=Math.max(5,...e.map(c=>c.kp)),i=268,s=46,r=1,a=(i-r*(e.length-1))/e.length,o=e.map((c,h)=>{const u=c.kp/t*(s-10),f=c.kind==="predicted"?"kp-pred":"kp-obs",d=c.kp>=5?" kp-storm":"";return`<rect class="${f}${d}" x="${(h*(a+r)).toFixed(2)}" y="${(s-10-u).toFixed(2)}"
      width="${a.toFixed(2)}" height="${Math.max(.6,u).toFixed(2)}">
      <title>${Ue(c.time)} UTC — Kp ${c.kp.toFixed(2)} (${c.kind})</title></rect>`}).join(""),l=s-10-5/t*(s-10);return`<svg class="kp-chart" viewBox="0 0 ${i} ${s}" role="img"
      aria-label="Planetary K index, observed and predicted, storm threshold at 5">
      <line class="spark-rule" x1="0" y1="${l.toFixed(2)}" x2="${i}" y2="${l.toFixed(2)}" />
      ${o}</svg>
    <p class="tile-meta"><span class="key-obs">▮</span> observed
      <span class="key-pred">▮</span> predicted · rule at Kp 5, the storm threshold</p>`}function yx(n,e,t=[],i,s=null){if(!n)return`<h2>Ahead</h2><p>${e?'<span class="tile-state loading">Loading NOAA forecasts<span class="pulse">…</span></span>':s?`<span class="tile-state err"><span class="tile-state-word">unavailable</span> · ${ae(s)}</span>`:"no data — the forecasts could not be parsed."}</p>`;const r=n.threeDay?Ad(n.threeDay):null,a=n.discussion?Ad(n.discussion):null,o=n.odds[0];return`
    <h2>Ahead</h2>
    <p>Everything below is <span class="badge badge-d">D</span> NOAA's own forecast, not ours.
    Where the forecaster wrote prose, it is reproduced verbatim — a summary of a forecast is
    a different claim from the forecast.</p>

    <h3>Planetary K, observed and predicted</h3>
    ${xx(n)}

    ${o?`<h3>Flare probability, next 24 h</h3>
    <table class="prov"><tbody>
      <tr><td>C class</td><td class="num">${o.c??"—"}%</td>
          <td>common; minor or no effect at the ground</td></tr>
      <tr><td>M class</td><td class="num">${o.m??"—"}%</td>
          <td>radio blackouts on the sunlit side</td></tr>
      <tr><td>X class</td><td class="num">${o.x??"—"}%</td>
          <td>strong blackouts, possible radiation storm</td></tr>
    </tbody></table>
    <p class="tile-meta">Issued for ${ae(o.date)}.</p>`:""}

    ${n.flares.length?`<h3>Recent flares</h3>
    <table class="prov"><tbody>${n.flares.slice(0,6).map(l=>`
      <tr><td class="num">${ae(l.maxClass)}</td>
          <td class="num">${Ue(l.max??l.begin)}</td>
          <td>${l.region?`region ${l.region}`:""}
            <span class="tile-meta">${hn((Date.now()-Date.parse(l.begin))/1e3)} ago</span></td></tr>`).join("")}
    </tbody></table>`:""}

    ${n.f107.value!==null?`<h3>Solar radio flux</h3>
    <p>F10.7 at <b class="sentence-num">${n.f107.value}</b> solar flux units — the standard
    proxy for solar activity and the driver of upper-atmosphere density, so it sets how fast
    satellites in low orbit decay.</p>`:""}

    ${bx(n.enlil,t,i)}

    ${Xn("fc-3day","NOAA 3-day forecast",r?`
      <pre class="product">${ae(r.body)}</pre>
      ${r.issued?`<p class="tile-meta">Issued ${ae(r.issued)}.
        <a href="${Mx.threeDay}" rel="noreferrer noopener" target="_blank">Source</a>.</p>`:""}
    `:"",!1,i)}

    ${Xn("fc-discussion","Forecaster discussion",a?`
      <pre class="product">${ae(a.body)}</pre>
      ${a.issued?`<p class="tile-meta">Issued ${ae(a.issued)}.</p>`:""}
    `:"",!1,i)}`}function bx(n,e=[],t){if(!n||n.ahead.length===0)return"";const i=n.peakSpeed,s=n.cloudArrival,r=n.past[n.past.length-1]?.speed??null,a=xn(Ed(n.ahead,"speed"),{unit:"km/s",format:c=>c.toFixed(0),extremes:!0,direction:"future"}),o=xn(Ed(n.ahead,"cloud"),{unit:"",format:c=>c.toFixed(2),rule:ar,direction:"future"}),l=c=>{const h=(Date.parse(c)-Date.now())/36e5;return h<1?"within the hour":`in about ${Math.round(h)} h`};return Xn("fc-enlil","WSA-Enlil — the wind at Earth",`
    <p>A magnetohydrodynamic simulation of the inner heliosphere sampled at Earth
    <span class="badge badge-d">D</span>, run by NOAA from solar magnetograms and the
    analysed CME cones. It is the only forecast here that solves the physics rather than
    extrapolating, and unlike our own cone propagation it accounts for drag.</p>

    <p>Radial speed over the next
    ${Math.round((Date.parse(n.lastTime)-Date.now())/36e5)} hours${r!==null?`, from <b class="sentence-num">${r.toFixed(0)}</b> km/s now`:""}:</p>
    ${a}
    ${i?.speed!=null?`<p>Peaks at <b class="sentence-num">${i.speed.toFixed(0)}</b> km/s
      ${l(i.time)} — ${Ue(i.time)} UTC on
      ${new Date(i.time).toUTCString().slice(0,11)}.</p>`:""}

    <h4>Ejecta at Earth</h4>
    <p class="fine">The model carries a passive tracer that marks CME plasma. It is a mixing
    fraction, not a density and not a probability — it says where the ejection is in the
    simulation, and the simulation can be wrong about that.</p>
    ${o}
    ${s?`<p>The tracer crosses ${ar} at <b class="sentence-num">${Ue(s.time)}</b> UTC
         on ${new Date(s.time).toUTCString().slice(0,11)}, ${l(s.time)} —
         the model's arrival for the ejection now in flight.</p>
         ${Sx(s.time,e)}`:`<p>The tracer stays below ${ar} throughout the run: no ejecta reach Earth
         in the model's window.${e.some(c=>c.earthDirected&&c.arrival&&Date.parse(c.arrival.time)>Date.now())?" Our cone propagation does put one here — the two disagree, and Enlil is the one that solves the physics.":""}</p>`}
    <p class="fine">Model output starts ${new Date(n.firstTime).toUTCString().slice(0,11)}
    at ${Ue(n.firstTime)} UTC — ${n.past.length}
    samples already elapsed and ${n.ahead.length} still ahead. The elapsed half is checked
    against the measured wind in the Checks panel.</p>`,!0,t)}function Sx(n,e){const i=e.filter(a=>a.earthDirected&&a.arrival&&Date.parse(a.arrival.time)>Date.now()).sort((a,o)=>Date.parse(a.arrival.time)-Date.parse(o.arrival.time))[0];if(!i?.arrival)return`<p class="fine">No Earth-directed cone of ours has an arrival still ahead, so
      there is nothing to compare this against.</p>`;if(i.arrivalFromEnlil)return`<p class="fine">The arrival in the CME panel is NOAA and NASA's own Enlil
      figure, so it is the same model and not an independent comparison.</p>`;const s=(Date.parse(n)-Date.parse(i.arrival.time))/36e5,r=s>0;return`<p>Our cone puts it at <b class="sentence-num">${Ue(i.arrival.time)}</b> UTC,
    <b class="sentence-num">${Math.abs(s).toFixed(0)} h</b>
    ${r?"earlier":"later"} than Enlil.
    ${r?"That is the expected direction: the cone carries the ejection at the constant speed DONKI measured near the Sun, and real ejections decelerate toward the ambient wind. Enlil is the better number; ours is the geometry.":"That is the wrong direction for the usual reason — constant-speed propagation should run early against a model that includes drag — so either the cone speed is below the ambient wind, in which case the ejection accelerates, or the two are tracking different structures."}</p>`}const Mx={threeDay:"https://services.swpc.noaa.gov/text/3-day-forecast.txt"};function wx(n,e){const t=no(e);return`<tr>
    <td>${ae(n)}</td>
    <td><span class="badge badge-${t.toLowerCase()}" title="${ae(Kc(e))}">${t}</span></td>
    <td><a href="${e.source_url}" rel="noreferrer noopener" target="_blank">${ae(e.source)}</a>${e.model?`<br><span class="tile-meta">${ae(e.model.name)}</span>`:""}</td>
    <td class="num">${e.data_time?Ue(e.data_time):Tt}</td>
    <td class="num">${e.error?`<span class="err">${ae(e.error)}</span>`:e.latency_s===null?Tt:`${e.latency_s}s`}</td>
  </tr>`}function Ex(n,e,t,i={surface:"vector",lights:!1,coast:!1}){const s=n.now;if(!s)return"<h2>Provenance</h2><p>No envelope loaded yet.</p>";const r=(h,u,f,d,g,_)=>`<tr>
      <td>${h}</td>
      <td><span class="badge badge-e">E</span></td>
      <td><a href="${f}" rel="noreferrer noopener" target="_blank">${u}</a>
        <br><span class="tile-meta">${g}</span></td>
      <td class="num">${d}</td>
      <td class="num">${_?"on screen":"—"}</td>
    </tr>`,a=`
      ${r("earth surface","NASA Blue Marble Next Generation","https://earthobservatory.nasa.gov/features/BlueMarble/blue_marble.php","2004-12","a composite, not live; public domain. Lazy-loaded after first paint.",i.surface==="imagery")}
      ${r("earth night lights","NASA Black Marble 2016","https://earthobservatory.nasa.gov/features/night-lights/page/2","2016","Suomi NPP VIIRS day/night band composite, drawn as emission on the night side.",i.lights)}`,o=n.aurora,l=o?`<tr>
    <td>aurora</td>
    <td><span class="badge badge-d">D</span></td>
    <td><a href="${o.source_url}" rel="noreferrer noopener" target="_blank">${ae(o.source)}</a>
      <br><span class="tile-meta">${ae(o.model?.name??"")}</span></td>
    <td class="num">${o.data?Ue(o.data.observation_time):Tt}</td>
    <td class="num">${o.data?`${o.latency_s}s`:Tt}</td>
  </tr>`:"",c=Tx(n.spacecraft?.data??[],n.now?.data.solar_wind?.speed??null);return`
    <h2>Provenance</h2>
    <p>Every element on screen, its evidence tier, where it came from and how old it is.</p>
    ${e?Rf(e):""}
    ${Xn("prov-table","Every element",`
      <table class="prov">
        <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Time</th><th>Lat.</th></tr></thead>
        <tbody>${Object.entries(s.parts).map(([h,u])=>wx(h,u)).join("")}${l}</tbody>
      </table>`,!0,t)}
    ${Xn("prov-earth","The Earth base — imagery, not a feed",`
      <table class="prov">
        <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Acquired</th><th>On screen</th></tr></thead>
        <tbody>${a}
          <tr><td>coastlines</td><td><span class="badge badge-m">M</span></td>
            <td>Natural Earth 110m land (vector), optional overlay</td>
            <td class="num">static</td><td class="num">${i.coast?"on":"off"}</td></tr>
        </tbody>
      </table>
      <p class="tile-meta">Until the rasters arrive the globe carries the vector base map
      — cartography [M], not measurement — and the Situation Report says which is showing.</p>`,!1,t)}
    ${Xn("prov-monitors","The monitors",c,!1,t)}
    ${Xn("prov-tiers","What the tiers mean",`
      <p><span class="badge badge-e">E</span> Measured — read from an instrument, shown with its
      timestamp and latency.<br>
      <span class="badge badge-d">D</span> Modelled — computed from measured inputs by a named,
      cited model.<br>
      <span class="badge badge-m">M</span> Ambient — artwork. Parameter-driven, sometimes by real
      values, but never itself a measurement.</p>`,!1,t)}
    ${Xn("prov-models","Models cited",`
      <p class="fine">Each opens what it does — and what it does not.</p>
      <ul class="subject-links">${Rd("model").map(h=>`
        <li><button type="button" class="subject-link" data-subject="${ae(h.id)}">
          <span class="badge badge-${h.tier.toLowerCase()}">${h.tier}</span>
          ${ae(h.label)}</button> — ${ae(h.oneLine)}</li>`).join("")}</ul>
      <p class="fine">${ae(Z0(new Date))}</p>`,!1,t)}
    ${Xn("prov-drawn","What is drawn",`
      <p class="fine">Everything in the scene, by tier. Ambient layers say which of
      their dimensions carries a real number and which is invented.</p>
      <ul class="subject-links">${Rd("layer").map(h=>`
        <li><button type="button" class="subject-link" data-subject="${ae(h.id)}">
          <span class="badge badge-${h.tier.toLowerCase()}">${h.tier}</span>
          ${ae(h.label)}</button> — ${ae(h.oneLine)}</li>`).join("")}</ul>`,!1,t)}`}const Pd=6371.2;function Tx(n,e){if(n.length===0)return"";const t=n.find(o=>o.active)??null,i=n.map(o=>`<tr${o.active?' class="l1-row-active"':""}>
      <td>${ae(o.source)}${o.active?' <span class="tag-live">live</span>':""}</td>
      <td class="num">${o.distanceRe.toFixed(0)}</td>
      <td class="num">${o.offAxisRe.toFixed(1)}</td>
      <td class="num">${o.offAxisDeg.toFixed(1)}°</td>
    </tr>`).join(""),s=n.map(o=>{const l=q6[o.source];return l?`<br><b>${ae(o.source)}</b> — ${ae(l)}`:""}).join("");let r="";if(t&&e&&e>0){const o=t.distanceRe*Pd/e/60;r=` At the ${e.toFixed(0)} km/s now measured, the wind it is
      sampling reaches Earth about ${o.toFixed(0)} minutes later.`}const a=t?`<p>${ae(t.source)} is
       ${(t.distanceRe*Pd/1e6).toFixed(2)} million km upstream and
       <b>${t.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line</b> —
       ${t.offAxisDeg.toFixed(1)}° away from the direction the wind actually has to
       travel to reach us.${r}</p>
       <p class="fine">The solar wind is structured on scales smaller than that offset, so
       the monitor does not always sample the plasma that arrives. It is the best warning
       there is, and it is not the same thing as a measurement taken here.</p>`:"<p>No spacecraft is currently flagged operational in the ephemeris feed.</p>";return`
    ${O6(n)}
    <p class="fine caption">Looking sunward along the Sun–Earth line. Nothing here is
    compressed — Earth, the Moon’s orbit and the spacecraft offsets are one scale.</p>
    <table class="prov l1-table">
      <thead><tr><th>Craft</th><th>Rₑ out</th><th>Rₑ off</th><th>Angle</th></tr></thead>
      <tbody>${i}</tbody>
    </table>
    ${a}
    <p class="fine">${s.replace(/^<br>/,"")}</p>`}function Rf(n){const e=n.rows.length-n.inconclusive;return`<p><span class="summary-pill ${n.passed===e?"ok":"bad"}">${n.passed} / ${e} checks pass</span>${n.inconclusive>0?` <span class="tile-meta">${n.inconclusive} could not be settled on today's data</span>`:""}</p>`}function Ax(n,e){return e&&!n?"<h2>Checks</h2><p>Comparing our numbers with NOAA’s own, by an independent path…</p>":n?`
    <h2>Checks</h2>
    <p>Our values against NOAA’s own published figures, fetched by a separate path at the
    same timestamp. Drift is a bug, not a rounding preference.</p>
    ${Rf(n)}
    <table class="prov">
      <tbody>
        ${n.rows.map(t=>`
          <tr class="check-row">
            <td colspan="2"><strong>${ae(t.name)}</strong></td>
            <td class="${t.inconclusive?"verdict-none":t.ok?"verdict-ok":"verdict-bad"}">${t.inconclusive?"no signal":t.ok?"pass":"DRIFT"}</td>
          </tr>
          <tr class="check-row">
            <td class="num">${ae(t.ours)}</td>
            <td class="tile-meta">vs</td>
            <td class="num">${ae(t.theirs)}</td>
          </tr>
          <tr><td class="check-note" colspan="3">${ae(t.note)}</td></tr>`).join("")}
      </tbody>
    </table>
    <p class="tile-meta">Last run ${Ue(n.ranAt)} UTC.</p>`:"<h2>Checks</h2><p>Not run yet.</p>"}function Rx(n,e){return n===null?"unknown size":`~${(n*e/1048576).toFixed(0)} MB`}function Dd(n,e,t,i,s){if(e)return{state:"loading",text:`<p class="tile-state loading">Loading ${n} frames<span class="pulse">…</span></p>`};if(i){const r=s?` · retrying at ${Ue(s)} UTC`:"";return{state:"error",text:`<p class="tile-state err"><span class="tile-state-word">unavailable</span> · ${ae(i)}${r}</p>`}}return t?{state:"fresh",text:""}:{state:"no-data",text:'<p class="tile-state">no data — the frame list carried no usable frames.</p>'}}function Cx(n,e,t){if(!n)return e?'<h3>Solar cycle</h3><p class="tile-state loading">Loading the sunspot record<span class="pulse">…</span></p>':t?`<h3>Solar cycle</h3><p class="tile-state err"><span class="tile-state-word">unavailable</span> · ${ae(t)}</p>`:'<h3>Solar cycle</h3><p class="tile-state">no data — the record could not be parsed.</p>';const i=n.latest,s=n.ssn.time.length/12;return`
    <h3>Solar cycle</h3>
    <p>Monthly sunspot number since ${ae(n.ssn.time[0].slice(0,4))} —
    ${Math.round(s)} years, the longest continuous record in science.</p>
    ${xn(n.ssn,{extremes:!0,format:r=>r.toFixed(0),unit:"spots",label:"monthly sunspot number, full record"})}
    <p>The last three cycles:</p>
    ${xn(rx(n.ssn,396),{extremes:!0,format:r=>r.toFixed(0),unit:"spots",label:"monthly sunspot number, last 33 years"})}
    <p class="tile-meta">
      ${i?.ssn!==null&&i!==null?`Now <b class="sentence-num">${i.ssn.toFixed(0)}</b>
        for ${ae(i.month)}`:"Latest month unavailable"}${n.allTimeMax?` · record <b class="sentence-num">${n.allTimeMax.ssn.toFixed(0)}</b>
        in ${ae(n.allTimeMax.month)}`:""}.
      <span class="badge badge-e">E</span> NOAA SWPC solar-cycle indices.</p>`}function Px(n,e,t=null,i=!1,s=null){const r=(g,_,m,p)=>`<button class="ctl" ${p}="${g}" aria-pressed="${m}">${ae(_)}</button>`,a=e.filter(g=>g.kind==="disk"),o=e.filter(g=>g.kind==="coronagraph"),l=`
    <div class="sun-set">
      <span class="sun-set-label">Disk · sphere and card</span>
      <div class="sun-picker">${a.map(g=>r(g.id,g.label,g.id===n.loopId,"data-loop")).join("")}</div>
    </div>
    <div class="sun-set">
      <span class="sun-set-label">Corona · plane</span>
      <div class="sun-picker">${r("","Off",n.coronaId===null,"data-corona")}${o.map(g=>r(g.id,g.label,g.id===n.coronaId,"data-corona")).join("")}</div>
    </div>`,c=Dd("SUVI",n.loading,!!n.loop,n.error,n.retryAt),h=n.loop?Dx(n):c.text,u=n.coronaId!==null,f=u?Dd("coronagraph",n.coronaLoading,!!n.corona,n.coronaError,n.coronaRetryAt):null,d=u?f.state==="fresh"?Nx(n):f.text:"";return`
    <h2>The Sun</h2>
    ${l}
    <section class="sun-sec" data-state="${u?f.state:c.state}" aria-label="Disk imagery">
      ${h}
    </section>
    <section class="sun-sec" data-state="${f?f.state:"fresh"}" aria-label="Coronagraph">
      ${d}
      ${Ix(n)}
    </section>
    ${Cx(t,i,s)}`}function Dx(n){const e=n.loop,t=e.frames[n.frameIndex]??e.frames[e.frames.length-1],i=g6(e.instrument,t.satellite),s=Math.round((Date.now()-Date.parse(t.time))/6e4),r=e.frames.length,a=n.preloading?`<span class="tile-meta">Loading ${n.preloaded}/${r} frames…</span>`:n.preloaded>=r?`<button class="ctl" id="sun-play" aria-pressed="${n.playing}">${n.playing?"Pause":"Play"}</button>
         <input type="range" id="sun-scrub" min="0" max="${r-1}" value="${n.frameIndex}" aria-label="Frame" />
         <span class="tile-meta">${n.frameIndex+1}/${r}</span>`:`<button class="ctl" id="sun-play">Load loop · ${r} frames, ${Rx(e.frameBytes,r)}</button>`;return`
    <div class="sun-frame">
      <!-- The image element is not written here. It is owned by the image
           cache and moved into this slot after render, so that rebuilding the
           panel does not throw away a decode that costs 380 ms. -->
      <div class="sun-slot" id="sun-slot" data-frame="${ae(t.url)}"
           data-alt="${ae(i)} image of the Sun at ${Ue(t.time)} UTC"></div>
      <div class="sun-stamp"><span>${Ue(t.time)} UTC</span><span>${s} min ago</span></div>
    </div>
    <div class="sun-transport">${a}</div>
    <p><span class="badge badge-e">E</span> ${ae(i)}. ${ae(e.describes)}</p>
    ${Lx(n)}
    <p class="tile-meta">${e.skippedDropouts>0?`The newest ${e.skippedDropouts} frame${e.skippedDropouts>1?"s were":" was"} a
         data dropout — a valid but near-empty image — so this is the newest usable one. `:"Showing the newest frame. "}Upstream published ${e.totalAvailable} frames
    over ${e.spanHours.toFixed(0)} hours; playback samples ${r} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${e.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>`}function Lx(n){const e=n.diskPlane;return!n.loop||n.loop.kind!=="disk"||!e?"":`<p class="tile-meta">The disk is wrapped onto the sphere; the light
    <i>outside</i> the limb has no sphere to land on, so it is drawn flat on the
    image plane instead — a card reaching <b>${e.halfWidthRsun.toFixed(1)} solar radii</b>,
    measured from this frame's own limb. Prominences and the low corona are on that card.
    Nothing is extrapolated across the two: inside the limb belongs to the sphere,
    outside it to the plane.</p>`}function Ix(n){const e=!!n.loop&&n.loop.kind==="disk",t=m5(n.diskPlane,n.coronaPlane,e);if(t.length===0)return"";const i=t.map(r=>{const a=`${r.fromRsun.toFixed(1)}–${r.toRsun.toFixed(1)} R☉`;return r.label===null?`<tr><td class="err">not observed</td><td class="num">${a}</td></tr>`:`<tr><td>${ae(r.label)}</td><td class="num">${a}</td></tr>`}).join(""),s=t.find(r=>r.label===null&&r.fromRsun>0);return`
    <p class="tile-meta"><b>Covered, in solar radii from the Sun's centre.</b>
      Distances are as measured — the Sun looks small inside a coronagraph because the
      occulting disc really does stand off that far.</p>
    <table class="prov"><tbody>${i}</tbody></table>
    ${s?`<p class="tile-meta">Nothing on this page observes
      ${s.fromRsun.toFixed(1)}–${s.toRsun.toFixed(1)} R☉. MLSO's K-Cor covers
      exactly that band (1.05–3 R☉) but is ground-based — no CORS,
      weather-dependent, and the observatory reopened only this year — so it is a
      mirror candidate, not a layer.</p>`:""}`}function Nx(n){const e=n.corona;if(!e)return"";const t=e.frames[e.newestGood],i=n.coronaPlane,s=Math.round((Date.now()-Date.parse(t.time))/6e4),r=i?`Drawn on a plane through the Sun, perpendicular to the line it was photographed
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
      <div class="sun-slot" id="corona-slot" data-frame="${ae(t.url)}"
           data-alt="${ae(e.instrument)} coronagraph image at ${Ue(t.time)} UTC"></div>
      <div class="sun-stamp"><span>${Ue(t.time)} UTC</span><span>${s} min ago</span></div>
    </div>
    <p><span class="badge badge-e">E</span> ${ae(e.instrument)}.
      ${ae(e.describes)}</p>
    <p class="tile-meta">${r}</p>`}function Ux(n,e){if(n.id==="kp"&&e.kpSeries)return xn(e.kpSeries,{band:[0,4],unit:"Kp",format:i=>i.toFixed(2),label:"Kp history, quiet band shaded"});if(n.id==="dst"&&e.dstSeries)return xn(e.dstSeries,{unit:"nT",format:i=>i.toFixed(0),rule:0,band:[-30,0],extremes:!0});if(n.id==="geosync"&&e.geosyncSeries)return xn(e.geosyncSeries,{unit:"nT",format:i=>i.toFixed(0),label:"total field at geostationary orbit"});if(n.id==="protons"&&e.protonSeries)return xn(e.protonSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(2),label:"proton flux above 10 MeV, logarithmic"});if(n.id==="electrons"&&e.electronSeries)return xn(e.electronSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(0),label:"electron flux above 2 MeV, logarithmic"});if(n.id==="xray"&&e.xraySeries)return xn(e.xraySeries,{log:!0,unit:"W/m²",format:i=>i.toExponential(1),label:"X-ray flux history, log scale"});if(!n.series||!e.series)return"";const t=n.series;return xn({time:e.series.data.time,value:e.series.data[t]},{rule:t==="bz_gsm"?0:null,unit:n.unit,format:i=>t==="speed"?i.toFixed(0):i.toFixed(1),label:`${n.id} history`})}function Zc(n){const e=Fs(n);if(!e)return"";const t=i=>{const s=Fs(i);return s?`<li><button type="button" class="subject-link" data-subject="${ae(s.id)}">
          <span class="badge badge-${s.tier.toLowerCase()}">${s.tier}</span>
          ${ae(s.label)}</button> — ${ae(s.oneLine)}</li>`:""};return`
    <h3>What it means</h3>
    <p>${ae(e.meaning)}</p>
    <h3>How it is made</h3>
    <p>${ae(e.howMade)}</p>
    ${e.keyedTo?`<p class="fine">Ambient, but not arbitrary: ${ae(e.keyedTo)}.</p>`:""}
    <h3>What it does not say</h3>
    <p>${ae(e.limits)}</p>
    ${e.toPromote?`<p class="fine"><strong>What would sharpen it:</strong>
      ${ae(e.toPromote)}</p>`:""}
    ${e.sources.length?`<h3>Cited</h3><ul class="fine">${e.sources.map(i=>`<li>${i.url?`<a href="${i.url}" rel="noreferrer noopener" target="_blank">${ae(i.name)}</a>`:ae(i.name)}${i.ref?` — ${ae(i.ref)}`:""}</li>`).join("")}</ul>`:""}
    ${e.related.length?`<h3>Related</h3><ul class="subject-links">${e.related.map(t).join("")}</ul>`:""}`}function Fx(n){const e=Fs(n);return e?`
    <h2>${ae(e.label)}</h2>
    <p class="tile-meta"><span class="badge badge-${e.tier.toLowerCase()}">${e.tier}</span>
      ${ae(wf[e.tier])}</p>
    <p>${ae(e.oneLine)}</p>
    ${Zc(n)}`:"<p>Nothing here explains that yet.</p>"}const Ec="body:";function Ox(n,e){const t=Ef(n,e),i=(s,r)=>`<tr><td>${s}</td><td class="num">${r}</td></tr>`;return`
    <h2>${ae(t.name)}</h2>
    <table class="prov"><tbody>
      ${t.auFromSun!==null?i("From the Sun",Ga(t.auFromSun)):""}
      ${t.auFromEarth!==null?i("From Earth",Ga(t.auFromEarth)):""}
      ${t.lightSeconds!==null?i("Light travel time",Tf(t.lightSeconds)):""}
      ${i("Radius",`${t.radiusKm.toLocaleString("en-US")} km`)}
      ${t.arcsecFromEarth!==null?i("Apparent diameter",`${t.arcsecFromEarth.toFixed(1)}″`):""}
    </tbody></table>
    <p class="tile-meta"><span class="badge badge-d">D</span> Positions and distances from
    astronomy-engine at ${Ue(e.toISOString())} UTC — computed, not tabulated, so they
    move with the scene.</p>
    ${Zc(px(n))}`}function kx(n,e,t){if(n.startsWith(Ec))return Ox(n.slice(Ec.length),t);const i=Va.find(h=>h.id===n);if(!i)return Fx(n);const s=e.now,r=s?.data??null,a=s?.parts?.[i.part],o=Ss(a,t),l=no(a),c=i.value(r);return`
    <h2>${ae(i.label)}</h2>
    <p class="tile-value" style="font-size:1.9rem">
      <span>${ae(c)}</span><span class="tile-unit">${ae(i.unit)}</span>
    </p>
    <p class="tile-meta"><span class="badge badge-${l.toLowerCase()}">${l}</span>
      ${ae(o.label)}</p>
    ${Ux(i,e)}
    <h3>Provenance</h3>
    ${a?`<table class="prov"><tbody>
      <tr><td>Tier</td><td>${ae(Kc(a))}</td></tr>
      <tr><td>Source</td><td><a href="${a.source_url}" rel="noreferrer noopener" target="_blank">${ae(a.source)}</a></td></tr>
      <tr><td>Data time</td><td class="num">${a.data_time?`${Ue(a.data_time)} UTC`:Tt}</td></tr>
      <tr><td>Latency</td><td class="num">${a.latency_s===null?Tt:`${a.latency_s}s`}</td></tr>
      <tr><td>Stale after</td><td class="num">${Math.round(a.stale_after_s/60)} min</td></tr>
      ${a.mirrored?`<tr><td>Transport</td><td class="warn">Earth Star mirror (stage B) —
        NOAA was unreachable; these are its bytes and its timestamps, copied</td></tr>`:""}
      ${a.error?`<tr><td>Error</td><td class="err">${ae(a.error)}</td></tr>`:""}
    </tbody></table>`:"<p>No provenance recorded.</p>"}
    ${Zc(i.subject)}`}const Bx={E:"measured",D:"modelled",M:"ambient"};function zx(n,e,t,i,s){const r=no(i),a=Ss(i,s),o=i?.data_time?`${Ue(i.data_time)} UTC`:"no time",l=i?.data_time?hn((s.getTime()-Date.parse(i.data_time))/1e3):"",c=a.state==="stale"?" — **stale**":"";return`| ${n} | ${e}${t?` ${t}`:""} | ${Bx[r]??r} | ${o}${l?`, ${l} old`:""}${c} |`}function Vx(n){const{state:e,narration:t,checks:i,forecast:s}=n,r=n.now??new Date,a=e.now,o=`${r.toISOString().slice(0,16).replace("T"," ")} UTC`,l=[];if(l.push(`# Space weather — ${o}`),l.push(""),l.push("_From The Viewer (Earth Star). Every value below carries the time it was observed and how it was arrived at. Values age; this briefing does not._"),l.push(""),!a)return l.push("No data had loaded when this briefing was taken."),l.join(`
`);l.push("## Now"),l.push(""),l.push("| Quantity | Value | Evidence | Observed |"),l.push("|---|---|---|---|");for(const u of Va)l.push(zx(u.label,u.value(a.data),u.unit,a.parts[u.part],r));if(l.push(""),t.length>0){l.push("## Situation"),l.push("");for(const u of t)l.push(`${u}
`)}const c=s?.enlil;(c?.peakSpeed||c?.cloudArrival)&&(l.push("## Ahead"),l.push(""),c.peakSpeed?.speed!=null&&l.push(`- WSA-Enlil peaks at **${c.peakSpeed.speed.toFixed(0)} km/s** at ${Ue(c.peakSpeed.time)} UTC on ${new Date(c.peakSpeed.time).toUTCString().slice(0,11)} (modelled).`),l.push(c.cloudArrival?`- Its CME tracer crosses ${ar} at **${Ue(c.cloudArrival.time)} UTC** on ${new Date(c.cloudArrival.time).toUTCString().slice(0,11)} — the model's arrival for the ejection in flight.`:"- No ejecta reach Earth inside the model’s window."),l.push(""));const h=a.data.alerts??[];if(h.length>0){l.push("## NOAA alerts"),l.push("");for(const u of h.slice(0,6))l.push(`- ${Ue(u.issued)} UTC — ${u.headline||u.product}`);l.push("")}if(i){const u=i.rows.length-i.inconclusive;l.push("## Checks"),l.push(""),l.push(`${i.passed} of ${u} cross-checks pass${i.inconclusive>0?`; ${i.inconclusive} could not be settled on today's data`:""}, last run ${Ue(i.ranAt)} UTC.`),l.push("");for(const f of i.rows){const d=f.inconclusive?"no signal":f.ok?"pass":"DRIFT";l.push(`- **${f.name}** — ${d}: ${f.ours} vs ${f.theirs}`)}l.push("")}l.push("## Sources"),l.push("");for(const[u,f]of Object.entries(a.parts))l.push(`- \`${u}\` — ${f.source}${f.model?` (${f.model.name})`:""}: ${f.source_url}`);return l.push(""),l.push("---"),l.push(""),l.push("Evidence tiers: **measured** read from an instrument · **modelled** computed from measured inputs by a named model · **ambient** artwork, never a measurement."),l.push(""),n.origin&&l.push(`Taken ${o} from ${n.origin}`),l.join(`
`)}function Hx(n=new Date){return`space-weather-${n.toISOString().slice(0,16).replace(/:/g,"").replace("T","-")}.md`}const Ld={alert:0,warning:1,watch:2,cancel:3,summary:4,other:5},Id={alert:"now",warning:"expected",watch:"possible",cancel:"cancelled",summary:"ended",other:"notice"};class Gx{constructor(e){this.cb=e,this.instrumentsEl=document.getElementById("instruments"),this.tickerEl=document.getElementById("ticker"),typeof ResizeObserver<"u"&&new ResizeObserver(()=>this.fitTicker()).observe(this.tickerEl),this.tabsEl=document.getElementById("tabs"),this.bodyEl=document.getElementById("margin-body"),this.bodyEl.addEventListener("click",this.onBodyClick),this.statusEl=document.getElementById("status"),this.perfEl=document.getElementById("perf"),this.headlineEl=document.getElementById("headline-alert"),this.copyEl=document.getElementById("brief-copy"),this.downloadEl=document.getElementById("brief-download"),this.copyEl.addEventListener("click",()=>{this.copyBriefing()}),this.loadSectionState(),this.bodyEl.addEventListener("toggle",this.onSectionToggle,!0),this.downloadEl.addEventListener("click",()=>this.downloadBriefing()),this.clockEl=document.getElementById("clock"),this.buildTiles(),this.buildTabs(),this.bindMargin()}cb;instrumentsEl;tickerEl;tickerExpanded=!1;fittingTicker=!1;tabsEl;bodyEl;statusEl;perfEl;headlineEl;copyEl;downloadEl;perfKey="";sparkKeys=new Map;sectionState=new Map;images=new p6;clockEl;tiles=new Map;tab="report";detailId=null;checksRequested=!1;state=null;checks=null;checksRunning=!1;forecast=null;forecastLoading=!1;forecastRequested=!1;forecastError=null;cycle=null;cycleLoading=!1;cycleRequested=!1;cycleError=null;sun={loop:null,loopId:Us[0].id,frameIndex:0,playing:!1,loading:!0,preloaded:0,preloading:!1,error:null,retryAt:null,corona:null,coronaId:null,coronaLoading:!1,coronaError:null,coronaRetryAt:null,diskPlane:null,coronaPlane:null};narration={mode:"globe",view:"deck",reducedMotion:!1,shield:!0,fieldLines:{lines:0,points:0},aurora:!0,cmes:{shown:!0,count:0}};setNarration(e){this.narration=e}setChecks(e,t){this.checks=e,this.checksRunning=t,this.renderMargin()}setCycle(e,t,i=null){this.cycle=e,this.cycleLoading=t,this.cycleError=i,this.renderMargin()}setForecast(e,t,i=null){this.forecast=e,this.forecastLoading=t,this.forecastError=i,this.renderMargin()}setSunLoop(e,t,i=null){this.sun.loop=e,this.sun.loading=t,this.sun.error=t?null:i,this.sun.frameIndex=e?e.newestGood:0,this.sun.playing=!1,this.sun.preloaded=0,this.sun.preloading=!1,this.renderMargin()}setSunPreload(e,t){this.sun.preloaded=e,this.sun.preloading=t,this.tab==="sun"&&this.renderMargin()}setSunFrame(e){this.sun.frameIndex=e,this.tab==="sun"&&this.updateSunFrame()}setSunPlaying(e){this.sun.playing=e,this.tab==="sun"&&this.renderMargin()}setPlaneCalibration(e,t){const i=e==="disk"?"diskPlane":"coronaPlane",s=this.sun[i],r=s===t||!!s&&!!t&&s.rsun===t.rsun&&s.innerRsun===t.innerRsun&&s.centre.u===t.centre.u&&s.centre.v===t.centre.v;this.sun[i]=t,!r&&this.tab==="sun"&&this.renderMargin()}setCoronaLoop(e,t,i=null){this.sun.corona=e,this.sun.coronaLoading=t,this.sun.coronaError=t?null:i,this.renderMargin()}setSunRetry(e){this.sun.retryAt=e,this.sun.error&&this.tab==="sun"&&this.renderMargin()}setCoronaRetry(e){this.sun.coronaRetryAt=e,this.sun.coronaError&&this.tab==="sun"&&this.renderMargin()}get sunState(){return this.sun}get activeTab(){return this.tab}buildTiles(){this.instrumentsEl.innerHTML="";for(const i of Va){const s=document.createElement("button");s.className="tile",s.id=`tile-${i.id}`,s.type="button",s.innerHTML=`
        <span class="tile-label">${ae(i.label)}</span>
        <span class="tile-value"><span data-v>—</span><span class="tile-unit">${ae(i.unit)}</span></span>
        <span class="tile-spark" data-spark aria-hidden="true"></span>
        <span class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></span>`,s.addEventListener("click",()=>this.openDetail(i.id)),this.tiles.set(i.id,s),this.instrumentsEl.appendChild(s)}const e=document.createElement("div");e.className="tile",e.id="tile-scales",e.innerHTML=`
      <span class="tile-label">NOAA scales</span>
      <span class="scales-row" data-scales></span>
      <span class="tile-spark" aria-hidden="true"></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,this.tiles.set("scales",e),this.instrumentsEl.appendChild(e);const t=document.createElement("button");t.className="tile",t.id="tile-aurora",t.type="button",t.innerHTML=`
      <span class="tile-label">Aurora peak</span>
      <span class="tile-value"><span data-v>—</span><span class="tile-unit">%</span></span>
      <span class="tile-spark" aria-hidden="true"></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,t.addEventListener("click",()=>this.selectTab("report")),this.tiles.set("aurora",t),this.instrumentsEl.appendChild(t)}buildTabs(){this.tabsEl.innerHTML=Hn.map(e=>`<button class="tab" role="tab" id="tab-${e.id}" data-tab="${e.id}"
        aria-controls="margin-body" aria-selected="${e.id===this.tab}"
        tabindex="${e.id===this.tab?"0":"-1"}">${e.label}</button>`).join(""),this.tabsEl.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");t&&this.selectTab(t.dataset.tab)}),this.tabsEl.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const i=Hn.findIndex(a=>a.id===this.tab),s=i<0?0:i,r=e.key==="Home"?0:e.key==="End"?Hn.length-1:e.key==="ArrowLeft"?(s-1+Hn.length)%Hn.length:(s+1)%Hn.length;e.preventDefault(),this.selectTab(Hn[r].id),this.tabsEl.querySelector(`#tab-${Hn[r].id}`)?.focus()})}bindMargin(){this.bodyEl.addEventListener("click",e=>{const t=e.target,i=t.closest("[data-loop]");if(i){this.cb.onSelectLoop(i.dataset.loop);return}const s=t.closest("[data-corona]");if(s){this.cb.onSelectCorona?.(s.dataset.corona||null);return}if(t.closest("#sun-play")){this.cb.onToggleSunPlay();return}}),this.bodyEl.addEventListener("input",e=>{const t=e.target;t.id==="sun-scrub"&&this.cb.onScrubSun(Number(t.value))})}selectTab(e){this.tab=e,e!=="detail"&&(this.detailId=null);for(const i of this.tabsEl.querySelectorAll("[data-tab]")){const s=i.getAttribute("data-tab")===e;i.setAttribute("aria-selected",String(s)),i.setAttribute("tabindex",s?"0":"-1")}Hn.some(i=>i.id===e)?(this.bodyEl.setAttribute("aria-labelledby",`tab-${e}`),this.bodyEl.removeAttribute("aria-label")):(this.bodyEl.removeAttribute("aria-labelledby"),this.bodyEl.setAttribute("aria-label","Detail"));for(const[,i]of this.tiles)i.removeAttribute("aria-current");e==="checks"&&!this.checksRequested&&(this.checksRequested=!0,this.cb.onRunChecks()),e==="sun"&&!this.cycleRequested&&(this.cycleRequested=!0,this.cb.onLoadCycle()),e==="forecast"&&!this.forecastRequested&&(this.forecastRequested=!0,this.cb.onLoadForecast()),this.renderMargin()}briefing(e=new Date){return this.state?Vx({state:this.state,narration:Af(this.state.now,this.narration,e,this.state.aurora,this.state.cmes,this.state.spacecraft?.data??[],{snapshot:this.state.lanes.snapshot,aurora:this.state.lanes.aurora,cmes:this.state.lanes.cmes,nextAttempt:this.state.nextAttempt}),checks:this.checks,forecast:this.forecast,now:e,origin:`${location.origin}${location.pathname}`}):""}async copyBriefing(){const e=this.briefing();if(e)try{await navigator.clipboard.writeText(e),this.flash(this.copyEl,"Copied")}catch{this.flash(this.copyEl,"Blocked — use .md")}}downloadBriefing(){const e=this.briefing();if(!e)return;const t=URL.createObjectURL(new Blob([e],{type:"text/markdown"})),i=document.createElement("a");i.href=t,i.download=Hx(),i.click(),URL.revokeObjectURL(t),this.flash(this.downloadEl,"Saved")}flash(e,t){const i=e.dataset.label??e.textContent??"";e.dataset.label=i,e.textContent=t,window.setTimeout(()=>{e.textContent=e.dataset.label??i},1600)}showBody(e){this.openDetail(Ec+e)}showSubject(e){this.openDetail(e)}openDetail(e){this.tab="detail",this.detailId=e;for(const t of this.tabsEl.querySelectorAll("[data-tab]"))t.setAttribute("aria-selected","false");for(const[t,i]of this.tiles)i.tagName==="BUTTON"&&i.setAttribute("aria-current",String(t===e));this.renderMargin(),this.bodyEl.focus()}onBodyClick=e=>{const i=e.target?.closest?.("[data-subject]")?.dataset?.subject;i&&this.openDetail(i)};render(e){this.state=e;const t=new Date,i=e.now,s=i?.data??null;this.clockEl.textContent=`${t.toISOString().slice(0,10)} ${Ue(t.toISOString())} UTC`;const r={loading:e.lanes.snapshot,error:null,nextAttempt:null};for(const x of Va){const v=this.tiles.get(x.id),T=i?.parts?.[x.part];let w=ll({lane:r,received:!!e.now,meta:T,now:t});const C=w.state==="fresh"||w.state==="stale"?x.value(s):null;(w.state==="fresh"||w.state==="stale")&&C===Tt&&(w={state:"no-data",label:`no data · ${w.label}`,short:Tt,ageS:w.ageS}),v.setAttribute("data-state",w.state),v.querySelector("[data-v]").textContent=C!==null?C:w.state==="loading"?"…":w.state==="error"?"unavailable":Tt;const L=v.querySelector("[data-badge]"),E=no(T);L.textContent=E,L.className=`badge badge-${E.toLowerCase()}`;const b=w.state==="fresh"?x.detail?.(s)??"":"";v.querySelector("[data-time]").textContent=b||w.short;const D=C!==null?`${C} ${x.unit}`:w.state==="loading"?"loading":w.state==="error"?`unavailable (${w.label})`:"no data";v.setAttribute("title",`${x.label}: ${D} · ${w.label} · ${Kc(T)}`),v.setAttribute("aria-label",w.state==="fresh"||w.state==="stale"?`${x.label}: ${C} ${x.unit}, ${w.label}. Open detail.`:`${x.label}: ${w.state==="error"?`unavailable, ${w.label}`:w.state==="loading"?"loading":"no data"}. Open detail.`);const k=v.querySelector("[data-spark]"),V=w.state==="fresh"||w.state==="stale"?N6(x.id,e):null,X=V?`${V.series.time[V.series.time.length-1]??""}:${V.series.value.length}`:"";X!==this.sparkKeys.get(x.id)&&(this.sparkKeys.set(x.id,X),k.innerHTML=V?Fi(V.series,{...V.opts,width:108,height:17,label:`${x.label} trend`}):"")}const a=this.tiles.get("scales"),o=a.querySelector("[data-scales]"),l=s?.scales,c=ll({lane:r,received:!!e.now,meta:i?.parts?.scales,now:t});o.innerHTML=l?["R","S","G"].map(x=>{const v=l[x].scale??null;return`<span class="scale-chip scale-${v??"na"}" title="${x} — ${ae(l[x].text??"no data")}">${x}${v??"–"}</span>`}).join(""):c.state==="loading"?'<span class="tile-loading-dots">…</span>':Tt,a.querySelector("[data-time]").textContent=c.short,a.setAttribute("title",`NOAA scales · ${c.label}`),a.setAttribute("data-state",c.state);const h=this.tiles.get("aurora"),u=e.aurora,f=u?{tier:"modeled",source:u.source,source_url:u.source_url,model:u.model,data_time:u.data?.observation_time??null,latency_s:u.latency_s,stale_after_s:u.stale_after_s,...e.laneErrors.aurora?{error:e.laneErrors.aurora}:{}}:void 0,d=ll({lane:{loading:e.lanes.aurora,error:e.laneErrors.aurora,nextAttempt:e.nextAttempt},received:!!u?.data,meta:f,now:t});h.querySelector("[data-v]").textContent=u?.data?String(u.data.max_probability):d.state==="loading"?"…":d.state==="error"?"unavailable":Tt,h.querySelector("[data-time]").textContent=u?.data?`valid ${Ue(u.data.forecast_time)}`:d.short,h.setAttribute("data-state",d.state),h.setAttribute("title",`Aurora peak · ${d.label}`),h.setAttribute("aria-label",u?.data?`Aurora peak: ${u.data.max_probability} percent, ${d.label}. Open report.`:`Aurora peak: ${d.state==="loading"?"loading":d.state==="error"?`unavailable, ${d.label}`:"no data"}. Open report.`),this.setToggleState("aurora-toggle",d.state),this.setToggleState("cme-toggle",e.lanes.cmes&&e.cmes.length===0?"loading":e.laneErrors.cmes?"error":e.cmes.length===0?"no-data":"fresh"),this.setToggleState("wind-toggle",r.loading?"loading":s?.solar_wind?"fresh":i?.parts?.solar_wind?.error??e.lastError?"error":"no-data");const g=[...s?.alerts??[]].sort((x,v)=>(Ld[x.level]??9)-(Ld[v.level]??9)||Date.parse(v.issued)-Date.parse(x.issued)),_=g[0];this.headlineEl.hidden=!_,_&&(this.headlineEl.className=`headline-alert level-${_.level}`,this.headlineEl.innerHTML=`<span class="alert-level">${ae(Id[_.level]??"notice")}</span><span class="alert-text">${ae(_.text||_.product)}</span><span class="alert-time">${Ue(_.issued)} UTC</span>`,this.headlineEl.title=_.message.slice(0,400)),this.tickerEl.innerHTML='<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';const m=this.tickerEl.querySelector("[data-t]");m.innerHTML=g.length?g.slice(0,6).map(x=>`<span class="ticker-item level-${x.level}" title="${ae(x.message.slice(0,400))}"><span class="alert-level">${ae(Id[x.level]??"notice")}</span><span class="alert-text">${ae(x.text||x.product)}</span><span class="alert-time">${Ue(x.issued)}</span></span>`).join(""):`<span class="ticker-item level-none"><span class="alert-text">${s?"No watches, warnings or alerts outstanding.":e.lanes.snapshot?"Loading NOAA notices…":Tt}</span></span>`,this.fitTicker();const p=i?Object.values(i.parts).some(x=>x.mirrored):!1,S=i?Object.values(i.parts).some(x=>x.data_time):!1;this.statusEl.classList.toggle("is-error",!!e.lastError),this.statusEl.classList.toggle("is-mirror",!e.lastError&&p),this.statusEl.classList.toggle("is-degraded",!e.lastError&&!!i&&!S&&!p),e.lastError?this.statusEl.textContent=`Last refresh failed (${e.lastError}) at ${Ue(e.lastAttempt)} UTC. Showing last good data, ageing.`:i&&p?this.statusEl.textContent=`NOAA SWPC unreachable · reading Earth Star's mirror (stage B), captured ${Ue(i.fetched_at)} UTC · every value keeps NOAA's own timestamp`:i&&!S?this.statusEl.textContent=`NOAA SWPC unreachable — nothing has loaded yet. Retrying${e.nextAttempt?` at ${Ue(e.nextAttempt)} UTC`:""}.`:i?this.statusEl.textContent=`Live · NOAA SWPC · refreshed ${Ue(i.fetched_at)} UTC · DirectSource (stage A)`:this.statusEl.textContent="Fetching live data from NOAA SWPC…",this.renderMargin()}earthLights=!1;earthCoast=!1;setEarthLights(e){this.earthLights=e}setEarthCoast(e){this.earthCoast=e}setToggleState(e,t){document.getElementById(e)?.setAttribute("data-state",t)}setStats(e){const t=e.pixelRatio<e.maxPixelRatio,i=t?`${e.pixelRatio}/${e.maxPixelRatio}/${Math.round(e.fps)}`:"";i!==this.perfKey&&(this.perfKey=i,this.perfEl.hidden=!t,t&&(this.perfEl.textContent=`Rendering at ${e.pixelRatio}x rather than ${e.maxPixelRatio}x (${e.megapixels.toFixed(1)} MP) to hold the frame rate — ${Math.round(e.fps)} fps. Geometry and data are unaffected.`))}SECTION_KEY="viewer.sections";loadSectionState(){try{const e=localStorage.getItem(this.SECTION_KEY);if(!e)return;const t=JSON.parse(e);for(const[i,s]of Object.entries(t))this.sectionState.set(i,!!s)}catch{}}onSectionToggle=e=>{const t=e.target,i=t.dataset?.sect;if(i){this.sectionState.set(i,t.open);try{localStorage.setItem(this.SECTION_KEY,JSON.stringify(Object.fromEntries(this.sectionState)))}catch{}}};remembered=e=>this.sectionState.get(e);renderMargin(){const e=this.state;if(!e)return;const t=new Date;switch(this.tab){case"report":this.bodyEl.innerHTML=vx(e,this.narration,t);break;case"forecast":this.bodyEl.innerHTML=yx(this.forecast,this.forecastLoading,e?.cmes??[],this.remembered,this.forecastError);break;case"sun":this.bodyEl.innerHTML=Px(this.sun,Us,this.cycle,this.cycleLoading,this.cycleError),this.placeSunFrame();break;case"sources":this.bodyEl.innerHTML=Ex(e,this.checks,this.remembered,{surface:this.narration.earthSurface??"vector",lights:this.earthLights,coast:this.earthCoast});break;case"checks":this.bodyEl.innerHTML=Ax(this.checks,this.checksRunning);break;case"detail":this.bodyEl.innerHTML=this.detailId?kx(this.detailId,e,t):"";break}}fillSlot(e,t){const i=document.getElementById(e),s=i?.dataset.frame;if(!i||!s)return;const r=this.images.acquire(s);r.alt=i.dataset.alt??"",r.className="sun-img",r.parentElement!==i&&i.replaceChildren(r),r.complete&&r.naturalWidth>0?t(r):r.addEventListener("load",()=>t(r),{once:!0})}placeSunFrame(){this.fillSlot("sun-slot",t=>this.cb.onSunFrame?.(t)),this.fillSlot("corona-slot",t=>this.cb.onCoronaFrame?.(t));const e=this.sun.loop?.frames;if(e){const t=this.sun.frameIndex;this.images.warm([e[(t+1)%e.length].url,e[(t+2)%e.length].url])}}updateSunFrame(){const e=document.getElementById("sun-slot"),t=this.sun.loop?.frames[this.sun.frameIndex];if(!e||!t){this.renderMargin();return}e.dataset.frame=t.url,this.placeSunFrame();const i=this.bodyEl.querySelector(".sun-stamp");if(i){const r=Math.round((Date.now()-Date.parse(t.time))/6e4);i.innerHTML=`<span>${Ue(t.time)} UTC</span><span>${r} min ago</span>`}const s=document.getElementById("sun-scrub");s&&document.activeElement!==s&&(s.value=String(this.sun.frameIndex))}fitTicker(){if(!this.fittingTicker){this.fittingTicker=!0;try{const e=this.tickerEl,t=e.querySelector("[data-t]");if(!t)return;const i=[...t.querySelectorAll(".ticker-item")];for(const a of i)a.hidden=!1;if(e.querySelector(".ticker-more")?.remove(),e.classList.toggle("is-expanded",this.tickerExpanded),this.tickerExpanded){i.length>1&&t.append(this.tickerMoreButton("show fewer",!0));return}if(e.scrollHeight<=e.clientHeight+1)return;const s=this.tickerMoreButton("",!1);t.append(s);let r=0;for(let a=i.length-1;a>=1&&(i[a].hidden=!0,r++,s.textContent=`+${r} more`,!(e.scrollHeight<=e.clientHeight+1));a--);s.textContent=`+${r} more`}finally{this.fittingTicker=!1}}}tickerMoreButton(e,t){const i=document.createElement("button");return i.className="ticker-more",i.type="button",i.textContent=e,i.setAttribute("aria-expanded",String(t)),i.addEventListener("click",()=>{this.tickerExpanded=!this.tickerExpanded,this.fitTicker()}),i}}class $x{constructor(e,t=6e4,i=5*6e4){this.source=e,this.intervalMs=t,this.auroraIntervalMs=i}source;intervalMs;auroraIntervalMs;state={now:null,series:null,kpSeries:null,xraySeries:null,protonSeries:null,electronSeries:null,geosyncSeries:null,dstSeries:null,aurora:null,regions:null,spacecraft:null,cmes:[],lastAttempt:null,lastError:null,loading:!0,lanes:{snapshot:!0,aurora:!0,regions:!0,cmes:!0,spacecraft:!0},laneErrors:{aurora:null,regions:null,cmes:null,spacecraft:null},nextAttempt:null};listeners=new Set;timer=null;inflight=null;auroraTimer=null;get(){return this.state}subscribe(e){return this.listeners.add(e),e(this.state),()=>this.listeners.delete(e)}emit(e){this.state={...this.state,...e};for(const t of this.listeners)t(this.state)}nextAttemptIso(){return new Date(Date.now()+this.intervalMs).toISOString()}async refresh(){this.inflight?.abort();const e=new AbortController;this.inflight=e,this.emit({loading:!0,lanes:{...this.state.lanes,snapshot:!0}});try{const{now:t,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,dstSeries:c}=await this.source.fetchSnapshot(e.signal);this.emit({now:t,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,dstSeries:c,lastAttempt:new Date().toISOString(),lastError:null,loading:!1,lanes:{...this.state.lanes,snapshot:!1},nextAttempt:this.nextAttemptIso()})}catch(t){if(e.signal.aborted)return;this.emit({lastAttempt:new Date().toISOString(),lastError:t instanceof Error?t.message:String(t),loading:!1,lanes:{...this.state.lanes,snapshot:!1},nextAttempt:this.nextAttemptIso()})}finally{this.inflight===e&&(this.inflight=null)}}async slow(e,t,i){this.emit({lanes:{...this.state.lanes,[e]:!0}});try{const s=await i(),r={lanes:{...this.state.lanes,[e]:!1},laneErrors:{...this.state.laneErrors,[e]:null}};r[t]=s,this.emit(r)}catch(s){this.emit({lanes:{...this.state.lanes,[e]:!1},laneErrors:{...this.state.laneErrors,[e]:s instanceof Error?s.message:String(s)}})}}async refreshAurora(){await this.slow("aurora","aurora",()=>this.source.fetchAurora()),await this.slow("regions","regions",()=>this.source.fetchRegions()),await this.slow("cmes","cmes",async()=>await i6()),await this.slow("spacecraft","spacecraft",()=>this.source.fetchEphemerides())}lane(e){return e==="snapshot"?{loading:this.state.lanes.snapshot,error:this.state.lastError,nextAttempt:this.state.nextAttempt}:{loading:this.state.lanes[e],error:this.state.laneErrors[e],nextAttempt:this.state.nextAttempt}}start(){this.timer===null&&(this.refresh(),this.refreshAurora(),this.timer=window.setInterval(()=>{this.refresh()},this.intervalMs),this.auroraTimer=window.setInterval(()=>{this.refreshAurora()},this.auroraIntervalMs),document.addEventListener("visibilitychange",this.onVisible))}stop(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.auroraTimer!==null&&(clearInterval(this.auroraTimer),this.auroraTimer=null),document.removeEventListener("visibilitychange",this.onVisible),this.inflight?.abort()}onVisible=()=>{document.visibilityState==="visible"&&(this.refresh(),this.refreshAurora())}}const fl={protons:`${ft}/json/goes/primary/integral-protons-6-hour.json`,electrons:`${ft}/json/goes/primary/integral-electrons-6-hour.json`},Wx=[[5,1e5,"Extreme"],[4,1e4,"Severe"],[3,1e3,"Strong"],[2,100,"Moderate"],[1,10,"Minor"]];function Xx(n){if(n===null||!Number.isFinite(n))return null;for(const[e,t,i]of Wx)if(n>=t)return{scale:e,text:i};return{scale:0,text:"None"}}function pl(n,e){if(!Array.isArray(n))return null;let t=null,i=-1/0;for(const s of n){if(String(s.energy)!==e)continue;const r=Date.parse(dt(s.time_tag)??"");Number.isFinite(r)&&r>i&&(i=r,t=s)}return t}function Nd(n,e){if(!Array.isArray(n))return{time:[],value:[]};const t=n.filter(i=>String(i.energy)===e).map(i=>({t:dt(i.time_tag),v:Pe(i.flux)})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:t.map(i=>i.t),value:t.map(i=>i.v)}}function jx(n,e){const t=pl(n,">=10 MeV"),i=pl(n,">=100 MeV"),s=pl(e,">=2 MeV");if(!t&&!s)return null;const r=[t,s].map(l=>dt(l?.time_tag)).filter(l=>!!l);if(r.length===0)return null;const a=r.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),o=Pe(t?.flux);return{time:a,proton10:o,proton100:Pe(i?.flux),electron2:Pe(s?.flux),satellite:Pe(t?.satellite??s?.satellite),s:Xx(o)}}const ml=`${ft}/products/geospace/propagated-solar-wind-1-hour.json`;function qx(n,e=new Date){if(!Array.isArray(n)||n.length<2)return null;const t=n[0];if(!Array.isArray(t))return null;const i=m=>t.indexOf(m),s=i("time_tag"),r=i("propagated_time_tag");if(s<0||r<0)return null;const a=i("speed"),o=i("density"),l=i("temperature"),c=i("bz"),h=i("bt"),u=[];for(let m=1;m<n.length;m++){const p=n[m];if(!Array.isArray(p))continue;const S=dt(p[s]),x=dt(p[r]);!S||!x||u.push({observedAt:S,arrivesAt:x,speed:Pe(p[a]),density:Pe(p[o]),temperature:Pe(p[l]),bz:Pe(p[c]),bt:Pe(p[h])})}if(u.length===0)return null;u.sort((m,p)=>Date.parse(m.arrivesAt)-Date.parse(p.arrivesAt));const f=e.getTime();let d=null;for(const m of u)Date.parse(m.arrivesAt)<=f&&(d=m);d??=u[0];const g=u[u.length-1],_=(Date.parse(g.arrivesAt)-f)/6e4;return{samples:u,arrivingNow:d,leadMinutes:Number.isFinite(_)?_:null}}const Tc=`${ft}/json/geospace/geospace_dst_1_hour.json`;function Ud(n){return n===null||!Number.isFinite(n)?null:n>-30?"quiet":n>-50?"weak":n>-100?"moderate":n>-200?"intense":n>-350?"severe":"great"}const Yx={quiet:"quiet",weak:"weak storm",moderate:"moderate storm",intense:"intense storm",severe:"severe storm",great:"great storm"};function Cf(n){if(!Array.isArray(n))return[];const e=[];for(const t of n){const i=dt(typeof t.time_tag=="string"?t.time_tag:null),s=Pe(t.dst);i===null||s===null||e.push({time:i,dst:s})}return e.sort((t,i)=>t.time.localeCompare(i.time)),e}function Pf(n,e=new Date){const t=Cf(n);if(t.length===0)return{now:null,ahead:[],minimum:null};const i=e.getTime();let s=null;const r=[];for(const o of t)Date.parse(o.time)<=i?s=o:r.push(o);const a=t.reduce((o,l)=>o===null||l.dst<o.dst?l:o,null);return{now:s,ahead:r,minimum:a}}function Kx(n,e=new Date){const t=e.getTime(),i=Cf(n).filter(s=>Date.parse(s.time)<=t);return{time:i.map(s=>s.time),value:i.map(s=>s.dst)}}const Fd=`${ft}/json/goes/primary/magnetometers-6-hour.json`,Ac=6.6;function Df(n){const e=za[nn(1,0)],t=za[nn(1,1)],i=Y0[nn(1,1)];return Math.sqrt(e*e+t*t+i*i)/(n*n*n)}function Zx(n){if(!Array.isArray(n))return null;let e=null,t=-1/0;for(const s of n){const r=Date.parse(dt(s.time_tag)??"");Number.isFinite(r)&&r>t&&(t=r,e=s)}const i=dt(e?.time_tag);return!e||!i?null:{time:i,satellite:Pe(e.satellite),hp:Pe(e.Hp),he:Pe(e.He),hn:Pe(e.Hn),total:Pe(e.total),arcjet:e.arcjet_flag===!0}}function Jx(n,e="total"){if(!Array.isArray(n))return{time:[],value:[]};const t=n.map(i=>({t:dt(i.time_tag),v:Pe(i[e])})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:t.map(i=>i.t),value:t.map(i=>i.v)}}const qt="NOAA SWPC",Ht={solar_wind:1200,kp:1200,xray:1200,scales:360*60,alerts:10080*60,magnetopause:1200,particles:1800,propagated:1800,geosync:1800,dst:1200,aurora:3600,regions:2160*60,spacecraft:10800};function Ii(n,e){if(!e)return null;const t=(Date.parse(n)-Date.parse(e))/1e3;return Number.isFinite(t)?Math.round(t):null}function Cn(n,e,t,i,s,r,a="measured",o=null){return{tier:a,source:i,source_url:s,model:o,data_time:e,latency_s:Ii(n,e),stale_after_s:t,...r?{error:r}:{},...H6(s)?{mirrored:!0}:{}}}class Lf{name="DirectSource (stage A · browser → NOAA SWPC)";async fetchNow(e){return(await this.fetchSnapshot(e)).now}async fetchSnapshot(e){const[t,i,s,r,a,o,l,c,h,u,f]=await Promise.all([Ct(gt.mag,e),Ct(gt.wind,e),Ct(gt.kp1m,e),Ct(gt.xrays6h,e),Ct(gt.scales,e),Ct(gt.alerts,e),Ct(fl.protons,e),Ct(fl.electrons,e),Ct(ml,e),Ct(Fd,e),Ct(Tc,e)]),d=new Date().toISOString(),g=t.json||i.json?b6(t.json,i.json):null,_=s.json?S6(s.json):null,m=r.json?w6(r.json):null,p=a.json?E6(a.json):null,S=o.json?T6(o.json):[],x=l.json||c.json?jx(l.json,c.json):null,v=h.json?qx(h.json):null,T=u.json?Zx(u.json):null,w=f.json?Pf(f.json,new Date(d)):null,C=v?.arrivingNow??null,L=to(C?.bz??g?.bz_gsm??null,C?.density??g?.density??null,C?.speed??g?.speed??null),E=t.error??i.error,b={solar_wind:Cn(d,g?.time??null,Ht.solar_wind,`${qt} · real-time solar wind (L1)`,gt.mag,E),kp:Cn(d,_?.time??null,Ht.kp,`${qt} · planetary K (estimated)`,gt.kp1m,s.error),xray:Cn(d,m?.time??null,Ht.xray,`${qt} · GOES XRS (0.1–0.8 nm)`,gt.xrays6h,r.error),scales:Cn(d,p?.time??null,Ht.scales,`${qt} · NOAA scales`,gt.scales,a.error,"modeled",{name:"NOAA G/S/R scales"}),alerts:Cn(d,S[0]?.issued??null,Ht.alerts,`${qt} · alerts, watches & warnings`,gt.alerts,o.error),magnetopause:Cn(d,C?.arrivesAt??g?.time??null,Ht.magnetopause,C?"Earth Star (from SWPC wind propagated to Earth)":"Earth Star (from SWPC solar wind at L1)",C?ml:gt.mag,E,"modeled",{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}),particles:Cn(d,x?.time??null,Ht.particles,`${qt} · GOES particle detectors`,fl.protons,l.error??c.error),geosync:Cn(d,T?.time??null,Ht.geosync,`${qt} · GOES magnetometer at geostationary orbit`,Fd,u.error),propagated:Cn(d,C?.arrivesAt??null,Ht.propagated,`${qt} · solar wind propagated to the bow shock nose`,ml,h.error,"modeled",{name:"NOAA SWPC propagation"}),dst:Cn(d,w?.now?.time??null,Ht.dst,`${qt} · Dst from the Geospace model`,Tc,f.error,"modeled",{name:"NOAA Geospace (Univ. Michigan BATS-R-US/RCM)"})},D=w?.ahead[w.ahead.length-1]??null,k={solar_wind:g,kp:_,xray:m,scales:p,alerts:S,dst:w?.now?{time:w.now.time,value_nt:w.now.dst,level:Ud(w.now.dst)===null?null:Yx[Ud(w.now.dst)],lead_minutes:D===null?null:Math.round((Date.parse(D.time)-Date.parse(w.now.time))/6e4),min_nt:w.minimum?.dst??null,min_time:w.minimum?.time??null}:null,geosync:T?{time:T.time,satellite:T.satellite,hp_nt:T.hp,total_nt:T.total,deficit_nt:T.total===null?null:Df(Ac)-T.total,arcjet:T.arcjet}:null,particles:x?{time:x.time,proton_10mev:x.proton10,proton_100mev:x.proton100,electron_2mev:x.electron2,satellite:x.satellite,s_scale:x.s?.scale??null,s_text:x.s?.text??null}:null,propagated:C?{observed_at:C.observedAt,arrives_at:C.arrivesAt,speed:C.speed,density:C.density,bz:C.bz,bt:C.bt,lead_minutes:v?.leadMinutes??null}:null,magnetopause:L?{standoff_re:L.r0Re,alpha:L.alpha,bow_shock_re:L.bowShockRe,dyn_pressure_npa:L.dynPressureNPa,model:"Shue1998"}:null},V=Object.values(b).map(te=>te.data_time).filter(te=>!!te).map(te=>Date.parse(te)).filter(Number.isFinite),X=V.length?new Date(Math.min(...V)).toISOString():d,Y={source:qt,source_url:"https://services.swpc.noaa.gov/",tier:"mixed",model:null,fetched_at:d,data_time:X,latency_s:Ii(d,X)??0,stale_after_s:Ht.solar_wind,units:{bz_gsm:"nT",by_gsm:"nT",bx_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K",estimated_kp:"Kp",flux_long:"W/m^2",flux_short:"W/m^2",standoff_re:"Re",bow_shock_re:"Re",dyn_pressure_npa:"nPa",proton_10mev:"pfu",proton_100mev:"pfu",electron_2mev:"pfu",hp_nt:"nT",total_nt:"nT",deficit_nt:"nT"},data:k,parts:b},j=Md(t.json,i.json),J=j.time[j.time.length-1]??d,z={source:`${qt} · real-time solar wind (L1)`,source_url:gt.mag,tier:"measured",model:null,fetched_at:d,data_time:J,latency_s:Ii(d,J)??0,stale_after_s:Ht.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:j};return{now:Y,series:z,kpSeries:_s(C6(s.json),120),xraySeries:_s(P6(r.json),120),protonSeries:_s(Nd(l.json,">=10 MeV"),120),geosyncSeries:_s(Jx(u.json,"total"),120),dstSeries:Kx(f.json,new Date(d)),electronSeries:_s(Nd(c.json,">=2 MeV"),120)}}async fetchAurora(e){const t=await Ct(gt.aurora,e);if(!t.json)throw new Error(t.error??"unreachable");const i=new Date().toISOString(),s=A6(t.json),r=s?.observation_time??i;return{source:`${qt} · OVATION Prime aurora forecast`,source_url:gt.aurora,tier:"modeled",model:{name:"OVATION Prime (NOAA SWPC)"},fetched_at:i,data_time:r,latency_s:Ii(i,r)??0,stale_after_s:Ht.aurora,units:{values:"% probability of visible aurora"},data:s}}async fetchRegions(e){const t=await Ct(gt.regions,e);if(!t.json)throw new Error(t.error??"unreachable");const i=new Date().toISOString(),s=D6(t.json),r=s[0]?.observed??i;return{source:`${qt} · solar region summary`,source_url:gt.regions,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:Ii(i,r)??0,stale_after_s:Ht.regions,units:{lat:"deg",lon:"deg from central meridian",area:"millionths of hemisphere"},data:s}}async fetchEphemerides(e){const t=await Ct(wc,e);if(!t.json)throw new Error(t.error??"unreachable");const i=new Date().toISOString(),s=Sf(t.json),r=s.reduce((a,o)=>a===null||o.time>a?o.time:a,null)??i;return{source:`${qt} · RTSW ephemerides`,source_url:wc,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:Ii(i,r)??0,stale_after_s:Ht.spacecraft,units:{gse:"km",distanceRe:"Earth radii",offAxisDeg:"deg"},data:s}}async fetchSolarWindSeries(e){const[t,i]=await Promise.all([Ct(gt.mag,e),Ct(gt.wind,e)]),s=new Date().toISOString(),r=Md(t.json,i.json),a=r.time[r.time.length-1]??s;return{source:`${qt} · real-time solar wind (L1)`,source_url:gt.mag,tier:"measured",model:null,fetched_at:s,data_time:a,latency_s:Ii(s,a)??0,stale_after_s:Ht.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:r}}}class Qx{mq=window.matchMedia("(prefers-reduced-motion: reduce)");listeners=new Set;override=null;constructor(){this.mq.addEventListener("change",()=>this.emit())}get reduced(){return this.override??this.mq.matches}setOverride(e){this.override=e,this.emit()}subscribe(e){return this.listeners.add(e),e(this.reduced),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e(this.reduced)}}const ey=[["1–5","Deck, Sunward, Profile, Overhead, System views"],["s","Toggle Globe / True scale"],["m","Toggle reduced motion"],["f","Toggle the magnetic shield"],["a","Toggle the aurora overlay"],["w","Toggle the solar wind stream"],["c","Toggle CME cones"],["r","Refresh data now"],["?","This help"]];function ty(n){const e=t=>{const i=t.target;if(!(t.metaKey||t.ctrlKey||t.altKey)&&!(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))){switch(t.key){case"1":case"2":case"3":case"4":case"5":n.view(Number(t.key)-1);break;case"s":case"S":n.toggleScale();break;case"m":case"M":n.toggleMotion();break;case"f":case"F":n.toggleShield();break;case"a":case"A":n.toggleAurora();break;case"w":case"W":n.toggleWind();break;case"c":case"C":n.toggleCmes();break;case"r":case"R":n.refresh();break;case"?":Kn(ey.map(([s,r])=>`${s}: ${r}`).join(". "));break;default:return}t.preventDefault()}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}function Kn(n){const e=document.getElementById("announce");e&&(e.textContent=n)}const ny=360/25.38;function iy(n,e,t,i){const s=n*Math.PI/180,r=e*Math.PI/180,a=i.clone().addScaledVector(t,-i.dot(t)).normalize(),o=new P().crossVectors(t,a);return new P().addScaledVector(a,Math.cos(s)*Math.cos(r)).addScaledVector(o,-Math.cos(s)*Math.sin(r)).addScaledVector(t,Math.sin(s))}function sy(n,e,t,i){const s=e.clone().addScaledVector(t,-e.dot(t)).normalize(),r=new P().crossVectors(s,t).normalize();return{u:i.centre.u+n.dot(r)*i.radius,v:i.centre.v+n.dot(s)*i.radius}}function ry(n,e,t,i,s,r,a){const o=-(a/24)*ny,l=(T,w)=>{const C=Math.round(T*e),L=Math.round((1-w)*e);if(C<1||L<1||C>=e-1||L>=e-1)return null;let E=0;for(let b=-1;b<=1;b++)for(let D=-1;D<=1;D++)E+=n[(L+b)*e+C+D];return E/9},c=T=>{let w=0,C=0;for(const L of t){const E=(L.lon+o)*(T?-1:1),b=iy(L.lat,E,i,s);if(b.dot(s)<.5)continue;const D=sy(b,i,s,r),k=l(D.u,D.v);k!==null&&(w+=k,C++)}return{sum:w,n:C}},h=c(!1),u=c(!0),f=h.n;if(f<2||u.n<2)return null;const d=h.sum;let g=0,_=0;const m=r.centre.u*e,p=(1-r.centre.v)*e,S=r.radius*e*.85;for(let T=Math.max(0,Math.floor(p-S));T<Math.min(e,Math.ceil(p+S));T++)for(let w=Math.max(0,Math.floor(m-S));w<Math.min(e,Math.ceil(m+S));w++)Math.hypot(w-m,T-p)>S||(g+=n[T*e+w],_++);if(_===0)return null;const x=d/f,v=g/_;return v<=0?null:{tested:f,atRegions:x,acrossDisk:v,ratio:x/v,mirroredRatio:u.sum/u.n/v}}const Ci=async(n,e)=>(await fetch(n,{cache:"no-store",signal:e})).json();function Od(n,e,t,i){const s=Math.PI/180,r=(i-e)*s,a=Math.sin(r)*Math.cos(t*s),o=Math.cos(n*s)*Math.sin(t*s)-Math.sin(n*s)*Math.cos(t*s)*Math.cos(r);return(Math.atan2(a,o)*180/Math.PI+360)%360}function ba(n,e,t){return n===null||e===null||!Number.isFinite(n)||!Number.isFinite(e)?!1:Math.abs(n-e)<=t}function ay(n,e){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d",{willReadFrequently:!0});if(!i)return null;try{i.drawImage(n,0,0,e,e);const s=i.getImageData(0,0,e,e).data,r=new Float32Array(e*e);for(let a=0;a<e*e;a++)r[a]=.299*s[a*4]+.587*s[a*4+1]+.114*s[a*4+2];return r}catch{return null}}async function oy(n,e){const t=[],i=new Lf,[s,r,a,o,l,c,h,u,f]=await Promise.all([i.fetchNow(n),Ci(gt.summaryMag,n),Ci(gt.summarySpeed,n),Ci(gt.xrayFlares,n),i.fetchSolarWindSeries(n),i.fetchAurora(n),Ci(wc,n),Ci(Tc,n),bf(n)]),d=s.data,g=r[0],_=a[0],m=(B,W)=>{const se=String(B??"").replace(" ","T").replace(/Z?$/,"Z"),O=Date.parse(se);if(!Number.isFinite(O))return null;const ce=l.data.time.indexOf(new Date(O).toISOString());return ce<0?null:l.data[W][ce]??null},p=Ue(String(g?.time_tag??""));t.push({name:"IMF Bz (GSM), nT",ours:m(g?.time_tag,"bz_gsm")?.toFixed(2)??"no data",theirs:String(g?.bz_gsm??"no data"),ok:ba(m(g?.time_tag,"bz_gsm"),Number(g?.bz_gsm),.55),note:`both at ${p} UTC · tol ±0.55 (their integer rounding)`}),t.push({name:"IMF total Bt, nT",ours:m(g?.time_tag,"bt")?.toFixed(2)??"no data",theirs:String(g?.bt??"no data"),ok:ba(m(g?.time_tag,"bt"),Number(g?.bt),.55),note:`both at ${p} UTC · tol ±0.55`}),t.push({name:"Solar wind speed, km/s",ours:m(_?.time_tag,"speed")?.toFixed(1)??"no data",theirs:String(_?.proton_speed??"no data"),ok:ba(m(_?.time_tag,"speed"),Number(_?.proton_speed),1.5),note:`both at ${Ue(String(_?.time_tag??""))} UTC · tol ±1.5`});const S=M6(o)?.class??"",x=d.xray?.class??vf(d.xray?.flux_long??null);t.push({name:"X-ray class",ours:x??"no data",theirs:S||"no data",ok:!!x&&!!S&&x[0]===S[0]&&Math.abs(parseFloat(x.slice(1))-parseFloat(S.slice(1)))<=.35,note:`our thresholds on our parsed flux (${d.xray?.flux_long?d.xray.flux_long.toExponential(2):"—"} W/m²) vs SWPC's published label. This row caught current_int_xrlong being read as a flux.`});const v=await Ci(gt.kp1m,n),T=d.kp?.time??null,w=T?v.find(B=>`${String(B.time_tag)}Z`===T.replace(".000Z","Z")||Date.parse(`${String(B.time_tag)}Z`)===Date.parse(T)):void 0;t.push({name:"Planetary Kp (estimated)",ours:d.kp?.estimated_kp?.toFixed(2)??"no data",theirs:w?String(w.estimated_kp):"minute not in feed",ok:!!w&&ba(d.kp?.estimated_kp??null,Number(w.estimated_kp),.001),note:`both at ${Ue(T)} UTC · exact match required. Checks our newest-record selection against the same minute upstream.`});const C=await Ci(gt.mag,n),L=C.reduce((B,W)=>Date.parse(`${String(W.time_tag)}Z`)>Date.parse(`${String(B.time_tag)}Z`)?W:B,C[0]),E=[...new Set(C.filter(B=>B.active===!0).map(B=>String(B.source)))];t.push({name:"L1 spacecraft selected",ours:d.solar_wind?.spacecraft??"no data",theirs:E.join(", ")||"none flagged active",ok:!!d.solar_wind?.spacecraft&&E.includes(d.solar_wind.spacecraft),note:`the feed interleaves several spacecraft; newest of ANY source right now is "${String(L.source)}". Taking that instead is the bug this row guards.`});const b=d.geosync,D=d.magnetopause?.standoff_re??null;if(b&&b.total_nt!==null&&D!==null){const B=Df(Ac),W=D>Ac,se=b.total_nt>B*.25;t.push({name:"Shield model vs GOES at 6.6 Rₑ",ours:`standoff ${D.toFixed(1)} Rₑ → ${W?"inside":"OUTSIDE"}`,theirs:`${b.total_nt.toFixed(0)} nT → ${se?"inside":"outside"}`,ok:W===se,note:`Dipole at 6.6 Rₑ is ${B.toFixed(0)} nT; GOES-${b.satellite??"?"} reads ${b.total_nt.toFixed(0)} nT, a deficit of ${(B-b.total_nt).toFixed(0)} nT from the ring and magnetopause currents. The check is the agreement of the two verdicts, not the numbers — Shue's boundary and this magnetometer are independent.${b.arcjet?" NOTE: thruster firing, reading suspect.":""}`})}if(c.data){const B=c.data.grid,W=ef(new Date);let se=0,O=0,ce=0,Be=0;for(let Ee=0;Ee<B.width;Ee++)for(let A=45;A<=89;A++){const Le=R6(B,A,Ee);if(Le<=0)continue;const me=A*Math.PI/180,fe=Ee*Math.PI/180;se+=Le*Math.cos(me)*Math.cos(fe),O+=Le*Math.cos(me)*Math.sin(fe),ce+=Le*Math.sin(me),Be+=Le}if(Be>0){const Ee=Math.sqrt(se*se+O*O+ce*ce),A=Math.asin(ce/Ee)*180/Math.PI,Le=Math.atan2(O,se)*180/Math.PI,me=X5(A,Le,W.lat,W.lon),fe=Oa(new Date),ge=(fe.lon+360)%360-180,Ke=Od(W.lat,W.lon,A,Le),ve=Od(W.lat,W.lon,-fe.lat,ge),Oe=Math.abs((Ke-ve+540)%360-180);t.push({name:"Aurora oval displaced toward magnetic midnight",ours:`centroid bears ${Ke.toFixed(0)}° from the pole`,theirs:`midnight bears ${ve.toFixed(0)}°`,ok:Oe<90&&me<25,note:`${Oe.toFixed(0)}° apart in bearing — the nightside half — with the centroid ${me.toFixed(1)}° from the pole. NOAA's OVATION grid, our IGRF-14 dipole axis and the sub-solar point are three independent computations; a transposed or mirrored grid puts the oval on the dayside and fails here.`})}}else t.push({name:"Aurora oval displaced toward magnetic midnight",ours:"no data",theirs:"—",ok:!1,inconclusive:!0,note:"OVATION grid did not load, so orientation could not be checked. This is the check having no evidence, not the oval being in the wrong place."});const k=Sf(h),V=k.find(B=>B.active)?.source??null,X=d.solar_wind?.spacecraft??null,Y=k.find(B=>B.active);t.push({name:"Operational L1 spacecraft",ours:X??"no data",theirs:V??"no data",ok:!!X&&X===V,note:Y?`wind/mag feed vs ephemeris feed · ${Y.distanceRe.toFixed(0)} Rₑ upstream, ${Y.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line`:"wind/mag feed vs ephemeris feed"});const j=Pf(u,new Date),J=j.now?.dst??null,z=d.kp?.estimated_kp??null;if(J!==null&&z!==null){const B=J<=-100?2:J<=-30?1:0,W=z>=6?2:z>=4?1:0,se=Math.abs(B-W),O=["quiet","disturbed","severe"];t.push({name:"Modelled Dst vs measured Kp",ours:`Dst ${J.toFixed(0)} nT → ${O[B]}`,theirs:`Kp ${z.toFixed(2)} → ${O[W]}`,ok:se===0,inconclusive:se===1,note:se>=2?"Two bands apart, which the difference between the indices cannot explain. A model driven by the L1 wind against a measurement from ground magnetometers; they share no input, so one of them is wrong.":se===1?`One band apart, which is what a storm beginning looks like: the ring current responds before the mid-latitude range does, so Dst crosses its threshold first. Not a contradiction, and not evidence of agreement either. ${j.ahead.length} of the Dst feed's samples lie in the future and are excluded from "now".`:`A model driven by the L1 wind against a measurement from ground magnetometers — they share no input. Bands are Dst −30 and −100 nT, Kp 4 and 6. ${j.ahead.length} of the feed's samples lie in the future and are excluded from "now".`})}const te=d.propagated;if(f&&te?.speed!=null&&te.arrives_at){const B=j6(f,new Date(te.arrives_at));if(B?.speed!=null){const W=B.speed-te.speed,se=W/te.speed*100;t.push({name:"WSA-Enlil hindcast vs measured wind",ours:`measured ${te.speed.toFixed(0)} km/s`,theirs:`Enlil ${B.speed.toFixed(0)} km/s`,ok:Math.abs(W)<=200,note:`${W>=0?"+":""}${W.toFixed(0)} km/s (${se.toFixed(0)}%) at ${Ue(te.arrives_at)} UTC. Enlil is driven by solar magnetograms and CME cone fits and never sees L1, so this is a model against a measurement of the same quantity. The tolerance is ±200 km/s: it catches a misread column or a time misalignment, not ordinary forecast error.`})}}if(e){const W=ay(e.image,384),se=(await i.fetchRegions(n)).data,O=se[0]?.observed,ce=O?(Date.now()-Date.parse(O))/36e5:0,Be=W?ry(W,384,se,e.north,e.earthDir,e.calibration,ce):null;if(Be){const Ee=Be.mirroredRatio>0?Be.ratio/Be.mirroredRatio:0,A=Math.abs(Ee-1)>=.06;t.push({name:"Solar imagery lines up with the region list",ours:`${Be.ratio.toFixed(2)}x disk mean at ${Be.tested} reported positions`,theirs:`${Be.mirroredRatio.toFixed(2)}x mirrored east–west`,ok:A&&Ee>1,inconclusive:!A,note:A?`The imagery and the region list come from different pipelines, so this tests our projection — the rotation axis, the measured disk centre and radius, and the longitude convention — rather than either of theirs. Longitudes rotated ${ce.toFixed(0)} h forward at the Carrington rate.`:`Too close to call today: the published positions and their mirror image score within ${(Math.abs(Ee-1)*100).toFixed(0)}% of each other, so the picture cannot settle the projection. That happens when the regions are small — ${Be.tested} tested here — against a bright chromosphere. Reporting a defect on this evidence would be crying wolf.`})}}const Q=to(d.propagated?.bz??d.solar_wind?.bz_gsm??null,d.propagated?.density??d.solar_wind?.density??null,d.propagated?.speed??d.solar_wind?.speed??null),be=z===null?null:rf(z),$e=z===null?null:lf(new Date,z),Ze=$e?cv(new Date,$e):null;if(Ze===null||Q===null||be===null||z===null)t.push({name:"Dayside standoff: T89 (Kp) vs Shue 1998 (wind)",ours:Ze===null?"no Kp":`${Ze.toFixed(1)} Rₑ`,theirs:Q===null?"no wind":`${Q.r0Re.toFixed(1)} Rₑ`,ok:!1,inconclusive:!0,note:"One of the two drivers is missing, so there is nothing to compare. Absent evidence, not disagreement — with no Kp the shield is IGRF alone, and with no wind there is no modelled boundary to draw."});else{const B=Ze-Q.r0Re,W=3,se=fd(z)>.25&&fd(z)<.75;t.push({name:"Dayside standoff: T89 (Kp) vs Shue 1998 (wind)",ours:`${Ze.toFixed(1)} Rₑ at Kp ${z.toFixed(1)} (${af(be)})`,theirs:`${Q.r0Re.toFixed(1)} Rₑ from ${Q.dynPressureNPa.toFixed(2)} nPa`,ok:Math.abs(B)<=W,inconclusive:se&&Math.abs(B)>W,note:`${B>=0?"+":""}${B.toFixed(2)} Rₑ. Ours is the sunward reach of the last closed field line through the traced field — T89's own answer, since the model has no boundary in it. Theirs is the Shue nose from the propagated wind. The two share no inputs. `+(se?`Kp ${z.toFixed(1)} sits mid-band, where T89 draws exactly the field it would at Kp ${Math.floor(z).toFixed(1)} — too coarse to be held to a pressure-driven boundary. A gap beyond ${W} Rₑ on this run would be reported as unsettled rather than as a fault in either model.`:`Kp is near a band edge, so the comparison is as sharp as a seven-band model gets. A gap beyond ${W} Rₑ means the wind has moved somewhere the three-hourly index cannot follow — or that one of the two is wired wrong.`)})}const et=eo(new Date),je=Ba-et;return t.push({name:"Field model inside its published validity",ours:`${et.toFixed(2)}`,theirs:`IGRF-14, ${Qa.toFixed(1)}–${Ba.toFixed(1)}`,ok:K0(new Date),note:je>=0?`${je.toFixed(1)} years of validity remain; IAGA reissues the model every five years, so IGRF-15 is the successor to fetch.`:`Expired ${(-je).toFixed(1)} years ago. The field lines are extrapolated beyond the published secular variation and are labelled as such; replace the coefficients with IGRF-15 via scripts/gen-igrf.mjs.`}),{rows:t,ranAt:new Date().toISOString(),passed:t.filter(B=>B.ok).length,inconclusive:t.filter(B=>B.inconclusive).length}}const ly=768,Pi=12;class cy{constructor(e){this.host=e,this.el=document.createElement("div"),this.el.className="subject-card",this.el.id="subject-card",this.el.setAttribute("role","dialog"),this.el.setAttribute("aria-label","About this element"),this.el.hidden=!0,document.body.appendChild(this.el),this.el.addEventListener("click",this.onClick),this.el.addEventListener("keydown",this.onKeyDown)}host;el;current=null;returnTo=null;get openId(){return this.current}open(e,t){const i=Fs(e);if(!i)return;if(this.current===e&&!this.el.hidden){this.place(t);return}this.el.hidden&&(this.returnTo=document.activeElement),this.current=e;const s=i.related.map(r=>{const a=Fs(r);return a?`<li><button type="button" class="subject-link" data-card-subject="${ae(a.id)}">
            <span class="badge badge-${a.tier.toLowerCase()}">${a.tier}</span>
            ${ae(a.label)}</button> — ${ae(a.oneLine)}</li>`:""}).join("");this.el.innerHTML=`
      <div class="card-head">
        <h2>${ae(i.label)}</h2>
        <button type="button" class="card-close" data-card-close
          aria-label="Close">×</button>
      </div>
      <p class="tile-meta"><span class="badge badge-${i.tier.toLowerCase()}">${i.tier}</span>
        ${ae(wf[i.tier])}</p>
      <p class="card-one">${ae(i.oneLine)}</p>
      <p class="card-meaning">${ae(i.meaning)}</p>
      ${i.keyedTo?`<p class="fine card-keyed">Ambient, but not arbitrary: ${ae(i.keyedTo)}.</p>`:""}
      <p class="card-limits"><strong>What it does not say.</strong>
        ${ae(i.limits)}</p>
      ${s?`<ul class="subject-links card-related">${s}</ul>`:""}
      <button type="button" class="card-more" data-card-more>Full detail</button>`,this.el.hidden=!1,this.place(t),this.el.tabIndex=-1,this.el.focus({preventScroll:!0})}close(){this.el.hidden||(this.el.hidden=!0,this.current=null,this.returnTo?.focus?.({preventScroll:!0}),this.returnTo=null)}place(e){if(window.innerWidth<ly){this.el.classList.add("is-sheet"),this.el.style.left="",this.el.style.top="";return}this.el.classList.remove("is-sheet");const t=this.el.getBoundingClientRect(),i=t.width||320,s=t.height||240,r=e.x+i+Pi>window.innerWidth?Math.max(Pi,e.x-i-Pi):e.x+Pi,a=Math.min(Math.max(Pi,e.y-s/3),Math.max(Pi,window.innerHeight-s-Pi));this.el.style.left=`${Math.round(r)}px`,this.el.style.top=`${Math.round(a)}px`}onClick=e=>{const t=e.target;if(t?.closest("[data-card-close]")){this.close();return}if(t?.closest("[data-card-more]")){const r=this.current;this.close(),r&&this.host.showSubject(r);return}const s=t?.closest("[data-card-subject]")?.dataset.cardSubject;if(s){const r={x:this.el.offsetLeft,y:this.el.offsetTop+60},a=this.returnTo;this.current=null,this.open(s,r),this.returnTo=a}};onKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.close())};dispose(){this.el.remove()}}const If=document.getElementById("scene"),Fe=await new Promise(n=>requestAnimationFrame(()=>n(new u6(If)))),Rr=new $x(new Lf,6e4),Os=new Qx;let Nf=null;const Vi=new Map,kd=6e4,gl=new Map;function Uf(n,e){const t=`${n}:${e}`;if(gl.has(t))return;const i=new Date(Date.now()+kd).toISOString();n==="disk"?ke.setSunRetry(i):ke.setCoronaRetry(i);const s=window.setTimeout(()=>{gl.delete(t),(n==="disk"?ke.sunState.loopId===e:ke.sunState.coronaId===e)&&(Vi.delete(e),n==="disk"?Jc(e):Ff(e))},kd);gl.set(t,s)}async function Jc(n){const e=Us.find(t=>t.id===n&&t.kind==="disk")??Us[0];if(ke.sunState.loopId=e.id,Vi.has(e.id)){const t=Vi.get(e.id)??null;ke.setSunLoop(t,!1),Bd(t);return}ke.setSunLoop(null,!0);try{const t=await _f(e);Vi.set(e.id,t),ke.sunState.loopId===e.id&&(ke.setSunLoop(t,!1),Bd(t))}catch(t){ke.sunState.loopId===e.id&&(ke.setSunLoop(null,!1,yn(t)),Uf("disk",e.id))}}async function Ff(n){if(ke.sunState.coronaId=n,n===null){ke.setCoronaLoop(null,!1),Fe.setCoronaPlane(null),ke.setPlaneCalibration("corona",null),Fe.syncCoronaFraming();return}const e=Us.find(t=>t.id===n&&t.kind==="coronagraph");if(e){if(Vi.has(e.id)){ke.setCoronaLoop(Vi.get(e.id)??null,!1);return}ke.setCoronaLoop(null,!0);try{const t=await _f(e);Vi.set(e.id,t),ke.sunState.coronaId===e.id&&ke.setCoronaLoop(t,!1)}catch(t){ke.sunState.coronaId===e.id&&(ke.setCoronaLoop(null,!1,yn(t)),Uf("corona",e.id))}}}function Bd(n){const e=n?.frames[n.newestGood];if(!e){Rc(null);return}const t=ke.images.acquire(e.url),i=()=>Rc(t);t.complete&&t.naturalWidth>0?i():t.addEventListener("load",i,{once:!0})}function Rc(n){Fe.setSunImage(n),ke.setPlaneCalibration("disk",Fe.setSunCard(n)),Fe.syncCoronaFraming()}function hy(n){ke.setPlaneCalibration("corona",Fe.setCoronaPlane(n)),Fe.syncCoronaFraming()}function uy(){const n=ke.sunState;!n.playing||!n.loop||ke.activeTab!=="sun"||n.preloaded<n.loop.frames.length||ke.setSunFrame((n.frameIndex+1)%n.loop.frames.length)}async function dy(){const n=ke.sunState;if(n.loop){if(n.preloaded>=n.loop.frames.length){ke.setSunPlaying(!n.playing);return}n.preloading||(ke.setSunPreload(0,!0),await y6(n.loop,e=>ke.setSunPreload(e,!0)),ke.setSunPreload(n.loop.frames.length,!1),ke.setSunPlaying(!0))}}let _l=null;async function fy(){ke.setChecks(null,!0);try{_l=await oy(void 0,Fe.sunProjection())}catch(n){_l={rows:[{name:"Checks could not run",ours:"no data",theirs:"—",ok:!1,inconclusive:!0,note:`NOAA could not be reached to compare against (${n instanceof Error?n.message:String(n)}). This is the comparison being unavailable, not a disagreement with it.`}],ranAt:new Date().toISOString(),passed:0,inconclusive:1}}ke.setChecks(_l,!1)}let vl=null;async function py(){ke.setForecast(null,!0);try{vl=await nx(),ke.setForecast(vl,!1)}catch(n){vl=null,ke.setForecast(null,!1,yn(n))}}async function my(){ke.setCycle(null,!0);try{ke.setCycle(await ax(),!1)}catch(n){ke.setCycle(null,!1,yn(n))}}const ke=new Gx({onSelectLoop:n=>{Jc(n)},onSelectCorona:n=>{Ff(n)},onLoadCycle:()=>{my()},onLoadForecast:()=>{py()},onToggleSunPlay:()=>{dy()},onScrubSun:n=>{ke.setSunPlaying(!1),ke.setSunFrame(n)},onRunChecks:()=>{fy()},onSunFrame:n=>Rc(n),onCoronaFrame:n=>hy(n)}),Zn=n=>document.getElementById(n),Of=Zn("scale-globe"),kf=Zn("scale-true"),Bf=Zn("motion-toggle"),zf=Zn("shield-toggle"),Vf=Zn("aurora-toggle"),Hf=Zn("wind-toggle"),Gf=Zn("cme-toggle"),$f=Zn("coast-toggle"),gy=document.getElementById("view-group"),Wf=new Map;for(const n of _r){const e=document.createElement("button");e.className="ctl",e.type="button",e.id=`view-${n.id}`,e.textContent=n.label,e.title=n.title,e.setAttribute("aria-pressed",String(n.id==="deck")),e.addEventListener("click",()=>jf(n.id)),gy.append(e),Wf.set(n.id,e)}let Xf="deck";function un(){ke.setNarration({mode:Fe.scaleMode,view:Xf,reducedMotion:Os.reduced,shield:Fe.shieldOn,fieldLines:Fe.fieldLineStats,aurora:Fe.auroraOn,wind:Fe.windOn,earthSurface:Fe.earthSurfaceState,cmes:{shown:Fe.cmesOn,count:Fe.cmeCount}}),ke.render(Rr.get())}function jf(n){Xf=n,Fe.setView(n);for(const[t,i]of Wf)i.setAttribute("aria-pressed",String(t===n));const e=_r.find(t=>t.id===n);Kn(`${e?.label??n} view — ${e?.title??""}`),(n==="profile"||n==="sunward")&&!Fe.shieldOn&&Qc(!0),n==="polar"&&!Fe.auroraOn&&eh(!0),un()}function io(n){Fe.setScaleMode(n),Of.setAttribute("aria-pressed",String(n==="globe")),kf.setAttribute("aria-pressed",String(n==="true")),Kn(H0(n)),un()}function Qc(n){Fe.setShieldVisible(n),zf.setAttribute("aria-pressed",String(n)),Kn(n?"Magnetic field lines and boundaries shown.":"Field hidden."),un()}function eh(n){Fe.setAuroraVisible(n),Vf.setAttribute("aria-pressed",String(n)),Kn(n?"Aurora forecast shown.":"Aurora hidden."),un()}function th(n){Fe.setWindVisible(n),Hf.setAttribute("aria-pressed",String(n)),Kn(n?"Solar wind stream shown.":"Solar wind stream hidden."),un()}const qf=document.querySelector("header.top");function Yf(){document.documentElement.style.setProperty("--header-real-h",`${Math.round(qf.getBoundingClientRect().height)}px`)}Yf();typeof ResizeObserver<"u"&&new ResizeObserver(Yf).observe(qf);const zd=Zn("controls-toggle"),_y=document.getElementById("controls");zd.addEventListener("click",()=>{const n=_y.classList.toggle("is-open");zd.setAttribute("aria-expanded",String(n))});Of.addEventListener("click",()=>io("globe"));kf.addEventListener("click",()=>io("true"));zf.addEventListener("click",()=>Qc(!Fe.shieldOn));Vf.addEventListener("click",()=>eh(!Fe.auroraOn));Hf.addEventListener("click",()=>th(!Fe.windOn));function Kf(n){Fe.setCmesVisible(n),Gf.setAttribute("aria-pressed",String(n)),Kn(n?"CME cones shown.":"CME cones hidden."),un()}Gf.addEventListener("click",()=>Kf(!Fe.cmesOn));function vy(n){Fe.setCoastOverlay(n),$f.setAttribute("aria-pressed",String(n)),Kn(n?"Vector coastlines drawn over the surface imagery.":"Coastlines hidden — the raster surface only."),un()}$f.addEventListener("click",()=>vy(!Fe.coastOverlayOn));Bf.addEventListener("click",()=>Os.setOverride(!Os.reduced));Os.subscribe(n=>{Fe.setReducedMotion(n),Bf.setAttribute("aria-pressed",String(!n)),un()});ty({view:n=>{const e=_r[n];e&&jf(e.id)},toggleScale:()=>io(Fe.scaleMode==="globe"?"true":"globe"),toggleMotion:()=>Os.setOverride(!Os.reduced),toggleShield:()=>Qc(!Fe.shieldOn),toggleAurora:()=>eh(!Fe.auroraOn),toggleWind:()=>th(!Fe.windOn),toggleCmes:()=>Kf(!Fe.cmesOn),refresh:()=>{Kn("Refreshing."),Rr.refresh()},focusReport:()=>ke.selectTab("report")});let Vd=!1;function xy(){Vd||Rr.get().lanes.snapshot||(Vd=!0,Jc(Us[0].id))}Rr.subscribe(n=>{Fe.setNow(n.now?.data??null),Fe.setAurora(n.aurora?.data??null),Fe.setRegions(n.regions?.data??[],n.regions?.data?.[0]?.observed??null),Fe.setCmes(n.cmes),Fe.setSpacecraft(n.spacecraft?.data??[]),xy(),un()});let Hd=!1;function yy(){if(Hd)return;Hd=!0;const n=Math.min(devicePixelRatio||1,3),t=(If.clientWidth||window.innerWidth)*n>=2048?"4096":"2048",i=(s,r)=>{const a=new Image;a.decoding="async",a.onload=()=>r(a),a.onerror=()=>{Fe.setEarthSurfaceState("vector"),un()},a.src=`/viewer/earth-${s}.webp`};i(`day-${t}`,s=>{Fe.setEarthDayImage(s),Fe.setEarthSurfaceState("imagery"),un()}),i("night-2048",s=>{Fe.setEarthNightImage(s),ke.setEarthLights(!0),un()})}function by(n){requestAnimationFrame(()=>requestAnimationFrame(n))}window.setInterval(un,3e4);Nf=window.setInterval(uy,220);io("globe");th(!0);Fe.start();Rr.start();by(yy);const mi=document.getElementById("tip");let Bi="";const Gd=new cy({showSubject:n=>ke.showSubject(n)});Fe.onHover=n=>{if(!n){mi.hidden=!0,Bi="";return}const e=Ef(n.id,new Date),t=n.kind==="sun"?"Sun · open the Sun panel":n.kind==="spacecraft"?`${n.label} · L1 monitor`:e.auFromEarth!==null?`${n.label} · ${Ga(e.auFromEarth)} · light ${Tf(e.lightSeconds)}`:e.auFromSun!==null?`${n.label} · ${Ga(e.auFromSun)} from the Sun`:n.label;t!==Bi&&(mi.textContent=t,Bi=t),mi.hidden=!1,mi.style.transform=`translate(${n.screen.x+14}px, ${n.screen.y+14}px)`};Fe.onLayerHover=n=>{if(!n){Bi.startsWith("layer:")&&(mi.hidden=!0,Bi="");return}const e=Fs(n.subject);if(!e)return;const t=`layer:${e.id}`;t!==Bi&&(mi.textContent=`${e.label} · ${e.oneLine}`,Bi=t),mi.hidden=!1,mi.style.transform=`translate(${n.screen.x+14}px, ${n.screen.y+14}px)`};Fe.onLayerSelect=n=>{if(!n){Gd.close();return}Gd.open(n.subject,n.screen)};Fe.onSelect=n=>{n.kind==="sun"?ke.selectTab("sun"):n.kind==="spacecraft"?ke.selectTab("sources"):ke.showBody(n.id)};window.setInterval(()=>ke.setStats(Fe.stats),1e3);Object.assign(window,{__viewer:Fe,__hud:ke,__stats:()=>Fe.stats,__sunTimer:Nf});
