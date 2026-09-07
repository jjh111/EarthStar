(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ul="180",Ki={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,Gl=1,Hu=2,v0=1,Gu=2,Rn=3,Jn=0,Ie=1,_n=2,Yn=0,Zi=1,sn=2,Wl=3,$l=4,Wu=5,ci=100,$u=101,Xu=102,qu=103,Yu=104,ju=200,Ku=201,Zu=202,Ju=203,no=204,io=205,Qu=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,so=0,ro=1,ao=2,is=3,oo=4,lo=5,co=6,uo=7,hl=0,lh=1,ch=2,jn=0,uh=1,hh=2,dh=3,fh=4,ph=5,mh=6,gh=7,x0=300,ss=301,rs=302,ho=303,fo=304,Kr=306,po=1e3,di=1001,mo=1002,hn=1003,_h=1004,Ys=1005,Ge=1006,aa=1007,fi=1008,Mn=1009,M0=1010,S0=1011,Rs=1012,dl=1013,_i=1014,Dn=1015,ks=1016,fl=1017,pl=1018,Cs=1020,y0=35902,b0=35899,E0=1021,T0=1022,un=1023,Ps=1026,Ds=1027,w0=1028,ml=1029,A0=1030,gl=1031,_l=1033,Lr=33776,Ir=33777,Ur=33778,Nr=33779,go=35840,_o=35841,vo=35842,xo=35843,Mo=36196,So=37492,yo=37496,bo=37808,Eo=37809,To=37810,wo=37811,Ao=37812,Ro=37813,Co=37814,Po=37815,Do=37816,Lo=37817,Io=37818,Uo=37819,No=37820,Fo=37821,Oo=36492,Bo=36494,zo=36495,ko=36283,Vo=36284,Ho=36285,Go=36286,vh=3200,xh=3201,R0=0,Mh=1,Xn="",He="srgb",as="srgb-linear",zr="linear",ie="srgb",Ti=7680,Xl=519,Sh=512,yh=513,bh=514,C0=515,Eh=516,Th=517,wh=518,Ah=519,ql=35044,Yl="300 es",vn=2e3,kr=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Wo=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function Rh(n,t){return(n%t+t)%t}function oa(n,t,e){return(1-e)*n+e*t}function ds(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ch={DEG2RAD:Fr};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==m||h!==_){let p=1-o;const d=l*f+c*m+h*_+u*g,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,d*E);p=Math.sin(p*A)/C,o=Math.sin(o*A)/C}const M=o*E;if(l=l*p+f*M,c=c*p+m*M,h=h*p+_*M,u=u*p+g*M,p===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*f,t[e+1]=l*_+h*f+c*u-o*m,t[e+2]=c*_+h*m+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new R,jl=new vi;class kt{constructor(t,e,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],d=s[6],E=s[1],b=s[4],M=s[7],C=s[2],A=s[5],P=s[8];return r[0]=a*g+o*E+l*C,r[3]=a*p+o*b+l*A,r[6]=a*d+o*M+l*P,r[1]=c*g+h*E+u*C,r[4]=c*p+h*b+u*A,r[7]=c*d+h*M+u*P,r[2]=f*g+m*E+_*C,r[5]=f*p+m*b+_*A,r[8]=f*d+m*M+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,_=e*u+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(o*i-s*a)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new kt;function P0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ph(){const n=Vr("canvas");return n.style.display="block",n}const Kl={};function Ls(n){n in Kl||(Kl[n]=!0,console.warn(n))}function Dh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Zl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lh(){const n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:t,whitePoint:i,transfer:zr,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),n}const Kt=Lh();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class Ih{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wi===void 0&&(wi=Vr("canvas")),wi.width=t.width,wi.height=t.height;const s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class vl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ua(s[a].image)):r.push(ua(s[a]))}else r=ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ih.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;const ha=new R;class Oe extends yi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=di,s=di,r=Ge,a=fi,o=un,l=Mn,c=Oe.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Vs(),this.name="",this.source=new vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==x0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=x0;Oe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,i=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(m+1)/2,C=(d+1)/2,A=(h+f)/4,P=(u+g)/4,N=(_+p)/4;return b>M&&b>C?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=P/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=N/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(u-g)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends yi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Oe(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new vl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Fh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class D0 extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Ks.subVectors(this.max,fs),Ai.subVectors(t.a,fs),Ri.subVectors(t.b,fs),Ci.subVectors(t.c,fs),On.subVectors(Ri,Ai),Bn.subVectors(Ci,Ri),ni.subVectors(Ai,Ci);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ni.z,ni.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ni.z,0,-ni.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ni.y,ni.x,0];return!da(e,Ai,Ri,Ci,Ks)||(e=[1,0,0,0,1,0,0,0,1],!da(e,Ai,Ri,Ci,Ks))?!1:(Zs.crossVectors(On,Bn),e=[Zs.x,Zs.y,Zs.z],da(e,Ai,Ri,Ci,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bn=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,js=new Hs,Ai=new R,Ri=new R,Ci=new R,On=new R,Bn=new R,ni=new R,fs=new R,Ks=new R,Zs=new R,ii=new R;function da(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ii.fromArray(n,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=i.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bh=new Hs,ps=new R,fa=new R;class Gs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Bh.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(fa)),this.expandByPoint(ps.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const En=new R,pa=new R,Js=new R,zn=new R,ma=new R,Qs=new R,ga=new R;class Zr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pa.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=zn.dot(this.direction),l=-zn.dot(Js),c=zn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(Js,f),m}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,s,r){ma.subVectors(e,t),Qs.subVectors(i,t),ga.crossVectors(ma,Qs);let a=this.direction.dot(ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const l=o*this.direction.dot(Qs.crossVectors(zn,Qs));if(l<0)return null;const c=o*this.direction.dot(ma.cross(zn));if(c<0||l+c>a)return null;const h=-o*zn.dot(ga);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,r,a,o,l,c,h,u,f,m,_,g,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,f,m,_,g,p)}set(t,e,i,s,r,a,o,l,c,h,u,f,m,_,g,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,kh)}lookAt(t,e,i){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),kn.crossVectors(i,Xe),kn.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),kn.crossVectors(i,Xe)),kn.normalize(),tr.crossVectors(Xe,kn),s[0]=kn.x,s[4]=tr.x,s[8]=Xe.x,s[1]=kn.y,s[5]=tr.y,s[9]=Xe.y,s[2]=kn.z,s[6]=tr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],E=i[3],b=i[7],M=i[11],C=i[15],A=s[0],P=s[4],N=s[8],y=s[12],S=s[1],D=s[5],B=s[9],V=s[13],$=s[2],G=s[6],q=s[10],K=s[14],H=s[3],at=s[7],et=s[11],St=s[15];return r[0]=a*A+o*S+l*$+c*H,r[4]=a*P+o*D+l*G+c*at,r[8]=a*N+o*B+l*q+c*et,r[12]=a*y+o*V+l*K+c*St,r[1]=h*A+u*S+f*$+m*H,r[5]=h*P+u*D+f*G+m*at,r[9]=h*N+u*B+f*q+m*et,r[13]=h*y+u*V+f*K+m*St,r[2]=_*A+g*S+p*$+d*H,r[6]=_*P+g*D+p*G+d*at,r[10]=_*N+g*B+p*q+d*et,r[14]=_*y+g*V+p*K+d*St,r[3]=E*A+b*S+M*$+C*H,r[7]=E*P+b*D+M*G+C*at,r[11]=E*N+b*B+M*q+C*et,r[15]=E*y+b*V+M*K+C*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],d=t[15];return _*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*m-i*l*m)+g*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],d=t[15],E=u*p*c-g*f*c+g*l*m-o*p*m-u*l*d+o*f*d,b=_*f*c-h*p*c-_*l*m+a*p*m+h*l*d-a*f*d,M=h*g*c-_*u*c+_*o*m-a*g*m-h*o*d+a*u*d,C=_*u*l-h*g*l-_*o*f+a*g*f+h*o*p-a*u*p,A=e*E+i*b+s*M+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=E*P,t[1]=(g*f*r-u*p*r-g*s*m+i*p*m+u*s*d-i*f*d)*P,t[2]=(o*p*r-g*l*r+g*s*c-i*p*c-o*s*d+i*l*d)*P,t[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*m-i*l*m)*P,t[4]=b*P,t[5]=(h*p*r-_*f*r+_*s*m-e*p*m-h*s*d+e*f*d)*P,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*d-e*l*d)*P,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*P,t[8]=M*P,t[9]=(_*u*r-h*g*r-_*i*m+e*g*m+h*i*d-e*u*d)*P,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*d+e*o*d)*P,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*m-e*o*m)*P,t[12]=C*P,t[13]=(h*g*s-_*u*s+_*i*f-e*g*f-h*i*p+e*u*p)*P,t[14]=(_*o*s-a*g*s-_*i*l+e*g*l+a*i*p-e*o*p)*P,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*f+e*o*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,_=r*u,g=a*h,p=a*u,d=o*u,E=l*c,b=l*h,M=l*u,C=i.x,A=i.y,P=i.z;return s[0]=(1-(g+d))*C,s[1]=(m+M)*C,s[2]=(_-b)*C,s[3]=0,s[4]=(m-M)*A,s[5]=(1-(f+d))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(_+b)*P,s[9]=(p-E)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=vn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),m=(i+s)/(i-s);let _,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===vn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===kr)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=vn,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),m=-(i+s)/(i-s);let _,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===vn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===kr)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Pi=new R,an=new de,zh=new R(0,0,0),kh=new R(1,1,1),kn=new R,tr=new R,Xe=new R,Ql=new de,tc=new vi;class Sn{constructor(t=0,e=0,i=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class L0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const ec=new R,Di=new vi,Tn=new de,er=new R,ms=new R,Hh=new R,Gh=new vi,nc=new R(1,0,0),ic=new R(0,1,0),sc=new R(0,0,1),rc={type:"added"},Wh={type:"removed"},Li={type:"childadded",child:null},_a={type:"childremoved",child:null};class Ue extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new R,e=new Sn,i=new vi,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new kt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?er.copy(t):er.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ms,er,this.up):Tn.lookAt(er,ms,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Tn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new R(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new R,wn=new R,va=new R,An=new R,Ii=new R,Ui=new R,ac=new R,xa=new R,Ma=new R,Sa=new R,ya=new re,ba=new re,Ea=new re;class cn{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){on.subVectors(s,e),wn.subVectors(i,e),va.subVectors(t,e);const a=on.dot(on),o=on.dot(wn),l=on.dot(va),c=wn.dot(wn),h=wn.dot(va),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ya.setScalar(0),ba.setScalar(0),Ea.setScalar(0),ya.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,i),Ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ya,r.x),a.addScaledVector(ba,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,i,s){return on.subVectors(i,e),wn.subVectors(t,e),on.cross(wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,i),Ui.subVectors(r,i),xa.subVectors(t,i);const l=Ii.dot(xa),c=Ui.dot(xa);if(l<=0&&c<=0)return e.copy(i);Ma.subVectors(t,s);const h=Ii.dot(Ma),u=Ui.dot(Ma);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ii,a);Sa.subVectors(t,r);const m=Ii.dot(Sa),_=Ui.dot(Sa);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Ui,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return ac.subVectors(r,s),o=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(ac,o);const d=1/(p+g+f);return a=g*d,o=f*d,e.copy(i).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function Ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=Rh(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ta(a,r,t+1/3),this.g=Ta(a,r,t),this.b=Ta(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=I0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Kt.workingToColorSpace(De.copy(this),t),Math.round(Wt(De.r*255,0,255))*65536+Math.round(Wt(De.g*255,0,255))*256+Math.round(Wt(De.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(De.copy(this),e);const i=De.r,s=De.g,r=De.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=He){Kt.workingToColorSpace(De.copy(this),t);const e=De.r,i=De.g,s=De.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(nr);const i=oa(Vn.h,nr.h,e),s=oa(Vn.s,nr.s,e),r=oa(Vn.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ut;Ut.NAMES=I0;let $h=0;class bi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Zi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==io&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ws extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new R,ir=new Ft;let Xh=0;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ds(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class U0 extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class N0 extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qh=0;const tn=new de,wa=new Ue,Ni=new R,qe=new Hs,gs=new Hs,Te=new R;class Se extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P0(t)?N0:U0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,i){return tn.makeTranslation(t,e,i),this.applyMatrix4(tn),this}scale(t,e,i){return tn.makeScale(t,e,i),this.applyMatrix4(tn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(qe.min,gs.min),qe.expandByPoint(Te),Te.addVectors(qe.max,gs.max),qe.expandByPoint(Te)):(qe.expandByPoint(gs.min),qe.expandByPoint(gs.max))}qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Te.add(Ni)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new R,l[N]=new R;const c=new R,h=new R,u=new R,f=new Ft,m=new Ft,_=new Ft,g=new R,p=new R;function d(N,y,S){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(D),o[N].add(g),o[y].add(g),o[S].add(g),l[N].add(p),l[y].add(p),l[S].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,y=E.length;N<y;++N){const S=E[N],D=S.start,B=S.count;for(let V=D,$=D+B;V<$;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const b=new R,M=new R,C=new R,A=new R;function P(N){C.fromBufferAttribute(s,N),A.copy(C);const y=o[N];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),M.crossVectors(A,y);const D=M.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,D)}for(let N=0,y=E.length;N<y;++N){const S=E[N],D=S.start,B=S.count;for(let V=D,$=D+B;V<$;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new xn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new de,si=new Zr,sr=new Gs,lc=new R,rr=new R,ar=new R,or=new R,Aa=new R,lr=new R,cc=new R,cr=new R;class Ae extends Ue{constructor(t=new Se,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Aa.fromBufferAttribute(u,t),a?lr.addScaledVector(Aa,h):lr.addScaledVector(Aa.sub(e),h))}e.add(lr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(sr.containsPoint(si.origin)===!1&&(si.intersectSphere(sr,lc)===null||si.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(oc.copy(r).invert(),si.copy(t.ray).applyMatrix4(oc),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=a[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,C=b;M<C;M+=3){const A=o.getX(M),P=o.getX(M+1),N=o.getX(M+2);s=ur(this,d,t,i,c,h,u,A,P,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const E=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);s=ur(this,a,t,i,c,h,u,E,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=a[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,C=b;M<C;M+=3){const A=M,P=M+1,N=M+2;s=ur(this,d,t,i,c,h,u,A,P,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const E=p,b=p+1,M=p+2;s=ur(this,a,t,i,c,h,u,E,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Yh(n,t,e,i,s,r,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:n}}function ur(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,rr),n.getVertexPosition(l,ar),n.getVertexPosition(c,or);const h=Yh(n,t,e,i,rr,ar,or,cc);if(h){const u=new R;cn.getBarycoord(cc,rr,ar,or,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,l,c,u,new Ft)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new Ft)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};cn.getNormal(rr,ar,or,f.normal),h.face=f,h.barycoord=u}return h}class $s extends Se{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function _(g,p,d,E,b,M,C,A,P,N,y){const S=M/P,D=C/N,B=M/2,V=C/2,$=A/2,G=P+1,q=N+1;let K=0,H=0;const at=new R;for(let et=0;et<q;et++){const St=et*D-V;for(let Bt=0;Bt<G;Bt++){const Jt=Bt*S-B;at[g]=Jt*E,at[p]=St*b,at[d]=$,c.push(at.x,at.y,at.z),at[g]=0,at[p]=0,at[d]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(Bt/P),u.push(1-et/N),K+=1}}for(let et=0;et<N;et++)for(let St=0;St<P;St++){const Bt=f+St+G*et,Jt=f+St+G*(et+1),ee=f+(St+1)+G*(et+1),qt=f+(St+1)+G*et;l.push(Bt,Jt,qt),l.push(Jt,ee,qt),H+=6}o.addGroup(m,H,y),m+=H,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=os(n[e]);for(const s in i)t[s]=i[s]}return t}function jh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function F0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Kh={clone:os,merge:Fe};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class O0 extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new R,uc=new Ft,hc=new Ft;class Ke extends O0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,hc),e.subVectors(hc,uc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class Qh extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class B0 extends Oe{constructor(t=[],e=ss,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class td extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new B0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $s(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Yn});r.uniforms.tEquirect.value=e;const a=new Ae(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=Ge),new Qh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class nn extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ed={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new nn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class nd extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ca=new R,id=new R,sd=new kt;class $n{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ca.subVectors(i,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sd.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Gs,rd=new Ft(.5,.5),hr=new R;class xl{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,a=new $n){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],m=r[7],_=r[8],g=r[9],p=r[10],d=r[11],E=r[12],b=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,m-h,d-_,C-E).normalize(),s[1].setComponents(c+a,m+h,d+_,C+E).normalize(),s[2].setComponents(c+o,m+u,d+g,C+b).normalize(),s[3].setComponents(c-o,m-u,d-g,C-b).normalize(),i)s[4].setComponents(l,f,p,M).normalize(),s[5].setComponents(c-l,m-f,d-p,C-M).normalize();else if(s[4].setComponents(c-l,m-f,d-p,C-M).normalize(),e===vn)s[5].setComponents(c+l,m+f,d+p,C+M).normalize();else if(e===kr)s[5].setComponents(l,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);const e=rd.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Is extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new R,Gr=new R,dc=new de,_s=new Zr,dr=new Gs,Pa=new R,fc=new R;class Ml extends Ue{constructor(t=new Se,e=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Gr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(Gr);t.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;dc.copy(s).invert(),_s.copy(t.ray).applyMatrix4(dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const d=h.getX(g),E=h.getX(g+1),b=fr(this,t,_s,l,d,E,g);b&&e.push(b)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(m),d=fr(this,t,_s,l,g,p,_-1);d&&e.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const d=fr(this,t,_s,l,g,g+1,g);d&&e.push(d)}if(this.isLineLoop){const g=fr(this,t,_s,l,_-1,m,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Gr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Gr,Pa,fc)>i)return;Pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:fc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const pc=new R,mc=new R;class Wr extends Ml{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)pc.fromBufferAttribute(e,s),mc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pc.distanceTo(mc);t.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gc=new de,$o=new Zr,pr=new Gs,mr=new R;class ad extends Ue{constructor(t=new Se,e=new z0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;gc.copy(s).invert(),$o.copy(t.ray).applyMatrix4(gc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,g=m;_<g;_++){const p=c.getX(_);mr.fromBufferAttribute(u,p),_c(mr,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m;_<g;_++)mr.fromBufferAttribute(u,_),_c(mr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _c(n,t,e,i,s,r,a){const o=$o.distanceSqToPoint(n);if(o<e){const l=new R;$o.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xo extends Oe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class k0 extends Oe{constructor(t,e,i=_i,s,r,a,o=hn,l=hn,c,h=Ps,u=1){if(h!==Ps&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class V0 extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jr extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,m=[],_=[],g=[],p=[];for(let d=0;d<h;d++){const E=d*f-a;for(let b=0;b<c;b++){const M=b*u-r;_.push(M,-E,0),g.push(0,0,1),p.push(b/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const b=E+c*d,M=E+c*(d+1),C=E+1+c*(d+1),A=E+1+c*d;m.push(b,M,A),m.push(M,C,A)}this.setIndex(m),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(g,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sl extends Se{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,m=new R,_=new Ft;for(let g=0;g<=s;g++){for(let p=0;p<=i;p++){const d=r+p/i*a;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<s;g++){const p=g*(i+1);for(let d=0;d<i;d++){const E=d+p,b=E,M=E+i+1,C=E+i+2,A=E+1;o.push(b,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Un extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,f=new R,m=[],_=[],g=[],p=[];for(let d=0;d<=i;d++){const E=[],b=d/i;let M=0;d===0&&a===0?M=.5/e:d===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(A+M,1-b),E.push(c++)}h.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const b=h[d][E+1],M=h[d][E],C=h[d+1][E],A=h[d+1][E+1];(d!==0||a>0)&&m.push(b,M,A),(d!==i-1||l<Math.PI)&&m.push(M,C,A)}this.setIndex(m),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(g,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class H0 extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R0,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class od extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ld extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class G0 extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Da=new de,vc=new R,xc=new R;class cd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mc=new de,vs=new R,La=new R;class ud extends cd{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(vs),La.copy(i.position),La.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(La),i.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),Mc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc,i.coordinateSystem,i.reversedDepth)}}class hd extends G0{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ud}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dd extends O0{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fd extends G0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class pd extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}let Sc=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class md extends yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function yc(n,t,e,i){const s=gd(i);switch(e){case E0:return n*t;case w0:return n*t/s.components*s.byteLength;case ml:return n*t/s.components*s.byteLength;case A0:return n*t*2/s.components*s.byteLength;case gl:return n*t*2/s.components*s.byteLength;case T0:return n*t*3/s.components*s.byteLength;case un:return n*t*4/s.components*s.byteLength;case _l:return n*t*4/s.components*s.byteLength;case Lr:case Ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _o:case xo:return Math.max(n,16)*Math.max(t,8)/4;case go:case vo:return Math.max(n,8)*Math.max(t,8)/2;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Oo:case Bo:case zo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ko:case Vo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ho:case Go:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gd(n){switch(n){case Mn:case M0:return{byteLength:1,components:1};case Rs:case S0:case ks:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case _i:case dl:case Dn:return{byteLength:4,components:1};case y0:case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function W0(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _d(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],g=u[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const g=u[m];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,_f=`struct PhysicalMaterial {
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
}`,vf=`
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,w1=`#define DISTANCE
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
}`,A1=`#define DISTANCE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,I1=`uniform vec3 diffuse;
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
}`,U1=`#define LAMBERT
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
}`,N1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
}`,k1=`#define PHONG
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
}`,V1=`#define PHONG
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
}`,H1=`#define STANDARD
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
}`,G1=`#define STANDARD
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
}`,W1=`#define TOON
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
}`,$1=`#define TOON
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
}`,X1=`uniform float size;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,K1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:vd,alphahash_pars_fragment:xd,alphamap_fragment:Md,alphamap_pars_fragment:Sd,alphatest_fragment:yd,alphatest_pars_fragment:bd,aomap_fragment:Ed,aomap_pars_fragment:Td,batching_pars_vertex:wd,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Dd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Vd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Wd,displacementmap_vertex:$d,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:jd,envmap_fragment:Kd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:uf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:xf,lights_fragment_end:Mf,logdepthbuf_fragment:Sf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Ef,map_fragment:Tf,map_pars_fragment:wf,map_particle_fragment:Af,map_particle_pars_fragment:Rf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Df,morphcolor_vertex:Lf,morphnormal_vertex:If,morphtarget_pars_vertex:Uf,morphtarget_vertex:Nf,normal_fragment_begin:Ff,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:$f,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:jf,dithering_fragment:Kf,dithering_pars_fragment:Zf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:e1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:s1,skinning_pars_vertex:r1,skinning_vertex:a1,skinnormal_vertex:o1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:h1,transmission_fragment:d1,transmission_pars_fragment:f1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:x1,backgroundCube_vert:M1,backgroundCube_frag:S1,cube_vert:y1,cube_frag:b1,depth_vert:E1,depth_frag:T1,distanceRGBA_vert:w1,distanceRGBA_frag:A1,equirect_vert:R1,equirect_frag:C1,linedashed_vert:P1,linedashed_frag:D1,meshbasic_vert:L1,meshbasic_frag:I1,meshlambert_vert:U1,meshlambert_frag:N1,meshmatcap_vert:F1,meshmatcap_frag:O1,meshnormal_vert:B1,meshnormal_frag:z1,meshphong_vert:k1,meshphong_frag:V1,meshphysical_vert:H1,meshphysical_frag:G1,meshtoon_vert:W1,meshtoon_frag:$1,points_vert:X1,points_frag:q1,shadow_vert:Y1,shadow_frag:j1,sprite_vert:K1,sprite_frag:Z1},ot={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},gn={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};gn.physical={uniforms:Fe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const gr={r:0,b:0,g:0},ai=new Sn,J1=new de;function Q1(n,t,e,i,s,r,a){const o=new Ut(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function g(b){let M=!1;const C=_(b);C===null?d(o,l):C&&C.isColor&&(d(C,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,M){const C=_(M);C&&(C.isCubeTexture||C.mapping===Kr)?(h===void 0&&(h=new Ae(new $s(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:os(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(M.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(ai)),h.material.toneMapped=Kt.getTransfer(C.colorSpace)!==ie,(u!==C||f!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ae(new Jr(2,2),new Ze({name:"BackgroundMaterial",uniforms:os(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(C.colorSpace)!==ie,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(gr,F0(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,M,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:g,addToRenderList:p,dispose:E}}function tp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(S,D,B,V,$){let G=!1;const q=u(V,B,D);r!==q&&(r=q,c(r.object)),G=m(S,V,B,$),G&&_(S,V,B,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(S,D,B,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,D,B){const V=B.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let G=$[D.id];G===void 0&&(G={},$[D.id]=G);let q=G[V];return q===void 0&&(q=f(l()),G[V]=q),q}function f(S){const D=[],B=[],V=[];for(let $=0;$<e;$++)D[$]=0,B[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:V,object:S,attributes:{},index:null}}function m(S,D,B,V){const $=r.attributes,G=D.attributes;let q=0;const K=B.getAttributes();for(const H in K)if(K[H].location>=0){const et=$[H];let St=G[H];if(St===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function _(S,D,B,V){const $={},G=D.attributes;let q=0;const K=B.getAttributes();for(const H in K)if(K[H].location>=0){let et=G[H];et===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(et=S.instanceColor));const St={};St.attribute=et,et&&et.data&&(St.data=et.data),$[H]=St,q++}r.attributes=$,r.attributesNum=q,r.index=V}function g(){const S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function p(S){d(S,0)}function d(S,D){const B=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;B[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),$[S]!==D&&(n.vertexAttribDivisor(S,D),$[S]=D)}function E(){const S=r.newAttributes,D=r.enabledAttributes;for(let B=0,V=D.length;B<V;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function b(S,D,B,V,$,G,q){q===!0?n.vertexAttribIPointer(S,D,B,$,G):n.vertexAttribPointer(S,D,B,V,$,G)}function M(S,D,B,V){g();const $=V.attributes,G=B.getAttributes(),q=D.defaultAttributeValues;for(const K in G){const H=G[K];if(H.location>=0){let at=$[K];if(at===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const et=at.normalized,St=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const Jt=Bt.buffer,ee=Bt.type,qt=Bt.bytesPerElement,Y=ee===n.INT||ee===n.UNSIGNED_INT||at.gpuType===dl;if(at.isInterleavedBufferAttribute){const Z=at.data,mt=Z.stride,O=at.offset;if(Z.isInstancedInterleavedBuffer){for(let dt=0;dt<H.locationSize;dt++)d(H.location+dt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let dt=0;dt<H.locationSize;dt++)b(H.location+dt,St/H.locationSize,ee,et,mt*qt,(O+St/H.locationSize*dt)*qt,Y)}else{if(at.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)d(H.location+Z,at.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Z=0;Z<H.locationSize;Z++)b(H.location+Z,St/H.locationSize,ee,et,St*qt,St/H.locationSize*Z*qt,Y)}}else if(q!==void 0){const et=q[K];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(H.location,et);break;case 3:n.vertexAttrib3fv(H.location,et);break;case 4:n.vertexAttrib4fv(H.location,et);break;default:n.vertexAttrib1fv(H.location,et)}}}}E()}function C(){N();for(const S in i){const D=i[S];for(const B in D){const V=D[B];for(const $ in V)h(V[$].object),delete V[$];delete D[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const V=D[B];for(const $ in V)h(V[$].object),delete V[$];delete D[B]}delete i[S.id]}function P(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const V=B[S.id];for(const $ in V)h(V[$].object),delete V[$];delete B[S.id]}}function N(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function ep(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function np(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Dn&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function ip(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new $n,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const E=r?0:i,b=E*4;let M=d.clippingState||null;l.value=M,M=h(_,f,b,m);for(let C=0;C!==b;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,M=m;b!==g;++b,M+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function sp(n){let t=new WeakMap;function e(a,o){return o===ho?a.mapping=ss:o===fo&&(a.mapping=rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ho||o===fo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new td(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const qi=4,bc=[.125,.215,.35,.446,.526,.582],ui=20,Ia=new dd,Ec=new Ut;let Ua=null,Na=0,Fa=0,Oa=!1;const li=(1+Math.sqrt(5))/2,Bi=1/li,Tc=[new R(-li,Bi,0),new R(li,Bi,0),new R(-Bi,0,li),new R(Bi,0,li),new R(0,li,-Bi),new R(0,li,Bi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],rp=new R;class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=rp}=r;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ks,format:un,colorSpace:as,depthBuffer:!1},s=Ac(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ap(r)),this._blurMaterial=op(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,i,s,r){const l=new Ke(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Ec),u.toneMapping=jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new Ws({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),p=new Ae(new $s,g);let d=!1;const E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,d=!0):(g.color.copy(Ec),d=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const C=this._cubeSize;_r(s,M*C,b>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;_r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ia)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tc[(s-r-1)%Tc.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):ui;p>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const d=[];let E=0;for(let P=0;P<ui;++P){const N=P/g,y=Math.exp(-N*N/2);d.push(y),P===0?E+=y:P<p&&(E+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[s],C=3*M*(s>b-qi?s-b+qi:0),A=4*(this._cubeSize-M);_r(e,C,A,3*M,2*M),l.setRenderTarget(e),l.render(u,Ia)}}function ap(n){const t=[],e=[],i=[];let s=n;const r=n-qi+1+bc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-qi?l=bc[a-n+qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,d=1,E=new Float32Array(g*_*m),b=new Float32Array(p*_*m),M=new Float32Array(d*_*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,N=A>2?0:-1,y=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(y,g*_*A),b.set(f,p*_*A);const S=[A,A,A,A,A,A];M.set(S,d*_*A)}const C=new Se;C.setAttribute("position",new xn(E,g)),C.setAttribute("uv",new xn(b,p)),C.setAttribute("faceIndex",new xn(M,d)),t.push(C),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ac(n,t,e){const i=new xi(n,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function op(n,t,e){const i=new Float32Array(ui),s=new R(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Rc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Cc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function lp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ho||l===fo,h=l===ss||l===rs;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wc(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new wc(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function cp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function up(n,t,e,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let b=0,M=E.length;b<M;b+=3){const C=E[b+0],A=E[b+1],P=E[b+2];f.push(C,A,A,P,P,C)}}else if(_!==void 0){const E=_.array;g=_.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const C=b+0,A=b+1,P=b+2;f.push(C,A,A,P,P,C)}}else return;const p=new(P0(f)?N0:U0)(f,1);p.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function hp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*a),e.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*a,_),e.update(m,i,_))}function h(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];e.update(p,i,1)}function u(f,m,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,g,0,_);let d=0;for(let E=0;E<_;E++)d+=m[E]*g[E];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fp(n,t,e){const i=new WeakMap,s=new re;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*A*4*u),N=new D0(P,C,A,u);N.type=Dn,N.needsUpdate=!0;const y=M*4;for(let D=0;D<u;D++){const B=d[D],V=E[D],$=b[D],G=C*A*4*D;for(let q=0;q<B.count;q++){const K=q*y;_===!0&&(s.fromBufferAttribute(B,q),P[G+K+0]=s.x,P[G+K+1]=s.y,P[G+K+2]=s.z,P[G+K+3]=0),g===!0&&(s.fromBufferAttribute(V,q),P[G+K+4]=s.x,P[G+K+5]=s.y,P[G+K+6]=s.z,P[G+K+7]=0),p===!0&&(s.fromBufferAttribute($,q),P[G+K+8]=s.x,P[G+K+9]=s.y,P[G+K+10]=s.z,P[G+K+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:N,size:new Ft(C,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function pp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const $0=new Oe,Pc=new k0(1,1),X0=new D0,q0=new Oh,Y0=new B0,Dc=[],Lc=[],Ic=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function us(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Dc[s];if(r===void 0&&(r=new Float32Array(s),Dc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Qr(n,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function _p(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function xp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ye(e,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),be(e,i)}}function Mp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ye(e,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),be(e,i)}}function Sp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ye(e,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),be(e,i)}}function yp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function Ep(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function Tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function wp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function Rp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function Cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function Pp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pc.compareFunction=C0,r=Pc):r=$0,e.setTexture2D(t||r,s)}function Dp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||q0,s)}function Lp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Y0,s)}function Ip(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||X0,s)}function Up(n){switch(n){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return vp;case 35674:return xp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return Ep;case 35669:case 35673:return Tp;case 5125:return wp;case 36294:return Ap;case 36295:return Rp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Np(n,t){n.uniform1fv(this.addr,t)}function Fp(n,t){const e=us(t,this.size,2);n.uniform2fv(this.addr,e)}function Op(n,t){const e=us(t,this.size,3);n.uniform3fv(this.addr,e)}function Bp(n,t){const e=us(t,this.size,4);n.uniform4fv(this.addr,e)}function zp(n,t){const e=us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kp(n,t){const e=us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vp(n,t){const e=us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hp(n,t){n.uniform1iv(this.addr,t)}function Gp(n,t){n.uniform2iv(this.addr,t)}function Wp(n,t){n.uniform3iv(this.addr,t)}function $p(n,t){n.uniform4iv(this.addr,t)}function Xp(n,t){n.uniform1uiv(this.addr,t)}function qp(n,t){n.uniform2uiv(this.addr,t)}function Yp(n,t){n.uniform3uiv(this.addr,t)}function jp(n,t){n.uniform4uiv(this.addr,t)}function Kp(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$0,r[a])}function Zp(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||q0,r[a])}function Jp(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Y0,r[a])}function Qp(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||X0,r[a])}function t2(n){switch(n){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Vp;case 5124:case 35670:return Hp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return $p;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}class e2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Up(e.type)}}class n2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t2(e.type)}}class i2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Fc(n,t){n.seq.push(t),n.map[t.id]=t}function s2(n,t,e){const i=n.name,s=i.length;for(Ba.lastIndex=0;;){const r=Ba.exec(i),a=Ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fc(e,c===void 0?new e2(o,n,t):new n2(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new i2(o),Fc(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);s2(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Oc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const r2=37297;let a2=0;function o2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Bc=new kt;function l2(n){Kt._getMatrix(Bc,Kt.workingColorSpace,n);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case zr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+o2(n.getShaderSource(t),o)}else return r}function c2(n,t){const e=l2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function u2(n,t){let e;switch(t){case uh:e="Linear";break;case hh:e="Reinhard";break;case dh:e="Cineon";break;case fh:e="ACESFilmic";break;case mh:e="AgX";break;case gh:e="Neutral";break;case ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new R;function h2(){Kt.getLuminanceCoefficients(vr);const n=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function f2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function p2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Es(n){return n!==""}function kc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(n){return n.replace(m2,_2)}const g2=new Map;function _2(n,t){let e=Vt[t];if(e===void 0){const i=g2.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}const v2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(n){return n.replace(v2,x2)}function x2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function M2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===v0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function S2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y2(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===rs&&(t="ENVMAP_MODE_REFRACTION"),t}function b2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function E2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function T2(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=M2(e),c=S2(e),h=y2(e),u=b2(e),f=E2(e),m=d2(e),_=f2(r),g=s.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),d.length>0&&(d+=`
`)):(p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),d=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==jn?u2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,c2("linearToOutputTexel",e.outputColorSpace),h2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=qo(a),a=kc(a,e),a=Vc(a,e),o=qo(o),o=kc(o,e),o=Vc(o,e),a=Hc(a),o=Hc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+p+a,M=E+d+o,C=Oc(s,s.VERTEX_SHADER,b),A=Oc(s,s.FRAGMENT_SHADER,M);s.attachShader(g,C),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(g)||"",V=s.getShaderInfoLog(C)||"",$=s.getShaderInfoLog(A)||"",G=B.trim(),q=V.trim(),K=$.trim();let H=!0,at=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,C,A);else{const et=zc(s,C,"vertex"),St=zc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+et+`
`+St)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(q===""||K==="")&&(at=!1);at&&(D.diagnostics={runnable:H,programLog:G,vertexShader:{log:q,prefix:p},fragmentShader:{log:K,prefix:d}})}s.deleteShader(C),s.deleteShader(A),N=new Or(s,g),y=p2(s,g)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,r2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let w2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new R2(t),e.set(t,i)),i}}class R2{constructor(t){this.id=w2++,this.code=t,this.usedTimes=0}}function C2(n,t,e,i,s,r,a){const o=new L0,l=new A2,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,D,B,V){const $=B.fog,G=V.geometry,q=y.isMeshStandardMaterial?B.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),H=K&&K.mapping===Kr?K.image.height:null,at=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,St=et!==void 0?et.length:0;let Bt=0;G.morphAttributes.position!==void 0&&(Bt=1),G.morphAttributes.normal!==void 0&&(Bt=2),G.morphAttributes.color!==void 0&&(Bt=3);let Jt,ee,qt,Y;if(at){const Qt=gn[at];Jt=Qt.vertexShader,ee=Qt.fragmentShader}else Jt=y.vertexShader,ee=y.fragmentShader,l.update(y),qt=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);const Z=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),O=V.isInstancedMesh===!0,dt=V.isBatchedMesh===!0,$t=!!y.map,Rt=!!y.matcap,w=!!K,Nt=!!y.aoMap,vt=!!y.lightMap,ft=!!y.bumpMap,ht=!!y.normalMap,Yt=!!y.displacementMap,gt=!!y.emissiveMap,Lt=!!y.metalnessMap,Ee=!!y.roughnessMap,_e=y.anisotropy>0,T=y.clearcoat>0,v=y.dispersion>0,F=y.iridescence>0,X=y.sheen>0,J=y.transmission>0,W=_e&&!!y.anisotropyMap,Tt=T&&!!y.clearcoatMap,st=T&&!!y.clearcoatNormalMap,yt=T&&!!y.clearcoatRoughnessMap,bt=F&&!!y.iridescenceMap,nt=F&&!!y.iridescenceThicknessMap,ut=X&&!!y.sheenColorMap,Pt=X&&!!y.sheenRoughnessMap,Et=!!y.specularMap,lt=!!y.specularColorMap,zt=!!y.specularIntensityMap,L=J&&!!y.transmissionMap,it=J&&!!y.thicknessMap,rt=!!y.gradientMap,_t=!!y.alphaMap,Q=y.alphaTest>0,j=!!y.alphaHash,Mt=!!y.extensions;let Ot=jn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const oe={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:ee,defines:y.defines,customVertexShaderID:qt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:dt,batchingColor:dt&&V._colorsTexture!==null,instancing:O,instancingColor:O&&V.instanceColor!==null,instancingMorph:O&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:as,alphaToCoverage:!!y.alphaToCoverage,map:$t,matcap:Rt,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:H,aoMap:Nt,lightMap:vt,bumpMap:ft,normalMap:ht,displacementMap:f&&Yt,emissiveMap:gt,normalMapObjectSpace:ht&&y.normalMapType===Mh,normalMapTangentSpace:ht&&y.normalMapType===R0,metalnessMap:Lt,roughnessMap:Ee,anisotropy:_e,anisotropyMap:W,clearcoat:T,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:v,iridescence:F,iridescenceMap:bt,iridescenceThicknessMap:nt,sheen:X,sheenColorMap:ut,sheenRoughnessMap:Pt,specularMap:Et,specularColorMap:lt,specularIntensityMap:zt,transmission:J,transmissionMap:L,thicknessMap:it,gradientMap:rt,opaque:y.transparent===!1&&y.blending===Zi&&y.alphaToCoverage===!1,alphaMap:_t,alphaTest:Q,alphaHash:j,combine:y.combine,mapUv:$t&&g(y.map.channel),aoMapUv:Nt&&g(y.aoMap.channel),lightMapUv:vt&&g(y.lightMap.channel),bumpMapUv:ft&&g(y.bumpMap.channel),normalMapUv:ht&&g(y.normalMap.channel),displacementMapUv:Yt&&g(y.displacementMap.channel),emissiveMapUv:gt&&g(y.emissiveMap.channel),metalnessMapUv:Lt&&g(y.metalnessMap.channel),roughnessMapUv:Ee&&g(y.roughnessMap.channel),anisotropyMapUv:W&&g(y.anisotropyMap.channel),clearcoatMapUv:Tt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(y.sheenRoughnessMap.channel),specularMapUv:Et&&g(y.specularMap.channel),specularColorMapUv:lt&&g(y.specularColorMap.channel),specularIntensityMapUv:zt&&g(y.specularIntensityMap.channel),transmissionMapUv:L&&g(y.transmissionMap.channel),thicknessMapUv:it&&g(y.thicknessMap.channel),alphaMapUv:_t&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ht||_e),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&($t||_t),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:$t&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===ie,decodeVideoTextureEmissive:gt&&y.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(y.emissiveMap.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Ie,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)S.push(D),S.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function E(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=_[y.type];let D;if(S){const B=gn[S];D=Kh.clone(B.uniforms)}else D=y.uniforms;return D}function C(y,S){let D;for(let B=0,V=h.length;B<V;B++){const $=h[B];if($.cacheKey===S){D=$,++D.usedTimes;break}}return D===void 0&&(D=new T2(n,S,y,r),h.push(D)),D}function A(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:N}}function P2(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function D2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $c(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,f,m,_,g,p){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=p),t++,d}function o(u,f,m,_,g,p){const d=a(u,f,m,_,g,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,f,m,_,g,p){const d=a(u,f,m,_,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||D2),i.length>1&&i.sort(f||Wc),s.length>1&&s.sort(f||Wc)}function h(){for(let u=t,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function L2(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new $c,n.set(i,[a])):s>=r.length?(a=new $c,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function I2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ut};break;case"SpotLight":e={position:new R,direction:new R,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function U2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let N2=0;function F2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function O2(n){const t=new I2,e=U2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,r=new de,a=new de;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,_=0,g=0,p=0,d=0,E=0,b=0,M=0,C=0,A=0,P=0;c.sort(F2);for(let y=0,S=c.length;y<S;y++){const D=c[y],B=D.color,V=D.intensity,$=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*V,u+=B.g*V,f+=B.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],V);P++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,H=e.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=D.shadow.matrix,E++}i.directional[m]=q,m++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(B).multiplyScalar(V),q.distance=$,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[g]=q;const K=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[g]=K.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=G,M++}g++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(B).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=q,p++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const K=D.shadow,H=e.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=D.shadow.matrix,b++}i.point[_]=q,_++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[d]=q,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==p||N.hemiLength!==d||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==C||N.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,N.directionalLength=m,N.pointLength=_,N.spotLength=g,N.rectAreaLength=p,N.hemiLength=d,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=C,N.numLightProbes=P,i.version=N2++)}function l(c,h){let u=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const b=c[d];if(b.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(b.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Xc(n){const t=new O2(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function B2(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Xc(n),t.set(s,[o])):r>=a.length?(o=new Xc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k2=`uniform sampler2D shadow_pass;
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
}`;function V2(n,t,e){let i=new xl;const s=new Ft,r=new Ft,a=new re,o=new od({depthPacking:xh}),l=new ld,c={},h=e.maxTextureSize,u={[Jn]:Ie,[Ie]:Jn,[_n]:_n},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:z2,fragmentShader:k2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Se;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ae(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let d=this.type;this.render=function(A,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Yn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=d!==Rn&&this.type===Rn,$=d===Rn&&this.type!==Rn;for(let G=0,q=A.length;G<q;G++){const K=A[G],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const at=H.getFrameExtents();if(s.multiply(at),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||V===!0||$===!0){const St=this.type!==Rn?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new xi(s.x,s.y,St),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const et=H.getViewportCount();for(let St=0;St<et;St++){const Bt=H.getViewport(St);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(a),H.updateMatrices(K,St),i=H.getFrustum(),M(P,N,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Rn&&E(H,N),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,S,D)};function E(A,P){const N=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,N,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,N,m,g,null)}function b(A,P,N,y){let S=null;const D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=S.uuid,V=P.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let G=$[V];G===void 0&&(G=S.clone(),$[V]=G,P.addEventListener("dispose",C)),S=G}if(S.visible=P.visible,S.wireframe=P.wireframe,y===Rn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=N}return S}function M(A,P,N,y,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const V=t.update(A),$=A.material;if(Array.isArray($)){const G=V.groups;for(let q=0,K=G.length;q<K;q++){const H=G[q],at=$[H.materialIndex];if(at&&at.visible){const et=b(A,at,y,S);A.onBeforeShadow(n,A,P,N,V,et,H),n.renderBufferDirect(N,null,V,et,A,H),A.onAfterShadow(n,A,P,N,V,et,H)}}}else if($.visible){const G=b(A,$,y,S);A.onBeforeShadow(n,A,P,N,V,G,null),n.renderBufferDirect(N,null,V,G,A,null),A.onAfterShadow(n,A,P,N,V,G,null)}}const B=A.children;for(let V=0,$=B.length;V<$;V++)M(B[V],P,N,y,S)}function C(A){A.target.removeEventListener("dispose",C);for(const N in c){const y=c[N],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const H2={[so]:ro,[ao]:co,[oo]:uo,[is]:lo,[ro]:so,[co]:ao,[uo]:oo,[lo]:is};function G2(n,t){function e(){let L=!1;const it=new re;let rt=null;const _t=new re(0,0,0,0);return{setMask:function(Q){rt!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),rt=Q)},setLocked:function(Q){L=Q},setClear:function(Q,j,Mt,Ot,oe){oe===!0&&(Q*=Ot,j*=Ot,Mt*=Ot),it.set(Q,j,Mt,Ot),_t.equals(it)===!1&&(n.clearColor(Q,j,Mt,Ot),_t.copy(it))},reset:function(){L=!1,rt=null,_t.set(-1,0,0,0)}}}function i(){let L=!1,it=!1,rt=null,_t=null,Q=null;return{setReversed:function(j){if(it!==j){const Mt=t.get("EXT_clip_control");j?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),it=j;const Ot=Q;Q=null,this.setClear(Ot)}},getReversed:function(){return it},setTest:function(j){j?Z(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(j){rt!==j&&!L&&(n.depthMask(j),rt=j)},setFunc:function(j){if(it&&(j=H2[j]),_t!==j){switch(j){case so:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case ao:n.depthFunc(n.LESS);break;case is:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case lo:n.depthFunc(n.GEQUAL);break;case co:n.depthFunc(n.GREATER);break;case uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=j}},setLocked:function(j){L=j},setClear:function(j){Q!==j&&(it&&(j=1-j),n.clearDepth(j),Q=j)},reset:function(){L=!1,rt=null,_t=null,Q=null,it=!1}}}function s(){let L=!1,it=null,rt=null,_t=null,Q=null,j=null,Mt=null,Ot=null,oe=null;return{setTest:function(Qt){L||(Qt?Z(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!L&&(n.stencilMask(Qt),it=Qt)},setFunc:function(Qt,yn,pn){(rt!==Qt||_t!==yn||Q!==pn)&&(n.stencilFunc(Qt,yn,pn),rt=Qt,_t=yn,Q=pn)},setOp:function(Qt,yn,pn){(j!==Qt||Mt!==yn||Ot!==pn)&&(n.stencilOp(Qt,yn,pn),j=Qt,Mt=yn,Ot=pn)},setLocked:function(Qt){L=Qt},setClear:function(Qt){oe!==Qt&&(n.clearStencil(Qt),oe=Qt)},reset:function(){L=!1,it=null,rt=null,_t=null,Q=null,j=null,Mt=null,Ot=null,oe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,d=null,E=null,b=null,M=null,C=null,A=null,P=new Ut(0,0,0),N=0,y=!1,S=null,D=null,B=null,V=null,$=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=K>=2);let at=null,et={};const St=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),Jt=new re().fromArray(St),ee=new re().fromArray(Bt);function qt(L,it,rt,_t){const Q=new Uint8Array(4),j=n.createTexture();n.bindTexture(L,j),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<rt;Mt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(it+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return j}const Y={};Y[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(is),ft(!1),ht(Gl),Z(n.CULL_FACE),Nt(Yn);function Z(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function mt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function O(L,it){return u[L]!==it?(n.bindFramebuffer(L,it),u[L]=it,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=it),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=it),!0):!1}function dt(L,it){let rt=m,_t=!1;if(L){rt=f.get(it),rt===void 0&&(rt=[],f.set(it,rt));const Q=L.textures;if(rt.length!==Q.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let j=0,Mt=Q.length;j<Mt;j++)rt[j]=n.COLOR_ATTACHMENT0+j;rt.length=Q.length,_t=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,_t=!0);_t&&n.drawBuffers(rt)}function $t(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const Rt={[ci]:n.FUNC_ADD,[$u]:n.FUNC_SUBTRACT,[Xu]:n.FUNC_REVERSE_SUBTRACT};Rt[qu]=n.MIN,Rt[Yu]=n.MAX;const w={[ju]:n.ZERO,[Ku]:n.ONE,[Zu]:n.SRC_COLOR,[no]:n.SRC_ALPHA,[ih]:n.SRC_ALPHA_SATURATE,[eh]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[io]:n.ONE_MINUS_SRC_ALPHA,[nh]:n.ONE_MINUS_DST_COLOR,[th]:n.ONE_MINUS_DST_ALPHA,[sh]:n.CONSTANT_COLOR,[rh]:n.ONE_MINUS_CONSTANT_COLOR,[ah]:n.CONSTANT_ALPHA,[oh]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(L,it,rt,_t,Q,j,Mt,Ot,oe,Qt){if(L===Yn){g===!0&&(mt(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),L!==Wu){if(L!==p||Qt!==y){if((d!==ci||M!==ci)&&(n.blendEquation(n.FUNC_ADD),d=ci,M=ci),Qt)switch(L){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sn:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,C=null,A=null,P.set(0,0,0),N=0,p=L,y=Qt}return}Q=Q||it,j=j||rt,Mt=Mt||_t,(it!==d||Q!==M)&&(n.blendEquationSeparate(Rt[it],Rt[Q]),d=it,M=Q),(rt!==E||_t!==b||j!==C||Mt!==A)&&(n.blendFuncSeparate(w[rt],w[_t],w[j],w[Mt]),E=rt,b=_t,C=j,A=Mt),(Ot.equals(P)===!1||oe!==N)&&(n.blendColor(Ot.r,Ot.g,Ot.b,oe),P.copy(Ot),N=oe),p=L,y=!1}function vt(L,it){L.side===_n?mt(n.CULL_FACE):Z(n.CULL_FACE);let rt=L.side===Ie;it&&(rt=!rt),ft(rt),L.blending===Zi&&L.transparent===!1?Nt(Yn):Nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const _t=L.stencilWrite;o.setTest(_t),_t&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),gt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function ht(L){L!==Vu?(Z(n.CULL_FACE),L!==D&&(L===Gl?n.cullFace(n.BACK):L===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),D=L}function Yt(L){L!==B&&(q&&n.lineWidth(L),B=L)}function gt(L,it,rt){L?(Z(n.POLYGON_OFFSET_FILL),(V!==it||$!==rt)&&(n.polygonOffset(it,rt),V=it,$=rt)):mt(n.POLYGON_OFFSET_FILL)}function Lt(L){L?Z(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function Ee(L){L===void 0&&(L=n.TEXTURE0+G-1),at!==L&&(n.activeTexture(L),at=L)}function _e(L,it,rt){rt===void 0&&(at===null?rt=n.TEXTURE0+G-1:rt=at);let _t=et[rt];_t===void 0&&(_t={type:void 0,texture:void 0},et[rt]=_t),(_t.type!==L||_t.texture!==it)&&(at!==rt&&(n.activeTexture(rt),at=rt),n.bindTexture(L,it||Y[L]),_t.type=L,_t.texture=it)}function T(){const L=et[at];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){Jt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function Pt(L){ee.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function Et(L,it){let rt=c.get(it);rt===void 0&&(rt=new WeakMap,c.set(it,rt));let _t=rt.get(L);_t===void 0&&(_t=n.getUniformBlockIndex(it,L.name),rt.set(L,_t))}function lt(L,it){const _t=c.get(it).get(L);l.get(it)!==_t&&(n.uniformBlockBinding(it,_t,L.__bindingPointIndex),l.set(it,_t))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},at=null,et={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,d=null,E=null,b=null,M=null,C=null,A=null,P=new Ut(0,0,0),N=0,y=!1,S=null,D=null,B=null,V=null,$=null,Jt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:mt,bindFramebuffer:O,drawBuffers:dt,useProgram:$t,setBlending:Nt,setMaterial:vt,setFlipSided:ft,setCullFace:ht,setLineWidth:Yt,setPolygonOffset:gt,setScissorTest:Lt,activeTexture:Ee,bindTexture:_e,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:bt,texImage3D:nt,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:yt,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Tt,scissor:ut,viewport:Pt,reset:zt}}function W2(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return m?new OffscreenCanvas(T,v):Vr("canvas")}function g(T,v,F){let X=1;const J=_e(T);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(X*J.width),Tt=Math.floor(X*J.height);u===void 0&&(u=_(W,Tt));const st=v?_(W,Tt):u;return st.width=W,st.height=Tt,st.getContext("2d").drawImage(T,0,0,W,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Tt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,v,F,X,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=v;if(v===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),v===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){const Tt=J?zr:Kt.getTransfer(X);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=Tt===ie?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(T,v){let F;return T?v===null||v===_i||v===Cs?F=n.DEPTH24_STENCIL8:v===Dn?F=n.DEPTH32F_STENCIL8:v===Rs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_i||v===Cs?F=n.DEPTH_COMPONENT24:v===Dn?F=n.DEPTH_COMPONENT32F:v===Rs&&(F=n.DEPTH_COMPONENT16),F}function C(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),N(v),v.isVideoTexture&&h.delete(v)}function P(T){const v=T.target;v.removeEventListener("dispose",P),S(v)}function N(T){const v=i.get(T);if(v.__webglInit===void 0)return;const F=T.source,X=f.get(F);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(T),Object.keys(X).length===0&&f.delete(F)}i.remove(T)}function y(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const F=T.source,X=f.get(F);delete X[v.__cacheKey],a.memory.textures--}function S(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[X][J]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,J=F.length;X<J;X++){const W=i.get(F[X]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(F[X])}i.remove(T)}let D=0;function B(){D=0}function V(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function $(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function G(T,v){const F=i.get(T);if(T.isVideoTexture&&Lt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,v);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function q(T,v){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function K(T,v){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function H(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Z(F,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const at={[po]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[mo]:n.MIRRORED_REPEAT},et={[hn]:n.NEAREST,[_h]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[Ge]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},St={[Sh]:n.NEVER,[Ah]:n.ALWAYS,[yh]:n.LESS,[C0]:n.LEQUAL,[bh]:n.EQUAL,[wh]:n.GEQUAL,[Eh]:n.GREATER,[Th]:n.NOTEQUAL};function Bt(T,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===aa||v.magFilter===Ys||v.magFilter===fi||v.minFilter===Ge||v.minFilter===aa||v.minFilter===Ys||v.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,at[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,at[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,at[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,et[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==Ys&&v.minFilter!==fi||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Jt(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const X=v.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const W=$(v);if(W!==T.__cacheKey){J[W]===void 0&&(J[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[W].usedTimes++;const Tt=J[T.__cacheKey];Tt!==void 0&&(J[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&y(v)),T.__cacheKey=W,T.__webglTexture=J[W].texture}return F}function ee(T,v,F){return Math.floor(Math.floor(T/F)/v)}function qt(T,v,F,X){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,X,v.data);else{W.sort((nt,ut)=>nt.start-ut.start);let Tt=0;for(let nt=1;nt<W.length;nt++){const ut=W[Tt],Pt=W[nt],Et=ut.start+ut.count,lt=ee(Pt.start,v.width,4),zt=ee(ut.start,v.width,4);Pt.start<=Et+1&&lt===zt&&ee(Pt.start+Pt.count-1,v.width,4)===lt?ut.count=Math.max(ut.count,Pt.start+Pt.count-ut.start):(++Tt,W[Tt]=Pt)}W.length=Tt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),bt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let nt=0,ut=W.length;nt<ut;nt++){const Pt=W[nt],Et=Math.floor(Pt.start/4),lt=Math.ceil(Pt.count/4),zt=Et%v.width,L=Math.floor(Et/v.width),it=lt,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,zt,L,it,rt,F,X,v.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function Y(T,v,F){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const J=Jt(T,v),W=v.source;e.bindTexture(X,T.__webglTexture,n.TEXTURE0+F);const Tt=i.get(W);if(W.version!==Tt.__version||J===!0){e.activeTexture(n.TEXTURE0+F);const st=Kt.getPrimaries(Kt.workingColorSpace),yt=v.colorSpace===Xn?null:Kt.getPrimaries(v.colorSpace),bt=v.colorSpace===Xn||st===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let nt=g(v.image,!1,s.maxTextureSize);nt=Ee(v,nt);const ut=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Et=b(v.internalFormat,ut,Pt,v.colorSpace,v.isVideoTexture);Bt(X,v);let lt;const zt=v.mipmaps,L=v.isVideoTexture!==!0,it=Tt.__version===void 0||J===!0,rt=W.dataReady,_t=C(v,nt);if(v.isDepthTexture)Et=M(v.format===Ds,v.type),it&&(L?e.texStorage2D(n.TEXTURE_2D,1,Et,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Et,nt.width,nt.height,0,ut,Pt,null));else if(v.isDataTexture)if(zt.length>0){L&&it&&e.texStorage2D(n.TEXTURE_2D,_t,Et,zt[0].width,zt[0].height);for(let Q=0,j=zt.length;Q<j;Q++)lt=zt[Q],L?rt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,ut,Pt,lt.data):e.texImage2D(n.TEXTURE_2D,Q,Et,lt.width,lt.height,0,ut,Pt,lt.data);v.generateMipmaps=!1}else L?(it&&e.texStorage2D(n.TEXTURE_2D,_t,Et,nt.width,nt.height),rt&&qt(v,nt,ut,Pt)):e.texImage2D(n.TEXTURE_2D,0,Et,nt.width,nt.height,0,ut,Pt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Et,zt[0].width,zt[0].height,nt.depth);for(let Q=0,j=zt.length;Q<j;Q++)if(lt=zt[Q],v.format!==un)if(ut!==null)if(L){if(rt)if(v.layerUpdates.size>0){const Mt=yc(lt.width,lt.height,v.format,v.type);for(const Ot of v.layerUpdates){const oe=lt.data.subarray(Ot*Mt/lt.data.BYTES_PER_ELEMENT,(Ot+1)*Mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ot,lt.width,lt.height,1,ut,oe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,nt.depth,ut,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Et,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,nt.depth,ut,Pt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Et,lt.width,lt.height,nt.depth,0,ut,Pt,lt.data)}else{L&&it&&e.texStorage2D(n.TEXTURE_2D,_t,Et,zt[0].width,zt[0].height);for(let Q=0,j=zt.length;Q<j;Q++)lt=zt[Q],v.format!==un?ut!==null?L?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,ut,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Et,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?rt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,ut,Pt,lt.data):e.texImage2D(n.TEXTURE_2D,Q,Et,lt.width,lt.height,0,ut,Pt,lt.data)}else if(v.isDataArrayTexture)if(L){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Et,nt.width,nt.height,nt.depth),rt)if(v.layerUpdates.size>0){const Q=yc(nt.width,nt.height,v.format,v.type);for(const j of v.layerUpdates){const Mt=nt.data.subarray(j*Q/nt.data.BYTES_PER_ELEMENT,(j+1)*Q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,ut,Pt,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Pt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,nt.width,nt.height,nt.depth,0,ut,Pt,nt.data);else if(v.isData3DTexture)L?(it&&e.texStorage3D(n.TEXTURE_3D,_t,Et,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Pt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Et,nt.width,nt.height,nt.depth,0,ut,Pt,nt.data);else if(v.isFramebufferTexture){if(it)if(L)e.texStorage2D(n.TEXTURE_2D,_t,Et,nt.width,nt.height);else{let Q=nt.width,j=nt.height;for(let Mt=0;Mt<_t;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,Et,Q,j,0,ut,Pt,null),Q>>=1,j>>=1}}else if(zt.length>0){if(L&&it){const Q=_e(zt[0]);e.texStorage2D(n.TEXTURE_2D,_t,Et,Q.width,Q.height)}for(let Q=0,j=zt.length;Q<j;Q++)lt=zt[Q],L?rt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ut,Pt,lt):e.texImage2D(n.TEXTURE_2D,Q,Et,ut,Pt,lt);v.generateMipmaps=!1}else if(L){if(it){const Q=_e(nt);e.texStorage2D(n.TEXTURE_2D,_t,Et,Q.width,Q.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Pt,nt)}else e.texImage2D(n.TEXTURE_2D,0,Et,ut,Pt,nt);p(v)&&d(X),Tt.__version=W.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Z(T,v,F){if(v.image.length!==6)return;const X=Jt(T,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const W=i.get(J);if(J.version!==W.__version||X===!0){e.activeTexture(n.TEXTURE0+F);const Tt=Kt.getPrimaries(Kt.workingColorSpace),st=v.colorSpace===Xn?null:Kt.getPrimaries(v.colorSpace),yt=v.colorSpace===Xn||Tt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const bt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!bt&&!nt?ut[j]=g(v.image[j],!0,s.maxCubemapSize):ut[j]=nt?v.image[j].image:v.image[j],ut[j]=Ee(v,ut[j]);const Pt=ut[0],Et=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),zt=b(v.internalFormat,Et,lt,v.colorSpace),L=v.isVideoTexture!==!0,it=W.__version===void 0||X===!0,rt=J.dataReady;let _t=C(v,Pt);Bt(n.TEXTURE_CUBE_MAP,v);let Q;if(bt){L&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,zt,Pt.width,Pt.height);for(let j=0;j<6;j++){Q=ut[j].mipmaps;for(let Mt=0;Mt<Q.length;Mt++){const Ot=Q[Mt];v.format!==un?Et!==null?L?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,Ot.width,Ot.height,Et,lt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,zt,Ot.width,Ot.height,0,Et,lt,Ot.data)}}}else{if(Q=v.mipmaps,L&&it){Q.length>0&&_t++;const j=_e(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,zt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){L?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,Et,lt,ut[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,ut[j].width,ut[j].height,0,Et,lt,ut[j].data);for(let Mt=0;Mt<Q.length;Mt++){const oe=Q[Mt].image[j].image;L?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,oe.width,oe.height,Et,lt,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,zt,oe.width,oe.height,0,Et,lt,oe.data)}}else{L?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et,lt,ut[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,Et,lt,ut[j]);for(let Mt=0;Mt<Q.length;Mt++){const Ot=Q[Mt];L?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,Et,lt,Ot.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,zt,Et,lt,Ot.image[j])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function mt(T,v,F,X,J,W){const Tt=r.convert(F.format,F.colorSpace),st=r.convert(F.type),yt=b(F.internalFormat,Tt,st,F.colorSpace),bt=i.get(v),nt=i.get(F);if(nt.__renderTarget=v,!bt.__hasExternalTextures){const ut=Math.max(1,v.width>>W),Pt=Math.max(1,v.height>>W);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,W,yt,ut,Pt,v.depth,0,Tt,st,null):e.texImage2D(J,W,yt,ut,Pt,0,Tt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,nt.__webglTexture,0,Yt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,nt.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function O(T,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,W=M(v.stencilBuffer,J),Tt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=Yt(v);gt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,W,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,T)}else{const X=v.textures;for(let J=0;J<X.length;J++){const W=X[J],Tt=r.convert(W.format,W.colorSpace),st=r.convert(W.type),yt=b(W.internalFormat,Tt,st,W.colorSpace),bt=Yt(v);F&&gt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,yt,v.width,v.height):gt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,yt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,yt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const J=X.__webglTexture,W=Yt(v);if(v.depthTexture.format===Ps)gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===Ds)gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function $t(T){const v=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?dt(v.__webglFramebuffer[0],T):dt(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),O(v.__webglDepthbuffer[X],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),O(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(T,v,F){const X=i.get(T);v!==void 0&&mt(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&$t(T)}function w(T){const v=T.texture,F=i.get(T),X=i.get(v);T.addEventListener("dispose",P);const J=T.textures,W=T.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let yt=0;yt<v.mipmaps.length;yt++)F.__webglFramebuffer[st][yt]=n.createFramebuffer()}else F.__webglFramebuffer[st]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)F.__webglFramebuffer[st]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let st=0,yt=J.length;st<yt;st++){const bt=i.get(J[st]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&gt(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const yt=J[st];F.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const bt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),ut=b(yt.internalFormat,bt,nt,yt.colorSpace,T.isXRRenderTarget===!0),Pt=Yt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ut,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,F.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),O(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)mt(F.__webglFramebuffer[st][yt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt);else mt(F.__webglFramebuffer[st],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let st=0,yt=J.length;st<yt;st++){const bt=J[st],nt=i.get(bt);let ut=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),Bt(ut,bt),mt(F.__webglFramebuffer,T,bt,n.COLOR_ATTACHMENT0+st,ut,0),p(bt)&&d(ut)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,X.__webglTexture),Bt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)mt(F.__webglFramebuffer[yt],T,v,n.COLOR_ATTACHMENT0,st,yt);else mt(F.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,st,0);p(v)&&d(st),e.unbindTexture()}T.depthBuffer&&$t(T)}function Nt(T){const v=T.textures;for(let F=0,X=v.length;F<X;F++){const J=v[F];if(p(J)){const W=E(T),Tt=i.get(J).__webglTexture;e.bindTexture(W,Tt),d(W),e.unbindTexture()}}}const vt=[],ft=[];function ht(T){if(T.samples>0){if(gt(T)===!1){const v=T.textures,F=T.width,X=T.height;let J=n.COLOR_BUFFER_BIT;const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(T),st=v.length>1;if(st)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const nt=i.get(v[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,J,n.NEAREST),l===!0&&(vt.length=0,ft.length=0,vt.push(n.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(vt.push(W),ft.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const nt=i.get(v[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Yt(T){return Math.min(s.maxSamples,T.samples)}function gt(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Lt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Ee(T,v){const F=T.colorSpace,X=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==as&&F!==Xn&&(Kt.getTransfer(F)===ie?(X!==un||J!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function _e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Rt,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt}function $2(n,t){function e(i,s=Xn){let r;const a=Kt.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===y0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===b0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===M0)return n.BYTE;if(i===S0)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===ks)return n.HALF_FLOAT;if(i===E0)return n.ALPHA;if(i===T0)return n.RGB;if(i===un)return n.RGBA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===w0)return n.RED;if(i===ml)return n.RED_INTEGER;if(i===A0)return n.RG;if(i===gl)return n.RG_INTEGER;if(i===_l)return n.RGBA_INTEGER;if(i===Lr||i===Ir||i===Ur||i===Nr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===go||i===_o||i===vo||i===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===So||i===yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mo||i===So)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bo||i===Eo||i===To||i===wo||i===Ao||i===Ro||i===Co||i===Po||i===Do||i===Lo||i===Io||i===Uo||i===No||i===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Do)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===No)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===Bo||i===zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Oo)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Vo||i===Ho||i===Go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q2=`
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

}`;class Y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new V0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ze({vertexShader:X2,fragmentShader:q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j2 extends yi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new Y2,d={},E=e.getContextAttributes();let b=null,M=null;const C=[],A=[],P=new Ft;let N=null;const y=new Ke;y.viewport=new re;const S=new Ke;S.viewport=new re;const D=[y,S],B=new pd;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=C[Y];return Z===void 0&&(Z=new Ra,C[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=C[Y];return Z===void 0&&(Z=new Ra,C[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=C[Y];return Z===void 0&&(Z=new Ra,C[Y]=Z),Z.getHandSpace()};function G(Y){const Z=A.indexOf(Y.inputSource);if(Z===-1)return;const mt=C[Z];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<C.length;Y++){const Z=A[Y];Z!==null&&(A[Y]=null,C[Y].disconnect(Z))}V=null,$=null,p.reset();for(const Y in d)delete d[Y];t.setRenderTarget(b),m=null,f=null,u=null,s=null,M=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),E.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,O=null,dt=null;E.depth&&(dt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=E.stencil?Ds:Ps,O=E.stencil?Cs:_i);const $t={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new xi(f.textureWidth,f.textureHeight,{format:un,type:Mn,depthTexture:new k0(f.textureWidth,f.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new xi(m.framebufferWidth,m.framebufferHeight,{format:un,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Y){for(let Z=0;Z<Y.removed.length;Z++){const mt=Y.removed[Z],O=A.indexOf(mt);O>=0&&(A[O]=null,C[O].disconnect(mt))}for(let Z=0;Z<Y.added.length;Z++){const mt=Y.added[Z];let O=A.indexOf(mt);if(O===-1){for(let $t=0;$t<C.length;$t++)if($t>=A.length){A.push(mt),O=$t;break}else if(A[$t]===null){A[$t]=mt,O=$t;break}if(O===-1)break}const dt=C[O];dt&&dt.connect(mt)}}const H=new R,at=new R;function et(Y,Z,mt){H.setFromMatrixPosition(Z.matrixWorld),at.setFromMatrixPosition(mt.matrixWorld);const O=H.distanceTo(at),dt=Z.projectionMatrix.elements,$t=mt.projectionMatrix.elements,Rt=dt[14]/(dt[10]-1),w=dt[14]/(dt[10]+1),Nt=(dt[9]+1)/dt[5],vt=(dt[9]-1)/dt[5],ft=(dt[8]-1)/dt[0],ht=($t[8]+1)/$t[0],Yt=Rt*ft,gt=Rt*ht,Lt=O/(-ft+ht),Ee=Lt*-ft;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ee),Y.translateZ(Lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),dt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const _e=Rt+Lt,T=w+Lt,v=Yt-Ee,F=gt+(O-Ee),X=Nt*w/T*_e,J=vt*w/T*_e;Y.projectionMatrix.makePerspective(v,F,X,J,_e,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,mt=Y.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(mt=p.depthFar)),B.near=S.near=y.near=Z,B.far=S.far=y.far=mt,(V!==B.near||$!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,$=B.far),B.layers.mask=Y.layers.mask|6,y.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const O=Y.parent,dt=B.cameras;St(B,O);for(let $t=0;$t<dt.length;$t++)St(dt[$t],O);dt.length===2?et(B,y,S):B.projectionMatrix.copy(y.projectionMatrix),Bt(Y,B,O)};function Bt(Y,Z,mt){mt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Y){return d[Y]};let Jt=null;function ee(Y,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){const mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let O=!1;mt.length!==B.cameras.length&&(B.cameras.length=0,O=!0);for(let w=0;w<mt.length;w++){const Nt=mt[w];let vt=null;if(m!==null)vt=m.getViewport(Nt);else{const ht=u.getViewSubImage(f,Nt);vt=ht.viewport,w===0&&(t.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(M))}let ft=D[w];ft===void 0&&(ft=new Ke,ft.layers.enable(w),ft.viewport=new re,D[w]=ft),ft.matrix.fromArray(Nt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Nt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(vt.x,vt.y,vt.width,vt.height),w===0&&(B.matrix.copy(ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),O===!0&&B.cameras.push(ft)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();const w=u.getDepthInformation(mt[0]);w&&w.isValid&&w.texture&&p.init(w,s.renderState)}if(dt&&dt.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let w=0;w<mt.length;w++){const Nt=mt[w].camera;if(Nt){let vt=d[Nt];vt||(vt=new V0,d[Nt]=vt);const ft=u.getCameraImage(Nt);vt.sourceTexture=ft}}}}for(let mt=0;mt<C.length;mt++){const O=A[mt],dt=C[mt];O!==null&&dt!==void 0&&dt.update(O,Z,c||a)}Jt&&Jt(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const qt=new W0;qt.setAnimationLoop(ee),this.setAnimationLoop=function(Y){Jt=Y},this.dispose=function(){}}}const oi=new Sn,K2=new de;function Z2(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,F0(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ie&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ie&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d),b=E.envMap,M=E.envMapRotation;b&&(p.envMap.value=b,oi.copy(M),oi.x*=-1,oi.y*=-1,oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),p.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(oi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=b*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J2(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function c(E,b){let M=s[E.id];M===void 0&&(_(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",p));const C=b.program;i.updateUBOMapping(E,C);const A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){const b=u();E.__bindingPointIndex=b;const M=n.createBuffer(),C=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],M=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,P=M.length;A<P;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,S=N.length;y<S;y++){const D=N[y];if(m(D,A,y,C)===!0){const B=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let G=0;G<V.length;G++){const q=V[G],K=g(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+$,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,b,M,C){const A=E.value,P=b+"_"+M;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{const N=C[P];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[P]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(E){const b=E.uniforms;let M=0;const C=16;for(let P=0,N=b.length;P<N;P++){const y=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,D=y.length;S<D;S++){const B=y[S],V=Array.isArray(B.value)?B.value:[B.value];for(let $=0,G=V.length;$<G;$++){const q=V[$],K=g(q),H=M%C,at=H%K.boundary,et=H+at;M+=at,et!==0&&C-et<K.storage&&(M+=C-et),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=K.storage}}}const A=M%C;return A>0&&(M+=C-A),E.__size=M,E.__cache={},this}function g(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Q2{constructor(t={}){const{canvas:e=Ph(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,d=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=He;let A=0,P=0,N=null,y=-1,S=null;const D=new re,B=new re;let V=null;const $=new Ut(0);let G=0,q=e.width,K=e.height,H=1,at=null,et=null;const St=new re(0,0,q,K),Bt=new re(0,0,q,K);let Jt=!1;const ee=new xl;let qt=!1,Y=!1;const Z=new de,mt=new R,O=new re,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Rt(){return N===null?H:1}let w=i;function Nt(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",Q,!1),w===null){const I="webgl2";if(w=Nt(I,x),w===null)throw Nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let vt,ft,ht,Yt,gt,Lt,Ee,_e,T,v,F,X,J,W,Tt,st,yt,bt,nt,ut,Pt,Et,lt,zt;function L(){vt=new cp(w),vt.init(),Et=new $2(w,vt),ft=new np(w,vt,t,Et),ht=new G2(w,vt),ft.reversedDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Yt=new dp(w),gt=new P2,Lt=new W2(w,vt,ht,gt,ft,Et,Yt),Ee=new sp(M),_e=new lp(M),T=new _d(w),lt=new tp(w,T),v=new up(w,T,Yt,lt),F=new pp(w,v,T,Yt),nt=new fp(w,ft,Lt),st=new ip(gt),X=new C2(M,Ee,_e,vt,ft,lt,st),J=new Z2(M,gt),W=new L2,Tt=new B2(vt),bt=new Q1(M,Ee,_e,ht,F,m,l),yt=new V2(M,F,ft),zt=new J2(w,Yt,ft,ht),ut=new ep(w,vt,Yt),Pt=new hp(w,vt,Yt),Yt.programs=X.programs,M.capabilities=ft,M.extensions=vt,M.properties=gt,M.renderLists=W,M.shadowMap=yt,M.state=ht,M.info=Yt}L();const it=new j2(M,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=vt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=vt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(q,K,!1))},this.getSize=function(x){return x.set(q,K)},this.setSize=function(x,I,z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,K=I,e.width=Math.floor(x*H),e.height=Math.floor(I*H),z===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(q*H,K*H).floor()},this.setDrawingBufferSize=function(x,I,z){q=x,K=I,H=z,e.width=Math.floor(x*z),e.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(St)},this.setViewport=function(x,I,z,k){x.isVector4?St.set(x.x,x.y,x.z,x.w):St.set(x,I,z,k),ht.viewport(D.copy(St).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Bt)},this.setScissor=function(x,I,z,k){x.isVector4?Bt.set(x.x,x.y,x.z,x.w):Bt.set(x,I,z,k),ht.scissor(B.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(x){ht.setScissorTest(Jt=x)},this.setOpaqueSort=function(x){at=x},this.setTransparentSort=function(x){et=x},this.getClearColor=function(x){return x.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,z=!0){let k=0;if(x){let U=!1;if(N!==null){const tt=N.texture.format;U=tt===_l||tt===gl||tt===ml}if(U){const tt=N.texture.type,ct=tt===Mn||tt===_i||tt===Rs||tt===Cs||tt===fl||tt===pl,xt=bt.getClearColor(),pt=bt.getClearAlpha(),Ct=xt.r,It=xt.g,wt=xt.b;ct?(_[0]=Ct,_[1]=It,_[2]=wt,_[3]=pt,w.clearBufferuiv(w.COLOR,0,_)):(g[0]=Ct,g[1]=It,g[2]=wt,g[3]=pt,w.clearBufferiv(w.COLOR,0,g))}else k|=w.COLOR_BUFFER_BIT}I&&(k|=w.DEPTH_BUFFER_BIT),z&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),bt.dispose(),W.dispose(),Tt.dispose(),gt.dispose(),Ee.dispose(),_e.dispose(),F.dispose(),lt.dispose(),zt.dispose(),X.dispose(),it.dispose(),it.removeEventListener("sessionstart",pn),it.removeEventListener("sessionend",Ol),ti.stop()};function rt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=Yt.autoReset,I=yt.enabled,z=yt.autoUpdate,k=yt.needsUpdate,U=yt.type;L(),Yt.autoReset=x,yt.enabled=I,yt.autoUpdate=z,yt.needsUpdate=k,yt.type=U}function Q(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function j(x){const I=x.target;I.removeEventListener("dispose",j),Mt(I)}function Mt(x){Ot(x),gt.remove(x)}function Ot(x){const I=gt.get(x).programs;I!==void 0&&(I.forEach(function(z){X.releaseProgram(z)}),x.isShaderMaterial&&X.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,k,U,tt){I===null&&(I=dt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,xt=Nu(x,I,z,k,U);ht.setMaterial(k,ct);let pt=z.index,Ct=1;if(k.wireframe===!0){if(pt=v.getWireframeAttribute(z),pt===void 0)return;Ct=2}const It=z.drawRange,wt=z.attributes.position;let Xt=It.start*Ct,ne=(It.start+It.count)*Ct;tt!==null&&(Xt=Math.max(Xt,tt.start*Ct),ne=Math.min(ne,(tt.start+tt.count)*Ct)),pt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,pt.count)):wt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,wt.count));const me=ne-Xt;if(me<0||me===1/0)return;lt.setup(U,k,xt,z,pt);let ce,ae=ut;if(pt!==null&&(ce=T.get(pt),ae=Pt,ae.setIndex(ce)),U.isMesh)k.wireframe===!0?(ht.setLineWidth(k.wireframeLinewidth*Rt()),ae.setMode(w.LINES)):ae.setMode(w.TRIANGLES);else if(U.isLine){let At=k.linewidth;At===void 0&&(At=1),ht.setLineWidth(At*Rt()),U.isLineSegments?ae.setMode(w.LINES):U.isLineLoop?ae.setMode(w.LINE_LOOP):ae.setMode(w.LINE_STRIP)}else U.isPoints?ae.setMode(w.POINTS):U.isSprite&&ae.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ae.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const At=U._multiDrawStarts,fe=U._multiDrawCounts,jt=U._multiDrawCount,We=pt?T.get(pt).bytesPerElement:1,Ei=gt.get(k).currentProgram.getUniforms();for(let $e=0;$e<jt;$e++)Ei.setValue(w,"_gl_DrawID",$e),ae.render(At[$e]/We,fe[$e])}else if(U.isInstancedMesh)ae.renderInstances(Xt,me,U.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,fe=Math.min(z.instanceCount,At);ae.renderInstances(Xt,me,fe)}else ae.render(Xt,me)};function oe(x,I,z){x.transparent===!0&&x.side===_n&&x.forceSinglePass===!1?(x.side=Ie,x.needsUpdate=!0,qs(x,I,z),x.side=Jn,x.needsUpdate=!0,qs(x,I,z),x.side=_n):qs(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),d=Tt.get(z),d.init(I),b.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),x!==z&&x.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const xt=tt[ct];oe(xt,z,U),k.add(xt)}else oe(tt,z,U),k.add(tt)}),d=b.pop(),k},this.compileAsync=function(x,I,z=null){const k=this.compile(x,I,z);return new Promise(U=>{function tt(){if(k.forEach(function(ct){gt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(x);return}setTimeout(tt,10)}vt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Qt=null;function yn(x){Qt&&Qt(x)}function pn(){ti.stop()}function Ol(){ti.start()}const ti=new W0;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(x){Qt=x,it.setAnimationLoop(x),x===null?ti.stop():ti.start()},it.addEventListener("sessionstart",pn),it.addEventListener("sessionend",Ol),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,I,N),d=Tt.get(x,b.length),d.init(I),b.push(d),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ee.setFromProjectionMatrix(Z,vn,I.reversedDepth),Y=this.localClippingEnabled,qt=st.init(this.clippingPlanes,Y),p=W.get(x,E.length),p.init(),E.push(p),it.enabled===!0&&it.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&sa(tt,I,-1/0,M.sortObjects)}sa(x,I,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(at,et),$t=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,$t&&bt.addToRenderList(p,x),this.info.render.frame++,qt===!0&&st.beginShadows();const z=d.state.shadowsArray;yt.render(z,x,I),qt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,U=p.transmissive;if(d.setupLights(),I.isArrayCamera){const tt=I.cameras;if(U.length>0)for(let ct=0,xt=tt.length;ct<xt;ct++){const pt=tt[ct];zl(k,U,x,pt)}$t&&bt.render(x);for(let ct=0,xt=tt.length;ct<xt;ct++){const pt=tt[ct];Bl(p,x,pt,pt.viewport)}}else U.length>0&&zl(k,U,x,I),$t&&bt.render(x),Bl(p,x,I);N!==null&&P===0&&(Lt.updateMultisampleRenderTarget(N),Lt.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,I),lt.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],qt===!0&&st.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function sa(x,I,z,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ee.intersectsSprite(x)){k&&O.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);const ct=F.update(x),xt=x.material;xt.visible&&p.push(x,ct,xt,z,O.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ee.intersectsObject(x))){const ct=F.update(x),xt=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),O.copy(x.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),O.copy(ct.boundingSphere.center)),O.applyMatrix4(x.matrixWorld).applyMatrix4(Z)),Array.isArray(xt)){const pt=ct.groups;for(let Ct=0,It=pt.length;Ct<It;Ct++){const wt=pt[Ct],Xt=xt[wt.materialIndex];Xt&&Xt.visible&&p.push(x,ct,Xt,z,O.z,wt)}}else xt.visible&&p.push(x,ct,xt,z,O.z,null)}}const tt=x.children;for(let ct=0,xt=tt.length;ct<xt;ct++)sa(tt[ct],I,z,k)}function Bl(x,I,z,k){const U=x.opaque,tt=x.transmissive,ct=x.transparent;d.setupLightsView(z),qt===!0&&st.setGlobalState(M.clippingPlanes,z),k&&ht.viewport(D.copy(k)),U.length>0&&Xs(U,I,z),tt.length>0&&Xs(tt,I,z),ct.length>0&&Xs(ct,I,z),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function zl(x,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new xi(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?ks:Mn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[k.id],ct=k.viewport||D;tt.setSize(ct.z*M.transmissionResolutionScale,ct.w*M.transmissionResolutionScale);const xt=M.getRenderTarget(),pt=M.getActiveCubeFace(),Ct=M.getActiveMipmapLevel();M.setRenderTarget(tt),M.getClearColor($),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),$t&&bt.render(z);const It=M.toneMapping;M.toneMapping=jn;const wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),qt===!0&&st.setGlobalState(M.clippingPlanes,k),Xs(x,z,k),Lt.updateMultisampleRenderTarget(tt),Lt.updateRenderTargetMipmap(tt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ne=0,me=I.length;ne<me;ne++){const ce=I[ne],ae=ce.object,At=ce.geometry,fe=ce.material,jt=ce.group;if(fe.side===_n&&ae.layers.test(k.layers)){const We=fe.side;fe.side=Ie,fe.needsUpdate=!0,kl(ae,z,k,At,fe,jt),fe.side=We,fe.needsUpdate=!0,Xt=!0}}Xt===!0&&(Lt.updateMultisampleRenderTarget(tt),Lt.updateRenderTargetMipmap(tt))}M.setRenderTarget(xt,pt,Ct),M.setClearColor($,G),wt!==void 0&&(k.viewport=wt),M.toneMapping=It}function Xs(x,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,tt=x.length;U<tt;U++){const ct=x[U],xt=ct.object,pt=ct.geometry,Ct=ct.group;let It=ct.material;It.allowOverride===!0&&k!==null&&(It=k),xt.layers.test(z.layers)&&kl(xt,I,z,pt,It,Ct)}}function kl(x,I,z,k,U,tt){x.onBeforeRender(M,I,z,k,U,tt),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(M,I,z,k,x,tt),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,M.renderBufferDirect(z,I,k,U,x,tt),U.side=Jn,U.needsUpdate=!0,M.renderBufferDirect(z,I,k,U,x,tt),U.side=_n):M.renderBufferDirect(z,I,k,U,x,tt),x.onAfterRender(M,I,z,k,U,tt)}function qs(x,I,z){I.isScene!==!0&&(I=dt);const k=gt.get(x),U=d.state.lights,tt=d.state.shadowsArray,ct=U.state.version,xt=X.getParameters(x,U.state,tt,I,z),pt=X.getProgramCacheKey(xt);let Ct=k.programs;k.environment=x.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(x.isMeshStandardMaterial?_e:Ee).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ct===void 0&&(x.addEventListener("dispose",j),Ct=new Map,k.programs=Ct);let It=Ct.get(pt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===ct)return Hl(x,xt),It}else xt.uniforms=X.getUniforms(x),x.onBeforeCompile(xt,M),It=X.acquireProgram(xt,pt),Ct.set(pt,It),k.uniforms=xt.uniforms;const wt=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=st.uniform),Hl(x,xt),k.needsLights=Ou(x),k.lightsStateVersion=ct,k.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Vl(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Or.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Hl(x,I){const z=gt.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Nu(x,I,z,k,U){I.isScene!==!0&&(I=dt),Lt.resetTextureUnits();const tt=I.fog,ct=k.isMeshStandardMaterial?I.environment:null,xt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:as,pt=(k.isMeshStandardMaterial?_e:Ee).get(k.envMap||ct),Ct=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ne=!!z.morphAttributes.color;let me=jn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(me=M.toneMapping);const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=ce!==void 0?ce.length:0,At=gt.get(k),fe=d.state.lights;if(qt===!0&&(Y===!0||x!==S)){const Ne=x===S&&k.id===y;st.setState(k,x,Ne)}let jt=!1;k.version===At.__version?(At.needsLights&&At.lightsStateVersion!==fe.state.version||At.outputColorSpace!==xt||U.isBatchedMesh&&At.batching===!1||!U.isBatchedMesh&&At.batching===!0||U.isBatchedMesh&&At.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&At.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&At.instancing===!1||!U.isInstancedMesh&&At.instancing===!0||U.isSkinnedMesh&&At.skinning===!1||!U.isSkinnedMesh&&At.skinning===!0||U.isInstancedMesh&&At.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&At.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&At.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&At.instancingMorph===!1&&U.morphTexture!==null||At.envMap!==pt||k.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Ct||At.vertexTangents!==It||At.morphTargets!==wt||At.morphNormals!==Xt||At.morphColors!==ne||At.toneMapping!==me||At.morphTargetsCount!==ae)&&(jt=!0):(jt=!0,At.__version=k.version);let We=At.currentProgram;jt===!0&&(We=qs(k,I,U));let Ei=!1,$e=!1,hs=!1;const pe=We.getUniforms(),Je=At.uniforms;if(ht.useProgram(We.program)&&(Ei=!0,$e=!0,hs=!0),k.id!==y&&(y=k.id,$e=!0),Ei||S!==x){ht.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),pe.setValue(w,"projectionMatrix",x.projectionMatrix),pe.setValue(w,"viewMatrix",x.matrixWorldInverse);const Be=pe.map.cameraPosition;Be!==void 0&&Be.setValue(w,mt.setFromMatrixPosition(x.matrixWorld)),ft.logarithmicDepthBuffer&&pe.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,$e=!0,hs=!0)}if(U.isSkinnedMesh){pe.setOptional(w,U,"bindMatrix"),pe.setOptional(w,U,"bindMatrixInverse");const Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),pe.setValue(w,"boneTexture",Ne.boneTexture,Lt))}U.isBatchedMesh&&(pe.setOptional(w,U,"batchingTexture"),pe.setValue(w,"batchingTexture",U._matricesTexture,Lt),pe.setOptional(w,U,"batchingIdTexture"),pe.setValue(w,"batchingIdTexture",U._indirectTexture,Lt),pe.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&pe.setValue(w,"batchingColorTexture",U._colorsTexture,Lt));const Qe=z.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&nt.update(U,z,We),($e||At.receiveShadow!==U.receiveShadow)&&(At.receiveShadow=U.receiveShadow,pe.setValue(w,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Je.envMap.value=pt,Je.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Je.envMapIntensity.value=I.environmentIntensity),$e&&(pe.setValue(w,"toneMappingExposure",M.toneMappingExposure),At.needsLights&&Fu(Je,hs),tt&&k.fog===!0&&J.refreshFogUniforms(Je,tt),J.refreshMaterialUniforms(Je,k,H,K,d.state.transmissionRenderTarget[x.id]),Or.upload(w,Vl(At),Je,Lt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Or.upload(w,Vl(At),Je,Lt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(w,"center",U.center),pe.setValue(w,"modelViewMatrix",U.modelViewMatrix),pe.setValue(w,"normalMatrix",U.normalMatrix),pe.setValue(w,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ne=k.uniformsGroups;for(let Be=0,ra=Ne.length;Be<ra;Be++){const ei=Ne[Be];zt.update(ei,We),zt.bind(ei,We)}}return We}function Fu(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Ou(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,I,z){const k=gt.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),gt.get(x.texture).__webglTexture=I,gt.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const z=gt.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const Bu=w.createFramebuffer();this.setRenderTarget=function(x,I=0,z=0){N=x,A=I,P=z;let k=!0,U=null,tt=!1,ct=!1;if(x){const pt=gt.get(x);if(pt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(pt.__webglFramebuffer===void 0)Lt.setupRenderTarget(x);else if(pt.__hasExternalTextures)Lt.rebindTextures(x,gt.get(x.texture).__webglTexture,gt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const wt=x.depthTexture;if(pt.__boundDepthTexture!==wt){if(wt!==null&&gt.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(x)}}const Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);const It=gt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][z]:U=It[I],tt=!0):x.samples>0&&Lt.useMultisampledRTT(x)===!1?U=gt.get(x).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[z]:U=It,D.copy(x.viewport),B.copy(x.scissor),V=x.scissorTest}else D.copy(St).multiplyScalar(H).floor(),B.copy(Bt).multiplyScalar(H).floor(),V=Jt;if(z!==0&&(U=Bu),ht.bindFramebuffer(w.FRAMEBUFFER,U)&&k&&ht.drawBuffers(x,U),ht.viewport(D),ht.scissor(B),ht.setScissorTest(V),tt){const pt=gt.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,z)}else if(ct){const pt=I;for(let Ct=0;Ct<x.textures.length;Ct++){const It=gt.get(x.textures[Ct]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ct,It.__webglTexture,z,pt)}}else if(x!==null&&z!==0){const pt=gt.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,pt.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(x,I,z,k,U,tt,ct,xt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=gt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){ht.bindFramebuffer(w.FRAMEBUFFER,pt);try{const Ct=x.textures[xt],It=Ct.format,wt=Ct.type;if(!ft.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&z>=0&&z<=x.height-U&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+xt),w.readPixels(I,z,k,U,Et.convert(It),Et.convert(wt),tt))}finally{const Ct=N!==null?gt.get(N).__webglFramebuffer:null;ht.bindFramebuffer(w.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,k,U,tt,ct,xt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=gt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt)if(I>=0&&I<=x.width-k&&z>=0&&z<=x.height-U){ht.bindFramebuffer(w.FRAMEBUFFER,pt);const Ct=x.textures[xt],It=Ct.format,wt=Ct.type;if(!ft.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.bufferData(w.PIXEL_PACK_BUFFER,tt.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+xt),w.readPixels(I,z,k,U,Et.convert(It),Et.convert(wt),0);const ne=N!==null?gt.get(N).__webglFramebuffer:null;ht.bindFramebuffer(w.FRAMEBUFFER,ne);const me=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Dh(w,me,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,tt),w.deleteBuffer(Xt),w.deleteSync(me),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,z=0){const k=Math.pow(2,-z),U=Math.floor(x.image.width*k),tt=Math.floor(x.image.height*k),ct=I!==null?I.x:0,xt=I!==null?I.y:0;Lt.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,ct,xt,U,tt),ht.unbindTexture()};const zu=w.createFramebuffer(),ku=w.createFramebuffer();this.copyTextureToTexture=function(x,I,z=null,k=null,U=0,tt=null){tt===null&&(U!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=U,U=0):tt=0);let ct,xt,pt,Ct,It,wt,Xt,ne,me;const ce=x.isCompressedTexture?x.mipmaps[tt]:x.image;if(z!==null)ct=z.max.x-z.min.x,xt=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,Ct=z.min.x,It=z.min.y,wt=z.isBox3?z.min.z:0;else{const Qe=Math.pow(2,-U);ct=Math.floor(ce.width*Qe),xt=Math.floor(ce.height*Qe),x.isDataArrayTexture?pt=ce.depth:x.isData3DTexture?pt=Math.floor(ce.depth*Qe):pt=1,Ct=0,It=0,wt=0}k!==null?(Xt=k.x,ne=k.y,me=k.z):(Xt=0,ne=0,me=0);const ae=Et.convert(I.format),At=Et.convert(I.type);let fe;I.isData3DTexture?(Lt.setTexture3D(I,0),fe=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Lt.setTexture2DArray(I,0),fe=w.TEXTURE_2D_ARRAY):(Lt.setTexture2D(I,0),fe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=w.getParameter(w.UNPACK_ROW_LENGTH),We=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ei=w.getParameter(w.UNPACK_SKIP_PIXELS),$e=w.getParameter(w.UNPACK_SKIP_ROWS),hs=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ce.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ce.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ct),w.pixelStorei(w.UNPACK_SKIP_ROWS,It),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wt);const pe=x.isDataArrayTexture||x.isData3DTexture,Je=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Qe=gt.get(x),Ne=gt.get(I),Be=gt.get(Qe.__renderTarget),ra=gt.get(Ne.__renderTarget);ht.bindFramebuffer(w.READ_FRAMEBUFFER,Be.__webglFramebuffer),ht.bindFramebuffer(w.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let ei=0;ei<pt;ei++)pe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.get(x).__webglTexture,U,wt+ei),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.get(I).__webglTexture,tt,me+ei)),w.blitFramebuffer(Ct,It,ct,xt,Xt,ne,ct,xt,w.DEPTH_BUFFER_BIT,w.NEAREST);ht.bindFramebuffer(w.READ_FRAMEBUFFER,null),ht.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||gt.has(x)){const Qe=gt.get(x),Ne=gt.get(I);ht.bindFramebuffer(w.READ_FRAMEBUFFER,zu),ht.bindFramebuffer(w.DRAW_FRAMEBUFFER,ku);for(let Be=0;Be<pt;Be++)pe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Qe.__webglTexture,U,wt+Be):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Qe.__webglTexture,U),Je?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ne.__webglTexture,tt,me+Be):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ne.__webglTexture,tt),U!==0?w.blitFramebuffer(Ct,It,ct,xt,Xt,ne,ct,xt,w.COLOR_BUFFER_BIT,w.NEAREST):Je?w.copyTexSubImage3D(fe,tt,Xt,ne,me+Be,Ct,It,ct,xt):w.copyTexSubImage2D(fe,tt,Xt,ne,Ct,It,ct,xt);ht.bindFramebuffer(w.READ_FRAMEBUFFER,null),ht.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Je?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(fe,tt,Xt,ne,me,ct,xt,pt,ae,At,ce.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(fe,tt,Xt,ne,me,ct,xt,pt,ae,ce.data):w.texSubImage3D(fe,tt,Xt,ne,me,ct,xt,pt,ae,At,ce):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,tt,Xt,ne,ct,xt,ae,At,ce.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,tt,Xt,ne,ce.width,ce.height,ae,ce.data):w.texSubImage2D(w.TEXTURE_2D,tt,Xt,ne,ct,xt,ae,At,ce);w.pixelStorei(w.UNPACK_ROW_LENGTH,jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ei),w.pixelStorei(w.UNPACK_SKIP_ROWS,$e),w.pixelStorei(w.UNPACK_SKIP_IMAGES,hs),tt===0&&I.generateMipmaps&&w.generateMipmap(fe),ht.unbindTexture()},this.initRenderTarget=function(x){gt.get(x).__webglFramebuffer===void 0&&Lt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Lt.setTextureCube(x,0):x.isData3DTexture?Lt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Lt.setTexture2DArray(x,0):Lt.setTexture2D(x,0),ht.unbindTexture()},this.resetState=function(){A=0,P=0,N=null,ht.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}function tm(n){return n}function em(n){if(n==null)return tm;var t,e,i=n.scale[0],s=n.scale[1],r=n.translate[0],a=n.translate[1];return function(o,l){l||(t=e=0);var c=2,h=o.length,u=new Array(h);for(u[0]=(t+=o[0])*i+r,u[1]=(e+=o[1])*s+a;c<h;)u[c]=o[c],++c;return u}}function nm(n,t){for(var e,i=n.length,s=i-t;s<--i;)e=n[s],n[s++]=n[i],n[i]=e}function im(n,t){return typeof t=="string"&&(t=n.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return qc(n,e)})}:qc(n,t)}function qc(n,t){var e=t.id,i=t.bbox,s=t.properties==null?{}:t.properties,r=sm(n,t);return e==null&&i==null?{type:"Feature",properties:s,geometry:r}:i==null?{type:"Feature",id:e,properties:s,geometry:r}:{type:"Feature",id:e,bbox:i,properties:s,geometry:r}}function sm(n,t){var e=em(n.transform),i=n.arcs;function s(h,u){u.length&&u.pop();for(var f=i[h<0?~h:h],m=0,_=f.length;m<_;++m)u.push(e(f[m],m));h<0&&nm(u,_)}function r(h){return e(h)}function a(h){for(var u=[],f=0,m=h.length;f<m;++f)s(h[f],u);return u.length<2&&u.push(u[0]),u}function o(h){for(var u=a(h);u.length<4;)u.push(u[0]);return u}function l(h){return h.map(o)}function c(h){var u=h.type,f;switch(u){case"GeometryCollection":return{type:u,geometries:h.geometries.map(c)};case"Point":f=r(h.coordinates);break;case"MultiPoint":f=h.coordinates.map(r);break;case"LineString":f=a(h.arcs);break;case"MultiLineString":f=h.arcs.map(a);break;case"Polygon":f=l(h.arcs);break;case"MultiPolygon":f=h.arcs.map(l);break;default:return null}return{type:u,coordinates:f}}return c(t)}const rm={land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},am=JSON.parse("[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]]"),om={scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]},lm={objects:rm,arcs:am,transform:om},zi={ocean:"#1b3f63",oceanDeep:"#122d49",land:"#3f6145",coast:"#7ba383",graticule:"rgba(150, 190, 210, 0.13)"},$r=(n,t,e,i)=>[(n+180)/360*e,(90-t)/180*i];function Yc(n,t,e,i){for(const s of t){n.beginPath();for(let r=0;r<s.length;r++){const a=s[r],[o,l]=$r(a[0],a[1],e,i);r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill(),n.stroke()}}function cm(n=2048){const t=n,e=n/2,i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d");if(!s)return i;const r=s.createLinearGradient(0,0,0,e);r.addColorStop(0,zi.oceanDeep),r.addColorStop(.5,zi.ocean),r.addColorStop(1,zi.oceanDeep),s.fillStyle=r,s.fillRect(0,0,t,e),s.strokeStyle=zi.graticule,s.lineWidth=Math.max(1,t/2048);for(let c=-180;c<=180;c+=30){const[h]=$r(c,0,t,e);s.beginPath(),s.moveTo(h,0),s.lineTo(h,e),s.stroke()}for(let c=-60;c<=60;c+=30){const[,h]=$r(0,c,t,e);s.beginPath(),s.moveTo(0,h),s.lineTo(t,h),s.stroke()}const a=lm,o=im(a,a.objects.land),l=[];if(o.features)for(const c of o.features)c.geometry&&l.push(c.geometry);else o.geometry&&l.push(o.geometry);s.fillStyle=zi.land,s.strokeStyle=zi.coast,s.lineWidth=Math.max(1,t/1400),s.lineJoin="round";for(const c of l)if(c.type==="MultiPolygon")for(const h of c.coordinates)Yc(s,h,t,e);else Yc(s,c.coordinates,t,e);return i}function um(n,t){const i=n.width*4,s=(n.height-1)*4,r=t??document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d");if(!a)return r;a.clearRect(0,0,i,s);const o=a.createImageData(n.width,n.height);for(let c=0;c<n.width;c++)for(let h=0;h<n.height;h++){const u=n.values[c*n.height+h]??0,f=c>180?c-360:c,m=h+n.lat_start,[_,g]=$r(f,m,n.width,n.height),p=Math.min(n.width-1,Math.max(0,Math.round(_))),E=(Math.min(n.height-1,Math.max(0,Math.round(g)))*n.width+p)*4;o.data[E]=u,o.data[E+1]=u,o.data[E+2]=u,o.data[E+3]=255}const l=document.createElement("canvas");return l.width=n.width,l.height=n.height,l.getContext("2d")?.putImageData(o,0,0),a.filter=`blur(${4*.9}px)`,a.drawImage(l,0,0,i,s),a.filter="none",r}const bl=173.1446326846693,hm=14959787069098932e-8,Mi=.017453292519943295,Xr=57.29577951308232,dm=365.24217,jc=new Date("2000-01-01T12:00:00Z"),Cn=2*Math.PI,Gn=3600*(180/Math.PI),Yi=484813681109536e-20,fm=10800*60,pm=2*fm,mm=6378.1366,gm=mm/hm,j0=81.30056,El=.0002959122082855911,Yo=2825345909524226e-22,jo=8459715185680659e-23,Ko=1292024916781969e-23,Zo=1524358900784276e-23;function K0(n){if(n!==!0&&n!==!1)throw console.trace(),`Value is not boolean: ${n}`;return n}function Kn(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function ki(n){return n-Math.floor(n)}var Dt;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Dt||(Dt={}));const _m=[Dt.Star1,Dt.Star2,Dt.Star3,Dt.Star4,Dt.Star5,Dt.Star6,Dt.Star7,Dt.Star8],vm=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function xm(n){const t=_m.indexOf(n);return t>=0?vm[t]:null}function Tl(n){const t=xm(n);return t&&t.dist>0?t:null}var dn;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(dn||(dn={}));const Ln={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function Mm(n){var t,e,i,s,r,a,o;const l=2e3+(n-14)/dm;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,10583.6-1014.41*t+33.78311*e-5.952053*i-.1798452*s+.022174192*r+.0090316521*a):l<1600?(t=(l-1e3)/100,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,1574.2-556.01*t+71.23472*e+.319781*i-.8503463*s-.005050998*r+.0083572073*a):l<1700?(t=l-1600,e=t*t,i=t*e,120-.9808*t-.01532*e+i/7129):l<1800?(t=l-1700,e=t*t,i=t*e,s=e*e,8.83+.1603*t-.0059285*e+13336e-8*i-s/1174e3):l<1860?(t=l-1800,e=t*t,i=t*e,s=e*e,r=e*i,a=i*i,o=i*s,13.72-.332447*t+.0068612*e+.0041116*i-37436e-8*s+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(t=l-1860,e=t*t,i=t*e,s=e*e,r=e*i,7.62+.5737*t-.251754*e+.01680668*i-.0004473624*s+r/233174):l<1920?(t=l-1900,e=t*t,i=t*e,s=e*e,-2.79+1.494119*t-.0598939*e+.0061966*i-197e-6*s):l<1941?(t=l-1920,e=t*t,i=t*e,21.2+.84493*t-.0761*e+.0020936*i):l<1961?(t=l-1950,e=t*t,i=t*e,29.07+.407*t-e/233+i/2547):l<1986?(t=l-1975,e=t*t,i=t*e,45.45+1.067*t-e/260-i/718):l<2005?(t=l-2e3,e=t*t,i=t*e,s=e*e,r=e*i,63.86+.3345*t-.060374*e+.0017275*i+651814e-9*s+2373599e-11*r):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let Sm=Mm;function Kc(n){return n+Sm(n)/86400}class Qi{constructor(t){if(t instanceof Qi){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-jc.getTime())/e,this.tt=Kc(this.ut);return}if(Number.isFinite(t)){this.date=new Date(jc.getTime()+t*e),this.ut=t,this.tt=Kc(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new Qi(t);for(;;){const i=t-e.tt;if(Math.abs(i)<1e-12)return e;e=e.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(t){return new Qi(this.ut+t)}}function Ce(n){return n instanceof Qi?n:new Qi(n)}function ym(n){function t(f){return f%pm*Yi}const e=n.tt/36525,i=t(128710479305e-5+e*1295965810481e-4),s=t(335779.526232+e*17395272628478e-4),r=t(107226070369e-5+e*1602961601209e-3),a=t(450160.398036-e*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*e)*o+33386*l,h=(92052331+9086*e)*l+15377*o,u=2*(s-r+a);return o=Math.sin(u),l=Math.cos(u),c+=(-13170906-1675*e)*o-13696*l,h+=(5730336-3015*e)*l-4587*o,u=2*(s+a),o=Math.sin(u),l=Math.cos(u),c+=(-2276413-234*e)*o+2796*l,h+=(978459-485*e)*l+1374*o,u=2*a,o=Math.sin(u),l=Math.cos(u),c+=(2074554+207*e)*o-698*l,h+=(-897492+470*e)*l-291*o,o=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*e)*o+11817*l,h+=(73871-184*e)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+h*1e-7}}function Z0(n){var t=n.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var xr;function wl(n){if(!xr||Math.abs(xr.tt-n.tt)>1e-6){const t=ym(n),e=Z0(n),i=e+t.deps/3600;xr={tt:n.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*Mi)/15,mobl:e,tobl:i}}return xr}function bm(n,t){const e=n*Mi,i=Math.cos(e),s=Math.sin(e);return[t[0],t[1]*i-t[2]*s,t[1]*s+t[2]*i]}function Em(n,t){return bm(Z0(n),t)}function Tm(n){const t=n.tt/36525;function e(Rt,w){const Nt=[];let vt;for(vt=0;vt<=w-Rt;++vt)Nt.push(0);return{min:Rt,array:Nt}}function i(Rt,w,Nt,vt){const ft=[];for(let ht=0;ht<=w-Rt;++ht)ft.push(e(Nt,vt));return{min:Rt,array:ft}}function s(Rt,w,Nt){const vt=Rt.array[w-Rt.min];return vt.array[Nt-vt.min]}function r(Rt,w,Nt,vt){const ft=Rt.array[w-Rt.min];ft.array[Nt-ft.min]=vt}let a,o,l,c,h,u,f,m,_,g,p,d,E,b,M,C,A,P,N,y,S,D,B,V=i(-6,6,1,4),$=i(-6,6,1,4);function G(Rt,w){return s(V,Rt,w)}function q(Rt,w){return s($,Rt,w)}function K(Rt,w,Nt){return r(V,Rt,w,Nt)}function H(Rt,w,Nt){return r($,Rt,w,Nt)}function at(Rt,w,Nt,vt,ft){ft(Rt*Nt-w*vt,w*Nt+Rt*vt)}function et(Rt){return Math.sin(Cn*Rt)}f=t*t,_=0,B=0,p=0,d=3422.7;var St=et(.19833+.05611*t),Bt=et(.27869+.04508*t),Jt=et(.16827-.36903*t),ee=et(.34734-5.37261*t),qt=et(.10498-5.37899*t),Y=et(.42681-.41855*t),Z=et(.14943-5.37511*t);for(P=.84*St+.31*Bt+14.27*Jt+7.26*ee+.28*qt+.24*Y,N=2.94*St+.31*Bt+14.27*Jt+9.34*ee+1.12*qt+.83*Y,y=-6.4*St-1.89*Y,S=.21*St+.31*Bt+14.27*Jt-88.7*ee-15.3*qt+.24*Y-1.86*Z,D=P-y,m=-3332e-9*et(.59734-5.37261*t)-539e-9*et(.35498-5.37899*t)-64e-9*et(.39943-5.37511*t),E=Cn*ki(.60643382+1336.85522467*t-313e-8*f)+P/Gn,b=Cn*ki(.37489701+1325.55240982*t+2565e-8*f)+N/Gn,M=Cn*ki(.99312619+99.99735956*t-44e-8*f)+y/Gn,C=Cn*ki(.25909118+1342.2278298*t-892e-8*f)+S/Gn,A=Cn*ki(.82736186+1236.85308708*t-397e-8*f)+D/Gn,h=1;h<=4;++h){switch(h){case 1:l=b,o=4,c=1.000002208;break;case 2:l=M,o=3,c=.997504612-.002495388*t;break;case 3:l=C,o=4,c=1.000002708+139.978*m;break;case 4:l=A,o=6,c=1;break;default:throw`Internal error: I = ${h}`}for(K(0,h,1),K(1,h,Math.cos(l)*c),H(0,h,0),H(1,h,Math.sin(l)*c),u=2;u<=o;++u)at(G(u-1,h),q(u-1,h),G(1,h),q(1,h),(Rt,w)=>(K(u,h,Rt),H(u,h,w)));for(u=1;u<=o;++u)K(-u,h,G(u,h)),H(-u,h,-q(u,h))}function mt(Rt,w,Nt,vt){for(var ft={x:1,y:0},ht=[0,Rt,w,Nt,vt],Yt=1;Yt<=4;++Yt)ht[Yt]!==0&&at(ft.x,ft.y,G(ht[Yt],Yt),q(ht[Yt],Yt),(gt,Lt)=>(ft.x=gt,ft.y=Lt));return ft}function O(Rt,w,Nt,vt,ft,ht,Yt,gt){var Lt=mt(ft,ht,Yt,gt);_+=Rt*Lt.y,B+=w*Lt.y,p+=Nt*Lt.x,d+=vt*Lt.x}O(13.902,14.06,-.001,.2607,0,0,0,4),O(.403,-4.01,.394,.0023,0,0,0,3),O(2369.912,2373.36,.601,28.2333,0,0,0,2),O(-125.154,-112.79,-.725,-.9781,0,0,0,1),O(1.979,6.98,-.445,.0433,1,0,0,4),O(191.953,192.72,.029,3.0861,1,0,0,2),O(-8.466,-13.51,.455,-.1093,1,0,0,1),O(22639.5,22609.07,.079,186.5398,1,0,0,0),O(18.609,3.59,-.094,.0118,1,0,0,-1),O(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),O(3.215,5.44,.192,-.0386,1,0,0,-3),O(-38.428,-38.64,.001,.6008,1,0,0,-4),O(-.393,-1.43,-.092,.0086,1,0,0,-6),O(-.289,-1.59,.123,-.0053,0,1,0,4),O(-24.42,-25.1,.04,-.3,0,1,0,2),O(18.023,17.93,.007,.1494,0,1,0,1),O(-668.146,-126.98,-1.302,-.3997,0,1,0,0),O(.56,.32,-.001,-.0037,0,1,0,-1),O(-165.145,-165.06,.054,1.9178,0,1,0,-2),O(-1.877,-6.46,-.416,.0339,0,1,0,-4),O(.213,1.02,-.074,.0054,2,0,0,4),O(14.387,14.78,-.017,.2833,2,0,0,2),O(-.586,-1.2,.054,-.01,2,0,0,1),O(769.016,767.96,.107,10.1657,2,0,0,0),O(1.75,2.01,-.018,.0155,2,0,0,-1),O(-211.656,-152.53,5.679,-.3039,2,0,0,-2),O(1.225,.91,-.03,-.0088,2,0,0,-3),O(-30.773,-34.07,-.308,.3722,2,0,0,-4),O(-.57,-1.4,-.074,.0109,2,0,0,-6),O(-2.921,-11.75,.787,-.0484,1,1,0,2),O(1.267,1.52,-.022,.0164,1,1,0,1),O(-109.673,-115.18,.461,-.949,1,1,0,0),O(-205.962,-182.36,2.056,1.4437,1,1,0,-2),O(.233,.36,.012,-.0025,1,1,0,-3),O(-4.391,-9.66,-.471,.0673,1,1,0,-4),O(.283,1.53,-.111,.006,1,-1,0,4),O(14.577,31.7,-1.54,.2302,1,-1,0,2),O(147.687,138.76,.679,1.1528,1,-1,0,0),O(-1.089,.55,.021,0,1,-1,0,-1),O(28.475,23.59,-.443,-.2257,1,-1,0,-2),O(-.276,-.38,-.006,-.0036,1,-1,0,-3),O(.636,2.27,.146,-.0102,1,-1,0,-4),O(-.189,-1.68,.131,-.0028,0,2,0,2),O(-7.486,-.66,-.037,-.0086,0,2,0,0),O(-8.096,-16.35,-.74,.0918,0,2,0,-2),O(-5.741,-.04,0,-9e-4,0,0,2,2),O(.255,0,0,0,0,0,2,1),O(-411.608,-.2,0,-.0124,0,0,2,0),O(.584,.84,0,.0071,0,0,2,-1),O(-55.173,-52.14,0,-.1052,0,0,2,-2),O(.254,.25,0,-.0017,0,0,2,-3),O(.025,-1.67,0,.0031,0,0,2,-4),O(1.06,2.96,-.166,.0243,3,0,0,2),O(36.124,50.64,-1.3,.6215,3,0,0,0),O(-13.193,-16.4,.258,-.1187,3,0,0,-2),O(-1.187,-.74,.042,.0074,3,0,0,-4),O(-.293,-.31,-.002,.0046,3,0,0,-6),O(-.29,-1.45,.116,-.0051,2,1,0,2),O(-7.649,-10.56,.259,-.1038,2,1,0,0),O(-8.627,-7.59,.078,-.0192,2,1,0,-2),O(-2.74,-2.54,.022,.0324,2,1,0,-4),O(1.181,3.32,-.212,.0213,2,-1,0,2),O(9.703,11.67,-.151,.1268,2,-1,0,0),O(-.352,-.37,.001,-.0028,2,-1,0,-1),O(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),O(.36,.2,-.012,-.0043,2,-1,0,-4),O(-1.167,-1.25,.008,-.0106,1,2,0,0),O(-7.412,-6.12,.117,.0484,1,2,0,-2),O(-.311,-.65,-.032,.0044,1,2,0,-4),O(.757,1.82,-.105,.0112,1,-2,0,2),O(2.58,2.32,.027,.0196,1,-2,0,0),O(2.533,2.4,-.014,-.0212,1,-2,0,-2),O(-.344,-.57,-.025,.0036,0,3,0,-2),O(-.992,-.02,0,0,1,0,2,2),O(-45.099,-.02,0,-.001,1,0,2,0),O(-.179,-9.52,0,-.0833,1,0,2,-2),O(-.301,-.33,0,.0014,1,0,2,-4),O(-6.382,-3.37,0,-.0481,1,0,-2,2),O(39.528,85.13,0,-.7136,1,0,-2,0),O(9.366,.71,0,-.0112,1,0,-2,-2),O(.202,.02,0,0,1,0,-2,-4),O(.415,.1,0,.0013,0,1,2,0),O(-2.152,-2.26,0,-.0066,0,1,2,-2),O(-1.44,-1.3,0,.0014,0,1,-2,2),O(.384,-.04,0,0,0,1,-2,-2),O(1.938,3.6,-.145,.0401,4,0,0,0),O(-.952,-1.58,.052,-.013,4,0,0,-2),O(-.551,-.94,.032,-.0097,3,1,0,0),O(-.482,-.57,.005,-.0045,3,1,0,-2),O(.681,.96,-.026,.0115,3,-1,0,0),O(-.297,-.27,.002,-9e-4,2,2,0,-2),O(.254,.21,-.003,0,2,-2,0,-2),O(-.25,-.22,.004,.0014,1,3,0,-2),O(-3.996,0,0,4e-4,2,0,2,0),O(.557,-.75,0,-.009,2,0,2,-2),O(-.459,-.38,0,-.0053,2,0,-2,2),O(-1.298,.74,0,4e-4,2,0,-2,0),O(.538,1.14,0,-.0141,2,0,-2,-2),O(.263,.02,0,0,1,1,2,0),O(.426,.07,0,-6e-4,1,1,-2,-2),O(-.304,.03,0,3e-4,1,-1,2,0),O(-.372,-.19,0,-.0027,1,-1,-2,2),O(.418,0,0,0,0,0,4,0),O(-.33,-.04,0,0,3,0,2,0);function dt(Rt,w,Nt,vt,ft){return Rt*mt(w,Nt,vt,ft).y}g=0,g+=dt(-526.069,0,0,1,-2),g+=dt(-3.352,0,0,1,-4),g+=dt(44.297,1,0,1,-2),g+=dt(-6,1,0,1,-4),g+=dt(20.599,-1,0,1,0),g+=dt(-30.598,-1,0,1,-2),g+=dt(-24.649,-2,0,1,0),g+=dt(-2,-2,0,1,-2),g+=dt(-22.571,0,1,1,-2),g+=dt(10.985,0,-1,1,-2),_+=.82*et(.7736-62.5512*t)+.31*et(.0466-125.1025*t)+.35*et(.5785-25.1042*t)+.66*et(.4591+1335.8075*t)+.64*et(.313-91.568*t)+1.14*et(.148+1331.2898*t)+.21*et(.5918+1056.5859*t)+.44*et(.5784+1322.8595*t)+.24*et(.2275-5.7374*t)+.28*et(.2965+2.6929*t)+.33*et(.3132+6.3368*t),a=C+B/Gn;let $t=(1.000002708+139.978*m)*(18518.511+1.189+p)*Math.sin(a)-6.24*Math.sin(3*a)+g;return{geo_eclip_lon:Cn*ki((E+_/Gn)/Cn),geo_eclip_lat:Math.PI/(180*3600)*$t,distance_au:Gn*gm/(.999953253*d)}}function J0(n,t){return[n.rot[0][0]*t[0]+n.rot[1][0]*t[1]+n.rot[2][0]*t[2],n.rot[0][1]*t[0]+n.rot[1][1]*t[1]+n.rot[2][1]*t[2],n.rot[0][2]*t[0]+n.rot[1][2]*t[1]+n.rot[2][2]*t[2]]}function Jo(n,t,e){const i=Q0(t,e);return J0(i,n)}function Q0(n,t){const e=n.tt/36525;let i=84381.406,s=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,r=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+i,a=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;i*=Yi,s*=Yi,r*=Yi,a*=Yi;const o=Math.sin(i),l=Math.cos(i),c=Math.sin(-s),h=Math.cos(-s),u=Math.sin(-r),f=Math.cos(-r),m=Math.sin(a),_=Math.cos(a),g=_*h-c*m*f,p=_*c*l+m*f*h*l-o*m*u,d=_*c*o+m*f*h*o+l*m*u,E=-m*h-c*_*f,b=-m*c*l+_*f*h*l-o*_*u,M=-m*c*o+_*f*h*o+l*_*u,C=c*u,A=-u*h*l-o*f,P=-u*h*o+f*l;if(t===dn.Into2000)return new Us([[g,p,d],[E,b,M],[C,A,P]]);if(t===dn.From2000)return new Us([[g,E,C],[p,b,A],[d,M,P]]);throw"Invalid precess direction"}function wm(n){const t=.779057273264+.00273781191135448*n.ut,e=n.ut%1;let i=360*((t+e)%1);return i<0&&(i+=360),i}let Mr;function Am(n){if(!Mr||Mr.tt!==n.tt){const t=n.tt/36525;let e=15*wl(n).ee;const i=wm(n);let r=((e+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+i)%360/15;r<0&&(r+=24),Mr={tt:n.tt,st:r}}return Mr.st}function Rm(n){const t=Ce(n);return Am(t)}function Zc(n,t,e){const i=tu(t,e);return J0(i,n)}function tu(n,t){const e=wl(n),i=e.mobl*Mi,s=e.tobl*Mi,r=e.dpsi*Yi,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r),f=h,m=-u*a,_=-u*o,g=u*l,p=h*a*l+o*c,d=h*o*l-a*c,E=u*c,b=h*a*c-o*l,M=h*o*c+a*l;if(t===dn.From2000)return new Us([[f,g,E],[m,p,b],[_,d,M]]);if(t===dn.Into2000)return new Us([[f,m,_],[g,p,d],[E,b,M]]);throw"Invalid precess direction"}function Cm(n,t,e){return e===dn.Into2000?Jo(Zc(n,t,e),t,e):Zc(Jo(n,t,e),t,e)}class Re{constructor(t,e,i,s){this.x=t,this.y=e,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class qn{constructor(t,e,i,s,r,a,o){this.x=t,this.y=e,this.z=i,this.vx=s,this.vy=r,this.vz=a,this.t=o}}class eu{constructor(t,e,i){this.lat=Kn(t),this.lon=Kn(e),this.dist=Kn(i)}}class Pm{constructor(t,e,i,s){this.ra=Kn(t),this.dec=Kn(e),this.dist=Kn(i),this.vec=s}}class Us{constructor(t){this.rot=t}}class Dm{constructor(t,e,i){this.vec=t,this.elat=Kn(e),this.elon=Kn(i)}}function Lm(n){const t=Ce(n).AddDays(-1/bl),e=As(Ln.Earth,t),i=[-e.x,-e.y,-e.z],[s,r,a]=Cm(i,t,dn.From2000),o=Mi*wl(t).tobl,l=Math.cos(o),c=Math.sin(o),h=new Re(s,r,a,t);return Im(h,l,c)}function Im(n,t,e){const i=n.x,s=n.y*t+n.z*e,r=-n.y*e+n.z*t,a=Math.hypot(i,s);let o=0;a>0&&(o=Xr*Math.atan2(s,i),o<0&&(o+=360));let l=Xr*Math.atan2(r,a),c=new Re(i,s,r,n.t);return new Dm(c,l,o)}function Ns(n){const t=Ce(n),e=Tm(t),i=e.distance_au*Math.cos(e.geo_eclip_lat),s=[i*Math.cos(e.geo_eclip_lon),i*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=Em(t,s),a=Jo(r,t,dn.Into2000);return new Re(a[0],a[1],a[2],t)}function nu(n){const t=Ce(n),e=1e-5,i=t.AddDays(-e),s=t.AddDays(+e),r=Ns(i),a=Ns(s);return new qn((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*e),(a.y-r.y)/(2*e),(a.z-r.z)/(2*e),t)}function Um(n){const t=Ce(n),e=nu(t),i=1+j0;return new qn(e.x/i,e.y/i,e.z/i,e.vx/i,e.vy/i,e.vz/i,t)}function ts(n,t,e){let i=1,s=0;for(let r of n){let a=0;for(let[l,c,h]of r)a+=l*Math.cos(c+t*h);let o=i*a;e&&(o%=Cn),s+=o,i*=t}return s}function za(n,t){let e=1,i=0,s=0,r=0;for(let a of n){let o=0,l=0;for(let[c,h,u]of a){let f=h+t*u;o+=c*u*Math.sin(f),r>0&&(l+=c*Math.cos(f))}s+=r*i*l-e*o,i=e,e*=t,++r}return s}const Ts=365250,Qo=0,tl=1,el=2;function nl(n){return new Le(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function iu(n,t,e){const i=e*Math.cos(t),s=Math.cos(n),r=Math.sin(n);return[i*s,i*r,e*Math.sin(t)]}function As(n,t){const e=t.tt/Ts,i=ts(n[Qo],e,!0),s=ts(n[tl],e,!1),r=ts(n[el],e,!1),a=iu(i,s,r);return nl(a).ToAstroVector(t)}function il(n,t){const e=t/Ts,i=ts(n[Qo],e,!0),s=ts(n[tl],e,!1),r=ts(n[el],e,!1),a=za(n[Qo],e),o=za(n[tl],e),l=za(n[el],e),c=Math.cos(i),h=Math.sin(i),u=Math.cos(s),f=Math.sin(s),m=+(l*u*c)-r*f*c*o-r*u*h*a,_=+(l*u*h)-r*f*h*o+r*u*c*a,g=+(l*f)+r*u*o,p=iu(i,s,r),d=[m/Ts,_/Ts,g/Ts],E=nl(p),b=nl(d);return new Si(t,E,b)}function Sr(n,t,e,i){const s=i/(i+El),r=As(Ln[e],t);n.x+=s*r.x,n.y+=s*r.y,n.z+=s*r.z}function Nm(n){const t=new Re(0,0,0,n);return Sr(t,n,Dt.Jupiter,Yo),Sr(t,n,Dt.Saturn,jo),Sr(t,n,Dt.Uranus,Ko),Sr(t,n,Dt.Neptune,Zo),t}const sl=51,Fm=29200,ji=146,Pn=201,pi=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Le{constructor(t,e,i){this.x=t,this.y=e,this.z=i}clone(){return new Le(this.x,this.y,this.z)}ToAstroVector(t){return new Re(this.x,this.y,this.z,t)}static zero(){return new Le(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new Le(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new Le(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new Le(t*this.x,t*this.y,t*this.z)}div(t){return new Le(this.x/t,this.y/t,this.z/t)}mean(t){return new Le((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new Le(-this.x,-this.y,-this.z)}}class Si{constructor(t,e,i){this.tt=t,this.r=e,this.v=i}clone(){return new Si(this.tt,this.r,this.v)}sub(t){return new Si(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function Om(n){let[t,[e,i,s],[r,a,o]]=n;return new Si(t,new Le(e,i,s),new Le(r,a,o))}function yr(n,t,e,i){const s=i/(i+El),r=il(Ln[e],t);return n.r.incr(r.r.mul(s)),n.v.incr(r.v.mul(s)),r}function xs(n,t,e){const i=e.sub(n),s=i.quadrature();return i.mul(t/(s*Math.sqrt(s)))}class ta{constructor(t){let e=new Si(t,new Le(0,0,0),new Le(0,0,0));this.Jupiter=yr(e,t,Dt.Jupiter,Yo),this.Saturn=yr(e,t,Dt.Saturn,jo),this.Uranus=yr(e,t,Dt.Uranus,Ko),this.Neptune=yr(e,t,Dt.Neptune,Zo),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Si(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=xs(t,El,this.Sun.r);return e.incr(xs(t,Yo,this.Jupiter.r)),e.incr(xs(t,jo,this.Saturn.r)),e.incr(xs(t,Ko,this.Uranus.r)),e.incr(xs(t,Zo,this.Neptune.r)),e}}class ea{constructor(t,e,i,s){this.tt=t,this.r=e,this.v=i,this.a=s}clone(){return new ea(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class su{constructor(t,e){this.bary=t,this.grav=e}}function qr(n,t,e,i){return new Le(t.x+n*(e.x+n*i.x/2),t.y+n*(e.y+n*i.y/2),t.z+n*(e.z+n*i.z/2))}function Jc(n,t,e){return new Le(t.x+n*e.x,t.y+n*e.y,t.z+n*e.z)}function rl(n,t){const e=n-t.tt,i=new ta(n),s=qr(e,t.r,t.v,t.a),r=i.Acceleration(s).mean(t.a),a=qr(e,t.r,t.v,r),o=t.v.add(r.mul(e)),l=i.Acceleration(a),c=new ea(n,a,o,l);return new su(i,c)}const Bm=[];function ru(n,t){const e=Math.floor(n);return e<0?0:e>=t?t-1:e}function al(n){const t=Om(n),e=new ta(t.tt),i=t.r.add(e.Sun.r),s=t.v.add(e.Sun.v),r=e.Acceleration(i),a=new ea(t.tt,i,s,r);return new su(e,a)}function zm(n,t){const e=pi[0][0];if(t<e||t>pi[sl-1][0])return null;const i=ru((t-e)/Fm,sl-1);if(!n[i]){const r=n[i]=[];r[0]=al(pi[i]).grav,r[Pn-1]=al(pi[i+1]).grav;let a,o=r[0].tt;for(a=1;a<Pn-1;++a)r[a]=rl(o+=ji,r[a-1]).grav;o=r[Pn-1].tt;var s=[];for(s[Pn-1]=r[Pn-1],a=Pn-2;a>0;--a)s[a]=rl(o-=ji,s[a+1]).grav;for(a=Pn-2;a>0;--a){const l=a/(Pn-1);r[a].r=r[a].r.mul(1-l).add(s[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(s[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(s[a].a.mul(l))}}return n[i]}function Qc(n,t,e){let i=al(n);const s=Math.ceil((t-i.grav.tt)/e);for(let r=0;r<s;++r)i=rl(r+1===s?t:i.grav.tt+e,i.grav);return i}function au(n,t){let e,i,s;const r=zm(Bm,n.tt);if(r){const a=ru((n.tt-r[0].tt)/ji,Pn-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),h=qr(n.tt-o.tt,o.r,o.v,c),u=Jc(n.tt-o.tt,o.v,c),f=qr(n.tt-l.tt,l.r,l.v,c),m=Jc(n.tt-l.tt,l.v,c),_=(n.tt-o.tt)/ji;e=h.mul(1-_).add(f.mul(_)),i=u.mul(1-_).add(m.mul(_))}else{let a;n.tt<pi[0][0]?a=Qc(pi[0],n.tt,-ji):a=Qc(pi[sl-1],n.tt,+ji),e=a.grav.r,i=a.grav.v,s=a.bary}return s||(s=new ta(n.tt)),e=e.sub(s.Sun.r),i=i.sub(s.Sun.v),new qn(e.x,e.y,e.z,i.x,i.y,i.z,n)}function Zn(n,t){var e=Ce(t);if(n in Ln)return As(Ln[n],e);if(n===Dt.Pluto){const a=au(e);return new Re(a.x,a.y,a.z,e)}if(n===Dt.Sun)return new Re(0,0,0,e);if(n===Dt.Moon){var i=As(Ln.Earth,e),s=Ns(e);return new Re(i.x+s.x,i.y+s.y,i.z+s.z,e)}if(n===Dt.EMB){const a=As(Ln.Earth,e),o=Ns(e),l=1+j0;return new Re(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,e)}if(n===Dt.SSB)return Nm(e);const r=Tl(n);if(r){const a=new eu(r.dec,15*r.ra,r.dist);return Xm(a,e)}throw`HelioVector: Unknown body "${n}"`}function km(n,t){let e=t,i=0;for(let s=0;s<10;++s){const r=n(e),a=r.Length()/bl;if(a>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-a);if(i=Math.abs(o.tt-e.tt),i<1e-9)return r;e=o}throw`Light-travel time solver did not converge: dt = ${i}`}class Vm{constructor(t,e,i,s){this.observerBody=t,this.targetBody=e,this.aberration=i,this.observerPos=s}Position(t){this.aberration&&(this.observerPos=Zn(this.observerBody,t));const e=Zn(this.targetBody,t);return new Re(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function Hm(n,t,e,i){K0(i);const s=Ce(n);if(Tl(e)){const o=Zn(e,s);if(i){const c=Wm(t,s),h=new Re(o.x-c.x,o.y-c.y,o.z-c.z,s),u=bl/h.Length();return new Re(h.x+c.vx/u,h.y+c.vy/u,h.z+c.vz/u,s)}const l=Zn(t,s);return new Re(o.x-l.x,o.y-l.y,o.z-l.z,s)}let r;i?r=new Re(0,0,0,s):r=Zn(t,s);const a=new Vm(t,e,i,r);return km(o=>a.Position(o),s)}function Al(n,t,e){K0(e);const i=Ce(t);switch(n){case Dt.Earth:return new Re(0,0,0,i);case Dt.Moon:return Ns(i);default:const s=Hm(i,Dt.Earth,n,e);return s.t=i,s}}function Gm(n,t){return new qn(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,t)}function Wm(n,t){const e=Ce(t);switch(n){case Dt.Sun:return new qn(0,0,0,0,0,0,e);case Dt.SSB:const i=new ta(e.tt);return new qn(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,e);case Dt.Mercury:case Dt.Venus:case Dt.Earth:case Dt.Mars:case Dt.Jupiter:case Dt.Saturn:case Dt.Uranus:case Dt.Neptune:const s=il(Ln[n],e.tt);return Gm(s,e);case Dt.Pluto:return au(e);case Dt.Moon:case Dt.EMB:const r=il(Ln.Earth,e.tt),a=n==Dt.Moon?nu(e):Um(e);return new qn(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,e);default:if(Tl(n)){const o=Zn(n,e);return new qn(o.x,o.y,o.z,0,0,0,e)}throw`HelioState: Unsupported body "${n}"`}}var t0;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(t0||(t0={}));function $m(n,t){return new Us([[t.rot[0][0]*n.rot[0][0]+t.rot[1][0]*n.rot[0][1]+t.rot[2][0]*n.rot[0][2],t.rot[0][1]*n.rot[0][0]+t.rot[1][1]*n.rot[0][1]+t.rot[2][1]*n.rot[0][2],t.rot[0][2]*n.rot[0][0]+t.rot[1][2]*n.rot[0][1]+t.rot[2][2]*n.rot[0][2]],[t.rot[0][0]*n.rot[1][0]+t.rot[1][0]*n.rot[1][1]+t.rot[2][0]*n.rot[1][2],t.rot[0][1]*n.rot[1][0]+t.rot[1][1]*n.rot[1][1]+t.rot[2][1]*n.rot[1][2],t.rot[0][2]*n.rot[1][0]+t.rot[1][2]*n.rot[1][1]+t.rot[2][2]*n.rot[1][2]],[t.rot[0][0]*n.rot[2][0]+t.rot[1][0]*n.rot[2][1]+t.rot[2][0]*n.rot[2][2],t.rot[0][1]*n.rot[2][0]+t.rot[1][1]*n.rot[2][1]+t.rot[2][1]*n.rot[2][2],t.rot[0][2]*n.rot[2][0]+t.rot[1][2]*n.rot[2][1]+t.rot[2][2]*n.rot[2][2]]])}function Xm(n,t){t=Ce(t);const e=n.lat*Mi,i=n.lon*Mi,s=n.dist*Math.cos(e);return new Re(s*Math.cos(i),s*Math.sin(i),n.dist*Math.sin(e),t)}function qm(n){const t=Ym(n);return new Pm(t.lon/15,t.lat,t.dist,n)}function Ym(n){const t=n.x*n.x+n.y*n.y,e=Math.sqrt(t+n.z*n.z);let i,s;if(t===0){if(n.z===0)throw"Zero-length vector not allowed.";s=0,i=n.z<0?-90:90}else s=Xr*Math.atan2(n.y,n.x),s<0&&(s+=360),i=Xr*Math.atan2(n.z,Math.sqrt(t));return new eu(i,s,e)}function jm(n,t){return new Re(n.rot[0][0]*t.x+n.rot[1][0]*t.y+n.rot[2][0]*t.z,n.rot[0][1]*t.x+n.rot[1][1]*t.y+n.rot[2][1]*t.z,n.rot[0][2]*t.x+n.rot[1][2]*t.y+n.rot[2][2]*t.z,t.t)}function Km(n){n=Ce(n);const t=Q0(n,dn.From2000),e=tu(n,dn.From2000);return $m(t,e)}var e0;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(e0||(e0={}));var n0;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(n0||(n0={}));function es(n){return new R(n.x,n.z,-n.y)}const Zm={Mercury:Dt.Mercury,Venus:Dt.Venus,Earth:Dt.Earth,Mars:Dt.Mars},Jm=["Mercury","Venus","Earth","Mars"];function Fs(n){return jm(Km(n.t),n)}function Rl(n,t){const e=Ce(t),i=Fs(Zn(Zm[n],e)),s=Fs(Zn(Dt.Earth,e));return{helio:new R(i.x,i.y,i.z),geo:new R(i.x-s.x,i.y-s.y,i.z-s.z)}}function Qm(n){const t=Ce(n),e=Fs(Al(Dt.Moon,t,!1));return new R(e.x,e.y,e.z)}function t3(n){const t=Ce(n),e=Fs(Al(Dt.Sun,t,!0)),i=new R(e.x,e.y,e.z),s=i.length();return{dir:i.clone().normalize(),distanceAu:s}}function Cl(n){return(Rm(Ce(n))*15%360+360)%360}function e3(n){const t=Ce(n),e=Fs(Al(Dt.Sun,t,!0)),i=qm(e);let r=i.ra*15-Cl(n);return r=((r+180)%360+360)%360-180,{lat:i.dec,lon:r}}const n3=-.309,i3=.087,s3=`
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;
  void main() {
    vLocalNormal = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,r3=`
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
`,a3=`
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,o3=`
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
`;function l3(){const n=document.createElement("canvas");return n.width=1,n.height=1,new Xo(n)}class c3{group=new nn;spin=new nn;globe;material;atmosphere;atmosphereMat;auroraCanvas=null;auroraTexture=null;auroraStamp=null;constructor(t=1){const e=new Xo(cm(2048));e.colorSpace=He,e.minFilter=Ge,e.magFilter=Ge,e.anisotropy=4,this.material=new Ze({uniforms:{uSurface:{value:e},uAurora:{value:l3()},uAuroraStrength:{value:0},uSunDir:{value:new R(1,0,0)},uTwilightStart:{value:n3},uTwilightEnd:{value:i3},uNightTint:{value:new Ut(.1,.13,.2)}},vertexShader:s3,fragmentShader:r3}),this.globe=new Ae(new Un(t,96,64),this.material),this.globe.name="earth-globe",this.spin.name="earth-fixed-frame",this.spin.add(this.globe),this.group.add(this.spin),this.atmosphereMat=new Ze({uniforms:{uSunDir:{value:new R(1,0,0)},uColor:{value:new Ut(.38,.62,1)}},vertexShader:a3,fragmentShader:o3,transparent:!0,blending:sn,depthWrite:!1,side:Ie}),this.atmosphere=new Ae(new Un(t*1.05,64,48),this.atmosphereMat),this.group.add(this.atmosphere)}setAurora(t,e){if(!t||!e){this.material.uniforms.uAuroraStrength.value=0;return}this.auroraStamp!==t.forecast_time&&(this.auroraStamp=t.forecast_time,this.auroraCanvas=um(t.grid,this.auroraCanvas??void 0),this.auroraTexture||(this.auroraTexture=new Xo(this.auroraCanvas),this.auroraTexture.colorSpace=He,this.auroraTexture.minFilter=Ge,this.auroraTexture.magFilter=Ge,this.material.uniforms.uAurora.value=this.auroraTexture),this.auroraTexture.needsUpdate=!0),this.material.uniforms.uAuroraStrength.value=1/100}setRadius(t){this.globe.scale.setScalar(t),this.atmosphere.scale.setScalar(t)}update(t,e){this.spin.rotation.y=Cl(t)*Math.PI/180,this.material.uniforms.uSunDir.value.copy(e),this.atmosphereMat.uniforms.uSunDir.value.copy(e)}dispose(){this.globe.geometry.dispose(),this.material.dispose(),this.atmosphereMat.dispose(),this.atmosphere.geometry.dispose(),this.material.uniforms.uSurface.value.dispose(),this.auroraTexture?.dispose()}}const u3=`
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,h3=`
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
`;class d3{group=new nn;disc;corona;coronaMat;reducedMotion=!1;constructor(t=1){this.disc=new Ae(new Un(t,64,48),new Ws({color:new Ut(1,.93,.76)})),this.disc.name="sun-disc",this.group.add(this.disc),this.coronaMat=new Ze({uniforms:{uTime:{value:0},uIntensity:{value:1},uColor:{value:new Ut(1,.72,.35)}},vertexShader:u3,fragmentShader:h3,transparent:!0,blending:sn,depthWrite:!1,side:Ie}),this.corona=new Ae(new Un(t*2.2,48,32),this.coronaMat),this.group.add(this.corona)}setRadius(t){this.disc.scale.setScalar(t),this.corona.scale.setScalar(t)}setReducedMotion(t){this.reducedMotion=t}update(t,e){if(this.reducedMotion||(this.coronaMat.uniforms.uTime.value=t),e!==null&&e>0){const i=(Math.log10(e)+8)/4;this.coronaMat.uniforms.uIntensity.value=.75+.9*Math.max(0,Math.min(1,i))}}dispose(){this.disc.geometry.dispose(),this.corona.geometry.dispose(),this.coronaMat.dispose()}}const f3=1495978707e-1,p3={Sun:695700,Mercury:2439.7,Venus:6051.8,Earth:6371,Mars:3389.5,Moon:1737.4},Yr=8,m3=3,g3=.05;function na(n,t){return t==="true"?n*Yr:m3*Math.log10(1+n/g3)}function ws(n,t){const e=p3[n]/f3;if(t==="true")return e*Yr;const i={Sun:10,Mercury:380,Venus:265,Earth:300,Mars:360,Moon:320};return e*Yr*i[n]}function ol(n){return n==="globe"?"Globe scale — distances log-compressed, bodies enlarged":"True scale — distances and sizes to scale"}function _3(n,t,e){return t==="true"?n*Yr:e*3.2*(n/.00257)}const Br={Mercury:10260355,Venus:14731680,Earth:4882357,Mars:12673340};function v3(n){const t=new Ae(new Sl(1,1.12,32),new Ws({color:n,transparent:!0,opacity:.55,side:_n,blending:sn,depthWrite:!1}));return t.renderOrder=3,t}class x3{constructor(t){this.name=t,this.mesh=new Ae(new Un(1,40,28),new H0({color:Br[t],emissive:Br[t],emissiveIntensity:.12})),this.mesh.name=`planet-${t}`,this.marker=v3(Br[t]),this.group.add(this.mesh,this.marker)}name;group=new nn;mesh;marker;update(t,e,i){const s=Rl(this.name,t).helio,r=es(s),a=r.length();r.normalize().multiplyScalar(na(a,e)),this.group.position.copy(r);const o=ws(this.name,e);this.mesh.scale.setScalar(o);const c=i.distanceTo(r)*.012;this.marker.scale.setScalar(c),this.marker.visible=o<c*.9,this.marker.lookAt(i)}}class M3{line;constructor(t,e,i){const s=new Se;this.line=new Ml(s,new Is({color:Br[t],transparent:!0,opacity:.22})),this.line.name=`orbit-${t}`,this.rebuild(t,e,i)}rebuild(t,e,i){const s={Mercury:88,Venus:225,Earth:365.256,Mars:687},r=240,a=[];for(let o=0;o<=r;o++){const l=new Date(i.getTime()+o/r*s[t]*864e5),c=es(Rl(t,l).helio),h=c.length();c.normalize().multiplyScalar(na(h,e)),a.push(c.x,c.y,c.z)}this.line.geometry.setAttribute("position",new le(a,3)),this.line.geometry.computeBoundingSphere()}}class S3{mesh;constructor(){this.mesh=new Ae(new Un(1,32,24),new H0({color:new Ut(.72,.71,.68)})),this.mesh.name="moon"}}function y3(){const n=new Map;for(const t of Jm)n.set(t,new x3(t));return n}function b3(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function E3(n=2600,t=900){const e=b3(3928446791),i=[],s=[];for(let l=0;l<n;l++){const c=e()*2-1,h=e()*Math.PI*2,u=Math.sqrt(1-c*c);i.push(t*u*Math.cos(h),t*c,t*u*Math.sin(h));const f=.65+e()*.35,m=e();s.push(f*(.85+m*.15),f*.9,f*(1-m*.12))}const r=new Se;r.setAttribute("position",new le(i,3)),r.setAttribute("color",new le(s,3));const a=new z0({size:1.4,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.85,blending:sn,depthWrite:!1}),o=new ad(r,a);return o.name="starfield",o.frustumCulled=!1,o}const i0={type:"change"},Pl={type:"start"},ou={type:"end"},br=new Zr,s0=new $n,T3=Math.cos(70*Ch.DEG2RAD),Me=new R,ke=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class w3 extends md{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new vi,this._lastTargetPosition=new R,this._quat=new vi().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sc,this._sphericalDelta=new Sc,this._scale=1,this._panOffset=new R,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new R,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R3.bind(this),this._onPointerDown=A3.bind(this),this._onPointerUp=C3.bind(this),this._onContextMenu=F3.bind(this),this._onMouseWheel=L3.bind(this),this._onKeyDown=I3.bind(this),this._onTouchStart=U3.bind(this),this._onTouchMove=N3.bind(this),this._onMouseDown=P3.bind(this),this._onMouseMove=D3.bind(this),this._interceptControlDown=O3.bind(this),this._interceptControlUp=B3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(i0),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ke:i>Math.PI&&(i-=ke),s<-Math.PI?s+=ke:s>Math.PI&&(s-=ke),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Me.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(br.origin.copy(this.object.position),br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(br.direction))<T3?this.object.lookAt(this.target):(s0.setFromNormalAndCoplanarPoint(this.object.up,this.target),br.intersectPlane(s0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(i0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function A3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function R3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function C3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ou),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function P3(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=se.DOLLY;break;case Ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}break;case Ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Pl)}function D3(n){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function L3(n){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(n.preventDefault(),this.dispatchEvent(Pl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ou))}function I3(n){this.enabled!==!1&&this._handleKeyDown(n)}function U3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=se.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=se.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Pl)}function N3(n){switch(this._trackPointer(n),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=se.NONE}}function F3(n){this.enabled!==!1&&n.preventDefault()}function O3(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function B3(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const z3=1100,k3=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;class V3{camera;controls;view="deck";from=new R;to=new R;fromTarget=new R;toTarget=new R;startedAt=0;transitioning=!1;reducedMotion=!1;constructor(t,e){this.camera=new Ke(45,e,5e-4,5e3),this.camera.position.set(0,2.2,7.5),this.controls=new w3(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=.02,this.controls.maxDistance=400,this.controls.enablePan=!0}setReducedMotion(t){this.reducedMotion=t}goTo(t,e,i,s,r=!1){this.view=t;let a=t==="orbit"?new R(0,0,0):e.clone(),o;if(t==="shield"){const l=new R().crossVectors(s,new R(0,1,0)).normalize();a=e.clone().addScaledVector(s,-i*6),o=e.clone().add(l.multiplyScalar(i*52)).add(s.clone().multiplyScalar(i*4)).add(new R(0,i*18,0))}else if(t==="deck"){const l=new R().crossVectors(s,new R(0,1,0)).normalize();o=e.clone().add(l.multiplyScalar(i*8)).add(s.clone().multiplyScalar(i*3.5)).add(new R(0,i*2.5,0))}else o=new R(0,4.2,9.5);this.animateTo(o,a,r)}animateTo(t,e,i=!1){if(this.reducedMotion||i){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update(),this.transitioning=!1;return}this.from.copy(this.camera.position),this.to.copy(t),this.fromTarget.copy(this.controls.target),this.toTarget.copy(e),this.startedAt=performance.now(),this.transitioning=!0}update(){if(this.transitioning){const t=Math.min(1,(performance.now()-this.startedAt)/z3),e=k3(t);this.camera.position.lerpVectors(this.from,this.to,e),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,e),t>=1&&(this.transitioning=!1)}this.controls.update()}followTarget(t){if(this.view!=="deck"||this.transitioning)return;const e=t.clone().sub(this.controls.target);e.lengthSq()!==0&&(this.controls.target.copy(t),this.camera.position.add(e))}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose()}}const Os=13,H3=2025,G3=6371.2,ln=(n,t)=>n*(n+1)/2+t,r0=[0,-29350,-1410.3,-2556.2,2950.9,1648.7,1360.9,-2404.2,1243.8,453.4,894.7,799.6,55.8,-281.1,12,-232.9,369,187.2,-138.7,-141.9,20.9,64.3,63.8,76.7,-115.7,-40.9,14.9,-60.8,79.6,-76.9,-8.8,59.3,15.8,2.5,-11.2,14.3,23.1,10.9,-17.5,2,-21.8,16.9,14.9,-16.8,1,4.7,8,3,-.2,-2.5,-13.1,2.4,8.6,-8.7,-12.8,-1.3,-6.4,.2,2,-1,-.5,-.9,1.5,.9,-2.6,-3.9,3,-1.4,-2.5,2.4,-.6,0,-.6,-.1,1.1,-1,-.1,2.6,-2,-.1,.4,1.2,-1.2,.6,.5,.5,-.1,-.5,-.2,-1.2,-.7,.2,-.9,.6,.7,-.2,.5,.1,.7,0,.3,.2,.4,-.5,-.4],W3=[0,0,4545.5,0,-3133.6,-814.2,0,-56.9,237.6,-549.6,0,278.6,-134,212,-375.4,0,45.3,220,-122.9,42.9,106.2,0,-18.4,16.8,48.9,-59.8,10.9,72.8,0,-48.9,-14.4,-1,23.5,-7.4,-25.1,-2.2,0,7.2,-12.6,11.5,-9.7,12.7,.7,-5.2,3.9,0,-24.8,12.1,8.3,-3.4,-5.3,7.2,-.6,.8,9.8,0,3.3,.1,2.5,5.4,-9,.4,-4.2,-3.8,.9,-9,0,0,2.8,-.6,.1,.5,-.3,-1.2,-1.7,-2.9,-1.8,-2.3,0,-1.2,.6,1,-1.5,0,.6,-.2,.8,.1,-.9,.1,.2,0,-.9,.7,1.2,-.3,-1.3,-.1,.2,-.2,.5,.6,-.6,-.3,-.5],$3=[0,12.6,10,-11.2,-5.3,-8.3,-1.5,-4.4,.4,-15.6,-1.7,-2.3,-5.8,5.4,-6.8,.6,1.3,0,.7,2.3,1,-.2,-.3,.8,1.2,-.8,.4,.9,-.1,-.1,-.1,.5,-.1,-.8,-.8,.9,-.1,.2,0,.4,-.1,.3,.1,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],X3=[0,0,-21.5,0,-27.3,-11.1,0,3.8,-.2,-3.9,0,-1.3,4.1,1.6,-4.1,0,-.5,2.1,.5,1.7,1.9,0,.3,-1.6,-.4,.8,.7,.9,0,.6,.5,-.7,0,-.9,.5,-.3,0,-.3,.4,-.3,.4,-.5,-.6,.3,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function lu(n){const t=n.getUTCFullYear(),e=Date.UTC(t,0,1),i=Date.UTC(t+1,0,1);return t+(n.getTime()-e)/(i-e)}function q3(n){const t=n-H3,e=r0.length,i=new Float64Array(e),s=new Float64Array(e);for(let r=0;r<e;r++)i[r]=r0[r]+t*$3[r],s[r]=W3[r]+t*X3[r];return{g:i,h:s}}let a0=Number.NaN,Va=null;function cu(n){const t=Math.round(n*100)/100;return(t!==a0||!Va)&&(a0=t,Va=q3(t)),Va}const uu=ln(Os,Os)+1,Ve=new Float64Array(uu),mn=new Float64Array(uu),Ha=new Float64Array(Os+1),Ga=new Float64Array(Os+1);function Y3(n,t,e,i){const{g:s,h:r}=cu(lu(i)),a=Os,o=1e-8;let l=Math.cos(n),c=Math.sin(n);Math.abs(c)<o&&(c=c>=0?o:-o,l=Math.sign(l)*Math.sqrt(1-o*o)),Ve[ln(0,0)]=1,mn[ln(0,0)]=0;for(let g=1;g<=a;g++)for(let p=0;p<=g;p++){const d=ln(g,p);if(g===p)if(g===1)Ve[d]=c,mn[d]=l;else{const E=Math.sqrt((2*g-1)/(2*g)),b=ln(g-1,g-1);Ve[d]=E*c*Ve[b],mn[d]=E*(c*mn[b]+l*Ve[b])}else{const E=Math.sqrt(g*g-p*p),b=(2*g-1)/E,M=ln(g-1,p);if(g-2>=p){const C=Math.sqrt((g-1)*(g-1)-p*p)/E,A=ln(g-2,p);Ve[d]=b*l*Ve[M]-C*Ve[A],mn[d]=b*(l*mn[M]-c*Ve[M])-C*mn[A]}else Ve[d]=b*l*Ve[M],mn[d]=b*(l*mn[M]-c*Ve[M])}}for(let g=0;g<=a;g++)Ha[g]=Math.cos(g*t),Ga[g]=Math.sin(g*t);const h=G3/e;let u=0,f=0,m=0,_=h*h;for(let g=1;g<=a;g++){_*=h;let p=0,d=0,E=0;for(let b=0;b<=g;b++){const M=ln(g,b),C=s[M],A=r[M],P=C*Ha[b]+A*Ga[b];p+=P*Ve[M],d+=P*mn[M],E+=b*(C*Ga[b]-A*Ha[b])*Ve[M]}u+=_*(g+1)*p,f-=_*d,m+=_*E}return m/=c,{br:u,btheta:f,bphi:m}}function j3(n,t,e=new R){const i=n.length();if(i<1)return e.set(0,0,0);const s=Math.acos(Math.max(-1,Math.min(1,n.z/i))),r=Math.atan2(n.y,n.x),{br:a,btheta:o,bphi:l}=Y3(s,r,i,t),c=Math.sin(s),h=Math.cos(s),u=Math.sin(r),f=Math.cos(r);return e.set(a*c*f+o*h*f-l*u,a*c*u+o*h*u+l*f,a*h-o*c)}function K3(n,t,e,i){const s=Math.PI/180,r=n*s,a=e*s,o=(i-t)*s,l=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(o);return Math.acos(Math.max(-1,Math.min(1,l)))*180/Math.PI}function Z3(n){const{g:t,h:e}=cu(lu(n)),i=t[ln(1,0)],s=t[ln(1,1)],r=e[ln(1,1)],a=-s,o=-r,l=-i,c=Math.sqrt(a*a+o*o+l*l);return{lat:Math.asin(l/c)*180/Math.PI,lon:Math.atan2(o,a)*180/Math.PI}}const ls=6371.2,J3={innerRadiusKm:ls,outerRadiusKm:ls*15,maxSteps:4e3,stepFraction:.035,minStepKm:40,maxStepKm:2200},Wa=new R,$a=new R,Xa=new R,o0=new R,qa=new R;function Er(n,t,e){j3(n,t,e);const i=e.length();return i>1e-9?(e.divideScalar(i),!0):!1}function l0(n,t,e,i={}){const s={...J3,...i},r=[],a=n.clone();let o=a.length()/ls,l="steps";for(let c=0;c<s.maxSteps;c++){r.push(a.clone());const h=a.length();if(o=Math.max(o,h/ls),c>0&&h<=s.innerRadiusKm){l="surface";break}if(h>=s.outerRadiusKm){l="outer";break}const u=e*Math.min(s.maxStepKm,Math.max(s.minStepKm,s.stepFraction*h));if(!Er(a,t,Wa)){l="null-field";break}if(!Er(qa.copy(a).addScaledVector(Wa,u/2),t,$a)){l="null-field";break}if(!Er(qa.copy(a).addScaledVector($a,u/2),t,Xa)){l="null-field";break}if(!Er(qa.copy(a).addScaledVector(Xa,u),t,o0)){l="null-field";break}a.addScaledVector(Wa,u/6).addScaledVector($a,u/3).addScaledVector(Xa,u/3).addScaledVector(o0,u/6)}return{points:r,startsAt:"surface",endsAt:l,apexRe:o,closed:!1}}function Q3(n,t,e={}){const i=l0(n,t,1,e),s=l0(n,t,-1,e);return{points:[...s.points.slice(1).reverse(),...i.points],startsAt:s.endsAt,endsAt:i.endsAt,apexRe:Math.max(i.apexRe,s.apexRe),closed:s.endsAt==="surface"&&i.endsAt==="surface"}}function tg(n,t,e=0){const i=n*Math.PI/180,s=t*Math.PI/180,r=ls+e;return new R(r*Math.cos(i)*Math.cos(s),r*Math.cos(i)*Math.sin(s),r*Math.sin(i))}const hu={latitudes:[-72,-64,-55,-42,-28,28,42,55,64,72],meridianCount:12,altitudeKm:120};function eg(n=hu){const t=[];for(const e of n.latitudes)for(let i=0;i<n.meridianCount;i++)t.push(tg(e,360/n.meridianCount*i,n.altitudeKm));return t}function ng(n,t=hu,e={}){return eg(t).map(i=>Q3(i,n,e))}function ig(n,t){return 16726e-10*n*t*t}function sg(n,t){return(10.22+1.29*Math.tanh(.184*(n+8.14)))*Math.pow(t,-1/6.6)}function rg(n,t){return(.58-.007*n)*(1+.024*Math.log(t))}function ag(n,t,e){return n*Math.pow(2/(1+Math.cos(e)),t)}function du(n,t,e){if(n===null||t===null||e===null||!(t>0)||!(e>0))return null;const i=ig(t,e),s=sg(n,i);return{r0Re:s,alpha:rg(n,i),dynPressureNPa:i,bowShockRe:og(s)}}function og(n,t=8){const e=1.6666666666666667,i=t*t;return n*(1+1.1*(((e-1)*i+2)/((e+1)*(i-1))))}function lg(n){return es(n).divideScalar(ls)}const cg=new Ut(.42,.78,.95),ug=new Ut(.72,.55,1),hg=`
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
`,dg=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vDepth;
  void main() {
    // Fade with distance so the near-Earth structure stays readable.
    float fade = 1.0 - smoothstep(2.0, 14.0, vDepth) * 0.55;
    gl_FragColor = vec4(uColor, uOpacity * fade);
    #include <colorspace_fragment>
  }
`;class fg{group=new nn;lines=[];materials=[];tracedFor=null;reduced=!1;frozenAt=0;constructor(){this.group.name="igrf-field-lines"}ensureTraced(t){const e=Math.floor(t.getTime()/864e5);this.tracedFor!==e&&(this.tracedFor=e,this.build(ng(t)))}build(t){this.dispose();for(const e of t){if(e.points.length<2)continue;const i=[];for(const o of e.points){const l=lg(o);i.push(l.x,l.y,l.z)}const s=new Se;s.setAttribute("position",new le(i,3));const r=new Ze({uniforms:{uTime:{value:0},uShiver:{value:0},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new R(1,0,0)},uConfine:{value:1},uColor:{value:e.closed?cg:ug},uOpacity:{value:e.closed?.34:.46}},vertexShader:hg,fragmentShader:dg,transparent:!0,blending:sn,depthWrite:!1});this.materials.push(r);const a=new Ml(s,r);a.name=e.closed?"field-line-closed":"field-line-open",this.lines.push(a),this.group.add(a)}}setScale(t){this.group.scale.setScalar(t)}setVisible(t){this.group.visible=t}setReducedMotion(t){t&&!this.reduced&&(this.frozenAt=this.materials[0]?.uniforms.uTime?.value??0),this.reduced=t}setDynamics(t,e,i,s,r){const a=this.reduced?this.frozenAt:t,o=r===null?0:Math.max(0,Math.min(1,(r-4)/5));for(const l of this.materials)l.uniforms.uTime.value=a,l.uniforms.uShiver.value=o,l.uniforms.uSunDir.value.copy(e).normalize(),l.uniforms.uConfine.value=i===null?0:1,i!==null&&(l.uniforms.uR0.value=i),s!==null&&(l.uniforms.uAlpha.value=s)}get lineCount(){return this.lines.length}get pointCount(){return this.lines.reduce((t,e)=>t+(e.geometry.getAttribute("position")?.count??0),0)}dispose(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.lines=[],this.materials=[]}}const Tr=48,Ms=40,pg=100,mg=pg*Math.PI/180;function c0(n,t,e){const i=Math.abs(e.y)>.9?new R(1,0,0):new R(0,1,0),s=new R().crossVectors(e,i).normalize(),r=new R().crossVectors(e,s).normalize(),a=[];for(let h=0;h<=Tr;h++){const u=h/Tr*mg,f=ag(n,t,u),m=[];for(let _=0;_<Ms;_++){const g=_/Ms*Math.PI*2,p=e.clone().multiplyScalar(Math.cos(u)).addScaledVector(s,Math.sin(u)*Math.cos(g)).addScaledVector(r,Math.sin(u)*Math.sin(g));m.push(p.multiplyScalar(f))}a.push(m)}const o=[],l=(h,u)=>{o.push(h.x,h.y,h.z,u.x,u.y,u.z)};for(let h=0;h<=Tr;h+=h<16?3:5){const u=a[h];for(let f=0;f<Ms;f++)l(u[f],u[(f+1)%Ms])}for(let h=0;h<Ms;h+=4)for(let u=0;u<Tr;u++)l(a[u][h],a[u+1][h]);const c=new Se;return c.setAttribute("position",new le(o,3)),c}class gg{group=new nn;magnetopause;bowShock;current=null;constructor(){this.group.name="magnetosphere",this.magnetopause=new Wr(new Se,new Is({color:new Ut(.45,.9,.8),transparent:!0,opacity:.34,blending:sn,depthWrite:!1})),this.magnetopause.name="magnetopause-shue1998",this.bowShock=new Wr(new Se,new Is({color:new Ut(1,.62,.35),transparent:!0,opacity:.2,blending:sn,depthWrite:!1})),this.bowShock.name="bow-shock-farris-russell",this.group.add(this.magnetopause,this.bowShock)}update(t,e){if(!t){this.group.visible=!1;return}if(this.group.visible=!0,!(!this.current||Math.abs(this.current.r0-t.r0Re)>.02||Math.abs(this.current.alpha-t.alpha)>.004||this.current.axis.dot(e)<.99995))return;const s=e.clone().normalize();this.magnetopause.geometry.dispose(),this.magnetopause.geometry=c0(t.r0Re,t.alpha,s),this.bowShock.geometry.dispose(),this.bowShock.geometry=c0(t.bowShockRe,t.alpha*.92,s),this.current={r0:t.r0Re,alpha:t.alpha,bow:t.bowShockRe,axis:s}}setScale(t){this.group.scale.setScalar(t)}setVisible(t){this.group.visible=t}dispose(){this.magnetopause.geometry.dispose(),this.magnetopause.material.dispose(),this.bowShock.geometry.dispose(),this.bowShock.material.dispose()}}const _g=62,fu=20,vg=`
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

  const float CORRIDOR = ${_g.toFixed(1)};

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
    vFade *= 1.0 - smoothstep(0.35, 1.0, length(aOffset.xy) / ${fu.toFixed(1)});

    vEnd = aEnd;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,xg=`
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
`;function Mg(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Sg{points;mat;maxCount;reduced=!1;frozenAt=0;constructor(t=4200){this.maxCount=t;const e=Mg(5249554),i=[],s=[],r=[],a=[];for(let l=0;l<t;l++){const c=e(),h=Math.sqrt(e())*fu,u=e()*Math.PI*2,f=e(),m=h*Math.cos(u),_=h*Math.sin(u);for(const g of[1,0])i.push(c),s.push(m,_,0),r.push(f),a.push(g)}const o=new Se;o.setAttribute("position",new le(new Float32Array(t*6),3)),o.setAttribute("aPhase",new le(i,1)),o.setAttribute("aOffset",new le(s,3)),o.setAttribute("aSeed",new le(r,1)),o.setAttribute("aEnd",new le(a,1)),o.boundingSphere=null,this.mat=new Ze({uniforms:{uTime:{value:0},uSpeed:{value:.05},uR0:{value:10.5},uAlpha:{value:.58},uSunDir:{value:new R(1,0,0)},uStreak:{value:1.4},uColor:{value:new Ut(.62,.86,1)},uOpacity:{value:.5}},vertexShader:vg,fragmentShader:xg,transparent:!0,blending:sn,depthWrite:!1}),this.points=new Wr(o,this.mat),this.points.name="solar-wind-stream",this.points.frustumCulled=!1}setReducedMotion(t){t&&!this.reduced&&(this.frozenAt=this.mat.uniforms.uTime.value),this.reduced=t}setVisible(t){this.points.visible=t}get visible(){return this.points.visible}setScale(t){this.points.scale.setScalar(t)}update(t,e,i,s,r,a){const o=i!==null&&s!==null;if(this.points.visible=this.points.visible&&o,!o)return;this.mat.uniforms.uTime.value=this.reduced?this.frozenAt:t,this.mat.uniforms.uSpeed.value=.014+i/1e3*.055,this.mat.uniforms.uSunDir.value.copy(e).normalize(),r!==null&&(this.mat.uniforms.uR0.value=r),a!==null&&(this.mat.uniforms.uAlpha.value=a);const l=Math.max(0,Math.min(1,(s-1)/19)),c=Math.round(this.maxCount*(.25+.75*l));this.points.geometry.setDrawRange(0,c*2),this.mat.uniforms.uOpacity.value=.4+.32*l,this.mat.uniforms.uStreak.value=.7+i/1e3*3.4}dispose(){this.points.geometry.dispose(),this.mat.dispose()}}const yg=360/25.38;class Dl{group=new nn;markers=[];stamp="";constructor(){this.group.name="active-regions"}static direction(t,e){const i=t*Math.PI/180,s=e*Math.PI/180;return new R(Math.cos(i)*Math.cos(s),Math.sin(i),-Math.cos(i)*Math.sin(s))}setRegions(t){const e=t.map(i=>`${i.region}:${i.lat}:${i.lon}`).join(",");if(e!==this.stamp){this.stamp=e,this.dispose();for(const i of t){const s=i.area??10,r=.03+.055*Math.min(1,Math.log10(1+s)/3),a=Math.max(0,Math.min(1,(i.mProb??0)/50)),o=new Ws({color:new Ut().setRGB(1,.62-.32*a,.22-.18*a),transparent:!0,opacity:.55+.4*a,blending:sn,depthWrite:!1}),l=new Ae(new Un(r,12,10),o);l.position.copy(Dl.direction(i.lat,i.lon)).multiplyScalar(1.01),l.name=`region-${i.region}`,l.userData.region=i,this.markers.push(l),this.group.add(l)}}}update(t,e,i){if(this.group.scale.setScalar(i),!e)return;const s=(t.getTime()-Date.parse(e))/864e5;Number.isFinite(s)&&(this.group.rotation.y=-(s*yg*Math.PI)/180)}setVisible(t){this.group.visible=t}get count(){return this.markers.length}dispose(){for(const t of this.markers)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.markers=[]}}const pu=695700,mu=1495978707e-1,gu=21.5;function bg(n){const t=Ce(n),e=73.6667+1.3958333*(t.tt-15020)/36525,s=(Lm(t).elon-e)*Math.PI/180,r=7.25*Math.PI/180;return Math.asin(Math.sin(s)*Math.sin(r))*180/Math.PI}function _u(n,t){const e=Math.PI/180,i=bg(t),s=n.latitude*e,r=i*e,a=n.longitude*e,o=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(a);return Math.acos(Math.max(-1,Math.min(1,o)))*180/Math.PI}function Eg(n,t){return _u(n,t)<=n.halfAngle}function Tg(n,t=1){const e=Date.parse(n.time215);if(!Number.isFinite(e)||!(n.speedKms>0))return null;const s=(t*mu-gu*pu)/n.speedKms/3600,r=Math.max(0,(n.speedKms-450)/450),a=Math.min(24,6+6*r);return{time:new Date(e+s*36e5).toISOString(),windowHours:Math.round(a),transitHours:s}}function u0(n,t){const e=Date.parse(n.time215);if(!Number.isFinite(e))return 0;const i=Math.max(0,(t.getTime()-e)/1e3);return(gu*pu+n.speedKms*i)/mu}function wg(n,t){const e=Math.PI/180,i=Math.hypot(t.x,t.y,t.z)||1,s={x:t.x/i,y:t.y/i,z:t.z/i},r=Math.abs(s.y)>.9?{x:1,y:0,z:0}:{x:0,y:1,z:0},a={x:r.y*s.z-r.z*s.y,y:r.z*s.x-r.x*s.z,z:r.x*s.y-r.y*s.x},o=Math.hypot(a.x,a.y,a.z)||1;a.x/=o,a.y/=o,a.z/=o;const l={x:s.y*a.z-s.z*a.y,y:s.z*a.x-s.x*a.z,z:s.x*a.y-s.y*a.x},c=n.latitude*e,h=n.longitude*e,u=Math.cos(c);return{x:s.x*u*Math.cos(h)+a.x*u*Math.sin(h)+l.x*Math.sin(c),y:s.y*u*Math.cos(h)+a.y*u*Math.sin(h)+l.y*Math.sin(c),z:s.z*u*Math.cos(h)+a.z*u*Math.sin(h)+l.z*Math.sin(c)}}const Ag=new Ut(1,.52,.3),Rg=new Ut(.62,.66,.85);function Cg(n,t,e,i){const s=Math.min(89,Math.max(2,t))*Math.PI/180,r=Math.abs(n.y)>.9?new R(1,0,0):new R(0,1,0),a=new R().crossVectors(n,r).normalize(),o=new R().crossVectors(n,a).normalize(),l=7,c=28,h=[],u=(g,p)=>{h.push(g.x,g.y,g.z,p.x,p.y,p.z)},m=Array.from({length:l},(g,p)=>e*(p+1)/l).map(g=>{const p=na(g,i),d=p*Math.tan(s);return Array.from({length:c},(E,b)=>{const M=b/c*Math.PI*2;return n.clone().multiplyScalar(p).addScaledVector(a,d*Math.cos(M)).addScaledVector(o,d*Math.sin(M))})});for(const g of m)for(let p=0;p<c;p++)u(g[p],g[(p+1)%c]);for(let g=0;g<c;g+=4){const p=new R(0,0,0);u(p,m[0][g]);for(let d=0;d<m.length-1;d++)u(m[d][g],m[d+1][g])}const _=new Se;return _.setAttribute("position",new le(h,3)),_}class Pg{group=new nn;lines=[];stamp="";visible=!0;constructor(){this.group.name="cme-cones"}setVisible(t){this.visible=t,this.group.visible=t}get count(){return this.lines.length}update(t,e,i,s){if(!this.visible)return;const r=`${i}|${t.map(a=>`${a.id}:${u0(a,e).toFixed(2)}`).join(",")}`;if(r!==this.stamp){this.stamp=r,this.dispose();for(const a of t){const o=Math.min(1.7,u0(a,e));if(o<=.02)continue;const l=wg(a,s),c=new R(l.x,l.y,l.z).normalize(),h=Cg(c,a.halfAngle,o,i),u=new Is({color:a.earthDirected?Ag:Rg,transparent:!0,opacity:(a.earthDirected?.36:.09)*Math.max(.25,1-o/2.2),blending:sn,depthWrite:!1}),f=new Wr(h,u);f.name=`cme-${a.id}`,f.userData.cme=a,this.lines.push(f),this.group.add(f)}}}dispose(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),this.group.remove(t);this.lines=[]}}const Dg="https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get",h0=n=>{const t=String(n??"").trim();if(!t)return null;const e=Date.parse(/\dZ$/.test(t)&&t.length===17?t.replace("Z",":00Z"):t);return Number.isFinite(e)?new Date(e).toISOString():null},wr=n=>{const t=Number(n);return Number.isFinite(t)?t:null};function Lg(n,t=new Date){if(!Array.isArray(n))return[];const e=[];for(const i of n){const s=h0(i.time21_5),r=wr(i.latitude),a=wr(i.longitude),o=wr(i.halfAngle),l=wr(i.speed);if(s===null||r===null||a===null||o===null||l===null||l<=0)continue;const c={latitude:r,longitude:a,halfAngle:o,speedKms:l,time215:s},u=(Array.isArray(i.enlilList)?i.enlilList:[]).map(f=>h0(f.estimatedShockArrivalTime)).find(f=>f!==null)??null;e.push({...c,id:String(i.associatedCMEID??`${s}-${l}`),type:String(i.type??""),note:String(i.note??""),link:i.link??null,earthDirected:Eg(c,new Date(s)),offAxisDeg:_u(c,new Date(s)),arrival:u?{time:u,windowHours:7,transitHours:(Date.parse(u)-Date.parse(s))/36e5}:Tg(c),arrivalFromEnlil:u!==null})}return e.sort((i,s)=>Date.parse(s.time215)-Date.parse(i.time215))}function Ig(n,t=new Date,e=3.5,i=6){const s=t.getTime(),r=n.filter(l=>{const c=(s-Date.parse(l.time215))/864e5;return c>=0&&c<=e}),a=r.filter(l=>l.earthDirected),o=r.filter(l=>!l.earthDirected).slice(0,i);return[...a,...o]}async function Ug(n,t=7){const e=new Date,i=new Date(e.getTime()-t*864e5),s=`${Dg}/CMEAnalysis?startDate=${i.toISOString().slice(0,10)}&endDate=${e.toISOString().slice(0,10)}&mostAccurateOnly=true`;try{const r=await fetch(s,{cache:"no-store",signal:n});return r.ok?Lg(await r.json()):[]}catch{return[]}}class Ng{constructor(t){this.canvas=t,this.renderer=new Q2({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.scene.background=new Ut(329485),this.rig=new V3(t,t.clientWidth/Math.max(1,t.clientHeight)),this.scene.add(E3()),this.scene.add(this.sun.group),this.sun.group.add(this.activeRegions.group),this.scene.add(this.cmeCones.group),this.scene.add(this.earth.group),this.scene.add(this.moon.mesh),this.scene.add(this.sunLight),this.earth.spin.add(this.fieldLines.group),this.earth.group.add(this.magnetosphere.group),this.solarWind=new Sg(window.devicePixelRatio>1.5?4200:2600),this.earth.group.add(this.solarWind.points),this.scene.add(new fd(2371658,.55)),this.planets=y3();for(const[e,i]of this.planets){e!=="Earth"&&this.scene.add(i.group);const s=new M3(e,this.mode,new Date);this.rings.set(e,s),this.scene.add(s.line)}this.resize(),window.addEventListener("resize",this.resize)}canvas;scene=new nd;rig;renderer;sun=new d3;earth=new c3;moon=new S3;planets=new Map;rings=new Map;sunLight=new hd(16773853,1.6,0,0);fieldLines=new fg;magnetosphere=new gg;solarWind;activeRegions=new Dl;cmeCones=new Pg;cmes=[];regionsObservedAt=null;shieldVisible=!0;windVisible=!0;sunDirEarthFixed=new R(1,0,0);mode="globe";_reducedMotion=!1;raf=0;clockStart=performance.now();now=null;aurora=null;auroraVisible=!0;frameTimes=[];lastFrame=performance.now();stats={fps:0,frames:0};setNow(t){this.now=t}setAurora(t){this.aurora=t}setRegions(t,e){this.activeRegions.setRegions(t),this.regionsObservedAt=e}get regionCount(){return this.activeRegions.count}setCmes(t){this.cmes=t}setCmesVisible(t){this.cmeCones.setVisible(t)}get cmesOn(){return this.cmeCones.group.visible}get cmeCount(){return this.cmeCones.count}setAuroraVisible(t){this.auroraVisible=t}get auroraOn(){return this.auroraVisible}setScaleMode(t){if(t===this.mode)return;this.mode=t;const e=new Date;for(const[i,s]of this.rings)s.rebuild(i,t,e)}get scaleMode(){return this.mode}get reducedMotion(){return this._reducedMotion}setShieldVisible(t){this.shieldVisible=t,this.fieldLines.setVisible(t),this.magnetosphere.setVisible(t)}get shieldOn(){return this.shieldVisible}setWindVisible(t){this.windVisible=t,this.solarWind.setVisible(t)}get windOn(){return this.windVisible}get fieldLineStats(){return{lines:this.fieldLines.lineCount,points:this.fieldLines.pointCount}}setReducedMotion(t){this._reducedMotion=t,this.sun.setReducedMotion(t),this.rig.setReducedMotion(t),this.fieldLines.setReducedMotion(t),this.solarWind.setReducedMotion(t)}setView(t,e=!1){const{earthPos:i,earthRadius:s,sunDir:r}=this.geometryNow(new Date);this.rig.goTo(t,i,s,r,e)}geometryNow(t){const e=es(Rl("Earth",t).helio),i=e.length(),s=e.clone().normalize().multiplyScalar(na(i,this.mode)),r=ws("Earth",this.mode),a=t3(t).dir;return{earthPos:s,earthRadius:r,sunDir:es(a).normalize()}}frame=()=>{const t=performance.now(),e=t-this.lastFrame;this.lastFrame=t,this.frameTimes.push(e),this.frameTimes.length>120&&this.frameTimes.shift();const i=this.frameTimes.reduce((C,A)=>C+A,0)/this.frameTimes.length;this.stats={fps:i>0?1e3/i:0,frames:this.stats.frames+1};const s=new Date,r=(t-this.clockStart)/1e3,{earthPos:a,earthRadius:o,sunDir:l}=this.geometryNow(s);this.sun.setRadius(ws("Sun",this.mode)),this.sun.update(r,this.now?.xray?.flux_long??null),this.activeRegions.update(s,this.regionsObservedAt,ws("Sun",this.mode)),this.sunLight.position.set(0,0,0);for(const C of this.planets.values())C.update(s,this.mode,this.rig.camera.position);this.earth.group.position.copy(a),this.earth.setRadius(o),this.earth.update(s,l),this.earth.setAurora(this.aurora,this.auroraVisible);const c=this.now?.solar_wind,h=this.now?.propagated,u=h?.bz??c?.bz_gsm??null,f=h?.density??c?.density??null,m=h?.speed??c?.speed??null,_=du(u,f,m),g=Cl(s)*Math.PI/180,p=Math.cos(-g),d=Math.sin(-g);this.sunDirEarthFixed.set(l.x*p+l.z*d,l.y,-l.x*d+l.z*p),this.shieldVisible&&(this.fieldLines.ensureTraced(s),this.fieldLines.setScale(o),this.fieldLines.setDynamics(r,this.sunDirEarthFixed,_?.r0Re??null,_?.alpha??null,this.now?.kp?.estimated_kp??null),this.magnetosphere.setScale(o),this.magnetosphere.update(_,l)),this.windVisible&&(this.solarWind.setVisible(!0),this.solarWind.setScale(o),this.solarWind.update(r,l,m,f,_?.r0Re??null,_?.alpha??null));const E=es(Qm(s)),b=E.length(),M=E.clone().normalize().multiplyScalar(_3(b,this.mode,o));this.moon.mesh.position.copy(a).add(M),this.moon.mesh.scale.setScalar(ws("Moon",this.mode)),this.cmeCones.update(Ig(this.cmes,s),s,this.mode,a),this.rig.followTarget(a),this.rig.update(),this.renderer.render(this.scene,this.rig.camera),this.raf=requestAnimationFrame(this.frame)};start(){this.raf||(this.setView("deck",!0),this.raf=requestAnimationFrame(this.frame))}stop(){cancelAnimationFrame(this.raf),this.raf=0}resize=()=>{const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.rig.resize(t/Math.max(1,e))};dispose(){this.stop(),window.removeEventListener("resize",this.resize),this.earth.dispose(),this.sun.dispose(),this.fieldLines.dispose(),this.magnetosphere.dispose(),this.solarWind.dispose(),this.activeRegions.dispose(),this.cmeCones.dispose(),this.rig.dispose(),this.renderer.dispose()}}const Ya=24,d0="https://services.swpc.noaa.gov",Bs=[{id:"suvi-304",label:"SUVI 304 Å",product:"suvi-primary-304",instrument:"GOES-19 SUVI",describes:"Chromosphere at ~50 000 K — prominences and filaments"},{id:"suvi-195",label:"SUVI 195 Å",product:"suvi-primary-195",instrument:"GOES-19 SUVI",describes:"Corona at ~1.5 million K — active regions and coronal holes"},{id:"suvi-171",label:"SUVI 171 Å",product:"suvi-primary-171",instrument:"GOES-19 SUVI",describes:"Quiet corona at ~600 000 K — coronal loops"},{id:"suvi-131",label:"SUVI 131 Å",product:"suvi-primary-131",instrument:"GOES-19 SUVI",describes:"Flaring plasma at ~10 million K — brightest during flares"},{id:"lasco-c2",label:"LASCO C2",product:"lasco-c2",instrument:"SOHO LASCO",describes:"Coronagraph, 2–6 solar radii — where CMEs first appear"},{id:"lasco-c3",label:"LASCO C3",product:"lasco-c3",instrument:"SOHO LASCO",describes:"Coronagraph, 3.7–30 solar radii — CMEs heading outward"}];function Fg(n){const t=/_s(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/.exec(n);if(t){const[,i,s,r,a,o,l]=t;return`${i}-${s}-${r}T${a}:${o}:${l}.000Z`}const e=/\/(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})_/.exec(n);if(e){const[,i,s,r,a,o]=e;return`${i}-${s}-${r}T${a}:${o}:00.000Z`}return null}async function Og(n,t){const e=`${d0}/products/animations/${n.product}.json`;try{const i=await fetch(e,{cache:"no-store",signal:t});if(!i.ok)return null;const s=await i.json();if(!Array.isArray(s))return null;const r=[];for(const c of s){if(!c?.url)continue;const h=Fg(c.url);h&&r.push({url:`${d0}${c.url}`,time:h})}if(r.sort((c,h)=>Date.parse(c.time)-Date.parse(h.time)),r.length===0)return null;const a=(Date.parse(r[r.length-1].time)-Date.parse(r[0].time))/36e5;let o=r;if(r.length>Ya){const c=(r.length-1)/(Ya-1);o=Array.from({length:Ya},(h,u)=>r[Math.round(u*c)])}const l=await zg(o,t);return{id:n.id,label:n.label,describes:n.describes,instrument:n.instrument,frames:o,totalAvailable:r.length,spanHours:a,frameBytes:l.bytes,newestGood:l.index,skippedDropouts:l.skipped,sourceUrl:e}}catch{return null}}async function Bg(n,t){try{const i=(await fetch(n,{method:"HEAD",signal:t})).headers.get("content-length");return i?Number(i):null}catch{return null}}async function zg(n,t){const e=n.length-1,i=Math.min(6,n.length),s=await Promise.all(Array.from({length:i},(o,l)=>Bg(n[e-l].url,t))),r=s.filter(o=>o!==null&&o>0).sort((o,l)=>o-l);if(r.length===0)return{index:e,skipped:0,bytes:null};const a=r[Math.floor(r.length/2)];for(let o=0;o<i;o++){const l=s[o]??null;if(l!==null&&l>=a*.4)return{index:e-o,skipped:o,bytes:l}}return{index:e,skipped:0,bytes:s[0]??null}}function kg(n,t,e){let i=0;const s=n.frames.length;return new Promise(r=>{let a=0;const o=()=>{i++,a++,t(i,s),a>=s&&r()};for(const l of n.frames){const c=new Image;c.onload=o,c.onerror=o,c.src=l.url}})}function te(n){if(!n)return"--:--";const t=Date.parse(n);if(!Number.isFinite(t))return"--:--";const e=new Date(t);return`${String(e.getUTCHours()).padStart(2,"0")}:${String(e.getUTCMinutes()).padStart(2,"0")}`}function mi(n){if(!Number.isFinite(n))return"unknown";const t=Math.max(0,Math.round(n));if(t<90)return`${t}s`;const e=Math.round(t/60);return e<90?`${e} min`:`${(e/60).toFixed(1)} h`}const we="no data";function Ll(n){return n?n.tier==="modeled"?"D":n.tier==="ambient"?"M":"E":"E"}function Il(n){return n?n.tier==="modeled"?`Modeled — ${n.model?.name??"model"}${n.model?.ref?` (${n.model.ref})`:""}`:n.tier==="ambient"?"Ambient — artistic, parameter-driven":`Measured — ${n.source}`:""}function Ss(n,t=1){return n==null||!Number.isFinite(n)?we:n.toFixed(t)}function f0(n){return n==null||!Number.isFinite(n)?we:String(Math.round(n))}function gi(n,t=new Date){if(!n||!n.data_time)return{state:"no-data",ageS:null,label:n?.error?`no data · ${n.error}`:we};const e=(t.getTime()-Date.parse(n.data_time))/1e3;return Number.isFinite(e)?e>n.stale_after_s?{state:"stale",ageS:e,label:`stale · no data since ${te(n.data_time)} UTC (${mi(e)} old)`}:{state:"fresh",ageS:e,label:`${te(n.data_time)} UTC · ${mi(e)} old`}:{state:"no-data",ageS:null,label:we}}const ll=[{id:"kp",label:"Planetary K",unit:"Kp",part:"kp",value:n=>Ss(n?.kp?.estimated_kp??null,2),detail:n=>n?.kp?.kp?`NOAA ${n.kp.kp}`:"",meaning:"A 0–9 index of global geomagnetic disturbance, derived from ground magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic storm, and the aurora moves toward the equator."},{id:"bz",label:"IMF Bz",unit:"nT",part:"solar_wind",series:"bz_gsm",value:n=>Ss(n?.solar_wind?.bz_gsm??null,1),detail:n=>{const t=n?.solar_wind?.bz_gsm;return t==null?"":t<0?"southward":"northward"},meaning:"The north–south component of the interplanetary magnetic field, in GSM coordinates. This is the single most useful predictor on the panel: when Bz turns southward it opposes Earth’s field, magnetic reconnection opens the magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what storms are made of."},{id:"bt",label:"IMF total",unit:"nT",part:"solar_wind",series:"bt",value:n=>Ss(n?.solar_wind?.bt??null,1),meaning:"Total strength of the interplanetary magnetic field. A high Bt means there is a lot of field available to turn southward."},{id:"speed",label:"Wind speed",unit:"km/s",part:"solar_wind",series:"speed",value:n=>f0(n?.solar_wind?.speed??null),detail:n=>n?.solar_wind?.spacecraft?`via ${n.solar_wind.spacecraft}`:"",meaning:"Bulk speed of the solar wind at L1, about a million miles sunward of Earth. Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal hole stream. Speed sets how hard the wind presses on the magnetosphere, and how long the warning is: at 400 km/s, L1 buys roughly an hour."},{id:"density",label:"Proton density",unit:"cm⁻³",part:"solar_wind",series:"density",value:n=>Ss(n?.solar_wind?.density??null,1),meaning:"Protons per cubic centimetre in the solar wind. With speed it sets the dynamic pressure that compresses the magnetopause."},{id:"xray",label:"X-ray class",unit:"0.1–0.8 nm",part:"xray",value:n=>n?.xray?.class??we,detail:n=>n?.xray?.flux_long!=null?`${n.xray.flux_long.toExponential(1)} W/m²`:"",meaning:"Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. Each letter is ten times the one before: A, B, C, M, X. M and X class flares cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive at the speed of light, so there is no warning."},{id:"protons",label:"Radiation (S)",unit:"pfu ≥10 MeV",part:"particles",value:n=>{const t=n?.particles;return!t||t.proton_10mev===null?we:`S${t.s_scale??0}`},detail:n=>{const t=n?.particles;return t?.proton_10mev===null||t?.proton_10mev===void 0?"":`${t.proton_10mev.toFixed(2)} pfu · ${t.s_text??""}`},meaning:"Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S scale it defines. S1 begins at 10 particle flux units, and each step up is ten times the last. This is the one space-weather hazard that endangers people rather than equipment: at S3 and above, aviation crews on polar routes accumulate real dose and astronauts outside a hull are at risk. Protons from a flare can arrive within tens of minutes, far ahead of any CME."},{id:"electrons",label:"Electron flux",unit:"pfu ≥2 MeV",part:"particles",value:n=>f0(n?.particles?.electron_2mev??null),detail:n=>{const t=n?.particles?.electron_2mev;return t==null?"":t>=1e3?"above NOAA alert level":"normal"},meaning:"Integral electron flux above 2 MeV at geostationary orbit. Sustained flux above 1000 particle flux units drives deep dielectric charging — electrons bury themselves inside insulating materials until the material discharges through the spacecraft. It is a leading cause of satellite anomalies, and it builds over days rather than minutes."},{id:"mpause",label:"Magnetopause",unit:"Rₑ",part:"magnetopause",value:n=>Ss(n?.magnetopause?.standoff_re??null,1),detail:()=>"Shue 1998",meaning:"Modelled distance from Earth’s centre to the sunward edge of the magnetosphere, in Earth radii, computed from the live solar wind. Typically 10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and exposed to the solar wind directly."}];function vu(n,t){const e=n.value;if(!e||e.length<2)return null;const i=p=>t.log?Math.log10(Math.max(p,1e-12)):p,s=[],r=[];for(let p=0;p<e.length;p++){const d=e[p];d==null||!Number.isFinite(d)||t.log&&d<=0||(s.push(p),r.push(i(d)))}if(r.length<2)return null;let a=Math.min(...r),o=Math.max(...r);if(t.rule!==null&&t.rule!==void 0){const p=i(t.rule);a=Math.min(a,p),o=Math.max(o,p)}t.band&&(a=Math.min(a,i(t.band[0])),o=Math.max(o,i(t.band[1])));const l=o-a||1,c=e.length-1,h=1.2,u=p=>p/c*(t.width-h*2)+h,f=p=>t.height-h-(p-a)/l*(t.height-h*2),m=s.map((p,d)=>({x:u(p),y:f(r[d]),v:r[d]}));let _=m[0],g=m[0];for(const p of m)p.v<_.v&&(_=p),p.v>g.v&&(g=p);return{pts:m,min:a,max:o,last:m[m.length-1]??null,lo:_,hi:g,w:t.width,h:t.height}}function Vg(n){return n.map((t,e)=>`${e===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join("")}function Wi(n,t={}){const e={width:62,height:15,rule:null,band:null,log:!1,extremes:!1,label:"",className:"",...t},i=vu(n,e);if(!i)return'<span class="spark-missing" title="no history">—</span>';const s=f=>e.log?Math.log10(Math.max(f,1e-12)):f,r=i.max-i.min||1,a=1.2,o=f=>e.height-a-(f-i.min)/r*(e.height-a*2),l=e.band?`<rect class="spark-band" x="0" y="${o(s(e.band[1])).toFixed(2)}" width="${e.width}"
        height="${Math.max(.5,o(s(e.band[0]))-o(s(e.band[1]))).toFixed(2)}" />`:"",c=e.rule!==null&&e.rule!==void 0?`<line class="spark-rule" x1="0" y1="${o(s(e.rule)).toFixed(2)}" x2="${e.width}" y2="${o(s(e.rule)).toFixed(2)}" />`:"",h=e.extremes?`<circle class="spark-lo" cx="${i.lo.x.toFixed(2)}" cy="${i.lo.y.toFixed(2)}" r="1.3" />
       <circle class="spark-hi" cx="${i.hi.x.toFixed(2)}" cy="${i.hi.y.toFixed(2)}" r="1.3" />`:"",u=i.last?`<circle class="spark-last" cx="${i.last.x.toFixed(2)}" cy="${i.last.y.toFixed(2)}" r="1.6" />`:"";return`<svg class="spark-inline ${e.className}" viewBox="0 0 ${e.width} ${e.height}"
    width="${e.width}" height="${e.height}" role="img" aria-label="${Gg(e.label||"trend")}"
    preserveAspectRatio="none">${l}${c}<path class="spark-path" d="${Vg(i.pts)}" />${h}${u}</svg>`}function hi(n,t={}){const e={width:268,height:46,extremes:!0,...t},i=vu(n,{...e,width:e.width,height:e.height});if(!i)return'<p class="tile-meta">No history loaded.</p>';const s=e.format??(o=>o.toFixed(1)),r=o=>e.log?Math.pow(10,o):o,a=n.time.length>1?Date.parse(n.time[n.time.length-1])-Date.parse(n.time[0]):0;return`${Wi(n,{...e,label:e.label??"history"})}
    <p class="tile-meta">${s(r(i.lo.v))} to ${s(r(i.hi.v))}${e.unit?` ${e.unit}`:""}
    over the last ${Hg(a)} · <span class="spark-key-last">●</span> now
    <span class="spark-key-ex">●</span> range</p>`}function Hg(n){const t=n/36e5;if(t<48)return`${t.toFixed(0)} h`;const e=t/24;if(e<60)return`${e.toFixed(0)} days`;const i=e/30.44;return i<24?`${i.toFixed(0)} months`:`${(e/365.25).toFixed(0)} years`}function Gg(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Vi={particle:'<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="1.6"/><path d="M2 2l3.2 2.6M14 2l-3.2 2.6M2 10l3.2-2.6M14 10l-3.2-2.6"/></svg>',wind:'<svg class="glyph" viewBox="0 0 16 12"><path d="M1 3h8a2 2 0 1 0-2-2M1 6h11a2 2 0 1 1-2 2M1 9h6a1.6 1.6 0 1 1-1.6 1.6"/></svg>',field:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v10M8 1C4 3 2 5 2 6s2 3 6 5M8 1c4 2 6 4 6 5s-2 3-6 5"/></svg>',flare:'<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v3.4M8 7.6V11M2.6 6h3.2M10.2 6h3.2M4.2 2.4l2.2 2.2M9.6 7.6l2.2 2.2M11.8 2.4L9.6 4.6M6.4 7.6l-2.2 2.2"/></svg>',aurora:'<svg class="glyph" viewBox="0 0 16 12"><path d="M3 11V5c0-2 1-3.4 2.4-3.4M7 11V4.4c0-2 1-3.4 2.4-3.4M11 11V5.4c0-2 1-3.2 2.2-3.2"/></svg>',shield:'<svg class="glyph" viewBox="0 0 16 12"><path d="M12 1C7 1 3 3.2 3 6s4 5 9 5"/><circle cx="13.4" cy="6" r="1.5"/></svg>'},Wg='<span class="sentence-missing">no data</span>';function Hi(n,t,e){if(n==null||!Number.isFinite(n))return Wg;const i=e==="%"?" tight":"";return`<b class="sentence-num">${n.toFixed(t)}</b><span class="sentence-unit${i}">${e}</span>`}function $g(n){const t=n.now?.data??null,e=t?.solar_wind??null,i=[],s=n.series?{time:n.series.data.time,value:n.series.data.speed}:null,r=n.series?{time:n.series.data.time,value:n.series.data.bz_gsm}:null,a=e?.bz_gsm??null,o=a===null?"in an unknown direction":a<-5?"strongly southward":a<0?"southward":"northward",l=a===null?"":a<0?" &mdash; the orientation that opens Earth&rsquo;s field and lets energy in":" &mdash; the orientation that keeps Earth&rsquo;s field closed";i.push(`${Vi.wind} The solar wind is blowing ${s?Wi(s,{label:"wind speed over the last 24 hours"}):""} ${Hi(e?.speed??null,0,"km/s")}, carrying a field that points ${o} ${r?Wi(r,{rule:0,extremes:!0,label:"Bz over the last 24 hours, rule at zero"}):""} ${Hi(a,1,"nT")}${l}.`);const c=t?.magnetopause?.standoff_re??null,h=c===null?"":c<8?", pushed well in":c>11.5?", standing off comfortably":"";i.push(`${Vi.shield} It meets the magnetosphere ${Hi(c,1,"R⊕")} out on the sunward side${h}.`);const u=t?.kp?.estimated_kp??null,f=u===null?"of unknown disturbance":u>=5?"storming":u>=4?"unsettled":"quiet";i.push(`${Vi.field} The ground beneath is ${f} ${n.kpSeries?Wi(n.kpSeries,{band:[0,4],extremes:!0,label:"Kp over the last 6 hours, quiet band shaded"}):""} ${Hi(u,2,"Kp")}.`);const m=t?.particles??null;if(m){const p=m.proton_10mev;i.push(`${Vi.particle} Radiation is at <b class="sentence-num">S${m.s_scale??0}</b>${n.protonSeries?` ${Wi(n.protonSeries,{log:!0,extremes:!0,label:"proton flux above 10 MeV, last 6 hours, logarithmic"})}`:""} ${Hi(p,2,"pfu")}`+(m.s_scale!==null&&m.s_scale>=1?" &mdash; a storm is under way":" &mdash; nothing to worry about")+".")}const _=t?.xray??null,g=n.aurora?.data??null;return i.push(`${Vi.flare} The Sun is putting out ${n.xraySeries?Wi(n.xraySeries,{log:!0,extremes:!0,label:"X-ray flux over the last 6 hours, logarithmic"}):""} <b class="sentence-num">${_?.class??"no data"}</b> X-rays, and ${Vi.aurora} the aurora is forecast to reach ${Hi(g?.max_probability??null,0,"%")} at its brightest.`),i.join(" ")}function Xg(n){const t=n.now?.data??null,e=t?.solar_wind??null,i=(s,r)=>s==null||!Number.isFinite(s)?"no data":s.toFixed(r);return`Solar wind ${i(e?.speed,0)} kilometres per second, interplanetary field Bz ${i(e?.bz_gsm,1)} nanotesla, magnetopause standoff ${i(t?.magnetopause?.standoff_re,1)} Earth radii, planetary K index ${i(t?.kp?.estimated_kp,2)}, X-ray class ${t?.xray?.class??"no data"}, peak aurora probability ${i(n.aurora?.data?.max_probability,0)} percent.`}const ve="https://services.swpc.noaa.gov",ue={mag:`${ve}/json/rtsw/rtsw_mag_1m.json`,wind:`${ve}/json/rtsw/rtsw_wind_1m.json`,kp1m:`${ve}/json/planetary_k_index_1m.json`,xrayFlares:`${ve}/json/goes/primary/xray-flares-latest.json`,xrays6h:`${ve}/json/goes/primary/xrays-6-hour.json`,scales:`${ve}/products/noaa-scales.json`,aurora:`${ve}/json/ovation_aurora_latest.json`,regions:`${ve}/json/solar_regions.json`,alerts:`${ve}/products/alerts.json`,summaryMag:`${ve}/products/summary/solar-wind-mag-field.json`,summarySpeed:`${ve}/products/summary/solar-wind-speed.json`};function ge(n){if(!n||typeof n!="string")return null;let t=n.trim().replace(" ","T");/[Zz]$|[+-]\d{2}:?\d{2}$/.test(t)||(t+="Z");const e=Date.parse(t);return Number.isFinite(e)?new Date(e).toISOString():null}function Ht(n){if(n==null||n==="")return null;const t=typeof n=="number"?n:Number(n);return!Number.isFinite(t)||t===-9999||t===-999?null:t}function fn(n){return Array.isArray(n)?n:[]}function zs(n,t,e){let i=null,s=-1/0;for(const r of n){if(!e(r))continue;const a=Date.parse(ge(r[t])??"");Number.isFinite(a)&&a>s&&(s=a,i=r)}return i}const jr=n=>n.active===!0;function qg(n,t){const e=zs(fn(n),"time_tag",jr),i=zs(fn(t),"time_tag",jr);if(!e&&!i)return null;const s=ge(e?.time_tag),r=ge(i?.time_tag),a=[s,r].filter(l=>!!l);return a.length===0?null:{time:a.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),bz_gsm:Ht(e?.bz_gsm),by_gsm:Ht(e?.by_gsm),bx_gsm:Ht(e?.bx_gsm),bt:Ht(e?.bt),speed:Ht(i?.proton_speed),density:Ht(i?.proton_density),temperature:Ht(i?.proton_temperature),spacecraft:e?.source??i?.source??null}}function p0(n,t){const e=new Map,i=a=>ge(a.time_tag);for(const a of fn(n)){if(!jr(a))continue;const o=i(a);o&&((e.get(o)??e.set(o,{}).get(o)).m=a)}for(const a of fn(t)){if(!jr(a))continue;const o=i(a);if(!o)continue;const l=o.slice(0,17)+"00.000Z";(e.get(l)??e.set(l,{}).get(l)).w=a}const s=[...e.keys()].sort(),r={time:s,bx_gsm:[],by_gsm:[],bz_gsm:[],bt:[],density:[],speed:[],temperature:[]};for(const a of s){const{m:o,w:l}=e.get(a);r.bx_gsm.push(Ht(o?.bx_gsm)),r.by_gsm.push(Ht(o?.by_gsm)),r.bz_gsm.push(Ht(o?.bz_gsm)),r.bt.push(Ht(o?.bt)),r.density.push(Ht(l?.proton_density)),r.speed.push(Ht(l?.proton_speed)),r.temperature.push(Ht(l?.proton_temperature))}return r}function Yg(n){const t=zs(fn(n),"time_tag",()=>!0),e=ge(t?.time_tag);return!t||!e?null:{time:e,estimated_kp:Ht(t.estimated_kp),kp:t.kp??null}}function xu(n){if(n===null||!Number.isFinite(n)||n<=0)return null;const t=[["X",1e-4],["M",1e-5],["C",1e-6],["B",1e-7],["A",1e-8]];for(const[e,i]of t)if(n>=i){const s=n/i;return`${e}${s.toFixed(1)}`}return`A${(n/1e-8).toFixed(1)}`}function jg(n){const t=fn(n)[0],e=ge(t?.time_tag),i=t?.current_class;return!t||!e||!i?null:{time:e,class:i}}function Kg(n){const t=fn(n),e=zs(t,"time_tag",a=>String(a.energy).startsWith("0.1-0.8")),i=zs(t,"time_tag",a=>String(a.energy).startsWith("0.05-0.4")),s=ge(e?.time_tag);if(!e||!s)return null;const r=Ht(e.flux);return{time:s,flux_long:r,flux_short:Ht(i?.flux),class:xu(r)}}function ja(n){const t=n??{},e=t.Text??null;return{scale:Ht(t.Scale),text:e?e[0].toUpperCase()+e.slice(1):null,minor_prob:Ht(t.MinorProb??t.Prob),major_prob:Ht(t.MajorProb)}}function Zg(n){const e=n?.["0"]??null;if(!e)return null;const i=e.DateStamp??null,s=e.TimeStamp??null;return{R:ja(e.R),S:ja(e.S),G:ja(e.G),date:i,time:i?ge(s?`${i}T${s}`:`${i}T00:00:00`):null}}function Jg(n,t=8){return fn(n).map(e=>{const i=ge(e.issue_datetime),s=(e.message??"").replace(/\r/g,"");if(!i)return null;const r=s.split(`
`).map(a=>a.trim()).find(a=>/^(ALERT|WARNING|WATCH|SUMMARY|EXTENDED WARNING|CANCEL)/i.test(a))??s.split(`
`).find(a=>a.trim().length>0)?.trim()??"";return{issued:i,product:e.product_id??"",message:s,headline:r}}).filter(e=>e!==null).sort((e,i)=>Date.parse(i.issued)-Date.parse(e.issued)).slice(0,t)}const ys=360,Ar=181;function Qg(n){const t=n,e=t?.coordinates;if(!Array.isArray(e)||e.length===0)return null;const i=ge(t?.["Observation Time"]),s=ge(t?.["Forecast Time"]);if(!i||!s)return null;const r=new Uint8Array(ys*Ar);let a=0;for(const o of e){if(!Array.isArray(o)||o.length<3)continue;const l=Number(o[0]),c=Number(o[1]),h=Number(o[2]);if(!Number.isFinite(l)||!Number.isFinite(c)||!Number.isFinite(h))continue;const u=(Math.round(l)%ys+ys)%ys,f=Math.round(c)+90;if(f<0||f>=Ar)continue;const m=Math.max(0,Math.min(100,h));r[u*Ar+f]=m,m>a&&(a=m)}return{observation_time:i,forecast_time:s,max_probability:a,grid:{lon_start:0,lon_step:1,lat_start:-90,lat_step:1,width:ys,height:Ar,values:r}}}function t4(n,t,e){const i=(Math.round(e)%n.width+n.width)%n.width,s=Math.round(t)-n.lat_start;return s<0||s>=n.height?0:n.values[i*n.height+s]??0}function e4(n){const t=fn(n).map(e=>({t:ge(e.time_tag),v:Ht(e.estimated_kp)})).filter(e=>e.t!==null).sort((e,i)=>Date.parse(e.t)-Date.parse(i.t));return{time:t.map(e=>e.t),value:t.map(e=>e.v)}}function n4(n){const t=fn(n).filter(e=>String(e.energy).startsWith("0.1-0.8")).map(e=>({t:ge(e.time_tag),v:Ht(e.flux)})).filter(e=>e.t!==null).sort((e,i)=>Date.parse(e.t)-Date.parse(i.t));return{time:t.map(e=>e.t),value:t.map(e=>e.v)}}function Rr(n,t){if(n.time.length<=t)return n;const e=n.time.length/t,i=[],s=[];for(let r=0;r<t;r++){const a=Math.floor(r*e),o=Math.min(n.time.length,Math.floor((r+1)*e));let l=null,c=a;for(let h=a;h<o;h++){const u=n.value[h];u!=null&&(l===null||Math.abs(u)>Math.abs(l))&&(l=u,c=h)}i.push(n.time[c]??n.time[a]),s.push(l)}return{time:i,value:s}}function i4(n){const t=fn(n);if(t.length===0)return[];let e="";for(const r of t){const a=String(r.observed_date??"");a>e&&(e=a)}if(!e)return[];const i=new Set,s=[];for(const r of t){if(String(r.observed_date)!==e)continue;const a=Ht(r.region),o=Ht(r.latitude),l=Ht(r.longitude);a===null||o===null||l===null||i.has(a)||(i.add(a),s.push({region:a,observed:`${e}T00:00:00.000Z`,lat:o,lon:l,area:Ht(r.area),spots:Ht(r.number_spots),spotClass:r.spot_class??null,magClass:r.mag_class??null,cProb:Ht(r.c_flare_probability),mProb:Ht(r.m_flare_probability),xProb:Ht(r.x_flare_probability)}))}return s.sort((r,a)=>(a.area??0)-(r.area??0))}const Gi={kp:`${ve}/products/noaa-planetary-k-index-forecast.json`,probabilities:`${ve}/json/solar_probabilities.json`,threeDay:`${ve}/text/3-day-forecast.txt`,discussion:`${ve}/text/discussion.txt`,flares7:`${ve}/json/goes/primary/xray-flares-7-day.json`,f107:`${ve}/products/summary/10cm-flux.json`},m0=async(n,t)=>{try{const e=await fetch(n,{cache:"no-store",signal:t});return e.ok?await e.text():null}catch{return null}},Cr=async(n,t)=>{try{const e=await fetch(n,{cache:"no-store",signal:t});return e.ok?await e.json():null}catch{return null}};function s4(n){if(!Array.isArray(n))return[];const t=[];for(const e of n){const i=ge(e.time_tag),s=Number(e.kp);if(!i||!Number.isFinite(s))continue;const r=String(e.observed??"").toLowerCase();t.push({time:i,kp:s,kind:r==="observed"?"observed":r==="estimated"?"estimated":"predicted",scale:e.noaa_scale??null})}return t.sort((e,i)=>Date.parse(e.time)-Date.parse(i.time))}function r4(n){if(!Array.isArray(n))return[];const t=e=>{const i=Number(e);return Number.isFinite(i)?i:null};return n.map(e=>({date:String(e.date??"").slice(0,10),c:t(e.c_class_1_day),m:t(e.m_class_1_day),x:t(e.x_class_1_day)})).filter(e=>e.date).sort((e,i)=>i.date.localeCompare(e.date)).slice(0,3)}function a4(n){return Array.isArray(n)?n.map(t=>({begin:ge(t.begin_time)??"",max:ge(t.max_time),maxClass:String(t.max_class??""),region:Number.isFinite(Number(t.current_region))?Number(t.current_region):null})).filter(t=>t.begin&&t.maxClass).sort((t,e)=>Date.parse(e.begin)-Date.parse(t.begin)).slice(0,8):[]}function g0(n){const t=/:Issued:\s*(.+)/.exec(n)?.[1]?.trim()??null,e=n.split(`
`).filter(i=>!/^[:#]/.test(i)).join(`
`).replace(/\n{3,}/g,`

`).trim();return{issued:t,body:e}}async function o4(n){const[t,e,i,s,r,a]=await Promise.all([Cr(Gi.kp,n),Cr(Gi.probabilities,n),m0(Gi.threeDay,n),m0(Gi.discussion,n),Cr(Gi.flares7,n),Cr(Gi.f107,n)]),o=Array.isArray(a)?a[0]:void 0;return{kp:s4(t),odds:r4(e),threeDay:i,discussion:s,flares:a4(r),f107:{value:o&&Number.isFinite(Number(o.flux))?Number(o.flux):null,time:o?ge(o.time_tag):null},fetchedAt:new Date().toISOString()}}const l4=`${ve}/json/solar-cycle/observed-solar-cycle-indices.json`,Pr=n=>{const t=Number(n);return Number.isFinite(t)&&t>=0?t:null};function c4(n){if(!Array.isArray(n)||n.length===0)return null;const t={time:[],value:[]},e={time:[],value:[]},i={time:[],value:[]};let s=null,r=null;for(const a of n){const o=String(a["time-tag"]??"");if(!/^\d{4}-\d{2}$/.test(o))continue;const l=`${o}-01T00:00:00.000Z`,c=Pr(a.ssn);t.time.push(l),t.value.push(c),e.time.push(l),e.value.push(Pr(a.smoothed_ssn)),i.time.push(l),i.value.push(Pr(a["f10.7"])),c!==null&&(!r||c>r.ssn)&&(r={month:o,ssn:c}),s={month:o,ssn:c,f107:Pr(a["f10.7"])}}return t.time.length===0?null:{ssn:t,smoothed:e,f107:i,latest:s,allTimeMax:r}}function u4(n,t){const e=Math.max(0,n.time.length-t);return{time:n.time.slice(e),value:n.value.slice(e)}}async function h4(n){try{const t=await fetch(l4,{cache:"no-store",signal:n});return t.ok?c4(await t.json()):null}catch{return null}}const d4=[[9,"extreme storm"],[8,"severe storm"],[7,"strong storm"],[6,"moderate storm"],[5,"minor storm"],[4,"unsettled"],[0,"quiet"]];function f4(n){if(n===null)return"unknown";for(const[t,e]of d4)if(n>=t)return e;return"quiet"}function p4(n,t){const e=n>=0?"N":"S",i=t>=0?"E":"W";return`${Math.abs(n).toFixed(1)}°${e}, ${Math.abs(t).toFixed(1)}°${i}`}function m4(n,t,e=new Date,i=null,s=[]){const r=[],a=`${te(e.toISOString())} UTC`;n||r.push(`No space-weather data has loaded yet (checked ${a}). The scene below shows body positions only, which are computed locally and do not depend on the network.`);const o=n?.data,l=n?.parts;if(o&&l){const u=gi(l.solar_wind,e),f=o.solar_wind;if(!f||u.state==="no-data")r.push(`Solar wind: no data. ${l.solar_wind.error?`The feed reported ${l.solar_wind.error}.`:""} Nothing is being substituted for it.`.trim());else{const d=f.bz_gsm,E=d===null?"unknown":d<-5?"strongly southward, which couples energy into the magnetosphere":d<0?"southward":"northward, which keeps the magnetosphere relatively closed";r.push(`Solar wind at L1, measured by ${f.spacecraft??"the active spacecraft"}: Bz ${d===null?"no data":`${d.toFixed(1)} nanotesla`} (${E}); total field ${f.bt===null?"no data":`${f.bt.toFixed(1)} nT`}; speed ${f.speed===null?"no data":`${Math.round(f.speed)} kilometres per second`}; density ${f.density===null?"no data":`${f.density.toFixed(1)} protons per cubic centimetre`}. Measured [E], timestamped ${te(f.time)} UTC`+(u.state==="stale"?`, and now STALE — ${mi(u.ageS??0)} old.`:`, ${mi(u.ageS??0)} old.`))}if(o.propagated){const d=o.propagated.lead_minutes;r.push(`That wind was measured at L1, about 1.5 million kilometres sunward, and takes roughly an hour to arrive. NOAA propagates it to the bow shock nose [D · NOAA]: what is reaching Earth right now was observed at ${te(o.propagated.observed_at)} UTC, with Bz ${o.propagated.bz===null?"no data":`${o.propagated.bz.toFixed(1)} nT`} and speed ${o.propagated.speed===null?"no data":`${Math.round(o.propagated.speed)} km/s`}. `+(d!==null&&d>0?`There are about ${Math.round(d)} minutes of already-measured wind still in flight — that is the warning currently in hand.`:"No further measured wind is in flight."))}const m=o.particles;if(m){const d=m.s_scale===null?"no data":`S${m.s_scale}${m.s_text?` (${m.s_text})`:""}`;r.push(`Energetic particles at geostationary orbit, measured by GOES [E], ${te(m.time)} UTC: protons above 10 MeV at ${m.proton_10mev===null?"no data":`${m.proton_10mev.toFixed(2)} pfu`}, radiation storm level ${d}`+(m.s_scale!==null&&m.s_scale>=3?" — at this level aviation crews on polar routes take real dose.":".")+` Electrons above 2 MeV at ${m.electron_2mev===null?"no data":`${Math.round(m.electron_2mev)} pfu`}`+(m.electron_2mev!==null&&m.electron_2mev>=1e3?", above NOAA’s alert level for satellite charging.":", below the level that charges satellites."))}else r.push("Energetic particle flux: no data. No radiation storm level is shown.");const _=gi(l.kp,e);!o.kp||_.state==="no-data"?r.push("Planetary K index: no data."):r.push(`Planetary K index ${o.kp.estimated_kp===null?"no data":o.kp.estimated_kp.toFixed(2)} — geomagnetic conditions are ${f4(o.kp.estimated_kp)}. Measured [E], ${te(o.kp.time)} UTC${_.state==="stale"?" — STALE":""}.`);const g=gi(l.xray,e);if(!o.xray||g.state==="no-data"?r.push("GOES X-ray flux: no data."):r.push(`Solar X-ray background is class ${o.xray.class??"no data"} (${o.xray.flux_long===null?"no data":`${o.xray.flux_long.toExponential(1)} watts per square metre`}, 0.1–0.8 nanometre band, GOES). Measured [E], ${te(o.xray.time)} UTC${g.state==="stale"?" — STALE":""}.`),o.scales){const d=o.scales.G,E=o.scales.R,b=o.scales.S;r.push(`NOAA scales today: radio blackouts R${E.scale??"–"} (${E.text??"no data"}), solar radiation S${b.scale??"–"} (${b.text??"no data"}), geomagnetic storms G${d.scale??"–"} (${d.text??"no data"}). NOAA's own product, modeled [D].`)}else r.push("NOAA R/S/G scales: no data.");const p=o.magnetopause;if(p?.standoff_re!=null){const d=p.standoff_re<9?" That is a compressed magnetosphere — the shield is being pushed in.":p.standoff_re>11.5?" That is an expanded, quiet magnetosphere.":"";r.push(`Modeled [D] magnetopause standoff: ${p.standoff_re.toFixed(1)} Earth radii on the sunward side, with flaring parameter ${p.alpha?.toFixed(2)??"no data"}, computed from the ${o.propagated?"propagated":"L1"} solar wind above (dynamic pressure ${p.dyn_pressure_npa?.toFixed(2)??"no data"} nanopascals) using Shue et al. 1998, doi:10.1029/98JA01103.${d}`+(p.bow_shock_re!=null?` The bow shock stands off at ${p.bow_shock_re.toFixed(1)} Earth radii (Farris & Russell 1994).`:""))}else r.push("Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing. No boundary is drawn.");if(o.alerts.length>0){const d=o.alerts[0];r.push(`Most recent NOAA notice, ${te(d.issued)} UTC: ${d.headline||d.product}. ${o.alerts.length} notices in the last three days.`)}else r.push("No NOAA alerts, watches or warnings in the feed.")}const c=s.filter(u=>u.earthDirected&&u.arrival&&Date.parse(u.arrival.time)>e.getTime()).sort((u,f)=>Date.parse(u.arrival.time)-Date.parse(f.arrival.time));if(c.length>0){const u=c[0],f=(Date.parse(u.arrival.time)-e.getTime())/36e5;r.push(`A coronal mass ejection is on its way. NASA's DONKI catalogue analysed it leaving the Sun at ${Math.round(u.speedKms)} km/s on ${te(u.time215)} UTC, with a ${Math.round(u.halfAngle)}° half-angle cone pointed ${u.offAxisDeg<5?"almost directly at Earth":`${Math.round(u.offAxisDeg)}° off the Earth line`} [D · NASA]. Propagating it radially at that constant speed puts arrival near ${te(u.arrival.time)} UTC, about ${f<24?`${Math.round(f)} hours`:`${(f/24).toFixed(1)} days`} from now, give or take ${u.arrival.windowHours} hours [D · cone]. ${u.arrivalFromEnlil?"That arrival time is NOAA/NASA’s own Enlil run.":"Constant speed ignores drag — real ejections decelerate toward the ambient wind, so fast ones tend to arrive later than this and slow ones earlier. The window is an order-of-magnitude bound, not a fitted error."}${c.length>1?` ${c.length-1} more are also inbound.`:""}`)}else s.length>0&&r.push(`${s.length} coronal mass ejection${s.length>1?"s have":" has"} been analysed in the last few days, none of them Earth-directed with an arrival still ahead of us. Nothing is inbound.`);t.cmes&&t.cmes.count>0&&r.push(`${t.cmes.count} cone${t.cmes.count>1?"s are":" is"} drawn expanding from the Sun [D], warm where Earth lies inside the cone and cool where it does not. The apex direction, half-angle and speed are DONKI's analysis of coronagraph imagery; the radial propagation is ours.`);const h=e3(e);if(r.push(`Scene: the Sun at centre, with Mercury, Venus, Earth and Mars at their true positions for ${a}, computed locally with astronomy-engine [D]. The Sun is currently overhead at ${p4(h.lat,h.lon)}, and Earth's day/night terminator in the scene is drawn from that point [D]. The Moon is shown at its true direction from Earth.`),!t.aurora)r.push("The aurora overlay is hidden.");else if(i?.data){const u=i.data,f=(e.getTime()-Date.parse(u.observation_time))/1e3,m=f>i.stale_after_s;r.push(`Aurora: NOAA's OVATION Prime model [D · NOAA] puts the peak probability of visible aurora at ${u.max_probability}% in this forecast, valid ${te(u.forecast_time)} UTC and computed from an observation at ${te(u.observation_time)} UTC (${mi(f)} old${m?", STALE":""}). It is drawn as the glowing oval over the poles, on a 1°-by-1° grid, teal through magenta with increasing probability — a legend for intensity, not the aurora's real colours. The oval encircles the magnetic pole, not the geographic one — which is why it sits off-centre.`)}else r.push("Aurora: the OVATION forecast has not loaded, so no oval is drawn.");return t.shield?r.push(`The magnetic shield is drawn: ${t.fieldLines.lines} field lines traced through IGRF-14 (IAGA, epoch 2025.0 with secular variation to now) [D], blue where they close between hemispheres and violet where they stay open toward the solar wind. The teal boundary is the Shue et al. 1998 magnetopause and the orange one the Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. The field lines rotate with the Earth because the main field is fixed to it, and they are clamped where they would cross the magnetopause — so the dayside visibly compresses as pressure rises. That clamp is geometry, not magnetohydrodynamics: a full treatment would also stretch the tail. The boundary surfaces stop at 100° from the sunward axis, inside the range Shue et al. fitted; the real magnetotail continues far beyond.`):r.push("The magnetic shield is hidden."),r.push(`${ol(t.mode)}. Camera: ${t.view} view. ${t.reducedMotion?"Reduced motion is on — the corona is still and camera moves cut rather than glide.":"Motion is enabled."}`),t.wind!==!1&&o?.solar_wind?.speed!=null&&r.push(`The streaming particles are ambient [M] — far sparser and brighter than the real wind, which is invisible. What is real is their behaviour: they move at a rate set by the measured ${Math.round(o.solar_wind.speed)} km/s, their number follows the measured density, and they part around the same modelled magnetopause the HUD reports. When the boundary is pushed in, the flow closes in with it.`),(o?.kp?.estimated_kp??0)>4&&r.push("The field lines are shivering. That is ambient [M] — a legend for the elevated Kp above, not a motion the real field makes."),r.push("Colour, starfield and the corona's texture are ambient [M] — they are parameter-driven artwork, not measurements. The corona's brightness follows the measured X-ray flux; its turbulence does not represent anything physical."),r}const g4=[{id:"report",label:"Now"},{id:"forecast",label:"Ahead"},{id:"sun",label:"Sun"},{id:"sources",label:"Sources"},{id:"checks",label:"Checks"}];function Gt(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function _4(n,t,e){const i=m4(n.now,t,e,n.aurora,n.cmes);return`
    <h2>Now</h2>
    <p class="state-sentence" aria-hidden="true">${$g(n)}</p>
    <p class="sr-only">${Gt(Xg(n))}</p>
    <h3>Situation Report</h3>
    ${i.map(s=>`<p>${Gt(s)}</p>`).join("")}`}function v4(n){if(n.kp.length===0)return'<p class="tile-meta">No Kp forecast loaded.</p>';const t=n.kp.slice(-40),e=Math.max(5,...t.map(c=>c.kp)),i=268,s=46,r=1,a=(i-r*(t.length-1))/t.length,o=t.map((c,h)=>{const u=c.kp/e*(s-10),f=c.kind==="predicted"?"kp-pred":"kp-obs",m=c.kp>=5?" kp-storm":"";return`<rect class="${f}${m}" x="${(h*(a+r)).toFixed(2)}" y="${(s-10-u).toFixed(2)}"
      width="${a.toFixed(2)}" height="${Math.max(.6,u).toFixed(2)}">
      <title>${te(c.time)} UTC — Kp ${c.kp.toFixed(2)} (${c.kind})</title></rect>`}).join(""),l=s-10-5/e*(s-10);return`<svg class="kp-chart" viewBox="0 0 ${i} ${s}" role="img"
      aria-label="Planetary K index, observed and predicted, storm threshold at 5">
      <line class="spark-rule" x1="0" y1="${l.toFixed(2)}" x2="${i}" y2="${l.toFixed(2)}" />
      ${o}</svg>
    <p class="tile-meta"><span class="key-obs">▮</span> observed
      <span class="key-pred">▮</span> predicted · rule at Kp 5, the storm threshold</p>`}function x4(n,t){if(!n)return`<h2>Ahead</h2><p>${t?"Loading NOAA forecasts…":"Forecasts have not loaded."}</p>`;const e=n.threeDay?g0(n.threeDay):null,i=n.discussion?g0(n.discussion):null,s=n.odds[0];return`
    <h2>Ahead</h2>
    <p>Everything below is <span class="badge badge-d">D</span> NOAA's own forecast, not ours.
    Where the forecaster wrote prose, it is reproduced verbatim — a summary of a forecast is
    a different claim from the forecast.</p>

    <h3>Planetary K, observed and predicted</h3>
    ${v4(n)}

    ${s?`<h3>Flare probability, next 24 h</h3>
    <table class="prov"><tbody>
      <tr><td>C class</td><td class="num">${s.c??"—"}%</td>
          <td>common; minor or no effect at the ground</td></tr>
      <tr><td>M class</td><td class="num">${s.m??"—"}%</td>
          <td>radio blackouts on the sunlit side</td></tr>
      <tr><td>X class</td><td class="num">${s.x??"—"}%</td>
          <td>strong blackouts, possible radiation storm</td></tr>
    </tbody></table>
    <p class="tile-meta">Issued for ${Gt(s.date)}.</p>`:""}

    ${n.flares.length?`<h3>Recent flares</h3>
    <table class="prov"><tbody>${n.flares.slice(0,6).map(r=>`
      <tr><td class="num">${Gt(r.maxClass)}</td>
          <td class="num">${te(r.max??r.begin)}</td>
          <td>${r.region?`region ${r.region}`:""}
            <span class="tile-meta">${mi((Date.now()-Date.parse(r.begin))/1e3)} ago</span></td></tr>`).join("")}
    </tbody></table>`:""}

    ${n.f107.value!==null?`<h3>Solar radio flux</h3>
    <p>F10.7 at <b class="sentence-num">${n.f107.value}</b> solar flux units — the standard
    proxy for solar activity and the driver of upper-atmosphere density, so it sets how fast
    satellites in low orbit decay.</p>`:""}

    ${e?`<h3>NOAA 3-day forecast</h3>
    <pre class="product">${Gt(e.body)}</pre>
    ${e.issued?`<p class="tile-meta">Issued ${Gt(e.issued)}.
      <a href="${M4.threeDay}" rel="noreferrer noopener" target="_blank">Source</a>.</p>`:""}`:""}

    ${i?`<h3>Forecaster discussion</h3>
    <pre class="product">${Gt(i.body)}</pre>
    ${i.issued?`<p class="tile-meta">Issued ${Gt(i.issued)}.</p>`:""}`:""}`}const M4={threeDay:"https://services.swpc.noaa.gov/text/3-day-forecast.txt"};function S4(n,t){const e=Ll(t);return`<tr>
    <td>${Gt(n)}</td>
    <td><span class="badge badge-${e.toLowerCase()}" title="${Gt(Il(t))}">${e}</span></td>
    <td><a href="${t.source_url}" rel="noreferrer noopener" target="_blank">${Gt(t.source)}</a>${t.model?`<br><span class="tile-meta">${Gt(t.model.name)}</span>`:""}</td>
    <td class="num">${t.data_time?te(t.data_time):we}</td>
    <td class="num">${t.error?`<span class="err">${Gt(t.error)}</span>`:t.latency_s===null?we:`${t.latency_s}s`}</td>
  </tr>`}function y4(n,t){const e=n.now;if(!e)return"<h2>Provenance</h2><p>No envelope loaded yet.</p>";const i=n.aurora,s=i?`<tr>
    <td>aurora</td>
    <td><span class="badge badge-d">D</span></td>
    <td><a href="${i.source_url}" rel="noreferrer noopener" target="_blank">${Gt(i.source)}</a>
      <br><span class="tile-meta">${Gt(i.model?.name??"")}</span></td>
    <td class="num">${i.data?te(i.data.observation_time):we}</td>
    <td class="num">${i.data?`${i.latency_s}s`:we}</td>
  </tr>`:"";return`
    <h2>Provenance</h2>
    <p>Every element on screen, its evidence tier, where it came from and how old it is.</p>
    ${t?Mu(t):""}
    <table class="prov">
      <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Time</th><th>Lat.</th></tr></thead>
      <tbody>${Object.entries(e.parts).map(([r,a])=>S4(r,a)).join("")}${s}</tbody>
    </table>
    <h3>Tiers</h3>
    <p><span class="badge badge-e">E</span> Measured — read from an instrument, shown with its
    timestamp and latency.<br>
    <span class="badge badge-d">D</span> Modelled — computed from measured inputs by a named,
    cited model.<br>
    <span class="badge badge-m">M</span> Ambient — artwork. Parameter-driven, sometimes by real
    values, but never itself a measurement.</p>
    <h3>Models cited</h3>
    <p>Shue et al. 1998 (doi:10.1029/98JA01103) — magnetopause.<br>
    Farris &amp; Russell 1994 — bow shock.<br>
    IGRF-14 (IAGA, epoch 2025.0) — the geomagnetic field and its lines.<br>
    OVATION Prime (NOAA SWPC) — aurora probability.<br>
    astronomy-engine (VSOP87/Meeus) — every position, and the sub-solar point.</p>`}function Mu(n){return`<p><span class="summary-pill ${n.passed===n.rows.length?"ok":"bad"}">${n.passed} / ${n.rows.length} checks pass</span></p>`}function b4(n,t){return t&&!n?"<h2>Checks</h2><p>Comparing our numbers with NOAA’s own, by an independent path…</p>":n?`
    <h2>Checks</h2>
    <p>Our values against NOAA’s own published figures, fetched by a separate path at the
    same timestamp. Drift is a bug, not a rounding preference.</p>
    ${Mu(n)}
    <table class="prov">
      <tbody>
        ${n.rows.map(e=>`
          <tr class="check-row">
            <td colspan="2"><strong>${Gt(e.name)}</strong></td>
            <td class="${e.ok?"verdict-ok":"verdict-bad"}">${e.ok?"pass":"DRIFT"}</td>
          </tr>
          <tr class="check-row">
            <td class="num">${Gt(e.ours)}</td>
            <td class="tile-meta">vs</td>
            <td class="num">${Gt(e.theirs)}</td>
          </tr>
          <tr><td class="check-note" colspan="3">${Gt(e.note)}</td></tr>`).join("")}
      </tbody>
    </table>
    <p class="tile-meta">Last run ${te(n.ranAt)} UTC.</p>`:"<h2>Checks</h2><p>Not run yet.</p>"}function E4(n,t){return n===null?"unknown size":`~${(n*t/1048576).toFixed(0)} MB`}function T4(n,t){if(!n)return t?'<h3>Solar cycle</h3><p class="tile-meta">Loading the sunspot record…</p>':"";const e=n.latest,i=n.ssn.time.length/12;return`
    <h3>Solar cycle</h3>
    <p>Monthly sunspot number since ${Gt(n.ssn.time[0].slice(0,4))} —
    ${Math.round(i)} years, the longest continuous record in science.</p>
    ${hi(n.ssn,{extremes:!0,format:s=>s.toFixed(0),unit:"spots",label:"monthly sunspot number, full record"})}
    <p>The last three cycles:</p>
    ${hi(u4(n.ssn,396),{extremes:!0,format:s=>s.toFixed(0),unit:"spots",label:"monthly sunspot number, last 33 years"})}
    <p class="tile-meta">
      ${e?.ssn!==null&&e!==null?`Now <b class="sentence-num">${e.ssn.toFixed(0)}</b>
        for ${Gt(e.month)}`:"Latest month unavailable"}${n.allTimeMax?` · record <b class="sentence-num">${n.allTimeMax.ssn.toFixed(0)}</b>
        in ${Gt(n.allTimeMax.month)}`:""}.
      <span class="badge badge-e">E</span> NOAA SWPC solar-cycle indices.</p>`}function w4(n,t,e=null,i=!1){const s=t.map(h=>`<button class="ctl" data-loop="${h.id}" aria-pressed="${h.id===n.loopId}">${Gt(h.label)}</button>`).join("");if(n.loading&&!n.loop)return`<h2>The Sun</h2><div class="sun-picker">${s}</div><p>Loading frames…</p>`;if(!n.loop)return`<h2>The Sun</h2><div class="sun-picker">${s}</div>
      <p>That imagery did not load. Nothing is shown in its place.</p>`;const r=n.loop,a=r.frames[n.frameIndex]??r.frames[r.frames.length-1],o=Math.round((Date.now()-Date.parse(a.time))/6e4),l=r.frames.length,c=n.preloading?`<span class="tile-meta">Loading ${n.preloaded}/${l} frames…</span>`:n.preloaded>=l?`<button class="ctl" id="sun-play" aria-pressed="${n.playing}">${n.playing?"Pause":"Play"}</button>
         <input type="range" id="sun-scrub" min="0" max="${l-1}" value="${n.frameIndex}" aria-label="Frame" />
         <span class="tile-meta">${n.frameIndex+1}/${l}</span>`:`<button class="ctl" id="sun-play">Load loop · ${l} frames, ${E4(r.frameBytes,l)}</button>`;return`
    <h2>The Sun</h2>
    <div class="sun-picker">${s}</div>
    <div class="sun-frame">
      <img id="sun-img" src="${a.url}" alt="${Gt(r.instrument)} image of the Sun at ${te(a.time)} UTC" />
      <div class="sun-stamp"><span>${te(a.time)} UTC</span><span>${o} min ago</span></div>
    </div>
    <div class="sun-transport">${c}</div>
    <p><span class="badge badge-e">E</span> ${Gt(r.instrument)}. ${Gt(r.describes)}</p>
    <p class="tile-meta">${r.skippedDropouts>0?`The newest ${r.skippedDropouts} frame${r.skippedDropouts>1?"s were":" was"} a
         data dropout — a valid but near-empty image — so this is the newest usable one. `:"Showing the newest frame. "}Upstream published ${r.totalAvailable} frames
    over ${r.spanHours.toFixed(0)} hours; playback samples ${l} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${r.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>
    ${T4(e,i)}`}function A4(n,t){if(n.id==="kp"&&t.kpSeries)return hi(t.kpSeries,{band:[0,4],unit:"Kp",format:i=>i.toFixed(2),label:"Kp history, quiet band shaded"});if(n.id==="protons"&&t.protonSeries)return hi(t.protonSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(2),label:"proton flux above 10 MeV, logarithmic"});if(n.id==="electrons"&&t.electronSeries)return hi(t.electronSeries,{log:!0,unit:"pfu",format:i=>i.toFixed(0),label:"electron flux above 2 MeV, logarithmic"});if(n.id==="xray"&&t.xraySeries)return hi(t.xraySeries,{log:!0,unit:"W/m²",format:i=>i.toExponential(1),label:"X-ray flux history, log scale"});if(!n.series||!t.series)return"";const e=n.series;return hi({time:t.series.data.time,value:t.series.data[e]},{rule:e==="bz_gsm"?0:null,unit:n.unit,format:i=>e==="speed"?i.toFixed(0):i.toFixed(1),label:`${n.id} history`})}function R4(n,t,e){const i=ll.find(h=>h.id===n);if(!i)return"<p>Unknown instrument.</p>";const s=t.now,r=s?.data??null,a=s?.parts?.[i.part],o=gi(a,e),l=Ll(a),c=i.value(r);return`
    <h2>${Gt(i.label)}</h2>
    <p class="tile-value" style="font-size:1.9rem">
      <span>${Gt(c)}</span><span class="tile-unit">${Gt(i.unit)}</span>
    </p>
    <p class="tile-meta"><span class="badge badge-${l.toLowerCase()}">${l}</span>
      ${Gt(o.label)}</p>
    ${A4(i,t)}
    <h3>What it means</h3>
    <p>${Gt(i.meaning)}</p>
    <h3>Provenance</h3>
    ${a?`<table class="prov"><tbody>
      <tr><td>Tier</td><td>${Gt(Il(a))}</td></tr>
      <tr><td>Source</td><td><a href="${a.source_url}" rel="noreferrer noopener" target="_blank">${Gt(a.source)}</a></td></tr>
      <tr><td>Data time</td><td class="num">${a.data_time?`${te(a.data_time)} UTC`:we}</td></tr>
      <tr><td>Latency</td><td class="num">${a.latency_s===null?we:`${a.latency_s}s`}</td></tr>
      <tr><td>Stale after</td><td class="num">${Math.round(a.stale_after_s/60)} min</td></tr>
      ${a.error?`<tr><td>Error</td><td class="err">${Gt(a.error)}</td></tr>`:""}
    </tbody></table>`:"<p>No provenance recorded.</p>"}`}class C4{constructor(t){this.cb=t,this.instrumentsEl=document.getElementById("instruments"),this.tickerEl=document.getElementById("ticker"),this.tabsEl=document.getElementById("tabs"),this.bodyEl=document.getElementById("margin-body"),this.statusEl=document.getElementById("status"),this.clockEl=document.getElementById("clock"),this.buildTiles(),this.buildTabs(),this.bindMargin()}cb;instrumentsEl;tickerEl;tabsEl;bodyEl;statusEl;clockEl;tiles=new Map;tab="report";detailId=null;checksRequested=!1;state=null;checks=null;checksRunning=!1;forecast=null;forecastLoading=!1;forecastRequested=!1;cycle=null;cycleLoading=!1;cycleRequested=!1;sun={loop:null,loopId:Bs[0].id,frameIndex:0,playing:!1,loading:!0,preloaded:0,preloading:!1};narration={mode:"globe",view:"deck",reducedMotion:!1,shield:!0,fieldLines:{lines:0,points:0},aurora:!0,cmes:{shown:!0,count:0}};setNarration(t){this.narration=t}setChecks(t,e){this.checks=t,this.checksRunning=e,this.renderMargin()}setCycle(t,e){this.cycle=t,this.cycleLoading=e,this.renderMargin()}setForecast(t,e){this.forecast=t,this.forecastLoading=e,this.renderMargin()}setSunLoop(t,e){this.sun.loop=t,this.sun.loading=e,this.sun.frameIndex=t?t.newestGood:0,this.sun.playing=!1,this.sun.preloaded=0,this.sun.preloading=!1,this.renderMargin()}setSunPreload(t,e){this.sun.preloaded=t,this.sun.preloading=e,this.tab==="sun"&&this.renderMargin()}setSunFrame(t){this.sun.frameIndex=t,this.tab==="sun"&&this.updateSunFrame()}setSunPlaying(t){this.sun.playing=t,this.tab==="sun"&&this.renderMargin()}get sunState(){return this.sun}get activeTab(){return this.tab}buildTiles(){this.instrumentsEl.innerHTML="";for(const i of ll){const s=document.createElement("button");s.className="tile",s.id=`tile-${i.id}`,s.type="button",s.innerHTML=`
        <span class="tile-label">${Gt(i.label)}</span>
        <span class="tile-value"><span data-v>—</span><span class="tile-unit">${Gt(i.unit)}</span></span>
        <span class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></span>`,s.addEventListener("click",()=>this.openDetail(i.id)),this.tiles.set(i.id,s),this.instrumentsEl.appendChild(s)}const t=document.createElement("div");t.className="tile",t.id="tile-scales",t.innerHTML=`
      <span class="tile-label">NOAA scales</span>
      <span class="scales-row" data-scales></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,this.tiles.set("scales",t),this.instrumentsEl.appendChild(t);const e=document.createElement("button");e.className="tile",e.id="tile-aurora",e.type="button",e.innerHTML=`
      <span class="tile-label">Aurora peak</span>
      <span class="tile-value"><span data-v>—</span><span class="tile-unit">%</span></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`,e.addEventListener("click",()=>this.selectTab("report")),this.tiles.set("aurora",e),this.instrumentsEl.appendChild(e)}buildTabs(){this.tabsEl.innerHTML=g4.map(t=>`<button class="tab" role="tab" data-tab="${t.id}" aria-selected="${t.id===this.tab}">${t.label}</button>`).join(""),this.tabsEl.addEventListener("click",t=>{const e=t.target.closest("[data-tab]");e&&this.selectTab(e.dataset.tab)})}bindMargin(){this.bodyEl.addEventListener("click",t=>{const e=t.target,i=e.closest("[data-loop]");if(i){this.cb.onSelectLoop(i.dataset.loop);return}if(e.closest("#sun-play")){this.cb.onToggleSunPlay();return}}),this.bodyEl.addEventListener("input",t=>{const e=t.target;e.id==="sun-scrub"&&this.cb.onScrubSun(Number(e.value))})}selectTab(t){this.tab=t,t!=="detail"&&(this.detailId=null);for(const e of this.tabsEl.querySelectorAll("[data-tab]"))e.setAttribute("aria-selected",String(e.getAttribute("data-tab")===t));for(const[,e]of this.tiles)e.removeAttribute("aria-current");t==="checks"&&!this.checksRequested&&(this.checksRequested=!0,this.cb.onRunChecks()),t==="sun"&&!this.cycleRequested&&(this.cycleRequested=!0,this.cb.onLoadCycle()),t==="forecast"&&!this.forecastRequested&&(this.forecastRequested=!0,this.cb.onLoadForecast()),this.renderMargin()}openDetail(t){this.tab="detail",this.detailId=t;for(const e of this.tabsEl.querySelectorAll("[data-tab]"))e.setAttribute("aria-selected","false");for(const[e,i]of this.tiles)i.tagName==="BUTTON"&&i.setAttribute("aria-current",String(e===t));this.renderMargin(),this.bodyEl.focus()}render(t){this.state=t;const e=new Date,i=t.now,s=i?.data??null;this.clockEl.textContent=`${e.toISOString().slice(0,10)} ${te(e.toISOString())} UTC`;for(const m of ll){const _=this.tiles.get(m.id),g=i?.parts?.[m.part],p=gi(g,e),d=m.value(s);_.classList.toggle("is-stale",p.state==="stale"),_.classList.toggle("is-nodata",p.state==="no-data"||d===we),_.querySelector("[data-v]").textContent=d;const E=_.querySelector("[data-badge]"),b=Ll(g);E.textContent=b,E.className=`badge badge-${b.toLowerCase()}`;const M=m.detail?.(s)??"";_.querySelector("[data-time]").textContent=p.state==="fresh"&&M?M:p.state==="fresh"?`${mi(p.ageS??0)} old`:p.label,_.setAttribute("title",`${m.label}: ${d===we?"no data":`${d} ${m.unit}`} · ${p.label} · ${Il(g)}`),_.setAttribute("aria-label",`${m.label}: ${d===we?"no data":`${d} ${m.unit}`}, ${p.label}. Open detail.`)}const r=this.tiles.get("scales"),a=r.querySelector("[data-scales]"),o=s?.scales;a.innerHTML=o?["R","S","G"].map(m=>{const _=o[m].scale??null;return`<span class="scale-chip scale-${_??"na"}" title="${m} — ${Gt(o[m].text??"no data")}">${m}${_??"–"}</span>`}).join(""):we,r.querySelector("[data-time]").textContent=gi(i?.parts?.scales,e).label,r.classList.toggle("is-nodata",!o);const l=this.tiles.get("aurora"),c=t.aurora,h=c?{source:c.source,source_url:c.source_url,model:c.model,data_time:c.data?.observation_time??null,latency_s:c.latency_s,stale_after_s:c.stale_after_s}:void 0,u=gi(h,e);l.querySelector("[data-v]").textContent=c?.data?String(c.data.max_probability):we,l.querySelector("[data-time]").textContent=c?.data?`valid ${te(c.data.forecast_time)}`:u.label,l.classList.toggle("is-stale",u.state==="stale"),l.classList.toggle("is-nodata",!c?.data),this.tickerEl.innerHTML='<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';const f=this.tickerEl.querySelector("[data-t]");f.innerHTML=s?.alerts?.length?s.alerts.slice(0,6).map(m=>`<span class="ticker-item">${te(m.issued)} ${Gt(m.headline||m.product)}</span>`).join(""):`<span class="ticker-item">${s?"No alerts, watches or warnings in the feed.":we}</span>`,t.lastError?(this.statusEl.textContent=`Last refresh failed (${t.lastError}) at ${te(t.lastAttempt)} UTC. Showing last good data, ageing.`,this.statusEl.classList.add("is-error")):i?(this.statusEl.textContent=`Live · NOAA SWPC · refreshed ${te(i.fetched_at)} UTC · DirectSource (stage A)`,this.statusEl.classList.remove("is-error")):this.statusEl.textContent="Fetching live data from NOAA SWPC…",this.renderMargin()}renderMargin(){const t=this.state;if(!t)return;const e=new Date;switch(this.tab){case"report":this.bodyEl.innerHTML=_4(t,this.narration,e);break;case"forecast":this.bodyEl.innerHTML=x4(this.forecast,this.forecastLoading);break;case"sun":this.bodyEl.innerHTML=w4(this.sun,Bs,this.cycle,this.cycleLoading);break;case"sources":this.bodyEl.innerHTML=y4(t,this.checks);break;case"checks":this.bodyEl.innerHTML=b4(this.checks,this.checksRunning);break;case"detail":this.bodyEl.innerHTML=this.detailId?R4(this.detailId,t,e):"";break}}updateSunFrame(){const t=document.getElementById("sun-img"),e=this.sun.loop?.frames[this.sun.frameIndex];if(!t||!e){this.renderMargin();return}t.src=e.url;const i=this.bodyEl.querySelector(".sun-stamp");if(i){const r=Math.round((Date.now()-Date.parse(e.time))/6e4);i.innerHTML=`<span>${te(e.time)} UTC</span><span>${r} min ago</span>`}const s=document.getElementById("sun-scrub");s&&document.activeElement!==s&&(s.value=String(this.sun.frameIndex))}}class P4{constructor(t,e=6e4,i=5*6e4){this.source=t,this.intervalMs=e,this.auroraIntervalMs=i}source;intervalMs;auroraIntervalMs;state={now:null,series:null,kpSeries:null,xraySeries:null,protonSeries:null,electronSeries:null,aurora:null,regions:null,cmes:[],lastAttempt:null,lastError:null,loading:!0};listeners=new Set;timer=null;inflight=null;auroraTimer=null;get(){return this.state}subscribe(t){return this.listeners.add(t),t(this.state),()=>this.listeners.delete(t)}emit(t){this.state={...this.state,...t};for(const e of this.listeners)e(this.state)}async refresh(){this.inflight?.abort();const t=new AbortController;this.inflight=t,this.emit({loading:!0});try{const{now:e,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o}=await this.source.fetchSnapshot(t.signal);this.emit({now:e,series:i,kpSeries:s,xraySeries:r,protonSeries:a,electronSeries:o,lastAttempt:new Date().toISOString(),lastError:null,loading:!1})}catch(e){if(t.signal.aborted)return;this.emit({lastAttempt:new Date().toISOString(),lastError:e instanceof Error?e.message:String(e),loading:!1})}finally{this.inflight===t&&(this.inflight=null)}}async refreshAurora(){try{this.emit({aurora:await this.source.fetchAurora()})}catch{}try{this.emit({regions:await this.source.fetchRegions()})}catch{}try{this.emit({cmes:await Ug()})}catch{}}start(){this.timer===null&&(this.refresh(),this.refreshAurora(),this.timer=window.setInterval(()=>{this.refresh()},this.intervalMs),this.auroraTimer=window.setInterval(()=>{this.refreshAurora()},this.auroraIntervalMs),document.addEventListener("visibilitychange",this.onVisible))}stop(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.auroraTimer!==null&&(clearInterval(this.auroraTimer),this.auroraTimer=null),document.removeEventListener("visibilitychange",this.onVisible),this.inflight?.abort()}onVisible=()=>{document.visibilityState==="visible"&&(this.refresh(),this.refreshAurora())}}const Ka={protons:`${ve}/json/goes/primary/integral-protons-6-hour.json`,electrons:`${ve}/json/goes/primary/integral-electrons-6-hour.json`},D4=[[5,1e5,"Extreme"],[4,1e4,"Severe"],[3,1e3,"Strong"],[2,100,"Moderate"],[1,10,"Minor"]];function L4(n){if(n===null||!Number.isFinite(n))return null;for(const[t,e,i]of D4)if(n>=e)return{scale:t,text:i};return{scale:0,text:"None"}}function Za(n,t){if(!Array.isArray(n))return null;let e=null,i=-1/0;for(const s of n){if(String(s.energy)!==t)continue;const r=Date.parse(ge(s.time_tag)??"");Number.isFinite(r)&&r>i&&(i=r,e=s)}return e}function _0(n,t){if(!Array.isArray(n))return{time:[],value:[]};const e=n.filter(i=>String(i.energy)===t).map(i=>({t:ge(i.time_tag),v:Ht(i.flux)})).filter(i=>i.t!==null).sort((i,s)=>Date.parse(i.t)-Date.parse(s.t));return{time:e.map(i=>i.t),value:e.map(i=>i.v)}}function I4(n,t){const e=Za(n,">=10 MeV"),i=Za(n,">=100 MeV"),s=Za(t,">=2 MeV");if(!e&&!s)return null;const r=[e,s].map(l=>ge(l?.time_tag)).filter(l=>!!l);if(r.length===0)return null;const a=r.reduce((l,c)=>Date.parse(l)<Date.parse(c)?l:c),o=Ht(e?.flux);return{time:a,proton10:o,proton100:Ht(i?.flux),electron2:Ht(s?.flux),satellite:Ht(e?.satellite??s?.satellite),s:L4(o)}}const Ja=`${ve}/products/geospace/propagated-solar-wind-1-hour.json`;function U4(n,t=new Date){if(!Array.isArray(n)||n.length<2)return null;const e=n[0];if(!Array.isArray(e))return null;const i=p=>e.indexOf(p),s=i("time_tag"),r=i("propagated_time_tag");if(s<0||r<0)return null;const a=i("speed"),o=i("density"),l=i("temperature"),c=i("bz"),h=i("bt"),u=[];for(let p=1;p<n.length;p++){const d=n[p];if(!Array.isArray(d))continue;const E=ge(d[s]),b=ge(d[r]);!E||!b||u.push({observedAt:E,arrivesAt:b,speed:Ht(d[a]),density:Ht(d[o]),temperature:Ht(d[l]),bz:Ht(d[c]),bt:Ht(d[h])})}if(u.length===0)return null;u.sort((p,d)=>Date.parse(p.arrivesAt)-Date.parse(d.arrivesAt));const f=t.getTime();let m=null;for(const p of u)Date.parse(p.arrivesAt)<=f&&(m=p);m??=u[0];const _=u[u.length-1],g=(Date.parse(_.arrivesAt)-f)/6e4;return{samples:u,arrivingNow:m,leadMinutes:Number.isFinite(g)?g:null}}const en="NOAA SWPC",Ye={solar_wind:1200,kp:1200,xray:1200,scales:360*60,alerts:10080*60,magnetopause:1200,particles:1800,propagated:1800,aurora:3600,regions:2160*60},N4=15e3;async function je(n,t){const e=new AbortController,i=setTimeout(()=>e.abort(new Error("timeout")),N4),s=()=>e.abort(t?.reason);t?.addEventListener("abort",s,{once:!0});try{const r=await fetch(n,{cache:"no-store",signal:e.signal});return r.ok?{json:await r.json()}:{json:null,error:`HTTP ${r.status}`}}catch(r){return{json:null,error:r instanceof Error?r.message:String(r)}}finally{clearTimeout(i),t?.removeEventListener("abort",s)}}function $i(n,t){if(!t)return null;const e=(Date.parse(n)-Date.parse(t))/1e3;return Number.isFinite(e)?Math.round(e):null}function Wn(n,t,e,i,s,r,a="measured",o=null){return{tier:a,source:i,source_url:s,model:o,data_time:t,latency_s:$i(n,t),stale_after_s:e,...r?{error:r}:{}}}class Su{name="DirectSource (stage A · browser → NOAA SWPC)";async fetchNow(t){return(await this.fetchSnapshot(t)).now}async fetchSnapshot(t){const[e,i,s,r,a,o,l,c,h]=await Promise.all([je(ue.mag,t),je(ue.wind,t),je(ue.kp1m,t),je(ue.xrays6h,t),je(ue.scales,t),je(ue.alerts,t),je(Ka.protons,t),je(Ka.electrons,t),je(Ja,t)]),u=new Date().toISOString(),f=e.json||i.json?qg(e.json,i.json):null,m=s.json?Yg(s.json):null,_=r.json?Kg(r.json):null,g=a.json?Zg(a.json):null,p=o.json?Jg(o.json):[],d=l.json||c.json?I4(l.json,c.json):null,E=h.json?U4(h.json):null,b=E?.arrivingNow??null,M=du(b?.bz??f?.bz_gsm??null,b?.density??f?.density??null,b?.speed??f?.speed??null),C=e.error??i.error,A={solar_wind:Wn(u,f?.time??null,Ye.solar_wind,`${en} · real-time solar wind (L1)`,ue.mag,C),kp:Wn(u,m?.time??null,Ye.kp,`${en} · planetary K (estimated)`,ue.kp1m,s.error),xray:Wn(u,_?.time??null,Ye.xray,`${en} · GOES XRS (0.1–0.8 nm)`,ue.xrays6h,r.error),scales:Wn(u,g?.time??null,Ye.scales,`${en} · NOAA scales`,ue.scales,a.error,"modeled",{name:"NOAA G/S/R scales"}),alerts:Wn(u,p[0]?.issued??null,Ye.alerts,`${en} · alerts, watches & warnings`,ue.alerts,o.error),magnetopause:Wn(u,b?.arrivesAt??f?.time??null,Ye.magnetopause,b?"Earth Star (from SWPC wind propagated to Earth)":"Earth Star (from SWPC solar wind at L1)",b?Ja:ue.mag,C,"modeled",{name:"Shue et al. 1998",ref:"doi:10.1029/98JA01103"}),particles:Wn(u,d?.time??null,Ye.particles,`${en} · GOES particle detectors`,Ka.protons,l.error??c.error),propagated:Wn(u,b?.arrivesAt??null,Ye.propagated,`${en} · solar wind propagated to the bow shock nose`,Ja,h.error,"modeled",{name:"NOAA SWPC propagation"})},P={solar_wind:f,kp:m,xray:_,scales:g,alerts:p,particles:d?{time:d.time,proton_10mev:d.proton10,proton_100mev:d.proton100,electron_2mev:d.electron2,satellite:d.satellite,s_scale:d.s?.scale??null,s_text:d.s?.text??null}:null,propagated:b?{observed_at:b.observedAt,arrives_at:b.arrivesAt,speed:b.speed,density:b.density,bz:b.bz,bt:b.bt,lead_minutes:E?.leadMinutes??null}:null,magnetopause:M?{standoff_re:M.r0Re,alpha:M.alpha,bow_shock_re:M.bowShockRe,dyn_pressure_npa:M.dynPressureNPa,model:"Shue1998"}:null},N=Object.values(A).map($=>$.data_time).filter($=>!!$).map($=>Date.parse($)).filter(Number.isFinite),y=N.length?new Date(Math.min(...N)).toISOString():u,S={source:en,source_url:"https://services.swpc.noaa.gov/",tier:"mixed",model:null,fetched_at:u,data_time:y,latency_s:$i(u,y)??0,stale_after_s:Ye.solar_wind,units:{bz_gsm:"nT",by_gsm:"nT",bx_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K",estimated_kp:"Kp",flux_long:"W/m^2",flux_short:"W/m^2",standoff_re:"Re",bow_shock_re:"Re",dyn_pressure_npa:"nPa",proton_10mev:"pfu",proton_100mev:"pfu",electron_2mev:"pfu"},data:P,parts:A},D=p0(e.json,i.json),B=D.time[D.time.length-1]??u,V={source:`${en} · real-time solar wind (L1)`,source_url:ue.mag,tier:"measured",model:null,fetched_at:u,data_time:B,latency_s:$i(u,B)??0,stale_after_s:Ye.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:D};return{now:S,series:V,kpSeries:Rr(e4(s.json),120),xraySeries:Rr(n4(r.json),120),protonSeries:Rr(_0(l.json,">=10 MeV"),120),electronSeries:Rr(_0(c.json,">=2 MeV"),120)}}async fetchAurora(t){const e=await je(ue.aurora,t),i=new Date().toISOString(),s=e.json?Qg(e.json):null,r=s?.observation_time??i;return{source:`${en} · OVATION Prime aurora forecast`,source_url:ue.aurora,tier:"modeled",model:{name:"OVATION Prime (NOAA SWPC)"},fetched_at:i,data_time:r,latency_s:$i(i,r)??0,stale_after_s:Ye.aurora,units:{values:"% probability of visible aurora"},data:s}}async fetchRegions(t){const e=await je(ue.regions,t),i=new Date().toISOString(),s=e.json?i4(e.json):[],r=s[0]?.observed??i;return{source:`${en} · solar region summary`,source_url:ue.regions,tier:"measured",model:null,fetched_at:i,data_time:r,latency_s:$i(i,r)??0,stale_after_s:Ye.regions,units:{lat:"deg",lon:"deg from central meridian",area:"millionths of hemisphere"},data:s}}async fetchSolarWindSeries(t){const[e,i]=await Promise.all([je(ue.mag,t),je(ue.wind,t)]),s=new Date().toISOString(),r=p0(e.json,i.json),a=r.time[r.time.length-1]??s;return{source:`${en} · real-time solar wind (L1)`,source_url:ue.mag,tier:"measured",model:null,fetched_at:s,data_time:a,latency_s:$i(s,a)??0,stale_after_s:Ye.solar_wind,units:{bz_gsm:"nT",bt:"nT",speed:"km/s",density:"cm^-3",temperature:"K"},data:r}}}class F4{mq=window.matchMedia("(prefers-reduced-motion: reduce)");listeners=new Set;override=null;constructor(){this.mq.addEventListener("change",()=>this.emit())}get reduced(){return this.override??this.mq.matches}setOverride(t){this.override=t,this.emit()}subscribe(t){return this.listeners.add(t),t(this.reduced),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.reduced)}}const O4=[["1","Deck view"],["2","Magnetosphere view"],["3","Orbit view"],["s","Toggle Globe / True scale"],["m","Toggle reduced motion"],["f","Toggle the magnetic shield"],["a","Toggle the aurora overlay"],["w","Toggle the solar wind stream"],["c","Toggle CME cones"],["r","Refresh data now"],["?","This help"]];function B4(n){const t=e=>{const i=e.target;if(!(e.metaKey||e.ctrlKey||e.altKey)&&!(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))){switch(e.key){case"1":n.deck();break;case"2":n.shieldView();break;case"3":n.orbit();break;case"s":case"S":n.toggleScale();break;case"m":case"M":n.toggleMotion();break;case"f":case"F":n.toggleShield();break;case"a":case"A":n.toggleAurora();break;case"w":case"W":n.toggleWind();break;case"c":case"C":n.toggleCmes();break;case"r":case"R":n.refresh();break;case"?":Qn(O4.map(([s,r])=>`${s}: ${r}`).join(". "));break;default:return}e.preventDefault()}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}function Qn(n){const t=document.getElementById("scale-announce");t&&(t.textContent=n)}const bs=async(n,t)=>(await fetch(n,{cache:"no-store",signal:t})).json();function Dr(n,t,e){return n===null||t===null||!Number.isFinite(n)||!Number.isFinite(t)?!1:Math.abs(n-t)<=e}async function z4(n){const t=[],e=new Su,[i,s,r,a,o,l]=await Promise.all([e.fetchNow(n),bs(ue.summaryMag,n),bs(ue.summarySpeed,n),bs(ue.xrayFlares,n),e.fetchSolarWindSeries(n),e.fetchAurora(n)]),c=i.data,h=s[0],u=r[0],f=(A,P)=>{const N=String(A??"").replace(" ","T").replace(/Z?$/,"Z"),y=Date.parse(N);if(!Number.isFinite(y))return null;const S=o.data.time.indexOf(new Date(y).toISOString());return S<0?null:o.data[P][S]??null},m=te(String(h?.time_tag??""));t.push({name:"IMF Bz (GSM), nT",ours:f(h?.time_tag,"bz_gsm")?.toFixed(2)??"no data",theirs:String(h?.bz_gsm??"no data"),ok:Dr(f(h?.time_tag,"bz_gsm"),Number(h?.bz_gsm),.55),note:`both at ${m} UTC · tol ±0.55 (their integer rounding)`}),t.push({name:"IMF total Bt, nT",ours:f(h?.time_tag,"bt")?.toFixed(2)??"no data",theirs:String(h?.bt??"no data"),ok:Dr(f(h?.time_tag,"bt"),Number(h?.bt),.55),note:`both at ${m} UTC · tol ±0.55`}),t.push({name:"Solar wind speed, km/s",ours:f(u?.time_tag,"speed")?.toFixed(1)??"no data",theirs:String(u?.proton_speed??"no data"),ok:Dr(f(u?.time_tag,"speed"),Number(u?.proton_speed),1.5),note:`both at ${te(String(u?.time_tag??""))} UTC · tol ±1.5`});const _=jg(a)?.class??"",g=c.xray?.class??xu(c.xray?.flux_long??null);t.push({name:"X-ray class",ours:g??"no data",theirs:_||"no data",ok:!!g&&!!_&&g[0]===_[0]&&Math.abs(parseFloat(g.slice(1))-parseFloat(_.slice(1)))<=.35,note:`our thresholds on our parsed flux (${c.xray?.flux_long?c.xray.flux_long.toExponential(2):"—"} W/m²) vs SWPC's published label. This row caught current_int_xrlong being read as a flux.`});const p=await bs(ue.kp1m,n),d=c.kp?.time??null,E=d?p.find(A=>`${String(A.time_tag)}Z`===d.replace(".000Z","Z")||Date.parse(`${String(A.time_tag)}Z`)===Date.parse(d)):void 0;t.push({name:"Planetary Kp (estimated)",ours:c.kp?.estimated_kp?.toFixed(2)??"no data",theirs:E?String(E.estimated_kp):"minute not in feed",ok:!!E&&Dr(c.kp?.estimated_kp??null,Number(E.estimated_kp),.001),note:`both at ${te(d)} UTC · exact match required. Checks our newest-record selection against the same minute upstream.`});const b=await bs(ue.mag,n),M=b.reduce((A,P)=>Date.parse(`${String(P.time_tag)}Z`)>Date.parse(`${String(A.time_tag)}Z`)?P:A,b[0]),C=[...new Set(b.filter(A=>A.active===!0).map(A=>String(A.source)))];if(t.push({name:"L1 spacecraft selected",ours:c.solar_wind?.spacecraft??"no data",theirs:C.join(", ")||"none flagged active",ok:!!c.solar_wind?.spacecraft&&C.includes(c.solar_wind.spacecraft),note:`the feed interleaves several spacecraft; newest of ANY source right now is "${String(M.source)}". Taking that instead is the bug this row guards.`}),l.data){const A=l.data.grid,P=Z3(new Date);let N=0,y=0,S=0,D=0;for(let B=0;B<A.width;B++)for(let V=45;V<=89;V++){const $=t4(A,V,B);if($<=0)continue;const G=V*Math.PI/180,q=B*Math.PI/180;N+=$*Math.cos(G)*Math.cos(q),y+=$*Math.cos(G)*Math.sin(q),S+=$*Math.sin(G),D+=$}if(D>0){const B=Math.sqrt(N*N+y*y+S*S),V=Math.asin(S/B)*180/Math.PI,$=Math.atan2(y,N)*180/Math.PI,G=K3(V,$,P.lat,P.lon);t.push({name:"Aurora oval on the geomagnetic pole",ours:`centroid ${V.toFixed(1)}°N ${$.toFixed(1)}°E`,theirs:`pole ${P.lat.toFixed(1)}°N ${P.lon.toFixed(1)}°E`,ok:G<5,note:`${G.toFixed(2)}° apart. NOAA's OVATION grid and our IGRF-14 dipole axis are independent computations.`})}}else t.push({name:"Aurora oval on the geomagnetic pole",ours:"no data",theirs:"—",ok:!1,note:"OVATION grid did not load, so orientation could not be checked"});return{rows:t,ranAt:new Date().toISOString(),passed:t.filter(A=>A.ok).length}}const k4=document.getElementById("scene"),Zt=new Ng(k4),ia=new P4(new Su,6e4),cs=new F4;let yu=null;const Qa=new Map;async function bu(n){const t=Bs.find(i=>i.id===n)??Bs[0];if(he.sunState.loopId=t.id,Qa.has(t.id)){he.setSunLoop(Qa.get(t.id)??null,!1);return}he.setSunLoop(null,!0);const e=await Og(t);Qa.set(t.id,e),he.sunState.loopId===t.id&&he.setSunLoop(e,!1)}function V4(){const n=he.sunState;!n.playing||!n.loop||he.activeTab!=="sun"||n.preloaded<n.loop.frames.length||he.setSunFrame((n.frameIndex+1)%n.loop.frames.length)}async function H4(){const n=he.sunState;if(n.loop){if(n.preloaded>=n.loop.frames.length){he.setSunPlaying(!n.playing);return}n.preloading||(he.setSunPreload(0,!0),await kg(n.loop,t=>he.setSunPreload(t,!0)),he.setSunPreload(n.loop.frames.length,!1),he.setSunPlaying(!0))}}let to=null;async function G4(){he.setChecks(null,!0);try{to=await z4()}catch(n){to={rows:[{name:"Checks could not run",ours:"error",theirs:"—",ok:!1,note:n instanceof Error?n.message:String(n)}],ranAt:new Date().toISOString(),passed:0}}he.setChecks(to,!1)}let eo=null;async function W4(){he.setForecast(null,!0);try{eo=await o4()}catch{eo=null}he.setForecast(eo,!1)}async function $4(){he.setCycle(null,!0),he.setCycle(await h4(),!1)}const he=new C4({onSelectLoop:n=>{bu(n)},onLoadCycle:()=>{$4()},onLoadForecast:()=>{W4()},onToggleSunPlay:()=>{H4()},onScrubSun:n=>{he.setSunPlaying(!1),he.setSunFrame(n)},onRunChecks:()=>{G4()}}),Nn=n=>document.getElementById(n),Eu=Nn("view-deck"),Tu=Nn("view-shield"),wu=Nn("view-orbit"),cl=Nn("scale-toggle"),Au=Nn("motion-toggle"),Ru=Nn("shield-toggle"),Cu=Nn("aurora-toggle"),Pu=Nn("wind-toggle"),Du=Nn("cme-toggle"),X4=document.getElementById("scale-label");let Lu="deck";function Fn(){he.setNarration({mode:Zt.scaleMode,view:Lu,reducedMotion:cs.reduced,shield:Zt.shieldOn,fieldLines:Zt.fieldLineStats,aurora:Zt.auroraOn,wind:Zt.windOn,cmes:{shown:Zt.cmesOn,count:Zt.cmeCount}}),he.render(ia.get())}function ns(n){Lu=n,Zt.setView(n),Eu.setAttribute("aria-pressed",String(n==="deck")),Tu.setAttribute("aria-pressed",String(n==="shield")),wu.setAttribute("aria-pressed",String(n==="orbit")),Qn(`${n==="deck"?"Deck":n==="shield"?"Magnetosphere":"Orbit"} view.`),n==="shield"&&!Zt.shieldOn&&Nl(!0),Fn()}function Ul(n){Zt.setScaleMode(n),X4.textContent=n==="globe"?"Globe":"True",cl.setAttribute("aria-pressed",String(n==="true")),cl.title=ol(n),Qn(ol(n)),Fn()}function Nl(n){Zt.setShieldVisible(n),Ru.setAttribute("aria-pressed",String(n)),Qn(n?"Magnetic field lines and boundaries shown.":"Field hidden."),Fn()}function Iu(n){Zt.setAuroraVisible(n),Cu.setAttribute("aria-pressed",String(n)),Qn(n?"Aurora forecast shown.":"Aurora hidden."),Fn()}function Fl(n){Zt.setWindVisible(n),Pu.setAttribute("aria-pressed",String(n)),Qn(n?"Solar wind stream shown.":"Solar wind stream hidden."),Fn()}Eu.addEventListener("click",()=>ns("deck"));Tu.addEventListener("click",()=>ns("shield"));wu.addEventListener("click",()=>ns("orbit"));cl.addEventListener("click",()=>Ul(Zt.scaleMode==="globe"?"true":"globe"));Ru.addEventListener("click",()=>Nl(!Zt.shieldOn));Cu.addEventListener("click",()=>Iu(!Zt.auroraOn));Pu.addEventListener("click",()=>Fl(!Zt.windOn));function Uu(n){Zt.setCmesVisible(n),Du.setAttribute("aria-pressed",String(n)),Qn(n?"CME cones shown.":"CME cones hidden."),Fn()}Du.addEventListener("click",()=>Uu(!Zt.cmesOn));Au.addEventListener("click",()=>cs.setOverride(!cs.reduced));cs.subscribe(n=>{Zt.setReducedMotion(n),Au.setAttribute("aria-pressed",String(!n)),Fn()});B4({deck:()=>ns("deck"),shieldView:()=>ns("shield"),orbit:()=>ns("orbit"),toggleScale:()=>Ul(Zt.scaleMode==="globe"?"true":"globe"),toggleMotion:()=>cs.setOverride(!cs.reduced),toggleShield:()=>Nl(!Zt.shieldOn),toggleAurora:()=>Iu(!Zt.auroraOn),toggleWind:()=>Fl(!Zt.windOn),toggleCmes:()=>Uu(!Zt.cmesOn),refresh:()=>{Qn("Refreshing."),ia.refresh()},focusReport:()=>he.selectTab("report")});ia.subscribe(n=>{Zt.setNow(n.now?.data??null),Zt.setAurora(n.aurora?.data??null),Zt.setRegions(n.regions?.data??[],n.regions?.data?.[0]?.observed??null),Zt.setCmes(n.cmes),Fn()});window.setInterval(Fn,3e4);yu=window.setInterval(V4,220);Ul("globe");Fl(!0);Zt.start();ia.start();bu(Bs[0].id);Object.assign(window,{__viewer:Zt,__stats:()=>Zt.stats,__sunTimer:yu});
