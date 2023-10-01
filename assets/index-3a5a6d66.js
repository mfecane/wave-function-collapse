var tp=Object.defineProperty;var np=(n,e,t)=>e in n?tp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ce=(n,e,t)=>(np(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Nl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Qe={},dr=[],on=()=>{},ip=()=>!1,rp=/^on[^a-z]/,Do=n=>rp.test(n),Bl=n=>n.startsWith("onUpdate:"),vt=Object.assign,zl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sp=Object.prototype.hasOwnProperty,He=(n,e)=>sp.call(n,e),Ie=Array.isArray,pr=n=>Io(n)==="[object Map]",rh=n=>Io(n)==="[object Set]",Ne=n=>typeof n=="function",ft=n=>typeof n=="string",Ul=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",sh=n=>tt(n)&&Ne(n.then)&&Ne(n.catch),oh=Object.prototype.toString,Io=n=>oh.call(n),op=n=>Io(n).slice(8,-1),ah=n=>Io(n)==="[object Object]",kl=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fo=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ap=/-(\w)/g,En=Oo(n=>n.replace(ap,(e,t)=>t?t.toUpperCase():"")),lp=/\B([A-Z])/g,Lr=Oo(n=>n.replace(lp,"-$1").toLowerCase()),Fo=Oo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ho=Oo(n=>n?`on${Fo(n)}`:""),ss=(n,e)=>!Object.is(n,e),sa=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},yo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},cp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Mc;const tl=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?dp(i):Vl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ft(n))return n;if(tt(n))return n}}const up=/;(?![^(]*\))/g,fp=/:([^]+)/,hp=/\/\*[^]*?\*\//g;function dp(n){const e={};return n.replace(hp,"").split(up).forEach(t=>{if(t){const i=t.split(fp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function os(n){let e="";if(ft(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=os(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mp=Nl(pp);function lh(n){return!!n||n===""}const ch=n=>ft(n)?n:n==null?"":Ie(n)||tt(n)&&(n.toString===oh||!Ne(n.toString))?JSON.stringify(n,uh,2):String(n),uh=(n,e)=>e&&e.__v_isRef?uh(n,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:rh(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Ie(e)&&!ah(e)?String(e):e;let Kt;class fh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gp(n){return new fh(n)}function vp(n,e=Kt){e&&e.active&&e.effects.push(n)}function _p(){return Kt}const Hl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},hh=n=>(n.w&hi)>0,dh=n=>(n.n&hi)>0,xp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=hi},yp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];hh(r)&&!dh(r)?r.delete(n):e[t++]=r,r.w&=~hi,r.n&=~hi}e.length=t}},nl=new WeakMap;let $r=0,hi=1;const il=30;let en;const Pi=Symbol(""),rl=Symbol("");class Gl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,vp(this,i)}run(){if(!this.active)return this.fn();let e=en,t=oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,oi=!0,hi=1<<++$r,$r<=il?xp(this):Sc(this),this.fn()}finally{$r<=il&&yp(this),hi=1<<--$r,en=this.parent,oi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(Sc(this),this.onStop&&this.onStop(),this.active=!1)}}function Sc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let oi=!0;const ph=[];function Rr(){ph.push(oi),oi=!1}function Dr(){const n=ph.pop();oi=n===void 0?!0:n}function Bt(n,e,t){if(oi&&en){let i=nl.get(n);i||nl.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Hl()),mh(r)}}function mh(n,e){let t=!1;$r<=il?dh(n)||(n.n|=hi,t=!hh(n)):t=!n.has(en),t&&(n.add(en),en.deps.push(n))}function Un(n,e,t,i,r,s){const o=nl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?kl(t)&&a.push(o.get("length")):(a.push(o.get(Pi)),pr(n)&&a.push(o.get(rl)));break;case"delete":Ie(n)||(a.push(o.get(Pi)),pr(n)&&a.push(o.get(rl)));break;case"set":pr(n)&&a.push(o.get(Pi));break}if(a.length===1)a[0]&&sl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);sl(Hl(l))}}function sl(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&wc(i);for(const i of t)i.computed||wc(i)}function wc(n,e){(n!==en||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const bp=Nl("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ul)),Mp=Wl(),Sp=Wl(!1,!0),wp=Wl(!0),Ec=Ep();function Ep(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=We(this);for(let s=0,o=this.length;s<o;s++)Bt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Rr();const i=We(this)[e].apply(this,t);return Dr(),i}}),n}function Tp(n){const e=We(this);return Bt(e,"has",n),e.hasOwnProperty(n)}function Wl(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Hp:bh:e?yh:xh).get(i))return i;const o=Ie(i);if(!n){if(o&&He(Ec,r))return Reflect.get(Ec,r,s);if(r==="hasOwnProperty")return Tp}const a=Reflect.get(i,r,s);return(Ul(r)?gh.has(r):bp(r))||(n||Bt(i,"get",r),e)?a:Et(a)?o&&kl(r)?a:a.value:tt(a)?n?ql(a):Ss(a):a}}const Cp=vh(),Ap=vh(!0);function vh(n=!1){return function(t,i,r,s){let o=t[i];if(yr(o)&&Et(o)&&!Et(r))return!1;if(!n&&(!bo(r)&&!yr(r)&&(o=We(o),r=We(r)),!Ie(t)&&Et(o)&&!Et(r)))return o.value=r,!0;const a=Ie(t)&&kl(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===We(s)&&(a?ss(r,o)&&Un(t,"set",i,r):Un(t,"add",i,r)),l}}function Pp(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Un(n,"delete",e,void 0),i}function Lp(n,e){const t=Reflect.has(n,e);return(!Ul(e)||!gh.has(e))&&Bt(n,"has",e),t}function Rp(n){return Bt(n,"iterate",Ie(n)?"length":Pi),Reflect.ownKeys(n)}const _h={get:Mp,set:Cp,deleteProperty:Pp,has:Lp,ownKeys:Rp},Dp={get:wp,set(n,e){return!0},deleteProperty(n,e){return!0}},Ip=vt({},_h,{get:Sp,set:Ap}),$l=n=>n,No=n=>Reflect.getPrototypeOf(n);function Ls(n,e,t=!1,i=!1){n=n.__v_raw;const r=We(n),s=We(e);t||(e!==s&&Bt(r,"get",e),Bt(r,"get",s));const{has:o}=No(r),a=i?$l:t?Zl:as;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Rs(n,e=!1){const t=this.__v_raw,i=We(t),r=We(n);return e||(n!==r&&Bt(i,"has",n),Bt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ds(n,e=!1){return n=n.__v_raw,!e&&Bt(We(n),"iterate",Pi),Reflect.get(n,"size",n)}function Tc(n){n=We(n);const e=We(this);return No(e).has.call(e,n)||(e.add(n),Un(e,"add",n,n)),this}function Cc(n,e){e=We(e);const t=We(this),{has:i,get:r}=No(t);let s=i.call(t,n);s||(n=We(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?ss(e,o)&&Un(t,"set",n,e):Un(t,"add",n,e),this}function Ac(n){const e=We(this),{has:t,get:i}=No(e);let r=t.call(e,n);r||(n=We(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Un(e,"delete",n,void 0),s}function Pc(){const n=We(this),e=n.size!==0,t=n.clear();return e&&Un(n,"clear",void 0,void 0),t}function Is(n,e){return function(i,r){const s=this,o=s.__v_raw,a=We(o),l=e?$l:n?Zl:as;return!n&&Bt(a,"iterate",Pi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Os(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),o=pr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?$l:e?Zl:as;return!e&&Bt(s,"iterate",l?rl:Pi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Gn(n){return function(...e){return n==="delete"?!1:this}}function Op(){const n={get(s){return Ls(this,s)},get size(){return Ds(this)},has:Rs,add:Tc,set:Cc,delete:Ac,clear:Pc,forEach:Is(!1,!1)},e={get(s){return Ls(this,s,!1,!0)},get size(){return Ds(this)},has:Rs,add:Tc,set:Cc,delete:Ac,clear:Pc,forEach:Is(!1,!0)},t={get(s){return Ls(this,s,!0)},get size(){return Ds(this,!0)},has(s){return Rs.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Is(!0,!1)},i={get(s){return Ls(this,s,!0,!0)},get size(){return Ds(this,!0)},has(s){return Rs.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Os(s,!1,!1),t[s]=Os(s,!0,!1),e[s]=Os(s,!1,!0),i[s]=Os(s,!0,!0)}),[n,t,e,i]}const[Fp,Np,Bp,zp]=Op();function jl(n,e){const t=e?n?zp:Bp:n?Np:Fp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const Up={get:jl(!1,!1)},kp={get:jl(!1,!0)},Vp={get:jl(!0,!1)},xh=new WeakMap,yh=new WeakMap,bh=new WeakMap,Hp=new WeakMap;function Gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(n){return n.__v_skip||!Object.isExtensible(n)?0:Gp(op(n))}function Ss(n){return yr(n)?n:Xl(n,!1,_h,Up,xh)}function Mh(n){return Xl(n,!1,Ip,kp,yh)}function ql(n){return Xl(n,!0,Dp,Vp,bh)}function Xl(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Wp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function mr(n){return yr(n)?mr(n.__v_raw):!!(n&&n.__v_isReactive)}function yr(n){return!!(n&&n.__v_isReadonly)}function bo(n){return!!(n&&n.__v_isShallow)}function Sh(n){return mr(n)||yr(n)}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function Yl(n){return yo(n,"__v_skip",!0),n}const as=n=>tt(n)?Ss(n):n,Zl=n=>tt(n)?ql(n):n;function wh(n){oi&&en&&(n=We(n),mh(n.dep||(n.dep=Hl())))}function Eh(n,e){n=We(n);const t=n.dep;t&&sl(t)}function Et(n){return!!(n&&n.__v_isRef===!0)}function Nn(n){return Th(n,!1)}function $p(n){return Th(n,!0)}function Th(n,e){return Et(n)?n:new jp(n,e)}class jp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:as(e)}get value(){return wh(this),this._value}set value(e){const t=this.__v_isShallow||bo(e)||yr(e);e=t?e:We(e),ss(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:as(e),Eh(this))}}function ai(n){return Et(n)?n.value:n}const qp={get:(n,e,t)=>ai(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ch(n){return mr(n)?n:new Proxy(n,qp)}class Xp{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gl(e,()=>{this._dirty||(this._dirty=!0,Eh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return wh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yp(n,e,t=!1){let i,r;const s=Ne(n);return s?(i=n,r=on):(i=n.get,r=n.set),new Xp(i,r,s||!r,t)}function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Bo(s,e,t)}return r}function an(n,e,t,i){if(Ne(n)){const s=li(n,e,t,i);return s&&sh(s)&&s.catch(o=>{Bo(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}function Bo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,o,a]);return}}Zp(n,t,r,i)}function Zp(n,e,t,i=!0){console.error(n)}let ls=!1,ol=!1;const wt=[];let bn=0;const gr=[];let In=null,Mi=0;const Ah=Promise.resolve();let Kl=null;function Jl(n){const e=Kl||Ah;return n?e.then(this?n.bind(this):n):e}function Kp(n){let e=bn+1,t=wt.length;for(;e<t;){const i=e+t>>>1;cs(wt[i])<n?e=i+1:t=i}return e}function Ql(n){(!wt.length||!wt.includes(n,ls&&n.allowRecurse?bn+1:bn))&&(n.id==null?wt.push(n):wt.splice(Kp(n.id),0,n),Ph())}function Ph(){!ls&&!ol&&(ol=!0,Kl=Ah.then(Rh))}function Jp(n){const e=wt.indexOf(n);e>bn&&wt.splice(e,1)}function Qp(n){Ie(n)?gr.push(...n):(!In||!In.includes(n,n.allowRecurse?Mi+1:Mi))&&gr.push(n),Ph()}function Lc(n,e=ls?bn+1:0){for(;e<wt.length;e++){const t=wt[e];t&&t.pre&&(wt.splice(e,1),e--,t())}}function Lh(n){if(gr.length){const e=[...new Set(gr)];if(gr.length=0,In){In.push(...e);return}for(In=e,In.sort((t,i)=>cs(t)-cs(i)),Mi=0;Mi<In.length;Mi++)In[Mi]();In=null,Mi=0}}const cs=n=>n.id==null?1/0:n.id,em=(n,e)=>{const t=cs(n)-cs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Rh(n){ol=!1,ls=!0,wt.sort(em);const e=on;try{for(bn=0;bn<wt.length;bn++){const t=wt[bn];t&&t.active!==!1&&li(t,null,14)}}finally{bn=0,wt.length=0,Lh(),ls=!1,Kl=null,(wt.length||gr.length)&&Rh()}}function tm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||Qe;h&&(r=t.map(d=>ft(d)?d.trim():d)),f&&(r=t.map(cp))}let a,l=i[a=ho(e)]||i[a=ho(En(e))];!l&&s&&(l=i[a=ho(Lr(e))]),l&&an(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(c,n,6,r)}}function Dh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ne(n)){const l=c=>{const u=Dh(c,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):vt(o,s),tt(n)&&i.set(n,o),o)}function zo(n,e){return!n||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,Lr(e))||He(n,e))}let yt=null,Uo=null;function Mo(n){const e=yt;return yt=n,Uo=n&&n.type.__scopeId||null,e}function nm(n){Uo=n}function im(){Uo=null}function ri(n,e=yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Vc(-1);const s=Mo(e);let o;try{o=n(...r)}finally{Mo(s),i._d&&Vc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function oa(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:m}=n;let p,v;const x=Mo(n);try{if(t.shapeFlag&4){const E=r||i;p=xn(u.call(E,E,f,s,d,h,g)),v=l}else{const E=e;p=xn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),v=e.props?l:rm(l)}}catch(E){Jr.length=0,Bo(E,n,1),p=st(di)}let A=p;if(v&&m!==!1){const E=Object.keys(v),{shapeFlag:S}=A;E.length&&S&7&&(o&&E.some(Bl)&&(v=sm(v,o)),A=br(A,v))}return t.dirs&&(A=br(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),p=A,Mo(x),p}const rm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Do(t))&&((e||(e={}))[t]=n[t]);return e},sm=(n,e)=>{const t={};for(const i in n)(!Bl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function om(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!zo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rc(i,o,c):!0:!!o;return!1}function Rc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!zo(t,s))return!0}return!1}function am({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const lm=n=>n.__isSuspense;function cm(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Qp(n)}const Fs={};function Yr(n,e,t){return Ih(n,e,t)}function Ih(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Qe){var a;const l=_p()===((a=gt)==null?void 0:a.scope)?gt:null;let c,u=!1,f=!1;if(Et(n)?(c=()=>n.value,u=bo(n)):mr(n)?(c=()=>n,i=!0):Ie(n)?(f=!0,u=n.some(E=>mr(E)||bo(E)),c=()=>n.map(E=>{if(Et(E))return E.value;if(mr(E))return Ei(E);if(Ne(E))return li(E,l,2)})):Ne(n)?e?c=()=>li(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),an(n,l,3,[d])}:c=on,e&&i){const E=c;c=()=>Ei(E())}let h,d=E=>{h=x.onStop=()=>{li(E,l,4)}},g;if(fs)if(d=on,e?t&&an(e,l,3,[c(),f?[]:void 0,d]):c(),r==="sync"){const E=ng();g=E.__watcherHandles||(E.__watcherHandles=[])}else return on;let m=f?new Array(n.length).fill(Fs):Fs;const p=()=>{if(x.active)if(e){const E=x.run();(i||u||(f?E.some((S,R)=>ss(S,m[R])):ss(E,m)))&&(h&&h(),an(e,l,3,[E,m===Fs?void 0:f&&m[0]===Fs?[]:m,d]),m=E)}else x.run()};p.allowRecurse=!!e;let v;r==="sync"?v=p:r==="post"?v=()=>Ot(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),v=()=>Ql(p));const x=new Gl(c,v);e?t?p():m=x.run():r==="post"?Ot(x.run.bind(x),l&&l.suspense):x.run();const A=()=>{x.stop(),l&&l.scope&&zl(l.scope.effects,x)};return g&&g.push(A),A}function um(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?Oh(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=gt;Mr(this);const a=Ih(r,s.bind(i),t);return o?Mr(o):Li(),a}function Oh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ei(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Et(n))Ei(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Ei(n[t],e);else if(rh(n)||pr(n))n.forEach(t=>{Ei(t,e)});else if(ah(n))for(const t in n)Ei(n[t],e);return n}function fm(n,e){const t=yt;if(t===null)return n;const i=Wo(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Qe]=e[s];o&&(Ne(o)&&(o={mounted:o,updated:o}),o.deep&&Ei(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function mi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Rr(),an(l,t,8,[n.el,a,n,e]),Dr())}}function Ir(n,e){return Ne(n)?(()=>vt({name:n.name},e,{setup:n}))():n}const Zr=n=>!!n.type.__asyncLoader,Fh=n=>n.type.__isKeepAlive;function hm(n,e){Nh(n,"a",e)}function dm(n,e){Nh(n,"da",e)}function Nh(n,e,t=gt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ko(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Fh(r.parent.vnode)&&pm(i,e,t,r),r=r.parent}}function pm(n,e,t,i){const r=ko(e,n,i,!0);zh(()=>{zl(i[e],r)},t)}function ko(n,e,t=gt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Rr(),Mr(t);const a=an(e,t,n,o);return Li(),Dr(),a});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(e,t=gt)=>(!fs||n==="sp")&&ko(n,(...i)=>e(...i),t),mm=Vn("bm"),ws=Vn("m"),gm=Vn("bu"),vm=Vn("u"),Bh=Vn("bum"),zh=Vn("um"),_m=Vn("sp"),xm=Vn("rtg"),ym=Vn("rtc");function bm(n,e=gt){ko("ec",n,e)}const ec="components",Mm="directives";function Oi(n,e){return tc(ec,n,!0,e)||n}const Uh=Symbol.for("v-ndc");function Ns(n){return ft(n)?tc(ec,n,!1)||n:n||Uh}function Sm(n){return tc(Mm,n)}function tc(n,e,t=!0,i=!1){const r=yt||gt;if(r){const s=r.type;if(n===ec){const a=Qm(s,!1);if(a&&(a===e||a===En(e)||a===Fo(En(e))))return s}const o=Dc(r[n]||s[n],e)||Dc(r.appContext[n],e);return!o&&i?s:o}}function Dc(n,e){return n&&(n[e]||n[En(e)]||n[Fo(En(e))])}function wm(n,e,t,i){let r;const s=t&&t[i];if(Ie(n)||ft(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function Fn(n,e,t={},i,r){if(yt.isCE||yt.parent&&Zr(yt.parent)&&yt.parent.isCE)return e!=="default"&&(t.name=e),st("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),Ke();const o=s&&kh(s(t)),a=Wt(Vt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function kh(n){return n.some(e=>Eo(e)?!(e.type===di||e.type===Vt&&!kh(e.children)):!0)?n:null}function Bs(n,e){const t={};for(const i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:ho(i)]=n[i];return t}const al=n=>n?Kh(n)?Wo(n)||n.proxy:al(n.parent):null,Kr=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>al(n.parent),$root:n=>al(n.root),$emit:n=>n.emit,$options:n=>nc(n),$forceUpdate:n=>n.f||(n.f=()=>Ql(n.update)),$nextTick:n=>n.n||(n.n=Jl.bind(n.proxy)),$watch:n=>um.bind(n)}),aa=(n,e)=>n!==Qe&&!n.__isScriptSetup&&He(n,e),Em={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(aa(i,e))return o[e]=1,i[e];if(r!==Qe&&He(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==Qe&&He(t,e))return o[e]=4,t[e];ll&&(o[e]=0)}}const u=Kr[e];let f,h;if(u)return e==="$attrs"&&Bt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Qe&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return aa(r,e)?(r[e]=t,!0):i!==Qe&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Qe&&He(n,o)||aa(e,o)||(a=s[0])&&He(a,o)||He(i,o)||He(Kr,o)||He(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ic(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ll=!0;function Tm(n){const e=nc(n),t=n.proxy,i=n.ctx;ll=!1,e.beforeCreate&&Oc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:v,beforeUnmount:x,destroyed:A,unmounted:E,render:S,renderTracked:R,renderTriggered:F,errorCaptured:b,serverPrefetch:L,expose:B,inheritAttrs:z,components:xe,directives:ce,filters:N}=e;if(c&&Cm(c,i,null),o)for(const $ in o){const W=o[$];Ne(W)&&(i[$]=W.bind(t))}if(r){const $=r.call(t,t);tt($)&&(n.data=Ss($))}if(ll=!0,s)for(const $ in s){const W=s[$],q=Ne(W)?W.bind(t,t):Ne(W.get)?W.get.bind(t,t):on,ee=!Ne(W)&&Ne(W.set)?W.set.bind(t):on,he=tn({get:q,set:ee});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>he.value,set:le=>he.value=le})}if(a)for(const $ in a)Vh(a[$],i,t,$);if(l){const $=Ne(l)?l.call(t):l;Reflect.ownKeys($).forEach(W=>{po(W,$[W])})}u&&Oc(u,n,"c");function k($,W){Ie(W)?W.forEach(q=>$(q.bind(t))):W&&$(W.bind(t))}if(k(mm,f),k(ws,h),k(gm,d),k(vm,g),k(hm,m),k(dm,p),k(bm,b),k(ym,R),k(xm,F),k(Bh,x),k(zh,E),k(_m,L),Ie(B))if(B.length){const $=n.exposed||(n.exposed={});B.forEach(W=>{Object.defineProperty($,W,{get:()=>t[W],set:q=>t[W]=q})})}else n.exposed||(n.exposed={});S&&n.render===on&&(n.render=S),z!=null&&(n.inheritAttrs=z),xe&&(n.components=xe),ce&&(n.directives=ce)}function Cm(n,e,t=on){Ie(n)&&(n=cl(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=Bn(r.from||i,r.default,!0):s=Bn(r.from||i):s=Bn(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Oc(n,e,t){an(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vh(n,e,t,i){const r=i.includes(".")?Oh(t,i):()=>t[i];if(ft(n)){const s=e[n];Ne(s)&&Yr(r,s)}else if(Ne(n))Yr(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>Vh(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&Yr(r,s,n)}}function nc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>So(l,c,o,!0)),So(l,e,o)),tt(e)&&s.set(e,l),l}function So(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&So(n,s,t,!0),r&&r.forEach(o=>So(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Am[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Am={data:Fc,props:Nc,emits:Nc,methods:jr,computed:jr,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:jr,directives:jr,watch:Lm,provide:Fc,inject:Pm};function Fc(n,e){return e?n?function(){return vt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function Pm(n,e){return jr(cl(n),cl(e))}function cl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function jr(n,e){return n?vt(Object.create(null),n,e):e}function Nc(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:vt(Object.create(null),Ic(n),Ic(e??{})):e}function Lm(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Pt(n[i],e[i]);return t}function Hh(){return{app:null,config:{isNativeTag:ip,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rm=0;function Dm(n,e){return function(i,r=null){Ne(i)||(i=vt({},i)),r!=null&&!tt(r)&&(r=null);const s=Hh(),o=new Set;let a=!1;const l=s.app={_uid:Rm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ig,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=st(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Wo(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){wo=l;try{return c()}finally{wo=null}}};return l}}let wo=null;function po(n,e){if(gt){let t=gt.provides;const i=gt.parent&&gt.parent.provides;i===t&&(t=gt.provides=Object.create(i)),t[n]=e}}function Bn(n,e,t=!1){const i=gt||yt;if(i||wo){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:wo._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i&&i.proxy):e}}function Im(n,e,t,i=!1){const r={},s={};yo(s,Ho,1),n.propsDefaults=Object.create(null),Gh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Mh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Om(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=We(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(zo(n.emitsOptions,h))continue;const d=e[h];if(l)if(He(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=En(h);r[g]=ul(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Gh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!He(e,f)&&((u=Lr(f))===f||!He(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ul(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!He(e,f))&&(delete s[f],c=!0)}c&&Un(n,"set","$attrs")}function Gh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fo(l))continue;const c=e[l];let u;r&&He(r,u=En(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:zo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=We(t),c=a||Qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ul(r,l,f,c[f],n,!He(c,f))}}return o}function ul(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Mr(r),i=c[t]=l.call(null,e),Li())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Lr(t))&&(i=!0))}return i}function Wh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ne(n)){const u=f=>{l=!0;const[h,d]=Wh(f,e,!0);vt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,dr),dr;if(Ie(s))for(let u=0;u<s.length;u++){const f=En(s[u]);Bc(f)&&(o[f]=Qe)}else if(s)for(const u in s){const f=En(u);if(Bc(f)){const h=s[u],d=o[f]=Ie(h)||Ne(h)?{type:h}:vt({},h);if(d){const g=kc(Boolean,d.type),m=kc(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||He(d,"default"))&&a.push(f)}}}const c=[o,a];return tt(n)&&i.set(n,c),c}function Bc(n){return n[0]!=="$"}function zc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Uc(n,e){return zc(n)===zc(e)}function kc(n,e){return Ie(e)?e.findIndex(t=>Uc(t,n)):Ne(e)&&Uc(e,n)?0:-1}const $h=n=>n[0]==="_"||n==="$stable",ic=n=>Ie(n)?n.map(xn):[xn(n)],Fm=(n,e,t)=>{if(e._n)return e;const i=ri((...r)=>ic(e(...r)),t);return i._c=!1,i},jh=(n,e,t)=>{const i=n._ctx;for(const r in n){if($h(r))continue;const s=n[r];if(Ne(s))e[r]=Fm(r,s,i);else if(s!=null){const o=ic(s);e[r]=()=>o}}},qh=(n,e)=>{const t=ic(e);n.slots.default=()=>t},Nm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=We(e),yo(e,"_",t)):jh(e,n.slots={})}else n.slots={},e&&qh(n,e);yo(n.slots,Ho,1)},Bm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(vt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,jh(e,r)),o=e}else e&&(qh(n,e),o={default:1});if(s)for(const a in r)!$h(a)&&!(a in o)&&delete r[a]};function fl(n,e,t,i,r=!1){if(Ie(n)){n.forEach((h,d)=>fl(h,e&&(Ie(e)?e[d]:e),t,i,r));return}if(Zr(i)&&!r)return;const s=i.shapeFlag&4?Wo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,He(f,c)&&(f[c]=null)):Et(c)&&(c.value=null)),Ne(l))li(l,a,12,[o,u]);else{const h=ft(l),d=Et(l);if(h||d){const g=()=>{if(n.f){const m=h?He(f,l)?f[l]:u[l]:l.value;r?Ie(m)&&zl(m,s):Ie(m)?m.includes(s)||m.push(s):h?(u[l]=[s],He(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,He(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ot(g,t)):g()}}}const Ot=cm;function zm(n){return Um(n)}function Um(n,e){const t=tl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=on,insertStaticContent:g}=n,m=(w,C,I,H=null,Z=null,re=null,pe=!1,te=null,me=!!C.dynamicChildren)=>{if(w===C)return;w&&!Ur(w,C)&&(H=V(w),le(w,Z,re,!0),w=null),C.patchFlag===-2&&(me=!1,C.dynamicChildren=null);const{type:ae,ref:y,shapeFlag:_}=C;switch(ae){case Vo:p(w,C,I,H);break;case di:v(w,C,I,H);break;case la:w==null&&x(C,I,H,pe);break;case Vt:xe(w,C,I,H,Z,re,pe,te,me);break;default:_&1?S(w,C,I,H,Z,re,pe,te,me):_&6?ce(w,C,I,H,Z,re,pe,te,me):(_&64||_&128)&&ae.process(w,C,I,H,Z,re,pe,te,me,J)}y!=null&&Z&&fl(y,w&&w.ref,re,C||w,!C)},p=(w,C,I,H)=>{if(w==null)i(C.el=a(C.children),I,H);else{const Z=C.el=w.el;C.children!==w.children&&c(Z,C.children)}},v=(w,C,I,H)=>{w==null?i(C.el=l(C.children||""),I,H):C.el=w.el},x=(w,C,I,H)=>{[w.el,w.anchor]=g(w.children,C,I,H,w.el,w.anchor)},A=({el:w,anchor:C},I,H)=>{let Z;for(;w&&w!==C;)Z=h(w),i(w,I,H),w=Z;i(C,I,H)},E=({el:w,anchor:C})=>{let I;for(;w&&w!==C;)I=h(w),r(w),w=I;r(C)},S=(w,C,I,H,Z,re,pe,te,me)=>{pe=pe||C.type==="svg",w==null?R(C,I,H,Z,re,pe,te,me):L(w,C,Z,re,pe,te,me)},R=(w,C,I,H,Z,re,pe,te)=>{let me,ae;const{type:y,props:_,shapeFlag:O,transition:j,dirs:Q}=w;if(me=w.el=o(w.type,re,_&&_.is,_),O&8?u(me,w.children):O&16&&b(w.children,me,null,H,Z,re&&y!=="foreignObject",pe,te),Q&&mi(w,null,H,"created"),F(me,w,w.scopeId,pe,H),_){for(const be in _)be!=="value"&&!fo(be)&&s(me,be,null,_[be],re,w.children,H,Z,X);"value"in _&&s(me,"value",null,_.value),(ae=_.onVnodeBeforeMount)&&mn(ae,H,w)}Q&&mi(w,null,H,"beforeMount");const ue=(!Z||Z&&!Z.pendingBranch)&&j&&!j.persisted;ue&&j.beforeEnter(me),i(me,C,I),((ae=_&&_.onVnodeMounted)||ue||Q)&&Ot(()=>{ae&&mn(ae,H,w),ue&&j.enter(me),Q&&mi(w,null,H,"mounted")},Z)},F=(w,C,I,H,Z)=>{if(I&&d(w,I),H)for(let re=0;re<H.length;re++)d(w,H[re]);if(Z){let re=Z.subTree;if(C===re){const pe=Z.vnode;F(w,pe,pe.scopeId,pe.slotScopeIds,Z.parent)}}},b=(w,C,I,H,Z,re,pe,te,me=0)=>{for(let ae=me;ae<w.length;ae++){const y=w[ae]=te?ei(w[ae]):xn(w[ae]);m(null,y,C,I,H,Z,re,pe,te)}},L=(w,C,I,H,Z,re,pe)=>{const te=C.el=w.el;let{patchFlag:me,dynamicChildren:ae,dirs:y}=C;me|=w.patchFlag&16;const _=w.props||Qe,O=C.props||Qe;let j;I&&gi(I,!1),(j=O.onVnodeBeforeUpdate)&&mn(j,I,C,w),y&&mi(C,w,I,"beforeUpdate"),I&&gi(I,!0);const Q=Z&&C.type!=="foreignObject";if(ae?B(w.dynamicChildren,ae,te,I,H,Q,re):pe||W(w,C,te,null,I,H,Q,re,!1),me>0){if(me&16)z(te,C,_,O,I,H,Z);else if(me&2&&_.class!==O.class&&s(te,"class",null,O.class,Z),me&4&&s(te,"style",_.style,O.style,Z),me&8){const ue=C.dynamicProps;for(let be=0;be<ue.length;be++){const M=ue[be],ne=_[M],ge=O[M];(ge!==ne||M==="value")&&s(te,M,ne,ge,Z,w.children,I,H,X)}}me&1&&w.children!==C.children&&u(te,C.children)}else!pe&&ae==null&&z(te,C,_,O,I,H,Z);((j=O.onVnodeUpdated)||y)&&Ot(()=>{j&&mn(j,I,C,w),y&&mi(C,w,I,"updated")},H)},B=(w,C,I,H,Z,re,pe)=>{for(let te=0;te<C.length;te++){const me=w[te],ae=C[te],y=me.el&&(me.type===Vt||!Ur(me,ae)||me.shapeFlag&70)?f(me.el):I;m(me,ae,y,null,H,Z,re,pe,!0)}},z=(w,C,I,H,Z,re,pe)=>{if(I!==H){if(I!==Qe)for(const te in I)!fo(te)&&!(te in H)&&s(w,te,I[te],null,pe,C.children,Z,re,X);for(const te in H){if(fo(te))continue;const me=H[te],ae=I[te];me!==ae&&te!=="value"&&s(w,te,ae,me,pe,C.children,Z,re,X)}"value"in H&&s(w,"value",I.value,H.value)}},xe=(w,C,I,H,Z,re,pe,te,me)=>{const ae=C.el=w?w.el:a(""),y=C.anchor=w?w.anchor:a("");let{patchFlag:_,dynamicChildren:O,slotScopeIds:j}=C;j&&(te=te?te.concat(j):j),w==null?(i(ae,I,H),i(y,I,H),b(C.children,I,y,Z,re,pe,te,me)):_>0&&_&64&&O&&w.dynamicChildren?(B(w.dynamicChildren,O,I,Z,re,pe,te),(C.key!=null||Z&&C===Z.subTree)&&Xh(w,C,!0)):W(w,C,I,y,Z,re,pe,te,me)},ce=(w,C,I,H,Z,re,pe,te,me)=>{C.slotScopeIds=te,w==null?C.shapeFlag&512?Z.ctx.activate(C,I,H,pe,me):N(C,I,H,Z,re,pe,me):ie(w,C,me)},N=(w,C,I,H,Z,re,pe)=>{const te=w.component=qm(w,H,Z);if(Fh(w)&&(te.ctx.renderer=J),Ym(te),te.asyncDep){if(Z&&Z.registerDep(te,k),!w.el){const me=te.subTree=st(di);v(null,me,C,I)}return}k(te,w,C,I,Z,re,pe)},ie=(w,C,I)=>{const H=C.component=w.component;if(om(w,C,I))if(H.asyncDep&&!H.asyncResolved){$(H,C,I);return}else H.next=C,Jp(H.update),H.update();else C.el=w.el,H.vnode=C},k=(w,C,I,H,Z,re,pe)=>{const te=()=>{if(w.isMounted){let{next:y,bu:_,u:O,parent:j,vnode:Q}=w,ue=y,be;gi(w,!1),y?(y.el=Q.el,$(w,y,pe)):y=Q,_&&sa(_),(be=y.props&&y.props.onVnodeBeforeUpdate)&&mn(be,j,y,Q),gi(w,!0);const M=oa(w),ne=w.subTree;w.subTree=M,m(ne,M,f(ne.el),V(ne),w,Z,re),y.el=M.el,ue===null&&am(w,M.el),O&&Ot(O,Z),(be=y.props&&y.props.onVnodeUpdated)&&Ot(()=>mn(be,j,y,Q),Z)}else{let y;const{el:_,props:O}=C,{bm:j,m:Q,parent:ue}=w,be=Zr(C);if(gi(w,!1),j&&sa(j),!be&&(y=O&&O.onVnodeBeforeMount)&&mn(y,ue,C),gi(w,!0),_&&Ee){const M=()=>{w.subTree=oa(w),Ee(_,w.subTree,w,Z,null)};be?C.type.__asyncLoader().then(()=>!w.isUnmounted&&M()):M()}else{const M=w.subTree=oa(w);m(null,M,I,H,w,Z,re),C.el=M.el}if(Q&&Ot(Q,Z),!be&&(y=O&&O.onVnodeMounted)){const M=C;Ot(()=>mn(y,ue,M),Z)}(C.shapeFlag&256||ue&&Zr(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&Ot(w.a,Z),w.isMounted=!0,C=I=H=null}},me=w.effect=new Gl(te,()=>Ql(ae),w.scope),ae=w.update=()=>me.run();ae.id=w.uid,gi(w,!0),ae()},$=(w,C,I)=>{C.component=w;const H=w.vnode.props;w.vnode=C,w.next=null,Om(w,C.props,H,I),Bm(w,C.children,I),Rr(),Lc(),Dr()},W=(w,C,I,H,Z,re,pe,te,me=!1)=>{const ae=w&&w.children,y=w?w.shapeFlag:0,_=C.children,{patchFlag:O,shapeFlag:j}=C;if(O>0){if(O&128){ee(ae,_,I,H,Z,re,pe,te,me);return}else if(O&256){q(ae,_,I,H,Z,re,pe,te,me);return}}j&8?(y&16&&X(ae,Z,re),_!==ae&&u(I,_)):y&16?j&16?ee(ae,_,I,H,Z,re,pe,te,me):X(ae,Z,re,!0):(y&8&&u(I,""),j&16&&b(_,I,H,Z,re,pe,te,me))},q=(w,C,I,H,Z,re,pe,te,me)=>{w=w||dr,C=C||dr;const ae=w.length,y=C.length,_=Math.min(ae,y);let O;for(O=0;O<_;O++){const j=C[O]=me?ei(C[O]):xn(C[O]);m(w[O],j,I,null,Z,re,pe,te,me)}ae>y?X(w,Z,re,!0,!1,_):b(C,I,H,Z,re,pe,te,me,_)},ee=(w,C,I,H,Z,re,pe,te,me)=>{let ae=0;const y=C.length;let _=w.length-1,O=y-1;for(;ae<=_&&ae<=O;){const j=w[ae],Q=C[ae]=me?ei(C[ae]):xn(C[ae]);if(Ur(j,Q))m(j,Q,I,null,Z,re,pe,te,me);else break;ae++}for(;ae<=_&&ae<=O;){const j=w[_],Q=C[O]=me?ei(C[O]):xn(C[O]);if(Ur(j,Q))m(j,Q,I,null,Z,re,pe,te,me);else break;_--,O--}if(ae>_){if(ae<=O){const j=O+1,Q=j<y?C[j].el:H;for(;ae<=O;)m(null,C[ae]=me?ei(C[ae]):xn(C[ae]),I,Q,Z,re,pe,te,me),ae++}}else if(ae>O)for(;ae<=_;)le(w[ae],Z,re,!0),ae++;else{const j=ae,Q=ae,ue=new Map;for(ae=Q;ae<=O;ae++){const fe=C[ae]=me?ei(C[ae]):xn(C[ae]);fe.key!=null&&ue.set(fe.key,ae)}let be,M=0;const ne=O-Q+1;let ge=!1,ve=0;const P=new Array(ne);for(ae=0;ae<ne;ae++)P[ae]=0;for(ae=j;ae<=_;ae++){const fe=w[ae];if(M>=ne){le(fe,Z,re,!0);continue}let Te;if(fe.key!=null)Te=ue.get(fe.key);else for(be=Q;be<=O;be++)if(P[be-Q]===0&&Ur(fe,C[be])){Te=be;break}Te===void 0?le(fe,Z,re,!0):(P[Te-Q]=ae+1,Te>=ve?ve=Te:ge=!0,m(fe,C[Te],I,null,Z,re,pe,te,me),M++)}const _e=ge?km(P):dr;for(be=_e.length-1,ae=ne-1;ae>=0;ae--){const fe=Q+ae,Te=C[fe],Me=fe+1<y?C[fe+1].el:H;P[ae]===0?m(null,Te,I,Me,Z,re,pe,te,me):ge&&(be<0||ae!==_e[be]?he(Te,I,Me,2):be--)}}},he=(w,C,I,H,Z=null)=>{const{el:re,type:pe,transition:te,children:me,shapeFlag:ae}=w;if(ae&6){he(w.component.subTree,C,I,H);return}if(ae&128){w.suspense.move(C,I,H);return}if(ae&64){pe.move(w,C,I,J);return}if(pe===Vt){i(re,C,I);for(let _=0;_<me.length;_++)he(me[_],C,I,H);i(w.anchor,C,I);return}if(pe===la){A(w,C,I);return}if(H!==2&&ae&1&&te)if(H===0)te.beforeEnter(re),i(re,C,I),Ot(()=>te.enter(re),Z);else{const{leave:_,delayLeave:O,afterLeave:j}=te,Q=()=>i(re,C,I),ue=()=>{_(re,()=>{Q(),j&&j()})};O?O(re,Q,ue):ue()}else i(re,C,I)},le=(w,C,I,H=!1,Z=!1)=>{const{type:re,props:pe,ref:te,children:me,dynamicChildren:ae,shapeFlag:y,patchFlag:_,dirs:O}=w;if(te!=null&&fl(te,null,I,w,!0),y&256){C.ctx.deactivate(w);return}const j=y&1&&O,Q=!Zr(w);let ue;if(Q&&(ue=pe&&pe.onVnodeBeforeUnmount)&&mn(ue,C,w),y&6)Ae(w.component,I,H);else{if(y&128){w.suspense.unmount(I,H);return}j&&mi(w,null,C,"beforeUnmount"),y&64?w.type.remove(w,C,I,Z,J,H):ae&&(re!==Vt||_>0&&_&64)?X(ae,C,I,!1,!0):(re===Vt&&_&384||!Z&&y&16)&&X(me,C,I),H&&de(w)}(Q&&(ue=pe&&pe.onVnodeUnmounted)||j)&&Ot(()=>{ue&&mn(ue,C,w),j&&mi(w,null,C,"unmounted")},I)},de=w=>{const{type:C,el:I,anchor:H,transition:Z}=w;if(C===Vt){we(I,H);return}if(C===la){E(w);return}const re=()=>{r(I),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:pe,delayLeave:te}=Z,me=()=>pe(I,re);te?te(w.el,re,me):me()}else re()},we=(w,C)=>{let I;for(;w!==C;)I=h(w),r(w),w=I;r(C)},Ae=(w,C,I)=>{const{bum:H,scope:Z,update:re,subTree:pe,um:te}=w;H&&sa(H),Z.stop(),re&&(re.active=!1,le(pe,w,C,I)),te&&Ot(te,C),Ot(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},X=(w,C,I,H=!1,Z=!1,re=0)=>{for(let pe=re;pe<w.length;pe++)le(w[pe],C,I,H,Z)},V=w=>w.shapeFlag&6?V(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),se=(w,C,I)=>{w==null?C._vnode&&le(C._vnode,null,null,!0):m(C._vnode||null,w,C,null,null,null,I),Lc(),Lh(),C._vnode=w},J={p:m,um:le,m:he,r:de,mt:N,mc:b,pc:W,pbc:B,n:V,o:n};let K,Ee;return e&&([K,Ee]=e(J)),{render:se,hydrate:K,createApp:Dm(se,K)}}function gi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Xh(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ei(r[s]),a.el=o.el),t||Xh(o,a)),a.type===Vo&&(a.el=o.el)}}function km(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Vm=n=>n.__isTeleport,Vt=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),di=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),Jr=[];let rn=null;function Ke(n=!1){Jr.push(rn=n?null:[])}function Hm(){Jr.pop(),rn=Jr[Jr.length-1]||null}let us=1;function Vc(n){us+=n}function Yh(n){return n.dynamicChildren=us>0?rn||dr:null,Hm(),us>0&&rn&&rn.push(n),n}function Rt(n,e,t,i,r,s){return Yh(dt(n,e,t,i,r,s,!0))}function Wt(n,e,t,i,r){return Yh(st(n,e,t,i,r,!0))}function Eo(n){return n?n.__v_isVNode===!0:!1}function Ur(n,e){return n.type===e.type&&n.key===e.key}const Ho="__vInternal",Zh=({key:n})=>n??null,mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||Et(n)||Ne(n)?{i:yt,r:n,k:e,f:!!t}:n:null);function dt(n,e=null,t=null,i=0,r=null,s=n===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zh(e),ref:e&&mo(e),scopeId:Uo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(rc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),us>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const st=Gm;function Gm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Uh)&&(n=di),Eo(n)){const a=br(n,e,!0);return t&&rc(a,t),us>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag|=-2,a}if(eg(n)&&(n=n.__vccOpts),e){e=Wm(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=os(a)),tt(l)&&(Sh(l)&&!Ie(l)&&(l=vt({},l)),e.style=Vl(l))}const o=ft(n)?1:lm(n)?128:Vm(n)?64:tt(n)?4:Ne(n)?2:0;return dt(n,e,t,i,r,o,s,!0)}function Wm(n){return n?Sh(n)||Ho in n?vt({},n):n:null}function br(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Ze(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Zh(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(mo(e)):[r,mo(e)]:mo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&br(n.ssContent),ssFallback:n.ssFallback&&br(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Go(n=" ",e=0){return st(Vo,null,n,e)}function Qr(n="",e=!1){return e?(Ke(),Wt(di,null,n)):st(di,null,n)}function xn(n){return n==null||typeof n=="boolean"?st(di):Ie(n)?st(Vt,null,n.slice()):typeof n=="object"?ei(n):st(Vo,null,String(n))}function ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:br(n)}function rc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ho in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:yt},t=32):(e=String(e),i&64?(t=16,e=[Go(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ze(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=os([e.class,i.class]));else if(r==="style")e.style=Vl([e.style,i.style]);else if(Do(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){an(n,e,7,[t,i])}const $m=Hh();let jm=0;function qm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||$m,s={uid:jm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wh(i,r),emitsOptions:Dh(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=tm.bind(null,s),n.ce&&n.ce(s),s}let gt=null;const Xm=()=>gt||yt;let sc,Wi,Hc="__VUE_INSTANCE_SETTERS__";(Wi=tl()[Hc])||(Wi=tl()[Hc]=[]),Wi.push(n=>gt=n),sc=n=>{Wi.length>1?Wi.forEach(e=>e(n)):Wi[0](n)};const Mr=n=>{sc(n),n.scope.on()},Li=()=>{gt&&gt.scope.off(),sc(null)};function Kh(n){return n.vnode.shapeFlag&4}let fs=!1;function Ym(n,e=!1){fs=e;const{props:t,children:i}=n.vnode,r=Kh(n);Im(n,t,r,e),Nm(n,i);const s=r?Zm(n,e):void 0;return fs=!1,s}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Yl(new Proxy(n.ctx,Em));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Jm(n):null;Mr(n),Rr();const s=li(i,n,0,[n.props,r]);if(Dr(),Li(),sh(s)){if(s.then(Li,Li),e)return s.then(o=>{Gc(n,o,e)}).catch(o=>{Bo(o,n,0)});n.asyncDep=s}else Gc(n,s,e)}else Jh(n,e)}function Gc(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Ch(e)),Jh(n,t)}let Wc;function Jh(n,e,t){const i=n.type;if(!n.render){if(!e&&Wc&&!i.render){const r=i.template||nc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=vt(vt({isCustomElement:s,delimiters:a},o),l);i.render=Wc(r,c)}}n.render=i.render||on}Mr(n),Rr(),Tm(n),Dr(),Li()}function Km(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Bt(n,"get","$attrs"),e[t]}}))}function Jm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Km(n)},slots:n.slots,emit:n.emit,expose:e}}function Wo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ch(Yl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Kr)return Kr[t](n)},has(e,t){return t in e||t in Kr}}))}function Qm(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function eg(n){return Ne(n)&&"__vccOpts"in n}const tn=(n,e)=>Yp(n,e,fs);function Qh(n,e,t){const i=arguments.length;return i===2?tt(e)&&!Ie(e)?Eo(e)?st(n,null,[e]):st(n,e):st(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Eo(t)&&(t=[t]),st(n,e,t))}const tg=Symbol.for("v-scx"),ng=()=>Bn(tg),ig="3.3.4",rg="http://www.w3.org/2000/svg",Si=typeof document<"u"?document:null,$c=Si&&Si.createElement("template"),sg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Si.createElementNS(rg,n):Si.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$c.innerHTML=i?`<svg>${n}</svg>`:n;const a=$c.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function og(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function ag(n,e,t){const i=n.style,r=ft(t);if(t&&!r){if(e&&!ft(e))for(const s in e)t[s]==null&&hl(i,s,"");for(const s in t)hl(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const jc=/\s*!important$/;function hl(n,e,t){if(Ie(t))t.forEach(i=>hl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lg(n,e);jc.test(t)?n.setProperty(Lr(i),t.replace(jc,""),"important"):n[i]=t}}const qc=["Webkit","Moz","ms"],ca={};function lg(n,e){const t=ca[e];if(t)return t;let i=En(e);if(i!=="filter"&&i in n)return ca[e]=i;i=Fo(i);for(let r=0;r<qc.length;r++){const s=qc[r]+i;if(s in n)return ca[e]=s}return e}const Xc="http://www.w3.org/1999/xlink";function cg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Xc,e.slice(6,e.length)):n.setAttributeNS(Xc,e,t);else{const s=mp(e);t==null||s&&!lh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function ug(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=lh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function fg(n,e,t,i){n.addEventListener(e,t,i)}function hg(n,e,t,i){n.removeEventListener(e,t,i)}function dg(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=pg(e);if(i){const c=s[e]=vg(i,r);fg(n,a,c,l)}else o&&(hg(n,a,o,l),s[e]=void 0)}}const Yc=/(?:Once|Passive|Capture)$/;function pg(n){let e;if(Yc.test(n)){e={};let i;for(;i=n.match(Yc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Lr(n.slice(2)),e]}let ua=0;const mg=Promise.resolve(),gg=()=>ua||(mg.then(()=>ua=0),ua=Date.now());function vg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(_g(i,t.value),e,5,[i])};return t.value=n,t.attached=gg(),t}function _g(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Zc=/^on[a-z]/,xg=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?og(n,i,r):e==="style"?ag(n,t,i):Do(e)?Bl(e)||dg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yg(n,e,i,r))?ug(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),cg(n,e,i,r))};function yg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Zc.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Zc.test(e)&&ft(t)?!1:e in n}const bg=vt({patchProp:xg},sg);let Kc;function Mg(){return Kc||(Kc=zm(bg))}const Sg=(...n)=>{const e=Mg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=wg(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function wg(n){return ft(n)?document.querySelector(n):n}var Eg=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Tg=Symbol();var Jc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Jc||(Jc={}));function Cg(){const n=gp(!0),e=n.run(()=>Nn({}));let t=[],i=[];const r=Yl({install(s){r._a=s,s.provide(Tg,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!Eg?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ar=typeof window<"u";function Ag(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function fa(n,e){const t={};for(const i in e){const r=e[i];t[i]=cn(r)?r.map(n):n(r)}return t}const es=()=>{},cn=Array.isArray,Pg=/\/$/,Lg=n=>n.replace(Pg,"");function ha(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Og(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Rg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Dg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Sr(e.matched[i],t.matched[r])&&ed(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Sr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ed(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Ig(n[t],e[t]))return!1;return!0}function Ig(n,e){return cn(n)?eu(n,e):cn(e)?eu(e,n):n===e}function eu(n,e){return cn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Og(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var hs;(function(n){n.pop="pop",n.push="push"})(hs||(hs={}));var ts;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ts||(ts={}));function Fg(n){if(!n)if(ar){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Lg(n)}const Ng=/^[^#]+#/;function Bg(n,e){return n.replace(Ng,"#")+e}function zg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const $o=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ug(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=zg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tu(n,e){return(history.state?history.state.position-e:-1)+n}const dl=new Map;function kg(n,e){dl.set(n,e)}function Vg(n){const e=dl.get(n);return dl.delete(n),e}let Hg=()=>location.protocol+"//"+location.host;function td(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Qc(l,"")}return Qc(t,n)+i+r}function Gg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=td(n,location),g=t.value,m=e.value;let p=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}p=m?h.position-m.position:0}else i(d);r.forEach(v=>{v(t.value,g,{delta:p,type:hs.pop,direction:p?p>0?ts.forward:ts.back:ts.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:$o()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function nu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?$o():null}}function Wg(n){const{history:e,location:t}=window,i={value:td(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Hg()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=Ye({},e.state,nu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ye({},r.value,e.state,{forward:l,scroll:$o()});s(u.current,u,!0);const f=Ye({},nu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function $g(n){n=Fg(n);const e=Wg(n),t=Gg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ye({location:"",base:n,go:i,createHref:Bg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function jg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),$g(n)}function qg(n){return typeof n=="string"||n&&typeof n=="object"}function nd(n){return typeof n=="string"||typeof n=="symbol"}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},id=Symbol("");var iu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(iu||(iu={}));function wr(n,e){return Ye(new Error,{type:n,[id]:!0},e)}function Tn(n,e){return n instanceof Error&&id in n&&(e==null||!!(n.type&e))}const ru="[^/]+?",Xg={sensitive:!1,strict:!1,start:!0,end:!0},Yg=/[.+*?^${}()[\]/\\]/g;function Zg(n,e){const t=Ye({},Xg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Yg,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:m,optional:p,regexp:v}=h;s.push({name:g,repeatable:m,optional:p});const x=v||ru;if(x!==ru){d+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+E.message)}}let A=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(A=p&&c.length<2?`(?:/${A})`:"/"+A),p&&(A+="?"),r+=A,d+=20,p&&(d+=-8),m&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,v=g in c?c[g]:"";if(cn(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=cn(v)?v.join("/"):v;if(!x)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Kg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jg(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Kg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(su(i))return 1;if(su(r))return-1}return r.length-i.length}function su(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Qg={type:0,value:""},e0=/[a-zA-Z0-9_]/;function t0(n){if(!n)return[[]];if(n==="/")return[[Qg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:e0.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function n0(n,e,t){const i=Zg(t0(n.path),t),r=Ye(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function i0(n,e){const t=[],i=new Map;e=lu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const d=!h,g=r0(u);g.aliasOf=h&&h.record;const m=lu(e,u),p=[g];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)p.push(Ye({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g}))}let v,x;for(const A of p){const{path:E}=A;if(f&&E[0]!=="/"){const S=f.record.path,R=S[S.length-1]==="/"?"":"/";A.path=f.record.path+(E&&R+E)}if(v=n0(A,f,m),h?h.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),d&&u.name&&!au(v)&&o(u.name)),g.children){const S=g.children;for(let R=0;R<S.length;R++)s(S[R],v,h&&h.children[R])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return x?()=>{o(x)}:es}function o(u){if(nd(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&Jg(u,t[f])>=0&&(u.record.path!==t[f].record.path||!rd(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!au(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,m;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw wr(1,{location:u});m=h.record.name,d=Ye(ou(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&ou(u.params,h.keys.map(x=>x.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(d=h.parse(g),m=h.record.name);else{if(h=f.name?i.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw wr(1,{location:u,currentLocation:f});m=h.record.name,d=Ye({},f.params,u.params),g=h.stringify(d)}const p=[];let v=h;for(;v;)p.unshift(v.record),v=v.parent;return{name:m,path:g,params:d,matched:p,meta:o0(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ou(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function r0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:s0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function s0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function au(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function o0(n){return n.reduce((e,t)=>Ye(e,t.meta),{})}function lu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function rd(n,e){return e.children.some(t=>t===n||rd(n,t))}const sd=/#/g,a0=/&/g,l0=/\//g,c0=/=/g,u0=/\?/g,od=/\+/g,f0=/%5B/g,h0=/%5D/g,ad=/%5E/g,d0=/%60/g,ld=/%7B/g,p0=/%7C/g,cd=/%7D/g,m0=/%20/g;function oc(n){return encodeURI(""+n).replace(p0,"|").replace(f0,"[").replace(h0,"]")}function g0(n){return oc(n).replace(ld,"{").replace(cd,"}").replace(ad,"^")}function pl(n){return oc(n).replace(od,"%2B").replace(m0,"+").replace(sd,"%23").replace(a0,"%26").replace(d0,"`").replace(ld,"{").replace(cd,"}").replace(ad,"^")}function v0(n){return pl(n).replace(c0,"%3D")}function _0(n){return oc(n).replace(sd,"%23").replace(u0,"%3F")}function x0(n){return n==null?"":_0(n).replace(l0,"%2F")}function To(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function y0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(od," "),o=s.indexOf("="),a=To(o<0?s:s.slice(0,o)),l=o<0?null:To(s.slice(o+1));if(a in e){let c=e[a];cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cu(n){let e="";for(let t in n){const i=n[t];if(t=v0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(cn(i)?i.map(s=>s&&pl(s)):[i&&pl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function b0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const M0=Symbol(""),uu=Symbol(""),ac=Symbol(""),ud=Symbol(""),ml=Symbol("");function kr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ti(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(wr(4,{from:t,to:e})):f instanceof Error?a(f):qg(f)?a(wr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function da(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(S0(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ti(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Ag(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&ti(h,t,i,s,o)()}))}}return r}function S0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function fu(n){const e=Bn(ac),t=Bn(ud),i=tn(()=>e.resolve(ai(n.to))),r=tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Sr.bind(null,u));if(h>-1)return h;const d=hu(l[c-2]);return c>1&&hu(u)===d&&f[f.length-1].path!==d?f.findIndex(Sr.bind(null,l[c-2])):h}),s=tn(()=>r.value>-1&&C0(t.params,i.value.params)),o=tn(()=>r.value>-1&&r.value===t.matched.length-1&&ed(t.params,i.value.params));function a(l={}){return T0(l)?e[ai(n.replace)?"replace":"push"](ai(n.to)).catch(es):Promise.resolve()}return{route:i,href:tn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const w0=Ir({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fu,setup(n,{slots:e}){const t=Ss(fu(n)),{options:i}=Bn(ac),r=tn(()=>({[du(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[du(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),E0=w0;function T0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function C0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!cn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function hu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const du=(n,e,t)=>n??e??t,A0=Ir({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Bn(ml),r=tn(()=>n.route||i.value),s=Bn(uu,0),o=tn(()=>{let c=ai(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=tn(()=>r.value.matched[o.value]);po(uu,tn(()=>o.value+1)),po(M0,a),po(ml,r);const l=Nn();return Yr(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Sr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return pu(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Qh(h,Ye({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return pu(t.default,{Component:p,route:c})||p}}});function pu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const P0=A0;function L0(n){const e=i0(n.routes,n),t=n.parseQuery||y0,i=n.stringifyQuery||cu,r=n.history,s=kr(),o=kr(),a=kr(),l=$p(Wn);let c=Wn;ar&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fa.bind(null,V=>""+V),f=fa.bind(null,x0),h=fa.bind(null,To);function d(V,se){let J,K;return nd(V)?(J=e.getRecordMatcher(V),K=se):K=V,e.addRoute(K,J)}function g(V){const se=e.getRecordMatcher(V);se&&e.removeRoute(se)}function m(){return e.getRoutes().map(V=>V.record)}function p(V){return!!e.getRecordMatcher(V)}function v(V,se){if(se=Ye({},se||l.value),typeof V=="string"){const I=ha(t,V,se.path),H=e.resolve({path:I.path},se),Z=r.createHref(I.fullPath);return Ye(I,H,{params:h(H.params),hash:To(I.hash),redirectedFrom:void 0,href:Z})}let J;if("path"in V)J=Ye({},V,{path:ha(t,V.path,se.path).path});else{const I=Ye({},V.params);for(const H in I)I[H]==null&&delete I[H];J=Ye({},V,{params:f(I)}),se.params=f(se.params)}const K=e.resolve(J,se),Ee=V.hash||"";K.params=u(h(K.params));const w=Rg(i,Ye({},V,{hash:g0(Ee),path:K.path})),C=r.createHref(w);return Ye({fullPath:w,hash:Ee,query:i===cu?b0(V.query):V.query||{}},K,{redirectedFrom:void 0,href:C})}function x(V){return typeof V=="string"?ha(t,V,l.value.path):Ye({},V)}function A(V,se){if(c!==V)return wr(8,{from:se,to:V})}function E(V){return F(V)}function S(V){return E(Ye(x(V),{replace:!0}))}function R(V){const se=V.matched[V.matched.length-1];if(se&&se.redirect){const{redirect:J}=se;let K=typeof J=="function"?J(V):J;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=x(K):{path:K},K.params={}),Ye({query:V.query,hash:V.hash,params:"path"in K?{}:V.params},K)}}function F(V,se){const J=c=v(V),K=l.value,Ee=V.state,w=V.force,C=V.replace===!0,I=R(J);if(I)return F(Ye(x(I),{state:typeof I=="object"?Ye({},Ee,I.state):Ee,force:w,replace:C}),se||J);const H=J;H.redirectedFrom=se;let Z;return!w&&Dg(i,K,J)&&(Z=wr(16,{to:H,from:K}),he(K,K,!0,!1)),(Z?Promise.resolve(Z):B(H,K)).catch(re=>Tn(re)?Tn(re,2)?re:ee(re):W(re,H,K)).then(re=>{if(re){if(Tn(re,2))return F(Ye({replace:C},x(re.to),{state:typeof re.to=="object"?Ye({},Ee,re.to.state):Ee,force:w}),se||H)}else re=xe(H,K,!0,C,Ee);return z(H,K,re),re})}function b(V,se){const J=A(V,se);return J?Promise.reject(J):Promise.resolve()}function L(V){const se=we.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(V):V()}function B(V,se){let J;const[K,Ee,w]=R0(V,se);J=da(K.reverse(),"beforeRouteLeave",V,se);for(const I of K)I.leaveGuards.forEach(H=>{J.push(ti(H,V,se))});const C=b.bind(null,V,se);return J.push(C),X(J).then(()=>{J=[];for(const I of s.list())J.push(ti(I,V,se));return J.push(C),X(J)}).then(()=>{J=da(Ee,"beforeRouteUpdate",V,se);for(const I of Ee)I.updateGuards.forEach(H=>{J.push(ti(H,V,se))});return J.push(C),X(J)}).then(()=>{J=[];for(const I of w)if(I.beforeEnter)if(cn(I.beforeEnter))for(const H of I.beforeEnter)J.push(ti(H,V,se));else J.push(ti(I.beforeEnter,V,se));return J.push(C),X(J)}).then(()=>(V.matched.forEach(I=>I.enterCallbacks={}),J=da(w,"beforeRouteEnter",V,se),J.push(C),X(J))).then(()=>{J=[];for(const I of o.list())J.push(ti(I,V,se));return J.push(C),X(J)}).catch(I=>Tn(I,8)?I:Promise.reject(I))}function z(V,se,J){a.list().forEach(K=>L(()=>K(V,se,J)))}function xe(V,se,J,K,Ee){const w=A(V,se);if(w)return w;const C=se===Wn,I=ar?history.state:{};J&&(K||C?r.replace(V.fullPath,Ye({scroll:C&&I&&I.scroll},Ee)):r.push(V.fullPath,Ee)),l.value=V,he(V,se,J,C),ee()}let ce;function N(){ce||(ce=r.listen((V,se,J)=>{if(!Ae.listening)return;const K=v(V),Ee=R(K);if(Ee){F(Ye(Ee,{replace:!0}),K).catch(es);return}c=K;const w=l.value;ar&&kg(tu(w.fullPath,J.delta),$o()),B(K,w).catch(C=>Tn(C,12)?C:Tn(C,2)?(F(C.to,K).then(I=>{Tn(I,20)&&!J.delta&&J.type===hs.pop&&r.go(-1,!1)}).catch(es),Promise.reject()):(J.delta&&r.go(-J.delta,!1),W(C,K,w))).then(C=>{C=C||xe(K,w,!1),C&&(J.delta&&!Tn(C,8)?r.go(-J.delta,!1):J.type===hs.pop&&Tn(C,20)&&r.go(-1,!1)),z(K,w,C)}).catch(es)}))}let ie=kr(),k=kr(),$;function W(V,se,J){ee(V);const K=k.list();return K.length?K.forEach(Ee=>Ee(V,se,J)):console.error(V),Promise.reject(V)}function q(){return $&&l.value!==Wn?Promise.resolve():new Promise((V,se)=>{ie.add([V,se])})}function ee(V){return $||($=!V,N(),ie.list().forEach(([se,J])=>V?J(V):se()),ie.reset()),V}function he(V,se,J,K){const{scrollBehavior:Ee}=n;if(!ar||!Ee)return Promise.resolve();const w=!J&&Vg(tu(V.fullPath,0))||(K||!J)&&history.state&&history.state.scroll||null;return Jl().then(()=>Ee(V,se,w)).then(C=>C&&Ug(C)).catch(C=>W(C,V,se))}const le=V=>r.go(V);let de;const we=new Set,Ae={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:v,options:n,push:E,replace:S,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:q,install(V){const se=this;V.component("RouterLink",E0),V.component("RouterView",P0),V.config.globalProperties.$router=se,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ai(l)}),ar&&!de&&l.value===Wn&&(de=!0,E(r.location).catch(Ee=>{}));const J={};for(const Ee in Wn)Object.defineProperty(J,Ee,{get:()=>l.value[Ee],enumerable:!0});V.provide(ac,se),V.provide(ud,Mh(J)),V.provide(ml,l);const K=V.unmount;we.add(V),V.unmount=function(){we.delete(V),we.size<1&&(c=Wn,ce&&ce(),ce=null,l.value=Wn,de=!1,$=!1),K()}}};function X(V){return V.reduce((se,J)=>se.then(()=>L(J)),Promise.resolve())}return Ae}function R0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Sr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Sr(c,l))||r.push(l))}return[t,i,r]}function pa(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=lc(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return s=c.done,c},e:function(c){o=!0,a=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(o)throw a}}}}function D0(n){return F0(n)||O0(n)||lc(n)||I0()}function I0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O0(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function F0(n){if(Array.isArray(n))return gl(n)}function ns(n){"@babel/helpers - typeof";return ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ns(n)}function ma(n,e){return z0(n)||B0(n,e)||lc(n,e)||N0()}function N0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lc(n,e){if(n){if(typeof n=="string")return gl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gl(n,e)}}function gl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function B0(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function z0(n){if(Array.isArray(n))return n}var lt={innerWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},width:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,t){if(e){var i=e.offsetWidth;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}return 0},getOuterHeight:function(e,t){if(e){var i=e.offsetHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getClientHeight:function(e,t){if(e){var i=e.clientHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getViewport:function(){var e=window,t=document,i=t.documentElement,r=t.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,o=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:o}},getOffset:function(e){if(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var t=e.parentNode.childNodes,i=0,r=0;r<t.length;r++){if(t[r]===e)return i;t[r].nodeType===1&&i++}return-1},addMultipleClasses:function(e,t){var i=this;e&&t&&t.split(" ").forEach(function(r){return i.addClass(e,r)})},addClass:function(e,t){e&&t&&!this.hasClass(e,t)&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1},addStyles:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(t).forEach(function(i){var r=ma(i,2),s=r[0],o=r[1];return e.style[s]=o})},find:function(e,t){return this.isElement(e)?e.querySelectorAll(t):[]},findSingle:function(e,t){return this.isElement(e)?e.querySelector(t):null},createElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var i=document.createElement(e);this.setAttributes(i,t);for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return i.append.apply(i,s),i}},setAttribute:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)},setAttributes:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var r=function s(o,a){var l,c,u=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[o]?[e==null||(c=e.$attrs)===null||c===void 0?void 0:c[o]]:[];return[a].flat().reduce(function(f,h){if(h!=null){var d=ns(h);if(d==="string"||d==="number")f.push(h);else if(d==="object"){var g=Array.isArray(h)?s(o,h):Object.entries(h).map(function(m){var p=ma(m,2),v=p[0],x=p[1];return o==="style"&&(x||x===0)?"".concat(v.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(x):x?v:void 0});f=g.length?f.concat(g.filter(function(m){return!!m})):f}}return f},u)};Object.entries(i).forEach(function(s){var o=ma(s,2),a=o[0],l=o[1];if(l!=null){var c=a.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),l):a==="p-bind"?t.setAttributes(e,l):(l=a==="class"?D0(new Set(r("class",l))).join(" ").trim():a==="style"?r("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[a]=l),e.setAttribute(a,l))}})}},getAttribute:function(e,t){if(this.isElement(e)){var i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}},isAttributeEquals:function(e,t,i){return this.isElement(e)?this.getAttribute(e,t)===i:!1},isAttributeNotEquals:function(e,t,i){return!this.isAttributeEquals(e,t,i)},getHeight:function(e){if(e){var t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}return 0},getWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}return 0},absolutePosition:function(e,t){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,s=i.width,o=t.offsetHeight,a=t.offsetWidth,l=t.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),f=this.getViewport(),h,d;l.top+o+r>f.height?(h=l.top+c-r,e.style.transformOrigin="bottom",h<0&&(h=c)):(h=o+l.top+c,e.style.transformOrigin="top"),l.left+s>f.width?d=Math.max(0,l.left+u+a-s):d=l.left+u,e.style.top=h+"px",e.style.left=d+"px"}},relativePosition:function(e,t){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,s=t.getBoundingClientRect(),o=this.getViewport(),a,l;s.top+r+i.height>o.height?(a=-1*i.height,e.style.transformOrigin="bottom",s.top+a<0&&(a=-1*s.top)):(a=r,e.style.transformOrigin="top"),i.width>o.width?l=s.left*-1:s.left+i.width>o.width?l=(s.left+i.width-o.width)*-1:l=0,e.style.top=a+"px",e.style.left=l+"px"}},getParents:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))},getScrollableParents:function(e){var t=[];if(e){var i=this.getParents(e),r=/(auto|scroll)/,s=function(p){try{var v=window.getComputedStyle(p,null);return r.test(v.getPropertyValue("overflow"))||r.test(v.getPropertyValue("overflowX"))||r.test(v.getPropertyValue("overflowY"))}catch{return!1}},o=pa(i),a;try{for(o.s();!(a=o.n()).done;){var l=a.value,c=l.nodeType===1&&l.dataset.scrollselectors;if(c){var u=c.split(","),f=pa(u),h;try{for(f.s();!(h=f.n()).done;){var d=h.value,g=this.findSingle(l,d);g&&s(g)&&t.push(g)}}catch(m){f.e(m)}finally{f.f()}}l.nodeType!==9&&s(l)&&t.push(l)}}catch(m){o.e(m)}finally{o.f()}}return t},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementDimensions:function(e){if(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}return 0},fadeIn:function(e,t){if(e){e.style.opacity=0;var i=+new Date,r=0,s=function o(){r=+e.style.opacity+(new Date().getTime()-i)/t,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};s()}},fadeOut:function(e,t){if(e)var i=1,r=50,s=t,o=r/s,a=setInterval(function(){i-=o,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},r)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.elElement)t.elElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":ns(HTMLElement))==="object"?e instanceof HTMLElement:e&&ns(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,t){var i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,a=e.getBoundingClientRect(),l=t.getBoundingClientRect(),c=l.top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-o,u=e.scrollTop,f=e.clientHeight,h=this.getOuterHeight(t);c<0?e.scrollTop=u+c:c+h>f&&(e.scrollTop=u+c-f+h)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,t,i){e[t].apply(e,i)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,t){e&&document.activeElement!==e&&e.focus(t)},isFocusableElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
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
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)),r=[],s=pa(i),o;try{for(s.s();!(o=s.n()).done;){var a=o.value;getComputedStyle(a).display!="none"&&getComputedStyle(a).visibility!="hidden"&&r.push(a)}}catch(l){s.e(l)}finally{s.f()}return r},getFirstFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[0]:null},getLastFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null},getNextFocusableElement:function(e,t,i){var r=this.getFocusableElements(e,i),s=r.length>0?r.findIndex(function(a){return a===t}):-1,o=s>-1&&r.length>=s+1?s+1:-1;return o>-1?r[o]:null},isClickable:function(e){if(e){var t=e.nodeName,i=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,t){if(typeof t=="string")e.style.cssText=t;else for(var i in t)e.style[i]=t[i]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("animation-duration")||"0");return i>0}return!1},hasCSSTransition:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0}return!1},exportCSV:function(e,t){var i=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(i,t+".csv");else{var r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(i)),r.setAttribute("download",t+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}};function U0(n,e){return H0(n)||V0(n,e)||cc(n,e)||k0()}function k0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V0(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function H0(n){if(Array.isArray(n))return n}function mu(n){return $0(n)||W0(n)||cc(n)||G0()}function G0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W0(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $0(n){if(Array.isArray(n))return vl(n)}function ga(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=cc(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return s=c.done,c},e:function(c){o=!0,a=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(o)throw a}}}}function cc(n,e){if(n){if(typeof n=="string")return vl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vl(n,e)}}function vl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function is(n){"@babel/helpers - typeof";return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},is(n)}var Ue={equals:function(e,t,i){return i?this.resolveFieldData(e,i)===this.resolveFieldData(t,i):this.deepEquals(e,t)},deepEquals:function(e,t){if(e===t)return!0;if(e&&t&&is(e)=="object"&&is(t)=="object"){var i=Array.isArray(e),r=Array.isArray(t),s,o,a;if(i&&r){if(o=e.length,o!=t.length)return!1;for(s=o;s--!==0;)if(!this.deepEquals(e[s],t[s]))return!1;return!0}if(i!=r)return!1;var l=e instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==t.getTime();var u=e instanceof RegExp,f=t instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==t.toString();var h=Object.keys(e);if(o=h.length,o!==Object.keys(t).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,h[s]))return!1;for(s=o;s--!==0;)if(a=h[s],!this.deepEquals(e[a],t[a]))return!1;return!0}return e!==e&&t!==t},resolveFieldData:function(e,t){if(!e||!t)return null;try{var i=e[t];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(t.indexOf(".")===-1)return e[t];for(var r=t.split("."),s=e,o=0,a=r.length;o<a;++o){if(s==null)return null;s=s[r[o]]}return s}return null},getItemValue:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,i):e},filter:function(e,t,i){var r=[];if(e){var s=ga(e),o;try{for(s.s();!(o=s.n()).done;){var a=o.value,l=ga(t),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(String(this.resolveFieldData(a,u)).toLowerCase().indexOf(i.toLowerCase())>-1){r.push(a);break}}}catch(f){l.e(f)}finally{l.f()}}}catch(f){s.e(f)}finally{s.f()}}return r},reorderArray:function(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))},findIndexInList:function(e,t){var i=-1;if(t){for(var r=0;r<t.length;r++)if(t[r]===e){i=r;break}}return i},contains:function(e,t){if(e!=null&&t&&t.length){var i=ga(t),r;try{for(i.s();!(r=i.n()).done;){var s=r.value;if(this.equals(e,s))return!0}}catch(o){i.e(o)}finally{i.f()}}return!1},insertIntoOrderedArray:function(e,t,i,r){if(i.length>0){for(var s=!1,o=0;o<i.length;o++){var a=this.findIndexInList(i[o],r);if(a>t){i.splice(o,0,e),s=!0;break}}s||i.push(e)}else i.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,t){var i=e.props;if(i){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(i,r)?r:t;return e.type.extends.props[t].type===Boolean&&i[s]===""?!0:i[s]}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(t,i){return i===0?t:"-"+t.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&is(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(t||e.length!==0)},isString:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(t||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,t){var i;if(this.isNotEmpty(e))try{i=e.findLast(t)}catch{i=mu(e).reverse().find(t)}return i},findLastIndex:function(e,t){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(t)}catch{i=e.lastIndexOf(mu(e).reverse().find(t))}return i},nestedKeys:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(t).reduce(function(r,s){var o=U0(s,2),a=o[0],l=o[1],c=i?"".concat(i,".").concat(a):a;return e.isObject(l)?r=r.concat(e.nestedKeys(l,c)):r.push(c),r},[])}},gu=0;function j0(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return gu++,"".concat(n).concat(gu)}var Mt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function ds(n){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ds(n)}function vu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function va(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?vu(Object(t),!0).forEach(function(i){q0(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):vu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function q0(n,e,t){return e=X0(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function X0(n){var e=Y0(n,"string");return ds(e)==="symbol"?e:String(e)}function Y0(n,e){if(ds(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(ds(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var _u={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[Mt.STARTS_WITH,Mt.CONTAINS,Mt.NOT_CONTAINS,Mt.ENDS_WITH,Mt.EQUALS,Mt.NOT_EQUALS],numeric:[Mt.EQUALS,Mt.NOT_EQUALS,Mt.LESS_THAN,Mt.LESS_THAN_OR_EQUAL_TO,Mt.GREATER_THAN,Mt.GREATER_THAN_OR_EQUAL_TO],date:[Mt.DATE_IS,Mt.DATE_IS_NOT,Mt.DATE_BEFORE,Mt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,unstyled:!1,csp:{nonce:void 0}},Z0=Symbol();function K0(n,e,t,i){var r=document.getElementById(t),s=r.cloneNode(!0),o=r.getAttribute("href").replace(n,e);s.setAttribute("id",t+"-clone"),s.setAttribute("href",o),s.addEventListener("load",function(){r.remove(),s.setAttribute("id",t),i&&i()}),r.parentNode&&r.parentNode.insertBefore(s,r.nextSibling)}var J0={install:function(e,t){var i=t?va(va({},_u),t):va({},_u),r={config:Ss(i),changeTheme:K0};e.config.globalProperties.$primevue=r,e.provide(Z0,r)}};const jo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Q0={};function ev(n,e){const t=Oi("router-view");return Ke(),Wt(t)}const tv=jo(Q0,[["render",ev]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="141",$i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nv=0,xu=1,iv=2,fd=1,rv=2,qr=3,ps=0,ln=1,Er=2,sv=1,ci=0,vr=1,yu=2,bu=3,Mu=4,ov=5,lr=100,av=101,lv=102,Su=103,wu=104,cv=200,uv=201,fv=202,hv=203,hd=204,dd=205,dv=206,pv=207,mv=208,gv=209,vv=210,_v=0,xv=1,yv=2,_l=3,bv=4,Mv=5,Sv=6,wv=7,qo=0,Ev=1,Tv=2,zn=0,Cv=1,Av=2,Pv=3,Lv=4,Rv=5,pd=300,Tr=301,Cr=302,xl=303,yl=304,Xo=306,bl=1e3,nn=1001,Ml=1002,Ft=1003,Eu=1004,Tu=1005,$t=1006,Dv=1007,Yo=1008,Fi=1009,Iv=1010,Ov=1011,md=1012,Fv=1013,Ti=1014,Ci=1015,ms=1016,Nv=1017,Bv=1018,_r=1020,zv=1021,Uv=1022,sn=1023,kv=1024,Vv=1025,Ri=1026,Ar=1027,Hv=1028,Gv=1029,Wv=1030,$v=1031,jv=1033,_a=33776,xa=33777,ya=33778,ba=33779,Cu=35840,Au=35841,Pu=35842,Lu=35843,qv=36196,Ru=37492,Du=37496,Iu=37808,Ou=37809,Fu=37810,Nu=37811,Bu=37812,zu=37813,Uu=37814,ku=37815,Vu=37816,Hu=37817,Gu=37818,Wu=37819,$u=37820,ju=37821,qu=36492,Ni=3e3,it=3001,Xv=3200,Yv=3201,Or=0,Zv=1,On="srgb",Ai="srgb-linear",Ma=7680,Kv=519,Xu=35044,Yu="300 es",Sl=1035;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _t=[];for(let n=0;n<256;n++)_t[n]=(n<16?"0":"")+n.toString(16);const go=Math.PI/180,wl=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Jv(n,e){return(n%e+e)%e}function Sa(n,e,t){return(1-t)*n+t*e}function Zu(n){return(n&n-1)===0&&n!==0}function El(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Le{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],m=r[0],p=r[3],v=r[6],x=r[1],A=r[4],E=r[7],S=r[2],R=r[5],F=r[8];return s[0]=o*m+a*x+l*S,s[3]=o*p+a*A+l*R,s[6]=o*v+a*E+l*F,s[1]=c*m+u*x+f*S,s[4]=c*p+u*A+f*R,s[7]=c*v+u*E+f*F,s[2]=h*m+d*x+g*S,s[5]=h*p+d*A+g*R,s[8]=h*v+d*E+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wa={[On]:{[Ai]:Di},[Ai]:{[On]:vo}},qt={legacyMode:!0,get workingColorSpace(){return Ai},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(wa[e]&&wa[e][t]!==void 0){const i=wa[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},Xt={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Us(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ai){return this.r=e,this.g=t,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ai){if(e=Jv(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ea(o,s,e+1/3),this.g=Ea(o,s,e),this.b=Ea(o,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=On){const i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return qt.fromWorkingColorSpace(Us(this,ht),e),Lt(ht.r*255,0,255)<<16^Lt(ht.g*255,0,255)<<8^Lt(ht.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ai){qt.fromWorkingColorSpace(Us(this,ht),t);const i=ht.r,r=ht.g,s=ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ai){return qt.fromWorkingColorSpace(Us(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=On){return qt.fromWorkingColorSpace(Us(this,ht),e),e!==On?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=i,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(zs);const i=Sa(Xt.h,zs.h,t),r=Sa(Xt.s,zs.s,t),s=Sa(Xt.l,zs.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=vd;let qi;class _d{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=Co("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xd{constructor(e=null){this.isSource=!0,this.uuid=Es(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ta(r[o].image)):s.push(Ta(r[o]))}else s=Ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_d.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class un extends zi{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=nn,r=nn,s=$t,o=Yo,a=sn,l=Fi,c=1,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Es(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Sn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=pd;class bt{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(d+1)/2,S=(v+1)/2,R=(u+h)/4,F=(f+m)/4,b=(g+p)/4;return A>E&&A>S?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=F/i):E>S?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=b/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=F/s,r=b/s),this.set(i,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-m)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends zi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$t,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yd extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e_ extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==d||u!==g){let p=1-a;const v=l*h+c*d+u*g+f*m,x=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const S=Math.sqrt(A),R=Math.atan2(S,v*x);p=Math.sin(p*R)/S,a=Math.sin(a*R)/S}const E=a*x;if(l=l*p+h*E,c=c*p+d*E,u=u*p+g*E,f=f*p+m*E,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new D,Ku=new Bi;class Fr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)vi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox),Aa.applyMatrix4(e.matrixWorld),this.union(Aa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),ks.subVectors(this.max,Vr),Xi.subVectors(e.a,Vr),Yi.subVectors(e.b,Vr),Zi.subVectors(e.c,Vr),$n.subVectors(Yi,Xi),jn.subVectors(Zi,Yi),_i.subVectors(Xi,Zi);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-_i.z,_i.y,$n.z,0,-$n.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!Pa(t,Xi,Yi,Zi,ks)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,Xi,Yi,Zi,ks))?!1:(Vs.crossVectors($n,jn),t=[Vs.x,Vs.y,Vs.z],Pa(t,Xi,Yi,Zi,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new D,new D,new D,new D,new D,new D,new D,new D],vi=new D,Aa=new Fr,Xi=new D,Yi=new D,Zi=new D,$n=new D,jn=new D,_i=new D,Vr=new D,ks=new D,Vs=new D,xi=new D;function Pa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const t_=new Fr,Ju=new D,Hs=new D,La=new D;class Ts{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):t_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(La.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Hs.set(0,0,1).multiplyScalar(e.radius):Hs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ju.copy(e.center).add(Hs)),this.expandByPoint(Ju.copy(e.center).sub(Hs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new D,Ra=new D,Gs=new D,qn=new D,Da=new D,Ws=new D,Ia=new D;class Zo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.direction).multiplyScalar(t).add(this.origin),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ra.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=qn.dot(this.direction),l=-qn.dot(Gs),c=qn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Gs).multiplyScalar(h).add(Ra),d}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){Da.subVectors(t,e),Ws.subVectors(i,e),Ia.crossVectors(Da,Ws);let o=this.direction.dot(Ia),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ws.crossVectors(qn,Ws));if(l<0)return null;const c=a*this.direction.dot(Da.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(Ia);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,i_)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Xn.crossVectors(i,Ut),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Xn.crossVectors(i,Ut)),Xn.normalize(),$s.crossVectors(Ut,Xn),r[0]=Xn.x,r[4]=$s.x,r[8]=Ut.x,r[1]=Xn.y,r[5]=$s.y,r[9]=Ut.y,r[2]=Xn.z,r[6]=$s.z,r[10]=Ut.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],m=i[6],p=i[10],v=i[14],x=i[3],A=i[7],E=i[11],S=i[15],R=r[0],F=r[4],b=r[8],L=r[12],B=r[1],z=r[5],xe=r[9],ce=r[13],N=r[2],ie=r[6],k=r[10],$=r[14],W=r[3],q=r[7],ee=r[11],he=r[15];return s[0]=o*R+a*B+l*N+c*W,s[4]=o*F+a*z+l*ie+c*q,s[8]=o*b+a*xe+l*k+c*ee,s[12]=o*L+a*ce+l*$+c*he,s[1]=u*R+f*B+h*N+d*W,s[5]=u*F+f*z+h*ie+d*q,s[9]=u*b+f*xe+h*k+d*ee,s[13]=u*L+f*ce+h*$+d*he,s[2]=g*R+m*B+p*N+v*W,s[6]=g*F+m*z+p*ie+v*q,s[10]=g*b+m*xe+p*k+v*ee,s[14]=g*L+m*ce+p*$+v*he,s[3]=x*R+A*B+E*N+S*W,s[7]=x*F+A*z+E*ie+S*q,s[11]=x*b+A*xe+E*k+S*ee,s[15]=x*L+A*ce+E*$+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+m*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+v*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],x=f*p*c-m*h*c+m*l*d-a*p*d-f*l*v+a*h*v,A=g*h*c-u*p*c-g*l*d+o*p*d+u*l*v-o*h*v,E=u*m*c-g*f*c+g*a*d-o*m*d-u*a*v+o*f*v,S=g*f*l-u*m*l-g*a*h+o*m*h+u*a*p-o*f*p,R=t*x+i*A+r*E+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return e[0]=x*F,e[1]=(m*h*s-f*p*s-m*r*d+i*p*d+f*r*v-i*h*v)*F,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*v+i*l*v)*F,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*F,e[4]=A*F,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*v+t*h*v)*F,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*v-t*l*v)*F,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*F,e[8]=E*F,e[9]=(g*f*s-u*m*s-g*i*d+t*m*d+u*i*v-t*f*v)*F,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*v+t*a*v)*F,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*F,e[12]=S*F,e[13]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*p+t*f*p)*F,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*p-t*a*p)*F,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,m=o*u,p=o*f,v=a*f,x=l*c,A=l*u,E=l*f,S=i.x,R=i.y,F=i.z;return r[0]=(1-(m+v))*S,r[1]=(d+E)*S,r[2]=(g-A)*S,r[3]=0,r[4]=(d-E)*R,r[5]=(1-(h+v))*R,r[6]=(p+x)*R,r[7]=0,r[8]=(g+A)*F,r[9]=(p-x)*F,r[10]=(1-(h+m))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),a=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/s,u=1/o,f=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new D,Yt=new ut,n_=new D(0,0,0),i_=new D(1,1,1),Xn=new D,$s=new D,Ut=new D,Qu=new ut,ef=new Bi;class Cs{constructor(e=0,t=0,i=0,r=Cs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Cs.DefaultOrder="XYZ";Cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r_=0;const tf=new D,Ji=new Bi,Pn=new ut,js=new D,Hr=new D,s_=new D,o_=new Bi,nf=new D(1,0,0),rf=new D(0,1,0),sf=new D(0,0,1),a_={type:"added"},of={type:"removed"};class Tt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new D,t=new Cs,i=new Bi,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Sn}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?js.copy(e):js.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Hr,js,this.up):Pn.lookAt(js,Hr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(a_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(of)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,s_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new D(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;const Zt=new D,Ln=new D,Oa=new D,Rn=new D,Qi=new D,er=new D,af=new D,Fa=new D,Na=new D,Ba=new D;class Mn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),Ln.subVectors(i,t),Oa.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(Ln),l=Zt.dot(Oa),c=Ln.dot(Ln),u=Ln.dot(Oa),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rn),l.set(0,0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),Ln.subVectors(e,t),Zt.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),Zt.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Mn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qi.subVectors(r,i),er.subVectors(s,i),Fa.subVectors(e,i);const l=Qi.dot(Fa),c=er.dot(Fa);if(l<=0&&c<=0)return t.copy(i);Na.subVectors(e,r);const u=Qi.dot(Na),f=er.dot(Na);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qi,o);Ba.subVectors(e,s);const d=Qi.dot(Ba),g=er.dot(Ba);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(er,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return af.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(af,a);const v=1/(p+m+h);return o=m*v,a=h*v,t.copy(i).addScaledVector(Qi,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let l_=0;class pt extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=vr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===sv;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}pt.fromType=function(){return null};class Ko extends pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new D,qs=new Le;class wn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Xu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Re),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Le),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new bt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class bd extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Md extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let c_=0;const Ht=new ut,za=new Tt,tr=new D,kt=new Fr,Gr=new Fr,mt=new D;class zt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Md:bd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Sn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(kt.min,Gr.min),kt.expandByPoint(mt),mt.addVectors(kt.max,Gr.max),kt.expandByPoint(mt)):(kt.expandByPoint(Gr.min),kt.expandByPoint(Gr.max))}kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),mt.add(tr)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let B=0;B<a;B++)c[B]=new D,u[B]=new D;const f=new D,h=new D,d=new D,g=new Le,m=new Le,p=new Le,v=new D,x=new D;function A(B,z,xe){f.fromArray(r,B*3),h.fromArray(r,z*3),d.fromArray(r,xe*3),g.fromArray(o,B*2),m.fromArray(o,z*2),p.fromArray(o,xe*2),h.sub(f),d.sub(f),m.sub(g),p.sub(g);const ce=1/(m.x*p.y-p.x*m.y);isFinite(ce)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(ce),x.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(ce),c[B].add(v),c[z].add(v),c[xe].add(v),u[B].add(x),u[z].add(x),u[xe].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let B=0,z=E.length;B<z;++B){const xe=E[B],ce=xe.start,N=xe.count;for(let ie=ce,k=ce+N;ie<k;ie+=3)A(i[ie+0],i[ie+1],i[ie+2])}const S=new D,R=new D,F=new D,b=new D;function L(B){F.fromArray(s,B*3),b.copy(F);const z=c[B];S.copy(z),S.sub(F.multiplyScalar(F.dot(z))).normalize(),R.crossVectors(b,z);const ce=R.dot(u[B])<0?-1:1;l[B*4]=S.x,l[B*4+1]=S.y,l[B*4+2]=S.z,l[B*4+3]=ce}for(let B=0,z=E.length;B<z;++B){const xe=E[B],ce=xe.start,N=xe.count;for(let ie=ce,k=ce+N;ie<k;ie+=3)L(i[ie+0]),L(i[ie+1]),L(i[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let v=0;v<u;v++)h[g++]=c[d++]}return new wn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new ut,nr=new Zo,Ua=new Ts,Yn=new D,Zn=new D,Kn=new D,ka=new D,Va=new D,Ha=new D,Xs=new D,Ys=new D,Zs=new D,Ks=new Le,Js=new Le,Qs=new Le,Ga=new D,eo=new D;class jt extends Tt{constructor(e=new zt,t=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),e.ray.intersectsSphere(Ua)===!1)||(lf.copy(s).invert(),nr.copy(e.ray).applyMatrix4(lf),i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,d=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],x=r[v.materialIndex],A=Math.max(v.start,g.start),E=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let S=A,R=E;S<R;S+=3){const F=a.getX(S),b=a.getX(S+1),L=a.getX(S+2);o=to(this,x,e,nr,l,c,u,f,h,F,b,L),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const A=a.getX(v),E=a.getX(v+1),S=a.getX(v+2);o=to(this,r,e,nr,l,c,u,f,h,A,E,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],x=r[v.materialIndex],A=Math.max(v.start,g.start),E=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let S=A,R=E;S<R;S+=3){const F=S,b=S+1,L=S+2;o=to(this,x,e,nr,l,c,u,f,h,F,b,L),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const A=v,E=v+1,S=v+2;o=to(this,r,e,nr,l,c,u,f,h,A,E,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function u_(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Er,a),l===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,r,s,o,a,l,c,u,f){Yn.fromBufferAttribute(r,c),Zn.fromBufferAttribute(r,u),Kn.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Xs.set(0,0,0),Ys.set(0,0,0),Zs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=h[g],v=s[g];p!==0&&(ka.fromBufferAttribute(v,c),Va.fromBufferAttribute(v,u),Ha.fromBufferAttribute(v,f),o?(Xs.addScaledVector(ka,p),Ys.addScaledVector(Va,p),Zs.addScaledVector(Ha,p)):(Xs.addScaledVector(ka.sub(Yn),p),Ys.addScaledVector(Va.sub(Zn),p),Zs.addScaledVector(Ha.sub(Kn),p)))}Yn.add(Xs),Zn.add(Ys),Kn.add(Zs)}n.isSkinnedMesh&&(n.boneTransform(c,Yn),n.boneTransform(u,Zn),n.boneTransform(f,Kn));const d=u_(n,e,t,i,Yn,Zn,Kn,Ga);if(d){a&&(Ks.fromBufferAttribute(a,c),Js.fromBufferAttribute(a,u),Qs.fromBufferAttribute(a,f),d.uv=Mn.getUV(Ga,Yn,Zn,Kn,Ks,Js,Qs,new Le)),l&&(Ks.fromBufferAttribute(l,c),Js.fromBufferAttribute(l,u),Qs.fromBufferAttribute(l,f),d.uv2=Mn.getUV(Ga,Yn,Zn,Kn,Ks,Js,Qs,new Le));const g={a:c,b:u,c:f,normal:new D,materialIndex:0};Mn.getNormal(Yn,Zn,Kn,g.normal),d.face=g}return d}class Ui extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(f,2));function g(m,p,v,x,A,E,S,R,F,b,L){const B=E/F,z=S/b,xe=E/2,ce=S/2,N=R/2,ie=F+1,k=b+1;let $=0,W=0;const q=new D;for(let ee=0;ee<k;ee++){const he=ee*z-ce;for(let le=0;le<ie;le++){const de=le*B-xe;q[m]=de*x,q[p]=he*A,q[v]=N,c.push(q.x,q.y,q.z),q[m]=0,q[p]=0,q[v]=R>0?1:-1,u.push(q.x,q.y,q.z),f.push(le/F),f.push(1-ee/b),$+=1}}for(let ee=0;ee<b;ee++)for(let he=0;he<F;he++){const le=h+he+ie*ee,de=h+he+ie*(ee+1),we=h+(he+1)+ie*(ee+1),Ae=h+(he+1)+ie*ee;l.push(le,de,Ae),l.push(de,we,Ae),W+=6}a.addGroup(d,W,L),d+=W,h+=$}}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}const f_={clone:Pr,merge:St};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=h_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=90,rr=1;class p_ extends Tt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Nt(ir,rr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Nt(ir,rr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Nt(ir,rr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Nt(ir,rr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Nt(ir,rr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Nt(ir,rr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class wd extends un{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m_ extends ui{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ci});s.uniforms.tEquirect.value=t;const o=new jt(r,s),a=t.minFilter;return t.minFilter===Yo&&(t.minFilter=$t),new p_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wa=new D,g_=new D,v_=new Sn;class yi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wa.subVectors(i,t).cross(g_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v_.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Ts,no=new D;class hc{constructor(e=new yi,t=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],d=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],A=i[15];return t[0].setComponents(a-r,f-l,m-h,A-p).normalize(),t[1].setComponents(a+r,f+l,m+h,A+p).normalize(),t[2].setComponents(a+s,f+c,m+d,A+v).normalize(),t[3].setComponents(a-s,f-c,m-d,A-v).normalize(),t[4].setComponents(a-o,f-u,m-g,A-x).normalize(),t[5].setComponents(a+o,f+u,m+g,A+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(no.x=r.normal.x>0?e.max.x:e.min.x,no.y=r.normal.y>0?e.max.y:e.min.y,no.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ed(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function __(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Jo extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const x=v*h-o;for(let A=0;A<c;A++){const E=A*f-s;g.push(E,-x,0),m.push(0,0,1),p.push(A/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const A=x+c*v,E=x+c*(v+1),S=x+1+c*(v+1),R=x+1+c*v;d.push(A,E,R),d.push(E,S,R)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(p,2))}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_="vec3 transformed = vec3( position );",T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,A_=`#ifdef USE_IRIDESCENCE
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
#endif`,P_=`#ifdef USE_BUMPMAP
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,z_=`#define PI 3.141592653589793
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
}`,U_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k_=`vec3 transformedNormal = objectNormal;
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
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`vec3 diffuse = vec3( 1.0 );
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
#endif`,ox=`uniform bool receiveShadow;
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
#endif`,ax=`#if defined( USE_ENVMAP )
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,hx=`PhysicalMaterial material;
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
#endif`,dx=`struct PhysicalMaterial {
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Dx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#ifdef USE_SHADOWMAP
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
#endif`,Zx=`#ifdef USE_SHADOWMAP
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
#endif`,Kx=`#ifdef USE_SHADOWMAP
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
#endif`,Jx=`float getShadowMask() {
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,py=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vy=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#include <envmap_common_pars_fragment>
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
}`,yy=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,My=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ty=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#define LAMBERT
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Dy=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,By=`#define PHONG
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
}`,zy=`#define STANDARD
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
}`,Uy=`#define STANDARD
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
}`,ky=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,$y=`uniform vec3 color;
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
}`,jy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:x_,alphamap_pars_fragment:y_,alphatest_fragment:b_,alphatest_pars_fragment:M_,aomap_fragment:S_,aomap_pars_fragment:w_,begin_vertex:E_,beginnormal_vertex:T_,bsdfs:C_,iridescence_fragment:A_,bumpmap_pars_fragment:P_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:I_,color_fragment:O_,color_pars_fragment:F_,color_pars_vertex:N_,color_vertex:B_,common:z_,cube_uv_reflection_fragment:U_,defaultnormal_vertex:k_,displacementmap_pars_vertex:V_,displacementmap_vertex:H_,emissivemap_fragment:G_,emissivemap_pars_fragment:W_,encodings_fragment:$_,encodings_pars_fragment:j_,envmap_fragment:q_,envmap_common_pars_fragment:X_,envmap_pars_fragment:Y_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:ax,envmap_vertex:K_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:ex,fog_pars_fragment:tx,gradientmap_pars_fragment:nx,lightmap_fragment:ix,lightmap_pars_fragment:rx,lights_lambert_vertex:sx,lights_pars_begin:ox,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:ux,lights_phong_pars_fragment:fx,lights_physical_fragment:hx,lights_physical_pars_fragment:dx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:yx,map_fragment:bx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Tx,morphcolor_vertex:Cx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Px,morphtarget_vertex:Lx,normal_fragment_begin:Rx,normal_fragment_maps:Dx,normal_pars_fragment:Ix,normal_pars_vertex:Ox,normal_vertex:Fx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:kx,output_fragment:Vx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Wx,dithering_fragment:$x,dithering_pars_fragment:jx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:Zx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:ry,tonemapping_fragment:sy,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:fy,uv2_pars_fragment:hy,uv2_pars_vertex:dy,uv2_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:vy,cube_vert:_y,cube_frag:xy,depth_vert:yy,depth_frag:by,distanceRGBA_vert:My,distanceRGBA_frag:Sy,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:Ty,linedashed_frag:Cy,meshbasic_vert:Ay,meshbasic_frag:Py,meshlambert_vert:Ly,meshlambert_frag:Ry,meshmatcap_vert:Dy,meshmatcap_frag:Iy,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:Ny,meshphong_frag:By,meshphysical_vert:zy,meshphysical_frag:Uy,meshtoon_vert:ky,meshtoon_frag:Vy,points_vert:Hy,points_frag:Gy,shadow_vert:Wy,shadow_frag:$y,sprite_vert:jy,sprite_frag:qy},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Sn},uv2Transform:{value:new Sn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Sn}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Sn}}},yn={basic:{uniforms:St([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:St([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:St([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:St([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:St([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:St([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:St([Se.points,Se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:St([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:St([Se.common,Se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:St([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:St([Se.sprite,Se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Sn},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:St([Se.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:St([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:St([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};yn.physical={uniforms:St([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function Xy(n,e,t,i,r,s){const o=new Re(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=e.get(x));const A=n.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Xo)?(c===void 0&&(c=new jt(new Ui(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Pr(yn.cube.uniforms),vertexShader:yn.cube.vertexShader,fragmentShader:yn.cube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new jt(new Jo(2,2),new kn({name:"BackgroundMaterial",uniforms:Pr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function Yy(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(N,ie,k,$,W){let q=!1;if(o){const ee=m($,k,ie);c!==ee&&(c=ee,d(c.object)),q=v(N,$,k,W),q&&x(N,$,k,W)}else{const ee=ie.wireframe===!0;(c.geometry!==$.id||c.program!==k.id||c.wireframe!==ee)&&(c.geometry=$.id,c.program=k.id,c.wireframe=ee,q=!0)}W!==null&&t.update(W,34963),(q||u)&&(u=!1,b(N,ie,k,$),W!==null&&n.bindBuffer(34963,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,ie,k){const $=k.wireframe===!0;let W=a[N.id];W===void 0&&(W={},a[N.id]=W);let q=W[ie.id];q===void 0&&(q={},W[ie.id]=q);let ee=q[$];return ee===void 0&&(ee=p(h()),q[$]=ee),ee}function p(N){const ie=[],k=[],$=[];for(let W=0;W<r;W++)ie[W]=0,k[W]=0,$[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:k,attributeDivisors:$,object:N,attributes:{},index:null}}function v(N,ie,k,$){const W=c.attributes,q=ie.attributes;let ee=0;const he=k.getAttributes();for(const le in he)if(he[le].location>=0){const we=W[le];let Ae=q[le];if(Ae===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),we===void 0||we.attribute!==Ae||Ae&&we.data!==Ae.data)return!0;ee++}return c.attributesNum!==ee||c.index!==$}function x(N,ie,k,$){const W={},q=ie.attributes;let ee=0;const he=k.getAttributes();for(const le in he)if(he[le].location>=0){let we=q[le];we===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(we=N.instanceColor));const Ae={};Ae.attribute=we,we&&we.data&&(Ae.data=we.data),W[le]=Ae,ee++}c.attributes=W,c.attributesNum=ee,c.index=$}function A(){const N=c.newAttributes;for(let ie=0,k=N.length;ie<k;ie++)N[ie]=0}function E(N){S(N,0)}function S(N,ie){const k=c.newAttributes,$=c.enabledAttributes,W=c.attributeDivisors;k[N]=1,$[N]===0&&(n.enableVertexAttribArray(N),$[N]=1),W[N]!==ie&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,ie),W[N]=ie)}function R(){const N=c.newAttributes,ie=c.enabledAttributes;for(let k=0,$=ie.length;k<$;k++)ie[k]!==N[k]&&(n.disableVertexAttribArray(k),ie[k]=0)}function F(N,ie,k,$,W,q){i.isWebGL2===!0&&(k===5124||k===5125)?n.vertexAttribIPointer(N,ie,k,W,q):n.vertexAttribPointer(N,ie,k,$,W,q)}function b(N,ie,k,$){if(i.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=$.attributes,q=k.getAttributes(),ee=ie.defaultAttributeValues;for(const he in q){const le=q[he];if(le.location>=0){let de=W[he];if(de===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),de!==void 0){const we=de.normalized,Ae=de.itemSize,X=t.get(de);if(X===void 0)continue;const V=X.buffer,se=X.type,J=X.bytesPerElement;if(de.isInterleavedBufferAttribute){const K=de.data,Ee=K.stride,w=de.offset;if(K.isInstancedInterleavedBuffer){for(let C=0;C<le.locationSize;C++)S(le.location+C,K.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let C=0;C<le.locationSize;C++)E(le.location+C);n.bindBuffer(34962,V);for(let C=0;C<le.locationSize;C++)F(le.location+C,Ae/le.locationSize,se,we,Ee*J,(w+Ae/le.locationSize*C)*J)}else{if(de.isInstancedBufferAttribute){for(let K=0;K<le.locationSize;K++)S(le.location+K,de.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<le.locationSize;K++)E(le.location+K);n.bindBuffer(34962,V);for(let K=0;K<le.locationSize;K++)F(le.location+K,Ae/le.locationSize,se,we,Ae*J,Ae/le.locationSize*K*J)}}else if(ee!==void 0){const we=ee[he];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(le.location,we);break;case 3:n.vertexAttrib3fv(le.location,we);break;case 4:n.vertexAttrib4fv(le.location,we);break;default:n.vertexAttrib1fv(le.location,we)}}}}R()}function L(){xe();for(const N in a){const ie=a[N];for(const k in ie){const $=ie[k];for(const W in $)g($[W].object),delete $[W];delete ie[k]}delete a[N]}}function B(N){if(a[N.id]===void 0)return;const ie=a[N.id];for(const k in ie){const $=ie[k];for(const W in $)g($[W].object),delete $[W];delete ie[k]}delete a[N.id]}function z(N){for(const ie in a){const k=a[ie];if(k[N.id]===void 0)continue;const $=k[N.id];for(const W in $)g($[W].object),delete $[W];delete k[N.id]}}function xe(){ce(),u=!0,c!==l&&(c=l,d(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:xe,resetDefaultState:ce,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:E,disableUnusedAttributes:R}}function Zy(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Ky(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),x=n.getParameter(36349),A=h>0,E=o||e.has("OES_texture_float"),S=A&&E,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:R}}function Jy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new yi,a=new Sn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,d,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,v=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:i,A=x*4;let E=v.clippingState||null;l.value=E,E=u(g,h,A,d);for(let S=0;S!==A;++S)E[S]=t[S];v.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<v)&&(p=new Float32Array(v));for(let A=0,E=d;A!==m;++A,E+=4)o.copy(f[A]).applyMatrix4(x,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Qy(n){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=Tr:a===yl&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xl||a===yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new m_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class eb extends Sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,cf=[.125,.215,.35,.446,.526,.582],wi=20,$a=new eb,uf=new Re;let ja=null;const bi=(1+Math.sqrt(5))/2,or=1/bi,ff=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,bi,or),new D(0,bi,-or),new D(or,0,bi),new D(-or,0,bi),new D(bi,or,0),new D(-bi,or,0)];class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ja=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ms,format:sn,encoding:Ni,depthBuffer:!1},r=df(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(s)),this._blurMaterial=nb(s,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,r){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(uf),u.toneMapping=zn,u.autoClear=!1;const d=new Ko({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new jt(new Ui,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(uf),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const A=this._cubeSize;io(r,x*A,v>2?A:0,A,A),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Tr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ff[(r-1)%ff.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new jt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const v=[];let x=0;for(let F=0;F<wi;++F){const b=F/m,L=Math.exp(-b*b/2);v.push(L),F===0?x+=L:F<p&&(x+=2*L)}for(let F=0;F<v.length;F++)v[F]=v[F]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const E=this._sizeLods[r],S=3*E*(r>A-ur?r-A+ur:0),R=4*(this._cubeSize-E);io(t,S,R,3*E,2*E),l.setRenderTarget(t),l.render(f,$a)}}function tb(n){const e=[],t=[],i=[];let r=n;const s=n-ur+1+cf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ur?l=cf[o-n+ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,m=3,p=2,v=1,x=new Float32Array(m*g*d),A=new Float32Array(p*g*d),E=new Float32Array(v*g*d);for(let R=0;R<d;R++){const F=R%3*2/3-1,b=R>2?0:-1,L=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];x.set(L,m*g*R),A.set(h,p*g*R);const B=[R,R,R,R,R,R];E.set(B,v*g*R)}const S=new zt;S.setAttribute("position",new wn(x,m)),S.setAttribute("uv",new wn(A,p)),S.setAttribute("faceIndex",new wn(E,v)),e.push(S),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function df(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nb(n,e,t){const i=new Float32Array(wi),r=new D(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function pf(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function mf(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function ib(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xl||l===yl,u=l===Tr||l===Cr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new hf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new hf(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sb(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const x=d.array;m=d.version;for(let A=0,E=x.length;A<E;A+=3){const S=x[A+0],R=x[A+1],F=x[A+2];h.push(S,R,R,F,F,S)}}else{const x=g.array;m=g.version;for(let A=0,E=x.length/3-1;A<E;A+=3){const S=A+0,R=A+1,F=A+2;h.push(S,R,R,F,F,S)}}const p=new(gd(h)?Md:bd)(h,1);p.version=m;const v=s.get(f);v&&e.remove(v),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ob(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function ab(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lb(n,e){return n[0]-e[0]}function cb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function qa(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function ub(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==p){let k=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var g=k;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let B=0;E===!0&&(B=1),S===!0&&(B=2),R===!0&&(B=3);let z=u.attributes.position.count*B,xe=1;z>e.maxTextureSize&&(xe=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const ce=new Float32Array(z*xe*4*p),N=new yd(ce,z,xe,p);N.type=Ci,N.needsUpdate=!0;const ie=B*4;for(let $=0;$<p;$++){const W=F[$],q=b[$],ee=L[$],he=z*xe*4*$;for(let le=0;le<W.count;le++){const de=le*ie;E===!0&&(o.fromBufferAttribute(W,le),W.normalized===!0&&qa(o,W),ce[he+de+0]=o.x,ce[he+de+1]=o.y,ce[he+de+2]=o.z,ce[he+de+3]=0),S===!0&&(o.fromBufferAttribute(q,le),q.normalized===!0&&qa(o,q),ce[he+de+4]=o.x,ce[he+de+5]=o.y,ce[he+de+6]=o.z,ce[he+de+7]=0),R===!0&&(o.fromBufferAttribute(ee,le),ee.normalized===!0&&qa(o,ee),ce[he+de+8]=o.x,ce[he+de+9]=o.y,ce[he+de+10]=o.z,ce[he+de+11]=ee.itemSize===4?o.w:1)}}v={count:p,texture:N,size:new Le(z,xe)},s.set(u,v),u.addEventListener("dispose",k)}let x=0;for(let E=0;E<d.length;E++)x+=d[E];const A=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let p=i[u.id];if(p===void 0||p.length!==m){p=[];for(let S=0;S<m;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<m;S++){const R=p[S];R[0]=S,R[1]=d[S]}p.sort(cb);for(let S=0;S<8;S++)S<m&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(lb);const v=u.morphAttributes.position,x=u.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const R=a[S],F=R[0],b=R[1];F!==Number.MAX_SAFE_INTEGER&&b?(v&&u.getAttribute("morphTarget"+S)!==v[F]&&u.setAttribute("morphTarget"+S,v[F]),x&&u.getAttribute("morphNormal"+S)!==x[F]&&u.setAttribute("morphNormal"+S,x[F]),r[S]=b,A+=b):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),x&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const E=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function fb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Td=new un,Cd=new yd,Ad=new e_,Pd=new wd,gf=[],vf=[],_f=new Float32Array(16),xf=new Float32Array(9),yf=new Float32Array(4);function Nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gf[r];if(s===void 0&&(s=new Float32Array(r),gf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;yf.set(i),n.uniformMatrix2fv(this.addr,!1,yf),It(t,i)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;xf.set(i),n.uniformMatrix3fv(this.addr,!1,xf),It(t,i)}}function _b(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;_f.set(i),n.uniformMatrix4fv(this.addr,!1,_f),It(t,i)}}function xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yb(n,e){const t=this.cache;Dt(t,e)||(n.uniform2iv(this.addr,e),It(t,e))}function bb(n,e){const t=this.cache;Dt(t,e)||(n.uniform3iv(this.addr,e),It(t,e))}function Mb(n,e){const t=this.cache;Dt(t,e)||(n.uniform4iv(this.addr,e),It(t,e))}function Sb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wb(n,e){const t=this.cache;Dt(t,e)||(n.uniform2uiv(this.addr,e),It(t,e))}function Eb(n,e){const t=this.cache;Dt(t,e)||(n.uniform3uiv(this.addr,e),It(t,e))}function Tb(n,e){const t=this.cache;Dt(t,e)||(n.uniform4uiv(this.addr,e),It(t,e))}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Td,r)}function Ab(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ad,r)}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pd,r)}function Lb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cd,r)}function Rb(n){switch(n){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return vb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return bb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return wb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Db(n,e){n.uniform1fv(this.addr,e)}function Ib(n,e){const t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ob(n,e){const t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Fb(n,e){const t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Nb(n,e){const t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bb(n,e){const t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zb(n,e){const t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ub(n,e){n.uniform1iv(this.addr,e)}function kb(n,e){n.uniform2iv(this.addr,e)}function Vb(n,e){n.uniform3iv(this.addr,e)}function Hb(n,e){n.uniform4iv(this.addr,e)}function Gb(n,e){n.uniform1uiv(this.addr,e)}function Wb(n,e){n.uniform2uiv(this.addr,e)}function $b(n,e){n.uniform3uiv(this.addr,e)}function jb(n,e){n.uniform4uiv(this.addr,e)}function qb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Td,r[s])}function Xb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Ad,r[s])}function Yb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Pd,r[s])}function Zb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Cd,r[s])}function Kb(n){switch(n){case 5126:return Db;case 35664:return Ib;case 35665:return Ob;case 35666:return Fb;case 35674:return Nb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return Ub;case 35667:case 35671:return kb;case 35668:case 35672:return Vb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Wb;case 36295:return $b;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Rb(t.type)}}class Qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Kb(t.type)}}class eM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function bf(n,e){n.seq.push(e),n.map[e.id]=e}function tM(n,e,t){const i=n.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),o=Xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bf(t,c===void 0?new Jb(a,n,e):new Qb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new eM(a),bf(t,f)),t=f}}}class _o{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);tM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Mf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let nM=0;function iM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function rM(n){switch(n){case Ni:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Sf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+iM(n.getShaderSource(e),o)}else return r}function sM(n,e){const t=rM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oM(n,e){let t;switch(e){case Cv:t="Linear";break;case Av:t="Reinhard";break;case Pv:t="OptimizedCineon";break;case Lv:t="ACESFilmic";break;case Rv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function lM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xr(n){return n!==""}function wf(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(n){return n.replace(uM,fM)}function fM(n,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tl(t)}const hM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(n){return n.replace(dM,Ld).replace(hM,pM)}function pM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ld(n,e,t,i)}function Ld(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function gM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Tr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function _M(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function xM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mM(t),c=gM(t),u=vM(t),f=_M(t),h=xM(t),d=t.isWebGL2?"":aM(t),g=lM(s),m=r.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Xr).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(Xr).join(`
`),v.length>0&&(v+=`
`)):(p=[Cf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),v=[d,Cf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?ke.tonemapping_pars_fragment:"",t.toneMapping!==zn?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,sM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=Tl(o),o=wf(o,t),o=Ef(o,t),a=Tl(a),a=wf(a,t),a=Ef(a,t),o=Tf(o),a=Tf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=x+p+o,E=x+v+a,S=Mf(r,35633,A),R=Mf(r,35632,E);if(r.attachShader(m,S),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),B=r.getShaderInfoLog(S).trim(),z=r.getShaderInfoLog(R).trim();let xe=!0,ce=!0;if(r.getProgramParameter(m,35714)===!1){xe=!1;const N=Sf(r,S,"vertex"),ie=Sf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+N+`
`+ie)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||z==="")&&(ce=!1);ce&&(this.diagnostics={runnable:xe,programLog:L,vertexShader:{log:B,prefix:p},fragmentShader:{log:z,prefix:v}})}r.deleteShader(S),r.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new _o(r,m)),F};let b;return this.getAttributes=function(){return b===void 0&&(b=cM(r,m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}let bM=0;class MM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new SM(e);t.set(e,i)}return t.get(e)}}class SM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function wM(n,e,t,i,r,s,o){const a=new fc,l=new MM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,L,B,z,xe){const ce=z.fog,N=xe.geometry,ie=b.isMeshStandardMaterial?z.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),$=k&&k.mapping===Xo?k.image.height:null,W=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=q!==void 0?q.length:0;let he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let le,de,we,Ae;if(W){const Ee=yn[W];le=Ee.vertexShader,de=Ee.fragmentShader}else le=b.vertexShader,de=b.fragmentShader,l.update(b),we=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const X=n.getRenderTarget(),V=b.alphaTest>0,se=b.clearcoat>0,J=b.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:b.type,vertexShader:le,fragmentShader:de,defines:b.defines,customVertexShaderID:we,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:xe.isInstancedMesh===!0,instancingColor:xe.isInstancedMesh===!0&&xe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?n.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Ni,map:!!b.map,matcap:!!b.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:$,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Zv,tangentSpaceNormalMap:b.normalMapType===Or,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===it,clearcoat:se,clearcoatMap:se&&!!b.clearcoatMap,clearcoatRoughnessMap:se&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!b.clearcoatNormalMap,iridescence:J,iridescenceMap:J&&!!b.iridescenceMap,iridescenceThicknessMap:J&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===vr,alphaMap:!!b.alphaMap,alphaTest:V,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!ce,useFog:b.fog===!0,fogExp2:ce&&ce.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:xe.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:he,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:zn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Er,flipSided:b.side===ln,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)L.push(B),L.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(v(L,b),x(L,b),L.push(n.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function v(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.combine),b.push(L.vertexUvs),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function x(b,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),L.fog&&a.enable(33),b.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),b.push(a.mask)}function A(b){const L=g[b.type];let B;if(L){const z=yn[L];B=f_.clone(z.uniforms)}else B=b.uniforms;return B}function E(b,L){let B;for(let z=0,xe=c.length;z<xe;z++){const ce=c[z];if(ce.cacheKey===L){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new yM(n,L,b,s),c.push(B)),B}function S(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:F}}function EM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function TM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,m,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=d,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=p),e++,v}function a(f,h,d,g,m,p){const v=o(f,h,d,g,m,p);d.transmission>0?i.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(f,h,d,g,m,p){const v=o(f,h,d,g,m,p);d.transmission>0?i.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||TM),i.length>1&&i.sort(h||Af),r.length>1&&r.sort(h||Af)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function CM(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Pf,n.set(i,[s])):r>=n.get(i).length?(s=new Pf,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function AM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function PM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LM=0;function RM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function DM(n,e){const t=new AM,i=PM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(u,f){let h=0,d=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let m=0,p=0,v=0,x=0,A=0,E=0,S=0,R=0;u.sort(RM);const F=f!==!0?Math.PI:1;for(let L=0,B=u.length;L<B;L++){const z=u[L],xe=z.color,ce=z.intensity,N=z.distance,ie=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=xe.r*ce*F,d+=xe.g*ce*F,g+=xe.b*ce*F;else if(z.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(z.sh.coefficients[k],ce);else if(z.isDirectionalLight){const k=t.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*F),z.castShadow){const $=z.shadow,W=i.get(z);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,r.directionalShadow[m]=W,r.directionalShadowMap[m]=ie,r.directionalShadowMatrix[m]=z.shadow.matrix,E++}r.directional[m]=k,m++}else if(z.isSpotLight){const k=t.get(z);if(k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(xe).multiplyScalar(ce*F),k.distance=N,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,z.castShadow){const $=z.shadow,W=i.get(z);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,r.spotShadow[v]=W,r.spotShadowMap[v]=ie,r.spotShadowMatrix[v]=z.shadow.matrix,R++}r.spot[v]=k,v++}else if(z.isRectAreaLight){const k=t.get(z);k.color.copy(xe).multiplyScalar(ce),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=k,x++}else if(z.isPointLight){const k=t.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*F),k.distance=z.distance,k.decay=z.decay,z.castShadow){const $=z.shadow,W=i.get(z);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=ie,r.pointShadowMatrix[p]=z.shadow.matrix,S++}r.point[p]=k,p++}else if(z.isHemisphereLight){const k=t.get(z);k.skyColor.copy(z.color).multiplyScalar(ce*F),k.groundColor.copy(z.groundColor).multiplyScalar(ce*F),r.hemi[A]=k,A++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==m||b.pointLength!==p||b.spotLength!==v||b.rectAreaLength!==x||b.hemiLength!==A||b.numDirectionalShadows!==E||b.numPointShadows!==S||b.numSpotShadows!==R)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=p,r.hemi.length=A,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=R,b.directionalLength=m,b.pointLength=p,b.spotLength=v,b.rectAreaLength=x,b.hemiLength=A,b.numDirectionalShadows=E,b.numPointShadows=S,b.numSpotShadows=R,r.version=LM++)}function c(u,f){let h=0,d=0,g=0,m=0,p=0;const v=f.matrixWorldInverse;for(let x=0,A=u.length;x<A;x++){const E=u[x];if(E.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),h++}else if(E.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),g++}else if(E.isRectAreaLight){const S=r.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(v),a.identity(),o.copy(E.matrixWorld),o.premultiply(v),a.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(v),d++}else if(E.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Lf(n,e){const t=new DM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function IM(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Lf(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Lf(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Rd extends pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dd extends pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`;function NM(n,e,t){let i=new hc;const r=new Le,s=new Le,o=new bt,a=new Rd({depthPacking:Yv}),l=new Dd,c={},u=t.maxTextureSize,f={0:ln,1:ps,2:Er},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:OM,fragmentShader:FM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new jt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd,this.render=function(E,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const F=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ci),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let z=0,xe=E.length;z<xe;z++){const ce=E[z],N=ce.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ie=N.getFrameExtents();if(r.multiply(ie),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===qr&&(N.map=new ui(r.x,r.y),N.map.texture.name=ce.name+".shadowMap",N.mapPass=new ui(r.x,r.y),N.camera.updateProjectionMatrix()),N.map===null){const $={minFilter:Ft,magFilter:Ft,format:sn};N.map=new ui(r.x,r.y,$),N.map.texture.name=ce.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const k=N.getViewportCount();for(let $=0;$<k;$++){const W=N.getViewport($);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),B.viewport(o),N.updateMatrices(ce,$),i=N.getFrustum(),A(S,R,N.camera,ce,this.type)}!N.isPointLightShadow&&this.type===qr&&v(N,R),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(F,b,L)};function v(E,S){const R=e.update(m);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,R,h,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,R,d,m,null)}function x(E,S,R,F,b,L){let B=null;const z=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0?B=z:B=R.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const xe=B.uuid,ce=S.uuid;let N=c[xe];N===void 0&&(N={},c[xe]=N);let ie=N[ce];ie===void 0&&(ie=B.clone(),N[ce]=ie),B=ie}return B.visible=S.visible,B.wireframe=S.wireframe,L===qr?B.side=S.shadowSide!==null?S.shadowSide:S.side:B.side=S.shadowSide!==null?S.shadowSide:f[S.side],B.alphaMap=S.alphaMap,B.alphaTest=S.alphaTest,B.clipShadows=S.clipShadows,B.clippingPlanes=S.clippingPlanes,B.clipIntersection=S.clipIntersection,B.displacementMap=S.displacementMap,B.displacementScale=S.displacementScale,B.displacementBias=S.displacementBias,B.wireframeLinewidth=S.wireframeLinewidth,B.linewidth=S.linewidth,R.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(R.matrixWorld),B.nearDistance=F,B.farDistance=b),B}function A(E,S,R,F,b){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===qr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const z=e.update(E),xe=E.material;if(Array.isArray(xe)){const ce=z.groups;for(let N=0,ie=ce.length;N<ie;N++){const k=ce[N],$=xe[k.materialIndex];if($&&$.visible){const W=x(E,$,F,R.near,R.far,b);n.renderBufferDirect(R,null,z,W,E,k)}}}else if(xe.visible){const ce=x(E,xe,F,R.near,R.far,b);n.renderBufferDirect(R,null,z,ce,E,null)}}const B=E.children;for(let z=0,xe=B.length;z<xe;z++)A(B[z],S,R,F,b)}}function BM(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const _e=new bt;let fe=null;const Te=new bt(0,0,0,0);return{setMask:function(Me){fe!==Me&&!P&&(n.colorMask(Me,Me,Me,Me),fe=Me)},setLocked:function(Me){P=Me},setClear:function(Me,Pe,ye,Oe,je){je===!0&&(Me*=Oe,Pe*=Oe,ye*=Oe),_e.set(Me,Pe,ye,Oe),Te.equals(_e)===!1&&(n.clearColor(Me,Pe,ye,Oe),Te.copy(_e))},reset:function(){P=!1,fe=null,Te.set(-1,0,0,0)}}}function s(){let P=!1,_e=null,fe=null,Te=null;return{setTest:function(Me){Me?Ae(2929):X(2929)},setMask:function(Me){_e!==Me&&!P&&(n.depthMask(Me),_e=Me)},setFunc:function(Me){if(fe!==Me){if(Me)switch(Me){case _v:n.depthFunc(512);break;case xv:n.depthFunc(519);break;case yv:n.depthFunc(513);break;case _l:n.depthFunc(515);break;case bv:n.depthFunc(514);break;case Mv:n.depthFunc(518);break;case Sv:n.depthFunc(516);break;case wv:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);fe=Me}},setLocked:function(Me){P=Me},setClear:function(Me){Te!==Me&&(n.clearDepth(Me),Te=Me)},reset:function(){P=!1,_e=null,fe=null,Te=null}}}function o(){let P=!1,_e=null,fe=null,Te=null,Me=null,Pe=null,ye=null,Oe=null,je=null;return{setTest:function(qe){P||(qe?Ae(2960):X(2960))},setMask:function(qe){_e!==qe&&!P&&(n.stencilMask(qe),_e=qe)},setFunc:function(qe,Ct,fn){(fe!==qe||Te!==Ct||Me!==fn)&&(n.stencilFunc(qe,Ct,fn),fe=qe,Te=Ct,Me=fn)},setOp:function(qe,Ct,fn){(Pe!==qe||ye!==Ct||Oe!==fn)&&(n.stencilOp(qe,Ct,fn),Pe=qe,ye=Ct,Oe=fn)},setLocked:function(qe){P=qe},setClear:function(qe){je!==qe&&(n.clearStencil(qe),je=qe)},reset:function(){P=!1,_e=null,fe=null,Te=null,Me=null,Pe=null,ye=null,Oe=null,je=null}}}const a=new r,l=new s,c=new o;let u={},f={},h=new WeakMap,d=[],g=null,m=!1,p=null,v=null,x=null,A=null,E=null,S=null,R=null,F=!1,b=null,L=null,B=null,z=null,xe=null;const ce=n.getParameter(35661);let N=!1,ie=0;const k=n.getParameter(7938);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=ie>=2);let $=null,W={};const q=n.getParameter(3088),ee=n.getParameter(2978),he=new bt().fromArray(q),le=new bt().fromArray(ee);function de(P,_e,fe){const Te=new Uint8Array(4),Me=n.createTexture();n.bindTexture(P,Me),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Pe=0;Pe<fe;Pe++)n.texImage2D(_e+Pe,0,6408,1,1,0,6408,5121,Te);return Me}const we={};we[3553]=de(3553,3553,1),we[34067]=de(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(_l),I(!1),H(xu),Ae(2884),w(ci);function Ae(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function X(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function V(P,_e){return f[P]!==_e?(n.bindFramebuffer(P,_e),f[P]=_e,i&&(P===36009&&(f[36160]=_e),P===36160&&(f[36009]=_e)),!0):!1}function se(P,_e){let fe=d,Te=!1;if(P)if(fe=h.get(_e),fe===void 0&&(fe=[],h.set(_e,fe)),P.isWebGLMultipleRenderTargets){const Me=P.texture;if(fe.length!==Me.length||fe[0]!==36064){for(let Pe=0,ye=Me.length;Pe<ye;Pe++)fe[Pe]=36064+Pe;fe.length=Me.length,Te=!0}}else fe[0]!==36064&&(fe[0]=36064,Te=!0);else fe[0]!==1029&&(fe[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function J(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const K={[lr]:32774,[av]:32778,[lv]:32779};if(i)K[Su]=32775,K[wu]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(K[Su]=P.MIN_EXT,K[wu]=P.MAX_EXT)}const Ee={[cv]:0,[uv]:1,[fv]:768,[hd]:770,[vv]:776,[mv]:774,[dv]:772,[hv]:769,[dd]:771,[gv]:775,[pv]:773};function w(P,_e,fe,Te,Me,Pe,ye,Oe){if(P===ci){m===!0&&(X(3042),m=!1);return}if(m===!1&&(Ae(3042),m=!0),P!==ov){if(P!==p||Oe!==F){if((v!==lr||E!==lr)&&(n.blendEquation(32774),v=lr,E=lr),Oe)switch(P){case vr:n.blendFuncSeparate(1,771,1,771);break;case yu:n.blendFunc(1,1);break;case bu:n.blendFuncSeparate(0,769,0,1);break;case Mu:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case vr:n.blendFuncSeparate(770,771,1,771);break;case yu:n.blendFunc(770,1);break;case bu:n.blendFuncSeparate(0,769,0,1);break;case Mu:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,A=null,S=null,R=null,p=P,F=Oe}return}Me=Me||_e,Pe=Pe||fe,ye=ye||Te,(_e!==v||Me!==E)&&(n.blendEquationSeparate(K[_e],K[Me]),v=_e,E=Me),(fe!==x||Te!==A||Pe!==S||ye!==R)&&(n.blendFuncSeparate(Ee[fe],Ee[Te],Ee[Pe],Ee[ye]),x=fe,A=Te,S=Pe,R=ye),p=P,F=null}function C(P,_e){P.side===Er?X(2884):Ae(2884);let fe=P.side===ln;_e&&(fe=!fe),I(fe),P.blending===vr&&P.transparent===!1?w(ci):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Te=P.stencilWrite;c.setTest(Te),Te&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ae(32926):X(32926)}function I(P){b!==P&&(P?n.frontFace(2304):n.frontFace(2305),b=P)}function H(P){P!==nv?(Ae(2884),P!==L&&(P===xu?n.cullFace(1029):P===iv?n.cullFace(1028):n.cullFace(1032))):X(2884),L=P}function Z(P){P!==B&&(N&&n.lineWidth(P),B=P)}function re(P,_e,fe){P?(Ae(32823),(z!==_e||xe!==fe)&&(n.polygonOffset(_e,fe),z=_e,xe=fe)):X(32823)}function pe(P){P?Ae(3089):X(3089)}function te(P){P===void 0&&(P=33984+ce-1),$!==P&&(n.activeTexture(P),$=P)}function me(P,_e){$===null&&te();let fe=W[$];fe===void 0&&(fe={type:void 0,texture:void 0},W[$]=fe),(fe.type!==P||fe.texture!==_e)&&(n.bindTexture(P,_e||we[P]),fe.type=P,fe.texture=_e)}function ae(){const P=W[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(P){he.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function ge(P){le.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),le.copy(P))}function ve(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,W={},f={},h=new WeakMap,d=[],g=null,m=!1,p=null,v=null,x=null,A=null,E=null,S=null,R=null,F=!1,b=null,L=null,B=null,z=null,xe=null,he.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:X,bindFramebuffer:V,drawBuffers:se,useProgram:J,setBlending:w,setMaterial:C,setFlipSided:I,setCullFace:H,setLineWidth:Z,setPolygonOffset:re,setScissorTest:pe,activeTexture:te,bindTexture:me,unbindTexture:ae,compressedTexImage2D:y,texImage2D:be,texImage3D:M,texStorage2D:Q,texStorage3D:ue,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:j,scissor:ne,viewport:ge,reset:ve}}function zM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,_){return v?new OffscreenCanvas(y,_):Co("canvas")}function A(y,_,O,j){let Q=1;if((y.width>j||y.height>j)&&(Q=j/Math.max(y.width,y.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ue=_?El:Math.floor,be=ue(Q*y.width),M=ue(Q*y.height);m===void 0&&(m=x(be,M));const ne=O?x(be,M):m;return ne.width=be,ne.height=M,ne.getContext("2d").drawImage(y,0,0,be,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+be+"x"+M+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function E(y){return Zu(y.width)&&Zu(y.height)}function S(y){return a?!1:y.wrapS!==nn||y.wrapT!==nn||y.minFilter!==Ft&&y.minFilter!==$t}function R(y,_){return y.generateMipmaps&&_&&y.minFilter!==Ft&&y.minFilter!==$t}function F(y){n.generateMipmap(y)}function b(y,_,O,j,Q=!1){if(a===!1)return _;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ue=_;return _===6403&&(O===5126&&(ue=33326),O===5131&&(ue=33325),O===5121&&(ue=33321)),_===33319&&(O===5126&&(ue=33328),O===5131&&(ue=33327),O===5121&&(ue=33323)),_===6408&&(O===5126&&(ue=34836),O===5131&&(ue=34842),O===5121&&(ue=j===it&&Q===!1?35907:32856),O===32819&&(ue=32854),O===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function L(y,_,O){return R(y,O)===!0||y.isFramebufferTexture&&y.minFilter!==Ft&&y.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function B(y){return y===Ft||y===Eu||y===Tu?9728:9729}function z(y){const _=y.target;_.removeEventListener("dispose",z),ce(_),_.isVideoTexture&&g.delete(_)}function xe(y){const _=y.target;_.removeEventListener("dispose",xe),ie(_)}function ce(y){const _=i.get(y);if(_.__webglInit===void 0)return;const O=y.source,j=p.get(O);if(j){const Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(y),Object.keys(j).length===0&&p.delete(O)}i.remove(y)}function N(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const O=y.source,j=p.get(O);delete j[_.__cacheKey],o.memory.textures--}function ie(y){const _=y.texture,O=i.get(y),j=i.get(_);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(O.__webglFramebuffer[Q]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,ue=_.length;Q<ue;Q++){const be=i.get(_[Q]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(y)}let k=0;function $(){k=0}function W(){const y=k;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),k+=1,y}function q(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.encoding),_.join()}function ee(y,_){const O=i.get(y);if(y.isVideoTexture&&me(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const j=y.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,y,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,O.__webglTexture)}function he(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){se(O,y,_);return}t.activeTexture(33984+_),t.bindTexture(35866,O.__webglTexture)}function le(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){se(O,y,_);return}t.activeTexture(33984+_),t.bindTexture(32879,O.__webglTexture)}function de(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){J(O,y,_);return}t.activeTexture(33984+_),t.bindTexture(34067,O.__webglTexture)}const we={[bl]:10497,[nn]:33071,[Ml]:33648},Ae={[Ft]:9728,[Eu]:9984,[Tu]:9986,[$t]:9729,[Dv]:9985,[Yo]:9987};function X(y,_,O){if(O?(n.texParameteri(y,10242,we[_.wrapS]),n.texParameteri(y,10243,we[_.wrapT]),(y===32879||y===35866)&&n.texParameteri(y,32882,we[_.wrapR]),n.texParameteri(y,10240,Ae[_.magFilter]),n.texParameteri(y,10241,Ae[_.minFilter])):(n.texParameteri(y,10242,33071),n.texParameteri(y,10243,33071),(y===32879||y===35866)&&n.texParameteri(y,32882,33071),(_.wrapS!==nn||_.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,10240,B(_.magFilter)),n.texParameteri(y,10241,B(_.minFilter)),_.minFilter!==Ft&&_.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(_.type===Ci&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(y,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function V(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",z));const j=_.source;let Q=p.get(j);Q===void 0&&(Q={},p.set(j,Q));const ue=q(_);if(ue!==y.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[ue].usedTimes++;const be=Q[y.__cacheKey];be!==void 0&&(Q[y.__cacheKey].usedTimes--,be.usedTimes===0&&N(_)),y.__cacheKey=ue,y.__webglTexture=Q[ue].texture}return O}function se(y,_,O){let j=3553;_.isDataArrayTexture&&(j=35866),_.isData3DTexture&&(j=32879);const Q=V(y,_),ue=_.source;if(t.activeTexture(33984+O),t.bindTexture(j,y.__webglTexture),ue.version!==ue.__currentVersion||Q===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const be=S(_)&&E(_.image)===!1;let M=A(_.image,be,!1,u);M=ae(_,M);const ne=E(M)||a,ge=s.convert(_.format,_.encoding);let ve=s.convert(_.type),P=b(_.internalFormat,ge,ve,_.encoding,_.isVideoTexture);X(j,_,ne);let _e;const fe=_.mipmaps,Te=a&&_.isVideoTexture!==!0,Me=ue.__currentVersion===void 0||Q===!0,Pe=L(_,M,ne);if(_.isDepthTexture)P=6402,a?_.type===Ci?P=36012:_.type===Ti?P=33190:_.type===_r?P=35056:P=33189:_.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ri&&P===6402&&_.type!==md&&_.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Ti,ve=s.convert(_.type)),_.format===Ar&&P===6402&&(P=34041,_.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=_r,ve=s.convert(_.type))),Me&&(Te?t.texStorage2D(3553,1,P,M.width,M.height):t.texImage2D(3553,0,P,M.width,M.height,0,ge,ve,null));else if(_.isDataTexture)if(fe.length>0&&ne){Te&&Me&&t.texStorage2D(3553,Pe,P,fe[0].width,fe[0].height);for(let ye=0,Oe=fe.length;ye<Oe;ye++)_e=fe[ye],Te?t.texSubImage2D(3553,ye,0,0,_e.width,_e.height,ge,ve,_e.data):t.texImage2D(3553,ye,P,_e.width,_e.height,0,ge,ve,_e.data);_.generateMipmaps=!1}else Te?(Me&&t.texStorage2D(3553,Pe,P,M.width,M.height),t.texSubImage2D(3553,0,0,0,M.width,M.height,ge,ve,M.data)):t.texImage2D(3553,0,P,M.width,M.height,0,ge,ve,M.data);else if(_.isCompressedTexture){Te&&Me&&t.texStorage2D(3553,Pe,P,fe[0].width,fe[0].height);for(let ye=0,Oe=fe.length;ye<Oe;ye++)_e=fe[ye],_.format!==sn?ge!==null?Te?t.compressedTexSubImage2D(3553,ye,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(3553,ye,P,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(3553,ye,0,0,_e.width,_e.height,ge,ve,_e.data):t.texImage2D(3553,ye,P,_e.width,_e.height,0,ge,ve,_e.data)}else if(_.isDataArrayTexture)Te?(Me&&t.texStorage3D(35866,Pe,P,M.width,M.height,M.depth),t.texSubImage3D(35866,0,0,0,0,M.width,M.height,M.depth,ge,ve,M.data)):t.texImage3D(35866,0,P,M.width,M.height,M.depth,0,ge,ve,M.data);else if(_.isData3DTexture)Te?(Me&&t.texStorage3D(32879,Pe,P,M.width,M.height,M.depth),t.texSubImage3D(32879,0,0,0,0,M.width,M.height,M.depth,ge,ve,M.data)):t.texImage3D(32879,0,P,M.width,M.height,M.depth,0,ge,ve,M.data);else if(_.isFramebufferTexture){if(Me)if(Te)t.texStorage2D(3553,Pe,P,M.width,M.height);else{let ye=M.width,Oe=M.height;for(let je=0;je<Pe;je++)t.texImage2D(3553,je,P,ye,Oe,0,ge,ve,null),ye>>=1,Oe>>=1}}else if(fe.length>0&&ne){Te&&Me&&t.texStorage2D(3553,Pe,P,fe[0].width,fe[0].height);for(let ye=0,Oe=fe.length;ye<Oe;ye++)_e=fe[ye],Te?t.texSubImage2D(3553,ye,0,0,ge,ve,_e):t.texImage2D(3553,ye,P,ge,ve,_e);_.generateMipmaps=!1}else Te?(Me&&t.texStorage2D(3553,Pe,P,M.width,M.height),t.texSubImage2D(3553,0,0,0,ge,ve,M)):t.texImage2D(3553,0,P,ge,ve,M);R(_,ne)&&F(j),ue.__currentVersion=ue.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function J(y,_,O){if(_.image.length!==6)return;const j=V(y,_),Q=_.source;if(t.activeTexture(33984+O),t.bindTexture(34067,y.__webglTexture),Q.version!==Q.__currentVersion||j===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,M=[];for(let ye=0;ye<6;ye++)!ue&&!be?M[ye]=A(_.image[ye],!1,!0,c):M[ye]=be?_.image[ye].image:_.image[ye],M[ye]=ae(_,M[ye]);const ne=M[0],ge=E(ne)||a,ve=s.convert(_.format,_.encoding),P=s.convert(_.type),_e=b(_.internalFormat,ve,P,_.encoding),fe=a&&_.isVideoTexture!==!0,Te=Q.__currentVersion===void 0||j===!0;let Me=L(_,ne,ge);X(34067,_,ge);let Pe;if(ue){fe&&Te&&t.texStorage2D(34067,Me,_e,ne.width,ne.height);for(let ye=0;ye<6;ye++){Pe=M[ye].mipmaps;for(let Oe=0;Oe<Pe.length;Oe++){const je=Pe[Oe];_.format!==sn?ve!==null?fe?t.compressedTexSubImage2D(34069+ye,Oe,0,0,je.width,je.height,ve,je.data):t.compressedTexImage2D(34069+ye,Oe,_e,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(34069+ye,Oe,0,0,je.width,je.height,ve,P,je.data):t.texImage2D(34069+ye,Oe,_e,je.width,je.height,0,ve,P,je.data)}}}else{Pe=_.mipmaps,fe&&Te&&(Pe.length>0&&Me++,t.texStorage2D(34067,Me,_e,M[0].width,M[0].height));for(let ye=0;ye<6;ye++)if(be){fe?t.texSubImage2D(34069+ye,0,0,0,M[ye].width,M[ye].height,ve,P,M[ye].data):t.texImage2D(34069+ye,0,_e,M[ye].width,M[ye].height,0,ve,P,M[ye].data);for(let Oe=0;Oe<Pe.length;Oe++){const qe=Pe[Oe].image[ye].image;fe?t.texSubImage2D(34069+ye,Oe+1,0,0,qe.width,qe.height,ve,P,qe.data):t.texImage2D(34069+ye,Oe+1,_e,qe.width,qe.height,0,ve,P,qe.data)}}else{fe?t.texSubImage2D(34069+ye,0,0,0,ve,P,M[ye]):t.texImage2D(34069+ye,0,_e,ve,P,M[ye]);for(let Oe=0;Oe<Pe.length;Oe++){const je=Pe[Oe];fe?t.texSubImage2D(34069+ye,Oe+1,0,0,ve,P,je.image[ye]):t.texImage2D(34069+ye,Oe+1,_e,ve,P,je.image[ye])}}}R(_,ge)&&F(34067),Q.__currentVersion=Q.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function K(y,_,O,j,Q){const ue=s.convert(O.format,O.encoding),be=s.convert(O.type),M=b(O.internalFormat,ue,be,O.encoding);i.get(_).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,M,_.width,_.height,_.depth,0,ue,be,null):t.texImage2D(Q,0,M,_.width,_.height,0,ue,be,null)),t.bindFramebuffer(36160,y),te(_)?h.framebufferTexture2DMultisampleEXT(36160,j,Q,i.get(O).__webglTexture,0,pe(_)):n.framebufferTexture2D(36160,j,Q,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(y,_,O){if(n.bindRenderbuffer(36161,y),_.depthBuffer&&!_.stencilBuffer){let j=33189;if(O||te(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ci?j=36012:Q.type===Ti&&(j=33190));const ue=pe(_);te(_)?h.renderbufferStorageMultisampleEXT(36161,ue,j,_.width,_.height):n.renderbufferStorageMultisample(36161,ue,j,_.width,_.height)}else n.renderbufferStorage(36161,j,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,y)}else if(_.depthBuffer&&_.stencilBuffer){const j=pe(_);O&&te(_)===!1?n.renderbufferStorageMultisample(36161,j,35056,_.width,_.height):te(_)?h.renderbufferStorageMultisampleEXT(36161,j,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,y)}else{const j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<j.length;Q++){const ue=j[Q],be=s.convert(ue.format,ue.encoding),M=s.convert(ue.type),ne=b(ue.internalFormat,be,M,ue.encoding),ge=pe(_);O&&te(_)===!1?n.renderbufferStorageMultisample(36161,ge,ne,_.width,_.height):te(_)?h.renderbufferStorageMultisampleEXT(36161,ge,ne,_.width,_.height):n.renderbufferStorage(36161,ne,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function w(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);const j=i.get(_.depthTexture).__webglTexture,Q=pe(_);if(_.depthTexture.format===Ri)te(_)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,Q):n.framebufferTexture2D(36160,36096,3553,j,0);else if(_.depthTexture.format===Ar)te(_)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,Q):n.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function C(y){const _=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");w(_.__webglFramebuffer,y)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[j],y,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function I(y,_,O){const j=i.get(y);_!==void 0&&K(j.__webglFramebuffer,y,y.texture,36064,3553),O!==void 0&&C(y)}function H(y){const _=y.texture,O=i.get(y),j=i.get(_);y.addEventListener("dispose",xe),y.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++);const Q=y.isWebGLCubeRenderTarget===!0,ue=y.isWebGLMultipleRenderTargets===!0,be=E(y)||a;if(Q){O.__webglFramebuffer=[];for(let M=0;M<6;M++)O.__webglFramebuffer[M]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const M=y.texture;for(let ne=0,ge=M.length;ne<ge;ne++){const ve=i.get(M[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&te(y)===!1){const M=ue?_:[_];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let ne=0;ne<M.length;ne++){const ge=M[ne];O.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[ne]);const ve=s.convert(ge.format,ge.encoding),P=s.convert(ge.type),_e=b(ge.internalFormat,ve,P,ge.encoding),fe=pe(y);n.renderbufferStorageMultisample(36161,fe,_e,y.width,y.height),n.framebufferRenderbuffer(36160,36064+ne,36161,O.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(36161,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,j.__webglTexture),X(34067,_,be);for(let M=0;M<6;M++)K(O.__webglFramebuffer[M],y,_,36064,34069+M);R(_,be)&&F(34067),t.unbindTexture()}else if(ue){const M=y.texture;for(let ne=0,ge=M.length;ne<ge;ne++){const ve=M[ne],P=i.get(ve);t.bindTexture(3553,P.__webglTexture),X(3553,ve,be),K(O.__webglFramebuffer,y,ve,36064+ne,3553),R(ve,be)&&F(3553)}t.unbindTexture()}else{let M=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?M=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(M,j.__webglTexture),X(M,_,be),K(O.__webglFramebuffer,y,_,36064,M),R(_,be)&&F(M),t.unbindTexture()}y.depthBuffer&&C(y)}function Z(y){const _=E(y)||a,O=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0,Q=O.length;j<Q;j++){const ue=O[j];if(R(ue,_)){const be=y.isWebGLCubeRenderTarget?34067:3553,M=i.get(ue).__webglTexture;t.bindTexture(be,M),F(be),t.unbindTexture()}}}function re(y){if(a&&y.samples>0&&te(y)===!1){const _=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],O=y.width,j=y.height;let Q=16384;const ue=[],be=y.stencilBuffer?33306:36096,M=i.get(y),ne=y.isWebGLMultipleRenderTargets===!0;if(ne)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){ue.push(36064+ge),y.depthBuffer&&ue.push(be);const ve=M.__ignoreDepthValues!==void 0?M.__ignoreDepthValues:!1;if(ve===!1&&(y.depthBuffer&&(Q|=256),y.stencilBuffer&&(Q|=1024)),ne&&n.framebufferRenderbuffer(36008,36064,36161,M.__webglColorRenderbuffer[ge]),ve===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),ne){const P=i.get(_[ge]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,P,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Q,9728),d&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,M.__webglColorRenderbuffer[ge]);const ve=i.get(_[ge]).__webglTexture;t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,M.__webglMultisampledFramebuffer)}}function pe(y){return Math.min(f,y.samples)}function te(y){const _=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function me(y){const _=o.render.frame;g.get(y)!==_&&(g.set(y,_),y.update())}function ae(y,_){const O=y.encoding,j=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Sl||O!==Ni&&(O===it?a===!1?e.has("EXT_sRGB")===!0&&j===sn?(y.format=Sl,y.minFilter=$t,y.generateMipmaps=!1):_=_d.sRGBToLinear(_):(j!==sn||Q!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),_}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=he,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=I,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=K,this.useMultisampledRTT=te}function UM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Fi)return 5121;if(s===Nv)return 32819;if(s===Bv)return 32820;if(s===Iv)return 5120;if(s===Ov)return 5122;if(s===md)return 5123;if(s===Fv)return 5124;if(s===Ti)return 5125;if(s===Ci)return 5126;if(s===ms)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zv)return 6406;if(s===sn)return 6408;if(s===kv)return 6409;if(s===Vv)return 6410;if(s===Ri)return 6402;if(s===Ar)return 34041;if(s===Hv)return 6403;if(s===Uv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Sl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Gv)return 36244;if(s===Wv)return 33319;if(s===$v)return 33320;if(s===jv)return 36249;if(s===_a||s===xa||s===ya||s===ba)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cu||s===Au||s===Pu||s===Lu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Au)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ru||s===Du)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ru)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Du)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Iu||s===Ou||s===Fu||s===Nu||s===Bu||s===zu||s===Uu||s===ku||s===Vu||s===Hu||s===Gu||s===Wu||s===$u||s===ju)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Iu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ou)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ku)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$u)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ju)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qu)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===_r?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class kM extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VM))),c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const x=new si;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class HM extends un{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ri,u!==Ri&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ri&&(i=Ti),i===void 0&&u===Ar&&(i=_r),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class GM extends zi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],x=new Map,A=new Nt;A.layers.enable(1),A.viewport=new bt;const E=new Nt;E.layers.enable(2),E.viewport=new bt;const S=[A,E],R=new kM;R.layers.enable(1),R.layers.enable(2);let F=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=v[q];return ee===void 0&&(ee=new Ya,v[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=v[q];return ee===void 0&&(ee=new Ya,v[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=v[q];return ee===void 0&&(ee=new Ya,v[q]=ee),ee.getHandSpace()};function L(q){const ee=x.get(q.inputSource);ee!==void 0&&ee.dispatchEvent({type:q.type,data:q.inputSource})}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",z),x.forEach(function(q,ee){q!==void 0&&q.disconnect(ee)}),x.clear(),F=null,b=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,p=null,W.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:h}),p=new ui(h.framebufferWidth,h.framebufferHeight,{format:sn,type:Fi,encoding:e.outputEncoding})}else{let ee=null,he=null,le=null;g.depth&&(le=g.stencil?35056:33190,ee=g.stencil?Ar:Ri,he=g.stencil?_r:Ti);const de={colorFormat:e.outputEncoding===it?35907:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(de),r.updateRenderState({layers:[f]}),p=new ui(f.textureWidth,f.textureHeight,{format:sn,type:Fi,depthTexture:new HM(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const we=e.properties.get(p);we.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(q){const ee=r.inputSources;for(let he=0;he<ee.length;he++){const le=ee[he].handedness==="right"?1:0;x.set(ee[he],v[le])}for(let he=0;he<q.removed.length;he++){const le=q.removed[he],de=x.get(le);de&&(de.dispatchEvent({type:"disconnected",data:le}),x.delete(le))}for(let he=0;he<q.added.length;he++){const le=q.added[he],de=x.get(le);de&&de.dispatchEvent({type:"connected",data:le})}}const xe=new D,ce=new D;function N(q,ee,he){xe.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);const le=xe.distanceTo(ce),de=ee.projectionMatrix.elements,we=he.projectionMatrix.elements,Ae=de[14]/(de[10]-1),X=de[14]/(de[10]+1),V=(de[9]+1)/de[5],se=(de[9]-1)/de[5],J=(de[8]-1)/de[0],K=(we[8]+1)/we[0],Ee=Ae*J,w=Ae*K,C=le/(-J+K),I=C*-J;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(I),q.translateZ(C),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const H=Ae+C,Z=X+C,re=Ee-I,pe=w+(le-I),te=V*X/Z*H,me=se*X/Z*H;q.projectionMatrix.makePerspective(re,pe,te,me,H,Z)}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;R.near=E.near=A.near=q.near,R.far=E.far=A.far=q.far,(F!==R.near||b!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,b=R.far);const ee=q.parent,he=R.cameras;ie(R,ee);for(let de=0;de<he.length;de++)ie(he[de],ee);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),q.position.copy(R.position),q.quaternion.copy(R.quaternion),q.scale.copy(R.scale),q.matrix.copy(R.matrix),q.matrixWorld.copy(R.matrixWorld);const le=q.children;for(let de=0,we=le.length;de<we;de++)le[de].updateMatrixWorld(!0);he.length===2?N(R,A,E):R.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(q){f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)};let k=null;function $(q,ee){if(c=ee.getViewerPose(l||o),d=ee,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let de=!1;le.length!==R.cameras.length&&(R.cameras.length=0,de=!0);for(let we=0;we<le.length;we++){const Ae=le[we];let X=null;if(h!==null)X=h.getViewport(Ae);else{const se=u.getViewSubImage(f,Ae);X=se.viewport,we===0&&(e.setRenderTargetTextures(p,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(p))}let V=S[we];V===void 0&&(V=new Nt,V.layers.enable(we),V.viewport=new bt,S[we]=V),V.matrix.fromArray(Ae.transform.matrix),V.projectionMatrix.fromArray(Ae.projectionMatrix),V.viewport.set(X.x,X.y,X.width,X.height),we===0&&R.matrix.copy(V.matrix),de===!0&&R.cameras.push(V)}}const he=r.inputSources;for(let le=0;le<v.length;le++){const de=he[le],we=x.get(de);we!==void 0&&we.update(de,ee,l||o)}k&&k(q,ee),d=null}const W=new Ed;W.setAnimationLoop($),this.setAnimationLoop=function(q){k=q},this.dispose=function(){}}}function WM(n,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uv2Transform.value.copy(A.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ln&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function $M(){const n=Co("canvas");return n.style.display="block",n}function pc(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:$M(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ni,this.physicallyCorrectLights=!1,this.toneMapping=zn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,x=0,A=null,E=-1,S=null;const R=new bt,F=new bt;let b=null,L=e.width,B=e.height,z=1,xe=null,ce=null;const N=new bt(0,0,L,B),ie=new bt(0,0,L,B);let k=!1;const $=new hc;let W=!1,q=!1,ee=null;const he=new ut,le=new Le,de=new D,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return A===null?z:1}let X=t;function V(T,U){for(let Y=0;Y<T.length;Y++){const G=T[Y],oe=e.getContext(G,U);if(oe!==null)return oe}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",fe,!1),X===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),X=V(U,T),X===null)throw V(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let se,J,K,Ee,w,C,I,H,Z,re,pe,te,me,ae,y,_,O,j,Q,ue,be,M,ne;function ge(){se=new rb(X),J=new Ky(X,se,n),se.init(J),M=new UM(X,se,J),K=new BM(X,se,J),Ee=new ab,w=new EM,C=new zM(X,se,K,w,J,M,Ee),I=new Qy(m),H=new ib(m),Z=new __(X,J),ne=new Yy(X,se,Z,J),re=new sb(X,Z,Ee,ne),pe=new fb(X,re,Z,Ee),Q=new ub(X,J,C),_=new Jy(w),te=new wM(m,I,H,se,J,ne,_),me=new WM(m,w),ae=new CM,y=new IM(se,J),j=new Xy(m,I,K,pe,u,o),O=new NM(m,pe,J),ue=new Zy(X,se,Ee,J),be=new ob(X,se,Ee,J),Ee.programs=te.programs,m.capabilities=J,m.extensions=se,m.properties=w,m.renderLists=ae,m.shadowMap=O,m.state=K,m.info=Ee}ge();const ve=new GM(m,X);this.xr=ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(L,B,!1))},this.getSize=function(T){return T.set(L,B)},this.setSize=function(T,U,Y){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,B=U,e.width=Math.floor(T*z),e.height=Math.floor(U*z),Y!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(L*z,B*z).floor()},this.setDrawingBufferSize=function(T,U,Y){L=T,B=U,z=Y,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,U,Y,G){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,U,Y,G),K.viewport(R.copy(N).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,U,Y,G){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,Y,G),K.scissor(F.copy(ie).multiplyScalar(z).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(T){K.setScissorTest(k=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(T=!0,U=!0,Y=!0){let G=0;T&&(G|=16384),U&&(G|=256),Y&&(G|=1024),X.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),ae.dispose(),y.dispose(),w.dispose(),I.dispose(),H.dispose(),pe.dispose(),ne.dispose(),te.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",je),ve.removeEventListener("sessionend",qe),ee&&(ee.dispose(),ee=null),Ct.stop()};function P(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ee.autoReset,U=O.enabled,Y=O.autoUpdate,G=O.needsUpdate,oe=O.type;ge(),Ee.autoReset=T,O.enabled=U,O.autoUpdate=Y,O.needsUpdate=G,O.type=oe}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Te(T){const U=T.target;U.removeEventListener("dispose",Te),Me(U)}function Me(T){Pe(T),w.remove(T)}function Pe(T){const U=w.get(T).programs;U!==void 0&&(U.forEach(function(Y){te.releaseProgram(Y)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,G,oe,De){U===null&&(U=we);const Fe=oe.isMesh&&oe.matrixWorld.determinant()<0,ze=Jd(T,U,Y,G,oe);K.setMaterial(G,Fe);let Be=Y.index;const Xe=Y.attributes.position;if(Be===null){if(Xe===void 0||Xe.count===0)return}else if(Be.count===0)return;let Ve=1;G.wireframe===!0&&(Be=re.getWireframeAttribute(Y),Ve=2),ne.setup(oe,G,ze,Y,Be);let Ge,rt=ue;Be!==null&&(Ge=Z.get(Be),rt=be,rt.setIndex(Ge));const pi=Be!==null?Be.count:Xe.count,Vi=Y.drawRange.start*Ve,Hi=Y.drawRange.count*Ve,hn=De!==null?De.start*Ve:0,$e=De!==null?De.count*Ve:1/0,Gi=Math.max(Vi,hn),ot=Math.min(pi,Vi+Hi,hn+$e)-1,dn=Math.max(0,ot-Gi+1);if(dn!==0){if(oe.isMesh)G.wireframe===!0?(K.setLineWidth(G.wireframeLinewidth*Ae()),rt.setMode(1)):rt.setMode(4);else if(oe.isLine){let Hn=G.linewidth;Hn===void 0&&(Hn=1),K.setLineWidth(Hn*Ae()),oe.isLineSegments?rt.setMode(1):oe.isLineLoop?rt.setMode(2):rt.setMode(3)}else oe.isPoints?rt.setMode(0):oe.isSprite&&rt.setMode(4);if(oe.isInstancedMesh)rt.renderInstances(Gi,dn,oe.count);else if(Y.isInstancedBufferGeometry){const Hn=Math.min(Y.instanceCount,Y._maxInstanceCount);rt.renderInstances(Gi,dn,Hn)}else rt.render(Gi,dn)}},this.compile=function(T,U){h=y.get(T),h.init(),g.push(h),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights(m.physicallyCorrectLights),T.traverse(function(Y){const G=Y.material;if(G)if(Array.isArray(G))for(let oe=0;oe<G.length;oe++){const De=G[oe];na(De,T,Y)}else na(G,T,Y)}),g.pop(),h=null};let ye=null;function Oe(T){ye&&ye(T)}function je(){Ct.stop()}function qe(){Ct.start()}const Ct=new Ed;Ct.setAnimationLoop(Oe),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(T){ye=T,ve.setAnimationLoop(T),T===null?Ct.stop():Ct.start()},ve.addEventListener("sessionstart",je),ve.addEventListener("sessionend",qe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,U,A),h=y.get(T,g.length),h.init(),g.push(h),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(he),q=this.localClippingEnabled,W=_.init(this.clippingPlanes,q,U),f=ae.get(T,d.length),f.init(),d.push(f),fn(T,U,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(xe,ce),W===!0&&_.beginShadows();const Y=h.state.shadowsArray;if(O.render(Y,T,U),W===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(f,T),h.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const G=U.cameras;for(let oe=0,De=G.length;oe<De;oe++){const Fe=G[oe];yc(f,T,Fe,Fe.viewport)}}else yc(f,T,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(m,T,U),ne.resetDefaultState(),E=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function fn(T,U,Y,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){G&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Fe=pe.update(T),ze=T.material;ze.visible&&f.push(T,Fe,ze,Y,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ee.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ee.render.frame),!T.frustumCulled||$.intersectsObject(T))){G&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Fe=pe.update(T),ze=T.material;if(Array.isArray(ze)){const Be=Fe.groups;for(let Xe=0,Ve=Be.length;Xe<Ve;Xe++){const Ge=Be[Xe],rt=ze[Ge.materialIndex];rt&&rt.visible&&f.push(T,Fe,rt,Y,de.z,Ge)}}else ze.visible&&f.push(T,Fe,ze,Y,de.z,null)}}const De=T.children;for(let Fe=0,ze=De.length;Fe<ze;Fe++)fn(De[Fe],U,Y,G)}function yc(T,U,Y,G){const oe=T.opaque,De=T.transmissive,Fe=T.transparent;h.setupLightsView(Y),De.length>0&&Zd(oe,U,Y),G&&K.viewport(R.copy(G)),oe.length>0&&Ps(oe,U,Y),De.length>0&&Ps(De,U,Y),Fe.length>0&&Ps(Fe,U,Y),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Zd(T,U,Y){const G=J.isWebGL2;ee===null&&(ee=new ui(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?ms:Fi,minFilter:Yo,samples:G&&s===!0?4:0})),m.getDrawingBufferSize(le),G?ee.setSize(le.x,le.y):ee.setSize(El(le.x),El(le.y));const oe=m.getRenderTarget();m.setRenderTarget(ee),m.clear();const De=m.toneMapping;m.toneMapping=zn,Ps(T,U,Y),m.toneMapping=De,C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee),m.setRenderTarget(oe)}function Ps(T,U,Y){const G=U.isScene===!0?U.overrideMaterial:null;for(let oe=0,De=T.length;oe<De;oe++){const Fe=T[oe],ze=Fe.object,Be=Fe.geometry,Xe=G===null?Fe.material:G,Ve=Fe.group;ze.layers.test(Y.layers)&&Kd(ze,U,Y,Be,Xe,Ve)}}function Kd(T,U,Y,G,oe,De){T.onBeforeRender(m,U,Y,G,oe,De),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),oe.onBeforeRender(m,U,Y,G,T,De),oe.transparent===!0&&oe.side===Er?(oe.side=ln,oe.needsUpdate=!0,m.renderBufferDirect(Y,U,G,oe,T,De),oe.side=ps,oe.needsUpdate=!0,m.renderBufferDirect(Y,U,G,oe,T,De),oe.side=Er):m.renderBufferDirect(Y,U,G,oe,T,De),T.onAfterRender(m,U,Y,G,oe,De)}function na(T,U,Y){U.isScene!==!0&&(U=we);const G=w.get(T),oe=h.state.lights,De=h.state.shadowsArray,Fe=oe.state.version,ze=te.getParameters(T,oe.state,De,U,Y),Be=te.getProgramCacheKey(ze);let Xe=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?H:I).get(T.envMap||G.environment),Xe===void 0&&(T.addEventListener("dispose",Te),Xe=new Map,G.programs=Xe);let Ve=Xe.get(Be);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===Fe)return bc(T,ze),Ve}else ze.uniforms=te.getUniforms(T),T.onBuild(Y,ze,m),T.onBeforeCompile(ze,m),Ve=te.acquireProgram(ze,Be),Xe.set(Be,Ve),G.uniforms=ze.uniforms;const Ge=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=_.uniform),bc(T,ze),G.needsLights=ep(T),G.lightsStateVersion=Fe,G.needsLights&&(Ge.ambientLightColor.value=oe.state.ambient,Ge.lightProbe.value=oe.state.probe,Ge.directionalLights.value=oe.state.directional,Ge.directionalLightShadows.value=oe.state.directionalShadow,Ge.spotLights.value=oe.state.spot,Ge.spotLightShadows.value=oe.state.spotShadow,Ge.rectAreaLights.value=oe.state.rectArea,Ge.ltc_1.value=oe.state.rectAreaLTC1,Ge.ltc_2.value=oe.state.rectAreaLTC2,Ge.pointLights.value=oe.state.point,Ge.pointLightShadows.value=oe.state.pointShadow,Ge.hemisphereLights.value=oe.state.hemi,Ge.directionalShadowMap.value=oe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ge.spotShadowMap.value=oe.state.spotShadowMap,Ge.spotShadowMatrix.value=oe.state.spotShadowMatrix,Ge.pointShadowMap.value=oe.state.pointShadowMap,Ge.pointShadowMatrix.value=oe.state.pointShadowMatrix);const rt=Ve.getUniforms(),pi=_o.seqWithValue(rt.seq,Ge);return G.currentProgram=Ve,G.uniformsList=pi,Ve}function bc(T,U){const Y=w.get(T);Y.outputEncoding=U.outputEncoding,Y.instancing=U.instancing,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Jd(T,U,Y,G,oe){U.isScene!==!0&&(U=we),C.resetTextureUnits();const De=U.fog,Fe=G.isMeshStandardMaterial?U.environment:null,ze=A===null?m.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Ni,Be=(G.isMeshStandardMaterial?H:I).get(G.envMap||Fe),Xe=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!G.normalMap&&!!Y.attributes.tangent,Ge=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,pi=!!Y.morphAttributes.color,Vi=G.toneMapped?m.toneMapping:zn,Hi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,hn=Hi!==void 0?Hi.length:0,$e=w.get(G),Gi=h.state.lights;if(W===!0&&(q===!0||T!==S)){const pn=T===S&&G.id===E;_.setState(G,T,pn)}let ot=!1;G.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Gi.state.version||$e.outputEncoding!==ze||oe.isInstancedMesh&&$e.instancing===!1||!oe.isInstancedMesh&&$e.instancing===!0||oe.isSkinnedMesh&&$e.skinning===!1||!oe.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Be||G.fog===!0&&$e.fog!==De||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==_.numPlanes||$e.numIntersection!==_.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==Ve||$e.morphTargets!==Ge||$e.morphNormals!==rt||$e.morphColors!==pi||$e.toneMapping!==Vi||J.isWebGL2===!0&&$e.morphTargetsCount!==hn)&&(ot=!0):(ot=!0,$e.__version=G.version);let dn=$e.currentProgram;ot===!0&&(dn=na(G,U,oe));let Hn=!1,Br=!1,ia=!1;const At=dn.getUniforms(),zr=$e.uniforms;if(K.useProgram(dn.program)&&(Hn=!0,Br=!0,ia=!0),G.id!==E&&(E=G.id,Br=!0),Hn||S!==T){if(At.setValue(X,"projectionMatrix",T.projectionMatrix),J.logarithmicDepthBuffer&&At.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Br=!0,ia=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const pn=At.map.cameraPosition;pn!==void 0&&pn.setValue(X,de.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||oe.isSkinnedMesh)&&At.setValue(X,"viewMatrix",T.matrixWorldInverse)}if(oe.isSkinnedMesh){At.setOptional(X,oe,"bindMatrix"),At.setOptional(X,oe,"bindMatrixInverse");const pn=oe.skeleton;pn&&(J.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),At.setValue(X,"boneTexture",pn.boneTexture,C),At.setValue(X,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ra=Y.morphAttributes;return(ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&J.isWebGL2===!0)&&Q.update(oe,Y,G,dn),(Br||$e.receiveShadow!==oe.receiveShadow)&&($e.receiveShadow=oe.receiveShadow,At.setValue(X,"receiveShadow",oe.receiveShadow)),Br&&(At.setValue(X,"toneMappingExposure",m.toneMappingExposure),$e.needsLights&&Qd(zr,ia),De&&G.fog===!0&&me.refreshFogUniforms(zr,De),me.refreshMaterialUniforms(zr,G,z,B,ee),_o.upload(X,$e.uniformsList,zr,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_o.upload(X,$e.uniformsList,zr,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(X,"center",oe.center),At.setValue(X,"modelViewMatrix",oe.modelViewMatrix),At.setValue(X,"normalMatrix",oe.normalMatrix),At.setValue(X,"modelMatrix",oe.matrixWorld),dn}function Qd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ep(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,Y){w.get(T.texture).__webglTexture=U,w.get(T.depthTexture).__webglTexture=Y;const G=w.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const Y=w.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){A=T,v=U,x=Y;let G=!0;if(T){const Be=w.get(T);Be.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),G=!1):Be.__webglFramebuffer===void 0?C.setupRenderTarget(T):Be.__hasExternalTextures&&C.rebindTextures(T,w.get(T.texture).__webglTexture,w.get(T.depthTexture).__webglTexture)}let oe=null,De=!1,Fe=!1;if(T){const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(Fe=!0);const Xe=w.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(oe=Xe[U],De=!0):J.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?oe=w.get(T).__webglMultisampledFramebuffer:oe=Xe,R.copy(T.viewport),F.copy(T.scissor),b=T.scissorTest}else R.copy(N).multiplyScalar(z).floor(),F.copy(ie).multiplyScalar(z).floor(),b=k;if(K.bindFramebuffer(36160,oe)&&J.drawBuffers&&G&&K.drawBuffers(T,oe),K.viewport(R),K.scissor(F),K.setScissorTest(b),De){const Be=w.get(T.texture);X.framebufferTexture2D(36160,36064,34069+U,Be.__webglTexture,Y)}else if(Fe){const Be=w.get(T.texture),Xe=U||0;X.framebufferTextureLayer(36160,36064,Be.__webglTexture,Y||0,Xe)}E=-1},this.readRenderTargetPixels=function(T,U,Y,G,oe,De,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=w.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){K.bindFramebuffer(36160,ze);try{const Be=T.texture,Xe=Be.format,Ve=Be.type;if(Xe!==sn&&M.convert(Xe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===ms&&(se.has("EXT_color_buffer_half_float")||J.isWebGL2&&se.has("EXT_color_buffer_float"));if(Ve!==Fi&&M.convert(Ve)!==X.getParameter(35738)&&!(Ve===Ci&&(J.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-oe&&X.readPixels(U,Y,G,oe,M.convert(Xe),M.convert(Ve),De)}finally{const Be=A!==null?w.get(A).__webglFramebuffer:null;K.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(T,U,Y=0){const G=Math.pow(2,-Y),oe=Math.floor(U.image.width*G),De=Math.floor(U.image.height*G);C.setTexture2D(U,0),X.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,oe,De),K.unbindTexture()},this.copyTextureToTexture=function(T,U,Y,G=0){const oe=U.image.width,De=U.image.height,Fe=M.convert(Y.format),ze=M.convert(Y.type);C.setTexture2D(Y,0),X.pixelStorei(37440,Y.flipY),X.pixelStorei(37441,Y.premultiplyAlpha),X.pixelStorei(3317,Y.unpackAlignment),U.isDataTexture?X.texSubImage2D(3553,G,T.x,T.y,oe,De,Fe,ze,U.image.data):U.isCompressedTexture?X.compressedTexSubImage2D(3553,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Fe,U.mipmaps[0].data):X.texSubImage2D(3553,G,T.x,T.y,Fe,ze,U.image),G===0&&Y.generateMipmaps&&X.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(T,U,Y,G,oe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,ze=T.max.z-T.min.z+1,Be=M.convert(G.format),Xe=M.convert(G.type);let Ve;if(G.isData3DTexture)C.setTexture3D(G,0),Ve=32879;else if(G.isDataArrayTexture)C.setTexture2DArray(G,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment);const Ge=X.getParameter(3314),rt=X.getParameter(32878),pi=X.getParameter(3316),Vi=X.getParameter(3315),Hi=X.getParameter(32877),hn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;X.pixelStorei(3314,hn.width),X.pixelStorei(32878,hn.height),X.pixelStorei(3316,T.min.x),X.pixelStorei(3315,T.min.y),X.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?X.texSubImage3D(Ve,oe,U.x,U.y,U.z,De,Fe,ze,Be,Xe,hn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ve,oe,U.x,U.y,U.z,De,Fe,ze,Be,hn.data)):X.texSubImage3D(Ve,oe,U.x,U.y,U.z,De,Fe,ze,Be,Xe,hn),X.pixelStorei(3314,Ge),X.pixelStorei(32878,rt),X.pixelStorei(3316,pi),X.pixelStorei(3315,Vi),X.pixelStorei(32877,Hi),oe===0&&G.generateMipmaps&&X.generateMipmap(Ve),K.unbindTexture()},this.initTexture=function(T){C.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){v=0,x=0,A=null,K.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class jM extends pc{}jM.prototype.isWebGL1Renderer=!0;class Id extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class qM extends pt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class fi extends pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rf=new D,Df=new D,If=new ut,Za=new Zo,ro=new Ts;class XM extends Tt{constructor(e=new zt,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Rf.fromBufferAttribute(t,r-1),Df.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rf.distanceTo(Df);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;If.copy(r).invert(),Za.copy(e.ray).applyMatrix4(If);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,f=new D,h=new D,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let A=v,E=x-1;A<E;A+=d){const S=g.getX(A),R=g.getX(A+1);if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,R),Za.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let A=v,E=x-1;A<E;A+=d){if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,A+1),Za.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Of=new D,Ff=new D;class gs extends XM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Of.fromBufferAttribute(t,r),Ff.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Of.distanceTo(Ff);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fr extends pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nf=new ut,Cl=new Zo,so=new Ts,oo=new D;class Ka extends Tt{constructor(e=new zt,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Nf.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(Nf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,m=d;g<m;g++){const p=c.getX(g);oo.fromBufferAttribute(f,p),Bf(oo,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,m=d;g<m;g++)oo.fromBufferAttribute(f,g),Bf(oo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bf(n,e,t,i,r,s,o){const a=Cl.distanceSqToPoint(n);if(a<t){const l=new D;Cl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const ao=new D,lo=new D,Ja=new D,co=new Mn;class YM extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(go*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:p,c:v}=co;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),v.fromBufferAttribute(a,c[2]),co.getNormal(Ja),f[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const A=(x+1)%3,E=f[x],S=f[A],R=co[u[x]],F=co[u[A]],b=`${E}_${S}`,L=`${S}_${E}`;L in h&&h[L]?(Ja.dot(h[L].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(F.x,F.y,F.z)),h[L]=null):b in h||(h[b]={index0:c[x],index1:c[A],normal:Ja.clone()})}}for(const g in h)if(h[g]){const{index0:m,index1:p}=h[g];ao.fromBufferAttribute(a,m),lo.fromBufferAttribute(a,p),d.push(ao.x,ao.y,ao.z),d.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new ct(d,3))}}}class ZM extends pt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class KM extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ao extends pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JM extends Ao{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Od extends pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QM extends pt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eS extends pt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Al extends pt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class tS extends pt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fd extends fi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const nS={ShadowMaterial:ZM,SpriteMaterial:qM,RawShaderMaterial:KM,ShaderMaterial:kn,PointsMaterial:fr,MeshPhysicalMaterial:JM,MeshStandardMaterial:Ao,MeshPhongMaterial:Od,MeshToonMaterial:QM,MeshNormalMaterial:eS,MeshLambertMaterial:Al,MeshDepthMaterial:Rd,MeshDistanceMaterial:Dd,MeshBasicMaterial:Ko,MeshMatcapMaterial:tS,LineDashedMaterial:Fd,LineBasicMaterial:fi,Material:pt};pt.fromType=function(n){return new nS[n]};const zf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iS{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const rS=new iS;let Nd=class{constructor(e){this.manager=e!==void 0?e:rS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const Dn={};class sS extends Nd{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:i,onError:r});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){x();function x(){f.read().then(({done:A,value:E})=>{if(A)v.close();else{m+=E.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let R=0,F=u.length;R<F;R++){const b=u[R];b.onProgress&&b.onProgress(S)}v.enqueue(E),x()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{zf.add(e,c);const u=Dn[e];delete Dn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oS extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uf=new ut,kf=new D,Vf=new D;class aS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),Uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lS extends aS{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Po extends oS{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new lS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bd="\\[\\]\\.:\\/",mc="[^"+Bd+"]",cS="[^"+Bd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",mc);/(WCOD+)?/.source.replace("WCOD",cS);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc);class uS{constructor(e,t,i=0,r=1/0){this.ray=new Zo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Pl(e,this,i,t),i.sort(Hf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pl(e[r],this,i,t);return i.sort(Hf),i}}function Hf(n,e){return n.distance-e.distance}function Pl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Pl(r[s],e,t,!0)}}class Gf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fS extends gs{constructor(e=10,t=10,i=4473924,r=8947848){i=new Re(i),r=new Re(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=h===s?i:r;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const u=new zt;u.setAttribute("position",new ct(l,3)),u.setAttribute("color",new ct(c,3));const f=new fi({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}}class hS extends gs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new zt;r.setAttribute("position",new ct(t,3)),r.setAttribute("color",new ct(i,3));const s=new fi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Re,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const gn=new Uint32Array(512),vn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(gn[n]=0,gn[n|256]=32768,vn[n]=24,vn[n|256]=24):e<-14?(gn[n]=1024>>-e-14,gn[n|256]=1024>>-e-14|32768,vn[n]=-e-1,vn[n|256]=-e-1):e<=15?(gn[n]=e+15<<10,gn[n|256]=e+15<<10|32768,vn[n]=13,vn[n|256]=13):e<128?(gn[n]=31744,gn[n|256]=64512,vn[n]=24,vn[n|256]=24):(gn[n]=31744,gn[n|256]=64512,vn[n]=13,vn[n|256]=13)}const zd=new Uint32Array(2048),As=new Uint32Array(64),dS=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,zd[n]=e|t}for(let n=1024;n<2048;++n)zd[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)As[n]=n<<23;As[31]=1199570944;As[32]=2147483648;for(let n=33;n<63;++n)As[n]=2147483648+(n-32<<23);As[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(dS[n]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);const Wf={type:"change"},Qa={type:"start"},$f={type:"end"};class pS extends zi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",ae),this._domElementKeyEvents=M},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wf),i.update(),s=r.NONE},this.update=function(){const M=new D,ne=new Bi().setFromUnitVectors(e.up,new D(0,1,0)),ge=ne.clone().invert(),ve=new D,P=new Bi,_e=2*Math.PI;return function(){const Te=i.object.position;M.copy(Te).sub(i.target),M.applyQuaternion(ne),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&L(F()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Me=i.minAzimuthAngle,Pe=i.maxAzimuthAngle;return isFinite(Me)&&isFinite(Pe)&&(Me<-Math.PI?Me+=_e:Me>Math.PI&&(Me-=_e),Pe<-Math.PI?Pe+=_e:Pe>Math.PI&&(Pe-=_e),Me<=Pe?a.theta=Math.max(Me,Math.min(Pe,a.theta)):a.theta=a.theta>(Me+Pe)/2?Math.max(Me,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),M.setFromSpherical(a),M.applyQuaternion(ge),Te.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ve.distanceToSquared(i.object.position)>o||8*(1-P.dot(i.object.quaternion))>o?(i.dispatchEvent(Wf),ve.copy(i.object.position),P.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",O),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",re),i.domElement.removeEventListener("wheel",me),i.domElement.removeEventListener("pointermove",H),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ae)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gf,l=new Gf;let c=1;const u=new D;let f=!1;const h=new Le,d=new Le,g=new Le,m=new Le,p=new Le,v=new Le,x=new Le,A=new Le,E=new Le,S=[],R={};function F(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function L(M){l.theta-=M}function B(M){l.phi-=M}const z=function(){const M=new D;return function(ge,ve){M.setFromMatrixColumn(ve,0),M.multiplyScalar(-ge),u.add(M)}}(),xe=function(){const M=new D;return function(ge,ve){i.screenSpacePanning===!0?M.setFromMatrixColumn(ve,1):(M.setFromMatrixColumn(ve,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(ge),u.add(M)}}(),ce=function(){const M=new D;return function(ge,ve){const P=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;M.copy(_e).sub(i.target);let fe=M.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),z(2*ge*fe/P.clientHeight,i.object.matrix),xe(2*ve*fe/P.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(ge*(i.object.right-i.object.left)/i.object.zoom/P.clientWidth,i.object.matrix),xe(ve*(i.object.top-i.object.bottom)/i.object.zoom/P.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(M){i.object.isPerspectiveCamera?c/=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*M)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(M){i.object.isPerspectiveCamera?c*=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/M)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(M){h.set(M.clientX,M.clientY)}function $(M){x.set(M.clientX,M.clientY)}function W(M){m.set(M.clientX,M.clientY)}function q(M){d.set(M.clientX,M.clientY),g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ne=i.domElement;L(2*Math.PI*g.x/ne.clientHeight),B(2*Math.PI*g.y/ne.clientHeight),h.copy(d),i.update()}function ee(M){A.set(M.clientX,M.clientY),E.subVectors(A,x),E.y>0?N(b()):E.y<0&&ie(b()),x.copy(A),i.update()}function he(M){p.set(M.clientX,M.clientY),v.subVectors(p,m).multiplyScalar(i.panSpeed),ce(v.x,v.y),m.copy(p),i.update()}function le(M){M.deltaY<0?ie(b()):M.deltaY>0&&N(b()),i.update()}function de(M){let ne=!1;switch(M.code){case i.keys.UP:ce(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:ce(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:ce(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:ce(-i.keyPanSpeed,0),ne=!0;break}ne&&(M.preventDefault(),i.update())}function we(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const M=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);h.set(M,ne)}}function Ae(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const M=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);m.set(M,ne)}}function X(){const M=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,ge=Math.sqrt(M*M+ne*ne);x.set(0,ge)}function V(){i.enableZoom&&X(),i.enablePan&&Ae()}function se(){i.enableZoom&&X(),i.enableRotate&&we()}function J(M){if(S.length==1)d.set(M.pageX,M.pageY);else{const ge=be(M),ve=.5*(M.pageX+ge.x),P=.5*(M.pageY+ge.y);d.set(ve,P)}g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ne=i.domElement;L(2*Math.PI*g.x/ne.clientHeight),B(2*Math.PI*g.y/ne.clientHeight),h.copy(d)}function K(M){if(S.length===1)p.set(M.pageX,M.pageY);else{const ne=be(M),ge=.5*(M.pageX+ne.x),ve=.5*(M.pageY+ne.y);p.set(ge,ve)}v.subVectors(p,m).multiplyScalar(i.panSpeed),ce(v.x,v.y),m.copy(p)}function Ee(M){const ne=be(M),ge=M.pageX-ne.x,ve=M.pageY-ne.y,P=Math.sqrt(ge*ge+ve*ve);A.set(0,P),E.set(0,Math.pow(A.y/x.y,i.zoomSpeed)),N(E.y),x.copy(A)}function w(M){i.enableZoom&&Ee(M),i.enablePan&&K(M)}function C(M){i.enableZoom&&Ee(M),i.enableRotate&&J(M)}function I(M){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",H),i.domElement.addEventListener("pointerup",Z)),j(M),M.pointerType==="touch"?y(M):pe(M))}function H(M){i.enabled!==!1&&(M.pointerType==="touch"?_(M):te(M))}function Z(M){Q(M),S.length===0&&(i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",H),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent($f),s=r.NONE}function re(M){Q(M)}function pe(M){let ne;switch(M.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case $i.DOLLY:if(i.enableZoom===!1)return;$(M),s=r.DOLLY;break;case $i.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;W(M),s=r.PAN}else{if(i.enableRotate===!1)return;k(M),s=r.ROTATE}break;case $i.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;k(M),s=r.ROTATE}else{if(i.enablePan===!1)return;W(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qa)}function te(M){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(M);break;case r.DOLLY:if(i.enableZoom===!1)return;ee(M);break;case r.PAN:if(i.enablePan===!1)return;he(M);break}}function me(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Qa),le(M),i.dispatchEvent($f))}function ae(M){i.enabled===!1||i.enablePan===!1||de(M)}function y(M){switch(ue(M),S.length){case 1:switch(i.touches.ONE){case ji.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case ji.PAN:if(i.enablePan===!1)return;Ae(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ji.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(),s=r.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qa)}function _(M){switch(ue(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;J(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;K(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;w(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(M),i.update();break;default:s=r.NONE}}function O(M){i.enabled!==!1&&M.preventDefault()}function j(M){S.push(M)}function Q(M){delete R[M.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==M.pointerId){S.splice(ne,1);return}}function ue(M){let ne=R[M.pointerId];ne===void 0&&(ne=new Le,R[M.pointerId]=ne),ne.set(M.pageX,M.pageY)}function be(M){const ne=M.pointerId===S[0].pointerId?S[1]:S[0];return R[ne.pointerId]}i.domElement.addEventListener("contextmenu",O),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",re),i.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}class gc extends EventTarget{constructor(t){super();Ce(this,"scene");Ce(this,"camera");Ce(this,"renderer");Ce(this,"orbitControls");Ce(this,"cameraRotatedEvent",new Event("camera_rotated"));this.container=t,this.scene=new Id,this.scene.background=new Re(12635345),this.camera=new Nt(40,this.container.offsetWidth/this.container.offsetHeight,.1,1e3),this.renderer=new pc,this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),t.appendChild(this.renderer.domElement);const i=new Po(16777215,1);i.position.set(20,50,20),i.lookAt(0,0,0),this.scene.add(i);const r=new Po(13421772,1);r.position.set(-20,50,-20),r.lookAt(0,0,0),this.scene.add(r),this.camera.position.x=13,this.camera.position.y=18,this.camera.position.z=13,this.camera.lookAt(new D(0,0,0)),this.addDebug(),this.orbitControls=this.addOrbitControls(),this.orbitControls.addEventListener("change",this.dispatchEvent.bind(this,this.cameraRotatedEvent))}animate(){document.body.contains(this.container)&&(this.updateSize(),requestAnimationFrame(this.animate.bind(this)),this.orbitControls.update(),this.renderer.render(this.scene,this.camera),window.graphics=this)}dump(){console.log("scene",this.scene)}addDebug(){{const t=new hS(20);this.scene.add(t)}}addOrbitControls(){const t=new pS(this.camera,this.renderer.domElement);return t.enableDamping=!0,t.dampingFactor=.05,t}updateSize(){this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}}Ce(gc,"DEBUG",!0);function vc(n){return n[Math.floor(Math.random()*n.length)]}function vs(n,e="Assertion failed"){if(!n)throw console.groupCollapsed("assertBoolean"),console.trace(),console.groupEnd(),e}async function mS(n){return await new Promise(e=>setTimeout(e,n))}class Qt{constructor(e){Ce(this,"value",[]);this.templatesCount=e,this.value=new Array(e).fill(0)}isAllZeros(){return this.countOnes()===0}countOnes(){return this.value.reduce((e,t)=>e+t,0)}clone(){const e=new Qt(this.templatesCount);return e.value=[...this.value],e}getIntersection(e){vs(this.value.length===e.value.length);const t=new Qt(this.templatesCount);for(let i=0;i<t.value.length;i++)t.value[i]=Math.min(this.value[i],e.value[i]);return t}fillOnes(){this.value.fill(1)}getNonZeroIndices(){return this.value.reduce((e,t,i)=>(t===1&&e.push(i),e),[])}getRandomNonZeroIndex(){const e=this.getNonZeroIndices();return vc(e)}on(e){this.setAt(e,1)}off(e){this.setAt(e,0)}setAt(e,t){this.value[e]=t}getAt(e){return this.value[e]}print(){return this.value.join(" ")}}var ni=(n=>(n.px="px",n.nx="nx",n.py="py",n.ny="ny",n.pz="pz",n.nz="nz",n))(ni||{});const Wr=["meshes/corner.obj","meshes/wall.obj"];class gS{constructor(){Ce(this,"iterations",0);Ce(this,"templates",[])}parse(e){this.templates.splice(0);const t=[];t.push(...this.getDefaultTemplates()),t.push(...this.getSrcTemplates());const i=t.length;this.templates.push(...t.map(r=>({...r,id:r.src,px:new Qt(i),nx:new Qt(i),py:new Qt(i),ny:new Qt(i),pz:new Qt(i),nz:new Qt(i)})));for(const r of Object.values(ni))this.templates[0][r].on(0);e.model.forEach(r=>{this.parseCell(e,r)}),this.addZeros(),console.log("parser::iterations",this.iterations),console.log("parser::templates",this.templates)}getTemplates(){return this.templates}getSrcTemplates(){const e=[];for(let t=0;t<Wr.length;++t)e.push({src:Wr[t],rotation:0}),e.push({src:Wr[t],rotation:1}),e.push({src:Wr[t],rotation:2}),e.push({src:Wr[t],rotation:3});return e}findTemplateIndex(e,t){const i=this.templates.findIndex(({src:r,rotation:s})=>r===e&&s===t);return i===-1?null:i}getDefaultTemplates(){return["void"].map(e=>({src:e,id:e,rotation:0}))}parseCell(e,t){const i=t.position;this.parsePair(e,"px",t,i.clone().add(new D(1,0,0))),this.parsePair(e,"nx",t,i.clone().add(new D(-1,0,0))),this.parsePair(e,"py",t,i.clone().add(new D(0,1,0))),this.parsePair(e,"ny",t,i.clone().add(new D(0,-1,0))),this.parsePair(e,"pz",t,i.clone().add(new D(0,0,1))),this.parsePair(e,"nz",t,i.clone().add(new D(0,0,-1)))}parsePair(e,t,i,r){const s=e.getCell(r);s?this.mateTwo(i.src,i.rotation,s.src,s.rotation,t):this.mateTwo(i.src,i.rotation,"жопа",0,t)}mateTwo(e,t,i,r,s){for(let o=0;o<4;++o){const a=this.rotateKey(s,-o),l=this.reverseKey(a),c=this.findTemplateIndex(e,this.addRotate(t,o)),u=this.findTemplateIndex(i,this.addRotate(r,o))??0;this.templates[c][a].on(u),this.templates[u][l].on(c),this.iterations++}}addZeros(){}addRotate(e,t){return(4+e+t)%4}rotateKey(e,t){if(["py","ny"].includes(e))return e;const i=["px","pz","nx","nz"];let r=i.findIndex(s=>s===e);if(r===-1)throw"Can't rotate index";return i[this.addRotate(r,t)]}reverseKey(e){switch(e){case"px":return"nx";case"nx":return"px";case"py":return"ny";case"ny":return"py";case"pz":return"nz";case"nz":return"pz"}}}const Ii=new gS;class _c{constructor(){Ce(this,"x",0);Ce(this,"y",0);Ce(this,"z",0);Ce(this,"dead",!1);Ce(this,"dirty",!1);Ce(this,"enthropy",0);Ce(this,"mask");Ce(this,"templates",[]);this.mask=new Qt(Ii.getTemplates().length),this.mask.fillOnes(),this.enthropy=this.mask.countOnes(),this.templates=Ii.getTemplates()}getNonZeroIndices(){return this.mask.getNonZeroIndices()}collapse(){const e=this.getNonZeroIndices(),t=vc(e)??0;this.collapseTo(t)}collapseTo(e){this.dead||(vs(e<this.templates.length),vs(this.mask.getAt(e)===1),this.mask=new Qt(Ii.getTemplates().length),this.mask.setAt(e,1),this.enthropy=this.mask.countOnes())}collapseToId(e){const t=this.templates.findIndex(i=>i.id===e);this.collapseTo(t)}die(){this.dead=!0}tryGetOnlyState(){if(this.enthropy!=1)throw"attempt to get only state of element with enthropy > 2";return this.mask.getNonZeroIndices()[0]}countStates(){return this.mask.countOnes()}clone(){const e=new _c;return e.mask=this.mask.clone(),e.enthropy=this.mask.countOnes(),e.dead=this.dead,e.x=this.x,e.y=this.y,e.z=this.z,e}updateEnthropy(){this.enthropy=this.mask.countOnes(),this.enthropy<1&&this.die()}print(){let e=`[${this.x.toString().padStart(2," ")}, ${this.y.toString().padStart(2," ")}] `;return e+=`[${this.mask.print()}]`,e+=` entr: ${this.enthropy}`,e}}const Jt=class Jt{constructor(){Ce(this,"instances",[])}fill(){for(let e=0;e<Jt.MAX_HORIZONTAL;++e){this.instances[e]=[];for(let t=0;t<Jt.MAX_VERTICAL;++t){this.instances[e][t]=[];for(let i=0;i<Jt.MAX_HORIZONTAL;++i){const r=new _c;r.x=e,r.y=t,r.z=i,(e===0||i===0||e===Jt.MAX_HORIZONTAL-1||i===Jt.MAX_HORIZONTAL-1)&&(r.collapseToId("void"),r.dirty=!0),(t===0||t===Jt.MAX_VERTICAL-1)&&(r.collapseToId("void"),r.dirty=!0),this.instances[e][t][i]=r}}}}eachElement(e){this.eachElementByIndex((t,i,r)=>e(this.instances[t][i][r]))}eachElementByIndex(e){for(let t=0;t<this.instances.length;++t)for(let i=0;i<this.instances[t].length;++i)for(let r=0;r<this.instances[t][i].length;++r)e(t,i,r)}print(){const e=[];for(let t=0;t<this.instances.length;++t){e[t]=[];for(let i=0;i<this.instances[t].length;++i)for(let r=0;r<this.instances[t][i].length;++r)e[t][i][r]={...this.instances[t][i][r]}}console.log(e)}printFinishedSlice(e){var i;vs(e>=0&&e<Jt.MAX_HORIZONTAL);let t="";for(let r=0;r<this.instances.length;++r){for(let s=0;s<this.instances[r].length;++s){const o=this.instances[r][s][e];vs(o.enthropy<=1),t+=`	${((i=Ii.getTemplates()[o.tryGetOnlyState()])==null?void 0:i.id)??"dead"}`}t+=`
`}console.log(t)}getElementsAdjacentTo(e){function t(r,s){s[0]&&r.push(s)}const i=[];return t(i,[this.tryGetElementAt(e.x+1,e.y,e.z),ni.px]),t(i,[this.tryGetElementAt(e.x-1,e.y,e.z),ni.nx]),t(i,[this.tryGetElementAt(e.x,e.y+1,e.z),ni.py]),t(i,[this.tryGetElementAt(e.x,e.y-1,e.z),ni.ny]),t(i,[this.tryGetElementAt(e.x,e.y,e.z+1),ni.pz]),t(i,[this.tryGetElementAt(e.x,e.y,e.z-1),ni.nz]),i}tryGetElementAt(e,t,i){return e>=0&&e<this.instances.length&&t>=0&&t<this.instances[e].length&&i>=0&&i<this.instances[e][t].length?this.instances[e][t][i]:null}getNextDirtyElement(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let i=0;i<this.instances[e][t].length;++i){const r=this.instances[e][t][i];if(r.dirty)return r}return null}validataSolved(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let i=0;i<this.instances[e][t].length;++i)if(this.instances[e][t][i].enthropy>1)return!1;return!0}cloneState(){return this.instances.map(t=>t.map(i=>i.map(r=>r.clone())))}replaceState(e){console.log("set.instances[1][1][1].z",this.instances[1][1][1].z),this.instances=e.map(t=>t.map(i=>i.map(r=>r.clone()))),console.log("set.instances[1][1][1].z",this.instances[1][1][1].z)}};Ce(Jt,"MAX_HORIZONTAL",9),Ce(Jt,"MAX_VERTICAL",5);let xr=Jt;const jf=5e3,Ro=class Ro extends EventTarget{constructor(t){super();Ce(this,"iterations",0);Ce(this,"runFlag",!1);Ce(this,"history",[]);this.set=t}async run(){this.runFlag=!0,this.propagate();const t=this.getNextElement();this.history.push({instancePos:{x:t.x,y:t.y,z:t.z},leftStates:t.mask.clone(),state:this.set.cloneState(),retries:0});let i=0;for(;this.runFlag;){if(i++>jf)throw"Guard overflow";if(this.history.length===0)throw"No history left";const r=this.history[this.history.length-1],s=r.leftStates.getRandomNonZeroIndex();try{const a=this.set.tryGetElementAt(r.instancePos.x,r.instancePos.y,r.instancePos.z);a.collapseTo(s),a.dirty=!0,this.notify(r),await mS(10),this.propagate()}catch{this.checkHistory(r,s);continue}console.groupCollapsed("this.set.instances[1][1][1].z",this.set.instances[1][1][1].z),console.trace(),console.groupEnd();const o=this.getNextElement();if(!o){console.log("yay!!");const a=new Event("solving_finished",{bubbles:!0});this.dispatchEvent(a);break}this.history.push({instancePos:{x:o.x,y:o.y,z:o.z},leftStates:o.mask.clone(),state:this.set.cloneState(),retries:0})}}notify(t){const i=new CustomEvent("element_collapsed",{detail:{current:new D(t.instancePos.x,t.instancePos.y,t.instancePos.z),set:this.set}});this.dispatchEvent(i)}stop(){this.runFlag=!1}checkHistory(t,i){if(t.leftStates.setAt(i,0),t.retries++,t.leftStates.countOnes()===0){this.goBackInHistory();return}this.set.replaceState(t.state)}goBackInHistory(){let t=1;const i=.1;for(let r=1;r<this.history.length-1;++r)t+=Math.random()<i?1:0;this.history.splice(this.history.length-t,t)}getLastHistoryStep(){return this.history[this.history.length-1]}propagate(){let t,i=0;for(;t=this.set.getNextDirtyElement();){if(i++>jf)throw"Guard overflow";this.propagateElement(t)}}propagateElement(t){this.set.getElementsAdjacentTo(t).forEach(([r,s])=>{this.filterTargetStates(t,r,s)}),t.dirty=!1}filterTargetStates(t,i,r){const s=i.enthropy,o=Ii.getTemplates();for(let a=0;a<o.length;a++){let l=!1;if(i.mask.getAt(a)===1)for(let c=0;c<o.length;++c){if(t.mask.getAt(c)===1){const u=o[c][r];l||(l=u.getAt(a)===1)}Ro.checks++}if(!l&&(i.mask.setAt(a,0),i.updateEnthropy(),i.enthropy===0))throw"Backtrack"}s!==i.enthropy&&this.set.getElementsAdjacentTo(i).forEach(([l,c])=>{l.dirty=!0})}getNextElement(){let t=1/0,i=[];if(this.set.eachElement(s=>{s.dead||s.enthropy===1||(s.enthropy<t&&(t=s.enthropy,i=[s]),s.enthropy===t&&i.push(s))}),i.length<1)return null;const r=vc(i);if(r.z===0)debugger;return r}printHistoryItem(){const t=this.history[this.history.length-1],i=this.history.length-1;console.log(`hist# ${String(i).padStart(2," ")} at [`+String(t.instancePos.x).padStart(2," ")+", "+String(t.instancePos.y).padStart(2," ")+`] [${t.leftStates.print()}]`)}};Ce(Ro,"checks",0);let Lo=Ro;const vS=/^[og]\s*(.+)?/,_S=/^mtllib /,xS=/^usemtl /,yS=/^usemap /,qf=new D,el=new D,Xf=new D,Yf=new D,Gt=new D,uo=new Re;function bS(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;qf.fromArray(r,e),el.fromArray(r,t),Xf.fromArray(r,i),Gt.subVectors(Xf,el),Yf.subVectors(qf,el),Gt.cross(Yf),Gt.normalize(),s.push(Gt.x,Gt.y,Gt.z),s.push(Gt.x,Gt.y,Gt.z),s.push(Gt.x,Gt.y,Gt.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),d=this.parseVertexIndex(i,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(r!==void 0&&r!==""){const g=this.uvs.length;f=this.parseUVIndex(r,g),h=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class Ud extends Nd{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new sS(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new bS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r="",s="",o=0,a=[];const l=typeof"".trimLeft=="function";for(let f=0,h=i.length;f<h;f++)if(r=i[f],r=l?r.trimLeft():r.trim(),o=r.length,o!==0&&(s=r.charAt(0),s!=="#"))if(s==="v"){const d=r.split(/\s+/);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(uo.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(uo.r,uo.g,uo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(s==="f"){const g=r.slice(1).trim().split(/\s+/),m=[];for(let v=0,x=g.length;v<x;v++){const A=g[v];if(A.length>0){const E=A.split("/");m.push(E)}}const p=m[0];for(let v=1,x=m.length-1;v<x;v++){const A=m[v],E=m[v+1];t.addFace(p[0],A[0],E[0],p[1],A[1],E[1],p[2],A[2],E[2])}}else if(s==="l"){const d=r.substring(1).trim().split(" ");let g=[];const m=[];if(r.indexOf("/")===-1)g=d;else for(let p=0,v=d.length;p<v;p++){const x=d[p].split("/");x[0]!==""&&g.push(x[0]),x[1]!==""&&m.push(x[1])}t.addLineGeometry(g,m)}else if(s==="p"){const g=r.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((a=vS.exec(r))!==null){const d=(" "+a[0].slice(1).trim()).slice(1);t.startObject(d)}else if(xS.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(_S.test(r))t.materialLibraries.push(r.substring(7).trim());else if(yS.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(a=r.split(" "),a.length>1){const g=a[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();const c=new si;if(c.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const d=t.objects[f],g=d.geometry,m=d.materials,p=g.type==="Line",v=g.type==="Points";let x=!1;if(g.vertices.length===0)continue;const A=new zt;A.setAttribute("position",new ct(g.vertices,3)),g.normals.length>0&&A.setAttribute("normal",new ct(g.normals,3)),g.colors.length>0&&(x=!0,A.setAttribute("color",new ct(g.colors,3))),g.hasUVIndices===!0&&A.setAttribute("uv",new ct(g.uvs,2));const E=[];for(let R=0,F=m.length;R<F;R++){const b=m[R],L=b.name+"_"+b.smooth+"_"+x;let B=t.materials[L];if(this.materials!==null){if(B=this.materials.create(b.name),p&&B&&!(B instanceof fi)){const z=new fi;pt.prototype.copy.call(z,B),z.color.copy(B.color),B=z}else if(v&&B&&!(B instanceof fr)){const z=new fr({size:10,sizeAttenuation:!1});pt.prototype.copy.call(z,B),z.color.copy(B.color),z.map=B.map,B=z}}B===void 0&&(p?B=new fi:v?B=new fr({size:1,sizeAttenuation:!1}):B=new Od,B.name=b.name,B.flatShading=!b.smooth,B.vertexColors=x,t.materials[L]=B),E.push(B)}let S;if(E.length>1){for(let R=0,F=m.length;R<F;R++){const b=m[R];A.addGroup(b.groupStart,b.groupCount,R)}p?S=new gs(A,E):v?S=new Ka(A,E):S=new jt(A,E)}else p?S=new gs(A,E[0]):v?S=new Ka(A,E[0]):S=new jt(A,E[0]);S.name=d.name,c.add(S)}else if(t.vertices.length>0){const f=new fr({size:1,sizeAttenuation:!1}),h=new zt;h.setAttribute("position",new ct(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new ct(t.colors,3)),f.vertexColors=!0);const d=new Ka(h,f);c.add(d)}return c}}class MS{constructor(e){Ce(this,"TILE_SIZE",2);Ce(this,"group");Ce(this,"loader",new Ud);Ce(this,"material",new Al({color:16777215}));Ce(this,"collapsingMaterial",new Al({color:6736998,transparent:!0,opacity:.5}));Ce(this,"rendering",!1);Ce(this,"collapsingMesh");Ce(this,"cache",new Map);this.graphics=e,this.group=new si,this.collapsingMesh=new jt(new Ui(this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE),this.collapsingMaterial),this.collapsingMesh.visible=!1,this.graphics.scene.add(this.collapsingMesh),this.graphics.scene.add(this.group)}async tryRender(e){if(this.rendering)return;this.rendering=!0,this.group.clear();const t=[];e.eachElement(i=>t.push(i));for(let i of t)await this.tryRenderELement(i);this.rendering=!1}async tryRenderELement(e){e.enthropy!==1||e.dead||await this.addMesh(e)}async loadMesh(e){let t=this.cache.get(e);return t||(t=await new Promise(i=>this.loader.load(e,i)),this.cache.set(e,t)),t.clone(!0)}async addMesh(e){const t=Ii.getTemplates()[e.tryGetOnlyState()];if(!t||t.src==="void")return;const i=await this.loadMesh(t.src);i.rotateY(t.rotation*Math.PI/2),i.position.copy(this.convertPosition(e.x,e.y,e.z)),i.material=this.material,this.group.add(i)}convertPosition(e,t,i){return new D((e-xr.MAX_HORIZONTAL/2)*this.TILE_SIZE,(t-xr.MAX_VERTICAL/2)*this.TILE_SIZE,(i-xr.MAX_HORIZONTAL/2)*this.TILE_SIZE)}handleEvent(e){this.tryRender(e.detail.set),this.collapsingMesh.visible=!0,e.detail.current&&this.collapsingMesh.position.copy(this.convertPosition(e.detail.current.x,e.detail.current.y,e.detail.current.z))}handleFinishedEvent(){this.collapsingMesh.visible=!1}}let cr,rs,xo;function SS(){if(!rs.validataSolved())throw"validataion not passed";console.log("checks",Lo.checks.toLocaleString()),xo.tryRender(rs)}async function wS(n){const e=new gc(n);rs=new xr,cr=new Lo(rs),xo=new MS(e),cr.addEventListener("element_collapsed",t=>xo.handleEvent(t)),cr.addEventListener("solving_finished",SS),cr.addEventListener("solving_finished",()=>xo.handleFinishedEvent()),rs.fill(),e.animate(),await cr.run()}function ES(){cr.stop()}const TS=Ir({__name:"Generate",setup(n){const e=Nn();return ws(()=>{wS(e.value)}),Bh(()=>{ES()}),(t,i)=>{const r=Oi("router-link");return Ke(),Rt(Vt,null,[st(r,{to:"/editor",class:"btn editor-button"},{default:ri(()=>[Go("Editor")]),_:1}),dt("div",{class:"canvas",ref_key:"canvas",ref:e},null,512)],64)}}});const CS=jo(TS,[["__scopeId","data-v-7359526f"]]);class AS{constructor(){Ce(this,"objLoader",new Ud)}async loadMesh(e){let t;try{t=await new Promise((s,o)=>this.objLoader.load(e,s,()=>{},o));const i=new Fr().setFromObject(t),r=new D;if(i.getSize(r),r.length()===0)return null}catch{return null}return t}}const kd=new AS,ii=class ii{constructor(){Ce(this,"renderer",new pc);Ce(this,"camera",new Nt(40,ii.WIDTH/ii.HEIGHT,.1,1e3));Ce(this,"scene",new Id);Ce(this,"group",new si);this.renderer.setSize(ii.WIDTH,ii.HEIGHT),this.group.name="Container";const e=new Po(16777215,1);e.position.set(20,50,20),e.lookAt(0,0,0),this.scene.add(e);const t=new Po(13421772,1);t.position.set(-20,50,-20),t.lookAt(0,0,0),this.scene.add(t),this.camera.position.copy(new D(2,10,8)),this.camera.lookAt(new D(0,0,0)),this.scene.add(this.group)}async render(e){this.group.clear();const t=await kd.loadMesh(e);if(!t)return null;this.group.add(t),document.body.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera);const i=this.renderer.domElement.toDataURL();return document.body.removeChild(this.renderer.domElement),i}};Ce(ii,"WIDTH",512),Ce(ii,"HEIGHT",512);let Ll=ii;const PS=new Ll;function LS(n,e=20){let t=0;return(...r)=>{clearTimeout(t),t=window.setTimeout(()=>n(...r),e)}}class RS extends EventTarget{constructor(){super();Ce(this,"model",[]);Ce(this,"event",new Event("model_updated",{bubbles:!0}));this.addEventListener("model_updated",LS(this.serialize.bind(this),1e3)),window.setTimeout(this.load.bind(this),100)}addItem(t,i){const r=this.getCell(t);r?r.src=i:this.model.push({position:t,src:i,rotation:0}),this.dispatchEvent(this.event)}rotateItem(t){const i=this.getCell(t);i&&(i.rotation=(i.rotation+1)%4),this.dispatchEvent(this.event)}deleteCell(t){const i=this.model.findIndex(r=>r.position.equals(t));i!==-1&&this.model.splice(i,1),this.dispatchEvent(this.event)}getCell(t){return this.model.find(i=>i.position.equals(t))??null}serialize(){localStorage.setItem("editor-model-data",JSON.stringify(this.model))}load(){const t=localStorage.getItem("editor-model-data");t&&(this.model=JSON.parse(t),this.model.forEach(i=>{i.position=new D(i.position.x,i.position.y,i.position.z)}),this.dispatchEvent(this.event),Ii.parse(this))}}const hr=class hr extends EventTarget{constructor(t){super();Ce(this,"GRID_SIZE",2);Ce(this,"rayCaster",new uS);Ce(this,"dragPlane");Ce(this,"selectMesh");Ce(this,"editable",new si);Ce(this,"state",{selected:new D});Ce(this,"activeLayer",0);Ce(this,"model",new RS);Ce(this,"gridHelper");this.graphics=t,this.dragPlane=this.addDragPlane(),this.selectMesh=this.addSelectMesh();const i=40;this.gridHelper=new fS(i*this.GRID_SIZE,i),this.graphics.scene.add(this.gridHelper),this.graphics.scene.add(this.editable),this.graphics.renderer.domElement.addEventListener("mousedown",s=>this.onMouseDown(s));const r=this.renderComponents.bind(this);this.model.addEventListener("model_updated",r),this.addEventListener("layer_changed",r)}addItem(t){this.model.addItem(this.state.selected,t)}rotateItem(){this.model.rotateItem(this.state.selected)}deleteCell(){this.model.deleteCell(this.state.selected)}async renderComponents(){this.editable.clear();for(let t=-40;t<=40;++t)for(let i=-40;i<=40;++i)for(let r=-40;r<=40;++r){const s=this.model.getCell(new D(t,i,r));if(s){const o=await kd.loadMesh(s.src);i!==this.activeLayer?o.children[0].material=hr.DIMMED_MATERIAL:o.children[0].material=hr.ACTIVE_MATERIAL,o&&(o.position.copy(new D(t*this.GRID_SIZE+this.GRID_SIZE/2,i*this.GRID_SIZE+this.GRID_SIZE/2,r*this.GRID_SIZE+this.GRID_SIZE/2)),o.rotateY(s.rotation*Math.PI/2),this.editable.add(o))}}}onMouseDown(t){if(t.button!==0)return;const i=this.getPoint(t),r=Math.floor(i.x/this.GRID_SIZE),s=Math.floor(i.z/this.GRID_SIZE),o=this.state.selected.y;this.changeSelected(new D(r,o,s))}changeSelected(t){this.state.selected=t,this.updateSelectedPosition();const i=this.model.getCell(this.state.selected);this.dispatchEvent(new CustomEvent("selected",{detail:i}))}updateSelectedPosition(){this.selectMesh.position.copy(new D(this.state.selected.x*this.GRID_SIZE+this.GRID_SIZE/2,this.state.selected.y*this.GRID_SIZE+this.GRID_SIZE/2,this.state.selected.z*this.GRID_SIZE+this.GRID_SIZE/2)),this.dragPlane.position.y=this.state.selected.y*this.GRID_SIZE,this.gridHelper.position.y=this.state.selected.y*this.GRID_SIZE}getPoint(t){const i=this.graphics.renderer.getContext().canvas.getBoundingClientRect(),r=new Le;r.x=(t.clientX-i.left)/(i.right-i.left)*2-1,r.y=-((t.clientY-i.top)/(i.bottom-i.top))*2+1,this.rayCaster.setFromCamera(r,this.graphics.camera);const s=this.rayCaster.intersectObjects([this.dragPlane]);return s.length!==0?s[0].point:new D(0,0,0)}addDragPlane(){const t=new Jo(200,200),i=new jt(t,new Ko({color:16777215,transparent:!0,opacity:.5}));return i.rotateOnAxis(new D(1,0,0),-Math.PI/2),i.name="drag plane",i.visible=!1,this.graphics.scene.add(i),i}addSelectMesh(){const t=new Ui(2,2,2),i=new Fd({color:65280,linewidth:2,dashSize:.1,gapSize:.05}),r=new gs(new YM(t),i);return r.computeLineDistances(),this.graphics.scene.add(r),r}setLayer(t){this.activeLayer=t,this.changeSelected(new D(this.state.selected.x,t,this.state.selected.z)),this.dispatchEvent(new CustomEvent("layer_changed"))}};Ce(hr,"DIMMED_MATERIAL",new Ao({color:6710886,transparent:!0,opacity:.8})),Ce(hr,"ACTIVE_MATERIAL",new Ao({color:16777215}));let Rl=hr;const xt=[];for(let n=0;n<256;n++)xt[n]=(n<16?"0":"")+n.toString(16);function DS(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}class IS{constructor(e,t,i,r=new Le){Ce(this,"guid");this.graphics=e,this.reference=t,this.dom=i,this.offset=r,this.guid=DS()}update(){if(!this.reference)return;const e=this.reference.position.clone().project(this.graphics.camera),t=.5*this.graphics.renderer.domElement.offsetWidth,i=.5*this.graphics.renderer.domElement.offsetHeight,r=new Le;r.x=e.x*t+t+this.offset.x,r.y=-(e.y*i)+i+this.offset.y,this.dom.style.top=`${r.y}px`,this.dom.style.left=`${r.x}px`}}class OS{constructor(e){Ce(this,"elements",[]);this.graphics=e}create(e,t,i=new Le){const r=new IS(this.graphics,e,t,i);return this.elements.push(r),r.guid}update(){this.elements.forEach(e=>e.update())}remove(e){const t=this.elements.findIndex(i=>i.guid===e);if(t===-1)throw`Cound not remove ui element with guid ${e}`;this.elements.splice(t,1)}}class FS extends EventTarget{constructor(t,i){super();Ce(this,"container");Ce(this,"rotateButton");Ce(this,"event",new Event("rotate_clicked"));Ce(this,"screenSpacePositionedElementController");this.graphics=t,this.editor=i,this.screenSpacePositionedElementController=new OS(this.graphics),this.container=document.querySelector(".canvas"),this.rotateButton=document.createElement("button"),this.rotateButton.classList.add("rotate__button"),this.rotateButton.style.position="absolute",this.container.appendChild(this.rotateButton),this.rotateButton.addEventListener("click",()=>this.dispatchEvent(this.event)),this.screenSpacePositionedElementController.create(this.editor.selectMesh,this.rotateButton,new Le(40,40)),this.graphics.addEventListener("camera_rotated",()=>this.screenSpacePositionedElementController.update()),this.editor.addEventListener("selected",r=>{this.screenSpacePositionedElementController.update(),this.rotateButton.classList.toggle("hidden",!r.detail)})}}let Jn;function Vd(){function n(s){const o=new gc(s);Jn=new Rl(o),new FS(o,Jn).addEventListener("rotate_clicked",()=>Jn.rotateItem()),o.animate()}function e(s){Jn.addItem(s)}function t(){Jn.rotateItem()}function i(){Jn.deleteCell()}function r(s){Jn.setLayer(s)}return{editor:Jn,createEditor:n,addObject:e,rotateObject:t,deleteCell:i,setLayer:r}}function NS(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Xm()?ws(n):e?n():Jl(n)}var BS=0;function ki(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Nn(!1),i=Nn(n),r=Nn(null),s=lt.isClient()?window.document:void 0,o=e.document,a=o===void 0?s:o,l=e.immediate,c=l===void 0?!0:l,u=e.manual,f=u===void 0?!1:u,h=e.name,d=h===void 0?"style_".concat(++BS):h,g=e.id,m=g===void 0?void 0:g,p=e.media,v=p===void 0?void 0:p,x=e.nonce,A=x===void 0?void 0:x,E=function(){},S=function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var B=L.name||d,z=L.id||m,xe=L.nonce||A;r.value=a.querySelector('style[data-primevue-style-id="'.concat(B,'"]'))||a.getElementById(z)||a.createElement("style"),r.value.isConnected||(i.value=b||n,lt.setAttributes(r.value,{type:"text/css",id:z,media:v,nonce:xe}),a.head.appendChild(r.value),lt.setAttribute(r.value,"data-primevue-style-id",d),lt.setAttributes(r.value,L)),!t.value&&(E=Yr(i,function(ce){r.value.textContent=ce},{immediate:!0}),t.value=!0)}},R=function(){!a||!t.value||(E(),lt.isExist(r.value)&&a.head.removeChild(r.value),t.value=!1)};return c&&!f&&NS(S),{id:m,name:d,css:i,unload:R,load:S,isLoaded:ql(t)}}var zS=`
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
`,US=ki(zS,{name:"base",manual:!0}),Hd=US.load;function _s(n){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_s(n)}function Zf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function et(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Zf(Object(t),!0).forEach(function(i){Dl(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Zf(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Dl(n,e,t){return e=kS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kS(n){var e=VS(n,"string");return _s(e)==="symbol"?e:String(e)}function VS(n,e){if(_s(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(_s(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var HS={},GS=`
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
`,WS=`
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
`,$S=`
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
`,jS=`
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
`,qS=`
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
`.concat(GS,`
`).concat(WS,`
`).concat($S,`
`).concat(jS,`
`),XS=ki(qS,{name:"common",manual:!0}),YS=XS.load,ZS=ki("",{name:"global",manual:!0}),KS=ZS.load,ea={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var t,i;YS(void 0,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}),this.$options.css&&this.$css.loadStyle(void 0,{nonce:(i=this.$config)===null||i===void 0||(i=i.csp)===null||i===void 0?void 0:i.nonce})}}}},beforeCreate:function(){var e,t,i,r,s,o,a,l,c,u,f,h=(e=this.pt)===null||e===void 0?void 0:e._usept,d=h?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=h?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=g||d)===null||r===void 0||(r=r.hooks)===null||r===void 0||(s=r.onBeforeCreate)===null||s===void 0||s.call(r);var m=(o=this.$config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,p=m?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,v=m?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=v||p)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(f=u.onBeforeCreate)===null||f===void 0||f.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;Hd(void 0,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),i==null||i()}},_loadGlobalStyles:function(){var e,t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ue.isNotEmpty(t)&&KS(t,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ue.toFlatCase(t).split("."),s=r.shift();return s?Ue.isObject(e)?this._getOptionValue(Ue.getItemValue(e[Object.keys(e).find(function(o){return Ue.toFlatCase(o)===s})||""],i),r.join("."),i):void 0:Ue.getItemValue(e,i)},_getPTValue:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s="data-pc-",o=/./g.test(t)&&!!i[t.split(".")[0]],a=this._getPropValue("ptOptions")||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,f=u===void 0?!1:u,h=r?o?this._useGlobalPT(this._getPTClassValue,t,i):this._useDefaultPT(this._getPTClassValue,t,i):void 0,d=o?void 0:this._usePT(this._getPT(e,this.$name),this._getPTClassValue,t,et(et({},i),{},{global:h||{}})),g=t!=="transition"&&et(et({},t==="root"&&Dl({},"".concat(s,"name"),Ue.toFlatCase(this.$.type.name))),{},Dl({},"".concat(s,"section"),Ue.toFlatCase(t)));return c||!c&&d?f?Ze(h,d,g):et(et(et({},h),d),g):et(et({},d),g)},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Ue.isString(e)||Ue.isArray(e)?{class:e}:e},_getPT:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=e==null?void 0:e._usept,o=function(l){var c,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=r?r(l):l,h=Ue.toFlatCase(i),d=Ue.toFlatCase(t.$name);return(c=u?h!==d?f==null?void 0:f[h]:void 0:f==null?void 0:f[h])!==null&&c!==void 0?c:f};return Ue.isNotEmpty(s)?{_usept:s,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,t,i,r){var s=function(g){return t(g,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var o=e._usept||{},a=o.mergeSections,l=a===void 0?!0:a,c=o.mergeProps,u=c===void 0?!1:c,f=s(e.originalValue),h=s(e.value);return f===void 0&&h===void 0?void 0:Ue.isString(h)?h:Ue.isString(f)?f:l||!l&&h?u?Ze(f,h):et(et({},f),h):h}return s(e)},_useGlobalPT:function(e,t,i){return this._usePT(this.globalPT,e,t,i)},_useDefaultPT:function(e,t,i){return this._usePT(this.defaultPT,e,t,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,et(et({},this.$params),t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,et({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$css.classes,e,et(et({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var r=this._getOptionValue(this.$css.inlineStyles,e,et(et({},this.$params),i)),s=this._getOptionValue(HS,e,et(et({},this.$params),i));return[s,r]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return Ue.getItemValue(i,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return t._getOptionValue(i,t.$name,et({},t.$params))||Ue.getItemValue(i,et({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){return{instance:this,props:this.$props,state:this.$data,parentInstance:this.$parentInstance}},$css:function(){return et(et({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$css),this.$options.css)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name}}},JS=`
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
`,QS={root:function(e){var t=e.props,i=e.instance;return["p-badge p-component",{"p-badge-no-gutter":Ue.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":Ue.isEmpty(t.value)&&!i.$slots.default,"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warning":t.severity==="warning","p-badge-danger":t.severity==="danger"}]}},ew=ki(JS,{name:"badge",manual:!0}),tw=ew.load,nw={name:"BaseBadge",extends:ea,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},css:{classes:QS,loadStyle:tw},provide:function(){return{$parentInstance:this}}},Gd={name:"Badge",extends:nw};function iw(n,e,t,i,r,s){return Ke(),Rt("span",Ze({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"badge"}),[Fn(n.$slots,"default",{},function(){return[Go(ch(n.value),1)]})],16)}Gd.render=iw;var rw=`
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
`,sw=ki(rw,{name:"baseicon",manual:!0}),ow=sw.load,xc={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},beforeMount:function(){var e;ow(void 0,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},methods:{pti:function(){var e=Ue.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e}}},computed:{$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config}}},Wd={name:"SpinnerIcon",extends:xc,computed:{pathId:function(){return"pv_icon_clip_".concat(j0())}}},aw=["clipPath"],lw=dt("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),cw=[lw],uw=["id"],fw=dt("rect",{width:"14",height:"14",fill:"white"},null,-1),hw=[fw];function dw(n,e,t,i,r,s){return Ke(),Rt("svg",Ze({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),[dt("g",{clipPath:"url(#".concat(s.pathId,")")},cw,8,aw),dt("defs",null,[dt("clipPath",{id:"".concat(s.pathId)},hw,8,uw)])],16)}Wd.render=dw;function xs(n){"@babel/helpers - typeof";return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xs(n)}function Kf(n,e){return vw(n)||gw(n,e)||mw(n,e)||pw()}function pw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mw(n,e){if(n){if(typeof n=="string")return Jf(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Jf(n,e)}}function Jf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function gw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function vw(n){if(Array.isArray(n))return n}function Qf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function nt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qf(Object(t),!0).forEach(function(i){Il(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Qf(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Il(n,e,t){return e=_w(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _w(n){var e=xw(n,"string");return xs(e)==="symbol"?e:String(e)}function xw(n,e){if(xs(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(xs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Je={_getMeta:function(){return[Ue.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Ue.getItemValue(Ue.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ue.toFlatCase(t).split("."),s=r.shift();return s?Ue.isObject(e)?Je._getOptionValue(Ue.getItemValue(e[Object.keys(e).find(function(o){return Ue.toFlatCase(o)===s})||""],i),r.join("."),i):void 0:Ue.getItemValue(e,i)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var x=Je._getOptionValue.apply(Je,arguments);return Ue.isString(x)||Ue.isArray(x)?{class:x}:x},l="data-pc-",c=((e=t.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||{},u=c.mergeSections,f=u===void 0?!0:u,h=c.mergeProps,d=h===void 0?!1:h,g=o?Je._useDefaultPT(t,t.defaultPT,a,r,s):void 0,m=Je._usePT(t,Je._getPT(i,t.$name),a,r,nt(nt({},s),{},{global:g||{}})),p=nt(nt({},r==="root"&&Il({},"".concat(l,"name"),Ue.toFlatCase(t.$name))),{},Il({},"".concat(l,"section"),Ue.toFlatCase(r)));return f||!f&&m?d?Ze(g,m,p):nt(nt(nt({},g),m),p):nt(nt({},m),p)},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=e==null?void 0:e._usept,s=function(a){var l,c=i?i(a):a,u=Ue.toFlatCase(t);return(l=c==null?void 0:c[u])!==null&&l!==void 0?l:c};return Ue.isNotEmpty(r)?{_usept:r,originalValue:s(e.originalValue),value:s(e.value)}:s(e)},_usePT:function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,s=function(g){return t(g,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var o=e._usept||{},a=o.mergeSections,l=a===void 0?!0:a,c=o.mergeProps,u=c===void 0?!1:c,f=s(e.originalValue),h=s(e.value);return f===void 0&&h===void 0?void 0:Ue.isString(h)?h:Ue.isString(f)?f:l||!l&&h?u?Ze(f,h):nt(nt({},f),h):h}return s(e)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return Je._usePT(e,t,i,r,s)},_hook:function(e,t,i,r,s,o){var a,l,c,u="on".concat(Ue.toCapitalCase(t)),f=r==null||(a=r.instance)===null||a===void 0||(a=a.$primevue)===null||a===void 0?void 0:a.config,h=i==null?void 0:i.$instance,d=Je._usePT(h,Je._getPT(r==null||(l=r.value)===null||l===void 0?void 0:l.pt,e),Je._getOptionValue,"hooks.".concat(u)),g=Je._useDefaultPT(h,f==null||(c=f.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[e],Je._getOptionValue,"hooks.".concat(u)),m={el:i,binding:r,vnode:s,prevVnode:o};d==null||d(h,m),g==null||g(h,m)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=function(s,o,a,l,c){var u,f,h;o._$instances=o._$instances||{};var d=a==null||(u=a.instance)===null||u===void 0||(u=u.$primevue)===null||u===void 0?void 0:u.config,g=o._$instances[e]||{},m=Ue.isEmpty(g)?nt(nt({},t),t==null?void 0:t.methods):{};o._$instances[e]=nt(nt({},g),{},{$name:e,$host:o,$binding:a,$el:g.$el||void 0,$css:nt({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},t==null?void 0:t.css),$config:d,defaultPT:Je._getPT(d==null?void 0:d.pt,void 0,function(p){var v;return p==null||(v=p.directives)===null||v===void 0?void 0:v[e]}),isUnstyled:o.unstyled!==void 0?o.unstyled:d==null?void 0:d.unstyled,ptm:function(){var v,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Je._getPTValue(o.$instance,(v=o.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,x,nt({},A))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Je._getPTValue(o.$instance,v,x,A,!1)},cx:function(){var v,x,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=o.$instance)!==null&&v!==void 0&&v.isUnstyled?void 0:Je._getOptionValue((x=o.$instance)===null||x===void 0||(x=x.$css)===null||x===void 0?void 0:x.classes,A,nt({},E))},sx:function(){var v,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return A?Je._getOptionValue((v=o.$instance)===null||v===void 0||(v=v.$css)===null||v===void 0?void 0:v.inlineStyles,x,nt({},E)):void 0}},m),o.$instance=o._$instances[e],(f=(h=o.$instance)[s])===null||f===void 0||f.call(h,o,a,l,c),Je._hook(e,s,o,a,l,c)};return{created:function(s,o,a,l){i("created",s,o,a,l)},beforeMount:function(s,o,a,l){var c,u,f,h,d,g=o==null||(c=o.instance)===null||c===void 0||(c=c.$primevue)===null||c===void 0?void 0:c.config;Hd(void 0,{nonce:g==null||(u=g.csp)===null||u===void 0?void 0:u.nonce}),!((f=s.$instance)!==null&&f!==void 0&&f.isUnstyled)&&((h=s.$instance)===null||h===void 0||(h=h.$css)===null||h===void 0||h.loadStyle(void 0,{nonce:g==null||(d=g.csp)===null||d===void 0?void 0:d.nonce})),i("beforeMount",s,o,a,l)},mounted:function(s,o,a,l){i("mounted",s,o,a,l)},beforeUpdate:function(s,o,a,l){i("beforeUpdate",s,o,a,l)},updated:function(s,o,a,l){i("updated",s,o,a,l)},beforeUnmount:function(s,o,a,l){i("beforeUnmount",s,o,a,l)},unmounted:function(s,o,a,l){i("unmounted",s,o,a,l)}}},extend:function(){var e=Je._getMeta.apply(Je,arguments),t=Kf(e,2),i=t[0],r=t[1];return nt({extend:function(){var o=Je._getMeta.apply(Je,arguments),a=Kf(o,2),l=a[0],c=a[1];return Je.extend(l,nt(nt(nt({},r),r==null?void 0:r.methods),c))}},Je._extend(i,r))}},yw=`
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
`,bw={root:"p-ink"},Mw=ki(yw,{name:"ripple",manual:!0}),Sw=Mw.load,ww=Je.extend({css:{classes:bw,loadStyle:Sw}});function Ew(n){return Pw(n)||Aw(n)||Cw(n)||Tw()}function Tw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cw(n,e){if(n){if(typeof n=="string")return Ol(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ol(n,e)}}function Aw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Pw(n){if(Array.isArray(n))return Ol(n)}function Ol(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var Lw=ww.extend("ripple",{mounted:function(e,t){var i=t.instance.$primevue;if(i&&i.config&&i.config.ripple){var r;e.unstyled=i.config.unstyled||((r=t.value)===null||r===void 0?void 0:r.unstyled)||!1,this.create(e),this.bindEvents(e)}e.setAttribute("data-pd-ripple",!0)},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(e){var t=lt.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!e.unstyled&&this.cx("root"),onAnimationEnd:this.onAnimationEnd,"p-bind":this.ptm("root")});e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=e.currentTarget,i=this.getInk(t);if(!(!i||getComputedStyle(i,null).display==="none")){if(!t.unstyled&&lt.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!lt.getHeight(i)&&!lt.getWidth(i)){var r=Math.max(lt.getOuterWidth(t),lt.getOuterHeight(t));i.style.height=r+"px",i.style.width=r+"px"}var s=lt.getOffset(t),o=e.pageX-s.left+document.body.scrollTop-lt.getWidth(i)/2,a=e.pageY-s.top+document.body.scrollLeft-lt.getHeight(i)/2;i.style.top=a+"px",i.style.left=o+"px",!t.unstyled&&lt.addClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.unstyled&&lt.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!e.currentTarget.unstyled&&lt.removeClass(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Ew(e.children).find(function(t){return lt.getAttribute(t,"data-pc-name")==="ripple"}):void 0}}});function ys(n){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ys(n)}function Qn(n,e,t){return e=Rw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Rw(n){var e=Dw(n,"string");return ys(e)==="symbol"?e:String(e)}function Dw(n,e){if(ys(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(ys(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Iw={root:function(e){var t,i=e.instance,r=e.props;return["p-button p-component",(t={"p-button-icon-only":i.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-disabled":i.$attrs.disabled||i.$attrs.disabled===""||r.loading,"p-button-loading":r.loading,"p-button-loading-label-only":r.loading&&!i.hasIcon&&r.label,"p-button-link":r.link},Qn(t,"p-button-".concat(r.severity),r.severity),Qn(t,"p-button-raised",r.raised),Qn(t,"p-button-rounded",r.rounded),Qn(t,"p-button-text",r.text),Qn(t,"p-button-outlined",r.outlined),Qn(t,"p-button-sm",r.size==="small"),Qn(t,"p-button-lg",r.size==="large"),Qn(t,"p-button-plain",r.plain),t)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(e){var t=e.props;return["p-button-icon",{"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label,"p-button-icon-top":t.iconPos==="top"&&t.label,"p-button-icon-bottom":t.iconPos==="bottom"&&t.label}]},label:"p-button-label"},Ow={name:"BaseButton",extends:ea,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},css:{classes:Iw},provide:function(){return{$parentInstance:this}}},$d={name:"Button",extends:Ow,methods:{getPTOptions:function(e){var t,i;return this.ptm(e,{parent:{props:(t=this.$parent)===null||t===void 0?void 0:t.$props,state:(i=this.$parent)===null||i===void 0?void 0:i.$data},context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:Wd,Badge:Gd},directives:{ripple:Lw}},Fw=["aria-label","disabled","data-pc-severity"];function Nw(n,e,t,i,r,s){var o=Oi("SpinnerIcon"),a=Oi("Badge"),l=Sm("ripple");return fm((Ke(),Rt("button",Ze({class:n.cx("root"),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},s.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":n.severity}),[Fn(n.$slots,"default",{},function(){return[n.loading?Fn(n.$slots,"loadingicon",{key:0,class:os([n.cx("loadingIcon"),n.cx("icon")])},function(){return[n.loadingIcon?(Ke(),Rt("span",Ze({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Ke(),Wt(o,Ze({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):Fn(n.$slots,"icon",{key:1,class:os([n.cx("icon")])},function(){return[n.icon?(Ke(),Rt("span",Ze({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):Qr("",!0)]}),dt("span",Ze({class:n.cx("label")},n.ptm("label")),ch(n.label||" "),17),n.badge?(Ke(),Wt(a,Ze({key:2,value:n.badge,class:n.badgeClass,unstyled:n.unstyled},n.ptm("badge")),null,16,["value","class","unstyled"])):Qr("",!0)]})],16,Fw)),[[l]])}$d.render=Nw;var jd={name:"AngleDownIcon",extends:xc},Bw=dt("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1),zw=[Bw];function Uw(n,e,t,i,r,s){return Ke(),Rt("svg",Ze({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),zw,16)}jd.render=Uw;var qd={name:"AngleUpIcon",extends:xc},kw=dt("path",{d:"M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",fill:"currentColor"},null,-1),Vw=[kw];function Hw(n,e,t,i,r,s){return Ke(),Rt("svg",Ze({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),Vw,16)}qd.render=Hw;var Gw={root:function(e){var t=e.instance,i=e.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large"}]}},Ww={name:"BaseInputText",extends:ea,props:{modelValue:null,size:{type:String,default:null}},css:{classes:Gw},provide:function(){return{$parentInstance:this}}},Xd={name:"InputText",extends:Ww,emits:["update:modelValue"],methods:{onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},$w=["value"];function jw(n,e,t,i,r,s){return Ke(),Rt("input",Ze({class:n.cx("root"),value:n.modelValue,onInput:e[0]||(e[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},n.ptm("root",s.ptmParams),{"data-pc-name":"inputtext"}),null,16,$w)}Xd.render=jw;var qw=`
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
`,Xw={root:function(e){var t=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused,"p-inputnumber-buttons-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":i.showButtons&&i.buttonLayout==="vertical"}]},input:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-up",{"p-disabled":i.showButtons&&i.max!==null&&t.maxBoundry()}]},decrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-down",{"p-disabled":i.showButtons&&i.min!==null&&t.minBoundry()}]}},Yw=ki(qw,{name:"inputnumber",manual:!0}),Zw=Yw.load,Kw={name:"BaseInputNumber",extends:ea,props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},incrementButtonProps:{type:null,default:null},decrementButtonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:Xw,loadStyle:Zw},provide:function(){return{$parentInstance:this}}};function bs(n){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bs(n)}function eh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function th(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?eh(Object(t),!0).forEach(function(i){Jw(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):eh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Jw(n,e,t){return e=Qw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Qw(n){var e=e1(n,"string");return bs(e)==="symbol"?e:String(e)}function e1(n,e){if(bs(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(bs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function t1(n){return s1(n)||r1(n)||i1(n)||n1()}function n1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i1(n,e){if(n){if(typeof n=="string")return Fl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fl(n,e)}}function r1(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function s1(n){if(Array.isArray(n))return Fl(n)}function Fl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var Yd={name:"InputNumber",extends:Kw,emits:["update:modelValue","input","focus","blur"],numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue:function(e){this.d_modelValue=e},locale:function(e,t){this.updateConstructParser(e,t)},localeMatcher:function(e,t){this.updateConstructParser(e,t)},mode:function(e,t){this.updateConstructParser(e,t)},currency:function(e,t){this.updateConstructParser(e,t)},currencyDisplay:function(e,t){this.updateConstructParser(e,t)},useGrouping:function(e,t){this.updateConstructParser(e,t)},minFractionDigits:function(e,t){this.updateConstructParser(e,t)},maxFractionDigits:function(e,t){this.updateConstructParser(e,t)},suffix:function(e,t){this.updateConstructParser(e,t)},prefix:function(e,t){this.updateConstructParser(e,t)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=t1(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),t=new Map(e.map(function(i,r){return[i,r]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return t.get(i)}},updateConstructParser:function(e,t){e!==t&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,th(th({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var t=new Intl.NumberFormat(this.locale,this.getOptions()),i=t.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;var i=+t;return isNaN(i)?null:i}return null},repeat:function(e,t,i){var r=this;if(!this.readonly){var s=t||500;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,40,i)},s),this.spin(e,i)}},spin:function(e,t){if(this.$refs.input){var i=this.step*t,r=this.parseValue(this.$refs.input.$el.value)||0,s=this.validateValue(r+i);this.updateInput(s,null,"spin"),this.updateModel(e,s),this.handleOnInput(e,r,s)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}var t=e.target.selectionStart,i=e.target.selectionEnd,r=e.target.value,s=null;switch(e.altKey&&e.preventDefault(),e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(r.charAt(t-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(r.charAt(t))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":s=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(s),this.$refs.input.$el.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),t===i){var o=r.charAt(t-1),a=this.getDecimalCharIndexes(r),l=a.decimalCharIndex,c=a.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(o)){var u=this.getDecimalLength(r);if(this._group.test(o))this._group.lastIndex=0,s=r.slice(0,t-2)+r.slice(t-1);else if(this._decimal.test(o))this._decimal.lastIndex=0,u?this.$refs.input.$el.setSelectionRange(t-1,t-1):s=r.slice(0,t-1)+r.slice(t);else if(l>0&&t>l){var f=this.isDecimalMode()&&(this.minFractionDigits||0)<u?"":"0";s=r.slice(0,t-1)+f+r.slice(t)}else c===1?(s=r.slice(0,t-1)+"0"+r.slice(t),s=this.parseValue(s)>0?s:""):s=r.slice(0,t-1)+r.slice(t)}this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(r,t,i),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===i){var h=r.charAt(t),d=this.getDecimalCharIndexes(r),g=d.decimalCharIndex,m=d.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(h)){var p=this.getDecimalLength(r);if(this._group.test(h))this._group.lastIndex=0,s=r.slice(0,t)+r.slice(t+2);else if(this._decimal.test(h))this._decimal.lastIndex=0,p?this.$refs.input.$el.setSelectionRange(t+1,t+1):s=r.slice(0,t)+r.slice(t+1);else if(g>0&&t>g){var v=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";s=r.slice(0,t)+v+r.slice(t+1)}else m===1?(s=r.slice(0,t)+"0"+r.slice(t+1),s=this.parseValue(s)>0?s:""):s=r.slice(0,t)+r.slice(t+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(r,t,i),this.updateValue(e,s,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break}}},onInputKeyPress:function(e){if(!this.readonly){e.preventDefault();var t=e.which||e.keyCode,i=String.fromCharCode(t),r=this.isDecimalSign(i),s=this.isMinusSign(i);(48<=t&&t<=57||s||r)&&this.insert(e,i,{isDecimalSign:r,isMinusSign:s})}},onPaste:function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("Text");if(t){var i=this.parseValue(t);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),r=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:r}},getCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var r=e.search(this._suffix);this._suffix.lastIndex=0;var s=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:i,suffixCharIndex:r,currencyCharIndex:s}},insert:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},r=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&r!==-1)){var s=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),l=this.getCharIndexes(a),c=l.decimalCharIndex,u=l.minusCharIndex,f=l.suffixCharIndex,h=l.currencyCharIndex,d;if(i.isMinusSign)s===0&&(d=a,(u===-1||o!==0)&&(d=this.insertText(a,t,0,o)),this.updateValue(e,d,t,"insert"));else if(i.isDecimalSign)c>0&&s===c?this.updateValue(e,a,t,"insert"):c>s&&c<o?(d=this.insertText(a,t,s,o),this.updateValue(e,d,t,"insert")):c===-1&&this.maxFractionDigits&&(d=this.insertText(a,t,s,o),this.updateValue(e,d,t,"insert"));else{var g=this.numberFormat.resolvedOptions().maximumFractionDigits,m=s!==o?"range-insert":"insert";if(c>0&&s>c){if(s+t.length-(c+1)<=g){var p=h>=s?h-1:f>=s?f:a.length;d=a.slice(0,s)+t+a.slice(s+t.length,p)+a.slice(p),this.updateValue(e,d,t,m)}}else d=this.insertText(a,t,s,o),this.updateValue(e,d,t,m)}}},insertText:function(e,t,i,r){var s=t==="."?t:t.split(".");if(s.length===2){var o=e.slice(i,r).search(this._decimal);return this._decimal.lastIndex=0,o>0?e.slice(0,i)+this.formatValue(t)+e.slice(r):e||this.formatValue(t)}else return r-i===e.length?this.formatValue(t):i===0?t+e.slice(r):r===e.length?e.slice(0,i)+t:e.slice(0,i)+t+e.slice(r)},deleteRange:function(e,t,i){var r;return i-t===e.length?r="":t===0?r=e.slice(i):i===e.length?r=e.slice(0,t):r=e.slice(0,t)+e.slice(i),r},initCursor:function(){var e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,i=t.length,r=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-s;var o=t.charAt(e);if(this.isNumeralChar(o))return e+s;for(var a=e-1;a>=0;)if(o=t.charAt(a),this.isNumeralChar(o)){r=a+s;break}else a--;if(r!==null)this.$refs.input.$el.setSelectionRange(r+1,r+1);else{for(a=e;a<i;)if(o=t.charAt(a),this.isNumeralChar(o)){r=a+s;break}else a++;r!==null&&this.$refs.input.$el.setSelectionRange(r,r)}return r||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==lt.getSelection()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,t,i,r){var s=this.$refs.input.$el.value,o=null;t!=null&&(o=this.parseValue(t),o=!o&&!this.allowEmpty?0:o,this.updateInput(o,i,r,t),this.handleOnInput(e,s,o))},handleOnInput:function(e,t,i){this.isValueChanged(t,i)&&this.$emit("input",{originalEvent:e,value:i,formattedValue:t})},isValueChanged:function(e,t){if(t===null&&e!==null)return!0;if(t!=null){var i=typeof e=="string"?this.parseValue(e):e;return t!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,t,i,r){t=t||"";var s=this.$refs.input.$el.value,o=this.formatValue(e),a=s.length;if(o!==r&&(o=this.concatValues(o,r)),a===0){this.$refs.input.$el.value=o,this.$refs.input.$el.setSelectionRange(0,0);var l=this.initCursor(),c=l+t.length;this.$refs.input.$el.setSelectionRange(c,c)}else{var u=this.$refs.input.$el.selectionStart,f=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=o;var h=o.length;if(i==="range-insert"){var d=this.parseValue((s||"").slice(0,u)),g=d!==null?d.toString():"",m=g.split("").join("(".concat(this.groupChar,")?")),p=new RegExp(m,"g");p.test(o);var v=t.split("").join("(".concat(this.groupChar,")?")),x=new RegExp(v,"g");x.test(o.slice(p.lastIndex)),f=p.lastIndex+x.lastIndex,this.$refs.input.$el.setSelectionRange(f,f)}else if(h===a)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(f+1,f+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(f-1,f-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(f,f);else if(i==="delete-back-single"){var A=s.charAt(f-1),E=s.charAt(f),S=a-h,R=this._group.test(E);R&&S===1?f+=1:!R&&this.isNumeralChar(A)&&(f+=-1*S+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(f,f)}else if(s==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var F=this.initCursor(),b=F+t.length+1;this.$refs.input.$el.setSelectionRange(b,b)}else f=f+(h-a),this.$refs.input.$el.setSelectionRange(f,f)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,t){if(e&&t){var i=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+t.slice(i):e}return e},getDecimalLength:function(e){if(e){var t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==lt.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){this.focused=!1;var t=e.target,i=this.validateValue(this.parseValue(t.value));this.$emit("blur",{originalEvent:e,value:t.value}),t.value=this.formatValue(i),t.setAttribute("aria-valuenow",i),this.updateModel(e,i)},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_modelValue>=this.max},minBoundry:function(){return this.d_modelValue<=this.min}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{INInputText:Xd,INButton:$d,AngleUpIcon:qd,AngleDownIcon:jd}};function Ms(n){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ms(n)}function nh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function _n(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nh(Object(t),!0).forEach(function(i){o1(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):nh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function o1(n,e,t){return e=a1(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a1(n){var e=l1(n,"string");return Ms(e)==="symbol"?e:String(e)}function l1(n,e){if(Ms(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(Ms(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function c1(n,e,t,i,r,s){var o=Oi("INInputText"),a=Oi("INButton");return Ke(),Rt("span",Ze({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"inputnumber"}),[st(o,Ze({ref:"input",id:n.inputId,role:"spinbutton",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:s.formattedValue,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,onInput:s.onUserInput,onKeydown:s.onInputKeyDown,onKeypress:s.onInputKeyPress,onPaste:s.onPaste,onClick:s.onInputClick,onFocus:s.onInputFocus,onBlur:s.onInputBlur},_n(_n({},n.inputProps),n.ptm("input")),{unstyled:n.unstyled,"data-pc-section":"input"}),null,16,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","disabled","readonly","placeholder","aria-labelledby","aria-label","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","unstyled"]),n.showButtons&&n.buttonLayout==="stacked"?(Ke(),Rt("span",Ze({key:0,class:n.cx("buttonGroup")},n.ptm("buttonGroup")),[st(a,Ze({class:[n.cx("incrementButton"),n.incrementButtonClass]},Bs(s.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.incrementButtonProps),n.ptm("incrementButton")),{unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:ri(function(){return[Fn(n.$slots,"incrementbuttonicon",{},function(){return[(Ke(),Wt(Ns(n.incrementButtonIcon?"span":"AngleUpIcon"),Ze({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"]),st(a,Ze({class:[n.cx("decrementButton"),n.decrementButtonClass]},Bs(s.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.decrementButtonProps),n.ptm("decrementButton")),{unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:ri(function(){return[Fn(n.$slots,"decrementbuttonicon",{},function(){return[(Ke(),Wt(Ns(n.decrementButtonIcon?"span":"AngleDownIcon"),Ze({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])],16)):Qr("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(Ke(),Wt(a,Ze({key:1,class:[n.cx("incrementButton"),n.incrementButtonClass]},Bs(s.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.incrementButtonProps),n.ptm("incrementButton")),{unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:ri(function(){return[Fn(n.$slots,"incrementbuttonicon",{},function(){return[(Ke(),Wt(Ns(n.incrementButtonIcon?"span":"AngleUpIcon"),Ze({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):Qr("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(Ke(),Wt(a,Ze({key:2,class:[n.cx("decrementButton"),n.decrementButtonClass]},Bs(s.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.decrementButtonProps),n.ptm("decrementButton")),{unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:ri(function(){return[Fn(n.$slots,"decrementbuttonicon",{},function(){return[(Ke(),Wt(Ns(n.decrementButtonIcon?"span":"AngleDownIcon"),Ze({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):Qr("",!0)],16)}Yd.render=c1;const u1=n=>(nm("data-v-f04e2ccc"),n=n(),im(),n),f1={class:"wrapper"},h1={class:"objects"},d1=u1(()=>dt("div",{class:"object"},"void",-1)),p1={class:"object"},m1=["src","data-src"],g1=Ir({__name:"EditorMenu",setup(n){const e=Nn([]),{addObject:t,rotateObject:i,deleteCell:r,setLayer:s}=Vd(),o=Nn(0);ws(async()=>{const u=["void","meshes/corner.obj","meshes/wall.obj"];for(let f=0;f<u.length;++f){const h=u[f],d=await PS.render(h);d&&e.value.push({data:d,src:h})}});function a(u){const h=u.target.getAttribute("data-src");t(h)}function l(){i()}function c(){r()}return(u,f)=>{const h=Oi("router-link");return Ke(),Rt("div",f1,[dt("div",h1,[d1,(Ke(!0),Rt(Vt,null,wm(e.value,d=>(Ke(),Rt("div",p1,[dt("img",{src:d.data,class:"object-image","data-src":d.src,onClick:a},null,8,m1)]))),256))]),dt("button",{class:"btn",onClick:l,style:{display:"none"}},"Rotate"),dt("button",{class:"btn",onClick:c},"Delete"),st(ai(Yd),{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=d=>o.value=d),inputId:"minmax-buttons",mode:"decimal",showButtons:"",min:-40,max:40,onInput:f[1]||(f[1]=d=>ai(s)(parseInt(String(d.value))))},null,8,["modelValue"]),st(h,{to:"generate",class:"btn"},{default:ri(()=>[Go("Generate")]),_:1})])}}});const v1=jo(g1,[["__scopeId","data-v-f04e2ccc"]]),_1={class:"layout"},x1=Ir({__name:"EditorLayout",setup(n){return(e,t)=>(Ke(),Rt("div",_1,[dt("aside",null,[st(v1)]),dt("main",null,[Fn(e.$slots,"default",{},void 0,!0)])]))}});const y1=jo(x1,[["__scopeId","data-v-736f7da2"]]),ih=Ir({__name:"Editor",setup(n){const{createEditor:e}=Vd(),t=Nn();return ws(()=>e(t.value)),(i,r)=>(Ke(),Wt(y1,null,{default:ri(()=>[dt("div",{class:"canvas",ref_key:"canvas",ref:t},null,512)]),_:1}))}});const b1=[{path:"/",component:ih},{path:"/editor",component:ih},{path:"/generate",component:CS}],M1=L0({history:jg(),routes:b1}),S1=Cg(),ta=Sg(tv);ta.use(M1);ta.use(S1);ta.use(J0);ta.mount("#app");
