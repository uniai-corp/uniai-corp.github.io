(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{605:(e,t,n)=>{"use strict";n.d(t,{EN:()=>r,M:()=>l,Wt:()=>o});var i=n(3005);let l=(0,i.eU)({hardware:"desktop",viewport:"desktop"}),r=(0,i.eU)("portrait"),o=(0,i.eU)(!1)},2348:(e,t,n)=>{"use strict";function i(e,t){let n=null;return function(){for(var i=arguments.length,l=Array(i),r=0;r<i;r++)l[r]=arguments[r];null!==n&&(clearTimeout(n),n=null),n=setTimeout(()=>e(...l),null!=t?t:400)}}n.d(t,{A:()=>i})},3039:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,3793,23)),Promise.resolve().then(n.bind(n,3236)),Promise.resolve().then(n.bind(n,6564)),Promise.resolve().then(n.t.bind(n,7811,23))},3236:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});var i=n(5155),l=n(3353);function r(e){let{children:t}=e;return(0,i.jsx)(l.Kq,{children:t})}},3793:()=>{},6564:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var i=n(2115),l=n(3353),r=n(2348),o=n(605);let u={apple:["iPhone","iPad","iPod","Mac","macintosh"],tablet:["Tablet","iPad","playbook","silk"],mobile:["Android","Mobile","iPhone","iPod","iPad","BlackBerry","IEMobile","Kindle","NetFront","Silk-Accelerated","hpwOS","webOS","Fennec","Minimo","Opera Mobi","Opera Mini","Blazer","Dolfin","Dolphin","Skyfire","Zune"]},s=e=>{let{mobile:t,tablet:n}=u,i=n.some(t=>e.includes(t));return t.some(t=>e.includes(t))?i?"tablet":"mobile":"desktop"},a=e=>{let{apple:t}=u;return t.some(t=>e.includes(t))?"true":"false"};function c(){let e=(0,l.Xr)(o.M),[t,n]=(0,l.fp)(o.EN),[u,c]=(0,l.fp)(o.Wt),{width:d}=function(e){let{ref:t,delay:n,notDebounce:l}=e,[o,u]=(0,i.useState)(0),[s,a]=(0,i.useState)(0),c=(0,i.useCallback)(e=>{let t=e[0].target;u(t.clientWidth),a(t.clientHeight)},[]),d=(0,r.A)(c,n);return(0,i.useEffect)(()=>{let e=(null==t?void 0:t.current)&&t.current instanceof Element?t.current:window.document.documentElement,n=new ResizeObserver(l?c:d);return n.observe(e),()=>{n.disconnect()}},[l,d,c,t]),{width:o,height:s}}({delay:10});(0,i.useEffect)(()=>{let e=a(navigator.userAgent),t="true"===e;u!==t&&(e!==(document.documentElement.getAttribute("is-apple")||"")&&document.documentElement.setAttribute("is-apple",e),c(t))},[u,c]),(0,i.useEffect)(()=>{let e=window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape";t!==e&&n(e)},[n,t]);let m=(0,i.useCallback)(e=>"desktop"===e?d>=1280?"desktop":d<1280&&d>=768?"tablet":"mobile":"tablet"===e&&d<768?"mobile":e,[d]);return(0,i.useEffect)(()=>{let t=s(navigator.userAgent),n=m(t);n!==document.documentElement.getAttribute("viewport-device")&&document.documentElement.setAttribute("viewport-device",n),e({hardware:t,viewport:n})},[m,e]),null}},7811:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[141,353,441,684,358],()=>t(3039)),_N_E=e.O()}]);