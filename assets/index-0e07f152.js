var WE=Object.defineProperty;var $E=(n,e,t)=>e in n?WE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var je=(n,e,t)=>($E(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function hd(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Ft={},Ro=[],Ri=()=>{},jE=()=>!1,qE=/^on[^a-z]/,Zc=n=>qE.test(n),dd=n=>n.startsWith("onUpdate:"),ln=Object.assign,pd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},XE=Object.prototype.hasOwnProperty,yt=(n,e)=>XE.call(n,e),nt=Array.isArray,Io=n=>Jc(n)==="[object Map]",J_=n=>Jc(n)==="[object Set]",lt=n=>typeof n=="function",Jt=n=>typeof n=="string",md=n=>typeof n=="symbol",Ut=n=>n!==null&&typeof n=="object",Q_=n=>Ut(n)&&lt(n.then)&&lt(n.catch),ev=Object.prototype.toString,Jc=n=>ev.call(n),YE=n=>Jc(n).slice(8,-1),tv=n=>Jc(n)==="[object Object]",gd=n=>Jt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Rc=hd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},KE=/-(\w)/g,Ki=Qc(n=>n.replace(KE,(e,t)=>t?t.toUpperCase():"")),ZE=/\B([A-Z])/g,jo=Qc(n=>n.replace(ZE,"-$1").toLowerCase()),eu=Qc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ic=Qc(n=>n?`on${eu(n)}`:""),Ba=(n,e)=>!Object.is(n,e),Ff=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Uc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},JE=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let vg;const Rh=()=>vg||(vg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _d(n){if(nt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Jt(i)?nT(i):_d(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if(Jt(n))return n;if(Ut(n))return n}}const QE=/;(?![^(]*\))/g,eT=/:([^]+)/,tT=/\/\*[^]*?\*\//g;function nT(n){const e={};return n.replace(tT,"").split(QE).forEach(t=>{if(t){const i=t.split(eT);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ua(n){let e="";if(Jt(n))e=n;else if(nt(n))for(let t=0;t<n.length;t++){const i=Ua(n[t]);i&&(e+=i+" ")}else if(Ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const iT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rT=hd(iT);function nv(n){return!!n||n===""}const iv=n=>Jt(n)?n:n==null?"":nt(n)||Ut(n)&&(n.toString===ev||!lt(n.toString))?JSON.stringify(n,rv,2):String(n),rv=(n,e)=>e&&e.__v_isRef?rv(n,e.value):Io(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:J_(e)?{[`Set(${e.size})`]:[...e.values()]}:Ut(e)&&!nt(e)&&!tv(e)?String(e):e;let Si;class sv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Si,!e&&Si&&(this.index=(Si.scopes||(Si.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Si;try{return Si=this,e()}finally{Si=t}}}on(){Si=this}off(){Si=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sT(n){return new sv(n)}function oT(n,e=Si){e&&e.active&&e.effects.push(n)}function aT(){return Si}const vd=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ov=n=>(n.w&rs)>0,av=n=>(n.n&rs)>0,lT=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=rs},cT=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ov(r)&&!av(r)?r.delete(n):e[t++]=r,r.w&=~rs,r.n&=~rs}e.length=t}},Ih=new WeakMap;let Ma=0,rs=1;const Dh=30;let Ti;const Os=Symbol(""),Oh=Symbol("");class xd{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,oT(this,i)}run(){if(!this.active)return this.fn();let e=Ti,t=Qr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ti,Ti=this,Qr=!0,rs=1<<++Ma,Ma<=Dh?lT(this):xg(this),this.fn()}finally{Ma<=Dh&&cT(this),rs=1<<--Ma,Ti=this.parent,Qr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ti===this?this.deferStop=!0:this.active&&(xg(this),this.onStop&&this.onStop(),this.active=!1)}}function xg(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Qr=!0;const lv=[];function qo(){lv.push(Qr),Qr=!1}function Xo(){const n=lv.pop();Qr=n===void 0?!0:n}function Un(n,e,t){if(Qr&&Ti){let i=Ih.get(n);i||Ih.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=vd()),cv(r)}}function cv(n,e){let t=!1;Ma<=Dh?av(n)||(n.n|=rs,t=!ov(n)):t=!n.has(Ti),t&&(n.add(Ti),Ti.deps.push(n))}function wr(n,e,t,i,r,o){const l=Ih.get(n);if(!l)return;let c=[];if(e==="clear")c=[...l.values()];else if(t==="length"&&nt(n)){const u=Number(i);l.forEach((h,d)=>{(d==="length"||d>=u)&&c.push(h)})}else switch(t!==void 0&&c.push(l.get(t)),e){case"add":nt(n)?gd(t)&&c.push(l.get("length")):(c.push(l.get(Os)),Io(n)&&c.push(l.get(Oh)));break;case"delete":nt(n)||(c.push(l.get(Os)),Io(n)&&c.push(l.get(Oh)));break;case"set":Io(n)&&c.push(l.get(Os));break}if(c.length===1)c[0]&&Fh(c[0]);else{const u=[];for(const h of c)h&&u.push(...h);Fh(vd(u))}}function Fh(n,e){const t=nt(n)?n:[...n];for(const i of t)i.computed&&yg(i);for(const i of t)i.computed||yg(i)}function yg(n,e){(n!==Ti||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const uT=hd("__proto__,__v_isRef,__isVue"),uv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(md)),fT=yd(),hT=yd(!1,!0),dT=yd(!0),bg=pT();function pT(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Et(this);for(let o=0,l=this.length;o<l;o++)Un(i,"get",o+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Et)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qo();const i=Et(this)[e].apply(this,t);return Xo(),i}}),n}function mT(n){const e=Et(this);return Un(e,"has",n),e.hasOwnProperty(n)}function yd(n=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(n?e?RT:mv:e?pv:dv).get(i))return i;const l=nt(i);if(!n){if(l&&yt(bg,r))return Reflect.get(bg,r,o);if(r==="hasOwnProperty")return mT}const c=Reflect.get(i,r,o);return(md(r)?uv.has(r):uT(r))||(n||Un(i,"get",r),e)?c:wn(c)?l&&gd(r)?c:c.value:Ut(c)?n?Sd(c):nl(c):c}}const gT=fv(),_T=fv(!0);function fv(n=!1){return function(t,i,r,o){let l=t[i];if(zo(l)&&wn(l)&&!wn(r))return!1;if(!n&&(!Vc(r)&&!zo(r)&&(l=Et(l),r=Et(r)),!nt(t)&&wn(l)&&!wn(r)))return l.value=r,!0;const c=nt(t)&&gd(i)?Number(i)<t.length:yt(t,i),u=Reflect.set(t,i,r,o);return t===Et(o)&&(c?Ba(r,l)&&wr(t,"set",i,r):wr(t,"add",i,r)),u}}function vT(n,e){const t=yt(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&wr(n,"delete",e,void 0),i}function xT(n,e){const t=Reflect.has(n,e);return(!md(e)||!uv.has(e))&&Un(n,"has",e),t}function yT(n){return Un(n,"iterate",nt(n)?"length":Os),Reflect.ownKeys(n)}const hv={get:fT,set:gT,deleteProperty:vT,has:xT,ownKeys:yT},bT={get:dT,set(n,e){return!0},deleteProperty(n,e){return!0}},wT=ln({},hv,{get:hT,set:_T}),bd=n=>n,tu=n=>Reflect.getPrototypeOf(n);function Kl(n,e,t=!1,i=!1){n=n.__v_raw;const r=Et(n),o=Et(e);t||(e!==o&&Un(r,"get",e),Un(r,"get",o));const{has:l}=tu(r),c=i?bd:t?Td:Va;if(l.call(r,e))return c(n.get(e));if(l.call(r,o))return c(n.get(o));n!==r&&n.get(e)}function Zl(n,e=!1){const t=this.__v_raw,i=Et(t),r=Et(n);return e||(n!==r&&Un(i,"has",n),Un(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Jl(n,e=!1){return n=n.__v_raw,!e&&Un(Et(n),"iterate",Os),Reflect.get(n,"size",n)}function wg(n){n=Et(n);const e=Et(this);return tu(e).has.call(e,n)||(e.add(n),wr(e,"add",n,n)),this}function Sg(n,e){e=Et(e);const t=Et(this),{has:i,get:r}=tu(t);let o=i.call(t,n);o||(n=Et(n),o=i.call(t,n));const l=r.call(t,n);return t.set(n,e),o?Ba(e,l)&&wr(t,"set",n,e):wr(t,"add",n,e),this}function Mg(n){const e=Et(this),{has:t,get:i}=tu(e);let r=t.call(e,n);r||(n=Et(n),r=t.call(e,n)),i&&i.call(e,n);const o=e.delete(n);return r&&wr(e,"delete",n,void 0),o}function Eg(){const n=Et(this),e=n.size!==0,t=n.clear();return e&&wr(n,"clear",void 0,void 0),t}function Ql(n,e){return function(i,r){const o=this,l=o.__v_raw,c=Et(l),u=e?bd:n?Td:Va;return!n&&Un(c,"iterate",Os),l.forEach((h,d)=>i.call(r,u(h),u(d),o))}}function ec(n,e,t){return function(...i){const r=this.__v_raw,o=Et(r),l=Io(o),c=n==="entries"||n===Symbol.iterator&&l,u=n==="keys"&&l,h=r[n](...i),d=t?bd:e?Td:Va;return!e&&Un(o,"iterate",u?Oh:Os),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function zr(n){return function(...e){return n==="delete"?!1:this}}function ST(){const n={get(o){return Kl(this,o)},get size(){return Jl(this)},has:Zl,add:wg,set:Sg,delete:Mg,clear:Eg,forEach:Ql(!1,!1)},e={get(o){return Kl(this,o,!1,!0)},get size(){return Jl(this)},has:Zl,add:wg,set:Sg,delete:Mg,clear:Eg,forEach:Ql(!1,!0)},t={get(o){return Kl(this,o,!0)},get size(){return Jl(this,!0)},has(o){return Zl.call(this,o,!0)},add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear"),forEach:Ql(!0,!1)},i={get(o){return Kl(this,o,!0,!0)},get size(){return Jl(this,!0)},has(o){return Zl.call(this,o,!0)},add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear"),forEach:Ql(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=ec(o,!1,!1),t[o]=ec(o,!0,!1),e[o]=ec(o,!1,!0),i[o]=ec(o,!0,!0)}),[n,t,e,i]}const[MT,ET,TT,AT]=ST();function wd(n,e){const t=e?n?AT:TT:n?ET:MT;return(i,r,o)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(yt(t,r)&&r in i?t:i,r,o)}const CT={get:wd(!1,!1)},LT={get:wd(!1,!0)},PT={get:wd(!0,!1)},dv=new WeakMap,pv=new WeakMap,mv=new WeakMap,RT=new WeakMap;function IT(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function DT(n){return n.__v_skip||!Object.isExtensible(n)?0:IT(YE(n))}function nl(n){return zo(n)?n:Md(n,!1,hv,CT,dv)}function gv(n){return Md(n,!1,wT,LT,pv)}function Sd(n){return Md(n,!0,bT,PT,mv)}function Md(n,e,t,i,r){if(!Ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=r.get(n);if(o)return o;const l=DT(n);if(l===0)return n;const c=new Proxy(n,l===2?i:t);return r.set(n,c),c}function Do(n){return zo(n)?Do(n.__v_raw):!!(n&&n.__v_isReactive)}function zo(n){return!!(n&&n.__v_isReadonly)}function Vc(n){return!!(n&&n.__v_isShallow)}function _v(n){return Do(n)||zo(n)}function Et(n){const e=n&&n.__v_raw;return e?Et(e):n}function Ed(n){return Uc(n,"__v_skip",!0),n}const Va=n=>Ut(n)?nl(n):n,Td=n=>Ut(n)?Sd(n):n;function vv(n){Qr&&Ti&&(n=Et(n),cv(n.dep||(n.dep=vd())))}function xv(n,e){n=Et(n);const t=n.dep;t&&Fh(t)}function wn(n){return!!(n&&n.__v_isRef===!0)}function xr(n){return yv(n,!1)}function OT(n){return yv(n,!0)}function yv(n,e){return wn(n)?n:new FT(n,e)}class FT{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Et(e),this._value=t?e:Va(e)}get value(){return vv(this),this._value}set value(e){const t=this.__v_isShallow||Vc(e)||zo(e);e=t?e:Et(e),Ba(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Va(e),xv(this))}}function qi(n){return wn(n)?n.value:n}const NT={get:(n,e,t)=>qi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return wn(r)&&!wn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bv(n){return Do(n)?n:new Proxy(n,NT)}class zT{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xd(e,()=>{this._dirty||(this._dirty=!0,xv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Et(this);return vv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function BT(n,e,t=!1){let i,r;const o=lt(n);return o?(i=n,r=Ri):(i=n.get,r=n.set),new zT(i,r,o||!r,t)}function es(n,e,t,i){let r;try{r=i?n(...i):n()}catch(o){nu(o,e,t)}return r}function Ii(n,e,t,i){if(lt(n)){const o=es(n,e,t,i);return o&&Q_(o)&&o.catch(l=>{nu(l,e,t)}),o}const r=[];for(let o=0;o<n.length;o++)r.push(Ii(n[o],e,t,i));return r}function nu(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const l=e.proxy,c=t;for(;o;){const h=o.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,c)===!1)return}o=o.parent}const u=e.appContext.config.errorHandler;if(u){es(u,null,10,[n,l,c]);return}}UT(n,t,r,i)}function UT(n,e,t,i=!0){console.error(n)}let ka=!1,Nh=!1;const bn=[];let $i=0;const Oo=[];let mr=null,Ts=0;const wv=Promise.resolve();let Ad=null;function Cd(n){const e=Ad||wv;return n?e.then(this?n.bind(this):n):e}function VT(n){let e=$i+1,t=bn.length;for(;e<t;){const i=e+t>>>1;Ha(bn[i])<n?e=i+1:t=i}return e}function Ld(n){(!bn.length||!bn.includes(n,ka&&n.allowRecurse?$i+1:$i))&&(n.id==null?bn.push(n):bn.splice(VT(n.id),0,n),Sv())}function Sv(){!ka&&!Nh&&(Nh=!0,Ad=wv.then(Ev))}function kT(n){const e=bn.indexOf(n);e>$i&&bn.splice(e,1)}function HT(n){nt(n)?Oo.push(...n):(!mr||!mr.includes(n,n.allowRecurse?Ts+1:Ts))&&Oo.push(n),Sv()}function Tg(n,e=ka?$i+1:0){for(;e<bn.length;e++){const t=bn[e];t&&t.pre&&(bn.splice(e,1),e--,t())}}function Mv(n){if(Oo.length){const e=[...new Set(Oo)];if(Oo.length=0,mr){mr.push(...e);return}for(mr=e,mr.sort((t,i)=>Ha(t)-Ha(i)),Ts=0;Ts<mr.length;Ts++)mr[Ts]();mr=null,Ts=0}}const Ha=n=>n.id==null?1/0:n.id,GT=(n,e)=>{const t=Ha(n)-Ha(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Ev(n){Nh=!1,ka=!0,bn.sort(GT);const e=Ri;try{for($i=0;$i<bn.length;$i++){const t=bn[$i];t&&t.active!==!1&&es(t,null,14)}}finally{$i=0,bn.length=0,Mv(),ka=!1,Ad=null,(bn.length||Oo.length)&&Ev()}}function WT(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ft;let r=t;const o=e.startsWith("update:"),l=o&&e.slice(7);if(l&&l in i){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:p,trim:m}=i[d]||Ft;m&&(r=t.map(_=>Jt(_)?_.trim():_)),p&&(r=t.map(JE))}let c,u=i[c=Ic(e)]||i[c=Ic(Ki(e))];!u&&o&&(u=i[c=Ic(jo(e))]),u&&Ii(u,n,6,r);const h=i[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Ii(h,n,6,r)}}function Tv(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const o=n.emits;let l={},c=!1;if(!lt(n)){const u=h=>{const d=Tv(h,e,!0);d&&(c=!0,ln(l,d))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!o&&!c?(Ut(n)&&i.set(n,null),null):(nt(o)?o.forEach(u=>l[u]=null):ln(l,o),Ut(n)&&i.set(n,l),l)}function iu(n,e){return!n||!Zc(e)?!1:(e=e.slice(2).replace(/Once$/,""),yt(n,e[0].toLowerCase()+e.slice(1))||yt(n,jo(e))||yt(n,e))}let mn=null,ru=null;function kc(n){const e=mn;return mn=n,ru=n&&n.type.__scopeId||null,e}function $T(n){ru=n}function jT(){ru=null}function Zr(n,e=mn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&zg(-1);const o=kc(e);let l;try{l=n(...r)}finally{kc(o),i._d&&zg(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Nf(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:p,data:m,setupState:_,ctx:y,inheritAttrs:x}=n;let v,w;const T=kc(n);try{if(t.shapeFlag&4){const I=r||i;v=Gi(d.call(I,I,p,o,_,m,y)),w=u}else{const I=e;v=Gi(I.length>1?I(o,{attrs:u,slots:c,emit:h}):I(o,null)),w=e.props?u:qT(u)}}catch(I){Ra.length=0,nu(I,n,1),v=qt(ss)}let F=v;if(w&&x!==!1){const I=Object.keys(w),{shapeFlag:P}=F;I.length&&P&7&&(l&&I.some(dd)&&(w=XT(w,l)),F=Bo(F,w))}return t.dirs&&(F=Bo(F),F.dirs=F.dirs?F.dirs.concat(t.dirs):t.dirs),t.transition&&(F.transition=t.transition),v=F,kc(T),v}const qT=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zc(t))&&((e||(e={}))[t]=n[t]);return e},XT=(n,e)=>{const t={};for(const i in n)(!dd(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function YT(n,e,t){const{props:i,children:r,component:o}=n,{props:l,children:c,patchFlag:u}=e,h=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return i?Ag(i,l,h):!!l;if(u&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(l[m]!==i[m]&&!iu(h,m))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:i===l?!1:i?l?Ag(i,l,h):!0:!!l;return!1}function Ag(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==n[o]&&!iu(t,o))return!0}return!1}function KT({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const ZT=n=>n.__isSuspense;function JT(n,e){e&&e.pendingBranch?nt(n)?e.effects.push(...n):e.effects.push(n):HT(n)}const tc={};function Ca(n,e,t){return Av(n,e,t)}function Av(n,e,{immediate:t,deep:i,flush:r,onTrack:o,onTrigger:l}=Ft){var c;const u=aT()===((c=an)==null?void 0:c.scope)?an:null;let h,d=!1,p=!1;if(wn(n)?(h=()=>n.value,d=Vc(n)):Do(n)?(h=()=>n,i=!0):nt(n)?(p=!0,d=n.some(I=>Do(I)||Vc(I)),h=()=>n.map(I=>{if(wn(I))return I.value;if(Do(I))return Ps(I);if(lt(I))return es(I,u,2)})):lt(n)?e?h=()=>es(n,u,2):h=()=>{if(!(u&&u.isUnmounted))return m&&m(),Ii(n,u,3,[_])}:h=Ri,e&&i){const I=h;h=()=>Ps(I())}let m,_=I=>{m=T.onStop=()=>{es(I,u,4)}},y;if(Wa)if(_=Ri,e?t&&Ii(e,u,3,[h(),p?[]:void 0,_]):h(),r==="sync"){const I=$A();y=I.__watcherHandles||(I.__watcherHandles=[])}else return Ri;let x=p?new Array(n.length).fill(tc):tc;const v=()=>{if(T.active)if(e){const I=T.run();(i||d||(p?I.some((P,B)=>Ba(P,x[B])):Ba(I,x)))&&(m&&m(),Ii(e,u,3,[I,x===tc?void 0:p&&x[0]===tc?[]:x,_]),x=I)}else T.run()};v.allowRecurse=!!e;let w;r==="sync"?w=v:r==="post"?w=()=>Nn(v,u&&u.suspense):(v.pre=!0,u&&(v.id=u.uid),w=()=>Ld(v));const T=new xd(h,w);e?t?v():x=T.run():r==="post"?Nn(T.run.bind(T),u&&u.suspense):T.run();const F=()=>{T.stop(),u&&u.scope&&pd(u.scope.effects,T)};return y&&y.push(F),F}function QT(n,e,t){const i=this.proxy,r=Jt(n)?n.includes(".")?Cv(i,n):()=>i[n]:n.bind(i,i);let o;lt(e)?o=e:(o=e.handler,t=e);const l=an;Uo(this);const c=Av(r,o.bind(i),t);return l?Uo(l):Fs(),c}function Cv(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ps(n,e){if(!Ut(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),wn(n))Ps(n.value,e);else if(nt(n))for(let t=0;t<n.length;t++)Ps(n[t],e);else if(J_(n)||Io(n))n.forEach(t=>{Ps(t,e)});else if(tv(n))for(const t in n)Ps(n[t],e);return n}function eA(n,e){const t=mn;if(t===null)return n;const i=cu(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let o=0;o<e.length;o++){let[l,c,u,h=Ft]=e[o];l&&(lt(l)&&(l={mounted:l,updated:l}),l.deep&&Ps(c),r.push({dir:l,instance:i,value:c,oldValue:void 0,arg:u,modifiers:h}))}return n}function xs(n,e,t,i){const r=n.dirs,o=e&&e.dirs;for(let l=0;l<r.length;l++){const c=r[l];o&&(c.oldValue=o[l].value);let u=c.dir[i];u&&(qo(),Ii(u,t,8,[n.el,c,n,e]),Xo())}}function Yo(n,e){return lt(n)?(()=>ln({name:n.name},e,{setup:n}))():n}const La=n=>!!n.type.__asyncLoader,Lv=n=>n.type.__isKeepAlive;function tA(n,e){Pv(n,"a",e)}function nA(n,e){Pv(n,"da",e)}function Pv(n,e,t=an){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(su(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Lv(r.parent.vnode)&&iA(i,e,t,r),r=r.parent}}function iA(n,e,t,i){const r=su(e,n,i,!0);Iv(()=>{pd(i[e],r)},t)}function su(n,e,t=an,i=!1){if(t){const r=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...l)=>{if(t.isUnmounted)return;qo(),Uo(t);const c=Ii(e,t,n,l);return Fs(),Xo(),c});return i?r.unshift(o):r.push(o),o}}const Mr=n=>(e,t=an)=>(!Wa||n==="sp")&&su(n,(...i)=>e(...i),t),rA=Mr("bm"),il=Mr("m"),sA=Mr("bu"),oA=Mr("u"),Rv=Mr("bum"),Iv=Mr("um"),aA=Mr("sp"),lA=Mr("rtg"),cA=Mr("rtc");function uA(n,e=an){su("ec",n,e)}const Pd="components",fA="directives";function Us(n,e){return Rd(Pd,n,!0,e)||n}const Dv=Symbol.for("v-ndc");function nc(n){return Jt(n)?Rd(Pd,n,!1)||n:n||Dv}function hA(n){return Rd(fA,n)}function Rd(n,e,t=!0,i=!1){const r=mn||an;if(r){const o=r.type;if(n===Pd){const c=HA(o,!1);if(c&&(c===e||c===Ki(e)||c===eu(Ki(e))))return o}const l=Cg(r[n]||o[n],e)||Cg(r.appContext[n],e);return!l&&i?o:l}}function Cg(n,e){return n&&(n[e]||n[Ki(e)]||n[eu(Ki(e))])}function dA(n,e,t,i){let r;const o=t&&t[i];if(nt(n)||Jt(n)){r=new Array(n.length);for(let l=0,c=n.length;l<c;l++)r[l]=e(n[l],l,void 0,o&&o[l])}else if(typeof n=="number"){r=new Array(n);for(let l=0;l<n;l++)r[l]=e(l+1,l,void 0,o&&o[l])}else if(Ut(n))if(n[Symbol.iterator])r=Array.from(n,(l,c)=>e(l,c,void 0,o&&o[c]));else{const l=Object.keys(n);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];r[c]=e(n[h],h,c,o&&o[c])}}else r=[];return t&&(t[i]=r),r}function vr(n,e,t={},i,r){if(mn.isCE||mn.parent&&La(mn.parent)&&mn.parent.isCE)return e!=="default"&&(t.name=e),qt("slot",t,i&&i());let o=n[e];o&&o._c&&(o._d=!1),Rt();const l=o&&Ov(o(t)),c=fi(Xn,{key:t.key||l&&l.key||`_${e}`},l||(i?i():[]),l&&n._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),o&&o._c&&(o._d=!0),c}function Ov(n){return n.some(e=>Wc(e)?!(e.type===ss||e.type===Xn&&!Ov(e.children)):!0)?n:null}function ic(n,e){const t={};for(const i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:Ic(i)]=n[i];return t}const zh=n=>n?$v(n)?cu(n)||n.proxy:zh(n.parent):null,Pa=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>zh(n.parent),$root:n=>zh(n.root),$emit:n=>n.emit,$options:n=>Id(n),$forceUpdate:n=>n.f||(n.f=()=>Ld(n.update)),$nextTick:n=>n.n||(n.n=Cd.bind(n.proxy)),$watch:n=>QT.bind(n)}),zf=(n,e)=>n!==Ft&&!n.__isScriptSetup&&yt(n,e),pA={get({_:n},e){const{ctx:t,setupState:i,data:r,props:o,accessCache:l,type:c,appContext:u}=n;let h;if(e[0]!=="$"){const _=l[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return o[e]}else{if(zf(i,e))return l[e]=1,i[e];if(r!==Ft&&yt(r,e))return l[e]=2,r[e];if((h=n.propsOptions[0])&&yt(h,e))return l[e]=3,o[e];if(t!==Ft&&yt(t,e))return l[e]=4,t[e];Bh&&(l[e]=0)}}const d=Pa[e];let p,m;if(d)return e==="$attrs"&&Un(n,"get",e),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Ft&&yt(t,e))return l[e]=4,t[e];if(m=u.config.globalProperties,yt(m,e))return m[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:o}=n;return zf(r,e)?(r[e]=t,!0):i!==Ft&&yt(i,e)?(i[e]=t,!0):yt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:o}},l){let c;return!!t[l]||n!==Ft&&yt(n,l)||zf(e,l)||(c=o[0])&&yt(c,l)||yt(i,l)||yt(Pa,l)||yt(r.config.globalProperties,l)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:yt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Lg(n){return nt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Bh=!0;function mA(n){const e=Id(n),t=n.proxy,i=n.ctx;Bh=!1,e.beforeCreate&&Pg(e.beforeCreate,n,"bc");const{data:r,computed:o,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:y,activated:x,deactivated:v,beforeDestroy:w,beforeUnmount:T,destroyed:F,unmounted:I,render:P,renderTracked:B,renderTriggered:j,errorCaptured:C,serverPrefetch:U,expose:X,inheritAttrs:Y,components:Fe,directives:Ae,filters:q}=e;if(h&&gA(h,i,null),l)for(const ee in l){const Z=l[ee];lt(Z)&&(i[ee]=Z.bind(t))}if(r){const ee=r.call(t,t);Ut(ee)&&(n.data=nl(ee))}if(Bh=!0,o)for(const ee in o){const Z=o[ee],se=lt(Z)?Z.bind(t,t):lt(Z.get)?Z.get.bind(t,t):Ri,de=!lt(Z)&&lt(Z.set)?Z.set.bind(t):Ri,Ee=Ai({get:se,set:de});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Se=>Ee.value=Se})}if(c)for(const ee in c)Fv(c[ee],i,t,ee);if(u){const ee=lt(u)?u.call(t):u;Reflect.ownKeys(ee).forEach(Z=>{Dc(Z,ee[Z])})}d&&Pg(d,n,"c");function Q(ee,Z){nt(Z)?Z.forEach(se=>ee(se.bind(t))):Z&&ee(Z.bind(t))}if(Q(rA,p),Q(il,m),Q(sA,_),Q(oA,y),Q(tA,x),Q(nA,v),Q(uA,C),Q(cA,B),Q(lA,j),Q(Rv,T),Q(Iv,I),Q(aA,U),nt(X))if(X.length){const ee=n.exposed||(n.exposed={});X.forEach(Z=>{Object.defineProperty(ee,Z,{get:()=>t[Z],set:se=>t[Z]=se})})}else n.exposed||(n.exposed={});P&&n.render===Ri&&(n.render=P),Y!=null&&(n.inheritAttrs=Y),Fe&&(n.components=Fe),Ae&&(n.directives=Ae)}function gA(n,e,t=Ri){nt(n)&&(n=Uh(n));for(const i in n){const r=n[i];let o;Ut(r)?"default"in r?o=yr(r.from||i,r.default,!0):o=yr(r.from||i):o=yr(r),wn(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Pg(n,e,t){Ii(nt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Fv(n,e,t,i){const r=i.includes(".")?Cv(t,i):()=>t[i];if(Jt(n)){const o=e[n];lt(o)&&Ca(r,o)}else if(lt(n))Ca(r,n.bind(t));else if(Ut(n))if(nt(n))n.forEach(o=>Fv(o,e,t,i));else{const o=lt(n.handler)?n.handler.bind(t):e[n.handler];lt(o)&&Ca(r,o,n)}}function Id(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:l}}=n.appContext,c=o.get(e);let u;return c?u=c:!r.length&&!t&&!i?u=e:(u={},r.length&&r.forEach(h=>Hc(u,h,l,!0)),Hc(u,e,l)),Ut(e)&&o.set(e,u),u}function Hc(n,e,t,i=!1){const{mixins:r,extends:o}=e;o&&Hc(n,o,t,!0),r&&r.forEach(l=>Hc(n,l,t,!0));for(const l in e)if(!(i&&l==="expose")){const c=_A[l]||t&&t[l];n[l]=c?c(n[l],e[l]):e[l]}return n}const _A={data:Rg,props:Ig,emits:Ig,methods:Ea,computed:Ea,beforeCreate:An,created:An,beforeMount:An,mounted:An,beforeUpdate:An,updated:An,beforeDestroy:An,beforeUnmount:An,destroyed:An,unmounted:An,activated:An,deactivated:An,errorCaptured:An,serverPrefetch:An,components:Ea,directives:Ea,watch:xA,provide:Rg,inject:vA};function Rg(n,e){return e?n?function(){return ln(lt(n)?n.call(this,this):n,lt(e)?e.call(this,this):e)}:e:n}function vA(n,e){return Ea(Uh(n),Uh(e))}function Uh(n){if(nt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function An(n,e){return n?[...new Set([].concat(n,e))]:e}function Ea(n,e){return n?ln(Object.create(null),n,e):e}function Ig(n,e){return n?nt(n)&&nt(e)?[...new Set([...n,...e])]:ln(Object.create(null),Lg(n),Lg(e??{})):e}function xA(n,e){if(!n)return e;if(!e)return n;const t=ln(Object.create(null),n);for(const i in e)t[i]=An(n[i],e[i]);return t}function Nv(){return{app:null,config:{isNativeTag:jE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yA=0;function bA(n,e){return function(i,r=null){lt(i)||(i=ln({},i)),r!=null&&!Ut(r)&&(r=null);const o=Nv(),l=new Set;let c=!1;const u=o.app={_uid:yA++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:jA,get config(){return o.config},set config(h){},use(h,...d){return l.has(h)||(h&&lt(h.install)?(l.add(h),h.install(u,...d)):lt(h)&&(l.add(h),h(u,...d))),u},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),u},component(h,d){return d?(o.components[h]=d,u):o.components[h]},directive(h,d){return d?(o.directives[h]=d,u):o.directives[h]},mount(h,d,p){if(!c){const m=qt(i,r);return m.appContext=o,d&&e?e(m,h):n(m,h,p),c=!0,u._container=h,h.__vue_app__=u,cu(m.component)||m.component.proxy}},unmount(){c&&(n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return o.provides[h]=d,u},runWithContext(h){Gc=u;try{return h()}finally{Gc=null}}};return u}}let Gc=null;function Dc(n,e){if(an){let t=an.provides;const i=an.parent&&an.parent.provides;i===t&&(t=an.provides=Object.create(i)),t[n]=e}}function yr(n,e,t=!1){const i=an||mn;if(i||Gc){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Gc._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&lt(e)?e.call(i&&i.proxy):e}}function wA(n,e,t,i=!1){const r={},o={};Uc(o,au,1),n.propsDefaults=Object.create(null),zv(n,e,r,o);for(const l in n.propsOptions[0])l in r||(r[l]=void 0);t?n.props=i?r:gv(r):n.type.props?n.props=r:n.props=o,n.attrs=o}function SA(n,e,t,i){const{props:r,attrs:o,vnode:{patchFlag:l}}=n,c=Et(r),[u]=n.propsOptions;let h=!1;if((i||l>0)&&!(l&16)){if(l&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(iu(n.emitsOptions,m))continue;const _=e[m];if(u)if(yt(o,m))_!==o[m]&&(o[m]=_,h=!0);else{const y=Ki(m);r[y]=Vh(u,c,y,_,n,!1)}else _!==o[m]&&(o[m]=_,h=!0)}}}else{zv(n,e,r,o)&&(h=!0);let d;for(const p in c)(!e||!yt(e,p)&&((d=jo(p))===p||!yt(e,d)))&&(u?t&&(t[p]!==void 0||t[d]!==void 0)&&(r[p]=Vh(u,c,p,void 0,n,!0)):delete r[p]);if(o!==c)for(const p in o)(!e||!yt(e,p))&&(delete o[p],h=!0)}h&&wr(n,"set","$attrs")}function zv(n,e,t,i){const[r,o]=n.propsOptions;let l=!1,c;if(e)for(let u in e){if(Rc(u))continue;const h=e[u];let d;r&&yt(r,d=Ki(u))?!o||!o.includes(d)?t[d]=h:(c||(c={}))[d]=h:iu(n.emitsOptions,u)||(!(u in i)||h!==i[u])&&(i[u]=h,l=!0)}if(o){const u=Et(t),h=c||Ft;for(let d=0;d<o.length;d++){const p=o[d];t[p]=Vh(r,u,p,h[p],n,!yt(h,p))}}return l}function Vh(n,e,t,i,r,o){const l=n[t];if(l!=null){const c=yt(l,"default");if(c&&i===void 0){const u=l.default;if(l.type!==Function&&!l.skipFactory&&lt(u)){const{propsDefaults:h}=r;t in h?i=h[t]:(Uo(r),i=h[t]=u.call(null,e),Fs())}else i=u}l[0]&&(o&&!c?i=!1:l[1]&&(i===""||i===jo(t))&&(i=!0))}return i}function Bv(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const o=n.props,l={},c=[];let u=!1;if(!lt(n)){const d=p=>{u=!0;const[m,_]=Bv(p,e,!0);ln(l,m),_&&c.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!u)return Ut(n)&&i.set(n,Ro),Ro;if(nt(o))for(let d=0;d<o.length;d++){const p=Ki(o[d]);Dg(p)&&(l[p]=Ft)}else if(o)for(const d in o){const p=Ki(d);if(Dg(p)){const m=o[d],_=l[p]=nt(m)||lt(m)?{type:m}:ln({},m);if(_){const y=Ng(Boolean,_.type),x=Ng(String,_.type);_[0]=y>-1,_[1]=x<0||y<x,(y>-1||yt(_,"default"))&&c.push(p)}}}const h=[l,c];return Ut(n)&&i.set(n,h),h}function Dg(n){return n[0]!=="$"}function Og(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Fg(n,e){return Og(n)===Og(e)}function Ng(n,e){return nt(e)?e.findIndex(t=>Fg(t,n)):lt(e)&&Fg(e,n)?0:-1}const Uv=n=>n[0]==="_"||n==="$stable",Dd=n=>nt(n)?n.map(Gi):[Gi(n)],MA=(n,e,t)=>{if(e._n)return e;const i=Zr((...r)=>Dd(e(...r)),t);return i._c=!1,i},Vv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uv(r))continue;const o=n[r];if(lt(o))e[r]=MA(r,o,i);else if(o!=null){const l=Dd(o);e[r]=()=>l}}},kv=(n,e)=>{const t=Dd(e);n.slots.default=()=>t},EA=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Et(e),Uc(e,"_",t)):Vv(e,n.slots={})}else n.slots={},e&&kv(n,e);Uc(n.slots,au,1)},TA=(n,e,t)=>{const{vnode:i,slots:r}=n;let o=!0,l=Ft;if(i.shapeFlag&32){const c=e._;c?t&&c===1?o=!1:(ln(r,e),!t&&c===1&&delete r._):(o=!e.$stable,Vv(e,r)),l=e}else e&&(kv(n,e),l={default:1});if(o)for(const c in r)!Uv(c)&&!(c in l)&&delete r[c]};function kh(n,e,t,i,r=!1){if(nt(n)){n.forEach((m,_)=>kh(m,e&&(nt(e)?e[_]:e),t,i,r));return}if(La(i)&&!r)return;const o=i.shapeFlag&4?cu(i.component)||i.component.proxy:i.el,l=r?null:o,{i:c,r:u}=n,h=e&&e.r,d=c.refs===Ft?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==u&&(Jt(h)?(d[h]=null,yt(p,h)&&(p[h]=null)):wn(h)&&(h.value=null)),lt(u))es(u,c,12,[l,d]);else{const m=Jt(u),_=wn(u);if(m||_){const y=()=>{if(n.f){const x=m?yt(p,u)?p[u]:d[u]:u.value;r?nt(x)&&pd(x,o):nt(x)?x.includes(o)||x.push(o):m?(d[u]=[o],yt(p,u)&&(p[u]=d[u])):(u.value=[o],n.k&&(d[n.k]=u.value))}else m?(d[u]=l,yt(p,u)&&(p[u]=l)):_&&(u.value=l,n.k&&(d[n.k]=l))};l?(y.id=-1,Nn(y,t)):y()}}}const Nn=JT;function AA(n){return CA(n)}function CA(n,e){const t=Rh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Ri,insertStaticContent:y}=n,x=(R,O,k,J=null,le=null,he=null,Re=!1,_e=null,Le=!!O.dynamicChildren)=>{if(R===O)return;R&&!va(R,O)&&(J=te(R),Se(R,le,he,!0),R=null),O.patchFlag===-2&&(Le=!1,O.dynamicChildren=null);const{type:me,ref:A,shapeFlag:S}=O;switch(me){case ou:v(R,O,k,J);break;case ss:w(R,O,k,J);break;case Bf:R==null&&T(O,k,J,Re);break;case Xn:Fe(R,O,k,J,le,he,Re,_e,Le);break;default:S&1?P(R,O,k,J,le,he,Re,_e,Le):S&6?Ae(R,O,k,J,le,he,Re,_e,Le):(S&64||S&128)&&me.process(R,O,k,J,le,he,Re,_e,Le,ce)}A!=null&&le&&kh(A,R&&R.ref,he,O||R,!O)},v=(R,O,k,J)=>{if(R==null)i(O.el=c(O.children),k,J);else{const le=O.el=R.el;O.children!==R.children&&h(le,O.children)}},w=(R,O,k,J)=>{R==null?i(O.el=u(O.children||""),k,J):O.el=R.el},T=(R,O,k,J)=>{[R.el,R.anchor]=y(R.children,O,k,J,R.el,R.anchor)},F=({el:R,anchor:O},k,J)=>{let le;for(;R&&R!==O;)le=m(R),i(R,k,J),R=le;i(O,k,J)},I=({el:R,anchor:O})=>{let k;for(;R&&R!==O;)k=m(R),r(R),R=k;r(O)},P=(R,O,k,J,le,he,Re,_e,Le)=>{Re=Re||O.type==="svg",R==null?B(O,k,J,le,he,Re,_e,Le):U(R,O,le,he,Re,_e,Le)},B=(R,O,k,J,le,he,Re,_e)=>{let Le,me;const{type:A,props:S,shapeFlag:W,transition:ie,dirs:pe}=R;if(Le=R.el=l(R.type,he,S&&S.is,S),W&8?d(Le,R.children):W&16&&C(R.children,Le,null,J,le,he&&A!=="foreignObject",Re,_e),pe&&xs(R,null,J,"created"),j(Le,R,R.scopeId,Re,J),S){for(const ze in S)ze!=="value"&&!Rc(ze)&&o(Le,ze,null,S[ze],he,R.children,J,le,oe);"value"in S&&o(Le,"value",null,S.value),(me=S.onVnodeBeforeMount)&&Ui(me,J,R)}pe&&xs(R,null,J,"beforeMount");const Me=(!le||le&&!le.pendingBranch)&&ie&&!ie.persisted;Me&&ie.beforeEnter(Le),i(Le,O,k),((me=S&&S.onVnodeMounted)||Me||pe)&&Nn(()=>{me&&Ui(me,J,R),Me&&ie.enter(Le),pe&&xs(R,null,J,"mounted")},le)},j=(R,O,k,J,le)=>{if(k&&_(R,k),J)for(let he=0;he<J.length;he++)_(R,J[he]);if(le){let he=le.subTree;if(O===he){const Re=le.vnode;j(R,Re,Re.scopeId,Re.slotScopeIds,le.parent)}}},C=(R,O,k,J,le,he,Re,_e,Le=0)=>{for(let me=Le;me<R.length;me++){const A=R[me]=_e?qr(R[me]):Gi(R[me]);x(null,A,O,k,J,le,he,Re,_e)}},U=(R,O,k,J,le,he,Re)=>{const _e=O.el=R.el;let{patchFlag:Le,dynamicChildren:me,dirs:A}=O;Le|=R.patchFlag&16;const S=R.props||Ft,W=O.props||Ft;let ie;k&&ys(k,!1),(ie=W.onVnodeBeforeUpdate)&&Ui(ie,k,O,R),A&&xs(O,R,k,"beforeUpdate"),k&&ys(k,!0);const pe=le&&O.type!=="foreignObject";if(me?X(R.dynamicChildren,me,_e,k,J,pe,he):Re||Z(R,O,_e,null,k,J,pe,he,!1),Le>0){if(Le&16)Y(_e,O,S,W,k,J,le);else if(Le&2&&S.class!==W.class&&o(_e,"class",null,W.class,le),Le&4&&o(_e,"style",S.style,W.style,le),Le&8){const Me=O.dynamicProps;for(let ze=0;ze<Me.length;ze++){const L=Me[ze],ge=S[L],Ie=W[L];(Ie!==ge||L==="value")&&o(_e,L,ge,Ie,le,R.children,k,J,oe)}}Le&1&&R.children!==O.children&&d(_e,O.children)}else!Re&&me==null&&Y(_e,O,S,W,k,J,le);((ie=W.onVnodeUpdated)||A)&&Nn(()=>{ie&&Ui(ie,k,O,R),A&&xs(O,R,k,"updated")},J)},X=(R,O,k,J,le,he,Re)=>{for(let _e=0;_e<O.length;_e++){const Le=R[_e],me=O[_e],A=Le.el&&(Le.type===Xn||!va(Le,me)||Le.shapeFlag&70)?p(Le.el):k;x(Le,me,A,null,J,le,he,Re,!0)}},Y=(R,O,k,J,le,he,Re)=>{if(k!==J){if(k!==Ft)for(const _e in k)!Rc(_e)&&!(_e in J)&&o(R,_e,k[_e],null,Re,O.children,le,he,oe);for(const _e in J){if(Rc(_e))continue;const Le=J[_e],me=k[_e];Le!==me&&_e!=="value"&&o(R,_e,me,Le,Re,O.children,le,he,oe)}"value"in J&&o(R,"value",k.value,J.value)}},Fe=(R,O,k,J,le,he,Re,_e,Le)=>{const me=O.el=R?R.el:c(""),A=O.anchor=R?R.anchor:c("");let{patchFlag:S,dynamicChildren:W,slotScopeIds:ie}=O;ie&&(_e=_e?_e.concat(ie):ie),R==null?(i(me,k,J),i(A,k,J),C(O.children,k,A,le,he,Re,_e,Le)):S>0&&S&64&&W&&R.dynamicChildren?(X(R.dynamicChildren,W,k,le,he,Re,_e),(O.key!=null||le&&O===le.subTree)&&Hv(R,O,!0)):Z(R,O,k,A,le,he,Re,_e,Le)},Ae=(R,O,k,J,le,he,Re,_e,Le)=>{O.slotScopeIds=_e,R==null?O.shapeFlag&512?le.ctx.activate(O,k,J,Re,Le):q(O,k,J,le,he,Re,Le):xe(R,O,Le)},q=(R,O,k,J,le,he,Re)=>{const _e=R.component=NA(R,J,le);if(Lv(R)&&(_e.ctx.renderer=ce),BA(_e),_e.asyncDep){if(le&&le.registerDep(_e,Q),!R.el){const Le=_e.subTree=qt(ss);w(null,Le,O,k)}return}Q(_e,R,O,k,le,he,Re)},xe=(R,O,k)=>{const J=O.component=R.component;if(YT(R,O,k))if(J.asyncDep&&!J.asyncResolved){ee(J,O,k);return}else J.next=O,kT(J.update),J.update();else O.el=R.el,J.vnode=O},Q=(R,O,k,J,le,he,Re)=>{const _e=()=>{if(R.isMounted){let{next:A,bu:S,u:W,parent:ie,vnode:pe}=R,Me=A,ze;ys(R,!1),A?(A.el=pe.el,ee(R,A,Re)):A=pe,S&&Ff(S),(ze=A.props&&A.props.onVnodeBeforeUpdate)&&Ui(ze,ie,A,pe),ys(R,!0);const L=Nf(R),ge=R.subTree;R.subTree=L,x(ge,L,p(ge.el),te(ge),R,le,he),A.el=L.el,Me===null&&KT(R,L.el),W&&Nn(W,le),(ze=A.props&&A.props.onVnodeUpdated)&&Nn(()=>Ui(ze,ie,A,pe),le)}else{let A;const{el:S,props:W}=O,{bm:ie,m:pe,parent:Me}=R,ze=La(O);if(ys(R,!1),ie&&Ff(ie),!ze&&(A=W&&W.onVnodeBeforeMount)&&Ui(A,Me,O),ys(R,!0),S&&He){const L=()=>{R.subTree=Nf(R),He(S,R.subTree,R,le,null)};ze?O.type.__asyncLoader().then(()=>!R.isUnmounted&&L()):L()}else{const L=R.subTree=Nf(R);x(null,L,k,J,R,le,he),O.el=L.el}if(pe&&Nn(pe,le),!ze&&(A=W&&W.onVnodeMounted)){const L=O;Nn(()=>Ui(A,Me,L),le)}(O.shapeFlag&256||Me&&La(Me.vnode)&&Me.vnode.shapeFlag&256)&&R.a&&Nn(R.a,le),R.isMounted=!0,O=k=J=null}},Le=R.effect=new xd(_e,()=>Ld(me),R.scope),me=R.update=()=>Le.run();me.id=R.uid,ys(R,!0),me()},ee=(R,O,k)=>{O.component=R;const J=R.vnode.props;R.vnode=O,R.next=null,SA(R,O.props,J,k),TA(R,O.children,k),qo(),Tg(),Xo()},Z=(R,O,k,J,le,he,Re,_e,Le=!1)=>{const me=R&&R.children,A=R?R.shapeFlag:0,S=O.children,{patchFlag:W,shapeFlag:ie}=O;if(W>0){if(W&128){de(me,S,k,J,le,he,Re,_e,Le);return}else if(W&256){se(me,S,k,J,le,he,Re,_e,Le);return}}ie&8?(A&16&&oe(me,le,he),S!==me&&d(k,S)):A&16?ie&16?de(me,S,k,J,le,he,Re,_e,Le):oe(me,le,he,!0):(A&8&&d(k,""),ie&16&&C(S,k,J,le,he,Re,_e,Le))},se=(R,O,k,J,le,he,Re,_e,Le)=>{R=R||Ro,O=O||Ro;const me=R.length,A=O.length,S=Math.min(me,A);let W;for(W=0;W<S;W++){const ie=O[W]=Le?qr(O[W]):Gi(O[W]);x(R[W],ie,k,null,le,he,Re,_e,Le)}me>A?oe(R,le,he,!0,!1,S):C(O,k,J,le,he,Re,_e,Le,S)},de=(R,O,k,J,le,he,Re,_e,Le)=>{let me=0;const A=O.length;let S=R.length-1,W=A-1;for(;me<=S&&me<=W;){const ie=R[me],pe=O[me]=Le?qr(O[me]):Gi(O[me]);if(va(ie,pe))x(ie,pe,k,null,le,he,Re,_e,Le);else break;me++}for(;me<=S&&me<=W;){const ie=R[S],pe=O[W]=Le?qr(O[W]):Gi(O[W]);if(va(ie,pe))x(ie,pe,k,null,le,he,Re,_e,Le);else break;S--,W--}if(me>S){if(me<=W){const ie=W+1,pe=ie<A?O[ie].el:J;for(;me<=W;)x(null,O[me]=Le?qr(O[me]):Gi(O[me]),k,pe,le,he,Re,_e,Le),me++}}else if(me>W)for(;me<=S;)Se(R[me],le,he,!0),me++;else{const ie=me,pe=me,Me=new Map;for(me=pe;me<=W;me++){const Ce=O[me]=Le?qr(O[me]):Gi(O[me]);Ce.key!=null&&Me.set(Ce.key,me)}let ze,L=0;const ge=W-pe+1;let Ie=!1,De=0;const z=new Array(ge);for(me=0;me<ge;me++)z[me]=0;for(me=ie;me<=S;me++){const Ce=R[me];if(L>=ge){Se(Ce,le,he,!0);continue}let $e;if(Ce.key!=null)$e=Me.get(Ce.key);else for(ze=pe;ze<=W;ze++)if(z[ze-pe]===0&&va(Ce,O[ze])){$e=ze;break}$e===void 0?Se(Ce,le,he,!0):(z[$e-pe]=me+1,$e>=De?De=$e:Ie=!0,x(Ce,O[$e],k,null,le,he,Re,_e,Le),L++)}const Oe=Ie?LA(z):Ro;for(ze=Oe.length-1,me=ge-1;me>=0;me--){const Ce=pe+me,$e=O[Ce],Be=Ce+1<A?O[Ce+1].el:J;z[me]===0?x(null,$e,k,Be,le,he,Re,_e,Le):Ie&&(ze<0||me!==Oe[ze]?Ee($e,k,Be,2):ze--)}}},Ee=(R,O,k,J,le=null)=>{const{el:he,type:Re,transition:_e,children:Le,shapeFlag:me}=R;if(me&6){Ee(R.component.subTree,O,k,J);return}if(me&128){R.suspense.move(O,k,J);return}if(me&64){Re.move(R,O,k,ce);return}if(Re===Xn){i(he,O,k);for(let S=0;S<Le.length;S++)Ee(Le[S],O,k,J);i(R.anchor,O,k);return}if(Re===Bf){F(R,O,k);return}if(J!==2&&me&1&&_e)if(J===0)_e.beforeEnter(he),i(he,O,k),Nn(()=>_e.enter(he),le);else{const{leave:S,delayLeave:W,afterLeave:ie}=_e,pe=()=>i(he,O,k),Me=()=>{S(he,()=>{pe(),ie&&ie()})};W?W(he,pe,Me):Me()}else i(he,O,k)},Se=(R,O,k,J=!1,le=!1)=>{const{type:he,props:Re,ref:_e,children:Le,dynamicChildren:me,shapeFlag:A,patchFlag:S,dirs:W}=R;if(_e!=null&&kh(_e,null,k,R,!0),A&256){O.ctx.deactivate(R);return}const ie=A&1&&W,pe=!La(R);let Me;if(pe&&(Me=Re&&Re.onVnodeBeforeUnmount)&&Ui(Me,O,R),A&6)We(R.component,k,J);else{if(A&128){R.suspense.unmount(k,J);return}ie&&xs(R,null,O,"beforeUnmount"),A&64?R.type.remove(R,O,k,le,ce,J):me&&(he!==Xn||S>0&&S&64)?oe(me,O,k,!1,!0):(he===Xn&&S&384||!le&&A&16)&&oe(Le,O,k),J&&Pe(R)}(pe&&(Me=Re&&Re.onVnodeUnmounted)||ie)&&Nn(()=>{Me&&Ui(Me,O,R),ie&&xs(R,null,O,"unmounted")},k)},Pe=R=>{const{type:O,el:k,anchor:J,transition:le}=R;if(O===Xn){ke(k,J);return}if(O===Bf){I(R);return}const he=()=>{r(k),le&&!le.persisted&&le.afterLeave&&le.afterLeave()};if(R.shapeFlag&1&&le&&!le.persisted){const{leave:Re,delayLeave:_e}=le,Le=()=>Re(k,he);_e?_e(R.el,he,Le):Le()}else he()},ke=(R,O)=>{let k;for(;R!==O;)k=m(R),r(R),R=k;r(O)},We=(R,O,k)=>{const{bum:J,scope:le,update:he,subTree:Re,um:_e}=R;J&&Ff(J),le.stop(),he&&(he.active=!1,Se(Re,R,O,k)),_e&&Nn(_e,O),Nn(()=>{R.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},oe=(R,O,k,J=!1,le=!1,he=0)=>{for(let Re=he;Re<R.length;Re++)Se(R[Re],O,k,J,le)},te=R=>R.shapeFlag&6?te(R.component.subTree):R.shapeFlag&128?R.suspense.next():m(R.anchor||R.el),ye=(R,O,k)=>{R==null?O._vnode&&Se(O._vnode,null,null,!0):x(O._vnode||null,R,O,null,null,null,k),Tg(),Mv(),O._vnode=R},ce={p:x,um:Se,m:Ee,r:Pe,mt:q,mc:C,pc:Z,pbc:X,n:te,o:n};let ue,He;return e&&([ue,He]=e(ce)),{render:ye,hydrate:ue,createApp:bA(ye,ue)}}function ys({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Hv(n,e,t=!1){const i=n.children,r=e.children;if(nt(i)&&nt(r))for(let o=0;o<i.length;o++){const l=i[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=qr(r[o]),c.el=l.el),t||Hv(l,c)),c.type===ou&&(c.el=l.el)}}function LA(n){const e=n.slice(),t=[0];let i,r,o,l,c;const u=n.length;for(i=0;i<u;i++){const h=n[i];if(h!==0){if(r=t[t.length-1],n[r]<h){e[i]=r,t.push(i);continue}for(o=0,l=t.length-1;o<l;)c=o+l>>1,n[t[c]]<h?o=c+1:l=c;h<n[t[o]]&&(o>0&&(e[i]=t[o-1]),t[o]=i)}}for(o=t.length,l=t[o-1];o-- >0;)t[o]=l,l=e[l];return t}const PA=n=>n.__isTeleport,Xn=Symbol.for("v-fgt"),ou=Symbol.for("v-txt"),ss=Symbol.for("v-cmt"),Bf=Symbol.for("v-stc"),Ra=[];let Li=null;function Rt(n=!1){Ra.push(Li=n?null:[])}function RA(){Ra.pop(),Li=Ra[Ra.length-1]||null}let Ga=1;function zg(n){Ga+=n}function Gv(n){return n.dynamicChildren=Ga>0?Li||Ro:null,RA(),Ga>0&&Li&&Li.push(n),n}function Ln(n,e,t,i,r,o){return Gv(Kt(n,e,t,i,r,o,!0))}function fi(n,e,t,i,r){return Gv(qt(n,e,t,i,r,!0))}function Wc(n){return n?n.__v_isVNode===!0:!1}function va(n,e){return n.type===e.type&&n.key===e.key}const au="__vInternal",Wv=({key:n})=>n??null,Oc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Jt(n)||wn(n)||lt(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function Kt(n,e=null,t=null,i=0,r=null,o=n===Xn?0:1,l=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wv(e),ref:e&&Oc(e),scopeId:ru,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mn};return c?(Od(u,t),o&128&&n.normalize(u)):t&&(u.shapeFlag|=Jt(t)?8:16),Ga>0&&!l&&Li&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&Li.push(u),u}const qt=IA;function IA(n,e=null,t=null,i=0,r=null,o=!1){if((!n||n===Dv)&&(n=ss),Wc(n)){const c=Bo(n,e,!0);return t&&Od(c,t),Ga>0&&!o&&Li&&(c.shapeFlag&6?Li[Li.indexOf(n)]=c:Li.push(c)),c.patchFlag|=-2,c}if(GA(n)&&(n=n.__vccOpts),e){e=DA(e);let{class:c,style:u}=e;c&&!Jt(c)&&(e.class=Ua(c)),Ut(u)&&(_v(u)&&!nt(u)&&(u=ln({},u)),e.style=_d(u))}const l=Jt(n)?1:ZT(n)?128:PA(n)?64:Ut(n)?4:lt(n)?2:0;return Kt(n,e,t,i,r,l,o,!0)}function DA(n){return n?_v(n)||au in n?ln({},n):n:null}function Bo(n,e,t=!1){const{props:i,ref:r,patchFlag:o,children:l}=n,c=e?Pt(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wv(c),ref:e&&e.ref?t&&r?nt(r)?r.concat(Oc(e)):[r,Oc(e)]:Oc(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bo(n.ssContent),ssFallback:n.ssFallback&&Bo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function lu(n=" ",e=0){return qt(ou,null,n,e)}function Ia(n="",e=!1){return e?(Rt(),fi(ss,null,n)):qt(ss,null,n)}function Gi(n){return n==null||typeof n=="boolean"?qt(ss):nt(n)?qt(Xn,null,n.slice()):typeof n=="object"?qr(n):qt(ou,null,String(n))}function qr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bo(n)}function Od(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(nt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Od(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(au in e)?e._ctx=mn:r===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else lt(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),i&64?(t=16,e=[lu(e)]):t=8);n.children=e,n.shapeFlag|=t}function Pt(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ua([e.class,i.class]));else if(r==="style")e.style=_d([e.style,i.style]);else if(Zc(r)){const o=e[r],l=i[r];l&&o!==l&&!(nt(o)&&o.includes(l))&&(e[r]=o?[].concat(o,l):l)}else r!==""&&(e[r]=i[r])}return e}function Ui(n,e,t,i=null){Ii(n,e,7,[t,i])}const OA=Nv();let FA=0;function NA(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||OA,o={uid:FA++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bv(i,r),emitsOptions:Tv(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=WT.bind(null,o),n.ce&&n.ce(o),o}let an=null;const zA=()=>an||mn;let Fd,oo,Bg="__VUE_INSTANCE_SETTERS__";(oo=Rh()[Bg])||(oo=Rh()[Bg]=[]),oo.push(n=>an=n),Fd=n=>{oo.length>1?oo.forEach(e=>e(n)):oo[0](n)};const Uo=n=>{Fd(n),n.scope.on()},Fs=()=>{an&&an.scope.off(),Fd(null)};function $v(n){return n.vnode.shapeFlag&4}let Wa=!1;function BA(n,e=!1){Wa=e;const{props:t,children:i}=n.vnode,r=$v(n);wA(n,t,r,e),EA(n,i);const o=r?UA(n,e):void 0;return Wa=!1,o}function UA(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Ed(new Proxy(n.ctx,pA));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?kA(n):null;Uo(n),qo();const o=es(i,n,0,[n.props,r]);if(Xo(),Fs(),Q_(o)){if(o.then(Fs,Fs),e)return o.then(l=>{Ug(n,l,e)}).catch(l=>{nu(l,n,0)});n.asyncDep=o}else Ug(n,o,e)}else jv(n,e)}function Ug(n,e,t){lt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ut(e)&&(n.setupState=bv(e)),jv(n,t)}let Vg;function jv(n,e,t){const i=n.type;if(!n.render){if(!e&&Vg&&!i.render){const r=i.template||Id(n).template;if(r){const{isCustomElement:o,compilerOptions:l}=n.appContext.config,{delimiters:c,compilerOptions:u}=i,h=ln(ln({isCustomElement:o,delimiters:c},l),u);i.render=Vg(r,h)}}n.render=i.render||Ri}Uo(n),qo(),mA(n),Xo(),Fs()}function VA(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Un(n,"get","$attrs"),e[t]}}))}function kA(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return VA(n)},slots:n.slots,emit:n.emit,expose:e}}function cu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(bv(Ed(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Pa)return Pa[t](n)},has(e,t){return t in e||t in Pa}}))}function HA(n,e=!0){return lt(n)?n.displayName||n.name:n.name||e&&n.__name}function GA(n){return lt(n)&&"__vccOpts"in n}const Ai=(n,e)=>BT(n,e,Wa);function qv(n,e,t){const i=arguments.length;return i===2?Ut(e)&&!nt(e)?Wc(e)?qt(n,null,[e]):qt(n,e):qt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Wc(t)&&(t=[t]),qt(n,e,t))}const WA=Symbol.for("v-scx"),$A=()=>yr(WA),jA="3.3.4",qA="http://www.w3.org/2000/svg",As=typeof document<"u"?document:null,kg=As&&As.createElement("template"),XA={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?As.createElementNS(qA,n):As.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>As.createTextNode(n),createComment:n=>As.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>As.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,o){const l=t?t.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===o||!(r=r.nextSibling)););else{kg.innerHTML=i?`<svg>${n}</svg>`:n;const c=kg.content;if(i){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,t)}return[l?l.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function YA(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function KA(n,e,t){const i=n.style,r=Jt(t);if(t&&!r){if(e&&!Jt(e))for(const o in e)t[o]==null&&Hh(i,o,"");for(const o in t)Hh(i,o,t[o])}else{const o=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=o)}}const Hg=/\s*!important$/;function Hh(n,e,t){if(nt(t))t.forEach(i=>Hh(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ZA(n,e);Hg.test(t)?n.setProperty(jo(i),t.replace(Hg,""),"important"):n[i]=t}}const Gg=["Webkit","Moz","ms"],Uf={};function ZA(n,e){const t=Uf[e];if(t)return t;let i=Ki(e);if(i!=="filter"&&i in n)return Uf[e]=i;i=eu(i);for(let r=0;r<Gg.length;r++){const o=Gg[r]+i;if(o in n)return Uf[e]=o}return e}const Wg="http://www.w3.org/1999/xlink";function JA(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Wg,e.slice(6,e.length)):n.setAttributeNS(Wg,e,t);else{const o=rT(e);t==null||o&&!nv(t)?n.removeAttribute(e):n.setAttribute(e,o?"":t)}}function QA(n,e,t,i,r,o,l){if(e==="innerHTML"||e==="textContent"){i&&l(i,r,o),n[e]=t??"";return}const c=n.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=t;const h=c==="OPTION"?n.getAttribute("value"):n.value,d=t??"";h!==d&&(n.value=d),t==null&&n.removeAttribute(e);return}let u=!1;if(t===""||t==null){const h=typeof n[e];h==="boolean"?t=nv(t):t==null&&h==="string"?(t="",u=!0):h==="number"&&(t=0,u=!0)}try{n[e]=t}catch{}u&&n.removeAttribute(e)}function e3(n,e,t,i){n.addEventListener(e,t,i)}function t3(n,e,t,i){n.removeEventListener(e,t,i)}function n3(n,e,t,i,r=null){const o=n._vei||(n._vei={}),l=o[e];if(i&&l)l.value=i;else{const[c,u]=i3(e);if(i){const h=o[e]=o3(i,r);e3(n,c,h,u)}else l&&(t3(n,c,l,u),o[e]=void 0)}}const $g=/(?:Once|Passive|Capture)$/;function i3(n){let e;if($g.test(n)){e={};let i;for(;i=n.match($g);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):jo(n.slice(2)),e]}let Vf=0;const r3=Promise.resolve(),s3=()=>Vf||(r3.then(()=>Vf=0),Vf=Date.now());function o3(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ii(a3(i,t.value),e,5,[i])};return t.value=n,t.attached=s3(),t}function a3(n,e){if(nt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const jg=/^on[a-z]/,l3=(n,e,t,i,r=!1,o,l,c,u)=>{e==="class"?YA(n,i,r):e==="style"?KA(n,t,i):Zc(e)?dd(e)||n3(n,e,t,i,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c3(n,e,i,r))?QA(n,e,i,o,l,c,u):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),JA(n,e,i,r))};function c3(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&jg.test(e)&&lt(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||jg.test(e)&&Jt(t)?!1:e in n}const u3=ln({patchProp:l3},XA);let qg;function f3(){return qg||(qg=AA(u3))}const h3=(...n)=>{const e=f3().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=d3(i);if(!r)return;const o=e._component;!lt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const l=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},e};function d3(n){return Jt(n)?document.querySelector(n):n}var p3=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const m3=Symbol();var Xg;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Xg||(Xg={}));function g3(){const n=sT(!0),e=n.run(()=>xr({}));let t=[],i=[];const r=Ed({install(o){r._a=o,o.provide(m3,r),o.config.globalProperties.$pinia=r,i.forEach(l=>t.push(l)),i=[]},use(o){return!this._a&&!p3?i.push(o):t.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mo=typeof window<"u";function _3(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ct=Object.assign;function kf(n,e){const t={};for(const i in e){const r=e[i];t[i]=Oi(r)?r.map(n):n(r)}return t}const Da=()=>{},Oi=Array.isArray,v3=/\/$/,x3=n=>n.replace(v3,"");function Hf(n,e,t="/"){let i,r={},o="",l="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(i=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),r=n(o)),c>-1&&(i=i||e.slice(0,c),l=e.slice(c,e.length)),i=S3(i??e,t),{fullPath:i+(o&&"?")+o+l,path:i,query:r,hash:l}}function y3(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Yg(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function b3(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Vo(e.matched[i],t.matched[r])&&Xv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Vo(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Xv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!w3(n[t],e[t]))return!1;return!0}function w3(n,e){return Oi(n)?Kg(n,e):Oi(e)?Kg(e,n):n===e}function Kg(n,e){return Oi(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function S3(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let o=t.length-1,l,c;for(l=0;l<i.length;l++)if(c=i[l],c!==".")if(c==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+i.slice(l-(l===i.length?1:0)).join("/")}var $a;(function(n){n.pop="pop",n.push="push"})($a||($a={}));var Oa;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Oa||(Oa={}));function M3(n){if(!n)if(Mo){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),x3(n)}const E3=/^[^#]+#/;function T3(n,e){return n.replace(E3,"#")+e}function A3(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const uu=()=>({left:window.pageXOffset,top:window.pageYOffset});function C3(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=A3(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Zg(n,e){return(history.state?history.state.position-e:-1)+n}const Gh=new Map;function L3(n,e){Gh.set(n,e)}function P3(n){const e=Gh.get(n);return Gh.delete(n),e}let R3=()=>location.protocol+"//"+location.host;function Yv(n,e){const{pathname:t,search:i,hash:r}=e,o=n.indexOf("#");if(o>-1){let c=r.includes(n.slice(o))?n.slice(o).length:1,u=r.slice(c);return u[0]!=="/"&&(u="/"+u),Yg(u,"")}return Yg(t,n)+i+r}function I3(n,e,t,i){let r=[],o=[],l=null;const c=({state:m})=>{const _=Yv(n,location),y=t.value,x=e.value;let v=0;if(m){if(t.value=_,e.value=m,l&&l===y){l=null;return}v=x?m.position-x.position:0}else i(_);r.forEach(w=>{w(t.value,y,{delta:v,type:$a.pop,direction:v?v>0?Oa.forward:Oa.back:Oa.unknown})})};function u(){l=t.value}function h(m){r.push(m);const _=()=>{const y=r.indexOf(m);y>-1&&r.splice(y,1)};return o.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Ct({},m.state,{scroll:uu()}),"")}function p(){for(const m of o)m();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:h,destroy:p}}function Jg(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?uu():null}}function D3(n){const{history:e,location:t}=window,i={value:Yv(n,t)},r={value:e.state};r.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,h,d){const p=n.indexOf("#"),m=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+u:R3()+n+u;try{e[d?"replaceState":"pushState"](h,"",m),r.value=h}catch(_){console.error(_),t[d?"replace":"assign"](m)}}function l(u,h){const d=Ct({},e.state,Jg(r.value.back,u,r.value.forward,!0),h,{position:r.value.position});o(u,d,!0),i.value=u}function c(u,h){const d=Ct({},r.value,e.state,{forward:u,scroll:uu()});o(d.current,d,!0);const p=Ct({},Jg(i.value,u,null),{position:d.position+1},h);o(u,p,!1),i.value=u}return{location:i,state:r,push:c,replace:l}}function O3(n){n=M3(n);const e=D3(n),t=I3(n,e.state,e.location,e.replace);function i(o,l=!0){l||t.pauseListeners(),history.go(o)}const r=Ct({location:"",base:n,go:i,createHref:T3.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function F3(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),O3(n)}function N3(n){return typeof n=="string"||n&&typeof n=="object"}function Kv(n){return typeof n=="string"||typeof n=="symbol"}const Br={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zv=Symbol("");var Qg;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Qg||(Qg={}));function ko(n,e){return Ct(new Error,{type:n,[Zv]:!0},e)}function ar(n,e){return n instanceof Error&&Zv in n&&(e==null||!!(n.type&e))}const e0="[^/]+?",z3={sensitive:!1,strict:!1,start:!0,end:!0},B3=/[.+*?^${}()[\]/\\]/g;function U3(n,e){const t=Ct({},z3,e),i=[];let r=t.start?"^":"";const o=[];for(const h of n){const d=h.length?[]:[90];t.strict&&!h.length&&(r+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(t.sensitive?.25:0);if(m.type===0)p||(r+="/"),r+=m.value.replace(B3,"\\$&"),_+=40;else if(m.type===1){const{value:y,repeatable:x,optional:v,regexp:w}=m;o.push({name:y,repeatable:x,optional:v});const T=w||e0;if(T!==e0){_+=10;try{new RegExp(`(${T})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${y}" (${T}): `+I.message)}}let F=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;p||(F=v&&h.length<2?`(?:/${F})`:"/"+F),v&&(F+="?"),r+=F,_+=20,v&&(_+=-8),x&&(_+=-20),T===".*"&&(_+=-50)}d.push(_)}i.push(d)}if(t.strict&&t.end){const h=i.length-1;i[h][i[h].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const l=new RegExp(r,t.sensitive?"":"i");function c(h){const d=h.match(l),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",y=o[m-1];p[y.name]=_&&y.repeatable?_.split("/"):_}return p}function u(h){let d="",p=!1;for(const m of n){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:y,repeatable:x,optional:v}=_,w=y in h?h[y]:"";if(Oi(w)&&!x)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const T=Oi(w)?w.join("/"):w;if(!T)if(v)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${y}"`);d+=T}}return d||"/"}return{re:l,score:i,keys:o,parse:c,stringify:u}}function V3(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function k3(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const o=V3(i[t],r[t]);if(o)return o;t++}if(Math.abs(r.length-i.length)===1){if(t0(i))return 1;if(t0(r))return-1}return r.length-i.length}function t0(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const H3={type:0,value:""},G3=/[a-zA-Z0-9_]/;function W3(n){if(!n)return[[]];if(n==="/")return[[H3]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(_){throw new Error(`ERR (${t})/"${h}": ${_}`)}let t=0,i=t;const r=[];let o;function l(){o&&r.push(o),o=[]}let c=0,u,h="",d="";function p(){h&&(t===0?o.push({type:0,value:h}):t===1||t===2||t===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:h,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:u==="/"?(h&&p(),l()):u===":"?(p(),t=1):m();break;case 4:m(),t=i;break;case 1:u==="("?t=2:G3.test(u)?m():(p(),t=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:t=3:d+=u;break;case 3:p(),t=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),l(),r}function $3(n,e,t){const i=U3(W3(n.path),t),r=Ct(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function j3(n,e){const t=[],i=new Map;e=r0({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function o(d,p,m){const _=!m,y=q3(d);y.aliasOf=m&&m.record;const x=r0(e,d),v=[y];if("alias"in d){const F=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of F)v.push(Ct({},y,{components:m?m.record.components:y.components,path:I,aliasOf:m?m.record:y}))}let w,T;for(const F of v){const{path:I}=F;if(p&&I[0]!=="/"){const P=p.record.path,B=P[P.length-1]==="/"?"":"/";F.path=p.record.path+(I&&B+I)}if(w=$3(F,p,x),m?m.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),_&&d.name&&!i0(w)&&l(d.name)),y.children){const P=y.children;for(let B=0;B<P.length;B++)o(P[B],w,m&&m.children[B])}m=m||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&u(w)}return T?()=>{l(T)}:Da}function l(d){if(Kv(d)){const p=i.get(d);p&&(i.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&i.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function c(){return t}function u(d){let p=0;for(;p<t.length&&k3(d,t[p])>=0&&(d.record.path!==t[p].record.path||!Jv(d,t[p]));)p++;t.splice(p,0,d),d.record.name&&!i0(d)&&i.set(d.record.name,d)}function h(d,p){let m,_={},y,x;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw ko(1,{location:d});x=m.record.name,_=Ct(n0(p.params,m.keys.filter(T=>!T.optional).map(T=>T.name)),d.params&&n0(d.params,m.keys.map(T=>T.name))),y=m.stringify(_)}else if("path"in d)y=d.path,m=t.find(T=>T.re.test(y)),m&&(_=m.parse(y),x=m.record.name);else{if(m=p.name?i.get(p.name):t.find(T=>T.re.test(p.path)),!m)throw ko(1,{location:d,currentLocation:p});x=m.record.name,_=Ct({},p.params,d.params),y=m.stringify(_)}const v=[];let w=m;for(;w;)v.unshift(w.record),w=w.parent;return{name:x,path:y,params:_,matched:v,meta:Y3(v)}}return n.forEach(d=>o(d)),{addRoute:o,resolve:h,removeRoute:l,getRoutes:c,getRecordMatcher:r}}function n0(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function q3(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:X3(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function X3(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function i0(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Y3(n){return n.reduce((e,t)=>Ct(e,t.meta),{})}function r0(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Jv(n,e){return e.children.some(t=>t===n||Jv(n,t))}const Qv=/#/g,K3=/&/g,Z3=/\//g,J3=/=/g,Q3=/\?/g,ex=/\+/g,eC=/%5B/g,tC=/%5D/g,tx=/%5E/g,nC=/%60/g,nx=/%7B/g,iC=/%7C/g,ix=/%7D/g,rC=/%20/g;function Nd(n){return encodeURI(""+n).replace(iC,"|").replace(eC,"[").replace(tC,"]")}function sC(n){return Nd(n).replace(nx,"{").replace(ix,"}").replace(tx,"^")}function Wh(n){return Nd(n).replace(ex,"%2B").replace(rC,"+").replace(Qv,"%23").replace(K3,"%26").replace(nC,"`").replace(nx,"{").replace(ix,"}").replace(tx,"^")}function oC(n){return Wh(n).replace(J3,"%3D")}function aC(n){return Nd(n).replace(Qv,"%23").replace(Q3,"%3F")}function lC(n){return n==null?"":aC(n).replace(Z3,"%2F")}function $c(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function cC(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const o=i[r].replace(ex," "),l=o.indexOf("="),c=$c(l<0?o:o.slice(0,l)),u=l<0?null:$c(o.slice(l+1));if(c in e){let h=e[c];Oi(h)||(h=e[c]=[h]),h.push(u)}else e[c]=u}return e}function s0(n){let e="";for(let t in n){const i=n[t];if(t=oC(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Oi(i)?i.map(o=>o&&Wh(o)):[i&&Wh(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function uC(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Oi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const fC=Symbol(""),o0=Symbol(""),zd=Symbol(""),rx=Symbol(""),$h=Symbol("");function xa(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Xr(n,e,t,i,r){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=p=>{p===!1?c(ko(4,{from:t,to:e})):p instanceof Error?c(p):N3(p)?c(ko(2,{from:e,to:p})):(o&&i.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),l())},h=n.call(i&&i.instances[r],e,t,u);let d=Promise.resolve(h);n.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function Gf(n,e,t,i){const r=[];for(const o of n)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(hC(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Xr(h,t,i,o,l))}else{let u=c();r.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const d=_3(h)?h.default:h;o.components[l]=d;const m=(d.__vccOpts||d)[e];return m&&Xr(m,t,i,o,l)()}))}}return r}function hC(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function a0(n){const e=yr(zd),t=yr(rx),i=Ai(()=>e.resolve(qi(n.to))),r=Ai(()=>{const{matched:u}=i.value,{length:h}=u,d=u[h-1],p=t.matched;if(!d||!p.length)return-1;const m=p.findIndex(Vo.bind(null,d));if(m>-1)return m;const _=l0(u[h-2]);return h>1&&l0(d)===_&&p[p.length-1].path!==_?p.findIndex(Vo.bind(null,u[h-2])):m}),o=Ai(()=>r.value>-1&&gC(t.params,i.value.params)),l=Ai(()=>r.value>-1&&r.value===t.matched.length-1&&Xv(t.params,i.value.params));function c(u={}){return mC(u)?e[qi(n.replace)?"replace":"push"](qi(n.to)).catch(Da):Promise.resolve()}return{route:i,href:Ai(()=>i.value.href),isActive:o,isExactActive:l,navigate:c}}const dC=Yo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:a0,setup(n,{slots:e}){const t=nl(a0(n)),{options:i}=yr(zd),r=Ai(()=>({[c0(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[c0(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&e.default(t);return n.custom?o:qv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},o)}}}),pC=dC;function mC(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function gC(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Oi(r)||r.length!==i.length||i.some((o,l)=>o!==r[l]))return!1}return!0}function l0(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const c0=(n,e,t)=>n??e??t,_C=Yo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=yr($h),r=Ai(()=>n.route||i.value),o=yr(o0,0),l=Ai(()=>{let h=qi(o);const{matched:d}=r.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Ai(()=>r.value.matched[l.value]);Dc(o0,Ai(()=>l.value+1)),Dc(fC,c),Dc($h,r);const u=xr();return Ca(()=>[u.value,c.value,n.name],([h,d,p],[m,_,y])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!Vo(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=r.value,d=n.name,p=c.value,m=p&&p.components[d];if(!m)return u0(t.default,{Component:m,route:h});const _=p.props[d],y=_?_===!0?h.params:typeof _=="function"?_(h):_:null,v=qv(m,Ct({},y,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(p.instances[d]=null)},ref:u}));return u0(t.default,{Component:v,route:h})||v}}});function u0(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const vC=_C;function xC(n){const e=j3(n.routes,n),t=n.parseQuery||cC,i=n.stringifyQuery||s0,r=n.history,o=xa(),l=xa(),c=xa(),u=OT(Br);let h=Br;Mo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=kf.bind(null,te=>""+te),p=kf.bind(null,lC),m=kf.bind(null,$c);function _(te,ye){let ce,ue;return Kv(te)?(ce=e.getRecordMatcher(te),ue=ye):ue=te,e.addRoute(ue,ce)}function y(te){const ye=e.getRecordMatcher(te);ye&&e.removeRoute(ye)}function x(){return e.getRoutes().map(te=>te.record)}function v(te){return!!e.getRecordMatcher(te)}function w(te,ye){if(ye=Ct({},ye||u.value),typeof te=="string"){const k=Hf(t,te,ye.path),J=e.resolve({path:k.path},ye),le=r.createHref(k.fullPath);return Ct(k,J,{params:m(J.params),hash:$c(k.hash),redirectedFrom:void 0,href:le})}let ce;if("path"in te)ce=Ct({},te,{path:Hf(t,te.path,ye.path).path});else{const k=Ct({},te.params);for(const J in k)k[J]==null&&delete k[J];ce=Ct({},te,{params:p(k)}),ye.params=p(ye.params)}const ue=e.resolve(ce,ye),He=te.hash||"";ue.params=d(m(ue.params));const R=y3(i,Ct({},te,{hash:sC(He),path:ue.path})),O=r.createHref(R);return Ct({fullPath:R,hash:He,query:i===s0?uC(te.query):te.query||{}},ue,{redirectedFrom:void 0,href:O})}function T(te){return typeof te=="string"?Hf(t,te,u.value.path):Ct({},te)}function F(te,ye){if(h!==te)return ko(8,{from:ye,to:te})}function I(te){return j(te)}function P(te){return I(Ct(T(te),{replace:!0}))}function B(te){const ye=te.matched[te.matched.length-1];if(ye&&ye.redirect){const{redirect:ce}=ye;let ue=typeof ce=="function"?ce(te):ce;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=T(ue):{path:ue},ue.params={}),Ct({query:te.query,hash:te.hash,params:"path"in ue?{}:te.params},ue)}}function j(te,ye){const ce=h=w(te),ue=u.value,He=te.state,R=te.force,O=te.replace===!0,k=B(ce);if(k)return j(Ct(T(k),{state:typeof k=="object"?Ct({},He,k.state):He,force:R,replace:O}),ye||ce);const J=ce;J.redirectedFrom=ye;let le;return!R&&b3(i,ue,ce)&&(le=ko(16,{to:J,from:ue}),Ee(ue,ue,!0,!1)),(le?Promise.resolve(le):X(J,ue)).catch(he=>ar(he)?ar(he,2)?he:de(he):Z(he,J,ue)).then(he=>{if(he){if(ar(he,2))return j(Ct({replace:O},T(he.to),{state:typeof he.to=="object"?Ct({},He,he.to.state):He,force:R}),ye||J)}else he=Fe(J,ue,!0,O,He);return Y(J,ue,he),he})}function C(te,ye){const ce=F(te,ye);return ce?Promise.reject(ce):Promise.resolve()}function U(te){const ye=ke.values().next().value;return ye&&typeof ye.runWithContext=="function"?ye.runWithContext(te):te()}function X(te,ye){let ce;const[ue,He,R]=yC(te,ye);ce=Gf(ue.reverse(),"beforeRouteLeave",te,ye);for(const k of ue)k.leaveGuards.forEach(J=>{ce.push(Xr(J,te,ye))});const O=C.bind(null,te,ye);return ce.push(O),oe(ce).then(()=>{ce=[];for(const k of o.list())ce.push(Xr(k,te,ye));return ce.push(O),oe(ce)}).then(()=>{ce=Gf(He,"beforeRouteUpdate",te,ye);for(const k of He)k.updateGuards.forEach(J=>{ce.push(Xr(J,te,ye))});return ce.push(O),oe(ce)}).then(()=>{ce=[];for(const k of R)if(k.beforeEnter)if(Oi(k.beforeEnter))for(const J of k.beforeEnter)ce.push(Xr(J,te,ye));else ce.push(Xr(k.beforeEnter,te,ye));return ce.push(O),oe(ce)}).then(()=>(te.matched.forEach(k=>k.enterCallbacks={}),ce=Gf(R,"beforeRouteEnter",te,ye),ce.push(O),oe(ce))).then(()=>{ce=[];for(const k of l.list())ce.push(Xr(k,te,ye));return ce.push(O),oe(ce)}).catch(k=>ar(k,8)?k:Promise.reject(k))}function Y(te,ye,ce){c.list().forEach(ue=>U(()=>ue(te,ye,ce)))}function Fe(te,ye,ce,ue,He){const R=F(te,ye);if(R)return R;const O=ye===Br,k=Mo?history.state:{};ce&&(ue||O?r.replace(te.fullPath,Ct({scroll:O&&k&&k.scroll},He)):r.push(te.fullPath,He)),u.value=te,Ee(te,ye,ce,O),de()}let Ae;function q(){Ae||(Ae=r.listen((te,ye,ce)=>{if(!We.listening)return;const ue=w(te),He=B(ue);if(He){j(Ct(He,{replace:!0}),ue).catch(Da);return}h=ue;const R=u.value;Mo&&L3(Zg(R.fullPath,ce.delta),uu()),X(ue,R).catch(O=>ar(O,12)?O:ar(O,2)?(j(O.to,ue).then(k=>{ar(k,20)&&!ce.delta&&ce.type===$a.pop&&r.go(-1,!1)}).catch(Da),Promise.reject()):(ce.delta&&r.go(-ce.delta,!1),Z(O,ue,R))).then(O=>{O=O||Fe(ue,R,!1),O&&(ce.delta&&!ar(O,8)?r.go(-ce.delta,!1):ce.type===$a.pop&&ar(O,20)&&r.go(-1,!1)),Y(ue,R,O)}).catch(Da)}))}let xe=xa(),Q=xa(),ee;function Z(te,ye,ce){de(te);const ue=Q.list();return ue.length?ue.forEach(He=>He(te,ye,ce)):console.error(te),Promise.reject(te)}function se(){return ee&&u.value!==Br?Promise.resolve():new Promise((te,ye)=>{xe.add([te,ye])})}function de(te){return ee||(ee=!te,q(),xe.list().forEach(([ye,ce])=>te?ce(te):ye()),xe.reset()),te}function Ee(te,ye,ce,ue){const{scrollBehavior:He}=n;if(!Mo||!He)return Promise.resolve();const R=!ce&&P3(Zg(te.fullPath,0))||(ue||!ce)&&history.state&&history.state.scroll||null;return Cd().then(()=>He(te,ye,R)).then(O=>O&&C3(O)).catch(O=>Z(O,te,ye))}const Se=te=>r.go(te);let Pe;const ke=new Set,We={currentRoute:u,listening:!0,addRoute:_,removeRoute:y,hasRoute:v,getRoutes:x,resolve:w,options:n,push:I,replace:P,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:o.add,beforeResolve:l.add,afterEach:c.add,onError:Q.add,isReady:se,install(te){const ye=this;te.component("RouterLink",pC),te.component("RouterView",vC),te.config.globalProperties.$router=ye,Object.defineProperty(te.config.globalProperties,"$route",{enumerable:!0,get:()=>qi(u)}),Mo&&!Pe&&u.value===Br&&(Pe=!0,I(r.location).catch(He=>{}));const ce={};for(const He in Br)Object.defineProperty(ce,He,{get:()=>u.value[He],enumerable:!0});te.provide(zd,ye),te.provide(rx,gv(ce)),te.provide($h,u);const ue=te.unmount;ke.add(te),te.unmount=function(){ke.delete(te),ke.size<1&&(h=Br,Ae&&Ae(),Ae=null,u.value=Br,Pe=!1,ee=!1),ue()}}};function oe(te){return te.reduce((ye,ce)=>ye.then(()=>U(ce)),Promise.resolve())}return We}function yC(n,e){const t=[],i=[],r=[],o=Math.max(e.matched.length,n.matched.length);for(let l=0;l<o;l++){const c=e.matched[l];c&&(n.matched.find(h=>Vo(h,c))?i.push(c):t.push(c));const u=n.matched[l];u&&(e.matched.find(h=>Vo(h,u))||r.push(u))}return[t,i,r]}function Wf(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Bd(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(h){throw h},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,l=!1,c;return{s:function(){t=t.call(n)},n:function(){var h=t.next();return o=h.done,h},e:function(h){l=!0,c=h},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(l)throw c}}}}function bC(n){return MC(n)||SC(n)||Bd(n)||wC()}function wC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function MC(n){if(Array.isArray(n))return jh(n)}function Fa(n){"@babel/helpers - typeof";return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fa(n)}function $f(n,e){return AC(n)||TC(n,e)||Bd(n,e)||EC()}function EC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bd(n,e){if(n){if(typeof n=="string")return jh(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jh(n,e)}}function jh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function TC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,l,c=[],u=!0,h=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(i=o.call(t)).done)&&(c.push(i.value),c.length!==e);u=!0);}catch(d){h=!0,r=d}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(h)throw r}}return c}}function AC(n){if(Array.isArray(n))return n}var Yt={innerWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},width:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,t){if(e){var i=e.offsetWidth;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}return 0},getOuterHeight:function(e,t){if(e){var i=e.offsetHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getClientHeight:function(e,t){if(e){var i=e.clientHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getViewport:function(){var e=window,t=document,i=t.documentElement,r=t.getElementsByTagName("body")[0],o=e.innerWidth||i.clientWidth||r.clientWidth,l=e.innerHeight||i.clientHeight||r.clientHeight;return{width:o,height:l}},getOffset:function(e){if(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var t=e.parentNode.childNodes,i=0,r=0;r<t.length;r++){if(t[r]===e)return i;t[r].nodeType===1&&i++}return-1},addMultipleClasses:function(e,t){var i=this;e&&t&&t.split(" ").forEach(function(r){return i.addClass(e,r)})},addClass:function(e,t){e&&t&&!this.hasClass(e,t)&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1},addStyles:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(t).forEach(function(i){var r=$f(i,2),o=r[0],l=r[1];return e.style[o]=l})},find:function(e,t){return this.isElement(e)?e.querySelectorAll(t):[]},findSingle:function(e,t){return this.isElement(e)?e.querySelector(t):null},createElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var i=document.createElement(e);this.setAttributes(i,t);for(var r=arguments.length,o=new Array(r>2?r-2:0),l=2;l<r;l++)o[l-2]=arguments[l];return i.append.apply(i,o),i}},setAttribute:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)},setAttributes:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var r=function o(l,c){var u,h,d=e!=null&&(u=e.$attrs)!==null&&u!==void 0&&u[l]?[e==null||(h=e.$attrs)===null||h===void 0?void 0:h[l]]:[];return[c].flat().reduce(function(p,m){if(m!=null){var _=Fa(m);if(_==="string"||_==="number")p.push(m);else if(_==="object"){var y=Array.isArray(m)?o(l,m):Object.entries(m).map(function(x){var v=$f(x,2),w=v[0],T=v[1];return l==="style"&&(T||T===0)?"".concat(w.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(T):T?w:void 0});p=y.length?p.concat(y.filter(function(x){return!!x})):p}}return p},d)};Object.entries(i).forEach(function(o){var l=$f(o,2),c=l[0],u=l[1];if(u!=null){var h=c.match(/^on(.+)/);h?e.addEventListener(h[1].toLowerCase(),u):c==="p-bind"?t.setAttributes(e,u):(u=c==="class"?bC(new Set(r("class",u))).join(" ").trim():c==="style"?r("style",u).join(";").trim():u,(e.$attrs=e.$attrs||{})&&(e.$attrs[c]=u),e.setAttribute(c,u))}})}},getAttribute:function(e,t){if(this.isElement(e)){var i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}},isAttributeEquals:function(e,t,i){return this.isElement(e)?this.getAttribute(e,t)===i:!1},isAttributeNotEquals:function(e,t,i){return!this.isAttributeEquals(e,t,i)},getHeight:function(e){if(e){var t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}return 0},getWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}return 0},absolutePosition:function(e,t){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,o=i.width,l=t.offsetHeight,c=t.offsetWidth,u=t.getBoundingClientRect(),h=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),p=this.getViewport(),m,_;u.top+l+r>p.height?(m=u.top+h-r,e.style.transformOrigin="bottom",m<0&&(m=h)):(m=l+u.top+h,e.style.transformOrigin="top"),u.left+o>p.width?_=Math.max(0,u.left+d+c-o):_=u.left+d,e.style.top=m+"px",e.style.left=_+"px"}},relativePosition:function(e,t){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,o=t.getBoundingClientRect(),l=this.getViewport(),c,u;o.top+r+i.height>l.height?(c=-1*i.height,e.style.transformOrigin="bottom",o.top+c<0&&(c=-1*o.top)):(c=r,e.style.transformOrigin="top"),i.width>l.width?u=o.left*-1:o.left+i.width>l.width?u=(o.left+i.width-l.width)*-1:u=0,e.style.top=c+"px",e.style.left=u+"px"}},getParents:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))},getScrollableParents:function(e){var t=[];if(e){var i=this.getParents(e),r=/(auto|scroll)/,o=function(v){try{var w=window.getComputedStyle(v,null);return r.test(w.getPropertyValue("overflow"))||r.test(w.getPropertyValue("overflowX"))||r.test(w.getPropertyValue("overflowY"))}catch{return!1}},l=Wf(i),c;try{for(l.s();!(c=l.n()).done;){var u=c.value,h=u.nodeType===1&&u.dataset.scrollselectors;if(h){var d=h.split(","),p=Wf(d),m;try{for(p.s();!(m=p.n()).done;){var _=m.value,y=this.findSingle(u,_);y&&o(y)&&t.push(y)}}catch(x){p.e(x)}finally{p.f()}}u.nodeType!==9&&o(u)&&t.push(u)}}catch(x){l.e(x)}finally{l.f()}}return t},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementDimensions:function(e){if(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}return 0},fadeIn:function(e,t){if(e){e.style.opacity=0;var i=+new Date,r=0,o=function l(){r=+e.style.opacity+(new Date().getTime()-i)/t,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};o()}},fadeOut:function(e,t){if(e)var i=1,r=50,o=t,l=r/o,c=setInterval(function(){i-=l,i<=0&&(i=0,clearInterval(c)),e.style.opacity=i},r)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.elElement)t.elElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":Fa(HTMLElement))==="object"?e instanceof HTMLElement:e&&Fa(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,t){var i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),l=o?parseFloat(o):0,c=e.getBoundingClientRect(),u=t.getBoundingClientRect(),h=u.top+document.body.scrollTop-(c.top+document.body.scrollTop)-r-l,d=e.scrollTop,p=e.clientHeight,m=this.getOuterHeight(t);h<0?e.scrollTop=d+h:h+m>p&&(e.scrollTop=d+h-p+m)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,t,i){e[t].apply(e,i)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,t){e&&document.activeElement!==e&&e.focus(t)},isFocusableElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)):!1},getFocusableElements:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)),r=[],o=Wf(i),l;try{for(o.s();!(l=o.n()).done;){var c=l.value;getComputedStyle(c).display!="none"&&getComputedStyle(c).visibility!="hidden"&&r.push(c)}}catch(u){o.e(u)}finally{o.f()}return r},getFirstFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[0]:null},getLastFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null},getNextFocusableElement:function(e,t,i){var r=this.getFocusableElements(e,i),o=r.length>0?r.findIndex(function(c){return c===t}):-1,l=o>-1&&r.length>=o+1?o+1:-1;return l>-1?r[l]:null},isClickable:function(e){if(e){var t=e.nodeName,i=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,t){if(typeof t=="string")e.style.cssText=t;else for(var i in t)e.style[i]=t[i]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("animation-duration")||"0");return i>0}return!1},hasCSSTransition:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0}return!1},exportCSV:function(e,t){var i=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(i,t+".csv");else{var r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(i)),r.setAttribute("download",t+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}};function CC(n,e){return RC(n)||PC(n,e)||Ud(n,e)||LC()}function LC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,l,c=[],u=!0,h=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(i=o.call(t)).done)&&(c.push(i.value),c.length!==e);u=!0);}catch(d){h=!0,r=d}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(h)throw r}}return c}}function RC(n){if(Array.isArray(n))return n}function f0(n){return OC(n)||DC(n)||Ud(n)||IC()}function IC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function OC(n){if(Array.isArray(n))return qh(n)}function jf(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Ud(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(h){throw h},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,l=!1,c;return{s:function(){t=t.call(n)},n:function(){var h=t.next();return o=h.done,h},e:function(h){l=!0,c=h},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(l)throw c}}}}function Ud(n,e){if(n){if(typeof n=="string")return qh(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qh(n,e)}}function qh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Na(n){"@babel/helpers - typeof";return Na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Na(n)}var ht={equals:function(e,t,i){return i?this.resolveFieldData(e,i)===this.resolveFieldData(t,i):this.deepEquals(e,t)},deepEquals:function(e,t){if(e===t)return!0;if(e&&t&&Na(e)=="object"&&Na(t)=="object"){var i=Array.isArray(e),r=Array.isArray(t),o,l,c;if(i&&r){if(l=e.length,l!=t.length)return!1;for(o=l;o--!==0;)if(!this.deepEquals(e[o],t[o]))return!1;return!0}if(i!=r)return!1;var u=e instanceof Date,h=t instanceof Date;if(u!=h)return!1;if(u&&h)return e.getTime()==t.getTime();var d=e instanceof RegExp,p=t instanceof RegExp;if(d!=p)return!1;if(d&&p)return e.toString()==t.toString();var m=Object.keys(e);if(l=m.length,l!==Object.keys(t).length)return!1;for(o=l;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[o]))return!1;for(o=l;o--!==0;)if(c=m[o],!this.deepEquals(e[c],t[c]))return!1;return!0}return e!==e&&t!==t},resolveFieldData:function(e,t){if(!e||!t)return null;try{var i=e[t];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(t.indexOf(".")===-1)return e[t];for(var r=t.split("."),o=e,l=0,c=r.length;l<c;++l){if(o==null)return null;o=o[r[l]]}return o}return null},getItemValue:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,i):e},filter:function(e,t,i){var r=[];if(e){var o=jf(e),l;try{for(o.s();!(l=o.n()).done;){var c=l.value,u=jf(t),h;try{for(u.s();!(h=u.n()).done;){var d=h.value;if(String(this.resolveFieldData(c,d)).toLowerCase().indexOf(i.toLowerCase())>-1){r.push(c);break}}}catch(p){u.e(p)}finally{u.f()}}}catch(p){o.e(p)}finally{o.f()}}return r},reorderArray:function(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))},findIndexInList:function(e,t){var i=-1;if(t){for(var r=0;r<t.length;r++)if(t[r]===e){i=r;break}}return i},contains:function(e,t){if(e!=null&&t&&t.length){var i=jf(t),r;try{for(i.s();!(r=i.n()).done;){var o=r.value;if(this.equals(e,o))return!0}}catch(l){i.e(l)}finally{i.f()}}return!1},insertIntoOrderedArray:function(e,t,i,r){if(i.length>0){for(var o=!1,l=0;l<i.length;l++){var c=this.findIndexInList(i[l],r);if(c>t){i.splice(l,0,e),o=!0;break}}o||i.push(e)}else i.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,t){var i=e.props;if(i){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=Object.prototype.hasOwnProperty.call(i,r)?r:t;return e.type.extends.props[t].type===Boolean&&i[o]===""?!0:i[o]}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(t,i){return i===0?t:"-"+t.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Na(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(t||e.length!==0)},isString:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(t||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,t){var i;if(this.isNotEmpty(e))try{i=e.findLast(t)}catch{i=f0(e).reverse().find(t)}return i},findLastIndex:function(e,t){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(t)}catch{i=e.lastIndexOf(f0(e).reverse().find(t))}return i},nestedKeys:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(t).reduce(function(r,o){var l=CC(o,2),c=l[0],u=l[1],h=i?"".concat(i,".").concat(c):c;return e.isObject(u)?r=r.concat(e.nestedKeys(u,h)):r.push(h),r},[])}},h0=0;function FC(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return h0++,"".concat(n).concat(h0)}var xn={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function ja(n){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ja(n)}function d0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function qf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?d0(Object(t),!0).forEach(function(i){NC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d0(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function NC(n,e,t){return e=zC(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zC(n){var e=BC(n,"string");return ja(e)==="symbol"?e:String(e)}function BC(n,e){if(ja(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(ja(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var p0={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[xn.STARTS_WITH,xn.CONTAINS,xn.NOT_CONTAINS,xn.ENDS_WITH,xn.EQUALS,xn.NOT_EQUALS],numeric:[xn.EQUALS,xn.NOT_EQUALS,xn.LESS_THAN,xn.LESS_THAN_OR_EQUAL_TO,xn.GREATER_THAN,xn.GREATER_THAN_OR_EQUAL_TO],date:[xn.DATE_IS,xn.DATE_IS_NOT,xn.DATE_BEFORE,xn.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,unstyled:!1,csp:{nonce:void 0}},UC=Symbol();function VC(n,e,t,i){var r=document.getElementById(t),o=r.cloneNode(!0),l=r.getAttribute("href").replace(n,e);o.setAttribute("id",t+"-clone"),o.setAttribute("href",l),o.addEventListener("load",function(){r.remove(),o.setAttribute("id",t),i&&i()}),r.parentNode&&r.parentNode.insertBefore(o,r.nextSibling)}var kC={install:function(e,t){var i=t?qf(qf({},p0),t):qf({},p0),r={config:nl(i),changeTheme:VC};e.config.globalProperties.$primevue=r,e.provide(UC,r)}};const fu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},HC={};function GC(n,e){const t=Us("router-view");return Rt(),fi(t)}const WC=fu(HC,[["render",GC]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="141",ao={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$C=0,m0=1,jC=2,sx=1,qC=2,Ta=3,qa=0,Di=1,os=2,XC=1,ts=0,Fo=1,g0=2,_0=3,v0=4,YC=5,Eo=100,KC=101,ZC=102,x0=103,y0=104,JC=200,QC=201,e2=202,t2=203,ox=204,ax=205,n2=206,i2=207,r2=208,s2=209,o2=210,a2=0,l2=1,c2=2,Xh=3,u2=4,f2=5,h2=6,d2=7,hu=0,p2=1,m2=2,br=0,g2=1,_2=2,v2=3,x2=4,y2=5,lx=300,Ho=301,Go=302,Yh=303,Kh=304,du=306,Zh=1e3,Ci=1001,Jh=1002,zn=1003,b0=1004,w0=1005,hi=1006,b2=1007,pu=1008,Vs=1009,w2=1010,S2=1011,cx=1012,M2=1013,Rs=1014,Is=1015,Xa=1016,E2=1017,T2=1018,No=1020,A2=1021,C2=1022,Pi=1023,L2=1024,P2=1025,Ns=1026,Wo=1027,R2=1028,I2=1029,D2=1030,O2=1031,F2=1033,Xf=33776,Yf=33777,Kf=33778,Zf=33779,S0=35840,M0=35841,E0=35842,T0=35843,N2=36196,A0=37492,C0=37496,L0=37808,P0=37809,R0=37810,I0=37811,D0=37812,O0=37813,F0=37814,N0=37815,z0=37816,B0=37817,U0=37818,V0=37819,k0=37820,H0=37821,G0=36492,ks=3e3,Ht=3001,z2=3200,B2=3201,Ko=0,U2=1,gr="srgb",Ds="srgb-linear",Jf=7680,V2=519,W0=35044,$0="300 es",Qh=1035;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const dn=[];for(let n=0;n<256;n++)dn[n]=(n<16?"0":"")+n.toString(16);const Fc=Math.PI/180,ed=180/Math.PI;function rl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Cn(n,e,t){return Math.max(e,Math.min(t,n))}function k2(n,e){return(n%e+e)%e}function Qf(n,e,t){return(1-t)*n+t*e}function j0(n){return(n&n-1)===0&&n!==0}function td(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Je{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,o,l,c,u,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=o,d[5]=u,d[6]=i,d[7]=l,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],c=i[3],u=i[6],h=i[1],d=i[4],p=i[7],m=i[2],_=i[5],y=i[8],x=r[0],v=r[3],w=r[6],T=r[1],F=r[4],I=r[7],P=r[2],B=r[5],j=r[8];return o[0]=l*x+c*T+u*P,o[3]=l*v+c*F+u*B,o[6]=l*w+c*I+u*j,o[1]=h*x+d*T+p*P,o[4]=h*v+d*F+p*B,o[7]=h*w+d*I+p*j,o[2]=m*x+_*T+y*P,o[5]=m*v+_*F+y*B,o[8]=m*w+_*I+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8];return t*l*d-t*c*h-i*o*d+i*c*u+r*o*h-r*l*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=d*l-c*h,m=c*u-d*o,_=h*o-l*u,y=t*p+i*m+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=p*x,e[1]=(r*h-d*i)*x,e[2]=(c*i-r*l)*x,e[3]=m*x,e[4]=(d*t-r*u)*x,e[5]=(r*o-c*t)*x,e[6]=_*x,e[7]=(i*u-h*t)*x,e[8]=(l*t-i*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,l,c){const u=Math.cos(o),h=Math.sin(o);return this.set(i*u,i*h,-i*(u*l+h*c)+l+e,-r*h,r*u,-r*(-h*l+u*c)+c+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],l=r[3],c=r[6],u=r[1],h=r[4],d=r[7];return r[0]=t*o+i*u,r[3]=t*l+i*h,r[6]=t*c+i*d,r[1]=-i*o+t*u,r[4]=-i*l+t*h,r[7]=-i*c+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ux(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const eh={[gr]:{[Ds]:zs},[Ds]:{[gr]:Nc}},xi={legacyMode:!0,get workingColorSpace(){return Ds},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(eh[e]&&eh[e][t]!==void 0){const i=eh[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={r:0,g:0,b:0},yi={h:0,s:0,l:0},rc={h:0,s:0,l:0};function th(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function sc(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ds){return this.r=e,this.g=t,this.b=i,xi.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ds){if(e=k2(e,1),t=Cn(t,0,1),i=Cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=th(l,o,e+1/3),this.g=th(l,o,e),this.b=th(l,o,e-1/3)}return xi.toWorkingColorSpace(this,r),this}setStyle(e,t=gr){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,xi.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,xi.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const u=parseFloat(o[1])/360,h=parseInt(o[2],10)/100,d=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(u,h,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,xi.toWorkingColorSpace(this,t),this;if(l===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,xi.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=gr){const i=fx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gr){return xi.fromWorkingColorSpace(sc(this,tn),e),Cn(tn.r*255,0,255)<<16^Cn(tn.g*255,0,255)<<8^Cn(tn.b*255,0,255)<<0}getHexString(e=gr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ds){xi.fromWorkingColorSpace(sc(this,tn),t);const i=tn.r,r=tn.g,o=tn.b,l=Math.max(i,r,o),c=Math.min(i,r,o);let u,h;const d=(c+l)/2;if(c===l)u=0,h=0;else{const p=l-c;switch(h=d<=.5?p/(l+c):p/(2-l-c),l){case i:u=(r-o)/p+(r<o?6:0);break;case r:u=(o-i)/p+2;break;case o:u=(i-r)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=Ds){return xi.fromWorkingColorSpace(sc(this,tn),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=gr){return xi.fromWorkingColorSpace(sc(this,tn),e),e!==gr?`color(${e} ${tn.r} ${tn.g} ${tn.b})`:`rgb(${tn.r*255|0},${tn.g*255|0},${tn.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(yi),yi.h+=e,yi.s+=t,yi.l+=i,this.setHSL(yi.h,yi.s,yi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(rc);const i=Qf(yi.h,rc.h,t),r=Qf(yi.s,rc.s,t),o=Qf(yi.l,rc.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}tt.NAMES=fx;let co;class hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{co===void 0&&(co=jc("canvas")),co.width=e.width,co.height=e.height;const i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=zs(o[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zs(t[i]/255)*255):t[i]=zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dx{constructor(e=null){this.isSource=!0,this.uuid=rl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(nh(r[l].image)):o.push(nh(r[l]))}else o=nh(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function nh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hx.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H2=0;class Fi extends Gs{constructor(e=Fi.DEFAULT_IMAGE,t=Fi.DEFAULT_MAPPING,i=Ci,r=Ci,o=hi,l=pu,c=Pi,u=Vs,h=1,d=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=rl(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Fi.DEFAULT_IMAGE=null;Fi.DEFAULT_MAPPING=lx;class gn{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const u=e.elements,h=u[0],d=u[4],p=u[8],m=u[1],_=u[5],y=u[9],x=u[2],v=u[6],w=u[10];if(Math.abs(d-m)<.01&&Math.abs(p-x)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+x)<.1&&Math.abs(y+v)<.1&&Math.abs(h+_+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,I=(_+1)/2,P=(w+1)/2,B=(d+m)/4,j=(p+x)/4,C=(y+v)/4;return F>I&&F>P?F<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(F),r=B/i,o=j/i):I>P?I<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(I),i=B/r,o=C/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=j/o,r=C/o),this.set(i,r,o,t),this}let T=Math.sqrt((v-y)*(v-y)+(p-x)*(p-x)+(m-d)*(m-d));return Math.abs(T)<.001&&(T=1),this.x=(v-y)/T,this.y=(p-x)/T,this.z=(m-d)/T,this.w=Math.acos((h+_+w-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ns extends Gs{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Fi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:hi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class px extends Fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G2 extends Fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,o,l,c){let u=i[r+0],h=i[r+1],d=i[r+2],p=i[r+3];const m=o[l+0],_=o[l+1],y=o[l+2],x=o[l+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=_,e[t+2]=y,e[t+3]=x;return}if(p!==x||u!==m||h!==_||d!==y){let v=1-c;const w=u*m+h*_+d*y+p*x,T=w>=0?1:-1,F=1-w*w;if(F>Number.EPSILON){const P=Math.sqrt(F),B=Math.atan2(P,w*T);v=Math.sin(v*B)/P,c=Math.sin(c*B)/P}const I=c*T;if(u=u*v+m*I,h=h*v+_*I,d=d*v+y*I,p=p*v+x*I,v===1-c){const P=1/Math.sqrt(u*u+h*h+d*d+p*p);u*=P,h*=P,d*=P,p*=P}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,o,l){const c=i[r],u=i[r+1],h=i[r+2],d=i[r+3],p=o[l],m=o[l+1],_=o[l+2],y=o[l+3];return e[t]=c*y+d*p+u*_-h*m,e[t+1]=u*y+d*m+h*p-c*_,e[t+2]=h*y+d*_+c*m-u*p,e[t+3]=d*y-c*p-u*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,o=e._z,l=e._order,c=Math.cos,u=Math.sin,h=c(i/2),d=c(r/2),p=c(o/2),m=u(i/2),_=u(r/2),y=u(o/2);switch(l){case"XYZ":this._x=m*d*p+h*_*y,this._y=h*_*p-m*d*y,this._z=h*d*y+m*_*p,this._w=h*d*p-m*_*y;break;case"YXZ":this._x=m*d*p+h*_*y,this._y=h*_*p-m*d*y,this._z=h*d*y-m*_*p,this._w=h*d*p+m*_*y;break;case"ZXY":this._x=m*d*p-h*_*y,this._y=h*_*p+m*d*y,this._z=h*d*y+m*_*p,this._w=h*d*p-m*_*y;break;case"ZYX":this._x=m*d*p-h*_*y,this._y=h*_*p+m*d*y,this._z=h*d*y-m*_*p,this._w=h*d*p+m*_*y;break;case"YZX":this._x=m*d*p+h*_*y,this._y=h*_*p+m*d*y,this._z=h*d*y-m*_*p,this._w=h*d*p-m*_*y;break;case"XZY":this._x=m*d*p-h*_*y,this._y=h*_*p-m*d*y,this._z=h*d*y+m*_*p,this._w=h*d*p+m*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],l=t[1],c=t[5],u=t[9],h=t[2],d=t[6],p=t[10],m=i+c+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(d-u)*_,this._y=(o-h)*_,this._z=(l-r)*_}else if(i>c&&i>p){const _=2*Math.sqrt(1+i-c-p);this._w=(d-u)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(o+h)/_}else if(c>p){const _=2*Math.sqrt(1+c-i-p);this._w=(o-h)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(u+d)/_}else{const _=2*Math.sqrt(1+p-i-c);this._w=(l-r)/_,this._x=(o+h)/_,this._y=(u+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,l=e._w,c=t._x,u=t._y,h=t._z,d=t._w;return this._x=i*d+l*c+r*h-o*u,this._y=r*d+l*u+o*c-i*h,this._z=o*d+l*h+i*u-r*c,this._w=l*d-i*c-r*u-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let c=l*e._w+i*e._x+r*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const u=1-c*c;if(u<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(u),d=Math.atan2(h,c),p=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=l*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=o*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(q0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,l=e.y,c=e.z,u=e.w,h=u*t+l*r-c*i,d=u*i+c*t-o*r,p=u*r+o*i-l*t,m=-o*t-l*i-c*r;return this.x=h*u+m*-o+d*-c-p*-l,this.y=d*u+m*-l+p*-o-h*-c,this.z=p*u+m*-c+h*-l-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,l=t.x,c=t.y,u=t.z;return this.x=r*u-o*c,this.y=o*l-i*u,this.z=i*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new H,q0=new Hs;class Zo{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,l=-1/0,c=-1/0;for(let u=0,h=e.length;u<h;u+=3){const d=e[u],p=e[u+1],m=e[u+2];d<t&&(t=d),p<i&&(i=p),m<r&&(r=m),d>o&&(o=d),p>l&&(l=p),m>c&&(c=m)}return this.min.set(t,i,r),this.max.set(o,l,c),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,l=-1/0,c=-1/0;for(let u=0,h=e.count;u<h;u++){const d=e.getX(u),p=e.getY(u),m=e.getZ(u);d<t&&(t=d),p<i&&(i=p),m<r&&(r=m),d>o&&(o=d),p>l&&(l=p),m>c&&(c=m)}return this.min.set(t,i,r),this.max.set(o,l,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let l=0,c=o.count;l<c;l++)bs.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(bs)}else i.boundingBox===null&&i.computeBoundingBox(),rh.copy(i.boundingBox),rh.applyMatrix4(e.matrixWorld),this.union(rh);const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bs),bs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),oc.subVectors(this.max,ya),uo.subVectors(e.a,ya),fo.subVectors(e.b,ya),ho.subVectors(e.c,ya),Ur.subVectors(fo,uo),Vr.subVectors(ho,fo),ws.subVectors(uo,ho);let t=[0,-Ur.z,Ur.y,0,-Vr.z,Vr.y,0,-ws.z,ws.y,Ur.z,0,-Ur.x,Vr.z,0,-Vr.x,ws.z,0,-ws.x,-Ur.y,Ur.x,0,-Vr.y,Vr.x,0,-ws.y,ws.x,0];return!sh(t,uo,fo,ho,oc)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,uo,fo,ho,oc))?!1:(ac.crossVectors(Ur,Vr),t=[ac.x,ac.y,ac.z],sh(t,uo,fo,ho,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new H,new H,new H,new H,new H,new H,new H,new H],bs=new H,rh=new Zo,uo=new H,fo=new H,ho=new H,Ur=new H,Vr=new H,ws=new H,ya=new H,oc=new H,ac=new H,Ss=new H;function sh(n,e,t,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Ss.fromArray(n,o);const c=r.x*Math.abs(Ss.x)+r.y*Math.abs(Ss.y)+r.z*Math.abs(Ss.z),u=e.dot(Ss),h=t.dot(Ss),d=i.dot(Ss);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>c)return!1}return!0}const W2=new Zo,X0=new H,lc=new H,oh=new H;class sl{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):W2.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){oh.subVectors(e,this.center);const t=oh.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(oh.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?lc.set(0,0,1).multiplyScalar(e.radius):lc.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(X0.copy(e.center).add(lc)),this.expandByPoint(X0.copy(e.center).sub(lc)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new H,ah=new H,cc=new H,kr=new H,lh=new H,uc=new H,ch=new H;class mu{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.direction).multiplyScalar(t).add(this.origin),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ah.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(ah);const o=e.distanceTo(t)*.5,l=-this.direction.dot(cc),c=kr.dot(this.direction),u=-kr.dot(cc),h=kr.lengthSq(),d=Math.abs(1-l*l);let p,m,_,y;if(d>0)if(p=l*u-c,m=l*c-u,y=o*d,p>=0)if(m>=-y)if(m<=y){const x=1/d;p*=x,m*=x,_=p*(p+l*m+2*c)+m*(l*p+m+2*u)+h}else m=o,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*u)+h;else m=-o,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-l*o+c)),m=p>0?-o:Math.min(Math.max(-o,-u),o),_=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-o,-u),o),_=m*(m+2*u)+h):(p=Math.max(0,-(l*o+c)),m=p>0?o:Math.min(Math.max(-o,-u),o),_=-p*p+m*(m+2*u)+h);else m=l>0?-o:o,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*u)+h;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(cc).multiplyScalar(m).add(ah),_}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),r=cr.dot(cr)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),c=i-l,u=i+l;return c<0&&u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,l,c,u;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),d>=0?(o=(e.min.y-m.y)*d,l=(e.max.y-m.y)*d):(o=(e.max.y-m.y)*d,l=(e.min.y-m.y)*d),i>l||o>r||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),i>u||c>r)||((c>i||i!==i)&&(i=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,r,o){lh.subVectors(t,e),uc.subVectors(i,e),ch.crossVectors(lh,uc);let l=this.direction.dot(ch),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;kr.subVectors(this.origin,e);const u=c*this.direction.dot(uc.crossVectors(kr,uc));if(u<0)return null;const h=c*this.direction.dot(lh.cross(kr));if(h<0||u+h>l)return null;const d=-c*kr.dot(ch);return d<0?null:this.at(d/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,o,l,c,u,h,d,p,m,_,y,x,v){const w=this.elements;return w[0]=e,w[4]=t,w[8]=i,w[12]=r,w[1]=o,w[5]=l,w[9]=c,w[13]=u,w[2]=h,w[6]=d,w[10]=p,w[14]=m,w[3]=_,w[7]=y,w[11]=x,w[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),o=1/po.setFromMatrixColumn(e,1).length(),l=1/po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const m=l*d,_=l*p,y=c*d,x=c*p;t[0]=u*d,t[4]=-u*p,t[8]=h,t[1]=_+y*h,t[5]=m-x*h,t[9]=-c*u,t[2]=x-m*h,t[6]=y+_*h,t[10]=l*u}else if(e.order==="YXZ"){const m=u*d,_=u*p,y=h*d,x=h*p;t[0]=m+x*c,t[4]=y*c-_,t[8]=l*h,t[1]=l*p,t[5]=l*d,t[9]=-c,t[2]=_*c-y,t[6]=x+m*c,t[10]=l*u}else if(e.order==="ZXY"){const m=u*d,_=u*p,y=h*d,x=h*p;t[0]=m-x*c,t[4]=-l*p,t[8]=y+_*c,t[1]=_+y*c,t[5]=l*d,t[9]=x-m*c,t[2]=-l*h,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const m=l*d,_=l*p,y=c*d,x=c*p;t[0]=u*d,t[4]=y*h-_,t[8]=m*h+x,t[1]=u*p,t[5]=x*h+m,t[9]=_*h-y,t[2]=-h,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const m=l*u,_=l*h,y=c*u,x=c*h;t[0]=u*d,t[4]=x-m*p,t[8]=y*p+_,t[1]=p,t[5]=l*d,t[9]=-c*d,t[2]=-h*d,t[6]=_*p+y,t[10]=m-x*p}else if(e.order==="XZY"){const m=l*u,_=l*h,y=c*u,x=c*h;t[0]=u*d,t[4]=-p,t[8]=h*d,t[1]=m*p+x,t[5]=l*d,t[9]=_*p-y,t[2]=y*p-_,t[6]=c*d,t[10]=x*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($2,e,j2)}lookAt(e,t,i){const r=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Hr.crossVectors(i,jn),Hr.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Hr.crossVectors(i,jn)),Hr.normalize(),fc.crossVectors(jn,Hr),r[0]=Hr.x,r[4]=fc.x,r[8]=jn.x,r[1]=Hr.y,r[5]=fc.y,r[9]=jn.y,r[2]=Hr.z,r[6]=fc.z,r[10]=jn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],c=i[4],u=i[8],h=i[12],d=i[1],p=i[5],m=i[9],_=i[13],y=i[2],x=i[6],v=i[10],w=i[14],T=i[3],F=i[7],I=i[11],P=i[15],B=r[0],j=r[4],C=r[8],U=r[12],X=r[1],Y=r[5],Fe=r[9],Ae=r[13],q=r[2],xe=r[6],Q=r[10],ee=r[14],Z=r[3],se=r[7],de=r[11],Ee=r[15];return o[0]=l*B+c*X+u*q+h*Z,o[4]=l*j+c*Y+u*xe+h*se,o[8]=l*C+c*Fe+u*Q+h*de,o[12]=l*U+c*Ae+u*ee+h*Ee,o[1]=d*B+p*X+m*q+_*Z,o[5]=d*j+p*Y+m*xe+_*se,o[9]=d*C+p*Fe+m*Q+_*de,o[13]=d*U+p*Ae+m*ee+_*Ee,o[2]=y*B+x*X+v*q+w*Z,o[6]=y*j+x*Y+v*xe+w*se,o[10]=y*C+x*Fe+v*Q+w*de,o[14]=y*U+x*Ae+v*ee+w*Ee,o[3]=T*B+F*X+I*q+P*Z,o[7]=T*j+F*Y+I*xe+P*se,o[11]=T*C+F*Fe+I*Q+P*de,o[15]=T*U+F*Ae+I*ee+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],l=e[1],c=e[5],u=e[9],h=e[13],d=e[2],p=e[6],m=e[10],_=e[14],y=e[3],x=e[7],v=e[11],w=e[15];return y*(+o*u*p-r*h*p-o*c*m+i*h*m+r*c*_-i*u*_)+x*(+t*u*_-t*h*m+o*l*m-r*l*_+r*h*d-o*u*d)+v*(+t*h*p-t*c*_-o*l*p+i*l*_+o*c*d-i*h*d)+w*(-r*c*d-t*u*p+t*c*m+r*l*p-i*l*m+i*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=e[9],m=e[10],_=e[11],y=e[12],x=e[13],v=e[14],w=e[15],T=p*v*h-x*m*h+x*u*_-c*v*_-p*u*w+c*m*w,F=y*m*h-d*v*h-y*u*_+l*v*_+d*u*w-l*m*w,I=d*x*h-y*p*h+y*c*_-l*x*_-d*c*w+l*p*w,P=y*p*u-d*x*u-y*c*m+l*x*m+d*c*v-l*p*v,B=t*T+i*F+r*I+o*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/B;return e[0]=T*j,e[1]=(x*m*o-p*v*o-x*r*_+i*v*_+p*r*w-i*m*w)*j,e[2]=(c*v*o-x*u*o+x*r*h-i*v*h-c*r*w+i*u*w)*j,e[3]=(p*u*o-c*m*o-p*r*h+i*m*h+c*r*_-i*u*_)*j,e[4]=F*j,e[5]=(d*v*o-y*m*o+y*r*_-t*v*_-d*r*w+t*m*w)*j,e[6]=(y*u*o-l*v*o-y*r*h+t*v*h+l*r*w-t*u*w)*j,e[7]=(l*m*o-d*u*o+d*r*h-t*m*h-l*r*_+t*u*_)*j,e[8]=I*j,e[9]=(y*p*o-d*x*o-y*i*_+t*x*_+d*i*w-t*p*w)*j,e[10]=(l*x*o-y*c*o+y*i*h-t*x*h-l*i*w+t*c*w)*j,e[11]=(d*c*o-l*p*o-d*i*h+t*p*h+l*i*_-t*c*_)*j,e[12]=P*j,e[13]=(d*x*r-y*p*r+y*i*m-t*x*m-d*i*v+t*p*v)*j,e[14]=(y*c*r-l*x*r-y*i*u+t*x*u+l*i*v-t*c*v)*j,e[15]=(l*p*r-d*c*r+d*i*u-t*p*u-l*i*m+t*c*m)*j,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,l=e.x,c=e.y,u=e.z,h=o*l,d=o*c;return this.set(h*l+i,h*c-r*u,h*u+r*c,0,h*c+r*u,d*c+i,d*u-r*l,0,h*u-r*c,d*u+r*l,o*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,l=t._y,c=t._z,u=t._w,h=o+o,d=l+l,p=c+c,m=o*h,_=o*d,y=o*p,x=l*d,v=l*p,w=c*p,T=u*h,F=u*d,I=u*p,P=i.x,B=i.y,j=i.z;return r[0]=(1-(x+w))*P,r[1]=(_+I)*P,r[2]=(y-F)*P,r[3]=0,r[4]=(_-I)*B,r[5]=(1-(m+w))*B,r[6]=(v+T)*B,r[7]=0,r[8]=(y+F)*j,r[9]=(v-T)*j,r[10]=(1-(m+x))*j,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=po.set(r[0],r[1],r[2]).length();const l=po.set(r[4],r[5],r[6]).length(),c=po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],bi.copy(this);const h=1/o,d=1/l,p=1/c;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=d,bi.elements[5]*=d,bi.elements[6]*=d,bi.elements[8]*=p,bi.elements[9]*=p,bi.elements[10]*=p,t.setFromRotationMatrix(bi),i.x=o,i.y=l,i.z=c,this}makePerspective(e,t,i,r,o,l){l===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const c=this.elements,u=2*o/(t-e),h=2*o/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),m=-(l+o)/(l-o),_=-2*l*o/(l-o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,l){const c=this.elements,u=1/(t-e),h=1/(i-r),d=1/(l-o),p=(t+e)*u,m=(i+r)*h,_=(l+o)*d;return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=-2*d,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const po=new H,bi=new Zt,$2=new H(0,0,0),j2=new H(1,1,1),Hr=new H,fc=new H,jn=new H,Y0=new Zt,K0=new Hs;class ol{constructor(e=0,t=0,i=0,r=ol.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],c=r[8],u=r[1],h=r[5],d=r[9],p=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ol.DefaultOrder="XYZ";ol.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q2=0;const Z0=new H,mo=new Hs,ur=new Zt,hc=new H,ba=new H,X2=new H,Y2=new Hs,J0=new H(1,0,0),Q0=new H(0,1,0),e_=new H(0,0,1),K2={type:"added"},t_={type:"removed"};class Sn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DefaultUp.clone();const e=new H,t=new ol,i=new Hs,r=new H(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Xi}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Sn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis(Q0,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,t){return Z0.copy(e).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis(Q0,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(ba,hc,this.up):ur.lookAt(hc,ba,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(ur),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(K2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(t_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,X2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Y2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const p=u[h];o(e.shapes,p)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(o(e.materials,this.material[u]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(o(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),h=l(e.textures),d=l(e.images),p=l(e.shapes),m=l(e.skeletons),_=l(e.animations),y=l(e.nodes);c.length>0&&(i.geometries=c),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),y.length>0&&(i.nodes=y)}return i.object=r,i;function l(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DefaultUp=new H(0,1,0);Sn.DefaultMatrixAutoUpdate=!0;const wi=new H,fr=new H,uh=new H,hr=new H,go=new H,_o=new H,n_=new H,fh=new H,hh=new H,dh=new H;class ji{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wi.subVectors(e,t),r.cross(wi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){wi.subVectors(r,t),fr.subVectors(i,t),uh.subVectors(e,t);const l=wi.dot(wi),c=wi.dot(fr),u=wi.dot(uh),h=fr.dot(fr),d=fr.dot(uh),p=l*h-c*c;if(p===0)return o.set(-2,-1,-1);const m=1/p,_=(h*u-c*d)*m,y=(l*d-c*u)*m;return o.set(1-_-y,y,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hr),hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getUV(e,t,i,r,o,l,c,u){return this.getBarycoord(e,t,i,r,hr),u.set(0,0),u.addScaledVector(o,hr.x),u.addScaledVector(l,hr.y),u.addScaledVector(c,hr.z),u}static isFrontFacing(e,t,i,r){return wi.subVectors(i,t),fr.subVectors(e,t),wi.cross(fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),wi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return ji.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let l,c;go.subVectors(r,i),_o.subVectors(o,i),fh.subVectors(e,i);const u=go.dot(fh),h=_o.dot(fh);if(u<=0&&h<=0)return t.copy(i);hh.subVectors(e,r);const d=go.dot(hh),p=_o.dot(hh);if(d>=0&&p<=d)return t.copy(r);const m=u*p-d*h;if(m<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(i).addScaledVector(go,l);dh.subVectors(e,o);const _=go.dot(dh),y=_o.dot(dh);if(y>=0&&_<=y)return t.copy(o);const x=_*h-u*y;if(x<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(i).addScaledVector(_o,c);const v=d*y-_*p;if(v<=0&&p-d>=0&&_-y>=0)return n_.subVectors(o,r),c=(p-d)/(p-d+(_-y)),t.copy(r).addScaledVector(n_,c);const w=1/(v+x+m);return l=x*w,c=m*w,t.copy(i).addScaledVector(go,l).addScaledVector(_o,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Z2=0;class nn extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z2++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Fo,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ox,this.blendDst=ax,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jf,this.stencilZFail=Jf,this.stencilZPass=Jf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===XC;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(i.blending=this.blending),this.side!==qa&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}nn.fromType=function(){return null};class gu extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new H,dc=new Je;class Yi{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=W0,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let l=e[r];l===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),l=new tt),t[i++]=l.r,t[i++]=l.g,t[i++]=l.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let l=e[r];l===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),l=new Je),t[i++]=l.x,t[i++]=l.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let l=e[r];l===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),l=new H),t[i++]=l.x,t[i++]=l.y,t[i++]=l.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let l=e[r];l===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),l=new gn),t[i++]=l.x,t[i++]=l.y,t[i++]=l.z,t[i++]=l.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mx extends Yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gx extends Yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class on extends Yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let J2=0;const ci=new Zt,ph=new Sn,vo=new H,qn=new Zo,wa=new Zo,sn=new H;class Kn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ux(e)?gx:mx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Xi().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];wa.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(qn.min,wa.min),qn.expandByPoint(sn),sn.addVectors(qn.max,wa.max),qn.expandByPoint(sn)):(qn.expandByPoint(wa.min),qn.expandByPoint(wa.max))}qn.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)sn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],u=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)sn.fromBufferAttribute(c,h),u&&(vo.fromBufferAttribute(e,h),sn.add(vo)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,l=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*c),4));const u=this.getAttribute("tangent").array,h=[],d=[];for(let X=0;X<c;X++)h[X]=new H,d[X]=new H;const p=new H,m=new H,_=new H,y=new Je,x=new Je,v=new Je,w=new H,T=new H;function F(X,Y,Fe){p.fromArray(r,X*3),m.fromArray(r,Y*3),_.fromArray(r,Fe*3),y.fromArray(l,X*2),x.fromArray(l,Y*2),v.fromArray(l,Fe*2),m.sub(p),_.sub(p),x.sub(y),v.sub(y);const Ae=1/(x.x*v.y-v.x*x.y);isFinite(Ae)&&(w.copy(m).multiplyScalar(v.y).addScaledVector(_,-x.y).multiplyScalar(Ae),T.copy(_).multiplyScalar(x.x).addScaledVector(m,-v.x).multiplyScalar(Ae),h[X].add(w),h[Y].add(w),h[Fe].add(w),d[X].add(T),d[Y].add(T),d[Fe].add(T))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let X=0,Y=I.length;X<Y;++X){const Fe=I[X],Ae=Fe.start,q=Fe.count;for(let xe=Ae,Q=Ae+q;xe<Q;xe+=3)F(i[xe+0],i[xe+1],i[xe+2])}const P=new H,B=new H,j=new H,C=new H;function U(X){j.fromArray(o,X*3),C.copy(j);const Y=h[X];P.copy(Y),P.sub(j.multiplyScalar(j.dot(Y))).normalize(),B.crossVectors(C,Y);const Ae=B.dot(d[X])<0?-1:1;u[X*4]=P.x,u[X*4+1]=P.y,u[X*4+2]=P.z,u[X*4+3]=Ae}for(let X=0,Y=I.length;X<Y;++X){const Fe=I[X],Ae=Fe.start,q=Fe.count;for(let xe=Ae,Q=Ae+q;xe<Q;xe+=3)U(i[xe+0]),U(i[xe+1]),U(i[xe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const r=new H,o=new H,l=new H,c=new H,u=new H,h=new H,d=new H,p=new H;if(e)for(let m=0,_=e.count;m<_;m+=3){const y=e.getX(m+0),x=e.getX(m+1),v=e.getX(m+2);r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),l.fromBufferAttribute(t,v),d.subVectors(l,o),p.subVectors(r,o),d.cross(p),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,v),c.add(d),u.add(d),h.add(d),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),d.subVectors(l,o),p.subVectors(r,o),d.cross(p),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const l=i[r].array,c=e.attributes[r],u=c.array,h=c.itemSize*t,d=Math.min(u.length,l.length-h);for(let p=0,m=h;p<d;p++,m++)l[m]=u[p]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,u){const h=c.array,d=c.itemSize,p=c.normalized,m=new h.constructor(u.length*d);let _=0,y=0;for(let x=0,v=u.length;x<v;x++){c.isInterleavedBufferAttribute?_=u[x]*c.data.stride+c.offset:_=u[x]*d;for(let w=0;w<d;w++)m[y++]=h[_++]}return new Yi(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,r=this.attributes;for(const c in r){const u=r[c],h=e(u,i);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const u=[],h=o[c];for(let d=0,p=h.length;d<p;d++){const m=h[d],_=e(m,i);u.push(_)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const h=i[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let p=0,m=h.length;p<m;p++){const _=h[p];d.push(_.toJSON(e.data))}d.length>0&&(r[u]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const o=e.morphAttributes;for(const h in o){const d=[],p=o[h];for(let m=0,_=p.length;m<_;m++)d.push(p[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,d=l.length;h<d;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new Zt,xo=new mu,mh=new sl,Gr=new H,Wr=new H,$r=new H,gh=new H,_h=new H,vh=new H,pc=new H,mc=new H,gc=new H,_c=new Je,vc=new Je,xc=new Je,xh=new H,yc=new H;class Yn extends Sn{constructor(e=new Kn,t=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),mh.copy(i.boundingSphere),mh.applyMatrix4(o),e.ray.intersectsSphere(mh)===!1)||(i_.copy(o).invert(),xo.copy(e.ray).applyMatrix4(i_),i.boundingBox!==null&&xo.intersectsBox(i.boundingBox)===!1))return;let l;const c=i.index,u=i.attributes.position,h=i.morphAttributes.position,d=i.morphTargetsRelative,p=i.attributes.uv,m=i.attributes.uv2,_=i.groups,y=i.drawRange;if(c!==null)if(Array.isArray(r))for(let x=0,v=_.length;x<v;x++){const w=_[x],T=r[w.materialIndex],F=Math.max(w.start,y.start),I=Math.min(c.count,Math.min(w.start+w.count,y.start+y.count));for(let P=F,B=I;P<B;P+=3){const j=c.getX(P),C=c.getX(P+1),U=c.getX(P+2);l=bc(this,T,e,xo,u,h,d,p,m,j,C,U),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=w.materialIndex,t.push(l))}}else{const x=Math.max(0,y.start),v=Math.min(c.count,y.start+y.count);for(let w=x,T=v;w<T;w+=3){const F=c.getX(w),I=c.getX(w+1),P=c.getX(w+2);l=bc(this,r,e,xo,u,h,d,p,m,F,I,P),l&&(l.faceIndex=Math.floor(w/3),t.push(l))}}else if(u!==void 0)if(Array.isArray(r))for(let x=0,v=_.length;x<v;x++){const w=_[x],T=r[w.materialIndex],F=Math.max(w.start,y.start),I=Math.min(u.count,Math.min(w.start+w.count,y.start+y.count));for(let P=F,B=I;P<B;P+=3){const j=P,C=P+1,U=P+2;l=bc(this,T,e,xo,u,h,d,p,m,j,C,U),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=w.materialIndex,t.push(l))}}else{const x=Math.max(0,y.start),v=Math.min(u.count,y.start+y.count);for(let w=x,T=v;w<T;w+=3){const F=w,I=w+1,P=w+2;l=bc(this,r,e,xo,u,h,d,p,m,F,I,P),l&&(l.faceIndex=Math.floor(w/3),t.push(l))}}}}function Q2(n,e,t,i,r,o,l,c){let u;if(e.side===Di?u=i.intersectTriangle(l,o,r,!0,c):u=i.intersectTriangle(r,o,l,e.side!==os,c),u===null)return null;yc.copy(c),yc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(yc);return h<t.near||h>t.far?null:{distance:h,point:yc.clone(),object:n}}function bc(n,e,t,i,r,o,l,c,u,h,d,p){Gr.fromBufferAttribute(r,h),Wr.fromBufferAttribute(r,d),$r.fromBufferAttribute(r,p);const m=n.morphTargetInfluences;if(o&&m){pc.set(0,0,0),mc.set(0,0,0),gc.set(0,0,0);for(let y=0,x=o.length;y<x;y++){const v=m[y],w=o[y];v!==0&&(gh.fromBufferAttribute(w,h),_h.fromBufferAttribute(w,d),vh.fromBufferAttribute(w,p),l?(pc.addScaledVector(gh,v),mc.addScaledVector(_h,v),gc.addScaledVector(vh,v)):(pc.addScaledVector(gh.sub(Gr),v),mc.addScaledVector(_h.sub(Wr),v),gc.addScaledVector(vh.sub($r),v)))}Gr.add(pc),Wr.add(mc),$r.add(gc)}n.isSkinnedMesh&&(n.boneTransform(h,Gr),n.boneTransform(d,Wr),n.boneTransform(p,$r));const _=Q2(n,e,t,i,Gr,Wr,$r,xh);if(_){c&&(_c.fromBufferAttribute(c,h),vc.fromBufferAttribute(c,d),xc.fromBufferAttribute(c,p),_.uv=ji.getUV(xh,Gr,Wr,$r,_c,vc,xc,new Je)),u&&(_c.fromBufferAttribute(u,h),vc.fromBufferAttribute(u,d),xc.fromBufferAttribute(u,p),_.uv2=ji.getUV(xh,Gr,Wr,$r,_c,vc,xc,new Je));const y={a:h,b:d,c:p,normal:new H,materialIndex:0};ji.getNormal(Gr,Wr,$r,y.normal),_.face=y}return _}class as extends Kn{constructor(e=1,t=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const u=[],h=[],d=[],p=[];let m=0,_=0;y("z","y","x",-1,-1,i,t,e,l,o,0),y("z","y","x",1,-1,i,t,-e,l,o,1),y("x","z","y",1,1,e,i,t,r,l,2),y("x","z","y",1,-1,e,i,-t,r,l,3),y("x","y","z",1,-1,e,t,i,r,o,4),y("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(p,2));function y(x,v,w,T,F,I,P,B,j,C,U){const X=I/j,Y=P/C,Fe=I/2,Ae=P/2,q=B/2,xe=j+1,Q=C+1;let ee=0,Z=0;const se=new H;for(let de=0;de<Q;de++){const Ee=de*Y-Ae;for(let Se=0;Se<xe;Se++){const Pe=Se*X-Fe;se[x]=Pe*T,se[v]=Ee*F,se[w]=q,h.push(se.x,se.y,se.z),se[x]=0,se[v]=0,se[w]=B>0?1:-1,d.push(se.x,se.y,se.z),p.push(Se/j),p.push(1-de/C),ee+=1}}for(let de=0;de<C;de++)for(let Ee=0;Ee<j;Ee++){const Se=m+Ee+xe*de,Pe=m+Ee+xe*(de+1),ke=m+(Ee+1)+xe*(de+1),We=m+(Ee+1)+xe*de;u.push(Se,Pe,We),u.push(Pe,ke,We),Z+=6}c.addGroup(_,Z,U),_+=Z,m+=ee}}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=$o(n[t]);for(const r in i)e[r]=i[r]}return e}const eL={clone:$o,merge:yn};var tL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=tL,this.fragmentShader=nL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _x extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bn extends _x{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ed*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/u,t-=l.offsetY*i/h,r*=l.width/u,i*=l.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yo=90,bo=1;class iL extends Sn{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Bn(yo,bo,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new H(1,0,0)),this.add(r);const o=new Bn(yo,bo,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new H(-1,0,0)),this.add(o);const l=new Bn(yo,bo,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(new H(0,1,0)),this.add(l);const c=new Bn(yo,bo,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new H(0,-1,0)),this.add(c);const u=new Bn(yo,bo,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new H(0,0,1)),this.add(u);const h=new Bn(yo,bo,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new H(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,c,u,h]=this.children,d=e.getRenderTarget(),p=e.toneMapping,m=e.xr.enabled;e.toneMapping=br,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,c),e.setRenderTarget(i,4),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class vx extends Fi{constructor(e,t,i,r,o,l,c,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Ho,super(e,t,i,r,o,l,c,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rL extends ns{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new as(5,5,5),o=new Sr({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Di,blending:ts});o.uniforms.tEquirect.value=t;const l=new Yn(r,o),c=t.minFilter;return t.minFilter===pu&&(t.minFilter=hi),new iL(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(o)}}const yh=new H,sL=new H,oL=new Xi;class Ms{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yh.subVectors(i,t).cross(sL.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(yh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oL.getNormalMatrix(e),r=this.coplanarPoint(yh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wo=new sl,wc=new H;class Hd{constructor(e=new Ms,t=new Ms,i=new Ms,r=new Ms,o=new Ms,l=new Ms){this.planes=[e,t,i,r,o,l]}set(e,t,i,r,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],c=i[3],u=i[4],h=i[5],d=i[6],p=i[7],m=i[8],_=i[9],y=i[10],x=i[11],v=i[12],w=i[13],T=i[14],F=i[15];return t[0].setComponents(c-r,p-u,x-m,F-v).normalize(),t[1].setComponents(c+r,p+u,x+m,F+v).normalize(),t[2].setComponents(c+o,p+h,x+_,F+w).normalize(),t[3].setComponents(c-o,p-h,x-_,F-w).normalize(),t[4].setComponents(c-l,p-d,x-y,F-T).normalize(),t[5].setComponents(c+l,p+d,x+y,F+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wo)}intersectsSprite(e){return wo.center.set(0,0,0),wo.radius=.7071067811865476,wo.applyMatrix4(e.matrixWorld),this.intersectsSphere(wo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wc.x=r.normal.x>0?e.max.x:e.min.x,wc.y=r.normal.y>0?e.max.y:e.min.y,wc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xx(){let n=null,e=!1,t=null,i=null;function r(o,l){t(o,l),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function aL(n,e){const t=e.isWebGL2,i=new WeakMap;function r(h,d){const p=h.array,m=h.usage,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,p,m),h.onUploadCallback();let y;if(p instanceof Float32Array)y=5126;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(p instanceof Int16Array)y=5122;else if(p instanceof Uint32Array)y=5125;else if(p instanceof Int32Array)y=5124;else if(p instanceof Int8Array)y=5120;else if(p instanceof Uint8Array)y=5121;else if(p instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version}}function o(h,d,p){const m=d.array,_=d.updateRange;n.bindBuffer(p,h),_.count===-1?n.bufferSubData(p,0,m):(t?n.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):n.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1)}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=i.get(h);d&&(n.deleteBuffer(d.buffer),i.delete(h))}function u(h,d){if(h.isGLBufferAttribute){const m=i.get(h);(!m||m.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p===void 0?i.set(h,r(h,d)):p.version<h.version&&(o(p.buffer,h,d),p.version=h.version)}return{get:l,remove:c,update:u}}class _u extends Kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,l=t/2,c=Math.floor(i),u=Math.floor(r),h=c+1,d=u+1,p=e/c,m=t/u,_=[],y=[],x=[],v=[];for(let w=0;w<d;w++){const T=w*m-l;for(let F=0;F<h;F++){const I=F*p-o;y.push(I,-T,0),x.push(0,0,1),v.push(F/c),v.push(1-w/u)}}for(let w=0;w<u;w++)for(let T=0;T<c;T++){const F=T+h*w,I=T+h*(w+1),P=T+1+h*(w+1),B=T+1+h*w;_.push(F,I,B),_.push(I,P,B)}this.setIndex(_),this.setAttribute("position",new on(y,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(v,2))}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}var lL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uL=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pL="vec3 transformed = vec3( position );",mL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gL=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,_L=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,vL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,yL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ML=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,TL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,AL=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,CL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,LL=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,IL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OL="gl_FragColor = linearToOutputTexel( gl_FragColor );",FL=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NL=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,zL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VL=`#ifdef USE_ENVMAP
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
#endif`,kL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$L=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,jL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XL=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,YL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,KL=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ZL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,QL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,tP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,nP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,iP=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,oP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_P=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,bP=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,TP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,AP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,LP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,IP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BP=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,UP=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VP=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,kP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,WP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$P=`#ifdef USE_SKINNING
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
#endif`,jP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KP=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,ZP=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,JP=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,QP=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,eR=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,tR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,nR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,iR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,rR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oR=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cR=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,uR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,hR=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_R=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,wR=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ER=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,TR=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,CR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,PR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,IR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DR=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,FR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pt={alphamap_fragment:lL,alphamap_pars_fragment:cL,alphatest_fragment:uL,alphatest_pars_fragment:fL,aomap_fragment:hL,aomap_pars_fragment:dL,begin_vertex:pL,beginnormal_vertex:mL,bsdfs:gL,iridescence_fragment:_L,bumpmap_pars_fragment:vL,clipping_planes_fragment:xL,clipping_planes_pars_fragment:yL,clipping_planes_pars_vertex:bL,clipping_planes_vertex:wL,color_fragment:SL,color_pars_fragment:ML,color_pars_vertex:EL,color_vertex:TL,common:AL,cube_uv_reflection_fragment:CL,defaultnormal_vertex:LL,displacementmap_pars_vertex:PL,displacementmap_vertex:RL,emissivemap_fragment:IL,emissivemap_pars_fragment:DL,encodings_fragment:OL,encodings_pars_fragment:FL,envmap_fragment:NL,envmap_common_pars_fragment:zL,envmap_pars_fragment:BL,envmap_pars_vertex:UL,envmap_physical_pars_fragment:KL,envmap_vertex:VL,fog_vertex:kL,fog_pars_vertex:HL,fog_fragment:GL,fog_pars_fragment:WL,gradientmap_pars_fragment:$L,lightmap_fragment:jL,lightmap_pars_fragment:qL,lights_lambert_vertex:XL,lights_pars_begin:YL,lights_toon_fragment:ZL,lights_toon_pars_fragment:JL,lights_phong_fragment:QL,lights_phong_pars_fragment:eP,lights_physical_fragment:tP,lights_physical_pars_fragment:nP,lights_fragment_begin:iP,lights_fragment_maps:rP,lights_fragment_end:sP,logdepthbuf_fragment:oP,logdepthbuf_pars_fragment:aP,logdepthbuf_pars_vertex:lP,logdepthbuf_vertex:cP,map_fragment:uP,map_pars_fragment:fP,map_particle_fragment:hP,map_particle_pars_fragment:dP,metalnessmap_fragment:pP,metalnessmap_pars_fragment:mP,morphcolor_vertex:gP,morphnormal_vertex:_P,morphtarget_pars_vertex:vP,morphtarget_vertex:xP,normal_fragment_begin:yP,normal_fragment_maps:bP,normal_pars_fragment:wP,normal_pars_vertex:SP,normal_vertex:MP,normalmap_pars_fragment:EP,clearcoat_normal_fragment_begin:TP,clearcoat_normal_fragment_maps:AP,clearcoat_pars_fragment:CP,iridescence_pars_fragment:LP,output_fragment:PP,packing:RP,premultiplied_alpha_fragment:IP,project_vertex:DP,dithering_fragment:OP,dithering_pars_fragment:FP,roughnessmap_fragment:NP,roughnessmap_pars_fragment:zP,shadowmap_pars_fragment:BP,shadowmap_pars_vertex:UP,shadowmap_vertex:VP,shadowmask_pars_fragment:kP,skinbase_vertex:HP,skinning_pars_vertex:GP,skinning_vertex:WP,skinnormal_vertex:$P,specularmap_fragment:jP,specularmap_pars_fragment:qP,tonemapping_fragment:XP,tonemapping_pars_fragment:YP,transmission_fragment:KP,transmission_pars_fragment:ZP,uv_pars_fragment:JP,uv_pars_vertex:QP,uv_vertex:eR,uv2_pars_fragment:tR,uv2_pars_vertex:nR,uv2_vertex:iR,worldpos_vertex:rR,background_vert:sR,background_frag:oR,cube_vert:aR,cube_frag:lR,depth_vert:cR,depth_frag:uR,distanceRGBA_vert:fR,distanceRGBA_frag:hR,equirect_vert:dR,equirect_frag:pR,linedashed_vert:mR,linedashed_frag:gR,meshbasic_vert:_R,meshbasic_frag:vR,meshlambert_vert:xR,meshlambert_frag:yR,meshmatcap_vert:bR,meshmatcap_frag:wR,meshnormal_vert:SR,meshnormal_frag:MR,meshphong_vert:ER,meshphong_frag:TR,meshphysical_vert:AR,meshphysical_frag:CR,meshtoon_vert:LR,meshtoon_frag:PR,points_vert:RR,points_frag:IR,shadow_vert:DR,shadow_frag:OR,sprite_vert:FR,sprite_frag:NR},Ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xi},uv2Transform:{value:new Xi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xi}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xi}}},Wi={basic:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:yn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:yn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:yn([Ve.points,Ve.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:yn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:yn([Ve.common,Ve.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:yn([Ve.sprite,Ve.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xi},t2D:{value:null}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},cube:{uniforms:yn([Ve.envmap,{opacity:{value:1}}]),vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:yn([Ve.common,Ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:yn([Ve.lights,Ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wi.physical={uniforms:yn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};function zR(n,e,t,i,r,o){const l=new tt(0);let c=r===!0?0:1,u,h,d=null,p=0,m=null;function _(x,v){let w=!1,T=v.isScene===!0?v.background:null;T&&T.isTexture&&(T=e.get(T));const F=n.xr,I=F.getSession&&F.getSession();I&&I.environmentBlendMode==="additive"&&(T=null),T===null?y(l,c):T&&T.isColor&&(y(T,1),w=!0),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),T&&(T.isCubeTexture||T.mapping===du)?(h===void 0&&(h=new Yn(new as(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:$o(Wi.cube.uniforms),vertexShader:Wi.cube.vertexShader,fragmentShader:Wi.cube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,(d!==T||p!==T.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=T,p=T.version,m=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Yn(new _u(2,2),new Sr({name:"BackgroundMaterial",uniforms:$o(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=T,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,m=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function y(x,v){t.buffers.color.setClear(x.r,x.g,x.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(x,v=1){l.set(x),c=v,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,y(l,c)},render:_}}function BR(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,c={},u=v(null);let h=u,d=!1;function p(q,xe,Q,ee,Z){let se=!1;if(l){const de=x(ee,Q,xe);h!==de&&(h=de,_(h.object)),se=w(q,ee,Q,Z),se&&T(q,ee,Q,Z)}else{const de=xe.wireframe===!0;(h.geometry!==ee.id||h.program!==Q.id||h.wireframe!==de)&&(h.geometry=ee.id,h.program=Q.id,h.wireframe=de,se=!0)}Z!==null&&t.update(Z,34963),(se||d)&&(d=!1,C(q,xe,Q,ee),Z!==null&&n.bindBuffer(34963,t.get(Z).buffer))}function m(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function _(q){return i.isWebGL2?n.bindVertexArray(q):o.bindVertexArrayOES(q)}function y(q){return i.isWebGL2?n.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function x(q,xe,Q){const ee=Q.wireframe===!0;let Z=c[q.id];Z===void 0&&(Z={},c[q.id]=Z);let se=Z[xe.id];se===void 0&&(se={},Z[xe.id]=se);let de=se[ee];return de===void 0&&(de=v(m()),se[ee]=de),de}function v(q){const xe=[],Q=[],ee=[];for(let Z=0;Z<r;Z++)xe[Z]=0,Q[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:xe,enabledAttributes:Q,attributeDivisors:ee,object:q,attributes:{},index:null}}function w(q,xe,Q,ee){const Z=h.attributes,se=xe.attributes;let de=0;const Ee=Q.getAttributes();for(const Se in Ee)if(Ee[Se].location>=0){const ke=Z[Se];let We=se[Se];if(We===void 0&&(Se==="instanceMatrix"&&q.instanceMatrix&&(We=q.instanceMatrix),Se==="instanceColor"&&q.instanceColor&&(We=q.instanceColor)),ke===void 0||ke.attribute!==We||We&&ke.data!==We.data)return!0;de++}return h.attributesNum!==de||h.index!==ee}function T(q,xe,Q,ee){const Z={},se=xe.attributes;let de=0;const Ee=Q.getAttributes();for(const Se in Ee)if(Ee[Se].location>=0){let ke=se[Se];ke===void 0&&(Se==="instanceMatrix"&&q.instanceMatrix&&(ke=q.instanceMatrix),Se==="instanceColor"&&q.instanceColor&&(ke=q.instanceColor));const We={};We.attribute=ke,ke&&ke.data&&(We.data=ke.data),Z[Se]=We,de++}h.attributes=Z,h.attributesNum=de,h.index=ee}function F(){const q=h.newAttributes;for(let xe=0,Q=q.length;xe<Q;xe++)q[xe]=0}function I(q){P(q,0)}function P(q,xe){const Q=h.newAttributes,ee=h.enabledAttributes,Z=h.attributeDivisors;Q[q]=1,ee[q]===0&&(n.enableVertexAttribArray(q),ee[q]=1),Z[q]!==xe&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,xe),Z[q]=xe)}function B(){const q=h.newAttributes,xe=h.enabledAttributes;for(let Q=0,ee=xe.length;Q<ee;Q++)xe[Q]!==q[Q]&&(n.disableVertexAttribArray(Q),xe[Q]=0)}function j(q,xe,Q,ee,Z,se){i.isWebGL2===!0&&(Q===5124||Q===5125)?n.vertexAttribIPointer(q,xe,Q,Z,se):n.vertexAttribPointer(q,xe,Q,ee,Z,se)}function C(q,xe,Q,ee){if(i.isWebGL2===!1&&(q.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;F();const Z=ee.attributes,se=Q.getAttributes(),de=xe.defaultAttributeValues;for(const Ee in se){const Se=se[Ee];if(Se.location>=0){let Pe=Z[Ee];if(Pe===void 0&&(Ee==="instanceMatrix"&&q.instanceMatrix&&(Pe=q.instanceMatrix),Ee==="instanceColor"&&q.instanceColor&&(Pe=q.instanceColor)),Pe!==void 0){const ke=Pe.normalized,We=Pe.itemSize,oe=t.get(Pe);if(oe===void 0)continue;const te=oe.buffer,ye=oe.type,ce=oe.bytesPerElement;if(Pe.isInterleavedBufferAttribute){const ue=Pe.data,He=ue.stride,R=Pe.offset;if(ue.isInstancedInterleavedBuffer){for(let O=0;O<Se.locationSize;O++)P(Se.location+O,ue.meshPerAttribute);q.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let O=0;O<Se.locationSize;O++)I(Se.location+O);n.bindBuffer(34962,te);for(let O=0;O<Se.locationSize;O++)j(Se.location+O,We/Se.locationSize,ye,ke,He*ce,(R+We/Se.locationSize*O)*ce)}else{if(Pe.isInstancedBufferAttribute){for(let ue=0;ue<Se.locationSize;ue++)P(Se.location+ue,Pe.meshPerAttribute);q.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ue=0;ue<Se.locationSize;ue++)I(Se.location+ue);n.bindBuffer(34962,te);for(let ue=0;ue<Se.locationSize;ue++)j(Se.location+ue,We/Se.locationSize,ye,ke,We*ce,We/Se.locationSize*ue*ce)}}else if(de!==void 0){const ke=de[Ee];if(ke!==void 0)switch(ke.length){case 2:n.vertexAttrib2fv(Se.location,ke);break;case 3:n.vertexAttrib3fv(Se.location,ke);break;case 4:n.vertexAttrib4fv(Se.location,ke);break;default:n.vertexAttrib1fv(Se.location,ke)}}}}B()}function U(){Fe();for(const q in c){const xe=c[q];for(const Q in xe){const ee=xe[Q];for(const Z in ee)y(ee[Z].object),delete ee[Z];delete xe[Q]}delete c[q]}}function X(q){if(c[q.id]===void 0)return;const xe=c[q.id];for(const Q in xe){const ee=xe[Q];for(const Z in ee)y(ee[Z].object),delete ee[Z];delete xe[Q]}delete c[q.id]}function Y(q){for(const xe in c){const Q=c[xe];if(Q[q.id]===void 0)continue;const ee=Q[q.id];for(const Z in ee)y(ee[Z].object),delete ee[Z];delete Q[q.id]}}function Fe(){Ae(),d=!0,h!==u&&(h=u,_(h.object))}function Ae(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:Fe,resetDefaultState:Ae,dispose:U,releaseStatesOfGeometry:X,releaseStatesOfProgram:Y,initAttributes:F,enableAttribute:I,disableUnusedAttributes:B}}function UR(n,e,t,i){const r=i.isWebGL2;let o;function l(h){o=h}function c(h,d){n.drawArrays(o,h,d),t.update(d,o,1)}function u(h,d,p){if(p===0)return;let m,_;if(r)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](o,h,d,p),t.update(d,o,p)}this.setMode=l,this.render=c,this.renderInstances=u}function VR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(j){if(j==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";j="mediump"}return j==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let c=t.precision!==void 0?t.precision:"highp";const u=o(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=n.getParameter(34930),m=n.getParameter(35660),_=n.getParameter(3379),y=n.getParameter(34076),x=n.getParameter(34921),v=n.getParameter(36347),w=n.getParameter(36348),T=n.getParameter(36349),F=m>0,I=l||e.has("OES_texture_float"),P=F&&I,B=l?n.getParameter(36183):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:F,floatFragmentTextures:I,floatVertexTextures:P,maxSamples:B}}function kR(n){const e=this;let t=null,i=0,r=!1,o=!1;const l=new Ms,c=new Xi,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m,_){const y=p.length!==0||m||i!==0||r;return r=m,t=d(p,_,0),i=p.length,y},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1,h()},this.setState=function(p,m,_){const y=p.clippingPlanes,x=p.clipIntersection,v=p.clipShadows,w=n.get(p);if(!r||y===null||y.length===0||o&&!v)o?d(null):h();else{const T=o?0:i,F=T*4;let I=w.clippingState||null;u.value=I,I=d(y,m,F,_);for(let P=0;P!==F;++P)I[P]=t[P];w.clippingState=I,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,m,_,y){const x=p!==null?p.length:0;let v=null;if(x!==0){if(v=u.value,y!==!0||v===null){const w=_+x*4,T=m.matrixWorldInverse;c.getNormalMatrix(T),(v===null||v.length<w)&&(v=new Float32Array(w));for(let F=0,I=_;F!==x;++F,I+=4)l.copy(p[F]).applyMatrix4(T,c),l.normal.toArray(v,I),v[I+3]=l.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function HR(n){let e=new WeakMap;function t(l,c){return c===Yh?l.mapping=Ho:c===Kh&&(l.mapping=Go),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const c=l.mapping;if(c===Yh||c===Kh)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new rL(u.height/2);return h.fromEquirectangularTexture(n,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class GR extends _x{constructor(e=-1,t=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=4,r_=[.125,.215,.35,.446,.526,.582],Cs=20,bh=new GR,s_=new tt;let wh=null;const Es=(1+Math.sqrt(5))/2,So=1/Es,o_=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Es,So),new H(0,Es,-So),new H(So,0,Es),new H(-So,0,Es),new H(Es,So,0),new H(-Es,So,0)];class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wh=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wh),e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ho||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Xa,format:Pi,encoding:ks,depthBuffer:!1},r=l_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WR(o)),this._blurMaterial=$R(o,e,t)}return r}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,bh)}_sceneToCubeUV(e,t,i,r){const c=new Bn(90,1,t,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(s_),d.toneMapping=br,d.autoClear=!1;const _=new gu({name:"PMREM.Background",side:Di,depthWrite:!1,depthTest:!1}),y=new Yn(new as,_);let x=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,x=!0):(_.color.copy(s_),x=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(c.up.set(0,u[w],0),c.lookAt(h[w],0,0)):T===1?(c.up.set(0,0,u[w]),c.lookAt(0,h[w],0)):(c.up.set(0,u[w],0),c.lookAt(0,0,h[w]));const F=this._cubeSize;Sc(r,T*F,w>2?F:0,F,F),d.setRenderTarget(r),x&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ho||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Yn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const u=this._cubeSize;Sc(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(l,bh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=o_[(r-1)%o_.length];this._blur(e,r-1,r,o,l)}t.autoClear=i}_blur(e,t,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Yn(this._lodPlanes[r],h),m=h.uniforms,_=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*Cs-1),x=o/y,v=isFinite(o)?1+Math.floor(d*x):Cs;v>Cs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Cs}`);const w=[];let T=0;for(let j=0;j<Cs;++j){const C=j/x,U=Math.exp(-C*C/2);w.push(U),j===0?T+=U:j<v&&(T+=2*U)}for(let j=0;j<w.length;j++)w[j]=w[j]/T;m.envMap.value=e.texture,m.samples.value=v,m.weights.value=w,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:F}=this;m.dTheta.value=y,m.mipInt.value=F-i;const I=this._sizeLods[r],P=3*I*(r>F-Co?r-F+Co:0),B=4*(this._cubeSize-I);Sc(t,P,B,3*I,2*I),u.setRenderTarget(t),u.render(p,bh)}}function WR(n){const e=[],t=[],i=[];let r=n;const o=n-Co+1+r_.length;for(let l=0;l<o;l++){const c=Math.pow(2,r);t.push(c);let u=1/c;l>n-Co?u=r_[l-n+Co-1]:l===0&&(u=0),i.push(u);const h=1/(c-2),d=-h,p=1+h,m=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,y=6,x=3,v=2,w=1,T=new Float32Array(x*y*_),F=new Float32Array(v*y*_),I=new Float32Array(w*y*_);for(let B=0;B<_;B++){const j=B%3*2/3-1,C=B>2?0:-1,U=[j,C,0,j+2/3,C,0,j+2/3,C+1,0,j,C,0,j+2/3,C+1,0,j,C+1,0];T.set(U,x*y*B),F.set(m,v*y*B);const X=[B,B,B,B,B,B];I.set(X,w*y*B)}const P=new Kn;P.setAttribute("position",new Yi(T,x)),P.setAttribute("uv",new Yi(F,v)),P.setAttribute("faceIndex",new Yi(I,w)),e.push(P),r>Co&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function l_(n,e,t){const i=new ns(n,e,t);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $R(n,e,t){const i=new Float32Array(Cs),r=new H(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function c_(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function u_(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function jR(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const u=c.mapping,h=u===Yh||u===Kh,d=u===Ho||u===Go;if(h||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new a_(n)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(h&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new a_(n));const m=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,m),c.addEventListener("dispose",o),m.texture}else return null}}}return c}function r(c){let u=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&u++;return u===h}function o(c){const u=c.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function qR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XR(n,e,t,i){const r={},o=new WeakMap;function l(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",l),delete r[m.id];const _=o.get(m);_&&(e.remove(_),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],34962);const _=p.morphAttributes;for(const y in _){const x=_[y];for(let v=0,w=x.length;v<w;v++)e.update(x[v],34962)}}function h(p){const m=[],_=p.index,y=p.attributes.position;let x=0;if(_!==null){const T=_.array;x=_.version;for(let F=0,I=T.length;F<I;F+=3){const P=T[F+0],B=T[F+1],j=T[F+2];m.push(P,B,B,j,j,P)}}else{const T=y.array;x=y.version;for(let F=0,I=T.length/3-1;F<I;F+=3){const P=F+0,B=F+1,j=F+2;m.push(P,B,B,j,j,P)}}const v=new(ux(m)?gx:mx)(m,1);v.version=x;const w=o.get(p);w&&e.remove(w),o.set(p,v)}function d(p){const m=o.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&h(p)}else h(p);return o.get(p)}return{get:c,update:u,getWireframeAttribute:d}}function YR(n,e,t,i){const r=i.isWebGL2;let o;function l(m){o=m}let c,u;function h(m){c=m.type,u=m.bytesPerElement}function d(m,_){n.drawElements(o,_,c,m*u),t.update(_,o,1)}function p(m,_,y){if(y===0)return;let x,v;if(r)x=n,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](o,_,c,m*u,y),t.update(_,o,y)}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=p}function KR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,c){switch(t.calls++,l){case 4:t.triangles+=c*(o/3);break;case 1:t.lines+=c*(o/2);break;case 3:t.lines+=c*(o-1);break;case 2:t.lines+=c*o;break;case 0:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ZR(n,e){return n[0]-e[0]}function JR(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sh(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function QR(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,l=new gn,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function u(h,d,p,m){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let w=o.get(d);if(w===void 0||w.count!==v){let Q=function(){q.dispose(),o.delete(d),d.removeEventListener("dispose",Q)};var y=Q;w!==void 0&&w.texture.dispose();const I=d.morphAttributes.position!==void 0,P=d.morphAttributes.normal!==void 0,B=d.morphAttributes.color!==void 0,j=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let X=0;I===!0&&(X=1),P===!0&&(X=2),B===!0&&(X=3);let Y=d.attributes.position.count*X,Fe=1;Y>e.maxTextureSize&&(Fe=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const Ae=new Float32Array(Y*Fe*4*v),q=new px(Ae,Y,Fe,v);q.type=Is,q.needsUpdate=!0;const xe=X*4;for(let ee=0;ee<v;ee++){const Z=j[ee],se=C[ee],de=U[ee],Ee=Y*Fe*4*ee;for(let Se=0;Se<Z.count;Se++){const Pe=Se*xe;I===!0&&(l.fromBufferAttribute(Z,Se),Z.normalized===!0&&Sh(l,Z),Ae[Ee+Pe+0]=l.x,Ae[Ee+Pe+1]=l.y,Ae[Ee+Pe+2]=l.z,Ae[Ee+Pe+3]=0),P===!0&&(l.fromBufferAttribute(se,Se),se.normalized===!0&&Sh(l,se),Ae[Ee+Pe+4]=l.x,Ae[Ee+Pe+5]=l.y,Ae[Ee+Pe+6]=l.z,Ae[Ee+Pe+7]=0),B===!0&&(l.fromBufferAttribute(de,Se),de.normalized===!0&&Sh(l,de),Ae[Ee+Pe+8]=l.x,Ae[Ee+Pe+9]=l.y,Ae[Ee+Pe+10]=l.z,Ae[Ee+Pe+11]=de.itemSize===4?l.w:1)}}w={count:v,texture:q,size:new Je(Y,Fe)},o.set(d,w),d.addEventListener("dispose",Q)}let T=0;for(let I=0;I<_.length;I++)T+=_[I];const F=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(n,"morphTargetBaseInfluence",F),m.getUniforms().setValue(n,"morphTargetInfluences",_),m.getUniforms().setValue(n,"morphTargetsTexture",w.texture,t),m.getUniforms().setValue(n,"morphTargetsTextureSize",w.size)}else{const x=_===void 0?0:_.length;let v=i[d.id];if(v===void 0||v.length!==x){v=[];for(let P=0;P<x;P++)v[P]=[P,0];i[d.id]=v}for(let P=0;P<x;P++){const B=v[P];B[0]=P,B[1]=_[P]}v.sort(JR);for(let P=0;P<8;P++)P<x&&v[P][1]?(c[P][0]=v[P][0],c[P][1]=v[P][1]):(c[P][0]=Number.MAX_SAFE_INTEGER,c[P][1]=0);c.sort(ZR);const w=d.morphAttributes.position,T=d.morphAttributes.normal;let F=0;for(let P=0;P<8;P++){const B=c[P],j=B[0],C=B[1];j!==Number.MAX_SAFE_INTEGER&&C?(w&&d.getAttribute("morphTarget"+P)!==w[j]&&d.setAttribute("morphTarget"+P,w[j]),T&&d.getAttribute("morphNormal"+P)!==T[j]&&d.setAttribute("morphNormal"+P,T[j]),r[P]=C,F+=C):(w&&d.hasAttribute("morphTarget"+P)===!0&&d.deleteAttribute("morphTarget"+P),T&&d.hasAttribute("morphNormal"+P)===!0&&d.deleteAttribute("morphNormal"+P),r[P]=0)}const I=d.morphTargetsRelative?1:1-F;m.getUniforms().setValue(n,"morphTargetBaseInfluence",I),m.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:u}}function eI(n,e,t,i){let r=new WeakMap;function o(u){const h=i.render.frame,d=u.geometry,p=e.get(u,d);return r.get(p)!==h&&(e.update(p),r.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),p}function l(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const yx=new Fi,bx=new px,wx=new G2,Sx=new vx,f_=[],h_=[],d_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function Jo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=f_[r];if(o===void 0&&(o=new Float32Array(r),f_[r]=o),e!==0){i.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,n[l].toArray(o,c)}return o}function Pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vu(n,e){let t=h_[e];t===void 0&&(t=new Int32Array(e),h_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;n.uniform2fv(this.addr,e),Rn(t,e)}}function iI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;n.uniform3fv(this.addr,e),Rn(t,e)}}function rI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;n.uniform4fv(this.addr,e),Rn(t,e)}}function sI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(Pn(t,i))return;m_.set(i),n.uniformMatrix2fv(this.addr,!1,m_),Rn(t,i)}}function oI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(Pn(t,i))return;p_.set(i),n.uniformMatrix3fv(this.addr,!1,p_),Rn(t,i)}}function aI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(Pn(t,i))return;d_.set(i),n.uniformMatrix4fv(this.addr,!1,d_),Rn(t,i)}}function lI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cI(n,e){const t=this.cache;Pn(t,e)||(n.uniform2iv(this.addr,e),Rn(t,e))}function uI(n,e){const t=this.cache;Pn(t,e)||(n.uniform3iv(this.addr,e),Rn(t,e))}function fI(n,e){const t=this.cache;Pn(t,e)||(n.uniform4iv(this.addr,e),Rn(t,e))}function hI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dI(n,e){const t=this.cache;Pn(t,e)||(n.uniform2uiv(this.addr,e),Rn(t,e))}function pI(n,e){const t=this.cache;Pn(t,e)||(n.uniform3uiv(this.addr,e),Rn(t,e))}function mI(n,e){const t=this.cache;Pn(t,e)||(n.uniform4uiv(this.addr,e),Rn(t,e))}function gI(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||yx,r)}function _I(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wx,r)}function vI(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sx,r)}function xI(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bx,r)}function yI(n){switch(n){case 5126:return tI;case 35664:return nI;case 35665:return iI;case 35666:return rI;case 35674:return sI;case 35675:return oI;case 35676:return aI;case 5124:case 35670:return lI;case 35667:case 35671:return cI;case 35668:case 35672:return uI;case 35669:case 35673:return fI;case 5125:return hI;case 36294:return dI;case 36295:return pI;case 36296:return mI;case 35678:case 36198:case 36298:case 36306:case 35682:return gI;case 35679:case 36299:case 36307:return _I;case 35680:case 36300:case 36308:case 36293:return vI;case 36289:case 36303:case 36311:case 36292:return xI}}function bI(n,e){n.uniform1fv(this.addr,e)}function wI(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function SI(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function MI(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function EI(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TI(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AI(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CI(n,e){n.uniform1iv(this.addr,e)}function LI(n,e){n.uniform2iv(this.addr,e)}function PI(n,e){n.uniform3iv(this.addr,e)}function RI(n,e){n.uniform4iv(this.addr,e)}function II(n,e){n.uniform1uiv(this.addr,e)}function DI(n,e){n.uniform2uiv(this.addr,e)}function OI(n,e){n.uniform3uiv(this.addr,e)}function FI(n,e){n.uniform4uiv(this.addr,e)}function NI(n,e,t){const i=e.length,r=vu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||yx,r[o])}function zI(n,e,t){const i=e.length,r=vu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wx,r[o])}function BI(n,e,t){const i=e.length,r=vu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Sx,r[o])}function UI(n,e,t){const i=e.length,r=vu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bx,r[o])}function VI(n){switch(n){case 5126:return bI;case 35664:return wI;case 35665:return SI;case 35666:return MI;case 35674:return EI;case 35675:return TI;case 35676:return AI;case 5124:case 35670:return CI;case 35667:case 35671:return LI;case 35668:case 35672:return PI;case 35669:case 35673:return RI;case 5125:return II;case 36294:return DI;case 36295:return OI;case 36296:return FI;case 35678:case 36198:case 36298:case 36306:case 35682:return NI;case 35679:case 36299:case 36307:return zI;case 35680:case 36300:case 36308:case 36293:return BI;case 36289:case 36303:case 36311:case 36292:return UI}}class kI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=yI(t.type)}}class HI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=VI(t.type)}}class GI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const c=r[o];c.setValue(e,t[c.id],i)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function g_(n,e){n.seq.push(e),n.map[e.id]=e}function WI(n,e,t){const i=n.name,r=i.length;for(Mh.lastIndex=0;;){const o=Mh.exec(i),l=Mh.lastIndex;let c=o[1];const u=o[2]==="]",h=o[3];if(u&&(c=c|0),h===void 0||h==="["&&l+2===r){g_(t,h===void 0?new kI(c,n,e):new HI(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new GI(c),g_(t,p)),t=p}}}class zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);WI(o,l,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,l=t.length;o!==l;++o){const c=t[o],u=i[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function __(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let $I=0;function jI(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const c=l+1;i.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return i.join(`
`)}function qI(n){switch(n){case ks:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function v_(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jI(n.getShaderSource(e),l)}else return r}function XI(n,e){const t=qI(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function YI(n,e){let t;switch(e){case g2:t="Linear";break;case _2:t="Reinhard";break;case v2:t="OptimizedCineon";break;case x2:t="ACESFilmic";break;case y2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KI(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Aa).join(`
`)}function ZI(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JI(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),l=o.name;let c=1;o.type===35674&&(c=2),o.type===35675&&(c=3),o.type===35676&&(c=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:c}}return t}function Aa(n){return n!==""}function x_(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QI=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(n){return n.replace(QI,eD)}function eD(n,e){const t=pt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return nd(t)}const tD=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,nD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(n){return n.replace(nD,Mx).replace(tD,iD)}function iD(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Mx(n,e,t,i)}function Mx(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function w_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ta&&(e="SHADOWMAP_TYPE_VSM"),e}function sD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ho:case Go:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function aD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hu:e="ENVMAP_BLENDING_MULTIPLY";break;case p2:e="ENVMAP_BLENDING_MIX";break;case m2:e="ENVMAP_BLENDING_ADD";break}return e}function lD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cD(n,e,t,i){const r=n.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=rD(t),h=sD(t),d=oD(t),p=aD(t),m=lD(t),_=t.isWebGL2?"":KI(t),y=ZI(o),x=r.createProgram();let v,w,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[y].filter(Aa).join(`
`),v.length>0&&(v+=`
`),w=[_,y].filter(Aa).join(`
`),w.length>0&&(w+=`
`)):(v=[w_(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),w=[_,w_(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?pt.tonemapping_pars_fragment:"",t.toneMapping!==br?YI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.encodings_pars_fragment,XI("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),l=nd(l),l=x_(l,t),l=y_(l,t),c=nd(c),c=x_(c,t),c=y_(c,t),l=b_(l),c=b_(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,w=["#define varying in",t.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const F=T+v+l,I=T+w+c,P=__(r,35633,F),B=__(r,35632,I);if(r.attachShader(x,P),r.attachShader(x,B),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),X=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(B).trim();let Fe=!0,Ae=!0;if(r.getProgramParameter(x,35714)===!1){Fe=!1;const q=v_(r,P,"vertex"),xe=v_(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,35715)+`

Program Info Log: `+U+`
`+q+`
`+xe)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(X===""||Y==="")&&(Ae=!1);Ae&&(this.diagnostics={runnable:Fe,programLog:U,vertexShader:{log:X,prefix:v},fragmentShader:{log:Y,prefix:w}})}r.deleteShader(P),r.deleteShader(B);let j;this.getUniforms=function(){return j===void 0&&(j=new zc(r,x)),j};let C;return this.getAttributes=function(){return C===void 0&&(C=JI(r,x)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=$I++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=B,this}let uD=0;class fD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new hD(e);t.set(e,i)}return t.get(e)}}class hD{constructor(e){this.id=uD++,this.code=e,this.usedTimes=0}}function dD(n,e,t,i,r,o,l){const c=new kd,u=new fD,h=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(C,U,X,Y,Fe){const Ae=Y.fog,q=Fe.geometry,xe=C.isMeshStandardMaterial?Y.environment:null,Q=(C.isMeshStandardMaterial?t:e).get(C.envMap||xe),ee=Q&&Q.mapping===du?Q.image.height:null,Z=y[C.type];C.precision!==null&&(_=r.getMaxPrecision(C.precision),_!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));const se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,de=se!==void 0?se.length:0;let Ee=0;q.morphAttributes.position!==void 0&&(Ee=1),q.morphAttributes.normal!==void 0&&(Ee=2),q.morphAttributes.color!==void 0&&(Ee=3);let Se,Pe,ke,We;if(Z){const He=Wi[Z];Se=He.vertexShader,Pe=He.fragmentShader}else Se=C.vertexShader,Pe=C.fragmentShader,u.update(C),ke=u.getVertexShaderID(C),We=u.getFragmentShaderID(C);const oe=n.getRenderTarget(),te=C.alphaTest>0,ye=C.clearcoat>0,ce=C.iridescence>0;return{isWebGL2:d,shaderID:Z,shaderName:C.type,vertexShader:Se,fragmentShader:Pe,defines:C.defines,customVertexShaderID:ke,customFragmentShaderID:We,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,instancing:Fe.isInstancedMesh===!0,instancingColor:Fe.isInstancedMesh===!0&&Fe.instanceColor!==null,supportsVertexTextures:m,outputEncoding:oe===null?n.outputEncoding:oe.isXRRenderTarget===!0?oe.texture.encoding:ks,map:!!C.map,matcap:!!C.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:ee,lightMap:!!C.lightMap,aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===U2,tangentSpaceNormalMap:C.normalMapType===Ko,decodeVideoTexture:!!C.map&&C.map.isVideoTexture===!0&&C.map.encoding===Ht,clearcoat:ye,clearcoatMap:ye&&!!C.clearcoatMap,clearcoatRoughnessMap:ye&&!!C.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!C.clearcoatNormalMap,iridescence:ce,iridescenceMap:ce&&!!C.iridescenceMap,iridescenceThicknessMap:ce&&!!C.iridescenceThicknessMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,specularIntensityMap:!!C.specularIntensityMap,specularColorMap:!!C.specularColorMap,opaque:C.transparent===!1&&C.blending===Fo,alphaMap:!!C.alphaMap,alphaTest:te,gradientMap:!!C.gradientMap,sheen:C.sheen>0,sheenColorMap:!!C.sheenColorMap,sheenRoughnessMap:!!C.sheenRoughnessMap,transmission:C.transmission>0,transmissionMap:!!C.transmissionMap,thicknessMap:!!C.thicknessMap,combine:C.combine,vertexTangents:!!C.normalMap&&!!q.attributes.tangent,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.iridescenceMap||!!C.iridescenceThicknessMap||!!C.displacementMap||!!C.transmissionMap||!!C.thicknessMap||!!C.specularIntensityMap||!!C.specularColorMap||!!C.sheenColorMap||!!C.sheenRoughnessMap,uvsVertexOnly:!(C.map||C.bumpMap||C.normalMap||C.specularMap||C.alphaMap||C.emissiveMap||C.roughnessMap||C.metalnessMap||C.clearcoatNormalMap||C.iridescenceMap||C.iridescenceThicknessMap||C.transmission>0||C.transmissionMap||C.thicknessMap||C.specularIntensityMap||C.specularColorMap||C.sheen>0||C.sheenColorMap||C.sheenRoughnessMap)&&!!C.displacementMap,fog:!!Ae,useFog:C.fog===!0,fogExp2:Ae&&Ae.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:p,skinning:Fe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:C.toneMapped?n.toneMapping:br,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===os,flipSided:C.side===Di,useDepthPacking:!!C.depthPacking,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)U.push(X),U.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(w(U,C),T(U,C),U.push(n.outputEncoding)),U.push(C.customProgramCacheKey),U.join()}function w(C,U){C.push(U.precision),C.push(U.outputEncoding),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.combine),C.push(U.vertexUvs),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function T(C,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.map&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.lightMap&&c.enable(7),U.aoMap&&c.enable(8),U.emissiveMap&&c.enable(9),U.bumpMap&&c.enable(10),U.normalMap&&c.enable(11),U.objectSpaceNormalMap&&c.enable(12),U.tangentSpaceNormalMap&&c.enable(13),U.clearcoat&&c.enable(14),U.clearcoatMap&&c.enable(15),U.clearcoatRoughnessMap&&c.enable(16),U.clearcoatNormalMap&&c.enable(17),U.iridescence&&c.enable(18),U.iridescenceMap&&c.enable(19),U.iridescenceThicknessMap&&c.enable(20),U.displacementMap&&c.enable(21),U.specularMap&&c.enable(22),U.roughnessMap&&c.enable(23),U.metalnessMap&&c.enable(24),U.gradientMap&&c.enable(25),U.alphaMap&&c.enable(26),U.alphaTest&&c.enable(27),U.vertexColors&&c.enable(28),U.vertexAlphas&&c.enable(29),U.vertexUvs&&c.enable(30),U.vertexTangents&&c.enable(31),U.uvsVertexOnly&&c.enable(32),U.fog&&c.enable(33),C.push(c.mask),c.disableAll(),U.useFog&&c.enable(0),U.flatShading&&c.enable(1),U.logarithmicDepthBuffer&&c.enable(2),U.skinning&&c.enable(3),U.morphTargets&&c.enable(4),U.morphNormals&&c.enable(5),U.morphColors&&c.enable(6),U.premultipliedAlpha&&c.enable(7),U.shadowMapEnabled&&c.enable(8),U.physicallyCorrectLights&&c.enable(9),U.doubleSided&&c.enable(10),U.flipSided&&c.enable(11),U.useDepthPacking&&c.enable(12),U.dithering&&c.enable(13),U.specularIntensityMap&&c.enable(14),U.specularColorMap&&c.enable(15),U.transmission&&c.enable(16),U.transmissionMap&&c.enable(17),U.thicknessMap&&c.enable(18),U.sheen&&c.enable(19),U.sheenColorMap&&c.enable(20),U.sheenRoughnessMap&&c.enable(21),U.decodeVideoTexture&&c.enable(22),U.opaque&&c.enable(23),C.push(c.mask)}function F(C){const U=y[C.type];let X;if(U){const Y=Wi[U];X=eL.clone(Y.uniforms)}else X=C.uniforms;return X}function I(C,U){let X;for(let Y=0,Fe=h.length;Y<Fe;Y++){const Ae=h[Y];if(Ae.cacheKey===U){X=Ae,++X.usedTimes;break}}return X===void 0&&(X=new cD(n,U,C,o),h.push(X)),X}function P(C){if(--C.usedTimes===0){const U=h.indexOf(C);h[U]=h[h.length-1],h.pop(),C.destroy()}}function B(C){u.remove(C)}function j(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:F,acquireProgram:I,releaseProgram:P,releaseShaderCache:B,programs:h,dispose:j}}function pD(){let n=new WeakMap;function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function t(o){n.delete(o)}function i(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function mD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function S_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M_(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function l(p,m,_,y,x,v){let w=n[e];return w===void 0?(w={id:p.id,object:p,geometry:m,material:_,groupOrder:y,renderOrder:p.renderOrder,z:x,group:v},n[e]=w):(w.id=p.id,w.object=p,w.geometry=m,w.material=_,w.groupOrder=y,w.renderOrder=p.renderOrder,w.z=x,w.group=v),e++,w}function c(p,m,_,y,x,v){const w=l(p,m,_,y,x,v);_.transmission>0?i.push(w):_.transparent===!0?r.push(w):t.push(w)}function u(p,m,_,y,x,v){const w=l(p,m,_,y,x,v);_.transmission>0?i.unshift(w):_.transparent===!0?r.unshift(w):t.unshift(w)}function h(p,m){t.length>1&&t.sort(p||mD),i.length>1&&i.sort(m||S_),r.length>1&&r.sort(m||S_)}function d(){for(let p=e,m=n.length;p<m;p++){const _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:u,finish:d,sort:h}}function gD(){let n=new WeakMap;function e(i,r){let o;return n.has(i)===!1?(o=new M_,n.set(i,[o])):r>=n.get(i).length?(o=new M_,n.get(i).push(o)):o=n.get(i)[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _D(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new tt};break;case"SpotLight":t={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function vD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xD=0;function yD(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function bD(n,e){const t=new _D,i=vD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new H);const o=new H,l=new Zt,c=new Zt;function u(d,p){let m=0,_=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,v=0,w=0,T=0,F=0,I=0,P=0,B=0;d.sort(yD);const j=p!==!0?Math.PI:1;for(let U=0,X=d.length;U<X;U++){const Y=d[U],Fe=Y.color,Ae=Y.intensity,q=Y.distance,xe=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)m+=Fe.r*Ae*j,_+=Fe.g*Ae*j,y+=Fe.b*Ae*j;else if(Y.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(Y.sh.coefficients[Q],Ae);else if(Y.isDirectionalLight){const Q=t.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity*j),Y.castShadow){const ee=Y.shadow,Z=i.get(Y);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=xe,r.directionalShadowMatrix[x]=Y.shadow.matrix,I++}r.directional[x]=Q,x++}else if(Y.isSpotLight){const Q=t.get(Y);if(Q.position.setFromMatrixPosition(Y.matrixWorld),Q.color.copy(Fe).multiplyScalar(Ae*j),Q.distance=q,Q.coneCos=Math.cos(Y.angle),Q.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),Q.decay=Y.decay,Y.castShadow){const ee=Y.shadow,Z=i.get(Y);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=xe,r.spotShadowMatrix[w]=Y.shadow.matrix,B++}r.spot[w]=Q,w++}else if(Y.isRectAreaLight){const Q=t.get(Y);Q.color.copy(Fe).multiplyScalar(Ae),Q.halfWidth.set(Y.width*.5,0,0),Q.halfHeight.set(0,Y.height*.5,0),r.rectArea[T]=Q,T++}else if(Y.isPointLight){const Q=t.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity*j),Q.distance=Y.distance,Q.decay=Y.decay,Y.castShadow){const ee=Y.shadow,Z=i.get(Y);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,r.pointShadow[v]=Z,r.pointShadowMap[v]=xe,r.pointShadowMatrix[v]=Y.shadow.matrix,P++}r.point[v]=Q,v++}else if(Y.isHemisphereLight){const Q=t.get(Y);Q.skyColor.copy(Y.color).multiplyScalar(Ae*j),Q.groundColor.copy(Y.groundColor).multiplyScalar(Ae*j),r.hemi[F]=Q,F++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=y;const C=r.hash;(C.directionalLength!==x||C.pointLength!==v||C.spotLength!==w||C.rectAreaLength!==T||C.hemiLength!==F||C.numDirectionalShadows!==I||C.numPointShadows!==P||C.numSpotShadows!==B)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=T,r.point.length=v,r.hemi.length=F,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotShadowMatrix.length=B,C.directionalLength=x,C.pointLength=v,C.spotLength=w,C.rectAreaLength=T,C.hemiLength=F,C.numDirectionalShadows=I,C.numPointShadows=P,C.numSpotShadows=B,r.version=xD++)}function h(d,p){let m=0,_=0,y=0,x=0,v=0;const w=p.matrixWorldInverse;for(let T=0,F=d.length;T<F;T++){const I=d[T];if(I.isDirectionalLight){const P=r.directional[m];P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(w),m++}else if(I.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(w),P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(w),y++}else if(I.isRectAreaLight){const P=r.rectArea[x];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(w),c.identity(),l.copy(I.matrixWorld),l.premultiply(w),c.extractRotation(l),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),x++}else if(I.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(w),_++}else if(I.isHemisphereLight){const P=r.hemi[v];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(w),v++}}}return{setup:u,setupView:h,state:r}}function E_(n,e){const t=new bD(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(p){i.push(p)}function c(p){r.push(p)}function u(p){t.setup(i,p)}function h(p){t.setupView(i,p)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:u,setupLightsView:h,pushLight:l,pushShadow:c}}function wD(n,e){let t=new WeakMap;function i(o,l=0){let c;return t.has(o)===!1?(c=new E_(n,e),t.set(o,[c])):l>=t.get(o).length?(c=new E_(n,e),t.get(o).push(c)):c=t.get(o)[l],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ex extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MD=`uniform sampler2D shadow_pass;
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
}`;function ED(n,e,t){let i=new Hd;const r=new Je,o=new Je,l=new gn,c=new Ex({depthPacking:B2}),u=new Tx,h={},d=t.maxTextureSize,p={0:Di,1:qa,2:os},m=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:SD,fragmentShader:MD}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const y=new Kn;y.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(y,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx,this.render=function(I,P,B){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const j=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),X=n.state;X.setBlending(ts),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let Y=0,Fe=I.length;Y<Fe;Y++){const Ae=I[Y],q=Ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const xe=q.getFrameExtents();if(r.multiply(xe),o.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/xe.x),r.x=o.x*xe.x,q.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/xe.y),r.y=o.y*xe.y,q.mapSize.y=o.y)),q.map===null&&!q.isPointLightShadow&&this.type===Ta&&(q.map=new ns(r.x,r.y),q.map.texture.name=Ae.name+".shadowMap",q.mapPass=new ns(r.x,r.y),q.camera.updateProjectionMatrix()),q.map===null){const ee={minFilter:zn,magFilter:zn,format:Pi};q.map=new ns(r.x,r.y,ee),q.map.texture.name=Ae.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Q=q.getViewportCount();for(let ee=0;ee<Q;ee++){const Z=q.getViewport(ee);l.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),X.viewport(l),q.updateMatrices(Ae,ee),i=q.getFrustum(),F(P,B,q.camera,Ae,this.type)}!q.isPointLightShadow&&this.type===Ta&&w(q,B),q.needsUpdate=!1}v.needsUpdate=!1,n.setRenderTarget(j,C,U)};function w(I,P){const B=e.update(x);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,B,m,x,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,B,_,x,null)}function T(I,P,B,j,C,U){let X=null;const Y=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0?X=Y:X=B.isPointLight===!0?u:c,n.localClippingEnabled&&P.clipShadows===!0&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0){const Fe=X.uuid,Ae=P.uuid;let q=h[Fe];q===void 0&&(q={},h[Fe]=q);let xe=q[Ae];xe===void 0&&(xe=X.clone(),q[Ae]=xe),X=xe}return X.visible=P.visible,X.wireframe=P.wireframe,U===Ta?X.side=P.shadowSide!==null?P.shadowSide:P.side:X.side=P.shadowSide!==null?P.shadowSide:p[P.side],X.alphaMap=P.alphaMap,X.alphaTest=P.alphaTest,X.clipShadows=P.clipShadows,X.clippingPlanes=P.clippingPlanes,X.clipIntersection=P.clipIntersection,X.displacementMap=P.displacementMap,X.displacementScale=P.displacementScale,X.displacementBias=P.displacementBias,X.wireframeLinewidth=P.wireframeLinewidth,X.linewidth=P.linewidth,B.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(B.matrixWorld),X.nearDistance=j,X.farDistance=C),X}function F(I,P,B,j,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Ta)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),Fe=I.material;if(Array.isArray(Fe)){const Ae=Y.groups;for(let q=0,xe=Ae.length;q<xe;q++){const Q=Ae[q],ee=Fe[Q.materialIndex];if(ee&&ee.visible){const Z=T(I,ee,j,B.near,B.far,C);n.renderBufferDirect(B,null,Y,Z,I,Q)}}}else if(Fe.visible){const Ae=T(I,Fe,j,B.near,B.far,C);n.renderBufferDirect(B,null,Y,Ae,I,null)}}const X=I.children;for(let Y=0,Fe=X.length;Y<Fe;Y++)F(X[Y],P,B,j,C)}}function TD(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const Oe=new gn;let Ce=null;const $e=new gn(0,0,0,0);return{setMask:function(Be){Ce!==Be&&!z&&(n.colorMask(Be,Be,Be,Be),Ce=Be)},setLocked:function(Be){z=Be},setClear:function(Be,Xe,Ne,et,bt){bt===!0&&(Be*=et,Xe*=et,Ne*=et),Oe.set(Be,Xe,Ne,et),$e.equals(Oe)===!1&&(n.clearColor(Be,Xe,Ne,et),$e.copy(Oe))},reset:function(){z=!1,Ce=null,$e.set(-1,0,0,0)}}}function o(){let z=!1,Oe=null,Ce=null,$e=null;return{setTest:function(Be){Be?We(2929):oe(2929)},setMask:function(Be){Oe!==Be&&!z&&(n.depthMask(Be),Oe=Be)},setFunc:function(Be){if(Ce!==Be){if(Be)switch(Be){case a2:n.depthFunc(512);break;case l2:n.depthFunc(519);break;case c2:n.depthFunc(513);break;case Xh:n.depthFunc(515);break;case u2:n.depthFunc(514);break;case f2:n.depthFunc(518);break;case h2:n.depthFunc(516);break;case d2:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);Ce=Be}},setLocked:function(Be){z=Be},setClear:function(Be){$e!==Be&&(n.clearDepth(Be),$e=Be)},reset:function(){z=!1,Oe=null,Ce=null,$e=null}}}function l(){let z=!1,Oe=null,Ce=null,$e=null,Be=null,Xe=null,Ne=null,et=null,bt=null;return{setTest:function(wt){z||(wt?We(2960):oe(2960))},setMask:function(wt){Oe!==wt&&!z&&(n.stencilMask(wt),Oe=wt)},setFunc:function(wt,cn,Zn){(Ce!==wt||$e!==cn||Be!==Zn)&&(n.stencilFunc(wt,cn,Zn),Ce=wt,$e=cn,Be=Zn)},setOp:function(wt,cn,Zn){(Xe!==wt||Ne!==cn||et!==Zn)&&(n.stencilOp(wt,cn,Zn),Xe=wt,Ne=cn,et=Zn)},setLocked:function(wt){z=wt},setClear:function(wt){bt!==wt&&(n.clearStencil(wt),bt=wt)},reset:function(){z=!1,Oe=null,Ce=null,$e=null,Be=null,Xe=null,Ne=null,et=null,bt=null}}}const c=new r,u=new o,h=new l;let d={},p={},m=new WeakMap,_=[],y=null,x=!1,v=null,w=null,T=null,F=null,I=null,P=null,B=null,j=!1,C=null,U=null,X=null,Y=null,Fe=null;const Ae=n.getParameter(35661);let q=!1,xe=0;const Q=n.getParameter(7938);Q.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=xe>=1):Q.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=xe>=2);let ee=null,Z={};const se=n.getParameter(3088),de=n.getParameter(2978),Ee=new gn().fromArray(se),Se=new gn().fromArray(de);function Pe(z,Oe,Ce){const $e=new Uint8Array(4),Be=n.createTexture();n.bindTexture(z,Be),n.texParameteri(z,10241,9728),n.texParameteri(z,10240,9728);for(let Xe=0;Xe<Ce;Xe++)n.texImage2D(Oe+Xe,0,6408,1,1,0,6408,5121,$e);return Be}const ke={};ke[3553]=Pe(3553,3553,1),ke[34067]=Pe(34067,34069,6),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),We(2929),u.setFunc(Xh),k(!1),J(m0),We(2884),R(ts);function We(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function oe(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function te(z,Oe){return p[z]!==Oe?(n.bindFramebuffer(z,Oe),p[z]=Oe,i&&(z===36009&&(p[36160]=Oe),z===36160&&(p[36009]=Oe)),!0):!1}function ye(z,Oe){let Ce=_,$e=!1;if(z)if(Ce=m.get(Oe),Ce===void 0&&(Ce=[],m.set(Oe,Ce)),z.isWebGLMultipleRenderTargets){const Be=z.texture;if(Ce.length!==Be.length||Ce[0]!==36064){for(let Xe=0,Ne=Be.length;Xe<Ne;Xe++)Ce[Xe]=36064+Xe;Ce.length=Be.length,$e=!0}}else Ce[0]!==36064&&(Ce[0]=36064,$e=!0);else Ce[0]!==1029&&(Ce[0]=1029,$e=!0);$e&&(t.isWebGL2?n.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function ce(z){return y!==z?(n.useProgram(z),y=z,!0):!1}const ue={[Eo]:32774,[KC]:32778,[ZC]:32779};if(i)ue[x0]=32775,ue[y0]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(ue[x0]=z.MIN_EXT,ue[y0]=z.MAX_EXT)}const He={[JC]:0,[QC]:1,[e2]:768,[ox]:770,[o2]:776,[r2]:774,[n2]:772,[t2]:769,[ax]:771,[s2]:775,[i2]:773};function R(z,Oe,Ce,$e,Be,Xe,Ne,et){if(z===ts){x===!0&&(oe(3042),x=!1);return}if(x===!1&&(We(3042),x=!0),z!==YC){if(z!==v||et!==j){if((w!==Eo||I!==Eo)&&(n.blendEquation(32774),w=Eo,I=Eo),et)switch(z){case Fo:n.blendFuncSeparate(1,771,1,771);break;case g0:n.blendFunc(1,1);break;case _0:n.blendFuncSeparate(0,769,0,1);break;case v0:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fo:n.blendFuncSeparate(770,771,1,771);break;case g0:n.blendFunc(770,1);break;case _0:n.blendFuncSeparate(0,769,0,1);break;case v0:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,F=null,P=null,B=null,v=z,j=et}return}Be=Be||Oe,Xe=Xe||Ce,Ne=Ne||$e,(Oe!==w||Be!==I)&&(n.blendEquationSeparate(ue[Oe],ue[Be]),w=Oe,I=Be),(Ce!==T||$e!==F||Xe!==P||Ne!==B)&&(n.blendFuncSeparate(He[Ce],He[$e],He[Xe],He[Ne]),T=Ce,F=$e,P=Xe,B=Ne),v=z,j=null}function O(z,Oe){z.side===os?oe(2884):We(2884);let Ce=z.side===Di;Oe&&(Ce=!Ce),k(Ce),z.blending===Fo&&z.transparent===!1?R(ts):R(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),c.setMask(z.colorWrite);const $e=z.stencilWrite;h.setTest($e),$e&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),he(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?We(32926):oe(32926)}function k(z){C!==z&&(z?n.frontFace(2304):n.frontFace(2305),C=z)}function J(z){z!==$C?(We(2884),z!==U&&(z===m0?n.cullFace(1029):z===jC?n.cullFace(1028):n.cullFace(1032))):oe(2884),U=z}function le(z){z!==X&&(q&&n.lineWidth(z),X=z)}function he(z,Oe,Ce){z?(We(32823),(Y!==Oe||Fe!==Ce)&&(n.polygonOffset(Oe,Ce),Y=Oe,Fe=Ce)):oe(32823)}function Re(z){z?We(3089):oe(3089)}function _e(z){z===void 0&&(z=33984+Ae-1),ee!==z&&(n.activeTexture(z),ee=z)}function Le(z,Oe){ee===null&&_e();let Ce=Z[ee];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[ee]=Ce),(Ce.type!==z||Ce.texture!==Oe)&&(n.bindTexture(z,Oe||ke[z]),Ce.type=z,Ce.texture=Oe)}function me(){const z=Z[ee];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function A(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function S(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(z){Ee.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function Ie(z){Se.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Se.copy(z))}function De(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,Z={},p={},m=new WeakMap,_=[],y=null,x=!1,v=null,w=null,T=null,F=null,I=null,P=null,B=null,j=!1,C=null,U=null,X=null,Y=null,Fe=null,Ee.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:We,disable:oe,bindFramebuffer:te,drawBuffers:ye,useProgram:ce,setBlending:R,setMaterial:O,setFlipSided:k,setCullFace:J,setLineWidth:le,setPolygonOffset:he,setScissorTest:Re,activeTexture:_e,bindTexture:Le,unbindTexture:me,compressedTexImage2D:A,texImage2D:ze,texImage3D:L,texStorage2D:pe,texStorage3D:Me,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:ie,scissor:ge,viewport:Ie,reset:De}}function AD(n,e,t,i,r,o,l){const c=r.isWebGL2,u=r.maxTextures,h=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let x;const v=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(A,S){return w?new OffscreenCanvas(A,S):jc("canvas")}function F(A,S,W,ie){let pe=1;if((A.width>ie||A.height>ie)&&(pe=ie/Math.max(A.width,A.height)),pe<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Me=S?td:Math.floor,ze=Me(pe*A.width),L=Me(pe*A.height);x===void 0&&(x=T(ze,L));const ge=W?T(ze,L):x;return ge.width=ze,ge.height=L,ge.getContext("2d").drawImage(A,0,0,ze,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ze+"x"+L+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function I(A){return j0(A.width)&&j0(A.height)}function P(A){return c?!1:A.wrapS!==Ci||A.wrapT!==Ci||A.minFilter!==zn&&A.minFilter!==hi}function B(A,S){return A.generateMipmaps&&S&&A.minFilter!==zn&&A.minFilter!==hi}function j(A){n.generateMipmap(A)}function C(A,S,W,ie,pe=!1){if(c===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Me=S;return S===6403&&(W===5126&&(Me=33326),W===5131&&(Me=33325),W===5121&&(Me=33321)),S===33319&&(W===5126&&(Me=33328),W===5131&&(Me=33327),W===5121&&(Me=33323)),S===6408&&(W===5126&&(Me=34836),W===5131&&(Me=34842),W===5121&&(Me=ie===Ht&&pe===!1?35907:32856),W===32819&&(Me=32854),W===32820&&(Me=32855)),(Me===33325||Me===33326||Me===33327||Me===33328||Me===34842||Me===34836)&&e.get("EXT_color_buffer_float"),Me}function U(A,S,W){return B(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==zn&&A.minFilter!==hi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function X(A){return A===zn||A===b0||A===w0?9728:9729}function Y(A){const S=A.target;S.removeEventListener("dispose",Y),Ae(S),S.isVideoTexture&&y.delete(S)}function Fe(A){const S=A.target;S.removeEventListener("dispose",Fe),xe(S)}function Ae(A){const S=i.get(A);if(S.__webglInit===void 0)return;const W=A.source,ie=v.get(W);if(ie){const pe=ie[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&q(A),Object.keys(ie).length===0&&v.delete(W)}i.remove(A)}function q(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const W=A.source,ie=v.get(W);delete ie[S.__cacheKey],l.memory.textures--}function xe(A){const S=A.texture,W=i.get(A),ie=i.get(S);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),l.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)n.deleteFramebuffer(W.__webglFramebuffer[pe]),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[pe]);else{if(n.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let pe=0;pe<W.__webglColorRenderbuffer.length;pe++)W.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[pe]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let pe=0,Me=S.length;pe<Me;pe++){const ze=i.get(S[pe]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),l.memory.textures--),i.remove(S[pe])}i.remove(S),i.remove(A)}let Q=0;function ee(){Q=0}function Z(){const A=Q;return A>=u&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+u),Q+=1,A}function se(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function de(A,S){const W=i.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(W,A,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,W.__webglTexture)}function Ee(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ye(W,A,S);return}t.activeTexture(33984+S),t.bindTexture(35866,W.__webglTexture)}function Se(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ye(W,A,S);return}t.activeTexture(33984+S),t.bindTexture(32879,W.__webglTexture)}function Pe(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ce(W,A,S);return}t.activeTexture(33984+S),t.bindTexture(34067,W.__webglTexture)}const ke={[Zh]:10497,[Ci]:33071,[Jh]:33648},We={[zn]:9728,[b0]:9984,[w0]:9986,[hi]:9729,[b2]:9985,[pu]:9987};function oe(A,S,W){if(W?(n.texParameteri(A,10242,ke[S.wrapS]),n.texParameteri(A,10243,ke[S.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,ke[S.wrapR]),n.texParameteri(A,10240,We[S.magFilter]),n.texParameteri(A,10241,We[S.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(S.wrapS!==Ci||S.wrapT!==Ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,X(S.magFilter)),n.texParameteri(A,10241,X(S.minFilter)),S.minFilter!==zn&&S.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.type===Is&&e.has("OES_texture_float_linear")===!1||c===!1&&S.type===Xa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function te(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",Y));const ie=S.source;let pe=v.get(ie);pe===void 0&&(pe={},v.set(ie,pe));const Me=se(S);if(Me!==A.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,W=!0),pe[Me].usedTimes++;const ze=pe[A.__cacheKey];ze!==void 0&&(pe[A.__cacheKey].usedTimes--,ze.usedTimes===0&&q(S)),A.__cacheKey=Me,A.__webglTexture=pe[Me].texture}return W}function ye(A,S,W){let ie=3553;S.isDataArrayTexture&&(ie=35866),S.isData3DTexture&&(ie=32879);const pe=te(A,S),Me=S.source;if(t.activeTexture(33984+W),t.bindTexture(ie,A.__webglTexture),Me.version!==Me.__currentVersion||pe===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const ze=P(S)&&I(S.image)===!1;let L=F(S.image,ze,!1,d);L=me(S,L);const ge=I(L)||c,Ie=o.convert(S.format,S.encoding);let De=o.convert(S.type),z=C(S.internalFormat,Ie,De,S.encoding,S.isVideoTexture);oe(ie,S,ge);let Oe;const Ce=S.mipmaps,$e=c&&S.isVideoTexture!==!0,Be=Me.__currentVersion===void 0||pe===!0,Xe=U(S,L,ge);if(S.isDepthTexture)z=6402,c?S.type===Is?z=36012:S.type===Rs?z=33190:S.type===No?z=35056:z=33189:S.type===Is&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ns&&z===6402&&S.type!==cx&&S.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Rs,De=o.convert(S.type)),S.format===Wo&&z===6402&&(z=34041,S.type!==No&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=No,De=o.convert(S.type))),Be&&($e?t.texStorage2D(3553,1,z,L.width,L.height):t.texImage2D(3553,0,z,L.width,L.height,0,Ie,De,null));else if(S.isDataTexture)if(Ce.length>0&&ge){$e&&Be&&t.texStorage2D(3553,Xe,z,Ce[0].width,Ce[0].height);for(let Ne=0,et=Ce.length;Ne<et;Ne++)Oe=Ce[Ne],$e?t.texSubImage2D(3553,Ne,0,0,Oe.width,Oe.height,Ie,De,Oe.data):t.texImage2D(3553,Ne,z,Oe.width,Oe.height,0,Ie,De,Oe.data);S.generateMipmaps=!1}else $e?(Be&&t.texStorage2D(3553,Xe,z,L.width,L.height),t.texSubImage2D(3553,0,0,0,L.width,L.height,Ie,De,L.data)):t.texImage2D(3553,0,z,L.width,L.height,0,Ie,De,L.data);else if(S.isCompressedTexture){$e&&Be&&t.texStorage2D(3553,Xe,z,Ce[0].width,Ce[0].height);for(let Ne=0,et=Ce.length;Ne<et;Ne++)Oe=Ce[Ne],S.format!==Pi?Ie!==null?$e?t.compressedTexSubImage2D(3553,Ne,0,0,Oe.width,Oe.height,Ie,Oe.data):t.compressedTexImage2D(3553,Ne,z,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,Ne,0,0,Oe.width,Oe.height,Ie,De,Oe.data):t.texImage2D(3553,Ne,z,Oe.width,Oe.height,0,Ie,De,Oe.data)}else if(S.isDataArrayTexture)$e?(Be&&t.texStorage3D(35866,Xe,z,L.width,L.height,L.depth),t.texSubImage3D(35866,0,0,0,0,L.width,L.height,L.depth,Ie,De,L.data)):t.texImage3D(35866,0,z,L.width,L.height,L.depth,0,Ie,De,L.data);else if(S.isData3DTexture)$e?(Be&&t.texStorage3D(32879,Xe,z,L.width,L.height,L.depth),t.texSubImage3D(32879,0,0,0,0,L.width,L.height,L.depth,Ie,De,L.data)):t.texImage3D(32879,0,z,L.width,L.height,L.depth,0,Ie,De,L.data);else if(S.isFramebufferTexture){if(Be)if($e)t.texStorage2D(3553,Xe,z,L.width,L.height);else{let Ne=L.width,et=L.height;for(let bt=0;bt<Xe;bt++)t.texImage2D(3553,bt,z,Ne,et,0,Ie,De,null),Ne>>=1,et>>=1}}else if(Ce.length>0&&ge){$e&&Be&&t.texStorage2D(3553,Xe,z,Ce[0].width,Ce[0].height);for(let Ne=0,et=Ce.length;Ne<et;Ne++)Oe=Ce[Ne],$e?t.texSubImage2D(3553,Ne,0,0,Ie,De,Oe):t.texImage2D(3553,Ne,z,Ie,De,Oe);S.generateMipmaps=!1}else $e?(Be&&t.texStorage2D(3553,Xe,z,L.width,L.height),t.texSubImage2D(3553,0,0,0,Ie,De,L)):t.texImage2D(3553,0,z,Ie,De,L);B(S,ge)&&j(ie),Me.__currentVersion=Me.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ce(A,S,W){if(S.image.length!==6)return;const ie=te(A,S),pe=S.source;if(t.activeTexture(33984+W),t.bindTexture(34067,A.__webglTexture),pe.version!==pe.__currentVersion||ie===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,L=[];for(let Ne=0;Ne<6;Ne++)!Me&&!ze?L[Ne]=F(S.image[Ne],!1,!0,h):L[Ne]=ze?S.image[Ne].image:S.image[Ne],L[Ne]=me(S,L[Ne]);const ge=L[0],Ie=I(ge)||c,De=o.convert(S.format,S.encoding),z=o.convert(S.type),Oe=C(S.internalFormat,De,z,S.encoding),Ce=c&&S.isVideoTexture!==!0,$e=pe.__currentVersion===void 0||ie===!0;let Be=U(S,ge,Ie);oe(34067,S,Ie);let Xe;if(Me){Ce&&$e&&t.texStorage2D(34067,Be,Oe,ge.width,ge.height);for(let Ne=0;Ne<6;Ne++){Xe=L[Ne].mipmaps;for(let et=0;et<Xe.length;et++){const bt=Xe[et];S.format!==Pi?De!==null?Ce?t.compressedTexSubImage2D(34069+Ne,et,0,0,bt.width,bt.height,De,bt.data):t.compressedTexImage2D(34069+Ne,et,Oe,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+Ne,et,0,0,bt.width,bt.height,De,z,bt.data):t.texImage2D(34069+Ne,et,Oe,bt.width,bt.height,0,De,z,bt.data)}}}else{Xe=S.mipmaps,Ce&&$e&&(Xe.length>0&&Be++,t.texStorage2D(34067,Be,Oe,L[0].width,L[0].height));for(let Ne=0;Ne<6;Ne++)if(ze){Ce?t.texSubImage2D(34069+Ne,0,0,0,L[Ne].width,L[Ne].height,De,z,L[Ne].data):t.texImage2D(34069+Ne,0,Oe,L[Ne].width,L[Ne].height,0,De,z,L[Ne].data);for(let et=0;et<Xe.length;et++){const wt=Xe[et].image[Ne].image;Ce?t.texSubImage2D(34069+Ne,et+1,0,0,wt.width,wt.height,De,z,wt.data):t.texImage2D(34069+Ne,et+1,Oe,wt.width,wt.height,0,De,z,wt.data)}}else{Ce?t.texSubImage2D(34069+Ne,0,0,0,De,z,L[Ne]):t.texImage2D(34069+Ne,0,Oe,De,z,L[Ne]);for(let et=0;et<Xe.length;et++){const bt=Xe[et];Ce?t.texSubImage2D(34069+Ne,et+1,0,0,De,z,bt.image[Ne]):t.texImage2D(34069+Ne,et+1,Oe,De,z,bt.image[Ne])}}}B(S,Ie)&&j(34067),pe.__currentVersion=pe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,W,ie,pe){const Me=o.convert(W.format,W.encoding),ze=o.convert(W.type),L=C(W.internalFormat,Me,ze,W.encoding);i.get(S).__hasExternalTextures||(pe===32879||pe===35866?t.texImage3D(pe,0,L,S.width,S.height,S.depth,0,Me,ze,null):t.texImage2D(pe,0,L,S.width,S.height,0,Me,ze,null)),t.bindFramebuffer(36160,A),_e(S)?m.framebufferTexture2DMultisampleEXT(36160,ie,pe,i.get(W).__webglTexture,0,Re(S)):n.framebufferTexture2D(36160,ie,pe,i.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(A,S,W){if(n.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let ie=33189;if(W||_e(S)){const pe=S.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Is?ie=36012:pe.type===Rs&&(ie=33190));const Me=Re(S);_e(S)?m.renderbufferStorageMultisampleEXT(36161,Me,ie,S.width,S.height):n.renderbufferStorageMultisample(36161,Me,ie,S.width,S.height)}else n.renderbufferStorage(36161,ie,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Re(S);W&&_e(S)===!1?n.renderbufferStorageMultisample(36161,ie,35056,S.width,S.height):_e(S)?m.renderbufferStorageMultisampleEXT(36161,ie,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let pe=0;pe<ie.length;pe++){const Me=ie[pe],ze=o.convert(Me.format,Me.encoding),L=o.convert(Me.type),ge=C(Me.internalFormat,ze,L,Me.encoding),Ie=Re(S);W&&_e(S)===!1?n.renderbufferStorageMultisample(36161,Ie,ge,S.width,S.height):_e(S)?m.renderbufferStorageMultisampleEXT(36161,Ie,ge,S.width,S.height):n.renderbufferStorage(36161,ge,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function R(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),de(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,pe=Re(S);if(S.depthTexture.format===Ns)_e(S)?m.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,pe):n.framebufferTexture2D(36160,36096,3553,ie,0);else if(S.depthTexture.format===Wo)_e(S)?m.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,pe):n.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function O(A){const S=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");R(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=n.createRenderbuffer(),He(S.__webglDepthbuffer[ie],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),He(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function k(A,S,W){const ie=i.get(A);S!==void 0&&ue(ie.__webglFramebuffer,A,A.texture,36064,3553),W!==void 0&&O(A)}function J(A){const S=A.texture,W=i.get(A),ie=i.get(S);A.addEventListener("dispose",Fe),A.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,l.memory.textures++);const pe=A.isWebGLCubeRenderTarget===!0,Me=A.isWebGLMultipleRenderTargets===!0,ze=I(A)||c;if(pe){W.__webglFramebuffer=[];for(let L=0;L<6;L++)W.__webglFramebuffer[L]=n.createFramebuffer()}else{if(W.__webglFramebuffer=n.createFramebuffer(),Me)if(r.drawBuffers){const L=A.texture;for(let ge=0,Ie=L.length;ge<Ie;ge++){const De=i.get(L[ge]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&A.samples>0&&_e(A)===!1){const L=Me?S:[S];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let ge=0;ge<L.length;ge++){const Ie=L[ge];W.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(36161,W.__webglColorRenderbuffer[ge]);const De=o.convert(Ie.format,Ie.encoding),z=o.convert(Ie.type),Oe=C(Ie.internalFormat,De,z,Ie.encoding),Ce=Re(A);n.renderbufferStorageMultisample(36161,Ce,Oe,A.width,A.height),n.framebufferRenderbuffer(36160,36064+ge,36161,W.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),He(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(pe){t.bindTexture(34067,ie.__webglTexture),oe(34067,S,ze);for(let L=0;L<6;L++)ue(W.__webglFramebuffer[L],A,S,36064,34069+L);B(S,ze)&&j(34067),t.unbindTexture()}else if(Me){const L=A.texture;for(let ge=0,Ie=L.length;ge<Ie;ge++){const De=L[ge],z=i.get(De);t.bindTexture(3553,z.__webglTexture),oe(3553,De,ze),ue(W.__webglFramebuffer,A,De,36064+ge,3553),B(De,ze)&&j(3553)}t.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(c?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ie.__webglTexture),oe(L,S,ze),ue(W.__webglFramebuffer,A,S,36064,L),B(S,ze)&&j(L),t.unbindTexture()}A.depthBuffer&&O(A)}function le(A){const S=I(A)||c,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0,pe=W.length;ie<pe;ie++){const Me=W[ie];if(B(Me,S)){const ze=A.isWebGLCubeRenderTarget?34067:3553,L=i.get(Me).__webglTexture;t.bindTexture(ze,L),j(ze),t.unbindTexture()}}}function he(A){if(c&&A.samples>0&&_e(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ie=A.height;let pe=16384;const Me=[],ze=A.stencilBuffer?33306:36096,L=i.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ie,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ie,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){Me.push(36064+Ie),A.depthBuffer&&Me.push(ze);const De=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(pe|=256),A.stencilBuffer&&(pe|=1024)),ge&&n.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[Ie]),De===!0&&(n.invalidateFramebuffer(36008,[ze]),n.invalidateFramebuffer(36009,[ze])),ge){const z=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,z,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,pe,9728),_&&n.invalidateFramebuffer(36008,Me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ge)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ie,36161,L.__webglColorRenderbuffer[Ie]);const De=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ie,3553,De,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Re(A){return Math.min(p,A.samples)}function _e(A){const S=i.get(A);return c&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(A){const S=l.render.frame;y.get(A)!==S&&(y.set(A,S),A.update())}function me(A,S){const W=A.encoding,ie=A.format,pe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Qh||W!==ks&&(W===Ht?c===!1?e.has("EXT_sRGB")===!0&&ie===Pi?(A.format=Qh,A.minFilter=hi,A.generateMipmaps=!1):S=hx.sRGBToLinear(S):(ie!==Pi||pe!==Vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=Z,this.resetTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=Ee,this.setTexture3D=Se,this.setTextureCube=Pe,this.rebindTextures=k,this.setupRenderTarget=J,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=_e}function CD(n,e,t){const i=t.isWebGL2;function r(o,l=null){let c;if(o===Vs)return 5121;if(o===E2)return 32819;if(o===T2)return 32820;if(o===w2)return 5120;if(o===S2)return 5122;if(o===cx)return 5123;if(o===M2)return 5124;if(o===Rs)return 5125;if(o===Is)return 5126;if(o===Xa)return i?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===A2)return 6406;if(o===Pi)return 6408;if(o===L2)return 6409;if(o===P2)return 6410;if(o===Ns)return 6402;if(o===Wo)return 34041;if(o===R2)return 6403;if(o===C2)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===Qh)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===I2)return 36244;if(o===D2)return 33319;if(o===O2)return 33320;if(o===F2)return 36249;if(o===Xf||o===Yf||o===Kf||o===Zf)if(l===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Xf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Yf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Kf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Zf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Xf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Yf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Kf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Zf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===S0||o===M0||o===E0||o===T0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===S0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===M0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===E0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===T0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===N2)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===A0||o===C0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===A0)return l===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===C0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===L0||o===P0||o===R0||o===I0||o===D0||o===O0||o===F0||o===N0||o===z0||o===B0||o===U0||o===V0||o===k0||o===H0)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===L0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===P0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===R0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===I0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===D0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===O0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===F0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===N0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===z0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===B0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===U0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===V0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===k0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===H0)return l===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===G0)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===G0)return l===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===No?i?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class LD extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PD={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,l=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(c!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(PD))),h&&e.hand){l=!0;for(const x of e.hand.values()){const v=t.getJointPose(x,i);if(h.joints[x.jointName]===void 0){const T=new Jr;T.matrixAutoUpdate=!1,T.visible=!1,h.joints[x.jointName]=T,h.add(T)}const w=h.joints[x.jointName];v!==null&&(w.matrix.fromArray(v.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.jointRadius=v.radius),w.visible=v!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),_=.02,y=.005;h.inputState.pinching&&m>_+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),h!==null&&(h.visible=l!==null),this}}class RD extends Fi{constructor(e,t,i,r,o,l,c,u,h,d){if(d=d!==void 0?d:Ns,d!==Ns&&d!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ns&&(i=Rs),i===void 0&&d===Wo&&(i=No),super(null,r,o,l,c,u,d,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:zn,this.minFilter=u!==void 0?u:zn,this.flipY=!1,this.generateMipmaps=!1}}class ID extends Gs{constructor(e,t){super();const i=this;let r=null,o=1,l=null,c="local-floor",u=null,h=null,d=null,p=null,m=null,_=null;const y=t.getContextAttributes();let x=null,v=null;const w=[],T=new Map,F=new Bn;F.layers.enable(1),F.viewport=new gn;const I=new Bn;I.layers.enable(2),I.viewport=new gn;const P=[F,I],B=new LD;B.layers.enable(1),B.layers.enable(2);let j=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=w[se];return de===void 0&&(de=new Eh,w[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=w[se];return de===void 0&&(de=new Eh,w[se]=de),de.getGripSpace()},this.getHand=function(se){let de=w[se];return de===void 0&&(de=new Eh,w[se]=de),de.getHandSpace()};function U(se){const de=T.get(se.inputSource);de!==void 0&&de.dispatchEvent({type:se.type,data:se.inputSource})}function X(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y),T.forEach(function(se,de){se!==void 0&&se.disconnect(de)}),T.clear(),j=null,C=null,e.setRenderTarget(x),m=null,p=null,d=null,r=null,v=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){o=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(se){u=se},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),v=new ns(m.framebufferWidth,m.framebufferHeight,{format:Pi,type:Vs,encoding:e.outputEncoding})}else{let de=null,Ee=null,Se=null;y.depth&&(Se=y.stencil?35056:33190,de=y.stencil?Wo:Ns,Ee=y.stencil?No:Rs);const Pe={colorFormat:e.outputEncoding===Ht?35907:32856,depthFormat:Se,scaleFactor:o};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(Pe),r.updateRenderState({layers:[p]}),v=new ns(p.textureWidth,p.textureHeight,{format:Pi,type:Vs,depthTexture:new RD(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const ke=e.properties.get(v);ke.__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),u=null,l=await r.requestReferenceSpace(c),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Y(se){const de=r.inputSources;for(let Ee=0;Ee<de.length;Ee++){const Se=de[Ee].handedness==="right"?1:0;T.set(de[Ee],w[Se])}for(let Ee=0;Ee<se.removed.length;Ee++){const Se=se.removed[Ee],Pe=T.get(Se);Pe&&(Pe.dispatchEvent({type:"disconnected",data:Se}),T.delete(Se))}for(let Ee=0;Ee<se.added.length;Ee++){const Se=se.added[Ee],Pe=T.get(Se);Pe&&Pe.dispatchEvent({type:"connected",data:Se})}}const Fe=new H,Ae=new H;function q(se,de,Ee){Fe.setFromMatrixPosition(de.matrixWorld),Ae.setFromMatrixPosition(Ee.matrixWorld);const Se=Fe.distanceTo(Ae),Pe=de.projectionMatrix.elements,ke=Ee.projectionMatrix.elements,We=Pe[14]/(Pe[10]-1),oe=Pe[14]/(Pe[10]+1),te=(Pe[9]+1)/Pe[5],ye=(Pe[9]-1)/Pe[5],ce=(Pe[8]-1)/Pe[0],ue=(ke[8]+1)/ke[0],He=We*ce,R=We*ue,O=Se/(-ce+ue),k=O*-ce;de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(k),se.translateZ(O),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const J=We+O,le=oe+O,he=He-k,Re=R+(Se-k),_e=te*oe/le*J,Le=ye*oe/le*J;se.projectionMatrix.makePerspective(he,Re,_e,Le,J,le)}function xe(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;B.near=I.near=F.near=se.near,B.far=I.far=F.far=se.far,(j!==B.near||C!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),j=B.near,C=B.far);const de=se.parent,Ee=B.cameras;xe(B,de);for(let Pe=0;Pe<Ee.length;Pe++)xe(Ee[Pe],de);B.matrixWorld.decompose(B.position,B.quaternion,B.scale),se.position.copy(B.position),se.quaternion.copy(B.quaternion),se.scale.copy(B.scale),se.matrix.copy(B.matrix),se.matrixWorld.copy(B.matrixWorld);const Se=se.children;for(let Pe=0,ke=Se.length;Pe<ke;Pe++)Se[Pe].updateMatrixWorld(!0);Ee.length===2?q(B,F,I):B.projectionMatrix.copy(F.projectionMatrix)},this.getCamera=function(){return B},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(m!==null)return m.fixedFoveation},this.setFoveation=function(se){p!==null&&(p.fixedFoveation=se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=se)};let Q=null;function ee(se,de){if(h=de.getViewerPose(u||l),_=de,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Pe=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let ke=0;ke<Se.length;ke++){const We=Se[ke];let oe=null;if(m!==null)oe=m.getViewport(We);else{const ye=d.getViewSubImage(p,We);oe=ye.viewport,ke===0&&(e.setRenderTargetTextures(v,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(v))}let te=P[ke];te===void 0&&(te=new Bn,te.layers.enable(ke),te.viewport=new gn,P[ke]=te),te.matrix.fromArray(We.transform.matrix),te.projectionMatrix.fromArray(We.projectionMatrix),te.viewport.set(oe.x,oe.y,oe.width,oe.height),ke===0&&B.matrix.copy(te.matrix),Pe===!0&&B.cameras.push(te)}}const Ee=r.inputSources;for(let Se=0;Se<w.length;Se++){const Pe=Ee[Se],ke=T.get(Pe);ke!==void 0&&ke.update(Pe,de,u||l)}Q&&Q(se,de),_=null}const Z=new xx;Z.setAnimationLoop(ee),this.setAnimationLoop=function(se){Q=se},this.dispose=function(){}}}function DD(n,e){function t(x,v){x.fogColor.value.copy(v.color),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function i(x,v,w,T,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(x,v):v.isMeshToonMaterial?(r(x,v),d(x,v)):v.isMeshPhongMaterial?(r(x,v),h(x,v)):v.isMeshStandardMaterial?(r(x,v),p(x,v),v.isMeshPhysicalMaterial&&m(x,v,F)):v.isMeshMatcapMaterial?(r(x,v),_(x,v)):v.isMeshDepthMaterial?r(x,v):v.isMeshDistanceMaterial?(r(x,v),y(x,v)):v.isMeshNormalMaterial?r(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?c(x,v,w,T):v.isSpriteMaterial?u(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map),v.alphaMap&&(x.alphaMap.value=v.alphaMap),v.bumpMap&&(x.bumpMap.value=v.bumpMap,x.bumpScale.value=v.bumpScale,v.side===Di&&(x.bumpScale.value*=-1)),v.displacementMap&&(x.displacementMap.value=v.displacementMap,x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap),v.normalMap&&(x.normalMap.value=v.normalMap,x.normalScale.value.copy(v.normalScale),v.side===Di&&x.normalScale.value.negate()),v.specularMap&&(x.specularMap.value=v.specularMap),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const w=e.get(v).envMap;if(w&&(x.envMap.value=w,x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const I=n.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*I}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity);let T;v.map?T=v.map:v.specularMap?T=v.specularMap:v.displacementMap?T=v.displacementMap:v.normalMap?T=v.normalMap:v.bumpMap?T=v.bumpMap:v.roughnessMap?T=v.roughnessMap:v.metalnessMap?T=v.metalnessMap:v.alphaMap?T=v.alphaMap:v.emissiveMap?T=v.emissiveMap:v.clearcoatMap?T=v.clearcoatMap:v.clearcoatNormalMap?T=v.clearcoatNormalMap:v.clearcoatRoughnessMap?T=v.clearcoatRoughnessMap:v.iridescenceMap?T=v.iridescenceMap:v.iridescenceThicknessMap?T=v.iridescenceThicknessMap:v.specularIntensityMap?T=v.specularIntensityMap:v.specularColorMap?T=v.specularColorMap:v.transmissionMap?T=v.transmissionMap:v.thicknessMap?T=v.thicknessMap:v.sheenColorMap?T=v.sheenColorMap:v.sheenRoughnessMap&&(T=v.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),x.uvTransform.value.copy(T.matrix));let F;v.aoMap?F=v.aoMap:v.lightMap&&(F=v.lightMap),F!==void 0&&(F.isWebGLRenderTarget&&(F=F.texture),F.matrixAutoUpdate===!0&&F.updateMatrix(),x.uv2Transform.value.copy(F.matrix))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function c(x,v,w,T){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*w,x.scale.value=T*.5,v.map&&(x.map.value=v.map),v.alphaMap&&(x.alphaMap.value=v.alphaMap),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let F;v.map?F=v.map:v.alphaMap&&(F=v.alphaMap),F!==void 0&&(F.matrixAutoUpdate===!0&&F.updateMatrix(),x.uvTransform.value.copy(F.matrix))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map),v.alphaMap&&(x.alphaMap.value=v.alphaMap),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let w;v.map?w=v.map:v.alphaMap&&(w=v.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),x.uvTransform.value.copy(w.matrix))}function h(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function p(x,v){x.roughness.value=v.roughness,x.metalness.value=v.metalness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function m(x,v,w){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),x.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===Di&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap)}function _(x,v){v.matcap&&(x.matcap.value=v.matcap)}function y(x,v){x.referencePosition.value.copy(v.referencePosition),x.nearDistance.value=v.nearDistance,x.farDistance.value=v.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function OD(){const n=jc("canvas");return n.style.display="block",n}function Wd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:OD(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,l=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,u=n.powerPreference!==void 0?n.powerPreference:"default",h=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let p=null,m=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ks,this.physicallyCorrectLights=!1,this.toneMapping=br,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const x=this;let v=!1,w=0,T=0,F=null,I=-1,P=null;const B=new gn,j=new gn;let C=null,U=e.width,X=e.height,Y=1,Fe=null,Ae=null;const q=new gn(0,0,U,X),xe=new gn(0,0,U,X);let Q=!1;const ee=new Hd;let Z=!1,se=!1,de=null;const Ee=new Zt,Se=new Je,Pe=new H,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return F===null?Y:1}let oe=t;function te(D,K){for(let ae=0;ae<D.length;ae++){const re=D[ae],we=e.getContext(re,K);if(we!==null)return we}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vd}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",Oe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),oe===null){const K=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&K.shift(),oe=te(K,D),oe===null)throw te(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}oe.getShaderPrecisionFormat===void 0&&(oe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ye,ce,ue,He,R,O,k,J,le,he,Re,_e,Le,me,A,S,W,ie,pe,Me,ze,L,ge;function Ie(){ye=new qR(oe),ce=new VR(oe,ye,n),ye.init(ce),L=new CD(oe,ye,ce),ue=new TD(oe,ye,ce),He=new KR,R=new pD,O=new AD(oe,ye,ue,R,ce,L,He),k=new HR(x),J=new jR(x),le=new aL(oe,ce),ge=new BR(oe,ye,le,ce),he=new XR(oe,le,He,ge),Re=new eI(oe,he,le,He),pe=new QR(oe,ce,O),S=new kR(R),_e=new dD(x,k,J,ye,ce,ge,S),Le=new DD(x,R),me=new gD,A=new wD(ye,ce),ie=new zR(x,k,ue,Re,d,l),W=new ED(x,Re,ce),Me=new UR(oe,ye,He,ce),ze=new YR(oe,ye,He,ce),He.programs=_e.programs,x.capabilities=ce,x.extensions=ye,x.properties=R,x.renderLists=me,x.shadowMap=W,x.state=ue,x.info=He}Ie();const De=new ID(x,oe);this.xr=De,this.getContext=function(){return oe},this.getContextAttributes=function(){return oe.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(U,X,!1))},this.getSize=function(D){return D.set(U,X)},this.setSize=function(D,K,ae){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=D,X=K,e.width=Math.floor(D*Y),e.height=Math.floor(K*Y),ae!==!1&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(U*Y,X*Y).floor()},this.setDrawingBufferSize=function(D,K,ae){U=D,X=K,Y=ae,e.width=Math.floor(D*ae),e.height=Math.floor(K*ae),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,K,ae,re){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,K,ae,re),ue.viewport(B.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(D){return D.copy(xe)},this.setScissor=function(D,K,ae,re){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,K,ae,re),ue.scissor(j.copy(xe).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(D){ue.setScissorTest(Q=D)},this.setOpaqueSort=function(D){Fe=D},this.setTransparentSort=function(D){Ae=D},this.getClearColor=function(D){return D.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(D=!0,K=!0,ae=!0){let re=0;D&&(re|=16384),K&&(re|=256),ae&&(re|=1024),oe.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",Oe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),me.dispose(),A.dispose(),R.dispose(),k.dispose(),J.dispose(),Re.dispose(),ge.dispose(),_e.dispose(),De.dispose(),De.removeEventListener("sessionstart",bt),De.removeEventListener("sessionend",wt),de&&(de.dispose(),de=null),cn.stop()};function z(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const D=He.autoReset,K=W.enabled,ae=W.autoUpdate,re=W.needsUpdate,we=W.type;Ie(),He.autoReset=D,W.enabled=K,W.autoUpdate=ae,W.needsUpdate=re,W.type=we}function Ce(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function $e(D){const K=D.target;K.removeEventListener("dispose",$e),Be(K)}function Be(D){Xe(D),R.remove(D)}function Xe(D){const K=R.get(D).programs;K!==void 0&&(K.forEach(function(ae){_e.releaseProgram(ae)}),D.isShaderMaterial&&_e.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ae,re,we,Qe){K===null&&(K=ke);const rt=we.isMesh&&we.matrixWorld.determinant()<0,ct=ea(D,K,ae,re,we);ue.setMaterial(re,rt);let ot=ae.index;const St=ae.attributes.position;if(ot===null){if(St===void 0||St.count===0)return}else if(ot.count===0)return;let gt=1;re.wireframe===!0&&(ot=he.getWireframeAttribute(ae),gt=2),ge.setup(we,re,ct,ae,ot);let xt,Nt=Me;ot!==null&&(xt=le.get(ot),Nt=ze,Nt.setIndex(xt));const Zi=ot!==null?ot.count:St.count,Er=ae.drawRange.start*gt,di=ae.drawRange.count*gt,Jn=Qe!==null?Qe.start*gt:0,_t=Qe!==null?Qe.count*gt:1/0,Tr=Math.max(Er,Jn),Gt=Math.min(Zi,Er+di,Jn+_t)-1,Qn=Math.max(0,Gt-Tr+1);if(Qn!==0){if(we.isMesh)re.wireframe===!0?(ue.setLineWidth(re.wireframeLinewidth*We()),Nt.setMode(1)):Nt.setMode(4);else if(we.isLine){let pi=re.linewidth;pi===void 0&&(pi=1),ue.setLineWidth(pi*We()),we.isLineSegments?Nt.setMode(1):we.isLineLoop?Nt.setMode(2):Nt.setMode(3)}else we.isPoints?Nt.setMode(0):we.isSprite&&Nt.setMode(4);if(we.isInstancedMesh)Nt.renderInstances(Tr,Qn,we.count);else if(ae.isInstancedBufferGeometry){const pi=Math.min(ae.instanceCount,ae._maxInstanceCount);Nt.renderInstances(Tr,Qn,pi)}else Nt.render(Tr,Qn)}},this.compile=function(D,K){m=A.get(D),m.init(),y.push(m),D.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),m.setupLights(x.physicallyCorrectLights),D.traverse(function(ae){const re=ae.material;if(re)if(Array.isArray(re))for(let we=0;we<re.length;we++){const Qe=re[we];Qo(Qe,D,ae)}else Qo(re,D,ae)}),y.pop(),m=null};let Ne=null;function et(D){Ne&&Ne(D)}function bt(){cn.stop()}function wt(){cn.start()}const cn=new xx;cn.setAnimationLoop(et),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(D){Ne=D,De.setAnimationLoop(D),D===null?cn.stop():cn.start()},De.addEventListener("sessionstart",bt),De.addEventListener("sessionend",wt),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;D.autoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,K,F),m=A.get(D,y.length),m.init(),y.push(m),Ee.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ee.setFromProjectionMatrix(Ee),se=this.localClippingEnabled,Z=S.init(this.clippingPlanes,se,K),p=me.get(D,_.length),p.init(),_.push(p),Zn(D,K,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Fe,Ae),Z===!0&&S.beginShadows();const ae=m.state.shadowsArray;if(W.render(ae,D,K),Z===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(p,D),m.setupLights(x.physicallyCorrectLights),K.isArrayCamera){const re=K.cameras;for(let we=0,Qe=re.length;we<Qe;we++){const rt=re[we];ll(p,D,rt,rt.viewport)}}else ll(p,D,K);F!==null&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(x,D,K),ge.resetDefaultState(),I=-1,P=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Zn(D,K,ae,re){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ee.intersectsSprite(D)){re&&Pe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ee);const rt=Re.update(D),ct=D.material;ct.visible&&p.push(D,rt,ct,ae,Pe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==He.render.frame&&(D.skeleton.update(),D.skeleton.frame=He.render.frame),!D.frustumCulled||ee.intersectsObject(D))){re&&Pe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ee);const rt=Re.update(D),ct=D.material;if(Array.isArray(ct)){const ot=rt.groups;for(let St=0,gt=ot.length;St<gt;St++){const xt=ot[St],Nt=ct[xt.materialIndex];Nt&&Nt.visible&&p.push(D,rt,Nt,ae,Pe.z,xt)}}else ct.visible&&p.push(D,rt,ct,ae,Pe.z,null)}}const Qe=D.children;for(let rt=0,ct=Qe.length;rt<ct;rt++)Zn(Qe[rt],K,ae,re)}function ll(D,K,ae,re){const we=D.opaque,Qe=D.transmissive,rt=D.transparent;m.setupLightsView(ae),Qe.length>0&&bu(we,K,ae),re&&ue.viewport(B.copy(re)),we.length>0&&ls(we,K,ae),Qe.length>0&&ls(Qe,K,ae),rt.length>0&&ls(rt,K,ae),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function bu(D,K,ae){const re=ce.isWebGL2;de===null&&(de=new ns(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Xa:Vs,minFilter:pu,samples:re&&o===!0?4:0})),x.getDrawingBufferSize(Se),re?de.setSize(Se.x,Se.y):de.setSize(td(Se.x),td(Se.y));const we=x.getRenderTarget();x.setRenderTarget(de),x.clear();const Qe=x.toneMapping;x.toneMapping=br,ls(D,K,ae),x.toneMapping=Qe,O.updateMultisampleRenderTarget(de),O.updateRenderTargetMipmap(de),x.setRenderTarget(we)}function ls(D,K,ae){const re=K.isScene===!0?K.overrideMaterial:null;for(let we=0,Qe=D.length;we<Qe;we++){const rt=D[we],ct=rt.object,ot=rt.geometry,St=re===null?rt.material:re,gt=rt.group;ct.layers.test(ae.layers)&&wu(ct,K,ae,ot,St,gt)}}function wu(D,K,ae,re,we,Qe){D.onBeforeRender(x,K,ae,re,we,Qe),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),we.onBeforeRender(x,K,ae,re,D,Qe),we.transparent===!0&&we.side===os?(we.side=Di,we.needsUpdate=!0,x.renderBufferDirect(ae,K,re,we,D,Qe),we.side=qa,we.needsUpdate=!0,x.renderBufferDirect(ae,K,re,we,D,Qe),we.side=os):x.renderBufferDirect(ae,K,re,we,D,Qe),D.onAfterRender(x,K,ae,re,we,Qe)}function Qo(D,K,ae){K.isScene!==!0&&(K=ke);const re=R.get(D),we=m.state.lights,Qe=m.state.shadowsArray,rt=we.state.version,ct=_e.getParameters(D,we.state,Qe,K,ae),ot=_e.getProgramCacheKey(ct);let St=re.programs;re.environment=D.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(D.isMeshStandardMaterial?J:k).get(D.envMap||re.environment),St===void 0&&(D.addEventListener("dispose",$e),St=new Map,re.programs=St);let gt=St.get(ot);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===rt)return cl(D,ct),gt}else ct.uniforms=_e.getUniforms(D),D.onBuild(ae,ct,x),D.onBeforeCompile(ct,x),gt=_e.acquireProgram(ct,ot),St.set(ot,gt),re.uniforms=ct.uniforms;const xt=re.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(xt.clippingPlanes=S.uniform),cl(D,ct),re.needsLights=ta(D),re.lightsStateVersion=rt,re.needsLights&&(xt.ambientLightColor.value=we.state.ambient,xt.lightProbe.value=we.state.probe,xt.directionalLights.value=we.state.directional,xt.directionalLightShadows.value=we.state.directionalShadow,xt.spotLights.value=we.state.spot,xt.spotLightShadows.value=we.state.spotShadow,xt.rectAreaLights.value=we.state.rectArea,xt.ltc_1.value=we.state.rectAreaLTC1,xt.ltc_2.value=we.state.rectAreaLTC2,xt.pointLights.value=we.state.point,xt.pointLightShadows.value=we.state.pointShadow,xt.hemisphereLights.value=we.state.hemi,xt.directionalShadowMap.value=we.state.directionalShadowMap,xt.directionalShadowMatrix.value=we.state.directionalShadowMatrix,xt.spotShadowMap.value=we.state.spotShadowMap,xt.spotShadowMatrix.value=we.state.spotShadowMatrix,xt.pointShadowMap.value=we.state.pointShadowMap,xt.pointShadowMatrix.value=we.state.pointShadowMatrix);const Nt=gt.getUniforms(),Zi=zc.seqWithValue(Nt.seq,xt);return re.currentProgram=gt,re.uniformsList=Zi,gt}function cl(D,K){const ae=R.get(D);ae.outputEncoding=K.outputEncoding,ae.instancing=K.instancing,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function ea(D,K,ae,re,we){K.isScene!==!0&&(K=ke),O.resetTextureUnits();const Qe=K.fog,rt=re.isMeshStandardMaterial?K.environment:null,ct=F===null?x.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:ks,ot=(re.isMeshStandardMaterial?J:k).get(re.envMap||rt),St=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,gt=!!re.normalMap&&!!ae.attributes.tangent,xt=!!ae.morphAttributes.position,Nt=!!ae.morphAttributes.normal,Zi=!!ae.morphAttributes.color,Er=re.toneMapped?x.toneMapping:br,di=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Jn=di!==void 0?di.length:0,_t=R.get(re),Tr=m.state.lights;if(Z===!0&&(se===!0||D!==P)){const ei=D===P&&re.id===I;S.setState(re,D,ei)}let Gt=!1;re.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Tr.state.version||_t.outputEncoding!==ct||we.isInstancedMesh&&_t.instancing===!1||!we.isInstancedMesh&&_t.instancing===!0||we.isSkinnedMesh&&_t.skinning===!1||!we.isSkinnedMesh&&_t.skinning===!0||_t.envMap!==ot||re.fog===!0&&_t.fog!==Qe||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==S.numPlanes||_t.numIntersection!==S.numIntersection)||_t.vertexAlphas!==St||_t.vertexTangents!==gt||_t.morphTargets!==xt||_t.morphNormals!==Nt||_t.morphColors!==Zi||_t.toneMapping!==Er||ce.isWebGL2===!0&&_t.morphTargetsCount!==Jn)&&(Gt=!0):(Gt=!0,_t.__version=re.version);let Qn=_t.currentProgram;Gt===!0&&(Qn=Qo(re,K,we));let pi=!1,Ar=!1,$s=!1;const un=Qn.getUniforms(),cs=_t.uniforms;if(ue.useProgram(Qn.program)&&(pi=!0,Ar=!0,$s=!0),re.id!==I&&(I=re.id,Ar=!0),pi||P!==D){if(un.setValue(oe,"projectionMatrix",D.projectionMatrix),ce.logarithmicDepthBuffer&&un.setValue(oe,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),P!==D&&(P=D,Ar=!0,$s=!0),re.isShaderMaterial||re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshStandardMaterial||re.envMap){const ei=un.map.cameraPosition;ei!==void 0&&ei.setValue(oe,Pe.setFromMatrixPosition(D.matrixWorld))}(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&un.setValue(oe,"isOrthographic",D.isOrthographicCamera===!0),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial||re.isShadowMaterial||we.isSkinnedMesh)&&un.setValue(oe,"viewMatrix",D.matrixWorldInverse)}if(we.isSkinnedMesh){un.setOptional(oe,we,"bindMatrix"),un.setOptional(oe,we,"bindMatrixInverse");const ei=we.skeleton;ei&&(ce.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),un.setValue(oe,"boneTexture",ei.boneTexture,O),un.setValue(oe,"boneTextureSize",ei.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const na=ae.morphAttributes;return(na.position!==void 0||na.normal!==void 0||na.color!==void 0&&ce.isWebGL2===!0)&&pe.update(we,ae,re,Qn),(Ar||_t.receiveShadow!==we.receiveShadow)&&(_t.receiveShadow=we.receiveShadow,un.setValue(oe,"receiveShadow",we.receiveShadow)),Ar&&(un.setValue(oe,"toneMappingExposure",x.toneMappingExposure),_t.needsLights&&Su(cs,$s),Qe&&re.fog===!0&&Le.refreshFogUniforms(cs,Qe),Le.refreshMaterialUniforms(cs,re,Y,X,de),zc.upload(oe,_t.uniformsList,cs,O)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(zc.upload(oe,_t.uniformsList,cs,O),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&un.setValue(oe,"center",we.center),un.setValue(oe,"modelViewMatrix",we.modelViewMatrix),un.setValue(oe,"normalMatrix",we.normalMatrix),un.setValue(oe,"modelMatrix",we.matrixWorld),Qn}function Su(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function ta(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,K,ae){R.get(D.texture).__webglTexture=K,R.get(D.depthTexture).__webglTexture=ae;const re=R.get(D);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ae===void 0,re.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const ae=R.get(D);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,ae=0){F=D,w=K,T=ae;let re=!0;if(D){const ot=R.get(D);ot.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),re=!1):ot.__webglFramebuffer===void 0?O.setupRenderTarget(D):ot.__hasExternalTextures&&O.rebindTextures(D,R.get(D.texture).__webglTexture,R.get(D.depthTexture).__webglTexture)}let we=null,Qe=!1,rt=!1;if(D){const ot=D.texture;(ot.isData3DTexture||ot.isDataArrayTexture)&&(rt=!0);const St=R.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(we=St[K],Qe=!0):ce.isWebGL2&&D.samples>0&&O.useMultisampledRTT(D)===!1?we=R.get(D).__webglMultisampledFramebuffer:we=St,B.copy(D.viewport),j.copy(D.scissor),C=D.scissorTest}else B.copy(q).multiplyScalar(Y).floor(),j.copy(xe).multiplyScalar(Y).floor(),C=Q;if(ue.bindFramebuffer(36160,we)&&ce.drawBuffers&&re&&ue.drawBuffers(D,we),ue.viewport(B),ue.scissor(j),ue.setScissorTest(C),Qe){const ot=R.get(D.texture);oe.framebufferTexture2D(36160,36064,34069+K,ot.__webglTexture,ae)}else if(rt){const ot=R.get(D.texture),St=K||0;oe.framebufferTextureLayer(36160,36064,ot.__webglTexture,ae||0,St)}I=-1},this.readRenderTargetPixels=function(D,K,ae,re,we,Qe,rt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=R.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&rt!==void 0&&(ct=ct[rt]),ct){ue.bindFramebuffer(36160,ct);try{const ot=D.texture,St=ot.format,gt=ot.type;if(St!==Pi&&L.convert(St)!==oe.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xt=gt===Xa&&(ye.has("EXT_color_buffer_half_float")||ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(gt!==Vs&&L.convert(gt)!==oe.getParameter(35738)&&!(gt===Is&&(ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-re&&ae>=0&&ae<=D.height-we&&oe.readPixels(K,ae,re,we,L.convert(St),L.convert(gt),Qe)}finally{const ot=F!==null?R.get(F).__webglFramebuffer:null;ue.bindFramebuffer(36160,ot)}}},this.copyFramebufferToTexture=function(D,K,ae=0){const re=Math.pow(2,-ae),we=Math.floor(K.image.width*re),Qe=Math.floor(K.image.height*re);O.setTexture2D(K,0),oe.copyTexSubImage2D(3553,ae,0,0,D.x,D.y,we,Qe),ue.unbindTexture()},this.copyTextureToTexture=function(D,K,ae,re=0){const we=K.image.width,Qe=K.image.height,rt=L.convert(ae.format),ct=L.convert(ae.type);O.setTexture2D(ae,0),oe.pixelStorei(37440,ae.flipY),oe.pixelStorei(37441,ae.premultiplyAlpha),oe.pixelStorei(3317,ae.unpackAlignment),K.isDataTexture?oe.texSubImage2D(3553,re,D.x,D.y,we,Qe,rt,ct,K.image.data):K.isCompressedTexture?oe.compressedTexSubImage2D(3553,re,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,rt,K.mipmaps[0].data):oe.texSubImage2D(3553,re,D.x,D.y,rt,ct,K.image),re===0&&ae.generateMipmaps&&oe.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ae,re,we=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Qe=D.max.x-D.min.x+1,rt=D.max.y-D.min.y+1,ct=D.max.z-D.min.z+1,ot=L.convert(re.format),St=L.convert(re.type);let gt;if(re.isData3DTexture)O.setTexture3D(re,0),gt=32879;else if(re.isDataArrayTexture)O.setTexture2DArray(re,0),gt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}oe.pixelStorei(37440,re.flipY),oe.pixelStorei(37441,re.premultiplyAlpha),oe.pixelStorei(3317,re.unpackAlignment);const xt=oe.getParameter(3314),Nt=oe.getParameter(32878),Zi=oe.getParameter(3316),Er=oe.getParameter(3315),di=oe.getParameter(32877),Jn=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;oe.pixelStorei(3314,Jn.width),oe.pixelStorei(32878,Jn.height),oe.pixelStorei(3316,D.min.x),oe.pixelStorei(3315,D.min.y),oe.pixelStorei(32877,D.min.z),ae.isDataTexture||ae.isData3DTexture?oe.texSubImage3D(gt,we,K.x,K.y,K.z,Qe,rt,ct,ot,St,Jn.data):ae.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),oe.compressedTexSubImage3D(gt,we,K.x,K.y,K.z,Qe,rt,ct,ot,Jn.data)):oe.texSubImage3D(gt,we,K.x,K.y,K.z,Qe,rt,ct,ot,St,Jn),oe.pixelStorei(3314,xt),oe.pixelStorei(32878,Nt),oe.pixelStorei(3316,Zi),oe.pixelStorei(3315,Er),oe.pixelStorei(32877,di),we===0&&re.generateMipmaps&&oe.generateMipmap(gt),ue.unbindTexture()},this.initTexture=function(D){O.setTexture2D(D,0),ue.unbindTexture()},this.resetState=function(){w=0,T=0,F=null,ue.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class FD extends Wd{}FD.prototype.isWebGL1Renderer=!0;class Ax extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ND extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Bs extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const T_=new H,A_=new H,C_=new Zt,Th=new mu,Mc=new sl;class zD extends Sn{constructor(e=new Kn,t=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)T_.fromBufferAttribute(t,r-1),A_.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=T_.distanceTo(A_);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(r),Mc.radius+=o,e.ray.intersectsSphere(Mc)===!1)return;C_.copy(r).invert(),Th.copy(e.ray).applyMatrix4(C_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=new H,d=new H,p=new H,m=new H,_=this.isLineSegments?2:1,y=i.index,v=i.attributes.position;if(y!==null){const w=Math.max(0,l.start),T=Math.min(y.count,l.start+l.count);for(let F=w,I=T-1;F<I;F+=_){const P=y.getX(F),B=y.getX(F+1);if(h.fromBufferAttribute(v,P),d.fromBufferAttribute(v,B),Th.distanceSqToSegment(h,d,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(m);C<e.near||C>e.far||t.push({distance:C,point:p.clone().applyMatrix4(this.matrixWorld),index:F,face:null,faceIndex:null,object:this})}}else{const w=Math.max(0,l.start),T=Math.min(v.count,l.start+l.count);for(let F=w,I=T-1;F<I;F+=_){if(h.fromBufferAttribute(v,F),d.fromBufferAttribute(v,F+1),Th.distanceSqToSegment(h,d,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(m);B<e.near||B>e.far||t.push({distance:B,point:p.clone().applyMatrix4(this.matrixWorld),index:F,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}const L_=new H,P_=new H;class qc extends zD{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)L_.fromBufferAttribute(t,r),P_.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+L_.distanceTo(P_);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lo extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const R_=new Zt,id=new mu,Ec=new sl,Tc=new H;class Ah extends Sn{constructor(e=new Kn,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(r),Ec.radius+=o,e.ray.intersectsSphere(Ec)===!1)return;R_.copy(r).invert(),id.copy(e.ray).applyMatrix4(R_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,l.start),_=Math.min(h.count,l.start+l.count);for(let y=m,x=_;y<x;y++){const v=h.getX(y);Tc.fromBufferAttribute(p,v),I_(Tc,v,u,r,e,t,this)}}else{const m=Math.max(0,l.start),_=Math.min(p.count,l.start+l.count);for(let y=m,x=_;y<x;y++)Tc.fromBufferAttribute(p,y),I_(Tc,y,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function I_(n,e,t,i,r,o,l){const c=id.distanceSqToPoint(n);if(c<t){const u=new H;id.closestPointToPoint(n,u),u.applyMatrix4(i);const h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:l})}}const Ac=new H,Cc=new H,Ch=new H,Lc=new ji;class BD extends Kn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Fc*t),l=e.getIndex(),c=e.getAttribute("position"),u=l?l.count:c.count,h=[0,0,0],d=["a","b","c"],p=new Array(3),m={},_=[];for(let y=0;y<u;y+=3){l?(h[0]=l.getX(y),h[1]=l.getX(y+1),h[2]=l.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:x,b:v,c:w}=Lc;if(x.fromBufferAttribute(c,h[0]),v.fromBufferAttribute(c,h[1]),w.fromBufferAttribute(c,h[2]),Lc.getNormal(Ch),p[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,p[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[2]=`${Math.round(w.x*r)},${Math.round(w.y*r)},${Math.round(w.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let T=0;T<3;T++){const F=(T+1)%3,I=p[T],P=p[F],B=Lc[d[T]],j=Lc[d[F]],C=`${I}_${P}`,U=`${P}_${I}`;U in m&&m[U]?(Ch.dot(m[U].normal)<=o&&(_.push(B.x,B.y,B.z),_.push(j.x,j.y,j.z)),m[U]=null):C in m||(m[C]={index0:h[T],index1:h[F],normal:Ch.clone()})}}for(const y in m)if(m[y]){const{index0:x,index1:v}=m[y];Ac.fromBufferAttribute(c,x),Cc.fromBufferAttribute(c,v),_.push(Ac.x,Ac.y,Ac.z),_.push(Cc.x,Cc.y,Cc.z)}this.setAttribute("position",new on(_,3))}}}class UD extends nn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new tt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class VD extends Sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _r extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kD extends _r{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cx extends nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HD extends nn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new tt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class GD extends nn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class rd extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class WD extends nn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new tt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lx extends Bs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const $D={ShadowMaterial:UD,SpriteMaterial:ND,RawShaderMaterial:VD,ShaderMaterial:Sr,PointsMaterial:Lo,MeshPhysicalMaterial:kD,MeshStandardMaterial:_r,MeshPhongMaterial:Cx,MeshToonMaterial:HD,MeshNormalMaterial:GD,MeshLambertMaterial:rd,MeshDepthMaterial:Ex,MeshDistanceMaterial:Tx,MeshBasicMaterial:gu,MeshMatcapMaterial:WD,LineDashedMaterial:Lx,LineBasicMaterial:Bs,Material:nn};nn.fromType=function(n){return new $D[n]};const D_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jD{constructor(e,t,i){const r=this;let o=!1,l=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){c++,o===!1&&r.onStart!==void 0&&r.onStart(d,l,c),o=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,c),l===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=h.length;p<m;p+=2){const _=h[p],y=h[p+1];if(_.global&&(_.lastIndex=0),_.test(d))return y}return null}}}const qD=new jD;let Px=class{constructor(e){this.manager=e!==void 0?e:qD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const dr={};class XD extends Px{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=D_.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:i,onError:r});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:i,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=dr[e],p=h.body.getReader(),m=h.headers.get("Content-Length"),_=m?parseInt(m):0,y=_!==0;let x=0;const v=new ReadableStream({start(w){T();function T(){p.read().then(({done:F,value:I})=>{if(F)w.close();else{x+=I.byteLength;const P=new ProgressEvent("progress",{lengthComputable:y,loaded:x,total:_});for(let B=0,j=d.length;B<j;B++){const C=d[B];C.onProgress&&C.onProgress(P)}w.enqueue(I),T()}})}}});return new Response(v)}else throw Error(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,_=new TextDecoder(m);return h.arrayBuffer().then(y=>_.decode(y))}}}).then(h=>{D_.add(e,h);const d=dr[e];delete dr[e];for(let p=0,m=d.length;p<m;p++){const _=d[p];_.onLoad&&_.onLoad(h)}}).catch(h=>{const d=dr[e];if(d===void 0)throw this.manager.itemError(e),h;delete dr[e];for(let p=0,m=d.length;p<m;p++){const _=d[p];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class YD extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const O_=new Zt,F_=new H,N_=new H;class KD{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;F_.setFromMatrixPosition(e.matrixWorld),t.position.copy(F_),N_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N_),t.updateMatrixWorld(),O_.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(O_),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZD extends KD{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ed*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xc extends YD{constructor(e,t,i=0,r=Math.PI/3,o=0,l=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Sn.DefaultUp),this.updateMatrix(),this.target=new Sn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.shadow=new ZD}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rx="\\[\\]\\.:\\/",$d="[^"+Rx+"]",JD="[^"+Rx.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",$d);/(WCOD+)?/.source.replace("WCOD",JD);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$d);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$d);class QD{constructor(e,t,i=0,r=1/0){this.ray=new mu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return sd(e,this,i,t),i.sort(z_),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)sd(e[r],this,i,t);return i.sort(z_),i}}function z_(n,e){return n.distance-e.distance}function sd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,l=r.length;o<l;o++)sd(r[o],e,t,!0)}}class B_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eO extends qc{constructor(e=10,t=10,i=4473924,r=8947848){i=new tt(i),r=new tt(r);const o=t/2,l=e/t,c=e/2,u=[],h=[];for(let m=0,_=0,y=-c;m<=t;m++,y+=l){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const x=m===o?i:r;x.toArray(h,_),_+=3,x.toArray(h,_),_+=3,x.toArray(h,_),_+=3,x.toArray(h,_),_+=3}const d=new Kn;d.setAttribute("position",new on(u,3)),d.setAttribute("color",new on(h,3));const p=new Bs({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}}const Vi=new Uint32Array(512),ki=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(Vi[n]=0,Vi[n|256]=32768,ki[n]=24,ki[n|256]=24):e<-14?(Vi[n]=1024>>-e-14,Vi[n|256]=1024>>-e-14|32768,ki[n]=-e-1,ki[n|256]=-e-1):e<=15?(Vi[n]=e+15<<10,Vi[n|256]=e+15<<10|32768,ki[n]=13,ki[n|256]=13):e<128?(Vi[n]=31744,Vi[n|256]=64512,ki[n]=24,ki[n|256]=24):(Vi[n]=31744,Vi[n|256]=64512,ki[n]=13,ki[n|256]=13)}const Ix=new Uint32Array(2048),al=new Uint32Array(64),tO=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Ix[n]=e|t}for(let n=1024;n<2048;++n)Ix[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)al[n]=n<<23;al[31]=1199570944;al[32]=2147483648;for(let n=33;n<63;++n)al[n]=2147483648+(n-32<<23);al[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(tO[n]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);const U_={type:"change"},Lh={type:"start"},V_={type:"end"};class nO extends Gs{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:lo.ROTATE,TWO:lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",me),this._domElementKeyEvents=L},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(U_),i.update(),o=r.NONE},this.update=function(){const L=new H,ge=new Hs().setFromUnitVectors(e.up,new H(0,1,0)),Ie=ge.clone().invert(),De=new H,z=new Hs,Oe=2*Math.PI;return function(){const $e=i.object.position;L.copy($e).sub(i.target),L.applyQuaternion(ge),c.setFromVector3(L),i.autoRotate&&o===r.NONE&&U(j()),i.enableDamping?(c.theta+=u.theta*i.dampingFactor,c.phi+=u.phi*i.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);let Be=i.minAzimuthAngle,Xe=i.maxAzimuthAngle;return isFinite(Be)&&isFinite(Xe)&&(Be<-Math.PI?Be+=Oe:Be>Math.PI&&(Be-=Oe),Xe<-Math.PI?Xe+=Oe:Xe>Math.PI&&(Xe-=Oe),Be<=Xe?c.theta=Math.max(Be,Math.min(Xe,c.theta)):c.theta=c.theta>(Be+Xe)/2?Math.max(Be,c.theta):Math.min(Xe,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=h,c.radius=Math.max(i.minDistance,Math.min(i.maxDistance,c.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),L.setFromSpherical(c),L.applyQuaternion(Ie),$e.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),h=1,p||De.distanceToSquared(i.object.position)>l||8*(1-z.dot(i.object.quaternion))>l?(i.dispatchEvent(U_),De.copy(i.object.position),z.copy(i.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",W),i.domElement.removeEventListener("pointerdown",k),i.domElement.removeEventListener("pointercancel",he),i.domElement.removeEventListener("wheel",Le),i.domElement.removeEventListener("pointermove",J),i.domElement.removeEventListener("pointerup",le),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",me)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,c=new B_,u=new B_;let h=1;const d=new H;let p=!1;const m=new Je,_=new Je,y=new Je,x=new Je,v=new Je,w=new Je,T=new Je,F=new Je,I=new Je,P=[],B={};function j(){return 2*Math.PI/60/60*i.autoRotateSpeed}function C(){return Math.pow(.95,i.zoomSpeed)}function U(L){u.theta-=L}function X(L){u.phi-=L}const Y=function(){const L=new H;return function(Ie,De){L.setFromMatrixColumn(De,0),L.multiplyScalar(-Ie),d.add(L)}}(),Fe=function(){const L=new H;return function(Ie,De){i.screenSpacePanning===!0?L.setFromMatrixColumn(De,1):(L.setFromMatrixColumn(De,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ie),d.add(L)}}(),Ae=function(){const L=new H;return function(Ie,De){const z=i.domElement;if(i.object.isPerspectiveCamera){const Oe=i.object.position;L.copy(Oe).sub(i.target);let Ce=L.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*Ie*Ce/z.clientHeight,i.object.matrix),Fe(2*De*Ce/z.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(Ie*(i.object.right-i.object.left)/i.object.zoom/z.clientWidth,i.object.matrix),Fe(De*(i.object.top-i.object.bottom)/i.object.zoom/z.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(L){i.object.isPerspectiveCamera?h/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function xe(L){i.object.isPerspectiveCamera?h*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(L){m.set(L.clientX,L.clientY)}function ee(L){T.set(L.clientX,L.clientY)}function Z(L){x.set(L.clientX,L.clientY)}function se(L){_.set(L.clientX,L.clientY),y.subVectors(_,m).multiplyScalar(i.rotateSpeed);const ge=i.domElement;U(2*Math.PI*y.x/ge.clientHeight),X(2*Math.PI*y.y/ge.clientHeight),m.copy(_),i.update()}function de(L){F.set(L.clientX,L.clientY),I.subVectors(F,T),I.y>0?q(C()):I.y<0&&xe(C()),T.copy(F),i.update()}function Ee(L){v.set(L.clientX,L.clientY),w.subVectors(v,x).multiplyScalar(i.panSpeed),Ae(w.x,w.y),x.copy(v),i.update()}function Se(L){L.deltaY<0?xe(C()):L.deltaY>0&&q(C()),i.update()}function Pe(L){let ge=!1;switch(L.code){case i.keys.UP:Ae(0,i.keyPanSpeed),ge=!0;break;case i.keys.BOTTOM:Ae(0,-i.keyPanSpeed),ge=!0;break;case i.keys.LEFT:Ae(i.keyPanSpeed,0),ge=!0;break;case i.keys.RIGHT:Ae(-i.keyPanSpeed,0),ge=!0;break}ge&&(L.preventDefault(),i.update())}function ke(){if(P.length===1)m.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),ge=.5*(P[0].pageY+P[1].pageY);m.set(L,ge)}}function We(){if(P.length===1)x.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),ge=.5*(P[0].pageY+P[1].pageY);x.set(L,ge)}}function oe(){const L=P[0].pageX-P[1].pageX,ge=P[0].pageY-P[1].pageY,Ie=Math.sqrt(L*L+ge*ge);T.set(0,Ie)}function te(){i.enableZoom&&oe(),i.enablePan&&We()}function ye(){i.enableZoom&&oe(),i.enableRotate&&ke()}function ce(L){if(P.length==1)_.set(L.pageX,L.pageY);else{const Ie=ze(L),De=.5*(L.pageX+Ie.x),z=.5*(L.pageY+Ie.y);_.set(De,z)}y.subVectors(_,m).multiplyScalar(i.rotateSpeed);const ge=i.domElement;U(2*Math.PI*y.x/ge.clientHeight),X(2*Math.PI*y.y/ge.clientHeight),m.copy(_)}function ue(L){if(P.length===1)v.set(L.pageX,L.pageY);else{const ge=ze(L),Ie=.5*(L.pageX+ge.x),De=.5*(L.pageY+ge.y);v.set(Ie,De)}w.subVectors(v,x).multiplyScalar(i.panSpeed),Ae(w.x,w.y),x.copy(v)}function He(L){const ge=ze(L),Ie=L.pageX-ge.x,De=L.pageY-ge.y,z=Math.sqrt(Ie*Ie+De*De);F.set(0,z),I.set(0,Math.pow(F.y/T.y,i.zoomSpeed)),q(I.y),T.copy(F)}function R(L){i.enableZoom&&He(L),i.enablePan&&ue(L)}function O(L){i.enableZoom&&He(L),i.enableRotate&&ce(L)}function k(L){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",J),i.domElement.addEventListener("pointerup",le)),ie(L),L.pointerType==="touch"?A(L):Re(L))}function J(L){i.enabled!==!1&&(L.pointerType==="touch"?S(L):_e(L))}function le(L){pe(L),P.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",J),i.domElement.removeEventListener("pointerup",le)),i.dispatchEvent(V_),o=r.NONE}function he(L){pe(L)}function Re(L){let ge;switch(L.button){case 0:ge=i.mouseButtons.LEFT;break;case 1:ge=i.mouseButtons.MIDDLE;break;case 2:ge=i.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case ao.DOLLY:if(i.enableZoom===!1)return;ee(L),o=r.DOLLY;break;case ao.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Z(L),o=r.PAN}else{if(i.enableRotate===!1)return;Q(L),o=r.ROTATE}break;case ao.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;Q(L),o=r.ROTATE}else{if(i.enablePan===!1)return;Z(L),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Lh)}function _e(L){if(i.enabled!==!1)switch(o){case r.ROTATE:if(i.enableRotate===!1)return;se(L);break;case r.DOLLY:if(i.enableZoom===!1)return;de(L);break;case r.PAN:if(i.enablePan===!1)return;Ee(L);break}}function Le(L){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(L.preventDefault(),i.dispatchEvent(Lh),Se(L),i.dispatchEvent(V_))}function me(L){i.enabled===!1||i.enablePan===!1||Pe(L)}function A(L){switch(Me(L),P.length){case 1:switch(i.touches.ONE){case lo.ROTATE:if(i.enableRotate===!1)return;ke(),o=r.TOUCH_ROTATE;break;case lo.PAN:if(i.enablePan===!1)return;We(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case lo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(),o=r.TOUCH_DOLLY_PAN;break;case lo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Lh)}function S(L){switch(Me(L),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ce(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ue(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;R(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(L),i.update();break;default:o=r.NONE}}function W(L){i.enabled!==!1&&L.preventDefault()}function ie(L){P.push(L)}function pe(L){delete B[L.pointerId];for(let ge=0;ge<P.length;ge++)if(P[ge].pointerId==L.pointerId){P.splice(ge,1);return}}function Me(L){let ge=B[L.pointerId];ge===void 0&&(ge=new Je,B[L.pointerId]=ge),ge.set(L.pageX,L.pageY)}function ze(L){const ge=L.pointerId===P[0].pointerId?P[1]:P[0];return B[ge.pointerId]}i.domElement.addEventListener("contextmenu",W),i.domElement.addEventListener("pointerdown",k),i.domElement.addEventListener("pointercancel",he),i.domElement.addEventListener("wheel",Le,{passive:!1}),this.update()}}class jd extends EventTarget{constructor(t){super();je(this,"scene");je(this,"camera");je(this,"renderer");je(this,"orbitControls");je(this,"cameraRotatedEvent",new Event("camera_rotated"));this.container=t,this.scene=new Ax,this.scene.background=new tt(12635345),this.camera=new Bn(40,this.container.offsetWidth/this.container.offsetHeight,.1,1e3),this.renderer=new Wd,this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),t.appendChild(this.renderer.domElement);const i=new Xc(16777215,1);i.position.set(20,50,20),i.lookAt(0,0,0),this.scene.add(i);const r=new Xc(13421772,1);r.position.set(-20,50,-20),r.lookAt(0,0,0),this.scene.add(r),this.camera.position.x=13,this.camera.position.y=18,this.camera.position.z=13,this.camera.lookAt(new H(0,0,0)),this.addDebug(),this.orbitControls=this.addOrbitControls(),this.orbitControls.addEventListener("change",this.dispatchEvent.bind(this,this.cameraRotatedEvent))}animate(){document.body.contains(this.container)&&(this.updateSize(),requestAnimationFrame(this.animate.bind(this)),this.orbitControls.update(),this.renderer.render(this.scene,this.camera))}dump(){}addDebug(){}addOrbitControls(){const t=new nO(this.camera,this.renderer.domElement);return t.enableDamping=!0,t.dampingFactor=.05,t}updateSize(){this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}}je(jd,"DEBUG",!1);function qd(n){return n[Math.floor(Math.random()*n.length)]}function Ya(n,e="Assertion failed"){if(!n)throw console.groupCollapsed("assertBoolean"),console.trace(),console.groupEnd(),e}async function iO(n=0){return await new Promise(e=>setTimeout(e,n))}class Ei{constructor(e){je(this,"value",[]);this.templatesCount=e,this.value=new Array(e).fill(0)}isAllZeros(){return this.countOnes()===0}countOnes(){return this.value.reduce((e,t)=>e+t,0)}clone(){const e=new Ei(this.templatesCount);return e.value=[...this.value],e}getIntersection(e){Ya(this.value.length===e.value.length);const t=new Ei(this.templatesCount);for(let i=0;i<t.value.length;i++)t.value[i]=Math.min(this.value[i],e.value[i]);return t}fillOnes(){this.value.fill(1)}getNonZeroIndices(){return this.value.reduce((e,t,i)=>(t===1&&e.push(i),e),[])}getRandomNonZeroIndex(){const e=this.getNonZeroIndices();return qd(e)}on(e){this.setAt(e,1)}off(e){this.setAt(e,0)}setAt(e,t){this.value[e]=t}getAt(e){return this.value[e]}print(){return this.value.join(" ")}}const To=["meshes/corner.obj","meshes/wall.obj","meshes/roof.obj","meshes/tower.obj","meshes/floor.obj","meshes/innercorner.obj","meshes/bridge.obj","meshes/door.obj","meshes/triangleroof.obj"];var Yr=(n=>(n.px="px",n.nx="nx",n.py="py",n.ny="ny",n.pz="pz",n.nz="nz",n))(Yr||{});class rO{constructor(){je(this,"iterations",0);je(this,"templates",[])}parse(e){this.templates.splice(0);const t=[];t.push(...this.getDefaultTemplates()),t.push(...this.getSrcTemplates());const i=t.length;this.templates.push(...t.map(r=>({...r,id:r.src,px:new Ei(i),nx:new Ei(i),py:new Ei(i),ny:new Ei(i),pz:new Ei(i),nz:new Ei(i)}))),this.setupDefaultConstraints(),e.model.forEach(r=>{this.parseCell(e,r)}),console.log("parser::iterations",this.iterations),console.log("parser::templates",this.templates)}setupDefaultConstraints(){for(const e of Object.values(Yr))this.templates[0][e].on(0);for(const e of["px","nx","nz","pz"])this.templates[0][e].on(1),this.templates[1][e].on(0),this.templates[1][e].on(1);this.templates[0].ny.on(1),this.templates[1].py.on(0)}getTemplates(){return this.templates}getSrcTemplates(){const e=[];for(let t=0;t<To.length;++t)e.push({src:To[t],rotation:0}),e.push({src:To[t],rotation:1}),e.push({src:To[t],rotation:2}),e.push({src:To[t],rotation:3});return e}findTemplateIndex(e,t){const i=this.templates.findIndex(({src:r,rotation:o})=>r===e&&o===t);return i===-1?null:i}getDefaultTemplates(){return["void","ground"].map(e=>({src:e,id:e,rotation:0}))}parseCell(e,t){const i=t.position;this.parsePair(e,"px",t,i.clone().add(new H(1,0,0))),this.parsePair(e,"nx",t,i.clone().add(new H(-1,0,0))),this.parsePair(e,"py",t,i.clone().add(new H(0,1,0))),this.parsePair(e,"ny",t,i.clone().add(new H(0,-1,0))),this.parsePair(e,"pz",t,i.clone().add(new H(0,0,1))),this.parsePair(e,"nz",t,i.clone().add(new H(0,0,-1)))}parsePair(e,t,i,r){const o=e.getCell(r);o?this.mateTwo(i.src,i.rotation,o.src,o.rotation,t,!1):this.mateTwo(i.src,i.rotation,"жопа",0,t,r.y<0)}mateTwo(e,t,i,r,o,l){for(let c=0;c<4;++c){const u=this.rotateKey(o,-c),h=this.reverseKey(u),d=this.findTemplateIndex(e,this.addRotate(t,c));let p=this.findTemplateIndex(i,this.addRotate(r,c));p||(p=l?1:0),this.templates[d][u].on(p),this.templates[p][h].on(d),this.iterations++}}addRotate(e,t){return(4+e+t)%4}rotateKey(e,t){if(["py","ny"].includes(e))return e;const i=["px","pz","nx","nz"];let r=i.findIndex(o=>o===e);if(r===-1)throw"Can't rotate index";return i[this.addRotate(r,t)]}reverseKey(e){switch(e){case"px":return"nx";case"nx":return"px";case"py":return"ny";case"ny":return"py";case"pz":return"nz";case"nz":return"pz"}}}const is=new rO;class Xd{constructor(){je(this,"x",0);je(this,"y",0);je(this,"z",0);je(this,"dead",!1);je(this,"dirty",!1);je(this,"enthropy",0);je(this,"mask");je(this,"templates",[]);this.mask=new Ei(is.getTemplates().length),this.mask.fillOnes(),this.enthropy=this.mask.countOnes(),this.templates=is.getTemplates()}getNonZeroIndices(){return this.mask.getNonZeroIndices()}collapse(){const e=this.getNonZeroIndices(),t=qd(e)??0;this.collapseTo(t)}collapseTo(e){this.dead||(Ya(e<this.templates.length),Ya(this.mask.getAt(e)===1),this.mask=new Ei(is.getTemplates().length),this.mask.setAt(e,1),this.enthropy=this.mask.countOnes())}collapseToId(e){const t=this.templates.findIndex(i=>i.id===e);this.collapseTo(t)}die(){this.dead=!0}tryGetOnlyState(){if(this.enthropy!=1)throw"attempt to get only state of element with enthropy > 2";return this.mask.getNonZeroIndices()[0]}countStates(){return this.mask.countOnes()}clone(){const e=new Xd;return e.mask=this.mask.clone(),e.enthropy=this.mask.countOnes(),e.dead=this.dead,e.x=this.x,e.y=this.y,e.z=this.z,e}updateEnthropy(){this.enthropy=this.mask.countOnes(),this.enthropy<1&&this.die()}print(){let e=`[${this.x.toString().padStart(2," ")}, ${this.y.toString().padStart(2," ")}] `;return e+=`[${this.mask.print()}]`,e+=` entr: ${this.enthropy}`,e}}const Mi=class Mi{constructor(){je(this,"instances",[])}fill(){for(let e=0;e<Mi.MAX_HORIZONTAL;++e){this.instances[e]=[];for(let t=0;t<Mi.MAX_VERTICAL;++t){this.instances[e][t]=[];for(let i=0;i<Mi.MAX_HORIZONTAL;++i){const r=new Xd;r.x=e,r.y=t,r.z=i,(e===0||i===0||e===Mi.MAX_HORIZONTAL-1||i===Mi.MAX_HORIZONTAL-1)&&(r.collapseToId("void"),r.dirty=!0),t===0&&r.countStates()>1&&(r.collapseToId("ground"),r.dirty=!0),t===Mi.MAX_VERTICAL-1&&r.countStates()>1&&r.collapseToId("void"),this.instances[e][t][i]=r}}}}eachElement(e){this.eachElementByIndex((t,i,r)=>e(this.instances[t][i][r]))}eachElementByIndex(e){for(let t=0;t<this.instances.length;++t)for(let i=0;i<this.instances[t].length;++i)for(let r=0;r<this.instances[t][i].length;++r)e(t,i,r)}print(){const e=[];for(let t=0;t<this.instances.length;++t){e[t]=[];for(let i=0;i<this.instances[t].length;++i)for(let r=0;r<this.instances[t][i].length;++r)e[t][i][r]={...this.instances[t][i][r]}}console.log(e)}printFinishedSlice(e){var i;Ya(e>=0&&e<Mi.MAX_HORIZONTAL);let t="";for(let r=0;r<this.instances.length;++r){for(let o=0;o<this.instances[r].length;++o){const l=this.instances[r][o][e];Ya(l.enthropy<=1),t+=`	${((i=is.getTemplates()[l.tryGetOnlyState()])==null?void 0:i.id)??"dead"}`}t+=`
`}console.log(t)}getElementsAdjacentTo(e){function t(r,o){o[0]&&r.push(o)}const i=[];return t(i,[this.tryGetElementAt(e.x+1,e.y,e.z),Yr.px]),t(i,[this.tryGetElementAt(e.x-1,e.y,e.z),Yr.nx]),t(i,[this.tryGetElementAt(e.x,e.y+1,e.z),Yr.py]),t(i,[this.tryGetElementAt(e.x,e.y-1,e.z),Yr.ny]),t(i,[this.tryGetElementAt(e.x,e.y,e.z+1),Yr.pz]),t(i,[this.tryGetElementAt(e.x,e.y,e.z-1),Yr.nz]),i}tryGetElementAt(e,t,i){return e>=0&&e<this.instances.length&&t>=0&&t<this.instances[e].length&&i>=0&&i<this.instances[e][t].length?this.instances[e][t][i]:null}getNextDirtyElement(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let i=0;i<this.instances[e][t].length;++i){const r=this.instances[e][t][i];if(r.dirty)return r}return null}validataSolved(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let i=0;i<this.instances[e][t].length;++i)if(this.instances[e][t][i].enthropy>1)return!1;return!0}cloneState(){return this.instances.map(e=>e.map(t=>t.map(i=>i.clone())))}replaceState(e){this.instances=e.map(t=>t.map(i=>i.map(r=>r.clone())))}};je(Mi,"MAX_HORIZONTAL",15),je(Mi,"MAX_VERTICAL",9);let Ka=Mi;var Sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Yc.exports;(function(n,e){(function(){var t,i="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",p=1,m=2,_=4,y=1,x=2,v=1,w=2,T=4,F=8,I=16,P=32,B=64,j=128,C=256,U=512,X=30,Y="...",Fe=800,Ae=16,q=1,xe=2,Q=3,ee=1/0,Z=9007199254740991,se=17976931348623157e292,de=0/0,Ee=4294967295,Se=Ee-1,Pe=Ee>>>1,ke=[["ary",j],["bind",v],["bindKey",w],["curry",F],["curryRight",I],["flip",U],["partial",P],["partialRight",B],["rearg",C]],We="[object Arguments]",oe="[object Array]",te="[object AsyncFunction]",ye="[object Boolean]",ce="[object Date]",ue="[object DOMException]",He="[object Error]",R="[object Function]",O="[object GeneratorFunction]",k="[object Map]",J="[object Number]",le="[object Null]",he="[object Object]",Re="[object Promise]",_e="[object Proxy]",Le="[object RegExp]",me="[object Set]",A="[object String]",S="[object Symbol]",W="[object Undefined]",ie="[object WeakMap]",pe="[object WeakSet]",Me="[object ArrayBuffer]",ze="[object DataView]",L="[object Float32Array]",ge="[object Float64Array]",Ie="[object Int8Array]",De="[object Int16Array]",z="[object Int32Array]",Oe="[object Uint8Array]",Ce="[object Uint8ClampedArray]",$e="[object Uint16Array]",Be="[object Uint32Array]",Xe=/\b__p \+= '';/g,Ne=/\b(__p \+=) '' \+/g,et=/(__e\(.*?\)|\b__t\)) \+\n'';/g,bt=/&(?:amp|lt|gt|quot|#39);/g,wt=/[&<>"']/g,cn=RegExp(bt.source),Zn=RegExp(wt.source),ll=/<%-([\s\S]+?)%>/g,bu=/<%([\s\S]+?)%>/g,ls=/<%=([\s\S]+?)%>/g,wu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qo=/^\w*$/,cl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ea=/[\\^$.*+?()[\]{}|]/g,Su=RegExp(ea.source),ta=/^\s+/,D=/\s/,K=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,re=/,? & /,we=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Qe=/[()=,{}\[\]\/\s]/,rt=/\\(\\)?/g,ct=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ot=/\w*$/,St=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,xt=/^\[object .+?Constructor\]$/,Nt=/^0o[0-7]+$/i,Zi=/^(?:0|[1-9]\d*)$/,Er=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,di=/($^)/,Jn=/['\n\r\u2028\u2029\\]/g,_t="\\ud800-\\udfff",Tr="\\u0300-\\u036f",Gt="\\ufe20-\\ufe2f",Qn="\\u20d0-\\u20ff",pi=Tr+Gt+Qn,Ar="\\u2700-\\u27bf",$s="a-z\\xdf-\\xf6\\xf8-\\xff",un="\\xac\\xb1\\xd7\\xf7",cs="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",na="\\u2000-\\u206f",ei=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Kd="A-Z\\xc0-\\xd6\\xd8-\\xde",Zd="\\ufe0e\\ufe0f",Jd=un+cs+na+ei,Mu="['’]",Wx="["+_t+"]",Qd="["+Jd+"]",ul="["+pi+"]",ep="\\d+",$x="["+Ar+"]",tp="["+$s+"]",np="[^"+_t+Jd+ep+Ar+$s+Kd+"]",Eu="\\ud83c[\\udffb-\\udfff]",jx="(?:"+ul+"|"+Eu+")",ip="[^"+_t+"]",Tu="(?:\\ud83c[\\udde6-\\uddff]){2}",Au="[\\ud800-\\udbff][\\udc00-\\udfff]",js="["+Kd+"]",rp="\\u200d",sp="(?:"+tp+"|"+np+")",qx="(?:"+js+"|"+np+")",op="(?:"+Mu+"(?:d|ll|m|re|s|t|ve))?",ap="(?:"+Mu+"(?:D|LL|M|RE|S|T|VE))?",lp=jx+"?",cp="["+Zd+"]?",Xx="(?:"+rp+"(?:"+[ip,Tu,Au].join("|")+")"+cp+lp+")*",Yx="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Kx="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",up=cp+lp+Xx,Zx="(?:"+[$x,Tu,Au].join("|")+")"+up,Jx="(?:"+[ip+ul+"?",ul,Tu,Au,Wx].join("|")+")",Qx=RegExp(Mu,"g"),ey=RegExp(ul,"g"),Cu=RegExp(Eu+"(?="+Eu+")|"+Jx+up,"g"),ty=RegExp([js+"?"+tp+"+"+op+"(?="+[Qd,js,"$"].join("|")+")",qx+"+"+ap+"(?="+[Qd,js+sp,"$"].join("|")+")",js+"?"+sp+"+"+op,js+"+"+ap,Kx,Yx,ep,Zx].join("|"),"g"),ny=RegExp("["+rp+_t+pi+Zd+"]"),iy=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ry=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],sy=-1,Dt={};Dt[L]=Dt[ge]=Dt[Ie]=Dt[De]=Dt[z]=Dt[Oe]=Dt[Ce]=Dt[$e]=Dt[Be]=!0,Dt[We]=Dt[oe]=Dt[Me]=Dt[ye]=Dt[ze]=Dt[ce]=Dt[He]=Dt[R]=Dt[k]=Dt[J]=Dt[he]=Dt[Le]=Dt[me]=Dt[A]=Dt[ie]=!1;var It={};It[We]=It[oe]=It[Me]=It[ze]=It[ye]=It[ce]=It[L]=It[ge]=It[Ie]=It[De]=It[z]=It[k]=It[J]=It[he]=It[Le]=It[me]=It[A]=It[S]=It[Oe]=It[Ce]=It[$e]=It[Be]=!0,It[He]=It[R]=It[ie]=!1;var oy={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ay={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ly={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},cy={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},uy=parseFloat,fy=parseInt,fp=typeof Sa=="object"&&Sa&&Sa.Object===Object&&Sa,hy=typeof self=="object"&&self&&self.Object===Object&&self,fn=fp||hy||Function("return this")(),Lu=e&&!e.nodeType&&e,us=Lu&&!0&&n&&!n.nodeType&&n,hp=us&&us.exports===Lu,Pu=hp&&fp.process,ti=function(){try{var G=us&&us.require&&us.require("util").types;return G||Pu&&Pu.binding&&Pu.binding("util")}catch{}}(),dp=ti&&ti.isArrayBuffer,pp=ti&&ti.isDate,mp=ti&&ti.isMap,gp=ti&&ti.isRegExp,_p=ti&&ti.isSet,vp=ti&&ti.isTypedArray;function Vn(G,fe,ne){switch(ne.length){case 0:return G.call(fe);case 1:return G.call(fe,ne[0]);case 2:return G.call(fe,ne[0],ne[1]);case 3:return G.call(fe,ne[0],ne[1],ne[2])}return G.apply(fe,ne)}function dy(G,fe,ne,Ge){for(var it=-1,Mt=G==null?0:G.length;++it<Mt;){var Qt=G[it];fe(Ge,Qt,ne(Qt),G)}return Ge}function ni(G,fe){for(var ne=-1,Ge=G==null?0:G.length;++ne<Ge&&fe(G[ne],ne,G)!==!1;);return G}function py(G,fe){for(var ne=G==null?0:G.length;ne--&&fe(G[ne],ne,G)!==!1;);return G}function xp(G,fe){for(var ne=-1,Ge=G==null?0:G.length;++ne<Ge;)if(!fe(G[ne],ne,G))return!1;return!0}function Cr(G,fe){for(var ne=-1,Ge=G==null?0:G.length,it=0,Mt=[];++ne<Ge;){var Qt=G[ne];fe(Qt,ne,G)&&(Mt[it++]=Qt)}return Mt}function fl(G,fe){var ne=G==null?0:G.length;return!!ne&&qs(G,fe,0)>-1}function Ru(G,fe,ne){for(var Ge=-1,it=G==null?0:G.length;++Ge<it;)if(ne(fe,G[Ge]))return!0;return!1}function zt(G,fe){for(var ne=-1,Ge=G==null?0:G.length,it=Array(Ge);++ne<Ge;)it[ne]=fe(G[ne],ne,G);return it}function Lr(G,fe){for(var ne=-1,Ge=fe.length,it=G.length;++ne<Ge;)G[it+ne]=fe[ne];return G}function Iu(G,fe,ne,Ge){var it=-1,Mt=G==null?0:G.length;for(Ge&&Mt&&(ne=G[++it]);++it<Mt;)ne=fe(ne,G[it],it,G);return ne}function my(G,fe,ne,Ge){var it=G==null?0:G.length;for(Ge&&it&&(ne=G[--it]);it--;)ne=fe(ne,G[it],it,G);return ne}function Du(G,fe){for(var ne=-1,Ge=G==null?0:G.length;++ne<Ge;)if(fe(G[ne],ne,G))return!0;return!1}var gy=Ou("length");function _y(G){return G.split("")}function vy(G){return G.match(we)||[]}function yp(G,fe,ne){var Ge;return ne(G,function(it,Mt,Qt){if(fe(it,Mt,Qt))return Ge=Mt,!1}),Ge}function hl(G,fe,ne,Ge){for(var it=G.length,Mt=ne+(Ge?1:-1);Ge?Mt--:++Mt<it;)if(fe(G[Mt],Mt,G))return Mt;return-1}function qs(G,fe,ne){return fe===fe?Py(G,fe,ne):hl(G,bp,ne)}function xy(G,fe,ne,Ge){for(var it=ne-1,Mt=G.length;++it<Mt;)if(Ge(G[it],fe))return it;return-1}function bp(G){return G!==G}function wp(G,fe){var ne=G==null?0:G.length;return ne?Nu(G,fe)/ne:de}function Ou(G){return function(fe){return fe==null?t:fe[G]}}function Fu(G){return function(fe){return G==null?t:G[fe]}}function Sp(G,fe,ne,Ge,it){return it(G,function(Mt,Qt,Lt){ne=Ge?(Ge=!1,Mt):fe(ne,Mt,Qt,Lt)}),ne}function yy(G,fe){var ne=G.length;for(G.sort(fe);ne--;)G[ne]=G[ne].value;return G}function Nu(G,fe){for(var ne,Ge=-1,it=G.length;++Ge<it;){var Mt=fe(G[Ge]);Mt!==t&&(ne=ne===t?Mt:ne+Mt)}return ne}function zu(G,fe){for(var ne=-1,Ge=Array(G);++ne<G;)Ge[ne]=fe(ne);return Ge}function by(G,fe){return zt(fe,function(ne){return[ne,G[ne]]})}function Mp(G){return G&&G.slice(0,Cp(G)+1).replace(ta,"")}function kn(G){return function(fe){return G(fe)}}function Bu(G,fe){return zt(fe,function(ne){return G[ne]})}function ia(G,fe){return G.has(fe)}function Ep(G,fe){for(var ne=-1,Ge=G.length;++ne<Ge&&qs(fe,G[ne],0)>-1;);return ne}function Tp(G,fe){for(var ne=G.length;ne--&&qs(fe,G[ne],0)>-1;);return ne}function wy(G,fe){for(var ne=G.length,Ge=0;ne--;)G[ne]===fe&&++Ge;return Ge}var Sy=Fu(oy),My=Fu(ay);function Ey(G){return"\\"+cy[G]}function Ty(G,fe){return G==null?t:G[fe]}function Xs(G){return ny.test(G)}function Ay(G){return iy.test(G)}function Cy(G){for(var fe,ne=[];!(fe=G.next()).done;)ne.push(fe.value);return ne}function Uu(G){var fe=-1,ne=Array(G.size);return G.forEach(function(Ge,it){ne[++fe]=[it,Ge]}),ne}function Ap(G,fe){return function(ne){return G(fe(ne))}}function Pr(G,fe){for(var ne=-1,Ge=G.length,it=0,Mt=[];++ne<Ge;){var Qt=G[ne];(Qt===fe||Qt===d)&&(G[ne]=d,Mt[it++]=ne)}return Mt}function dl(G){var fe=-1,ne=Array(G.size);return G.forEach(function(Ge){ne[++fe]=Ge}),ne}function Ly(G){var fe=-1,ne=Array(G.size);return G.forEach(function(Ge){ne[++fe]=[Ge,Ge]}),ne}function Py(G,fe,ne){for(var Ge=ne-1,it=G.length;++Ge<it;)if(G[Ge]===fe)return Ge;return-1}function Ry(G,fe,ne){for(var Ge=ne+1;Ge--;)if(G[Ge]===fe)return Ge;return Ge}function Ys(G){return Xs(G)?Dy(G):gy(G)}function mi(G){return Xs(G)?Oy(G):_y(G)}function Cp(G){for(var fe=G.length;fe--&&D.test(G.charAt(fe)););return fe}var Iy=Fu(ly);function Dy(G){for(var fe=Cu.lastIndex=0;Cu.test(G);)++fe;return fe}function Oy(G){return G.match(Cu)||[]}function Fy(G){return G.match(ty)||[]}var Ny=function G(fe){fe=fe==null?fn:Ks.defaults(fn.Object(),fe,Ks.pick(fn,ry));var ne=fe.Array,Ge=fe.Date,it=fe.Error,Mt=fe.Function,Qt=fe.Math,Lt=fe.Object,Vu=fe.RegExp,zy=fe.String,ii=fe.TypeError,pl=ne.prototype,By=Mt.prototype,Zs=Lt.prototype,ml=fe["__core-js_shared__"],gl=By.toString,At=Zs.hasOwnProperty,Uy=0,Lp=function(){var s=/[^.]+$/.exec(ml&&ml.keys&&ml.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),_l=Zs.toString,Vy=gl.call(Lt),ky=fn._,Hy=Vu("^"+gl.call(At).replace(ea,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vl=hp?fe.Buffer:t,Rr=fe.Symbol,xl=fe.Uint8Array,Pp=vl?vl.allocUnsafe:t,yl=Ap(Lt.getPrototypeOf,Lt),Rp=Lt.create,Ip=Zs.propertyIsEnumerable,bl=pl.splice,Dp=Rr?Rr.isConcatSpreadable:t,ra=Rr?Rr.iterator:t,fs=Rr?Rr.toStringTag:t,wl=function(){try{var s=gs(Lt,"defineProperty");return s({},"",{}),s}catch{}}(),Gy=fe.clearTimeout!==fn.clearTimeout&&fe.clearTimeout,Wy=Ge&&Ge.now!==fn.Date.now&&Ge.now,$y=fe.setTimeout!==fn.setTimeout&&fe.setTimeout,Sl=Qt.ceil,Ml=Qt.floor,ku=Lt.getOwnPropertySymbols,jy=vl?vl.isBuffer:t,Op=fe.isFinite,qy=pl.join,Xy=Ap(Lt.keys,Lt),en=Qt.max,_n=Qt.min,Yy=Ge.now,Ky=fe.parseInt,Fp=Qt.random,Zy=pl.reverse,Hu=gs(fe,"DataView"),sa=gs(fe,"Map"),Gu=gs(fe,"Promise"),Js=gs(fe,"Set"),oa=gs(fe,"WeakMap"),aa=gs(Lt,"create"),El=oa&&new oa,Qs={},Jy=_s(Hu),Qy=_s(sa),eb=_s(Gu),tb=_s(Js),nb=_s(oa),Tl=Rr?Rr.prototype:t,la=Tl?Tl.valueOf:t,Np=Tl?Tl.toString:t;function M(s){if(Wt(s)&&!st(s)&&!(s instanceof mt)){if(s instanceof ri)return s;if(At.call(s,"__wrapped__"))return zm(s)}return new ri(s)}var eo=function(){function s(){}return function(a){if(!Vt(a))return{};if(Rp)return Rp(a);s.prototype=a;var f=new s;return s.prototype=t,f}}();function Al(){}function ri(s,a){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}M.templateSettings={escape:ll,evaluate:bu,interpolate:ls,variable:"",imports:{_:M}},M.prototype=Al.prototype,M.prototype.constructor=M,ri.prototype=eo(Al.prototype),ri.prototype.constructor=ri;function mt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ee,this.__views__=[]}function ib(){var s=new mt(this.__wrapped__);return s.__actions__=In(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=In(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=In(this.__views__),s}function rb(){if(this.__filtered__){var s=new mt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function sb(){var s=this.__wrapped__.value(),a=this.__dir__,f=st(s),g=a<0,b=f?s.length:0,E=_1(0,b,this.__views__),N=E.start,V=E.end,$=V-N,ve=g?V:N-1,be=this.__iteratees__,Te=be.length,Ue=0,qe=_n($,this.__takeCount__);if(!f||!g&&b==$&&qe==$)return om(s,this.__actions__);var Ke=[];e:for(;$--&&Ue<qe;){ve+=a;for(var ut=-1,Ze=s[ve];++ut<Te;){var dt=be[ut],vt=dt.iteratee,Wn=dt.type,Tn=vt(Ze);if(Wn==xe)Ze=Tn;else if(!Tn){if(Wn==q)continue e;break e}}Ke[Ue++]=Ze}return Ke}mt.prototype=eo(Al.prototype),mt.prototype.constructor=mt;function hs(s){var a=-1,f=s==null?0:s.length;for(this.clear();++a<f;){var g=s[a];this.set(g[0],g[1])}}function ob(){this.__data__=aa?aa(null):{},this.size=0}function ab(s){var a=this.has(s)&&delete this.__data__[s];return this.size-=a?1:0,a}function lb(s){var a=this.__data__;if(aa){var f=a[s];return f===u?t:f}return At.call(a,s)?a[s]:t}function cb(s){var a=this.__data__;return aa?a[s]!==t:At.call(a,s)}function ub(s,a){var f=this.__data__;return this.size+=this.has(s)?0:1,f[s]=aa&&a===t?u:a,this}hs.prototype.clear=ob,hs.prototype.delete=ab,hs.prototype.get=lb,hs.prototype.has=cb,hs.prototype.set=ub;function Ji(s){var a=-1,f=s==null?0:s.length;for(this.clear();++a<f;){var g=s[a];this.set(g[0],g[1])}}function fb(){this.__data__=[],this.size=0}function hb(s){var a=this.__data__,f=Cl(a,s);if(f<0)return!1;var g=a.length-1;return f==g?a.pop():bl.call(a,f,1),--this.size,!0}function db(s){var a=this.__data__,f=Cl(a,s);return f<0?t:a[f][1]}function pb(s){return Cl(this.__data__,s)>-1}function mb(s,a){var f=this.__data__,g=Cl(f,s);return g<0?(++this.size,f.push([s,a])):f[g][1]=a,this}Ji.prototype.clear=fb,Ji.prototype.delete=hb,Ji.prototype.get=db,Ji.prototype.has=pb,Ji.prototype.set=mb;function Qi(s){var a=-1,f=s==null?0:s.length;for(this.clear();++a<f;){var g=s[a];this.set(g[0],g[1])}}function gb(){this.size=0,this.__data__={hash:new hs,map:new(sa||Ji),string:new hs}}function _b(s){var a=Vl(this,s).delete(s);return this.size-=a?1:0,a}function vb(s){return Vl(this,s).get(s)}function xb(s){return Vl(this,s).has(s)}function yb(s,a){var f=Vl(this,s),g=f.size;return f.set(s,a),this.size+=f.size==g?0:1,this}Qi.prototype.clear=gb,Qi.prototype.delete=_b,Qi.prototype.get=vb,Qi.prototype.has=xb,Qi.prototype.set=yb;function ds(s){var a=-1,f=s==null?0:s.length;for(this.__data__=new Qi;++a<f;)this.add(s[a])}function bb(s){return this.__data__.set(s,u),this}function wb(s){return this.__data__.has(s)}ds.prototype.add=ds.prototype.push=bb,ds.prototype.has=wb;function gi(s){var a=this.__data__=new Ji(s);this.size=a.size}function Sb(){this.__data__=new Ji,this.size=0}function Mb(s){var a=this.__data__,f=a.delete(s);return this.size=a.size,f}function Eb(s){return this.__data__.get(s)}function Tb(s){return this.__data__.has(s)}function Ab(s,a){var f=this.__data__;if(f instanceof Ji){var g=f.__data__;if(!sa||g.length<r-1)return g.push([s,a]),this.size=++f.size,this;f=this.__data__=new Qi(g)}return f.set(s,a),this.size=f.size,this}gi.prototype.clear=Sb,gi.prototype.delete=Mb,gi.prototype.get=Eb,gi.prototype.has=Tb,gi.prototype.set=Ab;function zp(s,a){var f=st(s),g=!f&&vs(s),b=!f&&!g&&Nr(s),E=!f&&!g&&!b&&ro(s),N=f||g||b||E,V=N?zu(s.length,zy):[],$=V.length;for(var ve in s)(a||At.call(s,ve))&&!(N&&(ve=="length"||b&&(ve=="offset"||ve=="parent")||E&&(ve=="buffer"||ve=="byteLength"||ve=="byteOffset")||ir(ve,$)))&&V.push(ve);return V}function Bp(s){var a=s.length;return a?s[ef(0,a-1)]:t}function Cb(s,a){return kl(In(s),ps(a,0,s.length))}function Lb(s){return kl(In(s))}function Wu(s,a,f){(f!==t&&!_i(s[a],f)||f===t&&!(a in s))&&er(s,a,f)}function ca(s,a,f){var g=s[a];(!(At.call(s,a)&&_i(g,f))||f===t&&!(a in s))&&er(s,a,f)}function Cl(s,a){for(var f=s.length;f--;)if(_i(s[f][0],a))return f;return-1}function Pb(s,a,f,g){return Ir(s,function(b,E,N){a(g,b,f(b),N)}),g}function Up(s,a){return s&&zi(a,rn(a),s)}function Rb(s,a){return s&&zi(a,On(a),s)}function er(s,a,f){a=="__proto__"&&wl?wl(s,a,{configurable:!0,enumerable:!0,value:f,writable:!0}):s[a]=f}function $u(s,a){for(var f=-1,g=a.length,b=ne(g),E=s==null;++f<g;)b[f]=E?t:Tf(s,a[f]);return b}function ps(s,a,f){return s===s&&(f!==t&&(s=s<=f?s:f),a!==t&&(s=s>=a?s:a)),s}function si(s,a,f,g,b,E){var N,V=a&p,$=a&m,ve=a&_;if(f&&(N=b?f(s,g,b,E):f(s)),N!==t)return N;if(!Vt(s))return s;var be=st(s);if(be){if(N=x1(s),!V)return In(s,N)}else{var Te=vn(s),Ue=Te==R||Te==O;if(Nr(s))return cm(s,V);if(Te==he||Te==We||Ue&&!b){if(N=$||Ue?{}:Cm(s),!V)return $?l1(s,Rb(N,s)):a1(s,Up(N,s))}else{if(!It[Te])return b?s:{};N=y1(s,Te,V)}}E||(E=new gi);var qe=E.get(s);if(qe)return qe;E.set(s,N),ig(s)?s.forEach(function(Ze){N.add(si(Ze,a,f,Ze,s,E))}):tg(s)&&s.forEach(function(Ze,dt){N.set(dt,si(Ze,a,f,dt,s,E))});var Ke=ve?$?hf:ff:$?On:rn,ut=be?t:Ke(s);return ni(ut||s,function(Ze,dt){ut&&(dt=Ze,Ze=s[dt]),ca(N,dt,si(Ze,a,f,dt,s,E))}),N}function Ib(s){var a=rn(s);return function(f){return Vp(f,s,a)}}function Vp(s,a,f){var g=f.length;if(s==null)return!g;for(s=Lt(s);g--;){var b=f[g],E=a[b],N=s[b];if(N===t&&!(b in s)||!E(N))return!1}return!0}function kp(s,a,f){if(typeof s!="function")throw new ii(l);return ga(function(){s.apply(t,f)},a)}function ua(s,a,f,g){var b=-1,E=fl,N=!0,V=s.length,$=[],ve=a.length;if(!V)return $;f&&(a=zt(a,kn(f))),g?(E=Ru,N=!1):a.length>=r&&(E=ia,N=!1,a=new ds(a));e:for(;++b<V;){var be=s[b],Te=f==null?be:f(be);if(be=g||be!==0?be:0,N&&Te===Te){for(var Ue=ve;Ue--;)if(a[Ue]===Te)continue e;$.push(be)}else E(a,Te,g)||$.push(be)}return $}var Ir=pm(Ni),Hp=pm(qu,!0);function Db(s,a){var f=!0;return Ir(s,function(g,b,E){return f=!!a(g,b,E),f}),f}function Ll(s,a,f){for(var g=-1,b=s.length;++g<b;){var E=s[g],N=a(E);if(N!=null&&(V===t?N===N&&!Gn(N):f(N,V)))var V=N,$=E}return $}function Ob(s,a,f,g){var b=s.length;for(f=at(f),f<0&&(f=-f>b?0:b+f),g=g===t||g>b?b:at(g),g<0&&(g+=b),g=f>g?0:sg(g);f<g;)s[f++]=a;return s}function Gp(s,a){var f=[];return Ir(s,function(g,b,E){a(g,b,E)&&f.push(g)}),f}function hn(s,a,f,g,b){var E=-1,N=s.length;for(f||(f=w1),b||(b=[]);++E<N;){var V=s[E];a>0&&f(V)?a>1?hn(V,a-1,f,g,b):Lr(b,V):g||(b[b.length]=V)}return b}var ju=mm(),Wp=mm(!0);function Ni(s,a){return s&&ju(s,a,rn)}function qu(s,a){return s&&Wp(s,a,rn)}function Pl(s,a){return Cr(a,function(f){return rr(s[f])})}function ms(s,a){a=Or(a,s);for(var f=0,g=a.length;s!=null&&f<g;)s=s[Bi(a[f++])];return f&&f==g?s:t}function $p(s,a,f){var g=a(s);return st(s)?g:Lr(g,f(s))}function Mn(s){return s==null?s===t?W:le:fs&&fs in Lt(s)?g1(s):L1(s)}function Xu(s,a){return s>a}function Fb(s,a){return s!=null&&At.call(s,a)}function Nb(s,a){return s!=null&&a in Lt(s)}function zb(s,a,f){return s>=_n(a,f)&&s<en(a,f)}function Yu(s,a,f){for(var g=f?Ru:fl,b=s[0].length,E=s.length,N=E,V=ne(E),$=1/0,ve=[];N--;){var be=s[N];N&&a&&(be=zt(be,kn(a))),$=_n(be.length,$),V[N]=!f&&(a||b>=120&&be.length>=120)?new ds(N&&be):t}be=s[0];var Te=-1,Ue=V[0];e:for(;++Te<b&&ve.length<$;){var qe=be[Te],Ke=a?a(qe):qe;if(qe=f||qe!==0?qe:0,!(Ue?ia(Ue,Ke):g(ve,Ke,f))){for(N=E;--N;){var ut=V[N];if(!(ut?ia(ut,Ke):g(s[N],Ke,f)))continue e}Ue&&Ue.push(Ke),ve.push(qe)}}return ve}function Bb(s,a,f,g){return Ni(s,function(b,E,N){a(g,f(b),E,N)}),g}function fa(s,a,f){a=Or(a,s),s=Im(s,a);var g=s==null?s:s[Bi(ai(a))];return g==null?t:Vn(g,s,f)}function jp(s){return Wt(s)&&Mn(s)==We}function Ub(s){return Wt(s)&&Mn(s)==Me}function Vb(s){return Wt(s)&&Mn(s)==ce}function ha(s,a,f,g,b){return s===a?!0:s==null||a==null||!Wt(s)&&!Wt(a)?s!==s&&a!==a:kb(s,a,f,g,ha,b)}function kb(s,a,f,g,b,E){var N=st(s),V=st(a),$=N?oe:vn(s),ve=V?oe:vn(a);$=$==We?he:$,ve=ve==We?he:ve;var be=$==he,Te=ve==he,Ue=$==ve;if(Ue&&Nr(s)){if(!Nr(a))return!1;N=!0,be=!1}if(Ue&&!be)return E||(E=new gi),N||ro(s)?Em(s,a,f,g,b,E):p1(s,a,$,f,g,b,E);if(!(f&y)){var qe=be&&At.call(s,"__wrapped__"),Ke=Te&&At.call(a,"__wrapped__");if(qe||Ke){var ut=qe?s.value():s,Ze=Ke?a.value():a;return E||(E=new gi),b(ut,Ze,f,g,E)}}return Ue?(E||(E=new gi),m1(s,a,f,g,b,E)):!1}function Hb(s){return Wt(s)&&vn(s)==k}function Ku(s,a,f,g){var b=f.length,E=b,N=!g;if(s==null)return!E;for(s=Lt(s);b--;){var V=f[b];if(N&&V[2]?V[1]!==s[V[0]]:!(V[0]in s))return!1}for(;++b<E;){V=f[b];var $=V[0],ve=s[$],be=V[1];if(N&&V[2]){if(ve===t&&!($ in s))return!1}else{var Te=new gi;if(g)var Ue=g(ve,be,$,s,a,Te);if(!(Ue===t?ha(be,ve,y|x,g,Te):Ue))return!1}}return!0}function qp(s){if(!Vt(s)||M1(s))return!1;var a=rr(s)?Hy:xt;return a.test(_s(s))}function Gb(s){return Wt(s)&&Mn(s)==Le}function Wb(s){return Wt(s)&&vn(s)==me}function $b(s){return Wt(s)&&ql(s.length)&&!!Dt[Mn(s)]}function Xp(s){return typeof s=="function"?s:s==null?Fn:typeof s=="object"?st(s)?Zp(s[0],s[1]):Kp(s):gg(s)}function Zu(s){if(!ma(s))return Xy(s);var a=[];for(var f in Lt(s))At.call(s,f)&&f!="constructor"&&a.push(f);return a}function jb(s){if(!Vt(s))return C1(s);var a=ma(s),f=[];for(var g in s)g=="constructor"&&(a||!At.call(s,g))||f.push(g);return f}function Ju(s,a){return s<a}function Yp(s,a){var f=-1,g=Dn(s)?ne(s.length):[];return Ir(s,function(b,E,N){g[++f]=a(b,E,N)}),g}function Kp(s){var a=pf(s);return a.length==1&&a[0][2]?Pm(a[0][0],a[0][1]):function(f){return f===s||Ku(f,s,a)}}function Zp(s,a){return gf(s)&&Lm(a)?Pm(Bi(s),a):function(f){var g=Tf(f,s);return g===t&&g===a?Af(f,s):ha(a,g,y|x)}}function Rl(s,a,f,g,b){s!==a&&ju(a,function(E,N){if(b||(b=new gi),Vt(E))qb(s,a,N,f,Rl,g,b);else{var V=g?g(vf(s,N),E,N+"",s,a,b):t;V===t&&(V=E),Wu(s,N,V)}},On)}function qb(s,a,f,g,b,E,N){var V=vf(s,f),$=vf(a,f),ve=N.get($);if(ve){Wu(s,f,ve);return}var be=E?E(V,$,f+"",s,a,N):t,Te=be===t;if(Te){var Ue=st($),qe=!Ue&&Nr($),Ke=!Ue&&!qe&&ro($);be=$,Ue||qe||Ke?st(V)?be=V:$t(V)?be=In(V):qe?(Te=!1,be=cm($,!0)):Ke?(Te=!1,be=um($,!0)):be=[]:_a($)||vs($)?(be=V,vs(V)?be=og(V):(!Vt(V)||rr(V))&&(be=Cm($))):Te=!1}Te&&(N.set($,be),b(be,$,g,E,N),N.delete($)),Wu(s,f,be)}function Jp(s,a){var f=s.length;if(f)return a+=a<0?f:0,ir(a,f)?s[a]:t}function Qp(s,a,f){a.length?a=zt(a,function(E){return st(E)?function(N){return ms(N,E.length===1?E[0]:E)}:E}):a=[Fn];var g=-1;a=zt(a,kn(Ye()));var b=Yp(s,function(E,N,V){var $=zt(a,function(ve){return ve(E)});return{criteria:$,index:++g,value:E}});return yy(b,function(E,N){return o1(E,N,f)})}function Xb(s,a){return em(s,a,function(f,g){return Af(s,g)})}function em(s,a,f){for(var g=-1,b=a.length,E={};++g<b;){var N=a[g],V=ms(s,N);f(V,N)&&da(E,Or(N,s),V)}return E}function Yb(s){return function(a){return ms(a,s)}}function Qu(s,a,f,g){var b=g?xy:qs,E=-1,N=a.length,V=s;for(s===a&&(a=In(a)),f&&(V=zt(s,kn(f)));++E<N;)for(var $=0,ve=a[E],be=f?f(ve):ve;($=b(V,be,$,g))>-1;)V!==s&&bl.call(V,$,1),bl.call(s,$,1);return s}function tm(s,a){for(var f=s?a.length:0,g=f-1;f--;){var b=a[f];if(f==g||b!==E){var E=b;ir(b)?bl.call(s,b,1):rf(s,b)}}return s}function ef(s,a){return s+Ml(Fp()*(a-s+1))}function Kb(s,a,f,g){for(var b=-1,E=en(Sl((a-s)/(f||1)),0),N=ne(E);E--;)N[g?E:++b]=s,s+=f;return N}function tf(s,a){var f="";if(!s||a<1||a>Z)return f;do a%2&&(f+=s),a=Ml(a/2),a&&(s+=s);while(a);return f}function ft(s,a){return xf(Rm(s,a,Fn),s+"")}function Zb(s){return Bp(so(s))}function Jb(s,a){var f=so(s);return kl(f,ps(a,0,f.length))}function da(s,a,f,g){if(!Vt(s))return s;a=Or(a,s);for(var b=-1,E=a.length,N=E-1,V=s;V!=null&&++b<E;){var $=Bi(a[b]),ve=f;if($==="__proto__"||$==="constructor"||$==="prototype")return s;if(b!=N){var be=V[$];ve=g?g(be,$,V):t,ve===t&&(ve=Vt(be)?be:ir(a[b+1])?[]:{})}ca(V,$,ve),V=V[$]}return s}var nm=El?function(s,a){return El.set(s,a),s}:Fn,Qb=wl?function(s,a){return wl(s,"toString",{configurable:!0,enumerable:!1,value:Lf(a),writable:!0})}:Fn;function e1(s){return kl(so(s))}function oi(s,a,f){var g=-1,b=s.length;a<0&&(a=-a>b?0:b+a),f=f>b?b:f,f<0&&(f+=b),b=a>f?0:f-a>>>0,a>>>=0;for(var E=ne(b);++g<b;)E[g]=s[g+a];return E}function t1(s,a){var f;return Ir(s,function(g,b,E){return f=a(g,b,E),!f}),!!f}function Il(s,a,f){var g=0,b=s==null?g:s.length;if(typeof a=="number"&&a===a&&b<=Pe){for(;g<b;){var E=g+b>>>1,N=s[E];N!==null&&!Gn(N)&&(f?N<=a:N<a)?g=E+1:b=E}return b}return nf(s,a,Fn,f)}function nf(s,a,f,g){var b=0,E=s==null?0:s.length;if(E===0)return 0;a=f(a);for(var N=a!==a,V=a===null,$=Gn(a),ve=a===t;b<E;){var be=Ml((b+E)/2),Te=f(s[be]),Ue=Te!==t,qe=Te===null,Ke=Te===Te,ut=Gn(Te);if(N)var Ze=g||Ke;else ve?Ze=Ke&&(g||Ue):V?Ze=Ke&&Ue&&(g||!qe):$?Ze=Ke&&Ue&&!qe&&(g||!ut):qe||ut?Ze=!1:Ze=g?Te<=a:Te<a;Ze?b=be+1:E=be}return _n(E,Se)}function im(s,a){for(var f=-1,g=s.length,b=0,E=[];++f<g;){var N=s[f],V=a?a(N):N;if(!f||!_i(V,$)){var $=V;E[b++]=N===0?0:N}}return E}function rm(s){return typeof s=="number"?s:Gn(s)?de:+s}function Hn(s){if(typeof s=="string")return s;if(st(s))return zt(s,Hn)+"";if(Gn(s))return Np?Np.call(s):"";var a=s+"";return a=="0"&&1/s==-ee?"-0":a}function Dr(s,a,f){var g=-1,b=fl,E=s.length,N=!0,V=[],$=V;if(f)N=!1,b=Ru;else if(E>=r){var ve=a?null:h1(s);if(ve)return dl(ve);N=!1,b=ia,$=new ds}else $=a?[]:V;e:for(;++g<E;){var be=s[g],Te=a?a(be):be;if(be=f||be!==0?be:0,N&&Te===Te){for(var Ue=$.length;Ue--;)if($[Ue]===Te)continue e;a&&$.push(Te),V.push(be)}else b($,Te,f)||($!==V&&$.push(Te),V.push(be))}return V}function rf(s,a){return a=Or(a,s),s=Im(s,a),s==null||delete s[Bi(ai(a))]}function sm(s,a,f,g){return da(s,a,f(ms(s,a)),g)}function Dl(s,a,f,g){for(var b=s.length,E=g?b:-1;(g?E--:++E<b)&&a(s[E],E,s););return f?oi(s,g?0:E,g?E+1:b):oi(s,g?E+1:0,g?b:E)}function om(s,a){var f=s;return f instanceof mt&&(f=f.value()),Iu(a,function(g,b){return b.func.apply(b.thisArg,Lr([g],b.args))},f)}function sf(s,a,f){var g=s.length;if(g<2)return g?Dr(s[0]):[];for(var b=-1,E=ne(g);++b<g;)for(var N=s[b],V=-1;++V<g;)V!=b&&(E[b]=ua(E[b]||N,s[V],a,f));return Dr(hn(E,1),a,f)}function am(s,a,f){for(var g=-1,b=s.length,E=a.length,N={};++g<b;){var V=g<E?a[g]:t;f(N,s[g],V)}return N}function of(s){return $t(s)?s:[]}function af(s){return typeof s=="function"?s:Fn}function Or(s,a){return st(s)?s:gf(s,a)?[s]:Nm(Tt(s))}var n1=ft;function Fr(s,a,f){var g=s.length;return f=f===t?g:f,!a&&f>=g?s:oi(s,a,f)}var lm=Gy||function(s){return fn.clearTimeout(s)};function cm(s,a){if(a)return s.slice();var f=s.length,g=Pp?Pp(f):new s.constructor(f);return s.copy(g),g}function lf(s){var a=new s.constructor(s.byteLength);return new xl(a).set(new xl(s)),a}function i1(s,a){var f=a?lf(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.byteLength)}function r1(s){var a=new s.constructor(s.source,ot.exec(s));return a.lastIndex=s.lastIndex,a}function s1(s){return la?Lt(la.call(s)):{}}function um(s,a){var f=a?lf(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.length)}function fm(s,a){if(s!==a){var f=s!==t,g=s===null,b=s===s,E=Gn(s),N=a!==t,V=a===null,$=a===a,ve=Gn(a);if(!V&&!ve&&!E&&s>a||E&&N&&$&&!V&&!ve||g&&N&&$||!f&&$||!b)return 1;if(!g&&!E&&!ve&&s<a||ve&&f&&b&&!g&&!E||V&&f&&b||!N&&b||!$)return-1}return 0}function o1(s,a,f){for(var g=-1,b=s.criteria,E=a.criteria,N=b.length,V=f.length;++g<N;){var $=fm(b[g],E[g]);if($){if(g>=V)return $;var ve=f[g];return $*(ve=="desc"?-1:1)}}return s.index-a.index}function hm(s,a,f,g){for(var b=-1,E=s.length,N=f.length,V=-1,$=a.length,ve=en(E-N,0),be=ne($+ve),Te=!g;++V<$;)be[V]=a[V];for(;++b<N;)(Te||b<E)&&(be[f[b]]=s[b]);for(;ve--;)be[V++]=s[b++];return be}function dm(s,a,f,g){for(var b=-1,E=s.length,N=-1,V=f.length,$=-1,ve=a.length,be=en(E-V,0),Te=ne(be+ve),Ue=!g;++b<be;)Te[b]=s[b];for(var qe=b;++$<ve;)Te[qe+$]=a[$];for(;++N<V;)(Ue||b<E)&&(Te[qe+f[N]]=s[b++]);return Te}function In(s,a){var f=-1,g=s.length;for(a||(a=ne(g));++f<g;)a[f]=s[f];return a}function zi(s,a,f,g){var b=!f;f||(f={});for(var E=-1,N=a.length;++E<N;){var V=a[E],$=g?g(f[V],s[V],V,f,s):t;$===t&&($=s[V]),b?er(f,V,$):ca(f,V,$)}return f}function a1(s,a){return zi(s,mf(s),a)}function l1(s,a){return zi(s,Tm(s),a)}function Ol(s,a){return function(f,g){var b=st(f)?dy:Pb,E=a?a():{};return b(f,s,Ye(g,2),E)}}function to(s){return ft(function(a,f){var g=-1,b=f.length,E=b>1?f[b-1]:t,N=b>2?f[2]:t;for(E=s.length>3&&typeof E=="function"?(b--,E):t,N&&En(f[0],f[1],N)&&(E=b<3?t:E,b=1),a=Lt(a);++g<b;){var V=f[g];V&&s(a,V,g,E)}return a})}function pm(s,a){return function(f,g){if(f==null)return f;if(!Dn(f))return s(f,g);for(var b=f.length,E=a?b:-1,N=Lt(f);(a?E--:++E<b)&&g(N[E],E,N)!==!1;);return f}}function mm(s){return function(a,f,g){for(var b=-1,E=Lt(a),N=g(a),V=N.length;V--;){var $=N[s?V:++b];if(f(E[$],$,E)===!1)break}return a}}function c1(s,a,f){var g=a&v,b=pa(s);function E(){var N=this&&this!==fn&&this instanceof E?b:s;return N.apply(g?f:this,arguments)}return E}function gm(s){return function(a){a=Tt(a);var f=Xs(a)?mi(a):t,g=f?f[0]:a.charAt(0),b=f?Fr(f,1).join(""):a.slice(1);return g[s]()+b}}function no(s){return function(a){return Iu(pg(dg(a).replace(Qx,"")),s,"")}}function pa(s){return function(){var a=arguments;switch(a.length){case 0:return new s;case 1:return new s(a[0]);case 2:return new s(a[0],a[1]);case 3:return new s(a[0],a[1],a[2]);case 4:return new s(a[0],a[1],a[2],a[3]);case 5:return new s(a[0],a[1],a[2],a[3],a[4]);case 6:return new s(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new s(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var f=eo(s.prototype),g=s.apply(f,a);return Vt(g)?g:f}}function u1(s,a,f){var g=pa(s);function b(){for(var E=arguments.length,N=ne(E),V=E,$=io(b);V--;)N[V]=arguments[V];var ve=E<3&&N[0]!==$&&N[E-1]!==$?[]:Pr(N,$);if(E-=ve.length,E<f)return bm(s,a,Fl,b.placeholder,t,N,ve,t,t,f-E);var be=this&&this!==fn&&this instanceof b?g:s;return Vn(be,this,N)}return b}function _m(s){return function(a,f,g){var b=Lt(a);if(!Dn(a)){var E=Ye(f,3);a=rn(a),f=function(V){return E(b[V],V,b)}}var N=s(a,f,g);return N>-1?b[E?a[N]:N]:t}}function vm(s){return nr(function(a){var f=a.length,g=f,b=ri.prototype.thru;for(s&&a.reverse();g--;){var E=a[g];if(typeof E!="function")throw new ii(l);if(b&&!N&&Ul(E)=="wrapper")var N=new ri([],!0)}for(g=N?g:f;++g<f;){E=a[g];var V=Ul(E),$=V=="wrapper"?df(E):t;$&&_f($[0])&&$[1]==(j|F|P|C)&&!$[4].length&&$[9]==1?N=N[Ul($[0])].apply(N,$[3]):N=E.length==1&&_f(E)?N[V]():N.thru(E)}return function(){var ve=arguments,be=ve[0];if(N&&ve.length==1&&st(be))return N.plant(be).value();for(var Te=0,Ue=f?a[Te].apply(this,ve):be;++Te<f;)Ue=a[Te].call(this,Ue);return Ue}})}function Fl(s,a,f,g,b,E,N,V,$,ve){var be=a&j,Te=a&v,Ue=a&w,qe=a&(F|I),Ke=a&U,ut=Ue?t:pa(s);function Ze(){for(var dt=arguments.length,vt=ne(dt),Wn=dt;Wn--;)vt[Wn]=arguments[Wn];if(qe)var Tn=io(Ze),$n=wy(vt,Tn);if(g&&(vt=hm(vt,g,b,qe)),E&&(vt=dm(vt,E,N,qe)),dt-=$n,qe&&dt<ve){var jt=Pr(vt,Tn);return bm(s,a,Fl,Ze.placeholder,f,vt,jt,V,$,ve-dt)}var vi=Te?f:this,or=Ue?vi[s]:s;return dt=vt.length,V?vt=P1(vt,V):Ke&&dt>1&&vt.reverse(),be&&$<dt&&(vt.length=$),this&&this!==fn&&this instanceof Ze&&(or=ut||pa(or)),or.apply(vi,vt)}return Ze}function xm(s,a){return function(f,g){return Bb(f,s,a(g),{})}}function Nl(s,a){return function(f,g){var b;if(f===t&&g===t)return a;if(f!==t&&(b=f),g!==t){if(b===t)return g;typeof f=="string"||typeof g=="string"?(f=Hn(f),g=Hn(g)):(f=rm(f),g=rm(g)),b=s(f,g)}return b}}function cf(s){return nr(function(a){return a=zt(a,kn(Ye())),ft(function(f){var g=this;return s(a,function(b){return Vn(b,g,f)})})})}function zl(s,a){a=a===t?" ":Hn(a);var f=a.length;if(f<2)return f?tf(a,s):a;var g=tf(a,Sl(s/Ys(a)));return Xs(a)?Fr(mi(g),0,s).join(""):g.slice(0,s)}function f1(s,a,f,g){var b=a&v,E=pa(s);function N(){for(var V=-1,$=arguments.length,ve=-1,be=g.length,Te=ne(be+$),Ue=this&&this!==fn&&this instanceof N?E:s;++ve<be;)Te[ve]=g[ve];for(;$--;)Te[ve++]=arguments[++V];return Vn(Ue,b?f:this,Te)}return N}function ym(s){return function(a,f,g){return g&&typeof g!="number"&&En(a,f,g)&&(f=g=t),a=sr(a),f===t?(f=a,a=0):f=sr(f),g=g===t?a<f?1:-1:sr(g),Kb(a,f,g,s)}}function Bl(s){return function(a,f){return typeof a=="string"&&typeof f=="string"||(a=li(a),f=li(f)),s(a,f)}}function bm(s,a,f,g,b,E,N,V,$,ve){var be=a&F,Te=be?N:t,Ue=be?t:N,qe=be?E:t,Ke=be?t:E;a|=be?P:B,a&=~(be?B:P),a&T||(a&=~(v|w));var ut=[s,a,b,qe,Te,Ke,Ue,V,$,ve],Ze=f.apply(t,ut);return _f(s)&&Dm(Ze,ut),Ze.placeholder=g,Om(Ze,s,a)}function uf(s){var a=Qt[s];return function(f,g){if(f=li(f),g=g==null?0:_n(at(g),292),g&&Op(f)){var b=(Tt(f)+"e").split("e"),E=a(b[0]+"e"+(+b[1]+g));return b=(Tt(E)+"e").split("e"),+(b[0]+"e"+(+b[1]-g))}return a(f)}}var h1=Js&&1/dl(new Js([,-0]))[1]==ee?function(s){return new Js(s)}:If;function wm(s){return function(a){var f=vn(a);return f==k?Uu(a):f==me?Ly(a):by(a,s(a))}}function tr(s,a,f,g,b,E,N,V){var $=a&w;if(!$&&typeof s!="function")throw new ii(l);var ve=g?g.length:0;if(ve||(a&=~(P|B),g=b=t),N=N===t?N:en(at(N),0),V=V===t?V:at(V),ve-=b?b.length:0,a&B){var be=g,Te=b;g=b=t}var Ue=$?t:df(s),qe=[s,a,f,g,b,be,Te,E,N,V];if(Ue&&A1(qe,Ue),s=qe[0],a=qe[1],f=qe[2],g=qe[3],b=qe[4],V=qe[9]=qe[9]===t?$?0:s.length:en(qe[9]-ve,0),!V&&a&(F|I)&&(a&=~(F|I)),!a||a==v)var Ke=c1(s,a,f);else a==F||a==I?Ke=u1(s,a,V):(a==P||a==(v|P))&&!b.length?Ke=f1(s,a,f,g):Ke=Fl.apply(t,qe);var ut=Ue?nm:Dm;return Om(ut(Ke,qe),s,a)}function Sm(s,a,f,g){return s===t||_i(s,Zs[f])&&!At.call(g,f)?a:s}function Mm(s,a,f,g,b,E){return Vt(s)&&Vt(a)&&(E.set(a,s),Rl(s,a,t,Mm,E),E.delete(a)),s}function d1(s){return _a(s)?t:s}function Em(s,a,f,g,b,E){var N=f&y,V=s.length,$=a.length;if(V!=$&&!(N&&$>V))return!1;var ve=E.get(s),be=E.get(a);if(ve&&be)return ve==a&&be==s;var Te=-1,Ue=!0,qe=f&x?new ds:t;for(E.set(s,a),E.set(a,s);++Te<V;){var Ke=s[Te],ut=a[Te];if(g)var Ze=N?g(ut,Ke,Te,a,s,E):g(Ke,ut,Te,s,a,E);if(Ze!==t){if(Ze)continue;Ue=!1;break}if(qe){if(!Du(a,function(dt,vt){if(!ia(qe,vt)&&(Ke===dt||b(Ke,dt,f,g,E)))return qe.push(vt)})){Ue=!1;break}}else if(!(Ke===ut||b(Ke,ut,f,g,E))){Ue=!1;break}}return E.delete(s),E.delete(a),Ue}function p1(s,a,f,g,b,E,N){switch(f){case ze:if(s.byteLength!=a.byteLength||s.byteOffset!=a.byteOffset)return!1;s=s.buffer,a=a.buffer;case Me:return!(s.byteLength!=a.byteLength||!E(new xl(s),new xl(a)));case ye:case ce:case J:return _i(+s,+a);case He:return s.name==a.name&&s.message==a.message;case Le:case A:return s==a+"";case k:var V=Uu;case me:var $=g&y;if(V||(V=dl),s.size!=a.size&&!$)return!1;var ve=N.get(s);if(ve)return ve==a;g|=x,N.set(s,a);var be=Em(V(s),V(a),g,b,E,N);return N.delete(s),be;case S:if(la)return la.call(s)==la.call(a)}return!1}function m1(s,a,f,g,b,E){var N=f&y,V=ff(s),$=V.length,ve=ff(a),be=ve.length;if($!=be&&!N)return!1;for(var Te=$;Te--;){var Ue=V[Te];if(!(N?Ue in a:At.call(a,Ue)))return!1}var qe=E.get(s),Ke=E.get(a);if(qe&&Ke)return qe==a&&Ke==s;var ut=!0;E.set(s,a),E.set(a,s);for(var Ze=N;++Te<$;){Ue=V[Te];var dt=s[Ue],vt=a[Ue];if(g)var Wn=N?g(vt,dt,Ue,a,s,E):g(dt,vt,Ue,s,a,E);if(!(Wn===t?dt===vt||b(dt,vt,f,g,E):Wn)){ut=!1;break}Ze||(Ze=Ue=="constructor")}if(ut&&!Ze){var Tn=s.constructor,$n=a.constructor;Tn!=$n&&"constructor"in s&&"constructor"in a&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof $n=="function"&&$n instanceof $n)&&(ut=!1)}return E.delete(s),E.delete(a),ut}function nr(s){return xf(Rm(s,t,Vm),s+"")}function ff(s){return $p(s,rn,mf)}function hf(s){return $p(s,On,Tm)}var df=El?function(s){return El.get(s)}:If;function Ul(s){for(var a=s.name+"",f=Qs[a],g=At.call(Qs,a)?f.length:0;g--;){var b=f[g],E=b.func;if(E==null||E==s)return b.name}return a}function io(s){var a=At.call(M,"placeholder")?M:s;return a.placeholder}function Ye(){var s=M.iteratee||Pf;return s=s===Pf?Xp:s,arguments.length?s(arguments[0],arguments[1]):s}function Vl(s,a){var f=s.__data__;return S1(a)?f[typeof a=="string"?"string":"hash"]:f.map}function pf(s){for(var a=rn(s),f=a.length;f--;){var g=a[f],b=s[g];a[f]=[g,b,Lm(b)]}return a}function gs(s,a){var f=Ty(s,a);return qp(f)?f:t}function g1(s){var a=At.call(s,fs),f=s[fs];try{s[fs]=t;var g=!0}catch{}var b=_l.call(s);return g&&(a?s[fs]=f:delete s[fs]),b}var mf=ku?function(s){return s==null?[]:(s=Lt(s),Cr(ku(s),function(a){return Ip.call(s,a)}))}:Df,Tm=ku?function(s){for(var a=[];s;)Lr(a,mf(s)),s=yl(s);return a}:Df,vn=Mn;(Hu&&vn(new Hu(new ArrayBuffer(1)))!=ze||sa&&vn(new sa)!=k||Gu&&vn(Gu.resolve())!=Re||Js&&vn(new Js)!=me||oa&&vn(new oa)!=ie)&&(vn=function(s){var a=Mn(s),f=a==he?s.constructor:t,g=f?_s(f):"";if(g)switch(g){case Jy:return ze;case Qy:return k;case eb:return Re;case tb:return me;case nb:return ie}return a});function _1(s,a,f){for(var g=-1,b=f.length;++g<b;){var E=f[g],N=E.size;switch(E.type){case"drop":s+=N;break;case"dropRight":a-=N;break;case"take":a=_n(a,s+N);break;case"takeRight":s=en(s,a-N);break}}return{start:s,end:a}}function v1(s){var a=s.match(ae);return a?a[1].split(re):[]}function Am(s,a,f){a=Or(a,s);for(var g=-1,b=a.length,E=!1;++g<b;){var N=Bi(a[g]);if(!(E=s!=null&&f(s,N)))break;s=s[N]}return E||++g!=b?E:(b=s==null?0:s.length,!!b&&ql(b)&&ir(N,b)&&(st(s)||vs(s)))}function x1(s){var a=s.length,f=new s.constructor(a);return a&&typeof s[0]=="string"&&At.call(s,"index")&&(f.index=s.index,f.input=s.input),f}function Cm(s){return typeof s.constructor=="function"&&!ma(s)?eo(yl(s)):{}}function y1(s,a,f){var g=s.constructor;switch(a){case Me:return lf(s);case ye:case ce:return new g(+s);case ze:return i1(s,f);case L:case ge:case Ie:case De:case z:case Oe:case Ce:case $e:case Be:return um(s,f);case k:return new g;case J:case A:return new g(s);case Le:return r1(s);case me:return new g;case S:return s1(s)}}function b1(s,a){var f=a.length;if(!f)return s;var g=f-1;return a[g]=(f>1?"& ":"")+a[g],a=a.join(f>2?", ":" "),s.replace(K,`{
/* [wrapped with `+a+`] */
`)}function w1(s){return st(s)||vs(s)||!!(Dp&&s&&s[Dp])}function ir(s,a){var f=typeof s;return a=a??Z,!!a&&(f=="number"||f!="symbol"&&Zi.test(s))&&s>-1&&s%1==0&&s<a}function En(s,a,f){if(!Vt(f))return!1;var g=typeof a;return(g=="number"?Dn(f)&&ir(a,f.length):g=="string"&&a in f)?_i(f[a],s):!1}function gf(s,a){if(st(s))return!1;var f=typeof s;return f=="number"||f=="symbol"||f=="boolean"||s==null||Gn(s)?!0:Qo.test(s)||!wu.test(s)||a!=null&&s in Lt(a)}function S1(s){var a=typeof s;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?s!=="__proto__":s===null}function _f(s){var a=Ul(s),f=M[a];if(typeof f!="function"||!(a in mt.prototype))return!1;if(s===f)return!0;var g=df(f);return!!g&&s===g[0]}function M1(s){return!!Lp&&Lp in s}var E1=ml?rr:Of;function ma(s){var a=s&&s.constructor,f=typeof a=="function"&&a.prototype||Zs;return s===f}function Lm(s){return s===s&&!Vt(s)}function Pm(s,a){return function(f){return f==null?!1:f[s]===a&&(a!==t||s in Lt(f))}}function T1(s){var a=$l(s,function(g){return f.size===h&&f.clear(),g}),f=a.cache;return a}function A1(s,a){var f=s[1],g=a[1],b=f|g,E=b<(v|w|j),N=g==j&&f==F||g==j&&f==C&&s[7].length<=a[8]||g==(j|C)&&a[7].length<=a[8]&&f==F;if(!(E||N))return s;g&v&&(s[2]=a[2],b|=f&v?0:T);var V=a[3];if(V){var $=s[3];s[3]=$?hm($,V,a[4]):V,s[4]=$?Pr(s[3],d):a[4]}return V=a[5],V&&($=s[5],s[5]=$?dm($,V,a[6]):V,s[6]=$?Pr(s[5],d):a[6]),V=a[7],V&&(s[7]=V),g&j&&(s[8]=s[8]==null?a[8]:_n(s[8],a[8])),s[9]==null&&(s[9]=a[9]),s[0]=a[0],s[1]=b,s}function C1(s){var a=[];if(s!=null)for(var f in Lt(s))a.push(f);return a}function L1(s){return _l.call(s)}function Rm(s,a,f){return a=en(a===t?s.length-1:a,0),function(){for(var g=arguments,b=-1,E=en(g.length-a,0),N=ne(E);++b<E;)N[b]=g[a+b];b=-1;for(var V=ne(a+1);++b<a;)V[b]=g[b];return V[a]=f(N),Vn(s,this,V)}}function Im(s,a){return a.length<2?s:ms(s,oi(a,0,-1))}function P1(s,a){for(var f=s.length,g=_n(a.length,f),b=In(s);g--;){var E=a[g];s[g]=ir(E,f)?b[E]:t}return s}function vf(s,a){if(!(a==="constructor"&&typeof s[a]=="function")&&a!="__proto__")return s[a]}var Dm=Fm(nm),ga=$y||function(s,a){return fn.setTimeout(s,a)},xf=Fm(Qb);function Om(s,a,f){var g=a+"";return xf(s,b1(g,R1(v1(g),f)))}function Fm(s){var a=0,f=0;return function(){var g=Yy(),b=Ae-(g-f);if(f=g,b>0){if(++a>=Fe)return arguments[0]}else a=0;return s.apply(t,arguments)}}function kl(s,a){var f=-1,g=s.length,b=g-1;for(a=a===t?g:a;++f<a;){var E=ef(f,b),N=s[E];s[E]=s[f],s[f]=N}return s.length=a,s}var Nm=T1(function(s){var a=[];return s.charCodeAt(0)===46&&a.push(""),s.replace(cl,function(f,g,b,E){a.push(b?E.replace(rt,"$1"):g||f)}),a});function Bi(s){if(typeof s=="string"||Gn(s))return s;var a=s+"";return a=="0"&&1/s==-ee?"-0":a}function _s(s){if(s!=null){try{return gl.call(s)}catch{}try{return s+""}catch{}}return""}function R1(s,a){return ni(ke,function(f){var g="_."+f[0];a&f[1]&&!fl(s,g)&&s.push(g)}),s.sort()}function zm(s){if(s instanceof mt)return s.clone();var a=new ri(s.__wrapped__,s.__chain__);return a.__actions__=In(s.__actions__),a.__index__=s.__index__,a.__values__=s.__values__,a}function I1(s,a,f){(f?En(s,a,f):a===t)?a=1:a=en(at(a),0);var g=s==null?0:s.length;if(!g||a<1)return[];for(var b=0,E=0,N=ne(Sl(g/a));b<g;)N[E++]=oi(s,b,b+=a);return N}function D1(s){for(var a=-1,f=s==null?0:s.length,g=0,b=[];++a<f;){var E=s[a];E&&(b[g++]=E)}return b}function O1(){var s=arguments.length;if(!s)return[];for(var a=ne(s-1),f=arguments[0],g=s;g--;)a[g-1]=arguments[g];return Lr(st(f)?In(f):[f],hn(a,1))}var F1=ft(function(s,a){return $t(s)?ua(s,hn(a,1,$t,!0)):[]}),N1=ft(function(s,a){var f=ai(a);return $t(f)&&(f=t),$t(s)?ua(s,hn(a,1,$t,!0),Ye(f,2)):[]}),z1=ft(function(s,a){var f=ai(a);return $t(f)&&(f=t),$t(s)?ua(s,hn(a,1,$t,!0),t,f):[]});function B1(s,a,f){var g=s==null?0:s.length;return g?(a=f||a===t?1:at(a),oi(s,a<0?0:a,g)):[]}function U1(s,a,f){var g=s==null?0:s.length;return g?(a=f||a===t?1:at(a),a=g-a,oi(s,0,a<0?0:a)):[]}function V1(s,a){return s&&s.length?Dl(s,Ye(a,3),!0,!0):[]}function k1(s,a){return s&&s.length?Dl(s,Ye(a,3),!0):[]}function H1(s,a,f,g){var b=s==null?0:s.length;return b?(f&&typeof f!="number"&&En(s,a,f)&&(f=0,g=b),Ob(s,a,f,g)):[]}function Bm(s,a,f){var g=s==null?0:s.length;if(!g)return-1;var b=f==null?0:at(f);return b<0&&(b=en(g+b,0)),hl(s,Ye(a,3),b)}function Um(s,a,f){var g=s==null?0:s.length;if(!g)return-1;var b=g-1;return f!==t&&(b=at(f),b=f<0?en(g+b,0):_n(b,g-1)),hl(s,Ye(a,3),b,!0)}function Vm(s){var a=s==null?0:s.length;return a?hn(s,1):[]}function G1(s){var a=s==null?0:s.length;return a?hn(s,ee):[]}function W1(s,a){var f=s==null?0:s.length;return f?(a=a===t?1:at(a),hn(s,a)):[]}function $1(s){for(var a=-1,f=s==null?0:s.length,g={};++a<f;){var b=s[a];g[b[0]]=b[1]}return g}function km(s){return s&&s.length?s[0]:t}function j1(s,a,f){var g=s==null?0:s.length;if(!g)return-1;var b=f==null?0:at(f);return b<0&&(b=en(g+b,0)),qs(s,a,b)}function q1(s){var a=s==null?0:s.length;return a?oi(s,0,-1):[]}var X1=ft(function(s){var a=zt(s,of);return a.length&&a[0]===s[0]?Yu(a):[]}),Y1=ft(function(s){var a=ai(s),f=zt(s,of);return a===ai(f)?a=t:f.pop(),f.length&&f[0]===s[0]?Yu(f,Ye(a,2)):[]}),K1=ft(function(s){var a=ai(s),f=zt(s,of);return a=typeof a=="function"?a:t,a&&f.pop(),f.length&&f[0]===s[0]?Yu(f,t,a):[]});function Z1(s,a){return s==null?"":qy.call(s,a)}function ai(s){var a=s==null?0:s.length;return a?s[a-1]:t}function J1(s,a,f){var g=s==null?0:s.length;if(!g)return-1;var b=g;return f!==t&&(b=at(f),b=b<0?en(g+b,0):_n(b,g-1)),a===a?Ry(s,a,b):hl(s,bp,b,!0)}function Q1(s,a){return s&&s.length?Jp(s,at(a)):t}var ew=ft(Hm);function Hm(s,a){return s&&s.length&&a&&a.length?Qu(s,a):s}function tw(s,a,f){return s&&s.length&&a&&a.length?Qu(s,a,Ye(f,2)):s}function nw(s,a,f){return s&&s.length&&a&&a.length?Qu(s,a,t,f):s}var iw=nr(function(s,a){var f=s==null?0:s.length,g=$u(s,a);return tm(s,zt(a,function(b){return ir(b,f)?+b:b}).sort(fm)),g});function rw(s,a){var f=[];if(!(s&&s.length))return f;var g=-1,b=[],E=s.length;for(a=Ye(a,3);++g<E;){var N=s[g];a(N,g,s)&&(f.push(N),b.push(g))}return tm(s,b),f}function yf(s){return s==null?s:Zy.call(s)}function sw(s,a,f){var g=s==null?0:s.length;return g?(f&&typeof f!="number"&&En(s,a,f)?(a=0,f=g):(a=a==null?0:at(a),f=f===t?g:at(f)),oi(s,a,f)):[]}function ow(s,a){return Il(s,a)}function aw(s,a,f){return nf(s,a,Ye(f,2))}function lw(s,a){var f=s==null?0:s.length;if(f){var g=Il(s,a);if(g<f&&_i(s[g],a))return g}return-1}function cw(s,a){return Il(s,a,!0)}function uw(s,a,f){return nf(s,a,Ye(f,2),!0)}function fw(s,a){var f=s==null?0:s.length;if(f){var g=Il(s,a,!0)-1;if(_i(s[g],a))return g}return-1}function hw(s){return s&&s.length?im(s):[]}function dw(s,a){return s&&s.length?im(s,Ye(a,2)):[]}function pw(s){var a=s==null?0:s.length;return a?oi(s,1,a):[]}function mw(s,a,f){return s&&s.length?(a=f||a===t?1:at(a),oi(s,0,a<0?0:a)):[]}function gw(s,a,f){var g=s==null?0:s.length;return g?(a=f||a===t?1:at(a),a=g-a,oi(s,a<0?0:a,g)):[]}function _w(s,a){return s&&s.length?Dl(s,Ye(a,3),!1,!0):[]}function vw(s,a){return s&&s.length?Dl(s,Ye(a,3)):[]}var xw=ft(function(s){return Dr(hn(s,1,$t,!0))}),yw=ft(function(s){var a=ai(s);return $t(a)&&(a=t),Dr(hn(s,1,$t,!0),Ye(a,2))}),bw=ft(function(s){var a=ai(s);return a=typeof a=="function"?a:t,Dr(hn(s,1,$t,!0),t,a)});function ww(s){return s&&s.length?Dr(s):[]}function Sw(s,a){return s&&s.length?Dr(s,Ye(a,2)):[]}function Mw(s,a){return a=typeof a=="function"?a:t,s&&s.length?Dr(s,t,a):[]}function bf(s){if(!(s&&s.length))return[];var a=0;return s=Cr(s,function(f){if($t(f))return a=en(f.length,a),!0}),zu(a,function(f){return zt(s,Ou(f))})}function Gm(s,a){if(!(s&&s.length))return[];var f=bf(s);return a==null?f:zt(f,function(g){return Vn(a,t,g)})}var Ew=ft(function(s,a){return $t(s)?ua(s,a):[]}),Tw=ft(function(s){return sf(Cr(s,$t))}),Aw=ft(function(s){var a=ai(s);return $t(a)&&(a=t),sf(Cr(s,$t),Ye(a,2))}),Cw=ft(function(s){var a=ai(s);return a=typeof a=="function"?a:t,sf(Cr(s,$t),t,a)}),Lw=ft(bf);function Pw(s,a){return am(s||[],a||[],ca)}function Rw(s,a){return am(s||[],a||[],da)}var Iw=ft(function(s){var a=s.length,f=a>1?s[a-1]:t;return f=typeof f=="function"?(s.pop(),f):t,Gm(s,f)});function Wm(s){var a=M(s);return a.__chain__=!0,a}function Dw(s,a){return a(s),s}function Hl(s,a){return a(s)}var Ow=nr(function(s){var a=s.length,f=a?s[0]:0,g=this.__wrapped__,b=function(E){return $u(E,s)};return a>1||this.__actions__.length||!(g instanceof mt)||!ir(f)?this.thru(b):(g=g.slice(f,+f+(a?1:0)),g.__actions__.push({func:Hl,args:[b],thisArg:t}),new ri(g,this.__chain__).thru(function(E){return a&&!E.length&&E.push(t),E}))});function Fw(){return Wm(this)}function Nw(){return new ri(this.value(),this.__chain__)}function zw(){this.__values__===t&&(this.__values__=rg(this.value()));var s=this.__index__>=this.__values__.length,a=s?t:this.__values__[this.__index__++];return{done:s,value:a}}function Bw(){return this}function Uw(s){for(var a,f=this;f instanceof Al;){var g=zm(f);g.__index__=0,g.__values__=t,a?b.__wrapped__=g:a=g;var b=g;f=f.__wrapped__}return b.__wrapped__=s,a}function Vw(){var s=this.__wrapped__;if(s instanceof mt){var a=s;return this.__actions__.length&&(a=new mt(this)),a=a.reverse(),a.__actions__.push({func:Hl,args:[yf],thisArg:t}),new ri(a,this.__chain__)}return this.thru(yf)}function kw(){return om(this.__wrapped__,this.__actions__)}var Hw=Ol(function(s,a,f){At.call(s,f)?++s[f]:er(s,f,1)});function Gw(s,a,f){var g=st(s)?xp:Db;return f&&En(s,a,f)&&(a=t),g(s,Ye(a,3))}function Ww(s,a){var f=st(s)?Cr:Gp;return f(s,Ye(a,3))}var $w=_m(Bm),jw=_m(Um);function qw(s,a){return hn(Gl(s,a),1)}function Xw(s,a){return hn(Gl(s,a),ee)}function Yw(s,a,f){return f=f===t?1:at(f),hn(Gl(s,a),f)}function $m(s,a){var f=st(s)?ni:Ir;return f(s,Ye(a,3))}function jm(s,a){var f=st(s)?py:Hp;return f(s,Ye(a,3))}var Kw=Ol(function(s,a,f){At.call(s,f)?s[f].push(a):er(s,f,[a])});function Zw(s,a,f,g){s=Dn(s)?s:so(s),f=f&&!g?at(f):0;var b=s.length;return f<0&&(f=en(b+f,0)),Xl(s)?f<=b&&s.indexOf(a,f)>-1:!!b&&qs(s,a,f)>-1}var Jw=ft(function(s,a,f){var g=-1,b=typeof a=="function",E=Dn(s)?ne(s.length):[];return Ir(s,function(N){E[++g]=b?Vn(a,N,f):fa(N,a,f)}),E}),Qw=Ol(function(s,a,f){er(s,f,a)});function Gl(s,a){var f=st(s)?zt:Yp;return f(s,Ye(a,3))}function eS(s,a,f,g){return s==null?[]:(st(a)||(a=a==null?[]:[a]),f=g?t:f,st(f)||(f=f==null?[]:[f]),Qp(s,a,f))}var tS=Ol(function(s,a,f){s[f?0:1].push(a)},function(){return[[],[]]});function nS(s,a,f){var g=st(s)?Iu:Sp,b=arguments.length<3;return g(s,Ye(a,4),f,b,Ir)}function iS(s,a,f){var g=st(s)?my:Sp,b=arguments.length<3;return g(s,Ye(a,4),f,b,Hp)}function rS(s,a){var f=st(s)?Cr:Gp;return f(s,jl(Ye(a,3)))}function sS(s){var a=st(s)?Bp:Zb;return a(s)}function oS(s,a,f){(f?En(s,a,f):a===t)?a=1:a=at(a);var g=st(s)?Cb:Jb;return g(s,a)}function aS(s){var a=st(s)?Lb:e1;return a(s)}function lS(s){if(s==null)return 0;if(Dn(s))return Xl(s)?Ys(s):s.length;var a=vn(s);return a==k||a==me?s.size:Zu(s).length}function cS(s,a,f){var g=st(s)?Du:t1;return f&&En(s,a,f)&&(a=t),g(s,Ye(a,3))}var uS=ft(function(s,a){if(s==null)return[];var f=a.length;return f>1&&En(s,a[0],a[1])?a=[]:f>2&&En(a[0],a[1],a[2])&&(a=[a[0]]),Qp(s,hn(a,1),[])}),Wl=Wy||function(){return fn.Date.now()};function fS(s,a){if(typeof a!="function")throw new ii(l);return s=at(s),function(){if(--s<1)return a.apply(this,arguments)}}function qm(s,a,f){return a=f?t:a,a=s&&a==null?s.length:a,tr(s,j,t,t,t,t,a)}function Xm(s,a){var f;if(typeof a!="function")throw new ii(l);return s=at(s),function(){return--s>0&&(f=a.apply(this,arguments)),s<=1&&(a=t),f}}var wf=ft(function(s,a,f){var g=v;if(f.length){var b=Pr(f,io(wf));g|=P}return tr(s,g,a,f,b)}),Ym=ft(function(s,a,f){var g=v|w;if(f.length){var b=Pr(f,io(Ym));g|=P}return tr(a,g,s,f,b)});function Km(s,a,f){a=f?t:a;var g=tr(s,F,t,t,t,t,t,a);return g.placeholder=Km.placeholder,g}function Zm(s,a,f){a=f?t:a;var g=tr(s,I,t,t,t,t,t,a);return g.placeholder=Zm.placeholder,g}function Jm(s,a,f){var g,b,E,N,V,$,ve=0,be=!1,Te=!1,Ue=!0;if(typeof s!="function")throw new ii(l);a=li(a)||0,Vt(f)&&(be=!!f.leading,Te="maxWait"in f,E=Te?en(li(f.maxWait)||0,a):E,Ue="trailing"in f?!!f.trailing:Ue);function qe(jt){var vi=g,or=b;return g=b=t,ve=jt,N=s.apply(or,vi),N}function Ke(jt){return ve=jt,V=ga(dt,a),be?qe(jt):N}function ut(jt){var vi=jt-$,or=jt-ve,_g=a-vi;return Te?_n(_g,E-or):_g}function Ze(jt){var vi=jt-$,or=jt-ve;return $===t||vi>=a||vi<0||Te&&or>=E}function dt(){var jt=Wl();if(Ze(jt))return vt(jt);V=ga(dt,ut(jt))}function vt(jt){return V=t,Ue&&g?qe(jt):(g=b=t,N)}function Wn(){V!==t&&lm(V),ve=0,g=$=b=V=t}function Tn(){return V===t?N:vt(Wl())}function $n(){var jt=Wl(),vi=Ze(jt);if(g=arguments,b=this,$=jt,vi){if(V===t)return Ke($);if(Te)return lm(V),V=ga(dt,a),qe($)}return V===t&&(V=ga(dt,a)),N}return $n.cancel=Wn,$n.flush=Tn,$n}var hS=ft(function(s,a){return kp(s,1,a)}),dS=ft(function(s,a,f){return kp(s,li(a)||0,f)});function pS(s){return tr(s,U)}function $l(s,a){if(typeof s!="function"||a!=null&&typeof a!="function")throw new ii(l);var f=function(){var g=arguments,b=a?a.apply(this,g):g[0],E=f.cache;if(E.has(b))return E.get(b);var N=s.apply(this,g);return f.cache=E.set(b,N)||E,N};return f.cache=new($l.Cache||Qi),f}$l.Cache=Qi;function jl(s){if(typeof s!="function")throw new ii(l);return function(){var a=arguments;switch(a.length){case 0:return!s.call(this);case 1:return!s.call(this,a[0]);case 2:return!s.call(this,a[0],a[1]);case 3:return!s.call(this,a[0],a[1],a[2])}return!s.apply(this,a)}}function mS(s){return Xm(2,s)}var gS=n1(function(s,a){a=a.length==1&&st(a[0])?zt(a[0],kn(Ye())):zt(hn(a,1),kn(Ye()));var f=a.length;return ft(function(g){for(var b=-1,E=_n(g.length,f);++b<E;)g[b]=a[b].call(this,g[b]);return Vn(s,this,g)})}),Sf=ft(function(s,a){var f=Pr(a,io(Sf));return tr(s,P,t,a,f)}),Qm=ft(function(s,a){var f=Pr(a,io(Qm));return tr(s,B,t,a,f)}),_S=nr(function(s,a){return tr(s,C,t,t,t,a)});function vS(s,a){if(typeof s!="function")throw new ii(l);return a=a===t?a:at(a),ft(s,a)}function xS(s,a){if(typeof s!="function")throw new ii(l);return a=a==null?0:en(at(a),0),ft(function(f){var g=f[a],b=Fr(f,0,a);return g&&Lr(b,g),Vn(s,this,b)})}function yS(s,a,f){var g=!0,b=!0;if(typeof s!="function")throw new ii(l);return Vt(f)&&(g="leading"in f?!!f.leading:g,b="trailing"in f?!!f.trailing:b),Jm(s,a,{leading:g,maxWait:a,trailing:b})}function bS(s){return qm(s,1)}function wS(s,a){return Sf(af(a),s)}function SS(){if(!arguments.length)return[];var s=arguments[0];return st(s)?s:[s]}function MS(s){return si(s,_)}function ES(s,a){return a=typeof a=="function"?a:t,si(s,_,a)}function TS(s){return si(s,p|_)}function AS(s,a){return a=typeof a=="function"?a:t,si(s,p|_,a)}function CS(s,a){return a==null||Vp(s,a,rn(a))}function _i(s,a){return s===a||s!==s&&a!==a}var LS=Bl(Xu),PS=Bl(function(s,a){return s>=a}),vs=jp(function(){return arguments}())?jp:function(s){return Wt(s)&&At.call(s,"callee")&&!Ip.call(s,"callee")},st=ne.isArray,RS=dp?kn(dp):Ub;function Dn(s){return s!=null&&ql(s.length)&&!rr(s)}function $t(s){return Wt(s)&&Dn(s)}function IS(s){return s===!0||s===!1||Wt(s)&&Mn(s)==ye}var Nr=jy||Of,DS=pp?kn(pp):Vb;function OS(s){return Wt(s)&&s.nodeType===1&&!_a(s)}function FS(s){if(s==null)return!0;if(Dn(s)&&(st(s)||typeof s=="string"||typeof s.splice=="function"||Nr(s)||ro(s)||vs(s)))return!s.length;var a=vn(s);if(a==k||a==me)return!s.size;if(ma(s))return!Zu(s).length;for(var f in s)if(At.call(s,f))return!1;return!0}function NS(s,a){return ha(s,a)}function zS(s,a,f){f=typeof f=="function"?f:t;var g=f?f(s,a):t;return g===t?ha(s,a,t,f):!!g}function Mf(s){if(!Wt(s))return!1;var a=Mn(s);return a==He||a==ue||typeof s.message=="string"&&typeof s.name=="string"&&!_a(s)}function BS(s){return typeof s=="number"&&Op(s)}function rr(s){if(!Vt(s))return!1;var a=Mn(s);return a==R||a==O||a==te||a==_e}function eg(s){return typeof s=="number"&&s==at(s)}function ql(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Z}function Vt(s){var a=typeof s;return s!=null&&(a=="object"||a=="function")}function Wt(s){return s!=null&&typeof s=="object"}var tg=mp?kn(mp):Hb;function US(s,a){return s===a||Ku(s,a,pf(a))}function VS(s,a,f){return f=typeof f=="function"?f:t,Ku(s,a,pf(a),f)}function kS(s){return ng(s)&&s!=+s}function HS(s){if(E1(s))throw new it(o);return qp(s)}function GS(s){return s===null}function WS(s){return s==null}function ng(s){return typeof s=="number"||Wt(s)&&Mn(s)==J}function _a(s){if(!Wt(s)||Mn(s)!=he)return!1;var a=yl(s);if(a===null)return!0;var f=At.call(a,"constructor")&&a.constructor;return typeof f=="function"&&f instanceof f&&gl.call(f)==Vy}var Ef=gp?kn(gp):Gb;function $S(s){return eg(s)&&s>=-Z&&s<=Z}var ig=_p?kn(_p):Wb;function Xl(s){return typeof s=="string"||!st(s)&&Wt(s)&&Mn(s)==A}function Gn(s){return typeof s=="symbol"||Wt(s)&&Mn(s)==S}var ro=vp?kn(vp):$b;function jS(s){return s===t}function qS(s){return Wt(s)&&vn(s)==ie}function XS(s){return Wt(s)&&Mn(s)==pe}var YS=Bl(Ju),KS=Bl(function(s,a){return s<=a});function rg(s){if(!s)return[];if(Dn(s))return Xl(s)?mi(s):In(s);if(ra&&s[ra])return Cy(s[ra]());var a=vn(s),f=a==k?Uu:a==me?dl:so;return f(s)}function sr(s){if(!s)return s===0?s:0;if(s=li(s),s===ee||s===-ee){var a=s<0?-1:1;return a*se}return s===s?s:0}function at(s){var a=sr(s),f=a%1;return a===a?f?a-f:a:0}function sg(s){return s?ps(at(s),0,Ee):0}function li(s){if(typeof s=="number")return s;if(Gn(s))return de;if(Vt(s)){var a=typeof s.valueOf=="function"?s.valueOf():s;s=Vt(a)?a+"":a}if(typeof s!="string")return s===0?s:+s;s=Mp(s);var f=gt.test(s);return f||Nt.test(s)?fy(s.slice(2),f?2:8):St.test(s)?de:+s}function og(s){return zi(s,On(s))}function ZS(s){return s?ps(at(s),-Z,Z):s===0?s:0}function Tt(s){return s==null?"":Hn(s)}var JS=to(function(s,a){if(ma(a)||Dn(a)){zi(a,rn(a),s);return}for(var f in a)At.call(a,f)&&ca(s,f,a[f])}),ag=to(function(s,a){zi(a,On(a),s)}),Yl=to(function(s,a,f,g){zi(a,On(a),s,g)}),QS=to(function(s,a,f,g){zi(a,rn(a),s,g)}),eM=nr($u);function tM(s,a){var f=eo(s);return a==null?f:Up(f,a)}var nM=ft(function(s,a){s=Lt(s);var f=-1,g=a.length,b=g>2?a[2]:t;for(b&&En(a[0],a[1],b)&&(g=1);++f<g;)for(var E=a[f],N=On(E),V=-1,$=N.length;++V<$;){var ve=N[V],be=s[ve];(be===t||_i(be,Zs[ve])&&!At.call(s,ve))&&(s[ve]=E[ve])}return s}),iM=ft(function(s){return s.push(t,Mm),Vn(lg,t,s)});function rM(s,a){return yp(s,Ye(a,3),Ni)}function sM(s,a){return yp(s,Ye(a,3),qu)}function oM(s,a){return s==null?s:ju(s,Ye(a,3),On)}function aM(s,a){return s==null?s:Wp(s,Ye(a,3),On)}function lM(s,a){return s&&Ni(s,Ye(a,3))}function cM(s,a){return s&&qu(s,Ye(a,3))}function uM(s){return s==null?[]:Pl(s,rn(s))}function fM(s){return s==null?[]:Pl(s,On(s))}function Tf(s,a,f){var g=s==null?t:ms(s,a);return g===t?f:g}function hM(s,a){return s!=null&&Am(s,a,Fb)}function Af(s,a){return s!=null&&Am(s,a,Nb)}var dM=xm(function(s,a,f){a!=null&&typeof a.toString!="function"&&(a=_l.call(a)),s[a]=f},Lf(Fn)),pM=xm(function(s,a,f){a!=null&&typeof a.toString!="function"&&(a=_l.call(a)),At.call(s,a)?s[a].push(f):s[a]=[f]},Ye),mM=ft(fa);function rn(s){return Dn(s)?zp(s):Zu(s)}function On(s){return Dn(s)?zp(s,!0):jb(s)}function gM(s,a){var f={};return a=Ye(a,3),Ni(s,function(g,b,E){er(f,a(g,b,E),g)}),f}function _M(s,a){var f={};return a=Ye(a,3),Ni(s,function(g,b,E){er(f,b,a(g,b,E))}),f}var vM=to(function(s,a,f){Rl(s,a,f)}),lg=to(function(s,a,f,g){Rl(s,a,f,g)}),xM=nr(function(s,a){var f={};if(s==null)return f;var g=!1;a=zt(a,function(E){return E=Or(E,s),g||(g=E.length>1),E}),zi(s,hf(s),f),g&&(f=si(f,p|m|_,d1));for(var b=a.length;b--;)rf(f,a[b]);return f});function yM(s,a){return cg(s,jl(Ye(a)))}var bM=nr(function(s,a){return s==null?{}:Xb(s,a)});function cg(s,a){if(s==null)return{};var f=zt(hf(s),function(g){return[g]});return a=Ye(a),em(s,f,function(g,b){return a(g,b[0])})}function wM(s,a,f){a=Or(a,s);var g=-1,b=a.length;for(b||(b=1,s=t);++g<b;){var E=s==null?t:s[Bi(a[g])];E===t&&(g=b,E=f),s=rr(E)?E.call(s):E}return s}function SM(s,a,f){return s==null?s:da(s,a,f)}function MM(s,a,f,g){return g=typeof g=="function"?g:t,s==null?s:da(s,a,f,g)}var ug=wm(rn),fg=wm(On);function EM(s,a,f){var g=st(s),b=g||Nr(s)||ro(s);if(a=Ye(a,4),f==null){var E=s&&s.constructor;b?f=g?new E:[]:Vt(s)?f=rr(E)?eo(yl(s)):{}:f={}}return(b?ni:Ni)(s,function(N,V,$){return a(f,N,V,$)}),f}function TM(s,a){return s==null?!0:rf(s,a)}function AM(s,a,f){return s==null?s:sm(s,a,af(f))}function CM(s,a,f,g){return g=typeof g=="function"?g:t,s==null?s:sm(s,a,af(f),g)}function so(s){return s==null?[]:Bu(s,rn(s))}function LM(s){return s==null?[]:Bu(s,On(s))}function PM(s,a,f){return f===t&&(f=a,a=t),f!==t&&(f=li(f),f=f===f?f:0),a!==t&&(a=li(a),a=a===a?a:0),ps(li(s),a,f)}function RM(s,a,f){return a=sr(a),f===t?(f=a,a=0):f=sr(f),s=li(s),zb(s,a,f)}function IM(s,a,f){if(f&&typeof f!="boolean"&&En(s,a,f)&&(a=f=t),f===t&&(typeof a=="boolean"?(f=a,a=t):typeof s=="boolean"&&(f=s,s=t)),s===t&&a===t?(s=0,a=1):(s=sr(s),a===t?(a=s,s=0):a=sr(a)),s>a){var g=s;s=a,a=g}if(f||s%1||a%1){var b=Fp();return _n(s+b*(a-s+uy("1e-"+((b+"").length-1))),a)}return ef(s,a)}var DM=no(function(s,a,f){return a=a.toLowerCase(),s+(f?hg(a):a)});function hg(s){return Cf(Tt(s).toLowerCase())}function dg(s){return s=Tt(s),s&&s.replace(Er,Sy).replace(ey,"")}function OM(s,a,f){s=Tt(s),a=Hn(a);var g=s.length;f=f===t?g:ps(at(f),0,g);var b=f;return f-=a.length,f>=0&&s.slice(f,b)==a}function FM(s){return s=Tt(s),s&&Zn.test(s)?s.replace(wt,My):s}function NM(s){return s=Tt(s),s&&Su.test(s)?s.replace(ea,"\\$&"):s}var zM=no(function(s,a,f){return s+(f?"-":"")+a.toLowerCase()}),BM=no(function(s,a,f){return s+(f?" ":"")+a.toLowerCase()}),UM=gm("toLowerCase");function VM(s,a,f){s=Tt(s),a=at(a);var g=a?Ys(s):0;if(!a||g>=a)return s;var b=(a-g)/2;return zl(Ml(b),f)+s+zl(Sl(b),f)}function kM(s,a,f){s=Tt(s),a=at(a);var g=a?Ys(s):0;return a&&g<a?s+zl(a-g,f):s}function HM(s,a,f){s=Tt(s),a=at(a);var g=a?Ys(s):0;return a&&g<a?zl(a-g,f)+s:s}function GM(s,a,f){return f||a==null?a=0:a&&(a=+a),Ky(Tt(s).replace(ta,""),a||0)}function WM(s,a,f){return(f?En(s,a,f):a===t)?a=1:a=at(a),tf(Tt(s),a)}function $M(){var s=arguments,a=Tt(s[0]);return s.length<3?a:a.replace(s[1],s[2])}var jM=no(function(s,a,f){return s+(f?"_":"")+a.toLowerCase()});function qM(s,a,f){return f&&typeof f!="number"&&En(s,a,f)&&(a=f=t),f=f===t?Ee:f>>>0,f?(s=Tt(s),s&&(typeof a=="string"||a!=null&&!Ef(a))&&(a=Hn(a),!a&&Xs(s))?Fr(mi(s),0,f):s.split(a,f)):[]}var XM=no(function(s,a,f){return s+(f?" ":"")+Cf(a)});function YM(s,a,f){return s=Tt(s),f=f==null?0:ps(at(f),0,s.length),a=Hn(a),s.slice(f,f+a.length)==a}function KM(s,a,f){var g=M.templateSettings;f&&En(s,a,f)&&(a=t),s=Tt(s),a=Yl({},a,g,Sm);var b=Yl({},a.imports,g.imports,Sm),E=rn(b),N=Bu(b,E),V,$,ve=0,be=a.interpolate||di,Te="__p += '",Ue=Vu((a.escape||di).source+"|"+be.source+"|"+(be===ls?ct:di).source+"|"+(a.evaluate||di).source+"|$","g"),qe="//# sourceURL="+(At.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++sy+"]")+`
`;s.replace(Ue,function(Ze,dt,vt,Wn,Tn,$n){return vt||(vt=Wn),Te+=s.slice(ve,$n).replace(Jn,Ey),dt&&(V=!0,Te+=`' +
__e(`+dt+`) +
'`),Tn&&($=!0,Te+=`';
`+Tn+`;
__p += '`),vt&&(Te+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),ve=$n+Ze.length,Ze}),Te+=`';
`;var Ke=At.call(a,"variable")&&a.variable;if(!Ke)Te=`with (obj) {
`+Te+`
}
`;else if(Qe.test(Ke))throw new it(c);Te=($?Te.replace(Xe,""):Te).replace(Ne,"$1").replace(et,"$1;"),Te="function("+(Ke||"obj")+`) {
`+(Ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(V?", __e = _.escape":"")+($?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Te+`return __p
}`;var ut=mg(function(){return Mt(E,qe+"return "+Te).apply(t,N)});if(ut.source=Te,Mf(ut))throw ut;return ut}function ZM(s){return Tt(s).toLowerCase()}function JM(s){return Tt(s).toUpperCase()}function QM(s,a,f){if(s=Tt(s),s&&(f||a===t))return Mp(s);if(!s||!(a=Hn(a)))return s;var g=mi(s),b=mi(a),E=Ep(g,b),N=Tp(g,b)+1;return Fr(g,E,N).join("")}function eE(s,a,f){if(s=Tt(s),s&&(f||a===t))return s.slice(0,Cp(s)+1);if(!s||!(a=Hn(a)))return s;var g=mi(s),b=Tp(g,mi(a))+1;return Fr(g,0,b).join("")}function tE(s,a,f){if(s=Tt(s),s&&(f||a===t))return s.replace(ta,"");if(!s||!(a=Hn(a)))return s;var g=mi(s),b=Ep(g,mi(a));return Fr(g,b).join("")}function nE(s,a){var f=X,g=Y;if(Vt(a)){var b="separator"in a?a.separator:b;f="length"in a?at(a.length):f,g="omission"in a?Hn(a.omission):g}s=Tt(s);var E=s.length;if(Xs(s)){var N=mi(s);E=N.length}if(f>=E)return s;var V=f-Ys(g);if(V<1)return g;var $=N?Fr(N,0,V).join(""):s.slice(0,V);if(b===t)return $+g;if(N&&(V+=$.length-V),Ef(b)){if(s.slice(V).search(b)){var ve,be=$;for(b.global||(b=Vu(b.source,Tt(ot.exec(b))+"g")),b.lastIndex=0;ve=b.exec(be);)var Te=ve.index;$=$.slice(0,Te===t?V:Te)}}else if(s.indexOf(Hn(b),V)!=V){var Ue=$.lastIndexOf(b);Ue>-1&&($=$.slice(0,Ue))}return $+g}function iE(s){return s=Tt(s),s&&cn.test(s)?s.replace(bt,Iy):s}var rE=no(function(s,a,f){return s+(f?" ":"")+a.toUpperCase()}),Cf=gm("toUpperCase");function pg(s,a,f){return s=Tt(s),a=f?t:a,a===t?Ay(s)?Fy(s):vy(s):s.match(a)||[]}var mg=ft(function(s,a){try{return Vn(s,t,a)}catch(f){return Mf(f)?f:new it(f)}}),sE=nr(function(s,a){return ni(a,function(f){f=Bi(f),er(s,f,wf(s[f],s))}),s});function oE(s){var a=s==null?0:s.length,f=Ye();return s=a?zt(s,function(g){if(typeof g[1]!="function")throw new ii(l);return[f(g[0]),g[1]]}):[],ft(function(g){for(var b=-1;++b<a;){var E=s[b];if(Vn(E[0],this,g))return Vn(E[1],this,g)}})}function aE(s){return Ib(si(s,p))}function Lf(s){return function(){return s}}function lE(s,a){return s==null||s!==s?a:s}var cE=vm(),uE=vm(!0);function Fn(s){return s}function Pf(s){return Xp(typeof s=="function"?s:si(s,p))}function fE(s){return Kp(si(s,p))}function hE(s,a){return Zp(s,si(a,p))}var dE=ft(function(s,a){return function(f){return fa(f,s,a)}}),pE=ft(function(s,a){return function(f){return fa(s,f,a)}});function Rf(s,a,f){var g=rn(a),b=Pl(a,g);f==null&&!(Vt(a)&&(b.length||!g.length))&&(f=a,a=s,s=this,b=Pl(a,rn(a)));var E=!(Vt(f)&&"chain"in f)||!!f.chain,N=rr(s);return ni(b,function(V){var $=a[V];s[V]=$,N&&(s.prototype[V]=function(){var ve=this.__chain__;if(E||ve){var be=s(this.__wrapped__),Te=be.__actions__=In(this.__actions__);return Te.push({func:$,args:arguments,thisArg:s}),be.__chain__=ve,be}return $.apply(s,Lr([this.value()],arguments))})}),s}function mE(){return fn._===this&&(fn._=ky),this}function If(){}function gE(s){return s=at(s),ft(function(a){return Jp(a,s)})}var _E=cf(zt),vE=cf(xp),xE=cf(Du);function gg(s){return gf(s)?Ou(Bi(s)):Yb(s)}function yE(s){return function(a){return s==null?t:ms(s,a)}}var bE=ym(),wE=ym(!0);function Df(){return[]}function Of(){return!1}function SE(){return{}}function ME(){return""}function EE(){return!0}function TE(s,a){if(s=at(s),s<1||s>Z)return[];var f=Ee,g=_n(s,Ee);a=Ye(a),s-=Ee;for(var b=zu(g,a);++f<s;)a(f);return b}function AE(s){return st(s)?zt(s,Bi):Gn(s)?[s]:In(Nm(Tt(s)))}function CE(s){var a=++Uy;return Tt(s)+a}var LE=Nl(function(s,a){return s+a},0),PE=uf("ceil"),RE=Nl(function(s,a){return s/a},1),IE=uf("floor");function DE(s){return s&&s.length?Ll(s,Fn,Xu):t}function OE(s,a){return s&&s.length?Ll(s,Ye(a,2),Xu):t}function FE(s){return wp(s,Fn)}function NE(s,a){return wp(s,Ye(a,2))}function zE(s){return s&&s.length?Ll(s,Fn,Ju):t}function BE(s,a){return s&&s.length?Ll(s,Ye(a,2),Ju):t}var UE=Nl(function(s,a){return s*a},1),VE=uf("round"),kE=Nl(function(s,a){return s-a},0);function HE(s){return s&&s.length?Nu(s,Fn):0}function GE(s,a){return s&&s.length?Nu(s,Ye(a,2)):0}return M.after=fS,M.ary=qm,M.assign=JS,M.assignIn=ag,M.assignInWith=Yl,M.assignWith=QS,M.at=eM,M.before=Xm,M.bind=wf,M.bindAll=sE,M.bindKey=Ym,M.castArray=SS,M.chain=Wm,M.chunk=I1,M.compact=D1,M.concat=O1,M.cond=oE,M.conforms=aE,M.constant=Lf,M.countBy=Hw,M.create=tM,M.curry=Km,M.curryRight=Zm,M.debounce=Jm,M.defaults=nM,M.defaultsDeep=iM,M.defer=hS,M.delay=dS,M.difference=F1,M.differenceBy=N1,M.differenceWith=z1,M.drop=B1,M.dropRight=U1,M.dropRightWhile=V1,M.dropWhile=k1,M.fill=H1,M.filter=Ww,M.flatMap=qw,M.flatMapDeep=Xw,M.flatMapDepth=Yw,M.flatten=Vm,M.flattenDeep=G1,M.flattenDepth=W1,M.flip=pS,M.flow=cE,M.flowRight=uE,M.fromPairs=$1,M.functions=uM,M.functionsIn=fM,M.groupBy=Kw,M.initial=q1,M.intersection=X1,M.intersectionBy=Y1,M.intersectionWith=K1,M.invert=dM,M.invertBy=pM,M.invokeMap=Jw,M.iteratee=Pf,M.keyBy=Qw,M.keys=rn,M.keysIn=On,M.map=Gl,M.mapKeys=gM,M.mapValues=_M,M.matches=fE,M.matchesProperty=hE,M.memoize=$l,M.merge=vM,M.mergeWith=lg,M.method=dE,M.methodOf=pE,M.mixin=Rf,M.negate=jl,M.nthArg=gE,M.omit=xM,M.omitBy=yM,M.once=mS,M.orderBy=eS,M.over=_E,M.overArgs=gS,M.overEvery=vE,M.overSome=xE,M.partial=Sf,M.partialRight=Qm,M.partition=tS,M.pick=bM,M.pickBy=cg,M.property=gg,M.propertyOf=yE,M.pull=ew,M.pullAll=Hm,M.pullAllBy=tw,M.pullAllWith=nw,M.pullAt=iw,M.range=bE,M.rangeRight=wE,M.rearg=_S,M.reject=rS,M.remove=rw,M.rest=vS,M.reverse=yf,M.sampleSize=oS,M.set=SM,M.setWith=MM,M.shuffle=aS,M.slice=sw,M.sortBy=uS,M.sortedUniq=hw,M.sortedUniqBy=dw,M.split=qM,M.spread=xS,M.tail=pw,M.take=mw,M.takeRight=gw,M.takeRightWhile=_w,M.takeWhile=vw,M.tap=Dw,M.throttle=yS,M.thru=Hl,M.toArray=rg,M.toPairs=ug,M.toPairsIn=fg,M.toPath=AE,M.toPlainObject=og,M.transform=EM,M.unary=bS,M.union=xw,M.unionBy=yw,M.unionWith=bw,M.uniq=ww,M.uniqBy=Sw,M.uniqWith=Mw,M.unset=TM,M.unzip=bf,M.unzipWith=Gm,M.update=AM,M.updateWith=CM,M.values=so,M.valuesIn=LM,M.without=Ew,M.words=pg,M.wrap=wS,M.xor=Tw,M.xorBy=Aw,M.xorWith=Cw,M.zip=Lw,M.zipObject=Pw,M.zipObjectDeep=Rw,M.zipWith=Iw,M.entries=ug,M.entriesIn=fg,M.extend=ag,M.extendWith=Yl,Rf(M,M),M.add=LE,M.attempt=mg,M.camelCase=DM,M.capitalize=hg,M.ceil=PE,M.clamp=PM,M.clone=MS,M.cloneDeep=TS,M.cloneDeepWith=AS,M.cloneWith=ES,M.conformsTo=CS,M.deburr=dg,M.defaultTo=lE,M.divide=RE,M.endsWith=OM,M.eq=_i,M.escape=FM,M.escapeRegExp=NM,M.every=Gw,M.find=$w,M.findIndex=Bm,M.findKey=rM,M.findLast=jw,M.findLastIndex=Um,M.findLastKey=sM,M.floor=IE,M.forEach=$m,M.forEachRight=jm,M.forIn=oM,M.forInRight=aM,M.forOwn=lM,M.forOwnRight=cM,M.get=Tf,M.gt=LS,M.gte=PS,M.has=hM,M.hasIn=Af,M.head=km,M.identity=Fn,M.includes=Zw,M.indexOf=j1,M.inRange=RM,M.invoke=mM,M.isArguments=vs,M.isArray=st,M.isArrayBuffer=RS,M.isArrayLike=Dn,M.isArrayLikeObject=$t,M.isBoolean=IS,M.isBuffer=Nr,M.isDate=DS,M.isElement=OS,M.isEmpty=FS,M.isEqual=NS,M.isEqualWith=zS,M.isError=Mf,M.isFinite=BS,M.isFunction=rr,M.isInteger=eg,M.isLength=ql,M.isMap=tg,M.isMatch=US,M.isMatchWith=VS,M.isNaN=kS,M.isNative=HS,M.isNil=WS,M.isNull=GS,M.isNumber=ng,M.isObject=Vt,M.isObjectLike=Wt,M.isPlainObject=_a,M.isRegExp=Ef,M.isSafeInteger=$S,M.isSet=ig,M.isString=Xl,M.isSymbol=Gn,M.isTypedArray=ro,M.isUndefined=jS,M.isWeakMap=qS,M.isWeakSet=XS,M.join=Z1,M.kebabCase=zM,M.last=ai,M.lastIndexOf=J1,M.lowerCase=BM,M.lowerFirst=UM,M.lt=YS,M.lte=KS,M.max=DE,M.maxBy=OE,M.mean=FE,M.meanBy=NE,M.min=zE,M.minBy=BE,M.stubArray=Df,M.stubFalse=Of,M.stubObject=SE,M.stubString=ME,M.stubTrue=EE,M.multiply=UE,M.nth=Q1,M.noConflict=mE,M.noop=If,M.now=Wl,M.pad=VM,M.padEnd=kM,M.padStart=HM,M.parseInt=GM,M.random=IM,M.reduce=nS,M.reduceRight=iS,M.repeat=WM,M.replace=$M,M.result=wM,M.round=VE,M.runInContext=G,M.sample=sS,M.size=lS,M.snakeCase=jM,M.some=cS,M.sortedIndex=ow,M.sortedIndexBy=aw,M.sortedIndexOf=lw,M.sortedLastIndex=cw,M.sortedLastIndexBy=uw,M.sortedLastIndexOf=fw,M.startCase=XM,M.startsWith=YM,M.subtract=kE,M.sum=HE,M.sumBy=GE,M.template=KM,M.times=TE,M.toFinite=sr,M.toInteger=at,M.toLength=sg,M.toLower=ZM,M.toNumber=li,M.toSafeInteger=ZS,M.toString=Tt,M.toUpper=JM,M.trim=QM,M.trimEnd=eE,M.trimStart=tE,M.truncate=nE,M.unescape=iE,M.uniqueId=CE,M.upperCase=rE,M.upperFirst=Cf,M.each=$m,M.eachRight=jm,M.first=km,Rf(M,function(){var s={};return Ni(M,function(a,f){At.call(M.prototype,f)||(s[f]=a)}),s}(),{chain:!1}),M.VERSION=i,ni(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){M[s].placeholder=M}),ni(["drop","take"],function(s,a){mt.prototype[s]=function(f){f=f===t?1:en(at(f),0);var g=this.__filtered__&&!a?new mt(this):this.clone();return g.__filtered__?g.__takeCount__=_n(f,g.__takeCount__):g.__views__.push({size:_n(f,Ee),type:s+(g.__dir__<0?"Right":"")}),g},mt.prototype[s+"Right"]=function(f){return this.reverse()[s](f).reverse()}}),ni(["filter","map","takeWhile"],function(s,a){var f=a+1,g=f==q||f==Q;mt.prototype[s]=function(b){var E=this.clone();return E.__iteratees__.push({iteratee:Ye(b,3),type:f}),E.__filtered__=E.__filtered__||g,E}}),ni(["head","last"],function(s,a){var f="take"+(a?"Right":"");mt.prototype[s]=function(){return this[f](1).value()[0]}}),ni(["initial","tail"],function(s,a){var f="drop"+(a?"":"Right");mt.prototype[s]=function(){return this.__filtered__?new mt(this):this[f](1)}}),mt.prototype.compact=function(){return this.filter(Fn)},mt.prototype.find=function(s){return this.filter(s).head()},mt.prototype.findLast=function(s){return this.reverse().find(s)},mt.prototype.invokeMap=ft(function(s,a){return typeof s=="function"?new mt(this):this.map(function(f){return fa(f,s,a)})}),mt.prototype.reject=function(s){return this.filter(jl(Ye(s)))},mt.prototype.slice=function(s,a){s=at(s);var f=this;return f.__filtered__&&(s>0||a<0)?new mt(f):(s<0?f=f.takeRight(-s):s&&(f=f.drop(s)),a!==t&&(a=at(a),f=a<0?f.dropRight(-a):f.take(a-s)),f)},mt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},mt.prototype.toArray=function(){return this.take(Ee)},Ni(mt.prototype,function(s,a){var f=/^(?:filter|find|map|reject)|While$/.test(a),g=/^(?:head|last)$/.test(a),b=M[g?"take"+(a=="last"?"Right":""):a],E=g||/^find/.test(a);b&&(M.prototype[a]=function(){var N=this.__wrapped__,V=g?[1]:arguments,$=N instanceof mt,ve=V[0],be=$||st(N),Te=function(dt){var vt=b.apply(M,Lr([dt],V));return g&&Ue?vt[0]:vt};be&&f&&typeof ve=="function"&&ve.length!=1&&($=be=!1);var Ue=this.__chain__,qe=!!this.__actions__.length,Ke=E&&!Ue,ut=$&&!qe;if(!E&&be){N=ut?N:new mt(this);var Ze=s.apply(N,V);return Ze.__actions__.push({func:Hl,args:[Te],thisArg:t}),new ri(Ze,Ue)}return Ke&&ut?s.apply(this,V):(Ze=this.thru(Te),Ke?g?Ze.value()[0]:Ze.value():Ze)})}),ni(["pop","push","shift","sort","splice","unshift"],function(s){var a=pl[s],f=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",g=/^(?:pop|shift)$/.test(s);M.prototype[s]=function(){var b=arguments;if(g&&!this.__chain__){var E=this.value();return a.apply(st(E)?E:[],b)}return this[f](function(N){return a.apply(st(N)?N:[],b)})}}),Ni(mt.prototype,function(s,a){var f=M[a];if(f){var g=f.name+"";At.call(Qs,g)||(Qs[g]=[]),Qs[g].push({name:a,func:f})}}),Qs[Fl(t,w).name]=[{name:"wrapper",func:t}],mt.prototype.clone=ib,mt.prototype.reverse=rb,mt.prototype.value=sb,M.prototype.at=Ow,M.prototype.chain=Fw,M.prototype.commit=Nw,M.prototype.next=zw,M.prototype.plant=Uw,M.prototype.reverse=Vw,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=kw,M.prototype.first=M.prototype.head,ra&&(M.prototype[ra]=Bw),M},Ks=Ny();us?((us.exports=Ks)._=Ks,Lu._=Ks):fn._=Ks}).call(Sa)})(Yc,Yc.exports);var sO=Yc.exports;const Ls=class Ls extends EventTarget{constructor(t,i){super();je(this,"iterations",0);je(this,"runFlag",!1);je(this,"history",[]);je(this,"notify");this.set=t,this.strategy=i,this.notify=sO.throttle(this._notify.bind(this),50)}async run(){this.runFlag=!0;try{this.propagate()}catch{throw"First propagation failed"}const t=this.getNextElement();this.history.push({instancePos:{x:t.x,y:t.y,z:t.z},leftStates:t.mask.clone(),state:this.set.cloneState(),retries:0});let i=0;for(;this.runFlag;){if(i++>Ls.GUARD_LIMIT)throw"Guard overflow";if(this.history.length===0)throw"No history left";const r=this.history[this.history.length-1],o=r.leftStates.getRandomNonZeroIndex();try{const c=this.set.tryGetElementAt(r.instancePos.x,r.instancePos.y,r.instancePos.z);c.collapseTo(o),c.dirty=!0,this.notify(),await iO(),this.propagate()}catch{this.checkHistory(r,o);continue}const l=this.getNextElement();if(!l){console.log("yay!!");const c=new Event("solving_finished",{bubbles:!0});this.dispatchEvent(c),this._notify();break}this.history.push({instancePos:{x:l.x,y:l.y,z:l.z},leftStates:l.mask.clone(),state:this.set.cloneState(),retries:0})}}_notify(){console.log("_notify");const t=this.history[this.history.length-1],i=new CustomEvent("element_collapsed",{detail:{current:new H(t.instancePos.x,t.instancePos.y,t.instancePos.z),set:this.set}});this.dispatchEvent(i)}stop(){this.runFlag=!1}checkHistory(t,i){if(t.leftStates.setAt(i,0),t.retries++,t.leftStates.countOnes()===0){this.goBackInHistory();return}this.set.replaceState(t.state)}goBackInHistory(){let t=1;const i=.1;for(let r=1;r<this.history.length-1;++r)t+=Math.random()<i?1:0;this.history.splice(this.history.length-t,t)}getLastHistoryStep(){return this.history[this.history.length-1]}propagate(){let t,i=0;for(;t=this.set.getNextDirtyElement();){if(i++>Ls.GUARD_LIMIT)throw"Guard overflow";this.propagateElement(t)}}propagateElement(t){this.set.getElementsAdjacentTo(t).forEach(([r,o])=>{this.filterTargetStates(t,r,o)}),t.dirty=!1}filterTargetStates(t,i,r){const o=i.enthropy,l=is.getTemplates();for(let c=0;c<l.length;c++){let u=!1;if(i.mask.getAt(c)===1)for(let h=0;h<l.length;++h){if(t.mask.getAt(h)===1){const d=l[h][r];u||(u=d.getAt(c)===1)}Ls.checks++}if(!u&&(i.mask.setAt(c,0),i.updateEnthropy(),i.enthropy===0))throw"Backtrack"}o!==i.enthropy&&this.set.getElementsAdjacentTo(i).forEach(([u,h])=>{u.dirty=!0})}getNextElement(){return this.strategy.select(this.set)}printHistoryItem(){const t=this.history[this.history.length-1],i=this.history.length-1;console.log(`hist# ${String(i).padStart(2," ")} at [`+String(t.instancePos.x).padStart(2," ")+", "+String(t.instancePos.y).padStart(2," ")+`] [${t.leftStates.print()}]`)}};je(Ls,"GUARD_LIMIT",1e4),je(Ls,"checks",0);let Kc=Ls;const oO=/^[og]\s*(.+)?/,aO=/^mtllib /,lO=/^usemtl /,cO=/^usemap /,k_=new H,Ph=new H,H_=new H,G_=new H,ui=new H,Pc=new tt;function uO(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,o){const l=this._finalize(!1);l&&(l.inherited||l.groupCount<=0)&&this.materials.splice(l.index,1);const c={index:this.materials.length,name:r||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:l!==void 0?l.smooth:this.smooth,groupStart:l!==void 0?l.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(u){const h={index:typeof u=="number"?u:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),r&&this.materials.length>1)for(let l=this.materials.length-1;l>=0;l--)this.materials[l].groupCount<=0&&this.materials.splice(l,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,o=this.object.geometry.vertices;o.push(r[e+0],r[e+1],r[e+2]),o.push(r[t+0],r[t+1],r[t+2]),o.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,o=this.object.geometry.normals;o.push(r[e+0],r[e+1],r[e+2]),o.push(r[t+0],r[t+1],r[t+2]),o.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,o=this.object.geometry.normals;k_.fromArray(r,e),Ph.fromArray(r,t),H_.fromArray(r,i),ui.subVectors(H_,Ph),G_.subVectors(k_,Ph),ui.cross(G_),ui.normalize(),o.push(ui.x,ui.y,ui.z),o.push(ui.x,ui.y,ui.z),o.push(ui.x,ui.y,ui.z)},addColor:function(e,t,i){const r=this.colors,o=this.object.geometry.colors;r[e]!==void 0&&o.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&o.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&o.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,o=this.object.geometry.uvs;o.push(r[e+0],r[e+1]),o.push(r[t+0],r[t+1]),o.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,o,l,c,u,h){const d=this.vertices.length;let p=this.parseVertexIndex(e,d),m=this.parseVertexIndex(t,d),_=this.parseVertexIndex(i,d);if(this.addVertex(p,m,_),this.addColor(p,m,_),c!==void 0&&c!==""){const y=this.normals.length;p=this.parseNormalIndex(c,y),m=this.parseNormalIndex(u,y),_=this.parseNormalIndex(h,y),this.addNormal(p,m,_)}else this.addFaceNormal(p,m,_);if(r!==void 0&&r!==""){const y=this.uvs.length;p=this.parseUVIndex(r,y),m=this.parseUVIndex(o,y),_=this.parseUVIndex(l,y),this.addUV(p,m,_),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let o=0,l=e.length;o<l;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,l=t.length;o<l;o++)this.addUVLine(this.parseUVIndex(t[o],r))}};return n.startObject("",!1),n}class Dx extends Px{constructor(e){super(e),this.materials=null}load(e,t,i,r){const o=this,l=new XD(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(o.parse(c))}catch(u){r?r(u):console.error(u),o.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new uO;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r="",o="",l=0,c=[];const u=typeof"".trimLeft=="function";for(let p=0,m=i.length;p<m;p++)if(r=i[p],r=u?r.trimLeft():r.trim(),l=r.length,l!==0&&(o=r.charAt(0),o!=="#"))if(o==="v"){const _=r.split(/\s+/);switch(_[0]){case"v":t.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Pc.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6])).convertSRGBToLinear(),t.colors.push(Pc.r,Pc.g,Pc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":t.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(o==="f"){const y=r.slice(1).trim().split(/\s+/),x=[];for(let w=0,T=y.length;w<T;w++){const F=y[w];if(F.length>0){const I=F.split("/");x.push(I)}}const v=x[0];for(let w=1,T=x.length-1;w<T;w++){const F=x[w],I=x[w+1];t.addFace(v[0],F[0],I[0],v[1],F[1],I[1],v[2],F[2],I[2])}}else if(o==="l"){const _=r.substring(1).trim().split(" ");let y=[];const x=[];if(r.indexOf("/")===-1)y=_;else for(let v=0,w=_.length;v<w;v++){const T=_[v].split("/");T[0]!==""&&y.push(T[0]),T[1]!==""&&x.push(T[1])}t.addLineGeometry(y,x)}else if(o==="p"){const y=r.slice(1).trim().split(" ");t.addPointGeometry(y)}else if((c=oO.exec(r))!==null){const _=(" "+c[0].slice(1).trim()).slice(1);t.startObject(_)}else if(lO.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(aO.test(r))t.materialLibraries.push(r.substring(7).trim());else if(cO.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(o==="s"){if(c=r.split(" "),c.length>1){const y=c[1].trim().toLowerCase();t.object.smooth=y!=="0"&&y!=="off"}else t.object.smooth=!0;const _=t.object.currentMaterial();_&&(_.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();const h=new Jr;if(h.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let p=0,m=t.objects.length;p<m;p++){const _=t.objects[p],y=_.geometry,x=_.materials,v=y.type==="Line",w=y.type==="Points";let T=!1;if(y.vertices.length===0)continue;const F=new Kn;F.setAttribute("position",new on(y.vertices,3)),y.normals.length>0&&F.setAttribute("normal",new on(y.normals,3)),y.colors.length>0&&(T=!0,F.setAttribute("color",new on(y.colors,3))),y.hasUVIndices===!0&&F.setAttribute("uv",new on(y.uvs,2));const I=[];for(let B=0,j=x.length;B<j;B++){const C=x[B],U=C.name+"_"+C.smooth+"_"+T;let X=t.materials[U];if(this.materials!==null){if(X=this.materials.create(C.name),v&&X&&!(X instanceof Bs)){const Y=new Bs;nn.prototype.copy.call(Y,X),Y.color.copy(X.color),X=Y}else if(w&&X&&!(X instanceof Lo)){const Y=new Lo({size:10,sizeAttenuation:!1});nn.prototype.copy.call(Y,X),Y.color.copy(X.color),Y.map=X.map,X=Y}}X===void 0&&(v?X=new Bs:w?X=new Lo({size:1,sizeAttenuation:!1}):X=new Cx,X.name=C.name,X.flatShading=!C.smooth,X.vertexColors=T,t.materials[U]=X),I.push(X)}let P;if(I.length>1){for(let B=0,j=x.length;B<j;B++){const C=x[B];F.addGroup(C.groupStart,C.groupCount,B)}v?P=new qc(F,I):w?P=new Ah(F,I):P=new Yn(F,I)}else v?P=new qc(F,I[0]):w?P=new Ah(F,I[0]):P=new Yn(F,I[0]);P.name=_.name,h.add(P)}else if(t.vertices.length>0){const p=new Lo({size:1,sizeAttenuation:!1}),m=new Kn;m.setAttribute("position",new on(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(m.setAttribute("color",new on(t.colors,3)),p.vertexColors=!0);const _=new Ah(m,p);h.add(_)}return h}}class fO{constructor(e){je(this,"TILE_SIZE",2);je(this,"group");je(this,"loader",new Dx);je(this,"material",new rd({color:16777215}));je(this,"collapsingMaterial",new rd({color:6736998,transparent:!0,opacity:.5}));je(this,"rendering",!1);je(this,"collapsingMesh");je(this,"cache",new Map);je(this,"squareGeometry",new as(this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE));je(this,"enthropyMaterials",[]);this.graphics=e,this.group=new Jr,this.collapsingMesh=new Yn(new as(this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE),this.collapsingMaterial),this.collapsingMesh.visible=!1,this.graphics.scene.add(this.collapsingMesh),this.graphics.scene.add(this.group),this.createEnthropymaterials()}async tryRender(e){if(this.rendering)return;this.rendering=!0,this.group.clear();const t=[];e.eachElement(i=>t.push(i));for(let i of t)await this.tryRenderElement(i);this.rendering=!1}createEnthropymaterials(){this.enthropyMaterials=[new _r(this.getOptions(.1)),new _r(this.getOptions(.2)),new _r(this.getOptions(.3)),new _r(this.getOptions(.4)),new _r(this.getOptions(.5))]}getOptions(e){return{color:3355443,transparent:!0,opacity:e}}async tryRenderElement(e){if(e.enthropy!==1||e.dead)return this.renderUnresolved(e);await this.addMesh(e)}renderUnresolved(e){const t=is.getTemplates().length,i=Math.floor(e.enthropy/t*5),r=new Yn(this.squareGeometry,this.enthropyMaterials[i]);r.position.copy(this.convertPosition(e.x,e.y,e.z)),this.group.add(r)}async loadMesh(e){let t=this.cache.get(e);return t||(t=await new Promise(i=>this.loader.load(e,i)),this.cache.set(e,t)),t.clone(!0)}async addMesh(e){const t=is.getTemplates()[e.tryGetOnlyState()];if(!t||t.src==="void")return;const i=await this.loadMesh(t.src);i.rotateY(t.rotation*Math.PI/2),i.position.copy(this.convertPosition(e.x,e.y,e.z)),i.material=this.material,this.group.add(i)}convertPosition(e,t,i){return new H((e-Ka.MAX_HORIZONTAL/2)*this.TILE_SIZE,t*this.TILE_SIZE-this.TILE_SIZE/2,(i-Ka.MAX_HORIZONTAL/2)*this.TILE_SIZE)}handleEvent(e){this.tryRender(e.detail.set),this.collapsingMesh.visible=!0,e.detail.current&&this.collapsingMesh.position.copy(this.convertPosition(e.detail.current.x,e.detail.current.y,e.detail.current.z))}handleFinishedEvent(){this.collapsingMesh.visible=!1}}class hO{select(e){let t=1/0,i=[];if(e.eachElement(o=>{o.dead||o.enthropy===1||this.checkElementBelow(o,e)&&(o.enthropy<t&&(t=o.enthropy,i=[o]),o.enthropy===t&&i.push(o))}),i.length<1)return null;const r=qd(i);if(r.z===0)debugger;return r}checkElementBelow(e,t){const i=t.tryGetElementAt(e.x,e.y-1,e.z);return i?i.enthropy===1:!0}}let Ao,za,Bc;function dO(){if(!za.validataSolved())throw"validataion not passed";console.log("checks",Kc.checks.toLocaleString()),Bc.tryRender(za)}async function pO(n){const e=new jd(n);za=new Ka,Ao=new Kc(za,new hO),Bc=new fO(e),Ao.addEventListener("element_collapsed",t=>Bc.handleEvent(t)),Ao.addEventListener("solving_finished",dO),Ao.addEventListener("solving_finished",()=>Bc.handleFinishedEvent()),za.fill(),e.animate(),await Ao.run()}function mO(){Ao.stop()}const gO=Yo({__name:"Generate",setup(n){const e=xr();return il(()=>{pO(e.value)}),Rv(()=>{mO()}),(t,i)=>{const r=Us("router-link");return Rt(),Ln(Xn,null,[qt(r,{to:"/editor",class:"btn editor-button"},{default:Zr(()=>[lu("Editor")]),_:1}),Kt("div",{class:"canvas",ref_key:"canvas",ref:e},null,512)],64)}}});const _O=fu(gO,[["__scopeId","data-v-7359526f"]]);class vO{constructor(){je(this,"objLoader",new Dx)}async loadMesh(e){let t;try{t=await new Promise((o,l)=>this.objLoader.load(e,o,()=>{},l));const i=new Zo().setFromObject(t),r=new H;if(i.getSize(r),r.length()===0)return null}catch{return null}return t}}const Ox=new vO,Kr=class Kr{constructor(){je(this,"renderer",new Wd);je(this,"camera",new Bn(40,Kr.WIDTH/Kr.HEIGHT,.1,1e3));je(this,"scene",new Ax);je(this,"group",new Jr);this.renderer.setSize(Kr.WIDTH,Kr.HEIGHT),this.group.name="Container";const e=new Xc(16777215,1);e.position.set(20,50,20),e.lookAt(0,0,0),this.scene.add(e);const t=new Xc(13421772,1);t.position.set(-20,50,-20),t.lookAt(0,0,0),this.scene.add(t),this.camera.position.copy(new H(2,10,8)),this.camera.lookAt(new H(0,0,0)),this.scene.add(this.group)}async render(e){this.group.clear();const t=await Ox.loadMesh(e);if(!t)return null;this.group.add(t),document.body.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera);const i=this.renderer.domElement.toDataURL();return document.body.removeChild(this.renderer.domElement),i}};je(Kr,"WIDTH",512),je(Kr,"HEIGHT",512);let od=Kr;const xO=new od,yO=[{position:{isVector3:!0,x:0,y:0,z:0},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-1,y:0,z:0},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:0,y:0,z:-1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-2,y:0,z:-1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:-1,y:0,z:-1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:0,y:1,z:-1},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:0,y:2,z:-1},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:0,y:3,z:-1},src:"meshes/roof.obj",rotation:0},{position:{isVector3:!0,x:1,y:0,z:2},src:"meshes/innercorner.obj",rotation:1},{position:{isVector3:!0,x:0,y:0,z:3},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:1,y:0,z:3},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-2,y:0,z:0},src:"meshes/innercorner.obj",rotation:1},{position:{isVector3:!0,x:1,y:1,z:3},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:0,y:1,z:3},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:0,y:0,z:2},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:0,y:0,z:1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:1,y:0,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:2,y:0,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:2,y:0,z:2},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:3,y:0,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:3,y:0,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-2,y:0,z:1},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:-2,y:0,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-3,y:0,z:0},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:-1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:0,y:1,z:2},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:1,y:1,z:2},src:"meshes/innercorner.obj",rotation:1},{position:{isVector3:!0,x:0,y:1,z:1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:1,y:1,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:2,y:1,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:2,y:1,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:0,y:2,z:1},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:0,y:3,z:1},src:"meshes/roof.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:6},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-4,y:0,z:6},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:-4,y:0,z:7},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:7},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:-4,y:0,z:8},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:8},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:-4,y:0,z:9},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:9},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-3,y:1,z:8},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-4,y:1,z:7},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:-3,y:1,z:7},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-4,y:1,z:8},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-4,y:2,z:7},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:-4,y:3,z:7},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:-4,y:4,z:7},src:"meshes/roof.obj",rotation:0},{position:{isVector3:!0,x:-4,y:0,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:-5,y:0,z:1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:-5,y:0,z:2},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-4,y:0,z:2},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:2},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:1},src:"meshes/innercorner.obj",rotation:3},{position:{isVector3:!0,x:-5,y:1,z:1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:-5,y:1,z:2},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-4,y:1,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-4,y:1,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-4,y:2,z:2},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:-4,y:3,z:2},src:"meshes/roof.obj",rotation:0},{position:{isVector3:!0,x:-1,y:0,z:7},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-1,y:0,z:8},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-1,y:0,z:6},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:0,y:0,z:6},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:0,y:0,z:8},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:0,y:0,z:7},src:"meshes/door.obj",rotation:1},{position:{isVector3:!0,x:-2,y:0,z:7},src:"meshes/bridge.obj",rotation:1},{position:{isVector3:!0,x:3,y:0,z:6},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:3,y:0,z:7},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:3,y:0,z:8},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:4,y:0,z:8},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:4,y:0,z:7},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:4,y:0,z:6},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:3,y:1,z:8},src:"meshes/triangleroof.obj",rotation:3},{position:{isVector3:!0,x:4,y:1,z:8},src:"meshes/triangleroof.obj",rotation:1},{position:{isVector3:!0,x:4,y:1,z:7},src:"meshes/triangleroof.obj",rotation:1},{position:{isVector3:!0,x:3,y:1,z:7},src:"meshes/triangleroof.obj",rotation:3},{position:{isVector3:!0,x:3,y:1,z:6},src:"meshes/triangleroof.obj",rotation:3},{position:{isVector3:!0,x:4,y:1,z:6},src:"meshes/triangleroof.obj",rotation:1},{position:{isVector3:!0,x:7,y:0,z:3},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:7,y:0,z:1},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:9,y:0,z:3},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:9,y:0,z:1},src:"meshes/innercorner.obj",rotation:2},{position:{isVector3:!0,x:10,y:0,z:3},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:10,y:0,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:9,y:0,z:0},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:7,y:0,z:0},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:8,y:0,z:3},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:7,y:0,z:2},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:10,y:0,z:2},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:8,y:0,z:0},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:8,y:0,z:1},src:"meshes/floor.obj",rotation:0},{position:{isVector3:!0,x:8,y:0,z:2},src:"meshes/floor.obj",rotation:0},{position:{isVector3:!0,x:9,y:0,z:2},src:"meshes/floor.obj",rotation:0},{position:{isVector3:!0,x:10,y:1,z:3},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:10,y:1,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:9,y:1,z:0},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:7,y:1,z:0},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:7,y:1,z:3},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:8,y:1,z:2},src:"meshes/floor.obj",rotation:0},{position:{isVector3:!0,x:8,y:1,z:1},src:"meshes/floor.obj",rotation:0},{position:{isVector3:!0,x:9,y:1,z:2},src:"meshes/floor.obj",rotation:0},{position:{isVector3:!0,x:9,y:1,z:1},src:"meshes/innercorner.obj",rotation:2},{position:{isVector3:!0,x:9,y:1,z:3},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:8,y:1,z:3},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:7,y:1,z:2},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:7,y:1,z:1},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:8,y:1,z:0},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:10,y:1,z:2},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:8,y:1,z:-1},src:"meshes/bridge.obj",rotation:0},{position:{isVector3:!0,x:8,y:1,z:-2},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:9,y:1,z:-2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:9,y:1,z:-3},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:7,y:1,z:-2},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:7,y:1,z:-3},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:8,y:1,z:-3},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:9,y:0,z:-2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:9,y:0,z:-3},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:8,y:0,z:-3},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:8,y:0,z:-2},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:7,y:0,z:-3},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:7,y:0,z:-2},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:9,y:2,z:2},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:9,y:3,z:2},src:"meshes/roof.obj",rotation:0}];function bO(n,e=20){let t=0;return(...r)=>{clearTimeout(t),t=window.setTimeout(()=>n(...r),e)}}class wO extends EventTarget{constructor(){super();je(this,"model",[]);je(this,"event",new Event("model_updated",{bubbles:!0}));this.addEventListener("model_updated",bO(this.serialize.bind(this),1e3)),window.setTimeout(this.load.bind(this),100)}addItem(t,i){const r=this.getCell(t);r?r.src=i:this.model.push({position:t,src:i,rotation:0}),this.dispatchEvent(this.event)}rotateItem(t){const i=this.getCell(t);i&&(i.rotation=(i.rotation+1)%4),this.dispatchEvent(this.event)}deleteCell(t){const i=this.model.findIndex(r=>r.position.equals(t));i!==-1&&this.model.splice(i,1),this.dispatchEvent(this.event)}getCell(t){return this.model.find(i=>i.position.equals(t))??null}serialize(){localStorage.setItem("editor-model-data",JSON.stringify(this.model))}loadDefault(){this.loadaData(yO)}loadaData(t){t&&(this.model=t,this.model.forEach(i=>{i.position=new H(i.position.x,i.position.y,i.position.z)}),this.dispatchEvent(this.event),is.parse(this))}load(){const t=JSON.parse(localStorage.getItem("editor-model-data"));this.loadaData(t)}}const Po=class Po extends EventTarget{constructor(t){super();je(this,"GRID_SIZE",2);je(this,"rayCaster",new QD);je(this,"dragPlane");je(this,"selectMesh");je(this,"editable",new Jr);je(this,"state",{selected:new H});je(this,"activeLayer",0);je(this,"model",new wO);je(this,"gridHelper");this.graphics=t,this.dragPlane=this.addDragPlane(),this.selectMesh=this.addSelectMesh();const i=40;this.gridHelper=new eO(i*this.GRID_SIZE,i),this.graphics.scene.add(this.gridHelper),this.graphics.scene.add(this.editable),this.graphics.renderer.domElement.addEventListener("mousedown",o=>this.onMouseDown(o));const r=this.renderComponents.bind(this);this.model.addEventListener("model_updated",r),this.addEventListener("layer_changed",r)}addItem(t){this.model.addItem(this.state.selected,t)}rotateItem(){this.model.rotateItem(this.state.selected)}deleteCell(){this.model.deleteCell(this.state.selected)}async renderComponents(){this.editable.clear();for(let t=-40;t<=40;++t)for(let i=-40;i<=40;++i)for(let r=-40;r<=40;++r){const o=this.model.getCell(new H(t,i,r));if(o){const l=await Ox.loadMesh(o.src);i!==this.activeLayer?l.children[0].material=Po.DIMMED_MATERIAL:l.children[0].material=Po.ACTIVE_MATERIAL,l&&(l.position.copy(new H(t*this.GRID_SIZE+this.GRID_SIZE/2,i*this.GRID_SIZE+this.GRID_SIZE/2,r*this.GRID_SIZE+this.GRID_SIZE/2)),l.rotateY(o.rotation*Math.PI/2),this.editable.add(l))}}}onMouseDown(t){if(t.button!==0)return;const i=this.getPoint(t),r=Math.floor(i.x/this.GRID_SIZE),o=Math.floor(i.z/this.GRID_SIZE),l=this.state.selected.y;this.changeSelected(new H(r,l,o))}changeSelected(t){this.state.selected=t,this.updateSelectedPosition();const i=this.model.getCell(this.state.selected);this.dispatchEvent(new CustomEvent("selected",{detail:i}))}updateSelectedPosition(){this.selectMesh.position.copy(new H(this.state.selected.x*this.GRID_SIZE+this.GRID_SIZE/2,this.state.selected.y*this.GRID_SIZE+this.GRID_SIZE/2,this.state.selected.z*this.GRID_SIZE+this.GRID_SIZE/2)),this.dragPlane.position.y=this.state.selected.y*this.GRID_SIZE,this.gridHelper.position.y=this.state.selected.y*this.GRID_SIZE}getPoint(t){const i=this.graphics.renderer.getContext().canvas.getBoundingClientRect(),r=new Je;r.x=(t.clientX-i.left)/(i.right-i.left)*2-1,r.y=-((t.clientY-i.top)/(i.bottom-i.top))*2+1,this.rayCaster.setFromCamera(r,this.graphics.camera);const o=this.rayCaster.intersectObjects([this.dragPlane]);return o.length!==0?o[0].point:new H(0,0,0)}addDragPlane(){const t=new _u(200,200),i=new Yn(t,new gu({color:16777215,transparent:!0,opacity:.5}));return i.rotateOnAxis(new H(1,0,0),-Math.PI/2),i.name="drag plane",i.visible=!1,this.graphics.scene.add(i),i}addSelectMesh(){const t=new as(2,2,2),i=new Lx({color:65280,linewidth:2,dashSize:.1,gapSize:.05}),r=new qc(new BD(t),i);return r.computeLineDistances(),this.graphics.scene.add(r),r}setLayer(t){this.activeLayer=t,this.changeSelected(new H(this.state.selected.x,t,this.state.selected.z)),this.dispatchEvent(new CustomEvent("layer_changed"))}};je(Po,"DIMMED_MATERIAL",new _r({color:6710886,transparent:!0,opacity:.8,side:os})),je(Po,"ACTIVE_MATERIAL",new _r({color:16777215,side:os}));let ad=Po;const pn=[];for(let n=0;n<256;n++)pn[n]=(n<16?"0":"")+n.toString(16);function SO(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}class MO{constructor(e,t,i,r=new Je){je(this,"guid");this.graphics=e,this.reference=t,this.dom=i,this.offset=r,this.guid=SO()}update(){if(!this.reference)return;const e=this.reference.position.clone().project(this.graphics.camera),t=.5*this.graphics.renderer.domElement.offsetWidth,i=.5*this.graphics.renderer.domElement.offsetHeight,r=new Je;r.x=e.x*t+t+this.offset.x,r.y=-(e.y*i)+i+this.offset.y,this.dom.style.top=`${r.y}px`,this.dom.style.left=`${r.x}px`}}class EO{constructor(e){je(this,"elements",[]);this.graphics=e}create(e,t,i=new Je){const r=new MO(this.graphics,e,t,i);return this.elements.push(r),r.guid}update(){this.elements.forEach(e=>e.update())}remove(e){const t=this.elements.findIndex(i=>i.guid===e);if(t===-1)throw`Cound not remove ui element with guid ${e}`;this.elements.splice(t,1)}}class TO extends EventTarget{constructor(t,i){super();je(this,"container");je(this,"rotateButton");je(this,"event",new Event("rotate_clicked"));je(this,"screenSpacePositionedElementController");this.graphics=t,this.editor=i,this.screenSpacePositionedElementController=new EO(this.graphics),this.container=document.querySelector(".canvas"),this.rotateButton=document.createElement("button"),this.rotateButton.classList.add("rotate__button"),this.rotateButton.style.position="absolute",this.container.appendChild(this.rotateButton),this.rotateButton.addEventListener("click",()=>this.dispatchEvent(this.event)),this.screenSpacePositionedElementController.create(this.editor.selectMesh,this.rotateButton,new Je(40,40)),this.graphics.addEventListener("camera_rotated",()=>this.screenSpacePositionedElementController.update()),this.editor.addEventListener("selected",r=>{this.screenSpacePositionedElementController.update(),this.rotateButton.classList.toggle("hidden",!r.detail)})}}let pr;function Fx(){return{editor:pr,createEditor(n){const e=new jd(n);pr=new ad(e),new TO(e,pr).addEventListener("rotate_clicked",()=>pr.rotateItem()),e.animate()},addObject(n){pr.addItem(n)},rotateObject(){pr.rotateItem()},deleteCell(){pr.deleteCell()},setLayer(n){pr.setLayer(n)},loadDefault(){pr.model.loadDefault()}}}function AO(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;zA()?il(n):e?n():Cd(n)}var CO=0;function Ws(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=xr(!1),i=xr(n),r=xr(null),o=Yt.isClient()?window.document:void 0,l=e.document,c=l===void 0?o:l,u=e.immediate,h=u===void 0?!0:u,d=e.manual,p=d===void 0?!1:d,m=e.name,_=m===void 0?"style_".concat(++CO):m,y=e.id,x=y===void 0?void 0:y,v=e.media,w=v===void 0?void 0:v,T=e.nonce,F=T===void 0?void 0:T,I=function(){},P=function(C){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(c){var X=U.name||_,Y=U.id||x,Fe=U.nonce||F;r.value=c.querySelector('style[data-primevue-style-id="'.concat(X,'"]'))||c.getElementById(Y)||c.createElement("style"),r.value.isConnected||(i.value=C||n,Yt.setAttributes(r.value,{type:"text/css",id:Y,media:w,nonce:Fe}),c.head.appendChild(r.value),Yt.setAttribute(r.value,"data-primevue-style-id",_),Yt.setAttributes(r.value,U)),!t.value&&(I=Ca(i,function(Ae){r.value.textContent=Ae},{immediate:!0}),t.value=!0)}},B=function(){!c||!t.value||(I(),Yt.isExist(r.value)&&c.head.removeChild(r.value),t.value=!1)};return h&&!p&&AO(P),{id:x,name:_,css:i,unload:B,load:P,isLoaded:Sd(t)}}var LO=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
}
`,PO=Ws(LO,{name:"base",manual:!0}),Nx=PO.load;function Za(n){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Za(n)}function W_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Bt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?W_(Object(t),!0).forEach(function(i){ld(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function ld(n,e,t){return e=RO(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function RO(n){var e=IO(n,"string");return Za(e)==="symbol"?e:String(e)}function IO(n,e){if(Za(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(Za(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var DO={},OO=`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`,FO=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: default;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,NO=`
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}

.p-float-label .input:-webkit-autofill ~ label {
    top: -20px;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,zO=`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton.p-radiobutton-disabled {
    cursor: default;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}
`,BO=`
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default !important;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
`.concat(OO,`
`).concat(FO,`
`).concat(NO,`
`).concat(zO,`
`),UO=Ws(BO,{name:"common",manual:!0}),VO=UO.load,kO=Ws("",{name:"global",manual:!0}),HO=kO.load,xu={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var t,i;VO(void 0,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}),this.$options.css&&this.$css.loadStyle(void 0,{nonce:(i=this.$config)===null||i===void 0||(i=i.csp)===null||i===void 0?void 0:i.nonce})}}}},beforeCreate:function(){var e,t,i,r,o,l,c,u,h,d,p,m=(e=this.pt)===null||e===void 0?void 0:e._usept,_=m?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,y=m?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=y||_)===null||r===void 0||(r=r.hooks)===null||r===void 0||(o=r.onBeforeCreate)===null||o===void 0||o.call(r);var x=(l=this.$config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l._usept,v=x?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.originalValue:void 0,w=x?(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0||(u=u.pt)===null||u===void 0?void 0:u.value:(h=this.$primevue)===null||h===void 0||(h=h.config)===null||h===void 0?void 0:h.pt;(d=w||v)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(p=d.onBeforeCreate)===null||p===void 0||p.call(d)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;Nx(void 0,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),i==null||i()}},_loadGlobalStyles:function(){var e,t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);ht.isNotEmpty(t)&&HO(t,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=ht.toFlatCase(t).split("."),o=r.shift();return o?ht.isObject(e)?this._getOptionValue(ht.getItemValue(e[Object.keys(e).find(function(l){return ht.toFlatCase(l)===o})||""],i),r.join("."),i):void 0:ht.getItemValue(e,i)},_getPTValue:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o="data-pc-",l=/./g.test(t)&&!!i[t.split(".")[0]],c=this._getPropValue("ptOptions")||{},u=c.mergeSections,h=u===void 0?!0:u,d=c.mergeProps,p=d===void 0?!1:d,m=r?l?this._useGlobalPT(this._getPTClassValue,t,i):this._useDefaultPT(this._getPTClassValue,t,i):void 0,_=l?void 0:this._usePT(this._getPT(e,this.$name),this._getPTClassValue,t,Bt(Bt({},i),{},{global:m||{}})),y=t!=="transition"&&Bt(Bt({},t==="root"&&ld({},"".concat(o,"name"),ht.toFlatCase(this.$.type.name))),{},ld({},"".concat(o,"section"),ht.toFlatCase(t)));return h||!h&&_?p?Pt(m,_,y):Bt(Bt(Bt({},m),_),y):Bt(Bt({},_),y)},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return ht.isString(e)||ht.isArray(e)?{class:e}:e},_getPT:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=e==null?void 0:e._usept,l=function(u){var h,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=r?r(u):u,m=ht.toFlatCase(i),_=ht.toFlatCase(t.$name);return(h=d?m!==_?p==null?void 0:p[m]:void 0:p==null?void 0:p[m])!==null&&h!==void 0?h:p};return ht.isNotEmpty(o)?{_usept:o,originalValue:l(e.originalValue),value:l(e.value)}:l(e,!0)},_usePT:function(e,t,i,r){var o=function(y){return t(y,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var l=e._usept||{},c=l.mergeSections,u=c===void 0?!0:c,h=l.mergeProps,d=h===void 0?!1:h,p=o(e.originalValue),m=o(e.value);return p===void 0&&m===void 0?void 0:ht.isString(m)?m:ht.isString(p)?p:u||!u&&m?d?Pt(p,m):Bt(Bt({},p),m):m}return o(e)},_useGlobalPT:function(e,t,i){return this._usePT(this.globalPT,e,t,i)},_useDefaultPT:function(e,t,i){return this._usePT(this.defaultPT,e,t,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,Bt(Bt({},this.$params),t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,Bt({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$css.classes,e,Bt(Bt({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var r=this._getOptionValue(this.$css.inlineStyles,e,Bt(Bt({},this.$params),i)),o=this._getOptionValue(DO,e,Bt(Bt({},this.$params),i));return[o,r]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return ht.getItemValue(i,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return t._getOptionValue(i,t.$name,Bt({},t.$params))||ht.getItemValue(i,Bt({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){return{instance:this,props:this.$props,state:this.$data,parentInstance:this.$parentInstance}},$css:function(){return Bt(Bt({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$css),this.$options.css)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name}}},GO=`
.p-badge {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    padding: 0 .5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%,-50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}
`,WO={root:function(e){var t=e.props,i=e.instance;return["p-badge p-component",{"p-badge-no-gutter":ht.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":ht.isEmpty(t.value)&&!i.$slots.default,"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warning":t.severity==="warning","p-badge-danger":t.severity==="danger"}]}},$O=Ws(GO,{name:"badge",manual:!0}),jO=$O.load,qO={name:"BaseBadge",extends:xu,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},css:{classes:WO,loadStyle:jO},provide:function(){return{$parentInstance:this}}},zx={name:"Badge",extends:qO};function XO(n,e,t,i,r,o){return Rt(),Ln("span",Pt({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"badge"}),[vr(n.$slots,"default",{},function(){return[lu(iv(n.value),1)]})],16)}zx.render=XO;var YO=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,KO=Ws(YO,{name:"baseicon",manual:!0}),ZO=KO.load,Yd={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},beforeMount:function(){var e;ZO(void 0,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},methods:{pti:function(){var e=ht.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e}}},computed:{$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config}}},Bx={name:"SpinnerIcon",extends:Yd,computed:{pathId:function(){return"pv_icon_clip_".concat(FC())}}},JO=["clipPath"],QO=Kt("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),eF=[QO],tF=["id"],nF=Kt("rect",{width:"14",height:"14",fill:"white"},null,-1),iF=[nF];function rF(n,e,t,i,r,o){return Rt(),Ln("svg",Pt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),[Kt("g",{clipPath:"url(#".concat(o.pathId,")")},eF,8,JO),Kt("defs",null,[Kt("clipPath",{id:"".concat(o.pathId)},iF,8,tF)])],16)}Bx.render=rF;function Ja(n){"@babel/helpers - typeof";return Ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ja(n)}function $_(n,e){return lF(n)||aF(n,e)||oF(n,e)||sF()}function sF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oF(n,e){if(n){if(typeof n=="string")return j_(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j_(n,e)}}function j_(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function aF(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,l,c=[],u=!0,h=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(i=o.call(t)).done)&&(c.push(i.value),c.length!==e);u=!0);}catch(d){h=!0,r=d}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(h)throw r}}return c}}function lF(n){if(Array.isArray(n))return n}function q_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function kt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?q_(Object(t),!0).forEach(function(i){cd(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function cd(n,e,t){return e=cF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cF(n){var e=uF(n,"string");return Ja(e)==="symbol"?e:String(e)}function uF(n,e){if(Ja(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(Ja(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ot={_getMeta:function(){return[ht.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],ht.getItemValue(ht.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=ht.toFlatCase(t).split("."),o=r.shift();return o?ht.isObject(e)?Ot._getOptionValue(ht.getItemValue(e[Object.keys(e).find(function(l){return ht.toFlatCase(l)===o})||""],i),r.join("."),i):void 0:ht.getItemValue(e,i)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=function(){var T=Ot._getOptionValue.apply(Ot,arguments);return ht.isString(T)||ht.isArray(T)?{class:T}:T},u="data-pc-",h=((e=t.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||{},d=h.mergeSections,p=d===void 0?!0:d,m=h.mergeProps,_=m===void 0?!1:m,y=l?Ot._useDefaultPT(t,t.defaultPT,c,r,o):void 0,x=Ot._usePT(t,Ot._getPT(i,t.$name),c,r,kt(kt({},o),{},{global:y||{}})),v=kt(kt({},r==="root"&&cd({},"".concat(u,"name"),ht.toFlatCase(t.$name))),{},cd({},"".concat(u,"section"),ht.toFlatCase(r)));return p||!p&&x?_?Pt(y,x,v):kt(kt(kt({},y),x),v):kt(kt({},x),v)},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=e==null?void 0:e._usept,o=function(c){var u,h=i?i(c):c,d=ht.toFlatCase(t);return(u=h==null?void 0:h[d])!==null&&u!==void 0?u:h};return ht.isNotEmpty(r)?{_usept:r,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,o=function(y){return t(y,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var l=e._usept||{},c=l.mergeSections,u=c===void 0?!0:c,h=l.mergeProps,d=h===void 0?!1:h,p=o(e.originalValue),m=o(e.value);return p===void 0&&m===void 0?void 0:ht.isString(m)?m:ht.isString(p)?p:u||!u&&m?d?Pt(p,m):kt(kt({},p),m):m}return o(e)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return Ot._usePT(e,t,i,r,o)},_hook:function(e,t,i,r,o,l){var c,u,h,d="on".concat(ht.toCapitalCase(t)),p=r==null||(c=r.instance)===null||c===void 0||(c=c.$primevue)===null||c===void 0?void 0:c.config,m=i==null?void 0:i.$instance,_=Ot._usePT(m,Ot._getPT(r==null||(u=r.value)===null||u===void 0?void 0:u.pt,e),Ot._getOptionValue,"hooks.".concat(d)),y=Ot._useDefaultPT(m,p==null||(h=p.pt)===null||h===void 0||(h=h.directives)===null||h===void 0?void 0:h[e],Ot._getOptionValue,"hooks.".concat(d)),x={el:i,binding:r,vnode:o,prevVnode:l};_==null||_(m,x),y==null||y(m,x)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=function(o,l,c,u,h){var d,p,m;l._$instances=l._$instances||{};var _=c==null||(d=c.instance)===null||d===void 0||(d=d.$primevue)===null||d===void 0?void 0:d.config,y=l._$instances[e]||{},x=ht.isEmpty(y)?kt(kt({},t),t==null?void 0:t.methods):{};l._$instances[e]=kt(kt({},y),{},{$name:e,$host:l,$binding:c,$el:y.$el||void 0,$css:kt({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},t==null?void 0:t.css),$config:_,defaultPT:Ot._getPT(_==null?void 0:_.pt,void 0,function(v){var w;return v==null||(w=v.directives)===null||w===void 0?void 0:w[e]}),isUnstyled:l.unstyled!==void 0?l.unstyled:_==null?void 0:_.unstyled,ptm:function(){var w,T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ot._getPTValue(l.$instance,(w=l.$instance)===null||w===void 0||(w=w.$binding)===null||w===void 0||(w=w.value)===null||w===void 0?void 0:w.pt,T,kt({},F))},ptmo:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ot._getPTValue(l.$instance,w,T,F,!1)},cx:function(){var w,T,F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(w=l.$instance)!==null&&w!==void 0&&w.isUnstyled?void 0:Ot._getOptionValue((T=l.$instance)===null||T===void 0||(T=T.$css)===null||T===void 0?void 0:T.classes,F,kt({},I))},sx:function(){var w,T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return F?Ot._getOptionValue((w=l.$instance)===null||w===void 0||(w=w.$css)===null||w===void 0?void 0:w.inlineStyles,T,kt({},I)):void 0}},x),l.$instance=l._$instances[e],(p=(m=l.$instance)[o])===null||p===void 0||p.call(m,l,c,u,h),Ot._hook(e,o,l,c,u,h)};return{created:function(o,l,c,u){i("created",o,l,c,u)},beforeMount:function(o,l,c,u){var h,d,p,m,_,y=l==null||(h=l.instance)===null||h===void 0||(h=h.$primevue)===null||h===void 0?void 0:h.config;Nx(void 0,{nonce:y==null||(d=y.csp)===null||d===void 0?void 0:d.nonce}),!((p=o.$instance)!==null&&p!==void 0&&p.isUnstyled)&&((m=o.$instance)===null||m===void 0||(m=m.$css)===null||m===void 0||m.loadStyle(void 0,{nonce:y==null||(_=y.csp)===null||_===void 0?void 0:_.nonce})),i("beforeMount",o,l,c,u)},mounted:function(o,l,c,u){i("mounted",o,l,c,u)},beforeUpdate:function(o,l,c,u){i("beforeUpdate",o,l,c,u)},updated:function(o,l,c,u){i("updated",o,l,c,u)},beforeUnmount:function(o,l,c,u){i("beforeUnmount",o,l,c,u)},unmounted:function(o,l,c,u){i("unmounted",o,l,c,u)}}},extend:function(){var e=Ot._getMeta.apply(Ot,arguments),t=$_(e,2),i=t[0],r=t[1];return kt({extend:function(){var l=Ot._getMeta.apply(Ot,arguments),c=$_(l,2),u=c[0],h=c[1];return Ot.extend(u,kt(kt(kt({},r),r==null?void 0:r.methods),h))}},Ot._extend(i,r))}},fF=`
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,hF={root:"p-ink"},dF=Ws(fF,{name:"ripple",manual:!0}),pF=dF.load,mF=Ot.extend({css:{classes:hF,loadStyle:pF}});function gF(n){return yF(n)||xF(n)||vF(n)||_F()}function _F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vF(n,e){if(n){if(typeof n=="string")return ud(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ud(n,e)}}function xF(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yF(n){if(Array.isArray(n))return ud(n)}function ud(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var bF=mF.extend("ripple",{mounted:function(e,t){var i=t.instance.$primevue;if(i&&i.config&&i.config.ripple){var r;e.unstyled=i.config.unstyled||((r=t.value)===null||r===void 0?void 0:r.unstyled)||!1,this.create(e),this.bindEvents(e)}e.setAttribute("data-pd-ripple",!0)},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(e){var t=Yt.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!e.unstyled&&this.cx("root"),onAnimationEnd:this.onAnimationEnd,"p-bind":this.ptm("root")});e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=e.currentTarget,i=this.getInk(t);if(!(!i||getComputedStyle(i,null).display==="none")){if(!t.unstyled&&Yt.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!Yt.getHeight(i)&&!Yt.getWidth(i)){var r=Math.max(Yt.getOuterWidth(t),Yt.getOuterHeight(t));i.style.height=r+"px",i.style.width=r+"px"}var o=Yt.getOffset(t),l=e.pageX-o.left+document.body.scrollTop-Yt.getWidth(i)/2,c=e.pageY-o.top+document.body.scrollLeft-Yt.getHeight(i)/2;i.style.top=c+"px",i.style.left=l+"px",!t.unstyled&&Yt.addClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.unstyled&&Yt.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!e.currentTarget.unstyled&&Yt.removeClass(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?gF(e.children).find(function(t){return Yt.getAttribute(t,"data-pc-name")==="ripple"}):void 0}}});function Qa(n){"@babel/helpers - typeof";return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qa(n)}function jr(n,e,t){return e=wF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function wF(n){var e=SF(n,"string");return Qa(e)==="symbol"?e:String(e)}function SF(n,e){if(Qa(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(Qa(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var MF={root:function(e){var t,i=e.instance,r=e.props;return["p-button p-component",(t={"p-button-icon-only":i.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-disabled":i.$attrs.disabled||i.$attrs.disabled===""||r.loading,"p-button-loading":r.loading,"p-button-loading-label-only":r.loading&&!i.hasIcon&&r.label,"p-button-link":r.link},jr(t,"p-button-".concat(r.severity),r.severity),jr(t,"p-button-raised",r.raised),jr(t,"p-button-rounded",r.rounded),jr(t,"p-button-text",r.text),jr(t,"p-button-outlined",r.outlined),jr(t,"p-button-sm",r.size==="small"),jr(t,"p-button-lg",r.size==="large"),jr(t,"p-button-plain",r.plain),t)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(e){var t=e.props;return["p-button-icon",{"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label,"p-button-icon-top":t.iconPos==="top"&&t.label,"p-button-icon-bottom":t.iconPos==="bottom"&&t.label}]},label:"p-button-label"},EF={name:"BaseButton",extends:xu,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},css:{classes:MF},provide:function(){return{$parentInstance:this}}},Ux={name:"Button",extends:EF,methods:{getPTOptions:function(e){var t,i;return this.ptm(e,{parent:{props:(t=this.$parent)===null||t===void 0?void 0:t.$props,state:(i=this.$parent)===null||i===void 0?void 0:i.$data},context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:Bx,Badge:zx},directives:{ripple:bF}},TF=["aria-label","disabled","data-pc-severity"];function AF(n,e,t,i,r,o){var l=Us("SpinnerIcon"),c=Us("Badge"),u=hA("ripple");return eA((Rt(),Ln("button",Pt({class:n.cx("root"),type:"button","aria-label":o.defaultAriaLabel,disabled:o.disabled},o.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":n.severity}),[vr(n.$slots,"default",{},function(){return[n.loading?vr(n.$slots,"loadingicon",{key:0,class:Ua([n.cx("loadingIcon"),n.cx("icon")])},function(){return[n.loadingIcon?(Rt(),Ln("span",Pt({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Rt(),fi(l,Pt({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):vr(n.$slots,"icon",{key:1,class:Ua([n.cx("icon")])},function(){return[n.icon?(Rt(),Ln("span",Pt({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):Ia("",!0)]}),Kt("span",Pt({class:n.cx("label")},n.ptm("label")),iv(n.label||" "),17),n.badge?(Rt(),fi(c,Pt({key:2,value:n.badge,class:n.badgeClass,unstyled:n.unstyled},n.ptm("badge")),null,16,["value","class","unstyled"])):Ia("",!0)]})],16,TF)),[[u]])}Ux.render=AF;var Vx={name:"AngleDownIcon",extends:Yd},CF=Kt("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1),LF=[CF];function PF(n,e,t,i,r,o){return Rt(),Ln("svg",Pt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),LF,16)}Vx.render=PF;var kx={name:"AngleUpIcon",extends:Yd},RF=Kt("path",{d:"M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",fill:"currentColor"},null,-1),IF=[RF];function DF(n,e,t,i,r,o){return Rt(),Ln("svg",Pt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),IF,16)}kx.render=DF;var OF={root:function(e){var t=e.instance,i=e.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large"}]}},FF={name:"BaseInputText",extends:xu,props:{modelValue:null,size:{type:String,default:null}},css:{classes:OF},provide:function(){return{$parentInstance:this}}},Hx={name:"InputText",extends:FF,emits:["update:modelValue"],methods:{onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},NF=["value"];function zF(n,e,t,i,r,o){return Rt(),Ln("input",Pt({class:n.cx("root"),value:n.modelValue,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},n.ptm("root",o.ptmParams),{"data-pc-name":"inputtext"}),null,16,NF)}Hx.render=zF;var BF=`
.p-inputnumber {
    display: inline-flex;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    flex: 1 1 auto;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`,UF={root:function(e){var t=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused,"p-inputnumber-buttons-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":i.showButtons&&i.buttonLayout==="vertical"}]},input:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-up",{"p-disabled":i.showButtons&&i.max!==null&&t.maxBoundry()}]},decrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-down",{"p-disabled":i.showButtons&&i.min!==null&&t.minBoundry()}]}},VF=Ws(BF,{name:"inputnumber",manual:!0}),kF=VF.load,HF={name:"BaseInputNumber",extends:xu,props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},incrementButtonProps:{type:null,default:null},decrementButtonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:UF,loadStyle:kF},provide:function(){return{$parentInstance:this}}};function el(n){"@babel/helpers - typeof";return el=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},el(n)}function X_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Y_(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?X_(Object(t),!0).forEach(function(i){GF(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):X_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function GF(n,e,t){return e=WF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function WF(n){var e=$F(n,"string");return el(e)==="symbol"?e:String(e)}function $F(n,e){if(el(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(el(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jF(n){return KF(n)||YF(n)||XF(n)||qF()}function qF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XF(n,e){if(n){if(typeof n=="string")return fd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fd(n,e)}}function YF(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function KF(n){if(Array.isArray(n))return fd(n)}function fd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var Gx={name:"InputNumber",extends:HF,emits:["update:modelValue","input","focus","blur"],numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue:function(e){this.d_modelValue=e},locale:function(e,t){this.updateConstructParser(e,t)},localeMatcher:function(e,t){this.updateConstructParser(e,t)},mode:function(e,t){this.updateConstructParser(e,t)},currency:function(e,t){this.updateConstructParser(e,t)},currencyDisplay:function(e,t){this.updateConstructParser(e,t)},useGrouping:function(e,t){this.updateConstructParser(e,t)},minFractionDigits:function(e,t){this.updateConstructParser(e,t)},maxFractionDigits:function(e,t){this.updateConstructParser(e,t)},suffix:function(e,t){this.updateConstructParser(e,t)},prefix:function(e,t){this.updateConstructParser(e,t)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=jF(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),t=new Map(e.map(function(i,r){return[i,r]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return t.get(i)}},updateConstructParser:function(e,t){e!==t&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,Y_(Y_({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var t=new Intl.NumberFormat(this.locale,this.getOptions()),i=t.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;var i=+t;return isNaN(i)?null:i}return null},repeat:function(e,t,i){var r=this;if(!this.readonly){var o=t||500;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,40,i)},o),this.spin(e,i)}},spin:function(e,t){if(this.$refs.input){var i=this.step*t,r=this.parseValue(this.$refs.input.$el.value)||0,o=this.validateValue(r+i);this.updateInput(o,null,"spin"),this.updateModel(e,o),this.handleOnInput(e,r,o)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}var t=e.target.selectionStart,i=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(r.charAt(t-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(r.charAt(t))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":o=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(o),this.$refs.input.$el.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),t===i){var l=r.charAt(t-1),c=this.getDecimalCharIndexes(r),u=c.decimalCharIndex,h=c.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(l)){var d=this.getDecimalLength(r);if(this._group.test(l))this._group.lastIndex=0,o=r.slice(0,t-2)+r.slice(t-1);else if(this._decimal.test(l))this._decimal.lastIndex=0,d?this.$refs.input.$el.setSelectionRange(t-1,t-1):o=r.slice(0,t-1)+r.slice(t);else if(u>0&&t>u){var p=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";o=r.slice(0,t-1)+p+r.slice(t)}else h===1?(o=r.slice(0,t-1)+"0"+r.slice(t),o=this.parseValue(o)>0?o:""):o=r.slice(0,t-1)+r.slice(t)}this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,t,i),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===i){var m=r.charAt(t),_=this.getDecimalCharIndexes(r),y=_.decimalCharIndex,x=_.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(m)){var v=this.getDecimalLength(r);if(this._group.test(m))this._group.lastIndex=0,o=r.slice(0,t)+r.slice(t+2);else if(this._decimal.test(m))this._decimal.lastIndex=0,v?this.$refs.input.$el.setSelectionRange(t+1,t+1):o=r.slice(0,t)+r.slice(t+1);else if(y>0&&t>y){var w=this.isDecimalMode()&&(this.minFractionDigits||0)<v?"":"0";o=r.slice(0,t)+w+r.slice(t+1)}else x===1?(o=r.slice(0,t)+"0"+r.slice(t+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,t)+r.slice(t+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,t,i),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break}}},onInputKeyPress:function(e){if(!this.readonly){e.preventDefault();var t=e.which||e.keyCode,i=String.fromCharCode(t),r=this.isDecimalSign(i),o=this.isMinusSign(i);(48<=t&&t<=57||o||r)&&this.insert(e,i,{isDecimalSign:r,isMinusSign:o})}},onPaste:function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("Text");if(t){var i=this.parseValue(t);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),r=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:r}},getCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var r=e.search(this._suffix);this._suffix.lastIndex=0;var o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:i,suffixCharIndex:r,currencyCharIndex:o}},insert:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},r=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&r!==-1)){var o=this.$refs.input.$el.selectionStart,l=this.$refs.input.$el.selectionEnd,c=this.$refs.input.$el.value.trim(),u=this.getCharIndexes(c),h=u.decimalCharIndex,d=u.minusCharIndex,p=u.suffixCharIndex,m=u.currencyCharIndex,_;if(i.isMinusSign)o===0&&(_=c,(d===-1||l!==0)&&(_=this.insertText(c,t,0,l)),this.updateValue(e,_,t,"insert"));else if(i.isDecimalSign)h>0&&o===h?this.updateValue(e,c,t,"insert"):h>o&&h<l?(_=this.insertText(c,t,o,l),this.updateValue(e,_,t,"insert")):h===-1&&this.maxFractionDigits&&(_=this.insertText(c,t,o,l),this.updateValue(e,_,t,"insert"));else{var y=this.numberFormat.resolvedOptions().maximumFractionDigits,x=o!==l?"range-insert":"insert";if(h>0&&o>h){if(o+t.length-(h+1)<=y){var v=m>=o?m-1:p>=o?p:c.length;_=c.slice(0,o)+t+c.slice(o+t.length,v)+c.slice(v),this.updateValue(e,_,t,x)}}else _=this.insertText(c,t,o,l),this.updateValue(e,_,t,x)}}},insertText:function(e,t,i,r){var o=t==="."?t:t.split(".");if(o.length===2){var l=e.slice(i,r).search(this._decimal);return this._decimal.lastIndex=0,l>0?e.slice(0,i)+this.formatValue(t)+e.slice(r):e||this.formatValue(t)}else return r-i===e.length?this.formatValue(t):i===0?t+e.slice(r):r===e.length?e.slice(0,i)+t:e.slice(0,i)+t+e.slice(r)},deleteRange:function(e,t,i){var r;return i-t===e.length?r="":t===0?r=e.slice(i):i===e.length?r=e.slice(0,t):r=e.slice(0,t)+e.slice(i),r},initCursor:function(){var e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,i=t.length,r=null,o=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-o;var l=t.charAt(e);if(this.isNumeralChar(l))return e+o;for(var c=e-1;c>=0;)if(l=t.charAt(c),this.isNumeralChar(l)){r=c+o;break}else c--;if(r!==null)this.$refs.input.$el.setSelectionRange(r+1,r+1);else{for(c=e;c<i;)if(l=t.charAt(c),this.isNumeralChar(l)){r=c+o;break}else c++;r!==null&&this.$refs.input.$el.setSelectionRange(r,r)}return r||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==Yt.getSelection()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,t,i,r){var o=this.$refs.input.$el.value,l=null;t!=null&&(l=this.parseValue(t),l=!l&&!this.allowEmpty?0:l,this.updateInput(l,i,r,t),this.handleOnInput(e,o,l))},handleOnInput:function(e,t,i){this.isValueChanged(t,i)&&this.$emit("input",{originalEvent:e,value:i,formattedValue:t})},isValueChanged:function(e,t){if(t===null&&e!==null)return!0;if(t!=null){var i=typeof e=="string"?this.parseValue(e):e;return t!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,t,i,r){t=t||"";var o=this.$refs.input.$el.value,l=this.formatValue(e),c=o.length;if(l!==r&&(l=this.concatValues(l,r)),c===0){this.$refs.input.$el.value=l,this.$refs.input.$el.setSelectionRange(0,0);var u=this.initCursor(),h=u+t.length;this.$refs.input.$el.setSelectionRange(h,h)}else{var d=this.$refs.input.$el.selectionStart,p=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=l;var m=l.length;if(i==="range-insert"){var _=this.parseValue((o||"").slice(0,d)),y=_!==null?_.toString():"",x=y.split("").join("(".concat(this.groupChar,")?")),v=new RegExp(x,"g");v.test(l);var w=t.split("").join("(".concat(this.groupChar,")?")),T=new RegExp(w,"g");T.test(l.slice(v.lastIndex)),p=v.lastIndex+T.lastIndex,this.$refs.input.$el.setSelectionRange(p,p)}else if(m===c)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(p+1,p+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(p-1,p-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(p,p);else if(i==="delete-back-single"){var F=o.charAt(p-1),I=o.charAt(p),P=c-m,B=this._group.test(I);B&&P===1?p+=1:!B&&this.isNumeralChar(F)&&(p+=-1*P+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(p,p)}else if(o==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var j=this.initCursor(),C=j+t.length+1;this.$refs.input.$el.setSelectionRange(C,C)}else p=p+(m-c),this.$refs.input.$el.setSelectionRange(p,p)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,t){if(e&&t){var i=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+t.slice(i):e}return e},getDecimalLength:function(e){if(e){var t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==Yt.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){this.focused=!1;var t=e.target,i=this.validateValue(this.parseValue(t.value));this.$emit("blur",{originalEvent:e,value:t.value}),t.value=this.formatValue(i),t.setAttribute("aria-valuenow",i),this.updateModel(e,i)},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_modelValue>=this.max},minBoundry:function(){return this.d_modelValue<=this.min}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{INInputText:Hx,INButton:Ux,AngleUpIcon:kx,AngleDownIcon:Vx}};function tl(n){"@babel/helpers - typeof";return tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tl(n)}function K_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Hi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?K_(Object(t),!0).forEach(function(i){ZF(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):K_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function ZF(n,e,t){return e=JF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function JF(n){var e=QF(n,"string");return tl(e)==="symbol"?e:String(e)}function QF(n,e){if(tl(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(tl(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function eN(n,e,t,i,r,o){var l=Us("INInputText"),c=Us("INButton");return Rt(),Ln("span",Pt({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"inputnumber"}),[qt(l,Pt({ref:"input",id:n.inputId,role:"spinbutton",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:o.formattedValue,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,onInput:o.onUserInput,onKeydown:o.onInputKeyDown,onKeypress:o.onInputKeyPress,onPaste:o.onPaste,onClick:o.onInputClick,onFocus:o.onInputFocus,onBlur:o.onInputBlur},Hi(Hi({},n.inputProps),n.ptm("input")),{unstyled:n.unstyled,"data-pc-section":"input"}),null,16,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","disabled","readonly","placeholder","aria-labelledby","aria-label","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","unstyled"]),n.showButtons&&n.buttonLayout==="stacked"?(Rt(),Ln("span",Pt({key:0,class:n.cx("buttonGroup")},n.ptm("buttonGroup")),[qt(c,Pt({class:[n.cx("incrementButton"),n.incrementButtonClass]},ic(o.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},Hi(Hi({},n.incrementButtonProps),n.ptm("incrementButton")),{unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:Zr(function(){return[vr(n.$slots,"incrementbuttonicon",{},function(){return[(Rt(),fi(nc(n.incrementButtonIcon?"span":"AngleUpIcon"),Pt({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"]),qt(c,Pt({class:[n.cx("decrementButton"),n.decrementButtonClass]},ic(o.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},Hi(Hi({},n.decrementButtonProps),n.ptm("decrementButton")),{unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:Zr(function(){return[vr(n.$slots,"decrementbuttonicon",{},function(){return[(Rt(),fi(nc(n.decrementButtonIcon?"span":"AngleDownIcon"),Pt({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])],16)):Ia("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(Rt(),fi(c,Pt({key:1,class:[n.cx("incrementButton"),n.incrementButtonClass]},ic(o.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},Hi(Hi({},n.incrementButtonProps),n.ptm("incrementButton")),{unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:Zr(function(){return[vr(n.$slots,"incrementbuttonicon",{},function(){return[(Rt(),fi(nc(n.incrementButtonIcon?"span":"AngleUpIcon"),Pt({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):Ia("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(Rt(),fi(c,Pt({key:2,class:[n.cx("decrementButton"),n.decrementButtonClass]},ic(o.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},Hi(Hi({},n.decrementButtonProps),n.ptm("decrementButton")),{unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:Zr(function(){return[vr(n.$slots,"decrementbuttonicon",{},function(){return[(Rt(),fi(nc(n.decrementButtonIcon?"span":"AngleDownIcon"),Pt({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):Ia("",!0)],16)}Gx.render=eN;const tN=n=>($T("data-v-b6b559c4"),n=n(),jT(),n),nN={class:"wrapper"},iN={class:"objects"},rN=tN(()=>Kt("div",{class:"object"},"void",-1)),sN={class:"object"},oN=["src","data-src"],aN=Yo({__name:"EditorMenu",setup(n){const e=xr([]),{addObject:t,rotateObject:i,deleteCell:r,setLayer:o,loadDefault:l}=Fx(),c=xr(0);il(async()=>{const p=["void",...To];for(let m=0;m<p.length;++m){const _=p[m],y=await xO.render(_);y&&e.value.push({data:y,src:_})}});function u(p){const _=p.target.getAttribute("data-src");t(_)}function h(){i()}function d(){r()}return(p,m)=>{const _=Us("router-link");return Rt(),Ln("div",nN,[Kt("div",iN,[rN,(Rt(!0),Ln(Xn,null,dA(e.value,y=>(Rt(),Ln("div",sN,[Kt("img",{src:y.data,class:"object-image","data-src":y.src,onClick:u},null,8,oN)]))),256))]),Kt("button",{class:"btn",onClick:h,style:{display:"none"}},"Rotate"),Kt("button",{class:"btn",onClick:d},"Delete"),Kt("button",{class:"btn",onClick:m[0]||(m[0]=(...y)=>qi(l)&&qi(l)(...y))},"Load Default"),qt(qi(Gx),{modelValue:c.value,"onUpdate:modelValue":m[1]||(m[1]=y=>c.value=y),inputId:"minmax-buttons",mode:"decimal",showButtons:"",min:-40,max:40,onInput:m[2]||(m[2]=y=>qi(o)(parseInt(String(y.value))))},null,8,["modelValue"]),qt(_,{to:"generate",class:"btn"},{default:Zr(()=>[lu("Generate")]),_:1})])}}});const lN=fu(aN,[["__scopeId","data-v-b6b559c4"]]),cN={class:"layout"},uN=Yo({__name:"EditorLayout",setup(n){return(e,t)=>(Rt(),Ln("div",cN,[Kt("aside",null,[qt(lN)]),Kt("main",null,[vr(e.$slots,"default",{},void 0,!0)])]))}});const fN=fu(uN,[["__scopeId","data-v-736f7da2"]]),Z_=Yo({__name:"Editor",setup(n){const{createEditor:e}=Fx(),t=xr();return il(()=>e(t.value)),(i,r)=>(Rt(),fi(fN,null,{default:Zr(()=>[Kt("div",{class:"canvas",ref_key:"canvas",ref:t},null,512)]),_:1}))}});const hN=[{path:"/",component:Z_},{path:"/editor",component:Z_},{path:"/generate",component:_O}],dN=xC({history:F3(),routes:hN}),pN=g3(),yu=h3(WC);yu.use(dN);yu.use(pN);yu.use(kC);yu.mount("#app");
