var Jf=Object.defineProperty;var Qf=(i,e,t)=>e in i?Jf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ie=(i,e,t)=>(Qf(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Qa(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Ye={},Yi=[],$t=()=>{},ed=()=>!1,td=/^on[^a-z]/,so=i=>td.test(i),el=i=>i.startsWith("onUpdate:"),ot=Object.assign,tl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},nd=Object.prototype.hasOwnProperty,Ge=(i,e)=>nd.call(i,e),Fe=Array.isArray,Ds=i=>ro(i)==="[object Map]",id=i=>ro(i)==="[object Set]",ze=i=>typeof i=="function",at=i=>typeof i=="string",nl=i=>typeof i=="symbol",Je=i=>i!==null&&typeof i=="object",ch=i=>Je(i)&&ze(i.then)&&ze(i.catch),sd=Object.prototype.toString,ro=i=>sd.call(i),rd=i=>ro(i).slice(8,-1),od=i=>ro(i)==="[object Object]",il=i=>at(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Br=Qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ad=/-(\w)/g,pn=oo(i=>i.replace(ad,(e,t)=>t?t.toUpperCase():"")),ld=/\B([A-Z])/g,fs=oo(i=>i.replace(ld,"-$1").toLowerCase()),ao=oo(i=>i.charAt(0).toUpperCase()+i.slice(1)),Po=oo(i=>i?`on${ao(i)}`:""),Bs=(i,e)=>!Object.is(i,e),Do=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},qr=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},cd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let zl;const Ea=()=>zl||(zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=at(n)?dd(n):sl(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(at(i))return i;if(Je(i))return i}}const ud=/;(?![^(]*\))/g,hd=/:([^]+)/,fd=/\/\*[^]*?\*\//g;function dd(i){const e={};return i.replace(fd,"").split(ud).forEach(t=>{if(t){const n=t.split(hd);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function rl(i){let e="";if(at(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=rl(i[t]);n&&(e+=n+" ")}else if(Je(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",md=Qa(pd);function uh(i){return!!i||i===""}let Bt;class hh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function gd(i){return new hh(i)}function _d(i,e=Bt){e&&e.active&&e.effects.push(i)}function xd(){return Bt}const ol=i=>{const e=new Set(i);return e.w=0,e.n=0,e},fh=i=>(i.w&Zn)>0,dh=i=>(i.n&Zn)>0,vd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Zn},yd=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];fh(s)&&!dh(s)?s.delete(i):e[t++]=s,s.w&=~Zn,s.n&=~Zn}e.length=t}},Ta=new WeakMap;let Cs=0,Zn=1;const Aa=30;let Gt;const di=Symbol(""),Ca=Symbol("");class al{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,_d(this,n)}run(){if(!this.active)return this.fn();let e=Gt,t=Wn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,Wn=!0,Zn=1<<++Cs,Cs<=Aa?vd(this):Ul(this),this.fn()}finally{Cs<=Aa&&yd(this),Zn=1<<--Cs,Gt=this.parent,Wn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Ul(this),this.onStop&&this.onStop(),this.active=!1)}}function Ul(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Wn=!0;const ph=[];function ds(){ph.push(Wn),Wn=!1}function ps(){const i=ph.pop();Wn=i===void 0?!0:i}function At(i,e,t){if(Wn&&Gt){let n=Ta.get(i);n||Ta.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=ol()),mh(s)}}function mh(i,e){let t=!1;Cs<=Aa?dh(i)||(i.n|=Zn,t=!fh(i)):t=!i.has(Gt),t&&(i.add(Gt),Gt.deps.push(i))}function An(i,e,t,n,s,r){const a=Ta.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(i)){const l=Number(n);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(i)?il(t)&&o.push(a.get("length")):(o.push(a.get(di)),Ds(i)&&o.push(a.get(Ca)));break;case"delete":Fe(i)||(o.push(a.get(di)),Ds(i)&&o.push(a.get(Ca)));break;case"set":Ds(i)&&o.push(a.get(di));break}if(o.length===1)o[0]&&La(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);La(ol(l))}}function La(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&Bl(n);for(const n of t)n.computed||Bl(n)}function Bl(i,e){(i!==Gt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Md=Qa("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(nl)),bd=ll(),Sd=ll(!1,!0),wd=ll(!0),kl=Ed();function Ed(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ve(this);for(let r=0,a=this.length;r<a;r++)At(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Ve)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ds();const n=Ve(this)[e].apply(this,t);return ps(),n}}),i}function Td(i){const e=Ve(this);return At(e,"has",i),e.hasOwnProperty(i)}function ll(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?Hd:Mh:e?yh:vh).get(n))return n;const a=Fe(n);if(!i){if(a&&Ge(kl,s))return Reflect.get(kl,s,r);if(s==="hasOwnProperty")return Td}const o=Reflect.get(n,s,r);return(nl(s)?gh.has(s):Md(s))||(i||At(n,"get",s),e)?o:pt(o)?a&&il(s)?o:o.value:Je(o)?i?Sh(o):Ks(o):o}}const Ad=_h(),Cd=_h(!0);function _h(i=!1){return function(t,n,s,r){let a=t[n];if(ts(a)&&pt(a)&&!pt(s))return!1;if(!i&&(!Xr(s)&&!ts(s)&&(a=Ve(a),s=Ve(s)),!Fe(t)&&pt(a)&&!pt(s)))return a.value=s,!0;const o=Fe(t)&&il(n)?Number(n)<t.length:Ge(t,n),l=Reflect.set(t,n,s,r);return t===Ve(r)&&(o?Bs(s,a)&&An(t,"set",n,s):An(t,"add",n,s)),l}}function Ld(i,e){const t=Ge(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&An(i,"delete",e,void 0),n}function Rd(i,e){const t=Reflect.has(i,e);return(!nl(e)||!gh.has(e))&&At(i,"has",e),t}function Pd(i){return At(i,"iterate",Fe(i)?"length":di),Reflect.ownKeys(i)}const xh={get:bd,set:Ad,deleteProperty:Ld,has:Rd,ownKeys:Pd},Dd={get:wd,set(i,e){return!0},deleteProperty(i,e){return!0}},Id=ot({},xh,{get:Sd,set:Cd}),cl=i=>i,lo=i=>Reflect.getPrototypeOf(i);function sr(i,e,t=!1,n=!1){i=i.__v_raw;const s=Ve(i),r=Ve(e);t||(e!==r&&At(s,"get",e),At(s,"get",r));const{has:a}=lo(s),o=n?cl:t?dl:ks;if(a.call(s,e))return o(i.get(e));if(a.call(s,r))return o(i.get(r));i!==s&&i.get(e)}function rr(i,e=!1){const t=this.__v_raw,n=Ve(t),s=Ve(i);return e||(i!==s&&At(n,"has",i),At(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function or(i,e=!1){return i=i.__v_raw,!e&&At(Ve(i),"iterate",di),Reflect.get(i,"size",i)}function Gl(i){i=Ve(i);const e=Ve(this);return lo(e).has.call(e,i)||(e.add(i),An(e,"add",i,i)),this}function Hl(i,e){e=Ve(e);const t=Ve(this),{has:n,get:s}=lo(t);let r=n.call(t,i);r||(i=Ve(i),r=n.call(t,i));const a=s.call(t,i);return t.set(i,e),r?Bs(e,a)&&An(t,"set",i,e):An(t,"add",i,e),this}function Vl(i){const e=Ve(this),{has:t,get:n}=lo(e);let s=t.call(e,i);s||(i=Ve(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&An(e,"delete",i,void 0),r}function Wl(){const i=Ve(this),e=i.size!==0,t=i.clear();return e&&An(i,"clear",void 0,void 0),t}function ar(i,e){return function(n,s){const r=this,a=r.__v_raw,o=Ve(a),l=e?cl:i?dl:ks;return!i&&At(o,"iterate",di),a.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function lr(i,e,t){return function(...n){const s=this.__v_raw,r=Ve(s),a=Ds(r),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=s[i](...n),u=t?cl:e?dl:ks;return!e&&At(r,"iterate",l?Ca:di),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pn(i){return function(...e){return i==="delete"?!1:this}}function Fd(){const i={get(r){return sr(this,r)},get size(){return or(this)},has:rr,add:Gl,set:Hl,delete:Vl,clear:Wl,forEach:ar(!1,!1)},e={get(r){return sr(this,r,!1,!0)},get size(){return or(this)},has:rr,add:Gl,set:Hl,delete:Vl,clear:Wl,forEach:ar(!1,!0)},t={get(r){return sr(this,r,!0)},get size(){return or(this,!0)},has(r){return rr.call(this,r,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:ar(!0,!1)},n={get(r){return sr(this,r,!0,!0)},get size(){return or(this,!0)},has(r){return rr.call(this,r,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=lr(r,!1,!1),t[r]=lr(r,!0,!1),e[r]=lr(r,!1,!0),n[r]=lr(r,!0,!0)}),[i,t,e,n]}const[Nd,Od,zd,Ud]=Fd();function ul(i,e){const t=e?i?Ud:zd:i?Od:Nd;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Ge(t,s)&&s in n?t:n,s,r)}const Bd={get:ul(!1,!1)},kd={get:ul(!1,!0)},Gd={get:ul(!0,!1)},vh=new WeakMap,yh=new WeakMap,Mh=new WeakMap,Hd=new WeakMap;function Vd(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(i){return i.__v_skip||!Object.isExtensible(i)?0:Vd(rd(i))}function Ks(i){return ts(i)?i:hl(i,!1,xh,Bd,vh)}function bh(i){return hl(i,!1,Id,kd,yh)}function Sh(i){return hl(i,!0,Dd,Gd,Mh)}function hl(i,e,t,n,s){if(!Je(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const a=Wd(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return s.set(i,o),o}function Zi(i){return ts(i)?Zi(i.__v_raw):!!(i&&i.__v_isReactive)}function ts(i){return!!(i&&i.__v_isReadonly)}function Xr(i){return!!(i&&i.__v_isShallow)}function wh(i){return Zi(i)||ts(i)}function Ve(i){const e=i&&i.__v_raw;return e?Ve(e):i}function fl(i){return qr(i,"__v_skip",!0),i}const ks=i=>Je(i)?Ks(i):i,dl=i=>Je(i)?Sh(i):i;function Eh(i){Wn&&Gt&&(i=Ve(i),mh(i.dep||(i.dep=ol())))}function Th(i,e){i=Ve(i);const t=i.dep;t&&La(t)}function pt(i){return!!(i&&i.__v_isRef===!0)}function Js(i){return Ah(i,!1)}function jd(i){return Ah(i,!0)}function Ah(i,e){return pt(i)?i:new qd(i,e)}class qd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ve(e),this._value=t?e:ks(e)}get value(){return Eh(this),this._value}set value(e){const t=this.__v_isShallow||Xr(e)||ts(e);e=t?e:Ve(e),Bs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ks(e),Th(this))}}function Ki(i){return pt(i)?i.value:i}const Xd={get:(i,e,t)=>Ki(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return pt(s)&&!pt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Ch(i){return Zi(i)?i:new Proxy(i,Xd)}class $d{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new al(e,()=>{this._dirty||(this._dirty=!0,Th(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Ve(this);return Eh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yd(i,e,t=!1){let n,s;const r=ze(i);return r?(n=i,s=$t):(n=i.get,s=i.set),new $d(n,s,r||!s,t)}function jn(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){co(r,e,t)}return s}function Yt(i,e,t,n){if(ze(i)){const r=jn(i,e,t,n);return r&&ch(r)&&r.catch(a=>{co(a,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Yt(i[r],e,t,n));return s}function co(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){jn(l,null,10,[i,a,o]);return}}Zd(i,t,s,n)}function Zd(i,e,t,n=!0){console.error(i)}let Gs=!1,Ra=!1;const dt=[];let cn=0;const Ji=[];let bn=null,oi=0;const Lh=Promise.resolve();let pl=null;function Rh(i){const e=pl||Lh;return i?e.then(this?i.bind(this):i):e}function Kd(i){let e=cn+1,t=dt.length;for(;e<t;){const n=e+t>>>1;Hs(dt[n])<i?e=n+1:t=n}return e}function ml(i){(!dt.length||!dt.includes(i,Gs&&i.allowRecurse?cn+1:cn))&&(i.id==null?dt.push(i):dt.splice(Kd(i.id),0,i),Ph())}function Ph(){!Gs&&!Ra&&(Ra=!0,pl=Lh.then(Ih))}function Jd(i){const e=dt.indexOf(i);e>cn&&dt.splice(e,1)}function Qd(i){Fe(i)?Ji.push(...i):(!bn||!bn.includes(i,i.allowRecurse?oi+1:oi))&&Ji.push(i),Ph()}function jl(i,e=Gs?cn+1:0){for(;e<dt.length;e++){const t=dt[e];t&&t.pre&&(dt.splice(e,1),e--,t())}}function Dh(i){if(Ji.length){const e=[...new Set(Ji)];if(Ji.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((t,n)=>Hs(t)-Hs(n)),oi=0;oi<bn.length;oi++)bn[oi]();bn=null,oi=0}}const Hs=i=>i.id==null?1/0:i.id,ep=(i,e)=>{const t=Hs(i)-Hs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Ih(i){Ra=!1,Gs=!0,dt.sort(ep);const e=$t;try{for(cn=0;cn<dt.length;cn++){const t=dt[cn];t&&t.active!==!1&&jn(t,null,14)}}finally{cn=0,dt.length=0,Dh(),Gs=!1,pl=null,(dt.length||Ji.length)&&Ih()}}function tp(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ye;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[u]||Ye;f&&(s=t.map(p=>at(p)?p.trim():p)),h&&(s=t.map(cd))}let o,l=n[o=Po(e)]||n[o=Po(pn(e))];!l&&r&&(l=n[o=Po(fs(e))]),l&&Yt(l,i,6,s);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Yt(c,i,6,s)}}function Fh(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let a={},o=!1;if(!ze(i)){const l=c=>{const u=Fh(c,e,!0);u&&(o=!0,ot(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!o?(Je(i)&&n.set(i,null),null):(Fe(r)?r.forEach(l=>a[l]=null):ot(a,r),Je(i)&&n.set(i,a),a)}function uo(i,e){return!i||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(i,e[0].toLowerCase()+e.slice(1))||Ge(i,fs(e))||Ge(i,e))}let Mt=null,ho=null;function $r(i){const e=Mt;return Mt=i,ho=i&&i.type.__scopeId||null,e}function np(i){ho=i}function ip(){ho=null}function fo(i,e=Mt,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&nc(-1);const r=$r(e);let a;try{a=i(...s)}finally{$r(r),n._d&&nc(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Io(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const b=$r(i);try{if(t.shapeFlag&4){const T=s||n;d=an(u.call(T,T,h,r,p,f,g)),_=l}else{const T=e;d=an(T.length>1?T(r,{attrs:l,slots:o,emit:c}):T(r,null)),_=e.props?l:sp(l)}}catch(T){Ns.length=0,co(T,i,1),d=mt(ns)}let C=d;if(_&&m!==!1){const T=Object.keys(_),{shapeFlag:S}=C;T.length&&S&7&&(a&&T.some(el)&&(_=rp(_,a)),C=is(C,_))}return t.dirs&&(C=is(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),d=C,$r(b),d}const sp=i=>{let e;for(const t in i)(t==="class"||t==="style"||so(t))&&((e||(e={}))[t]=i[t]);return e},rp=(i,e)=>{const t={};for(const n in i)(!el(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function op(i,e,t){const{props:n,children:s,component:r}=i,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?ql(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==n[f]&&!uo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?ql(n,a,c):!0:!!a;return!1}function ql(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!uo(t,r))return!0}return!1}function ap({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const lp=i=>i.__isSuspense;function cp(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):Qd(i)}const cr={};function kr(i,e,t){return Nh(i,e,t)}function Nh(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:a}=Ye){var o;const l=xd()===((o=ct)==null?void 0:o.scope)?ct:null;let c,u=!1,h=!1;if(pt(i)?(c=()=>i.value,u=Xr(i)):Zi(i)?(c=()=>i,n=!0):Fe(i)?(h=!0,u=i.some(T=>Zi(T)||Xr(T)),c=()=>i.map(T=>{if(pt(T))return T.value;if(Zi(T))return qi(T);if(ze(T))return jn(T,l,2)})):ze(i)?e?c=()=>jn(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Yt(i,l,3,[p])}:c=$t,e&&n){const T=c;c=()=>qi(T())}let f,p=T=>{f=b.onStop=()=>{jn(T,l,4)}},g;if(Ws)if(p=$t,e?t&&Yt(e,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const T=nm();g=T.__watcherHandles||(T.__watcherHandles=[])}else return $t;let m=h?new Array(i.length).fill(cr):cr;const d=()=>{if(b.active)if(e){const T=b.run();(n||u||(h?T.some((S,P)=>Bs(S,m[P])):Bs(T,m)))&&(f&&f(),Yt(e,l,3,[T,m===cr?void 0:h&&m[0]===cr?[]:m,p]),m=T)}else b.run()};d.allowRecurse=!!e;let _;s==="sync"?_=d:s==="post"?_=()=>wt(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),_=()=>ml(d));const b=new al(c,_);e?t?d():m=b.run():s==="post"?wt(b.run.bind(b),l&&l.suspense):b.run();const C=()=>{b.stop(),l&&l.scope&&tl(l.scope.effects,b)};return g&&g.push(C),C}function up(i,e,t){const n=this.proxy,s=at(i)?i.includes(".")?Oh(n,i):()=>n[i]:i.bind(n,n);let r;ze(e)?r=e:(r=e.handler,t=e);const a=ct;ss(this);const o=Nh(s,r.bind(n),t);return a?ss(a):pi(),o}function Oh(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function qi(i,e){if(!Je(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),pt(i))qi(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)qi(i[t],e);else if(id(i)||Ds(i))i.forEach(t=>{qi(t,e)});else if(od(i))for(const t in i)qi(i[t],e);return i}function Jn(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[n];l&&(ds(),Yt(l,t,8,[i.el,o,i,e]),ps())}}function ms(i,e){return ze(i)?(()=>ot({name:i.name},e,{setup:i}))():i}const Is=i=>!!i.type.__asyncLoader,zh=i=>i.type.__isKeepAlive;function hp(i,e){Uh(i,"a",e)}function fp(i,e){Uh(i,"da",e)}function Uh(i,e,t=ct){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(po(e,n,t),t){let s=t.parent;for(;s&&s.parent;)zh(s.parent.vnode)&&dp(n,e,t,s),s=s.parent}}function dp(i,e,t,n){const s=po(e,i,n,!0);kh(()=>{tl(n[e],s)},t)}function po(i,e,t=ct,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ds(),ss(t);const o=Yt(e,t,i,a);return pi(),ps(),o});return n?s.unshift(r):s.push(r),r}}const Ln=i=>(e,t=ct)=>(!Ws||i==="sp")&&po(i,(...n)=>e(...n),t),pp=Ln("bm"),mo=Ln("m"),mp=Ln("bu"),gp=Ln("u"),Bh=Ln("bum"),kh=Ln("um"),_p=Ln("sp"),xp=Ln("rtg"),vp=Ln("rtc");function yp(i,e=ct){po("ec",i,e)}const Gh="components";function gl(i,e){return bp(Gh,i,!0,e)||i}const Mp=Symbol.for("v-ndc");function bp(i,e,t=!0,n=!1){const s=Mt||ct;if(s){const r=s.type;if(i===Gh){const o=Qp(r,!1);if(o&&(o===e||o===pn(e)||o===ao(pn(e))))return r}const a=Xl(s[i]||r[i],e)||Xl(s.appContext[i],e);return!a&&n?r:a}}function Xl(i,e){return i&&(i[e]||i[pn(e)]||i[ao(pn(e))])}function Sp(i,e,t,n){let s;const r=t&&t[n];if(Fe(i)||at(i)){s=new Array(i.length);for(let a=0,o=i.length;a<o;a++)s[a]=e(i[a],a,void 0,r&&r[a])}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(Je(i))if(i[Symbol.iterator])s=Array.from(i,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(i);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(i[c],c,o,r&&r[o])}}else s=[];return t&&(t[n]=s),s}function wp(i,e,t={},n,s){if(Mt.isCE||Mt.parent&&Is(Mt.parent)&&Mt.parent.isCE)return e!=="default"&&(t.name=e),mt("slot",t,n&&n());let r=i[e];r&&r._c&&(r._d=!1),qn();const a=r&&Hh(r(t)),o=vl(Pt,{key:t.key||a&&a.key||`_${e}`},a||(n?n():[]),a&&i._===1?64:-2);return!s&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),r&&r._c&&(r._d=!0),o}function Hh(i){return i.some(e=>Kr(e)?!(e.type===ns||e.type===Pt&&!Hh(e.children)):!0)?i:null}const Pa=i=>i?Qh(i)?Sl(i)||i.proxy:Pa(i.parent):null,Fs=ot(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Pa(i.parent),$root:i=>Pa(i.root),$emit:i=>i.emit,$options:i=>_l(i),$forceUpdate:i=>i.f||(i.f=()=>ml(i.update)),$nextTick:i=>i.n||(i.n=Rh.bind(i.proxy)),$watch:i=>up.bind(i)}),Fo=(i,e)=>i!==Ye&&!i.__isScriptSetup&&Ge(i,e),Ep={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fo(n,e))return a[e]=1,n[e];if(s!==Ye&&Ge(s,e))return a[e]=2,s[e];if((c=i.propsOptions[0])&&Ge(c,e))return a[e]=3,r[e];if(t!==Ye&&Ge(t,e))return a[e]=4,t[e];Da&&(a[e]=0)}}const u=Fs[e];let h,f;if(u)return e==="$attrs"&&At(i,"get",e),u(i);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==Ye&&Ge(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ge(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Fo(s,e)?(s[e]=t,!0):n!==Ye&&Ge(n,e)?(n[e]=t,!0):Ge(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!t[a]||i!==Ye&&Ge(i,a)||Fo(e,a)||(o=r[0])&&Ge(o,a)||Ge(n,a)||Ge(Fs,a)||Ge(s.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ge(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function $l(i){return Fe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Da=!0;function Tp(i){const e=_l(i),t=i.proxy,n=i.ctx;Da=!1,e.beforeCreate&&Yl(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:b,destroyed:C,unmounted:T,render:S,renderTracked:P,renderTriggered:N,errorCaptured:M,serverPrefetch:R,expose:z,inheritAttrs:U,components:ye,directives:ue,filters:O}=e;if(c&&Ap(c,n,null),a)for(const j in a){const W=a[j];ze(W)&&(n[j]=W.bind(t))}if(s){const j=s.call(t,t);Je(j)&&(i.data=Ks(j))}if(Da=!0,r)for(const j in r){const W=r[j],X=ze(W)?W.bind(t,t):ze(W.get)?W.get.bind(t,t):$t,ee=!ze(W)&&ze(W.set)?W.set.bind(t):$t,fe=Ht({get:X,set:ee});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>fe.value,set:le=>fe.value=le})}if(o)for(const j in o)Vh(o[j],n,t,j);if(l){const j=ze(l)?l.call(t):l;Reflect.ownKeys(j).forEach(W=>{Gr(W,j[W])})}u&&Yl(u,i,"c");function k(j,W){Fe(W)?W.forEach(X=>j(X.bind(t))):W&&j(W.bind(t))}if(k(pp,h),k(mo,f),k(mp,p),k(gp,g),k(hp,m),k(fp,d),k(yp,M),k(vp,P),k(xp,N),k(Bh,b),k(kh,T),k(_p,R),Fe(z))if(z.length){const j=i.exposed||(i.exposed={});z.forEach(W=>{Object.defineProperty(j,W,{get:()=>t[W],set:X=>t[W]=X})})}else i.exposed||(i.exposed={});S&&i.render===$t&&(i.render=S),U!=null&&(i.inheritAttrs=U),ye&&(i.components=ye),ue&&(i.directives=ue)}function Ap(i,e,t=$t){Fe(i)&&(i=Ia(i));for(const n in i){const s=i[n];let r;Je(s)?"default"in s?r=En(s.from||n,s.default,!0):r=En(s.from||n):r=En(s),pt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[n]=r}}function Yl(i,e,t){Yt(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Vh(i,e,t,n){const s=n.includes(".")?Oh(t,n):()=>t[n];if(at(i)){const r=e[i];ze(r)&&kr(s,r)}else if(ze(i))kr(s,i.bind(t));else if(Je(i))if(Fe(i))i.forEach(r=>Vh(r,e,t,n));else{const r=ze(i.handler)?i.handler.bind(t):e[i.handler];ze(r)&&kr(s,r,i)}}function _l(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=i.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Yr(l,c,a,!0)),Yr(l,e,a)),Je(e)&&r.set(e,l),l}function Yr(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Yr(i,r,t,!0),s&&s.forEach(a=>Yr(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Cp[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const Cp={data:Zl,props:Kl,emits:Kl,methods:Ls,computed:Ls,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Ls,directives:Ls,watch:Rp,provide:Zl,inject:Lp};function Zl(i,e){return e?i?function(){return ot(ze(i)?i.call(this,this):i,ze(e)?e.call(this,this):e)}:e:i}function Lp(i,e){return Ls(Ia(i),Ia(e))}function Ia(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function vt(i,e){return i?[...new Set([].concat(i,e))]:e}function Ls(i,e){return i?ot(Object.create(null),i,e):e}function Kl(i,e){return i?Fe(i)&&Fe(e)?[...new Set([...i,...e])]:ot(Object.create(null),$l(i),$l(e??{})):e}function Rp(i,e){if(!i)return e;if(!e)return i;const t=ot(Object.create(null),i);for(const n in e)t[n]=vt(i[n],e[n]);return t}function Wh(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pp=0;function Dp(i,e){return function(n,s=null){ze(n)||(n=ot({},n)),s!=null&&!Je(s)&&(s=null);const r=Wh(),a=new Set;let o=!1;const l=r.app={_uid:Pp++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:im,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&ze(c.install)?(a.add(c),c.install(l,...u)):ze(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!o){const f=mt(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),o=!0,l._container=c,c.__vue_app__=l,Sl(f.component)||f.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Zr=l;try{return c()}finally{Zr=null}}};return l}}let Zr=null;function Gr(i,e){if(ct){let t=ct.provides;const n=ct.parent&&ct.parent.provides;n===t&&(t=ct.provides=Object.create(n)),t[i]=e}}function En(i,e,t=!1){const n=ct||Mt;if(n||Zr){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Zr._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&ze(e)?e.call(n&&n.proxy):e}}function Ip(i,e,t,n=!1){const s={},r={};qr(r,_o,1),i.propsDefaults=Object.create(null),jh(i,e,s,r);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);t?i.props=n?s:bh(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Fp(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=i,o=Ve(s),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(uo(i.emitsOptions,f))continue;const p=e[f];if(l)if(Ge(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=pn(f);s[g]=Fa(l,o,g,p,i,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{jh(i,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!Ge(e,h)&&((u=fs(h))===h||!Ge(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Fa(l,o,h,void 0,i,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!Ge(e,h))&&(delete r[h],c=!0)}c&&An(i,"set","$attrs")}function jh(i,e,t,n){const[s,r]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;s&&Ge(s,u=pn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:uo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(r){const l=Ve(t),c=o||Ye;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Fa(s,l,h,c[h],i,!Ge(c,h))}}return a}function Fa(i,e,t,n,s,r){const a=i[t];if(a!=null){const o=Ge(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ze(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(ss(s),n=c[t]=l.call(null,e),pi())}else n=l}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===fs(t))&&(n=!0))}return n}function qh(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,a={},o=[];let l=!1;if(!ze(i)){const u=h=>{l=!0;const[f,p]=qh(h,e,!0);ot(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return Je(i)&&n.set(i,Yi),Yi;if(Fe(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);Jl(h)&&(a[h]=Ye)}else if(r)for(const u in r){const h=pn(u);if(Jl(h)){const f=r[u],p=a[h]=Fe(f)||ze(f)?{type:f}:ot({},f);if(p){const g=tc(Boolean,p.type),m=tc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ge(p,"default"))&&o.push(h)}}}const c=[a,o];return Je(i)&&n.set(i,c),c}function Jl(i){return i[0]!=="$"}function Ql(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function ec(i,e){return Ql(i)===Ql(e)}function tc(i,e){return Fe(e)?e.findIndex(t=>ec(t,i)):ze(e)&&ec(e,i)?0:-1}const Xh=i=>i[0]==="_"||i==="$stable",xl=i=>Fe(i)?i.map(an):[an(i)],Np=(i,e,t)=>{if(e._n)return e;const n=fo((...s)=>xl(e(...s)),t);return n._c=!1,n},$h=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Xh(s))continue;const r=i[s];if(ze(r))e[s]=Np(s,r,n);else if(r!=null){const a=xl(r);e[s]=()=>a}}},Yh=(i,e)=>{const t=xl(e);i.slots.default=()=>t},Op=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ve(e),qr(e,"_",t)):$h(e,i.slots={})}else i.slots={},e&&Yh(i,e);qr(i.slots,_o,1)},zp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,a=Ye;if(n.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(ot(s,e),!t&&o===1&&delete s._):(r=!e.$stable,$h(e,s)),a=e}else e&&(Yh(i,e),a={default:1});if(r)for(const o in s)!Xh(o)&&!(o in a)&&delete s[o]};function Na(i,e,t,n,s=!1){if(Fe(i)){i.forEach((f,p)=>Na(f,e&&(Fe(e)?e[p]:e),t,n,s));return}if(Is(n)&&!s)return;const r=n.shapeFlag&4?Sl(n.component)||n.component.proxy:n.el,a=s?null:r,{i:o,r:l}=i,c=e&&e.r,u=o.refs===Ye?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(at(c)?(u[c]=null,Ge(h,c)&&(h[c]=null)):pt(c)&&(c.value=null)),ze(l))jn(l,o,12,[a,u]);else{const f=at(l),p=pt(l);if(f||p){const g=()=>{if(i.f){const m=f?Ge(h,l)?h[l]:u[l]:l.value;s?Fe(m)&&tl(m,r):Fe(m)?m.includes(r)||m.push(r):f?(u[l]=[r],Ge(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=a,Ge(h,l)&&(h[l]=a)):p&&(l.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,wt(g,t)):g()}}}const wt=cp;function Up(i){return Bp(i)}function Bp(i,e){const t=Ea();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=$t,insertStaticContent:g}=i,m=(w,A,D,H=null,Z=null,se=null,pe=!1,te=null,me=!!A.dynamicChildren)=>{if(w===A)return;w&&!bs(w,A)&&(H=G(w),le(w,Z,se,!0),w=null),A.patchFlag===-2&&(me=!1,A.dynamicChildren=null);const{type:ae,ref:v,shapeFlag:x}=A;switch(ae){case go:d(w,A,D,H);break;case ns:_(w,A,D,H);break;case No:w==null&&b(A,D,H,pe);break;case Pt:ye(w,A,D,H,Z,se,pe,te,me);break;default:x&1?S(w,A,D,H,Z,se,pe,te,me):x&6?ue(w,A,D,H,Z,se,pe,te,me):(x&64||x&128)&&ae.process(w,A,D,H,Z,se,pe,te,me,J)}v!=null&&Z&&Na(v,w&&w.ref,se,A||w,!A)},d=(w,A,D,H)=>{if(w==null)n(A.el=o(A.children),D,H);else{const Z=A.el=w.el;A.children!==w.children&&c(Z,A.children)}},_=(w,A,D,H)=>{w==null?n(A.el=l(A.children||""),D,H):A.el=w.el},b=(w,A,D,H)=>{[w.el,w.anchor]=g(w.children,A,D,H,w.el,w.anchor)},C=({el:w,anchor:A},D,H)=>{let Z;for(;w&&w!==A;)Z=f(w),n(w,D,H),w=Z;n(A,D,H)},T=({el:w,anchor:A})=>{let D;for(;w&&w!==A;)D=f(w),s(w),w=D;s(A)},S=(w,A,D,H,Z,se,pe,te,me)=>{pe=pe||A.type==="svg",w==null?P(A,D,H,Z,se,pe,te,me):R(w,A,Z,se,pe,te,me)},P=(w,A,D,H,Z,se,pe,te)=>{let me,ae;const{type:v,props:x,shapeFlag:F,transition:q,dirs:Q}=w;if(me=w.el=a(w.type,se,x&&x.is,x),F&8?u(me,w.children):F&16&&M(w.children,me,null,H,Z,se&&v!=="foreignObject",pe,te),Q&&Jn(w,null,H,"created"),N(me,w,w.scopeId,pe,H),x){for(const Me in x)Me!=="value"&&!Br(Me)&&r(me,Me,null,x[Me],se,w.children,H,Z,$);"value"in x&&r(me,"value",null,x.value),(ae=x.onVnodeBeforeMount)&&sn(ae,H,w)}Q&&Jn(w,null,H,"beforeMount");const ce=(!Z||Z&&!Z.pendingBranch)&&q&&!q.persisted;ce&&q.beforeEnter(me),n(me,A,D),((ae=x&&x.onVnodeMounted)||ce||Q)&&wt(()=>{ae&&sn(ae,H,w),ce&&q.enter(me),Q&&Jn(w,null,H,"mounted")},Z)},N=(w,A,D,H,Z)=>{if(D&&p(w,D),H)for(let se=0;se<H.length;se++)p(w,H[se]);if(Z){let se=Z.subTree;if(A===se){const pe=Z.vnode;N(w,pe,pe.scopeId,pe.slotScopeIds,Z.parent)}}},M=(w,A,D,H,Z,se,pe,te,me=0)=>{for(let ae=me;ae<w.length;ae++){const v=w[ae]=te?kn(w[ae]):an(w[ae]);m(null,v,A,D,H,Z,se,pe,te)}},R=(w,A,D,H,Z,se,pe)=>{const te=A.el=w.el;let{patchFlag:me,dynamicChildren:ae,dirs:v}=A;me|=w.patchFlag&16;const x=w.props||Ye,F=A.props||Ye;let q;D&&Qn(D,!1),(q=F.onVnodeBeforeUpdate)&&sn(q,D,A,w),v&&Jn(A,w,D,"beforeUpdate"),D&&Qn(D,!0);const Q=Z&&A.type!=="foreignObject";if(ae?z(w.dynamicChildren,ae,te,D,H,Q,se):pe||W(w,A,te,null,D,H,Q,se,!1),me>0){if(me&16)U(te,A,x,F,D,H,Z);else if(me&2&&x.class!==F.class&&r(te,"class",null,F.class,Z),me&4&&r(te,"style",x.style,F.style,Z),me&8){const ce=A.dynamicProps;for(let Me=0;Me<ce.length;Me++){const y=ce[Me],ne=x[y],ge=F[y];(ge!==ne||y==="value")&&r(te,y,ne,ge,Z,w.children,D,H,$)}}me&1&&w.children!==A.children&&u(te,A.children)}else!pe&&ae==null&&U(te,A,x,F,D,H,Z);((q=F.onVnodeUpdated)||v)&&wt(()=>{q&&sn(q,D,A,w),v&&Jn(A,w,D,"updated")},H)},z=(w,A,D,H,Z,se,pe)=>{for(let te=0;te<A.length;te++){const me=w[te],ae=A[te],v=me.el&&(me.type===Pt||!bs(me,ae)||me.shapeFlag&70)?h(me.el):D;m(me,ae,v,null,H,Z,se,pe,!0)}},U=(w,A,D,H,Z,se,pe)=>{if(D!==H){if(D!==Ye)for(const te in D)!Br(te)&&!(te in H)&&r(w,te,D[te],null,pe,A.children,Z,se,$);for(const te in H){if(Br(te))continue;const me=H[te],ae=D[te];me!==ae&&te!=="value"&&r(w,te,ae,me,pe,A.children,Z,se,$)}"value"in H&&r(w,"value",D.value,H.value)}},ye=(w,A,D,H,Z,se,pe,te,me)=>{const ae=A.el=w?w.el:o(""),v=A.anchor=w?w.anchor:o("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:q}=A;q&&(te=te?te.concat(q):q),w==null?(n(ae,D,H),n(v,D,H),M(A.children,D,v,Z,se,pe,te,me)):x>0&&x&64&&F&&w.dynamicChildren?(z(w.dynamicChildren,F,D,Z,se,pe,te),(A.key!=null||Z&&A===Z.subTree)&&Zh(w,A,!0)):W(w,A,D,v,Z,se,pe,te,me)},ue=(w,A,D,H,Z,se,pe,te,me)=>{A.slotScopeIds=te,w==null?A.shapeFlag&512?Z.ctx.activate(A,D,H,pe,me):O(A,D,H,Z,se,pe,me):ie(w,A,me)},O=(w,A,D,H,Z,se,pe)=>{const te=w.component=$p(w,H,Z);if(zh(w)&&(te.ctx.renderer=J),Yp(te),te.asyncDep){if(Z&&Z.registerDep(te,k),!w.el){const me=te.subTree=mt(ns);_(null,me,A,D)}return}k(te,w,A,D,Z,se,pe)},ie=(w,A,D)=>{const H=A.component=w.component;if(op(w,A,D))if(H.asyncDep&&!H.asyncResolved){j(H,A,D);return}else H.next=A,Jd(H.update),H.update();else A.el=w.el,H.vnode=A},k=(w,A,D,H,Z,se,pe)=>{const te=()=>{if(w.isMounted){let{next:v,bu:x,u:F,parent:q,vnode:Q}=w,ce=v,Me;Qn(w,!1),v?(v.el=Q.el,j(w,v,pe)):v=Q,x&&Do(x),(Me=v.props&&v.props.onVnodeBeforeUpdate)&&sn(Me,q,v,Q),Qn(w,!0);const y=Io(w),ne=w.subTree;w.subTree=y,m(ne,y,h(ne.el),G(ne),w,Z,se),v.el=y.el,ce===null&&ap(w,y.el),F&&wt(F,Z),(Me=v.props&&v.props.onVnodeUpdated)&&wt(()=>sn(Me,q,v,Q),Z)}else{let v;const{el:x,props:F}=A,{bm:q,m:Q,parent:ce}=w,Me=Is(A);if(Qn(w,!1),q&&Do(q),!Me&&(v=F&&F.onVnodeBeforeMount)&&sn(v,ce,A),Qn(w,!0),x&&Ee){const y=()=>{w.subTree=Io(w),Ee(x,w.subTree,w,Z,null)};Me?A.type.__asyncLoader().then(()=>!w.isUnmounted&&y()):y()}else{const y=w.subTree=Io(w);m(null,y,D,H,w,Z,se),A.el=y.el}if(Q&&wt(Q,Z),!Me&&(v=F&&F.onVnodeMounted)){const y=A;wt(()=>sn(v,ce,y),Z)}(A.shapeFlag&256||ce&&Is(ce.vnode)&&ce.vnode.shapeFlag&256)&&w.a&&wt(w.a,Z),w.isMounted=!0,A=D=H=null}},me=w.effect=new al(te,()=>ml(ae),w.scope),ae=w.update=()=>me.run();ae.id=w.uid,Qn(w,!0),ae()},j=(w,A,D)=>{A.component=w;const H=w.vnode.props;w.vnode=A,w.next=null,Fp(w,A.props,H,D),zp(w,A.children,D),ds(),jl(),ps()},W=(w,A,D,H,Z,se,pe,te,me=!1)=>{const ae=w&&w.children,v=w?w.shapeFlag:0,x=A.children,{patchFlag:F,shapeFlag:q}=A;if(F>0){if(F&128){ee(ae,x,D,H,Z,se,pe,te,me);return}else if(F&256){X(ae,x,D,H,Z,se,pe,te,me);return}}q&8?(v&16&&$(ae,Z,se),x!==ae&&u(D,x)):v&16?q&16?ee(ae,x,D,H,Z,se,pe,te,me):$(ae,Z,se,!0):(v&8&&u(D,""),q&16&&M(x,D,H,Z,se,pe,te,me))},X=(w,A,D,H,Z,se,pe,te,me)=>{w=w||Yi,A=A||Yi;const ae=w.length,v=A.length,x=Math.min(ae,v);let F;for(F=0;F<x;F++){const q=A[F]=me?kn(A[F]):an(A[F]);m(w[F],q,D,null,Z,se,pe,te,me)}ae>v?$(w,Z,se,!0,!1,x):M(A,D,H,Z,se,pe,te,me,x)},ee=(w,A,D,H,Z,se,pe,te,me)=>{let ae=0;const v=A.length;let x=w.length-1,F=v-1;for(;ae<=x&&ae<=F;){const q=w[ae],Q=A[ae]=me?kn(A[ae]):an(A[ae]);if(bs(q,Q))m(q,Q,D,null,Z,se,pe,te,me);else break;ae++}for(;ae<=x&&ae<=F;){const q=w[x],Q=A[F]=me?kn(A[F]):an(A[F]);if(bs(q,Q))m(q,Q,D,null,Z,se,pe,te,me);else break;x--,F--}if(ae>x){if(ae<=F){const q=F+1,Q=q<v?A[q].el:H;for(;ae<=F;)m(null,A[ae]=me?kn(A[ae]):an(A[ae]),D,Q,Z,se,pe,te,me),ae++}}else if(ae>F)for(;ae<=x;)le(w[ae],Z,se,!0),ae++;else{const q=ae,Q=ae,ce=new Map;for(ae=Q;ae<=F;ae++){const he=A[ae]=me?kn(A[ae]):an(A[ae]);he.key!=null&&ce.set(he.key,ae)}let Me,y=0;const ne=F-Q+1;let ge=!1,_e=0;const L=new Array(ne);for(ae=0;ae<ne;ae++)L[ae]=0;for(ae=q;ae<=x;ae++){const he=w[ae];if(y>=ne){le(he,Z,se,!0);continue}let Te;if(he.key!=null)Te=ce.get(he.key);else for(Me=Q;Me<=F;Me++)if(L[Me-Q]===0&&bs(he,A[Me])){Te=Me;break}Te===void 0?le(he,Z,se,!0):(L[Te-Q]=ae+1,Te>=_e?_e=Te:ge=!0,m(he,A[Te],D,null,Z,se,pe,te,me),y++)}const xe=ge?kp(L):Yi;for(Me=xe.length-1,ae=ne-1;ae>=0;ae--){const he=Q+ae,Te=A[he],be=he+1<v?A[he+1].el:H;L[ae]===0?m(null,Te,D,be,Z,se,pe,te,me):ge&&(Me<0||ae!==xe[Me]?fe(Te,D,be,2):Me--)}}},fe=(w,A,D,H,Z=null)=>{const{el:se,type:pe,transition:te,children:me,shapeFlag:ae}=w;if(ae&6){fe(w.component.subTree,A,D,H);return}if(ae&128){w.suspense.move(A,D,H);return}if(ae&64){pe.move(w,A,D,J);return}if(pe===Pt){n(se,A,D);for(let x=0;x<me.length;x++)fe(me[x],A,D,H);n(w.anchor,A,D);return}if(pe===No){C(w,A,D);return}if(H!==2&&ae&1&&te)if(H===0)te.beforeEnter(se),n(se,A,D),wt(()=>te.enter(se),Z);else{const{leave:x,delayLeave:F,afterLeave:q}=te,Q=()=>n(se,A,D),ce=()=>{x(se,()=>{Q(),q&&q()})};F?F(se,Q,ce):ce()}else n(se,A,D)},le=(w,A,D,H=!1,Z=!1)=>{const{type:se,props:pe,ref:te,children:me,dynamicChildren:ae,shapeFlag:v,patchFlag:x,dirs:F}=w;if(te!=null&&Na(te,null,D,w,!0),v&256){A.ctx.deactivate(w);return}const q=v&1&&F,Q=!Is(w);let ce;if(Q&&(ce=pe&&pe.onVnodeBeforeUnmount)&&sn(ce,A,w),v&6)Ae(w.component,D,H);else{if(v&128){w.suspense.unmount(D,H);return}q&&Jn(w,null,A,"beforeUnmount"),v&64?w.type.remove(w,A,D,Z,J,H):ae&&(se!==Pt||x>0&&x&64)?$(ae,A,D,!1,!0):(se===Pt&&x&384||!Z&&v&16)&&$(me,A,D),H&&de(w)}(Q&&(ce=pe&&pe.onVnodeUnmounted)||q)&&wt(()=>{ce&&sn(ce,A,w),q&&Jn(w,null,A,"unmounted")},D)},de=w=>{const{type:A,el:D,anchor:H,transition:Z}=w;if(A===Pt){we(D,H);return}if(A===No){T(w);return}const se=()=>{s(D),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:pe,delayLeave:te}=Z,me=()=>pe(D,se);te?te(w.el,se,me):me()}else se()},we=(w,A)=>{let D;for(;w!==A;)D=f(w),s(w),w=D;s(A)},Ae=(w,A,D)=>{const{bum:H,scope:Z,update:se,subTree:pe,um:te}=w;H&&Do(H),Z.stop(),se&&(se.active=!1,le(pe,w,A,D)),te&&wt(te,A),wt(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},$=(w,A,D,H=!1,Z=!1,se=0)=>{for(let pe=se;pe<w.length;pe++)le(w[pe],A,D,H,Z)},G=w=>w.shapeFlag&6?G(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),re=(w,A,D)=>{w==null?A._vnode&&le(A._vnode,null,null,!0):m(A._vnode||null,w,A,null,null,null,D),jl(),Dh(),A._vnode=w},J={p:m,um:le,m:fe,r:de,mt:O,mc:M,pc:W,pbc:z,n:G,o:i};let K,Ee;return e&&([K,Ee]=e(J)),{render:re,hydrate:K,createApp:Dp(re,K)}}function Qn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Zh(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=kn(s[r]),o.el=a.el),t||Zh(a,o)),o.type===go&&(o.el=a.el)}}function kp(i){const e=i.slice(),t=[0];let n,s,r,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,i[t[o]]<c?r=o+1:a=o;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const Gp=i=>i.__isTeleport,Pt=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),Ns=[];let Wt=null;function qn(i=!1){Ns.push(Wt=i?null:[])}function Hp(){Ns.pop(),Wt=Ns[Ns.length-1]||null}let Vs=1;function nc(i){Vs+=i}function Kh(i){return i.dynamicChildren=Vs>0?Wt||Yi:null,Hp(),Vs>0&&Wt&&Wt.push(i),i}function Os(i,e,t,n,s,r){return Kh(jt(i,e,t,n,s,r,!0))}function vl(i,e,t,n,s){return Kh(mt(i,e,t,n,s,!0))}function Kr(i){return i?i.__v_isVNode===!0:!1}function bs(i,e){return i.type===e.type&&i.key===e.key}const _o="__vInternal",Jh=({key:i})=>i??null,Hr=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?at(i)||pt(i)||ze(i)?{i:Mt,r:i,k:e,f:!!t}:i:null);function jt(i,e=null,t=null,n=0,s=null,r=i===Pt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Jh(e),ref:e&&Hr(e),scopeId:ho,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return o?(Ml(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=at(t)?8:16),Vs>0&&!a&&Wt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Wt.push(l),l}const mt=Vp;function Vp(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Mp)&&(i=ns),Kr(i)){const o=is(i,e,!0);return t&&Ml(o,t),Vs>0&&!r&&Wt&&(o.shapeFlag&6?Wt[Wt.indexOf(i)]=o:Wt.push(o)),o.patchFlag|=-2,o}if(em(i)&&(i=i.__vccOpts),e){e=Wp(e);let{class:o,style:l}=e;o&&!at(o)&&(e.class=rl(o)),Je(l)&&(wh(l)&&!Fe(l)&&(l=ot({},l)),e.style=sl(l))}const a=at(i)?1:lp(i)?128:Gp(i)?64:Je(i)?4:ze(i)?2:0;return jt(i,e,t,n,s,a,r,!0)}function Wp(i){return i?wh(i)||_o in i?ot({},i):i:null}function is(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:a}=i,o=e?jp(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&Jh(o),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Hr(e)):[s,Hr(e)]:Hr(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Pt?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&is(i.ssContent),ssFallback:i.ssFallback&&is(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function yl(i=" ",e=0){return mt(go,null,i,e)}function an(i){return i==null||typeof i=="boolean"?mt(ns):Fe(i)?mt(Pt,null,i.slice()):typeof i=="object"?kn(i):mt(go,null,String(i))}function kn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:is(i)}function Ml(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Ml(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(_o in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Mt},t=32):(e=String(e),n&64?(t=16,e=[yl(e)]):t=8);i.children=e,i.shapeFlag|=t}function jp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=rl([e.class,n.class]));else if(s==="style")e.style=sl([e.style,n.style]);else if(so(s)){const r=e[s],a=n[s];a&&r!==a&&!(Fe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=n[s])}return e}function sn(i,e,t,n=null){Yt(i,e,7,[t,n])}const qp=Wh();let Xp=0;function $p(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||qp,r={uid:Xp++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qh(n,s),emitsOptions:Fh(n,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:n.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tp.bind(null,r),i.ce&&i.ce(r),r}let ct=null,bl,wi,ic="__VUE_INSTANCE_SETTERS__";(wi=Ea()[ic])||(wi=Ea()[ic]=[]),wi.push(i=>ct=i),bl=i=>{wi.length>1?wi.forEach(e=>e(i)):wi[0](i)};const ss=i=>{bl(i),i.scope.on()},pi=()=>{ct&&ct.scope.off(),bl(null)};function Qh(i){return i.vnode.shapeFlag&4}let Ws=!1;function Yp(i,e=!1){Ws=e;const{props:t,children:n}=i.vnode,s=Qh(i);Ip(i,t,s,e),Op(i,n);const r=s?Zp(i,e):void 0;return Ws=!1,r}function Zp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=fl(new Proxy(i.ctx,Ep));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Jp(i):null;ss(i),ds();const r=jn(n,i,0,[i.props,s]);if(ps(),pi(),ch(r)){if(r.then(pi,pi),e)return r.then(a=>{sc(i,a,e)}).catch(a=>{co(a,i,0)});i.asyncDep=r}else sc(i,r,e)}else ef(i,e)}function sc(i,e,t){ze(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Je(e)&&(i.setupState=Ch(e)),ef(i,t)}let rc;function ef(i,e,t){const n=i.type;if(!i.render){if(!e&&rc&&!n.render){const s=n.template||_l(i).template;if(s){const{isCustomElement:r,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=ot(ot({isCustomElement:r,delimiters:o},a),l);n.render=rc(s,c)}}i.render=n.render||$t}ss(i),ds(),Tp(i),ps(),pi()}function Kp(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return At(i,"get","$attrs"),e[t]}}))}function Jp(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return Kp(i)},slots:i.slots,emit:i.emit,expose:e}}function Sl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Ch(fl(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](i)},has(e,t){return t in e||t in Fs}}))}function Qp(i,e=!0){return ze(i)?i.displayName||i.name:i.name||e&&i.__name}function em(i){return ze(i)&&"__vccOpts"in i}const Ht=(i,e)=>Yd(i,e,Ws);function tf(i,e,t){const n=arguments.length;return n===2?Je(e)&&!Fe(e)?Kr(e)?mt(i,null,[e]):mt(i,e):mt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Kr(t)&&(t=[t]),mt(i,e,t))}const tm=Symbol.for("v-scx"),nm=()=>En(tm),im="3.3.4",sm="http://www.w3.org/2000/svg",ai=typeof document<"u"?document:null,oc=ai&&ai.createElement("template"),rm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?ai.createElementNS(sm,i):ai.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ai.createTextNode(i),createComment:i=>ai.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ai.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{oc.innerHTML=n?`<svg>${i}</svg>`:i;const o=oc.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function om(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function am(i,e,t){const n=i.style,s=at(t);if(t&&!s){if(e&&!at(e))for(const r in e)t[r]==null&&Oa(n,r,"");for(const r in t)Oa(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const ac=/\s*!important$/;function Oa(i,e,t){if(Fe(t))t.forEach(n=>Oa(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=lm(i,e);ac.test(t)?i.setProperty(fs(n),t.replace(ac,""),"important"):i[n]=t}}const lc=["Webkit","Moz","ms"],Oo={};function lm(i,e){const t=Oo[e];if(t)return t;let n=pn(e);if(n!=="filter"&&n in i)return Oo[e]=n;n=ao(n);for(let s=0;s<lc.length;s++){const r=lc[s]+n;if(r in i)return Oo[e]=r}return e}const cc="http://www.w3.org/1999/xlink";function cm(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(cc,e.slice(6,e.length)):i.setAttributeNS(cc,e,t);else{const r=md(e);t==null||r&&!uh(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function um(i,e,t,n,s,r,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,s,r),i[e]=t??"";return}const o=i.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){i._value=t;const c=o==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=uh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function hm(i,e,t,n){i.addEventListener(e,t,n)}function fm(i,e,t,n){i.removeEventListener(e,t,n)}function dm(i,e,t,n,s=null){const r=i._vei||(i._vei={}),a=r[e];if(n&&a)a.value=n;else{const[o,l]=pm(e);if(n){const c=r[e]=_m(n,s);hm(i,o,c,l)}else a&&(fm(i,o,a,l),r[e]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function pm(i){let e;if(uc.test(i)){e={};let n;for(;n=i.match(uc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fs(i.slice(2)),e]}let zo=0;const mm=Promise.resolve(),gm=()=>zo||(mm.then(()=>zo=0),zo=Date.now());function _m(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Yt(xm(n,t.value),e,5,[n])};return t.value=i,t.attached=gm(),t}function xm(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const hc=/^on[a-z]/,vm=(i,e,t,n,s=!1,r,a,o,l)=>{e==="class"?om(i,n,s):e==="style"?am(i,t,n):so(e)?el(e)||dm(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ym(i,e,n,s))?um(i,e,n,r,a,o,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),cm(i,e,n,s))};function ym(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&hc.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||hc.test(e)&&at(t)?!1:e in i}const Mm=ot({patchProp:vm},rm);let fc;function bm(){return fc||(fc=Up(Mm))}const Sm=(...i)=>{const e=bm().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=wm(n);if(!s)return;const r=e._component;!ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function wm(i){return at(i)?document.querySelector(i):i}var Em=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Tm=Symbol();var dc;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(dc||(dc={}));function Am(){const i=gd(!0),e=i.run(()=>Js({}));let t=[],n=[];const s=fl({install(r){s._a=r,r.provide(Tm,s),r.config.globalProperties.$pinia=s,n.forEach(a=>t.push(a)),n=[]},use(r){return!this._a&&!Em?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Vi=typeof window<"u";function Cm(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Uo(i,e){const t={};for(const n in e){const s=e[n];t[n]=Kt(s)?s.map(i):i(s)}return t}const zs=()=>{},Kt=Array.isArray,Lm=/\/$/,Rm=i=>i.replace(Lm,"");function Bo(i,e,t="/"){let n,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,o>-1?o:e.length),s=i(r)),o>-1&&(n=n||e.slice(0,o),a=e.slice(o,e.length)),n=Fm(n??e,t),{fullPath:n+(r&&"?")+r+a,path:n,query:s,hash:a}}function Pm(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function pc(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Dm(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&rs(e.matched[n],t.matched[s])&&nf(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function rs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function nf(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Im(i[t],e[t]))return!1;return!0}function Im(i,e){return Kt(i)?mc(i,e):Kt(e)?mc(e,i):i===e}function mc(i,e){return Kt(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Fm(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,a,o;for(a=0;a<n.length;a++)if(o=n[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}var js;(function(i){i.pop="pop",i.push="push"})(js||(js={}));var Us;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Us||(Us={}));function Nm(i){if(!i)if(Vi){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Rm(i)}const Om=/^[^#]+#/;function zm(i,e){return i.replace(Om,"#")+e}function Um(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const xo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bm(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Um(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gc(i,e){return(history.state?history.state.position-e:-1)+i}const za=new Map;function km(i,e){za.set(i,e)}function Gm(i){const e=za.get(i);return za.delete(i),e}let Hm=()=>location.protocol+"//"+location.host;function sf(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let o=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),pc(l,"")}return pc(t,i)+n+s}function Vm(i,e,t,n){let s=[],r=[],a=null;const o=({state:f})=>{const p=sf(i,location),g=t.value,m=e.value;let d=0;if(f){if(t.value=p,e.value=f,a&&a===g){a=null;return}d=m?f.position-m.position:0}else n(p);s.forEach(_=>{_(t.value,g,{delta:d,type:js.pop,direction:d?d>0?Us.forward:Us.back:Us.unknown})})};function l(){a=t.value}function c(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState($e({},f.state,{scroll:xo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function _c(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?xo():null}}function Wm(i){const{history:e,location:t}=window,n={value:sf(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:Hm()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function a(l,c){const u=$e({},e.state,_c(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function o(l,c){const u=$e({},s.value,e.state,{forward:l,scroll:xo()});r(u.current,u,!0);const h=$e({},_c(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:o,replace:a}}function jm(i){i=Nm(i);const e=Wm(i),t=Vm(i,e.state,e.location,e.replace);function n(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=$e({location:"",base:i,go:n,createHref:zm.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function qm(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),jm(i)}function Xm(i){return typeof i=="string"||i&&typeof i=="object"}function rf(i){return typeof i=="string"||typeof i=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},of=Symbol("");var xc;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(xc||(xc={}));function os(i,e){return $e(new Error,{type:i,[of]:!0},e)}function mn(i,e){return i instanceof Error&&of in i&&(e==null||!!(i.type&e))}const vc="[^/]+?",$m={sensitive:!1,strict:!1,start:!0,end:!0},Ym=/[.+*?^${}()[\]/\\]/g;function Zm(i,e){const t=$e({},$m,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Ym,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=f;r.push({name:g,repeatable:m,optional:d});const b=_||vc;if(b!==vc){p+=10;try{new RegExp(`(${b})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+T.message)}}let C=m?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(C=d&&c.length<2?`(?:/${C})`:"/"+C),d&&(C+="?"),s+=C,p+=20,d&&(p+=-8),m&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=r[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in c?c[g]:"";if(Kt(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Kt(_)?_.join("/"):_;if(!b)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:a,score:n,keys:r,parse:o,stringify:l}}function Km(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jm(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=Km(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(yc(n))return 1;if(yc(s))return-1}return s.length-n.length}function yc(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Qm={type:0,value:""},eg=/[a-zA-Z0-9_]/;function tg(i){if(!i)return[[]];if(i==="/")return[[Qm]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<i.length;){if(l=i[o++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),a()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:eg.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),a(),s}function ng(i,e,t){const n=Zm(tg(i.path),t),s=$e(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ig(i,e){const t=[],n=new Map;e=Sc({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const p=!f,g=sg(u);g.aliasOf=f&&f.record;const m=Sc(e,u),d=[g];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of C)d.push($e({},g,{components:f?f.record.components:g.components,path:T,aliasOf:f?f.record:g}))}let _,b;for(const C of d){const{path:T}=C;if(h&&T[0]!=="/"){const S=h.record.path,P=S[S.length-1]==="/"?"":"/";C.path=h.record.path+(T&&P+T)}if(_=ng(C,h,m),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),p&&u.name&&!bc(_)&&a(u.name)),g.children){const S=g.children;for(let P=0;P<S.length;P++)r(S[P],_,f&&f.children[P])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{a(b)}:zs}function a(u){if(rf(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let h=0;for(;h<t.length&&Jm(u,t[h])>=0&&(u.record.path!==t[h].record.path||!af(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!bc(u)&&n.set(u.record.name,u)}function c(u,h){let f,p={},g,m;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw os(1,{location:u});m=f.record.name,p=$e(Mc(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Mc(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw os(1,{location:u,currentLocation:h});m=f.record.name,p=$e({},h.params,u.params),g=f.stringify(p)}const d=[];let _=f;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:og(d)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:s}}function Mc(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function sg(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:rg(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function rg(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function bc(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function og(i){return i.reduce((e,t)=>$e(e,t.meta),{})}function Sc(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function af(i,e){return e.children.some(t=>t===i||af(i,t))}const lf=/#/g,ag=/&/g,lg=/\//g,cg=/=/g,ug=/\?/g,cf=/\+/g,hg=/%5B/g,fg=/%5D/g,uf=/%5E/g,dg=/%60/g,hf=/%7B/g,pg=/%7C/g,ff=/%7D/g,mg=/%20/g;function wl(i){return encodeURI(""+i).replace(pg,"|").replace(hg,"[").replace(fg,"]")}function gg(i){return wl(i).replace(hf,"{").replace(ff,"}").replace(uf,"^")}function Ua(i){return wl(i).replace(cf,"%2B").replace(mg,"+").replace(lf,"%23").replace(ag,"%26").replace(dg,"`").replace(hf,"{").replace(ff,"}").replace(uf,"^")}function _g(i){return Ua(i).replace(cg,"%3D")}function xg(i){return wl(i).replace(lf,"%23").replace(ug,"%3F")}function vg(i){return i==null?"":xg(i).replace(lg,"%2F")}function Jr(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function yg(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(cf," "),a=r.indexOf("="),o=Jr(a<0?r:r.slice(0,a)),l=a<0?null:Jr(r.slice(a+1));if(o in e){let c=e[o];Kt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function wc(i){let e="";for(let t in i){const n=i[t];if(t=_g(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Kt(n)?n.map(r=>r&&Ua(r)):[n&&Ua(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Mg(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Kt(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const bg=Symbol(""),Ec=Symbol(""),El=Symbol(""),df=Symbol(""),Ba=Symbol("");function Ss(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function Gn(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((a,o)=>{const l=h=>{h===!1?o(os(4,{from:t,to:e})):h instanceof Error?o(h):Xm(h)?o(os(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),a())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>o(h))})}function ko(i,e,t,n){const s=[];for(const r of i)for(const a in r.components){let o=r.components[a];if(!(e!=="beforeRouteEnter"&&!r.instances[a]))if(Sg(o)){const c=(o.__vccOpts||o)[e];c&&s.push(Gn(c,t,n,r,a))}else{let l=o();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const u=Cm(c)?c.default:c;r.components[a]=u;const f=(u.__vccOpts||u)[e];return f&&Gn(f,t,n,r,a)()}))}}return s}function Sg(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Tc(i){const e=En(El),t=En(df),n=Ht(()=>e.resolve(Ki(i.to))),s=Ht(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(rs.bind(null,u));if(f>-1)return f;const p=Ac(l[c-2]);return c>1&&Ac(u)===p&&h[h.length-1].path!==p?h.findIndex(rs.bind(null,l[c-2])):f}),r=Ht(()=>s.value>-1&&Ag(t.params,n.value.params)),a=Ht(()=>s.value>-1&&s.value===t.matched.length-1&&nf(t.params,n.value.params));function o(l={}){return Tg(l)?e[Ki(i.replace)?"replace":"push"](Ki(i.to)).catch(zs):Promise.resolve()}return{route:n,href:Ht(()=>n.value.href),isActive:r,isExactActive:a,navigate:o}}const wg=ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tc,setup(i,{slots:e}){const t=Ks(Tc(i)),{options:n}=En(El),s=Ht(()=>({[Cc(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Cc(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:tf("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Eg=wg;function Tg(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function Ag(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!Kt(s)||s.length!==n.length||n.some((r,a)=>r!==s[a]))return!1}return!0}function Ac(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Cc=(i,e,t)=>i??e??t,Cg=ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=En(Ba),s=Ht(()=>i.route||n.value),r=En(Ec,0),a=Ht(()=>{let c=Ki(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),o=Ht(()=>s.value.matched[a.value]);Gr(Ec,Ht(()=>a.value+1)),Gr(bg,o),Gr(Ba,s);const l=Js();return kr(()=>[l.value,o.value,i.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!rs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=o.value,f=h&&h.components[u];if(!f)return Lc(t.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,d=tf(f,$e({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Lc(t.default,{Component:d,route:c})||d}}});function Lc(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Lg=Cg;function Rg(i){const e=ig(i.routes,i),t=i.parseQuery||yg,n=i.stringifyQuery||wc,s=i.history,r=Ss(),a=Ss(),o=Ss(),l=jd(Dn);let c=Dn;Vi&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Uo.bind(null,G=>""+G),h=Uo.bind(null,vg),f=Uo.bind(null,Jr);function p(G,re){let J,K;return rf(G)?(J=e.getRecordMatcher(G),K=re):K=G,e.addRoute(K,J)}function g(G){const re=e.getRecordMatcher(G);re&&e.removeRoute(re)}function m(){return e.getRoutes().map(G=>G.record)}function d(G){return!!e.getRecordMatcher(G)}function _(G,re){if(re=$e({},re||l.value),typeof G=="string"){const D=Bo(t,G,re.path),H=e.resolve({path:D.path},re),Z=s.createHref(D.fullPath);return $e(D,H,{params:f(H.params),hash:Jr(D.hash),redirectedFrom:void 0,href:Z})}let J;if("path"in G)J=$e({},G,{path:Bo(t,G.path,re.path).path});else{const D=$e({},G.params);for(const H in D)D[H]==null&&delete D[H];J=$e({},G,{params:h(D)}),re.params=h(re.params)}const K=e.resolve(J,re),Ee=G.hash||"";K.params=u(f(K.params));const w=Pm(n,$e({},G,{hash:gg(Ee),path:K.path})),A=s.createHref(w);return $e({fullPath:w,hash:Ee,query:n===wc?Mg(G.query):G.query||{}},K,{redirectedFrom:void 0,href:A})}function b(G){return typeof G=="string"?Bo(t,G,l.value.path):$e({},G)}function C(G,re){if(c!==G)return os(8,{from:re,to:G})}function T(G){return N(G)}function S(G){return T($e(b(G),{replace:!0}))}function P(G){const re=G.matched[G.matched.length-1];if(re&&re.redirect){const{redirect:J}=re;let K=typeof J=="function"?J(G):J;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=b(K):{path:K},K.params={}),$e({query:G.query,hash:G.hash,params:"path"in K?{}:G.params},K)}}function N(G,re){const J=c=_(G),K=l.value,Ee=G.state,w=G.force,A=G.replace===!0,D=P(J);if(D)return N($e(b(D),{state:typeof D=="object"?$e({},Ee,D.state):Ee,force:w,replace:A}),re||J);const H=J;H.redirectedFrom=re;let Z;return!w&&Dm(n,K,J)&&(Z=os(16,{to:H,from:K}),fe(K,K,!0,!1)),(Z?Promise.resolve(Z):z(H,K)).catch(se=>mn(se)?mn(se,2)?se:ee(se):W(se,H,K)).then(se=>{if(se){if(mn(se,2))return N($e({replace:A},b(se.to),{state:typeof se.to=="object"?$e({},Ee,se.to.state):Ee,force:w}),re||H)}else se=ye(H,K,!0,A,Ee);return U(H,K,se),se})}function M(G,re){const J=C(G,re);return J?Promise.reject(J):Promise.resolve()}function R(G){const re=we.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(G):G()}function z(G,re){let J;const[K,Ee,w]=Pg(G,re);J=ko(K.reverse(),"beforeRouteLeave",G,re);for(const D of K)D.leaveGuards.forEach(H=>{J.push(Gn(H,G,re))});const A=M.bind(null,G,re);return J.push(A),$(J).then(()=>{J=[];for(const D of r.list())J.push(Gn(D,G,re));return J.push(A),$(J)}).then(()=>{J=ko(Ee,"beforeRouteUpdate",G,re);for(const D of Ee)D.updateGuards.forEach(H=>{J.push(Gn(H,G,re))});return J.push(A),$(J)}).then(()=>{J=[];for(const D of w)if(D.beforeEnter)if(Kt(D.beforeEnter))for(const H of D.beforeEnter)J.push(Gn(H,G,re));else J.push(Gn(D.beforeEnter,G,re));return J.push(A),$(J)}).then(()=>(G.matched.forEach(D=>D.enterCallbacks={}),J=ko(w,"beforeRouteEnter",G,re),J.push(A),$(J))).then(()=>{J=[];for(const D of a.list())J.push(Gn(D,G,re));return J.push(A),$(J)}).catch(D=>mn(D,8)?D:Promise.reject(D))}function U(G,re,J){o.list().forEach(K=>R(()=>K(G,re,J)))}function ye(G,re,J,K,Ee){const w=C(G,re);if(w)return w;const A=re===Dn,D=Vi?history.state:{};J&&(K||A?s.replace(G.fullPath,$e({scroll:A&&D&&D.scroll},Ee)):s.push(G.fullPath,Ee)),l.value=G,fe(G,re,J,A),ee()}let ue;function O(){ue||(ue=s.listen((G,re,J)=>{if(!Ae.listening)return;const K=_(G),Ee=P(K);if(Ee){N($e(Ee,{replace:!0}),K).catch(zs);return}c=K;const w=l.value;Vi&&km(gc(w.fullPath,J.delta),xo()),z(K,w).catch(A=>mn(A,12)?A:mn(A,2)?(N(A.to,K).then(D=>{mn(D,20)&&!J.delta&&J.type===js.pop&&s.go(-1,!1)}).catch(zs),Promise.reject()):(J.delta&&s.go(-J.delta,!1),W(A,K,w))).then(A=>{A=A||ye(K,w,!1),A&&(J.delta&&!mn(A,8)?s.go(-J.delta,!1):J.type===js.pop&&mn(A,20)&&s.go(-1,!1)),U(K,w,A)}).catch(zs)}))}let ie=Ss(),k=Ss(),j;function W(G,re,J){ee(G);const K=k.list();return K.length?K.forEach(Ee=>Ee(G,re,J)):console.error(G),Promise.reject(G)}function X(){return j&&l.value!==Dn?Promise.resolve():new Promise((G,re)=>{ie.add([G,re])})}function ee(G){return j||(j=!G,O(),ie.list().forEach(([re,J])=>G?J(G):re()),ie.reset()),G}function fe(G,re,J,K){const{scrollBehavior:Ee}=i;if(!Vi||!Ee)return Promise.resolve();const w=!J&&Gm(gc(G.fullPath,0))||(K||!J)&&history.state&&history.state.scroll||null;return Rh().then(()=>Ee(G,re,w)).then(A=>A&&Bm(A)).catch(A=>W(A,G,re))}const le=G=>s.go(G);let de;const we=new Set,Ae={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:i,push:T,replace:S,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:k.add,isReady:X,install(G){const re=this;G.component("RouterLink",Eg),G.component("RouterView",Lg),G.config.globalProperties.$router=re,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Ki(l)}),Vi&&!de&&l.value===Dn&&(de=!0,T(s.location).catch(Ee=>{}));const J={};for(const Ee in Dn)Object.defineProperty(J,Ee,{get:()=>l.value[Ee],enumerable:!0});G.provide(El,re),G.provide(df,bh(J)),G.provide(Ba,l);const K=G.unmount;we.add(G),G.unmount=function(){we.delete(G),we.size<1&&(c=Dn,ue&&ue(),ue=null,l.value=Dn,de=!1,j=!1),K()}}};function $(G){return G.reduce((re,J)=>re.then(()=>R(J)),Promise.resolve())}return Ae}function Pg(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(i.matched.find(c=>rs(c,o))?n.push(o):t.push(o));const l=i.matched[a];l&&(e.matched.find(c=>rs(c,l))||s.push(l))}return[t,n,s]}var ht={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function qs(i){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qs(i)}function Rc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable})),t.push.apply(t,n)}return t}function Go(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Rc(Object(t),!0).forEach(function(n){Dg(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Rc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Dg(i,e,t){return e=Ig(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Ig(i){var e=Fg(i,"string");return qs(e)==="symbol"?e:String(e)}function Fg(i,e){if(qs(i)!=="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(qs(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}var Pc={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[ht.STARTS_WITH,ht.CONTAINS,ht.NOT_CONTAINS,ht.ENDS_WITH,ht.EQUALS,ht.NOT_EQUALS],numeric:[ht.EQUALS,ht.NOT_EQUALS,ht.LESS_THAN,ht.LESS_THAN_OR_EQUAL_TO,ht.GREATER_THAN,ht.GREATER_THAN_OR_EQUAL_TO],date:[ht.DATE_IS,ht.DATE_IS_NOT,ht.DATE_BEFORE,ht.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,unstyled:!1,csp:{nonce:void 0}},Ng=Symbol();function Og(i,e,t,n){var s=document.getElementById(t),r=s.cloneNode(!0),a=s.getAttribute("href").replace(i,e);r.setAttribute("id",t+"-clone"),r.setAttribute("href",a),r.addEventListener("load",function(){s.remove(),r.setAttribute("id",t),n&&n()}),s.parentNode&&s.parentNode.insertBefore(r,s.nextSibling)}var zg={install:function(e,t){var n=t?Go(Go({},Pc),t):Go({},Pc),s={config:Ks(n),changeTheme:Og};e.config.globalProperties.$primevue=s,e.provide(Ng,s)}};const vo=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Ug={};function Bg(i,e){const t=gl("router-view");return qn(),vl(t)}const kg=vo(Ug,[["render",Bg]]);function Tl(i){return i[Math.floor(Math.random()*i.length)]}function Xs(i,e="Assertion failed"){if(!i)throw e}async function Gg(i){return await new Promise(e=>setTimeout(e,i))}class kt{constructor(){Ie(this,"value",[]);this.value=new Array(fn.length).fill(0)}countOnes(){return this.value.reduce((e,t)=>e+t,0)}clone(){const e=new kt;return e.value=[...this.value],e}getIntersection(e){Xs(this.value.length===e.value.length);const t=new kt;for(let n=0;n<t.value.length;n++)t.value[n]=Math.min(this.value[n],e.value[n]);return t}fillOnes(){this.value.fill(1)}getNonZeroIndices(){return this.value.reduce((e,t,n)=>(t===1&&e.push(n),e),[])}getRandomNonZeroIndex(){const e=this.getNonZeroIndices();return Tl(e)}setAt(e,t){this.value[e]=t}getAt(e){return this.value[e]}print(){return this.value.join(" ")}}var ii=(i=>(i.px="px",i.nx="nx",i.py="py",i.ny="ny",i.pz="pz",i.nz="nz",i))(ii||{});const Qr=[{mesh:"void",id:"void",rotate:!1,px:"void",nx:"void",py:"void",ny:"void",pz:"void",nz:"void"},{mesh:"void",id:"earth",rotate:!1,px:"void",nx:"void",py:"void",ny:"void",pz:"earth",nz:"void"},{mesh:"void",id:"void_on_earth",rotate:!1,px:"void",nx:"void",py:"void",ny:"void",pz:"void",nz:"earth"},{mesh:"meshes/corner.obj",id:"corner",px:"wall_r",nx:"void",py:"void",ny:"wall_l",pz:"void",nz:"earth"},{mesh:"meshes/wall.obj",id:"wall",px:"wall_r",nx:"wall_l",py:"void",ny:"void",pz:"void",nz:"earth"}],wn=new Map;let fn=[];function Ei(i,e){i.includes(e)||i.push(e)}function Hg(){const i=[];Qr.forEach(e=>{Ei(i,e.nx),Ei(i,e.px),Ei(i,e.ny),Ei(i,e.py),Ei(i,e.nz),Ei(i,e.pz)}),i.forEach(e=>{if(e.endsWith("_r")){const t=e.slice(0,-2)+"_l";wn.set(e+"_"+t,!0)}else if(e.endsWith("_l")){const t=e.slice(0,-2)+"_r";wn.set(e+"_"+t,!0)}else wn.set(e+"_"+e,!0)})}function Vg(){const i=Qr.reduce((n,s)=>(ur(n,hr(s,0)),ur(n,hr(s,90)),ur(n,hr(s,180)),ur(n,hr(s,270)),n),[]),e=[],t=i.length;fn.length=t;for(let n=0;n<i.length;++n){const s={mesh:i[n].mesh,id:i[n].id,rotation:i[n].rotation,index:n,px:new kt,nx:new kt,py:new kt,ny:new kt,pz:new kt,nz:new kt};for(let r=0;r<t;++r)s.px.setAt(r,Ti(i[n],i[r],"px")),s.nx.setAt(r,Ti(i[n],i[r],"nx")),s.py.setAt(r,Ti(i[n],i[r],"py")),s.ny.setAt(r,Ti(i[n],i[r],"ny")),s.pz.setAt(r,Ti(i[n],i[r],"pz")),s.nz.setAt(r,Ti(i[n],i[r],"nz"));e.push(s)}fn=e}function ur(i,e){i.findIndex(n=>n.mesh===e.mesh&&n.px===e.px&&n.nx===e.nx&&n.py===e.py&&n.ny===e.ny&&n.nz===e.nz&&n.pz===e.pz)===-1&&i.push(e)}function Ti(i,e,t){return(()=>{switch(t){case"nx":return wn.get(`${i.nx}_${e.px}`);case"px":return wn.get(`${i.px}_${e.nx}`);case"ny":return wn.get(`${i.ny}_${e.py}`);case"py":return wn.get(`${i.py}_${e.ny}`);case"nz":return wn.get(`${i.nz}_${e.pz}`);case"pz":return wn.get(`${i.pz}_${e.nz}`)}})()?1:0}function hr(i,e){const t={...i,rotation:e};switch(e){case 90:t.px=i.py,t.nx=i.ny,t.py=i.nx,t.ny=i.px;break;case 180:t.px=i.nx,t.nx=i.px,t.py=i.ny,t.ny=i.py;break;case 270:t.px=i.ny,t.nx=i.py,t.py=i.px,t.ny=i.nx;break}return t}Hg();Vg();const Dc=5e3,io=class io extends EventTarget{constructor(t){super();Ie(this,"iterations",0);Ie(this,"runFlag",!1);Ie(this,"history",[]);this.set=t}async run(){this.runFlag=!0,this.propagate();const t=this.getNextElement();this.history.push({instancePos:{x:t.x,y:t.y,z:t.z},leftStates:t.mask.clone(),state:this.set.cloneState(),retries:0});let n=0;for(;this.runFlag;){if(n++>Dc)throw"Guard overflow";if(this.history.length===0)throw"No history left";const s=this.history[this.history.length-1],r=s.leftStates.getRandomNonZeroIndex();try{const o=this.set.tryGetElementAt(s.instancePos.x,s.instancePos.y,s.instancePos.z);o.collapseTo(r),o.dirty=!0;const l=new Event("element_collapsed",{bubbles:!0});this.dispatchEvent(l),await Gg(10),this.propagate()}catch{this.checkHistory(s,r);continue}const a=this.getNextElement();if(!a){console.log("yay!!");const o=new Event("solving_finished",{bubbles:!0});this.dispatchEvent(o);break}this.history.push({instancePos:{x:a.x,y:a.y,z:a.z},leftStates:a.mask.clone(),state:this.set.cloneState(),retries:0})}}stop(){this.runFlag=!1}checkHistory(t,n){if(t.leftStates.setAt(n,0),t.retries++,t.leftStates.countOnes()===0){this.goBackInHistory();return}this.set.replaceState(t.state)}goBackInHistory(){let t=1;const n=.1;for(let s=1;s<this.history.length-1;++s)t+=Math.random()<n?1:0;this.history.splice(this.history.length-t,t)}getLastHistoryStep(){return this.history[this.history.length-1]}propagate(){let t,n=0;for(;t=this.set.getNextDirtyElement();){if(n++>Dc)throw"Guard overflow";this.propagateElement(t)}}propagateElement(t){this.set.getElementsAdjacentTo(t).forEach(([s,r])=>{this.filterTargetStates(t,s,r)}),t.dirty=!1}filterTargetStates(t,n,s){const r=n.enthropy;for(let a=0;a<fn.length;a++){let o=!1;if(n.mask.getAt(a)===1)for(let l=0;l<fn.length;++l){if(t.mask.getAt(l)===1){const c=fn[l][s];o||(o=c.getAt(a)===1)}io.checks++}if(!o&&(n.mask.setAt(a,0),n.updateEnthropy(),n.enthropy===0))throw"Backtrack"}r!==n.enthropy&&this.set.getElementsAdjacentTo(n).forEach(([o,l])=>{o.dirty=!0})}getNextElement(){let t=1/0,n=[];return this.set.eachElement(s=>{s.dead||s.enthropy===1||(s.enthropy<t&&(t=s.enthropy,n=[s]),s.enthropy===t&&n.push(s))}),n.length<1?null:Tl(n)}printHistoryItem(){const t=this.history[this.history.length-1],n=this.history.length-1;console.log(`hist# ${String(n).padStart(2," ")} at [`+String(t.instancePos.x).padStart(2," ")+", "+String(t.instancePos.y).padStart(2," ")+", "+String(t.instancePos.z).padStart(2," ")+`] [${t.leftStates.print()}]`)}};Ie(io,"checks",0);let eo=io;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Al="141",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wg=0,Ic=1,jg=2,pf=1,qg=2,Rs=3,$s=0,Zt=1,as=2,Xg=1,Xn=0,Qi=1,Fc=2,Nc=3,Oc=4,$g=5,Wi=100,Yg=101,Zg=102,zc=103,Uc=104,Kg=200,Jg=201,Qg=202,e_=203,mf=204,gf=205,t_=206,n_=207,i_=208,s_=209,r_=210,o_=0,a_=1,l_=2,ka=3,c_=4,u_=5,h_=6,f_=7,yo=0,d_=1,p_=2,Tn=0,m_=1,g_=2,__=3,x_=4,v_=5,_f=300,ls=301,cs=302,Ga=303,Ha=304,Mo=306,Va=1e3,Vt=1001,Wa=1002,Et=1003,Bc=1004,kc=1005,Ft=1006,y_=1007,bo=1008,_i=1009,M_=1010,b_=1011,xf=1012,S_=1013,ci=1014,ui=1015,Ys=1016,w_=1017,E_=1018,es=1020,T_=1021,A_=1022,qt=1023,C_=1024,L_=1025,mi=1026,us=1027,R_=1028,P_=1029,D_=1030,I_=1031,F_=1033,Ho=33776,Vo=33777,Wo=33778,jo=33779,Gc=35840,Hc=35841,Vc=35842,Wc=35843,N_=36196,jc=37492,qc=37496,Xc=37808,$c=37809,Yc=37810,Zc=37811,Kc=37812,Jc=37813,Qc=37814,eu=37815,tu=37816,nu=37817,iu=37818,su=37819,ru=37820,ou=37821,au=36492,xi=3e3,Ze=3001,O_=3200,z_=3201,gs=0,U_=1,Sn="srgb",hi="srgb-linear",qo=7680,B_=519,lu=35044,cu="300 es",ja=1035;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const lt=[];for(let i=0;i<256;i++)lt[i]=(i<16?"0":"")+i.toString(16);const Vr=Math.PI/180,qa=180/Math.PI;function Qs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function k_(i,e){return(i%e+e)%e}function Xo(i,e,t){return(1-t)*i+t*e}function uu(i){return(i&i-1)===0&&i!==0}function Xa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Le{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=s[0],d=s[3],_=s[6],b=s[1],C=s[4],T=s[7],S=s[2],P=s[5],N=s[8];return r[0]=a*m+o*b+l*S,r[3]=a*d+o*C+l*P,r[6]=a*_+o*T+l*N,r[1]=c*m+u*b+h*S,r[4]=c*d+u*C+h*P,r[7]=c*_+u*T+h*N,r[2]=f*m+p*b+g*S,r[5]=f*d+p*C+g*P,r[8]=f*_+p*T+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(o*n-s*a)*m,e[3]=f*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],a=s[3],o=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*a+n*c,s[6]=t*o+n*u,s[1]=-n*r+t*l,s[4]=-n*a+t*c,s[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $o={[Sn]:{[hi]:gi},[hi]:{[Sn]:Wr}},Nt={legacyMode:!0,get workingColorSpace(){return hi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if($o[e]&&$o[e][t]!==void 0){const n=$o[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Ot={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function dr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=hi){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=hi){if(e=k_(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Nt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Nt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Sn){const n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Nt.fromWorkingColorSpace(dr(this,it),e),yt(it.r*255,0,255)<<16^yt(it.g*255,0,255)<<8^yt(it.b*255,0,255)<<0}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hi){Nt.fromWorkingColorSpace(dr(this,it),t);const n=it.r,s=it.g,r=it.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=hi){return Nt.fromWorkingColorSpace(dr(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Sn){return Nt.fromWorkingColorSpace(dr(this,it),e),e!==Sn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(fr);const n=Xo(Ot.h,fr.h,t),s=Xo(Ot.s,fr.s,t),r=Xo(Ot.l,fr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=yf;let Li;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=to("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bf{constructor(e=null){this.isSource=!0,this.uuid=Qs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zo(s[a].image)):r.push(Zo(s[a]))}else r=Zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mf.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0;class Jt extends yi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Vt,s=Vt,r=Ft,a=bo,o=qt,l=_i,c=1,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Qs(),this.name="",this.source=new bf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=_f;class ut{constructor(e=0,t=0,n=0,s=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,T=(p+1)/2,S=(_+1)/2,P=(u+f)/4,N=(h+m)/4,M=(g+d)/4;return C>T&&C>S?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=P/n,r=N/n):T>S?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=N/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-m)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends yi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sf extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H_ extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-o;const _=l*f+c*p+u*g+h*m,b=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const S=Math.sqrt(C),P=Math.atan2(S,_*b);d=Math.sin(d*P)/S,o=Math.sin(o*P)/S}const T=o*b;if(l=l*d+f*T,c=c*d+p*T,u=u*d+g*T,h=h*d+m*T,d===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,u=l*n+o*t-r*s,h=l*s+r*n-a*t,f=-r*t-a*n-o*s;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new I,hu=new vi;class _s{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ei.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox),Jo.applyMatrix4(e.matrixWorld),this.union(Jo);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),pr.subVectors(this.max,ws),Ri.subVectors(e.a,ws),Pi.subVectors(e.b,ws),Di.subVectors(e.c,ws),In.subVectors(Pi,Ri),Fn.subVectors(Di,Pi),ti.subVectors(Ri,Di);let t=[0,-In.z,In.y,0,-Fn.z,Fn.y,0,-ti.z,ti.y,In.z,0,-In.x,Fn.z,0,-Fn.x,ti.z,0,-ti.x,-In.y,In.x,0,-Fn.y,Fn.x,0,-ti.y,ti.x,0];return!Qo(t,Ri,Pi,Di,pr)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Ri,Pi,Di,pr))?!1:(mr.crossVectors(In,Fn),t=[mr.x,mr.y,mr.z],Qo(t,Ri,Pi,Di,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new I,new I,new I,new I,new I,new I,new I,new I],ei=new I,Jo=new _s,Ri=new I,Pi=new I,Di=new I,In=new I,Fn=new I,ti=new I,ws=new I,pr=new I,mr=new I,ni=new I;function Qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const V_=new _s,fu=new I,gr=new I,ea=new I;class er{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):V_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(ea.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?gr.set(0,0,1).multiplyScalar(e.radius):gr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(fu.copy(e.center).add(gr)),this.expandByPoint(fu.copy(e.center).sub(gr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new I,ta=new I,_r=new I,Nn=new I,na=new I,xr=new I,ia=new I;class So{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.direction).multiplyScalar(t).add(this.origin),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ta.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=Nn.dot(this.direction),l=-Nn.dot(_r),c=Nn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(_r).multiplyScalar(f).add(ta),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||n!==n)&&(n=r),(a<s||s!==s)&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){na.subVectors(t,e),xr.subVectors(n,e),ia.crossVectors(na,xr);let a=this.direction.dot(ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const l=o*this.direction.dot(xr.crossVectors(Nn,xr));if(l<0)return null;const c=o*this.direction.dot(na.cross(Nn));if(c<0||l+c>a)return null;const u=-o*Nn.dot(ia);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,j_)}lookAt(e,t,n){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),On.crossVectors(n,Lt),On.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),On.crossVectors(n,Lt)),On.normalize(),vr.crossVectors(Lt,On),s[0]=On.x,s[4]=vr.x,s[8]=Lt.x,s[1]=On.y,s[5]=vr.y,s[9]=Lt.y,s[2]=On.z,s[6]=vr.z,s[10]=Lt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],b=n[3],C=n[7],T=n[11],S=n[15],P=s[0],N=s[4],M=s[8],R=s[12],z=s[1],U=s[5],ye=s[9],ue=s[13],O=s[2],ie=s[6],k=s[10],j=s[14],W=s[3],X=s[7],ee=s[11],fe=s[15];return r[0]=a*P+o*z+l*O+c*W,r[4]=a*N+o*U+l*ie+c*X,r[8]=a*M+o*ye+l*k+c*ee,r[12]=a*R+o*ue+l*j+c*fe,r[1]=u*P+h*z+f*O+p*W,r[5]=u*N+h*U+f*ie+p*X,r[9]=u*M+h*ye+f*k+p*ee,r[13]=u*R+h*ue+f*j+p*fe,r[2]=g*P+m*z+d*O+_*W,r[6]=g*N+m*U+d*ie+_*X,r[10]=g*M+m*ye+d*k+_*ee,r[14]=g*R+m*ue+d*j+_*fe,r[3]=b*P+C*z+T*O+S*W,r[7]=b*N+C*U+T*ie+S*X,r[11]=b*M+C*ye+T*k+S*ee,r[15]=b*R+C*ue+T*j+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+m*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+d*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+_*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],b=h*d*c-m*f*c+m*l*p-o*d*p-h*l*_+o*f*_,C=g*f*c-u*d*c-g*l*p+a*d*p+u*l*_-a*f*_,T=u*m*c-g*h*c+g*o*p-a*m*p-u*o*_+a*h*_,S=g*h*l-u*m*l-g*o*f+a*m*f+u*o*d-a*h*d,P=t*b+n*C+s*T+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=b*N,e[1]=(m*f*r-h*d*r-m*s*p+n*d*p+h*s*_-n*f*_)*N,e[2]=(o*d*r-m*l*r+m*s*c-n*d*c-o*s*_+n*l*_)*N,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*N,e[4]=C*N,e[5]=(u*d*r-g*f*r+g*s*p-t*d*p-u*s*_+t*f*_)*N,e[6]=(g*l*r-a*d*r-g*s*c+t*d*c+a*s*_-t*l*_)*N,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*N,e[8]=T*N,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*_-t*h*_)*N,e[10]=(a*m*r-g*o*r+g*n*c-t*m*c-a*n*_+t*o*_)*N,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*N,e[12]=S*N,e[13]=(u*m*s-g*h*s+g*n*f-t*m*f-u*n*d+t*h*d)*N,e[14]=(g*o*s-a*m*s-g*n*l+t*m*l+a*n*d-t*o*d)*N,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,m=a*u,d=a*h,_=o*h,b=l*c,C=l*u,T=l*h,S=n.x,P=n.y,N=n.z;return s[0]=(1-(m+_))*S,s[1]=(p+T)*S,s[2]=(g-C)*S,s[3]=0,s[4]=(p-T)*P,s[5]=(1-(f+_))*P,s[6]=(d+b)*P,s[7]=0,s[8]=(g+C)*N,s[9]=(d-b)*N,s[10]=(1-(f+m))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const a=Ii.set(s[4],s[5],s[6]).length(),o=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zt.copy(this);const c=1/r,u=1/a,h=1/o;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,l=1/(t-e),c=1/(n-s),u=1/(a-r),h=(t+e)*l,f=(n+s)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new I,zt=new nt,W_=new I(0,0,0),j_=new I(1,1,1),On=new I,vr=new I,Lt=new I,du=new nt,pu=new vi;class tr{constructor(e=0,t=0,n=0,s=tr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}tr.DefaultOrder="XYZ";tr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q_=0;const mu=new I,Fi=new vi,xn=new nt,yr=new I,Es=new I,X_=new I,$_=new vi,gu=new I(1,0,0),_u=new I(0,1,0),xu=new I(0,0,1),Y_={type:"added"},vu={type:"removed"};class gt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new I,t=new tr,n=new vi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new hn}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Es,yr,this.up):xn.lookAt(yr,Es,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(xn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Y_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DefaultUp=new I(0,1,0);gt.DefaultMatrixAutoUpdate=!0;const Ut=new I,vn=new I,sa=new I,yn=new I,Ni=new I,Oi=new I,yu=new I,ra=new I,oa=new I,aa=new I;class un{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ut.subVectors(e,t),s.cross(Ut);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ut.subVectors(s,t),vn.subVectors(n,t),sa.subVectors(e,t);const a=Ut.dot(Ut),o=Ut.dot(vn),l=Ut.dot(sa),c=vn.dot(vn),u=vn.dot(sa),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,yn),l.set(0,0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l}static isFrontFacing(e,t,n,s){return Ut.subVectors(n,t),vn.subVectors(e,t),Ut.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ut.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return un.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Oi.subVectors(r,n),ra.subVectors(e,n);const l=Ni.dot(ra),c=Oi.dot(ra);if(l<=0&&c<=0)return t.copy(n);oa.subVectors(e,s);const u=Ni.dot(oa),h=Oi.dot(oa);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ni,a);aa.subVectors(e,r);const p=Ni.dot(aa),g=Oi.dot(aa);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Oi,o);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return yu.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(yu,o);const _=1/(d+m+f);return a=m*_,o=f*_,t.copy(n).addScaledVector(Ni,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Z_=0;class st extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Qi,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Xg;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==$s&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}st.fromType=function(){return null};class wo extends st{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new I,Mr=new Le;class dn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=lu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),a=new Re),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),a=new Le),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),a=new ut),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wf extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ef extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K_=0;const Dt=new nt,la=new gt,zi=new I,Rt=new _s,Ts=new _s,rt=new I;class Ct extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Ef:wf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new hn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Rt.min,Ts.min),Rt.expandByPoint(rt),rt.addVectors(Rt.max,Ts.max),Rt.expandByPoint(rt)):(Rt.expandByPoint(Ts.min),Rt.expandByPoint(Ts.max))}Rt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),rt.add(zi)),s=Math.max(s,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let z=0;z<o;z++)c[z]=new I,u[z]=new I;const h=new I,f=new I,p=new I,g=new Le,m=new Le,d=new Le,_=new I,b=new I;function C(z,U,ye){h.fromArray(s,z*3),f.fromArray(s,U*3),p.fromArray(s,ye*3),g.fromArray(a,z*2),m.fromArray(a,U*2),d.fromArray(a,ye*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const ue=1/(m.x*d.y-d.x*m.y);isFinite(ue)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(ue),b.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(ue),c[z].add(_),c[U].add(_),c[ye].add(_),u[z].add(b),u[U].add(b),u[ye].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let z=0,U=T.length;z<U;++z){const ye=T[z],ue=ye.start,O=ye.count;for(let ie=ue,k=ue+O;ie<k;ie+=3)C(n[ie+0],n[ie+1],n[ie+2])}const S=new I,P=new I,N=new I,M=new I;function R(z){N.fromArray(r,z*3),M.copy(N);const U=c[z];S.copy(U),S.sub(N.multiplyScalar(N.dot(U))).normalize(),P.crossVectors(M,U);const ue=P.dot(u[z])<0?-1:1;l[z*4]=S.x,l[z*4+1]=S.y,l[z*4+2]=S.z,l[z*4+3]=ue}for(let z=0,U=T.length;z<U;++z){const ye=T[z],ue=ye.start,O=ye.count;for(let ie=ue,k=ue+O;ie<k;ie+=3)R(n[ie+0]),R(n[ie+1]),R(n[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const a=n[s].array,o=e.attributes[s],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,f=c;h<u;h++,f++)a[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mu=new nt,Ui=new So,ca=new er,zn=new I,Un=new I,Bn=new I,ua=new I,ha=new I,fa=new I,br=new I,Sr=new I,wr=new I,Er=new Le,Tr=new Le,Ar=new Le,da=new I,Cr=new I;class Xt extends gt{constructor(e=new Ct,t=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),e.ray.intersectsSphere(ca)===!1)||(Mu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Mu),n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],b=s[_.materialIndex],C=Math.max(_.start,g.start),T=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,P=T;S<P;S+=3){const N=o.getX(S),M=o.getX(S+1),R=o.getX(S+2);a=Lr(this,b,e,Ui,l,c,u,h,f,N,M,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=m,b=d;_<b;_+=3){const C=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);a=Lr(this,s,e,Ui,l,c,u,h,f,C,T,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],b=s[_.materialIndex],C=Math.max(_.start,g.start),T=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,P=T;S<P;S+=3){const N=S,M=S+1,R=S+2;a=Lr(this,b,e,Ui,l,c,u,h,f,N,M,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,b=d;_<b;_+=3){const C=_,T=_+1,S=_+2;a=Lr(this,s,e,Ui,l,c,u,h,f,C,T,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function J_(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side!==as,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Lr(i,e,t,n,s,r,a,o,l,c,u,h){zn.fromBufferAttribute(s,c),Un.fromBufferAttribute(s,u),Bn.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){br.set(0,0,0),Sr.set(0,0,0),wr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(ua.fromBufferAttribute(_,c),ha.fromBufferAttribute(_,u),fa.fromBufferAttribute(_,h),a?(br.addScaledVector(ua,d),Sr.addScaledVector(ha,d),wr.addScaledVector(fa,d)):(br.addScaledVector(ua.sub(zn),d),Sr.addScaledVector(ha.sub(Un),d),wr.addScaledVector(fa.sub(Bn),d)))}zn.add(br),Un.add(Sr),Bn.add(wr)}i.isSkinnedMesh&&(i.boneTransform(c,zn),i.boneTransform(u,Un),i.boneTransform(h,Bn));const p=J_(i,e,t,n,zn,Un,Bn,da);if(p){o&&(Er.fromBufferAttribute(o,c),Tr.fromBufferAttribute(o,u),Ar.fromBufferAttribute(o,h),p.uv=un.getUV(da,zn,Un,Bn,Er,Tr,Ar,new Le)),l&&(Er.fromBufferAttribute(l,c),Tr.fromBufferAttribute(l,u),Ar.fromBufferAttribute(l,h),p.uv2=un.getUV(da,zn,Un,Bn,Er,Tr,Ar,new Le));const g={a:c,b:u,c:h,normal:new I,materialIndex:0};un.getNormal(zn,Un,Bn,g.normal),p.face=g}return p}class xs extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(m,d,_,b,C,T,S,P,N,M,R){const z=T/N,U=S/M,ye=T/2,ue=S/2,O=P/2,ie=N+1,k=M+1;let j=0,W=0;const X=new I;for(let ee=0;ee<k;ee++){const fe=ee*U-ue;for(let le=0;le<ie;le++){const de=le*z-ye;X[m]=de*b,X[d]=fe*C,X[_]=O,c.push(X.x,X.y,X.z),X[m]=0,X[d]=0,X[_]=P>0?1:-1,u.push(X.x,X.y,X.z),h.push(le/N),h.push(1-ee/M),j+=1}}for(let ee=0;ee<M;ee++)for(let fe=0;fe<N;fe++){const le=f+fe+ie*ee,de=f+fe+ie*(ee+1),we=f+(fe+1)+ie*(ee+1),Ae=f+(fe+1)+ie*ee;l.push(le,de,Ae),l.push(de,we,Ae),W+=6}o.addGroup(p,W,R),p+=W,f+=j}}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const s in n)e[s]=n[s]}return e}const Q_={clone:hs,merge:ft};var e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends st{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tf extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Tf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=90,ki=1;class n0 extends gt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new Tt(Bi,ki,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(1,0,0)),this.add(s);const r=new Tt(Bi,ki,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(-1,0,0)),this.add(r);const a=new Tt(Bi,ki,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Tt(Bi,ki,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new Tt(Bi,ki,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Tt(Bi,ki,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Tn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Af extends Jt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i0 extends $n{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Af(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xs(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Xn});r.uniforms.tEquirect.value=t;const a=new Xt(s,r),o=t.minFilter;return t.minFilter===bo&&(t.minFilter=Ft),new n0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const pa=new I,s0=new I,r0=new hn;class si{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pa.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||r0.getNormalMatrix(e),s=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new er,Rr=new I;class Ll{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],b=n[14],C=n[15];return t[0].setComponents(o-s,h-l,m-f,C-d).normalize(),t[1].setComponents(o+s,h+l,m+f,C+d).normalize(),t[2].setComponents(o+r,h+c,m+p,C+_).normalize(),t[3].setComponents(o-r,h-c,m-p,C-_).normalize(),t[4].setComponents(o-a,h-u,m-g,C-b).normalize(),t[5].setComponents(o+a,h+u,m+g,C+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function o0(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Eo extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const b=_*f-a;for(let C=0;C<c;C++){const T=C*h-r;g.push(T,-b,0),m.push(0,0,1),d.push(C/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<o;b++){const C=b+c*_,T=b+c*(_+1),S=b+1+c*(_+1),P=b+1+c*_;p.push(C,T,P),p.push(T,S,P)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(d,2))}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,u0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0="vec3 transformed = vec3( position );",p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,T0=`#define PI 3.141592653589793
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
}`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`vec3 diffuse = vec3( 1.0 );
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
#endif`,$0=`uniform bool receiveShadow;
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
#endif`,Y0=`#if defined( USE_ENVMAP )
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ex=`PhysicalMaterial material;
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
#endif`,tx=`struct PhysicalMaterial {
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
}`,nx=`
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,yx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#ifdef USE_SHADOWMAP
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
#endif`,Ux=`#ifdef USE_SHADOWMAP
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
#endif`,Bx=`#ifdef USE_SHADOWMAP
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
#endif`,kx=`float getShadowMask() {
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
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ev=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,tv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,nv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#include <envmap_common_pars_fragment>
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
}`,lv=`#include <common>
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
}`,cv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,hv=`#define DISTANCE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pv=`uniform float scale;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,xv=`#define LAMBERT
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
}`,vv=`uniform vec3 diffuse;
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
}`,yv=`#define MATCAP
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
}`,Mv=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,Sv=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Ev=`#define PHONG
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,Cv=`#define TOON
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
}`,Lv=`#define TOON
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
}`,Rv=`uniform float size;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Iv=`uniform vec3 color;
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
}`,Fv=`uniform float rotation;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:u0,aomap_fragment:h0,aomap_pars_fragment:f0,begin_vertex:d0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:M0,color_fragment:b0,color_pars_fragment:S0,color_pars_vertex:w0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:L0,displacementmap_vertex:R0,emissivemap_fragment:P0,emissivemap_pars_fragment:D0,encodings_fragment:I0,encodings_pars_fragment:F0,envmap_fragment:N0,envmap_common_pars_fragment:O0,envmap_pars_fragment:z0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:Y0,envmap_vertex:B0,fog_vertex:k0,fog_pars_vertex:G0,fog_fragment:H0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_fragment:j0,lightmap_pars_fragment:q0,lights_lambert_vertex:X0,lights_pars_begin:$0,lights_toon_fragment:Z0,lights_toon_pars_fragment:K0,lights_phong_fragment:J0,lights_phong_pars_fragment:Q0,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:sx,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:ux,map_particle_fragment:hx,map_particle_pars_fragment:fx,metalnessmap_fragment:dx,metalnessmap_pars_fragment:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:xx,normal_fragment_begin:vx,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:bx,normal_vertex:Sx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Cx,output_fragment:Lx,packing:Rx,premultiplied_alpha_fragment:Px,project_vertex:Dx,dithering_fragment:Ix,dithering_pars_fragment:Fx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Ux,shadowmap_vertex:Bx,shadowmask_pars_fragment:kx,skinbase_vertex:Gx,skinning_pars_vertex:Hx,skinning_vertex:Vx,skinnormal_vertex:Wx,specularmap_fragment:jx,specularmap_pars_fragment:qx,tonemapping_fragment:Xx,tonemapping_pars_fragment:$x,transmission_fragment:Yx,transmission_pars_fragment:Zx,uv_pars_fragment:Kx,uv_pars_vertex:Jx,uv_vertex:Qx,uv2_pars_fragment:ev,uv2_pars_vertex:tv,uv2_vertex:nv,worldpos_vertex:iv,background_vert:sv,background_frag:rv,cube_vert:ov,cube_frag:av,depth_vert:lv,depth_frag:cv,distanceRGBA_vert:uv,distanceRGBA_frag:hv,equirect_vert:fv,equirect_frag:dv,linedashed_vert:pv,linedashed_frag:mv,meshbasic_vert:gv,meshbasic_frag:_v,meshlambert_vert:xv,meshlambert_frag:vv,meshmatcap_vert:yv,meshmatcap_frag:Mv,meshnormal_vert:bv,meshnormal_frag:Sv,meshphong_vert:wv,meshphong_frag:Ev,meshphysical_vert:Tv,meshphysical_frag:Av,meshtoon_vert:Cv,meshtoon_frag:Lv,points_vert:Rv,points_frag:Pv,shadow_vert:Dv,shadow_frag:Iv,sprite_vert:Fv,sprite_frag:Nv},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},ln={basic:{uniforms:ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ft([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ft([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ft([Se.points,Se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ft([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ft([Se.common,Se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ft([Se.sprite,Se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:ft([Se.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ft([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ft([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ln.physical={uniforms:ft([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function Ov(i,e,t,n,s,r){const a=new Re(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function p(m,d){let _=!1,b=d.isScene===!0?d.background:null;b&&b.isTexture&&(b=e.get(b));const C=i.xr,T=C.getSession&&C.getSession();T&&T.environmentBlendMode==="additive"&&(b=null),b===null?g(a,o):b&&b.isColor&&(g(b,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Mo)?(c===void 0&&(c=new Xt(new xs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:hs(ln.cube.uniforms),vertexShader:ln.cube.vertexShader,fragmentShader:ln.cube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xt(new Eo(2,2),new Cn({name:"BackgroundMaterial",uniforms:hs(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:p}}function zv(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l,u=!1;function h(O,ie,k,j,W){let X=!1;if(a){const ee=m(j,k,ie);c!==ee&&(c=ee,p(c.object)),X=_(O,j,k,W),X&&b(O,j,k,W)}else{const ee=ie.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==ee)&&(c.geometry=j.id,c.program=k.id,c.wireframe=ee,X=!0)}W!==null&&t.update(W,34963),(X||u)&&(u=!1,M(O,ie,k,j),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,ie,k){const j=k.wireframe===!0;let W=o[O.id];W===void 0&&(W={},o[O.id]=W);let X=W[ie.id];X===void 0&&(X={},W[ie.id]=X);let ee=X[j];return ee===void 0&&(ee=d(f()),X[j]=ee),ee}function d(O){const ie=[],k=[],j=[];for(let W=0;W<s;W++)ie[W]=0,k[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:k,attributeDivisors:j,object:O,attributes:{},index:null}}function _(O,ie,k,j){const W=c.attributes,X=ie.attributes;let ee=0;const fe=k.getAttributes();for(const le in fe)if(fe[le].location>=0){const we=W[le];let Ae=X[le];if(Ae===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),we===void 0||we.attribute!==Ae||Ae&&we.data!==Ae.data)return!0;ee++}return c.attributesNum!==ee||c.index!==j}function b(O,ie,k,j){const W={},X=ie.attributes;let ee=0;const fe=k.getAttributes();for(const le in fe)if(fe[le].location>=0){let we=X[le];we===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(we=O.instanceColor));const Ae={};Ae.attribute=we,we&&we.data&&(Ae.data=we.data),W[le]=Ae,ee++}c.attributes=W,c.attributesNum=ee,c.index=j}function C(){const O=c.newAttributes;for(let ie=0,k=O.length;ie<k;ie++)O[ie]=0}function T(O){S(O,0)}function S(O,ie){const k=c.newAttributes,j=c.enabledAttributes,W=c.attributeDivisors;k[O]=1,j[O]===0&&(i.enableVertexAttribArray(O),j[O]=1),W[O]!==ie&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,ie),W[O]=ie)}function P(){const O=c.newAttributes,ie=c.enabledAttributes;for(let k=0,j=ie.length;k<j;k++)ie[k]!==O[k]&&(i.disableVertexAttribArray(k),ie[k]=0)}function N(O,ie,k,j,W,X){n.isWebGL2===!0&&(k===5124||k===5125)?i.vertexAttribIPointer(O,ie,k,W,X):i.vertexAttribPointer(O,ie,k,j,W,X)}function M(O,ie,k,j){if(n.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const W=j.attributes,X=k.getAttributes(),ee=ie.defaultAttributeValues;for(const fe in X){const le=X[fe];if(le.location>=0){let de=W[fe];if(de===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(de=O.instanceColor)),de!==void 0){const we=de.normalized,Ae=de.itemSize,$=t.get(de);if($===void 0)continue;const G=$.buffer,re=$.type,J=$.bytesPerElement;if(de.isInterleavedBufferAttribute){const K=de.data,Ee=K.stride,w=de.offset;if(K.isInstancedInterleavedBuffer){for(let A=0;A<le.locationSize;A++)S(le.location+A,K.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let A=0;A<le.locationSize;A++)T(le.location+A);i.bindBuffer(34962,G);for(let A=0;A<le.locationSize;A++)N(le.location+A,Ae/le.locationSize,re,we,Ee*J,(w+Ae/le.locationSize*A)*J)}else{if(de.isInstancedBufferAttribute){for(let K=0;K<le.locationSize;K++)S(le.location+K,de.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<le.locationSize;K++)T(le.location+K);i.bindBuffer(34962,G);for(let K=0;K<le.locationSize;K++)N(le.location+K,Ae/le.locationSize,re,we,Ae*J,Ae/le.locationSize*K*J)}}else if(ee!==void 0){const we=ee[fe];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(le.location,we);break;case 3:i.vertexAttrib3fv(le.location,we);break;case 4:i.vertexAttrib4fv(le.location,we);break;default:i.vertexAttrib1fv(le.location,we)}}}}P()}function R(){ye();for(const O in o){const ie=o[O];for(const k in ie){const j=ie[k];for(const W in j)g(j[W].object),delete j[W];delete ie[k]}delete o[O]}}function z(O){if(o[O.id]===void 0)return;const ie=o[O.id];for(const k in ie){const j=ie[k];for(const W in j)g(j[W].object),delete j[W];delete ie[k]}delete o[O.id]}function U(O){for(const ie in o){const k=o[ie];if(k[O.id]===void 0)continue;const j=k[O.id];for(const W in j)g(j[W].object),delete j[W];delete k[O.id]}}function ye(){ue(),u=!0,c!==l&&(c=l,p(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ye,resetDefaultState:ue,dispose:R,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:T,disableUnusedAttributes:P}}function Uv(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Bv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),C=f>0,T=a||e.has("OES_texture_float"),S=C&&T,P=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:P}}function kv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new si,o=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const b=r?0:n,C=b*4;let T=_.clippingState||null;l.value=T,T=u(g,f,C,p);for(let S=0;S!==C;++S)T[S]=t[S];_.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<_)&&(d=new Float32Array(_));for(let C=0,T=p;C!==m;++C,T+=4)a.copy(h[C]).applyMatrix4(b,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Gv(i){let e=new WeakMap;function t(a,o){return o===Ga?a.mapping=ls:o===Ha&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ga||o===Ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new i0(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Hv extends Tf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,bu=[.125,.215,.35,.446,.526,.582],li=20,ma=new Hv,Su=new Re;let ga=null;const ri=(1+Math.sqrt(5))/2,Hi=1/ri,wu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ri,Hi),new I(0,ri,-Hi),new I(Hi,0,ri),new I(-Hi,0,ri),new I(ri,Hi,0),new I(-ri,Hi,0)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ga=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga),e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ys,format:qt,encoding:xi,depthBuffer:!1},s=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vv(r)),this._blurMaterial=Wv(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,s){const o=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Su),u.toneMapping=Tn,u.autoClear=!1;const p=new wo({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Xt(new xs,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Su),m=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):b===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const C=this._cubeSize;Pr(s,b*C,_>2?C:0,C,C),u.setRenderTarget(s),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wu[(s-1)%wu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):li;d>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${li}`);const _=[];let b=0;for(let N=0;N<li;++N){const M=N/m,R=Math.exp(-M*M/2);_.push(R),N===0?b+=R:N<d&&(b+=2*R)}for(let N=0;N<_.length;N++)_[N]=_[N]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const T=this._sizeLods[s],S=3*T*(s>C-Xi?s-C+Xi:0),P=4*(this._cubeSize-T);Pr(t,S,P,3*T,2*T),l.setRenderTarget(t),l.render(h,ma)}}function Vv(i){const e=[],t=[],n=[];let s=i;const r=i-Xi+1+bu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Xi?l=bu[a-i+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,b=new Float32Array(m*g*p),C=new Float32Array(d*g*p),T=new Float32Array(_*g*p);for(let P=0;P<p;P++){const N=P%3*2/3-1,M=P>2?0:-1,R=[N,M,0,N+2/3,M,0,N+2/3,M+1,0,N,M,0,N+2/3,M+1,0,N,M+1,0];b.set(R,m*g*P),C.set(f,d*g*P);const z=[P,P,P,P,P,P];T.set(z,_*g*P)}const S=new Ct;S.setAttribute("position",new dn(b,m)),S.setAttribute("uv",new dn(C,d)),S.setAttribute("faceIndex",new dn(T,_)),e.push(S),s>Xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tu(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wv(i,e,t){const n=new Float32Array(li),s=new I(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Au(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Cu(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function jv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ga||l===Ha,u=l===ls||l===cs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Eu(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Eu(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xv(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const b=p.array;m=p.version;for(let C=0,T=b.length;C<T;C+=3){const S=b[C+0],P=b[C+1],N=b[C+2];f.push(S,P,P,N,N,S)}}else{const b=g.array;m=g.version;for(let C=0,T=b.length/3-1;C<T;C+=3){const S=C+0,P=C+1,N=C+2;f.push(S,P,P,N,N,S)}}const d=new(vf(f)?Ef:wf)(f,1);d.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $v(i,e,t,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(r,p,o,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,o,f*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Yv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zv(i,e){return i[0]-e[0]}function Kv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _a(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function Jv(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let k=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var g=k;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let z=0;T===!0&&(z=1),S===!0&&(z=2),P===!0&&(z=3);let U=u.attributes.position.count*z,ye=1;U>e.maxTextureSize&&(ye=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ue=new Float32Array(U*ye*4*d),O=new Sf(ue,U,ye,d);O.type=ui,O.needsUpdate=!0;const ie=z*4;for(let j=0;j<d;j++){const W=N[j],X=M[j],ee=R[j],fe=U*ye*4*j;for(let le=0;le<W.count;le++){const de=le*ie;T===!0&&(a.fromBufferAttribute(W,le),W.normalized===!0&&_a(a,W),ue[fe+de+0]=a.x,ue[fe+de+1]=a.y,ue[fe+de+2]=a.z,ue[fe+de+3]=0),S===!0&&(a.fromBufferAttribute(X,le),X.normalized===!0&&_a(a,X),ue[fe+de+4]=a.x,ue[fe+de+5]=a.y,ue[fe+de+6]=a.z,ue[fe+de+7]=0),P===!0&&(a.fromBufferAttribute(ee,le),ee.normalized===!0&&_a(a,ee),ue[fe+de+8]=a.x,ue[fe+de+9]=a.y,ue[fe+de+10]=a.z,ue[fe+de+11]=ee.itemSize===4?a.w:1)}}_={count:d,texture:O,size:new Le(U,ye)},r.set(u,_),u.addEventListener("dispose",k)}let b=0;for(let T=0;T<p.length;T++)b+=p[T];const C=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let S=0;S<m;S++)d[S]=[S,0];n[u.id]=d}for(let S=0;S<m;S++){const P=d[S];P[0]=S,P[1]=p[S]}d.sort(Kv);for(let S=0;S<8;S++)S<m&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Zv);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const P=o[S],N=P[0],M=P[1];N!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+S)!==_[N]&&u.setAttribute("morphTarget"+S,_[N]),b&&u.getAttribute("morphNormal"+S)!==b[N]&&u.setAttribute("morphNormal"+S,b[N]),s[S]=M,C+=M):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),b&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const T=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Qv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Lf=new Jt,Rf=new Sf,Pf=new H_,Df=new Af,Lu=[],Ru=[],Pu=new Float32Array(16),Du=new Float32Array(9),Iu=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function To(i,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),St(t,n)}}function ry(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Du.set(n),i.uniformMatrix3fv(this.addr,!1,Du),St(t,n)}}function oy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),St(t,n)}}function ay(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ly(i,e){const t=this.cache;bt(t,e)||(i.uniform2iv(this.addr,e),St(t,e))}function cy(i,e){const t=this.cache;bt(t,e)||(i.uniform3iv(this.addr,e),St(t,e))}function uy(i,e){const t=this.cache;bt(t,e)||(i.uniform4iv(this.addr,e),St(t,e))}function hy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fy(i,e){const t=this.cache;bt(t,e)||(i.uniform2uiv(this.addr,e),St(t,e))}function dy(i,e){const t=this.cache;bt(t,e)||(i.uniform3uiv(this.addr,e),St(t,e))}function py(i,e){const t=this.cache;bt(t,e)||(i.uniform4uiv(this.addr,e),St(t,e))}function my(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Lf,s)}function gy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pf,s)}function _y(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Df,s)}function xy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rf,s)}function vy(i){switch(i){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return uy;case 5125:return hy;case 36294:return fy;case 36295:return dy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return xy}}function yy(i,e){i.uniform1fv(this.addr,e)}function My(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function by(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Sy(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function wy(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ey(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ty(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ay(i,e){i.uniform1iv(this.addr,e)}function Cy(i,e){i.uniform2iv(this.addr,e)}function Ly(i,e){i.uniform3iv(this.addr,e)}function Ry(i,e){i.uniform4iv(this.addr,e)}function Py(i,e){i.uniform1uiv(this.addr,e)}function Dy(i,e){i.uniform2uiv(this.addr,e)}function Iy(i,e){i.uniform3uiv(this.addr,e)}function Fy(i,e){i.uniform4uiv(this.addr,e)}function Ny(i,e,t){const n=e.length,s=To(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Lf,s[r])}function Oy(i,e,t){const n=e.length,s=To(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Pf,s[r])}function zy(i,e,t){const n=e.length,s=To(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Df,s[r])}function Uy(i,e,t){const n=e.length,s=To(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Rf,s[r])}function By(i){switch(i){case 5126:return yy;case 35664:return My;case 35665:return by;case 35666:return Sy;case 35674:return wy;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Cy;case 35668:case 35672:return Ly;case 35669:case 35673:return Ry;case 5125:return Py;case 36294:return Dy;case 36295:return Iy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Uy}}class ky{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vy(t.type)}}class Gy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=By(t.type)}}class Hy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function Vy(i,e,t){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fu(t,c===void 0?new ky(o,i,e):new Gy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Hy(o),Fu(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Vy(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Nu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Wy=0;function jy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qy(i){switch(i){case xi:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ou(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jy(i.getShaderSource(e),a)}else return s}function Xy(i,e){const t=qy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $y(i,e){let t;switch(e){case m_:t="Linear";break;case g_:t="Reinhard";break;case __:t="OptimizedCineon";break;case x_:t="ACESFilmic";break;case v_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function Zy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ky(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function zu(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Jy,Qy)}function Qy(i,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $a(t)}const eM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(tM,If).replace(eM,nM)}function nM(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),If(i,e,t,n)}function If(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function oM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yo:e="ENVMAP_BLENDING_MULTIPLY";break;case d_:e="ENVMAP_BLENDING_MIX";break;case p_:e="ENVMAP_BLENDING_ADD";break}return e}function aM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=iM(t),c=sM(t),u=rM(t),h=oM(t),f=aM(t),p=t.isWebGL2?"":Yy(t),g=Zy(r),m=s.createProgram();let d,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ps).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Ps).join(`
`),_.length>0&&(_+=`
`)):(d=[ku(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),_=[p,ku(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Tn?$y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Xy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=$a(a),a=zu(a,t),a=Uu(a,t),o=$a(o),o=zu(o,t),o=Uu(o,t),a=Bu(a),o=Bu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=b+d+a,T=b+_+o,S=Nu(s,35633,C),P=Nu(s,35632,T);if(s.attachShader(m,S),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const R=s.getProgramInfoLog(m).trim(),z=s.getShaderInfoLog(S).trim(),U=s.getShaderInfoLog(P).trim();let ye=!0,ue=!0;if(s.getProgramParameter(m,35714)===!1){ye=!1;const O=Ou(s,S,"vertex"),ie=Ou(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+O+`
`+ie)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||U==="")&&(ue=!1);ue&&(this.diagnostics={runnable:ye,programLog:R,vertexShader:{log:z,prefix:d},fragmentShader:{log:U,prefix:_}})}s.deleteShader(S),s.deleteShader(P);let N;this.getUniforms=function(){return N===void 0&&(N=new jr(s,m)),N};let M;return this.getAttributes=function(){return M===void 0&&(M=Ky(s,m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Wy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=P,this}let cM=0;class uM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new hM(e);t.set(e,n)}return t.get(e)}}class hM{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}}function fM(i,e,t,n,s,r,a){const o=new Cl,l=new uM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,R,z,U,ye){const ue=U.fog,O=ye.geometry,ie=M.isMeshStandardMaterial?U.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||ie),j=k&&k.mapping===Mo?k.image.height:null,W=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=X!==void 0?X.length:0;let fe=0;O.morphAttributes.position!==void 0&&(fe=1),O.morphAttributes.normal!==void 0&&(fe=2),O.morphAttributes.color!==void 0&&(fe=3);let le,de,we,Ae;if(W){const Ee=ln[W];le=Ee.vertexShader,de=Ee.fragmentShader}else le=M.vertexShader,de=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const $=i.getRenderTarget(),G=M.alphaTest>0,re=M.clearcoat>0,J=M.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:M.type,vertexShader:le,fragmentShader:de,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ye.isInstancedMesh===!0,instancingColor:ye.isInstancedMesh===!0&&ye.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:xi,map:!!M.map,matcap:!!M.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:j,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===U_,tangentSpaceNormalMap:M.normalMapType===gs,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ze,clearcoat:re,clearcoatMap:re&&!!M.clearcoatMap,clearcoatRoughnessMap:re&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!M.clearcoatNormalMap,iridescence:J,iridescenceMap:J&&!!M.iridescenceMap,iridescenceThicknessMap:J&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Qi,alphaMap:!!M.alphaMap,alphaTest:G,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ue,useFog:M.fog===!0,fogExp2:ue&&ue.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ye.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:Tn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===as,flipSided:M.side===Zt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)R.push(z),R.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(_(R,M),b(R,M),R.push(i.outputEncoding)),R.push(M.customProgramCacheKey),R.join()}function _(M,R){M.push(R.precision),M.push(R.outputEncoding),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.combine),M.push(R.vertexUvs),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function b(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.lightMap&&o.enable(7),R.aoMap&&o.enable(8),R.emissiveMap&&o.enable(9),R.bumpMap&&o.enable(10),R.normalMap&&o.enable(11),R.objectSpaceNormalMap&&o.enable(12),R.tangentSpaceNormalMap&&o.enable(13),R.clearcoat&&o.enable(14),R.clearcoatMap&&o.enable(15),R.clearcoatRoughnessMap&&o.enable(16),R.clearcoatNormalMap&&o.enable(17),R.iridescence&&o.enable(18),R.iridescenceMap&&o.enable(19),R.iridescenceThicknessMap&&o.enable(20),R.displacementMap&&o.enable(21),R.specularMap&&o.enable(22),R.roughnessMap&&o.enable(23),R.metalnessMap&&o.enable(24),R.gradientMap&&o.enable(25),R.alphaMap&&o.enable(26),R.alphaTest&&o.enable(27),R.vertexColors&&o.enable(28),R.vertexAlphas&&o.enable(29),R.vertexUvs&&o.enable(30),R.vertexTangents&&o.enable(31),R.uvsVertexOnly&&o.enable(32),R.fog&&o.enable(33),M.push(o.mask),o.disableAll(),R.useFog&&o.enable(0),R.flatShading&&o.enable(1),R.logarithmicDepthBuffer&&o.enable(2),R.skinning&&o.enable(3),R.morphTargets&&o.enable(4),R.morphNormals&&o.enable(5),R.morphColors&&o.enable(6),R.premultipliedAlpha&&o.enable(7),R.shadowMapEnabled&&o.enable(8),R.physicallyCorrectLights&&o.enable(9),R.doubleSided&&o.enable(10),R.flipSided&&o.enable(11),R.useDepthPacking&&o.enable(12),R.dithering&&o.enable(13),R.specularIntensityMap&&o.enable(14),R.specularColorMap&&o.enable(15),R.transmission&&o.enable(16),R.transmissionMap&&o.enable(17),R.thicknessMap&&o.enable(18),R.sheen&&o.enable(19),R.sheenColorMap&&o.enable(20),R.sheenRoughnessMap&&o.enable(21),R.decodeVideoTexture&&o.enable(22),R.opaque&&o.enable(23),M.push(o.mask)}function C(M){const R=g[M.type];let z;if(R){const U=ln[R];z=Q_.clone(U.uniforms)}else z=M.uniforms;return z}function T(M,R){let z;for(let U=0,ye=c.length;U<ye;U++){const ue=c[U];if(ue.cacheKey===R){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new lM(i,R,M,r),c.push(z)),z}function S(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:T,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:N}}function dM(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function pM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,m,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),e++,_}function o(h,f,p,g,m,d){const _=a(h,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(h,f,p,g,m,d){const _=a(h,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||pM),n.length>1&&n.sort(f||Gu),s.length>1&&s.sort(f||Gu)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function mM(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new Hu,i.set(n,[r])):s>=i.get(n).length?(r=new Hu,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function gM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function _M(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xM=0;function vM(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function yM(i,e){const t=new gM,n=_M(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,a=new nt,o=new nt;function l(u,h){let f=0,p=0,g=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let m=0,d=0,_=0,b=0,C=0,T=0,S=0,P=0;u.sort(vM);const N=h!==!0?Math.PI:1;for(let R=0,z=u.length;R<z;R++){const U=u[R],ye=U.color,ue=U.intensity,O=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=ye.r*ue*N,p+=ye.g*ue*N,g+=ye.b*ue*N;else if(U.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(U.sh.coefficients[k],ue);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*N),U.castShadow){const j=U.shadow,W=n.get(U);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.directionalShadow[m]=W,s.directionalShadowMap[m]=ie,s.directionalShadowMatrix[m]=U.shadow.matrix,T++}s.directional[m]=k,m++}else if(U.isSpotLight){const k=t.get(U);if(k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(ye).multiplyScalar(ue*N),k.distance=O,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,U.castShadow){const j=U.shadow,W=n.get(U);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.spotShadow[_]=W,s.spotShadowMap[_]=ie,s.spotShadowMatrix[_]=U.shadow.matrix,P++}s.spot[_]=k,_++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(ye).multiplyScalar(ue),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),s.rectArea[b]=k,b++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*N),k.distance=U.distance,k.decay=U.decay,U.castShadow){const j=U.shadow,W=n.get(U);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,s.pointShadow[d]=W,s.pointShadowMap[d]=ie,s.pointShadowMatrix[d]=U.shadow.matrix,S++}s.point[d]=k,d++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(ue*N),k.groundColor.copy(U.groundColor).multiplyScalar(ue*N),s.hemi[C]=k,C++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const M=s.hash;(M.directionalLength!==m||M.pointLength!==d||M.spotLength!==_||M.rectAreaLength!==b||M.hemiLength!==C||M.numDirectionalShadows!==T||M.numPointShadows!==S||M.numSpotShadows!==P)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=b,s.point.length=d,s.hemi.length=C,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=S,s.spotShadowMatrix.length=P,M.directionalLength=m,M.pointLength=d,M.spotLength=_,M.rectAreaLength=b,M.hemiLength=C,M.numDirectionalShadows=T,M.numPointShadows=S,M.numSpotShadows=P,s.version=xM++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let b=0,C=u.length;b<C;b++){const T=u[b];if(T.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(T.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const S=s.rectArea[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),o.identity(),a.copy(T.matrixWorld),a.premultiply(_),o.extractRotation(a),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const S=s.point[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),p++}else if(T.isHemisphereLight){const S=s.hemi[d];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Vu(i,e){const t=new yM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function MM(i,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Vu(i,e),t.set(r,[o])):a>=t.get(r).length?(o=new Vu(i,e),t.get(r).push(o)):o=t.get(r)[a],o}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ff extends st{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nf extends st{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
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
}`;function wM(i,e,t){let n=new Ll;const s=new Le,r=new Le,a=new ut,o=new Ff({depthPacking:z_}),l=new Nf,c={},u=t.maxTextureSize,h={0:Zt,1:$s,2:as},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:bM,fragmentShader:SM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf,this.render=function(T,S,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const N=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let U=0,ye=T.length;U<ye;U++){const ue=T[U],O=ue.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ie=O.getFrameExtents();if(s.multiply(ie),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,O.mapSize.y=r.y)),O.map===null&&!O.isPointLightShadow&&this.type===Rs&&(O.map=new $n(s.x,s.y),O.map.texture.name=ue.name+".shadowMap",O.mapPass=new $n(s.x,s.y),O.camera.updateProjectionMatrix()),O.map===null){const j={minFilter:Et,magFilter:Et,format:qt};O.map=new $n(s.x,s.y,j),O.map.texture.name=ue.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const k=O.getViewportCount();for(let j=0;j<k;j++){const W=O.getViewport(j);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(a),O.updateMatrices(ue,j),n=O.getFrustum(),C(S,P,O.camera,ue,this.type)}!O.isPointLightShadow&&this.type===Rs&&_(O,P),O.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(N,M,R)};function _(T,S){const P=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,P,f,m,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,P,p,m,null)}function b(T,S,P,N,M,R){let z=null;const U=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0?z=U:z=P.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ye=z.uuid,ue=S.uuid;let O=c[ye];O===void 0&&(O={},c[ye]=O);let ie=O[ue];ie===void 0&&(ie=z.clone(),O[ue]=ie),z=ie}return z.visible=S.visible,z.wireframe=S.wireframe,R===Rs?z.side=S.shadowSide!==null?S.shadowSide:S.side:z.side=S.shadowSide!==null?S.shadowSide:h[S.side],z.alphaMap=S.alphaMap,z.alphaTest=S.alphaTest,z.clipShadows=S.clipShadows,z.clippingPlanes=S.clippingPlanes,z.clipIntersection=S.clipIntersection,z.displacementMap=S.displacementMap,z.displacementScale=S.displacementScale,z.displacementBias=S.displacementBias,z.wireframeLinewidth=S.wireframeLinewidth,z.linewidth=S.linewidth,P.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(P.matrixWorld),z.nearDistance=N,z.farDistance=M),z}function C(T,S,P,N,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Rs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=e.update(T),ye=T.material;if(Array.isArray(ye)){const ue=U.groups;for(let O=0,ie=ue.length;O<ie;O++){const k=ue[O],j=ye[k.materialIndex];if(j&&j.visible){const W=b(T,j,N,P.near,P.far,M);i.renderBufferDirect(P,null,U,W,T,k)}}}else if(ye.visible){const ue=b(T,ye,N,P.near,P.far,M);i.renderBufferDirect(P,null,U,ue,T,null)}}const z=T.children;for(let U=0,ye=z.length;U<ye;U++)C(z[U],S,P,N,M)}}function EM(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const xe=new ut;let he=null;const Te=new ut(0,0,0,0);return{setMask:function(be){he!==be&&!L&&(i.colorMask(be,be,be,be),he=be)},setLocked:function(be){L=be},setClear:function(be,Ce,ve,De,je){je===!0&&(be*=De,Ce*=De,ve*=De),xe.set(be,Ce,ve,De),Te.equals(xe)===!1&&(i.clearColor(be,Ce,ve,De),Te.copy(xe))},reset:function(){L=!1,he=null,Te.set(-1,0,0,0)}}}function r(){let L=!1,xe=null,he=null,Te=null;return{setTest:function(be){be?Ae(2929):$(2929)},setMask:function(be){xe!==be&&!L&&(i.depthMask(be),xe=be)},setFunc:function(be){if(he!==be){if(be)switch(be){case o_:i.depthFunc(512);break;case a_:i.depthFunc(519);break;case l_:i.depthFunc(513);break;case ka:i.depthFunc(515);break;case c_:i.depthFunc(514);break;case u_:i.depthFunc(518);break;case h_:i.depthFunc(516);break;case f_:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);he=be}},setLocked:function(be){L=be},setClear:function(be){Te!==be&&(i.clearDepth(be),Te=be)},reset:function(){L=!1,xe=null,he=null,Te=null}}}function a(){let L=!1,xe=null,he=null,Te=null,be=null,Ce=null,ve=null,De=null,je=null;return{setTest:function(qe){L||(qe?Ae(2960):$(2960))},setMask:function(qe){xe!==qe&&!L&&(i.stencilMask(qe),xe=qe)},setFunc:function(qe,_t,Qt){(he!==qe||Te!==_t||be!==Qt)&&(i.stencilFunc(qe,_t,Qt),he=qe,Te=_t,be=Qt)},setOp:function(qe,_t,Qt){(Ce!==qe||ve!==_t||De!==Qt)&&(i.stencilOp(qe,_t,Qt),Ce=qe,ve=_t,De=Qt)},setLocked:function(qe){L=qe},setClear:function(qe){je!==qe&&(i.clearStencil(qe),je=qe)},reset:function(){L=!1,xe=null,he=null,Te=null,be=null,Ce=null,ve=null,De=null,je=null}}}const o=new s,l=new r,c=new a;let u={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,_=null,b=null,C=null,T=null,S=null,P=null,N=!1,M=null,R=null,z=null,U=null,ye=null;const ue=i.getParameter(35661);let O=!1,ie=0;const k=i.getParameter(7938);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=ie>=2);let j=null,W={};const X=i.getParameter(3088),ee=i.getParameter(2978),fe=new ut().fromArray(X),le=new ut().fromArray(ee);function de(L,xe,he){const Te=new Uint8Array(4),be=i.createTexture();i.bindTexture(L,be),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Ce=0;Ce<he;Ce++)i.texImage2D(xe+Ce,0,6408,1,1,0,6408,5121,Te);return be}const we={};we[3553]=de(3553,3553,1),we[34067]=de(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(ka),D(!1),H(Ic),Ae(2884),w(Xn);function Ae(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function $(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function G(L,xe){return h[L]!==xe?(i.bindFramebuffer(L,xe),h[L]=xe,n&&(L===36009&&(h[36160]=xe),L===36160&&(h[36009]=xe)),!0):!1}function re(L,xe){let he=p,Te=!1;if(L)if(he=f.get(xe),he===void 0&&(he=[],f.set(xe,he)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(he.length!==be.length||he[0]!==36064){for(let Ce=0,ve=be.length;Ce<ve;Ce++)he[Ce]=36064+Ce;he.length=be.length,Te=!0}}else he[0]!==36064&&(he[0]=36064,Te=!0);else he[0]!==1029&&(he[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function J(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const K={[Wi]:32774,[Yg]:32778,[Zg]:32779};if(n)K[zc]=32775,K[Uc]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(K[zc]=L.MIN_EXT,K[Uc]=L.MAX_EXT)}const Ee={[Kg]:0,[Jg]:1,[Qg]:768,[mf]:770,[r_]:776,[i_]:774,[t_]:772,[e_]:769,[gf]:771,[s_]:775,[n_]:773};function w(L,xe,he,Te,be,Ce,ve,De){if(L===Xn){m===!0&&($(3042),m=!1);return}if(m===!1&&(Ae(3042),m=!0),L!==$g){if(L!==d||De!==N){if((_!==Wi||T!==Wi)&&(i.blendEquation(32774),_=Wi,T=Wi),De)switch(L){case Qi:i.blendFuncSeparate(1,771,1,771);break;case Fc:i.blendFunc(1,1);break;case Nc:i.blendFuncSeparate(0,769,0,1);break;case Oc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qi:i.blendFuncSeparate(770,771,1,771);break;case Fc:i.blendFunc(770,1);break;case Nc:i.blendFuncSeparate(0,769,0,1);break;case Oc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,C=null,S=null,P=null,d=L,N=De}return}be=be||xe,Ce=Ce||he,ve=ve||Te,(xe!==_||be!==T)&&(i.blendEquationSeparate(K[xe],K[be]),_=xe,T=be),(he!==b||Te!==C||Ce!==S||ve!==P)&&(i.blendFuncSeparate(Ee[he],Ee[Te],Ee[Ce],Ee[ve]),b=he,C=Te,S=Ce,P=ve),d=L,N=null}function A(L,xe){L.side===as?$(2884):Ae(2884);let he=L.side===Zt;xe&&(he=!he),D(he),L.blending===Qi&&L.transparent===!1?w(Xn):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Te=L.stencilWrite;c.setTest(Te),Te&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(32926):$(32926)}function D(L){M!==L&&(L?i.frontFace(2304):i.frontFace(2305),M=L)}function H(L){L!==Wg?(Ae(2884),L!==R&&(L===Ic?i.cullFace(1029):L===jg?i.cullFace(1028):i.cullFace(1032))):$(2884),R=L}function Z(L){L!==z&&(O&&i.lineWidth(L),z=L)}function se(L,xe,he){L?(Ae(32823),(U!==xe||ye!==he)&&(i.polygonOffset(xe,he),U=xe,ye=he)):$(32823)}function pe(L){L?Ae(3089):$(3089)}function te(L){L===void 0&&(L=33984+ue-1),j!==L&&(i.activeTexture(L),j=L)}function me(L,xe){j===null&&te();let he=W[j];he===void 0&&(he={type:void 0,texture:void 0},W[j]=he),(he.type!==L||he.texture!==xe)&&(i.bindTexture(L,xe||we[L]),he.type=L,he.texture=xe)}function ae(){const L=W[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function y(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(L){fe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function ge(L){le.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),le.copy(L))}function _e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,W={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,_=null,b=null,C=null,T=null,S=null,P=null,N=!1,M=null,R=null,z=null,U=null,ye=null,fe.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:$,bindFramebuffer:G,drawBuffers:re,useProgram:J,setBlending:w,setMaterial:A,setFlipSided:D,setCullFace:H,setLineWidth:Z,setPolygonOffset:se,setScissorTest:pe,activeTexture:te,bindTexture:me,unbindTexture:ae,compressedTexImage2D:v,texImage2D:Me,texImage3D:y,texStorage2D:Q,texStorage3D:ce,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:q,scissor:ne,viewport:ge,reset:_e}}function TM(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(v,x){return _?new OffscreenCanvas(v,x):to("canvas")}function C(v,x,F,q){let Q=1;if((v.width>q||v.height>q)&&(Q=q/Math.max(v.width,v.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const ce=x?Xa:Math.floor,Me=ce(Q*v.width),y=ce(Q*v.height);m===void 0&&(m=b(Me,y));const ne=F?b(Me,y):m;return ne.width=Me,ne.height=y,ne.getContext("2d").drawImage(v,0,0,Me,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Me+"x"+y+")."),ne}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function T(v){return uu(v.width)&&uu(v.height)}function S(v){return o?!1:v.wrapS!==Vt||v.wrapT!==Vt||v.minFilter!==Et&&v.minFilter!==Ft}function P(v,x){return v.generateMipmaps&&x&&v.minFilter!==Et&&v.minFilter!==Ft}function N(v){i.generateMipmap(v)}function M(v,x,F,q,Q=!1){if(o===!1)return x;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ce=x;return x===6403&&(F===5126&&(ce=33326),F===5131&&(ce=33325),F===5121&&(ce=33321)),x===33319&&(F===5126&&(ce=33328),F===5131&&(ce=33327),F===5121&&(ce=33323)),x===6408&&(F===5126&&(ce=34836),F===5131&&(ce=34842),F===5121&&(ce=q===Ze&&Q===!1?35907:32856),F===32819&&(ce=32854),F===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function R(v,x,F){return P(v,F)===!0||v.isFramebufferTexture&&v.minFilter!==Et&&v.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function z(v){return v===Et||v===Bc||v===kc?9728:9729}function U(v){const x=v.target;x.removeEventListener("dispose",U),ue(x),x.isVideoTexture&&g.delete(x)}function ye(v){const x=v.target;x.removeEventListener("dispose",ye),ie(x)}function ue(v){const x=n.get(v);if(x.__webglInit===void 0)return;const F=v.source,q=d.get(F);if(q){const Q=q[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(v),Object.keys(q).length===0&&d.delete(F)}n.remove(v)}function O(v){const x=n.get(v);i.deleteTexture(x.__webglTexture);const F=v.source,q=d.get(F);delete q[x.__cacheKey],a.memory.textures--}function ie(v){const x=v.texture,F=n.get(v),q=n.get(x);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(F.__webglFramebuffer[Q]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let Q=0,ce=x.length;Q<ce;Q++){const Me=n.get(x[Q]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(x[Q])}n.remove(x),n.remove(v)}let k=0;function j(){k=0}function W(){const v=k;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),k+=1,v}function X(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function ee(v,x){const F=n.get(v);if(v.isVideoTexture&&me(v),v.isRenderTargetTexture===!1&&v.version>0&&F.__version!==v.version){const q=v.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,F.__webglTexture)}function fe(v,x){const F=n.get(v);if(v.version>0&&F.__version!==v.version){re(F,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,F.__webglTexture)}function le(v,x){const F=n.get(v);if(v.version>0&&F.__version!==v.version){re(F,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,F.__webglTexture)}function de(v,x){const F=n.get(v);if(v.version>0&&F.__version!==v.version){J(F,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,F.__webglTexture)}const we={[Va]:10497,[Vt]:33071,[Wa]:33648},Ae={[Et]:9728,[Bc]:9984,[kc]:9986,[Ft]:9729,[y_]:9985,[bo]:9987};function $(v,x,F){if(F?(i.texParameteri(v,10242,we[x.wrapS]),i.texParameteri(v,10243,we[x.wrapT]),(v===32879||v===35866)&&i.texParameteri(v,32882,we[x.wrapR]),i.texParameteri(v,10240,Ae[x.magFilter]),i.texParameteri(v,10241,Ae[x.minFilter])):(i.texParameteri(v,10242,33071),i.texParameteri(v,10243,33071),(v===32879||v===35866)&&i.texParameteri(v,32882,33071),(x.wrapS!==Vt||x.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,10240,z(x.magFilter)),i.texParameteri(v,10241,z(x.minFilter)),x.minFilter!==Et&&x.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(x.type===ui&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ys&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(v,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function G(v,x){let F=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",U));const q=x.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const ce=X(x);if(ce!==v.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[ce].usedTimes++;const Me=Q[v.__cacheKey];Me!==void 0&&(Q[v.__cacheKey].usedTimes--,Me.usedTimes===0&&O(x)),v.__cacheKey=ce,v.__webglTexture=Q[ce].texture}return F}function re(v,x,F){let q=3553;x.isDataArrayTexture&&(q=35866),x.isData3DTexture&&(q=32879);const Q=G(v,x),ce=x.source;if(t.activeTexture(33984+F),t.bindTexture(q,v.__webglTexture),ce.version!==ce.__currentVersion||Q===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const Me=S(x)&&T(x.image)===!1;let y=C(x.image,Me,!1,u);y=ae(x,y);const ne=T(y)||o,ge=r.convert(x.format,x.encoding);let _e=r.convert(x.type),L=M(x.internalFormat,ge,_e,x.encoding,x.isVideoTexture);$(q,x,ne);let xe;const he=x.mipmaps,Te=o&&x.isVideoTexture!==!0,be=ce.__currentVersion===void 0||Q===!0,Ce=R(x,y,ne);if(x.isDepthTexture)L=6402,o?x.type===ui?L=36012:x.type===ci?L=33190:x.type===es?L=35056:L=33189:x.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===mi&&L===6402&&x.type!==xf&&x.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ci,_e=r.convert(x.type)),x.format===us&&L===6402&&(L=34041,x.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=es,_e=r.convert(x.type))),be&&(Te?t.texStorage2D(3553,1,L,y.width,y.height):t.texImage2D(3553,0,L,y.width,y.height,0,ge,_e,null));else if(x.isDataTexture)if(he.length>0&&ne){Te&&be&&t.texStorage2D(3553,Ce,L,he[0].width,he[0].height);for(let ve=0,De=he.length;ve<De;ve++)xe=he[ve],Te?t.texSubImage2D(3553,ve,0,0,xe.width,xe.height,ge,_e,xe.data):t.texImage2D(3553,ve,L,xe.width,xe.height,0,ge,_e,xe.data);x.generateMipmaps=!1}else Te?(be&&t.texStorage2D(3553,Ce,L,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,ge,_e,y.data)):t.texImage2D(3553,0,L,y.width,y.height,0,ge,_e,y.data);else if(x.isCompressedTexture){Te&&be&&t.texStorage2D(3553,Ce,L,he[0].width,he[0].height);for(let ve=0,De=he.length;ve<De;ve++)xe=he[ve],x.format!==qt?ge!==null?Te?t.compressedTexSubImage2D(3553,ve,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(3553,ve,L,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(3553,ve,0,0,xe.width,xe.height,ge,_e,xe.data):t.texImage2D(3553,ve,L,xe.width,xe.height,0,ge,_e,xe.data)}else if(x.isDataArrayTexture)Te?(be&&t.texStorage3D(35866,Ce,L,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ge,_e,y.data)):t.texImage3D(35866,0,L,y.width,y.height,y.depth,0,ge,_e,y.data);else if(x.isData3DTexture)Te?(be&&t.texStorage3D(32879,Ce,L,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ge,_e,y.data)):t.texImage3D(32879,0,L,y.width,y.height,y.depth,0,ge,_e,y.data);else if(x.isFramebufferTexture){if(be)if(Te)t.texStorage2D(3553,Ce,L,y.width,y.height);else{let ve=y.width,De=y.height;for(let je=0;je<Ce;je++)t.texImage2D(3553,je,L,ve,De,0,ge,_e,null),ve>>=1,De>>=1}}else if(he.length>0&&ne){Te&&be&&t.texStorage2D(3553,Ce,L,he[0].width,he[0].height);for(let ve=0,De=he.length;ve<De;ve++)xe=he[ve],Te?t.texSubImage2D(3553,ve,0,0,ge,_e,xe):t.texImage2D(3553,ve,L,ge,_e,xe);x.generateMipmaps=!1}else Te?(be&&t.texStorage2D(3553,Ce,L,y.width,y.height),t.texSubImage2D(3553,0,0,0,ge,_e,y)):t.texImage2D(3553,0,L,ge,_e,y);P(x,ne)&&N(q),ce.__currentVersion=ce.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function J(v,x,F){if(x.image.length!==6)return;const q=G(v,x),Q=x.source;if(t.activeTexture(33984+F),t.bindTexture(34067,v.__webglTexture),Q.version!==Q.__currentVersion||q===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,y=[];for(let ve=0;ve<6;ve++)!ce&&!Me?y[ve]=C(x.image[ve],!1,!0,c):y[ve]=Me?x.image[ve].image:x.image[ve],y[ve]=ae(x,y[ve]);const ne=y[0],ge=T(ne)||o,_e=r.convert(x.format,x.encoding),L=r.convert(x.type),xe=M(x.internalFormat,_e,L,x.encoding),he=o&&x.isVideoTexture!==!0,Te=Q.__currentVersion===void 0||q===!0;let be=R(x,ne,ge);$(34067,x,ge);let Ce;if(ce){he&&Te&&t.texStorage2D(34067,be,xe,ne.width,ne.height);for(let ve=0;ve<6;ve++){Ce=y[ve].mipmaps;for(let De=0;De<Ce.length;De++){const je=Ce[De];x.format!==qt?_e!==null?he?t.compressedTexSubImage2D(34069+ve,De,0,0,je.width,je.height,_e,je.data):t.compressedTexImage2D(34069+ve,De,xe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+ve,De,0,0,je.width,je.height,_e,L,je.data):t.texImage2D(34069+ve,De,xe,je.width,je.height,0,_e,L,je.data)}}}else{Ce=x.mipmaps,he&&Te&&(Ce.length>0&&be++,t.texStorage2D(34067,be,xe,y[0].width,y[0].height));for(let ve=0;ve<6;ve++)if(Me){he?t.texSubImage2D(34069+ve,0,0,0,y[ve].width,y[ve].height,_e,L,y[ve].data):t.texImage2D(34069+ve,0,xe,y[ve].width,y[ve].height,0,_e,L,y[ve].data);for(let De=0;De<Ce.length;De++){const qe=Ce[De].image[ve].image;he?t.texSubImage2D(34069+ve,De+1,0,0,qe.width,qe.height,_e,L,qe.data):t.texImage2D(34069+ve,De+1,xe,qe.width,qe.height,0,_e,L,qe.data)}}else{he?t.texSubImage2D(34069+ve,0,0,0,_e,L,y[ve]):t.texImage2D(34069+ve,0,xe,_e,L,y[ve]);for(let De=0;De<Ce.length;De++){const je=Ce[De];he?t.texSubImage2D(34069+ve,De+1,0,0,_e,L,je.image[ve]):t.texImage2D(34069+ve,De+1,xe,_e,L,je.image[ve])}}}P(x,ge)&&N(34067),Q.__currentVersion=Q.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function K(v,x,F,q,Q){const ce=r.convert(F.format,F.encoding),Me=r.convert(F.type),y=M(F.internalFormat,ce,Me,F.encoding);n.get(x).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,y,x.width,x.height,x.depth,0,ce,Me,null):t.texImage2D(Q,0,y,x.width,x.height,0,ce,Me,null)),t.bindFramebuffer(36160,v),te(x)?f.framebufferTexture2DMultisampleEXT(36160,q,Q,n.get(F).__webglTexture,0,pe(x)):i.framebufferTexture2D(36160,q,Q,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(v,x,F){if(i.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let q=33189;if(F||te(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ui?q=36012:Q.type===ci&&(q=33190));const ce=pe(x);te(x)?f.renderbufferStorageMultisampleEXT(36161,ce,q,x.width,x.height):i.renderbufferStorageMultisample(36161,ce,q,x.width,x.height)}else i.renderbufferStorage(36161,q,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const q=pe(x);F&&te(x)===!1?i.renderbufferStorageMultisample(36161,q,35056,x.width,x.height):te(x)?f.renderbufferStorageMultisampleEXT(36161,q,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,v)}else{const q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<q.length;Q++){const ce=q[Q],Me=r.convert(ce.format,ce.encoding),y=r.convert(ce.type),ne=M(ce.internalFormat,Me,y,ce.encoding),ge=pe(x);F&&te(x)===!1?i.renderbufferStorageMultisample(36161,ge,ne,x.width,x.height):te(x)?f.renderbufferStorageMultisampleEXT(36161,ge,ne,x.width,x.height):i.renderbufferStorage(36161,ne,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function w(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,Q=pe(x);if(x.depthTexture.format===mi)te(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,Q):i.framebufferTexture2D(36160,36096,3553,q,0);else if(x.depthTexture.format===us)te(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,Q):i.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function A(v){const x=n.get(v),F=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");w(x.__webglFramebuffer,v)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[q],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function D(v,x,F){const q=n.get(v);x!==void 0&&K(q.__webglFramebuffer,v,v.texture,36064,3553),F!==void 0&&A(v)}function H(v){const x=v.texture,F=n.get(v),q=n.get(x);v.addEventListener("dispose",ye),v.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++);const Q=v.isWebGLCubeRenderTarget===!0,ce=v.isWebGLMultipleRenderTargets===!0,Me=T(v)||o;if(Q){F.__webglFramebuffer=[];for(let y=0;y<6;y++)F.__webglFramebuffer[y]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),ce)if(s.drawBuffers){const y=v.texture;for(let ne=0,ge=y.length;ne<ge;ne++){const _e=n.get(y[ne]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&te(v)===!1){const y=ce?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let ne=0;ne<y.length;ne++){const ge=y[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[ne]);const _e=r.convert(ge.format,ge.encoding),L=r.convert(ge.type),xe=M(ge.internalFormat,_e,L,ge.encoding),he=pe(v);i.renderbufferStorageMultisample(36161,he,xe,v.width,v.height),i.framebufferRenderbuffer(36160,36064+ne,36161,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(36161,null),v.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,q.__webglTexture),$(34067,x,Me);for(let y=0;y<6;y++)K(F.__webglFramebuffer[y],v,x,36064,34069+y);P(x,Me)&&N(34067),t.unbindTexture()}else if(ce){const y=v.texture;for(let ne=0,ge=y.length;ne<ge;ne++){const _e=y[ne],L=n.get(_e);t.bindTexture(3553,L.__webglTexture),$(3553,_e,Me),K(F.__webglFramebuffer,v,_e,36064+ne,3553),P(_e,Me)&&N(3553)}t.unbindTexture()}else{let y=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?y=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,q.__webglTexture),$(y,x,Me),K(F.__webglFramebuffer,v,x,36064,y),P(x,Me)&&N(y),t.unbindTexture()}v.depthBuffer&&A(v)}function Z(v){const x=T(v)||o,F=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0,Q=F.length;q<Q;q++){const ce=F[q];if(P(ce,x)){const Me=v.isWebGLCubeRenderTarget?34067:3553,y=n.get(ce).__webglTexture;t.bindTexture(Me,y),N(Me),t.unbindTexture()}}}function se(v){if(o&&v.samples>0&&te(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],F=v.width,q=v.height;let Q=16384;const ce=[],Me=v.stencilBuffer?33306:36096,y=n.get(v),ne=v.isWebGLMultipleRenderTargets===!0;if(ne)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){ce.push(36064+ge),v.depthBuffer&&ce.push(Me);const _e=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(_e===!1&&(v.depthBuffer&&(Q|=256),v.stencilBuffer&&(Q|=1024)),ne&&i.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ge]),_e===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),ne){const L=n.get(x[ge]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,L,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,Q,9728),p&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,y.__webglColorRenderbuffer[ge]);const _e=n.get(x[ge]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,_e,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function pe(v){return Math.min(h,v.samples)}function te(v){const x=n.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(v){const x=a.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function ae(v,x){const F=v.encoding,q=v.format,Q=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===ja||F!==xi&&(F===Ze?o===!1?e.has("EXT_sRGB")===!0&&q===qt?(v.format=ja,v.minFilter=Ft,v.generateMipmaps=!1):x=Mf.sRGBToLinear(x):(q!==qt||Q!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),x}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=fe,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=D,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=K,this.useMultisampledRTT=te}function AM(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===_i)return 5121;if(r===w_)return 32819;if(r===E_)return 32820;if(r===M_)return 5120;if(r===b_)return 5122;if(r===xf)return 5123;if(r===S_)return 5124;if(r===ci)return 5125;if(r===ui)return 5126;if(r===Ys)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===T_)return 6406;if(r===qt)return 6408;if(r===C_)return 6409;if(r===L_)return 6410;if(r===mi)return 6402;if(r===us)return 34041;if(r===R_)return 6403;if(r===A_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ja)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===P_)return 36244;if(r===D_)return 33319;if(r===I_)return 33320;if(r===F_)return 36249;if(r===Ho||r===Vo||r===Wo||r===jo)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gc||r===Hc||r===Vc||r===Wc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Gc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===N_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jc||r===qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===jc)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===qc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xc||r===$c||r===Yc||r===Zc||r===Kc||r===Jc||r===Qc||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===ou)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$c)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eu)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tu)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nu)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===iu)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===su)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ru)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ou)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===au)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===au)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===es?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class CM extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LM={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(s=t.getPose(e.targetRaySpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LM))),c&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const b=new Vn;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[m.jointName]=b,c.add(b)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class RM extends Jt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=ci),n===void 0&&u===us&&(n=es),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class PM extends yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],b=new Map,C=new Tt;C.layers.enable(1),C.viewport=new ut;const T=new Tt;T.layers.enable(2),T.viewport=new ut;const S=[C,T],P=new CM;P.layers.enable(1),P.layers.enable(2);let N=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new va,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new va,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new va,_[X]=ee),ee.getHandSpace()};function R(X){const ee=b.get(X.inputSource);ee!==void 0&&ee.dispatchEvent({type:X.type,data:X.inputSource})}function z(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",U),b.forEach(function(X,ee){X!==void 0&&X.disconnect(ee)}),b.clear(),N=null,M=null,e.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",z),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),d=new $n(f.framebufferWidth,f.framebufferHeight,{format:qt,type:_i,encoding:e.outputEncoding})}else{let ee=null,fe=null,le=null;g.depth&&(le=g.stencil?35056:33190,ee=g.stencil?us:mi,fe=g.stencil?es:ci);const de={colorFormat:e.outputEncoding===Ze?35907:32856,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(de),s.updateRenderState({layers:[h]}),d=new $n(h.textureWidth,h.textureHeight,{format:qt,type:_i,depthTexture:new RM(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(X){const ee=s.inputSources;for(let fe=0;fe<ee.length;fe++){const le=ee[fe].handedness==="right"?1:0;b.set(ee[fe],_[le])}for(let fe=0;fe<X.removed.length;fe++){const le=X.removed[fe],de=b.get(le);de&&(de.dispatchEvent({type:"disconnected",data:le}),b.delete(le))}for(let fe=0;fe<X.added.length;fe++){const le=X.added[fe],de=b.get(le);de&&de.dispatchEvent({type:"connected",data:le})}}const ye=new I,ue=new I;function O(X,ee,fe){ye.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(fe.matrixWorld);const le=ye.distanceTo(ue),de=ee.projectionMatrix.elements,we=fe.projectionMatrix.elements,Ae=de[14]/(de[10]-1),$=de[14]/(de[10]+1),G=(de[9]+1)/de[5],re=(de[9]-1)/de[5],J=(de[8]-1)/de[0],K=(we[8]+1)/we[0],Ee=Ae*J,w=Ae*K,A=le/(-J+K),D=A*-J;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(D),X.translateZ(A),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const H=Ae+A,Z=$+A,se=Ee-D,pe=w+(le-D),te=G*$/Z*H,me=re*$/Z*H;X.projectionMatrix.makePerspective(se,pe,te,me,H,Z)}function ie(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;P.near=T.near=C.near=X.near,P.far=T.far=C.far=X.far,(N!==P.near||M!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,M=P.far);const ee=X.parent,fe=P.cameras;ie(P,ee);for(let de=0;de<fe.length;de++)ie(fe[de],ee);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),X.position.copy(P.position),X.quaternion.copy(P.quaternion),X.scale.copy(P.scale),X.matrix.copy(P.matrix),X.matrixWorld.copy(P.matrixWorld);const le=X.children;for(let de=0,we=le.length;de<we;de++)le[de].updateMatrixWorld(!0);fe.length===2?O(P,C,T):P.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let k=null;function j(X,ee){if(c=ee.getViewerPose(l||a),p=ee,c!==null){const le=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let de=!1;le.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let we=0;we<le.length;we++){const Ae=le[we];let $=null;if(f!==null)$=f.getViewport(Ae);else{const re=u.getViewSubImage(h,Ae);$=re.viewport,we===0&&(e.setRenderTargetTextures(d,re.colorTexture,h.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(d))}let G=S[we];G===void 0&&(G=new Tt,G.layers.enable(we),G.viewport=new ut,S[we]=G),G.matrix.fromArray(Ae.transform.matrix),G.projectionMatrix.fromArray(Ae.projectionMatrix),G.viewport.set($.x,$.y,$.width,$.height),we===0&&P.matrix.copy(G.matrix),de===!0&&P.cameras.push(G)}}const fe=s.inputSources;for(let le=0;le<_.length;le++){const de=fe[le],we=b.get(de);we!==void 0&&we.update(de,ee,l||a)}k&&k(X,ee),p=null}const W=new Cf;W.setAnimationLoop(j),this.setAnimationLoop=function(X){k=X},this.dispose=function(){}}}function DM(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,b,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,C)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?o(m,d,_,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.iridescenceMap?b=d.iridescenceMap:d.iridescenceThicknessMap?b=d.iridescenceThicknessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let C;d.aoMap?C=d.aoMap:d.lightMap&&(C=d.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uv2Transform.value.copy(C.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,_,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=b*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let C;d.map?C=d.map:d.alphaMap&&(C=d.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function IM(){const i=to("canvas");return i.style.display="block",i}function Pl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:IM(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xi,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,b=0,C=null,T=-1,S=null;const P=new ut,N=new ut;let M=null,R=e.width,z=e.height,U=1,ye=null,ue=null;const O=new ut(0,0,R,z),ie=new ut(0,0,R,z);let k=!1;const j=new Ll;let W=!1,X=!1,ee=null;const fe=new nt,le=new Le,de=new I,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return C===null?U:1}let $=t;function G(E,B){for(let Y=0;Y<E.length;Y++){const V=E[Y],oe=e.getContext(V,B);if(oe!==null)return oe}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",he,!1),$===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),$=G(B,E),$===null)throw G(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let re,J,K,Ee,w,A,D,H,Z,se,pe,te,me,ae,v,x,F,q,Q,ce,Me,y,ne;function ge(){re=new qv($),J=new Bv($,re,i),re.init(J),y=new AM($,re,J),K=new EM($,re,J),Ee=new Yv,w=new dM,A=new TM($,re,K,w,J,y,Ee),D=new Gv(m),H=new jv(m),Z=new o0($,J),ne=new zv($,re,Z,J),se=new Xv($,Z,Ee,ne),pe=new Qv($,se,Z,Ee),Q=new Jv($,J,A),x=new kv(w),te=new fM(m,D,H,re,J,ne,x),me=new DM(m,w),ae=new mM,v=new MM(re,J),q=new Ov(m,D,K,pe,u,a),F=new wM(m,pe,J),ce=new Uv($,re,Ee,J),Me=new $v($,re,Ee,J),Ee.programs=te.programs,m.capabilities=J,m.extensions=re,m.properties=w,m.renderLists=ae,m.shadowMap=F,m.state=K,m.info=Ee}ge();const _e=new PM(m,$);this.xr=_e,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(R,z,!1))},this.getSize=function(E){return E.set(R,z)},this.setSize=function(E,B,Y){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=E,z=B,e.width=Math.floor(E*U),e.height=Math.floor(B*U),Y!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(R*U,z*U).floor()},this.setDrawingBufferSize=function(E,B,Y){R=E,z=B,U=Y,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,B,Y,V){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,B,Y,V),K.viewport(P.copy(O).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,B,Y,V){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,B,Y,V),K.scissor(N.copy(ie).multiplyScalar(U).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(E){K.setScissorTest(k=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(E=!0,B=!0,Y=!0){let V=0;E&&(V|=16384),B&&(V|=256),Y&&(V|=1024),$.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",he,!1),ae.dispose(),v.dispose(),w.dispose(),D.dispose(),H.dispose(),pe.dispose(),ne.dispose(),te.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",je),_e.removeEventListener("sessionend",qe),ee&&(ee.dispose(),ee=null),_t.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Ee.autoReset,B=F.enabled,Y=F.autoUpdate,V=F.needsUpdate,oe=F.type;ge(),Ee.autoReset=E,F.enabled=B,F.autoUpdate=Y,F.needsUpdate=V,F.type=oe}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const B=E.target;B.removeEventListener("dispose",Te),be(B)}function be(E){Ce(E),w.remove(E)}function Ce(E){const B=w.get(E).programs;B!==void 0&&(B.forEach(function(Y){te.releaseProgram(Y)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,V,oe,Pe){B===null&&(B=we);const Ne=oe.isMesh&&oe.matrixWorld.determinant()<0,Ue=Yf(E,B,Y,V,oe);K.setMaterial(V,Ne);let Oe=Y.index;const Xe=Y.attributes.position;if(Oe===null){if(Xe===void 0||Xe.count===0)return}else if(Oe.count===0)return;let ke=1;V.wireframe===!0&&(Oe=se.getWireframeAttribute(Y),ke=2),ne.setup(oe,V,Ue,Y,Oe);let He,Ke=ce;Oe!==null&&(He=Z.get(Oe),Ke=Me,Ke.setIndex(He));const Kn=Oe!==null?Oe.count:Xe.count,Mi=Y.drawRange.start*ke,bi=Y.drawRange.count*ke,en=Pe!==null?Pe.start*ke:0,We=Pe!==null?Pe.count*ke:1/0,Si=Math.max(Mi,en),Qe=Math.min(Kn,Mi+bi,en+We)-1,tn=Math.max(0,Qe-Si+1);if(tn!==0){if(oe.isMesh)V.wireframe===!0?(K.setLineWidth(V.wireframeLinewidth*Ae()),Ke.setMode(1)):Ke.setMode(4);else if(oe.isLine){let Rn=V.linewidth;Rn===void 0&&(Rn=1),K.setLineWidth(Rn*Ae()),oe.isLineSegments?Ke.setMode(1):oe.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else oe.isPoints?Ke.setMode(0):oe.isSprite&&Ke.setMode(4);if(oe.isInstancedMesh)Ke.renderInstances(Si,tn,oe.count);else if(Y.isInstancedBufferGeometry){const Rn=Math.min(Y.instanceCount,Y._maxInstanceCount);Ke.renderInstances(Si,tn,Rn)}else Ke.render(Si,tn)}},this.compile=function(E,B){f=v.get(E),f.init(),g.push(f),E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function(Y){const V=Y.material;if(V)if(Array.isArray(V))for(let oe=0;oe<V.length;oe++){const Pe=V[oe];Co(Pe,E,Y)}else Co(V,E,Y)}),g.pop(),f=null};let ve=null;function De(E){ve&&ve(E)}function je(){_t.stop()}function qe(){_t.start()}const _t=new Cf;_t.setAnimationLoop(De),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){ve=E,_e.setAnimationLoop(E),E===null?_t.stop():_t.start()},_e.addEventListener("sessionstart",je),_e.addEventListener("sessionend",qe),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,B,C),f=v.get(E,g.length),f.init(),g.push(f),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(fe),X=this.localClippingEnabled,W=x.init(this.clippingPlanes,X,B),h=ae.get(E,p.length),h.init(),p.push(h),Qt(E,B,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ye,ue),W===!0&&x.beginShadows();const Y=f.state.shadowsArray;if(F.render(Y,E,B),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(h,E),f.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const V=B.cameras;for(let oe=0,Pe=V.length;oe<Pe;oe++){const Ne=V[oe];Nl(h,E,Ne,Ne.viewport)}}else Nl(h,E,B);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(m,E,B),ne.resetDefaultState(),T=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function Qt(E,B,Y,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){V&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const Ne=pe.update(E),Ue=E.material;Ue.visible&&h.push(E,Ne,Ue,Y,de.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ee.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ee.render.frame),!E.frustumCulled||j.intersectsObject(E))){V&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const Ne=pe.update(E),Ue=E.material;if(Array.isArray(Ue)){const Oe=Ne.groups;for(let Xe=0,ke=Oe.length;Xe<ke;Xe++){const He=Oe[Xe],Ke=Ue[He.materialIndex];Ke&&Ke.visible&&h.push(E,Ne,Ke,Y,de.z,He)}}else Ue.visible&&h.push(E,Ne,Ue,Y,de.z,null)}}const Pe=E.children;for(let Ne=0,Ue=Pe.length;Ne<Ue;Ne++)Qt(Pe[Ne],B,Y,V)}function Nl(E,B,Y,V){const oe=E.opaque,Pe=E.transmissive,Ne=E.transparent;f.setupLightsView(Y),Pe.length>0&&Xf(oe,B,Y),V&&K.viewport(P.copy(V)),oe.length>0&&ir(oe,B,Y),Pe.length>0&&ir(Pe,B,Y),Ne.length>0&&ir(Ne,B,Y),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Xf(E,B,Y){const V=J.isWebGL2;ee===null&&(ee=new $n(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Ys:_i,minFilter:bo,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(le),V?ee.setSize(le.x,le.y):ee.setSize(Xa(le.x),Xa(le.y));const oe=m.getRenderTarget();m.setRenderTarget(ee),m.clear();const Pe=m.toneMapping;m.toneMapping=Tn,ir(E,B,Y),m.toneMapping=Pe,A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),m.setRenderTarget(oe)}function ir(E,B,Y){const V=B.isScene===!0?B.overrideMaterial:null;for(let oe=0,Pe=E.length;oe<Pe;oe++){const Ne=E[oe],Ue=Ne.object,Oe=Ne.geometry,Xe=V===null?Ne.material:V,ke=Ne.group;Ue.layers.test(Y.layers)&&$f(Ue,B,Y,Oe,Xe,ke)}}function $f(E,B,Y,V,oe,Pe){E.onBeforeRender(m,B,Y,V,oe,Pe),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),oe.onBeforeRender(m,B,Y,V,E,Pe),oe.transparent===!0&&oe.side===as?(oe.side=Zt,oe.needsUpdate=!0,m.renderBufferDirect(Y,B,V,oe,E,Pe),oe.side=$s,oe.needsUpdate=!0,m.renderBufferDirect(Y,B,V,oe,E,Pe),oe.side=as):m.renderBufferDirect(Y,B,V,oe,E,Pe),E.onAfterRender(m,B,Y,V,oe,Pe)}function Co(E,B,Y){B.isScene!==!0&&(B=we);const V=w.get(E),oe=f.state.lights,Pe=f.state.shadowsArray,Ne=oe.state.version,Ue=te.getParameters(E,oe.state,Pe,B,Y),Oe=te.getProgramCacheKey(Ue);let Xe=V.programs;V.environment=E.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(E.isMeshStandardMaterial?H:D).get(E.envMap||V.environment),Xe===void 0&&(E.addEventListener("dispose",Te),Xe=new Map,V.programs=Xe);let ke=Xe.get(Oe);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===Ne)return Ol(E,Ue),ke}else Ue.uniforms=te.getUniforms(E),E.onBuild(Y,Ue,m),E.onBeforeCompile(Ue,m),ke=te.acquireProgram(Ue,Oe),Xe.set(Oe,ke),V.uniforms=Ue.uniforms;const He=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=x.uniform),Ol(E,Ue),V.needsLights=Kf(E),V.lightsStateVersion=Ne,V.needsLights&&(He.ambientLightColor.value=oe.state.ambient,He.lightProbe.value=oe.state.probe,He.directionalLights.value=oe.state.directional,He.directionalLightShadows.value=oe.state.directionalShadow,He.spotLights.value=oe.state.spot,He.spotLightShadows.value=oe.state.spotShadow,He.rectAreaLights.value=oe.state.rectArea,He.ltc_1.value=oe.state.rectAreaLTC1,He.ltc_2.value=oe.state.rectAreaLTC2,He.pointLights.value=oe.state.point,He.pointLightShadows.value=oe.state.pointShadow,He.hemisphereLights.value=oe.state.hemi,He.directionalShadowMap.value=oe.state.directionalShadowMap,He.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,He.spotShadowMap.value=oe.state.spotShadowMap,He.spotShadowMatrix.value=oe.state.spotShadowMatrix,He.pointShadowMap.value=oe.state.pointShadowMap,He.pointShadowMatrix.value=oe.state.pointShadowMatrix);const Ke=ke.getUniforms(),Kn=jr.seqWithValue(Ke.seq,He);return V.currentProgram=ke,V.uniformsList=Kn,ke}function Ol(E,B){const Y=w.get(E);Y.outputEncoding=B.outputEncoding,Y.instancing=B.instancing,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Yf(E,B,Y,V,oe){B.isScene!==!0&&(B=we),A.resetTextureUnits();const Pe=B.fog,Ne=V.isMeshStandardMaterial?B.environment:null,Ue=C===null?m.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:xi,Oe=(V.isMeshStandardMaterial?H:D).get(V.envMap||Ne),Xe=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!V.normalMap&&!!Y.attributes.tangent,He=!!Y.morphAttributes.position,Ke=!!Y.morphAttributes.normal,Kn=!!Y.morphAttributes.color,Mi=V.toneMapped?m.toneMapping:Tn,bi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,en=bi!==void 0?bi.length:0,We=w.get(V),Si=f.state.lights;if(W===!0&&(X===!0||E!==S)){const nn=E===S&&V.id===T;x.setState(V,E,nn)}let Qe=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Si.state.version||We.outputEncoding!==Ue||oe.isInstancedMesh&&We.instancing===!1||!oe.isInstancedMesh&&We.instancing===!0||oe.isSkinnedMesh&&We.skinning===!1||!oe.isSkinnedMesh&&We.skinning===!0||We.envMap!==Oe||V.fog===!0&&We.fog!==Pe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==x.numPlanes||We.numIntersection!==x.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==ke||We.morphTargets!==He||We.morphNormals!==Ke||We.morphColors!==Kn||We.toneMapping!==Mi||J.isWebGL2===!0&&We.morphTargetsCount!==en)&&(Qe=!0):(Qe=!0,We.__version=V.version);let tn=We.currentProgram;Qe===!0&&(tn=Co(V,B,oe));let Rn=!1,ys=!1,Lo=!1;const xt=tn.getUniforms(),Ms=We.uniforms;if(K.useProgram(tn.program)&&(Rn=!0,ys=!0,Lo=!0),V.id!==T&&(T=V.id,ys=!0),Rn||S!==E){if(xt.setValue($,"projectionMatrix",E.projectionMatrix),J.logarithmicDepthBuffer&&xt.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,ys=!0,Lo=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const nn=xt.map.cameraPosition;nn!==void 0&&nn.setValue($,de.setFromMatrixPosition(E.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue($,"isOrthographic",E.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||oe.isSkinnedMesh)&&xt.setValue($,"viewMatrix",E.matrixWorldInverse)}if(oe.isSkinnedMesh){xt.setOptional($,oe,"bindMatrix"),xt.setOptional($,oe,"bindMatrixInverse");const nn=oe.skeleton;nn&&(J.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),xt.setValue($,"boneTexture",nn.boneTexture,A),xt.setValue($,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ro=Y.morphAttributes;return(Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&J.isWebGL2===!0)&&Q.update(oe,Y,V,tn),(ys||We.receiveShadow!==oe.receiveShadow)&&(We.receiveShadow=oe.receiveShadow,xt.setValue($,"receiveShadow",oe.receiveShadow)),ys&&(xt.setValue($,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&Zf(Ms,Lo),Pe&&V.fog===!0&&me.refreshFogUniforms(Ms,Pe),me.refreshMaterialUniforms(Ms,V,U,z,ee),jr.upload($,We.uniformsList,Ms,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(jr.upload($,We.uniformsList,Ms,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue($,"center",oe.center),xt.setValue($,"modelViewMatrix",oe.modelViewMatrix),xt.setValue($,"normalMatrix",oe.normalMatrix),xt.setValue($,"modelMatrix",oe.matrixWorld),tn}function Zf(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Kf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,B,Y){w.get(E.texture).__webglTexture=B,w.get(E.depthTexture).__webglTexture=Y;const V=w.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Y===void 0,V.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const Y=w.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){C=E,_=B,b=Y;let V=!0;if(E){const Oe=w.get(E);Oe.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),V=!1):Oe.__webglFramebuffer===void 0?A.setupRenderTarget(E):Oe.__hasExternalTextures&&A.rebindTextures(E,w.get(E.texture).__webglTexture,w.get(E.depthTexture).__webglTexture)}let oe=null,Pe=!1,Ne=!1;if(E){const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Ne=!0);const Xe=w.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(oe=Xe[B],Pe=!0):J.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?oe=w.get(E).__webglMultisampledFramebuffer:oe=Xe,P.copy(E.viewport),N.copy(E.scissor),M=E.scissorTest}else P.copy(O).multiplyScalar(U).floor(),N.copy(ie).multiplyScalar(U).floor(),M=k;if(K.bindFramebuffer(36160,oe)&&J.drawBuffers&&V&&K.drawBuffers(E,oe),K.viewport(P),K.scissor(N),K.setScissorTest(M),Pe){const Oe=w.get(E.texture);$.framebufferTexture2D(36160,36064,34069+B,Oe.__webglTexture,Y)}else if(Ne){const Oe=w.get(E.texture),Xe=B||0;$.framebufferTextureLayer(36160,36064,Oe.__webglTexture,Y||0,Xe)}T=-1},this.readRenderTargetPixels=function(E,B,Y,V,oe,Pe,Ne){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){K.bindFramebuffer(36160,Ue);try{const Oe=E.texture,Xe=Oe.format,ke=Oe.type;if(Xe!==qt&&y.convert(Xe)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===Ys&&(re.has("EXT_color_buffer_half_float")||J.isWebGL2&&re.has("EXT_color_buffer_float"));if(ke!==_i&&y.convert(ke)!==$.getParameter(35738)&&!(ke===ui&&(J.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&Y>=0&&Y<=E.height-oe&&$.readPixels(B,Y,V,oe,y.convert(Xe),y.convert(ke),Pe)}finally{const Oe=C!==null?w.get(C).__webglFramebuffer:null;K.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(E,B,Y=0){const V=Math.pow(2,-Y),oe=Math.floor(B.image.width*V),Pe=Math.floor(B.image.height*V);A.setTexture2D(B,0),$.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,oe,Pe),K.unbindTexture()},this.copyTextureToTexture=function(E,B,Y,V=0){const oe=B.image.width,Pe=B.image.height,Ne=y.convert(Y.format),Ue=y.convert(Y.type);A.setTexture2D(Y,0),$.pixelStorei(37440,Y.flipY),$.pixelStorei(37441,Y.premultiplyAlpha),$.pixelStorei(3317,Y.unpackAlignment),B.isDataTexture?$.texSubImage2D(3553,V,E.x,E.y,oe,Pe,Ne,Ue,B.image.data):B.isCompressedTexture?$.compressedTexSubImage2D(3553,V,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ne,B.mipmaps[0].data):$.texSubImage2D(3553,V,E.x,E.y,Ne,Ue,B.image),V===0&&Y.generateMipmaps&&$.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Y,V,oe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,Ne=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,Oe=y.convert(V.format),Xe=y.convert(V.type);let ke;if(V.isData3DTexture)A.setTexture3D(V,0),ke=32879;else if(V.isDataArrayTexture)A.setTexture2DArray(V,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,V.flipY),$.pixelStorei(37441,V.premultiplyAlpha),$.pixelStorei(3317,V.unpackAlignment);const He=$.getParameter(3314),Ke=$.getParameter(32878),Kn=$.getParameter(3316),Mi=$.getParameter(3315),bi=$.getParameter(32877),en=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;$.pixelStorei(3314,en.width),$.pixelStorei(32878,en.height),$.pixelStorei(3316,E.min.x),$.pixelStorei(3315,E.min.y),$.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?$.texSubImage3D(ke,oe,B.x,B.y,B.z,Pe,Ne,Ue,Oe,Xe,en.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(ke,oe,B.x,B.y,B.z,Pe,Ne,Ue,Oe,en.data)):$.texSubImage3D(ke,oe,B.x,B.y,B.z,Pe,Ne,Ue,Oe,Xe,en),$.pixelStorei(3314,He),$.pixelStorei(32878,Ke),$.pixelStorei(3316,Kn),$.pixelStorei(3315,Mi),$.pixelStorei(32877,bi),oe===0&&V.generateMipmaps&&$.generateMipmap(ke),K.unbindTexture()},this.initTexture=function(E){A.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){_=0,b=0,C=null,K.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class FM extends Pl{}FM.prototype.isWebGL1Renderer=!0;class Of extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class NM extends st{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Yn extends st{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new I,ju=new I,qu=new nt,ya=new So,Dr=new er;class OM extends gt{constructor(e=new Ct,t=new Yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wu.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wu.distanceTo(ju);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;qu.copy(s).invert(),ya.copy(e.ray).applyMatrix4(qu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let C=_,T=b-1;C<T;C+=p){const S=g.getX(C),P=g.getX(C+1);if(c.fromBufferAttribute(d,S),u.fromBufferAttribute(d,P),ya.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let C=_,T=b-1;C<T;C+=p){if(c.fromBufferAttribute(d,C),u.fromBufferAttribute(d,C+1),ya.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Xu=new I,$u=new I;class Zs extends OM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xu.fromBufferAttribute(t,s),$u.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xu.distanceTo($u);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $i extends st{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new nt,Ya=new So,Ir=new er,Fr=new I;class Ma extends gt{constructor(e=new Ct,t=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Yu.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(Yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);Fr.fromBufferAttribute(h,d),Zu(Fr,d,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p;g<m;g++)Fr.fromBufferAttribute(h,g),Zu(Fr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zu(i,e,t,n,s,r,a){const o=Ya.distanceSqToPoint(i);if(o<t){const l=new I;Ya.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const Nr=new I,Or=new I,ba=new I,zr=new un;class zM extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Vr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:d,c:_}=zr;if(m.fromBufferAttribute(o,c[0]),d.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),zr.getNormal(ba),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const C=(b+1)%3,T=h[b],S=h[C],P=zr[u[b]],N=zr[u[C]],M=`${T}_${S}`,R=`${S}_${T}`;R in f&&f[R]?(ba.dot(f[R].normal)<=r&&(p.push(P.x,P.y,P.z),p.push(N.x,N.y,N.z)),f[R]=null):M in f||(f[M]={index0:c[b],index1:c[C],normal:ba.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:d}=f[g];Nr.fromBufferAttribute(o,m),Or.fromBufferAttribute(o,d),p.push(Nr.x,Nr.y,Nr.z),p.push(Or.x,Or.y,Or.z)}this.setAttribute("position",new tt(p,3))}}}class UM extends st{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class BM extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zf extends st{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kM extends zf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uf extends st{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GM extends st{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class HM extends st{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Bf extends st{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class VM extends st{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kf extends Yn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const WM={ShadowMaterial:UM,SpriteMaterial:NM,RawShaderMaterial:BM,ShaderMaterial:Cn,PointsMaterial:$i,MeshPhysicalMaterial:kM,MeshStandardMaterial:zf,MeshPhongMaterial:Uf,MeshToonMaterial:GM,MeshNormalMaterial:HM,MeshLambertMaterial:Bf,MeshDepthMaterial:Ff,MeshDistanceMaterial:Nf,MeshBasicMaterial:wo,MeshMatcapMaterial:VM,LineDashedMaterial:kf,LineBasicMaterial:Yn,Material:st};st.fromType=function(i){return new WM[i]};const Ku={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const qM=new jM;let Gf=class{constructor(e){this.manager=e!==void 0?e:qM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const Mn={};class XM extends Gf{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ku.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:s});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){b();function b(){h.read().then(({done:C,value:T})=>{if(C)_.close();else{m+=T.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let P=0,N=u.length;P<N;P++){const M=u[P];M.onProgress&&M.onProgress(S)}_.enqueue(T),b()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ku.add(e,c);const u=Mn[e];delete Mn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $M extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ju=new nt,Qu=new I,eh=new I;class YM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),Ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZM extends YM{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class no extends $M{constructor(e,t,n=0,s=Math.PI/3,r=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.shadow=new ZM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hf="\\[\\]\\.:\\/",Dl="[^"+Hf+"]",KM="[^"+Hf.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Dl);/(WCOD+)?/.source.replace("WCOD",KM);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl);class JM{constructor(e,t,n=0,s=1/0){this.ray=new So(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Za(e,this,n,t),n.sort(th),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Za(e[s],this,n,t);return n.sort(th),n}}function th(i,e){return i.distance-e.distance}function Za(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Za(s[r],e,t,!0)}}class nh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class QM extends Zs{constructor(e=10,t=10,n=4473924,s=8947848){n=new Re(n),s=new Re(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const m=f===r?n:s;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}const u=new Ct;u.setAttribute("position",new tt(l,3)),u.setAttribute("color",new tt(c,3));const h=new Yn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class eb extends Zs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ct;s.setAttribute("position",new tt(t,3)),s.setAttribute("color",new tt(n,3));const r=new Yn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Re,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const rn=new Uint32Array(512),on=new Uint32Array(512);for(let i=0;i<256;++i){const e=i-127;e<-27?(rn[i]=0,rn[i|256]=32768,on[i]=24,on[i|256]=24):e<-14?(rn[i]=1024>>-e-14,rn[i|256]=1024>>-e-14|32768,on[i]=-e-1,on[i|256]=-e-1):e<=15?(rn[i]=e+15<<10,rn[i|256]=e+15<<10|32768,on[i]=13,on[i|256]=13):e<128?(rn[i]=31744,rn[i|256]=64512,on[i]=24,on[i|256]=24):(rn[i]=31744,rn[i|256]=64512,on[i]=13,on[i|256]=13)}const Vf=new Uint32Array(2048),nr=new Uint32Array(64),tb=new Uint32Array(64);for(let i=1;i<1024;++i){let e=i<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Vf[i]=e|t}for(let i=1024;i<2048;++i)Vf[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)nr[i]=i<<23;nr[31]=1199570944;nr[32]=2147483648;for(let i=33;i<63;++i)nr[i]=2147483648+(i-32<<23);nr[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(tb[i]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);const nb=/^[og]\s*(.+)?/,ib=/^mtllib /,sb=/^usemtl /,rb=/^usemap /,ih=new I,Sa=new I,sh=new I,rh=new I,It=new I,Ur=new Re;function ob(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;ih.fromArray(s,e),Sa.fromArray(s,t),sh.fromArray(s,n),It.subVectors(sh,Sa),rh.subVectors(ih,Sa),It.cross(rh),It.normalize(),r.push(It.x,It.y,It.z),r.push(It.x,It.y,It.z),r.push(It.x,It.y,It.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),o!==void 0&&o!==""){const g=this.normals.length;h=this.parseNormalIndex(o,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(s!==void 0&&s!==""){const g=this.uvs.length;h=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),p=this.parseUVIndex(a,g),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class Wf extends Gf{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new XM(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new ob;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s="",r="",a=0,o=[];const l=typeof"".trimLeft=="function";for(let h=0,f=n.length;h<f;h++)if(s=n[h],s=l?s.trimLeft():s.trim(),a=s.length,a!==0&&(r=s.charAt(0),r!=="#"))if(r==="v"){const p=s.split(/\s+/);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(Ur.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6])).convertSRGBToLinear(),t.colors.push(Ur.r,Ur.g,Ur.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(r==="f"){const g=s.slice(1).trim().split(/\s+/),m=[];for(let _=0,b=g.length;_<b;_++){const C=g[_];if(C.length>0){const T=C.split("/");m.push(T)}}const d=m[0];for(let _=1,b=m.length-1;_<b;_++){const C=m[_],T=m[_+1];t.addFace(d[0],C[0],T[0],d[1],C[1],T[1],d[2],C[2],T[2])}}else if(r==="l"){const p=s.substring(1).trim().split(" ");let g=[];const m=[];if(s.indexOf("/")===-1)g=p;else for(let d=0,_=p.length;d<_;d++){const b=p[d].split("/");b[0]!==""&&g.push(b[0]),b[1]!==""&&m.push(b[1])}t.addLineGeometry(g,m)}else if(r==="p"){const g=s.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((o=nb.exec(s))!==null){const p=(" "+o[0].slice(1).trim()).slice(1);t.startObject(p)}else if(sb.test(s))t.object.startMaterial(s.substring(7).trim(),t.materialLibraries);else if(ib.test(s))t.materialLibraries.push(s.substring(7).trim());else if(rb.test(s))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(r==="s"){if(o=s.split(" "),o.length>1){const g=o[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(s==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+s+'"')}t.finalize();const c=new Vn;if(c.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let h=0,f=t.objects.length;h<f;h++){const p=t.objects[h],g=p.geometry,m=p.materials,d=g.type==="Line",_=g.type==="Points";let b=!1;if(g.vertices.length===0)continue;const C=new Ct;C.setAttribute("position",new tt(g.vertices,3)),g.normals.length>0&&C.setAttribute("normal",new tt(g.normals,3)),g.colors.length>0&&(b=!0,C.setAttribute("color",new tt(g.colors,3))),g.hasUVIndices===!0&&C.setAttribute("uv",new tt(g.uvs,2));const T=[];for(let P=0,N=m.length;P<N;P++){const M=m[P],R=M.name+"_"+M.smooth+"_"+b;let z=t.materials[R];if(this.materials!==null){if(z=this.materials.create(M.name),d&&z&&!(z instanceof Yn)){const U=new Yn;st.prototype.copy.call(U,z),U.color.copy(z.color),z=U}else if(_&&z&&!(z instanceof $i)){const U=new $i({size:10,sizeAttenuation:!1});st.prototype.copy.call(U,z),U.color.copy(z.color),U.map=z.map,z=U}}z===void 0&&(d?z=new Yn:_?z=new $i({size:1,sizeAttenuation:!1}):z=new Uf,z.name=M.name,z.flatShading=!M.smooth,z.vertexColors=b,t.materials[R]=z),T.push(z)}let S;if(T.length>1){for(let P=0,N=m.length;P<N;P++){const M=m[P];C.addGroup(M.groupStart,M.groupCount,P)}d?S=new Zs(C,T):_?S=new Ma(C,T):S=new Xt(C,T)}else d?S=new Zs(C,T[0]):_?S=new Ma(C,T[0]):S=new Xt(C,T[0]);S.name=p.name,c.add(S)}else if(t.vertices.length>0){const h=new $i({size:1,sizeAttenuation:!1}),f=new Ct;f.setAttribute("position",new tt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new tt(t.colors,3)),h.vertexColors=!0);const p=new Ma(f,h);c.add(p)}return c}}class ab{constructor(e){Ie(this,"TILE_SIZE",2);Ie(this,"group");Ie(this,"loader",new Wf);Ie(this,"material",new Bf({color:16777215}));Ie(this,"rendering",!1);Ie(this,"cache",new Map);this.graphics=e,this.group=new Vn,this.graphics.scene.add(this.group)}async tryRender(e){if(this.rendering)return;this.rendering=!0,this.group.clear();const t=[];e.eachElement(n=>t.push(n));for(let n of t)await this.tryRenderELement(e,n);this.rendering=!1}async tryRenderELement(e,t){t.enthropy!==1||t.dead||await this.addMesh(e,t)}async loadMesh(e){let t=this.cache.get(e);return t||(t=await new Promise(n=>this.loader.load(e,n)),this.cache.set(e,t)),t.clone(!0)}async addMesh(e,t){const n=fn[t.tryGetOnlyState()];if(!n||n.mesh==="void")return;const s=await this.loadMesh(n.mesh);s.rotateY(n.rotation/180*Math.PI),s.position.set((t.x-e.MAX_HORIZONTAL/2)*this.TILE_SIZE,t.z*this.TILE_SIZE,(t.y-e.MAX_HORIZONTAL/2)*this.TILE_SIZE),s.material=this.material,this.group.add(s)}}class Il{constructor(){Ie(this,"x",0);Ie(this,"y",0);Ie(this,"z",0);Ie(this,"dead",!1);Ie(this,"dirty",!1);Ie(this,"enthropy",0);Ie(this,"mask");this.mask=new kt,this.mask.fillOnes(),this.enthropy=this.mask.countOnes()}getNonZeroIndices(){return this.mask.getNonZeroIndices()}collapse(){const e=this.getNonZeroIndices(),t=Tl(e)??0;this.collapseTo(t)}collapseTo(e){this.dead||(Xs(e<fn.length),Xs(this.mask.getAt(e)===1),this.mask=new kt,this.mask.setAt(e,1),this.enthropy=this.mask.countOnes())}collapseToId(e){const t=fn.findIndex(n=>n.id===e);this.collapseTo(t)}die(){this.dead=!0}tryGetOnlyState(){if(this.enthropy!=1)throw"attempt to get only state of element with enthropy > 2";return this.mask.getNonZeroIndices()[0]}countStates(){return this.mask.countOnes()}clone(){const e=new Il;return e.mask=this.mask.clone(),e.enthropy=this.mask.countOnes(),e.dead=this.dead,e.x=this.x,e.y=this.y,e.z=this.z,e}updateEnthropy(){this.enthropy=this.mask.countOnes(),this.enthropy<1&&this.die()}print(){let e=`[${this.x.toString().padStart(2," ")}, ${this.y.toString().padStart(2," ")}, ${this.z.toString().padStart(2," ")}] `;return e+=`[${this.mask.print()}]`,e+=` entr: ${this.enthropy}`,e}}class lb{constructor(){Ie(this,"MAX_HORIZONTAL",31);Ie(this,"MAX_VERTICAL",3);Ie(this,"instances",[])}fill(e){for(let t=0;t<this.MAX_HORIZONTAL;++t){this.instances[t]=[];for(let n=0;n<this.MAX_HORIZONTAL;++n){this.instances[t][n]=[];for(let s=0;s<this.MAX_VERTICAL;++s){const r=new Il;r.x=t,r.y=n,r.z=s,s===0&&(r.collapseToId("earth"),r.dirty=!0),s===1&&(t===0||n===0||t===this.MAX_HORIZONTAL-1||n===this.MAX_HORIZONTAL-1)&&(r.collapseToId("void_on_earth"),r.dirty=!0),s===this.MAX_VERTICAL-1&&(r.collapseToId("void"),r.dirty=!0),this.instances[t][n][s]=r}}}}eachElement(e){this.eachElementByIndex((t,n,s)=>e(this.instances[t][n][s]))}eachElementByIndex(e){for(let t=0;t<this.instances.length;++t)for(let n=0;n<this.instances[t].length;++n)for(let s=0;s<this.instances[t][n].length;++s)e(t,n,s)}print(){const e=[];for(let t=0;t<this.instances.length;++t){e[t]=[];for(let n=0;n<this.instances[t].length;++n){e[t][n]=[];for(let s=0;s<this.instances[t][n].length;++s)e[t][n][s]={...this.instances[t][n][s]}}}console.log(e)}printFinishedSlice(e){var n;Xs(e>=0&&e<this.MAX_HORIZONTAL);let t="";for(let s=0;s<this.instances.length;++s){for(let r=0;r<this.instances[s].length;++r){const a=this.instances[s][r][e];Xs(a.enthropy<=1),t+=`	${((n=fn[a.tryGetOnlyState()])==null?void 0:n.id)??"dead"}`}t+=`
`}console.log(t)}getElementsAdjacentTo(e){function t(s,r){r[0]&&s.push(r)}const n=[];return t(n,[this.tryGetElementAt(e.x+1,e.y,e.z),ii.px]),t(n,[this.tryGetElementAt(e.x-1,e.y,e.z),ii.nx]),t(n,[this.tryGetElementAt(e.x,e.y+1,e.z),ii.py]),t(n,[this.tryGetElementAt(e.x,e.y-1,e.z),ii.ny]),t(n,[this.tryGetElementAt(e.x,e.y,e.z-1),ii.nz]),t(n,[this.tryGetElementAt(e.x,e.y,e.z+1),ii.pz]),n}tryGetElementAt(e,t,n){return e>=0&&e<this.instances.length&&t>=0&&t<this.instances[e].length&&n>=0&&n<this.instances[t].length?this.instances[e][t][n]:null}getNextDirtyElement(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let n=0;n<this.instances[e][t].length;++n){const s=this.instances[e][t][n];if(s.dirty)return s}return null}validataSolved(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let n=0;n<this.instances[e][t].length;++n)if(this.instances[e][t][n].enthropy>1)return!1;return!0}cloneState(){return this.instances.map(e=>e.map(t=>t.map(n=>n.clone())))}replaceState(e){this.instances=e.map(t=>t.map(n=>n.map(s=>s.clone())))}}const oh={type:"change"},wa={type:"start"},ah={type:"end"};class cb extends yi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ae),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oh),n.update(),r=s.NONE},this.update=function(){const y=new I,ne=new vi().setFromUnitVectors(e.up,new I(0,1,0)),ge=ne.clone().invert(),_e=new I,L=new vi,xe=2*Math.PI;return function(){const Te=n.object.position;y.copy(Te).sub(n.target),y.applyQuaternion(ne),o.setFromVector3(y),n.autoRotate&&r===s.NONE&&R(N()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let be=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;return isFinite(be)&&isFinite(Ce)&&(be<-Math.PI?be+=xe:be>Math.PI&&(be-=xe),Ce<-Math.PI?Ce+=xe:Ce>Math.PI&&(Ce-=xe),be<=Ce?o.theta=Math.max(be,Math.min(Ce,o.theta)):o.theta=o.theta>(be+Ce)/2?Math.max(be,o.theta):Math.min(Ce,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(o),y.applyQuaternion(ge),Te.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||_e.distanceToSquared(n.object.position)>a||8*(1-L.dot(n.object.quaternion))>a?(n.dispatchEvent(oh),_e.copy(n.object.position),L.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",se),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ae)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new nh,l=new nh;let c=1;const u=new I;let h=!1;const f=new Le,p=new Le,g=new Le,m=new Le,d=new Le,_=new Le,b=new Le,C=new Le,T=new Le,S=[],P={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function R(y){l.theta-=y}function z(y){l.phi-=y}const U=function(){const y=new I;return function(ge,_e){y.setFromMatrixColumn(_e,0),y.multiplyScalar(-ge),u.add(y)}}(),ye=function(){const y=new I;return function(ge,_e){n.screenSpacePanning===!0?y.setFromMatrixColumn(_e,1):(y.setFromMatrixColumn(_e,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(ge),u.add(y)}}(),ue=function(){const y=new I;return function(ge,_e){const L=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;y.copy(xe).sub(n.target);let he=y.length();he*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ge*he/L.clientHeight,n.object.matrix),ye(2*_e*he/L.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ge*(n.object.right-n.object.left)/n.object.zoom/L.clientWidth,n.object.matrix),ye(_e*(n.object.top-n.object.bottom)/n.object.zoom/L.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(y){n.object.isPerspectiveCamera?c/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(y){n.object.isPerspectiveCamera?c*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(y){f.set(y.clientX,y.clientY)}function j(y){b.set(y.clientX,y.clientY)}function W(y){m.set(y.clientX,y.clientY)}function X(y){p.set(y.clientX,y.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;R(2*Math.PI*g.x/ne.clientHeight),z(2*Math.PI*g.y/ne.clientHeight),f.copy(p),n.update()}function ee(y){C.set(y.clientX,y.clientY),T.subVectors(C,b),T.y>0?O(M()):T.y<0&&ie(M()),b.copy(C),n.update()}function fe(y){d.set(y.clientX,y.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),ue(_.x,_.y),m.copy(d),n.update()}function le(y){y.deltaY<0?ie(M()):y.deltaY>0&&O(M()),n.update()}function de(y){let ne=!1;switch(y.code){case n.keys.UP:ue(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:ue(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:ue(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:ue(-n.keyPanSpeed,0),ne=!0;break}ne&&(y.preventDefault(),n.update())}function we(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const y=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);f.set(y,ne)}}function Ae(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const y=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);m.set(y,ne)}}function $(){const y=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,ge=Math.sqrt(y*y+ne*ne);b.set(0,ge)}function G(){n.enableZoom&&$(),n.enablePan&&Ae()}function re(){n.enableZoom&&$(),n.enableRotate&&we()}function J(y){if(S.length==1)p.set(y.pageX,y.pageY);else{const ge=Me(y),_e=.5*(y.pageX+ge.x),L=.5*(y.pageY+ge.y);p.set(_e,L)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;R(2*Math.PI*g.x/ne.clientHeight),z(2*Math.PI*g.y/ne.clientHeight),f.copy(p)}function K(y){if(S.length===1)d.set(y.pageX,y.pageY);else{const ne=Me(y),ge=.5*(y.pageX+ne.x),_e=.5*(y.pageY+ne.y);d.set(ge,_e)}_.subVectors(d,m).multiplyScalar(n.panSpeed),ue(_.x,_.y),m.copy(d)}function Ee(y){const ne=Me(y),ge=y.pageX-ne.x,_e=y.pageY-ne.y,L=Math.sqrt(ge*ge+_e*_e);C.set(0,L),T.set(0,Math.pow(C.y/b.y,n.zoomSpeed)),O(T.y),b.copy(C)}function w(y){n.enableZoom&&Ee(y),n.enablePan&&K(y)}function A(y){n.enableZoom&&Ee(y),n.enableRotate&&J(y)}function D(y){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",Z)),q(y),y.pointerType==="touch"?v(y):pe(y))}function H(y){n.enabled!==!1&&(y.pointerType==="touch"?x(y):te(y))}function Z(y){Q(y),S.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",Z)),n.dispatchEvent(ah),r=s.NONE}function se(y){Q(y)}function pe(y){let ne;switch(y.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Ai.DOLLY:if(n.enableZoom===!1)return;j(y),r=s.DOLLY;break;case Ai.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;W(y),r=s.PAN}else{if(n.enableRotate===!1)return;k(y),r=s.ROTATE}break;case Ai.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;k(y),r=s.ROTATE}else{if(n.enablePan===!1)return;W(y),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(wa)}function te(y){if(n.enabled!==!1)switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(y);break;case s.DOLLY:if(n.enableZoom===!1)return;ee(y);break;case s.PAN:if(n.enablePan===!1)return;fe(y);break}}function me(y){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(y.preventDefault(),n.dispatchEvent(wa),le(y),n.dispatchEvent(ah))}function ae(y){n.enabled===!1||n.enablePan===!1||de(y)}function v(y){switch(ce(y),S.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;we(),r=s.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;Ae(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(),r=s.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(wa)}function x(y){switch(ce(y),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;J(y),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(y),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(y),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(y),n.update();break;default:r=s.NONE}}function F(y){n.enabled!==!1&&y.preventDefault()}function q(y){S.push(y)}function Q(y){delete P[y.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==y.pointerId){S.splice(ne,1);return}}function ce(y){let ne=P[y.pointerId];ne===void 0&&(ne=new Le,P[y.pointerId]=ne),ne.set(y.pageX,y.pageY)}function Me(y){const ne=y.pointerId===S[0].pointerId?S[1]:S[0];return P[ne.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}class Fl{constructor(e){Ie(this,"scene");Ie(this,"camera");Ie(this,"renderer");Ie(this,"orbitControls");this.container=e,this.scene=new Of,this.scene.background=new Re(12635345),this.camera=new Tt(40,this.container.offsetWidth/this.container.offsetHeight,.1,1e3),this.renderer=new Pl,this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),e.appendChild(this.renderer.domElement);const t=new no(16777215,1);t.position.set(20,50,20),t.lookAt(0,0,0),this.scene.add(t);const n=new no(13421772,1);n.position.set(-20,50,-20),n.lookAt(0,0,0),this.scene.add(n),this.camera.position.x=13,this.camera.position.y=18,this.camera.position.z=13,this.camera.lookAt(new I(0,0,0)),this.addDebug(),this.orbitControls=this.addOrbitControls()}animate(){document.body.contains(this.container)&&(this.updateSize(),requestAnimationFrame(this.animate.bind(this)),this.orbitControls.update(),this.renderer.render(this.scene,this.camera),window.graphics=this)}dump(){console.log("scene",this.scene)}addDebug(){{const e=new eb(20);this.scene.add(e)}}addOrbitControls(){const e=new cb(this.camera,this.renderer.domElement);return e.enableDamping=!0,e.dampingFactor=.05,e}updateSize(){this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}}Ie(Fl,"DEBUG",!0);let ji,fi,Ka;function ub(){if(fi.printFinishedSlice(1),!fi.validataSolved())throw"validataion not passed";console.log("checks",eo.checks.toLocaleString()),Ka.tryRender(fi)}async function hb(i){const e=new Fl(i);fi=new lb,ji=new eo(fi),Ka=new ab(e),ji.addEventListener("element_collapsed",()=>{Ka.tryRender(fi)}),ji.addEventListener("solving_finished",ub),fi.fill(ji),e.animate(),await ji.run()}function fb(){ji.stop()}const db=ms({__name:"Generate",setup(i){const e=Js();return mo(()=>{hb(e.value)}),Bh(()=>{fb()}),(t,n)=>{const s=gl("router-link");return qn(),Os(Pt,null,[mt(s,{to:"/editor",class:"btn editor-button"},{default:fo(()=>[yl("Editor")]),_:1}),jt("div",{class:"canvas",ref_key:"canvas",ref:e},null,512)],64)}}});const pb=vo(db,[["__scopeId","data-v-73ca66da"]]);class mb{constructor(){Ie(this,"objLoader",new Wf)}async loadMesh(e){let t;try{t=await new Promise((r,a)=>this.objLoader.load(e,r,()=>{},a));const n=new _s().setFromObject(t),s=new I;if(n.getSize(s),s.length()===0)return null}catch{return null}return t}}const jf=new mb,Hn=class Hn{constructor(){Ie(this,"renderer",new Pl);Ie(this,"camera",new Tt(40,Hn.WIDTH/Hn.HEIGHT,.1,1e3));Ie(this,"scene",new Of);Ie(this,"group",new Vn);this.renderer.setSize(Hn.WIDTH,Hn.HEIGHT),this.group.name="Container";const e=new no(16777215,1);e.position.set(20,50,20),e.lookAt(0,0,0),this.scene.add(e);const t=new no(13421772,1);t.position.set(-20,50,-20),t.lookAt(0,0,0),this.scene.add(t),this.camera.position.copy(new I(2,10,8)),this.camera.lookAt(new I(0,0,0)),this.scene.add(this.group)}async render(e){this.group.clear();const t=await jf.loadMesh(e);if(!t)return null;this.group.add(t),document.body.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera);const n=this.renderer.domElement.toDataURL();return document.body.removeChild(this.renderer.domElement),n}};Ie(Hn,"WIDTH",512),Ie(Hn,"HEIGHT",512);let Ja=Hn;const gb=new Ja;function _b(i,e=20){let t=0;return(...s)=>{clearTimeout(t),t=window.setTimeout(()=>i(...s),e)}}class xb extends EventTarget{constructor(){super();Ie(this,"model",[]);Ie(this,"event",new Event("model_updated",{bubbles:!0}));this.addEventListener("model_updated",_b(this.serialize.bind(this),1e3)),window.setTimeout(this.load.bind(this),100)}addItem(t,n){const{x:s,y:r}=t,a=this.getCell(t);a?a.src=n:this.model.push({x:s,y:r,src:n,rotation:0}),this.dispatchEvent(this.event)}rotateItem(t){const n=this.getCell(t);n&&(n.rotation+=1),this.dispatchEvent(this.event)}deleteCell(t){const{x:n,y:s}=t,r=this.model.findIndex(a=>a.x===n&&a.y===s);r!==-1&&this.model.splice(r,1),this.dispatchEvent(this.event)}getCell(t){const{x:n,y:s}=t;return this.model.find(r=>r.x===n&&r.y===s)}serialize(){localStorage.setItem("editor-model-data",JSON.stringify(this.model))}load(){const t=localStorage.getItem("editor-model-data");t&&(this.model=JSON.parse(t),this.dispatchEvent(this.event))}}class vb{constructor(e){Ie(this,"GRID_SIZE",2);Ie(this,"rayCaster",new JM);Ie(this,"dragPlane");Ie(this,"selectMesh");Ie(this,"editable",new Vn);Ie(this,"state",{selected:new Le});Ie(this,"model",new xb);this.graphics=e,this.dragPlane=this.addDragPlane(),this.selectMesh=this.addSelectMesh();const t=40,n=new QM(t*this.GRID_SIZE,t);this.graphics.scene.add(n),this.graphics.scene.add(this.editable),e.renderer.domElement.addEventListener("mousedown",s=>this.onMouseDown(s)),this.model.addEventListener("model_updated",this.renderComponents.bind(this))}addItem(e){this.model.addItem(this.state.selected,e)}rotateItem(){this.model.rotateItem(this.state.selected)}deleteCell(){this.model.deleteCell(this.state.selected)}async renderComponents(){this.editable.clear();for(let e=-40;e<=40;++e)for(let t=-40;t<=40;++t){const n=this.model.getCell(new Le(e,t));if(n){const s=await jf.loadMesh(n.src);s&&(s.position.copy(new I(e+this.GRID_SIZE/2,this.GRID_SIZE/2,t+this.GRID_SIZE/2)),s.rotateY(n.rotation*Math.PI/2),this.editable.add(s))}}}onMouseDown(e){if(e.button!==0)return;const t=this.getPoint(e),n=Math.floor(t.x/this.GRID_SIZE)*this.GRID_SIZE,s=Math.floor(t.z/this.GRID_SIZE)*this.GRID_SIZE;this.state.selected=new Le(n,s),this.selectMesh.position.copy(this.getSelectionPosition())}getSelectionPosition(){return new I(this.state.selected.x+this.GRID_SIZE/2,this.GRID_SIZE/2,this.state.selected.y+this.GRID_SIZE/2)}getPoint(e){const t=this.graphics.renderer.getContext().canvas.getBoundingClientRect(),n=new Le;n.x=(e.clientX-t.left)/(t.right-t.left)*2-1,n.y=-((e.clientY-t.top)/(t.bottom-t.top))*2+1,this.rayCaster.setFromCamera(n,this.graphics.camera);const s=this.rayCaster.intersectObjects([this.dragPlane]);return s.length!==0?s[0].point:new I(0,0,0)}addDragPlane(){const e=new Eo(200,200),t=new Xt(e,new wo({color:16777215,transparent:!0,opacity:.5}));return t.rotateOnAxis(new I(1,0,0),-Math.PI/2),t.name="drag plane",t.visible=!1,this.graphics.scene.add(t),t}addSelectMesh(){const e=new xs(2,2,2),t=new kf({color:65280,linewidth:2,dashSize:.1,gapSize:.05}),n=new Zs(new zM(e),t);return n.computeLineDistances(),this.graphics.scene.add(n),n}}let As;function qf(){function i(s){const r=new Fl(s);As=new vb(r),r.animate()}function e(s){As.addItem(s)}function t(){As.rotateItem()}function n(){As.deleteCell()}return{editor:As,createEditor:i,addObject:e,rotateObject:t,deleteCell:n}}const yb=i=>(np("data-v-d9421d7f"),i=i(),ip(),i),Mb={class:"wrapper"},bb={class:"objects"},Sb=yb(()=>jt("div",{class:"object"},"void",-1)),wb={class:"object"},Eb=["src","data-src"],Tb=ms({__name:"EditorMenu",setup(i){const e=Js([]),{addObject:t,rotateObject:n,deleteCell:s}=qf();mo(async()=>{for(let l=0;l<Qr.length;++l){const c=Qr[l].mesh,u=await gb.render(c);u&&e.value.push({data:u,src:c})}});function r(l){const u=l.target.getAttribute("data-src");t(u)}function a(){n()}function o(){s()}return(l,c)=>{const u=gl("router-link");return qn(),Os("div",Mb,[jt("div",bb,[Sb,(qn(!0),Os(Pt,null,Sp(e.value,h=>(qn(),Os("div",wb,[jt("img",{src:h.data,class:"object-image","data-src":h.src,onClick:r},null,8,Eb)]))),256))]),jt("button",{class:"btn",onClick:a},"Rotate"),jt("button",{class:"btn",onClick:o},"Delete"),mt(u,{to:"generate",class:"btn"},{default:fo(()=>[yl("Generate")]),_:1})])}}});const Ab=vo(Tb,[["__scopeId","data-v-d9421d7f"]]),Cb={class:"layout"},Lb=ms({__name:"EditorLayout",setup(i){return(e,t)=>(qn(),Os("div",Cb,[jt("aside",null,[mt(Ab)]),jt("main",null,[wp(e.$slots,"default",{},void 0,!0)])]))}});const Rb=vo(Lb,[["__scopeId","data-v-736f7da2"]]),lh=ms({__name:"Editor",setup(i){const{createEditor:e}=qf(),t=Js();return mo(()=>e(t.value)),(n,s)=>(qn(),vl(Rb,null,{default:fo(()=>[jt("div",{class:"canvas",ref_key:"canvas",ref:t},null,512)]),_:1}))}});const Pb=[{path:"/",component:lh},{path:"/editor",component:lh},{path:"/generate",component:pb}],Db=Rg({history:qm(),routes:Pb}),Ib=Am(),Ao=Sm(kg);Ao.use(Db);Ao.use(Ib);Ao.use(zg);Ao.mount("#app");
