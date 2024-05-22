(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function OR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var jI={exports:{}},Ih={},qI={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=Symbol.for("react.element"),LR=Symbol.for("react.portal"),MR=Symbol.for("react.fragment"),FR=Symbol.for("react.strict_mode"),UR=Symbol.for("react.profiler"),BR=Symbol.for("react.provider"),zR=Symbol.for("react.context"),$R=Symbol.for("react.forward_ref"),jR=Symbol.for("react.suspense"),qR=Symbol.for("react.memo"),GR=Symbol.for("react.lazy"),Ly=Symbol.iterator;function WR(n){return n===null||typeof n!="object"?null:(n=Ly&&n[Ly]||n["@@iterator"],typeof n=="function"?n:null)}var GI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},WI=Object.assign,KI={};function ko(n,e,t){this.props=n,this.context=e,this.refs=KI,this.updater=t||GI}ko.prototype.isReactComponent={};ko.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ko.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function HI(){}HI.prototype=ko.prototype;function cm(n,e,t){this.props=n,this.context=e,this.refs=KI,this.updater=t||GI}var hm=cm.prototype=new HI;hm.constructor=cm;WI(hm,ko.prototype);hm.isPureReactComponent=!0;var My=Array.isArray,QI=Object.prototype.hasOwnProperty,dm={current:null},YI={key:!0,ref:!0,__self:!0,__source:!0};function JI(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)QI.call(e,r)&&!YI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ll,type:n,key:s,ref:o,props:i,_owner:dm.current}}function KR(n,e){return{$$typeof:Ll,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function fm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ll}function HR(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fy=/\/+/g;function Bd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?HR(""+n.key):e.toString(36)}function Ju(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ll:case LR:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+Bd(o,0):r,My(i)?(t="",n!=null&&(t=n.replace(Fy,"$&/")+"/"),Ju(i,e,t,"",function(c){return c})):i!=null&&(fm(i)&&(i=KR(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fy,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",My(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+Bd(s,a);o+=Ju(s,e,t,u,i)}else if(u=WR(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+Bd(s,a++),o+=Ju(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pu(n,e,t){if(n==null)return n;var r=[],i=0;return Ju(n,r,"","",function(s){return e.call(t,s,i++)}),r}function QR(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var bt={current:null},Xu={transition:null},YR={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Xu,ReactCurrentOwner:dm};function XI(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Pu,forEach:function(n,e,t){Pu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Pu(n,function(){e++}),e},toArray:function(n){return Pu(n,function(e){return e})||[]},only:function(n){if(!fm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ne.Component=ko;ne.Fragment=MR;ne.Profiler=UR;ne.PureComponent=cm;ne.StrictMode=FR;ne.Suspense=jR;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YR;ne.act=XI;ne.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=WI({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dm.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)QI.call(e,u)&&!YI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ll,type:n.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(n){return n={$$typeof:zR,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:BR,_context:n},n.Consumer=n};ne.createElement=JI;ne.createFactory=function(n){var e=JI.bind(null,n);return e.type=n,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(n){return{$$typeof:$R,render:n}};ne.isValidElement=fm;ne.lazy=function(n){return{$$typeof:GR,_payload:{_status:-1,_result:n},_init:QR}};ne.memo=function(n,e){return{$$typeof:qR,type:n,compare:e===void 0?null:e}};ne.startTransition=function(n){var e=Xu.transition;Xu.transition={};try{n()}finally{Xu.transition=e}};ne.unstable_act=XI;ne.useCallback=function(n,e){return bt.current.useCallback(n,e)};ne.useContext=function(n){return bt.current.useContext(n)};ne.useDebugValue=function(){};ne.useDeferredValue=function(n){return bt.current.useDeferredValue(n)};ne.useEffect=function(n,e){return bt.current.useEffect(n,e)};ne.useId=function(){return bt.current.useId()};ne.useImperativeHandle=function(n,e,t){return bt.current.useImperativeHandle(n,e,t)};ne.useInsertionEffect=function(n,e){return bt.current.useInsertionEffect(n,e)};ne.useLayoutEffect=function(n,e){return bt.current.useLayoutEffect(n,e)};ne.useMemo=function(n,e){return bt.current.useMemo(n,e)};ne.useReducer=function(n,e,t){return bt.current.useReducer(n,e,t)};ne.useRef=function(n){return bt.current.useRef(n)};ne.useState=function(n){return bt.current.useState(n)};ne.useSyncExternalStore=function(n,e,t){return bt.current.useSyncExternalStore(n,e,t)};ne.useTransition=function(){return bt.current.useTransition()};ne.version="18.3.1";qI.exports=ne;var We=qI.exports;const JR=OR(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XR=We,ZR=Symbol.for("react.element"),e1=Symbol.for("react.fragment"),t1=Object.prototype.hasOwnProperty,n1=XR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r1={key:!0,ref:!0,__self:!0,__source:!0};function ZI(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)t1.call(e,r)&&!r1.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZR,type:n,key:s,ref:o,props:i,_owner:n1.current}}Ih.Fragment=e1;Ih.jsx=ZI;Ih.jsxs=ZI;jI.exports=Ih;var he=jI.exports,bf={},eE={exports:{}},Xt={},tE={exports:{}},nE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,J){var ee=G.length;G.push(J);e:for(;0<ee;){var ke=ee-1>>>1,me=G[ke];if(0<i(me,J))G[ke]=J,G[ee]=me,ee=ke;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var J=G[0],ee=G.pop();if(ee!==J){G[0]=ee;e:for(var ke=0,me=G.length,Be=me>>>1;ke<Be;){var qn=2*(ke+1)-1,Gn=G[qn],Wn=qn+1,Kn=G[Wn];if(0>i(Gn,ee))Wn<me&&0>i(Kn,Gn)?(G[ke]=Kn,G[Wn]=ee,ke=Wn):(G[ke]=Gn,G[qn]=ee,ke=qn);else if(Wn<me&&0>i(Kn,ee))G[ke]=Kn,G[Wn]=ee,ke=Wn;else break e}}return J}function i(G,J){var ee=G.sortIndex-J.sortIndex;return ee!==0?ee:G.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,I=!1,R=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(G){for(var J=t(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=G)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=t(c)}}function V(G){if(C=!1,A(G),!R)if(t(u)!==null)R=!0,jo(U);else{var J=t(c);J!==null&&jn(V,J.startTime-G)}}function U(G,J){R=!1,C&&(C=!1,T(_),_=-1),I=!0;var ee=m;try{for(A(J),p=t(u);p!==null&&(!(p.expirationTime>J)||G&&!P());){var ke=p.callback;if(typeof ke=="function"){p.callback=null,m=p.priorityLevel;var me=ke(p.expirationTime<=J);J=n.unstable_now(),typeof me=="function"?p.callback=me:p===t(u)&&r(u),A(J)}else r(u);p=t(u)}if(p!==null)var Be=!0;else{var qn=t(c);qn!==null&&jn(V,qn.startTime-J),Be=!1}return Be}finally{p=null,m=ee,I=!1}}var F=!1,v=null,_=-1,w=5,E=-1;function P(){return!(n.unstable_now()-E<w)}function N(){if(v!==null){var G=n.unstable_now();E=G;var J=!0;try{J=v(!0,G)}finally{J?S():(F=!1,v=null)}}else F=!1}var S;if(typeof y=="function")S=function(){y(N)};else if(typeof MessageChannel<"u"){var en=new MessageChannel,mi=en.port2;en.port1.onmessage=N,S=function(){mi.postMessage(null)}}else S=function(){O(N,0)};function jo(G){v=G,F||(F=!0,S())}function jn(G,J){_=O(function(){G(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){R||I||(R=!0,jo(U))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ee=m;m=J;try{return G()}finally{m=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ee=m;m=G;try{return J()}finally{m=ee}},n.unstable_scheduleCallback=function(G,J,ee){var ke=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ke+ee:ke):ee=ke,G){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ee+me,G={id:d++,callback:J,priorityLevel:G,startTime:ee,expirationTime:me,sortIndex:-1},ee>ke?(G.sortIndex=ee,e(c,G),t(u)===null&&G===t(c)&&(C?(T(_),_=-1):C=!0,jn(V,ee-ke))):(G.sortIndex=me,e(u,G),R||I||(R=!0,jo(U))),G},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(G){var J=m;return function(){var ee=m;m=J;try{return G.apply(this,arguments)}finally{m=ee}}}})(nE);tE.exports=nE;var i1=tE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=We,Yt=i1;function B(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rE=new Set,Ja={};function os(n,e){no(n,e),no(n+"Capture",e)}function no(n,e){for(Ja[n]=e,n=0;n<e.length;n++)rE.add(e[n])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Df=Object.prototype.hasOwnProperty,o1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uy={},By={};function a1(n){return Df.call(By,n)?!0:Df.call(Uy,n)?!1:o1.test(n)?By[n]=!0:(Uy[n]=!0,!1)}function l1(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function u1(n,e,t,r){if(e===null||typeof e>"u"||l1(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){dt[n]=new Dt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];dt[e]=new Dt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){dt[n]=new Dt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){dt[n]=new Dt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){dt[n]=new Dt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){dt[n]=new Dt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){dt[n]=new Dt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){dt[n]=new Dt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){dt[n]=new Dt(n,5,!1,n.toLowerCase(),null,!1,!1)});var pm=/[\-:]([a-z])/g;function mm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(pm,mm);dt[e]=new Dt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(pm,mm);dt[e]=new Dt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(pm,mm);dt[e]=new Dt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){dt[n]=new Dt(n,1,!1,n.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){dt[n]=new Dt(n,1,!1,n.toLowerCase(),null,!0,!0)});function gm(n,e,t,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u1(e,t,i,r)&&(t=null),r||i===null?a1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var dr=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ru=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),_m=Symbol.for("react.strict_mode"),xf=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),ym=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Of=Symbol.for("react.suspense_list"),vm=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),oE=Symbol.for("react.offscreen"),zy=Symbol.iterator;function ia(n){return n===null||typeof n!="object"?null:(n=zy&&n[zy]||n["@@iterator"],typeof n=="function"?n:null)}var De=Object.assign,zd;function wa(n){if(zd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zd=e&&e[1]||""}return`
`+zd+n}var $d=!1;function jd(n,e){if(!n||$d)return"";$d=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{$d=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?wa(n):""}function c1(n){switch(n.tag){case 5:return wa(n.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return n=jd(n.type,!1),n;case 11:return n=jd(n.type.render,!1),n;case 1:return n=jd(n.type,!0),n;default:return""}}function Lf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ns:return"Fragment";case Cs:return"Portal";case xf:return"Profiler";case _m:return"StrictMode";case Vf:return"Suspense";case Of:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sE:return(n.displayName||"Context")+".Consumer";case iE:return(n._context.displayName||"Context")+".Provider";case ym:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vm:return e=n.displayName||null,e!==null?e:Lf(n.type)||"Memo";case Rr:e=n._payload,n=n._init;try{return Lf(n(e))}catch{}}return null}function h1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===_m?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function aE(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d1(n){var e=aE(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ku(n){n._valueTracker||(n._valueTracker=d1(n))}function lE(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=aE(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Ac(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mf(n,e){var t=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function $y(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Hr(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uE(n,e){e=e.checked,e!=null&&gm(n,"checked",e,!1)}function Ff(n,e){uE(n,e);var t=Hr(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uf(n,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function jy(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uf(n,e,t){(e!=="number"||Ac(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ia=Array.isArray;function qs(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Hr(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function Bf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qy(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(B(92));if(Ia(t)){if(1<t.length)throw Error(B(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Hr(t)}}function cE(n,e){var t=Hr(e.value),r=Hr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Gy(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function hE(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?hE(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Cu,dE=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Cu=Cu||document.createElement("div"),Cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Xa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(n){f1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ba[e]=ba[n]})});function fE(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ba.hasOwnProperty(n)&&ba[n]?(""+e).trim():e+"px"}function pE(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=fE(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var p1=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(n,e){if(e){if(p1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function jf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function wm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Gf=null,Gs=null,Ws=null;function Wy(n){if(n=Ul(n)){if(typeof Gf!="function")throw Error(B(280));var e=n.stateNode;e&&(e=Ph(e),Gf(n.stateNode,n.type,e))}}function mE(n){Gs?Ws?Ws.push(n):Ws=[n]:Gs=n}function gE(){if(Gs){var n=Gs,e=Ws;if(Ws=Gs=null,Wy(n),e)for(n=0;n<e.length;n++)Wy(e[n])}}function _E(n,e){return n(e)}function yE(){}var qd=!1;function vE(n,e,t){if(qd)return n(e,t);qd=!0;try{return _E(n,e,t)}finally{qd=!1,(Gs!==null||Ws!==null)&&(yE(),gE())}}function Za(n,e){var t=n.stateNode;if(t===null)return null;var r=Ph(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(B(231,e,typeof t));return t}var Wf=!1;if(sr)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{Wf=!1}function m1(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var Da=!1,Pc=null,Rc=!1,Kf=null,g1={onError:function(n){Da=!0,Pc=n}};function _1(n,e,t,r,i,s,o,a,u){Da=!1,Pc=null,m1.apply(g1,arguments)}function y1(n,e,t,r,i,s,o,a,u){if(_1.apply(this,arguments),Da){if(Da){var c=Pc;Da=!1,Pc=null}else throw Error(B(198));Rc||(Rc=!0,Kf=c)}}function as(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function wE(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ky(n){if(as(n)!==n)throw Error(B(188))}function v1(n){var e=n.alternate;if(!e){if(e=as(n),e===null)throw Error(B(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return Ky(i),n;if(s===r)return Ky(i),e;s=s.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?n:e}function IE(n){return n=v1(n),n!==null?EE(n):null}function EE(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=EE(n);if(e!==null)return e;n=n.sibling}return null}var TE=Yt.unstable_scheduleCallback,Hy=Yt.unstable_cancelCallback,w1=Yt.unstable_shouldYield,I1=Yt.unstable_requestPaint,ze=Yt.unstable_now,E1=Yt.unstable_getCurrentPriorityLevel,Im=Yt.unstable_ImmediatePriority,SE=Yt.unstable_UserBlockingPriority,kc=Yt.unstable_NormalPriority,T1=Yt.unstable_LowPriority,AE=Yt.unstable_IdlePriority,Eh=null,xn=null;function S1(n){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Eh,n,void 0,(n.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:R1,A1=Math.log,P1=Math.LN2;function R1(n){return n>>>=0,n===0?32:31-(A1(n)/P1|0)|0}var Nu=64,bu=4194304;function Ea(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Cc(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Ea(a):(s&=o,s!==0&&(r=Ea(s)))}else o=t&~i,o!==0?r=Ea(o):s!==0&&(r=Ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-_n(e),i=1<<t,r|=n[t],e&=~i;return r}function k1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-_n(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=k1(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function Hf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function PE(){var n=Nu;return Nu<<=1,!(Nu&4194240)&&(Nu=64),n}function Gd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ml(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-_n(e),n[e]=t}function N1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-_n(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function Em(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-_n(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var fe=0;function RE(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var kE,Tm,CE,NE,bE,Qf=!1,Du=[],Fr=null,Ur=null,Br=null,el=new Map,tl=new Map,Cr=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qy(n,e){switch(n){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":el.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function oa(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ul(e),e!==null&&Tm(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function D1(n,e,t,r,i){switch(e){case"focusin":return Fr=oa(Fr,n,e,t,r,i),!0;case"dragenter":return Ur=oa(Ur,n,e,t,r,i),!0;case"mouseover":return Br=oa(Br,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return el.set(s,oa(el.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tl.set(s,oa(tl.get(s)||null,n,e,t,r,i)),!0}return!1}function DE(n){var e=Ni(n.target);if(e!==null){var t=as(e);if(t!==null){if(e=t.tag,e===13){if(e=wE(t),e!==null){n.blockedOn=e,bE(n.priority,function(){CE(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Yf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);qf=r,t.target.dispatchEvent(r),qf=null}else return e=Ul(t),e!==null&&Tm(e),n.blockedOn=t,!1;e.shift()}return!0}function Yy(n,e,t){Zu(n)&&t.delete(e)}function x1(){Qf=!1,Fr!==null&&Zu(Fr)&&(Fr=null),Ur!==null&&Zu(Ur)&&(Ur=null),Br!==null&&Zu(Br)&&(Br=null),el.forEach(Yy),tl.forEach(Yy)}function aa(n,e){n.blockedOn===e&&(n.blockedOn=null,Qf||(Qf=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,x1)))}function nl(n){function e(i){return aa(i,n)}if(0<Du.length){aa(Du[0],n);for(var t=1;t<Du.length;t++){var r=Du[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Fr!==null&&aa(Fr,n),Ur!==null&&aa(Ur,n),Br!==null&&aa(Br,n),el.forEach(e),tl.forEach(e),t=0;t<Cr.length;t++)r=Cr[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Cr.length&&(t=Cr[0],t.blockedOn===null);)DE(t),t.blockedOn===null&&Cr.shift()}var Ks=dr.ReactCurrentBatchConfig,Nc=!0;function V1(n,e,t,r){var i=fe,s=Ks.transition;Ks.transition=null;try{fe=1,Sm(n,e,t,r)}finally{fe=i,Ks.transition=s}}function O1(n,e,t,r){var i=fe,s=Ks.transition;Ks.transition=null;try{fe=4,Sm(n,e,t,r)}finally{fe=i,Ks.transition=s}}function Sm(n,e,t,r){if(Nc){var i=Yf(n,e,t,r);if(i===null)tf(n,e,r,bc,t),Qy(n,r);else if(D1(i,n,e,t,r))r.stopPropagation();else if(Qy(n,r),e&4&&-1<b1.indexOf(n)){for(;i!==null;){var s=Ul(i);if(s!==null&&kE(s),s=Yf(n,e,t,r),s===null&&tf(n,e,r,bc,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else tf(n,e,r,null,t)}}var bc=null;function Yf(n,e,t,r){if(bc=null,n=wm(r),n=Ni(n),n!==null)if(e=as(n),e===null)n=null;else if(t=e.tag,t===13){if(n=wE(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return bc=n,null}function xE(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case Im:return 1;case SE:return 4;case kc:case T1:return 16;case AE:return 536870912;default:return 16}default:return 16}}var xr=null,Am=null,ec=null;function VE(){if(ec)return ec;var n,e=Am,t=e.length,r,i="value"in xr?xr.value:xr.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return ec=i.slice(n,1<r?1-r:void 0)}function tc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xu(){return!0}function Jy(){return!1}function Zt(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xu:Jy,this.isPropagationStopped=Jy,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xu)},persist:function(){},isPersistent:xu}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pm=Zt(Co),Fl=De({},Co,{view:0,detail:0}),L1=Zt(Fl),Wd,Kd,la,Th=De({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==la&&(la&&n.type==="mousemove"?(Wd=n.screenX-la.screenX,Kd=n.screenY-la.screenY):Kd=Wd=0,la=n),Wd)},movementY:function(n){return"movementY"in n?n.movementY:Kd}}),Xy=Zt(Th),M1=De({},Th,{dataTransfer:0}),F1=Zt(M1),U1=De({},Fl,{relatedTarget:0}),Hd=Zt(U1),B1=De({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=Zt(B1),$1=De({},Co,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),j1=Zt($1),q1=De({},Co,{data:0}),Zy=Zt(q1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=K1[n])?!!e[n]:!1}function Rm(){return H1}var Q1=De({},Fl,{key:function(n){if(n.key){var e=G1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?W1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rm,charCode:function(n){return n.type==="keypress"?tc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Y1=Zt(Q1),J1=De({},Th,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ev=Zt(J1),X1=De({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rm}),Z1=Zt(X1),ek=De({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),tk=Zt(ek),nk=De({},Th,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rk=Zt(nk),ik=[9,13,27,32],km=sr&&"CompositionEvent"in window,xa=null;sr&&"documentMode"in document&&(xa=document.documentMode);var sk=sr&&"TextEvent"in window&&!xa,OE=sr&&(!km||xa&&8<xa&&11>=xa),tv=" ",nv=!1;function LE(n,e){switch(n){case"keyup":return ik.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ME(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function ok(n,e){switch(n){case"compositionend":return ME(e);case"keypress":return e.which!==32?null:(nv=!0,tv);case"textInput":return n=e.data,n===tv&&nv?null:n;default:return null}}function ak(n,e){if(bs)return n==="compositionend"||!km&&LE(n,e)?(n=VE(),ec=Am=xr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return OE&&e.locale!=="ko"?null:e.data;default:return null}}var lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lk[n.type]:e==="textarea"}function FE(n,e,t,r){mE(r),e=Dc(e,"onChange"),0<e.length&&(t=new Pm("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Va=null,rl=null;function uk(n){QE(n,0)}function Sh(n){var e=Vs(n);if(lE(e))return n}function ck(n,e){if(n==="change")return e}var UE=!1;if(sr){var Qd;if(sr){var Yd="oninput"in document;if(!Yd){var iv=document.createElement("div");iv.setAttribute("oninput","return;"),Yd=typeof iv.oninput=="function"}Qd=Yd}else Qd=!1;UE=Qd&&(!document.documentMode||9<document.documentMode)}function sv(){Va&&(Va.detachEvent("onpropertychange",BE),rl=Va=null)}function BE(n){if(n.propertyName==="value"&&Sh(rl)){var e=[];FE(e,rl,n,wm(n)),vE(uk,e)}}function hk(n,e,t){n==="focusin"?(sv(),Va=e,rl=t,Va.attachEvent("onpropertychange",BE)):n==="focusout"&&sv()}function dk(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sh(rl)}function fk(n,e){if(n==="click")return Sh(e)}function pk(n,e){if(n==="input"||n==="change")return Sh(e)}function mk(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var vn=typeof Object.is=="function"?Object.is:mk;function il(n,e){if(vn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Df.call(e,i)||!vn(n[i],e[i]))return!1}return!0}function ov(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function av(n,e){var t=ov(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ov(t)}}function zE(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zE(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $E(){for(var n=window,e=Ac();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ac(n.document)}return e}function Cm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gk(n){var e=$E(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zE(t.ownerDocument.documentElement,t)){if(r!==null&&Cm(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=av(t,s);var o=av(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _k=sr&&"documentMode"in document&&11>=document.documentMode,Ds=null,Jf=null,Oa=null,Xf=!1;function lv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xf||Ds==null||Ds!==Ac(r)||(r=Ds,"selectionStart"in r&&Cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&il(Oa,r)||(Oa=r,r=Dc(Jf,"onSelect"),0<r.length&&(e=new Pm("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Ds)))}function Vu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var xs={animationend:Vu("Animation","AnimationEnd"),animationiteration:Vu("Animation","AnimationIteration"),animationstart:Vu("Animation","AnimationStart"),transitionend:Vu("Transition","TransitionEnd")},Jd={},jE={};sr&&(jE=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ah(n){if(Jd[n])return Jd[n];if(!xs[n])return n;var e=xs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in jE)return Jd[n]=e[t];return n}var qE=Ah("animationend"),GE=Ah("animationiteration"),WE=Ah("animationstart"),KE=Ah("transitionend"),HE=new Map,uv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(n,e){HE.set(n,e),os(e,[n])}for(var Xd=0;Xd<uv.length;Xd++){var Zd=uv[Xd],yk=Zd.toLowerCase(),vk=Zd[0].toUpperCase()+Zd.slice(1);oi(yk,"on"+vk)}oi(qE,"onAnimationEnd");oi(GE,"onAnimationIteration");oi(WE,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(KE,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function cv(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,y1(r,e,void 0,n),n.currentTarget=null}function QE(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;cv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;cv(i,a,c),s=u}}}if(Rc)throw n=Kf,Rc=!1,Kf=null,n}function Ie(n,e){var t=e[rp];t===void 0&&(t=e[rp]=new Set);var r=n+"__bubble";t.has(r)||(YE(e,n,2,!1),t.add(r))}function ef(n,e,t){var r=0;e&&(r|=4),YE(t,n,r,e)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function sl(n){if(!n[Ou]){n[Ou]=!0,rE.forEach(function(t){t!=="selectionchange"&&(wk.has(t)||ef(t,!1,n),ef(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ou]||(e[Ou]=!0,ef("selectionchange",!1,e))}}function YE(n,e,t,r){switch(xE(e)){case 1:var i=V1;break;case 4:i=O1;break;default:i=Sm}t=i.bind(null,e,t,n),i=void 0,!Wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function tf(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vE(function(){var c=s,d=wm(t),p=[];e:{var m=HE.get(n);if(m!==void 0){var I=Pm,R=n;switch(n){case"keypress":if(tc(t)===0)break e;case"keydown":case"keyup":I=Y1;break;case"focusin":R="focus",I=Hd;break;case"focusout":R="blur",I=Hd;break;case"beforeblur":case"afterblur":I=Hd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Z1;break;case qE:case GE:case WE:I=z1;break;case KE:I=tk;break;case"scroll":I=L1;break;case"wheel":I=rk;break;case"copy":case"cut":case"paste":I=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=ev}var C=(e&4)!==0,O=!C&&n==="scroll",T=C?m!==null?m+"Capture":null:m;C=[];for(var y=c,A;y!==null;){A=y;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,T!==null&&(V=Za(y,T),V!=null&&C.push(ol(y,V,A)))),O)break;y=y.return}0<C.length&&(m=new I(m,R,null,t,d),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",I=n==="mouseout"||n==="pointerout",m&&t!==qf&&(R=t.relatedTarget||t.fromElement)&&(Ni(R)||R[or]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(R=t.relatedTarget||t.toElement,I=c,R=R?Ni(R):null,R!==null&&(O=as(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=c),I!==R)){if(C=Xy,V="onMouseLeave",T="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(C=ev,V="onPointerLeave",T="onPointerEnter",y="pointer"),O=I==null?m:Vs(I),A=R==null?m:Vs(R),m=new C(V,y+"leave",I,t,d),m.target=O,m.relatedTarget=A,V=null,Ni(d)===c&&(C=new C(T,y+"enter",R,t,d),C.target=A,C.relatedTarget=O,V=C),O=V,I&&R)t:{for(C=I,T=R,y=0,A=C;A;A=ys(A))y++;for(A=0,V=T;V;V=ys(V))A++;for(;0<y-A;)C=ys(C),y--;for(;0<A-y;)T=ys(T),A--;for(;y--;){if(C===T||T!==null&&C===T.alternate)break t;C=ys(C),T=ys(T)}C=null}else C=null;I!==null&&hv(p,m,I,C,!1),R!==null&&O!==null&&hv(p,O,R,C,!0)}}e:{if(m=c?Vs(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var U=ck;else if(rv(m))if(UE)U=pk;else{U=dk;var F=hk}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=fk);if(U&&(U=U(n,c))){FE(p,U,t,d);break e}F&&F(n,m,c),n==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Uf(m,"number",m.value)}switch(F=c?Vs(c):window,n){case"focusin":(rv(F)||F.contentEditable==="true")&&(Ds=F,Jf=c,Oa=null);break;case"focusout":Oa=Jf=Ds=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,lv(p,t,d);break;case"selectionchange":if(_k)break;case"keydown":case"keyup":lv(p,t,d)}var v;if(km)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else bs?LE(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(OE&&t.locale!=="ko"&&(bs||_!=="onCompositionStart"?_==="onCompositionEnd"&&bs&&(v=VE()):(xr=d,Am="value"in xr?xr.value:xr.textContent,bs=!0)),F=Dc(c,_),0<F.length&&(_=new Zy(_,n,null,t,d),p.push({event:_,listeners:F}),v?_.data=v:(v=ME(t),v!==null&&(_.data=v)))),(v=sk?ok(n,t):ak(n,t))&&(c=Dc(c,"onBeforeInput"),0<c.length&&(d=new Zy("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:c}),d.data=v))}QE(p,e)})}function ol(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Dc(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Za(n,t),s!=null&&r.unshift(ol(n,s,i)),s=Za(n,e),s!=null&&r.push(ol(n,s,i))),n=n.return}return r}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hv(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Za(t,s),u!=null&&o.unshift(ol(t,u,a))):i||(u=Za(t,s),u!=null&&o.push(ol(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ik=/\r\n?/g,Ek=/\u0000|\uFFFD/g;function dv(n){return(typeof n=="string"?n:""+n).replace(Ik,`
`).replace(Ek,"")}function Lu(n,e,t){if(e=dv(e),dv(n)!==e&&t)throw Error(B(425))}function xc(){}var Zf=null,ep=null;function tp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var np=typeof setTimeout=="function"?setTimeout:void 0,Tk=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,Sk=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(n){return fv.resolve(null).then(n).catch(Ak)}:np;function Ak(n){setTimeout(function(){throw n})}function nf(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),nl(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);nl(e)}function zr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var No=Math.random().toString(36).slice(2),An="__reactFiber$"+No,al="__reactProps$"+No,or="__reactContainer$"+No,rp="__reactEvents$"+No,Pk="__reactListeners$"+No,Rk="__reactHandles$"+No;function Ni(n){var e=n[An];if(e)return e;for(var t=n.parentNode;t;){if(e=t[or]||t[An]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=pv(n);n!==null;){if(t=n[An])return t;n=pv(n)}return e}n=t,t=n.parentNode}return null}function Ul(n){return n=n[An]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(B(33))}function Ph(n){return n[al]||null}var ip=[],Os=-1;function ai(n){return{current:n}}function Te(n){0>Os||(n.current=ip[Os],ip[Os]=null,Os--)}function ye(n,e){Os++,ip[Os]=n.current,n.current=e}var Qr={},It=ai(Qr),Bt=ai(!1),$i=Qr;function ro(n,e){var t=n.type.contextTypes;if(!t)return Qr;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function zt(n){return n=n.childContextTypes,n!=null}function Vc(){Te(Bt),Te(It)}function mv(n,e,t){if(It.current!==Qr)throw Error(B(168));ye(It,e),ye(Bt,t)}function JE(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,h1(n)||"Unknown",i));return De({},t,r)}function Oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,$i=It.current,ye(It,n),ye(Bt,Bt.current),!0}function gv(n,e,t){var r=n.stateNode;if(!r)throw Error(B(169));t?(n=JE(n,e,$i),r.__reactInternalMemoizedMergedChildContext=n,Te(Bt),Te(It),ye(It,n)):Te(Bt),ye(Bt,t)}var Jn=null,Rh=!1,rf=!1;function XE(n){Jn===null?Jn=[n]:Jn.push(n)}function kk(n){Rh=!0,XE(n)}function li(){if(!rf&&Jn!==null){rf=!0;var n=0,e=fe;try{var t=Jn;for(fe=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Jn=null,Rh=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(n+1)),TE(Im,li),i}finally{fe=e,rf=!1}}return null}var Ls=[],Ms=0,Lc=null,Mc=0,tn=[],nn=0,ji=null,Xn=1,Zn="";function Ii(n,e){Ls[Ms++]=Mc,Ls[Ms++]=Lc,Lc=n,Mc=e}function ZE(n,e,t){tn[nn++]=Xn,tn[nn++]=Zn,tn[nn++]=ji,ji=n;var r=Xn;n=Zn;var i=32-_n(r)-1;r&=~(1<<i),t+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-_n(e)+i|t<<i|r,Zn=s+n}else Xn=1<<s|t<<i|r,Zn=n}function Nm(n){n.return!==null&&(Ii(n,1),ZE(n,1,0))}function bm(n){for(;n===Lc;)Lc=Ls[--Ms],Ls[Ms]=null,Mc=Ls[--Ms],Ls[Ms]=null;for(;n===ji;)ji=tn[--nn],tn[nn]=null,Zn=tn[--nn],tn[nn]=null,Xn=tn[--nn],tn[nn]=null}var Ht=null,Wt=null,Se=!1,gn=null;function eT(n,e){var t=rn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _v(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ht=n,Wt=zr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ht=n,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ji!==null?{id:Xn,overflow:Zn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=rn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ht=n,Wt=null,!0):!1;default:return!1}}function sp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function op(n){if(Se){var e=Wt;if(e){var t=e;if(!_v(n,e)){if(sp(n))throw Error(B(418));e=zr(t.nextSibling);var r=Ht;e&&_v(n,e)?eT(r,t):(n.flags=n.flags&-4097|2,Se=!1,Ht=n)}}else{if(sp(n))throw Error(B(418));n.flags=n.flags&-4097|2,Se=!1,Ht=n}}}function yv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ht=n}function Mu(n){if(n!==Ht)return!1;if(!Se)return yv(n),Se=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!tp(n.type,n.memoizedProps)),e&&(e=Wt)){if(sp(n))throw tT(),Error(B(418));for(;e;)eT(n,e),e=zr(e.nextSibling)}if(yv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(B(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Wt=zr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Wt=null}}else Wt=Ht?zr(n.stateNode.nextSibling):null;return!0}function tT(){for(var n=Wt;n;)n=zr(n.nextSibling)}function io(){Wt=Ht=null,Se=!1}function Dm(n){gn===null?gn=[n]:gn.push(n)}var Ck=dr.ReactCurrentBatchConfig;function ua(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,n))}return n}function Fu(n,e){throw n=Object.prototype.toString.call(e),Error(B(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function vv(n){var e=n._init;return e(n._payload)}function nT(n){function e(T,y){if(n){var A=T.deletions;A===null?(T.deletions=[y],T.flags|=16):A.push(y)}}function t(T,y){if(!n)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=Gr(T,y),T.index=0,T.sibling=null,T}function s(T,y,A){return T.index=A,n?(A=T.alternate,A!==null?(A=A.index,A<y?(T.flags|=2,y):A):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return n&&T.alternate===null&&(T.flags|=2),T}function a(T,y,A,V){return y===null||y.tag!==6?(y=hf(A,T.mode,V),y.return=T,y):(y=i(y,A),y.return=T,y)}function u(T,y,A,V){var U=A.type;return U===Ns?d(T,y,A.props.children,V,A.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Rr&&vv(U)===y.type)?(V=i(y,A.props),V.ref=ua(T,y,A),V.return=T,V):(V=lc(A.type,A.key,A.props,null,T.mode,V),V.ref=ua(T,y,A),V.return=T,V)}function c(T,y,A,V){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=df(A,T.mode,V),y.return=T,y):(y=i(y,A.children||[]),y.return=T,y)}function d(T,y,A,V,U){return y===null||y.tag!==7?(y=Fi(A,T.mode,V,U),y.return=T,y):(y=i(y,A),y.return=T,y)}function p(T,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return y=hf(""+y,T.mode,A),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ru:return A=lc(y.type,y.key,y.props,null,T.mode,A),A.ref=ua(T,null,y),A.return=T,A;case Cs:return y=df(y,T.mode,A),y.return=T,y;case Rr:var V=y._init;return p(T,V(y._payload),A)}if(Ia(y)||ia(y))return y=Fi(y,T.mode,A,null),y.return=T,y;Fu(T,y)}return null}function m(T,y,A,V){var U=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:a(T,y,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ru:return A.key===U?u(T,y,A,V):null;case Cs:return A.key===U?c(T,y,A,V):null;case Rr:return U=A._init,m(T,y,U(A._payload),V)}if(Ia(A)||ia(A))return U!==null?null:d(T,y,A,V,null);Fu(T,A)}return null}function I(T,y,A,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return T=T.get(A)||null,a(y,T,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ru:return T=T.get(V.key===null?A:V.key)||null,u(y,T,V,U);case Cs:return T=T.get(V.key===null?A:V.key)||null,c(y,T,V,U);case Rr:var F=V._init;return I(T,y,A,F(V._payload),U)}if(Ia(V)||ia(V))return T=T.get(A)||null,d(y,T,V,U,null);Fu(y,V)}return null}function R(T,y,A,V){for(var U=null,F=null,v=y,_=y=0,w=null;v!==null&&_<A.length;_++){v.index>_?(w=v,v=null):w=v.sibling;var E=m(T,v,A[_],V);if(E===null){v===null&&(v=w);break}n&&v&&E.alternate===null&&e(T,v),y=s(E,y,_),F===null?U=E:F.sibling=E,F=E,v=w}if(_===A.length)return t(T,v),Se&&Ii(T,_),U;if(v===null){for(;_<A.length;_++)v=p(T,A[_],V),v!==null&&(y=s(v,y,_),F===null?U=v:F.sibling=v,F=v);return Se&&Ii(T,_),U}for(v=r(T,v);_<A.length;_++)w=I(v,T,_,A[_],V),w!==null&&(n&&w.alternate!==null&&v.delete(w.key===null?_:w.key),y=s(w,y,_),F===null?U=w:F.sibling=w,F=w);return n&&v.forEach(function(P){return e(T,P)}),Se&&Ii(T,_),U}function C(T,y,A,V){var U=ia(A);if(typeof U!="function")throw Error(B(150));if(A=U.call(A),A==null)throw Error(B(151));for(var F=U=null,v=y,_=y=0,w=null,E=A.next();v!==null&&!E.done;_++,E=A.next()){v.index>_?(w=v,v=null):w=v.sibling;var P=m(T,v,E.value,V);if(P===null){v===null&&(v=w);break}n&&v&&P.alternate===null&&e(T,v),y=s(P,y,_),F===null?U=P:F.sibling=P,F=P,v=w}if(E.done)return t(T,v),Se&&Ii(T,_),U;if(v===null){for(;!E.done;_++,E=A.next())E=p(T,E.value,V),E!==null&&(y=s(E,y,_),F===null?U=E:F.sibling=E,F=E);return Se&&Ii(T,_),U}for(v=r(T,v);!E.done;_++,E=A.next())E=I(v,T,_,E.value,V),E!==null&&(n&&E.alternate!==null&&v.delete(E.key===null?_:E.key),y=s(E,y,_),F===null?U=E:F.sibling=E,F=E);return n&&v.forEach(function(N){return e(T,N)}),Se&&Ii(T,_),U}function O(T,y,A,V){if(typeof A=="object"&&A!==null&&A.type===Ns&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ru:e:{for(var U=A.key,F=y;F!==null;){if(F.key===U){if(U=A.type,U===Ns){if(F.tag===7){t(T,F.sibling),y=i(F,A.props.children),y.return=T,T=y;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Rr&&vv(U)===F.type){t(T,F.sibling),y=i(F,A.props),y.ref=ua(T,F,A),y.return=T,T=y;break e}t(T,F);break}else e(T,F);F=F.sibling}A.type===Ns?(y=Fi(A.props.children,T.mode,V,A.key),y.return=T,T=y):(V=lc(A.type,A.key,A.props,null,T.mode,V),V.ref=ua(T,y,A),V.return=T,T=V)}return o(T);case Cs:e:{for(F=A.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){t(T,y.sibling),y=i(y,A.children||[]),y.return=T,T=y;break e}else{t(T,y);break}else e(T,y);y=y.sibling}y=df(A,T.mode,V),y.return=T,T=y}return o(T);case Rr:return F=A._init,O(T,y,F(A._payload),V)}if(Ia(A))return R(T,y,A,V);if(ia(A))return C(T,y,A,V);Fu(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,y!==null&&y.tag===6?(t(T,y.sibling),y=i(y,A),y.return=T,T=y):(t(T,y),y=hf(A,T.mode,V),y.return=T,T=y),o(T)):t(T,y)}return O}var so=nT(!0),rT=nT(!1),Fc=ai(null),Uc=null,Fs=null,xm=null;function Vm(){xm=Fs=Uc=null}function Om(n){var e=Fc.current;Te(Fc),n._currentValue=e}function ap(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Hs(n,e){Uc=n,xm=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Lt=!0),n.firstContext=null)}function ln(n){var e=n._currentValue;if(xm!==n)if(n={context:n,memoizedValue:e,next:null},Fs===null){if(Uc===null)throw Error(B(308));Fs=n,Uc.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return e}var bi=null;function Lm(n){bi===null?bi=[n]:bi.push(n)}function iT(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,Lm(e)):(t.next=i.next,i.next=t),e.interleaved=t,ar(n,r)}function ar(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var kr=!1;function Mm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sT(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(n,t)}return i=r.interleaved,i===null?(e.next=e,Lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(n,t)}function nc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Em(n,t)}}function wv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bc(n,e,t,r){var i=n.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,I=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=n,C=a;switch(m=e,I=t,C.tag){case 1:if(R=C.payload,typeof R=="function"){p=R.call(I,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=C.payload,m=typeof R=="function"?R.call(I,p,m):R,m==null)break e;p=De({},p,m);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else I={eventTime:I,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gi|=o,n.lanes=o,n.memoizedState=p}}function Iv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Bl={},Vn=ai(Bl),ll=ai(Bl),ul=ai(Bl);function Di(n){if(n===Bl)throw Error(B(174));return n}function Fm(n,e){switch(ye(ul,e),ye(ll,n),ye(Vn,Bl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=zf(e,n)}Te(Vn),ye(Vn,e)}function oo(){Te(Vn),Te(ll),Te(ul)}function oT(n){Di(ul.current);var e=Di(Vn.current),t=zf(e,n.type);e!==t&&(ye(ll,n),ye(Vn,t))}function Um(n){ll.current===n&&(Te(Vn),Te(ll))}var Ce=ai(0);function zc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sf=[];function Bm(){for(var n=0;n<sf.length;n++)sf[n]._workInProgressVersionPrimary=null;sf.length=0}var rc=dr.ReactCurrentDispatcher,of=dr.ReactCurrentBatchConfig,qi=0,Ne=null,He=null,Ze=null,$c=!1,La=!1,cl=0,Nk=0;function _t(){throw Error(B(321))}function zm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!vn(n[t],e[t]))return!1;return!0}function $m(n,e,t,r,i,s){if(qi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rc.current=n===null||n.memoizedState===null?Vk:Ok,n=t(r,i),La){s=0;do{if(La=!1,cl=0,25<=s)throw Error(B(301));s+=1,Ze=He=null,e.updateQueue=null,rc.current=Lk,n=t(r,i)}while(La)}if(rc.current=jc,e=He!==null&&He.next!==null,qi=0,Ze=He=Ne=null,$c=!1,e)throw Error(B(300));return n}function jm(){var n=cl!==0;return cl=0,n}function Sn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ne.memoizedState=Ze=n:Ze=Ze.next=n,Ze}function un(){if(He===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=He.next;var e=Ze===null?Ne.memoizedState:Ze.next;if(e!==null)Ze=e,He=n;else{if(n===null)throw Error(B(310));He=n,n={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ze===null?Ne.memoizedState=Ze=n:Ze=Ze.next=n}return Ze}function hl(n,e){return typeof e=="function"?e(n):e}function af(n){var e=un(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=He,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((qi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Ne.lanes|=d,Gi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,vn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,Ne.lanes|=s,Gi|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function lf(n){var e=un(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function aT(){}function lT(n,e){var t=Ne,r=un(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,qm(hT.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(t.flags|=2048,dl(9,cT.bind(null,t,r,i,e),void 0,null),tt===null)throw Error(B(349));qi&30||uT(t,e,i)}return i}function uT(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cT(n,e,t,r){e.value=t,e.getSnapshot=r,dT(e)&&fT(n)}function hT(n,e,t){return t(function(){dT(e)&&fT(n)})}function dT(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!vn(n,t)}catch{return!0}}function fT(n){var e=ar(n,1);e!==null&&yn(e,n,1,-1)}function Ev(n){var e=Sn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:n},e.queue=n,n=n.dispatch=xk.bind(null,Ne,n),[e.memoizedState,n]}function dl(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function pT(){return un().memoizedState}function ic(n,e,t,r){var i=Sn();Ne.flags|=n,i.memoizedState=dl(1|e,t,void 0,r===void 0?null:r)}function kh(n,e,t,r){var i=un();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&zm(r,o.deps)){i.memoizedState=dl(e,t,s,r);return}}Ne.flags|=n,i.memoizedState=dl(1|e,t,s,r)}function Tv(n,e){return ic(8390656,8,n,e)}function qm(n,e){return kh(2048,8,n,e)}function mT(n,e){return kh(4,2,n,e)}function gT(n,e){return kh(4,4,n,e)}function _T(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function yT(n,e,t){return t=t!=null?t.concat([n]):null,kh(4,4,_T.bind(null,e,n),t)}function Gm(){}function vT(n,e){var t=un();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function wT(n,e){var t=un();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function IT(n,e,t){return qi&21?(vn(t,e)||(t=PE(),Ne.lanes|=t,Gi|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Lt=!0),n.memoizedState=t)}function bk(n,e){var t=fe;fe=t!==0&&4>t?t:4,n(!0);var r=of.transition;of.transition={};try{n(!1),e()}finally{fe=t,of.transition=r}}function ET(){return un().memoizedState}function Dk(n,e,t){var r=qr(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},TT(n))ST(e,t);else if(t=iT(n,e,t,r),t!==null){var i=Rt();yn(t,n,r,i),AT(t,e,r)}}function xk(n,e,t){var r=qr(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(TT(n))ST(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var u=e.interleaved;u===null?(i.next=i,Lm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=iT(n,e,i,r),t!==null&&(i=Rt(),yn(t,n,r,i),AT(t,e,r))}}function TT(n){var e=n.alternate;return n===Ne||e!==null&&e===Ne}function ST(n,e){La=$c=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function AT(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Em(n,t)}}var jc={readContext:ln,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Vk={readContext:ln,useCallback:function(n,e){return Sn().memoizedState=[n,e===void 0?null:e],n},useContext:ln,useEffect:Tv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ic(4194308,4,_T.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ic(4194308,4,n,e)},useInsertionEffect:function(n,e){return ic(4,2,n,e)},useMemo:function(n,e){var t=Sn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Sn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=Dk.bind(null,Ne,n),[r.memoizedState,n]},useRef:function(n){var e=Sn();return n={current:n},e.memoizedState=n},useState:Ev,useDebugValue:Gm,useDeferredValue:function(n){return Sn().memoizedState=n},useTransition:function(){var n=Ev(!1),e=n[0];return n=bk.bind(null,n[1]),Sn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Ne,i=Sn();if(Se){if(t===void 0)throw Error(B(407));t=t()}else{if(t=e(),tt===null)throw Error(B(349));qi&30||uT(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Tv(hT.bind(null,r,s,n),[n]),r.flags|=2048,dl(9,cT.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Sn(),e=tt.identifierPrefix;if(Se){var t=Zn,r=Xn;t=(r&~(1<<32-_n(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=cl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Nk++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ok={readContext:ln,useCallback:vT,useContext:ln,useEffect:qm,useImperativeHandle:yT,useInsertionEffect:mT,useLayoutEffect:gT,useMemo:wT,useReducer:af,useRef:pT,useState:function(){return af(hl)},useDebugValue:Gm,useDeferredValue:function(n){var e=un();return IT(e,He.memoizedState,n)},useTransition:function(){var n=af(hl)[0],e=un().memoizedState;return[n,e]},useMutableSource:aT,useSyncExternalStore:lT,useId:ET,unstable_isNewReconciler:!1},Lk={readContext:ln,useCallback:vT,useContext:ln,useEffect:qm,useImperativeHandle:yT,useInsertionEffect:mT,useLayoutEffect:gT,useMemo:wT,useReducer:lf,useRef:pT,useState:function(){return lf(hl)},useDebugValue:Gm,useDeferredValue:function(n){var e=un();return He===null?e.memoizedState=n:IT(e,He.memoizedState,n)},useTransition:function(){var n=lf(hl)[0],e=un().memoizedState;return[n,e]},useMutableSource:aT,useSyncExternalStore:lT,useId:ET,unstable_isNewReconciler:!1};function pn(n,e){if(n&&n.defaultProps){e=De({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function lp(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:De({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ch={isMounted:function(n){return(n=n._reactInternals)?as(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Rt(),i=qr(n),s=rr(r,i);s.payload=e,t!=null&&(s.callback=t),e=$r(n,s,i),e!==null&&(yn(e,n,i,r),nc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Rt(),i=qr(n),s=rr(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=$r(n,s,i),e!==null&&(yn(e,n,i,r),nc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Rt(),r=qr(n),i=rr(t,r);i.tag=2,e!=null&&(i.callback=e),e=$r(n,i,r),e!==null&&(yn(e,n,r,t),nc(e,n,r))}};function Sv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!il(t,r)||!il(i,s):!0}function PT(n,e,t){var r=!1,i=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=zt(e)?$i:It.current,r=e.contextTypes,s=(r=r!=null)?ro(n,i):Qr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ch,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function Av(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Ch.enqueueReplaceState(e,e.state,null)}function up(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},Mm(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=zt(e)?$i:It.current,i.context=ro(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lp(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ch.enqueueReplaceState(i,i.state,null),Bc(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function ao(n,e){try{var t="",r=e;do t+=c1(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function uf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function cp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Mk=typeof WeakMap=="function"?WeakMap:Map;function RT(n,e,t){t=rr(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Gc||(Gc=!0,wp=r),cp(n,e)},t}function kT(n,e,t){t=rr(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){cp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){cp(n,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Pv(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Mk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=Jk.bind(null,n,e,t),e.then(n,n))}function Rv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function kv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=rr(-1,1),e.tag=2,$r(t,e,1))),t.lanes|=1),n)}var Fk=dr.ReactCurrentOwner,Lt=!1;function St(n,e,t,r){e.child=n===null?rT(e,null,t,r):so(e,n.child,t,r)}function Cv(n,e,t,r,i){t=t.render;var s=e.ref;return Hs(e,i),r=$m(n,e,t,r,s,i),t=jm(),n!==null&&!Lt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,lr(n,e,i)):(Se&&t&&Nm(e),e.flags|=1,St(n,e,r,i),e.child)}function Nv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!Zm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,CT(n,e,s,r,i)):(n=lc(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:il,t(o,r)&&n.ref===e.ref)return lr(n,e,i)}return e.flags|=1,n=Gr(s,r),n.ref=e.ref,n.return=e,e.child=n}function CT(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(il(s,r)&&n.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Lt=!0);else return e.lanes=n.lanes,lr(n,e,i)}return hp(n,e,t,r,i)}function NT(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Bs,qt),qt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ye(Bs,qt),qt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,ye(Bs,qt),qt|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,ye(Bs,qt),qt|=r;return St(n,e,i,t),e.child}function bT(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function hp(n,e,t,r,i){var s=zt(t)?$i:It.current;return s=ro(e,s),Hs(e,i),t=$m(n,e,t,r,s,i),r=jm(),n!==null&&!Lt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,lr(n,e,i)):(Se&&r&&Nm(e),e.flags|=1,St(n,e,t,i),e.child)}function bv(n,e,t,r,i){if(zt(t)){var s=!0;Oc(e)}else s=!1;if(Hs(e,i),e.stateNode===null)sc(n,e),PT(e,t,r),up(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=zt(t)?$i:It.current,c=ro(e,c));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Av(e,o,r,c),kr=!1;var m=e.memoizedState;o.state=m,Bc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Bt.current||kr?(typeof d=="function"&&(lp(e,t,d,r),u=e.memoizedState),(a=kr||Sv(e,t,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sT(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:pn(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=zt(t)?$i:It.current,u=ro(e,u));var I=t.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Av(e,o,r,u),kr=!1,m=e.memoizedState,o.state=m,Bc(e,r,o,i);var R=e.memoizedState;a!==p||m!==R||Bt.current||kr?(typeof I=="function"&&(lp(e,t,I,r),R=e.memoizedState),(c=kr||Sv(e,t,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return dp(n,e,t,r,s,i)}function dp(n,e,t,r,i,s){bT(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gv(e,t,!1),lr(n,e,s);r=e.stateNode,Fk.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=so(e,n.child,null,s),e.child=so(e,null,a,s)):St(n,e,a,s),e.memoizedState=r.state,i&&gv(e,t,!0),e.child}function DT(n){var e=n.stateNode;e.pendingContext?mv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&mv(n,e.context,!1),Fm(n,e.containerInfo)}function Dv(n,e,t,r,i){return io(),Dm(i),e.flags|=256,St(n,e,t,r),e.child}var fp={dehydrated:null,treeContext:null,retryLane:0};function pp(n){return{baseLanes:n,cachePool:null,transitions:null}}function xT(n,e,t){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),ye(Ce,i&1),n===null)return op(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dh(o,r,0,null),n=Fi(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=pp(t),e.memoizedState=fp,n):Wm(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Uk(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Fi(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?pp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=fp,r}return s=n.child,n=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Wm(n,e){return e=Dh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Uu(n,e,t,r){return r!==null&&Dm(r),so(e,n.child,null,t),n=Wm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Uk(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=uf(Error(B(422))),Uu(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),s=Fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&so(e,n.child,null,o),e.child.memoizedState=pp(o),e.memoizedState=fp,s);if(!(e.mode&1))return Uu(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=uf(s,r,void 0),Uu(n,e,o,r)}if(a=(o&n.childLanes)!==0,Lt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(n,i),yn(r,n,i,-1))}return Xm(),r=uf(Error(B(421))),Uu(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=Xk.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,Wt=zr(i.nextSibling),Ht=e,Se=!0,gn=null,n!==null&&(tn[nn++]=Xn,tn[nn++]=Zn,tn[nn++]=ji,Xn=n.id,Zn=n.overflow,ji=e),e=Wm(e,r.children),e.flags|=4096,e)}function xv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),ap(n.return,e,t)}function cf(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function VT(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(n,e,r.children,t),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xv(n,t,e);else if(n.tag===19)xv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(ye(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&zc(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),cf(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&zc(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}cf(e,!0,t,null,s);break;case"together":cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function lr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Gi|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(B(153));if(e.child!==null){for(n=e.child,t=Gr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Gr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Bk(n,e,t){switch(e.tag){case 3:DT(e),io();break;case 5:oT(e);break;case 1:zt(e.type)&&Oc(e);break;case 4:Fm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Fc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),e.flags|=128,null):t&e.child.childLanes?xT(n,e,t):(ye(Ce,Ce.current&1),n=lr(n,e,t),n!==null?n.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return VT(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,NT(n,e,t)}return lr(n,e,t)}var OT,mp,LT,MT;OT=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};mp=function(){};LT=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,Di(Vn.current);var s=null;switch(t){case"input":i=Mf(n,i),r=Mf(n,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Bf(n,i),r=Bf(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=xc)}$f(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};MT=function(n,e,t,r){t!==r&&(e.flags|=4)};function ca(n,e){if(!Se)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function zk(n,e,t){var r=e.pendingProps;switch(bm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return zt(e.type)&&Vc(),yt(e),null;case 3:return r=e.stateNode,oo(),Te(Bt),Te(It),Bm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Mu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(Tp(gn),gn=null))),mp(n,e),yt(e),null;case 5:Um(e);var i=Di(ul.current);if(t=e.type,n!==null&&e.stateNode!=null)LT(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return yt(e),null}if(n=Di(Vn.current),Mu(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[An]=e,r[al]=s,n=(e.mode&1)!==0,t){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ta.length;i++)Ie(Ta[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":$y(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":qy(r,s),Ie("invalid",r)}$f(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Lu(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Lu(r.textContent,a,n),i=["children",""+a]):Ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(t){case"input":ku(r),jy(r,s,!0);break;case"textarea":ku(r),Gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=hE(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[An]=e,n[al]=r,OT(n,e,!1,!1),e.stateNode=n;e:{switch(o=jf(t,r),t){case"dialog":Ie("cancel",n),Ie("close",n),i=r;break;case"iframe":case"object":case"embed":Ie("load",n),i=r;break;case"video":case"audio":for(i=0;i<Ta.length;i++)Ie(Ta[i],n);i=r;break;case"source":Ie("error",n),i=r;break;case"img":case"image":case"link":Ie("error",n),Ie("load",n),i=r;break;case"details":Ie("toggle",n),i=r;break;case"input":$y(n,r),i=Mf(n,r),Ie("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ie("invalid",n);break;case"textarea":qy(n,r),i=Bf(n,r),Ie("invalid",n);break;default:i=r}$f(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?pE(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dE(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Xa(n,u):typeof u=="number"&&Xa(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",n):u!=null&&gm(n,s,u,o))}switch(t){case"input":ku(n),jy(n,r,!1);break;case"textarea":ku(n),Gy(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Hr(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?qs(n,!!r.multiple,s,!1):r.defaultValue!=null&&qs(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=xc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(n&&e.stateNode!=null)MT(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(t=Di(ul.current),Di(Vn.current),Mu(e)){if(r=e.stateNode,t=e.memoizedProps,r[An]=e,(s=r.nodeValue!==t)&&(n=Ht,n!==null))switch(n.tag){case 3:Lu(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lu(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return yt(e),null;case 13:if(Te(Ce),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Se&&Wt!==null&&e.mode&1&&!(e.flags&128))tT(),io(),e.flags|=98560,s=!1;else if(s=Mu(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[An]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else gn!==null&&(Tp(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Ce.current&1?Qe===0&&(Qe=3):Xm())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return oo(),mp(n,e),n===null&&sl(e.stateNode.containerInfo),yt(e),null;case 10:return Om(e.type._context),yt(e),null;case 17:return zt(e.type)&&Vc(),yt(e),null;case 19:if(Te(Ce),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ca(s,!1);else{if(Qe!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=zc(n),o!==null){for(e.flags|=128,ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ye(Ce,Ce.current&1|2),e.child}n=n.sibling}s.tail!==null&&ze()>lo&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304)}else{if(!r)if(n=zc(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return yt(e),null}else 2*ze()-s.renderingStartTime>lo&&t!==1073741824&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,t=Ce.current,ye(Ce,r?t&1|2:t&1),e):(yt(e),null);case 22:case 23:return Jm(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function $k(n,e){switch(bm(e),e.tag){case 1:return zt(e.type)&&Vc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return oo(),Te(Bt),Te(It),Bm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Um(e),null;case 13:if(Te(Ce),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(B(340));io()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Te(Ce),null;case 4:return oo(),null;case 10:return Om(e.type._context),null;case 22:case 23:return Jm(),null;case 24:return null;default:return null}}var Bu=!1,wt=!1,jk=typeof WeakSet=="function"?WeakSet:Set,K=null;function Us(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ve(n,e,r)}else t.current=null}function gp(n,e,t){try{t()}catch(r){Ve(n,e,r)}}var Vv=!1;function qk(n,e){if(Zf=Nc,n=$E(),Cm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=n,m=null;t:for(;;){for(var I;p!==t||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(ep={focusedElem:n,selectionRange:t},Nc=!1,K=e;K!==null;)if(e=K,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,K=n;else for(;K!==null;){e=K;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var C=R.memoizedProps,O=R.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:pn(e.type,C),O);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){Ve(e,e.return,V)}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}return R=Vv,Vv=!1,R}function Ma(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&gp(e,t,s)}i=i.next}while(i!==r)}}function Nh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function _p(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function FT(n){var e=n.alternate;e!==null&&(n.alternate=null,FT(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[An],delete e[al],delete e[rp],delete e[Pk],delete e[Rk])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function UT(n){return n.tag===5||n.tag===3||n.tag===4}function Ov(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||UT(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=xc));else if(r!==4&&(n=n.child,n!==null))for(yp(n,e,t),n=n.sibling;n!==null;)yp(n,e,t),n=n.sibling}function vp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(vp(n,e,t),n=n.sibling;n!==null;)vp(n,e,t),n=n.sibling}var at=null,mn=!1;function Ir(n,e,t){for(t=t.child;t!==null;)BT(n,e,t),t=t.sibling}function BT(n,e,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Eh,t)}catch{}switch(t.tag){case 5:wt||Us(t,e);case 6:var r=at,i=mn;at=null,Ir(n,e,t),at=r,mn=i,at!==null&&(mn?(n=at,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):at.removeChild(t.stateNode));break;case 18:at!==null&&(mn?(n=at,t=t.stateNode,n.nodeType===8?nf(n.parentNode,t):n.nodeType===1&&nf(n,t),nl(n)):nf(at,t.stateNode));break;case 4:r=at,i=mn,at=t.stateNode.containerInfo,mn=!0,Ir(n,e,t),at=r,mn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gp(t,e,o),i=i.next}while(i!==r)}Ir(n,e,t);break;case 1:if(!wt&&(Us(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Ve(t,e,a)}Ir(n,e,t);break;case 21:Ir(n,e,t);break;case 22:t.mode&1?(wt=(r=wt)||t.memoizedState!==null,Ir(n,e,t),wt=r):Ir(n,e,t);break;default:Ir(n,e,t)}}function Lv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new jk),e.forEach(function(r){var i=Zk.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function fn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,mn=!1;break e;case 3:at=a.stateNode.containerInfo,mn=!0;break e;case 4:at=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(at===null)throw Error(B(160));BT(s,o,i),at=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zT(e,n),e=e.sibling}function zT(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fn(e,n),Tn(n),r&4){try{Ma(3,n,n.return),Nh(3,n)}catch(C){Ve(n,n.return,C)}try{Ma(5,n,n.return)}catch(C){Ve(n,n.return,C)}}break;case 1:fn(e,n),Tn(n),r&512&&t!==null&&Us(t,t.return);break;case 5:if(fn(e,n),Tn(n),r&512&&t!==null&&Us(t,t.return),n.flags&32){var i=n.stateNode;try{Xa(i,"")}catch(C){Ve(n,n.return,C)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uE(i,s),jf(a,o);var c=jf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?pE(i,p):d==="dangerouslySetInnerHTML"?dE(i,p):d==="children"?Xa(i,p):gm(i,d,p,c)}switch(a){case"input":Ff(i,s);break;case"textarea":cE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?qs(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[al]=s}catch(C){Ve(n,n.return,C)}}break;case 6:if(fn(e,n),Tn(n),r&4){if(n.stateNode===null)throw Error(B(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(C){Ve(n,n.return,C)}}break;case 3:if(fn(e,n),Tn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(C){Ve(n,n.return,C)}break;case 4:fn(e,n),Tn(n);break;case 13:fn(e,n),Tn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qm=ze())),r&4&&Lv(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(wt=(c=wt)||d,fn(e,n),wt=c):fn(e,n),Tn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(K=n,d=n.child;d!==null;){for(p=K=d;K!==null;){switch(m=K,I=m.child,m.tag){case 0:case 11:case 14:case 15:Ma(4,m,m.return);break;case 1:Us(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(C){Ve(r,t,C)}}break;case 5:Us(m,m.return);break;case 22:if(m.memoizedState!==null){Fv(p);continue}}I!==null?(I.return=m,K=I):Fv(p)}d=d.sibling}e:for(d=null,p=n;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=fE("display",o))}catch(C){Ve(n,n.return,C)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){Ve(n,n.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fn(e,n),Tn(n),r&4&&Lv(n);break;case 21:break;default:fn(e,n),Tn(n)}}function Tn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(UT(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xa(i,""),r.flags&=-33);var s=Ov(n);vp(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ov(n);yp(n,a,o);break;default:throw Error(B(161))}}catch(u){Ve(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Gk(n,e,t){K=n,$T(n)}function $T(n,e,t){for(var r=(n.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||wt;a=Bu;var c=wt;if(Bu=o,(wt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Uv(i):u!==null?(u.return=o,K=u):Uv(i);for(;s!==null;)K=s,$T(s),s=s.sibling;K=i,Bu=a,wt=c}Mv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Mv(n)}}function Mv(n){for(;K!==null;){var e=K;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Nh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:pn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Iv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Iv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&nl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}wt||e.flags&512&&_p(e)}catch(m){Ve(e,e.return,m)}}if(e===n){K=null;break}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}}function Fv(n){for(;K!==null;){var e=K;if(e===n){K=null;break}var t=e.sibling;if(t!==null){t.return=e.return,K=t;break}K=e.return}}function Uv(n){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Nh(4,e)}catch(u){Ve(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{_p(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{_p(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===n){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var Wk=Math.ceil,qc=dr.ReactCurrentDispatcher,Km=dr.ReactCurrentOwner,on=dr.ReactCurrentBatchConfig,oe=0,tt=null,Ke=null,ct=0,qt=0,Bs=ai(0),Qe=0,fl=null,Gi=0,bh=0,Hm=0,Fa=null,Ot=null,Qm=0,lo=1/0,Yn=null,Gc=!1,wp=null,jr=null,zu=!1,Vr=null,Wc=0,Ua=0,Ip=null,oc=-1,ac=0;function Rt(){return oe&6?ze():oc!==-1?oc:oc=ze()}function qr(n){return n.mode&1?oe&2&&ct!==0?ct&-ct:Ck.transition!==null?(ac===0&&(ac=PE()),ac):(n=fe,n!==0||(n=window.event,n=n===void 0?16:xE(n.type)),n):1}function yn(n,e,t,r){if(50<Ua)throw Ua=0,Ip=null,Error(B(185));Ml(n,t,r),(!(oe&2)||n!==tt)&&(n===tt&&(!(oe&2)&&(bh|=t),Qe===4&&Nr(n,ct)),$t(n,r),t===1&&oe===0&&!(e.mode&1)&&(lo=ze()+500,Rh&&li()))}function $t(n,e){var t=n.callbackNode;C1(n,e);var r=Cc(n,n===tt?ct:0);if(r===0)t!==null&&Hy(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Hy(t),e===1)n.tag===0?kk(Bv.bind(null,n)):XE(Bv.bind(null,n)),Sk(function(){!(oe&6)&&li()}),t=null;else{switch(RE(r)){case 1:t=Im;break;case 4:t=SE;break;case 16:t=kc;break;case 536870912:t=AE;break;default:t=kc}t=YT(t,jT.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function jT(n,e){if(oc=-1,ac=0,oe&6)throw Error(B(327));var t=n.callbackNode;if(Qs()&&n.callbackNode!==t)return null;var r=Cc(n,n===tt?ct:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Kc(n,r);else{e=r;var i=oe;oe|=2;var s=GT();(tt!==n||ct!==e)&&(Yn=null,lo=ze()+500,Mi(n,e));do try{Qk();break}catch(a){qT(n,a)}while(!0);Vm(),qc.current=s,oe=i,Ke!==null?e=0:(tt=null,ct=0,e=Qe)}if(e!==0){if(e===2&&(i=Hf(n),i!==0&&(r=i,e=Ep(n,i))),e===1)throw t=fl,Mi(n,0),Nr(n,r),$t(n,ze()),t;if(e===6)Nr(n,r);else{if(i=n.current.alternate,!(r&30)&&!Kk(i)&&(e=Kc(n,r),e===2&&(s=Hf(n),s!==0&&(r=s,e=Ep(n,s))),e===1))throw t=fl,Mi(n,0),Nr(n,r),$t(n,ze()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ei(n,Ot,Yn);break;case 3:if(Nr(n,r),(r&130023424)===r&&(e=Qm+500-ze(),10<e)){if(Cc(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Rt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=np(Ei.bind(null,n,Ot,Yn),e);break}Ei(n,Ot,Yn);break;case 4:if(Nr(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wk(r/1960))-r,10<r){n.timeoutHandle=np(Ei.bind(null,n,Ot,Yn),r);break}Ei(n,Ot,Yn);break;case 5:Ei(n,Ot,Yn);break;default:throw Error(B(329))}}}return $t(n,ze()),n.callbackNode===t?jT.bind(null,n):null}function Ep(n,e){var t=Fa;return n.current.memoizedState.isDehydrated&&(Mi(n,e).flags|=256),n=Kc(n,e),n!==2&&(e=Ot,Ot=t,e!==null&&Tp(e)),n}function Tp(n){Ot===null?Ot=n:Ot.push.apply(Ot,n)}function Kk(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(n,e){for(e&=~Hm,e&=~bh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-_n(e),r=1<<t;n[t]=-1,e&=~r}}function Bv(n){if(oe&6)throw Error(B(327));Qs();var e=Cc(n,0);if(!(e&1))return $t(n,ze()),null;var t=Kc(n,e);if(n.tag!==0&&t===2){var r=Hf(n);r!==0&&(e=r,t=Ep(n,r))}if(t===1)throw t=fl,Mi(n,0),Nr(n,e),$t(n,ze()),t;if(t===6)throw Error(B(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ei(n,Ot,Yn),$t(n,ze()),null}function Ym(n,e){var t=oe;oe|=1;try{return n(e)}finally{oe=t,oe===0&&(lo=ze()+500,Rh&&li())}}function Wi(n){Vr!==null&&Vr.tag===0&&!(oe&6)&&Qs();var e=oe;oe|=1;var t=on.transition,r=fe;try{if(on.transition=null,fe=1,n)return n()}finally{fe=r,on.transition=t,oe=e,!(oe&6)&&li()}}function Jm(){qt=Bs.current,Te(Bs)}function Mi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Tk(t)),Ke!==null)for(t=Ke.return;t!==null;){var r=t;switch(bm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vc();break;case 3:oo(),Te(Bt),Te(It),Bm();break;case 5:Um(r);break;case 4:oo();break;case 13:Te(Ce);break;case 19:Te(Ce);break;case 10:Om(r.type._context);break;case 22:case 23:Jm()}t=t.return}if(tt=n,Ke=n=Gr(n.current,null),ct=qt=e,Qe=0,fl=null,Hm=bh=Gi=0,Ot=Fa=null,bi!==null){for(e=0;e<bi.length;e++)if(t=bi[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}bi=null}return n}function qT(n,e){do{var t=Ke;try{if(Vm(),rc.current=jc,$c){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$c=!1}if(qi=0,Ze=He=Ne=null,La=!1,cl=0,Km.current=null,t===null||t.return===null){Qe=1,fl=e,Ke=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=ct,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=Rv(o);if(I!==null){I.flags&=-257,kv(I,o,a,s,e),I.mode&1&&Pv(s,c,e),e=I,u=c;var R=e.updateQueue;if(R===null){var C=new Set;C.add(u),e.updateQueue=C}else R.add(u);break e}else{if(!(e&1)){Pv(s,c,e),Xm();break e}u=Error(B(426))}}else if(Se&&a.mode&1){var O=Rv(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),kv(O,o,a,s,e),Dm(ao(u,a));break e}}s=u=ao(u,a),Qe!==4&&(Qe=2),Fa===null?Fa=[s]:Fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=RT(s,u,e);wv(s,T);break e;case 1:a=u;var y=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(jr===null||!jr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=kT(s,a,e);wv(s,V);break e}}s=s.return}while(s!==null)}KT(t)}catch(U){e=U,Ke===t&&t!==null&&(Ke=t=t.return);continue}break}while(!0)}function GT(){var n=qc.current;return qc.current=jc,n===null?jc:n}function Xm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Gi&268435455)&&!(bh&268435455)||Nr(tt,ct)}function Kc(n,e){var t=oe;oe|=2;var r=GT();(tt!==n||ct!==e)&&(Yn=null,Mi(n,e));do try{Hk();break}catch(i){qT(n,i)}while(!0);if(Vm(),oe=t,qc.current=r,Ke!==null)throw Error(B(261));return tt=null,ct=0,Qe}function Hk(){for(;Ke!==null;)WT(Ke)}function Qk(){for(;Ke!==null&&!w1();)WT(Ke)}function WT(n){var e=QT(n.alternate,n,qt);n.memoizedProps=n.pendingProps,e===null?KT(n):Ke=e,Km.current=null}function KT(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=$k(t,e),t!==null){t.flags&=32767,Ke=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qe=6,Ke=null;return}}else if(t=zk(t,e,qt),t!==null){Ke=t;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=n}while(e!==null);Qe===0&&(Qe=5)}function Ei(n,e,t){var r=fe,i=on.transition;try{on.transition=null,fe=1,Yk(n,e,t,r)}finally{on.transition=i,fe=r}return null}function Yk(n,e,t,r){do Qs();while(Vr!==null);if(oe&6)throw Error(B(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(B(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(N1(n,s),n===tt&&(Ke=tt=null,ct=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||zu||(zu=!0,YT(kc,function(){return Qs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=fe;fe=1;var a=oe;oe|=4,Km.current=null,qk(n,t),zT(t,n),gk(ep),Nc=!!Zf,ep=Zf=null,n.current=t,Gk(t),I1(),oe=a,fe=o,on.transition=s}else n.current=t;if(zu&&(zu=!1,Vr=n,Wc=i),s=n.pendingLanes,s===0&&(jr=null),S1(t.stateNode),$t(n,ze()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gc)throw Gc=!1,n=wp,wp=null,n;return Wc&1&&n.tag!==0&&Qs(),s=n.pendingLanes,s&1?n===Ip?Ua++:(Ua=0,Ip=n):Ua=0,li(),null}function Qs(){if(Vr!==null){var n=RE(Wc),e=on.transition,t=fe;try{if(on.transition=null,fe=16>n?16:n,Vr===null)var r=!1;else{if(n=Vr,Vr=null,Wc=0,oe&6)throw Error(B(331));var i=oe;for(oe|=4,K=n.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Ma(8,d,s)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var m=d.sibling,I=d.return;if(FT(d),d===c){K=null;break}if(m!==null){m.return=I,K=m;break}K=I}}}var R=s.alternate;if(R!==null){var C=R.child;if(C!==null){R.child=null;do{var O=C.sibling;C.sibling=null,C=O}while(C!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,K=T;break e}K=s.return}}var y=n.current;for(K=y;K!==null;){o=K;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,K=A;else e:for(o=y;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nh(9,a)}}catch(U){Ve(a,a.return,U)}if(a===o){K=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,K=V;break e}K=a.return}}if(oe=i,li(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Eh,n)}catch{}r=!0}return r}finally{fe=t,on.transition=e}}return!1}function zv(n,e,t){e=ao(t,e),e=RT(n,e,1),n=$r(n,e,1),e=Rt(),n!==null&&(Ml(n,1,e),$t(n,e))}function Ve(n,e,t){if(n.tag===3)zv(n,n,t);else for(;e!==null;){if(e.tag===3){zv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){n=ao(t,n),n=kT(e,n,1),e=$r(e,n,1),n=Rt(),e!==null&&(Ml(e,1,n),$t(e,n));break}}e=e.return}}function Jk(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Rt(),n.pingedLanes|=n.suspendedLanes&t,tt===n&&(ct&t)===t&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>ze()-Qm?Mi(n,0):Hm|=t),$t(n,e)}function HT(n,e){e===0&&(n.mode&1?(e=bu,bu<<=1,!(bu&130023424)&&(bu=4194304)):e=1);var t=Rt();n=ar(n,e),n!==null&&(Ml(n,e,t),$t(n,t))}function Xk(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),HT(n,t)}function Zk(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),HT(n,t)}var QT;QT=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Bt.current)Lt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Lt=!1,Bk(n,e,t);Lt=!!(n.flags&131072)}else Lt=!1,Se&&e.flags&1048576&&ZE(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sc(n,e),n=e.pendingProps;var i=ro(e,It.current);Hs(e,t),i=$m(null,e,r,n,i,t);var s=jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(s=!0,Oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mm(e),i.updater=Ch,e.stateNode=i,i._reactInternals=e,up(e,r,n,t),e=dp(null,e,r,!0,s,t)):(e.tag=0,Se&&s&&Nm(e),St(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(sc(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tC(r),n=pn(r,n),i){case 0:e=hp(null,e,r,n,t);break e;case 1:e=bv(null,e,r,n,t);break e;case 11:e=Cv(null,e,r,n,t);break e;case 14:e=Nv(null,e,r,pn(r.type,n),t);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),hp(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),bv(n,e,r,i,t);case 3:e:{if(DT(e),n===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sT(n,e),Bc(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ao(Error(B(423)),e),e=Dv(n,e,r,t,i);break e}else if(r!==i){i=ao(Error(B(424)),e),e=Dv(n,e,r,t,i);break e}else for(Wt=zr(e.stateNode.containerInfo.firstChild),Ht=e,Se=!0,gn=null,t=rT(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(io(),r===i){e=lr(n,e,t);break e}St(n,e,r,t)}e=e.child}return e;case 5:return oT(e),n===null&&op(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,tp(r,i)?o=null:s!==null&&tp(r,s)&&(e.flags|=32),bT(n,e),St(n,e,o,t),e.child;case 6:return n===null&&op(e),null;case 13:return xT(n,e,t);case 4:return Fm(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=so(e,null,r,t):St(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Cv(n,e,r,i,t);case 7:return St(n,e,e.pendingProps,t),e.child;case 8:return St(n,e,e.pendingProps.children,t),e.child;case 12:return St(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Fc,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Bt.current){e=lr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=rr(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),ap(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ap(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hs(e,t),i=ln(i),r=r(i),e.flags|=1,St(n,e,r,t),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),Nv(n,e,r,i,t);case 15:return CT(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),sc(n,e),e.tag=1,zt(r)?(n=!0,Oc(e)):n=!1,Hs(e,t),PT(e,r,i),up(e,r,i,t),dp(null,e,r,!0,n,t);case 19:return VT(n,e,t);case 22:return NT(n,e,t)}throw Error(B(156,e.tag))};function YT(n,e){return TE(n,e)}function eC(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(n,e,t,r){return new eC(n,e,t,r)}function Zm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tC(n){if(typeof n=="function")return Zm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ym)return 11;if(n===vm)return 14}return 2}function Gr(n,e){var t=n.alternate;return t===null?(t=rn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function lc(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")Zm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ns:return Fi(t.children,i,s,e);case _m:o=8,i|=8;break;case xf:return n=rn(12,t,e,i|2),n.elementType=xf,n.lanes=s,n;case Vf:return n=rn(13,t,e,i),n.elementType=Vf,n.lanes=s,n;case Of:return n=rn(19,t,e,i),n.elementType=Of,n.lanes=s,n;case oE:return Dh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case iE:o=10;break e;case sE:o=9;break e;case ym:o=11;break e;case vm:o=14;break e;case Rr:o=16,r=null;break e}throw Error(B(130,n==null?n:typeof n,""))}return e=rn(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function Fi(n,e,t,r){return n=rn(7,n,r,e),n.lanes=t,n}function Dh(n,e,t,r){return n=rn(22,n,r,e),n.elementType=oE,n.lanes=t,n.stateNode={isHidden:!1},n}function hf(n,e,t){return n=rn(6,n,null,e),n.lanes=t,n}function df(n,e,t){return e=rn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nC(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gd(0),this.expirationTimes=Gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function eg(n,e,t,r,i,s,o,a,u){return n=new nC(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mm(s),n}function rC(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function JT(n){if(!n)return Qr;n=n._reactInternals;e:{if(as(n)!==n||n.tag!==1)throw Error(B(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(n.tag===1){var t=n.type;if(zt(t))return JE(n,t,e)}return e}function XT(n,e,t,r,i,s,o,a,u){return n=eg(t,r,!0,n,i,s,o,a,u),n.context=JT(null),t=n.current,r=Rt(),i=qr(t),s=rr(r,i),s.callback=e??null,$r(t,s,i),n.current.lanes=i,Ml(n,i,r),$t(n,r),n}function xh(n,e,t,r){var i=e.current,s=Rt(),o=qr(i);return t=JT(t),e.context===null?e.context=t:e.pendingContext=t,e=rr(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=$r(i,e,o),n!==null&&(yn(n,i,o,s),nc(n,i,o)),o}function Hc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $v(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function tg(n,e){$v(n,e),(n=n.alternate)&&$v(n,e)}function iC(){return null}var ZT=typeof reportError=="function"?reportError:function(n){console.error(n)};function ng(n){this._internalRoot=n}Vh.prototype.render=ng.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(B(409));xh(n,e,null,null)};Vh.prototype.unmount=ng.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Wi(function(){xh(null,n,null,null)}),e[or]=null}};function Vh(n){this._internalRoot=n}Vh.prototype.unstable_scheduleHydration=function(n){if(n){var e=NE();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Cr.length&&e!==0&&e<Cr[t].priority;t++);Cr.splice(t,0,n),t===0&&DE(n)}};function rg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jv(){}function sC(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hc(o);s.call(c)}}var o=XT(e,r,n,0,null,!1,!1,"",jv);return n._reactRootContainer=o,n[or]=o.current,sl(n.nodeType===8?n.parentNode:n),Wi(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hc(u);a.call(c)}}var u=eg(n,0,!1,null,null,!1,!1,"",jv);return n._reactRootContainer=u,n[or]=u.current,sl(n.nodeType===8?n.parentNode:n),Wi(function(){xh(e,u,t,r)}),u}function Lh(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Hc(o);a.call(u)}}xh(e,o,n,i)}else o=sC(t,e,n,i,r);return Hc(o)}kE=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ea(e.pendingLanes);t!==0&&(Em(e,t|1),$t(e,ze()),!(oe&6)&&(lo=ze()+500,li()))}break;case 13:Wi(function(){var r=ar(n,1);if(r!==null){var i=Rt();yn(r,n,1,i)}}),tg(n,1)}};Tm=function(n){if(n.tag===13){var e=ar(n,134217728);if(e!==null){var t=Rt();yn(e,n,134217728,t)}tg(n,134217728)}};CE=function(n){if(n.tag===13){var e=qr(n),t=ar(n,e);if(t!==null){var r=Rt();yn(t,n,e,r)}tg(n,e)}};NE=function(){return fe};bE=function(n,e){var t=fe;try{return fe=n,e()}finally{fe=t}};Gf=function(n,e,t){switch(e){case"input":if(Ff(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=Ph(r);if(!i)throw Error(B(90));lE(r),Ff(r,i)}}}break;case"textarea":cE(n,t);break;case"select":e=t.value,e!=null&&qs(n,!!t.multiple,e,!1)}};_E=Ym;yE=Wi;var oC={usingClientEntryPoint:!1,Events:[Ul,Vs,Ph,mE,gE,Ym]},ha={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aC={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=IE(n),n===null?null:n.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||iC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Eh=$u.inject(aC),xn=$u}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oC;Xt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rg(e))throw Error(B(200));return rC(n,e,null,t)};Xt.createRoot=function(n,e){if(!rg(n))throw Error(B(299));var t=!1,r="",i=ZT;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=eg(n,1,!1,null,null,t,!1,r,i),n[or]=e.current,sl(n.nodeType===8?n.parentNode:n),new ng(e)};Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(B(188)):(n=Object.keys(n).join(","),Error(B(268,n)));return n=IE(e),n=n===null?null:n.stateNode,n};Xt.flushSync=function(n){return Wi(n)};Xt.hydrate=function(n,e,t){if(!Oh(e))throw Error(B(200));return Lh(null,n,e,!0,t)};Xt.hydrateRoot=function(n,e,t){if(!rg(n))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=ZT;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=XT(e,null,n,1,t??null,i,!1,s,o),n[or]=e.current,sl(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new Vh(e)};Xt.render=function(n,e,t){if(!Oh(e))throw Error(B(200));return Lh(null,n,e,!1,t)};Xt.unmountComponentAtNode=function(n){if(!Oh(n))throw Error(B(40));return n._reactRootContainer?(Wi(function(){Lh(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1};Xt.unstable_batchedUpdates=Ym;Xt.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Oh(t))throw Error(B(200));if(n==null||n._reactInternals===void 0)throw Error(B(38));return Lh(n,e,t,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(n){console.error(n)}}e0(),eE.exports=Xt;var lC=eE.exports,qv=lC;bf.createRoot=qv.createRoot,bf.hydrateRoot=qv.hydrateRoot;var Gv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},uC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},n0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(t[d],t[p],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(t0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new cC;const m=s<<2|a>>4;if(r.push(m),c!==64){const I=a<<4&240|c>>2;if(r.push(I),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hC=function(n){const e=t0(n);return n0.encodeByteArray(e,!0)},Qc=function(n){return hC(n).replace(/\./g,"")},ig=function(n){try{return n0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Yc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!dC(t)||(n[t]=Yc(n[t],e[t]));return n}function dC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=()=>fC().__FIREBASE_DEFAULTS__,mC=()=>{if(typeof process>"u"||typeof Gv>"u")return;const n=Gv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ig(n[1]);return e&&JSON.parse(e)},sg=()=>{try{return pC()||mC()||gC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},r0=()=>{var n;return(n=sg())===null||n===void 0?void 0:n.config},i0=n=>{var e;return(e=sg())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Qc(JSON.stringify(t)),Qc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function og(){var n;const e=(n=sg())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function o0(){return typeof self=="object"&&self.self===self}function ag(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function l0(){return!og()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function vC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wC,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ht(i,a,r)}}function IC(n,e){return n.replace(EC,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function TC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ml(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Kv(s)&&Kv(o)){if(!ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Kv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function lg(n,e){const t=new SC(n,e);return t.subscribe.bind(t)}class SC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");AC(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ff),i.error===void 0&&(i.error=ff),i.complete===void 0&&(i.complete=ff);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ff(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n){return n&&n._delegate?n._delegate:n}class cn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _C;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kC(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RC(n){return n===Ti?void 0:n}function kC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new PC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=[];var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const c0={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},CC=te.INFO,NC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},bC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=NC[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=CC,this._logHandler=bC,this._userLogHandler=null,ug.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function DC(n){ug.forEach(e=>{e.setLogLevel(n)})}function xC(n,e){for(const t of ug){let r=null;e&&e.level&&(r=c0[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}const VC=(n,e)=>e.some(t=>n instanceof t);let Hv,Qv;function OC(){return Hv||(Hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LC(){return Qv||(Qv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h0=new WeakMap,Sp=new WeakMap,d0=new WeakMap,pf=new WeakMap,cg=new WeakMap;function MC(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Wr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&h0.set(t,n)}).catch(()=>{}),cg.set(e,n),e}function FC(n){if(Sp.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Sp.set(n,e)}let Ap={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||d0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UC(n){Ap=n(Ap)}function BC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(mf(this),e,...t);return d0.set(r,e.sort?e.sort():[e]),Wr(r)}:LC().includes(n)?function(...e){return n.apply(mf(this),e),Wr(h0.get(this))}:function(...e){return Wr(n.apply(mf(this),e))}}function zC(n){return typeof n=="function"?BC(n):(n instanceof IDBTransaction&&FC(n),VC(n,OC())?new Proxy(n,Ap):n)}function Wr(n){if(n instanceof IDBRequest)return MC(n);if(pf.has(n))return pf.get(n);const e=zC(n);return e!==n&&(pf.set(n,e),cg.set(e,n)),e}const mf=n=>cg.get(n);function $C(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Wr(o.result),u.oldVersion,u.newVersion,Wr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],gf=new Map;function Yv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gf.get(e))return gf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=qC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jC.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return gf.set(e,s),s}UC(n=>({...n,get:(e,t,r)=>Yv(e,t)||n.get(e,t,r),has:(e,t)=>!!Yv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function WC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jc="@firebase/app",Pp="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new zl("@firebase/app"),KC="@firebase/app-compat",HC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",JC="@firebase/app-check",XC="@firebase/auth",ZC="@firebase/auth-compat",eN="@firebase/database",tN="@firebase/database-compat",nN="@firebase/functions",rN="@firebase/functions-compat",iN="@firebase/installations",sN="@firebase/installations-compat",oN="@firebase/messaging",aN="@firebase/messaging-compat",lN="@firebase/performance",uN="@firebase/performance-compat",cN="@firebase/remote-config",hN="@firebase/remote-config-compat",dN="@firebase/storage",fN="@firebase/storage-compat",pN="@firebase/firestore",mN="@firebase/vertexai-preview",gN="@firebase/firestore-compat",_N="firebase",yN="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]",vN={[Jc]:"fire-core",[KC]:"fire-core-compat",[QC]:"fire-analytics",[HC]:"fire-analytics-compat",[JC]:"fire-app-check",[YC]:"fire-app-check-compat",[XC]:"fire-auth",[ZC]:"fire-auth-compat",[eN]:"fire-rtdb",[tN]:"fire-rtdb-compat",[nN]:"fire-fn",[rN]:"fire-fn-compat",[iN]:"fire-iid",[sN]:"fire-iid-compat",[oN]:"fire-fcm",[aN]:"fire-fcm-compat",[lN]:"fire-perf",[uN]:"fire-perf-compat",[cN]:"fire-rc",[hN]:"fire-rc-compat",[dN]:"fire-gcs",[fN]:"fire-gcs-compat",[pN]:"fire-fst",[gN]:"fire-fst-compat",[mN]:"fire-vertex","fire-js":"fire-js",[_N]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map,uo=new Map,co=new Map;function gl(n,e){try{n.container.addComponent(e)}catch(t){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function f0(n,e){n.container.addOrOverwriteComponent(e)}function Mn(n){const e=n.name;if(co.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;co.set(e,n);for(const t of Jr.values())gl(t,n);for(const t of uo.values())gl(t,n);return!0}function p0(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wN(n,e,t=Yr){p0(n,e).clearInstance(t)}function m0(n){return n.options!==void 0}function _e(n){return n.settings!==void 0}function IN(){co.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new zn("app","Firebase",EN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g0=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN extends g0{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Qt(Jc,Pp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){dg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw an.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=yN;function hg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(t||(t=r0()),!t)throw an.create("no-options");const s=Jr.get(i);if(s){if(ml(t,s.options)&&ml(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new u0(i);for(const u of co.values())o.addComponent(u);const a=new g0(t,r,o);return Jr.set(i,a),a}function SN(n,e){if(o0())throw an.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;m0(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,p)=>Math.imul(31,d)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw an.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=uo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new u0(s);for(const c of co.values())a.addComponent(c);const u=new TN(t,e,s,a);return uo.set(s,u),u}function AN(n=Yr){const e=Jr.get(n);if(!e&&n===Yr&&r0())return hg();if(!e)throw an.create("no-app",{appName:n});return e}function PN(){return Array.from(Jr.values())}async function dg(n){let e=!1;const t=n.name;Jr.has(t)?(e=!0,Jr.delete(t)):uo.has(t)&&n.decRefCount()<=0&&(uo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Qt(n,e,t){var r;let i=(r=vN[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(a.join(" "));return}Mn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function _0(n,e){if(n!==null&&typeof n!="function")throw an.create("invalid-log-argument");xC(n,e)}function y0(n){DC(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="firebase-heartbeat-database",kN=1,_l="firebase-heartbeat-store";let _f=null;function v0(){return _f||(_f=$C(RN,kN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_l)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),_f}async function CN(n){try{const t=(await v0()).transaction(_l),r=await t.objectStore(_l).get(w0(n));return await t.done,r}catch(e){if(e instanceof ht)Ki.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ki.warn(t.message)}}}async function Jv(n,e){try{const r=(await v0()).transaction(_l,"readwrite");await r.objectStore(_l).put(e,w0(n)),await r.done}catch(t){if(t instanceof ht)Ki.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(r.message)}}}function w0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=1024,bN=30*24*60*60*1e3;class DN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new VN(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xv(),{heartbeatsToSend:r,unsentEntries:i}=xN(this._heartbeatsCache.heartbeats),s=Qc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xv(){return new Date().toISOString().substring(0,10)}function xN(n,e=NN){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zv(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Zv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class VN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?vC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zv(n){return Qc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(n){Mn(new cn("platform-logger",e=>new GC(e),"PRIVATE")),Mn(new cn("heartbeat",e=>new DN(e),"PRIVATE")),Qt(Jc,Pp,n),Qt(Jc,Pp,"esm2017"),Qt("fire-js","")}ON("");const LN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ht,SDK_VERSION:En,_DEFAULT_ENTRY_NAME:Yr,_addComponent:gl,_addOrOverwriteComponent:f0,_apps:Jr,_clearComponents:IN,_components:co,_getProvider:p0,_isFirebaseApp:m0,_isFirebaseServerApp:_e,_registerComponent:Mn,_removeServiceInstance:wN,_serverApps:uo,deleteApp:dg,getApp:AN,getApps:PN,initializeApp:hg,initializeServerApp:SN,onLog:_0,registerVersion:Qt,setLogLevel:y0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t){this._delegate=e,this.firebase=t,gl(e,new cn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),dg(this._delegate)))}_getService(e,t=Yr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Yr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){gl(this._delegate,e)}_addOrOverwriteComponent(e){f0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ew=new zn("app-compat","Firebase",FN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Qt,setLogLevel:y0,onLog:_0,apps:null,SDK_VERSION:En,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:LN}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Yr,!Wv(e,c))throw ew.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,d={}){const p=hg(c,d);if(Wv(e,p.name))return e[p.name];const m=new n(p,t);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,p=d.replace("-compat","");if(Mn(c)&&c.type==="PUBLIC"){const m=(I=i())=>{if(typeof I[p]!="function")throw ew.create("invalid-app-argument",{appName:d});return I[p]()};c.serviceProps!==void 0&&Yc(m,c.serviceProps),t[p]=m,n.prototype[p]=function(...I){return this._getService.bind(this,d).apply(this,c.multipleInstances?I:[])}}return c.type==="PUBLIC"?t[p]:null}function u(c,d){return d==="serverAuth"?null:d}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){const n=UN(MN);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:I0,extendNamespace:e,createSubscribe:lg,ErrorFactory:zn,deepExtend:Yc});function e(t){Yc(n,t)}return n}const BN=I0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new zl("@firebase/app-compat"),zN="@firebase/app-compat",$N="0.2.34";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(n){Qt(zN,$N,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(o0()&&self.firebase!==void 0){tw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&tw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const $n=BN;jN();var qN="firebase",GN="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.registerVersion(qN,GN,"app-compat");var nw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ui,E0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function w(){}w.prototype=_.prototype,v.D=_.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(E,P,N){for(var S=Array(arguments.length-2),en=2;en<arguments.length;en++)S[en-2]=arguments[en];return _.prototype[P].apply(E,S)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,w){w||(w=0);var E=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)E[P]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(P=0;16>P;++P)E[P]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=v.g[0],w=v.g[1],P=v.g[2];var N=v.g[3],S=_+(N^w&(P^N))+E[0]+3614090360&4294967295;_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+E[1]+3905402710&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+E[2]+606105819&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+E[3]+3250441966&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(N^w&(P^N))+E[4]+4118548399&4294967295,_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+E[5]+1200080426&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+E[6]+2821735955&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+E[7]+4249261313&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(N^w&(P^N))+E[8]+1770035416&4294967295,_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+E[9]+2336552879&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+E[10]+4294925233&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+E[11]+2304563134&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(N^w&(P^N))+E[12]+1804603682&4294967295,_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+E[13]+4254626195&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+E[14]+2792965006&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+E[15]+1236535329&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(P^N&(w^P))+E[1]+4129170786&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+E[6]+3225465664&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+E[11]+643717713&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+E[0]+3921069994&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(P^N&(w^P))+E[5]+3593408605&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+E[10]+38016083&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+E[15]+3634488961&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+E[4]+3889429448&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(P^N&(w^P))+E[9]+568446438&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+E[14]+3275163606&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+E[3]+4107603335&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+E[8]+1163531501&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(P^N&(w^P))+E[13]+2850285829&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+E[2]+4243563512&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+E[7]+1735328473&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+E[12]+2368359562&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(w^P^N)+E[5]+4294588738&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+E[8]+2272392833&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+E[11]+1839030562&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+E[14]+4259657740&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(w^P^N)+E[1]+2763975236&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+E[4]+1272893353&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+E[7]+4139469664&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+E[10]+3200236656&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(w^P^N)+E[13]+681279174&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+E[0]+3936430074&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+E[3]+3572445317&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+E[6]+76029189&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(w^P^N)+E[9]+3654602809&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+E[12]+3873151461&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+E[15]+530742520&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+E[2]+3299628645&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(P^(w|~N))+E[0]+4096336452&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+E[7]+1126891415&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+E[14]+2878612391&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+E[5]+4237533241&4294967295,w=P+(S<<21&4294967295|S>>>11),S=_+(P^(w|~N))+E[12]+1700485571&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+E[3]+2399980690&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+E[10]+4293915773&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+E[1]+2240044497&4294967295,w=P+(S<<21&4294967295|S>>>11),S=_+(P^(w|~N))+E[8]+1873313359&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+E[15]+4264355552&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+E[6]+2734768916&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+E[13]+1309151649&4294967295,w=P+(S<<21&4294967295|S>>>11),S=_+(P^(w|~N))+E[4]+4149444226&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+E[11]+3174756917&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+E[2]+718787259&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,v.g[2]=v.g[2]+P&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var w=_-this.blockSize,E=this.B,P=this.h,N=0;N<_;){if(P==0)for(;N<=w;)i(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<_;)if(E[P++]=v.charCodeAt(N++),P==this.blockSize){i(this,E),P=0;break}}else for(;N<_;)if(E[P++]=v[N++],P==this.blockSize){i(this,E),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var w=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=w&255,w/=256;for(this.u(v),v=Array(16),_=w=0;4>_;++_)for(var E=0;32>E;E+=8)v[w++]=this.g[_]>>>E&255;return v};function s(v,_){var w=a;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=_(v)}function o(v,_){this.h=_;for(var w=[],E=!0,P=v.length-1;0<=P;P--){var N=v[P]|0;E&&N==_||(w[P]=N,E=!1)}this.g=w}var a={};function u(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return O(c(-v));for(var _=[],w=1,E=0;v>=w;E++)_[E]=v/w|0,w*=4294967296;return new o(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return O(d(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(_,8)),E=p,P=0;P<v.length;P+=8){var N=Math.min(8,v.length-P),S=parseInt(v.substring(P,P+N),_);8>N?(N=c(Math.pow(_,N)),E=E.j(N).add(c(S))):(E=E.j(w),E=E.add(c(S)))}return E}var p=u(0),m=u(1),I=u(16777216);n=o.prototype,n.m=function(){if(C(this))return-O(this).m();for(var v=0,_=1,w=0;w<this.g.length;w++){var E=this.i(w);v+=(0<=E?E:4294967296+E)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(C(this))return"-"+O(this).toString(v);for(var _=c(Math.pow(v,6)),w=this,E="";;){var P=V(w,_).g;w=T(w,P.j(_));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=P,R(w))return N+E;for(;6>N.length;)N="0"+N;E=N+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function C(v){return v.h==-1}n.l=function(v){return v=T(this,v),C(v)?-1:R(v)?0:1};function O(v){for(var _=v.g.length,w=[],E=0;E<_;E++)w[E]=~v.g[E];return new o(w,~v.h).add(m)}n.abs=function(){return C(this)?O(this):this},n.add=function(v){for(var _=Math.max(this.g.length,v.g.length),w=[],E=0,P=0;P<=_;P++){var N=E+(this.i(P)&65535)+(v.i(P)&65535),S=(N>>>16)+(this.i(P)>>>16)+(v.i(P)>>>16);E=S>>>16,N&=65535,S&=65535,w[P]=S<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(v,_){return v.add(O(_))}n.j=function(v){if(R(this)||R(v))return p;if(C(this))return C(v)?O(this).j(O(v)):O(O(this).j(v));if(C(v))return O(this.j(O(v)));if(0>this.l(I)&&0>v.l(I))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,w=[],E=0;E<2*_;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var P=0;P<v.g.length;P++){var N=this.i(E)>>>16,S=this.i(E)&65535,en=v.i(P)>>>16,mi=v.i(P)&65535;w[2*E+2*P]+=S*mi,y(w,2*E+2*P),w[2*E+2*P+1]+=N*mi,y(w,2*E+2*P+1),w[2*E+2*P+1]+=S*en,y(w,2*E+2*P+1),w[2*E+2*P+2]+=N*en,y(w,2*E+2*P+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new o(w,0)};function y(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function A(v,_){this.g=v,this.h=_}function V(v,_){if(R(_))throw Error("division by zero");if(R(v))return new A(p,p);if(C(v))return _=V(O(v),_),new A(O(_.g),O(_.h));if(C(_))return _=V(v,O(_)),new A(O(_.g),_.h);if(30<v.g.length){if(C(v)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,E=_;0>=E.l(v);)w=U(w),E=U(E);var P=F(w,1),N=F(E,1);for(E=F(E,2),w=F(w,2);!R(E);){var S=N.add(E);0>=S.l(v)&&(P=P.add(w),N=S),E=F(E,1),w=F(w,1)}return _=T(v,P.j(_)),new A(P,_)}for(P=p;0<=v.l(_);){for(w=Math.max(1,Math.floor(v.m()/_.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),N=c(w),S=N.j(_);C(S)||0<S.l(v);)w-=E,N=c(w),S=N.j(_);R(N)&&(N=m),P=P.add(N),v=T(v,S)}return new A(P,v)}n.A=function(v){return V(this,v).h},n.and=function(v){for(var _=Math.max(this.g.length,v.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)&v.i(E);return new o(w,this.h&v.h)},n.or=function(v){for(var _=Math.max(this.g.length,v.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)|v.i(E);return new o(w,this.h|v.h)},n.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)^v.i(E);return new o(w,this.h^v.h)};function U(v){for(var _=v.g.length+1,w=[],E=0;E<_;E++)w[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(w,v.h)}function F(v,_){var w=_>>5;_%=32;for(var E=v.g.length-w,P=[],N=0;N<E;N++)P[N]=0<_?v.i(N+w)>>>_|v.i(N+w+1)<<32-_:v.i(N+w);return new o(P,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,E0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ui=o}).apply(typeof nw<"u"?nw:typeof self<"u"?self:typeof window<"u"?window:{});var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T0,S0,Aa,A0,uc,Rp,P0,R0,k0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(l,h){if(h)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var k=l[g];if(!(k in f))break e;f=f[k]}l=l[l.length-1],g=f[l],h=h(g),h!=g&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var f=0,g=!1,k={next:function(){if(!g&&f<l.length){var x=f++;return{value:h(x,l[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,f){return l.call.apply(l.bind,arguments)}function p(l,h,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),l.apply(h,k)}}return function(){return l.apply(h,arguments)}}function m(l,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function R(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,k,x){for(var $=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)$[ge-2]=arguments[ge];return h.prototype[k].apply(g,$)}}function C(l){const h=l.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=l[g];return f}return[]}function O(l,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const k=l.length||0,x=g.length||0;l.length=k+x;for(let $=0;$<x;$++)l[k+$]=g[$]}else l.push(g)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(l,h,f){for(const g in l)h.call(f,l[g],g,l)}function v(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function _(l){const h={};for(const f in l)h[f]=l[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)l[f]=g[f];for(let x=0;x<w.length;x++)f=w[x],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function P(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function N(l){a.setTimeout(()=>{throw l},0)}function S(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class en{constructor(){this.h=this.g=null}add(h,f){const g=mi.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var mi=new T(()=>new jo,l=>l.reset());class jo{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let jn,G=!1,J=new en,ee=()=>{const l=a.Promise.resolve(void 0);jn=()=>{l.then(ke)}};var ke=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(f){N(f)}var h=mi;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}G=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var qn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l}();function Gn(l,h){if(Be.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(U){e:{try{V(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Gn.aa.h.call(this)}}R(Gn,Be);var Wn={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),iR=0;function sR(l,h,f,g,k){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++iR,this.da=this.fa=!1}function uu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function cu(l){this.src=l,this.g={},this.h=0}cu.prototype.add=function(l,h,f,g,k){var x=l.toString();l=this.g[x],l||(l=this.g[x]=[],this.h++);var $=yd(l,h,g,k);return-1<$?(h=l[$],f||(h.fa=!1)):(h=new sR(h,this.src,x,!!g,k),h.fa=f,l.push(h)),h};function _d(l,h){var f=h.type;if(f in l.g){var g=l.g[f],k=Array.prototype.indexOf.call(g,h,void 0),x;(x=0<=k)&&Array.prototype.splice.call(g,k,1),x&&(uu(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function yd(l,h,f,g){for(var k=0;k<l.length;++k){var x=l[k];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==g)return k}return-1}var vd="closure_lm_"+(1e6*Math.random()|0),wd={};function M_(l,h,f,g,k){if(Array.isArray(h)){for(var x=0;x<h.length;x++)M_(l,h[x],f,g,k);return null}return f=B_(f),l&&l[Kn]?l.K(h,f,c(g)?!!g.capture:!!g,k):oR(l,h,f,!1,g,k)}function oR(l,h,f,g,k,x){if(!h)throw Error("Invalid event type");var $=c(k)?!!k.capture:!!k,ge=Ed(l);if(ge||(l[vd]=ge=new cu(l)),f=ge.add(h,f,g,$,x),f.proxy)return f;if(g=aR(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)qn||(k=$),k===void 0&&(k=!1),l.addEventListener(h.toString(),g,k);else if(l.attachEvent)l.attachEvent(U_(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function aR(){function l(f){return h.call(l.src,l.listener,f)}const h=lR;return l}function F_(l,h,f,g,k){if(Array.isArray(h))for(var x=0;x<h.length;x++)F_(l,h[x],f,g,k);else g=c(g)?!!g.capture:!!g,f=B_(f),l&&l[Kn]?(l=l.i,h=String(h).toString(),h in l.g&&(x=l.g[h],f=yd(x,f,g,k),-1<f&&(uu(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete l.g[h],l.h--)))):l&&(l=Ed(l))&&(h=l.g[h.toString()],l=-1,h&&(l=yd(h,f,g,k)),(f=-1<l?h[l]:null)&&Id(f))}function Id(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Kn])_d(h.i,l);else{var f=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(f,g,l.capture):h.detachEvent?h.detachEvent(U_(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Ed(h))?(_d(f,l),f.h==0&&(f.src=null,h[vd]=null)):uu(l)}}}function U_(l){return l in wd?wd[l]:wd[l]="on"+l}function lR(l,h){if(l.da)l=!0;else{h=new Gn(h,this);var f=l.listener,g=l.ha||l.src;l.fa&&Id(l),l=f.call(g,h)}return l}function Ed(l){return l=l[vd],l instanceof cu?l:null}var Td="__closure_events_fn_"+(1e9*Math.random()>>>0);function B_(l){return typeof l=="function"?l:(l[Td]||(l[Td]=function(h){return l.handleEvent(h)}),l[Td])}function pt(){me.call(this),this.i=new cu(this),this.M=this,this.F=null}R(pt,me),pt.prototype[Kn]=!0,pt.prototype.removeEventListener=function(l,h,f,g){F_(this,l,h,f,g)};function Et(l,h){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new Be(h,l);else if(h instanceof Be)h.target=h.target||l;else{var k=h;h=new Be(g,l),E(h,k)}if(k=!0,f)for(var x=f.length-1;0<=x;x--){var $=h.g=f[x];k=hu($,g,!0,h)&&k}if($=h.g=l,k=hu($,g,!0,h)&&k,k=hu($,g,!1,h)&&k,f)for(x=0;x<f.length;x++)$=h.g=f[x],k=hu($,g,!1,h)&&k}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],g=0;g<f.length;g++)uu(f[g]);delete l.g[h],l.h--}}this.F=null},pt.prototype.K=function(l,h,f,g){return this.i.add(String(l),h,!1,f,g)},pt.prototype.L=function(l,h,f,g){return this.i.add(String(l),h,!0,f,g)};function hu(l,h,f,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,x=0;x<h.length;++x){var $=h[x];if($&&!$.da&&$.capture==f){var ge=$.listener,ot=$.ha||$.src;$.fa&&_d(l.i,$),k=ge.call(ot,g)!==!1&&k}}return k&&!g.defaultPrevented}function z_(l,h,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function $_(l){l.g=z_(()=>{l.g=null,l.i&&(l.i=!1,$_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class uR extends me{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(l){me.call(this),this.h=l,this.g={}}R(qo,me);var j_=[];function q_(l){F(l.g,function(h,f){this.g.hasOwnProperty(f)&&Id(h)},l),l.g={}}qo.prototype.N=function(){qo.aa.N.call(this),q_(this)},qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sd=a.JSON.stringify,cR=a.JSON.parse,hR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ad(){}Ad.prototype.h=null;function G_(l){return l.h||(l.h=l.i())}function W_(){}var Go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pd(){Be.call(this,"d")}R(Pd,Be);function Rd(){Be.call(this,"c")}R(Rd,Be);var gi={},K_=null;function du(){return K_=K_||new pt}gi.La="serverreachability";function H_(l){Be.call(this,gi.La,l)}R(H_,Be);function Wo(l){const h=du();Et(h,new H_(h))}gi.STAT_EVENT="statevent";function Q_(l,h){Be.call(this,gi.STAT_EVENT,l),this.stat=h}R(Q_,Be);function Tt(l){const h=du();Et(h,new Q_(h,l))}gi.Ma="timingevent";function Y_(l,h){Be.call(this,gi.Ma,l),this.size=h}R(Y_,Be);function Ko(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ho(){this.g=!0}Ho.prototype.xa=function(){this.g=!1};function dR(l,h,f,g,k,x){l.info(function(){if(l.g)if(x)for(var $="",ge=x.split("&"),ot=0;ot<ge.length;ot++){var ue=ge[ot].split("=");if(1<ue.length){var mt=ue[0];ue=ue[1];var gt=mt.split("_");$=2<=gt.length&&gt[1]=="type"?$+(mt+"="+ue+"&"):$+(mt+"=redacted&")}}else $=null;else $=x;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+$})}function fR(l,h,f,g,k,x,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+x+" "+$})}function ps(l,h,f,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+mR(l,f)+(g?" "+g:"")})}function pR(l,h){l.info(function(){return"TIMEOUT: "+h})}Ho.prototype.info=function(){};function mR(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var $=1;$<k.length;$++)k[$]=""}}}}return Sd(f)}catch{return h}}var fu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},J_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kd;function pu(){}R(pu,Ad),pu.prototype.g=function(){return new XMLHttpRequest},pu.prototype.i=function(){return{}},kd=new pu;function yr(l,h,f,g){this.j=l,this.i=h,this.l=f,this.R=g||1,this.U=new qo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new X_}function X_(){this.i=null,this.g="",this.h=!1}var Z_={},Cd={};function Nd(l,h,f){l.L=1,l.v=yu(Hn(h)),l.m=f,l.P=!0,ey(l,null)}function ey(l,h){l.F=Date.now(),mu(l),l.A=Hn(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),py(f.i,"t",g),l.C=0,f=l.j.J,l.h=new X_,l.g=Dy(l.j,f?h:null,!l.m),0<l.O&&(l.M=new uR(m(l.Y,l,l.g),l.O)),h=l.U,f=l.g,g=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(j_[0]=k.toString()),k=j_);for(var x=0;x<k.length;x++){var $=M_(f,k[x],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Wo(),dR(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Qn(l)==3?h.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const gt=Qn(this.g);var h=this.g.Ba();const _s=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Iy(this.g)))){this.J||gt!=4||h==7||(h==8||0>=_s?Wo(3):Wo(2)),bd(this);var f=this.g.Z();this.X=f;t:if(ty(this)){var g=Iy(this.g);l="";var k=g.length,x=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_i(this),Qo(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(x&&h==k-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,fR(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,ot=this.g;if((ge=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ge)){var ue=ge;break t}}ue=null}if(f=ue)ps(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dd(this,f);else{this.o=!1,this.s=3,Tt(12),_i(this),Qo(this);break e}}if(this.P){f=!0;let dn;for(;!this.J&&this.C<$.length;)if(dn=gR(this,$),dn==Cd){gt==4&&(this.s=4,Tt(14),f=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==Z_){this.s=4,Tt(15),ps(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else ps(this.i,this.l,dn,null),Dd(this,dn);if(ty(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||$.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)ps(this.i,this.l,$,"[Invalid Chunked Response]"),_i(this),Qo(this);else if(0<$.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Fd(mt),mt.M=!0,Tt(11))}}else ps(this.i,this.l,$,null),Dd(this,$);gt==4&&_i(this),this.o&&!this.J&&(gt==4?ky(this.j,this):(this.o=!1,mu(this)))}else xR(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),_i(this),Qo(this)}}}catch{}finally{}};function ty(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function gR(l,h){var f=l.C,g=h.indexOf(`
`,f);return g==-1?Cd:(f=Number(h.substring(f,g)),isNaN(f)?Z_:(g+=1,g+f>h.length?Cd:(h=h.slice(g,g+f),l.C=g+f,h)))}yr.prototype.cancel=function(){this.J=!0,_i(this)};function mu(l){l.S=Date.now()+l.I,ny(l,l.I)}function ny(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ko(m(l.ba,l),h)}function bd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(pR(this.i,this.A),this.L!=2&&(Wo(),Tt(17)),_i(this),this.s=2,Qo(this)):ny(this,this.S-l)};function Qo(l){l.j.G==0||l.J||ky(l.j,l)}function _i(l){bd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,q_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Dd(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||xd(f.h,l))){if(!l.K&&xd(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)Tu(f),Iu(f);else break e;Md(f),Tt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ko(m(f.Za,f),6e3));if(1>=sy(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vi(f,11)}else if((l.K||f.g==l)&&Tu(f),!y(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let ue=k[h];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const mt=ue[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=ue[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const _s=ue[5];_s!=null&&typeof _s=="number"&&0<_s&&(g=1.5*_s,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const dn=l.g;if(dn){const Au=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Au){var x=g.h;x.g||Au.indexOf("spdy")==-1&&Au.indexOf("quic")==-1&&Au.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Vd(x,x.h),x.h=null))}if(g.D){const Ud=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ud&&(g.ya=Ud,we(g.I,g.D,Ud))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=l;if(g.qa=by(g,g.J?g.ia:null,g.W),$.K){oy(g.h,$);var ge=$,ot=g.L;ot&&(ge.I=ot),ge.B&&(bd(ge),mu(ge)),g.g=$}else Py(g);0<f.i.length&&Eu(f)}else ue[0]!="stop"&&ue[0]!="close"||vi(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?vi(f,7):Ld(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}Wo(4)}catch{}}var _R=class{constructor(l,h){this.g=l,this.map=h}};function ry(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function iy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function sy(l){return l.h?1:l.g?l.g.size:0}function xd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Vd(l,h){l.g?l.g.add(h):l.h=h}function oy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}ry.prototype.cancel=function(){if(this.i=ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ay(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return C(l.i)}function yR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],f=l.length,g=0;g<f;g++)h.push(l[g]);return h}h=[],f=0;for(g in l)h[f++]=l[g];return h}function vR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const g in l)h[f++]=g;return h}}}function ly(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=vR(l),g=yR(l),k=g.length,x=0;x<k;x++)h.call(void 0,g[x],f&&f[x],l)}var uy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wR(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),k=null;if(0<=g){var x=l[f].substring(0,g);k=l[f].substring(g+1)}else x=l[f];h(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function yi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof yi){this.h=l.h,gu(this,l.j),this.o=l.o,this.g=l.g,_u(this,l.s),this.l=l.l;var h=l.i,f=new Xo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),cy(this,f),this.m=l.m}else l&&(h=String(l).match(uy))?(this.h=!1,gu(this,h[1]||"",!0),this.o=Yo(h[2]||""),this.g=Yo(h[3]||"",!0),_u(this,h[4]),this.l=Yo(h[5]||"",!0),cy(this,h[6]||"",!0),this.m=Yo(h[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}yi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Jo(h,hy,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Jo(h,hy,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(Jo(f,f.charAt(0)=="/"?TR:ER,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",Jo(f,AR)),l.join("")};function Hn(l){return new yi(l)}function gu(l,h,f){l.j=f?Yo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function _u(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function cy(l,h,f){h instanceof Xo?(l.i=h,PR(l.i,l.h)):(f||(h=Jo(h,SR)),l.i=new Xo(h,l.h))}function we(l,h,f){l.i.set(h,f)}function yu(l){return we(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Jo(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,IR),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function IR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hy=/[#\/\?@]/g,ER=/[#\?:]/g,TR=/[#\?]/g,SR=/[#\?@]/g,AR=/#/g;function Xo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&wR(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Xo.prototype,n.add=function(l,h){vr(this),this.i=null,l=ms(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function dy(l,h){vr(l),h=ms(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function fy(l,h){return vr(l),h=ms(l,h),l.g.has(h)}n.forEach=function(l,h){vr(this),this.g.forEach(function(f,g){f.forEach(function(k){l.call(h,k,g,this)},this)},this)},n.na=function(){vr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=l[g];for(let x=0;x<k.length;x++)f.push(h[g])}return f},n.V=function(l){vr(this);let h=[];if(typeof l=="string")fy(this,l)&&(h=h.concat(this.g.get(ms(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},n.set=function(l,h){return vr(this),this.i=null,l=ms(this,l),fy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function py(l,h,f){dy(l,h),0<f.length&&(l.i=null,l.g.set(ms(l,h),C(f)),l.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const x=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var k=x;$[g]!==""&&(k+="="+encodeURIComponent(String($[g]))),l.push(k)}}return this.i=l.join("&")};function ms(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function PR(l,h){h&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(dy(this,g),py(this,k,f))},l)),l.j=h}function RR(l,h){const f=new Ho;if(a.Image){const g=new Image;g.onload=I(wr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=I(wr,f,"TestLoadImage: error",!1,h,g),g.onabort=I(wr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=I(wr,f,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function kR(l,h){const f=new Ho,g=new AbortController,k=setTimeout(()=>{g.abort(),wr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(x=>{clearTimeout(k),x.ok?wr(f,"TestPingServer: ok",!0,h):wr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),wr(f,"TestPingServer: error",!1,h)})}function wr(l,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function CR(){this.g=new hR}function NR(l,h,f){const g=f||"";try{ly(l,function(k,x){let $=k;c(k)&&($=Sd(k)),h.push(g+x+"="+encodeURIComponent($))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Zo(l){this.l=l.Ub||null,this.j=l.eb||!1}R(Zo,Ad),Zo.prototype.g=function(){return new vu(this.l,this.j)},Zo.prototype.i=function(l){return function(){return l}}({});function vu(l,h){pt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(vu,pt),n=vu.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ta(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;my(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function my(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ea(this):ta(this),this.readyState==3&&my(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,ea(this))},n.Qa=function(l){this.g&&(this.response=l,ea(this))},n.ga=function(){this.g&&ea(this)};function ea(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ta(l)}n.setRequestHeader=function(l,h){this.u.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function ta(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(vu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function gy(l){let h="";return F(l,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Od(l,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=gy(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):we(l,h,f))}function xe(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(xe,pt);var bR=/^https?$/i,DR=["POST","PUT"];n=xe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kd.g(),this.v=this.o?G_(this.o):G_(kd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(x){_y(this,x);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(DR,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,$]of f)this.g.setRequestHeader(x,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wy(this),this.u=!0,this.g.send(l),this.u=!1}catch(x){_y(this,x)}};function _y(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,yy(l),wu(l)}function yy(l){l.A||(l.A=!0,Et(l,"complete"),Et(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Et(this,"complete"),Et(this,"abort"),wu(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wu(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vy(this):this.bb())},n.bb=function(){vy(this)};function vy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Qn(l)!=4||l.Z()!=2)){if(l.u&&Qn(l)==4)z_(l.Ea,0,l);else if(Et(l,"readystatechange"),Qn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var k=String(l.D).match(uy)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),g=!bR.test(k?k.toLowerCase():"")}f=g}if(f)Et(l,"complete"),Et(l,"success");else{l.m=6;try{var x=2<Qn(l)?l.g.statusText:""}catch{x=""}l.l=x+" ["+l.Z()+"]",yy(l)}}finally{wu(l)}}}}function wu(l,h){if(l.g){wy(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Et(l,"ready");try{f.onreadystatechange=g}catch{}}}function wy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Qn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),cR(h)}};function Iy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function xR(l){const h={};l=(l.g&&2<=Qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var f=P(l[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[k]||[];h[k]=x,x.push(f)}v(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function na(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function Ey(l){this.Aa=0,this.i=[],this.j=new Ho,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=na("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=na("baseRetryDelayMs",5e3,l),this.cb=na("retryDelaySeedMs",1e4,l),this.Wa=na("forwardChannelMaxRetries",2,l),this.wa=na("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ry(l&&l.concurrentRequestLimit),this.Da=new CR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ey.prototype,n.la=8,n.G=1,n.connect=function(l,h,f,g){Tt(0),this.W=l,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=by(this,null,this.W),Eu(this)};function Ld(l){if(Ty(l),l.G==3){var h=l.U++,f=Hn(l.I);if(we(f,"SID",l.K),we(f,"RID",h),we(f,"TYPE","terminate"),ra(l,f),h=new yr(l,l.j,h),h.L=2,h.v=yu(Hn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.v,f=!0),f||(h.g=Dy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),mu(h)}Ny(l)}function Iu(l){l.g&&(Fd(l),l.g.cancel(),l.g=null)}function Ty(l){Iu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Tu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Eu(l){if(!iy(l.h)&&!l.s){l.s=!0;var h=l.Ga;jn||ee(),G||(jn(),G=!0),J.add(h,l),l.B=0}}function VR(l,h){return sy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ko(m(l.Ga,l,h),Cy(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new yr(this,this.j,l);let x=this.o;if(this.S&&(x?(x=_(x),E(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ay(this,k,h),f=Hn(this.I),we(f,"RID",l),we(f,"CVER",22),this.D&&we(f,"X-HTTP-Session-Id",this.D),ra(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(gy(x)))+"&"+h:this.m&&Od(f,this.m,x)),Vd(this.h,k),this.Ua&&we(f,"TYPE","init"),this.P?(we(f,"$req",h),we(f,"SID","null"),k.T=!0,Nd(k,f,null)):Nd(k,f,h),this.G=2}}else this.G==3&&(l?Sy(this,l):this.i.length==0||iy(this.h)||Sy(this))};function Sy(l,h){var f;h?f=h.l:f=l.U++;const g=Hn(l.I);we(g,"SID",l.K),we(g,"RID",f),we(g,"AID",l.T),ra(l,g),l.m&&l.o&&Od(g,l.m,l.o),f=new yr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Ay(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Vd(l.h,f),Nd(f,g,h)}function ra(l,h){l.H&&F(l.H,function(f,g){we(h,g,f)}),l.l&&ly({},function(f,g){we(h,g,f)})}function Ay(l,h,f){f=Math.min(l.i.length,f);var g=l.l?m(l.l.Na,l.l,l):null;e:{var k=l.i;let x=-1;for(;;){const $=["count="+f];x==-1?0<f?(x=k[0].g,$.push("ofs="+x)):x=0:$.push("ofs="+x);let ge=!0;for(let ot=0;ot<f;ot++){let ue=k[ot].g;const mt=k[ot].map;if(ue-=x,0>ue)x=Math.max(0,k[ot].g-100),ge=!1;else try{NR(mt,$,"req"+ue+"_")}catch{g&&g(mt)}}if(ge){g=$.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,g}function Py(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;jn||ee(),G||(jn(),G=!0),J.add(h,l),l.v=0}}function Md(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ko(m(l.Fa,l),Cy(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Ry(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ko(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Iu(this),Ry(this))};function Fd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ry(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Hn(l.qa);we(h,"RID","rpc"),we(h,"SID",l.K),we(h,"AID",l.T),we(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&we(h,"TO",l.ja),we(h,"TYPE","xmlhttp"),ra(l,h),l.m&&l.o&&Od(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=yu(Hn(h)),f.m=null,f.P=!0,ey(f,l)}n.Za=function(){this.C!=null&&(this.C=null,Iu(this),Md(this),Tt(19))};function Tu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ky(l,h){var f=null;if(l.g==h){Tu(l),Fd(l),l.g=null;var g=2}else if(xd(l.h,h))f=h.D,oy(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=l.B;g=du(),Et(g,new Y_(g,f)),Eu(l)}else Py(l);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&VR(l,h)||g==2&&Md(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),k){case 1:vi(l,5);break;case 4:vi(l,10);break;case 3:vi(l,6);break;default:vi(l,2)}}}function Cy(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function vi(l,h){if(l.j.info("Error code "+h),h==2){var f=m(l.fb,l),g=l.Xa;const k=!g;g=new yi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gu(g,"https"),yu(g),k?RR(g.toString(),f):kR(g.toString(),f)}else Tt(2);l.G=0,l.l&&l.l.sa(h),Ny(l),Ty(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Ny(l){if(l.G=0,l.ka=[],l.l){const h=ay(l.h);(h.length!=0||l.i.length!=0)&&(O(l.ka,h),O(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function by(l,h,f){var g=f instanceof yi?Hn(f):new yi(f);if(g.g!="")h&&(g.g=h+"."+g.g),_u(g,g.s);else{var k=a.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var x=new yi(null);g&&gu(x,g),h&&(x.g=h),k&&_u(x,k),f&&(x.l=f),g=x}return f=l.D,h=l.ya,f&&h&&we(g,f,h),we(g,"VER",l.la),ra(l,g),g}function Dy(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new xe(new Zo({eb:f})):new xe(l.pa),h.Ha(l.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xy(){}n=xy.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Su(){}Su.prototype.g=function(l,h){return new jt(l,h)};function jt(l,h){pt.call(this),this.g=new Ey(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new gs(this)}R(jt,pt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Ld(this.g)},jt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=Sd(l),l=f);h.i.push(new _R(h.Ya++,l)),h.G==3&&Eu(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,Ld(this.g),delete this.g,jt.aa.N.call(this)};function Vy(l){Pd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(Vy,Pd);function Oy(){Rd.call(this),this.status=1}R(Oy,Rd);function gs(l){this.g=l}R(gs,xy),gs.prototype.ua=function(){Et(this.g,"a")},gs.prototype.ta=function(l){Et(this.g,new Vy(l))},gs.prototype.sa=function(l){Et(this.g,new Oy)},gs.prototype.ra=function(){Et(this.g,"b")},Su.prototype.createWebChannel=Su.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,k0=function(){return new Su},R0=function(){return du()},P0=gi,Rp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fu.NO_ERROR=0,fu.TIMEOUT=8,fu.HTTP_ERROR=6,uc=fu,J_.COMPLETE="complete",A0=J_,W_.EventType=Go,Go.OPEN="a",Go.CLOSE="b",Go.ERROR="c",Go.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Aa=W_,S0=Zo,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,T0=xe}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});const rw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new zl("@firebase/firestore");function Ss(){return Xr.logLevel}function WN(n){Xr.setLogLevel(n)}function M(n,...e){if(Xr.logLevel<=te.DEBUG){const t=e.map(fg);Xr.debug(`Firestore (${bo}): ${n}`,...t)}}function $e(n,...e){if(Xr.logLevel<=te.ERROR){const t=e.map(fg);Xr.error(`Firestore (${bo}): ${n}`,...t)}}function wn(n,...e){if(Xr.logLevel<=te.WARN){const t=e.map(fg);Xr.warn(`Firestore (${bo}): ${n}`,...t)}}function fg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+n;throw $e(e),new Error(e)}function H(n,e){n||W()}function KN(n,e){n||W()}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class QN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YN{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new C0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new et(e)}}class JN{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XN{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new JN(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string"),this.R=t.token,new ZN(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function ho(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function b0(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Re(0,0))}static max(){return new Q(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends yl{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends yl{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return nb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(re.fromString(e))}static fromName(e){return new j(re.fromString(e).popFirst(5))}static empty(){return new j(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new re(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function kp(n){return n.fields.find(e=>e.kind===2)}function Si(n){return n.fields.filter(e=>e.kind!==2)}Xc.UNKNOWN_ID=-1;class cc{constructor(e,t){this.fieldPath=e,this.kind=t}}class vl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new vl(0,Jt.min())}}function D0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new Jt(i,j.empty(),e)}function x0(n){return new Jt(n.readTime,n.key,-1)}class Jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jt(Q.min(),j.empty(),-1)}static max(){return new Jt(Q.max(),j.empty(),-1)}}function pg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==V0)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new b((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new nt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ba(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=mg(r.target.error);this.V.reject(new Ba(e,i))}}static open(e,t,r,i){try{return new Fh(t,e.transaction(i,r))}catch(s){throw new Ba(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ib(t)}}class On{constructor(e,t,r){this.name=e,this.version=t,this.p=r,On.S(le())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),Ai(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!pl())return!1;if(On.C())return!0;const e=le(),t=On.S(e),r=0<t&&t<10,i=L0(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ba(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new L(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ba(e,o))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Fh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),b.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function L0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class rb{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ai(this.B.delete())}}class Ba extends L{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function hi(n){return n.name==="IndexedDbTransactionError"}class ib{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(M("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ai(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),Ai(this.store.add(e))}get(e){return Ai(this.store.get(e)).next(t=>(t===void 0&&(t=null),M("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),Ai(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),Ai(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new b((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new b((r,i)=>{t.onerror=s=>{const o=mg(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new rb(a),c=t(a.primaryKey,a.value,u);if(c instanceof b){const d=c.catch(p=>(u.done(),b.reject(p)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>b.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ai(n){return new b((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=mg(r.target.error);t(i)}})}let iw=!1;function mg(n){const e=On.S(le());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iw||(iw=!0,setTimeout(()=>{throw r},0)),r}}return n}class sb{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){M("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{M("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){hi(t)?M("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await ci(t)}await this.X(6e4)})}}class ob{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return M("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(M("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=x0(s);pg(o,r)>0&&(r=o)}),new Jt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mt.oe=-1;function $l(n){return n==null}function wl(n){return n===0&&1/n==-1/0}function M0(n){return typeof n=="number"&&Number.isInteger(n)&&!wl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sw(e)),e=ab(n.get(t),e);return sw(e)}function ab(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function sw(n){return n+""}function Nn(n){const e=n.length;if(H(e>=2),e===2)return H(n.charAt(0)===""&&n.charAt(1)===""),re.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&W(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:W()}s=o+2}return new re(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n,e){return[n,kt(e)]}function F0(n,e,t){return[n,kt(e),t]}const lb={},ub=["prefixPath","collectionGroup","readTime","documentId"],cb=["prefixPath","collectionGroup","documentId"],hb=["collectionGroup","readTime","prefixPath","documentId"],db=["canonicalId","targetId"],fb=["targetId","path"],pb=["path","targetId"],mb=["collectionId","parent"],gb=["indexId","uid"],_b=["uid","sequenceNumber"],yb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vb=["indexId","uid","orderedDocumentKey"],wb=["userId","collectionPath","documentId"],Ib=["userId","collectionPath","largestBatchId"],Eb=["userId","collectionGroup","largestBatchId"],U0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Tb=[...U0,"documentOverlays"],B0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],z0=B0,$0=[...z0,"indexConfiguration","indexState","indexEntries"],Sb=$0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends O0{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function it(n,e){const t=q(n);return On.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ls(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function j0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||lt.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new lt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,i,s){return this}insert(e,t,r){return new lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lw(this.data.getIterator())}getIteratorFrom(e){return new lw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class lw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vs(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new pe(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new q0("Invalid base64 string: "+s):s}}(e);return new Je(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const Pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(n){if(H(!!n),typeof n=="string"){let e=0;const t=Pb.exec(n);if(H(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(n.seconds),nanos:Oe(n.nanos)}}function Oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zr(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function gg(n){const e=n.mapValue.fields.__previous_value__;return Uh(e)?gg(e):e}function Il(n){const e=ur(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ei{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},dc={nullValue:"NULL_VALUE"};function Hi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uh(n)?4:G0(n)?9007199254740991:10:W()}function Fn(n,e){if(n===e)return!0;const t=Hi(n);if(t!==Hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Il(n).isEqual(Il(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?wl(o)===wl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ho(n.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(aw(o)!==aw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Fn(o[u],a[u])))return!1;return!0}(n,e);default:return W()}}function El(n,e){return(n.values||[]).find(t=>Fn(t,e))!==void 0}function ti(n,e){if(n===e)return 0;const t=Hi(n),r=Hi(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return uw(n.timestampValue,e.timestampValue);case 4:return uw(Il(n),Il(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Zr(s),u=Zr(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=X(a[c],u[c]);if(d!==0)return d}return X(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(Oe(s.latitude),Oe(o.latitude));return a!==0?a:X(Oe(s.longitude),Oe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=ti(a[c],u[c]);if(d)return d}return X(a.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Or.mapValue&&o===Or.mapValue)return 0;if(s===Or.mapValue)return 1;if(o===Or.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=X(u[p],d[p]);if(m!==0)return m;const I=ti(a[u[p]],c[d[p]]);if(I!==0)return I}return X(u.length,d.length)}(n.mapValue,e.mapValue);default:throw W()}}function uw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=ur(n),r=ur(e),i=X(t.seconds,r.seconds);return i!==0?i:X(t.nanos,r.nanos)}function fo(n){return Np(n)}function Np(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ur(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Np(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Np(t.fields[o])}`;return i+"}"}(n.mapValue):W()}function Qi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bp(n){return!!n&&"integerValue"in n}function Tl(n){return!!n&&"arrayValue"in n}function cw(n){return!!n&&"nullValue"in n}function hw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fc(n){return!!n&&"mapValue"in n}function za(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ls(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=za(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=za(n.arrayValue.values[t]);return e}return Object.assign({},n)}function G0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kb(n){return"nullValue"in n?dc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Qi(ei.empty(),j.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:W()}function Cb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Qi(ei.empty(),j.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Or:W()}function dw(n,e){const t=ti(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function fw(n,e){const t=ti(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(t)}setAll(e){let t=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=za(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());fc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ls(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(za(this.value))}}function W0(n){const e=[];return ls(n.fields,(t,r)=>{const i=new Ae([t]);if(fc(r)){const s=W0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,Q.min(),Q.min(),Q.min(),ut.empty(),0)}static newFoundDocument(e,t,r,i){return new Ee(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,Q.min(),Q.min(),ut.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,Q.min(),Q.min(),ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){this.position=e,this.inclusive=t}}function pw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=ti(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{}class ie extends K0{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bb(e,t,r):t==="array-contains"?new Vb(e,r):t==="in"?new Z0(e,r):t==="not-in"?new Ob(e,r):t==="array-contains-any"?new Lb(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Db(e,r):new xb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ti(t,this.value)):t!==null&&Hi(this.value)===Hi(t)&&this.matchesComparison(ti(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends K0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new de(e,t)}matches(e){return po(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function po(n){return n.op==="and"}function Dp(n){return n.op==="or"}function _g(n){return H0(n)&&po(n)}function H0(n){for(const e of n.filters)if(e instanceof de)return!1;return!0}function xp(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+fo(n.value);if(_g(n))return n.filters.map(e=>xp(e)).join(",");{const e=n.filters.map(t=>xp(t)).join(",");return`${n.op}(${e})`}}function Q0(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(n,e):n instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Q0(o,i.filters[a]),!0):!1}(n,e):void W()}function Y0(n,e){const t=n.filters.concat(e);return de.create(t,n.op)}function J0(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${fo(t.value)}`}(n):n instanceof de?function(t){return t.op.toString()+" {"+t.getFilters().map(J0).join(" ,")+"}"}(n):"Filter"}class bb extends ie{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class Db extends ie{constructor(e,t){super(e,"in",t),this.keys=X0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xb extends ie{constructor(e,t){super(e,"not-in",t),this.keys=X0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function X0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class Vb extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tl(t)&&El(t.arrayValue,this.value)}}class Z0 extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&El(this.value.arrayValue,t)}}class Ob extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!El(this.value.arrayValue,t)}}class Lb extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>El(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Vp(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Mb(n,e,t,r,i,s,o)}function Yi(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$l(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fo(r)).join(",")),e.ue=t}return e.ue}function jl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Nb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Q0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mw(n.startAt,e.startAt)&&mw(n.endAt,e.endAt)}function Zc(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function eh(n,e){return n.filters.filter(t=>t instanceof ie&&t.field.isEqual(e))}function gw(n,e,t){let r=dc,i=!0;for(const s of eh(n,e)){let o=dc,a=!0;switch(s.op){case"<":case"<=":o=kb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=dc}dw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];dw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function _w(n,e,t){let r=Or,i=!0;for(const s of eh(n,e)){let o=Or,a=!0;switch(s.op){case">=":case">":o=Cb(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Or}fw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];fw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eS(n,e,t,r,i,s,o,a){return new fr(n,e,t,r,i,s,o,a)}function Do(n){return new fr(n)}function yw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yg(n){return n.collectionGroup!==null}function Ys(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pe(Ae.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Sl(s,r))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new Sl(Ae.keyField(),r))}return e.ce}function Ct(n){const e=q(n);return e.le||(e.le=Fb(e,Ys(n))),e.le}function Fb(n,e){if(n.limitType==="F")return Vp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Sl(i.field,s)});const t=n.endAt?new ni(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ni(n.startAt.position,n.startAt.inclusive):null;return Vp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Op(n,e){const t=n.filters.concat([e]);return new fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function th(n,e,t){return new fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ql(n,e){return jl(Ct(n),Ct(e))&&n.limitType===e.limitType}function tS(n){return`${Yi(Ct(n))}|lt:${n.limitType}`}function As(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>J0(i)).join(", ")}]`),$l(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>fo(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>fo(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function Gl(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=pw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ys(r),i)||r.endAt&&!function(o,a,u){const c=pw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ys(r),i))}(n,e)}function nS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rS(n){return(e,t)=>{let r=!1;for(const i of Ys(n)){const s=Ub(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ub(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ti(u,c):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return j0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new ve(j.comparator);function Ut(){return Bb}const iS=new ve(j.comparator);function Pa(...n){let e=iS;for(const t of n)e=e.insert(t.key,t);return e}function sS(n){let e=iS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bn(){return $a()}function oS(){return $a()}function $a(){return new di(n=>n.toString(),(n,e)=>n.isEqual(e))}const zb=new ve(j.comparator),$b=new pe(j.comparator);function Z(...n){let e=$b;for(const t of n)e=e.add(t);return e}const jb=new pe(X);function vg(){return jb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function lS(n){return{integerValue:""+n}}function uS(n,e){return M0(e)?lS(e):aS(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this._=void 0}}function qb(n,e,t){return n instanceof mo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uh(s)&&(s=gg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Ji?hS(n,e):n instanceof Xi?dS(n,e):function(i,s){const o=cS(i,s),a=vw(o)+vw(i.Pe);return bp(o)&&bp(i.Pe)?lS(a):aS(i.serializer,a)}(n,e)}function Gb(n,e,t){return n instanceof Ji?hS(n,e):n instanceof Xi?dS(n,e):t}function cS(n,e){return n instanceof go?function(r){return bp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class mo extends Bh{}class Ji extends Bh{constructor(e){super(),this.elements=e}}function hS(n,e){const t=fS(e);for(const r of n.elements)t.some(i=>Fn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Xi extends Bh{constructor(e){super(),this.elements=e}}function dS(n,e){let t=fS(e);for(const r of n.elements)t=t.filter(i=>!Fn(i,r));return{arrayValue:{values:t}}}class go extends Bh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function vw(n){return Oe(n.integerValue||n.doubleValue)}function fS(n){return Tl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t){this.field=e,this.transform=t}}function Wb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ji&&i instanceof Ji||r instanceof Xi&&i instanceof Xi?ho(r.elements,i.elements,Fn):r instanceof go&&i instanceof go?Fn(r.Pe,i.Pe):r instanceof mo&&i instanceof mo}(n.transform,e.transform)}class Kb{constructor(e,t){this.version=e,this.transformResults=t}}class Pe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zh{}function pS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vo(n.key,Pe.none()):new xo(n.key,n.data,Pe.none());{const t=n.data,r=ut.empty();let i=new pe(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(n.key,r,new Ft(i.toArray()),Pe.none())}}function Hb(n,e,t){n instanceof xo?function(i,s,o){const a=i.value.clone(),u=Iw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof pr?function(i,s,o){if(!pc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Iw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ja(n,e,t,r){return n instanceof xo?function(s,o,a,u){if(!pc(s.precondition,o))return a;const c=s.value.clone(),d=Ew(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof pr?function(s,o,a,u){if(!pc(s.precondition,o))return a;const c=Ew(s.fieldTransforms,u,o),d=o.data;return d.setAll(mS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,a){return pc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Qb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(t===null&&(t=ut.empty()),t.set(r.field,s))}return t||null}function ww(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ho(r,i,(s,o)=>Wb(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xo extends zh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends zh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Iw(n,e,t){const r=new Map;H(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Gb(o,a,t[i]))}return r}function Ew(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,qb(s,o,e))}return r}class Vo extends zh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wg extends zh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Hb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ja(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ja(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=oS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=pS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(t,r)=>ww(t,r))&&ho(this.baseMutations,e.baseMutations,(t,r)=>ww(t,r))}}class Eg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){H(e.mutations.length===r.length);let i=function(){return zb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Eg(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,se;function gS(n){switch(n){default:return W();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function _S(n){if(n===void 0)return $e("GRPC error has no .code"),D.UNKNOWN;switch(n){case qe.OK:return D.OK;case qe.CANCELLED:return D.CANCELLED;case qe.UNKNOWN:return D.UNKNOWN;case qe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case qe.INTERNAL:return D.INTERNAL;case qe.UNAVAILABLE:return D.UNAVAILABLE;case qe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case qe.NOT_FOUND:return D.NOT_FOUND;case qe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case qe.ABORTED:return D.ABORTED;case qe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case qe.DATA_LOSS:return D.DATA_LOSS;default:return W()}}(se=qe||(qe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Ui([4294967295,4294967295],0);function Tw(n){const e=yS().encode(n),t=new E0;return t.update(e),new Uint8Array(t.digest())}function Sw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ui([t,r],0),new Ui([i,s],0)]}class Sg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(r<0)throw new Ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ui.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Ui.fromNumber(r)));return i.compare(Jb)===1&&(i=new Ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Tw(e),[r,i]=Sw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Sg(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Tw(e),[r,i]=Sw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Kl(Q.min(),i,new ve(X),Ut(),Z())}}class Hl{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hl(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class vS{constructor(e,t){this.targetId=e,this.me=t}}class wS{constructor(e,t,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Aw{constructor(){this.fe=0,this.ge=Rw(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Hl(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Rw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Xb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ut(),this.qe=Pw(),this.Qe=new ve(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Zc(s))if(r===0){const o=new j(s.path);this.Ue(t,o,Ee.newNoDocument(o,Q.min()))}else H(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof q0)return wn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Sg(o,i,s)}catch(u){return wn(u instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Zc(a.target)){const u=new j(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ee.newNoDocument(u,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let r=Z();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Kl(e,t,this.Qe,this.ke,r);return this.ke=Ut(),this.qe=Pw(),this.Qe=new ve(X),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Aw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Aw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pw(){return new ve(j.comparator)}function Rw(){return new ve(j.comparator)}const Zb={asc:"ASCENDING",desc:"DESCENDING"},eD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tD={and:"AND",or:"OR"};class nD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lp(n,e){return n.useProto3Json||$l(e)?e:{value:e}}function _o(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rD(n,e){return _o(n,e.toTimestamp())}function je(n){return H(!!n),Q.fromTimestamp(function(t){const r=ur(t);return new Re(r.seconds,r.nanos)}(n))}function Ag(n,e){return Mp(n,e).canonicalString()}function Mp(n,e){const t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ES(n){const e=re.fromString(n);return H(DS(e)),e}function Al(n,e){return Ag(n.databaseId,e.path)}function Ln(n,e){const t=ES(e);if(t.get(1)!==n.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(AS(t))}function TS(n,e){return Ag(n.databaseId,e)}function SS(n){const e=ES(n);return e.length===4?re.emptyPath():AS(e)}function Fp(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function AS(n){return H(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kw(n,e,t){return{name:Al(n,e),fields:t.value.mapValue.fields}}function PS(n,e,t){const r=Ln(n,e.name),i=je(e.updateTime),s=e.createTime?je(e.createTime):Q.min(),o=new ut({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function iD(n,e){return"found"in e?function(r,i){H(!!i.found),i.found.name,i.found.updateTime;const s=Ln(r,i.found.name),o=je(i.found.updateTime),a=i.found.createTime?je(i.found.createTime):Q.min(),u=new ut({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){H(!!i.missing),H(!!i.readTime);const s=Ln(r,i.missing),o=je(i.readTime);return Ee.newNoDocument(s,o)}(n,e):W()}function sD(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(H(d===void 0||typeof d=="string"),Je.fromBase64String(d||"")):(H(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Je.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?D.UNKNOWN:_S(c.code);return new L(d,c.message||"")}(o);t=new wS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ln(n,r.document.name),s=je(r.document.updateTime),o=r.document.createTime?je(r.document.createTime):Q.min(),a=new ut({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];t=new mc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ln(n,r.document),s=r.readTime?je(r.readTime):Q.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];t=new mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ln(n,r.document),s=r.removedTargetIds||[];t=new mc([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Yb(i,s),a=r.targetId;t=new vS(a,o)}}return t}function Pl(n,e){let t;if(e instanceof xo)t={update:kw(n,e.key,e.value)};else if(e instanceof Vo)t={delete:Al(n,e.key)};else if(e instanceof pr)t={update:kw(n,e.key,e.data),updateMask:hD(e.fieldMask)};else{if(!(e instanceof wg))return W();t={verify:Al(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof go)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(n,e.precondition)),t}function Up(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Pe.updateTime(je(s.updateTime)):s.exists!==void 0?Pe.exists(s.exists):Pe.none()}(e.currentDocument):Pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)H(a.setToServerValue==="REQUEST_TIME"),u=new mo;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new Ji(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new Xi(d)}else"increment"in a?u=new go(o,a.increment):W();const c=Ae.fromServerFormat(a.fieldPath);return new Wl(c,u)}(n,i)):[];if(e.update){e.update.name;const i=Ln(n,e.update.name),s=new ut({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ft(c.map(d=>Ae.fromServerFormat(d)))}(e.updateMask);return new pr(i,s,o,t,r)}return new xo(i,s,t,r)}if(e.delete){const i=Ln(n,e.delete);return new Vo(i,t)}if(e.verify){const i=Ln(n,e.verify);return new wg(i,t)}return W()}function oD(n,e){return n&&n.length>0?(H(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?je(i.updateTime):je(s);return o.isEqual(Q.min())&&(o=je(s)),new Kb(o,i.transformResults||[])}(t,e))):[]}function RS(n,e){return{documents:[TS(n,e.path)]}}function kS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=TS(n,i);const s=function(c){if(c.length!==0)return bS(de.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ps(m.field),direction:lD(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Lp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function CS(n){let e=SS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){H(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const m=NS(p);return m instanceof de&&_g(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(R){return new Sl(Rs(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,$l(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new ni(I,m)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new ni(I,m)}(t.endAt)),eS(e,i,o,s,a,"F",u,c)}function aD(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function NS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rs(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Rs(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rs(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(t.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(Rs(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return de.create(t.compositeFilter.filters.map(r=>NS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function lD(n){return Zb[n]}function uD(n){return eD[n]}function cD(n){return tD[n]}function Ps(n){return{fieldPath:n.canonicalString()}}function Rs(n){return Ae.fromServerFormat(n.fieldPath)}function bS(n){return n instanceof ie?function(t){if(t.op==="=="){if(hw(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NAN"}};if(cw(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hw(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NAN"}};if(cw(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(t.field),op:uD(t.op),value:t.value}}}(n):n instanceof de?function(t){const r=t.getFilters().map(i=>bS(i));return r.length===1?r[0]:{compositeFilter:{op:cD(t.op),filters:r}}}(n):W()}function hD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function DS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,r,i,s=Q.min(),o=Q.min(),a=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.ct=e}}function dD(n,e){let t;if(e.document)t=PS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=j.fromSegments(e.noDocument.path),i=es(e.noDocument.readTime);t=Ee.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=j.fromSegments(e.unknownDocument.path),i=es(e.unknownDocument.version);t=Ee.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Re(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),t}function Cw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:nh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Al(s,o.key),fields:o.data.value.mapValue.fields,updateTime:_o(s,o.version.toTimestamp()),createTime:_o(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Zi(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:t.path.toArray(),version:Zi(e.version)}}return r}function nh(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Zi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function es(n){const e=new Re(n.seconds,n.nanoseconds);return Q.fromTimestamp(e)}function Pi(n,e){const t=(e.baseMutations||[]).map(s=>Up(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Up(n.ct,s)),i=Re.fromMillis(e.localWriteTimeMs);return new Ig(e.batchId,i,t,r)}function ka(n){const e=es(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?es(n.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return H(s.documents.length===1),Ct(Do(SS(s.documents[0])))}(n.query):function(s){return Ct(CS(s))}(n.query),new er(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Je.fromBase64String(n.resumeToken))}function VS(n,e){const t=Zi(e.snapshotVersion),r=Zi(e.lastLimboFreeSnapshotVersion);let i;i=Zc(e.target)?RS(n.ct,e.target):kS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Yi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Pg(n){const e=CS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?th(e,e.limit,"L"):e}function yf(n,e){return new Tg(e.largestBatchId,Up(n.ct,e.overlayMutation))}function Nw(n,e){const t=e.path.lastSegment();return[n,kt(e.path.popLast()),t]}function bw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Zi(r.readTime),documentKey:kt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{getBundleMetadata(e,t){return Dw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:es(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Dw(e).put(function(i){return{bundleId:i.id,createTime:Zi(je(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return xw(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Pg(s.bundledQuery),readTime:es(s.readTime)}}(r)})}saveNamedQuery(e,t){return xw(e).put(function(i){return{name:i.name,readTime:Zi(je(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Dw(n){return it(n,"bundles")}function xw(n){return it(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new $h(e,r)}getOverlay(e,t){return da(e).get(Nw(this.userId,t)).next(r=>r?yf(this.serializer,r):null)}getOverlays(e,t){const r=bn();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Tg(t,o);i.push(this.ht(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(kt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(da(e).j("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,t,r){const i=bn(),s=kt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return da(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=yf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=bn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return da(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const p=yf(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>s)}ht(e,t){return da(e).put(function(i,s,o){const[a,u,c]=Nw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Pl(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function da(n){return it(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Oe(e.integerValue));else if("doubleValue"in e){const r=Oe(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),wl(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(t,20),typeof r=="string"&&(r=ur(r)),t.At(`${r.seconds||""}`),t.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Zr(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?G0(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):W()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const i of r)this.It(i,t)}gt(e,t){this.Et(t,37),j.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Ri.bt=new Ri;function pD(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Vw(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=pD(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class mD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ct(r.value),r=t.next();this.vt()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=t.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const t=this.Bt(e),r=Vw(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Bt(e),r=Vw(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ct(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class gD{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class _D{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class fa{constructor(){this.Gt=new mD,this.zt=new gD(this.Gt),this.jt=new _D(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ki(this.indexId,this.documentKey,this.arrayValue,r)}}function Er(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Ow(n.arrayValue,e.arrayValue),t!==0?t:(t=Ow(n.directionalValue,e.directionalValue),t!==0?t:j.comparator(n.documentKey,e.documentKey)))}function Ow(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.Yt=new pe((t,r)=>Ae.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(H(e.collectionGroup===this.collectionId),this.en)return!1;const t=kp(e);if(t!==void 0&&!this.nn(t))return!1;const r=Si(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.rn(a,u)||!this.sn(this.Zt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new pe(Ae.comparator);const t=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new cc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new cc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new cc(r.field,r.dir==="asc"?0:1)));return new Xc(Xc.UNKNOWN_ID,this.collectionId,t,vl.empty())}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n){var e,t;if(H(n instanceof ie||n instanceof de),n instanceof ie){if(n instanceof Z0){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ie.create(n.field,"==",s)))||[];return de.create(i,"or")}return n}const r=n.filters.map(i=>OS(i));return de.create(r,n.op)}function yD(n){if(n.getFilters().length===0)return[];const e=$p(OS(n));return H(LS(e)),Bp(e)||zp(e)?[e]:e.getFilters()}function Bp(n){return n instanceof ie}function zp(n){return n instanceof de&&_g(n)}function LS(n){return Bp(n)||zp(n)||function(t){if(t instanceof de&&Dp(t)){for(const r of t.getFilters())if(!Bp(r)&&!zp(r))return!1;return!0}return!1}(n)}function $p(n){if(H(n instanceof ie||n instanceof de),n instanceof ie)return n;if(n.filters.length===1)return $p(n.filters[0]);const e=n.filters.map(r=>$p(r));let t=de.create(e,n.op);return t=rh(t),LS(t)?t:(H(t instanceof de),H(po(t)),H(t.filters.length>1),t.filters.reduce((r,i)=>Rg(r,i)))}function Rg(n,e){let t;return H(n instanceof ie||n instanceof de),H(e instanceof ie||e instanceof de),t=n instanceof ie?e instanceof ie?function(i,s){return de.create([i,s],"and")}(n,e):Mw(n,e):e instanceof ie?Mw(e,n):function(i,s){if(H(i.filters.length>0&&s.filters.length>0),po(i)&&po(s))return Y0(i,s.getFilters());const o=Dp(i)?i:s,a=Dp(i)?s:i,u=o.filters.map(c=>Rg(c,a));return de.create(u,"or")}(n,e),rh(t)}function Mw(n,e){if(po(e))return Y0(e,n.getFilters());{const t=e.filters.map(r=>Rg(n,r));return de.create(t,"or")}}function rh(n){if(H(n instanceof ie||n instanceof de),n instanceof ie)return n;const e=n.getFilters();if(e.length===1)return rh(e[0]);if(H0(n))return n;const t=e.map(i=>rh(i)),r=[];return t.forEach(i=>{i instanceof ie?r.push(i):i instanceof de&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:de.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this._n=new kg}addToCollectionParentIndex(e,t){return this._n.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Jt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class kg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Uint8Array(0);class wD{constructor(e,t){this.databaseId=t,this.an=new kg,this.un=new di(r=>Yi(r),(r,i)=>jl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});const s={collectionId:r,parent:kt(i)};return Fw(e).put(s)}return b.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[b0(t),""],!1,!0);return Fw(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Nn(o.parent))}return r})}addFieldIndex(e,t){const r=pa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Is(e);return s.next(a=>{o.put(bw(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=pa(e),i=Is(e),s=ws(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=pa(e),r=ws(e),i=Is(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return b.forEach(this.cn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Lw(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=ws(e);let i=!0;const s=new Map;return b.forEach(this.cn(t),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Z();const a=[];return b.forEach(s,(u,c)=>{M("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Yi(t)}`);const d=function(A,V){const U=kp(V);if(U===void 0)return null;for(const F of eh(A,U.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),p=function(A,V){const U=new Map;for(const F of Si(V))for(const v of eh(A,F.fieldPath))switch(v.op){case"==":case"in":U.set(F.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return U.set(F.fieldPath.canonicalString(),v.value),Array.from(U.values())}return null}(c,u),m=function(A,V){const U=[];let F=!0;for(const v of Si(V)){const _=v.kind===0?gw(A,v.fieldPath,A.startAt):_w(A,v.fieldPath,A.startAt);U.push(_.value),F&&(F=_.inclusive)}return new ni(U,F)}(c,u),I=function(A,V){const U=[];let F=!0;for(const v of Si(V)){const _=v.kind===0?_w(A,v.fieldPath,A.endAt):gw(A,v.fieldPath,A.endAt);U.push(_.value),F&&(F=_.inclusive)}return new ni(U,F)}(c,u),R=this.hn(u,c,m),C=this.hn(u,c,I),O=this.Pn(u,c,p),T=this.In(u.indexId,d,R,m.inclusive,C,I.inclusive,O);return b.forEach(T,y=>r.G(y,t.limit).next(A=>{A.forEach(V=>{const U=j.fromSegments(V.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=yD(de.create(e.filters,"and")).map(r=>Vp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}In(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),d=[];for(let p=0;p<u;++p){const m=t?this.Tn(t[p/c]):Gu,I=this.En(e,m,r[p%c],i),R=this.dn(e,m,s[p%c],o),C=a.map(O=>this.En(e,m,O,!0));d.push(...this.createRange(I,R,C))}return d}En(e,t,r,i){const s=new ki(e,j.empty(),t,r);return i?s:s.Jt()}dn(e,t,r,i){const s=new ki(e,j.empty(),t,r);return i?s.Jt():s}ln(e,t){const r=new Lw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return b.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new pe(Ae.comparator),d=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}An(e,t){const r=new fa;for(const i of Si(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Ri.bt.Pt(s,o)}return r.Wt()}Tn(e){const t=new fa;return Ri.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){const r=new fa;return Ri.bt.Pt(Qi(this.databaseId,t),r.Ht(function(s){const o=Si(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,t,r){if(r===null)return[];let i=[];i.push(new fa);let s=0;for(const o of Si(e)){const a=r[s++];for(const u of i)if(this.Vn(t,o.fieldPath)&&Tl(a))i=this.mn(i,o,a);else{const c=u.Ht(o.kind);Ri.bt.Pt(a,c)}}return this.fn(i)}hn(e,t,r){return this.Pn(e,t,r.position)}fn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}mn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new fa;u.seed(a.Wt()),Ri.bt.Pt(o,u.Ht(t.kind)),s.push(u)}return s}Vn(e,t){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=pa(e),i=Is(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,p){const m=p?new vl(p.sequenceNumber,new Jt(es(p.readTime),new j(Nn(p.documentKey)),p.largestBatchId)):vl.empty(),I=d.fields.map(([R,C])=>new cc(Ae.fromServerFormat(R),C));return new Xc(d.indexId,d.collectionGroup,I,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=pa(e),s=Is(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>b.forEach(a,u=>s.put(bw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return b.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,u=>this.pn(e,i,u).next(c=>{const d=this.yn(s,u);return c.isEqual(d)?b.resolve():this.wn(e,s,u,c,d)}))))})}Sn(e,t,r,i){return ws(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,t.key),documentKey:t.key.path.toArray()})}bn(e,t,r,i){return ws(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,t.key),t.key.path.toArray()])}pn(e,t,r){const i=ws(e);let s=new pe(Er);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,t)])},(o,a)=>{s=s.add(new ki(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,t){let r=new pe(Er);const i=this.An(t,e);if(i==null)return r;const s=kp(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Tl(o))for(const a of o.arrayValue.values||[])r=r.add(new ki(t.indexId,e.key,this.Tn(a),i))}else r=r.add(new ki(t.indexId,e.key,Gu,i));return r}wn(e,t,r,i,s){M("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,d,p,m){const I=u.getIterator(),R=c.getIterator();let C=vs(I),O=vs(R);for(;C||O;){let T=!1,y=!1;if(C&&O){const A=d(C,O);A<0?y=!0:A>0&&(T=!0)}else C!=null?y=!0:T=!0;T?(p(O),O=vs(R)):y?(m(C),C=vs(I)):(C=vs(I),O=vs(R))}}(i,s,Er,a=>{o.push(this.Sn(e,t,r,a))},a=>{o.push(this.bn(e,t,r,a))}),b.waitFor(o)}gn(e){let t=1;return Is(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Er(o,a)).filter((o,a,u)=>!a||Er(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Er(o,e),u=Er(o,t);if(a===0)i[0]=e.Jt();else if(a>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Gu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Gu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Dn(e,t){return Er(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Uw)}getMinOffset(e,t){return b.mapArray(this.cn(t),r=>this.ln(e,r).next(i=>i||W())).next(Uw)}}function Fw(n){return it(n,"collectionParents")}function ws(n){return it(n,"indexEntries")}function pa(n){return it(n,"indexConfiguration")}function Is(n){return it(n,"indexState")}function Uw(n){H(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;pg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Jt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(d,p,m)=>(a++,m.delete()));s.push(u.next(()=>{H(a===1)}));const c=[];for(const d of t.mutations){const p=F0(e,d.key.path,t.batchId);s.push(i.delete(p)),c.push(d.key)}return b.waitFor(s).next(()=>c)}function ih(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw W();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(41943040,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class jh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,t,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new jh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=ks(e),o=Tr(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new Ig(a,t,r,i),c=function(I,R,C){const O=C.baseMutations.map(y=>Pl(I.ct,y)),T=C.mutations.map(y=>Pl(I.ct,y));return{userId:R,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:O,mutations:T}}(this.serializer,this.userId,u),d=[];let p=new pe((m,I)=>X(m.canonicalString(),I.canonicalString()));for(const m of i){const I=F0(this.userId,m.key.path,a);p=p.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(I,lb))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=u.keys()}),b.waitFor(d).next(()=>u)})}lookupMutationBatch(e,t){return Tr(e).get(t).next(r=>r?(H(r.userId===this.userId),Pi(this.serializer,r)):null)}vn(e,t){return this.Cn[t]?b.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Cn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=Pi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Tr(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).U("userMutationsIndex",t).next(r=>r.map(i=>Pi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=hc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ks(e).J({range:i},(o,a,u)=>{const[c,d,p]=o,m=Nn(d);if(c===this.userId&&t.path.isEqual(m))return Tr(e).get(p).next(I=>{if(!I)throw W();H(I.userId===this.userId),s.push(Pi(this.serializer,I))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(X);const i=[];return t.forEach(s=>{const o=hc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=ks(e).J({range:a},(c,d,p)=>{const[m,I,R]=c,C=Nn(I);m===this.userId&&s.path.isEqual(C)?r=r.add(R):p.done()});i.push(u)}),b.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=hc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(X);return ks(e).J({range:o},(u,c,d)=>{const[p,m,I]=u,R=Nn(m);p===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(I)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Tr(e).get(s).next(o=>{if(o===null)throw W();H(o.userId===this.userId),r.push(Pi(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return MS(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return b.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ks(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Nn(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,t){return FS(e,this.userId,t)}xn(e){return US(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function FS(n,e,t){const r=hc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ks(n).J({range:s,H:!0},(a,u,c)=>{const[d,p,m]=a;d===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function Tr(n){return it(n,"mutations")}function ks(n){return it(n,"documentMutations")}function US(n){return it(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ts(0)}static Ln(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new ts(t.highestTargetId);return t.highestTargetId=r.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>Q.fromTimestamp(new Re(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.kn(e,i)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(t,r),this.kn(e,r))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Es(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Es(e).J((o,a)=>{const u=ka(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Es(e).J((r,i)=>{const s=ka(i);t(s)})}Bn(e){return zw(e).get("targetGlobalKey").next(t=>(H(t!==null),t))}kn(e,t){return zw(e).put("targetGlobalKey",t)}qn(e,t){return Es(e).put(VS(this.serializer,t))}Qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Yi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Es(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=ka(a);jl(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=br(e);return t.forEach(o=>{const a=kt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,t,r){const i=br(e);return b.forEach(t,s=>{const o=kt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=br(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=br(e);let s=Z();return i.J({range:r,H:!0},(o,a,u)=>{const c=Nn(o[1]),d=new j(c);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=kt(t.path),i=IDBKeyRange.bound([r],[b0(r)],!1,!0);let s=0;return br(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return Es(e).get(t).next(r=>r?ka(r):null)}}function Es(n){return it(n,"targets")}function zw(n){return it(n,"targetGlobal")}function br(n){return it(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w([n,e],[t,r]){const i=X(n,t);return i===0?X(e,r):i}class ED{constructor(e){this.Kn=e,this.buffer=new pe($w),this.$n=0}Un(){return++this.$n}Wn(e){const t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$w(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){M("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hi(t)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ci(t)}await this.zn(3e5)})}}class SD{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Mt.oe);const r=new ED(t);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Bw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bw):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ss()<=te.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function AD(n,e){return new SD(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,t){this.db=e,this.garbageCollector=AD(this,t)}Hn(e){const t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Zn(e){let t=0;return this.Jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(r,i)=>t(i))}addReference(e,t,r){return Wu(e,r)}removeReference(e,t,r){return Wu(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Wu(e,t)}er(e,t){return function(i,s){let o=!1;return US(i).Y(a=>FS(i,a,s).next(u=>(u&&(o=!0),b.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=t){const u=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),br(e).delete(function(p){return[0,kt(p.path)]}(o))))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Wu(e,t)}Xn(e,t){const r=br(e);let i,s=Mt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Mt.oe&&t(new j(Nn(i)),s),s=c,i=u):s=Mt.oe}).next(()=>{s!==Mt.oe&&t(new j(Nn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wu(n,e){return br(n).put(function(r,i){return{targetId:0,path:kt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.changes=new di(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return wi(e).put(r)}removeEntry(e,t,r){return wi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],nh(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.tr(e,r)))}getEntry(e,t){let r=Ee.newInvalidDocument(t);return wi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ma(t))},(i,s)=>{r=this.nr(t,s)}).next(()=>r)}rr(e,t){let r={size:0,document:Ee.newInvalidDocument(t)};return wi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ma(t))},(i,s)=>{r={document:this.nr(t,s),size:ih(s)}}).next(()=>r)}getEntries(e,t){let r=Ut();return this.ir(e,t,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,t){let r=Ut(),i=new ve(j.comparator);return this.ir(e,t,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,ih(o))}).next(()=>({documents:r,_r:i}))}ir(e,t,r){if(t.isEmpty())return b.resolve();let i=new pe(Gw);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ma(i.first()),ma(i.last())),o=i.getIterator();let a=o.getNext();return wi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const p=j.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Gw(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ma(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),nh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return wi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Ut();for(const p of c){const m=this.nr(j.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Gl(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=Ut();const o=qw(t,r),a=qw(t,Jt.max());return wi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const p=this.nr(j.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new kD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return jw(e).get("remoteDocumentGlobalKey").next(t=>(H(!!t),t))}tr(e,t){return jw(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){const r=dD(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ee.newInvalidDocument(e)}}function zS(n){return new RD(n)}class kD extends BS{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new di(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new pe((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(t.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Cw(this.ar.serializer,o);i=i.add(s.path.popLast());const c=ih(u);r+=c-a.size,t.push(this.ar.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Cw(this.ar.serializer,o.convertToNoDocument(Q.min()));t.push(this.ar.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ar.updateMetadata(e,r)),b.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(r=>(this.ur.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function jw(n){return it(n,"remoteDocumentGlobal")}function wi(n){return it(n,"remoteDocumentsV14")}function ma(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qw(n,e){const t=e.documentKey.path.toArray();return[n,nh(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Gw(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=X(t[s],r[s]),i)return i;return i=X(t.length,r.length),i||(i=X(t[t.length-2],r[r.length-2]),i||X(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ja(r.mutation,i,Ft.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=bn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Pa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=bn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ut();const o=$a(),a=function(){return $a()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof pr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ja(d.mutation,c,d.mutation.getFieldMask(),Re.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>{var p;return a.set(c,new CD(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,t){const r=$a();let i=new ve((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||Ft.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=oS();d.forEach(m=>{if(!s.has(m)){const I=pS(t.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(bn());let a=-1,u=s;return o.next(c=>b.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Z())).next(d=>({batchId:a,changes:sS(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=Pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Pa();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,u=>{const c=function(p,m){return new fr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ee.newInvalidDocument(d)))});let a=Pa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ja(d.mutation,c,Ft.empty(),Re.now()),Gl(t,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return b.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:je(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:Pg(i.bundledQuery),readTime:je(i.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.overlays=new ve(j.comparator),this.hr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bn();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=bn(),s=t.length+1,o=new j(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ve((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=bn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=bn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return b.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tg(t,r));let s=this.hr.get(t);s===void 0&&(s=Z(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.Pr=new pe(Xe.Ir),this.Tr=new pe(Xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new Xe(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new j(new re([])),r=new Xe(t,e),i=new Xe(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new j(new re([])),r=new Xe(t,e),i=new Xe(t,e+1);let s=Z();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Xe(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return j.comparator(e.key,t.key)||X(e.pr,t.pr)}static Er(e,t){return X(e.pr,t.pr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new pe(Xe.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ig(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),i=new Xe(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(X);return t.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new j(s),0);let a=new pe(X);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),b.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){H(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(t.mutations,i=>{const s=new Xe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new Xe(t,0),i=this.wr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.vr=e,this.docs=function(){return new ve(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=Ut();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ut();const o=t.path,a=new j(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pg(x0(d),r)<=0||(i.has(d.key)||Gl(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W()}Fr(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new VD(this)}getSize(e){return b.resolve(this.size)}}class VD extends BS{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.persistence=e,this.Mr=new di(t=>Yi(t),jl),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Cg,this.targetCount=0,this.Lr=ts.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),b.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.qn(t),b.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t){this.Br={},this.overlays={},this.kr=new Mt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new OD(this),this.indexManager=new vD,this.remoteDocumentCache=function(i){return new xD(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new xS(t),this.$r=new ND(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new DD(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new LD(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class LD extends O0{constructor(e){super(),this.currentSequenceNumber=e}}class qh{constructor(e){this.persistence=e,this.zr=new Cg,this.jr=null}static Hr(e){return new qh(e)}get Jr(){if(this.jr)return this.jr;throw W()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),b.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const i=j.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return b.or([()=>b.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Fh("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ow,{unique:!0}),u.createObjectStore("documentMutations")}(e),Ww(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Ww(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ow,{unique:!0});const p=c.store("mutations"),m=d.map(I=>p.put(I));return b.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:wb});c.createIndex("collectionPathOverlayIndex",Ib,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Eb,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:ub});c.createIndex("documentKeyIndex",cb),c.createIndex("collectionGroupIndex",hb)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:gb}).createIndex("sequenceNumberIndex",_b,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:yb}).createIndex("documentKeyIndex",vb,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),o}ei(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=ih(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>b.forEach(a,u=>{H(u.userId===s.userId);const c=Pi(this.serializer,u);return MS(e,s.userId,c).next(()=>{})}))}))}ti(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new re(o),c=function(p){return[0,kt(p)]}(u);s.push(t.get(c).next(d=>d?b.resolve():(p=>t.put({targetId:0,path:kt(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(s))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:mb});const r=t.store("collectionParents"),i=new kg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:kt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new re(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=Nn(a);return s(d.popLast())}))}ri(e){const t=e.store("targets");return t.J((r,i)=>{const s=ka(i),o=VS(this.serializer,s);return t.put(o)})}ii(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(p){return p.document?new j(re.fromString(p.document.name).popFirst(5)):p.noDocument?j.fromSegments(p.noDocument.path):p.unknownDocument?j.fromSegments(p.unknownDocument.path):W()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>b.waitFor(i))}si(e,t){const r=t.store("mutations"),i=zS(this.serializer),s=new jS(qh.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:Z();Pi(this.serializer,u).keys().forEach(p=>d=d.add(p)),a.set(u.userId,d)}),b.forEach(a,(u,c)=>{const d=new et(c),p=$h.lt(this.serializer,d),m=s.getIndexManager(d),I=jh.lt(d,this.serializer,m,s.referenceDelegate);return new $S(i,I,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Cp(t,Mt.oe),u).next()})})}}function Ww(n){n.createObjectStore("targetDocuments",{keyPath:fb}).createIndex("documentTargetsIndex",pb,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",db,{unique:!0}),n.createObjectStore("targetGlobal")}const vf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ng{constructor(e,t,r,i,s,o,a,u,c,d,p=16){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=p,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!Ng.D())throw new L(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new PD(this,i),this.Ti=t+"main",this.serializer=new xS(u),this.Ei=new On(this.Ti,this.ui,new MD(this.serializer)),this.Qr=new ID(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zS(this.serializer),this.$r=new fD,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(D.FAILED_PRECONDITION,vf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Mt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ku(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(t=>{t||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(hi(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return ga(e).get("owner").next(t=>b.resolve(this.Si(t)))}bi(e){return Ku(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=it(t,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?b.resolve(!0):ga(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new L(D.FAILED_PRECONDITION,vf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ku(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&M("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Cp(e,Mt.oe);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Li()}vi(e,t){return e.filter(r=>this.Ci(r.updateTimeMs,t)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Ku(e).U().next(t=>this.vi(t,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return jh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new wD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return $h.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,r){M("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===16?Sb:u===15?$0:u===14?z0:u===13?B0:u===12?Tb:u===11?U0:void W()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Cp(a,this.kr?this.kr.next():Mt.oe),t==="readwrite-primary"?this.gi(o).next(u=>!!u||this.pi(o)).next(u=>{if(!u)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new L(D.FAILED_PRECONDITION,V0);return r(o)}).next(u=>this.wi(o).next(()=>u)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return ga(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)&&!this.Si(t)&&!(this.ai||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(D.FAILED_PRECONDITION,vf)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ga(e).put("owner",t)}static D(){return On.D()}yi(e){const t=ga(e);return t.get("owner").next(r=>this.Si(r)?(M("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):b.resolve())}Ci(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;l0()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{const r=((t=this.di)===null||t===void 0?void 0:t.getItem(this.Fi(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ga(n){return it(n,"owner")}function Ku(n){return it(n,"clientMetadata")}function bg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dg(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return l0()?8:L0(le())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FD;return this.Ji(e,t,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(Ss()<=te.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",As(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(Ss()<=te.DEBUG&&M("QueryEngine","Query:",As(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ss()<=te.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",As(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):b.resolve())}ji(e,t){if(yw(t))return b.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=th(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(t,a);return this.Xi(t,c,o,u.readTime)?this.ji(e,th(t,null,"F")):this.es(e,c,t,u)}))})))}Hi(e,t,r,i){return yw(t)||i.isEqual(Q.min())?b.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,r,i)?b.resolve(null):(Ss()<=te.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),As(t)),this.es(e,o,t,D0(i,-1)).next(a=>a))})}Zi(e,t){let r=new pe(rS(e));return t.forEach((i,s)=>{Gl(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return Ss()<=te.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",As(t)),this.zi.getDocumentsMatchingQuery(e,t,Jt.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ve(X),this.rs=new di(s=>Yi(s),jl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $S(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function GS(n,e,t,r){return new UD(n,e,t,r)}async function WS(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function BD(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const p=c.batch,m=p.keys();let I=b.resolve();return m.forEach(R=>{I=I.next(()=>d.getEntry(u,R)).next(C=>{const O=c.docVersions.get(R);H(O!==null),C.version.compareTo(O)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Z();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function KS(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function zD(n,e){const t=q(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(t.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Je.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(C,O,T){return C.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,I,d)&&a.push(t.Qr.updateTargetData(s,I))});let u=Ut(),c=Z();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(HS(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(Q.min())){const d=t.Qr.getLastRemoteSnapshotVersion(s).next(p=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.ns=i,s))}function HS(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ut();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function $D(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yo(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Qr.allocateTargetId(r).next(o=>(i=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function vo(n,e,t){const r=q(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hi(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function sh(n,e,t){const r=q(n);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=q(u),m=p.rs.get(d);return m!==void 0?b.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,o,Ct(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:Z())).next(a=>(JS(r,nS(e),a),{documents:a,hs:s})))}function QS(n,e){const t=q(n),r=q(t.Qr),i=t.ns.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function YS(n,e){const t=q(n),r=t.ss.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.os.getAllFromCollectionGroup(i,e,D0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(JS(t,e,i),i))}function JS(n,e,t){let r=n.ss.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}async function jD(n,e,t,r){const i=q(n);let s=Z(),o=Ut();for(const c of t){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const p=e.Is(c);p.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,p)}const a=i.os.newChangeBuffer({trackRemovals:!0}),u=await yo(i,function(d){return Ct(Do(re.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>HS(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function qD(n,e,t=Z()){const r=await yo(n,Ct(Pg(e.bundledQuery))),i=q(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Je.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,t,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function Kw(n,e){return`firestore_clients_${n}_${e}`}function Hw(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function wf(n,e){return`firestore_targets_${n}_${e}`}class oh{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Es(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new L(i.error.code,i.error.message))),o?new oh(e,t,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qa{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Es(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new L(r.error.code,r.error.message))),s?new qa(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ah{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=vg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=M0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ah(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class xg{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new xg(t.clientId,t.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class jp{constructor(){this.activeTargetIds=vg()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class If{constructor(e,t,r,i,s){this.window=e,this.oi=t,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ve(X),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=Kw(this.persistenceKey,this.Vs),this.Ss=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new jp),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Fs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(Kw(this.persistenceKey,r));if(i){const s=ah.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const t=this.storage.getItem(this.vs);if(t){const r=this.xs(t);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,r){this.Ls(e,t,r),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(wf(this.persistenceKey,e));if(r){const i=qa.Es(e,r);i&&(t=i.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(wf(this.persistenceKey,e))}updateQueryState(e,t,r){this.qs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return M("SharedClientState","READ",e,t),t}setItem(e,t){M("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const t=e;if(t.storageArea===this.storage){if(M("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ws)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.bs.test(t.key)){if(t.newValue==null){const r=this.$s(t.key);return this.Us(r,null)}{const r=this.Ws(t.key,t.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.Gs(t.key,t.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const r=this.js(t.key,t.newValue);if(r)return this.Hs(r)}}else if(t.key===this.vs){if(t.newValue!==null){const r=this.xs(t.newValue);if(r)return this.Os(r)}}else if(t.key===this.Ss){const r=function(s){let o=Mt.oe;if(s!=null)try{const a=JSON.parse(s);H(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Mt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Fs){const r=this.Js(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(t)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,t,r){const i=new oh(this.currentUser,e,t,r),s=Hw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const t=Hw(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){const t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,r){const i=wf(this.persistenceKey,e),s=new qa(e,t,r);this.setItem(i,s.ds())}Ks(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){const t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){const r=this.$s(e);return ah.Es(r,t)}Gs(e,t){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return oh.Es(new et(s),i,t)}js(e,t){const r=this.Cs.exec(e),i=Number(r[1]);return qa.Es(i,t)}xs(e){return xg.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){const r=t?this.ps.insert(e,t):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=vg();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class XS{constructor(){this.no=new jp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new jp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu=null;function Ef(){return Hu===null?Hu=function(){return 268435456+Math.round(2147483648*Math.random())}():Hu++,"0x"+Hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class HD extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,o){const a=Ef(),u=this.vo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(t,u,c,i).then(d=>(M("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw wn("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(t,r,i,s,o,a){return this.Co(t,r,i,s,o)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}vo(t,r){const i=WD[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=Ef();return new Promise((o,a)=>{const u=new T0;u.setWithCredentials(!0),u.listenOnce(A0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case uc.NO_ERROR:const d=u.getResponseJson();M(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case uc.TIMEOUT:M(vt,`RPC '${e}' ${s} timed out`),a(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const p=u.getStatus();if(M(vt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(O){const T=O.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(T)>=0?T:D.UNKNOWN}(I.status);a(new L(R,I.message))}else a(new L(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new L(D.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{M(vt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);M(vt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Oo(e,t,r){const i=Ef(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=k0(),a=R0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new S0({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");M(vt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,I=!1;const R=new KD({lo:O=>{I?M(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(M(vt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),M(vt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},ho:()=>p.close()}),C=(O,T,y)=>{O.listen(T,A=>{try{y(A)}catch(V){setTimeout(()=>{throw V},0)}})};return C(p,Aa.EventType.OPEN,()=>{I||(M(vt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),C(p,Aa.EventType.CLOSE,()=>{I||(I=!0,M(vt,`RPC '${e}' stream ${i} transport closed`),R.po())}),C(p,Aa.EventType.ERROR,O=>{I||(I=!0,wn(vt,`RPC '${e}' stream ${i} transport errored:`,O),R.po(new L(D.UNAVAILABLE,"The operation could not be completed")))}),C(p,Aa.EventType.MESSAGE,O=>{var T;if(!I){const y=O.data[0];H(!!y);const A=y,V=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(V){M(vt,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let F=function(w){const E=qe[w];if(E!==void 0)return _S(E)}(U),v=V.message;F===void 0&&(F=D.INTERNAL,v="Unknown error status: "+U+" with message "+V.message),I=!0,R.po(new L(F,v)),p.close()}else M(vt,`RPC '${e}' stream ${i} received:`,y),R.yo(y)}}),C(a,P0.STAT_EVENT,O=>{O.stat===Rp.PROXY?M(vt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Rp.NOPROXY&&M(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof window<"u"?window:null}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){return new nD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Vg(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===D.RESOURCE_EXHAUSTED?($e(t.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new L(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QD extends eA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=sD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?je(o.readTime):Q.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=Fp(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=Zc(u)?{documents:RS(s,u)}:{query:kS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IS(s,o.resumeToken);const c=Lp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=_o(s,o.snapshotVersion.toTimestamp());const c=Lp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=aD(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=Fp(this.serializer),t.removeTarget=e,this.i_(t)}}class YD extends eA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=oD(e.writeResults,e.commitTime),r=je(e.commitTime);return this.listener.A_(r,t)}return H(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Fp(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Pl(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Mp(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(D.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Mp(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(D.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class XD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($e(t),this.y_=!1):M("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{fi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=q(u);c.M_.add(4),await Oo(c),c.N_.set("Unknown"),c.M_.delete(4),await Yl(c)}(this))})}),this.N_=new XD(r,i)}}async function Yl(n){if(fi(n))for(const e of n.x_)await e(!0)}async function Oo(n){for(const e of n.x_)await e(!1)}function Gh(n,e){const t=q(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Mg(t)?Lg(t):Mo(t).Xo()&&Og(t,e))}function wo(n,e){const t=q(n),r=Mo(t);t.F_.delete(e),r.Xo()&&tA(t,e),t.F_.size===0&&(r.Xo()?r.n_():fi(t)&&t.N_.set("Unknown"))}function Og(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mo(n).P_(e)}function tA(n,e){n.L_.xe(e),Mo(n).I_(e)}function Lg(n){n.L_=new Xb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Mo(n).start(),n.N_.w_()}function Mg(n){return fi(n)&&!Mo(n).Zo()&&n.F_.size>0}function fi(n){return q(n).M_.size===0}function nA(n){n.L_=void 0}async function ex(n){n.N_.set("Online")}async function tx(n){n.F_.forEach((e,t)=>{Og(n,e)})}async function nx(n,e){nA(n),Mg(n)?(n.N_.D_(e),Lg(n)):n.N_.set("Unknown")}async function rx(n,e,t){if(n.N_.set("Online"),e instanceof wS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lh(n,r)}else if(e instanceof mc?n.L_.Ke(e):e instanceof vS?n.L_.He(e):n.L_.We(e),!t.isEqual(Q.min()))try{const r=await KS(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Je.EMPTY_BYTE_STRING,d.snapshotVersion)),tA(s,u);const p=new er(d.target,u,c,d.sequenceNumber);Og(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await lh(n,r)}}async function lh(n,e,t){if(!hi(e))throw e;n.M_.add(1),await Oo(n),n.N_.set("Offline"),t||(t=()=>KS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Yl(n)})}function rA(n,e){return e().catch(t=>lh(n,t,e))}async function Lo(n){const e=q(n),t=ri(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;ix(e);)try{const i=await $D(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,sx(e,i)}catch(i){await lh(e,i)}iA(e)&&sA(e)}function ix(n){return fi(n)&&n.v_.length<10}function sx(n,e){n.v_.push(e);const t=ri(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function iA(n){return fi(n)&&!ri(n).Zo()&&n.v_.length>0}function sA(n){ri(n).start()}async function ox(n){ri(n).V_()}async function ax(n){const e=ri(n);for(const t of n.v_)e.d_(t.mutations)}async function lx(n,e,t){const r=n.v_.shift(),i=Eg.from(r,e,t);await rA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Lo(n)}async function ux(n,e){e&&ri(n).E_&&await async function(r,i){if(function(o){return gS(o)&&o!==D.ABORTED}(i.code)){const s=r.v_.shift();ri(r).t_(),await rA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lo(r)}}(n,e),iA(n)&&sA(n)}async function Yw(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=fi(t);t.M_.add(3),await Oo(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Yl(t)}async function qp(n,e){const t=q(n);e?(t.M_.delete(2),await Yl(t)):e||(t.M_.add(2),await Oo(t),t.N_.set("Unknown"))}function Mo(n){return n.B_||(n.B_=function(t,r,i){const s=q(t);return s.f_(),new QD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:ex.bind(null,n),To:tx.bind(null,n),Ao:nx.bind(null,n),h_:rx.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),Mg(n)?Lg(n):n.N_.set("Unknown")):(await n.B_.stop(),nA(n))})),n.B_}function ri(n){return n.k_||(n.k_=function(t,r,i){const s=q(t);return s.f_(),new YD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:ox.bind(null,n),Ao:ux.bind(null,n),R_:ax.bind(null,n),A_:lx.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Lo(n)):(await n.k_.stop(),n.v_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Fg(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,e){if($e("AsyncQueue",`${e}: ${n}`),hi(n))return new L(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Pa(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.q_=new ve(j.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):W():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Io{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Io(e,t,Js.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class hx{constructor(){this.queries=new di(e=>tS(e),ql),this.onlineState="Unknown",this.z_=new Set}}async function Ug(n,e){const t=q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new cx,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Fo(o,`Initialization of query '${As(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&zg(t)}async function Bg(n,e){const t=q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dx(n,e){const t=q(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&zg(t)}function fx(n,e,t){const r=q(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function zg(n){n.z_.forEach(e=>{e.next()})}var Gp,Xw;(Xw=Gp||(Gp={})).J_="default",Xw.Cache="cache";class $g{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Gp.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t){this.ia=e,this.byteLength=t}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.serializer=e}Ps(e){return Ln(this.serializer,e)}Is(e){return e.metadata.exists?PS(this.serializer,e.document,!1):Ee.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return je(e)}}class mx{constructor(e,t,r){this.oa=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=oA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++t;const r=re.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}aa(e){const t=new Map,r=new Zw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||Z()).add(s);t.set(o,a)}}return t}async complete(){const e=await jD(this.localStore,new Zw(this.serializer),this.documents,this.oa.id),t=this.aa(this.documents);for(const r of this.queries)await qD(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function oA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.key=e}}class lA{constructor(e){this.key=e}}class uA{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Z(),this.mutatedKeys=Z(),this.Ia=rS(e),this.Ta=new Js(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Jw,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Gl(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),C=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;m&&I?m.data.isEqual(I.data)?R!==C&&(r.track({type:3,doc:I}),O=!0):this.Ra(m,I)||(r.track({type:2,doc:I}),O=!0,(u&&this.Ia(I,u)>0||c&&this.Ia(I,c)<0)&&(a=!0)):!m&&I?(r.track({type:0,doc:I}),O=!0):m&&!I&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(a=!0)),O&&(I?(o=o.add(I),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(I,R){const C=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return C(I)-C(R)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const a=t&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Io(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Jw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Z(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new lA(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new aA(r))}),t}pa(e){this.la=e.hs,this.Pa=Z();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Io.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class gx{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _x{constructor(e){this.key=e,this.wa=!1}}class yx{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new di(a=>tS(a),ql),this.Da=new Map,this.Ca=new Set,this.va=new ve(j.comparator),this.Fa=new Map,this.Ma=new Cg,this.xa={},this.Oa=new Map,this.Na=ts.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function vx(n,e,t=!0){const r=Wh(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await cA(r,e,t,!0),i}async function wx(n,e){const t=Wh(n);await cA(t,e,!0,!1)}async function cA(n,e,t,r){const i=await yo(n.localStore,Ct(e)),s=i.targetId,o=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await jg(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Gh(n.remoteStore,i),a}async function jg(n,e,t,r,i){n.Ba=(p,m,I)=>async function(C,O,T,y){let A=O.view.da(T);A.Xi&&(A=await sh(C.localStore,O.query,!1).then(({documents:v})=>O.view.da(v,A)));const V=y&&y.targetChanges.get(O.targetId),U=y&&y.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(A,C.isPrimaryClient,V,U);return Wp(C,O.targetId,F.fa),F.snapshot}(n,p,m,I);const s=await sh(n.localStore,e,!0),o=new uA(e,s.hs),a=o.da(s.documents),u=Hl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Wp(n,t,c.fa);const d=new gx(e,t,o);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),c.snapshot}async function Ix(n,e,t){const r=q(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ql(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&wo(r.remoteStore,i.targetId),Eo(r,i.targetId)}).catch(ci)):(Eo(r,i.targetId),await vo(r.localStore,i.targetId,!0))}async function Ex(n,e){const t=q(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wo(t.remoteStore,r.targetId))}async function Tx(n,e,t){const r=Kg(n);try{const i=await function(o,a){const u=q(o),c=Re.now(),d=a.reduce((I,R)=>I.add(R.key),Z());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Ut(),C=Z();return u.os.getEntries(I,d).next(O=>{R=O,R.forEach((T,y)=>{y.isValidDocument()||(C=C.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(O=>{p=O;const T=[];for(const y of a){const A=Qb(y,p.get(y.key).overlayedDocument);A!=null&&T.push(new pr(y.key,A,W0(A.value.mapValue),Pe.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,T,a)}).next(O=>{m=O;const T=O.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(I,O.batchId,T)})}).then(()=>({batchId:m.batchId,changes:sS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ve(X)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,t),await mr(r,i.changes),await Lo(r.remoteStore)}catch(i){const s=Fo(i,"Failed to persist write");t.reject(s)}}async function hA(n,e){const t=q(n);try{const r=await zD(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Fa.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?H(o.wa):i.removedDocuments.size>0&&(H(o.wa),o.wa=!1))}),await mr(t,r,e)}catch(r){await ci(r)}}function eI(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=q(o);u.onlineState=a;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(a)&&(c=!0)}),c&&zg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sx(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ve(j.comparator);o=o.insert(s,Ee.newNoDocument(s,Q.min()));const a=Z().add(s),u=new Kl(Q.min(),new Map,new ve(X),o,a);await hA(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Wg(r)}else await vo(r.localStore,e,!1).then(()=>Eo(r,e,t)).catch(ci)}async function Ax(n,e){const t=q(n),r=e.batch.batchId;try{const i=await BD(t.localStore,e);Gg(t,r,null),qg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mr(t,i)}catch(i){await ci(i)}}async function Px(n,e,t){const r=q(n);try{const i=await function(o,a){const u=q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(H(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Gg(r,e,t),qg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mr(r,i)}catch(i){await ci(i)}}async function Rx(n,e){const t=q(n);fi(t.remoteStore)||M("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Oa.get(r)||[];i.push(e),t.Oa.set(r,i)}catch(r){const i=Fo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function qg(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Gg(n,e,t){const r=q(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Eo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||dA(n,r)})}function dA(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(wo(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Wg(n))}function Wp(n,e,t){for(const r of t)r instanceof aA?(n.Ma.addReference(r.key,e),kx(n,r)):r instanceof lA?(M("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||dA(n,r.key)):W()}function kx(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(M("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Wg(n))}function Wg(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new j(re.fromString(e)),r=n.Na.next();n.Fa.set(r,new _x(t)),n.va=n.va.insert(t,r),Gh(n.remoteStore,new er(Ct(Do(t.path)),r,"TargetPurposeLimboResolution",Mt.oe))}}async function mr(n,e,t){const r=q(n),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,t).then(c=>{if((c||t)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Dg.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=q(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.qi,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>b.forEach(m.Qi,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!hi(p))throw p;M("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.ns.get(m),R=I.snapshotVersion,C=I.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(m,C)}}}(r.localStore,s))}async function Cx(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await WS(t.localStore,e);t.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new L(D.CANCELLED,o))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(t,r.us)}}function Nx(n,e){const t=q(n),r=t.Fa.get(e);if(r&&r.wa)return Z().add(r.key);{let i=Z();const s=t.Da.get(e);if(!s)return i;for(const o of s){const a=t.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function bx(n,e){const t=q(n),r=await sh(t.localStore,e.query,!0),i=e.view.pa(r);return t.isPrimaryClient&&Wp(t,e.targetId,i.fa),i}async function Dx(n,e){const t=q(n);return YS(t.localStore,e).then(r=>mr(t,r))}async function xx(n,e,t,r){const i=q(n),s=await function(a,u){const c=q(a),d=q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",p=>d.vn(p,u).next(m=>m?c.localDocuments.getDocuments(p,m):b.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Lo(i.remoteStore):t==="acknowledged"||t==="rejected"?(Gg(i,e,r||null),qg(i,e),function(a,u){q(q(a).mutationQueue).Mn(u)}(i.localStore,e)):W(),await mr(i,s)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Vx(n,e){const t=q(n);if(Wh(t),Kg(t),e===!0&&t.La!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await tI(t,r.toArray());t.La=!0,await qp(t.remoteStore,!0);for(const s of i)Gh(t.remoteStore,s)}else if(e===!1&&t.La!==!1){const r=[];let i=Promise.resolve();t.Da.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Eo(t,o),vo(t.localStore,o,!0))),wo(t.remoteStore,o)}),await i,await tI(t,r),function(o){const a=q(o);a.Fa.forEach((u,c)=>{wo(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ve(j.comparator)}(t),t.La=!1,await qp(t.remoteStore,!1)}}async function tI(n,e,t){const r=q(n),i=[],s=[];for(const o of e){let a;const u=r.Da.get(o);if(u&&u.length!==0){a=await yo(r.localStore,Ct(u[0]));for(const c of u){const d=r.ba.get(c),p=await bx(r,d);p.snapshot&&s.push(p.snapshot)}}else{const c=await QS(r.localStore,o);a=await yo(r.localStore,c),await jg(r,fA(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function fA(n){return eS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Ox(n){return function(t){return q(q(t).persistence).Bi()}(q(n).localStore)}async function Lx(n,e,t,r){const i=q(n);if(i.La)return void M("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await YS(i.localStore,nS(s[0])),a=Kl.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Je.EMPTY_BYTE_STRING);await mr(i,o,a);break}case"rejected":await vo(i.localStore,e,!0),Eo(i,e,r);break;default:W()}}async function Mx(n,e,t){const r=Wh(n);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){M("SyncEngine","Adding an already active target "+i);continue}const s=await QS(r.localStore,i),o=await yo(r.localStore,s);await jg(r,fA(s),o.targetId,!1,o.resumeToken),Gh(r.remoteStore,o)}for(const i of t)r.Da.has(i)&&await vo(r.localStore,i,!1).then(()=>{wo(r.remoteStore,i),Eo(r,i)}).catch(ci)}}function Wh(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sx.bind(null,e),e.Sa.h_=dx.bind(null,e.eventManager),e.Sa.ka=fx.bind(null,e.eventManager),e}function Kg(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ax.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Px.bind(null,e),e}function Fx(n,e,t){const r=q(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(I,R){const C=q(I),O=je(R.createTime);return C.persistence.runTransaction("hasNewerBundle","readonly",T=>C.$r.getBundleMetadata(T,R.id)).then(T=>!!T&&T.createTime.compareTo(O)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(I){return{taskState:"Success",documentsLoaded:I.totalDocuments,bytesLoaded:I.totalBytes,totalDocuments:I.totalDocuments,totalBytes:I.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(oA(u));const c=new mx(u,s.localStore,o.serializer);let d=await o.qa();for(;d;){const m=await c._a(d);m&&a._updateProgress(m),d=await o.qa()}const p=await c.complete();return await mr(s,p.ca,void 0),await function(I,R){const C=q(I);return C.persistence.runTransaction("Save bundle","readwrite",O=>C.$r.saveBundleMetadata(O,R))}(s.localStore,u),a._completeWith(p.progress),Promise.resolve(p.ua)}catch(u){return wn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Kp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ql(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return GS(this.persistence,new qS,e.initialUser,this.serializer)}createPersistence(e){return new jS(qh.Hr,this.serializer)}createSharedClientState(e){return new XS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pA extends Kp{constructor(e,t,r){super(),this.Qa=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await Kg(this.Qa.syncEngine),await Lo(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return GS(this.persistence,new qS,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new TD(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new ob(t,this.persistence);return new sb(e.asyncQueue,r)}createPersistence(e){const t=bg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Ng(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ZS(),gc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new XS}}class Ux extends pA{constructor(e,t){super(e,t,!1),this.Qa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Qa.syncEngine;this.sharedClientState instanceof If&&(this.sharedClientState.syncEngine={Zs:xx.bind(null,t),Xs:Lx.bind(null,t),eo:Mx.bind(null,t),Bi:Ox.bind(null,t),Ys:Dx.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await Vx(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ZS();if(!If.D(t))throw new L(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=bg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new If(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>eI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cx.bind(null,this.syncEngine),await qp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hx}()}createDatastore(e){const t=Ql(e.databaseInfo.databaseId),r=function(s){return new HD(s)}(e.databaseInfo);return function(s,o,a,u){return new JD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new ZD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>eI(this.syncEngine,t,0),function(){return Qw.D()?new Qw:new GD}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,d){const p=new yx(i,s,o,a,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=q(r);M("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Oo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,t){this.Ua=e,this.serializer=t,this.metadata=new nt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const t=this.Wa.decode(e),r=Number(t);isNaN(r)&&this.ja(`length string (${t}) is not valid number`);const i=await this.Ha(r);return new px(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const t=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new L(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=q(i),a={documents:s.map(p=>Al(o.serializer,p))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,re.emptyPath(),a,s.length),c=new Map;u.forEach(p=>{const m=iD(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());H(!!m),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=j.fromPath(r);this.mutations.push(new wg(i,this.precondition(i)))}),await async function(r,i){const s=q(r),o={writes:i.map(a=>Pl(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,re.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw W();t=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new L(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Q.min())?Pe.exists(!1):Pe.updateTime(t):Pe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Q.min()))throw new L(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pe.updateTime(t)}return Pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new Vg(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new zx(this.datastore),t=this.tu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const t=this.updateFunction(e);return!$l(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gS(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=N0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _c(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qg(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Yw(e.remoteStore,i)),n._onlineComponents=e}function mA(n){return n.name==="FirebaseError"?n.code===D.FAILED_PRECONDITION||n.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Qg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await _c(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!mA(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await _c(n,new Kp)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await _c(n,new Kp);return n._offlineComponents}async function Hh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Hp(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Hp(n,new Hg))),n._onlineComponents}function gA(n){return Qg(n).then(e=>e.persistence)}function Yg(n){return Qg(n).then(e=>e.localStore)}function _A(n){return Hh(n).then(e=>e.remoteStore)}function Jg(n){return Hh(n).then(e=>e.syncEngine)}function qx(n){return Hh(n).then(e=>e.datastore)}async function To(n){const e=await Hh(n),t=e.eventManager;return t.onListen=vx.bind(null,e.syncEngine),t.onUnlisten=Ix.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=wx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ex.bind(null,e.syncEngine),t}function Gx(n){return n.asyncQueue.enqueue(async()=>{const e=await gA(n),t=await _A(n);return e.setNetworkEnabled(!0),function(i){const s=q(i);return s.M_.delete(0),Yl(s)}(t)})}function Wx(n){return n.asyncQueue.enqueue(async()=>{const e=await gA(n),t=await _A(n);return e.setNetworkEnabled(!1),async function(i){const s=q(i);s.M_.add(0),await Oo(s),s.N_.set("Offline")}(t)})}function Kx(n,e){const t=new nt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const p=q(c);return p.persistence.runTransaction("read document","readonly",m=>p.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new L(D.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Fo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Yg(n),e,t)),t.promise}function yA(n,e,t={}){const r=new nt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Kh({next:m=>{o.enqueueAndForget(()=>Bg(s,p));const I=m.docs.has(a);!I&&m.fromCache?c.reject(new L(D.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new L(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new $g(Do(a.path),d,{includeMetadataChanges:!0,ra:!0});return Ug(s,p)}(await To(n),n.asyncQueue,e,t,r)),r.promise}function Hx(n,e){const t=new nt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await sh(i,s,!0),u=new uA(s,a.hs),c=u.da(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=Fo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Yg(n),e,t)),t.promise}function vA(n,e,t={}){const r=new nt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Kh({next:m=>{o.enqueueAndForget(()=>Bg(s,p)),m.fromCache&&u.source==="server"?c.reject(new L(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new $g(a,d,{includeMetadataChanges:!0,ra:!0});return Ug(s,p)}(await To(n),n.asyncQueue,e,t,r)),r.promise}function Qx(n,e){const t=new Kh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).z_.add(s),s.next()}(await To(n),t)),()=>{t.$a(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).z_.delete(s)}(await To(n),t))}}function Yx(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?yS().encode(o):o,function(d,p){return new Bx(d,p)}(function(d,p){if(d instanceof Uint8Array)return nI(d,p);if(d instanceof ArrayBuffer)return nI(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Ql(e));n.asyncQueue.enqueueAndForget(async()=>{Fx(await Jg(n),i,r)})}function Jx(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=q(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Yg(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){if(!t)throw new L(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function IA(n,e,t,r){if(e===!0&&r===!0)throw new L(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iI(n){if(!j.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sI(n){if(j.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function ae(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qh(n);throw new L(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function EA(n,e){if(e<=0)throw new L(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HN;switch(r.type){case"firstParty":return new XN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rI.get(t);r&&(M("ComponentProvider","Removing Datastore"),rI.delete(t),r.terminate())}(this),Promise.resolve()}}function Xx(n,e,t,r={}){var i;const s=(n=ae(n,Jl))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=et.MOCK_USER;else{a=yC(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}n._authCredentials=new QN(new C0(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt=class TA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new TA(this.firestore,e,this._query)}},be=class SA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new SA(this.firestore,e,this._key)}},Kr=class AA extends Nt{constructor(e,t,r){super(e,t,Do(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new j(e))}withConverter(e){return new AA(this.firestore,e,this._path)}};function PA(n,e,...t){if(n=Y(n),Xg("collection","path",e),n instanceof Jl){const r=re.fromString(e,...t);return sI(r),new Kr(n,null,r)}{if(!(n instanceof be||n instanceof Kr))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return sI(r),new Kr(n.firestore,null,r)}}function Zx(n,e){if(n=ae(n,Jl),Xg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(n,null,function(r){return new fr(re.emptyPath(),r)}(e))}function uh(n,e,...t){if(n=Y(n),arguments.length===1&&(e=N0.newId()),Xg("doc","path",e),n instanceof Jl){const r=re.fromString(e,...t);return iI(r),new be(n,null,new j(r))}{if(!(n instanceof be||n instanceof Kr))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return iI(r),new be(n.firestore,n instanceof Kr?n.converter:null,new j(r))}}function RA(n,e){return n=Y(n),e=Y(e),(n instanceof be||n instanceof Kr)&&(e instanceof be||e instanceof Kr)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Zg(n,e){return n=Y(n),e=Y(e),n instanceof Nt&&e instanceof Nt&&n.firestore===e.firestore&&ql(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Vg(this,"async_queue_retry"),this.hu=()=>{const t=gc();t&&M("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=gc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new nt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!hi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Fg.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&W()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function Qp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class tV{constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=-1;let Le=class extends Jl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new eV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kA(this),this._firestoreClient.terminate()}};function st(n){return n._firestoreClient||kA(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,d){return new Rb(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,wA(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new jx(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function rV(n,e){NA(n=ae(n,Le));const t=st(n);if(t._uninitializedComponentsProvider)throw new L(D.FAILED_PRECONDITION,"SDK cache is already specified.");wn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Hg;return CA(t,i,new pA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function iV(n){NA(n=ae(n,Le));const e=st(n);if(e._uninitializedComponentsProvider)throw new L(D.FAILED_PRECONDITION,"SDK cache is already specified.");wn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Hg;return CA(e,r,new Ux(r,t.cacheSizeBytes))}function CA(n,e,t){const r=new nt;return n.asyncQueue.enqueue(async()=>{try{await _c(n,t),await Hp(n,e),r.resolve()}catch(i){const s=i;if(!mA(s))throw s;wn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function sV(n){if(n._initialized&&!n._terminated)throw new L(D.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!On.D())return Promise.resolve();const i=r+"main";await On.delete(i)}(bg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function oV(n){return function(t){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>Rx(await Jg(t),r)),r.promise}(st(n=ae(n,Le)))}function aV(n){return Gx(st(n=ae(n,Le)))}function lV(n){return Wx(st(n=ae(n,Le)))}function uV(n,e){const t=st(n=ae(n,Le)),r=new tV;return Yx(t,n._databaseId,e,r),r}function cV(n,e){return Jx(st(n=ae(n,Le)),e).then(t=>t?new Nt(n,null,t.query):null)}function NA(n){if(n._initialized||n._terminated)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Je.fromBase64String(e))}catch(t){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Un(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV=/^__.*__$/;class dV{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new xo(e,this.data,t,this.fieldTransforms)}}class bA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new pr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function DA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Jh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Jh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ch(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(DA(this.fu)&&hV.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class fV{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ql(e)}Fu(e,t,r,i=!1){return new Jh({fu:e,methodName:t,vu:r,path:Ae.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cs(n){const e=n._freezeSettings(),t=Ql(n._databaseId);return new fV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xh(n,e,t,r,i,s={}){const o=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);o_("Data must be an object, but it was:",o,r);const a=OA(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Yp(e,p,t);if(!o.contains(m))throw new L(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);MA(d,m)||d.push(m)}u=new Ft(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new dV(new ut(a),u,c)}class Xl extends us{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xl}}function xA(n,e,t){return new Jh({fu:3,vu:e.settings.vu,methodName:n._methodName,yu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class e_ extends us{_toFieldTransform(e){return new Wl(e.path,new mo)}isEqual(e){return e instanceof e_}}class t_ extends us{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=xA(this,e,!0),r=this.Mu.map(s=>hs(s,t)),i=new Ji(r);return new Wl(e.path,i)}isEqual(e){return e instanceof t_&&ml(this.Mu,e.Mu)}}class n_ extends us{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=xA(this,e,!0),r=this.Mu.map(s=>hs(s,t)),i=new Xi(r);return new Wl(e.path,i)}isEqual(e){return e instanceof n_&&ml(this.Mu,e.Mu)}}class r_ extends us{constructor(e,t){super(e),this.xu=t}_toFieldTransform(e){const t=new go(e.serializer,uS(e.serializer,this.xu));return new Wl(e.path,t)}isEqual(e){return e instanceof r_&&this.xu===e.xu}}function i_(n,e,t,r){const i=n.Fu(1,e,t);o_("Data must be an object, but it was:",i,r);const s=[],o=ut.empty();ls(r,(u,c)=>{const d=a_(e,u,t);c=Y(c);const p=i.Su(d);if(c instanceof Xl)s.push(d);else{const m=hs(c,p);m!=null&&(s.push(d),o.set(d,m))}});const a=new Ft(s);return new bA(o,a,i.fieldTransforms)}function s_(n,e,t,r,i,s){const o=n.Fu(1,e,t),a=[Yp(e,r,t)],u=[i];if(s.length%2!=0)throw new L(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Yp(e,s[m])),u.push(s[m+1]);const c=[],d=ut.empty();for(let m=a.length-1;m>=0;--m)if(!MA(c,a[m])){const I=a[m];let R=u[m];R=Y(R);const C=o.Su(I);if(R instanceof Xl)c.push(I);else{const O=hs(R,C);O!=null&&(c.push(I),d.set(I,O))}}const p=new Ft(c);return new bA(d,p,o.fieldTransforms)}function VA(n,e,t,r=!1){return hs(t,n.Fu(r?4:3,e))}function hs(n,e){if(LA(n=Y(n)))return o_("Unsupported field value:",e,n),OA(n,e);if(n instanceof us)return function(r,i){if(!DA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=hs(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:_o(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_o(i.serializer,s)}}if(r instanceof Yh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:IS(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ag(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Qh(r)}`)}(n,e)}function OA(n,e){const t={};return j0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(n,(r,i)=>{const s=hs(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function LA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Yh||n instanceof Un||n instanceof be||n instanceof us)}function o_(n,e,t){if(!LA(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Qh(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Yp(n,e,t){if((e=Y(e))instanceof ii)return e._internalPath;if(typeof e=="string")return a_(n,e);throw ch("Field path arguments must be of type string or ",n,!1,void 0,t)}const pV=new RegExp("[~\\*/\\[\\]]");function a_(n,e,t){if(e.search(pV)>=0)throw ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ii(...e.split("."))._internalPath}catch{throw ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ch(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new L(D.INVALID_ARGUMENT,a+n+u)}function MA(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mV extends Rl{data(){return super.data()}}function Zh(n,e){return typeof e=="string"?a_(n,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l_{}class Zl extends l_{}function Sr(n,e,...t){let r=[];e instanceof l_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof u_).length,a=s.filter(u=>u instanceof ed).length;if(o>1||o>0&&a>0)throw new L(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ed extends Zl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ed(e,t,r)}_apply(e){const t=this._parse(e);return BA(e._query,t),new Nt(e.firestore,e.converter,Op(e._query,t))}_parse(e){const t=cs(e.firestore);return function(s,o,a,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){lI(p,d);const I=[];for(const R of p)I.push(aI(u,s,R));m={arrayValue:{values:I}}}else m=aI(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||lI(p,d),m=VA(a,o,p,d==="in"||d==="not-in");return ie.create(c,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gV(n,e,t){const r=e,i=Zh("where",n);return ed._create(i,r,t)}class u_ extends l_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new u_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:de.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)BA(o,u),o=Op(o,u)}(e._query,t),new Nt(e.firestore,e.converter,Op(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class c_ extends Zl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new c_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Sl(s,o)}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function _V(n,e="asc"){const t=e,r=Zh("orderBy",n);return c_._create(r,t)}class td extends Zl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new td(e,t,r)}_apply(e){return new Nt(e.firestore,e.converter,th(e._query,this._limit,this._limitType))}}function yV(n){return EA("limit",n),td._create("limit",n,"F")}function vV(n){return EA("limitToLast",n),td._create("limitToLast",n,"L")}class nd extends Zl{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new nd(e,t,r)}_apply(e){const t=UA(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(i,s){return new fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function wV(...n){return nd._create("startAt",n,!0)}function IV(...n){return nd._create("startAfter",n,!1)}class rd extends Zl{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new rd(e,t,r)}_apply(e){const t=UA(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(i,s){return new fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function EV(...n){return rd._create("endBefore",n,!1)}function TV(...n){return rd._create("endAt",n,!0)}function UA(n,e,t,r){if(t[0]=Y(t[0]),t[0]instanceof Rl)return function(s,o,a,u,c){if(!u)throw new L(D.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const p of Ys(s))if(p.field.isKeyField())d.push(Qi(o,u.key));else{const m=u.data.field(p.field);if(Uh(m))throw new L(D.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const I=p.field.canonicalString();throw new L(D.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}d.push(m)}return new ni(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=cs(n.firestore);return function(o,a,u,c,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new L(D.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let R=0;R<d.length;R++){const C=d[R];if(m[R].field.isKeyField()){if(typeof C!="string")throw new L(D.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!yg(o)&&C.indexOf("/")!==-1)throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const O=o.path.child(re.fromString(C));if(!j.isDocumentKey(O))throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${O}' is not because it contains an odd number of segments.`);const T=new j(O);I.push(Qi(a,T))}else{const O=VA(u,c,C);I.push(O)}}return new ni(I,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function aI(n,e,t){if(typeof(t=Y(t))=="string"){if(t==="")throw new L(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yg(e)&&t.indexOf("/")!==-1)throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(re.fromString(t));if(!j.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qi(n,new j(r))}if(t instanceof be)return Qi(n,t._key);throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qh(t)}.`)}function lI(n,e){if(!Array.isArray(n)||n.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BA(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class h_{convertValue(e,t="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ls(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Yh(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=gg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Il(e));default:return null}}convertTimestamp(e){const t=ur(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);H(DS(r));const i=new ei(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(t)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class SV extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let cr=class extends Rl{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ga=class extends cr{data(e={}){return super.data(e)}},si=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new xi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ga(this._firestore,this._userDataWriter,r.key,r,new xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new xi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new xi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:AV(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function AV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}function zA(n,e){return n instanceof cr&&e instanceof cr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof si&&e instanceof si&&n._firestore===e._firestore&&Zg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(n){n=ae(n,be);const e=ae(n.firestore,Le);return yA(st(e),n._key).then(t=>d_(e,n,t))}class ds extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function RV(n){n=ae(n,be);const e=ae(n.firestore,Le),t=st(e),r=new ds(e);return Kx(t,n._key).then(i=>new cr(e,r,n._key,i,new xi(i!==null&&i.hasLocalMutations,!0),n.converter))}function kV(n){n=ae(n,be);const e=ae(n.firestore,Le);return yA(st(e),n._key,{source:"server"}).then(t=>d_(e,n,t))}function CV(n){n=ae(n,Nt);const e=ae(n.firestore,Le),t=st(e),r=new ds(e);return FA(n._query),vA(t,n._query).then(i=>new si(e,r,n,i))}function NV(n){n=ae(n,Nt);const e=ae(n.firestore,Le),t=st(e),r=new ds(e);return Hx(t,n._query).then(i=>new si(e,r,n,i))}function bV(n){n=ae(n,Nt);const e=ae(n.firestore,Le),t=st(e),r=new ds(e);return vA(t,n._query,{source:"server"}).then(i=>new si(e,r,n,i))}function uI(n,e,t){n=ae(n,be);const r=ae(n.firestore,Le),i=id(n.converter,e,t);return eu(r,[Xh(cs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Pe.none())])}function cI(n,e,t,...r){n=ae(n,be);const i=ae(n.firestore,Le),s=cs(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof ii?s_(s,"updateDoc",n._key,e,t,r):i_(s,"updateDoc",n._key,e),eu(i,[o.toMutation(n._key,Pe.exists(!0))])}function DV(n){return eu(ae(n.firestore,Le),[new Vo(n._key,Pe.none())])}function xV(n,e){const t=ae(n.firestore,Le),r=uh(n),i=id(n.converter,e);return eu(t,[Xh(cs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function hh(n,...e){var t,r,i;n=Y(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Qp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Qp(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(n instanceof be)c=ae(n.firestore,Le),d=Do(n._key.path),u={next:p=>{e[o]&&e[o](d_(c,n,p))},error:e[o+1],complete:e[o+2]};else{const p=ae(n,Nt);c=ae(p.firestore,Le),d=p._query;const m=new ds(c);u={next:I=>{e[o]&&e[o](new si(c,m,p,I))},error:e[o+1],complete:e[o+2]},FA(n._query)}return function(m,I,R,C){const O=new Kh(C),T=new $g(I,O,R);return m.asyncQueue.enqueueAndForget(async()=>Ug(await To(m),T)),()=>{O.$a(),m.asyncQueue.enqueueAndForget(async()=>Bg(await To(m),T))}}(st(c),d,a,u)}function VV(n,e){return Qx(st(n=ae(n,Le)),Qp(e)?e:{next:e})}function eu(n,e){return function(r,i){const s=new nt;return r.asyncQueue.enqueueAndForget(async()=>Tx(await Jg(r),i,s)),s.promise}(st(n),e)}function d_(n,e,t){const r=t.docs.get(e._key),i=new ds(n);return new cr(n,i,e._key,r,new xi(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LV=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=cs(e)}set(e,t,r){this._verifyNotCommitted();const i=Dr(e,this._firestore),s=id(i.converter,t,r),o=Xh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Pe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Dr(e,this._firestore);let o;return o=typeof(t=Y(t))=="string"||t instanceof ii?s_(this._dataReader,"WriteBatch.update",s._key,t,r,i):i_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Dr(e,this._firestore);return this._mutations=this._mutations.concat(new Vo(t._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Dr(n,e){if((n=Y(n)).firestore!==e)throw new L(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MV=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=cs(t)}get(t){const r=Dr(t,this._firestore),i=new SV(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return W();const o=s[0];if(o.isFoundDocument())return new Rl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Rl(this._firestore,i,r._key,null,r.converter);throw W()})}set(t,r,i){const s=Dr(t,this._firestore),o=id(s.converter,r,i),a=Xh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Dr(t,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof ii?s_(this._dataReader,"Transaction.update",o._key,r,i,s):i_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Dr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Dr(e,this._firestore),r=new ds(this._firestore);return super.get(e).then(i=>new cr(this._firestore,r,t._key,i._document,new xi(!1,!1),t.converter))}};function FV(n,e,t){n=ae(n,Le);const r=Object.assign(Object.assign({},OV),t);return function(s){if(s.maxAttempts<1)throw new L(D.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new nt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await qx(s);new $x(s.asyncQueue,c,a,o,u).Xa()}),u.promise}(st(n),i=>e(new MV(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(){return new Xl("deleteField")}function BV(){return new e_("serverTimestamp")}function zV(...n){return new t_("arrayUnion",n)}function $V(...n){return new n_("arrayRemove",n)}function jV(n){return new r_("increment",n)}(function(e,t=!0){(function(i){bo=i})(En),Mn(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Le(new YN(r.getProvider("auth-internal")),new eb(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Qt(rw,"4.6.3",e),Qt(rw,"4.6.3","esm2017")})();const qV="@firebase/firestore-compat",GV="0.3.32";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new L("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){if(typeof Uint8Array>"u")throw new L("unimplemented","Uint8Arrays are not available in this environment.")}function dI(){if(!Ab())throw new L("unimplemented","Blobs are unavailable in Firestore in this environment.")}class kl{constructor(e){this._delegate=e}static fromBase64String(e){return dI(),new kl(Un.fromBase64String(e))}static fromUint8Array(e){return hI(),new kl(Un.fromUint8Array(e))}toBase64(){return dI(),this._delegate.toBase64()}toUint8Array(){return hI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){return WV(n,["next","error","complete"])}function WV(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{enableIndexedDbPersistence(e,t){return rV(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return iV(e._delegate)}clearIndexedDbPersistence(e){return sV(e._delegate)}}class $A{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ei||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Xx(this._delegate,e,t,r)}enableNetwork(){return aV(this._delegate)}disableNetwork(){return lV(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,IA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return oV(this._delegate)}onSnapshotsInSync(e){return VV(this._delegate,e)}get app(){if(!this._appCompat)throw new L("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new So(this,PA(this._delegate,e))}catch(t){throw Pt(t,"collection()","Firestore.collection()")}}doc(e){try{return new sn(this,uh(this._delegate,e))}catch(t){throw Pt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new At(this,Zx(this._delegate,e))}catch(t){throw Pt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return FV(this._delegate,t=>e(new jA(this,t)))}batch(){return st(this._delegate),new qA(new LV(this._delegate,e=>eu(this._delegate,e)))}loadBundle(e){return uV(this._delegate,e)}namedQuery(e){return cV(this._delegate,e).then(t=>t?new At(this,t):null)}}class sd extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new kl(new Un(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return sn.forKey(t,this.firestore,null)}}function HV(n){WN(n)}class jA{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new sd(e)}get(e){const t=Vi(e);return this._delegate.get(t).then(r=>new Cl(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Vi(e);return r?(f_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Vi(e);return this._delegate.delete(t),this}}class qA{constructor(e){this._delegate=e}set(e,t,r){const i=Vi(e);return r?(f_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Vi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ns{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ga(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Nl(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ns.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new ns(e,new sd(e),t),i.set(t,s)),s}}ns.INSTANCES=new WeakMap;class sn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sd(e)}static forPath(e,t,r){if(e.length%2!==0)throw new L("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new sn(t,new be(t._delegate,r,new j(e)))}static forKey(e,t,r){return new sn(t,new be(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new So(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new So(this.firestore,PA(this._delegate,e))}catch(t){throw Pt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof be?RA(this._delegate,e):!1}set(e,t){t=f_("DocumentReference.set",t);try{return t?uI(this._delegate,e,t):uI(this._delegate,e)}catch(r){throw Pt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?cI(this._delegate,e):cI(this._delegate,e,t,...r)}catch(i){throw Pt(i,"updateDoc()","DocumentReference.update()")}}delete(){return DV(this._delegate)}onSnapshot(...e){const t=GA(e),r=WA(e,i=>new Cl(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return hh(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=RV(this._delegate):(e==null?void 0:e.source)==="server"?t=kV(this._delegate):t=PV(this._delegate),t.then(r=>new Cl(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new sn(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Pt(n,e,t){return n.message=n.message.replace(e,t),n}function GA(n){for(const e of n)if(typeof e=="object"&&!Jp(e))return e;return{}}function WA(n,e){var t,r;let i;return Jp(n[0])?i=n[0]:Jp(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Cl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new sn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return zA(this._delegate,e._delegate)}}class Nl extends Cl{data(e){const t=this._delegate.data(e);return this._delegate._converter||KN(t!==void 0),t}}class At{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sd(e)}where(e,t,r){try{return new At(this.firestore,Sr(this._delegate,gV(e,t,r)))}catch(i){throw Pt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new At(this.firestore,Sr(this._delegate,_V(e,t)))}catch(r){throw Pt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new At(this.firestore,Sr(this._delegate,yV(e)))}catch(t){throw Pt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new At(this.firestore,Sr(this._delegate,vV(e)))}catch(t){throw Pt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new At(this.firestore,Sr(this._delegate,wV(...e)))}catch(t){throw Pt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new At(this.firestore,Sr(this._delegate,IV(...e)))}catch(t){throw Pt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new At(this.firestore,Sr(this._delegate,EV(...e)))}catch(t){throw Pt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new At(this.firestore,Sr(this._delegate,TV(...e)))}catch(t){throw Pt(t,"endAt()","Query.endAt()")}}isEqual(e){return Zg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=NV(this._delegate):(e==null?void 0:e.source)==="server"?t=bV(this._delegate):t=CV(this._delegate),t.then(r=>new Xp(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=GA(e),r=WA(e,i=>new Xp(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return hh(this._delegate,t,r)}withConverter(e){return new At(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class QV{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Nl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Xp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new At(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Nl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new QV(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Nl(this._firestore,r))})}isEqual(e){return zA(this._delegate,e._delegate)}}class So extends At{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new sn(this.firestore,e):null}doc(e){try{return e===void 0?new sn(this.firestore,uh(this._delegate)):new sn(this.firestore,uh(this._delegate,e))}catch(t){throw Pt(t,"doc()","CollectionReference.doc()")}}add(e){return xV(this._delegate,e).then(t=>new sn(this.firestore,t))}isEqual(e){return RA(this._delegate,e._delegate)}withConverter(e){return new So(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vi(n){return ae(n,be)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(...e){this._delegate=new ii(...e)}static documentId(){return new p_(Ae.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._delegate=e}static serverTimestamp(){const e=BV();return e._methodName="FieldValue.serverTimestamp",new Ci(e)}static delete(){const e=UV();return e._methodName="FieldValue.delete",new Ci(e)}static arrayUnion(...e){const t=zV(...e);return t._methodName="FieldValue.arrayUnion",new Ci(t)}static arrayRemove(...e){const t=$V(...e);return t._methodName="FieldValue.arrayRemove",new Ci(t)}static increment(e){const t=jV(e);return t._methodName="FieldValue.increment",new Ci(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV={Firestore:$A,GeoPoint:Yh,Timestamp:Re,Blob:kl,Transaction:jA,WriteBatch:qA,DocumentReference:sn,DocumentSnapshot:Cl,Query:At,QueryDocumentSnapshot:Nl,QuerySnapshot:Xp,CollectionReference:So,FieldPath:p_,FieldValue:Ci,setLogLevel:HV,CACHE_SIZE_UNLIMITED:nV};function JV(n,e){n.INTERNAL.registerComponent(new cn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},YV)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(n){JV(n,(e,t)=>new $A(e,t,new KV)),n.registerVersion(qV,GV)}XV($n);function tu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const _a={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ts={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function KA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eO=ZV,tO=KA,HA=new zn("auth","Firebase",KA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new zl("@firebase/auth");function nO(n,...e){dh.logLevel<=te.WARN&&dh.warn(`Auth (${En}): ${n}`,...e)}function yc(n,...e){dh.logLevel<=te.ERROR&&dh.error(`Auth (${En}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,...e){throw g_(n,...e)}function Ye(n,...e){return g_(n,...e)}function m_(n,e,t){const r=Object.assign(Object.assign({},tO()),{[e]:t});return new zn("auth","Firebase",r).create(e,{appName:n.name})}function rt(n){return m_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(n,"argument-error"),m_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g_(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return HA.create(n,...e)}function z(n,e,...t){if(!n)throw g_(e,...t)}function Dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yc(e),new Error(e)}function In(n,e){n||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function __(){return fI()==="http:"||fI()==="https:"}function fI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(__()||ag()||"connection"in navigator)?navigator.onLine:!0}function iO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=s0()||Mh()}get(){return rO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QA=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new nu(3e4,6e4);function Fe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ue(n,e,t,r,i={}){return YA(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ui(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),QA.fetch()(JA(n,n.config.apiHost,t,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function YA(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},sO),e);try{const i=new lO(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ca(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ca(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ca(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw m_(n,d,c);ft(n,d)}}catch(i){if(i instanceof ht)throw i;ft(n,"network-request-failed",{message:String(i)})}}async function gr(n,e,t,r,i={}){const s=await Ue(n,e,t,r,i);return"mfaPendingCredential"in s&&ft(n,"multi-factor-auth-required",{_serverResponse:s}),s}function JA(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?y_(n.config,i):`${n.config.apiScheme}://${i}`}function aO(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let lO=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),oO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Ca(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ye(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(n){return n!==void 0&&n.getResponse!==void 0}function mI(n){return n!==void 0&&n.enterprise!==void 0}class uO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return aO(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(n){return(await Ue(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hO(n,e){return Ue(n,"GET","/v2/recaptchaConfig",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(n,e){return Ue(n,"POST","/v1/accounts:delete",e)}async function fO(n,e){return Ue(n,"POST","/v1/accounts:update",e)}async function XA(n,e){return Ue(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pO(n,e=!1){const t=Y(n),r=await t.getIdToken(e),i=od(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wa(Tf(i.auth_time)),issuedAtTime:Wa(Tf(i.iat)),expirationTime:Wa(Tf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tf(n){return Number(n)*1e3}function od(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const i=ig(t);return i?JSON.parse(i):(yc("Failed to decode base64 JWT payload"),null)}catch(i){return yc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gI(n){const e=od(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&mO(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gO=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zp=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await hr(n,XA(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZA(s.providerUserInfo):[],a=yO(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function _O(n){const e=Y(n);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yO(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZA(n){return n.map(e=>{var{providerId:t}=e,r=tu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(n,e){const t=await YA(n,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=JA(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wO(n,e){return Ue(n,"POST","/v2/accounts:revokeToken",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf=class em{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=gI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await vO(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new em;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new em,this.toJSON())}_performRefresh(){return Dn("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}let fh=class Na{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pO(this,e)}reload(){return _O(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Na(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await hr(this,dO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,y=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:V,isAnonymous:U,providerData:F,stsTokenManager:v}=t;z(A&&v,e,"internal-error");const _=Sf.fromJSON(this.name,v);z(typeof A=="string",e,"internal-error"),Ar(p,e.name),Ar(m,e.name),z(typeof V=="boolean",e,"internal-error"),z(typeof U=="boolean",e,"internal-error"),Ar(I,e.name),Ar(R,e.name),Ar(C,e.name),Ar(O,e.name),Ar(T,e.name),Ar(y,e.name);const w=new Na({uid:A,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:U,photoURL:R,phoneNumber:I,tenantId:C,stsTokenManager:_,createdAt:T,lastLoginAt:y});return F&&Array.isArray(F)&&(w.providerData=F.map(E=>Object.assign({},E))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Sf;i.updateFromServerResponse(t);const s=new Na({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Sf;a.updateFromIdToken(r);const u=new Na({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new Map;function Kt(n){In(n instanceof Function,"Expected a class definition");let e=_I.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_I.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eP=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};eP.type="NONE";const Ao=eP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e,t){return`firebase:${n}:${e}:${t}`}let yI=class vc{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fh._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new vc(Kt(Ao),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kt(Ao);const o=Bi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const p=fh._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vc(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new vc(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iP(e))return"Blackberry";if(sP(e))return"Webos";if(v_(e))return"Safari";if((e.includes("chrome/")||nP(e))&&!e.includes("edge/"))return"Chrome";if(ru(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tP(n=le()){return/firefox\//i.test(n)}function v_(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nP(n=le()){return/crios\//i.test(n)}function rP(n=le()){return/iemobile/i.test(n)}function ru(n=le()){return/android/i.test(n)}function iP(n=le()){return/blackberry/i.test(n)}function sP(n=le()){return/webos/i.test(n)}function Bo(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IO(n=le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function EO(n=le()){var e;return Bo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TO(){return a0()&&document.documentMode===10}function oP(n=le()){return Bo(n)||ru(n)||sP(n)||iP(n)||/windows phone/i.test(n)||rP(n)}function SO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(n,e=[]){let t;switch(n){case"Browser":t=vI(le());break;case"Worker":t=`${vI(le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AO=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(n,e={}){return Ue(n,"GET","/v2/passwordPolicy",Fe(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=6;let kO=class{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:RO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CO=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wI(this),this.idTokenSubscription=new wI(this),this.beforeStateQueue=new AO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yI.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await XA(this,{idToken:e}),r=await fh._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject(rt(this));const t=e?Y(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _e(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PO(this),t=new kO(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await yI.create(this,[Kt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&nO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function Me(n){return Y(n)}let wI=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=lg(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NO(n){iu=n}function w_(n){return iu.loadJS(n)}function bO(){return iu.recaptchaV2Script}function DO(){return iu.recaptchaEnterpriseScript}function xO(){return iu.gapiScript}function lP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const VO="recaptcha-enterprise",OO="NO_RECAPTCHA";class LO{constructor(e){this.type=VO,this.auth=Me(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;mI(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(OO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&mI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DO();u.length!==0&&(u+=a),w_(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function II(n,e,t,r=!1){const i=new LO(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await II(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await II(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function MO(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Kt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FO(n,e,t){const r=Me(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=uP(e),{host:o,port:a}=UO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BO()}function uP(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function UO(n){const e=uP(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:EI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:EI(o)}}}function EI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(n,e){return Ue(n,"POST","/v1/accounts:resetPassword",Fe(n,e))}async function zO(n,e){return Ue(n,"POST","/v1/accounts:update",e)}async function $O(n,e){return Ue(n,"POST","/v1/accounts:signUp",e)}async function jO(n,e){return Ue(n,"POST","/v1/accounts:update",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qO(n,e){return gr(n,"POST","/v1/accounts:signInWithPassword",Fe(n,e))}async function ad(n,e){return Ue(n,"POST","/v1/accounts:sendOobCode",Fe(n,e))}async function GO(n,e){return ad(n,e)}async function WO(n,e){return ad(n,e)}async function KO(n,e){return ad(n,e)}async function HO(n,e){return ad(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(n,e){return gr(n,"POST","/v1/accounts:signInWithEmailLink",Fe(n,e))}async function YO(n,e){return gr(n,"POST","/v1/accounts:signInWithEmailLink",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends zo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Vl(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vl(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xl(e,t,"signInWithPassword",qO);case"emailLink":return QO(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xl(e,r,"signUpPassword",$O);case"emailLink":return YO(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(n,e){return gr(n,"POST","/v1/accounts:signInWithIdp",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO="http://localhost";class Bn extends zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=tu(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ir(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ir(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}buildRequest(){const e={requestUri:JO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ui(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(n,e){return Ue(n,"POST","/v1/accounts:sendVerificationCode",Fe(n,e))}async function ZO(n,e){return gr(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,e))}async function eL(n,e){const t=await gr(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,e));if(t.temporaryProof)throw Ca(n,"account-exists-with-different-credential",t);return t}const tL={USER_NOT_FOUND:"user-not-found"};async function nL(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gr(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,t),tL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new zi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new zi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ZO(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return nL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new zi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iL(n){const e=zs(Sa(n)).link,t=e?zs(Sa(e)).deep_link_id:null,r=zs(Sa(n)).deep_link_id;return(r?zs(Sa(r)).link:null)||r||t||e||n}class ld{constructor(e){var t,r,i,s,o,a;const u=zs(Sa(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=rL((i=u.mode)!==null&&i!==void 0?i:null);z(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=iL(e);try{return new ld(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,t){return Vl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ld.parseLink(t);return z(r,"argument-error"),Vl._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends _r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xs extends $o{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),Bn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Bn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Xs(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends $o{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends $o{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="http://localhost";class Po extends zo{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ir(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ir(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Po(r,s)}static _create(e,t){return new Po(e,t)}buildRequest(){return{requestUri:sL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL="saml.";class ph extends _r{constructor(e){z(e.startsWith(oL),"argument-error"),super(e)}static credentialFromResult(e){return ph.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ph.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Po.fromJSON(e);return z(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Po._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends $o{constructor(){super("twitter.com")}static credential(e,t){return Bn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(n,e){return gr(n,"POST","/v1/accounts:signUp",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await fh._fromIdTokenResponse(e,r,i),o=TI(r);return new hn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=TI(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function TI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aL(n){var e;if(_e(n.app))return Promise.reject(rt(n));const t=Me(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new hn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await hP(t,{returnSecureToken:!0}),i=await hn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends ht{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new mh(e,t,r,i)}}function dP(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mh._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lL(n,e){const t=Y(n);await ud(!0,t,e);const{providerUserInfo:r}=await fO(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=fP(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function I_(n,e,t=!1){const r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",r)}async function ud(n,e,t){await Dl(e);const r=fP(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";z(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(n,e,t=!1){const{auth:r}=n;if(_e(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await hr(n,dP(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=od(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),hn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(n,e,t=!1){if(_e(n.app))return Promise.reject(rt(n));const r="signIn",i=await dP(n,r,e),s=await hn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function cd(n,e){return mP(Me(n),e)}async function gP(n,e){const t=Y(n);return await ud(!1,t,e.providerId),I_(t,e)}async function _P(n,e){return pP(Y(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(n,e){return gr(n,"POST","/v1/accounts:signInWithCustomToken",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL(n,e){if(_e(n.app))return Promise.reject(rt(n));const t=Me(n),r=await uL(t,{token:e,returnSecureToken:!0}),i=await hn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?E_._fromServerResponse(e,t):"totpInfo"in t?T_._fromServerResponse(e,t):ft(e,"internal-error")}}class E_ extends su{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new E_(t)}}class T_ extends su{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new T_(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n,e,t){var r;z(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(n){const e=Me(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hL(n,e,t){const r=Me(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&hd(r,i,t),await xl(r,i,"getOobCode",WO)}async function dL(n,e,t){await cP(Y(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&S_(n),r})}async function fL(n,e){await jO(Y(n),{oobCode:e})}async function yP(n,e){const t=Y(n),r=await cP(t,{oobCode:e}),i=r.requestType;switch(z(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,t,"internal-error");default:z(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=su._fromServerResponse(Me(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function pL(n,e){const{data:t}=await yP(Y(n),e);return t.email}async function mL(n,e,t){if(_e(n.app))return Promise.reject(rt(n));const r=Me(n),o=await xl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&S_(n),u}),a=await hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function gL(n,e,t){return _e(n.app)?Promise.reject(rt(n)):cd(Y(n),pi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&S_(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _L(n,e,t){const r=Me(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&hd(r,o,a)}s(i,t),await xl(r,i,"getOobCode",KO)}function yL(n,e){const t=ld.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function vL(n,e,t){if(_e(n.app))return Promise.reject(rt(n));const r=Y(n),i=pi.credentialWithLink(e,t||bl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),cd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wL(n,e){return Ue(n,"POST","/v1/accounts:createAuthUri",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IL(n,e){const t=__()?bl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await wL(Y(n),r);return i||[]}async function EL(n,e){const t=Y(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&hd(t.auth,i,e);const{email:s}=await GO(t.auth,i);s!==n.email&&await n.reload()}async function TL(n,e,t){const r=Y(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&hd(r.auth,s,t);const{email:o}=await HO(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(n,e){return Ue(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Y(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await hr(r,SL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function PL(n,e){const t=Y(n);return _e(t.auth.app)?Promise.reject(rt(t.auth)):vP(t,e,null)}function RL(n,e){return vP(Y(n),null,e)}async function vP(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await hr(n,zO(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=od(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Zs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new CL(s,i);case"github.com":return new NL(s,i);case"google.com":return new bL(s,i);case"twitter.com":return new DL(s,i,n.screenName||null);case"custom":case"anonymous":return new Zs(s,null);default:return new Zs(s,r,i)}}class Zs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class wP extends Zs{constructor(e,t,r,i){super(e,t,r),this.username=i}}class CL extends Zs{constructor(e,t){super(e,"facebook.com",t)}}class NL extends wP{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class bL extends Zs{constructor(e,t){super(e,"google.com",t)}}class DL extends wP{constructor(e,t,r){super(e,"twitter.com",t,r)}}function xL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:kL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Oi("enroll",e,t)}static _fromMfaPendingCredential(e){return new Oi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Oi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Oi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Me(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>su._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=Oi._fromMfaPendingCredential(i.mfaPendingCredential);return new A_(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const d=await hn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return z(t.user,r,"internal-error"),hn._forOperation(t.user,t.operationType,c);default:ft(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function VL(n,e){var t;const r=Y(n),i=e;return z(e.customData.operationType,r,"argument-error"),z((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),A_._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(n,e){return Ue(n,"POST","/v2/accounts/mfaEnrollment:start",Fe(n,e))}function LL(n,e){return Ue(n,"POST","/v2/accounts/mfaEnrollment:finalize",Fe(n,e))}function ML(n,e){return Ue(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Fe(n,e))}class P_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>su._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new P_(e)}async getSession(){return Oi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await hr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await hr(this.user,ML(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Af=new WeakMap;function FL(n){const e=Y(n);return Af.has(e)||Af.set(e,P_._fromUser(e)),Af.get(e)}const gh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gh,"1"),this.storage.removeItem(gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(){const n=le();return v_(n)||Bo(n)}const BL=1e3,zL=10;class EP extends IP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UL()&&SO(),this.fallbackToPolling=oP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zL):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},BL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}EP.type="LOCAL";const R_=EP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP extends IP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}TP.type="SESSION";const rs=TP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new dd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await $L(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ou("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function qL(n){Ge().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function GL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function KL(){return k_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="firebaseLocalStorageDb",HL=1,_h="firebaseLocalStorage",AP="fbase_key";class au{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fd(n,e){return n.transaction([_h],e?"readwrite":"readonly").objectStore(_h)}function QL(){const n=indexedDB.deleteDatabase(SP);return new au(n).toPromise()}function tm(){const n=indexedDB.open(SP,HL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_h,{keyPath:AP})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_h)?e(r):(r.close(),await QL(),e(await tm()))})})}async function SI(n,e,t){const r=fd(n,!0).put({[AP]:e,value:t});return new au(r).toPromise()}async function YL(n,e){const t=fd(n,!1).get(e),r=await new au(t).toPromise();return r===void 0?null:r.value}function AI(n,e){const t=fd(n,!0).delete(e);return new au(t).toPromise()}const JL=800,XL=3;class PP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>XL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dd._getInstance(KL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await GL(),!this.activeServiceWorker)return;this.sender=new jL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tm();return await SI(e,gh,"1"),await AI(e,gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>SI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>YL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>AI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fd(i,!1).getAll();return new au(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PP.type="LOCAL";const Ol=PP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(n,e){return Ue(n,"POST","/v2/accounts/mfaSignIn:start",Fe(n,e))}function eM(n,e){return Ue(n,"POST","/v2/accounts/mfaSignIn:finalize",Fe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=500,nM=6e4,Qu=1e12;class rM{constructor(e){this.auth=e,this.counter=Qu,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new iM(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Qu;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Qu;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Qu;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class iM{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},nM)},tM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=lP("rcb"),oM=new nu(3e4,6e4);class aM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ge().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return z(lM(t),e,"argument-error"),this.shouldResolveImmediately(t)&&pI(Ge().grecaptcha)?Promise.resolve(Ge().grecaptcha):new Promise((r,i)=>{const s=Ge().setTimeout(()=>{i(Ye(e,"network-request-failed"))},oM.get());Ge()[Pf]=()=>{Ge().clearTimeout(s),delete Ge()[Pf];const a=Ge().grecaptcha;if(!a||!pI(a)){i(Ye(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const p=u(c,d);return this.counter++,p},this.hostLanguage=t,r(a)};const o=`${bO()}?${ui({onload:Pf,render:"explicit",hl:t})}`;w_(o).catch(()=>{clearTimeout(s),i(Ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ge().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lM(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class uM{async load(e){return new rM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="recaptcha",cM={theme:"light",type:"image"};let hM=class{constructor(e,t,r=Object.assign({},cM)){this.parameters=r,this.type=RP,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new uM:new aM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ge()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(__()&&!k_(),this.auth,"internal-error"),await dM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cO(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function dM(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=zi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function fM(n,e,t){if(_e(n.app))return Promise.reject(rt(n));const r=Me(n),i=await pd(r,e,Y(t));return new C_(i,s=>cd(r,s))}async function pM(n,e,t){const r=Y(n);await ud(!1,r,"phone");const i=await pd(r.auth,e,Y(t));return new C_(i,s=>gP(r,s))}async function mM(n,e,t){const r=Y(n);if(_e(r.auth.app))return Promise.reject(rt(r.auth));const i=await pd(r.auth,e,Y(t));return new C_(i,s=>_P(r,s))}async function pd(n,e,t){var r;const i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===RP,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",n,"internal-error"),(await OL(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await ZL(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await XO(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function gM(n,e){const t=Y(n);if(_e(t.auth.app))return Promise.reject(rt(t.auth));await I_(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is=class wc{constructor(e){this.providerId=wc.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return pd(this.auth,e,Y(t))}static credential(e,t){return zi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wc.credentialFromTaggedObject(t)}static credentialFromError(e){return wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?zi._fromTokenResponse(t,r):null}};is.PROVIDER_ID="phone";is.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n,e){return e?Kt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _M(n){return mP(n.auth,new N_(n),n.bypassAuthState)}function yM(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),pP(t,new N_(n),n.bypassAuthState)}async function vM(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),I_(t,new N_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _M;case"linkViaPopup":case"linkViaRedirect":return vM;case"reauthViaPopup":case"reauthViaRedirect":return yM;default:ft(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=new nu(2e3,1e4);async function IM(n,e,t){if(_e(n.app))return Promise.reject(Ye(n,"operation-not-supported-in-this-environment"));const r=Me(n);Uo(n,e,_r);const i=fs(r,t);return new tr(r,"signInViaPopup",e,i).executeNotNull()}async function EM(n,e,t){const r=Y(n);if(_e(r.auth.app))return Promise.reject(Ye(r.auth,"operation-not-supported-in-this-environment"));Uo(r.auth,e,_r);const i=fs(r.auth,t);return new tr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function TM(n,e,t){const r=Y(n);Uo(r.auth,e,_r);const i=fs(r.auth,t);return new tr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class tr extends kP{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wM.get())};e()}}tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM="pendingRedirect",Ka=new Map;class AM extends kP{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await PM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PM(n,e){const t=NP(e),r=CP(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function b_(n,e){return CP(n)._set(NP(e),"true")}function RM(){Ka.clear()}function D_(n,e){Ka.set(n._key(),e)}function CP(n){return Kt(n._redirectPersistence)}function NP(n){return Bi(SM,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(n,e,t){return CM(n,e,t)}async function CM(n,e,t){if(_e(n.app))return Promise.reject(rt(n));const r=Me(n);Uo(n,e,_r),await r._initializationPromise;const i=fs(r,t);return await b_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function NM(n,e,t){return bM(n,e,t)}async function bM(n,e,t){const r=Y(n);if(Uo(r.auth,e,_r),_e(r.auth.app))return Promise.reject(rt(r.auth));await r.auth._initializationPromise;const i=fs(r.auth,t);await b_(i,r.auth);const s=await bP(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function DM(n,e,t){return xM(n,e,t)}async function xM(n,e,t){const r=Y(n);Uo(r.auth,e,_r),await r.auth._initializationPromise;const i=fs(r.auth,t);await ud(!1,r,e.providerId),await b_(i,r.auth);const s=await bP(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function VM(n,e){return await Me(n)._initializationPromise,md(n,e,!1)}async function md(n,e,t=!1){if(_e(n.app))return Promise.reject(rt(n));const r=Me(n),i=fs(r,e),o=await new AM(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function bP(n){const e=ou(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=10*60*1e3;class DP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OM&&this.cachedEventUids.clear(),this.cachedEventUids.has(PI(e))}saveEventToCache(e){this.cachedEventUids.add(PI(e)),this.lastProcessedEventTime=Date.now()}}function PI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xP({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xP(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(n,e={}){return Ue(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FM=/^https?/;async function UM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await VP(n);for(const t of e)try{if(BM(t))return}catch{}ft(n,"unauthorized-domain")}function BM(n){const e=bl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!FM.test(t))return!1;if(MM.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=new nu(3e4,6e4);function RI(){const n=Ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $M(n){return new Promise((e,t)=>{var r,i,s;function o(){RI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{RI(),t(Ye(n,"network-request-failed"))},timeout:zM.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)o();else{const a=lP("iframefcb");return Ge()[a]=()=>{gapi.load?o():t(Ye(n,"network-request-failed"))},w_(`${xO()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Ic=null,e})}let Ic=null;function jM(n){return Ic=Ic||$M(n),Ic}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=new nu(5e3,15e3),GM="__/auth/iframe",WM="emulator/auth/iframe",KM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QM(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?y_(e,WM):`https://${n.config.authDomain}/${GM}`,r={apiKey:e.apiKey,appName:n.name,v:En},i=HM.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ui(r).slice(1)}`}async function YM(n){const e=await jM(n),t=Ge().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:QM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(n,"network-request-failed"),a=Ge().setTimeout(()=>{s(o)},qM.get());function u(){Ge().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XM=500,ZM=600,eF="_blank",tF="http://localhost";class kI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nF(n,e,t,r=XM,i=ZM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},JM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=le().toLowerCase();t&&(a=nP(c)?eF:t),tP(c)&&(e=e||tF,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(EO(c)&&a!=="_self")return rF(e||"",a),new kI(null);const p=window.open(e||"",a,d);z(p,n,"popup-blocked");try{p.focus()}catch{}return new kI(p)}function rF(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF="__/auth/handler",sF="emulator/auth/handler",oF=encodeURIComponent("fac");async function nm(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:En,eventId:i};if(e instanceof _r){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",TC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof $o){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await n._getAppCheckToken(),c=u?`#${oF}=${encodeURIComponent(u)}`:"";return`${aF(n)}?${ui(a).slice(1)}${c}`}function aF({config:n}){return n.emulator?y_(n,sF):`https://${n.authDomain}/${iF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="webStorageSupport";class lF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rs,this._completeRedirectFn=md,this._overrideRedirectResult=D_}async _openPopup(e,t,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nm(e,t,r,bl(),i);return nF(e,o,ou())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await nm(e,t,r,bl(),i);return qL(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await YM(e),r=new DP(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rf,{type:Rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rf];o!==void 0&&t(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oP()||v_()||Bo()}}const uF=lF;class cF{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Dn("unexpected MultiFactorSessionType")}}}class x_ extends cF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new x_(e)}_finalizeEnroll(e,t,r){return LL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return eM(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class OP{constructor(){}static assertion(e){return x_._fromCredential(e)}}OP.FACTOR_ID="phone";var CI="@firebase/auth",NI="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hF=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fF(n){Mn(new cn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aP(n)},c=new CO(r,i,s,u);return MO(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new cn("auth-internal",e=>{const t=Me(e.getProvider("auth").getImmediate());return(r=>new hF(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(CI,NI,dF(n)),Qt(CI,NI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF=5*60;i0("authIdTokenMaxAge");function mF(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}NO({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",mF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fF("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=2e3;async function _F(n,e,t){var r;const{BuildInfo:i}=ss();In(e.sessionId,"AuthEvent did not contain a session ID");const s=await EF(e.sessionId),o={};return Bo()?o.ibi=i.packageName:ru()?o.apn=i.packageName:ft(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,nm(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function yF(n){const{BuildInfo:e}=ss(),t={};Bo()?t.iosBundleId=e.packageName:ru()?t.androidPackageName=e.packageName:ft(n,"operation-not-supported-in-this-environment"),await VP(n,t)}function vF(n){const{cordova:e}=ss();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,IO()?"_blank":"_system","location=yes"),t(i)})})}async function wF(n,e,t){const{cordova:r}=ss();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var p;s();const m=(p=r.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(Ye(n,"redirect-cancelled-by-user"))},gF))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),ru()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function IF(n){var e,t,r,i,s,o,a,u,c,d;const p=ss();z(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((t=p==null?void 0:p.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=p==null?void 0:p.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((u=(a=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((d=(c=p==null?void 0:p.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function EF(n){const e=TF(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function TF(n){if(In(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF=20;class AF extends DP{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function PF(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:CF(),postBody:null,tenantId:n.tenantId,error:Ye(n,"no-auth-event")}}function RF(n,e){return rm()._set(im(n),e)}async function bI(n){const e=await rm()._get(im(n));return e&&await rm()._remove(im(n)),e}function kF(n,e){var t,r;const i=bF(e);if(i.includes("/__/auth/callback")){const s=Ec(i),o=s.firebaseError?NF(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ye(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function CF(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<SF;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function rm(){return Kt(R_)}function im(n){return Bi("authEvent",n.config.apiKey,n.name)}function NF(n){try{return JSON.parse(n)}catch{return null}}function bF(n){const e=Ec(n),t=e.link?decodeURIComponent(e.link):void 0,r=Ec(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ec(i).link||i||r||t||n}function Ec(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return zs(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=500;class xF{constructor(){this._redirectPersistence=rs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=md,this._overrideRedirectResult=D_}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new AF(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ft(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){IF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),RM(),await this._originValidation(e);const o=PF(e,r,i);await RF(e,o);const a=await _F(e,o,t),u=await vF(a);return wF(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yF(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ss(),o=setTimeout(async()=>{await bI(e),t.onEvent(DI())},DF),a=async d=>{clearTimeout(o);const p=await bI(e);let m=null;p&&(d!=null&&d.url)&&(m=kF(p,d.url)),t.onEvent(m||DI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;ss().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof u=="function")try{u(d)}catch(p){console.error(p)}}}}const VF=xF;function DI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ye("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OF(n,e){Me(n)._logFramework(e)}var LF="@firebase/auth-compat",MF="0.5.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF=1e3;function Ha(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function UF(){return Ha()==="http:"||Ha()==="https:"}function LP(n=le()){return!!((Ha()==="file:"||Ha()==="ionic:"||Ha()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function BF(){return Mh()||og()}function zF(){return a0()&&(document==null?void 0:document.documentMode)===11}function $F(n=le()){return/Edge\/\d+/.test(n)}function jF(n=le()){return zF()||$F(n)}function MP(){try{const n=self.localStorage,e=ou();if(n)return n.setItem(e,"1"),n.removeItem(e),jF()?pl():!0}catch{return V_()&&pl()}return!1}function V_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function kf(){return(UF()||ag()||LP())&&!BF()&&MP()&&!V_()}function FP(){return LP()&&typeof document<"u"}async function qF(){return FP()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},FF);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function GF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={LOCAL:"local",NONE:"none",SESSION:"session"},ya=z,UP="persistence";function WF(n,e){if(ya(Object.values(Gt).includes(e),n,"invalid-persistence-type"),Mh()){ya(e!==Gt.SESSION,n,"unsupported-persistence-type");return}if(og()){ya(e===Gt.NONE,n,"unsupported-persistence-type");return}if(V_()){ya(e===Gt.NONE||e===Gt.LOCAL&&pl(),n,"unsupported-persistence-type");return}ya(e===Gt.NONE||MP(),n,"unsupported-persistence-type")}async function sm(n){await n._initializationPromise;const e=BP(),t=Bi(UP,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function KF(n,e){const t=BP();if(!t)return[];const r=Bi(UP,n,e);switch(t.getItem(r)){case Gt.NONE:return[Ao];case Gt.LOCAL:return[Ol,rs];case Gt.SESSION:return[rs];default:return[]}}function BP(){var n;try{return((n=GF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HF=z;class Lr{constructor(){this.browserResolver=Kt(uF),this.cordovaResolver=Kt(VF),this.underlyingResolver=null,this._redirectPersistence=rs,this._completeRedirectFn=md,this._overrideRedirectResult=D_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return FP()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return HF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await qF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(n){return n.unwrap()}function QF(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(n){return $P(n)}function JF(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new XF(n,VL(n,e))}else if(r){const i=$P(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function $P(n){const{_tokenResponse:e}=n instanceof ht?n.customData:n;if(!e)return null;if(!(n instanceof ht)&&"temporaryProof"in e&&"phoneNumber"in e)return is.credentialFromResult(n);const t=e.providerId;if(!t||t===_a.PASSWORD)return null;let r;switch(t){case _a.GOOGLE:r=Rn;break;case _a.FACEBOOK:r=Pn;break;case _a.GITHUB:r=kn;break;case _a.TWITTER:r=Cn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Po._create(t,a):Bn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Xs(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof ht?r.credentialFromError(n):r.credentialFromResult(n)}function Vt(n,e){return e.catch(t=>{throw t instanceof ht&&JF(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:YF(t),additionalUserInfo:xL(t),user:nr.getOrCreate(i)}})}async function om(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Vt(n,t.confirm(r))}}class XF{constructor(e,t){this.resolver=t,this.auth=QF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Vt(zP(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this._delegate=e,this.multiFactor=FL(e)}static getOrCreate(e){return nr.USER_MAP.has(e)||nr.USER_MAP.set(e,new nr(e)),nr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Vt(this.auth,gP(this._delegate,e))}async linkWithPhoneNumber(e,t){return om(this.auth,pM(this._delegate,e,t))}async linkWithPopup(e){return Vt(this.auth,TM(this._delegate,e,Lr))}async linkWithRedirect(e){return await sm(Me(this.auth)),DM(this._delegate,e,Lr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Vt(this.auth,_P(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return om(this.auth,mM(this._delegate,e,t))}reauthenticateWithPopup(e){return Vt(this.auth,EM(this._delegate,e,Lr))}async reauthenticateWithRedirect(e){return await sm(Me(this.auth)),NM(this._delegate,e,Lr)}sendEmailVerification(e){return EL(this._delegate,e)}async unlink(e){return await lL(this._delegate,e),this}updateEmail(e){return PL(this._delegate,e)}updatePassword(e){return RL(this._delegate,e)}updatePhoneNumber(e){return gM(this._delegate,e)}updateProfile(e){return AL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return TL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}nr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=z;class am{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;va(r,"invalid-api-key",{appName:e.name}),va(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Lr:void 0;this._delegate=t.initialize({options:{persistence:ZF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(eO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?nr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){FO(this._delegate,e,t)}applyActionCode(e){return fL(this._delegate,e)}checkActionCode(e){return yP(this._delegate,e)}confirmPasswordReset(e,t){return dL(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Vt(this._delegate,mL(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return IL(this._delegate,e)}isSignInWithEmailLink(e){return yL(this._delegate,e)}async getRedirectResult(){va(kf(),this._delegate,"operation-not-supported-in-this-environment");const e=await VM(this._delegate,Lr);return e?Vt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){OF(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=xI(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=xI(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return _L(this._delegate,e,t)}sendPasswordResetEmail(e,t){return hL(this._delegate,e,t||void 0)}async setPersistence(e){WF(this._delegate,e);let t;switch(e){case Gt.SESSION:t=rs;break;case Gt.LOCAL:t=await Kt(Ol)._isAvailable()?Ol:R_;break;case Gt.NONE:t=Ao;break;default:return ft("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Vt(this._delegate,aL(this._delegate))}signInWithCredential(e){return Vt(this._delegate,cd(this._delegate,e))}signInWithCustomToken(e){return Vt(this._delegate,cL(this._delegate,e))}signInWithEmailAndPassword(e,t){return Vt(this._delegate,gL(this._delegate,e,t))}signInWithEmailLink(e,t){return Vt(this._delegate,vL(this._delegate,e,t))}signInWithPhoneNumber(e,t){return om(this._delegate,fM(this._delegate,e,t))}async signInWithPopup(e){return va(kf(),this._delegate,"operation-not-supported-in-this-environment"),Vt(this._delegate,IM(this._delegate,e,Lr))}async signInWithRedirect(e){return va(kf(),this._delegate,"operation-not-supported-in-this-environment"),await sm(this._delegate),kM(this._delegate,e,Lr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return pL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}am.Persistence=Gt;function xI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&nr.getOrCreate(o)),error:e,complete:t}}function ZF(n,e){const t=KF(n,e);if(typeof self<"u"&&!t.includes(Ol)&&t.push(Ol),typeof window<"u")for(const r of[R_,rs])t.includes(r)||t.push(r);return t.includes(Ao)||t.push(Ao),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.providerId="phone",this._delegate=new is(zP($n.auth()))}static credential(e,t){return is.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}O_.PHONE_SIGN_IN_METHOD=is.PHONE_SIGN_IN_METHOD;O_.PROVIDER_ID=is.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=z;class t2{constructor(e,t,r=$n.app()){var i;e2((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new hM(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="auth-compat";function r2(n){n.INTERNAL.registerComponent(new cn(n2,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new am(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ts.EMAIL_SIGNIN,PASSWORD_RESET:Ts.PASSWORD_RESET,RECOVER_EMAIL:Ts.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ts.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ts.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ts.VERIFY_EMAIL}},EmailAuthProvider:pi,FacebookAuthProvider:Pn,GithubAuthProvider:kn,GoogleAuthProvider:Rn,OAuthProvider:Xs,SAMLAuthProvider:ph,PhoneAuthProvider:O_,PhoneMultiFactorGenerator:OP,RecaptchaVerifier:t2,TwitterAuthProvider:Cn,Auth:am,AuthCredential:zo,Error:ht}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(LF,MF)}r2($n);function jP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i2=jP,qP=new zn("auth","Firebase",jP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new zl("@firebase/auth");function s2(n,...e){yh.logLevel<=te.WARN&&yh.warn(`Auth (${En}): ${n}`,...e)}function Tc(n,...e){yh.logLevel<=te.ERROR&&yh.error(`Auth (${En}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(n,...e){throw L_(n,...e)}function GP(n,...e){return L_(n,...e)}function WP(n,e,t){const r=Object.assign(Object.assign({},i2()),{[e]:t});return new zn("auth","Firebase",r).create(e,{appName:n.name})}function Sc(n){return WP(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function L_(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qP.create(n,...e)}function ce(n,e,...t){if(!n)throw L_(e,...t)}function Qa(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tc(e),new Error(e)}function vh(n,e){n||Qa(e)}function o2(){return OI()==="http:"||OI()==="https:"}function OI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o2()||ag()||"connection"in navigator)?navigator.onLine:!0}function l2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.shortDelay=e,this.longDelay=t,vh(t>e,"Short delay should be less than long delay!"),this.isMobile=s0()||Mh()}get(){return a2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(n,e){vh(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=new lu(3e4,6e4);function HP(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gd(n,e,t,r,i={}){return QP(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ui(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),KP.fetch()(YP(n,n.config.apiHost,t,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function QP(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},c2),e);try{const i=new d2(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yu(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yu(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Yu(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Yu(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw WP(n,d,c);VI(n,d)}}catch(i){if(i instanceof ht)throw i;VI(n,"network-request-failed",{message:String(i)})}}function YP(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?u2(n.config,i):`${n.config.apiScheme}://${i}`}class d2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(GP(this.auth,"network-request-failed")),h2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yu(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=GP(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(n,e){return gd(n,"POST","/v1/accounts:delete",e)}async function JP(n,e){return gd(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p2(n,e=!1){const t=Y(n),r=await t.getIdToken(e),i=XP(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(Cf(i.auth_time)),issuedAtTime:Ya(Cf(i.iat)),expirationTime:Ya(Cf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cf(n){return Number(n)*1e3}function XP(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=ig(t);return i?JSON.parse(i):(Tc("Failed to decode base64 JWT payload"),null)}catch(i){return Tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function LI(n){const e=XP(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&m2(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function m2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(n){var e;const t=n.auth,r=await n.getIdToken(),i=await lm(n,JP(t,{idToken:r}));ce(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZP(s.providerUserInfo):[],a=y2(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new um(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function _2(n){const e=Y(n);await wh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y2(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZP(n){return n.map(e=>{var{providerId:t}=e,r=tu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(n,e){const t=await QP(n,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=YP(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",KP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function w2(n,e){return gd(n,"POST","/v2/accounts:revokeToken",HP(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):LI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=LI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await v2(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new eo;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return Qa("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new um(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await lm(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return p2(this,e)}reload(){return _2(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject(Sc(this.auth));const e=await this.getIdToken();return await lm(this,f2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,y=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:V,isAnonymous:U,providerData:F,stsTokenManager:v}=t;ce(A&&v,e,"internal-error");const _=eo.fromJSON(this.name,v);ce(typeof A=="string",e,"internal-error"),Pr(p,e.name),Pr(m,e.name),ce(typeof V=="boolean",e,"internal-error"),ce(typeof U=="boolean",e,"internal-error"),Pr(I,e.name),Pr(R,e.name),Pr(C,e.name),Pr(O,e.name),Pr(T,e.name),Pr(y,e.name);const w=new Mr({uid:A,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:U,photoURL:R,phoneNumber:I,tenantId:C,stsTokenManager:_,createdAt:T,lastLoginAt:y});return F&&Array.isArray(F)&&(w.providerData=F.map(E=>Object.assign({},E))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new eo;i.updateFromServerResponse(t);const s=new Mr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wh(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new eo;a.updateFromIdToken(r);const u=new Mr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new um(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Map;function Li(n){vh(n instanceof Function,"Expected a class definition");let e=MI.get(n);return e?(vh(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,MI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eR.type="NONE";const FI=eR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e,t){return`firebase:${n}:${e}:${t}`}class to{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nf(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nf("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new to(Li(FI),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Li(FI);const o=Nf(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const p=Mr._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new to(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new to(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P2(e))return"Blackberry";if(R2(e))return"Webos";if(E2(e))return"Safari";if((e.includes("chrome/")||T2(e))&&!e.includes("edge/"))return"Chrome";if(A2(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function I2(n=le()){return/firefox\//i.test(n)}function E2(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T2(n=le()){return/crios\//i.test(n)}function S2(n=le()){return/iemobile/i.test(n)}function A2(n=le()){return/android/i.test(n)}function P2(n=le()){return/blackberry/i.test(n)}function R2(n=le()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(n,e=[]){let t;switch(n){case"Browser":t=UI(le());break;case"Worker":t=`${UI(le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(n,e={}){return gd(n,"GET","/v2/passwordPolicy",HP(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=6;class b2{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:N2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new BI(this),this.idTokenSubscription=new BI(this),this.beforeStateQueue=new k2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Li(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await JP(this,{idToken:e}),r=await Mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject(Sc(this));const t=e?Y(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _e(this.app)?Promise.reject(Sc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject(Sc(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C2(this),t=new b2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await w2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Li(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[Li(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&s2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function x2(n){return Y(n)}class BI{constructor(e){this.auth=e,this.observer=null,this.addObserver=lg(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function V2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Li);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function O2(n,e,t,r){return Y(n).onAuthStateChanged(e,t,r)}new lu(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new lu(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new lu(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new lu(5e3,15e3);var zI="@firebase/auth",$I="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F2(n){Mn(new cn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tR(n)},c=new D2(r,i,s,u);return V2(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new cn("auth-internal",e=>{const t=x2(e.getProvider("auth").getImmediate());return(r=>new L2(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(zI,$I,M2(n)),Qt(zI,$I,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=5*60;i0("authIdTokenMaxAge");F2("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function B2(n,e,t,r){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(d){try{c(r.next(d))}catch(p){o(p)}}function u(d){try{c(r.throw(d))}catch(p){o(p)}}function c(d){d.done?s(d.value):i(d.value).then(a,u)}c((r=r.apply(n,[])).next())})}function z2(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,i=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(n,t)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $s=function(){return $s=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},$s.apply(this,arguments)},nR=function(n){return{loading:n==null,value:n}},$2=function(){return function(n,e){switch(e.type){case"error":return $s($s({},n),{error:e.error,loading:!1,value:void 0});case"reset":return nR(e.defaultValue);case"value":return $s($s({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},j2=function(n){var e=n?n():void 0,t=We.useReducer($2(),nR(e)),r=t[0],i=t[1],s=We.useCallback(function(){var u=n?n():void 0;i({type:"reset",defaultValue:u})},[n]),o=We.useCallback(function(u){i({type:"error",error:u})},[]),a=We.useCallback(function(u){i({type:"value",value:u})},[]);return We.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},q2=function(n,e){var t=j2(function(){return n.currentUser}),r=t.error,i=t.loading,s=t.setError,o=t.setValue,a=t.value;return We.useEffect(function(){var u=O2(n,function(c){return B2(void 0,void 0,void 0,function(){var d;return z2(this,function(p){switch(p.label){case 0:return[3,4];case 1:return p.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return p.sent(),[3,4];case 3:return d=p.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[n]),[a,i,r]};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var js=function(){return js=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},js.apply(this,arguments)},rR=function(n){return{loading:n==null,value:n}},G2=function(){return function(n,e){switch(e.type){case"error":return js(js({},n),{error:e.error,loading:!1,value:void 0});case"reset":return rR(e.defaultValue);case"value":return js(js({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},W2=function(n){var e=void 0,t=We.useReducer(G2(),rR(e)),r=t[0],i=t[1],s=We.useCallback(function(){var u=void 0;i({type:"reset",defaultValue:u})},[n]),o=We.useCallback(function(u){i({type:"error",error:u})},[]),a=We.useCallback(function(u){i({type:"value",value:u})},[]);return We.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},K2=function(n,e,t){var r=We.useRef(n);return We.useEffect(function(){e(n,r.current)||(r.current=n,t&&t())}),r},H2=function(n,e){var t=!n&&!e,r=!!n&&!!e&&Zg(n,e);return t||r},Q2=function(n,e){return K2(n,H2,e)},Y2=function(n,e){var t=W2(),r=t.error,i=t.loading,s=t.reset,o=t.setError,a=t.setValue,u=t.value,c=Q2(n,s);return We.useEffect(function(){if(!c.current){a(void 0);return}var d=e!=null&&e.snapshotListenOptions?hh(c.current,e.snapshotListenOptions,a,o):hh(c.current,a,o);return function(){d()}},[c.current]),[u,i,r]},J2=function(n,e){var t=Y2(n,e),r=t[0],i=t[1],s=t[2],o=X2(r,e==null?void 0:e.snapshotOptions,e==null?void 0:e.initialValue);return[o,i,s,r]},X2=function(n,e,t){return We.useMemo(function(){var r;return(r=n==null?void 0:n.docs.map(function(i){return i.data(e)}))!==null&&r!==void 0?r:t},[n,e])};$n.initializeApp({apiKey:"AIzaSyC6FGp7j3I1KJTuIH3uX61T3rOamqfWjqk",authDomain:"superchat-800a8.firebaseapp.com",projectId:"superchat-800a8",storageBucket:"superchat-800a8.appspot.com",messagingSenderId:"869042373241",appId:"1:869042373241:web:0f2510f66e7402a4f54aa8",measurementId:"G-9LMQ08F4NJ"});const Ro=$n.auth(),Z2=$n.firestore();function eU(){const[n]=q2(Ro);return he.jsx(he.Fragment,{children:he.jsxs("div",{className:"App",children:[he.jsxs("header",{children:[he.jsx("h1",{children:"SuperChat"}),he.jsx(nU,{})]}),he.jsx("section",{children:n?he.jsx(rU,{}):he.jsx(tU,{})})]})})}function tU(){const n=()=>{const e=new $n.auth.GoogleAuthProvider;Ro.signInWithPopup(e)};return he.jsxs(he.Fragment,{children:[he.jsx("button",{className:"sign-in",onClick:n,children:"Sign in with Google"}),he.jsx("p",{className:"welcome-text",children:"Welcome to my epic chat app!"})]})}function nU(){return Ro.currentUser&&he.jsx("button",{className:"sign-out",onClick:()=>Ro.signOut(),children:"Sign Out"})}function rU(){const n=We.useRef(),e=Z2.collection("superChat"),t=e.orderBy("createdAt").limit(25),[r]=J2(t,{idField:"id"}),[i,s]=We.useState(""),o=async a=>{a.preventDefault();const{uid:u,photoURL:c}=Ro.currentUser;await e.add({text:i,createdAt:$n.firestore.FieldValue.serverTimestamp(),uid:u,photoURL:c}),s(""),n.current.scrollIntoView({behavior:"smooth"})};return he.jsxs(he.Fragment,{children:[he.jsxs("main",{children:[r&&r.map(a=>he.jsx(iU,{message:a},a.id)),he.jsx("span",{ref:n})]}),he.jsxs("form",{onSubmit:o,children:[he.jsx("input",{value:i,onChange:a=>s(a.target.value),placeholder:"Type Message"}),he.jsx("button",{type:"submit",disabled:!i,children:"Send"})]})]})}function iU(n){const{text:e,uid:t,photoURL:r}=n.message,i=t===Ro.currentUser.uid?"sent":"received";return he.jsx(he.Fragment,{children:he.jsxs("div",{className:`message ${i}`,children:[he.jsx("img",{src:r||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}),he.jsx("p",{children:e})]})})}bf.createRoot(document.getElementById("root")).render(he.jsx(JR.StrictMode,{children:he.jsx(eU,{})}));
