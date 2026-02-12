(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(s){if(s.ep)return;s.ep=!0;const f=r(s);fetch(s.href,f)}})();function js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $c={exports:{}},Ci={};var nm;function Cb(){if(nm)return Ci;nm=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,s,f){var d=null;if(f!==void 0&&(d=""+f),s.key!==void 0&&(d=""+s.key),"key"in s){f={};for(var p in s)p!=="key"&&(f[p]=s[p])}else f=s;return s=f.ref,{$$typeof:e,type:u,key:d,ref:s!==void 0?s:null,props:f}}return Ci.Fragment=i,Ci.jsx=r,Ci.jsxs=r,Ci}var em;function wb(){return em||(em=1,$c.exports=Cb()),$c.exports}var _=wb(),Wc={exports:{}},yt={};var am;function _b(){if(am)return yt;am=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,U={};function N(O,G,E){this.props=O,this.context=G,this.refs=U,this.updater=E||D}N.prototype.isReactComponent={},N.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},N.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=N.prototype;function q(O,G,E){this.props=O,this.context=G,this.refs=U,this.updater=E||D}var at=q.prototype=new X;at.constructor=q,z(at,N.prototype),at.isPureReactComponent=!0;var tt=Array.isArray;function H(){}var J={H:null,A:null,T:null,S:null},ot=Object.prototype.hasOwnProperty;function lt(O,G,E){var $=E.ref;return{$$typeof:e,type:O,key:G,ref:$!==void 0?$:null,props:E}}function gt(O,G){return lt(O.type,G,O.props)}function nt(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function W(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(E){return G[E]})}var Ot=/\/+/g;function rt(O,G){return typeof O=="object"&&O!==null&&O.key!=null?W(""+O.key):G.toString(36)}function F(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(G){O.status==="pending"&&(O.status="fulfilled",O.value=G)},function(G){O.status==="pending"&&(O.status="rejected",O.reason=G)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function C(O,G,E,$,ht){var st=typeof O;(st==="undefined"||st==="boolean")&&(O=null);var At=!1;if(O===null)At=!0;else switch(st){case"bigint":case"string":case"number":At=!0;break;case"object":switch(O.$$typeof){case e:case i:At=!0;break;case y:return At=O._init,C(At(O._payload),G,E,$,ht)}}if(At)return ht=ht(O),At=$===""?"."+rt(O,0):$,tt(ht)?(E="",At!=null&&(E=At.replace(Ot,"$&/")+"/"),C(ht,G,E,"",function(Qn){return Qn})):ht!=null&&(nt(ht)&&(ht=gt(ht,E+(ht.key==null||O&&O.key===ht.key?"":(""+ht.key).replace(Ot,"$&/")+"/")+At)),G.push(ht)),1;At=0;var Pt=$===""?".":$+":";if(tt(O))for(var Lt=0;Lt<O.length;Lt++)$=O[Lt],st=Pt+rt($,Lt),At+=C($,G,E,st,ht);else if(Lt=x(O),typeof Lt=="function")for(O=Lt.call(O),Lt=0;!($=O.next()).done;)$=$.value,st=Pt+rt($,Lt++),At+=C($,G,E,st,ht);else if(st==="object"){if(typeof O.then=="function")return C(F(O),G,E,$,ht);throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return At}function P(O,G,E){if(O==null)return O;var $=[],ht=0;return C(O,$,"","",function(st){return G.call(E,st,ht++)}),$}function ut(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(E){(O._status===0||O._status===-1)&&(O._status=1,O._result=E)},function(E){(O._status===0||O._status===-1)&&(O._status=2,O._result=E)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},k={map:P,forEach:function(O,G,E){P(O,function(){G.apply(this,arguments)},E)},count:function(O){var G=0;return P(O,function(){G++}),G},toArray:function(O){return P(O,function(G){return G})||[]},only:function(O){if(!nt(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return yt.Activity=b,yt.Children=k,yt.Component=N,yt.Fragment=r,yt.Profiler=s,yt.PureComponent=q,yt.StrictMode=u,yt.Suspense=g,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,yt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return J.H.useMemoCache(O)}},yt.cache=function(O){return function(){return O.apply(null,arguments)}},yt.cacheSignal=function(){return null},yt.cloneElement=function(O,G,E){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var $=z({},O.props),ht=O.key;if(G!=null)for(st in G.key!==void 0&&(ht=""+G.key),G)!ot.call(G,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&G.ref===void 0||($[st]=G[st]);var st=arguments.length-2;if(st===1)$.children=E;else if(1<st){for(var At=Array(st),Pt=0;Pt<st;Pt++)At[Pt]=arguments[Pt+2];$.children=At}return lt(O.type,ht,$)},yt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},yt.createElement=function(O,G,E){var $,ht={},st=null;if(G!=null)for($ in G.key!==void 0&&(st=""+G.key),G)ot.call(G,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ht[$]=G[$]);var At=arguments.length-2;if(At===1)ht.children=E;else if(1<At){for(var Pt=Array(At),Lt=0;Lt<At;Lt++)Pt[Lt]=arguments[Lt+2];ht.children=Pt}if(O&&O.defaultProps)for($ in At=O.defaultProps,At)ht[$]===void 0&&(ht[$]=At[$]);return lt(O,st,ht)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:p,render:O}},yt.isValidElement=nt,yt.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:ut}},yt.memo=function(O,G){return{$$typeof:h,type:O,compare:G===void 0?null:G}},yt.startTransition=function(O){var G=J.T,E={};J.T=E;try{var $=O(),ht=J.S;ht!==null&&ht(E,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(H,St)}catch(st){St(st)}finally{G!==null&&E.types!==null&&(G.types=E.types),J.T=G}},yt.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},yt.use=function(O){return J.H.use(O)},yt.useActionState=function(O,G,E){return J.H.useActionState(O,G,E)},yt.useCallback=function(O,G){return J.H.useCallback(O,G)},yt.useContext=function(O){return J.H.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O,G){return J.H.useDeferredValue(O,G)},yt.useEffect=function(O,G){return J.H.useEffect(O,G)},yt.useEffectEvent=function(O){return J.H.useEffectEvent(O)},yt.useId=function(){return J.H.useId()},yt.useImperativeHandle=function(O,G,E){return J.H.useImperativeHandle(O,G,E)},yt.useInsertionEffect=function(O,G){return J.H.useInsertionEffect(O,G)},yt.useLayoutEffect=function(O,G){return J.H.useLayoutEffect(O,G)},yt.useMemo=function(O,G){return J.H.useMemo(O,G)},yt.useOptimistic=function(O,G){return J.H.useOptimistic(O,G)},yt.useReducer=function(O,G,E){return J.H.useReducer(O,G,E)},yt.useRef=function(O){return J.H.useRef(O)},yt.useState=function(O){return J.H.useState(O)},yt.useSyncExternalStore=function(O,G,E){return J.H.useSyncExternalStore(O,G,E)},yt.useTransition=function(){return J.H.useTransition()},yt.version="19.2.4",yt}var lm;function Us(){return lm||(lm=1,Wc.exports=_b()),Wc.exports}var L=Us();const Ye=js(L);var ts={exports:{}},wi={},ns={exports:{}},es={};var im;function Db(){return im||(im=1,(function(e){function i(C,P){var ut=C.length;C.push(P);t:for(;0<ut;){var St=ut-1>>>1,k=C[St];if(0<s(k,P))C[St]=P,C[ut]=k,ut=St;else break t}}function r(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var P=C[0],ut=C.pop();if(ut!==P){C[0]=ut;t:for(var St=0,k=C.length,O=k>>>1;St<O;){var G=2*(St+1)-1,E=C[G],$=G+1,ht=C[$];if(0>s(E,ut))$<k&&0>s(ht,E)?(C[St]=ht,C[$]=ut,St=$):(C[St]=E,C[G]=ut,St=G);else if($<k&&0>s(ht,ut))C[St]=ht,C[$]=ut,St=$;else break t}}return P}function s(C,P){var ut=C.sortIndex-P.sortIndex;return ut!==0?ut:C.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var g=[],h=[],y=1,b=null,S=3,x=!1,D=!1,z=!1,U=!1,N=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function at(C){for(var P=r(h);P!==null;){if(P.callback===null)u(h);else if(P.startTime<=C)u(h),P.sortIndex=P.expirationTime,i(g,P);else break;P=r(h)}}function tt(C){if(z=!1,at(C),!D)if(r(g)!==null)D=!0,H||(H=!0,W());else{var P=r(h);P!==null&&F(tt,P.startTime-C)}}var H=!1,J=-1,ot=5,lt=-1;function gt(){return U?!0:!(e.unstable_now()-lt<ot)}function nt(){if(U=!1,H){var C=e.unstable_now();lt=C;var P=!0;try{t:{D=!1,z&&(z=!1,X(J),J=-1),x=!0;var ut=S;try{n:{for(at(C),b=r(g);b!==null&&!(b.expirationTime>C&&gt());){var St=b.callback;if(typeof St=="function"){b.callback=null,S=b.priorityLevel;var k=St(b.expirationTime<=C);if(C=e.unstable_now(),typeof k=="function"){b.callback=k,at(C),P=!0;break n}b===r(g)&&u(g),at(C)}else u(g);b=r(g)}if(b!==null)P=!0;else{var O=r(h);O!==null&&F(tt,O.startTime-C),P=!1}}break t}finally{b=null,S=ut,x=!1}P=void 0}}finally{P?W():H=!1}}}var W;if(typeof q=="function")W=function(){q(nt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,rt=Ot.port2;Ot.port1.onmessage=nt,W=function(){rt.postMessage(null)}}else W=function(){N(nt,0)};function F(C,P){J=N(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_next=function(C){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var ut=S;S=P;try{return C()}finally{S=ut}},e.unstable_requestPaint=function(){U=!0},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var ut=S;S=C;try{return P()}finally{S=ut}},e.unstable_scheduleCallback=function(C,P,ut){var St=e.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?St+ut:St):ut=St,C){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ut+k,C={id:y++,callback:P,priorityLevel:C,startTime:ut,expirationTime:k,sortIndex:-1},ut>St?(C.sortIndex=ut,i(h,C),r(g)===null&&C===r(h)&&(z?(X(J),J=-1):z=!0,F(tt,ut-St))):(C.sortIndex=k,i(g,C),D||x||(D=!0,H||(H=!0,W()))),C},e.unstable_shouldYield=gt,e.unstable_wrapCallback=function(C){var P=S;return function(){var ut=S;S=P;try{return C.apply(this,arguments)}finally{S=ut}}}})(es)),es}var rm;function Mb(){return rm||(rm=1,ns.exports=Db()),ns.exports}var as={exports:{}},yn={};var um;function Rb(){if(um)return yn;um=1;var e=Us();function i(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(g,h,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:g,containerInfo:h,implementation:y}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,yn.createPortal=function(g,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return f(g,h,null,y)},yn.flushSync=function(g){var h=d.T,y=u.p;try{if(d.T=null,u.p=2,g)return g()}finally{d.T=h,u.p=y,u.d.f()}},yn.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(g,h))},yn.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},yn.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?u.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:x}):y==="script"&&u.d.X(g,{crossOrigin:b,integrity:S,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},yn.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=p(h.as,h.crossOrigin);u.d.M(g,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(g)},yn.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin);u.d.L(g,y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},yn.preloadModule=function(g,h){if(typeof g=="string")if(h){var y=p(h.as,h.crossOrigin);u.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(g)},yn.requestFormReset=function(g){u.d.r(g)},yn.unstable_batchedUpdates=function(g,h){return g(h)},yn.useFormState=function(g,h,y){return d.H.useFormState(g,h,y)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.2.4",yn}var om;function Nb(){if(om)return as.exports;om=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),as.exports=Rb(),as.exports}var cm;function jb(){if(cm)return wi;cm=1;var e=Mb(),i=Us(),r=Nb();function u(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(u(188))}function h(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(u(188));return n!==t?null:t}for(var a=t,l=n;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(l=o.return,l!==null){a=l;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return g(o),t;if(c===l)return g(o),n;c=c.sibling}throw Error(u(188))}if(a.return!==l.return)a=o,l=c;else{for(var m=!1,v=o.child;v;){if(v===a){m=!0,a=o,l=c;break}if(v===l){m=!0,l=o,a=c;break}v=v.sibling}if(!m){for(v=c.child;v;){if(v===a){m=!0,a=c,l=o;break}if(v===l){m=!0,l=c,a=o;break}v=v.sibling}if(!m)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),q=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),gt=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=nt&&t[nt]||t["@@iterator"],typeof t=="function"?t:null)}var Ot=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case N:return"Profiler";case U:return"StrictMode";case tt:return"Suspense";case H:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case q:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case at:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return n=t.displayName||null,n!==null?n:rt(t.type)||"Memo";case ot:n=t._payload,t=t._init;try{return rt(t(n))}catch{}}return null}var F=Array.isArray,C=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},St=[],k=-1;function O(t){return{current:t}}function G(t){0>k||(t.current=St[k],St[k]=null,k--)}function E(t,n){k++,St[k]=t.current,t.current=n}var $=O(null),ht=O(null),st=O(null),At=O(null);function Pt(t,n){switch(E(st,n),E(ht,t),E($,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Tp(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Tp(n),t=Op(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G($),E($,t)}function Lt(){G($),G(ht),G(st)}function Qn(t){t.memoizedState!==null&&E(At,t);var n=$.current,a=Op(n,t.type);n!==a&&(E(ht,t),E($,a))}function ve(t){ht.current===t&&(G($),G(ht)),At.current===t&&(G(At),Ti._currentValue=ut)}var jl,Zi;function xe(t){if(jl===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jl=n&&n[1]||"",Zi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jl+t+Zi}var Ba=!1;function Ha(t,n){if(!t||Ba)return"";Ba=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(B){var j=B}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(B){j=B}t.call(Z.prototype)}}else{try{throw Error()}catch(B){j=B}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(B){if(B&&j&&typeof B.stack=="string")return[B.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),m=c[0],v=c[1];if(m&&v){var T=m.split(`
`),R=v.split(`
`);for(o=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;if(l===T.length||o===R.length)for(l=T.length-1,o=R.length-1;1<=l&&0<=o&&T[l]!==R[o];)o--;for(;1<=l&&0<=o;l--,o--)if(T[l]!==R[o]){if(l!==1||o!==1)do if(l--,o--,0>o||T[l]!==R[o]){var Y=`
`+T[l].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=l&&0<=o);break}}}finally{Ba=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xe(a):""}function Pi(t,n){switch(t.tag){case 26:case 27:case 5:return xe(t.type);case 16:return xe("Lazy");case 13:return t.child!==n&&n!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return Ha(t.type,!1);case 11:return Ha(t.type.render,!1);case 1:return Ha(t.type,!0);case 31:return xe("Activity");default:return""}}function Ki(t){try{var n="",a=null;do n+=Pi(t,a),a=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qa=Object.prototype.hasOwnProperty,Ya=e.unstable_scheduleCallback,Ul=e.unstable_cancelCallback,Uu=e.unstable_shouldYield,Lu=e.unstable_requestPaint,vn=e.unstable_now,Bu=e.unstable_getCurrentPriorityLevel,V=e.unstable_ImmediatePriority,I=e.unstable_UserBlockingPriority,pt=e.unstable_NormalPriority,Et=e.unstable_LowPriority,Nt=e.unstable_IdlePriority,Rn=e.log,Se=e.unstable_setDisableYieldValue,xn=null,un=null;function En(t){if(typeof Rn=="function"&&Se(t),un&&typeof un.setStrictMode=="function")try{un.setStrictMode(xn,t)}catch{}}var Yt=Math.clz32?Math.clz32:p0,Ve=Math.log,ae=Math.LN2;function p0(t){return t>>>=0,t===0?32:31-(Ve(t)/ae|0)|0}var Ji=256,Fi=262144,Ii=4194304;function va(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $i(t,n,a){var l=t.pendingLanes;if(l===0)return 0;var o=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var v=l&134217727;return v!==0?(l=v&~c,l!==0?o=va(l):(m&=v,m!==0?o=va(m):a||(a=v&~t,a!==0&&(o=va(a))))):(v=l&~c,v!==0?o=va(v):m!==0?o=va(m):a||(a=l&~t,a!==0&&(o=va(a)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:o}function Ll(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function m0(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(){var t=Ii;return Ii<<=1,(Ii&62914560)===0&&(Ii=4194304),t}function Hu(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bl(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function g0(t,n,a,l,o,c){var m=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var v=t.entanglements,T=t.expirationTimes,R=t.hiddenUpdates;for(a=m&~a;0<a;){var Y=31-Yt(a),Z=1<<Y;v[Y]=0,T[Y]=-1;var j=R[Y];if(j!==null)for(R[Y]=null,Y=0;Y<j.length;Y++){var B=j[Y];B!==null&&(B.lane&=-536870913)}a&=~Z}l!==0&&rf(t,l,0),c!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~n))}function rf(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Yt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function uf(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-Yt(a),o=1<<l;o&n|t[l]&n&&(t[l]|=n),a&=~o}}function of(t,n){var a=n&-n;return a=(a&42)!==0?1:qu(a),(a&(t.suspendedLanes|n))!==0?0:a}function qu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function cf(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:Kp(t.type))}function sf(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var Qe=Math.random().toString(36).slice(2),dn="__reactFiber$"+Qe,kn="__reactProps$"+Qe,Xa="__reactContainer$"+Qe,Xu="__reactEvents$"+Qe,y0="__reactListeners$"+Qe,b0="__reactHandles$"+Qe,ff="__reactResources$"+Qe,Hl="__reactMarker$"+Qe;function Gu(t){delete t[dn],delete t[kn],delete t[Xu],delete t[y0],delete t[b0]}function Ga(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xa]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Mp(t);t!==null;){if(a=t[dn])return a;t=Mp(t)}return n}t=a,a=t.parentNode}return null}function Va(t){if(t=t[dn]||t[Xa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ql(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(u(33))}function Qa(t){var n=t[ff];return n||(n=t[ff]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(t){t[Hl]=!0}var df=new Set,hf={};function xa(t,n){Za(t,n),Za(t+"Capture",n)}function Za(t,n){for(hf[t]=n,t=0;t<n.length;t++)df.add(n[t])}var v0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pf={},mf={};function x0(t){return qa.call(mf,t)?!0:qa.call(pf,t)?!1:v0.test(t)?mf[t]=!0:(pf[t]=!0,!1)}function Wi(t,n,a){if(x0(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function tr(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ee(t,n,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+l)}}function Zn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gf(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function S0(t,n,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,c=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return o.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vu(t){if(!t._valueTracker){var n=gf(t)?"checked":"value";t._valueTracker=S0(t,n,""+t[n])}}function yf(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=gf(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function nr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var E0=/[\n"\\]/g;function Pn(t){return t.replace(E0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Qu(t,n,a,l,o,c,m,v){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zn(n)):t.value!==""+Zn(n)&&(t.value=""+Zn(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?Zu(t,m,Zn(n)):a!=null?Zu(t,m,Zn(a)):l!=null&&t.removeAttribute("value"),o==null&&c!=null&&(t.defaultChecked=!!c),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Zn(v):t.removeAttribute("name")}function bf(t,n,a,l,o,c,m,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Vu(t);return}a=a!=null?""+Zn(a):"",n=n!=null?""+Zn(n):a,v||n===t.value||(t.value=n),t.defaultValue=n}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=v?t.checked:!!l,t.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Vu(t)}function Zu(t,n,a){n==="number"&&nr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Pa(t,n,a,l){if(t=t.options,n){n={};for(var o=0;o<a.length;o++)n["$"+a[o]]=!0;for(a=0;a<t.length;a++)o=n.hasOwnProperty("$"+t[a].value),t[a].selected!==o&&(t[a].selected=o),o&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Zn(a),n=null,o=0;o<t.length;o++){if(t[o].value===a){t[o].selected=!0,l&&(t[o].defaultSelected=!0);return}n!==null||t[o].disabled||(n=t[o])}n!==null&&(n.selected=!0)}}function vf(t,n,a){if(n!=null&&(n=""+Zn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zn(a):""}function xf(t,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(u(92));if(F(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Zn(n),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Vu(t)}function Ka(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sf(t,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,a):typeof a!="number"||a===0||k0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ef(t,n,a){if(n!=null&&typeof n!="object")throw Error(u(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var o in n)l=n[o],n.hasOwnProperty(o)&&a[o]!==l&&Sf(t,o,l)}else for(var c in n)n.hasOwnProperty(c)&&Sf(t,c,n[c])}function Pu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(t){return O0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ke(){}var Ku=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ja=null,Fa=null;function kf(t){var n=Va(t);if(n&&(t=n.stateNode)){var a=t[kn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Qu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var o=l[kn]||null;if(!o)throw Error(u(90));Qu(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===t.form&&yf(l)}break t;case"textarea":vf(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Pa(t,!!a.multiple,n,!1)}}}var Fu=!1;function Tf(t,n,a){if(Fu)return t(n,a);Fu=!0;try{var l=t(n);return l}finally{if(Fu=!1,(Ja!==null||Fa!==null)&&(Gr(),Ja&&(n=Ja,t=Fa,Fa=Ja=null,kf(n),t)))for(n=0;n<t.length;n++)kf(t[n])}}function Yl(t,n){var a=t.stateNode;if(a===null)return null;var l=a[kn]||null;if(l===null)return null;a=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(u(231,n,typeof a));return a}var Te=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(Te)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{Iu=!1}var Ze=null,$u=null,ar=null;function Of(){if(ar)return ar;var t,n=$u,a=n.length,l,o="value"in Ze?Ze.value:Ze.textContent,c=o.length;for(t=0;t<a&&n[t]===o[t];t++);var m=a-t;for(l=1;l<=m&&n[a-l]===o[c-l];l++);return ar=o.slice(t,1<l?1-l:void 0)}function lr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ir(){return!0}function Af(){return!1}function Tn(t){function n(a,l,o,c,m){this._reactName=a,this._targetInst=o,this.type=l,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(a=t[v],this[v]=a?a(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ir:Af,this.isPropagationStopped=Af,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),n}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=Tn(Sa),Gl=b({},Sa,{view:0,detail:0}),A0=Tn(Gl),Wu,to,Vl,ur=b({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vl&&(Vl&&t.type==="mousemove"?(Wu=t.screenX-Vl.screenX,to=t.screenY-Vl.screenY):to=Wu=0,Vl=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:to}}),zf=Tn(ur),z0=b({},ur,{dataTransfer:0}),C0=Tn(z0),w0=b({},Gl,{relatedTarget:0}),no=Tn(w0),_0=b({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=Tn(_0),M0=b({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R0=Tn(M0),N0=b({},Sa,{data:0}),Cf=Tn(N0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=L0[t])?!!n[t]:!1}function eo(){return B0}var H0=b({},Gl,{key:function(t){if(t.key){var n=j0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=lr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(t){return t.type==="keypress"?lr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q0=Tn(H0),Y0=b({},ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Tn(Y0),X0=b({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),G0=Tn(X0),V0=b({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=Tn(V0),Z0=b({},ur,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=Tn(Z0),K0=b({},Sa,{newState:0,oldState:0}),J0=Tn(K0),F0=[9,13,27,32],ao=Te&&"CompositionEvent"in window,Ql=null;Te&&"documentMode"in document&&(Ql=document.documentMode);var I0=Te&&"TextEvent"in window&&!Ql,_f=Te&&(!ao||Ql&&8<Ql&&11>=Ql),Df=" ",Mf=!1;function Rf(t,n){switch(t){case"keyup":return F0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ia=!1;function $0(t,n){switch(t){case"compositionend":return Nf(n);case"keypress":return n.which!==32?null:(Mf=!0,Df);case"textInput":return t=n.data,t===Df&&Mf?null:t;default:return null}}function W0(t,n){if(Ia)return t==="compositionend"||!ao&&Rf(t,n)?(t=Of(),ar=$u=Ze=null,Ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _f&&n.locale!=="ko"?null:n.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ty[t.type]:n==="textarea"}function Uf(t,n,a,l){Ja?Fa?Fa.push(l):Fa=[l]:Ja=l,n=Fr(n,"onChange"),0<n.length&&(a=new rr("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var Zl=null,Pl=null;function ny(t){bp(t,0)}function or(t){var n=ql(t);if(yf(n))return t}function Lf(t,n){if(t==="change")return n}var Bf=!1;if(Te){var lo;if(Te){var io="oninput"in document;if(!io){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),io=typeof Hf.oninput=="function"}lo=io}else lo=!1;Bf=lo&&(!document.documentMode||9<document.documentMode)}function qf(){Zl&&(Zl.detachEvent("onpropertychange",Yf),Pl=Zl=null)}function Yf(t){if(t.propertyName==="value"&&or(Pl)){var n=[];Uf(n,Pl,t,Ju(t)),Tf(ny,n)}}function ey(t,n,a){t==="focusin"?(qf(),Zl=n,Pl=a,Zl.attachEvent("onpropertychange",Yf)):t==="focusout"&&qf()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return or(Pl)}function ly(t,n){if(t==="click")return or(n)}function iy(t,n){if(t==="input"||t==="change")return or(n)}function ry(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Nn=typeof Object.is=="function"?Object.is:ry;function Kl(t,n){if(Nn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var o=a[l];if(!qa.call(n,o)||!Nn(t[o],n[o]))return!1}return!0}function Xf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gf(t,n){var a=Xf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xf(a)}}function Vf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nr(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nr(t.document)}return n}function ro(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var uy=Te&&"documentMode"in document&&11>=document.documentMode,$a=null,uo=null,Jl=null,oo=!1;function Zf(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oo||$a==null||$a!==nr(l)||(l=$a,"selectionStart"in l&&ro(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jl&&Kl(Jl,l)||(Jl=l,l=Fr(uo,"onSelect"),0<l.length&&(n=new rr("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=$a)))}function Ea(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Wa={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},co={},Pf={};Te&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ka(t){if(co[t])return co[t];if(!Wa[t])return t;var n=Wa[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pf)return co[t]=n[a];return t}var Kf=ka("animationend"),Jf=ka("animationiteration"),Ff=ka("animationstart"),oy=ka("transitionrun"),cy=ka("transitionstart"),sy=ka("transitioncancel"),If=ka("transitionend"),$f=new Map,so="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");so.push("scrollEnd");function le(t,n){$f.set(t,n),xa(n,[t])}var cr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Kn=[],tl=0,fo=0;function sr(){for(var t=tl,n=fo=tl=0;n<t;){var a=Kn[n];Kn[n++]=null;var l=Kn[n];Kn[n++]=null;var o=Kn[n];Kn[n++]=null;var c=Kn[n];if(Kn[n++]=null,l!==null&&o!==null){var m=l.pending;m===null?o.next=o:(o.next=m.next,m.next=o),l.pending=o}c!==0&&Wf(a,o,c)}}function fr(t,n,a,l){Kn[tl++]=t,Kn[tl++]=n,Kn[tl++]=a,Kn[tl++]=l,fo|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ho(t,n,a,l){return fr(t,n,a,l),dr(t)}function Ta(t,n){return fr(t,null,null,n),dr(t)}function Wf(t,n,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var o=!1,c=t.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(o=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,o&&n!==null&&(o=31-Yt(a),t=c.hiddenUpdates,l=t[o],l===null?t[o]=[n]:l.push(n),n.lane=a|536870912),c):null}function dr(t){if(50<yi)throw yi=0,Ec=null,Error(u(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var nl={};function fy(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,l){return new fy(t,n,a,l)}function po(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oe(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function td(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hr(t,n,a,l,o,c){var m=0;if(l=t,typeof t=="function")po(t)&&(m=1);else if(typeof t=="string")m=gb(t,a,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=jn(31,a,n,o),t.elementType=lt,t.lanes=c,t;case z:return Oa(a.children,o,c,n);case U:m=8,o|=24;break;case N:return t=jn(12,a,n,o|2),t.elementType=N,t.lanes=c,t;case tt:return t=jn(13,a,n,o),t.elementType=tt,t.lanes=c,t;case H:return t=jn(19,a,n,o),t.elementType=H,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:m=10;break t;case X:m=9;break t;case at:m=11;break t;case J:m=14;break t;case ot:m=16,l=null;break t}m=29,a=Error(u(130,t===null?"null":typeof t,"")),l=null}return n=jn(m,a,n,o),n.elementType=t,n.type=l,n.lanes=c,n}function Oa(t,n,a,l){return t=jn(7,t,l,n),t.lanes=a,t}function mo(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function nd(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function go(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ed=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=ed.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ki(n)},ed.set(t,n),n)}return{value:t,source:n,stack:Ki(n)}}var el=[],al=0,pr=null,Fl=0,Fn=[],In=0,Pe=null,fe=1,de="";function Ae(t,n){el[al++]=Fl,el[al++]=pr,pr=t,Fl=n}function ad(t,n,a){Fn[In++]=fe,Fn[In++]=de,Fn[In++]=Pe,Pe=t;var l=fe;t=de;var o=32-Yt(l)-1;l&=~(1<<o),a+=1;var c=32-Yt(n)+o;if(30<c){var m=o-o%5;c=(l&(1<<m)-1).toString(32),l>>=m,o-=m,fe=1<<32-Yt(n)+o|a<<o|l,de=c+t}else fe=1<<c|a<<o|l,de=t}function yo(t){t.return!==null&&(Ae(t,1),ad(t,1,0))}function bo(t){for(;t===pr;)pr=el[--al],el[al]=null,Fl=el[--al],el[al]=null;for(;t===Pe;)Pe=Fn[--In],Fn[In]=null,de=Fn[--In],Fn[In]=null,fe=Fn[--In],Fn[In]=null}function ld(t,n){Fn[In++]=fe,Fn[In++]=de,Fn[In++]=Pe,fe=n.id,de=n.overflow,Pe=t}var hn=null,Qt=null,wt=!1,Ke=null,$n=!1,vo=Error(u(519));function Je(t){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(Jn(n,t)),vo}function id(t){var n=t.stateNode,a=t.type,l=t.memoizedProps;switch(n[dn]=t,n[kn]=l,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<vi.length;a++)Tt(vi[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),bf(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),xf(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Ep(n.textContent,a)?(l.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),l.onScroll!=null&&Tt("scroll",n),l.onScrollEnd!=null&&Tt("scrollend",n),l.onClick!=null&&(n.onclick=ke),n=!0):n=!1,n||Je(t,!0)}function rd(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:hn=hn.return}}function ll(t){if(t!==hn)return!1;if(!wt)return rd(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lc(t.type,t.memoizedProps)),a=!a),a&&Qt&&Je(t),rd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));Qt=Dp(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));Qt=Dp(t)}else n===27?(n=Qt,ca(t.type)?(t=Xc,Xc=null,Qt=t):Qt=n):Qt=hn?te(t.stateNode.nextSibling):null;return!0}function Aa(){Qt=hn=null,wt=!1}function xo(){var t=Ke;return t!==null&&(Cn===null?Cn=t:Cn.push.apply(Cn,t),Ke=null),t}function Il(t){Ke===null?Ke=[t]:Ke.push(t)}var So=O(null),za=null,ze=null;function Fe(t,n,a){E(So,n._currentValue),n._currentValue=a}function Ce(t){t._currentValue=So.current,G(So)}function Eo(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function ko(t,n,a,l){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){var m=o.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=o;for(var T=0;T<n.length;T++)if(v.context===n[T]){c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),Eo(c.return,a,t),l||(m=null);break t}c=v.next}}else if(o.tag===18){if(m=o.return,m===null)throw Error(u(341));m.lanes|=a,c=m.alternate,c!==null&&(c.lanes|=a),Eo(m,a,t),m=null}else m=o.child;if(m!==null)m.return=o;else for(m=o;m!==null;){if(m===t){m=null;break}if(o=m.sibling,o!==null){o.return=m.return,m=o;break}m=m.return}o=m}}function il(t,n,a,l){t=null;for(var o=n,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var m=o.alternate;if(m===null)throw Error(u(387));if(m=m.memoizedProps,m!==null){var v=o.type;Nn(o.pendingProps.value,m.value)||(t!==null?t.push(v):t=[v])}}else if(o===At.current){if(m=o.alternate,m===null)throw Error(u(387));m.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(Ti):t=[Ti])}o=o.return}t!==null&&ko(n,t,a,l),n.flags|=262144}function mr(t){for(t=t.firstContext;t!==null;){if(!Nn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ca(t){za=t,ze=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pn(t){return ud(za,t)}function gr(t,n){return za===null&&Ca(t),ud(t,n)}function ud(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ze===null){if(t===null)throw Error(u(308));ze=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ze=ze.next=n;return a}var dy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hy=e.unstable_scheduleCallback,py=e.unstable_NormalPriority,nn={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function To(){return{controller:new dy,data:new Map,refCount:0}}function $l(t){t.refCount--,t.refCount===0&&hy(py,function(){t.controller.abort()})}var Wl=null,Oo=0,rl=0,ul=null;function my(t,n){if(Wl===null){var a=Wl=[];Oo=0,rl=Cc(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Oo++,n.then(od,od),n}function od(){if(--Oo===0&&Wl!==null){ul!==null&&(ul.status="fulfilled");var t=Wl;Wl=null,rl=0,ul=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function gy(t,n){var a=[],l={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var o=0;o<a.length;o++)(0,a[o])(n)},function(o){for(l.status="rejected",l.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),l}var cd=C.S;C.S=function(t,n){Zh=vn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&my(t,n),cd!==null&&cd(t,n)};var wa=O(null);function Ao(){var t=wa.current;return t!==null?t:Xt.pooledCache}function yr(t,n){n===null?E(wa,wa.current):E(wa,n.pool)}function sd(){var t=Ao();return t===null?null:{parent:nn._currentValue,pool:t}}var ol=Error(u(460)),zo=Error(u(474)),br=Error(u(542)),vr={then:function(){}};function fd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ke,ke),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pd(t),t;default:if(typeof n.status=="string")n.then(ke,ke);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=l}},function(l){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pd(t),t}throw Da=n,ol}}function _a(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Da=a,ol):a}}var Da=null;function hd(){if(Da===null)throw Error(u(459));var t=Da;return Da=null,t}function pd(t){if(t===ol||t===br)throw Error(u(483))}var cl=null,ti=0;function xr(t){var n=ti;return ti+=1,cl===null&&(cl=[]),dd(cl,t,n)}function ni(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sr(t,n){throw n.$$typeof===S?Error(u(525)):(t=Object.prototype.toString.call(n),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function md(t){function n(w,A){if(t){var M=w.deletions;M===null?(w.deletions=[A],w.flags|=16):M.push(A)}}function a(w,A){if(!t)return null;for(;A!==null;)n(w,A),A=A.sibling;return null}function l(w){for(var A=new Map;w!==null;)w.key!==null?A.set(w.key,w):A.set(w.index,w),w=w.sibling;return A}function o(w,A){return w=Oe(w,A),w.index=0,w.sibling=null,w}function c(w,A,M){return w.index=M,t?(M=w.alternate,M!==null?(M=M.index,M<A?(w.flags|=67108866,A):M):(w.flags|=67108866,A)):(w.flags|=1048576,A)}function m(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function v(w,A,M,Q){return A===null||A.tag!==6?(A=mo(M,w.mode,Q),A.return=w,A):(A=o(A,M),A.return=w,A)}function T(w,A,M,Q){var ft=M.type;return ft===z?Y(w,A,M.props.children,Q,M.key):A!==null&&(A.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===ot&&_a(ft)===A.type)?(A=o(A,M.props),ni(A,M),A.return=w,A):(A=hr(M.type,M.key,M.props,null,w.mode,Q),ni(A,M),A.return=w,A)}function R(w,A,M,Q){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=go(M,w.mode,Q),A.return=w,A):(A=o(A,M.children||[]),A.return=w,A)}function Y(w,A,M,Q,ft){return A===null||A.tag!==7?(A=Oa(M,w.mode,Q,ft),A.return=w,A):(A=o(A,M),A.return=w,A)}function Z(w,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=mo(""+A,w.mode,M),A.return=w,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return M=hr(A.type,A.key,A.props,null,w.mode,M),ni(M,A),M.return=w,M;case D:return A=go(A,w.mode,M),A.return=w,A;case ot:return A=_a(A),Z(w,A,M)}if(F(A)||W(A))return A=Oa(A,w.mode,M,null),A.return=w,A;if(typeof A.then=="function")return Z(w,xr(A),M);if(A.$$typeof===q)return Z(w,gr(w,A),M);Sr(w,A)}return null}function j(w,A,M,Q){var ft=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ft!==null?null:v(w,A,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case x:return M.key===ft?T(w,A,M,Q):null;case D:return M.key===ft?R(w,A,M,Q):null;case ot:return M=_a(M),j(w,A,M,Q)}if(F(M)||W(M))return ft!==null?null:Y(w,A,M,Q,null);if(typeof M.then=="function")return j(w,A,xr(M),Q);if(M.$$typeof===q)return j(w,A,gr(w,M),Q);Sr(w,M)}return null}function B(w,A,M,Q,ft){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return w=w.get(M)||null,v(A,w,""+Q,ft);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return w=w.get(Q.key===null?M:Q.key)||null,T(A,w,Q,ft);case D:return w=w.get(Q.key===null?M:Q.key)||null,R(A,w,Q,ft);case ot:return Q=_a(Q),B(w,A,M,Q,ft)}if(F(Q)||W(Q))return w=w.get(M)||null,Y(A,w,Q,ft,null);if(typeof Q.then=="function")return B(w,A,M,xr(Q),ft);if(Q.$$typeof===q)return B(w,A,M,gr(A,Q),ft);Sr(A,Q)}return null}function et(w,A,M,Q){for(var ft=null,_t=null,it=A,vt=A=0,Ct=null;it!==null&&vt<M.length;vt++){it.index>vt?(Ct=it,it=null):Ct=it.sibling;var Dt=j(w,it,M[vt],Q);if(Dt===null){it===null&&(it=Ct);break}t&&it&&Dt.alternate===null&&n(w,it),A=c(Dt,A,vt),_t===null?ft=Dt:_t.sibling=Dt,_t=Dt,it=Ct}if(vt===M.length)return a(w,it),wt&&Ae(w,vt),ft;if(it===null){for(;vt<M.length;vt++)it=Z(w,M[vt],Q),it!==null&&(A=c(it,A,vt),_t===null?ft=it:_t.sibling=it,_t=it);return wt&&Ae(w,vt),ft}for(it=l(it);vt<M.length;vt++)Ct=B(it,w,vt,M[vt],Q),Ct!==null&&(t&&Ct.alternate!==null&&it.delete(Ct.key===null?vt:Ct.key),A=c(Ct,A,vt),_t===null?ft=Ct:_t.sibling=Ct,_t=Ct);return t&&it.forEach(function(pa){return n(w,pa)}),wt&&Ae(w,vt),ft}function dt(w,A,M,Q){if(M==null)throw Error(u(151));for(var ft=null,_t=null,it=A,vt=A=0,Ct=null,Dt=M.next();it!==null&&!Dt.done;vt++,Dt=M.next()){it.index>vt?(Ct=it,it=null):Ct=it.sibling;var pa=j(w,it,Dt.value,Q);if(pa===null){it===null&&(it=Ct);break}t&&it&&pa.alternate===null&&n(w,it),A=c(pa,A,vt),_t===null?ft=pa:_t.sibling=pa,_t=pa,it=Ct}if(Dt.done)return a(w,it),wt&&Ae(w,vt),ft;if(it===null){for(;!Dt.done;vt++,Dt=M.next())Dt=Z(w,Dt.value,Q),Dt!==null&&(A=c(Dt,A,vt),_t===null?ft=Dt:_t.sibling=Dt,_t=Dt);return wt&&Ae(w,vt),ft}for(it=l(it);!Dt.done;vt++,Dt=M.next())Dt=B(it,w,vt,Dt.value,Q),Dt!==null&&(t&&Dt.alternate!==null&&it.delete(Dt.key===null?vt:Dt.key),A=c(Dt,A,vt),_t===null?ft=Dt:_t.sibling=Dt,_t=Dt);return t&&it.forEach(function(zb){return n(w,zb)}),wt&&Ae(w,vt),ft}function qt(w,A,M,Q){if(typeof M=="object"&&M!==null&&M.type===z&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case x:t:{for(var ft=M.key;A!==null;){if(A.key===ft){if(ft=M.type,ft===z){if(A.tag===7){a(w,A.sibling),Q=o(A,M.props.children),Q.return=w,w=Q;break t}}else if(A.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===ot&&_a(ft)===A.type){a(w,A.sibling),Q=o(A,M.props),ni(Q,M),Q.return=w,w=Q;break t}a(w,A);break}else n(w,A);A=A.sibling}M.type===z?(Q=Oa(M.props.children,w.mode,Q,M.key),Q.return=w,w=Q):(Q=hr(M.type,M.key,M.props,null,w.mode,Q),ni(Q,M),Q.return=w,w=Q)}return m(w);case D:t:{for(ft=M.key;A!==null;){if(A.key===ft)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){a(w,A.sibling),Q=o(A,M.children||[]),Q.return=w,w=Q;break t}else{a(w,A);break}else n(w,A);A=A.sibling}Q=go(M,w.mode,Q),Q.return=w,w=Q}return m(w);case ot:return M=_a(M),qt(w,A,M,Q)}if(F(M))return et(w,A,M,Q);if(W(M)){if(ft=W(M),typeof ft!="function")throw Error(u(150));return M=ft.call(M),dt(w,A,M,Q)}if(typeof M.then=="function")return qt(w,A,xr(M),Q);if(M.$$typeof===q)return qt(w,A,gr(w,M),Q);Sr(w,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(a(w,A.sibling),Q=o(A,M),Q.return=w,w=Q):(a(w,A),Q=mo(M,w.mode,Q),Q.return=w,w=Q),m(w)):a(w,A)}return function(w,A,M,Q){try{ti=0;var ft=qt(w,A,M,Q);return cl=null,ft}catch(it){if(it===ol||it===br)throw it;var _t=jn(29,it,null,w.mode);return _t.lanes=Q,_t.return=w,_t}}}var Ma=md(!0),gd=md(!1),Ie=!1;function Co(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wo(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $e(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function We(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var o=l.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n,n=dr(t),Wf(t,null,a),n}return fr(t,l,n,a),dr(t)}function ei(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,uf(t,a)}}function _o(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=m:c=c.next=m,a=a.next}while(a!==null);c===null?o=c=n:c=c.next=n}else o=c=n;a={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Do=!1;function ai(){if(Do){var t=ul;if(t!==null)throw t}}function li(t,n,a,l){Do=!1;var o=t.updateQueue;Ie=!1;var c=o.firstBaseUpdate,m=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var T=v,R=T.next;T.next=null,m===null?c=R:m.next=R,m=T;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,v=Y.lastBaseUpdate,v!==m&&(v===null?Y.firstBaseUpdate=R:v.next=R,Y.lastBaseUpdate=T))}if(c!==null){var Z=o.baseState;m=0,Y=R=T=null,v=c;do{var j=v.lane&-536870913,B=j!==v.lane;if(B?(zt&j)===j:(l&j)===j){j!==0&&j===rl&&(Do=!0),Y!==null&&(Y=Y.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var et=t,dt=v;j=n;var qt=a;switch(dt.tag){case 1:if(et=dt.payload,typeof et=="function"){Z=et.call(qt,Z,j);break t}Z=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=dt.payload,j=typeof et=="function"?et.call(qt,Z,j):et,j==null)break t;Z=b({},Z,j);break t;case 2:Ie=!0}}j=v.callback,j!==null&&(t.flags|=64,B&&(t.flags|=8192),B=o.callbacks,B===null?o.callbacks=[j]:B.push(j))}else B={lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null},Y===null?(R=Y=B,T=Z):Y=Y.next=B,m|=j;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;B=v,v=B.next,B.next=null,o.lastBaseUpdate=B,o.shared.pending=null}}while(!0);Y===null&&(T=Z),o.baseState=T,o.firstBaseUpdate=R,o.lastBaseUpdate=Y,c===null&&(o.shared.lanes=0),la|=m,t.lanes=m,t.memoizedState=Z}}function yd(t,n){if(typeof t!="function")throw Error(u(191,t));t.call(n)}function bd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yd(a[t],n)}var sl=O(null),Er=O(0);function vd(t,n){t=Le,E(Er,t),E(sl,n),Le=t|n.baseLanes}function Mo(){E(Er,Le),E(sl,sl.current)}function Ro(){Le=Er.current,G(sl),G(Er)}var Un=O(null),Wn=null;function ta(t){var n=t.alternate;E(Wt,Wt.current&1),E(Un,t),Wn===null&&(n===null||sl.current!==null||n.memoizedState!==null)&&(Wn=t)}function No(t){E(Wt,Wt.current),E(Un,t),Wn===null&&(Wn=t)}function xd(t){t.tag===22?(E(Wt,Wt.current),E(Un,t),Wn===null&&(Wn=t)):na()}function na(){E(Wt,Wt.current),E(Un,Un.current)}function Ln(t){G(Un),Wn===t&&(Wn=null),G(Wt)}var Wt=O(0);function kr(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qc(a)||Yc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var we=0,bt=null,Bt=null,en=null,Tr=!1,fl=!1,Ra=!1,Or=0,ii=0,dl=null,yy=0;function It(){throw Error(u(321))}function jo(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Nn(t[a],n[a]))return!1;return!0}function Uo(t,n,a,l,o,c){return we=c,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?ah:Io,Ra=!1,c=a(l,o),Ra=!1,fl&&(c=Ed(n,a,l,o)),Sd(t),c}function Sd(t){C.H=oi;var n=Bt!==null&&Bt.next!==null;if(we=0,en=Bt=bt=null,Tr=!1,ii=0,dl=null,n)throw Error(u(300));t===null||an||(t=t.dependencies,t!==null&&mr(t)&&(an=!0))}function Ed(t,n,a,l){bt=t;var o=0;do{if(fl&&(dl=null),ii=0,fl=!1,25<=o)throw Error(u(301));if(o+=1,en=Bt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}C.H=lh,c=n(a,l)}while(fl);return c}function by(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?ri(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(bt.flags|=1024),n}function Lo(){var t=Or!==0;return Or=0,t}function Bo(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ho(t){if(Tr){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tr=!1}we=0,en=Bt=bt=null,fl=!1,ii=Or=0,dl=null}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?bt.memoizedState=en=t:en=en.next=t,en}function tn(){if(Bt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=en===null?bt.memoizedState:en.next;if(n!==null)en=n,Bt=t;else{if(t===null)throw bt.alternate===null?Error(u(467)):Error(u(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},en===null?bt.memoizedState=en=t:en=en.next=t}return en}function Ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ri(t){var n=ii;return ii+=1,dl===null&&(dl=[]),t=dd(dl,t,n),n=bt,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?ah:Io),t}function zr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ri(t);if(t.$$typeof===q)return pn(t)}throw Error(u(438,String(t)))}function qo(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ar(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),l=0;l<t;l++)a[l]=gt;return n.index++,a}function _e(t,n){return typeof n=="function"?n(t):n}function Cr(t){var n=tn();return Yo(n,Bt,t)}function Yo(t,n,a){var l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var o=t.baseQueue,c=l.pending;if(c!==null){if(o!==null){var m=o.next;o.next=c.next,c.next=m}n.baseQueue=o=c,l.pending=null}if(c=t.baseState,o===null)t.memoizedState=c;else{n=o.next;var v=m=null,T=null,R=n,Y=!1;do{var Z=R.lane&-536870913;if(Z!==R.lane?(zt&Z)===Z:(we&Z)===Z){var j=R.revertLane;if(j===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Z===rl&&(Y=!0);else if((we&j)===j){R=R.next,j===rl&&(Y=!0);continue}else Z={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(v=T=Z,m=c):T=T.next=Z,bt.lanes|=j,la|=j;Z=R.action,Ra&&a(c,Z),c=R.hasEagerState?R.eagerState:a(c,Z)}else j={lane:Z,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(v=T=j,m=c):T=T.next=j,bt.lanes|=Z,la|=Z;R=R.next}while(R!==null&&R!==n);if(T===null?m=c:T.next=v,!Nn(c,t.memoizedState)&&(an=!0,Y&&(a=ul,a!==null)))throw a;t.memoizedState=c,t.baseState=m,t.baseQueue=T,l.lastRenderedState=c}return o===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Xo(t){var n=tn(),a=n.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var l=a.dispatch,o=a.pending,c=n.memoizedState;if(o!==null){a.pending=null;var m=o=o.next;do c=t(c,m.action),m=m.next;while(m!==o);Nn(c,n.memoizedState)||(an=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function kd(t,n,a){var l=bt,o=tn(),c=wt;if(c){if(a===void 0)throw Error(u(407));a=a()}else a=n();var m=!Nn((Bt||o).memoizedState,a);if(m&&(o.memoizedState=a,an=!0),o=o.queue,Qo(Ad.bind(null,l,o,t),[t]),o.getSnapshot!==n||m||en!==null&&en.memoizedState.tag&1){if(l.flags|=2048,hl(9,{destroy:void 0},Od.bind(null,l,o,a,n),null),Xt===null)throw Error(u(349));c||(we&127)!==0||Td(l,n,a)}return a}function Td(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=Ar(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Od(t,n,a,l){n.value=a,n.getSnapshot=l,zd(n)&&Cd(t)}function Ad(t,n,a){return a(function(){zd(n)&&Cd(t)})}function zd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Nn(t,a)}catch{return!0}}function Cd(t){var n=Ta(t,2);n!==null&&wn(n,t,2)}function Go(t){var n=Sn();if(typeof t=="function"){var a=t;if(t=a(),Ra){En(!0);try{a()}finally{En(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_e,lastRenderedState:t},n}function wd(t,n,a,l){return t.baseState=a,Yo(t,Bt,typeof l=="function"?l:_e)}function vy(t,n,a,l,o){if(Dr(t))throw Error(u(485));if(t=n.action,t!==null){var c={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};C.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,_d(n,c)):(c.next=a.next,n.pending=a.next=c)}}function _d(t,n){var a=n.action,l=n.payload,o=t.state;if(n.isTransition){var c=C.T,m={};C.T=m;try{var v=a(o,l),T=C.S;T!==null&&T(m,v),Dd(t,n,v)}catch(R){Vo(t,n,R)}finally{c!==null&&m.types!==null&&(c.types=m.types),C.T=c}}else try{c=a(o,l),Dd(t,n,c)}catch(R){Vo(t,n,R)}}function Dd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Md(t,n,l)},function(l){return Vo(t,n,l)}):Md(t,n,a)}function Md(t,n,a){n.status="fulfilled",n.value=a,Rd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_d(t,a)))}function Vo(t,n,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Rd(n),n=n.next;while(n!==l)}t.action=null}function Rd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Nd(t,n){return n}function jd(t,n){if(wt){var a=Xt.formState;if(a!==null){t:{var l=bt;if(wt){if(Qt){n:{for(var o=Qt,c=$n;o.nodeType!==8;){if(!c){o=null;break n}if(o=te(o.nextSibling),o===null){o=null;break n}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Qt=te(o.nextSibling),l=o.data==="F!";break t}}Je(l)}l=!1}l&&(n=a[0])}}return a=Sn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nd,lastRenderedState:n},a.queue=l,a=th.bind(null,bt,l),l.dispatch=a,l=Go(!1),c=Fo.bind(null,bt,!1,l.queue),l=Sn(),o={state:n,dispatch:null,action:t,pending:null},l.queue=o,a=vy.bind(null,bt,o,c,a),o.dispatch=a,l.memoizedState=t,[n,a,!1]}function Ud(t){var n=tn();return Ld(n,Bt,t)}function Ld(t,n,a){if(n=Yo(t,n,Nd)[0],t=Cr(_e)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ri(n)}catch(m){throw m===ol?br:m}else l=n;n=tn();var o=n.queue,c=o.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,hl(9,{destroy:void 0},xy.bind(null,o,a),null)),[l,c,t]}function xy(t,n){t.action=n}function Bd(t){var n=tn(),a=Bt;if(a!==null)return Ld(n,a,t);tn(),n=n.memoizedState,a=tn();var l=a.queue.dispatch;return a.memoizedState=t,[n,l,!1]}function hl(t,n,a,l){return t={tag:t,create:a,deps:l,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Ar(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t),t}function Hd(){return tn().memoizedState}function wr(t,n,a,l){var o=Sn();bt.flags|=t,o.memoizedState=hl(1|n,{destroy:void 0},a,l===void 0?null:l)}function _r(t,n,a,l){var o=tn();l=l===void 0?null:l;var c=o.memoizedState.inst;Bt!==null&&l!==null&&jo(l,Bt.memoizedState.deps)?o.memoizedState=hl(n,c,a,l):(bt.flags|=t,o.memoizedState=hl(1|n,c,a,l))}function qd(t,n){wr(8390656,8,t,n)}function Qo(t,n){_r(2048,8,t,n)}function Sy(t){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=Ar(),bt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Yd(t){var n=tn().memoizedState;return Sy({ref:n,nextImpl:t}),function(){if((Mt&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Xd(t,n){return _r(4,2,t,n)}function Gd(t,n){return _r(4,4,t,n)}function Vd(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qd(t,n,a){a=a!=null?a.concat([t]):null,_r(4,4,Vd.bind(null,n,t),a)}function Zo(){}function Zd(t,n){var a=tn();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&jo(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function Pd(t,n){var a=tn();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&jo(n,l[1]))return l[0];if(l=t(),Ra){En(!0);try{t()}finally{En(!1)}}return a.memoizedState=[l,n],l}function Po(t,n,a){return a===void 0||(we&1073741824)!==0&&(zt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Kh(),bt.lanes|=t,la|=t,a)}function Kd(t,n,a,l){return Nn(a,n)?a:sl.current!==null?(t=Po(t,a,l),Nn(t,n)||(an=!0),t):(we&42)===0||(we&1073741824)!==0&&(zt&261930)===0?(an=!0,t.memoizedState=a):(t=Kh(),bt.lanes|=t,la|=t,n)}function Jd(t,n,a,l,o){var c=P.p;P.p=c!==0&&8>c?c:8;var m=C.T,v={};C.T=v,Fo(t,!1,n,a);try{var T=o(),R=C.S;if(R!==null&&R(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var Y=gy(T,l);ui(t,n,Y,qn(t))}else ui(t,n,l,qn(t))}catch(Z){ui(t,n,{then:function(){},status:"rejected",reason:Z},qn())}finally{P.p=c,m!==null&&v.types!==null&&(m.types=v.types),C.T=m}}function Ey(){}function Ko(t,n,a,l){if(t.tag!==5)throw Error(u(476));var o=Fd(t).queue;Jd(t,o,n,ut,a===null?Ey:function(){return Id(t),a(l)})}function Fd(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_e,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_e,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Id(t){var n=Fd(t);n.next===null&&(n=t.alternate.memoizedState),ui(t,n.next.queue,{},qn())}function Jo(){return pn(Ti)}function $d(){return tn().memoizedState}function Wd(){return tn().memoizedState}function ky(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=$e(a);var l=We(n,t,a);l!==null&&(wn(l,n,a),ei(l,n,a)),n={cache:To()},t.payload=n;return}n=n.return}}function Ty(t,n,a){var l=qn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dr(t)?nh(n,a):(a=ho(t,n,a,l),a!==null&&(wn(a,t,l),eh(a,n,l)))}function th(t,n,a){var l=qn();ui(t,n,a,l)}function ui(t,n,a,l){var o={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dr(t))nh(n,o);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,v=c(m,a);if(o.hasEagerState=!0,o.eagerState=v,Nn(v,m))return fr(t,n,o,0),Xt===null&&sr(),!1}catch{}if(a=ho(t,n,o,l),a!==null)return wn(a,t,l),eh(a,n,l),!0}return!1}function Fo(t,n,a,l){if(l={lane:2,revertLane:Cc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Dr(t)){if(n)throw Error(u(479))}else n=ho(t,a,l,2),n!==null&&wn(n,t,2)}function Dr(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function nh(t,n){fl=Tr=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function eh(t,n,a){if((a&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,uf(t,a)}}var oi={readContext:pn,use:zr,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It};oi.useEffectEvent=It;var ah={readContext:pn,use:zr,useCallback:function(t,n){return Sn().memoizedState=[t,n===void 0?null:n],t},useContext:pn,useEffect:qd,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wr(4194308,4,Vd.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wr(4194308,4,t,n)},useInsertionEffect:function(t,n){wr(4,2,t,n)},useMemo:function(t,n){var a=Sn();n=n===void 0?null:n;var l=t();if(Ra){En(!0);try{t()}finally{En(!1)}}return a.memoizedState=[l,n],l},useReducer:function(t,n,a){var l=Sn();if(a!==void 0){var o=a(n);if(Ra){En(!0);try{a(n)}finally{En(!1)}}}else o=n;return l.memoizedState=l.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},l.queue=t,t=t.dispatch=Ty.bind(null,bt,t),[l.memoizedState,t]},useRef:function(t){var n=Sn();return t={current:t},n.memoizedState=t},useState:function(t){t=Go(t);var n=t.queue,a=th.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zo,useDeferredValue:function(t,n){var a=Sn();return Po(a,t,n)},useTransition:function(){var t=Go(!1);return t=Jd.bind(null,bt,t.queue,!0,!1),Sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var l=bt,o=Sn();if(wt){if(a===void 0)throw Error(u(407));a=a()}else{if(a=n(),Xt===null)throw Error(u(349));(zt&127)!==0||Td(l,n,a)}o.memoizedState=a;var c={value:a,getSnapshot:n};return o.queue=c,qd(Ad.bind(null,l,c,t),[t]),l.flags|=2048,hl(9,{destroy:void 0},Od.bind(null,l,c,a,n),null),a},useId:function(){var t=Sn(),n=Xt.identifierPrefix;if(wt){var a=de,l=fe;a=(l&~(1<<32-Yt(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Or++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Jo,useFormState:jd,useActionState:jd,useOptimistic:function(t){var n=Sn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fo.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:qo,useCacheRefresh:function(){return Sn().memoizedState=ky.bind(null,bt)},useEffectEvent:function(t){var n=Sn(),a={impl:t};return n.memoizedState=a,function(){if((Mt&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Io={readContext:pn,use:zr,useCallback:Zd,useContext:pn,useEffect:Qo,useImperativeHandle:Qd,useInsertionEffect:Xd,useLayoutEffect:Gd,useMemo:Pd,useReducer:Cr,useRef:Hd,useState:function(){return Cr(_e)},useDebugValue:Zo,useDeferredValue:function(t,n){var a=tn();return Kd(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Cr(_e)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ri(t),n]},useSyncExternalStore:kd,useId:$d,useHostTransitionStatus:Jo,useFormState:Ud,useActionState:Ud,useOptimistic:function(t,n){var a=tn();return wd(a,Bt,t,n)},useMemoCache:qo,useCacheRefresh:Wd};Io.useEffectEvent=Yd;var lh={readContext:pn,use:zr,useCallback:Zd,useContext:pn,useEffect:Qo,useImperativeHandle:Qd,useInsertionEffect:Xd,useLayoutEffect:Gd,useMemo:Pd,useReducer:Xo,useRef:Hd,useState:function(){return Xo(_e)},useDebugValue:Zo,useDeferredValue:function(t,n){var a=tn();return Bt===null?Po(a,t,n):Kd(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Xo(_e)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ri(t),n]},useSyncExternalStore:kd,useId:$d,useHostTransitionStatus:Jo,useFormState:Bd,useActionState:Bd,useOptimistic:function(t,n){var a=tn();return Bt!==null?wd(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qo,useCacheRefresh:Wd};lh.useEffectEvent=Yd;function $o(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wo={enqueueSetState:function(t,n,a){t=t._reactInternals;var l=qn(),o=$e(l);o.payload=n,a!=null&&(o.callback=a),n=We(t,o,l),n!==null&&(wn(n,t,l),ei(n,t,l))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=qn(),o=$e(l);o.tag=1,o.payload=n,a!=null&&(o.callback=a),n=We(t,o,l),n!==null&&(wn(n,t,l),ei(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),l=$e(a);l.tag=2,n!=null&&(l.callback=n),n=We(t,l,a),n!==null&&(wn(n,t,a),ei(n,t,a))}};function ih(t,n,a,l,o,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,c,m):n.prototype&&n.prototype.isPureReactComponent?!Kl(a,l)||!Kl(o,c):!0}function rh(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&Wo.enqueueReplaceState(n,n.state,null)}function Na(t,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var o in t)a[o]===void 0&&(a[o]=t[o])}return a}function uh(t){cr(t)}function oh(t){console.error(t)}function ch(t){cr(t)}function Mr(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function sh(t,n,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function tc(t,n,a){return a=$e(a),a.tag=3,a.payload={element:null},a.callback=function(){Mr(t,n)},a}function fh(t){return t=$e(t),t.tag=3,t}function dh(t,n,a,l){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=l.value;t.payload=function(){return o(c)},t.callback=function(){sh(n,a,l)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){sh(n,a,l),typeof o!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function Oy(t,n,a,l,o){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&il(n,a,o,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:return Wn===null?Vr():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=o,l===vr?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Oc(t,l,o)),!1;case 22:return a.flags|=65536,l===vr?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Oc(t,l,o)),!1}throw Error(u(435,a.tag))}return Oc(t,l,o),Vr(),!1}if(wt)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,l!==vo&&(t=Error(u(422),{cause:l}),Il(Jn(t,a)))):(l!==vo&&(n=Error(u(423),{cause:l}),Il(Jn(n,a))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,l=Jn(l,a),o=tc(t.stateNode,l,o),_o(t,o),$t!==4&&($t=2)),!1;var c=Error(u(520),{cause:l});if(c=Jn(c,a),gi===null?gi=[c]:gi.push(c),$t!==4&&($t=2),n===null)return!0;l=Jn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=o&-o,a.lanes|=t,t=tc(a.stateNode,l,t),_o(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ia===null||!ia.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=fh(o),dh(o,t,a,l),_o(a,o),!1}a=a.return}while(a!==null);return!1}var nc=Error(u(461)),an=!1;function mn(t,n,a,l){n.child=t===null?gd(n,null,a,l):Ma(n,t.child,a,l)}function hh(t,n,a,l,o){a=a.render;var c=n.ref;if("ref"in l){var m={};for(var v in l)v!=="ref"&&(m[v]=l[v])}else m=l;return Ca(n),l=Uo(t,n,a,m,c,o),v=Lo(),t!==null&&!an?(Bo(t,n,o),De(t,n,o)):(wt&&v&&yo(n),n.flags|=1,mn(t,n,l,o),n.child)}function ph(t,n,a,l,o){if(t===null){var c=a.type;return typeof c=="function"&&!po(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,mh(t,n,c,l,o)):(t=hr(a.type,null,l,n,n.mode,o),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!cc(t,o)){var m=c.memoizedProps;if(a=a.compare,a=a!==null?a:Kl,a(m,l)&&t.ref===n.ref)return De(t,n,o)}return n.flags|=1,t=Oe(c,l),t.ref=n.ref,t.return=n,n.child=t}function mh(t,n,a,l,o){if(t!==null){var c=t.memoizedProps;if(Kl(c,l)&&t.ref===n.ref)if(an=!1,n.pendingProps=l=c,cc(t,o))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,De(t,n,o)}return ec(t,n,a,l,o)}function gh(t,n,a,l){var o=l.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(l=n.child=t.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~c}else l=0,n.child=null;return yh(t,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yr(n,c!==null?c.cachePool:null),c!==null?vd(n,c):Mo(),xd(n);else return l=n.lanes=536870912,yh(t,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(yr(n,c.cachePool),vd(n,c),na(),n.memoizedState=null):(t!==null&&yr(n,null),Mo(),na());return mn(t,n,o,a),n.child}function ci(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function yh(t,n,a,l,o){var c=Ao();return c=c===null?null:{parent:nn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&yr(n,null),Mo(),xd(n),t!==null&&il(t,n,l,!0),n.childLanes=o,null}function Rr(t,n){return n=jr({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bh(t,n,a){return Ma(n,t.child,null,a),t=Rr(n,n.pendingProps),t.flags|=2,Ln(n),n.memoizedState=null,t}function Ay(t,n,a){var l=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(l.mode==="hidden")return t=Rr(n,l),n.lanes=536870912,ci(null,t);if(No(n),(t=Qt)?(t=_p(t,$n),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:fe,overflow:de}:null,retryLane:536870912,hydrationErrors:null},a=nd(t),a.return=n,n.child=a,hn=n,Qt=null)):t=null,t===null)throw Je(n);return n.lanes=536870912,null}return Rr(n,l)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(No(n),o)if(n.flags&256)n.flags&=-257,n=bh(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(u(558));else if(an||il(t,n,a,!1),o=(a&t.childLanes)!==0,an||o){if(l=Xt,l!==null&&(m=of(l,a),m!==0&&m!==c.retryLane))throw c.retryLane=m,Ta(t,m),wn(l,t,m),nc;Vr(),n=bh(t,n,a)}else t=c.treeContext,Qt=te(m.nextSibling),hn=n,wt=!0,Ke=null,$n=!1,t!==null&&ld(n,t),n=Rr(n,l),n.flags|=4096;return n}return t=Oe(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ec(t,n,a,l,o){return Ca(n),a=Uo(t,n,a,l,void 0,o),l=Lo(),t!==null&&!an?(Bo(t,n,o),De(t,n,o)):(wt&&l&&yo(n),n.flags|=1,mn(t,n,a,o),n.child)}function vh(t,n,a,l,o,c){return Ca(n),n.updateQueue=null,a=Ed(n,l,a,o),Sd(t),l=Lo(),t!==null&&!an?(Bo(t,n,c),De(t,n,c)):(wt&&l&&yo(n),n.flags|=1,mn(t,n,a,c),n.child)}function xh(t,n,a,l,o){if(Ca(n),n.stateNode===null){var c=nl,m=a.contextType;typeof m=="object"&&m!==null&&(c=pn(m)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Wo,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Co(n),m=a.contextType,c.context=typeof m=="object"&&m!==null?pn(m):nl,c.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&($o(n,a,m,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Wo.enqueueReplaceState(c,c.state,null),li(n,l,c,o),ai(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){c=n.stateNode;var v=n.memoizedProps,T=Na(a,v);c.props=T;var R=c.context,Y=a.contextType;m=nl,typeof Y=="object"&&Y!==null&&(m=pn(Y));var Z=a.getDerivedStateFromProps;Y=typeof Z=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||R!==m)&&rh(n,c,l,m),Ie=!1;var j=n.memoizedState;c.state=j,li(n,l,c,o),ai(),R=n.memoizedState,v||j!==R||Ie?(typeof Z=="function"&&($o(n,a,Z,l),R=n.memoizedState),(T=Ie||ih(n,a,T,l,j,R,m))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=R),c.props=l,c.state=R,c.context=m,l=T):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,wo(t,n),m=n.memoizedProps,Y=Na(a,m),c.props=Y,Z=n.pendingProps,j=c.context,R=a.contextType,T=nl,typeof R=="object"&&R!==null&&(T=pn(R)),v=a.getDerivedStateFromProps,(R=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==Z||j!==T)&&rh(n,c,l,T),Ie=!1,j=n.memoizedState,c.state=j,li(n,l,c,o),ai();var B=n.memoizedState;m!==Z||j!==B||Ie||t!==null&&t.dependencies!==null&&mr(t.dependencies)?(typeof v=="function"&&($o(n,a,v,l),B=n.memoizedState),(Y=Ie||ih(n,a,Y,l,j,B,T)||t!==null&&t.dependencies!==null&&mr(t.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,B,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,B,T)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=B),c.props=l,c.state=B,c.context=T,l=Y):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),l=!1)}return c=l,Nr(t,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&l?(n.child=Ma(n,t.child,null,o),n.child=Ma(n,null,a,o)):mn(t,n,a,o),n.memoizedState=c.state,t=n.child):t=De(t,n,o),t}function Sh(t,n,a,l){return Aa(),n.flags|=256,mn(t,n,a,l),n.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(t){return{baseLanes:t,cachePool:sd()}}function ic(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Hn),t}function Eh(t,n,a){var l=n.pendingProps,o=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(Wt.current&2)!==0),m&&(o=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(o?ta(n):na(),(t=Qt)?(t=_p(t,$n),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:fe,overflow:de}:null,retryLane:536870912,hydrationErrors:null},a=nd(t),a.return=n,n.child=a,hn=n,Qt=null)):t=null,t===null)throw Je(n);return Yc(t)?n.lanes=32:n.lanes=536870912,null}var v=l.children;return l=l.fallback,o?(na(),o=n.mode,v=jr({mode:"hidden",children:v},o),l=Oa(l,o,a,null),v.return=n,l.return=n,v.sibling=l,n.child=v,l=n.child,l.memoizedState=lc(a),l.childLanes=ic(t,m,a),n.memoizedState=ac,ci(null,l)):(ta(n),rc(n,v))}var T=t.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(c)n.flags&256?(ta(n),n.flags&=-257,n=uc(t,n,a)):n.memoizedState!==null?(na(),n.child=t.child,n.flags|=128,n=null):(na(),v=l.fallback,o=n.mode,l=jr({mode:"visible",children:l.children},o),v=Oa(v,o,a,null),v.flags|=2,l.return=n,v.return=n,l.sibling=v,n.child=l,Ma(n,t.child,null,a),l=n.child,l.memoizedState=lc(a),l.childLanes=ic(t,m,a),n.memoizedState=ac,n=ci(null,l));else if(ta(n),Yc(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var R=m.dgst;m=R,l=Error(u(419)),l.stack="",l.digest=m,Il({value:l,source:null,stack:null}),n=uc(t,n,a)}else if(an||il(t,n,a,!1),m=(a&t.childLanes)!==0,an||m){if(m=Xt,m!==null&&(l=of(m,a),l!==0&&l!==T.retryLane))throw T.retryLane=l,Ta(t,l),wn(m,t,l),nc;qc(v)||Vr(),n=uc(t,n,a)}else qc(v)?(n.flags|=192,n.child=t.child,n=null):(t=T.treeContext,Qt=te(v.nextSibling),hn=n,wt=!0,Ke=null,$n=!1,t!==null&&ld(n,t),n=rc(n,l.children),n.flags|=4096);return n}return o?(na(),v=l.fallback,o=n.mode,T=t.child,R=T.sibling,l=Oe(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,R!==null?v=Oe(R,v):(v=Oa(v,o,a,null),v.flags|=2),v.return=n,l.return=n,l.sibling=v,n.child=l,ci(null,l),l=n.child,v=t.child.memoizedState,v===null?v=lc(a):(o=v.cachePool,o!==null?(T=nn._currentValue,o=o.parent!==T?{parent:T,pool:T}:o):o=sd(),v={baseLanes:v.baseLanes|a,cachePool:o}),l.memoizedState=v,l.childLanes=ic(t,m,a),n.memoizedState=ac,ci(t.child,l)):(ta(n),a=t.child,t=a.sibling,a=Oe(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=a,n.memoizedState=null,a)}function rc(t,n){return n=jr({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jr(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function uc(t,n,a){return Ma(n,t.child,null,a),t=rc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function kh(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Eo(t.return,n,a)}function oc(t,n,a,l,o,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:o,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=o,m.treeForkCount=c)}function Th(t,n,a){var l=n.pendingProps,o=l.revealOrder,c=l.tail;l=l.children;var m=Wt.current,v=(m&2)!==0;if(v?(m=m&1|2,n.flags|=128):m&=1,E(Wt,m),mn(t,n,l,a),l=wt?Fl:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,a,n);else if(t.tag===19)kh(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(o){case"forwards":for(a=n.child,o=null;a!==null;)t=a.alternate,t!==null&&kr(t)===null&&(o=a),a=a.sibling;a=o,a===null?(o=n.child,n.child=null):(o=a.sibling,a.sibling=null),oc(n,!1,o,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=n.child,n.child=null;o!==null;){if(t=o.alternate,t!==null&&kr(t)===null){n.child=o;break}t=o.sibling,o.sibling=a,a=o,o=t}oc(n,!0,a,null,c,l);break;case"together":oc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function De(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),la|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(il(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(u(153));if(n.child!==null){for(t=n.child,a=Oe(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oe(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&mr(t)))}function zy(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),Fe(n,nn,t.memoizedState.cache),Aa();break;case 27:case 5:Qn(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:Fe(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,No(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eh(t,n,a):(ta(n),t=De(t,n,a),t!==null?t.sibling:null);ta(n);break;case 19:var o=(t.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(il(t,n,a,!1),l=(a&n.childLanes)!==0),o){if(l)return Th(t,n,a);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),E(Wt,Wt.current),l)break;return null;case 22:return n.lanes=0,gh(t,n,a,n.pendingProps);case 24:Fe(n,nn,t.memoizedState.cache)}return De(t,n,a)}function Oh(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!cc(t,a)&&(n.flags&128)===0)return an=!1,zy(t,n,a);an=(t.flags&131072)!==0}else an=!1,wt&&(n.flags&1048576)!==0&&ad(n,Fl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(t=_a(n.elementType),n.type=t,typeof t=="function")po(t)?(l=Na(t,l),n.tag=1,n=xh(null,n,t,l,a)):(n.tag=0,n=ec(null,n,t,l,a));else{if(t!=null){var o=t.$$typeof;if(o===at){n.tag=11,n=hh(null,n,t,l,a);break t}else if(o===J){n.tag=14,n=ph(null,n,t,l,a);break t}}throw n=rt(t)||t,Error(u(306,n,""))}}return n;case 0:return ec(t,n,n.type,n.pendingProps,a);case 1:return l=n.type,o=Na(l,n.pendingProps),xh(t,n,l,o,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(u(387));l=n.pendingProps;var c=n.memoizedState;o=c.element,wo(t,n),li(n,l,null,a);var m=n.memoizedState;if(l=m.cache,Fe(n,nn,l),l!==c.cache&&ko(n,[nn],a,!0),ai(),l=m.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Sh(t,n,l,a);break t}else if(l!==o){o=Jn(Error(u(424)),n),Il(o),n=Sh(t,n,l,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qt=te(t.firstChild),hn=n,wt=!0,Ke=null,$n=!0,a=gd(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Aa(),l===o){n=De(t,n,a);break t}mn(t,n,l,a)}n=n.child}return n;case 26:return Nr(t,n),t===null?(a=Up(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,l=Ir(st.current).createElement(a),l[dn]=n,l[kn]=t,gn(l,a,t),sn(l),n.stateNode=l):n.memoizedState=Up(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qn(n),t===null&&wt&&(l=n.stateNode=Rp(n.type,n.pendingProps,st.current),hn=n,$n=!0,o=Qt,ca(n.type)?(Xc=o,Qt=te(l.firstChild)):Qt=o),mn(t,n,n.pendingProps.children,a),Nr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((o=l=Qt)&&(l=ab(l,n.type,n.pendingProps,$n),l!==null?(n.stateNode=l,hn=n,Qt=te(l.firstChild),$n=!1,o=!0):o=!1),o||Je(n)),Qn(n),o=n.type,c=n.pendingProps,m=t!==null?t.memoizedProps:null,l=c.children,Lc(o,c)?l=null:m!==null&&Lc(o,m)&&(n.flags|=32),n.memoizedState!==null&&(o=Uo(t,n,by,null,null,a),Ti._currentValue=o),Nr(t,n),mn(t,n,l,a),n.child;case 6:return t===null&&wt&&((t=a=Qt)&&(a=lb(a,n.pendingProps,$n),a!==null?(n.stateNode=a,hn=n,Qt=null,t=!0):t=!1),t||Je(n)),null;case 13:return Eh(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ma(n,null,l,a):mn(t,n,l,a),n.child;case 11:return hh(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Fe(n,n.type,l.value),mn(t,n,l.children,a),n.child;case 9:return o=n.type._context,l=n.pendingProps.children,Ca(n),o=pn(o),l=l(o),n.flags|=1,mn(t,n,l,a),n.child;case 14:return ph(t,n,n.type,n.pendingProps,a);case 15:return mh(t,n,n.type,n.pendingProps,a);case 19:return Th(t,n,a);case 31:return Ay(t,n,a);case 22:return gh(t,n,a,n.pendingProps);case 24:return Ca(n),l=pn(nn),t===null?(o=Ao(),o===null&&(o=Xt,c=To(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),n.memoizedState={parent:l,cache:o},Co(n),Fe(n,nn,o)):((t.lanes&a)!==0&&(wo(t,n),li(n,null,null,a),ai()),o=t.memoizedState,c=n.memoizedState,o.parent!==l?(o={parent:l,cache:l},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Fe(n,nn,l)):(l=c.cache,Fe(n,nn,l),l!==o.cache&&ko(n,[nn],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Me(t){t.flags|=4}function sc(t,n,a,l,o){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(o&335544128)===o)if(t.stateNode.complete)t.flags|=8192;else if($h())t.flags|=8192;else throw Da=vr,zo}else t.flags&=-16777217}function Ah(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yp(n))if($h())t.flags|=8192;else throw Da=vr,zo}function Ur(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?lf():536870912,t.lanes|=n,yl|=n)}function si(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var o=t.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function Cy(t,n,a){var l=n.pendingProps;switch(bo(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ce(nn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ll(n)?Me(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xo())),Zt(n),null;case 26:var o=n.type,c=n.memoizedState;return t===null?(Me(n),c!==null?(Zt(n),Ah(n,c)):(Zt(n),sc(n,o,null,l,a))):c?c!==t.memoizedState?(Me(n),Zt(n),Ah(n,c)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Me(n),Zt(n),sc(n,o,t,l,a)),null;case 27:if(ve(n),a=st.current,o=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Me(n);else{if(!l){if(n.stateNode===null)throw Error(u(166));return Zt(n),null}t=$.current,ll(n)?id(n):(t=Rp(o,l,a),n.stateNode=t,Me(n))}return Zt(n),null;case 5:if(ve(n),o=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Me(n);else{if(!l){if(n.stateNode===null)throw Error(u(166));return Zt(n),null}if(c=$.current,ll(n))id(n);else{var m=Ir(st.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?m.createElement(o,{is:l.is}):m.createElement(o)}}c[dn]=n,c[kn]=l;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;t:switch(gn(c,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Me(n)}}return Zt(n),sc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Me(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(u(166));if(t=st.current,ll(n)){if(t=n.stateNode,a=n.memoizedProps,l=null,o=hn,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ep(t.nodeValue,a)),t||Je(n,!0)}else t=Ir(t).createTextNode(l),t[dn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(l=ll(n),a!==null){if(t===null){if(!l)throw Error(u(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(557));t[dn]=n}else Aa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=xo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Zt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=ll(n),l!==null&&l.dehydrated!==null){if(t===null){if(!o)throw Error(u(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[dn]=n}else Aa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),o=!1}else o=xo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=n.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==o&&(l.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ur(n,n.updateQueue),Zt(n),null);case 4:return Lt(),t===null&&Mc(n.stateNode.containerInfo),Zt(n),null;case 10:return Ce(n.type),Zt(n),null;case 19:if(G(Wt),l=n.memoizedState,l===null)return Zt(n),null;if(o=(n.flags&128)!==0,c=l.rendering,c===null)if(o)si(l,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=kr(t),c!==null){for(n.flags|=128,si(l,!1),t=c.updateQueue,n.updateQueue=t,Ur(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)td(a,t),a=a.sibling;return E(Wt,Wt.current&1|2),wt&&Ae(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&vn()>Yr&&(n.flags|=128,o=!0,si(l,!1),n.lanes=4194304)}else{if(!o)if(t=kr(c),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Ur(n,t),si(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!wt)return Zt(n),null}else 2*vn()-l.renderingStartTime>Yr&&a!==536870912&&(n.flags|=128,o=!0,si(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(t=l.last,t!==null?t.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=vn(),t.sibling=null,a=Wt.current,E(Wt,o?a&1|2:a&1),wt&&Ae(n,l.treeForkCount),t):(Zt(n),null);case 22:case 23:return Ln(n),Ro(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Ur(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),t!==null&&G(wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ce(nn),Zt(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function wy(t,n){switch(bo(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ce(nn),Lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ve(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(u(340));Aa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ln(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Aa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return G(Wt),null;case 4:return Lt(),null;case 10:return Ce(n.type),null;case 22:case 23:return Ln(n),Ro(),t!==null&&G(wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ce(nn),null;case 25:return null;default:return null}}function zh(t,n){switch(bo(n),n.tag){case 3:Ce(nn),Lt();break;case 26:case 27:case 5:ve(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:G(Wt);break;case 10:Ce(n.type);break;case 22:case 23:Ln(n),Ro(),t!==null&&G(wa);break;case 24:Ce(nn)}}function fi(t,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&t)===t){l=void 0;var c=a.create,m=a.inst;l=c(),m.destroy=l}a=a.next}while(a!==o)}}catch(v){Ut(n,n.return,v)}}function ea(t,n,a){try{var l=n.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var c=o.next;l=c;do{if((l.tag&t)===t){var m=l.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,o=n;var T=a,R=v;try{R()}catch(Y){Ut(o,T,Y)}}}l=l.next}while(l!==c)}}catch(Y){Ut(n,n.return,Y)}}function Ch(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bd(n,a)}catch(l){Ut(t,t.return,l)}}}function wh(t,n,a){a.props=Na(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ut(t,n,l)}}function di(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(o){Ut(t,n,o)}}function he(t,n){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(o){Ut(t,n,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Ut(t,n,o)}else a.current=null}function _h(t){var n=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(o){Ut(t,t.return,o)}}function fc(t,n,a){try{var l=t.stateNode;Iy(l,t.type,a,n),l[kn]=n}catch(o){Ut(t,t.return,o)}}function Dh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ca(t.type)||t.tag===4}function dc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Dh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hc(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ke));else if(l!==4&&(l===27&&ca(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hc(t,n,a),t=t.sibling;t!==null;)hc(t,n,a),t=t.sibling}function Lr(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(l===27&&ca(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Lr(t,n,a),t=t.sibling;t!==null;)Lr(t,n,a),t=t.sibling}function Mh(t){var n=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);gn(n,l,a),n[dn]=t,n[kn]=a}catch(c){Ut(t,t.return,c)}}var Re=!1,ln=!1,pc=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,fn=null;function _y(t,n){if(t=t.containerInfo,jc=lu,t=Qf(t),ro(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var o=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var m=0,v=-1,T=-1,R=0,Y=0,Z=t,j=null;n:for(;;){for(var B;Z!==a||o!==0&&Z.nodeType!==3||(v=m+o),Z!==c||l!==0&&Z.nodeType!==3||(T=m+l),Z.nodeType===3&&(m+=Z.nodeValue.length),(B=Z.firstChild)!==null;)j=Z,Z=B;for(;;){if(Z===t)break n;if(j===a&&++R===o&&(v=m),j===c&&++Y===l&&(T=m),(B=Z.nextSibling)!==null)break;Z=j,j=Z.parentNode}Z=B}a=v===-1||T===-1?null:{start:v,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:t,selectionRange:a},lu=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,c=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)o=t[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=n,o=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var et=Na(a.type,o);t=l.getSnapshotBeforeUpdate(et,c),l.__reactInternalSnapshotBeforeUpdate=t}catch(dt){Ut(a,a.return,dt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Nh(t,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:je(t,a),l&4&&fi(5,a);break;case 1:if(je(t,a),l&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(m){Ut(a,a.return,m)}else{var o=Na(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(o,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Ut(a,a.return,m)}}l&64&&Ch(a),l&512&&di(a,a.return);break;case 3:if(je(t,a),l&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bd(t,n)}catch(m){Ut(a,a.return,m)}}break;case 27:n===null&&l&4&&Mh(a);case 26:case 5:je(t,a),n===null&&l&4&&_h(a),l&512&&di(a,a.return);break;case 12:je(t,a);break;case 31:je(t,a),l&4&&Lh(t,a);break;case 13:je(t,a),l&4&&Bh(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hy.bind(null,a),ib(t,a))));break;case 22:if(l=a.memoizedState!==null||Re,!l){n=n!==null&&n.memoizedState!==null||ln,o=Re;var c=ln;Re=l,(ln=n)&&!c?Ue(t,a,(a.subtreeFlags&8772)!==0):je(t,a),Re=o,ln=c}break;case 30:break;default:je(t,a)}}function jh(t){var n=t.alternate;n!==null&&(t.alternate=null,jh(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Gu(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,On=!1;function Ne(t,n,a){for(a=a.child;a!==null;)Uh(t,n,a),a=a.sibling}function Uh(t,n,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(xn,a)}catch{}switch(a.tag){case 26:ln||he(a,n),Ne(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||he(a,n);var l=Kt,o=On;ca(a.type)&&(Kt=a.stateNode,On=!1),Ne(t,n,a),Si(a.stateNode),Kt=l,On=o;break;case 5:ln||he(a,n);case 6:if(l=Kt,o=On,Kt=null,Ne(t,n,a),Kt=l,On=o,Kt!==null)if(On)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(c){Ut(a,n,c)}else try{Kt.removeChild(a.stateNode)}catch(c){Ut(a,n,c)}break;case 18:Kt!==null&&(On?(t=Kt,Cp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ol(t)):Cp(Kt,a.stateNode));break;case 4:l=Kt,o=On,Kt=a.stateNode.containerInfo,On=!0,Ne(t,n,a),Kt=l,On=o;break;case 0:case 11:case 14:case 15:ea(2,a,n),ln||ea(4,a,n),Ne(t,n,a);break;case 1:ln||(he(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wh(a,n,l)),Ne(t,n,a);break;case 21:Ne(t,n,a);break;case 22:ln=(l=ln)||a.memoizedState!==null,Ne(t,n,a),ln=l;break;default:Ne(t,n,a)}}function Lh(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ol(t)}catch(a){Ut(n,n.return,a)}}}function Bh(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ol(t)}catch(a){Ut(n,n.return,a)}}function Dy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rh),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rh),n;default:throw Error(u(435,t.tag))}}function Br(t,n){var a=Dy(t);n.forEach(function(l){if(!a.has(l)){a.add(l);var o=qy.bind(null,t,l);l.then(o,o)}})}function An(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var o=a[l],c=t,m=n,v=m;t:for(;v!==null;){switch(v.tag){case 27:if(ca(v.type)){Kt=v.stateNode,On=!1;break t}break;case 5:Kt=v.stateNode,On=!1;break t;case 3:case 4:Kt=v.stateNode.containerInfo,On=!0;break t}v=v.return}if(Kt===null)throw Error(u(160));Uh(c,m,o),Kt=null,On=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hh(n,t),n=n.sibling}var ie=null;function Hh(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(n,t),zn(t),l&4&&(ea(3,t,t.return),fi(3,t),ea(5,t,t.return));break;case 1:An(n,t),zn(t),l&512&&(ln||a===null||he(a,a.return)),l&64&&Re&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var o=ie;if(An(n,t),zn(t),l&512&&(ln||a===null||he(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,o=o.ownerDocument||o;n:switch(l){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Hl]||c[dn]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(l),o.head.insertBefore(c,o.querySelector("head > title"))),gn(c,l,a),c[dn]=t,sn(c),l=c;break t;case"link":var m=Hp("link","href",o).get(l+(a.href||""));if(m){for(var v=0;v<m.length;v++)if(c=m[v],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(v,1);break n}}c=o.createElement(l),gn(c,l,a),o.head.appendChild(c);break;case"meta":if(m=Hp("meta","content",o).get(l+(a.content||""))){for(v=0;v<m.length;v++)if(c=m[v],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(v,1);break n}}c=o.createElement(l),gn(c,l,a),o.head.appendChild(c);break;default:throw Error(u(468,l))}c[dn]=t,sn(c),l=c}t.stateNode=l}else qp(o,t.type,t.stateNode);else t.stateNode=Bp(o,l,t.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?qp(o,t.type,t.stateNode):Bp(o,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fc(t,t.memoizedProps,a.memoizedProps)}break;case 27:An(n,t),zn(t),l&512&&(ln||a===null||he(a,a.return)),a!==null&&l&4&&fc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(An(n,t),zn(t),l&512&&(ln||a===null||he(a,a.return)),t.flags&32){o=t.stateNode;try{Ka(o,"")}catch(et){Ut(t,t.return,et)}}l&4&&t.stateNode!=null&&(o=t.memoizedProps,fc(t,o,a!==null?a.memoizedProps:o)),l&1024&&(pc=!0);break;case 6:if(An(n,t),zn(t),l&4){if(t.stateNode===null)throw Error(u(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(et){Ut(t,t.return,et)}}break;case 3:if(tu=null,o=ie,ie=$r(n.containerInfo),An(n,t),ie=o,zn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(n.containerInfo)}catch(et){Ut(t,t.return,et)}pc&&(pc=!1,qh(t));break;case 4:l=ie,ie=$r(t.stateNode.containerInfo),An(n,t),zn(t),ie=l;break;case 12:An(n,t),zn(t);break;case 31:An(n,t),zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Br(t,l)));break;case 13:An(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qr=vn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Br(t,l)));break;case 22:o=t.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,R=Re,Y=ln;if(Re=R||o,ln=Y||T,An(n,t),ln=Y,Re=R,zn(t),l&8192)t:for(n=t.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(a===null||T||Re||ln||ja(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){T=a=n;try{if(c=T.stateNode,o)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=T.stateNode;var Z=T.memoizedProps.style,j=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;v.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(et){Ut(T,T.return,et)}}}else if(n.tag===6){if(a===null){T=n;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch(et){Ut(T,T.return,et)}}}else if(n.tag===18){if(a===null){T=n;try{var B=T.stateNode;o?wp(B,!0):wp(T.stateNode,!1)}catch(et){Ut(T,T.return,et)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Br(t,a))));break;case 19:An(n,t),zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Br(t,l)));break;case 30:break;case 21:break;default:An(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,l=t.return;l!==null;){if(Dh(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var o=a.stateNode,c=dc(t);Lr(t,c,o);break;case 5:var m=a.stateNode;a.flags&32&&(Ka(m,""),a.flags&=-33);var v=dc(t);Lr(t,v,m);break;case 3:case 4:var T=a.stateNode.containerInfo,R=dc(t);hc(t,R,T);break;default:throw Error(u(161))}}catch(Y){Ut(t,t.return,Y)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function je(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nh(t,n.alternate,n),n=n.sibling}function ja(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ea(4,n,n.return),ja(n);break;case 1:he(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wh(n,n.return,a),ja(n);break;case 27:Si(n.stateNode);case 26:case 5:he(n,n.return),ja(n);break;case 22:n.memoizedState===null&&ja(n);break;case 30:ja(n);break;default:ja(n)}t=t.sibling}}function Ue(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,o=t,c=n,m=c.flags;switch(c.tag){case 0:case 11:case 15:Ue(o,c,a),fi(4,c);break;case 1:if(Ue(o,c,a),l=c,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(R){Ut(l,l.return,R)}if(l=c,o=l.updateQueue,o!==null){var v=l.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)yd(T[o],v)}catch(R){Ut(l,l.return,R)}}a&&m&64&&Ch(c),di(c,c.return);break;case 27:Mh(c);case 26:case 5:Ue(o,c,a),a&&l===null&&m&4&&_h(c),di(c,c.return);break;case 12:Ue(o,c,a);break;case 31:Ue(o,c,a),a&&m&4&&Lh(o,c);break;case 13:Ue(o,c,a),a&&m&4&&Bh(o,c);break;case 22:c.memoizedState===null&&Ue(o,c,a),di(c,c.return);break;case 30:break;default:Ue(o,c,a)}n=n.sibling}}function mc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$l(a))}function gc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$l(t))}function re(t,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yh(t,n,a,l),n=n.sibling}function Yh(t,n,a,l){var o=n.flags;switch(n.tag){case 0:case 11:case 15:re(t,n,a,l),o&2048&&fi(9,n);break;case 1:re(t,n,a,l);break;case 3:re(t,n,a,l),o&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$l(t)));break;case 12:if(o&2048){re(t,n,a,l),t=n.stateNode;try{var c=n.memoizedProps,m=c.id,v=c.onPostCommit;typeof v=="function"&&v(m,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){Ut(n,n.return,T)}}else re(t,n,a,l);break;case 31:re(t,n,a,l);break;case 13:re(t,n,a,l);break;case 23:break;case 22:c=n.stateNode,m=n.alternate,n.memoizedState!==null?c._visibility&2?re(t,n,a,l):hi(t,n):c._visibility&2?re(t,n,a,l):(c._visibility|=2,pl(t,n,a,l,(n.subtreeFlags&10256)!==0||!1)),o&2048&&mc(m,n);break;case 24:re(t,n,a,l),o&2048&&gc(n.alternate,n);break;default:re(t,n,a,l)}}function pl(t,n,a,l,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,m=n,v=a,T=l,R=m.flags;switch(m.tag){case 0:case 11:case 15:pl(c,m,v,T,o),fi(8,m);break;case 23:break;case 22:var Y=m.stateNode;m.memoizedState!==null?Y._visibility&2?pl(c,m,v,T,o):hi(c,m):(Y._visibility|=2,pl(c,m,v,T,o)),o&&R&2048&&mc(m.alternate,m);break;case 24:pl(c,m,v,T,o),o&&R&2048&&gc(m.alternate,m);break;default:pl(c,m,v,T,o)}n=n.sibling}}function hi(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,l=n,o=l.flags;switch(l.tag){case 22:hi(a,l),o&2048&&mc(l.alternate,l);break;case 24:hi(a,l),o&2048&&gc(l.alternate,l);break;default:hi(a,l)}n=n.sibling}}var pi=8192;function ml(t,n,a){if(t.subtreeFlags&pi)for(t=t.child;t!==null;)Xh(t,n,a),t=t.sibling}function Xh(t,n,a){switch(t.tag){case 26:ml(t,n,a),t.flags&pi&&t.memoizedState!==null&&yb(a,ie,t.memoizedState,t.memoizedProps);break;case 5:ml(t,n,a);break;case 3:case 4:var l=ie;ie=$r(t.stateNode.containerInfo),ml(t,n,a),ie=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=pi,pi=16777216,ml(t,n,a),pi=l):ml(t,n,a));break;default:ml(t,n,a)}}function Gh(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];fn=l,Qh(l,t)}Gh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vh(t),t=t.sibling}function Vh(t){switch(t.tag){case 0:case 11:case 15:mi(t),t.flags&2048&&ea(9,t,t.return);break;case 3:mi(t);break;case 12:mi(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hr(t)):mi(t);break;default:mi(t)}}function Hr(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];fn=l,Qh(l,t)}Gh(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ea(8,n,n.return),Hr(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hr(n));break;default:Hr(n)}t=t.sibling}}function Qh(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,fn=l;else t:for(a=t;fn!==null;){l=fn;var o=l.sibling,c=l.return;if(jh(l),l===a){fn=null;break t}if(o!==null){o.return=c,fn=o;break t}fn=c}}}var My={getCacheForType:function(t){var n=pn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return pn(nn).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,Mt=0,Xt=null,kt=null,zt=0,jt=0,Bn=null,aa=!1,gl=!1,yc=!1,Le=0,$t=0,la=0,Ua=0,bc=0,Hn=0,yl=0,gi=null,Cn=null,vc=!1,qr=0,Zh=0,Yr=1/0,Xr=null,ia=null,on=0,ra=null,bl=null,Be=0,xc=0,Sc=null,Ph=null,yi=0,Ec=null;function qn(){return(Mt&2)!==0&&zt!==0?zt&-zt:C.T!==null?Cc():cf()}function Kh(){if(Hn===0)if((zt&536870912)===0||wt){var t=Fi;Fi<<=1,(Fi&3932160)===0&&(Fi=262144),Hn=t}else Hn=536870912;return t=Un.current,t!==null&&(t.flags|=32),Hn}function wn(t,n,a){(t===Xt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(vl(t,0),ua(t,zt,Hn,!1)),Bl(t,a),((Mt&2)===0||t!==Xt)&&(t===Xt&&((Mt&2)===0&&(Ua|=a),$t===4&&ua(t,zt,Hn,!1)),pe(t))}function Jh(t,n,a){if((Mt&6)!==0)throw Error(u(327));var l=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ll(t,n),o=l?Uy(t,n):Tc(t,n,!0),c=l;do{if(o===0){gl&&!l&&ua(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Ny(a)){o=Tc(t,n,!1),c=!1;continue}if(o===2){if(c=n,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var v=t;o=gi;var T=v.current.memoizedState.isDehydrated;if(T&&(vl(v,m).flags|=256),m=Tc(v,m,!1),m!==2){if(yc&&!T){v.errorRecoveryDisabledLanes|=c,Ua|=c,o=4;break t}c=Cn,Cn=o,c!==null&&(Cn===null?Cn=c:Cn.push.apply(Cn,c))}o=m}if(c=!1,o!==2)continue}}if(o===1){vl(t,0),ua(t,n,0,!0);break}t:{switch(l=t,c=o,c){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:ua(l,n,Hn,!aa);break t;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(o=qr+300-vn(),10<o)){if(ua(l,n,Hn,!aa),$i(l,0,!0)!==0)break t;Be=n,l.timeoutHandle=Ap(Fh.bind(null,l,a,Cn,Xr,vc,n,Hn,Ua,yl,aa,c,"Throttled",-0,0),o);break t}Fh(l,a,Cn,Xr,vc,n,Hn,Ua,yl,aa,c,null,-0,0)}}break}while(!0);pe(t)}function Fh(t,n,a,l,o,c,m,v,T,R,Y,Z,j,B){if(t.timeoutHandle=-1,Z=n.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ke},Xh(n,c,Z);var et=(c&62914560)===c?qr-vn():(c&4194048)===c?Zh-vn():0;if(et=bb(Z,et),et!==null){Be=c,t.cancelPendingCommit=et(lp.bind(null,t,n,c,a,l,o,m,v,T,Y,Z,null,j,B)),ua(t,c,m,!R);return}}lp(t,n,c,a,l,o,m,v,T)}function Ny(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var o=a[l],c=o.getSnapshot;o=o.value;try{if(!Nn(c(),o))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ua(t,n,a,l){n&=~bc,n&=~Ua,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var o=n;0<o;){var c=31-Yt(o),m=1<<c;l[c]=-1,o&=~m}a!==0&&rf(t,a,n)}function Gr(){return(Mt&6)===0?(bi(0),!1):!0}function kc(){if(kt!==null){if(jt===0)var t=kt.return;else t=kt,ze=za=null,Ho(t),cl=null,ti=0,t=kt;for(;t!==null;)zh(t.alternate,t),t=t.return;kt=null}}function vl(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Be=0,kc(),Xt=t,kt=a=Oe(t.current,null),zt=n,jt=0,Bn=null,aa=!1,gl=Ll(t,n),yc=!1,yl=Hn=bc=Ua=la=$t=0,Cn=gi=null,vc=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var o=31-Yt(l),c=1<<o;n|=t[o],l&=~c}return Le=n,sr(),a}function Ih(t,n){bt=null,C.H=oi,n===ol||n===br?(n=hd(),jt=3):n===zo?(n=hd(),jt=4):jt=n===nc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Bn=n,kt===null&&($t=1,Mr(t,Jn(n,t.current)))}function $h(){var t=Un.current;return t===null?!0:(zt&4194048)===zt?Wn===null:(zt&62914560)===zt||(zt&536870912)!==0?t===Wn:!1}function Wh(){var t=C.H;return C.H=oi,t===null?oi:t}function tp(){var t=C.A;return C.A=My,t}function Vr(){$t=4,aa||(zt&4194048)!==zt&&Un.current!==null||(gl=!0),(la&134217727)===0&&(Ua&134217727)===0||Xt===null||ua(Xt,zt,Hn,!1)}function Tc(t,n,a){var l=Mt;Mt|=2;var o=Wh(),c=tp();(Xt!==t||zt!==n)&&(Xr=null,vl(t,n)),n=!1;var m=$t;t:do try{if(jt!==0&&kt!==null){var v=kt,T=Bn;switch(jt){case 8:kc(),m=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var R=jt;if(jt=0,Bn=null,xl(t,v,T,R),a&&gl){m=0;break t}break;default:R=jt,jt=0,Bn=null,xl(t,v,T,R)}}jy(),m=$t;break}catch(Y){Ih(t,Y)}while(!0);return n&&t.shellSuspendCounter++,ze=za=null,Mt=l,C.H=o,C.A=c,kt===null&&(Xt=null,zt=0,sr()),m}function jy(){for(;kt!==null;)np(kt)}function Uy(t,n){var a=Mt;Mt|=2;var l=Wh(),o=tp();Xt!==t||zt!==n?(Xr=null,Yr=vn()+500,vl(t,n)):gl=Ll(t,n);t:do try{if(jt!==0&&kt!==null){n=kt;var c=Bn;n:switch(jt){case 1:jt=0,Bn=null,xl(t,n,c,1);break;case 2:case 9:if(fd(c)){jt=0,Bn=null,ep(n);break}n=function(){jt!==2&&jt!==9||Xt!==t||(jt=7),pe(t)},c.then(n,n);break t;case 3:jt=7;break t;case 4:jt=5;break t;case 7:fd(c)?(jt=0,Bn=null,ep(n)):(jt=0,Bn=null,xl(t,n,c,7));break;case 5:var m=null;switch(kt.tag){case 26:m=kt.memoizedState;case 5:case 27:var v=kt;if(m?Yp(m):v.stateNode.complete){jt=0,Bn=null;var T=v.sibling;if(T!==null)kt=T;else{var R=v.return;R!==null?(kt=R,Qr(R)):kt=null}break n}}jt=0,Bn=null,xl(t,n,c,5);break;case 6:jt=0,Bn=null,xl(t,n,c,6);break;case 8:kc(),$t=6;break t;default:throw Error(u(462))}}Ly();break}catch(Y){Ih(t,Y)}while(!0);return ze=za=null,C.H=l,C.A=o,Mt=a,kt!==null?0:(Xt=null,zt=0,sr(),$t)}function Ly(){for(;kt!==null&&!Uu();)np(kt)}function np(t){var n=Oh(t.alternate,t,Le);t.memoizedProps=t.pendingProps,n===null?Qr(t):kt=n}function ep(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vh(a,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=vh(a,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:Ho(n);default:zh(a,n),n=kt=td(n,Le),n=Oh(a,n,Le)}t.memoizedProps=t.pendingProps,n===null?Qr(t):kt=n}function xl(t,n,a,l){ze=za=null,Ho(n),cl=null,ti=0;var o=n.return;try{if(Oy(t,o,n,a,zt)){$t=1,Mr(t,Jn(a,t.current)),kt=null;return}}catch(c){if(o!==null)throw kt=o,c;$t=1,Mr(t,Jn(a,t.current)),kt=null;return}n.flags&32768?(wt||l===1?t=!0:gl||(zt&536870912)!==0?t=!1:(aa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Un.current,l!==null&&l.tag===13&&(l.flags|=16384))),ap(n,t)):Qr(n)}function Qr(t){var n=t;do{if((n.flags&32768)!==0){ap(n,aa);return}t=n.return;var a=Cy(n.alternate,n,Le);if(a!==null){kt=a;return}if(n=n.sibling,n!==null){kt=n;return}kt=n=t}while(n!==null);$t===0&&($t=5)}function ap(t,n){do{var a=wy(t.alternate,t);if(a!==null){a.flags&=32767,kt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){kt=t;return}kt=t=a}while(t!==null);$t=6,kt=null}function lp(t,n,a,l,o,c,m,v,T){t.cancelPendingCommit=null;do Zr();while(on!==0);if((Mt&6)!==0)throw Error(u(327));if(n!==null){if(n===t.current)throw Error(u(177));if(c=n.lanes|n.childLanes,c|=fo,g0(t,a,c,m,v,T),t===Xt&&(kt=Xt=null,zt=0),bl=n,ra=t,Be=a,xc=c,Sc=o,Ph=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yy(pt,function(){return cp(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,o=P.p,P.p=2,m=Mt,Mt|=4;try{_y(t,n,a)}finally{Mt=m,P.p=o,C.T=l}}on=1,ip(),rp(),up()}}function ip(){if(on===1){on=0;var t=ra,n=bl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=P.p;P.p=2;var o=Mt;Mt|=4;try{Hh(n,t);var c=Uc,m=Qf(t.containerInfo),v=c.focusedElem,T=c.selectionRange;if(m!==v&&v&&v.ownerDocument&&Vf(v.ownerDocument.documentElement,v)){if(T!==null&&ro(v)){var R=T.start,Y=T.end;if(Y===void 0&&(Y=R),"selectionStart"in v)v.selectionStart=R,v.selectionEnd=Math.min(Y,v.value.length);else{var Z=v.ownerDocument||document,j=Z&&Z.defaultView||window;if(j.getSelection){var B=j.getSelection(),et=v.textContent.length,dt=Math.min(T.start,et),qt=T.end===void 0?dt:Math.min(T.end,et);!B.extend&&dt>qt&&(m=qt,qt=dt,dt=m);var w=Gf(v,dt),A=Gf(v,qt);if(w&&A&&(B.rangeCount!==1||B.anchorNode!==w.node||B.anchorOffset!==w.offset||B.focusNode!==A.node||B.focusOffset!==A.offset)){var M=Z.createRange();M.setStart(w.node,w.offset),B.removeAllRanges(),dt>qt?(B.addRange(M),B.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),B.addRange(M))}}}}for(Z=[],B=v;B=B.parentNode;)B.nodeType===1&&Z.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Z.length;v++){var Q=Z[v];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}lu=!!jc,Uc=jc=null}finally{Mt=o,P.p=l,C.T=a}}t.current=n,on=2}}function rp(){if(on===2){on=0;var t=ra,n=bl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=P.p;P.p=2;var o=Mt;Mt|=4;try{Nh(t,n.alternate,n)}finally{Mt=o,P.p=l,C.T=a}}on=3}}function up(){if(on===4||on===3){on=0,Lu();var t=ra,n=bl,a=Be,l=Ph;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,bl=ra=null,op(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(ia=null),Yu(a),n=n.stateNode,un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(xn,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=C.T,o=P.p,P.p=2,C.T=null;try{for(var c=t.onRecoverableError,m=0;m<l.length;m++){var v=l[m];c(v.value,{componentStack:v.stack})}}finally{C.T=n,P.p=o}}(Be&3)!==0&&Zr(),pe(t),o=t.pendingLanes,(a&261930)!==0&&(o&42)!==0?t===Ec?yi++:(yi=0,Ec=t):yi=0,bi(0)}}function op(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$l(n)))}function Zr(){return ip(),rp(),up(),cp()}function cp(){if(on!==5)return!1;var t=ra,n=xc;xc=0;var a=Yu(Be),l=C.T,o=P.p;try{P.p=32>a?32:a,C.T=null,a=Sc,Sc=null;var c=ra,m=Be;if(on=0,bl=ra=null,Be=0,(Mt&6)!==0)throw Error(u(331));var v=Mt;if(Mt|=4,Vh(c.current),Yh(c,c.current,m,a),Mt=v,bi(0,!1),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(xn,c)}catch{}return!0}finally{P.p=o,C.T=l,op(t,n)}}function sp(t,n,a){n=Jn(a,n),n=tc(t.stateNode,n,2),t=We(t,n,2),t!==null&&(Bl(t,2),pe(t))}function Ut(t,n,a){if(t.tag===3)sp(t,t,a);else for(;n!==null;){if(n.tag===3){sp(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ia===null||!ia.has(l))){t=Jn(a,t),a=fh(2),l=We(n,a,2),l!==null&&(dh(a,l,n,t),Bl(l,2),pe(l));break}}n=n.return}}function Oc(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ry;var o=new Set;l.set(n,o)}else o=l.get(n),o===void 0&&(o=new Set,l.set(n,o));o.has(a)||(yc=!0,o.add(a),t=By.bind(null,t,n,a),n.then(t,t))}function By(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(zt&a)===a&&($t===4||$t===3&&(zt&62914560)===zt&&300>vn()-qr?(Mt&2)===0&&vl(t,0):bc|=a,yl===zt&&(yl=0)),pe(t)}function fp(t,n){n===0&&(n=lf()),t=Ta(t,n),t!==null&&(Bl(t,n),pe(t))}function Hy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),fp(t,a)}function qy(t,n){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,o=t.memoizedState;o!==null&&(a=o.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(n),fp(t,a)}function Yy(t,n){return Ya(t,n)}var Pr=null,Sl=null,Ac=!1,Kr=!1,zc=!1,oa=0;function pe(t){t!==Sl&&t.next===null&&(Sl===null?Pr=Sl=t:Sl=Sl.next=t),Kr=!0,Ac||(Ac=!0,Gy())}function bi(t,n){if(!zc&&Kr){zc=!0;do for(var a=!1,l=Pr;l!==null;){if(t!==0){var o=l.pendingLanes;if(o===0)var c=0;else{var m=l.suspendedLanes,v=l.pingedLanes;c=(1<<31-Yt(42|t)+1)-1,c&=o&~(m&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,mp(l,c))}else c=zt,c=$i(l,l===Xt?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ll(l,c)||(a=!0,mp(l,c));l=l.next}while(a);zc=!1}}function Xy(){dp()}function dp(){Kr=Ac=!1;var t=0;oa!==0&&Wy()&&(t=oa);for(var n=vn(),a=null,l=Pr;l!==null;){var o=l.next,c=hp(l,n);c===0?(l.next=null,a===null?Pr=o:a.next=o,o===null&&(Sl=a)):(a=l,(t!==0||(c&3)!==0)&&(Kr=!0)),l=o}on!==0&&on!==5||bi(t),oa!==0&&(oa=0)}function hp(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,o=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Yt(c),v=1<<m,T=o[m];T===-1?((v&a)===0||(v&l)!==0)&&(o[m]=m0(v,n)):T<=n&&(t.expiredLanes|=v),c&=~v}if(n=Xt,a=zt,a=$i(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ul(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ll(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(l!==null&&Ul(l),Yu(a)){case 2:case 8:a=I;break;case 32:a=pt;break;case 268435456:a=Nt;break;default:a=pt}return l=pp.bind(null,t),a=Ya(a,l),t.callbackPriority=n,t.callbackNode=a,n}return l!==null&&l!==null&&Ul(l),t.callbackPriority=2,t.callbackNode=null,2}function pp(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var l=zt;return l=$i(t,t===Xt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Jh(t,l,n),hp(t,vn()),t.callbackNode!=null&&t.callbackNode===a?pp.bind(null,t):null)}function mp(t,n){if(Zr())return null;Jh(t,n,!0)}function Gy(){nb(function(){(Mt&6)!==0?Ya(V,Xy):dp()})}function Cc(){if(oa===0){var t=rl;t===0&&(t=Ji,Ji<<=1,(Ji&261888)===0&&(Ji=256)),oa=t}return oa}function gp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:er(""+t)}function yp(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Vy(t,n,a,l,o){if(n==="submit"&&a&&a.stateNode===o){var c=gp((o[kn]||null).action),m=l.submitter;m&&(n=(n=m[kn]||null)?gp(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var v=new rr("action","action",null,l,o);t.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(oa!==0){var T=m?yp(o,m):new FormData(o);Ko(a,{pending:!0,data:T,method:o.method,action:c},null,T)}}else typeof c=="function"&&(v.preventDefault(),T=m?yp(o,m):new FormData(o),Ko(a,{pending:!0,data:T,method:o.method,action:c},c,T))},currentTarget:o}]})}}for(var wc=0;wc<so.length;wc++){var _c=so[wc],Qy=_c.toLowerCase(),Zy=_c[0].toUpperCase()+_c.slice(1);le(Qy,"on"+Zy)}le(Kf,"onAnimationEnd"),le(Jf,"onAnimationIteration"),le(Ff,"onAnimationStart"),le("dblclick","onDoubleClick"),le("focusin","onFocus"),le("focusout","onBlur"),le(oy,"onTransitionRun"),le(cy,"onTransitionStart"),le(sy,"onTransitionCancel"),le(If,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function bp(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],o=l.event;l=l.listeners;t:{var c=void 0;if(n)for(var m=l.length-1;0<=m;m--){var v=l[m],T=v.instance,R=v.currentTarget;if(v=v.listener,T!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=R;try{c(o)}catch(Y){cr(Y)}o.currentTarget=null,c=T}else for(m=0;m<l.length;m++){if(v=l[m],T=v.instance,R=v.currentTarget,v=v.listener,T!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=R;try{c(o)}catch(Y){cr(Y)}o.currentTarget=null,c=T}}}}function Tt(t,n){var a=n[Xu];a===void 0&&(a=n[Xu]=new Set);var l=t+"__bubble";a.has(l)||(vp(n,t,2,!1),a.add(l))}function Dc(t,n,a){var l=0;n&&(l|=4),vp(a,t,l,n)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Mc(t){if(!t[Jr]){t[Jr]=!0,df.forEach(function(a){a!=="selectionchange"&&(Py.has(a)||Dc(a,!1,t),Dc(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jr]||(n[Jr]=!0,Dc("selectionchange",!1,n))}}function vp(t,n,a,l){switch(Kp(n)){case 2:var o=Sb;break;case 8:o=Eb;break;default:o=Pc}a=o.bind(null,n,a,t),o=void 0,!Iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),l?o!==void 0?t.addEventListener(n,a,{capture:!0,passive:o}):t.addEventListener(n,a,!0):o!==void 0?t.addEventListener(n,a,{passive:o}):t.addEventListener(n,a,!1)}function Rc(t,n,a,l,o){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var v=l.stateNode.containerInfo;if(v===o)break;if(m===4)for(m=l.return;m!==null;){var T=m.tag;if((T===3||T===4)&&m.stateNode.containerInfo===o)return;m=m.return}for(;v!==null;){if(m=Ga(v),m===null)return;if(T=m.tag,T===5||T===6||T===26||T===27){l=c=m;continue t}v=v.parentNode}}l=l.return}Tf(function(){var R=c,Y=Ju(a),Z=[];t:{var j=$f.get(t);if(j!==void 0){var B=rr,et=t;switch(t){case"keypress":if(lr(a)===0)break t;case"keydown":case"keyup":B=q0;break;case"focusin":et="focus",B=no;break;case"focusout":et="blur",B=no;break;case"beforeblur":case"afterblur":B=no;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=G0;break;case Kf:case Jf:case Ff:B=D0;break;case If:B=Q0;break;case"scroll":case"scrollend":B=A0;break;case"wheel":B=P0;break;case"copy":case"cut":case"paste":B=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=wf;break;case"toggle":case"beforetoggle":B=J0}var dt=(n&4)!==0,qt=!dt&&(t==="scroll"||t==="scrollend"),w=dt?j!==null?j+"Capture":null:j;dt=[];for(var A=R,M;A!==null;){var Q=A;if(M=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||M===null||w===null||(Q=Yl(A,w),Q!=null&&dt.push(xi(A,Q,M))),qt)break;A=A.return}0<dt.length&&(j=new B(j,et,null,a,Y),Z.push({event:j,listeners:dt}))}}if((n&7)===0){t:{if(j=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",j&&a!==Ku&&(et=a.relatedTarget||a.fromElement)&&(Ga(et)||et[Xa]))break t;if((B||j)&&(j=Y.window===Y?Y:(j=Y.ownerDocument)?j.defaultView||j.parentWindow:window,B?(et=a.relatedTarget||a.toElement,B=R,et=et?Ga(et):null,et!==null&&(qt=f(et),dt=et.tag,et!==qt||dt!==5&&dt!==27&&dt!==6)&&(et=null)):(B=null,et=R),B!==et)){if(dt=zf,Q="onMouseLeave",w="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(dt=wf,Q="onPointerLeave",w="onPointerEnter",A="pointer"),qt=B==null?j:ql(B),M=et==null?j:ql(et),j=new dt(Q,A+"leave",B,a,Y),j.target=qt,j.relatedTarget=M,Q=null,Ga(Y)===R&&(dt=new dt(w,A+"enter",et,a,Y),dt.target=M,dt.relatedTarget=qt,Q=dt),qt=Q,B&&et)n:{for(dt=Ky,w=B,A=et,M=0,Q=w;Q;Q=dt(Q))M++;Q=0;for(var ft=A;ft;ft=dt(ft))Q++;for(;0<M-Q;)w=dt(w),M--;for(;0<Q-M;)A=dt(A),Q--;for(;M--;){if(w===A||A!==null&&w===A.alternate){dt=w;break n}w=dt(w),A=dt(A)}dt=null}else dt=null;B!==null&&xp(Z,j,B,dt,!1),et!==null&&qt!==null&&xp(Z,qt,et,dt,!0)}}t:{if(j=R?ql(R):window,B=j.nodeName&&j.nodeName.toLowerCase(),B==="select"||B==="input"&&j.type==="file")var _t=Lf;else if(jf(j))if(Bf)_t=iy;else{_t=ay;var it=ey}else B=j.nodeName,!B||B.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?R&&Pu(R.elementType)&&(_t=Lf):_t=ly;if(_t&&(_t=_t(t,R))){Uf(Z,_t,a,Y);break t}it&&it(t,j,R),t==="focusout"&&R&&j.type==="number"&&R.memoizedProps.value!=null&&Zu(j,"number",j.value)}switch(it=R?ql(R):window,t){case"focusin":(jf(it)||it.contentEditable==="true")&&($a=it,uo=R,Jl=null);break;case"focusout":Jl=uo=$a=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,Zf(Z,a,Y);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Zf(Z,a,Y)}var vt;if(ao)t:{switch(t){case"compositionstart":var Ct="onCompositionStart";break t;case"compositionend":Ct="onCompositionEnd";break t;case"compositionupdate":Ct="onCompositionUpdate";break t}Ct=void 0}else Ia?Rf(t,a)&&(Ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(_f&&a.locale!=="ko"&&(Ia||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ia&&(vt=Of()):(Ze=Y,$u="value"in Ze?Ze.value:Ze.textContent,Ia=!0)),it=Fr(R,Ct),0<it.length&&(Ct=new Cf(Ct,t,null,a,Y),Z.push({event:Ct,listeners:it}),vt?Ct.data=vt:(vt=Nf(a),vt!==null&&(Ct.data=vt)))),(vt=I0?$0(t,a):W0(t,a))&&(Ct=Fr(R,"onBeforeInput"),0<Ct.length&&(it=new Cf("onBeforeInput","beforeinput",null,a,Y),Z.push({event:it,listeners:Ct}),it.data=vt)),Vy(Z,t,R,a,Y)}bp(Z,n)})}function xi(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fr(t,n){for(var a=n+"Capture",l=[];t!==null;){var o=t,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Yl(t,a),o!=null&&l.unshift(xi(t,o,c)),o=Yl(t,n),o!=null&&l.push(xi(t,o,c))),t.tag===3)return l;t=t.return}return[]}function Ky(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xp(t,n,a,l,o){for(var c=n._reactName,m=[];a!==null&&a!==l;){var v=a,T=v.alternate,R=v.stateNode;if(v=v.tag,T!==null&&T===l)break;v!==5&&v!==26&&v!==27||R===null||(T=R,o?(R=Yl(a,c),R!=null&&m.unshift(xi(a,R,T))):o||(R=Yl(a,c),R!=null&&m.push(xi(a,R,T)))),a=a.return}m.length!==0&&t.push({event:n,listeners:m})}var Jy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(Jy,`
`).replace(Fy,"")}function Ep(t,n){return n=Sp(n),Sp(t)===n}function Ht(t,n,a,l,o,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Ka(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Ka(t,""+l);break;case"className":tr(t,"class",l);break;case"tabIndex":tr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tr(t,a,l);break;case"style":Ef(t,l,c);break;case"data":if(n!=="object"){tr(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=er(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",o.name,o,null),Ht(t,n,"formEncType",o.formEncType,o,null),Ht(t,n,"formMethod",o.formMethod,o,null),Ht(t,n,"formTarget",o.formTarget,o,null)):(Ht(t,n,"encType",o.encType,o,null),Ht(t,n,"method",o.method,o,null),Ht(t,n,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=er(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ke);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(u(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=er(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Wi(t,"popover",l);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Wi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=T0.get(a)||a,Wi(t,a,l))}}function Nc(t,n,a,l,o,c){switch(a){case"style":Ef(t,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(u(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Ka(t,l):(typeof l=="number"||typeof l=="bigint")&&Ka(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ke);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),n=a.slice(2,o?a.length-7:void 0),c=t[kn]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(n,c,o),typeof l=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,l,o);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Wi(t,a,l)}}}function gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var m=a[c];if(m!=null)switch(c){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:Ht(t,n,c,m,a,null)}}o&&Ht(t,n,"srcSet",a.srcSet,a,null),l&&Ht(t,n,"src",a.src,a,null);return;case"input":Tt("invalid",t);var v=c=m=o=null,T=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":o=Y;break;case"type":m=Y;break;case"checked":T=Y;break;case"defaultChecked":R=Y;break;case"value":c=Y;break;case"defaultValue":v=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,n));break;default:Ht(t,n,l,Y,a,null)}}bf(t,c,v,T,R,m,o,!1);return;case"select":Tt("invalid",t),l=m=c=null;for(o in a)if(a.hasOwnProperty(o)&&(v=a[o],v!=null))switch(o){case"value":c=v;break;case"defaultValue":m=v;break;case"multiple":l=v;default:Ht(t,n,o,v,a,null)}n=c,a=m,t.multiple=!!l,n!=null?Pa(t,!!l,n,!1):a!=null&&Pa(t,!!l,a,!0);return;case"textarea":Tt("invalid",t),c=o=l=null;for(m in a)if(a.hasOwnProperty(m)&&(v=a[m],v!=null))switch(m){case"value":l=v;break;case"defaultValue":o=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ht(t,n,m,v,a,null)}xf(t,l,o,c);return;case"option":for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null)&&(T==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Ht(t,n,T,l,a,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<vi.length;l++)Tt(vi[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:Ht(t,n,R,l,a,null)}return;default:if(Pu(n)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&Nc(t,n,Y,l,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null&&Ht(t,n,v,l,a,null))}function Iy(t,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,m=null,v=null,T=null,R=null,Y=null;for(B in a){var Z=a[B];if(a.hasOwnProperty(B)&&Z!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":T=Z;default:l.hasOwnProperty(B)||Ht(t,n,B,null,l,Z)}}for(var j in l){var B=l[j];if(Z=a[j],l.hasOwnProperty(j)&&(B!=null||Z!=null))switch(j){case"type":c=B;break;case"name":o=B;break;case"checked":R=B;break;case"defaultChecked":Y=B;break;case"value":m=B;break;case"defaultValue":v=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,n));break;default:B!==Z&&Ht(t,n,j,B,l,Z)}}Qu(t,m,v,T,R,Y,c,o);return;case"select":B=m=v=j=null;for(c in a)if(T=a[c],a.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":B=T;default:l.hasOwnProperty(c)||Ht(t,n,c,null,l,T)}for(o in l)if(c=l[o],T=a[o],l.hasOwnProperty(o)&&(c!=null||T!=null))switch(o){case"value":j=c;break;case"defaultValue":v=c;break;case"multiple":m=c;default:c!==T&&Ht(t,n,o,c,l,T)}n=v,a=m,l=B,j!=null?Pa(t,!!a,j,!1):!!l!=!!a&&(n!=null?Pa(t,!!a,n,!0):Pa(t,!!a,a?[]:"",!1));return;case"textarea":B=j=null;for(v in a)if(o=a[v],a.hasOwnProperty(v)&&o!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ht(t,n,v,null,l,o)}for(m in l)if(o=l[m],c=a[m],l.hasOwnProperty(m)&&(o!=null||c!=null))switch(m){case"value":j=o;break;case"defaultValue":B=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==c&&Ht(t,n,m,o,l,c)}vf(t,j,B);return;case"option":for(var et in a)j=a[et],a.hasOwnProperty(et)&&j!=null&&!l.hasOwnProperty(et)&&(et==="selected"?t.selected=!1:Ht(t,n,et,null,l,j));for(T in l)j=l[T],B=a[T],l.hasOwnProperty(T)&&j!==B&&(j!=null||B!=null)&&(T==="selected"?t.selected=j&&typeof j!="function"&&typeof j!="symbol":Ht(t,n,T,j,l,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)j=a[dt],a.hasOwnProperty(dt)&&j!=null&&!l.hasOwnProperty(dt)&&Ht(t,n,dt,null,l,j);for(R in l)if(j=l[R],B=a[R],l.hasOwnProperty(R)&&j!==B&&(j!=null||B!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,n));break;default:Ht(t,n,R,j,l,B)}return;default:if(Pu(n)){for(var qt in a)j=a[qt],a.hasOwnProperty(qt)&&j!==void 0&&!l.hasOwnProperty(qt)&&Nc(t,n,qt,void 0,l,j);for(Y in l)j=l[Y],B=a[Y],!l.hasOwnProperty(Y)||j===B||j===void 0&&B===void 0||Nc(t,n,Y,j,l,B);return}}for(var w in a)j=a[w],a.hasOwnProperty(w)&&j!=null&&!l.hasOwnProperty(w)&&Ht(t,n,w,null,l,j);for(Z in l)j=l[Z],B=a[Z],!l.hasOwnProperty(Z)||j===B||j==null&&B==null||Ht(t,n,Z,j,l,B)}function kp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var o=a[l],c=o.transferSize,m=o.initiatorType,v=o.duration;if(c&&v&&kp(m)){for(m=0,v=o.responseEnd,l+=1;l<a.length;l++){var T=a[l],R=T.startTime;if(R>v)break;var Y=T.transferSize,Z=T.initiatorType;Y&&kp(Z)&&(T=T.responseEnd,m+=Y*(T<v?1:(v-R)/(T-R)))}if(--l,n+=8*(c+m)/(o.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jc=null,Uc=null;function Ir(t){return t.nodeType===9?t:t.ownerDocument}function Tp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Op(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bc=null;function Wy(){var t=window.event;return t&&t.type==="popstate"?t===Bc?!1:(Bc=t,!0):(Bc=null,!1)}var Ap=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(t){return zp.resolve(null).then(t).catch(eb)}:Ap;function eb(t){setTimeout(function(){throw t})}function ca(t){return t==="head"}function Cp(t,n){var a=n,l=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(o),Ol(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Si(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Si(a);for(var c=a.firstChild;c;){var m=c.nextSibling,v=c.nodeName;c[Hl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=m}}else a==="body"&&Si(t.ownerDocument.body);a=o}while(a);Ol(n)}function wp(t,n){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Hc(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hc(a),Gu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ab(t,n,a,l){for(;t.nodeType===1;){var o=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Hl])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=te(t.nextSibling),t===null)break}return null}function lb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=te(t.nextSibling),t===null))return null;return t}function _p(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=te(t.nextSibling),t===null))return null;return t}function qc(t){return t.data==="$?"||t.data==="$~"}function Yc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ib(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function te(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Xc=null;function Dp(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return te(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Mp(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Rp(t,n,a){switch(n=Ir(a),t){case"html":if(t=n.documentElement,!t)throw Error(u(452));return t;case"head":if(t=n.head,!t)throw Error(u(453));return t;case"body":if(t=n.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function Si(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Gu(t)}var ne=new Map,Np=new Set;function $r(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var He=P.d;P.d={f:rb,r:ub,D:ob,C:cb,L:sb,m:fb,X:hb,S:db,M:pb};function rb(){var t=He.f(),n=Gr();return t||n}function ub(t){var n=Va(t);n!==null&&n.tag===5&&n.type==="form"?Id(n):He.r(t)}var El=typeof document>"u"?null:document;function jp(t,n,a){var l=El;if(l&&typeof n=="string"&&n){var o=Pn(n);o='link[rel="'+t+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Np.has(o)||(Np.add(o),t={rel:t,crossOrigin:a,href:n},l.querySelector(o)===null&&(n=l.createElement("link"),gn(n,"link",t),sn(n),l.head.appendChild(n)))}}function ob(t){He.D(t),jp("dns-prefetch",t,null)}function cb(t,n){He.C(t,n),jp("preconnect",t,n)}function sb(t,n,a){He.L(t,n,a);var l=El;if(l&&t&&n){var o='link[rel="preload"][as="'+Pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Pn(a.imageSizes)+'"]')):o+='[href="'+Pn(t)+'"]';var c=o;switch(n){case"style":c=kl(t);break;case"script":c=Tl(t)}ne.has(c)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ne.set(c,t),l.querySelector(o)!==null||n==="style"&&l.querySelector(Ei(c))||n==="script"&&l.querySelector(ki(c))||(n=l.createElement("link"),gn(n,"link",t),sn(n),l.head.appendChild(n)))}}function fb(t,n){He.m(t,n);var a=El;if(a&&t){var l=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Pn(l)+'"][href="'+Pn(t)+'"]',c=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Tl(t)}if(!ne.has(c)&&(t=b({rel:"modulepreload",href:t},n),ne.set(c,t),a.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ki(c)))return}l=a.createElement("link"),gn(l,"link",t),sn(l),a.head.appendChild(l)}}}function db(t,n,a){He.S(t,n,a);var l=El;if(l&&t){var o=Qa(l).hoistableStyles,c=kl(t);n=n||"default";var m=o.get(c);if(!m){var v={loading:0,preload:null};if(m=l.querySelector(Ei(c)))v.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ne.get(c))&&Gc(t,a);var T=m=l.createElement("link");sn(T),gn(T,"link",t),T._p=new Promise(function(R,Y){T.onload=R,T.onerror=Y}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Wr(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:v},o.set(c,m)}}}function hb(t,n){He.X(t,n);var a=El;if(a&&t){var l=Qa(a).hoistableScripts,o=Tl(t),c=l.get(o);c||(c=a.querySelector(ki(o)),c||(t=b({src:t,async:!0},n),(n=ne.get(o))&&Vc(t,n),c=a.createElement("script"),sn(c),gn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(o,c))}}function pb(t,n){He.M(t,n);var a=El;if(a&&t){var l=Qa(a).hoistableScripts,o=Tl(t),c=l.get(o);c||(c=a.querySelector(ki(o)),c||(t=b({src:t,async:!0,type:"module"},n),(n=ne.get(o))&&Vc(t,n),c=a.createElement("script"),sn(c),gn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(o,c))}}function Up(t,n,a,l){var o=(o=st.current)?$r(o):null;if(!o)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=kl(a.href),a=Qa(o).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=kl(a.href);var c=Qa(o).hoistableStyles,m=c.get(t);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=o.querySelector(Ei(t)))&&!c._p&&(m.instance=c,m.state.loading=5),ne.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ne.set(t,a),c||mb(o,t,a,m.state))),n&&l===null)throw Error(u(528,""));return m}if(n&&l!==null)throw Error(u(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tl(a),a=Qa(o).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function kl(t){return'href="'+Pn(t)+'"'}function Ei(t){return'link[rel="stylesheet"]['+t+"]"}function Lp(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function mb(t,n,a,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),gn(n,"link",a),sn(n),t.head.appendChild(n))}function Tl(t){return'[src="'+Pn(t)+'"]'}function ki(t){return"script[async]"+t}function Bp(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Pn(a.href)+'"]');if(l)return n.instance=l,sn(l),l;var o=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),sn(l),gn(l,"style",o),Wr(l,a.precedence,t),n.instance=l;case"stylesheet":o=kl(a.href);var c=t.querySelector(Ei(o));if(c)return n.state.loading|=4,n.instance=c,sn(c),c;l=Lp(a),(o=ne.get(o))&&Gc(l,o),c=(t.ownerDocument||t).createElement("link"),sn(c);var m=c;return m._p=new Promise(function(v,T){m.onload=v,m.onerror=T}),gn(c,"link",l),n.state.loading|=4,Wr(c,a.precedence,t),n.instance=c;case"script":return c=Tl(a.src),(o=t.querySelector(ki(c)))?(n.instance=o,sn(o),o):(l=a,(o=ne.get(c))&&(l=b({},a),Vc(l,o)),t=t.ownerDocument||t,o=t.createElement("script"),sn(o),gn(o,"link",l),t.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Wr(l,a.precedence,t));return n.instance}function Wr(t,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,c=o,m=0;m<l.length;m++){var v=l[m];if(v.dataset.precedence===n)c=v;else if(c!==o)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gc(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vc(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tu=null;function Hp(t,n,a){if(tu===null){var l=new Map,o=tu=new Map;o.set(a,l)}else o=tu,l=o.get(a),l||(l=new Map,o.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),o=0;o<a.length;o++){var c=a[o];if(!(c[Hl]||c[dn]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=t+m;var v=l.get(m);v?v.push(c):l.set(m,[c])}}return l}function qp(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yb(t,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=kl(l.href),c=n.querySelector(Ei(o));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,sn(c);return}c=n.ownerDocument||n,l=Lp(l),(o=ne.get(o))&&Gc(l,o),c=c.createElement("link"),sn(c);var m=c;m._p=new Promise(function(v,T){m.onload=v,m.onerror=T}),gn(c,"link",l),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qc=0;function bb(t,n){return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Qc===0&&(Qc=62500*$y());var o=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&au(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Qc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var eu=null;function au(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,eu=new Map,n.forEach(vb,t),eu=null,nu.call(t))}function vb(t,n){if(!(n.state.loading&4)){var a=eu.get(t);if(a)var l=a.get(null);else{a=new Map,eu.set(t,a);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var m=o[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),l=m)}l&&a.set(null,l)}o=n.instance,m=o.getAttribute("data-precedence"),c=a.get(m)||l,c===l&&a.set(null,o),a.set(m,o),this.count++,l=nu.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),c?c.parentNode.insertBefore(o,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),n.state.loading|=4}}var Ti={$$typeof:q,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function xb(t,n,a,l,o,c,m,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.hiddenUpdates=Hu(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Xp(t,n,a,l,o,c,m,v,T,R,Y,Z){return t=new xb(t,n,a,m,T,R,Y,Z,v),n=1,c===!0&&(n|=24),c=jn(3,null,null,n),t.current=c,c.stateNode=t,n=To(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Co(c),t}function Gp(t){return t?(t=nl,t):nl}function Vp(t,n,a,l,o,c){o=Gp(o),l.context===null?l.context=o:l.pendingContext=o,l=$e(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=We(t,l,n),a!==null&&(wn(a,t,n),ei(a,t,n))}function Qp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zc(t,n){Qp(t,n),(t=t.alternate)&&Qp(t,n)}function Zp(t){if(t.tag===13||t.tag===31){var n=Ta(t,67108864);n!==null&&wn(n,t,67108864),Zc(t,67108864)}}function Pp(t){if(t.tag===13||t.tag===31){var n=qn();n=qu(n);var a=Ta(t,n);a!==null&&wn(a,t,n),Zc(t,n)}}var lu=!0;function Sb(t,n,a,l){var o=C.T;C.T=null;var c=P.p;try{P.p=2,Pc(t,n,a,l)}finally{P.p=c,C.T=o}}function Eb(t,n,a,l){var o=C.T;C.T=null;var c=P.p;try{P.p=8,Pc(t,n,a,l)}finally{P.p=c,C.T=o}}function Pc(t,n,a,l){if(lu){var o=Kc(l);if(o===null)Rc(t,n,l,iu,a),Jp(t,l);else if(Tb(o,t,n,a,l))l.stopPropagation();else if(Jp(t,l),n&4&&-1<kb.indexOf(t)){for(;o!==null;){var c=Va(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=va(c.pendingLanes);if(m!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var T=1<<31-Yt(m);v.entanglements[1]|=T,m&=~T}pe(c),(Mt&6)===0&&(Yr=vn()+500,bi(0))}}break;case 31:case 13:v=Ta(c,2),v!==null&&wn(v,c,2),Gr(),Zc(c,2)}if(c=Kc(l),c===null&&Rc(t,n,l,iu,a),c===o)break;o=c}o!==null&&l.stopPropagation()}else Rc(t,n,l,null,a)}}function Kc(t){return t=Ju(t),Jc(t)}var iu=null;function Jc(t){if(iu=null,t=Ga(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return iu=t,null}function Kp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bu()){case V:return 2;case I:return 8;case pt:case Et:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Fc=!1,sa=null,fa=null,da=null,Oi=new Map,Ai=new Map,ha=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jp(t,n){switch(t){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":Oi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(n.pointerId)}}function zi(t,n,a,l,o,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[o]},n!==null&&(n=Va(n),n!==null&&Zp(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),t)}function Tb(t,n,a,l,o){switch(n){case"focusin":return sa=zi(sa,t,n,a,l,o),!0;case"dragenter":return fa=zi(fa,t,n,a,l,o),!0;case"mouseover":return da=zi(da,t,n,a,l,o),!0;case"pointerover":var c=o.pointerId;return Oi.set(c,zi(Oi.get(c)||null,t,n,a,l,o)),!0;case"gotpointercapture":return c=o.pointerId,Ai.set(c,zi(Ai.get(c)||null,t,n,a,l,o)),!0}return!1}function Fp(t){var n=Ga(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,sf(t.priority,function(){Pp(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,sf(t.priority,function(){Pp(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Kc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ku=l,a.target.dispatchEvent(l),Ku=null}else return n=Va(a),n!==null&&Zp(n),t.blockedOn=a,!1;n.shift()}return!0}function Ip(t,n,a){ru(t)&&a.delete(n)}function Ob(){Fc=!1,sa!==null&&ru(sa)&&(sa=null),fa!==null&&ru(fa)&&(fa=null),da!==null&&ru(da)&&(da=null),Oi.forEach(Ip),Ai.forEach(Ip)}function uu(t,n){t.blockedOn===n&&(t.blockedOn=null,Fc||(Fc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ob)))}var ou=null;function $p(t){ou!==t&&(ou=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){ou===t&&(ou=null);for(var n=0;n<t.length;n+=3){var a=t[n],l=t[n+1],o=t[n+2];if(typeof l!="function"){if(Jc(l||a)===null)continue;break}var c=Va(a);c!==null&&(t.splice(n,3),n-=3,Ko(c,{pending:!0,data:o,method:a.method,action:l},l,o))}}))}function Ol(t){function n(T){return uu(T,t)}sa!==null&&uu(sa,t),fa!==null&&uu(fa,t),da!==null&&uu(da,t),Oi.forEach(n),Ai.forEach(n);for(var a=0;a<ha.length;a++){var l=ha[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ha.length&&(a=ha[0],a.blockedOn===null);)Fp(a),a.blockedOn===null&&ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var o=a[l],c=a[l+1],m=o[kn]||null;if(typeof c=="function")m||$p(a);else if(m){var v=null;if(c&&c.hasAttribute("formAction")){if(o=c,m=c[kn]||null)v=m.formAction;else if(Jc(o)!==null)continue}else v=m.action;typeof v=="function"?a[l+1]=v:(a.splice(l,3),l-=3),$p(a)}}}function Wp(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return o=m})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function Ic(t){this._internalRoot=t}cu.prototype.render=Ic.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(u(409));var a=n.current,l=qn();Vp(a,l,t,n,null,null)},cu.prototype.unmount=Ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vp(t.current,2,null,t,null,null),Gr(),n[Xa]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var n=cf();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ha.length&&n!==0&&n<ha[a].priority;a++);ha.splice(a,0,t),a===0&&Fp(t)}};var tm=i.version;if(tm!=="19.2.4")throw Error(u(527,tm,"19.2.4"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=h(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Ab={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{xn=su.inject(Ab),un=su}catch{}}return wi.createRoot=function(t,n){if(!s(t))throw Error(u(299));var a=!1,l="",o=uh,c=oh,m=ch;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Xp(t,1,!1,null,null,a,l,null,o,c,m,Wp),t[Xa]=n.current,Mc(t),new Ic(n)},wi.hydrateRoot=function(t,n,a){if(!s(t))throw Error(u(299));var l=!1,o="",c=uh,m=oh,v=ch,T=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),n=Xp(t,1,!0,n,a??null,l,o,T,c,m,v,Wp),n.context=Gp(null),a=n.current,l=qn(),l=qu(l),o=$e(l),o.callback=null,We(a,o,l),a=l,n.current.lanes=a,Bl(n,a),pe(n),t[Xa]=n.current,Mc(t),new cu(n)},wi.version="19.2.4",wi}var sm;function Ub(){if(sm)return ts.exports;sm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),ts.exports=jb(),ts.exports}var Lb=Ub();var fm="popstate";function Bb(e={}){function i(u,s){let{pathname:f,search:d,hash:p}=u.location;return Ss("",{pathname:f,search:d,hash:p},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(u,s){return typeof s=="string"?s:qi(s)}return qb(i,r,null,e)}function Ft(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function ce(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Hb(){return Math.random().toString(36).substring(2,10)}function dm(e,i){return{usr:e.state,key:e.key,idx:i}}function Ss(e,i,r=null,u){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof i=="string"?_l(i):i,state:r,key:i&&i.key||u||Hb()}}function qi({pathname:e="/",search:i="",hash:r=""}){return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _l(e){let i={};if(e){let r=e.indexOf("#");r>=0&&(i.hash=e.substring(r),e=e.substring(0,r));let u=e.indexOf("?");u>=0&&(i.search=e.substring(u),e=e.substring(0,u)),e&&(i.pathname=e)}return i}function qb(e,i,r,u={}){let{window:s=document.defaultView,v5Compat:f=!1}=u,d=s.history,p="POP",g=null,h=y();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function y(){return(d.state||{idx:null}).idx}function b(){p="POP";let U=y(),N=U==null?null:U-h;h=U,g&&g({action:p,location:z.location,delta:N})}function S(U,N){p="PUSH";let X=Ss(z.location,U,N);h=y()+1;let q=dm(X,h),at=z.createHref(X);try{d.pushState(q,"",at)}catch(tt){if(tt instanceof DOMException&&tt.name==="DataCloneError")throw tt;s.location.assign(at)}f&&g&&g({action:p,location:z.location,delta:1})}function x(U,N){p="REPLACE";let X=Ss(z.location,U,N);h=y();let q=dm(X,h),at=z.createHref(X);d.replaceState(q,"",at),f&&g&&g({action:p,location:z.location,delta:0})}function D(U){return Yb(U)}let z={get action(){return p},get location(){return e(s,d)},listen(U){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(fm,b),g=U,()=>{s.removeEventListener(fm,b),g=null}},createHref(U){return i(s,U)},createURL:D,encodeLocation(U){let N=D(U);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:S,replace:x,go(U){return d.go(U)}};return z}function Yb(e,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ft(r,"No window.location.(origin|href) available to create URL");let u=typeof e=="string"?e:qi(e);return u=u.replace(/ $/,"%20"),!i&&u.startsWith("//")&&(u=r+u),new URL(u,r)}function cg(e,i,r="/"){return Xb(e,i,r,!1)}function Xb(e,i,r,u){let s=typeof i=="string"?_l(i):i,f=Ge(s.pathname||"/",r);if(f==null)return null;let d=sg(e);Gb(d);let p=null;for(let g=0;p==null&&g<d.length;++g){let h=t1(f);p=$b(d[g],h,u)}return p}function sg(e,i=[],r=[],u="",s=!1){let f=(d,p,g=s,h)=>{let y={relativePath:h===void 0?d.path||"":h,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&g)return;Ft(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let b=Xe([u,y.relativePath]),S=r.concat(y);d.children&&d.children.length>0&&(Ft(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),sg(d.children,i,S,b,g)),!(d.path==null&&!d.index)&&i.push({path:b,score:Fb(b,d.index),routesMeta:S})};return e.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))f(d,p);else for(let g of fg(d.path))f(d,p,!0,g)}),i}function fg(e){let i=e.split("/");if(i.length===0)return[];let[r,...u]=i,s=r.endsWith("?"),f=r.replace(/\?$/,"");if(u.length===0)return s?[f,""]:[f];let d=fg(u.join("/")),p=[];return p.push(...d.map(g=>g===""?f:[f,g].join("/"))),s&&p.push(...d),p.map(g=>e.startsWith("/")&&g===""?"/":g)}function Gb(e){e.sort((i,r)=>i.score!==r.score?r.score-i.score:Ib(i.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var Vb=/^:[\w-]+$/,Qb=3,Zb=2,Pb=1,Kb=10,Jb=-2,hm=e=>e==="*";function Fb(e,i){let r=e.split("/"),u=r.length;return r.some(hm)&&(u+=Jb),i&&(u+=Zb),r.filter(s=>!hm(s)).reduce((s,f)=>s+(Vb.test(f)?Qb:f===""?Pb:Kb),u)}function Ib(e,i){return e.length===i.length&&e.slice(0,-1).every((u,s)=>u===i[s])?e[e.length-1]-i[i.length-1]:0}function $b(e,i,r=!1){let{routesMeta:u}=e,s={},f="/",d=[];for(let p=0;p<u.length;++p){let g=u[p],h=p===u.length-1,y=f==="/"?i:i.slice(f.length)||"/",b=Eu({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},y),S=g.route;if(!b&&h&&r&&!u[u.length-1].route.index&&(b=Eu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!b)return null;Object.assign(s,b.params),d.push({params:s,pathname:Xe([f,b.pathname]),pathnameBase:l1(Xe([f,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(f=Xe([f,b.pathnameBase]))}return d}function Eu(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,u]=Wb(e.path,e.caseSensitive,e.end),s=i.match(r);if(!s)return null;let f=s[0],d=f.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:u.reduce((h,{paramName:y,isOptional:b},S)=>{if(y==="*"){let D=p[S]||"";d=f.slice(0,f.length-D.length).replace(/(.)\/+$/,"$1")}const x=p[S];return b&&!x?h[y]=void 0:h[y]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:d,pattern:e}}function Wb(e,i=!1,r=!0){ce(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let u=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,g)=>(u.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(u.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),u]}function t1(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ce(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),e}}function Ge(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,u=e.charAt(r);return u&&u!=="/"?null:e.slice(r)||"/"}var n1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function e1(e,i="/"){let{pathname:r,search:u="",hash:s=""}=typeof e=="string"?_l(e):e,f;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?f=pm(r.substring(1),"/"):f=pm(r,i)):f=i,{pathname:f,search:i1(u),hash:r1(s)}}function pm(e,i){let r=i.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ls(e,i,r,u){return`Cannot include a '${e}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function a1(e){return e.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function Ls(e){let i=a1(e);return i.map((r,u)=>u===i.length-1?r.pathname:r.pathnameBase)}function Bs(e,i,r,u=!1){let s;typeof e=="string"?s=_l(e):(s={...e},Ft(!s.pathname||!s.pathname.includes("?"),ls("?","pathname","search",s)),Ft(!s.pathname||!s.pathname.includes("#"),ls("#","pathname","hash",s)),Ft(!s.search||!s.search.includes("#"),ls("#","search","hash",s)));let f=e===""||s.pathname==="",d=f?"/":s.pathname,p;if(d==null)p=r;else{let b=i.length-1;if(!u&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),b-=1;s.pathname=S.join("/")}p=b>=0?i[b]:"/"}let g=e1(s,p),h=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(h||y)&&(g.pathname+="/"),g}var Xe=e=>e.join("/").replace(/\/\/+/g,"/"),l1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,u1=class{constructor(e,i,r,u=!1){this.status=e,this.statusText=i||"",this.internal=u,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function o1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function c1(e){return e.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hg(e,i){let r=e;if(typeof r!="string"||!n1.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let u=r,s=!1;if(dg)try{let f=new URL(window.location.href),d=r.startsWith("//")?new URL(f.protocol+r):new URL(r),p=Ge(d.pathname,i);d.origin===f.origin&&p!=null?r=p+d.search+d.hash:s=!0}catch{ce(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var pg=["POST","PUT","PATCH","DELETE"];new Set(pg);var s1=["GET",...pg];new Set(s1);var Dl=L.createContext(null);Dl.displayName="DataRouter";var zu=L.createContext(null);zu.displayName="DataRouterState";var f1=L.createContext(!1),mg=L.createContext({isTransitioning:!1});mg.displayName="ViewTransition";var d1=L.createContext(new Map);d1.displayName="Fetchers";var h1=L.createContext(null);h1.displayName="Await";var Vn=L.createContext(null);Vn.displayName="Navigation";var Xi=L.createContext(null);Xi.displayName="Location";var se=L.createContext({outlet:null,matches:[],isDataRoute:!1});se.displayName="Route";var Hs=L.createContext(null);Hs.displayName="RouteError";var gg="REACT_ROUTER_ERROR",p1="REDIRECT",m1="ROUTE_ERROR_RESPONSE";function g1(e){if(e.startsWith(`${gg}:${p1}:{`))try{let i=JSON.parse(e.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function y1(e){if(e.startsWith(`${gg}:${m1}:{`))try{let i=JSON.parse(e.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new u1(i.status,i.statusText,i.data)}catch{}}function b1(e,{relative:i}={}){Ft(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=L.useContext(Vn),{hash:s,pathname:f,search:d}=Gi(e,{relative:i}),p=f;return r!=="/"&&(p=f==="/"?r:Xe([r,f])),u.createHref({pathname:p,search:d,hash:s})}function Ml(){return L.useContext(Xi)!=null}function ya(){return Ft(Ml(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Xi).location}var yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bg(e){L.useContext(Vn).static||L.useLayoutEffect(e)}function Cu(){let{isDataRoute:e}=L.useContext(se);return e?M1():v1()}function v1(){Ft(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let e=L.useContext(Dl),{basename:i,navigator:r}=L.useContext(Vn),{matches:u}=L.useContext(se),{pathname:s}=ya(),f=JSON.stringify(Ls(u)),d=L.useRef(!1);return bg(()=>{d.current=!0}),L.useCallback((g,h={})=>{if(ce(d.current,yg),!d.current)return;if(typeof g=="number"){r.go(g);return}let y=Bs(g,JSON.parse(f),s,h.relative==="path");e==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Xe([i,y.pathname])),(h.replace?r.replace:r.push)(y,h.state,h)},[i,r,f,s,e])}L.createContext(null);function x1(){let{matches:e}=L.useContext(se),i=e[e.length-1];return i?i.params:{}}function Gi(e,{relative:i}={}){let{matches:r}=L.useContext(se),{pathname:u}=ya(),s=JSON.stringify(Ls(r));return L.useMemo(()=>Bs(e,JSON.parse(s),u,i==="path"),[e,s,u,i])}function S1(e,i){return vg(e,i)}function vg(e,i,r,u,s){Ft(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=L.useContext(Vn),{matches:d}=L.useContext(se),p=d[d.length-1],g=p?p.params:{},h=p?p.pathname:"/",y=p?p.pathnameBase:"/",b=p&&p.route;{let X=b&&b.path||"";Sg(h,!b||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let S=ya(),x;if(i){let X=typeof i=="string"?_l(i):i;Ft(y==="/"||X.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),x=X}else x=S;let D=x.pathname||"/",z=D;if(y!=="/"){let X=y.replace(/^\//,"").split("/");z="/"+D.replace(/^\//,"").split("/").slice(X.length).join("/")}let U=cg(e,{pathname:z});ce(b||U!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ce(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=A1(U&&U.map(X=>Object.assign({},X,{params:Object.assign({},g,X.params),pathname:Xe([y,f.encodeLocation?f.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:Xe([y,f.encodeLocation?f.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),d,r,u,s);return i&&N?L.createElement(Xi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},N):N}function E1(){let e=D1(),i=o1(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,u="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:f},"ErrorBoundary")," or"," ",L.createElement("code",{style:f},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},i),r?L.createElement("pre",{style:s},r):null,d)}var k1=L.createElement(E1,null),xg=class extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){this.props.onError?this.props.onError(e,i):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=y1(e.digest);r&&(e=r)}let i=e!==void 0?L.createElement(se.Provider,{value:this.props.routeContext},L.createElement(Hs.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?L.createElement(T1,{error:e},i):i}};xg.contextType=f1;var is=new WeakMap;function T1({children:e,error:i}){let{basename:r}=L.useContext(Vn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let u=g1(i.digest);if(u){let s=is.get(i);if(s)throw s;let f=hg(u.location,r);if(dg&&!is.get(i))if(f.isExternal||u.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:u.replace}));throw is.set(i,d),d}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return e}function O1({routeContext:e,match:i,children:r}){let u=L.useContext(Dl);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),L.createElement(se.Provider,{value:e},r)}function A1(e,i=[],r=null,u=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let f=e,d=r?.errors;if(d!=null){let y=f.findIndex(b=>b.route.id&&d?.[b.route.id]!==void 0);Ft(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let p=!1,g=-1;if(r)for(let y=0;y<f.length;y++){let b=f[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=y),b.route.id){let{loaderData:S,errors:x}=r,D=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!x||x[b.route.id]===void 0);if(b.route.lazy||D){p=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}let h=r&&u?(y,b)=>{u(y,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:c1(r.matches),errorInfo:b})}:void 0;return f.reduceRight((y,b,S)=>{let x,D=!1,z=null,U=null;r&&(x=d&&b.route.id?d[b.route.id]:void 0,z=b.route.errorElement||k1,p&&(g<0&&S===0?(Sg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,U=null):g===S&&(D=!0,U=b.route.hydrateFallbackElement||null)));let N=i.concat(f.slice(0,S+1)),X=()=>{let q;return x?q=z:D?q=U:b.route.Component?q=L.createElement(b.route.Component,null):b.route.element?q=b.route.element:q=y,L.createElement(O1,{match:b,routeContext:{outlet:y,matches:N,isDataRoute:r!=null},children:q})};return r&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?L.createElement(xg,{location:r.location,revalidation:r.revalidation,component:z,error:x,children:X(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:h}):X()},null)}function qs(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z1(e){let i=L.useContext(Dl);return Ft(i,qs(e)),i}function C1(e){let i=L.useContext(zu);return Ft(i,qs(e)),i}function w1(e){let i=L.useContext(se);return Ft(i,qs(e)),i}function Ys(e){let i=w1(e),r=i.matches[i.matches.length-1];return Ft(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function _1(){return Ys("useRouteId")}function D1(){let e=L.useContext(Hs),i=C1("useRouteError"),r=Ys("useRouteError");return e!==void 0?e:i.errors?.[r]}function M1(){let{router:e}=z1("useNavigate"),i=Ys("useNavigate"),r=L.useRef(!1);return bg(()=>{r.current=!0}),L.useCallback(async(s,f={})=>{ce(r.current,yg),r.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:i,...f}))},[e,i])}var mm={};function Sg(e,i,r){!i&&!mm[e]&&(mm[e]=!0,ce(!1,r))}L.memo(R1);function R1({routes:e,future:i,state:r,onError:u}){return vg(e,void 0,r,u,i)}function N1({to:e,replace:i,state:r,relative:u}){Ft(Ml(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=L.useContext(Vn);ce(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=L.useContext(se),{pathname:d}=ya(),p=Cu(),g=Bs(e,Ls(f),d,u==="path"),h=JSON.stringify(g);return L.useEffect(()=>{p(JSON.parse(h),{replace:i,state:r,relative:u})},[p,h,u,i,r]),null}function bu(e){Ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function j1({basename:e="/",children:i=null,location:r,navigationType:u="POP",navigator:s,static:f=!1,unstable_useTransitions:d}){Ft(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),g=L.useMemo(()=>({basename:p,navigator:s,static:f,unstable_useTransitions:d,future:{}}),[p,s,f,d]);typeof r=="string"&&(r=_l(r));let{pathname:h="/",search:y="",hash:b="",state:S=null,key:x="default"}=r,D=L.useMemo(()=>{let z=Ge(h,p);return z==null?null:{location:{pathname:z,search:y,hash:b,state:S,key:x},navigationType:u}},[p,h,y,b,S,x,u]);return ce(D!=null,`<Router basename="${p}"> is not able to match the URL "${h}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:L.createElement(Vn.Provider,{value:g},L.createElement(Xi.Provider,{children:i,value:D}))}function U1({children:e,location:i}){return S1(Es(e),i)}function Es(e,i=[]){let r=[];return L.Children.forEach(e,(u,s)=>{if(!L.isValidElement(u))return;let f=[...i,s];if(u.type===L.Fragment){r.push.apply(r,Es(u.props.children,f));return}Ft(u.type===bu,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ft(!u.props.index||!u.props.children,"An index route cannot have child routes.");let d={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(d.children=Es(u.props.children,f)),r.push(d)}),r}var vu="get",xu="application/x-www-form-urlencoded";function wu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function L1(e){return wu(e)&&e.tagName.toLowerCase()==="button"}function B1(e){return wu(e)&&e.tagName.toLowerCase()==="form"}function H1(e){return wu(e)&&e.tagName.toLowerCase()==="input"}function q1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Y1(e,i){return e.button===0&&(!i||i==="_self")&&!q1(e)}var fu=null;function X1(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var G1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rs(e){return e!=null&&!G1.has(e)?(ce(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xu}"`),null):e}function V1(e,i){let r,u,s,f,d;if(B1(e)){let p=e.getAttribute("action");u=p?Ge(p,i):null,r=e.getAttribute("method")||vu,s=rs(e.getAttribute("enctype"))||xu,f=new FormData(e)}else if(L1(e)||H1(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||p.getAttribute("action");if(u=g?Ge(g,i):null,r=e.getAttribute("formmethod")||p.getAttribute("method")||vu,s=rs(e.getAttribute("formenctype"))||rs(p.getAttribute("enctype"))||xu,f=new FormData(p,e),!X1()){let{name:h,type:y,value:b}=e;if(y==="image"){let S=h?`${h}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else h&&f.append(h,b)}}else{if(wu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=vu,u=null,s=xu,d=e}return f&&s==="text/plain"&&(d=f,f=void 0),{action:u,method:r.toLowerCase(),encType:s,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xs(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function Q1(e,i,r,u){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${u}`:s.pathname=`${s.pathname}.${u}`:s.pathname==="/"?s.pathname=`_root.${u}`:i&&Ge(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${u}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${u}`,s}async function Z1(e,i){if(e.id in i)return i[e.id];try{let r=await import(e.module);return i[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function P1(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function K1(e,i,r){let u=await Promise.all(e.map(async s=>{let f=i.routes[s.route.id];if(f){let d=await Z1(f,r);return d.links?d.links():[]}return[]}));return $1(u.flat(1).filter(P1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function gm(e,i,r,u,s,f){let d=(g,h)=>r[h]?g.route.id!==r[h].route.id:!0,p=(g,h)=>r[h].pathname!==g.pathname||r[h].route.path?.endsWith("*")&&r[h].params["*"]!==g.params["*"];return f==="assets"?i.filter((g,h)=>d(g,h)||p(g,h)):f==="data"?i.filter((g,h)=>{let y=u.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(d(g,h)||p(g,h))return!0;if(g.route.shouldRevalidate){let b=g.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function J1(e,i,{includeHydrateFallback:r}={}){return F1(e.map(u=>{let s=i.routes[u.route.id];if(!s)return[];let f=[s.module];return s.clientActionModule&&(f=f.concat(s.clientActionModule)),s.clientLoaderModule&&(f=f.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(f=f.concat(s.hydrateFallbackModule)),s.imports&&(f=f.concat(s.imports)),f}).flat(1))}function F1(e){return[...new Set(e)]}function I1(e){let i={},r=Object.keys(e).sort();for(let u of r)i[u]=e[u];return i}function $1(e,i){let r=new Set;return new Set(i),e.reduce((u,s)=>{let f=JSON.stringify(I1(s));return r.has(f)||(r.add(f),u.push({key:f,link:s})),u},[])}function Eg(){let e=L.useContext(Dl);return Xs(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function W1(){let e=L.useContext(zu);return Xs(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Gs=L.createContext(void 0);Gs.displayName="FrameworkContext";function kg(){let e=L.useContext(Gs);return Xs(e,"You must render this element inside a <HydratedRouter> element"),e}function tv(e,i){let r=L.useContext(Gs),[u,s]=L.useState(!1),[f,d]=L.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:h,onMouseLeave:y,onTouchStart:b}=i,S=L.useRef(null);L.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let z=N=>{N.forEach(X=>{d(X.isIntersecting)})},U=new IntersectionObserver(z,{threshold:.5});return S.current&&U.observe(S.current),()=>{U.disconnect()}}},[e]),L.useEffect(()=>{if(u){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[u]);let x=()=>{s(!0)},D=()=>{s(!1),d(!1)};return r?e!=="intent"?[f,S,{}]:[f,S,{onFocus:_i(p,x),onBlur:_i(g,D),onMouseEnter:_i(h,x),onMouseLeave:_i(y,D),onTouchStart:_i(b,x)}]:[!1,S,{}]}function _i(e,i){return r=>{e&&e(r),r.defaultPrevented||i(r)}}function nv({page:e,...i}){let{router:r}=Eg(),u=L.useMemo(()=>cg(r.routes,e,r.basename),[r.routes,e,r.basename]);return u?L.createElement(av,{page:e,matches:u,...i}):null}function ev(e){let{manifest:i,routeModules:r}=kg(),[u,s]=L.useState([]);return L.useEffect(()=>{let f=!1;return K1(e,i,r).then(d=>{f||s(d)}),()=>{f=!0}},[e,i,r]),u}function av({page:e,matches:i,...r}){let u=ya(),{future:s,manifest:f,routeModules:d}=kg(),{basename:p}=Eg(),{loaderData:g,matches:h}=W1(),y=L.useMemo(()=>gm(e,i,h,f,u,"data"),[e,i,h,f,u]),b=L.useMemo(()=>gm(e,i,h,f,u,"assets"),[e,i,h,f,u]),S=L.useMemo(()=>{if(e===u.pathname+u.search+u.hash)return[];let z=new Set,U=!1;if(i.forEach(X=>{let q=f.routes[X.route.id];!q||!q.hasLoader||(!y.some(at=>at.route.id===X.route.id)&&X.route.id in g&&d[X.route.id]?.shouldRevalidate||q.hasClientLoader?U=!0:z.add(X.route.id))}),z.size===0)return[];let N=Q1(e,p,s.unstable_trailingSlashAwareDataRequests,"data");return U&&z.size>0&&N.searchParams.set("_routes",i.filter(X=>z.has(X.route.id)).map(X=>X.route.id).join(",")),[N.pathname+N.search]},[p,s.unstable_trailingSlashAwareDataRequests,g,u,f,y,i,e,d]),x=L.useMemo(()=>J1(b,f),[b,f]),D=ev(b);return L.createElement(L.Fragment,null,S.map(z=>L.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...r})),x.map(z=>L.createElement("link",{key:z,rel:"modulepreload",href:z,...r})),D.map(({key:z,link:U})=>L.createElement("link",{key:z,nonce:r.nonce,...U,crossOrigin:U.crossOrigin??r.crossOrigin})))}function lv(...e){return i=>{e.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iv&&(window.__reactRouterVersion="7.13.0")}catch{}function rv({basename:e,children:i,unstable_useTransitions:r,window:u}){let s=L.useRef();s.current==null&&(s.current=Bb({window:u,v5Compat:!0}));let f=s.current,[d,p]=L.useState({action:f.action,location:f.location}),g=L.useCallback(h=>{r===!1?p(h):L.startTransition(()=>p(h))},[r]);return L.useLayoutEffect(()=>f.listen(g),[f,g]),L.createElement(j1,{basename:e,children:i,location:d.location,navigationType:d.action,navigator:f,unstable_useTransitions:r})}var Tg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Og=L.forwardRef(function({onClick:i,discover:r="render",prefetch:u="none",relative:s,reloadDocument:f,replace:d,state:p,target:g,to:h,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:S,...x},D){let{basename:z,unstable_useTransitions:U}=L.useContext(Vn),N=typeof h=="string"&&Tg.test(h),X=hg(h,z);h=X.to;let q=b1(h,{relative:s}),[at,tt,H]=tv(u,x),J=sv(h,{replace:d,state:p,target:g,preventScrollReset:y,relative:s,viewTransition:b,unstable_defaultShouldRevalidate:S,unstable_useTransitions:U});function ot(gt){i&&i(gt),gt.defaultPrevented||J(gt)}let lt=L.createElement("a",{...x,...H,href:X.absoluteURL||q,onClick:X.isExternal||f?i:ot,ref:lv(D,tt),target:g,"data-discover":!N&&r==="render"?"true":void 0});return at&&!N?L.createElement(L.Fragment,null,lt,L.createElement(nv,{page:q})):lt});Og.displayName="Link";var uv=L.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:u="",end:s=!1,style:f,to:d,viewTransition:p,children:g,...h},y){let b=Gi(d,{relative:h.relative}),S=ya(),x=L.useContext(zu),{navigator:D,basename:z}=L.useContext(Vn),U=x!=null&&mv(b)&&p===!0,N=D.encodeLocation?D.encodeLocation(b).pathname:b.pathname,X=S.pathname,q=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(X=X.toLowerCase(),q=q?q.toLowerCase():null,N=N.toLowerCase()),q&&z&&(q=Ge(q,z)||q);const at=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let tt=X===N||!s&&X.startsWith(N)&&X.charAt(at)==="/",H=q!=null&&(q===N||!s&&q.startsWith(N)&&q.charAt(N.length)==="/"),J={isActive:tt,isPending:H,isTransitioning:U},ot=tt?i:void 0,lt;typeof u=="function"?lt=u(J):lt=[u,tt?"active":null,H?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let gt=typeof f=="function"?f(J):f;return L.createElement(Og,{...h,"aria-current":ot,className:lt,ref:y,style:gt,to:d,viewTransition:p},typeof g=="function"?g(J):g)});uv.displayName="NavLink";var ov=L.forwardRef(({discover:e="render",fetcherKey:i,navigate:r,reloadDocument:u,replace:s,state:f,method:d=vu,action:p,onSubmit:g,relative:h,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:S,...x},D)=>{let{unstable_useTransitions:z}=L.useContext(Vn),U=hv(),N=pv(p,{relative:h}),X=d.toLowerCase()==="get"?"get":"post",q=typeof p=="string"&&Tg.test(p),at=tt=>{if(g&&g(tt),tt.defaultPrevented)return;tt.preventDefault();let H=tt.nativeEvent.submitter,J=H?.getAttribute("formmethod")||d,ot=()=>U(H||tt.currentTarget,{fetcherKey:i,method:J,navigate:r,replace:s,state:f,relative:h,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:S});z&&r!==!1?L.startTransition(()=>ot()):ot()};return L.createElement("form",{ref:D,method:X,action:N,onSubmit:u?g:at,...x,"data-discover":!q&&e==="render"?"true":void 0})});ov.displayName="Form";function cv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ag(e){let i=L.useContext(Dl);return Ft(i,cv(e)),i}function sv(e,{target:i,replace:r,state:u,preventScrollReset:s,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g}={}){let h=Cu(),y=ya(),b=Gi(e,{relative:f});return L.useCallback(S=>{if(Y1(S,i)){S.preventDefault();let x=r!==void 0?r:qi(y)===qi(b),D=()=>h(e,{replace:x,state:u,preventScrollReset:s,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p});g?L.startTransition(()=>D()):D()}},[y,h,b,r,u,i,e,s,f,d,p,g])}var fv=0,dv=()=>`__${String(++fv)}__`;function hv(){let{router:e}=Ag("useSubmit"),{basename:i}=L.useContext(Vn),r=_1(),u=e.fetch,s=e.navigate;return L.useCallback(async(f,d={})=>{let{action:p,method:g,encType:h,formData:y,body:b}=V1(f,i);if(d.navigate===!1){let S=d.fetcherKey||dv();await u(S,r,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:b,formMethod:d.method||g,formEncType:d.encType||h,flushSync:d.flushSync})}else await s(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:b,formMethod:d.method||g,formEncType:d.encType||h,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[u,s,i,r])}function pv(e,{relative:i}={}){let{basename:r}=L.useContext(Vn),u=L.useContext(se);Ft(u,"useFormAction must be used inside a RouteContext");let[s]=u.matches.slice(-1),f={...Gi(e||".",{relative:i})},d=ya();if(e==null){f.search=d.search;let p=new URLSearchParams(f.search),g=p.getAll("index");if(g.some(y=>y==="")){p.delete("index"),g.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();f.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:Xe([r,f.pathname])),qi(f)}function mv(e,{relative:i}={}){let r=L.useContext(mg);Ft(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Ag("useViewTransitionState"),s=Gi(e,{relative:i});if(!r.isTransitioning)return!1;let f=Ge(r.currentLocation.pathname,u)||r.currentLocation.pathname,d=Ge(r.nextLocation.pathname,u)||r.nextLocation.pathname;return Eu(s.pathname,d)!=null||Eu(s.pathname,f)!=null}const _u="/api/incidents";class gv extends Error{status;body;constructor(i,r,u){super(i),this.name="ApiError",this.status=r,this.body=u}}async function yv(e){try{return await e.json()}catch{return}}async function Du(e){if(e.ok)return e.status===204?void 0:await e.json();const i=await yv(e);throw new gv(`Request failed with status ${e.status}`,e.status,i)}async function bv(){const e=await fetch(_u,{method:"GET",headers:{Accept:"application/json"}});return await Du(e)}async function ym(e){const i=await fetch(`${_u}/${e}`,{method:"GET",headers:{Accept:"application/json"}});return Du(i)}async function vv(e,i){const r=await fetch(`${_u}/${e}/events`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)});return Du(r)}async function xv(e){const i=await fetch(_u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});return(await Du(i)).incidentId}async function zg(e){const i=await e.text();if(!i)return null;try{return JSON.parse(i)}catch{return{message:i}}}function Cg(e,i){if(!e.ok)throw i??{message:`HTTP ${e.status}`}}async function Sv(e){const i=await fetch(`/api/incidents/${e}/ai/summary/preview`,{method:"POST"}),r=await zg(i);return Cg(i,r),r}async function Ev(e){const i=await fetch(`/api/incidents/${e}/ai/postmortem/preview`,{method:"POST"}),r=await zg(i);return Cg(i,r),r}const ks={IncidentDeclared:0,NoteAdded:1,StatusChanged:2,Mitigated:3,Resolved:4,Reopened:5},ku={Sev0:0,Sev1:1,Sev2:2,Sev3:3,Sev4:4},wg={Active:0,Mitigated:1,Resolved:2};function Ui(e,i){if(i==null)return"Unknown";console.debug("getEnumDisplayName - value:",i,"enumObj:",e);const r=Object.keys(e).find(s=>e[s]===i),u=r?r.replace(/([a-z])([A-Z])/g,"$1 $2"):"Unknown";return console.debug("getEnumDisplayName - formattedKey:",u),u}const kv=({isOpen:e,onClose:i,onCreate:r})=>{const[u,s]=L.useState({title:"",severity:ku.Sev0,occurredAtUtc:new Date,details:void 0,createdBy:void 0}),f=p=>{const{name:g,value:h}=p.target;s(y=>({...y,[g]:g==="severity"?Number(h):h}))},d=p=>{p.preventDefault(),r(u),i()};return e?_.jsx("div",{className:"modal-backdrop",children:_.jsxs("div",{className:"modal",children:[_.jsx("h2",{children:"Create New Incident"}),_.jsxs("form",{onSubmit:d,className:"create-incident-form",children:[_.jsxs("fieldset",{children:[_.jsx("legend",{children:"Incident Details"}),_.jsxs("label",{htmlFor:"title",children:["Title:",_.jsx("input",{id:"title",type:"text",name:"title",value:u.title,onChange:f,placeholder:"Enter a title for the incident",required:!0})]}),_.jsxs("label",{htmlFor:"severity",children:["Severity:",_.jsx("select",{id:"severity",name:"severity",value:u.severity,onChange:f,required:!0,children:Object.entries(ku).map(([p,g])=>_.jsx("option",{value:g,children:p},g))})]}),_.jsxs("label",{htmlFor:"occurredAtUtc",children:["Occurred At (UTC):",_.jsx("input",{id:"occurredAtUtc",type:"datetime-local",name:"occurredAtUtc",value:u.occurredAtUtc.toISOString().slice(0,16),onChange:f,required:!0})]})]}),_.jsxs("fieldset",{children:[_.jsx("legend",{children:"Additional Information"}),_.jsxs("label",{htmlFor:"details",children:["Details:",_.jsx("textarea",{id:"details",name:"details",value:u.details||"",onChange:f,placeholder:"Provide additional details (optional)",required:!0})]}),_.jsxs("label",{htmlFor:"createdBy",children:["Created By:",_.jsx("input",{id:"createdBy",type:"text",name:"createdBy",value:u.createdBy||"",onChange:f,placeholder:"Enter your name (optional)",required:!0})]})]}),_.jsxs("div",{className:"modal-buttons",children:[_.jsx("button",{type:"button",className:"cancel-button",onClick:i,children:"Cancel"}),_.jsx("button",{type:"submit",className:"create-button",children:"Create Incident"})]})]})]})}):null};function Tv(){const[e,i]=L.useState([]),[r,u]=L.useState(!1),[s,f]=L.useState(""),[d,p]=L.useState(!1),g=Cu();console.log("Incidents: ",e),L.useEffect(()=>{u(!0),f(""),(async()=>{try{let y=await bv();i(y)}catch(y){f("Failed to fetch incidents. Please try again later."),console.error("Error fetching incidents:",y)}finally{u(!1)}})()},[]),console.debug("Processed incidents:",e);const h=async y=>{try{const b=await xv(y);g(`/incidents/${b}`)}catch(b){console.error("Error creating incident:",b)}};return _.jsxs("div",{className:"incident-list-page",children:[_.jsx("h1",{className:"page-title",children:"Incident Management"}),_.jsx("button",{onClick:()=>p(!0),children:"Create New Incident"}),_.jsx(kv,{isOpen:d,onClose:()=>p(!1),onCreate:h}),r?_.jsx("div",{className:"loading-message",children:"Loading incidents, please wait..."}):s?_.jsx("div",{className:"error-message",children:s}):_.jsx("div",{className:"incident-card-container",children:e.map(y=>_.jsxs("div",{className:"incident-card",onClick:()=>g(`/incidents/${y.incidentId}`),children:[_.jsx("h2",{children:y.title}),_.jsxs("p",{children:[_.jsx("strong",{children:"Severity:"})," ",Ui(ku,y.severity)]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Status:"})," ",Ui(wg,y.status)]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Created At:"})," ",new Date(y.createdAtUtc).toLocaleString(void 0,{timeZone:"UTC",timeZoneName:"short"})]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Latest Event At:"})," ",new Date(y.latestEventAtUtc).toLocaleString(void 0,{timeZone:"UTC",timeZoneName:"short"})]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Event Count:"})," ",y.eventCount]})]},y.incidentId))})]})}function Ov(e,i){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const Av=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Cv={};function bm(e,i){return(Cv.jsx?zv:Av).test(e)}const wv=/[ \t\n\f\r]/g;function _v(e){return typeof e=="object"?e.type==="text"?vm(e.value):!1:vm(e)}function vm(e){return e.replace(wv,"")===""}class Vi{constructor(i,r,u){this.normal=r,this.property=i,u&&(this.space=u)}}Vi.prototype.normal={};Vi.prototype.property={};Vi.prototype.space=void 0;function _g(e,i){const r={},u={};for(const s of e)Object.assign(r,s.property),Object.assign(u,s.normal);return new Vi(r,u,i)}function Ts(e){return e.toLowerCase()}class Mn{constructor(i,r){this.attribute=r,this.property=i}}Mn.prototype.attribute="";Mn.prototype.booleanish=!1;Mn.prototype.boolean=!1;Mn.prototype.commaOrSpaceSeparated=!1;Mn.prototype.commaSeparated=!1;Mn.prototype.defined=!1;Mn.prototype.mustUseProperty=!1;Mn.prototype.number=!1;Mn.prototype.overloadedBoolean=!1;Mn.prototype.property="";Mn.prototype.spaceSeparated=!1;Mn.prototype.space=void 0;let Dv=0;const xt=La(),rn=La(),Os=La(),K=La(),Gt=La(),Cl=La(),Yn=La();function La(){return 2**++Dv}const As=Object.freeze(Object.defineProperty({__proto__:null,boolean:xt,booleanish:rn,commaOrSpaceSeparated:Yn,commaSeparated:Cl,number:K,overloadedBoolean:Os,spaceSeparated:Gt},Symbol.toStringTag,{value:"Module"})),us=Object.keys(As);class Vs extends Mn{constructor(i,r,u,s){let f=-1;if(super(i,r),xm(this,"space",s),typeof u=="number")for(;++f<us.length;){const d=us[f];xm(this,us[f],(u&As[d])===As[d])}}}Vs.prototype.defined=!0;function xm(e,i,r){r&&(e[i]=r)}function Rl(e){const i={},r={};for(const[u,s]of Object.entries(e.properties)){const f=new Vs(u,e.transform(e.attributes||{},u),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(u)&&(f.mustUseProperty=!0),i[u]=f,r[Ts(u)]=u,r[Ts(f.attribute)]=u}return new Vi(i,r,e.space)}const Dg=Rl({properties:{ariaActiveDescendant:null,ariaAtomic:rn,ariaAutoComplete:null,ariaBusy:rn,ariaChecked:rn,ariaColCount:K,ariaColIndex:K,ariaColSpan:K,ariaControls:Gt,ariaCurrent:null,ariaDescribedBy:Gt,ariaDetails:null,ariaDisabled:rn,ariaDropEffect:Gt,ariaErrorMessage:null,ariaExpanded:rn,ariaFlowTo:Gt,ariaGrabbed:rn,ariaHasPopup:null,ariaHidden:rn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Gt,ariaLevel:K,ariaLive:null,ariaModal:rn,ariaMultiLine:rn,ariaMultiSelectable:rn,ariaOrientation:null,ariaOwns:Gt,ariaPlaceholder:null,ariaPosInSet:K,ariaPressed:rn,ariaReadOnly:rn,ariaRelevant:null,ariaRequired:rn,ariaRoleDescription:Gt,ariaRowCount:K,ariaRowIndex:K,ariaRowSpan:K,ariaSelected:rn,ariaSetSize:K,ariaSort:null,ariaValueMax:K,ariaValueMin:K,ariaValueNow:K,ariaValueText:null,role:null},transform(e,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function Mg(e,i){return i in e?e[i]:i}function Rg(e,i){return Mg(e,i.toLowerCase())}const Mv=Rl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Cl,acceptCharset:Gt,accessKey:Gt,action:null,allow:null,allowFullScreen:xt,allowPaymentRequest:xt,allowUserMedia:xt,alt:null,as:null,async:xt,autoCapitalize:null,autoComplete:Gt,autoFocus:xt,autoPlay:xt,blocking:Gt,capture:null,charSet:null,checked:xt,cite:null,className:Gt,cols:K,colSpan:null,content:null,contentEditable:rn,controls:xt,controlsList:Gt,coords:K|Cl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:xt,defer:xt,dir:null,dirName:null,disabled:xt,download:Os,draggable:rn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:xt,formTarget:null,headers:Gt,height:K,hidden:Os,high:K,href:null,hrefLang:null,htmlFor:Gt,httpEquiv:Gt,id:null,imageSizes:null,imageSrcSet:null,inert:xt,inputMode:null,integrity:null,is:null,isMap:xt,itemId:null,itemProp:Gt,itemRef:Gt,itemScope:xt,itemType:Gt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:xt,low:K,manifest:null,max:null,maxLength:K,media:null,method:null,min:null,minLength:K,multiple:xt,muted:xt,name:null,nonce:null,noModule:xt,noValidate:xt,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:xt,optimum:K,pattern:null,ping:Gt,placeholder:null,playsInline:xt,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:xt,referrerPolicy:null,rel:Gt,required:xt,reversed:xt,rows:K,rowSpan:K,sandbox:Gt,scope:null,scoped:xt,seamless:xt,selected:xt,shadowRootClonable:xt,shadowRootDelegatesFocus:xt,shadowRootMode:null,shape:null,size:K,sizes:null,slot:null,span:K,spellCheck:rn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:K,step:null,style:null,tabIndex:K,target:null,title:null,translate:null,type:null,typeMustMatch:xt,useMap:null,value:rn,width:K,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Gt,axis:null,background:null,bgColor:null,border:K,borderColor:null,bottomMargin:K,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:xt,declare:xt,event:null,face:null,frame:null,frameBorder:null,hSpace:K,leftMargin:K,link:null,longDesc:null,lowSrc:null,marginHeight:K,marginWidth:K,noResize:xt,noHref:xt,noShade:xt,noWrap:xt,object:null,profile:null,prompt:null,rev:null,rightMargin:K,rules:null,scheme:null,scrolling:rn,standby:null,summary:null,text:null,topMargin:K,valueType:null,version:null,vAlign:null,vLink:null,vSpace:K,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:xt,disableRemotePlayback:xt,prefix:null,property:null,results:K,security:null,unselectable:null},space:"html",transform:Rg}),Rv=Rl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Yn,accentHeight:K,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:K,amplitude:K,arabicForm:null,ascent:K,attributeName:null,attributeType:null,azimuth:K,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:K,by:null,calcMode:null,capHeight:K,className:Gt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:K,diffuseConstant:K,direction:null,display:null,dur:null,divisor:K,dominantBaseline:null,download:xt,dx:null,dy:null,edgeMode:null,editable:null,elevation:K,enableBackground:null,end:null,event:null,exponent:K,externalResourcesRequired:null,fill:null,fillOpacity:K,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Cl,g2:Cl,glyphName:Cl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:K,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:K,horizOriginX:K,horizOriginY:K,id:null,ideographic:K,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:K,k:K,k1:K,k2:K,k3:K,k4:K,kernelMatrix:Yn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:K,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:K,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:K,overlineThickness:K,paintOrder:null,panose1:null,path:null,pathLength:K,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Gt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:K,pointsAtY:K,pointsAtZ:K,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Yn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Yn,rev:Yn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Yn,requiredFeatures:Yn,requiredFonts:Yn,requiredFormats:Yn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:K,specularExponent:K,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:K,strikethroughThickness:K,string:null,stroke:null,strokeDashArray:Yn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:K,strokeOpacity:K,strokeWidth:null,style:null,surfaceScale:K,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Yn,tabIndex:K,tableValues:null,target:null,targetX:K,targetY:K,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Yn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:K,underlineThickness:K,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:K,values:null,vAlphabetic:K,vMathematical:K,vectorEffect:null,vHanging:K,vIdeographic:K,version:null,vertAdvY:K,vertOriginX:K,vertOriginY:K,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:K,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Mg}),Ng=Rl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,i){return"xlink:"+i.slice(5).toLowerCase()}}),jg=Rl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Rg}),Ug=Rl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,i){return"xml:"+i.slice(3).toLowerCase()}}),Nv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},jv=/[A-Z]/g,Sm=/-[a-z]/g,Uv=/^data[-\w.:]+$/i;function Lv(e,i){const r=Ts(i);let u=i,s=Mn;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Uv.test(i)){if(i.charAt(4)==="-"){const f=i.slice(5).replace(Sm,Hv);u="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=i.slice(4);if(!Sm.test(f)){let d=f.replace(jv,Bv);d.charAt(0)!=="-"&&(d="-"+d),i="data"+d}}s=Vs}return new s(u,i)}function Bv(e){return"-"+e.toLowerCase()}function Hv(e){return e.charAt(1).toUpperCase()}const qv=_g([Dg,Mv,Ng,jg,Ug],"html"),Qs=_g([Dg,Rv,Ng,jg,Ug],"svg");function Yv(e){return e.join(" ").trim()}var Al={},os,Em;function Xv(){if(Em)return os;Em=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,p=/^\s+|\s+$/g,g=`
`,h="/",y="*",b="",S="comment",x="declaration";function D(U,N){if(typeof U!="string")throw new TypeError("First argument must be a string");if(!U)return[];N=N||{};var X=1,q=1;function at(rt){var F=rt.match(i);F&&(X+=F.length);var C=rt.lastIndexOf(g);q=~C?rt.length-C:q+rt.length}function tt(){var rt={line:X,column:q};return function(F){return F.position=new H(rt),lt(),F}}function H(rt){this.start=rt,this.end={line:X,column:q},this.source=N.source}H.prototype.content=U;function J(rt){var F=new Error(N.source+":"+X+":"+q+": "+rt);if(F.reason=rt,F.filename=N.source,F.line=X,F.column=q,F.source=U,!N.silent)throw F}function ot(rt){var F=rt.exec(U);if(F){var C=F[0];return at(C),U=U.slice(C.length),F}}function lt(){ot(r)}function gt(rt){var F;for(rt=rt||[];F=nt();)F!==!1&&rt.push(F);return rt}function nt(){var rt=tt();if(!(h!=U.charAt(0)||y!=U.charAt(1))){for(var F=2;b!=U.charAt(F)&&(y!=U.charAt(F)||h!=U.charAt(F+1));)++F;if(F+=2,b===U.charAt(F-1))return J("End of comment missing");var C=U.slice(2,F-2);return q+=2,at(C),U=U.slice(F),q+=2,rt({type:S,comment:C})}}function W(){var rt=tt(),F=ot(u);if(F){if(nt(),!ot(s))return J("property missing ':'");var C=ot(f),P=rt({type:x,property:z(F[0].replace(e,b)),value:C?z(C[0].replace(e,b)):b});return ot(d),P}}function Ot(){var rt=[];gt(rt);for(var F;F=W();)F!==!1&&(rt.push(F),gt(rt));return rt}return lt(),Ot()}function z(U){return U?U.replace(p,b):b}return os=D,os}var km;function Gv(){if(km)return Al;km=1;var e=Al&&Al.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(Al,"__esModule",{value:!0}),Al.default=r;const i=e(Xv());function r(u,s){let f=null;if(!u||typeof u!="string")return f;const d=(0,i.default)(u),p=typeof s=="function";return d.forEach(g=>{if(g.type!=="declaration")return;const{property:h,value:y}=g;p?s(h,y,g):y&&(f=f||{},f[h]=y)}),f}return Al}var Di={},Tm;function Vv(){if(Tm)return Di;Tm=1,Object.defineProperty(Di,"__esModule",{value:!0}),Di.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,f=function(h){return!h||r.test(h)||e.test(h)},d=function(h,y){return y.toUpperCase()},p=function(h,y){return"".concat(y,"-")},g=function(h,y){return y===void 0&&(y={}),f(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(s,p):h=h.replace(u,p),h.replace(i,d))};return Di.camelCase=g,Di}var Mi,Om;function Qv(){if(Om)return Mi;Om=1;var e=Mi&&Mi.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},i=e(Gv()),r=Vv();function u(s,f){var d={};return!s||typeof s!="string"||(0,i.default)(s,function(p,g){p&&g&&(d[(0,r.camelCase)(p,f)]=g)}),d}return u.default=u,Mi=u,Mi}var Zv=Qv();const Pv=js(Zv),Lg=Bg("end"),Zs=Bg("start");function Bg(e){return i;function i(r){const u=r&&r.position&&r.position[e]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Kv(e){const i=Zs(e),r=Lg(e);if(i&&r)return{start:i,end:r}}function Li(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Am(e.position):"start"in e||"end"in e?Am(e):"line"in e||"column"in e?zs(e):""}function zs(e){return zm(e&&e.line)+":"+zm(e&&e.column)}function Am(e){return zs(e&&e.start)+"-"+zs(e&&e.end)}function zm(e){return e&&typeof e=="number"?e:1}class bn extends Error{constructor(i,r,u){super(),typeof r=="string"&&(u=r,r=void 0);let s="",f={},d=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof i=="string"?s=i:!f.cause&&i&&(d=!0,s=i.message,f.cause=i),!f.ruleId&&!f.source&&typeof u=="string"){const g=u.indexOf(":");g===-1?f.ruleId=u:(f.source=u.slice(0,g),f.ruleId=u.slice(g+1))}if(!f.place&&f.ancestors&&f.ancestors){const g=f.ancestors[f.ancestors.length-1];g&&(f.place=g.position)}const p=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=p?p.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=p?p.line:void 0,this.name=Li(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=d&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}bn.prototype.file="";bn.prototype.name="";bn.prototype.reason="";bn.prototype.message="";bn.prototype.stack="";bn.prototype.column=void 0;bn.prototype.line=void 0;bn.prototype.ancestors=void 0;bn.prototype.cause=void 0;bn.prototype.fatal=void 0;bn.prototype.place=void 0;bn.prototype.ruleId=void 0;bn.prototype.source=void 0;const Ps={}.hasOwnProperty,Jv=new Map,Fv=/[A-Z]/g,Iv=new Set(["table","tbody","thead","tfoot","tr"]),$v=new Set(["td","th"]),Hg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Wv(e,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let u;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=ux(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=rx(r,i.jsx,i.jsxs)}const s={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:u,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?Qs:qv,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},f=qg(s,e,void 0);return f&&typeof f!="string"?f:s.create(e,s.Fragment,{children:f||void 0},void 0)}function qg(e,i,r){if(i.type==="element")return tx(e,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return nx(e,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return ax(e,i,r);if(i.type==="mdxjsEsm")return ex(e,i);if(i.type==="root")return lx(e,i,r);if(i.type==="text")return ix(e,i)}function tx(e,i,r){const u=e.schema;let s=u;i.tagName.toLowerCase()==="svg"&&u.space==="html"&&(s=Qs,e.schema=s),e.ancestors.push(i);const f=Xg(e,i.tagName,!1),d=ox(e,i);let p=Js(e,i);return Iv.has(i.tagName)&&(p=p.filter(function(g){return typeof g=="string"?!_v(g):!0})),Yg(e,d,f,i),Ks(d,p),e.ancestors.pop(),e.schema=u,e.create(i,f,d,r)}function nx(e,i){if(i.data&&i.data.estree&&e.evaluater){const u=i.data.estree.body[0];return u.type,e.evaluater.evaluateExpression(u.expression)}Yi(e,i.position)}function ex(e,i){if(i.data&&i.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(i.data.estree);Yi(e,i.position)}function ax(e,i,r){const u=e.schema;let s=u;i.name==="svg"&&u.space==="html"&&(s=Qs,e.schema=s),e.ancestors.push(i);const f=i.name===null?e.Fragment:Xg(e,i.name,!0),d=cx(e,i),p=Js(e,i);return Yg(e,d,f,i),Ks(d,p),e.ancestors.pop(),e.schema=u,e.create(i,f,d,r)}function lx(e,i,r){const u={};return Ks(u,Js(e,i)),e.create(i,e.Fragment,u,r)}function ix(e,i){return i.value}function Yg(e,i,r,u){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(i.node=u)}function Ks(e,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(e.children=r)}}function rx(e,i,r){return u;function u(s,f,d,p){const h=Array.isArray(d.children)?r:i;return p?h(f,d,p):h(f,d)}}function ux(e,i){return r;function r(u,s,f,d){const p=Array.isArray(f.children),g=Zs(u);return i(s,f,d,p,{columnNumber:g?g.column-1:void 0,fileName:e,lineNumber:g?g.line:void 0},void 0)}}function ox(e,i){const r={};let u,s;for(s in i.properties)if(s!=="children"&&Ps.call(i.properties,s)){const f=sx(e,s,i.properties[s]);if(f){const[d,p]=f;e.tableCellAlignToStyle&&d==="align"&&typeof p=="string"&&$v.has(i.tagName)?u=p:r[d]=p}}if(u){const f=r.style||(r.style={});f[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return r}function cx(e,i){const r={};for(const u of i.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&e.evaluater){const f=u.data.estree.body[0];f.type;const d=f.expression;d.type;const p=d.properties[0];p.type,Object.assign(r,e.evaluater.evaluateExpression(p.argument))}else Yi(e,i.position);else{const s=u.name;let f;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&e.evaluater){const p=u.value.data.estree.body[0];p.type,f=e.evaluater.evaluateExpression(p.expression)}else Yi(e,i.position);else f=u.value===null?!0:u.value;r[s]=f}return r}function Js(e,i){const r=[];let u=-1;const s=e.passKeys?new Map:Jv;for(;++u<i.children.length;){const f=i.children[u];let d;if(e.passKeys){const g=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(g){const h=s.get(g)||0;d=g+"-"+h,s.set(g,h+1)}}const p=qg(e,f,d);p!==void 0&&r.push(p)}return r}function sx(e,i,r){const u=Lv(e.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=u.commaSeparated?Ov(r):Yv(r)),u.property==="style"){let s=typeof r=="object"?r:fx(e,String(r));return e.stylePropertyNameCase==="css"&&(s=dx(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&u.space?Nv[u.property]||u.property:u.attribute,r]}}function fx(e,i){try{return Pv(i,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const u=r,s=new bn("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=Hg+"#cannot-parse-style-attribute",s}}function Xg(e,i,r){let u;if(!r)u={type:"Literal",value:i};else if(i.includes(".")){const s=i.split(".");let f=-1,d;for(;++f<s.length;){const p=bm(s[f])?{type:"Identifier",name:s[f]}:{type:"Literal",value:s[f]};d=d?{type:"MemberExpression",object:d,property:p,computed:!!(f&&p.type==="Literal"),optional:!1}:p}u=d}else u=bm(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(u.type==="Literal"){const s=u.value;return Ps.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(u);Yi(e)}function Yi(e,i){const r=new bn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Hg+"#cannot-handle-mdx-estrees-without-createevaluater",r}function dx(e){const i={};let r;for(r in e)Ps.call(e,r)&&(i[hx(r)]=e[r]);return i}function hx(e){let i=e.replace(Fv,px);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function px(e){return"-"+e.toLowerCase()}const cs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},mx={};function gx(e,i){const r=mx,u=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,s=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Gg(e,u,s)}function Gg(e,i,r){if(yx(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(i&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Cm(e.children,i,r)}return Array.isArray(e)?Cm(e,i,r):""}function Cm(e,i,r){const u=[];let s=-1;for(;++s<e.length;)u[s]=Gg(e[s],i,r);return u.join("")}function yx(e){return!!(e&&typeof e=="object")}const wm=document.createElement("i");function Fs(e){const i="&"+e+";";wm.innerHTML=i;const r=wm.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===i?!1:r}function be(e,i,r,u){const s=e.length;let f=0,d;if(i<0?i=-i>s?0:s+i:i=i>s?s:i,r=r>0?r:0,u.length<1e4)d=Array.from(u),d.unshift(i,r),e.splice(...d);else for(r&&e.splice(i,r);f<u.length;)d=u.slice(f,f+1e4),d.unshift(i,0),e.splice(...d),f+=1e4,i+=1e4}function ee(e,i){return e.length>0?(be(e,e.length,0,i),e):i}const _m={}.hasOwnProperty;function bx(e){const i={};let r=-1;for(;++r<e.length;)vx(i,e[r]);return i}function vx(e,i){let r;for(r in i){const s=(_m.call(e,r)?e[r]:void 0)||(e[r]={}),f=i[r];let d;if(f)for(d in f){_m.call(s,d)||(s[d]=[]);const p=f[d];xx(s[d],Array.isArray(p)?p:p?[p]:[])}}}function xx(e,i){let r=-1;const u=[];for(;++r<i.length;)(i[r].add==="after"?e:u).push(i[r]);be(e,0,0,u)}function Vg(e,i){const r=Number.parseInt(e,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function wl(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ge=ba(/[A-Za-z]/),Gn=ba(/[\dA-Za-z]/),Sx=ba(/[#-'*+\--9=?A-Z^-~]/);function Cs(e){return e!==null&&(e<32||e===127)}const ws=ba(/\d/),Ex=ba(/[\dA-Fa-f]/),kx=ba(/[!-/:-@[-`{-~]/);function mt(e){return e!==null&&e<-2}function Dn(e){return e!==null&&(e<0||e===32)}function Rt(e){return e===-2||e===-1||e===32}const Tx=ba(new RegExp("\\p{P}|\\p{S}","u")),Ox=ba(/\s/);function ba(e){return i;function i(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function Nl(e){const i=[];let r=-1,u=0,s=0;for(;++r<e.length;){const f=e.charCodeAt(r);let d="";if(f===37&&Gn(e.charCodeAt(r+1))&&Gn(e.charCodeAt(r+2)))s=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(d=String.fromCharCode(f));else if(f>55295&&f<57344){const p=e.charCodeAt(r+1);f<56320&&p>56319&&p<57344?(d=String.fromCharCode(f,p),s=1):d="�"}else d=String.fromCharCode(f);d&&(i.push(e.slice(u,r),encodeURIComponent(d)),u=r+s+1,d=""),s&&(r+=s,s=0)}return i.join("")+e.slice(u)}function Vt(e,i,r,u){const s=u?u-1:Number.POSITIVE_INFINITY;let f=0;return d;function d(g){return Rt(g)?(e.enter(r),p(g)):i(g)}function p(g){return Rt(g)&&f++<s?(e.consume(g),p):(e.exit(r),i(g))}}const Ax={tokenize:zx};function zx(e){const i=e.attempt(this.parser.constructs.contentInitial,u,s);let r;return i;function u(p){if(p===null){e.consume(p);return}return e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),Vt(e,i,"linePrefix")}function s(p){return e.enter("paragraph"),f(p)}function f(p){const g=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=g),r=g,d(p)}function d(p){if(p===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(p);return}return mt(p)?(e.consume(p),e.exit("chunkText"),f):(e.consume(p),d)}}const Cx={tokenize:wx},Dm={tokenize:_x};function wx(e){const i=this,r=[];let u=0,s,f,d;return p;function p(q){if(u<r.length){const at=r[u];return i.containerState=at[1],e.attempt(at[0].continuation,g,h)(q)}return h(q)}function g(q){if(u++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,s&&X();const at=i.events.length;let tt=at,H;for(;tt--;)if(i.events[tt][0]==="exit"&&i.events[tt][1].type==="chunkFlow"){H=i.events[tt][1].end;break}N(u);let J=at;for(;J<i.events.length;)i.events[J][1].end={...H},J++;return be(i.events,tt+1,0,i.events.slice(at)),i.events.length=J,h(q)}return p(q)}function h(q){if(u===r.length){if(!s)return S(q);if(s.currentConstruct&&s.currentConstruct.concrete)return D(q);i.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return i.containerState={},e.check(Dm,y,b)(q)}function y(q){return s&&X(),N(u),S(q)}function b(q){return i.parser.lazy[i.now().line]=u!==r.length,d=i.now().offset,D(q)}function S(q){return i.containerState={},e.attempt(Dm,x,D)(q)}function x(q){return u++,r.push([i.currentConstruct,i.containerState]),S(q)}function D(q){if(q===null){s&&X(),N(0),e.consume(q);return}return s=s||i.parser.flow(i.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:f}),z(q)}function z(q){if(q===null){U(e.exit("chunkFlow"),!0),N(0),e.consume(q);return}return mt(q)?(e.consume(q),U(e.exit("chunkFlow")),u=0,i.interrupt=void 0,p):(e.consume(q),z)}function U(q,at){const tt=i.sliceStream(q);if(at&&tt.push(null),q.previous=f,f&&(f.next=q),f=q,s.defineSkip(q.start),s.write(tt),i.parser.lazy[q.start.line]){let H=s.events.length;for(;H--;)if(s.events[H][1].start.offset<d&&(!s.events[H][1].end||s.events[H][1].end.offset>d))return;const J=i.events.length;let ot=J,lt,gt;for(;ot--;)if(i.events[ot][0]==="exit"&&i.events[ot][1].type==="chunkFlow"){if(lt){gt=i.events[ot][1].end;break}lt=!0}for(N(u),H=J;H<i.events.length;)i.events[H][1].end={...gt},H++;be(i.events,ot+1,0,i.events.slice(J)),i.events.length=H}}function N(q){let at=r.length;for(;at-- >q;){const tt=r[at];i.containerState=tt[1],tt[0].exit.call(i,e)}r.length=q}function X(){s.write([null]),f=void 0,s=void 0,i.containerState._closeFlow=void 0}}function _x(e,i,r){return Vt(e,e.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Mm(e){if(e===null||Dn(e)||Ox(e))return 1;if(Tx(e))return 2}function Is(e,i,r){const u=[];let s=-1;for(;++s<e.length;){const f=e[s].resolveAll;f&&!u.includes(f)&&(i=f(i,r),u.push(f))}return i}const _s={name:"attention",resolveAll:Dx,tokenize:Mx};function Dx(e,i){let r=-1,u,s,f,d,p,g,h,y;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(u=r;u--;)if(e[u][0]==="exit"&&e[u][1].type==="attentionSequence"&&e[u][1]._open&&i.sliceSerialize(e[u][1]).charCodeAt(0)===i.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[u][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[u][1].end.offset-e[u][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;g=e[u][1].end.offset-e[u][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const b={...e[u][1].end},S={...e[r][1].start};Rm(b,-g),Rm(S,g),d={type:g>1?"strongSequence":"emphasisSequence",start:b,end:{...e[u][1].end}},p={type:g>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:S},f={type:g>1?"strongText":"emphasisText",start:{...e[u][1].end},end:{...e[r][1].start}},s={type:g>1?"strong":"emphasis",start:{...d.start},end:{...p.end}},e[u][1].end={...d.start},e[r][1].start={...p.end},h=[],e[u][1].end.offset-e[u][1].start.offset&&(h=ee(h,[["enter",e[u][1],i],["exit",e[u][1],i]])),h=ee(h,[["enter",s,i],["enter",d,i],["exit",d,i],["enter",f,i]]),h=ee(h,Is(i.parser.constructs.insideSpan.null,e.slice(u+1,r),i)),h=ee(h,[["exit",f,i],["enter",p,i],["exit",p,i],["exit",s,i]]),e[r][1].end.offset-e[r][1].start.offset?(y=2,h=ee(h,[["enter",e[r][1],i],["exit",e[r][1],i]])):y=0,be(e,u-1,r-u+3,h),r=u+h.length-y-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function Mx(e,i){const r=this.parser.constructs.attentionMarkers.null,u=this.previous,s=Mm(u);let f;return d;function d(g){return f=g,e.enter("attentionSequence"),p(g)}function p(g){if(g===f)return e.consume(g),p;const h=e.exit("attentionSequence"),y=Mm(g),b=!y||y===2&&s||r.includes(g),S=!s||s===2&&y||r.includes(u);return h._open=!!(f===42?b:b&&(s||!S)),h._close=!!(f===42?S:S&&(y||!b)),i(g)}}function Rm(e,i){e.column+=i,e.offset+=i,e._bufferIndex+=i}const Rx={name:"autolink",tokenize:Nx};function Nx(e,i,r){let u=0;return s;function s(x){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(x),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),f}function f(x){return ge(x)?(e.consume(x),d):x===64?r(x):h(x)}function d(x){return x===43||x===45||x===46||Gn(x)?(u=1,p(x)):h(x)}function p(x){return x===58?(e.consume(x),u=0,g):(x===43||x===45||x===46||Gn(x))&&u++<32?(e.consume(x),p):(u=0,h(x))}function g(x){return x===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(x),e.exit("autolinkMarker"),e.exit("autolink"),i):x===null||x===32||x===60||Cs(x)?r(x):(e.consume(x),g)}function h(x){return x===64?(e.consume(x),y):Sx(x)?(e.consume(x),h):r(x)}function y(x){return Gn(x)?b(x):r(x)}function b(x){return x===46?(e.consume(x),u=0,y):x===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(x),e.exit("autolinkMarker"),e.exit("autolink"),i):S(x)}function S(x){if((x===45||Gn(x))&&u++<63){const D=x===45?S:b;return e.consume(x),D}return r(x)}}const Mu={partial:!0,tokenize:jx};function jx(e,i,r){return u;function u(f){return Rt(f)?Vt(e,s,"linePrefix")(f):s(f)}function s(f){return f===null||mt(f)?i(f):r(f)}}const Qg={continuation:{tokenize:Lx},exit:Bx,name:"blockQuote",tokenize:Ux};function Ux(e,i,r){const u=this;return s;function s(d){if(d===62){const p=u.containerState;return p.open||(e.enter("blockQuote",{_container:!0}),p.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(d),e.exit("blockQuoteMarker"),f}return r(d)}function f(d){return Rt(d)?(e.enter("blockQuotePrefixWhitespace"),e.consume(d),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),i):(e.exit("blockQuotePrefix"),i(d))}}function Lx(e,i,r){const u=this;return s;function s(d){return Rt(d)?Vt(e,f,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):f(d)}function f(d){return e.attempt(Qg,i,r)(d)}}function Bx(e){e.exit("blockQuote")}const Zg={name:"characterEscape",tokenize:Hx};function Hx(e,i,r){return u;function u(f){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(f),e.exit("escapeMarker"),s}function s(f){return kx(f)?(e.enter("characterEscapeValue"),e.consume(f),e.exit("characterEscapeValue"),e.exit("characterEscape"),i):r(f)}}const Pg={name:"characterReference",tokenize:qx};function qx(e,i,r){const u=this;let s=0,f,d;return p;function p(b){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),g}function g(b){return b===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(b),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),f=31,d=Gn,y(b))}function h(b){return b===88||b===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(b),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),f=6,d=Ex,y):(e.enter("characterReferenceValue"),f=7,d=ws,y(b))}function y(b){if(b===59&&s){const S=e.exit("characterReferenceValue");return d===Gn&&!Fs(u.sliceSerialize(S))?r(b):(e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),e.exit("characterReference"),i)}return d(b)&&s++<f?(e.consume(b),y):r(b)}}const Nm={partial:!0,tokenize:Xx},jm={concrete:!0,name:"codeFenced",tokenize:Yx};function Yx(e,i,r){const u=this,s={partial:!0,tokenize:tt};let f=0,d=0,p;return g;function g(H){return h(H)}function h(H){const J=u.events[u.events.length-1];return f=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,p=H,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(H)}function y(H){return H===p?(d++,e.consume(H),y):d<3?r(H):(e.exit("codeFencedFenceSequence"),Rt(H)?Vt(e,b,"whitespace")(H):b(H))}function b(H){return H===null||mt(H)?(e.exit("codeFencedFence"),u.interrupt?i(H):e.check(Nm,z,at)(H)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),S(H))}function S(H){return H===null||mt(H)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),b(H)):Rt(H)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Vt(e,x,"whitespace")(H)):H===96&&H===p?r(H):(e.consume(H),S)}function x(H){return H===null||mt(H)?b(H):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),D(H))}function D(H){return H===null||mt(H)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),b(H)):H===96&&H===p?r(H):(e.consume(H),D)}function z(H){return e.attempt(s,at,U)(H)}function U(H){return e.enter("lineEnding"),e.consume(H),e.exit("lineEnding"),N}function N(H){return f>0&&Rt(H)?Vt(e,X,"linePrefix",f+1)(H):X(H)}function X(H){return H===null||mt(H)?e.check(Nm,z,at)(H):(e.enter("codeFlowValue"),q(H))}function q(H){return H===null||mt(H)?(e.exit("codeFlowValue"),X(H)):(e.consume(H),q)}function at(H){return e.exit("codeFenced"),i(H)}function tt(H,J,ot){let lt=0;return gt;function gt(F){return H.enter("lineEnding"),H.consume(F),H.exit("lineEnding"),nt}function nt(F){return H.enter("codeFencedFence"),Rt(F)?Vt(H,W,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):W(F)}function W(F){return F===p?(H.enter("codeFencedFenceSequence"),Ot(F)):ot(F)}function Ot(F){return F===p?(lt++,H.consume(F),Ot):lt>=d?(H.exit("codeFencedFenceSequence"),Rt(F)?Vt(H,rt,"whitespace")(F):rt(F)):ot(F)}function rt(F){return F===null||mt(F)?(H.exit("codeFencedFence"),J(F)):ot(F)}}}function Xx(e,i,r){const u=this;return s;function s(d){return d===null?r(d):(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),f)}function f(d){return u.parser.lazy[u.now().line]?r(d):i(d)}}const ss={name:"codeIndented",tokenize:Vx},Gx={partial:!0,tokenize:Qx};function Vx(e,i,r){const u=this;return s;function s(h){return e.enter("codeIndented"),Vt(e,f,"linePrefix",5)(h)}function f(h){const y=u.events[u.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?d(h):r(h)}function d(h){return h===null?g(h):mt(h)?e.attempt(Gx,d,g)(h):(e.enter("codeFlowValue"),p(h))}function p(h){return h===null||mt(h)?(e.exit("codeFlowValue"),d(h)):(e.consume(h),p)}function g(h){return e.exit("codeIndented"),i(h)}}function Qx(e,i,r){const u=this;return s;function s(d){return u.parser.lazy[u.now().line]?r(d):mt(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):Vt(e,f,"linePrefix",5)(d)}function f(d){const p=u.events[u.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(d):mt(d)?s(d):r(d)}}const Zx={name:"codeText",previous:Kx,resolve:Px,tokenize:Jx};function Px(e){let i=e.length-4,r=3,u,s;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[i][1].type==="lineEnding"||e[i][1].type==="space")){for(u=r;++u<i;)if(e[u][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(u=r-1,i++;++u<=i;)s===void 0?u!==i&&e[u][1].type!=="lineEnding"&&(s=u):(u===i||e[u][1].type==="lineEnding")&&(e[s][1].type="codeTextData",u!==s+2&&(e[s][1].end=e[u-1][1].end,e.splice(s+2,u-s-2),i-=u-s-2,u=s+2),s=void 0);return e}function Kx(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Jx(e,i,r){let u=0,s,f;return d;function d(b){return e.enter("codeText"),e.enter("codeTextSequence"),p(b)}function p(b){return b===96?(e.consume(b),u++,p):(e.exit("codeTextSequence"),g(b))}function g(b){return b===null?r(b):b===32?(e.enter("space"),e.consume(b),e.exit("space"),g):b===96?(f=e.enter("codeTextSequence"),s=0,y(b)):mt(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),g):(e.enter("codeTextData"),h(b))}function h(b){return b===null||b===32||b===96||mt(b)?(e.exit("codeTextData"),g(b)):(e.consume(b),h)}function y(b){return b===96?(e.consume(b),s++,y):s===u?(e.exit("codeTextSequence"),e.exit("codeText"),i(b)):(f.type="codeTextData",h(b))}}class Fx{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const u=r??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(i,u):i>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(i,r,u){const s=r||0;this.setCursor(Math.trunc(i));const f=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return u&&Ri(this.left,u),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Ri(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Ri(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);Ri(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Ri(this.left,r.reverse())}}}function Ri(e,i){let r=0;if(i.length<1e4)e.push(...i);else for(;r<i.length;)e.push(...i.slice(r,r+1e4)),r+=1e4}function Kg(e){const i={};let r=-1,u,s,f,d,p,g,h;const y=new Fx(e);for(;++r<y.length;){for(;r in i;)r=i[r];if(u=y.get(r),r&&u[1].type==="chunkFlow"&&y.get(r-1)[1].type==="listItemPrefix"&&(g=u[1]._tokenizer.events,f=0,f<g.length&&g[f][1].type==="lineEndingBlank"&&(f+=2),f<g.length&&g[f][1].type==="content"))for(;++f<g.length&&g[f][1].type!=="content";)g[f][1].type==="chunkText"&&(g[f][1]._isInFirstContentOfListItem=!0,f++);if(u[0]==="enter")u[1].contentType&&(Object.assign(i,Ix(y,r)),r=i[r],h=!0);else if(u[1]._container){for(f=r,s=void 0;f--;)if(d=y.get(f),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),d[1].type="lineEnding",s=f);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;s&&(u[1].end={...y.get(s)[1].start},p=y.slice(s,r),p.unshift(u),y.splice(s,r-s+1,p))}}return be(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function Ix(e,i){const r=e.get(i)[1],u=e.get(i)[2];let s=i-1;const f=[];let d=r._tokenizer;d||(d=u.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const p=d.events,g=[],h={};let y,b,S=-1,x=r,D=0,z=0;const U=[z];for(;x;){for(;e.get(++s)[1]!==x;);f.push(s),x._tokenizer||(y=u.sliceStream(x),x.next||y.push(null),b&&d.defineSkip(x.start),x._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(y),x._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),b=x,x=x.next}for(x=r;++S<p.length;)p[S][0]==="exit"&&p[S-1][0]==="enter"&&p[S][1].type===p[S-1][1].type&&p[S][1].start.line!==p[S][1].end.line&&(z=S+1,U.push(z),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(d.events=[],x?(x._tokenizer=void 0,x.previous=void 0):U.pop(),S=U.length;S--;){const N=p.slice(U[S],U[S+1]),X=f.pop();g.push([X,X+N.length-1]),e.splice(X,2,N)}for(g.reverse(),S=-1;++S<g.length;)h[D+g[S][0]]=D+g[S][1],D+=g[S][1]-g[S][0]-1;return h}const $x={resolve:t2,tokenize:n2},Wx={partial:!0,tokenize:e2};function t2(e){return Kg(e),e}function n2(e,i){let r;return u;function u(p){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),s(p)}function s(p){return p===null?f(p):mt(p)?e.check(Wx,d,f)(p):(e.consume(p),s)}function f(p){return e.exit("chunkContent"),e.exit("content"),i(p)}function d(p){return e.consume(p),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,s}}function e2(e,i,r){const u=this;return s;function s(d){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),Vt(e,f,"linePrefix")}function f(d){if(d===null||mt(d))return r(d);const p=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(d):e.interrupt(u.parser.constructs.flow,r,i)(d)}}function Jg(e,i,r,u,s,f,d,p,g){const h=g||Number.POSITIVE_INFINITY;let y=0;return b;function b(N){return N===60?(e.enter(u),e.enter(s),e.enter(f),e.consume(N),e.exit(f),S):N===null||N===32||N===41||Cs(N)?r(N):(e.enter(u),e.enter(d),e.enter(p),e.enter("chunkString",{contentType:"string"}),z(N))}function S(N){return N===62?(e.enter(f),e.consume(N),e.exit(f),e.exit(s),e.exit(u),i):(e.enter(p),e.enter("chunkString",{contentType:"string"}),x(N))}function x(N){return N===62?(e.exit("chunkString"),e.exit(p),S(N)):N===null||N===60||mt(N)?r(N):(e.consume(N),N===92?D:x)}function D(N){return N===60||N===62||N===92?(e.consume(N),x):x(N)}function z(N){return!y&&(N===null||N===41||Dn(N))?(e.exit("chunkString"),e.exit(p),e.exit(d),e.exit(u),i(N)):y<h&&N===40?(e.consume(N),y++,z):N===41?(e.consume(N),y--,z):N===null||N===32||N===40||Cs(N)?r(N):(e.consume(N),N===92?U:z)}function U(N){return N===40||N===41||N===92?(e.consume(N),z):z(N)}}function Fg(e,i,r,u,s,f){const d=this;let p=0,g;return h;function h(x){return e.enter(u),e.enter(s),e.consume(x),e.exit(s),e.enter(f),y}function y(x){return p>999||x===null||x===91||x===93&&!g||x===94&&!p&&"_hiddenFootnoteSupport"in d.parser.constructs?r(x):x===93?(e.exit(f),e.enter(s),e.consume(x),e.exit(s),e.exit(u),i):mt(x)?(e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),b(x))}function b(x){return x===null||x===91||x===93||mt(x)||p++>999?(e.exit("chunkString"),y(x)):(e.consume(x),g||(g=!Rt(x)),x===92?S:b)}function S(x){return x===91||x===92||x===93?(e.consume(x),p++,b):b(x)}}function Ig(e,i,r,u,s,f){let d;return p;function p(S){return S===34||S===39||S===40?(e.enter(u),e.enter(s),e.consume(S),e.exit(s),d=S===40?41:S,g):r(S)}function g(S){return S===d?(e.enter(s),e.consume(S),e.exit(s),e.exit(u),i):(e.enter(f),h(S))}function h(S){return S===d?(e.exit(f),g(d)):S===null?r(S):mt(S)?(e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),Vt(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(S))}function y(S){return S===d||S===null||mt(S)?(e.exit("chunkString"),h(S)):(e.consume(S),S===92?b:y)}function b(S){return S===d||S===92?(e.consume(S),y):y(S)}}function Bi(e,i){let r;return u;function u(s){return mt(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),r=!0,u):Rt(s)?Vt(e,u,r?"linePrefix":"lineSuffix")(s):i(s)}}const a2={name:"definition",tokenize:i2},l2={partial:!0,tokenize:r2};function i2(e,i,r){const u=this;let s;return f;function f(x){return e.enter("definition"),d(x)}function d(x){return Fg.call(u,e,p,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function p(x){return s=wl(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),x===58?(e.enter("definitionMarker"),e.consume(x),e.exit("definitionMarker"),g):r(x)}function g(x){return Dn(x)?Bi(e,h)(x):h(x)}function h(x){return Jg(e,y,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function y(x){return e.attempt(l2,b,b)(x)}function b(x){return Rt(x)?Vt(e,S,"whitespace")(x):S(x)}function S(x){return x===null||mt(x)?(e.exit("definition"),u.parser.defined.push(s),i(x)):r(x)}}function r2(e,i,r){return u;function u(p){return Dn(p)?Bi(e,s)(p):r(p)}function s(p){return Ig(e,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function f(p){return Rt(p)?Vt(e,d,"whitespace")(p):d(p)}function d(p){return p===null||mt(p)?i(p):r(p)}}const u2={name:"hardBreakEscape",tokenize:o2};function o2(e,i,r){return u;function u(f){return e.enter("hardBreakEscape"),e.consume(f),s}function s(f){return mt(f)?(e.exit("hardBreakEscape"),i(f)):r(f)}}const c2={name:"headingAtx",resolve:s2,tokenize:f2};function s2(e,i){let r=e.length-2,u=3,s,f;return e[u][1].type==="whitespace"&&(u+=2),r-2>u&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(u===r-1||r-4>u&&e[r-2][1].type==="whitespace")&&(r-=u+1===r?2:4),r>u&&(s={type:"atxHeadingText",start:e[u][1].start,end:e[r][1].end},f={type:"chunkText",start:e[u][1].start,end:e[r][1].end,contentType:"text"},be(e,u,r-u+1,[["enter",s,i],["enter",f,i],["exit",f,i],["exit",s,i]])),e}function f2(e,i,r){let u=0;return s;function s(y){return e.enter("atxHeading"),f(y)}function f(y){return e.enter("atxHeadingSequence"),d(y)}function d(y){return y===35&&u++<6?(e.consume(y),d):y===null||Dn(y)?(e.exit("atxHeadingSequence"),p(y)):r(y)}function p(y){return y===35?(e.enter("atxHeadingSequence"),g(y)):y===null||mt(y)?(e.exit("atxHeading"),i(y)):Rt(y)?Vt(e,p,"whitespace")(y):(e.enter("atxHeadingText"),h(y))}function g(y){return y===35?(e.consume(y),g):(e.exit("atxHeadingSequence"),p(y))}function h(y){return y===null||y===35||Dn(y)?(e.exit("atxHeadingText"),p(y)):(e.consume(y),h)}}const d2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Um=["pre","script","style","textarea"],h2={concrete:!0,name:"htmlFlow",resolveTo:g2,tokenize:y2},p2={partial:!0,tokenize:v2},m2={partial:!0,tokenize:b2};function g2(e){let i=e.length;for(;i--&&!(e[i][0]==="enter"&&e[i][1].type==="htmlFlow"););return i>1&&e[i-2][1].type==="linePrefix"&&(e[i][1].start=e[i-2][1].start,e[i+1][1].start=e[i-2][1].start,e.splice(i-2,2)),e}function y2(e,i,r){const u=this;let s,f,d,p,g;return h;function h(E){return y(E)}function y(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),b}function b(E){return E===33?(e.consume(E),S):E===47?(e.consume(E),f=!0,z):E===63?(e.consume(E),s=3,u.interrupt?i:k):ge(E)?(e.consume(E),d=String.fromCharCode(E),U):r(E)}function S(E){return E===45?(e.consume(E),s=2,x):E===91?(e.consume(E),s=5,p=0,D):ge(E)?(e.consume(E),s=4,u.interrupt?i:k):r(E)}function x(E){return E===45?(e.consume(E),u.interrupt?i:k):r(E)}function D(E){const $="CDATA[";return E===$.charCodeAt(p++)?(e.consume(E),p===$.length?u.interrupt?i:W:D):r(E)}function z(E){return ge(E)?(e.consume(E),d=String.fromCharCode(E),U):r(E)}function U(E){if(E===null||E===47||E===62||Dn(E)){const $=E===47,ht=d.toLowerCase();return!$&&!f&&Um.includes(ht)?(s=1,u.interrupt?i(E):W(E)):d2.includes(d.toLowerCase())?(s=6,$?(e.consume(E),N):u.interrupt?i(E):W(E)):(s=7,u.interrupt&&!u.parser.lazy[u.now().line]?r(E):f?X(E):q(E))}return E===45||Gn(E)?(e.consume(E),d+=String.fromCharCode(E),U):r(E)}function N(E){return E===62?(e.consume(E),u.interrupt?i:W):r(E)}function X(E){return Rt(E)?(e.consume(E),X):gt(E)}function q(E){return E===47?(e.consume(E),gt):E===58||E===95||ge(E)?(e.consume(E),at):Rt(E)?(e.consume(E),q):gt(E)}function at(E){return E===45||E===46||E===58||E===95||Gn(E)?(e.consume(E),at):tt(E)}function tt(E){return E===61?(e.consume(E),H):Rt(E)?(e.consume(E),tt):q(E)}function H(E){return E===null||E===60||E===61||E===62||E===96?r(E):E===34||E===39?(e.consume(E),g=E,J):Rt(E)?(e.consume(E),H):ot(E)}function J(E){return E===g?(e.consume(E),g=null,lt):E===null||mt(E)?r(E):(e.consume(E),J)}function ot(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||Dn(E)?tt(E):(e.consume(E),ot)}function lt(E){return E===47||E===62||Rt(E)?q(E):r(E)}function gt(E){return E===62?(e.consume(E),nt):r(E)}function nt(E){return E===null||mt(E)?W(E):Rt(E)?(e.consume(E),nt):r(E)}function W(E){return E===45&&s===2?(e.consume(E),C):E===60&&s===1?(e.consume(E),P):E===62&&s===4?(e.consume(E),O):E===63&&s===3?(e.consume(E),k):E===93&&s===5?(e.consume(E),St):mt(E)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(p2,G,Ot)(E)):E===null||mt(E)?(e.exit("htmlFlowData"),Ot(E)):(e.consume(E),W)}function Ot(E){return e.check(m2,rt,G)(E)}function rt(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),F}function F(E){return E===null||mt(E)?Ot(E):(e.enter("htmlFlowData"),W(E))}function C(E){return E===45?(e.consume(E),k):W(E)}function P(E){return E===47?(e.consume(E),d="",ut):W(E)}function ut(E){if(E===62){const $=d.toLowerCase();return Um.includes($)?(e.consume(E),O):W(E)}return ge(E)&&d.length<8?(e.consume(E),d+=String.fromCharCode(E),ut):W(E)}function St(E){return E===93?(e.consume(E),k):W(E)}function k(E){return E===62?(e.consume(E),O):E===45&&s===2?(e.consume(E),k):W(E)}function O(E){return E===null||mt(E)?(e.exit("htmlFlowData"),G(E)):(e.consume(E),O)}function G(E){return e.exit("htmlFlow"),i(E)}}function b2(e,i,r){const u=this;return s;function s(d){return mt(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),f):r(d)}function f(d){return u.parser.lazy[u.now().line]?r(d):i(d)}}function v2(e,i,r){return u;function u(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(Mu,i,r)}}const x2={name:"htmlText",tokenize:S2};function S2(e,i,r){const u=this;let s,f,d;return p;function p(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),g}function g(k){return k===33?(e.consume(k),h):k===47?(e.consume(k),tt):k===63?(e.consume(k),q):ge(k)?(e.consume(k),ot):r(k)}function h(k){return k===45?(e.consume(k),y):k===91?(e.consume(k),f=0,D):ge(k)?(e.consume(k),X):r(k)}function y(k){return k===45?(e.consume(k),x):r(k)}function b(k){return k===null?r(k):k===45?(e.consume(k),S):mt(k)?(d=b,P(k)):(e.consume(k),b)}function S(k){return k===45?(e.consume(k),x):b(k)}function x(k){return k===62?C(k):k===45?S(k):b(k)}function D(k){const O="CDATA[";return k===O.charCodeAt(f++)?(e.consume(k),f===O.length?z:D):r(k)}function z(k){return k===null?r(k):k===93?(e.consume(k),U):mt(k)?(d=z,P(k)):(e.consume(k),z)}function U(k){return k===93?(e.consume(k),N):z(k)}function N(k){return k===62?C(k):k===93?(e.consume(k),N):z(k)}function X(k){return k===null||k===62?C(k):mt(k)?(d=X,P(k)):(e.consume(k),X)}function q(k){return k===null?r(k):k===63?(e.consume(k),at):mt(k)?(d=q,P(k)):(e.consume(k),q)}function at(k){return k===62?C(k):q(k)}function tt(k){return ge(k)?(e.consume(k),H):r(k)}function H(k){return k===45||Gn(k)?(e.consume(k),H):J(k)}function J(k){return mt(k)?(d=J,P(k)):Rt(k)?(e.consume(k),J):C(k)}function ot(k){return k===45||Gn(k)?(e.consume(k),ot):k===47||k===62||Dn(k)?lt(k):r(k)}function lt(k){return k===47?(e.consume(k),C):k===58||k===95||ge(k)?(e.consume(k),gt):mt(k)?(d=lt,P(k)):Rt(k)?(e.consume(k),lt):C(k)}function gt(k){return k===45||k===46||k===58||k===95||Gn(k)?(e.consume(k),gt):nt(k)}function nt(k){return k===61?(e.consume(k),W):mt(k)?(d=nt,P(k)):Rt(k)?(e.consume(k),nt):lt(k)}function W(k){return k===null||k===60||k===61||k===62||k===96?r(k):k===34||k===39?(e.consume(k),s=k,Ot):mt(k)?(d=W,P(k)):Rt(k)?(e.consume(k),W):(e.consume(k),rt)}function Ot(k){return k===s?(e.consume(k),s=void 0,F):k===null?r(k):mt(k)?(d=Ot,P(k)):(e.consume(k),Ot)}function rt(k){return k===null||k===34||k===39||k===60||k===61||k===96?r(k):k===47||k===62||Dn(k)?lt(k):(e.consume(k),rt)}function F(k){return k===47||k===62||Dn(k)?lt(k):r(k)}function C(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),i):r(k)}function P(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),ut}function ut(k){return Rt(k)?Vt(e,St,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):St(k)}function St(k){return e.enter("htmlTextData"),d(k)}}const $s={name:"labelEnd",resolveAll:O2,resolveTo:A2,tokenize:z2},E2={tokenize:C2},k2={tokenize:w2},T2={tokenize:_2};function O2(e){let i=-1;const r=[];for(;++i<e.length;){const u=e[i][1];if(r.push(e[i]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const s=u.type==="labelImage"?4:2;u.type="data",i+=s}}return e.length!==r.length&&be(e,0,e.length,r),e}function A2(e,i){let r=e.length,u=0,s,f,d,p;for(;r--;)if(s=e[r][1],f){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[r][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(d){if(e[r][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(f=r,s.type!=="labelLink")){u=2;break}}else s.type==="labelEnd"&&(d=r);const g={type:e[f][1].type==="labelLink"?"link":"image",start:{...e[f][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[f][1].start},end:{...e[d][1].end}},y={type:"labelText",start:{...e[f+u+2][1].end},end:{...e[d-2][1].start}};return p=[["enter",g,i],["enter",h,i]],p=ee(p,e.slice(f+1,f+u+3)),p=ee(p,[["enter",y,i]]),p=ee(p,Is(i.parser.constructs.insideSpan.null,e.slice(f+u+4,d-3),i)),p=ee(p,[["exit",y,i],e[d-2],e[d-1],["exit",h,i]]),p=ee(p,e.slice(d+1)),p=ee(p,[["exit",g,i]]),be(e,f,e.length,p),e}function z2(e,i,r){const u=this;let s=u.events.length,f,d;for(;s--;)if((u.events[s][1].type==="labelImage"||u.events[s][1].type==="labelLink")&&!u.events[s][1]._balanced){f=u.events[s][1];break}return p;function p(S){return f?f._inactive?b(S):(d=u.parser.defined.includes(wl(u.sliceSerialize({start:f.end,end:u.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(S),e.exit("labelMarker"),e.exit("labelEnd"),g):r(S)}function g(S){return S===40?e.attempt(E2,y,d?y:b)(S):S===91?e.attempt(k2,y,d?h:b)(S):d?y(S):b(S)}function h(S){return e.attempt(T2,y,b)(S)}function y(S){return i(S)}function b(S){return f._balanced=!0,r(S)}}function C2(e,i,r){return u;function u(b){return e.enter("resource"),e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),s}function s(b){return Dn(b)?Bi(e,f)(b):f(b)}function f(b){return b===41?y(b):Jg(e,d,p,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(b)}function d(b){return Dn(b)?Bi(e,g)(b):y(b)}function p(b){return r(b)}function g(b){return b===34||b===39||b===40?Ig(e,h,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(b):y(b)}function h(b){return Dn(b)?Bi(e,y)(b):y(b)}function y(b){return b===41?(e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),e.exit("resource"),i):r(b)}}function w2(e,i,r){const u=this;return s;function s(p){return Fg.call(u,e,f,d,"reference","referenceMarker","referenceString")(p)}function f(p){return u.parser.defined.includes(wl(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?i(p):r(p)}function d(p){return r(p)}}function _2(e,i,r){return u;function u(f){return e.enter("reference"),e.enter("referenceMarker"),e.consume(f),e.exit("referenceMarker"),s}function s(f){return f===93?(e.enter("referenceMarker"),e.consume(f),e.exit("referenceMarker"),e.exit("reference"),i):r(f)}}const D2={name:"labelStartImage",resolveAll:$s.resolveAll,tokenize:M2};function M2(e,i,r){const u=this;return s;function s(p){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(p),e.exit("labelImageMarker"),f}function f(p){return p===91?(e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelImage"),d):r(p)}function d(p){return p===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(p):i(p)}}const R2={name:"labelStartLink",resolveAll:$s.resolveAll,tokenize:N2};function N2(e,i,r){const u=this;return s;function s(d){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelLink"),f}function f(d){return d===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(d):i(d)}}const fs={name:"lineEnding",tokenize:j2};function j2(e,i){return r;function r(u){return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Vt(e,i,"linePrefix")}}const Su={name:"thematicBreak",tokenize:U2};function U2(e,i,r){let u=0,s;return f;function f(h){return e.enter("thematicBreak"),d(h)}function d(h){return s=h,p(h)}function p(h){return h===s?(e.enter("thematicBreakSequence"),g(h)):u>=3&&(h===null||mt(h))?(e.exit("thematicBreak"),i(h)):r(h)}function g(h){return h===s?(e.consume(h),u++,g):(e.exit("thematicBreakSequence"),Rt(h)?Vt(e,p,"whitespace")(h):p(h))}}const _n={continuation:{tokenize:q2},exit:X2,name:"list",tokenize:H2},L2={partial:!0,tokenize:G2},B2={partial:!0,tokenize:Y2};function H2(e,i,r){const u=this,s=u.events[u.events.length-1];let f=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,d=0;return p;function p(x){const D=u.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(D==="listUnordered"?!u.containerState.marker||x===u.containerState.marker:ws(x)){if(u.containerState.type||(u.containerState.type=D,e.enter(D,{_container:!0})),D==="listUnordered")return e.enter("listItemPrefix"),x===42||x===45?e.check(Su,r,h)(x):h(x);if(!u.interrupt||x===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),g(x)}return r(x)}function g(x){return ws(x)&&++d<10?(e.consume(x),g):(!u.interrupt||d<2)&&(u.containerState.marker?x===u.containerState.marker:x===41||x===46)?(e.exit("listItemValue"),h(x)):r(x)}function h(x){return e.enter("listItemMarker"),e.consume(x),e.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||x,e.check(Mu,u.interrupt?r:y,e.attempt(L2,S,b))}function y(x){return u.containerState.initialBlankLine=!0,f++,S(x)}function b(x){return Rt(x)?(e.enter("listItemPrefixWhitespace"),e.consume(x),e.exit("listItemPrefixWhitespace"),S):r(x)}function S(x){return u.containerState.size=f+u.sliceSerialize(e.exit("listItemPrefix"),!0).length,i(x)}}function q2(e,i,r){const u=this;return u.containerState._closeFlow=void 0,e.check(Mu,s,f);function s(p){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Vt(e,i,"listItemIndent",u.containerState.size+1)(p)}function f(p){return u.containerState.furtherBlankLines||!Rt(p)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,d(p)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,e.attempt(B2,i,d)(p))}function d(p){return u.containerState._closeFlow=!0,u.interrupt=void 0,Vt(e,e.attempt(_n,i,r),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p)}}function Y2(e,i,r){const u=this;return Vt(e,s,"listItemIndent",u.containerState.size+1);function s(f){const d=u.events[u.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===u.containerState.size?i(f):r(f)}}function X2(e){e.exit(this.containerState.type)}function G2(e,i,r){const u=this;return Vt(e,s,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(f){const d=u.events[u.events.length-1];return!Rt(f)&&d&&d[1].type==="listItemPrefixWhitespace"?i(f):r(f)}}const Lm={name:"setextUnderline",resolveTo:V2,tokenize:Q2};function V2(e,i){let r=e.length,u,s,f;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){u=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&e.splice(r,1),!f&&e[r][1].type==="definition"&&(f=r);const d={type:"setextHeading",start:{...e[u][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",f?(e.splice(s,0,["enter",d,i]),e.splice(f+1,0,["exit",e[u][1],i]),e[u][1].end={...e[f][1].end}):e[u][1]=d,e.push(["exit",d,i]),e}function Q2(e,i,r){const u=this;let s;return f;function f(h){let y=u.events.length,b;for(;y--;)if(u.events[y][1].type!=="lineEnding"&&u.events[y][1].type!=="linePrefix"&&u.events[y][1].type!=="content"){b=u.events[y][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||b)?(e.enter("setextHeadingLine"),s=h,d(h)):r(h)}function d(h){return e.enter("setextHeadingLineSequence"),p(h)}function p(h){return h===s?(e.consume(h),p):(e.exit("setextHeadingLineSequence"),Rt(h)?Vt(e,g,"lineSuffix")(h):g(h))}function g(h){return h===null||mt(h)?(e.exit("setextHeadingLine"),i(h)):r(h)}}const Z2={tokenize:P2};function P2(e){const i=this,r=e.attempt(Mu,u,e.attempt(this.parser.constructs.flowInitial,s,Vt(e,e.attempt(this.parser.constructs.flow,s,e.attempt($x,s)),"linePrefix")));return r;function u(f){if(f===null){e.consume(f);return}return e.enter("lineEndingBlank"),e.consume(f),e.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function s(f){if(f===null){e.consume(f);return}return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),i.currentConstruct=void 0,r}}const K2={resolveAll:Wg()},J2=$g("string"),F2=$g("text");function $g(e){return{resolveAll:Wg(e==="text"?I2:void 0),tokenize:i};function i(r){const u=this,s=this.parser.constructs[e],f=r.attempt(s,d,p);return d;function d(y){return h(y)?f(y):p(y)}function p(y){if(y===null){r.consume(y);return}return r.enter("data"),r.consume(y),g}function g(y){return h(y)?(r.exit("data"),f(y)):(r.consume(y),g)}function h(y){if(y===null)return!0;const b=s[y];let S=-1;if(b)for(;++S<b.length;){const x=b[S];if(!x.previous||x.previous.call(u,u.previous))return!0}return!1}}}function Wg(e){return i;function i(r,u){let s=-1,f;for(;++s<=r.length;)f===void 0?r[s]&&r[s][1].type==="data"&&(f=s,s++):(!r[s]||r[s][1].type!=="data")&&(s!==f+2&&(r[f][1].end=r[s-1][1].end,r.splice(f+2,s-f-2),s=f+2),f=void 0);return e?e(r,u):r}}function I2(e,i){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const u=e[r-1][1],s=i.sliceStream(u);let f=s.length,d=-1,p=0,g;for(;f--;){const h=s[f];if(typeof h=="string"){for(d=h.length;h.charCodeAt(d-1)===32;)p++,d--;if(d)break;d=-1}else if(h===-2)g=!0,p++;else if(h!==-1){f++;break}}if(i._contentTypeTextTrailing&&r===e.length&&(p=0),p){const h={type:r===e.length||g||p<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?d:u.start._bufferIndex+d,_index:u.start._index+f,line:u.end.line,column:u.end.column-p,offset:u.end.offset-p},end:{...u.end}};u.end={...h.start},u.start.offset===u.end.offset?Object.assign(u,h):(e.splice(r,0,["enter",h,i],["exit",h,i]),r+=2)}r++}return e}const $2={42:_n,43:_n,45:_n,48:_n,49:_n,50:_n,51:_n,52:_n,53:_n,54:_n,55:_n,56:_n,57:_n,62:Qg},W2={91:a2},tS={[-2]:ss,[-1]:ss,32:ss},nS={35:c2,42:Su,45:[Lm,Su],60:h2,61:Lm,95:Su,96:jm,126:jm},eS={38:Pg,92:Zg},aS={[-5]:fs,[-4]:fs,[-3]:fs,33:D2,38:Pg,42:_s,60:[Rx,x2],91:R2,92:[u2,Zg],93:$s,95:_s,96:Zx},lS={null:[_s,K2]},iS={null:[42,95]},rS={null:[]},uS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:iS,contentInitial:W2,disable:rS,document:$2,flow:nS,flowInitial:tS,insideSpan:lS,string:eS,text:aS},Symbol.toStringTag,{value:"Module"}));function oS(e,i,r){let u={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const s={},f=[];let d=[],p=[];const g={attempt:J(tt),check:J(H),consume:X,enter:q,exit:at,interrupt:J(H,{interrupt:!0})},h={code:null,containerState:{},defineSkip:z,events:[],now:D,parser:e,previous:null,sliceSerialize:S,sliceStream:x,write:b};let y=i.tokenize.call(h,g);return i.resolveAll&&f.push(i),h;function b(nt){return d=ee(d,nt),U(),d[d.length-1]!==null?[]:(ot(i,0),h.events=Is(f,h.events,h),h.events)}function S(nt,W){return sS(x(nt),W)}function x(nt){return cS(d,nt)}function D(){const{_bufferIndex:nt,_index:W,line:Ot,column:rt,offset:F}=u;return{_bufferIndex:nt,_index:W,line:Ot,column:rt,offset:F}}function z(nt){s[nt.line]=nt.column,gt()}function U(){let nt;for(;u._index<d.length;){const W=d[u._index];if(typeof W=="string")for(nt=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===nt&&u._bufferIndex<W.length;)N(W.charCodeAt(u._bufferIndex));else N(W)}}function N(nt){y=y(nt)}function X(nt){mt(nt)?(u.line++,u.column=1,u.offset+=nt===-3?2:1,gt()):nt!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===d[u._index].length&&(u._bufferIndex=-1,u._index++)),h.previous=nt}function q(nt,W){const Ot=W||{};return Ot.type=nt,Ot.start=D(),h.events.push(["enter",Ot,h]),p.push(Ot),Ot}function at(nt){const W=p.pop();return W.end=D(),h.events.push(["exit",W,h]),W}function tt(nt,W){ot(nt,W.from)}function H(nt,W){W.restore()}function J(nt,W){return Ot;function Ot(rt,F,C){let P,ut,St,k;return Array.isArray(rt)?G(rt):"tokenize"in rt?G([rt]):O(rt);function O(st){return At;function At(Pt){const Lt=Pt!==null&&st[Pt],Qn=Pt!==null&&st.null,ve=[...Array.isArray(Lt)?Lt:Lt?[Lt]:[],...Array.isArray(Qn)?Qn:Qn?[Qn]:[]];return G(ve)(Pt)}}function G(st){return P=st,ut=0,st.length===0?C:E(st[ut])}function E(st){return At;function At(Pt){return k=lt(),St=st,st.partial||(h.currentConstruct=st),st.name&&h.parser.constructs.disable.null.includes(st.name)?ht():st.tokenize.call(W?Object.assign(Object.create(h),W):h,g,$,ht)(Pt)}}function $(st){return nt(St,k),F}function ht(st){return k.restore(),++ut<P.length?E(P[ut]):C}}}function ot(nt,W){nt.resolveAll&&!f.includes(nt)&&f.push(nt),nt.resolve&&be(h.events,W,h.events.length-W,nt.resolve(h.events.slice(W),h)),nt.resolveTo&&(h.events=nt.resolveTo(h.events,h))}function lt(){const nt=D(),W=h.previous,Ot=h.currentConstruct,rt=h.events.length,F=Array.from(p);return{from:rt,restore:C};function C(){u=nt,h.previous=W,h.currentConstruct=Ot,h.events.length=rt,p=F,gt()}}function gt(){u.line in s&&u.column<2&&(u.column=s[u.line],u.offset+=s[u.line]-1)}}function cS(e,i){const r=i.start._index,u=i.start._bufferIndex,s=i.end._index,f=i.end._bufferIndex;let d;if(r===s)d=[e[r].slice(u,f)];else{if(d=e.slice(r,s),u>-1){const p=d[0];typeof p=="string"?d[0]=p.slice(u):d.shift()}f>0&&d.push(e[s].slice(0,f))}return d}function sS(e,i){let r=-1;const u=[];let s;for(;++r<e.length;){const f=e[r];let d;if(typeof f=="string")d=f;else switch(f){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=i?" ":"	";break}case-1:{if(!i&&s)continue;d=" ";break}default:d=String.fromCharCode(f)}s=f===-2,u.push(d)}return u.join("")}function fS(e){const u={constructs:bx([uS,...(e||{}).extensions||[]]),content:s(Ax),defined:[],document:s(Cx),flow:s(Z2),lazy:{},string:s(J2),text:s(F2)};return u;function s(f){return d;function d(p){return oS(u,f,p)}}}function dS(e){for(;!Kg(e););return e}const Bm=/[\0\t\n\r]/g;function hS(){let e=1,i="",r=!0,u;return s;function s(f,d,p){const g=[];let h,y,b,S,x;for(f=i+(typeof f=="string"?f.toString():new TextDecoder(d||void 0).decode(f)),b=0,i="",r&&(f.charCodeAt(0)===65279&&b++,r=void 0);b<f.length;){if(Bm.lastIndex=b,h=Bm.exec(f),S=h&&h.index!==void 0?h.index:f.length,x=f.charCodeAt(S),!h){i=f.slice(b);break}if(x===10&&b===S&&u)g.push(-3),u=void 0;else switch(u&&(g.push(-5),u=void 0),b<S&&(g.push(f.slice(b,S)),e+=S-b),x){case 0:{g.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,g.push(-2);e++<y;)g.push(-1);break}case 10:{g.push(-4),e=1;break}default:u=!0,e=1}b=S+1}return p&&(u&&g.push(-5),i&&g.push(i),g.push(null)),g}}const pS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function mS(e){return e.replace(pS,gS)}function gS(e,i,r){if(i)return i;if(r.charCodeAt(0)===35){const s=r.charCodeAt(1),f=s===120||s===88;return Vg(r.slice(f?2:1),f?16:10)}return Fs(r)||e}const t0={}.hasOwnProperty;function yS(e,i,r){return typeof i!="string"&&(r=i,i=void 0),bS(r)(dS(fS(r).document().write(hS()(e,i,!0))))}function bS(e){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(qa),autolinkProtocol:lt,autolinkEmail:lt,atxHeading:f(Ba),blockQuote:f(Qn),characterEscape:lt,characterReference:lt,codeFenced:f(ve),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:f(ve,d),codeText:f(jl,d),codeTextData:lt,data:lt,codeFlowValue:lt,definition:f(Zi),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:f(xe),hardBreakEscape:f(Ha),hardBreakTrailing:f(Ha),htmlFlow:f(Pi,d),htmlFlowData:lt,htmlText:f(Pi,d),htmlTextData:lt,image:f(Ki),label:d,link:f(qa),listItem:f(Ul),listItemValue:S,listOrdered:f(Ya,b),listUnordered:f(Ya),paragraph:f(Uu),reference:E,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:f(Ba),strong:f(Lu),thematicBreak:f(Bu)},exit:{atxHeading:g(),atxHeadingSequence:tt,autolink:g(),autolinkEmail:Lt,autolinkProtocol:Pt,blockQuote:g(),characterEscapeValue:gt,characterReferenceMarkerHexadecimal:ht,characterReferenceMarkerNumeric:ht,characterReferenceValue:st,characterReference:At,codeFenced:g(U),codeFencedFence:z,codeFencedFenceInfo:x,codeFencedFenceMeta:D,codeFlowValue:gt,codeIndented:g(N),codeText:g(F),codeTextData:gt,data:gt,definition:g(),definitionDestinationString:at,definitionLabelString:X,definitionTitleString:q,emphasis:g(),hardBreakEscape:g(W),hardBreakTrailing:g(W),htmlFlow:g(Ot),htmlFlowData:gt,htmlText:g(rt),htmlTextData:gt,image:g(P),label:St,labelText:ut,lineEnding:nt,link:g(C),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:$,resourceDestinationString:k,resourceTitleString:O,resource:G,setextHeading:g(ot),setextHeadingLineSequence:J,setextHeadingText:H,strong:g(),thematicBreak:g()}};n0(i,(e||{}).mdastExtensions||[]);const r={};return u;function u(V){let I={type:"root",children:[]};const pt={stack:[I],tokenStack:[],config:i,enter:p,exit:h,buffer:d,resume:y,data:r},Et=[];let Nt=-1;for(;++Nt<V.length;)if(V[Nt][1].type==="listOrdered"||V[Nt][1].type==="listUnordered")if(V[Nt][0]==="enter")Et.push(Nt);else{const Rn=Et.pop();Nt=s(V,Rn,Nt)}for(Nt=-1;++Nt<V.length;){const Rn=i[V[Nt][0]];t0.call(Rn,V[Nt][1].type)&&Rn[V[Nt][1].type].call(Object.assign({sliceSerialize:V[Nt][2].sliceSerialize},pt),V[Nt][1])}if(pt.tokenStack.length>0){const Rn=pt.tokenStack[pt.tokenStack.length-1];(Rn[1]||Hm).call(pt,void 0,Rn[0])}for(I.position={start:ma(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:ma(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Nt=-1;++Nt<i.transforms.length;)I=i.transforms[Nt](I)||I;return I}function s(V,I,pt){let Et=I-1,Nt=-1,Rn=!1,Se,xn,un,En;for(;++Et<=pt;){const Yt=V[Et];switch(Yt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Yt[0]==="enter"?Nt++:Nt--,En=void 0;break}case"lineEndingBlank":{Yt[0]==="enter"&&(Se&&!En&&!Nt&&!un&&(un=Et),En=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:En=void 0}if(!Nt&&Yt[0]==="enter"&&Yt[1].type==="listItemPrefix"||Nt===-1&&Yt[0]==="exit"&&(Yt[1].type==="listUnordered"||Yt[1].type==="listOrdered")){if(Se){let Ve=Et;for(xn=void 0;Ve--;){const ae=V[Ve];if(ae[1].type==="lineEnding"||ae[1].type==="lineEndingBlank"){if(ae[0]==="exit")continue;xn&&(V[xn][1].type="lineEndingBlank",Rn=!0),ae[1].type="lineEnding",xn=Ve}else if(!(ae[1].type==="linePrefix"||ae[1].type==="blockQuotePrefix"||ae[1].type==="blockQuotePrefixWhitespace"||ae[1].type==="blockQuoteMarker"||ae[1].type==="listItemIndent"))break}un&&(!xn||un<xn)&&(Se._spread=!0),Se.end=Object.assign({},xn?V[xn][1].start:Yt[1].end),V.splice(xn||Et,0,["exit",Se,Yt[2]]),Et++,pt++}if(Yt[1].type==="listItemPrefix"){const Ve={type:"listItem",_spread:!1,start:Object.assign({},Yt[1].start),end:void 0};Se=Ve,V.splice(Et,0,["enter",Ve,Yt[2]]),Et++,pt++,un=void 0,En=!0}}}return V[I][1]._spread=Rn,pt}function f(V,I){return pt;function pt(Et){p.call(this,V(Et),Et),I&&I.call(this,Et)}}function d(){this.stack.push({type:"fragment",children:[]})}function p(V,I,pt){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([I,pt||void 0]),V.position={start:ma(I.start),end:void 0}}function g(V){return I;function I(pt){V&&V.call(this,pt),h.call(this,pt)}}function h(V,I){const pt=this.stack.pop(),Et=this.tokenStack.pop();if(Et)Et[0].type!==V.type&&(I?I.call(this,V,Et[0]):(Et[1]||Hm).call(this,V,Et[0]));else throw new Error("Cannot close `"+V.type+"` ("+Li({start:V.start,end:V.end})+"): it’s not open");pt.position.end=ma(V.end)}function y(){return gx(this.stack.pop())}function b(){this.data.expectingFirstListItemValue=!0}function S(V){if(this.data.expectingFirstListItemValue){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function x(){const V=this.resume(),I=this.stack[this.stack.length-1];I.lang=V}function D(){const V=this.resume(),I=this.stack[this.stack.length-1];I.meta=V}function z(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function U(){const V=this.resume(),I=this.stack[this.stack.length-1];I.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function N(){const V=this.resume(),I=this.stack[this.stack.length-1];I.value=V.replace(/(\r?\n|\r)$/g,"")}function X(V){const I=this.resume(),pt=this.stack[this.stack.length-1];pt.label=I,pt.identifier=wl(this.sliceSerialize(V)).toLowerCase()}function q(){const V=this.resume(),I=this.stack[this.stack.length-1];I.title=V}function at(){const V=this.resume(),I=this.stack[this.stack.length-1];I.url=V}function tt(V){const I=this.stack[this.stack.length-1];if(!I.depth){const pt=this.sliceSerialize(V).length;I.depth=pt}}function H(){this.data.setextHeadingSlurpLineEnding=!0}function J(V){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function ot(){this.data.setextHeadingSlurpLineEnding=void 0}function lt(V){const pt=this.stack[this.stack.length-1].children;let Et=pt[pt.length-1];(!Et||Et.type!=="text")&&(Et=vn(),Et.position={start:ma(V.start),end:void 0},pt.push(Et)),this.stack.push(Et)}function gt(V){const I=this.stack.pop();I.value+=this.sliceSerialize(V),I.position.end=ma(V.end)}function nt(V){const I=this.stack[this.stack.length-1];if(this.data.atHardBreak){const pt=I.children[I.children.length-1];pt.position.end=ma(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(I.type)&&(lt.call(this,V),gt.call(this,V))}function W(){this.data.atHardBreak=!0}function Ot(){const V=this.resume(),I=this.stack[this.stack.length-1];I.value=V}function rt(){const V=this.resume(),I=this.stack[this.stack.length-1];I.value=V}function F(){const V=this.resume(),I=this.stack[this.stack.length-1];I.value=V}function C(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=I,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function P(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=I,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function ut(V){const I=this.sliceSerialize(V),pt=this.stack[this.stack.length-2];pt.label=mS(I),pt.identifier=wl(I).toLowerCase()}function St(){const V=this.stack[this.stack.length-1],I=this.resume(),pt=this.stack[this.stack.length-1];if(this.data.inReference=!0,pt.type==="link"){const Et=V.children;pt.children=Et}else pt.alt=I}function k(){const V=this.resume(),I=this.stack[this.stack.length-1];I.url=V}function O(){const V=this.resume(),I=this.stack[this.stack.length-1];I.title=V}function G(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function $(V){const I=this.resume(),pt=this.stack[this.stack.length-1];pt.label=I,pt.identifier=wl(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function ht(V){this.data.characterReferenceType=V.type}function st(V){const I=this.sliceSerialize(V),pt=this.data.characterReferenceType;let Et;pt?(Et=Vg(I,pt==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Et=Fs(I);const Nt=this.stack[this.stack.length-1];Nt.value+=Et}function At(V){const I=this.stack.pop();I.position.end=ma(V.end)}function Pt(V){gt.call(this,V);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(V)}function Lt(V){gt.call(this,V);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(V)}function Qn(){return{type:"blockquote",children:[]}}function ve(){return{type:"code",lang:null,meta:null,value:""}}function jl(){return{type:"inlineCode",value:""}}function Zi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function xe(){return{type:"emphasis",children:[]}}function Ba(){return{type:"heading",depth:0,children:[]}}function Ha(){return{type:"break"}}function Pi(){return{type:"html",value:""}}function Ki(){return{type:"image",title:null,url:"",alt:null}}function qa(){return{type:"link",title:null,url:"",children:[]}}function Ya(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Ul(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function Uu(){return{type:"paragraph",children:[]}}function Lu(){return{type:"strong",children:[]}}function vn(){return{type:"text",value:""}}function Bu(){return{type:"thematicBreak"}}}function ma(e){return{line:e.line,column:e.column,offset:e.offset}}function n0(e,i){let r=-1;for(;++r<i.length;){const u=i[r];Array.isArray(u)?n0(e,u):vS(e,u)}}function vS(e,i){let r;for(r in i)if(t0.call(i,r))switch(r){case"canContainEols":{const u=i[r];u&&e[r].push(...u);break}case"transforms":{const u=i[r];u&&e[r].push(...u);break}case"enter":case"exit":{const u=i[r];u&&Object.assign(e[r],u);break}}}function Hm(e,i){throw e?new Error("Cannot close `"+e.type+"` ("+Li({start:e.start,end:e.end})+"): a different token (`"+i.type+"`, "+Li({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Li({start:i.start,end:i.end})+") is still open")}function xS(e){const i=this;i.parser=r;function r(u){return yS(u,{...i.data("settings"),...e,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function SS(e,i){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(i),!0)};return e.patch(i,r),e.applyData(i,r)}function ES(e,i){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(i,r),[e.applyData(i,r),{type:"text",value:`
`}]}function kS(e,i){const r=i.value?i.value+`
`:"",u={},s=i.lang?i.lang.split(/\s+/):[];s.length>0&&(u.className=["language-"+s[0]]);let f={type:"element",tagName:"code",properties:u,children:[{type:"text",value:r}]};return i.meta&&(f.data={meta:i.meta}),e.patch(i,f),f=e.applyData(i,f),f={type:"element",tagName:"pre",properties:{},children:[f]},e.patch(i,f),f}function TS(e,i){const r={type:"element",tagName:"del",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function OS(e,i){const r={type:"element",tagName:"em",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function AS(e,i){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",u=String(i.identifier).toUpperCase(),s=Nl(u.toLowerCase()),f=e.footnoteOrder.indexOf(u);let d,p=e.footnoteCounts.get(u);p===void 0?(p=0,e.footnoteOrder.push(u),d=e.footnoteOrder.length):d=f+1,p+=1,e.footnoteCounts.set(u,p);const g={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+s,id:r+"fnref-"+s+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};e.patch(i,g);const h={type:"element",tagName:"sup",properties:{},children:[g]};return e.patch(i,h),e.applyData(i,h)}function zS(e,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function CS(e,i){if(e.options.allowDangerousHtml){const r={type:"raw",value:i.value};return e.patch(i,r),e.applyData(i,r)}}function e0(e,i){const r=i.referenceType;let u="]";if(r==="collapsed"?u+="[]":r==="full"&&(u+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+u}];const s=e.all(i),f=s[0];f&&f.type==="text"?f.value="["+f.value:s.unshift({type:"text",value:"["});const d=s[s.length-1];return d&&d.type==="text"?d.value+=u:s.push({type:"text",value:u}),s}function wS(e,i){const r=String(i.identifier).toUpperCase(),u=e.definitionById.get(r);if(!u)return e0(e,i);const s={src:Nl(u.url||""),alt:i.alt};u.title!==null&&u.title!==void 0&&(s.title=u.title);const f={type:"element",tagName:"img",properties:s,children:[]};return e.patch(i,f),e.applyData(i,f)}function _S(e,i){const r={src:Nl(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"img",properties:r,children:[]};return e.patch(i,u),e.applyData(i,u)}function DS(e,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};e.patch(i,r);const u={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(i,u),e.applyData(i,u)}function MS(e,i){const r=String(i.identifier).toUpperCase(),u=e.definitionById.get(r);if(!u)return e0(e,i);const s={href:Nl(u.url||"")};u.title!==null&&u.title!==void 0&&(s.title=u.title);const f={type:"element",tagName:"a",properties:s,children:e.all(i)};return e.patch(i,f),e.applyData(i,f)}function RS(e,i){const r={href:Nl(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"a",properties:r,children:e.all(i)};return e.patch(i,u),e.applyData(i,u)}function NS(e,i,r){const u=e.all(i),s=r?jS(r):a0(i),f={},d=[];if(typeof i.checked=="boolean"){const y=u[0];let b;y&&y.type==="element"&&y.tagName==="p"?b=y:(b={type:"element",tagName:"p",properties:{},children:[]},u.unshift(b)),b.children.length>0&&b.children.unshift({type:"text",value:" "}),b.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let p=-1;for(;++p<u.length;){const y=u[p];(s||p!==0||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?d.push(...y.children):d.push(y)}const g=u[u.length-1];g&&(s||g.type!=="element"||g.tagName!=="p")&&d.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:f,children:d};return e.patch(i,h),e.applyData(i,h)}function jS(e){let i=!1;if(e.type==="list"){i=e.spread||!1;const r=e.children;let u=-1;for(;!i&&++u<r.length;)i=a0(r[u])}return i}function a0(e){const i=e.spread;return i??e.children.length>1}function US(e,i){const r={},u=e.all(i);let s=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++s<u.length;){const d=u[s];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:e.wrap(u,!0)};return e.patch(i,f),e.applyData(i,f)}function LS(e,i){const r={type:"element",tagName:"p",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function BS(e,i){const r={type:"root",children:e.wrap(e.all(i))};return e.patch(i,r),e.applyData(i,r)}function HS(e,i){const r={type:"element",tagName:"strong",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function qS(e,i){const r=e.all(i),u=r.shift(),s=[];if(u){const d={type:"element",tagName:"thead",properties:{},children:e.wrap([u],!0)};e.patch(i.children[0],d),s.push(d)}if(r.length>0){const d={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},p=Zs(i.children[1]),g=Lg(i.children[i.children.length-1]);p&&g&&(d.position={start:p,end:g}),s.push(d)}const f={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(i,f),e.applyData(i,f)}function YS(e,i,r){const u=r?r.children:void 0,f=(u?u.indexOf(i):1)===0?"th":"td",d=r&&r.type==="table"?r.align:void 0,p=d?d.length:i.children.length;let g=-1;const h=[];for(;++g<p;){const b=i.children[g],S={},x=d?d[g]:void 0;x&&(S.align=x);let D={type:"element",tagName:f,properties:S,children:[]};b&&(D.children=e.all(b),e.patch(b,D),D=e.applyData(b,D)),h.push(D)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(h,!0)};return e.patch(i,y),e.applyData(i,y)}function XS(e,i){const r={type:"element",tagName:"td",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}const qm=9,Ym=32;function GS(e){const i=String(e),r=/\r?\n|\r/g;let u=r.exec(i),s=0;const f=[];for(;u;)f.push(Xm(i.slice(s,u.index),s>0,!0),u[0]),s=u.index+u[0].length,u=r.exec(i);return f.push(Xm(i.slice(s),s>0,!1)),f.join("")}function Xm(e,i,r){let u=0,s=e.length;if(i){let f=e.codePointAt(u);for(;f===qm||f===Ym;)u++,f=e.codePointAt(u)}if(r){let f=e.codePointAt(s-1);for(;f===qm||f===Ym;)s--,f=e.codePointAt(s-1)}return s>u?e.slice(u,s):""}function VS(e,i){const r={type:"text",value:GS(String(i.value))};return e.patch(i,r),e.applyData(i,r)}function QS(e,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(i,r),e.applyData(i,r)}const ZS={blockquote:SS,break:ES,code:kS,delete:TS,emphasis:OS,footnoteReference:AS,heading:zS,html:CS,imageReference:wS,image:_S,inlineCode:DS,linkReference:MS,link:RS,listItem:NS,list:US,paragraph:LS,root:BS,strong:HS,table:qS,tableCell:XS,tableRow:YS,text:VS,thematicBreak:QS,toml:du,yaml:du,definition:du,footnoteDefinition:du};function du(){}const l0=-1,Ru=0,Hi=1,Tu=2,Ws=3,tf=4,nf=5,ef=6,i0=7,r0=8,Gm=typeof self=="object"?self:globalThis,PS=(e,i)=>{const r=(s,f)=>(e.set(f,s),s),u=s=>{if(e.has(s))return e.get(s);const[f,d]=i[s];switch(f){case Ru:case l0:return r(d,s);case Hi:{const p=r([],s);for(const g of d)p.push(u(g));return p}case Tu:{const p=r({},s);for(const[g,h]of d)p[u(g)]=u(h);return p}case Ws:return r(new Date(d),s);case tf:{const{source:p,flags:g}=d;return r(new RegExp(p,g),s)}case nf:{const p=r(new Map,s);for(const[g,h]of d)p.set(u(g),u(h));return p}case ef:{const p=r(new Set,s);for(const g of d)p.add(u(g));return p}case i0:{const{name:p,message:g}=d;return r(new Gm[p](g),s)}case r0:return r(BigInt(d),s);case"BigInt":return r(Object(BigInt(d)),s);case"ArrayBuffer":return r(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:p}=new Uint8Array(d);return r(new DataView(p),d)}}return r(new Gm[f](d),s)};return u},Vm=e=>PS(new Map,e)(0),zl="",{toString:KS}={},{keys:JS}=Object,Ni=e=>{const i=typeof e;if(i!=="object"||!e)return[Ru,i];const r=KS.call(e).slice(8,-1);switch(r){case"Array":return[Hi,zl];case"Object":return[Tu,zl];case"Date":return[Ws,zl];case"RegExp":return[tf,zl];case"Map":return[nf,zl];case"Set":return[ef,zl];case"DataView":return[Hi,r]}return r.includes("Array")?[Hi,r]:r.includes("Error")?[i0,r]:[Tu,r]},hu=([e,i])=>e===Ru&&(i==="function"||i==="symbol"),FS=(e,i,r,u)=>{const s=(d,p)=>{const g=u.push(d)-1;return r.set(p,g),g},f=d=>{if(r.has(d))return r.get(d);let[p,g]=Ni(d);switch(p){case Ru:{let y=d;switch(g){case"bigint":p=r0,y=d.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+g);y=null;break;case"undefined":return s([l0],d)}return s([p,y],d)}case Hi:{if(g){let S=d;return g==="DataView"?S=new Uint8Array(d.buffer):g==="ArrayBuffer"&&(S=new Uint8Array(d)),s([g,[...S]],d)}const y=[],b=s([p,y],d);for(const S of d)y.push(f(S));return b}case Tu:{if(g)switch(g){case"BigInt":return s([g,d.toString()],d);case"Boolean":case"Number":case"String":return s([g,d.valueOf()],d)}if(i&&"toJSON"in d)return f(d.toJSON());const y=[],b=s([p,y],d);for(const S of JS(d))(e||!hu(Ni(d[S])))&&y.push([f(S),f(d[S])]);return b}case Ws:return s([p,d.toISOString()],d);case tf:{const{source:y,flags:b}=d;return s([p,{source:y,flags:b}],d)}case nf:{const y=[],b=s([p,y],d);for(const[S,x]of d)(e||!(hu(Ni(S))||hu(Ni(x))))&&y.push([f(S),f(x)]);return b}case ef:{const y=[],b=s([p,y],d);for(const S of d)(e||!hu(Ni(S)))&&y.push(f(S));return b}}const{message:h}=d;return s([p,{name:g,message:h}],d)};return f},Qm=(e,{json:i,lossy:r}={})=>{const u=[];return FS(!(i||r),!!i,new Map,u)(e),u},Ou=typeof structuredClone=="function"?(e,i)=>i&&("json"in i||"lossy"in i)?Vm(Qm(e,i)):structuredClone(e):(e,i)=>Vm(Qm(e,i));function IS(e,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function $S(e,i){return"Back to reference "+(e+1)+(i>1?"-"+i:"")}function WS(e){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||IS,u=e.options.footnoteBackLabel||$S,s=e.options.footnoteLabel||"Footnotes",f=e.options.footnoteLabelTagName||"h2",d=e.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let g=-1;for(;++g<e.footnoteOrder.length;){const h=e.footnoteById.get(e.footnoteOrder[g]);if(!h)continue;const y=e.all(h),b=String(h.identifier).toUpperCase(),S=Nl(b.toLowerCase());let x=0;const D=[],z=e.footnoteCounts.get(b);for(;z!==void 0&&++x<=z;){D.length>0&&D.push({type:"text",value:" "});let X=typeof r=="string"?r:r(g,x);typeof X=="string"&&(X={type:"text",value:X}),D.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+S+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(g,x),className:["data-footnote-backref"]},children:Array.isArray(X)?X:[X]})}const U=y[y.length-1];if(U&&U.type==="element"&&U.tagName==="p"){const X=U.children[U.children.length-1];X&&X.type==="text"?X.value+=" ":U.children.push({type:"text",value:" "}),U.children.push(...D)}else y.push(...D);const N={type:"element",tagName:"li",properties:{id:i+"fn-"+S},children:e.wrap(y,!0)};e.patch(h,N),p.push(N)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...Ou(d),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(p,!0)},{type:"text",value:`
`}]}}const u0=(function(e){if(e==null)return a5;if(typeof e=="function")return Nu(e);if(typeof e=="object")return Array.isArray(e)?t5(e):n5(e);if(typeof e=="string")return e5(e);throw new Error("Expected function, string, or object as test")});function t5(e){const i=[];let r=-1;for(;++r<e.length;)i[r]=u0(e[r]);return Nu(u);function u(...s){let f=-1;for(;++f<i.length;)if(i[f].apply(this,s))return!0;return!1}}function n5(e){const i=e;return Nu(r);function r(u){const s=u;let f;for(f in e)if(s[f]!==i[f])return!1;return!0}}function e5(e){return Nu(i);function i(r){return r&&r.type===e}}function Nu(e){return i;function i(r,u,s){return!!(l5(r)&&e.call(this,r,typeof u=="number"?u:void 0,s||void 0))}}function a5(){return!0}function l5(e){return e!==null&&typeof e=="object"&&"type"in e}const o0=[],i5=!0,Zm=!1,r5="skip";function u5(e,i,r,u){let s;typeof i=="function"&&typeof r!="function"?(u=r,r=i):s=i;const f=u0(s),d=u?-1:1;p(e,void 0,[])();function p(g,h,y){const b=g&&typeof g=="object"?g:{};if(typeof b.type=="string"){const x=typeof b.tagName=="string"?b.tagName:typeof b.name=="string"?b.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(g.type+(x?"<"+x+">":""))+")"})}return S;function S(){let x=o0,D,z,U;if((!i||f(g,h,y[y.length-1]||void 0))&&(x=o5(r(g,y)),x[0]===Zm))return x;if("children"in g&&g.children){const N=g;if(N.children&&x[0]!==r5)for(z=(u?N.children.length:-1)+d,U=y.concat(N);z>-1&&z<N.children.length;){const X=N.children[z];if(D=p(X,z,U)(),D[0]===Zm)return D;z=typeof D[1]=="number"?D[1]:z+d}}return x}}}function o5(e){return Array.isArray(e)?e:typeof e=="number"?[i5,e]:e==null?o0:[e]}function c0(e,i,r,u){let s,f,d;typeof i=="function"&&typeof r!="function"?(f=void 0,d=i,s=r):(f=i,d=r,s=u),u5(e,f,p,s);function p(g,h){const y=h[h.length-1],b=y?y.children.indexOf(g):void 0;return d(g,b,y)}}const Ds={}.hasOwnProperty,c5={};function s5(e,i){const r=i||c5,u=new Map,s=new Map,f=new Map,d={...ZS,...r.handlers},p={all:h,applyData:d5,definitionById:u,footnoteById:s,footnoteCounts:f,footnoteOrder:[],handlers:d,one:g,options:r,patch:f5,wrap:p5};return c0(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const b=y.type==="definition"?u:s,S=String(y.identifier).toUpperCase();b.has(S)||b.set(S,y)}}),p;function g(y,b){const S=y.type,x=p.handlers[S];if(Ds.call(p.handlers,S)&&x)return x(p,y,b);if(p.options.passThrough&&p.options.passThrough.includes(S)){if("children"in y){const{children:z,...U}=y,N=Ou(U);return N.children=p.all(y),N}return Ou(y)}return(p.options.unknownHandler||h5)(p,y,b)}function h(y){const b=[];if("children"in y){const S=y.children;let x=-1;for(;++x<S.length;){const D=p.one(S[x],y);if(D){if(x&&S[x-1].type==="break"&&(!Array.isArray(D)&&D.type==="text"&&(D.value=Pm(D.value)),!Array.isArray(D)&&D.type==="element")){const z=D.children[0];z&&z.type==="text"&&(z.value=Pm(z.value))}Array.isArray(D)?b.push(...D):b.push(D)}}}return b}}function f5(e,i){e.position&&(i.position=Kv(e))}function d5(e,i){let r=i;if(e&&e.data){const u=e.data.hName,s=e.data.hChildren,f=e.data.hProperties;if(typeof u=="string")if(r.type==="element")r.tagName=u;else{const d="children"in r?r.children:[r];r={type:"element",tagName:u,properties:{},children:d}}r.type==="element"&&f&&Object.assign(r.properties,Ou(f)),"children"in r&&r.children&&s!==null&&s!==void 0&&(r.children=s)}return r}function h5(e,i){const r=i.data||{},u="value"in i&&!(Ds.call(r,"hProperties")||Ds.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:e.all(i)};return e.patch(i,u),e.applyData(i,u)}function p5(e,i){const r=[];let u=-1;for(i&&r.push({type:"text",value:`
`});++u<e.length;)u&&r.push({type:"text",value:`
`}),r.push(e[u]);return i&&e.length>0&&r.push({type:"text",value:`
`}),r}function Pm(e){let i=0,r=e.charCodeAt(i);for(;r===9||r===32;)i++,r=e.charCodeAt(i);return e.slice(i)}function Km(e,i){const r=s5(e,i),u=r.one(e,void 0),s=WS(r),f=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return s&&f.children.push({type:"text",value:`
`},s),f}function m5(e,i){return e&&"run"in e?async function(r,u){const s=Km(r,{file:u,...i});await e.run(s,u)}:function(r,u){return Km(r,{file:u,...e||i})}}function Jm(e){if(e)throw e}var ds,Fm;function g5(){if(Fm)return ds;Fm=1;var e=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):i.call(h)==="[object Array]"},f=function(h){if(!h||i.call(h)!=="[object Object]")return!1;var y=e.call(h,"constructor"),b=h.constructor&&h.constructor.prototype&&e.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!b)return!1;var S;for(S in h);return typeof S>"u"||e.call(h,S)},d=function(h,y){r&&y.name==="__proto__"?r(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},p=function(h,y){if(y==="__proto__")if(e.call(h,y)){if(u)return u(h,y).value}else return;return h[y]};return ds=function g(){var h,y,b,S,x,D,z=arguments[0],U=1,N=arguments.length,X=!1;for(typeof z=="boolean"&&(X=z,z=arguments[1]||{},U=2),(z==null||typeof z!="object"&&typeof z!="function")&&(z={});U<N;++U)if(h=arguments[U],h!=null)for(y in h)b=p(z,y),S=p(h,y),z!==S&&(X&&S&&(f(S)||(x=s(S)))?(x?(x=!1,D=b&&s(b)?b:[]):D=b&&f(b)?b:{},d(z,{name:y,newValue:g(X,D,S)})):typeof S<"u"&&d(z,{name:y,newValue:S}));return z},ds}var y5=g5();const hs=js(y5);function Ms(e){if(typeof e!="object"||e===null)return!1;const i=Object.getPrototypeOf(e);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function b5(){const e=[],i={run:r,use:u};return i;function r(...s){let f=-1;const d=s.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);p(null,...s);function p(g,...h){const y=e[++f];let b=-1;if(g){d(g);return}for(;++b<s.length;)(h[b]===null||h[b]===void 0)&&(h[b]=s[b]);s=h,y?v5(y,p)(...h):d(null,...h)}}function u(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),i}}function v5(e,i){let r;return u;function u(...d){const p=e.length>d.length;let g;p&&d.push(s);try{g=e.apply(this,d)}catch(h){const y=h;if(p&&r)throw y;return s(y)}p||(g&&g.then&&typeof g.then=="function"?g.then(f,s):g instanceof Error?s(g):f(g))}function s(d,...p){r||(r=!0,i(d,...p))}function f(d){s(null,d)}}const me={basename:x5,dirname:S5,extname:E5,join:k5,sep:"/"};function x5(e,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Qi(e);let r=0,u=-1,s=e.length,f;if(i===void 0||i.length===0||i.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(f){r=s+1;break}}else u<0&&(f=!0,u=s+1);return u<0?"":e.slice(r,u)}if(i===e)return"";let d=-1,p=i.length-1;for(;s--;)if(e.codePointAt(s)===47){if(f){r=s+1;break}}else d<0&&(f=!0,d=s+1),p>-1&&(e.codePointAt(s)===i.codePointAt(p--)?p<0&&(u=s):(p=-1,u=d));return r===u?u=d:u<0&&(u=e.length),e.slice(r,u)}function S5(e){if(Qi(e),e.length===0)return".";let i=-1,r=e.length,u;for(;--r;)if(e.codePointAt(r)===47){if(u){i=r;break}}else u||(u=!0);return i<0?e.codePointAt(0)===47?"/":".":i===1&&e.codePointAt(0)===47?"//":e.slice(0,i)}function E5(e){Qi(e);let i=e.length,r=-1,u=0,s=-1,f=0,d;for(;i--;){const p=e.codePointAt(i);if(p===47){if(d){u=i+1;break}continue}r<0&&(d=!0,r=i+1),p===46?s<0?s=i:f!==1&&(f=1):s>-1&&(f=-1)}return s<0||r<0||f===0||f===1&&s===r-1&&s===u+1?"":e.slice(s,r)}function k5(...e){let i=-1,r;for(;++i<e.length;)Qi(e[i]),e[i]&&(r=r===void 0?e[i]:r+"/"+e[i]);return r===void 0?".":T5(r)}function T5(e){Qi(e);const i=e.codePointAt(0)===47;let r=O5(e,!i);return r.length===0&&!i&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),i?"/"+r:r}function O5(e,i){let r="",u=0,s=-1,f=0,d=-1,p,g;for(;++d<=e.length;){if(d<e.length)p=e.codePointAt(d);else{if(p===47)break;p=47}if(p===47){if(!(s===d-1||f===1))if(s!==d-1&&f===2){if(r.length<2||u!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(g=r.lastIndexOf("/"),g!==r.length-1){g<0?(r="",u=0):(r=r.slice(0,g),u=r.length-1-r.lastIndexOf("/")),s=d,f=0;continue}}else if(r.length>0){r="",u=0,s=d,f=0;continue}}i&&(r=r.length>0?r+"/..":"..",u=2)}else r.length>0?r+="/"+e.slice(s+1,d):r=e.slice(s+1,d),u=d-s-1;s=d,f=0}else p===46&&f>-1?f++:f=-1}return r}function Qi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const A5={cwd:z5};function z5(){return"/"}function Rs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function C5(e){if(typeof e=="string")e=new URL(e);else if(!Rs(e)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(e.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return w5(e)}function w5(e){if(e.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const i=e.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const u=i.codePointAt(r+2);if(u===70||u===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(i)}const ps=["history","path","basename","stem","extname","dirname"];class s0{constructor(i){let r;i?Rs(i)?r={path:i}:typeof i=="string"||_5(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":A5.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<ps.length;){const f=ps[u];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let s;for(s in r)ps.includes(s)||(this[s]=r[s])}get basename(){return typeof this.path=="string"?me.basename(this.path):void 0}set basename(i){gs(i,"basename"),ms(i,"basename"),this.path=me.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?me.dirname(this.path):void 0}set dirname(i){Im(this.basename,"dirname"),this.path=me.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?me.extname(this.path):void 0}set extname(i){if(ms(i,"extname"),Im(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=me.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){Rs(i)&&(i=C5(i)),gs(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?me.basename(this.path,this.extname):void 0}set stem(i){gs(i,"stem"),ms(i,"stem"),this.path=me.join(this.dirname||"",i+(this.extname||""))}fail(i,r,u){const s=this.message(i,r,u);throw s.fatal=!0,s}info(i,r,u){const s=this.message(i,r,u);return s.fatal=void 0,s}message(i,r,u){const s=new bn(i,r,u);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function ms(e,i){if(e&&e.includes(me.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+me.sep+"`")}function gs(e,i){if(!e)throw new Error("`"+i+"` cannot be empty")}function Im(e,i){if(!e)throw new Error("Setting `"+i+"` requires `path` to be set too")}function _5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const D5=(function(e){const u=this.constructor.prototype,s=u[e],f=function(){return s.apply(f,arguments)};return Object.setPrototypeOf(f,u),f}),M5={}.hasOwnProperty;class af extends D5{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=b5()}copy(){const i=new af;let r=-1;for(;++r<this.attachers.length;){const u=this.attachers[r];i.use(...u)}return i.data(hs(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?(vs("data",this.frozen),this.namespace[i]=r,this):M5.call(this.namespace,i)&&this.namespace[i]||void 0:i?(vs("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const s=r.call(i,...u);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=pu(i),u=this.parser||this.Parser;return ys("parse",u),u(String(r),r)}process(i,r){const u=this;return this.freeze(),ys("process",this.parser||this.Parser),bs("process",this.compiler||this.Compiler),r?s(void 0,r):new Promise(s);function s(f,d){const p=pu(i),g=u.parse(p);u.run(g,p,function(y,b,S){if(y||!b||!S)return h(y);const x=b,D=u.stringify(x,S);j5(D)?S.value=D:S.result=D,h(y,S)});function h(y,b){y||!b?d(y):f?f(b):r(void 0,b)}}}processSync(i){let r=!1,u;return this.freeze(),ys("processSync",this.parser||this.Parser),bs("processSync",this.compiler||this.Compiler),this.process(i,s),Wm("processSync","process",r),u;function s(f,d){r=!0,Jm(f),u=d}}run(i,r,u){$m(i),this.freeze();const s=this.transformers;return!u&&typeof r=="function"&&(u=r,r=void 0),u?f(void 0,u):new Promise(f);function f(d,p){const g=pu(r);s.run(i,g,h);function h(y,b,S){const x=b||i;y?p(y):d?d(x):u(void 0,x,S)}}}runSync(i,r){let u=!1,s;return this.run(i,r,f),Wm("runSync","run",u),s;function f(d,p){Jm(d),s=p,u=!0}}stringify(i,r){this.freeze();const u=pu(r),s=this.compiler||this.Compiler;return bs("stringify",s),$m(i),s(i,u)}use(i,...r){const u=this.attachers,s=this.namespace;if(vs("use",this.frozen),i!=null)if(typeof i=="function")g(i,r);else if(typeof i=="object")Array.isArray(i)?p(i):d(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function f(h){if(typeof h=="function")g(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...b]=h;g(y,b)}else d(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function d(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(h.plugins),h.settings&&(s.settings=hs(!0,s.settings,h.settings))}function p(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const b=h[y];f(b)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function g(h,y){let b=-1,S=-1;for(;++b<u.length;)if(u[b][0]===h){S=b;break}if(S===-1)u.push([h,...y]);else if(y.length>0){let[x,...D]=y;const z=u[S][1];Ms(z)&&Ms(x)&&(x=hs(!0,z,x)),u[S]=[h,x,...D]}}}}const R5=new af().freeze();function ys(e,i){if(typeof i!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function bs(e,i){if(typeof i!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function vs(e,i){if(i)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function $m(e){if(!Ms(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Wm(e,i,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+i+"` instead")}function pu(e){return N5(e)?e:new s0(e)}function N5(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function j5(e){return typeof e=="string"||U5(e)}function U5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const L5="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",tg=[],ng={allowDangerousHtml:!0},B5=/^(https?|ircs?|mailto|xmpp)$/i,H5=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function eg(e){const i=q5(e),r=Y5(e);return X5(i.runSync(i.parse(r),r),e)}function q5(e){const i=e.rehypePlugins||tg,r=e.remarkPlugins||tg,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ng}:ng;return R5().use(xS).use(r).use(m5,u).use(i)}function Y5(e){const i=e.children||"",r=new s0;return typeof i=="string"&&(r.value=i),r}function X5(e,i){const r=i.allowedElements,u=i.allowElement,s=i.components,f=i.disallowedElements,d=i.skipHtml,p=i.unwrapDisallowed,g=i.urlTransform||G5;for(const y of H5)Object.hasOwn(i,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+L5+y.id,void 0);return c0(e,h),Wv(e,{Fragment:_.Fragment,components:s,ignoreInvalidStyle:!0,jsx:_.jsx,jsxs:_.jsxs,passKeys:!0,passNode:!0});function h(y,b,S){if(y.type==="raw"&&S&&typeof b=="number")return d?S.children.splice(b,1):S.children[b]={type:"text",value:y.value},b;if(y.type==="element"){let x;for(x in cs)if(Object.hasOwn(cs,x)&&Object.hasOwn(y.properties,x)){const D=y.properties[x],z=cs[x];(z===null||z.includes(y.tagName))&&(y.properties[x]=g(String(D||""),x,y))}}if(y.type==="element"){let x=r?!r.includes(y.tagName):f?f.includes(y.tagName):!1;if(!x&&u&&typeof b=="number"&&(x=!u(y,b,S)),x&&S&&typeof b=="number")return p&&y.children?S.children.splice(b,1,...y.children):S.children.splice(b,1),b}}}function G5(e){const i=e.indexOf(":"),r=e.indexOf("?"),u=e.indexOf("#"),s=e.indexOf("/");return i===-1||s!==-1&&i>s||r!==-1&&i>r||u!==-1&&i>u||B5.test(e.slice(0,i))?e:""}const V5=({isOpen:e,onClose:i,onSubmit:r,formError:u})=>{const[s,f]=L.useState({title:"",type:ks.NoteAdded,occurredAtUtc:new Date,details:void 0,createdBy:void 0}),d=g=>{const{name:h,value:y}=g.target;f(b=>({...b,[h]:h==="type"?Number(y):h==="occurredAtUtc"?new Date(y):y}))},p=async g=>{g.preventDefault(),await r(s)};return e?_.jsx("div",{className:"modal-backdrop",children:_.jsxs("div",{className:"modal",children:[_.jsx("h2",{children:"Append Event"}),_.jsxs("form",{onSubmit:p,className:"append-event-form",children:[_.jsxs("fieldset",{children:[_.jsx("legend",{children:"Event Details"}),_.jsxs("label",{htmlFor:"title",children:["Title:",_.jsx("input",{id:"title",type:"text",name:"title",value:s.title,onChange:d,required:!0})]}),_.jsxs("label",{htmlFor:"type",children:["Type:",_.jsx("select",{id:"type",name:"type",value:s.type,onChange:d,required:!0,children:Object.entries(ks).map(([g,h])=>g!=="IncidentDeclared"&&_.jsx("option",{value:h,children:g},h))})]}),_.jsxs("label",{htmlFor:"occurredAt",children:["Occurred At:",_.jsx("input",{id:"occurredAt",type:"datetime-local",name:"occurredAtUtc",value:s.occurredAtUtc.toISOString().slice(0,16),onChange:d,required:!0})]})]}),_.jsxs("fieldset",{children:[_.jsx("legend",{children:"Additional Information"}),_.jsxs("label",{htmlFor:"details",children:["Details:",_.jsx("textarea",{id:"details",name:"details",value:s.details,onChange:d,required:!0})]}),_.jsxs("label",{htmlFor:"createdBy",children:["Created By:",_.jsx("input",{id:"createdBy",type:"text",name:"createdBy",value:s.createdBy,onChange:d,required:!0})]})]}),_.jsxs("div",{className:"modal-buttons",children:[_.jsx("button",{type:"button",onClick:i,children:"Cancel"}),_.jsx("button",{type:"submit",children:"Add Event"})]})]}),u&&_.jsx("div",{className:"form-error",children:u})]})}):null};function cn(e,i){i===void 0&&(i={});var r=i.insertAt;if(e&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&u.firstChild?u.insertBefore(s,u.firstChild):u.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}cn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ye=function(){return ye=Object.assign||function(e){for(var i,r=1,u=arguments.length;r<u;r++)for(var s in i=arguments[r])Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);return e},ye.apply(this,arguments)};function Au(e){return Au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Au(e)}var Q5=/^\s+/,Z5=/\s+$/;function ct(e,i){if(i=i||{},(e=e||"")instanceof ct)return e;if(!(this instanceof ct))return new ct(e,i);var r=(function(u){var s={r:0,g:0,b:0},f=1,d=null,p=null,g=null,h=!1,y=!1;typeof u=="string"&&(u=(function(D){D=D.replace(Q5,"").replace(Z5,"").toLowerCase();var z,U=!1;if(Ns[D])D=Ns[D],U=!0;else if(D=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(z=ue.rgb.exec(D))?{r:z[1],g:z[2],b:z[3]}:(z=ue.rgba.exec(D))?{r:z[1],g:z[2],b:z[3],a:z[4]}:(z=ue.hsl.exec(D))?{h:z[1],s:z[2],l:z[3]}:(z=ue.hsla.exec(D))?{h:z[1],s:z[2],l:z[3],a:z[4]}:(z=ue.hsv.exec(D))?{h:z[1],s:z[2],v:z[3]}:(z=ue.hsva.exec(D))?{h:z[1],s:z[2],v:z[3],a:z[4]}:(z=ue.hex8.exec(D))?{r:Xn(z[1]),g:Xn(z[2]),b:Xn(z[3]),a:og(z[4]),format:U?"name":"hex8"}:(z=ue.hex6.exec(D))?{r:Xn(z[1]),g:Xn(z[2]),b:Xn(z[3]),format:U?"name":"hex"}:(z=ue.hex4.exec(D))?{r:Xn(z[1]+""+z[1]),g:Xn(z[2]+""+z[2]),b:Xn(z[3]+""+z[3]),a:og(z[4]+""+z[4]),format:U?"name":"hex8"}:(z=ue.hex3.exec(D))?{r:Xn(z[1]+""+z[1]),g:Xn(z[2]+""+z[2]),b:Xn(z[3]+""+z[3]),format:U?"name":"hex"}:!1})(u)),Au(u)=="object"&&(qe(u.r)&&qe(u.g)&&qe(u.b)?(b=u.r,S=u.g,x=u.b,s={r:255*Jt(b,255),g:255*Jt(S,255),b:255*Jt(x,255)},h=!0,y=String(u.r).substr(-1)==="%"?"prgb":"rgb"):qe(u.h)&&qe(u.s)&&qe(u.v)?(d=ji(u.s),p=ji(u.v),s=(function(D,z,U){D=6*Jt(D,360),z=Jt(z,100),U=Jt(U,100);var N=Math.floor(D),X=D-N,q=U*(1-z),at=U*(1-X*z),tt=U*(1-(1-X)*z),H=N%6,J=[U,at,q,q,tt,U][H],ot=[tt,U,U,at,q,q][H],lt=[q,q,tt,U,U,at][H];return{r:255*J,g:255*ot,b:255*lt}})(u.h,d,p),h=!0,y="hsv"):qe(u.h)&&qe(u.s)&&qe(u.l)&&(d=ji(u.s),g=ji(u.l),s=(function(D,z,U){var N,X,q;function at(J,ot,lt){return lt<0&&(lt+=1),lt>1&&(lt-=1),lt<1/6?J+6*(ot-J)*lt:lt<.5?ot:lt<2/3?J+(ot-J)*(2/3-lt)*6:J}if(D=Jt(D,360),z=Jt(z,100),U=Jt(U,100),z===0)N=X=q=U;else{var tt=U<.5?U*(1+z):U+z-U*z,H=2*U-tt;N=at(H,tt,D+1/3),X=at(H,tt,D),q=at(H,tt,D-1/3)}return{r:255*N,g:255*X,b:255*q}})(u.h,d,g),h=!0,y="hsl"),u.hasOwnProperty("a")&&(f=u.a));var b,S,x;return f=f0(f),{ok:h,format:u.format||y,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:f}})(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||r.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function ag(e,i,r){e=Jt(e,255),i=Jt(i,255),r=Jt(r,255);var u,s,f=Math.max(e,i,r),d=Math.min(e,i,r),p=(f+d)/2;if(f==d)u=s=0;else{var g=f-d;switch(s=p>.5?g/(2-f-d):g/(f+d),f){case e:u=(i-r)/g+(i<r?6:0);break;case i:u=(r-e)/g+2;break;case r:u=(e-i)/g+4}u/=6}return{h:u,s,l:p}}function lg(e,i,r){e=Jt(e,255),i=Jt(i,255),r=Jt(r,255);var u,s,f=Math.max(e,i,r),d=Math.min(e,i,r),p=f,g=f-d;if(s=f===0?0:g/f,f==d)u=0;else{switch(f){case e:u=(i-r)/g+(i<r?6:0);break;case i:u=(r-e)/g+2;break;case r:u=(e-i)/g+4}u/=6}return{h:u,s,v:p}}function ig(e,i,r,u){var s=[oe(Math.round(e).toString(16)),oe(Math.round(i).toString(16)),oe(Math.round(r).toString(16))];return u&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function rg(e,i,r,u){return[oe(d0(u)),oe(Math.round(e).toString(16)),oe(Math.round(i).toString(16)),oe(Math.round(r).toString(16))].join("")}function P5(e,i){i=i===0?0:i||10;var r=ct(e).toHsl();return r.s-=i/100,r.s=ju(r.s),ct(r)}function K5(e,i){i=i===0?0:i||10;var r=ct(e).toHsl();return r.s+=i/100,r.s=ju(r.s),ct(r)}function J5(e){return ct(e).desaturate(100)}function F5(e,i){i=i===0?0:i||10;var r=ct(e).toHsl();return r.l+=i/100,r.l=ju(r.l),ct(r)}function I5(e,i){i=i===0?0:i||10;var r=ct(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-i/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-i/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-i/100*255))),ct(r)}function $5(e,i){i=i===0?0:i||10;var r=ct(e).toHsl();return r.l-=i/100,r.l=ju(r.l),ct(r)}function W5(e,i){var r=ct(e).toHsl(),u=(r.h+i)%360;return r.h=u<0?360+u:u,ct(r)}function tE(e){var i=ct(e).toHsl();return i.h=(i.h+180)%360,ct(i)}function ug(e,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var r=ct(e).toHsl(),u=[ct(e)],s=360/i,f=1;f<i;f++)u.push(ct({h:(r.h+f*s)%360,s:r.s,l:r.l}));return u}function nE(e){var i=ct(e).toHsl(),r=i.h;return[ct(e),ct({h:(r+72)%360,s:i.s,l:i.l}),ct({h:(r+216)%360,s:i.s,l:i.l})]}function eE(e,i,r){i=i||6,r=r||30;var u=ct(e).toHsl(),s=360/r,f=[ct(e)];for(u.h=(u.h-(s*i>>1)+720)%360;--i;)u.h=(u.h+s)%360,f.push(ct(u));return f}function aE(e,i){i=i||6;for(var r=ct(e).toHsv(),u=r.h,s=r.s,f=r.v,d=[],p=1/i;i--;)d.push(ct({h:u,s,v:f})),f=(f+p)%1;return d}ct.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,i,r,u=this.toRgb();return e=u.r/255,i=u.g/255,r=u.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=f0(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=lg(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=lg(this._r,this._g,this._b),i=Math.round(360*e.h),r=Math.round(100*e.s),u=Math.round(100*e.v);return this._a==1?"hsv("+i+", "+r+"%, "+u+"%)":"hsva("+i+", "+r+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var e=ag(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=ag(this._r,this._g,this._b),i=Math.round(360*e.h),r=Math.round(100*e.s),u=Math.round(100*e.l);return this._a==1?"hsl("+i+", "+r+"%, "+u+"%)":"hsla("+i+", "+r+"%, "+u+"%, "+this._roundA+")"},toHex:function(e){return ig(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return(function(i,r,u,s,f){var d=[oe(Math.round(i).toString(16)),oe(Math.round(r).toString(16)),oe(Math.round(u).toString(16)),oe(d0(s))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")})(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Jt(this._r,255))+"%",g:Math.round(100*Jt(this._g,255))+"%",b:Math.round(100*Jt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Jt(this._r,255))+"%, "+Math.round(100*Jt(this._g,255))+"%, "+Math.round(100*Jt(this._b,255))+"%)":"rgba("+Math.round(100*Jt(this._r,255))+"%, "+Math.round(100*Jt(this._g,255))+"%, "+Math.round(100*Jt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(lE[ig(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var i="#"+rg(this._r,this._g,this._b,this._a),r=i,u=this._gradientType?"GradientType = 1, ":"";if(e){var s=ct(e);r="#"+rg(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+i+",endColorstr="+r+")"},toString:function(e){var i=!!e;e=e||this._format;var r=!1,u=this._a<1&&this._a>=0;return i||!u||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ct(this.toString())},_applyModification:function(e,i){var r=e.apply(null,[this].concat([].slice.call(i)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(F5,arguments)},brighten:function(){return this._applyModification(I5,arguments)},darken:function(){return this._applyModification($5,arguments)},desaturate:function(){return this._applyModification(P5,arguments)},saturate:function(){return this._applyModification(K5,arguments)},greyscale:function(){return this._applyModification(J5,arguments)},spin:function(){return this._applyModification(W5,arguments)},_applyCombination:function(e,i){return e.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(eE,arguments)},complement:function(){return this._applyCombination(tE,arguments)},monochromatic:function(){return this._applyCombination(aE,arguments)},splitcomplement:function(){return this._applyCombination(nE,arguments)},triad:function(){return this._applyCombination(ug,[3])},tetrad:function(){return this._applyCombination(ug,[4])}},ct.fromRatio=function(e,i){if(Au(e)=="object"){var r={};for(var u in e)e.hasOwnProperty(u)&&(r[u]=u==="a"?e[u]:ji(e[u]));e=r}return ct(e,i)},ct.equals=function(e,i){return!(!e||!i)&&ct(e).toRgbString()==ct(i).toRgbString()},ct.random=function(){return ct.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ct.mix=function(e,i,r){r=r===0?0:r||50;var u=ct(e).toRgb(),s=ct(i).toRgb(),f=r/100;return ct({r:(s.r-u.r)*f+u.r,g:(s.g-u.g)*f+u.g,b:(s.b-u.b)*f+u.b,a:(s.a-u.a)*f+u.a})},ct.readability=function(e,i){var r=ct(e),u=ct(i);return(Math.max(r.getLuminance(),u.getLuminance())+.05)/(Math.min(r.getLuminance(),u.getLuminance())+.05)},ct.isReadable=function(e,i,r){var u,s,f=ct.readability(e,i);switch(s=!1,(u=(function(d){var p,g;return p=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),g=(d.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),g!=="small"&&g!=="large"&&(g="small"),{level:p,size:g}})(r)).level+u.size){case"AAsmall":case"AAAlarge":s=f>=4.5;break;case"AAlarge":s=f>=3;break;case"AAAsmall":s=f>=7}return s},ct.mostReadable=function(e,i,r){var u,s,f,d,p=null,g=0;s=(r=r||{}).includeFallbackColors,f=r.level,d=r.size;for(var h=0;h<i.length;h++)(u=ct.readability(e,i[h]))>g&&(g=u,p=ct(i[h]));return ct.isReadable(e,p,{level:f,size:d})||!s?p:(r.includeFallbackColors=!1,ct.mostReadable(e,["#fff","#000"],r))};var Ns=ct.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},lE=ct.hexNames=(function(e){var i={};for(var r in e)e.hasOwnProperty(r)&&(i[e[r]]=r);return i})(Ns);function f0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Jt(e,i){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(e)&&(e="100%");var r=(function(u){return typeof u=="string"&&u.indexOf("%")!=-1})(e);return e=Math.min(i,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*i,10)/100),Math.abs(e-i)<1e-6?1:e%i/parseFloat(i)}function ju(e){return Math.min(1,Math.max(0,e))}function Xn(e){return parseInt(e,16)}function oe(e){return e.length==1?"0"+e:""+e}function ji(e){return e<=1&&(e=100*e+"%"),e}function d0(e){return Math.round(255*parseFloat(e)).toString(16)}function og(e){return Xn(e)/255}var ga,mu,gu,ue=(mu="[\\s|\\(]+("+(ga="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ga+")[,|\\s]+("+ga+")\\s*\\)?",gu="[\\s|\\(]+("+ga+")[,|\\s]+("+ga+")[,|\\s]+("+ga+")[,|\\s]+("+ga+")\\s*\\)?",{CSS_UNIT:new RegExp(ga),rgb:new RegExp("rgb"+mu),rgba:new RegExp("rgba"+gu),hsl:new RegExp("hsl"+mu),hsla:new RegExp("hsla"+gu),hsv:new RegExp("hsv"+mu),hsva:new RegExp("hsva"+gu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function qe(e){return!!ue.CSS_UNIT.exec(e)}var iE=function(e,i){var r=(typeof e=="string"?parseInt(e):e)||0;if(r>=-5&&r<=5){var u=r,s=parseFloat(i),f=s+u*(s/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:i}},rE=function(e,i){var r=e||{},u="";switch(i){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var s={};if(r.fontSize){var f=r.fontSize;s=(function(d,p){var g={};for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&p.indexOf(h)<0&&(g[h]=d[h]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(d);y<h.length;y++)p.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(d,h[y])&&(g[h[y]]=d[h[y]])}return g})(r,["fontSize"]),u=f}return{fontSize:u,styles:s}},uE={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},oE=function(e){var i=e.className,r=e.text,u=e.textColor,s=e.staticText,f=e.style;return r?Ye.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:ye(ye(ye({},s&&uE),u&&{color:u,mixBlendMode:"unset"}),f&&f)},typeof r=="string"&&r.length?r:"loading"):null},h0="rgb(50, 205, 50)";function cE(e,i){if(i===void 0&&(i=0),e.length===0)throw new Error("Input array cannot be empty!");var r=[];return(function u(s,f){return f===void 0&&(f=0),r.push.apply(r,s),r.length<f&&u(r,f),r.slice(0,f)})(e,i)}cn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ct(h0).toRgb();Array.from({length:4},(function(e,i){return"--atom-phase".concat(i+1,"-rgb")}));cn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--commet-phase".concat(i+1,"-color")}));cn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--OP-annulus-phase".concat(i+1,"-color")}));function xs(e){return e&&e.Math===Math&&e}cn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);xs(typeof window=="object"&&window)||xs(typeof self=="object"&&self)||xs(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(e,i){return"--OP-dotted-phase".concat(i+1,"-color")}));cn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--OP-spokes-phase".concat(i+1,"-color")}));cn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(e,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")}));cn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]}));cn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--four-square-phase".concat(i+1,"-color")}));cn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--mosaic-phase".concat(i+1,"-color")}));cn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--riple-phase".concat(i+1,"-color")}));cn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--TD-pulsate-phase".concat(i+1,"-color")}));cn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}));cn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--TD-bob-phase".concat(i+1,"-color")}));cn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--TD-bounce-phase".concat(i+1,"-color")}));cn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);var yu=Array.from({length:4},(function(e,i){return"--shape-phase".concat(i+1,"-color")})),sE=function(e){var i,r=rE(e?.style,e?.size),u=r.styles,s=r.fontSize,f=e?.easing,d=iE(e?.speedPlus,"1.2s").animationPeriod,p=(function(g){var h={},y=yu.length;if(Array.isArray(g)&&g.length>0){for(var b=cE(g,y),S=0;S<b.length&&!(S>y-1);S++){var x=b[S];h[yu[S]]=x}return h}try{if(typeof g!="string")throw new Error("Color String expected");for(S=0;S<y;S++)h[yu[S]]=g}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),S=0;S<y;S++)h[yu[S]]=h0}return h})((i=e?.color)!==null&&i!==void 0?i:"");return Ye.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:ye(ye(ye(ye(ye({},s&&{fontSize:s}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),u),role:"status","aria-live":"polite","aria-label":"Loading"},Ye.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},Ye.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),Ye.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),Ye.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),Ye.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),Ye.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),Ye.createElement(oE,{staticText:!0,text:e?.text,textColor:e?.textColor,style:{marginTop:"0.8em"}}))};cn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--trophySpin-phase".concat(i+1,"-color")}));cn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--slab-phase".concat(i+1,"-color")}));cn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(e,i){return"--life-line-phase".concat(i+1,"-color")}));const fE=()=>{const{id:e}=x1(),i=Cu(),[r,u]=L.useState(null),[s,f]=L.useState(!0),[d,p]=L.useState(null),[g,h]=L.useState(null),[y,b]=L.useState(!1),[S,x]=L.useState(null),[D,z]=L.useState(!1),[U,N]=L.useState(null),[X,q]=L.useState(null),[at,tt]=L.useState(!1),[H,J]=L.useState("idle"),[ot,lt]=L.useState(null),gt=C=>{const P=document.getElementById(C);P&&(P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("highlight"),setTimeout(()=>{P.classList.remove("highlight")},2e3))};L.useEffect(()=>{(async()=>{try{if(e){const P=await ym(e);u(P)}}catch{p("Failed to fetch incident details.")}finally{f(!1)}})()},[e]);const nt=async C=>{h(null);try{if(e){await vv(e,C);const P=await ym(e);u(P),b(!1)}}catch(P){P.response?.status===409&&P.response?.data?.error==="concurrency_conflict"?h(P.response.data.message||"Concurrency conflict occurred. Please try again."):h("Failed to append event. Please try again.")}},W=async()=>{if(e){z(!0),N(null),x(null);try{const C=await Sv(e);x(C)}catch(C){N(C?.message??"Failed to generate summary")}finally{z(!1)}}},Ot=async()=>{if(e){q(null),lt(null),J("idle"),tt(!0),x(null);try{const C=await Ev(e);q(C)}catch{lt("Failed to generate postmortem. Please try again.")}finally{tt(!1)}}},rt=Math.max(0,...r?.events.map(C=>C.sequence)||[]),F=X!=null&&rt>X.inputEventSequenceMax;return s?_.jsx("div",{className:"incident-detail-container",children:"Loading..."}):d?_.jsx("div",{className:"incident-detail-container",children:d}):r?_.jsxs("div",{className:"incident-detail-container",children:[_.jsxs("div",{className:"button-container",children:[_.jsx("button",{onClick:()=>i("/"),children:"Back to Home"}),_.jsx("button",{onClick:()=>b(!0),className:"append-event-button",children:"Append Event"})]}),_.jsx("h1",{children:"Incident Details"}),_.jsxs("div",{className:"incident-detail",children:[_.jsxs("p",{children:[_.jsx("strong",{children:"Title:"})," ",r.title]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Severity:"})," ",Ui(ku,r.severity)]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Status:"})," ",Ui(wg,r.status)]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Created At:"})," ",new Date(r.createdAtUtc).toLocaleString(void 0,{timeZone:"UTC",timeZoneName:"short"})]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Details:"})," ",r.events[0]?.details]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Created By:"})," ",r.events[0]?.createdBy]})]}),_.jsxs("div",{className:"button-container-right",children:[_.jsx("button",{onClick:W,disabled:D,children:"Generate Summary"}),_.jsx("button",{onClick:Ot,disabled:at,children:"Generate Postmortem"})]}),(D||at)&&_.jsx("div",{className:"loading-container",children:_.jsx(sE,{color:"#d9d9d9",size:"small"})}),S&&_.jsxs("div",{className:"summary-container",children:[_.jsx("h2",{children:"Summary"}),_.jsxs("p",{children:[_.jsx("strong",{children:"Generated At:"})," ",new Date(S.generatedAtUtc).toLocaleString()]}),_.jsxs("div",{children:[_.jsx("p",{children:_.jsx("strong",{children:"Content:"})}),_.jsx("div",{className:"content-markdown",children:_.jsx(eg,{children:S.contentMarkdown})})]}),S.citations.length>0&&_.jsxs("div",{children:[_.jsx("p",{children:_.jsx("strong",{children:"Citations:"})}),_.jsx("div",{children:S.citations.map(C=>_.jsxs("div",{children:[_.jsxs("p",{className:"citation-link",onClick:()=>gt(C.incidentEventId),children:[_.jsxs("strong",{children:["[",C.sequence,"]"]})," -- ",C.reason&&C.reason]}),C.quote&&_.jsxs("p",{className:"citation-quote",children:[_.jsx("strong",{children:"Quote:"})," ",C.quote]})]},C.incidentEventId))})]}),U&&_.jsx("p",{className:"error-message",children:U})]}),X&&_.jsxs("div",{className:"postmortem-container",children:[_.jsx("h2",{children:"Postmortem"}),X.generatedAtUtc&&_.jsxs("p",{children:["Generated At: ",new Date(X.generatedAtUtc).toLocaleString()]}),_.jsx("div",{className:"content-markdown",children:_.jsx(eg,{children:X.contentMarkdown})}),X.citations.length>0&&_.jsxs("div",{children:[_.jsx("p",{children:_.jsx("strong",{children:"Citations:"})}),_.jsx("div",{children:X.citations.map(C=>_.jsxs("div",{children:[_.jsxs("p",{className:"citation-link",onClick:()=>gt(C.incidentEventId),children:[_.jsxs("strong",{children:["[",C.sequence,"]"]})," -- ",C.reason&&C.reason]}),C.quote&&_.jsxs("p",{className:"citation-quote",children:[_.jsx("strong",{children:"Quote:"})," ",C.quote]})]},C.incidentEventId))})]}),F&&_.jsx("div",{className:"warning-banner",children:"Incident changed since this draft was generated. Regenerate before publishing."}),ot&&_.jsx("p",{className:"error-message",children:ot}),H==="publishing"&&_.jsx("p",{children:"Publishing..."})]}),_.jsx("h2",{children:"Events"}),_.jsxs("table",{className:"incident-events-table",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"Sequence"}),_.jsx("th",{children:"Occurred At"}),_.jsx("th",{children:"Type"}),_.jsx("th",{children:"Title"}),_.jsx("th",{children:"Details"}),_.jsx("th",{children:"Created By"})]})}),_.jsx("tbody",{children:r.events.map(C=>_.jsxs("tr",{id:C.incidentEventId,className:"event-row",children:[_.jsx("td",{children:C.sequence}),_.jsx("td",{children:new Date(C.occurredAtUtc).toLocaleString(void 0,{timeZone:"UTC",timeZoneName:"short"})}),_.jsx("td",{children:Ui(ks,C.type)}),_.jsx("td",{children:C.title}),_.jsx("td",{children:C.details||"N/A"}),_.jsx("td",{children:C.createdBy||"N/A"})]},C.incidentEventId))})]}),_.jsx(V5,{isOpen:y,onClose:()=>b(!1),onSubmit:nt,formError:g})]}):_.jsx("div",{className:"incident-detail-container",children:"Incident not found."})};function dE(){return _.jsx(N1,{to:"/incidents",replace:!0})}function hE(){return _.jsxs("div",{className:"app-container",children:[_.jsx("header",{className:"app-header",children:_.jsx("h1",{children:"Incident Atlas"})}),_.jsx("main",{className:"app-main",children:_.jsxs(U1,{children:[_.jsx(bu,{path:"/",element:_.jsx(dE,{})}),_.jsx(bu,{path:"/incidents",element:_.jsx(Tv,{})}),_.jsx(bu,{path:"/incidents/:id",element:_.jsx(fE,{})})]})}),_.jsx("footer",{className:"app-footer",children:_.jsx("p",{children:"© 2026 Incident Atlas"})})]})}Lb.createRoot(document.getElementById("root")).render(_.jsx(L.StrictMode,{children:_.jsx(rv,{children:_.jsx(hE,{})})}));
