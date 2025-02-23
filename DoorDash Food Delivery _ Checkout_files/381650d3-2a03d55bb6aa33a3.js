"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21966],{726632:function(e,t,n){let r;n.d(t,{KK:function(){return ep},NI:function(){return eb},XI:function(){return S},Y$:function(){return x},YF:function(){return em},bQ:function(){return ev},eS:function(){return ef},ll:function(){return $},qq:function(){return d},wD:function(){return eu},xp:function(){return ew},y0:function(){return ei}});var o,u=n(512150),l=n(850879),i=n(518093),c=n(428511),f=n(502648),a=n(760069),s=n(737427);function d(e){return u.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}let v={...o||(o=n.t(u,2))},m=v.useInsertionEffect||(e=>e());function p(e){let t=u.useRef(()=>{});return m(()=>{t.current=e}),u.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}let g=0;function h(e,t){void 0===t&&(t={});let{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(g);let u=()=>null==e?void 0:e.focus({preventScroll:n});o?u():g=requestAnimationFrame(u)}var E="undefined"!=typeof document?u.useLayoutEffect:u.useEffect;function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let y=!1,w=0,R=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+w++,k=v.useId||function(){let[e,t]=u.useState(()=>y?R():void 0);return E(()=>{null==e&&t(R())},[]),u.useEffect(()=>{y=!0},[]),e},x=u.forwardRef(function(e,t){let{context:{placement:n,elements:{floating:r},middlewareData:{arrow:o}},width:l=14,height:c=7,tipRadius:f=0,strokeWidth:a=0,staticOffset:s,stroke:d,d:v,style:{transform:m,...p}={},...g}=e,h=k(),[y,w]=u.useState(!1);if(E(()=>{r&&"rtl"===(0,i.Dx)(r).direction&&w(!0)},[r]),!r)return null;let R=2*a,x=R/2,M=l/2*(-(f/8)+1),L=c/2*f/4,[C,T]=n.split("-"),A=!!v,K="top"===C||"bottom"===C,O=s&&"end"===T?"bottom":"top",P=s&&"end"===T?"right":"left";s&&y&&(P="end"===T?"left":"right");let S=(null==o?void 0:o.x)!=null?s||o.x:"",W=(null==o?void 0:o.y)!=null?s||o.y:"",D=v||"M0,0 H"+l+" L"+(l-M)+","+(c-L)+(" Q"+l/2+","+c+" ")+M+","+(c-L)+" Z",I={top:A?"rotate(180deg)":"",left:A?"rotate(90deg)":"rotate(-90deg)",bottom:A?"":"rotate(180deg)",right:A?"rotate(-90deg)":"rotate(90deg)"}[C];return u.createElement("svg",b({},g,{"aria-hidden":!0,ref:t,width:A?l:l+R,height:l,viewBox:"0 0 "+l+" "+(c>l?c:l),style:{position:"absolute",pointerEvents:"none",[P]:S,[O]:W,[C]:K||A?"100%":"calc(100% - "+R/2+"px)",transform:""+I+(null!=m?m:""),...p}}),R>0&&u.createElement("path",{clipPath:"url(#"+h+")",fill:"none",stroke:d,strokeWidth:R+(v?0:1),d:D}),u.createElement("path",{stroke:R&&!v?g.fill:"none",d:D}),u.createElement("clipPath",{id:h},u.createElement("rect",{x:-x,y:x*(A?-1:1),width:l+R,height:l})))}),M=u.createContext(null),L=u.createContext(null),C=()=>{var e;return(null==(e=u.useContext(M))?void 0:e.id)||null},T=()=>u.useContext(L);function A(e){return"data-floating-ui-"+e}function K(e){let t=(0,u.useRef)(e);return E(()=>{t.current=e}),t}let O=A("safe-polygon");function P(e,t,n){return n&&!(0,l.r)(n)?0:"number"==typeof e?e:null==e?void 0:e[t]}function S(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:o,events:c,elements:f}=e,{enabled:a=!0,delay:s=0,handleClose:d=null,mouseOnly:v=!1,restMs:m=0,move:g=!0}=t,h=T(),b=C(),y=K(d),w=K(s),R=K(n),k=u.useRef(),x=u.useRef(-1),M=u.useRef(),L=u.useRef(-1),A=u.useRef(!0),S=u.useRef(!1),W=u.useRef(()=>{}),D=u.useCallback(()=>{var e;let t=null==(e=o.current.openEvent)?void 0:e.type;return(null==t?void 0:t.includes("mouse"))&&"mousedown"!==t},[o]);u.useEffect(()=>{if(a)return c.on("openchange",e),()=>{c.off("openchange",e)};function e(e){let{open:t}=e;t||(clearTimeout(x.current),clearTimeout(L.current),A.current=!0)}},[a,c]),u.useEffect(()=>{if(!a||!y.current||!n)return;function e(e){D()&&r(!1,e,"hover")}let t=(0,l.Me)(f.floating).documentElement;return t.addEventListener("mouseleave",e),()=>{t.removeEventListener("mouseleave",e)}},[f.floating,n,r,a,y,D]);let I=u.useCallback(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n="hover");let o=P(w.current,"close",k.current);o&&!M.current?(clearTimeout(x.current),x.current=window.setTimeout(()=>r(!1,e,n),o)):t&&(clearTimeout(x.current),r(!1,e,n))},[w,r]),_=p(()=>{W.current(),M.current=void 0}),F=p(()=>{if(S.current){let e=(0,l.Me)(f.floating).body;e.style.pointerEvents="",e.removeAttribute(O),S.current=!1}});u.useEffect(()=>{if(a&&(0,i.kK)(f.domReference)){var e;let t=f.domReference;return n&&t.addEventListener("mouseleave",s),null==(e=f.floating)||e.addEventListener("mouseleave",s),g&&t.addEventListener("mousemove",u,{once:!0}),t.addEventListener("mouseenter",u),t.addEventListener("mouseleave",c),()=>{var e;n&&t.removeEventListener("mouseleave",s),null==(e=f.floating)||e.removeEventListener("mouseleave",s),g&&t.removeEventListener("mousemove",u),t.removeEventListener("mouseenter",u),t.removeEventListener("mouseleave",c)}}function t(){return!!o.current.openEvent&&["click","mousedown"].includes(o.current.openEvent.type)}function u(e){if(clearTimeout(x.current),A.current=!1,v&&!(0,l.r)(k.current)||m>0&&!P(w.current,"open"))return;let t=P(w.current,"open",k.current);t?x.current=window.setTimeout(()=>{R.current||r(!0,e,"hover")},t):r(!0,e,"hover")}function c(e){if(t())return;W.current();let r=(0,l.Me)(f.floating);if(clearTimeout(L.current),y.current&&o.current.floatingContext){n||clearTimeout(x.current),M.current=y.current({...o.current.floatingContext,tree:h,x:e.clientX,y:e.clientY,onClose(){F(),_(),I(e,!0,"safe-polygon")}});let t=M.current;r.addEventListener("mousemove",t),W.current=()=>{r.removeEventListener("mousemove",t)};return}"touch"===k.current&&(0,l.r3)(f.floating,e.relatedTarget)||I(e)}function s(e){!t()&&o.current.floatingContext&&(null==y.current||y.current({...o.current.floatingContext,tree:h,x:e.clientX,y:e.clientY,onClose(){F(),_(),I(e)}})(e))}},[f,a,e,v,m,g,I,_,F,r,n,R,h,w,y,o]),E(()=>{var e,t;if(a&&n&&null!=(e=y.current)&&e.__options.blockPointerEvents&&D()){let e=(0,l.Me)(f.floating).body;e.setAttribute(O,""),e.style.pointerEvents="none",S.current=!0;let n=f.floating;if((0,i.kK)(f.domReference)&&n){let e=f.domReference,r=null==h||null==(t=h.nodesRef.current.find(e=>e.id===b))||null==(t=t.context)?void 0:t.elements.floating;return r&&(r.style.pointerEvents=""),e.style.pointerEvents="auto",n.style.pointerEvents="auto",()=>{e.style.pointerEvents="",n.style.pointerEvents=""}}}},[a,n,b,f,h,y,D]),E(()=>{n||(k.current=void 0,_(),F())},[n,_,F]),u.useEffect(()=>()=>{_(),clearTimeout(x.current),clearTimeout(L.current),F()},[a,f.domReference,_,F]);let N=u.useMemo(()=>{function e(e){k.current=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e;function o(){A.current||R.current||r(!0,t,"hover")}(!v||(0,l.r)(k.current))&&!n&&0!==m&&(clearTimeout(L.current),"touch"===k.current?o():L.current=window.setTimeout(o,m))}}},[v,r,n,R,m]),B=u.useMemo(()=>({onMouseEnter(){clearTimeout(x.current)},onMouseLeave(e){I(e.nativeEvent,!1)}}),[I]);return u.useMemo(()=>a?{reference:N,floating:B}:{},[a,N,B])}function W(e,t){let n=e.filter(e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)}),r=n;for(;r.length;)r=e.filter(e=>{var t;return null==(t=r)?void 0:t.some(t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)})}),n=n.concat(r);return n}let D=new WeakMap,I=new WeakSet,_={},F=0,N=()=>"undefined"!=typeof HTMLElement&&"inert"in HTMLElement.prototype,B=e=>e&&(e.host||B(e.parentNode)),j=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=B(t);return e.contains(n)?n:null}).filter(e=>null!=e);function q(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);let r=(0,l.Me)(e[0]).body;return function(e,t,n,r){let o="data-floating-ui-inert",u=r?"inert":n?"aria-hidden":null,l=j(t,e),c=new Set,f=new Set(l),a=[];_[o]||(_[o]=new WeakMap);let s=_[o];return l.forEach(function e(t){!(!t||c.has(t))&&(c.add(t),t.parentNode&&e(t.parentNode))}),function e(t){!t||f.has(t)||[].forEach.call(t.children,t=>{if("script"!==(0,i.wk)(t)){if(c.has(t))e(t);else{let e=u?t.getAttribute(u):null,n=null!==e&&"false"!==e,r=(D.get(t)||0)+1,l=(s.get(t)||0)+1;D.set(t,r),s.set(t,l),a.push(t),1===r&&n&&I.add(t),1===l&&t.setAttribute(o,""),!n&&u&&t.setAttribute(u,"true")}}})}(t),c.clear(),F++,()=>{a.forEach(e=>{let t=(D.get(e)||0)-1,n=(s.get(e)||0)-1;D.set(e,t),s.set(e,n),t||(!I.has(e)&&u&&e.removeAttribute(u),I.delete(e)),n||e.removeAttribute(o)}),--F||(D=new WeakMap,D=new WeakMap,I=new WeakSet,_={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}let U=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function X(e,t){let n=(0,c.tabbable)(e,U());"prev"===t&&n.reverse();let r=n.indexOf((0,l.AW)((0,l.Me)(e)));return n.slice(r+1)[0]}function Y(){return X(document.body,"next")}function H(){return X(document.body,"prev")}function V(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!(0,l.r3)(n,r)}let z={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function G(e){"Tab"===e.key&&(e.target,clearTimeout(r))}let Q=u.forwardRef(function(e,t){let[n,r]=u.useState();E(()=>((0,l.G6)()&&r("button"),document.addEventListener("keydown",G),()=>{document.removeEventListener("keydown",G)}),[]);let o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[A("focus-guard")]:"",style:z};return u.createElement("span",b({},e,o))}),Z=u.createContext(null),J=A("portal");function $(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e,l=function(e){void 0===e&&(e={});let{id:t,root:n}=e,r=k(),o=ee(),[l,c]=u.useState(null),f=u.useRef(null);return E(()=>()=>{null==l||l.remove(),queueMicrotask(()=>{f.current=null})},[l]),E(()=>{if(!r||f.current)return;let e=t?document.getElementById(t):null;if(!e)return;let n=document.createElement("div");n.id=r,n.setAttribute(J,""),e.appendChild(n),f.current=n,c(n)},[t,r]),E(()=>{if(!r||f.current)return;let e=n||(null==o?void 0:o.portalNode);e&&!(0,i.kK)(e)&&(e=e.current),e=e||document.body;let u=null;t&&((u=document.createElement("div")).id=t,e.appendChild(u));let l=document.createElement("div");l.id=r,l.setAttribute(J,""),(e=u||e).appendChild(l),f.current=l,c(l)},[t,n,r,o]),l}({id:n,root:r}),[a,s]=u.useState(null),d=u.useRef(null),v=u.useRef(null),m=u.useRef(null),p=u.useRef(null),g=!!a&&!a.modal&&a.open&&o&&!!(r||l);return u.useEffect(()=>{if(l&&o&&(null==a||!a.modal))return l.addEventListener("focusin",e,!0),l.addEventListener("focusout",e,!0),()=>{l.removeEventListener("focusin",e,!0),l.removeEventListener("focusout",e,!0)};function e(e){l&&V(e)&&("focusin"===e.type?function(e){e.querySelectorAll("[data-tabindex]").forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")})}:function(e){(0,c.tabbable)(e,U()).forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")})})(l)}},[l,o,null==a?void 0:a.modal]),u.createElement(Z.Provider,{value:u.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:d,afterOutsideRef:v,beforeInsideRef:m,afterInsideRef:p,portalNode:l,setFocusManagerState:s}),[o,l])},g&&l&&u.createElement(Q,{"data-type":"outside",ref:d,onFocus:e=>{if(V(e,l)){var t;null==(t=m.current)||t.focus()}else{let e=H()||(null==a?void 0:a.refs.domReference.current);null==e||e.focus()}}}),g&&l&&u.createElement("span",{"aria-owns":l.id,style:z}),l&&f.createPortal(t,l),g&&l&&u.createElement(Q,{"data-type":"outside",ref:v,onFocus:e=>{if(V(e,l)){var t;null==(t=p.current)||t.focus()}else{let t=Y()||(null==a?void 0:a.refs.domReference.current);null==t||t.focus(),(null==a?void 0:a.closeOnFocusOut)&&(null==a||a.onOpenChange(!1,e.nativeEvent))}}}))}let ee=()=>u.useContext(Z),et=[];function en(e){et=et.filter(e=>e.isConnected);let t=e;if(t&&"body"!==(0,i.wk)(t)){if(!(0,c.isTabbable)(t,U())){let e=(0,c.tabbable)(t,U())[0];e&&(t=e)}et.push(t),et.length>20&&(et=et.slice(-20))}}function er(){return et.slice().reverse().find(e=>e.isConnected)}let eo=u.forwardRef(function(e,t){return u.createElement("button",b({},e,{type:"button",ref:t,tabIndex:-1,style:z}))});function eu(e){let{context:t,children:n,disabled:r=!1,order:o=["content"],guards:f=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:d=!1,modal:v=!0,visuallyHiddenDismiss:m=!1,closeOnFocusOut:g=!0}=e,{open:b,refs:y,nodeId:w,onOpenChange:R,events:k,dataRef:x,floatingId:M,elements:{domReference:L,floating:C}}=t,O="number"==typeof a&&a<0,P=(0,l.Ie)(L)&&O,S=!N()||f,D=K(o),I=K(a),_=K(s),F=T(),B=ee(),j=u.useRef(null),X=u.useRef(null),z=u.useRef(!1),G=u.useRef(!1),Z=u.useRef(-1),J=null!=B,$=null==C?void 0:C.firstElementChild,et=(null==$?void 0:$.id)===M?$:C,eu=p(function(e){return void 0===e&&(e=et),e?(0,c.tabbable)(e,U()):[]}),el=p(e=>{let t=eu(e);return D.current.map(e=>L&&"reference"===e?L:et&&"floating"===e?et:t).filter(Boolean).flat()});function ei(e){return!r&&m&&v?u.createElement(eo,{ref:"start"===e?j:X,onClick:e=>R(!1,e.nativeEvent)},"string"==typeof m?m:"Dismiss"):null}u.useEffect(()=>{if(r||!v)return;function e(e){if("Tab"===e.key){(0,l.r3)(et,(0,l.AW)((0,l.Me)(et)))&&0===eu().length&&!P&&(0,l.p7)(e);let t=el(),n=(0,l.U9)(e);"reference"===D.current[0]&&n===L&&((0,l.p7)(e),e.shiftKey?h(t[t.length-1]):h(t[1])),"floating"===D.current[1]&&n===et&&e.shiftKey&&((0,l.p7)(e),h(t[0]))}}let t=(0,l.Me)(et);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}},[r,L,et,v,D,P,eu,el]),u.useEffect(()=>{if(!r&&C)return C.addEventListener("focusin",e),()=>{C.removeEventListener("focusin",e)};function e(e){let t=(0,l.U9)(e),n=eu().indexOf(t);-1!==n&&(Z.current=n)}},[r,C,eu]),u.useEffect(()=>{if(!r&&g&&C&&(0,i.Re)(L))return L.addEventListener("focusout",t),L.addEventListener("pointerdown",e),C.addEventListener("focusout",t),()=>{L.removeEventListener("focusout",t),L.removeEventListener("pointerdown",e),C.removeEventListener("focusout",t)};function e(){G.current=!0,setTimeout(()=>{G.current=!1})}function t(e){let t=e.relatedTarget;queueMicrotask(()=>{let n=!((0,l.r3)(L,t)||(0,l.r3)(C,t)||(0,l.r3)(t,C)||(0,l.r3)(null==B?void 0:B.portalNode,t)||null!=t&&t.hasAttribute(A("focus-guard"))||F&&(W(F.nodesRef.current,w).find(e=>{var n,r;return(0,l.r3)(null==(n=e.context)?void 0:n.elements.floating,t)||(0,l.r3)(null==(r=e.context)?void 0:r.elements.domReference,t)})||(function(e,t){var n;let r=[],o=null==(n=e.find(e=>e.id===t))?void 0:n.parentId;for(;o;){let t=e.find(e=>e.id===o);o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r})(F.nodesRef.current,w).find(e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t})));if(d&&n&&(0,l.AW)((0,l.Me)(et))===(0,l.Me)(et).body){(0,i.Re)(et)&&(null==et||et.focus());let e=Z.current,t=eu(),n=t[e]||t[t.length-1]||et;(0,i.Re)(n)&&n.focus()}(P||!v)&&t&&n&&!G.current&&t!==er()&&(z.current=!0,R(!1,e))})}},[r,L,C,et,v,w,F,B,R,g,d,eu,P]),u.useEffect(()=>{var e;if(r)return;let t=Array.from((null==B||null==(e=B.portalNode)?void 0:e.querySelectorAll("["+A("portal")+"]"))||[]);if(C){let e=[C,...t,j.current,X.current,D.current.includes("reference")||P?L:null].filter(e=>null!=e),n=v||P?q(e,S,!S):q(e);return()=>{n()}}},[r,L,C,v,D,B,P,S]),E(()=>{if(r||!(0,i.Re)(et))return;let e=(0,l.Me)(et),t=(0,l.AW)(e);queueMicrotask(()=>{let e=el(et),n=I.current,r=("number"==typeof n?e[n]:n.current)||et,o=(0,l.r3)(et,t);O||o||!b||h(r,{preventScroll:r===et})})},[r,b,et,O,el,I]),E(()=>{if(r||!et)return;let e=!1,t=(0,l.Me)(et),n=(0,l.AW)(t),o=x.current.openEvent,u=y.domReference.current;function f(t){let{open:n,reason:r,event:u,nested:i}=t;n&&(o=u),"escape-key"===r&&y.domReference.current&&en(y.domReference.current),"hover"===r&&"mouseleave"===u.type&&(z.current=!0),"outside-press"===r&&(i?(z.current=!1,e=!0):z.current=!((0,l.Zj)(u)||(0,l.cr)(u)))}return en(n),k.on("openchange",f),()=>{k.off("openchange",f);let r=(0,l.AW)(t),a=(0,l.r3)(C,r)||F&&W(F.nodesRef.current,w).some(e=>{var t;return(0,l.r3)(null==(t=e.context)?void 0:t.elements.floating,r)});(a||o&&["click","mousedown"].includes(o.type))&&y.domReference.current&&en(y.domReference.current);let s=u||n,d=(0,c.tabbable)((0,l.Me)(s).body,U());queueMicrotask(()=>{let n=er();!n&&(0,i.Re)(s)&&C&&(n=function(e,t,n){let r=e.indexOf(t);function o(t){let o=A("focus-guard"),u=r+(t?1:0),i=e[u];for(;i&&(!i.isConnected||i.hasAttribute(o)||(0,l.r3)(n,i));)t?u++:u--,i=e[u];return i}return o(!0)||o(!1)}(d,s,C)),_.current&&!z.current&&(0,i.Re)(n)&&(n===r||r===t.body||a)&&n.focus({preventScroll:e})})}},[r,C,et,_,x,y,k,F,w]),E(()=>{if(!r&&B)return B.setFocusManagerState({modal:v,closeOnFocusOut:g,open:b,onOpenChange:R,refs:y}),()=>{B.setFocusManagerState(null)}},[r,B,v,b,R,y,g]),E(()=>{if(r||!et||"function"!=typeof MutationObserver||O)return;let e=()=>{let e=et.getAttribute("tabindex"),t=eu(),n=(0,l.AW)((0,l.Me)(C)),r=t.indexOf(n);-1!==r&&(Z.current=r),D.current.includes("floating")||n!==y.domReference.current&&0===t.length?"0"!==e&&et.setAttribute("tabindex","0"):"-1"!==e&&et.setAttribute("tabindex","-1")};e();let t=new MutationObserver(e);return t.observe(et,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}},[r,C,et,y,D,eu,O]);let ec=!r&&S&&(!v||!P)&&(J||v);return u.createElement(u.Fragment,null,ec&&u.createElement(Q,{"data-type":"inside",ref:null==B?void 0:B.beforeInsideRef,onFocus:e=>{if(v){let e=el();h("reference"===o[0]?e[0]:e[e.length-1])}else if(null!=B&&B.preserveTabOrder&&B.portalNode){if(z.current=!1,V(e,B.portalNode)){let e=Y()||L;null==e||e.focus()}else{var t;null==(t=B.beforeOutsideRef.current)||t.focus()}}}}),!P&&ei("start"),n,ei("end"),ec&&u.createElement(Q,{"data-type":"inside",ref:null==B?void 0:B.afterInsideRef,onFocus:e=>{if(v)h(el()[0]);else if(null!=B&&B.preserveTabOrder&&B.portalNode){if(g&&(z.current=!0),V(e,B.portalNode)){let e=H()||L;null==e||e.focus()}else{var t;null==(t=B.afterOutsideRef.current)||t.focus()}}}}))}let el=new Set,ei=u.forwardRef(function(e,t){let{lockScroll:n=!1,...r}=e,o=k();return E(()=>{if(!n)return;el.add(o);let e=/iP(hone|ad|od)|iOS/.test((0,l.Xf)()),t=document.body.style,r=Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?"paddingLeft":"paddingRight",u=window.innerWidth-document.documentElement.clientWidth,i=t.left?parseFloat(t.left):window.scrollX,c=t.top?parseFloat(t.top):window.scrollY;if(t.overflow="hidden",u&&(t[r]=u+"px"),e){var f,a;let e=(null==(f=window.visualViewport)?void 0:f.offsetLeft)||0;Object.assign(t,{position:"fixed",top:-(c-Math.floor((null==(a=window.visualViewport)?void 0:a.offsetTop)||0))+"px",left:-(i-Math.floor(e))+"px",right:"0"})}return()=>{el.delete(o),0===el.size&&(Object.assign(t,{overflow:"",[r]:""}),e&&(Object.assign(t,{position:"",top:"",left:"",right:""}),window.scrollTo(i,c)))}},[o,n]),u.createElement("div",b({ref:t},r,{style:{position:"fixed",overflow:"auto",top:0,right:0,bottom:0,left:0,...r.style}}))});function ec(e){return(0,i.Re)(e.target)&&"BUTTON"===e.target.tagName}function ef(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:c=!0,event:f="click",toggle:a=!0,ignoreMouse:s=!1,keyboardHandlers:d=!0}=t,v=u.useRef(),m=u.useRef(!1),p=u.useMemo(()=>({onPointerDown(e){v.current=e.pointerType},onMouseDown(e){let t=v.current;0===e.button&&"click"!==f&&((0,l.r)(t,!0)&&s||(n&&a&&(!o.current.openEvent||"mousedown"===o.current.openEvent.type)?r(!1,e.nativeEvent,"click"):(e.preventDefault(),r(!0,e.nativeEvent,"click"))))},onClick(e){let t=v.current;if("mousedown"===f&&v.current){v.current=void 0;return}(0,l.r)(t,!0)&&s||(n&&a&&(!o.current.openEvent||"click"===o.current.openEvent.type)?r(!1,e.nativeEvent,"click"):r(!0,e.nativeEvent,"click"))},onKeyDown(e){v.current=void 0,e.defaultPrevented||!d||ec(e)||(" "!==e.key||(0,l.j7)(i)||(e.preventDefault(),m.current=!0),"Enter"===e.key&&(n&&a?r(!1,e.nativeEvent,"click"):r(!0,e.nativeEvent,"click")))},onKeyUp(e){!(e.defaultPrevented||!d||ec(e)||(0,l.j7)(i))&&" "===e.key&&m.current&&(m.current=!1,n&&a?r(!1,e.nativeEvent,"click"):r(!0,e.nativeEvent,"click"))}}),[o,i,f,s,d,r,n,a]);return u.useMemo(()=>c?{reference:p}:{},[c,p])}let ea={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},es={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},ed=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function ev(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,elements:o,dataRef:c}=e,{enabled:f=!0,escapeKey:s=!0,outsidePress:d=!0,outsidePressEvent:v="pointerdown",referencePress:m=!1,referencePressEvent:g="pointerdown",ancestorScroll:h=!1,bubbles:E,capture:b}=t,y=T(),w=p("function"==typeof d?d:()=>!1),R="function"==typeof d?w:d,k=u.useRef(!1),x=u.useRef(!1),{escapeKey:M,outsidePress:L}=ed(E),{escapeKey:C,outsidePress:K}=ed(b),O=p(e=>{var t;if(!n||!f||!s||"Escape"!==e.key)return;let o=null==(t=c.current.floatingContext)?void 0:t.nodeId,u=y?W(y.nodesRef.current,o):[];if(!M&&(e.stopPropagation(),u.length>0)){let e=!0;if(u.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles){e=!1;return}}),!e)return}r(!1,(0,l.MM)(e)?e.nativeEvent:e,"escape-key")}),P=p(e=>{var t;let n=()=>{var t;O(e),null==(t=(0,l.U9)(e))||t.removeEventListener("keydown",n)};null==(t=(0,l.U9)(e))||t.addEventListener("keydown",n)}),S=p(e=>{var t;let n=k.current;k.current=!1;let u=x.current;if(x.current=!1,"click"===v&&u||n||"function"==typeof R&&!R(e))return;let f=(0,l.U9)(e),a="["+A("inert")+"]",s=(0,l.Me)(o.floating).querySelectorAll(a),d=(0,i.kK)(f)?f:null;for(;d&&!(0,i.Py)(d);){let e=(0,i.Ow)(d);if((0,i.Py)(e)||!(0,i.kK)(e))break;d=e}if(s.length&&(0,i.kK)(f)&&!(0,l.ex)(f)&&!(0,l.r3)(f,o.floating)&&Array.from(s).every(e=>!(0,l.r3)(d,e)))return;if((0,i.Re)(f)&&_){let t=f.clientWidth>0&&f.scrollWidth>f.clientWidth,n=f.clientHeight>0&&f.scrollHeight>f.clientHeight,r=n&&e.offsetX>f.clientWidth;if(n&&"rtl"===(0,i.Dx)(f).direction&&(r=e.offsetX<=f.offsetWidth-f.clientWidth),r||t&&e.offsetY>f.clientHeight)return}let m=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=y&&W(y.nodesRef.current,m).some(t=>{var n;return(0,l.Pe)(e,null==(n=t.context)?void 0:n.elements.floating)});if((0,l.Pe)(e,o.floating)||(0,l.Pe)(e,o.domReference)||p)return;let g=y?W(y.nodesRef.current,m):[];if(g.length>0){let e=!0;if(g.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__outsidePressBubbles){e=!1;return}}),!e)return}r(!1,e,"outside-press")}),D=p(e=>{var t;let n=()=>{var t;S(e),null==(t=(0,l.U9)(e))||t.removeEventListener(v,n)};null==(t=(0,l.U9)(e))||t.addEventListener(v,n)});u.useEffect(()=>{if(!n||!f)return;function e(e){r(!1,e,"ancestor-scroll")}c.current.__escapeKeyBubbles=M,c.current.__outsidePressBubbles=L;let t=(0,l.Me)(o.floating);s&&t.addEventListener("keydown",C?P:O,C),R&&t.addEventListener(v,K?D:S,K);let u=[];return h&&((0,i.kK)(o.domReference)&&(u=(0,a.Kx)(o.domReference)),(0,i.kK)(o.floating)&&(u=u.concat((0,a.Kx)(o.floating))),!(0,i.kK)(o.reference)&&o.reference&&o.reference.contextElement&&(u=u.concat((0,a.Kx)(o.reference.contextElement)))),(u=u.filter(e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})).forEach(t=>{t.addEventListener("scroll",e,{passive:!0})}),()=>{s&&t.removeEventListener("keydown",C?P:O,C),R&&t.removeEventListener(v,K?D:S,K),u.forEach(t=>{t.removeEventListener("scroll",e)})}},[c,o,s,R,v,n,r,h,f,M,L,O,C,P,S,K,D]),u.useEffect(()=>{k.current=!1},[R,v]);let I=u.useMemo(()=>({onKeyDown:O,[ea[g]]:e=>{m&&r(!1,e.nativeEvent,"reference-press")}}),[O,r,m,g]),_=u.useMemo(()=>({onKeyDown:O,onMouseDown(){x.current=!0},onMouseUp(){x.current=!0},[es[v]]:()=>{k.current=!0}}),[O,v]);return u.useMemo(()=>f?{reference:I,floating:_}:{},[f,I,_])}function em(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,o=k(),l=u.useRef({}),[i]=u.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),c=null!=C(),[f,a]=u.useState(r.reference),s=p((e,t,r)=>{l.current.openEvent=e?t:void 0,i.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)}),d=u.useMemo(()=>({setPositionReference:a}),[]),v=u.useMemo(()=>({reference:f||r.reference||null,floating:r.floating||null,domReference:r.reference}),[f,r.reference,r.floating]);return u.useMemo(()=>({dataRef:l,open:t,onOpenChange:s,elements:v,events:i,floatingId:o,refs:d}),[t,s,v,i,o,d])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[l,c]=u.useState(null),[f,a]=u.useState(null),d=(null==o?void 0:o.reference)||l,v=u.useRef(null),m=T();E(()=>{d&&(v.current=d)},[d]);let g=(0,s.YF)({...e,elements:{...o,...f&&{reference:f}}}),h=u.useCallback(e=>{let t=(0,i.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;a(t),g.refs.setReference(t)},[g.refs]),b=u.useCallback(e=>{((0,i.kK)(e)||null===e)&&(v.current=e,c(e)),((0,i.kK)(g.refs.reference.current)||null===g.refs.reference.current||null!==e&&!(0,i.kK)(e))&&g.refs.setReference(e)},[g.refs]),y=u.useMemo(()=>({...g.refs,setReference:b,setPositionReference:h,domReference:v}),[g.refs,b,h]),w=u.useMemo(()=>({...g.elements,domReference:d}),[g.elements,d]),R=u.useMemo(()=>({...g,...r,refs:y,elements:w,nodeId:t}),[g,y,w,t,r]);return E(()=>{r.dataRef.current.floatingContext=R;let e=null==m?void 0:m.nodesRef.current.find(e=>e.id===t);e&&(e.context=R)}),u.useMemo(()=>({...g,context:R,refs:y,elements:w}),[g,y,w,R])}function ep(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,events:o,dataRef:c,elements:f}=e,{enabled:a=!0,visibleOnly:s=!0}=t,d=u.useRef(!1),v=u.useRef(),m=u.useRef(!0);u.useEffect(()=>{if(!a)return;let e=(0,i.Jj)(f.domReference);function t(){!n&&(0,i.Re)(f.domReference)&&f.domReference===(0,l.AW)((0,l.Me)(f.domReference))&&(d.current=!0)}function r(){m.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}},[f.domReference,n,a]),u.useEffect(()=>{if(a)return o.on("openchange",e),()=>{o.off("openchange",e)};function e(e){let{reason:t}=e;("reference-press"===t||"escape-key"===t)&&(d.current=!0)}},[o,a]),u.useEffect(()=>()=>{clearTimeout(v.current)},[]);let p=u.useMemo(()=>({onPointerDown(e){(0,l.cr)(e.nativeEvent)||(m.current=!1)},onMouseLeave(){d.current=!1},onFocus(e){if(d.current)return;let t=(0,l.U9)(e.nativeEvent);if(s&&(0,i.kK)(t))try{if((0,l.G6)()&&(0,l.V5)())throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!m.current&&!(0,l.j7)(t))return}r(!0,e.nativeEvent,"focus")},onBlur(e){d.current=!1;let t=e.relatedTarget,n=e.nativeEvent,o=(0,i.kK)(t)&&t.hasAttribute(A("focus-guard"))&&"outside"===t.getAttribute("data-type");v.current=window.setTimeout(()=>{var e;let u=(0,l.AW)(f.domReference?f.domReference.ownerDocument:document);if(t||u!==f.domReference){if((0,l.r3)(null==(e=c.current.floatingContext)?void 0:e.refs.floating.current,u)||(0,l.r3)(f.domReference,u)||o)return;r(!1,n,"focus")}})}}),[c,f.domReference,r,s]);return u.useMemo(()=>a?{reference:p}:{},[a,p])}let eg="active",eh="selected";function eE(e,t,n){let r=new Map,o="item"===n,u=e;if(o&&e){let{[eg]:t,[eh]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(o&&[eg,eh].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var l;null==(l=r.get(n))||l.push(u),e[n]=function(){for(var e,t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...o)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function eb(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),o=u.useCallback(t=>eE(t,e,"reference"),t),l=u.useCallback(t=>eE(t,e,"floating"),n),i=u.useCallback(t=>eE(t,e,"item"),r);return u.useMemo(()=>({getReferenceProps:o,getFloatingProps:l,getItemProps:i}),[o,l,i])}function ey(e,t){let[n,r]=e,o=!1,u=t.length;for(let e=0,l=u-1;e<u;l=e++){let[u,i]=t[e]||[0,0],[c,f]=t[l]||[0,0];i>=r!=f>=r&&n<=(c-u)*(r-i)/(f-i)+u&&(o=!o)}return o}function ew(e){let t;void 0===e&&(e={});let{buffer:n=.5,blockPointerEvents:r=!1,requireIntent:o=!0}=e,u=!1,c=null,f=null,a=performance.now(),s=e=>{let{x:r,y:s,placement:d,elements:v,onClose:m,nodeId:p,tree:g}=e;return function(e){function h(){clearTimeout(t),m()}if(clearTimeout(t),!v.domReference||!v.floating||null==d||null==r||null==s)return;let{clientX:E,clientY:b}=e,y=[E,b],w=(0,l.U9)(e),R="mouseleave"===e.type,k=(0,l.r3)(v.floating,w),x=(0,l.r3)(v.domReference,w),M=v.domReference.getBoundingClientRect(),L=v.floating.getBoundingClientRect(),C=d.split("-")[0],T=r>L.right-L.width/2,A=s>L.bottom-L.height/2,K=y[0]>=M.x&&y[0]<=M.x+M.width&&y[1]>=M.y&&y[1]<=M.y+M.height,O=L.width>M.width,P=L.height>M.height,S=(O?M:L).left,D=(O?M:L).right,I=(P?M:L).top,_=(P?M:L).bottom;if(k&&(u=!0,!R))return;if(x&&(u=!1),x&&!R){u=!0;return}if(R&&(0,i.kK)(e.relatedTarget)&&(0,l.r3)(v.floating,e.relatedTarget)||g&&W(g.nodesRef.current,p).some(e=>{let{context:t}=e;return null==t?void 0:t.open}))return;if("top"===C&&s>=M.bottom-1||"bottom"===C&&s<=M.top+1||"left"===C&&r>=M.right-1||"right"===C&&r<=M.left+1)return h();let F=[];switch(C){case"top":F=[[S,M.top+1],[S,L.bottom-1],[D,L.bottom-1],[D,M.top+1]];break;case"bottom":F=[[S,L.top+1],[S,M.bottom-1],[D,M.bottom-1],[D,L.top+1]];break;case"left":F=[[L.right-1,_],[L.right-1,I],[M.left+1,I],[M.left+1,_]];break;case"right":F=[[M.right-1,_],[M.right-1,I],[L.left+1,I],[L.left+1,_]]}if(!ey([E,b],F)){if(u&&!K)return h();if(!R&&o){let t=function(e,t){let n=performance.now(),r=n-a;if(null===c||null===f||0===r)return c=e,f=t,a=n,null;let o=e-c,u=t-f;return c=e,f=t,a=n,Math.sqrt(o*o+u*u)/r}(e.clientX,e.clientY);if(null!==t&&t<.1)return h()}ey([E,b],function(e){let[t,r]=e;switch(C){case"top":{let e=[[L.left,T?L.bottom-n:O?L.bottom-n:L.top],[L.right,T?O?L.bottom-n:L.top:L.bottom-n]];return[[O?t+n/2:T?t+4*n:t-4*n,r+n+1],[O?t-n/2:T?t+4*n:t-4*n,r+n+1],...e]}case"bottom":{let e=[[L.left,T?L.top+n:O?L.top+n:L.bottom],[L.right,T?O?L.top+n:L.bottom:L.top+n]];return[[O?t+n/2:T?t+4*n:t-4*n,r-n],[O?t-n/2:T?t+4*n:t-4*n,r-n],...e]}case"left":return[[A?L.right-n:P?L.right-n:L.left,L.top],[A?P?L.right-n:L.left:L.right-n,L.bottom],[t+n+1,P?r+n/2:A?r+4*n:r-4*n],[t+n+1,P?r-n/2:A?r+4*n:r-4*n]];case"right":{let e=[[A?L.left+n:P?L.left+n:L.right,L.top],[A?P?L.left+n:L.right:L.left+n,L.bottom]];return[[t-n,P?r+n/2:A?r+4*n:r-4*n],[t-n,P?r-n/2:A?r+4*n:r-4*n],...e]}}}([r,s]))?!u&&o&&(t=window.setTimeout(h,40)):h()}}};return s.__options={blockPointerEvents:r},s}}}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2d484662-b572-593a-a99f-84f74c721000")}catch(e){}}()
//# debugId=2d484662-b572-593a-a99f-84f74c721000
//# sourceMappingURL=381650d3-2a03d55bb6aa33a3.js.map
