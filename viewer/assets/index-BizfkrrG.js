(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const _u="180",lr={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cm=0,A0=1,Pm=2,Zf=1,Dm=2,li=3,qi=0,an=1,Rn=2,Hi=0,fs=1,pn=2,R0=3,C0=4,Lm=5,os=100,Im=101,Nm=102,Um=103,Fm=104,Om=200,km=201,zm=202,Bm=203,ah=204,oh=205,Vm=206,Hm=207,Gm=208,$m=209,Wm=210,Xm=211,qm=212,jm=213,Km=214,lh=0,ch=1,hh=2,dr=3,uh=4,dh=5,fh=6,ph=7,vu=0,Ym=1,Zm=2,Gi=0,Jm=1,Qm=2,e2=3,t2=4,n2=5,i2=6,s2=7,Jf=300,fr=301,pr=302,mh=303,gh=304,_l=306,_h=1e3,hs=1001,vh=1002,kn=1003,r2=1004,Sa=1005,Xt=1006,Gl=1007,Fi=1008,Qn=1009,Qf=1010,e1=1011,Kr=1012,xu=1013,gs=1014,ui=1015,ca=1016,yu=1017,bu=1018,Yr=1020,t1=35902,n1=35899,i1=1021,s1=1022,On=1023,Zr=1026,Jr=1027,r1=1028,Mu=1029,a1=1030,Su=1031,wu=1033,Wo=33776,Xo=33777,qo=33778,jo=33779,xh=35840,yh=35841,bh=35842,Mh=35843,Sh=36196,wh=37492,Eh=37496,Th=37808,Ah=37809,Rh=37810,Ch=37811,Ph=37812,Dh=37813,Lh=37814,Ih=37815,Nh=37816,Uh=37817,Fh=37818,Oh=37819,kh=37820,zh=37821,Bh=36492,Vh=36494,Hh=36495,Gh=36283,$h=36284,Wh=36285,Xh=36286,a2=3200,o2=3201,o1=0,l2=1,Ui="",$t="srgb",mr="srgb-linear",Qo="linear",pt="srgb",Ts=7680,P0=519,c2=512,h2=513,u2=514,l1=515,d2=516,f2=517,p2=518,m2=519,D0=35044,L0="300 es",Yn=2e3,el=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,qh=180/Math.PI;function ha(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function g2(n,e){return(n%e+e)%e}function $l(n,e,t){return(1-t)*n+t*e}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _2={DEG2RAD:Ko};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _s{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),M=Math.atan2(E,p*v);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E}const y=o*v;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(I0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wl=new D,I0=new _s;class Je{constructor(e,t,i,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],x=s[4],y=s[7],E=s[2],M=s[5],A=s[8];return r[0]=a*_+o*v+l*E,r[3]=a*m+o*x+l*M,r[6]=a*p+o*y+l*A,r[1]=c*_+h*v+u*E,r[4]=c*m+h*x+u*M,r[7]=c*p+h*y+u*A,r[2]=d*_+f*v+g*E,r[5]=d*m+f*x+g*M,r[8]=d*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new Je;function c1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v2(){const n=tl("canvas");return n.style.display="block",n}const N0={};function Qr(n){n in N0||(N0[n]=!0,console.warn(n))}function x2(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const U0=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y2(){const n={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mr]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:U0,fromXYZ:F0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:U0,fromXYZ:F0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const lt=y2();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let As;class b2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=tl("canvas")),As.width=e.width,As.height=e.height;const s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M2=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M2++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S2=0;const jl=new D;class Wt extends bs{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=hs,s=hs,r=Xt,a=Fi,o=On,l=Qn,c=Wt.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S2++}),this.uuid=ha(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Jf;Wt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,E=(p+1)/2,M=(h+d)/4,A=(u+_)/4,L=(g+m)/4;return x>y&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=M/i,r=A/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=L/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w2 extends bs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Wt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends w2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class h1 extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E2 extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ea.subVectors(this.max,Dr),Rs.subVectors(e.a,Dr),Cs.subVectors(e.b,Dr),Ps.subVectors(e.c,Dr),Mi.subVectors(Cs,Rs),Si.subVectors(Ps,Cs),Ki.subVectors(Rs,Ps);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ki.z,Ki.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ki.z,0,-Ki.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ki.y,Ki.x,0];return!Kl(t,Rs,Cs,Ps,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,Rs,Cs,Ps,Ea))?!1:(Ta.crossVectors(Mi,Si),t=[Ta.x,Ta.y,Ta.z],Kl(t,Rs,Cs,Ps,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,wa=new ua,Rs=new D,Cs=new D,Ps=new D,Mi=new D,Si=new D,Ki=new D,Dr=new D,Ea=new D,Ta=new D,Yi=new D;function Kl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Yi.fromArray(n,r);const o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=i.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const T2=new ua,Lr=new D,Yl=new D;class da{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Yl)),this.expandByPoint(Lr.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new D,Zl=new D,Aa=new D,wi=new D,Jl=new D,Ra=new D,Ql=new D;class fa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Zl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=wi.dot(this.direction),l=-wi.dot(Aa),c=wi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zl).addScaledVector(Aa,d),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){Jl.subVectors(t,e),Ra.subVectors(i,e),Ql.crossVectors(Jl,Ra);let a=this.direction.dot(Ql),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(Ra.crossVectors(wi,Ra));if(l<0)return null;const c=o*this.direction.dot(Jl.cross(wi));if(c<0||l+c>a)return null;const h=-o*wi.dot(Ql);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A2,e,R2)}lookAt(e,t,i){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ei.crossVectors(i,gn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ei.crossVectors(i,gn)),Ei.normalize(),Ca.crossVectors(gn,Ei),s[0]=Ei.x,s[4]=Ca.x,s[8]=gn.x,s[1]=Ei.y,s[5]=Ca.y,s[9]=gn.y,s[2]=Ei.z,s[6]=Ca.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],x=i[7],y=i[11],E=i[15],M=s[0],A=s[4],L=s[8],b=s[12],S=s[1],P=s[5],I=s[9],F=s[13],z=s[2],W=s[6],G=s[10],Y=s[14],k=s[3],ee=s[7],Z=s[11],de=s[15];return r[0]=a*M+o*S+l*z+c*k,r[4]=a*A+o*P+l*W+c*ee,r[8]=a*L+o*I+l*G+c*Z,r[12]=a*b+o*F+l*Y+c*de,r[1]=h*M+u*S+d*z+f*k,r[5]=h*A+u*P+d*W+f*ee,r[9]=h*L+u*I+d*G+f*Z,r[13]=h*b+u*F+d*Y+f*de,r[2]=g*M+_*S+m*z+p*k,r[6]=g*A+_*P+m*W+p*ee,r[10]=g*L+_*I+m*G+p*Z,r[14]=g*b+_*F+m*Y+p*de,r[3]=v*M+x*S+y*z+E*k,r[7]=v*A+x*P+y*W+E*ee,r[11]=v*L+x*I+y*G+E*Z,r[15]=v*b+x*F+y*Y+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+_*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,E=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,M=t*v+i*x+s*y+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*A,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*A,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*A,e[4]=x*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=y*A,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*A,e[12]=E*A,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*A,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,v=l*c,x=l*h,y=l*u,E=i.x,M=i.y,A=i.z;return s[0]=(1-(_+p))*E,s[1]=(f+y)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(d+p))*M,s[6]=(m+v)*M,s[7]=0,s[8]=(g+x)*A,s[9]=(m-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const c=1/r,h=1/a,u=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Yn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===el)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Yn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===el)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new D,Dn=new Mt,A2=new D(0,0,0),R2=new D(1,1,1),Ei=new D,Ca=new D,gn=new D,O0=new Mt,k0=new _s;class ei{constructor(e=0,t=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C2=0;const z0=new D,Ls=new _s,si=new Mt,Pa=new D,Ir=new D,P2=new D,D2=new _s,B0=new D(1,0,0),V0=new D(0,1,0),H0=new D(0,0,1),G0={type:"added"},L2={type:"removed"},Is={type:"childadded",child:null},ec={type:"childremoved",child:null};class Jt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new D,t=new ei,i=new _s,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(B0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(H0,e)}translateOnAxis(e,t){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(B0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(H0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pa.copy(e):Pa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ir,Pa,this.up):si.lookAt(Pa,Ir,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(si),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L2),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,P2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,D2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new D(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new D,ri=new D,tc=new D,ai=new D,Ns=new D,Us=new D,$0=new D,nc=new D,ic=new D,sc=new D,rc=new gt,ac=new gt,oc=new gt;class Fn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),ri.subVectors(i,t),tc.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(ri),l=Ln.dot(tc),c=ri.dot(ri),h=ri.dot(tc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return rc.setScalar(0),ac.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,i),oc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(rc,r.x),a.addScaledVector(ac,r.y),a.addScaledVector(oc,r.z),a}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),ri.subVectors(e,t),Ln.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ns.subVectors(s,i),Us.subVectors(r,i),nc.subVectors(e,i);const l=Ns.dot(nc),c=Us.dot(nc);if(l<=0&&c<=0)return t.copy(i);ic.subVectors(e,s);const h=Ns.dot(ic),u=Us.dot(ic);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ns,a);sc.subVectors(e,r);const f=Ns.dot(sc),g=Us.dot(sc);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Us,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return $0.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector($0,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const u1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Da={h:0,s:0,l:0};function lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=g2(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=lc(a,r,e+1/3),this.g=lc(a,r,e),this.b=lc(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=u1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return lt.workingToColorSpace(Kt.copy(this),e),Math.round(tt(Kt.r*255,0,255))*65536+Math.round(tt(Kt.g*255,0,255))*256+Math.round(tt(Kt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Kt.copy(this),t);const i=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=$t){lt.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,s=Kt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Da);const i=$l(Ti.h,Da.h,t),s=$l(Ti.s,Da.s,t),r=$l(Ti.l,Da.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new qe;qe.NAMES=u1;let I2=0;class Ms extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=fs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mr extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new D,La=new Xe;let N2=0;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=D0,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),e}}class d1 extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class f1 extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U2=0;const wn=new Mt,cc=new Jt,Fs=new D,_n=new ua,Nr=new ua,Gt=new D;class At extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c1(e)?f1:d1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(_n.min,Nr.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,Nr.max),_n.expandByPoint(Gt)):(_n.expandByPoint(Nr.min),_n.expandByPoint(Nr.max))}_n.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(e,c),Gt.add(Fs)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,d=new Xe,f=new Xe,g=new Xe,_=new D,m=new D;function p(L,b,S){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[b].add(_),o[S].add(_),l[L].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,b=v.length;L<b;++L){const S=v[L],P=S.start,I=S.count;for(let F=P,z=P+I;F<z;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new D,y=new D,E=new D,M=new D;function A(L){E.fromBufferAttribute(s,L),M.copy(E);const b=o[L];x.copy(b),x.sub(E.multiplyScalar(E.dot(b))).normalize(),y.crossVectors(M,b);const P=y.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,P)}for(let L=0,b=v.length;L<b;++L){const S=v[L],P=S.start,I=S.count;for(let F=P,z=P+I;F<z;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Zn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W0=new Mt,Zi=new fa,Ia=new da,X0=new D,Na=new D,Ua=new D,Fa=new D,hc=new D,Oa=new D,q0=new D,ka=new D;class kt extends Jt{constructor(e=new At,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(hc.fromBufferAttribute(u,e),a?Oa.addScaledVector(hc,h):Oa.addScaledVector(hc.sub(t),h))}t.add(Oa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ia,X0)===null||Zi.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&(W0.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(W0),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,E=x;y<E;y+=3){const M=o.getX(y),A=o.getX(y+1),L=o.getX(y+2);s=za(this,p,e,i,c,h,u,M,A,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=za(this,a,e,i,c,h,u,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,E=x;y<E;y+=3){const M=y,A=y+1,L=y+2;s=za(this,p,e,i,c,h,u,M,A,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;s=za(this,a,e,i,c,h,u,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function F2(n,e,t,i,s,r,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===qi,o),l===null)return null;ka.copy(o),ka.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:n}}function za(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Na),n.getVertexPosition(l,Ua),n.getVertexPosition(c,Fa);const h=F2(n,e,t,i,Na,Ua,Fa,q0);if(h){const u=new D;Fn.getBarycoord(q0,Na,Ua,Fa,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,l,c,u,new Xe)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new Xe)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Fn.getNormal(Na,Ua,Fa,d.normal),h.face=d,h.barycoord=u}return h}class pa extends At{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,p,v,x,y,E,M,A,L,b){const S=y/A,P=E/L,I=y/2,F=E/2,z=M/2,W=A+1,G=L+1;let Y=0,k=0;const ee=new D;for(let Z=0;Z<G;Z++){const de=Z*P-F;for(let Ae=0;Ae<W;Ae++){const Le=Ae*S-I;ee[_]=Le*v,ee[m]=de*x,ee[p]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=M>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Ae/A),u.push(1-Z/L),Y+=1}}for(let Z=0;Z<L;Z++)for(let de=0;de<A;de++){const Ae=d+de+W*Z,Le=d+de+W*(Z+1),Ve=d+(de+1)+W*(Z+1),ke=d+(de+1)+W*Z;l.push(Ae,Le,ke),l.push(Le,Ve,ke),k+=6}o.addGroup(f,k,b),f+=k,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const s in i)e[s]=i[s]}return e}function O2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function p1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const k2={clone:gr,merge:sn};var z2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z2,this.fragmentShader=B2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=O2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class m1 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new D,j0=new Xe,K0=new Xe;class yn extends m1{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,j0,K0),t.subVectors(K0,j0)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class V2 extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(Os,ks,e,t);s.layers=this.layers,this.add(s);const r=new yn(Os,ks,e,t);r.layers=this.layers,this.add(r);const a=new yn(Os,ks,e,t);a.layers=this.layers,this.add(a);const o=new yn(Os,ks,e,t);o.layers=this.layers,this.add(o);const l=new yn(Os,ks,e,t);l.layers=this.layers,this.add(l);const c=new yn(Os,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class g1 extends Wt{constructor(e=[],t=fr,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H2 extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new g1(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pa(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Hi});r.uniforms.tEquirect.value=t;const a=new kt(s,r),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Xt),new V2(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class fn extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G2={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(G2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $2 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dc=new D,W2=new D,X2=new Je;class Ii{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=dc.subVectors(i,t).cross(W2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||X2.getNormalMatrix(e),s=this.coplanarPoint(dc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new da,q2=new Xe(.5,.5),Ba=new D;class Au{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],x=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-g,E-v).normalize(),s[1].setComponents(c+a,f+h,p+g,E+v).normalize(),s[2].setComponents(c+o,f+u,p+_,E+x).normalize(),s[3].setComponents(c-o,f-u,p-_,E-x).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,E-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,E-y).normalize(),t===Yn)s[5].setComponents(c+l,f+d,p+m,E+y).normalize();else if(t===el)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=q2.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xs extends Ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new D,il=new D,Y0=new Mt,Ur=new fa,Va=new da,fc=new D,Z0=new D;class vl extends Jt{constructor(e=new At,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)nl.fromBufferAttribute(t,s-1),il.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=nl.distanceTo(il);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Y0.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Y0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),x=Ha(this,e,Ur,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ha(this,e,Ur,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ha(this,e,Ur,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ha(this,e,Ur,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ha(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(nl.fromBufferAttribute(o,s),il.fromBufferAttribute(o,r),t.distanceSqToSegment(nl,il,fc,Z0)>i)return;fc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fc);if(!(c<e.near||c>e.far))return{distance:c,point:Z0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const J0=new D,Q0=new D;class ea extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)J0.fromBufferAttribute(t,s),Q0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+J0.distanceTo(Q0);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _1 extends Ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ed=new Mt,jh=new fa,Ga=new da,$a=new D;class j2 extends Jt{constructor(e=new At,t=new _1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;ed.copy(s).invert(),jh.copy(e.ray).applyMatrix4(ed);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);$a.fromBufferAttribute(u,m),td($a,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)$a.fromBufferAttribute(u,g),td($a,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function td(n,e,t,i,s,r,a){const o=jh.distanceSqToPoint(n);if(o<t){const l=new D;jh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xr extends Wt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class v1 extends Wt{constructor(e,t,i=gs,s,r,a,o=kn,l=kn,c,h=Zr,u=1){if(h!==Zr&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class x1 extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ru extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new D,y=new D,E=new D;for(let M=0;M<t.length;M+=3)f(t[M+0],x),f(t[M+1],y),f(t[M+2],E),l(x,y,E,v)}function l(v,x,y,E){const M=E+1,A=[];for(let L=0;L<=M;L++){A[L]=[];const b=v.clone().lerp(y,L/M),S=x.clone().lerp(y,L/M),P=M-L;for(let I=0;I<=P;I++)I===0&&L===M?A[L][I]=b:A[L][I]=b.clone().lerp(S,I/P)}for(let L=0;L<M;L++)for(let b=0;b<2*(M-L)-1;b++){const S=Math.floor(b/2);b%2===0?(d(A[L][S+1]),d(A[L+1][S]),d(A[L][S])):(d(A[L][S+1]),d(A[L+1][S+1]),d(A[L+1][S]))}}function c(v){const x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new D;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;a.push(y,1-E)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],E=a[v+4],M=Math.max(x,y,E),A=Math.min(x,y,E);M>.9&&A<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new D,x=new D,y=new D,E=new D,M=new Xe,A=new Xe,L=new Xe;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),M.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),E.copy(v).add(x).add(y).divideScalar(3);const P=m(E);_(M,S+0,v,P),_(A,S+2,x,P),_(L,S+4,y,P)}}function _(v,x,y,E){E<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.vertices,e.indices,e.radius,e.details)}}class Cu extends Ru{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cu(e.radius,e.detail)}}class ma extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,y=v+c*(p+1),E=v+1+c*(p+1),M=v+1+c*p;f.push(x,y,M),f.push(y,E,M)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class xl extends At{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new D,g=new Xe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,x=v,y=v+i+1,E=v+i+2,M=v+1;o.push(x,y,M),o.push(y,E,M)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ji extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],x=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const M=E/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(M+y,1-x),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const x=h[p][v+1],y=h[p][v],E=h[p+1][v],M=h[p+1][v+1];(p!==0||a>0)&&f.push(x,y,M),(p!==i-1||l<Math.PI)&&f.push(y,E,M)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class y1 extends Ms{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o1,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K2 extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y2 extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class b1 extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pc=new Mt,nd=new D,id=new D;class Z2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(nd),id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(id),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sd=new Mt,Fr=new D,mc=new D;class J2 extends Z2{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),mc.copy(i.position),mc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(mc),i.updateMatrixWorld(),s.makeTranslation(-Fr.x,-Fr.y,-Fr.z),sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,i.coordinateSystem,i.reversedDepth)}}class Q2 extends b1{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new J2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e3 extends m1{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class t3 extends b1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n3 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rd=new Mt;class i3{constructor(e,t,i=0,s=1/0){this.ray=new fa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rd),this}intersectObject(e,t=!0,i=[]){return Kh(e,this,i,t),i.sort(ad),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Kh(e[s],this,i,t);return i.sort(ad),i}}function ad(n,e){return n.distance-e.distance}function Kh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Kh(r[a],e,t,!0)}}let od=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class s3 extends bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ld(n,e,t,i){const s=r3(i);switch(t){case i1:return n*e;case r1:return n*e/s.components*s.byteLength;case Mu:return n*e/s.components*s.byteLength;case a1:return n*e*2/s.components*s.byteLength;case Su:return n*e*2/s.components*s.byteLength;case s1:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case wu:return n*e*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:case Mh:return Math.max(n,16)*Math.max(e,8)/4;case xh:case bh:return Math.max(n,8)*Math.max(e,8)/2;case Sh:case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bh:case Vh:case Hh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gh:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wh:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r3(n){switch(n){case Qn:case Qf:return{byteLength:1,components:1};case Kr:case e1:case ca:return{byteLength:2,components:1};case yu:case bu:return{byteLength:2,components:4};case gs:case xu:case ui:return{byteLength:4,components:1};case t1:case n1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);function M1(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function a3(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var o3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l3=`#ifdef USE_ALPHAHASH
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
#endif`,c3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f3=`#ifdef USE_AOMAP
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
#endif`,p3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m3=`#ifdef USE_BATCHING
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
#endif`,g3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y3=`#ifdef USE_IRIDESCENCE
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
#endif`,b3=`#ifdef USE_BUMPMAP
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
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P3=`#define PI 3.141592653589793
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
} // validated`,D3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L3=`vec3 transformedNormal = objectNormal;
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
#endif`,I3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O3="gl_FragColor = linearToOutputTexel( gl_FragColor );",k3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z3=`#ifdef USE_ENVMAP
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
#endif`,B3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V3=`#ifdef USE_ENVMAP
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
#endif`,H3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
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
#endif`,$3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j3=`#ifdef USE_GRADIENTMAP
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
}`,K3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J3=`uniform bool receiveShadow;
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
#endif`,Q3=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,ag=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wg=`float getShadowMask() {
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
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e4=`#ifdef USE_TRANSMISSION
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
#endif`,t4=`#ifdef USE_TRANSMISSION
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
#endif`,n4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o4=`uniform sampler2D t2D;
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
}`,l4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d4=`#include <common>
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
}`,f4=`#if DEPTH_PACKING == 3200
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
}`,p4=`#define DISTANCE
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
}`,m4=`#define DISTANCE
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
}`,g4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v4=`uniform float scale;
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
}`,x4=`uniform vec3 diffuse;
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
}`,y4=`#include <common>
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
}`,b4=`uniform vec3 diffuse;
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
}`,M4=`#define LAMBERT
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
}`,S4=`#define LAMBERT
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
}`,w4=`#define MATCAP
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
}`,E4=`#define MATCAP
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
}`,T4=`#define NORMAL
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
}`,A4=`#define NORMAL
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
}`,R4=`#define PHONG
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
}`,C4=`#define PHONG
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
}`,P4=`#define STANDARD
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
}`,D4=`#define STANDARD
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
}`,L4=`#define TOON
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
}`,I4=`#define TOON
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
}`,N4=`uniform float size;
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
}`,U4=`uniform vec3 diffuse;
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
}`,F4=`#include <common>
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
}`,O4=`uniform vec3 color;
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
}`,k4=`uniform float rotation;
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
}`,z4=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:o3,alphahash_pars_fragment:l3,alphamap_fragment:c3,alphamap_pars_fragment:h3,alphatest_fragment:u3,alphatest_pars_fragment:d3,aomap_fragment:f3,aomap_pars_fragment:p3,batching_pars_vertex:m3,batching_vertex:g3,begin_vertex:_3,beginnormal_vertex:v3,bsdfs:x3,iridescence_fragment:y3,bumpmap_pars_fragment:b3,clipping_planes_fragment:M3,clipping_planes_pars_fragment:S3,clipping_planes_pars_vertex:w3,clipping_planes_vertex:E3,color_fragment:T3,color_pars_fragment:A3,color_pars_vertex:R3,color_vertex:C3,common:P3,cube_uv_reflection_fragment:D3,defaultnormal_vertex:L3,displacementmap_pars_vertex:I3,displacementmap_vertex:N3,emissivemap_fragment:U3,emissivemap_pars_fragment:F3,colorspace_fragment:O3,colorspace_pars_fragment:k3,envmap_fragment:z3,envmap_common_pars_fragment:B3,envmap_pars_fragment:V3,envmap_pars_vertex:H3,envmap_physical_pars_fragment:Q3,envmap_vertex:G3,fog_vertex:$3,fog_pars_vertex:W3,fog_fragment:X3,fog_pars_fragment:q3,gradientmap_pars_fragment:j3,lightmap_pars_fragment:K3,lights_lambert_fragment:Y3,lights_lambert_pars_fragment:Z3,lights_pars_begin:J3,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:dg,map_fragment:fg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:yg,morphnormal_vertex:bg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:wg,normal_fragment_maps:Eg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ig,opaque_fragment:Ng,packing:Ug,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:kg,dithering_pars_fragment:zg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Gg,shadowmap_vertex:$g,shadowmask_pars_fragment:Wg,skinbase_vertex:Xg,skinning_pars_vertex:qg,skinning_vertex:jg,skinnormal_vertex:Kg,specularmap_fragment:Yg,specularmap_pars_fragment:Zg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:e4,transmission_pars_fragment:t4,uv_pars_fragment:n4,uv_pars_vertex:i4,uv_vertex:s4,worldpos_vertex:r4,background_vert:a4,background_frag:o4,backgroundCube_vert:l4,backgroundCube_frag:c4,cube_vert:h4,cube_frag:u4,depth_vert:d4,depth_frag:f4,distanceRGBA_vert:p4,distanceRGBA_frag:m4,equirect_vert:g4,equirect_frag:_4,linedashed_vert:v4,linedashed_frag:x4,meshbasic_vert:y4,meshbasic_frag:b4,meshlambert_vert:M4,meshlambert_frag:S4,meshmatcap_vert:w4,meshmatcap_frag:E4,meshnormal_vert:T4,meshnormal_frag:A4,meshphong_vert:R4,meshphong_frag:C4,meshphysical_vert:P4,meshphysical_frag:D4,meshtoon_vert:L4,meshtoon_frag:I4,points_vert:N4,points_frag:U4,shadow_vert:F4,shadow_frag:O4,sprite_vert:k4,sprite_frag:z4},ve={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},jn={basic:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:sn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:sn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:sn([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:sn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:sn([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:sn([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:sn([ve.common,ve.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:sn([ve.lights,ve.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};jn.physical={uniforms:sn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Wa={r:0,b:0,g:0},Qi=new ei,B4=new Mt;function V4(n,e,t,i,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const E=g(x);E===null?p(o,l):E&&E.isColor&&(p(E,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===_l)?(h===void 0&&(h=new kt(new pa(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:gr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qi.copy(y.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B4.makeRotationFromEuler(Qi)),h.material.toneMapped=lt.getTransfer(E.colorSpace)!==pt,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new kt(new ma(2,2),new mn({name:"BackgroundMaterial",uniforms:gr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Wa,p1(n)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:v}}function H4(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(S,P,I,F,z){let W=!1;const G=u(F,I,P);r!==G&&(r=G,c(r.object)),W=f(S,F,I,z),W&&g(S,F,I,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(S,P,I,F),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,P,I){const F=I.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let W=z[P.id];W===void 0&&(W={},z[P.id]=W);let G=W[F];return G===void 0&&(G=d(l()),W[F]=G),G}function d(S){const P=[],I=[],F=[];for(let z=0;z<t;z++)P[z]=0,I[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,P,I,F){const z=r.attributes,W=P.attributes;let G=0;const Y=I.getAttributes();for(const k in Y)if(Y[k].location>=0){const Z=z[k];let de=W[k];if(de===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(S,P,I,F){const z={},W=P.attributes;let G=0;const Y=I.getAttributes();for(const k in Y)if(Y[k].location>=0){let Z=W[k];Z===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),z[k]=de,G++}r.attributes=z,r.attributesNum=G,r.index=F}function _(){const S=r.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const I=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;I[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),z[S]!==P&&(n.vertexAttribDivisor(S,P),z[S]=P)}function v(){const S=r.newAttributes,P=r.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==S[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function x(S,P,I,F,z,W,G){G===!0?n.vertexAttribIPointer(S,P,I,z,W):n.vertexAttribPointer(S,P,I,F,z,W)}function y(S,P,I,F){_();const z=F.attributes,W=I.getAttributes(),G=P.defaultAttributeValues;for(const Y in W){const k=W[Y];if(k.location>=0){let ee=z[Y];if(ee===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const Z=ee.normalized,de=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const Le=Ae.buffer,Ve=Ae.type,ke=Ae.bytesPerElement,j=Ve===n.INT||Ve===n.UNSIGNED_INT||ee.gpuType===xu;if(ee.isInterleavedBufferAttribute){const H=ee.data,J=H.stride,U=ee.offset;if(H.isInstancedInterleavedBuffer){for(let se=0;se<k.locationSize;se++)p(k.location+se,H.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let se=0;se<k.locationSize;se++)m(k.location+se);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let se=0;se<k.locationSize;se++)x(k.location+se,de/k.locationSize,Ve,Z,J*ke,(U+de/k.locationSize*se)*ke,j)}else{if(ee.isInstancedBufferAttribute){for(let H=0;H<k.locationSize;H++)p(k.location+H,ee.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let H=0;H<k.locationSize;H++)m(k.location+H);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let H=0;H<k.locationSize;H++)x(k.location+H,de/k.locationSize,Ve,Z,de*ke,de/k.locationSize*H*ke,j)}}else if(G!==void 0){const Z=G[Y];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(k.location,Z);break;case 3:n.vertexAttrib3fv(k.location,Z);break;case 4:n.vertexAttrib4fv(k.location,Z);break;default:n.vertexAttrib1fv(k.location,Z)}}}}v()}function E(){L();for(const S in i){const P=i[S];for(const I in P){const F=P[I];for(const z in F)h(F[z].object),delete F[z];delete P[I]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const I in P){const F=P[I];for(const z in F)h(F[z].object),delete F[z];delete P[I]}delete i[S.id]}function A(S){for(const P in i){const I=i[P];if(I[S.id]===void 0)continue;const F=I[S.id];for(const z in F)h(F[z].object),delete F[z];delete I[S.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function G4(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $4(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==On&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:M}}function W4(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ii,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,x=v*4;let y=p.clippingState||null;l.value=y,y=h(g,d,x,f);for(let E=0;E!==x;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function X4(n){let e=new WeakMap;function t(a,o){return o===mh?a.mapping=fr:o===gh&&(a.mapping=pr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===mh||o===gh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new H2(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ir=4,cd=[.125,.215,.35,.446,.526,.582],ls=20,gc=new e3,hd=new qe;let _c=null,vc=0,xc=0,yc=!1;const ss=(1+Math.sqrt(5))/2,zs=1/ss,ud=[new D(-ss,zs,0),new D(ss,zs,0),new D(-zs,0,ss),new D(zs,0,ss),new D(0,ss,-zs),new D(0,ss,zs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],q4=new D;class dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=q4}=r;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),this._renderer.xr.enabled=yc,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ca,format:On,colorSpace:mr,depthBuffer:!1},s=fd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j4(r)),this._blurMaterial=K4(r,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,i,s,r){const l=new yn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hd),u.toneMapping=Gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Mr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new kt(new pa,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(hd),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const E=this._cubeSize;Xa(s,y*E,x>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,gc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ud[(s-r-1)%ud.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let v=0;for(let A=0;A<ls;++A){const L=A/_,b=Math.exp(-L*L/2);p.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[s],E=3*y*(s>x-ir?s-x+ir:0),M=4*(this._cubeSize-y);Xa(t,E,M,3*y,2*y),l.setRenderTarget(t),l.render(u,gc)}}function j4(n){const e=[],t=[],i=[];let s=n;const r=n-ir+1+cd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ir?l=cd[a-n+ir-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,L=M>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(b,_*g*M),x.set(d,m*g*M);const S=[M,M,M,M,M,M];y.set(S,p*g*M)}const E=new At;E.setAttribute("position",new Zn(v,_)),E.setAttribute("uv",new Zn(x,m)),E.setAttribute("faceIndex",new Zn(y,p)),e.push(E),s>ir&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fd(n,e,t){const i=new vs(n,e,t);return i.texture.mapping=_l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function K4(n,e,t){const i=new Float32Array(ls),s=new D(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function pd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function md(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function Y4(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mh||l===gh,h=l===fr||l===pr;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new dd(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new dd(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Z4(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function J4(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],M=v[x+1],A=v[x+2];d.push(E,M,M,A,A,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,M=x+1,A=x+2;d.push(E,M,M,A,A,E)}}else return;const m=new(c1(d)?f1:d1)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Q4(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e5(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function t5(n,e,t){const i=new WeakMap,s=new gt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*E*4*u),A=new h1(M,y,E,u);A.type=ui,A.needsUpdate=!0;const L=x*4;for(let S=0;S<u;S++){const P=m[S],I=p[S],F=v[S],z=y*E*4*S;for(let W=0;W<P.count;W++){const G=W*L;f===!0&&(s.fromBufferAttribute(P,W),M[z+G+0]=s.x,M[z+G+1]=s.y,M[z+G+2]=s.z,M[z+G+3]=0),g===!0&&(s.fromBufferAttribute(I,W),M[z+G+4]=s.x,M[z+G+5]=s.y,M[z+G+6]=s.z,M[z+G+7]=0),_===!0&&(s.fromBufferAttribute(F,W),M[z+G+8]=s.x,M[z+G+9]=s.y,M[z+G+10]=s.z,M[z+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Xe(y,E)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function n5(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const S1=new Wt,gd=new v1(1,1),w1=new h1,E1=new E2,T1=new g1,_d=[],vd=[],xd=new Float32Array(16),yd=new Float32Array(9),bd=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yl(n,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i5(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function r5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function a5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function o5(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;bd.set(i),n.uniformMatrix2fv(this.addr,!1,bd),Bt(t,i)}}function l5(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;yd.set(i),n.uniformMatrix3fv(this.addr,!1,yd),Bt(t,i)}}function c5(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;xd.set(i),n.uniformMatrix4fv(this.addr,!1,xd),Bt(t,i)}}function h5(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function d5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function f5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function p5(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function g5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function _5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function v5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gd.compareFunction=l1,r=gd):r=S1,t.setTexture2D(e||r,s)}function x5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||E1,s)}function y5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||T1,s)}function b5(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||w1,s)}function M5(n){switch(n){case 5126:return i5;case 35664:return s5;case 35665:return r5;case 35666:return a5;case 35674:return o5;case 35675:return l5;case 35676:return c5;case 5124:case 35670:return h5;case 35667:case 35671:return u5;case 35668:case 35672:return d5;case 35669:case 35673:return f5;case 5125:return p5;case 36294:return m5;case 36295:return g5;case 36296:return _5;case 35678:case 36198:case 36298:case 36306:case 35682:return v5;case 35679:case 36299:case 36307:return x5;case 35680:case 36300:case 36308:case 36293:return y5;case 36289:case 36303:case 36311:case 36292:return b5}}function S5(n,e){n.uniform1fv(this.addr,e)}function w5(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function E5(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function T5(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function A5(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function R5(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function C5(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P5(n,e){n.uniform1iv(this.addr,e)}function D5(n,e){n.uniform2iv(this.addr,e)}function L5(n,e){n.uniform3iv(this.addr,e)}function I5(n,e){n.uniform4iv(this.addr,e)}function N5(n,e){n.uniform1uiv(this.addr,e)}function U5(n,e){n.uniform2uiv(this.addr,e)}function F5(n,e){n.uniform3uiv(this.addr,e)}function O5(n,e){n.uniform4uiv(this.addr,e)}function k5(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||S1,r[a])}function z5(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||E1,r[a])}function B5(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||T1,r[a])}function V5(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||w1,r[a])}function H5(n){switch(n){case 5126:return S5;case 35664:return w5;case 35665:return E5;case 35666:return T5;case 35674:return A5;case 35675:return R5;case 35676:return C5;case 5124:case 35670:return P5;case 35667:case 35671:return D5;case 35668:case 35672:return L5;case 35669:case 35673:return I5;case 5125:return N5;case 36294:return U5;case 36295:return F5;case 36296:return O5;case 35678:case 36198:case 36298:case 36306:case 35682:return k5;case 35679:case 36299:case 36307:return z5;case 35680:case 36300:case 36308:case 36293:return B5;case 36289:case 36303:case 36311:case 36292:return V5}}class G5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M5(t.type)}}class $5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H5(t.type)}}class W5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Md(n,e){n.seq.push(e),n.map[e.id]=e}function X5(n,e,t){const i=n.name,s=i.length;for(bc.lastIndex=0;;){const r=bc.exec(i),a=bc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Md(t,c===void 0?new G5(o,n,e):new $5(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new W5(o),Md(t,u)),t=u}}}class Yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);X5(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Sd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q5=37297;let j5=0;function K5(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const wd=new Je;function Y5(n){lt._getMatrix(wd,lt.workingColorSpace,n);const e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Qo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ed(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+K5(n.getShaderSource(e),o)}else return r}function Z5(n,e){const t=Y5(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J5(n,e){let t;switch(e){case Jm:t="Linear";break;case Qm:t="Reinhard";break;case e2:t="Cineon";break;case t2:t="ACESFilmic";break;case i2:t="AgX";break;case s2:t="Neutral";break;case n2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qa=new D;function Q5(){lt.getLuminanceCoefficients(qa);const n=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function t_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function n_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Gr(n){return n!==""}function Td(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(n){return n.replace(i_,r_)}const s_=new Map;function r_(n,e){let t=Qe[e];if(t===void 0){const i=s_.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace(a_,o_)}function o_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function l_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function c_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===pr&&(e="ENVMAP_MODE_REFRACTION"),e}function u_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ym:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function d_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function f_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=l_(t),c=c_(t),h=h_(t),u=u_(t),d=d_(t),f=e_(t),g=t_(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Gi?J5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Z5("linearToOutputTexel",t.outputColorSpace),Q5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Yh(a),a=Td(a,t),a=Ad(a,t),o=Yh(o),o=Td(o,t),o=Ad(o,t),a=Rd(a),o=Rd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+a,y=v+p+o,E=Sd(s,s.VERTEX_SHADER,x),M=Sd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(E)||"",z=s.getShaderInfoLog(M)||"",W=I.trim(),G=F.trim(),Y=z.trim();let k=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,M);else{const Z=Ed(s,E,"vertex"),de=Ed(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+Z+`
`+de)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Y==="")&&(ee=!1);ee&&(P.diagnostics={runnable:k,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(E),s.deleteShader(M),L=new Yo(s,_),b=n_(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,q5)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j5++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new g_(e),t.set(e,i)),i}}class g_{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}}function __(n,e,t,i,s,r,a){const o=new Tu,l=new m_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,I,F){const z=I.fog,W=F.geometry,G=b.isMeshStandardMaterial?I.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),k=Y&&Y.mapping===_l?Y.image.height:null,ee=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=Z!==void 0?Z.length:0;let Ae=0;W.morphAttributes.position!==void 0&&(Ae=1),W.morphAttributes.normal!==void 0&&(Ae=2),W.morphAttributes.color!==void 0&&(Ae=3);let Le,Ve,ke,j;if(ee){const nt=jn[ee];Le=nt.vertexShader,Ve=nt.fragmentShader}else Le=b.vertexShader,Ve=b.fragmentShader,l.update(b),ke=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const H=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),U=F.isInstancedMesh===!0,se=F.isBatchedMesh===!0,Me=!!b.map,fe=!!b.matcap,R=!!Y,Se=!!b.aoMap,pe=!!b.lightMap,he=!!b.bumpMap,ce=!!b.normalMap,Ye=!!b.displacementMap,xe=!!b.emissiveMap,Ne=!!b.metalnessMap,Et=!!b.roughnessMap,Tt=b.anisotropy>0,C=b.clearcoat>0,w=b.dispersion>0,V=b.iridescence>0,K=b.sheen>0,ne=b.transmission>0,q=Tt&&!!b.anisotropyMap,Ee=C&&!!b.clearcoatMap,ue=C&&!!b.clearcoatNormalMap,be=C&&!!b.clearcoatRoughnessMap,Ie=V&&!!b.iridescenceMap,le=V&&!!b.iridescenceThicknessMap,ye=K&&!!b.sheenColorMap,Pe=K&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,ge=!!b.specularColorMap,Ze=!!b.specularIntensityMap,N=ne&&!!b.transmissionMap,oe=ne&&!!b.thicknessMap,me=!!b.gradientMap,Te=!!b.alphaMap,re=b.alphaTest>0,Q=!!b.alphaHash,De=!!b.extensions;let Ke=Gi;b.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const ut={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Le,fragmentShader:Ve,defines:b.defines,customVertexShaderID:ke,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:se,batchingColor:se&&F._colorsTexture!==null,instancing:U,instancingColor:U&&F.instanceColor!==null,instancingMorph:U&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:mr,alphaToCoverage:!!b.alphaToCoverage,map:Me,matcap:fe,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:k,aoMap:Se,lightMap:pe,bumpMap:he,normalMap:ce,displacementMap:d&&Ye,emissiveMap:xe,normalMapObjectSpace:ce&&b.normalMapType===l2,normalMapTangentSpace:ce&&b.normalMapType===o1,metalnessMap:Ne,roughnessMap:Et,anisotropy:Tt,anisotropyMap:q,clearcoat:C,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:be,dispersion:w,iridescence:V,iridescenceMap:Ie,iridescenceThicknessMap:le,sheen:K,sheenColorMap:ye,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:ge,specularIntensityMap:Ze,transmission:ne,transmissionMap:N,thicknessMap:oe,gradientMap:me,opaque:b.transparent===!1&&b.blending===fs&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:re,alphaHash:Q,combine:b.combine,mapUv:Me&&_(b.map.channel),aoMapUv:Se&&_(b.aoMap.channel),lightMapUv:pe&&_(b.lightMap.channel),bumpMapUv:he&&_(b.bumpMap.channel),normalMapUv:ce&&_(b.normalMap.channel),displacementMapUv:Ye&&_(b.displacementMap.channel),emissiveMapUv:xe&&_(b.emissiveMap.channel),metalnessMapUv:Ne&&_(b.metalnessMap.channel),roughnessMapUv:Et&&_(b.roughnessMap.channel),anisotropyMapUv:q&&_(b.anisotropyMap.channel),clearcoatMapUv:Ee&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(b.sheenRoughnessMap.channel),specularMapUv:Ue&&_(b.specularMap.channel),specularColorMapUv:ge&&_(b.specularColorMap.channel),specularIntensityMapUv:Ze&&_(b.specularIntensityMap.channel),transmissionMapUv:N&&_(b.transmissionMap.channel),thicknessMapUv:oe&&_(b.thicknessMap.channel),alphaMapUv:Te&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ce||Tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Me||Te),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Me&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rn,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(S,b),x(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const S=g[b.type];let P;if(S){const I=jn[S];P=k2.clone(I.uniforms)}else P=b.uniforms;return P}function E(b,S){let P;for(let I=0,F=h.length;I<F;I++){const z=h[I];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new f_(n,S,b,r),h.push(P)),P}function M(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:L}}function v_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function x_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||x_),i.length>1&&i.sort(d||Pd),s.length>1&&s.sort(d||Pd)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function y_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Dd,n.set(i,[a])):s>=r.length?(a=new Dd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function b_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function M_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let S_=0;function w_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function E_(n){const e=new b_,t=M_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new Mt,a=new Mt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,E=0,M=0,A=0;c.sort(w_);for(let b=0,S=c.length;b<S;b++){const P=c[b],I=P.color,F=P.intensity,z=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],F);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(F),G.distance=z,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[_]=G;const Y=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,Y.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[_]=Y.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=W,y++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(I).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==E||L.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+E-M,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=E,L.numLightProbes=A,i.version=S_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Ld(n){const e=new E_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function T_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ld(n),e.set(s,[o])):r>=a.length?(o=new Ld(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`;function C_(n,e,t){let i=new Au;const s=new Xe,r=new Xe,a=new gt,o=new K2({depthPacking:o2}),l=new Y2,c={},h=t.maxTextureSize,u={[qi]:an,[an]:qi,[Rn]:Rn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zf;let p=this.type;this.render=function(M,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Hi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==li&&this.type===li,z=p===li&&this.type!==li;for(let W=0,G=M.length;W<G;W++){const Y=M[W],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ee=k.getFrameExtents();if(s.multiply(ee),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y)),k.map===null||F===!0||z===!0){const de=this.type!==li?{minFilter:kn,magFilter:kn}:{};k.map!==null&&k.map.dispose(),k.map=new vs(s.x,s.y,de),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Z=k.getViewportCount();for(let de=0;de<Z;de++){const Ae=k.getViewport(de);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),I.viewport(a),k.updateMatrices(Y,de),i=k.getFrustum(),y(A,L,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===li&&v(k,L),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,P)};function v(M,A){const L=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vs(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,L,f,_,null)}function x(M,A,L,b){let S=null;const P=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=S.uuid,F=A.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let W=z[F];W===void 0&&(W=S.clone(),z[F]=W,A.addEventListener("dispose",E)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,b===li?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=L}return S}function y(M,A,L,b,S){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===li)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const F=e.update(M),z=M.material;if(Array.isArray(z)){const W=F.groups;for(let G=0,Y=W.length;G<Y;G++){const k=W[G],ee=z[k.materialIndex];if(ee&&ee.visible){const Z=x(M,ee,b,S);M.onBeforeShadow(n,M,A,L,F,Z,k),n.renderBufferDirect(L,null,F,Z,M,k),M.onAfterShadow(n,M,A,L,F,Z,k)}}}else if(z.visible){const W=x(M,z,b,S);M.onBeforeShadow(n,M,A,L,F,W,null),n.renderBufferDirect(L,null,F,W,M,null),M.onAfterShadow(n,M,A,L,F,W,null)}}const I=M.children;for(let F=0,z=I.length;F<z;F++)y(I[F],A,L,b,S)}function E(M){M.target.removeEventListener("dispose",E);for(const L in c){const b=c[L],S=M.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const P_={[lh]:ch,[hh]:fh,[uh]:ph,[dr]:dh,[ch]:lh,[fh]:hh,[ph]:uh,[dh]:dr};function D_(n,e){function t(){let N=!1;const oe=new gt;let me=null;const Te=new gt(0,0,0,0);return{setMask:function(re){me!==re&&!N&&(n.colorMask(re,re,re,re),me=re)},setLocked:function(re){N=re},setClear:function(re,Q,De,Ke,ut){ut===!0&&(re*=Ke,Q*=Ke,De*=Ke),oe.set(re,Q,De,Ke),Te.equals(oe)===!1&&(n.clearColor(re,Q,De,Ke),Te.copy(oe))},reset:function(){N=!1,me=null,Te.set(-1,0,0,0)}}}function i(){let N=!1,oe=!1,me=null,Te=null,re=null;return{setReversed:function(Q){if(oe!==Q){const De=e.get("EXT_clip_control");Q?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;const Ke=re;re=null,this.setClear(Ke)}},getReversed:function(){return oe},setTest:function(Q){Q?H(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(Q){me!==Q&&!N&&(n.depthMask(Q),me=Q)},setFunc:function(Q){if(oe&&(Q=P_[Q]),Te!==Q){switch(Q){case lh:n.depthFunc(n.NEVER);break;case ch:n.depthFunc(n.ALWAYS);break;case hh:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case uh:n.depthFunc(n.EQUAL);break;case dh:n.depthFunc(n.GEQUAL);break;case fh:n.depthFunc(n.GREATER);break;case ph:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=Q}},setLocked:function(Q){N=Q},setClear:function(Q){re!==Q&&(oe&&(Q=1-Q),n.clearDepth(Q),re=Q)},reset:function(){N=!1,me=null,Te=null,re=null,oe=!1}}}function s(){let N=!1,oe=null,me=null,Te=null,re=null,Q=null,De=null,Ke=null,ut=null;return{setTest:function(nt){N||(nt?H(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(nt){oe!==nt&&!N&&(n.stencilMask(nt),oe=nt)},setFunc:function(nt,Cn,ln){(me!==nt||Te!==Cn||re!==ln)&&(n.stencilFunc(nt,Cn,ln),me=nt,Te=Cn,re=ln)},setOp:function(nt,Cn,ln){(Q!==nt||De!==Cn||Ke!==ln)&&(n.stencilOp(nt,Cn,ln),Q=nt,De=Cn,Ke=ln)},setLocked:function(nt){N=nt},setClear:function(nt){ut!==nt&&(n.clearStencil(nt),ut=nt)},reset:function(){N=!1,oe=null,me=null,Te=null,re=null,Q=null,De=null,Ke=null,ut=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,E=null,M=null,A=new qe(0,0,0),L=0,b=!1,S=null,P=null,I=null,F=null,z=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Y>=2);let ee=null,Z={};const de=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Le=new gt().fromArray(de),Ve=new gt().fromArray(Ae);function ke(N,oe,me,Te){const re=new Uint8Array(4),Q=n.createTexture();n.bindTexture(N,Q),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<me;De++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(oe+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Q}const j={};j[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(n.DEPTH_TEST),a.setFunc(dr),he(!1),ce(A0),H(n.CULL_FACE),Se(Hi);function H(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function J(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function U(N,oe){return u[N]!==oe?(n.bindFramebuffer(N,oe),u[N]=oe,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oe),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function se(N,oe){let me=f,Te=!1;if(N){me=d.get(oe),me===void 0&&(me=[],d.set(oe,me));const re=N.textures;if(me.length!==re.length||me[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,De=re.length;Q<De;Q++)me[Q]=n.COLOR_ATTACHMENT0+Q;me.length=re.length,Te=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Te=!0);Te&&n.drawBuffers(me)}function Me(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const fe={[os]:n.FUNC_ADD,[Im]:n.FUNC_SUBTRACT,[Nm]:n.FUNC_REVERSE_SUBTRACT};fe[Um]=n.MIN,fe[Fm]=n.MAX;const R={[Om]:n.ZERO,[km]:n.ONE,[zm]:n.SRC_COLOR,[ah]:n.SRC_ALPHA,[Wm]:n.SRC_ALPHA_SATURATE,[Gm]:n.DST_COLOR,[Vm]:n.DST_ALPHA,[Bm]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[$m]:n.ONE_MINUS_DST_COLOR,[Hm]:n.ONE_MINUS_DST_ALPHA,[Xm]:n.CONSTANT_COLOR,[qm]:n.ONE_MINUS_CONSTANT_COLOR,[jm]:n.CONSTANT_ALPHA,[Km]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(N,oe,me,Te,re,Q,De,Ke,ut,nt){if(N===Hi){_===!0&&(J(n.BLEND),_=!1);return}if(_===!1&&(H(n.BLEND),_=!0),N!==Lm){if(N!==m||nt!==b){if((p!==os||y!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,y=os),nt)switch(N){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.ONE,n.ONE);break;case R0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case R0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,x=null,E=null,M=null,A.set(0,0,0),L=0,m=N,b=nt}return}re=re||oe,Q=Q||me,De=De||Te,(oe!==p||re!==y)&&(n.blendEquationSeparate(fe[oe],fe[re]),p=oe,y=re),(me!==v||Te!==x||Q!==E||De!==M)&&(n.blendFuncSeparate(R[me],R[Te],R[Q],R[De]),v=me,x=Te,E=Q,M=De),(Ke.equals(A)===!1||ut!==L)&&(n.blendColor(Ke.r,Ke.g,Ke.b,ut),A.copy(Ke),L=ut),m=N,b=!1}function pe(N,oe){N.side===Rn?J(n.CULL_FACE):H(n.CULL_FACE);let me=N.side===an;oe&&(me=!me),he(me),N.blending===fs&&N.transparent===!1?Se(Hi):Se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Te=N.stencilWrite;o.setTest(Te),Te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function ce(N){N!==Cm?(H(n.CULL_FACE),N!==P&&(N===A0?n.cullFace(n.BACK):N===Pm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),P=N}function Ye(N){N!==I&&(G&&n.lineWidth(N),I=N)}function xe(N,oe,me){N?(H(n.POLYGON_OFFSET_FILL),(F!==oe||z!==me)&&(n.polygonOffset(oe,me),F=oe,z=me)):J(n.POLYGON_OFFSET_FILL)}function Ne(N){N?H(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function Et(N){N===void 0&&(N=n.TEXTURE0+W-1),ee!==N&&(n.activeTexture(N),ee=N)}function Tt(N,oe,me){me===void 0&&(ee===null?me=n.TEXTURE0+W-1:me=ee);let Te=Z[me];Te===void 0&&(Te={type:void 0,texture:void 0},Z[me]=Te),(Te.type!==N||Te.texture!==oe)&&(ee!==me&&(n.activeTexture(me),ee=me),n.bindTexture(N,oe||j[N]),Te.type=N,Te.texture=oe)}function C(){const N=Z[ee];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){Le.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function Pe(N){Ve.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ve.copy(N))}function Ue(N,oe){let me=c.get(oe);me===void 0&&(me=new WeakMap,c.set(oe,me));let Te=me.get(N);Te===void 0&&(Te=n.getUniformBlockIndex(oe,N.name),me.set(N,Te))}function ge(N,oe){const Te=c.get(oe).get(N);l.get(oe)!==Te&&(n.uniformBlockBinding(oe,Te,N.__bindingPointIndex),l.set(oe,Te))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,Z={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,E=null,M=null,A=new qe(0,0,0),L=0,b=!1,S=null,P=null,I=null,F=null,z=null,Le.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:J,bindFramebuffer:U,drawBuffers:se,useProgram:Me,setBlending:Se,setMaterial:pe,setFlipSided:he,setCullFace:ce,setLineWidth:Ye,setPolygonOffset:xe,setScissorTest:Ne,activeTexture:Et,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:Ie,texImage3D:le,updateUBOMapping:Ue,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:be,texSubImage2D:K,texSubImage3D:ne,compressedTexSubImage2D:q,compressedTexSubImage3D:Ee,scissor:ye,viewport:Pe,reset:Ze}}function L_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return f?new OffscreenCanvas(C,w):tl("canvas")}function _(C,w,V){let K=1;const ne=Tt(C);if((ne.width>V||ne.height>V)&&(K=V/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*ne.width),Ee=Math.floor(K*ne.height);u===void 0&&(u=g(q,Ee));const ue=w?g(q,Ee):u;return ue.width=q,ue.height=Ee,ue.getContext("2d").drawImage(C,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+Ee+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,w,V,K,ne=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=w;if(w===n.RED&&(V===n.FLOAT&&(q=n.R32F),V===n.HALF_FLOAT&&(q=n.R16F),V===n.UNSIGNED_BYTE&&(q=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.R8UI),V===n.UNSIGNED_SHORT&&(q=n.R16UI),V===n.UNSIGNED_INT&&(q=n.R32UI),V===n.BYTE&&(q=n.R8I),V===n.SHORT&&(q=n.R16I),V===n.INT&&(q=n.R32I)),w===n.RG&&(V===n.FLOAT&&(q=n.RG32F),V===n.HALF_FLOAT&&(q=n.RG16F),V===n.UNSIGNED_BYTE&&(q=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RG8UI),V===n.UNSIGNED_SHORT&&(q=n.RG16UI),V===n.UNSIGNED_INT&&(q=n.RG32UI),V===n.BYTE&&(q=n.RG8I),V===n.SHORT&&(q=n.RG16I),V===n.INT&&(q=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(q=n.RGB16UI),V===n.UNSIGNED_INT&&(q=n.RGB32UI),V===n.BYTE&&(q=n.RGB8I),V===n.SHORT&&(q=n.RGB16I),V===n.INT&&(q=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),V===n.UNSIGNED_INT&&(q=n.RGBA32UI),V===n.BYTE&&(q=n.RGBA8I),V===n.SHORT&&(q=n.RGBA16I),V===n.INT&&(q=n.RGBA32I)),w===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),w===n.RGBA){const Ee=ne?Qo:lt.getTransfer(K);V===n.FLOAT&&(q=n.RGBA32F),V===n.HALF_FLOAT&&(q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(q=Ee===pt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(C,w){let V;return C?w===null||w===gs||w===Yr?V=n.DEPTH24_STENCIL8:w===ui?V=n.DEPTH32F_STENCIL8:w===Kr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gs||w===Yr?V=n.DEPTH_COMPONENT24:w===ui?V=n.DEPTH_COMPONENT32F:w===Kr&&(V=n.DEPTH_COMPONENT16),V}function E(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==Xt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function M(C){const w=C.target;w.removeEventListener("dispose",M),L(w),w.isVideoTexture&&h.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),S(w)}function L(C){const w=i.get(C);if(w.__webglInit===void 0)return;const V=C.source,K=d.get(V);if(K){const ne=K[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(C),Object.keys(K).length===0&&d.delete(V)}i.remove(C)}function b(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const V=C.source,K=d.get(V);delete K[w.__cacheKey],a.memory.textures--}function S(C){const w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let ne=0;ne<w.__webglFramebuffer[K].length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[K][ne]);else n.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)n.deleteFramebuffer(w.__webglFramebuffer[K]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,ne=V.length;K<ne;K++){const q=i.get(V[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(V[K])}i.remove(C)}let P=0;function I(){P=0}function F(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function W(C,w){const V=i.get(C);if(C.isVideoTexture&&Ne(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,C,w);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function G(C,w){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){j(V,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function Y(C,w){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){j(V,C,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function k(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){H(V,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const ee={[_h]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[vh]:n.MIRRORED_REPEAT},Z={[kn]:n.NEAREST,[r2]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},de={[c2]:n.NEVER,[m2]:n.ALWAYS,[h2]:n.LESS,[l1]:n.LEQUAL,[u2]:n.EQUAL,[p2]:n.GEQUAL,[d2]:n.GREATER,[f2]:n.NOTEQUAL};function Ae(C,w){if(w.type===ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Xt||w.magFilter===Gl||w.magFilter===Sa||w.magFilter===Fi||w.minFilter===Xt||w.minFilter===Gl||w.minFilter===Sa||w.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ee[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ee[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ee[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Z[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kn||w.minFilter!==Sa&&w.minFilter!==Fi||w.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Le(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",M));const K=w.source;let ne=d.get(K);ne===void 0&&(ne={},d.set(K,ne));const q=z(w);if(q!==C.__cacheKey){ne[q]===void 0&&(ne[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[q].usedTimes++;const Ee=ne[C.__cacheKey];Ee!==void 0&&(ne[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(w)),C.__cacheKey=q,C.__webglTexture=ne[q].texture}return V}function Ve(C,w,V){return Math.floor(Math.floor(C/V)/w)}function ke(C,w,V,K){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,V,K,w.data);else{q.sort((le,ye)=>le.start-ye.start);let Ee=0;for(let le=1;le<q.length;le++){const ye=q[Ee],Pe=q[le],Ue=ye.start+ye.count,ge=Ve(Pe.start,w.width,4),Ze=Ve(ye.start,w.width,4);Pe.start<=Ue+1&&ge===Ze&&Ve(Pe.start+Pe.count-1,w.width,4)===ge?ye.count=Math.max(ye.count,Pe.start+Pe.count-ye.start):(++Ee,q[Ee]=Pe)}q.length=Ee+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let le=0,ye=q.length;le<ye;le++){const Pe=q[le],Ue=Math.floor(Pe.start/4),ge=Math.ceil(Pe.count/4),Ze=Ue%w.width,N=Math.floor(Ue/w.width),oe=ge,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Ze,N,oe,me,V,K,w.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function j(C,w,V){let K=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=n.TEXTURE_3D);const ne=Le(C,w),q=w.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+V);const Ee=i.get(q);if(q.version!==Ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const ue=lt.getPrimaries(lt.workingColorSpace),be=w.colorSpace===Ui?null:lt.getPrimaries(w.colorSpace),Ie=w.colorSpace===Ui||ue===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let le=_(w.image,!1,s.maxTextureSize);le=Et(w,le);const ye=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type);let Ue=x(w.internalFormat,ye,Pe,w.colorSpace,w.isVideoTexture);Ae(K,w);let ge;const Ze=w.mipmaps,N=w.isVideoTexture!==!0,oe=Ee.__version===void 0||ne===!0,me=q.dataReady,Te=E(w,le);if(w.isDepthTexture)Ue=y(w.format===Jr,w.type),oe&&(N?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,Pe,null));else if(w.isDataTexture)if(Ze.length>0){N&&oe&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,Ze[0].width,Ze[0].height);for(let re=0,Q=Ze.length;re<Q;re++)ge=Ze[re],N?me&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,ye,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,re,Ue,ge.width,ge.height,0,ye,Pe,ge.data);w.generateMipmaps=!1}else N?(oe&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,le.width,le.height),me&&ke(w,le,ye,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,Pe,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,Ze[0].width,Ze[0].height,le.depth);for(let re=0,Q=Ze.length;re<Q;re++)if(ge=Ze[re],w.format!==On)if(ye!==null)if(N){if(me)if(w.layerUpdates.size>0){const De=ld(ge.width,ge.height,w.format,w.type);for(const Ke of w.layerUpdates){const ut=ge.data.subarray(Ke*De/ge.data.BYTES_PER_ELEMENT,(Ke+1)*De/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ke,ge.width,ge.height,1,ye,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,le.depth,ye,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ue,ge.width,ge.height,le.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,le.depth,ye,Pe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ue,ge.width,ge.height,le.depth,0,ye,Pe,ge.data)}else{N&&oe&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,Ze[0].width,Ze[0].height);for(let re=0,Q=Ze.length;re<Q;re++)ge=Ze[re],w.format!==On?ye!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?me&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,ye,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,re,Ue,ge.width,ge.height,0,ye,Pe,ge.data)}else if(w.isDataArrayTexture)if(N){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,le.width,le.height,le.depth),me)if(w.layerUpdates.size>0){const re=ld(le.width,le.height,w.format,w.type);for(const Q of w.layerUpdates){const De=le.data.subarray(Q*re/le.data.BYTES_PER_ELEMENT,(Q+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,le.width,le.height,1,ye,Pe,De)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Pe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,ye,Pe,le.data);else if(w.isData3DTexture)N?(oe&&t.texStorage3D(n.TEXTURE_3D,Te,Ue,le.width,le.height,le.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Pe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,ye,Pe,le.data);else if(w.isFramebufferTexture){if(oe)if(N)t.texStorage2D(n.TEXTURE_2D,Te,Ue,le.width,le.height);else{let re=le.width,Q=le.height;for(let De=0;De<Te;De++)t.texImage2D(n.TEXTURE_2D,De,Ue,re,Q,0,ye,Pe,null),re>>=1,Q>>=1}}else if(Ze.length>0){if(N&&oe){const re=Tt(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ue,re.width,re.height)}for(let re=0,Q=Ze.length;re<Q;re++)ge=Ze[re],N?me&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye,Pe,ge):t.texImage2D(n.TEXTURE_2D,re,Ue,ye,Pe,ge);w.generateMipmaps=!1}else if(N){if(oe){const re=Tt(le);t.texStorage2D(n.TEXTURE_2D,Te,Ue,re.width,re.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Pe,le)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ye,Pe,le);m(w)&&p(K),Ee.__version=q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function H(C,w,V){if(w.image.length!==6)return;const K=Le(C,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const q=i.get(ne);if(ne.version!==q.__version||K===!0){t.activeTexture(n.TEXTURE0+V);const Ee=lt.getPrimaries(lt.workingColorSpace),ue=w.colorSpace===Ui?null:lt.getPrimaries(w.colorSpace),be=w.colorSpace===Ui||Ee===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let Q=0;Q<6;Q++)!Ie&&!le?ye[Q]=_(w.image[Q],!0,s.maxCubemapSize):ye[Q]=le?w.image[Q].image:w.image[Q],ye[Q]=Et(w,ye[Q]);const Pe=ye[0],Ue=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Ze=x(w.internalFormat,Ue,ge,w.colorSpace),N=w.isVideoTexture!==!0,oe=q.__version===void 0||K===!0,me=ne.dataReady;let Te=E(w,Pe);Ae(n.TEXTURE_CUBE_MAP,w);let re;if(Ie){N&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ze,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){re=ye[Q].mipmaps;for(let De=0;De<re.length;De++){const Ke=re[De];w.format!==On?Ue!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,0,0,Ke.width,Ke.height,Ue,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,Ze,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,0,0,Ke.width,Ke.height,Ue,ge,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,Ze,Ke.width,Ke.height,0,Ue,ge,Ke.data)}}}else{if(re=w.mipmaps,N&&oe){re.length>0&&Te++;const Q=Tt(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(le){N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye[Q].width,ye[Q].height,Ue,ge,ye[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,ye[Q].width,ye[Q].height,0,Ue,ge,ye[Q].data);for(let De=0;De<re.length;De++){const ut=re[De].image[Q].image;N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,0,0,ut.width,ut.height,Ue,ge,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,Ze,ut.width,ut.height,0,Ue,ge,ut.data)}}else{N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,ge,ye[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,Ue,ge,ye[Q]);for(let De=0;De<re.length;De++){const Ke=re[De];N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,0,0,Ue,ge,Ke.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,Ze,Ue,ge,Ke.image[Q])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),q.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function J(C,w,V,K,ne,q){const Ee=r.convert(V.format,V.colorSpace),ue=r.convert(V.type),be=x(V.internalFormat,Ee,ue,V.colorSpace),Ie=i.get(w),le=i.get(V);if(le.__renderTarget=w,!Ie.__hasExternalTextures){const ye=Math.max(1,w.width>>q),Pe=Math.max(1,w.height>>q);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,q,be,ye,Pe,w.depth,0,Ee,ue,null):t.texImage2D(ne,q,be,ye,Pe,0,Ee,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ne,le.__webglTexture,0,Ye(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ne,le.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(C,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const K=w.depthTexture,ne=K&&K.isDepthTexture?K.type:null,q=y(w.stencilBuffer,ne),Ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Ye(w);xe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,q,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,q,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,C)}else{const K=w.textures;for(let ne=0;ne<K.length;ne++){const q=K[ne],Ee=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),be=x(q.internalFormat,Ee,ue,q.colorSpace),Ie=Ye(w);V&&xe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,be,w.width,w.height):xe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,be,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,be,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ne=K.__webglTexture,q=Ye(w);if(w.depthTexture.format===Zr)xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Jr)xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Me(C){const w=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=K}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?se(w.__webglFramebuffer[0],C):se(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=n.createRenderbuffer(),U(w.__webglDepthbuffer[K],C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),U(w.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(C,w,V){const K=i.get(C);w!==void 0&&J(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Me(C)}function R(C){const w=C.texture,V=i.get(C),K=i.get(w);C.addEventListener("dispose",A);const ne=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=w.version,a.memory.textures++),q){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let be=0;be<w.mipmaps.length;be++)V.__webglFramebuffer[ue][be]=n.createFramebuffer()}else V.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)V.__webglFramebuffer[ue]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ue=0,be=ne.length;ue<be;ue++){const Ie=i.get(ne[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&xe(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const be=ne[ue];V.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ie=r.convert(be.format,be.colorSpace),le=r.convert(be.type),ye=x(be.internalFormat,Ie,le,be.colorSpace,C.isXRRenderTarget===!0),Pe=Ye(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ye,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),U(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)J(V.__webglFramebuffer[ue][be],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be);else J(V.__webglFramebuffer[ue],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,be=ne.length;ue<be;ue++){const Ie=ne[ue],le=i.get(Ie);let ye=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,le.__webglTexture),Ae(ye,Ie),J(V.__webglFramebuffer,C,Ie,n.COLOR_ATTACHMENT0+ue,ye,0),m(Ie)&&p(ye)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),Ae(ue,w),w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)J(V.__webglFramebuffer[be],C,w,n.COLOR_ATTACHMENT0,ue,be);else J(V.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,ue,0);m(w)&&p(ue),t.unbindTexture()}C.depthBuffer&&Me(C)}function Se(C){const w=C.textures;for(let V=0,K=w.length;V<K;V++){const ne=w[V];if(m(ne)){const q=v(C),Ee=i.get(ne).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const pe=[],he=[];function ce(C){if(C.samples>0){if(xe(C)===!1){const w=C.textures,V=C.width,K=C.height;let ne=n.COLOR_BUFFER_BIT;const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(C),ue=w.length>1;if(ue)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const be=C.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const le=i.get(w[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,ne,n.NEAREST),l===!0&&(pe.length=0,he.length=0,pe.push(n.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(q),he.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const le=i.get(w[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ye(C){return Math.min(s.maxSamples,C.samples)}function xe(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(C){const w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Et(C,w){const V=C.colorSpace,K=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==mr&&V!==Ui&&(lt.getTransfer(V)===pt?(K!==On||ne!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=fe,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=J,this.useMultisampledRTT=xe}function I_(n,e){function t(i,s=Ui){let r;const a=lt.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===yu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===t1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===n1)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qf)return n.BYTE;if(i===e1)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===xu)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===ca)return n.HALF_FLOAT;if(i===i1)return n.ALPHA;if(i===s1)return n.RGB;if(i===On)return n.RGBA;if(i===Zr)return n.DEPTH_COMPONENT;if(i===Jr)return n.DEPTH_STENCIL;if(i===r1)return n.RED;if(i===Mu)return n.RED_INTEGER;if(i===a1)return n.RG;if(i===Su)return n.RG_INTEGER;if(i===wu)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===jo)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===yh||i===bh||i===Mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sh||i===wh||i===Eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sh||i===wh)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Eh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Th||i===Ah||i===Rh||i===Ch||i===Ph||i===Dh||i===Lh||i===Ih||i===Nh||i===Uh||i===Fh||i===Oh||i===kh||i===zh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Th)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ih)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bh||i===Vh||i===Hh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bh)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===$h||i===Wh||i===Xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new x1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mn({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends bs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new F_,p={},v=t.getContextAttributes();let x=null,y=null;const E=[],M=[],A=new Xe;let L=null;const b=new yn;b.viewport=new gt;const S=new yn;S.viewport=new gt;const P=[b,S],I=new n3;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let H=E[j];return H===void 0&&(H=new uc,E[j]=H),H.getTargetRaySpace()},this.getControllerGrip=function(j){let H=E[j];return H===void 0&&(H=new uc,E[j]=H),H.getGripSpace()},this.getHand=function(j){let H=E[j];return H===void 0&&(H=new uc,E[j]=H),H.getHandSpace()};function W(j){const H=M.indexOf(j.inputSource);if(H===-1)return;const J=E[H];J!==void 0&&(J.update(j.inputSource,j.frame,c||a),J.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let j=0;j<E.length;j++){const H=M[j];H!==null&&(M[j]=null,E[j].disconnect(H))}F=null,z=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(x),f=null,d=null,u=null,s=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,U=null,se=null;v.depth&&(se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?Jr:Zr,U=v.stencil?Yr:gs);const Me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new vs(d.textureWidth,d.textureHeight,{format:On,type:Qn,depthTexture:new v1(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new vs(f.framebufferWidth,f.framebufferHeight,{format:On,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(j){for(let H=0;H<j.removed.length;H++){const J=j.removed[H],U=M.indexOf(J);U>=0&&(M[U]=null,E[U].disconnect(J))}for(let H=0;H<j.added.length;H++){const J=j.added[H];let U=M.indexOf(J);if(U===-1){for(let Me=0;Me<E.length;Me++)if(Me>=M.length){M.push(J),U=Me;break}else if(M[Me]===null){M[Me]=J,U=Me;break}if(U===-1)break}const se=E[U];se&&se.connect(J)}}const k=new D,ee=new D;function Z(j,H,J){k.setFromMatrixPosition(H.matrixWorld),ee.setFromMatrixPosition(J.matrixWorld);const U=k.distanceTo(ee),se=H.projectionMatrix.elements,Me=J.projectionMatrix.elements,fe=se[14]/(se[10]-1),R=se[14]/(se[10]+1),Se=(se[9]+1)/se[5],pe=(se[9]-1)/se[5],he=(se[8]-1)/se[0],ce=(Me[8]+1)/Me[0],Ye=fe*he,xe=fe*ce,Ne=U/(-he+ce),Et=Ne*-he;if(H.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Et),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),se[10]===-1)j.projectionMatrix.copy(H.projectionMatrix),j.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const Tt=fe+Ne,C=R+Ne,w=Ye-Et,V=xe+(U-Et),K=Se*R/C*Tt,ne=pe*R/C*Tt;j.projectionMatrix.makePerspective(w,V,K,ne,Tt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,H){H===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(H.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let H=j.near,J=j.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(J=m.depthFar)),I.near=S.near=b.near=H,I.far=S.far=b.far=J,(F!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,z=I.far),I.layers.mask=j.layers.mask|6,b.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const U=j.parent,se=I.cameras;de(I,U);for(let Me=0;Me<se.length;Me++)de(se[Me],U);se.length===2?Z(I,b,S):I.projectionMatrix.copy(b.projectionMatrix),Ae(j,I,U)};function Ae(j,H,J){J===null?j.matrix.copy(H.matrixWorld):(j.matrix.copy(J.matrixWorld),j.matrix.invert(),j.matrix.multiply(H.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(H.projectionMatrix),j.projectionMatrixInverse.copy(H.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return p[j]};let Le=null;function Ve(j,H){if(h=H.getViewerPose(c||a),g=H,h!==null){const J=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let U=!1;J.length!==I.cameras.length&&(I.cameras.length=0,U=!0);for(let R=0;R<J.length;R++){const Se=J[R];let pe=null;if(f!==null)pe=f.getViewport(Se);else{const ce=u.getViewSubImage(d,Se);pe=ce.viewport,R===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let he=P[R];he===void 0&&(he=new yn,he.layers.enable(R),he.viewport=new gt,P[R]=he),he.matrix.fromArray(Se.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Se.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(pe.x,pe.y,pe.width,pe.height),R===0&&(I.matrix.copy(he.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),U===!0&&I.cameras.push(he)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const R=u.getDepthInformation(J[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(se&&se.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let R=0;R<J.length;R++){const Se=J[R].camera;if(Se){let pe=p[Se];pe||(pe=new x1,p[Se]=pe);const he=u.getCameraImage(Se);pe.sourceTexture=he}}}}for(let J=0;J<E.length;J++){const U=M[J],se=E[J];U!==null&&se!==void 0&&se.update(U,H,c||a)}Le&&Le(j,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}const ke=new M1;ke.setAnimationLoop(Ve),this.setAnimationLoop=function(j){Le=j},this.dispose=function(){}}}const es=new ei,k_=new Mt;function z_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,p1(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,es.copy(y),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(es)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B_(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(v,E);const M=e.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){const x=u();v.__bindingPointIndex=x;const y=n.createBuffer(),E=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],y=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,A=y.length;M<A;M++){const L=Array.isArray(y[M])?y[M]:[y[M]];for(let b=0,S=L.length;b<S;b++){const P=L[b];if(f(P,M,b,E)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let W=0;W<F.length;W++){const G=F[W],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,I+z,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,x,y,E){const M=v.value,A=x+"_"+y;if(E[A]===void 0)return typeof M=="number"||typeof M=="boolean"?E[A]=M:E[A]=M.clone(),!0;{const L=E[A];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return E[A]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(v){const x=v.uniforms;let y=0;const E=16;for(let A=0,L=x.length;A<L;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,P=b.length;S<P;S++){const I=b[S],F=Array.isArray(I.value)?I.value:[I.value];for(let z=0,W=F.length;z<W;z++){const G=F[z],Y=_(G),k=y%E,ee=k%Y.boundary,Z=k+ee;y+=ee,Z!==0&&E-Z<Y.storage&&(y+=E-Z),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Y.storage}}}const M=y%E;return M>0&&(y+=E-M),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class V_{constructor(e={}){const{canvas:t=v2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=$t;let M=0,A=0,L=null,b=-1,S=null;const P=new gt,I=new gt;let F=null;const z=new qe(0);let W=0,G=t.width,Y=t.height,k=1,ee=null,Z=null;const de=new gt(0,0,G,Y),Ae=new gt(0,0,G,Y);let Le=!1;const Ve=new Au;let ke=!1,j=!1;const H=new Mt,J=new D,U=new gt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function fe(){return L===null?k:1}let R=i;function Se(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_u}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){const O="webgl2";if(R=Se(O,T),R===null)throw Se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pe,he,ce,Ye,xe,Ne,Et,Tt,C,w,V,K,ne,q,Ee,ue,be,Ie,le,ye,Pe,Ue,ge,Ze;function N(){pe=new Z4(R),pe.init(),Ue=new I_(R,pe),he=new $4(R,pe,e,Ue),ce=new D_(R,pe),he.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Ye=new e5(R),xe=new v_,Ne=new L_(R,pe,ce,xe,he,Ue,Ye),Et=new X4(y),Tt=new Y4(y),C=new a3(R),ge=new H4(R,C),w=new J4(R,C,Ye,ge),V=new n5(R,w,C,Ye),le=new t5(R,he,Ne),ue=new W4(xe),K=new __(y,Et,Tt,pe,he,ge,ue),ne=new z_(y,xe),q=new y_,Ee=new T_(pe),Ie=new V4(y,Et,Tt,ce,V,f,l),be=new C_(y,V,he),Ze=new B_(R,Ye,he,ce),ye=new G4(R,pe,Ye),Pe=new Q4(R,pe,Ye),Ye.programs=K.programs,y.capabilities=he,y.extensions=pe,y.properties=xe,y.renderLists=q,y.shadowMap=be,y.state=ce,y.info=Ye}N();const oe=new O_(y,R);this.xr=oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(G,Y,!1))},this.getSize=function(T){return T.set(G,Y)},this.setSize=function(T,O,X=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Y=O,t.width=Math.floor(T*k),t.height=Math.floor(O*k),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*k,Y*k).floor()},this.setDrawingBufferSize=function(T,O,X){G=T,Y=O,k=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,O,X,$){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,O,X,$),ce.viewport(P.copy(de).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,O,X,$){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,O,X,$),ce.scissor(I.copy(Ae).multiplyScalar(k).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(T){ce.setScissorTest(Le=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let $=0;if(T){let B=!1;if(L!==null){const ae=L.texture.format;B=ae===wu||ae===Su||ae===Mu}if(B){const ae=L.texture.type,_e=ae===Qn||ae===gs||ae===Kr||ae===Yr||ae===yu||ae===bu,Re=Ie.getClearColor(),we=Ie.getClearAlpha(),He=Re.r,je=Re.g,Oe=Re.b;_e?(g[0]=He,g[1]=je,g[2]=Oe,g[3]=we,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=He,_[1]=je,_[2]=Oe,_[3]=we,R.clearBufferiv(R.COLOR,0,_))}else $|=R.COLOR_BUFFER_BIT}O&&($|=R.DEPTH_BUFFER_BIT),X&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ie.dispose(),q.dispose(),Ee.dispose(),xe.dispose(),Et.dispose(),Tt.dispose(),V.dispose(),ge.dispose(),Ze.dispose(),K.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ln),oe.removeEventListener("sessionend",_a),qt.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Ye.autoReset,O=be.enabled,X=be.autoUpdate,$=be.needsUpdate,B=be.type;N(),Ye.autoReset=T,be.enabled=O,be.autoUpdate=X,be.needsUpdate=$,be.type=B}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){const O=T.target;O.removeEventListener("dispose",Q),De(O)}function De(T){Ke(T),xe.remove(T)}function Ke(T){const O=xe.get(T).programs;O!==void 0&&(O.forEach(function(X){K.releaseProgram(X)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,$,B,ae){O===null&&(O=se);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Re=Ar(T,O,X,$,B);ce.setMaterial($,_e);let we=X.index,He=1;if($.wireframe===!0){if(we=w.getWireframeAttribute(X),we===void 0)return;He=2}const je=X.drawRange,Oe=X.attributes.position;let et=je.start*He,rt=(je.start+je.count)*He;ae!==null&&(et=Math.max(et,ae.start*He),rt=Math.min(rt,(ae.start+ae.count)*He)),we!==null?(et=Math.max(et,0),rt=Math.min(rt,we.count)):Oe!=null&&(et=Math.max(et,0),rt=Math.min(rt,Oe.count));const St=rt-et;if(St<0||St===1/0)return;ge.setup(B,$,Re,X,we);let dt,st=ye;if(we!==null&&(dt=C.get(we),st=Pe,st.setIndex(dt)),B.isMesh)$.wireframe===!0?(ce.setLineWidth($.wireframeLinewidth*fe()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(B.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),ce.setLineWidth(ze*fe()),B.isLineSegments?st.setMode(R.LINES):B.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else B.isPoints?st.setMode(R.POINTS):B.isSprite&&st.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ze=B._multiDrawStarts,xt=B._multiDrawCounts,it=B._multiDrawCount,Qt=we?C.get(we).bytesPerElement:1,bi=xe.get($).currentProgram.getUniforms();for(let en=0;en<it;en++)bi.setValue(R,"_gl_DrawID",en),st.render(ze[en]/Qt,xt[en])}else if(B.isInstancedMesh)st.renderInstances(et,St,B.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xt=Math.min(X.instanceCount,ze);st.renderInstances(et,St,xt)}else st.render(et,St)};function ut(T,O,X){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,yi(T,O,X),T.side=qi,T.needsUpdate=!0,yi(T,O,X),T.side=Rn):yi(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),p=Ee.get(X),p.init(O),x.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const $=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ae=B.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){const Re=ae[_e];ut(Re,X,B),$.add(Re)}else ut(ae,X,B),$.add(ae)}),p=x.pop(),$},this.compileAsync=function(T,O,X=null){const $=this.compile(T,O,X);return new Promise(B=>{function ae(){if($.forEach(function(_e){xe.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){B(T);return}setTimeout(ae,10)}pe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let nt=null;function Cn(T){nt&&nt(T)}function ln(){qt.stop()}function _a(){qt.start()}const qt=new M1;qt.setAnimationLoop(Cn),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(T){nt=T,oe.setAnimationLoop(T),T===null?qt.stop():qt.start()},oe.addEventListener("sessionstart",ln),oe.addEventListener("sessionend",_a),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,L),p=Ee.get(T,x.length),p.init(O),x.push(p),H.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(H,Yn,O.reversedDepth),j=this.localClippingEnabled,ke=ue.init(this.clippingPlanes,j),m=q.get(T,v.length),m.init(),v.push(m),oe.enabled===!0&&oe.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Ss(ae,O,-1/0,y.sortObjects)}Ss(T,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ee,Z),Me=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Me&&Ie.addToRenderList(m,T),this.info.render.frame++,ke===!0&&ue.beginShadows();const X=p.state.shadowsArray;be.render(X,T,O),ke===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ae=O.cameras;if(B.length>0)for(let _e=0,Re=ae.length;_e<Re;_e++){const we=ae[_e];ws($,B,T,we)}Me&&Ie.render(T);for(let _e=0,Re=ae.length;_e<Re;_e++){const we=ae[_e];va(m,T,we,we.viewport)}}else B.length>0&&ws($,B,T,O),Me&&Ie.render(T),va(m,T,O);L!==null&&A===0&&(Ne.updateMultisampleRenderTarget(L),Ne.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,O),ge.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],ke===!0&&ue.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ss(T,O,X,$){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){$&&U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const _e=V.update(T),Re=T.material;Re.visible&&m.push(T,_e,Re,X,U.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const _e=V.update(T),Re=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),U.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),U.copy(_e.boundingSphere.center)),U.applyMatrix4(T.matrixWorld).applyMatrix4(H)),Array.isArray(Re)){const we=_e.groups;for(let He=0,je=we.length;He<je;He++){const Oe=we[He],et=Re[Oe.materialIndex];et&&et.visible&&m.push(T,_e,et,X,U.z,Oe)}}else Re.visible&&m.push(T,_e,Re,X,U.z,null)}}const ae=T.children;for(let _e=0,Re=ae.length;_e<Re;_e++)Ss(ae[_e],O,X,$)}function va(T,O,X,$){const B=T.opaque,ae=T.transmissive,_e=T.transparent;p.setupLightsView(X),ke===!0&&ue.setGlobalState(y.clippingPlanes,X),$&&ce.viewport(P.copy($)),B.length>0&&xi(B,O,X),ae.length>0&&xi(ae,O,X),_e.length>0&&xi(_e,O,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ws(T,O,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new vs(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?ca:Qn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ae=p.state.transmissionRenderTarget[$.id],_e=$.viewport||P;ae.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const Re=y.getRenderTarget(),we=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(ae),y.getClearColor(z),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Me&&Ie.render(X);const je=y.toneMapping;y.toneMapping=Gi;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ke===!0&&ue.setGlobalState(y.clippingPlanes,$),xi(T,X,$),Ne.updateMultisampleRenderTarget(ae),Ne.updateRenderTargetMipmap(ae),pe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let rt=0,St=O.length;rt<St;rt++){const dt=O[rt],st=dt.object,ze=dt.geometry,xt=dt.material,it=dt.group;if(xt.side===Rn&&st.layers.test($.layers)){const Qt=xt.side;xt.side=an,xt.needsUpdate=!0,Er(st,X,$,ze,xt,it),xt.side=Qt,xt.needsUpdate=!0,et=!0}}et===!0&&(Ne.updateMultisampleRenderTarget(ae),Ne.updateRenderTargetMipmap(ae))}y.setRenderTarget(Re,we,He),y.setClearColor(z,W),Oe!==void 0&&($.viewport=Oe),y.toneMapping=je}function xi(T,O,X){const $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ae=T.length;B<ae;B++){const _e=T[B],Re=_e.object,we=_e.geometry,He=_e.group;let je=_e.material;je.allowOverride===!0&&$!==null&&(je=$),Re.layers.test(X.layers)&&Er(Re,O,X,we,je,He)}}function Er(T,O,X,$,B,ae){T.onBeforeRender(y,O,X,$,B,ae),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,O,X,$,T,ae),B.transparent===!0&&B.side===Rn&&B.forceSinglePass===!1?(B.side=an,B.needsUpdate=!0,y.renderBufferDirect(X,O,$,B,T,ae),B.side=qi,B.needsUpdate=!0,y.renderBufferDirect(X,O,$,B,T,ae),B.side=Rn):y.renderBufferDirect(X,O,$,B,T,ae),T.onAfterRender(y,O,X,$,B,ae)}function yi(T,O,X){O.isScene!==!0&&(O=se);const $=xe.get(T),B=p.state.lights,ae=p.state.shadowsArray,_e=B.state.version,Re=K.getParameters(T,B.state,ae,O,X),we=K.getProgramCacheKey(Re);let He=$.programs;$.environment=T.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(T.isMeshStandardMaterial?Tt:Et).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",Q),He=new Map,$.programs=He);let je=He.get(we);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===_e)return Es(T,Re),je}else Re.uniforms=K.getUniforms(T),T.onBeforeCompile(Re,y),je=K.acquireProgram(Re,we),He.set(we,je),$.uniforms=Re.uniforms;const Oe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=ue.uniform),Es(T,Re),$.needsLights=xa(T),$.lightsStateVersion=_e,$.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function Tr(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Es(T,O){const X=xe.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ar(T,O,X,$,B){O.isScene!==!0&&(O=se),Ne.resetTextureUnits();const ae=O.fog,_e=$.isMeshStandardMaterial?O.environment:null,Re=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mr,we=($.isMeshStandardMaterial?Tt:Et).get($.envMap||_e),He=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let St=Gi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(St=y.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=dt!==void 0?dt.length:0,ze=xe.get($),xt=p.state.lights;if(ke===!0&&(j===!0||T!==S)){const It=T===S&&$.id===b;ue.setState($,T,It)}let it=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==xt.state.version||ze.outputColorSpace!==Re||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==we||$.fog===!0&&ze.fog!==ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ue.numPlanes||ze.numIntersection!==ue.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==je||ze.morphTargets!==Oe||ze.morphNormals!==et||ze.morphColors!==rt||ze.toneMapping!==St||ze.morphTargetsCount!==st)&&(it=!0):(it=!0,ze.__version=$.version);let Qt=ze.currentProgram;it===!0&&(Qt=yi($,O,B));let bi=!1,en=!1,Vn=!1;const yt=Qt.getUniforms(),Vt=ze.uniforms;if(ce.useProgram(Qt.program)&&(bi=!0,en=!0,Vn=!0),$.id!==b&&(b=$.id,en=!0),bi||S!==T){ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(R,"projectionMatrix",T.projectionMatrix),yt.setValue(R,"viewMatrix",T.matrixWorldInverse);const Ht=yt.map.cameraPosition;Ht!==void 0&&Ht.setValue(R,J.setFromMatrixPosition(T.matrixWorld)),he.logarithmicDepthBuffer&&yt.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,en=!0,Vn=!0)}if(B.isSkinnedMesh){yt.setOptional(R,B,"bindMatrix"),yt.setOptional(R,B,"bindMatrixInverse");const It=B.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),yt.setValue(R,"boneTexture",It.boneTexture,Ne))}B.isBatchedMesh&&(yt.setOptional(R,B,"batchingTexture"),yt.setValue(R,"batchingTexture",B._matricesTexture,Ne),yt.setOptional(R,B,"batchingIdTexture"),yt.setValue(R,"batchingIdTexture",B._indirectTexture,Ne),yt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&yt.setValue(R,"batchingColorTexture",B._colorsTexture,Ne));const tn=X.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&le.update(B,X,Qt),(en||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,yt.setValue(R,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vt.envMap.value=we,Vt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Vt.envMapIntensity.value=O.environmentIntensity),en&&(yt.setValue(R,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Rr(Vt,Vn),ae&&$.fog===!0&&ne.refreshFogUniforms(Vt,ae),ne.refreshMaterialUniforms(Vt,$,k,Y,p.state.transmissionRenderTarget[T.id]),Yo.upload(R,Tr(ze),Vt,Ne)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yo.upload(R,Tr(ze),Vt,Ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(R,"center",B.center),yt.setValue(R,"modelViewMatrix",B.modelViewMatrix),yt.setValue(R,"normalMatrix",B.normalMatrix),yt.setValue(R,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const It=$.uniformsGroups;for(let Ht=0,Cr=It.length;Ht<Cr;Ht++){const ti=It[Ht];Ze.update(ti,Qt),Ze.bind(ti,Qt)}}return Qt}function Rr(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function xa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,O,X){const $=xe.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),xe.get(T.texture).__webglTexture=O,xe.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const X=xe.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Dl=R.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){L=T,M=O,A=X;let $=!0,B=null,ae=!1,_e=!1;if(T){const we=xe.get(T);if(we.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(R.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)Ne.setupRenderTarget(T);else if(we.__hasExternalTextures)Ne.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(we.__boundDepthTexture!==Oe){if(Oe!==null&&xe.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);const je=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[O])?B=je[O][X]:B=je[O],ae=!0):T.samples>0&&Ne.useMultisampledRTT(T)===!1?B=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[X]:B=je,P.copy(T.viewport),I.copy(T.scissor),F=T.scissorTest}else P.copy(de).multiplyScalar(k).floor(),I.copy(Ae).multiplyScalar(k).floor(),F=Le;if(X!==0&&(B=Dl),ce.bindFramebuffer(R.FRAMEBUFFER,B)&&$&&ce.drawBuffers(T,B),ce.viewport(P),ce.scissor(I),ce.setScissorTest(F),ae){const we=xe.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,X)}else if(_e){const we=O;for(let He=0;He<T.textures.length;He++){const je=xe.get(T.textures[He]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+He,je.__webglTexture,X,we)}}else if(T!==null&&X!==0){const we=xe.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(T,O,X,$,B,ae,_e,Re=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){ce.bindFramebuffer(R.FRAMEBUFFER,we);try{const He=T.textures[Re],je=He.format,Oe=He.type;if(!he.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-$&&X>=0&&X<=T.height-B&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),R.readPixels(O,X,$,B,Ue.convert(je),Ue.convert(Oe),ae))}finally{const He=L!==null?xe.get(L).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,$,B,ae,_e,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(O>=0&&O<=T.width-$&&X>=0&&X<=T.height-B){ce.bindFramebuffer(R.FRAMEBUFFER,we);const He=T.textures[Re],je=He.format,Oe=He.type;if(!he.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,et),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),R.readPixels(O,X,$,B,Ue.convert(je),Ue.convert(Oe),0);const rt=L!==null?xe.get(L).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,rt);const St=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await x2(R,St,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,et),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer(et),R.deleteSync(St),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,X=0){const $=Math.pow(2,-X),B=Math.floor(T.image.width*$),ae=Math.floor(T.image.height*$),_e=O!==null?O.x:0,Re=O!==null?O.y:0;Ne.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,_e,Re,B,ae),ce.unbindTexture()};const ya=R.createFramebuffer(),Ll=R.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,$=null,B=0,ae=null){ae===null&&(B!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=B,B=0):ae=0);let _e,Re,we,He,je,Oe,et,rt,St;const dt=T.isCompressedTexture?T.mipmaps[ae]:T.image;if(X!==null)_e=X.max.x-X.min.x,Re=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,He=X.min.x,je=X.min.y,Oe=X.isBox3?X.min.z:0;else{const tn=Math.pow(2,-B);_e=Math.floor(dt.width*tn),Re=Math.floor(dt.height*tn),T.isDataArrayTexture?we=dt.depth:T.isData3DTexture?we=Math.floor(dt.depth*tn):we=1,He=0,je=0,Oe=0}$!==null?(et=$.x,rt=$.y,St=$.z):(et=0,rt=0,St=0);const st=Ue.convert(O.format),ze=Ue.convert(O.type);let xt;O.isData3DTexture?(Ne.setTexture3D(O,0),xt=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ne.setTexture2DArray(O,0),xt=R.TEXTURE_2D_ARRAY):(Ne.setTexture2D(O,0),xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const it=R.getParameter(R.UNPACK_ROW_LENGTH),Qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bi=R.getParameter(R.UNPACK_SKIP_PIXELS),en=R.getParameter(R.UNPACK_SKIP_ROWS),Vn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,He),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Oe);const yt=T.isDataArrayTexture||T.isData3DTexture,Vt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const tn=xe.get(T),It=xe.get(O),Ht=xe.get(tn.__renderTarget),Cr=xe.get(It.__renderTarget);ce.bindFramebuffer(R.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let ti=0;ti<we;ti++)yt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.get(T).__webglTexture,B,Oe+ti),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.get(O).__webglTexture,ae,St+ti)),R.blitFramebuffer(He,je,_e,Re,et,rt,_e,Re,R.DEPTH_BUFFER_BIT,R.NEAREST);ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||xe.has(T)){const tn=xe.get(T),It=xe.get(O);ce.bindFramebuffer(R.READ_FRAMEBUFFER,ya),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ll);for(let Ht=0;Ht<we;Ht++)yt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tn.__webglTexture,B,Oe+Ht):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,tn.__webglTexture,B),Vt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,It.__webglTexture,ae,St+Ht):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,It.__webglTexture,ae),B!==0?R.blitFramebuffer(He,je,_e,Re,et,rt,_e,Re,R.COLOR_BUFFER_BIT,R.NEAREST):Vt?R.copyTexSubImage3D(xt,ae,et,rt,St+Ht,He,je,_e,Re):R.copyTexSubImage2D(xt,ae,et,rt,He,je,_e,Re);ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Vt?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(xt,ae,et,rt,St,_e,Re,we,st,ze,dt.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,ae,et,rt,St,_e,Re,we,st,dt.data):R.texSubImage3D(xt,ae,et,rt,St,_e,Re,we,st,ze,dt):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ae,et,rt,_e,Re,st,ze,dt.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ae,et,rt,dt.width,dt.height,st,dt.data):R.texSubImage2D(R.TEXTURE_2D,ae,et,rt,_e,Re,st,ze,dt);R.pixelStorei(R.UNPACK_ROW_LENGTH,it),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bi),R.pixelStorei(R.UNPACK_SKIP_ROWS,en),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vn),ae===0&&O.generateMipmaps&&R.generateMipmap(xt),ce.unbindTexture()},this.initRenderTarget=function(T){xe.get(T).__webglFramebuffer===void 0&&Ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){M=0,A=0,L=null,ce.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function H_(n){return n}function G_(n){if(n==null)return H_;var e,t,i=n.scale[0],s=n.scale[1],r=n.translate[0],a=n.translate[1];return function(o,l){l||(e=t=0);var c=2,h=o.length,u=new Array(h);for(u[0]=(e+=o[0])*i+r,u[1]=(t+=o[1])*s+a;c<h;)u[c]=o[c],++c;return u}}function $_(n,e){for(var t,i=n.length,s=i-e;s<--i;)t=n[s],n[s++]=n[i],n[i]=t}function A1(n,e){return typeof e=="string"&&(e=n.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(t){return Id(n,t)})}:Id(n,e)}function Id(n,e){var t=e.id,i=e.bbox,s=e.properties==null?{}:e.properties,r=W_(n,e);return t==null&&i==null?{type:"Feature",properties:s,geometry:r}:i==null?{type:"Feature",id:t,properties:s,geometry:r}:{type:"Feature",id:t,bbox:i,properties:s,geometry:r}}function W_(n,e){var t=G_(n.transform),i=n.arcs;function s(h,u){u.length&&u.pop();for(var d=i[h<0?~h:h],f=0,g=d.length;f<g;++f)u.push(t(d[f],f));h<0&&$_(u,g)}function r(h){return t(h)}function a(h){for(var u=[],d=0,f=h.length;d<f;++d)s(h[d],u);return u.length<2&&u.push(u[0]),u}function o(h){for(var u=a(h);u.length<4;)u.push(u[0]);return u}function l(h){return h.map(o)}function c(h){var u=h.type,d;switch(u){case"GeometryCollection":return{type:u,geometries:h.geometries.map(c)};case"Point":d=r(h.coordinates);break;case"MultiPoint":d=h.coordinates.map(r);break;case"LineString":d=a(h.arcs);break;case"MultiLineString":d=h.arcs.map(a);break;case"Polygon":d=l(h.arcs);break;case"MultiPolygon":d=h.arcs.map(l);break;default:return null}return{type:u,coordinates:d}}return c(e)}const X_={land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},q_=JSON.parse("[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]]"),j_={scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]},R1={objects:X_,arcs:q_,transform:j_},rs={ocean:"#1b3f63",oceanDeep:"#122d49",land:"#3f6145",coast:"#7ba383",graticule:"rgba(150, 190, 210, 0.13)"},Oi=(n,e,t,i)=>[(n+180)/360*t,(90-e)/180*i];function Nd(n,e,t,i){for(const s of e){n.beginPath();for(let r=0;r<s.length;r++){const a=s[r],[o,l]=Oi(a[0],a[1],t,i);r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill(),n.stroke()}}function K_(n=2048){const e=n,t=n/2,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");if(!s)return i;const r=s.createLinearGradient(0,0,0,t);r.addColorStop(0,rs.oceanDeep),r.addColorStop(.5,rs.ocean),r.addColorStop(1,rs.oceanDeep),s.fillStyle=r,s.fillRect(0,0,e,t),s.strokeStyle=rs.graticule,s.lineWidth=Math.max(1,e/2048);for(let c=-180;c<=180;c+=30){const[h]=Oi(c,0,e,t);s.beginPath(),s.moveTo(h,0),s.lineTo(h,t),s.stroke()}for(let c=-60;c<=60;c+=30){const[,h]=Oi(0,c,e,t);s.beginPath(),s.moveTo(0,h),s.lineTo(e,h),s.stroke()}const a=R1,o=A1(a,a.objects.land),l=[];if(o.features)for(const c of o.features)c.geometry&&l.push(c.geometry);else o.geometry&&l.push(o.geometry);s.fillStyle=rs.land,s.strokeStyle=rs.coast,s.lineWidth=Math.max(1,e/1400),s.lineJoin="round";for(const c of l)if(c.type==="MultiPolygon")for(const h of c.coordinates)Nd(s,h,e,t);else Nd(s,c.coordinates,e,t);return i}function Y_(n=2048){const e=n,t=n/2,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");if(!s)return i;s.strokeStyle=rs.graticule,s.lineWidth=Math.max(1,e/2048);for(let l=-180;l<=180;l+=30){const[c]=Oi(l,0,e,t);s.beginPath(),s.moveTo(c,0),s.lineTo(c,t),s.stroke()}for(let l=-60;l<=60;l+=30){const[,c]=Oi(0,l,e,t);s.beginPath(),s.moveTo(0,c),s.lineTo(e,c),s.stroke()}const r=R1,a=A1(r,r.objects.land),o=[];if(a.features)for(const l of a.features)l.geometry&&o.push(l.geometry);else a.geometry&&o.push(a.geometry);s.strokeStyle="rgba(150, 200, 175, 0.75)",s.lineWidth=Math.max(1,e/1800),s.lineJoin="round";for(const l of o)if(l.type==="MultiPolygon")for(const c of l.coordinates)for(const h of c){s.beginPath();for(let u=0;u<h.length;u++){const[d,f]=Oi(h[u][0],h[u][1],e,t);u===0?s.moveTo(d,f):s.lineTo(d,f)}s.closePath(),s.stroke()}else for(const c of l.coordinates){s.beginPath();for(let h=0;h<c.length;h++){const[u,d]=Oi(c[h][0],c[h][1],e,t);h===0?s.moveTo(u,d):s.lineTo(u,d)}s.closePath(),s.stroke()}return i}function Z_(n,e){const i=n.width*4,s=(n.height-1)*4,r=e??document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d");if(!a)return r;a.clearRect(0,0,i,s);const o=a.createImageData(n.width,n.height);for(let c=0;c<n.width;c++)for(let h=0;h<n.height;h++){const u=n.values[c*n.height+h]??0,d=c>180?c-360:c,f=h+n.lat_start,[g,_]=Oi(d,f,n.width,n.height),m=Math.min(n.width-1,Math.max(0,Math.round(g))),v=(Math.min(n.height-1,Math.max(0,Math.round(_)))*n.width+m)*4;o.data[v]=u,o.data[v+1]=u,o.data[v+2]=u,o.data[v+3]=255}const l=document.createElement("canvas");return l.width=n.width,l.height=n.height,l.getContext("2d")?.putImageData(o,0,0),a.filter=`blur(${4*.9}px)`,a.drawImage(l,0,0,i,s),a.filter="none",r}const Du=173.1446326846693,J_=14959787069098932e-8,We=.017453292519943295,sl=57.29577951308232,Q_=365.24217,Ud=new Date("2000-01-01T12:00:00Z"),ci=2*Math.PI,Ri=3600*(180/Math.PI),sr=484813681109536e-20,e6=10800*60,t6=2*e6,n6=6378.1366,i6=n6/J_,C1=81.30056,Lu=.0002959122082855911,Zh=2825345909524226e-22,Jh=8459715185680659e-23,Qh=1292024916781969e-23,eu=1524358900784276e-23;function P1(n){if(n!==!0&&n!==!1)throw console.trace(),`Value is not boolean: ${n}`;return n}function $i(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function Bs(n){return n-Math.floor(n)}var Ce;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Ce||(Ce={}));const s6=[Ce.Star1,Ce.Star2,Ce.Star3,Ce.Star4,Ce.Star5,Ce.Star6,Ce.Star7,Ce.Star8],r6=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function a6(n){const e=s6.indexOf(n);return e>=0?r6[e]:null}function Iu(n){const e=a6(n);return e&&e.dist>0?e:null}var Sn;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(Sn||(Sn={}));const di={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function o6(n){var e,t,i,s,r,a,o;const l=2e3+(n-14)/Q_;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,t=e*e,i=e*t,s=t*t,r=t*i,a=i*i,10583.6-1014.41*e+33.78311*t-5.952053*i-.1798452*s+.022174192*r+.0090316521*a):l<1600?(e=(l-1e3)/100,t=e*e,i=e*t,s=t*t,r=t*i,a=i*i,1574.2-556.01*e+71.23472*t+.319781*i-.8503463*s-.005050998*r+.0083572073*a):l<1700?(e=l-1600,t=e*e,i=e*t,120-.9808*e-.01532*t+i/7129):l<1800?(e=l-1700,t=e*e,i=e*t,s=t*t,8.83+.1603*e-.0059285*t+13336e-8*i-s/1174e3):l<1860?(e=l-1800,t=e*e,i=e*t,s=t*t,r=t*i,a=i*i,o=i*s,13.72-.332447*e+.0068612*t+.0041116*i-37436e-8*s+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(e=l-1860,t=e*e,i=e*t,s=t*t,r=t*i,7.62+.5737*e-.251754*t+.01680668*i-.0004473624*s+r/233174):l<1920?(e=l-1900,t=e*e,i=e*t,s=t*t,-2.79+1.494119*e-.0598939*t+.0061966*i-197e-6*s):l<1941?(e=l-1920,t=e*e,i=e*t,21.2+.84493*e-.0761*t+.0020936*i):l<1961?(e=l-1950,t=e*e,i=e*t,29.07+.407*e-t/233+i/2547):l<1986?(e=l-1975,t=e*e,i=e*t,45.45+1.067*e-t/260-i/718):l<2005?(e=l-2e3,t=e*e,i=e*t,s=t*t,r=t*i,63.86+.3345*e-.060374*t+.0017275*i+651814e-9*s+2373599e-11*r):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let l6=o6;function Fd(n){return n+l6(n)/86400}class hr{constructor(e){if(e instanceof hr){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Ud.getTime())/t,this.tt=Fd(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Ud.getTime()+e*t),this.ut=e,this.tt=Fd(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new hr(e);for(;;){const i=e-t.tt;if(Math.abs(i)<1e-12)return t;t=t.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new hr(this.ut+e)}}function wt(n){return n instanceof hr?n:new hr(n)}function c6(n){function e(d){return d%t6*sr}const t=n.tt/36525,i=e(128710479305e-5+t*1295965810481e-4),s=e(335779.526232+t*17395272628478e-4),r=e(107226070369e-5+t*1602961601209e-3),a=e(450160.398036-t*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*t)*o+33386*l,h=(92052331+9086*t)*l+15377*o,u=2*(s-r+a);return o=Math.sin(u),l=Math.cos(u),c+=(-13170906-1675*t)*o-13696*l,h+=(5730336-3015*t)*l-4587*o,u=2*(s+a),o=Math.sin(u),l=Math.cos(u),c+=(-2276413-234*t)*o+2796*l,h+=(978459-485*t)*l+1374*o,u=2*a,o=Math.sin(u),l=Math.cos(u),c+=(2074554+207*t)*o-698*l,h+=(-897492+470*t)*l-291*o,o=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*t)*o+11817*l,h+=(73871-184*t)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+h*1e-7}}function D1(n){var e=n.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var ja;function bl(n){if(!ja||Math.abs(ja.tt-n.tt)>1e-6){const e=c6(n),t=D1(n),i=t+e.deps/3600;ja={tt:n.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*We)/15,mobl:t,tobl:i}}return ja}function h6(n,e){const t=n*We,i=Math.cos(t),s=Math.sin(t);return[e[0],e[1]*i-e[2]*s,e[1]*s+e[2]*i]}function u6(n,e){return h6(D1(n),e)}function d6(n){const e=n.tt/36525;function t(fe,R){const Se=[];let pe;for(pe=0;pe<=R-fe;++pe)Se.push(0);return{min:fe,array:Se}}function i(fe,R,Se,pe){const he=[];for(let ce=0;ce<=R-fe;++ce)he.push(t(Se,pe));return{min:fe,array:he}}function s(fe,R,Se){const pe=fe.array[R-fe.min];return pe.array[Se-pe.min]}function r(fe,R,Se,pe){const he=fe.array[R-fe.min];he.array[Se-he.min]=pe}let a,o,l,c,h,u,d,f,g,_,m,p,v,x,y,E,M,A,L,b,S,P,I,F=i(-6,6,1,4),z=i(-6,6,1,4);function W(fe,R){return s(F,fe,R)}function G(fe,R){return s(z,fe,R)}function Y(fe,R,Se){return r(F,fe,R,Se)}function k(fe,R,Se){return r(z,fe,R,Se)}function ee(fe,R,Se,pe,he){he(fe*Se-R*pe,R*Se+fe*pe)}function Z(fe){return Math.sin(ci*fe)}d=e*e,g=0,I=0,m=0,p=3422.7;var de=Z(.19833+.05611*e),Ae=Z(.27869+.04508*e),Le=Z(.16827-.36903*e),Ve=Z(.34734-5.37261*e),ke=Z(.10498-5.37899*e),j=Z(.42681-.41855*e),H=Z(.14943-5.37511*e);for(A=.84*de+.31*Ae+14.27*Le+7.26*Ve+.28*ke+.24*j,L=2.94*de+.31*Ae+14.27*Le+9.34*Ve+1.12*ke+.83*j,b=-6.4*de-1.89*j,S=.21*de+.31*Ae+14.27*Le-88.7*Ve-15.3*ke+.24*j-1.86*H,P=A-b,f=-3332e-9*Z(.59734-5.37261*e)-539e-9*Z(.35498-5.37899*e)-64e-9*Z(.39943-5.37511*e),v=ci*Bs(.60643382+1336.85522467*e-313e-8*d)+A/Ri,x=ci*Bs(.37489701+1325.55240982*e+2565e-8*d)+L/Ri,y=ci*Bs(.99312619+99.99735956*e-44e-8*d)+b/Ri,E=ci*Bs(.25909118+1342.2278298*e-892e-8*d)+S/Ri,M=ci*Bs(.82736186+1236.85308708*e-397e-8*d)+P/Ri,h=1;h<=4;++h){switch(h){case 1:l=x,o=4,c=1.000002208;break;case 2:l=y,o=3,c=.997504612-.002495388*e;break;case 3:l=E,o=4,c=1.000002708+139.978*f;break;case 4:l=M,o=6,c=1;break;default:throw`Internal error: I = ${h}`}for(Y(0,h,1),Y(1,h,Math.cos(l)*c),k(0,h,0),k(1,h,Math.sin(l)*c),u=2;u<=o;++u)ee(W(u-1,h),G(u-1,h),W(1,h),G(1,h),(fe,R)=>(Y(u,h,fe),k(u,h,R)));for(u=1;u<=o;++u)Y(-u,h,W(u,h)),k(-u,h,-G(u,h))}function J(fe,R,Se,pe){for(var he={x:1,y:0},ce=[0,fe,R,Se,pe],Ye=1;Ye<=4;++Ye)ce[Ye]!==0&&ee(he.x,he.y,W(ce[Ye],Ye),G(ce[Ye],Ye),(xe,Ne)=>(he.x=xe,he.y=Ne));return he}function U(fe,R,Se,pe,he,ce,Ye,xe){var Ne=J(he,ce,Ye,xe);g+=fe*Ne.y,I+=R*Ne.y,m+=Se*Ne.x,p+=pe*Ne.x}U(13.902,14.06,-.001,.2607,0,0,0,4),U(.403,-4.01,.394,.0023,0,0,0,3),U(2369.912,2373.36,.601,28.2333,0,0,0,2),U(-125.154,-112.79,-.725,-.9781,0,0,0,1),U(1.979,6.98,-.445,.0433,1,0,0,4),U(191.953,192.72,.029,3.0861,1,0,0,2),U(-8.466,-13.51,.455,-.1093,1,0,0,1),U(22639.5,22609.07,.079,186.5398,1,0,0,0),U(18.609,3.59,-.094,.0118,1,0,0,-1),U(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),U(3.215,5.44,.192,-.0386,1,0,0,-3),U(-38.428,-38.64,.001,.6008,1,0,0,-4),U(-.393,-1.43,-.092,.0086,1,0,0,-6),U(-.289,-1.59,.123,-.0053,0,1,0,4),U(-24.42,-25.1,.04,-.3,0,1,0,2),U(18.023,17.93,.007,.1494,0,1,0,1),U(-668.146,-126.98,-1.302,-.3997,0,1,0,0),U(.56,.32,-.001,-.0037,0,1,0,-1),U(-165.145,-165.06,.054,1.9178,0,1,0,-2),U(-1.877,-6.46,-.416,.0339,0,1,0,-4),U(.213,1.02,-.074,.0054,2,0,0,4),U(14.387,14.78,-.017,.2833,2,0,0,2),U(-.586,-1.2,.054,-.01,2,0,0,1),U(769.016,767.96,.107,10.1657,2,0,0,0),U(1.75,2.01,-.018,.0155,2,0,0,-1),U(-211.656,-152.53,5.679,-.3039,2,0,0,-2),U(1.225,.91,-.03,-.0088,2,0,0,-3),U(-30.773,-34.07,-.308,.3722,2,0,0,-4),U(-.57,-1.4,-.074,.0109,2,0,0,-6),U(-2.921,-11.75,.787,-.0484,1,1,0,2),U(1.267,1.52,-.022,.0164,1,1,0,1),U(-109.673,-115.18,.461,-.949,1,1,0,0),U(-205.962,-182.36,2.056,1.4437,1,1,0,-2),U(.233,.36,.012,-.0025,1,1,0,-3),U(-4.391,-9.66,-.471,.0673,1,1,0,-4),U(.283,1.53,-.111,.006,1,-1,0,4),U(14.577,31.7,-1.54,.2302,1,-1,0,2),U(147.687,138.76,.679,1.1528,1,-1,0,0),U(-1.089,.55,.021,0,1,-1,0,-1),U(28.475,23.59,-.443,-.2257,1,-1,0,-2),U(-.276,-.38,-.006,-.0036,1,-1,0,-3),U(.636,2.27,.146,-.0102,1,-1,0,-4),U(-.189,-1.68,.131,-.0028,0,2,0,2),U(-7.486,-.66,-.037,-.0086,0,2,0,0),U(-8.096,-16.35,-.74,.0918,0,2,0,-2),U(-5.741,-.04,0,-9e-4,0,0,2,2),U(.255,0,0,0,0,0,2,1),U(-411.608,-.2,0,-.0124,0,0,2,0),U(.584,.84,0,.0071,0,0,2,-1),U(-55.173,-52.14,0,-.1052,0,0,2,-2),U(.254,.25,0,-.0017,0,0,2,-3),U(.025,-1.67,0,.0031,0,0,2,-4),U(1.06,2.96,-.166,.0243,3,0,0,2),U(36.124,50.64,-1.3,.6215,3,0,0,0),U(-13.193,-16.4,.258,-.1187,3,0,0,-2),U(-1.187,-.74,.042,.0074,3,0,0,-4),U(-.293,-.31,-.002,.0046,3,0,0,-6),U(-.29,-1.45,.116,-.0051,2,1,0,2),U(-7.649,-10.56,.259,-.1038,2,1,0,0),U(-8.627,-7.59,.078,-.0192,2,1,0,-2),U(-2.74,-2.54,.022,.0324,2,1,0,-4),U(1.181,3.32,-.212,.0213,2,-1,0,2),U(9.703,11.67,-.151,.1268,2,-1,0,0),U(-.352,-.37,.001,-.0028,2,-1,0,-1),U(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),U(.36,.2,-.012,-.0043,2,-1,0,-4),U(-1.167,-1.25,.008,-.0106,1,2,0,0),U(-7.412,-6.12,.117,.0484,1,2,0,-2),U(-.311,-.65,-.032,.0044,1,2,0,-4),U(.757,1.82,-.105,.0112,1,-2,0,2),U(2.58,2.32,.027,.0196,1,-2,0,0),U(2.533,2.4,-.014,-.0212,1,-2,0,-2),U(-.344,-.57,-.025,.0036,0,3,0,-2),U(-.992,-.02,0,0,1,0,2,2),U(-45.099,-.02,0,-.001,1,0,2,0),U(-.179,-9.52,0,-.0833,1,0,2,-2),U(-.301,-.33,0,.0014,1,0,2,-4),U(-6.382,-3.37,0,-.0481,1,0,-2,2),U(39.528,85.13,0,-.7136,1,0,-2,0),U(9.366,.71,0,-.0112,1,0,-2,-2),U(.202,.02,0,0,1,0,-2,-4),U(.415,.1,0,.0013,0,1,2,0),U(-2.152,-2.26,0,-.0066,0,1,2,-2),U(-1.44,-1.3,0,.0014,0,1,-2,2),U(.384,-.04,0,0,0,1,-2,-2),U(1.938,3.6,-.145,.0401,4,0,0,0),U(-.952,-1.58,.052,-.013,4,0,0,-2),U(-.551,-.94,.032,-.0097,3,1,0,0),U(-.482,-.57,.005,-.0045,3,1,0,-2),U(.681,.96,-.026,.0115,3,-1,0,0),U(-.297,-.27,.002,-9e-4,2,2,0,-2),U(.254,.21,-.003,0,2,-2,0,-2),U(-.25,-.22,.004,.0014,1,3,0,-2),U(-3.996,0,0,4e-4,2,0,2,0),U(.557,-.75,0,-.009,2,0,2,-2),U(-.459,-.38,0,-.0053,2,0,-2,2),U(-1.298,.74,0,4e-4,2,0,-2,0),U(.538,1.14,0,-.0141,2,0,-2,-2),U(.263,.02,0,0,1,1,2,0),U(.426,.07,0,-6e-4,1,1,-2,-2),U(-.304,.03,0,3e-4,1,-1,2,0),U(-.372,-.19,0,-.0027,1,-1,-2,2),U(.418,0,0,0,0,0,4,0),U(-.33,-.04,0,0,3,0,2,0);function se(fe,R,Se,pe,he){return fe*J(R,Se,pe,he).y}_=0,_+=se(-526.069,0,0,1,-2),_+=se(-3.352,0,0,1,-4),_+=se(44.297,1,0,1,-2),_+=se(-6,1,0,1,-4),_+=se(20.599,-1,0,1,0),_+=se(-30.598,-1,0,1,-2),_+=se(-24.649,-2,0,1,0),_+=se(-2,-2,0,1,-2),_+=se(-22.571,0,1,1,-2),_+=se(10.985,0,-1,1,-2),g+=.82*Z(.7736-62.5512*e)+.31*Z(.0466-125.1025*e)+.35*Z(.5785-25.1042*e)+.66*Z(.4591+1335.8075*e)+.64*Z(.313-91.568*e)+1.14*Z(.148+1331.2898*e)+.21*Z(.5918+1056.5859*e)+.44*Z(.5784+1322.8595*e)+.24*Z(.2275-5.7374*e)+.28*Z(.2965+2.6929*e)+.33*Z(.3132+6.3368*e),a=E+I/Ri;let Me=(1.000002708+139.978*f)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+_;return{geo_eclip_lon:ci*Bs((v+g/Ri)/ci),geo_eclip_lat:Math.PI/(180*3600)*Me,distance_au:Ri*i6/(.999953253*p)}}function L1(n,e){return[n.rot[0][0]*e[0]+n.rot[1][0]*e[1]+n.rot[2][0]*e[2],n.rot[0][1]*e[0]+n.rot[1][1]*e[1]+n.rot[2][1]*e[2],n.rot[0][2]*e[0]+n.rot[1][2]*e[1]+n.rot[2][2]*e[2]]}function rl(n,e,t){const i=I1(e,t);return L1(i,n)}function I1(n,e){const t=n.tt/36525;let i=84381.406,s=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,r=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+i,a=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;i*=sr,s*=sr,r*=sr,a*=sr;const o=Math.sin(i),l=Math.cos(i),c=Math.sin(-s),h=Math.cos(-s),u=Math.sin(-r),d=Math.cos(-r),f=Math.sin(a),g=Math.cos(a),_=g*h-c*f*d,m=g*c*l+f*d*h*l-o*f*u,p=g*c*o+f*d*h*o+l*f*u,v=-f*h-c*g*d,x=-f*c*l+g*d*h*l-o*g*u,y=-f*c*o+g*d*h*o+l*g*u,E=c*u,M=-u*h*l-o*d,A=-u*h*o+d*l;if(e===Sn.Into2000)return new _r([[_,m,p],[v,x,y],[E,M,A]]);if(e===Sn.From2000)return new _r([[_,v,E],[m,x,M],[p,y,A]]);throw"Invalid precess direction"}function f6(n){const e=.779057273264+.00273781191135448*n.ut,t=n.ut%1;let i=360*((e+t)%1);return i<0&&(i+=360),i}let Ka;function p6(n){if(!Ka||Ka.tt!==n.tt){const e=n.tt/36525;let t=15*bl(n).ee;const i=f6(n);let r=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;r<0&&(r+=24),Ka={tt:n.tt,st:r}}return Ka.st}function m6(n){const e=wt(n);return p6(e)}function tu(n,e,t){const i=N1(e,t);return L1(i,n)}function N1(n,e){const t=bl(n),i=t.mobl*We,s=t.tobl*We,r=t.dpsi*sr,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r),d=h,f=-u*a,g=-u*o,_=u*l,m=h*a*l+o*c,p=h*o*l-a*c,v=u*c,x=h*a*c-o*l,y=h*o*c+a*l;if(e===Sn.From2000)return new _r([[d,_,v],[f,m,x],[g,p,y]]);if(e===Sn.Into2000)return new _r([[d,f,g],[_,m,p],[v,x,y]]);throw"Invalid precess direction"}function g6(n,e,t){return t===Sn.Into2000?rl(tu(n,e,t),e,t):tu(rl(n,e,t),e,t)}class Ct{constructor(e,t,i,s){this.x=e,this.y=t,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class ki{constructor(e,t,i,s,r,a,o){this.x=e,this.y=t,this.z=i,this.vx=s,this.vy=r,this.vz=a,this.t=o}}class U1{constructor(e,t,i){this.lat=$i(e),this.lon=$i(t),this.dist=$i(i)}}class _6{constructor(e,t,i,s){this.ra=$i(e),this.dec=$i(t),this.dist=$i(i),this.vec=s}}class _r{constructor(e){this.rot=e}}class v6{constructor(e,t,i){this.vec=e,this.elat=$i(t),this.elon=$i(i)}}function x6(n){const e=wt(n).AddDays(-1/Du),t=qr(di.Earth,e),i=[-t.x,-t.y,-t.z],[s,r,a]=g6(i,e,Sn.From2000),o=We*bl(e).tobl,l=Math.cos(o),c=Math.sin(o),h=new Ct(s,r,a,e);return y6(h,l,c)}function y6(n,e,t){const i=n.x,s=n.y*e+n.z*t,r=-n.y*t+n.z*e,a=Math.hypot(i,s);let o=0;a>0&&(o=sl*Math.atan2(s,i),o<0&&(o+=360));let l=sl*Math.atan2(r,a),c=new Ct(i,s,r,n.t);return new v6(c,l,o)}function ta(n){const e=wt(n),t=d6(e),i=t.distance_au*Math.cos(t.geo_eclip_lat),s=[i*Math.cos(t.geo_eclip_lon),i*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],r=u6(e,s),a=rl(r,e,Sn.Into2000);return new Ct(a[0],a[1],a[2],e)}function F1(n){const e=wt(n),t=1e-5,i=e.AddDays(-t),s=e.AddDays(+t),r=ta(i),a=ta(s);return new ki((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*t),(a.y-r.y)/(2*t),(a.z-r.z)/(2*t),e)}function b6(n){const e=wt(n),t=F1(e),i=1+C1;return new ki(t.x/i,t.y/i,t.z/i,t.vx/i,t.vy/i,t.vz/i,e)}function ur(n,e,t){let i=1,s=0;for(let r of n){let a=0;for(let[l,c,h]of r)a+=l*Math.cos(c+e*h);let o=i*a;t&&(o%=ci),s+=o,i*=e}return s}function Mc(n,e){let t=1,i=0,s=0,r=0;for(let a of n){let o=0,l=0;for(let[c,h,u]of a){let d=h+e*u;o+=c*u*Math.sin(d),r>0&&(l+=c*Math.cos(d))}s+=r*i*l-t*o,i=t,t*=e,++r}return s}const $r=365250,nu=0,iu=1,su=2;function ru(n){return new Zt(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function O1(n,e,t){const i=t*Math.cos(e),s=Math.cos(n),r=Math.sin(n);return[i*s,i*r,t*Math.sin(e)]}function qr(n,e){const t=e.tt/$r,i=ur(n[nu],t,!0),s=ur(n[iu],t,!1),r=ur(n[su],t,!1),a=O1(i,s,r);return ru(a).ToAstroVector(e)}function au(n,e){const t=e/$r,i=ur(n[nu],t,!0),s=ur(n[iu],t,!1),r=ur(n[su],t,!1),a=Mc(n[nu],t),o=Mc(n[iu],t),l=Mc(n[su],t),c=Math.cos(i),h=Math.sin(i),u=Math.cos(s),d=Math.sin(s),f=+(l*u*c)-r*d*c*o-r*u*h*a,g=+(l*u*h)-r*d*h*o+r*u*c*a,_=+(l*d)+r*u*o,m=O1(i,s,r),p=[f/$r,g/$r,_/$r],v=ru(m),x=ru(p);return new ys(e,v,x)}function Ya(n,e,t,i){const s=i/(i+Lu),r=qr(di[t],e);n.x+=s*r.x,n.y+=s*r.y,n.z+=s*r.z}function M6(n){const e=new Ct(0,0,0,n);return Ya(e,n,Ce.Jupiter,Zh),Ya(e,n,Ce.Saturn,Jh),Ya(e,n,Ce.Uranus,Qh),Ya(e,n,Ce.Neptune,eu),e}const ou=51,S6=29200,rr=146,hi=201,us=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Zt{constructor(e,t,i){this.x=e,this.y=t,this.z=i}clone(){return new Zt(this.x,this.y,this.z)}ToAstroVector(e){return new Ct(this.x,this.y,this.z,e)}static zero(){return new Zt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Zt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Zt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Zt(e*this.x,e*this.y,e*this.z)}div(e){return new Zt(this.x/e,this.y/e,this.z/e)}mean(e){return new Zt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Zt(-this.x,-this.y,-this.z)}}class ys{constructor(e,t,i){this.tt=e,this.r=t,this.v=i}clone(){return new ys(this.tt,this.r,this.v)}sub(e){return new ys(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function w6(n){let[e,[t,i,s],[r,a,o]]=n;return new ys(e,new Zt(t,i,s),new Zt(r,a,o))}function Za(n,e,t,i){const s=i/(i+Lu),r=au(di[t],e);return n.r.incr(r.r.mul(s)),n.v.incr(r.v.mul(s)),r}function Or(n,e,t){const i=t.sub(n),s=i.quadrature();return i.mul(e/(s*Math.sqrt(s)))}class Ml{constructor(e){let t=new ys(e,new Zt(0,0,0),new Zt(0,0,0));this.Jupiter=Za(t,e,Ce.Jupiter,Zh),this.Saturn=Za(t,e,Ce.Saturn,Jh),this.Uranus=Za(t,e,Ce.Uranus,Qh),this.Neptune=Za(t,e,Ce.Neptune,eu),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new ys(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=Or(e,Lu,this.Sun.r);return t.incr(Or(e,Zh,this.Jupiter.r)),t.incr(Or(e,Jh,this.Saturn.r)),t.incr(Or(e,Qh,this.Uranus.r)),t.incr(Or(e,eu,this.Neptune.r)),t}}class Sl{constructor(e,t,i,s){this.tt=e,this.r=t,this.v=i,this.a=s}clone(){return new Sl(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class k1{constructor(e,t){this.bary=e,this.grav=t}}function al(n,e,t,i){return new Zt(e.x+n*(t.x+n*i.x/2),e.y+n*(t.y+n*i.y/2),e.z+n*(t.z+n*i.z/2))}function Od(n,e,t){return new Zt(e.x+n*t.x,e.y+n*t.y,e.z+n*t.z)}function lu(n,e){const t=n-e.tt,i=new Ml(n),s=al(t,e.r,e.v,e.a),r=i.Acceleration(s).mean(e.a),a=al(t,e.r,e.v,r),o=e.v.add(r.mul(t)),l=i.Acceleration(a),c=new Sl(n,a,o,l);return new k1(i,c)}const E6=[];function z1(n,e){const t=Math.floor(n);return t<0?0:t>=e?e-1:t}function cu(n){const e=w6(n),t=new Ml(e.tt),i=e.r.add(t.Sun.r),s=e.v.add(t.Sun.v),r=t.Acceleration(i),a=new Sl(e.tt,i,s,r);return new k1(t,a)}function T6(n,e){const t=us[0][0];if(e<t||e>us[ou-1][0])return null;const i=z1((e-t)/S6,ou-1);if(!n[i]){const r=n[i]=[];r[0]=cu(us[i]).grav,r[hi-1]=cu(us[i+1]).grav;let a,o=r[0].tt;for(a=1;a<hi-1;++a)r[a]=lu(o+=rr,r[a-1]).grav;o=r[hi-1].tt;var s=[];for(s[hi-1]=r[hi-1],a=hi-2;a>0;--a)s[a]=lu(o-=rr,s[a+1]).grav;for(a=hi-2;a>0;--a){const l=a/(hi-1);r[a].r=r[a].r.mul(1-l).add(s[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(s[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(s[a].a.mul(l))}}return n[i]}function kd(n,e,t){let i=cu(n);const s=Math.ceil((e-i.grav.tt)/t);for(let r=0;r<s;++r)i=lu(r+1===s?e:i.grav.tt+t,i.grav);return i}function B1(n,e){let t,i,s;const r=T6(E6,n.tt);if(r){const a=z1((n.tt-r[0].tt)/rr,hi-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),h=al(n.tt-o.tt,o.r,o.v,c),u=Od(n.tt-o.tt,o.v,c),d=al(n.tt-l.tt,l.r,l.v,c),f=Od(n.tt-l.tt,l.v,c),g=(n.tt-o.tt)/rr;t=h.mul(1-g).add(d.mul(g)),i=u.mul(1-g).add(f.mul(g))}else{let a;n.tt<us[0][0]?a=kd(us[0],n.tt,-rr):a=kd(us[ou-1],n.tt,+rr),t=a.grav.r,i=a.grav.v,s=a.bary}return s||(s=new Ml(n.tt)),t=t.sub(s.Sun.r),i=i.sub(s.Sun.v),new ki(t.x,t.y,t.z,i.x,i.y,i.z,n)}function Wi(n,e){var t=wt(e);if(n in di)return qr(di[n],t);if(n===Ce.Pluto){const a=B1(t);return new Ct(a.x,a.y,a.z,t)}if(n===Ce.Sun)return new Ct(0,0,0,t);if(n===Ce.Moon){var i=qr(di.Earth,t),s=ta(t);return new Ct(i.x+s.x,i.y+s.y,i.z+s.z,t)}if(n===Ce.EMB){const a=qr(di.Earth,t),o=ta(t),l=1+C1;return new Ct(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,t)}if(n===Ce.SSB)return M6(t);const r=Iu(n);if(r){const a=new U1(r.dec,15*r.ra,r.dist);return I6(a,t)}throw`HelioVector: Unknown body "${n}"`}function A6(n,e){let t=e,i=0;for(let s=0;s<10;++s){const r=n(t),a=r.Length()/Du;if(a>1)throw"Object is too distant for light-travel solver.";const o=e.AddDays(-a);if(i=Math.abs(o.tt-t.tt),i<1e-9)return r;t=o}throw`Light-travel time solver did not converge: dt = ${i}`}class R6{constructor(e,t,i,s){this.observerBody=e,this.targetBody=t,this.aberration=i,this.observerPos=s}Position(e){this.aberration&&(this.observerPos=Wi(this.observerBody,e));const t=Wi(this.targetBody,e);return new Ct(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function C6(n,e,t,i){P1(i);const s=wt(n);if(Iu(t)){const o=Wi(t,s);if(i){const c=D6(e,s),h=new Ct(o.x-c.x,o.y-c.y,o.z-c.z,s),u=Du/h.Length();return new Ct(h.x+c.vx/u,h.y+c.vy/u,h.z+c.vz/u,s)}const l=Wi(e,s);return new Ct(o.x-l.x,o.y-l.y,o.z-l.z,s)}let r;i?r=new Ct(0,0,0,s):r=Wi(e,s);const a=new R6(e,t,i,r);return A6(o=>a.Position(o),s)}function wl(n,e,t){P1(t);const i=wt(e);switch(n){case Ce.Earth:return new Ct(0,0,0,i);case Ce.Moon:return ta(i);default:const s=C6(i,Ce.Earth,n,t);return s.t=i,s}}function P6(n,e){return new ki(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,e)}function D6(n,e){const t=wt(e);switch(n){case Ce.Sun:return new ki(0,0,0,0,0,0,t);case Ce.SSB:const i=new Ml(t.tt);return new ki(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,t);case Ce.Mercury:case Ce.Venus:case Ce.Earth:case Ce.Mars:case Ce.Jupiter:case Ce.Saturn:case Ce.Uranus:case Ce.Neptune:const s=au(di[n],t.tt);return P6(s,t);case Ce.Pluto:return B1(t);case Ce.Moon:case Ce.EMB:const r=au(di.Earth,t.tt),a=n==Ce.Moon?F1(t):b6(t);return new ki(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,t);default:if(Iu(n)){const o=Wi(n,t);return new ki(o.x,o.y,o.z,0,0,0,t)}throw`HelioState: Unsupported body "${n}"`}}var zd;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(zd||(zd={}));function L6(n,e){return new _r([[e.rot[0][0]*n.rot[0][0]+e.rot[1][0]*n.rot[0][1]+e.rot[2][0]*n.rot[0][2],e.rot[0][1]*n.rot[0][0]+e.rot[1][1]*n.rot[0][1]+e.rot[2][1]*n.rot[0][2],e.rot[0][2]*n.rot[0][0]+e.rot[1][2]*n.rot[0][1]+e.rot[2][2]*n.rot[0][2]],[e.rot[0][0]*n.rot[1][0]+e.rot[1][0]*n.rot[1][1]+e.rot[2][0]*n.rot[1][2],e.rot[0][1]*n.rot[1][0]+e.rot[1][1]*n.rot[1][1]+e.rot[2][1]*n.rot[1][2],e.rot[0][2]*n.rot[1][0]+e.rot[1][2]*n.rot[1][1]+e.rot[2][2]*n.rot[1][2]],[e.rot[0][0]*n.rot[2][0]+e.rot[1][0]*n.rot[2][1]+e.rot[2][0]*n.rot[2][2],e.rot[0][1]*n.rot[2][0]+e.rot[1][1]*n.rot[2][1]+e.rot[2][1]*n.rot[2][2],e.rot[0][2]*n.rot[2][0]+e.rot[1][2]*n.rot[2][1]+e.rot[2][2]*n.rot[2][2]]])}function I6(n,e){e=wt(e);const t=n.lat*We,i=n.lon*We,s=n.dist*Math.cos(t);return new Ct(s*Math.cos(i),s*Math.sin(i),n.dist*Math.sin(t),e)}function V1(n){const e=N6(n);return new _6(e.lon/15,e.lat,e.dist,n)}function N6(n){const e=n.x*n.x+n.y*n.y,t=Math.sqrt(e+n.z*n.z);let i,s;if(e===0){if(n.z===0)throw"Zero-length vector not allowed.";s=0,i=n.z<0?-90:90}else s=sl*Math.atan2(n.y,n.x),s<0&&(s+=360),i=sl*Math.atan2(n.z,Math.sqrt(e));return new U1(i,s,t)}function El(n,e){return new Ct(n.rot[0][0]*e.x+n.rot[1][0]*e.y+n.rot[2][0]*e.z,n.rot[0][1]*e.x+n.rot[1][1]*e.y+n.rot[2][1]*e.z,n.rot[0][2]*e.x+n.rot[1][2]*e.y+n.rot[2][2]*e.z,e.t)}function H1(n){n=wt(n);const e=I1(n,Sn.From2000),t=N1(n,Sn.From2000);return L6(e,t)}function G1(n){const t=bl(wt(n)).tobl*We,i=Math.cos(t),s=Math.sin(t);return new _r([[1,0,0],[0,+i,+s],[0,-s,+i]])}var Bd;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Bd||(Bd={}));var Vd;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Vd||(Vd={}));class $1{constructor(e,t,i,s){this.ra=e,this.dec=t,this.spin=i,this.north=s}}function U6(n){const e=tu([0,0,1],n,Sn.Into2000),t=rl(e,n,Sn.Into2000),i=new Ct(t[0],t[1],t[2],n),s=V1(i),r=190.41375788700253+360.9856122880876*n.ut;return new $1(s.ra,s.dec,r,i)}function F6(n,e){const t=wt(e),i=t.tt,s=i/36525;let r,a,o;switch(n){case Ce.Sun:r=286.13,a=63.87,o=84.176+14.1844*i;break;case Ce.Mercury:r=281.0103-.0328*s,a=61.4155-.0049*s,o=329.5988+6.1385108*i+.01067257*Math.sin(We*(174.7910857+4.092335*i))-.00112309*Math.sin(We*(349.5821714+8.18467*i))-1104e-7*Math.sin(We*(164.3732571+12.277005*i))-2539e-8*Math.sin(We*(339.1643429+16.36934*i))-571e-8*Math.sin(We*(153.9554286+20.461675*i));break;case Ce.Venus:r=272.76,a=67.16,o=160.2-1.4813688*i;break;case Ce.Earth:return U6(t);case Ce.Moon:const d=We*(125.045-.0529921*i),f=We*(250.089-.1059842*i),g=We*(260.008+13.0120009*i),_=We*(176.625+13.3407154*i),m=We*(357.529+.9856003*i),p=We*(311.589+26.4057084*i),v=We*(134.963+13.064993*i),x=We*(276.617+.3287146*i),y=We*(34.226+1.7484877*i),E=We*(15.134-.1589763*i),M=We*(119.743+.0036096*i),A=We*(239.961+.1643573*i),L=We*(25.053+12.9590088*i);r=269.9949+.0031*s-3.8787*Math.sin(d)-.1204*Math.sin(f)+.07*Math.sin(g)-.0172*Math.sin(_)+.0072*Math.sin(p)-.0052*Math.sin(E)+.0043*Math.sin(L),a=66.5392+.013*s+1.5419*Math.cos(d)+.0239*Math.cos(f)-.0278*Math.cos(g)+.0068*Math.cos(_)-.0029*Math.cos(p)+9e-4*Math.cos(v)+8e-4*Math.cos(E)-9e-4*Math.cos(L),o=38.3213+(13.17635815-14e-13*i)*i+3.561*Math.sin(d)+.1208*Math.sin(f)-.0642*Math.sin(g)+.0158*Math.sin(_)+.0252*Math.sin(m)-.0066*Math.sin(p)-.0047*Math.sin(v)-.0046*Math.sin(x)+.0028*Math.sin(y)+.0052*Math.sin(E)+.004*Math.sin(M)+.0019*Math.sin(A)-.0044*Math.sin(L);break;case Ce.Mars:r=317.269202-.10927547*s+68e-6*Math.sin(We*(198.991226+19139.4819985*s))+238e-6*Math.sin(We*(226.292679+38280.8511281*s))+52e-6*Math.sin(We*(249.663391+57420.7251593*s))+9e-6*Math.sin(We*(266.18351+76560.636795*s))+.419057*Math.sin(We*(79.398797+.5042615*s)),a=54.432516-.05827105*s+51e-6*Math.cos(We*(122.433576+19139.9407476*s))+141e-6*Math.cos(We*(43.058401+38280.8753272*s))+31e-6*Math.cos(We*(57.663379+57420.7517205*s))+5e-6*Math.cos(We*(79.476401+76560.6495004*s))+1.591274*Math.cos(We*(166.325722+.5042615*s)),o=176.049863+350.891982443297*i+145e-6*Math.sin(We*(129.071773+19140.0328244*s))+157e-6*Math.sin(We*(36.352167+38281.0473591*s))+4e-5*Math.sin(We*(56.668646+57420.929536*s))+1e-6*Math.sin(We*(67.364003+76560.2552215*s))+1e-6*Math.sin(We*(104.79268+95700.4387578*s))+.584542*Math.sin(We*(95.391654+.5042615*s));break;case Ce.Jupiter:const b=We*(99.360714+4850.4046*s),S=We*(175.895369+1191.9605*s),P=We*(300.323162+262.5475*s),I=We*(114.012305+6070.2476*s),F=We*(49.511251+64.3*s);r=268.056595-.006499*s+117e-6*Math.sin(b)+938e-6*Math.sin(S)+.001432*Math.sin(P)+3e-5*Math.sin(I)+.00215*Math.sin(F),a=64.495303+.002413*s+5e-5*Math.cos(b)+404e-6*Math.cos(S)+617e-6*Math.cos(P)-13e-6*Math.cos(I)+926e-6*Math.cos(F),o=284.95+870.536*i;break;case Ce.Saturn:r=40.589-.036*s,a=83.537-.004*s,o=38.9+810.7939024*i;break;case Ce.Uranus:r=257.311,a=-15.175,o=203.81-501.1600928*i;break;case Ce.Neptune:const z=We*(357.85+52.316*s);r=299.36+.7*Math.sin(z),a=43.46-.51*Math.cos(z),o=249.978+541.1397757*i-.48*Math.sin(z);break;case Ce.Pluto:r=132.993,a=-6.163,o=302.695+56.3625225*i;break;default:throw`Invalid body: ${n}`}const l=a*We,c=r*We,h=Math.cos(l),u=new Ct(h*Math.cos(c),h*Math.sin(c),Math.sin(l),t);return new $1(r/15,a,o,u)}function Jn(n){return new D(n.x,n.z,-n.y)}const W1={Mercury:Ce.Mercury,Venus:Ce.Venus,Earth:Ce.Earth,Mars:Ce.Mars,Jupiter:Ce.Jupiter,Saturn:Ce.Saturn,Uranus:Ce.Uranus,Neptune:Ce.Neptune},X1=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];function O6(n,e){const t=wt(e),i=F6(W1[n],t),s=El(H1(t),i.north);return Jn(s).normalize()}function na(n){return El(H1(n.t),n)}function ia(n,e){const t=wt(e),i=na(Wi(W1[n],t)),s=na(Wi(Ce.Earth,t));return{helio:new D(i.x,i.y,i.z),geo:new D(i.x-s.x,i.y-s.y,i.z-s.z)}}function q1(n){const e=wt(n),t=na(wl(Ce.Moon,e,!1));return new D(t.x,t.y,t.z)}function j1(n){const e=wt(n),t=na(wl(Ce.Sun,e,!0)),i=new D(t.x,t.y,t.z),s=i.length();return{dir:i.clone().normalize(),distanceAu:s}}function Nu(n){return(m6(wt(n))*15%360+360)%360}function ol(n){const e=wt(n),t=na(wl(Ce.Sun,e,!0)),i=V1(t);let r=i.ra*15-Nu(n);return r=((r+180)%360+360)%360-180,{lat:i.dec,lon:r}}function k6(n){const e=G1(wt(n)),t=El(e,new Ct(0,0,1,wt(n))),i=Jn(t).normalize(),s=j1(n).dir,r=Jn(s).normalize(),a=i.clone().addScaledVector(r,-i.dot(r)).normalize(),o=a.clone().cross(r);return{x:r,y:o,z:a}}function z6(n,e){return new D().addScaledVector(e.x,n.x).addScaledVector(e.y,n.y).addScaledVector(e.z,n.z)}function B6(n){const e=wt(n),i=(73.6667+1.3958333*(e.tt-15020)/36525-90)*Math.PI/180,s=(90-7.25)*Math.PI/180,r=new Ct(Math.cos(s)*Math.cos(i),Math.cos(s)*Math.sin(i),Math.sin(s),e),a=El(G1(e),r);return Jn(a).normalize()}const V6=-.309,H6=.087,G6=`
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;
  void main() {
    vLocalNormal = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$6=`
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
`,W6=`
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,X6=`
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
`;function q6(){const n=document.createElement("canvas");return n.width=1,n.height=1,new Xr(n)}function Hd(){const n=document.createElement("canvas");return n.width=1,n.height=1,new Xr(n)}function Gd(n){const e=new Wt(n);return e.needsUpdate=!0,e.colorSpace=$t,e.magFilter=Xt,e.generateMipmaps=!0,e.minFilter=Fi,e.anisotropy=8,e}class j6{group=new fn;spin=new fn;globe;material;atmosphere;atmosphereMat;auroraCanvas=null;auroraTexture=null;auroraStamp=null;nightTexture=null;dayTexture=null;overlayCanvas=null;overlayTexture=null;constructor(e=1){const t=new Xr(K_(2048));t.colorSpace=$t,t.minFilter=Xt,t.magFilter=Xt,t.anisotropy=4,this.material=new mn({uniforms:{uSurface:{value:t},uNight:{value:Hd()},uNightStrength:{value:0},uOverlay:{value:Hd()},uOverlayOn:{value:0},uAurora:{value:q6()},uAuroraStrength:{value:0},uSunDir:{value:new D(1,0,0)},uTwilightStart:{value:V6},uTwilightEnd:{value:H6},uNightTint:{value:new qe(.1,.13,.2)}},vertexShader:G6,fragmentShader:$6}),this.globe=new kt(new ji(e,96,64),this.material),this.globe.name="earth-globe",this.spin.name="earth-fixed-frame",this.spin.add(this.globe),this.group.add(this.spin),this.atmosphereMat=new mn({uniforms:{uSunDir:{value:new D(1,0,0)},uColor:{value:new qe(.38,.62,1)}},vertexShader:W6,fragmentShader:X6,transparent:!0,blending:pn,depthWrite:!1,side:an}),this.atmosphere=new kt(new ji(e*1.05,64,48),this.atmosphereMat),this.group.add(this.atmosphere)}setAurora(e,t){if(!e||!t){this.material.uniforms.uAuroraStrength.value=0;return}this.auroraStamp!==e.forecast_time&&(this.auroraStamp=e.forecast_time,this.auroraCanvas=Z_(e.grid,this.auroraCanvas??void 0),this.auroraTexture||(this.auroraTexture=new Xr(this.auroraCanvas),this.auroraTexture.colorSpace=$t,this.auroraTexture.minFilter=Xt,this.auroraTexture.magFilter=Xt,this.material.uniforms.uAurora.value=this.auroraTexture),this.auroraTexture.needsUpdate=!0),this.material.uniforms.uAuroraStrength.value=1/100}setDayImage(e){this.dayTexture?.dispose(),this.dayTexture=Gd(e),this.material.uniforms.uSurface.value=this.dayTexture}setNightImage(e){this.nightTexture?.dispose(),this.nightTexture=Gd(e),this.material.uniforms.uNight.value=this.nightTexture,this.material.uniforms.uNightStrength.value=1}get surfaceIsImagery(){return this.dayTexture!==null}get lightsAreLoaded(){return this.nightTexture!==null}setCoastOverlay(e){this.material.uniforms.uOverlayOn.value=e?1:0,!(!e||this.overlayTexture)&&(this.overlayCanvas=Y_(2048),this.overlayTexture=new Xr(this.overlayCanvas),this.overlayTexture.colorSpace=$t,this.overlayTexture.minFilter=Xt,this.overlayTexture.magFilter=Xt,this.material.uniforms.uOverlay.value=this.overlayTexture)}get coastOverlayOn(){return this.material.uniforms.uOverlayOn.value>0}setRadius(e){this.globe.scale.setScalar(e),this.atmosphere.scale.setScalar(e)}update(e,t){this.spin.rotation.y=Nu(e)*Math.PI/180,this.material.uniforms.uSunDir.value.copy(t),this.atmosphereMat.uniforms.uSunDir.value.copy(t)}dispose(){this.globe.geometry.dispose(),this.material.dispose(),this.atmosphereMat.dispose(),this.atmosphere.geometry.dispose(),this.material.uniforms.uSurface.value.dispose(),this.auroraTexture?.dispose(),this.dayTexture?.dispose(),this.nightTexture?.dispose(),this.overlayTexture?.dispose()}}const vr=1495978707e-1,sa={Sun:695700,Mercury:2439.7,Venus:6051.8,Earth:6371,Mars:3389.5,Jupiter:69911,Saturn:58232,Uranus:25362,Neptune:24622,Moon:1737.4},$d={inner:1.24,outer:2.27},ll=8,K6=3,Y6=.05;function xr(n,e){return e==="true"?n*ll:K6*Math.log10(1+n/Y6)}function Li(n,e){const t=sa[n]/vr;if(e==="true")return t*ll;const i={Sun:10,Mercury:380,Venus:265,Earth:300,Mars:360,Moon:320,Jupiter:54,Saturn:58,Uranus:103,Neptune:103};return t*ll*i[n]}function K1(n){return n==="globe"?"Globe scale — distances log-compressed, bodies enlarged":"True scale — distances and sizes to scale"}function Z6(n,e,t){return e==="true"?n*ll:t*3.2*(n/.00257)}const J6=235,Q6=16;function Wd(n,e){return e==="true"?n:n/J6*Q6}const e9=sa.Sun/vr,t9=`
  varying vec3 vLocal;
  void main() {
    // Position on the unit sphere in the Sun's own frame — the projection is
    // defined there, not in view space, so it does not move with the camera.
    vLocal = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,n9=`
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
`,i9=`
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
`,s9=`
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
`,Xd={coronagraph:.2,disk:0},qd={coronagraph:.8,disk:.3},r9=6.32;class jd{mesh;mat;texture=null;cal=null;mode="globe";sunRadius=1;constructor(e){this.mat=new mn({uniforms:{uImage:{value:null},uEarthDir:{value:new D(1,0,0)},uNorth:{value:new D(0,1,0)},uCentre:{value:new Xe(.5,.5)},uRsun:{value:.02},uInner:{value:1},uInnerSoft:{value:1.05},uEdge:{value:6},uFloor:{value:new D(0,0,0)},uFloorMix:{value:Xd.coronagraph},uSkyOpacity:{value:qd.coronagraph},uExtent:{value:1},uCover:{value:1},uIntensity:{value:1}},vertexShader:i9,fragmentShader:s9,transparent:!0,blending:fs,depthWrite:!1,side:Rn}),this.mesh=new kt(new ma(2,2),this.mat),this.mesh.visible=!1,this.mesh.renderOrder=e}get visible(){return this.mesh.visible}reachRsun(){return this.mesh.visible&&this.cal?this.cal.halfWidthRsun:0}set(e,t){if(!e||!t){this.mesh.visible=!1,this.cal=null;return}const i=new Wt(e);i.colorSpace=$t,i.needsUpdate=!0,this.texture?.dispose(),this.texture=i,this.cal=t;const s=this.mat.uniforms;s.uImage.value=i,s.uCentre.value.set(t.centre.u,t.centre.v),s.uRsun.value=t.rsun,s.uInner.value=t.innerRsun,s.uInnerSoft.value=t.innerRsun*(t.kind==="disk"?1.015:1.15),s.uFloor.value.set(t.background.r,t.background.g,t.background.b),s.uFloorMix.value=Xd[t.kind],s.uSkyOpacity.value=qd[t.kind],this.applyScale(),this.mesh.visible=!0}setScaleMode(e){this.mode=e,this.applyScale()}setSunRadius(e){this.sunRadius=e,this.applyScale()}setViewGeometry(e,t){this.mat.uniforms.uEarthDir.value.copy(e).normalize(),this.mat.uniforms.uNorth.value.copy(t).normalize()}applyScale(){if(!this.cal)return;const e=this.cal.halfWidthRsun,t=xr(e*e9,this.mode),i=this.sunRadius*e/this.cal.innerRsun;this.mat.uniforms.uExtent.value=Math.max(t,i),this.mat.uniforms.uCover.value=e,this.mat.uniforms.uEdge.value=e}dispose(){this.texture?.dispose(),this.mat.dispose(),this.mesh.geometry.dispose()}}class a9{group=new fn;disc;discMat;texture=null;image=null;calibration=null;diskPlane=new jd(2);coronaPlane=new jd(3);get coronagraphShown(){return this.coronaPlane.visible}constructor(e=1){this.discMat=new mn({uniforms:{uDisk:{value:null},uHasImage:{value:0},uEarthDir:{value:new D(1,0,0)},uNorth:{value:new D(0,1,0)},uCentre:{value:new Xe(.5,.5)},uRadius:{value:.3},uBase:{value:new qe(1,.93,.76)},uUnobserved:{value:new qe(.055,.042,.038)}},vertexShader:t9,fragmentShader:n9}),this.disc=new kt(new ji(e,64,48),this.discMat),this.disc.name="sun-disc",this.group.add(this.disc),this.group.add(this.diskPlane.mesh),this.group.add(this.coronaPlane.mesh)}setRadius(e){this.disc.scale.setScalar(e),this.diskPlane.setSunRadius(e),this.coronaPlane.setSunRadius(e)}setScaleMode(e){this.diskPlane.setScaleMode(e),this.coronaPlane.setScaleMode(e)}setDiskPlane(e,t){this.diskPlane.set(e,t)}setCoronaPlane(e,t){this.coronaPlane.set(e,t)}setImage(e,t){if(!e||!t){this.discMat.uniforms.uHasImage.value=0,this.image=null,this.calibration=null;return}this.image=e,this.calibration=t;const i=new Wt(e);i.colorSpace=$t,i.needsUpdate=!0,this.texture?.dispose(),this.texture=i,this.discMat.uniforms.uDisk.value=i,this.discMat.uniforms.uCentre.value.set(t.centre.u,t.centre.v),this.discMat.uniforms.uRadius.value=t.radius,this.discMat.uniforms.uHasImage.value=1}reachRsun(){return Math.max(r9,this.diskPlane.reachRsun(),this.coronaPlane.reachRsun())}get hasImage(){return this.discMat.uniforms.uHasImage.value===1}projection(){return!this.image||!this.calibration?null:{image:this.image,calibration:this.calibration,north:this.discMat.uniforms.uNorth.value.clone(),earthDir:this.discMat.uniforms.uEarthDir.value.clone()}}setViewGeometry(e,t){this.discMat.uniforms.uEarthDir.value.copy(e).normalize(),this.discMat.uniforms.uNorth.value.copy(t).normalize(),this.diskPlane.setViewGeometry(e,t),this.coronaPlane.setViewGeometry(e,t)}dispose(){this.texture?.dispose(),this.discMat.dispose(),this.disc.geometry.dispose(),this.diskPlane.dispose(),this.coronaPlane.dispose()}}const Ci=256,Y1=.94,o9=.12,l9=.92;function c9(n){const e=document.createElement("canvas");e.width=Ci,e.height=Ci;const t=e.getContext("2d",{willReadFrequently:!0});if(!t)return null;let i;try{t.drawImage(n,0,0,Ci,Ci),i=t.getImageData(0,0,Ci,Ci).data}catch{return null}return Z1(h9(i,Ci),Ci)}function h9(n,e){const t=new Float32Array(e*e);for(let i=0;i<e*e;i++)t[i]=.299*n[i*4]+.587*n[i*4+1]+.114*n[i*4+2];return t}function Z1(n,e){const t=Math.floor(e*Y1);if(t<8)return null;let i=Kd(n,e,t,null);if(!i)return null;let s=Yd(n,e,t,i);if(s<0)return null;for(let r=0;r<2;r++){const a=Kd(n,e,t,{...i,r:s*1.05});if(!a)break;const o=Yd(n,e,t,a);if(o<=0)break;i=a,s=o}return{centre:{u:i.x/e,v:1-i.y/e},radius:s/e}}function Kd(n,e,t,i){let s=0,r=0,a=0;for(let o=0;o<t;o++)for(let l=0;l<e;l++){if(i&&Math.hypot(l-i.x,o-i.y)>i.r)continue;const c=n[o*e+l]**2;s+=l*c,r+=o*c,a+=c}return a>0?{x:s/a,y:r/a}:null}function Yd(n,e,t,i){const s=Math.floor(e/2),r=new Float64Array(s),a=new Float64Array(s);for(let u=0;u<t;u++)for(let d=0;d<e;d++){const f=Math.round(Math.hypot(d-i.x,u-i.y));f>=s||(r[f]+=n[u*e+d],a[f]+=1)}let o=-1,l=0;const c=Math.floor(s*o9),h=Math.floor(s*l9);for(let u=c;u<h-1;u++){if(a[u]===0||a[u+1]===0)continue;const d=r[u]/a[u]-r[u+1]/a[u+1];d>l&&(l=d,o=u)}return o}const Rt=512,u9=[.05,.075,.11,.16],J1=190,Q1=25,d9=.25,Zd=24,f9=2.5,p9=.6,m9=.25,Sc=24;function Jd(n){const e=n.length;if(e<3)return null;let t=0,i=0,s=0,r=0,a=0,o=0,l=0,c=0;for(const{x,y}of n){const E=x*x+y*y;t+=x,i+=y,s+=x*x,r+=y*y,a+=x*y,o+=x*E,l+=y*E,c+=E}const h=2*(s-t*t/e),u=2*(a-t*i/e),d=2*(r-i*i/e),f=o-t*c/e,g=l-i*c/e,_=h*d-u*u;if(Math.abs(_)<1e-9)return null;const m=(f*d-u*g)/_,p=(h*g-f*u)/_;let v=0;for(const{x,y}of n)v+=Math.hypot(x-m,y-p);return{cx:m,cy:p,r:v/e}}function g9(n,e,t){const i=n.map(s=>Math.hypot(s.x-e,s.y-t)).sort((s,r)=>s-r);return(i[Math.floor(i.length*.9)]-i[Math.floor(i.length*.1)])/2}function _9(n,e){for(const t of u9){const i=v9(n,e,Math.round(e*t));if(i)return i}return null}function v9(n,e,t){const i=e/2;let s=[];for(let h=Math.max(0,Math.floor(i-t));h<Math.min(e,i+t);h++)for(let u=Math.max(0,Math.floor(i-t));u<Math.min(e,i+t);u++){const d=(h*e+u)*4,f=n[d],g=n[d+1],_=n[d+2],m=Math.min(f,g,_);m>J1&&Math.max(f,g,_)-m<Q1&&s.push({x:u,y:h})}if(s.length<Zd)return null;let r=Jd(s);if(!r)return null;for(let h=0;h<3;h++){const u=s.filter(f=>Math.abs(Math.hypot(f.x-r.cx,f.y-r.cy)-r.r)<2.5);if(u.length<Zd)break;const d=Jd(u);if(!d)break;s=u,r=d}if(r.r<=1||r.r>t)return null;const a=g9(s,r.cx,r.cy);if(a>f9||x9(s,r.cx,r.cy)<p9||y9(n,e,r.cx,r.cy,r.r,s.length)>m9)return null;const o=b9(n,e,r.cx,r.cy,r.r),l=e/2/r.r,c=ep(n,e,r.cx,r.cy,o,l*r.r);return{kind:"coronagraph",centre:{u:r.cx/e,v:1-r.cy/e},rsun:r.r/e,halfWidthRsun:l,innerRsun:o/r.r,background:c,residualPx:a}}function x9(n,e,t){const i=new Set;for(const{x:s,y:r}of n){const a=Math.atan2(r-t,s-e)+Math.PI;i.add(Math.min(Sc-1,Math.floor(a/(2*Math.PI)*Sc)))}return i.size/Sc}function y9(n,e,t,i,s,r){const a=s*.6;let o=0;const l=Math.max(0,Math.floor(t-a)),c=Math.min(e,Math.ceil(t+a)),h=Math.max(0,Math.floor(i-a)),u=Math.min(e,Math.ceil(i+a));for(let d=h;d<u;d++)for(let f=l;f<c;f++){if(Math.hypot(f-t,d-i)>a)continue;const g=(d*e+f)*4,_=n[g],m=n[g+1],p=n[g+2],v=Math.min(_,m,p);v>J1&&Math.max(_,m,p)-v<Q1&&o++}return r>0?o/r:1}function ep(n,e,t,i,s,r){const a=[[],[],[]];for(let l=0;l<e;l+=2)for(let c=0;c<e;c+=2){const h=Math.hypot(c-t,l-i);if(h<s||h>r)continue;const u=(l*e+c)*4;a[0].push(n[u]),a[1].push(n[u+1]),a[2].push(n[u+2])}if(a[0].length<32)return{r:0,g:0,b:0};const o=l=>(l.sort((c,h)=>c-h),l[Math.floor(l.length*d9)]/255);return{r:o(a[0]),g:o(a[1]),b:o(a[2])}}function b9(n,e,t,i,s){const r=Math.floor(e/2),a=new Float64Array(r),o=new Uint32Array(r);for(let f=0;f<e;f++)for(let g=0;g<e;g++){const _=Math.round(Math.hypot(g-t,f-i));if(_>=r)continue;const m=(f*e+g)*4;a[_]+=(n[m]+n[m+1]+n[m+2])/3,o[_]+=1}const l=new Float64Array(r);for(let f=0;f<r;f++)l[f]=o[f]?a[f]/o[f]:0;const c=Math.max(2,Math.ceil(s*1.3)),h=Math.min(r-2,Math.floor(s*8));let u=Math.round(s*2.2),d=0;for(let f=c;f<h;f++){const g=l[f+1]-l[f-1];g>d&&(d=g,u=f)}return u}function M9(n){const e=document.createElement("canvas");e.width=Rt,e.height=Rt;const t=e.getContext("2d",{willReadFrequently:!0});if(!t)return null;try{return t.drawImage(n,0,0,Rt,Rt),_9(t.getImageData(0,0,Rt,Rt).data,Rt)}catch{return null}}function S9(n){const e=document.createElement("canvas");e.width=Rt,e.height=Rt;const t=e.getContext("2d",{willReadFrequently:!0});if(!t)return null;let i;try{t.drawImage(n,0,0,Rt,Rt),i=t.getImageData(0,0,Rt,Rt).data}catch{return null}const s=new Float32Array(Rt*Rt);for(let c=0,h=0;c<s.length;c++,h+=4)s[c]=(i[h]+i[h+1]+i[h+2])/3;const r=Z1(s,Rt);if(!r||r.radius<=0)return null;const a=r.radius*Rt,o=r.centre.u*Rt,l=(1-r.centre.v)*Rt;return{kind:"disk",centre:r.centre,rsun:r.radius,halfWidthRsun:w9(Rt,l,a),innerRsun:1,background:ep(i,Rt,o,l,a,Rt/2),residualPx:null}}function w9(n,e,t){return Math.min(n/2/t,(Y1*n-e)/t)}function E9(n,e,t){const i=[];t&&i.push({label:"disk, on the sphere",fromRsun:0,toRsun:1}),n&&i.push({label:"off-limb, on the card",fromRsun:1,toRsun:n.halfWidthRsun}),e&&i.push({label:"coronagraph",fromRsun:e.innerRsun,toRsun:e.halfWidthRsun}),i.sort((a,o)=>a.fromRsun-o.fromRsun);const s=[];let r=0;for(const a of i)a.fromRsun>r+.05&&s.push({label:null,fromRsun:r,toRsun:a.fromRsun}),s.push(a),r=Math.max(r,a.toRsun);return s}const Zo={Mercury:10260355,Venus:14731680,Earth:4882357,Mars:12673340,Jupiter:14070924,Saturn:14930082,Uranus:10475742,Neptune:5996500};function T9(n){const e=new kt(new xl(1,1.12,32),new Mr({color:n,transparent:!0,opacity:.55,side:Rn,blending:pn,depthWrite:!1}));return e.renderOrder=3,e}class A9{constructor(e){this.name=e,this.mesh=new kt(new ji(1,40,28),new y1({color:Zo[e],emissive:Zo[e],emissiveIntensity:.12})),this.mesh.name=`planet-${e}`,this.marker=T9(Zo[e]),this.group.add(this.mesh,this.marker),e==="Saturn"&&(this.rings=new kt(new xl($d.inner,$d.outer,72),new Mr({color:15260853,transparent:!0,opacity:.42,side:Rn,depthWrite:!1})),this.rings.name="saturn-rings",this.group.add(this.rings))}name;group=new fn;mesh;marker;rings=null;update(e,t,i){const s=ia(this.name,e).helio,r=Jn(s),a=r.length();r.normalize().multiplyScalar(xr(a,t)),this.group.position.copy(r);const o=Li(this.name,t);this.mesh.scale.setScalar(o),this.rings&&(this.rings.scale.setScalar(o),this.rings.quaternion.setFromUnitVectors(new D(0,0,1),O6(this.name,e)),this.rings.visible=o>.004);const c=i.distanceTo(r)*.012;this.marker.scale.setScalar(c),this.marker.visible=o<c*.9,this.marker.lookAt(i)}}class R9{line;constructor(e,t,i){const s=new At;this.line=new vl(s,new xs({color:Zo[e],transparent:!0,opacity:.22})),this.line.name=`orbit-${e}`,this.rebuild(e,t,i)}rebuild(e,t,i){const s={Mercury:87.97,Venus:224.7,Earth:365.256,Mars:686.98,Jupiter:4332.6,Saturn:10759,Uranus:30689,Neptune:60195},r=240,a=[];for(let o=0;o<=r;o++){const l=new Date(i.getTime()+o/r*s[e]*864e5),c=Jn(ia(e,l).helio),h=c.length();c.normalize().multiplyScalar(xr(h,t)),a.push(c.x,c.y,c.z)}this.line.geometry.setAttribute("position",new ht(a,3)),this.line.geometry.computeBoundingSphere()}}class C9{mesh;constructor(){this.mesh=new kt(new ji(1,32,24),new y1({color:new qe(.72,.71,.68)})),this.mesh.name="moon"}}function P9(){const n=new Map;for(const e of X1)n.set(e,new A9(e));return n}function D9(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function L9(n=2600,e=900){const t=D9(3928446791),i=[],s=[];for(let l=0;l<n;l++){const c=t()*2-1,h=t()*Math.PI*2,u=Math.sqrt(1-c*c);i.push(e*u*Math.cos(h),e*c,e*u*Math.sin(h));const d=.65+t()*.35,f=t();s.push(d*(.85+f*.15),d*.9,d*(1-f*.12))}const r=new At;r.setAttribute("position",new ht(i,3)),r.setAttribute("color",new ht(s,3));const a=new _1({size:1.4,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.85,blending:pn,depthWrite:!1}),o=new j2(r,a);return o.name="starfield",o.frustumCulled=!1,o}const Qd={type:"change"},Uu={type:"start"},tp={type:"end"},Ja=new fa,ef=new Ii,I9=Math.cos(70*_2.DEG2RAD),Nt=new D,hn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wc=1e-6;class N9 extends s3{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new _s,this._lastTargetPosition=new D,this._quat=new _s().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new od,this._sphericalDelta=new od,this._scale=1,this._panOffset=new D,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new D,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=F9.bind(this),this._onPointerDown=U9.bind(this),this._onPointerUp=O9.bind(this),this._onContextMenu=$9.bind(this),this._onMouseWheel=B9.bind(this),this._onKeyDown=V9.bind(this),this._onTouchStart=H9.bind(this),this._onTouchMove=G9.bind(this),this._onMouseDown=k9.bind(this),this._onMouseMove=z9.bind(this),this._interceptControlDown=W9.bind(this),this._interceptControlUp=X9.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qd),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Nt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ja.origin.copy(this.object.position),Ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ja.direction))<I9?this.object.lookAt(this.target):(ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ja.intersectPlane(ef,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wc||this._lastTargetPosition.distanceToSquared(this.target)>wc?(this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function U9(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function F9(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function O9(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tp),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function k9(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case lr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case lr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Uu)}function z9(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function B9(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(Uu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tp))}function V9(n){this.enabled!==!1&&this._handleKeyDown(n)}function H9(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Uu)}function G9(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function $9(n){this.enabled!==!1&&n.preventDefault()}function W9(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X9(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ra=[{id:"deck",label:"Deck",title:"Behind Earth looking back down the Sun–Earth line: both bodies in frame, with the wind and the field lines running between them"},{id:"sunward",label:"Sunward",title:"Looking down the Sun–Earth line from the Sun: the magnetopause face-on"},{id:"profile",label:"Profile",title:"The noon–midnight meridian: nose compression against tail flaring"},{id:"polar",label:"Polar",title:"Over the north pole with noon at the top: the auroral oval as a ring, offset because it encircles the magnetic pole rather than this one"},{id:"corona",label:"Corona",title:"The Sun from where we stand, framed for the coronagraphs: LASCO photographs down this exact line, so its image plane is face-on here"},{id:"system",label:"System",title:"The whole solar system, all eight planets at their true positions"}],q9=1100,j9=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;class K9{camera;controls;view="deck";upHint=new D(0,1,0);from=new D;to=new D;fromTarget=new D;toTarget=new D;startedAt=0;transitioning=!1;reducedMotion=!1;constructor(e,t){this.camera=new yn(45,t,5e-4,5e3),this.camera.position.set(0,2.2,7.5),this.controls=new N9(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=.02,this.controls.maxDistance=400,this.controls.enablePan=!0}setReducedMotion(e){this.reducedMotion=e}goTo(e,t,i,s,r,a=!1){this.view=e;const o=new D(0,1,0);let l=e==="system"||e==="corona"?new D(0,0,0):t.clone(),c;if(e==="profile"){const h=new D().crossVectors(s,o).normalize();l=t.clone().addScaledVector(s,-i*6),c=t.clone().add(h.multiplyScalar(i*52)).add(s.clone().multiplyScalar(i*4)).add(new D(0,i*18,0))}else if(e==="sunward")c=t.clone().addScaledVector(s,i*26);else if(e==="polar")c=t.clone().addScaledVector(o,i*3.4);else if(e==="corona"){const h=r/Math.tan(this.camera.fov*Math.PI/360),u=t.length()*.92;c=s.clone().negate().normalize().multiplyScalar(Math.min(h*1.25,u))}else if(e==="deck"){const h=new D().crossVectors(s,o).normalize();c=t.clone().addScaledVector(s,-i*14).add(h.multiplyScalar(i*1.5)).add(new D(0,i*1.5,0))}else c=new D(0,8.5,19);this.upHint=e==="polar"?s.clone().negate().normalize():o.clone(),this.camera.up.copy(this.upHint),this.animateTo(c,l,a)}get focus(){return this.controls.target}animateTo(e,t,i=!1){if(this.reducedMotion||i){this.camera.position.copy(e),this.controls.target.copy(t),this.controls.update(),this.transitioning=!1;return}this.from.copy(this.camera.position),this.to.copy(e),this.fromTarget.copy(this.controls.target),this.toTarget.copy(t),this.startedAt=performance.now(),this.transitioning=!0}update(){if(this.transitioning){const e=Math.min(1,(performance.now()-this.startedAt)/q9),t=j9(e);this.camera.position.lerpVectors(this.from,this.to,t),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,t),e>=1&&(this.transitioning=!1)}this.controls.update()}followTarget(e){if(this.view!=="deck"||this.transitioning)return;const t=e.clone().sub(this.controls.target);t.lengthSq()!==0&&(this.controls.target.copy(e),this.camera.position.add(t))}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose()}}const aa=13,Tl=2025,cl=2030,Y9=6371.2,dn=(n,e)=>n*(n+1)/2+e,hl=[0,-29350,-1410.3,-2556.2,2950.9,1648.7,1360.9,-2404.2,1243.8,453.4,894.7,799.6,55.8,-281.1,12,-232.9,369,187.2,-138.7,-141.9,20.9,64.3,63.8,76.7,-115.7,-40.9,14.9,-60.8,79.6,-76.9,-8.8,59.3,15.8,2.5,-11.2,14.3,23.1,10.9,-17.5,2,-21.8,16.9,14.9,-16.8,1,4.7,8,3,-.2,-2.5,-13.1,2.4,8.6,-8.7,-12.8,-1.3,-6.4,.2,2,-1,-.5,-.9,1.5,.9,-2.6,-3.9,3,-1.4,-2.5,2.4,-.6,0,-.6,-.1,1.1,-1,-.1,2.6,-2,-.1,.4,1.2,-1.2,.6,.5,.5,-.1,-.5,-.2,-1.2,-.7,.2,-.9,.6,.7,-.2,.5,.1,.7,0,.3,.2,.4,-.5,-.4],np=[0,0,4545.5,0,-3133.6,-814.2,0,-56.9,237.6,-549.6,0,278.6,-134,212,-375.4,0,45.3,220,-122.9,42.9,106.2,0,-18.4,16.8,48.9,-59.8,10.9,72.8,0,-48.9,-14.4,-1,23.5,-7.4,-25.1,-2.2,0,7.2,-12.6,11.5,-9.7,12.7,.7,-5.2,3.9,0,-24.8,12.1,8.3,-3.4,-5.3,7.2,-.6,.8,9.8,0,3.3,.1,2.5,5.4,-9,.4,-4.2,-3.8,.9,-9,0,0,2.8,-.6,.1,.5,-.3,-1.2,-1.7,-2.9,-1.8,-2.3,0,-1.2,.6,1,-1.5,0,.6,-.2,.8,.1,-.9,.1,.2,0,-.9,.7,1.2,-.3,-1.3,-.1,.2,-.2,.5,.6,-.6,-.3,-.5],Z9=[0,12.6,10,-11.2,-5.3,-8.3,-1.5,-4.4,.4,-15.6,-1.7,-2.3,-5.8,5.4,-6.8,.6,1.3,0,.7,2.3,1,-.2,-.3,.8,1.2,-.8,.4,.9,-.1,-.1,-.1,.5,-.1,-.8,-.8,.9,-.1,.2,0,.4,-.1,.3,.1,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],J9=[0,0,-21.5,0,-27.3,-11.1,0,3.8,-.2,-3.9,0,-1.3,4.1,1.6,-4.1,0,-.5,2.1,.5,1.7,1.9,0,.3,-1.6,-.4,.8,.7,.9,0,.6,.5,-.7,0,-.9,.5,-.3,0,-.3,.4,-.3,.4,-.5,-.6,.3,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function Al(n){const e=n.getUTCFullYear(),t=Date.UTC(e,0,1),i=Date.UTC(e+1,0,1);return e+(n.getTime()-t)/(i-t)}function ip(n){const e=Al(n);return e>=Tl&&e<=cl}function sp(n){const e=`IGRF-14 (IAGA, epoch ${Tl.toFixed(1)}`;return ip(n)?`${e}, secular variation to now)`:`${e}, extrapolated past its ${cl.toFixed(1)} validity limit)`}function Q9(n){const e=n-Tl,t=hl.length,i=new Float64Array(t),s=new Float64Array(t);for(let r=0;r<t;r++)i[r]=hl[r]+e*Z9[r],s[r]=np[r]+e*J9[r];return{g:i,h:s}}let tf=Number.NaN,Ec=null;function rp(n){const e=Math.round(n*100)/100;return(e!==tf||!Ec)&&(tf=e,Ec=Q9(e)),Ec}const ap=dn(aa,aa)+1,un=new Float64Array(ap),Hn=new Float64Array(ap),Tc=new Float64Array(aa+1),Ac=new Float64Array(aa+1);function e8(n,e,t,i){const{g:s,h:r}=rp(Al(i)),a=aa,o=1e-8;let l=Math.cos(n),c=Math.sin(n);Math.abs(c)<o&&(c=c>=0?o:-o,l=Math.sign(l)*Math.sqrt(1-o*o)),un[dn(0,0)]=1,Hn[dn(0,0)]=0;for(let _=1;_<=a;_++)for(let m=0;m<=_;m++){const p=dn(_,m);if(_===m)if(_===1)un[p]=c,Hn[p]=l;else{const v=Math.sqrt((2*_-1)/(2*_)),x=dn(_-1,_-1);un[p]=v*c*un[x],Hn[p]=v*(c*Hn[x]+l*un[x])}else{const v=Math.sqrt(_*_-m*m),x=(2*_-1)/v,y=dn(_-1,m);if(_-2>=m){const E=Math.sqrt((_-1)*(_-1)-m*m)/v,M=dn(_-2,m);un[p]=x*l*un[y]-E*un[M],Hn[p]=x*(l*Hn[y]-c*un[y])-E*Hn[M]}else un[p]=x*l*un[y],Hn[p]=x*(l*Hn[y]-c*un[y])}}for(let _=0;_<=a;_++)Tc[_]=Math.cos(_*e),Ac[_]=Math.sin(_*e);const h=Y9/t;let u=0,d=0,f=0,g=h*h;for(let _=1;_<=a;_++){g*=h;let m=0,p=0,v=0;for(let x=0;x<=_;x++){const y=dn(_,x),E=s[y],M=r[y],A=E*Tc[x]+M*Ac[x];m+=A*un[y],p+=A*Hn[y],v+=x*(E*Ac[x]-M*Tc[x])*un[y]}u+=g*(_+1)*m,d-=g*p,f+=g*v}return f/=c,{br:u,btheta:d,bphi:f}}function t8(n,e,t=new D){const i=n.length();if(i<1)return t.set(0,0,0);const s=Math.acos(Math.max(-1,Math.min(1,n.z/i))),r=Math.atan2(n.y,n.x),{br:a,btheta:o,bphi:l}=e8(s,r,i,e),c=Math.sin(s),h=Math.cos(s),u=Math.sin(r),d=Math.cos(r);return t.set(a*c*d+o*h*d-l*u,a*c*u+o*h*u+l*d,a*h-o*c)}function n8(n,e,t,i){const s=Math.PI/180,r=n*s,a=t*s,o=(i-e)*s,l=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(o);return Math.acos(Math.max(-1,Math.min(1,l)))*180/Math.PI}function op(n){const{g:e,h:t}=rp(Al(n)),i=e[dn(1,0)],s=e[dn(1,1)],r=t[dn(1,1)],a=-s,o=-r,l=-i,c=Math.sqrt(a*a+o*o+l*l);return{lat:Math.asin(l/c)*180/Math.PI,lon:Math.atan2(o,a)*180/Math.PI}}function nf(n,e,t=new D){const i=n*Math.PI/180,s=e*Math.PI/180,r=Math.cos(i);return t.set(r*Math.cos(s),r*Math.sin(s),Math.sin(i))}function sf(n){const e=ol(n),t=op(n),i=nf(e.lat,e.lon),s=nf(t.lat,t.lon),r=new D().crossVectors(s,i).normalize(),a=new D().crossVectors(i,r).normalize(),o=Math.atan2(s.dot(i),s.dot(a));return{x:i,y:r,z:a,tilt:o,dipole:s}}function lp(n,e,t=new D){return t.set(n.dot(e.x),n.dot(e.y),n.dot(e.z))}function cp(n,e,t=new D){return t.set(0,0,0).addScaledVector(e.x,n.x).addScaledVector(e.y,n.y).addScaledVector(e.z,n.z)}const oa=7,i8=["0, 0+","1−, 1, 1+","2−, 2, 2+","3−, 3, 3+","4−, 4, 4+","5−, 5, 5+","≥ 6−"],hp=70,s8=[[-116.53,-10719,42.375,59.753,-11363,1.7844,30.268,-.035372,-.066832,.016456,-1.3024,.0016529,.0020293,20.289,-.025203,224.91,-9234.8,22.788,7.8813,1.8362,-.27228,8.8184,2.8714,14.468,32.177,.01,0,7.0459,4,20],[-55.553,-13198,60.647,61.072,-16064,2.2534,34.407,-.038887,-.094571,.027154,-1.3901,.001346,.0013238,23.005,-.030565,55.047,-3875.7,20.178,7.9693,1.4575,.89471,9.4039,3.5215,14.474,36.555,.01,0,7.0787,4,20],[-101.34,-13480,111.35,12.386,-24699,2.6459,38.948,-.03408,-.12404,.029702,-1.4052,.0012103,.0016381,24.49,-.037705,-298.32,4400.9,18.692,7.9064,1.3047,2.4541,9.7012,7.1624,14.288,33.822,.01,0,6.7442,4,20],[-181.69,-12320,173.79,-96.664,-39051,3.2633,44.968,-.046377,-.16686,.048298,-1.5473,.0010277,.0031632,27.341,-.050655,-514.1,12482,16.257,8.5834,1.0194,3.6148,8.6042,5.5057,13.778,32.373,.01,0,7.3195,4,20],[-436.54,-9001,323.66,-410.08,-50340,3.9932,58.524,-.038519,-.26822,.074528,-1.4268,-.0010985,.0096613,27.557,-.056522,-867.03,20652,14.101,8.3501,.72996,3.8149,9.2908,6.4674,13.729,28.353,.01,0,7.4237,4,20],[-707.77,-4471.9,432.81,-435.51,-60400,4.6229,68.178,-.088245,-.21002,.11846,-2.6711,.0022305,.01091,27.547,-.05408,-424.23,1100.2,13.954,7.5337,.89714,3.7813,8.2945,5.174,14.213,25.237,.01,0,7.0037,4,20],[-1190.4,2749.9,742.56,-1110.3,-77193,7.6727,102.05,-.096015,-.74507,.11214,-1.3614,.0015157,.022283,23.164,-.074146,-2219.1,48253,12.714,7.6777,.57138,2.9633,9.3909,9.7263,11.123,21.558,.01,0,4.4518,4,20]];function up(n){return Number.isFinite(n)?Math.max(0,Math.min(oa-1,Math.floor(n))):null}function rf(n){return!Number.isFinite(n)||n>=oa-1?.5:Math.max(0,Math.min(1,n-Math.floor(n)))}const r8=20;function a8(n){return n<=hp}function o8(n){return a8(n.length())&&n.x<=r8}function dp(n){const e=Math.max(0,Math.min(oa-1,n|0));return`band ${e+1} of ${oa}, Kp ${i8[e]}`}function l8(){return"Tsyganenko 1989 (T89c), external field, Kp-driven — no IMF dependence"}function c8(n,e,t,i=new D){if(!o8(n))return null;const s=s8[Math.max(0,Math.min(oa-1,e|0))],r=25,a=170,o=30,l=0,c=40,h=4,u=50,d=s[0],f=s[1],g=s[2],_=s[3],m=s[4],p=s[5],v=s[6],x=s[7],y=s[8],E=s[9],M=s[10],A=s[11],L=s[12],b=s[13],S=s[14],P=s[15],I=s[16],F=s[17],z=s[18],W=s[19],G=s[20],Y=s[21],k=s[22],ee=s[23],Z=s[24],de=s[25],Ae=s[26],Le=s[27],Ve=s[28],ke=s[29],j=ke*ke,H=.5*r,J=1/j,U=-.5*u,se=-2*J,Me=-.5*a,fe=W,R=-.5/F,Se=2*de,pe=R*2,he=-1/3,ce=he/F,Ye=-.5,xe=-3,Ne=p*R+E*Ye,Et=v*pe-M,Tt=x*pe+A*xe,C=y*ce+L*he,w=n.x,V=n.y,K=n.z,ne=t*t,q=Math.sin(t),Ee=Math.sqrt(1-q*q),ue=w*w,be=V*V,Ie=K*K,ye=q/Ee*.5,Pe=w*Ee-K*q,Ue=w*q+K*Ee,ge=Pe+Y,Ze=Math.sqrt(ge*ge+16),N=be*be,oe=N+1e4,me=q/oe,Te=k*me,re=ye*(ge-Ze),Q=-re/Ze,De=re-Te*N,Ke=k*(-me/oe*4e4*be*V),ut=Pe*Pe,nt=Math.sqrt(ut+r),Cn=.5*(1+Pe/nt),ln=W+G*Cn,_a=H/(nt*nt*nt),qt=Ue-De,Ss=Math.sqrt(qt*qt+ln*ln),va=1/Ss,ws=ut+be,xi=z+Ss,Er=xi*xi,yi=1/(Er+ws),Tr=yi*yi*Math.sqrt(yi),Es=3*xi*Tr*va,Ar=Pe*qt,Rr=V*qt,xa=Es*Ar,Dl=Es*Rr,ya=Pe*Q+V*Ke,Ll=qt*ya-ln*G*_a*Pe,T=Tr*(2*Er-ws)+Es*Ll,O=xa*Ee+T*q,X=T*Ee-xa*q;let $=fe+de*be,B=0;if(Math.abs(Ve)>=1e-6){const Hl=Pe-l,E0=1/(Hl*Hl+c),T0=Math.sqrt(E0),Am=.5*(1+Hl*T0),Rm=20*E0*T0;$+=Ve*Am,B=-$*(Pe*Ve*Rm)}const ae=Math.sqrt(qt*qt+$*$),_e=Pe-Le,Re=1/(_e*_e+a),we=Math.sqrt(Re),He=.5*(1-_e*we),je=Me*we*Re,Oe=Math.sqrt(Math.sqrt(ut+16)-Pe),et=-Oe/(Oe*Oe+Pe)*.5,rt=1/(Z+Ae*Oe),St=et*He,dt=rt*rt,st=1/(1+be*dt),ze=He*st,xt=2*st*be*dt,it=xt*rt*st,Qt=je*st+it*Ae*St,bi=-He*xt*st,en=Se*V,Vn=ee+ae,yt=Math.sqrt(Vn*Vn+ws),Vt=1/yt,tn=1/(yt+Vn),It=Vt*tn,Ht=Vt*Vt*Vt,Cr=Vn*Ht,ti=qt*ya-$*V*en+B,Xu=Pe*Qt+bi,Il=ze/ae,qu=Il*It,ju=Il*Ht,Ku=qu*Ar,Yu=ju*Ar,Zu=qu*Rr,Ju=ju*Rr,Qu=Il*ti,e0=ze*Vt+Xu*tn+Qu*It,t0=ze*Cr+Xu*It+Qu*Ht,n0=Ku*Ee+e0*q,i0=Yu*Ee+t0*q,s0=e0*Ee-Ku*q,r0=t0*Ee-Yu*q,Nl=K+o,Ul=K-o,a0=ue+be,o0=Math.sqrt(Nl*Nl+a0),l0=Math.sqrt(Ul*Ul+a0),Fl=w-h,c0=1/(Fl*Fl+u),h0=Math.sqrt(c0),Ol=1/(1+be*J),kl=.5*(1-Fl*h0)*Ol,om=U*c0*h0*Ol,lm=se*kl*Ol*V,u0=1/(o0+Nl),d0=1/(l0-Ul),f0=w*om+V*lm,p0=kl/o0,m0=kl/l0,g0=p0*u0,_0=m0*d0,v0=w*g0,x0=-w*_0,y0=V*g0,b0=-V*_0,M0=p0+f0*u0,S0=m0+f0*d0,cm=v0+x0,hm=(v0-x0)*q,um=y0+b0,dm=(y0-b0)*q,fm=M0+S0,pm=(M0-S0)*q,w0=Math.exp(w/F),zl=w0*Ee,Bl=w0*q,Vl=zl*K,ba=Bl*K,mm=ba*be,gm=ba*Ie,_m=Vl*K,Ma=Bl*V,vm=p*Vl+v*Bl+x*Ma*V+y*ba*K,xm=E*Vl*V+M*Ma+A*Ma*be+L*Ma*Ie,ym=b*zl+S*zl*be+Ne*_m+Et*ba+Tt*mm+C*gm,bm=g*cm+_*hm,Mm=g*um+_*dm,Sm=g*fm+_*pm,wm=d*n0+f*i0+bm+(P*n0+I*i0)*ne,Em=d*Zu+f*Ju+Mm+(P*Zu+I*Ju)*ne,Tm=d*s0+f*r0+Sm+(P*s0+I*r0)*ne;return i.set(wm+m*O+vm,Em+m*Dl+xm,Tm+m*X+ym)}const ul=2,h8=3630.7,u8=[1.162,22.344,18.5,2.602,6.903,5.287,.579,.4462,.785],Fu=70,ar=1.08,Ou=5.48,Wr=.005,d8=20,f8=10,p8=[.24777,-27.003,-.46815,7.0637,-1.5918,-.090317,57.522,13.757,2.01,10.458,4.5798,2.1695],m8=[-.65385,-18.061,-.40457,-5.0995,1.2846,.078231,39.592,13.291,1.997,10.062,4.514,2.1558],pi=[-8.411078731,5932254951e-3,-907328493e-2,-11.68794634,6027598824e-3,-9218378368e-3,-6.508798398,-11824.42793,18015.66212,7.99754043,13.9669886,90.24475036,16.75728834,1015.645781,1553.493216],g8=[-3.087699646,3.516259114,18.81380577,-13.95772338,-5.497076303,.1712890838,2.392629189,-2.728020808,-14.79349936,11.08738083,4.388174084,.02492163197,.7030375685,-.7966023165,-3.835041334,2.642228681,-.2405352424,-.7297705678,-.3680255045,.1333685557,2.795140897,-1.078379954,.801402863,.1245825565,.6149982835,-.2207267314,-4.424578723,1.730471572,-1.716313926,-.2306302941,-.2450342688,.08617173961,1.54697858,-.6569391113,-.6537525353,.2079417515,12.75434981,11.37659788,636.4346279,1.752483754,3.604231143,12.83078674,7.412066636,9.434625736,676.7557193,1.701162737,3.580307144,14.64298662],_8=[.8747515218,-.9116821411,2.209365387,-2.159059518,-7.059828867,5.924671028,-1.916935691,1.996707344,-3.877101873,3.947666061,11.38715899,-8.343210833,1.194109867,-1.244316975,3.73895491,-4.406522465,-20.66884863,3.020952989,.2189908481,-.09942543549,-.927225562,.1555224669,.6994137909,-.08111721003,-.7565493881,.4686588792,4.266058082,-.3717470262,-3.920787807,.0229856987,.7039506341,-.5498352719,-6.675140817,.8279283559,-2.234773608,-1.622656137,5.187666221,6.802472048,39.13543412,2.784722096,6.979576616,25.7171676,4.495005873,8.068408272,93.47887103,4.158030104,9.313492566,57.18240483],v8=[-19091.95061,-3011.613928,20582.16203,4242.91843,-2377.091102,-1504.820043,19884.0465,2725.150544,-21389.04845,-3990.475093,2401.610097,1548.171792,-946.5493963,490.1528941,986.9156625,-489.326593,-67.99278499,8.71117571,-45.1573426,-10.761065,210.7927312,11.41764141,-178.0262808,.7558830028,339.3806753,9.904695974,69.50583193,-118.0271581,22.85935896,45.91014857,-425.6607164,15.47250738,118.2988915,65.58594397,-201.4478068,-14.5706294,19.6987797,20.3009568,86.4540742,22.50403727,23.41617329,48.48140573,24.61031329,123.5395974,223.5367692,39.50824342,65.83385762,266.2948657],Vs=9,af=4,of=10,x8=2,lf=10,y8=2,cf=0,b8=0,Rc=4,M8=[569.895366,-1603.386993],S8=[2.722188,3.766875],w8=4.5,E8=[-745796.7338,1176470141e-3,-444610.529,-57508.01028],T8=[7.925,8.085,8.47125,27.895],hf=3,Cc=1.5707963,uf=40,A8=-10,R8=-1.261,C8=-.663,df=.391734,ff=5.89715,pf=24.6833,Pc=76.37,Qa=-.1071,Dc=.13238005,Lc=[-911582e-9,-.00376654,-.00727423,-.00270084,-.00123899,-.00154387,-.0034004,-.0191858,-.0518979,.0635061,.44068,-.39657,.00561238,.00160938,-.00451229,-.0025181,-.00151599,-.00133665,-962089e-9,-.0272085,-.0524319,.0717024,.523439,-.405015,-89.5587,23.2806],Ic=[6.04133,.305415,.00606066,128379e-9,-179406e-10,1.41714,-27.2586,-4.28833,-1.30675,35.5607,8.95792,961617e-9,-801477e-9,-782795e-9,-1.65242,-16.5242,-5.33798,424878e-9,331787e-9,-704305e-9,844342e-9,953682e-10,886271e-9,25.112,20.9299,5.14569,-44.167,-51.0672,-1.87725,20.2998,48.7505,-2.97415,3.35184,-54.2921,-.838712,-10.5123,70.7594,-4.94104,106166e-9,465791e-9,-193719e-9,10.8439,-29.7968,8.08068,463507e-9,-224475e-10,177035e-9,-317581e-9,-264487e-9,102075e-9,7.7139,10.1915,-4.99797,-23.1114,-29.2043,12.2928,10.9542,33.6671,-9.3851,174615e-9,-789777e-12,686047e-9,460104e-10,-.00345216,.00221871,.0110078,-.00661373,.00249201,.0343978,-193145e-11,493963e-11,-535748e-10,191833e-10,-100496e-9,-210103e-9,-.00232195,.00315335,-.013432,-.0263222],P8=1.00891,eo=[2.28397,-5.60831],to=[1.86106,7.83281],D8=1.12541,L8=.945719,I8=-.16,N8=.08,U8=.4,F8=[-11,-7,-7,-3,-3,1,1,1,5,5,9,9],O8=[2,0,4,2,6,0,4,8,2,6,0,4],k8=[-10,-7,-4,-4,0,4,4,7,10,0,0,0,0,0],z8=[3,6,3,9,6,3,9,6,3,0,0,0,0,0],mf=[20,20,4,20,4,4,20,20,20,2,3,4.5,7,10],zi=9,fp=4,gf=78,B8=70,V8=.034906,ps=[1.174198045,-1.463820502,4.840161537,-3.674506864,82.18368896,-94.94071588,-4122.331796,4670.278676,-21.54975037,26.72661293,-72.81365728,44.09887902,40.08073706,-51.2356351,1955.348537,-1940.97155,794.0496433,-982.2441344,1889.837171,-558.9779727,-1260.543238,1260.063802,-293.5942373,344.7250789,-773.7002492,957.0094135,-1824.143669,520.7994379,1192.484774,-1192.184565,89.15537624,-98.52042999,-.08168777675,.04255969908,.3155237661,-.3841755213,2.494553332,-.06571440817,-2.76566131,.4331001908,.1099181537,-.0615412698,-.325864926,.6698439193,-5.542735524,.1604203535,5.854456934,-.8323632049,3.732608869,-3.130002153,107.0972607,-32.28483411,-115.2389298,54.4506436,-.582685332,-3.582482231,-4.046544561,3.311978102,-104.0839563,30.26401293,97.29109008,-50.62370872,-296.3734955,127.7872523,5.303648988,10.40368955,69.65230348,466.5099509,1.645049286,3.82583819,11.66675599,558.9781177,1.826531343,2.066018073,25.40971369,990.2795225,2.319489258,4.555148484,9.691185703,591.8280358],zn=[-111.6371348,124.5402702,110.3735178,-122.0095905,111.9448247,-129.1957743,-110.7586562,126.5649012,-.7865034384,-.2483462721,.8026023894,.2531397188,10.72890902,.8483902118,-10.96884315,-.8583297219,13.85650567,14.905545,10.21914434,10.09021632,6.34038246,14.40432686,12.71023437,12.83966657],H8=.03,G8=.015,$8=[154.185,-2.12446,.0601735,-.00153954,355077e-10,29.9996,262.886,99.9132],W8=[-8.1902,6.5239,5.504,7.7815,.8573,3.0986,.0774,-.038],X8=[-34.105,-2.00019,628.639,73.4847,12.5162],q8=[.55,.694,.0031,1.55,2.8,.1375,-.7,.2,.9625,-2.994,2.925,-1.775,4.3,-.275,2.7,.4312,1.55],no=[-19.0969,-9.28828,-.129687,5.58594,22.5055,.048375,.0396953,.0579023],io=[-13.675,-6.70625,2.31875,11.4062,20.4562,.047875,.036375,.05675],so=[-16.7125,-16.4625,-.1625,5.1,23.7125,.0355625,.031875,.053875],j8=[8.0719,-7.39582,-7.62341,.684671,-13.5672,11.6681,13.1154,-.890217,7.78726,-5.38346,-8.08738,.609385,-2.7041,3.53741,3.15549,-1.11069,-8.47555,.278122,2.73514,4.55625,13.1134,1.15848,-3.52648,-8.24698,-6.8571,-2.81369,2.03795,4.64383,2.49309,-1.22041,-1.67432,-.422526,-5.39796,7.10326,5.5373,-13.1918,4.67853,-7.60329,-2.53066,7.76338,5.60165,5.34816,-4.56441,7.05976,-2.62723,-.529078,1.42019,-2.93919,55.6338,-1.55181,39.8311,-80.6561,-46.9655,32.8925,-6.32296,19.7841,124.731,10.4347,-30.7581,102.68,-47.4037,-3.31278,9.37141,-50.0268,-533.319,110.426,1000.2,-1051.4,1619.48,589.855,-1462.73,1087.1,-1994.73,-1654.12,1263.33,-260.21,1424.84,1255.71,-956.733,219.946],K8=[-9.08427,10.6777,10.3288,-.969987,6.45257,-8.42508,-7.97464,1.41996,-1.9249,3.93575,2.83283,-1.48621,.244033,-.757941,-.386557,.344566,9.56674,-2.5365,-3.32916,-5.86712,-6.19625,1.83879,2.52772,4.34417,1.87268,-2.13213,-1.69134,-.176379,-.261359,.566419,.3138,-.134699,-3.83086,-8.4154,4.77005,-9.31479,37.5715,19.3992,-17.9582,36.4604,-14.9993,-3.1442,6.17409,-15.5519,2.28621,-.00891549,-.462912,2.47314,41.7555,208.614,-45.7861,-77.8687,239.357,-67.9226,66.8743,238.534,-112.136,16.2069,-40.4706,-134.328,21.56,-.201725,2.21,32.5855,-108.217,-1005.98,585.753,323.668,-817.056,235.75,-560.965,-576.892,684.193,85.0275,168.394,477.776,-289.253,-123.216,75.6501,-178.605],Y8=[1167.61,-917.782,-1253.2,-274.128,-1538.75,1257.62,1745.07,113.479,393.326,-426.858,-641.1,190.833,-29.9435,-1.04881,117.125,-25.7663,-1168.16,910.247,1239.31,289.515,1540.56,-1248.29,-1727.61,-131.785,-394.577,426.163,637.422,-187.965,30.0348,.221898,-116.68,26.0291,12.6804,4.84091,1.18166,-2.75946,-17.9822,-6.80357,-1.47134,3.02266,4.79648,.665255,-.256229,-.0857282,-.588997,.0634812,.164303,-.15285,22.2524,-22.4376,-3.85595,6.07625,-105.959,-41.6698,.378615,1.55958,44.3981,18.8521,3.19466,5.89142,-8.63227,-2.36418,-1.027,-2.31515,1035.38,2040.66,-131.881,-744.533,-3274.93,-4845.61,482.438,1567.43,1354.02,2040.47,-151.653,-845.012,-111.723,-265.343,-26.1171,216.632],Z8=.305662,J8=-.383593,Q8=.2677733,ev=-.097656,tv=-.636034,nv=-.359862,iv=.424706,sv=-.126366,rv=.292578,_f=1.21563,Nc=7.50937,av=.3665191,ov=.09599309,lv={pdynNPa:[.5,10],dstNt:[-100,20],byNt:[-10,10],bzNt:[-10,10]};function cv(n){const e=[],t=(i,s,r)=>{const[a,o]=lv[i],l=n[i];l<a?e.push(`${s} ${l.toFixed(1)} ${r} is below the fitted ${a}`):l>o&&e.push(`${s} ${l.toFixed(1)} ${r} is above the fitted ${o}`)};return t("pdynNPa","wind pressure","nPa"),t("dstNt","Dst","nT"),t("byNt","IMF By","nT"),t("bzNt","IMF Bz","nT"),e}function hv(n){return n?Number.isFinite(n.pdynNPa)&&Number.isFinite(n.dstNt)&&Number.isFinite(n.byNt)&&Number.isFinite(n.bzNt)&&n.pdynNPa>0:!1}function uv(){return"Tsyganenko 1996 (T96), external field, with an IMF term and a magnetopause"}const ct=()=>({x:0,y:0,z:0}),wr=()=>({bxx:0,byx:0,bzx:0,bxy:0,byy:0,bzy:0,bxz:0,byz:0,bzz:0});function dl(n){if(Math.abs(n)<3){const s=(n/3)**2;return 1-s*(2.2499997-s*(1.2656208-s*(.3163866-s*(.0444479-s*(.0039444-s*21e-5)))))}const e=3/n,t=.79788456-e*(77e-8+e*(.0055274+e*(9512e-8-e*(.00137237-e*(72805e-8-e*14476e-8))))),i=n-.78539816-e*(.04166397+e*(3954e-8-e*(.00262573-e*(54125e-8+e*(29333e-8-e*13558e-8)))));return t/Math.sqrt(n)*Math.cos(i)}function fl(n){if(Math.abs(n)<3){const s=(n/3)**2;return(.5-s*(.56249985-s*(.21093573-s*(.03954289-s*(.00443319-s*(31761e-8-s*1109e-8))))))*n}const e=3/n,t=.79788456+e*(156e-8+e*(.01659667+e*(17105e-8-e*(.00249511-e*(.00113653-e*20033e-8))))),i=n-2.35619449+e*(.12499612+e*(565e-7-e*(.00637879-e*(74348e-8+e*(79824e-8-e*29166e-8)))));return t/Math.sqrt(n)*Math.cos(i)}function dv(n,e,t,i,s){let r=Math.sqrt(t*t+i*i),a,o;r<1e-8?(a=1,o=0,r=1e-8):(a=i/r,o=t/r);const l=a*a,c=l-o*o;let h=0,u=0,d=0;for(let f=1;f<=3;f++){const g=n[f+5],_=r/g,m=dl(_),p=fl(_),v=Math.exp(e/g);h-=n[f-1]*p*v*a,u+=n[f-1]*(2*p/_-m)*v*a*o,d+=n[f-1]*(p/_*c-m*l)*v}for(let f=4;f<=6;f++){const g=n[f+5],_=r/g,m=e/g,p=dl(_),v=fl(_),x=Math.exp(m),y=(m*p-(_*_+m-1)*v/_)*x*a,E=(p+v/_*(m-1))*x*o;h+=n[f-1]*(_*p+m*v)*x*a,u+=n[f-1]*(y*o-E*a),d+=n[f-1]*(y*a+E*o)}s.x=h,s.y=u,s.z=d}function fv(n,e,t,i,s){const r=Math.sqrt(t*t+i*i);let a,o;r<1e-10?(a=1,o=0):(a=i/r,o=t/r);let l=0,c=0,h=0;for(let u=1;u<=3;u++){const d=n[u+5],f=r/d,g=e/d,_=dl(f),m=fl(f),p=Math.exp(g),v=m*p;l-=n[u-1]*_*p,c+=n[u-1]*v*o,h+=n[u-1]*v*a}for(let u=4;u<=6;u++){const d=n[u+5],f=r/d,g=e/d,_=dl(f),m=fl(f),p=Math.exp(g),v=(f*_+g*m)*p;l+=n[u-1]*(f*m-_*(g+1))*p,c+=n[u-1]*v*o,h+=n[u-1]*v*a}s.x=l,s.y=c,s.z=h}const ro=ct(),ao=ct();function pv(n,e,t,i,s){const r=Math.cos(n),a=Math.sin(n);dv(p8,e,t,i,ro),fv(m8,e,t,i,ao),s.x=ro.x*r+ao.x*a,s.y=ro.y*r+ao.y*a,s.z=ro.z*r+ao.z*a}const oo=[1/pi[9],1/pi[10],1/pi[11]],lo=[1/pi[12],1/pi[13],1/pi[14]];function mv(n,e,t,i){let s=0,r=0,a=0,o=0;for(let l=0;l<3;l++){const c=Math.cos(e*oo[l]),h=Math.sin(e*oo[l]);for(let u=0;u<3;u++){const d=Math.sin(t*lo[u]),f=Math.cos(t*lo[u]),g=Math.sqrt(oo[l]**2+lo[u]**2),_=Math.exp(n*g),m=-g*_*c*d,p=oo[l]*_*h*d,v=-lo[u]*_*c*f;s+=pi[o]*m,r+=pi[o]*p,a+=pi[o]*v,o++}}i.x=s,i.y=r,i.z=a}function Uc(n,e,t,i,s,r){const a=Math.sqrt(1-s*s),o=4*a*a-1;let l=0,c=0,h=0,u=0;for(let d=1;d<=2;d++)for(let f=1;f<=3;f++){const g=n[35+f],_=n[41+f],m=Math.cos(t/g),p=Math.cos(t/_),v=Math.sin(t/g),x=Math.sin(t/_);for(let y=1;y<=3;y++){const E=n[38+y],M=n[44+y],A=Math.sin(i/E),L=Math.cos(i/M),b=Math.cos(i/E),S=Math.sin(i/M),P=Math.sqrt(1/(g*g)+1/(E*E)),I=Math.sqrt(1/(_*_)+1/(M*M)),F=Math.exp(e*P),z=Math.exp(e*I);let W=0,G=0,Y=0;for(let k=1;k<=2;k++)d===1?k===1?(W=-P*F*m*A,G=F/g*v*A,Y=-F/E*m*b):(W*=a,G*=a,Y*=a):k===1?(W=-s*I*z*p*L,G=s*z/_*x*L,Y=s*z/M*p*S):(W*=o,G*=o,Y*=o),l+=n[u]*W,c+=n[u]*G,h+=n[u]*Y,u++}}r.x=l,r.y=c,r.z=h}const te={cpss:0,spss:0,dpsrr:0,rps:0,warp:0,d:0,xs:0,zs:0,dxsx:0,dxsy:0,dxsz:0,dzsx:0,dzsy:0,dzsz:0,dzetas:0,ddzetadx:0,ddzetady:0,ddzetadz:0,zsww:0};function gv(n,e,t,i){const s=te.zsww,r=te.xs*e*te.dpsrr,a=n-b8,o=.5*(1+a/Math.sqrt(a*a+Rc**2)),l=cf*.5*Rc**2/Math.sqrt(a*a+Rc**2)**3,c=y8+cf*o,h=Math.sqrt(s*s+c*c),u=Math.sqrt(te.xs*te.xs+e*e),d=(s*te.dzsx+c*l)/h,f=s*r/h,g=s*te.dzsz/h;let _,m,p;u<1e-5?(_=0,m=Math.sign(e)||1,p=0):(_=te.xs*te.dxsx/u,m=(te.xs*te.dxsy+e)/u,p=te.xs*te.dxsz/u);let v=0,x=0,y=0;for(let E=0;E<2;E++){const M=S8[E],A=Math.sqrt((h+M)**2+(u+M)**2),L=Math.sqrt((h+M)**2+(u-M)**2),b=(h+M)/A,S=(h+M)/L,P=(u+M)/A,I=(u-M)/L,F=b*d+P*_,z=b*f+P*m,W=b*g+P*p,G=S*d+I*_,Y=S*f+I*m,k=S*g+I*p,ee=A*L,Z=A+L,de=Z*Z,Ae=Math.sqrt(de-(2*M)**2),Le=Ae/(ee*de),Ve=1/(ee*Z*Ae),ke=Le/de,j=Ve-ke/A*(L*L+A*(3*A+4*L)),H=Ve-ke/L*(A*A+L*(3*L+4*A)),J=j*F+H*G,U=j*z+H*Y,se=j*W+H*k,Me=M8[E];v+=Me*((2*Le+e*U)*te.spss-te.xs*se+Le*te.dpsrr*(e*e*te.cpss+t*s)),x-=Me*e*(Le*te.dpsrr*te.xs+se*te.cpss+J*te.spss),y+=Me*((2*Le+e*U)*te.cpss+te.xs*J-Le*te.dpsrr*(n*s+e*e*te.spss))}i.x=v,i.y=x,i.z=y}function _v(n,e,t,i){const s=te.xs-w8,r=Math.sqrt(s*s+e*e);let a,o,l;r<1e-5?(a=0,o=Math.sign(e)||1,l=0):(a=s*te.dxsx/r,o=(s*te.dxsy+e)/r,l=s*te.dxsz/r);let c=0,h=0,u=0;for(let d=0;d<4;d++){const f=T8[d],g=Math.sqrt((te.dzetas+f)**2+(r+f)**2),_=Math.sqrt((te.dzetas+f)**2+(r-f)**2),m=(te.dzetas+f)/g,p=(te.dzetas+f)/_,v=(r+f)/g,x=(r-f)/_,y=m*te.ddzetadx+v*a,E=m*te.ddzetady+v*o,M=m*te.ddzetadz+v*l,A=p*te.ddzetadx+x*a,L=p*te.ddzetady+x*o,b=p*te.ddzetadz+x*l,S=g*_,P=g+_,I=P*P,F=Math.sqrt(I-(2*f)**2),z=F/(S*I),W=1/(S*P*F),G=z/I,Y=W-G/g*(_*_+g*(3*g+4*_)),k=W-G/_*(g*g+_*(3*_+4*g)),ee=Y*y+k*A,Z=Y*E+k*L,de=Y*M+k*b,Ae=E8[d];c+=Ae*((2*z+e*Z)*te.spss-s*de+z*te.dpsrr*(e*e*te.cpss+t*te.zsww)),h-=Ae*e*(z*te.dpsrr*te.xs+de*te.cpss+ee*te.spss),u+=Ae*((2*z+e*Z)*te.cpss+s*ee-z*te.dpsrr*(n*te.zsww+e*e*te.spss))}i.x=c,i.y=h,i.z=u}function vv(n,e,t){const i=e-te.rps+te.warp,s=e-uf,r=e+uf,a=A8-n,o=a*a,l=n-R8,c=n-C8,h=c*c,u=c*Qa,d=l*l,f=hf*hf,g=i*i+f,_=s*s+f,m=r*r+f,p=Math.sqrt(g),v=Math.sqrt(_),x=Math.sqrt(m),y=d+g,E=d+_,M=d+m,A=1/(h+g),L=1/(h+_),b=1/(h+m),S=o+g,P=o+_,I=o+m,F=g-h,z=_-h,W=m-h,G=Math.log(Pc/S),Y=Math.log(Pc/P),k=Math.log(Pc/I),ee=G+Dc,Z=Y+Dc,de=k+Dc,Ae=.25*(Y+k-2*G),Le=(Math.atan(a/p)+Cc)/p,Ve=(Math.atan(a/v)+Cc)/v,ke=(Math.atan(a/x)+Cc)/x,j=(G*.5+l*Le)/y,H=(Y*.5+l*Ve)/E,J=(k*.5+l*ke)/M,U=(c*A*ee-Qa-F*A*Le)*A,se=(c*L*Z-Qa-z*L*Ve)*L,Me=(c*b*de-Qa-W*b*ke)*b,fe=(g*Le-.5*l*G)/y,R=(_*Ve-.5*l*Y)/E,Se=(m*ke-.5*l*k)/M,pe=((.5*F*ee+2*Le*g*c)*A+u)*A,he=((.5*z*Z+2*Ve*_*c)*L+u)*L,ce=((.5*W*de+2*ke*m*c)*b+u)*b;t.x=df*(i*Le-.5*(s*Ve+r*ke))+ff*(i*j-.5*(s*H+r*J))+pf*(i*U-.5*(s*se+r*Me)),t.z=df*Ae+ff*(fe-.5*(R+Se))+pf*(pe-.5*(he+ce))}const En=ct(),Pi=ct(),Fc={x:0,z:0},Gn={rc:ct(),t2:ct(),t3:ct()};function xv(n,e,t,i){const s=af*af,r=Math.sqrt((1+Vs)**2+s),a=Math.sqrt((1-Vs)**2+s),o=r-a,l=n/o;te.rps=.5*(r+a)*n;const c=Math.sqrt(e*e+t*t+i*i),h=Math.sqrt((c+Vs)**2+s),u=Math.sqrt((c-Vs)**2+s),d=h-u,f=(c+Vs)/h-(c-Vs)/u;te.spss=l/c*d,te.cpss=Math.sqrt(1-te.spss**2),te.dpsrr=n/(c*c)*(f*c-d)/Math.sqrt((c*o)**2-(d*n)**2);const g=t/(t**4+1e4),_=g*t**3,m=4e4*t*g*g;te.warp=of*n*_,te.xs=e*te.cpss-i*te.spss,te.zsww=i*te.cpss+e*te.spss,te.zs=te.zsww+te.warp,te.dxsx=te.cpss-e*te.zsww*te.dpsrr,te.dxsy=-t*te.zsww*te.dpsrr,te.dxsz=-te.spss-i*te.zsww*te.dpsrr,te.dzsx=te.spss+e*te.xs*te.dpsrr,te.dzsy=te.xs*t*te.dpsrr+of*n*m,te.dzsz=te.cpss+te.xs*i*te.dpsrr,te.d=x8+lf*(t/20)**2;const p=lf*t*.005;return te.dzetas=Math.sqrt(te.zs**2+te.d**2),te.ddzetadx=te.zs*te.dzsx/te.dzetas,te.ddzetady=(te.zs*te.dzsy+te.d*p)/te.dzetas,te.ddzetadz=te.zs*te.dzsz/te.dzetas,Uc(g8,e,t,i,n,En),gv(e,t,i,Pi),Gn.rc.x=En.x+Pi.x,Gn.rc.y=En.y+Pi.y,Gn.rc.z=En.z+Pi.z,Uc(_8,e,t,i,n,En),_v(e,t,i,Pi),Gn.t2.x=En.x+Pi.x,Gn.t2.y=En.y+Pi.y,Gn.t2.z=En.z+Pi.z,Uc(v8,e,t,i,n,En),vv(e,i,Fc),Gn.t3.x=En.x+Fc.x,Gn.t3.y=En.y,Gn.t3.z=En.z+Fc.z,Gn}function Ni(n,e,t,i){const s=n*n,r=e*e,a=t*t,o=s+r+a,l=30574/(o*o*Math.sqrt(o)),c=3*l;i.bxx=l*(3*s-o),i.byx=c*n*e,i.bzx=c*n*t,i.bxy=i.byx,i.byy=l*(3*r-o),i.bzy=c*e*t,i.bxz=i.bzx,i.byz=i.bzy,i.bzz=l*(3*a-o)}function Bi(n,e,t,i,s){const r=n*n+e*e,a=Math.sqrt(r),o=t*t+(a+i)**2,l=Math.sqrt(o),c=o-4*a*i,h=.5*(c+o),d=1-(1-c/o),f=Math.log(1/d),g=1.38629436112+d*(.09666344259+d*(.03590092383+d*(.03742563713+d*.01451196212)))+f*(.5+d*(.12498593597+d*(.06880248576+d*(.03328355346+d*.00441787012)))),_=1+d*(.44325141463+d*(.0626060122+d*(.04757383546+d*.01736506451)))+f*d*(.2499836831+d*(.09200180037+d*(.04069697526+d*.00526449639))),m=a>1e-6?t/(r*l)*(h/c*_-g):Math.PI*i/l*(i-a)/c*t/(h-r);s.x=m*n,s.y=m*e,s.z=(g-_*(h-2*i*i)/c)/l}const Hs=ct(),Gs=ct();function Jo(n,e,t,i,s,r,a){const o=Math.cos(r),l=Math.sin(r),c=e*o-t*l,h=e*l+t*o,u=e*o+t*l,d=-e*l+t*o;Bi(n-i,c,h,s,Hs),Bi(n-i,u,d,s,Gs),a.x=Hs.x+Gs.x,a.y=(Hs.y+Gs.y)*o+(Hs.z-Gs.z)*l,a.z=-(Hs.y-Gs.y)*l+(Hs.z+Gs.z)*o}const ft=ct();function pp(n,e,t,i,s,r,a,o,l,c){const h=Math.cos(o),u=Math.sin(o),d=Math.cos(l),f=Math.sin(l);let g=(n-i)*d+(e-s)*f,_=(e-s)*d-(n-i)*f,m=t-r,p=g*h-m*u,v=m*h+g*u;Bi(p,_,v,a,ft);let x=ft.x*h+ft.z*u;const y=ft.z*h-ft.x*u,E=x*d-ft.y*f,M=x*f+ft.y*d;g=(n-i)*d-(e+s)*f,_=(e+s)*d+(n-i)*f,m=t-r,p=g*h-m*u,v=m*h+g*u,Bi(p,_,v,a,ft),x=ft.x*h+ft.z*u;const A=ft.z*h-ft.x*u,L=x*d+ft.y*f,b=-x*f+ft.y*d;g=-(n-i)*d+(e+s)*f,_=-(e+s)*d-(n-i)*f,m=t+r,p=g*h-m*u,v=m*h+g*u,Bi(p,_,v,a,ft),x=ft.x*h+ft.z*u;const S=ft.z*h-ft.x*u,P=-x*d-ft.y*f,I=x*f-ft.y*d;g=-(n-i)*d-(e-s)*f,_=-(e-s)*d+(n-i)*f,m=t+r,p=g*h-m*u,v=m*h+g*u,Bi(p,_,v,a,ft),x=ft.x*h+ft.z*u;const F=ft.z*h-ft.x*u,z=-x*d+ft.y*f,W=-x*f-ft.y*d;c.x=E+L+P+z,c.y=M+b+I+W,c.z=y+A+S+F}const rn=new Float64Array(78),mi=new Float64Array(237);let $s=0,co=0;const ts=wr(),vn=wr(),Ws=ct(),Xs=ct();function Oc(n,e,t,i){const s=Math.sin(i),r=fp**2,a=Math.sqrt((zi+1)**2+r)-Math.sqrt((zi-1)**2+r),o=l=>{const c=Math.sqrt((l-zi)**2+r),u=Math.sqrt((l+zi)**2+r)-c;$s=s/l*u/a,co=Math.sqrt(1-$s*$s)};for(let l=0;l<12;l++){const c=F8[l]*D8,h=O8[l]*L8,u=Math.sqrt(c*c+h*h);o(u);const d=$s,g=c*co,_=h,m=-c*d;Ni(n-g,e-_,t-m,ts),Math.abs(_)>1e-10?Ni(n-g,e+_,t-m,vn):(vn.bxx=0,vn.byx=0,vn.bzx=0,vn.bxz=0,vn.byz=0,vn.bzz=0),rn[3*l]=ts.bxz+vn.bxz,rn[3*l+1]=ts.byz+vn.byz,rn[3*l+2]=ts.bzz+vn.bzz,rn[3*(l+12)]=(ts.bxx+vn.bxx)*s,rn[3*(l+12)+1]=(ts.byx+vn.byx)*s,rn[3*(l+12)+2]=(ts.bzx+vn.bzx)*s}{const l=Math.abs(eo[0]+to[0]);o(l);const c=$s,h=co,u=n*h-t*c,d=n*c+t*h;Jo(u,e,d,eo[0],to[0],P8,Xs),rn[72]=Xs.x*h+Xs.z*c,rn[73]=Xs.y,rn[74]=-Xs.x*c+Xs.z*h}{const l=Math.abs(to[1]-eo[1]);o(l);const c=$s,h=co,u=n*h-t*c-eo[1],d=n*c+t*h;Bi(u,e,d,to[1],Ws),rn[75]=Ws.x*h+Ws.z*c,rn[76]=Ws.y,rn[77]=-Ws.x*c+Ws.z*h}}function $n(n,e,t,i,s,r,a){mi[3*(t-1)]=a*(i*n+r*e),mi[3*(t-1)+1]=a*s,mi[3*(t-1)+2]=a*(r*n-i*e)}const at=wr(),ot=wr(),Ut=wr(),Ft=wr(),Tn=new Float64Array(5),An=new Float64Array(5);function kc(n,e,t,i){const s=Math.sin(i),r=Math.cos(i);let a=n*r-t*s-I8,o=t*r+n*s;const l=a*a+e*e,c=Math.sqrt(l);Tn[0]=a/c,An[0]=e/c,Tn[1]=Tn[0]**2-An[0]**2,An[1]=2*An[0]*Tn[0];for(let v=2;v<5;v++)Tn[v]=Tn[v-1]*Tn[0]-An[v-1]*An[0],An[v]=An[v-1]*Tn[0]+Tn[v-1]*An[0];const h=l+o*o,u=Math.sqrt(h),d=o/u,f=c/u,g=Math.sqrt(.5*(1+d)),_=Math.sqrt(.5*(1-d)),m=_/g,p=1/m;for(let v=1;v<=5;v++){const x=v*Tn[v-1]/(u*f)*(m**v+p**v),y=-.5*v*An[v-1]/u*(m**(v-1)/(g*g)-p**(v-1)/(_*_)),E=x*d*Tn[0]-y*An[0],M=x*d*An[0]+y*Tn[0],A=-x*f;mi[3*(v-1)]=E*r+A*s,mi[3*(v-1)+1]=M,mi[3*(v-1)+2]=-E*s+A*r}a=n*r-t*s,o=t*r+n*s;for(let v=1;v<=9;v++){const x=v===3||v===5||v===6?N8:U8,y=k8[v-1]*x,E=z8[v-1]*x,M=mf[v-1];Ni(a-y,e-E,o-M,at),Ni(a-y,e+E,o-M,ot),Ni(a-y,e-E,o+M,Ut),Ni(a-y,e+E,o+M,Ft);let A=v*3+3,L=A+1,b=L+1;$n(r,s,A,at.bxx+ot.bxx-Ut.bxx-Ft.bxx,at.byx+ot.byx-Ut.byx-Ft.byx,at.bzx+ot.bzx-Ut.bzx-Ft.bzx,1),$n(r,s,L,at.bxy-ot.bxy-Ut.bxy+Ft.bxy,at.byy-ot.byy-Ut.byy+Ft.byy,at.bzy-ot.bzy-Ut.bzy+Ft.bzy,1),$n(r,s,b,at.bxz+ot.bxz+Ut.bxz+Ft.bxz,at.byz+ot.byz+Ut.byz+Ft.byz,at.bzz+ot.bzz+Ut.bzz+Ft.bzz,1),A+=27,L+=27,b+=27,$n(r,s,A,at.bxx+ot.bxx+Ut.bxx+Ft.bxx,at.byx+ot.byx+Ut.byx+Ft.byx,at.bzx+ot.bzx+Ut.bzx+Ft.bzx,s),$n(r,s,L,at.bxy-ot.bxy+Ut.bxy-Ft.bxy,at.byy-ot.byy+Ut.byy-Ft.byy,at.bzy-ot.bzy+Ut.bzy-Ft.bzy,s),$n(r,s,b,at.bxz+ot.bxz-Ut.bxz-Ft.bxz,at.byz+ot.byz-Ut.byz-Ft.byz,at.bzz+ot.bzz-Ut.bzz-Ft.bzz,s)}for(let v=1;v<=5;v++){const x=mf[v+8];Ni(a,e,o-x,at),Ni(a,e,o+x,ot);let y=58+v*2,E=y+1;$n(r,s,y,at.bxx-ot.bxx,at.byx-ot.byx,at.bzx-ot.bzx,1),$n(r,s,E,at.bxz+ot.bxz,at.byz+ot.byz,at.bzz+ot.bzz,1),y+=10,E+=10,$n(r,s,y,at.bxx+ot.bxx,at.byx+ot.byx,at.bzx+ot.bzx,s),$n(r,s,E,at.bxz-ot.bxz,at.byz-ot.byz,at.bzz-ot.bzz,s)}}const ho=[0,1,2,3].map(n=>1/ps[64+n]),uo=[0,1,2,3].map(n=>1/ps[68+n]),fo=[0,1,2,3].map(n=>1/ps[72+n]),po=[0,1,2,3].map(n=>1/ps[76+n]);function yv(n,e,t,i,s){let r=0,a=0,o=0;const l=Math.cos(n),c=Math.sin(n),h=4*l*l-1;let u=0;for(let d=1;d<=2;d++)for(let f=0;f<4;f++){const g=Math.cos(t*ho[f]),_=Math.cos(t*fo[f]),m=Math.sin(t*ho[f]),p=Math.sin(t*fo[f]);for(let v=0;v<4;v++){const x=Math.sin(i*uo[v]),y=Math.cos(i*po[v]),E=Math.cos(i*uo[v]),M=Math.sin(i*po[v]),A=Math.sqrt(ho[f]**2+uo[v]**2),L=Math.sqrt(fo[f]**2+po[v]**2),b=Math.exp(e*A),S=Math.exp(e*L);let P=0,I=0,F=0;for(let z=1;z<=2;z++)d===1?z===1?(P=-A*b*g*x,I=ho[f]*b*m*x,F=-uo[v]*b*g*E):(P*=l,I*=l,F*=l):z===1?(P=-c*L*S*_*y,I=c*fo[f]*S*p*y,F=c*po[v]*S*_*M):(P*=h,I*=h,F*=h),r+=ps[u]*P,a+=ps[u]*I,o+=ps[u]*F,u++}}s.x=r,s.y=a,s.z=o}function zc(n){let e=0,t=0,i=0;for(let s=0;s<26;s++)e+=Lc[s]*rn[3*s],t+=Lc[s]*rn[3*s+1],i+=Lc[s]*rn[3*s+2];n.x=e,n.y=t,n.z=i}function Bc(n){let e=0,t=0,i=0;for(let s=0;s<79;s++)e+=Ic[s]*mi[3*s],t+=Ic[s]*mi[3*s+1],i+=Ic[s]*mi[3*s+2];n.x=e,n.y=t,n.z=i}const xn=ct(),kr=ct(),mo=ct();function bv(n,e,t,i,s){const r=(90-gf)*.01745329,a=3.141592654-r,o=(gf-B8)*.01745329,l=fp**2,c=Math.sin(n),h=e*e+t*t+i*i,u=Math.sqrt(h),d=u*h,f=Math.sqrt((u-zi)**2+l),_=Math.sqrt((u+zi)**2+l)-f,m=Math.sqrt((zi+1)**2+l)-Math.sqrt((zi-1)**2+l),p=c/u*_/m,v=Math.sqrt(1-p*p),x=e*v-i*p,y=e*p+i*v,E=x!==0||t!==0?Math.atan2(t,x):0,M=Math.atan2(Math.sqrt(x*x+t*t),y),A=Math.sin(M),L=A/(A**6*(1-d)+d)**.1666666667;let b=Math.asin(L);M>1.5707963&&(b=3.141592654-b);const S=o*Math.sin(E*.5)**2,P=r+S,I=a-S;let F=0;const z=V8;(b<P-z||b>I+z)&&(F=1),b>P+z&&b<I-z&&(F=2),b>=P-z&&b<=P+z&&(F=3),b>=I-z&&b<=I+z&&(F=4);let W=0,G=0,Y=0;if(F===1)Oc(e,t,i,n),zc(xn),W=xn.x,G=xn.y,Y=xn.z;else if(F===2)kc(e,t,i,n),Bc(xn),W=xn.x,G=xn.y,Y=xn.z;else if(F===3||F===4){const k=F===3,ee=k?P:I,Z=ee-z,de=ee+z,Ae=Math.sqrt(u),Le=Ae/(d+1/Math.sin(Z)**6-1)**.1666666667,Ve=Ae/(d+1/Math.sin(de)**6-1)**.1666666667,ke=k?1:-1,j=ke*Math.sqrt(1-Le*Le),H=ke*Math.sqrt(1-Ve*Ve),J=u*Le*Math.cos(E),U=u*Le*Math.sin(E),se=u*j,Me=J*v+se*p,fe=-J*p+se*v,R=u*Ve*Math.cos(E),Se=u*Ve*Math.sin(E),pe=u*H,he=R*v+pe*p,ce=-R*p+pe*v;k?(Oc(Me,U,fe,n),zc(xn),kc(he,Se,ce,n),Bc(kr)):(kc(Me,U,fe,n),Bc(xn),Oc(he,Se,ce,n),zc(kr));const Ye=Math.sqrt((he-Me)**2+(Se-U)**2+(ce-fe)**2),Ne=Math.sqrt((e-Me)**2+(t-U)**2+(i-fe)**2)/Ye;W=xn.x*(1-Ne)+kr.x*Ne,G=xn.y*(1-Ne)+kr.y*Ne,Y=xn.z*(1-Ne)+kr.z*Ne}yv(n,e,t,i,mo),s.x=W+mo.x,s.y=G+mo.y,s.z=Y+mo.z}const go=[zn[16],zn[17]],_o=[zn[18],zn[19]],vo=[zn[20],zn[21]],xo=[zn[22],zn[23]];function Mv(n,e,t,i,s){const r=Math.cos(i),a=Math.sin(i),o=4*r*r-1;let l=0,c=0,h=0,u=0;for(let d=1;d<=2;d++)for(let f=0;f<2;f++){const g=Math.cos(e/go[f]),_=Math.cos(e/vo[f]),m=Math.sin(e/go[f]),p=Math.sin(e/vo[f]);for(let v=0;v<2;v++){const x=Math.sin(t/_o[v]),y=Math.cos(t/xo[v]),E=Math.cos(t/_o[v]),M=Math.sin(t/xo[v]),A=Math.sqrt(1/go[f]**2+1/_o[v]**2),L=Math.sqrt(1/vo[f]**2+1/xo[v]**2),b=Math.exp(n*A),S=Math.exp(n*L);let P=0,I=0,F=0;for(let z=1;z<=2;z++)d===1?z===1?(P=-A*b*g*x,I=b/go[f]*m*x,F=-b/_o[v]*g*E):(P*=r,I*=r,F*=r):z===1?(P=-a*L*S*_*y,I=a*S/vo[f]*p*y,F=a*S/xo[v]*_*M):(P*=o,I*=o,F*=o),l+=zn[u]*P,c+=zn[u]*I,h+=zn[u]*F,u++}}s.x=l,s.y=c,s.z=h}function mp(n,e,t){const i=Nc*Nc,s=n*n,r=e*e,a=t*t,o=s+r+a,l=Math.sqrt(o),c=n/l,h=e/l,u=t/l,d=l<_f?0:Math.sqrt((l-_f)**2+i)-Nc,f=n+d*(Z8+J8*c+Q8*c*c+ev*h*h+tv*u*u),g=e+d*(nv*h+iv*c*h),_=t+d*(sv*u+rv*c*u),m=g*g,p=f*f+m+_*_,v=Math.sqrt(p)**3,x=f*f+m;if(x<1e-5)return-1;const y=Math.sqrt(x),E=x/v,M=av+.5*ov*(1-f/y),A=Math.sin(M)**2;return E-A}function Sv(n,e){return e<0?Math.sqrt(-2*e*2.718281828459)*n*Math.exp(e*n*n):n*Math.exp(e*(n*n-1))}function wv(n,e){return e<=0?Math.exp(e*n*n):Math.exp(e*(n*n-1))}function vf(n,e,t){const i=2*t**3;if(n-e<-t)return 0;if(n-e>=t)return 1;if(n>=e-t&&n<e){const r=(n-e+t)**3;return 1.5*r/(i+r)}const s=(n-e-t)**3;return 1+1.5*s/(i-s)}function Vc(n,e,t,i,s,r,a,o,l,c,h){let u=0;for(let d=0;d<5;d++){let f=0;for(let g=0;g<4;g++){const _=16*d+4*g;f+=(g===0?i:g===1?s:g===2?r:a)*(n[_]+n[_+1]*o+n[_+2]*l+n[_+3]*c)}u+=(h?wv(t,e[d]):Sv(t,e[d]))*f}return u}function Hc(n,e,t,i){const s=mp(n,e,t),r=x=>s/Math.sqrt(s*s+x[5]**2),a=x=>x[6]**3/Math.sqrt(s*s+x[6]**2)**3,o=x=>s/Math.sqrt(s*s+x[7]**2)**5*3.493856*x[7]**4,l=n*n+e*e,c=Math.sqrt(l+t*t),h=Math.sqrt(l),u=n/h,d=e/h,f=2*d*u,g=u*u-d*d,_=f*u+g*d,m=g*u-f*d,p=_*u+m*d,v=t/c;i.x=Vc(j8,no,v,1,u,g,m,r(no),a(no),o(no),!1),i.y=Vc(K8,io,v,d,f,_,p,r(io),a(io),o(io),!1),i.z=Vc(Y8,so,v,1,u,g,m,r(so),a(so),o(so),!0)}function Ev(n,e,t,i,s,r,a){const o=n*n+e*e,l=Math.sqrt(o),c=n/l,h=e/l;let u=1,d=0;const f=o+t*t,g=Math.sqrt(f),_=t/g,m=l/g,p=Math.sqrt(.5*(1+_)),v=Math.sqrt(.5*(1-_));let x=1,y=1;const E=v/p,M=1/E;for(let A=1;A<=i;A++){const L=u*c-d*h,b=u*h+d*c;u=L,d=b;const S=x*E,P=y*M,I=A*L/(g*m)*(S+P),F=-.5*A*b/g*(x/(p*p)-y/(v*v));x=S,y=P,s[A-1]=I*_*c-F*h,r[A-1]=I*_*h+F*c,a[A-1]=-I*m}}function xf(n,e,t,i,s){const r=n*n,a=r+e*e,o=a+t*t,l=o*Math.sqrt(o);i===0?(s.x=t/a**2*(o*(e*e-r)-a*r)/l,s.y=-n*e*t/a**2*(2*o+a)/l,s.z=n/l):(s.x=t/a**2*(e*e-r),s.y=-2*n*e*t/a**2,s.z=n/a)}const qs=new Float64Array(5),js=new Float64Array(5),Ks=new Float64Array(5),yo=ct(),bo=ct(),Mo=ct();function yf(n,e,t,i){const s=$8,r=W8;Ev(n,e,t,5,qs,js,Ks),pp(n,e,t,r[0],r[1],r[2],r[3],r[4],r[5],yo),xf(n-r[6],e,t,0,bo),xf(n-r[7],e,t,1,Mo),i.x=s[0]*qs[0]+s[1]*qs[1]+s[2]*qs[2]+s[3]*qs[3]+s[4]*qs[4]+s[5]*bo.x+s[6]*Mo.x+s[7]*yo.x,i.y=s[0]*js[0]+s[1]*js[1]+s[2]*js[2]+s[3]*js[3]+s[4]*js[4]+s[5]*bo.y+s[6]*Mo.y+s[7]*yo.y,i.z=s[0]*Ks[0]+s[1]*Ks[1]+s[2]*Ks[2]+s[3]*Ks[3]+s[4]*Ks[4]+s[5]*bo.z+s[6]*Mo.z+s[7]*yo.z}const So=ct(),wo=ct(),Eo=ct(),To=ct(),Ao=ct();function bf(n,e,t,i){const s=X8,r=q8;Jo(n,e,t,r[0],r[1],r[2],So),Jo(n,e,t,r[3],r[4],r[5],wo),Jo(n,e,t,r[6],r[7],r[8],Eo),Bi(n-r[9],e,t,r[10],To),pp(n,e,t,r[11],r[12],r[13],r[14],r[15],r[16],Ao),i.x=s[0]*So.x+s[1]*wo.x+s[2]*Eo.x+s[3]*To.x+s[4]*Ao.x,i.y=s[0]*So.y+s[1]*wo.y+s[2]*Eo.y+s[3]*To.y+s[4]*Ao.y,i.z=s[0]*So.z+s[1]*wo.z+s[2]*Eo.z+s[3]*To.z+s[4]*Ao.z}const Dt=ct(),Di=ct();function Tv(n,e,t,i,s){const r=Math.cos(i),a=Math.sin(i),o=n*r-t*a,l=t*r+n*a,c=H8,h=G8,u=mp(o,e,l);let d=0,f=0,g=0;if(u<-.045)bf(o,e,l,Dt),d=-Dt.x*.02,f=-Dt.y*.02,g=-Dt.z*.02;else if(u<-c+h){bf(o,e,l,Dt),Hc(o,e,l,Di);const _=-.02*vf(u,-c,h),m=-.02-_;d=Dt.x*m+Di.x*_,f=Dt.y*m+Di.y*_,g=Dt.z*m+Di.z*_}else if(u<c-h)Hc(o,e,l,Dt),d=-Dt.x*.02,f=-Dt.y*.02,g=-Dt.z*.02;else if(u<c+h){yf(o,e,l,Dt),Hc(o,e,l,Di);const _=-.02*vf(u,c,h),m=-.02-_;d=Dt.x*_+Di.x*m,f=Dt.y*_+Di.y*m,g=Dt.z*_+Di.z*m}else yf(o,e,l,Dt),d=-Dt.x*.02,f=-Dt.y*.02,g=-Dt.z*.02;s.x=d*r+g*a,s.y=f,s.z=g*r-d*a}const Ro=ct(),Co=ct();function Av(n,e,t,i,s){Mv(e,t,i,n,Ro),Tv(e,t,i,n,Co),s.x=Ro.x+Co.x,s.y=Ro.y+Co.y,s.z=Ro.z+Co.z}function Mf(n,e,t,i,s){const r=Math.sin(n),a=Math.cos(n),o=e*e,l=i*i,c=3*i*e,h=t*t,u=30574/Math.sqrt(o+h+l)**5;s.x=u*((h+l-2*o)*r-c*a),s.y=-3*t*u*(e*r+i*a),s.z=u*((o+h-2*l)*a-c*r)}const Rv=ar,Cv=Wr;function Pv(n,e){const t=(e/ul)**.14,i=Ou/t,s=Fu/t,r=n.y*n.y+n.z*n.z,a=s*s,o=Math.max(0,s+n.x-i),l=o*o,c=a+r;return Math.sqrt((c+l+Math.sqrt((c+l)**2-4*a*l))/(2*a))}function Dv(n,e){return Pv(n,e)<Rv+Cv}function Lv(n){const e=(n/ul)**.14,t=Fu/e;return ar*t-t+Ou/e}const Po=ct(),Do=ct(),Lo=ct(),Ys=ct(),In=ct();function Iv(n,e,t,i=new D){const{pdynNPa:s,dstNt:r,byNt:a,bzNt:o}=e,{x:l,y:c,z:h}=n,u=u8,d=Math.sin(t),f=t,g=.8*r-13*Math.sqrt(s),_=Math.sqrt(a*a+o*o);let m=0;(a!==0||o!==0)&&(m=Math.atan2(a,o),m<=0&&(m+=6.2831853));const p=Math.cos(m),v=Math.sin(m),y=718.5*Math.sqrt(s)*_*Math.sin(m/2)/h8-1,E=Math.sqrt(s/ul)-1,M=-1.162*g,A=u[1]+u[2]*E+u[3]*y,L=u[4]+u[5]*E,b=u[6]+u[7]*y,S=20*b,P=u[8],I=(s/ul)**.14,F=I**3,z=c*p-h*v,W=h*p+c*v,G=Math.exp(l/d8-(z/f8)**2),Y=0,k=P*a*G,ee=P*o*G,Z=P*_,de=l*I,Ae=c*I,Le=h*I,Ve=Ou/I,ke=Fu/I,j=c*c+h*h,H=ke*ke,J=Math.max(0,ke+l-Ve),U=J*J,se=H+j,Me=Math.sqrt((se+U+Math.sqrt((se+U)**2-4*H*U))/(2*H));if(Me<ar+Wr){pv(f,de,Ae,Le,Po);const fe=xv(d,de,Ae,Le);bv(f,de,Ae,Le,Do),Av(f,de,Ae,Le,Lo),mv(de,z*I,W*I,Ys);const R=Ys.y*p+Ys.z*v,Se=Ys.z*p-Ys.y*v,pe=Po.x*F+M*fe.rc.x+A*fe.t2.x+L*fe.t3.x+b*Do.x+S*Lo.x+Z*Ys.x,he=Po.y*F+M*fe.rc.y+A*fe.t2.y+L*fe.t3.y+b*Do.y+S*Lo.y+Z*R,ce=Po.z*F+M*fe.rc.z+A*fe.t2.z+L*fe.t3.z+b*Do.z+S*Lo.z+Z*Se;if(Me<ar-Wr)return i.set(pe,he,ce);const Ye=.5*(1-(Me-ar)/Wr),xe=.5*(1+(Me-ar)/Wr);return Mf(t,l,c,h,In),i.set((pe+In.x)*Ye+Y*xe-In.x,(he+In.y)*Ye+k*xe-In.y,(ce+In.z)*Ye+ee*xe-In.z)}return Mf(t,l,c,h,In),i.set(Y-In.x,k-In.y,ee-In.z)}const on=6371.2,Nv=on*160,Uv=hp,Fv={innerRadiusKm:on,outerRadiusKm:on*15,maxSteps:4e3,stepFraction:.035,minStepKm:40,maxStepKm:2200,maxArcLengthKm:1/0},Ov={outerRadiusKm:on*Uv,maxStepKm:on*.25,maxArcLengthKm:Nv},Gc=new D,$c=new D,Wc=new D,Sf=new D,Xc=new D,zr=new D,qc=new D,kv=new D;function zv(n,e,t,i){if(t8(n,e,i),!t)return"ok";if(lp(zr.copy(n).divideScalar(on),t.basis,zr),t.model.name==="t89"){if(!c8(zr,t.model.band,t.basis.tilt,qc))return"out-of-model"}else{if(!Dv(zr,t.model.input.pdynNPa))return"magnetopause";Iv(zr,t.model.input,t.basis.tilt,qc)}return i.add(cp(qc,t.basis,kv)),"ok"}function Io(n,e,t,i){const s=zv(n,e,t,i);if(s!=="ok")return s;const r=i.length();return r>1e-9?(i.divideScalar(r),"ok"):"null-field"}function wf(n,e,t,i={}){const s=i.external??null,r={...Fv,...s?Ov:null,...i},a=[],o=n.clone();let l=o.length()/on,c=0,h="steps";for(let u=0;u<r.maxSteps;u++){a.push(o.clone());const d=o.length();if(l=Math.max(l,d/on),u>0&&d<=r.innerRadiusKm){h="surface";break}if(d>=r.outerRadiusKm){h=s?s.model.name==="t89"?"out-of-model":"truncated":"outer";break}if(c>=r.maxArcLengthKm){h="truncated";break}const f=Math.min(r.maxStepKm,Math.max(r.minStepKm,r.stepFraction*d)),g=t*f,_=Io(o,e,s,Gc);if(_!=="ok"){h=_;break}const m=Io(Xc.copy(o).addScaledVector(Gc,g/2),e,s,$c);if(m!=="ok"){h=m;break}const p=Io(Xc.copy(o).addScaledVector($c,g/2),e,s,Wc);if(p!=="ok"){h=p;break}const v=Io(Xc.copy(o).addScaledVector(Wc,g),e,s,Sf);if(v!=="ok"){h=v;break}o.addScaledVector(Gc,g/6).addScaledVector($c,g/3).addScaledVector(Wc,g/3).addScaledVector(Sf,g/6),c+=f}return{points:a,startsAt:"surface",endsAt:h,apexRe:l,closed:!1,truncated:h==="truncated"||h==="out-of-model"||h==="magnetopause"}}function gp(n,e,t={}){const i=wf(n,e,1,t),s=wf(n,e,-1,t);return{points:[...s.points.slice(1).reverse(),...i.points],startsAt:s.endsAt,endsAt:i.endsAt,apexRe:Math.max(i.apexRe,s.apexRe),closed:s.endsAt==="surface"&&i.endsAt==="surface",truncated:i.truncated||s.truncated}}function Bv(n,e,t=0){const i=n*Math.PI/180,s=e*Math.PI/180,r=on+t;return new D(r*Math.cos(i)*Math.cos(s),r*Math.cos(i)*Math.sin(s),r*Math.sin(i))}const ku={latitudes:[-72,-64,-55,-42,-28,28,42,55,64,72],meridianCount:8,altitudeKm:120},Vv={latitudes:[-55,55],meridianCount:6,altitudeKm:120};function Hv(n=ku){const e=[];for(const t of n.latitudes)for(let i=0;i<n.meridianCount;i++)e.push(Bv(t,360/n.meridianCount*i,n.altitudeKm));return e}function _p(n,e){if(hv(e.wind))return{basis:sf(n),model:{name:"t96",input:e.wind}};if(e.kp===null)return null;const t=up(e.kp);return t===null?null:{basis:sf(n),model:{name:"t89",band:t}}}function Gv(n,e){const t=on+ku.altitudeKm,i=new D,s={external:e,outerRadiusKm:on*25},r=u=>{const d=u*Math.PI/180;return cp(i.set(Math.cos(d),0,Math.sin(d)).multiplyScalar(t),e.basis)},a=u=>{const d=gp(r(u),n,s);if(!d.closed)return-1/0;let f=-1/0;for(const g of d.points)f=Math.max(f,lp(i.copy(g).divideScalar(on),e.basis,i).x);return f},o=(u,d,f)=>{let g=u,_=-1/0;for(let m=u;m<=d;m+=f){const p=a(m);p>_&&(_=p,g=m)}return _===-1/0?Number.NaN:g},l=o(-88,88,4);if(Number.isNaN(l))return null;const c=o(l-4,l+4,1),h=a(Number.isNaN(c)?l:c);return Number.isFinite(h)?h:null}function $v(n,e){return 16726e-10*n*e*e}function vp(n,e){return(10.22+1.29*Math.tanh(.184*(n+8.14)))*Math.pow(e,-1/6.6)}function Wv(n,e){return(.58-.007*n)*(1+.024*Math.log(e))}function Xv(n,e,t){return n*Math.pow(2/(1+Math.cos(t)),e)}function Rl(n,e,t){if(n===null||e===null||t===null||!(e>0)||!(t>0))return null;const i=$v(e,t),s=vp(n,i);return{r0Re:s,alpha:Wv(n,i),dynPressureNPa:i,bowShockRe:qv(s)}}function qv(n,e=8){const t=1.6666666666666667,i=e*e;return n*(1+1.1*(((t-1)*i+2)/((t+1)*(i-1))))}const jv=ku;function Kv(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const Yv=120,Zv=80,Jv=3,Qv=Math.cos(Jv*Math.PI/180),ex=4,No={pdynNPa:.25,dstNt:5,byNt:1,bzNt:1};function tx(n){if(!n)return null;if(n.model.name==="t89")return`t89:${n.model.band}`;const e=(i,s)=>Math.round(i/s),t=n.model.input;return`t96:${e(t.pdynNPa,No.pdynNPa)}:${e(t.dstNt,No.dstNt)}:${e(t.byNt,No.byNt)}:${e(t.bzNt,No.bzNt)}`}function nx(n){return Jn(n).divideScalar(on)}const ix=new qe(.42,.78,.95),sx=new qe(.72,.55,1),rx=`
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
`,ax=`
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
`;class ox{group=new fn;lines=[];materials=[];tracedFor=null;tracedSet=null;tracedKey=null;tracedSun=null;far=!1;reduced=!1;frozenAt=0;lastTraceMs=0;truncated=0;external=null;job=null;constructor(){this.group.name="field-lines-igrf14-external"}ensureTraced(e,t){const i=Math.floor(e.getTime()/864e5),s=this.far?"signature":"full",r=_p(e,t),a=tx(r),o=u=>r!==null&&u!==null&&u.dot(r.basis.x)<Qv,l=this.tracedSun!==null&&this.tracedFor===i&&this.tracedSet===s&&this.tracedKey===a&&!o(this.tracedSun);if(this.job&&(this.job.set!==s||this.job.key!==a||this.job.day!==i||o(this.job.sun))&&(this.job=null),l&&!this.job)return;if(!this.job){const u=s==="signature"?Vv:jv;this.job={date:new Date(e.getTime()),ext:r,set:s,key:a,day:i,sun:r?r.basis.x.clone():new D(1,0,0),seeds:Hv(u),done:[],next:0,spentMs:0}}const c=this.job,h=performance.now();for(;c.next<c.seeds.length&&performance.now()-h<ex;)c.done.push(gp(c.seeds[c.next],c.date,{external:c.ext})),c.next++;c.spentMs+=performance.now()-h,!(c.next<c.seeds.length)&&(this.tracedFor=c.day,this.tracedSet=c.set,this.tracedKey=c.key,this.tracedSun=c.sun,this.external=c.ext,this.lastTraceMs=c.spentMs,this.truncated=c.done.filter(u=>u.truncated).length,this.build(c.done),this.job=null)}get retracing(){return this.job!==null}get traceMs(){return this.lastTraceMs}get truncatedCount(){return this.truncated}get externalUsed(){return this.external}build(e){this.dispose();for(const t of e){if(t.points.length<2)continue;const i=[];for(const o of t.points){const l=nx(o);i.push(l.x,l.y,l.z)}const s=new At;s.setAttribute("position",new ht(i,3));const r=new mn({uniforms:{uTime:{value:0},uShiver:{value:0},uCamDist:{value:20},uGlobeR:{value:.1},uFarFade:{value:1},uColor:{value:t.closed?ix:sx},uOpacity:{value:t.closed?.34:.46}},vertexShader:rx,fragmentShader:ax,transparent:!0,blending:pn,depthWrite:!1});this.materials.push(r);const a=new vl(s,r);a.name=t.closed?"field-line-closed":"field-line-open",this.lines.push(a),this.group.add(a)}}setCamera(e,t,i){const s=e>Yv?!0:e<Zv?!1:this.far;s!==this.far&&(this.far=s);const r=this.far?.85:1-.45*Kv(26,100,e);for(const a of this.materials)a.uniforms.uFarFade.value=r,a.uniforms.uCamDist.value=i,a.uniforms.uGlobeR.value=t}setScale(e){this.group.scale.setScalar(e)}setVisible(e){this.group.visible=e}setReducedMotion(e){e&&!this.reduced&&(this.frozenAt=this.materials[0]?.uniforms.uTime?.value??0),this.reduced=e}setDynamics(e,t){const i=this.reduced?this.frozenAt:e,s=t===null?0:Math.max(0,Math.min(1,(t-4)/5));for(const r of this.materials)r.uniforms.uTime.value=i,r.uniforms.uShiver.value=s}get lineCount(){return this.lines.length}get farSet(){return this.far}get pointCount(){return this.lines.reduce((e,t)=>e+(t.geometry.getAttribute("position")?.count??0),0)}dispose(){for(const e of this.lines)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.lines=[],this.materials=[]}}const Uo=48,Br=40,lx=100,cx=lx*Math.PI/180;function Ef(n,e,t){const i=Math.abs(t.y)>.9?new D(1,0,0):new D(0,1,0),s=new D().crossVectors(t,i).normalize(),r=new D().crossVectors(t,s).normalize(),a=[];for(let h=0;h<=Uo;h++){const u=h/Uo*cx,d=Xv(n,e,u),f=[];for(let g=0;g<Br;g++){const _=g/Br*Math.PI*2,m=t.clone().multiplyScalar(Math.cos(u)).addScaledVector(s,Math.sin(u)*Math.cos(_)).addScaledVector(r,Math.sin(u)*Math.sin(_));f.push(m.multiplyScalar(d))}a.push(f)}const o=[],l=(h,u)=>{o.push(h.x,h.y,h.z,u.x,u.y,u.z)};for(let h=0;h<=Uo;h+=h<16?6:10){const u=a[h];for(let d=0;d<Br;d++)l(u[d],u[(d+1)%Br])}for(let h=0;h<Br;h+=8)for(let u=0;u<Uo;u++)l(a[u][h],a[u+1][h]);const c=new At;return c.setAttribute("position",new ht(o,3)),c}class hx{group=new fn;magnetopause;bowShock;get magnetopauseObject(){return this.magnetopause}get bowShockObject(){return this.bowShock}current=null;constructor(){this.group.name="magnetosphere",this.magnetopause=new ea(new At,new xs({color:new qe(.45,.9,.8),transparent:!0,opacity:.22,blending:pn,depthWrite:!1})),this.magnetopause.name="magnetopause-shue1998",this.bowShock=new ea(new At,new xs({color:new qe(1,.62,.35),transparent:!0,opacity:.13,blending:pn,depthWrite:!1})),this.bowShock.name="bow-shock-farris-russell",this.group.add(this.magnetopause,this.bowShock)}update(e,t){if(!e){this.group.visible=!1;return}if(this.group.visible=!0,!(!this.current||Math.abs(this.current.r0-e.r0Re)>.02||Math.abs(this.current.alpha-e.alpha)>.004||this.current.axis.dot(t)<.99995))return;const s=t.clone().normalize();this.magnetopause.geometry.dispose(),this.magnetopause.geometry=Ef(e.r0Re,e.alpha,s),this.bowShock.geometry.dispose(),this.bowShock.geometry=Ef(e.bowShockRe,e.alpha*.92,s),this.current={r0:e.r0Re,alpha:e.alpha,bow:e.bowShockRe,axis:s}}setScale(e){this.group.scale.setScalar(e)}setVisible(e){this.group.visible=e}dispose(){this.magnetopause.geometry.dispose(),this.magnetopause.material.dispose(),this.bowShock.geometry.dispose(),this.bowShock.material.dispose()}}const ux=62,xp=20,dx=`
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

  const float CORRIDOR = ${ux.toFixed(1)};

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
    vFade *= 1.0 - smoothstep(0.35, 1.0, length(aOffset.xy) / ${xp.toFixed(1)});

    vEnd = aEnd;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,fx=`
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
`;function px(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class mx{points;mat;maxCount;reduced=!1;frozenAt=0;constructor(e=4200){this.maxCount=e;const t=px(5249554),i=[],s=[],r=[],a=[];for(let l=0;l<e;l++){const c=t(),h=Math.sqrt(t())*xp,u=t()*Math.PI*2,d=t(),f=h*Math.cos(u),g=h*Math.sin(u);for(const _ of[1,0])i.push(c),s.push(f,g,0),r.push(d),a.push(_)}const o=new At;o.setAttribute("position",new ht(new Float32Array(e*6),3)),o.setAttribute("aPhase",new ht(i,1)),o.setAttribute("aOffset",new ht(s,3)),o.setAttribute("aSeed",new ht(r,1)),o.setAttribute("aEnd",new ht(a,1)),o.boundingSphere=null,this.mat=new mn({uniforms:{uTime:{value:0},uSpeed:{value:.05},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new D(1,0,0)},uStreak:{value:1.4},uColor:{value:new qe(.62,.86,1)},uOpacity:{value:.28}},vertexShader:dx,fragmentShader:fx,transparent:!0,blending:pn,depthWrite:!1}),this.points=new ea(o,this.mat),this.points.name="solar-wind-stream",this.points.frustumCulled=!1}setReducedMotion(e){e&&!this.reduced&&(this.frozenAt=this.mat.uniforms.uTime.value),this.reduced=e}setVisible(e){this.points.visible=e}get visible(){return this.points.visible}setScale(e){this.points.scale.setScalar(e)}update(e,t,i,s,r,a){const o=i!==null&&s!==null;if(this.points.visible=this.points.visible&&o,!o)return;this.mat.uniforms.uTime.value=this.reduced?this.frozenAt:e,this.mat.uniforms.uSpeed.value=.014+i/1e3*.055,this.mat.uniforms.uSunDir.value.copy(t).normalize(),r!==null&&(this.mat.uniforms.uR0.value=r),a!==null&&(this.mat.uniforms.uAlpha.value=a);const l=Math.max(0,Math.min(1,(s-1)/19)),c=Math.round(this.maxCount*(.25+.75*l));this.points.geometry.setDrawRange(0,c*2),this.mat.uniforms.uOpacity.value=.2+.2*l,this.mat.uniforms.uStreak.value=.7+i/1e3*3.4}dispose(){this.points.geometry.dispose(),this.mat.dispose()}}const gx=360/25.38;class zu{group=new fn;markers=[];stamp="";constructor(){this.group.name="active-regions"}static direction(e,t){const i=e*Math.PI/180,s=t*Math.PI/180;return new D(Math.cos(i)*Math.cos(s),Math.sin(i),-Math.cos(i)*Math.sin(s))}setRegions(e){const t=e.map(i=>`${i.region}:${i.lat}:${i.lon}`).join(",");if(t!==this.stamp){this.stamp=t,this.dispose();for(const i of e){const s=i.area??10,r=.03+.055*Math.min(1,Math.log10(1+s)/3),a=Math.max(0,Math.min(1,(i.mProb??0)/50)),o=new Mr({color:new qe().setRGB(1,.62-.32*a,.22-.18*a),transparent:!0,opacity:.55+.4*a,blending:pn,depthWrite:!1}),l=new kt(new ji(r,12,10),o);l.position.copy(zu.direction(i.lat,i.lon)).multiplyScalar(1.01),l.name=`region-${i.region}`,l.userData.region=i,this.markers.push(l),this.group.add(l)}}}update(e,t,i){if(this.group.scale.setScalar(i),!t)return;const s=(e.getTime()-Date.parse(t))/864e5;Number.isFinite(s)&&(this.group.rotation.y=-(s*gx*Math.PI)/180)}setVisible(e){this.group.visible=e}get count(){return this.markers.length}dispose(){for(const e of this.markers)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.markers=[]}}const yp=695700,bp=1495978707e-1,Mp=21.5;function _x(n){const e=wt(n),t=73.6667+1.3958333*(e.tt-15020)/36525,s=(x6(e).elon-t)*Math.PI/180,r=7.25*Math.PI/180;return Math.asin(Math.sin(s)*Math.sin(r))*180/Math.PI}function Sp(n,e){const t=Math.PI/180,i=_x(e),s=n.latitude*t,r=i*t,a=n.longitude*t,o=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(a);return Math.acos(Math.max(-1,Math.min(1,o)))*180/Math.PI}function vx(n,e){return Sp(n,e)<=n.halfAngle}function xx(n,e=1){const t=Date.parse(n.time215);if(!Number.isFinite(t)||!(n.speedKms>0))return null;const s=(e*bp-Mp*yp)/n.speedKms/3600,r=Math.max(0,(n.speedKms-450)/450),a=Math.min(24,6+6*r);return{time:new Date(t+s*36e5).toISOString(),windowHours:Math.round(a),transitHours:s}}function Tf(n,e){const t=Date.parse(n.time215);if(!Number.isFinite(t))return 0;const i=Math.max(0,(e.getTime()-t)/1e3);return(Mp*yp+n.speedKms*i)/bp}function yx(n,e){const t=Math.PI/180,i=Math.hypot(e.x,e.y,e.z)||1,s={x:e.x/i,y:e.y/i,z:e.z/i},r=Math.abs(s.y)>.9?{x:1,y:0,z:0}:{x:0,y:1,z:0},a={x:r.y*s.z-r.z*s.y,y:r.z*s.x-r.x*s.z,z:r.x*s.y-r.y*s.x},o=Math.hypot(a.x,a.y,a.z)||1;a.x/=o,a.y/=o,a.z/=o;const l={x:s.y*a.z-s.z*a.y,y:s.z*a.x-s.x*a.z,z:s.x*a.y-s.y*a.x},c=n.latitude*t,h=n.longitude*t,u=Math.cos(c);return{x:s.x*u*Math.cos(h)+a.x*u*Math.sin(h)+l.x*Math.sin(c),y:s.y*u*Math.cos(h)+a.y*u*Math.sin(h)+l.y*Math.sin(c),z:s.z*u*Math.cos(h)+a.z*u*Math.sin(h)+l.z*Math.sin(c)}}const bx=new qe(1,.52,.3),Mx=new qe(.62,.66,.85);function Sx(n,e,t,i){const s=Math.min(89,Math.max(2,e))*Math.PI/180,r=Math.abs(n.y)>.9?new D(1,0,0):new D(0,1,0),a=new D().crossVectors(n,r).normalize(),o=new D().crossVectors(n,a).normalize(),l=7,c=28,h=[],u=(_,m)=>{h.push(_.x,_.y,_.z,m.x,m.y,m.z)},f=Array.from({length:l},(_,m)=>t*(m+1)/l).map(_=>{const m=xr(_,i),p=m*Math.tan(s);return Array.from({length:c},(v,x)=>{const y=x/c*Math.PI*2;return n.clone().multiplyScalar(m).addScaledVector(a,p*Math.cos(y)).addScaledVector(o,p*Math.sin(y))})});for(const _ of f)for(let m=0;m<c;m++)u(_[m],_[(m+1)%c]);for(let _=0;_<c;_+=4){const m=new D(0,0,0);u(m,f[0][_]);for(let p=0;p<f.length-1;p++)u(f[p][_],f[p+1][_])}const g=new At;return g.setAttribute("position",new ht(h,3)),g}class wx{group=new fn;lines=[];stamp="";visible=!0;constructor(){this.group.name="cme-cones"}setVisible(e){this.visible=e,this.group.visible=e}get count(){return this.lines.length}update(e,t,i,s){if(!this.visible)return;const r=`${i}|${e.map(a=>`${a.id}:${Tf(a,t).toFixed(2)}`).join(",")}`;if(r!==this.stamp){this.stamp=r,this.dispose();for(const a of e){const o=Math.min(1.7,Tf(a,t));if(o<=.02)continue;const l=yx(a,s),c=new D(l.x,l.y,l.z).normalize(),h=Sx(c,a.halfAngle,o,i),u=new xs({color:a.earthDirected?bx:Mx,transparent:!0,opacity:(a.earthDirected?.36:.09)*Math.max(.25,1-o/2.2),blending:pn,depthWrite:!1}),d=new ea(h,u);d.name=`cme-${a.id}`,d.userData.cme=a,this.lines.push(d),this.group.add(d)}}}dispose(){for(const e of this.lines)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.lines=[]}}const Ex=new qe(.62,.94,1),Tx=new qe(.52,.56,.64),Ax=new D;class Rx{group=new fn;craft=[];stamp="";axis;scale=1;constructor(){this.group.name="l1-monitors";const e=new At;e.setAttribute("position",new ht([0,0,0,1,0,0],3)),this.axis=new vl(e,new xs({color:new qe(.5,.55,.62),transparent:!0,opacity:.18,blending:pn,depthWrite:!1})),this.axis.name="sun-earth-line",this.group.add(this.axis)}setVisible(e){this.group.visible=e}setScale(e){this.scale=e}build(e){this.disposeCraft();for(const t of e){const i=t.active?Ex:Tx,s=new fn;s.name=`l1-${t.source}`;const r=new kt(new Cu(1,0),new Mr({color:i,transparent:!0,opacity:t.active?.95:.5,blending:pn,depthWrite:!1}));r.name=`l1-marker-${t.source}`;const a=new ea(new At,new xs({color:i,transparent:!0,opacity:t.active?.55:.26,blending:pn,depthWrite:!1}));a.name=`l1-dropline-${t.source}`,s.add(r,a),this.group.add(s),this.craft.push({group:s,marker:r,drop:a,source:t.source})}}update(e,t,i,s){if(e.length===0){this.group.visible=!1;return}const r=e.map(c=>`${c.source}:${c.time}:${c.active}`).join(",")+`|${i}`;e.map(c=>c.source).join(",")!==this.craft.map(c=>c.source).join(",")&&this.build(e);const o=Wd(280,i)*this.scale;this.axis.scale.setScalar(o),this.axis.position.set(0,0,0),this.axis.quaternion.setFromUnitVectors(new D(1,0,0),t.x);const l=r!==this.stamp;this.stamp=r;for(let c=0;c<e.length;c++){const h=e[c],u=this.craft[c];if(!u)continue;if(l){const g=z6(h.gse,t).normalize(),_=Wd(h.distanceRe,i)*this.scale,m=g.multiplyScalar(_);u.group.position.copy(m);const v=t.x.clone().multiplyScalar(m.dot(t.x)).sub(m);u.drop.geometry.dispose();const x=new At;x.setAttribute("position",new ht([0,0,0,v.x,v.y,v.z],3)),u.drop.geometry=x}const d=u.group.getWorldPosition(Ax),f=s?s.distanceTo(d)*.011:this.scale*.26;u.marker.scale.setScalar(f)}}disposeCraft(){for(const e of this.craft)this.group.remove(e.group),e.marker.geometry.dispose(),e.marker.material.dispose(),e.drop.geometry.dispose(),e.drop.material.dispose();this.craft=[]}dispose(){this.disposeCraft(),this.axis.geometry.dispose(),this.axis.material.dispose()}}const Cx=22;function Px(n,e,t,i){let s=null;for(const r of e){const a=r.position.clone().project(t);if(a.z<-1||a.z>1)continue;const o=(a.x*.5+.5)*i.width,l=(-a.y*.5+.5)*i.height,c=o-n.x,h=l-n.y,u=Math.hypot(c,h),d=r.position.clone().add(t.up.clone().normalize().multiplyScalar(r.radius)).project(t),f=Math.abs((-d.y*.5+.5)*i.height-l),g=Math.max(Cx,f);u>g||(!s||u<s.distancePx)&&(s={...r,screen:{x:o,y:l},distancePx:u})}return s}const Dx=5;function Lx(n,e){return n?Math.hypot(e.x-n.x,e.y-n.y)<=Dx:!0}const Fo=new i3,Af=new Xe,Oo=new D,Ix=6;function Nx(n,e,t,i,s){const r=e.visibleRoots;if(r.length===0||i.width===0||i.height===0)return null;Af.set(n.x/i.width*2-1,-(n.y/i.height)*2+1),Fo.setFromCamera(Af,t);const a=t.fov,o=Math.max(1e-6,t.position.distanceTo(s)),c=(a?2*Math.tan(a*Math.PI/360)*o/i.height:o/i.height)*Ix;let h=null,u=1/0;for(const d of r){d.getWorldScale(Oo);const f=(Math.abs(Oo.x)+Math.abs(Oo.y)+Math.abs(Oo.z))/3,g=c/Math.max(f,1e-9);Fo.params.Line.threshold=g,Fo.params.Points.threshold=g;for(const _ of Fo.intersectObject(d,!0)){if(_.distance>=u)break;const m=e.subjectFor(_.object);if(m){u=_.distance,h={subject:m,screen:{...n},point:_.point.clone()};break}}}return h}class Ux{roots=new Map;register(e,t,i=!0){this.roots.set(e,{subject:t,pickable:i})}unregister(e){this.roots.delete(e)}subjectFor(e){for(let t=e;t;t=t.parent){const i=this.roots.get(t);if(i)return i.subject}return null}get visibleRoots(){const e=[];for(const[t,i]of this.roots)i.pickable&&t.visible&&e.push(t);return e}get visibleSubjects(){const e=[];for(const[t,i]of this.roots)t.visible&&!e.includes(i.subject)&&e.push(i.subject);return e}get size(){return this.roots.size}}const Fx="https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get",Rf=n=>{const e=String(n??"").trim();if(!e)return null;const t=Date.parse(/\dZ$/.test(e)&&e.length===17?e.replace("Z",":00Z"):e);return Number.isFinite(t)?new Date(t).toISOString():null},ko=n=>{const e=Number(n);return Number.isFinite(e)?e:null};function Ox(n,e=new Date){if(!Array.isArray(n))return[];const t=[];for(const i of n){const s=Rf(i.time21_5),r=ko(i.latitude),a=ko(i.longitude),o=ko(i.halfAngle),l=ko(i.speed);if(s===null||r===null||a===null||o===null||l===null||l<=0)continue;const c={latitude:r,longitude:a,halfAngle:o,speedKms:l,time215:s},u=(Array.isArray(i.enlilList)?i.enlilList:[]).map(d=>Rf(d.estimatedShockArrivalTime)).find(d=>d!==null)??null;t.push({...c,id:String(i.associatedCMEID??`${s}-${l}`),type:String(i.type??""),note:String(i.note??""),link:i.link??null,earthDirected:vx(c,new Date(s)),offAxisDeg:Sp(c,new Date(s)),arrival:u?{time:u,windowHours:7,transitHours:(Date.parse(u)-Date.parse(s))/36e5}:xx(c),arrivalFromEnlil:u!==null})}return t.sort((i,s)=>Date.parse(s.time215)-Date.parse(i.time215))}function kx(n,e=new Date,t=3.5,i=6){const s=e.getTime(),r=n.filter(l=>{const c=(s-Date.parse(l.time215))/864e5;return c>=0&&c<=t}),a=r.filter(l=>l.earthDirected),o=r.filter(l=>!l.earthDirected).slice(0,i);return[...a,...o]}async function zx(n,e=7){const t=new Date,i=new Date(t.getTime()-e*864e5),s=`${Fx}/CMEAnalysis?startDate=${i.toISOString().slice(0,10)}&endDate=${t.toISOString().slice(0,10)}&mostAccurateOnly=true`;try{const r=await fetch(s,{cache:"no-store",signal:n});return r.ok?Ox(await r.json()):[]}catch{return[]}}const Xi=[2,1.75,1.5,1.25,1,.85,.75];function Bx(n){return n?Xi.length-1:Xi.indexOf(1)}function wp(n){return Xi.find(e=>e<=n+1e-6)??Xi[Xi.length-1]}const Vx=sa.Sun/vr,Ep=1e3/60,Hx=Ep*1.35,Gx=Ep*1.05,$x=1e3;function Wx(n){const e=n.ceiling??n.max;let t=n.demotedFrom??null,{good:i,bad:s}=n;n.medianFrameMs>Hx?(s++,i=0):n.medianFrameMs<Gx?(i++,s=0):(i=0,s=0);const r=Xi.indexOf(n.current);if(r<0)return{ratio:wp(n.current),good:0,bad:0,ceiling:e,demotedFrom:t};if(s>=2&&r<Bx(n.msaa)){const a=Xi[r+1],o=t===n.current?Math.min(e,a):e;return{ratio:a,good:0,bad:0,ceiling:o,demotedFrom:n.current}}if(i>=6&&r>0){const a=Xi[r-1];if(a<=n.max&&a<=e)return{ratio:a,good:0,bad:0,ceiling:e,demotedFrom:t}}return{ratio:n.current,good:i,bad:s,ceiling:e,demotedFrom:t}}const Tp=120,Xx=60;function Cf(n,e){n.push(e),n.length>Tp&&n.shift()}function jc(n){if(n.length===0)return 0;const e=[...n].sort((t,i)=>t-i);return e[e.length>>1]}class qx{constructor(e){this.canvas=e,this.msaa=devicePixelRatio<2,this.renderer=new V_({canvas:e,antialias:this.msaa,powerPreference:"high-performance"}),this.pixelRatio=wp(Math.min(devicePixelRatio,2)),this.maxPixelRatio=this.pixelRatio,this.ladderCeiling=this.pixelRatio,this.renderer.setPixelRatio(this.pixelRatio),this.scene.background=new qe(329485),this.rig=new K9(e,e.clientWidth/Math.max(1,e.clientHeight));const t=L9();this.scene.add(t),this.scene.add(this.sun.group),this.sun.group.add(this.activeRegions.group),this.pickables.register(t,"layer.starfield",!1),this.pickables.register(this.sun.group,"layer.sun-disc",!1),this.pickables.register(this.activeRegions.group,"layer.active-regions"),this.scene.add(this.cmeCones.group),this.pickables.register(this.cmeCones.group,"layer.cme-cones"),this.scene.add(this.earth.group),this.scene.add(this.moon.mesh),this.scene.add(this.sunLight),this.earth.spin.add(this.fieldLines.group),this.earth.group.add(this.magnetosphere.group),this.earth.group.add(this.spacecraft.group),this.pickables.register(this.spacecraft.group,"layer.l1-monitors",!1),this.pickables.register(this.earth.group,"layer.terminator",!1),this.pickables.register(this.fieldLines.group,"layer.field-lines"),this.pickables.register(this.magnetosphere.magnetopauseObject,"layer.magnetopause"),this.pickables.register(this.magnetosphere.bowShockObject,"layer.bow-shock"),this.solarWind=new mx(window.devicePixelRatio>1.5?4200:2600),this.earth.group.add(this.solarWind.points),this.pickables.register(this.solarWind.points,"layer.solar-wind"),this.scene.add(new t3(2371658,.55)),this.planets=P9();for(const[i,s]of this.planets){i!=="Earth"&&this.scene.add(s.group);const r=new R9(i,this.mode,new Date);this.rings.set(i,r),this.scene.add(r.line),this.pickables.register(r.line,"layer.orbits")}this.resize(),window.addEventListener("resize",this.resize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("click",this.onClick)}canvas;scene=new $2;rig;renderer;sun=new a9;earth=new j6;moon=new C9;planets=new Map;rings=new Map;sunLight=new Q2(16773853,1.6,0,0);fieldLines=new ox;magnetosphere=new hx;solarWind;activeRegions=new zu;cmeCones=new wx;cmes=[];regionsObservedAt=null;spacecraft=new Rx;spacecraftPos=[];sunImageUrl=null;candidates=[];hovered=null;pickables=new Ux;hoveredLayer=null;lastLayerPick=0;layerPickMs=0;onLayerHover=null;onLayerSelect=null;onHover=null;onSelect=null;shieldVisible=!0;windVisible=!0;sunDirEarthFixed=new D(1,0,0);mode="globe";lastReach=2;_reducedMotion=!1;earthSurface="loading";raf=0;clockStart=performance.now();now=null;aurora=null;auroraVisible=!0;frameTimes=[];lastFrame=performance.now();stats={fps:0,frames:0,cpuMs:0,updateMs:0,pixelRatio:1,maxPixelRatio:1,megapixels:0};cpuTimes=[];updateTimes=[];pixelRatio=1;maxPixelRatio=1;msaa=!1;lastLadderCheck=0;goodStreak=0;badStreak=0;ladderCeiling=1/0;demotedFrom=null;setNow(e){this.now=e}setEarthDayImage(e){this.earth.setDayImage(e)}setEarthNightImage(e){this.earth.setNightImage(e)}setCoastOverlay(e){this.earth.setCoastOverlay(e)}get coastOverlayOn(){return this.earth.coastOverlayOn}get earthSurfaceState(){return this.earthSurface}setEarthSurfaceState(e){this.earthSurface=e}setAurora(e){this.aurora=e}setRegions(e,t){this.activeRegions.setRegions(e),this.regionsObservedAt=t}get regionCount(){return this.activeRegions.count}setCmes(e){this.cmes=e}setSunImage(e){if(!e||!e.complete||e.naturalWidth===0){this.sun.setImage(null,null),this.sunImageUrl=null;return}e.src!==this.sunImageUrl&&(this.sunImageUrl=e.src,this.sun.setImage(e,c9(e)))}get sunHasImage(){return this.sun.hasImage}syncCoronaFraming(){if(this.rig.view!=="corona")return;const e=this.sun.reachRsun();Math.abs(e-this.lastReach)<.01*Math.max(1,this.lastReach)||this.setView("corona")}setCoronaPlane(e){if(!e)return this.sun.setCoronaPlane(null,null),null;const t=M9(e);return this.sun.setCoronaPlane(e,t),t}setSunCard(e){if(!e)return this.sun.setDiskPlane(null,null),null;const t=S9(e);return this.sun.setDiskPlane(e,t),t}sunProjection(){return this.sun.projection()}setSpacecraft(e){this.spacecraftPos=e}setSpacecraftVisible(e){this.spacecraft.setVisible(e)}setCmesVisible(e){this.cmeCones.setVisible(e)}get cmesOn(){return this.cmeCones.group.visible}get cmeCount(){return this.cmeCones.count}setAuroraVisible(e){this.auroraVisible=e}get auroraOn(){return this.auroraVisible}setScaleMode(e){if(e===this.mode)return;this.mode=e;const t=new Date;for(const[i,s]of this.rings)s.rebuild(i,e,t)}get scaleMode(){return this.mode}get reducedMotion(){return this._reducedMotion}setShieldVisible(e){this.shieldVisible=e,this.fieldLines.setVisible(e),this.magnetosphere.setVisible(e)}get shieldOn(){return this.shieldVisible}setWindVisible(e){this.windVisible=e,this.solarWind.setVisible(e)}get windOn(){return this.windVisible}get fieldLineStats(){const e=this.fieldLines.externalUsed;return{lines:this.fieldLines.lineCount,points:this.fieldLines.pointCount,far:this.fieldLines.farSet,external:e?.model??null,tiltDeg:e?e.basis.tilt*180/Math.PI:null,truncated:this.fieldLines.truncatedCount,traceMs:this.fieldLines.traceMs}}setReducedMotion(e){this._reducedMotion=e,this.rig.setReducedMotion(e),this.fieldLines.setReducedMotion(e),this.solarWind.setReducedMotion(e)}setView(e,t=!1){const{earthPos:i,earthRadius:s,sunDir:r}=this.geometryNow(new Date);this.lastReach=this.sun.reachRsun(),this.rig.goTo(e,i,s,r,xr(this.lastReach*Vx,this.mode),t)}geometryNow(e){const t=Jn(ia("Earth",e).helio),i=t.length(),s=t.clone().normalize().multiplyScalar(xr(i,this.mode)),r=Li("Earth",this.mode),a=j1(e).dir;return{earthPos:s,earthRadius:r,sunDir:Jn(a).normalize()}}frame=()=>{const e=performance.now(),t=e-this.lastFrame;this.lastFrame=e,this.frameTimes.push(t),this.frameTimes.length>120&&this.frameTimes.shift();const i=this.frameTimes.reduce((b,S)=>b+S,0)/this.frameTimes.length;this.stats={fps:i>0?1e3/i:0,frames:this.stats.frames+1,cpuMs:jc(this.cpuTimes),updateMs:jc(this.updateTimes),pixelRatio:this.pixelRatio,maxPixelRatio:this.maxPixelRatio,megapixels:this.canvas.clientWidth*this.canvas.clientHeight*this.pixelRatio*this.pixelRatio/1e6},this.adaptResolution(e,jc(this.frameTimes));const s=new Date,r=(e-this.clockStart)/1e3,{earthPos:a,earthRadius:o,sunDir:l}=this.geometryNow(s);this.sun.setRadius(Li("Sun",this.mode)),this.sun.setScaleMode(this.mode),this.sun.setViewGeometry(l.clone().negate(),B6(s)),this.activeRegions.update(s,this.regionsObservedAt,Li("Sun",this.mode)),this.sunLight.position.set(0,0,0);for(const b of this.planets.values())b.update(s,this.mode,this.rig.camera.position);this.earth.group.position.copy(a),this.earth.setRadius(o),this.earth.update(s,l),this.earth.setAurora(this.aurora,this.auroraVisible);const c=this.now?.solar_wind,h=this.now?.propagated,u=h?.bz??c?.bz_gsm??null,d=h?.density??c?.density??null,f=h?.speed??c?.speed??null,g=Rl(u,d,f),_=this.now?.dst?.value_nt??null,m=c?.by_gsm??null,p=u!==null&&m!==null&&_!==null&&g!==null?{pdynNPa:g.dynPressureNPa,dstNt:_,byNt:m,bzNt:u}:null,v=Nu(s)*Math.PI/180,x=Math.cos(-v),y=Math.sin(-v);if(this.sunDirEarthFixed.set(l.x*x+l.z*y,l.y,-l.x*y+l.z*x),this.shieldVisible){const b=this.now?.kp?.estimated_kp??null;this.fieldLines.ensureTraced(s,{kp:b,wind:p}),this.fieldLines.setScale(o);const S=this.rig.camera.position.distanceTo(a);this.fieldLines.setCamera(S/Math.max(o,1e-6),o,S),this.fieldLines.setDynamics(r,b),this.magnetosphere.setScale(o),this.magnetosphere.update(g,l)}this.shieldVisible&&this.spacecraftPos.length>0?(this.spacecraft.setVisible(!0),this.spacecraft.setScale(o),this.spacecraft.update(this.spacecraftPos,k6(s),this.mode,this.rig.camera.position)):this.spacecraft.setVisible(!1),this.windVisible&&(this.solarWind.setVisible(!0),this.solarWind.setScale(o),this.solarWind.update(r,l,f,d,g?.r0Re??null,g?.alpha??null));const E=Jn(q1(s)),M=E.length(),A=E.clone().normalize().multiplyScalar(Z6(M,this.mode,o));this.moon.mesh.position.copy(a).add(A),this.moon.mesh.scale.setScalar(Li("Moon",this.mode)),this.cmeCones.update(kx(this.cmes,s),s,this.mode,a),this.candidates=[{kind:"sun",id:"Sun",label:"Sun",position:this.sun.group.position.clone(),radius:Li("Sun",this.mode)},{kind:"moon",id:"Moon",label:"Moon",position:this.moon.mesh.position.clone(),radius:Li("Moon",this.mode)},...[...this.planets].map(([b,S])=>({kind:"planet",id:b,label:b,position:S.group.position.clone(),radius:Li(b,this.mode)})),...this.spacecraft.group.children.filter(b=>b.name.startsWith("l1-")&&b.name!=="sun-earth-line").map(b=>({kind:"spacecraft",id:b.name.slice(3),label:b.name.slice(3),position:b.getWorldPosition(new D),radius:0}))],this.rig.followTarget(a),this.rig.update();const L=performance.now();this.renderer.render(this.scene,this.rig.camera),Cf(this.updateTimes,L-e),Cf(this.cpuTimes,performance.now()-e),this.raf=requestAnimationFrame(this.frame)};start(){this.raf||(this.setView("deck",!0),this.raf=requestAnimationFrame(this.frame))}stop(){cancelAnimationFrame(this.raf),this.raf=0}adaptResolution(e,t){if(e-this.lastLadderCheck<$x||(this.lastLadderCheck=e,this.frameTimes.length<Tp/2))return;const i=Wx({current:this.pixelRatio,medianFrameMs:t,max:this.maxPixelRatio,msaa:this.msaa,good:this.goodStreak,bad:this.badStreak,ceiling:this.ladderCeiling,demotedFrom:this.demotedFrom});this.goodStreak=i.good,this.badStreak=i.bad,this.ladderCeiling=i.ceiling,this.demotedFrom=i.demotedFrom,i.ratio!==this.pixelRatio&&this.setPixelRatio(i.ratio)}setPixelRatio(e){e!==this.pixelRatio&&(this.pixelRatio=e,this.badStreak=0,this.goodStreak=0,this.renderer.setPixelRatio(e),this.resize(),this.frameTimes.length=0,this.cpuTimes.length=0,this.updateTimes.length=0)}pointerPick(e){const t=this.canvas.getBoundingClientRect();return Px({x:e.clientX-t.left,y:e.clientY-t.top},this.candidates,this.rig.camera,{width:t.width,height:t.height})}pointerPickLayer(e){const t=this.canvas.getBoundingClientRect();return Nx({x:e.clientX-t.left,y:e.clientY-t.top},this.pickables,this.rig.camera,{width:t.width,height:t.height},this.rig.focus)}onPointerMove=e=>{if(e.buttons!==0){this.setHover(null),this.setLayerHover(null);return}const t=this.pointerPick(e);if(this.setHover(t),t){this.setLayerHover(null);return}const i=performance.now();if(i-this.lastLayerPick<Xx)return;this.lastLayerPick=i;const s=performance.now(),r=this.pointerPickLayer(e);this.layerPickMs=performance.now()-s,this.setLayerHover(r)};onPointerLeave=()=>{this.setHover(null),this.setLayerHover(null)};setHover(e){const t=e?.id===this.hovered?.id;this.hovered=e,this.canvas.style.cursor=e||this.hoveredLayer?"pointer":"",(!t||e)&&this.onHover?.(e)}setLayerHover(e){const t=e?.subject===this.hoveredLayer;this.hoveredLayer=e?.subject??null,this.hovered||(this.canvas.style.cursor=e?"pointer":""),(!t||e)&&this.onLayerHover?.(e)}get layerPickCostMs(){return this.layerPickMs}get drawnSubjects(){const e=[...this.pickables.visibleSubjects];return this.auroraVisible&&!e.includes("layer.aurora")&&e.push("layer.aurora"),this.sun.coronagraphShown&&!e.includes("layer.coronagraph")&&e.push("layer.coronagraph"),e}downAt=null;onPointerDown=e=>{this.downAt={x:e.clientX,y:e.clientY}};onClick=e=>{const t=this.downAt;if(this.downAt=null,!Lx(t,{x:e.clientX,y:e.clientY}))return;const i=this.pointerPick(e);if(i){this.onSelect?.(i);return}const s=this.pointerPickLayer(e);this.onLayerSelect?.(s)};resize=()=>{const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.rig.resize(e/Math.max(1,t))};dispose(){this.stop(),window.removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("click",this.onClick),this.earth.dispose(),this.sun.dispose(),this.fieldLines.dispose(),this.magnetosphere.dispose(),this.solarWind.dispose(),this.activeRegions.dispose(),this.cmeCones.dispose(),this.rig.dispose(),this.renderer.dispose()}}function Ge(n){if(!n)return"--:--";const e=Date.parse(n);if(!Number.isFinite(e))return"--:--";const t=new Date(e);return`${String(t.getUTCHours()).padStart(2,"0")}:${String(t.getUTCMinutes()).padStart(2,"0")}`}function bn(n){if(!Number.isFinite(n))return"unknown";const e=Math.max(0,Math.round(n));if(e<90)return`${e}s`;const t=Math.round(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function Kc(n){const{lane:e,received:t,meta:i,now:s=new Date}=n;if(e.loading&&!t&&!i?.data_time)return{state:"loading",label:"loading",short:"loading",ageS:null};if(!i||!i.data_time){const a=e.error??i?.error??null;return a?{state:"error",label:`unavailable · ${Un(a)}${jx(e,s)}`,short:"unavailable",ageS:null}:{state:"no-data",label:i?.error?`no data · ${i.error}`:"no data",short:"no data",ageS:null}}const r=(s.getTime()-Date.parse(i.data_time))/1e3;return Number.isFinite(r)?r>i.stale_after_s?{state:"stale",label:`stale · no data since ${Ge(i.data_time)} UTC (${bn(r)} old)`,short:`stale · ${bn(r)}`,ageS:r}:{state:"fresh",label:`${Ge(i.data_time)} UTC · ${bn(r)} old`,short:`${bn(r)} old`,ageS:r}:{state:"no-data",label:"no data",short:"no data",ageS:null}}function jx(n,e){const t=n.nextAttempt?Date.parse(n.nextAttempt):NaN;return Number.isFinite(t)&&t>e.getTime()?` · next attempt ${Ge(new Date(t).toISOString())} UTC`:""}function Un(n){const e=n instanceof Error?n.message:String(n??""),t=/^HTTP (\d{3})/.exec(e);if(t){const i=Number(t[1]);return i===404?"upstream 404":i>=500?`upstream HTTP ${i}`:i>=400?`upstream HTTP ${i}`:`upstream HTTP ${i}`}return e==="timeout"?"upstream timeout":/aborted|abort/i.test(e)?"cancelled":"offline or blocked"}const Kx=96*1024*1024;class Yx{constructor(e=Kx){this.budgetBytes=e}budgetBytes;map=new Map;hits=0;misses=0;evictions=0;acquire(e){const t=this.map.get(e);if(t)return this.hits++,this.map.delete(e),this.map.set(e,t),t.img;this.misses++;const i=new Image;i.crossOrigin="anonymous",i.decoding="async",i.loading="eager";const s={img:i,bytes:0,loaded:!1,failed:!1};return i.addEventListener("load",()=>{s.loaded=!0,s.bytes=i.naturalWidth*i.naturalHeight*4,this.evict()},{once:!0}),i.addEventListener("error",()=>{s.failed=!0},{once:!0}),i.src=e,this.map.set(e,s),i}warm(e){for(const t of e)this.acquire(t)}isLoaded(e){const t=this.map.get(e);return!!t&&t.loaded}isFailed(e){const t=this.map.get(e);return!!t&&t.failed}evict(){let e=0;for(const t of this.map.values())e+=t.bytes;if(!(e<=this.budgetBytes))for(const[t,i]of this.map){if(e<=this.budgetBytes)break;i.img.isConnected||(this.map.delete(t),e-=i.bytes,this.evictions++,i.img.src="")}}stats(){let e=0;for(const t of this.map.values())e+=t.bytes;return{count:this.map.size,bytes:e,hits:this.hits,misses:this.misses,evictions:this.evictions}}clear(){for(const e of this.map.values())e.img.isConnected||(e.img.src="");this.map.clear()}}const Yc=24,Pf="https://services.swpc.noaa.gov",yr=[{id:"suvi-304",label:"SUVI 304 Å",kind:"disk",product:"suvi-primary-304",instrument:"GOES SUVI",describes:"Chromosphere at ~50 000 K — prominences and filaments"},{id:"suvi-195",label:"SUVI 195 Å",kind:"disk",product:"suvi-primary-195",instrument:"GOES SUVI",describes:"Corona at ~1.5 million K — active regions and coronal holes"},{id:"suvi-171",label:"SUVI 171 Å",kind:"disk",product:"suvi-primary-171",instrument:"GOES SUVI",describes:"Quiet corona at ~600 000 K — coronal loops"},{id:"suvi-131",label:"SUVI 131 Å",kind:"disk",product:"suvi-primary-131",instrument:"GOES SUVI",describes:"Flaring plasma at ~10 million K — brightest during flares"},{id:"lasco-c2",label:"LASCO C2",kind:"coronagraph",product:"lasco-c2",instrument:"SOHO LASCO",describes:"Coronagraph, 2–6 solar radii — where CMEs first appear"},{id:"lasco-c3",label:"LASCO C3",kind:"coronagraph",product:"lasco-c3",instrument:"SOHO LASCO",describes:"Coronagraph, 3.7–30 solar radii — CMEs heading outward"}];function Zx(n){const e=/_g(\d{1,2})_/.exec(n);if(!e)return null;const t=Number(e[1]);return Number.isFinite(t)&&t>0?t:null}function Jx(n,e){return e===null?n:/\bGOES\b/.test(n)?n.replace(/\bGOES\b/,`GOES-${e}`):`${n} (GOES-${e})`}function Qx(n){const e=/_s(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/.exec(n);if(e){const[,i,s,r,a,o,l]=e;return`${i}-${s}-${r}T${a}:${o}:${l}.000Z`}const t=/\/(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})_/.exec(n);if(t){const[,i,s,r,a,o]=t;return`${i}-${s}-${r}T${a}:${o}:00.000Z`}return null}async function Ap(n,e){const t=`${Pf}/products/animations/${n.product}.json`,i=await fetch(t,{cache:"no-store",signal:e});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();if(!Array.isArray(s))return null;const r=[];for(const c of s){if(!c?.url)continue;const h=Qx(c.url);h&&r.push({url:`${Pf}${c.url}`,time:h,satellite:Zx(c.url)})}if(r.sort((c,h)=>Date.parse(c.time)-Date.parse(h.time)),r.length===0)return null;const a=(Date.parse(r[r.length-1].time)-Date.parse(r[0].time))/36e5;let o=r;if(r.length>Yc){const c=(r.length-1)/(Yc-1);o=Array.from({length:Yc},(h,u)=>r[Math.round(u*c)])}const l=await ty(o,e);return{id:n.id,label:n.label,kind:n.kind,describes:n.describes,instrument:n.instrument,frames:o,totalAvailable:r.length,spanHours:a,frameBytes:l.bytes,newestGood:l.index,skippedDropouts:l.skipped,sourceUrl:t}}async function ey(n,e){try{const i=(await fetch(n,{method:"HEAD",signal:e})).headers.get("content-length");return i?Number(i):null}catch{return null}}async function ty(n,e){const t=n.length-1,i=Math.min(6,n.length),s=await Promise.all(Array.from({length:i},(o,l)=>ey(n[t-l].url,e))),r=s.filter(o=>o!==null&&o>0).sort((o,l)=>o-l);if(r.length===0)return{index:t,skipped:0,bytes:null};const a=r[Math.floor(r.length/2)];for(let o=0;o<i;o++){const l=s[o]??null;if(l!==null&&l>=a*.4)return{index:t-o,skipped:o,bytes:l}}return{index:t,skipped:0,bytes:s[0]??null}}function ny(n,e,t){let i=0;const s=n.frames.length;return new Promise(r=>{let a=0;const o=()=>{i++,a++,e(i,s),a>=s&&r()};for(const l of n.frames){const c=new Image;c.onload=o,c.onerror=o,c.src=l.url}})}const Lt="no data";function Cl(n){return n?n.tier==="modeled"?"D":n.tier==="ambient"?"M":"E":"E"}function Bu(n){return n?n.tier==="modeled"?`Modeled — ${n.model?.name??"model"}${n.model?.ref?` (${n.model.ref})`:""}`:n.tier==="ambient"?"Ambient — artistic, parameter-driven":`Measured — ${n.source}`:""}function Vr(n,e=1){return n==null||!Number.isFinite(n)?Lt:n.toFixed(e)}function zo(n){return n==null||!Number.isFinite(n)?Lt:String(Math.round(n))}function or(n,e=new Date){if(!n||!n.data_time)return{state:"no-data",ageS:null,label:n?.error?`no data · ${n.error}`:Lt,short:Lt};const t=(e.getTime()-Date.parse(n.data_time))/1e3;return Number.isFinite(t)?t>n.stale_after_s?{state:"stale",ageS:t,label:`stale · no data since ${Ge(n.data_time)} UTC (${bn(t)} old)`,short:`stale · ${bn(t)}`}:{state:"fresh",ageS:t,label:`${Ge(n.data_time)} UTC · ${bn(t)} old`,short:`${bn(t)} old`}:{state:"no-data",ageS:null,label:Lt,short:Lt}}const pl=[{id:"kp",subject:"inst.kp",label:"Planetary K",unit:"Kp",part:"kp",value:n=>Vr(n?.kp?.estimated_kp??null,2),detail:n=>n?.kp?.kp?`NOAA ${n.kp.kp}`:""},{id:"bz",subject:"inst.bz",label:"IMF Bz",unit:"nT",part:"solar_wind",series:"bz_gsm",value:n=>Vr(n?.solar_wind?.bz_gsm??null,1),detail:n=>{const e=n?.solar_wind?.bz_gsm;return e==null?"":e<0?"southward":"northward"}},{id:"bt",subject:"inst.bt",label:"IMF total",unit:"nT",part:"solar_wind",series:"bt",value:n=>Vr(n?.solar_wind?.bt??null,1)},{id:"speed",subject:"inst.speed",label:"Wind speed",unit:"km/s",part:"solar_wind",series:"speed",value:n=>zo(n?.solar_wind?.speed??null),detail:n=>n?.solar_wind?.spacecraft?`via ${n.solar_wind.spacecraft}`:""},{id:"density",subject:"inst.density",label:"Proton density",unit:"cm⁻³",part:"solar_wind",series:"density",value:n=>Vr(n?.solar_wind?.density??null,1)},{id:"xray",subject:"inst.xray",label:"X-ray class",unit:"0.1–0.8 nm",part:"xray",value:n=>n?.xray?.class??Lt,detail:n=>n?.xray?.flux_long!=null?`${n.xray.flux_long.toExponential(1)} W/m²`:""},{id:"protons",subject:"inst.protons",label:"Radiation (S)",unit:"pfu ≥10 MeV",part:"particles",value:n=>{const e=n?.particles;return!e||e.proton_10mev===null?Lt:`S${e.s_scale??0}`},detail:n=>{const e=n?.particles;return e?.proton_10mev===null||e?.proton_10mev===void 0?"":`${e.proton_10mev.toFixed(2)} pfu · ${e.s_text??""}`}},{id:"electrons",subject:"inst.electrons",label:"Electron flux",unit:"pfu ≥2 MeV",part:"particles",value:n=>zo(n?.particles?.electron_2mev??null),detail:n=>{const e=n?.particles?.electron_2mev;return e==null?"":e>=1e3?"above NOAA alert level":"normal"}},{id:"geosync",subject:"inst.geosync",label:"Field at 6.6 Rₑ",unit:"nT",part:"geosync",value:n=>zo(n?.geosync?.total_nt??null),detail:n=>{const e=n?.geosync;return!e||e.deficit_nt===null?"":e.arcjet?"thruster firing — suspect":`${e.deficit_nt>0?"−":"+"}${Math.abs(e.deficit_nt).toFixed(0)} vs dipole`}},{id:"dst",subject:"inst.dst",label:"Ring current",unit:"nT Dst",part:"dst",value:n=>zo(n?.dst?.value_nt??null),detail:n=>n?.dst?.level??""},{id:"mpause",subject:"inst.mpause",label:"Magnetopause",unit:"Rₑ",part:"magnetopause",value:n=>Vr(n?.magnetopause?.standoff_re??null,1),detail:()=>"Shue 1998"}],vt="https://services.swpc.noaa.gov",bt={mag:`${vt}/json/rtsw/rtsw_mag_1m.json`,wind:`${vt}/json/rtsw/rtsw_wind_1m.json`,kp1m:`${vt}/json/planetary_k_index_1m.json`,xrayFlares:`${vt}/json/goes/primary/xray-flares-latest.json`,xrays6h:`${vt}/json/goes/primary/xrays-6-hour.json`,scales:`${vt}/products/noaa-scales.json`,aurora:`${vt}/json/ovation_aurora_latest.json`,regions:`${vt}/json/solar_regions.json`,alerts:`${vt}/products/alerts.json`,summaryMag:`${vt}/products/summary/solar-wind-mag-field.json`,summarySpeed:`${vt}/products/summary/solar-wind-speed.json`};function _t(n){if(!n||typeof n!="string")return null;let e=n.trim().replace(" ","T");/[Zz]$|[+-]\d{2}:?\d{2}$/.test(e)||(e+="Z");const t=Date.parse(e);return Number.isFinite(t)?new Date(t).toISOString():null}function Fe(n){if(n==null||n==="")return null;const e=typeof n=="number"?n:Number(n);return!Number.isFinite(e)||e===-9999||e===-999?null:e}function Bn(n){return Array.isArray(n)?n:[]}function la(n,e,t){let i=null,s=-1/0;for(const r of n){if(!t(r))continue;const a=Date.parse(_t(r[e])??"");Number.isFinite(a)&&a>s&&(s=a,i=r)}return i}const ml=n=>n.active===!0;function iy(n,e){const t=la(Bn(n),"time_tag",ml),i=la(Bn(e),"time_tag",ml);if(!t&&!i)return null;const s=_t(t?.time_tag),r=_t(i?.time_tag),a=[s,r].filter(l=>!!l);return a.length===0?null:{time:a.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),bz_gsm:Fe(t?.bz_gsm),by_gsm:Fe(t?.by_gsm),bx_gsm:Fe(t?.bx_gsm),bt:Fe(t?.bt),speed:Fe(i?.proton_speed),density:Fe(i?.proton_density),temperature:Fe(i?.proton_temperature),spacecraft:t?.source??i?.source??null}}function Df(n,e){const t=new Map,i=a=>_t(a.time_tag);for(const a of Bn(n)){if(!ml(a))continue;const o=i(a);o&&((t.get(o)??t.set(o,{}).get(o)).m=a)}for(const a of Bn(e)){if(!ml(a))continue;const o=i(a);if(!o)continue;const l=o.slice(0,17)+"00.000Z";(t.get(l)??t.set(l,{}).get(l)).w=a}const s=[...t.keys()].sort(),r={time:s,bx_gsm:[],by_gsm:[],bz_gsm:[],bt:[],density:[],speed:[],temperature:[]};for(const a of s){const{m:o,w:l}=t.get(a);r.bx_gsm.push(Fe(o?.bx_gsm)),r.by_gsm.push(Fe(o?.by_gsm)),r.bz_gsm.push(Fe(o?.bz_gsm)),r.bt.push(Fe(o?.bt)),r.density.push(Fe(l?.proton_density)),r.speed.push(Fe(l?.proton_speed)),r.temperature.push(Fe(l?.proton_temperature))}return r}function sy(n){const e=la(Bn(n),"time_tag",()=>!0),t=_t(e?.time_tag);return!e||!t?null:{time:t,estimated_kp:Fe(e.estimated_kp),kp:e.kp??null}}function Rp(n){if(n===null||!Number.isFinite(n)||n<=0)return null;const e=[["X",1e-4],["M",1e-5],["C",1e-6],["B",1e-7],["A",1e-8]];for(const[t,i]of e)if(n>=i){const s=n/i;return`${t}${s.toFixed(1)}`}return`A${(n/1e-8).toFixed(1)}`}function ry(n){const e=Bn(n)[0],t=_t(e?.time_tag),i=e?.current_class;return!e||!t||!i?null:{time:t,class:i}}function ay(n){const e=Bn(n),t=la(e,"time_tag",a=>String(a.energy).startsWith("0.1-0.8")),i=la(e,"time_tag",a=>String(a.energy).startsWith("0.05-0.4")),s=_t(t?.time_tag);if(!t||!s)return null;const r=Fe(t.flux);return{time:s,flux_long:r,flux_short:Fe(i?.flux),class:Rp(r)}}function Zc(n){const e=n??{},t=e.Text??null;return{scale:Fe(e.Scale),text:t?t[0].toUpperCase()+t.slice(1):null,minor_prob:Fe(e.MinorProb??e.Prob),major_prob:Fe(e.MajorProb)}}function oy(n){const t=n?.["0"]??null;if(!t)return null;const i=t.DateStamp??null,s=t.TimeStamp??null;return{R:Zc(t.R),S:Zc(t.S),G:Zc(t.G),date:i,time:i?_t(s?`${i}T${s}`:`${i}T00:00:00`):null}}function ly(n,e=8){return Bn(n).map(t=>{const i=_t(t.issue_datetime),s=(t.message??"").replace(/\r/g,"");if(!i)return null;const r=s.split(`
`).map(h=>h.trim()).filter(h=>h.length>0),a=r.find(h=>/^(ALERT|WARNING|WATCH|SUMMARY|EXTENDED WARNING|CANCEL)/i.test(h))??r.find(h=>!/^(Space Weather Message Code|Serial Number|Issue Time|Valid From|Valid To)\b/i.test(h))??r[0]??"",o=/^(EXTENDED WARNING|CANCEL WARNING|CANCEL|ALERT|WARNING|WATCH|SUMMARY)\s*:?\s*(.*)$/i.exec(a),l=(o?.[1]??"").toUpperCase(),c=l.startsWith("CANCEL")?"cancel":l==="ALERT"?"alert":l.includes("WARNING")?"warning":l==="WATCH"?"watch":l==="SUMMARY"?"summary":"other";return{issued:i,product:t.product_id??"",message:s,headline:a,level:c,text:(o?.[2]??a).trim()}}).filter(t=>t!==null).sort((t,i)=>Date.parse(i.issued)-Date.parse(t.issued)).slice(0,e)}const Hr=360,Bo=181;function cy(n){const e=n,t=e?.coordinates;if(!Array.isArray(t)||t.length===0)return null;const i=_t(e?.["Observation Time"]),s=_t(e?.["Forecast Time"]);if(!i||!s)return null;const r=new Uint8Array(Hr*Bo);let a=0;for(const o of t){if(!Array.isArray(o)||o.length<3)continue;const l=Number(o[0]),c=Number(o[1]),h=Number(o[2]);if(!Number.isFinite(l)||!Number.isFinite(c)||!Number.isFinite(h))continue;const u=(Math.round(l)%Hr+Hr)%Hr,d=Math.round(c)+90;if(d<0||d>=Bo)continue;const f=Math.max(0,Math.min(100,h));r[u*Bo+d]=f,f>a&&(a=f)}return{observation_time:i,forecast_time:s,max_probability:a,grid:{lon_start:0,lon_step:1,lat_start:-90,lat_step:1,width:Hr,height:Bo,values:r}}}function hy(n,e,t){const i=(Math.round(t)%n.width+n.width)%n.width,s=Math.round(e)-n.lat_start;return s<0||s>=n.height?0:n.values[i*n.height+s]??0}function uy(n){const e=Bn(n).map(t=>({t:_t(t.time_tag),v:Fe(t.estimated_kp)})).filter(t=>t.t!==null).sort((t,i)=>Date.parse(t.t)-Date.parse(i.t));return{time:e.map(t=>t.t),value:e.map(t=>t.v)}}function dy(n){const e=Bn(n).filter(t=>String(t.energy).startsWith("0.1-0.8")).map(t=>({t:_t(t.time_tag),v:Fe(t.flux)})).filter(t=>t.t!==null).sort((t,i)=>Date.parse(t.t)-Date.parse(i.t));return{time:e.map(t=>t.t),value:e.map(t=>t.v)}}function tr(n,e){if(n.time.length<=e)return n;const t=n.time.length/e,i=[],s=[];for(let r=0;r<e;r++){const a=Math.floor(r*t),o=Math.min(n.time.length,Math.floor((r+1)*t));let l=null,c=a;for(let h=a;h<o;h++){const u=n.value[h];u!=null&&(l===null||Math.abs(u)>Math.abs(l))&&(l=u,c=h)}i.push(n.time[c]??n.time[a]),s.push(l)}return{time:i,value:s}}function fy(n){const e=Bn(n);if(e.length===0)return[];let t="";for(const r of e){const a=String(r.observed_date??"");a>t&&(t=a)}if(!t)return[];const i=new Set,s=[];for(const r of e){if(String(r.observed_date)!==t)continue;const a=Fe(r.region),o=Fe(r.latitude),l=Fe(r.longitude);a===null||o===null||l===null||i.has(a)||(i.add(a),s.push({region:a,observed:`${t}T12:00:00.000Z`,lat:o,lon:l,area:Fe(r.area),spots:Fe(r.number_spots),spotClass:r.spot_class??null,magClass:r.mag_class??null,cProb:Fe(r.c_flare_probability),mProb:Fe(r.m_flare_probability),xProb:Fe(r.x_flare_probability)}))}return s.sort((r,a)=>(a.area??0)-(r.area??0))}function Vo(n,e){const t=n.series?.data;return t?{time:t.time,value:t[e]}:null}function py(n){const e=n.series?.data;if(!e)return null;const t=e.time.map((i,s)=>{const r=Rl(e.bz_gsm[s]??null,e.density[s]??null,e.speed[s]??null);return r?r.r0Re:null});return{time:e.time,value:t}}const my=110;function gy(n,e){const t=(i,s={})=>i&&i.value.some(r=>r!==null)?{series:tr(i,my),opts:s}:null;switch(n){case"bz":return t(Vo(e,"bz_gsm"),{rule:0});case"bt":return t(Vo(e,"bt"));case"speed":return t(Vo(e,"speed"));case"density":return t(Vo(e,"density"));case"kp":return t(e.kpSeries,{rule:5,band:[0,4]});case"xray":return t(e.xraySeries,{log:!0});case"protons":return t(e.protonSeries,{log:!0,rule:10});case"electrons":return t(e.electronSeries,{log:!0,rule:1e3});case"geosync":return t(e.geosyncSeries);case"dst":return t(e.dstSeries,{rule:0});case"mpause":return t(py(e),{rule:6.6});default:return null}}function Cp(n,e){const t=n.value;if(!t||t.length<2)return null;const i=m=>e.log?Math.log10(Math.max(m,1e-12)):m,s=[],r=[];for(let m=0;m<t.length;m++){const p=t[m];p==null||!Number.isFinite(p)||e.log&&p<=0||(s.push(m),r.push(i(p)))}if(r.length<2)return null;let a=Math.min(...r),o=Math.max(...r);if(e.rule!==null&&e.rule!==void 0){const m=i(e.rule);a=Math.min(a,m),o=Math.max(o,m)}e.band&&(a=Math.min(a,i(e.band[0])),o=Math.max(o,i(e.band[1])));const l=o-a||1,c=t.length-1,h=1.2,u=m=>m/c*(e.width-h*2)+h,d=m=>e.height-h-(m-a)/l*(e.height-h*2),f=s.map((m,p)=>({x:u(m),y:d(r[p]),v:r[p]}));let g=f[0],_=f[0];for(const m of f)m.v<g.v&&(g=m),m.v>_.v&&(_=m);return{pts:f,min:a,max:o,last:f[f.length-1]??null,lo:g,hi:_,w:e.width,h:e.height}}function _y(n){return n.map((e,t)=>`${t===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join("")}function cs(n,e={}){const t={width:62,height:15,rule:null,band:null,log:!1,extremes:!1,label:"",className:"",...e},i=Cp(n,t);if(!i)return'<span class="spark-missing" title="no history">—</span>';const s=d=>t.log?Math.log10(Math.max(d,1e-12)):d,r=i.max-i.min||1,a=1.2,o=d=>t.height-a-(d-i.min)/r*(t.height-a*2),l=t.band?`<rect class="spark-band" x="0" y="${o(s(t.band[1])).toFixed(2)}" width="${t.width}"
        height="${Math.max(.5,o(s(t.band[0]))-o(s(t.band[1]))).toFixed(2)}" />`:"",c=t.rule!==null&&t.rule!==void 0?`<line class="spark-rule" x1="0" y1="${o(s(t.rule)).toFixed(2)}" x2="${t.width}" y2="${o(s(t.rule)).toFixed(2)}" />`:"",h=t.extremes?`<circle class="spark-lo" cx="${i.lo.x.toFixed(2)}" cy="${i.lo.y.toFixed(2)}" r="1.3" />
       <circle class="spark-hi" cx="${i.hi.x.toFixed(2)}" cy="${i.hi.y.toFixed(2)}" r="1.3" />`:"",u=i.last?`<circle class="spark-last" cx="${i.last.x.toFixed(2)}" cy="${i.last.y.toFixed(2)}" r="1.6" />`:"";return`<svg class="spark-inline ${t.className}" viewBox="0 0 ${t.width} ${t.height}"
    width="${t.width}" height="${t.height}" role="img" aria-label="${vy(t.label||"trend")}"
    preserveAspectRatio="none">${l}${c}<path class="spark-path" d="${_y(i.pts)}" />${h}${u}</svg>`}function Nn(n,e={}){const t={width:268,height:46,extremes:!0,...e},i=Cp(n,{...t,width:t.width,height:t.height});if(!i)return'<p class="tile-meta">No history loaded.</p>';const s=t.format??(l=>l.toFixed(1)),r=l=>t.log?Math.pow(10,l):l,a=n.time.length>1?Date.parse(n.time[n.time.length-1])-Date.parse(n.time[0]):0,o=t.direction==="future";return`${cs(n,{...t,label:t.label??(o?"forecast":"history")})}
    <p class="tile-meta">${s(r(i.lo.v))} to ${s(r(i.hi.v))}${t.unit?` ${t.unit}`:""}
    ${o?`over the next ${Lf(a)} · <span class="spark-key-last">●</span> end of run`:`over the last ${Lf(a)} · <span class="spark-key-last">●</span> now`}
    <span class="spark-key-ex">●</span> range</p>`}function Lf(n){const e=n/36e5;if(e<48)return`${e.toFixed(0)} h`;const t=e/24;if(t<60)return`${t.toFixed(0)} days`;const i=t/30.44;return i<24?`${i.toFixed(0)} months`:`${(t/365.25).toFixed(0)} years`}function vy(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const Jc=60.3;function xy(n){if(n.length===0)return"";const e=n.reduce((l,c)=>Math.max(l,c.offAxisRe),0),t=Math.max(Jc*1.12,e*1.25),i=78,s=i/t,r=96,a=92,o=n.map(l=>{const c=r+l.gse.y/6371.2*s,h=a-l.gse.z/6371.2*s,u=l.active?"l1-active":"l1-idle";return`<circle class="${u}" cx="${c.toFixed(1)}" cy="${h.toFixed(1)}" r="${l.active?4:3}" />
      <text class="l1-label ${u}" x="${(c+7).toFixed(1)}" y="${(h+3.5).toFixed(1)}">${ie(l.source)}</text>`}).join("");return`<svg class="l1-inset" viewBox="0 0 192 184" role="img"
      aria-label="Cross-section looking along the Sun–Earth line: the L1 monitors plotted at their true distance from the line, against the Moon's orbit for scale.">
    <circle class="l1-moon" cx="${r}" cy="${a}" r="${(Jc*s).toFixed(1)}" />
    <text class="l1-tick" x="${r}" y="${(a+Jc*s+10).toFixed(1)}">Moon’s orbit</text>
    <line class="l1-cross" x1="${r-i}" y1="${a}" x2="${r+i}" y2="${a}" />
    <line class="l1-cross" x1="${r}" y1="${a-i}" x2="${r}" y2="${a+i}" />
    <circle class="l1-earth" cx="${r}" cy="${a}" r="${Math.max(1.1,s).toFixed(2)}" />
    ${o}
    <text class="l1-axis" x="${r+i}" y="${a+12}" text-anchor="end">dusk</text>
    <text class="l1-axis" x="${r}" y="14" text-anchor="middle">ecliptic north</text>
  </svg>`}const yy="https://raw.githubusercontent.com/jjh111/EarthStar/data/v1",by=15e3,My=600;function Sy(n){if(!n.startsWith(vt))return null;const e=n.slice(vt.length).split("?")[0];return e.startsWith("/images/")||e.includes("/animations/")?null:`${yy}/swpc${e}`}const hu=new Set;function wy(n){return hu.has(n)}async function Qc(n,e,t="json"){const i=new AbortController,s=setTimeout(()=>i.abort(new Error("timeout")),by),r=()=>i.abort(e?.reason);e?.addEventListener("abort",r,{once:!0});try{const a=await fetch(n,{cache:"no-store",signal:i.signal});return a.ok?{json:t==="json"?await a.json():await a.text()}:{json:null,error:`HTTP ${a.status}`}}catch(a){return{json:null,error:a instanceof Error?a.message:String(a),retryable:!e?.aborted}}finally{clearTimeout(s),e?.removeEventListener("abort",r)}}const Ey=n=>new Promise(e=>setTimeout(e,n));async function Pp(n,e,t="json"){hu.delete(n);const i=await Qc(n,e,t);if(!i.retryable)return{json:i.json,...i.error?{error:i.error}:{}};if(await Ey(My),e?.aborted)return{json:null,error:i.error??"aborted"};const s=await Qc(n,e,t);if(!s.retryable)return{json:s.json,...s.error?{error:s.error}:{}};const r=Sy(n);if(!r||e?.aborted)return{json:null,error:s.error??"unreachable"};const a=await Qc(r,e,t);return a.json===null?{json:null,error:s.error??"unreachable"}:(hu.add(n),{json:a.json,mirrored:!0})}const Ot=(n,e)=>Pp(n,e,"json"),Ty=(n,e)=>Pp(n,e,"text"),Ay=`${vt}/json/enlil_time_series.json`,jr=.1;function Ry(n,e=new Date){const t={past:[],ahead:[],peakSpeed:null,peakCloud:null,cloudArrival:null,firstTime:null,lastTime:null};if(!Array.isArray(n))return t;const i=[];for(const l of n){const c=_t(typeof l.time_tag=="string"?l.time_tag:null);c!==null&&i.push({time:c,speed:Fe(l.v_r),density:Fe(l.earth_particles_per_cm3),temperature:Fe(l.temperature),br:Fe(l.b_r),polarity:Fe(l.polarity),cloud:Fe(l.cloud)})}if(i.length===0)return t;i.sort((l,c)=>l.time.localeCompare(c.time));const s=e.getTime(),r=i.filter(l=>Date.parse(l.time)<=s),a=i.filter(l=>Date.parse(l.time)>s),o=(l,c)=>l.reduce((h,u)=>u[c]!==null&&(h===null||u[c]>h[c])?u:h,null);return{past:r,ahead:a,peakSpeed:o(a,"speed"),peakCloud:o(a,"cloud"),cloudArrival:a.find(l=>(l.cloud??0)>=jr)??null,firstTime:i[0].time,lastTime:i[i.length-1].time}}function If(n,e){return{time:n.map(t=>t.time),value:n.map(t=>t[e])}}function Cy(n,e,t=15){const i=e.getTime();let s=null,r=1/0;for(const a of[...n.past,...n.ahead]){const o=Math.abs(Date.parse(a.time)-i);o<r&&(r=o,s=a)}return r<=t*6e4?s:null}async function Dp(n,e=new Date){try{const t=await Ot(Ay,n);return t.json===null?null:Ry(t.json,e)}catch{return null}}const uu=`${vt}/json/rtsw/rtsw_ephemerides_1h.json`,Py={SOLAR1:"SWFO-L1, NOAA’s operational wind monitor since 2026",DSCOVR:"NOAA, operational 2016–2026, now a backup",ACE:"NASA, launched 1997 and still returning data",IMAP:"NASA, launched 2025 — interstellar mapping, wind as a by-product"};function Lp(n){if(!Array.isArray(n))return[];const e=new Map;for(const i of n){const s=typeof i.source=="string"?i.source:null,r=_t(typeof i.time_tag=="string"?i.time_tag:null);if(!s||!r||Fe(i.x_gse)===null||Fe(i.y_gse)===null||Fe(i.z_gse)===null)continue;const a=Date.parse(r);if(!Number.isFinite(a))continue;const o=e.get(s);(!o||a>o.t)&&e.set(s,{rec:i,t:a,iso:r})}const t=[];for(const[i,{rec:s,iso:r}]of e){const a=Fe(s.x_gse),o=Fe(s.y_gse),l=Fe(s.z_gse),c=Math.hypot(o,l),h=Math.hypot(a,c);t.push({time:r,source:i,active:s.active===!0,gse:{x:a,y:o,z:l},distanceRe:h/on,offAxisRe:c/on,offAxisDeg:Math.atan2(c,a)*180/Math.PI})}return t.sort((i,s)=>Number(s.active)-Number(i.active)||i.distanceRe-s.distanceRe),t}const Zs={particle:'<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="1.6"/><path d="M2 2l3.2 2.6M14 2l-3.2 2.6M2 10l3.2-2.6M14 10l-3.2-2.6"/></svg>',wind:'<svg class="glyph" viewBox="0 0 16 12"><path d="M1 3h8a2 2 0 1 0-2-2M1 6h11a2 2 0 1 1-2 2M1 9h6a1.6 1.6 0 1 1-1.6 1.6"/></svg>',field:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v10M8 1C4 3 2 5 2 6s2 3 6 5M8 1c4 2 6 4 6 5s-2 3-6 5"/></svg>',flare:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v3.4M8 7.6V11M2.6 6h3.2M10.2 6h3.2M4.2 2.4l2.2 2.2M9.6 7.6l2.2 2.2M11.8 2.4L9.6 4.6M6.4 7.6l-2.2 2.2"/></svg>',aurora:'<svg class="glyph" viewBox="0 0 16 12"><path d="M3 11V5c0-2 1-3.4 2.4-3.4M7 11V4.4c0-2 1-3.4 2.4-3.4M11 11V5.4c0-2 1-3.2 2.2-3.2"/></svg>',shield:'<svg class="glyph" viewBox="0 0 16 12"><path d="M12 1C7 1 3 3.2 3 6s4 5 9 5"/><circle cx="13.4" cy="6" r="1.5"/></svg>'},Dy='<span class="sentence-missing">no data</span>',Ly='<span class="sentence-loading">…</span>';function Js(n,e,t,i=!1){if(n==null||!Number.isFinite(n))return i?Ly:Dy;const s=t==="%"?" tight":"";return`<b class="sentence-num">${n.toFixed(e)}</b><span class="sentence-unit${s}">${t}</span>`}function Iy(n){const e=n.now?.data??null,t=e?.solar_wind??null,i=!n.now&&n.lanes.snapshot,s=[],r=n.series?{time:n.series.data.time,value:n.series.data.speed}:null,a=n.series?{time:n.series.data.time,value:n.series.data.bz_gsm}:null,o=t?.bz_gsm??null,l=o===null?"in an unknown direction":o<-5?"strongly southward":o<0?"southward":"northward",c=o===null?"":o<0?" &mdash; the orientation that opens Earth&rsquo;s field and lets energy in":" &mdash; the orientation that keeps Earth&rsquo;s field closed";s.push(`${Zs.wind} The solar wind is blowing ${r?cs(r,{label:"wind speed over the last 24 hours"}):""} ${Js(t?.speed??null,0,"km/s",i)}, carrying a field that points ${i?"":l} ${a?cs(a,{rule:0,extremes:!0,label:"Bz over the last 24 hours, rule at zero"}):""} ${Js(o,1,"nT",i)}${i?"":c}.`);const h=e?.magnetopause?.standoff_re??null,u=h===null?"":h<8?", pushed well in":h>11.5?", standing off comfortably":"";s.push(`${Zs.shield} It meets the magnetosphere ${Js(h,1,"R⊕",i)} out on the sunward side${i?"":u}.`);const d=e?.kp?.estimated_kp??null,f=d===null?i?"":"of unknown disturbance":d>=5?"storming":d>=4?"unsettled":"quiet";s.push(`${Zs.field} The ground beneath is ${f} ${n.kpSeries?cs(n.kpSeries,{band:[0,4],extremes:!0,label:"Kp over the last 6 hours, quiet band shaded"}):""} ${Js(d,2,"Kp",i)}.`);const g=e?.particles??null;if(g){const p=g.proton_10mev;s.push(`${Zs.particle} Radiation is at <b class="sentence-num">${i?"…":`S${g.s_scale??0}`}</b>${n.protonSeries?` ${cs(n.protonSeries,{log:!0,extremes:!0,label:"proton flux above 10 MeV, last 6 hours, logarithmic"})}`:""} ${Js(p,2,"pfu",i)}`+(i?"":g.s_scale!==null&&g.s_scale>=1?" &mdash; a storm is under way":" &mdash; nothing to worry about")+".")}const _=e?.xray??null,m=n.aurora?.data??null;return s.push(`${Zs.flare} The Sun is putting out ${n.xraySeries?cs(n.xraySeries,{log:!0,extremes:!0,label:"X-ray flux over the last 6 hours, logarithmic"}):""} <b class="sentence-num">${i?"…":_?.class??"no data"}</b> X-rays, and ${Zs.aurora} the aurora is forecast to reach ${Js(m?.max_probability??null,0,"%",i)} at its brightest.`),s.join(" ")}function Ny(n){if(!n.now&&n.lanes.snapshot)return"Solar wind, magnetopause standoff, planetary K index, radiation, X-ray class and aurora forecast: all loading. Positions and the scene are computed locally and are already live.";const t=n.now?.data??null,i=t?.solar_wind??null,s=(r,a)=>r==null||!Number.isFinite(r)?"no data":r.toFixed(a);return`Solar wind ${s(i?.speed,0)} kilometres per second, interplanetary field Bz ${s(i?.bz_gsm,1)} nanotesla, magnetopause standoff ${s(t?.magnetopause?.standoff_re,1)} Earth radii, planetary K index ${s(t?.kp?.estimated_kp,2)}, X-ray class ${t?.xray?.class??"no data"}, peak aurora probability ${s(n.aurora?.data?.max_probability,0)} percent.`}const Qs={kp:`${vt}/products/noaa-planetary-k-index-forecast.json`,probabilities:`${vt}/json/solar_probabilities.json`,threeDay:`${vt}/text/3-day-forecast.txt`,discussion:`${vt}/text/discussion.txt`,flares7:`${vt}/json/goes/primary/xray-flares-7-day.json`,f107:`${vt}/products/summary/10cm-flux.json`},Nf=async(n,e)=>(await Ty(n,e)).json,Ho=async(n,e)=>(await Ot(n,e)).json;function Uy(n){if(!Array.isArray(n))return[];const e=[];for(const t of n){const i=_t(t.time_tag),s=Number(t.kp);if(!i||!Number.isFinite(s))continue;const r=String(t.observed??"").toLowerCase();e.push({time:i,kp:s,kind:r==="observed"?"observed":r==="estimated"?"estimated":"predicted",scale:t.noaa_scale??null})}return e.sort((t,i)=>Date.parse(t.time)-Date.parse(i.time))}function Fy(n){if(!Array.isArray(n))return[];const e=t=>{const i=Number(t);return Number.isFinite(i)?i:null};return n.map(t=>({date:String(t.date??"").slice(0,10),c:e(t.c_class_1_day),m:e(t.m_class_1_day),x:e(t.x_class_1_day)})).filter(t=>t.date).sort((t,i)=>i.date.localeCompare(t.date)).slice(0,3)}function Oy(n){return Array.isArray(n)?n.map(e=>({begin:_t(e.begin_time)??"",max:_t(e.max_time),maxClass:String(e.max_class??""),region:Number.isFinite(Number(e.current_region))?Number(e.current_region):null})).filter(e=>e.begin&&e.maxClass).sort((e,t)=>Date.parse(t.begin)-Date.parse(e.begin)).slice(0,8):[]}function Uf(n){const e=/:Issued:\s*(.+)/.exec(n)?.[1]?.trim()??null,t=n.split(`
`).filter(i=>!/^[:#]/.test(i)).join(`
`).replace(/\n{3,}/g,`

`).trim();return{issued:e,body:t}}async function ky(n){const[e,t,i,s,r,a,o]=await Promise.all([Ho(Qs.kp,n),Ho(Qs.probabilities,n),Nf(Qs.threeDay,n),Nf(Qs.discussion,n),Ho(Qs.flares7,n),Ho(Qs.f107,n),Dp(n)]),l=Array.isArray(a)?a[0]:void 0;return{kp:Uy(e),odds:Fy(t),threeDay:i,discussion:s,flares:Oy(r),f107:{value:l&&Number.isFinite(Number(l.flux))?Number(l.flux):null,time:l?_t(l.time_tag):null},enlil:o,fetchedAt:new Date().toISOString()}}const zy=`${vt}/json/solar-cycle/observed-solar-cycle-indices.json`,Go=n=>{const e=Number(n);return Number.isFinite(e)&&e>=0?e:null};function By(n){if(!Array.isArray(n)||n.length===0)return null;const e={time:[],value:[]},t={time:[],value:[]},i={time:[],value:[]};let s=null,r=null;for(const a of n){const o=String(a["time-tag"]??"");if(!/^\d{4}-\d{2}$/.test(o))continue;const l=`${o}-01T00:00:00.000Z`,c=Go(a.ssn);e.time.push(l),e.value.push(c),t.time.push(l),t.value.push(Go(a.smoothed_ssn)),i.time.push(l),i.value.push(Go(a["f10.7"])),c!==null&&(!r||c>r.ssn)&&(r={month:o,ssn:c}),s={month:o,ssn:c,f107:Go(a["f10.7"])}}return e.time.length===0?null:{ssn:e,smoothed:t,f107:i,latest:s,allTimeMax:r}}function Vy(n,e){const t=Math.max(0,n.time.length-e);return{time:n.time.slice(t),value:n.value.slice(t)}}async function Hy(n){const e=await Ot(zy,n);if(e.json===null)throw new Error(e.error??"unreachable");return By(e.json)}const Gy=[{id:"concept.reconnection",kind:"concept",tier:"D",label:"Magnetic reconnection",oneLine:"Where the Sun’s field and Earth’s splice together, and energy crosses in.",meaning:"The interplanetary magnetic field is the Sun’s own field, dragged out by the wind. When it arrives pointing south it opposes Earth’s northward field at the dayside boundary, the two break and rejoin, and a field line that had both feet on Earth ends up with one foot on Earth and the other threading back to the corona. That is a literal magnetic circuit from the Sun’s surface to the polar cap, and it is how the solar wind’s energy gets inside a cavity that is otherwise closed to it. Everything a geomagnetic storm does begins here.",howMade:"Not drawn. It is the mechanism behind three things that are: southward Bz on the panel, the open field lines in violet, and the aurora.",limits:"Nothing in the Viewer models reconnection. The violet lines are open because IGRF + T89 does not close them, not because reconnection opened them — T89 has no IMF term at all, so a southward Bz changes the drawn shape by exactly nothing. The panel can tell you the conditions for reconnection are present; the scene cannot yet show it happening.",sources:[{name:"Dungey 1961, Interplanetary magnetic field and the auroral zones",ref:"doi:10.1103/PhysRevLett.6.47"}],related:["inst.bz","layer.field-lines","model.t89","layer.aurora","inst.protons"],toPromote:"T96 carries IMF By/Bz and dynamic pressure, and every input it needs is already fetched. Dayside opening under southward Bz would then be in the geometry rather than only in the prose."},{id:"concept.gsm",kind:"concept",tier:"D",label:"GSM coordinates and the dipole tilt",oneLine:"The frame every external-field model is written in: +X to the Sun, dipole in the X–Z plane.",meaning:"A magnetosphere is organised by two directions and nothing else — where the Sun is, and which way the dipole leans. GSM is the frame built from exactly those two. The angle between the dipole and the frame’s vertical is the dipole tilt, which swings ±32.6° over a year and about ±9° again over each day as the offset pole turns. It decides whether the tail current sheet warps north or south, and it is why the same solar wind produces a different magnetosphere in June and December.",howMade:"Built from the sub-solar point (astronomy-engine) and the IGRF-14 dipole axis. Checked against the Python geopack package at sixteen epochs across the annual and diurnal cycles: 0.0044° of tilt, 0.0070° of axis, and that residual is the solar ephemeris rather than the frame.",limits:"The sunward axis uses the apparent Sun rather than the geometric one, which differs by aberration — 20.5 arcseconds, four orders below anything that matters here, and it keeps one definition of where the Sun is across the whole app.",sources:[{name:"Hapgood 1992, Space physics coordinate transformations",ref:"doi:10.1016/0032-0633(92)90012-D"}],related:["model.t89","model.igrf14","layer.field-lines"]},{id:"concept.tiers",kind:"concept",tier:"M",label:"Measured, Modelled, Ambient",oneLine:"Three tiers, on everything: what was read from an instrument, what was computed, and what was drawn.",meaning:"Every element here belongs to exactly one tier and says which. [E] Measured is a value read from an instrument, with its timestamp and latency. [D] Modelled is computed from measured inputs by a named, cited model. [M] Ambient is artwork — and splits again, because artwork can still carry a real number: the wind particles’ rate and speed come from the measured density and speed, while the starfield carries nothing at all. Where a layer is keyed to a real quantity, its card says which dimension is real and which is invented.",howMade:"Asserted in code and enforced by tests: no subject may ship without saying what it does not say, and no ambient subject may ship without declaring whether it carries a measurement.",limits:"A tier is a claim about provenance, not about accuracy. A [D] model can be cited, current, correctly implemented and still wrong about the sky — which is why the Checks tab holds independent models against each other rather than trusting the badges.",keyedTo:null,sources:[{name:"Earth Star viewer platform plan, §2"}],related:["concept.reconnection"]}],$y=[{id:"model.igrf14",aliases:["IGRF-14"],kind:"model",tier:"D",label:"IGRF-14",oneLine:"The Earth’s own field, from the inside: a spherical-harmonic model to degree 13.",meaning:"The internal field, generated by the moving iron of the outer core. It is a tilted, offset dipole plus higher-degree structure, and the higher-degree terms are why the South Atlantic Anomaly exists — a real weak spot where trapped radiation reaches lower altitude and satellites take more dose. The model is the reason the drawn field lines have the shape they do rather than a shape we chose.",howMade:"IAGA’s published coefficients, vendored and generated into the bundle rather than fetched. Epoch 2025.0 with secular variation extrapolated to now. Checked against the BGS calculator at six points: worst residual 0.509 nT, which is BGS’s own integer rounding.",limits:"It contains no external currents whatsoever. On its own it would extend forever, with no compressed dayside, no tail and no ring current — everything that makes a magnetosphere a magnetosphere comes from the external model beside it. The secular variation is a linear extrapolation and expires in 2030.",sources:[{name:"IGRF-14 (IAGA, Nov 2024)",url:"https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt"}],related:["model.t96","model.t89","layer.field-lines","concept.gsm","inst.geosync"],toPromote:"IGRF-15 is due in 2030 and drops in through scripts/gen-igrf.mjs."},{id:"model.t96",aliases:["Tsyganenko 1996 (T96)","Tsyganenko 1996","T96"],kind:"model",tier:"D",label:"Tsyganenko T96",oneLine:"The external field driven by the measured wind — the model where a southward Bz changes the shape.",meaning:"T96 takes four measurements where T89 takes one: solar-wind dynamic pressure, Dst, and the IMF’s By and Bz. That matters because the IMF is how the Sun actually reaches the magnetosphere, and T89 has no term for it at all. Under T96 one nanotesla of Bz moves the drawn field lines further than twelve minutes of the Earth turning does, and flips one line of the eighty between closed and open. It also carries a real magnetopause whose size follows the wind pressure, and Region 1 and Region 2 Birkeland current systems as separate sources rather than one lumped field-aligned term.",howMade:"A line-by-line port of Tsyganenko’s own Fortran — 34 routines, 1338 statements — with all 848 coefficients generated from the vendored source rather than retyped. Checked against the Python geopack package over 2520 points spanning the inner region, the Region 1 oval and both its boundary layers, the dayside, the tail, the lobes, the magnetopause and outside it, across eight wind states and five dipole tilts: worst deviation 4.9×10⁻⁵ nT. That residual is accounted for, not assumed small — it is three constants geopack recomputes at full precision where the released Fortran holds truncated values, plus the Bessel approximation the Fortran was fitted with. Restoring all three brings the agreement to 7×10⁻⁷ nT.",limits:"It is a static fit with no memory, so a substorm is not in it: a magnetosphere driven hard for six hours looks the same to T96 as one that has just been struck. Its magnetopause answers to pressure alone — the author says so — while the Shue 1998 surface drawn beside it also answers to Bz, which is why the two can disagree. Every source amplitude depends linearly on √Pdyn, Dst and the IMF coupling term, so outside the fitted ranges — Pdyn 0.5 to 10 nPa, Dst −100 to +20 nT, By and Bz within ±10 nT — the extrapolation is arithmetic rather than physics. The Viewer still draws it there, because a severe storm is exactly when someone looks, and says which driver has left the range.",sources:[{name:"Tsyganenko 1995, Modeling the Earth’s magnetospheric magnetic field confined within a realistic magnetopause",ref:"J. Geophys. Res. 100, 5599"},{name:"Tsyganenko and Stern 1996, Modeling the global magnetic field of the large-scale Birkeland current systems",ref:"J. Geophys. Res. 101, 27187"}],related:["model.t89","model.igrf14","layer.field-lines","concept.gsm","concept.reconnection","model.shue1998","inst.bz","inst.dst","layer.magnetopause"],toPromote:"TS05 adds storm-time ring-current dynamics and a memory of the preceding hours, which is the one thing T96 structurally cannot have."},{id:"model.t89",aliases:["Tsyganenko 1989 (T89c)","Tsyganenko 1989","T89"],kind:"model",tier:"D",label:"Tsyganenko T89c",oneLine:"The external field of the magnetospheric currents — what makes the shape a magnetosphere.",meaning:"Four current systems deform the Earth’s field into the shape it actually has: the Chapman–Ferraro currents that compress the dayside, the cross-tail sheet that stretches the nightside into lobes, the ring current that inflates the inner region — the one Dst measures — and their closure. T89 is an empirical fit to all of them, built from IMP, HEOS and ISEE spacecraft data, and it is what turned the drawn field from a dipole into a magnetosphere.",howMade:"A line-by-line port of Tsyganenko’s own Fortran, with the 210 coefficients generated from the vendored source rather than retyped. Verified against the Python geopack package over 1540 points spanning the inner region, dayside, cusps, tail, lobes and flanks: worst deviation 4.3×10⁻¹⁴ nT, which is floating-point round-off and nothing else. No JavaScript port existed before this one.",limits:"It knows a Kp band and the dipole tilt, and nothing else. There is no IMF term at all: a southward Bz opens the real dayside and changes this model by nothing. No solar-wind pressure either. And Kp enters as one of seven discrete fits, so the field steps between bands rather than gliding: Kp 3.0 and Kp 3.9 draw exactly the same shape. It is fitted inside 70 Rₑ and has no magnetopause in it, so the trace stops at the edge of what it describes rather than following it into nonsense. Those are the reasons it is now the fallback: the Viewer traces through T96 whenever the wind is complete, and falls back to this when only Kp has reached us.",sources:[{name:"Tsyganenko 1989, A magnetospheric magnetic field model with a warped tail current sheet",ref:"Planet. Space Sci. 37(1) 5–20"}],related:["model.t96","model.igrf14","layer.field-lines","concept.gsm","concept.reconnection","model.shue1998","inst.kp","inst.dst"]},{id:"model.shue1998",aliases:["Shue et al. 1998","Shue"],kind:"model",tier:"D",label:"Shue et al. 1998 magnetopause",oneLine:"Where the solar wind’s pressure balances the Earth’s field — the edge of the cavity.",meaning:"The magnetopause is not a wall; it is the surface where two pressures balance. Shue’s fit gives its distance as a function of the wind’s dynamic pressure and the IMF Bz, which is why the drawn boundary moves in when the wind hits harder and when the field turns south. Its nose distance is the single number that says how much room the magnetosphere has — and whether geostationary orbit is still inside it.",howMade:"r = r₀(2/(1+cosθ))^α, with r₀ and α from the propagated solar wind every minute. Drawn as a wireframe rather than a shell, because a translucent closed surface hides the field lines inside it and the field lines are the subject.",limits:"Truncated at 100° from the sunward axis: the surface flares without bound and the real magnetotail runs for hundreds of Earth radii, so what is drawn is cut, not ended. It is also an average fit — the real boundary ripples, and surface waves travel along it. And it is a boundary drawn around the field rather than one the field produces, which is why the Checks tab holds it against T89’s own standoff.",sources:[{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}],related:["layer.magnetopause","model.farris-russell","inst.mpause","inst.geosync","model.t89"]},{id:"model.farris-russell",aliases:["Farris & Russell 1994","Farris & Russell"],kind:"model",tier:"D",label:"Farris & Russell 1994 bow shock",oneLine:"Where the supersonic solar wind is forced to slow down, upstream of the magnetopause.",meaning:"The solar wind arrives faster than the speed at which the plasma can carry a signal, so it cannot flow around the magnetosphere smoothly — it shocks. The bow shock is where that happens, a few Earth radii ahead of the magnetopause, and the heated, slowed, turbulent plasma between the two is the magnetosheath.",howMade:"The standoff distance is Farris & Russell’s relation to the magnetopause standoff and the magnetosonic Mach number. The flaring away from the nose is drawn with the Shue law scaled to it.",limits:"Farris & Russell pin the nose; the rest of the drawn surface is the Shue shape borrowed and scaled, which is a rendering choice rather than a fitted result. More importantly, the shock is not really what deflects the wind — the deflection is the IMF draping through the sheath between the two surfaces, and two wireframe domes cannot say that.",sources:[{name:"Farris & Russell 1994",ref:"doi:10.1029/94JA00170"}],related:["layer.bow-shock","model.shue1998","layer.solar-wind"],toPromote:"Draped sheath field lines between the two surfaces would show the deflection itself. That is its own brief."},{id:"model.ovation",aliases:["OVATION Prime","OVATION"],kind:"model",tier:"D",label:"OVATION Prime",oneLine:"NOAA’s short-range forecast of where the aurora will be bright.",meaning:"A statistical model relating the solar wind at L1 to the energy flux poured into the upper atmosphere at auroral latitudes, 30 to 90 minutes ahead. It is the only genuinely predictive product on the panel: everything else says what is, this says what is about to be.",howMade:"Fetched from NOAA SWPC as a 1° global grid of aurora probability and drawn as a texture on the globe.",limits:"A probability of visible aurora, not a brightness and not a guarantee. It is organised around the geomagnetic pole rather than the geographic one and brightens toward magnetic midnight, so the oval is never centred on either pole. Cloud, moonlight and daylight decide what anyone actually sees, and none of the three are in it.",sources:[{name:"OVATION Prime (NOAA SWPC)",url:"https://services.swpc.noaa.gov/json/ovation_aurora_latest.json"}],related:["layer.aurora","inst.kp","concept.reconnection"]},{id:"model.geospace-dst",aliases:["Geospace run","Geospace"],kind:"model",tier:"D",label:"NOAA Geospace (Dst)",oneLine:"A magnetohydrodynamic run at NOAA, driven by the L1 wind, producing the ring-current index.",meaning:"Dst is the closest thing space weather has to a single number for the size of a storm, because it tracks the energy actually stored in the inner magnetosphere rather than the disturbance at any one ground station.",howMade:"The University of Michigan BATS-R-US/RCM coupled model, run operationally by NOAA and consumed here as a product.",limits:"This is a modelled Dst, not Kyoto’s measured index — which has no route into a browser. Because the model propagates the wind to Earth it runs ahead of the clock, so the value shown is the newest one that has actually arrived and the panel says how far its forecast reaches beyond that.",sources:[{name:"NOAA Geospace / Univ. Michigan BATS-R-US + RCM",url:"https://services.swpc.noaa.gov/json/geospace/geospace_dst_1_hour.json"}],related:["inst.dst","model.t89","inst.kp"]},{id:"model.enlil",aliases:["Enlil"],kind:"model",tier:"D",label:"WSA-Enlil",oneLine:"NOAA’s heliospheric wind forecast, from the Sun’s surface field out past Earth.",meaning:"A three-dimensional magnetohydrodynamic simulation of the solar wind filling the inner heliosphere, driven by solar magnetograms with CMEs inserted as cones. It is where CME arrival times come from, and it is the reason a forecast can say anything at all about tomorrow.",howMade:"Consumed as a published time series at Earth. Not run here.",limits:"A forecast, with a forecast’s error — CME arrival times are routinely wrong by several hours. The Checks tab holds its wind speed against the measured one at the same moment, with a deliberately wide tolerance, because that row is there to catch a misread column rather than to grade the forecast.",sources:[{name:"WSA-Enlil (NOAA SWPC)",url:"https://services.swpc.noaa.gov/json/enlil_time_series.json"}],related:["layer.cme-cones","model.cme-cone","inst.speed"]},{id:"model.cme-cone",aliases:["DONKI"],kind:"model",tier:"D",label:"CME cone model",oneLine:"A coronal mass ejection as a cone of plasma expanding radially from the Sun.",meaning:"A CME is a billion tonnes of magnetised plasma thrown off the Sun. The cone model is the working approximation used to say where one is heading and when it arrives: a direction, a half-width and a speed, fitted to coronagraph images.",howMade:"Cone parameters from NASA DONKI’s analysed CMEs — latitude, longitude, half angle, speed at 21.5 solar radii — propagated radially at constant speed.",limits:"A real CME is a magnetic flux rope, not a cone of uniform plasma, and its internal field — which decides whether it causes a storm at all — is not in the cone parameters. It also decelerates or accelerates toward the ambient wind speed, which constant-speed propagation does not do. Arrival times carry a stated window.",sources:[{name:"NASA DONKI",url:"https://kauai.ccmc.gsfc.nasa.gov/DONKI/"}],related:["layer.cme-cones","model.enlil","inst.xray"]},{id:"model.astronomy-engine",aliases:["astronomy-engine"],kind:"model",tier:"D",label:"astronomy-engine",oneLine:"Every position in the scene: planets, Moon, the sub-solar point, the solar rotation axis.",meaning:"The scene is not a diagram — the planets are where they actually are, the terminator falls where the Sun actually is, and Saturn’s rings lie in Saturn’s own equatorial plane. All of that comes from one ephemeris, computed in the browser.",howMade:"A VSOP87/Meeus-derived ephemeris library. Positions are produced in the true-equator-of-date frame and mapped to the scene by a pure rotation, so obliquity and sidereal spin fall out of the geometry rather than being applied by hand.",limits:"Positions only. Nothing here models how the planets influence each other or the wind — Jupiter’s magnetosphere is described in its card and drawn nowhere.",sources:[{name:"astronomy-engine (VSOP87/Meeus)",url:"https://github.com/cosinekitty/astronomy"}],related:["body.earth","layer.terminator","concept.gsm"],toPromote:"Checked against JPL Horizons at recorded epochs; tightening that comparison is cheap, and is the prerequisite for anything that models interactions rather than positions."}],Wy=[{id:"layer.field-lines",aliases:["field lines"],kind:"layer",tier:"D",label:"Magnetic field lines",oneLine:"The Earth’s field, traced through IGRF-14 plus a Tsyganenko external model. Blue closes, violet stays open.",meaning:"These are the paths a charged particle is bound to follow, and they are the shield: a blue line has both feet on Earth and traps what is on it, a violet line has one foot on Earth and leads out toward the solar wind. The boundary between the two is the edge of the polar cap, and it moves equatorward as a storm grows.",howMade:"Runge–Kutta integration along the total field from seed points at 120 km altitude, in both directions, until each end reaches the surface, crosses the magnetopause or leaves the model. The external field is T96 when the wind is complete and T89 on Kp alone when it is not; the panel says which. Retraced when the drivers move enough to change the shape or the Earth has turned 3° under the Sun-fixed external field, spread across frames so no single one stalls.",limits:"Open does not mean reconnected — these lines are open because the model does not close them. Lines that leave the model are cut and labelled, not ended: the tail continues far past where either model describes it. Brightness is uniform and carries no flux information. The eighty drawn lines are a legible sample of a continuum, not a count of anything. Under T89 a southward Bz changes nothing here at all; under T96 it does, but neither model has any memory of the hours before.",sources:[{name:"IGRF-14 (IAGA)"},{name:"Tsyganenko 1996 (T96)"},{name:"Tsyganenko 1989 (T89c)"}],related:["model.igrf14","model.t96","model.t89","concept.reconnection","layer.magnetopause","concept.gsm"],toPromote:"Line brightness keyed to flux-tube volume, which the trace already computes and discards, would make the shield show where the field is strong rather than only where it goes.",scene:["field-lines-igrf14-external","field-line-closed","field-line-open"]},{id:"layer.magnetopause",aliases:["teal boundary"],kind:"layer",tier:"D",label:"Magnetopause surface",oneLine:"The teal wireframe: the modelled edge of the magnetosphere, moving with the wind.",meaning:"The outer wall of the cavity the Earth’s field holds open in the solar wind. Watch it compress when the dynamic pressure rises — that is the shield being pushed in, and when it goes inside 6.6 Rₑ the geostationary satellites are outside it.",howMade:"The Shue et al. 1998 surface, rebuilt from the propagated solar wind, oriented to the Sun rather than to the Earth’s spin.",limits:"Drawn sparsely on purpose: a dense surface reads as a glass dome, and a magnetopause is a pressure balance, not a wall. Truncated at 100° from the nose. With no measured wind there is nothing to compute and nothing is drawn. This is the Shue surface only: T96 carries a magnetopause of its own, driven by pressure alone, and the field lines stop at that one rather than at this. When the two part company the Checks tab says by how much.",sources:[{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}],related:["model.shue1998","layer.bow-shock","inst.mpause","layer.field-lines","model.t96"],scene:["magnetopause-shue1998","magnetosphere"]},{id:"layer.bow-shock",aliases:["bow shock"],kind:"layer",tier:"D",label:"Bow shock",oneLine:"The orange wireframe: where the supersonic wind is forced to slow, ahead of the magnetopause.",meaning:"The outermost surface in the scene, and the first thing the solar wind meets. Between it and the magnetopause is the magnetosheath — slowed, heated, turbulent plasma flowing around the cavity.",howMade:"Farris & Russell 1994 standoff from the Shue nose and the Mach number, flared with the Shue law scaled to it.",limits:"Only the nose distance is fitted; the rest of the shape is borrowed. The sheath between the two surfaces is drawn as empty when it is the most physically active region in the picture.",sources:[{name:"Farris & Russell 1994",ref:"doi:10.1029/94JA00170"}],related:["model.farris-russell","layer.magnetopause","layer.solar-wind"],scene:["bow-shock-farris-russell"]},{id:"layer.aurora",aliases:["aurora"],kind:"layer",tier:"D",label:"Aurora oval",oneLine:"OVATION Prime’s forecast probability, painted on the globe.",meaning:"Where the energy coming in down the open field lines is being deposited in the atmosphere. The oval encircles the geomagnetic pole rather than the geographic one, and it is displaced toward magnetic midnight — both of those are visible in the shape, and both are checked.",howMade:"NOAA’s 1° probability grid, sampled onto the globe’s surface.",limits:"A probability of visible aurora over the next half hour, not brightness and not certainty. Nothing here knows about cloud, moonlight or daylight. When the grid fails to arrive no oval is drawn, and the report says so rather than showing a quiet one.",sources:[{name:"OVATION Prime (NOAA SWPC)"}],related:["model.ovation","layer.field-lines","concept.reconnection","inst.kp"],scene:["earth-globe"]},{id:"layer.solar-wind",aliases:["streaming particles"],kind:"layer",tier:"M",label:"Solar wind stream",oneLine:"Ambient particles — their rate and speed are the measured wind, the look is invented.",meaning:"The wind is a real, continuous flow of plasma at a few hundred kilometres per second, and it is invisible. These particles are a way of feeling its speed and density change, and of seeing it part around the magnetosphere.",howMade:"A GPU particle stream whose emission rate follows the measured proton density and whose travel speed follows the measured bulk speed, parting at the modelled magnetopause.",limits:"The real wind is not made of visible grains and does not look like this. Two dimensions carry information — rate and speed — and everything else about the appearance is invented: size, colour, spacing, the individual tracks. Nothing here is a particle trajectory.",keyedTo:"Proton density (rate) and bulk speed (velocity), both measured at L1",sources:[{name:"NOAA SWPC real-time solar wind"}],related:["inst.speed","inst.density","layer.bow-shock","concept.tiers"],scene:["solar-wind-stream"]},{id:"layer.cme-cones",aliases:["cone"],kind:"layer",tier:"D",label:"CME cones",oneLine:"Analysed coronal mass ejections, expanding from the Sun at their measured speed.",meaning:"Where the big storms come from. The cone shows the direction and angular width fitted to coronagraph images, and its leading edge is where the model puts the front now — so a cone that has grown wide enough to contain the Earth is one worth reading the arrival time for.",howMade:"DONKI cone parameters propagated radially at their fitted speed, with arrival times from Enlil where they exist.",limits:"A cone is a working approximation of a magnetic flux rope. The thing that decides whether a CME causes a storm — the direction of the field inside it — is not in the cone parameters and cannot be known until it arrives at L1.",sources:[{name:"NASA DONKI"}],related:["model.cme-cone","model.enlil","inst.bz","inst.xray"],scene:["cme-cones","cme-"]},{id:"layer.sun-disc",kind:"layer",tier:"E",label:"Solar imagery",oneLine:"Real telescope frames of the Sun, projected back onto a sphere.",meaning:"Each wavelength shows a different height and temperature in the solar atmosphere — the photosphere in visible light, the million-degree corona in extreme ultraviolet. Active regions bright in EUV are where flares come from, and coronal holes, the dark patches, are where the fast wind escapes.",howMade:"GOES SUVI and SDO frames, re-projected onto the sphere about the true solar rotation axis for the moment of the exposure, so features land where they were.",limits:"A projection of a flat image onto a sphere is only correct near disc centre; toward the limb it stretches, and the far hemisphere is not observed at all. The part of each frame beyond the limb is corona, not surface, and is shown on a separate card rather than smeared onto the sphere.",sources:[{name:"GOES SUVI / SDO (NOAA SWPC)"}],related:["layer.coronagraph","layer.active-regions","inst.xray","body.sun"],scene:["sun-disc"]},{id:"layer.coronagraph",aliases:["LASCO coronagraphs","LASCO"],kind:"layer",tier:"E",label:"Coronagraphs (LASCO C2, C3)",oneLine:"The corona with the Sun occulted, shown at the distance it actually covers.",meaning:"A coronagraph blocks the disc so the faint corona around it can be seen — which is where a CME is first visible, before anything at Earth has changed. C2 covers roughly 2 to 6 solar radii, C3 out to 30.",howMade:"SOHO LASCO frames on a plane through the Sun, scaled from each frame’s own occulting-disc calibration so the Sun sits inside its cutout at the true distance.",limits:"A coronagraph image is a plane, and the corona is not. The Viewer states its coverage as a ladder in solar radii because there is a real gap: nothing in this set observes between about 1.5 and 2.3 R☉. That gap is shown, not filled.",sources:[{name:"SOHO LASCO (NASA/ESA, via NOAA SWPC)"}],related:["layer.sun-disc","layer.cme-cones","body.sun"],toPromote:"MLSO K-Cor covers 1.05–3 R☉ and would close the gap exactly, but it sends no CORS header, is ground-based and weather-bound, and its recent coverage is intermittent. It is recorded as a mirror candidate.",scene:["sun-disc"]},{id:"layer.active-regions",kind:"layer",tier:"E",label:"Active regions",oneLine:"NOAA’s numbered sunspot groups, marked at their reported heliographic positions.",meaning:"Active regions are where the Sun’s field is concentrated and tangled, and that is where flares and CMEs originate. A big, complex region rotating onto the Earth-facing side is the standard reason to expect a bad week.",howMade:"Positions from NOAA’s solar region summary, placed on the sphere by the same projection as the imagery — which is why the Checks tab can hold one against the other and catch a mirrored image.",limits:"A marker, not a measurement of the region’s size or complexity. The summary is issued daily, so positions lag the imagery by up to a day of solar rotation.",sources:[{name:"NOAA SWPC solar region summary"}],related:["layer.sun-disc","inst.xray","body.sun"],scene:["active-regions","region-"]},{id:"layer.l1-monitors",aliases:["L1"],kind:"layer",tier:"E",label:"L1 monitors",oneLine:"The spacecraft the wind readings come from, at their real positions.",meaning:"Everything on the left-hand panel about the solar wind is measured out at these markers, a million and a half kilometres sunward, roughly an hour upstream. They are drawn because that hour is the warning, and because the spacecraft are not exactly on the Sun–Earth line — they orbit around L1, tens of Earth radii off-axis, so what they measure is not precisely what hits us.",howMade:"Positions from NOAA’s published spacecraft ephemerides, in GSE, rotated into the scene.",limits:"Markers, not models of the spacecraft. Which one is feeding the panel changes without notice — the feed interleaves several — so the panel names the source of each reading rather than assuming.",sources:[{name:"NOAA SWPC RTSW ephemerides"}],related:["inst.speed","inst.bz","inst.density"],scene:["l1-monitors","l1-","l1-marker-","l1-dropline-"]},{id:"layer.terminator",aliases:["terminator"],kind:"layer",tier:"D",label:"Terminator and surface",oneLine:"Day and night on the globe, from the real sub-solar point.",meaning:"The line between day and night is where the sunlit ionosphere ends, and that matters: radio blackouts from a flare affect the sunlit hemisphere only, and the aurora is only visible on the dark side.",howMade:"The sub-solar latitude and longitude from the ephemeris, applied in the globe’s shader over NASA Blue Marble imagery.",limits:"A hard shading boundary stands in for a soft one; real twilight is broad, and the atmosphere bends light past the geometric edge. The surface imagery is a fixed composite, not today’s cloud.",sources:[{name:"astronomy-engine"},{name:"NASA Blue Marble"}],related:["model.astronomy-engine","layer.aurora","inst.xray","body.earth"],scene:["earth-globe","earth-fixed-frame"]},{id:"layer.orbits",kind:"layer",tier:"D",label:"Orbits and the Sun–Earth line",oneLine:"Planetary orbits, and the line the whole instrument is organised around.",meaning:"The Sun–Earth line is the axis of everything here: the magnetosphere points down it, the wind arrives along it, and the L1 monitors sit on it. The orbits give the scene its scale.",howMade:"Orbits sampled from the ephemeris; the Sun–Earth line drawn between the two computed positions.",limits:"At Globe scale distances are logarithmically compressed and bodies are enlarged, so no distance in the picture is readable as a ratio. The True scale toggle removes the compression, and the label always says which is in force.",sources:[{name:"astronomy-engine"}],related:["model.astronomy-engine","layer.l1-monitors"],scene:["sun-earth-line","orbit-","saturn-rings"]},{id:"layer.starfield",aliases:["starfield"],kind:"layer",tier:"M",label:"Starfield",oneLine:"Ambient backdrop. Carries no information at all.",meaning:"Depth and orientation for the eye, and nothing more.",howMade:"Generated points on a distant sphere.",limits:"Not a star catalogue. These are not real stars, they are not in real positions, and no constellation in this scene is one. Nothing about them responds to anything measured.",keyedTo:null,sources:[],related:["concept.tiers"],scene:["starfield"]}],Wn={name:"NOAA SWPC",url:"https://services.swpc.noaa.gov/"},Xy=[{id:"inst.kp",kind:"measurement",tier:"E",label:"Planetary K",oneLine:"A 0–9 index of how disturbed the Earth’s field is, worldwide.",meaning:"A 0–9 index of global geomagnetic disturbance, derived from ground magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic storm, and the aurora moves toward the equator.",howMade:"NOAA’s estimated Kp, updated every minute from a network of ground magnetometers, ahead of the definitive three-hourly index.",limits:"A range over three hours, quantised to thirds, and a planetary average — it says nothing about where the disturbance is. It is also the only thing driving T89, so the drawn magnetosphere inherits its coarseness: seven bands, stepping.",sources:[Wn],related:["model.t89","layer.field-lines","inst.dst","model.ovation"]},{id:"inst.bz",kind:"measurement",tier:"E",label:"IMF Bz",oneLine:"The north–south tilt of the Sun’s field as it arrives. Southward is the dangerous one.",meaning:"The north–south component of the interplanetary magnetic field, in GSM coordinates. This is the single most useful predictor on the panel: when Bz turns southward it opposes Earth’s field, magnetic reconnection opens the magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what storms are made of.",howMade:"Measured by a magnetometer on whichever spacecraft is currently feeding NOAA’s real-time solar wind stream at L1, about an hour upstream.",limits:"One point in a wind that is not uniform: the spacecraft sits tens of Earth radii off the Sun–Earth line, so what it measures is not exactly what arrives. And nothing in the rendered magnetosphere responds to it — T89 has no IMF term, so this number predicts a storm the drawn shape cannot show.",sources:[Wn],related:["concept.reconnection","model.t89","inst.bt","layer.solar-wind","model.shue1998"]},{id:"inst.bt",kind:"measurement",tier:"E",label:"IMF total",oneLine:"How much interplanetary field there is, whichever way it points.",meaning:"Total strength of the interplanetary magnetic field. A high Bt means there is a lot of field available to turn southward.",howMade:"The magnitude of the same L1 magnetometer vector Bz comes from.",limits:"A magnitude says nothing about direction, and direction is what decides whether a storm happens. High Bt with steady northward Bz is quiet.",sources:[Wn],related:["inst.bz","concept.reconnection"]},{id:"inst.speed",kind:"measurement",tier:"E",label:"Wind speed",oneLine:"How fast the solar wind is arriving — and how much warning L1 buys.",meaning:"Bulk speed of the solar wind at L1, about a million miles sunward of Earth. Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal hole stream. Speed sets how hard the wind presses on the magnetosphere, and how long the warning is: at 400 km/s, L1 buys roughly an hour.",howMade:"Measured by the plasma instrument on the L1 monitor now feeding the stream.",limits:"Bulk speed of the protons, not the speed of any disturbance travelling through the wind — a shock front moves faster than the plasma behind it.",sources:[Wn],related:["inst.density","layer.solar-wind","layer.l1-monitors","model.enlil"]},{id:"inst.density",kind:"measurement",tier:"E",label:"Proton density",oneLine:"How thick the wind is. With speed, it sets the pressure on the shield.",meaning:"Protons per cubic centimetre in the solar wind. With speed it sets the dynamic pressure that compresses the magnetopause.",howMade:"Measured by the same L1 plasma instrument as the speed.",limits:"Protons only. Alpha particles are roughly 4% by number and carry about 16% of the mass, so the true dynamic pressure is a little above what this implies.",sources:[Wn],related:["inst.speed","inst.mpause","model.shue1998","layer.solar-wind"]},{id:"inst.xray",kind:"measurement",tier:"E",label:"X-ray class",oneLine:"Flare brightness in soft X-rays, on the A–B–C–M–X scale. Arrives at light speed.",meaning:"Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. Each letter is ten times the one before: A, B, C, M, X. M and X class flares cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive at the speed of light, so there is no warning.",howMade:"The 0.1–0.8 nm channel of the X-ray sensor on a GOES spacecraft at geostationary orbit, converted to the NOAA letter class.",limits:"A whole-Sun measurement: it cannot say where on the disc the flare was, and position is what decides whether its particles reach us. A flare is also not a CME — the two often come together and either can happen alone.",sources:[Wn],related:["layer.active-regions","inst.protons","model.cme-cone","layer.sun-disc"]},{id:"inst.protons",kind:"measurement",tier:"E",label:"Radiation (S)",oneLine:"Solar protons at geostationary orbit — the hazard that endangers people, not equipment.",meaning:"Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S scale it defines. S1 begins at 10 particle flux units, and each step up is ten times the last. This is the one space-weather hazard that endangers people rather than equipment: at S3 and above, aviation crews on polar routes accumulate real dose and astronauts outside a hull are at risk. Protons from a flare can arrive within tens of minutes, far ahead of any CME.",howMade:"Measured by the particle detectors on a GOES spacecraft.",limits:"Measured at one point outside the atmosphere. Dose on the ground or in an aircraft depends on the atmosphere above you and on the geomagnetic cutoff at your latitude, and neither is modelled here.",sources:[Wn],related:["concept.reconnection","inst.xray","body.moon","inst.electrons"]},{id:"inst.electrons",kind:"measurement",tier:"E",label:"Electron flux",oneLine:"High-energy electrons that bury themselves in satellite insulation over days.",meaning:"Integral electron flux above 2 MeV at geostationary orbit. Sustained flux above 1000 particle flux units drives deep dielectric charging — electrons bury themselves inside insulating materials until the material discharges through the spacecraft. It is a leading cause of satellite anomalies, and it builds over days rather than minutes.",howMade:"Measured by the particle detectors on a GOES spacecraft.",limits:"The hazard is the accumulated dose over days, so an instantaneous number above the alert level is much less informative than a week spent there.",sources:[Wn],related:["inst.protons","inst.geosync"]},{id:"inst.geosync",kind:"measurement",tier:"E",label:"Field at 6.6 Rₑ",oneLine:"The only in-situ magnetic measurement here — and the one real check on the drawn shield.",meaning:"Total magnetic field measured by GOES at geostationary orbit, 6.6 Earth radii out. This is the only in-situ magnetic measurement on the panel, and it is the one check available on the modelled shield: when the magnetopause is pushed inside 6.6 Rₑ, the spacecraft finds itself in the solar wind and the field it measures collapses. The reading normally sits below the dipole value for that distance, because the ring current and magnetopause currents subtract from Earth’s own field — the size of that deficit is itself a storm indicator.",howMade:"The magnetometer on a GOES spacecraft, compared here against the dipole value for that distance.",limits:"One point on one orbit, and the spacecraft’s own thrusters disturb it — a reading during an arcjet firing is flagged rather than used.",sources:[Wn],related:["model.igrf14","model.shue1998","inst.mpause","inst.dst"]},{id:"inst.dst",kind:"measurement",tier:"D",label:"Ring current",oneLine:"How much energy the storm has actually put into the inner magnetosphere.",meaning:"Dst measures how much the ring current — a torus of trapped ions drifting westward around Earth at a few Earth radii — is subtracting from the surface magnetic field. It is the closest thing space weather has to a single number for the size of a storm, because it tracks the energy actually stored in the inner magnetosphere rather than the disturbance at any one station. Quiet is above −30 nT; below −100 nT is an intense storm.",howMade:"NOAA’s Geospace run — the Michigan BATS-R-US/RCM model driven by the L1 solar wind.",limits:"MODELLED, not Kyoto’s measured index, which has no route into a browser. Because the model propagates the wind to Earth it runs ahead of the clock, so the value shown is the newest that has actually arrived and the panel says how far the forecast reaches beyond it. T89 does respond to the ring current, but through Kp rather than through this number.",sources:[Wn],related:["model.geospace-dst","model.t89","inst.kp","inst.geosync"]},{id:"inst.mpause",kind:"measurement",tier:"D",label:"Magnetopause",oneLine:"How much room the magnetosphere has on the sunward side, right now.",meaning:"Modelled distance from Earth’s centre to the sunward edge of the magnetosphere, in Earth radii, computed from the live solar wind. Typically 10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and exposed to the solar wind directly.",howMade:"The Shue et al. 1998 nose distance from the propagated wind’s dynamic pressure and Bz.",limits:"A modelled average surface, not a measurement. The Checks tab holds it against T89’s own standoff, which is driven by Kp and shares none of its inputs; the two routinely differ by an Earth radius or two, and that gap is real rather than a fault in either.",sources:[{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}],related:["model.shue1998","layer.magnetopause","inst.geosync","model.t89"]}],qy={name:"astronomy-engine (VSOP87/Meeus)",url:"https://github.com/cosinekitty/astronomy"};function Xn(n,e,t,i,s,r){return{id:`body.${n}`,kind:"body",tier:"D",label:e,oneLine:t,meaning:i,howMade:"Position, distance, light-time and apparent size computed from the ephemeris at the moment of the query, not tabulated.",limits:`${s} At Globe scale the rendered size and the orbital distance are both compressed; the True scale toggle removes the compression and the label says which is in force.`,sources:[qy],related:r}}const jy=[Xn("sun","Sun","The source of everything on this panel.","Every quantity on this panel starts here. The photosphere is 5 800 K and the corona above it is two million — the unsolved problem that makes the solar wind possible at all.","The disc you see is imagery projected onto a sphere, not a model of the Sun.",["layer.sun-disc","layer.coronagraph","layer.active-regions","inst.xray"]),Xn("mercury","Mercury","A magnetosphere so small the wind can crush it to the ground.","No atmosphere and only a weak global field, about 1% of Earth’s, so the solar wind reaches the surface. MESSENGER found its magnetosphere can be crushed to the ground during a strong event.","Nothing of Mercury’s own field or magnetosphere is drawn here.",["body.earth","layer.solar-wind"]),Xn("venus","Venus","No global field — the wind strips its atmosphere directly.","No global magnetic field. The wind interacts directly with the ionosphere and strips the upper atmosphere, which is part of why Venus has almost no water left.","The induced ionospheric interaction is not modelled or drawn.",["body.earth","body.mars"]),Xn("earth","Earth","The only planet here with a strong, stable dipole.","The only planet here with a strong, stable dipole. Everything else in this instrument is about what that field is doing today.","The globe’s surface imagery is a fixed composite, not today’s cloud.",["model.igrf14","model.t89","layer.field-lines","layer.terminator","layer.aurora"]),Xn("mars","Mars","Lost its global field, and much of its atmosphere with it.","Lost its global field roughly four billion years ago and kept only crustal patches. MAVEN measured the wind stripping the atmosphere at a rate that, over that span, accounts for much of what is missing.","The crustal field patches are real and are not drawn.",["body.earth","body.venus","layer.solar-wind"]),Xn("jupiter","Jupiter","The largest magnetosphere in the solar system, powered from inside.","The largest magnetosphere in the solar system — some twenty thousand times Earth’s magnetic moment, and if it glowed visibly it would be several times the size of the full Moon from here. Its aurorae are powered mostly by Io’s volcanoes rather than by the solar wind.","None of it is drawn. Nothing here models Jupiter’s field, its aurorae, or its gravitational influence on anything else in the scene.",["body.earth","model.astronomy-engine"]),Xn("saturn","Saturn","A dynamo whose axis is aligned with its spin, which should be impossible.","A magnetic axis aligned with its rotation axis to within a fraction of a degree, which is not supposed to be possible for a self-sustaining dynamo and is still not explained.","The rings are laid in Saturn’s own equatorial plane from the IAU rotational elements; nothing else about the system is modelled.",["body.jupiter","model.astronomy-engine"]),Xn("uranus","Uranus","A magnetosphere that opens and closes once a day.","Its magnetic axis is tilted 59° from its rotation axis and misses the centre of the planet, so its magnetosphere opens and closes once a day.","Not drawn.",["body.neptune","body.earth"]),Xn("neptune","Neptune","A tilted, offset field like Uranus — both made in a thin shell.","A magnetic field tilted 47° and offset from the centre, like Uranus. Both suggest a field generated in a thin shell rather than a deep core.","Not drawn.",["body.uranus","body.earth"]),Xn("moon","Moon","No field, no atmosphere — the surface takes the wind directly.","No field and no atmosphere, so the surface is exposed to the solar wind directly — which is why a radiation storm is an operational problem for anyone there, and why the S scale on this panel is the one that measures risk to people.","The Moon spends part of each month inside Earth’s magnetotail, which changes its radiation environment and is not represented here.",["inst.protons","layer.field-lines","body.earth"])],Ip=[...Gy,...$y,...Wy,...Xy,...jy],Ky=new Map(Ip.map(n=>[n.id,n]));function gi(n){return Ky.get(n)??null}function Yy(n){return`body.${n.toLowerCase()}`}function Ff(n){return Ip.filter(e=>e.kind===n)}function Zy(n){const e=/^(.+?[.!?])(\s+[A-Z(])/.exec(n.limits);return(e?e[1]:n.limits).trim()}const Np={E:"Measured",D:"Modelled",M:"Ambient"},Jy=299792.458;function Up(n,e){const t=sa[n]??sa.Moon;let i=null,s=null;if(n==="Sun")s=wl(Ce.Sun,wt(e),!0).Length();else if(n==="Moon")s=q1(e).length(),i=ia("Earth",e).helio.length();else if(X1.includes(n)){const o=ia(n,e);i=o.helio.length(),s=n==="Earth"?null:o.geo.length()}const r=s===null?null:s*vr/Jy,a=s===null||s===0?null:2*Math.atan(t/(s*vr))*180*3600/Math.PI;return{name:n,auFromSun:i,auFromEarth:s,lightSeconds:r,radiusKm:t,arcsecFromEarth:a}}function Fp(n){if(n===null)return"—";if(n<90)return`${n.toFixed(1)} s`;if(n<3600){const e=Math.floor(n/60);return`${e} min ${Math.round(n-e*60)} s`}return`${(n/3600).toFixed(1)} h`}function gl(n){if(n===null)return"—";const e=n*vr;return n<.01?`${Math.round(e/1e3).toLocaleString("en-US")} thousand km`:`${n.toFixed(3)} AU`}const Qy={wind:"The solar wind",geomagnetic:"What it is doing to Earth",sun:"The Sun",shield:"The shield",scene:"The scene itself"};function e7(n){const e=[],t=new Map;for(const i of n){let s=t.get(i.section);s||(s={id:i.section,title:Qy[i.section],lines:[],subjects:[]},t.set(i.section,s),e.push(s)),s.lines.push(i);for(const r of i.subjects)s.subjects.includes(r)||s.subjects.push(r)}return e}const t7=[[9,"extreme storm"],[8,"severe storm"],[7,"strong storm"],[6,"moderate storm"],[5,"minor storm"],[4,"unsettled"],[0,"quiet"]];function n7(n){if(n===null)return"unknown";for(const[e,t]of t7)if(n>=e)return t;return"quiet"}function Of(n,e){const t=n>=0?"N":"S",i=e>=0?"E":"W";return`${Math.abs(n).toFixed(1)}°${t}, ${Math.abs(e).toFixed(1)}°${i}`}function er(n){const e=n.nextAttempt?Date.parse(n.nextAttempt):NaN;return Number.isFinite(e)?` The next attempt is at ${Ge(new Date(e).toISOString())} UTC.`:" The next attempt is the next refresh cycle."}function i7(n,e,t=new Date,i=null,s=[],r=[],a={snapshot:!1,aurora:!1,cmes:!1}){return Op(n,e,t,i,s,r,a).map(o=>o.text)}function Op(n,e,t=new Date,i=null,s=[],r=[],a={snapshot:!1,aurora:!1,cmes:!1}){const o=[],l=(g,_,...m)=>{o.push({text:_,section:g,subjects:m})},c=`${Ge(t.toISOString())} UTC`;if(!n){if(a.snapshot){l("wind",`Solar wind: loading. Positions, the terminator and the scene are computed locally and are already live; the measurements land as the feeds resolve, snapshot lane first (checked ${c}).`);const g=ol(t);return l("scene",`Scene: the Sun at centre, planets at their true positions for ${c} [D]; the Sun is overhead at ${Of(g.lat,g.lon)}. `+(e.earthSurface==="imagery"?"Earth's surface is NASA's Blue Marble composite (2004) [E].":"Earth's surface imagery is still loading; the vector base map is on the globe."),"model.astronomy-engine","layer.terminator"),o}l("wind",`No space-weather data has loaded yet (checked ${c}). The scene below shows body positions only, which are computed locally and do not depend on the network.`)}const h=n?.data,u=n?.parts;if(h&&u){const g=or(u.solar_wind,t),_=h.solar_wind;if(!_||g.state==="no-data")l("wind",u.solar_wind?.error?`Solar wind: unavailable (${Un(u.solar_wind.error)}). ${er(a)} Nothing is being substituted for it.`:"Solar wind: no data. Nothing is being substituted for it.","inst.bz","inst.speed","inst.density");else{const M=_.bz_gsm,A=M===null?"unknown":M<-5?"strongly southward, which couples energy into the magnetosphere":M<0?"southward":"northward, which keeps the magnetosphere relatively closed";l("wind",`Solar wind at L1, measured by ${_.spacecraft??"the active spacecraft"}: Bz ${M===null?"no data":`${M.toFixed(1)} nanotesla`} (${A}); total field ${_.bt===null?"no data":`${_.bt.toFixed(1)} nT`}; speed ${_.speed===null?"no data":`${Math.round(_.speed)} kilometres per second`}; density ${_.density===null?"no data":`${_.density.toFixed(1)} protons per cubic centimetre`}. Measured [E], timestamped ${Ge(_.time)} UTC`+(g.state==="stale"?`, and now STALE — ${bn(g.ageS??0)} old.`:`, ${bn(g.ageS??0)} old.`),"inst.bz","inst.bt","inst.speed","inst.density","layer.l1-monitors")}if(h.propagated){const M=h.propagated.lead_minutes,A=r.find(b=>b.active)??null,L=A?`at L1, ${(A.distanceRe*6371.2/1e6).toFixed(2)} million kilometres sunward and ${A.offAxisRe.toFixed(0)} Earth radii off the Sun–Earth line (${A.offAxisDeg.toFixed(1)}°) [E]`:"at L1, about 1.5 million kilometres sunward";l("wind",`That wind was measured ${L}, and takes roughly an hour to arrive. NOAA propagates it to the bow shock nose [D · NOAA]: what is reaching Earth right now was observed at ${Ge(h.propagated.observed_at)} UTC, with Bz ${h.propagated.bz===null?"no data":`${h.propagated.bz.toFixed(1)} nT`} and speed ${h.propagated.speed===null?"no data":`${Math.round(h.propagated.speed)} km/s`}. `+(M!==null&&M>0?`There are about ${Math.round(M)} minutes of already-measured wind still in flight — that is the warning currently in hand.`:"No further measured wind is in flight."),"layer.l1-monitors","inst.speed")}const m=h.geosync;if(m&&m.total_nt!==null){const M=h.magnetopause?.standoff_re??null;l("geomagnetic",`GOES-${m.satellite??"?"} measures ${m.total_nt.toFixed(0)} nT at geostationary orbit, 6.6 Earth radii out [E], ${Ge(m.time)} UTC`+(m.arcjet?" — though its thruster was firing, so the reading is suspect":"")+`. That is ${m.deficit_nt!==null&&m.deficit_nt>0?`${m.deficit_nt.toFixed(0)} nT below`:"about"} the dipole value for that distance; the difference is the ring current and magnetopause currents subtracting from Earth's own field. `+(M!==null?M<=6.6?"With the modelled boundary inside 6.6 Rₑ, the spacecraft should be out in the solar wind — that is a claim this measurement can falsify.":"The modelled boundary is outside 6.6 Rₑ, so the spacecraft should be inside the magnetosphere, which is what this field says.":""),"inst.geosync","inst.mpause","model.igrf14")}const p=h.particles;if(p){const M=p.s_scale===null?"no data":`S${p.s_scale}${p.s_text?` (${p.s_text})`:""}`;l("geomagnetic",`Energetic particles at geostationary orbit, measured by GOES [E], ${Ge(p.time)} UTC: protons above 10 MeV at ${p.proton_10mev===null?"no data":`${p.proton_10mev.toFixed(2)} pfu`}, radiation storm level ${M}`+(p.s_scale!==null&&p.s_scale>=3?" — at this level aviation crews on polar routes take real dose.":".")+` Electrons above 2 MeV at ${p.electron_2mev===null?"no data":`${Math.round(p.electron_2mev)} pfu`}`+(p.electron_2mev!==null&&p.electron_2mev>=1e3?", above NOAA’s alert level for satellite charging.":", below the level that charges satellites."),"inst.protons","inst.electrons")}else l("geomagnetic",u.particles?.error?`Energetic particle flux: unavailable (${Un(u.particles.error)}). ${er(a)} No radiation storm level is shown.`:"Energetic particle flux: no data. No radiation storm level is shown.","inst.protons","inst.electrons");const v=or(u.kp,t);!h.kp||v.state==="no-data"?l("geomagnetic",u.kp?.error?`Planetary K index: unavailable (${Un(u.kp.error)}). ${er(a)}`:"Planetary K index: no data.","inst.kp"):l("geomagnetic",`Planetary K index ${h.kp.estimated_kp===null?"no data":h.kp.estimated_kp.toFixed(2)} — geomagnetic conditions are ${n7(h.kp.estimated_kp)}. Measured [E], ${Ge(h.kp.time)} UTC${v.state==="stale"?" — STALE":""}.`,"inst.kp");const x=or(u.dst,t);if(!h.dst||x.state==="no-data")l("geomagnetic",u.dst?.error?`Ring current (Dst): unavailable (${Un(u.dst.error)}). ${er(a)}`:"Ring current (Dst): no data.","inst.dst");else{const M=h.dst.lead_minutes;l("geomagnetic",`Ring current index Dst ${h.dst.value_nt===null?"no data":`${h.dst.value_nt.toFixed(0)} nanotesla`} — ${h.dst.level??"unclassified"}. This is how much a torus of trapped ions drifting around Earth is subtracting from the surface field; it is the single number that best tracks the size of a storm. Modelled [D] by NOAA's Geospace run from the L1 solar wind — not Kyoto's measured index, which has no route into a browser — for ${Ge(h.dst.time)} UTC${x.state==="stale"?" — STALE":""}. `+(M!==null&&M>0?`The model runs ${M} minutes ahead of that; the value quoted is the newest one whose time has arrived, not the newest one in the file.`:"The model has no lead beyond that sample."),"inst.dst","model.geospace-dst")}const y=or(u.xray,t);if(!h.xray||y.state==="no-data"?l("sun",u.xray?.error?`GOES X-ray flux: unavailable (${Un(u.xray.error)}). ${er(a)}`:"GOES X-ray flux: no data.","inst.xray"):l("sun",`Solar X-ray background is class ${h.xray.class??"no data"} (${h.xray.flux_long===null?"no data":`${h.xray.flux_long.toExponential(1)} watts per square metre`}, 0.1–0.8 nanometre band, GOES). Measured [E], ${Ge(h.xray.time)} UTC${y.state==="stale"?" — STALE":""}.`,"inst.xray","layer.active-regions"),h.scales){const M=h.scales.G,A=h.scales.R,L=h.scales.S;l("geomagnetic",`NOAA scales today: radio blackouts R${A.scale??"–"} (${A.text??"no data"}), solar radiation S${L.scale??"–"} (${L.text??"no data"}), geomagnetic storms G${M.scale??"–"} (${M.text??"no data"}). NOAA's own product, modeled [D].`)}else l("geomagnetic",u.scales?.error?`NOAA R/S/G scales: unavailable (${Un(u.scales.error)}). ${er(a)}`:"NOAA R/S/G scales: no data.");const E=h.magnetopause;if(E?.standoff_re!=null){const M=E.standoff_re<9?" That is a compressed magnetosphere — the shield is being pushed in.":E.standoff_re>11.5?" That is an expanded, quiet magnetosphere.":"";l("shield",`Modeled [D] magnetopause standoff: ${E.standoff_re.toFixed(1)} Earth radii on the sunward side, with flaring parameter ${E.alpha?.toFixed(2)??"no data"}, computed from the ${h.propagated?"propagated":"L1"} solar wind above (dynamic pressure ${E.dyn_pressure_npa?.toFixed(2)??"no data"} nanopascals) using Shue et al. 1998, doi:10.1029/98JA01103.${M}`+(E.bow_shock_re!=null?` The bow shock stands off at ${E.bow_shock_re.toFixed(1)} Earth radii (Farris & Russell 1994).`:""),"inst.mpause","model.shue1998","model.farris-russell")}else l("shield","Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing. No boundary is drawn.","inst.mpause","model.shue1998");if(h.alerts.length>0){const M=h.alerts[0];l("geomagnetic",`Most recent NOAA notice, ${Ge(M.issued)} UTC: ${M.headline||M.product}. ${h.alerts.length} notices in the last three days.`)}else l("geomagnetic","No NOAA alerts, watches or warnings in the feed.")}const d=s.filter(g=>g.earthDirected&&g.arrival&&Date.parse(g.arrival.time)>t.getTime()).sort((g,_)=>Date.parse(g.arrival.time)-Date.parse(_.arrival.time));if(d.length>0){const g=d[0],_=(Date.parse(g.arrival.time)-t.getTime())/36e5;l("sun",`A coronal mass ejection is on its way. NASA's DONKI catalogue analysed it leaving the Sun at ${Math.round(g.speedKms)} km/s on ${Ge(g.time215)} UTC, with a ${Math.round(g.halfAngle)}° half-angle cone pointed ${g.offAxisDeg<5?"almost directly at Earth":`${Math.round(g.offAxisDeg)}° off the Earth line`} [D · NASA]. Propagating it radially at that constant speed puts arrival near ${Ge(g.arrival.time)} UTC, about ${_<24?`${Math.round(_)} hours`:`${(_/24).toFixed(1)} days`} from now, give or take ${g.arrival.windowHours} hours [D · cone]. ${g.arrivalFromEnlil?"That arrival time is NOAA/NASA’s own Enlil run.":"Constant speed ignores drag — real ejections decelerate toward the ambient wind, so fast ones tend to arrive later than this and slow ones earlier. The window is an order-of-magnitude bound, not a fitted error."}${d.length>1?` ${d.length-1} more are also inbound.`:""}`,"model.cme-cone","model.enlil","layer.cme-cones")}else s.length>0&&l("sun",`${s.length} coronal mass ejection${s.length>1?"s have":" has"} been analysed in the last few days, none of them Earth-directed with an arrival still ahead of us. Nothing is inbound.`,"model.cme-cone");e.cmes&&e.cmes.count>0&&l("sun",`${e.cmes.count} cone${e.cmes.count>1?"s are":" is"} drawn expanding from the Sun [D], warm where Earth lies inside the cone and cool where it does not. The apex direction, half-angle and speed are DONKI's analysis of coronagraph imagery; the radial propagation is ours.`,"layer.cme-cones","model.cme-cone");const f=ol(t);if(l("scene",`Scene: the Sun at centre, with all eight planets at their true positions for ${c}, computed locally with astronomy-engine [D]. The Sun is currently overhead at ${Of(f.lat,f.lon)}, and Earth's day/night terminator in the scene is drawn from that point [D]. The Moon is shown at its true direction from Earth.`,"model.astronomy-engine","layer.orbits","layer.terminator"),l("scene",e.earthSurface==="imagery"?"Earth's surface is measured imagery [E]: NASA's Blue Marble Next Generation composite, acquired through 2004, with NASA's Black Marble 2016 night lights drawn as emission on the night side. Nothing about it is live — it is a dated composite, and it says so here rather than pretending to be today's clouds.":e.earthSurface==="loading"?"Earth's surface imagery (NASA's Blue Marble and Black Marble composites) is still loading; the vector base map is on the globe until it arrives.":"Earth's surface is the vector base map — NASA's raster composites (Blue Marble 2004, Black Marble 2016) did not load, so no imagery is implied.","body.earth","layer.terminator"),!e.aurora)l("geomagnetic","The aurora overlay is hidden.","layer.aurora");else if(i?.data){const g=i.data,_=(t.getTime()-Date.parse(g.observation_time))/1e3,m=_>i.stale_after_s;l("geomagnetic",`Aurora: NOAA's OVATION Prime model [D · NOAA] puts the peak probability of visible aurora at ${g.max_probability}% in this forecast, valid ${Ge(g.forecast_time)} UTC and computed from an observation at ${Ge(g.observation_time)} UTC (${bn(_)} old${m?", STALE":""}). It is drawn as the glowing oval over the poles, on a 1°-by-1° grid, teal through magenta with increasing probability — a legend for intensity, not the aurora's real colours. The oval encircles the magnetic pole, not the geographic one — which is why it sits off-centre.`,"layer.aurora","model.ovation")}else a.aurora?l("geomagnetic","Aurora: loading. The OVATION forecast lands with the slow lane; no oval is drawn yet.","layer.aurora","model.ovation"):l("geomagnetic","Aurora: the OVATION forecast is unavailable, so no oval is drawn.","layer.aurora","model.ovation");if(e.shield){const g=e.fieldLines.far===!0,_=e.fieldLines.external??null,m=e.fieldLines.tiltDeg??null,p=m===null?"—":`${m.toFixed(1)}°`,v=e.fieldLines.truncated??0;let x;const y=[];if(_===null)x="Neither the solar wind nor a Kp index reached us, so the external field is not modelled and these lines are the Earth's internal field alone — a tilted dipole, with none of the compression or tail stretching the solar wind actually imposes. Read the shape as incomplete rather than quiet.";else if(_.name==="t89")y.push("model.t89"),x=`Added to it is ${l8()} [D], ${dp(_.band)}, at a dipole tilt of ${p}. That is what compresses the dayside, stretches the nightside into lobes and inflates the inner region: the shape is the field's, integrated, not a surface drawn around a dipole. This is the fallback — the solar wind was incomplete, so T96 could not run. T89 bins Kp into seven fits, so the field steps between them rather than gliding, and it carries no IMF term at all: a southward Bz opens the real dayside and changes nothing here.`;else{y.push("model.t96");const E=_.input,M=cv(E);x=`Added to it is ${uv()} [D], driven by ${E.pdynNPa.toFixed(2)} nPa of dynamic pressure, Dst ${E.dstNt.toFixed(0)} nT and an IMF of By ${E.byNt.toFixed(1)}, Bz ${E.bzNt.toFixed(1)} nT, at a dipole tilt of ${p}. That is what compresses the dayside, stretches the nightside into lobes and inflates the inner region: the shape is the field's, integrated, not a surface drawn around a dipole. Because T96 has an IMF term, the Bz above is doing something here — one nanotesla of it moves these lines further than twelve minutes of the Earth turning does. It has no memory, though: a magnetosphere driven hard for six hours looks the same to it as one just struck.`+(M.length>0?` Outside the fitted range: ${M.join("; ")} — the model still runs, because a severe storm is when this matters most, but out there it is extrapolating a straight line.`:"")}l("shield",`The magnetic shield is drawn: ${e.fieldLines.lines} field lines traced through ${sp(new Date)} [D], blue where they close between hemispheres and violet where they stay open toward the solar wind. The teal boundary is the Shue et al. 1998 magnetopause and the orange one the Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. `+x+(v>0?` ${v} line${v===1?"":"s"} run past where ${v===1?"it is":"they are"} drawn, and ${v===1?"is":"are"} cut rather than ended: `+(_?.name==="t96"?"either they crossed T96's own magnetopause, where what a line joins is the solar wind's field rather than ours, or they ran past the arc length the tail is drawn to.":"T89 is fitted inside 70 Rₑ and has no magnetopause, so the trace stops at the edge of what the model describes — down the tail, and 20 Rₑ sunward."):"")+" The boundary surfaces stop at 100° from the sunward axis, inside the range Shue et al. fitted; the real magnetotail continues far beyond."+(g?" From this far out the full line cage would read as noise, so it gives way to twelve signature lines and the boundary silhouette; the cage returns as the camera closes in.":""),"layer.field-lines","model.igrf14",...y,"layer.magnetopause","layer.bow-shock")}else l("shield","The magnetic shield is hidden.","layer.field-lines");return l("scene",`${K1(e.mode)}. Camera: ${ra.find(g=>g.id===e.view)?.label??e.view} — ${ra.find(g=>g.id===e.view)?.title??""}. ${e.reducedMotion?"Reduced motion is on — camera moves cut rather than glide.":"Motion is enabled."}`),e.wind!==!1&&h?.solar_wind?.speed!=null&&l("wind",`The streaming particles are ambient [M] — far sparser and brighter than the real wind, which is invisible. What is real is their behaviour: they move at a rate set by the measured ${Math.round(h.solar_wind.speed)} km/s, their number follows the measured density, and they part around the same modelled magnetopause the HUD reports. When the boundary is pushed in, the flow closes in with it.`,"layer.solar-wind","inst.speed","inst.density"),(h?.kp?.estimated_kp??0)>4&&l("shield","The field lines are shivering. That is ambient [M] — a legend for the elevated Kp above, not a motion the real field makes.","layer.field-lines","concept.tiers"),l("scene","Colour and the starfield are ambient [M] — parameter-driven artwork, not measurements. There is no invented glow around the Sun: the region a painted corona would have occupied is the region the LASCO coronagraphs actually photograph, and that imagery is shown there instead when it is switched on.","layer.starfield","layer.coronagraph","concept.tiers"),o}const oi=[{id:"report",label:"Now"},{id:"forecast",label:"Ahead"},{id:"sun",label:"Sun"},{id:"sources",label:"Sources"},{id:"checks",label:"Checks"}];function ie(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Kn(n,e,t,i=!0,s){if(!t.trim())return"";const r=s?.(n),a=r===void 0?i:r;return`<details class="sect" data-sect="${ie(n)}"${a?" open":""}>
    <summary>${ie(e)}</summary>
    <div class="sect-body">${t}</div>
  </details>`}function s7(n,e){let t=n;for(const i of e){const s=gi(i);if(!s)continue;const r=[...s.aliases??[],s.label].map(ie).sort((a,o)=>o.length-a.length);for(const a of r){const o=t.indexOf(a);if(!(o<0||t.lastIndexOf("<",o)>t.lastIndexOf(">",o))){t=t.slice(0,o)+`<button type="button" class="subject-mention" data-subject="${ie(i)}">`+a+"</button>"+t.slice(o+a.length);break}}}return t}function r7(n){const e=n.map(t=>gi(t)).filter(t=>!!t).map(t=>`<li><button type="button" class="subject-link" data-subject="${ie(t.id)}"><span class="badge badge-${t.tier.toLowerCase()}">${t.tier}</span>
      ${ie(t.label)}</button> — ${ie(Zy(t))}</li>`).join("");return e?`<details class="limits"><summary>What this does not say</summary>
        <ul class="subject-links">${e}</ul></details>`:""}function a7(n,e,t,i){const s=Op(n.now,e,t,n.aurora,n.cmes,n.spacecraft?.data??[],{snapshot:n.lanes.snapshot,aurora:n.lanes.aurora,cmes:n.lanes.cmes,nextAttempt:n.nextAttempt}),a=e7(s).map((o,l)=>Kn(`report-${o.id}`,o.title,o.lines.map(c=>`<p>${s7(ie(c.text),c.subjects)}</p>`).join("")+r7(o.subjects),l===0,i)).join("");return`
    <h2>Now</h2>
    <p class="state-sentence" aria-hidden="true">${Iy(n)}</p>
    <p class="sr-only">${ie(Ny(n))}</p>
    <h3>Situation Report</h3>
    ${a}
    ${o7(e)}`}function o7(n){const e=(n.drawn??[]).map(s=>gi(s)).filter(s=>!!s);if(e.length===0)return"";const i=[["E","Measured — read from an instrument"],["D","Modelled — computed by a named model"],["M","Ambient — drawn, not measured"]].map(([s,r])=>{const a=e.filter(o=>o.tier===s).map(o=>`
      <li><button type="button" class="subject-link" data-subject="${ie(o.id)}">
        <span class="badge badge-${s.toLowerCase()}">${s}</span>
        ${ie(o.label)}</button> — ${ie(o.oneLine)}${o.keyedTo?` <em>Keyed to ${ie(o.keyedTo)}.</em>`:""}</li>`).join("");return a?`<h4 class="index-tier">${ie(r)}</h4>
      <ul class="subject-links">${a}</ul>`:""}).join("");return`<details class="sect" data-sect="report-index">
    <summary>What am I looking at — ${e.length} things on screen</summary>
    <div class="sect-body">
      <p class="fine">Everything the scene is drawing at this moment, read from the
      scene itself rather than a list kept beside it. Some are reached by clicking the
      body they belong to — the Sun's imagery, the monitors, the Earth's surface — and
      the rest answer a click where they are drawn.</p>
      ${i}
    </div>
  </details>`}function l7(n){if(n.kp.length===0)return'<p class="tile-meta">No Kp forecast loaded.</p>';const e=n.kp.slice(-40),t=Math.max(5,...e.map(c=>c.kp)),i=268,s=46,r=1,a=(i-r*(e.length-1))/e.length,o=e.map((c,h)=>{const u=c.kp/t*(s-10),d=c.kind==="predicted"?"kp-pred":"kp-obs",f=c.kp>=5?" kp-storm":"";return`<rect class="${d}${f}" x="${(h*(a+r)).toFixed(2)}" y="${(s-10-u).toFixed(2)}"
      width="${a.toFixed(2)}" height="${Math.max(.6,u).toFixed(2)}">
      <title>${Ge(c.time)} UTC — Kp ${c.kp.toFixed(2)} (${c.kind})</title></rect>`}).join(""),l=s-10-5/t*(s-10);return`<svg class="kp-chart" viewBox="0 0 ${i} ${s}" role="img"
      aria-label="Planetary K index, observed and predicted, storm threshold at 5">
      <line class="spark-rule" x1="0" y1="${l.toFixed(2)}" x2="${i}" y2="${l.toFixed(2)}" />
      ${o}</svg>
    <p class="tile-meta"><span class="key-obs">▮</span> observed
      <span class="key-pred">▮</span> predicted · rule at Kp 5, the storm threshold</p>`}function c7(n,e,t=[],i,s=null){if(!n)return`<h2>Ahead</h2><p>${e?'<span class="tile-state loading">Loading NOAA forecasts<span class="pulse">…</span></span>':s?`<span class="tile-state err"><span class="tile-state-word">unavailable</span> · ${ie(s)}</span>`:"no data — the forecasts could not be parsed."}</p>`;const r=n.threeDay?Uf(n.threeDay):null,a=n.discussion?Uf(n.discussion):null,o=n.odds[0];return`
    <h2>Ahead</h2>
    <p>Everything below is <span class="badge badge-d">D</span> NOAA's own forecast, not ours.
    Where the forecaster wrote prose, it is reproduced verbatim — a summary of a forecast is
    a different claim from the forecast.</p>

    <h3>Planetary K, observed and predicted</h3>
    ${l7(n)}

    ${o?`<h3>Flare probability, next 24 h</h3>
    <table class="prov"><tbody>
      <tr><td>C class</td><td class="num">${o.c??"—"}%</td>
          <td>common; minor or no effect at the ground</td></tr>
      <tr><td>M class</td><td class="num">${o.m??"—"}%</td>
          <td>radio blackouts on the sunlit side</td></tr>
      <tr><td>X class</td><td class="num">${o.x??"—"}%</td>
          <td>strong blackouts, possible radiation storm</td></tr>
    </tbody></table>
    <p class="tile-meta">Issued for ${ie(o.date)}.</p>`:""}

    ${n.flares.length?`<h3>Recent flares</h3>
    <table class="prov"><tbody>${n.flares.slice(0,6).map(l=>`
      <tr><td class="num">${ie(l.maxClass)}</td>
          <td class="num">${Ge(l.max??l.begin)}</td>
          <td>${l.region?`region ${l.region}`:""}
            <span class="tile-meta">${bn((Date.now()-Date.parse(l.begin))/1e3)} ago</span></td></tr>`).join("")}
    </tbody></table>`:""}

    ${n.f107.value!==null?`<h3>Solar radio flux</h3>
    <p>F10.7 at <b class="sentence-num">${n.f107.value}</b> solar flux units — the standard
    proxy for solar activity and the driver of upper-atmosphere density, so it sets how fast
    satellites in low orbit decay.</p>`:""}

    ${h7(n.enlil,t,i)}

    ${Kn("fc-3day","NOAA 3-day forecast",r?`
      <pre class="product">${ie(r.body)}</pre>
      ${r.issued?`<p class="tile-meta">Issued ${ie(r.issued)}.
        <a href="${d7.threeDay}" rel="noreferrer noopener" target="_blank">Source</a>.</p>`:""}
    `:"",!1,i)}

    ${Kn("fc-discussion","Forecaster discussion",a?`
      <pre class="product">${ie(a.body)}</pre>
      ${a.issued?`<p class="tile-meta">Issued ${ie(a.issued)}.</p>`:""}
    `:"",!1,i)}`}function h7(n,e=[],t){if(!n||n.ahead.length===0)return"";const i=n.peakSpeed,s=n.cloudArrival,r=n.past[n.past.length-1]?.speed??null,a=Nn(If(n.ahead,"speed"),{unit:"km/s",format:c=>c.toFixed(0),extremes:!0,direction:"future"}),o=Nn(If(n.ahead,"cloud"),{unit:"",format:c=>c.toFixed(2),rule:jr,direction:"future"}),l=c=>{const h=(Date.parse(c)-Date.now())/36e5;return h<1?"within the hour":`in about ${Math.round(h)} h`};return Kn("fc-enlil","WSA-Enlil — the wind at Earth",`
    <p>A magnetohydrodynamic simulation of the inner heliosphere sampled at Earth
    <span class="badge badge-d">D</span>, run by NOAA from solar magnetograms and the
    analysed CME cones. It is the only forecast here that solves the physics rather than
    extrapolating, and unlike our own cone propagation it accounts for drag.</p>

    <p>Radial speed over the next
    ${Math.round((Date.parse(n.lastTime)-Date.now())/36e5)} hours${r!==null?`, from <b class="sentence-num">${r.toFixed(0)}</b> km/s now`:""}:</p>
    ${a}
    ${i?.speed!=null?`<p>Peaks at <b class="sentence-num">${i.speed.toFixed(0)}</b> km/s
      ${l(i.time)} — ${Ge(i.time)} UTC on
      ${new Date(i.time).toUTCString().slice(0,11)}.</p>`:""}

    <h4>Ejecta at Earth</h4>
    <p class="fine">The model carries a passive tracer that marks CME plasma. It is a mixing
    fraction, not a density and not a probability — it says where the ejection is in the
    simulation, and the simulation can be wrong about that.</p>
    ${o}
    ${s?`<p>The tracer crosses ${jr} at <b class="sentence-num">${Ge(s.time)}</b> UTC
         on ${new Date(s.time).toUTCString().slice(0,11)}, ${l(s.time)} —
         the model's arrival for the ejection now in flight.</p>
         ${u7(s.time,e)}`:`<p>The tracer stays below ${jr} throughout the run: no ejecta reach Earth
         in the model's window.${e.some(c=>c.earthDirected&&c.arrival&&Date.parse(c.arrival.time)>Date.now())?" Our cone propagation does put one here — the two disagree, and Enlil is the one that solves the physics.":""}</p>`}
    <p class="fine">Model output starts ${new Date(n.firstTime).toUTCString().slice(0,11)}
    at ${Ge(n.firstTime)} UTC — ${n.past.length}
    samples already elapsed and ${n.ahead.length} still ahead. The elapsed half is checked
    against the measured wind in the Checks panel.</p>`,!0,t)}function u7(n,e){const i=e.filter(a=>a.earthDirected&&a.arrival&&Date.parse(a.arrival.time)>Date.now()).sort((a,o)=>Date.parse(a.arrival.time)-Date.parse(o.arrival.time))[0];if(!i?.arrival)return`<p class="fine">No Earth-directed cone of ours has an arrival still ahead, so
      there is nothing to compare this against.</p>`;if(i.arrivalFromEnlil)return`<p class="fine">The arrival in the CME panel is NOAA and NASA's own Enlil
      figure, so it is the same model and not an independent comparison.</p>`;const s=(Date.parse(n)-Date.parse(i.arrival.time))/36e5,r=s>0;return`<p>Our cone puts it at <b class="sentence-num">${Ge(i.arrival.time)}</b> UTC,
    <b class="sentence-num">${Math.abs(s).toFixed(0)} h</b>
    ${r?"earlier":"later"} than Enlil.
    ${r?"That is the expected direction: the cone carries the ejection at the constant speed DONKI measured near the Sun, and real ejections decelerate toward the ambient wind. Enlil is the better number; ours is the geometry.":"That is the wrong direction for the usual reason — constant-speed propagation should run early against a model that includes drag — so either the cone speed is below the ambient wind, in which case the ejection accelerates, or the two are tracking different structures."}</p>`}const d7={threeDay:"https://services.swpc.noaa.gov/text/3-day-forecast.txt"};function f7(n,e){const t=Cl(e);return`<tr>
    <td>${ie(n)}</td>
    <td><span class="badge badge-${t.toLowerCase()}" title="${ie(Bu(e))}">${t}</span></td>
    <td><a href="${e.source_url}" rel="noreferrer noopener" target="_blank">${ie(e.source)}</a>${e.model?`<br><span class="tile-meta">${ie(e.model.name)}</span>`:""}</td>
    <td class="num">${e.data_time?Ge(e.data_time):Lt}</td>
    <td class="num">${e.error?`<span class="err">${ie(e.error)}</span>`:e.latency_s===null?Lt:`${e.latency_s}s`}</td>
  </tr>`}function p7(n,e,t,i={surface:"vector",lights:!1,coast:!1}){const s=n.now;if(!s)return"<h2>Provenance</h2><p>No envelope loaded yet.</p>";const r=(h,u,d,f,g,_)=>`<tr>
      <td>${h}</td>
      <td><span class="badge badge-e">E</span></td>
      <td><a href="${d}" rel="noreferrer noopener" target="_blank">${u}</a>
        <br><span class="tile-meta">${g}</span></td>
      <td class="num">${f}</td>
      <td class="num">${_?"on screen":"—"}</td>
    </tr>`,a=`
      ${r("earth surface","NASA Blue Marble Next Generation","https://earthobservatory.nasa.gov/features/BlueMarble/blue_marble.php","2004-12","a composite, not live; public domain. Lazy-loaded after first paint.",i.surface==="imagery")}
      ${r("earth night lights","NASA Black Marble 2016","https://earthobservatory.nasa.gov/features/night-lights/page/2","2016","Suomi NPP VIIRS day/night band composite, drawn as emission on the night side.",i.lights)}`,o=n.aurora,l=o?`<tr>
    <td>aurora</td>
    <td><span class="badge badge-d">D</span></td>
    <td><a href="${o.source_url}" rel="noreferrer noopener" target="_blank">${ie(o.source)}</a>
      <br><span class="tile-meta">${ie(o.model?.name??"")}</span></td>
    <td class="num">${o.data?Ge(o.data.observation_time):Lt}</td>
    <td class="num">${o.data?`${o.latency_s}s`:Lt}</td>
  </tr>`:"",c=m7(n.spacecraft?.data??[],n.now?.data.solar_wind?.speed??null);return`
    <h2>Provenance</h2>
    <p>Every element on screen, its evidence tier, where it came from and how old it is.</p>
    ${e?kp(e):""}
    ${Kn("prov-table","Every element",`
      <table class="prov">
        <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Time</th><th>Lat.</th></tr></thead>
        <tbody>${Object.entries(s.parts).map(([h,u])=>f7(h,u)).join("")}${l}</tbody>
      </table>`,!0,t)}
    ${Kn("prov-earth","The Earth base — imagery, not a feed",`
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
    ${Kn("prov-monitors","The monitors",c,!1,t)}
    ${Kn("prov-tiers","What the tiers mean",`
      <p><span class="badge badge-e">E</span> Measured — read from an instrument, shown with its
      timestamp and latency.<br>
      <span class="badge badge-d">D</span> Modelled — computed from measured inputs by a named,
      cited model.<br>
      <span class="badge badge-m">M</span> Ambient — artwork. Parameter-driven, sometimes by real
      values, but never itself a measurement.</p>`,!1,t)}
    ${Kn("prov-models","Models cited",`
      <p class="fine">Each opens what it does — and what it does not.</p>
      <ul class="subject-links">${Ff("model").map(h=>`
        <li><button type="button" class="subject-link" data-subject="${ie(h.id)}">
          <span class="badge badge-${h.tier.toLowerCase()}">${h.tier}</span>
          ${ie(h.label)}</button> — ${ie(h.oneLine)}</li>`).join("")}</ul>
      <p class="fine">${ie(sp(new Date))}</p>`,!1,t)}
    ${Kn("prov-drawn","What is drawn",`
      <p class="fine">Everything in the scene, by tier. Ambient layers say which of
      their dimensions carries a real number and which is invented.</p>
      <ul class="subject-links">${Ff("layer").map(h=>`
        <li><button type="button" class="subject-link" data-subject="${ie(h.id)}">
          <span class="badge badge-${h.tier.toLowerCase()}">${h.tier}</span>
          ${ie(h.label)}</button> — ${ie(h.oneLine)}</li>`).join("")}</ul>`,!1,t)}`}const kf=6371.2;function m7(n,e){if(n.length===0)return"";const t=n.find(o=>o.active)??null,i=n.map(o=>`<tr${o.active?' class="l1-row-active"':""}>
      <td>${ie(o.source)}${o.active?' <span class="tag-live">live</span>':""}</td>
      <td class="num">${o.distanceRe.toFixed(0)}</td>
      <td class="num">${o.offAxisRe.toFixed(1)}</td>
      <td class="num">${o.offAxisDeg.toFixed(1)}°</td>
    </tr>`).join(""),s=n.map(o=>{const l=Py[o.source];return l?`<br><b>${ie(o.source)}</b> — ${ie(l)}`:""}).join("");let r="";if(t&&e&&e>0){const o=t.distanceRe*kf/e/60;r=` At the ${e.toFixed(0)} km/s now measured, the wind it is
      sampling reaches Earth about ${o.toFixed(0)} minutes later.`}const a=t?`<p>${ie(t.source)} is
       ${(t.distanceRe*kf/1e6).toFixed(2)} million km upstream and
       <b>${t.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line</b> —
       ${t.offAxisDeg.toFixed(1)}° away from the direction the wind actually has to
       travel to reach us.${r}</p>
       <p class="fine">The solar wind is structured on scales smaller than that offset, so
       the monitor does not always sample the plasma that arrives. It is the best warning
       there is, and it is not the same thing as a measurement taken here.</p>`:"<p>No spacecraft is currently flagged operational in the ephemeris feed.</p>";return`
    ${xy(n)}
    <p class="fine caption">Looking sunward along the Sun–Earth line. Nothing here is
    compressed — Earth, the Moon’s orbit and the spacecraft offsets are one scale.</p>
    <table class="prov l1-table">
      <thead><tr><th>Craft</th><th>Rₑ out</th><th>Rₑ off</th><th>Angle</th></tr></thead>
      <tbody>${i}</tbody>
    </table>
    ${a}
    <p class="fine">${s.replace(/^<br>/,"")}</p>`}function kp(n){const e=n.rows.length-n.inconclusive;return`<p><span class="summary-pill ${n.passed===e?"ok":"bad"}">${n.passed} / ${e} checks pass</span>${n.inconclusive>0?` <span class="tile-meta">${n.inconclusive} could not be settled on today's data</span>`:""}</p>`}function g7(n,e){return e&&!n?"<h2>Checks</h2><p>Comparing our numbers with NOAA’s own, by an independent path…</p>":n?`
    <h2>Checks</h2>
    <p>Our values against NOAA’s own published figures, fetched by a separate path at the
    same timestamp. Drift is a bug, not a rounding preference.</p>
    ${kp(n)}
    <table class="prov">
      <tbody>
        ${n.rows.map(t=>`
          <tr class="check-row">
            <td colspan="2"><strong>${ie(t.name)}</strong></td>
            <td class="${t.inconclusive?"verdict-none":t.ok?"verdict-ok":"verdict-bad"}">${t.inconclusive?"no signal":t.ok?"pass":"DRIFT"}</td>
          </tr>
          <tr class="check-row">
            <td class="num">${ie(t.ours)}</td>
            <td class="tile-meta">vs</td>
            <td class="num">${ie(t.theirs)}</td>
          </tr>
          <tr><td class="check-note" colspan="3">${ie(t.note)}</td></tr>`).join("")}
      </tbody>
    </table>
    <p class="tile-meta">Last run ${Ge(n.ranAt)} UTC.</p>`:"<h2>Checks</h2><p>Not run yet.</p>"}function _7(n,e){return n===null?"unknown size":`~${(n*e/1048576).toFixed(0)} MB`}function zf(n,e,t,i,s){if(e)return{state:"loading",text:`<p class="tile-state loading">Loading ${n} frames<span class="pulse">…</span></p>`};if(i){const r=s?` · retrying at ${Ge(s)} UTC`:"";return{state:"error",text:`<p class="tile-state err"><span class="tile-state-word">unavailable</span> · ${ie(i)}${r}</p>`}}return t?{state:"fresh",text:""}:{state:"no-data",text:'<p class="tile-state">no data — the frame list carried no usable frames.</p>'}}function v7(n,e,t){if(!n)return e?'<h3>Solar cycle</h3><p class="tile-state loading">Loading the sunspot record<span class="pulse">…</span></p>':t?`<h3>Solar cycle</h3><p class="tile-state err"><span class="tile-state-word">unavailable</span> · ${ie(t)}</p>`:'<h3>Solar cycle</h3><p class="tile-state">no data — the record could not be parsed.</p>';const i=n.latest,s=n.ssn.time.length/12;return`
    <h3>Solar cycle</h3>
    <p>Monthly sunspot number since ${ie(n.ssn.time[0].slice(0,4))} —
    ${Math.round(s)} years, the longest continuous record in science.</p>
    ${Nn(n.ssn,{extremes:!0,format:r=>r.toFixed(0),unit:"spots",label:"monthly sunspot number, full record"})}
    <p>The last three cycles:</p>
    ${Nn(Vy(n.ssn,396),{extremes:!0,format:r=>r.toFixed(0),unit:"spots",label:"monthly sunspot number, last 33 years"})}
    <p class="tile-meta">
      ${i?.ssn!==null&&i!==null?`Now <b class="sentence-num">${i.ssn.toFixed(0)}</b>
        for ${ie(i.month)}`:"Latest month unavailable"}${n.allTimeMax?` · record <b class="sentence-num">${n.allTimeMax.ssn.toFixed(0)}</b>
        in ${ie(n.allTimeMax.month)}`:""}.
      <span class="badge badge-e">E</span> NOAA SWPC solar-cycle indices.</p>`}function x7(n,e,t=null,i=!1,s=null){const r=(g,_,m,p)=>`<button class="ctl" ${p}="${g}" aria-pressed="${m}">${ie(_)}</button>`,a=e.filter(g=>g.kind==="disk"),o=e.filter(g=>g.kind==="coronagraph"),l=`
    <div class="sun-set">
      <span class="sun-set-label">Disk · sphere and card</span>
      <div class="sun-picker">${a.map(g=>r(g.id,g.label,g.id===n.loopId,"data-loop")).join("")}</div>
    </div>
    <div class="sun-set">
      <span class="sun-set-label">Corona · plane</span>
      <div class="sun-picker">${r("","Off",n.coronaId===null,"data-corona")}${o.map(g=>r(g.id,g.label,g.id===n.coronaId,"data-corona")).join("")}</div>
    </div>`,c=zf("SUVI",n.loading,!!n.loop,n.error,n.retryAt),h=n.loop?y7(n):c.text,u=n.coronaId!==null,d=u?zf("coronagraph",n.coronaLoading,!!n.corona,n.coronaError,n.coronaRetryAt):null,f=u?d.state==="fresh"?S7(n):d.text:"";return`
    <h2>The Sun</h2>
    ${l}
    <section class="sun-sec" data-state="${u?d.state:c.state}" aria-label="Disk imagery">
      ${h}
    </section>
    <section class="sun-sec" data-state="${d?d.state:"fresh"}" aria-label="Coronagraph">
      ${f}
      ${M7(n)}
    </section>
    ${v7(t,i,s)}`}function y7(n){const e=n.loop,t=e.frames[n.frameIndex]??e.frames[e.frames.length-1],i=Jx(e.instrument,t.satellite),s=Math.round((Date.now()-Date.parse(t.time))/6e4),r=e.frames.length,a=n.preloading?`<span class="tile-meta">Loading ${n.preloaded}/${r} frames…</span>`:n.preloaded>=r?`<button class="ctl" id="sun-play" aria-pressed="${n.playing}">${n.playing?"Pause":"Play"}</button>
         <input type="range" id="sun-scrub" min="0" max="${r-1}" value="${n.frameIndex}" aria-label="Frame" />
         <span class="tile-meta">${n.frameIndex+1}/${r}</span>`:`<button class="ctl" id="sun-play">Load loop · ${r} frames, ${_7(e.frameBytes,r)}</button>`;return`
    <div class="sun-frame">
      <!-- The image element is not written here. It is owned by the image
           cache and moved into this slot after render, so that rebuilding the
           panel does not throw away a decode that costs 380 ms. -->
      <div class="sun-slot" id="sun-slot" data-frame="${ie(t.url)}"
           data-alt="${ie(i)} image of the Sun at ${Ge(t.time)} UTC"></div>
      <div class="sun-stamp"><span>${Ge(t.time)} UTC</span><span>${s} min ago</span></div>
    </div>
    <div class="sun-transport">${a}</div>
    <p><span class="badge badge-e">E</span> ${ie(i)}. ${ie(e.describes)}</p>
    ${b7(n)}
    <p class="tile-meta">${e.skippedDropouts>0?`The newest ${e.skippedDropouts} frame${e.skippedDropouts>1?"s were":" was"} a
         data dropout — a valid but near-empty image — so this is the newest usable one. `:"Showing the newest frame. "}Upstream published ${e.totalAvailable} frames
    over ${e.spanHours.toFixed(0)} hours; playback samples ${r} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${e.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>`}function b7(n){const e=n.diskPlane;return!n.loop||n.loop.kind!=="disk"||!e?"":`<p class="tile-meta">The disk is wrapped onto the sphere; the light
    <i>outside</i> the limb has no sphere to land on, so it is drawn flat on the
    image plane instead — a card reaching <b>${e.halfWidthRsun.toFixed(1)} solar radii</b>,
    measured from this frame's own limb. Prominences and the low corona are on that card.
    Nothing is extrapolated across the two: inside the limb belongs to the sphere,
    outside it to the plane.</p>`}function M7(n){const e=!!n.loop&&n.loop.kind==="disk",t=E9(n.diskPlane,n.coronaPlane,e);if(t.length===0)return"";const i=t.map(r=>{const a=`${r.fromRsun.toFixed(1)}–${r.toRsun.toFixed(1)} R☉`;return r.label===null?`<tr><td class="err">not observed</td><td class="num">${a}</td></tr>`:`<tr><td>${ie(r.label)}</td><td class="num">${a}</td></tr>`}).join(""),s=t.find(r=>r.label===null&&r.fromRsun>0);return`
    <p class="tile-meta"><b>Covered, in solar radii from the Sun's centre.</b>
      Distances are as measured — the Sun looks small inside a coronagraph because the
      occulting disc really does stand off that far.</p>
    <table class="prov"><tbody>${i}</tbody></table>
    ${s?`<p class="tile-meta">Nothing on this page observes
      ${s.fromRsun.toFixed(1)}–${s.toRsun.toFixed(1)} R☉. MLSO's K-Cor covers
      exactly that band (1.05–3 R☉) but is ground-based — no CORS,
      weather-dependent, and the observatory reopened only this year — so it is a
      mirror candidate, not a layer.</p>`:""}`}function S7(n){const e=n.corona;if(!e)return"";const t=e.frames[e.newestGood],i=n.coronaPlane,s=Math.round((Date.now()-Date.parse(t.time))/6e4),r=i?`Drawn on a plane through the Sun, perpendicular to the line it was photographed
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
      <div class="sun-slot" id="corona-slot" data-frame="${ie(t.url)}"
           data-alt="${ie(e.instrument)} coronagraph image at ${Ge(t.time)} UTC"></div>
      <div class="sun-stamp"><span>${Ge(t.time)} UTC</span><span>${s} min ago</span></div>
    </div>
    <p><span class="badge badge-e">E</span> ${ie(e.instrument)}.
      ${ie(e.describes)}</p>
    <p class="tile-meta">${r}</p>`}function w7(n,e){if(n.id==="kp"&&e.kpSeries)return Nn(e.kpSeries,{band:[0,4],unit:"Kp",format:i=>i.toFixed(2),label:"Kp history, quiet band shaded"});if(n.id==="dst"&&e.dstSeries)return Nn(e.dstSeries,{unit:"nT",format:i=>i.toFixed(0),rule:0,band:[-30,0],extremes:!0});if(n.id==="geosync"&&e.geosyncSeries)return Nn(e.geosyncSeries,{unit:"nT",format:i=>i.toFixed(0),label:"total field at geostationary orbit"});if(n.id==="protons"&&e.protonSeries)return Nn(e.protonSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(2),label:"proton flux above 10 MeV, logarithmic"});if(n.id==="electrons"&&e.electronSeries)return Nn(e.electronSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(0),label:"electron flux above 2 MeV, logarithmic"});if(n.id==="xray"&&e.xraySeries)return Nn(e.xraySeries,{log:!0,unit:"W/m²",format:i=>i.toExponential(1),label:"X-ray flux history, log scale"});if(!n.series||!e.series)return"";const t=n.series;return Nn({time:e.series.data.time,value:e.series.data[t]},{rule:t==="bz_gsm"?0:null,unit:n.unit,format:i=>t==="speed"?i.toFixed(0):i.toFixed(1),label:`${n.id} history`})}function Vu(n){const e=gi(n);if(!e)return"";const t=i=>{const s=gi(i);return s?`<li><button type="button" class="subject-link" data-subject="${ie(s.id)}">
          <span class="badge badge-${s.tier.toLowerCase()}">${s.tier}</span>
          ${ie(s.label)}</button> — ${ie(s.oneLine)}</li>`:""};return`
    <h3>What it means</h3>
    <p>${ie(e.meaning)}</p>
    <h3>How it is made</h3>
    <p>${ie(e.howMade)}</p>
    ${e.keyedTo?`<p class="fine">Ambient, but not arbitrary: ${ie(e.keyedTo)}.</p>`:""}
    <h3>What it does not say</h3>
    <p>${ie(e.limits)}</p>
    ${e.toPromote?`<p class="fine"><strong>What would sharpen it:</strong>
      ${ie(e.toPromote)}</p>`:""}
    ${e.sources.length?`<h3>Cited</h3><ul class="fine">${e.sources.map(i=>`<li>${i.url?`<a href="${i.url}" rel="noreferrer noopener" target="_blank">${ie(i.name)}</a>`:ie(i.name)}${i.ref?` — ${ie(i.ref)}`:""}</li>`).join("")}</ul>`:""}
    ${e.related.length?`<h3>Related</h3><ul class="subject-links">${e.related.map(t).join("")}</ul>`:""}`}function E7(n){const e=gi(n);return e?`
    <h2>${ie(e.label)}</h2>
    <p class="tile-meta"><span class="badge badge-${e.tier.toLowerCase()}">${e.tier}</span>
      ${ie(Np[e.tier])}</p>
    <p>${ie(e.oneLine)}</p>
    ${Vu(n)}`:"<p>Nothing here explains that yet.</p>"}const du="body:";function T7(n,e){const t=Up(n,e),i=(s,r)=>`<tr><td>${s}</td><td class="num">${r}</td></tr>`;return`
    <h2>${ie(t.name)}</h2>
    <table class="prov"><tbody>
      ${t.auFromSun!==null?i("From the Sun",gl(t.auFromSun)):""}
      ${t.auFromEarth!==null?i("From Earth",gl(t.auFromEarth)):""}
      ${t.lightSeconds!==null?i("Light travel time",Fp(t.lightSeconds)):""}
      ${i("Radius",`${t.radiusKm.toLocaleString("en-US")} km`)}
      ${t.arcsecFromEarth!==null?i("Apparent diameter",`${t.arcsecFromEarth.toFixed(1)}″`):""}
    </tbody></table>
    <p class="tile-meta"><span class="badge badge-d">D</span> Positions and distances from
    astronomy-engine at ${Ge(e.toISOString())} UTC — computed, not tabulated, so they
    move with the scene.</p>
    ${Vu(Yy(n))}`}function A7(n,e,t){if(n.startsWith(du))return T7(n.slice(du.length),t);const i=pl.find(h=>h.id===n);if(!i)return E7(n);const s=e.now,r=s?.data??null,a=s?.parts?.[i.part],o=or(a,t),l=Cl(a),c=i.value(r);return`
    <h2>${ie(i.label)}</h2>
    <p class="tile-value" style="font-size:1.9rem">
      <span>${ie(c)}</span><span class="tile-unit">${ie(i.unit)}</span>
    </p>
    <p class="tile-meta"><span class="badge badge-${l.toLowerCase()}">${l}</span>
      ${ie(o.label)}</p>
    ${w7(i,e)}
    <h3>Provenance</h3>
    ${a?`<table class="prov"><tbody>
      <tr><td>Tier</td><td>${ie(Bu(a))}</td></tr>
      <tr><td>Source</td><td><a href="${a.source_url}" rel="noreferrer noopener" target="_blank">${ie(a.source)}</a></td></tr>
      <tr><td>Data time</td><td class="num">${a.data_time?`${Ge(a.data_time)} UTC`:Lt}</td></tr>
      <tr><td>Latency</td><td class="num">${a.latency_s===null?Lt:`${a.latency_s}s`}</td></tr>
      <tr><td>Stale after</td><td class="num">${Math.round(a.stale_after_s/60)} min</td></tr>
      ${a.mirrored?`<tr><td>Transport</td><td class="warn">Earth Star mirror (stage B) —
        NOAA was unreachable; these are its bytes and its timestamps, copied</td></tr>`:""}
      ${a.error?`<tr><td>Error</td><td class="err">${ie(a.error)}</td></tr>`:""}
    </tbody></table>`:"<p>No provenance recorded.</p>"}
    ${Vu(i.subject)}`}const R7={E:"measured",D:"modelled",M:"ambient"};function C7(n,e,t,i,s){const r=Cl(i),a=or(i,s),o=i?.data_time?`${Ge(i.data_time)} UTC`:"no time",l=i?.data_time?bn((s.getTime()-Date.parse(i.data_time))/1e3):"",c=a.state==="stale"?" — **stale**":"";return`| ${n} | ${e}${t?` ${t}`:""} | ${R7[r]??r} | ${o}${l?`, ${l} old`:""}${c} |`}function P7(n){const{state:e,narration:t,checks:i,forecast:s}=n,r=n.now??new Date,a=e.now,o=`${r.toISOString().slice(0,16).replace("T"," ")} UTC`,l=[];if(l.push(`# Space weather — ${o}`),l.push(""),l.push("_From The Viewer (Earth Star). Every value below carries the time it was observed and how it was arrived at. Values age; this briefing does not._"),l.push(""),!a)return l.push("No data had loaded when this briefing was taken."),l.join(`
`);l.push("## Now"),l.push(""),l.push("| Quantity | Value | Evidence | Observed |"),l.push("|---|---|---|---|");for(const u of pl)l.push(C7(u.label,u.value(a.data),u.unit,a.parts[u.part],r));if(l.push(""),t.length>0){l.push("## Situation"),l.push("");for(const u of t)l.push(`${u}
`)}const c=s?.enlil;(c?.peakSpeed||c?.cloudArrival)&&(l.push("## Ahead"),l.push(""),c.peakSpeed?.speed!=null&&l.push(`- WSA-Enlil peaks at **${c.peakSpeed.speed.toFixed(0)} km/s** at ${Ge(c.peakSpeed.time)} UTC on ${new Date(c.peakSpeed.time).toUTCString().slice(0,11)} (modelled).`),l.push(c.cloudArrival?`- Its CME tracer crosses ${jr} at **${Ge(c.cloudArrival.time)} UTC** on ${new Date(c.cloudArrival.time).toUTCString().slice(0,11)} — the model's arrival for the ejection in flight.`:"- No ejecta reach Earth inside the model’s window."),l.push(""));const h=a.data.alerts??[];if(h.length>0){l.push("## NOAA alerts"),l.push("");for(const u of h.slice(0,6))l.push(`- ${Ge(u.issued)} UTC — ${u.headline||u.product}`);l.push("")}if(i){const u=i.rows.length-i.inconclusive;l.push("## Checks"),l.push(""),l.push(`${i.passed} of ${u} cross-checks pass${i.inconclusive>0?`; ${i.inconclusive} could not be settled on today's data`:""}, last run ${Ge(i.ranAt)} UTC.`),l.push("");for(const d of i.rows){const f=d.inconclusive?"no signal":d.ok?"pass":"DRIFT";l.push(`- **${d.name}** — ${f}: ${d.ours} vs ${d.theirs}`)}l.push("")}l.push("## Sources"),l.push("");for(const[u,d]of Object.entries(a.parts))l.push(`- \`${u}\` — ${d.source}${d.model?` (${d.model.name})`:""}: ${d.source_url}`);return l.push(""),l.push("---"),l.push(""),l.push("Evidence tiers: **measured** read from an instrument · **modelled** computed from measured inputs by a named model · **ambient** artwork, never a measurement."),l.push(""),n.origin&&l.push(`Taken ${o} from ${n.origin}`),l.join(`
`)}function D7(n=new Date){return`space-weather-${n.toISOString().slice(0,16).replace(/:/g,"").replace("T","-")}.md`}const Bf={alert:0,warning:1,watch:2,cancel:3,summary:4,other:5},Vf={alert:"now",warning:"expected",watch:"possible",cancel:"cancelled",summary:"ended",other:"notice"};class L7{constructor(e){this.cb=e,this.instrumentsEl=document.getElementById("instruments"),this.tickerEl=document.getElementById("ticker"),typeof ResizeObserver<"u"&&new ResizeObserver(()=>this.fitTicker()).observe(this.tickerEl),this.tabsEl=document.getElementById("tabs"),this.bodyEl=document.getElementById("margin-body"),this.bodyEl.addEventListener("click",this.onBodyClick),this.statusEl=document.getElementById("status"),this.perfEl=document.getElementById("perf"),this.headlineEl=document.getElementById("headline-alert"),this.copyEl=document.getElementById("brief-copy"),this.downloadEl=document.getElementById("brief-download"),this.copyEl.addEventListener("click",()=>{this.copyBriefing()}),this.loadSectionState(),this.bodyEl.addEventListener("toggle",this.onSectionToggle,!0),this.downloadEl.addEventListener("click",()=>this.downloadBriefing()),this.clockEl=document.getElementById("clock"),this.buildTiles(),this.buildTabs(),this.bindMargin()}cb;instrumentsEl;tickerEl;tickerExpanded=!1;fittingTicker=!1;tabsEl;bodyEl;statusEl;perfEl;headlineEl;copyEl;downloadEl;perfKey="";sparkKeys=new Map;sectionState=new Map;images=new Yx;clockEl;tiles=new Map;tab="report";detailId=null;checksRequested=!1;state=null;checks=null;checksRunning=!1;forecast=null;forecastLoading=!1;forecastRequested=!1;forecastError=null;cycle=null;cycleLoading=!1;cycleRequested=!1;cycleError=null;sun={loop:null,loopId:yr[0].id,frameIndex:0,playing:!1,loading:!0,preloaded:0,preloading:!1,error:null,retryAt:null,corona:null,coronaId:null,coronaLoading:!1,coronaError:null,coronaRetryAt:null,diskPlane:null,coronaPlane:null};narration={mode:"globe",view:"deck",reducedMotion:!1,shield:!0,fieldLines:{lines:0,points:0},aurora:!0,cmes:{shown:!0,count:0}};setNarration(e){this.narration=e}setChecks(e,t){this.checks=e,this.checksRunning=t,this.renderMargin()}setCycle(e,t,i=null){this.cycle=e,this.cycleLoading=t,this.cycleError=i,this.renderMargin()}setForecast(e,t,i=null){this.forecast=e,this.forecastLoading=t,this.forecastError=i,this.renderMargin()}setSunLoop(e,t,i=null){this.sun.loop=e,this.sun.loading=t,this.sun.error=t?null:i,this.sun.frameIndex=e?e.newestGood:0,this.sun.playing=!1,this.sun.preloaded=0,this.sun.preloading=!1,this.renderMargin()}setSunPreload(e,t){this.sun.preloaded=e,this.sun.preloading=t,this.tab==="sun"&&this.renderMargin()}setSunFrame(e){this.sun.frameIndex=e,this.tab==="sun"&&this.updateSunFrame()}setSunPlaying(e){this.sun.playing=e,this.tab==="sun"&&this.renderMargin()}setPlaneCalibration(e,t){const i=e==="disk"?"diskPlane":"coronaPlane",s=this.sun[i],r=s===t||!!s&&!!t&&s.rsun===t.rsun&&s.innerRsun===t.innerRsun&&s.centre.u===t.centre.u&&s.centre.v===t.centre.v;this.sun[i]=t,!r&&this.tab==="sun"&&this.renderMargin()}setCoronaLoop(e,t,i=null){this.sun.corona=e,this.sun.coronaLoading=t,this.sun.coronaError=t?null:i,this.renderMargin()}setSunRetry(e){this.sun.retryAt=e,this.sun.error&&this.tab==="sun"&&this.renderMargin()}setCoronaRetry(e){this.sun.coronaRetryAt=e,this.sun.coronaError&&this.tab==="sun"&&this.renderMargin()}get sunState(){return this.sun}get activeTab(){return this.tab}buildTiles(){this.instrumentsEl.innerHTML="";for(const i of pl){const s=document.createElement("button");s.className="tile",s.id=`tile-${i.id}`,s.type="button",s.innerHTML=`
        <span class="tile-label">${ie(i.label)}</span>
        <span class="tile-value"><span data-v>—</span><span class="tile-unit">${ie(i.unit)}</span></span>
        <span class="tile-spark" data-spark aria-hidden="true"></span>
        <span class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></span>`,s.addEventListener("click",()=>this.openDetail(i.id)),this.tiles.set(i.id,s),this.instrumentsEl.appendChild(s)}const e=document.createElement("div");e.className="tile",e.id="tile-scales",e.innerHTML=`
      <span class="tile-label">NOAA scales</span>
      <span class="scales-row" data-scales></span>
      <span class="tile-spark" aria-hidden="true"></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,this.tiles.set("scales",e),this.instrumentsEl.appendChild(e);const t=document.createElement("button");t.className="tile",t.id="tile-aurora",t.type="button",t.innerHTML=`
      <span class="tile-label">Aurora peak</span>
      <span class="tile-value"><span data-v>—</span><span class="tile-unit">%</span></span>
      <span class="tile-spark" aria-hidden="true"></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,t.addEventListener("click",()=>this.selectTab("report")),this.tiles.set("aurora",t),this.instrumentsEl.appendChild(t)}buildTabs(){this.tabsEl.innerHTML=oi.map(e=>`<button class="tab" role="tab" id="tab-${e.id}" data-tab="${e.id}"
        aria-controls="margin-body" aria-selected="${e.id===this.tab}"
        tabindex="${e.id===this.tab?"0":"-1"}">${e.label}</button>`).join(""),this.tabsEl.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");t&&this.selectTab(t.dataset.tab)}),this.tabsEl.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const i=oi.findIndex(a=>a.id===this.tab),s=i<0?0:i,r=e.key==="Home"?0:e.key==="End"?oi.length-1:e.key==="ArrowLeft"?(s-1+oi.length)%oi.length:(s+1)%oi.length;e.preventDefault(),this.selectTab(oi[r].id),this.tabsEl.querySelector(`#tab-${oi[r].id}`)?.focus()})}bindMargin(){this.bodyEl.addEventListener("click",e=>{const t=e.target,i=t.closest("[data-loop]");if(i){this.cb.onSelectLoop(i.dataset.loop);return}const s=t.closest("[data-corona]");if(s){this.cb.onSelectCorona?.(s.dataset.corona||null);return}if(t.closest("#sun-play")){this.cb.onToggleSunPlay();return}}),this.bodyEl.addEventListener("input",e=>{const t=e.target;t.id==="sun-scrub"&&this.cb.onScrubSun(Number(t.value))})}selectTab(e){this.tab=e,e!=="detail"&&(this.detailId=null);for(const i of this.tabsEl.querySelectorAll("[data-tab]")){const s=i.getAttribute("data-tab")===e;i.setAttribute("aria-selected",String(s)),i.setAttribute("tabindex",s?"0":"-1")}oi.some(i=>i.id===e)?(this.bodyEl.setAttribute("aria-labelledby",`tab-${e}`),this.bodyEl.removeAttribute("aria-label")):(this.bodyEl.removeAttribute("aria-labelledby"),this.bodyEl.setAttribute("aria-label","Detail"));for(const[,i]of this.tiles)i.removeAttribute("aria-current");e==="checks"&&!this.checksRequested&&(this.checksRequested=!0,this.cb.onRunChecks()),e==="sun"&&!this.cycleRequested&&(this.cycleRequested=!0,this.cb.onLoadCycle()),e==="forecast"&&!this.forecastRequested&&(this.forecastRequested=!0,this.cb.onLoadForecast()),this.renderMargin()}briefing(e=new Date){return this.state?P7({state:this.state,narration:i7(this.state.now,this.narration,e,this.state.aurora,this.state.cmes,this.state.spacecraft?.data??[],{snapshot:this.state.lanes.snapshot,aurora:this.state.lanes.aurora,cmes:this.state.lanes.cmes,nextAttempt:this.state.nextAttempt}),checks:this.checks,forecast:this.forecast,now:e,origin:`${location.origin}${location.pathname}`}):""}async copyBriefing(){const e=this.briefing();if(e)try{await navigator.clipboard.writeText(e),this.flash(this.copyEl,"Copied")}catch{this.flash(this.copyEl,"Blocked — use .md")}}downloadBriefing(){const e=this.briefing();if(!e)return;const t=URL.createObjectURL(new Blob([e],{type:"text/markdown"})),i=document.createElement("a");i.href=t,i.download=D7(),i.click(),URL.revokeObjectURL(t),this.flash(this.downloadEl,"Saved")}flash(e,t){const i=e.dataset.label??e.textContent??"";e.dataset.label=i,e.textContent=t,window.setTimeout(()=>{e.textContent=e.dataset.label??i},1600)}showBody(e){this.openDetail(du+e)}showSubject(e){this.openDetail(e)}openDetail(e){this.tab="detail",this.detailId=e;for(const t of this.tabsEl.querySelectorAll("[data-tab]"))t.setAttribute("aria-selected","false");for(const[t,i]of this.tiles)i.tagName==="BUTTON"&&i.setAttribute("aria-current",String(t===e));this.renderMargin(),this.bodyEl.focus()}onBodyClick=e=>{const i=e.target?.closest?.("[data-subject]")?.dataset?.subject;i&&this.openDetail(i)};render(e){this.state=e;const t=new Date,i=e.now,s=i?.data??null;this.clockEl.textContent=`${t.toISOString().slice(0,10)} ${Ge(t.toISOString())} UTC`;const r={loading:e.lanes.snapshot,error:null,nextAttempt:null};for(const x of pl){const y=this.tiles.get(x.id),E=i?.parts?.[x.part];let M=Kc({lane:r,received:!!e.now,meta:E,now:t});const A=M.state==="fresh"||M.state==="stale"?x.value(s):null;(M.state==="fresh"||M.state==="stale")&&A===Lt&&(M={state:"no-data",label:`no data · ${M.label}`,short:Lt,ageS:M.ageS}),y.setAttribute("data-state",M.state),y.querySelector("[data-v]").textContent=A!==null?A:M.state==="loading"?"…":M.state==="error"?"unavailable":Lt;const L=y.querySelector("[data-badge]"),b=Cl(E);L.textContent=b,L.className=`badge badge-${b.toLowerCase()}`;const S=M.state==="fresh"?x.detail?.(s)??"":"";y.querySelector("[data-time]").textContent=S||M.short;const P=A!==null?`${A} ${x.unit}`:M.state==="loading"?"loading":M.state==="error"?`unavailable (${M.label})`:"no data";y.setAttribute("title",`${x.label}: ${P} · ${M.label} · ${Bu(E)}`),y.setAttribute("aria-label",M.state==="fresh"||M.state==="stale"?`${x.label}: ${A} ${x.unit}, ${M.label}. Open detail.`:`${x.label}: ${M.state==="error"?`unavailable, ${M.label}`:M.state==="loading"?"loading":"no data"}. Open detail.`);const I=y.querySelector("[data-spark]"),F=M.state==="fresh"||M.state==="stale"?gy(x.id,e):null,z=F?`${F.series.time[F.series.time.length-1]??""}:${F.series.value.length}`:"";z!==this.sparkKeys.get(x.id)&&(this.sparkKeys.set(x.id,z),I.innerHTML=F?cs(F.series,{...F.opts,width:108,height:17,label:`${x.label} trend`}):"")}const a=this.tiles.get("scales"),o=a.querySelector("[data-scales]"),l=s?.scales,c=Kc({lane:r,received:!!e.now,meta:i?.parts?.scales,now:t});o.innerHTML=l?["R","S","G"].map(x=>{const y=l[x].scale??null;return`<span class="scale-chip scale-${y??"na"}" title="${x} — ${ie(l[x].text??"no data")}">${x}${y??"–"}</span>`}).join(""):c.state==="loading"?'<span class="tile-loading-dots">…</span>':Lt,a.querySelector("[data-time]").textContent=c.short,a.setAttribute("title",`NOAA scales · ${c.label}`),a.setAttribute("data-state",c.state);const h=this.tiles.get("aurora"),u=e.aurora,d=u?{tier:"modeled",source:u.source,source_url:u.source_url,model:u.model,data_time:u.data?.observation_time??null,latency_s:u.latency_s,stale_after_s:u.stale_after_s,...e.laneErrors.aurora?{error:e.laneErrors.aurora}:{}}:void 0,f=Kc({lane:{loading:e.lanes.aurora,error:e.laneErrors.aurora,nextAttempt:e.nextAttempt},received:!!u?.data,meta:d,now:t});h.querySelector("[data-v]").textContent=u?.data?String(u.data.max_probability):f.state==="loading"?"…":f.state==="error"?"unavailable":Lt,h.querySelector("[data-time]").textContent=u?.data?`valid ${Ge(u.data.forecast_time)}`:f.short,h.setAttribute("data-state",f.state),h.setAttribute("title",`Aurora peak · ${f.label}`),h.setAttribute("aria-label",u?.data?`Aurora peak: ${u.data.max_probability} percent, ${f.label}. Open report.`:`Aurora peak: ${f.state==="loading"?"loading":f.state==="error"?`unavailable, ${f.label}`:"no data"}. Open report.`),this.setToggleState("aurora-toggle",f.state),this.setToggleState("cme-toggle",e.lanes.cmes&&e.cmes.length===0?"loading":e.laneErrors.cmes?"error":e.cmes.length===0?"no-data":"fresh"),this.setToggleState("wind-toggle",r.loading?"loading":s?.solar_wind?"fresh":i?.parts?.solar_wind?.error??e.lastError?"error":"no-data");const g=[...s?.alerts??[]].sort((x,y)=>(Bf[x.level]??9)-(Bf[y.level]??9)||Date.parse(y.issued)-Date.parse(x.issued)),_=g[0];this.headlineEl.hidden=!_,_&&(this.headlineEl.className=`headline-alert level-${_.level}`,this.headlineEl.innerHTML=`<span class="alert-level">${ie(Vf[_.level]??"notice")}</span><span class="alert-text">${ie(_.text||_.product)}</span><span class="alert-time">${Ge(_.issued)} UTC</span>`,this.headlineEl.title=_.message.slice(0,400)),this.tickerEl.innerHTML='<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';const m=this.tickerEl.querySelector("[data-t]");m.innerHTML=g.length?g.slice(0,6).map(x=>`<span class="ticker-item level-${x.level}" title="${ie(x.message.slice(0,400))}"><span class="alert-level">${ie(Vf[x.level]??"notice")}</span><span class="alert-text">${ie(x.text||x.product)}</span><span class="alert-time">${Ge(x.issued)}</span></span>`).join(""):`<span class="ticker-item level-none"><span class="alert-text">${s?"No watches, warnings or alerts outstanding.":e.lanes.snapshot?"Loading NOAA notices…":Lt}</span></span>`,this.fitTicker();const p=i?Object.values(i.parts).some(x=>x.mirrored):!1,v=i?Object.values(i.parts).some(x=>x.data_time):!1;this.statusEl.classList.toggle("is-error",!!e.lastError),this.statusEl.classList.toggle("is-mirror",!e.lastError&&p),this.statusEl.classList.toggle("is-degraded",!e.lastError&&!!i&&!v&&!p),e.lastError?this.statusEl.textContent=`Last refresh failed (${e.lastError}) at ${Ge(e.lastAttempt)} UTC. Showing last good data, ageing.`:i&&p?this.statusEl.textContent=`NOAA SWPC unreachable · reading Earth Star's mirror (stage B), captured ${Ge(i.fetched_at)} UTC · every value keeps NOAA's own timestamp`:i&&!v?this.statusEl.textContent=`NOAA SWPC unreachable — nothing has loaded yet. Retrying${e.nextAttempt?` at ${Ge(e.nextAttempt)} UTC`:""}.`:i?this.statusEl.textContent=`Live · NOAA SWPC · refreshed ${Ge(i.fetched_at)} UTC · DirectSource (stage A)`:this.statusEl.textContent="Fetching live data from NOAA SWPC…",this.renderMargin()}earthLights=!1;earthCoast=!1;setEarthLights(e){this.earthLights=e}setEarthCoast(e){this.earthCoast=e}setToggleState(e,t){document.getElementById(e)?.setAttribute("data-state",t)}setStats(e){const t=e.pixelRatio<e.maxPixelRatio,i=t?`${e.pixelRatio}/${e.maxPixelRatio}/${Math.round(e.fps)}`:"";i!==this.perfKey&&(this.perfKey=i,this.perfEl.hidden=!t,t&&(this.perfEl.textContent=`Rendering at ${e.pixelRatio}x rather than ${e.maxPixelRatio}x (${e.megapixels.toFixed(1)} MP) to hold the frame rate — ${Math.round(e.fps)} fps. Geometry and data are unaffected.`))}SECTION_KEY="viewer.sections";loadSectionState(){try{const e=localStorage.getItem(this.SECTION_KEY);if(!e)return;const t=JSON.parse(e);for(const[i,s]of Object.entries(t))this.sectionState.set(i,!!s)}catch{}}onSectionToggle=e=>{const t=e.target,i=t.dataset?.sect;if(i){this.sectionState.set(i,t.open);try{localStorage.setItem(this.SECTION_KEY,JSON.stringify(Object.fromEntries(this.sectionState)))}catch{}}};remembered=e=>this.sectionState.get(e);renderMargin(){const e=this.state;if(!e)return;const t=new Date;switch(this.tab){case"report":this.bodyEl.innerHTML=a7(e,this.narration,t,this.remembered);break;case"forecast":this.bodyEl.innerHTML=c7(this.forecast,this.forecastLoading,e?.cmes??[],this.remembered,this.forecastError);break;case"sun":this.bodyEl.innerHTML=x7(this.sun,yr,this.cycle,this.cycleLoading,this.cycleError),this.placeSunFrame();break;case"sources":this.bodyEl.innerHTML=p7(e,this.checks,this.remembered,{surface:this.narration.earthSurface??"vector",lights:this.earthLights,coast:this.earthCoast});break;case"checks":this.bodyEl.innerHTML=g7(this.checks,this.checksRunning);break;case"detail":this.bodyEl.innerHTML=this.detailId?A7(this.detailId,e,t):"";break}}fillSlot(e,t){const i=document.getElementById(e),s=i?.dataset.frame;if(!i||!s)return;const r=this.images.acquire(s);r.alt=i.dataset.alt??"",r.className="sun-img",r.parentElement!==i&&i.replaceChildren(r),r.complete&&r.naturalWidth>0?t(r):r.addEventListener("load",()=>t(r),{once:!0})}placeSunFrame(){this.fillSlot("sun-slot",t=>this.cb.onSunFrame?.(t)),this.fillSlot("corona-slot",t=>this.cb.onCoronaFrame?.(t));const e=this.sun.loop?.frames;if(e){const t=this.sun.frameIndex;this.images.warm([e[(t+1)%e.length].url,e[(t+2)%e.length].url])}}updateSunFrame(){const e=document.getElementById("sun-slot"),t=this.sun.loop?.frames[this.sun.frameIndex];if(!e||!t){this.renderMargin();return}e.dataset.frame=t.url,this.placeSunFrame();const i=this.bodyEl.querySelector(".sun-stamp");if(i){const r=Math.round((Date.now()-Date.parse(t.time))/6e4);i.innerHTML=`<span>${Ge(t.time)} UTC</span><span>${r} min ago</span>`}const s=document.getElementById("sun-scrub");s&&document.activeElement!==s&&(s.value=String(this.sun.frameIndex))}fitTicker(){if(!this.fittingTicker){this.fittingTicker=!0;try{const e=this.tickerEl,t=e.querySelector("[data-t]");if(!t)return;const i=[...t.querySelectorAll(".ticker-item")];for(const a of i)a.hidden=!1;if(e.querySelector(".ticker-more")?.remove(),e.classList.toggle("is-expanded",this.tickerExpanded),this.tickerExpanded){i.length>1&&t.append(this.tickerMoreButton("show fewer",!0));return}if(e.scrollHeight<=e.clientHeight+1)return;const s=this.tickerMoreButton("",!1);t.append(s);let r=0;for(let a=i.length-1;a>=1&&(i[a].hidden=!0,r++,s.textContent=`+${r} more`,!(e.scrollHeight<=e.clientHeight+1));a--);s.textContent=`+${r} more`}finally{this.fittingTicker=!1}}}tickerMoreButton(e,t){const i=document.createElement("button");return i.className="ticker-more",i.type="button",i.textContent=e,i.setAttribute("aria-expanded",String(t)),i.addEventListener("click",()=>{this.tickerExpanded=!this.tickerExpanded,this.fitTicker()}),i}}class I7{constructor(e,t=6e4,i=5*6e4){this.source=e,this.intervalMs=t,this.auroraIntervalMs=i}source;intervalMs;auroraIntervalMs;state={now:null,series:null,kpSeries:null,xraySeries:null,protonSeries:null,electronSeries:null,geosyncSeries:null,dstSeries:null,aurora:null,regions:null,spacecraft:null,cmes:[],lastAttempt:null,lastError:null,loading:!0,lanes:{snapshot:!0,aurora:!0,regions:!0,cmes:!0,spacecraft:!0},laneErrors:{aurora:null,regions:null,cmes:null,spacecraft:null},nextAttempt:null};listeners=new Set;timer=null;inflight=null;auroraTimer=null;get(){return this.state}subscribe(e){return this.listeners.add(e),e(this.state),()=>this.listeners.delete(e)}emit(e){this.state={...this.state,...e};for(const t of this.listeners)t(this.state)}nextAttemptIso(){return new Date(Date.now()+this.intervalMs).toISOString()}async refresh(){this.inflight?.abort();const e=new AbortController;this.inflight=e,this.emit({loading:!0,lanes:{...this.state.lanes,snapshot:!0}});try{const{now:t,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,dstSeries:c}=await this.source.fetchSnapshot(e.signal);this.emit({now:t,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,geosyncSeries:l,dstSeries:c,lastAttempt:new Date().toISOString(),lastError:null,loading:!1,lanes:{...this.state.lanes,snapshot:!1},nextAttempt:this.nextAttemptIso()})}catch(t){if(e.signal.aborted)return;this.emit({lastAttempt:new Date().toISOString(),lastError:t instanceof Error?t.message:String(t),loading:!1,lanes:{...this.state.lanes,snapshot:!1},nextAttempt:this.nextAttemptIso()})}finally{this.inflight===e&&(this.inflight=null)}}async slow(e,t,i){this.emit({lanes:{...this.state.lanes,[e]:!0}});try{const s=await i(),r={lanes:{...this.state.lanes,[e]:!1},laneErrors:{...this.state.laneErrors,[e]:null}};r[t]=s,this.emit(r)}catch(s){this.emit({lanes:{...this.state.lanes,[e]:!1},laneErrors:{...this.state.laneErrors,[e]:s instanceof Error?s.message:String(s)}})}}async refreshAurora(){await this.slow("aurora","aurora",()=>this.source.fetchAurora()),await this.slow("regions","regions",()=>this.source.fetchRegions()),await this.slow("cmes","cmes",async()=>await zx()),await this.slow("spacecraft","spacecraft",()=>this.source.fetchEphemerides())}lane(e){return e==="snapshot"?{loading:this.state.lanes.snapshot,error:this.state.lastError,nextAttempt:this.state.nextAttempt}:{loading:this.state.lanes[e],error:this.state.laneErrors[e],nextAttempt:this.state.nextAttempt}}start(){this.timer===null&&(this.refresh(),this.refreshAurora(),this.timer=window.setInterval(()=>{this.refresh()},this.intervalMs),this.auroraTimer=window.setInterval(()=>{this.refreshAurora()},this.auroraIntervalMs),document.addEventListener("visibilitychange",this.onVisible))}stop(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.auroraTimer!==null&&(clearInterval(this.auroraTimer),this.auroraTimer=null),document.removeEventListener("visibilitychange",this.onVisible),this.inflight?.abort()}onVisible=()=>{document.visibilityState==="visible"&&(this.refresh(),this.refreshAurora())}}const eh={protons:`${vt}/json/goes/primary/integral-protons-6-hour.json`,electrons:`${vt}/json/goes/primary/integral-electrons-6-hour.json`},N7=[[5,1e5,"Extreme"],[4,1e4,"Severe"],[3,1e3,"Strong"],[2,100,"Moderate"],[1,10,"Minor"]];function U7(n){if(n===null||!Number.isFinite(n))return null;for(const[e,t,i]of N7)if(n>=t)return{scale:e,text:i};return{scale:0,text:"None"}}function th(n,e){if(!Array.isArray(n))return null;let t=null,i=-1/0;for(const s of n){if(String(s.energy)!==e)continue;const r=Date.parse(_t(s.time_tag)??"");Number.isFinite(r)&&r>i&&(i=r,t=s)}return t}function Hf(n,e){if(!Array.isArray(n))return{time:[],value:[]};const t=n.filter(i=>String(i.energy)===e).map(i=>({t:_t(i.time_tag),v:Fe(i.flux)})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:t.map(i=>i.t),value:t.map(i=>i.v)}}function F7(n,e){const t=th(n,">=10 MeV"),i=th(n,">=100 MeV"),s=th(e,">=2 MeV");if(!t&&!s)return null;const r=[t,s].map(l=>_t(l?.time_tag)).filter(l=>!!l);if(r.length===0)return null;const a=r.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),o=Fe(t?.flux);return{time:a,proton10:o,proton100:Fe(i?.flux),electron2:Fe(s?.flux),satellite:Fe(t?.satellite??s?.satellite),s:U7(o)}}const nh=`${vt}/products/geospace/propagated-solar-wind-1-hour.json`;function O7(n,e=new Date){if(!Array.isArray(n)||n.length<2)return null;const t=n[0];if(!Array.isArray(t))return null;const i=m=>t.indexOf(m),s=i("time_tag"),r=i("propagated_time_tag");if(s<0||r<0)return null;const a=i("speed"),o=i("density"),l=i("temperature"),c=i("bz"),h=i("bt"),u=[];for(let m=1;m<n.length;m++){const p=n[m];if(!Array.isArray(p))continue;const v=_t(p[s]),x=_t(p[r]);!v||!x||u.push({observedAt:v,arrivesAt:x,speed:Fe(p[a]),density:Fe(p[o]),temperature:Fe(p[l]),bz:Fe(p[c]),bt:Fe(p[h])})}if(u.length===0)return null;u.sort((m,p)=>Date.parse(m.arrivesAt)-Date.parse(p.arrivesAt));const d=e.getTime();let f=null;for(const m of u)Date.parse(m.arrivesAt)<=d&&(f=m);f??=u[0];const g=u[u.length-1],_=(Date.parse(g.arrivesAt)-d)/6e4;return{samples:u,arrivingNow:f,leadMinutes:Number.isFinite(_)?_:null}}const fu=`${vt}/json/geospace/geospace_dst_1_hour.json`;function Gf(n){return n===null||!Number.isFinite(n)?null:n>-30?"quiet":n>-50?"weak":n>-100?"moderate":n>-200?"intense":n>-350?"severe":"great"}const k7={quiet:"quiet",weak:"weak storm",moderate:"moderate storm",intense:"intense storm",severe:"severe storm",great:"great storm"};function zp(n){if(!Array.isArray(n))return[];const e=[];for(const t of n){const i=_t(typeof t.time_tag=="string"?t.time_tag:null),s=Fe(t.dst);i===null||s===null||e.push({time:i,dst:s})}return e.sort((t,i)=>t.time.localeCompare(i.time)),e}function Bp(n,e=new Date){const t=zp(n);if(t.length===0)return{now:null,ahead:[],minimum:null};const i=e.getTime();let s=null;const r=[];for(const o of t)Date.parse(o.time)<=i?s=o:r.push(o);const a=t.reduce((o,l)=>o===null||l.dst<o.dst?l:o,null);return{now:s,ahead:r,minimum:a}}function z7(n,e=new Date){const t=e.getTime(),i=zp(n).filter(s=>Date.parse(s.time)<=t);return{time:i.map(s=>s.time),value:i.map(s=>s.dst)}}const $f=`${vt}/json/goes/primary/magnetometers-6-hour.json`,pu=6.6;function Vp(n){const e=hl[dn(1,0)],t=hl[dn(1,1)],i=np[dn(1,1)];return Math.sqrt(e*e+t*t+i*i)/(n*n*n)}function B7(n){if(!Array.isArray(n))return null;let e=null,t=-1/0;for(const s of n){const r=Date.parse(_t(s.time_tag)??"");Number.isFinite(r)&&r>t&&(t=r,e=s)}const i=_t(e?.time_tag);return!e||!i?null:{time:i,satellite:Fe(e.satellite),hp:Fe(e.Hp),he:Fe(e.He),hn:Fe(e.Hn),total:Fe(e.total),arcjet:e.arcjet_flag===!0}}function V7(n,e="total"){if(!Array.isArray(n))return{time:[],value:[]};const t=n.map(i=>({t:_t(i.time_tag),v:Fe(i[e])})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:t.map(i=>i.t),value:t.map(i=>i.v)}}const nn="NOAA SWPC",Yt={solar_wind:1200,kp:1200,xray:1200,scales:360*60,alerts:10080*60,magnetopause:1200,particles:1800,propagated:1800,geosync:1800,dst:1200,aurora:3600,regions:2160*60,spacecraft:10800};function as(n,e){if(!e)return null;const t=(Date.parse(n)-Date.parse(e))/1e3;return Number.isFinite(t)?Math.round(t):null}function qn(n,e,t,i,s,r,a="measured",o=null){return{tier:a,source:i,source_url:s,model:o,data_time:e,latency_s:as(n,e),stale_after_s:t,...r?{error:r}:{},...wy(s)?{mirrored:!0}:{}}}class Hp{name="DirectSource (stage A · browser → NOAA SWPC)";async fetchNow(e){return(await this.fetchSnapshot(e)).now}async fetchSnapshot(e){const[t,i,s,r,a,o,l,c,h,u,d]=await Promise.all([Ot(bt.mag,e),Ot(bt.wind,e),Ot(bt.kp1m,e),Ot(bt.xrays6h,e),Ot(bt.scales,e),Ot(bt.alerts,e),Ot(eh.protons,e),Ot(eh.electrons,e),Ot(nh,e),Ot($f,e),Ot(fu,e)]),f=new Date().toISOString(),g=t.json||i.json?iy(t.json,i.json):null,_=s.json?sy(s.json):null,m=r.json?ay(r.json):null,p=a.json?oy(a.json):null,v=o.json?ly(o.json):[],x=l.json||c.json?F7(l.json,c.json):null,y=h.json?O7(h.json):null,E=u.json?B7(u.json):null,M=d.json?Bp(d.json,new Date(f)):null,A=y?.arrivingNow??null,L=Rl(A?.bz??g?.bz_gsm??null,A?.density??g?.density??null,A?.speed??g?.speed??null),b=t.error??i.error,S={solar_wind:qn(f,g?.time??null,Yt.solar_wind,`${nn} · real-time solar wind (L1)`,bt.mag,b),kp:qn(f,_?.time??null,Yt.kp,`${nn} · planetary K (estimated)`,bt.kp1m,s.error),xray:qn(f,m?.time??null,Yt.xray,`${nn} · GOES XRS (0.1–0.8 nm)`,bt.xrays6h,r.error),scales:qn(f,p?.time??null,Yt.scales,`${nn} · NOAA scales`,bt.scales,a.error,"modeled",{name:"NOAA G/S/R scales"}),alerts:qn(f,v[0]?.issued??null,Yt.alerts,`${nn} · alerts, watches & warnings`,bt.alerts,o.error),magnetopause:qn(f,A?.arrivesAt??g?.time??null,Yt.magnetopause,A?"Earth Star (from SWPC wind propagated to Earth)":"Earth Star (from SWPC solar wind at L1)",A?nh:bt.mag,b,"modeled",{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}),particles:qn(f,x?.time??null,Yt.particles,`${nn} · GOES particle detectors`,eh.protons,l.error??c.error),geosync:qn(f,E?.time??null,Yt.geosync,`${nn} · GOES magnetometer at geostationary orbit`,$f,u.error),propagated:qn(f,A?.arrivesAt??null,Yt.propagated,`${nn} · solar wind propagated to the bow shock nose`,nh,h.error,"modeled",{name:"NOAA SWPC propagation"}),dst:qn(f,M?.now?.time??null,Yt.dst,`${nn} · Dst from the Geospace model`,fu,d.error,"modeled",{name:"NOAA Geospace (Univ. Michigan BATS-R-US/RCM)"})},P=M?.ahead[M.ahead.length-1]??null,I={solar_wind:g,kp:_,xray:m,scales:p,alerts:v,dst:M?.now?{time:M.now.time,value_nt:M.now.dst,level:Gf(M.now.dst)===null?null:k7[Gf(M.now.dst)],lead_minutes:P===null?null:Math.round((Date.parse(P.time)-Date.parse(M.now.time))/6e4),min_nt:M.minimum?.dst??null,min_time:M.minimum?.time??null}:null,geosync:E?{time:E.time,satellite:E.satellite,hp_nt:E.hp,total_nt:E.total,deficit_nt:E.total===null?null:Vp(pu)-E.total,arcjet:E.arcjet}:null,particles:x?{time:x.time,proton_10mev:x.proton10,proton_100mev:x.proton100,electron_2mev:x.electron2,satellite:x.satellite,s_scale:x.s?.scale??null,s_text:x.s?.text??null}:null,propagated:A?{observed_at:A.observedAt,arrives_at:A.arrivesAt,speed:A.speed,density:A.density,bz:A.bz,bt:A.bt,lead_minutes:y?.leadMinutes??null}:null,magnetopause:L?{standoff_re:L.r0Re,alpha:L.alpha,bow_shock_re:L.bowShockRe,dyn_pressure_npa:L.dynPressureNPa,model:"Shue1998"}:null},F=Object.values(S).map(ee=>ee.data_time).filter(ee=>!!ee).map(ee=>Date.parse(ee)).filter(Number.isFinite),z=F.length?new Date(Math.min(...F)).toISOString():f,W={source:nn,source_url:"https://services.swpc.noaa.gov/",tier:"mixed",model:null,fetched_at:f,data_time:z,latency_s:as(f,z)??0,stale_after_s:Yt.solar_wind,units:{bz_gsm:"nT",by_gsm:"nT",bx_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K",estimated_kp:"Kp",flux_long:"W/m^2",flux_short:"W/m^2",standoff_re:"Re",bow_shock_re:"Re",dyn_pressure_npa:"nPa",proton_10mev:"pfu",proton_100mev:"pfu",electron_2mev:"pfu",hp_nt:"nT",total_nt:"nT",deficit_nt:"nT"},data:I,parts:S},G=Df(t.json,i.json),Y=G.time[G.time.length-1]??f,k={source:`${nn} · real-time solar wind (L1)`,source_url:bt.mag,tier:"measured",model:null,fetched_at:f,data_time:Y,latency_s:as(f,Y)??0,stale_after_s:Yt.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:G};return{now:W,series:k,kpSeries:tr(uy(s.json),120),xraySeries:tr(dy(r.json),120),protonSeries:tr(Hf(l.json,">=10 MeV"),120),geosyncSeries:tr(V7(u.json,"total"),120),dstSeries:z7(d.json,new Date(f)),electronSeries:tr(Hf(c.json,">=2 MeV"),120)}}async fetchAurora(e){const t=await Ot(bt.aurora,e);if(!t.json)throw new Error(t.error??"unreachable");const i=new Date().toISOString(),s=cy(t.json),r=s?.observation_time??i;return{source:`${nn} · OVATION Prime aurora forecast`,source_url:bt.aurora,tier:"modeled",model:{name:"OVATION Prime (NOAA SWPC)"},fetched_at:i,data_time:r,latency_s:as(i,r)??0,stale_after_s:Yt.aurora,units:{values:"% probability of visible aurora"},data:s}}async fetchRegions(e){const t=await Ot(bt.regions,e);if(!t.json)throw new Error(t.error??"unreachable");const i=new Date().toISOString(),s=fy(t.json),r=s[0]?.observed??i;return{source:`${nn} · solar region summary`,source_url:bt.regions,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:as(i,r)??0,stale_after_s:Yt.regions,units:{lat:"deg",lon:"deg from central meridian",area:"millionths of hemisphere"},data:s}}async fetchEphemerides(e){const t=await Ot(uu,e);if(!t.json)throw new Error(t.error??"unreachable");const i=new Date().toISOString(),s=Lp(t.json),r=s.reduce((a,o)=>a===null||o.time>a?o.time:a,null)??i;return{source:`${nn} · RTSW ephemerides`,source_url:uu,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:as(i,r)??0,stale_after_s:Yt.spacecraft,units:{gse:"km",distanceRe:"Earth radii",offAxisDeg:"deg"},data:s}}async fetchSolarWindSeries(e){const[t,i]=await Promise.all([Ot(bt.mag,e),Ot(bt.wind,e)]),s=new Date().toISOString(),r=Df(t.json,i.json),a=r.time[r.time.length-1]??s;return{source:`${nn} · real-time solar wind (L1)`,source_url:bt.mag,tier:"measured",model:null,fetched_at:s,data_time:a,latency_s:as(s,a)??0,stale_after_s:Yt.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:r}}}class H7{mq=window.matchMedia("(prefers-reduced-motion: reduce)");listeners=new Set;override=null;constructor(){this.mq.addEventListener("change",()=>this.emit())}get reduced(){return this.override??this.mq.matches}setOverride(e){this.override=e,this.emit()}subscribe(e){return this.listeners.add(e),e(this.reduced),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e(this.reduced)}}const G7=[["1–5","Deck, Sunward, Profile, Overhead, System views"],["s","Toggle Globe / True scale"],["m","Toggle reduced motion"],["f","Toggle the magnetic shield"],["a","Toggle the aurora overlay"],["w","Toggle the solar wind stream"],["c","Toggle CME cones"],["r","Refresh data now"],["?","This help"]];function $7(n){const e=t=>{const i=t.target;if(!(t.metaKey||t.ctrlKey||t.altKey)&&!(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))){switch(t.key){case"1":case"2":case"3":case"4":case"5":n.view(Number(t.key)-1);break;case"s":case"S":n.toggleScale();break;case"m":case"M":n.toggleMotion();break;case"f":case"F":n.toggleShield();break;case"a":case"A":n.toggleAurora();break;case"w":case"W":n.toggleWind();break;case"c":case"C":n.toggleCmes();break;case"r":case"R":n.refresh();break;case"?":_i(G7.map(([s,r])=>`${s}: ${r}`).join(". "));break;default:return}t.preventDefault()}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}function _i(n){const e=document.getElementById("announce");e&&(e.textContent=n)}const W7=360/25.38;function X7(n,e,t,i){const s=n*Math.PI/180,r=e*Math.PI/180,a=i.clone().addScaledVector(t,-i.dot(t)).normalize(),o=new D().crossVectors(t,a);return new D().addScaledVector(a,Math.cos(s)*Math.cos(r)).addScaledVector(o,-Math.cos(s)*Math.sin(r)).addScaledVector(t,Math.sin(s))}function q7(n,e,t,i){const s=e.clone().addScaledVector(t,-e.dot(t)).normalize(),r=new D().crossVectors(s,t).normalize();return{u:i.centre.u+n.dot(r)*i.radius,v:i.centre.v+n.dot(s)*i.radius}}function j7(n,e,t,i,s,r,a){const o=-(a/24)*W7,l=(E,M)=>{const A=Math.round(E*e),L=Math.round((1-M)*e);if(A<1||L<1||A>=e-1||L>=e-1)return null;let b=0;for(let S=-1;S<=1;S++)for(let P=-1;P<=1;P++)b+=n[(L+S)*e+A+P];return b/9},c=E=>{let M=0,A=0;for(const L of t){const b=(L.lon+o)*(E?-1:1),S=X7(L.lat,b,i,s);if(S.dot(s)<.5)continue;const P=q7(S,i,s,r),I=l(P.u,P.v);I!==null&&(M+=I,A++)}return{sum:M,n:A}},h=c(!1),u=c(!0),d=h.n;if(d<2||u.n<2)return null;const f=h.sum;let g=0,_=0;const m=r.centre.u*e,p=(1-r.centre.v)*e,v=r.radius*e*.85;for(let E=Math.max(0,Math.floor(p-v));E<Math.min(e,Math.ceil(p+v));E++)for(let M=Math.max(0,Math.floor(m-v));M<Math.min(e,Math.ceil(m+v));M++)Math.hypot(M-m,E-p)>v||(g+=n[E*e+M],_++);if(_===0)return null;const x=f/d,y=g/_;return y<=0?null:{tested:d,atRegions:x,acrossDisk:y,ratio:x/y,mirroredRatio:u.sum/u.n/y}}const ns=async(n,e)=>(await fetch(n,{cache:"no-store",signal:e})).json();function Wf(n,e,t,i){const s=Math.PI/180,r=(i-e)*s,a=Math.sin(r)*Math.cos(t*s),o=Math.cos(n*s)*Math.sin(t*s)-Math.sin(n*s)*Math.cos(t*s)*Math.cos(r);return(Math.atan2(a,o)*180/Math.PI+360)%360}function $o(n,e,t){return n===null||e===null||!Number.isFinite(n)||!Number.isFinite(e)?!1:Math.abs(n-e)<=t}function K7(n,e){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d",{willReadFrequently:!0});if(!i)return null;try{i.drawImage(n,0,0,e,e);const s=i.getImageData(0,0,e,e).data,r=new Float32Array(e*e);for(let a=0;a<e*e;a++)r[a]=.299*s[a*4]+.587*s[a*4+1]+.114*s[a*4+2];return r}catch{return null}}async function Y7(n,e){const t=[],i=new Hp,[s,r,a,o,l,c,h,u,d]=await Promise.all([i.fetchNow(n),ns(bt.summaryMag,n),ns(bt.summarySpeed,n),ns(bt.xrayFlares,n),i.fetchSolarWindSeries(n),i.fetchAurora(n),ns(uu,n),ns(fu,n),Dp(n)]),f=s.data,g=r[0],_=a[0],m=(H,J)=>{const U=String(H??"").replace(" ","T").replace(/Z?$/,"Z"),se=Date.parse(U);if(!Number.isFinite(se))return null;const Me=l.data.time.indexOf(new Date(se).toISOString());return Me<0?null:l.data[J][Me]??null},p=Ge(String(g?.time_tag??""));t.push({name:"IMF Bz (GSM), nT",ours:m(g?.time_tag,"bz_gsm")?.toFixed(2)??"no data",theirs:String(g?.bz_gsm??"no data"),ok:$o(m(g?.time_tag,"bz_gsm"),Number(g?.bz_gsm),.55),note:`both at ${p} UTC · tol ±0.55 (their integer rounding)`}),t.push({name:"IMF total Bt, nT",ours:m(g?.time_tag,"bt")?.toFixed(2)??"no data",theirs:String(g?.bt??"no data"),ok:$o(m(g?.time_tag,"bt"),Number(g?.bt),.55),note:`both at ${p} UTC · tol ±0.55`}),t.push({name:"Solar wind speed, km/s",ours:m(_?.time_tag,"speed")?.toFixed(1)??"no data",theirs:String(_?.proton_speed??"no data"),ok:$o(m(_?.time_tag,"speed"),Number(_?.proton_speed),1.5),note:`both at ${Ge(String(_?.time_tag??""))} UTC · tol ±1.5`});const v=ry(o)?.class??"",x=f.xray?.class??Rp(f.xray?.flux_long??null);t.push({name:"X-ray class",ours:x??"no data",theirs:v||"no data",ok:!!x&&!!v&&x[0]===v[0]&&Math.abs(parseFloat(x.slice(1))-parseFloat(v.slice(1)))<=.35,note:`our thresholds on our parsed flux (${f.xray?.flux_long?f.xray.flux_long.toExponential(2):"—"} W/m²) vs SWPC's published label. This row caught current_int_xrlong being read as a flux.`});const y=await ns(bt.kp1m,n),E=f.kp?.time??null,M=E?y.find(H=>`${String(H.time_tag)}Z`===E.replace(".000Z","Z")||Date.parse(`${String(H.time_tag)}Z`)===Date.parse(E)):void 0;t.push({name:"Planetary Kp (estimated)",ours:f.kp?.estimated_kp?.toFixed(2)??"no data",theirs:M?String(M.estimated_kp):"minute not in feed",ok:!!M&&$o(f.kp?.estimated_kp??null,Number(M.estimated_kp),.001),note:`both at ${Ge(E)} UTC · exact match required. Checks our newest-record selection against the same minute upstream.`});const A=await ns(bt.mag,n),L=A.reduce((H,J)=>Date.parse(`${String(J.time_tag)}Z`)>Date.parse(`${String(H.time_tag)}Z`)?J:H,A[0]),b=[...new Set(A.filter(H=>H.active===!0).map(H=>String(H.source)))];t.push({name:"L1 spacecraft selected",ours:f.solar_wind?.spacecraft??"no data",theirs:b.join(", ")||"none flagged active",ok:!!f.solar_wind?.spacecraft&&b.includes(f.solar_wind.spacecraft),note:`the feed interleaves several spacecraft; newest of ANY source right now is "${String(L.source)}". Taking that instead is the bug this row guards.`});const S=f.geosync,P=f.magnetopause?.standoff_re??null;if(S&&S.total_nt!==null&&P!==null){const H=Vp(pu),J=P>pu,U=S.total_nt>H*.25;t.push({name:"Shield model vs GOES at 6.6 Rₑ",ours:`standoff ${P.toFixed(1)} Rₑ → ${J?"inside":"OUTSIDE"}`,theirs:`${S.total_nt.toFixed(0)} nT → ${U?"inside":"outside"}`,ok:J===U,note:`Dipole at 6.6 Rₑ is ${H.toFixed(0)} nT; GOES-${S.satellite??"?"} reads ${S.total_nt.toFixed(0)} nT, a deficit of ${(H-S.total_nt).toFixed(0)} nT from the ring and magnetopause currents. The check is the agreement of the two verdicts, not the numbers — Shue's boundary and this magnetometer are independent.${S.arcjet?" NOTE: thruster firing, reading suspect.":""}`})}if(c.data){const H=c.data.grid,J=op(new Date);let U=0,se=0,Me=0,fe=0;for(let R=0;R<H.width;R++)for(let Se=45;Se<=89;Se++){const pe=hy(H,Se,R);if(pe<=0)continue;const he=Se*Math.PI/180,ce=R*Math.PI/180;U+=pe*Math.cos(he)*Math.cos(ce),se+=pe*Math.cos(he)*Math.sin(ce),Me+=pe*Math.sin(he),fe+=pe}if(fe>0){const R=Math.sqrt(U*U+se*se+Me*Me),Se=Math.asin(Me/R)*180/Math.PI,pe=Math.atan2(se,U)*180/Math.PI,he=n8(Se,pe,J.lat,J.lon),ce=ol(new Date),Ye=(ce.lon+360)%360-180,xe=Wf(J.lat,J.lon,Se,pe),Ne=Wf(J.lat,J.lon,-ce.lat,Ye),Et=Math.abs((xe-Ne+540)%360-180);t.push({name:"Aurora oval displaced toward magnetic midnight",ours:`centroid bears ${xe.toFixed(0)}° from the pole`,theirs:`midnight bears ${Ne.toFixed(0)}°`,ok:Et<90&&he<25,note:`${Et.toFixed(0)}° apart in bearing — the nightside half — with the centroid ${he.toFixed(1)}° from the pole. NOAA's OVATION grid, our IGRF-14 dipole axis and the sub-solar point are three independent computations; a transposed or mirrored grid puts the oval on the dayside and fails here.`})}}else t.push({name:"Aurora oval displaced toward magnetic midnight",ours:"no data",theirs:"—",ok:!1,inconclusive:!0,note:"OVATION grid did not load, so orientation could not be checked. This is the check having no evidence, not the oval being in the wrong place."});const I=Lp(h),F=I.find(H=>H.active)?.source??null,z=f.solar_wind?.spacecraft??null,W=I.find(H=>H.active);t.push({name:"Operational L1 spacecraft",ours:z??"no data",theirs:F??"no data",ok:!!z&&z===F,note:W?`wind/mag feed vs ephemeris feed · ${W.distanceRe.toFixed(0)} Rₑ upstream, ${W.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line`:"wind/mag feed vs ephemeris feed"});const G=Bp(u,new Date),Y=G.now?.dst??null,k=f.kp?.estimated_kp??null;if(Y!==null&&k!==null){const H=Y<=-100?2:Y<=-30?1:0,J=k>=6?2:k>=4?1:0,U=Math.abs(H-J),se=["quiet","disturbed","severe"];t.push({name:"Modelled Dst vs measured Kp",ours:`Dst ${Y.toFixed(0)} nT → ${se[H]}`,theirs:`Kp ${k.toFixed(2)} → ${se[J]}`,ok:U===0,inconclusive:U===1,note:U>=2?"Two bands apart, which the difference between the indices cannot explain. A model driven by the L1 wind against a measurement from ground magnetometers; they share no input, so one of them is wrong.":U===1?`One band apart, which is what a storm beginning looks like: the ring current responds before the mid-latitude range does, so Dst crosses its threshold first. Not a contradiction, and not evidence of agreement either. ${G.ahead.length} of the Dst feed's samples lie in the future and are excluded from "now".`:`A model driven by the L1 wind against a measurement from ground magnetometers — they share no input. Bands are Dst −30 and −100 nT, Kp 4 and 6. ${G.ahead.length} of the feed's samples lie in the future and are excluded from "now".`})}const ee=f.propagated;if(d&&ee?.speed!=null&&ee.arrives_at){const H=Cy(d,new Date(ee.arrives_at));if(H?.speed!=null){const J=H.speed-ee.speed,U=J/ee.speed*100;t.push({name:"WSA-Enlil hindcast vs measured wind",ours:`measured ${ee.speed.toFixed(0)} km/s`,theirs:`Enlil ${H.speed.toFixed(0)} km/s`,ok:Math.abs(J)<=200,note:`${J>=0?"+":""}${J.toFixed(0)} km/s (${U.toFixed(0)}%) at ${Ge(ee.arrives_at)} UTC. Enlil is driven by solar magnetograms and CME cone fits and never sees L1, so this is a model against a measurement of the same quantity. The tolerance is ±200 km/s: it catches a misread column or a time misalignment, not ordinary forecast error.`})}}if(e){const J=K7(e.image,384),U=(await i.fetchRegions(n)).data,se=U[0]?.observed,Me=se?(Date.now()-Date.parse(se))/36e5:0,fe=J?j7(J,384,U,e.north,e.earthDir,e.calibration,Me):null;if(fe){const R=fe.mirroredRatio>0?fe.ratio/fe.mirroredRatio:0,Se=Math.abs(R-1)>=.06;t.push({name:"Solar imagery lines up with the region list",ours:`${fe.ratio.toFixed(2)}x disk mean at ${fe.tested} reported positions`,theirs:`${fe.mirroredRatio.toFixed(2)}x mirrored east–west`,ok:Se&&R>1,inconclusive:!Se,note:Se?`The imagery and the region list come from different pipelines, so this tests our projection — the rotation axis, the measured disk centre and radius, and the longitude convention — rather than either of theirs. Longitudes rotated ${Me.toFixed(0)} h forward at the Carrington rate.`:`Too close to call today: the published positions and their mirror image score within ${(Math.abs(R-1)*100).toFixed(0)}% of each other, so the picture cannot settle the projection. That happens when the regions are small — ${fe.tested} tested here — against a bright chromosphere. Reporting a defect on this evidence would be crying wolf.`})}}const Z=Rl(f.propagated?.bz??f.solar_wind?.bz_gsm??null,f.propagated?.density??f.solar_wind?.density??null,f.propagated?.speed??f.solar_wind?.speed??null),de=k===null?null:up(k),Ae=k===null?null:_p(new Date,{kp:k,wind:null}),Le=Ae?Gv(new Date,Ae):null;if(Le===null||Z===null||de===null||k===null)t.push({name:"Dayside standoff: T89 (Kp) vs Shue 1998 (wind)",ours:Le===null?"no Kp":`${Le.toFixed(1)} Rₑ`,theirs:Z===null?"no wind":`${Z.r0Re.toFixed(1)} Rₑ`,ok:!1,inconclusive:!0,note:"One of the two drivers is missing, so there is nothing to compare. Absent evidence, not disagreement — with no Kp the shield is IGRF alone, and with no wind there is no modelled boundary to draw."});else{const H=Le-Z.r0Re,J=3,U=rf(k)>.25&&rf(k)<.75;t.push({name:"Dayside standoff: T89 (Kp) vs Shue 1998 (wind)",ours:`${Le.toFixed(1)} Rₑ at Kp ${k.toFixed(1)} (${dp(de)})`,theirs:`${Z.r0Re.toFixed(1)} Rₑ from ${Z.dynPressureNPa.toFixed(2)} nPa`,ok:Math.abs(H)<=J,inconclusive:U&&Math.abs(H)>J,note:`${H>=0?"+":""}${H.toFixed(2)} Rₑ. Ours is the sunward reach of the last closed field line through the traced field — T89's own answer, since the model has no boundary in it. Theirs is the Shue nose from the propagated wind. The two share no inputs. `+(U?`Kp ${k.toFixed(1)} sits mid-band, where T89 draws exactly the field it would at Kp ${Math.floor(k).toFixed(1)} — too coarse to be held to a pressure-driven boundary. A gap beyond ${J} Rₑ on this run would be reported as unsettled rather than as a fault in either model.`:`Kp is near a band edge, so the comparison is as sharp as a seven-band model gets. A gap beyond ${J} Rₑ means the wind has moved somewhere the three-hourly index cannot follow — or that one of the two is wired wrong.`)})}const Ve=Z===null?null:Lv(Z.dynPressureNPa);if(Ve===null||Z===null)t.push({name:"Dayside standoff: T96 vs Shue 1998, pressure response",ours:"no wind",theirs:"no wind",ok:!1,inconclusive:!0,note:"Both need the measured wind, and it has not arrived. Absent evidence, not disagreement."});else{const H=vp(0,Z.dynPressureNPa),J=Ve-H,se=Ve-Z.r0Re-J,Me=.5,fe=1.1;t.push({name:"Dayside standoff: T96 vs Shue 1998, pressure response",ours:`${Ve.toFixed(2)} Rₑ from ${Z.dynPressureNPa.toFixed(2)} nPa`,theirs:`${H.toFixed(2)} Rₑ, same pressure at Bz 0`,ok:J>=Me&&J<=fe,note:`${J>=0?"+":""}${J.toFixed(2)} Rₑ apart on pressure alone, against ${Me}–${fe} Rₑ measured across the whole plausible wind. Two independent fits to different spacecraft databases, agreeing on how hard the wind pushes to about 8%. At the Bz actually measured, Shue puts the nose at ${Z.r0Re.toFixed(2)} Rₑ — a further ${se>=0?"":"−"}${Math.abs(se).toFixed(2)} Rₑ ${se>=0?"inside":"outside"} — and that part is the IMF term T96 does not have. The field lines stop at T96's boundary; the teal wireframe draws Shue's. When they part company, that is two boundaries on screen, not one drawn twice.`})}const ke=Al(new Date),j=cl-ke;return t.push({name:"Field model inside its published validity",ours:`${ke.toFixed(2)}`,theirs:`IGRF-14, ${Tl.toFixed(1)}–${cl.toFixed(1)}`,ok:ip(new Date),note:j>=0?`${j.toFixed(1)} years of validity remain; IAGA reissues the model every five years, so IGRF-15 is the successor to fetch.`:`Expired ${(-j).toFixed(1)} years ago. The field lines are extrapolated beyond the published secular variation and are labelled as such; replace the coefficients with IGRF-15 via scripts/gen-igrf.mjs.`}),{rows:t,ranAt:new Date().toISOString(),passed:t.filter(H=>H.ok).length,inconclusive:t.filter(H=>H.inconclusive).length}}const Z7=768,is=12;class J7{constructor(e){this.host=e,this.el=document.createElement("div"),this.el.className="subject-card",this.el.id="subject-card",this.el.setAttribute("role","dialog"),this.el.setAttribute("aria-label","About this element"),this.el.hidden=!0,document.body.appendChild(this.el),this.el.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeyDown)}host;el;current=null;returnTo=null;get openId(){return this.current}get isOpen(){return!this.el.hidden}sceneClick(e,t){if(this.isOpen){this.close();return}e&&this.open(e,t)}open(e,t){const i=gi(e);if(!i)return;if(this.current===e&&!this.el.hidden){this.place(t);return}this.el.hidden&&(this.returnTo=document.activeElement),this.current=e;const s=i.related.map(r=>{const a=gi(r);return a?`<li><button type="button" class="subject-link" data-card-subject="${ie(a.id)}">
            <span class="badge badge-${a.tier.toLowerCase()}">${a.tier}</span>
            ${ie(a.label)}</button> — ${ie(a.oneLine)}</li>`:""}).join("");this.el.innerHTML=`
      <div class="card-head">
        <h2>${ie(i.label)}</h2>
        <button type="button" class="card-close" data-card-close
          aria-label="Close">×</button>
      </div>
      <p class="tile-meta"><span class="badge badge-${i.tier.toLowerCase()}">${i.tier}</span>
        ${ie(Np[i.tier])}</p>
      <p class="card-one">${ie(i.oneLine)}</p>
      <p class="card-meaning">${ie(i.meaning)}</p>
      ${i.keyedTo?`<p class="fine card-keyed">Ambient, but not arbitrary: ${ie(i.keyedTo)}.</p>`:""}
      <p class="card-limits"><strong>What it does not say.</strong>
        ${ie(i.limits)}</p>
      ${s?`<ul class="subject-links card-related">${s}</ul>`:""}
      <button type="button" class="card-more" data-card-more>Full detail</button>`,this.el.hidden=!1,this.place(t),this.el.tabIndex=-1,this.el.focus({preventScroll:!0})}close(){this.el.hidden||(this.el.hidden=!0,this.current=null,this.returnTo?.focus?.({preventScroll:!0}),this.returnTo=null)}place(e){if(window.innerWidth<Z7){this.el.classList.add("is-sheet"),this.el.style.left="",this.el.style.top="";return}this.el.classList.remove("is-sheet");const t=this.el.getBoundingClientRect(),i=t.width||320,s=t.height||240,r=e.x+i+is>window.innerWidth?Math.max(is,e.x-i-is):e.x+is,a=Math.min(Math.max(is,e.y-s/3),Math.max(is,window.innerHeight-s-is));this.el.style.left=`${Math.round(r)}px`,this.el.style.top=`${Math.round(a)}px`}onClick=e=>{const t=e.target;if(t?.closest("[data-card-close]")){this.close();return}if(t?.closest("[data-card-more]")){const r=this.current;this.close(),r&&this.host.showSubject(r);return}const s=t?.closest("[data-card-subject]")?.dataset.cardSubject;if(s){const r={x:this.el.offsetLeft,y:this.el.offsetTop+60},a=this.returnTo;this.current=null,this.open(s,r),this.returnTo=a}};onKeyDown=e=>{e.key!=="Escape"||this.el.hidden||(e.stopPropagation(),this.close())};dispose(){document.removeEventListener("keydown",this.onKeyDown),this.el.remove()}}const Gp=document.getElementById("scene"),Be=await new Promise(n=>requestAnimationFrame(()=>n(new qx(Gp)))),ga=new I7(new Hp,6e4),br=new H7;let $p=null;const ms=new Map,Xf=6e4,ih=new Map;function Wp(n,e){const t=`${n}:${e}`;if(ih.has(t))return;const i=new Date(Date.now()+Xf).toISOString();n==="disk"?$e.setSunRetry(i):$e.setCoronaRetry(i);const s=window.setTimeout(()=>{ih.delete(t),(n==="disk"?$e.sunState.loopId===e:$e.sunState.coronaId===e)&&(ms.delete(e),n==="disk"?Hu(e):Xp(e))},Xf);ih.set(t,s)}async function Hu(n){const e=yr.find(t=>t.id===n&&t.kind==="disk")??yr[0];if($e.sunState.loopId=e.id,ms.has(e.id)){const t=ms.get(e.id)??null;$e.setSunLoop(t,!1),qf(t);return}$e.setSunLoop(null,!0);try{const t=await Ap(e);ms.set(e.id,t),$e.sunState.loopId===e.id&&($e.setSunLoop(t,!1),qf(t))}catch(t){$e.sunState.loopId===e.id&&($e.setSunLoop(null,!1,Un(t)),Wp("disk",e.id))}}async function Xp(n){if($e.sunState.coronaId=n,n===null){$e.setCoronaLoop(null,!1),Be.setCoronaPlane(null),$e.setPlaneCalibration("corona",null),Be.syncCoronaFraming();return}const e=yr.find(t=>t.id===n&&t.kind==="coronagraph");if(e){if(ms.has(e.id)){$e.setCoronaLoop(ms.get(e.id)??null,!1);return}$e.setCoronaLoop(null,!0);try{const t=await Ap(e);ms.set(e.id,t),$e.sunState.coronaId===e.id&&$e.setCoronaLoop(t,!1)}catch(t){$e.sunState.coronaId===e.id&&($e.setCoronaLoop(null,!1,Un(t)),Wp("corona",e.id))}}}function qf(n){const e=n?.frames[n.newestGood];if(!e){mu(null);return}const t=$e.images.acquire(e.url),i=()=>mu(t);t.complete&&t.naturalWidth>0?i():t.addEventListener("load",i,{once:!0})}function mu(n){Be.setSunImage(n),$e.setPlaneCalibration("disk",Be.setSunCard(n)),Be.syncCoronaFraming()}function Q7(n){$e.setPlaneCalibration("corona",Be.setCoronaPlane(n)),Be.syncCoronaFraming()}function eb(){const n=$e.sunState;!n.playing||!n.loop||$e.activeTab!=="sun"||n.preloaded<n.loop.frames.length||$e.setSunFrame((n.frameIndex+1)%n.loop.frames.length)}async function tb(){const n=$e.sunState;if(n.loop){if(n.preloaded>=n.loop.frames.length){$e.setSunPlaying(!n.playing);return}n.preloading||($e.setSunPreload(0,!0),await ny(n.loop,e=>$e.setSunPreload(e,!0)),$e.setSunPreload(n.loop.frames.length,!1),$e.setSunPlaying(!0))}}let sh=null;async function nb(){$e.setChecks(null,!0);try{sh=await Y7(void 0,Be.sunProjection())}catch(n){sh={rows:[{name:"Checks could not run",ours:"no data",theirs:"—",ok:!1,inconclusive:!0,note:`NOAA could not be reached to compare against (${n instanceof Error?n.message:String(n)}). This is the comparison being unavailable, not a disagreement with it.`}],ranAt:new Date().toISOString(),passed:0,inconclusive:1}}$e.setChecks(sh,!1)}let rh=null;async function ib(){$e.setForecast(null,!0);try{rh=await ky(),$e.setForecast(rh,!1)}catch(n){rh=null,$e.setForecast(null,!1,Un(n))}}async function sb(){$e.setCycle(null,!0);try{$e.setCycle(await Hy(),!1)}catch(n){$e.setCycle(null,!1,Un(n))}}const $e=new L7({onSelectLoop:n=>{Hu(n)},onSelectCorona:n=>{Xp(n)},onLoadCycle:()=>{sb()},onLoadForecast:()=>{ib()},onToggleSunPlay:()=>{tb()},onScrubSun:n=>{$e.setSunPlaying(!1),$e.setSunFrame(n)},onRunChecks:()=>{nb()},onSunFrame:n=>mu(n),onCoronaFrame:n=>Q7(n)}),vi=n=>document.getElementById(n),qp=vi("scale-globe"),jp=vi("scale-true"),Kp=vi("motion-toggle"),Yp=vi("shield-toggle"),Zp=vi("aurora-toggle"),Jp=vi("wind-toggle"),Qp=vi("cme-toggle"),em=vi("coast-toggle"),rb=document.getElementById("view-group"),tm=new Map;for(const n of ra){const e=document.createElement("button");e.className="ctl",e.type="button",e.id=`view-${n.id}`,e.textContent=n.label,e.title=n.title,e.setAttribute("aria-pressed",String(n.id==="deck")),e.addEventListener("click",()=>im(n.id)),rb.append(e),tm.set(n.id,e)}let nm="deck";function Mn(){$e.setNarration({mode:Be.scaleMode,view:nm,reducedMotion:br.reduced,shield:Be.shieldOn,fieldLines:Be.fieldLineStats,aurora:Be.auroraOn,wind:Be.windOn,earthSurface:Be.earthSurfaceState,cmes:{shown:Be.cmesOn,count:Be.cmeCount},drawn:Be.drawnSubjects}),$e.render(ga.get())}function im(n){nm=n,Be.setView(n);for(const[t,i]of tm)i.setAttribute("aria-pressed",String(t===n));const e=ra.find(t=>t.id===n);_i(`${e?.label??n} view — ${e?.title??""}`),(n==="profile"||n==="sunward")&&!Be.shieldOn&&Gu(!0),n==="polar"&&!Be.auroraOn&&$u(!0),Mn()}function Pl(n){Be.setScaleMode(n),qp.setAttribute("aria-pressed",String(n==="globe")),jp.setAttribute("aria-pressed",String(n==="true")),_i(K1(n)),Mn()}function Gu(n){Be.setShieldVisible(n),Yp.setAttribute("aria-pressed",String(n)),_i(n?"Magnetic field lines and boundaries shown.":"Field hidden."),Mn()}function $u(n){Be.setAuroraVisible(n),Zp.setAttribute("aria-pressed",String(n)),_i(n?"Aurora forecast shown.":"Aurora hidden."),Mn()}function Wu(n){Be.setWindVisible(n),Jp.setAttribute("aria-pressed",String(n)),_i(n?"Solar wind stream shown.":"Solar wind stream hidden."),Mn()}const sm=document.querySelector("header.top");function rm(){document.documentElement.style.setProperty("--header-real-h",`${Math.round(sm.getBoundingClientRect().height)}px`)}rm();typeof ResizeObserver<"u"&&new ResizeObserver(rm).observe(sm);const jf=vi("controls-toggle"),ab=document.getElementById("controls");jf.addEventListener("click",()=>{const n=ab.classList.toggle("is-open");jf.setAttribute("aria-expanded",String(n))});qp.addEventListener("click",()=>Pl("globe"));jp.addEventListener("click",()=>Pl("true"));Yp.addEventListener("click",()=>Gu(!Be.shieldOn));Zp.addEventListener("click",()=>$u(!Be.auroraOn));Jp.addEventListener("click",()=>Wu(!Be.windOn));function am(n){Be.setCmesVisible(n),Qp.setAttribute("aria-pressed",String(n)),_i(n?"CME cones shown.":"CME cones hidden."),Mn()}Qp.addEventListener("click",()=>am(!Be.cmesOn));function ob(n){Be.setCoastOverlay(n),em.setAttribute("aria-pressed",String(n)),_i(n?"Vector coastlines drawn over the surface imagery.":"Coastlines hidden — the raster surface only."),Mn()}em.addEventListener("click",()=>ob(!Be.coastOverlayOn));Kp.addEventListener("click",()=>br.setOverride(!br.reduced));br.subscribe(n=>{Be.setReducedMotion(n),Kp.setAttribute("aria-pressed",String(!n)),Mn()});$7({view:n=>{const e=ra[n];e&&im(e.id)},toggleScale:()=>Pl(Be.scaleMode==="globe"?"true":"globe"),toggleMotion:()=>br.setOverride(!br.reduced),toggleShield:()=>Gu(!Be.shieldOn),toggleAurora:()=>$u(!Be.auroraOn),toggleWind:()=>Wu(!Be.windOn),toggleCmes:()=>am(!Be.cmesOn),refresh:()=>{_i("Refreshing."),ga.refresh()},focusReport:()=>$e.selectTab("report")});let Kf=!1;function lb(){Kf||ga.get().lanes.snapshot||(Kf=!0,Hu(yr[0].id))}ga.subscribe(n=>{Be.setNow(n.now?.data??null),Be.setAurora(n.aurora?.data??null),Be.setRegions(n.regions?.data??[],n.regions?.data?.[0]?.observed??null),Be.setCmes(n.cmes),Be.setSpacecraft(n.spacecraft?.data??[]),lb(),Mn()});let Yf=!1;function cb(){if(Yf)return;Yf=!0;const n=Math.min(devicePixelRatio||1,3),t=(Gp.clientWidth||window.innerWidth)*n>=2048?"4096":"2048",i=(s,r)=>{const a=new Image;a.decoding="async",a.onload=()=>r(a),a.onerror=()=>{Be.setEarthSurfaceState("vector"),Mn()},a.src=`/viewer/earth-${s}.webp`};i(`day-${t}`,s=>{Be.setEarthDayImage(s),Be.setEarthSurfaceState("imagery"),Mn()}),i("night-2048",s=>{Be.setEarthNightImage(s),$e.setEarthLights(!0),Mn()})}function hb(n){requestAnimationFrame(()=>requestAnimationFrame(n))}window.setInterval(Mn,3e4);$p=window.setInterval(eb,220);Pl("globe");Wu(!0);Be.start();ga.start();hb(cb);const Vi=document.getElementById("tip");let ds="";const gu=new J7({showSubject:n=>$e.showSubject(n)});Be.onHover=n=>{if(!n){Vi.hidden=!0,ds="";return}const e=Up(n.id,new Date),t=n.kind==="sun"?"Sun · open the Sun panel":n.kind==="spacecraft"?`${n.label} · L1 monitor`:e.auFromEarth!==null?`${n.label} · ${gl(e.auFromEarth)} · light ${Fp(e.lightSeconds)}`:e.auFromSun!==null?`${n.label} · ${gl(e.auFromSun)} from the Sun`:n.label;t!==ds&&(Vi.textContent=t,ds=t),Vi.hidden=!1,Vi.style.transform=`translate(${n.screen.x+14}px, ${n.screen.y+14}px)`};Be.onLayerHover=n=>{if(!n){ds.startsWith("layer:")&&(Vi.hidden=!0,ds="");return}const e=gi(n.subject);if(!e)return;const t=`layer:${e.id}`;t!==ds&&(Vi.textContent=`${e.label} · ${e.oneLine}`,ds=t),Vi.hidden=!1,Vi.style.transform=`translate(${n.screen.x+14}px, ${n.screen.y+14}px)`};Be.onLayerSelect=n=>{gu.sceneClick(n?.subject??null,n?.screen??{x:0,y:0})};Be.onSelect=n=>{if(gu.isOpen){gu.close();return}n.kind==="sun"?$e.selectTab("sun"):n.kind==="spacecraft"?$e.selectTab("sources"):$e.showBody(n.id)};window.setInterval(()=>$e.setStats(Be.stats),1e3);Object.assign(window,{__viewer:Be,__hud:$e,__stats:()=>Be.stats,__sunTimer:$p});
