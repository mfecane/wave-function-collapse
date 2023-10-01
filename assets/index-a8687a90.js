var Xf=Object.defineProperty;var Yf=(i,e,t)=>e in i?Xf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var De=(i,e,t)=>(Yf(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ya(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const $e={},Wi=[],Xt=()=>{},$f=()=>!1,Zf=/^on[^a-z]/,Qr=i=>Zf.test(i),$a=i=>i.startsWith("onUpdate:"),ot=Object.assign,Za=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Kf=Object.prototype.hasOwnProperty,Ge=(i,e)=>Kf.call(i,e),Fe=Array.isArray,Rs=i=>eo(i)==="[object Map]",Jf=i=>eo(i)==="[object Set]",ze=i=>typeof i=="function",at=i=>typeof i=="string",Ka=i=>typeof i=="symbol",Je=i=>i!==null&&typeof i=="object",sh=i=>Je(i)&&ze(i.then)&&ze(i.catch),Qf=Object.prototype.toString,eo=i=>Qf.call(i),ed=i=>eo(i).slice(8,-1),td=i=>eo(i)==="[object Object]",Ja=i=>at(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Fr=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},nd=/-(\w)/g,fn=to(i=>i.replace(nd,(e,t)=>t?t.toUpperCase():"")),id=/\B([A-Z])/g,ls=to(i=>i.replace(id,"-$1").toLowerCase()),no=to(i=>i.charAt(0).toUpperCase()+i.slice(1)),To=to(i=>i?`on${no(i)}`:""),zs=(i,e)=>!Object.is(i,e),Ao=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Gr=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},sd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Dl;const ya=()=>Dl||(Dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qa(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=at(n)?ld(n):Qa(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(at(i))return i;if(Je(i))return i}}const rd=/;(?![^(]*\))/g,od=/:([^]+)/,ad=/\/\*[^]*?\*\//g;function ld(i){const e={};return i.replace(ad,"").split(rd).forEach(t=>{if(t){const n=t.split(od);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function el(i){let e="";if(at(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=el(i[t]);n&&(e+=n+" ")}else if(Je(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const cd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ud=Ya(cd);function rh(i){return!!i||i===""}let Bt;class oh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hd(i){return new oh(i)}function fd(i,e=Bt){e&&e.active&&e.effects.push(i)}function dd(){return Bt}const tl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},ah=i=>(i.w&Xn)>0,lh=i=>(i.n&Xn)>0,pd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Xn},md=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];ah(s)&&!lh(s)?s.delete(i):e[t++]=s,s.w&=~Xn,s.n&=~Xn}e.length=t}},Ma=new WeakMap;let Es=0,Xn=1;const ba=30;let kt;const ui=Symbol(""),Sa=Symbol("");class nl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,fd(this,n)}run(){if(!this.active)return this.fn();let e=kt,t=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,Gn=!0,Xn=1<<++Es,Es<=ba?pd(this):Il(this),this.fn()}finally{Es<=ba&&md(this),Xn=1<<--Es,kt=this.parent,Gn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Il(this),this.onStop&&this.onStop(),this.active=!1)}}function Il(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Gn=!0;const ch=[];function cs(){ch.push(Gn),Gn=!1}function us(){const i=ch.pop();Gn=i===void 0?!0:i}function At(i,e,t){if(Gn&&kt){let n=Ma.get(i);n||Ma.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=tl()),uh(s)}}function uh(i,e){let t=!1;Es<=ba?lh(i)||(i.n|=Xn,t=!ah(i)):t=!i.has(kt),t&&(i.add(kt),kt.deps.push(i))}function wn(i,e,t,n,s,r){const a=Ma.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(i)){const c=Number(n);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(i)?Ja(t)&&o.push(a.get("length")):(o.push(a.get(ui)),Rs(i)&&o.push(a.get(Sa)));break;case"delete":Fe(i)||(o.push(a.get(ui)),Rs(i)&&o.push(a.get(Sa)));break;case"set":Rs(i)&&o.push(a.get(ui));break}if(o.length===1)o[0]&&wa(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);wa(tl(c))}}function wa(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&Fl(n);for(const n of t)n.computed||Fl(n)}function Fl(i,e){(i!==kt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const gd=Ya("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Ka)),_d=il(),xd=il(!1,!0),vd=il(!0),Nl=yd();function yd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ve(this);for(let r=0,a=this.length;r<a;r++)At(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Ve)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){cs();const n=Ve(this)[e].apply(this,t);return us(),n}}),i}function Md(i){const e=Ve(this);return At(e,"has",i),e.hasOwnProperty(i)}function il(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?zd:gh:e?mh:ph).get(n))return n;const a=Fe(n);if(!i){if(a&&Ge(Nl,s))return Reflect.get(Nl,s,r);if(s==="hasOwnProperty")return Md}const o=Reflect.get(n,s,r);return(Ka(s)?hh.has(s):gd(s))||(i||At(n,"get",s),e)?o:pt(o)?a&&Ja(s)?o:o.value:Je(o)?i?xh(o):Ys(o):o}}const bd=fh(),Sd=fh(!0);function fh(i=!1){return function(t,n,s,r){let a=t[n];if(Zi(a)&&pt(a)&&!pt(s))return!1;if(!i&&(!Hr(s)&&!Zi(s)&&(a=Ve(a),s=Ve(s)),!Fe(t)&&pt(a)&&!pt(s)))return a.value=s,!0;const o=Fe(t)&&Ja(n)?Number(n)<t.length:Ge(t,n),c=Reflect.set(t,n,s,r);return t===Ve(r)&&(o?zs(s,a)&&wn(t,"set",n,s):wn(t,"add",n,s)),c}}function wd(i,e){const t=Ge(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&wn(i,"delete",e,void 0),n}function Ed(i,e){const t=Reflect.has(i,e);return(!Ka(e)||!hh.has(e))&&At(i,"has",e),t}function Td(i){return At(i,"iterate",Fe(i)?"length":ui),Reflect.ownKeys(i)}const dh={get:_d,set:bd,deleteProperty:wd,has:Ed,ownKeys:Td},Ad={get:vd,set(i,e){return!0},deleteProperty(i,e){return!0}},Cd=ot({},dh,{get:xd,set:Sd}),sl=i=>i,io=i=>Reflect.getPrototypeOf(i);function tr(i,e,t=!1,n=!1){i=i.__v_raw;const s=Ve(i),r=Ve(e);t||(e!==r&&At(s,"get",e),At(s,"get",r));const{has:a}=io(s),o=n?sl:t?ll:Us;if(a.call(s,e))return o(i.get(e));if(a.call(s,r))return o(i.get(r));i!==s&&i.get(e)}function nr(i,e=!1){const t=this.__v_raw,n=Ve(t),s=Ve(i);return e||(i!==s&&At(n,"has",i),At(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function ir(i,e=!1){return i=i.__v_raw,!e&&At(Ve(i),"iterate",ui),Reflect.get(i,"size",i)}function Ol(i){i=Ve(i);const e=Ve(this);return io(e).has.call(e,i)||(e.add(i),wn(e,"add",i,i)),this}function zl(i,e){e=Ve(e);const t=Ve(this),{has:n,get:s}=io(t);let r=n.call(t,i);r||(i=Ve(i),r=n.call(t,i));const a=s.call(t,i);return t.set(i,e),r?zs(e,a)&&wn(t,"set",i,e):wn(t,"add",i,e),this}function Ul(i){const e=Ve(this),{has:t,get:n}=io(e);let s=t.call(e,i);s||(i=Ve(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&wn(e,"delete",i,void 0),r}function Bl(){const i=Ve(this),e=i.size!==0,t=i.clear();return e&&wn(i,"clear",void 0,void 0),t}function sr(i,e){return function(n,s){const r=this,a=r.__v_raw,o=Ve(a),c=e?sl:i?ll:Us;return!i&&At(o,"iterate",ui),a.forEach((l,u)=>n.call(s,c(l),c(u),r))}}function rr(i,e,t){return function(...n){const s=this.__v_raw,r=Ve(s),a=Rs(r),o=i==="entries"||i===Symbol.iterator&&a,c=i==="keys"&&a,l=s[i](...n),u=t?sl:e?ll:Us;return!e&&At(r,"iterate",c?Sa:ui),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Cn(i){return function(...e){return i==="delete"?!1:this}}function Ld(){const i={get(r){return tr(this,r)},get size(){return ir(this)},has:nr,add:Ol,set:zl,delete:Ul,clear:Bl,forEach:sr(!1,!1)},e={get(r){return tr(this,r,!1,!0)},get size(){return ir(this)},has:nr,add:Ol,set:zl,delete:Ul,clear:Bl,forEach:sr(!1,!0)},t={get(r){return tr(this,r,!0)},get size(){return ir(this,!0)},has(r){return nr.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:sr(!0,!1)},n={get(r){return tr(this,r,!0,!0)},get size(){return ir(this,!0)},has(r){return nr.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=rr(r,!1,!1),t[r]=rr(r,!0,!1),e[r]=rr(r,!1,!0),n[r]=rr(r,!0,!0)}),[i,t,e,n]}const[Rd,Pd,Dd,Id]=Ld();function rl(i,e){const t=e?i?Id:Dd:i?Pd:Rd;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Ge(t,s)&&s in n?t:n,s,r)}const Fd={get:rl(!1,!1)},Nd={get:rl(!1,!0)},Od={get:rl(!0,!1)},ph=new WeakMap,mh=new WeakMap,gh=new WeakMap,zd=new WeakMap;function Ud(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bd(i){return i.__v_skip||!Object.isExtensible(i)?0:Ud(ed(i))}function Ys(i){return Zi(i)?i:ol(i,!1,dh,Fd,ph)}function _h(i){return ol(i,!1,Cd,Nd,mh)}function xh(i){return ol(i,!0,Ad,Od,gh)}function ol(i,e,t,n,s){if(!Je(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const a=Bd(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return s.set(i,o),o}function ji(i){return Zi(i)?ji(i.__v_raw):!!(i&&i.__v_isReactive)}function Zi(i){return!!(i&&i.__v_isReadonly)}function Hr(i){return!!(i&&i.__v_isShallow)}function vh(i){return ji(i)||Zi(i)}function Ve(i){const e=i&&i.__v_raw;return e?Ve(e):i}function al(i){return Gr(i,"__v_skip",!0),i}const Us=i=>Je(i)?Ys(i):i,ll=i=>Je(i)?xh(i):i;function yh(i){Gn&&kt&&(i=Ve(i),uh(i.dep||(i.dep=tl())))}function Mh(i,e){i=Ve(i);const t=i.dep;t&&wa(t)}function pt(i){return!!(i&&i.__v_isRef===!0)}function $s(i){return bh(i,!1)}function kd(i){return bh(i,!0)}function bh(i,e){return pt(i)?i:new Gd(i,e)}class Gd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ve(e),this._value=t?e:Us(e)}get value(){return yh(this),this._value}set value(e){const t=this.__v_isShallow||Hr(e)||Zi(e);e=t?e:Ve(e),zs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Us(e),Mh(this))}}function qi(i){return pt(i)?i.value:i}const Hd={get:(i,e,t)=>qi(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return pt(s)&&!pt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Sh(i){return ji(i)?i:new Proxy(i,Hd)}class Vd{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nl(e,()=>{this._dirty||(this._dirty=!0,Mh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Ve(this);return yh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wd(i,e,t=!1){let n,s;const r=ze(i);return r?(n=i,s=Xt):(n=i.get,s=i.set),new Vd(n,s,r||!s,t)}function Hn(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){so(r,e,t)}return s}function Yt(i,e,t,n){if(ze(i)){const r=Hn(i,e,t,n);return r&&sh(r)&&r.catch(a=>{so(a,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Yt(i[r],e,t,n));return s}function so(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](i,a,o)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Hn(c,null,10,[i,a,o]);return}}jd(i,t,s,n)}function jd(i,e,t,n=!0){console.error(i)}let Bs=!1,Ea=!1;const dt=[];let ln=0;const Xi=[];let yn=null,ni=0;const wh=Promise.resolve();let cl=null;function Eh(i){const e=cl||wh;return i?e.then(this?i.bind(this):i):e}function qd(i){let e=ln+1,t=dt.length;for(;e<t;){const n=e+t>>>1;ks(dt[n])<i?e=n+1:t=n}return e}function ul(i){(!dt.length||!dt.includes(i,Bs&&i.allowRecurse?ln+1:ln))&&(i.id==null?dt.push(i):dt.splice(qd(i.id),0,i),Th())}function Th(){!Bs&&!Ea&&(Ea=!0,cl=wh.then(Ch))}function Xd(i){const e=dt.indexOf(i);e>ln&&dt.splice(e,1)}function Yd(i){Fe(i)?Xi.push(...i):(!yn||!yn.includes(i,i.allowRecurse?ni+1:ni))&&Xi.push(i),Th()}function kl(i,e=Bs?ln+1:0){for(;e<dt.length;e++){const t=dt[e];t&&t.pre&&(dt.splice(e,1),e--,t())}}function Ah(i){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((t,n)=>ks(t)-ks(n)),ni=0;ni<yn.length;ni++)yn[ni]();yn=null,ni=0}}const ks=i=>i.id==null?1/0:i.id,$d=(i,e)=>{const t=ks(i)-ks(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Ch(i){Ea=!1,Bs=!0,dt.sort($d);const e=Xt;try{for(ln=0;ln<dt.length;ln++){const t=dt[ln];t&&t.active!==!1&&Hn(t,null,14)}}finally{ln=0,dt.length=0,Ah(),Bs=!1,cl=null,(dt.length||Xi.length)&&Ch()}}function Zd(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||$e;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[u]||$e;f&&(s=t.map(p=>at(p)?p.trim():p)),h&&(s=t.map(sd))}let o,c=n[o=To(e)]||n[o=To(fn(e))];!c&&r&&(c=n[o=To(ls(e))]),c&&Yt(c,i,6,s);const l=n[o+"Once"];if(l){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Yt(l,i,6,s)}}function Lh(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let a={},o=!1;if(!ze(i)){const c=l=>{const u=Lh(l,e,!0);u&&(o=!0,ot(a,u))};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}return!r&&!o?(Je(i)&&n.set(i,null),null):(Fe(r)?r.forEach(c=>a[c]=null):ot(a,r),Je(i)&&n.set(i,a),a)}function ro(i,e){return!i||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(i,e[0].toLowerCase()+e.slice(1))||Ge(i,ls(e))||Ge(i,e))}let Mt=null,oo=null;function Vr(i){const e=Mt;return Mt=i,oo=i&&i.type.__scopeId||null,e}function Kd(i){oo=i}function Jd(){oo=null}function ao(i,e=Mt,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Kl(-1);const r=Vr(e);let a;try{a=i(...s)}finally{Vr(r),n._d&&Kl(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Co(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const b=Vr(i);try{if(t.shapeFlag&4){const T=s||n;d=on(u.call(T,T,h,r,p,f,g)),_=c}else{const T=e;d=on(T.length>1?T(r,{attrs:c,slots:o,emit:l}):T(r,null)),_=e.props?c:Qd(c)}}catch(T){Is.length=0,so(T,i,1),d=mt(Ki)}let C=d;if(_&&m!==!1){const T=Object.keys(_),{shapeFlag:S}=C;T.length&&S&7&&(a&&T.some($a)&&(_=ep(_,a)),C=Ji(C,_))}return t.dirs&&(C=Ji(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),d=C,Vr(b),d}const Qd=i=>{let e;for(const t in i)(t==="class"||t==="style"||Qr(t))&&((e||(e={}))[t]=i[t]);return e},ep=(i,e)=>{const t={};for(const n in i)(!$a(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function tp(i,e,t){const{props:n,children:s,component:r}=i,{props:a,children:o,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return n?Gl(n,a,l):!!a;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==n[f]&&!ro(l,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Gl(n,a,l):!0:!!a;return!1}function Gl(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!ro(t,r))return!0}return!1}function np({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const ip=i=>i.__isSuspense;function sp(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):Yd(i)}const or={};function Nr(i,e,t){return Rh(i,e,t)}function Rh(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:a}=$e){var o;const c=dd()===((o=ct)==null?void 0:o.scope)?ct:null;let l,u=!1,h=!1;if(pt(i)?(l=()=>i.value,u=Hr(i)):ji(i)?(l=()=>i,n=!0):Fe(i)?(h=!0,u=i.some(T=>ji(T)||Hr(T)),l=()=>i.map(T=>{if(pt(T))return T.value;if(ji(T))return Gi(T);if(ze(T))return Hn(T,c,2)})):ze(i)?e?l=()=>Hn(i,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Yt(i,c,3,[p])}:l=Xt,e&&n){const T=l;l=()=>Gi(T())}let f,p=T=>{f=b.onStop=()=>{Hn(T,c,4)}},g;if(Hs)if(p=Xt,e?t&&Yt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const T=Kp();g=T.__watcherHandles||(T.__watcherHandles=[])}else return Xt;let m=h?new Array(i.length).fill(or):or;const d=()=>{if(b.active)if(e){const T=b.run();(n||u||(h?T.some((S,P)=>zs(S,m[P])):zs(T,m)))&&(f&&f(),Yt(e,c,3,[T,m===or?void 0:h&&m[0]===or?[]:m,p]),m=T)}else b.run()};d.allowRecurse=!!e;let _;s==="sync"?_=d:s==="post"?_=()=>wt(d,c&&c.suspense):(d.pre=!0,c&&(d.id=c.uid),_=()=>ul(d));const b=new nl(l,_);e?t?d():m=b.run():s==="post"?wt(b.run.bind(b),c&&c.suspense):b.run();const C=()=>{b.stop(),c&&c.scope&&Za(c.scope.effects,b)};return g&&g.push(C),C}function rp(i,e,t){const n=this.proxy,s=at(i)?i.includes(".")?Ph(n,i):()=>n[i]:i.bind(n,n);let r;ze(e)?r=e:(r=e.handler,t=e);const a=ct;Qi(this);const o=Rh(s,r.bind(n),t);return a?Qi(a):hi(),o}function Ph(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function Gi(i,e){if(!Je(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),pt(i))Gi(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)Gi(i[t],e);else if(Jf(i)||Rs(i))i.forEach(t=>{Gi(t,e)});else if(td(i))for(const t in i)Gi(i[t],e);return i}function $n(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let c=o.dir[n];c&&(cs(),Yt(c,t,8,[i.el,o,i,e]),us())}}function hs(i,e){return ze(i)?(()=>ot({name:i.name},e,{setup:i}))():i}const Ps=i=>!!i.type.__asyncLoader,Dh=i=>i.type.__isKeepAlive;function op(i,e){Ih(i,"a",e)}function ap(i,e){Ih(i,"da",e)}function Ih(i,e,t=ct){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(lo(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Dh(s.parent.vnode)&&lp(n,e,t,s),s=s.parent}}function lp(i,e,t,n){const s=lo(e,i,n,!0);Nh(()=>{Za(n[e],s)},t)}function lo(i,e,t=ct,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;cs(),Qi(t);const o=Yt(e,t,i,a);return hi(),us(),o});return n?s.unshift(r):s.push(r),r}}const Tn=i=>(e,t=ct)=>(!Hs||i==="sp")&&lo(i,(...n)=>e(...n),t),cp=Tn("bm"),co=Tn("m"),up=Tn("bu"),hp=Tn("u"),Fh=Tn("bum"),Nh=Tn("um"),fp=Tn("sp"),dp=Tn("rtg"),pp=Tn("rtc");function mp(i,e=ct){lo("ec",i,e)}const Oh="components";function hl(i,e){return _p(Oh,i,!0,e)||i}const gp=Symbol.for("v-ndc");function _p(i,e,t=!0,n=!1){const s=Mt||ct;if(s){const r=s.type;if(i===Oh){const o=Yp(r,!1);if(o&&(o===e||o===fn(e)||o===no(fn(e))))return r}const a=Hl(s[i]||r[i],e)||Hl(s.appContext[i],e);return!a&&n?r:a}}function Hl(i,e){return i&&(i[e]||i[fn(e)]||i[no(fn(e))])}function xp(i,e,t,n){let s;const r=t&&t[n];if(Fe(i)||at(i)){s=new Array(i.length);for(let a=0,o=i.length;a<o;a++)s[a]=e(i[a],a,void 0,r&&r[a])}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(Je(i))if(i[Symbol.iterator])s=Array.from(i,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(i);s=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];s[o]=e(i[l],l,o,r&&r[o])}}else s=[];return t&&(t[n]=s),s}function vp(i,e,t={},n,s){if(Mt.isCE||Mt.parent&&Ps(Mt.parent)&&Mt.parent.isCE)return e!=="default"&&(t.name=e),mt("slot",t,n&&n());let r=i[e];r&&r._c&&(r._d=!1),Vn();const a=r&&zh(r(t)),o=pl(Pt,{key:t.key||a&&a.key||`_${e}`},a||(n?n():[]),a&&i._===1?64:-2);return!s&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),r&&r._c&&(r._d=!0),o}function zh(i){return i.some(e=>qr(e)?!(e.type===Ki||e.type===Pt&&!zh(e.children)):!0)?i:null}const Ta=i=>i?Yh(i)?xl(i)||i.proxy:Ta(i.parent):null,Ds=ot(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ta(i.parent),$root:i=>Ta(i.root),$emit:i=>i.emit,$options:i=>fl(i),$forceUpdate:i=>i.f||(i.f=()=>ul(i.update)),$nextTick:i=>i.n||(i.n=Eh.bind(i.proxy)),$watch:i=>rp.bind(i)}),Lo=(i,e)=>i!==$e&&!i.__isScriptSetup&&Ge(i,e),yp={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:c}=i;let l;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Lo(n,e))return a[e]=1,n[e];if(s!==$e&&Ge(s,e))return a[e]=2,s[e];if((l=i.propsOptions[0])&&Ge(l,e))return a[e]=3,r[e];if(t!==$e&&Ge(t,e))return a[e]=4,t[e];Aa&&(a[e]=0)}}const u=Ds[e];let h,f;if(u)return e==="$attrs"&&At(i,"get",e),u(i);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==$e&&Ge(t,e))return a[e]=4,t[e];if(f=c.config.globalProperties,Ge(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Lo(s,e)?(s[e]=t,!0):n!==$e&&Ge(n,e)?(n[e]=t,!0):Ge(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!t[a]||i!==$e&&Ge(i,a)||Lo(e,a)||(o=r[0])&&Ge(o,a)||Ge(n,a)||Ge(Ds,a)||Ge(s.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ge(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Vl(i){return Fe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Aa=!0;function Mp(i){const e=fl(i),t=i.proxy,n=i.ctx;Aa=!1,e.beforeCreate&&Wl(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:b,destroyed:C,unmounted:T,render:S,renderTracked:P,renderTriggered:N,errorCaptured:M,serverPrefetch:R,expose:z,inheritAttrs:U,components:ye,directives:ue,filters:O}=e;if(l&&bp(l,n,null),a)for(const j in a){const W=a[j];ze(W)&&(n[j]=W.bind(t))}if(s){const j=s.call(t,t);Je(j)&&(i.data=Ys(j))}if(Aa=!0,r)for(const j in r){const W=r[j],X=ze(W)?W.bind(t,t):ze(W.get)?W.get.bind(t,t):Xt,ee=!ze(W)&&ze(W.set)?W.set.bind(t):Xt,fe=Gt({get:X,set:ee});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>fe.value,set:le=>fe.value=le})}if(o)for(const j in o)Uh(o[j],n,t,j);if(c){const j=ze(c)?c.call(t):c;Reflect.ownKeys(j).forEach(W=>{Or(W,j[W])})}u&&Wl(u,i,"c");function k(j,W){Fe(W)?W.forEach(X=>j(X.bind(t))):W&&j(W.bind(t))}if(k(cp,h),k(co,f),k(up,p),k(hp,g),k(op,m),k(ap,d),k(mp,M),k(pp,P),k(dp,N),k(Fh,b),k(Nh,T),k(fp,R),Fe(z))if(z.length){const j=i.exposed||(i.exposed={});z.forEach(W=>{Object.defineProperty(j,W,{get:()=>t[W],set:X=>t[W]=X})})}else i.exposed||(i.exposed={});S&&i.render===Xt&&(i.render=S),U!=null&&(i.inheritAttrs=U),ye&&(i.components=ye),ue&&(i.directives=ue)}function bp(i,e,t=Xt){Fe(i)&&(i=Ca(i));for(const n in i){const s=i[n];let r;Je(s)?"default"in s?r=bn(s.from||n,s.default,!0):r=bn(s.from||n):r=bn(s),pt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[n]=r}}function Wl(i,e,t){Yt(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Uh(i,e,t,n){const s=n.includes(".")?Ph(t,n):()=>t[n];if(at(i)){const r=e[i];ze(r)&&Nr(s,r)}else if(ze(i))Nr(s,i.bind(t));else if(Je(i))if(Fe(i))i.forEach(r=>Uh(r,e,t,n));else{const r=ze(i.handler)?i.handler.bind(t):e[i.handler];ze(r)&&Nr(s,r,i)}}function fl(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=i.appContext,o=r.get(e);let c;return o?c=o:!s.length&&!t&&!n?c=e:(c={},s.length&&s.forEach(l=>Wr(c,l,a,!0)),Wr(c,e,a)),Je(e)&&r.set(e,c),c}function Wr(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Wr(i,r,t,!0),s&&s.forEach(a=>Wr(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Sp[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const Sp={data:jl,props:ql,emits:ql,methods:Ts,computed:Ts,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Ts,directives:Ts,watch:Ep,provide:jl,inject:wp};function jl(i,e){return e?i?function(){return ot(ze(i)?i.call(this,this):i,ze(e)?e.call(this,this):e)}:e:i}function wp(i,e){return Ts(Ca(i),Ca(e))}function Ca(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function vt(i,e){return i?[...new Set([].concat(i,e))]:e}function Ts(i,e){return i?ot(Object.create(null),i,e):e}function ql(i,e){return i?Fe(i)&&Fe(e)?[...new Set([...i,...e])]:ot(Object.create(null),Vl(i),Vl(e??{})):e}function Ep(i,e){if(!i)return e;if(!e)return i;const t=ot(Object.create(null),i);for(const n in e)t[n]=vt(i[n],e[n]);return t}function Bh(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function Ap(i,e){return function(n,s=null){ze(n)||(n=ot({},n)),s!=null&&!Je(s)&&(s=null);const r=Bh(),a=new Set;let o=!1;const c=r.app={_uid:Tp++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Jp,get config(){return r.config},set config(l){},use(l,...u){return a.has(l)||(l&&ze(l.install)?(a.add(l),l.install(c,...u)):ze(l)&&(a.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!o){const f=mt(n,s);return f.appContext=r,u&&e?e(f,l):i(f,l,h),o=!0,c._container=l,l.__vue_app__=c,xl(f.component)||f.component.proxy}},unmount(){o&&(i(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){jr=c;try{return l()}finally{jr=null}}};return c}}let jr=null;function Or(i,e){if(ct){let t=ct.provides;const n=ct.parent&&ct.parent.provides;n===t&&(t=ct.provides=Object.create(n)),t[i]=e}}function bn(i,e,t=!1){const n=ct||Mt;if(n||jr){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:jr._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&ze(e)?e.call(n&&n.proxy):e}}function Cp(i,e,t,n=!1){const s={},r={};Gr(r,ho,1),i.propsDefaults=Object.create(null),kh(i,e,s,r);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);t?i.props=n?s:_h(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Lp(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=i,o=Ve(s),[c]=i.propsOptions;let l=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ro(i.emitsOptions,f))continue;const p=e[f];if(c)if(Ge(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const g=fn(f);s[g]=La(c,o,g,p,i,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{kh(i,e,s,r)&&(l=!0);let u;for(const h in o)(!e||!Ge(e,h)&&((u=ls(h))===h||!Ge(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=La(c,o,h,void 0,i,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!Ge(e,h))&&(delete r[h],l=!0)}l&&wn(i,"set","$attrs")}function kh(i,e,t,n){const[s,r]=i.propsOptions;let a=!1,o;if(e)for(let c in e){if(Fr(c))continue;const l=e[c];let u;s&&Ge(s,u=fn(c))?!r||!r.includes(u)?t[u]=l:(o||(o={}))[u]=l:ro(i.emitsOptions,c)||(!(c in n)||l!==n[c])&&(n[c]=l,a=!0)}if(r){const c=Ve(t),l=o||$e;for(let u=0;u<r.length;u++){const h=r[u];t[h]=La(s,c,h,l[h],i,!Ge(l,h))}}return a}function La(i,e,t,n,s,r){const a=i[t];if(a!=null){const o=Ge(a,"default");if(o&&n===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ze(c)){const{propsDefaults:l}=s;t in l?n=l[t]:(Qi(s),n=l[t]=c.call(null,e),hi())}else n=c}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===ls(t))&&(n=!0))}return n}function Gh(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,a={},o=[];let c=!1;if(!ze(i)){const u=h=>{c=!0;const[f,p]=Gh(h,e,!0);ot(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!c)return Je(i)&&n.set(i,Wi),Wi;if(Fe(r))for(let u=0;u<r.length;u++){const h=fn(r[u]);Xl(h)&&(a[h]=$e)}else if(r)for(const u in r){const h=fn(u);if(Xl(h)){const f=r[u],p=a[h]=Fe(f)||ze(f)?{type:f}:ot({},f);if(p){const g=Zl(Boolean,p.type),m=Zl(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ge(p,"default"))&&o.push(h)}}}const l=[a,o];return Je(i)&&n.set(i,l),l}function Xl(i){return i[0]!=="$"}function Yl(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function $l(i,e){return Yl(i)===Yl(e)}function Zl(i,e){return Fe(e)?e.findIndex(t=>$l(t,i)):ze(e)&&$l(e,i)?0:-1}const Hh=i=>i[0]==="_"||i==="$stable",dl=i=>Fe(i)?i.map(on):[on(i)],Rp=(i,e,t)=>{if(e._n)return e;const n=ao((...s)=>dl(e(...s)),t);return n._c=!1,n},Vh=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Hh(s))continue;const r=i[s];if(ze(r))e[s]=Rp(s,r,n);else if(r!=null){const a=dl(r);e[s]=()=>a}}},Wh=(i,e)=>{const t=dl(e);i.slots.default=()=>t},Pp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ve(e),Gr(e,"_",t)):Vh(e,i.slots={})}else i.slots={},e&&Wh(i,e);Gr(i.slots,ho,1)},Dp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,a=$e;if(n.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(ot(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Vh(e,s)),a=e}else e&&(Wh(i,e),a={default:1});if(r)for(const o in s)!Hh(o)&&!(o in a)&&delete s[o]};function Ra(i,e,t,n,s=!1){if(Fe(i)){i.forEach((f,p)=>Ra(f,e&&(Fe(e)?e[p]:e),t,n,s));return}if(Ps(n)&&!s)return;const r=n.shapeFlag&4?xl(n.component)||n.component.proxy:n.el,a=s?null:r,{i:o,r:c}=i,l=e&&e.r,u=o.refs===$e?o.refs={}:o.refs,h=o.setupState;if(l!=null&&l!==c&&(at(l)?(u[l]=null,Ge(h,l)&&(h[l]=null)):pt(l)&&(l.value=null)),ze(c))Hn(c,o,12,[a,u]);else{const f=at(c),p=pt(c);if(f||p){const g=()=>{if(i.f){const m=f?Ge(h,c)?h[c]:u[c]:c.value;s?Fe(m)&&Za(m,r):Fe(m)?m.includes(r)||m.push(r):f?(u[c]=[r],Ge(h,c)&&(h[c]=u[c])):(c.value=[r],i.k&&(u[i.k]=c.value))}else f?(u[c]=a,Ge(h,c)&&(h[c]=a)):p&&(c.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,wt(g,t)):g()}}}const wt=sp;function Ip(i){return Fp(i)}function Fp(i,e){const t=ya();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Xt,insertStaticContent:g}=i,m=(w,A,D,H=null,Z=null,se=null,pe=!1,te=null,me=!!A.dynamicChildren)=>{if(w===A)return;w&&!xs(w,A)&&(H=G(w),le(w,Z,se,!0),w=null),A.patchFlag===-2&&(me=!1,A.dynamicChildren=null);const{type:ae,ref:v,shapeFlag:x}=A;switch(ae){case uo:d(w,A,D,H);break;case Ki:_(w,A,D,H);break;case Ro:w==null&&b(A,D,H,pe);break;case Pt:ye(w,A,D,H,Z,se,pe,te,me);break;default:x&1?S(w,A,D,H,Z,se,pe,te,me):x&6?ue(w,A,D,H,Z,se,pe,te,me):(x&64||x&128)&&ae.process(w,A,D,H,Z,se,pe,te,me,J)}v!=null&&Z&&Ra(v,w&&w.ref,se,A||w,!A)},d=(w,A,D,H)=>{if(w==null)n(A.el=o(A.children),D,H);else{const Z=A.el=w.el;A.children!==w.children&&l(Z,A.children)}},_=(w,A,D,H)=>{w==null?n(A.el=c(A.children||""),D,H):A.el=w.el},b=(w,A,D,H)=>{[w.el,w.anchor]=g(w.children,A,D,H,w.el,w.anchor)},C=({el:w,anchor:A},D,H)=>{let Z;for(;w&&w!==A;)Z=f(w),n(w,D,H),w=Z;n(A,D,H)},T=({el:w,anchor:A})=>{let D;for(;w&&w!==A;)D=f(w),s(w),w=D;s(A)},S=(w,A,D,H,Z,se,pe,te,me)=>{pe=pe||A.type==="svg",w==null?P(A,D,H,Z,se,pe,te,me):R(w,A,Z,se,pe,te,me)},P=(w,A,D,H,Z,se,pe,te)=>{let me,ae;const{type:v,props:x,shapeFlag:F,transition:q,dirs:Q}=w;if(me=w.el=a(w.type,se,x&&x.is,x),F&8?u(me,w.children):F&16&&M(w.children,me,null,H,Z,se&&v!=="foreignObject",pe,te),Q&&$n(w,null,H,"created"),N(me,w,w.scopeId,pe,H),x){for(const Me in x)Me!=="value"&&!Fr(Me)&&r(me,Me,null,x[Me],se,w.children,H,Z,Y);"value"in x&&r(me,"value",null,x.value),(ae=x.onVnodeBeforeMount)&&nn(ae,H,w)}Q&&$n(w,null,H,"beforeMount");const ce=(!Z||Z&&!Z.pendingBranch)&&q&&!q.persisted;ce&&q.beforeEnter(me),n(me,A,D),((ae=x&&x.onVnodeMounted)||ce||Q)&&wt(()=>{ae&&nn(ae,H,w),ce&&q.enter(me),Q&&$n(w,null,H,"mounted")},Z)},N=(w,A,D,H,Z)=>{if(D&&p(w,D),H)for(let se=0;se<H.length;se++)p(w,H[se]);if(Z){let se=Z.subTree;if(A===se){const pe=Z.vnode;N(w,pe,pe.scopeId,pe.slotScopeIds,Z.parent)}}},M=(w,A,D,H,Z,se,pe,te,me=0)=>{for(let ae=me;ae<w.length;ae++){const v=w[ae]=te?zn(w[ae]):on(w[ae]);m(null,v,A,D,H,Z,se,pe,te)}},R=(w,A,D,H,Z,se,pe)=>{const te=A.el=w.el;let{patchFlag:me,dynamicChildren:ae,dirs:v}=A;me|=w.patchFlag&16;const x=w.props||$e,F=A.props||$e;let q;D&&Zn(D,!1),(q=F.onVnodeBeforeUpdate)&&nn(q,D,A,w),v&&$n(A,w,D,"beforeUpdate"),D&&Zn(D,!0);const Q=Z&&A.type!=="foreignObject";if(ae?z(w.dynamicChildren,ae,te,D,H,Q,se):pe||W(w,A,te,null,D,H,Q,se,!1),me>0){if(me&16)U(te,A,x,F,D,H,Z);else if(me&2&&x.class!==F.class&&r(te,"class",null,F.class,Z),me&4&&r(te,"style",x.style,F.style,Z),me&8){const ce=A.dynamicProps;for(let Me=0;Me<ce.length;Me++){const y=ce[Me],ne=x[y],ge=F[y];(ge!==ne||y==="value")&&r(te,y,ne,ge,Z,w.children,D,H,Y)}}me&1&&w.children!==A.children&&u(te,A.children)}else!pe&&ae==null&&U(te,A,x,F,D,H,Z);((q=F.onVnodeUpdated)||v)&&wt(()=>{q&&nn(q,D,A,w),v&&$n(A,w,D,"updated")},H)},z=(w,A,D,H,Z,se,pe)=>{for(let te=0;te<A.length;te++){const me=w[te],ae=A[te],v=me.el&&(me.type===Pt||!xs(me,ae)||me.shapeFlag&70)?h(me.el):D;m(me,ae,v,null,H,Z,se,pe,!0)}},U=(w,A,D,H,Z,se,pe)=>{if(D!==H){if(D!==$e)for(const te in D)!Fr(te)&&!(te in H)&&r(w,te,D[te],null,pe,A.children,Z,se,Y);for(const te in H){if(Fr(te))continue;const me=H[te],ae=D[te];me!==ae&&te!=="value"&&r(w,te,ae,me,pe,A.children,Z,se,Y)}"value"in H&&r(w,"value",D.value,H.value)}},ye=(w,A,D,H,Z,se,pe,te,me)=>{const ae=A.el=w?w.el:o(""),v=A.anchor=w?w.anchor:o("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:q}=A;q&&(te=te?te.concat(q):q),w==null?(n(ae,D,H),n(v,D,H),M(A.children,D,v,Z,se,pe,te,me)):x>0&&x&64&&F&&w.dynamicChildren?(z(w.dynamicChildren,F,D,Z,se,pe,te),(A.key!=null||Z&&A===Z.subTree)&&jh(w,A,!0)):W(w,A,D,v,Z,se,pe,te,me)},ue=(w,A,D,H,Z,se,pe,te,me)=>{A.slotScopeIds=te,w==null?A.shapeFlag&512?Z.ctx.activate(A,D,H,pe,me):O(A,D,H,Z,se,pe,me):ie(w,A,me)},O=(w,A,D,H,Z,se,pe)=>{const te=w.component=Vp(w,H,Z);if(Dh(w)&&(te.ctx.renderer=J),Wp(te),te.asyncDep){if(Z&&Z.registerDep(te,k),!w.el){const me=te.subTree=mt(Ki);_(null,me,A,D)}return}k(te,w,A,D,Z,se,pe)},ie=(w,A,D)=>{const H=A.component=w.component;if(tp(w,A,D))if(H.asyncDep&&!H.asyncResolved){j(H,A,D);return}else H.next=A,Xd(H.update),H.update();else A.el=w.el,H.vnode=A},k=(w,A,D,H,Z,se,pe)=>{const te=()=>{if(w.isMounted){let{next:v,bu:x,u:F,parent:q,vnode:Q}=w,ce=v,Me;Zn(w,!1),v?(v.el=Q.el,j(w,v,pe)):v=Q,x&&Ao(x),(Me=v.props&&v.props.onVnodeBeforeUpdate)&&nn(Me,q,v,Q),Zn(w,!0);const y=Co(w),ne=w.subTree;w.subTree=y,m(ne,y,h(ne.el),G(ne),w,Z,se),v.el=y.el,ce===null&&np(w,y.el),F&&wt(F,Z),(Me=v.props&&v.props.onVnodeUpdated)&&wt(()=>nn(Me,q,v,Q),Z)}else{let v;const{el:x,props:F}=A,{bm:q,m:Q,parent:ce}=w,Me=Ps(A);if(Zn(w,!1),q&&Ao(q),!Me&&(v=F&&F.onVnodeBeforeMount)&&nn(v,ce,A),Zn(w,!0),x&&Ee){const y=()=>{w.subTree=Co(w),Ee(x,w.subTree,w,Z,null)};Me?A.type.__asyncLoader().then(()=>!w.isUnmounted&&y()):y()}else{const y=w.subTree=Co(w);m(null,y,D,H,w,Z,se),A.el=y.el}if(Q&&wt(Q,Z),!Me&&(v=F&&F.onVnodeMounted)){const y=A;wt(()=>nn(v,ce,y),Z)}(A.shapeFlag&256||ce&&Ps(ce.vnode)&&ce.vnode.shapeFlag&256)&&w.a&&wt(w.a,Z),w.isMounted=!0,A=D=H=null}},me=w.effect=new nl(te,()=>ul(ae),w.scope),ae=w.update=()=>me.run();ae.id=w.uid,Zn(w,!0),ae()},j=(w,A,D)=>{A.component=w;const H=w.vnode.props;w.vnode=A,w.next=null,Lp(w,A.props,H,D),Dp(w,A.children,D),cs(),kl(),us()},W=(w,A,D,H,Z,se,pe,te,me=!1)=>{const ae=w&&w.children,v=w?w.shapeFlag:0,x=A.children,{patchFlag:F,shapeFlag:q}=A;if(F>0){if(F&128){ee(ae,x,D,H,Z,se,pe,te,me);return}else if(F&256){X(ae,x,D,H,Z,se,pe,te,me);return}}q&8?(v&16&&Y(ae,Z,se),x!==ae&&u(D,x)):v&16?q&16?ee(ae,x,D,H,Z,se,pe,te,me):Y(ae,Z,se,!0):(v&8&&u(D,""),q&16&&M(x,D,H,Z,se,pe,te,me))},X=(w,A,D,H,Z,se,pe,te,me)=>{w=w||Wi,A=A||Wi;const ae=w.length,v=A.length,x=Math.min(ae,v);let F;for(F=0;F<x;F++){const q=A[F]=me?zn(A[F]):on(A[F]);m(w[F],q,D,null,Z,se,pe,te,me)}ae>v?Y(w,Z,se,!0,!1,x):M(A,D,H,Z,se,pe,te,me,x)},ee=(w,A,D,H,Z,se,pe,te,me)=>{let ae=0;const v=A.length;let x=w.length-1,F=v-1;for(;ae<=x&&ae<=F;){const q=w[ae],Q=A[ae]=me?zn(A[ae]):on(A[ae]);if(xs(q,Q))m(q,Q,D,null,Z,se,pe,te,me);else break;ae++}for(;ae<=x&&ae<=F;){const q=w[x],Q=A[F]=me?zn(A[F]):on(A[F]);if(xs(q,Q))m(q,Q,D,null,Z,se,pe,te,me);else break;x--,F--}if(ae>x){if(ae<=F){const q=F+1,Q=q<v?A[q].el:H;for(;ae<=F;)m(null,A[ae]=me?zn(A[ae]):on(A[ae]),D,Q,Z,se,pe,te,me),ae++}}else if(ae>F)for(;ae<=x;)le(w[ae],Z,se,!0),ae++;else{const q=ae,Q=ae,ce=new Map;for(ae=Q;ae<=F;ae++){const he=A[ae]=me?zn(A[ae]):on(A[ae]);he.key!=null&&ce.set(he.key,ae)}let Me,y=0;const ne=F-Q+1;let ge=!1,_e=0;const L=new Array(ne);for(ae=0;ae<ne;ae++)L[ae]=0;for(ae=q;ae<=x;ae++){const he=w[ae];if(y>=ne){le(he,Z,se,!0);continue}let Te;if(he.key!=null)Te=ce.get(he.key);else for(Me=Q;Me<=F;Me++)if(L[Me-Q]===0&&xs(he,A[Me])){Te=Me;break}Te===void 0?le(he,Z,se,!0):(L[Te-Q]=ae+1,Te>=_e?_e=Te:ge=!0,m(he,A[Te],D,null,Z,se,pe,te,me),y++)}const xe=ge?Np(L):Wi;for(Me=xe.length-1,ae=ne-1;ae>=0;ae--){const he=Q+ae,Te=A[he],be=he+1<v?A[he+1].el:H;L[ae]===0?m(null,Te,D,be,Z,se,pe,te,me):ge&&(Me<0||ae!==xe[Me]?fe(Te,D,be,2):Me--)}}},fe=(w,A,D,H,Z=null)=>{const{el:se,type:pe,transition:te,children:me,shapeFlag:ae}=w;if(ae&6){fe(w.component.subTree,A,D,H);return}if(ae&128){w.suspense.move(A,D,H);return}if(ae&64){pe.move(w,A,D,J);return}if(pe===Pt){n(se,A,D);for(let x=0;x<me.length;x++)fe(me[x],A,D,H);n(w.anchor,A,D);return}if(pe===Ro){C(w,A,D);return}if(H!==2&&ae&1&&te)if(H===0)te.beforeEnter(se),n(se,A,D),wt(()=>te.enter(se),Z);else{const{leave:x,delayLeave:F,afterLeave:q}=te,Q=()=>n(se,A,D),ce=()=>{x(se,()=>{Q(),q&&q()})};F?F(se,Q,ce):ce()}else n(se,A,D)},le=(w,A,D,H=!1,Z=!1)=>{const{type:se,props:pe,ref:te,children:me,dynamicChildren:ae,shapeFlag:v,patchFlag:x,dirs:F}=w;if(te!=null&&Ra(te,null,D,w,!0),v&256){A.ctx.deactivate(w);return}const q=v&1&&F,Q=!Ps(w);let ce;if(Q&&(ce=pe&&pe.onVnodeBeforeUnmount)&&nn(ce,A,w),v&6)Ae(w.component,D,H);else{if(v&128){w.suspense.unmount(D,H);return}q&&$n(w,null,A,"beforeUnmount"),v&64?w.type.remove(w,A,D,Z,J,H):ae&&(se!==Pt||x>0&&x&64)?Y(ae,A,D,!1,!0):(se===Pt&&x&384||!Z&&v&16)&&Y(me,A,D),H&&de(w)}(Q&&(ce=pe&&pe.onVnodeUnmounted)||q)&&wt(()=>{ce&&nn(ce,A,w),q&&$n(w,null,A,"unmounted")},D)},de=w=>{const{type:A,el:D,anchor:H,transition:Z}=w;if(A===Pt){we(D,H);return}if(A===Ro){T(w);return}const se=()=>{s(D),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:pe,delayLeave:te}=Z,me=()=>pe(D,se);te?te(w.el,se,me):me()}else se()},we=(w,A)=>{let D;for(;w!==A;)D=f(w),s(w),w=D;s(A)},Ae=(w,A,D)=>{const{bum:H,scope:Z,update:se,subTree:pe,um:te}=w;H&&Ao(H),Z.stop(),se&&(se.active=!1,le(pe,w,A,D)),te&&wt(te,A),wt(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Y=(w,A,D,H=!1,Z=!1,se=0)=>{for(let pe=se;pe<w.length;pe++)le(w[pe],A,D,H,Z)},G=w=>w.shapeFlag&6?G(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),re=(w,A,D)=>{w==null?A._vnode&&le(A._vnode,null,null,!0):m(A._vnode||null,w,A,null,null,null,D),kl(),Ah(),A._vnode=w},J={p:m,um:le,m:fe,r:de,mt:O,mc:M,pc:W,pbc:z,n:G,o:i};let K,Ee;return e&&([K,Ee]=e(J)),{render:re,hydrate:K,createApp:Ap(re,K)}}function Zn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function jh(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=zn(s[r]),o.el=a.el),t||jh(a,o)),o.type===uo&&(o.el=a.el)}}function Np(i){const e=i.slice(),t=[0];let n,s,r,a,o;const c=i.length;for(n=0;n<c;n++){const l=i[n];if(l!==0){if(s=t[t.length-1],i[s]<l){e[n]=s,t.push(n);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,i[t[o]]<l?r=o+1:a=o;l<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const Op=i=>i.__isTeleport,Pt=Symbol.for("v-fgt"),uo=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),Is=[];let Vt=null;function Vn(i=!1){Is.push(Vt=i?null:[])}function zp(){Is.pop(),Vt=Is[Is.length-1]||null}let Gs=1;function Kl(i){Gs+=i}function qh(i){return i.dynamicChildren=Gs>0?Vt||Wi:null,zp(),Gs>0&&Vt&&Vt.push(i),i}function Fs(i,e,t,n,s,r){return qh(Wt(i,e,t,n,s,r,!0))}function pl(i,e,t,n,s){return qh(mt(i,e,t,n,s,!0))}function qr(i){return i?i.__v_isVNode===!0:!1}function xs(i,e){return i.type===e.type&&i.key===e.key}const ho="__vInternal",Xh=({key:i})=>i??null,zr=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?at(i)||pt(i)||ze(i)?{i:Mt,r:i,k:e,f:!!t}:i:null);function Wt(i,e=null,t=null,n=0,s=null,r=i===Pt?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Xh(e),ref:e&&zr(e),scopeId:oo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return o?(gl(c,t),r&128&&i.normalize(c)):t&&(c.shapeFlag|=at(t)?8:16),Gs>0&&!a&&Vt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Vt.push(c),c}const mt=Up;function Up(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===gp)&&(i=Ki),qr(i)){const o=Ji(i,e,!0);return t&&gl(o,t),Gs>0&&!r&&Vt&&(o.shapeFlag&6?Vt[Vt.indexOf(i)]=o:Vt.push(o)),o.patchFlag|=-2,o}if($p(i)&&(i=i.__vccOpts),e){e=Bp(e);let{class:o,style:c}=e;o&&!at(o)&&(e.class=el(o)),Je(c)&&(vh(c)&&!Fe(c)&&(c=ot({},c)),e.style=Qa(c))}const a=at(i)?1:ip(i)?128:Op(i)?64:Je(i)?4:ze(i)?2:0;return Wt(i,e,t,n,s,a,r,!0)}function Bp(i){return i?vh(i)||ho in i?ot({},i):i:null}function Ji(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:a}=i,o=e?kp(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&Xh(o),ref:e&&e.ref?t&&s?Fe(s)?s.concat(zr(e)):[s,zr(e)]:zr(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Pt?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ji(i.ssContent),ssFallback:i.ssFallback&&Ji(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function ml(i=" ",e=0){return mt(uo,null,i,e)}function on(i){return i==null||typeof i=="boolean"?mt(Ki):Fe(i)?mt(Pt,null,i.slice()):typeof i=="object"?zn(i):mt(uo,null,String(i))}function zn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ji(i)}function gl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),gl(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(ho in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Mt},t=32):(e=String(e),n&64?(t=16,e=[ml(e)]):t=8);i.children=e,i.shapeFlag|=t}function kp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=el([e.class,n.class]));else if(s==="style")e.style=Qa([e.style,n.style]);else if(Qr(s)){const r=e[s],a=n[s];a&&r!==a&&!(Fe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=n[s])}return e}function nn(i,e,t,n=null){Yt(i,e,7,[t,n])}const Gp=Bh();let Hp=0;function Vp(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Gp,r={uid:Hp++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(n,s),emitsOptions:Lh(n,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:n.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Zd.bind(null,r),i.ce&&i.ce(r),r}let ct=null,_l,bi,Jl="__VUE_INSTANCE_SETTERS__";(bi=ya()[Jl])||(bi=ya()[Jl]=[]),bi.push(i=>ct=i),_l=i=>{bi.length>1?bi.forEach(e=>e(i)):bi[0](i)};const Qi=i=>{_l(i),i.scope.on()},hi=()=>{ct&&ct.scope.off(),_l(null)};function Yh(i){return i.vnode.shapeFlag&4}let Hs=!1;function Wp(i,e=!1){Hs=e;const{props:t,children:n}=i.vnode,s=Yh(i);Cp(i,t,s,e),Pp(i,n);const r=s?jp(i,e):void 0;return Hs=!1,r}function jp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=al(new Proxy(i.ctx,yp));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Xp(i):null;Qi(i),cs();const r=Hn(n,i,0,[i.props,s]);if(us(),hi(),sh(r)){if(r.then(hi,hi),e)return r.then(a=>{Ql(i,a,e)}).catch(a=>{so(a,i,0)});i.asyncDep=r}else Ql(i,r,e)}else $h(i,e)}function Ql(i,e,t){ze(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Je(e)&&(i.setupState=Sh(e)),$h(i,t)}let ec;function $h(i,e,t){const n=i.type;if(!i.render){if(!e&&ec&&!n.render){const s=n.template||fl(i).template;if(s){const{isCustomElement:r,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:c}=n,l=ot(ot({isCustomElement:r,delimiters:o},a),c);n.render=ec(s,l)}}i.render=n.render||Xt}Qi(i),cs(),Mp(i),us(),hi()}function qp(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return At(i,"get","$attrs"),e[t]}}))}function Xp(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return qp(i)},slots:i.slots,emit:i.emit,expose:e}}function xl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Sh(al(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ds)return Ds[t](i)},has(e,t){return t in e||t in Ds}}))}function Yp(i,e=!0){return ze(i)?i.displayName||i.name:i.name||e&&i.__name}function $p(i){return ze(i)&&"__vccOpts"in i}const Gt=(i,e)=>Wd(i,e,Hs);function Zh(i,e,t){const n=arguments.length;return n===2?Je(e)&&!Fe(e)?qr(e)?mt(i,null,[e]):mt(i,e):mt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&qr(t)&&(t=[t]),mt(i,e,t))}const Zp=Symbol.for("v-scx"),Kp=()=>bn(Zp),Jp="3.3.4",Qp="http://www.w3.org/2000/svg",ii=typeof document<"u"?document:null,tc=ii&&ii.createElement("template"),em={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?ii.createElementNS(Qp,i):ii.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ii.createTextNode(i),createComment:i=>ii.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ii.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{tc.innerHTML=n?`<svg>${i}</svg>`:i;const o=tc.content;if(n){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function tm(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function nm(i,e,t){const n=i.style,s=at(t);if(t&&!s){if(e&&!at(e))for(const r in e)t[r]==null&&Pa(n,r,"");for(const r in t)Pa(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const nc=/\s*!important$/;function Pa(i,e,t){if(Fe(t))t.forEach(n=>Pa(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=im(i,e);nc.test(t)?i.setProperty(ls(n),t.replace(nc,""),"important"):i[n]=t}}const ic=["Webkit","Moz","ms"],Po={};function im(i,e){const t=Po[e];if(t)return t;let n=fn(e);if(n!=="filter"&&n in i)return Po[e]=n;n=no(n);for(let s=0;s<ic.length;s++){const r=ic[s]+n;if(r in i)return Po[e]=r}return e}const sc="http://www.w3.org/1999/xlink";function sm(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(sc,e.slice(6,e.length)):i.setAttributeNS(sc,e,t);else{const r=ud(e);t==null||r&&!rh(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function rm(i,e,t,n,s,r,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,s,r),i[e]=t??"";return}const o=i.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){i._value=t;const l=o==="OPTION"?i.getAttribute("value"):i.value,u=t??"";l!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=rh(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{i[e]=t}catch{}c&&i.removeAttribute(e)}function om(i,e,t,n){i.addEventListener(e,t,n)}function am(i,e,t,n){i.removeEventListener(e,t,n)}function lm(i,e,t,n,s=null){const r=i._vei||(i._vei={}),a=r[e];if(n&&a)a.value=n;else{const[o,c]=cm(e);if(n){const l=r[e]=fm(n,s);om(i,o,l,c)}else a&&(am(i,o,a,c),r[e]=void 0)}}const rc=/(?:Once|Passive|Capture)$/;function cm(i){let e;if(rc.test(i)){e={};let n;for(;n=i.match(rc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ls(i.slice(2)),e]}let Do=0;const um=Promise.resolve(),hm=()=>Do||(um.then(()=>Do=0),Do=Date.now());function fm(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Yt(dm(n,t.value),e,5,[n])};return t.value=i,t.attached=hm(),t}function dm(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const oc=/^on[a-z]/,pm=(i,e,t,n,s=!1,r,a,o,c)=>{e==="class"?tm(i,n,s):e==="style"?nm(i,t,n):Qr(e)?$a(e)||lm(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mm(i,e,n,s))?rm(i,e,n,r,a,o,c):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),sm(i,e,n,s))};function mm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&oc.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||oc.test(e)&&at(t)?!1:e in i}const gm=ot({patchProp:pm},em);let ac;function _m(){return ac||(ac=Ip(gm))}const xm=(...i)=>{const e=_m().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=vm(n);if(!s)return;const r=e._component;!ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function vm(i){return at(i)?document.querySelector(i):i}var ym=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Mm=Symbol();var lc;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(lc||(lc={}));function bm(){const i=hd(!0),e=i.run(()=>$s({}));let t=[],n=[];const s=al({install(r){s._a=r,r.provide(Mm,s),r.config.globalProperties.$pinia=s,n.forEach(a=>t.push(a)),n=[]},use(r){return!this._a&&!ym?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bi=typeof window<"u";function Sm(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Io(i,e){const t={};for(const n in e){const s=e[n];t[n]=Zt(s)?s.map(i):i(s)}return t}const Ns=()=>{},Zt=Array.isArray,wm=/\/$/,Em=i=>i.replace(wm,"");function Fo(i,e,t="/"){let n,s={},r="",a="";const o=e.indexOf("#");let c=e.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(n=e.slice(0,c),r=e.slice(c+1,o>-1?o:e.length),s=i(r)),o>-1&&(n=n||e.slice(0,o),a=e.slice(o,e.length)),n=Lm(n??e,t),{fullPath:n+(r&&"?")+r+a,path:n,query:s,hash:a}}function Tm(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function cc(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Am(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&es(e.matched[n],t.matched[s])&&Kh(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function es(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Kh(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Cm(i[t],e[t]))return!1;return!0}function Cm(i,e){return Zt(i)?uc(i,e):Zt(e)?uc(e,i):i===e}function uc(i,e){return Zt(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Lm(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,a,o;for(a=0;a<n.length;a++)if(o=n[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}var Vs;(function(i){i.pop="pop",i.push="push"})(Vs||(Vs={}));var Os;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Os||(Os={}));function Rm(i){if(!i)if(Bi){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Em(i)}const Pm=/^[^#]+#/;function Dm(i,e){return i.replace(Pm,"#")+e}function Im(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const fo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fm(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Im(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hc(i,e){return(history.state?history.state.position-e:-1)+i}const Da=new Map;function Nm(i,e){Da.set(i,e)}function Om(i){const e=Da.get(i);return Da.delete(i),e}let zm=()=>location.protocol+"//"+location.host;function Jh(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let o=s.includes(i.slice(r))?i.slice(r).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),cc(c,"")}return cc(t,i)+n+s}function Um(i,e,t,n){let s=[],r=[],a=null;const o=({state:f})=>{const p=Jh(i,location),g=t.value,m=e.value;let d=0;if(f){if(t.value=p,e.value=f,a&&a===g){a=null;return}d=m?f.position-m.position:0}else n(p);s.forEach(_=>{_(t.value,g,{delta:d,type:Vs.pop,direction:d?d>0?Os.forward:Os.back:Os.unknown})})};function c(){a=t.value}function l(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ye({},f.state,{scroll:fo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function fc(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?fo():null}}function Bm(i){const{history:e,location:t}=window,n={value:Jh(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+c:zm()+i+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function a(c,l){const u=Ye({},e.state,fc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),n.value=c}function o(c,l){const u=Ye({},s.value,e.state,{forward:c,scroll:fo()});r(u.current,u,!0);const h=Ye({},fc(n.value,c,null),{position:u.position+1},l);r(c,h,!1),n.value=c}return{location:n,state:s,push:o,replace:a}}function km(i){i=Rm(i);const e=Bm(i),t=Um(i,e.state,e.location,e.replace);function n(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=Ye({location:"",base:i,go:n,createHref:Dm.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Gm(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),km(i)}function Hm(i){return typeof i=="string"||i&&typeof i=="object"}function Qh(i){return typeof i=="string"||typeof i=="symbol"}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ef=Symbol("");var dc;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(dc||(dc={}));function ts(i,e){return Ye(new Error,{type:i,[ef]:!0},e)}function dn(i,e){return i instanceof Error&&ef in i&&(e==null||!!(i.type&e))}const pc="[^/]+?",Vm={sensitive:!1,strict:!1,start:!0,end:!0},Wm=/[.+*?^${}()[\]/\\]/g;function jm(i,e){const t=Ye({},Vm,e),n=[];let s=t.start?"^":"";const r=[];for(const l of i){const u=l.length?[]:[90];t.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Wm,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=f;r.push({name:g,repeatable:m,optional:d});const b=_||pc;if(b!==pc){p+=10;try{new RegExp(`(${b})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+T.message)}}let C=m?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(C=d&&l.length<2?`(?:/${C})`:"/"+C),d&&(C+="?"),s+=C,p+=20,d&&(p+=-8),m&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const l=n.length-1;n[l][n[l].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(l){const u=l.match(a),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=r[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in l?l[g]:"";if(Zt(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Zt(_)?_.join("/"):_;if(!b)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:a,score:n,keys:r,parse:o,stringify:c}}function qm(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Xm(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=qm(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(mc(n))return 1;if(mc(s))return-1}return s.length-n.length}function mc(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Ym={type:0,value:""},$m=/[a-zA-Z0-9_]/;function Zm(i){if(!i)return[[]];if(i==="/")return[[Ym]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${l}": ${p}`)}let t=0,n=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,c,l="",u="";function h(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;o<i.length;){if(c=i[o++],c==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:c==="/"?(l&&h(),a()):c===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:c==="("?t=2:$m.test(c)?f():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),a(),s}function Km(i,e,t){const n=jm(Zm(i.path),t),s=Ye(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jm(i,e){const t=[],n=new Map;e=xc({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const p=!f,g=Qm(u);g.aliasOf=f&&f.record;const m=xc(e,u),d=[g];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of C)d.push(Ye({},g,{components:f?f.record.components:g.components,path:T,aliasOf:f?f.record:g}))}let _,b;for(const C of d){const{path:T}=C;if(h&&T[0]!=="/"){const S=h.record.path,P=S[S.length-1]==="/"?"":"/";C.path=h.record.path+(T&&P+T)}if(_=Km(C,h,m),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),p&&u.name&&!_c(_)&&a(u.name)),g.children){const S=g.children;for(let P=0;P<S.length;P++)r(S[P],_,f&&f.children[P])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return b?()=>{a(b)}:Ns}function a(u){if(Qh(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function c(u){let h=0;for(;h<t.length&&Xm(u,t[h])>=0&&(u.record.path!==t[h].record.path||!tf(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!_c(u)&&n.set(u.record.name,u)}function l(u,h){let f,p={},g,m;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw ts(1,{location:u});m=f.record.name,p=Ye(gc(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&gc(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw ts(1,{location:u,currentLocation:h});m=f.record.name,p=Ye({},h.params,u.params),g=f.stringify(p)}const d=[];let _=f;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:tg(d)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:s}}function gc(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Qm(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:eg(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function eg(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function _c(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function tg(i){return i.reduce((e,t)=>Ye(e,t.meta),{})}function xc(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function tf(i,e){return e.children.some(t=>t===i||tf(i,t))}const nf=/#/g,ng=/&/g,ig=/\//g,sg=/=/g,rg=/\?/g,sf=/\+/g,og=/%5B/g,ag=/%5D/g,rf=/%5E/g,lg=/%60/g,of=/%7B/g,cg=/%7C/g,af=/%7D/g,ug=/%20/g;function vl(i){return encodeURI(""+i).replace(cg,"|").replace(og,"[").replace(ag,"]")}function hg(i){return vl(i).replace(of,"{").replace(af,"}").replace(rf,"^")}function Ia(i){return vl(i).replace(sf,"%2B").replace(ug,"+").replace(nf,"%23").replace(ng,"%26").replace(lg,"`").replace(of,"{").replace(af,"}").replace(rf,"^")}function fg(i){return Ia(i).replace(sg,"%3D")}function dg(i){return vl(i).replace(nf,"%23").replace(rg,"%3F")}function pg(i){return i==null?"":dg(i).replace(ig,"%2F")}function Xr(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function mg(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(sf," "),a=r.indexOf("="),o=Xr(a<0?r:r.slice(0,a)),c=a<0?null:Xr(r.slice(a+1));if(o in e){let l=e[o];Zt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function vc(i){let e="";for(let t in i){const n=i[t];if(t=fg(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Zt(n)?n.map(r=>r&&Ia(r)):[n&&Ia(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function gg(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Zt(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const _g=Symbol(""),yc=Symbol(""),yl=Symbol(""),lf=Symbol(""),Fa=Symbol("");function vs(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function Un(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((a,o)=>{const c=h=>{h===!1?o(ts(4,{from:t,to:e})):h instanceof Error?o(h):Hm(h)?o(ts(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),a())},l=i.call(n&&n.instances[s],e,t,c);let u=Promise.resolve(l);i.length<3&&(u=u.then(c)),u.catch(h=>o(h))})}function No(i,e,t,n){const s=[];for(const r of i)for(const a in r.components){let o=r.components[a];if(!(e!=="beforeRouteEnter"&&!r.instances[a]))if(xg(o)){const l=(o.__vccOpts||o)[e];l&&s.push(Un(l,t,n,r,a))}else{let c=o();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const u=Sm(l)?l.default:l;r.components[a]=u;const f=(u.__vccOpts||u)[e];return f&&Un(f,t,n,r,a)()}))}}return s}function xg(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Mc(i){const e=bn(yl),t=bn(lf),n=Gt(()=>e.resolve(qi(i.to))),s=Gt(()=>{const{matched:c}=n.value,{length:l}=c,u=c[l-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(es.bind(null,u));if(f>-1)return f;const p=bc(c[l-2]);return l>1&&bc(u)===p&&h[h.length-1].path!==p?h.findIndex(es.bind(null,c[l-2])):f}),r=Gt(()=>s.value>-1&&bg(t.params,n.value.params)),a=Gt(()=>s.value>-1&&s.value===t.matched.length-1&&Kh(t.params,n.value.params));function o(c={}){return Mg(c)?e[qi(i.replace)?"replace":"push"](qi(i.to)).catch(Ns):Promise.resolve()}return{route:n,href:Gt(()=>n.value.href),isActive:r,isExactActive:a,navigate:o}}const vg=hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mc,setup(i,{slots:e}){const t=Ys(Mc(i)),{options:n}=bn(yl),s=Gt(()=>({[Sc(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Sc(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:Zh("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),yg=vg;function Mg(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function bg(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!Zt(s)||s.length!==n.length||n.some((r,a)=>r!==s[a]))return!1}return!0}function bc(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Sc=(i,e,t)=>i??e??t,Sg=hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=bn(Fa),s=Gt(()=>i.route||n.value),r=bn(yc,0),a=Gt(()=>{let l=qi(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),o=Gt(()=>s.value.matched[a.value]);Or(yc,Gt(()=>a.value+1)),Or(_g,o),Or(Fa,s);const c=$s();return Nr(()=>[c.value,o.value,i.name],([l,u,h],[f,p,g])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!es(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=s.value,u=i.name,h=o.value,f=h&&h.components[u];if(!f)return wc(t.default,{Component:f,route:l});const p=h.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,d=Zh(f,Ye({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return wc(t.default,{Component:d,route:l})||d}}});function wc(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const wg=Sg;function Eg(i){const e=Jm(i.routes,i),t=i.parseQuery||mg,n=i.stringifyQuery||vc,s=i.history,r=vs(),a=vs(),o=vs(),c=kd(Ln);let l=Ln;Bi&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Io.bind(null,G=>""+G),h=Io.bind(null,pg),f=Io.bind(null,Xr);function p(G,re){let J,K;return Qh(G)?(J=e.getRecordMatcher(G),K=re):K=G,e.addRoute(K,J)}function g(G){const re=e.getRecordMatcher(G);re&&e.removeRoute(re)}function m(){return e.getRoutes().map(G=>G.record)}function d(G){return!!e.getRecordMatcher(G)}function _(G,re){if(re=Ye({},re||c.value),typeof G=="string"){const D=Fo(t,G,re.path),H=e.resolve({path:D.path},re),Z=s.createHref(D.fullPath);return Ye(D,H,{params:f(H.params),hash:Xr(D.hash),redirectedFrom:void 0,href:Z})}let J;if("path"in G)J=Ye({},G,{path:Fo(t,G.path,re.path).path});else{const D=Ye({},G.params);for(const H in D)D[H]==null&&delete D[H];J=Ye({},G,{params:h(D)}),re.params=h(re.params)}const K=e.resolve(J,re),Ee=G.hash||"";K.params=u(f(K.params));const w=Tm(n,Ye({},G,{hash:hg(Ee),path:K.path})),A=s.createHref(w);return Ye({fullPath:w,hash:Ee,query:n===vc?gg(G.query):G.query||{}},K,{redirectedFrom:void 0,href:A})}function b(G){return typeof G=="string"?Fo(t,G,c.value.path):Ye({},G)}function C(G,re){if(l!==G)return ts(8,{from:re,to:G})}function T(G){return N(G)}function S(G){return T(Ye(b(G),{replace:!0}))}function P(G){const re=G.matched[G.matched.length-1];if(re&&re.redirect){const{redirect:J}=re;let K=typeof J=="function"?J(G):J;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=b(K):{path:K},K.params={}),Ye({query:G.query,hash:G.hash,params:"path"in K?{}:G.params},K)}}function N(G,re){const J=l=_(G),K=c.value,Ee=G.state,w=G.force,A=G.replace===!0,D=P(J);if(D)return N(Ye(b(D),{state:typeof D=="object"?Ye({},Ee,D.state):Ee,force:w,replace:A}),re||J);const H=J;H.redirectedFrom=re;let Z;return!w&&Am(n,K,J)&&(Z=ts(16,{to:H,from:K}),fe(K,K,!0,!1)),(Z?Promise.resolve(Z):z(H,K)).catch(se=>dn(se)?dn(se,2)?se:ee(se):W(se,H,K)).then(se=>{if(se){if(dn(se,2))return N(Ye({replace:A},b(se.to),{state:typeof se.to=="object"?Ye({},Ee,se.to.state):Ee,force:w}),re||H)}else se=ye(H,K,!0,A,Ee);return U(H,K,se),se})}function M(G,re){const J=C(G,re);return J?Promise.reject(J):Promise.resolve()}function R(G){const re=we.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(G):G()}function z(G,re){let J;const[K,Ee,w]=Tg(G,re);J=No(K.reverse(),"beforeRouteLeave",G,re);for(const D of K)D.leaveGuards.forEach(H=>{J.push(Un(H,G,re))});const A=M.bind(null,G,re);return J.push(A),Y(J).then(()=>{J=[];for(const D of r.list())J.push(Un(D,G,re));return J.push(A),Y(J)}).then(()=>{J=No(Ee,"beforeRouteUpdate",G,re);for(const D of Ee)D.updateGuards.forEach(H=>{J.push(Un(H,G,re))});return J.push(A),Y(J)}).then(()=>{J=[];for(const D of w)if(D.beforeEnter)if(Zt(D.beforeEnter))for(const H of D.beforeEnter)J.push(Un(H,G,re));else J.push(Un(D.beforeEnter,G,re));return J.push(A),Y(J)}).then(()=>(G.matched.forEach(D=>D.enterCallbacks={}),J=No(w,"beforeRouteEnter",G,re),J.push(A),Y(J))).then(()=>{J=[];for(const D of a.list())J.push(Un(D,G,re));return J.push(A),Y(J)}).catch(D=>dn(D,8)?D:Promise.reject(D))}function U(G,re,J){o.list().forEach(K=>R(()=>K(G,re,J)))}function ye(G,re,J,K,Ee){const w=C(G,re);if(w)return w;const A=re===Ln,D=Bi?history.state:{};J&&(K||A?s.replace(G.fullPath,Ye({scroll:A&&D&&D.scroll},Ee)):s.push(G.fullPath,Ee)),c.value=G,fe(G,re,J,A),ee()}let ue;function O(){ue||(ue=s.listen((G,re,J)=>{if(!Ae.listening)return;const K=_(G),Ee=P(K);if(Ee){N(Ye(Ee,{replace:!0}),K).catch(Ns);return}l=K;const w=c.value;Bi&&Nm(hc(w.fullPath,J.delta),fo()),z(K,w).catch(A=>dn(A,12)?A:dn(A,2)?(N(A.to,K).then(D=>{dn(D,20)&&!J.delta&&J.type===Vs.pop&&s.go(-1,!1)}).catch(Ns),Promise.reject()):(J.delta&&s.go(-J.delta,!1),W(A,K,w))).then(A=>{A=A||ye(K,w,!1),A&&(J.delta&&!dn(A,8)?s.go(-J.delta,!1):J.type===Vs.pop&&dn(A,20)&&s.go(-1,!1)),U(K,w,A)}).catch(Ns)}))}let ie=vs(),k=vs(),j;function W(G,re,J){ee(G);const K=k.list();return K.length?K.forEach(Ee=>Ee(G,re,J)):console.error(G),Promise.reject(G)}function X(){return j&&c.value!==Ln?Promise.resolve():new Promise((G,re)=>{ie.add([G,re])})}function ee(G){return j||(j=!G,O(),ie.list().forEach(([re,J])=>G?J(G):re()),ie.reset()),G}function fe(G,re,J,K){const{scrollBehavior:Ee}=i;if(!Bi||!Ee)return Promise.resolve();const w=!J&&Om(hc(G.fullPath,0))||(K||!J)&&history.state&&history.state.scroll||null;return Eh().then(()=>Ee(G,re,w)).then(A=>A&&Fm(A)).catch(A=>W(A,G,re))}const le=G=>s.go(G);let de;const we=new Set,Ae={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:i,push:T,replace:S,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:k.add,isReady:X,install(G){const re=this;G.component("RouterLink",yg),G.component("RouterView",wg),G.config.globalProperties.$router=re,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>qi(c)}),Bi&&!de&&c.value===Ln&&(de=!0,T(s.location).catch(Ee=>{}));const J={};for(const Ee in Ln)Object.defineProperty(J,Ee,{get:()=>c.value[Ee],enumerable:!0});G.provide(yl,re),G.provide(lf,_h(J)),G.provide(Fa,c);const K=G.unmount;we.add(G),G.unmount=function(){we.delete(G),we.size<1&&(l=Ln,ue&&ue(),ue=null,c.value=Ln,de=!1,j=!1),K()}}};function Y(G){return G.reduce((re,J)=>re.then(()=>R(J)),Promise.resolve())}return Ae}function Tg(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(i.matched.find(l=>es(l,o))?n.push(o):t.push(o));const c=i.matched[a];c&&(e.matched.find(l=>es(l,c))||s.push(c))}return[t,n,s]}var ht={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Ws(i){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ws(i)}function Ec(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable})),t.push.apply(t,n)}return t}function Oo(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ec(Object(t),!0).forEach(function(n){Ag(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Ec(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Ag(i,e,t){return e=Cg(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Cg(i){var e=Lg(i,"string");return Ws(e)==="symbol"?e:String(e)}function Lg(i,e){if(Ws(i)!=="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(Ws(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}var Tc={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[ht.STARTS_WITH,ht.CONTAINS,ht.NOT_CONTAINS,ht.ENDS_WITH,ht.EQUALS,ht.NOT_EQUALS],numeric:[ht.EQUALS,ht.NOT_EQUALS,ht.LESS_THAN,ht.LESS_THAN_OR_EQUAL_TO,ht.GREATER_THAN,ht.GREATER_THAN_OR_EQUAL_TO],date:[ht.DATE_IS,ht.DATE_IS_NOT,ht.DATE_BEFORE,ht.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,unstyled:!1,csp:{nonce:void 0}},Rg=Symbol();function Pg(i,e,t,n){var s=document.getElementById(t),r=s.cloneNode(!0),a=s.getAttribute("href").replace(i,e);r.setAttribute("id",t+"-clone"),r.setAttribute("href",a),r.addEventListener("load",function(){s.remove(),r.setAttribute("id",t),n&&n()}),s.parentNode&&s.parentNode.insertBefore(r,s.nextSibling)}var Dg={install:function(e,t){var n=t?Oo(Oo({},Tc),t):Oo({},Tc),s={config:Ys(n),changeTheme:Pg};e.config.globalProperties.$primevue=s,e.provide(Rg,s)}};const po=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Ig={};function Fg(i,e){const t=hl("router-view");return Vn(),pl(t)}const Ng=po(Ig,[["render",Fg]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="141",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Og=0,Ac=1,zg=2,cf=1,Ug=2,As=3,js=0,$t=1,ns=2,Bg=1,Wn=0,Yi=1,Cc=2,Lc=3,Rc=4,kg=5,ki=100,Gg=101,Hg=102,Pc=103,Dc=104,Vg=200,Wg=201,jg=202,qg=203,uf=204,hf=205,Xg=206,Yg=207,$g=208,Zg=209,Kg=210,Jg=0,Qg=1,e_=2,Na=3,t_=4,n_=5,i_=6,s_=7,mo=0,r_=1,o_=2,Sn=0,a_=1,l_=2,c_=3,u_=4,h_=5,ff=300,is=301,ss=302,Oa=303,za=304,go=306,Ua=1e3,Ht=1001,Ba=1002,Et=1003,Ic=1004,Fc=1005,Ft=1006,f_=1007,_o=1008,mi=1009,d_=1010,p_=1011,df=1012,m_=1013,ri=1014,oi=1015,qs=1016,g_=1017,__=1018,$i=1020,x_=1021,v_=1022,jt=1023,y_=1024,M_=1025,fi=1026,rs=1027,b_=1028,S_=1029,w_=1030,E_=1031,T_=1033,zo=33776,Uo=33777,Bo=33778,ko=33779,Nc=35840,Oc=35841,zc=35842,Uc=35843,A_=36196,Bc=37492,kc=37496,Gc=37808,Hc=37809,Vc=37810,Wc=37811,jc=37812,qc=37813,Xc=37814,Yc=37815,$c=37816,Zc=37817,Kc=37818,Jc=37819,Qc=37820,eu=37821,tu=36492,gi=3e3,Ze=3001,C_=3200,L_=3201,fs=0,R_=1,Mn="srgb",ai="srgb-linear",Go=7680,P_=519,nu=35044,iu="300 es",ka=1035;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const lt=[];for(let i=0;i<256;i++)lt[i]=(i<16?"0":"")+i.toString(16);const Ur=Math.PI/180,Ga=180/Math.PI;function Zs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function D_(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function su(i){return(i&i-1)===0&&i!==0}function Ha(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Le{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class un{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=s[0],d=s[3],_=s[6],b=s[1],C=s[4],T=s[7],S=s[2],P=s[5],N=s[8];return r[0]=a*m+o*b+c*S,r[3]=a*d+o*C+c*P,r[6]=a*_+o*T+c*N,r[1]=l*m+u*b+h*S,r[4]=l*d+u*C+h*P,r[7]=l*_+u*T+h*N,r[2]=f*m+p*b+g*S,r[5]=f*d+p*C+g*P,r[8]=f*_+p*T+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*l-u*n)*m,e[2]=(o*n-s*a)*m,e[3]=f*m,e[4]=(u*t-s*c)*m,e[5]=(s*r-o*t)*m,e[6]=p*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],a=s[3],o=s[6],c=s[1],l=s[4],u=s[7];return s[0]=t*r+n*c,s[3]=t*a+n*l,s[6]=t*o+n*u,s[1]=-n*r+t*c,s[4]=-n*a+t*l,s[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function pf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vo={[Mn]:{[ai]:di},[ai]:{[Mn]:Br}},Nt={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Vo[e]&&Vo[e][t]!==void 0){const n=Vo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Ot={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function lr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ai){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ai){if(e=D_(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Nt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Nt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Mn){const n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Nt.fromWorkingColorSpace(lr(this,it),e),yt(it.r*255,0,255)<<16^yt(it.g*255,0,255)<<8^yt(it.b*255,0,255)<<0}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ai){Nt.fromWorkingColorSpace(lr(this,it),t);const n=it.r,s=it.g,r=it.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ai){return Nt.fromWorkingColorSpace(lr(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Mn){return Nt.fromWorkingColorSpace(lr(this,it),e),e!==Mn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(ar);const n=Ho(Ot.h,ar.h,t),s=Ho(Ot.s,ar.s,t),r=Ho(Ot.l,ar.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=mf;let Ei;class gf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Yr("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _f{constructor(e=null){this.isSource=!0,this.uuid=Zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gf.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I_=0;class Kt extends xi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Ht,s=Ht,r=Ft,a=_o,o=jt,c=mi,l=1,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Zs(),this.name="",this.source=new _f(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=ff;class ut{constructor(e=0,t=0,n=0,s=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],m=c[2],d=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,T=(p+1)/2,S=(_+1)/2,P=(u+f)/4,N=(h+m)/4,M=(g+d)/4;return C>T&&C>S?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=P/n,r=N/n):T>S?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=N/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-m)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jn extends xi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xf extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||c!==f||l!==p||u!==g){let d=1-o;const _=c*f+l*p+u*g+h*m,b=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const S=Math.sqrt(C),P=Math.atan2(S,_*b);d=Math.sin(d*P)/S,o=Math.sin(o*P)/S}const T=o*b;if(c=c*d+f*T,l=l*d+p*T,u=u*d+g*T,h=h*d+m*T,d===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*s-o*n,u=c*n+o*t-r*s,h=c*s+r*n-a*t,f=-r*t-a*n-o*s;return this.x=l*c+f*-r+u*-o-h*-a,this.y=u*c+f*-a+h*-r-l*-o,this.z=h*c+f*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new I,ru=new _i;class ds{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Kn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),cr.subVectors(this.max,ys),Ti.subVectors(e.a,ys),Ai.subVectors(e.b,ys),Ci.subVectors(e.c,ys),Rn.subVectors(Ai,Ti),Pn.subVectors(Ci,Ai),Jn.subVectors(Ti,Ci);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Jn.z,Jn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Jn.z,0,-Jn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Jn.y,Jn.x,0];return!Yo(t,Ti,Ai,Ci,cr)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,Ti,Ai,Ci,cr))?!1:(ur.crossVectors(Rn,Pn),t=[ur.x,ur.y,ur.z],Yo(t,Ti,Ai,Ci,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new I,new I,new I,new I,new I,new I,new I,new I],Kn=new I,Xo=new ds,Ti=new I,Ai=new I,Ci=new I,Rn=new I,Pn=new I,Jn=new I,ys=new I,cr=new I,ur=new I,Qn=new I;function Yo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const N_=new ds,ou=new I,hr=new I,$o=new I;class Ks{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):N_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){$o.subVectors(e,this.center);const t=$o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add($o.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?hr.set(0,0,1).multiplyScalar(e.radius):hr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ou.copy(e.center).add(hr)),this.expandByPoint(ou.copy(e.center).sub(hr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new I,Zo=new I,fr=new I,Dn=new I,Ko=new I,dr=new I,Jo=new I;class xo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.direction).multiplyScalar(t).add(this.origin),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zo.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Zo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fr),o=Dn.dot(this.direction),c=-Dn.dot(fr),l=Dn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(fr).multiplyScalar(f).add(Zo),p}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||n!==n)&&(n=r),(a<s||s!==s)&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){Ko.subVectors(t,e),dr.subVectors(n,e),Jo.crossVectors(Ko,dr);let a=this.direction.dot(Jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(dr.crossVectors(Dn,dr));if(c<0)return null;const l=o*this.direction.dot(Ko.cross(Dn));if(l<0||c+l>a)return null;const u=-o*Dn.dot(Jo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,a,o,c,l,u,h,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,m=l*h;t[0]=f+m*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=m+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,m=l*h;t[0]=f-m*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+m,t[1]=c*h,t[5]=m*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+m,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,z_)}lookAt(e,t,n){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),In.crossVectors(n,Lt),In.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),In.crossVectors(n,Lt)),In.normalize(),pr.crossVectors(Lt,In),s[0]=In.x,s[4]=pr.x,s[8]=Lt.x,s[1]=In.y,s[5]=pr.y,s[9]=Lt.y,s[2]=In.z,s[6]=pr.z,s[10]=Lt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],b=n[3],C=n[7],T=n[11],S=n[15],P=s[0],N=s[4],M=s[8],R=s[12],z=s[1],U=s[5],ye=s[9],ue=s[13],O=s[2],ie=s[6],k=s[10],j=s[14],W=s[3],X=s[7],ee=s[11],fe=s[15];return r[0]=a*P+o*z+c*O+l*W,r[4]=a*N+o*U+c*ie+l*X,r[8]=a*M+o*ye+c*k+l*ee,r[12]=a*R+o*ue+c*j+l*fe,r[1]=u*P+h*z+f*O+p*W,r[5]=u*N+h*U+f*ie+p*X,r[9]=u*M+h*ye+f*k+p*ee,r[13]=u*R+h*ue+f*j+p*fe,r[2]=g*P+m*z+d*O+_*W,r[6]=g*N+m*U+d*ie+_*X,r[10]=g*M+m*ye+d*k+_*ee,r[14]=g*R+m*ue+d*j+_*fe,r[3]=b*P+C*z+T*O+S*W,r[7]=b*N+C*U+T*ie+S*X,r[11]=b*M+C*ye+T*k+S*ee,r[15]=b*R+C*ue+T*j+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+m*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+d*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+_*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],b=h*d*l-m*f*l+m*c*p-o*d*p-h*c*_+o*f*_,C=g*f*l-u*d*l-g*c*p+a*d*p+u*c*_-a*f*_,T=u*m*l-g*h*l+g*o*p-a*m*p-u*o*_+a*h*_,S=g*h*c-u*m*c-g*o*f+a*m*f+u*o*d-a*h*d,P=t*b+n*C+s*T+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=b*N,e[1]=(m*f*r-h*d*r-m*s*p+n*d*p+h*s*_-n*f*_)*N,e[2]=(o*d*r-m*c*r+m*s*l-n*d*l-o*s*_+n*c*_)*N,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*N,e[4]=C*N,e[5]=(u*d*r-g*f*r+g*s*p-t*d*p-u*s*_+t*f*_)*N,e[6]=(g*c*r-a*d*r-g*s*l+t*d*l+a*s*_-t*c*_)*N,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*N,e[8]=T*N,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*_-t*h*_)*N,e[10]=(a*m*r-g*o*r+g*n*l-t*m*l-a*n*_+t*o*_)*N,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*N,e[12]=S*N,e[13]=(u*m*s-g*h*s+g*n*f-t*m*f-u*n*d+t*h*d)*N,e[14]=(g*o*s-a*m*s-g*n*c+t*m*c+a*n*d-t*o*d)*N,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,g=r*h,m=a*u,d=a*h,_=o*h,b=c*l,C=c*u,T=c*h,S=n.x,P=n.y,N=n.z;return s[0]=(1-(m+_))*S,s[1]=(p+T)*S,s[2]=(g-C)*S,s[3]=0,s[4]=(p-T)*P,s[5]=(1-(f+_))*P,s[6]=(d+b)*P,s[7]=0,s[8]=(g+C)*N,s[9]=(d-b)*N,s[10]=(1-(f+m))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zt.copy(this);const l=1/r,u=1/a,h=1/o;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,c=2*r/(t-e),l=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,c=1/(t-e),l=1/(n-s),u=1/(a-r),h=(t+e)*c,f=(n+s)*l,p=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new I,zt=new nt,O_=new I(0,0,0),z_=new I(1,1,1),In=new I,pr=new I,Lt=new I,au=new nt,lu=new _i;class Js{constructor(e=0,t=0,n=0,s=Js.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Js.DefaultOrder="XYZ";Js.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const cu=new I,Ri=new _i,gn=new nt,mr=new I,Ms=new I,B_=new I,k_=new _i,uu=new I(1,0,0),hu=new I(0,1,0),fu=new I(0,0,1),G_={type:"added"},du={type:"removed"};class gt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new I,t=new Js,n=new _i,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new un}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ms,mr,this.up):gn.lookAt(mr,Ms,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(gn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(G_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(du)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(du)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DefaultUp=new I(0,1,0);gt.DefaultMatrixAutoUpdate=!0;const Ut=new I,_n=new I,Qo=new I,xn=new I,Pi=new I,Di=new I,pu=new I,ea=new I,ta=new I,na=new I;class cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ut.subVectors(e,t),s.cross(Ut);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ut.subVectors(s,t),_n.subVectors(n,t),Qo.subVectors(e,t);const a=Ut.dot(Ut),o=Ut.dot(_n),c=Ut.dot(Qo),l=_n.dot(_n),u=_n.dot(Qo),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,xn),c.set(0,0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c}static isFrontFacing(e,t,n,s){return Ut.subVectors(n,t),_n.subVectors(e,t),Ut.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Ut.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return cn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,n),Di.subVectors(r,n),ea.subVectors(e,n);const c=Pi.dot(ea),l=Di.dot(ea);if(c<=0&&l<=0)return t.copy(n);ta.subVectors(e,s);const u=Pi.dot(ta),h=Di.dot(ta);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Pi,a);na.subVectors(e,r);const p=Pi.dot(na),g=Di.dot(na);if(g>=0&&p<=g)return t.copy(r);const m=p*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Di,o);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return pu.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(pu,o);const _=1/(d+m+f);return a=m*_,o=f*_,t.copy(n).addScaledVector(Pi,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let H_=0;class st extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Yi,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uf,this.blendDst=hf,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Bg;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==js&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}st.fromType=function(){return null};class vo extends st{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new I,gr=new Le;class hn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=nu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),a=new Re),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),a=new Le),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),a=new ut),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class vf extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yf extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let V_=0;const Dt=new nt,ia=new gt,Ii=new I,Rt=new ds,bs=new ds,rt=new I;class Ct extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pf(e)?yf:vf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new un().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Rt.min,bs.min),Rt.expandByPoint(rt),rt.addVectors(Rt.max,bs.max),Rt.expandByPoint(rt)):(Rt.expandByPoint(bs.min),Rt.expandByPoint(bs.max))}Rt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)rt.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(e,l),rt.add(Ii)),s=Math.max(s,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let z=0;z<o;z++)l[z]=new I,u[z]=new I;const h=new I,f=new I,p=new I,g=new Le,m=new Le,d=new Le,_=new I,b=new I;function C(z,U,ye){h.fromArray(s,z*3),f.fromArray(s,U*3),p.fromArray(s,ye*3),g.fromArray(a,z*2),m.fromArray(a,U*2),d.fromArray(a,ye*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const ue=1/(m.x*d.y-d.x*m.y);isFinite(ue)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(ue),b.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(ue),l[z].add(_),l[U].add(_),l[ye].add(_),u[z].add(b),u[U].add(b),u[ye].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let z=0,U=T.length;z<U;++z){const ye=T[z],ue=ye.start,O=ye.count;for(let ie=ue,k=ue+O;ie<k;ie+=3)C(n[ie+0],n[ie+1],n[ie+2])}const S=new I,P=new I,N=new I,M=new I;function R(z){N.fromArray(r,z*3),M.copy(N);const U=l[z];S.copy(U),S.sub(N.multiplyScalar(N.dot(U))).normalize(),P.crossVectors(M,U);const ue=P.dot(u[z])<0?-1:1;c[z*4]=S.x,c[z*4+1]=S.y,c[z*4+2]=S.z,c[z*4+3]=ue}for(let z=0,U=T.length;z<U;++z){const ye=T[z],ue=ye.start,O=ye.count;for(let ie=ue,k=ue+O;ie<k;ie+=3)R(n[ie+0]),R(n[ie+1]),R(n[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,d),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const a=n[s].array,o=e.attributes[s],c=o.array,l=o.itemSize*t,u=Math.min(c.length,a.length-l);for(let h=0,f=l;h<u;h++,f++)a[f]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let m=0,d=c.length;m<d;m++){o.isInterleavedBufferAttribute?p=c[m]*o.data.stride+o.offset:p=c[m]*u;for(let _=0;_<u;_++)f[g++]=l[p++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new nt,Fi=new xo,sa=new Ks,Fn=new I,Nn=new I,On=new I,ra=new I,oa=new I,aa=new I,_r=new I,xr=new I,vr=new I,yr=new Le,Mr=new Le,br=new Le,la=new I,Sr=new I;class qt extends gt{constructor(e=new Ct,t=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),e.ray.intersectsSphere(sa)===!1)||(mu.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(mu),n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],b=s[_.materialIndex],C=Math.max(_.start,g.start),T=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,P=T;S<P;S+=3){const N=o.getX(S),M=o.getX(S+1),R=o.getX(S+2);a=wr(this,b,e,Fi,c,l,u,h,f,N,M,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=m,b=d;_<b;_+=3){const C=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);a=wr(this,s,e,Fi,c,l,u,h,f,C,T,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],b=s[_.materialIndex],C=Math.max(_.start,g.start),T=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,P=T;S<P;S+=3){const N=S,M=S+1,R=S+2;a=wr(this,b,e,Fi,c,l,u,h,f,N,M,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let _=m,b=d;_<b;_+=3){const C=_,T=_+1,S=_+2;a=wr(this,s,e,Fi,c,l,u,h,f,C,T,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function W_(i,e,t,n,s,r,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side!==ns,o),c===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Sr);return l<t.near||l>t.far?null:{distance:l,point:Sr.clone(),object:i}}function wr(i,e,t,n,s,r,a,o,c,l,u,h){Fn.fromBufferAttribute(s,l),Nn.fromBufferAttribute(s,u),On.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){_r.set(0,0,0),xr.set(0,0,0),vr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(ra.fromBufferAttribute(_,l),oa.fromBufferAttribute(_,u),aa.fromBufferAttribute(_,h),a?(_r.addScaledVector(ra,d),xr.addScaledVector(oa,d),vr.addScaledVector(aa,d)):(_r.addScaledVector(ra.sub(Fn),d),xr.addScaledVector(oa.sub(Nn),d),vr.addScaledVector(aa.sub(On),d)))}Fn.add(_r),Nn.add(xr),On.add(vr)}i.isSkinnedMesh&&(i.boneTransform(l,Fn),i.boneTransform(u,Nn),i.boneTransform(h,On));const p=W_(i,e,t,n,Fn,Nn,On,la);if(p){o&&(yr.fromBufferAttribute(o,l),Mr.fromBufferAttribute(o,u),br.fromBufferAttribute(o,h),p.uv=cn.getUV(la,Fn,Nn,On,yr,Mr,br,new Le)),c&&(yr.fromBufferAttribute(c,l),Mr.fromBufferAttribute(c,u),br.fromBufferAttribute(c,h),p.uv2=cn.getUV(la,Fn,Nn,On,yr,Mr,br,new Le));const g={a:l,b:u,c:h,normal:new I,materialIndex:0};cn.getNormal(Fn,Nn,On,g.normal),p.face=g}return p}class ps extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(m,d,_,b,C,T,S,P,N,M,R){const z=T/N,U=S/M,ye=T/2,ue=S/2,O=P/2,ie=N+1,k=M+1;let j=0,W=0;const X=new I;for(let ee=0;ee<k;ee++){const fe=ee*U-ue;for(let le=0;le<ie;le++){const de=le*z-ye;X[m]=de*b,X[d]=fe*C,X[_]=O,l.push(X.x,X.y,X.z),X[m]=0,X[d]=0,X[_]=P>0?1:-1,u.push(X.x,X.y,X.z),h.push(le/N),h.push(1-ee/M),j+=1}}for(let ee=0;ee<M;ee++)for(let fe=0;fe<N;fe++){const le=f+fe+ie*ee,de=f+fe+ie*(ee+1),we=f+(fe+1)+ie*(ee+1),Ae=f+(fe+1)+ie*ee;c.push(le,de,Ae),c.push(de,we,Ae),W+=6}o.addGroup(p,W,R),p+=W,f+=j}}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const s in n)e[s]=n[s]}return e}const j_={clone:os,merge:ft};var q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends st{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=q_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mf extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Mf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=90,Oi=1;class Y_ extends gt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new Tt(Ni,Oi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(1,0,0)),this.add(s);const r=new Tt(Ni,Oi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(-1,0,0)),this.add(r);const a=new Tt(Ni,Oi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Tt(Ni,Oi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const c=new Tt(Ni,Oi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,1)),this.add(c);const l=new Tt(Ni,Oi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class bf extends Kt{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends jn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Wn});r.uniforms.tEquirect.value=t;const a=new qt(s,r),o=t.minFilter;return t.minFilter===_o&&(t.minFilter=Ft),new Y_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const ca=new I,Z_=new I,K_=new un;class ei{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ca.subVectors(n,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K_.getNormalMatrix(e),s=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ks,Er=new I;class Sl{constructor(e=new ei,t=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],b=n[14],C=n[15];return t[0].setComponents(o-s,h-c,m-f,C-d).normalize(),t[1].setComponents(o+s,h+c,m+f,C+d).normalize(),t[2].setComponents(o+r,h+l,m+p,C+_).normalize(),t[3].setComponents(o-r,h-l,m-p,C-_).normalize(),t[4].setComponents(o-a,h-u,m-g,C-b).normalize(),t[5].setComponents(o+a,h+u,m+g,C+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function J_(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,f=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,l),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class yo extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const b=_*f-a;for(let C=0;C<l;C++){const T=C*h-r;g.push(T,-b,0),m.push(0,0,1),d.push(C/o),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<o;b++){const C=b+l*_,T=b+l*(_+1),S=b+1+l*(_+1),P=b+1+l*_;p.push(C,T,P),p.push(T,S,P)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(d,2))}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0="vec3 transformed = vec3( position );",o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
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
}`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`vec3 diffuse = vec3( 1.0 );
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
#endif`,k0=`uniform bool receiveShadow;
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
#endif`,G0=`#if defined( USE_ENVMAP )
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,q0=`PhysicalMaterial material;
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
#endif`,X0=`struct PhysicalMaterial {
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
}`,Y0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
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
#endif`,ux=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,fx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
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
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#ifdef USE_SHADOWMAP
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
#endif`,Rx=`#ifdef USE_SHADOWMAP
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
#endif`,Px=`#ifdef USE_SHADOWMAP
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
#endif`,Dx=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Yx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#include <envmap_common_pars_fragment>
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
}`,ev=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
}`,nv=`#define DISTANCE
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
}`,iv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ov=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#define LAMBERT
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
}`,hv=`uniform vec3 diffuse;
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
}`,fv=`#define MATCAP
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
}`,dv=`#define MATCAP
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
}`,pv=`#define NORMAL
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
}`,mv=`#define NORMAL
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
}`,gv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,xv=`#define STANDARD
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
}`,vv=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Ev=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:Q_,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,begin_vertex:r0,beginnormal_vertex:o0,bsdfs:a0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:d0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:_0,common:x0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:y0,displacementmap_pars_vertex:M0,displacementmap_vertex:b0,emissivemap_fragment:S0,emissivemap_pars_fragment:w0,encodings_fragment:E0,encodings_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:C0,envmap_pars_fragment:L0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:G0,envmap_vertex:P0,fog_vertex:D0,fog_pars_vertex:I0,fog_fragment:F0,fog_pars_fragment:N0,gradientmap_pars_fragment:O0,lightmap_fragment:z0,lightmap_pars_fragment:U0,lights_lambert_vertex:B0,lights_pars_begin:k0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:j0,lights_physical_fragment:q0,lights_physical_pars_fragment:X0,lights_fragment_begin:Y0,lights_fragment_maps:$0,lights_fragment_end:Z0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ox,morphcolor_vertex:ax,morphnormal_vertex:lx,morphtarget_pars_vertex:cx,morphtarget_vertex:ux,normal_fragment_begin:hx,normal_fragment_maps:fx,normal_pars_fragment:dx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:yx,output_fragment:Mx,packing:bx,premultiplied_alpha_fragment:Sx,project_vertex:wx,dithering_fragment:Ex,dithering_pars_fragment:Tx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Px,shadowmask_pars_fragment:Dx,skinbase_vertex:Ix,skinning_pars_vertex:Fx,skinning_vertex:Nx,skinnormal_vertex:Ox,specularmap_fragment:zx,specularmap_pars_fragment:Ux,tonemapping_fragment:Bx,tonemapping_pars_fragment:kx,transmission_fragment:Gx,transmission_pars_fragment:Hx,uv_pars_fragment:Vx,uv_pars_vertex:Wx,uv_vertex:jx,uv2_pars_fragment:qx,uv2_pars_vertex:Xx,uv2_vertex:Yx,worldpos_vertex:$x,background_vert:Zx,background_frag:Kx,cube_vert:Jx,cube_frag:Qx,depth_vert:ev,depth_frag:tv,distanceRGBA_vert:nv,distanceRGBA_frag:iv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:uv,meshlambert_frag:hv,meshmatcap_vert:fv,meshmatcap_frag:dv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:gv,meshphong_frag:_v,meshphysical_vert:xv,meshphysical_frag:vv,meshtoon_vert:yv,meshtoon_frag:Mv,points_vert:bv,points_frag:Sv,shadow_vert:wv,shadow_frag:Ev,sprite_vert:Tv,sprite_frag:Av},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new un},uv2Transform:{value:new un},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}}},an={basic:{uniforms:ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ft([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ft([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ft([Se.points,Se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ft([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ft([Se.common,Se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ft([Se.sprite,Se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new un},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:ft([Se.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ft([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ft([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:ft([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function Cv(i,e,t,n,s,r){const a=new Re(0);let o=s===!0?0:1,c,l,u=null,h=0,f=null;function p(m,d){let _=!1,b=d.isScene===!0?d.background:null;b&&b.isTexture&&(b=e.get(b));const C=i.xr,T=C.getSession&&C.getSession();T&&T.environmentBlendMode==="additive"&&(b=null),b===null?g(a,o):b&&b.isColor&&(g(b,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===go)?(l===void 0&&(l=new qt(new ps(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:os(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new qt(new yo(2,2),new En({name:"BackgroundMaterial",uniforms:os(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:p}}function Lv(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=d(null);let l=c,u=!1;function h(O,ie,k,j,W){let X=!1;if(a){const ee=m(j,k,ie);l!==ee&&(l=ee,p(l.object)),X=_(O,j,k,W),X&&b(O,j,k,W)}else{const ee=ie.wireframe===!0;(l.geometry!==j.id||l.program!==k.id||l.wireframe!==ee)&&(l.geometry=j.id,l.program=k.id,l.wireframe=ee,X=!0)}W!==null&&t.update(W,34963),(X||u)&&(u=!1,M(O,ie,k,j),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,ie,k){const j=k.wireframe===!0;let W=o[O.id];W===void 0&&(W={},o[O.id]=W);let X=W[ie.id];X===void 0&&(X={},W[ie.id]=X);let ee=X[j];return ee===void 0&&(ee=d(f()),X[j]=ee),ee}function d(O){const ie=[],k=[],j=[];for(let W=0;W<s;W++)ie[W]=0,k[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:k,attributeDivisors:j,object:O,attributes:{},index:null}}function _(O,ie,k,j){const W=l.attributes,X=ie.attributes;let ee=0;const fe=k.getAttributes();for(const le in fe)if(fe[le].location>=0){const we=W[le];let Ae=X[le];if(Ae===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),we===void 0||we.attribute!==Ae||Ae&&we.data!==Ae.data)return!0;ee++}return l.attributesNum!==ee||l.index!==j}function b(O,ie,k,j){const W={},X=ie.attributes;let ee=0;const fe=k.getAttributes();for(const le in fe)if(fe[le].location>=0){let we=X[le];we===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(we=O.instanceColor));const Ae={};Ae.attribute=we,we&&we.data&&(Ae.data=we.data),W[le]=Ae,ee++}l.attributes=W,l.attributesNum=ee,l.index=j}function C(){const O=l.newAttributes;for(let ie=0,k=O.length;ie<k;ie++)O[ie]=0}function T(O){S(O,0)}function S(O,ie){const k=l.newAttributes,j=l.enabledAttributes,W=l.attributeDivisors;k[O]=1,j[O]===0&&(i.enableVertexAttribArray(O),j[O]=1),W[O]!==ie&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,ie),W[O]=ie)}function P(){const O=l.newAttributes,ie=l.enabledAttributes;for(let k=0,j=ie.length;k<j;k++)ie[k]!==O[k]&&(i.disableVertexAttribArray(k),ie[k]=0)}function N(O,ie,k,j,W,X){n.isWebGL2===!0&&(k===5124||k===5125)?i.vertexAttribIPointer(O,ie,k,W,X):i.vertexAttribPointer(O,ie,k,j,W,X)}function M(O,ie,k,j){if(n.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const W=j.attributes,X=k.getAttributes(),ee=ie.defaultAttributeValues;for(const fe in X){const le=X[fe];if(le.location>=0){let de=W[fe];if(de===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(de=O.instanceColor)),de!==void 0){const we=de.normalized,Ae=de.itemSize,Y=t.get(de);if(Y===void 0)continue;const G=Y.buffer,re=Y.type,J=Y.bytesPerElement;if(de.isInterleavedBufferAttribute){const K=de.data,Ee=K.stride,w=de.offset;if(K.isInstancedInterleavedBuffer){for(let A=0;A<le.locationSize;A++)S(le.location+A,K.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let A=0;A<le.locationSize;A++)T(le.location+A);i.bindBuffer(34962,G);for(let A=0;A<le.locationSize;A++)N(le.location+A,Ae/le.locationSize,re,we,Ee*J,(w+Ae/le.locationSize*A)*J)}else{if(de.isInstancedBufferAttribute){for(let K=0;K<le.locationSize;K++)S(le.location+K,de.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<le.locationSize;K++)T(le.location+K);i.bindBuffer(34962,G);for(let K=0;K<le.locationSize;K++)N(le.location+K,Ae/le.locationSize,re,we,Ae*J,Ae/le.locationSize*K*J)}}else if(ee!==void 0){const we=ee[fe];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(le.location,we);break;case 3:i.vertexAttrib3fv(le.location,we);break;case 4:i.vertexAttrib4fv(le.location,we);break;default:i.vertexAttrib1fv(le.location,we)}}}}P()}function R(){ye();for(const O in o){const ie=o[O];for(const k in ie){const j=ie[k];for(const W in j)g(j[W].object),delete j[W];delete ie[k]}delete o[O]}}function z(O){if(o[O.id]===void 0)return;const ie=o[O.id];for(const k in ie){const j=ie[k];for(const W in j)g(j[W].object),delete j[W];delete ie[k]}delete o[O.id]}function U(O){for(const ie in o){const k=o[ie];if(k[O.id]===void 0)continue;const j=k[O.id];for(const W in j)g(j[W].object),delete j[W];delete k[O.id]}}function ye(){ue(),u=!0,l!==c&&(l=c,p(l.object))}function ue(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ye,resetDefaultState:ue,dispose:R,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:T,disableUnusedAttributes:P}}function Rv(i,e,t,n){const s=n.isWebGL2;let r;function a(l){r=l}function o(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function Pv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),C=f>0,T=a||e.has("OES_texture_float"),S=C&&T,P=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:P}}function Dv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ei,o=new un,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):l();else{const b=r?0:n,C=b*4;let T=_.clippingState||null;c.value=T,T=u(g,f,C,p);for(let S=0;S!==C;++S)T[S]=t[S];_.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=c.value,g!==!0||d===null){const _=p+m*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<_)&&(d=new Float32Array(_));for(let C=0,T=p;C!==m;++C,T+=4)a.copy(h[C]).applyMatrix4(b,o),a.normal.toArray(d,T),d[T+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Iv(i){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=is:o===za&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Oa||o===za)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $_(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fv extends Mf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,gu=[.125,.215,.35,.446,.526,.582],si=20,ua=new Fv,_u=new Re;let ha=null;const ti=(1+Math.sqrt(5))/2,Ui=1/ti,xu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ti,Ui),new I(0,ti,-Ui),new I(Ui,0,ti),new I(-Ui,0,ti),new I(ti,Ui,0),new I(-ti,Ui,0)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ha=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha),e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:qs,format:jt,encoding:gi,depthBuffer:!1},s=yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nv(r)),this._blurMaterial=Ov(r,e,t)}return s}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,s){const o=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_u),u.toneMapping=Sn,u.autoClear=!1;const p=new vo({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new qt(new ps,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(_u),m=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):b===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const C=this._cubeSize;Tr(s,b*C,_>2?C:0,C,C),u.setRenderTarget(s),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===is||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Tr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(s-1)%xu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):si;d>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${si}`);const _=[];let b=0;for(let N=0;N<si;++N){const M=N/m,R=Math.exp(-M*M/2);_.push(R),N===0?b+=R:N<d&&(b+=2*R)}for(let N=0;N<_.length;N++)_[N]=_[N]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const T=this._sizeLods[s],S=3*T*(s>C-Hi?s-C+Hi:0),P=4*(this._cubeSize-T);Tr(t,S,P,3*T,2*T),c.setRenderTarget(t),c.render(h,ua)}}function Nv(i){const e=[],t=[],n=[];let s=i;const r=i-Hi+1+gu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Hi?c=gu[a-i+Hi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,b=new Float32Array(m*g*p),C=new Float32Array(d*g*p),T=new Float32Array(_*g*p);for(let P=0;P<p;P++){const N=P%3*2/3-1,M=P>2?0:-1,R=[N,M,0,N+2/3,M,0,N+2/3,M+1,0,N,M,0,N+2/3,M+1,0,N,M+1,0];b.set(R,m*g*P),C.set(f,d*g*P);const z=[P,P,P,P,P,P];T.set(z,_*g*P)}const S=new Ct;S.setAttribute("position",new hn(b,m)),S.setAttribute("uv",new hn(C,d)),S.setAttribute("faceIndex",new hn(T,_)),e.push(S),s>Hi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yu(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ov(i,e,t){const n=new Float32Array(si),s=new I(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Mu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bu(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function zv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Oa||c===za,u=c===is||c===ss;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new vu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new vu(i));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Uv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bv(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const b=p.array;m=p.version;for(let C=0,T=b.length;C<T;C+=3){const S=b[C+0],P=b[C+1],N=b[C+2];f.push(S,P,P,N,N,S)}}else{const b=g.array;m=g.version;for(let C=0,T=b.length/3-1;C<T;C+=3){const S=C+0,P=C+1,N=C+2;f.push(S,P,P,N,N,S)}}const d=new(pf(f)?yf:vf)(f,1);d.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function kv(i,e,t,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,p){i.drawElements(r,p,o,f*c),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,o,f*c,g),t.update(p,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Gv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hv(i,e){return i[0]-e[0]}function Vv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fa(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function Wv(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h,f){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let k=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var g=k;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let z=0;T===!0&&(z=1),S===!0&&(z=2),P===!0&&(z=3);let U=u.attributes.position.count*z,ye=1;U>e.maxTextureSize&&(ye=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ue=new Float32Array(U*ye*4*d),O=new xf(ue,U,ye,d);O.type=oi,O.needsUpdate=!0;const ie=z*4;for(let j=0;j<d;j++){const W=N[j],X=M[j],ee=R[j],fe=U*ye*4*j;for(let le=0;le<W.count;le++){const de=le*ie;T===!0&&(a.fromBufferAttribute(W,le),W.normalized===!0&&fa(a,W),ue[fe+de+0]=a.x,ue[fe+de+1]=a.y,ue[fe+de+2]=a.z,ue[fe+de+3]=0),S===!0&&(a.fromBufferAttribute(X,le),X.normalized===!0&&fa(a,X),ue[fe+de+4]=a.x,ue[fe+de+5]=a.y,ue[fe+de+6]=a.z,ue[fe+de+7]=0),P===!0&&(a.fromBufferAttribute(ee,le),ee.normalized===!0&&fa(a,ee),ue[fe+de+8]=a.x,ue[fe+de+9]=a.y,ue[fe+de+10]=a.z,ue[fe+de+11]=ee.itemSize===4?a.w:1)}}_={count:d,texture:O,size:new Le(U,ye)},r.set(u,_),u.addEventListener("dispose",k)}let b=0;for(let T=0;T<p.length;T++)b+=p[T];const C=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let S=0;S<m;S++)d[S]=[S,0];n[u.id]=d}for(let S=0;S<m;S++){const P=d[S];P[0]=S,P[1]=p[S]}d.sort(Vv);for(let S=0;S<8;S++)S<m&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Hv);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const P=o[S],N=P[0],M=P[1];N!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+S)!==_[N]&&u.setAttribute("morphTarget"+S,_[N]),b&&u.getAttribute("morphNormal"+S)!==b[N]&&u.setAttribute("morphNormal"+S,b[N]),s[S]=M,C+=M):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),b&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const T=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function jv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const wf=new Kt,Ef=new xf,Tf=new F_,Af=new bf,Su=[],wu=[],Eu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Zv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),St(t,n)}}function Kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),St(t,n)}}function Jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),St(t,n)}}function Qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ey(i,e){const t=this.cache;bt(t,e)||(i.uniform2iv(this.addr,e),St(t,e))}function ty(i,e){const t=this.cache;bt(t,e)||(i.uniform3iv(this.addr,e),St(t,e))}function ny(i,e){const t=this.cache;bt(t,e)||(i.uniform4iv(this.addr,e),St(t,e))}function iy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sy(i,e){const t=this.cache;bt(t,e)||(i.uniform2uiv(this.addr,e),St(t,e))}function ry(i,e){const t=this.cache;bt(t,e)||(i.uniform3uiv(this.addr,e),St(t,e))}function oy(i,e){const t=this.cache;bt(t,e)||(i.uniform4uiv(this.addr,e),St(t,e))}function ay(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||wf,s)}function ly(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tf,s)}function cy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function uy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ef,s)}function hy(i){switch(i){case 5126:return qv;case 35664:return Xv;case 35665:return Yv;case 35666:return $v;case 35674:return Zv;case 35675:return Kv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return uy}}function fy(i,e){i.uniform1fv(this.addr,e)}function dy(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function py(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function my(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function gy(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _y(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xy(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vy(i,e){i.uniform1iv(this.addr,e)}function yy(i,e){i.uniform2iv(this.addr,e)}function My(i,e){i.uniform3iv(this.addr,e)}function by(i,e){i.uniform4iv(this.addr,e)}function Sy(i,e){i.uniform1uiv(this.addr,e)}function wy(i,e){i.uniform2uiv(this.addr,e)}function Ey(i,e){i.uniform3uiv(this.addr,e)}function Ty(i,e){i.uniform4uiv(this.addr,e)}function Ay(i,e,t){const n=e.length,s=Mo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||wf,s[r])}function Cy(i,e,t){const n=e.length,s=Mo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Tf,s[r])}function Ly(i,e,t){const n=e.length,s=Mo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Af,s[r])}function Ry(i,e,t){const n=e.length,s=Mo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Ef,s[r])}function Py(i){switch(i){case 5126:return fy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return xy;case 5124:case 35670:return vy;case 35667:case 35671:return yy;case 35668:case 35672:return My;case 35669:case 35673:return by;case 5125:return Sy;case 36294:return wy;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Ry}}class Dy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hy(t.type)}}class Iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Py(t.type)}}class Fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Cu(i,e){i.seq.push(e),i.map[e.id]=e}function Ny(i,e,t){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cu(t,l===void 0?new Dy(o,i,e):new Iy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Fy(o),Cu(t,h)),t=h}}}class kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ny(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Lu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Oy=0;function zy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Uy(i){switch(i){case gi:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ru(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zy(i.getShaderSource(e),a)}else return s}function By(i,e){const t=Uy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ky(i,e){let t;switch(e){case a_:t="Linear";break;case l_:t="Reinhard";break;case c_:t="OptimizedCineon";break;case u_:t="ACESFilmic";break;case h_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function Hy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cs(i){return i!==""}function Pu(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(Wy,jy)}function jy(i,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Va(t)}const qy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(Xy,Cf).replace(qy,Yy)}function Yy(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cf(i,e,t,n)}function Cf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $y(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function Zy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ky(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Jy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case r_:e="ENVMAP_BLENDING_MIX";break;case o_:e="ENVMAP_BLENDING_ADD";break}return e}function Qy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function eM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$y(t),l=Zy(t),u=Ky(t),h=Jy(t),f=Qy(t),p=t.isWebGL2?"":Gy(t),g=Hy(r),m=s.createProgram();let d,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Cs).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(d=[Fu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[p,Fu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,By("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Va(a),a=Pu(a,t),a=Du(a,t),o=Va(o),o=Pu(o,t),o=Du(o,t),a=Iu(a),o=Iu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=b+d+a,T=b+_+o,S=Lu(s,35633,C),P=Lu(s,35632,T);if(s.attachShader(m,S),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const R=s.getProgramInfoLog(m).trim(),z=s.getShaderInfoLog(S).trim(),U=s.getShaderInfoLog(P).trim();let ye=!0,ue=!0;if(s.getProgramParameter(m,35714)===!1){ye=!1;const O=Ru(s,S,"vertex"),ie=Ru(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+O+`
`+ie)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||U==="")&&(ue=!1);ue&&(this.diagnostics={runnable:ye,programLog:R,vertexShader:{log:z,prefix:d},fragmentShader:{log:U,prefix:_}})}s.deleteShader(S),s.deleteShader(P);let N;this.getUniforms=function(){return N===void 0&&(N=new kr(s,m)),N};let M;return this.getAttributes=function(){return M===void 0&&(M=Vy(s,m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=P,this}let tM=0;class nM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new iM(e);t.set(e,n)}return t.get(e)}}class iM{constructor(e){this.id=tM++,this.code=e,this.usedTimes=0}}function sM(i,e,t,n,s,r,a){const o=new bl,c=new nM,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,R,z,U,ye){const ue=U.fog,O=ye.geometry,ie=M.isMeshStandardMaterial?U.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||ie),j=k&&k.mapping===go?k.image.height:null,W=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=X!==void 0?X.length:0;let fe=0;O.morphAttributes.position!==void 0&&(fe=1),O.morphAttributes.normal!==void 0&&(fe=2),O.morphAttributes.color!==void 0&&(fe=3);let le,de,we,Ae;if(W){const Ee=an[W];le=Ee.vertexShader,de=Ee.fragmentShader}else le=M.vertexShader,de=M.fragmentShader,c.update(M),we=c.getVertexShaderID(M),Ae=c.getFragmentShaderID(M);const Y=i.getRenderTarget(),G=M.alphaTest>0,re=M.clearcoat>0,J=M.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:M.type,vertexShader:le,fragmentShader:de,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ye.isInstancedMesh===!0,instancingColor:ye.isInstancedMesh===!0&&ye.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?i.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:gi,map:!!M.map,matcap:!!M.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:j,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===R_,tangentSpaceNormalMap:M.normalMapType===fs,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ze,clearcoat:re,clearcoatMap:re&&!!M.clearcoatMap,clearcoatRoughnessMap:re&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!M.clearcoatNormalMap,iridescence:J,iridescenceMap:J&&!!M.iridescenceMap,iridescenceThicknessMap:J&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Yi,alphaMap:!!M.alphaMap,alphaTest:G,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ue,useFog:M.fog===!0,fogExp2:ue&&ue.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ye.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:Sn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ns,flipSided:M.side===$t,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)R.push(z),R.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(_(R,M),b(R,M),R.push(i.outputEncoding)),R.push(M.customProgramCacheKey),R.join()}function _(M,R){M.push(R.precision),M.push(R.outputEncoding),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.combine),M.push(R.vertexUvs),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function b(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.lightMap&&o.enable(7),R.aoMap&&o.enable(8),R.emissiveMap&&o.enable(9),R.bumpMap&&o.enable(10),R.normalMap&&o.enable(11),R.objectSpaceNormalMap&&o.enable(12),R.tangentSpaceNormalMap&&o.enable(13),R.clearcoat&&o.enable(14),R.clearcoatMap&&o.enable(15),R.clearcoatRoughnessMap&&o.enable(16),R.clearcoatNormalMap&&o.enable(17),R.iridescence&&o.enable(18),R.iridescenceMap&&o.enable(19),R.iridescenceThicknessMap&&o.enable(20),R.displacementMap&&o.enable(21),R.specularMap&&o.enable(22),R.roughnessMap&&o.enable(23),R.metalnessMap&&o.enable(24),R.gradientMap&&o.enable(25),R.alphaMap&&o.enable(26),R.alphaTest&&o.enable(27),R.vertexColors&&o.enable(28),R.vertexAlphas&&o.enable(29),R.vertexUvs&&o.enable(30),R.vertexTangents&&o.enable(31),R.uvsVertexOnly&&o.enable(32),R.fog&&o.enable(33),M.push(o.mask),o.disableAll(),R.useFog&&o.enable(0),R.flatShading&&o.enable(1),R.logarithmicDepthBuffer&&o.enable(2),R.skinning&&o.enable(3),R.morphTargets&&o.enable(4),R.morphNormals&&o.enable(5),R.morphColors&&o.enable(6),R.premultipliedAlpha&&o.enable(7),R.shadowMapEnabled&&o.enable(8),R.physicallyCorrectLights&&o.enable(9),R.doubleSided&&o.enable(10),R.flipSided&&o.enable(11),R.useDepthPacking&&o.enable(12),R.dithering&&o.enable(13),R.specularIntensityMap&&o.enable(14),R.specularColorMap&&o.enable(15),R.transmission&&o.enable(16),R.transmissionMap&&o.enable(17),R.thicknessMap&&o.enable(18),R.sheen&&o.enable(19),R.sheenColorMap&&o.enable(20),R.sheenRoughnessMap&&o.enable(21),R.decodeVideoTexture&&o.enable(22),R.opaque&&o.enable(23),M.push(o.mask)}function C(M){const R=g[M.type];let z;if(R){const U=an[R];z=j_.clone(U.uniforms)}else z=M.uniforms;return z}function T(M,R){let z;for(let U=0,ye=l.length;U<ye;U++){const ue=l[U];if(ue.cacheKey===R){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new eM(i,R,M,r),l.push(z)),z}function S(M){if(--M.usedTimes===0){const R=l.indexOf(M);l[R]=l[l.length-1],l.pop(),M.destroy()}}function P(M){c.remove(M)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:T,releaseProgram:S,releaseShaderCache:P,programs:l,dispose:N}}function rM(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function oM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,m,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),e++,_}function o(h,f,p,g,m,d){const _=a(h,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(h,f,p,g,m,d){const _=a(h,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function l(h,f){t.length>1&&t.sort(h||oM),n.length>1&&n.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function aM(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new Ou,i.set(n,[r])):s>=i.get(n).length?(r=new Ou,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function lM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function cM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uM=0;function hM(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function fM(i,e){const t=new lM,n=cM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,a=new nt,o=new nt;function c(u,h){let f=0,p=0,g=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let m=0,d=0,_=0,b=0,C=0,T=0,S=0,P=0;u.sort(hM);const N=h!==!0?Math.PI:1;for(let R=0,z=u.length;R<z;R++){const U=u[R],ye=U.color,ue=U.intensity,O=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=ye.r*ue*N,p+=ye.g*ue*N,g+=ye.b*ue*N;else if(U.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(U.sh.coefficients[k],ue);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*N),U.castShadow){const j=U.shadow,W=n.get(U);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.directionalShadow[m]=W,s.directionalShadowMap[m]=ie,s.directionalShadowMatrix[m]=U.shadow.matrix,T++}s.directional[m]=k,m++}else if(U.isSpotLight){const k=t.get(U);if(k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(ye).multiplyScalar(ue*N),k.distance=O,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,U.castShadow){const j=U.shadow,W=n.get(U);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.spotShadow[_]=W,s.spotShadowMap[_]=ie,s.spotShadowMatrix[_]=U.shadow.matrix,P++}s.spot[_]=k,_++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(ye).multiplyScalar(ue),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),s.rectArea[b]=k,b++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*N),k.distance=U.distance,k.decay=U.decay,U.castShadow){const j=U.shadow,W=n.get(U);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,s.pointShadow[d]=W,s.pointShadowMap[d]=ie,s.pointShadowMatrix[d]=U.shadow.matrix,S++}s.point[d]=k,d++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(ue*N),k.groundColor.copy(U.groundColor).multiplyScalar(ue*N),s.hemi[C]=k,C++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const M=s.hash;(M.directionalLength!==m||M.pointLength!==d||M.spotLength!==_||M.rectAreaLength!==b||M.hemiLength!==C||M.numDirectionalShadows!==T||M.numPointShadows!==S||M.numSpotShadows!==P)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=b,s.point.length=d,s.hemi.length=C,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=S,s.spotShadowMatrix.length=P,M.directionalLength=m,M.pointLength=d,M.spotLength=_,M.rectAreaLength=b,M.hemiLength=C,M.numDirectionalShadows=T,M.numPointShadows=S,M.numSpotShadows=P,s.version=uM++)}function l(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let b=0,C=u.length;b<C;b++){const T=u[b];if(T.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(T.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const S=s.rectArea[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),o.identity(),a.copy(T.matrixWorld),a.premultiply(_),o.extractRotation(a),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const S=s.point[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),p++}else if(T.isHemisphereLight){const S=s.hemi[d];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:s}}function zu(i,e){const t=new fM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function dM(i,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new zu(i,e),t.set(r,[o])):a>=t.get(r).length?(o=new zu(i,e),t.get(r).push(o)):o=t.get(r)[a],o}function s(){t=new WeakMap}return{get:n,dispose:s}}class Lf extends st{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rf extends st{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
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
}`;function gM(i,e,t){let n=new Sl;const s=new Le,r=new Le,a=new ut,o=new Lf({depthPacking:L_}),c=new Rf,l={},u=t.maxTextureSize,h={0:$t,1:js,2:ns},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new qt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf,this.render=function(T,S,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const N=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let U=0,ye=T.length;U<ye;U++){const ue=T[U],O=ue.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ie=O.getFrameExtents();if(s.multiply(ie),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,O.mapSize.y=r.y)),O.map===null&&!O.isPointLightShadow&&this.type===As&&(O.map=new jn(s.x,s.y),O.map.texture.name=ue.name+".shadowMap",O.mapPass=new jn(s.x,s.y),O.camera.updateProjectionMatrix()),O.map===null){const j={minFilter:Et,magFilter:Et,format:jt};O.map=new jn(s.x,s.y,j),O.map.texture.name=ue.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const k=O.getViewportCount();for(let j=0;j<k;j++){const W=O.getViewport(j);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(a),O.updateMatrices(ue,j),n=O.getFrustum(),C(S,P,O.camera,ue,this.type)}!O.isPointLightShadow&&this.type===As&&_(O,P),O.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(N,M,R)};function _(T,S){const P=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,P,f,m,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,P,p,m,null)}function b(T,S,P,N,M,R){let z=null;const U=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0?z=U:z=P.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ye=z.uuid,ue=S.uuid;let O=l[ye];O===void 0&&(O={},l[ye]=O);let ie=O[ue];ie===void 0&&(ie=z.clone(),O[ue]=ie),z=ie}return z.visible=S.visible,z.wireframe=S.wireframe,R===As?z.side=S.shadowSide!==null?S.shadowSide:S.side:z.side=S.shadowSide!==null?S.shadowSide:h[S.side],z.alphaMap=S.alphaMap,z.alphaTest=S.alphaTest,z.clipShadows=S.clipShadows,z.clippingPlanes=S.clippingPlanes,z.clipIntersection=S.clipIntersection,z.displacementMap=S.displacementMap,z.displacementScale=S.displacementScale,z.displacementBias=S.displacementBias,z.wireframeLinewidth=S.wireframeLinewidth,z.linewidth=S.linewidth,P.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(P.matrixWorld),z.nearDistance=N,z.farDistance=M),z}function C(T,S,P,N,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===As)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=e.update(T),ye=T.material;if(Array.isArray(ye)){const ue=U.groups;for(let O=0,ie=ue.length;O<ie;O++){const k=ue[O],j=ye[k.materialIndex];if(j&&j.visible){const W=b(T,j,N,P.near,P.far,M);i.renderBufferDirect(P,null,U,W,T,k)}}}else if(ye.visible){const ue=b(T,ye,N,P.near,P.far,M);i.renderBufferDirect(P,null,U,ue,T,null)}}const z=T.children;for(let U=0,ye=z.length;U<ye;U++)C(z[U],S,P,N,M)}}function _M(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const xe=new ut;let he=null;const Te=new ut(0,0,0,0);return{setMask:function(be){he!==be&&!L&&(i.colorMask(be,be,be,be),he=be)},setLocked:function(be){L=be},setClear:function(be,Ce,ve,Ie,je){je===!0&&(be*=Ie,Ce*=Ie,ve*=Ie),xe.set(be,Ce,ve,Ie),Te.equals(xe)===!1&&(i.clearColor(be,Ce,ve,Ie),Te.copy(xe))},reset:function(){L=!1,he=null,Te.set(-1,0,0,0)}}}function r(){let L=!1,xe=null,he=null,Te=null;return{setTest:function(be){be?Ae(2929):Y(2929)},setMask:function(be){xe!==be&&!L&&(i.depthMask(be),xe=be)},setFunc:function(be){if(he!==be){if(be)switch(be){case Jg:i.depthFunc(512);break;case Qg:i.depthFunc(519);break;case e_:i.depthFunc(513);break;case Na:i.depthFunc(515);break;case t_:i.depthFunc(514);break;case n_:i.depthFunc(518);break;case i_:i.depthFunc(516);break;case s_:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);he=be}},setLocked:function(be){L=be},setClear:function(be){Te!==be&&(i.clearDepth(be),Te=be)},reset:function(){L=!1,xe=null,he=null,Te=null}}}function a(){let L=!1,xe=null,he=null,Te=null,be=null,Ce=null,ve=null,Ie=null,je=null;return{setTest:function(qe){L||(qe?Ae(2960):Y(2960))},setMask:function(qe){xe!==qe&&!L&&(i.stencilMask(qe),xe=qe)},setFunc:function(qe,_t,Jt){(he!==qe||Te!==_t||be!==Jt)&&(i.stencilFunc(qe,_t,Jt),he=qe,Te=_t,be=Jt)},setOp:function(qe,_t,Jt){(Ce!==qe||ve!==_t||Ie!==Jt)&&(i.stencilOp(qe,_t,Jt),Ce=qe,ve=_t,Ie=Jt)},setLocked:function(qe){L=qe},setClear:function(qe){je!==qe&&(i.clearStencil(qe),je=qe)},reset:function(){L=!1,xe=null,he=null,Te=null,be=null,Ce=null,ve=null,Ie=null,je=null}}}const o=new s,c=new r,l=new a;let u={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,_=null,b=null,C=null,T=null,S=null,P=null,N=!1,M=null,R=null,z=null,U=null,ye=null;const ue=i.getParameter(35661);let O=!1,ie=0;const k=i.getParameter(7938);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=ie>=2);let j=null,W={};const X=i.getParameter(3088),ee=i.getParameter(2978),fe=new ut().fromArray(X),le=new ut().fromArray(ee);function de(L,xe,he){const Te=new Uint8Array(4),be=i.createTexture();i.bindTexture(L,be),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Ce=0;Ce<he;Ce++)i.texImage2D(xe+Ce,0,6408,1,1,0,6408,5121,Te);return be}const we={};we[3553]=de(3553,3553,1),we[34067]=de(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ae(2929),c.setFunc(Na),D(!1),H(Ac),Ae(2884),w(Wn);function Ae(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Y(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function G(L,xe){return h[L]!==xe?(i.bindFramebuffer(L,xe),h[L]=xe,n&&(L===36009&&(h[36160]=xe),L===36160&&(h[36009]=xe)),!0):!1}function re(L,xe){let he=p,Te=!1;if(L)if(he=f.get(xe),he===void 0&&(he=[],f.set(xe,he)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(he.length!==be.length||he[0]!==36064){for(let Ce=0,ve=be.length;Ce<ve;Ce++)he[Ce]=36064+Ce;he.length=be.length,Te=!0}}else he[0]!==36064&&(he[0]=36064,Te=!0);else he[0]!==1029&&(he[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function J(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const K={[ki]:32774,[Gg]:32778,[Hg]:32779};if(n)K[Pc]=32775,K[Dc]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(K[Pc]=L.MIN_EXT,K[Dc]=L.MAX_EXT)}const Ee={[Vg]:0,[Wg]:1,[jg]:768,[uf]:770,[Kg]:776,[$g]:774,[Xg]:772,[qg]:769,[hf]:771,[Zg]:775,[Yg]:773};function w(L,xe,he,Te,be,Ce,ve,Ie){if(L===Wn){m===!0&&(Y(3042),m=!1);return}if(m===!1&&(Ae(3042),m=!0),L!==kg){if(L!==d||Ie!==N){if((_!==ki||T!==ki)&&(i.blendEquation(32774),_=ki,T=ki),Ie)switch(L){case Yi:i.blendFuncSeparate(1,771,1,771);break;case Cc:i.blendFunc(1,1);break;case Lc:i.blendFuncSeparate(0,769,0,1);break;case Rc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:i.blendFuncSeparate(770,771,1,771);break;case Cc:i.blendFunc(770,1);break;case Lc:i.blendFuncSeparate(0,769,0,1);break;case Rc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,C=null,S=null,P=null,d=L,N=Ie}return}be=be||xe,Ce=Ce||he,ve=ve||Te,(xe!==_||be!==T)&&(i.blendEquationSeparate(K[xe],K[be]),_=xe,T=be),(he!==b||Te!==C||Ce!==S||ve!==P)&&(i.blendFuncSeparate(Ee[he],Ee[Te],Ee[Ce],Ee[ve]),b=he,C=Te,S=Ce,P=ve),d=L,N=null}function A(L,xe){L.side===ns?Y(2884):Ae(2884);let he=L.side===$t;xe&&(he=!he),D(he),L.blending===Yi&&L.transparent===!1?w(Wn):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const Te=L.stencilWrite;l.setTest(Te),Te&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(32926):Y(32926)}function D(L){M!==L&&(L?i.frontFace(2304):i.frontFace(2305),M=L)}function H(L){L!==Og?(Ae(2884),L!==R&&(L===Ac?i.cullFace(1029):L===zg?i.cullFace(1028):i.cullFace(1032))):Y(2884),R=L}function Z(L){L!==z&&(O&&i.lineWidth(L),z=L)}function se(L,xe,he){L?(Ae(32823),(U!==xe||ye!==he)&&(i.polygonOffset(xe,he),U=xe,ye=he)):Y(32823)}function pe(L){L?Ae(3089):Y(3089)}function te(L){L===void 0&&(L=33984+ue-1),j!==L&&(i.activeTexture(L),j=L)}function me(L,xe){j===null&&te();let he=W[j];he===void 0&&(he={type:void 0,texture:void 0},W[j]=he),(he.type!==L||he.texture!==xe)&&(i.bindTexture(L,xe||we[L]),he.type=L,he.texture=xe)}function ae(){const L=W[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function y(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(L){fe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function ge(L){le.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),le.copy(L))}function _e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,W={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,_=null,b=null,C=null,T=null,S=null,P=null,N=!1,M=null,R=null,z=null,U=null,ye=null,fe.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ae,disable:Y,bindFramebuffer:G,drawBuffers:re,useProgram:J,setBlending:w,setMaterial:A,setFlipSided:D,setCullFace:H,setLineWidth:Z,setPolygonOffset:se,setScissorTest:pe,activeTexture:te,bindTexture:me,unbindTexture:ae,compressedTexImage2D:v,texImage2D:Me,texImage3D:y,texStorage2D:Q,texStorage3D:ce,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:q,scissor:ne,viewport:ge,reset:_e}}function xM(i,e,t,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(v,x){return _?new OffscreenCanvas(v,x):Yr("canvas")}function C(v,x,F,q){let Q=1;if((v.width>q||v.height>q)&&(Q=q/Math.max(v.width,v.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const ce=x?Ha:Math.floor,Me=ce(Q*v.width),y=ce(Q*v.height);m===void 0&&(m=b(Me,y));const ne=F?b(Me,y):m;return ne.width=Me,ne.height=y,ne.getContext("2d").drawImage(v,0,0,Me,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Me+"x"+y+")."),ne}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function T(v){return su(v.width)&&su(v.height)}function S(v){return o?!1:v.wrapS!==Ht||v.wrapT!==Ht||v.minFilter!==Et&&v.minFilter!==Ft}function P(v,x){return v.generateMipmaps&&x&&v.minFilter!==Et&&v.minFilter!==Ft}function N(v){i.generateMipmap(v)}function M(v,x,F,q,Q=!1){if(o===!1)return x;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ce=x;return x===6403&&(F===5126&&(ce=33326),F===5131&&(ce=33325),F===5121&&(ce=33321)),x===33319&&(F===5126&&(ce=33328),F===5131&&(ce=33327),F===5121&&(ce=33323)),x===6408&&(F===5126&&(ce=34836),F===5131&&(ce=34842),F===5121&&(ce=q===Ze&&Q===!1?35907:32856),F===32819&&(ce=32854),F===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function R(v,x,F){return P(v,F)===!0||v.isFramebufferTexture&&v.minFilter!==Et&&v.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function z(v){return v===Et||v===Ic||v===Fc?9728:9729}function U(v){const x=v.target;x.removeEventListener("dispose",U),ue(x),x.isVideoTexture&&g.delete(x)}function ye(v){const x=v.target;x.removeEventListener("dispose",ye),ie(x)}function ue(v){const x=n.get(v);if(x.__webglInit===void 0)return;const F=v.source,q=d.get(F);if(q){const Q=q[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(v),Object.keys(q).length===0&&d.delete(F)}n.remove(v)}function O(v){const x=n.get(v);i.deleteTexture(x.__webglTexture);const F=v.source,q=d.get(F);delete q[x.__cacheKey],a.memory.textures--}function ie(v){const x=v.texture,F=n.get(v),q=n.get(x);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(F.__webglFramebuffer[Q]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let Q=0,ce=x.length;Q<ce;Q++){const Me=n.get(x[Q]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(x[Q])}n.remove(x),n.remove(v)}let k=0;function j(){k=0}function W(){const v=k;return v>=c&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+c),k+=1,v}function X(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function ee(v,x){const F=n.get(v);if(v.isVideoTexture&&me(v),v.isRenderTargetTexture===!1&&v.version>0&&F.__version!==v.version){const q=v.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,F.__webglTexture)}function fe(v,x){const F=n.get(v);if(v.version>0&&F.__version!==v.version){re(F,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,F.__webglTexture)}function le(v,x){const F=n.get(v);if(v.version>0&&F.__version!==v.version){re(F,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,F.__webglTexture)}function de(v,x){const F=n.get(v);if(v.version>0&&F.__version!==v.version){J(F,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,F.__webglTexture)}const we={[Ua]:10497,[Ht]:33071,[Ba]:33648},Ae={[Et]:9728,[Ic]:9984,[Fc]:9986,[Ft]:9729,[f_]:9985,[_o]:9987};function Y(v,x,F){if(F?(i.texParameteri(v,10242,we[x.wrapS]),i.texParameteri(v,10243,we[x.wrapT]),(v===32879||v===35866)&&i.texParameteri(v,32882,we[x.wrapR]),i.texParameteri(v,10240,Ae[x.magFilter]),i.texParameteri(v,10241,Ae[x.minFilter])):(i.texParameteri(v,10242,33071),i.texParameteri(v,10243,33071),(v===32879||v===35866)&&i.texParameteri(v,32882,33071),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,10240,z(x.magFilter)),i.texParameteri(v,10241,z(x.minFilter)),x.minFilter!==Et&&x.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(x.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===qs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(v,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function G(v,x){let F=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",U));const q=x.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const ce=X(x);if(ce!==v.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[ce].usedTimes++;const Me=Q[v.__cacheKey];Me!==void 0&&(Q[v.__cacheKey].usedTimes--,Me.usedTimes===0&&O(x)),v.__cacheKey=ce,v.__webglTexture=Q[ce].texture}return F}function re(v,x,F){let q=3553;x.isDataArrayTexture&&(q=35866),x.isData3DTexture&&(q=32879);const Q=G(v,x),ce=x.source;if(t.activeTexture(33984+F),t.bindTexture(q,v.__webglTexture),ce.version!==ce.__currentVersion||Q===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const Me=S(x)&&T(x.image)===!1;let y=C(x.image,Me,!1,u);y=ae(x,y);const ne=T(y)||o,ge=r.convert(x.format,x.encoding);let _e=r.convert(x.type),L=M(x.internalFormat,ge,_e,x.encoding,x.isVideoTexture);Y(q,x,ne);let xe;const he=x.mipmaps,Te=o&&x.isVideoTexture!==!0,be=ce.__currentVersion===void 0||Q===!0,Ce=R(x,y,ne);if(x.isDepthTexture)L=6402,o?x.type===oi?L=36012:x.type===ri?L=33190:x.type===$i?L=35056:L=33189:x.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===fi&&L===6402&&x.type!==df&&x.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ri,_e=r.convert(x.type)),x.format===rs&&L===6402&&(L=34041,x.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=$i,_e=r.convert(x.type))),be&&(Te?t.texStorage2D(3553,1,L,y.width,y.height):t.texImage2D(3553,0,L,y.width,y.height,0,ge,_e,null));else if(x.isDataTexture)if(he.length>0&&ne){Te&&be&&t.texStorage2D(3553,Ce,L,he[0].width,he[0].height);for(let ve=0,Ie=he.length;ve<Ie;ve++)xe=he[ve],Te?t.texSubImage2D(3553,ve,0,0,xe.width,xe.height,ge,_e,xe.data):t.texImage2D(3553,ve,L,xe.width,xe.height,0,ge,_e,xe.data);x.generateMipmaps=!1}else Te?(be&&t.texStorage2D(3553,Ce,L,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,ge,_e,y.data)):t.texImage2D(3553,0,L,y.width,y.height,0,ge,_e,y.data);else if(x.isCompressedTexture){Te&&be&&t.texStorage2D(3553,Ce,L,he[0].width,he[0].height);for(let ve=0,Ie=he.length;ve<Ie;ve++)xe=he[ve],x.format!==jt?ge!==null?Te?t.compressedTexSubImage2D(3553,ve,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(3553,ve,L,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(3553,ve,0,0,xe.width,xe.height,ge,_e,xe.data):t.texImage2D(3553,ve,L,xe.width,xe.height,0,ge,_e,xe.data)}else if(x.isDataArrayTexture)Te?(be&&t.texStorage3D(35866,Ce,L,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ge,_e,y.data)):t.texImage3D(35866,0,L,y.width,y.height,y.depth,0,ge,_e,y.data);else if(x.isData3DTexture)Te?(be&&t.texStorage3D(32879,Ce,L,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ge,_e,y.data)):t.texImage3D(32879,0,L,y.width,y.height,y.depth,0,ge,_e,y.data);else if(x.isFramebufferTexture){if(be)if(Te)t.texStorage2D(3553,Ce,L,y.width,y.height);else{let ve=y.width,Ie=y.height;for(let je=0;je<Ce;je++)t.texImage2D(3553,je,L,ve,Ie,0,ge,_e,null),ve>>=1,Ie>>=1}}else if(he.length>0&&ne){Te&&be&&t.texStorage2D(3553,Ce,L,he[0].width,he[0].height);for(let ve=0,Ie=he.length;ve<Ie;ve++)xe=he[ve],Te?t.texSubImage2D(3553,ve,0,0,ge,_e,xe):t.texImage2D(3553,ve,L,ge,_e,xe);x.generateMipmaps=!1}else Te?(be&&t.texStorage2D(3553,Ce,L,y.width,y.height),t.texSubImage2D(3553,0,0,0,ge,_e,y)):t.texImage2D(3553,0,L,ge,_e,y);P(x,ne)&&N(q),ce.__currentVersion=ce.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function J(v,x,F){if(x.image.length!==6)return;const q=G(v,x),Q=x.source;if(t.activeTexture(33984+F),t.bindTexture(34067,v.__webglTexture),Q.version!==Q.__currentVersion||q===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,y=[];for(let ve=0;ve<6;ve++)!ce&&!Me?y[ve]=C(x.image[ve],!1,!0,l):y[ve]=Me?x.image[ve].image:x.image[ve],y[ve]=ae(x,y[ve]);const ne=y[0],ge=T(ne)||o,_e=r.convert(x.format,x.encoding),L=r.convert(x.type),xe=M(x.internalFormat,_e,L,x.encoding),he=o&&x.isVideoTexture!==!0,Te=Q.__currentVersion===void 0||q===!0;let be=R(x,ne,ge);Y(34067,x,ge);let Ce;if(ce){he&&Te&&t.texStorage2D(34067,be,xe,ne.width,ne.height);for(let ve=0;ve<6;ve++){Ce=y[ve].mipmaps;for(let Ie=0;Ie<Ce.length;Ie++){const je=Ce[Ie];x.format!==jt?_e!==null?he?t.compressedTexSubImage2D(34069+ve,Ie,0,0,je.width,je.height,_e,je.data):t.compressedTexImage2D(34069+ve,Ie,xe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+ve,Ie,0,0,je.width,je.height,_e,L,je.data):t.texImage2D(34069+ve,Ie,xe,je.width,je.height,0,_e,L,je.data)}}}else{Ce=x.mipmaps,he&&Te&&(Ce.length>0&&be++,t.texStorage2D(34067,be,xe,y[0].width,y[0].height));for(let ve=0;ve<6;ve++)if(Me){he?t.texSubImage2D(34069+ve,0,0,0,y[ve].width,y[ve].height,_e,L,y[ve].data):t.texImage2D(34069+ve,0,xe,y[ve].width,y[ve].height,0,_e,L,y[ve].data);for(let Ie=0;Ie<Ce.length;Ie++){const qe=Ce[Ie].image[ve].image;he?t.texSubImage2D(34069+ve,Ie+1,0,0,qe.width,qe.height,_e,L,qe.data):t.texImage2D(34069+ve,Ie+1,xe,qe.width,qe.height,0,_e,L,qe.data)}}else{he?t.texSubImage2D(34069+ve,0,0,0,_e,L,y[ve]):t.texImage2D(34069+ve,0,xe,_e,L,y[ve]);for(let Ie=0;Ie<Ce.length;Ie++){const je=Ce[Ie];he?t.texSubImage2D(34069+ve,Ie+1,0,0,_e,L,je.image[ve]):t.texImage2D(34069+ve,Ie+1,xe,_e,L,je.image[ve])}}}P(x,ge)&&N(34067),Q.__currentVersion=Q.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function K(v,x,F,q,Q){const ce=r.convert(F.format,F.encoding),Me=r.convert(F.type),y=M(F.internalFormat,ce,Me,F.encoding);n.get(x).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,y,x.width,x.height,x.depth,0,ce,Me,null):t.texImage2D(Q,0,y,x.width,x.height,0,ce,Me,null)),t.bindFramebuffer(36160,v),te(x)?f.framebufferTexture2DMultisampleEXT(36160,q,Q,n.get(F).__webglTexture,0,pe(x)):i.framebufferTexture2D(36160,q,Q,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(v,x,F){if(i.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let q=33189;if(F||te(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===oi?q=36012:Q.type===ri&&(q=33190));const ce=pe(x);te(x)?f.renderbufferStorageMultisampleEXT(36161,ce,q,x.width,x.height):i.renderbufferStorageMultisample(36161,ce,q,x.width,x.height)}else i.renderbufferStorage(36161,q,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const q=pe(x);F&&te(x)===!1?i.renderbufferStorageMultisample(36161,q,35056,x.width,x.height):te(x)?f.renderbufferStorageMultisampleEXT(36161,q,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,v)}else{const q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<q.length;Q++){const ce=q[Q],Me=r.convert(ce.format,ce.encoding),y=r.convert(ce.type),ne=M(ce.internalFormat,Me,y,ce.encoding),ge=pe(x);F&&te(x)===!1?i.renderbufferStorageMultisample(36161,ge,ne,x.width,x.height):te(x)?f.renderbufferStorageMultisampleEXT(36161,ge,ne,x.width,x.height):i.renderbufferStorage(36161,ne,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function w(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,Q=pe(x);if(x.depthTexture.format===fi)te(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,Q):i.framebufferTexture2D(36160,36096,3553,q,0);else if(x.depthTexture.format===rs)te(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,Q):i.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function A(v){const x=n.get(v),F=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");w(x.__webglFramebuffer,v)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[q],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function D(v,x,F){const q=n.get(v);x!==void 0&&K(q.__webglFramebuffer,v,v.texture,36064,3553),F!==void 0&&A(v)}function H(v){const x=v.texture,F=n.get(v),q=n.get(x);v.addEventListener("dispose",ye),v.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++);const Q=v.isWebGLCubeRenderTarget===!0,ce=v.isWebGLMultipleRenderTargets===!0,Me=T(v)||o;if(Q){F.__webglFramebuffer=[];for(let y=0;y<6;y++)F.__webglFramebuffer[y]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),ce)if(s.drawBuffers){const y=v.texture;for(let ne=0,ge=y.length;ne<ge;ne++){const _e=n.get(y[ne]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&te(v)===!1){const y=ce?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let ne=0;ne<y.length;ne++){const ge=y[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[ne]);const _e=r.convert(ge.format,ge.encoding),L=r.convert(ge.type),xe=M(ge.internalFormat,_e,L,ge.encoding),he=pe(v);i.renderbufferStorageMultisample(36161,he,xe,v.width,v.height),i.framebufferRenderbuffer(36160,36064+ne,36161,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(36161,null),v.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,q.__webglTexture),Y(34067,x,Me);for(let y=0;y<6;y++)K(F.__webglFramebuffer[y],v,x,36064,34069+y);P(x,Me)&&N(34067),t.unbindTexture()}else if(ce){const y=v.texture;for(let ne=0,ge=y.length;ne<ge;ne++){const _e=y[ne],L=n.get(_e);t.bindTexture(3553,L.__webglTexture),Y(3553,_e,Me),K(F.__webglFramebuffer,v,_e,36064+ne,3553),P(_e,Me)&&N(3553)}t.unbindTexture()}else{let y=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?y=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,q.__webglTexture),Y(y,x,Me),K(F.__webglFramebuffer,v,x,36064,y),P(x,Me)&&N(y),t.unbindTexture()}v.depthBuffer&&A(v)}function Z(v){const x=T(v)||o,F=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0,Q=F.length;q<Q;q++){const ce=F[q];if(P(ce,x)){const Me=v.isWebGLCubeRenderTarget?34067:3553,y=n.get(ce).__webglTexture;t.bindTexture(Me,y),N(Me),t.unbindTexture()}}}function se(v){if(o&&v.samples>0&&te(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],F=v.width,q=v.height;let Q=16384;const ce=[],Me=v.stencilBuffer?33306:36096,y=n.get(v),ne=v.isWebGLMultipleRenderTargets===!0;if(ne)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){ce.push(36064+ge),v.depthBuffer&&ce.push(Me);const _e=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(_e===!1&&(v.depthBuffer&&(Q|=256),v.stencilBuffer&&(Q|=1024)),ne&&i.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ge]),_e===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),ne){const L=n.get(x[ge]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,L,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,Q,9728),p&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,y.__webglColorRenderbuffer[ge]);const _e=n.get(x[ge]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,_e,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function pe(v){return Math.min(h,v.samples)}function te(v){const x=n.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(v){const x=a.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function ae(v,x){const F=v.encoding,q=v.format,Q=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===ka||F!==gi&&(F===Ze?o===!1?e.has("EXT_sRGB")===!0&&q===jt?(v.format=ka,v.minFilter=Ft,v.generateMipmaps=!1):x=gf.sRGBToLinear(x):(q!==jt||Q!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),x}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=fe,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=D,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=K,this.useMultisampledRTT=te}function vM(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===mi)return 5121;if(r===g_)return 32819;if(r===__)return 32820;if(r===d_)return 5120;if(r===p_)return 5122;if(r===df)return 5123;if(r===m_)return 5124;if(r===ri)return 5125;if(r===oi)return 5126;if(r===qs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===x_)return 6406;if(r===jt)return 6408;if(r===y_)return 6409;if(r===M_)return 6410;if(r===fi)return 6402;if(r===rs)return 34041;if(r===b_)return 6403;if(r===v_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ka)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===S_)return 36244;if(r===w_)return 33319;if(r===E_)return 33320;if(r===T_)return 36249;if(r===zo||r===Uo||r===Bo||r===ko)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nc||r===Oc||r===zc||r===Uc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===A_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bc||r===kc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Bc)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===kc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gc||r===Hc||r===Vc||r===Wc||r===jc||r===qc||r===Xc||r===Yc||r===$c||r===Zc||r===Kc||r===Jc||r===Qc||r===eu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Gc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$c)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eu)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===tu)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===$i?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class yM extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(s=t.getPose(e.targetRaySpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MM))),l&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(l.joints[m.jointName]===void 0){const b=new kn;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[m.jointName]=b,l.add(b)}const _=l.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}}class bM extends Kt{constructor(e,t,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:fi,u!==fi&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fi&&(n=ri),n===void 0&&u===rs&&(n=$i),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=c!==void 0?c:Et,this.flipY=!1,this.generateMipmaps=!1}}class SM extends xi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=null,l=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],b=new Map,C=new Tt;C.layers.enable(1),C.viewport=new ut;const T=new Tt;T.layers.enable(2),T.viewport=new ut;const S=[C,T],P=new yM;P.layers.enable(1),P.layers.enable(2);let N=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new pa,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new pa,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new pa,_[X]=ee),ee.getHandSpace()};function R(X){const ee=b.get(X.inputSource);ee!==void 0&&ee.dispatchEvent({type:X.type,data:X.inputSource})}function z(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",U),b.forEach(function(X,ee){X!==void 0&&X.disconnect(ee)}),b.clear(),N=null,M=null,e.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",z),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),d=new jn(f.framebufferWidth,f.framebufferHeight,{format:jt,type:mi,encoding:e.outputEncoding})}else{let ee=null,fe=null,le=null;g.depth&&(le=g.stencil?35056:33190,ee=g.stencil?rs:fi,fe=g.stencil?$i:ri);const de={colorFormat:e.outputEncoding===Ze?35907:32856,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(de),s.updateRenderState({layers:[h]}),d=new jn(h.textureWidth,h.textureHeight,{format:jt,type:mi,depthTexture:new bM(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await s.requestReferenceSpace(o),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(X){const ee=s.inputSources;for(let fe=0;fe<ee.length;fe++){const le=ee[fe].handedness==="right"?1:0;b.set(ee[fe],_[le])}for(let fe=0;fe<X.removed.length;fe++){const le=X.removed[fe],de=b.get(le);de&&(de.dispatchEvent({type:"disconnected",data:le}),b.delete(le))}for(let fe=0;fe<X.added.length;fe++){const le=X.added[fe],de=b.get(le);de&&de.dispatchEvent({type:"connected",data:le})}}const ye=new I,ue=new I;function O(X,ee,fe){ye.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(fe.matrixWorld);const le=ye.distanceTo(ue),de=ee.projectionMatrix.elements,we=fe.projectionMatrix.elements,Ae=de[14]/(de[10]-1),Y=de[14]/(de[10]+1),G=(de[9]+1)/de[5],re=(de[9]-1)/de[5],J=(de[8]-1)/de[0],K=(we[8]+1)/we[0],Ee=Ae*J,w=Ae*K,A=le/(-J+K),D=A*-J;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(D),X.translateZ(A),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const H=Ae+A,Z=Y+A,se=Ee-D,pe=w+(le-D),te=G*Y/Z*H,me=re*Y/Z*H;X.projectionMatrix.makePerspective(se,pe,te,me,H,Z)}function ie(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;P.near=T.near=C.near=X.near,P.far=T.far=C.far=X.far,(N!==P.near||M!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,M=P.far);const ee=X.parent,fe=P.cameras;ie(P,ee);for(let de=0;de<fe.length;de++)ie(fe[de],ee);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),X.position.copy(P.position),X.quaternion.copy(P.quaternion),X.scale.copy(P.scale),X.matrix.copy(P.matrix),X.matrixWorld.copy(P.matrixWorld);const le=X.children;for(let de=0,we=le.length;de<we;de++)le[de].updateMatrixWorld(!0);fe.length===2?O(P,C,T):P.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let k=null;function j(X,ee){if(l=ee.getViewerPose(c||a),p=ee,l!==null){const le=l.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let de=!1;le.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let we=0;we<le.length;we++){const Ae=le[we];let Y=null;if(f!==null)Y=f.getViewport(Ae);else{const re=u.getViewSubImage(h,Ae);Y=re.viewport,we===0&&(e.setRenderTargetTextures(d,re.colorTexture,h.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(d))}let G=S[we];G===void 0&&(G=new Tt,G.layers.enable(we),G.viewport=new ut,S[we]=G),G.matrix.fromArray(Ae.transform.matrix),G.projectionMatrix.fromArray(Ae.projectionMatrix),G.viewport.set(Y.x,Y.y,Y.width,Y.height),we===0&&P.matrix.copy(G.matrix),de===!0&&P.cameras.push(G)}}const fe=s.inputSources;for(let le=0;le<_.length;le++){const de=fe[le],we=b.get(de);we!==void 0&&we.update(de,ee,c||a)}k&&k(X,ee),p=null}const W=new Sf;W.setAnimationLoop(j),this.setAnimationLoop=function(X){k=X},this.dispose=function(){}}}function wM(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,b,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),l(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,C)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?o(m,d,_,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.iridescenceMap?b=d.iridescenceMap:d.iridescenceThicknessMap?b=d.iridescenceThicknessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let C;d.aoMap?C=d.aoMap:d.lightMap&&(C=d.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uv2Transform.value.copy(C.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,_,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=b*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let C;d.map?C=d.map:d.alphaMap&&(C=d.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix))}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===$t&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function EM(){const i=Yr("canvas");return i.style.display="block",i}function El(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:EM(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,b=0,C=null,T=-1,S=null;const P=new ut,N=new ut;let M=null,R=e.width,z=e.height,U=1,ye=null,ue=null;const O=new ut(0,0,R,z),ie=new ut(0,0,R,z);let k=!1;const j=new Sl;let W=!1,X=!1,ee=null;const fe=new nt,le=new Le,de=new I,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return C===null?U:1}let Y=t;function G(E,B){for(let $=0;$<E.length;$++){const V=E[$],oe=e.getContext(V,B);if(oe!==null)return oe}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",he,!1),Y===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),Y=G(B,E),Y===null)throw G(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let re,J,K,Ee,w,A,D,H,Z,se,pe,te,me,ae,v,x,F,q,Q,ce,Me,y,ne;function ge(){re=new Uv(Y),J=new Pv(Y,re,i),re.init(J),y=new vM(Y,re,J),K=new _M(Y,re,J),Ee=new Gv,w=new rM,A=new xM(Y,re,K,w,J,y,Ee),D=new Iv(m),H=new zv(m),Z=new J_(Y,J),ne=new Lv(Y,re,Z,J),se=new Bv(Y,Z,Ee,ne),pe=new jv(Y,se,Z,Ee),Q=new Wv(Y,J,A),x=new Dv(w),te=new sM(m,D,H,re,J,ne,x),me=new wM(m,w),ae=new aM,v=new dM(re,J),q=new Cv(m,D,K,pe,u,a),F=new gM(m,pe,J),ce=new Rv(Y,re,Ee,J),Me=new kv(Y,re,Ee,J),Ee.programs=te.programs,m.capabilities=J,m.extensions=re,m.properties=w,m.renderLists=ae,m.shadowMap=F,m.state=K,m.info=Ee}ge();const _e=new SM(m,Y);this.xr=_e,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(R,z,!1))},this.getSize=function(E){return E.set(R,z)},this.setSize=function(E,B,$){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=E,z=B,e.width=Math.floor(E*U),e.height=Math.floor(B*U),$!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(R*U,z*U).floor()},this.setDrawingBufferSize=function(E,B,$){R=E,z=B,U=$,e.width=Math.floor(E*$),e.height=Math.floor(B*$),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,B,$,V){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,B,$,V),K.viewport(P.copy(O).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,B,$,V){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,B,$,V),K.scissor(N.copy(ie).multiplyScalar(U).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(E){K.setScissorTest(k=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(E=!0,B=!0,$=!0){let V=0;E&&(V|=16384),B&&(V|=256),$&&(V|=1024),Y.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",he,!1),ae.dispose(),v.dispose(),w.dispose(),D.dispose(),H.dispose(),pe.dispose(),ne.dispose(),te.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",je),_e.removeEventListener("sessionend",qe),ee&&(ee.dispose(),ee=null),_t.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Ee.autoReset,B=F.enabled,$=F.autoUpdate,V=F.needsUpdate,oe=F.type;ge(),Ee.autoReset=E,F.enabled=B,F.autoUpdate=$,F.needsUpdate=V,F.type=oe}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const B=E.target;B.removeEventListener("dispose",Te),be(B)}function be(E){Ce(E),w.remove(E)}function Ce(E){const B=w.get(E).programs;B!==void 0&&(B.forEach(function($){te.releaseProgram($)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,$,V,oe,Pe){B===null&&(B=we);const Ne=oe.isMesh&&oe.matrixWorld.determinant()<0,Ue=Wf(E,B,$,V,oe);K.setMaterial(V,Ne);let Oe=$.index;const Xe=$.attributes.position;if(Oe===null){if(Xe===void 0||Xe.count===0)return}else if(Oe.count===0)return;let ke=1;V.wireframe===!0&&(Oe=se.getWireframeAttribute($),ke=2),ne.setup(oe,V,Ue,$,Oe);let He,Ke=ce;Oe!==null&&(He=Z.get(Oe),Ke=Me,Ke.setIndex(He));const Yn=Oe!==null?Oe.count:Xe.count,vi=$.drawRange.start*ke,yi=$.drawRange.count*ke,Qt=Pe!==null?Pe.start*ke:0,We=Pe!==null?Pe.count*ke:1/0,Mi=Math.max(vi,Qt),Qe=Math.min(Yn,vi+yi,Qt+We)-1,en=Math.max(0,Qe-Mi+1);if(en!==0){if(oe.isMesh)V.wireframe===!0?(K.setLineWidth(V.wireframeLinewidth*Ae()),Ke.setMode(1)):Ke.setMode(4);else if(oe.isLine){let An=V.linewidth;An===void 0&&(An=1),K.setLineWidth(An*Ae()),oe.isLineSegments?Ke.setMode(1):oe.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else oe.isPoints?Ke.setMode(0):oe.isSprite&&Ke.setMode(4);if(oe.isInstancedMesh)Ke.renderInstances(Mi,en,oe.count);else if($.isInstancedBufferGeometry){const An=Math.min($.instanceCount,$._maxInstanceCount);Ke.renderInstances(Mi,en,An)}else Ke.render(Mi,en)}},this.compile=function(E,B){f=v.get(E),f.init(),g.push(f),E.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function($){const V=$.material;if(V)if(Array.isArray(V))for(let oe=0;oe<V.length;oe++){const Pe=V[oe];So(Pe,E,$)}else So(V,E,$)}),g.pop(),f=null};let ve=null;function Ie(E){ve&&ve(E)}function je(){_t.stop()}function qe(){_t.start()}const _t=new Sf;_t.setAnimationLoop(Ie),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){ve=E,_e.setAnimationLoop(E),E===null?_t.stop():_t.start()},_e.addEventListener("sessionstart",je),_e.addEventListener("sessionend",qe),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,B,C),f=v.get(E,g.length),f.init(),g.push(f),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(fe),X=this.localClippingEnabled,W=x.init(this.clippingPlanes,X,B),h=ae.get(E,p.length),h.init(),p.push(h),Jt(E,B,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ye,ue),W===!0&&x.beginShadows();const $=f.state.shadowsArray;if(F.render($,E,B),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(h,E),f.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const V=B.cameras;for(let oe=0,Pe=V.length;oe<Pe;oe++){const Ne=V[oe];Rl(h,E,Ne,Ne.viewport)}}else Rl(h,E,B);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(m,E,B),ne.resetDefaultState(),T=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function Jt(E,B,$,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){V&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const Ne=pe.update(E),Ue=E.material;Ue.visible&&h.push(E,Ne,Ue,$,de.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ee.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ee.render.frame),!E.frustumCulled||j.intersectsObject(E))){V&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const Ne=pe.update(E),Ue=E.material;if(Array.isArray(Ue)){const Oe=Ne.groups;for(let Xe=0,ke=Oe.length;Xe<ke;Xe++){const He=Oe[Xe],Ke=Ue[He.materialIndex];Ke&&Ke.visible&&h.push(E,Ne,Ke,$,de.z,He)}}else Ue.visible&&h.push(E,Ne,Ue,$,de.z,null)}}const Pe=E.children;for(let Ne=0,Ue=Pe.length;Ne<Ue;Ne++)Jt(Pe[Ne],B,$,V)}function Rl(E,B,$,V){const oe=E.opaque,Pe=E.transmissive,Ne=E.transparent;f.setupLightsView($),Pe.length>0&&Hf(oe,B,$),V&&K.viewport(P.copy(V)),oe.length>0&&er(oe,B,$),Pe.length>0&&er(Pe,B,$),Ne.length>0&&er(Ne,B,$),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Hf(E,B,$){const V=J.isWebGL2;ee===null&&(ee=new jn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?qs:mi,minFilter:_o,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(le),V?ee.setSize(le.x,le.y):ee.setSize(Ha(le.x),Ha(le.y));const oe=m.getRenderTarget();m.setRenderTarget(ee),m.clear();const Pe=m.toneMapping;m.toneMapping=Sn,er(E,B,$),m.toneMapping=Pe,A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),m.setRenderTarget(oe)}function er(E,B,$){const V=B.isScene===!0?B.overrideMaterial:null;for(let oe=0,Pe=E.length;oe<Pe;oe++){const Ne=E[oe],Ue=Ne.object,Oe=Ne.geometry,Xe=V===null?Ne.material:V,ke=Ne.group;Ue.layers.test($.layers)&&Vf(Ue,B,$,Oe,Xe,ke)}}function Vf(E,B,$,V,oe,Pe){E.onBeforeRender(m,B,$,V,oe,Pe),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),oe.onBeforeRender(m,B,$,V,E,Pe),oe.transparent===!0&&oe.side===ns?(oe.side=$t,oe.needsUpdate=!0,m.renderBufferDirect($,B,V,oe,E,Pe),oe.side=js,oe.needsUpdate=!0,m.renderBufferDirect($,B,V,oe,E,Pe),oe.side=ns):m.renderBufferDirect($,B,V,oe,E,Pe),E.onAfterRender(m,B,$,V,oe,Pe)}function So(E,B,$){B.isScene!==!0&&(B=we);const V=w.get(E),oe=f.state.lights,Pe=f.state.shadowsArray,Ne=oe.state.version,Ue=te.getParameters(E,oe.state,Pe,B,$),Oe=te.getProgramCacheKey(Ue);let Xe=V.programs;V.environment=E.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(E.isMeshStandardMaterial?H:D).get(E.envMap||V.environment),Xe===void 0&&(E.addEventListener("dispose",Te),Xe=new Map,V.programs=Xe);let ke=Xe.get(Oe);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===Ne)return Pl(E,Ue),ke}else Ue.uniforms=te.getUniforms(E),E.onBuild($,Ue,m),E.onBeforeCompile(Ue,m),ke=te.acquireProgram(Ue,Oe),Xe.set(Oe,ke),V.uniforms=Ue.uniforms;const He=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=x.uniform),Pl(E,Ue),V.needsLights=qf(E),V.lightsStateVersion=Ne,V.needsLights&&(He.ambientLightColor.value=oe.state.ambient,He.lightProbe.value=oe.state.probe,He.directionalLights.value=oe.state.directional,He.directionalLightShadows.value=oe.state.directionalShadow,He.spotLights.value=oe.state.spot,He.spotLightShadows.value=oe.state.spotShadow,He.rectAreaLights.value=oe.state.rectArea,He.ltc_1.value=oe.state.rectAreaLTC1,He.ltc_2.value=oe.state.rectAreaLTC2,He.pointLights.value=oe.state.point,He.pointLightShadows.value=oe.state.pointShadow,He.hemisphereLights.value=oe.state.hemi,He.directionalShadowMap.value=oe.state.directionalShadowMap,He.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,He.spotShadowMap.value=oe.state.spotShadowMap,He.spotShadowMatrix.value=oe.state.spotShadowMatrix,He.pointShadowMap.value=oe.state.pointShadowMap,He.pointShadowMatrix.value=oe.state.pointShadowMatrix);const Ke=ke.getUniforms(),Yn=kr.seqWithValue(Ke.seq,He);return V.currentProgram=ke,V.uniformsList=Yn,ke}function Pl(E,B){const $=w.get(E);$.outputEncoding=B.outputEncoding,$.instancing=B.instancing,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Wf(E,B,$,V,oe){B.isScene!==!0&&(B=we),A.resetTextureUnits();const Pe=B.fog,Ne=V.isMeshStandardMaterial?B.environment:null,Ue=C===null?m.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:gi,Oe=(V.isMeshStandardMaterial?H:D).get(V.envMap||Ne),Xe=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!V.normalMap&&!!$.attributes.tangent,He=!!$.morphAttributes.position,Ke=!!$.morphAttributes.normal,Yn=!!$.morphAttributes.color,vi=V.toneMapped?m.toneMapping:Sn,yi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qt=yi!==void 0?yi.length:0,We=w.get(V),Mi=f.state.lights;if(W===!0&&(X===!0||E!==S)){const tn=E===S&&V.id===T;x.setState(V,E,tn)}let Qe=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mi.state.version||We.outputEncoding!==Ue||oe.isInstancedMesh&&We.instancing===!1||!oe.isInstancedMesh&&We.instancing===!0||oe.isSkinnedMesh&&We.skinning===!1||!oe.isSkinnedMesh&&We.skinning===!0||We.envMap!==Oe||V.fog===!0&&We.fog!==Pe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==x.numPlanes||We.numIntersection!==x.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==ke||We.morphTargets!==He||We.morphNormals!==Ke||We.morphColors!==Yn||We.toneMapping!==vi||J.isWebGL2===!0&&We.morphTargetsCount!==Qt)&&(Qe=!0):(Qe=!0,We.__version=V.version);let en=We.currentProgram;Qe===!0&&(en=So(V,B,oe));let An=!1,gs=!1,wo=!1;const xt=en.getUniforms(),_s=We.uniforms;if(K.useProgram(en.program)&&(An=!0,gs=!0,wo=!0),V.id!==T&&(T=V.id,gs=!0),An||S!==E){if(xt.setValue(Y,"projectionMatrix",E.projectionMatrix),J.logarithmicDepthBuffer&&xt.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,gs=!0,wo=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(Y,de.setFromMatrixPosition(E.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||oe.isSkinnedMesh)&&xt.setValue(Y,"viewMatrix",E.matrixWorldInverse)}if(oe.isSkinnedMesh){xt.setOptional(Y,oe,"bindMatrix"),xt.setOptional(Y,oe,"bindMatrixInverse");const tn=oe.skeleton;tn&&(J.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),xt.setValue(Y,"boneTexture",tn.boneTexture,A),xt.setValue(Y,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Eo=$.morphAttributes;return(Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&J.isWebGL2===!0)&&Q.update(oe,$,V,en),(gs||We.receiveShadow!==oe.receiveShadow)&&(We.receiveShadow=oe.receiveShadow,xt.setValue(Y,"receiveShadow",oe.receiveShadow)),gs&&(xt.setValue(Y,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&jf(_s,wo),Pe&&V.fog===!0&&me.refreshFogUniforms(_s,Pe),me.refreshMaterialUniforms(_s,V,U,z,ee),kr.upload(Y,We.uniformsList,_s,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(kr.upload(Y,We.uniformsList,_s,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(Y,"center",oe.center),xt.setValue(Y,"modelViewMatrix",oe.modelViewMatrix),xt.setValue(Y,"normalMatrix",oe.normalMatrix),xt.setValue(Y,"modelMatrix",oe.matrixWorld),en}function jf(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function qf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,B,$){w.get(E.texture).__webglTexture=B,w.get(E.depthTexture).__webglTexture=$;const V=w.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=$===void 0,V.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const $=w.get(E);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,$=0){C=E,_=B,b=$;let V=!0;if(E){const Oe=w.get(E);Oe.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),V=!1):Oe.__webglFramebuffer===void 0?A.setupRenderTarget(E):Oe.__hasExternalTextures&&A.rebindTextures(E,w.get(E.texture).__webglTexture,w.get(E.depthTexture).__webglTexture)}let oe=null,Pe=!1,Ne=!1;if(E){const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Ne=!0);const Xe=w.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(oe=Xe[B],Pe=!0):J.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?oe=w.get(E).__webglMultisampledFramebuffer:oe=Xe,P.copy(E.viewport),N.copy(E.scissor),M=E.scissorTest}else P.copy(O).multiplyScalar(U).floor(),N.copy(ie).multiplyScalar(U).floor(),M=k;if(K.bindFramebuffer(36160,oe)&&J.drawBuffers&&V&&K.drawBuffers(E,oe),K.viewport(P),K.scissor(N),K.setScissorTest(M),Pe){const Oe=w.get(E.texture);Y.framebufferTexture2D(36160,36064,34069+B,Oe.__webglTexture,$)}else if(Ne){const Oe=w.get(E.texture),Xe=B||0;Y.framebufferTextureLayer(36160,36064,Oe.__webglTexture,$||0,Xe)}T=-1},this.readRenderTargetPixels=function(E,B,$,V,oe,Pe,Ne){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){K.bindFramebuffer(36160,Ue);try{const Oe=E.texture,Xe=Oe.format,ke=Oe.type;if(Xe!==jt&&y.convert(Xe)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===qs&&(re.has("EXT_color_buffer_half_float")||J.isWebGL2&&re.has("EXT_color_buffer_float"));if(ke!==mi&&y.convert(ke)!==Y.getParameter(35738)&&!(ke===oi&&(J.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&$>=0&&$<=E.height-oe&&Y.readPixels(B,$,V,oe,y.convert(Xe),y.convert(ke),Pe)}finally{const Oe=C!==null?w.get(C).__webglFramebuffer:null;K.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(E,B,$=0){const V=Math.pow(2,-$),oe=Math.floor(B.image.width*V),Pe=Math.floor(B.image.height*V);A.setTexture2D(B,0),Y.copyTexSubImage2D(3553,$,0,0,E.x,E.y,oe,Pe),K.unbindTexture()},this.copyTextureToTexture=function(E,B,$,V=0){const oe=B.image.width,Pe=B.image.height,Ne=y.convert($.format),Ue=y.convert($.type);A.setTexture2D($,0),Y.pixelStorei(37440,$.flipY),Y.pixelStorei(37441,$.premultiplyAlpha),Y.pixelStorei(3317,$.unpackAlignment),B.isDataTexture?Y.texSubImage2D(3553,V,E.x,E.y,oe,Pe,Ne,Ue,B.image.data):B.isCompressedTexture?Y.compressedTexSubImage2D(3553,V,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ne,B.mipmaps[0].data):Y.texSubImage2D(3553,V,E.x,E.y,Ne,Ue,B.image),V===0&&$.generateMipmaps&&Y.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(E,B,$,V,oe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,Ne=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,Oe=y.convert(V.format),Xe=y.convert(V.type);let ke;if(V.isData3DTexture)A.setTexture3D(V,0),ke=32879;else if(V.isDataArrayTexture)A.setTexture2DArray(V,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,V.flipY),Y.pixelStorei(37441,V.premultiplyAlpha),Y.pixelStorei(3317,V.unpackAlignment);const He=Y.getParameter(3314),Ke=Y.getParameter(32878),Yn=Y.getParameter(3316),vi=Y.getParameter(3315),yi=Y.getParameter(32877),Qt=$.isCompressedTexture?$.mipmaps[0]:$.image;Y.pixelStorei(3314,Qt.width),Y.pixelStorei(32878,Qt.height),Y.pixelStorei(3316,E.min.x),Y.pixelStorei(3315,E.min.y),Y.pixelStorei(32877,E.min.z),$.isDataTexture||$.isData3DTexture?Y.texSubImage3D(ke,oe,B.x,B.y,B.z,Pe,Ne,Ue,Oe,Xe,Qt.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ke,oe,B.x,B.y,B.z,Pe,Ne,Ue,Oe,Qt.data)):Y.texSubImage3D(ke,oe,B.x,B.y,B.z,Pe,Ne,Ue,Oe,Xe,Qt),Y.pixelStorei(3314,He),Y.pixelStorei(32878,Ke),Y.pixelStorei(3316,Yn),Y.pixelStorei(3315,vi),Y.pixelStorei(32877,yi),oe===0&&V.generateMipmaps&&Y.generateMipmap(ke),K.unbindTexture()},this.initTexture=function(E){A.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){_=0,b=0,C=null,K.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class TM extends El{}TM.prototype.isWebGL1Renderer=!0;class Pf extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class AM extends st{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class qn extends st{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uu=new I,Bu=new I,ku=new nt,ma=new xo,Ar=new Ks;class CM extends gt{constructor(e=new Ct,t=new qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Uu.fromBufferAttribute(t,s-1),Bu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Uu.distanceTo(Bu);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;ku.copy(s).invert(),ma.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let C=_,T=b-1;C<T;C+=p){const S=g.getX(C),P=g.getX(C+1);if(l.fromBufferAttribute(d,S),u.fromBufferAttribute(d,P),ma.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let C=_,T=b-1;C<T;C+=p){if(l.fromBufferAttribute(d,C),u.fromBufferAttribute(d,C+1),ma.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Gu=new I,Hu=new I;class Xs extends CM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gu.fromBufferAttribute(t,s),Hu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gu.distanceTo(Hu);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vi extends st{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new nt,Wa=new xo,Cr=new Ks,Lr=new I;class ga extends gt{constructor(e=new Ct,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Vu.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,m=p;g<m;g++){const d=l.getX(g);Lr.fromBufferAttribute(h,d),Wu(Lr,d,c,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p;g<m;g++)Lr.fromBufferAttribute(h,g),Wu(Lr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wu(i,e,t,n,s,r,a){const o=Wa.distanceSqToPoint(i);if(o<t){const c=new I;Wa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}const Rr=new I,Pr=new I,_a=new I,Dr=new cn;class LM extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ur*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:m,b:d,c:_}=Dr;if(m.fromBufferAttribute(o,l[0]),d.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),Dr.getNormal(_a),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const C=(b+1)%3,T=h[b],S=h[C],P=Dr[u[b]],N=Dr[u[C]],M=`${T}_${S}`,R=`${S}_${T}`;R in f&&f[R]?(_a.dot(f[R].normal)<=r&&(p.push(P.x,P.y,P.z),p.push(N.x,N.y,N.z)),f[R]=null):M in f||(f[M]={index0:l[b],index1:l[C],normal:_a.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:d}=f[g];Rr.fromBufferAttribute(o,m),Pr.fromBufferAttribute(o,d),p.push(Rr.x,Rr.y,Rr.z),p.push(Pr.x,Pr.y,Pr.z)}this.setAttribute("position",new tt(p,3))}}}class RM extends st{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class PM extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Df extends st{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DM extends Df{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class If extends st{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IM extends st{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class FM extends st{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ff extends st{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class NM extends st{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nf extends qn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const OM={ShadowMaterial:RM,SpriteMaterial:AM,RawShaderMaterial:PM,ShaderMaterial:En,PointsMaterial:Vi,MeshPhysicalMaterial:DM,MeshStandardMaterial:Df,MeshPhongMaterial:If,MeshToonMaterial:IM,MeshNormalMaterial:FM,MeshLambertMaterial:Ff,MeshDepthMaterial:Lf,MeshDistanceMaterial:Rf,MeshBasicMaterial:vo,MeshMatcapMaterial:NM,LineDashedMaterial:Nf,LineBasicMaterial:qn,Material:st};st.fromType=function(i){return new OM[i]};const ju={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const UM=new zM;let Of=class{constructor(e){this.manager=e!==void 0?e:UM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const vn={};class BM extends Of{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ju.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vn[e]!==void 0){vn[e].push({onLoad:t,onProgress:n,onError:s});return}vn[e]=[],vn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vn[e],h=l.body.getReader(),f=l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){b();function b(){h.read().then(({done:C,value:T})=>{if(C)_.close();else{m+=T.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let P=0,N=u.length;P<N;P++){const M=u[P];M.onProgress&&M.onProgress(S)}_.enqueue(T),b()}})}}});return new Response(d)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ju.add(e,l);const u=vn[e];delete vn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=vn[e];if(u===void 0)throw this.manager.itemError(e),l;delete vn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kM extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qu=new nt,Xu=new I,Yu=new I;class GM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HM extends GM{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ga*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $r extends kM{constructor(e,t,n=0,s=Math.PI/3,r=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.shadow=new HM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zf="\\[\\]\\.:\\/",Tl="[^"+zf+"]",VM="[^"+zf.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Tl);/(WCOD+)?/.source.replace("WCOD",VM);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl);class WM{constructor(e,t,n=0,s=1/0){this.ray=new xo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ja(e,this,n,t),n.sort($u),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ja(e[s],this,n,t);return n.sort($u),n}}function $u(i,e){return i.distance-e.distance}function ja(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)ja(s[r],e,t,!0)}}class Zu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jM extends Xs{constructor(e=10,t=10,n=4473924,s=8947848){n=new Re(n),s=new Re(s);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,p=0,g=-o;f<=t;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const m=f===r?n:s;m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3}const u=new Ct;u.setAttribute("position",new tt(c,3)),u.setAttribute("color",new tt(l,3));const h=new qn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class qM extends Xs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ct;s.setAttribute("position",new tt(t,3)),s.setAttribute("color",new tt(n,3));const r=new qn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Re,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const sn=new Uint32Array(512),rn=new Uint32Array(512);for(let i=0;i<256;++i){const e=i-127;e<-27?(sn[i]=0,sn[i|256]=32768,rn[i]=24,rn[i|256]=24):e<-14?(sn[i]=1024>>-e-14,sn[i|256]=1024>>-e-14|32768,rn[i]=-e-1,rn[i|256]=-e-1):e<=15?(sn[i]=e+15<<10,sn[i|256]=e+15<<10|32768,rn[i]=13,rn[i|256]=13):e<128?(sn[i]=31744,sn[i|256]=64512,rn[i]=24,rn[i|256]=24):(sn[i]=31744,sn[i|256]=64512,rn[i]=13,rn[i|256]=13)}const Uf=new Uint32Array(2048),Qs=new Uint32Array(64),XM=new Uint32Array(64);for(let i=1;i<1024;++i){let e=i<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Uf[i]=e|t}for(let i=1024;i<2048;++i)Uf[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)Qs[i]=i<<23;Qs[31]=1199570944;Qs[32]=2147483648;for(let i=33;i<63;++i)Qs[i]=2147483648+(i-32<<23);Qs[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(XM[i]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const Ku={type:"change"},xa={type:"start"},Ju={type:"end"};class YM extends xi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ae),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ku),n.update(),r=s.NONE},this.update=function(){const y=new I,ne=new _i().setFromUnitVectors(e.up,new I(0,1,0)),ge=ne.clone().invert(),_e=new I,L=new _i,xe=2*Math.PI;return function(){const Te=n.object.position;y.copy(Te).sub(n.target),y.applyQuaternion(ne),o.setFromVector3(y),n.autoRotate&&r===s.NONE&&R(N()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let be=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;return isFinite(be)&&isFinite(Ce)&&(be<-Math.PI?be+=xe:be>Math.PI&&(be-=xe),Ce<-Math.PI?Ce+=xe:Ce>Math.PI&&(Ce-=xe),be<=Ce?o.theta=Math.max(be,Math.min(Ce,o.theta)):o.theta=o.theta>(be+Ce)/2?Math.max(be,o.theta):Math.min(Ce,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(o),y.applyQuaternion(ge),Te.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||_e.distanceToSquared(n.object.position)>a||8*(1-L.dot(n.object.quaternion))>a?(n.dispatchEvent(Ku),_e.copy(n.object.position),L.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",se),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ae)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Zu,c=new Zu;let l=1;const u=new I;let h=!1;const f=new Le,p=new Le,g=new Le,m=new Le,d=new Le,_=new Le,b=new Le,C=new Le,T=new Le,S=[],P={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function R(y){c.theta-=y}function z(y){c.phi-=y}const U=function(){const y=new I;return function(ge,_e){y.setFromMatrixColumn(_e,0),y.multiplyScalar(-ge),u.add(y)}}(),ye=function(){const y=new I;return function(ge,_e){n.screenSpacePanning===!0?y.setFromMatrixColumn(_e,1):(y.setFromMatrixColumn(_e,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(ge),u.add(y)}}(),ue=function(){const y=new I;return function(ge,_e){const L=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;y.copy(xe).sub(n.target);let he=y.length();he*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ge*he/L.clientHeight,n.object.matrix),ye(2*_e*he/L.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ge*(n.object.right-n.object.left)/n.object.zoom/L.clientWidth,n.object.matrix),ye(_e*(n.object.top-n.object.bottom)/n.object.zoom/L.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(y){n.object.isPerspectiveCamera?l/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(y){n.object.isPerspectiveCamera?l*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(y){f.set(y.clientX,y.clientY)}function j(y){b.set(y.clientX,y.clientY)}function W(y){m.set(y.clientX,y.clientY)}function X(y){p.set(y.clientX,y.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;R(2*Math.PI*g.x/ne.clientHeight),z(2*Math.PI*g.y/ne.clientHeight),f.copy(p),n.update()}function ee(y){C.set(y.clientX,y.clientY),T.subVectors(C,b),T.y>0?O(M()):T.y<0&&ie(M()),b.copy(C),n.update()}function fe(y){d.set(y.clientX,y.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),ue(_.x,_.y),m.copy(d),n.update()}function le(y){y.deltaY<0?ie(M()):y.deltaY>0&&O(M()),n.update()}function de(y){let ne=!1;switch(y.code){case n.keys.UP:ue(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:ue(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:ue(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:ue(-n.keyPanSpeed,0),ne=!0;break}ne&&(y.preventDefault(),n.update())}function we(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const y=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);f.set(y,ne)}}function Ae(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const y=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);m.set(y,ne)}}function Y(){const y=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,ge=Math.sqrt(y*y+ne*ne);b.set(0,ge)}function G(){n.enableZoom&&Y(),n.enablePan&&Ae()}function re(){n.enableZoom&&Y(),n.enableRotate&&we()}function J(y){if(S.length==1)p.set(y.pageX,y.pageY);else{const ge=Me(y),_e=.5*(y.pageX+ge.x),L=.5*(y.pageY+ge.y);p.set(_e,L)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;R(2*Math.PI*g.x/ne.clientHeight),z(2*Math.PI*g.y/ne.clientHeight),f.copy(p)}function K(y){if(S.length===1)d.set(y.pageX,y.pageY);else{const ne=Me(y),ge=.5*(y.pageX+ne.x),_e=.5*(y.pageY+ne.y);d.set(ge,_e)}_.subVectors(d,m).multiplyScalar(n.panSpeed),ue(_.x,_.y),m.copy(d)}function Ee(y){const ne=Me(y),ge=y.pageX-ne.x,_e=y.pageY-ne.y,L=Math.sqrt(ge*ge+_e*_e);C.set(0,L),T.set(0,Math.pow(C.y/b.y,n.zoomSpeed)),O(T.y),b.copy(C)}function w(y){n.enableZoom&&Ee(y),n.enablePan&&K(y)}function A(y){n.enableZoom&&Ee(y),n.enableRotate&&J(y)}function D(y){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",Z)),q(y),y.pointerType==="touch"?v(y):pe(y))}function H(y){n.enabled!==!1&&(y.pointerType==="touch"?x(y):te(y))}function Z(y){Q(y),S.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",Z)),n.dispatchEvent(Ju),r=s.NONE}function se(y){Q(y)}function pe(y){let ne;switch(y.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Si.DOLLY:if(n.enableZoom===!1)return;j(y),r=s.DOLLY;break;case Si.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;W(y),r=s.PAN}else{if(n.enableRotate===!1)return;k(y),r=s.ROTATE}break;case Si.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;k(y),r=s.ROTATE}else{if(n.enablePan===!1)return;W(y),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(xa)}function te(y){if(n.enabled!==!1)switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(y);break;case s.DOLLY:if(n.enableZoom===!1)return;ee(y);break;case s.PAN:if(n.enablePan===!1)return;fe(y);break}}function me(y){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(y.preventDefault(),n.dispatchEvent(xa),le(y),n.dispatchEvent(Ju))}function ae(y){n.enabled===!1||n.enablePan===!1||de(y)}function v(y){switch(ce(y),S.length){case 1:switch(n.touches.ONE){case wi.ROTATE:if(n.enableRotate===!1)return;we(),r=s.TOUCH_ROTATE;break;case wi.PAN:if(n.enablePan===!1)return;Ae(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(),r=s.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(xa)}function x(y){switch(ce(y),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;J(y),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(y),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(y),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(y),n.update();break;default:r=s.NONE}}function F(y){n.enabled!==!1&&y.preventDefault()}function q(y){S.push(y)}function Q(y){delete P[y.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==y.pointerId){S.splice(ne,1);return}}function ce(y){let ne=P[y.pointerId];ne===void 0&&(ne=new Le,P[y.pointerId]=ne),ne.set(y.pageX,y.pageY)}function Me(y){const ne=y.pointerId===S[0].pointerId?S[1]:S[0];return P[ne.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}class Al{constructor(e){De(this,"scene");De(this,"camera");De(this,"renderer");De(this,"orbitControls");this.container=e,this.scene=new Pf,this.scene.background=new Re(12635345),this.camera=new Tt(40,this.container.offsetWidth/this.container.offsetHeight,.1,1e3),this.renderer=new El,this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),e.appendChild(this.renderer.domElement);const t=new $r(16777215,1);t.position.set(20,50,20),t.lookAt(0,0,0),this.scene.add(t);const n=new $r(13421772,1);n.position.set(-20,50,-20),n.lookAt(0,0,0),this.scene.add(n),this.camera.position.x=13,this.camera.position.y=18,this.camera.position.z=13,this.camera.lookAt(new I(0,0,0)),this.addDebug(),this.orbitControls=this.addOrbitControls()}animate(){document.body.contains(this.container)&&(this.updateSize(),requestAnimationFrame(this.animate.bind(this)),this.orbitControls.update(),this.renderer.render(this.scene,this.camera),window.graphics=this)}dump(){console.log("scene",this.scene)}addDebug(){{const e=new qM(20);this.scene.add(e)}}addOrbitControls(){const e=new YM(this.camera,this.renderer.domElement);return e.enableDamping=!0,e.dampingFactor=.05,e}updateSize(){this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}}De(Al,"DEBUG",!0);function Cl(i){return i[Math.floor(Math.random()*i.length)]}function Zr(i,e="Assertion failed"){if(!i)throw console.groupCollapsed("assertBoolean"),console.trace(),console.groupEnd(),e}async function $M(i){return await new Promise(e=>setTimeout(e,i))}class as{constructor(e){De(this,"value",[]);this.templatesCount=e,this.value=new Array(e).fill(0)}isAllZeros(){return this.countOnes()===0}countOnes(){return this.value.reduce((e,t)=>e+t,0)}clone(){const e=new as(this.templatesCount);return e.value=[...this.value],e}getIntersection(e){Zr(this.value.length===e.value.length);const t=new as(this.templatesCount);for(let n=0;n<t.value.length;n++)t.value[n]=Math.min(this.value[n],e.value[n]);return t}fillOnes(){this.value.fill(1)}getNonZeroIndices(){return this.value.reduce((e,t,n)=>(t===1&&e.push(n),e),[])}getRandomNonZeroIndex(){const e=this.getNonZeroIndices();return Cl(e)}setAt2(e){this.setAt(e,1)}clearAt(e){this.setAt(e,0)}setAt(e,t){this.value[e]=t}getAt(e){return this.value[e]}print(){return this.value.join(" ")}}class ZM{create(e){return new as(e)}}var li=(i=>(i.px="px",i.nx="nx",i.py="py",i.ny="ny",i))(li||{});const Ss=["meshes/corner.obj","meshes/wall.obj"];class KM{constructor(){De(this,"templates",[]);De(this,"templateMaskFactory");this.templateMaskFactory=new ZM}parse(e){this.templates.splice(0);const t=[];t.push(...this.getDefaultTemplates()),t.push(...this.getSrcTemplates());const n=t.length;this.templates.push(...t.map(s=>({...s,id:s.src,px:this.templateMaskFactory.create(n),nx:this.templateMaskFactory.create(n),py:this.templateMaskFactory.create(n),ny:this.templateMaskFactory.create(n)})));for(const s of Object.values(li))this.templates[0][s].setAt2(0);for(let s=-40;s<=40;++s)for(let r=-40;r<=40;++r)this.parseCell(e,new Le(s,r));this.addZeros(),console.log("parsed templates",this.templates)}getTemplates(){return this.templates}getSrcTemplates(){const e=[];for(let t=0;t<Ss.length;++t)e.push({src:Ss[t],rotation:0}),e.push({src:Ss[t],rotation:1}),e.push({src:Ss[t],rotation:2}),e.push({src:Ss[t],rotation:3});return e}findTemplateIndex(e,t){const n=this.templates.findIndex(({src:s,rotation:r})=>s===e&&r===t);if(n===-1)throw"Template not found";return n}getDefaultTemplates(){return["void"].map(e=>({src:e,id:e,rotation:0}))}parseCell(e,t){e.getCell(t)&&(this.parsePair(e,"px",t,t.clone().add(new Le(1,0))),this.parsePair(e,"nx",t,t.clone().add(new Le(-1,0))),this.parsePair(e,"py",t,t.clone().add(new Le(0,1))),this.parsePair(e,"ny",t,t.clone().add(new Le(0,-1))))}parsePair(e,t,n,s){this.parsePairRotate(0,t,e.getCell(n),e.getCell(s)),this.parsePairRotate(1,t,e.getCell(n),e.getCell(s)),this.parsePairRotate(2,t,e.getCell(n),e.getCell(s)),this.parsePairRotate(3,t,e.getCell(n),e.getCell(s))}parsePairRotate(e,t,n,s){const r=this.rotateKey(t,-e);let a;n?a=this.findTemplateIndex(n.src,this.addRotate(n.rotation,e)):a=0;let o;s?o=this.findTemplateIndex(s.src,this.addRotate(s.rotation,e)):o=0,this.templates[a][r].setAt2(o);const l=this.reverseKey(r);this.templates[o][l].setAt2(a)}rotateKey(e,t){const n=["px","py","nx","ny"];let s=n.findIndex(r=>r===e);if(s===-1)throw"Can't rotate index";return n[this.addRotate(s,t)]}reverseKey(e){switch(e){case"px":return"nx";case"nx":return"px";case"py":return"ny";case"ny":return"py"}}addZeros(){this.templates.forEach((e,t)=>{if(t!==0)for(const n of Object.values(li))e[n].isAllZeros()&&(e[n].setAt2(0),this.propagateWithZero(e.src,e.rotation,n))})}propagateWithZero(e,t,n){const s=this.templates[0],r=this.reverseKey(n);for(let a=0;a<4;++a){const o=this.rotateKey(r,a);console.log("key2",o);const c=this.findTemplateIndex(e,this.addRotate(t,a));s[o].setAt2(c)}}addRotate(e,t){return(4+e+t)%4}}const pi=new KM;class Ll{constructor(){De(this,"x",0);De(this,"y",0);De(this,"dead",!1);De(this,"dirty",!1);De(this,"enthropy",0);De(this,"mask");De(this,"templates",[]);this.mask=new as(pi.getTemplates().length),this.mask.fillOnes(),this.enthropy=this.mask.countOnes(),this.templates=pi.getTemplates()}getNonZeroIndices(){return this.mask.getNonZeroIndices()}collapse(){const e=this.getNonZeroIndices(),t=Cl(e)??0;this.collapseTo(t)}collapseTo(e){this.dead||(Zr(e<this.templates.length),Zr(this.mask.getAt(e)===1),this.mask=new as(pi.getTemplates().length),this.mask.setAt(e,1),this.enthropy=this.mask.countOnes())}collapseToId(e){const t=this.templates.findIndex(n=>n.id===e);this.collapseTo(t)}die(){this.dead=!0}tryGetOnlyState(){if(this.enthropy!=1)throw"attempt to get only state of element with enthropy > 2";return this.mask.getNonZeroIndices()[0]}countStates(){return this.mask.countOnes()}clone(){const e=new Ll;return e.mask=this.mask.clone(),e.enthropy=this.mask.countOnes(),e.dead=this.dead,e.x=this.x,e.y=this.y,e}updateEnthropy(){this.enthropy=this.mask.countOnes(),this.enthropy<1&&this.die()}print(){let e=`[${this.x.toString().padStart(2," ")}, ${this.y.toString().padStart(2," ")}] `;return e+=`[${this.mask.print()}]`,e+=` entr: ${this.enthropy}`,e}}class JM{constructor(){De(this,"MAX_HORIZONTAL",13);De(this,"MAX_VERTICAL",3);De(this,"instances",[])}fill(){for(let e=0;e<this.MAX_HORIZONTAL;++e){this.instances[e]=[];for(let t=0;t<this.MAX_HORIZONTAL;++t){const n=new Ll;n.x=e,n.y=t,(e===0||t===0||e===this.MAX_HORIZONTAL-1||t===this.MAX_HORIZONTAL-1)&&(n.collapseToId("void"),n.dirty=!0),this.instances[e][t]=n}}}eachElement(e){this.eachElementByIndex((t,n)=>e(this.instances[t][n]))}eachElementByIndex(e){for(let t=0;t<this.instances.length;++t)for(let n=0;n<this.instances[t].length;++n)e(t,n)}print(){const e=[];for(let t=0;t<this.instances.length;++t){e[t]=[];for(let n=0;n<this.instances[t].length;++n)e[t][n]={...this.instances[t][n]}}console.log(e)}printFinishedSlice(){var t;let e="";for(let n=0;n<this.instances.length;++n){for(let s=0;s<this.instances[n].length;++s){const r=this.instances[n][s];Zr(r.enthropy<=1),e+=`	${((t=pi.getTemplates()[r.tryGetOnlyState()])==null?void 0:t.id)??"dead"}`}e+=`
`}console.log(e)}getElementsAdjacentTo(e){function t(s,r){r[0]&&s.push(r)}const n=[];return t(n,[this.tryGetElementAt(e.x+1,e.y),li.px]),t(n,[this.tryGetElementAt(e.x-1,e.y),li.nx]),t(n,[this.tryGetElementAt(e.x,e.y+1),li.py]),t(n,[this.tryGetElementAt(e.x,e.y-1),li.ny]),n}tryGetElementAt(e,t){return e>=0&&e<this.instances.length&&t>=0&&t<this.instances[e].length?this.instances[e][t]:null}getNextDirtyElement(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t){const n=this.instances[e][t];if(n.dirty)return n}return null}validataSolved(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)if(this.instances[e][t].enthropy>1)return!1;return!0}cloneState(){return this.instances.map(e=>e.map(t=>t.clone()))}replaceState(e){this.instances=e.map(t=>t.map(n=>n.clone()))}}const Qu=5e3,Jr=class Jr extends EventTarget{constructor(t){super();De(this,"iterations",0);De(this,"runFlag",!1);De(this,"history",[]);this.set=t}async run(){this.runFlag=!0,this.propagate();const t=this.getNextElement();this.history.push({instancePos:{x:t.x,y:t.y},leftStates:t.mask.clone(),state:this.set.cloneState(),retries:0});let n=0;for(;this.runFlag;){if(n++>Qu)throw"Guard overflow";if(this.history.length===0)throw"No history left";const s=this.history[this.history.length-1],r=s.leftStates.getRandomNonZeroIndex();try{const o=this.set.tryGetElementAt(s.instancePos.x,s.instancePos.y);o.collapseTo(r),o.dirty=!0;const c=new Event("element_collapsed",{bubbles:!0});this.dispatchEvent(c),await $M(10),this.propagate()}catch{this.checkHistory(s,r);continue}const a=this.getNextElement();if(!a){console.log("yay!!");const o=new Event("solving_finished",{bubbles:!0});this.dispatchEvent(o);break}this.history.push({instancePos:{x:a.x,y:a.y},leftStates:a.mask.clone(),state:this.set.cloneState(),retries:0})}}stop(){this.runFlag=!1}checkHistory(t,n){if(t.leftStates.setAt(n,0),t.retries++,t.leftStates.countOnes()===0){this.goBackInHistory();return}this.set.replaceState(t.state)}goBackInHistory(){let t=1;const n=.1;for(let s=1;s<this.history.length-1;++s)t+=Math.random()<n?1:0;this.history.splice(this.history.length-t,t)}getLastHistoryStep(){return this.history[this.history.length-1]}propagate(){let t,n=0;for(;t=this.set.getNextDirtyElement();){if(n++>Qu)throw"Guard overflow";this.propagateElement(t)}}propagateElement(t){this.set.getElementsAdjacentTo(t).forEach(([s,r])=>{this.filterTargetStates(t,s,r)}),t.dirty=!1}filterTargetStates(t,n,s){const r=n.enthropy,a=pi.getTemplates();for(let o=0;o<a.length;o++){let c=!1;if(n.mask.getAt(o)===1)for(let l=0;l<a.length;++l){if(t.mask.getAt(l)===1){const u=a[l][s];c||(c=u.getAt(o)===1)}Jr.checks++}if(!c&&(n.mask.setAt(o,0),n.updateEnthropy(),n.enthropy===0))throw"Backtrack"}r!==n.enthropy&&this.set.getElementsAdjacentTo(n).forEach(([c,l])=>{c.dirty=!0})}getNextElement(){let t=1/0,n=[];return this.set.eachElement(s=>{s.dead||s.enthropy===1||(s.enthropy<t&&(t=s.enthropy,n=[s]),s.enthropy===t&&n.push(s))}),n.length<1?null:Cl(n)}printHistoryItem(){const t=this.history[this.history.length-1],n=this.history.length-1;console.log(`hist# ${String(n).padStart(2," ")} at [`+String(t.instancePos.x).padStart(2," ")+", "+String(t.instancePos.y).padStart(2," ")+`] [${t.leftStates.print()}]`)}};De(Jr,"checks",0);let Kr=Jr;const QM=/^[og]\s*(.+)?/,eb=/^mtllib /,tb=/^usemtl /,nb=/^usemap /,eh=new I,va=new I,th=new I,nh=new I,It=new I,Ir=new Re;function ib(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;eh.fromArray(s,e),va.fromArray(s,t),th.fromArray(s,n),It.subVectors(th,va),nh.subVectors(eh,va),It.cross(nh),It.normalize(),r.push(It.x,It.y,It.z),r.push(It.x,It.y,It.z),r.push(It.x,It.y,It.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),o!==void 0&&o!==""){const g=this.normals.length;h=this.parseNormalIndex(o,g),f=this.parseNormalIndex(c,g),p=this.parseNormalIndex(l,g),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(s!==void 0&&s!==""){const g=this.uvs.length;h=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),p=this.parseUVIndex(a,g),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class Bf extends Of{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new BM(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new ib;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s="",r="",a=0,o=[];const c=typeof"".trimLeft=="function";for(let h=0,f=n.length;h<f;h++)if(s=n[h],s=c?s.trimLeft():s.trim(),a=s.length,a!==0&&(r=s.charAt(0),r!=="#"))if(r==="v"){const p=s.split(/\s+/);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(Ir.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6])).convertSRGBToLinear(),t.colors.push(Ir.r,Ir.g,Ir.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(r==="f"){const g=s.slice(1).trim().split(/\s+/),m=[];for(let _=0,b=g.length;_<b;_++){const C=g[_];if(C.length>0){const T=C.split("/");m.push(T)}}const d=m[0];for(let _=1,b=m.length-1;_<b;_++){const C=m[_],T=m[_+1];t.addFace(d[0],C[0],T[0],d[1],C[1],T[1],d[2],C[2],T[2])}}else if(r==="l"){const p=s.substring(1).trim().split(" ");let g=[];const m=[];if(s.indexOf("/")===-1)g=p;else for(let d=0,_=p.length;d<_;d++){const b=p[d].split("/");b[0]!==""&&g.push(b[0]),b[1]!==""&&m.push(b[1])}t.addLineGeometry(g,m)}else if(r==="p"){const g=s.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((o=QM.exec(s))!==null){const p=(" "+o[0].slice(1).trim()).slice(1);t.startObject(p)}else if(tb.test(s))t.object.startMaterial(s.substring(7).trim(),t.materialLibraries);else if(eb.test(s))t.materialLibraries.push(s.substring(7).trim());else if(nb.test(s))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(r==="s"){if(o=s.split(" "),o.length>1){const g=o[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(s==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+s+'"')}t.finalize();const l=new kn;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let h=0,f=t.objects.length;h<f;h++){const p=t.objects[h],g=p.geometry,m=p.materials,d=g.type==="Line",_=g.type==="Points";let b=!1;if(g.vertices.length===0)continue;const C=new Ct;C.setAttribute("position",new tt(g.vertices,3)),g.normals.length>0&&C.setAttribute("normal",new tt(g.normals,3)),g.colors.length>0&&(b=!0,C.setAttribute("color",new tt(g.colors,3))),g.hasUVIndices===!0&&C.setAttribute("uv",new tt(g.uvs,2));const T=[];for(let P=0,N=m.length;P<N;P++){const M=m[P],R=M.name+"_"+M.smooth+"_"+b;let z=t.materials[R];if(this.materials!==null){if(z=this.materials.create(M.name),d&&z&&!(z instanceof qn)){const U=new qn;st.prototype.copy.call(U,z),U.color.copy(z.color),z=U}else if(_&&z&&!(z instanceof Vi)){const U=new Vi({size:10,sizeAttenuation:!1});st.prototype.copy.call(U,z),U.color.copy(z.color),U.map=z.map,z=U}}z===void 0&&(d?z=new qn:_?z=new Vi({size:1,sizeAttenuation:!1}):z=new If,z.name=M.name,z.flatShading=!M.smooth,z.vertexColors=b,t.materials[R]=z),T.push(z)}let S;if(T.length>1){for(let P=0,N=m.length;P<N;P++){const M=m[P];C.addGroup(M.groupStart,M.groupCount,P)}d?S=new Xs(C,T):_?S=new ga(C,T):S=new qt(C,T)}else d?S=new Xs(C,T[0]):_?S=new ga(C,T[0]):S=new qt(C,T[0]);S.name=p.name,l.add(S)}else if(t.vertices.length>0){const h=new Vi({size:1,sizeAttenuation:!1}),f=new Ct;f.setAttribute("position",new tt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new tt(t.colors,3)),h.vertexColors=!0);const p=new ga(f,h);l.add(p)}return l}}class sb{constructor(e){De(this,"TILE_SIZE",2);De(this,"group");De(this,"loader",new Bf);De(this,"material",new Ff({color:16777215}));De(this,"rendering",!1);De(this,"cache",new Map);this.graphics=e,this.group=new kn,this.graphics.scene.add(this.group)}async tryRender(e){if(this.rendering)return;this.rendering=!0,this.group.clear();const t=[];e.eachElement(n=>t.push(n));for(let n of t)await this.tryRenderELement(e,n);this.rendering=!1}async tryRenderELement(e,t){t.enthropy!==1||t.dead||await this.addMesh(e,t)}async loadMesh(e){let t=this.cache.get(e);return t||(t=await new Promise(n=>this.loader.load(e,n)),this.cache.set(e,t)),t.clone(!0)}async addMesh(e,t){const n=pi.getTemplates()[t.tryGetOnlyState()];if(!n||n.src==="void")return;const s=await this.loadMesh(n.src);s.rotateY(n.rotation*Math.PI/2),s.position.set((t.x-e.MAX_HORIZONTAL/2)*this.TILE_SIZE,0,(t.y-e.MAX_HORIZONTAL/2)*this.TILE_SIZE),s.material=this.material,this.group.add(s)}}let Ls,ci,qa;function rb(){if(ci.printFinishedSlice(),!ci.validataSolved())throw"validataion not passed";console.log("checks",Kr.checks.toLocaleString()),qa.tryRender(ci)}async function ob(i){const e=new Al(i);ci=new JM,Ls=new Kr(ci),qa=new sb(e),Ls.addEventListener("element_collapsed",()=>{qa.tryRender(ci)}),Ls.addEventListener("solving_finished",rb),ci.fill(),e.animate(),await Ls.run()}function ab(){Ls.stop()}const lb=hs({__name:"Generate",setup(i){const e=$s();return co(()=>{ob(e.value)}),Fh(()=>{ab()}),(t,n)=>{const s=hl("router-link");return Vn(),Fs(Pt,null,[mt(s,{to:"/editor",class:"btn editor-button"},{default:ao(()=>[ml("Editor")]),_:1}),Wt("div",{class:"canvas",ref_key:"canvas",ref:e},null,512)],64)}}});const cb=po(lb,[["__scopeId","data-v-0955bc4b"]]);class ub{constructor(){De(this,"objLoader",new Bf)}async loadMesh(e){let t;try{t=await new Promise((r,a)=>this.objLoader.load(e,r,()=>{},a));const n=new ds().setFromObject(t),s=new I;if(n.getSize(s),s.length()===0)return null}catch{return null}return t}}const kf=new ub,Bn=class Bn{constructor(){De(this,"renderer",new El);De(this,"camera",new Tt(40,Bn.WIDTH/Bn.HEIGHT,.1,1e3));De(this,"scene",new Pf);De(this,"group",new kn);this.renderer.setSize(Bn.WIDTH,Bn.HEIGHT),this.group.name="Container";const e=new $r(16777215,1);e.position.set(20,50,20),e.lookAt(0,0,0),this.scene.add(e);const t=new $r(13421772,1);t.position.set(-20,50,-20),t.lookAt(0,0,0),this.scene.add(t),this.camera.position.copy(new I(2,10,8)),this.camera.lookAt(new I(0,0,0)),this.scene.add(this.group)}async render(e){this.group.clear();const t=await kf.loadMesh(e);if(!t)return null;this.group.add(t),document.body.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera);const n=this.renderer.domElement.toDataURL();return document.body.removeChild(this.renderer.domElement),n}};De(Bn,"WIDTH",512),De(Bn,"HEIGHT",512);let Xa=Bn;const hb=new Xa;function fb(i,e=20){let t=0;return(...s)=>{clearTimeout(t),t=window.setTimeout(()=>i(...s),e)}}class db extends EventTarget{constructor(){super();De(this,"model",[]);De(this,"event",new Event("model_updated",{bubbles:!0}));this.addEventListener("model_updated",fb(this.serialize.bind(this),1e3)),window.setTimeout(this.load.bind(this),100)}addItem(t,n){const{x:s,y:r}=t,a=this.getCell(t);a?a.src=n:this.model.push({x:s,y:r,src:n,rotation:0}),this.dispatchEvent(this.event)}rotateItem(t){const n=this.getCell(t);n&&(n.rotation=(n.rotation+1)%4),this.dispatchEvent(this.event)}deleteCell(t){const{x:n,y:s}=t,r=this.model.findIndex(a=>a.x===n&&a.y===s);r!==-1&&this.model.splice(r,1),this.dispatchEvent(this.event)}getCell(t){const{x:n,y:s}=t;return this.model.find(r=>r.x===n&&r.y===s)??null}serialize(){localStorage.setItem("editor-model-data",JSON.stringify(this.model))}load(){const t=localStorage.getItem("editor-model-data");t&&(this.model=JSON.parse(t),this.dispatchEvent(this.event),pi.parse(this))}}class pb{constructor(e){De(this,"GRID_SIZE",2);De(this,"rayCaster",new WM);De(this,"dragPlane");De(this,"selectMesh");De(this,"editable",new kn);De(this,"state",{selected:new Le});De(this,"model",new db);this.graphics=e,this.dragPlane=this.addDragPlane(),this.selectMesh=this.addSelectMesh();const t=40,n=new jM(t*this.GRID_SIZE,t);this.graphics.scene.add(n),this.graphics.scene.add(this.editable),e.renderer.domElement.addEventListener("mousedown",s=>this.onMouseDown(s)),this.model.addEventListener("model_updated",this.renderComponents.bind(this))}addItem(e){console.log("this.state.selected",this.state.selected),this.model.addItem(this.state.selected,e)}rotateItem(){this.model.rotateItem(this.state.selected)}deleteCell(){this.model.deleteCell(this.state.selected)}async renderComponents(){this.editable.clear();for(let e=-40;e<=40;++e)for(let t=-40;t<=40;++t){const n=this.model.getCell(new Le(e,t));if(n){const s=await kf.loadMesh(n.src);s&&(s.position.copy(new I(e*this.GRID_SIZE+this.GRID_SIZE/2,this.GRID_SIZE/2,t*this.GRID_SIZE+this.GRID_SIZE/2)),s.rotateY(n.rotation*Math.PI/2),this.editable.add(s))}}}onMouseDown(e){if(e.button!==0)return;const t=this.getPoint(e),n=Math.floor(t.x/this.GRID_SIZE),s=Math.floor(t.z/this.GRID_SIZE);this.state.selected=new Le(n,s),this.selectMesh.position.copy(this.getSelectionPosition())}getSelectionPosition(){return new I(this.state.selected.x*this.GRID_SIZE+this.GRID_SIZE/2,this.GRID_SIZE/2,this.state.selected.y*this.GRID_SIZE+this.GRID_SIZE/2)}getPoint(e){const t=this.graphics.renderer.getContext().canvas.getBoundingClientRect(),n=new Le;n.x=(e.clientX-t.left)/(t.right-t.left)*2-1,n.y=-((e.clientY-t.top)/(t.bottom-t.top))*2+1,this.rayCaster.setFromCamera(n,this.graphics.camera);const s=this.rayCaster.intersectObjects([this.dragPlane]);return s.length!==0?s[0].point:new I(0,0,0)}addDragPlane(){const e=new yo(200,200),t=new qt(e,new vo({color:16777215,transparent:!0,opacity:.5}));return t.rotateOnAxis(new I(1,0,0),-Math.PI/2),t.name="drag plane",t.visible=!1,this.graphics.scene.add(t),t}addSelectMesh(){const e=new ps(2,2,2),t=new Nf({color:65280,linewidth:2,dashSize:.1,gapSize:.05}),n=new Xs(new LM(e),t);return n.computeLineDistances(),this.graphics.scene.add(n),n}}let ws;function Gf(){function i(s){const r=new Al(s);ws=new pb(r),r.animate()}function e(s){ws.addItem(s)}function t(){ws.rotateItem()}function n(){ws.deleteCell()}return{editor:ws,createEditor:i,addObject:e,rotateObject:t,deleteCell:n}}const mb=i=>(Kd("data-v-2b130574"),i=i(),Jd(),i),gb={class:"wrapper"},_b={class:"objects"},xb=mb(()=>Wt("div",{class:"object"},"void",-1)),vb={class:"object"},yb=["src","data-src"],Mb=hs({__name:"EditorMenu",setup(i){const e=$s([]),{addObject:t,rotateObject:n,deleteCell:s}=Gf();co(async()=>{const c=["void","meshes/corner.obj","meshes/wall.obj"];for(let l=0;l<c.length;++l){const u=c[l],h=await hb.render(u);h&&e.value.push({data:h,src:u})}});function r(c){const u=c.target.getAttribute("data-src");t(u)}function a(){n()}function o(){s()}return(c,l)=>{const u=hl("router-link");return Vn(),Fs("div",gb,[Wt("div",_b,[xb,(Vn(!0),Fs(Pt,null,xp(e.value,h=>(Vn(),Fs("div",vb,[Wt("img",{src:h.data,class:"object-image","data-src":h.src,onClick:r},null,8,yb)]))),256))]),Wt("button",{class:"btn",onClick:a},"Rotate"),Wt("button",{class:"btn",onClick:o},"Delete"),mt(u,{to:"generate",class:"btn"},{default:ao(()=>[ml("Generate")]),_:1})])}}});const bb=po(Mb,[["__scopeId","data-v-2b130574"]]),Sb={class:"layout"},wb=hs({__name:"EditorLayout",setup(i){return(e,t)=>(Vn(),Fs("div",Sb,[Wt("aside",null,[mt(bb)]),Wt("main",null,[vp(e.$slots,"default",{},void 0,!0)])]))}});const Eb=po(wb,[["__scopeId","data-v-736f7da2"]]),ih=hs({__name:"Editor",setup(i){const{createEditor:e}=Gf(),t=$s();return co(()=>e(t.value)),(n,s)=>(Vn(),pl(Eb,null,{default:ao(()=>[Wt("div",{class:"canvas",ref_key:"canvas",ref:t},null,512)]),_:1}))}});const Tb=[{path:"/",component:ih},{path:"/editor",component:ih},{path:"/generate",component:cb}],Ab=Eg({history:Gm(),routes:Tb}),Cb=bm(),bo=xm(Ng);bo.use(Ab);bo.use(Cb);bo.use(Dg);bo.mount("#app");
