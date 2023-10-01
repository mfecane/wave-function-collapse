var ep=Object.defineProperty;var tp=(n,e,t)=>e in n?ep(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ae=(n,e,t)=>(tp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Nl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Qe={},gr=[],on=()=>{},np=()=>!1,ip=/^on[^a-z]/,Do=n=>ip.test(n),zl=n=>n.startsWith("onUpdate:"),vt=Object.assign,Bl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rp=Object.prototype.hasOwnProperty,He=(n,e)=>rp.call(n,e),Ie=Array.isArray,vr=n=>Io(n)==="[object Map]",nf=n=>Io(n)==="[object Set]",Ne=n=>typeof n=="function",ft=n=>typeof n=="string",Ul=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",rf=n=>tt(n)&&Ne(n.then)&&Ne(n.catch),sf=Object.prototype.toString,Io=n=>sf.call(n),sp=n=>Io(n).slice(8,-1),of=n=>Io(n)==="[object Object]",Vl=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fo=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},op=/-(\w)/g,Tn=Oo(n=>n.replace(op,(e,t)=>t?t.toUpperCase():"")),ap=/\B([A-Z])/g,Dr=Oo(n=>n.replace(ap,"-$1").toLowerCase()),Fo=Oo(n=>n.charAt(0).toUpperCase()+n.slice(1)),po=Oo(n=>n?`on${Fo(n)}`:""),os=(n,e)=>!Object.is(n,e),sa=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},bo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},lp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Mc;const tl=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?fp(i):kl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ft(n))return n;if(tt(n))return n}}const cp=/;(?![^(]*\))/g,up=/:([^]+)/,hp=/\/\*[^]*?\*\//g;function fp(n){const e={};return n.replace(hp,"").split(cp).forEach(t=>{if(t){const i=t.split(up);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function as(n){let e="";if(ft(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=as(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const dp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pp=Nl(dp);function af(n){return!!n||n===""}const lf=n=>ft(n)?n:n==null?"":Ie(n)||tt(n)&&(n.toString===sf||!Ne(n.toString))?JSON.stringify(n,cf,2):String(n),cf=(n,e)=>e&&e.__v_isRef?cf(n,e.value):vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:nf(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Ie(e)&&!of(e)?String(e):e;let Kt;class uf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function mp(n){return new uf(n)}function gp(n,e=Kt){e&&e.active&&e.effects.push(n)}function vp(){return Kt}const Hl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},hf=n=>(n.w&fi)>0,ff=n=>(n.n&fi)>0,_p=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=fi},xp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];hf(r)&&!ff(r)?r.delete(n):e[t++]=r,r.w&=~fi,r.n&=~fi}e.length=t}},nl=new WeakMap;let jr=0,fi=1;const il=30;let en;const Ri=Symbol(""),rl=Symbol("");class Gl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,gp(this,i)}run(){if(!this.active)return this.fn();let e=en,t=ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,ai=!0,fi=1<<++jr,jr<=il?_p(this):Sc(this),this.fn()}finally{jr<=il&&xp(this),fi=1<<--jr,en=this.parent,ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(Sc(this),this.onStop&&this.onStop(),this.active=!1)}}function Sc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ai=!0;const df=[];function Ir(){df.push(ai),ai=!1}function Or(){const n=df.pop();ai=n===void 0?!0:n}function zt(n,e,t){if(ai&&en){let i=nl.get(n);i||nl.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Hl()),pf(r)}}function pf(n,e){let t=!1;jr<=il?ff(n)||(n.n|=fi,t=!hf(n)):t=!n.has(en),t&&(n.add(en),en.deps.push(n))}function kn(n,e,t,i,r,s){const o=nl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?Vl(t)&&a.push(o.get("length")):(a.push(o.get(Ri)),vr(n)&&a.push(o.get(rl)));break;case"delete":Ie(n)||(a.push(o.get(Ri)),vr(n)&&a.push(o.get(rl)));break;case"set":vr(n)&&a.push(o.get(Ri));break}if(a.length===1)a[0]&&sl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);sl(Hl(l))}}function sl(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&wc(i);for(const i of t)i.computed||wc(i)}function wc(n,e){(n!==en||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yp=Nl("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ul)),bp=Wl(),Mp=Wl(!1,!0),Sp=Wl(!0),Ec=wp();function wp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=We(this);for(let s=0,o=this.length;s<o;s++)zt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ir();const i=We(this)[e].apply(this,t);return Or(),i}}),n}function Ep(n){const e=We(this);return zt(e,"has",n),e.hasOwnProperty(n)}function Wl(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?kp:yf:e?xf:_f).get(i))return i;const o=Ie(i);if(!n){if(o&&He(Ec,r))return Reflect.get(Ec,r,s);if(r==="hasOwnProperty")return Ep}const a=Reflect.get(i,r,s);return(Ul(r)?mf.has(r):yp(r))||(n||zt(i,"get",r),e)?a:Et(a)?o&&Vl(r)?a:a.value:tt(a)?n?ql(a):ws(a):a}}const Tp=gf(),Ap=gf(!0);function gf(n=!1){return function(t,i,r,s){let o=t[i];if(Sr(o)&&Et(o)&&!Et(r))return!1;if(!n&&(!Mo(r)&&!Sr(r)&&(o=We(o),r=We(r)),!Ie(t)&&Et(o)&&!Et(r)))return o.value=r,!0;const a=Ie(t)&&Vl(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===We(s)&&(a?os(r,o)&&kn(t,"set",i,r):kn(t,"add",i,r)),l}}function Cp(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&kn(n,"delete",e,void 0),i}function Pp(n,e){const t=Reflect.has(n,e);return(!Ul(e)||!mf.has(e))&&zt(n,"has",e),t}function Lp(n){return zt(n,"iterate",Ie(n)?"length":Ri),Reflect.ownKeys(n)}const vf={get:bp,set:Tp,deleteProperty:Cp,has:Pp,ownKeys:Lp},Rp={get:Sp,set(n,e){return!0},deleteProperty(n,e){return!0}},Dp=vt({},vf,{get:Mp,set:Ap}),$l=n=>n,No=n=>Reflect.getPrototypeOf(n);function Rs(n,e,t=!1,i=!1){n=n.__v_raw;const r=We(n),s=We(e);t||(e!==s&&zt(r,"get",e),zt(r,"get",s));const{has:o}=No(r),a=i?$l:t?Zl:ls;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Ds(n,e=!1){const t=this.__v_raw,i=We(t),r=We(n);return e||(n!==r&&zt(i,"has",n),zt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Is(n,e=!1){return n=n.__v_raw,!e&&zt(We(n),"iterate",Ri),Reflect.get(n,"size",n)}function Tc(n){n=We(n);const e=We(this);return No(e).has.call(e,n)||(e.add(n),kn(e,"add",n,n)),this}function Ac(n,e){e=We(e);const t=We(this),{has:i,get:r}=No(t);let s=i.call(t,n);s||(n=We(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?os(e,o)&&kn(t,"set",n,e):kn(t,"add",n,e),this}function Cc(n){const e=We(this),{has:t,get:i}=No(e);let r=t.call(e,n);r||(n=We(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&kn(e,"delete",n,void 0),s}function Pc(){const n=We(this),e=n.size!==0,t=n.clear();return e&&kn(n,"clear",void 0,void 0),t}function Os(n,e){return function(i,r){const s=this,o=s.__v_raw,a=We(o),l=e?$l:n?Zl:ls;return!n&&zt(a,"iterate",Ri),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Fs(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),o=vr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?$l:e?Zl:ls;return!e&&zt(s,"iterate",l?rl:Ri),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $n(n){return function(...e){return n==="delete"?!1:this}}function Ip(){const n={get(s){return Rs(this,s)},get size(){return Is(this)},has:Ds,add:Tc,set:Ac,delete:Cc,clear:Pc,forEach:Os(!1,!1)},e={get(s){return Rs(this,s,!1,!0)},get size(){return Is(this)},has:Ds,add:Tc,set:Ac,delete:Cc,clear:Pc,forEach:Os(!1,!0)},t={get(s){return Rs(this,s,!0)},get size(){return Is(this,!0)},has(s){return Ds.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Os(!0,!1)},i={get(s){return Rs(this,s,!0,!0)},get size(){return Is(this,!0)},has(s){return Ds.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fs(s,!1,!1),t[s]=Fs(s,!0,!1),e[s]=Fs(s,!1,!0),i[s]=Fs(s,!0,!0)}),[n,t,e,i]}const[Op,Fp,Np,zp]=Ip();function jl(n,e){const t=e?n?zp:Np:n?Fp:Op;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const Bp={get:jl(!1,!1)},Up={get:jl(!1,!0)},Vp={get:jl(!0,!1)},_f=new WeakMap,xf=new WeakMap,yf=new WeakMap,kp=new WeakMap;function Hp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gp(n){return n.__v_skip||!Object.isExtensible(n)?0:Hp(sp(n))}function ws(n){return Sr(n)?n:Xl(n,!1,vf,Bp,_f)}function bf(n){return Xl(n,!1,Dp,Up,xf)}function ql(n){return Xl(n,!0,Rp,Vp,yf)}function Xl(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Gp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function _r(n){return Sr(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function Sr(n){return!!(n&&n.__v_isReadonly)}function Mo(n){return!!(n&&n.__v_isShallow)}function Mf(n){return _r(n)||Sr(n)}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function Yl(n){return bo(n,"__v_skip",!0),n}const ls=n=>tt(n)?ws(n):n,Zl=n=>tt(n)?ql(n):n;function Sf(n){ai&&en&&(n=We(n),pf(n.dep||(n.dep=Hl())))}function wf(n,e){n=We(n);const t=n.dep;t&&sl(t)}function Et(n){return!!(n&&n.__v_isRef===!0)}function Bn(n){return Ef(n,!1)}function Wp(n){return Ef(n,!0)}function Ef(n,e){return Et(n)?n:new $p(n,e)}class $p{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:ls(e)}get value(){return Sf(this),this._value}set value(e){const t=this.__v_isShallow||Mo(e)||Sr(e);e=t?e:We(e),os(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ls(e),wf(this))}}function Sn(n){return Et(n)?n.value:n}const jp={get:(n,e,t)=>Sn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Tf(n){return _r(n)?n:new Proxy(n,jp)}class qp{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gl(e,()=>{this._dirty||(this._dirty=!0,wf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return Sf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xp(n,e,t=!1){let i,r;const s=Ne(n);return s?(i=n,r=on):(i=n.get,r=n.set),new qp(i,r,s||!r,t)}function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){zo(s,e,t)}return r}function an(n,e,t,i){if(Ne(n)){const s=li(n,e,t,i);return s&&rf(s)&&s.catch(o=>{zo(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}function zo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,o,a]);return}}Yp(n,t,r,i)}function Yp(n,e,t,i=!0){console.error(n)}let cs=!1,ol=!1;const wt=[];let bn=0;const xr=[];let Fn=null,Si=0;const Af=Promise.resolve();let Kl=null;function Jl(n){const e=Kl||Af;return n?e.then(this?n.bind(this):n):e}function Zp(n){let e=bn+1,t=wt.length;for(;e<t;){const i=e+t>>>1;us(wt[i])<n?e=i+1:t=i}return e}function Ql(n){(!wt.length||!wt.includes(n,cs&&n.allowRecurse?bn+1:bn))&&(n.id==null?wt.push(n):wt.splice(Zp(n.id),0,n),Cf())}function Cf(){!cs&&!ol&&(ol=!0,Kl=Af.then(Lf))}function Kp(n){const e=wt.indexOf(n);e>bn&&wt.splice(e,1)}function Jp(n){Ie(n)?xr.push(...n):(!Fn||!Fn.includes(n,n.allowRecurse?Si+1:Si))&&xr.push(n),Cf()}function Lc(n,e=cs?bn+1:0){for(;e<wt.length;e++){const t=wt[e];t&&t.pre&&(wt.splice(e,1),e--,t())}}function Pf(n){if(xr.length){const e=[...new Set(xr)];if(xr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fn.sort((t,i)=>us(t)-us(i)),Si=0;Si<Fn.length;Si++)Fn[Si]();Fn=null,Si=0}}const us=n=>n.id==null?1/0:n.id,Qp=(n,e)=>{const t=us(n)-us(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Lf(n){ol=!1,cs=!0,wt.sort(Qp);const e=on;try{for(bn=0;bn<wt.length;bn++){const t=wt[bn];t&&t.active!==!1&&li(t,null,14)}}finally{bn=0,wt.length=0,Pf(),cs=!1,Kl=null,(wt.length||xr.length)&&Lf()}}function em(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Qe;f&&(r=t.map(d=>ft(d)?d.trim():d)),h&&(r=t.map(lp))}let a,l=i[a=po(e)]||i[a=po(Tn(e))];!l&&s&&(l=i[a=po(Dr(e))]),l&&an(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(c,n,6,r)}}function Rf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ne(n)){const l=c=>{const u=Rf(c,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):vt(o,s),tt(n)&&i.set(n,o),o)}function Bo(n,e){return!n||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,Dr(e))||He(n,e))}let yt=null,Uo=null;function So(n){const e=yt;return yt=n,Uo=n&&n.type.__scopeId||null,e}function tm(n){Uo=n}function nm(){Uo=null}function si(n,e=yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&kc(-1);const s=So(e);let o;try{o=n(...r)}finally{So(s),i._d&&kc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function oa(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=n;let p,v;const x=So(n);try{if(t.shapeFlag&4){const E=r||i;p=xn(u.call(E,E,h,s,d,f,g)),v=l}else{const E=e;p=xn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),v=e.props?l:im(l)}}catch(E){Qr.length=0,zo(E,n,1),p=st(di)}let C=p;if(v&&m!==!1){const E=Object.keys(v),{shapeFlag:S}=C;E.length&&S&7&&(o&&E.some(zl)&&(v=rm(v,o)),C=wr(C,v))}return t.dirs&&(C=wr(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),p=C,So(x),p}const im=n=>{let e;for(const t in n)(t==="class"||t==="style"||Do(t))&&((e||(e={}))[t]=n[t]);return e},rm=(n,e)=>{const t={};for(const i in n)(!zl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function sm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Bo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rc(i,o,c):!0:!!o;return!1}function Rc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Bo(t,s))return!0}return!1}function om({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const am=n=>n.__isSuspense;function lm(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Jp(n)}const Ns={};function Zr(n,e,t){return Df(n,e,t)}function Df(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Qe){var a;const l=vp()===((a=gt)==null?void 0:a.scope)?gt:null;let c,u=!1,h=!1;if(Et(n)?(c=()=>n.value,u=Mo(n)):_r(n)?(c=()=>n,i=!0):Ie(n)?(h=!0,u=n.some(E=>_r(E)||Mo(E)),c=()=>n.map(E=>{if(Et(E))return E.value;if(_r(E))return Ai(E);if(Ne(E))return li(E,l,2)})):Ne(n)?e?c=()=>li(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),an(n,l,3,[d])}:c=on,e&&i){const E=c;c=()=>Ai(E())}let f,d=E=>{f=x.onStop=()=>{li(E,l,4)}},g;if(fs)if(d=on,e?t&&an(e,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const E=tg();g=E.__watcherHandles||(E.__watcherHandles=[])}else return on;let m=h?new Array(n.length).fill(Ns):Ns;const p=()=>{if(x.active)if(e){const E=x.run();(i||u||(h?E.some((S,R)=>os(S,m[R])):os(E,m)))&&(f&&f(),an(e,l,3,[E,m===Ns?void 0:h&&m[0]===Ns?[]:m,d]),m=E)}else x.run()};p.allowRecurse=!!e;let v;r==="sync"?v=p:r==="post"?v=()=>Ot(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),v=()=>Ql(p));const x=new Gl(c,v);e?t?p():m=x.run():r==="post"?Ot(x.run.bind(x),l&&l.suspense):x.run();const C=()=>{x.stop(),l&&l.scope&&Bl(l.scope.effects,x)};return g&&g.push(C),C}function cm(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?If(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=gt;Er(this);const a=Df(r,s.bind(i),t);return o?Er(o):Di(),a}function If(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ai(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Et(n))Ai(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Ai(n[t],e);else if(nf(n)||vr(n))n.forEach(t=>{Ai(t,e)});else if(of(n))for(const t in n)Ai(n[t],e);return n}function um(n,e){const t=yt;if(t===null)return n;const i=Wo(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Qe]=e[s];o&&(Ne(o)&&(o={mounted:o,updated:o}),o.deep&&Ai(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function gi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ir(),an(l,t,8,[n.el,a,n,e]),Or())}}function Fr(n,e){return Ne(n)?(()=>vt({name:n.name},e,{setup:n}))():n}const Kr=n=>!!n.type.__asyncLoader,Of=n=>n.type.__isKeepAlive;function hm(n,e){Ff(n,"a",e)}function fm(n,e){Ff(n,"da",e)}function Ff(n,e,t=gt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Vo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Of(r.parent.vnode)&&dm(i,e,t,r),r=r.parent}}function dm(n,e,t,i){const r=Vo(e,n,i,!0);zf(()=>{Bl(i[e],r)},t)}function Vo(n,e,t=gt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ir(),Er(t);const a=an(e,t,n,o);return Di(),Or(),a});return i?r.unshift(s):r.push(s),s}}const Gn=n=>(e,t=gt)=>(!fs||n==="sp")&&Vo(n,(...i)=>e(...i),t),pm=Gn("bm"),Es=Gn("m"),mm=Gn("bu"),gm=Gn("u"),Nf=Gn("bum"),zf=Gn("um"),vm=Gn("sp"),_m=Gn("rtg"),xm=Gn("rtc");function ym(n,e=gt){Vo("ec",n,e)}const ec="components",bm="directives";function Ni(n,e){return tc(ec,n,!0,e)||n}const Bf=Symbol.for("v-ndc");function zs(n){return ft(n)?tc(ec,n,!1)||n:n||Bf}function Mm(n){return tc(bm,n)}function tc(n,e,t=!0,i=!1){const r=yt||gt;if(r){const s=r.type;if(n===ec){const a=Jm(s,!1);if(a&&(a===e||a===Tn(e)||a===Fo(Tn(e))))return s}const o=Dc(r[n]||s[n],e)||Dc(r.appContext[n],e);return!o&&i?s:o}}function Dc(n,e){return n&&(n[e]||n[Tn(e)]||n[Fo(Tn(e))])}function Sm(n,e,t,i){let r;const s=t&&t[i];if(Ie(n)||ft(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function zn(n,e,t={},i,r){if(yt.isCE||yt.parent&&Kr(yt.parent)&&yt.parent.isCE)return e!=="default"&&(t.name=e),st("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),Ke();const o=s&&Uf(s(t)),a=Wt(kt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Uf(n){return n.some(e=>To(e)?!(e.type===di||e.type===kt&&!Uf(e.children)):!0)?n:null}function Bs(n,e){const t={};for(const i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:po(i)]=n[i];return t}const al=n=>n?Zf(n)?Wo(n)||n.proxy:al(n.parent):null,Jr=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>al(n.parent),$root:n=>al(n.root),$emit:n=>n.emit,$options:n=>nc(n),$forceUpdate:n=>n.f||(n.f=()=>Ql(n.update)),$nextTick:n=>n.n||(n.n=Jl.bind(n.proxy)),$watch:n=>cm.bind(n)}),aa=(n,e)=>n!==Qe&&!n.__isScriptSetup&&He(n,e),wm={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(aa(i,e))return o[e]=1,i[e];if(r!==Qe&&He(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==Qe&&He(t,e))return o[e]=4,t[e];ll&&(o[e]=0)}}const u=Jr[e];let h,f;if(u)return e==="$attrs"&&zt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Qe&&He(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,He(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return aa(r,e)?(r[e]=t,!0):i!==Qe&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Qe&&He(n,o)||aa(e,o)||(a=s[0])&&He(a,o)||He(i,o)||He(Jr,o)||He(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ic(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ll=!0;function Em(n){const e=nc(n),t=n.proxy,i=n.ctx;ll=!1,e.beforeCreate&&Oc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:v,beforeUnmount:x,destroyed:C,unmounted:E,render:S,renderTracked:R,renderTriggered:F,errorCaptured:b,serverPrefetch:L,expose:z,inheritAttrs:B,components:xe,directives:ce,filters:N}=e;if(c&&Tm(c,i,null),o)for(const $ in o){const W=o[$];Ne(W)&&(i[$]=W.bind(t))}if(r){const $=r.call(t,t);tt($)&&(n.data=ws($))}if(ll=!0,s)for(const $ in s){const W=s[$],q=Ne(W)?W.bind(t,t):Ne(W.get)?W.get.bind(t,t):on,ee=!Ne(W)&&Ne(W.set)?W.set.bind(t):on,fe=tn({get:q,set:ee});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>fe.value,set:le=>fe.value=le})}if(a)for(const $ in a)Vf(a[$],i,t,$);if(l){const $=Ne(l)?l.call(t):l;Reflect.ownKeys($).forEach(W=>{mo(W,$[W])})}u&&Oc(u,n,"c");function V($,W){Ie(W)?W.forEach(q=>$(q.bind(t))):W&&$(W.bind(t))}if(V(pm,h),V(Es,f),V(mm,d),V(gm,g),V(hm,m),V(fm,p),V(ym,b),V(xm,R),V(_m,F),V(Nf,x),V(zf,E),V(vm,L),Ie(z))if(z.length){const $=n.exposed||(n.exposed={});z.forEach(W=>{Object.defineProperty($,W,{get:()=>t[W],set:q=>t[W]=q})})}else n.exposed||(n.exposed={});S&&n.render===on&&(n.render=S),B!=null&&(n.inheritAttrs=B),xe&&(n.components=xe),ce&&(n.directives=ce)}function Tm(n,e,t=on){Ie(n)&&(n=cl(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=Un(r.from||i,r.default,!0):s=Un(r.from||i):s=Un(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Oc(n,e,t){an(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vf(n,e,t,i){const r=i.includes(".")?If(t,i):()=>t[i];if(ft(n)){const s=e[n];Ne(s)&&Zr(r,s)}else if(Ne(n))Zr(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>Vf(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&Zr(r,s,n)}}function nc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>wo(l,c,o,!0)),wo(l,e,o)),tt(e)&&s.set(e,l),l}function wo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&wo(n,s,t,!0),r&&r.forEach(o=>wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Am[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Am={data:Fc,props:Nc,emits:Nc,methods:qr,computed:qr,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:qr,directives:qr,watch:Pm,provide:Fc,inject:Cm};function Fc(n,e){return e?n?function(){return vt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function Cm(n,e){return qr(cl(n),cl(e))}function cl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function qr(n,e){return n?vt(Object.create(null),n,e):e}function Nc(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:vt(Object.create(null),Ic(n),Ic(e??{})):e}function Pm(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Pt(n[i],e[i]);return t}function kf(){return{app:null,config:{isNativeTag:np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lm=0;function Rm(n,e){return function(i,r=null){Ne(i)||(i=vt({},i)),r!=null&&!tt(r)&&(r=null);const s=kf(),o=new Set;let a=!1;const l=s.app={_uid:Lm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ng,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=st(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Wo(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Eo=l;try{return c()}finally{Eo=null}}};return l}}let Eo=null;function mo(n,e){if(gt){let t=gt.provides;const i=gt.parent&&gt.parent.provides;i===t&&(t=gt.provides=Object.create(i)),t[n]=e}}function Un(n,e,t=!1){const i=gt||yt;if(i||Eo){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Eo._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i&&i.proxy):e}}function Dm(n,e,t,i=!1){const r={},s={};bo(s,Ho,1),n.propsDefaults=Object.create(null),Hf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:bf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Im(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=We(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Bo(n.emitsOptions,f))continue;const d=e[f];if(l)if(He(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Tn(f);r[g]=ul(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Hf(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!He(e,h)&&((u=Dr(h))===h||!He(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=ul(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!He(e,h))&&(delete s[h],c=!0)}c&&kn(n,"set","$attrs")}function Hf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fo(l))continue;const c=e[l];let u;r&&He(r,u=Tn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Bo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=We(t),c=a||Qe;for(let u=0;u<s.length;u++){const h=s[u];t[h]=ul(r,l,h,c[h],n,!He(c,h))}}return o}function ul(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Er(r),i=c[t]=l.call(null,e),Di())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Dr(t))&&(i=!0))}return i}function Gf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ne(n)){const u=h=>{l=!0;const[f,d]=Gf(h,e,!0);vt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,gr),gr;if(Ie(s))for(let u=0;u<s.length;u++){const h=Tn(s[u]);zc(h)&&(o[h]=Qe)}else if(s)for(const u in s){const h=Tn(u);if(zc(h)){const f=s[u],d=o[h]=Ie(f)||Ne(f)?{type:f}:vt({},f);if(d){const g=Vc(Boolean,d.type),m=Vc(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||He(d,"default"))&&a.push(h)}}}const c=[o,a];return tt(n)&&i.set(n,c),c}function zc(n){return n[0]!=="$"}function Bc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Uc(n,e){return Bc(n)===Bc(e)}function Vc(n,e){return Ie(e)?e.findIndex(t=>Uc(t,n)):Ne(e)&&Uc(e,n)?0:-1}const Wf=n=>n[0]==="_"||n==="$stable",ic=n=>Ie(n)?n.map(xn):[xn(n)],Om=(n,e,t)=>{if(e._n)return e;const i=si((...r)=>ic(e(...r)),t);return i._c=!1,i},$f=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Wf(r))continue;const s=n[r];if(Ne(s))e[r]=Om(r,s,i);else if(s!=null){const o=ic(s);e[r]=()=>o}}},jf=(n,e)=>{const t=ic(e);n.slots.default=()=>t},Fm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=We(e),bo(e,"_",t)):$f(e,n.slots={})}else n.slots={},e&&jf(n,e);bo(n.slots,Ho,1)},Nm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(vt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,$f(e,r)),o=e}else e&&(jf(n,e),o={default:1});if(s)for(const a in r)!Wf(a)&&!(a in o)&&delete r[a]};function hl(n,e,t,i,r=!1){if(Ie(n)){n.forEach((f,d)=>hl(f,e&&(Ie(e)?e[d]:e),t,i,r));return}if(Kr(i)&&!r)return;const s=i.shapeFlag&4?Wo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,He(h,c)&&(h[c]=null)):Et(c)&&(c.value=null)),Ne(l))li(l,a,12,[o,u]);else{const f=ft(l),d=Et(l);if(f||d){const g=()=>{if(n.f){const m=f?He(h,l)?h[l]:u[l]:l.value;r?Ie(m)&&Bl(m,s):Ie(m)?m.includes(s)||m.push(s):f?(u[l]=[s],He(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,He(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ot(g,t)):g()}}}const Ot=lm;function zm(n){return Bm(n)}function Bm(n,e){const t=tl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=on,insertStaticContent:g}=n,m=(w,A,I,H=null,Z=null,re=null,pe=!1,te=null,me=!!A.dynamicChildren)=>{if(w===A)return;w&&!kr(w,A)&&(H=k(w),le(w,Z,re,!0),w=null),A.patchFlag===-2&&(me=!1,A.dynamicChildren=null);const{type:ae,ref:y,shapeFlag:_}=A;switch(ae){case ko:p(w,A,I,H);break;case di:v(w,A,I,H);break;case la:w==null&&x(A,I,H,pe);break;case kt:xe(w,A,I,H,Z,re,pe,te,me);break;default:_&1?S(w,A,I,H,Z,re,pe,te,me):_&6?ce(w,A,I,H,Z,re,pe,te,me):(_&64||_&128)&&ae.process(w,A,I,H,Z,re,pe,te,me,J)}y!=null&&Z&&hl(y,w&&w.ref,re,A||w,!A)},p=(w,A,I,H)=>{if(w==null)i(A.el=a(A.children),I,H);else{const Z=A.el=w.el;A.children!==w.children&&c(Z,A.children)}},v=(w,A,I,H)=>{w==null?i(A.el=l(A.children||""),I,H):A.el=w.el},x=(w,A,I,H)=>{[w.el,w.anchor]=g(w.children,A,I,H,w.el,w.anchor)},C=({el:w,anchor:A},I,H)=>{let Z;for(;w&&w!==A;)Z=f(w),i(w,I,H),w=Z;i(A,I,H)},E=({el:w,anchor:A})=>{let I;for(;w&&w!==A;)I=f(w),r(w),w=I;r(A)},S=(w,A,I,H,Z,re,pe,te,me)=>{pe=pe||A.type==="svg",w==null?R(A,I,H,Z,re,pe,te,me):L(w,A,Z,re,pe,te,me)},R=(w,A,I,H,Z,re,pe,te)=>{let me,ae;const{type:y,props:_,shapeFlag:O,transition:j,dirs:Q}=w;if(me=w.el=o(w.type,re,_&&_.is,_),O&8?u(me,w.children):O&16&&b(w.children,me,null,H,Z,re&&y!=="foreignObject",pe,te),Q&&gi(w,null,H,"created"),F(me,w,w.scopeId,pe,H),_){for(const be in _)be!=="value"&&!fo(be)&&s(me,be,null,_[be],re,w.children,H,Z,X);"value"in _&&s(me,"value",null,_.value),(ae=_.onVnodeBeforeMount)&&mn(ae,H,w)}Q&&gi(w,null,H,"beforeMount");const ue=(!Z||Z&&!Z.pendingBranch)&&j&&!j.persisted;ue&&j.beforeEnter(me),i(me,A,I),((ae=_&&_.onVnodeMounted)||ue||Q)&&Ot(()=>{ae&&mn(ae,H,w),ue&&j.enter(me),Q&&gi(w,null,H,"mounted")},Z)},F=(w,A,I,H,Z)=>{if(I&&d(w,I),H)for(let re=0;re<H.length;re++)d(w,H[re]);if(Z){let re=Z.subTree;if(A===re){const pe=Z.vnode;F(w,pe,pe.scopeId,pe.slotScopeIds,Z.parent)}}},b=(w,A,I,H,Z,re,pe,te,me=0)=>{for(let ae=me;ae<w.length;ae++){const y=w[ae]=te?ti(w[ae]):xn(w[ae]);m(null,y,A,I,H,Z,re,pe,te)}},L=(w,A,I,H,Z,re,pe)=>{const te=A.el=w.el;let{patchFlag:me,dynamicChildren:ae,dirs:y}=A;me|=w.patchFlag&16;const _=w.props||Qe,O=A.props||Qe;let j;I&&vi(I,!1),(j=O.onVnodeBeforeUpdate)&&mn(j,I,A,w),y&&gi(A,w,I,"beforeUpdate"),I&&vi(I,!0);const Q=Z&&A.type!=="foreignObject";if(ae?z(w.dynamicChildren,ae,te,I,H,Q,re):pe||W(w,A,te,null,I,H,Q,re,!1),me>0){if(me&16)B(te,A,_,O,I,H,Z);else if(me&2&&_.class!==O.class&&s(te,"class",null,O.class,Z),me&4&&s(te,"style",_.style,O.style,Z),me&8){const ue=A.dynamicProps;for(let be=0;be<ue.length;be++){const M=ue[be],ne=_[M],ge=O[M];(ge!==ne||M==="value")&&s(te,M,ne,ge,Z,w.children,I,H,X)}}me&1&&w.children!==A.children&&u(te,A.children)}else!pe&&ae==null&&B(te,A,_,O,I,H,Z);((j=O.onVnodeUpdated)||y)&&Ot(()=>{j&&mn(j,I,A,w),y&&gi(A,w,I,"updated")},H)},z=(w,A,I,H,Z,re,pe)=>{for(let te=0;te<A.length;te++){const me=w[te],ae=A[te],y=me.el&&(me.type===kt||!kr(me,ae)||me.shapeFlag&70)?h(me.el):I;m(me,ae,y,null,H,Z,re,pe,!0)}},B=(w,A,I,H,Z,re,pe)=>{if(I!==H){if(I!==Qe)for(const te in I)!fo(te)&&!(te in H)&&s(w,te,I[te],null,pe,A.children,Z,re,X);for(const te in H){if(fo(te))continue;const me=H[te],ae=I[te];me!==ae&&te!=="value"&&s(w,te,ae,me,pe,A.children,Z,re,X)}"value"in H&&s(w,"value",I.value,H.value)}},xe=(w,A,I,H,Z,re,pe,te,me)=>{const ae=A.el=w?w.el:a(""),y=A.anchor=w?w.anchor:a("");let{patchFlag:_,dynamicChildren:O,slotScopeIds:j}=A;j&&(te=te?te.concat(j):j),w==null?(i(ae,I,H),i(y,I,H),b(A.children,I,y,Z,re,pe,te,me)):_>0&&_&64&&O&&w.dynamicChildren?(z(w.dynamicChildren,O,I,Z,re,pe,te),(A.key!=null||Z&&A===Z.subTree)&&qf(w,A,!0)):W(w,A,I,y,Z,re,pe,te,me)},ce=(w,A,I,H,Z,re,pe,te,me)=>{A.slotScopeIds=te,w==null?A.shapeFlag&512?Z.ctx.activate(A,I,H,pe,me):N(A,I,H,Z,re,pe,me):ie(w,A,me)},N=(w,A,I,H,Z,re,pe)=>{const te=w.component=jm(w,H,Z);if(Of(w)&&(te.ctx.renderer=J),Xm(te),te.asyncDep){if(Z&&Z.registerDep(te,V),!w.el){const me=te.subTree=st(di);v(null,me,A,I)}return}V(te,w,A,I,Z,re,pe)},ie=(w,A,I)=>{const H=A.component=w.component;if(sm(w,A,I))if(H.asyncDep&&!H.asyncResolved){$(H,A,I);return}else H.next=A,Kp(H.update),H.update();else A.el=w.el,H.vnode=A},V=(w,A,I,H,Z,re,pe)=>{const te=()=>{if(w.isMounted){let{next:y,bu:_,u:O,parent:j,vnode:Q}=w,ue=y,be;vi(w,!1),y?(y.el=Q.el,$(w,y,pe)):y=Q,_&&sa(_),(be=y.props&&y.props.onVnodeBeforeUpdate)&&mn(be,j,y,Q),vi(w,!0);const M=oa(w),ne=w.subTree;w.subTree=M,m(ne,M,h(ne.el),k(ne),w,Z,re),y.el=M.el,ue===null&&om(w,M.el),O&&Ot(O,Z),(be=y.props&&y.props.onVnodeUpdated)&&Ot(()=>mn(be,j,y,Q),Z)}else{let y;const{el:_,props:O}=A,{bm:j,m:Q,parent:ue}=w,be=Kr(A);if(vi(w,!1),j&&sa(j),!be&&(y=O&&O.onVnodeBeforeMount)&&mn(y,ue,A),vi(w,!0),_&&Ee){const M=()=>{w.subTree=oa(w),Ee(_,w.subTree,w,Z,null)};be?A.type.__asyncLoader().then(()=>!w.isUnmounted&&M()):M()}else{const M=w.subTree=oa(w);m(null,M,I,H,w,Z,re),A.el=M.el}if(Q&&Ot(Q,Z),!be&&(y=O&&O.onVnodeMounted)){const M=A;Ot(()=>mn(y,ue,M),Z)}(A.shapeFlag&256||ue&&Kr(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&Ot(w.a,Z),w.isMounted=!0,A=I=H=null}},me=w.effect=new Gl(te,()=>Ql(ae),w.scope),ae=w.update=()=>me.run();ae.id=w.uid,vi(w,!0),ae()},$=(w,A,I)=>{A.component=w;const H=w.vnode.props;w.vnode=A,w.next=null,Im(w,A.props,H,I),Nm(w,A.children,I),Ir(),Lc(),Or()},W=(w,A,I,H,Z,re,pe,te,me=!1)=>{const ae=w&&w.children,y=w?w.shapeFlag:0,_=A.children,{patchFlag:O,shapeFlag:j}=A;if(O>0){if(O&128){ee(ae,_,I,H,Z,re,pe,te,me);return}else if(O&256){q(ae,_,I,H,Z,re,pe,te,me);return}}j&8?(y&16&&X(ae,Z,re),_!==ae&&u(I,_)):y&16?j&16?ee(ae,_,I,H,Z,re,pe,te,me):X(ae,Z,re,!0):(y&8&&u(I,""),j&16&&b(_,I,H,Z,re,pe,te,me))},q=(w,A,I,H,Z,re,pe,te,me)=>{w=w||gr,A=A||gr;const ae=w.length,y=A.length,_=Math.min(ae,y);let O;for(O=0;O<_;O++){const j=A[O]=me?ti(A[O]):xn(A[O]);m(w[O],j,I,null,Z,re,pe,te,me)}ae>y?X(w,Z,re,!0,!1,_):b(A,I,H,Z,re,pe,te,me,_)},ee=(w,A,I,H,Z,re,pe,te,me)=>{let ae=0;const y=A.length;let _=w.length-1,O=y-1;for(;ae<=_&&ae<=O;){const j=w[ae],Q=A[ae]=me?ti(A[ae]):xn(A[ae]);if(kr(j,Q))m(j,Q,I,null,Z,re,pe,te,me);else break;ae++}for(;ae<=_&&ae<=O;){const j=w[_],Q=A[O]=me?ti(A[O]):xn(A[O]);if(kr(j,Q))m(j,Q,I,null,Z,re,pe,te,me);else break;_--,O--}if(ae>_){if(ae<=O){const j=O+1,Q=j<y?A[j].el:H;for(;ae<=O;)m(null,A[ae]=me?ti(A[ae]):xn(A[ae]),I,Q,Z,re,pe,te,me),ae++}}else if(ae>O)for(;ae<=_;)le(w[ae],Z,re,!0),ae++;else{const j=ae,Q=ae,ue=new Map;for(ae=Q;ae<=O;ae++){const he=A[ae]=me?ti(A[ae]):xn(A[ae]);he.key!=null&&ue.set(he.key,ae)}let be,M=0;const ne=O-Q+1;let ge=!1,ve=0;const P=new Array(ne);for(ae=0;ae<ne;ae++)P[ae]=0;for(ae=j;ae<=_;ae++){const he=w[ae];if(M>=ne){le(he,Z,re,!0);continue}let Te;if(he.key!=null)Te=ue.get(he.key);else for(be=Q;be<=O;be++)if(P[be-Q]===0&&kr(he,A[be])){Te=be;break}Te===void 0?le(he,Z,re,!0):(P[Te-Q]=ae+1,Te>=ve?ve=Te:ge=!0,m(he,A[Te],I,null,Z,re,pe,te,me),M++)}const _e=ge?Um(P):gr;for(be=_e.length-1,ae=ne-1;ae>=0;ae--){const he=Q+ae,Te=A[he],Me=he+1<y?A[he+1].el:H;P[ae]===0?m(null,Te,I,Me,Z,re,pe,te,me):ge&&(be<0||ae!==_e[be]?fe(Te,I,Me,2):be--)}}},fe=(w,A,I,H,Z=null)=>{const{el:re,type:pe,transition:te,children:me,shapeFlag:ae}=w;if(ae&6){fe(w.component.subTree,A,I,H);return}if(ae&128){w.suspense.move(A,I,H);return}if(ae&64){pe.move(w,A,I,J);return}if(pe===kt){i(re,A,I);for(let _=0;_<me.length;_++)fe(me[_],A,I,H);i(w.anchor,A,I);return}if(pe===la){C(w,A,I);return}if(H!==2&&ae&1&&te)if(H===0)te.beforeEnter(re),i(re,A,I),Ot(()=>te.enter(re),Z);else{const{leave:_,delayLeave:O,afterLeave:j}=te,Q=()=>i(re,A,I),ue=()=>{_(re,()=>{Q(),j&&j()})};O?O(re,Q,ue):ue()}else i(re,A,I)},le=(w,A,I,H=!1,Z=!1)=>{const{type:re,props:pe,ref:te,children:me,dynamicChildren:ae,shapeFlag:y,patchFlag:_,dirs:O}=w;if(te!=null&&hl(te,null,I,w,!0),y&256){A.ctx.deactivate(w);return}const j=y&1&&O,Q=!Kr(w);let ue;if(Q&&(ue=pe&&pe.onVnodeBeforeUnmount)&&mn(ue,A,w),y&6)Ce(w.component,I,H);else{if(y&128){w.suspense.unmount(I,H);return}j&&gi(w,null,A,"beforeUnmount"),y&64?w.type.remove(w,A,I,Z,J,H):ae&&(re!==kt||_>0&&_&64)?X(ae,A,I,!1,!0):(re===kt&&_&384||!Z&&y&16)&&X(me,A,I),H&&de(w)}(Q&&(ue=pe&&pe.onVnodeUnmounted)||j)&&Ot(()=>{ue&&mn(ue,A,w),j&&gi(w,null,A,"unmounted")},I)},de=w=>{const{type:A,el:I,anchor:H,transition:Z}=w;if(A===kt){we(I,H);return}if(A===la){E(w);return}const re=()=>{r(I),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:pe,delayLeave:te}=Z,me=()=>pe(I,re);te?te(w.el,re,me):me()}else re()},we=(w,A)=>{let I;for(;w!==A;)I=f(w),r(w),w=I;r(A)},Ce=(w,A,I)=>{const{bum:H,scope:Z,update:re,subTree:pe,um:te}=w;H&&sa(H),Z.stop(),re&&(re.active=!1,le(pe,w,A,I)),te&&Ot(te,A),Ot(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},X=(w,A,I,H=!1,Z=!1,re=0)=>{for(let pe=re;pe<w.length;pe++)le(w[pe],A,I,H,Z)},k=w=>w.shapeFlag&6?k(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),se=(w,A,I)=>{w==null?A._vnode&&le(A._vnode,null,null,!0):m(A._vnode||null,w,A,null,null,null,I),Lc(),Pf(),A._vnode=w},J={p:m,um:le,m:fe,r:de,mt:N,mc:b,pc:W,pbc:z,n:k,o:n};let K,Ee;return e&&([K,Ee]=e(J)),{render:se,hydrate:K,createApp:Rm(se,K)}}function vi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function qf(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ti(r[s]),a.el=o.el),t||qf(o,a)),a.type===ko&&(a.el=o.el)}}function Um(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Vm=n=>n.__isTeleport,kt=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),di=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),Qr=[];let rn=null;function Ke(n=!1){Qr.push(rn=n?null:[])}function km(){Qr.pop(),rn=Qr[Qr.length-1]||null}let hs=1;function kc(n){hs+=n}function Xf(n){return n.dynamicChildren=hs>0?rn||gr:null,km(),hs>0&&rn&&rn.push(n),n}function Rt(n,e,t,i,r,s){return Xf(ut(n,e,t,i,r,s,!0))}function Wt(n,e,t,i,r){return Xf(st(n,e,t,i,r,!0))}function To(n){return n?n.__v_isVNode===!0:!1}function kr(n,e){return n.type===e.type&&n.key===e.key}const Ho="__vInternal",Yf=({key:n})=>n??null,go=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||Et(n)||Ne(n)?{i:yt,r:n,k:e,f:!!t}:n:null);function ut(n,e=null,t=null,i=0,r=null,s=n===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yf(e),ref:e&&go(e),scopeId:Uo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(rc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),hs>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const st=Hm;function Hm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Bf)&&(n=di),To(n)){const a=wr(n,e,!0);return t&&rc(a,t),hs>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag|=-2,a}if(Qm(n)&&(n=n.__vccOpts),e){e=Gm(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=as(a)),tt(l)&&(Mf(l)&&!Ie(l)&&(l=vt({},l)),e.style=kl(l))}const o=ft(n)?1:am(n)?128:Vm(n)?64:tt(n)?4:Ne(n)?2:0;return ut(n,e,t,i,r,o,s,!0)}function Gm(n){return n?Mf(n)||Ho in n?vt({},n):n:null}function wr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Ze(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Yf(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(go(e)):[r,go(e)]:go(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wr(n.ssContent),ssFallback:n.ssFallback&&wr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Go(n=" ",e=0){return st(ko,null,n,e)}function es(n="",e=!1){return e?(Ke(),Wt(di,null,n)):st(di,null,n)}function xn(n){return n==null||typeof n=="boolean"?st(di):Ie(n)?st(kt,null,n.slice()):typeof n=="object"?ti(n):st(ko,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wr(n)}function rc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ho in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:yt},t=32):(e=String(e),i&64?(t=16,e=[Go(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ze(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=as([e.class,i.class]));else if(r==="style")e.style=kl([e.style,i.style]);else if(Do(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){an(n,e,7,[t,i])}const Wm=kf();let $m=0;function jm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Wm,s={uid:$m++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(i,r),emitsOptions:Rf(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=em.bind(null,s),n.ce&&n.ce(s),s}let gt=null;const qm=()=>gt||yt;let sc,ji,Hc="__VUE_INSTANCE_SETTERS__";(ji=tl()[Hc])||(ji=tl()[Hc]=[]),ji.push(n=>gt=n),sc=n=>{ji.length>1?ji.forEach(e=>e(n)):ji[0](n)};const Er=n=>{sc(n),n.scope.on()},Di=()=>{gt&&gt.scope.off(),sc(null)};function Zf(n){return n.vnode.shapeFlag&4}let fs=!1;function Xm(n,e=!1){fs=e;const{props:t,children:i}=n.vnode,r=Zf(n);Dm(n,t,r,e),Fm(n,i);const s=r?Ym(n,e):void 0;return fs=!1,s}function Ym(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Yl(new Proxy(n.ctx,wm));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Km(n):null;Er(n),Ir();const s=li(i,n,0,[n.props,r]);if(Or(),Di(),rf(s)){if(s.then(Di,Di),e)return s.then(o=>{Gc(n,o,e)}).catch(o=>{zo(o,n,0)});n.asyncDep=s}else Gc(n,s,e)}else Kf(n,e)}function Gc(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Tf(e)),Kf(n,t)}let Wc;function Kf(n,e,t){const i=n.type;if(!n.render){if(!e&&Wc&&!i.render){const r=i.template||nc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=vt(vt({isCustomElement:s,delimiters:a},o),l);i.render=Wc(r,c)}}n.render=i.render||on}Er(n),Ir(),Em(n),Or(),Di()}function Zm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return zt(n,"get","$attrs"),e[t]}}))}function Km(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Zm(n)},slots:n.slots,emit:n.emit,expose:e}}function Wo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Tf(Yl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Jr)return Jr[t](n)},has(e,t){return t in e||t in Jr}}))}function Jm(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function Qm(n){return Ne(n)&&"__vccOpts"in n}const tn=(n,e)=>Xp(n,e,fs);function Jf(n,e,t){const i=arguments.length;return i===2?tt(e)&&!Ie(e)?To(e)?st(n,null,[e]):st(n,e):st(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&To(t)&&(t=[t]),st(n,e,t))}const eg=Symbol.for("v-scx"),tg=()=>Un(eg),ng="3.3.4",ig="http://www.w3.org/2000/svg",wi=typeof document<"u"?document:null,$c=wi&&wi.createElement("template"),rg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?wi.createElementNS(ig,n):wi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>wi.createTextNode(n),createComment:n=>wi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>wi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$c.innerHTML=i?`<svg>${n}</svg>`:n;const a=$c.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function sg(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function og(n,e,t){const i=n.style,r=ft(t);if(t&&!r){if(e&&!ft(e))for(const s in e)t[s]==null&&fl(i,s,"");for(const s in t)fl(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const jc=/\s*!important$/;function fl(n,e,t){if(Ie(t))t.forEach(i=>fl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ag(n,e);jc.test(t)?n.setProperty(Dr(i),t.replace(jc,""),"important"):n[i]=t}}const qc=["Webkit","Moz","ms"],ca={};function ag(n,e){const t=ca[e];if(t)return t;let i=Tn(e);if(i!=="filter"&&i in n)return ca[e]=i;i=Fo(i);for(let r=0;r<qc.length;r++){const s=qc[r]+i;if(s in n)return ca[e]=s}return e}const Xc="http://www.w3.org/1999/xlink";function lg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Xc,e.slice(6,e.length)):n.setAttributeNS(Xc,e,t);else{const s=pp(e);t==null||s&&!af(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function cg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=af(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function ug(n,e,t,i){n.addEventListener(e,t,i)}function hg(n,e,t,i){n.removeEventListener(e,t,i)}function fg(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=dg(e);if(i){const c=s[e]=gg(i,r);ug(n,a,c,l)}else o&&(hg(n,a,o,l),s[e]=void 0)}}const Yc=/(?:Once|Passive|Capture)$/;function dg(n){let e;if(Yc.test(n)){e={};let i;for(;i=n.match(Yc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Dr(n.slice(2)),e]}let ua=0;const pg=Promise.resolve(),mg=()=>ua||(pg.then(()=>ua=0),ua=Date.now());function gg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(vg(i,t.value),e,5,[i])};return t.value=n,t.attached=mg(),t}function vg(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Zc=/^on[a-z]/,_g=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?sg(n,i,r):e==="style"?og(n,t,i):Do(e)?zl(e)||fg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xg(n,e,i,r))?cg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),lg(n,e,i,r))};function xg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Zc.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Zc.test(e)&&ft(t)?!1:e in n}const yg=vt({patchProp:_g},rg);let Kc;function bg(){return Kc||(Kc=zm(yg))}const Mg=(...n)=>{const e=bg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Sg(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sg(n){return ft(n)?document.querySelector(n):n}var wg=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Eg=Symbol();var Jc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Jc||(Jc={}));function Tg(){const n=mp(!0),e=n.run(()=>Bn({}));let t=[],i=[];const r=Yl({install(s){r._a=s,s.provide(Eg,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!wg?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const cr=typeof window<"u";function Ag(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function ha(n,e){const t={};for(const i in e){const r=e[i];t[i]=cn(r)?r.map(n):n(r)}return t}const ts=()=>{},cn=Array.isArray,Cg=/\/$/,Pg=n=>n.replace(Cg,"");function fa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ig(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Lg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Rg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Tr(e.matched[i],t.matched[r])&&Qf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Tr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Qf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Dg(n[t],e[t]))return!1;return!0}function Dg(n,e){return cn(n)?eu(n,e):cn(e)?eu(e,n):n===e}function eu(n,e){return cn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Ig(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ds;(function(n){n.pop="pop",n.push="push"})(ds||(ds={}));var ns;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ns||(ns={}));function Og(n){if(!n)if(cr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Pg(n)}const Fg=/^[^#]+#/;function Ng(n,e){return n.replace(Fg,"#")+e}function zg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const $o=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=zg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tu(n,e){return(history.state?history.state.position-e:-1)+n}const dl=new Map;function Ug(n,e){dl.set(n,e)}function Vg(n){const e=dl.get(n);return dl.delete(n),e}let kg=()=>location.protocol+"//"+location.host;function ed(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Qc(l,"")}return Qc(t,n)+i+r}function Hg(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=ed(n,location),g=t.value,m=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}p=m?f.position-m.position:0}else i(d);r.forEach(v=>{v(t.value,g,{delta:p,type:ds.pop,direction:p?p>0?ns.forward:ns.back:ns.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ye({},f.state,{scroll:$o()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function nu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?$o():null}}function Gg(n){const{history:e,location:t}=window,i={value:ed(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:kg()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ye({},e.state,nu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ye({},r.value,e.state,{forward:l,scroll:$o()});s(u.current,u,!0);const h=Ye({},nu(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Wg(n){n=Og(n);const e=Gg(n),t=Hg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ye({location:"",base:n,go:i,createHref:Ng.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $g(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Wg(n)}function jg(n){return typeof n=="string"||n&&typeof n=="object"}function td(n){return typeof n=="string"||typeof n=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nd=Symbol("");var iu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(iu||(iu={}));function Ar(n,e){return Ye(new Error,{type:n,[nd]:!0},e)}function An(n,e){return n instanceof Error&&nd in n&&(e==null||!!(n.type&e))}const ru="[^/]+?",qg={sensitive:!1,strict:!1,start:!0,end:!0},Xg=/[.+*?^${}()[\]/\\]/g;function Yg(n,e){const t=Ye({},qg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Xg,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:m,optional:p,regexp:v}=f;s.push({name:g,repeatable:m,optional:p});const x=v||ru;if(x!==ru){d+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+E.message)}}let C=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(C=p&&c.length<2?`(?:/${C})`:"/"+C),p&&(C+="?"),r+=C,d+=20,p&&(d+=-8),m&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,v=g in c?c[g]:"";if(cn(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=cn(v)?v.join("/"):v;if(!x)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Zg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Kg(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Zg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(su(i))return 1;if(su(r))return-1}return r.length-i.length}function su(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Jg={type:0,value:""},Qg=/[a-zA-Z0-9_]/;function e0(n){if(!n)return[[]];if(n==="/")return[[Jg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Qg.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function t0(n,e,t){const i=Yg(e0(n.path),t),r=Ye(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function n0(n,e){const t=[],i=new Map;e=lu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,g=i0(u);g.aliasOf=f&&f.record;const m=lu(e,u),p=[g];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of C)p.push(Ye({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let v,x;for(const C of p){const{path:E}=C;if(h&&E[0]!=="/"){const S=h.record.path,R=S[S.length-1]==="/"?"":"/";C.path=h.record.path+(E&&R+E)}if(v=t0(C,h,m),f?f.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),d&&u.name&&!au(v)&&o(u.name)),g.children){const S=g.children;for(let R=0;R<S.length;R++)s(S[R],v,f&&f.children[R])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return x?()=>{o(x)}:ts}function o(u){if(td(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Kg(u,t[h])>=0&&(u.record.path!==t[h].record.path||!id(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!au(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},g,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ar(1,{location:u});m=f.record.name,d=Ye(ou(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&ou(u.params,f.keys.map(x=>x.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(x=>x.re.test(g)),f&&(d=f.parse(g),m=f.record.name);else{if(f=h.name?i.get(h.name):t.find(x=>x.re.test(h.path)),!f)throw Ar(1,{location:u,currentLocation:h});m=f.record.name,d=Ye({},h.params,u.params),g=f.stringify(d)}const p=[];let v=f;for(;v;)p.unshift(v.record),v=v.parent;return{name:m,path:g,params:d,matched:p,meta:s0(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ou(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function i0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:r0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function r0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function au(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function s0(n){return n.reduce((e,t)=>Ye(e,t.meta),{})}function lu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function id(n,e){return e.children.some(t=>t===n||id(n,t))}const rd=/#/g,o0=/&/g,a0=/\//g,l0=/=/g,c0=/\?/g,sd=/\+/g,u0=/%5B/g,h0=/%5D/g,od=/%5E/g,f0=/%60/g,ad=/%7B/g,d0=/%7C/g,ld=/%7D/g,p0=/%20/g;function oc(n){return encodeURI(""+n).replace(d0,"|").replace(u0,"[").replace(h0,"]")}function m0(n){return oc(n).replace(ad,"{").replace(ld,"}").replace(od,"^")}function pl(n){return oc(n).replace(sd,"%2B").replace(p0,"+").replace(rd,"%23").replace(o0,"%26").replace(f0,"`").replace(ad,"{").replace(ld,"}").replace(od,"^")}function g0(n){return pl(n).replace(l0,"%3D")}function v0(n){return oc(n).replace(rd,"%23").replace(c0,"%3F")}function _0(n){return n==null?"":v0(n).replace(a0,"%2F")}function Ao(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function x0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(sd," "),o=s.indexOf("="),a=Ao(o<0?s:s.slice(0,o)),l=o<0?null:Ao(s.slice(o+1));if(a in e){let c=e[a];cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cu(n){let e="";for(let t in n){const i=n[t];if(t=g0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(cn(i)?i.map(s=>s&&pl(s)):[i&&pl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function y0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const b0=Symbol(""),uu=Symbol(""),ac=Symbol(""),cd=Symbol(""),ml=Symbol("");function Hr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ni(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ar(4,{from:t,to:e})):h instanceof Error?a(h):jg(h)?a(Ar(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function da(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(M0(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ni(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Ag(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ni(f,t,i,s,o)()}))}}return r}function M0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hu(n){const e=Un(ac),t=Un(cd),i=tn(()=>e.resolve(Sn(n.to))),r=tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Tr.bind(null,u));if(f>-1)return f;const d=fu(l[c-2]);return c>1&&fu(u)===d&&h[h.length-1].path!==d?h.findIndex(Tr.bind(null,l[c-2])):f}),s=tn(()=>r.value>-1&&T0(t.params,i.value.params)),o=tn(()=>r.value>-1&&r.value===t.matched.length-1&&Qf(t.params,i.value.params));function a(l={}){return E0(l)?e[Sn(n.replace)?"replace":"push"](Sn(n.to)).catch(ts):Promise.resolve()}return{route:i,href:tn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const S0=Fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(n,{slots:e}){const t=ws(hu(n)),{options:i}=Un(ac),r=tn(()=>({[du(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[du(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Jf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),w0=S0;function E0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function T0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!cn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function fu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const du=(n,e,t)=>n??e??t,A0=Fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Un(ml),r=tn(()=>n.route||i.value),s=Un(uu,0),o=tn(()=>{let c=Sn(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=tn(()=>r.value.matched[o.value]);mo(uu,tn(()=>o.value+1)),mo(b0,a),mo(ml,r);const l=Bn();return Zr(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Tr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return pu(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Jf(f,Ye({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return pu(t.default,{Component:p,route:c})||p}}});function pu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const C0=A0;function P0(n){const e=n0(n.routes,n),t=n.parseQuery||x0,i=n.stringifyQuery||cu,r=n.history,s=Hr(),o=Hr(),a=Hr(),l=Wp(jn);let c=jn;cr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ha.bind(null,k=>""+k),h=ha.bind(null,_0),f=ha.bind(null,Ao);function d(k,se){let J,K;return td(k)?(J=e.getRecordMatcher(k),K=se):K=k,e.addRoute(K,J)}function g(k){const se=e.getRecordMatcher(k);se&&e.removeRoute(se)}function m(){return e.getRoutes().map(k=>k.record)}function p(k){return!!e.getRecordMatcher(k)}function v(k,se){if(se=Ye({},se||l.value),typeof k=="string"){const I=fa(t,k,se.path),H=e.resolve({path:I.path},se),Z=r.createHref(I.fullPath);return Ye(I,H,{params:f(H.params),hash:Ao(I.hash),redirectedFrom:void 0,href:Z})}let J;if("path"in k)J=Ye({},k,{path:fa(t,k.path,se.path).path});else{const I=Ye({},k.params);for(const H in I)I[H]==null&&delete I[H];J=Ye({},k,{params:h(I)}),se.params=h(se.params)}const K=e.resolve(J,se),Ee=k.hash||"";K.params=u(f(K.params));const w=Lg(i,Ye({},k,{hash:m0(Ee),path:K.path})),A=r.createHref(w);return Ye({fullPath:w,hash:Ee,query:i===cu?y0(k.query):k.query||{}},K,{redirectedFrom:void 0,href:A})}function x(k){return typeof k=="string"?fa(t,k,l.value.path):Ye({},k)}function C(k,se){if(c!==k)return Ar(8,{from:se,to:k})}function E(k){return F(k)}function S(k){return E(Ye(x(k),{replace:!0}))}function R(k){const se=k.matched[k.matched.length-1];if(se&&se.redirect){const{redirect:J}=se;let K=typeof J=="function"?J(k):J;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=x(K):{path:K},K.params={}),Ye({query:k.query,hash:k.hash,params:"path"in K?{}:k.params},K)}}function F(k,se){const J=c=v(k),K=l.value,Ee=k.state,w=k.force,A=k.replace===!0,I=R(J);if(I)return F(Ye(x(I),{state:typeof I=="object"?Ye({},Ee,I.state):Ee,force:w,replace:A}),se||J);const H=J;H.redirectedFrom=se;let Z;return!w&&Rg(i,K,J)&&(Z=Ar(16,{to:H,from:K}),fe(K,K,!0,!1)),(Z?Promise.resolve(Z):z(H,K)).catch(re=>An(re)?An(re,2)?re:ee(re):W(re,H,K)).then(re=>{if(re){if(An(re,2))return F(Ye({replace:A},x(re.to),{state:typeof re.to=="object"?Ye({},Ee,re.to.state):Ee,force:w}),se||H)}else re=xe(H,K,!0,A,Ee);return B(H,K,re),re})}function b(k,se){const J=C(k,se);return J?Promise.reject(J):Promise.resolve()}function L(k){const se=we.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(k):k()}function z(k,se){let J;const[K,Ee,w]=L0(k,se);J=da(K.reverse(),"beforeRouteLeave",k,se);for(const I of K)I.leaveGuards.forEach(H=>{J.push(ni(H,k,se))});const A=b.bind(null,k,se);return J.push(A),X(J).then(()=>{J=[];for(const I of s.list())J.push(ni(I,k,se));return J.push(A),X(J)}).then(()=>{J=da(Ee,"beforeRouteUpdate",k,se);for(const I of Ee)I.updateGuards.forEach(H=>{J.push(ni(H,k,se))});return J.push(A),X(J)}).then(()=>{J=[];for(const I of w)if(I.beforeEnter)if(cn(I.beforeEnter))for(const H of I.beforeEnter)J.push(ni(H,k,se));else J.push(ni(I.beforeEnter,k,se));return J.push(A),X(J)}).then(()=>(k.matched.forEach(I=>I.enterCallbacks={}),J=da(w,"beforeRouteEnter",k,se),J.push(A),X(J))).then(()=>{J=[];for(const I of o.list())J.push(ni(I,k,se));return J.push(A),X(J)}).catch(I=>An(I,8)?I:Promise.reject(I))}function B(k,se,J){a.list().forEach(K=>L(()=>K(k,se,J)))}function xe(k,se,J,K,Ee){const w=C(k,se);if(w)return w;const A=se===jn,I=cr?history.state:{};J&&(K||A?r.replace(k.fullPath,Ye({scroll:A&&I&&I.scroll},Ee)):r.push(k.fullPath,Ee)),l.value=k,fe(k,se,J,A),ee()}let ce;function N(){ce||(ce=r.listen((k,se,J)=>{if(!Ce.listening)return;const K=v(k),Ee=R(K);if(Ee){F(Ye(Ee,{replace:!0}),K).catch(ts);return}c=K;const w=l.value;cr&&Ug(tu(w.fullPath,J.delta),$o()),z(K,w).catch(A=>An(A,12)?A:An(A,2)?(F(A.to,K).then(I=>{An(I,20)&&!J.delta&&J.type===ds.pop&&r.go(-1,!1)}).catch(ts),Promise.reject()):(J.delta&&r.go(-J.delta,!1),W(A,K,w))).then(A=>{A=A||xe(K,w,!1),A&&(J.delta&&!An(A,8)?r.go(-J.delta,!1):J.type===ds.pop&&An(A,20)&&r.go(-1,!1)),B(K,w,A)}).catch(ts)}))}let ie=Hr(),V=Hr(),$;function W(k,se,J){ee(k);const K=V.list();return K.length?K.forEach(Ee=>Ee(k,se,J)):console.error(k),Promise.reject(k)}function q(){return $&&l.value!==jn?Promise.resolve():new Promise((k,se)=>{ie.add([k,se])})}function ee(k){return $||($=!k,N(),ie.list().forEach(([se,J])=>k?J(k):se()),ie.reset()),k}function fe(k,se,J,K){const{scrollBehavior:Ee}=n;if(!cr||!Ee)return Promise.resolve();const w=!J&&Vg(tu(k.fullPath,0))||(K||!J)&&history.state&&history.state.scroll||null;return Jl().then(()=>Ee(k,se,w)).then(A=>A&&Bg(A)).catch(A=>W(A,k,se))}const le=k=>r.go(k);let de;const we=new Set,Ce={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:v,options:n,push:E,replace:S,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:q,install(k){const se=this;k.component("RouterLink",w0),k.component("RouterView",C0),k.config.globalProperties.$router=se,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Sn(l)}),cr&&!de&&l.value===jn&&(de=!0,E(r.location).catch(Ee=>{}));const J={};for(const Ee in jn)Object.defineProperty(J,Ee,{get:()=>l.value[Ee],enumerable:!0});k.provide(ac,se),k.provide(cd,bf(J)),k.provide(ml,l);const K=k.unmount;we.add(k),k.unmount=function(){we.delete(k),we.size<1&&(c=jn,ce&&ce(),ce=null,l.value=jn,de=!1,$=!1),K()}}};function X(k){return k.reduce((se,J)=>se.then(()=>L(J)),Promise.resolve())}return Ce}function L0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Tr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Tr(c,l))||r.push(l))}return[t,i,r]}function pa(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=lc(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return s=c.done,c},e:function(c){o=!0,a=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(o)throw a}}}}function R0(n){return O0(n)||I0(n)||lc(n)||D0()}function D0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I0(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O0(n){if(Array.isArray(n))return gl(n)}function is(n){"@babel/helpers - typeof";return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},is(n)}function ma(n,e){return z0(n)||N0(n,e)||lc(n,e)||F0()}function F0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lc(n,e){if(n){if(typeof n=="string")return gl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gl(n,e)}}function gl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function N0(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function z0(n){if(Array.isArray(n))return n}var lt={innerWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},width:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,t){if(e){var i=e.offsetWidth;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}return 0},getOuterHeight:function(e,t){if(e){var i=e.offsetHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getClientHeight:function(e,t){if(e){var i=e.clientHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getViewport:function(){var e=window,t=document,i=t.documentElement,r=t.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,o=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:o}},getOffset:function(e){if(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var t=e.parentNode.childNodes,i=0,r=0;r<t.length;r++){if(t[r]===e)return i;t[r].nodeType===1&&i++}return-1},addMultipleClasses:function(e,t){var i=this;e&&t&&t.split(" ").forEach(function(r){return i.addClass(e,r)})},addClass:function(e,t){e&&t&&!this.hasClass(e,t)&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1},addStyles:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(t).forEach(function(i){var r=ma(i,2),s=r[0],o=r[1];return e.style[s]=o})},find:function(e,t){return this.isElement(e)?e.querySelectorAll(t):[]},findSingle:function(e,t){return this.isElement(e)?e.querySelector(t):null},createElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var i=document.createElement(e);this.setAttributes(i,t);for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return i.append.apply(i,s),i}},setAttribute:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)},setAttributes:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var r=function s(o,a){var l,c,u=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[o]?[e==null||(c=e.$attrs)===null||c===void 0?void 0:c[o]]:[];return[a].flat().reduce(function(h,f){if(f!=null){var d=is(f);if(d==="string"||d==="number")h.push(f);else if(d==="object"){var g=Array.isArray(f)?s(o,f):Object.entries(f).map(function(m){var p=ma(m,2),v=p[0],x=p[1];return o==="style"&&(x||x===0)?"".concat(v.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(x):x?v:void 0});h=g.length?h.concat(g.filter(function(m){return!!m})):h}}return h},u)};Object.entries(i).forEach(function(s){var o=ma(s,2),a=o[0],l=o[1];if(l!=null){var c=a.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),l):a==="p-bind"?t.setAttributes(e,l):(l=a==="class"?R0(new Set(r("class",l))).join(" ").trim():a==="style"?r("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[a]=l),e.setAttribute(a,l))}})}},getAttribute:function(e,t){if(this.isElement(e)){var i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}},isAttributeEquals:function(e,t,i){return this.isElement(e)?this.getAttribute(e,t)===i:!1},isAttributeNotEquals:function(e,t,i){return!this.isAttributeEquals(e,t,i)},getHeight:function(e){if(e){var t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}return 0},getWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}return 0},absolutePosition:function(e,t){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,s=i.width,o=t.offsetHeight,a=t.offsetWidth,l=t.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),h=this.getViewport(),f,d;l.top+o+r>h.height?(f=l.top+c-r,e.style.transformOrigin="bottom",f<0&&(f=c)):(f=o+l.top+c,e.style.transformOrigin="top"),l.left+s>h.width?d=Math.max(0,l.left+u+a-s):d=l.left+u,e.style.top=f+"px",e.style.left=d+"px"}},relativePosition:function(e,t){if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,s=t.getBoundingClientRect(),o=this.getViewport(),a,l;s.top+r+i.height>o.height?(a=-1*i.height,e.style.transformOrigin="bottom",s.top+a<0&&(a=-1*s.top)):(a=r,e.style.transformOrigin="top"),i.width>o.width?l=s.left*-1:s.left+i.width>o.width?l=(s.left+i.width-o.width)*-1:l=0,e.style.top=a+"px",e.style.left=l+"px"}},getParents:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))},getScrollableParents:function(e){var t=[];if(e){var i=this.getParents(e),r=/(auto|scroll)/,s=function(p){try{var v=window.getComputedStyle(p,null);return r.test(v.getPropertyValue("overflow"))||r.test(v.getPropertyValue("overflowX"))||r.test(v.getPropertyValue("overflowY"))}catch{return!1}},o=pa(i),a;try{for(o.s();!(a=o.n()).done;){var l=a.value,c=l.nodeType===1&&l.dataset.scrollselectors;if(c){var u=c.split(","),h=pa(u),f;try{for(h.s();!(f=h.n()).done;){var d=f.value,g=this.findSingle(l,d);g&&s(g)&&t.push(g)}}catch(m){h.e(m)}finally{h.f()}}l.nodeType!==9&&s(l)&&t.push(l)}}catch(m){o.e(m)}finally{o.f()}}return t},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementDimensions:function(e){if(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}return 0},fadeIn:function(e,t){if(e){e.style.opacity=0;var i=+new Date,r=0,s=function o(){r=+e.style.opacity+(new Date().getTime()-i)/t,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};s()}},fadeOut:function(e,t){if(e)var i=1,r=50,s=t,o=r/s,a=setInterval(function(){i-=o,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},r)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.elElement)t.elElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":is(HTMLElement))==="object"?e instanceof HTMLElement:e&&is(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,t){var i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,a=e.getBoundingClientRect(),l=t.getBoundingClientRect(),c=l.top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-o,u=e.scrollTop,h=e.clientHeight,f=this.getOuterHeight(t);c<0?e.scrollTop=u+c:c+f>h&&(e.scrollTop=u+c-h+f)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,t,i){e[t].apply(e,i)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,t){e&&document.activeElement!==e&&e.focus(t)},isFocusableElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
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
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)),r=[],s=pa(i),o;try{for(s.s();!(o=s.n()).done;){var a=o.value;getComputedStyle(a).display!="none"&&getComputedStyle(a).visibility!="hidden"&&r.push(a)}}catch(l){s.e(l)}finally{s.f()}return r},getFirstFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[0]:null},getLastFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null},getNextFocusableElement:function(e,t,i){var r=this.getFocusableElements(e,i),s=r.length>0?r.findIndex(function(a){return a===t}):-1,o=s>-1&&r.length>=s+1?s+1:-1;return o>-1?r[o]:null},isClickable:function(e){if(e){var t=e.nodeName,i=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,t){if(typeof t=="string")e.style.cssText=t;else for(var i in t)e.style[i]=t[i]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("animation-duration")||"0");return i>0}return!1},hasCSSTransition:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0}return!1},exportCSV:function(e,t){var i=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(i,t+".csv");else{var r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(i)),r.setAttribute("download",t+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}};function B0(n,e){return k0(n)||V0(n,e)||cc(n,e)||U0()}function U0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V0(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function k0(n){if(Array.isArray(n))return n}function mu(n){return W0(n)||G0(n)||cc(n)||H0()}function H0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G0(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function W0(n){if(Array.isArray(n))return vl(n)}function ga(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=cc(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return s=c.done,c},e:function(c){o=!0,a=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(o)throw a}}}}function cc(n,e){if(n){if(typeof n=="string")return vl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vl(n,e)}}function vl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function rs(n){"@babel/helpers - typeof";return rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rs(n)}var Ue={equals:function(e,t,i){return i?this.resolveFieldData(e,i)===this.resolveFieldData(t,i):this.deepEquals(e,t)},deepEquals:function(e,t){if(e===t)return!0;if(e&&t&&rs(e)=="object"&&rs(t)=="object"){var i=Array.isArray(e),r=Array.isArray(t),s,o,a;if(i&&r){if(o=e.length,o!=t.length)return!1;for(s=o;s--!==0;)if(!this.deepEquals(e[s],t[s]))return!1;return!0}if(i!=r)return!1;var l=e instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==t.getTime();var u=e instanceof RegExp,h=t instanceof RegExp;if(u!=h)return!1;if(u&&h)return e.toString()==t.toString();var f=Object.keys(e);if(o=f.length,o!==Object.keys(t).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,f[s]))return!1;for(s=o;s--!==0;)if(a=f[s],!this.deepEquals(e[a],t[a]))return!1;return!0}return e!==e&&t!==t},resolveFieldData:function(e,t){if(!e||!t)return null;try{var i=e[t];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(t.indexOf(".")===-1)return e[t];for(var r=t.split("."),s=e,o=0,a=r.length;o<a;++o){if(s==null)return null;s=s[r[o]]}return s}return null},getItemValue:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,i):e},filter:function(e,t,i){var r=[];if(e){var s=ga(e),o;try{for(s.s();!(o=s.n()).done;){var a=o.value,l=ga(t),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(String(this.resolveFieldData(a,u)).toLowerCase().indexOf(i.toLowerCase())>-1){r.push(a);break}}}catch(h){l.e(h)}finally{l.f()}}}catch(h){s.e(h)}finally{s.f()}}return r},reorderArray:function(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))},findIndexInList:function(e,t){var i=-1;if(t){for(var r=0;r<t.length;r++)if(t[r]===e){i=r;break}}return i},contains:function(e,t){if(e!=null&&t&&t.length){var i=ga(t),r;try{for(i.s();!(r=i.n()).done;){var s=r.value;if(this.equals(e,s))return!0}}catch(o){i.e(o)}finally{i.f()}}return!1},insertIntoOrderedArray:function(e,t,i,r){if(i.length>0){for(var s=!1,o=0;o<i.length;o++){var a=this.findIndexInList(i[o],r);if(a>t){i.splice(o,0,e),s=!0;break}}s||i.push(e)}else i.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,t){var i=e.props;if(i){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(i,r)?r:t;return e.type.extends.props[t].type===Boolean&&i[s]===""?!0:i[s]}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(t,i){return i===0?t:"-"+t.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&rs(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(t||e.length!==0)},isString:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(t||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,t){var i;if(this.isNotEmpty(e))try{i=e.findLast(t)}catch{i=mu(e).reverse().find(t)}return i},findLastIndex:function(e,t){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(t)}catch{i=e.lastIndexOf(mu(e).reverse().find(t))}return i},nestedKeys:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(t).reduce(function(r,s){var o=B0(s,2),a=o[0],l=o[1],c=i?"".concat(i,".").concat(a):a;return e.isObject(l)?r=r.concat(e.nestedKeys(l,c)):r.push(c),r},[])}},gu=0;function $0(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return gu++,"".concat(n).concat(gu)}var Mt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function ps(n){"@babel/helpers - typeof";return ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ps(n)}function vu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function va(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?vu(Object(t),!0).forEach(function(i){j0(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):vu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function j0(n,e,t){return e=q0(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function q0(n){var e=X0(n,"string");return ps(e)==="symbol"?e:String(e)}function X0(n,e){if(ps(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(ps(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var _u={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[Mt.STARTS_WITH,Mt.CONTAINS,Mt.NOT_CONTAINS,Mt.ENDS_WITH,Mt.EQUALS,Mt.NOT_EQUALS],numeric:[Mt.EQUALS,Mt.NOT_EQUALS,Mt.LESS_THAN,Mt.LESS_THAN_OR_EQUAL_TO,Mt.GREATER_THAN,Mt.GREATER_THAN_OR_EQUAL_TO],date:[Mt.DATE_IS,Mt.DATE_IS_NOT,Mt.DATE_BEFORE,Mt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,unstyled:!1,csp:{nonce:void 0}},Y0=Symbol();function Z0(n,e,t,i){var r=document.getElementById(t),s=r.cloneNode(!0),o=r.getAttribute("href").replace(n,e);s.setAttribute("id",t+"-clone"),s.setAttribute("href",o),s.addEventListener("load",function(){r.remove(),s.setAttribute("id",t),i&&i()}),r.parentNode&&r.parentNode.insertBefore(s,r.nextSibling)}var K0={install:function(e,t){var i=t?va(va({},_u),t):va({},_u),r={config:ws(i),changeTheme:Z0};e.config.globalProperties.$primevue=r,e.provide(Y0,r)}};const jo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},J0={};function Q0(n,e){const t=Ni("router-view");return Ke(),Wt(t)}const ev=jo(J0,[["render",Q0]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="141",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tv=0,xu=1,nv=2,ud=1,iv=2,Xr=3,ms=0,ln=1,pi=2,rv=1,ci=0,yr=1,yu=2,bu=3,Mu=4,sv=5,ur=100,ov=101,av=102,Su=103,wu=104,lv=200,cv=201,uv=202,hv=203,hd=204,fd=205,fv=206,dv=207,pv=208,mv=209,gv=210,vv=0,_v=1,xv=2,_l=3,yv=4,bv=5,Mv=6,Sv=7,qo=0,wv=1,Ev=2,Vn=0,Tv=1,Av=2,Cv=3,Pv=4,Lv=5,dd=300,Cr=301,Pr=302,xl=303,yl=304,Xo=306,bl=1e3,nn=1001,Ml=1002,Ft=1003,Eu=1004,Tu=1005,$t=1006,Rv=1007,Yo=1008,zi=1009,Dv=1010,Iv=1011,pd=1012,Ov=1013,Ci=1014,Pi=1015,gs=1016,Fv=1017,Nv=1018,br=1020,zv=1021,Bv=1022,sn=1023,Uv=1024,Vv=1025,Ii=1026,Lr=1027,kv=1028,Hv=1029,Gv=1030,Wv=1031,$v=1033,_a=33776,xa=33777,ya=33778,ba=33779,Au=35840,Cu=35841,Pu=35842,Lu=35843,jv=36196,Ru=37492,Du=37496,Iu=37808,Ou=37809,Fu=37810,Nu=37811,zu=37812,Bu=37813,Uu=37814,Vu=37815,ku=37816,Hu=37817,Gu=37818,Wu=37819,$u=37820,ju=37821,qu=36492,Bi=3e3,it=3001,qv=3200,Xv=3201,Nr=0,Yv=1,Nn="srgb",Li="srgb-linear",Ma=7680,Zv=519,Xu=35044,Yu="300 es",Sl=1035;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _t=[];for(let n=0;n<256;n++)_t[n]=(n<16?"0":"")+n.toString(16);const vo=Math.PI/180,wl=180/Math.PI;function Ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Kv(n,e){return(n%e+e)%e}function Sa(n,e,t){return(1-t)*n+t*e}function Zu(n){return(n&n-1)===0&&n!==0}function El(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Le{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],m=r[0],p=r[3],v=r[6],x=r[1],C=r[4],E=r[7],S=r[2],R=r[5],F=r[8];return s[0]=o*m+a*x+l*S,s[3]=o*p+a*C+l*R,s[6]=o*v+a*E+l*F,s[1]=c*m+u*x+h*S,s[4]=c*p+u*C+h*R,s[7]=c*v+u*E+h*F,s[2]=f*m+d*x+g*S,s[5]=f*p+d*C+g*R,s[8]=f*v+d*E+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wa={[Nn]:{[Li]:Oi},[Li]:{[Nn]:_o}},qt={legacyMode:!0,get workingColorSpace(){return Li},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(wa[e]&&wa[e][t]!==void 0){const i=wa[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},Xt={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vs(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Li){return this.r=e,this.g=t,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Li){if(e=Kv(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ea(o,s,e+1/3),this.g=Ea(o,s,e),this.b=Ea(o,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nn){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return qt.fromWorkingColorSpace(Vs(this,dt),e),Lt(dt.r*255,0,255)<<16^Lt(dt.g*255,0,255)<<8^Lt(dt.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Li){qt.fromWorkingColorSpace(Vs(this,dt),t);const i=dt.r,r=dt.g,s=dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Li){return qt.fromWorkingColorSpace(Vs(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Nn){return qt.fromWorkingColorSpace(Vs(this,dt),e),e!==Nn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=i,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(Us);const i=Sa(Xt.h,Us.h,t),r=Sa(Xt.s,Us.s,t),s=Sa(Xt.l,Us.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=gd;let Yi;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=Co("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _d{constructor(e=null){this.isSource=!0,this.uuid=Ts(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ta(r[o].image)):s.push(Ta(r[o]))}else s=Ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vd.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class un extends Vi{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=nn,r=nn,s=$t,o=Yo,a=sn,l=zi,c=1,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ts(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=dd;class bt{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,E=(d+1)/2,S=(v+1)/2,R=(u+f)/4,F=(h+m)/4,b=(g+p)/4;return C>E&&C>S?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=R/i,s=F/i):E>S?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=b/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=F/s,r=b/s),this.set(i,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Vi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$t,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xd extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qv extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const v=l*f+c*d+u*g+h*m,x=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const S=Math.sqrt(C),R=Math.atan2(S,v*x);p=Math.sin(p*R)/S,a=Math.sin(a*R)/S}const E=a*x;if(l=l*p+f*E,c=c*p+d*E,u=u*p+g*E,h=h*p+m*E,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new D,Ku=new Ui;class zr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)_i.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox),Ca.applyMatrix4(e.matrixWorld),this.union(Ca);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),ks.subVectors(this.max,Gr),Zi.subVectors(e.a,Gr),Ki.subVectors(e.b,Gr),Ji.subVectors(e.c,Gr),qn.subVectors(Ki,Zi),Xn.subVectors(Ji,Ki),xi.subVectors(Zi,Ji);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-xi.z,xi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,xi.z,0,-xi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-xi.y,xi.x,0];return!Pa(t,Zi,Ki,Ji,ks)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,Zi,Ki,Ji,ks))?!1:(Hs.crossVectors(qn,Xn),t=[Hs.x,Hs.y,Hs.z],Pa(t,Zi,Ki,Ji,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _i.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new D,new D,new D,new D,new D,new D,new D,new D],_i=new D,Ca=new zr,Zi=new D,Ki=new D,Ji=new D,qn=new D,Xn=new D,xi=new D,Gr=new D,ks=new D,Hs=new D,yi=new D;function Pa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yi.fromArray(n,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=i.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const e_=new zr,Ju=new D,Gs=new D,La=new D;class As{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):e_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(La.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Gs.set(0,0,1).multiplyScalar(e.radius):Gs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ju.copy(e.center).add(Gs)),this.expandByPoint(Ju.copy(e.center).sub(Gs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new D,Ra=new D,Ws=new D,Yn=new D,Da=new D,$s=new D,Ia=new D;class Zo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.direction).multiplyScalar(t).add(this.origin),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ra.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=Yn.dot(this.direction),l=-Yn.dot(Ws),c=Yn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ws).multiplyScalar(f).add(Ra),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){Da.subVectors(t,e),$s.subVectors(i,e),Ia.crossVectors(Da,$s);let o=this.direction.dot(Ia),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot($s.crossVectors(Yn,$s));if(l<0)return null;const c=a*this.direction.dot(Da.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Ia);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Zn.crossVectors(i,Ut),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Zn.crossVectors(i,Ut)),Zn.normalize(),js.crossVectors(Ut,Zn),r[0]=Zn.x,r[4]=js.x,r[8]=Ut.x,r[1]=Zn.y,r[5]=js.y,r[9]=Ut.y,r[2]=Zn.z,r[6]=js.z,r[10]=Ut.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],m=i[6],p=i[10],v=i[14],x=i[3],C=i[7],E=i[11],S=i[15],R=r[0],F=r[4],b=r[8],L=r[12],z=r[1],B=r[5],xe=r[9],ce=r[13],N=r[2],ie=r[6],V=r[10],$=r[14],W=r[3],q=r[7],ee=r[11],fe=r[15];return s[0]=o*R+a*z+l*N+c*W,s[4]=o*F+a*B+l*ie+c*q,s[8]=o*b+a*xe+l*V+c*ee,s[12]=o*L+a*ce+l*$+c*fe,s[1]=u*R+h*z+f*N+d*W,s[5]=u*F+h*B+f*ie+d*q,s[9]=u*b+h*xe+f*V+d*ee,s[13]=u*L+h*ce+f*$+d*fe,s[2]=g*R+m*z+p*N+v*W,s[6]=g*F+m*B+p*ie+v*q,s[10]=g*b+m*xe+p*V+v*ee,s[14]=g*L+m*ce+p*$+v*fe,s[3]=x*R+C*z+E*N+S*W,s[7]=x*F+C*B+E*ie+S*q,s[11]=x*b+C*xe+E*V+S*ee,s[15]=x*L+C*ce+E*$+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+m*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+v*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],x=h*p*c-m*f*c+m*l*d-a*p*d-h*l*v+a*f*v,C=g*f*c-u*p*c-g*l*d+o*p*d+u*l*v-o*f*v,E=u*m*c-g*h*c+g*a*d-o*m*d-u*a*v+o*h*v,S=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,R=t*x+i*C+r*E+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return e[0]=x*F,e[1]=(m*f*s-h*p*s-m*r*d+i*p*d+h*r*v-i*f*v)*F,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*v+i*l*v)*F,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*F,e[4]=C*F,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*v+t*f*v)*F,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*v-t*l*v)*F,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*F,e[8]=E*F,e[9]=(g*h*s-u*m*s-g*i*d+t*m*d+u*i*v-t*h*v)*F,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*v+t*a*v)*F,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*F,e[12]=S*F,e[13]=(u*m*r-g*h*r+g*i*f-t*m*f-u*i*p+t*h*p)*F,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*p-t*a*p)*F,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,m=o*u,p=o*h,v=a*h,x=l*c,C=l*u,E=l*h,S=i.x,R=i.y,F=i.z;return r[0]=(1-(m+v))*S,r[1]=(d+E)*S,r[2]=(g-C)*S,r[3]=0,r[4]=(d-E)*R,r[5]=(1-(f+v))*R,r[6]=(p+x)*R,r[7]=0,r[8]=(g+C)*F,r[9]=(p-x)*F,r[10]=(1-(f+m))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/s,u=1/o,h=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),h=(t+e)*l,f=(i+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new D,Yt=new ht,t_=new D(0,0,0),n_=new D(1,1,1),Zn=new D,js=new D,Ut=new D,Qu=new ht,eh=new Ui;class Cs{constructor(e=0,t=0,i=0,r=Cs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Cs.DefaultOrder="XYZ";Cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i_=0;const th=new D,er=new Ui,Ln=new ht,qs=new D,Wr=new D,r_=new D,s_=new Ui,nh=new D(1,0,0),ih=new D(0,1,0),rh=new D(0,0,1),o_={type:"added"},sh={type:"removed"};class Tt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new D,t=new Cs,i=new Ui,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new wn}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qs.copy(e):qs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Wr,qs,this.up):Ln.lookAt(qs,Wr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),er.setFromRotationMatrix(Ln),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new D(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;const Zt=new D,Rn=new D,Oa=new D,Dn=new D,tr=new D,nr=new D,oh=new D,Fa=new D,Na=new D,za=new D;class Mn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),Rn.subVectors(i,t),Oa.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(Rn),l=Zt.dot(Oa),c=Rn.dot(Rn),u=Rn.dot(Oa),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Dn),l.set(0,0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),Rn.subVectors(e,t),Zt.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Zt.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Mn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),Fa.subVectors(e,i);const l=tr.dot(Fa),c=nr.dot(Fa);if(l<=0&&c<=0)return t.copy(i);Na.subVectors(e,r);const u=tr.dot(Na),h=nr.dot(Na);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(tr,o);za.subVectors(e,s);const d=tr.dot(za),g=nr.dot(za);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(nr,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return oh.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(oh,a);const v=1/(p+m+f);return o=m*v,a=f*v,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let a_=0;class pt extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=yr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hd,this.blendDst=fd,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===rv;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==ms&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}pt.fromType=function(){return null};class Ko extends pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new D,Xs=new Le;class En{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Xu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Re),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Le),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new bt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class yd extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bd extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l_=0;const Ht=new ht,Ba=new Tt,ir=new D,Vt=new zr,$r=new zr,mt=new D;class Bt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?bd:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Vt.min,$r.min),Vt.expandByPoint(mt),mt.addVectors(Vt.max,$r.max),Vt.expandByPoint(mt)):(Vt.expandByPoint($r.min),Vt.expandByPoint($r.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),mt.add(ir)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let z=0;z<a;z++)c[z]=new D,u[z]=new D;const h=new D,f=new D,d=new D,g=new Le,m=new Le,p=new Le,v=new D,x=new D;function C(z,B,xe){h.fromArray(r,z*3),f.fromArray(r,B*3),d.fromArray(r,xe*3),g.fromArray(o,z*2),m.fromArray(o,B*2),p.fromArray(o,xe*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const ce=1/(m.x*p.y-p.x*m.y);isFinite(ce)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(ce),x.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(ce),c[z].add(v),c[B].add(v),c[xe].add(v),u[z].add(x),u[B].add(x),u[xe].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let z=0,B=E.length;z<B;++z){const xe=E[z],ce=xe.start,N=xe.count;for(let ie=ce,V=ce+N;ie<V;ie+=3)C(i[ie+0],i[ie+1],i[ie+2])}const S=new D,R=new D,F=new D,b=new D;function L(z){F.fromArray(s,z*3),b.copy(F);const B=c[z];S.copy(B),S.sub(F.multiplyScalar(F.dot(B))).normalize(),R.crossVectors(b,B);const ce=R.dot(u[z])<0?-1:1;l[z*4]=S.x,l[z*4+1]=S.y,l[z*4+2]=S.z,l[z*4+3]=ce}for(let z=0,B=E.length;z<B;++z){const xe=E[z],ce=xe.start,N=xe.count;for(let ie=ce,V=ce+N;ie<V;ie+=3)L(i[ie+0]),L(i[ie+1]),L(i[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[d++]}return new En(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new ht,rr=new Zo,Ua=new As,Kn=new D,Jn=new D,Qn=new D,Va=new D,ka=new D,Ha=new D,Ys=new D,Zs=new D,Ks=new D,Js=new Le,Qs=new Le,eo=new Le,Ga=new D,to=new D;class jt extends Tt{constructor(e=new Bt,t=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),e.ray.intersectsSphere(Ua)===!1)||(ah.copy(s).invert(),rr.copy(e.ray).applyMatrix4(ah),i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,d=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],x=r[v.materialIndex],C=Math.max(v.start,g.start),E=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let S=C,R=E;S<R;S+=3){const F=a.getX(S),b=a.getX(S+1),L=a.getX(S+2);o=no(this,x,e,rr,l,c,u,h,f,F,b,L),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const C=a.getX(v),E=a.getX(v+1),S=a.getX(v+2);o=no(this,r,e,rr,l,c,u,h,f,C,E,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],x=r[v.materialIndex],C=Math.max(v.start,g.start),E=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let S=C,R=E;S<R;S+=3){const F=S,b=S+1,L=S+2;o=no(this,x,e,rr,l,c,u,h,f,F,b,L),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const C=v,E=v+1,S=v+2;o=no(this,r,e,rr,l,c,u,h,f,C,E,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function c_(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==pi,a),l===null)return null;to.copy(a),to.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(to);return c<t.near||c>t.far?null:{distance:c,point:to.clone(),object:n}}function no(n,e,t,i,r,s,o,a,l,c,u,h){Kn.fromBufferAttribute(r,c),Jn.fromBufferAttribute(r,u),Qn.fromBufferAttribute(r,h);const f=n.morphTargetInfluences;if(s&&f){Ys.set(0,0,0),Zs.set(0,0,0),Ks.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(Va.fromBufferAttribute(v,c),ka.fromBufferAttribute(v,u),Ha.fromBufferAttribute(v,h),o?(Ys.addScaledVector(Va,p),Zs.addScaledVector(ka,p),Ks.addScaledVector(Ha,p)):(Ys.addScaledVector(Va.sub(Kn),p),Zs.addScaledVector(ka.sub(Jn),p),Ks.addScaledVector(Ha.sub(Qn),p)))}Kn.add(Ys),Jn.add(Zs),Qn.add(Ks)}n.isSkinnedMesh&&(n.boneTransform(c,Kn),n.boneTransform(u,Jn),n.boneTransform(h,Qn));const d=c_(n,e,t,i,Kn,Jn,Qn,Ga);if(d){a&&(Js.fromBufferAttribute(a,c),Qs.fromBufferAttribute(a,u),eo.fromBufferAttribute(a,h),d.uv=Mn.getUV(Ga,Kn,Jn,Qn,Js,Qs,eo,new Le)),l&&(Js.fromBufferAttribute(l,c),Qs.fromBufferAttribute(l,u),eo.fromBufferAttribute(l,h),d.uv2=Mn.getUV(Ga,Kn,Jn,Qn,Js,Qs,eo,new Le));const g={a:c,b:u,c:h,normal:new D,materialIndex:0};Mn.getNormal(Kn,Jn,Qn,g.normal),d.face=g}return d}class ki extends Bt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(m,p,v,x,C,E,S,R,F,b,L){const z=E/F,B=S/b,xe=E/2,ce=S/2,N=R/2,ie=F+1,V=b+1;let $=0,W=0;const q=new D;for(let ee=0;ee<V;ee++){const fe=ee*B-ce;for(let le=0;le<ie;le++){const de=le*z-xe;q[m]=de*x,q[p]=fe*C,q[v]=N,c.push(q.x,q.y,q.z),q[m]=0,q[p]=0,q[v]=R>0?1:-1,u.push(q.x,q.y,q.z),h.push(le/F),h.push(1-ee/b),$+=1}}for(let ee=0;ee<b;ee++)for(let fe=0;fe<F;fe++){const le=f+fe+ie*ee,de=f+fe+ie*(ee+1),we=f+(fe+1)+ie*(ee+1),Ce=f+(fe+1)+ie*ee;l.push(le,de,Ce),l.push(de,we,Ce),W+=6}a.addGroup(d,W,L),d+=W,f+=$}}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Rr(n[t]);for(const r in i)e[r]=i[r]}return e}const u_={clone:Rr,merge:St};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=h_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Md extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Md{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=90,or=1;class d_ extends Tt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Nt(sr,or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Nt(sr,or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Nt(sr,or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Nt(sr,or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Nt(sr,or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Nt(sr,or,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Vn,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Sd extends un{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p_ extends ui{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ki(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ci});s.uniforms.tEquirect.value=t;const o=new jt(r,s),a=t.minFilter;return t.minFilter===Yo&&(t.minFilter=$t),new d_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wa=new D,m_=new D,g_=new wn;class bi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wa.subVectors(i,t).cross(m_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g_.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new As,io=new D;class fc{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],C=i[15];return t[0].setComponents(a-r,h-l,m-f,C-p).normalize(),t[1].setComponents(a+r,h+l,m+f,C+p).normalize(),t[2].setComponents(a+s,h+c,m+d,C+v).normalize(),t[3].setComponents(a-s,h-c,m-d,C-v).normalize(),t[4].setComponents(a-o,h-u,m-g,C-x).normalize(),t[5].setComponents(a+o,h+u,m+g,C+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(io.x=r.normal.x>0?e.max.x:e.min.x,io.y=r.normal.y>0?e.max.y:e.min.y,io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,c),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Jo extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const x=v*f-o;for(let C=0;C<c;C++){const E=C*h-s;g.push(E,-x,0),m.push(0,0,1),p.push(C/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const C=x+c*v,E=x+c*(v+1),S=x+1+c*(v+1),R=x+1+c*v;d.push(C,E,R),d.push(E,S,R)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(p,2))}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var __=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w_="vec3 transformed = vec3( position );",E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,C_=`#ifdef USE_BUMPMAP
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
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
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
}`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`vec3 diffuse = vec3( 1.0 );
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
#endif`,sx=`uniform bool receiveShadow;
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
#endif`,ox=`#if defined( USE_ENVMAP )
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#endif`,fx=`struct PhysicalMaterial {
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
}`,dx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Rx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ux=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#ifdef USE_SHADOWMAP
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
#endif`,Yx=`#ifdef USE_SHADOWMAP
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
#endif`,Zx=`#ifdef USE_SHADOWMAP
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
#endif`,Kx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#include <envmap_common_pars_fragment>
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
}`,xy=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
}`,by=`#define DISTANCE
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
}`,My=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ey=`uniform float scale;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Ry=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Iy=`#define NORMAL
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Ny=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,ky=`uniform float size;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Wy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:__,alphamap_pars_fragment:x_,alphatest_fragment:y_,alphatest_pars_fragment:b_,aomap_fragment:M_,aomap_pars_fragment:S_,begin_vertex:w_,beginnormal_vertex:E_,bsdfs:T_,iridescence_fragment:A_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:D_,color_fragment:I_,color_pars_fragment:O_,color_pars_vertex:F_,color_vertex:N_,common:z_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:U_,displacementmap_pars_vertex:V_,displacementmap_vertex:k_,emissivemap_fragment:H_,emissivemap_pars_fragment:G_,encodings_fragment:W_,encodings_pars_fragment:$_,envmap_fragment:j_,envmap_common_pars_fragment:q_,envmap_pars_fragment:X_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:ox,envmap_vertex:Z_,fog_vertex:K_,fog_pars_vertex:J_,fog_fragment:Q_,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_vertex:rx,lights_pars_begin:sx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:xx,map_fragment:yx,map_pars_fragment:bx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Ex,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Lx,normal_fragment_maps:Rx,normal_pars_fragment:Dx,normal_pars_vertex:Ix,normal_vertex:Ox,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:Ux,output_fragment:Vx,packing:kx,premultiplied_alpha_fragment:Hx,project_vertex:Gx,dithering_fragment:Wx,dithering_pars_fragment:$x,roughnessmap_fragment:jx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:Yx,shadowmap_vertex:Zx,shadowmask_pars_fragment:Kx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:ey,skinnormal_vertex:ty,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:ry,tonemapping_pars_fragment:sy,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:uy,uv2_pars_fragment:hy,uv2_pars_vertex:fy,uv2_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:gy,cube_vert:vy,cube_frag:_y,depth_vert:xy,depth_frag:yy,distanceRGBA_vert:by,distanceRGBA_frag:My,equirect_vert:Sy,equirect_frag:wy,linedashed_vert:Ey,linedashed_frag:Ty,meshbasic_vert:Ay,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Ly,meshmatcap_vert:Ry,meshmatcap_frag:Dy,meshnormal_vert:Iy,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:Ny,meshphysical_vert:zy,meshphysical_frag:By,meshtoon_vert:Uy,meshtoon_frag:Vy,points_vert:ky,points_frag:Hy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:$y,sprite_frag:jy},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wn},uv2Transform:{value:new wn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wn}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wn}}},yn={basic:{uniforms:St([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:St([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:St([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:St([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:St([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:St([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:St([Se.points,Se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:St([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:St([Se.common,Se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:St([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:St([Se.sprite,Se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new wn},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:St([Se.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:St([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:St([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yn.physical={uniforms:St([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function qy(n,e,t,i,r,s){const o=new Re(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=e.get(x));const C=n.xr,E=C.getSession&&C.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Xo)?(c===void 0&&(c=new jt(new ki(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Rr(yn.cube.uniforms),vertexShader:yn.cube.vertexShader,fragmentShader:yn.cube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new jt(new Jo(2,2),new Hn({name:"BackgroundMaterial",uniforms:Rr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function Xy(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(N,ie,V,$,W){let q=!1;if(o){const ee=m($,V,ie);c!==ee&&(c=ee,d(c.object)),q=v(N,$,V,W),q&&x(N,$,V,W)}else{const ee=ie.wireframe===!0;(c.geometry!==$.id||c.program!==V.id||c.wireframe!==ee)&&(c.geometry=$.id,c.program=V.id,c.wireframe=ee,q=!0)}W!==null&&t.update(W,34963),(q||u)&&(u=!1,b(N,ie,V,$),W!==null&&n.bindBuffer(34963,t.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,ie,V){const $=V.wireframe===!0;let W=a[N.id];W===void 0&&(W={},a[N.id]=W);let q=W[ie.id];q===void 0&&(q={},W[ie.id]=q);let ee=q[$];return ee===void 0&&(ee=p(f()),q[$]=ee),ee}function p(N){const ie=[],V=[],$=[];for(let W=0;W<r;W++)ie[W]=0,V[W]=0,$[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:V,attributeDivisors:$,object:N,attributes:{},index:null}}function v(N,ie,V,$){const W=c.attributes,q=ie.attributes;let ee=0;const fe=V.getAttributes();for(const le in fe)if(fe[le].location>=0){const we=W[le];let Ce=q[le];if(Ce===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor)),we===void 0||we.attribute!==Ce||Ce&&we.data!==Ce.data)return!0;ee++}return c.attributesNum!==ee||c.index!==$}function x(N,ie,V,$){const W={},q=ie.attributes;let ee=0;const fe=V.getAttributes();for(const le in fe)if(fe[le].location>=0){let we=q[le];we===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(we=N.instanceColor));const Ce={};Ce.attribute=we,we&&we.data&&(Ce.data=we.data),W[le]=Ce,ee++}c.attributes=W,c.attributesNum=ee,c.index=$}function C(){const N=c.newAttributes;for(let ie=0,V=N.length;ie<V;ie++)N[ie]=0}function E(N){S(N,0)}function S(N,ie){const V=c.newAttributes,$=c.enabledAttributes,W=c.attributeDivisors;V[N]=1,$[N]===0&&(n.enableVertexAttribArray(N),$[N]=1),W[N]!==ie&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,ie),W[N]=ie)}function R(){const N=c.newAttributes,ie=c.enabledAttributes;for(let V=0,$=ie.length;V<$;V++)ie[V]!==N[V]&&(n.disableVertexAttribArray(V),ie[V]=0)}function F(N,ie,V,$,W,q){i.isWebGL2===!0&&(V===5124||V===5125)?n.vertexAttribIPointer(N,ie,V,W,q):n.vertexAttribPointer(N,ie,V,$,W,q)}function b(N,ie,V,$){if(i.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const W=$.attributes,q=V.getAttributes(),ee=ie.defaultAttributeValues;for(const fe in q){const le=q[fe];if(le.location>=0){let de=W[fe];if(de===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),de!==void 0){const we=de.normalized,Ce=de.itemSize,X=t.get(de);if(X===void 0)continue;const k=X.buffer,se=X.type,J=X.bytesPerElement;if(de.isInterleavedBufferAttribute){const K=de.data,Ee=K.stride,w=de.offset;if(K.isInstancedInterleavedBuffer){for(let A=0;A<le.locationSize;A++)S(le.location+A,K.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let A=0;A<le.locationSize;A++)E(le.location+A);n.bindBuffer(34962,k);for(let A=0;A<le.locationSize;A++)F(le.location+A,Ce/le.locationSize,se,we,Ee*J,(w+Ce/le.locationSize*A)*J)}else{if(de.isInstancedBufferAttribute){for(let K=0;K<le.locationSize;K++)S(le.location+K,de.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<le.locationSize;K++)E(le.location+K);n.bindBuffer(34962,k);for(let K=0;K<le.locationSize;K++)F(le.location+K,Ce/le.locationSize,se,we,Ce*J,Ce/le.locationSize*K*J)}}else if(ee!==void 0){const we=ee[fe];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(le.location,we);break;case 3:n.vertexAttrib3fv(le.location,we);break;case 4:n.vertexAttrib4fv(le.location,we);break;default:n.vertexAttrib1fv(le.location,we)}}}}R()}function L(){xe();for(const N in a){const ie=a[N];for(const V in ie){const $=ie[V];for(const W in $)g($[W].object),delete $[W];delete ie[V]}delete a[N]}}function z(N){if(a[N.id]===void 0)return;const ie=a[N.id];for(const V in ie){const $=ie[V];for(const W in $)g($[W].object),delete $[W];delete ie[V]}delete a[N.id]}function B(N){for(const ie in a){const V=a[ie];if(V[N.id]===void 0)continue;const $=V[N.id];for(const W in $)g($[W].object),delete $[W];delete V[N.id]}}function xe(){ce(),u=!0,c!==l&&(c=l,d(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:xe,resetDefaultState:ce,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:E,disableUnusedAttributes:R}}function Yy(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Zy(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),x=n.getParameter(36349),C=f>0,E=o||e.has("OES_texture_float"),S=C&&E,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:R}}function Ky(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new bi,a=new wn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||i!==0||r;return r=f,t=u(h,d,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:i,C=x*4;let E=v.clippingState||null;l.value=E,E=u(g,f,C,d);for(let S=0;S!==C;++S)E[S]=t[S];v.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<v)&&(p=new Float32Array(v));for(let C=0,E=d;C!==m;++C,E+=4)o.copy(h[C]).applyMatrix4(x,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Jy(n){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=Cr:a===yl&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xl||a===yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new p_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qy extends Md{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,lh=[.125,.215,.35,.446,.526,.582],Ei=20,$a=new Qy,ch=new Re;let ja=null;const Mi=(1+Math.sqrt(5))/2,lr=1/Mi,uh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Mi,lr),new D(0,Mi,-lr),new D(lr,0,Mi),new D(-lr,0,Mi),new D(Mi,lr,0),new D(-Mi,lr,0)];class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ja=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja),e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:gs,format:sn,encoding:Bi,depthBuffer:!1},r=fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(s)),this._blurMaterial=tb(s,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,r){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ch),u.toneMapping=Vn,u.autoClear=!1;const d=new Ko({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new jt(new ki,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(ch),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const C=this._cubeSize;ro(r,x*C,v>2?C:0,C,C),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Cr||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uh[(r-1)%uh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new jt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ei-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):Ei;p>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const v=[];let x=0;for(let F=0;F<Ei;++F){const b=F/m,L=Math.exp(-b*b/2);v.push(L),F===0?x+=L:F<p&&(x+=2*L)}for(let F=0;F<v.length;F++)v[F]=v[F]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-i;const E=this._sizeLods[r],S=3*E*(r>C-dr?r-C+dr:0),R=4*(this._cubeSize-E);ro(t,S,R,3*E,2*E),l.setRenderTarget(t),l.render(h,$a)}}function eb(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+lh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-dr?l=lh[o-n+dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,v=1,x=new Float32Array(m*g*d),C=new Float32Array(p*g*d),E=new Float32Array(v*g*d);for(let R=0;R<d;R++){const F=R%3*2/3-1,b=R>2?0:-1,L=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];x.set(L,m*g*R),C.set(f,p*g*R);const z=[R,R,R,R,R,R];E.set(z,v*g*R)}const S=new Bt;S.setAttribute("position",new En(x,m)),S.setAttribute("uv",new En(C,p)),S.setAttribute("faceIndex",new En(E,v)),e.push(S),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fh(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tb(n,e,t){const i=new Float32Array(Ei),r=new D(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function dh(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ph(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

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
	`}function nb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xl||l===yl,u=l===Cr||l===Pr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new hh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new hh(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ib(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rb(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const x=d.array;m=d.version;for(let C=0,E=x.length;C<E;C+=3){const S=x[C+0],R=x[C+1],F=x[C+2];f.push(S,R,R,F,F,S)}}else{const x=g.array;m=g.version;for(let C=0,E=x.length/3-1;C<E;C+=3){const S=C+0,R=C+1,F=C+2;f.push(S,R,R,F,F,S)}}const p=new(md(f)?bd:yd)(f,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function sb(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function ob(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ab(n,e){return n[0]-e[0]}function lb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function qa(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function cb(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==p){let V=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var g=V;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let z=0;E===!0&&(z=1),S===!0&&(z=2),R===!0&&(z=3);let B=u.attributes.position.count*z,xe=1;B>e.maxTextureSize&&(xe=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const ce=new Float32Array(B*xe*4*p),N=new xd(ce,B,xe,p);N.type=Pi,N.needsUpdate=!0;const ie=z*4;for(let $=0;$<p;$++){const W=F[$],q=b[$],ee=L[$],fe=B*xe*4*$;for(let le=0;le<W.count;le++){const de=le*ie;E===!0&&(o.fromBufferAttribute(W,le),W.normalized===!0&&qa(o,W),ce[fe+de+0]=o.x,ce[fe+de+1]=o.y,ce[fe+de+2]=o.z,ce[fe+de+3]=0),S===!0&&(o.fromBufferAttribute(q,le),q.normalized===!0&&qa(o,q),ce[fe+de+4]=o.x,ce[fe+de+5]=o.y,ce[fe+de+6]=o.z,ce[fe+de+7]=0),R===!0&&(o.fromBufferAttribute(ee,le),ee.normalized===!0&&qa(o,ee),ce[fe+de+8]=o.x,ce[fe+de+9]=o.y,ce[fe+de+10]=o.z,ce[fe+de+11]=ee.itemSize===4?o.w:1)}}v={count:p,texture:N,size:new Le(B,xe)},s.set(u,v),u.addEventListener("dispose",V)}let x=0;for(let E=0;E<d.length;E++)x+=d[E];const C=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",C),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let p=i[u.id];if(p===void 0||p.length!==m){p=[];for(let S=0;S<m;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<m;S++){const R=p[S];R[0]=S,R[1]=d[S]}p.sort(lb);for(let S=0;S<8;S++)S<m&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(ab);const v=u.morphAttributes.position,x=u.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const R=a[S],F=R[0],b=R[1];F!==Number.MAX_SAFE_INTEGER&&b?(v&&u.getAttribute("morphTarget"+S)!==v[F]&&u.setAttribute("morphTarget"+S,v[F]),x&&u.getAttribute("morphNormal"+S)!==x[F]&&u.setAttribute("morphNormal"+S,x[F]),r[S]=b,C+=b):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),x&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const E=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function ub(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ed=new un,Td=new xd,Ad=new Qv,Cd=new Sd,mh=[],gh=[],vh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mh[r];if(s===void 0&&(s=new Float32Array(r),mh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;xh.set(i),n.uniformMatrix2fv(this.addr,!1,xh),It(t,i)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;_h.set(i),n.uniformMatrix3fv(this.addr,!1,_h),It(t,i)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),It(t,i)}}function _b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xb(n,e){const t=this.cache;Dt(t,e)||(n.uniform2iv(this.addr,e),It(t,e))}function yb(n,e){const t=this.cache;Dt(t,e)||(n.uniform3iv(this.addr,e),It(t,e))}function bb(n,e){const t=this.cache;Dt(t,e)||(n.uniform4iv(this.addr,e),It(t,e))}function Mb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sb(n,e){const t=this.cache;Dt(t,e)||(n.uniform2uiv(this.addr,e),It(t,e))}function wb(n,e){const t=this.cache;Dt(t,e)||(n.uniform3uiv(this.addr,e),It(t,e))}function Eb(n,e){const t=this.cache;Dt(t,e)||(n.uniform4uiv(this.addr,e),It(t,e))}function Tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ed,r)}function Ab(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ad,r)}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cd,r)}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Td,r)}function Lb(n){switch(n){case 5126:return hb;case 35664:return fb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return bb;case 5125:return Mb;case 36294:return Sb;case 36295:return wb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Rb(n,e){n.uniform1fv(this.addr,e)}function Db(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function Ib(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function Ob(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function Fb(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nb(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zb(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bb(n,e){n.uniform1iv(this.addr,e)}function Ub(n,e){n.uniform2iv(this.addr,e)}function Vb(n,e){n.uniform3iv(this.addr,e)}function kb(n,e){n.uniform4iv(this.addr,e)}function Hb(n,e){n.uniform1uiv(this.addr,e)}function Gb(n,e){n.uniform2uiv(this.addr,e)}function Wb(n,e){n.uniform3uiv(this.addr,e)}function $b(n,e){n.uniform4uiv(this.addr,e)}function jb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Ed,r[s])}function qb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Ad,r[s])}function Xb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Cd,r[s])}function Yb(n,e,t){const i=e.length,r=Qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Td,r[s])}function Zb(n){switch(n){case 5126:return Rb;case 35664:return Db;case 35665:return Ib;case 35666:return Ob;case 35674:return Fb;case 35675:return Nb;case 35676:return zb;case 5124:case 35670:return Bb;case 35667:case 35671:return Ub;case 35668:case 35672:return Vb;case 35669:case 35673:return kb;case 5125:return Hb;case 36294:return Gb;case 36295:return Wb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Yb}}class Kb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Lb(t.type)}}class Jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Zb(t.type)}}class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function yh(n,e){n.seq.push(e),n.map[e.id]=e}function eM(n,e,t){const i=n.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),o=Xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yh(t,c===void 0?new Kb(a,n,e):new Jb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Qb(a),yh(t,h)),t=h}}}class xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let tM=0;function nM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iM(n){switch(n){case Bi:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Mh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nM(n.getShaderSource(e),o)}else return r}function rM(n,e){const t=iM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sM(n,e){let t;switch(e){case Tv:t="Linear";break;case Av:t="Reinhard";break;case Cv:t="OptimizedCineon";break;case Pv:t="ACESFilmic";break;case Lv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function aM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function Sh(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(n){return n.replace(cM,uM)}function uM(n,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tl(t)}const hM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(fM,Pd).replace(hM,dM)}function dM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Pd(n,e,t,i)}function Pd(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Th(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xr&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cr:case Pr:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function vM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case wv:e="ENVMAP_BLENDING_MIX";break;case Ev:e="ENVMAP_BLENDING_ADD";break}return e}function _M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pM(t),c=mM(t),u=gM(t),h=vM(t),f=_M(t),d=t.isWebGL2?"":oM(t),g=aM(s),m=r.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(Yr).join(`
`),v.length>0&&(v+=`
`)):(p=[Th(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),v=[d,Th(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Vn?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,rM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Tl(o),o=Sh(o,t),o=wh(o,t),a=Tl(a),a=Sh(a,t),a=wh(a,t),o=Eh(o),a=Eh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=x+p+o,E=x+v+a,S=bh(r,35633,C),R=bh(r,35632,E);if(r.attachShader(m,S),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(S).trim(),B=r.getShaderInfoLog(R).trim();let xe=!0,ce=!0;if(r.getProgramParameter(m,35714)===!1){xe=!1;const N=Mh(r,S,"vertex"),ie=Mh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+N+`
`+ie)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||B==="")&&(ce=!1);ce&&(this.diagnostics={runnable:xe,programLog:L,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:v}})}r.deleteShader(S),r.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new xo(r,m)),F};let b;return this.getAttributes=function(){return b===void 0&&(b=lM(r,m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}let yM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new MM(e);t.set(e,i)}return t.get(e)}}class MM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function SM(n,e,t,i,r,s,o){const a=new hc,l=new bM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,L,z,B,xe){const ce=B.fog,N=xe.geometry,ie=b.isMeshStandardMaterial?B.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),$=V&&V.mapping===Xo?V.image.height:null,W=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=q!==void 0?q.length:0;let fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let le,de,we,Ce;if(W){const Ee=yn[W];le=Ee.vertexShader,de=Ee.fragmentShader}else le=b.vertexShader,de=b.fragmentShader,l.update(b),we=l.getVertexShaderID(b),Ce=l.getFragmentShaderID(b);const X=n.getRenderTarget(),k=b.alphaTest>0,se=b.clearcoat>0,J=b.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:b.type,vertexShader:le,fragmentShader:de,defines:b.defines,customVertexShaderID:we,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:xe.isInstancedMesh===!0,instancingColor:xe.isInstancedMesh===!0&&xe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?n.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Bi,map:!!b.map,matcap:!!b.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:$,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Yv,tangentSpaceNormalMap:b.normalMapType===Nr,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===it,clearcoat:se,clearcoatMap:se&&!!b.clearcoatMap,clearcoatRoughnessMap:se&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!b.clearcoatNormalMap,iridescence:J,iridescenceMap:J&&!!b.iridescenceMap,iridescenceThicknessMap:J&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===yr,alphaMap:!!b.alphaMap,alphaTest:k,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!ce,useFog:b.fog===!0,fogExp2:ce&&ce.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:xe.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:fe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:Vn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pi,flipSided:b.side===ln,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)L.push(z),L.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(v(L,b),x(L,b),L.push(n.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function v(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.combine),b.push(L.vertexUvs),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function x(b,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),L.fog&&a.enable(33),b.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),b.push(a.mask)}function C(b){const L=g[b.type];let z;if(L){const B=yn[L];z=u_.clone(B.uniforms)}else z=b.uniforms;return z}function E(b,L){let z;for(let B=0,xe=c.length;B<xe;B++){const ce=c[B];if(ce.cacheKey===L){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new xM(n,L,b,s),c.push(z)),z}function S(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:C,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:F}}function wM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function EM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ah(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ch(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,m,p){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},n[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function a(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?i.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?i.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||EM),i.length>1&&i.sort(f||Ah),r.length>1&&r.sort(f||Ah)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TM(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Ch,n.set(i,[s])):r>=n.get(i).length?(s=new Ch,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function AM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function CM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PM=0;function LM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function RM(n,e){const t=new AM,i=CM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new ht,a=new ht;function l(u,h){let f=0,d=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let m=0,p=0,v=0,x=0,C=0,E=0,S=0,R=0;u.sort(LM);const F=h!==!0?Math.PI:1;for(let L=0,z=u.length;L<z;L++){const B=u[L],xe=B.color,ce=B.intensity,N=B.distance,ie=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=xe.r*ce*F,d+=xe.g*ce*F,g+=xe.b*ce*F;else if(B.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(B.sh.coefficients[V],ce);else if(B.isDirectionalLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity*F),B.castShadow){const $=B.shadow,W=i.get(B);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,r.directionalShadow[m]=W,r.directionalShadowMap[m]=ie,r.directionalShadowMatrix[m]=B.shadow.matrix,E++}r.directional[m]=V,m++}else if(B.isSpotLight){const V=t.get(B);if(V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(xe).multiplyScalar(ce*F),V.distance=N,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,B.castShadow){const $=B.shadow,W=i.get(B);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,r.spotShadow[v]=W,r.spotShadowMap[v]=ie,r.spotShadowMatrix[v]=B.shadow.matrix,R++}r.spot[v]=V,v++}else if(B.isRectAreaLight){const V=t.get(B);V.color.copy(xe).multiplyScalar(ce),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=V,x++}else if(B.isPointLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity*F),V.distance=B.distance,V.decay=B.decay,B.castShadow){const $=B.shadow,W=i.get(B);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=ie,r.pointShadowMatrix[p]=B.shadow.matrix,S++}r.point[p]=V,p++}else if(B.isHemisphereLight){const V=t.get(B);V.skyColor.copy(B.color).multiplyScalar(ce*F),V.groundColor.copy(B.groundColor).multiplyScalar(ce*F),r.hemi[C]=V,C++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==m||b.pointLength!==p||b.spotLength!==v||b.rectAreaLength!==x||b.hemiLength!==C||b.numDirectionalShadows!==E||b.numPointShadows!==S||b.numSpotShadows!==R)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=p,r.hemi.length=C,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=R,b.directionalLength=m,b.pointLength=p,b.spotLength=v,b.rectAreaLength=x,b.hemiLength=C,b.numDirectionalShadows=E,b.numPointShadows=S,b.numSpotShadows=R,r.version=PM++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let x=0,C=u.length;x<C;x++){const E=u[x];if(E.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),f++}else if(E.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),g++}else if(E.isRectAreaLight){const S=r.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(v),a.identity(),o.copy(E.matrixWorld),o.premultiply(v),a.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(v),d++}else if(E.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Ph(n,e){const t=new RM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DM(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Ph(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Ph(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ld extends pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rd extends pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`;function FM(n,e,t){let i=new fc;const r=new Le,s=new Le,o=new bt,a=new Ld({depthPacking:Xv}),l=new Rd,c={},u=t.maxTextureSize,h={0:ln,1:ms,2:pi},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:IM,fragmentShader:OM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new jt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud,this.render=function(E,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const F=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ci),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let B=0,xe=E.length;B<xe;B++){const ce=E[B],N=ce.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ie=N.getFrameExtents();if(r.multiply(ie),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===Xr&&(N.map=new ui(r.x,r.y),N.map.texture.name=ce.name+".shadowMap",N.mapPass=new ui(r.x,r.y),N.camera.updateProjectionMatrix()),N.map===null){const $={minFilter:Ft,magFilter:Ft,format:sn};N.map=new ui(r.x,r.y,$),N.map.texture.name=ce.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const V=N.getViewportCount();for(let $=0;$<V;$++){const W=N.getViewport($);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),z.viewport(o),N.updateMatrices(ce,$),i=N.getFrustum(),C(S,R,N.camera,ce,this.type)}!N.isPointLightShadow&&this.type===Xr&&v(N,R),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(F,b,L)};function v(E,S){const R=e.update(m);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,R,f,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,R,d,m,null)}function x(E,S,R,F,b,L){let z=null;const B=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0?z=B:z=R.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const xe=z.uuid,ce=S.uuid;let N=c[xe];N===void 0&&(N={},c[xe]=N);let ie=N[ce];ie===void 0&&(ie=z.clone(),N[ce]=ie),z=ie}return z.visible=S.visible,z.wireframe=S.wireframe,L===Xr?z.side=S.shadowSide!==null?S.shadowSide:S.side:z.side=S.shadowSide!==null?S.shadowSide:h[S.side],z.alphaMap=S.alphaMap,z.alphaTest=S.alphaTest,z.clipShadows=S.clipShadows,z.clippingPlanes=S.clippingPlanes,z.clipIntersection=S.clipIntersection,z.displacementMap=S.displacementMap,z.displacementScale=S.displacementScale,z.displacementBias=S.displacementBias,z.wireframeLinewidth=S.wireframeLinewidth,z.linewidth=S.linewidth,R.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(R.matrixWorld),z.nearDistance=F,z.farDistance=b),z}function C(E,S,R,F,b){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Xr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const B=e.update(E),xe=E.material;if(Array.isArray(xe)){const ce=B.groups;for(let N=0,ie=ce.length;N<ie;N++){const V=ce[N],$=xe[V.materialIndex];if($&&$.visible){const W=x(E,$,F,R.near,R.far,b);n.renderBufferDirect(R,null,B,W,E,V)}}}else if(xe.visible){const ce=x(E,xe,F,R.near,R.far,b);n.renderBufferDirect(R,null,B,ce,E,null)}}const z=E.children;for(let B=0,xe=z.length;B<xe;B++)C(z[B],S,R,F,b)}}function NM(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const _e=new bt;let he=null;const Te=new bt(0,0,0,0);return{setMask:function(Me){he!==Me&&!P&&(n.colorMask(Me,Me,Me,Me),he=Me)},setLocked:function(Me){P=Me},setClear:function(Me,Pe,ye,Oe,je){je===!0&&(Me*=Oe,Pe*=Oe,ye*=Oe),_e.set(Me,Pe,ye,Oe),Te.equals(_e)===!1&&(n.clearColor(Me,Pe,ye,Oe),Te.copy(_e))},reset:function(){P=!1,he=null,Te.set(-1,0,0,0)}}}function s(){let P=!1,_e=null,he=null,Te=null;return{setTest:function(Me){Me?Ce(2929):X(2929)},setMask:function(Me){_e!==Me&&!P&&(n.depthMask(Me),_e=Me)},setFunc:function(Me){if(he!==Me){if(Me)switch(Me){case vv:n.depthFunc(512);break;case _v:n.depthFunc(519);break;case xv:n.depthFunc(513);break;case _l:n.depthFunc(515);break;case yv:n.depthFunc(514);break;case bv:n.depthFunc(518);break;case Mv:n.depthFunc(516);break;case Sv:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);he=Me}},setLocked:function(Me){P=Me},setClear:function(Me){Te!==Me&&(n.clearDepth(Me),Te=Me)},reset:function(){P=!1,_e=null,he=null,Te=null}}}function o(){let P=!1,_e=null,he=null,Te=null,Me=null,Pe=null,ye=null,Oe=null,je=null;return{setTest:function(qe){P||(qe?Ce(2960):X(2960))},setMask:function(qe){_e!==qe&&!P&&(n.stencilMask(qe),_e=qe)},setFunc:function(qe,At,hn){(he!==qe||Te!==At||Me!==hn)&&(n.stencilFunc(qe,At,hn),he=qe,Te=At,Me=hn)},setOp:function(qe,At,hn){(Pe!==qe||ye!==At||Oe!==hn)&&(n.stencilOp(qe,At,hn),Pe=qe,ye=At,Oe=hn)},setLocked:function(qe){P=qe},setClear:function(qe){je!==qe&&(n.clearStencil(qe),je=qe)},reset:function(){P=!1,_e=null,he=null,Te=null,Me=null,Pe=null,ye=null,Oe=null,je=null}}}const a=new r,l=new s,c=new o;let u={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,v=null,x=null,C=null,E=null,S=null,R=null,F=!1,b=null,L=null,z=null,B=null,xe=null;const ce=n.getParameter(35661);let N=!1,ie=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=ie>=2);let $=null,W={};const q=n.getParameter(3088),ee=n.getParameter(2978),fe=new bt().fromArray(q),le=new bt().fromArray(ee);function de(P,_e,he){const Te=new Uint8Array(4),Me=n.createTexture();n.bindTexture(P,Me),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Pe=0;Pe<he;Pe++)n.texImage2D(_e+Pe,0,6408,1,1,0,6408,5121,Te);return Me}const we={};we[3553]=de(3553,3553,1),we[34067]=de(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(2929),l.setFunc(_l),I(!1),H(xu),Ce(2884),w(ci);function Ce(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function X(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function k(P,_e){return h[P]!==_e?(n.bindFramebuffer(P,_e),h[P]=_e,i&&(P===36009&&(h[36160]=_e),P===36160&&(h[36009]=_e)),!0):!1}function se(P,_e){let he=d,Te=!1;if(P)if(he=f.get(_e),he===void 0&&(he=[],f.set(_e,he)),P.isWebGLMultipleRenderTargets){const Me=P.texture;if(he.length!==Me.length||he[0]!==36064){for(let Pe=0,ye=Me.length;Pe<ye;Pe++)he[Pe]=36064+Pe;he.length=Me.length,Te=!0}}else he[0]!==36064&&(he[0]=36064,Te=!0);else he[0]!==1029&&(he[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function J(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const K={[ur]:32774,[ov]:32778,[av]:32779};if(i)K[Su]=32775,K[wu]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(K[Su]=P.MIN_EXT,K[wu]=P.MAX_EXT)}const Ee={[lv]:0,[cv]:1,[uv]:768,[hd]:770,[gv]:776,[pv]:774,[fv]:772,[hv]:769,[fd]:771,[mv]:775,[dv]:773};function w(P,_e,he,Te,Me,Pe,ye,Oe){if(P===ci){m===!0&&(X(3042),m=!1);return}if(m===!1&&(Ce(3042),m=!0),P!==sv){if(P!==p||Oe!==F){if((v!==ur||E!==ur)&&(n.blendEquation(32774),v=ur,E=ur),Oe)switch(P){case yr:n.blendFuncSeparate(1,771,1,771);break;case yu:n.blendFunc(1,1);break;case bu:n.blendFuncSeparate(0,769,0,1);break;case Mu:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case yr:n.blendFuncSeparate(770,771,1,771);break;case yu:n.blendFunc(770,1);break;case bu:n.blendFuncSeparate(0,769,0,1);break;case Mu:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,C=null,S=null,R=null,p=P,F=Oe}return}Me=Me||_e,Pe=Pe||he,ye=ye||Te,(_e!==v||Me!==E)&&(n.blendEquationSeparate(K[_e],K[Me]),v=_e,E=Me),(he!==x||Te!==C||Pe!==S||ye!==R)&&(n.blendFuncSeparate(Ee[he],Ee[Te],Ee[Pe],Ee[ye]),x=he,C=Te,S=Pe,R=ye),p=P,F=null}function A(P,_e){P.side===pi?X(2884):Ce(2884);let he=P.side===ln;_e&&(he=!he),I(he),P.blending===yr&&P.transparent===!1?w(ci):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Te=P.stencilWrite;c.setTest(Te),Te&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ce(32926):X(32926)}function I(P){b!==P&&(P?n.frontFace(2304):n.frontFace(2305),b=P)}function H(P){P!==tv?(Ce(2884),P!==L&&(P===xu?n.cullFace(1029):P===nv?n.cullFace(1028):n.cullFace(1032))):X(2884),L=P}function Z(P){P!==z&&(N&&n.lineWidth(P),z=P)}function re(P,_e,he){P?(Ce(32823),(B!==_e||xe!==he)&&(n.polygonOffset(_e,he),B=_e,xe=he)):X(32823)}function pe(P){P?Ce(3089):X(3089)}function te(P){P===void 0&&(P=33984+ce-1),$!==P&&(n.activeTexture(P),$=P)}function me(P,_e){$===null&&te();let he=W[$];he===void 0&&(he={type:void 0,texture:void 0},W[$]=he),(he.type!==P||he.texture!==_e)&&(n.bindTexture(P,_e||we[P]),he.type=P,he.texture=_e)}function ae(){const P=W[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(P){fe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),fe.copy(P))}function ge(P){le.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),le.copy(P))}function ve(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,W={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,v=null,x=null,C=null,E=null,S=null,R=null,F=!1,b=null,L=null,z=null,B=null,xe=null,fe.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:X,bindFramebuffer:k,drawBuffers:se,useProgram:J,setBlending:w,setMaterial:A,setFlipSided:I,setCullFace:H,setLineWidth:Z,setPolygonOffset:re,setScissorTest:pe,activeTexture:te,bindTexture:me,unbindTexture:ae,compressedTexImage2D:y,texImage2D:be,texImage3D:M,texStorage2D:Q,texStorage3D:ue,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:j,scissor:ne,viewport:ge,reset:ve}}function zM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,_){return v?new OffscreenCanvas(y,_):Co("canvas")}function C(y,_,O,j){let Q=1;if((y.width>j||y.height>j)&&(Q=j/Math.max(y.width,y.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ue=_?El:Math.floor,be=ue(Q*y.width),M=ue(Q*y.height);m===void 0&&(m=x(be,M));const ne=O?x(be,M):m;return ne.width=be,ne.height=M,ne.getContext("2d").drawImage(y,0,0,be,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+be+"x"+M+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function E(y){return Zu(y.width)&&Zu(y.height)}function S(y){return a?!1:y.wrapS!==nn||y.wrapT!==nn||y.minFilter!==Ft&&y.minFilter!==$t}function R(y,_){return y.generateMipmaps&&_&&y.minFilter!==Ft&&y.minFilter!==$t}function F(y){n.generateMipmap(y)}function b(y,_,O,j,Q=!1){if(a===!1)return _;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ue=_;return _===6403&&(O===5126&&(ue=33326),O===5131&&(ue=33325),O===5121&&(ue=33321)),_===33319&&(O===5126&&(ue=33328),O===5131&&(ue=33327),O===5121&&(ue=33323)),_===6408&&(O===5126&&(ue=34836),O===5131&&(ue=34842),O===5121&&(ue=j===it&&Q===!1?35907:32856),O===32819&&(ue=32854),O===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function L(y,_,O){return R(y,O)===!0||y.isFramebufferTexture&&y.minFilter!==Ft&&y.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function z(y){return y===Ft||y===Eu||y===Tu?9728:9729}function B(y){const _=y.target;_.removeEventListener("dispose",B),ce(_),_.isVideoTexture&&g.delete(_)}function xe(y){const _=y.target;_.removeEventListener("dispose",xe),ie(_)}function ce(y){const _=i.get(y);if(_.__webglInit===void 0)return;const O=y.source,j=p.get(O);if(j){const Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(y),Object.keys(j).length===0&&p.delete(O)}i.remove(y)}function N(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const O=y.source,j=p.get(O);delete j[_.__cacheKey],o.memory.textures--}function ie(y){const _=y.texture,O=i.get(y),j=i.get(_);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(O.__webglFramebuffer[Q]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,ue=_.length;Q<ue;Q++){const be=i.get(_[Q]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(y)}let V=0;function $(){V=0}function W(){const y=V;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),V+=1,y}function q(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.encoding),_.join()}function ee(y,_){const O=i.get(y);if(y.isVideoTexture&&me(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const j=y.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,y,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,O.__webglTexture)}function fe(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){se(O,y,_);return}t.activeTexture(33984+_),t.bindTexture(35866,O.__webglTexture)}function le(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){se(O,y,_);return}t.activeTexture(33984+_),t.bindTexture(32879,O.__webglTexture)}function de(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){J(O,y,_);return}t.activeTexture(33984+_),t.bindTexture(34067,O.__webglTexture)}const we={[bl]:10497,[nn]:33071,[Ml]:33648},Ce={[Ft]:9728,[Eu]:9984,[Tu]:9986,[$t]:9729,[Rv]:9985,[Yo]:9987};function X(y,_,O){if(O?(n.texParameteri(y,10242,we[_.wrapS]),n.texParameteri(y,10243,we[_.wrapT]),(y===32879||y===35866)&&n.texParameteri(y,32882,we[_.wrapR]),n.texParameteri(y,10240,Ce[_.magFilter]),n.texParameteri(y,10241,Ce[_.minFilter])):(n.texParameteri(y,10242,33071),n.texParameteri(y,10243,33071),(y===32879||y===35866)&&n.texParameteri(y,32882,33071),(_.wrapS!==nn||_.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,10240,z(_.magFilter)),n.texParameteri(y,10241,z(_.minFilter)),_.minFilter!==Ft&&_.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(_.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===gs&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(y,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function k(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",B));const j=_.source;let Q=p.get(j);Q===void 0&&(Q={},p.set(j,Q));const ue=q(_);if(ue!==y.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[ue].usedTimes++;const be=Q[y.__cacheKey];be!==void 0&&(Q[y.__cacheKey].usedTimes--,be.usedTimes===0&&N(_)),y.__cacheKey=ue,y.__webglTexture=Q[ue].texture}return O}function se(y,_,O){let j=3553;_.isDataArrayTexture&&(j=35866),_.isData3DTexture&&(j=32879);const Q=k(y,_),ue=_.source;if(t.activeTexture(33984+O),t.bindTexture(j,y.__webglTexture),ue.version!==ue.__currentVersion||Q===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const be=S(_)&&E(_.image)===!1;let M=C(_.image,be,!1,u);M=ae(_,M);const ne=E(M)||a,ge=s.convert(_.format,_.encoding);let ve=s.convert(_.type),P=b(_.internalFormat,ge,ve,_.encoding,_.isVideoTexture);X(j,_,ne);let _e;const he=_.mipmaps,Te=a&&_.isVideoTexture!==!0,Me=ue.__currentVersion===void 0||Q===!0,Pe=L(_,M,ne);if(_.isDepthTexture)P=6402,a?_.type===Pi?P=36012:_.type===Ci?P=33190:_.type===br?P=35056:P=33189:_.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ii&&P===6402&&_.type!==pd&&_.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Ci,ve=s.convert(_.type)),_.format===Lr&&P===6402&&(P=34041,_.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=br,ve=s.convert(_.type))),Me&&(Te?t.texStorage2D(3553,1,P,M.width,M.height):t.texImage2D(3553,0,P,M.width,M.height,0,ge,ve,null));else if(_.isDataTexture)if(he.length>0&&ne){Te&&Me&&t.texStorage2D(3553,Pe,P,he[0].width,he[0].height);for(let ye=0,Oe=he.length;ye<Oe;ye++)_e=he[ye],Te?t.texSubImage2D(3553,ye,0,0,_e.width,_e.height,ge,ve,_e.data):t.texImage2D(3553,ye,P,_e.width,_e.height,0,ge,ve,_e.data);_.generateMipmaps=!1}else Te?(Me&&t.texStorage2D(3553,Pe,P,M.width,M.height),t.texSubImage2D(3553,0,0,0,M.width,M.height,ge,ve,M.data)):t.texImage2D(3553,0,P,M.width,M.height,0,ge,ve,M.data);else if(_.isCompressedTexture){Te&&Me&&t.texStorage2D(3553,Pe,P,he[0].width,he[0].height);for(let ye=0,Oe=he.length;ye<Oe;ye++)_e=he[ye],_.format!==sn?ge!==null?Te?t.compressedTexSubImage2D(3553,ye,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(3553,ye,P,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(3553,ye,0,0,_e.width,_e.height,ge,ve,_e.data):t.texImage2D(3553,ye,P,_e.width,_e.height,0,ge,ve,_e.data)}else if(_.isDataArrayTexture)Te?(Me&&t.texStorage3D(35866,Pe,P,M.width,M.height,M.depth),t.texSubImage3D(35866,0,0,0,0,M.width,M.height,M.depth,ge,ve,M.data)):t.texImage3D(35866,0,P,M.width,M.height,M.depth,0,ge,ve,M.data);else if(_.isData3DTexture)Te?(Me&&t.texStorage3D(32879,Pe,P,M.width,M.height,M.depth),t.texSubImage3D(32879,0,0,0,0,M.width,M.height,M.depth,ge,ve,M.data)):t.texImage3D(32879,0,P,M.width,M.height,M.depth,0,ge,ve,M.data);else if(_.isFramebufferTexture){if(Me)if(Te)t.texStorage2D(3553,Pe,P,M.width,M.height);else{let ye=M.width,Oe=M.height;for(let je=0;je<Pe;je++)t.texImage2D(3553,je,P,ye,Oe,0,ge,ve,null),ye>>=1,Oe>>=1}}else if(he.length>0&&ne){Te&&Me&&t.texStorage2D(3553,Pe,P,he[0].width,he[0].height);for(let ye=0,Oe=he.length;ye<Oe;ye++)_e=he[ye],Te?t.texSubImage2D(3553,ye,0,0,ge,ve,_e):t.texImage2D(3553,ye,P,ge,ve,_e);_.generateMipmaps=!1}else Te?(Me&&t.texStorage2D(3553,Pe,P,M.width,M.height),t.texSubImage2D(3553,0,0,0,ge,ve,M)):t.texImage2D(3553,0,P,ge,ve,M);R(_,ne)&&F(j),ue.__currentVersion=ue.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function J(y,_,O){if(_.image.length!==6)return;const j=k(y,_),Q=_.source;if(t.activeTexture(33984+O),t.bindTexture(34067,y.__webglTexture),Q.version!==Q.__currentVersion||j===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,M=[];for(let ye=0;ye<6;ye++)!ue&&!be?M[ye]=C(_.image[ye],!1,!0,c):M[ye]=be?_.image[ye].image:_.image[ye],M[ye]=ae(_,M[ye]);const ne=M[0],ge=E(ne)||a,ve=s.convert(_.format,_.encoding),P=s.convert(_.type),_e=b(_.internalFormat,ve,P,_.encoding),he=a&&_.isVideoTexture!==!0,Te=Q.__currentVersion===void 0||j===!0;let Me=L(_,ne,ge);X(34067,_,ge);let Pe;if(ue){he&&Te&&t.texStorage2D(34067,Me,_e,ne.width,ne.height);for(let ye=0;ye<6;ye++){Pe=M[ye].mipmaps;for(let Oe=0;Oe<Pe.length;Oe++){const je=Pe[Oe];_.format!==sn?ve!==null?he?t.compressedTexSubImage2D(34069+ye,Oe,0,0,je.width,je.height,ve,je.data):t.compressedTexImage2D(34069+ye,Oe,_e,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+ye,Oe,0,0,je.width,je.height,ve,P,je.data):t.texImage2D(34069+ye,Oe,_e,je.width,je.height,0,ve,P,je.data)}}}else{Pe=_.mipmaps,he&&Te&&(Pe.length>0&&Me++,t.texStorage2D(34067,Me,_e,M[0].width,M[0].height));for(let ye=0;ye<6;ye++)if(be){he?t.texSubImage2D(34069+ye,0,0,0,M[ye].width,M[ye].height,ve,P,M[ye].data):t.texImage2D(34069+ye,0,_e,M[ye].width,M[ye].height,0,ve,P,M[ye].data);for(let Oe=0;Oe<Pe.length;Oe++){const qe=Pe[Oe].image[ye].image;he?t.texSubImage2D(34069+ye,Oe+1,0,0,qe.width,qe.height,ve,P,qe.data):t.texImage2D(34069+ye,Oe+1,_e,qe.width,qe.height,0,ve,P,qe.data)}}else{he?t.texSubImage2D(34069+ye,0,0,0,ve,P,M[ye]):t.texImage2D(34069+ye,0,_e,ve,P,M[ye]);for(let Oe=0;Oe<Pe.length;Oe++){const je=Pe[Oe];he?t.texSubImage2D(34069+ye,Oe+1,0,0,ve,P,je.image[ye]):t.texImage2D(34069+ye,Oe+1,_e,ve,P,je.image[ye])}}}R(_,ge)&&F(34067),Q.__currentVersion=Q.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function K(y,_,O,j,Q){const ue=s.convert(O.format,O.encoding),be=s.convert(O.type),M=b(O.internalFormat,ue,be,O.encoding);i.get(_).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,M,_.width,_.height,_.depth,0,ue,be,null):t.texImage2D(Q,0,M,_.width,_.height,0,ue,be,null)),t.bindFramebuffer(36160,y),te(_)?f.framebufferTexture2DMultisampleEXT(36160,j,Q,i.get(O).__webglTexture,0,pe(_)):n.framebufferTexture2D(36160,j,Q,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(y,_,O){if(n.bindRenderbuffer(36161,y),_.depthBuffer&&!_.stencilBuffer){let j=33189;if(O||te(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Pi?j=36012:Q.type===Ci&&(j=33190));const ue=pe(_);te(_)?f.renderbufferStorageMultisampleEXT(36161,ue,j,_.width,_.height):n.renderbufferStorageMultisample(36161,ue,j,_.width,_.height)}else n.renderbufferStorage(36161,j,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,y)}else if(_.depthBuffer&&_.stencilBuffer){const j=pe(_);O&&te(_)===!1?n.renderbufferStorageMultisample(36161,j,35056,_.width,_.height):te(_)?f.renderbufferStorageMultisampleEXT(36161,j,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,y)}else{const j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<j.length;Q++){const ue=j[Q],be=s.convert(ue.format,ue.encoding),M=s.convert(ue.type),ne=b(ue.internalFormat,be,M,ue.encoding),ge=pe(_);O&&te(_)===!1?n.renderbufferStorageMultisample(36161,ge,ne,_.width,_.height):te(_)?f.renderbufferStorageMultisampleEXT(36161,ge,ne,_.width,_.height):n.renderbufferStorage(36161,ne,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function w(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);const j=i.get(_.depthTexture).__webglTexture,Q=pe(_);if(_.depthTexture.format===Ii)te(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,Q):n.framebufferTexture2D(36160,36096,3553,j,0);else if(_.depthTexture.format===Lr)te(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,Q):n.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function A(y){const _=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");w(_.__webglFramebuffer,y)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[j],y,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function I(y,_,O){const j=i.get(y);_!==void 0&&K(j.__webglFramebuffer,y,y.texture,36064,3553),O!==void 0&&A(y)}function H(y){const _=y.texture,O=i.get(y),j=i.get(_);y.addEventListener("dispose",xe),y.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++);const Q=y.isWebGLCubeRenderTarget===!0,ue=y.isWebGLMultipleRenderTargets===!0,be=E(y)||a;if(Q){O.__webglFramebuffer=[];for(let M=0;M<6;M++)O.__webglFramebuffer[M]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const M=y.texture;for(let ne=0,ge=M.length;ne<ge;ne++){const ve=i.get(M[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&te(y)===!1){const M=ue?_:[_];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let ne=0;ne<M.length;ne++){const ge=M[ne];O.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[ne]);const ve=s.convert(ge.format,ge.encoding),P=s.convert(ge.type),_e=b(ge.internalFormat,ve,P,ge.encoding),he=pe(y);n.renderbufferStorageMultisample(36161,he,_e,y.width,y.height),n.framebufferRenderbuffer(36160,36064+ne,36161,O.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(36161,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,j.__webglTexture),X(34067,_,be);for(let M=0;M<6;M++)K(O.__webglFramebuffer[M],y,_,36064,34069+M);R(_,be)&&F(34067),t.unbindTexture()}else if(ue){const M=y.texture;for(let ne=0,ge=M.length;ne<ge;ne++){const ve=M[ne],P=i.get(ve);t.bindTexture(3553,P.__webglTexture),X(3553,ve,be),K(O.__webglFramebuffer,y,ve,36064+ne,3553),R(ve,be)&&F(3553)}t.unbindTexture()}else{let M=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?M=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(M,j.__webglTexture),X(M,_,be),K(O.__webglFramebuffer,y,_,36064,M),R(_,be)&&F(M),t.unbindTexture()}y.depthBuffer&&A(y)}function Z(y){const _=E(y)||a,O=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0,Q=O.length;j<Q;j++){const ue=O[j];if(R(ue,_)){const be=y.isWebGLCubeRenderTarget?34067:3553,M=i.get(ue).__webglTexture;t.bindTexture(be,M),F(be),t.unbindTexture()}}}function re(y){if(a&&y.samples>0&&te(y)===!1){const _=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],O=y.width,j=y.height;let Q=16384;const ue=[],be=y.stencilBuffer?33306:36096,M=i.get(y),ne=y.isWebGLMultipleRenderTargets===!0;if(ne)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){ue.push(36064+ge),y.depthBuffer&&ue.push(be);const ve=M.__ignoreDepthValues!==void 0?M.__ignoreDepthValues:!1;if(ve===!1&&(y.depthBuffer&&(Q|=256),y.stencilBuffer&&(Q|=1024)),ne&&n.framebufferRenderbuffer(36008,36064,36161,M.__webglColorRenderbuffer[ge]),ve===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),ne){const P=i.get(_[ge]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,P,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Q,9728),d&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,M.__webglColorRenderbuffer[ge]);const ve=i.get(_[ge]).__webglTexture;t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,M.__webglMultisampledFramebuffer)}}function pe(y){return Math.min(h,y.samples)}function te(y){const _=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function me(y){const _=o.render.frame;g.get(y)!==_&&(g.set(y,_),y.update())}function ae(y,_){const O=y.encoding,j=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Sl||O!==Bi&&(O===it?a===!1?e.has("EXT_sRGB")===!0&&j===sn?(y.format=Sl,y.minFilter=$t,y.generateMipmaps=!1):_=vd.sRGBToLinear(_):(j!==sn||Q!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),_}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=fe,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=I,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=K,this.useMultisampledRTT=te}function BM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===zi)return 5121;if(s===Fv)return 32819;if(s===Nv)return 32820;if(s===Dv)return 5120;if(s===Iv)return 5122;if(s===pd)return 5123;if(s===Ov)return 5124;if(s===Ci)return 5125;if(s===Pi)return 5126;if(s===gs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zv)return 6406;if(s===sn)return 6408;if(s===Uv)return 6409;if(s===Vv)return 6410;if(s===Ii)return 6402;if(s===Lr)return 34041;if(s===kv)return 6403;if(s===Bv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Sl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hv)return 36244;if(s===Gv)return 33319;if(s===Wv)return 33320;if(s===$v)return 36249;if(s===_a||s===xa||s===ya||s===ba)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Au||s===Cu||s===Pu||s===Lu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Au)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ru||s===Du)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ru)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Du)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Iu||s===Ou||s===Fu||s===Nu||s===zu||s===Bu||s===Uu||s===Vu||s===ku||s===Hu||s===Gu||s===Wu||s===$u||s===ju)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Iu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ou)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ku)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$u)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ju)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qu)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===br?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class UM extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VM))),c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const x=new oi;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class kM extends un{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ii,u!==Ii&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ii&&(i=Ci),i===void 0&&u===Lr&&(i=br),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class HM extends Vi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],x=new Map,C=new Nt;C.layers.enable(1),C.viewport=new bt;const E=new Nt;E.layers.enable(2),E.viewport=new bt;const S=[C,E],R=new UM;R.layers.enable(1),R.layers.enable(2);let F=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=v[q];return ee===void 0&&(ee=new Ya,v[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=v[q];return ee===void 0&&(ee=new Ya,v[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=v[q];return ee===void 0&&(ee=new Ya,v[q]=ee),ee.getHandSpace()};function L(q){const ee=x.get(q.inputSource);ee!==void 0&&ee.dispatchEvent({type:q.type,data:q.inputSource})}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B),x.forEach(function(q,ee){q!==void 0&&q.disconnect(ee)}),x.clear(),F=null,b=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,p=null,W.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:f}),p=new ui(f.framebufferWidth,f.framebufferHeight,{format:sn,type:zi,encoding:e.outputEncoding})}else{let ee=null,fe=null,le=null;g.depth&&(le=g.stencil?35056:33190,ee=g.stencil?Lr:Ii,fe=g.stencil?br:Ci);const de={colorFormat:e.outputEncoding===it?35907:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(de),r.updateRenderState({layers:[h]}),p=new ui(h.textureWidth,h.textureHeight,{format:sn,type:zi,depthTexture:new kM(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const we=e.properties.get(p);we.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(q){const ee=r.inputSources;for(let fe=0;fe<ee.length;fe++){const le=ee[fe].handedness==="right"?1:0;x.set(ee[fe],v[le])}for(let fe=0;fe<q.removed.length;fe++){const le=q.removed[fe],de=x.get(le);de&&(de.dispatchEvent({type:"disconnected",data:le}),x.delete(le))}for(let fe=0;fe<q.added.length;fe++){const le=q.added[fe],de=x.get(le);de&&de.dispatchEvent({type:"connected",data:le})}}const xe=new D,ce=new D;function N(q,ee,fe){xe.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(fe.matrixWorld);const le=xe.distanceTo(ce),de=ee.projectionMatrix.elements,we=fe.projectionMatrix.elements,Ce=de[14]/(de[10]-1),X=de[14]/(de[10]+1),k=(de[9]+1)/de[5],se=(de[9]-1)/de[5],J=(de[8]-1)/de[0],K=(we[8]+1)/we[0],Ee=Ce*J,w=Ce*K,A=le/(-J+K),I=A*-J;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(I),q.translateZ(A),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const H=Ce+A,Z=X+A,re=Ee-I,pe=w+(le-I),te=k*X/Z*H,me=se*X/Z*H;q.projectionMatrix.makePerspective(re,pe,te,me,H,Z)}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;R.near=E.near=C.near=q.near,R.far=E.far=C.far=q.far,(F!==R.near||b!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,b=R.far);const ee=q.parent,fe=R.cameras;ie(R,ee);for(let de=0;de<fe.length;de++)ie(fe[de],ee);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),q.position.copy(R.position),q.quaternion.copy(R.quaternion),q.scale.copy(R.scale),q.matrix.copy(R.matrix),q.matrixWorld.copy(R.matrixWorld);const le=q.children;for(let de=0,we=le.length;de<we;de++)le[de].updateMatrixWorld(!0);fe.length===2?N(R,C,E):R.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(q){h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let V=null;function $(q,ee){if(c=ee.getViewerPose(l||o),d=ee,c!==null){const le=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let de=!1;le.length!==R.cameras.length&&(R.cameras.length=0,de=!0);for(let we=0;we<le.length;we++){const Ce=le[we];let X=null;if(f!==null)X=f.getViewport(Ce);else{const se=u.getViewSubImage(h,Ce);X=se.viewport,we===0&&(e.setRenderTargetTextures(p,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(p))}let k=S[we];k===void 0&&(k=new Nt,k.layers.enable(we),k.viewport=new bt,S[we]=k),k.matrix.fromArray(Ce.transform.matrix),k.projectionMatrix.fromArray(Ce.projectionMatrix),k.viewport.set(X.x,X.y,X.width,X.height),we===0&&R.matrix.copy(k.matrix),de===!0&&R.cameras.push(k)}}const fe=r.inputSources;for(let le=0;le<v.length;le++){const de=fe[le],we=x.get(de);we!==void 0&&we.update(de,ee,l||o)}V&&V(q,ee),d=null}const W=new wd;W.setAnimationLoop($),this.setAnimationLoop=function(q){V=q},this.dispose=function(){}}}function GM(n,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,C)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let C;p.aoMap?C=p.aoMap:p.lightMap&&(C=p.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uv2Transform.value.copy(C.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C;p.map?C=p.map:p.alphaMap&&(C=p.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ln&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function WM(){const n=Co("canvas");return n.style.display="block",n}function pc(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:WM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bi,this.physicallyCorrectLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,x=0,C=null,E=-1,S=null;const R=new bt,F=new bt;let b=null,L=e.width,z=e.height,B=1,xe=null,ce=null;const N=new bt(0,0,L,z),ie=new bt(0,0,L,z);let V=!1;const $=new fc;let W=!1,q=!1,ee=null;const fe=new ht,le=new Le,de=new D,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return C===null?B:1}let X=t;function k(T,U){for(let Y=0;Y<T.length;Y++){const G=T[Y],oe=e.getContext(G,U);if(oe!==null)return oe}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",he,!1),X===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),X=k(U,T),X===null)throw k(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let se,J,K,Ee,w,A,I,H,Z,re,pe,te,me,ae,y,_,O,j,Q,ue,be,M,ne;function ge(){se=new ib(X),J=new Zy(X,se,n),se.init(J),M=new BM(X,se,J),K=new NM(X,se,J),Ee=new ob,w=new wM,A=new zM(X,se,K,w,J,M,Ee),I=new Jy(m),H=new nb(m),Z=new v_(X,J),ne=new Xy(X,se,Z,J),re=new rb(X,Z,Ee,ne),pe=new ub(X,re,Z,Ee),Q=new cb(X,J,A),_=new Ky(w),te=new SM(m,I,H,se,J,ne,_),me=new GM(m,w),ae=new TM,y=new DM(se,J),j=new qy(m,I,K,pe,u,o),O=new FM(m,pe,J),ue=new Yy(X,se,Ee,J),be=new sb(X,se,Ee,J),Ee.programs=te.programs,m.capabilities=J,m.extensions=se,m.properties=w,m.renderLists=ae,m.shadowMap=O,m.state=K,m.info=Ee}ge();const ve=new HM(m,X);this.xr=ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(L,z,!1))},this.getSize=function(T){return T.set(L,z)},this.setSize=function(T,U,Y){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,z=U,e.width=Math.floor(T*B),e.height=Math.floor(U*B),Y!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(L*B,z*B).floor()},this.setDrawingBufferSize=function(T,U,Y){L=T,z=U,B=Y,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,U,Y,G){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,U,Y,G),K.viewport(R.copy(N).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,U,Y,G){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,Y,G),K.scissor(F.copy(ie).multiplyScalar(B).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){K.setScissorTest(V=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(T=!0,U=!0,Y=!0){let G=0;T&&(G|=16384),U&&(G|=256),Y&&(G|=1024),X.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",he,!1),ae.dispose(),y.dispose(),w.dispose(),I.dispose(),H.dispose(),pe.dispose(),ne.dispose(),te.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",je),ve.removeEventListener("sessionend",qe),ee&&(ee.dispose(),ee=null),At.stop()};function P(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ee.autoReset,U=O.enabled,Y=O.autoUpdate,G=O.needsUpdate,oe=O.type;ge(),Ee.autoReset=T,O.enabled=U,O.autoUpdate=Y,O.needsUpdate=G,O.type=oe}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Te(T){const U=T.target;U.removeEventListener("dispose",Te),Me(U)}function Me(T){Pe(T),w.remove(T)}function Pe(T){const U=w.get(T).programs;U!==void 0&&(U.forEach(function(Y){te.releaseProgram(Y)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,G,oe,De){U===null&&(U=we);const Fe=oe.isMesh&&oe.matrixWorld.determinant()<0,Be=Kd(T,U,Y,G,oe);K.setMaterial(G,Fe);let ze=Y.index;const Xe=Y.attributes.position;if(ze===null){if(Xe===void 0||Xe.count===0)return}else if(ze.count===0)return;let ke=1;G.wireframe===!0&&(ze=re.getWireframeAttribute(Y),ke=2),ne.setup(oe,G,Be,Y,ze);let Ge,rt=ue;ze!==null&&(Ge=Z.get(ze),rt=be,rt.setIndex(Ge));const mi=ze!==null?ze.count:Xe.count,Gi=Y.drawRange.start*ke,Wi=Y.drawRange.count*ke,fn=De!==null?De.start*ke:0,$e=De!==null?De.count*ke:1/0,$i=Math.max(Gi,fn),ot=Math.min(mi,Gi+Wi,fn+$e)-1,dn=Math.max(0,ot-$i+1);if(dn!==0){if(oe.isMesh)G.wireframe===!0?(K.setLineWidth(G.wireframeLinewidth*Ce()),rt.setMode(1)):rt.setMode(4);else if(oe.isLine){let Wn=G.linewidth;Wn===void 0&&(Wn=1),K.setLineWidth(Wn*Ce()),oe.isLineSegments?rt.setMode(1):oe.isLineLoop?rt.setMode(2):rt.setMode(3)}else oe.isPoints?rt.setMode(0):oe.isSprite&&rt.setMode(4);if(oe.isInstancedMesh)rt.renderInstances($i,dn,oe.count);else if(Y.isInstancedBufferGeometry){const Wn=Math.min(Y.instanceCount,Y._maxInstanceCount);rt.renderInstances($i,dn,Wn)}else rt.render($i,dn)}},this.compile=function(T,U){f=y.get(T),f.init(),g.push(f),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(Y){const G=Y.material;if(G)if(Array.isArray(G))for(let oe=0;oe<G.length;oe++){const De=G[oe];na(De,T,Y)}else na(G,T,Y)}),g.pop(),f=null};let ye=null;function Oe(T){ye&&ye(T)}function je(){At.stop()}function qe(){At.start()}const At=new wd;At.setAnimationLoop(Oe),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(T){ye=T,ve.setAnimationLoop(T),T===null?At.stop():At.start()},ve.addEventListener("sessionstart",je),ve.addEventListener("sessionend",qe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,U,C),f=y.get(T,g.length),f.init(),g.push(f),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(fe),q=this.localClippingEnabled,W=_.init(this.clippingPlanes,q,U),h=ae.get(T,d.length),h.init(),d.push(h),hn(T,U,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(xe,ce),W===!0&&_.beginShadows();const Y=f.state.shadowsArray;if(O.render(Y,T,U),W===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(h,T),f.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const G=U.cameras;for(let oe=0,De=G.length;oe<De;oe++){const Fe=G[oe];yc(h,T,Fe,Fe.viewport)}}else yc(h,T,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(m,T,U),ne.resetDefaultState(),E=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function hn(T,U,Y,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){G&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Fe=pe.update(T),Be=T.material;Be.visible&&h.push(T,Fe,Be,Y,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ee.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ee.render.frame),!T.frustumCulled||$.intersectsObject(T))){G&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Fe=pe.update(T),Be=T.material;if(Array.isArray(Be)){const ze=Fe.groups;for(let Xe=0,ke=ze.length;Xe<ke;Xe++){const Ge=ze[Xe],rt=Be[Ge.materialIndex];rt&&rt.visible&&h.push(T,Fe,rt,Y,de.z,Ge)}}else Be.visible&&h.push(T,Fe,Be,Y,de.z,null)}}const De=T.children;for(let Fe=0,Be=De.length;Fe<Be;Fe++)hn(De[Fe],U,Y,G)}function yc(T,U,Y,G){const oe=T.opaque,De=T.transmissive,Fe=T.transparent;f.setupLightsView(Y),De.length>0&&Yd(oe,U,Y),G&&K.viewport(R.copy(G)),oe.length>0&&Ls(oe,U,Y),De.length>0&&Ls(De,U,Y),Fe.length>0&&Ls(Fe,U,Y),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Yd(T,U,Y){const G=J.isWebGL2;ee===null&&(ee=new ui(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?gs:zi,minFilter:Yo,samples:G&&s===!0?4:0})),m.getDrawingBufferSize(le),G?ee.setSize(le.x,le.y):ee.setSize(El(le.x),El(le.y));const oe=m.getRenderTarget();m.setRenderTarget(ee),m.clear();const De=m.toneMapping;m.toneMapping=Vn,Ls(T,U,Y),m.toneMapping=De,A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),m.setRenderTarget(oe)}function Ls(T,U,Y){const G=U.isScene===!0?U.overrideMaterial:null;for(let oe=0,De=T.length;oe<De;oe++){const Fe=T[oe],Be=Fe.object,ze=Fe.geometry,Xe=G===null?Fe.material:G,ke=Fe.group;Be.layers.test(Y.layers)&&Zd(Be,U,Y,ze,Xe,ke)}}function Zd(T,U,Y,G,oe,De){T.onBeforeRender(m,U,Y,G,oe,De),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),oe.onBeforeRender(m,U,Y,G,T,De),oe.transparent===!0&&oe.side===pi?(oe.side=ln,oe.needsUpdate=!0,m.renderBufferDirect(Y,U,G,oe,T,De),oe.side=ms,oe.needsUpdate=!0,m.renderBufferDirect(Y,U,G,oe,T,De),oe.side=pi):m.renderBufferDirect(Y,U,G,oe,T,De),T.onAfterRender(m,U,Y,G,oe,De)}function na(T,U,Y){U.isScene!==!0&&(U=we);const G=w.get(T),oe=f.state.lights,De=f.state.shadowsArray,Fe=oe.state.version,Be=te.getParameters(T,oe.state,De,U,Y),ze=te.getProgramCacheKey(Be);let Xe=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?H:I).get(T.envMap||G.environment),Xe===void 0&&(T.addEventListener("dispose",Te),Xe=new Map,G.programs=Xe);let ke=Xe.get(ze);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Fe)return bc(T,Be),ke}else Be.uniforms=te.getUniforms(T),T.onBuild(Y,Be,m),T.onBeforeCompile(Be,m),ke=te.acquireProgram(Be,ze),Xe.set(ze,ke),G.uniforms=Be.uniforms;const Ge=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=_.uniform),bc(T,Be),G.needsLights=Qd(T),G.lightsStateVersion=Fe,G.needsLights&&(Ge.ambientLightColor.value=oe.state.ambient,Ge.lightProbe.value=oe.state.probe,Ge.directionalLights.value=oe.state.directional,Ge.directionalLightShadows.value=oe.state.directionalShadow,Ge.spotLights.value=oe.state.spot,Ge.spotLightShadows.value=oe.state.spotShadow,Ge.rectAreaLights.value=oe.state.rectArea,Ge.ltc_1.value=oe.state.rectAreaLTC1,Ge.ltc_2.value=oe.state.rectAreaLTC2,Ge.pointLights.value=oe.state.point,Ge.pointLightShadows.value=oe.state.pointShadow,Ge.hemisphereLights.value=oe.state.hemi,Ge.directionalShadowMap.value=oe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ge.spotShadowMap.value=oe.state.spotShadowMap,Ge.spotShadowMatrix.value=oe.state.spotShadowMatrix,Ge.pointShadowMap.value=oe.state.pointShadowMap,Ge.pointShadowMatrix.value=oe.state.pointShadowMatrix);const rt=ke.getUniforms(),mi=xo.seqWithValue(rt.seq,Ge);return G.currentProgram=ke,G.uniformsList=mi,ke}function bc(T,U){const Y=w.get(T);Y.outputEncoding=U.outputEncoding,Y.instancing=U.instancing,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Kd(T,U,Y,G,oe){U.isScene!==!0&&(U=we),A.resetTextureUnits();const De=U.fog,Fe=G.isMeshStandardMaterial?U.environment:null,Be=C===null?m.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Bi,ze=(G.isMeshStandardMaterial?H:I).get(G.envMap||Fe),Xe=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!G.normalMap&&!!Y.attributes.tangent,Ge=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,mi=!!Y.morphAttributes.color,Gi=G.toneMapped?m.toneMapping:Vn,Wi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fn=Wi!==void 0?Wi.length:0,$e=w.get(G),$i=f.state.lights;if(W===!0&&(q===!0||T!==S)){const pn=T===S&&G.id===E;_.setState(G,T,pn)}let ot=!1;G.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==$i.state.version||$e.outputEncoding!==Be||oe.isInstancedMesh&&$e.instancing===!1||!oe.isInstancedMesh&&$e.instancing===!0||oe.isSkinnedMesh&&$e.skinning===!1||!oe.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==ze||G.fog===!0&&$e.fog!==De||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==_.numPlanes||$e.numIntersection!==_.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==ke||$e.morphTargets!==Ge||$e.morphNormals!==rt||$e.morphColors!==mi||$e.toneMapping!==Gi||J.isWebGL2===!0&&$e.morphTargetsCount!==fn)&&(ot=!0):(ot=!0,$e.__version=G.version);let dn=$e.currentProgram;ot===!0&&(dn=na(G,U,oe));let Wn=!1,Ur=!1,ia=!1;const Ct=dn.getUniforms(),Vr=$e.uniforms;if(K.useProgram(dn.program)&&(Wn=!0,Ur=!0,ia=!0),G.id!==E&&(E=G.id,Ur=!0),Wn||S!==T){if(Ct.setValue(X,"projectionMatrix",T.projectionMatrix),J.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Ur=!0,ia=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const pn=Ct.map.cameraPosition;pn!==void 0&&pn.setValue(X,de.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||oe.isSkinnedMesh)&&Ct.setValue(X,"viewMatrix",T.matrixWorldInverse)}if(oe.isSkinnedMesh){Ct.setOptional(X,oe,"bindMatrix"),Ct.setOptional(X,oe,"bindMatrixInverse");const pn=oe.skeleton;pn&&(J.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Ct.setValue(X,"boneTexture",pn.boneTexture,A),Ct.setValue(X,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ra=Y.morphAttributes;return(ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&J.isWebGL2===!0)&&Q.update(oe,Y,G,dn),(Ur||$e.receiveShadow!==oe.receiveShadow)&&($e.receiveShadow=oe.receiveShadow,Ct.setValue(X,"receiveShadow",oe.receiveShadow)),Ur&&(Ct.setValue(X,"toneMappingExposure",m.toneMappingExposure),$e.needsLights&&Jd(Vr,ia),De&&G.fog===!0&&me.refreshFogUniforms(Vr,De),me.refreshMaterialUniforms(Vr,G,B,z,ee),xo.upload(X,$e.uniformsList,Vr,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xo.upload(X,$e.uniformsList,Vr,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ct.setValue(X,"center",oe.center),Ct.setValue(X,"modelViewMatrix",oe.modelViewMatrix),Ct.setValue(X,"normalMatrix",oe.normalMatrix),Ct.setValue(X,"modelMatrix",oe.matrixWorld),dn}function Jd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Qd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,Y){w.get(T.texture).__webglTexture=U,w.get(T.depthTexture).__webglTexture=Y;const G=w.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const Y=w.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){C=T,v=U,x=Y;let G=!0;if(T){const ze=w.get(T);ze.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?A.setupRenderTarget(T):ze.__hasExternalTextures&&A.rebindTextures(T,w.get(T.texture).__webglTexture,w.get(T.depthTexture).__webglTexture)}let oe=null,De=!1,Fe=!1;if(T){const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Fe=!0);const Xe=w.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(oe=Xe[U],De=!0):J.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?oe=w.get(T).__webglMultisampledFramebuffer:oe=Xe,R.copy(T.viewport),F.copy(T.scissor),b=T.scissorTest}else R.copy(N).multiplyScalar(B).floor(),F.copy(ie).multiplyScalar(B).floor(),b=V;if(K.bindFramebuffer(36160,oe)&&J.drawBuffers&&G&&K.drawBuffers(T,oe),K.viewport(R),K.scissor(F),K.setScissorTest(b),De){const ze=w.get(T.texture);X.framebufferTexture2D(36160,36064,34069+U,ze.__webglTexture,Y)}else if(Fe){const ze=w.get(T.texture),Xe=U||0;X.framebufferTextureLayer(36160,36064,ze.__webglTexture,Y||0,Xe)}E=-1},this.readRenderTargetPixels=function(T,U,Y,G,oe,De,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=w.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){K.bindFramebuffer(36160,Be);try{const ze=T.texture,Xe=ze.format,ke=ze.type;if(Xe!==sn&&M.convert(Xe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===gs&&(se.has("EXT_color_buffer_half_float")||J.isWebGL2&&se.has("EXT_color_buffer_float"));if(ke!==zi&&M.convert(ke)!==X.getParameter(35738)&&!(ke===Pi&&(J.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-oe&&X.readPixels(U,Y,G,oe,M.convert(Xe),M.convert(ke),De)}finally{const ze=C!==null?w.get(C).__webglFramebuffer:null;K.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(T,U,Y=0){const G=Math.pow(2,-Y),oe=Math.floor(U.image.width*G),De=Math.floor(U.image.height*G);A.setTexture2D(U,0),X.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,oe,De),K.unbindTexture()},this.copyTextureToTexture=function(T,U,Y,G=0){const oe=U.image.width,De=U.image.height,Fe=M.convert(Y.format),Be=M.convert(Y.type);A.setTexture2D(Y,0),X.pixelStorei(37440,Y.flipY),X.pixelStorei(37441,Y.premultiplyAlpha),X.pixelStorei(3317,Y.unpackAlignment),U.isDataTexture?X.texSubImage2D(3553,G,T.x,T.y,oe,De,Fe,Be,U.image.data):U.isCompressedTexture?X.compressedTexSubImage2D(3553,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Fe,U.mipmaps[0].data):X.texSubImage2D(3553,G,T.x,T.y,Fe,Be,U.image),G===0&&Y.generateMipmaps&&X.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(T,U,Y,G,oe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,ze=M.convert(G.format),Xe=M.convert(G.type);let ke;if(G.isData3DTexture)A.setTexture3D(G,0),ke=32879;else if(G.isDataArrayTexture)A.setTexture2DArray(G,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment);const Ge=X.getParameter(3314),rt=X.getParameter(32878),mi=X.getParameter(3316),Gi=X.getParameter(3315),Wi=X.getParameter(32877),fn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;X.pixelStorei(3314,fn.width),X.pixelStorei(32878,fn.height),X.pixelStorei(3316,T.min.x),X.pixelStorei(3315,T.min.y),X.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?X.texSubImage3D(ke,oe,U.x,U.y,U.z,De,Fe,Be,ze,Xe,fn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ke,oe,U.x,U.y,U.z,De,Fe,Be,ze,fn.data)):X.texSubImage3D(ke,oe,U.x,U.y,U.z,De,Fe,Be,ze,Xe,fn),X.pixelStorei(3314,Ge),X.pixelStorei(32878,rt),X.pixelStorei(3316,mi),X.pixelStorei(3315,Gi),X.pixelStorei(32877,Wi),oe===0&&G.generateMipmaps&&X.generateMipmap(ke),K.unbindTexture()},this.initTexture=function(T){A.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){v=0,x=0,C=null,K.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class $M extends pc{}$M.prototype.isWebGL1Renderer=!0;class Dd extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class jM extends pt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class hi extends pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lh=new D,Rh=new D,Dh=new ht,Za=new Zo,so=new As;class qM extends Tt{constructor(e=new Bt,t=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Lh.fromBufferAttribute(t,r-1),Rh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Lh.distanceTo(Rh);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Dh.copy(r).invert(),Za.copy(e.ray).applyMatrix4(Dh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let C=v,E=x-1;C<E;C+=d){const S=g.getX(C),R=g.getX(C+1);if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,R),Za.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let C=v,E=x-1;C<E;C+=d){if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,C+1),Za.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ih=new D,Oh=new D;class vs extends qM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ih.fromBufferAttribute(t,r),Oh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ih.distanceTo(Oh);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pr extends pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fh=new ht,Al=new Zo,oo=new As,ao=new D;class Ka extends Tt{constructor(e=new Bt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;Fh.copy(r).invert(),Al.copy(e.ray).applyMatrix4(Fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);ao.fromBufferAttribute(h,p),Nh(ao,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)ao.fromBufferAttribute(h,g),Nh(ao,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nh(n,e,t,i,r,s,o){const a=Al.distanceSqToPoint(n);if(a<t){const l=new D;Al.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const lo=new D,co=new D,Ja=new D,uo=new Mn;class XM extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(vo*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:p,c:v}=uo;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),v.fromBufferAttribute(a,c[2]),uo.getNormal(Ja),h[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const C=(x+1)%3,E=h[x],S=h[C],R=uo[u[x]],F=uo[u[C]],b=`${E}_${S}`,L=`${S}_${E}`;L in f&&f[L]?(Ja.dot(f[L].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(F.x,F.y,F.z)),f[L]=null):b in f||(f[b]={index0:c[x],index1:c[C],normal:Ja.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:p}=f[g];lo.fromBufferAttribute(a,m),co.fromBufferAttribute(a,p),d.push(lo.x,lo.y,lo.z),d.push(co.x,co.y,co.z)}this.setAttribute("position",new ct(d,3))}}}class YM extends pt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ZM extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Po extends pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KM extends Po{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Id extends pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JM extends pt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class QM extends pt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Cl extends pt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eS extends pt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends hi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const tS={ShadowMaterial:YM,SpriteMaterial:jM,RawShaderMaterial:ZM,ShaderMaterial:Hn,PointsMaterial:pr,MeshPhysicalMaterial:KM,MeshStandardMaterial:Po,MeshPhongMaterial:Id,MeshToonMaterial:JM,MeshNormalMaterial:QM,MeshLambertMaterial:Cl,MeshDepthMaterial:Ld,MeshDistanceMaterial:Rd,MeshBasicMaterial:Ko,MeshMatcapMaterial:eS,LineDashedMaterial:Od,LineBasicMaterial:hi,Material:pt};pt.fromType=function(n){return new tS[n]};const zh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class nS{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const iS=new nS;let Fd=class{constructor(e){this.manager=e!==void 0?e:iS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const In={};class rS extends Fd{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zh.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:i,onError:r});return}In[e]=[],In[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){x();function x(){h.read().then(({done:C,value:E})=>{if(C)v.close();else{m+=E.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let R=0,F=u.length;R<F;R++){const b=u[R];b.onProgress&&b.onProgress(S)}v.enqueue(E),x()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{zh.add(e,c);const u=In[e];delete In[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sS extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bh=new ht,Uh=new D,Vh=new D;class oS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vh),t.updateMatrixWorld(),Bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aS extends oS{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lo extends sS{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new aS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nd="\\[\\]\\.:\\/",mc="[^"+Nd+"]",lS="[^"+Nd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",mc);/(WCOD+)?/.source.replace("WCOD",lS);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc);class cS{constructor(e,t,i=0,r=1/0){this.ray=new Zo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Pl(e,this,i,t),i.sort(kh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pl(e[r],this,i,t);return i.sort(kh),i}}function kh(n,e){return n.distance-e.distance}function Pl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Pl(r[s],e,t,!0)}}class Hh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uS extends vs{constructor(e=10,t=10,i=4473924,r=8947848){i=new Re(i),r=new Re(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=f===s?i:r;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const u=new Bt;u.setAttribute("position",new ct(l,3)),u.setAttribute("color",new ct(c,3));const h=new hi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class hS extends vs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Bt;r.setAttribute("position",new ct(t,3)),r.setAttribute("color",new ct(i,3));const s=new hi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Re,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const gn=new Uint32Array(512),vn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(gn[n]=0,gn[n|256]=32768,vn[n]=24,vn[n|256]=24):e<-14?(gn[n]=1024>>-e-14,gn[n|256]=1024>>-e-14|32768,vn[n]=-e-1,vn[n|256]=-e-1):e<=15?(gn[n]=e+15<<10,gn[n|256]=e+15<<10|32768,vn[n]=13,vn[n|256]=13):e<128?(gn[n]=31744,gn[n|256]=64512,vn[n]=24,vn[n|256]=24):(gn[n]=31744,gn[n|256]=64512,vn[n]=13,vn[n|256]=13)}const zd=new Uint32Array(2048),Ps=new Uint32Array(64),fS=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,zd[n]=e|t}for(let n=1024;n<2048;++n)zd[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)Ps[n]=n<<23;Ps[31]=1199570944;Ps[32]=2147483648;for(let n=33;n<63;++n)Ps[n]=2147483648+(n-32<<23);Ps[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(fS[n]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);const Gh={type:"change"},Qa={type:"start"},Wh={type:"end"};class dS extends Vi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",ae),this._domElementKeyEvents=M},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gh),i.update(),s=r.NONE},this.update=function(){const M=new D,ne=new Ui().setFromUnitVectors(e.up,new D(0,1,0)),ge=ne.clone().invert(),ve=new D,P=new Ui,_e=2*Math.PI;return function(){const Te=i.object.position;M.copy(Te).sub(i.target),M.applyQuaternion(ne),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&L(F()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Me=i.minAzimuthAngle,Pe=i.maxAzimuthAngle;return isFinite(Me)&&isFinite(Pe)&&(Me<-Math.PI?Me+=_e:Me>Math.PI&&(Me-=_e),Pe<-Math.PI?Pe+=_e:Pe>Math.PI&&(Pe-=_e),Me<=Pe?a.theta=Math.max(Me,Math.min(Pe,a.theta)):a.theta=a.theta>(Me+Pe)/2?Math.max(Me,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),M.setFromSpherical(a),M.applyQuaternion(ge),Te.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ve.distanceToSquared(i.object.position)>o||8*(1-P.dot(i.object.quaternion))>o?(i.dispatchEvent(Gh),ve.copy(i.object.position),P.copy(i.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",O),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",re),i.domElement.removeEventListener("wheel",me),i.domElement.removeEventListener("pointermove",H),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ae)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hh,l=new Hh;let c=1;const u=new D;let h=!1;const f=new Le,d=new Le,g=new Le,m=new Le,p=new Le,v=new Le,x=new Le,C=new Le,E=new Le,S=[],R={};function F(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function L(M){l.theta-=M}function z(M){l.phi-=M}const B=function(){const M=new D;return function(ge,ve){M.setFromMatrixColumn(ve,0),M.multiplyScalar(-ge),u.add(M)}}(),xe=function(){const M=new D;return function(ge,ve){i.screenSpacePanning===!0?M.setFromMatrixColumn(ve,1):(M.setFromMatrixColumn(ve,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(ge),u.add(M)}}(),ce=function(){const M=new D;return function(ge,ve){const P=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;M.copy(_e).sub(i.target);let he=M.length();he*=Math.tan(i.object.fov/2*Math.PI/180),B(2*ge*he/P.clientHeight,i.object.matrix),xe(2*ve*he/P.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(ge*(i.object.right-i.object.left)/i.object.zoom/P.clientWidth,i.object.matrix),xe(ve*(i.object.top-i.object.bottom)/i.object.zoom/P.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(M){i.object.isPerspectiveCamera?c/=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*M)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(M){i.object.isPerspectiveCamera?c*=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/M)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(M){f.set(M.clientX,M.clientY)}function $(M){x.set(M.clientX,M.clientY)}function W(M){m.set(M.clientX,M.clientY)}function q(M){d.set(M.clientX,M.clientY),g.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ne=i.domElement;L(2*Math.PI*g.x/ne.clientHeight),z(2*Math.PI*g.y/ne.clientHeight),f.copy(d),i.update()}function ee(M){C.set(M.clientX,M.clientY),E.subVectors(C,x),E.y>0?N(b()):E.y<0&&ie(b()),x.copy(C),i.update()}function fe(M){p.set(M.clientX,M.clientY),v.subVectors(p,m).multiplyScalar(i.panSpeed),ce(v.x,v.y),m.copy(p),i.update()}function le(M){M.deltaY<0?ie(b()):M.deltaY>0&&N(b()),i.update()}function de(M){let ne=!1;switch(M.code){case i.keys.UP:ce(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:ce(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:ce(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:ce(-i.keyPanSpeed,0),ne=!0;break}ne&&(M.preventDefault(),i.update())}function we(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const M=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);f.set(M,ne)}}function Ce(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const M=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);m.set(M,ne)}}function X(){const M=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,ge=Math.sqrt(M*M+ne*ne);x.set(0,ge)}function k(){i.enableZoom&&X(),i.enablePan&&Ce()}function se(){i.enableZoom&&X(),i.enableRotate&&we()}function J(M){if(S.length==1)d.set(M.pageX,M.pageY);else{const ge=be(M),ve=.5*(M.pageX+ge.x),P=.5*(M.pageY+ge.y);d.set(ve,P)}g.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ne=i.domElement;L(2*Math.PI*g.x/ne.clientHeight),z(2*Math.PI*g.y/ne.clientHeight),f.copy(d)}function K(M){if(S.length===1)p.set(M.pageX,M.pageY);else{const ne=be(M),ge=.5*(M.pageX+ne.x),ve=.5*(M.pageY+ne.y);p.set(ge,ve)}v.subVectors(p,m).multiplyScalar(i.panSpeed),ce(v.x,v.y),m.copy(p)}function Ee(M){const ne=be(M),ge=M.pageX-ne.x,ve=M.pageY-ne.y,P=Math.sqrt(ge*ge+ve*ve);C.set(0,P),E.set(0,Math.pow(C.y/x.y,i.zoomSpeed)),N(E.y),x.copy(C)}function w(M){i.enableZoom&&Ee(M),i.enablePan&&K(M)}function A(M){i.enableZoom&&Ee(M),i.enableRotate&&J(M)}function I(M){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",H),i.domElement.addEventListener("pointerup",Z)),j(M),M.pointerType==="touch"?y(M):pe(M))}function H(M){i.enabled!==!1&&(M.pointerType==="touch"?_(M):te(M))}function Z(M){Q(M),S.length===0&&(i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",H),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(Wh),s=r.NONE}function re(M){Q(M)}function pe(M){let ne;switch(M.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case qi.DOLLY:if(i.enableZoom===!1)return;$(M),s=r.DOLLY;break;case qi.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;W(M),s=r.PAN}else{if(i.enableRotate===!1)return;V(M),s=r.ROTATE}break;case qi.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;V(M),s=r.ROTATE}else{if(i.enablePan===!1)return;W(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qa)}function te(M){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(M);break;case r.DOLLY:if(i.enableZoom===!1)return;ee(M);break;case r.PAN:if(i.enablePan===!1)return;fe(M);break}}function me(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Qa),le(M),i.dispatchEvent(Wh))}function ae(M){i.enabled===!1||i.enablePan===!1||de(M)}function y(M){switch(ue(M),S.length){case 1:switch(i.touches.ONE){case Xi.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case Xi.PAN:if(i.enablePan===!1)return;Ce(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Xi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(),s=r.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qa)}function _(M){switch(ue(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;J(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;K(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;w(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(M),i.update();break;default:s=r.NONE}}function O(M){i.enabled!==!1&&M.preventDefault()}function j(M){S.push(M)}function Q(M){delete R[M.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==M.pointerId){S.splice(ne,1);return}}function ue(M){let ne=R[M.pointerId];ne===void 0&&(ne=new Le,R[M.pointerId]=ne),ne.set(M.pageX,M.pageY)}function be(M){const ne=M.pointerId===S[0].pointerId?S[1]:S[0];return R[ne.pointerId]}i.domElement.addEventListener("contextmenu",O),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",re),i.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}class gc extends EventTarget{constructor(t){super();Ae(this,"scene");Ae(this,"camera");Ae(this,"renderer");Ae(this,"orbitControls");Ae(this,"cameraRotatedEvent",new Event("camera_rotated"));this.container=t,this.scene=new Dd,this.scene.background=new Re(12635345),this.camera=new Nt(40,this.container.offsetWidth/this.container.offsetHeight,.1,1e3),this.renderer=new pc,this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),t.appendChild(this.renderer.domElement);const i=new Lo(16777215,1);i.position.set(20,50,20),i.lookAt(0,0,0),this.scene.add(i);const r=new Lo(13421772,1);r.position.set(-20,50,-20),r.lookAt(0,0,0),this.scene.add(r),this.camera.position.x=13,this.camera.position.y=18,this.camera.position.z=13,this.camera.lookAt(new D(0,0,0)),this.addDebug(),this.orbitControls=this.addOrbitControls(),this.orbitControls.addEventListener("change",this.dispatchEvent.bind(this,this.cameraRotatedEvent))}animate(){document.body.contains(this.container)&&(this.updateSize(),requestAnimationFrame(this.animate.bind(this)),this.orbitControls.update(),this.renderer.render(this.scene,this.camera),window.graphics=this)}dump(){console.log("scene",this.scene)}addDebug(){{const t=new hS(20);this.scene.add(t)}}addOrbitControls(){const t=new dS(this.camera,this.renderer.domElement);return t.enableDamping=!0,t.dampingFactor=.05,t}updateSize(){this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}}Ae(gc,"DEBUG",!0);function vc(n){return n[Math.floor(Math.random()*n.length)]}function _s(n,e="Assertion failed"){if(!n)throw console.groupCollapsed("assertBoolean"),console.trace(),console.groupEnd(),e}async function pS(n){return await new Promise(e=>setTimeout(e,n))}class Qt{constructor(e){Ae(this,"value",[]);this.templatesCount=e,this.value=new Array(e).fill(0)}isAllZeros(){return this.countOnes()===0}countOnes(){return this.value.reduce((e,t)=>e+t,0)}clone(){const e=new Qt(this.templatesCount);return e.value=[...this.value],e}getIntersection(e){_s(this.value.length===e.value.length);const t=new Qt(this.templatesCount);for(let i=0;i<t.value.length;i++)t.value[i]=Math.min(this.value[i],e.value[i]);return t}fillOnes(){this.value.fill(1)}getNonZeroIndices(){return this.value.reduce((e,t,i)=>(t===1&&e.push(i),e),[])}getRandomNonZeroIndex(){const e=this.getNonZeroIndices();return vc(e)}on(e){this.setAt(e,1)}off(e){this.setAt(e,0)}setAt(e,t){this.value[e]=t}getAt(e){return this.value[e]}print(){return this.value.join(" ")}}const hr=["meshes/corner.obj","meshes/wall.obj","meshes/roof.obj","meshes/tower.obj","meshes/floor.obj","meshes/innercorner.obj"];var ii=(n=>(n.px="px",n.nx="nx",n.py="py",n.ny="ny",n.pz="pz",n.nz="nz",n))(ii||{});class mS{constructor(){Ae(this,"iterations",0);Ae(this,"templates",[])}parse(e){this.templates.splice(0);const t=[];t.push(...this.getDefaultTemplates()),t.push(...this.getSrcTemplates());const i=t.length;this.templates.push(...t.map(r=>({...r,id:r.src,px:new Qt(i),nx:new Qt(i),py:new Qt(i),ny:new Qt(i),pz:new Qt(i),nz:new Qt(i)})));for(const r of Object.values(ii))this.templates[0][r].on(0);e.model.forEach(r=>{this.parseCell(e,r)}),this.addZeros(),console.log("parser::iterations",this.iterations),console.log("parser::templates",this.templates)}getTemplates(){return this.templates}getSrcTemplates(){const e=[];for(let t=0;t<hr.length;++t)e.push({src:hr[t],rotation:0}),e.push({src:hr[t],rotation:1}),e.push({src:hr[t],rotation:2}),e.push({src:hr[t],rotation:3});return e}findTemplateIndex(e,t){const i=this.templates.findIndex(({src:r,rotation:s})=>r===e&&s===t);return i===-1?null:i}getDefaultTemplates(){return["void"].map(e=>({src:e,id:e,rotation:0}))}parseCell(e,t){const i=t.position;this.parsePair(e,"px",t,i.clone().add(new D(1,0,0))),this.parsePair(e,"nx",t,i.clone().add(new D(-1,0,0))),this.parsePair(e,"py",t,i.clone().add(new D(0,1,0))),this.parsePair(e,"ny",t,i.clone().add(new D(0,-1,0))),this.parsePair(e,"pz",t,i.clone().add(new D(0,0,1))),this.parsePair(e,"nz",t,i.clone().add(new D(0,0,-1)))}parsePair(e,t,i,r){const s=e.getCell(r);s?this.mateTwo(i.src,i.rotation,s.src,s.rotation,t):this.mateTwo(i.src,i.rotation,"жопа",0,t)}mateTwo(e,t,i,r,s){for(let o=0;o<4;++o){const a=this.rotateKey(s,-o),l=this.reverseKey(a),c=this.findTemplateIndex(e,this.addRotate(t,o)),u=this.findTemplateIndex(i,this.addRotate(r,o))??0;this.templates[c][a].on(u),this.templates[u][l].on(c),this.iterations++}}addZeros(){}addRotate(e,t){return(4+e+t)%4}rotateKey(e,t){if(["py","ny"].includes(e))return e;const i=["px","pz","nx","nz"];let r=i.findIndex(s=>s===e);if(r===-1)throw"Can't rotate index";return i[this.addRotate(r,t)]}reverseKey(e){switch(e){case"px":return"nx";case"nx":return"px";case"py":return"ny";case"ny":return"py";case"pz":return"nz";case"nz":return"pz"}}}const Fi=new mS;class _c{constructor(){Ae(this,"x",0);Ae(this,"y",0);Ae(this,"z",0);Ae(this,"dead",!1);Ae(this,"dirty",!1);Ae(this,"enthropy",0);Ae(this,"mask");Ae(this,"templates",[]);this.mask=new Qt(Fi.getTemplates().length),this.mask.fillOnes(),this.enthropy=this.mask.countOnes(),this.templates=Fi.getTemplates()}getNonZeroIndices(){return this.mask.getNonZeroIndices()}collapse(){const e=this.getNonZeroIndices(),t=vc(e)??0;this.collapseTo(t)}collapseTo(e){this.dead||(_s(e<this.templates.length),_s(this.mask.getAt(e)===1),this.mask=new Qt(Fi.getTemplates().length),this.mask.setAt(e,1),this.enthropy=this.mask.countOnes())}collapseToId(e){const t=this.templates.findIndex(i=>i.id===e);this.collapseTo(t)}die(){this.dead=!0}tryGetOnlyState(){if(this.enthropy!=1)throw"attempt to get only state of element with enthropy > 2";return this.mask.getNonZeroIndices()[0]}countStates(){return this.mask.countOnes()}clone(){const e=new _c;return e.mask=this.mask.clone(),e.enthropy=this.mask.countOnes(),e.dead=this.dead,e.x=this.x,e.y=this.y,e.z=this.z,e}updateEnthropy(){this.enthropy=this.mask.countOnes(),this.enthropy<1&&this.die()}print(){let e=`[${this.x.toString().padStart(2," ")}, ${this.y.toString().padStart(2," ")}] `;return e+=`[${this.mask.print()}]`,e+=` entr: ${this.enthropy}`,e}}const Jt=class Jt{constructor(){Ae(this,"instances",[])}fill(){for(let e=0;e<Jt.MAX_HORIZONTAL;++e){this.instances[e]=[];for(let t=0;t<Jt.MAX_VERTICAL;++t){this.instances[e][t]=[];for(let i=0;i<Jt.MAX_HORIZONTAL;++i){const r=new _c;r.x=e,r.y=t,r.z=i,(e===0||i===0||e===Jt.MAX_HORIZONTAL-1||i===Jt.MAX_HORIZONTAL-1)&&(r.collapseToId("void"),r.dirty=!0),(t===0||t===Jt.MAX_VERTICAL-1)&&(r.collapseToId("void"),r.dirty=!0),this.instances[e][t][i]=r}}}}eachElement(e){this.eachElementByIndex((t,i,r)=>e(this.instances[t][i][r]))}eachElementByIndex(e){for(let t=0;t<this.instances.length;++t)for(let i=0;i<this.instances[t].length;++i)for(let r=0;r<this.instances[t][i].length;++r)e(t,i,r)}print(){const e=[];for(let t=0;t<this.instances.length;++t){e[t]=[];for(let i=0;i<this.instances[t].length;++i)for(let r=0;r<this.instances[t][i].length;++r)e[t][i][r]={...this.instances[t][i][r]}}console.log(e)}printFinishedSlice(e){var i;_s(e>=0&&e<Jt.MAX_HORIZONTAL);let t="";for(let r=0;r<this.instances.length;++r){for(let s=0;s<this.instances[r].length;++s){const o=this.instances[r][s][e];_s(o.enthropy<=1),t+=`	${((i=Fi.getTemplates()[o.tryGetOnlyState()])==null?void 0:i.id)??"dead"}`}t+=`
`}console.log(t)}getElementsAdjacentTo(e){function t(r,s){s[0]&&r.push(s)}const i=[];return t(i,[this.tryGetElementAt(e.x+1,e.y,e.z),ii.px]),t(i,[this.tryGetElementAt(e.x-1,e.y,e.z),ii.nx]),t(i,[this.tryGetElementAt(e.x,e.y+1,e.z),ii.py]),t(i,[this.tryGetElementAt(e.x,e.y-1,e.z),ii.ny]),t(i,[this.tryGetElementAt(e.x,e.y,e.z+1),ii.pz]),t(i,[this.tryGetElementAt(e.x,e.y,e.z-1),ii.nz]),i}tryGetElementAt(e,t,i){return e>=0&&e<this.instances.length&&t>=0&&t<this.instances[e].length&&i>=0&&i<this.instances[e][t].length?this.instances[e][t][i]:null}getNextDirtyElement(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let i=0;i<this.instances[e][t].length;++i){const r=this.instances[e][t][i];if(r.dirty)return r}return null}validataSolved(){for(let e=0;e<this.instances.length;++e)for(let t=0;t<this.instances[e].length;++t)for(let i=0;i<this.instances[e][t].length;++i)if(this.instances[e][t][i].enthropy>1)return!1;return!0}cloneState(){return this.instances.map(e=>e.map(t=>t.map(i=>i.clone())))}replaceState(e){this.instances=e.map(t=>t.map(i=>i.map(r=>r.clone())))}};Ae(Jt,"MAX_HORIZONTAL",13),Ae(Jt,"MAX_VERTICAL",10);let Mr=Jt;const Ti=class Ti extends EventTarget{constructor(t){super();Ae(this,"iterations",0);Ae(this,"runFlag",!1);Ae(this,"history",[]);this.set=t}async run(){this.runFlag=!0,this.propagate();const t=this.getNextElement();this.history.push({instancePos:{x:t.x,y:t.y,z:t.z},leftStates:t.mask.clone(),state:this.set.cloneState(),retries:0});let i=0;for(;this.runFlag;){if(i++>Ti.GUARD_LIMIT)throw"Guard overflow";if(this.history.length===0)throw"No history left";const r=this.history[this.history.length-1],s=r.leftStates.getRandomNonZeroIndex();try{const a=this.set.tryGetElementAt(r.instancePos.x,r.instancePos.y,r.instancePos.z);a.collapseTo(s),a.dirty=!0,this.notify(r),await pS(10),this.propagate()}catch{this.checkHistory(r,s);continue}const o=this.getNextElement();if(!o){console.log("yay!!");const a=new Event("solving_finished",{bubbles:!0});this.dispatchEvent(a);break}this.history.push({instancePos:{x:o.x,y:o.y,z:o.z},leftStates:o.mask.clone(),state:this.set.cloneState(),retries:0})}}notify(t){const i=new CustomEvent("element_collapsed",{detail:{current:new D(t.instancePos.x,t.instancePos.y,t.instancePos.z),set:this.set}});this.dispatchEvent(i)}stop(){this.runFlag=!1}checkHistory(t,i){if(t.leftStates.setAt(i,0),t.retries++,t.leftStates.countOnes()===0){this.goBackInHistory();return}this.set.replaceState(t.state)}goBackInHistory(){let t=1;const i=.1;for(let r=1;r<this.history.length-1;++r)t+=Math.random()<i?1:0;this.history.splice(this.history.length-t,t)}getLastHistoryStep(){return this.history[this.history.length-1]}propagate(){let t,i=0;for(;t=this.set.getNextDirtyElement();){if(i++>Ti.GUARD_LIMIT)throw"Guard overflow";this.propagateElement(t)}}propagateElement(t){this.set.getElementsAdjacentTo(t).forEach(([r,s])=>{this.filterTargetStates(t,r,s)}),t.dirty=!1}filterTargetStates(t,i,r){const s=i.enthropy,o=Fi.getTemplates();for(let a=0;a<o.length;a++){let l=!1;if(i.mask.getAt(a)===1)for(let c=0;c<o.length;++c){if(t.mask.getAt(c)===1){const u=o[c][r];l||(l=u.getAt(a)===1)}Ti.checks++}if(!l&&(i.mask.setAt(a,0),i.updateEnthropy(),i.enthropy===0))throw"Backtrack"}s!==i.enthropy&&this.set.getElementsAdjacentTo(i).forEach(([l,c])=>{l.dirty=!0})}getNextElement(){let t=1/0,i=[];if(this.set.eachElement(s=>{s.dead||s.enthropy===1||(s.enthropy<t&&(t=s.enthropy,i=[s]),s.enthropy===t&&i.push(s))}),i.length<1)return null;const r=vc(i);if(r.z===0)debugger;return r}printHistoryItem(){const t=this.history[this.history.length-1],i=this.history.length-1;console.log(`hist# ${String(i).padStart(2," ")} at [`+String(t.instancePos.x).padStart(2," ")+", "+String(t.instancePos.y).padStart(2," ")+`] [${t.leftStates.print()}]`)}};Ae(Ti,"GUARD_LIMIT",1e4),Ae(Ti,"checks",0);let Ro=Ti;const gS=/^[og]\s*(.+)?/,vS=/^mtllib /,_S=/^usemtl /,xS=/^usemap /,$h=new D,el=new D,jh=new D,qh=new D,Gt=new D,ho=new Re;function yS(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;$h.fromArray(r,e),el.fromArray(r,t),jh.fromArray(r,i),Gt.subVectors(jh,el),qh.subVectors($h,el),Gt.cross(qh),Gt.normalize(),s.push(Gt.x,Gt.y,Gt.z),s.push(Gt.x,Gt.y,Gt.z),s.push(Gt.x,Gt.y,Gt.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(i,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(r!==void 0&&r!==""){const g=this.uvs.length;h=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class Bd extends Fd{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new rS(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new yS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r="",s="",o=0,a=[];const l=typeof"".trimLeft=="function";for(let h=0,f=i.length;h<f;h++)if(r=i[h],r=l?r.trimLeft():r.trim(),o=r.length,o!==0&&(s=r.charAt(0),s!=="#"))if(s==="v"){const d=r.split(/\s+/);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(ho.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(ho.r,ho.g,ho.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(s==="f"){const g=r.slice(1).trim().split(/\s+/),m=[];for(let v=0,x=g.length;v<x;v++){const C=g[v];if(C.length>0){const E=C.split("/");m.push(E)}}const p=m[0];for(let v=1,x=m.length-1;v<x;v++){const C=m[v],E=m[v+1];t.addFace(p[0],C[0],E[0],p[1],C[1],E[1],p[2],C[2],E[2])}}else if(s==="l"){const d=r.substring(1).trim().split(" ");let g=[];const m=[];if(r.indexOf("/")===-1)g=d;else for(let p=0,v=d.length;p<v;p++){const x=d[p].split("/");x[0]!==""&&g.push(x[0]),x[1]!==""&&m.push(x[1])}t.addLineGeometry(g,m)}else if(s==="p"){const g=r.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((a=gS.exec(r))!==null){const d=(" "+a[0].slice(1).trim()).slice(1);t.startObject(d)}else if(_S.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(vS.test(r))t.materialLibraries.push(r.substring(7).trim());else if(xS.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(a=r.split(" "),a.length>1){const g=a[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();const c=new oi;if(c.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let h=0,f=t.objects.length;h<f;h++){const d=t.objects[h],g=d.geometry,m=d.materials,p=g.type==="Line",v=g.type==="Points";let x=!1;if(g.vertices.length===0)continue;const C=new Bt;C.setAttribute("position",new ct(g.vertices,3)),g.normals.length>0&&C.setAttribute("normal",new ct(g.normals,3)),g.colors.length>0&&(x=!0,C.setAttribute("color",new ct(g.colors,3))),g.hasUVIndices===!0&&C.setAttribute("uv",new ct(g.uvs,2));const E=[];for(let R=0,F=m.length;R<F;R++){const b=m[R],L=b.name+"_"+b.smooth+"_"+x;let z=t.materials[L];if(this.materials!==null){if(z=this.materials.create(b.name),p&&z&&!(z instanceof hi)){const B=new hi;pt.prototype.copy.call(B,z),B.color.copy(z.color),z=B}else if(v&&z&&!(z instanceof pr)){const B=new pr({size:10,sizeAttenuation:!1});pt.prototype.copy.call(B,z),B.color.copy(z.color),B.map=z.map,z=B}}z===void 0&&(p?z=new hi:v?z=new pr({size:1,sizeAttenuation:!1}):z=new Id,z.name=b.name,z.flatShading=!b.smooth,z.vertexColors=x,t.materials[L]=z),E.push(z)}let S;if(E.length>1){for(let R=0,F=m.length;R<F;R++){const b=m[R];C.addGroup(b.groupStart,b.groupCount,R)}p?S=new vs(C,E):v?S=new Ka(C,E):S=new jt(C,E)}else p?S=new vs(C,E[0]):v?S=new Ka(C,E[0]):S=new jt(C,E[0]);S.name=d.name,c.add(S)}else if(t.vertices.length>0){const h=new pr({size:1,sizeAttenuation:!1}),f=new Bt;f.setAttribute("position",new ct(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new ct(t.colors,3)),h.vertexColors=!0);const d=new Ka(f,h);c.add(d)}return c}}class bS{constructor(e){Ae(this,"TILE_SIZE",2);Ae(this,"group");Ae(this,"loader",new Bd);Ae(this,"material",new Cl({color:16777215}));Ae(this,"collapsingMaterial",new Cl({color:6736998,transparent:!0,opacity:.5}));Ae(this,"rendering",!1);Ae(this,"collapsingMesh");Ae(this,"cache",new Map);this.graphics=e,this.group=new oi,this.collapsingMesh=new jt(new ki(this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE),this.collapsingMaterial),this.collapsingMesh.visible=!1,this.graphics.scene.add(this.collapsingMesh),this.graphics.scene.add(this.group)}async tryRender(e){if(this.rendering)return;this.rendering=!0,this.group.clear();const t=[];e.eachElement(i=>t.push(i));for(let i of t)await this.tryRenderELement(i);this.rendering=!1}async tryRenderELement(e){e.enthropy!==1||e.dead||await this.addMesh(e)}async loadMesh(e){let t=this.cache.get(e);return t||(t=await new Promise(i=>this.loader.load(e,i)),this.cache.set(e,t)),t.clone(!0)}async addMesh(e){const t=Fi.getTemplates()[e.tryGetOnlyState()];if(!t||t.src==="void")return;const i=await this.loadMesh(t.src);i.rotateY(t.rotation*Math.PI/2),i.position.copy(this.convertPosition(e.x,e.y,e.z)),i.material=this.material,this.group.add(i)}convertPosition(e,t,i){return new D((e-Mr.MAX_HORIZONTAL/2)*this.TILE_SIZE,(t-Mr.MAX_VERTICAL/2)*this.TILE_SIZE,(i-Mr.MAX_HORIZONTAL/2)*this.TILE_SIZE)}handleEvent(e){this.tryRender(e.detail.set),this.collapsingMesh.visible=!0,e.detail.current&&this.collapsingMesh.position.copy(this.convertPosition(e.detail.current.x,e.detail.current.y,e.detail.current.z))}handleFinishedEvent(){this.collapsingMesh.visible=!1}}let fr,ss,yo;function MS(){if(!ss.validataSolved())throw"validataion not passed";console.log("checks",Ro.checks.toLocaleString()),yo.tryRender(ss)}async function SS(n){const e=new gc(n);ss=new Mr,fr=new Ro(ss),yo=new bS(e),fr.addEventListener("element_collapsed",t=>yo.handleEvent(t)),fr.addEventListener("solving_finished",MS),fr.addEventListener("solving_finished",()=>yo.handleFinishedEvent()),ss.fill(),e.animate(),await fr.run()}function wS(){fr.stop()}const ES=Fr({__name:"Generate",setup(n){const e=Bn();return Es(()=>{SS(e.value)}),Nf(()=>{wS()}),(t,i)=>{const r=Ni("router-link");return Ke(),Rt(kt,null,[st(r,{to:"/editor",class:"btn editor-button"},{default:si(()=>[Go("Editor")]),_:1}),ut("div",{class:"canvas",ref_key:"canvas",ref:e},null,512)],64)}}});const TS=jo(ES,[["__scopeId","data-v-7359526f"]]);class AS{constructor(){Ae(this,"objLoader",new Bd)}async loadMesh(e){let t;try{t=await new Promise((s,o)=>this.objLoader.load(e,s,()=>{},o));const i=new zr().setFromObject(t),r=new D;if(i.getSize(r),r.length()===0)return null}catch{return null}return t}}const Ud=new AS,ri=class ri{constructor(){Ae(this,"renderer",new pc);Ae(this,"camera",new Nt(40,ri.WIDTH/ri.HEIGHT,.1,1e3));Ae(this,"scene",new Dd);Ae(this,"group",new oi);this.renderer.setSize(ri.WIDTH,ri.HEIGHT),this.group.name="Container";const e=new Lo(16777215,1);e.position.set(20,50,20),e.lookAt(0,0,0),this.scene.add(e);const t=new Lo(13421772,1);t.position.set(-20,50,-20),t.lookAt(0,0,0),this.scene.add(t),this.camera.position.copy(new D(2,10,8)),this.camera.lookAt(new D(0,0,0)),this.scene.add(this.group)}async render(e){this.group.clear();const t=await Ud.loadMesh(e);if(!t)return null;this.group.add(t),document.body.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera);const i=this.renderer.domElement.toDataURL();return document.body.removeChild(this.renderer.domElement),i}};Ae(ri,"WIDTH",512),Ae(ri,"HEIGHT",512);let Ll=ri;const CS=new Ll,PS=[{position:{isVector3:!0,x:0,y:0,z:0},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-1,y:0,z:0},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:0,y:0,z:-1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-2,y:0,z:-1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:-1,y:0,z:-1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:0,y:1,z:-1},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:0,y:2,z:-1},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:0,y:3,z:-1},src:"meshes/roof.obj",rotation:0},{position:{isVector3:!0,x:1,y:0,z:2},src:"meshes/innercorner.obj",rotation:1},{position:{isVector3:!0,x:0,y:0,z:3},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:1,y:0,z:3},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-2,y:0,z:0},src:"meshes/innercorner.obj",rotation:1},{position:{isVector3:!0,x:1,y:1,z:3},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:0,y:1,z:3},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:0,y:0,z:2},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:0,y:0,z:1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:1,y:0,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:2,y:0,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:2,y:0,z:2},src:"meshes/wall.obj",rotation:0},{position:{isVector3:!0,x:3,y:0,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:3,y:0,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-2,y:0,z:1},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:-2,y:0,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-3,y:0,z:2},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:1},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:0},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:-1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:0,y:1,z:2},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:1,y:1,z:2},src:"meshes/innercorner.obj",rotation:1},{position:{isVector3:!0,x:0,y:1,z:1},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:1,y:1,z:1},src:"meshes/wall.obj",rotation:2},{position:{isVector3:!0,x:2,y:1,z:1},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:2,y:1,z:2},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:0,y:2,z:1},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:0,y:3,z:1},src:"meshes/roof.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:6},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-4,y:0,z:6},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:-4,y:0,z:7},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:7},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:-4,y:0,z:8},src:"meshes/wall.obj",rotation:3},{position:{isVector3:!0,x:-3,y:0,z:8},src:"meshes/wall.obj",rotation:1},{position:{isVector3:!0,x:-4,y:0,z:9},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-3,y:0,z:9},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-3,y:1,z:8},src:"meshes/corner.obj",rotation:1},{position:{isVector3:!0,x:-4,y:1,z:7},src:"meshes/corner.obj",rotation:3},{position:{isVector3:!0,x:-3,y:1,z:7},src:"meshes/corner.obj",rotation:2},{position:{isVector3:!0,x:-4,y:1,z:8},src:"meshes/corner.obj",rotation:0},{position:{isVector3:!0,x:-4,y:2,z:7},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:-4,y:3,z:7},src:"meshes/tower.obj",rotation:0},{position:{isVector3:!0,x:-4,y:4,z:7},src:"meshes/roof.obj",rotation:0}];function LS(n,e=20){let t=0;return(...r)=>{clearTimeout(t),t=window.setTimeout(()=>n(...r),e)}}class RS extends EventTarget{constructor(){super();Ae(this,"model",[]);Ae(this,"event",new Event("model_updated",{bubbles:!0}));this.addEventListener("model_updated",LS(this.serialize.bind(this),1e3)),window.setTimeout(this.load.bind(this),100)}addItem(t,i){const r=this.getCell(t);r?r.src=i:this.model.push({position:t,src:i,rotation:0}),this.dispatchEvent(this.event)}rotateItem(t){const i=this.getCell(t);i&&(i.rotation=(i.rotation+1)%4),this.dispatchEvent(this.event)}deleteCell(t){const i=this.model.findIndex(r=>r.position.equals(t));i!==-1&&this.model.splice(i,1),this.dispatchEvent(this.event)}getCell(t){return this.model.find(i=>i.position.equals(t))??null}serialize(){localStorage.setItem("editor-model-data",JSON.stringify(this.model))}loadDefault(){this.loadaData(PS)}loadaData(t){t&&(this.model=t,this.model.forEach(i=>{i.position=new D(i.position.x,i.position.y,i.position.z)}),this.dispatchEvent(this.event),Fi.parse(this))}load(){const t=JSON.parse(localStorage.getItem("editor-model-data"));this.loadaData(t)}}const mr=class mr extends EventTarget{constructor(t){super();Ae(this,"GRID_SIZE",2);Ae(this,"rayCaster",new cS);Ae(this,"dragPlane");Ae(this,"selectMesh");Ae(this,"editable",new oi);Ae(this,"state",{selected:new D});Ae(this,"activeLayer",0);Ae(this,"model",new RS);Ae(this,"gridHelper");this.graphics=t,this.dragPlane=this.addDragPlane(),this.selectMesh=this.addSelectMesh();const i=40;this.gridHelper=new uS(i*this.GRID_SIZE,i),this.graphics.scene.add(this.gridHelper),this.graphics.scene.add(this.editable),this.graphics.renderer.domElement.addEventListener("mousedown",s=>this.onMouseDown(s));const r=this.renderComponents.bind(this);this.model.addEventListener("model_updated",r),this.addEventListener("layer_changed",r)}addItem(t){this.model.addItem(this.state.selected,t)}rotateItem(){this.model.rotateItem(this.state.selected)}deleteCell(){this.model.deleteCell(this.state.selected)}async renderComponents(){this.editable.clear();for(let t=-40;t<=40;++t)for(let i=-40;i<=40;++i)for(let r=-40;r<=40;++r){const s=this.model.getCell(new D(t,i,r));if(s){const o=await Ud.loadMesh(s.src);i!==this.activeLayer?o.children[0].material=mr.DIMMED_MATERIAL:o.children[0].material=mr.ACTIVE_MATERIAL,o&&(o.position.copy(new D(t*this.GRID_SIZE+this.GRID_SIZE/2,i*this.GRID_SIZE+this.GRID_SIZE/2,r*this.GRID_SIZE+this.GRID_SIZE/2)),o.rotateY(s.rotation*Math.PI/2),this.editable.add(o))}}}onMouseDown(t){if(t.button!==0)return;const i=this.getPoint(t),r=Math.floor(i.x/this.GRID_SIZE),s=Math.floor(i.z/this.GRID_SIZE),o=this.state.selected.y;this.changeSelected(new D(r,o,s))}changeSelected(t){this.state.selected=t,this.updateSelectedPosition();const i=this.model.getCell(this.state.selected);this.dispatchEvent(new CustomEvent("selected",{detail:i}))}updateSelectedPosition(){this.selectMesh.position.copy(new D(this.state.selected.x*this.GRID_SIZE+this.GRID_SIZE/2,this.state.selected.y*this.GRID_SIZE+this.GRID_SIZE/2,this.state.selected.z*this.GRID_SIZE+this.GRID_SIZE/2)),this.dragPlane.position.y=this.state.selected.y*this.GRID_SIZE,this.gridHelper.position.y=this.state.selected.y*this.GRID_SIZE}getPoint(t){const i=this.graphics.renderer.getContext().canvas.getBoundingClientRect(),r=new Le;r.x=(t.clientX-i.left)/(i.right-i.left)*2-1,r.y=-((t.clientY-i.top)/(i.bottom-i.top))*2+1,this.rayCaster.setFromCamera(r,this.graphics.camera);const s=this.rayCaster.intersectObjects([this.dragPlane]);return s.length!==0?s[0].point:new D(0,0,0)}addDragPlane(){const t=new Jo(200,200),i=new jt(t,new Ko({color:16777215,transparent:!0,opacity:.5}));return i.rotateOnAxis(new D(1,0,0),-Math.PI/2),i.name="drag plane",i.visible=!1,this.graphics.scene.add(i),i}addSelectMesh(){const t=new ki(2,2,2),i=new Od({color:65280,linewidth:2,dashSize:.1,gapSize:.05}),r=new vs(new XM(t),i);return r.computeLineDistances(),this.graphics.scene.add(r),r}setLayer(t){this.activeLayer=t,this.changeSelected(new D(this.state.selected.x,t,this.state.selected.z)),this.dispatchEvent(new CustomEvent("layer_changed"))}};Ae(mr,"DIMMED_MATERIAL",new Po({color:6710886,transparent:!0,opacity:.8,side:pi})),Ae(mr,"ACTIVE_MATERIAL",new Po({color:16777215,side:pi}));let Rl=mr;const xt=[];for(let n=0;n<256;n++)xt[n]=(n<16?"0":"")+n.toString(16);function DS(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}class IS{constructor(e,t,i,r=new Le){Ae(this,"guid");this.graphics=e,this.reference=t,this.dom=i,this.offset=r,this.guid=DS()}update(){if(!this.reference)return;const e=this.reference.position.clone().project(this.graphics.camera),t=.5*this.graphics.renderer.domElement.offsetWidth,i=.5*this.graphics.renderer.domElement.offsetHeight,r=new Le;r.x=e.x*t+t+this.offset.x,r.y=-(e.y*i)+i+this.offset.y,this.dom.style.top=`${r.y}px`,this.dom.style.left=`${r.x}px`}}class OS{constructor(e){Ae(this,"elements",[]);this.graphics=e}create(e,t,i=new Le){const r=new IS(this.graphics,e,t,i);return this.elements.push(r),r.guid}update(){this.elements.forEach(e=>e.update())}remove(e){const t=this.elements.findIndex(i=>i.guid===e);if(t===-1)throw`Cound not remove ui element with guid ${e}`;this.elements.splice(t,1)}}class FS extends EventTarget{constructor(t,i){super();Ae(this,"container");Ae(this,"rotateButton");Ae(this,"event",new Event("rotate_clicked"));Ae(this,"screenSpacePositionedElementController");this.graphics=t,this.editor=i,this.screenSpacePositionedElementController=new OS(this.graphics),this.container=document.querySelector(".canvas"),this.rotateButton=document.createElement("button"),this.rotateButton.classList.add("rotate__button"),this.rotateButton.style.position="absolute",this.container.appendChild(this.rotateButton),this.rotateButton.addEventListener("click",()=>this.dispatchEvent(this.event)),this.screenSpacePositionedElementController.create(this.editor.selectMesh,this.rotateButton,new Le(40,40)),this.graphics.addEventListener("camera_rotated",()=>this.screenSpacePositionedElementController.update()),this.editor.addEventListener("selected",r=>{this.screenSpacePositionedElementController.update(),this.rotateButton.classList.toggle("hidden",!r.detail)})}}let On;function Vd(){return{editor:On,createEditor(n){const e=new gc(n);On=new Rl(e),new FS(e,On).addEventListener("rotate_clicked",()=>On.rotateItem()),e.animate()},addObject(n){On.addItem(n)},rotateObject(){On.rotateItem()},deleteCell(){On.deleteCell()},setLayer(n){On.setLayer(n)},loadDefault(){On.model.loadDefault()}}}function NS(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;qm()?Es(n):e?n():Jl(n)}var zS=0;function Hi(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Bn(!1),i=Bn(n),r=Bn(null),s=lt.isClient()?window.document:void 0,o=e.document,a=o===void 0?s:o,l=e.immediate,c=l===void 0?!0:l,u=e.manual,h=u===void 0?!1:u,f=e.name,d=f===void 0?"style_".concat(++zS):f,g=e.id,m=g===void 0?void 0:g,p=e.media,v=p===void 0?void 0:p,x=e.nonce,C=x===void 0?void 0:x,E=function(){},S=function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var z=L.name||d,B=L.id||m,xe=L.nonce||C;r.value=a.querySelector('style[data-primevue-style-id="'.concat(z,'"]'))||a.getElementById(B)||a.createElement("style"),r.value.isConnected||(i.value=b||n,lt.setAttributes(r.value,{type:"text/css",id:B,media:v,nonce:xe}),a.head.appendChild(r.value),lt.setAttribute(r.value,"data-primevue-style-id",d),lt.setAttributes(r.value,L)),!t.value&&(E=Zr(i,function(ce){r.value.textContent=ce},{immediate:!0}),t.value=!0)}},R=function(){!a||!t.value||(E(),lt.isExist(r.value)&&a.head.removeChild(r.value),t.value=!1)};return c&&!h&&NS(S),{id:m,name:d,css:i,unload:R,load:S,isLoaded:ql(t)}}var BS=`
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
`,US=Hi(BS,{name:"base",manual:!0}),kd=US.load;function xs(n){"@babel/helpers - typeof";return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xs(n)}function Xh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function et(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xh(Object(t),!0).forEach(function(i){Dl(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Dl(n,e,t){return e=VS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function VS(n){var e=kS(n,"string");return xs(e)==="symbol"?e:String(e)}function kS(n,e){if(xs(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(xs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var HS={},GS=`
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
`),XS=Hi(qS,{name:"common",manual:!0}),YS=XS.load,ZS=Hi("",{name:"global",manual:!0}),KS=ZS.load,ea={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var t,i;YS(void 0,{nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}),this.$options.css&&this.$css.loadStyle(void 0,{nonce:(i=this.$config)===null||i===void 0||(i=i.csp)===null||i===void 0?void 0:i.nonce})}}}},beforeCreate:function(){var e,t,i,r,s,o,a,l,c,u,h,f=(e=this.pt)===null||e===void 0?void 0:e._usept,d=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=g||d)===null||r===void 0||(r=r.hooks)===null||r===void 0||(s=r.onBeforeCreate)===null||s===void 0||s.call(r);var m=(o=this.$config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,p=m?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,v=m?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=v||p)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(h=u.onBeforeCreate)===null||h===void 0||h.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;kd(void 0,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),i==null||i()}},_loadGlobalStyles:function(){var e,t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ue.isNotEmpty(t)&&KS(t,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ue.toFlatCase(t).split("."),s=r.shift();return s?Ue.isObject(e)?this._getOptionValue(Ue.getItemValue(e[Object.keys(e).find(function(o){return Ue.toFlatCase(o)===s})||""],i),r.join("."),i):void 0:Ue.getItemValue(e,i)},_getPTValue:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s="data-pc-",o=/./g.test(t)&&!!i[t.split(".")[0]],a=this._getPropValue("ptOptions")||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,h=u===void 0?!1:u,f=r?o?this._useGlobalPT(this._getPTClassValue,t,i):this._useDefaultPT(this._getPTClassValue,t,i):void 0,d=o?void 0:this._usePT(this._getPT(e,this.$name),this._getPTClassValue,t,et(et({},i),{},{global:f||{}})),g=t!=="transition"&&et(et({},t==="root"&&Dl({},"".concat(s,"name"),Ue.toFlatCase(this.$.type.name))),{},Dl({},"".concat(s,"section"),Ue.toFlatCase(t)));return c||!c&&d?h?Ze(f,d,g):et(et(et({},f),d),g):et(et({},d),g)},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Ue.isString(e)||Ue.isArray(e)?{class:e}:e},_getPT:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=e==null?void 0:e._usept,o=function(l){var c,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=r?r(l):l,f=Ue.toFlatCase(i),d=Ue.toFlatCase(t.$name);return(c=u?f!==d?h==null?void 0:h[f]:void 0:h==null?void 0:h[f])!==null&&c!==void 0?c:h};return Ue.isNotEmpty(s)?{_usept:s,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,t,i,r){var s=function(g){return t(g,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var o=e._usept||{},a=o.mergeSections,l=a===void 0?!0:a,c=o.mergeProps,u=c===void 0?!1:c,h=s(e.originalValue),f=s(e.value);return h===void 0&&f===void 0?void 0:Ue.isString(f)?f:Ue.isString(h)?h:l||!l&&f?u?Ze(h,f):et(et({},h),f):f}return s(e)},_useGlobalPT:function(e,t,i){return this._usePT(this.globalPT,e,t,i)},_useDefaultPT:function(e,t,i){return this._usePT(this.defaultPT,e,t,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,et(et({},this.$params),t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,et({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$css.classes,e,et(et({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var r=this._getOptionValue(this.$css.inlineStyles,e,et(et({},this.$params),i)),s=this._getOptionValue(HS,e,et(et({},this.$params),i));return[s,r]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return Ue.getItemValue(i,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(i){return t._getOptionValue(i,t.$name,et({},t.$params))||Ue.getItemValue(i,et({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){return{instance:this,props:this.$props,state:this.$data,parentInstance:this.$parentInstance}},$css:function(){return et(et({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$css),this.$options.css)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name}}},JS=`
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
`,QS={root:function(e){var t=e.props,i=e.instance;return["p-badge p-component",{"p-badge-no-gutter":Ue.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":Ue.isEmpty(t.value)&&!i.$slots.default,"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warning":t.severity==="warning","p-badge-danger":t.severity==="danger"}]}},ew=Hi(JS,{name:"badge",manual:!0}),tw=ew.load,nw={name:"BaseBadge",extends:ea,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},css:{classes:QS,loadStyle:tw},provide:function(){return{$parentInstance:this}}},Hd={name:"Badge",extends:nw};function iw(n,e,t,i,r,s){return Ke(),Rt("span",Ze({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"badge"}),[zn(n.$slots,"default",{},function(){return[Go(lf(n.value),1)]})],16)}Hd.render=iw;var rw=`
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
`,sw=Hi(rw,{name:"baseicon",manual:!0}),ow=sw.load,xc={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},beforeMount:function(){var e;ow(void 0,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},methods:{pti:function(){var e=Ue.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e}}},computed:{$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config}}},Gd={name:"SpinnerIcon",extends:xc,computed:{pathId:function(){return"pv_icon_clip_".concat($0())}}},aw=["clipPath"],lw=ut("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),cw=[lw],uw=["id"],hw=ut("rect",{width:"14",height:"14",fill:"white"},null,-1),fw=[hw];function dw(n,e,t,i,r,s){return Ke(),Rt("svg",Ze({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),[ut("g",{clipPath:"url(#".concat(s.pathId,")")},cw,8,aw),ut("defs",null,[ut("clipPath",{id:"".concat(s.pathId)},fw,8,uw)])],16)}Gd.render=dw;function ys(n){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ys(n)}function Yh(n,e){return vw(n)||gw(n,e)||mw(n,e)||pw()}function pw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mw(n,e){if(n){if(typeof n=="string")return Zh(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zh(n,e)}}function Zh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function gw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function vw(n){if(Array.isArray(n))return n}function Kh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function nt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kh(Object(t),!0).forEach(function(i){Il(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Kh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Il(n,e,t){return e=_w(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _w(n){var e=xw(n,"string");return ys(e)==="symbol"?e:String(e)}function xw(n,e){if(ys(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(ys(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Je={_getMeta:function(){return[Ue.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Ue.getItemValue(Ue.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ue.toFlatCase(t).split("."),s=r.shift();return s?Ue.isObject(e)?Je._getOptionValue(Ue.getItemValue(e[Object.keys(e).find(function(o){return Ue.toFlatCase(o)===s})||""],i),r.join("."),i):void 0:Ue.getItemValue(e,i)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var x=Je._getOptionValue.apply(Je,arguments);return Ue.isString(x)||Ue.isArray(x)?{class:x}:x},l="data-pc-",c=((e=t.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||{},u=c.mergeSections,h=u===void 0?!0:u,f=c.mergeProps,d=f===void 0?!1:f,g=o?Je._useDefaultPT(t,t.defaultPT,a,r,s):void 0,m=Je._usePT(t,Je._getPT(i,t.$name),a,r,nt(nt({},s),{},{global:g||{}})),p=nt(nt({},r==="root"&&Il({},"".concat(l,"name"),Ue.toFlatCase(t.$name))),{},Il({},"".concat(l,"section"),Ue.toFlatCase(r)));return h||!h&&m?d?Ze(g,m,p):nt(nt(nt({},g),m),p):nt(nt({},m),p)},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=e==null?void 0:e._usept,s=function(a){var l,c=i?i(a):a,u=Ue.toFlatCase(t);return(l=c==null?void 0:c[u])!==null&&l!==void 0?l:c};return Ue.isNotEmpty(r)?{_usept:r,originalValue:s(e.originalValue),value:s(e.value)}:s(e)},_usePT:function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,s=function(g){return t(g,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var o=e._usept||{},a=o.mergeSections,l=a===void 0?!0:a,c=o.mergeProps,u=c===void 0?!1:c,h=s(e.originalValue),f=s(e.value);return h===void 0&&f===void 0?void 0:Ue.isString(f)?f:Ue.isString(h)?h:l||!l&&f?u?Ze(h,f):nt(nt({},h),f):f}return s(e)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return Je._usePT(e,t,i,r,s)},_hook:function(e,t,i,r,s,o){var a,l,c,u="on".concat(Ue.toCapitalCase(t)),h=r==null||(a=r.instance)===null||a===void 0||(a=a.$primevue)===null||a===void 0?void 0:a.config,f=i==null?void 0:i.$instance,d=Je._usePT(f,Je._getPT(r==null||(l=r.value)===null||l===void 0?void 0:l.pt,e),Je._getOptionValue,"hooks.".concat(u)),g=Je._useDefaultPT(f,h==null||(c=h.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[e],Je._getOptionValue,"hooks.".concat(u)),m={el:i,binding:r,vnode:s,prevVnode:o};d==null||d(f,m),g==null||g(f,m)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=function(s,o,a,l,c){var u,h,f;o._$instances=o._$instances||{};var d=a==null||(u=a.instance)===null||u===void 0||(u=u.$primevue)===null||u===void 0?void 0:u.config,g=o._$instances[e]||{},m=Ue.isEmpty(g)?nt(nt({},t),t==null?void 0:t.methods):{};o._$instances[e]=nt(nt({},g),{},{$name:e,$host:o,$binding:a,$el:g.$el||void 0,$css:nt({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},t==null?void 0:t.css),$config:d,defaultPT:Je._getPT(d==null?void 0:d.pt,void 0,function(p){var v;return p==null||(v=p.directives)===null||v===void 0?void 0:v[e]}),isUnstyled:o.unstyled!==void 0?o.unstyled:d==null?void 0:d.unstyled,ptm:function(){var v,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Je._getPTValue(o.$instance,(v=o.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,x,nt({},C))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Je._getPTValue(o.$instance,v,x,C,!1)},cx:function(){var v,x,C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=o.$instance)!==null&&v!==void 0&&v.isUnstyled?void 0:Je._getOptionValue((x=o.$instance)===null||x===void 0||(x=x.$css)===null||x===void 0?void 0:x.classes,C,nt({},E))},sx:function(){var v,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C?Je._getOptionValue((v=o.$instance)===null||v===void 0||(v=v.$css)===null||v===void 0?void 0:v.inlineStyles,x,nt({},E)):void 0}},m),o.$instance=o._$instances[e],(h=(f=o.$instance)[s])===null||h===void 0||h.call(f,o,a,l,c),Je._hook(e,s,o,a,l,c)};return{created:function(s,o,a,l){i("created",s,o,a,l)},beforeMount:function(s,o,a,l){var c,u,h,f,d,g=o==null||(c=o.instance)===null||c===void 0||(c=c.$primevue)===null||c===void 0?void 0:c.config;kd(void 0,{nonce:g==null||(u=g.csp)===null||u===void 0?void 0:u.nonce}),!((h=s.$instance)!==null&&h!==void 0&&h.isUnstyled)&&((f=s.$instance)===null||f===void 0||(f=f.$css)===null||f===void 0||f.loadStyle(void 0,{nonce:g==null||(d=g.csp)===null||d===void 0?void 0:d.nonce})),i("beforeMount",s,o,a,l)},mounted:function(s,o,a,l){i("mounted",s,o,a,l)},beforeUpdate:function(s,o,a,l){i("beforeUpdate",s,o,a,l)},updated:function(s,o,a,l){i("updated",s,o,a,l)},beforeUnmount:function(s,o,a,l){i("beforeUnmount",s,o,a,l)},unmounted:function(s,o,a,l){i("unmounted",s,o,a,l)}}},extend:function(){var e=Je._getMeta.apply(Je,arguments),t=Yh(e,2),i=t[0],r=t[1];return nt({extend:function(){var o=Je._getMeta.apply(Je,arguments),a=Yh(o,2),l=a[0],c=a[1];return Je.extend(l,nt(nt(nt({},r),r==null?void 0:r.methods),c))}},Je._extend(i,r))}},yw=`
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
`,bw={root:"p-ink"},Mw=Hi(yw,{name:"ripple",manual:!0}),Sw=Mw.load,ww=Je.extend({css:{classes:bw,loadStyle:Sw}});function Ew(n){return Pw(n)||Cw(n)||Aw(n)||Tw()}function Tw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aw(n,e){if(n){if(typeof n=="string")return Ol(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ol(n,e)}}function Cw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Pw(n){if(Array.isArray(n))return Ol(n)}function Ol(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var Lw=ww.extend("ripple",{mounted:function(e,t){var i=t.instance.$primevue;if(i&&i.config&&i.config.ripple){var r;e.unstyled=i.config.unstyled||((r=t.value)===null||r===void 0?void 0:r.unstyled)||!1,this.create(e),this.bindEvents(e)}e.setAttribute("data-pd-ripple",!0)},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(e){var t=lt.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!e.unstyled&&this.cx("root"),onAnimationEnd:this.onAnimationEnd,"p-bind":this.ptm("root")});e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=e.currentTarget,i=this.getInk(t);if(!(!i||getComputedStyle(i,null).display==="none")){if(!t.unstyled&&lt.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!lt.getHeight(i)&&!lt.getWidth(i)){var r=Math.max(lt.getOuterWidth(t),lt.getOuterHeight(t));i.style.height=r+"px",i.style.width=r+"px"}var s=lt.getOffset(t),o=e.pageX-s.left+document.body.scrollTop-lt.getWidth(i)/2,a=e.pageY-s.top+document.body.scrollLeft-lt.getHeight(i)/2;i.style.top=a+"px",i.style.left=o+"px",!t.unstyled&&lt.addClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.unstyled&&lt.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!e.currentTarget.unstyled&&lt.removeClass(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Ew(e.children).find(function(t){return lt.getAttribute(t,"data-pc-name")==="ripple"}):void 0}}});function bs(n){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bs(n)}function ei(n,e,t){return e=Rw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Rw(n){var e=Dw(n,"string");return bs(e)==="symbol"?e:String(e)}function Dw(n,e){if(bs(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(bs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Iw={root:function(e){var t,i=e.instance,r=e.props;return["p-button p-component",(t={"p-button-icon-only":i.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-disabled":i.$attrs.disabled||i.$attrs.disabled===""||r.loading,"p-button-loading":r.loading,"p-button-loading-label-only":r.loading&&!i.hasIcon&&r.label,"p-button-link":r.link},ei(t,"p-button-".concat(r.severity),r.severity),ei(t,"p-button-raised",r.raised),ei(t,"p-button-rounded",r.rounded),ei(t,"p-button-text",r.text),ei(t,"p-button-outlined",r.outlined),ei(t,"p-button-sm",r.size==="small"),ei(t,"p-button-lg",r.size==="large"),ei(t,"p-button-plain",r.plain),t)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(e){var t=e.props;return["p-button-icon",{"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label,"p-button-icon-top":t.iconPos==="top"&&t.label,"p-button-icon-bottom":t.iconPos==="bottom"&&t.label}]},label:"p-button-label"},Ow={name:"BaseButton",extends:ea,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},css:{classes:Iw},provide:function(){return{$parentInstance:this}}},Wd={name:"Button",extends:Ow,methods:{getPTOptions:function(e){var t,i;return this.ptm(e,{parent:{props:(t=this.$parent)===null||t===void 0?void 0:t.$props,state:(i=this.$parent)===null||i===void 0?void 0:i.$data},context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:Gd,Badge:Hd},directives:{ripple:Lw}},Fw=["aria-label","disabled","data-pc-severity"];function Nw(n,e,t,i,r,s){var o=Ni("SpinnerIcon"),a=Ni("Badge"),l=Mm("ripple");return um((Ke(),Rt("button",Ze({class:n.cx("root"),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},s.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":n.severity}),[zn(n.$slots,"default",{},function(){return[n.loading?zn(n.$slots,"loadingicon",{key:0,class:as([n.cx("loadingIcon"),n.cx("icon")])},function(){return[n.loadingIcon?(Ke(),Rt("span",Ze({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Ke(),Wt(o,Ze({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):zn(n.$slots,"icon",{key:1,class:as([n.cx("icon")])},function(){return[n.icon?(Ke(),Rt("span",Ze({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):es("",!0)]}),ut("span",Ze({class:n.cx("label")},n.ptm("label")),lf(n.label||" "),17),n.badge?(Ke(),Wt(a,Ze({key:2,value:n.badge,class:n.badgeClass,unstyled:n.unstyled},n.ptm("badge")),null,16,["value","class","unstyled"])):es("",!0)]})],16,Fw)),[[l]])}Wd.render=Nw;var $d={name:"AngleDownIcon",extends:xc},zw=ut("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1),Bw=[zw];function Uw(n,e,t,i,r,s){return Ke(),Rt("svg",Ze({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),Bw,16)}$d.render=Uw;var jd={name:"AngleUpIcon",extends:xc},Vw=ut("path",{d:"M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",fill:"currentColor"},null,-1),kw=[Vw];function Hw(n,e,t,i,r,s){return Ke(),Rt("svg",Ze({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),kw,16)}jd.render=Hw;var Gw={root:function(e){var t=e.instance,i=e.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large"}]}},Ww={name:"BaseInputText",extends:ea,props:{modelValue:null,size:{type:String,default:null}},css:{classes:Gw},provide:function(){return{$parentInstance:this}}},qd={name:"InputText",extends:Ww,emits:["update:modelValue"],methods:{onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},$w=["value"];function jw(n,e,t,i,r,s){return Ke(),Rt("input",Ze({class:n.cx("root"),value:n.modelValue,onInput:e[0]||(e[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},n.ptm("root",s.ptmParams),{"data-pc-name":"inputtext"}),null,16,$w)}qd.render=jw;var qw=`
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
`,Xw={root:function(e){var t=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused,"p-inputnumber-buttons-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":i.showButtons&&i.buttonLayout==="vertical"}]},input:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-up",{"p-disabled":i.showButtons&&i.max!==null&&t.maxBoundry()}]},decrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-down",{"p-disabled":i.showButtons&&i.min!==null&&t.minBoundry()}]}},Yw=Hi(qw,{name:"inputnumber",manual:!0}),Zw=Yw.load,Kw={name:"BaseInputNumber",extends:ea,props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},incrementButtonProps:{type:null,default:null},decrementButtonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:Xw,loadStyle:Zw},provide:function(){return{$parentInstance:this}}};function Ms(n){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ms(n)}function Jh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Qh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Jh(Object(t),!0).forEach(function(i){Jw(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Jh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Jw(n,e,t){return e=Qw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Qw(n){var e=e1(n,"string");return Ms(e)==="symbol"?e:String(e)}function e1(n,e){if(Ms(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(Ms(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function t1(n){return s1(n)||r1(n)||i1(n)||n1()}function n1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i1(n,e){if(n){if(typeof n=="string")return Fl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fl(n,e)}}function r1(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function s1(n){if(Array.isArray(n))return Fl(n)}function Fl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var Xd={name:"InputNumber",extends:Kw,emits:["update:modelValue","input","focus","blur"],numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue:function(e){this.d_modelValue=e},locale:function(e,t){this.updateConstructParser(e,t)},localeMatcher:function(e,t){this.updateConstructParser(e,t)},mode:function(e,t){this.updateConstructParser(e,t)},currency:function(e,t){this.updateConstructParser(e,t)},currencyDisplay:function(e,t){this.updateConstructParser(e,t)},useGrouping:function(e,t){this.updateConstructParser(e,t)},minFractionDigits:function(e,t){this.updateConstructParser(e,t)},maxFractionDigits:function(e,t){this.updateConstructParser(e,t)},suffix:function(e,t){this.updateConstructParser(e,t)},prefix:function(e,t){this.updateConstructParser(e,t)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=t1(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),t=new Map(e.map(function(i,r){return[i,r]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return t.get(i)}},updateConstructParser:function(e,t){e!==t&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,Qh(Qh({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var t=new Intl.NumberFormat(this.locale,this.getOptions()),i=t.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;var i=+t;return isNaN(i)?null:i}return null},repeat:function(e,t,i){var r=this;if(!this.readonly){var s=t||500;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,40,i)},s),this.spin(e,i)}},spin:function(e,t){if(this.$refs.input){var i=this.step*t,r=this.parseValue(this.$refs.input.$el.value)||0,s=this.validateValue(r+i);this.updateInput(s,null,"spin"),this.updateModel(e,s),this.handleOnInput(e,r,s)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}var t=e.target.selectionStart,i=e.target.selectionEnd,r=e.target.value,s=null;switch(e.altKey&&e.preventDefault(),e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(r.charAt(t-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(r.charAt(t))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":s=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(s),this.$refs.input.$el.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),t===i){var o=r.charAt(t-1),a=this.getDecimalCharIndexes(r),l=a.decimalCharIndex,c=a.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(o)){var u=this.getDecimalLength(r);if(this._group.test(o))this._group.lastIndex=0,s=r.slice(0,t-2)+r.slice(t-1);else if(this._decimal.test(o))this._decimal.lastIndex=0,u?this.$refs.input.$el.setSelectionRange(t-1,t-1):s=r.slice(0,t-1)+r.slice(t);else if(l>0&&t>l){var h=this.isDecimalMode()&&(this.minFractionDigits||0)<u?"":"0";s=r.slice(0,t-1)+h+r.slice(t)}else c===1?(s=r.slice(0,t-1)+"0"+r.slice(t),s=this.parseValue(s)>0?s:""):s=r.slice(0,t-1)+r.slice(t)}this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(r,t,i),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===i){var f=r.charAt(t),d=this.getDecimalCharIndexes(r),g=d.decimalCharIndex,m=d.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(f)){var p=this.getDecimalLength(r);if(this._group.test(f))this._group.lastIndex=0,s=r.slice(0,t)+r.slice(t+2);else if(this._decimal.test(f))this._decimal.lastIndex=0,p?this.$refs.input.$el.setSelectionRange(t+1,t+1):s=r.slice(0,t)+r.slice(t+1);else if(g>0&&t>g){var v=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";s=r.slice(0,t)+v+r.slice(t+1)}else m===1?(s=r.slice(0,t)+"0"+r.slice(t+1),s=this.parseValue(s)>0?s:""):s=r.slice(0,t)+r.slice(t+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(r,t,i),this.updateValue(e,s,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break}}},onInputKeyPress:function(e){if(!this.readonly){e.preventDefault();var t=e.which||e.keyCode,i=String.fromCharCode(t),r=this.isDecimalSign(i),s=this.isMinusSign(i);(48<=t&&t<=57||s||r)&&this.insert(e,i,{isDecimalSign:r,isMinusSign:s})}},onPaste:function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("Text");if(t){var i=this.parseValue(t);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),r=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:r}},getCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var r=e.search(this._suffix);this._suffix.lastIndex=0;var s=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:i,suffixCharIndex:r,currencyCharIndex:s}},insert:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},r=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&r!==-1)){var s=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),l=this.getCharIndexes(a),c=l.decimalCharIndex,u=l.minusCharIndex,h=l.suffixCharIndex,f=l.currencyCharIndex,d;if(i.isMinusSign)s===0&&(d=a,(u===-1||o!==0)&&(d=this.insertText(a,t,0,o)),this.updateValue(e,d,t,"insert"));else if(i.isDecimalSign)c>0&&s===c?this.updateValue(e,a,t,"insert"):c>s&&c<o?(d=this.insertText(a,t,s,o),this.updateValue(e,d,t,"insert")):c===-1&&this.maxFractionDigits&&(d=this.insertText(a,t,s,o),this.updateValue(e,d,t,"insert"));else{var g=this.numberFormat.resolvedOptions().maximumFractionDigits,m=s!==o?"range-insert":"insert";if(c>0&&s>c){if(s+t.length-(c+1)<=g){var p=f>=s?f-1:h>=s?h:a.length;d=a.slice(0,s)+t+a.slice(s+t.length,p)+a.slice(p),this.updateValue(e,d,t,m)}}else d=this.insertText(a,t,s,o),this.updateValue(e,d,t,m)}}},insertText:function(e,t,i,r){var s=t==="."?t:t.split(".");if(s.length===2){var o=e.slice(i,r).search(this._decimal);return this._decimal.lastIndex=0,o>0?e.slice(0,i)+this.formatValue(t)+e.slice(r):e||this.formatValue(t)}else return r-i===e.length?this.formatValue(t):i===0?t+e.slice(r):r===e.length?e.slice(0,i)+t:e.slice(0,i)+t+e.slice(r)},deleteRange:function(e,t,i){var r;return i-t===e.length?r="":t===0?r=e.slice(i):i===e.length?r=e.slice(0,t):r=e.slice(0,t)+e.slice(i),r},initCursor:function(){var e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,i=t.length,r=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-s;var o=t.charAt(e);if(this.isNumeralChar(o))return e+s;for(var a=e-1;a>=0;)if(o=t.charAt(a),this.isNumeralChar(o)){r=a+s;break}else a--;if(r!==null)this.$refs.input.$el.setSelectionRange(r+1,r+1);else{for(a=e;a<i;)if(o=t.charAt(a),this.isNumeralChar(o)){r=a+s;break}else a++;r!==null&&this.$refs.input.$el.setSelectionRange(r,r)}return r||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==lt.getSelection()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,t,i,r){var s=this.$refs.input.$el.value,o=null;t!=null&&(o=this.parseValue(t),o=!o&&!this.allowEmpty?0:o,this.updateInput(o,i,r,t),this.handleOnInput(e,s,o))},handleOnInput:function(e,t,i){this.isValueChanged(t,i)&&this.$emit("input",{originalEvent:e,value:i,formattedValue:t})},isValueChanged:function(e,t){if(t===null&&e!==null)return!0;if(t!=null){var i=typeof e=="string"?this.parseValue(e):e;return t!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,t,i,r){t=t||"";var s=this.$refs.input.$el.value,o=this.formatValue(e),a=s.length;if(o!==r&&(o=this.concatValues(o,r)),a===0){this.$refs.input.$el.value=o,this.$refs.input.$el.setSelectionRange(0,0);var l=this.initCursor(),c=l+t.length;this.$refs.input.$el.setSelectionRange(c,c)}else{var u=this.$refs.input.$el.selectionStart,h=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=o;var f=o.length;if(i==="range-insert"){var d=this.parseValue((s||"").slice(0,u)),g=d!==null?d.toString():"",m=g.split("").join("(".concat(this.groupChar,")?")),p=new RegExp(m,"g");p.test(o);var v=t.split("").join("(".concat(this.groupChar,")?")),x=new RegExp(v,"g");x.test(o.slice(p.lastIndex)),h=p.lastIndex+x.lastIndex,this.$refs.input.$el.setSelectionRange(h,h)}else if(f===a)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(h+1,h+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(h-1,h-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(h,h);else if(i==="delete-back-single"){var C=s.charAt(h-1),E=s.charAt(h),S=a-f,R=this._group.test(E);R&&S===1?h+=1:!R&&this.isNumeralChar(C)&&(h+=-1*S+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(h,h)}else if(s==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var F=this.initCursor(),b=F+t.length+1;this.$refs.input.$el.setSelectionRange(b,b)}else h=h+(f-a),this.$refs.input.$el.setSelectionRange(h,h)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,t){if(e&&t){var i=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+t.slice(i):e}return e},getDecimalLength:function(e){if(e){var t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==lt.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){this.focused=!1;var t=e.target,i=this.validateValue(this.parseValue(t.value));this.$emit("blur",{originalEvent:e,value:t.value}),t.value=this.formatValue(i),t.setAttribute("aria-valuenow",i),this.updateModel(e,i)},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_modelValue>=this.max},minBoundry:function(){return this.d_modelValue<=this.min}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{INInputText:qd,INButton:Wd,AngleUpIcon:jd,AngleDownIcon:$d}};function Ss(n){"@babel/helpers - typeof";return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ss(n)}function ef(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function _n(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ef(Object(t),!0).forEach(function(i){o1(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ef(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function o1(n,e,t){return e=a1(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a1(n){var e=l1(n,"string");return Ss(e)==="symbol"?e:String(e)}function l1(n,e){if(Ss(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(Ss(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function c1(n,e,t,i,r,s){var o=Ni("INInputText"),a=Ni("INButton");return Ke(),Rt("span",Ze({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"inputnumber"}),[st(o,Ze({ref:"input",id:n.inputId,role:"spinbutton",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:s.formattedValue,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,onInput:s.onUserInput,onKeydown:s.onInputKeyDown,onKeypress:s.onInputKeyPress,onPaste:s.onPaste,onClick:s.onInputClick,onFocus:s.onInputFocus,onBlur:s.onInputBlur},_n(_n({},n.inputProps),n.ptm("input")),{unstyled:n.unstyled,"data-pc-section":"input"}),null,16,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","disabled","readonly","placeholder","aria-labelledby","aria-label","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","unstyled"]),n.showButtons&&n.buttonLayout==="stacked"?(Ke(),Rt("span",Ze({key:0,class:n.cx("buttonGroup")},n.ptm("buttonGroup")),[st(a,Ze({class:[n.cx("incrementButton"),n.incrementButtonClass]},Bs(s.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.incrementButtonProps),n.ptm("incrementButton")),{unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:si(function(){return[zn(n.$slots,"incrementbuttonicon",{},function(){return[(Ke(),Wt(zs(n.incrementButtonIcon?"span":"AngleUpIcon"),Ze({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"]),st(a,Ze({class:[n.cx("decrementButton"),n.decrementButtonClass]},Bs(s.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.decrementButtonProps),n.ptm("decrementButton")),{unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:si(function(){return[zn(n.$slots,"decrementbuttonicon",{},function(){return[(Ke(),Wt(zs(n.decrementButtonIcon?"span":"AngleDownIcon"),Ze({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])],16)):es("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(Ke(),Wt(a,Ze({key:1,class:[n.cx("incrementButton"),n.incrementButtonClass]},Bs(s.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.incrementButtonProps),n.ptm("incrementButton")),{unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:si(function(){return[zn(n.$slots,"incrementbuttonicon",{},function(){return[(Ke(),Wt(zs(n.incrementButtonIcon?"span":"AngleUpIcon"),Ze({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):es("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(Ke(),Wt(a,Ze({key:2,class:[n.cx("decrementButton"),n.decrementButtonClass]},Bs(s.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},_n(_n({},n.decrementButtonProps),n.ptm("decrementButton")),{unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:si(function(){return[zn(n.$slots,"decrementbuttonicon",{},function(){return[(Ke(),Wt(zs(n.decrementButtonIcon?"span":"AngleDownIcon"),Ze({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):es("",!0)],16)}Xd.render=c1;const u1=n=>(tm("data-v-b6b559c4"),n=n(),nm(),n),h1={class:"wrapper"},f1={class:"objects"},d1=u1(()=>ut("div",{class:"object"},"void",-1)),p1={class:"object"},m1=["src","data-src"],g1=Fr({__name:"EditorMenu",setup(n){const e=Bn([]),{addObject:t,rotateObject:i,deleteCell:r,setLayer:s,loadDefault:o}=Vd(),a=Bn(0);Es(async()=>{const h=["void",...hr];for(let f=0;f<h.length;++f){const d=h[f],g=await CS.render(d);g&&e.value.push({data:g,src:d})}});function l(h){const d=h.target.getAttribute("data-src");t(d)}function c(){i()}function u(){r()}return(h,f)=>{const d=Ni("router-link");return Ke(),Rt("div",h1,[ut("div",f1,[d1,(Ke(!0),Rt(kt,null,Sm(e.value,g=>(Ke(),Rt("div",p1,[ut("img",{src:g.data,class:"object-image","data-src":g.src,onClick:l},null,8,m1)]))),256))]),ut("button",{class:"btn",onClick:c,style:{display:"none"}},"Rotate"),ut("button",{class:"btn",onClick:u},"Delete"),ut("button",{class:"btn",onClick:f[0]||(f[0]=(...g)=>Sn(o)&&Sn(o)(...g))},"Load Default"),st(Sn(Xd),{modelValue:a.value,"onUpdate:modelValue":f[1]||(f[1]=g=>a.value=g),inputId:"minmax-buttons",mode:"decimal",showButtons:"",min:-40,max:40,onInput:f[2]||(f[2]=g=>Sn(s)(parseInt(String(g.value))))},null,8,["modelValue"]),st(d,{to:"generate",class:"btn"},{default:si(()=>[Go("Generate")]),_:1})])}}});const v1=jo(g1,[["__scopeId","data-v-b6b559c4"]]),_1={class:"layout"},x1=Fr({__name:"EditorLayout",setup(n){return(e,t)=>(Ke(),Rt("div",_1,[ut("aside",null,[st(v1)]),ut("main",null,[zn(e.$slots,"default",{},void 0,!0)])]))}});const y1=jo(x1,[["__scopeId","data-v-736f7da2"]]),tf=Fr({__name:"Editor",setup(n){const{createEditor:e}=Vd(),t=Bn();return Es(()=>e(t.value)),(i,r)=>(Ke(),Wt(y1,null,{default:si(()=>[ut("div",{class:"canvas",ref_key:"canvas",ref:t},null,512)]),_:1}))}});const b1=[{path:"/",component:tf},{path:"/editor",component:tf},{path:"/generate",component:TS}],M1=P0({history:$g(),routes:b1}),S1=Tg(),ta=Mg(ev);ta.use(M1);ta.use(S1);ta.use(K0);ta.mount("#app");