"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{4928:(e,t,n)=>{n.d(t,{Kq:()=>a,Xr:()=>w,fp:()=>v,md:()=>h});var r=n(2115),l=n(1416);let o=(0,r.createContext)(void 0),i=e=>{let t=(0,r.useContext)(o);return(null==e?void 0:e.store)||t||(0,l.zp)()},a=e=>{let{children:t,store:n}=e,i=(0,r.useRef)();return n||i.current||(i.current=(0,l.y$)()),(0,r.createElement)(o.Provider,{value:n||i.current},t)},u=e=>"function"==typeof(null==e?void 0:e.then),s=e=>{e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})},f=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw s(e),e}),d=new WeakMap,c=e=>{let t=d.get(e);return t||(t=new Promise((n,r)=>{let l=e,o=e=>t=>{l===e&&n(t)},i=e=>t=>{l===e&&r(t)},a=e=>{"onCancel"in e&&"function"==typeof e.onCancel&&e.onCancel(r=>{if(r===e)throw Error("[Bug] p is not updated even after cancelation");u(r)?(d.set(r,t),l=r,r.then(o(r),i(r)),a(r)):n(r)})};e.then(o(e),i(e)),a(e)}),d.set(e,t)),t};function h(e,t){let n=i(t),[[l,o,a],d]=(0,r.useReducer)(t=>{let r=n.get(e);return Object.is(t[0],r)&&t[1]===n&&t[2]===e?t:[r,n,e]},void 0,()=>[n.get(e),n,e]),h=l;(o!==n||a!==e)&&(d(),h=n.get(e));let w=null==t?void 0:t.delay;return((0,r.useEffect)(()=>{let t=n.sub(e,()=>{if("number"==typeof w){let t=n.get(e);u(t)&&s(c(t)),setTimeout(d,w);return}d()});return d(),t},[n,e,w]),(0,r.useDebugValue)(h),u(h))?f(c(h)):h}function w(e,t){let n=i(t);return(0,r.useCallback)(function(){for(var t=arguments.length,r=Array(t),l=0;l<t;l++)r[l]=arguments[l];if(!("write"in e))throw Error("not writable atom");return n.set(e,...r)},[n,e])}function v(e,t){return[h(e,t),w(e,t)]}},1416:(e,t,n)=>{let r;n.d(t,{eU:()=>o,y$:()=>C,zp:()=>O});let l=0;function o(e,t){let n=`atom${++l}`,r={toString(){return this.debugLabel?n+":"+this.debugLabel:n}};return"function"==typeof e?r.read=e:(r.init=e,r.read=i,r.write=a),t&&(r.write=t),r}function i(e){return e(this)}function a(e,t,n){return t(this,"function"==typeof n?n(e(this)):n)}let u=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,s=e=>"init"in e,f=e=>!!e.write,d=new WeakMap,c=e=>{var t;return v(e)&&!(null==(t=d.get(e))?void 0:t[1])},h=(e,t)=>{let n=d.get(e);if(n)n[1]=!0,n[0].forEach(e=>e(t));else throw Error("[Bug] cancelable promise not found")},w=e=>{if(d.has(e))return;let t=[new Set,!1];d.set(e,t);let n=()=>{t[1]=!0};e.then(n,n),e.onCancel=e=>{t[0].add(e)}},v=e=>"function"==typeof(null==e?void 0:e.then),m=e=>"v"in e||"e"in e,p=e=>{if("e"in e)throw e.e;if(!("v"in e))throw Error("[Bug] atom state is not initialized");return e.v},g=(e,t,n)=>{n.p.has(e)||(n.p.add(e),t.then(()=>{n.p.delete(e)},()=>{n.p.delete(e)}))},y=(e,t,n,r,l)=>{var o;if(r===t)throw Error("[Bug] atom cannot depend on itself");n.d.set(r,l.n),c(n.v)&&g(t,n.v,l),null==(o=l.m)||o.t.add(t),e&&E(e,r,t)},_=()=>[new Map,new Map,new Set],b=(e,t,n)=>{e[0].has(t)||e[0].set(t,new Set),e[1].set(t,n)},E=(e,t,n)=>{let r=e[0].get(t);r&&r.add(n)},S=(e,t)=>e[0].get(t),k=(e,t)=>{e[2].add(t)},T=e=>{let t;let n=!1,r=e=>{try{e()}catch(e){n||(t=e,n=!0)}};for(;e[1].size||e[2].size;){e[0].clear();let t=new Set(e[1].values());e[1].clear();let n=new Set(e[2]);e[2].clear(),t.forEach(e=>{var t;return null==(t=e.m)?void 0:t.l.forEach(r)}),n.forEach(r)}if(n)throw t},A=(...[e,t,n,r])=>{let l;l=new Set;let o=(t,n,r)=>{let l="v"in n,o=n.v,i=c(n.v)?n.v:null;if(v(r)){for(let l of(w(r),n.d.keys()))g(t,r,e(l));n.v=r,delete n.e}else n.v=r,delete n.e;l&&Object.is(o,n.v)||(++n.n,i&&h(i,r))},i=(n,r,l)=>{var a;let d,c;let h=e(r);if(m(h)&&(h.m&&!(null==l?void 0:l.has(r))||Array.from(h.d).every(([e,t])=>i(n,e,l).n===t)))return h;h.d.clear();let w=!0;try{let g=t(r,t=>{if(u(r,t)){let n=e(t);if(!m(n)){if(s(t))o(t,n,t.init);else throw Error("no atom init")}return p(n)}let a=i(n,t,l);try{return p(a)}finally{if(w)y(n,r,h,t,a);else{let e=_();y(e,r,h,t,a),O(e,r,h),T(e)}}},{get signal(){return d||(d=new AbortController),d.signal},get setSelf(){return f(r)||console.warn("setSelf function cannot be used with read-only atom"),!c&&f(r)&&(c=(...e)=>{if(w&&console.warn("setSelf function cannot be called in sync"),!w)return C(r,...e)}),c}});if(o(r,h,g),v(g)){null==(a=g.onCancel)||a.call(g,()=>null==d?void 0:d.abort());let e=()=>{if(h.m){let e=_();O(e,r,h),T(e)}};g.then(e,e)}return h}catch(e){return delete h.v,h.e=e,++h.n,h}finally{w=!1}},a=(t,n,r)=>{var l,o;let i=new Map;for(let t of(null==(l=r.m)?void 0:l.t)||[])i.set(t,e(t));for(let t of r.p)i.set(t,e(t));return null==(o=S(t,n))||o.forEach(t=>{i.set(t,e(t))}),i},d=(e,t,n)=>{let[r,l]=function(e,t,n){let r=[],l=new Set,o=new Set,i=[[t,n]];for(;i.length>0;){let[t,n]=i[i.length-1];if(o.has(t)){i.pop();continue}if(l.has(t)){r.push([t,n,n.n]),o.add(t),i.pop();continue}for(let[r,o]of(l.add(t),a(e,t,n)))t===r||l.has(r)||i.push([r,o])}return[r,o]}(e,t,n),o=new Set([t]);for(let t=r.length-1;t>=0;--t){let[n,a,u]=r[t],s=!1;for(let e of a.d.keys())if(e!==n&&o.has(e)){s=!0;break}s&&(i(e,n,l),O(e,n,a),u!==a.n&&(b(e,n,a),o.add(n))),l.delete(n)}},E=(t,r,...l)=>{let a=!0;try{return n(r,e=>p(i(t,e)),(n,...l)=>{let i=e(n);try{if(!u(r,n))return E(t,n,...l);{if(!s(n))throw Error("atom not writable");let e=i.n,r=l[0];o(n,i,r),O(t,n,i),e!==i.n&&(b(t,n,i),d(t,n,i));return}}finally{a||T(t)}},...l)}finally{a=!1}},C=(e,...t)=>{let n=_();try{return E(n,e,...t)}finally{T(n)}},O=(t,n,r)=>{if(r.m&&!c(r.v)){for(let l of r.d.keys())r.m.d.has(l)||(M(t,l,e(l)).t.add(n),r.m.d.add(l));for(let l of r.m.d||[])if(!r.d.has(l)){r.m.d.delete(l);let o=j(t,l,e(l));null==o||o.t.delete(n)}}},M=(t,n,o)=>{if(!o.m){for(let r of(i(t,n),o.d.keys()))M(t,r,e(r)).t.add(n);if(o.m={l:new Set,d:new Set(o.d.keys()),t:new Set},l.add(n),f(n)){let e;let l=o.m,i=(t,r)=>{let l=!0;e=(...e)=>{try{return E(t,n,...e)}finally{l||T(t)}};try{return r()}finally{l=!1}};k(t,()=>{let o=i(t,()=>r(n,(...t)=>e(...t)));o&&(l.u=e=>i(e,o))})}}return o.m},j=(t,n,r)=>{if(r.m&&!r.m.l.size&&!Array.from(r.m.t).some(t=>{var r;return null==(r=e(t).m)?void 0:r.d.has(n)})){let o=r.m.u;for(let i of(o&&k(t,()=>o(t)),delete r.m,l.delete(n),r.d.keys())){let r=j(t,i,e(i));null==r||r.t.delete(n)}return}return r.m},z={get:e=>p(i(void 0,e)),set:C,sub:(t,n)=>{let r=_(),l=e(t),o=M(r,t,l).l;return o.add(n),T(r),()=>{o.delete(n);let e=_();j(e,t,l),T(e)}},unstable_derive:l=>A(...l(e,t,n,r))};return Object.assign(z,{dev4_get_internal_weak_map:()=>({get:t=>{let n=e(t);if(0!==n.n)return n}}),dev4_get_mounted_atoms:()=>l,dev4_restore_atoms:t=>{let n=_();for(let[r,l]of t)if(s(r)){let t=e(r),i=t.n;o(r,t,l),O(n,r,t),i!==t.n&&(b(n,r,t),d(n,r,t))}T(n)}}),z},C=()=>{let e=new WeakMap;return A(t=>{if(!t)throw Error("Atom is undefined or null");let n=e.get(t);return n||(n={d:new Map,p:new Set,n:0},e.set(t,n)),n},(e,...t)=>e.read(...t),(e,...t)=>e.write(...t),(e,...t)=>{var n;return null==(n=e.onMount)?void 0:n.call(e,...t)})},O=()=>(r||(r=C(),globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=r),globalThis.__JOTAI_DEFAULT_STORE__!==r&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")),r)}}]);