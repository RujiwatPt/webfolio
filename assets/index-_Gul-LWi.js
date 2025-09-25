function Zy(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in i)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(i,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function i0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Rf={exports:{}},aa={},Pf={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Jy(){if(Eg)return St;Eg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(F,ae,Oe){this.props=F,this.context=ae,this.refs=M,this.updater=Oe||y}x.prototype.isReactComponent={},x.prototype.setState=function(F,ae){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ae,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=x.prototype;function N(F,ae,Oe){this.props=F,this.context=ae,this.refs=M,this.updater=Oe||y}var C=N.prototype=new S;C.constructor=N,E(C,x.prototype),C.isPureReactComponent=!0;var T=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function G(F,ae,Oe){var He,$e={},le=null,pe=null;if(ae!=null)for(He in ae.ref!==void 0&&(pe=ae.ref),ae.key!==void 0&&(le=""+ae.key),ae)U.call(ae,He)&&!I.hasOwnProperty(He)&&($e[He]=ae[He]);var we=arguments.length-2;if(we===1)$e.children=Oe;else if(1<we){for(var Ue=Array(we),Fe=0;Fe<we;Fe++)Ue[Fe]=arguments[Fe+2];$e.children=Ue}if(F&&F.defaultProps)for(He in we=F.defaultProps,we)$e[He]===void 0&&($e[He]=we[He]);return{$$typeof:i,type:F,key:le,ref:pe,props:$e,_owner:O.current}}function P(F,ae){return{$$typeof:i,type:F.type,key:ae,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function V(F){var ae={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Oe){return ae[Oe]})}var X=/\/+/g;function J(F,ae){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):ae.toString(36)}function q(F,ae,Oe,He,$e){var le=typeof F;(le==="undefined"||le==="boolean")&&(F=null);var pe=!1;if(F===null)pe=!0;else switch(le){case"string":case"number":pe=!0;break;case"object":switch(F.$$typeof){case i:case e:pe=!0}}if(pe)return pe=F,$e=$e(pe),F=He===""?"."+J(pe,0):He,T($e)?(Oe="",F!=null&&(Oe=F.replace(X,"$&/")+"/"),q($e,ae,Oe,"",function(Fe){return Fe})):$e!=null&&(b($e)&&($e=P($e,Oe+(!$e.key||pe&&pe.key===$e.key?"":(""+$e.key).replace(X,"$&/")+"/")+F)),ae.push($e)),1;if(pe=0,He=He===""?".":He+":",T(F))for(var we=0;we<F.length;we++){le=F[we];var Ue=He+J(le,we);pe+=q(le,ae,Oe,Ue,$e)}else if(Ue=v(F),typeof Ue=="function")for(F=Ue.call(F),we=0;!(le=F.next()).done;)le=le.value,Ue=He+J(le,we++),pe+=q(le,ae,Oe,Ue,$e);else if(le==="object")throw ae=String(F),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return pe}function Q(F,ae,Oe){if(F==null)return F;var He=[],$e=0;return q(F,He,"","",function(le){return ae.call(Oe,le,$e++)}),He}function ee(F){if(F._status===-1){var ae=F._result;ae=ae(),ae.then(function(Oe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Oe)},function(Oe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Oe)}),F._status===-1&&(F._status=0,F._result=ae)}if(F._status===1)return F._result.default;throw F._result}var ie={current:null},z={transition:null},re={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Q,forEach:function(F,ae,Oe){Q(F,function(){ae.apply(this,arguments)},Oe)},count:function(F){var ae=0;return Q(F,function(){ae++}),ae},toArray:function(F){return Q(F,function(ae){return ae})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=x,St.Fragment=t,St.Profiler=o,St.PureComponent=N,St.StrictMode=r,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,St.act=oe,St.cloneElement=function(F,ae,Oe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var He=E({},F.props),$e=F.key,le=F.ref,pe=F._owner;if(ae!=null){if(ae.ref!==void 0&&(le=ae.ref,pe=O.current),ae.key!==void 0&&($e=""+ae.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(Ue in ae)U.call(ae,Ue)&&!I.hasOwnProperty(Ue)&&(He[Ue]=ae[Ue]===void 0&&we!==void 0?we[Ue]:ae[Ue])}var Ue=arguments.length-2;if(Ue===1)He.children=Oe;else if(1<Ue){we=Array(Ue);for(var Fe=0;Fe<Ue;Fe++)we[Fe]=arguments[Fe+2];He.children=we}return{$$typeof:i,type:F.type,key:$e,ref:le,props:He,_owner:pe}},St.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},St.createElement=G,St.createFactory=function(F){var ae=G.bind(null,F);return ae.type=F,ae},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:u,render:F}},St.isValidElement=b,St.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ee}},St.memo=function(F,ae){return{$$typeof:d,type:F,compare:ae===void 0?null:ae}},St.startTransition=function(F){var ae=z.transition;z.transition={};try{F()}finally{z.transition=ae}},St.unstable_act=oe,St.useCallback=function(F,ae){return ie.current.useCallback(F,ae)},St.useContext=function(F){return ie.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return ie.current.useDeferredValue(F)},St.useEffect=function(F,ae){return ie.current.useEffect(F,ae)},St.useId=function(){return ie.current.useId()},St.useImperativeHandle=function(F,ae,Oe){return ie.current.useImperativeHandle(F,ae,Oe)},St.useInsertionEffect=function(F,ae){return ie.current.useInsertionEffect(F,ae)},St.useLayoutEffect=function(F,ae){return ie.current.useLayoutEffect(F,ae)},St.useMemo=function(F,ae){return ie.current.useMemo(F,ae)},St.useReducer=function(F,ae,Oe){return ie.current.useReducer(F,ae,Oe)},St.useRef=function(F){return ie.current.useRef(F)},St.useState=function(F){return ie.current.useState(F)},St.useSyncExternalStore=function(F,ae,Oe){return ie.current.useSyncExternalStore(F,ae,Oe)},St.useTransition=function(){return ie.current.useTransition()},St.version="18.3.1",St}var Mg;function Uc(){return Mg||(Mg=1,Pf.exports=Jy()),Pf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function Qy(){if(wg)return aa;wg=1;var i=Uc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var m,g={},v=null,y=null;d!==void 0&&(v=""+d),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(y=h.ref);for(m in h)r.call(h,m)&&!a.hasOwnProperty(m)&&(g[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:u,key:v,ref:y,props:g,_owner:o.current}}return aa.Fragment=t,aa.jsx=c,aa.jsxs=c,aa}var Tg;function eS(){return Tg||(Tg=1,Rf.exports=Qy()),Rf.exports}var D=eS(),Gl={},Nf={exports:{}},In={},Lf={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function tS(){return Ag||(Ag=1,function(i){function e(z,re){var oe=z.length;z.push(re);e:for(;0<oe;){var F=oe-1>>>1,ae=z[F];if(0<o(ae,re))z[F]=re,z[oe]=ae,oe=F;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var re=z[0],oe=z.pop();if(oe!==re){z[0]=oe;e:for(var F=0,ae=z.length,Oe=ae>>>1;F<Oe;){var He=2*(F+1)-1,$e=z[He],le=He+1,pe=z[le];if(0>o($e,oe))le<ae&&0>o(pe,$e)?(z[F]=pe,z[le]=oe,F=le):(z[F]=$e,z[He]=oe,F=He);else if(le<ae&&0>o(pe,oe))z[F]=pe,z[le]=oe,F=le;else break e}}return re}function o(z,re){var oe=z.sortIndex-re.sortIndex;return oe!==0?oe:z.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();i.unstable_now=function(){return c.now()-u}}var h=[],d=[],m=1,g=null,v=3,y=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var re=t(d);re!==null;){if(re.callback===null)r(d);else if(re.startTime<=z)r(d),re.sortIndex=re.expirationTime,e(h,re);else break;re=t(d)}}function T(z){if(M=!1,C(z),!E)if(t(h)!==null)E=!0,ee(U);else{var re=t(d);re!==null&&ie(T,re.startTime-z)}}function U(z,re){E=!1,M&&(M=!1,S(G),G=-1),y=!0;var oe=v;try{for(C(re),g=t(h);g!==null&&(!(g.expirationTime>re)||z&&!V());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var ae=F(g.expirationTime<=re);re=i.unstable_now(),typeof ae=="function"?g.callback=ae:g===t(h)&&r(h),C(re)}else r(h);g=t(h)}if(g!==null)var Oe=!0;else{var He=t(d);He!==null&&ie(T,He.startTime-re),Oe=!1}return Oe}finally{g=null,v=oe,y=!1}}var O=!1,I=null,G=-1,P=5,b=-1;function V(){return!(i.unstable_now()-b<P)}function X(){if(I!==null){var z=i.unstable_now();b=z;var re=!0;try{re=I(!0,z)}finally{re?J():(O=!1,I=null)}}else O=!1}var J;if(typeof N=="function")J=function(){N(X)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=X,J=function(){Q.postMessage(null)}}else J=function(){x(X,0)};function ee(z){I=z,O||(O=!0,J())}function ie(z,re){G=x(function(){z(i.unstable_now())},re)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){E||y||(E=!0,ee(U))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function(z){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var oe=v;v=re;try{return z()}finally{v=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,re){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=v;v=z;try{return re()}finally{v=oe}},i.unstable_scheduleCallback=function(z,re,oe){var F=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=oe+ae,z={id:m++,callback:re,priorityLevel:z,startTime:oe,expirationTime:ae,sortIndex:-1},oe>F?(z.sortIndex=oe,e(d,z),t(h)===null&&z===t(d)&&(M?(S(G),G=-1):M=!0,ie(T,oe-F))):(z.sortIndex=ae,e(h,z),E||y||(E=!0,ee(U))),z},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(z){var re=v;return function(){var oe=v;v=re;try{return z.apply(this,arguments)}finally{v=oe}}}}(Df)),Df}var Cg;function nS(){return Cg||(Cg=1,Lf.exports=tS()),Lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function iS(){if(bg)return In;bg=1;var i=Uc(),e=nS();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return h.call(g,n)?!0:h.call(m,n)?!1:d.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,s,l,f){if(s===null||typeof s>"u"||y(n,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(n,s,l,f,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];x[s]=new M(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(S,N);x[s]=new M(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(S,N);x[s]=new M(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(S,N);x[s]=new M(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,s,l,f){var p=x.hasOwnProperty(s)?x[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,f)&&(l=null),f||p===null?v(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,f=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,f?n.setAttributeNS(f,s,l):n.setAttribute(s,l))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),V=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),z=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function ae(n){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+n}var Oe=!1;function He(n,s){if(!n||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ce){var f=ce}Reflect.construct(n,[],s)}else{try{s.call()}catch(ce){f=ce}n.call(s.prototype)}else{try{throw Error()}catch(ce){f=ce}n()}}catch(ce){if(ce&&f&&typeof ce.stack=="string"){for(var p=ce.stack.split(`
`),_=f.stack.split(`
`),w=p.length-1,k=_.length-1;1<=w&&0<=k&&p[w]!==_[k];)k--;for(;1<=w&&0<=k;w--,k--)if(p[w]!==_[k]){if(w!==1||k!==1)do if(w--,k--,0>k||p[w]!==_[k]){var H=`
`+p[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=k);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ae(n):""}function $e(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case O:return"Portal";case P:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case X:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return s=n.displayName||null,s!==null?s:le(n.type)||"Memo";case ee:s=n._payload,n=n._init;try{return le(n(s))}catch{}}return null}function pe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(s);case 8:return s===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Fe(n){var s=Ue(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),f=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){f=""+w,_.call(this,w)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function vt(n){n._valueTracker||(n._valueTracker=Fe(n))}function bt(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return n&&(f=Ue(n)?n.checked?"true":"false":n.value),n=f,n!==l?(s.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _e(n,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function ve(n,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=we(s.value!=null?s.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ge(n,s){s=s.checked,s!=null&&C(n,"checked",s,!1)}function me(n,s){ge(n,s);var l=we(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Ee(n,s.type,l):s.hasOwnProperty("defaultValue")&&Ee(n,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Ie(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Ee(n,s,l){(s!=="number"||B(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Le=Array.isArray;function ct(n,s,l,f){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&f&&(n[l].defaultSelected=!0)}else{for(l=""+we(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function dt(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Le(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:we(l)}}function A(n,s){var l=we(s.value),f=we(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Z(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?de(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var he,Qe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,f,p)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=he.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Pe(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var Ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(n){et.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ye[s]=Ye[n]})});function Ae(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ye.hasOwnProperty(n)&&Ye[n]?(""+s).trim():s+"px"}function Ve(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,p=Ae(l,s[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,p):n[l]=p}}var ut=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,s){if(s){if(ut[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ke(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,De=null,Ge=null;function Ce(n){if(n=Xo(n)){if(typeof be!="function")throw Error(t(280));var s=n.stateNode;s&&(s=rl(s),be(n.stateNode,n.type,s))}}function xe(n){De?Ge?Ge.push(n):Ge=[n]:De=n}function Je(){if(De){var n=De,s=Ge;if(Ge=De=null,Ce(n),s)for(n=0;n<s.length;n++)Ce(s[n])}}function mt(n,s){return n(s)}function Lt(){}var Tt=!1;function Kn(n,s,l){if(Tt)return n(s,l);Tt=!0;try{return mt(n,s,l)}finally{Tt=!1,(De!==null||Ge!==null)&&(Lt(),Je())}}function pn(n,s){var l=n.stateNode;if(l===null)return null;var f=rl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ms=!1;if(u)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Ms=!1}function Ro(n,s,l,f,p,_,w,k,H){var ce=Array.prototype.slice.call(arguments,3);try{s.apply(l,ce)}catch(Me){this.onError(Me)}}var ar=!1,Xr=null,Oi=!1,ws=null,Ts={onError:function(n){ar=!0,Xr=n}};function Fa(n,s,l,f,p,_,w,k,H){ar=!1,Xr=null,Ro.apply(Ts,arguments)}function ka(n,s,l,f,p,_,w,k,H){if(Fa.apply(this,arguments),ar){if(ar){var ce=Xr;ar=!1,Xr=null}else throw Error(t(198));Oi||(Oi=!0,ws=ce)}}function Fi(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function za(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ba(n){if(Fi(n)!==n)throw Error(t(188))}function Zc(n){var s=n.alternate;if(!s){if(s=Fi(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,f=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){l=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Ba(p),n;if(_===f)return Ba(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=p,f=_;else{for(var w=!1,k=p.child;k;){if(k===l){w=!0,l=p,f=_;break}if(k===f){w=!0,f=p,l=_;break}k=k.sibling}if(!w){for(k=_.child;k;){if(k===l){w=!0,l=_,f=p;break}if(k===f){w=!0,f=_,l=p;break}k=k.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function Va(n){return n=Zc(n),n!==null?Ha(n):null}function Ha(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ha(n);if(s!==null)return s;n=n.sibling}return null}var R=e.unstable_scheduleCallback,K=e.unstable_cancelCallback,ue=e.unstable_shouldYield,fe=e.unstable_requestPaint,Y=e.unstable_now,Re=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,Ke=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,lt=e.unstable_LowPriority,ft=e.unstable_IdlePriority,rt=null,ht=null;function Nt(n){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:st,Ft=Math.log,Dt=Math.LN2;function st(n){return n>>>=0,n===0?32:31-(Ft(n)/Dt|0)|0}var It=64,Et=4194304;function tn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function oi(n,s){var l=n.pendingLanes;if(l===0)return 0;var f=0,p=n.suspendedLanes,_=n.pingedLanes,w=l&268435455;if(w!==0){var k=w&~p;k!==0?f=tn(k):(_&=w,_!==0&&(f=tn(_)))}else w=l&~p,w!==0?f=tn(w):_!==0&&(f=tn(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&p)===0&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=f;0<s;)l=31-At(s),p=1<<l,f|=n[l],s&=~p;return f}function wn(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $r(n,s){for(var l=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var w=31-At(_),k=1<<w,H=p[w];H===-1?((k&l)===0||(k&f)!==0)&&(p[w]=wn(k,s)):H<=s&&(n.expiredLanes|=k),_&=~k}}function kt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=It;return It<<=1,(It&4194240)===0&&(It=64),n}function mn(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function qt(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-At(s),n[s]=l}function gn(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-At(l),_=1<<p;s[p]=0,f[p]=-1,n[p]=-1,l&=~_}}function Yr(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var f=31-At(l),p=1<<f;p&s|n[f]&s&&(n[f]|=s),l&=~p}}var Mt=0;function ep(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var tp,Jc,np,ip,rp,Qc=!1,Ga=[],lr=null,cr=null,ur=null,Po=new Map,No=new Map,fr=[],__="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sp(n,s){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Po.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(s.pointerId)}}function Lo(n,s,l,f,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Xo(s),s!==null&&Jc(s)),n):(n.eventSystemFlags|=f,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function y_(n,s,l,f,p){switch(s){case"focusin":return lr=Lo(lr,n,s,l,f,p),!0;case"dragenter":return cr=Lo(cr,n,s,l,f,p),!0;case"mouseover":return ur=Lo(ur,n,s,l,f,p),!0;case"pointerover":var _=p.pointerId;return Po.set(_,Lo(Po.get(_)||null,n,s,l,f,p)),!0;case"gotpointercapture":return _=p.pointerId,No.set(_,Lo(No.get(_)||null,n,s,l,f,p)),!0}return!1}function op(n){var s=qr(n.target);if(s!==null){var l=Fi(s);if(l!==null){if(s=l.tag,s===13){if(s=za(l),s!==null){n.blockedOn=s,rp(n.priority,function(){np(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wa(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=tu(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);gt=f,l.target.dispatchEvent(f),gt=null}else return s=Xo(l),s!==null&&Jc(s),n.blockedOn=l,!1;s.shift()}return!0}function ap(n,s,l){Wa(n)&&l.delete(s)}function S_(){Qc=!1,lr!==null&&Wa(lr)&&(lr=null),cr!==null&&Wa(cr)&&(cr=null),ur!==null&&Wa(ur)&&(ur=null),Po.forEach(ap),No.forEach(ap)}function Do(n,s){n.blockedOn===s&&(n.blockedOn=null,Qc||(Qc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,S_)))}function Io(n){function s(p){return Do(p,n)}if(0<Ga.length){Do(Ga[0],n);for(var l=1;l<Ga.length;l++){var f=Ga[l];f.blockedOn===n&&(f.blockedOn=null)}}for(lr!==null&&Do(lr,n),cr!==null&&Do(cr,n),ur!==null&&Do(ur,n),Po.forEach(s),No.forEach(s),l=0;l<fr.length;l++)f=fr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<fr.length&&(l=fr[0],l.blockedOn===null);)op(l),l.blockedOn===null&&fr.shift()}var As=T.ReactCurrentBatchConfig,ja=!0;function E_(n,s,l,f){var p=Mt,_=As.transition;As.transition=null;try{Mt=1,eu(n,s,l,f)}finally{Mt=p,As.transition=_}}function M_(n,s,l,f){var p=Mt,_=As.transition;As.transition=null;try{Mt=4,eu(n,s,l,f)}finally{Mt=p,As.transition=_}}function eu(n,s,l,f){if(ja){var p=tu(n,s,l,f);if(p===null)xu(n,s,f,Xa,l),sp(n,f);else if(y_(p,n,s,l,f))f.stopPropagation();else if(sp(n,f),s&4&&-1<__.indexOf(n)){for(;p!==null;){var _=Xo(p);if(_!==null&&tp(_),_=tu(n,s,l,f),_===null&&xu(n,s,f,Xa,l),_===p)break;p=_}p!==null&&f.stopPropagation()}else xu(n,s,f,null,l)}}var Xa=null;function tu(n,s,l,f){if(Xa=null,n=j(f),n=qr(n),n!==null)if(s=Fi(n),s===null)n=null;else if(l=s.tag,l===13){if(n=za(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Xa=n,null}function lp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Re()){case ze:return 1;case Ke:return 4;case We:case lt:return 16;case ft:return 536870912;default:return 16}default:return 16}}var dr=null,nu=null,$a=null;function cp(){if($a)return $a;var n,s=nu,l=s.length,f,p="value"in dr?dr.value:dr.textContent,_=p.length;for(n=0;n<l&&s[n]===p[n];n++);var w=l-n;for(f=1;f<=w&&s[l-f]===p[_-f];f++);return $a=p.slice(n,1<f?1-f:void 0)}function Ya(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function qa(){return!0}function up(){return!1}function Vn(n){function s(l,f,p,_,w){this._reactName=l,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(_):_[k]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?qa:up,this.isPropagationStopped=up,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),s}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Vn(Cs),Uo=oe({},Cs,{view:0,detail:0}),w_=Vn(Uo),ru,su,Oo,Ka=oe({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(ru=n.screenX-Oo.screenX,su=n.screenY-Oo.screenY):su=ru=0,Oo=n),ru)},movementY:function(n){return"movementY"in n?n.movementY:su}}),fp=Vn(Ka),T_=oe({},Ka,{dataTransfer:0}),A_=Vn(T_),C_=oe({},Uo,{relatedTarget:0}),ou=Vn(C_),b_=oe({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),R_=Vn(b_),P_=oe({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),N_=Vn(P_),L_=oe({},Cs,{data:0}),dp=Vn(L_),D_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=U_[n])?!!s[n]:!1}function au(){return O_}var F_=oe({},Uo,{key:function(n){if(n.key){var s=D_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?I_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),k_=Vn(F_),z_=oe({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Vn(z_),B_=oe({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),V_=Vn(B_),H_=oe({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=Vn(H_),W_=oe({},Ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=Vn(W_),X_=[9,13,27,32],lu=u&&"CompositionEvent"in window,Fo=null;u&&"documentMode"in document&&(Fo=document.documentMode);var $_=u&&"TextEvent"in window&&!Fo,pp=u&&(!lu||Fo&&8<Fo&&11>=Fo),mp=" ",gp=!1;function vp(n,s){switch(n){case"keyup":return X_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Y_(n,s){switch(n){case"compositionend":return xp(s);case"keypress":return s.which!==32?null:(gp=!0,mp);case"textInput":return n=s.data,n===mp&&gp?null:n;default:return null}}function q_(n,s){if(bs)return n==="compositionend"||!lu&&vp(n,s)?(n=cp(),$a=nu=dr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return pp&&s.locale!=="ko"?null:s.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!K_[n.type]:s==="textarea"}function yp(n,s,l,f){xe(f),s=tl(s,"onChange"),0<s.length&&(l=new iu("onChange","change",null,l,f),n.push({event:l,listeners:s}))}var ko=null,zo=null;function Z_(n){kp(n,0)}function Za(n){var s=Ds(n);if(bt(s))return n}function J_(n,s){if(n==="change")return s}var Sp=!1;if(u){var cu;if(u){var uu="oninput"in document;if(!uu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),uu=typeof Ep.oninput=="function"}cu=uu}else cu=!1;Sp=cu&&(!document.documentMode||9<document.documentMode)}function Mp(){ko&&(ko.detachEvent("onpropertychange",wp),zo=ko=null)}function wp(n){if(n.propertyName==="value"&&Za(zo)){var s=[];yp(s,zo,n,j(n)),Kn(Z_,s)}}function Q_(n,s,l){n==="focusin"?(Mp(),ko=s,zo=l,ko.attachEvent("onpropertychange",wp)):n==="focusout"&&Mp()}function ey(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Za(zo)}function ty(n,s){if(n==="click")return Za(s)}function ny(n,s){if(n==="input"||n==="change")return Za(s)}function iy(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var ai=typeof Object.is=="function"?Object.is:iy;function Bo(n,s){if(ai(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var p=l[f];if(!h.call(s,p)||!ai(n[p],s[p]))return!1}return!0}function Tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,s){var l=Tp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=s&&f>=s)return{node:l,offset:s-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Tp(l)}}function Cp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Cp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function bp(){for(var n=window,s=B();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=B(n.document)}return s}function fu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function ry(n){var s=bp(),l=n.focusedElem,f=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Cp(l.ownerDocument.documentElement,l)){if(f!==null&&fu(l)){if(s=f.start,n=f.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!n.extend&&_>f&&(p=f,f=_,_=p),p=Ap(l,_);var w=Ap(l,f);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),_>f?(n.addRange(s),n.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sy=u&&"documentMode"in document&&11>=document.documentMode,Rs=null,du=null,Vo=null,hu=!1;function Rp(n,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||Rs==null||Rs!==B(f)||(f=Rs,"selectionStart"in f&&fu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Vo&&Bo(Vo,f)||(Vo=f,f=tl(du,"onSelect"),0<f.length&&(s=new iu("onSelect","select",null,s,l),n.push({event:s,listeners:f}),s.target=Rs)))}function Ja(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Ps={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},pu={},Pp={};u&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Qa(n){if(pu[n])return pu[n];if(!Ps[n])return n;var s=Ps[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in Pp)return pu[n]=s[l];return n}var Np=Qa("animationend"),Lp=Qa("animationiteration"),Dp=Qa("animationstart"),Ip=Qa("transitionend"),Up=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,s){Up.set(n,s),a(s,[n])}for(var mu=0;mu<Op.length;mu++){var gu=Op[mu],oy=gu.toLowerCase(),ay=gu[0].toUpperCase()+gu.slice(1);hr(oy,"on"+ay)}hr(Np,"onAnimationEnd"),hr(Lp,"onAnimationIteration"),hr(Dp,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(Ip,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Fp(n,s,l){var f=n.type||"unknown-event";n.currentTarget=l,ka(f,s,void 0,n),n.currentTarget=null}function kp(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var w=f.length-1;0<=w;w--){var k=f[w],H=k.instance,ce=k.currentTarget;if(k=k.listener,H!==_&&p.isPropagationStopped())break e;Fp(p,k,ce),_=H}else for(w=0;w<f.length;w++){if(k=f[w],H=k.instance,ce=k.currentTarget,k=k.listener,H!==_&&p.isPropagationStopped())break e;Fp(p,k,ce),_=H}}}if(Oi)throw n=ws,Oi=!1,ws=null,n}function Vt(n,s){var l=s[wu];l===void 0&&(l=s[wu]=new Set);var f=n+"__bubble";l.has(f)||(zp(s,n,2,!1),l.add(f))}function vu(n,s,l){var f=0;s&&(f|=4),zp(l,n,f,s)}var el="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[el]){n[el]=!0,r.forEach(function(l){l!=="selectionchange"&&(ly.has(l)||vu(l,!1,n),vu(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[el]||(s[el]=!0,vu("selectionchange",!1,s))}}function zp(n,s,l,f){switch(lp(s)){case 1:var p=E_;break;case 4:p=M_;break;default:p=eu}l=p.bind(null,s,l,n),p=void 0,!Ms||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function xu(n,s,l,f,p){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var k=f.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(w===4)for(w=f.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;w=w.return}for(;k!==null;){if(w=qr(k),w===null)return;if(H=w.tag,H===5||H===6){f=_=w;continue e}k=k.parentNode}}f=f.return}Kn(function(){var ce=_,Me=j(l),Te=[];e:{var Se=Up.get(n);if(Se!==void 0){var je=iu,Ze=n;switch(n){case"keypress":if(Ya(l)===0)break e;case"keydown":case"keyup":je=k_;break;case"focusin":Ze="focus",je=ou;break;case"focusout":Ze="blur",je=ou;break;case"beforeblur":case"afterblur":je=ou;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=A_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=V_;break;case Np:case Lp:case Dp:je=R_;break;case Ip:je=G_;break;case"scroll":je=w_;break;case"wheel":je=j_;break;case"copy":case"cut":case"paste":je=N_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=hp}var tt=(s&4)!==0,Kt=!tt&&n==="scroll",te=tt?Se!==null?Se+"Capture":null:Se;tt=[];for(var $=ce,se;$!==null;){se=$;var Ne=se.stateNode;if(se.tag===5&&Ne!==null&&(se=Ne,te!==null&&(Ne=pn($,te),Ne!=null&&tt.push(Wo($,Ne,se)))),Kt)break;$=$.return}0<tt.length&&(Se=new je(Se,Ze,null,l,Me),Te.push({event:Se,listeners:tt}))}}if((s&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",Se&&l!==gt&&(Ze=l.relatedTarget||l.fromElement)&&(qr(Ze)||Ze[ki]))break e;if((je||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,je?(Ze=l.relatedTarget||l.toElement,je=ce,Ze=Ze?qr(Ze):null,Ze!==null&&(Kt=Fi(Ze),Ze!==Kt||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(je=null,Ze=ce),je!==Ze)){if(tt=fp,Ne="onMouseLeave",te="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(tt=hp,Ne="onPointerLeave",te="onPointerEnter",$="pointer"),Kt=je==null?Se:Ds(je),se=Ze==null?Se:Ds(Ze),Se=new tt(Ne,$+"leave",je,l,Me),Se.target=Kt,Se.relatedTarget=se,Ne=null,qr(Me)===ce&&(tt=new tt(te,$+"enter",Ze,l,Me),tt.target=se,tt.relatedTarget=Kt,Ne=tt),Kt=Ne,je&&Ze)t:{for(tt=je,te=Ze,$=0,se=tt;se;se=Ns(se))$++;for(se=0,Ne=te;Ne;Ne=Ns(Ne))se++;for(;0<$-se;)tt=Ns(tt),$--;for(;0<se-$;)te=Ns(te),se--;for(;$--;){if(tt===te||te!==null&&tt===te.alternate)break t;tt=Ns(tt),te=Ns(te)}tt=null}else tt=null;je!==null&&Bp(Te,Se,je,tt,!1),Ze!==null&&Kt!==null&&Bp(Te,Kt,Ze,tt,!0)}}e:{if(Se=ce?Ds(ce):window,je=Se.nodeName&&Se.nodeName.toLowerCase(),je==="select"||je==="input"&&Se.type==="file")var it=J_;else if(_p(Se))if(Sp)it=ny;else{it=ey;var ot=Q_}else(je=Se.nodeName)&&je.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(it=ty);if(it&&(it=it(n,ce))){yp(Te,it,l,Me);break e}ot&&ot(n,Se,ce),n==="focusout"&&(ot=Se._wrapperState)&&ot.controlled&&Se.type==="number"&&Ee(Se,"number",Se.value)}switch(ot=ce?Ds(ce):window,n){case"focusin":(_p(ot)||ot.contentEditable==="true")&&(Rs=ot,du=ce,Vo=null);break;case"focusout":Vo=du=Rs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Rp(Te,l,Me);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":Rp(Te,l,Me)}var at;if(lu)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else bs?vp(n,l)&&(pt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(pt="onCompositionStart");pt&&(pp&&l.locale!=="ko"&&(bs||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&bs&&(at=cp()):(dr=Me,nu="value"in dr?dr.value:dr.textContent,bs=!0)),ot=tl(ce,pt),0<ot.length&&(pt=new dp(pt,n,null,l,Me),Te.push({event:pt,listeners:ot}),at?pt.data=at:(at=xp(l),at!==null&&(pt.data=at)))),(at=$_?Y_(n,l):q_(n,l))&&(ce=tl(ce,"onBeforeInput"),0<ce.length&&(Me=new dp("onBeforeInput","beforeinput",null,l,Me),Te.push({event:Me,listeners:ce}),Me.data=at))}kp(Te,s)})}function Wo(n,s,l){return{instance:n,listener:s,currentTarget:l}}function tl(n,s){for(var l=s+"Capture",f=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=pn(n,l),_!=null&&f.unshift(Wo(n,_,p)),_=pn(n,s),_!=null&&f.push(Wo(n,_,p))),n=n.return}return f}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bp(n,s,l,f,p){for(var _=s._reactName,w=[];l!==null&&l!==f;){var k=l,H=k.alternate,ce=k.stateNode;if(H!==null&&H===f)break;k.tag===5&&ce!==null&&(k=ce,p?(H=pn(l,_),H!=null&&w.unshift(Wo(l,H,k))):p||(H=pn(l,_),H!=null&&w.push(Wo(l,H,k)))),l=l.return}w.length!==0&&n.push({event:s,listeners:w})}var cy=/\r\n?/g,uy=/\u0000|\uFFFD/g;function Vp(n){return(typeof n=="string"?n:""+n).replace(cy,`
`).replace(uy,"")}function nl(n,s,l){if(s=Vp(s),Vp(n)!==s&&l)throw Error(t(425))}function il(){}var _u=null,yu=null;function Su(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(n){return Hp.resolve(null).then(n).catch(hy)}:Eu;function hy(n){setTimeout(function(){throw n})}function Mu(n,s){var l=s,f=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(f===0){n.removeChild(p),Io(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=p}while(l);Io(s)}function pr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Gp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Ls,jo="__reactProps$"+Ls,ki="__reactContainer$"+Ls,wu="__reactEvents$"+Ls,py="__reactListeners$"+Ls,my="__reactHandles$"+Ls;function qr(n){var s=n[Ei];if(s)return s;for(var l=n.parentNode;l;){if(s=l[ki]||l[Ei]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Gp(n);n!==null;){if(l=n[Ei])return l;n=Gp(n)}return s}n=l,l=n.parentNode}return null}function Xo(n){return n=n[Ei]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function rl(n){return n[jo]||null}var Tu=[],Is=-1;function mr(n){return{current:n}}function Ht(n){0>Is||(n.current=Tu[Is],Tu[Is]=null,Is--)}function Bt(n,s){Is++,Tu[Is]=n.current,n.current=s}var gr={},vn=mr(gr),Rn=mr(!1),Kr=gr;function Us(n,s){var l=n.type.contextTypes;if(!l)return gr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function Pn(n){return n=n.childContextTypes,n!=null}function sl(){Ht(Rn),Ht(vn)}function Wp(n,s,l){if(vn.current!==gr)throw Error(t(168));Bt(vn,s),Bt(Rn,l)}function jp(n,s,l){var f=n.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,pe(n)||"Unknown",p));return oe({},l,f)}function ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Kr=vn.current,Bt(vn,n),Bt(Rn,Rn.current),!0}function Xp(n,s,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=jp(n,s,Kr),f.__reactInternalMemoizedMergedChildContext=n,Ht(Rn),Ht(vn),Bt(vn,n)):Ht(Rn),Bt(Rn,l)}var zi=null,al=!1,Au=!1;function $p(n){zi===null?zi=[n]:zi.push(n)}function gy(n){al=!0,$p(n)}function vr(){if(!Au&&zi!==null){Au=!0;var n=0,s=Mt;try{var l=zi;for(Mt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}zi=null,al=!1}catch(p){throw zi!==null&&(zi=zi.slice(n+1)),R(ze,vr),p}finally{Mt=s,Au=!1}}return null}var Os=[],Fs=0,ll=null,cl=0,Zn=[],Jn=0,Zr=null,Bi=1,Vi="";function Jr(n,s){Os[Fs++]=cl,Os[Fs++]=ll,ll=n,cl=s}function Yp(n,s,l){Zn[Jn++]=Bi,Zn[Jn++]=Vi,Zn[Jn++]=Zr,Zr=n;var f=Bi;n=Vi;var p=32-At(f)-1;f&=~(1<<p),l+=1;var _=32-At(s)+p;if(30<_){var w=p-p%5;_=(f&(1<<w)-1).toString(32),f>>=w,p-=w,Bi=1<<32-At(s)+p|l<<p|f,Vi=_+n}else Bi=1<<_|l<<p|f,Vi=n}function Cu(n){n.return!==null&&(Jr(n,1),Yp(n,1,0))}function bu(n){for(;n===ll;)ll=Os[--Fs],Os[Fs]=null,cl=Os[--Fs],Os[Fs]=null;for(;n===Zr;)Zr=Zn[--Jn],Zn[Jn]=null,Vi=Zn[--Jn],Zn[Jn]=null,Bi=Zn[--Jn],Zn[Jn]=null}var Hn=null,Gn=null,Wt=!1,li=null;function qp(n,s){var l=ni(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function Kp(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Hn=n,Gn=pr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Hn=n,Gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Zr!==null?{id:Bi,overflow:Vi}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ni(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,Hn=n,Gn=null,!0):!1;default:return!1}}function Ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pu(n){if(Wt){var s=Gn;if(s){var l=s;if(!Kp(n,s)){if(Ru(n))throw Error(t(418));s=pr(l.nextSibling);var f=Hn;s&&Kp(n,s)?qp(f,l):(n.flags=n.flags&-4097|2,Wt=!1,Hn=n)}}else{if(Ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Hn=n}}}function Zp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function ul(n){if(n!==Hn)return!1;if(!Wt)return Zp(n),Wt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Su(n.type,n.memoizedProps)),s&&(s=Gn)){if(Ru(n))throw Jp(),Error(t(418));for(;s;)qp(n,s),s=pr(s.nextSibling)}if(Zp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){Gn=pr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}Gn=null}}else Gn=Hn?pr(n.stateNode.nextSibling):null;return!0}function Jp(){for(var n=Gn;n;)n=pr(n.nextSibling)}function ks(){Gn=Hn=null,Wt=!1}function Nu(n){li===null?li=[n]:li.push(n)}var vy=T.ReactCurrentBatchConfig;function $o(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var p=f,_=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var k=p.refs;w===null?delete k[_]:k[_]=w},s._stringRef=_,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function fl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Qp(n){var s=n._init;return s(n._payload)}function em(n){function s(te,$){if(n){var se=te.deletions;se===null?(te.deletions=[$],te.flags|=16):se.push($)}}function l(te,$){if(!n)return null;for(;$!==null;)s(te,$),$=$.sibling;return null}function f(te,$){for(te=new Map;$!==null;)$.key!==null?te.set($.key,$):te.set($.index,$),$=$.sibling;return te}function p(te,$){return te=Tr(te,$),te.index=0,te.sibling=null,te}function _(te,$,se){return te.index=se,n?(se=te.alternate,se!==null?(se=se.index,se<$?(te.flags|=2,$):se):(te.flags|=2,$)):(te.flags|=1048576,$)}function w(te){return n&&te.alternate===null&&(te.flags|=2),te}function k(te,$,se,Ne){return $===null||$.tag!==6?($=Mf(se,te.mode,Ne),$.return=te,$):($=p($,se),$.return=te,$)}function H(te,$,se,Ne){var it=se.type;return it===I?Me(te,$,se.props.children,Ne,se.key):$!==null&&($.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ee&&Qp(it)===$.type)?(Ne=p($,se.props),Ne.ref=$o(te,$,se),Ne.return=te,Ne):(Ne=Ul(se.type,se.key,se.props,null,te.mode,Ne),Ne.ref=$o(te,$,se),Ne.return=te,Ne)}function ce(te,$,se,Ne){return $===null||$.tag!==4||$.stateNode.containerInfo!==se.containerInfo||$.stateNode.implementation!==se.implementation?($=wf(se,te.mode,Ne),$.return=te,$):($=p($,se.children||[]),$.return=te,$)}function Me(te,$,se,Ne,it){return $===null||$.tag!==7?($=os(se,te.mode,Ne,it),$.return=te,$):($=p($,se),$.return=te,$)}function Te(te,$,se){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Mf(""+$,te.mode,se),$.return=te,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case U:return se=Ul($.type,$.key,$.props,null,te.mode,se),se.ref=$o(te,null,$),se.return=te,se;case O:return $=wf($,te.mode,se),$.return=te,$;case ee:var Ne=$._init;return Te(te,Ne($._payload),se)}if(Le($)||re($))return $=os($,te.mode,se,null),$.return=te,$;fl(te,$)}return null}function Se(te,$,se,Ne){var it=$!==null?$.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return it!==null?null:k(te,$,""+se,Ne);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case U:return se.key===it?H(te,$,se,Ne):null;case O:return se.key===it?ce(te,$,se,Ne):null;case ee:return it=se._init,Se(te,$,it(se._payload),Ne)}if(Le(se)||re(se))return it!==null?null:Me(te,$,se,Ne,null);fl(te,se)}return null}function je(te,$,se,Ne,it){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return te=te.get(se)||null,k($,te,""+Ne,it);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case U:return te=te.get(Ne.key===null?se:Ne.key)||null,H($,te,Ne,it);case O:return te=te.get(Ne.key===null?se:Ne.key)||null,ce($,te,Ne,it);case ee:var ot=Ne._init;return je(te,$,se,ot(Ne._payload),it)}if(Le(Ne)||re(Ne))return te=te.get(se)||null,Me($,te,Ne,it,null);fl($,Ne)}return null}function Ze(te,$,se,Ne){for(var it=null,ot=null,at=$,pt=$=0,un=null;at!==null&&pt<se.length;pt++){at.index>pt?(un=at,at=null):un=at.sibling;var Rt=Se(te,at,se[pt],Ne);if(Rt===null){at===null&&(at=un);break}n&&at&&Rt.alternate===null&&s(te,at),$=_(Rt,$,pt),ot===null?it=Rt:ot.sibling=Rt,ot=Rt,at=un}if(pt===se.length)return l(te,at),Wt&&Jr(te,pt),it;if(at===null){for(;pt<se.length;pt++)at=Te(te,se[pt],Ne),at!==null&&($=_(at,$,pt),ot===null?it=at:ot.sibling=at,ot=at);return Wt&&Jr(te,pt),it}for(at=f(te,at);pt<se.length;pt++)un=je(at,te,pt,se[pt],Ne),un!==null&&(n&&un.alternate!==null&&at.delete(un.key===null?pt:un.key),$=_(un,$,pt),ot===null?it=un:ot.sibling=un,ot=un);return n&&at.forEach(function(Ar){return s(te,Ar)}),Wt&&Jr(te,pt),it}function tt(te,$,se,Ne){var it=re(se);if(typeof it!="function")throw Error(t(150));if(se=it.call(se),se==null)throw Error(t(151));for(var ot=it=null,at=$,pt=$=0,un=null,Rt=se.next();at!==null&&!Rt.done;pt++,Rt=se.next()){at.index>pt?(un=at,at=null):un=at.sibling;var Ar=Se(te,at,Rt.value,Ne);if(Ar===null){at===null&&(at=un);break}n&&at&&Ar.alternate===null&&s(te,at),$=_(Ar,$,pt),ot===null?it=Ar:ot.sibling=Ar,ot=Ar,at=un}if(Rt.done)return l(te,at),Wt&&Jr(te,pt),it;if(at===null){for(;!Rt.done;pt++,Rt=se.next())Rt=Te(te,Rt.value,Ne),Rt!==null&&($=_(Rt,$,pt),ot===null?it=Rt:ot.sibling=Rt,ot=Rt);return Wt&&Jr(te,pt),it}for(at=f(te,at);!Rt.done;pt++,Rt=se.next())Rt=je(at,te,pt,Rt.value,Ne),Rt!==null&&(n&&Rt.alternate!==null&&at.delete(Rt.key===null?pt:Rt.key),$=_(Rt,$,pt),ot===null?it=Rt:ot.sibling=Rt,ot=Rt);return n&&at.forEach(function(Ky){return s(te,Ky)}),Wt&&Jr(te,pt),it}function Kt(te,$,se,Ne){if(typeof se=="object"&&se!==null&&se.type===I&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case U:e:{for(var it=se.key,ot=$;ot!==null;){if(ot.key===it){if(it=se.type,it===I){if(ot.tag===7){l(te,ot.sibling),$=p(ot,se.props.children),$.return=te,te=$;break e}}else if(ot.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ee&&Qp(it)===ot.type){l(te,ot.sibling),$=p(ot,se.props),$.ref=$o(te,ot,se),$.return=te,te=$;break e}l(te,ot);break}else s(te,ot);ot=ot.sibling}se.type===I?($=os(se.props.children,te.mode,Ne,se.key),$.return=te,te=$):(Ne=Ul(se.type,se.key,se.props,null,te.mode,Ne),Ne.ref=$o(te,$,se),Ne.return=te,te=Ne)}return w(te);case O:e:{for(ot=se.key;$!==null;){if($.key===ot)if($.tag===4&&$.stateNode.containerInfo===se.containerInfo&&$.stateNode.implementation===se.implementation){l(te,$.sibling),$=p($,se.children||[]),$.return=te,te=$;break e}else{l(te,$);break}else s(te,$);$=$.sibling}$=wf(se,te.mode,Ne),$.return=te,te=$}return w(te);case ee:return ot=se._init,Kt(te,$,ot(se._payload),Ne)}if(Le(se))return Ze(te,$,se,Ne);if(re(se))return tt(te,$,se,Ne);fl(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,$!==null&&$.tag===6?(l(te,$.sibling),$=p($,se),$.return=te,te=$):(l(te,$),$=Mf(se,te.mode,Ne),$.return=te,te=$),w(te)):l(te,$)}return Kt}var zs=em(!0),tm=em(!1),dl=mr(null),hl=null,Bs=null,Lu=null;function Du(){Lu=Bs=hl=null}function Iu(n){var s=dl.current;Ht(dl),n._currentValue=s}function Uu(n,s,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),n===l)break;n=n.return}}function Vs(n,s){hl=n,Lu=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Nn=!0),n.firstContext=null)}function Qn(n){var s=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:s,next:null},Bs===null){if(hl===null)throw Error(t(308));Bs=n,hl.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return s}var Qr=null;function Ou(n){Qr===null?Qr=[n]:Qr.push(n)}function nm(n,s,l,f){var p=s.interleaved;return p===null?(l.next=l,Ou(s)):(l.next=p.next,p.next=l),s.interleaved=l,Hi(n,f)}function Hi(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var xr=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function _r(n,s,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Ct&2)!==0){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,Hi(n,l)}return p=f.interleaved,p===null?(s.next=s,Ou(f)):(s.next=p.next,p.next=s),f.interleaved=s,Hi(n,l)}function pl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=n.pendingLanes,l|=f,s.lanes=l,Yr(n,l)}}function rm(n,s){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function ml(n,s,l,f){var p=n.updateQueue;xr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var H=k,ce=H.next;H.next=null,w===null?_=ce:w.next=ce,w=H;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,k=Me.lastBaseUpdate,k!==w&&(k===null?Me.firstBaseUpdate=ce:k.next=ce,Me.lastBaseUpdate=H))}if(_!==null){var Te=p.baseState;w=0,Me=ce=H=null,k=_;do{var Se=k.lane,je=k.eventTime;if((f&Se)===Se){Me!==null&&(Me=Me.next={eventTime:je,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ze=n,tt=k;switch(Se=s,je=l,tt.tag){case 1:if(Ze=tt.payload,typeof Ze=="function"){Te=Ze.call(je,Te,Se);break e}Te=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=tt.payload,Se=typeof Ze=="function"?Ze.call(je,Te,Se):Ze,Se==null)break e;Te=oe({},Te,Se);break e;case 2:xr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Se=p.effects,Se===null?p.effects=[k]:Se.push(k))}else je={eventTime:je,lane:Se,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Me===null?(ce=Me=je,H=Te):Me=Me.next=je,w|=Se;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;Se=k,k=Se.next,Se.next=null,p.lastBaseUpdate=Se,p.shared.pending=null}}while(!0);if(Me===null&&(H=Te),p.baseState=H,p.firstBaseUpdate=ce,p.lastBaseUpdate=Me,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ns|=w,n.lanes=w,n.memoizedState=Te}}function sm(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var f=n[s],p=f.callback;if(p!==null){if(f.callback=null,f=l,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var Yo={},Mi=mr(Yo),qo=mr(Yo),Ko=mr(Yo);function es(n){if(n===Yo)throw Error(t(174));return n}function ku(n,s){switch(Bt(Ko,s),Bt(qo,n),Bt(Mi,Yo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ye(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=ye(s,n)}Ht(Mi),Bt(Mi,s)}function Hs(){Ht(Mi),Ht(qo),Ht(Ko)}function om(n){es(Ko.current);var s=es(Mi.current),l=ye(s,n.type);s!==l&&(Bt(qo,n),Bt(Mi,l))}function zu(n){qo.current===n&&(Ht(Mi),Ht(qo))}var jt=mr(0);function gl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Bu=[];function Vu(){for(var n=0;n<Bu.length;n++)Bu[n]._workInProgressVersionPrimary=null;Bu.length=0}var vl=T.ReactCurrentDispatcher,Hu=T.ReactCurrentBatchConfig,ts=0,Xt=null,nn=null,ln=null,xl=!1,Zo=!1,Jo=0,xy=0;function xn(){throw Error(t(321))}function Gu(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!ai(n[l],s[l]))return!1;return!0}function Wu(n,s,l,f,p,_){if(ts=_,Xt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,vl.current=n===null||n.memoizedState===null?Ey:My,n=l(f,p),Zo){_=0;do{if(Zo=!1,Jo=0,25<=_)throw Error(t(301));_+=1,ln=nn=null,s.updateQueue=null,vl.current=wy,n=l(f,p)}while(Zo)}if(vl.current=Sl,s=nn!==null&&nn.next!==null,ts=0,ln=nn=Xt=null,xl=!1,s)throw Error(t(300));return n}function ju(){var n=Jo!==0;return Jo=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Xt.memoizedState=ln=n:ln=ln.next=n,ln}function ei(){if(nn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var s=ln===null?Xt.memoizedState:ln.next;if(s!==null)ln=s,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?Xt.memoizedState=ln=n:ln=ln.next=n}return ln}function Qo(n,s){return typeof s=="function"?s(n):s}function Xu(n){var s=ei(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=nn,p=f.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}f.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,f=f.baseState;var k=w=null,H=null,ce=_;do{var Me=ce.lane;if((ts&Me)===Me)H!==null&&(H=H.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),f=ce.hasEagerState?ce.eagerState:n(f,ce.action);else{var Te={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};H===null?(k=H=Te,w=f):H=H.next=Te,Xt.lanes|=Me,ns|=Me}ce=ce.next}while(ce!==null&&ce!==_);H===null?w=f:H.next=k,ai(f,s.memoizedState)||(Nn=!0),s.memoizedState=f,s.baseState=w,s.baseQueue=H,l.lastRenderedState=f}if(n=l.interleaved,n!==null){p=n;do _=p.lane,Xt.lanes|=_,ns|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function $u(n){var s=ei(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=n(_,w.action),w=w.next;while(w!==p);ai(_,s.memoizedState)||(Nn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function am(){}function lm(n,s){var l=Xt,f=ei(),p=s(),_=!ai(f.memoizedState,p);if(_&&(f.memoizedState=p,Nn=!0),f=f.queue,Yu(fm.bind(null,l,f,n),[n]),f.getSnapshot!==s||_||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,ea(9,um.bind(null,l,f,p,s),void 0,null),cn===null)throw Error(t(349));(ts&30)!==0||cm(l,s,p)}return p}function cm(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function um(n,s,l,f){s.value=l,s.getSnapshot=f,dm(s)&&hm(n)}function fm(n,s,l){return l(function(){dm(s)&&hm(n)})}function dm(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!ai(n,l)}catch{return!0}}function hm(n){var s=Hi(n,1);s!==null&&di(s,n,1,-1)}function pm(n){var s=wi();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:n},s.queue=n,n=n.dispatch=Sy.bind(null,Xt,n),[s.memoizedState,n]}function ea(n,s,l,f){return n={tag:n,create:s,destroy:l,deps:f,next:null},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,s.lastEffect=n)),n}function mm(){return ei().memoizedState}function _l(n,s,l,f){var p=wi();Xt.flags|=n,p.memoizedState=ea(1|s,l,void 0,f===void 0?null:f)}function yl(n,s,l,f){var p=ei();f=f===void 0?null:f;var _=void 0;if(nn!==null){var w=nn.memoizedState;if(_=w.destroy,f!==null&&Gu(f,w.deps)){p.memoizedState=ea(s,l,_,f);return}}Xt.flags|=n,p.memoizedState=ea(1|s,l,_,f)}function gm(n,s){return _l(8390656,8,n,s)}function Yu(n,s){return yl(2048,8,n,s)}function vm(n,s){return yl(4,2,n,s)}function xm(n,s){return yl(4,4,n,s)}function _m(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function ym(n,s,l){return l=l!=null?l.concat([n]):null,yl(4,4,_m.bind(null,s,n),l)}function qu(){}function Sm(n,s){var l=ei();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Gu(s,f[1])?f[0]:(l.memoizedState=[n,s],n)}function Em(n,s){var l=ei();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Gu(s,f[1])?f[0]:(n=n(),l.memoizedState=[n,s],n)}function Mm(n,s,l){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=l):(ai(l,s)||(l=Tn(),Xt.lanes|=l,ns|=l,n.baseState=!0),s)}function _y(n,s){var l=Mt;Mt=l!==0&&4>l?l:4,n(!0);var f=Hu.transition;Hu.transition={};try{n(!1),s()}finally{Mt=l,Hu.transition=f}}function wm(){return ei().memoizedState}function yy(n,s,l){var f=Mr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Tm(n))Am(s,l);else if(l=nm(n,s,l,f),l!==null){var p=Cn();di(l,n,f,p),Cm(l,s,f)}}function Sy(n,s,l){var f=Mr(n),p={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Tm(n))Am(s,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,k=_(w,l);if(p.hasEagerState=!0,p.eagerState=k,ai(k,w)){var H=s.interleaved;H===null?(p.next=p,Ou(s)):(p.next=H.next,H.next=p),s.interleaved=p;return}}catch{}finally{}l=nm(n,s,p,f),l!==null&&(p=Cn(),di(l,n,f,p),Cm(l,s,f))}}function Tm(n){var s=n.alternate;return n===Xt||s!==null&&s===Xt}function Am(n,s){Zo=xl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Cm(n,s,l){if((l&4194240)!==0){var f=s.lanes;f&=n.pendingLanes,l|=f,s.lanes=l,Yr(n,l)}}var Sl={readContext:Qn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},Ey={readContext:Qn,useCallback:function(n,s){return wi().memoizedState=[n,s===void 0?null:s],n},useContext:Qn,useEffect:gm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,_l(4194308,4,_m.bind(null,s,n),l)},useLayoutEffect:function(n,s){return _l(4194308,4,n,s)},useInsertionEffect:function(n,s){return _l(4,2,n,s)},useMemo:function(n,s){var l=wi();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var f=wi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},f.queue=n,n=n.dispatch=yy.bind(null,Xt,n),[f.memoizedState,n]},useRef:function(n){var s=wi();return n={current:n},s.memoizedState=n},useState:pm,useDebugValue:qu,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=pm(!1),s=n[0];return n=_y.bind(null,n[1]),wi().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var f=Xt,p=wi();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),cn===null)throw Error(t(349));(ts&30)!==0||cm(f,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,gm(fm.bind(null,f,_,n),[n]),f.flags|=2048,ea(9,um.bind(null,f,_,l,s),void 0,null),l},useId:function(){var n=wi(),s=cn.identifierPrefix;if(Wt){var l=Vi,f=Bi;l=(f&~(1<<32-At(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Jo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=xy++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},My={readContext:Qn,useCallback:Sm,useContext:Qn,useEffect:Yu,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Xu,useRef:mm,useState:function(){return Xu(Qo)},useDebugValue:qu,useDeferredValue:function(n){var s=ei();return Mm(s,nn.memoizedState,n)},useTransition:function(){var n=Xu(Qo)[0],s=ei().memoizedState;return[n,s]},useMutableSource:am,useSyncExternalStore:lm,useId:wm,unstable_isNewReconciler:!1},wy={readContext:Qn,useCallback:Sm,useContext:Qn,useEffect:Yu,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:$u,useRef:mm,useState:function(){return $u(Qo)},useDebugValue:qu,useDeferredValue:function(n){var s=ei();return nn===null?s.memoizedState=n:Mm(s,nn.memoizedState,n)},useTransition:function(){var n=$u(Qo)[0],s=ei().memoizedState;return[n,s]},useMutableSource:am,useSyncExternalStore:lm,useId:wm,unstable_isNewReconciler:!1};function ci(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function Ku(n,s,l,f){s=n.memoizedState,l=l(f,s),l=l==null?s:oe({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var El={isMounted:function(n){return(n=n._reactInternals)?Fi(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var f=Cn(),p=Mr(n),_=Gi(f,p);_.payload=s,l!=null&&(_.callback=l),s=_r(n,_,p),s!==null&&(di(s,n,p,f),pl(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var f=Cn(),p=Mr(n),_=Gi(f,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=_r(n,_,p),s!==null&&(di(s,n,p,f),pl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Cn(),f=Mr(n),p=Gi(l,f);p.tag=2,s!=null&&(p.callback=s),s=_r(n,p,f),s!==null&&(di(s,n,f,l),pl(s,n,f))}};function bm(n,s,l,f,p,_,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,_,w):s.prototype&&s.prototype.isPureReactComponent?!Bo(l,f)||!Bo(p,_):!0}function Rm(n,s,l){var f=!1,p=gr,_=s.contextType;return typeof _=="object"&&_!==null?_=Qn(_):(p=Pn(s)?Kr:vn.current,f=s.contextTypes,_=(f=f!=null)?Us(n,p):gr),s=new s(l,_),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=El,n.stateNode=s,s._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),s}function Pm(n,s,l,f){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==n&&El.enqueueReplaceState(s,s.state,null)}function Zu(n,s,l,f){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Fu(n);var _=s.contextType;typeof _=="object"&&_!==null?p.context=Qn(_):(_=Pn(s)?Kr:vn.current,p.context=Us(n,_)),p.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Ku(n,s,_,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&El.enqueueReplaceState(p,p.state,null),ml(n,l,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,s){try{var l="",f=s;do l+=$e(f),f=f.return;while(f);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:s,stack:p,digest:null}}function Ju(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Qu(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Ty=typeof WeakMap=="function"?WeakMap:Map;function Nm(n,s,l){l=Gi(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Rl||(Rl=!0,mf=f),Qu(n,s)},l}function Lm(n,s,l){l=Gi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;l.payload=function(){return f(p)},l.callback=function(){Qu(n,s)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Qu(n,s),typeof f!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function Dm(n,s,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Ty;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(l)||(p.add(l),n=zy.bind(null,n,s,l),s.then(n,n))}function Im(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Um(n,s,l,f,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Gi(-1,1),s.tag=2,_r(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Ay=T.ReactCurrentOwner,Nn=!1;function An(n,s,l,f){s.child=n===null?tm(s,null,l,f):zs(s,n.child,l,f)}function Om(n,s,l,f,p){l=l.render;var _=s.ref;return Vs(s,p),f=Wu(n,s,l,f,_,p),l=ju(),n!==null&&!Nn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Wi(n,s,p)):(Wt&&l&&Cu(s),s.flags|=1,An(n,s,f,p),s.child)}function Fm(n,s,l,f,p){if(n===null){var _=l.type;return typeof _=="function"&&!Ef(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,km(n,s,_,f,p)):(n=Ul(l.type,null,f,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(_=n.child,(n.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:Bo,l(w,f)&&n.ref===s.ref)return Wi(n,s,p)}return s.flags|=1,n=Tr(_,f),n.ref=s.ref,n.return=s,s.child=n}function km(n,s,l,f,p){if(n!==null){var _=n.memoizedProps;if(Bo(_,f)&&n.ref===s.ref)if(Nn=!1,s.pendingProps=f=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Nn=!0);else return s.lanes=n.lanes,Wi(n,s,p)}return ef(n,s,l,f,p)}function zm(n,s,l){var f=s.pendingProps,p=f.children,_=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(js,Wn),Wn|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Bt(js,Wn),Wn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Bt(js,Wn),Wn|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Bt(js,Wn),Wn|=f;return An(n,s,p,l),s.child}function Bm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ef(n,s,l,f,p){var _=Pn(l)?Kr:vn.current;return _=Us(s,_),Vs(s,p),l=Wu(n,s,l,f,_,p),f=ju(),n!==null&&!Nn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Wi(n,s,p)):(Wt&&f&&Cu(s),s.flags|=1,An(n,s,l,p),s.child)}function Vm(n,s,l,f,p){if(Pn(l)){var _=!0;ol(s)}else _=!1;if(Vs(s,p),s.stateNode===null)wl(n,s),Rm(s,l,f),Zu(s,l,f,p),f=!0;else if(n===null){var w=s.stateNode,k=s.memoizedProps;w.props=k;var H=w.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=Qn(ce):(ce=Pn(l)?Kr:vn.current,ce=Us(s,ce));var Me=l.getDerivedStateFromProps,Te=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==f||H!==ce)&&Pm(s,w,f,ce),xr=!1;var Se=s.memoizedState;w.state=Se,ml(s,f,w,p),H=s.memoizedState,k!==f||Se!==H||Rn.current||xr?(typeof Me=="function"&&(Ku(s,l,Me,f),H=s.memoizedState),(k=xr||bm(s,l,k,f,Se,H,ce))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=H),w.props=f,w.state=H,w.context=ce,f=k):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{w=s.stateNode,im(n,s),k=s.memoizedProps,ce=s.type===s.elementType?k:ci(s.type,k),w.props=ce,Te=s.pendingProps,Se=w.context,H=l.contextType,typeof H=="object"&&H!==null?H=Qn(H):(H=Pn(l)?Kr:vn.current,H=Us(s,H));var je=l.getDerivedStateFromProps;(Me=typeof je=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==Te||Se!==H)&&Pm(s,w,f,H),xr=!1,Se=s.memoizedState,w.state=Se,ml(s,f,w,p);var Ze=s.memoizedState;k!==Te||Se!==Ze||Rn.current||xr?(typeof je=="function"&&(Ku(s,l,je,f),Ze=s.memoizedState),(ce=xr||bm(s,l,ce,f,Se,Ze,H)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,Ze,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,Ze,H)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&Se===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Se===n.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Ze),w.props=f,w.state=Ze,w.context=H,f=ce):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&Se===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Se===n.memoizedState||(s.flags|=1024),f=!1)}return tf(n,s,l,f,_,p)}function tf(n,s,l,f,p,_){Bm(n,s);var w=(s.flags&128)!==0;if(!f&&!w)return p&&Xp(s,l,!1),Wi(n,s,_);f=s.stateNode,Ay.current=s;var k=w&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,n!==null&&w?(s.child=zs(s,n.child,null,_),s.child=zs(s,null,k,_)):An(n,s,k,_),s.memoizedState=f.state,p&&Xp(s,l,!0),s.child}function Hm(n){var s=n.stateNode;s.pendingContext?Wp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Wp(n,s.context,!1),ku(n,s.containerInfo)}function Gm(n,s,l,f,p){return ks(),Nu(p),s.flags|=256,An(n,s,l,f),s.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,s,l){var f=s.pendingProps,p=jt.current,_=!1,w=(s.flags&128)!==0,k;if((k=w)||(k=n!==null&&n.memoizedState===null?!1:(p&2)!==0),k?(_=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Bt(jt,p&1),n===null)return Pu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=f.children,n=f.fallback,_?(f=s.mode,_=s.child,w={mode:"hidden",children:w},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=Ol(w,f,0,null),n=os(n,f,l,null),_.return=s,n.return=s,_.sibling=n,s.child=_,s.child.memoizedState=rf(l),s.memoizedState=nf,n):sf(s,w));if(p=n.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return Cy(n,s,w,f,k,p,l);if(_){_=f.fallback,w=s.mode,p=n.child,k=p.sibling;var H={mode:"hidden",children:f.children};return(w&1)===0&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=H,s.deletions=null):(f=Tr(p,H),f.subtreeFlags=p.subtreeFlags&14680064),k!==null?_=Tr(k,_):(_=os(_,w,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,w=n.child.memoizedState,w=w===null?rf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=n.childLanes&~l,s.memoizedState=nf,f}return _=n.child,n=_.sibling,f=Tr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=f,s.memoizedState=null,f}function sf(n,s){return s=Ol({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Ml(n,s,l,f){return f!==null&&Nu(f),zs(s,n.child,null,l),n=sf(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Cy(n,s,l,f,p,_,w){if(l)return s.flags&256?(s.flags&=-257,f=Ju(Error(t(422))),Ml(n,s,w,f)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=Ol({mode:"visible",children:f.children},p,0,null),_=os(_,p,w,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&zs(s,n.child,null,w),s.child.memoizedState=rf(w),s.memoizedState=nf,_);if((s.mode&1)===0)return Ml(n,s,w,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var k=f.dgst;return f=k,_=Error(t(419)),f=Ju(_,f,void 0),Ml(n,s,w,f)}if(k=(w&n.childLanes)!==0,Nn||k){if(f=cn,f!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Hi(n,p),di(f,n,p,-1))}return Sf(),f=Ju(Error(t(421))),Ml(n,s,w,f)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=By.bind(null,n),p._reactRetry=s,null):(n=_.treeContext,Gn=pr(p.nextSibling),Hn=s,Wt=!0,li=null,n!==null&&(Zn[Jn++]=Bi,Zn[Jn++]=Vi,Zn[Jn++]=Zr,Bi=n.id,Vi=n.overflow,Zr=s),s=sf(s,f.children),s.flags|=4096,s)}function jm(n,s,l){n.lanes|=s;var f=n.alternate;f!==null&&(f.lanes|=s),Uu(n.return,s,l)}function of(n,s,l,f,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=p)}function Xm(n,s,l){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(An(n,s,f.children,l),f=jt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jm(n,l,s);else if(n.tag===19)jm(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Bt(jt,f),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&gl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),of(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&gl(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}of(s,!0,l,null,_);break;case"together":of(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function wl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Wi(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),ns|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Tr(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Tr(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function by(n,s,l){switch(s.tag){case 3:Hm(s),ks();break;case 5:om(s);break;case 1:Pn(s.type)&&ol(s);break;case 4:ku(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Bt(dl,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Bt(jt,jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Wm(n,s,l):(Bt(jt,jt.current&1),n=Wi(n,s,l),n!==null?n.sibling:null);Bt(jt,jt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(n.flags&128)!==0){if(f)return Xm(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Bt(jt,jt.current),f)break;return null;case 22:case 23:return s.lanes=0,zm(n,s,l)}return Wi(n,s,l)}var $m,af,Ym,qm;$m=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},af=function(){},Ym=function(n,s,l,f){var p=n.memoizedProps;if(p!==f){n=s.stateNode,es(Mi.current);var _=null;switch(l){case"input":p=_e(n,p),f=_e(n,f),_=[];break;case"select":p=oe({},p,{value:void 0}),f=oe({},f,{value:void 0}),_=[];break;case"textarea":p=dt(n,p),f=dt(n,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=il)}nt(l,f);var w;l=null;for(ce in p)if(!f.hasOwnProperty(ce)&&p.hasOwnProperty(ce)&&p[ce]!=null)if(ce==="style"){var k=p[ce];for(w in k)k.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?_||(_=[]):(_=_||[]).push(ce,null));for(ce in f){var H=f[ce];if(k=p!=null?p[ce]:void 0,f.hasOwnProperty(ce)&&H!==k&&(H!=null||k!=null))if(ce==="style")if(k){for(w in k)!k.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in H)H.hasOwnProperty(w)&&k[w]!==H[w]&&(l||(l={}),l[w]=H[w])}else l||(_||(_=[]),_.push(ce,l)),l=H;else ce==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,k=k?k.__html:void 0,H!=null&&k!==H&&(_=_||[]).push(ce,H)):ce==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(ce,""+H):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(H!=null&&ce==="onScroll"&&Vt("scroll",n),_||k===H||(_=[])):(_=_||[]).push(ce,H))}l&&(_=_||[]).push("style",l);var ce=_;(s.updateQueue=ce)&&(s.flags|=4)}},qm=function(n,s,l,f){l!==f&&(s.flags|=4)};function ta(n,s){if(!Wt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function _n(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=l,s}function Ry(n,s,l){var f=s.pendingProps;switch(bu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(s),null;case 1:return Pn(s.type)&&sl(),_n(s),null;case 3:return f=s.stateNode,Hs(),Ht(Rn),Ht(vn),Vu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(ul(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,li!==null&&(xf(li),li=null))),af(n,s),_n(s),null;case 5:zu(s);var p=es(Ko.current);if(l=s.type,n!==null&&s.stateNode!=null)Ym(n,s,l,f,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return _n(s),null}if(n=es(Mi.current),ul(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[Ei]=s,f[jo]=_,n=(s.mode&1)!==0,l){case"dialog":Vt("cancel",f),Vt("close",f);break;case"iframe":case"object":case"embed":Vt("load",f);break;case"video":case"audio":for(p=0;p<Ho.length;p++)Vt(Ho[p],f);break;case"source":Vt("error",f);break;case"img":case"image":case"link":Vt("error",f),Vt("load",f);break;case"details":Vt("toggle",f);break;case"input":ve(f,_),Vt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",f);break;case"textarea":L(f,_),Vt("invalid",f)}nt(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var k=_[w];w==="children"?typeof k=="string"?f.textContent!==k&&(_.suppressHydrationWarning!==!0&&nl(f.textContent,k,n),p=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(_.suppressHydrationWarning!==!0&&nl(f.textContent,k,n),p=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&Vt("scroll",f)}switch(l){case"input":vt(f),Ie(f,_,!0);break;case"textarea":vt(f),Z(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=il)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=w.createElement(l,{is:f.is}):(n=w.createElement(l),l==="select"&&(w=n,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):n=w.createElementNS(n,l),n[Ei]=s,n[jo]=f,$m(n,s,!1,!1),s.stateNode=n;e:{switch(w=ke(l,f),l){case"dialog":Vt("cancel",n),Vt("close",n),p=f;break;case"iframe":case"object":case"embed":Vt("load",n),p=f;break;case"video":case"audio":for(p=0;p<Ho.length;p++)Vt(Ho[p],n);p=f;break;case"source":Vt("error",n),p=f;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),p=f;break;case"details":Vt("toggle",n),p=f;break;case"input":ve(n,f),p=_e(n,f),Vt("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=oe({},f,{value:void 0}),Vt("invalid",n);break;case"textarea":L(n,f),p=dt(n,f),Vt("invalid",n);break;default:p=f}nt(l,p),k=p;for(_ in k)if(k.hasOwnProperty(_)){var H=k[_];_==="style"?Ve(n,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Qe(n,H)):_==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&Pe(n,H):typeof H=="number"&&Pe(n,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Vt("scroll",n):H!=null&&C(n,_,H,w))}switch(l){case"input":vt(n),Ie(n,f,!1);break;case"textarea":vt(n),Z(n);break;case"option":f.value!=null&&n.setAttribute("value",""+we(f.value));break;case"select":n.multiple=!!f.multiple,_=f.value,_!=null?ct(n,!!f.multiple,_,!1):f.defaultValue!=null&&ct(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=il)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return _n(s),null;case 6:if(n&&s.stateNode!=null)qm(n,s,n.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=es(Ko.current),es(Mi.current),ul(s)){if(f=s.stateNode,l=s.memoizedProps,f[Ei]=s,(_=f.nodeValue!==l)&&(n=Hn,n!==null))switch(n.tag){case 3:nl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nl(f.nodeValue,l,(n.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Ei]=s,s.stateNode=f}return _n(s),null;case 13:if(Ht(jt),f=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Gn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Jp(),ks(),s.flags|=98560,_=!1;else if(_=ul(s),f!==null&&f.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ei]=s}else ks(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_n(s),_=!1}else li!==null&&(xf(li),li=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(jt.current&1)!==0?rn===0&&(rn=3):Sf())),s.updateQueue!==null&&(s.flags|=4),_n(s),null);case 4:return Hs(),af(n,s),n===null&&Go(s.stateNode.containerInfo),_n(s),null;case 10:return Iu(s.type._context),_n(s),null;case 17:return Pn(s.type)&&sl(),_n(s),null;case 19:if(Ht(jt),_=s.memoizedState,_===null)return _n(s),null;if(f=(s.flags&128)!==0,w=_.rendering,w===null)if(f)ta(_,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(w=gl(n),w!==null){for(s.flags|=128,ta(_,!1),f=w.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,n=f,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,n=w.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt(jt,jt.current&1|2),s.child}n=n.sibling}_.tail!==null&&Y()>Xs&&(s.flags|=128,f=!0,ta(_,!1),s.lanes=4194304)}else{if(!f)if(n=gl(w),n!==null){if(s.flags|=128,f=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ta(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Wt)return _n(s),null}else 2*Y()-_.renderingStartTime>Xs&&l!==1073741824&&(s.flags|=128,f=!0,ta(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(l=_.last,l!==null?l.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Y(),s.sibling=null,l=jt.current,Bt(jt,f?l&1|2:l&1),s):(_n(s),null);case 22:case 23:return yf(),f=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Wn&1073741824)!==0&&(_n(s),s.subtreeFlags&6&&(s.flags|=8192)):_n(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Py(n,s){switch(bu(s),s.tag){case 1:return Pn(s.type)&&sl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Hs(),Ht(Rn),Ht(vn),Vu(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return zu(s),null;case 13:if(Ht(jt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ks()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ht(jt),null;case 4:return Hs(),null;case 10:return Iu(s.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Tl=!1,yn=!1,Ny=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Ws(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Yt(n,s,f)}else l.current=null}function lf(n,s,l){try{l()}catch(f){Yt(n,s,f)}}var Km=!1;function Ly(n,s){if(_u=ja,n=bp(),fu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,k=-1,H=-1,ce=0,Me=0,Te=n,Se=null;t:for(;;){for(var je;Te!==l||p!==0&&Te.nodeType!==3||(k=w+p),Te!==_||f!==0&&Te.nodeType!==3||(H=w+f),Te.nodeType===3&&(w+=Te.nodeValue.length),(je=Te.firstChild)!==null;)Se=Te,Te=je;for(;;){if(Te===n)break t;if(Se===l&&++ce===p&&(k=w),Se===_&&++Me===f&&(H=w),(je=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=je}l=k===-1||H===-1?null:{start:k,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(yu={focusedElem:n,selectionRange:l},ja=!1,qe=s;qe!==null;)if(s=qe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,qe=n;else for(;qe!==null;){s=qe;try{var Ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var tt=Ze.memoizedProps,Kt=Ze.memoizedState,te=s.stateNode,$=te.getSnapshotBeforeUpdate(s.elementType===s.type?tt:ci(s.type,tt),Kt);te.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){Yt(s,s.return,Ne)}if(n=s.sibling,n!==null){n.return=s.return,qe=n;break}qe=s.return}return Ze=Km,Km=!1,Ze}function na(n,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&lf(s,l,_)}p=p.next}while(p!==f)}}function Al(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function cf(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function Zm(n){var s=n.alternate;s!==null&&(n.alternate=null,Zm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ei],delete s[jo],delete s[wu],delete s[py],delete s[my])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jm(n){return n.tag===5||n.tag===3||n.tag===4}function Qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uf(n,s,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=il));else if(f!==4&&(n=n.child,n!==null))for(uf(n,s,l),n=n.sibling;n!==null;)uf(n,s,l),n=n.sibling}function ff(n,s,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(ff(n,s,l),n=n.sibling;n!==null;)ff(n,s,l),n=n.sibling}var dn=null,ui=!1;function yr(n,s,l){for(l=l.child;l!==null;)eg(n,s,l),l=l.sibling}function eg(n,s,l){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(rt,l)}catch{}switch(l.tag){case 5:yn||Ws(l,s);case 6:var f=dn,p=ui;dn=null,yr(n,s,l),dn=f,ui=p,dn!==null&&(ui?(n=dn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(ui?(n=dn,l=l.stateNode,n.nodeType===8?Mu(n.parentNode,l):n.nodeType===1&&Mu(n,l),Io(n)):Mu(dn,l.stateNode));break;case 4:f=dn,p=ui,dn=l.stateNode.containerInfo,ui=!0,yr(n,s,l),dn=f,ui=p;break;case 0:case 11:case 14:case 15:if(!yn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&lf(l,s,w),p=p.next}while(p!==f)}yr(n,s,l);break;case 1:if(!yn&&(Ws(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(k){Yt(l,s,k)}yr(n,s,l);break;case 21:yr(n,s,l);break;case 22:l.mode&1?(yn=(f=yn)||l.memoizedState!==null,yr(n,s,l),yn=f):yr(n,s,l);break;default:yr(n,s,l)}}function tg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Ny),s.forEach(function(f){var p=Vy.bind(null,n,f);l.has(f)||(l.add(f),f.then(p,p))})}}function fi(n,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var p=l[f];try{var _=n,w=s,k=w;e:for(;k!==null;){switch(k.tag){case 5:dn=k.stateNode,ui=!1;break e;case 3:dn=k.stateNode.containerInfo,ui=!0;break e;case 4:dn=k.stateNode.containerInfo,ui=!0;break e}k=k.return}if(dn===null)throw Error(t(160));eg(_,w,p),dn=null,ui=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(ce){Yt(p,s,ce)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ng(s,n),s=s.sibling}function ng(n,s){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(s,n),Ti(n),f&4){try{na(3,n,n.return),Al(3,n)}catch(tt){Yt(n,n.return,tt)}try{na(5,n,n.return)}catch(tt){Yt(n,n.return,tt)}}break;case 1:fi(s,n),Ti(n),f&512&&l!==null&&Ws(l,l.return);break;case 5:if(fi(s,n),Ti(n),f&512&&l!==null&&Ws(l,l.return),n.flags&32){var p=n.stateNode;try{Pe(p,"")}catch(tt){Yt(n,n.return,tt)}}if(f&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,w=l!==null?l.memoizedProps:_,k=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{k==="input"&&_.type==="radio"&&_.name!=null&&ge(p,_),ke(k,w);var ce=ke(k,_);for(w=0;w<H.length;w+=2){var Me=H[w],Te=H[w+1];Me==="style"?Ve(p,Te):Me==="dangerouslySetInnerHTML"?Qe(p,Te):Me==="children"?Pe(p,Te):C(p,Me,Te,ce)}switch(k){case"input":me(p,_);break;case"textarea":A(p,_);break;case"select":var Se=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var je=_.value;je!=null?ct(p,!!_.multiple,je,!1):Se!==!!_.multiple&&(_.defaultValue!=null?ct(p,!!_.multiple,_.defaultValue,!0):ct(p,!!_.multiple,_.multiple?[]:"",!1))}p[jo]=_}catch(tt){Yt(n,n.return,tt)}}break;case 6:if(fi(s,n),Ti(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(tt){Yt(n,n.return,tt)}}break;case 3:if(fi(s,n),Ti(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Io(s.containerInfo)}catch(tt){Yt(n,n.return,tt)}break;case 4:fi(s,n),Ti(n);break;case 13:fi(s,n),Ti(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(pf=Y())),f&4&&tg(n);break;case 22:if(Me=l!==null&&l.memoizedState!==null,n.mode&1?(yn=(ce=yn)||Me,fi(s,n),yn=ce):fi(s,n),Ti(n),f&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Me&&(n.mode&1)!==0)for(qe=n,Me=n.child;Me!==null;){for(Te=qe=Me;qe!==null;){switch(Se=qe,je=Se.child,Se.tag){case 0:case 11:case 14:case 15:na(4,Se,Se.return);break;case 1:Ws(Se,Se.return);var Ze=Se.stateNode;if(typeof Ze.componentWillUnmount=="function"){f=Se,l=Se.return;try{s=f,Ze.props=s.memoizedProps,Ze.state=s.memoizedState,Ze.componentWillUnmount()}catch(tt){Yt(f,l,tt)}}break;case 5:Ws(Se,Se.return);break;case 22:if(Se.memoizedState!==null){sg(Te);continue}}je!==null?(je.return=Se,qe=je):sg(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{p=Te.stateNode,ce?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(k=Te.stateNode,H=Te.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,k.style.display=Ae("display",w))}catch(tt){Yt(n,n.return,tt)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=ce?"":Te.memoizedProps}catch(tt){Yt(n,n.return,tt)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:fi(s,n),Ti(n),f&4&&tg(n);break;case 21:break;default:fi(s,n),Ti(n)}}function Ti(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(Jm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(Pe(p,""),f.flags&=-33);var _=Qm(n);ff(n,_,p);break;case 3:case 4:var w=f.stateNode.containerInfo,k=Qm(n);uf(n,k,w);break;default:throw Error(t(161))}}catch(H){Yt(n,n.return,H)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Dy(n,s,l){qe=n,ig(n)}function ig(n,s,l){for(var f=(n.mode&1)!==0;qe!==null;){var p=qe,_=p.child;if(p.tag===22&&f){var w=p.memoizedState!==null||Tl;if(!w){var k=p.alternate,H=k!==null&&k.memoizedState!==null||yn;k=Tl;var ce=yn;if(Tl=w,(yn=H)&&!ce)for(qe=p;qe!==null;)w=qe,H=w.child,w.tag===22&&w.memoizedState!==null?og(p):H!==null?(H.return=w,qe=H):og(p);for(;_!==null;)qe=_,ig(_),_=_.sibling;qe=p,Tl=k,yn=ce}rg(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,qe=_):rg(n)}}function rg(n){for(;qe!==null;){var s=qe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:yn||Al(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!yn)if(l===null)f.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:ci(s.type,l.memoizedProps);f.componentDidUpdate(p,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&sm(s,_,f);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}sm(s,w,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ce=s.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Io(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||s.flags&512&&cf(s)}catch(Se){Yt(s,s.return,Se)}}if(s===n){qe=null;break}if(l=s.sibling,l!==null){l.return=s.return,qe=l;break}qe=s.return}}function sg(n){for(;qe!==null;){var s=qe;if(s===n){qe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,qe=l;break}qe=s.return}}function og(n){for(;qe!==null;){var s=qe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Al(4,s)}catch(H){Yt(s,l,H)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(H){Yt(s,p,H)}}var _=s.return;try{cf(s)}catch(H){Yt(s,_,H)}break;case 5:var w=s.return;try{cf(s)}catch(H){Yt(s,w,H)}}}catch(H){Yt(s,s.return,H)}if(s===n){qe=null;break}var k=s.sibling;if(k!==null){k.return=s.return,qe=k;break}qe=s.return}}var Iy=Math.ceil,Cl=T.ReactCurrentDispatcher,df=T.ReactCurrentOwner,ti=T.ReactCurrentBatchConfig,Ct=0,cn=null,Jt=null,hn=0,Wn=0,js=mr(0),rn=0,ia=null,ns=0,bl=0,hf=0,ra=null,Ln=null,pf=0,Xs=1/0,ji=null,Rl=!1,mf=null,Sr=null,Pl=!1,Er=null,Nl=0,sa=0,gf=null,Ll=-1,Dl=0;function Cn(){return(Ct&6)!==0?Y():Ll!==-1?Ll:Ll=Y()}function Mr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&hn!==0?hn&-hn:vy.transition!==null?(Dl===0&&(Dl=Tn()),Dl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:lp(n.type)),n)}function di(n,s,l,f){if(50<sa)throw sa=0,gf=null,Error(t(185));qt(n,l,f),((Ct&2)===0||n!==cn)&&(n===cn&&((Ct&2)===0&&(bl|=l),rn===4&&wr(n,hn)),Dn(n,f),l===1&&Ct===0&&(s.mode&1)===0&&(Xs=Y()+500,al&&vr()))}function Dn(n,s){var l=n.callbackNode;$r(n,s);var f=oi(n,n===cn?hn:0);if(f===0)l!==null&&K(l),n.callbackNode=null,n.callbackPriority=0;else if(s=f&-f,n.callbackPriority!==s){if(l!=null&&K(l),s===1)n.tag===0?gy(lg.bind(null,n)):$p(lg.bind(null,n)),dy(function(){(Ct&6)===0&&vr()}),l=null;else{switch(ep(f)){case 1:l=ze;break;case 4:l=Ke;break;case 16:l=We;break;case 536870912:l=ft;break;default:l=We}l=gg(l,ag.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function ag(n,s){if(Ll=-1,Dl=0,(Ct&6)!==0)throw Error(t(327));var l=n.callbackNode;if($s()&&n.callbackNode!==l)return null;var f=oi(n,n===cn?hn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||s)s=Il(n,f);else{s=f;var p=Ct;Ct|=2;var _=ug();(cn!==n||hn!==s)&&(ji=null,Xs=Y()+500,rs(n,s));do try{Fy();break}catch(k){cg(n,k)}while(!0);Du(),Cl.current=_,Ct=p,Jt!==null?s=0:(cn=null,hn=0,s=rn)}if(s!==0){if(s===2&&(p=kt(n),p!==0&&(f=p,s=vf(n,p))),s===1)throw l=ia,rs(n,0),wr(n,f),Dn(n,Y()),l;if(s===6)wr(n,f);else{if(p=n.current.alternate,(f&30)===0&&!Uy(p)&&(s=Il(n,f),s===2&&(_=kt(n),_!==0&&(f=_,s=vf(n,_))),s===1))throw l=ia,rs(n,0),wr(n,f),Dn(n,Y()),l;switch(n.finishedWork=p,n.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ss(n,Ln,ji);break;case 3:if(wr(n,f),(f&130023424)===f&&(s=pf+500-Y(),10<s)){if(oi(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Eu(ss.bind(null,n,Ln,ji),s);break}ss(n,Ln,ji);break;case 4:if(wr(n,f),(f&4194240)===f)break;for(s=n.eventTimes,p=-1;0<f;){var w=31-At(f);_=1<<w,w=s[w],w>p&&(p=w),f&=~_}if(f=p,f=Y()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Iy(f/1960))-f,10<f){n.timeoutHandle=Eu(ss.bind(null,n,Ln,ji),f);break}ss(n,Ln,ji);break;case 5:ss(n,Ln,ji);break;default:throw Error(t(329))}}}return Dn(n,Y()),n.callbackNode===l?ag.bind(null,n):null}function vf(n,s){var l=ra;return n.current.memoizedState.isDehydrated&&(rs(n,s).flags|=256),n=Il(n,s),n!==2&&(s=Ln,Ln=l,s!==null&&xf(s)),n}function xf(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function Uy(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var p=l[f],_=p.getSnapshot;p=p.value;try{if(!ai(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function wr(n,s){for(s&=~hf,s&=~bl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-At(s),f=1<<l;n[l]=-1,s&=~f}}function lg(n){if((Ct&6)!==0)throw Error(t(327));$s();var s=oi(n,0);if((s&1)===0)return Dn(n,Y()),null;var l=Il(n,s);if(n.tag!==0&&l===2){var f=kt(n);f!==0&&(s=f,l=vf(n,f))}if(l===1)throw l=ia,rs(n,0),wr(n,s),Dn(n,Y()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ss(n,Ln,ji),Dn(n,Y()),null}function _f(n,s){var l=Ct;Ct|=1;try{return n(s)}finally{Ct=l,Ct===0&&(Xs=Y()+500,al&&vr())}}function is(n){Er!==null&&Er.tag===0&&(Ct&6)===0&&$s();var s=Ct;Ct|=1;var l=ti.transition,f=Mt;try{if(ti.transition=null,Mt=1,n)return n()}finally{Mt=f,ti.transition=l,Ct=s,(Ct&6)===0&&vr()}}function yf(){Wn=js.current,Ht(js)}function rs(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,fy(l)),Jt!==null)for(l=Jt.return;l!==null;){var f=l;switch(bu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&sl();break;case 3:Hs(),Ht(Rn),Ht(vn),Vu();break;case 5:zu(f);break;case 4:Hs();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:Iu(f.type._context);break;case 22:case 23:yf()}l=l.return}if(cn=n,Jt=n=Tr(n.current,null),hn=Wn=s,rn=0,ia=null,hf=bl=ns=0,Ln=ra=null,Qr!==null){for(s=0;s<Qr.length;s++)if(l=Qr[s],f=l.interleaved,f!==null){l.interleaved=null;var p=f.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,f.next=w}l.pending=f}Qr=null}return n}function cg(n,s){do{var l=Jt;try{if(Du(),vl.current=Sl,xl){for(var f=Xt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}xl=!1}if(ts=0,ln=nn=Xt=null,Zo=!1,Jo=0,df.current=null,l===null||l.return===null){rn=1,ia=s,Jt=null;break}e:{var _=n,w=l.return,k=l,H=s;if(s=hn,k.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=H,Me=k,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var je=Im(w);if(je!==null){je.flags&=-257,Um(je,w,k,_,s),je.mode&1&&Dm(_,ce,s),s=je,H=ce;var Ze=s.updateQueue;if(Ze===null){var tt=new Set;tt.add(H),s.updateQueue=tt}else Ze.add(H);break e}else{if((s&1)===0){Dm(_,ce,s),Sf();break e}H=Error(t(426))}}else if(Wt&&k.mode&1){var Kt=Im(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Um(Kt,w,k,_,s),Nu(Gs(H,k));break e}}_=H=Gs(H,k),rn!==4&&(rn=2),ra===null?ra=[_]:ra.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var te=Nm(_,H,s);rm(_,te);break e;case 1:k=H;var $=_.type,se=_.stateNode;if((_.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Sr===null||!Sr.has(se)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ne=Lm(_,k,s);rm(_,Ne);break e}}_=_.return}while(_!==null)}dg(l)}catch(it){s=it,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function ug(){var n=Cl.current;return Cl.current=Sl,n===null?Sl:n}function Sf(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(ns&268435455)===0&&(bl&268435455)===0||wr(cn,hn)}function Il(n,s){var l=Ct;Ct|=2;var f=ug();(cn!==n||hn!==s)&&(ji=null,rs(n,s));do try{Oy();break}catch(p){cg(n,p)}while(!0);if(Du(),Ct=l,Cl.current=f,Jt!==null)throw Error(t(261));return cn=null,hn=0,rn}function Oy(){for(;Jt!==null;)fg(Jt)}function Fy(){for(;Jt!==null&&!ue();)fg(Jt)}function fg(n){var s=mg(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,s===null?dg(n):Jt=s,df.current=null}function dg(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=Ry(l,s,Wn),l!==null){Jt=l;return}}else{if(l=Py(l,s),l!==null){l.flags&=32767,Jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Jt=null;return}}if(s=s.sibling,s!==null){Jt=s;return}Jt=s=n}while(s!==null);rn===0&&(rn=5)}function ss(n,s,l){var f=Mt,p=ti.transition;try{ti.transition=null,Mt=1,ky(n,s,l,f)}finally{ti.transition=p,Mt=f}return null}function ky(n,s,l,f){do $s();while(Er!==null);if((Ct&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(gn(n,_),n===cn&&(Jt=cn=null,hn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Pl||(Pl=!0,gg(We,function(){return $s(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ti.transition,ti.transition=null;var w=Mt;Mt=1;var k=Ct;Ct|=4,df.current=null,Ly(n,l),ng(l,n),ry(yu),ja=!!_u,yu=_u=null,n.current=l,Dy(l),fe(),Ct=k,Mt=w,ti.transition=_}else n.current=l;if(Pl&&(Pl=!1,Er=n,Nl=p),_=n.pendingLanes,_===0&&(Sr=null),Nt(l.stateNode),Dn(n,Y()),s!==null)for(f=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],f(p.value,{componentStack:p.stack,digest:p.digest});if(Rl)throw Rl=!1,n=mf,mf=null,n;return(Nl&1)!==0&&n.tag!==0&&$s(),_=n.pendingLanes,(_&1)!==0?n===gf?sa++:(sa=0,gf=n):sa=0,vr(),null}function $s(){if(Er!==null){var n=ep(Nl),s=ti.transition,l=Mt;try{if(ti.transition=null,Mt=16>n?16:n,Er===null)var f=!1;else{if(n=Er,Er=null,Nl=0,(Ct&6)!==0)throw Error(t(331));var p=Ct;for(Ct|=4,qe=n.current;qe!==null;){var _=qe,w=_.child;if((qe.flags&16)!==0){var k=_.deletions;if(k!==null){for(var H=0;H<k.length;H++){var ce=k[H];for(qe=ce;qe!==null;){var Me=qe;switch(Me.tag){case 0:case 11:case 15:na(8,Me,_)}var Te=Me.child;if(Te!==null)Te.return=Me,qe=Te;else for(;qe!==null;){Me=qe;var Se=Me.sibling,je=Me.return;if(Zm(Me),Me===ce){qe=null;break}if(Se!==null){Se.return=je,qe=Se;break}qe=je}}}var Ze=_.alternate;if(Ze!==null){var tt=Ze.child;if(tt!==null){Ze.child=null;do{var Kt=tt.sibling;tt.sibling=null,tt=Kt}while(tt!==null)}}qe=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,qe=w;else e:for(;qe!==null;){if(_=qe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:na(9,_,_.return)}var te=_.sibling;if(te!==null){te.return=_.return,qe=te;break e}qe=_.return}}var $=n.current;for(qe=$;qe!==null;){w=qe;var se=w.child;if((w.subtreeFlags&2064)!==0&&se!==null)se.return=w,qe=se;else e:for(w=$;qe!==null;){if(k=qe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Al(9,k)}}catch(it){Yt(k,k.return,it)}if(k===w){qe=null;break e}var Ne=k.sibling;if(Ne!==null){Ne.return=k.return,qe=Ne;break e}qe=k.return}}if(Ct=p,vr(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(rt,n)}catch{}f=!0}return f}finally{Mt=l,ti.transition=s}}return!1}function hg(n,s,l){s=Gs(l,s),s=Nm(n,s,1),n=_r(n,s,1),s=Cn(),n!==null&&(qt(n,1,s),Dn(n,s))}function Yt(n,s,l){if(n.tag===3)hg(n,n,l);else for(;s!==null;){if(s.tag===3){hg(s,n,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Sr===null||!Sr.has(f))){n=Gs(l,n),n=Lm(s,n,1),s=_r(s,n,1),n=Cn(),s!==null&&(qt(s,1,n),Dn(s,n));break}}s=s.return}}function zy(n,s,l){var f=n.pingCache;f!==null&&f.delete(s),s=Cn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(hn&l)===l&&(rn===4||rn===3&&(hn&130023424)===hn&&500>Y()-pf?rs(n,0):hf|=l),Dn(n,s)}function pg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var l=Cn();n=Hi(n,s),n!==null&&(qt(n,s,l),Dn(n,l))}function By(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),pg(n,l)}function Vy(n,s){var l=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),pg(n,l)}var mg;mg=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||Rn.current)Nn=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return Nn=!1,by(n,s,l);Nn=(n.flags&131072)!==0}else Nn=!1,Wt&&(s.flags&1048576)!==0&&Yp(s,cl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;wl(n,s),n=s.pendingProps;var p=Us(s,vn.current);Vs(s,l),p=Wu(null,s,f,n,p,l);var _=ju();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Pn(f)?(_=!0,ol(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Fu(s),p.updater=El,s.stateNode=p,p._reactInternals=s,Zu(s,f,n,l),s=tf(null,s,f,!0,_,l)):(s.tag=0,Wt&&_&&Cu(s),An(null,s,p,l),s=s.child),s;case 16:f=s.elementType;e:{switch(wl(n,s),n=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=Gy(f),n=ci(f,n),p){case 0:s=ef(null,s,f,n,l);break e;case 1:s=Vm(null,s,f,n,l);break e;case 11:s=Om(null,s,f,n,l);break e;case 14:s=Fm(null,s,f,ci(f.type,n),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),ef(n,s,f,p,l);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),Vm(n,s,f,p,l);case 3:e:{if(Hm(s),n===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,im(n,s),ml(s,f,null,l);var w=s.memoizedState;if(f=w.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Gs(Error(t(423)),s),s=Gm(n,s,f,l,p);break e}else if(f!==p){p=Gs(Error(t(424)),s),s=Gm(n,s,f,l,p);break e}else for(Gn=pr(s.stateNode.containerInfo.firstChild),Hn=s,Wt=!0,li=null,l=tm(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),f===p){s=Wi(n,s,l);break e}An(n,s,f,l)}s=s.child}return s;case 5:return om(s),n===null&&Pu(s),f=s.type,p=s.pendingProps,_=n!==null?n.memoizedProps:null,w=p.children,Su(f,p)?w=null:_!==null&&Su(f,_)&&(s.flags|=32),Bm(n,s),An(n,s,w,l),s.child;case 6:return n===null&&Pu(s),null;case 13:return Wm(n,s,l);case 4:return ku(s,s.stateNode.containerInfo),f=s.pendingProps,n===null?s.child=zs(s,null,f,l):An(n,s,f,l),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),Om(n,s,f,p,l);case 7:return An(n,s,s.pendingProps,l),s.child;case 8:return An(n,s,s.pendingProps.children,l),s.child;case 12:return An(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,Bt(dl,f._currentValue),f._currentValue=w,_!==null)if(ai(_.value,w)){if(_.children===p.children&&!Rn.current){s=Wi(n,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var k=_.dependencies;if(k!==null){w=_.child;for(var H=k.firstContext;H!==null;){if(H.context===f){if(_.tag===1){H=Gi(-1,l&-l),H.tag=2;var ce=_.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),ce.pending=H}}_.lanes|=l,H=_.alternate,H!==null&&(H.lanes|=l),Uu(_.return,l,s),k.lanes|=l;break}H=H.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,k=w.alternate,k!==null&&(k.lanes|=l),Uu(w,l,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}An(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,Vs(s,l),p=Qn(p),f=f(p),s.flags|=1,An(n,s,f,l),s.child;case 14:return f=s.type,p=ci(f,s.pendingProps),p=ci(f.type,p),Fm(n,s,f,p,l);case 15:return km(n,s,s.type,s.pendingProps,l);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),wl(n,s),s.tag=1,Pn(f)?(n=!0,ol(s)):n=!1,Vs(s,l),Rm(s,f,p),Zu(s,f,p,l),tf(null,s,f,!0,n,l);case 19:return Xm(n,s,l);case 22:return zm(n,s,l)}throw Error(t(156,s.tag))};function gg(n,s){return R(n,s)}function Hy(n,s,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,s,l,f){return new Hy(n,s,l,f)}function Ef(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gy(n){if(typeof n=="function")return Ef(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===Q)return 14}return 2}function Tr(n,s){var l=n.alternate;return l===null?(l=ni(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Ul(n,s,l,f,p,_){var w=2;if(f=n,typeof n=="function")Ef(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case I:return os(l.children,p,_,s);case G:w=8,p|=8;break;case P:return n=ni(12,l,s,p|2),n.elementType=P,n.lanes=_,n;case J:return n=ni(13,l,s,p),n.elementType=J,n.lanes=_,n;case q:return n=ni(19,l,s,p),n.elementType=q,n.lanes=_,n;case ie:return Ol(l,p,_,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:w=10;break e;case V:w=9;break e;case X:w=11;break e;case Q:w=14;break e;case ee:w=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=ni(w,l,s,p),s.elementType=n,s.type=f,s.lanes=_,s}function os(n,s,l,f){return n=ni(7,n,f,s),n.lanes=l,n}function Ol(n,s,l,f){return n=ni(22,n,f,s),n.elementType=ie,n.lanes=l,n.stateNode={isHidden:!1},n}function Mf(n,s,l){return n=ni(6,n,null,s),n.lanes=l,n}function wf(n,s,l){return s=ni(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Wy(n,s,l,f,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Tf(n,s,l,f,p,_,w,k,H){return n=new Wy(n,s,l,k,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ni(3,null,null,s),n.current=_,_.stateNode=n,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(_),n}function jy(n,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:n,containerInfo:s,implementation:l}}function vg(n){if(!n)return gr;n=n._reactInternals;e:{if(Fi(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Pn(l))return jp(n,l,s)}return s}function xg(n,s,l,f,p,_,w,k,H){return n=Tf(l,f,!0,n,p,_,w,k,H),n.context=vg(null),l=n.current,f=Cn(),p=Mr(l),_=Gi(f,p),_.callback=s??null,_r(l,_,p),n.current.lanes=p,qt(n,p,f),Dn(n,f),n}function Fl(n,s,l,f){var p=s.current,_=Cn(),w=Mr(p);return l=vg(l),s.context===null?s.context=l:s.pendingContext=l,s=Gi(_,w),s.payload={element:n},f=f===void 0?null:f,f!==null&&(s.callback=f),n=_r(p,s,w),n!==null&&(di(n,p,w,_),pl(n,p,w)),w}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _g(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function Af(n,s){_g(n,s),(n=n.alternate)&&_g(n,s)}function Xy(){return null}var yg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cf(n){this._internalRoot=n}zl.prototype.render=Cf.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Fl(n,s,null,null)},zl.prototype.unmount=Cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;is(function(){Fl(null,n,null,null)}),s[ki]=null}};function zl(n){this._internalRoot=n}zl.prototype.unstable_scheduleHydration=function(n){if(n){var s=ip();n={blockedOn:null,target:n,priority:s};for(var l=0;l<fr.length&&s!==0&&s<fr[l].priority;l++);fr.splice(l,0,n),l===0&&op(n)}};function bf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function $y(n,s,l,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var ce=kl(w);_.call(ce)}}var w=xg(s,f,n,0,null,!1,!1,"",Sg);return n._reactRootContainer=w,n[ki]=w.current,Go(n.nodeType===8?n.parentNode:n),is(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var k=f;f=function(){var ce=kl(H);k.call(ce)}}var H=Tf(n,0,!1,null,null,!1,!1,"",Sg);return n._reactRootContainer=H,n[ki]=H.current,Go(n.nodeType===8?n.parentNode:n),is(function(){Fl(s,H,l,f)}),H}function Vl(n,s,l,f,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var k=p;p=function(){var H=kl(w);k.call(H)}}Fl(s,w,n,p)}else w=$y(l,s,n,p,f);return kl(w)}tp=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=tn(s.pendingLanes);l!==0&&(Yr(s,l|1),Dn(s,Y()),(Ct&6)===0&&(Xs=Y()+500,vr()))}break;case 13:is(function(){var f=Hi(n,1);if(f!==null){var p=Cn();di(f,n,1,p)}}),Af(n,1)}},Jc=function(n){if(n.tag===13){var s=Hi(n,134217728);if(s!==null){var l=Cn();di(s,n,134217728,l)}Af(n,134217728)}},np=function(n){if(n.tag===13){var s=Mr(n),l=Hi(n,s);if(l!==null){var f=Cn();di(l,n,s,f)}Af(n,s)}},ip=function(){return Mt},rp=function(n,s){var l=Mt;try{return Mt=n,s()}finally{Mt=l}},be=function(n,s,l){switch(s){case"input":if(me(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==n&&f.form===n.form){var p=rl(f);if(!p)throw Error(t(90));bt(f),me(f,p)}}}break;case"textarea":A(n,l);break;case"select":s=l.value,s!=null&&ct(n,!!l.multiple,s,!1)}},mt=_f,Lt=is;var Yy={usingClientEntryPoint:!1,Events:[Xo,Ds,rl,xe,Je,_f]},oa={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qy={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Va(n),n===null?null:n.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{rt=Hl.inject(qy),ht=Hl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy,In.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(s))throw Error(t(200));return jy(n,s,null,l)},In.createRoot=function(n,s){if(!bf(n))throw Error(t(299));var l=!1,f="",p=yg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Tf(n,1,!1,null,null,l,!1,f,p),n[ki]=s.current,Go(n.nodeType===8?n.parentNode:n),new Cf(s)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Va(s),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return is(n)},In.hydrate=function(n,s,l){if(!Bl(s))throw Error(t(200));return Vl(null,n,s,!0,l)},In.hydrateRoot=function(n,s,l){if(!bf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,p=!1,_="",w=yg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=xg(s,null,n,1,l??null,p,!1,_,w),n[ki]=s.current,Go(n),f)for(n=0;n<f.length;n++)l=f[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new zl(s)},In.render=function(n,s,l){if(!Bl(s))throw Error(t(200));return Vl(null,n,s,!1,l)},In.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(is(function(){Vl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},In.unstable_batchedUpdates=_f,In.unstable_renderSubtreeIntoContainer=function(n,s,l,f){if(!Bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Vl(n,s,l,!1,f)},In.version="18.3.1-next-f1338f8080-20240426",In}var Rg;function r0(){if(Rg)return Nf.exports;Rg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Nf.exports=iS(),Nf.exports}var Pg;function rS(){if(Pg)return Gl;Pg=1;var i=r0();return Gl.createRoot=i.createRoot,Gl.hydrateRoot=i.hydrateRoot,Gl}var sS=rS();function oS(i,e){if(i instanceof RegExp)return{keys:!1,pattern:i};var t,r,o,a,c=[],u="",h=i.split("/");for(h[0]||h.shift();o=h.shift();)t=o[0],t==="*"?(c.push(t),u+=o[1]==="?"?"(?:/(.*))?":"/(.*)"):t===":"?(r=o.indexOf("?",1),a=o.indexOf(".",1),c.push(o.substring(1,~r?r:~a?a:o.length)),u+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(u+=(~r?"?":"")+"\\"+o.substring(a))):u+="/"+o;return{keys:c,pattern:new RegExp("^"+u+(e?"(?=$|/)":"/?$"),"i")}}var W=Uc();const Ur=i0(W),s0=Zy({__proto__:null,default:Ur},[W]);var If={exports:{}},Uf={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function aS(){if(Ng)return Uf;Ng=1;var i=Uc();function e(g,v){return g===v&&(g!==0||1/g===1/v)||g!==g&&v!==v}var t=typeof Object.is=="function"?Object.is:e,r=i.useState,o=i.useEffect,a=i.useLayoutEffect,c=i.useDebugValue;function u(g,v){var y=v(),E=r({inst:{value:y,getSnapshot:v}}),M=E[0].inst,x=E[1];return a(function(){M.value=y,M.getSnapshot=v,h(M)&&x({inst:M})},[g,y,v]),o(function(){return h(M)&&x({inst:M}),g(function(){h(M)&&x({inst:M})})},[g]),c(y),y}function h(g){var v=g.getSnapshot;g=g.value;try{var y=v();return!t(g,y)}catch{return!0}}function d(g,v){return v()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?d:u;return Uf.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:m,Uf}var Lg;function lS(){return Lg||(Lg=1,If.exports=aS()),If.exports}var cS=lS();const uS=s0.useInsertionEffect,fS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dS=fS?W.useLayoutEffect:W.useEffect,hS=uS||dS,o0=i=>{const e=W.useRef([i,(...t)=>e[0](...t)]).current;return hS(()=>{e[0]=i}),e[1]},pS="popstate",Mh="pushState",wh="replaceState",mS="hashchange",Dg=[pS,Mh,wh,mS],gS=i=>{for(const e of Dg)addEventListener(e,i);return()=>{for(const e of Dg)removeEventListener(e,i)}},a0=(i,e)=>cS.useSyncExternalStore(gS,i,e),vS=()=>location.search,xS=({ssrSearch:i=""}={})=>a0(vS,()=>i),Ig=()=>location.pathname,_S=({ssrPath:i}={})=>a0(Ig,i?()=>i:Ig),yS=(i,{replace:e=!1,state:t=null}={})=>history[e?wh:Mh](t,"",i),SS=(i={})=>[_S(i),yS],Ug=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Ug]>"u"){for(const i of[Mh,wh]){const e=history[i];history[i]=function(){const t=e.apply(this,arguments),r=new Event(i);return r.arguments=arguments,dispatchEvent(r),t}}Object.defineProperty(window,Ug,{value:!0})}const ES=(i,e)=>e.toLowerCase().indexOf(i.toLowerCase())?"~"+e:e.slice(i.length)||"/",l0=(i="")=>i==="/"?"":i,MS=(i,e)=>i[0]==="~"?i.slice(1):l0(e)+i,wS=(i="",e)=>ES(Og(l0(i)),Og(e)),Og=i=>{try{return decodeURI(i)}catch{return i}},c0={hook:SS,searchHook:xS,parser:oS,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:i=>i},u0=W.createContext(c0),Oc=()=>W.useContext(u0),f0={},d0=W.createContext(f0),TS=()=>W.useContext(d0),Th=i=>{const[e,t]=i.hook(i);return[wS(i.base,e),o0((r,o)=>t(MS(r,i.base),o))]},h0=(i,e,t,r)=>{const{pattern:o,keys:a}=e instanceof RegExp?{keys:!1,pattern:e}:i(e||"*",r),c=o.exec(t)||[],[u,...h]=c;return u!==void 0?[!0,(()=>{const d=a!==!1?Object.fromEntries(a.map((g,v)=>[g,h[v]])):c.groups;let m={...h};return d&&Object.assign(m,d),m})(),...r?[u]:[]]:[!1,null]},AS=({children:i,...e})=>{var m,g;const t=Oc(),r=e.hook?c0:t;let o=r;const[a,c]=((m=e.ssrPath)==null?void 0:m.split("?"))??[];c&&(e.ssrSearch=c,e.ssrPath=a),e.hrefs=e.hrefs??((g=e.hook)==null?void 0:g.hrefs);let u=W.useRef({}),h=u.current,d=h;for(let v in r){const y=v==="base"?r[v]+(e[v]||""):e[v]||r[v];h===d&&y!==d[v]&&(u.current=d={...d}),d[v]=y,(y!==r[v]||y!==o[v])&&(o=d)}return W.createElement(u0.Provider,{value:o,children:i})},Fg=({children:i,component:e},t)=>e?W.createElement(e,{params:t}):typeof i=="function"?i(t):i,CS=i=>{let e=W.useRef(f0);const t=e.current;return e.current=Object.keys(i).length!==Object.keys(t).length||Object.entries(i).some(([r,o])=>o!==t[r])?i:t},kg=({path:i,nest:e,match:t,...r})=>{const o=Oc(),[a]=Th(o),[c,u,h]=t??h0(o.parser,i,a,e),d=CS({...TS(),...u});if(!c)return null;const m=h?W.createElement(AS,{base:h},Fg(r,d)):Fg(r,d);return W.createElement(d0.Provider,{value:d,children:m})};W.forwardRef((i,e)=>{const t=Oc(),[r,o]=Th(t),{to:a="",href:c=a,onClick:u,asChild:h,children:d,className:m,replace:g,state:v,...y}=i,E=o0(x=>{x.ctrlKey||x.metaKey||x.altKey||x.shiftKey||x.button!==0||(u==null||u(x),x.defaultPrevented||(x.preventDefault(),o(c,i)))}),M=t.hrefs(c[0]==="~"?c.slice(1):t.base+c,t);return h&&W.isValidElement(d)?W.cloneElement(d,{onClick:E,href:M}):W.createElement("a",{...y,onClick:E,href:M,className:m!=null&&m.call?m(r===c):m,children:d,ref:e})});const p0=i=>Array.isArray(i)?i.flatMap(e=>p0(e&&e.type===W.Fragment?e.props.children:e)):[i],bS=({children:i,location:e})=>{const t=Oc(),[r]=Th(t);for(const o of p0(i)){let a=0;if(W.isValidElement(o)&&(a=h0(t.parser,o.props.path,e||r,o.props.nest))[0])return W.cloneElement(o,{match:a})}return null},RS=1,PS=1e6;let Of=0;function NS(){return Of=(Of+1)%Number.MAX_SAFE_INTEGER,Of.toString()}const Ff=new Map,zg=i=>{if(Ff.has(i))return;const e=setTimeout(()=>{Ff.delete(i),va({type:"REMOVE_TOAST",toastId:i})},PS);Ff.set(i,e)},LS=(i,e)=>{switch(e.type){case"ADD_TOAST":return{...i,toasts:[e.toast,...i.toasts].slice(0,RS)};case"UPDATE_TOAST":return{...i,toasts:i.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=e;return t?zg(t):i.toasts.forEach(r=>{zg(r.id)}),{...i,toasts:i.toasts.map(r=>r.id===t||t===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return e.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(t=>t.id!==e.toastId)}}},xc=[];let _c={toasts:[]};function va(i){_c=LS(_c,i),xc.forEach(e=>{e(_c)})}function DS({...i}){const e=NS(),t=o=>va({type:"UPDATE_TOAST",toast:{...o,id:e}}),r=()=>va({type:"DISMISS_TOAST",toastId:e});return va({type:"ADD_TOAST",toast:{...i,id:e,open:!0,onOpenChange:o=>{o||r()}}}),{id:e,dismiss:r,update:t}}function IS(){const[i,e]=W.useState(_c);return W.useEffect(()=>(xc.push(e),()=>{const t=xc.indexOf(e);t>-1&&xc.splice(t,1)}),[i]),{...i,toast:DS,dismiss:t=>va({type:"DISMISS_TOAST",toastId:t})}}var Fc=r0();const US=i0(Fc);function sn(i,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(i==null||i(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function Bg(i,e){if(typeof i=="function")return i(e);i!=null&&(i.current=e)}function m0(...i){return e=>{let t=!1;const r=i.map(o=>{const a=Bg(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Bg(i[o],null)}}}}function _i(...i){return W.useCallback(m0(...i),i)}function kc(i,e=[]){let t=[];function r(a,c){const u=W.createContext(c),h=t.length;t=[...t,c];const d=g=>{var S;const{scope:v,children:y,...E}=g,M=((S=v==null?void 0:v[i])==null?void 0:S[h])||u,x=W.useMemo(()=>E,Object.values(E));return D.jsx(M.Provider,{value:x,children:y})};d.displayName=a+"Provider";function m(g,v){var M;const y=((M=v==null?void 0:v[i])==null?void 0:M[h])||u,E=W.useContext(y);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${g}\` must be used within \`${a}\``)}return[d,m]}const o=()=>{const a=t.map(c=>W.createContext(c));return function(u){const h=(u==null?void 0:u[i])||a;return W.useMemo(()=>({[`__scope${i}`]:{...u,[i]:h}}),[u,h])}};return o.scopeName=i,[r,OS(o,...e)]}function OS(...i){const e=i[0];if(i.length===1)return e;const t=()=>{const r=i.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=r.reduce((u,{useScope:h,scopeName:d})=>{const g=h(a)[`__scope${d}`];return{...u,...g}},{});return W.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function Ac(i){const e=kS(i),t=W.forwardRef((r,o)=>{const{children:a,...c}=r,u=W.Children.toArray(a),h=u.find(BS);if(h){const d=h.props.children,m=u.map(g=>g===h?W.Children.count(d)>1?W.Children.only(null):W.isValidElement(d)?d.props.children:null:g);return D.jsx(e,{...c,ref:o,children:W.isValidElement(d)?W.cloneElement(d,void 0,m):null})}return D.jsx(e,{...c,ref:o,children:a})});return t.displayName=`${i}.Slot`,t}var FS=Ac("Slot");function kS(i){const e=W.forwardRef((t,r)=>{const{children:o,...a}=t;if(W.isValidElement(o)){const c=HS(o),u=VS(a,o.props);return o.type!==W.Fragment&&(u.ref=r?m0(r,c):c),W.cloneElement(o,u)}return W.Children.count(o)>1?W.Children.only(null):null});return e.displayName=`${i}.SlotClone`,e}var g0=Symbol("radix.slottable");function zS(i){const e=({children:t})=>D.jsx(D.Fragment,{children:t});return e.displayName=`${i}.Slottable`,e.__radixId=g0,e}function BS(i){return W.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===g0}function VS(i,e){const t={...e};for(const r in e){const o=i[r],a=e[r];/^on[A-Z]/.test(r)?o&&a?t[r]=(...u)=>{const h=a(...u);return o(...u),h}:o&&(t[r]=o):r==="style"?t[r]={...o,...a}:r==="className"&&(t[r]=[o,a].filter(Boolean).join(" "))}return{...i,...t}}function HS(i){var r,o;let e=(r=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?i.ref:(e=(o=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?i.props.ref:i.props.ref||i.ref)}function GS(i){const e=i+"CollectionProvider",[t,r]=kc(e),[o,a]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=M=>{const{scope:x,children:S}=M,N=Ur.useRef(null),C=Ur.useRef(new Map).current;return D.jsx(o,{scope:x,itemMap:C,collectionRef:N,children:S})};c.displayName=e;const u=i+"CollectionSlot",h=Ac(u),d=Ur.forwardRef((M,x)=>{const{scope:S,children:N}=M,C=a(u,S),T=_i(x,C.collectionRef);return D.jsx(h,{ref:T,children:N})});d.displayName=u;const m=i+"CollectionItemSlot",g="data-radix-collection-item",v=Ac(m),y=Ur.forwardRef((M,x)=>{const{scope:S,children:N,...C}=M,T=Ur.useRef(null),U=_i(x,T),O=a(m,S);return Ur.useEffect(()=>(O.itemMap.set(T,{ref:T,...C}),()=>void O.itemMap.delete(T))),D.jsx(v,{[g]:"",ref:U,children:N})});y.displayName=m;function E(M){const x=a(i+"CollectionConsumer",M);return Ur.useCallback(()=>{const N=x.collectionRef.current;if(!N)return[];const C=Array.from(N.querySelectorAll(`[${g}]`));return Array.from(x.itemMap.values()).sort((O,I)=>C.indexOf(O.ref.current)-C.indexOf(I.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:d,ItemSlot:y},E,r]}var WS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],kn=WS.reduce((i,e)=>{const t=Ac(`Primitive.${e}`),r=W.forwardRef((o,a)=>{const{asChild:c,...u}=o,h=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),D.jsx(h,{...u,ref:a})});return r.displayName=`Primitive.${e}`,{...i,[e]:r}},{});function v0(i,e){i&&Fc.flushSync(()=>i.dispatchEvent(e))}function zr(i){const e=W.useRef(i);return W.useEffect(()=>{e.current=i}),W.useMemo(()=>(...t)=>{var r;return(r=e.current)==null?void 0:r.call(e,...t)},[])}function jS(i,e=globalThis==null?void 0:globalThis.document){const t=zr(i);W.useEffect(()=>{const r=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[t,e])}var XS="DismissableLayer",Ed="dismissableLayer.update",$S="dismissableLayer.pointerDownOutside",YS="dismissableLayer.focusOutside",Vg,x0=W.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ah=W.forwardRef((i,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:u,...h}=i,d=W.useContext(x0),[m,g]=W.useState(null),v=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=W.useState({}),E=_i(e,I=>g(I)),M=Array.from(d.layers),[x]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),S=M.indexOf(x),N=m?M.indexOf(m):-1,C=d.layersWithOutsidePointerEventsDisabled.size>0,T=N>=S,U=KS(I=>{const G=I.target,P=[...d.branches].some(b=>b.contains(G));!T||P||(o==null||o(I),c==null||c(I),I.defaultPrevented||u==null||u())},v),O=ZS(I=>{const G=I.target;[...d.branches].some(b=>b.contains(G))||(a==null||a(I),c==null||c(I),I.defaultPrevented||u==null||u())},v);return jS(I=>{N===d.layers.size-1&&(r==null||r(I),!I.defaultPrevented&&u&&(I.preventDefault(),u()))},v),W.useEffect(()=>{if(m)return t&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Vg=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(m)),d.layers.add(m),Hg(),()=>{t&&d.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Vg)}},[m,v,t,d]),W.useEffect(()=>()=>{m&&(d.layers.delete(m),d.layersWithOutsidePointerEventsDisabled.delete(m),Hg())},[m,d]),W.useEffect(()=>{const I=()=>y({});return document.addEventListener(Ed,I),()=>document.removeEventListener(Ed,I)},[]),D.jsx(kn.div,{...h,ref:E,style:{pointerEvents:C?T?"auto":"none":void 0,...i.style},onFocusCapture:sn(i.onFocusCapture,O.onFocusCapture),onBlurCapture:sn(i.onBlurCapture,O.onBlurCapture),onPointerDownCapture:sn(i.onPointerDownCapture,U.onPointerDownCapture)})});Ah.displayName=XS;var qS="DismissableLayerBranch",_0=W.forwardRef((i,e)=>{const t=W.useContext(x0),r=W.useRef(null),o=_i(e,r);return W.useEffect(()=>{const a=r.current;if(a)return t.branches.add(a),()=>{t.branches.delete(a)}},[t.branches]),D.jsx(kn.div,{...i,ref:o})});_0.displayName=qS;function KS(i,e=globalThis==null?void 0:globalThis.document){const t=zr(i),r=W.useRef(!1),o=W.useRef(()=>{});return W.useEffect(()=>{const a=u=>{if(u.target&&!r.current){let h=function(){y0($S,t,d,{discrete:!0})};const d={originalEvent:u};u.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=h,e.addEventListener("click",o.current,{once:!0})):h()}else e.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",a),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>r.current=!0}}function ZS(i,e=globalThis==null?void 0:globalThis.document){const t=zr(i),r=W.useRef(!1);return W.useEffect(()=>{const o=a=>{a.target&&!r.current&&y0(YS,t,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Hg(){const i=new CustomEvent(Ed);document.dispatchEvent(i)}function y0(i,e,t,{discrete:r}){const o=t.originalEvent.target,a=new CustomEvent(i,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(i,e,{once:!0}),r?v0(o,a):o.dispatchEvent(a)}var JS=Ah,QS=_0,Br=globalThis!=null&&globalThis.document?W.useLayoutEffect:()=>{},eE="Portal",S0=W.forwardRef((i,e)=>{var u;const{container:t,...r}=i,[o,a]=W.useState(!1);Br(()=>a(!0),[]);const c=t||o&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?US.createPortal(D.jsx(kn.div,{...r,ref:e}),c):null});S0.displayName=eE;function tE(i,e){return W.useReducer((t,r)=>e[t][r]??t,i)}var Ch=i=>{const{present:e,children:t}=i,r=nE(e),o=typeof t=="function"?t({present:r.isPresent}):W.Children.only(t),a=_i(r.ref,iE(o));return typeof t=="function"||r.isPresent?W.cloneElement(o,{ref:a}):null};Ch.displayName="Presence";function nE(i){const[e,t]=W.useState(),r=W.useRef(null),o=W.useRef(i),a=W.useRef("none"),c=i?"mounted":"unmounted",[u,h]=tE(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return W.useEffect(()=>{const d=Wl(r.current);a.current=u==="mounted"?d:"none"},[u]),Br(()=>{const d=r.current,m=o.current;if(m!==i){const v=a.current,y=Wl(d);i?h("MOUNT"):y==="none"||(d==null?void 0:d.display)==="none"?h("UNMOUNT"):h(m&&v!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=i}},[i,h]),Br(()=>{if(e){let d;const m=e.ownerDocument.defaultView??window,g=y=>{const M=Wl(r.current).includes(y.animationName);if(y.target===e&&M&&(h("ANIMATION_END"),!o.current)){const x=e.style.animationFillMode;e.style.animationFillMode="forwards",d=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=x)})}},v=y=>{y.target===e&&(a.current=Wl(r.current))};return e.addEventListener("animationstart",v),e.addEventListener("animationcancel",g),e.addEventListener("animationend",g),()=>{m.clearTimeout(d),e.removeEventListener("animationstart",v),e.removeEventListener("animationcancel",g),e.removeEventListener("animationend",g)}}else h("ANIMATION_END")},[e,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:W.useCallback(d=>{r.current=d?getComputedStyle(d):null,t(d)},[])}}function Wl(i){return(i==null?void 0:i.animationName)||"none"}function iE(i){var r,o;let e=(r=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?i.ref:(e=(o=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?i.props.ref:i.props.ref||i.ref)}var rE=s0[" useInsertionEffect ".trim().toString()]||Br;function sE({prop:i,defaultProp:e,onChange:t=()=>{},caller:r}){const[o,a,c]=oE({defaultProp:e,onChange:t}),u=i!==void 0,h=u?i:o;{const m=W.useRef(i!==void 0);W.useEffect(()=>{const g=m.current;g!==u&&console.warn(`${r} is changing from ${g?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=u},[u,r])}const d=W.useCallback(m=>{var g;if(u){const v=aE(m)?m(i):m;v!==i&&((g=c.current)==null||g.call(c,v))}else a(m)},[u,i,a,c]);return[h,d]}function oE({defaultProp:i,onChange:e}){const[t,r]=W.useState(i),o=W.useRef(t),a=W.useRef(e);return rE(()=>{a.current=e},[e]),W.useEffect(()=>{var c;o.current!==t&&((c=a.current)==null||c.call(a,t),o.current=t)},[t,o]),[t,r,a]}function aE(i){return typeof i=="function"}var lE=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),cE="VisuallyHidden",zc=W.forwardRef((i,e)=>D.jsx(kn.span,{...i,ref:e,style:{...lE,...i.style}}));zc.displayName=cE;var uE=zc,bh="ToastProvider",[Rh,fE,dE]=GS("Toast"),[E0,uP]=kc("Toast",[dE]),[hE,Bc]=E0(bh),M0=i=>{const{__scopeToast:e,label:t="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:a=50,children:c}=i,[u,h]=W.useState(null),[d,m]=W.useState(0),g=W.useRef(!1),v=W.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${bh}\`. Expected non-empty \`string\`.`),D.jsx(Rh.Provider,{scope:e,children:D.jsx(hE,{scope:e,label:t,duration:r,swipeDirection:o,swipeThreshold:a,toastCount:d,viewport:u,onViewportChange:h,onToastAdd:W.useCallback(()=>m(y=>y+1),[]),onToastRemove:W.useCallback(()=>m(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:g,isClosePausedRef:v,children:c})})};M0.displayName=bh;var w0="ToastViewport",pE=["F8"],Md="toast.viewportPause",wd="toast.viewportResume",T0=W.forwardRef((i,e)=>{const{__scopeToast:t,hotkey:r=pE,label:o="Notifications ({hotkey})",...a}=i,c=Bc(w0,t),u=fE(t),h=W.useRef(null),d=W.useRef(null),m=W.useRef(null),g=W.useRef(null),v=_i(e,g,c.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=c.toastCount>0;W.useEffect(()=>{const x=S=>{var C;r.length!==0&&r.every(T=>S[T]||S.code===T)&&((C=g.current)==null||C.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),W.useEffect(()=>{const x=h.current,S=g.current;if(E&&x&&S){const N=()=>{if(!c.isClosePausedRef.current){const O=new CustomEvent(Md);S.dispatchEvent(O),c.isClosePausedRef.current=!0}},C=()=>{if(c.isClosePausedRef.current){const O=new CustomEvent(wd);S.dispatchEvent(O),c.isClosePausedRef.current=!1}},T=O=>{!x.contains(O.relatedTarget)&&C()},U=()=>{x.contains(document.activeElement)||C()};return x.addEventListener("focusin",N),x.addEventListener("focusout",T),x.addEventListener("pointermove",N),x.addEventListener("pointerleave",U),window.addEventListener("blur",N),window.addEventListener("focus",C),()=>{x.removeEventListener("focusin",N),x.removeEventListener("focusout",T),x.removeEventListener("pointermove",N),x.removeEventListener("pointerleave",U),window.removeEventListener("blur",N),window.removeEventListener("focus",C)}}},[E,c.isClosePausedRef]);const M=W.useCallback(({tabbingDirection:x})=>{const N=u().map(C=>{const T=C.ref.current,U=[T,...CE(T)];return x==="forwards"?U:U.reverse()});return(x==="forwards"?N.reverse():N).flat()},[u]);return W.useEffect(()=>{const x=g.current;if(x){const S=N=>{var U,O,I;const C=N.altKey||N.ctrlKey||N.metaKey;if(N.key==="Tab"&&!C){const G=document.activeElement,P=N.shiftKey;if(N.target===x&&P){(U=d.current)==null||U.focus();return}const X=M({tabbingDirection:P?"backwards":"forwards"}),J=X.findIndex(q=>q===G);kf(X.slice(J+1))?N.preventDefault():P?(O=d.current)==null||O.focus():(I=m.current)==null||I.focus()}};return x.addEventListener("keydown",S),()=>x.removeEventListener("keydown",S)}},[u,M]),D.jsxs(QS,{ref:h,role:"region","aria-label":o.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&D.jsx(Td,{ref:d,onFocusFromOutsideViewport:()=>{const x=M({tabbingDirection:"forwards"});kf(x)}}),D.jsx(Rh.Slot,{scope:t,children:D.jsx(kn.ol,{tabIndex:-1,...a,ref:v})}),E&&D.jsx(Td,{ref:m,onFocusFromOutsideViewport:()=>{const x=M({tabbingDirection:"backwards"});kf(x)}})]})});T0.displayName=w0;var A0="ToastFocusProxy",Td=W.forwardRef((i,e)=>{const{__scopeToast:t,onFocusFromOutsideViewport:r,...o}=i,a=Bc(A0,t);return D.jsx(zc,{"aria-hidden":!0,tabIndex:0,...o,ref:e,style:{position:"fixed"},onFocus:c=>{var d;const u=c.relatedTarget;!((d=a.viewport)!=null&&d.contains(u))&&r()}})});Td.displayName=A0;var Na="Toast",mE="toast.swipeStart",gE="toast.swipeMove",vE="toast.swipeCancel",xE="toast.swipeEnd",C0=W.forwardRef((i,e)=>{const{forceMount:t,open:r,defaultOpen:o,onOpenChange:a,...c}=i,[u,h]=sE({prop:r,defaultProp:o??!0,onChange:a,caller:Na});return D.jsx(Ch,{present:t||u,children:D.jsx(SE,{open:u,...c,ref:e,onClose:()=>h(!1),onPause:zr(i.onPause),onResume:zr(i.onResume),onSwipeStart:sn(i.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:sn(i.onSwipeMove,d=>{const{x:m,y:g}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:sn(i.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:sn(i.onSwipeEnd,d=>{const{x:m,y:g}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),h(!1)})})})});C0.displayName=Na;var[_E,yE]=E0(Na,{onClose(){}}),SE=W.forwardRef((i,e)=>{const{__scopeToast:t,type:r="foreground",duration:o,open:a,onClose:c,onEscapeKeyDown:u,onPause:h,onResume:d,onSwipeStart:m,onSwipeMove:g,onSwipeCancel:v,onSwipeEnd:y,...E}=i,M=Bc(Na,t),[x,S]=W.useState(null),N=_i(e,q=>S(q)),C=W.useRef(null),T=W.useRef(null),U=o||M.duration,O=W.useRef(0),I=W.useRef(U),G=W.useRef(0),{onToastAdd:P,onToastRemove:b}=M,V=zr(()=>{var Q;(x==null?void 0:x.contains(document.activeElement))&&((Q=M.viewport)==null||Q.focus()),c()}),X=W.useCallback(q=>{!q||q===1/0||(window.clearTimeout(G.current),O.current=new Date().getTime(),G.current=window.setTimeout(V,q))},[V]);W.useEffect(()=>{const q=M.viewport;if(q){const Q=()=>{X(I.current),d==null||d()},ee=()=>{const ie=new Date().getTime()-O.current;I.current=I.current-ie,window.clearTimeout(G.current),h==null||h()};return q.addEventListener(Md,ee),q.addEventListener(wd,Q),()=>{q.removeEventListener(Md,ee),q.removeEventListener(wd,Q)}}},[M.viewport,U,h,d,X]),W.useEffect(()=>{a&&!M.isClosePausedRef.current&&X(U)},[a,U,M.isClosePausedRef,X]),W.useEffect(()=>(P(),()=>b()),[P,b]);const J=W.useMemo(()=>x?I0(x):null,[x]);return M.viewport?D.jsxs(D.Fragment,{children:[J&&D.jsx(EE,{__scopeToast:t,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:J}),D.jsx(_E,{scope:t,onClose:V,children:Fc.createPortal(D.jsx(Rh.ItemSlot,{scope:t,children:D.jsx(JS,{asChild:!0,onEscapeKeyDown:sn(u,()=>{M.isFocusedToastEscapeKeyDownRef.current||V(),M.isFocusedToastEscapeKeyDownRef.current=!1}),children:D.jsx(kn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":M.swipeDirection,...E,ref:N,style:{userSelect:"none",touchAction:"none",...i.style},onKeyDown:sn(i.onKeyDown,q=>{q.key==="Escape"&&(u==null||u(q.nativeEvent),q.nativeEvent.defaultPrevented||(M.isFocusedToastEscapeKeyDownRef.current=!0,V()))}),onPointerDown:sn(i.onPointerDown,q=>{q.button===0&&(C.current={x:q.clientX,y:q.clientY})}),onPointerMove:sn(i.onPointerMove,q=>{if(!C.current)return;const Q=q.clientX-C.current.x,ee=q.clientY-C.current.y,ie=!!T.current,z=["left","right"].includes(M.swipeDirection),re=["left","up"].includes(M.swipeDirection)?Math.min:Math.max,oe=z?re(0,Q):0,F=z?0:re(0,ee),ae=q.pointerType==="touch"?10:2,Oe={x:oe,y:F},He={originalEvent:q,delta:Oe};ie?(T.current=Oe,jl(gE,g,He,{discrete:!1})):Gg(Oe,M.swipeDirection,ae)?(T.current=Oe,jl(mE,m,He,{discrete:!1}),q.target.setPointerCapture(q.pointerId)):(Math.abs(Q)>ae||Math.abs(ee)>ae)&&(C.current=null)}),onPointerUp:sn(i.onPointerUp,q=>{const Q=T.current,ee=q.target;if(ee.hasPointerCapture(q.pointerId)&&ee.releasePointerCapture(q.pointerId),T.current=null,C.current=null,Q){const ie=q.currentTarget,z={originalEvent:q,delta:Q};Gg(Q,M.swipeDirection,M.swipeThreshold)?jl(xE,y,z,{discrete:!0}):jl(vE,v,z,{discrete:!0}),ie.addEventListener("click",re=>re.preventDefault(),{once:!0})}})})})}),M.viewport)})]}):null}),EE=i=>{const{__scopeToast:e,children:t,...r}=i,o=Bc(Na,e),[a,c]=W.useState(!1),[u,h]=W.useState(!1);return TE(()=>c(!0)),W.useEffect(()=>{const d=window.setTimeout(()=>h(!0),1e3);return()=>window.clearTimeout(d)},[]),u?null:D.jsx(S0,{asChild:!0,children:D.jsx(zc,{...r,children:a&&D.jsxs(D.Fragment,{children:[o.label," ",t]})})})},ME="ToastTitle",b0=W.forwardRef((i,e)=>{const{__scopeToast:t,...r}=i;return D.jsx(kn.div,{...r,ref:e})});b0.displayName=ME;var wE="ToastDescription",R0=W.forwardRef((i,e)=>{const{__scopeToast:t,...r}=i;return D.jsx(kn.div,{...r,ref:e})});R0.displayName=wE;var P0="ToastAction",N0=W.forwardRef((i,e)=>{const{altText:t,...r}=i;return t.trim()?D.jsx(D0,{altText:t,asChild:!0,children:D.jsx(Ph,{...r,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${P0}\`. Expected non-empty \`string\`.`),null)});N0.displayName=P0;var L0="ToastClose",Ph=W.forwardRef((i,e)=>{const{__scopeToast:t,...r}=i,o=yE(L0,t);return D.jsx(D0,{asChild:!0,children:D.jsx(kn.button,{type:"button",...r,ref:e,onClick:sn(i.onClick,o.onClose)})})});Ph.displayName=L0;var D0=W.forwardRef((i,e)=>{const{__scopeToast:t,altText:r,...o}=i;return D.jsx(kn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:e})});function I0(i){const e=[];return Array.from(i.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&e.push(r.textContent),AE(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!o)if(a){const c=r.dataset.radixToastAnnounceAlt;c&&e.push(c)}else e.push(...I0(r))}}),e}function jl(i,e,t,{discrete:r}){const o=t.originalEvent.currentTarget,a=new CustomEvent(i,{bubbles:!0,cancelable:!0,detail:t});e&&o.addEventListener(i,e,{once:!0}),r?v0(o,a):o.dispatchEvent(a)}var Gg=(i,e,t=0)=>{const r=Math.abs(i.x),o=Math.abs(i.y),a=r>o;return e==="left"||e==="right"?a&&r>t:!a&&o>t};function TE(i=()=>{}){const e=zr(i);Br(()=>{let t=0,r=0;return t=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(r)}},[e])}function AE(i){return i.nodeType===i.ELEMENT_NODE}function CE(i){const e=[],t=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function kf(i){const e=document.activeElement;return i.some(t=>t===e?!0:(t.focus(),document.activeElement!==e))}var bE=M0,U0=T0,O0=C0,F0=b0,k0=R0,z0=N0,B0=Ph;function V0(i){var e,t,r="";if(typeof i=="string"||typeof i=="number")r+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(e=0;e<o;e++)i[e]&&(t=V0(i[e]))&&(r&&(r+=" "),r+=t)}else for(t in i)i[t]&&(r&&(r+=" "),r+=t);return r}function H0(){for(var i,e,t=0,r="",o=arguments.length;t<o;t++)(i=arguments[t])&&(e=V0(i))&&(r&&(r+=" "),r+=e);return r}const Wg=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,jg=H0,G0=(i,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return jg(i,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:a}=e,c=Object.keys(o).map(d=>{const m=t==null?void 0:t[d],g=a==null?void 0:a[d];if(m===null)return null;const v=Wg(m)||Wg(g);return o[d][v]}),u=t&&Object.entries(t).reduce((d,m)=>{let[g,v]=m;return v===void 0||(d[g]=v),d},{}),h=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((d,m)=>{let{class:g,className:v,...y}=m;return Object.entries(y).every(E=>{let[M,x]=E;return Array.isArray(x)?x.includes({...a,...u}[M]):{...a,...u}[M]===x})?[...d,g,v]:d},[]);return jg(i,c,h,t==null?void 0:t.class,t==null?void 0:t.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W0=(...i)=>i.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=W.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...u},h)=>W.createElement("svg",{ref:h,...PE,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:W0("lucide",o),...u},[...c.map(([d,m])=>W.createElement(d,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=(i,e)=>{const t=W.forwardRef(({className:r,...o},a)=>W.createElement(NE,{ref:a,iconNode:e,className:W0(`lucide-${RE(i)}`,r),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Mn("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Mn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=Mn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Mn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=Mn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=Mn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=Mn("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=Mn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=Mn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Mn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Mn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Mn("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Mn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Mn("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Mn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=Mn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Nh="-",WE=i=>{const e=XE(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=i;return{getClassGroupId:c=>{const u=c.split(Nh);return u[0]===""&&u.length!==1&&u.shift(),Y0(u,e)||jE(c)},getConflictingClassGroupIds:(c,u)=>{const h=t[c]||[];return u&&r[c]?[...h,...r[c]]:h}}},Y0=(i,e)=>{var c;if(i.length===0)return e.classGroupId;const t=i[0],r=e.nextPart.get(t),o=r?Y0(i.slice(1),r):void 0;if(o)return o;if(e.validators.length===0)return;const a=i.join(Nh);return(c=e.validators.find(({validator:u})=>u(a)))==null?void 0:c.classGroupId},Xg=/^\[(.+)\]$/,jE=i=>{if(Xg.test(i)){const e=Xg.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},XE=i=>{const{theme:e,prefix:t}=i,r={nextPart:new Map,validators:[]};return YE(Object.entries(i.classGroups),t).forEach(([a,c])=>{Ad(c,r,a,e)}),r},Ad=(i,e,t,r)=>{i.forEach(o=>{if(typeof o=="string"){const a=o===""?e:$g(e,o);a.classGroupId=t;return}if(typeof o=="function"){if($E(o)){Ad(o(r),e,t,r);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([a,c])=>{Ad(c,$g(e,a),t,r)})})},$g=(i,e)=>{let t=i;return e.split(Nh).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},$E=i=>i.isThemeGetter,YE=(i,e)=>e?i.map(([t,r])=>{const o=r.map(a=>typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([c,u])=>[e+c,u])):a);return[t,o]}):i,qE=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const o=(a,c)=>{t.set(a,c),e++,e>i&&(e=0,r=t,t=new Map)};return{get(a){let c=t.get(a);if(c!==void 0)return c;if((c=r.get(a))!==void 0)return o(a,c),c},set(a,c){t.has(a)?t.set(a,c):o(a,c)}}},q0="!",KE=i=>{const{separator:e,experimentalParseClassName:t}=i,r=e.length===1,o=e[0],a=e.length,c=u=>{const h=[];let d=0,m=0,g;for(let x=0;x<u.length;x++){let S=u[x];if(d===0){if(S===o&&(r||u.slice(x,x+a)===e)){h.push(u.slice(m,x)),m=x+a;continue}if(S==="/"){g=x;continue}}S==="["?d++:S==="]"&&d--}const v=h.length===0?u:u.substring(m),y=v.startsWith(q0),E=y?v.substring(1):v,M=g&&g>m?g-m:void 0;return{modifiers:h,hasImportantModifier:y,baseClassName:E,maybePostfixModifierPosition:M}};return t?u=>t({className:u,parseClassName:c}):c},ZE=i=>{if(i.length<=1)return i;const e=[];let t=[];return i.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e},JE=i=>({cache:qE(i.cacheSize),parseClassName:KE(i),...WE(i)}),QE=/\s+/,eM=(i,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o}=e,a=[],c=i.trim().split(QE);let u="";for(let h=c.length-1;h>=0;h-=1){const d=c[h],{modifiers:m,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:y}=t(d);let E=!!y,M=r(E?v.substring(0,y):v);if(!M){if(!E){u=d+(u.length>0?" "+u:u);continue}if(M=r(v),!M){u=d+(u.length>0?" "+u:u);continue}E=!1}const x=ZE(m).join(":"),S=g?x+q0:x,N=S+M;if(a.includes(N))continue;a.push(N);const C=o(M,E);for(let T=0;T<C.length;++T){const U=C[T];a.push(S+U)}u=d+(u.length>0?" "+u:u)}return u};function tM(){let i=0,e,t,r="";for(;i<arguments.length;)(e=arguments[i++])&&(t=K0(e))&&(r&&(r+=" "),r+=t);return r}const K0=i=>{if(typeof i=="string")return i;let e,t="";for(let r=0;r<i.length;r++)i[r]&&(e=K0(i[r]))&&(t&&(t+=" "),t+=e);return t};function nM(i,...e){let t,r,o,a=c;function c(h){const d=e.reduce((m,g)=>g(m),i());return t=JE(d),r=t.cache.get,o=t.cache.set,a=u,u(h)}function u(h){const d=r(h);if(d)return d;const m=eM(h,t);return o(h,m),m}return function(){return a(tM.apply(null,arguments))}}const Gt=i=>{const e=t=>t[i]||[];return e.isThemeGetter=!0,e},Z0=/^\[(?:([a-z-]+):)?(.+)\]$/i,iM=/^\d+\/\d+$/,rM=new Set(["px","full","screen"]),sM=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oM=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,aM=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,lM=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,cM=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xi=i=>uo(i)||rM.has(i)||iM.test(i),Cr=i=>Mo(i,"length",vM),uo=i=>!!i&&!Number.isNaN(Number(i)),zf=i=>Mo(i,"number",uo),la=i=>!!i&&Number.isInteger(Number(i)),uM=i=>i.endsWith("%")&&uo(i.slice(0,-1)),xt=i=>Z0.test(i),br=i=>sM.test(i),fM=new Set(["length","size","percentage"]),dM=i=>Mo(i,fM,J0),hM=i=>Mo(i,"position",J0),pM=new Set(["image","url"]),mM=i=>Mo(i,pM,_M),gM=i=>Mo(i,"",xM),ca=()=>!0,Mo=(i,e,t)=>{const r=Z0.exec(i);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1},vM=i=>oM.test(i)&&!aM.test(i),J0=()=>!1,xM=i=>lM.test(i),_M=i=>cM.test(i),yM=()=>{const i=Gt("colors"),e=Gt("spacing"),t=Gt("blur"),r=Gt("brightness"),o=Gt("borderColor"),a=Gt("borderRadius"),c=Gt("borderSpacing"),u=Gt("borderWidth"),h=Gt("contrast"),d=Gt("grayscale"),m=Gt("hueRotate"),g=Gt("invert"),v=Gt("gap"),y=Gt("gradientColorStops"),E=Gt("gradientColorStopPositions"),M=Gt("inset"),x=Gt("margin"),S=Gt("opacity"),N=Gt("padding"),C=Gt("saturate"),T=Gt("scale"),U=Gt("sepia"),O=Gt("skew"),I=Gt("space"),G=Gt("translate"),P=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",xt,e],X=()=>[xt,e],J=()=>["",Xi,Cr],q=()=>["auto",uo,xt],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ee=()=>["solid","dashed","dotted","double","none"],ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],re=()=>["","0",xt],oe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[uo,xt];return{cacheSize:500,separator:":",theme:{colors:[ca],spacing:[Xi,Cr],blur:["none","",br,xt],brightness:F(),borderColor:[i],borderRadius:["none","","full",br,xt],borderSpacing:X(),borderWidth:J(),contrast:F(),grayscale:re(),hueRotate:F(),invert:re(),gap:X(),gradientColorStops:[i],gradientColorStopPositions:[uM,Cr],inset:V(),margin:V(),opacity:F(),padding:X(),saturate:F(),scale:F(),sepia:re(),skew:F(),space:X(),translate:X()},classGroups:{aspect:[{aspect:["auto","square","video",xt]}],container:["container"],columns:[{columns:[br]}],"break-after":[{"break-after":oe()}],"break-before":[{"break-before":oe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),xt]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[M]}],"inset-x":[{"inset-x":[M]}],"inset-y":[{"inset-y":[M]}],start:[{start:[M]}],end:[{end:[M]}],top:[{top:[M]}],right:[{right:[M]}],bottom:[{bottom:[M]}],left:[{left:[M]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",la,xt]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",xt]}],grow:[{grow:re()}],shrink:[{shrink:re()}],order:[{order:["first","last","none",la,xt]}],"grid-cols":[{"grid-cols":[ca]}],"col-start-end":[{col:["auto",{span:["full",la,xt]},xt]}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":[ca]}],"row-start-end":[{row:["auto",{span:[la,xt]},xt]}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",xt]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",xt]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],ps:[{ps:[N]}],pe:[{pe:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",xt,e]}],"min-w":[{"min-w":[xt,e,"min","max","fit"]}],"max-w":[{"max-w":[xt,e,"none","full","min","max","fit","prose",{screen:[br]},br]}],h:[{h:[xt,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[xt,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[xt,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[xt,e,"auto","min","max","fit"]}],"font-size":[{text:["base",br,Cr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",zf]}],"font-family":[{font:[ca]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",xt]}],"line-clamp":[{"line-clamp":["none",uo,zf]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Xi,xt]}],"list-image":[{"list-image":["none",xt]}],"list-style-type":[{list:["none","disc","decimal",xt]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ee(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Xi,Cr]}],"underline-offset":[{"underline-offset":["auto",Xi,xt]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",xt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",xt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),hM]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",dM]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},mM]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[u]}],"border-w-x":[{"border-x":[u]}],"border-w-y":[{"border-y":[u]}],"border-w-s":[{"border-s":[u]}],"border-w-e":[{"border-e":[u]}],"border-w-t":[{"border-t":[u]}],"border-w-r":[{"border-r":[u]}],"border-w-b":[{"border-b":[u]}],"border-w-l":[{"border-l":[u]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...ee(),"hidden"]}],"divide-x":[{"divide-x":[u]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[u]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:ee()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...ee()]}],"outline-offset":[{"outline-offset":[Xi,xt]}],"outline-w":[{outline:[Xi,Cr]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[Xi,Cr]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",br,gM]}],"shadow-color":[{shadow:[ca]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...ie(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ie()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",br,xt]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[g]}],saturate:[{saturate:[C]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[c]}],"border-spacing-x":[{"border-spacing-x":[c]}],"border-spacing-y":[{"border-spacing-y":[c]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",xt]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",xt]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",xt]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[la,xt]}],"translate-x":[{"translate-x":[G]}],"translate-y":[{"translate-y":[G]}],"skew-x":[{"skew-x":[O]}],"skew-y":[{"skew-y":[O]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",xt]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",xt]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",xt]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Xi,Cr,zf]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},SM=nM(yM);function zn(...i){return SM(H0(i))}const EM=bE,Q0=W.forwardRef(({className:i,...e},t)=>D.jsx(U0,{ref:t,className:zn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",i),...e}));Q0.displayName=U0.displayName;const MM=G0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ex=W.forwardRef(({className:i,variant:e,...t},r)=>D.jsx(O0,{ref:r,className:zn(MM({variant:e}),i),...t}));ex.displayName=O0.displayName;const wM=W.forwardRef(({className:i,...e},t)=>D.jsx(z0,{ref:t,className:zn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",i),...e}));wM.displayName=z0.displayName;const tx=W.forwardRef(({className:i,...e},t)=>D.jsx(B0,{ref:t,className:zn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",i),"toast-close":"",...e,children:D.jsx($0,{className:"h-4 w-4"})}));tx.displayName=B0.displayName;const nx=W.forwardRef(({className:i,...e},t)=>D.jsx(F0,{ref:t,className:zn("text-sm font-semibold",i),...e}));nx.displayName=F0.displayName;const ix=W.forwardRef(({className:i,...e},t)=>D.jsx(k0,{ref:t,className:zn("text-sm opacity-90",i),...e}));ix.displayName=k0.displayName;function TM(){const{toasts:i}=IS();return D.jsxs(EM,{children:[i.map(function({id:e,title:t,description:r,action:o,...a}){return D.jsxs(ex,{...a,children:[D.jsxs("div",{className:"grid gap-1",children:[t&&D.jsx(nx,{children:t}),r&&D.jsx(ix,{children:r})]}),o,D.jsx(tx,{})]},e)}),D.jsx(Q0,{})]})}const AM=["top","right","bottom","left"],Vr=Math.min,$n=Math.max,bc=Math.round,Xl=Math.floor,Ni=i=>({x:i,y:i}),CM={left:"right",right:"left",bottom:"top",top:"bottom"},bM={start:"end",end:"start"};function Cd(i,e,t){return $n(i,Vr(e,t))}function ir(i,e){return typeof i=="function"?i(e):i}function rr(i){return i.split("-")[0]}function wo(i){return i.split("-")[1]}function Lh(i){return i==="x"?"y":"x"}function Dh(i){return i==="y"?"height":"width"}function Ci(i){return["top","bottom"].includes(rr(i))?"y":"x"}function Ih(i){return Lh(Ci(i))}function RM(i,e,t){t===void 0&&(t=!1);const r=wo(i),o=Ih(i),a=Dh(o);let c=o==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=Rc(c)),[c,Rc(c)]}function PM(i){const e=Rc(i);return[bd(i),e,bd(e)]}function bd(i){return i.replace(/start|end/g,e=>bM[e])}function NM(i,e,t){const r=["left","right"],o=["right","left"],a=["top","bottom"],c=["bottom","top"];switch(i){case"top":case"bottom":return t?e?o:r:e?r:o;case"left":case"right":return e?a:c;default:return[]}}function LM(i,e,t,r){const o=wo(i);let a=NM(rr(i),t==="start",r);return o&&(a=a.map(c=>c+"-"+o),e&&(a=a.concat(a.map(bd)))),a}function Rc(i){return i.replace(/left|right|bottom|top/g,e=>CM[e])}function DM(i){return{top:0,right:0,bottom:0,left:0,...i}}function rx(i){return typeof i!="number"?DM(i):{top:i,right:i,bottom:i,left:i}}function Pc(i){const{x:e,y:t,width:r,height:o}=i;return{width:r,height:o,top:t,left:e,right:e+r,bottom:t+o,x:e,y:t}}function Yg(i,e,t){let{reference:r,floating:o}=i;const a=Ci(e),c=Ih(e),u=Dh(c),h=rr(e),d=a==="y",m=r.x+r.width/2-o.width/2,g=r.y+r.height/2-o.height/2,v=r[u]/2-o[u]/2;let y;switch(h){case"top":y={x:m,y:r.y-o.height};break;case"bottom":y={x:m,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:g};break;case"left":y={x:r.x-o.width,y:g};break;default:y={x:r.x,y:r.y}}switch(wo(e)){case"start":y[c]-=v*(t&&d?-1:1);break;case"end":y[c]+=v*(t&&d?-1:1);break}return y}const IM=async(i,e,t)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:c}=t,u=a.filter(Boolean),h=await(c.isRTL==null?void 0:c.isRTL(e));let d=await c.getElementRects({reference:i,floating:e,strategy:o}),{x:m,y:g}=Yg(d,r,h),v=r,y={},E=0;for(let M=0;M<u.length;M++){const{name:x,fn:S}=u[M],{x:N,y:C,data:T,reset:U}=await S({x:m,y:g,initialPlacement:r,placement:v,strategy:o,middlewareData:y,rects:d,platform:c,elements:{reference:i,floating:e}});m=N??m,g=C??g,y={...y,[x]:{...y[x],...T}},U&&E<=50&&(E++,typeof U=="object"&&(U.placement&&(v=U.placement),U.rects&&(d=U.rects===!0?await c.getElementRects({reference:i,floating:e,strategy:o}):U.rects),{x:m,y:g}=Yg(d,v,h)),M=-1)}return{x:m,y:g,placement:v,strategy:o,middlewareData:y}};async function ya(i,e){var t;e===void 0&&(e={});const{x:r,y:o,platform:a,rects:c,elements:u,strategy:h}=i,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:g="floating",altBoundary:v=!1,padding:y=0}=ir(e,i),E=rx(y),x=u[v?g==="floating"?"reference":"floating":g],S=Pc(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(x)))==null||t?x:x.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:d,rootBoundary:m,strategy:h})),N=g==="floating"?{x:r,y:o,width:c.floating.width,height:c.floating.height}:c.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),T=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},U=Pc(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:N,offsetParent:C,strategy:h}):N);return{top:(S.top-U.top+E.top)/T.y,bottom:(U.bottom-S.bottom+E.bottom)/T.y,left:(S.left-U.left+E.left)/T.x,right:(U.right-S.right+E.right)/T.x}}const UM=i=>({name:"arrow",options:i,async fn(e){const{x:t,y:r,placement:o,rects:a,platform:c,elements:u,middlewareData:h}=e,{element:d,padding:m=0}=ir(i,e)||{};if(d==null)return{};const g=rx(m),v={x:t,y:r},y=Ih(o),E=Dh(y),M=await c.getDimensions(d),x=y==="y",S=x?"top":"left",N=x?"bottom":"right",C=x?"clientHeight":"clientWidth",T=a.reference[E]+a.reference[y]-v[y]-a.floating[E],U=v[y]-a.reference[y],O=await(c.getOffsetParent==null?void 0:c.getOffsetParent(d));let I=O?O[C]:0;(!I||!await(c.isElement==null?void 0:c.isElement(O)))&&(I=u.floating[C]||a.floating[E]);const G=T/2-U/2,P=I/2-M[E]/2-1,b=Vr(g[S],P),V=Vr(g[N],P),X=b,J=I-M[E]-V,q=I/2-M[E]/2+G,Q=Cd(X,q,J),ee=!h.arrow&&wo(o)!=null&&q!==Q&&a.reference[E]/2-(q<X?b:V)-M[E]/2<0,ie=ee?q<X?q-X:q-J:0;return{[y]:v[y]+ie,data:{[y]:Q,centerOffset:q-Q-ie,...ee&&{alignmentOffset:ie}},reset:ee}}}),OM=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(e){var t,r;const{placement:o,middlewareData:a,rects:c,initialPlacement:u,platform:h,elements:d}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:v,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:M=!0,...x}=ir(i,e);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const S=rr(o),N=Ci(u),C=rr(u)===u,T=await(h.isRTL==null?void 0:h.isRTL(d.floating)),U=v||(C||!M?[Rc(u)]:PM(u)),O=E!=="none";!v&&O&&U.push(...LM(u,M,E,T));const I=[u,...U],G=await ya(e,x),P=[];let b=((r=a.flip)==null?void 0:r.overflows)||[];if(m&&P.push(G[S]),g){const q=RM(o,c,T);P.push(G[q[0]],G[q[1]])}if(b=[...b,{placement:o,overflows:P}],!P.every(q=>q<=0)){var V,X;const q=(((V=a.flip)==null?void 0:V.index)||0)+1,Q=I[q];if(Q&&(!(g==="alignment"?N!==Ci(Q):!1)||b.every(z=>z.overflows[0]>0&&Ci(z.placement)===N)))return{data:{index:q,overflows:b},reset:{placement:Q}};let ee=(X=b.filter(ie=>ie.overflows[0]<=0).sort((ie,z)=>ie.overflows[1]-z.overflows[1])[0])==null?void 0:X.placement;if(!ee)switch(y){case"bestFit":{var J;const ie=(J=b.filter(z=>{if(O){const re=Ci(z.placement);return re===N||re==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(re=>re>0).reduce((re,oe)=>re+oe,0)]).sort((z,re)=>z[1]-re[1])[0])==null?void 0:J[0];ie&&(ee=ie);break}case"initialPlacement":ee=u;break}if(o!==ee)return{reset:{placement:ee}}}return{}}}};function qg(i,e){return{top:i.top-e.height,right:i.right-e.width,bottom:i.bottom-e.height,left:i.left-e.width}}function Kg(i){return AM.some(e=>i[e]>=0)}const FM=function(i){return i===void 0&&(i={}),{name:"hide",options:i,async fn(e){const{rects:t}=e,{strategy:r="referenceHidden",...o}=ir(i,e);switch(r){case"referenceHidden":{const a=await ya(e,{...o,elementContext:"reference"}),c=qg(a,t.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:Kg(c)}}}case"escaped":{const a=await ya(e,{...o,altBoundary:!0}),c=qg(a,t.floating);return{data:{escapedOffsets:c,escaped:Kg(c)}}}default:return{}}}}};async function kM(i,e){const{placement:t,platform:r,elements:o}=i,a=await(r.isRTL==null?void 0:r.isRTL(o.floating)),c=rr(t),u=wo(t),h=Ci(t)==="y",d=["left","top"].includes(c)?-1:1,m=a&&h?-1:1,g=ir(e,i);let{mainAxis:v,crossAxis:y,alignmentAxis:E}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return u&&typeof E=="number"&&(y=u==="end"?E*-1:E),h?{x:y*m,y:v*d}:{x:v*d,y:y*m}}const zM=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(e){var t,r;const{x:o,y:a,placement:c,middlewareData:u}=e,h=await kM(e,i);return c===((t=u.offset)==null?void 0:t.placement)&&(r=u.arrow)!=null&&r.alignmentOffset?{}:{x:o+h.x,y:a+h.y,data:{...h,placement:c}}}}},BM=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(e){const{x:t,y:r,placement:o}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:u={fn:x=>{let{x:S,y:N}=x;return{x:S,y:N}}},...h}=ir(i,e),d={x:t,y:r},m=await ya(e,h),g=Ci(rr(o)),v=Lh(g);let y=d[v],E=d[g];if(a){const x=v==="y"?"top":"left",S=v==="y"?"bottom":"right",N=y+m[x],C=y-m[S];y=Cd(N,y,C)}if(c){const x=g==="y"?"top":"left",S=g==="y"?"bottom":"right",N=E+m[x],C=E-m[S];E=Cd(N,E,C)}const M=u.fn({...e,[v]:y,[g]:E});return{...M,data:{x:M.x-t,y:M.y-r,enabled:{[v]:a,[g]:c}}}}}},VM=function(i){return i===void 0&&(i={}),{options:i,fn(e){const{x:t,y:r,placement:o,rects:a,middlewareData:c}=e,{offset:u=0,mainAxis:h=!0,crossAxis:d=!0}=ir(i,e),m={x:t,y:r},g=Ci(o),v=Lh(g);let y=m[v],E=m[g];const M=ir(u,e),x=typeof M=="number"?{mainAxis:M,crossAxis:0}:{mainAxis:0,crossAxis:0,...M};if(h){const C=v==="y"?"height":"width",T=a.reference[v]-a.floating[C]+x.mainAxis,U=a.reference[v]+a.reference[C]-x.mainAxis;y<T?y=T:y>U&&(y=U)}if(d){var S,N;const C=v==="y"?"width":"height",T=["top","left"].includes(rr(o)),U=a.reference[g]-a.floating[C]+(T&&((S=c.offset)==null?void 0:S[g])||0)+(T?0:x.crossAxis),O=a.reference[g]+a.reference[C]+(T?0:((N=c.offset)==null?void 0:N[g])||0)-(T?x.crossAxis:0);E<U?E=U:E>O&&(E=O)}return{[v]:y,[g]:E}}}},HM=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(e){var t,r;const{placement:o,rects:a,platform:c,elements:u}=e,{apply:h=()=>{},...d}=ir(i,e),m=await ya(e,d),g=rr(o),v=wo(o),y=Ci(o)==="y",{width:E,height:M}=a.floating;let x,S;g==="top"||g==="bottom"?(x=g,S=v===(await(c.isRTL==null?void 0:c.isRTL(u.floating))?"start":"end")?"left":"right"):(S=g,x=v==="end"?"top":"bottom");const N=M-m.top-m.bottom,C=E-m.left-m.right,T=Vr(M-m[x],N),U=Vr(E-m[S],C),O=!e.middlewareData.shift;let I=T,G=U;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(G=C),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(I=N),O&&!v){const b=$n(m.left,0),V=$n(m.right,0),X=$n(m.top,0),J=$n(m.bottom,0);y?G=E-2*(b!==0||V!==0?b+V:$n(m.left,m.right)):I=M-2*(X!==0||J!==0?X+J:$n(m.top,m.bottom))}await h({...e,availableWidth:G,availableHeight:I});const P=await c.getDimensions(u.floating);return E!==P.width||M!==P.height?{reset:{rects:!0}}:{}}}};function Vc(){return typeof window<"u"}function To(i){return sx(i)?(i.nodeName||"").toLowerCase():"#document"}function Yn(i){var e;return(i==null||(e=i.ownerDocument)==null?void 0:e.defaultView)||window}function Ii(i){var e;return(e=(sx(i)?i.ownerDocument:i.document)||window.document)==null?void 0:e.documentElement}function sx(i){return Vc()?i instanceof Node||i instanceof Yn(i).Node:!1}function yi(i){return Vc()?i instanceof Element||i instanceof Yn(i).Element:!1}function Di(i){return Vc()?i instanceof HTMLElement||i instanceof Yn(i).HTMLElement:!1}function Zg(i){return!Vc()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Yn(i).ShadowRoot}function La(i){const{overflow:e,overflowX:t,overflowY:r,display:o}=Si(i);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&!["inline","contents"].includes(o)}function GM(i){return["table","td","th"].includes(To(i))}function Hc(i){return[":popover-open",":modal"].some(e=>{try{return i.matches(e)}catch{return!1}})}function Uh(i){const e=Oh(),t=yi(i)?Si(i):i;return["transform","translate","scale","rotate","perspective"].some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function WM(i){let e=Hr(i);for(;Di(e)&&!mo(e);){if(Uh(e))return e;if(Hc(e))return null;e=Hr(e)}return null}function Oh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function mo(i){return["html","body","#document"].includes(To(i))}function Si(i){return Yn(i).getComputedStyle(i)}function Gc(i){return yi(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Hr(i){if(To(i)==="html")return i;const e=i.assignedSlot||i.parentNode||Zg(i)&&i.host||Ii(i);return Zg(e)?e.host:e}function ox(i){const e=Hr(i);return mo(e)?i.ownerDocument?i.ownerDocument.body:i.body:Di(e)&&La(e)?e:ox(e)}function Sa(i,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);const o=ox(i),a=o===((r=i.ownerDocument)==null?void 0:r.body),c=Yn(o);if(a){const u=Rd(c);return e.concat(c,c.visualViewport||[],La(o)?o:[],u&&t?Sa(u):[])}return e.concat(o,Sa(o,[],t))}function Rd(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function ax(i){const e=Si(i);let t=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const o=Di(i),a=o?i.offsetWidth:t,c=o?i.offsetHeight:r,u=bc(t)!==a||bc(r)!==c;return u&&(t=a,r=c),{width:t,height:r,$:u}}function Fh(i){return yi(i)?i:i.contextElement}function fo(i){const e=Fh(i);if(!Di(e))return Ni(1);const t=e.getBoundingClientRect(),{width:r,height:o,$:a}=ax(e);let c=(a?bc(t.width):t.width)/r,u=(a?bc(t.height):t.height)/o;return(!c||!Number.isFinite(c))&&(c=1),(!u||!Number.isFinite(u))&&(u=1),{x:c,y:u}}const jM=Ni(0);function lx(i){const e=Yn(i);return!Oh()||!e.visualViewport?jM:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function XM(i,e,t){return e===void 0&&(e=!1),!t||e&&t!==Yn(i)?!1:e}function _s(i,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);const o=i.getBoundingClientRect(),a=Fh(i);let c=Ni(1);e&&(r?yi(r)&&(c=fo(r)):c=fo(i));const u=XM(a,t,r)?lx(a):Ni(0);let h=(o.left+u.x)/c.x,d=(o.top+u.y)/c.y,m=o.width/c.x,g=o.height/c.y;if(a){const v=Yn(a),y=r&&yi(r)?Yn(r):r;let E=v,M=Rd(E);for(;M&&r&&y!==E;){const x=fo(M),S=M.getBoundingClientRect(),N=Si(M),C=S.left+(M.clientLeft+parseFloat(N.paddingLeft))*x.x,T=S.top+(M.clientTop+parseFloat(N.paddingTop))*x.y;h*=x.x,d*=x.y,m*=x.x,g*=x.y,h+=C,d+=T,E=Yn(M),M=Rd(E)}}return Pc({width:m,height:g,x:h,y:d})}function kh(i,e){const t=Gc(i).scrollLeft;return e?e.left+t:_s(Ii(i)).left+t}function cx(i,e,t){t===void 0&&(t=!1);const r=i.getBoundingClientRect(),o=r.left+e.scrollLeft-(t?0:kh(i,r)),a=r.top+e.scrollTop;return{x:o,y:a}}function $M(i){let{elements:e,rect:t,offsetParent:r,strategy:o}=i;const a=o==="fixed",c=Ii(r),u=e?Hc(e.floating):!1;if(r===c||u&&a)return t;let h={scrollLeft:0,scrollTop:0},d=Ni(1);const m=Ni(0),g=Di(r);if((g||!g&&!a)&&((To(r)!=="body"||La(c))&&(h=Gc(r)),Di(r))){const y=_s(r);d=fo(r),m.x=y.x+r.clientLeft,m.y=y.y+r.clientTop}const v=c&&!g&&!a?cx(c,h,!0):Ni(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-h.scrollLeft*d.x+m.x+v.x,y:t.y*d.y-h.scrollTop*d.y+m.y+v.y}}function YM(i){return Array.from(i.getClientRects())}function qM(i){const e=Ii(i),t=Gc(i),r=i.ownerDocument.body,o=$n(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),a=$n(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let c=-t.scrollLeft+kh(i);const u=-t.scrollTop;return Si(r).direction==="rtl"&&(c+=$n(e.clientWidth,r.clientWidth)-o),{width:o,height:a,x:c,y:u}}function KM(i,e){const t=Yn(i),r=Ii(i),o=t.visualViewport;let a=r.clientWidth,c=r.clientHeight,u=0,h=0;if(o){a=o.width,c=o.height;const d=Oh();(!d||d&&e==="fixed")&&(u=o.offsetLeft,h=o.offsetTop)}return{width:a,height:c,x:u,y:h}}function ZM(i,e){const t=_s(i,!0,e==="fixed"),r=t.top+i.clientTop,o=t.left+i.clientLeft,a=Di(i)?fo(i):Ni(1),c=i.clientWidth*a.x,u=i.clientHeight*a.y,h=o*a.x,d=r*a.y;return{width:c,height:u,x:h,y:d}}function Jg(i,e,t){let r;if(e==="viewport")r=KM(i,t);else if(e==="document")r=qM(Ii(i));else if(yi(e))r=ZM(e,t);else{const o=lx(i);r={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Pc(r)}function ux(i,e){const t=Hr(i);return t===e||!yi(t)||mo(t)?!1:Si(t).position==="fixed"||ux(t,e)}function JM(i,e){const t=e.get(i);if(t)return t;let r=Sa(i,[],!1).filter(u=>yi(u)&&To(u)!=="body"),o=null;const a=Si(i).position==="fixed";let c=a?Hr(i):i;for(;yi(c)&&!mo(c);){const u=Si(c),h=Uh(c);!h&&u.position==="fixed"&&(o=null),(a?!h&&!o:!h&&u.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||La(c)&&!h&&ux(i,c))?r=r.filter(m=>m!==c):o=u,c=Hr(c)}return e.set(i,r),r}function QM(i){let{element:e,boundary:t,rootBoundary:r,strategy:o}=i;const c=[...t==="clippingAncestors"?Hc(e)?[]:JM(e,this._c):[].concat(t),r],u=c[0],h=c.reduce((d,m)=>{const g=Jg(e,m,o);return d.top=$n(g.top,d.top),d.right=Vr(g.right,d.right),d.bottom=Vr(g.bottom,d.bottom),d.left=$n(g.left,d.left),d},Jg(e,u,o));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function ew(i){const{width:e,height:t}=ax(i);return{width:e,height:t}}function tw(i,e,t){const r=Di(e),o=Ii(e),a=t==="fixed",c=_s(i,!0,a,e);let u={scrollLeft:0,scrollTop:0};const h=Ni(0);function d(){h.x=kh(o)}if(r||!r&&!a)if((To(e)!=="body"||La(o))&&(u=Gc(e)),r){const y=_s(e,!0,a,e);h.x=y.x+e.clientLeft,h.y=y.y+e.clientTop}else o&&d();a&&!r&&o&&d();const m=o&&!r&&!a?cx(o,u):Ni(0),g=c.left+u.scrollLeft-h.x-m.x,v=c.top+u.scrollTop-h.y-m.y;return{x:g,y:v,width:c.width,height:c.height}}function Bf(i){return Si(i).position==="static"}function Qg(i,e){if(!Di(i)||Si(i).position==="fixed")return null;if(e)return e(i);let t=i.offsetParent;return Ii(i)===t&&(t=t.ownerDocument.body),t}function fx(i,e){const t=Yn(i);if(Hc(i))return t;if(!Di(i)){let o=Hr(i);for(;o&&!mo(o);){if(yi(o)&&!Bf(o))return o;o=Hr(o)}return t}let r=Qg(i,e);for(;r&&GM(r)&&Bf(r);)r=Qg(r,e);return r&&mo(r)&&Bf(r)&&!Uh(r)?t:r||WM(i)||t}const nw=async function(i){const e=this.getOffsetParent||fx,t=this.getDimensions,r=await t(i.floating);return{reference:tw(i.reference,await e(i.floating),i.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function iw(i){return Si(i).direction==="rtl"}const rw={convertOffsetParentRelativeRectToViewportRelativeRect:$M,getDocumentElement:Ii,getClippingRect:QM,getOffsetParent:fx,getElementRects:nw,getClientRects:YM,getDimensions:ew,getScale:fo,isElement:yi,isRTL:iw};function dx(i,e){return i.x===e.x&&i.y===e.y&&i.width===e.width&&i.height===e.height}function sw(i,e){let t=null,r;const o=Ii(i);function a(){var u;clearTimeout(r),(u=t)==null||u.disconnect(),t=null}function c(u,h){u===void 0&&(u=!1),h===void 0&&(h=1),a();const d=i.getBoundingClientRect(),{left:m,top:g,width:v,height:y}=d;if(u||e(),!v||!y)return;const E=Xl(g),M=Xl(o.clientWidth-(m+v)),x=Xl(o.clientHeight-(g+y)),S=Xl(m),C={rootMargin:-E+"px "+-M+"px "+-x+"px "+-S+"px",threshold:$n(0,Vr(1,h))||1};let T=!0;function U(O){const I=O[0].intersectionRatio;if(I!==h){if(!T)return c();I?c(!1,I):r=setTimeout(()=>{c(!1,1e-7)},1e3)}I===1&&!dx(d,i.getBoundingClientRect())&&c(),T=!1}try{t=new IntersectionObserver(U,{...C,root:o.ownerDocument})}catch{t=new IntersectionObserver(U,C)}t.observe(i)}return c(!0),a}function ow(i,e,t,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:h=!1}=r,d=Fh(i),m=o||a?[...d?Sa(d):[],...Sa(e)]:[];m.forEach(S=>{o&&S.addEventListener("scroll",t,{passive:!0}),a&&S.addEventListener("resize",t)});const g=d&&u?sw(d,t):null;let v=-1,y=null;c&&(y=new ResizeObserver(S=>{let[N]=S;N&&N.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var C;(C=y)==null||C.observe(e)})),t()}),d&&!h&&y.observe(d),y.observe(e));let E,M=h?_s(i):null;h&&x();function x(){const S=_s(i);M&&!dx(M,S)&&t(),M=S,E=requestAnimationFrame(x)}return t(),()=>{var S;m.forEach(N=>{o&&N.removeEventListener("scroll",t),a&&N.removeEventListener("resize",t)}),g==null||g(),(S=y)==null||S.disconnect(),y=null,h&&cancelAnimationFrame(E)}}const aw=zM,lw=BM,cw=OM,uw=HM,fw=FM,ev=UM,dw=VM,hw=(i,e,t)=>{const r=new Map,o={platform:rw,...t},a={...o.platform,_c:r};return IM(i,e,{...o,platform:a})};var pw=typeof document<"u",mw=function(){},yc=pw?W.useLayoutEffect:mw;function Nc(i,e){if(i===e)return!0;if(typeof i!=typeof e)return!1;if(typeof i=="function"&&i.toString()===e.toString())return!0;let t,r,o;if(i&&e&&typeof i=="object"){if(Array.isArray(i)){if(t=i.length,t!==e.length)return!1;for(r=t;r--!==0;)if(!Nc(i[r],e[r]))return!1;return!0}if(o=Object.keys(i),t=o.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(e,o[r]))return!1;for(r=t;r--!==0;){const a=o[r];if(!(a==="_owner"&&i.$$typeof)&&!Nc(i[a],e[a]))return!1}return!0}return i!==i&&e!==e}function hx(i){return typeof window>"u"?1:(i.ownerDocument.defaultView||window).devicePixelRatio||1}function tv(i,e){const t=hx(i);return Math.round(e*t)/t}function Vf(i){const e=W.useRef(i);return yc(()=>{e.current=i}),e}function gw(i){i===void 0&&(i={});const{placement:e="bottom",strategy:t="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:c}={},transform:u=!0,whileElementsMounted:h,open:d}=i,[m,g]=W.useState({x:0,y:0,strategy:t,placement:e,middlewareData:{},isPositioned:!1}),[v,y]=W.useState(r);Nc(v,r)||y(r);const[E,M]=W.useState(null),[x,S]=W.useState(null),N=W.useCallback(z=>{z!==O.current&&(O.current=z,M(z))},[]),C=W.useCallback(z=>{z!==I.current&&(I.current=z,S(z))},[]),T=a||E,U=c||x,O=W.useRef(null),I=W.useRef(null),G=W.useRef(m),P=h!=null,b=Vf(h),V=Vf(o),X=Vf(d),J=W.useCallback(()=>{if(!O.current||!I.current)return;const z={placement:e,strategy:t,middleware:v};V.current&&(z.platform=V.current),hw(O.current,I.current,z).then(re=>{const oe={...re,isPositioned:X.current!==!1};q.current&&!Nc(G.current,oe)&&(G.current=oe,Fc.flushSync(()=>{g(oe)}))})},[v,e,t,V,X]);yc(()=>{d===!1&&G.current.isPositioned&&(G.current.isPositioned=!1,g(z=>({...z,isPositioned:!1})))},[d]);const q=W.useRef(!1);yc(()=>(q.current=!0,()=>{q.current=!1}),[]),yc(()=>{if(T&&(O.current=T),U&&(I.current=U),T&&U){if(b.current)return b.current(T,U,J);J()}},[T,U,J,b,P]);const Q=W.useMemo(()=>({reference:O,floating:I,setReference:N,setFloating:C}),[N,C]),ee=W.useMemo(()=>({reference:T,floating:U}),[T,U]),ie=W.useMemo(()=>{const z={position:t,left:0,top:0};if(!ee.floating)return z;const re=tv(ee.floating,m.x),oe=tv(ee.floating,m.y);return u?{...z,transform:"translate("+re+"px, "+oe+"px)",...hx(ee.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:re,top:oe}},[t,u,ee.floating,m.x,m.y]);return W.useMemo(()=>({...m,update:J,refs:Q,elements:ee,floatingStyles:ie}),[m,J,Q,ee,ie])}const vw=i=>{function e(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:i,fn(t){const{element:r,padding:o}=typeof i=="function"?i(t):i;return r&&e(r)?r.current!=null?ev({element:r.current,padding:o}).fn(t):{}:r?ev({element:r,padding:o}).fn(t):{}}}},xw=(i,e)=>({...aw(i),options:[i,e]}),_w=(i,e)=>({...lw(i),options:[i,e]}),yw=(i,e)=>({...dw(i),options:[i,e]}),Sw=(i,e)=>({...cw(i),options:[i,e]}),Ew=(i,e)=>({...uw(i),options:[i,e]}),Mw=(i,e)=>({...fw(i),options:[i,e]}),ww=(i,e)=>({...vw(i),options:[i,e]});var Tw="Arrow",px=W.forwardRef((i,e)=>{const{children:t,width:r=10,height:o=5,...a}=i;return D.jsx(kn.svg,{...a,ref:e,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:i.asChild?t:D.jsx("polygon",{points:"0,0 30,0 15,10"})})});px.displayName=Tw;var Aw=px;function Cw(i){const[e,t]=W.useState(void 0);return Br(()=>{if(i){t({width:i.offsetWidth,height:i.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let c,u;if("borderBoxSize"in a){const h=a.borderBoxSize,d=Array.isArray(h)?h[0]:h;c=d.inlineSize,u=d.blockSize}else c=i.offsetWidth,u=i.offsetHeight;t({width:c,height:u})});return r.observe(i,{box:"border-box"}),()=>r.unobserve(i)}else t(void 0)},[i]),e}var mx="Popper",[gx,vx]=kc(mx),[fP,xx]=gx(mx),_x="PopperAnchor",yx=W.forwardRef((i,e)=>{const{__scopePopper:t,virtualRef:r,...o}=i,a=xx(_x,t),c=W.useRef(null),u=_i(e,c);return W.useEffect(()=>{a.onAnchorChange((r==null?void 0:r.current)||c.current)}),r?null:D.jsx(kn.div,{...o,ref:u})});yx.displayName=_x;var zh="PopperContent",[bw,Rw]=gx(zh),Sx=W.forwardRef((i,e)=>{var pe,we,Ue,Fe,vt,bt;const{__scopePopper:t,side:r="bottom",sideOffset:o=0,align:a="center",alignOffset:c=0,arrowPadding:u=0,avoidCollisions:h=!0,collisionBoundary:d=[],collisionPadding:m=0,sticky:g="partial",hideWhenDetached:v=!1,updatePositionStrategy:y="optimized",onPlaced:E,...M}=i,x=xx(zh,t),[S,N]=W.useState(null),C=_i(e,B=>N(B)),[T,U]=W.useState(null),O=Cw(T),I=(O==null?void 0:O.width)??0,G=(O==null?void 0:O.height)??0,P=r+(a!=="center"?"-"+a:""),b=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},V=Array.isArray(d)?d:[d],X=V.length>0,J={padding:b,boundary:V.filter(Nw),altBoundary:X},{refs:q,floatingStyles:Q,placement:ee,isPositioned:ie,middlewareData:z}=gw({strategy:"fixed",placement:P,whileElementsMounted:(...B)=>ow(...B,{animationFrame:y==="always"}),elements:{reference:x.anchor},middleware:[xw({mainAxis:o+G,alignmentAxis:c}),h&&_w({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?yw():void 0,...J}),h&&Sw({...J}),Ew({...J,apply:({elements:B,rects:_e,availableWidth:ve,availableHeight:ge})=>{const{width:me,height:Ie}=_e.reference,Ee=B.floating.style;Ee.setProperty("--radix-popper-available-width",`${ve}px`),Ee.setProperty("--radix-popper-available-height",`${ge}px`),Ee.setProperty("--radix-popper-anchor-width",`${me}px`),Ee.setProperty("--radix-popper-anchor-height",`${Ie}px`)}}),T&&ww({element:T,padding:u}),Lw({arrowWidth:I,arrowHeight:G}),v&&Mw({strategy:"referenceHidden",...J})]}),[re,oe]=wx(ee),F=zr(E);Br(()=>{ie&&(F==null||F())},[ie,F]);const ae=(pe=z.arrow)==null?void 0:pe.x,Oe=(we=z.arrow)==null?void 0:we.y,He=((Ue=z.arrow)==null?void 0:Ue.centerOffset)!==0,[$e,le]=W.useState();return Br(()=>{S&&le(window.getComputedStyle(S).zIndex)},[S]),D.jsx("div",{ref:q.setFloating,"data-radix-popper-content-wrapper":"",style:{...Q,transform:ie?Q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:$e,"--radix-popper-transform-origin":[(Fe=z.transformOrigin)==null?void 0:Fe.x,(vt=z.transformOrigin)==null?void 0:vt.y].join(" "),...((bt=z.hide)==null?void 0:bt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:i.dir,children:D.jsx(bw,{scope:t,placedSide:re,onArrowChange:U,arrowX:ae,arrowY:Oe,shouldHideArrow:He,children:D.jsx(kn.div,{"data-side":re,"data-align":oe,...M,ref:C,style:{...M.style,animation:ie?void 0:"none"}})})})});Sx.displayName=zh;var Ex="PopperArrow",Pw={top:"bottom",right:"left",bottom:"top",left:"right"},Mx=W.forwardRef(function(e,t){const{__scopePopper:r,...o}=e,a=Rw(Ex,r),c=Pw[a.placedSide];return D.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:D.jsx(Aw,{...o,ref:t,style:{...o.style,display:"block"}})})});Mx.displayName=Ex;function Nw(i){return i!==null}var Lw=i=>({name:"transformOrigin",options:i,fn(e){var x,S,N;const{placement:t,rects:r,middlewareData:o}=e,c=((x=o.arrow)==null?void 0:x.centerOffset)!==0,u=c?0:i.arrowWidth,h=c?0:i.arrowHeight,[d,m]=wx(t),g={start:"0%",center:"50%",end:"100%"}[m],v=(((S=o.arrow)==null?void 0:S.x)??0)+u/2,y=(((N=o.arrow)==null?void 0:N.y)??0)+h/2;let E="",M="";return d==="bottom"?(E=c?g:`${v}px`,M=`${-h}px`):d==="top"?(E=c?g:`${v}px`,M=`${r.floating.height+h}px`):d==="right"?(E=`${-h}px`,M=c?g:`${y}px`):d==="left"&&(E=`${r.floating.width+h}px`,M=c?g:`${y}px`),{data:{x:E,y:M}}}});function wx(i){const[e,t="center"]=i.split("-");return[e,t]}var Dw=yx,Iw=Sx,Uw=Mx,[Wc,dP]=kc("Tooltip",[vx]),Bh=vx(),Tx="TooltipProvider",Ow=700,nv="tooltip.open",[Fw,Ax]=Wc(Tx),Cx=i=>{const{__scopeTooltip:e,delayDuration:t=Ow,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:a}=i,c=W.useRef(!0),u=W.useRef(!1),h=W.useRef(0);return W.useEffect(()=>{const d=h.current;return()=>window.clearTimeout(d)},[]),D.jsx(Fw,{scope:e,isOpenDelayedRef:c,delayDuration:t,onOpen:W.useCallback(()=>{window.clearTimeout(h.current),c.current=!1},[]),onClose:W.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>c.current=!0,r)},[r]),isPointerInTransitRef:u,onPointerInTransitChange:W.useCallback(d=>{u.current=d},[]),disableHoverableContent:o,children:a})};Cx.displayName=Tx;var bx="Tooltip",[hP,jc]=Wc(bx),Pd="TooltipTrigger",kw=W.forwardRef((i,e)=>{const{__scopeTooltip:t,...r}=i,o=jc(Pd,t),a=Ax(Pd,t),c=Bh(t),u=W.useRef(null),h=_i(e,u,o.onTriggerChange),d=W.useRef(!1),m=W.useRef(!1),g=W.useCallback(()=>d.current=!1,[]);return W.useEffect(()=>()=>document.removeEventListener("pointerup",g),[g]),D.jsx(Dw,{asChild:!0,...c,children:D.jsx(kn.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:h,onPointerMove:sn(i.onPointerMove,v=>{v.pointerType!=="touch"&&!m.current&&!a.isPointerInTransitRef.current&&(o.onTriggerEnter(),m.current=!0)}),onPointerLeave:sn(i.onPointerLeave,()=>{o.onTriggerLeave(),m.current=!1}),onPointerDown:sn(i.onPointerDown,()=>{o.open&&o.onClose(),d.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:sn(i.onFocus,()=>{d.current||o.onOpen()}),onBlur:sn(i.onBlur,o.onClose),onClick:sn(i.onClick,o.onClose)})})});kw.displayName=Pd;var zw="TooltipPortal",[pP,Bw]=Wc(zw,{forceMount:void 0}),go="TooltipContent",Rx=W.forwardRef((i,e)=>{const t=Bw(go,i.__scopeTooltip),{forceMount:r=t.forceMount,side:o="top",...a}=i,c=jc(go,i.__scopeTooltip);return D.jsx(Ch,{present:r||c.open,children:c.disableHoverableContent?D.jsx(Px,{side:o,...a,ref:e}):D.jsx(Vw,{side:o,...a,ref:e})})}),Vw=W.forwardRef((i,e)=>{const t=jc(go,i.__scopeTooltip),r=Ax(go,i.__scopeTooltip),o=W.useRef(null),a=_i(e,o),[c,u]=W.useState(null),{trigger:h,onClose:d}=t,m=o.current,{onPointerInTransitChange:g}=r,v=W.useCallback(()=>{u(null),g(!1)},[g]),y=W.useCallback((E,M)=>{const x=E.currentTarget,S={x:E.clientX,y:E.clientY},N=Xw(S,x.getBoundingClientRect()),C=$w(S,N),T=Yw(M.getBoundingClientRect()),U=Kw([...C,...T]);u(U),g(!0)},[g]);return W.useEffect(()=>()=>v(),[v]),W.useEffect(()=>{if(h&&m){const E=x=>y(x,m),M=x=>y(x,h);return h.addEventListener("pointerleave",E),m.addEventListener("pointerleave",M),()=>{h.removeEventListener("pointerleave",E),m.removeEventListener("pointerleave",M)}}},[h,m,y,v]),W.useEffect(()=>{if(c){const E=M=>{const x=M.target,S={x:M.clientX,y:M.clientY},N=(h==null?void 0:h.contains(x))||(m==null?void 0:m.contains(x)),C=!qw(S,c);N?v():C&&(v(),d())};return document.addEventListener("pointermove",E),()=>document.removeEventListener("pointermove",E)}},[h,m,c,d,v]),D.jsx(Px,{...i,ref:a})}),[Hw,Gw]=Wc(bx,{isInside:!1}),Ww=zS("TooltipContent"),Px=W.forwardRef((i,e)=>{const{__scopeTooltip:t,children:r,"aria-label":o,onEscapeKeyDown:a,onPointerDownOutside:c,...u}=i,h=jc(go,t),d=Bh(t),{onClose:m}=h;return W.useEffect(()=>(document.addEventListener(nv,m),()=>document.removeEventListener(nv,m)),[m]),W.useEffect(()=>{if(h.trigger){const g=v=>{const y=v.target;y!=null&&y.contains(h.trigger)&&m()};return window.addEventListener("scroll",g,{capture:!0}),()=>window.removeEventListener("scroll",g,{capture:!0})}},[h.trigger,m]),D.jsx(Ah,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:g=>g.preventDefault(),onDismiss:m,children:D.jsxs(Iw,{"data-state":h.stateAttribute,...d,...u,ref:e,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[D.jsx(Ww,{children:r}),D.jsx(Hw,{scope:t,isInside:!0,children:D.jsx(uE,{id:h.contentId,role:"tooltip",children:o||r})})]})})});Rx.displayName=go;var Nx="TooltipArrow",jw=W.forwardRef((i,e)=>{const{__scopeTooltip:t,...r}=i,o=Bh(t);return Gw(Nx,t).isInside?null:D.jsx(Uw,{...o,...r,ref:e})});jw.displayName=Nx;function Xw(i,e){const t=Math.abs(e.top-i.y),r=Math.abs(e.bottom-i.y),o=Math.abs(e.right-i.x),a=Math.abs(e.left-i.x);switch(Math.min(t,r,o,a)){case a:return"left";case o:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function $w(i,e,t=5){const r=[];switch(e){case"top":r.push({x:i.x-t,y:i.y+t},{x:i.x+t,y:i.y+t});break;case"bottom":r.push({x:i.x-t,y:i.y-t},{x:i.x+t,y:i.y-t});break;case"left":r.push({x:i.x+t,y:i.y-t},{x:i.x+t,y:i.y+t});break;case"right":r.push({x:i.x-t,y:i.y-t},{x:i.x-t,y:i.y+t});break}return r}function Yw(i){const{top:e,right:t,bottom:r,left:o}=i;return[{x:o,y:e},{x:t,y:e},{x:t,y:r},{x:o,y:r}]}function qw(i,e){const{x:t,y:r}=i;let o=!1;for(let a=0,c=e.length-1;a<e.length;c=a++){const u=e[a],h=e[c],d=u.x,m=u.y,g=h.x,v=h.y;m>r!=v>r&&t<(g-d)*(r-m)/(v-m)+d&&(o=!o)}return o}function Kw(i){const e=i.slice();return e.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),Zw(e)}function Zw(i){if(i.length<=1)return i.slice();const e=[];for(let r=0;r<i.length;r++){const o=i[r];for(;e.length>=2;){const a=e[e.length-1],c=e[e.length-2];if((a.x-c.x)*(o.y-c.y)>=(a.y-c.y)*(o.x-c.x))e.pop();else break}e.push(o)}e.pop();const t=[];for(let r=i.length-1;r>=0;r--){const o=i[r];for(;t.length>=2;){const a=t[t.length-1],c=t[t.length-2];if((a.x-c.x)*(o.y-c.y)>=(a.y-c.y)*(o.x-c.x))t.pop();else break}t.push(o)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var Jw=Cx,Lx=Rx;const Qw=Jw,eT=W.forwardRef(({className:i,sideOffset:e=4,...t},r)=>D.jsx(Lx,{ref:r,sideOffset:e,className:zn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",i),...t}));eT.displayName=Lx.displayName;const zt={personal:{name:"Rujiwat",surname:"Pithaksiripan",title:"Backend Developer",email:"rujiwatpt@gmail.com",phone:"089-527-4355",location:"Bangkok, Thailand",github:"https://github.com/rujiwatpt",linkedin:"https://www.linkedin.com/in/rujiwatpt",profile:"Backend-focused web developer experienced in e-commerce platform and building integration."},skills:{backend:["Node.js","Express.js","Nest.js","Koa.js","Hapi.js","GraphQL","Serverless framework"],database:["PostgreSQL","MySQL","MongoDB","Supabase","Prisma","Objection.js"],frontend:["React.js","Bootstrap","Material-UI","jQuery","HTML5/CSS3","JavaScript"],tools:["Git/GitHub","Jest","Playwright","Jira","Atlassian","Slack","Gather","Linear","Notion"]},experience:[{title:"Software engineer",company:"Hubql",duration:"May 2025 - Present",responsibilities:["Developed a social media lead scraping module for a smart campaign management system.","Built an automated interaction module leveraging large language models (LLMs) to engage and respond to leads."]},{title:"Senior associate software engineer",company:"Pomelo Fashion",duration:"November 2023 - April 2025",responsibilities:["Developed product review and style gallery features to improve customer engagement.","Integrated a third-party shipping management system to streamline logistics operations","Implemented QR payment by integrating a payment gateway, enhancing user experience and checkout efficiency"]},{title:"Software engineer",company:"Brikl",duration:"February 2022 - September 2023",responsibilities:["Built integrations for US and Canadian tax calculations.","Designed and maintained integrations between the Brikl e-commerce platform and third-party systems","Develop and maintain graphQL endpoints to integrated with dashboard and storefront"]},{title:"Software Engineer Intern",company:"Tonic",duration:"August 2021 - November 2021",responsibilities:["Develop dashboard, subscription and payment page for web application","Develop RESTful API for web application"]}],education:[{degree:"Bachelor of Science",field:"Information and Communication Technology",major:"Computer Science",school:"Sukhothai Thammathirat Open University",duration:"2018 - 2021"},{degree:"Doctor of Veterinary Medicine",field:"",major:"",school:"Chulalongkorn University",duration:"2009 - 2015"}],learning:[{title:"The Complete 2021 Web Development Bootcamp",instructor:"Dr. Angela Yu",platform:"Udemy"}]};function tT(){const[i,e]=W.useState(!1),[t,r]=W.useState("home");W.useEffect(()=>{const c=()=>{const u=["home","about","skills","experience","contact"],h=window.scrollY;u.forEach(d=>{const m=document.getElementById(d);if(m){const{offsetTop:g,offsetHeight:v}=m;h>=g-200&&h<g+v-200&&r(d)}})};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const o=c=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth",block:"start"}),e(!1)},a=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"skills",label:"Skills"},{id:"contact",label:"Contact"}];return D.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4",children:[D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsxs("div",{className:"text-xl font-bold text-black",children:[zt.personal.name," ",zt.personal.surname]}),D.jsx("div",{className:"hidden md:flex space-x-8",children:a.map(c=>D.jsx("button",{onClick:()=>o(c.id),className:`transition-colors duration-300 ${t===c.id?"text-black font-semibold":"text-gray-600 hover:text-black"}`,children:c.label},c.id))}),D.jsx("button",{className:"md:hidden text-gray-600",onClick:()=>e(!i),children:i?D.jsx($0,{className:"w-6 h-6"}):D.jsx(zE,{className:"w-6 h-6"})})]}),i&&D.jsx("div",{className:"md:hidden mt-4 pb-4 border-t border-gray-100",children:D.jsx("div",{className:"flex flex-col space-y-3 mt-4",children:a.map(c=>D.jsx("button",{onClick:()=>o(c.id),className:`text-left transition-colors duration-300 ${t===c.id?"text-black font-semibold":"text-gray-600 hover:text-black"}`,children:c.label},c.id))})})]})})}const nT=G0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ea=W.forwardRef(({className:i,variant:e,size:t,asChild:r=!1,...o},a)=>{const c=r?FS:"button";return D.jsx(c,{className:zn(nT({variant:e,size:t,className:i})),ref:a,...o})});Ea.displayName="Button";const iT="/assets/1673412657098_1749705349784-CjhTRVvj.jpeg";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="180",rT=0,iv=1,sT=2,Dx=1,oT=2,Ji=3,Gr=0,On=1,Qi=2,Fr=0,ho=1,rv=2,sv=3,ov=4,aT=5,ms=100,lT=101,cT=102,uT=103,fT=104,dT=200,hT=201,pT=202,mT=203,Nd=204,Ld=205,gT=206,vT=207,xT=208,_T=209,yT=210,ST=211,ET=212,MT=213,wT=214,Dd=0,Id=1,Ud=2,vo=3,Od=4,Fd=5,kd=6,zd=7,Ix=0,TT=1,AT=2,kr=0,CT=1,bT=2,RT=3,PT=4,NT=5,LT=6,DT=7,Ux=300,xo=301,_o=302,Bd=303,Vd=304,Xc=306,Hd=1e3,vs=1001,Gd=1002,xi=1003,IT=1004,$l=1005,bi=1006,Hf=1007,xs=1008,sr=1009,Ox=1010,Fx=1011,Ma=1012,Hh=1013,ys=1014,er=1015,Da=1016,Gh=1017,Wh=1018,wa=1020,kx=35902,zx=35899,Bx=1021,Vx=1022,vi=1023,Ta=1026,Aa=1027,Hx=1028,jh=1029,Gx=1030,Xh=1031,$h=1033,Sc=33776,Ec=33777,Mc=33778,wc=33779,Wd=35840,jd=35841,Xd=35842,$d=35843,Yd=36196,qd=37492,Kd=37496,Zd=37808,Jd=37809,Qd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,ch=37820,uh=37821,fh=36492,dh=36494,hh=36495,ph=36283,mh=36284,gh=36285,vh=36286,UT=3200,OT=3201,FT=0,kT=1,Or="",ri="srgb",yo="srgb-linear",Lc="linear",Ut="srgb",Ys=7680,av=519,zT=512,BT=513,VT=514,Wx=515,HT=516,GT=517,WT=518,jT=519,lv=35044,cv="300 es",Ri=2e3,Dc=2001;class Ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,xh=180/Math.PI;function Co(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function XT(i,e){return(i%e+e)%e}function Wf(i,e,t){return(1-t)*i+t*e}function ua(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ia{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let h=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];const v=a[c+0],y=a[c+1],E=a[c+2],M=a[c+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(g!==M||h!==v||d!==y||m!==E){let x=1-u;const S=h*v+d*y+m*E+g*M,N=S>=0?1:-1,C=1-S*S;if(C>Number.EPSILON){const U=Math.sqrt(C),O=Math.atan2(U,S*N);x=Math.sin(x*O)/U,u=Math.sin(u*O)/U}const T=u*N;if(h=h*x+v*T,d=d*x+y*T,m=m*x+E*T,g=g*x+M*T,x===1-u){const U=1/Math.sqrt(h*h+d*d+m*m+g*g);h*=U,d*=U,m*=U,g*=U}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],h=r[o+1],d=r[o+2],m=r[o+3],g=a[c],v=a[c+1],y=a[c+2],E=a[c+3];return e[t]=u*E+m*g+h*y-d*v,e[t+1]=h*E+m*v+d*g-u*y,e[t+2]=d*E+m*y+u*v-h*g,e[t+3]=m*E-u*g-h*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(r/2),m=u(o/2),g=u(a/2),v=h(r/2),y=h(o/2),E=h(a/2);switch(c){case"XYZ":this._x=v*m*g+d*y*E,this._y=d*y*g-v*m*E,this._z=d*m*E+v*y*g,this._w=d*m*g-v*y*E;break;case"YXZ":this._x=v*m*g+d*y*E,this._y=d*y*g-v*m*E,this._z=d*m*E-v*y*g,this._w=d*m*g+v*y*E;break;case"ZXY":this._x=v*m*g-d*y*E,this._y=d*y*g+v*m*E,this._z=d*m*E+v*y*g,this._w=d*m*g-v*y*E;break;case"ZYX":this._x=v*m*g-d*y*E,this._y=d*y*g+v*m*E,this._z=d*m*E-v*y*g,this._w=d*m*g+v*y*E;break;case"YZX":this._x=v*m*g+d*y*E,this._y=d*y*g+v*m*E,this._z=d*m*E-v*y*g,this._w=d*m*g-v*y*E;break;case"XZY":this._x=v*m*g-d*y*E,this._y=d*y*g-v*m*E,this._z=d*m*E+v*y*g,this._w=d*m*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],m=t[6],g=t[10],v=r+u+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-h)*y,this._y=(a-d)*y,this._z=(c-o)*y}else if(r>u&&r>g){const y=2*Math.sqrt(1+r-u-g);this._w=(m-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+d)/y}else if(u>g){const y=2*Math.sqrt(1+u-r-g);this._w=(a-d)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+g-r-u);this._w=(c-o)/y,this._x=(a+d)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,m=t._w;return this._x=r*m+c*u+o*d-a*h,this._y=o*m+c*h+a*u-r*d,this._z=a*m+c*d+r*h-o*u,this._w=c*m-r*u-o*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+r*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=o,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),m=Math.atan2(d,u),g=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=c*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*o-u*r),m=2*(u*t-a*o),g=2*(a*r-c*t);return this.x=t+h*d+c*g-u*m,this.y=r+h*m+u*d-a*g,this.z=o+h*g+a*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=o*h-a*u,this.y=a*c-r*h,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new ne,uv=new Ia;class _t{constructor(e,t,r,o,a,c,u,h,d){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,h,d)}set(e,t,r,o,a,c,u,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=h,m[6]=r,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],h=r[6],d=r[1],m=r[4],g=r[7],v=r[2],y=r[5],E=r[8],M=o[0],x=o[3],S=o[6],N=o[1],C=o[4],T=o[7],U=o[2],O=o[5],I=o[8];return a[0]=c*M+u*N+h*U,a[3]=c*x+u*C+h*O,a[6]=c*S+u*T+h*I,a[1]=d*M+m*N+g*U,a[4]=d*x+m*C+g*O,a[7]=d*S+m*T+g*I,a[2]=v*M+y*N+E*U,a[5]=v*x+y*C+E*O,a[8]=v*S+y*T+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*u*d-r*a*m+r*u*h+o*a*d-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8],g=m*c-u*d,v=u*h-m*a,y=d*a-c*h,E=t*g+r*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*d-m*r)*M,e[2]=(u*r-o*c)*M,e[3]=v*M,e[4]=(m*t-o*h)*M,e[5]=(o*a-u*t)*M,e[6]=y*M,e[7]=(r*h-d*t)*M,e[8]=(c*t-r*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(r*h,r*d,-r*(h*c+d*u)+c+e,-o*d,o*h,-o*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Xf.makeScale(e,t)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new _t;function jx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ic(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $T(){const i=Ic("canvas");return i.style.display="block",i}const fv={};function Ca(i){i in fv||(fv[i]=!0,console.warn(i))}function YT(i,e,t){return new Promise(function(r,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const dv=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qT(){const i={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Or?Lc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Ca("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Ca("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[yo]:{primaries:e,whitePoint:r,transfer:Lc,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),i}const Pt=qT();function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qs;class KT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qs===void 0&&(qs=Ic("canvas")),qs.width=e.width,qs.height=e.height;const o=qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=tr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(tr(t[r]/255)*255):t[r]=tr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZT=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push($f(o[c].image)):a.push($f(o[c]))}else a=$f(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function $f(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?KT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JT=0;const Yf=new ne;class Fn extends Ao{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=vs,o=vs,a=bi,c=xs,u=vi,h=sr,d=Fn.DEFAULT_ANISOTROPY,m=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Co(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yf).x}get height(){return this.source.getSize(Yf).y}get depth(){return this.source.getSize(Yf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ux;Fn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,r=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const h=e.elements,d=h[0],m=h[4],g=h[8],v=h[1],y=h[5],E=h[9],M=h[2],x=h[6],S=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,T=(y+1)/2,U=(S+1)/2,O=(m+v)/4,I=(g+M)/4,G=(E+x)/4;return C>T&&C>U?C<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(C),o=O/r,a=I/r):T>U?T<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),r=O/o,a=G/o):U<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(U),r=I/a,o=G/a),this.set(r,o,a,t),this}let N=Math.sqrt((x-E)*(x-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(x-E)/N,this.y=(g-M)/N,this.z=(v-m)/N,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QT extends Ao{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const o={width:e,height:t,depth:r.depth},a=new Fn(o);this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Yh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends QT{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xx extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e1 extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,hi):hi.fromBufferAttribute(a,c),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),ql.subVectors(this.max,fa),Ks.subVectors(e.a,fa),Zs.subVectors(e.b,fa),Js.subVectors(e.c,fa),Rr.subVectors(Zs,Ks),Pr.subVectors(Js,Zs),as.subVectors(Ks,Js);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-as.z,as.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,as.z,0,-as.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-as.y,as.x,0];return!qf(t,Ks,Zs,Js,ql)||(t=[1,0,0,0,1,0,0,0,1],!qf(t,Ks,Zs,Js,ql))?!1:(Kl.crossVectors(Rr,Pr),t=[Kl.x,Kl.y,Kl.z],qf(t,Ks,Zs,Js,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],hi=new ne,Yl=new Ua,Ks=new ne,Zs=new ne,Js=new ne,Rr=new ne,Pr=new ne,as=new ne,fa=new ne,ql=new ne,Kl=new ne,ls=new ne;function qf(i,e,t,r,o){for(let a=0,c=i.length-3;a<=c;a+=3){ls.fromArray(i,a);const u=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),h=e.dot(ls),d=t.dot(ls),m=r.dot(ls);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>u)return!1}return!0}const t1=new Ua,da=new ne,Kf=new ne;class qh{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):t1.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Kf)),this.expandByPoint(da.copy(e.center).sub(Kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yi=new ne,Zf=new ne,Zl=new ne,Nr=new ne,Jf=new ne,Jl=new ne,Qf=new ne;class n1{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Zf.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Zf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Zl),u=Nr.dot(this.direction),h=-Nr.dot(Zl),d=Nr.lengthSq(),m=Math.abs(1-c*c);let g,v,y,E;if(m>0)if(g=c*h-u,v=c*u-h,E=a*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,y=g*(g+c*v+2*u)+v*(c*g+v+2*h)+d}else v=a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*h)+d;else v=-a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*h)+d;else v<=-E?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-h),a),y=-g*g+v*(v+2*h)+d):v<=E?(g=0,v=Math.min(Math.max(-a,-h),a),y=v*(v+2*h)+d):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-h),a),y=-g*g+v*(v+2*h)+d);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Zf).addScaledVector(Zl,v),y}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const r=Yi.dot(this.direction),o=Yi.dot(Yi)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,h=r+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,h;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),m>=0?(a=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),r>h||u>o)||((u>r||r!==r)&&(r=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,r,o,a){Jf.subVectors(t,e),Jl.subVectors(r,e),Qf.crossVectors(Jf,Jl);let c=this.direction.dot(Qf),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Nr.subVectors(this.origin,e);const h=u*this.direction.dot(Jl.crossVectors(Nr,Jl));if(h<0)return null;const d=u*this.direction.dot(Jf.cross(Nr));if(d<0||h+d>c)return null;const m=-u*Nr.dot(Qf);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,t,r,o,a,c,u,h,d,m,g,v,y,E,M,x){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,h,d,m,g,v,y,E,M,x)}set(e,t,r,o,a,c,u,h,d,m,g,v,y,E,M,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=h,S[2]=d,S[6]=m,S[10]=g,S[14]=v,S[3]=y,S[7]=E,S[11]=M,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),a=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),d=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*m,y=c*g,E=u*m,M=u*g;t[0]=h*m,t[4]=-h*g,t[8]=d,t[1]=y+E*d,t[5]=v-M*d,t[9]=-u*h,t[2]=M-v*d,t[6]=E+y*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,y=h*g,E=d*m,M=d*g;t[0]=v+M*u,t[4]=E*u-y,t[8]=c*d,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-E,t[6]=M+v*u,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,y=h*g,E=d*m,M=d*g;t[0]=v-M*u,t[4]=-c*g,t[8]=E+y*u,t[1]=y+E*u,t[5]=c*m,t[9]=M-v*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,y=c*g,E=u*m,M=u*g;t[0]=h*m,t[4]=E*d-y,t[8]=v*d+M,t[1]=h*g,t[5]=M*d+v,t[9]=y*d-E,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,y=c*d,E=u*h,M=u*d;t[0]=h*m,t[4]=M-v*g,t[8]=E*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-d*m,t[6]=y*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=c*h,y=c*d,E=u*h,M=u*d;t[0]=h*m,t[4]=-g,t[8]=d*m,t[1]=v*g+M,t[5]=c*m,t[9]=y*g-E,t[2]=E*g-y,t[6]=u*m,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i1,e,r1)}lookAt(e,t,r){const o=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Lr.crossVectors(r,jn),Lr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Lr.crossVectors(r,jn)),Lr.normalize(),Ql.crossVectors(jn,Lr),o[0]=Lr.x,o[4]=Ql.x,o[8]=jn.x,o[1]=Lr.y,o[5]=Ql.y,o[9]=jn.y,o[2]=Lr.z,o[6]=Ql.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],h=r[8],d=r[12],m=r[1],g=r[5],v=r[9],y=r[13],E=r[2],M=r[6],x=r[10],S=r[14],N=r[3],C=r[7],T=r[11],U=r[15],O=o[0],I=o[4],G=o[8],P=o[12],b=o[1],V=o[5],X=o[9],J=o[13],q=o[2],Q=o[6],ee=o[10],ie=o[14],z=o[3],re=o[7],oe=o[11],F=o[15];return a[0]=c*O+u*b+h*q+d*z,a[4]=c*I+u*V+h*Q+d*re,a[8]=c*G+u*X+h*ee+d*oe,a[12]=c*P+u*J+h*ie+d*F,a[1]=m*O+g*b+v*q+y*z,a[5]=m*I+g*V+v*Q+y*re,a[9]=m*G+g*X+v*ee+y*oe,a[13]=m*P+g*J+v*ie+y*F,a[2]=E*O+M*b+x*q+S*z,a[6]=E*I+M*V+x*Q+S*re,a[10]=E*G+M*X+x*ee+S*oe,a[14]=E*P+M*J+x*ie+S*F,a[3]=N*O+C*b+T*q+U*z,a[7]=N*I+C*V+T*Q+U*re,a[11]=N*G+C*X+T*ee+U*oe,a[15]=N*P+C*J+T*ie+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],m=e[2],g=e[6],v=e[10],y=e[14],E=e[3],M=e[7],x=e[11],S=e[15];return E*(+a*h*g-o*d*g-a*u*v+r*d*v+o*u*y-r*h*y)+M*(+t*h*y-t*d*v+a*c*v-o*c*y+o*d*m-a*h*m)+x*(+t*d*g-t*u*y-a*c*g+r*c*y+a*u*m-r*d*m)+S*(-o*u*m-t*h*g+t*u*v+o*c*g-r*c*v+r*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8],g=e[9],v=e[10],y=e[11],E=e[12],M=e[13],x=e[14],S=e[15],N=g*x*d-M*v*d+M*h*y-u*x*y-g*h*S+u*v*S,C=E*v*d-m*x*d-E*h*y+c*x*y+m*h*S-c*v*S,T=m*M*d-E*g*d+E*u*y-c*M*y-m*u*S+c*g*S,U=E*g*h-m*M*h-E*u*v+c*M*v+m*u*x-c*g*x,O=t*N+r*C+o*T+a*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=N*I,e[1]=(M*v*a-g*x*a-M*o*y+r*x*y+g*o*S-r*v*S)*I,e[2]=(u*x*a-M*h*a+M*o*d-r*x*d-u*o*S+r*h*S)*I,e[3]=(g*h*a-u*v*a-g*o*d+r*v*d+u*o*y-r*h*y)*I,e[4]=C*I,e[5]=(m*x*a-E*v*a+E*o*y-t*x*y-m*o*S+t*v*S)*I,e[6]=(E*h*a-c*x*a-E*o*d+t*x*d+c*o*S-t*h*S)*I,e[7]=(c*v*a-m*h*a+m*o*d-t*v*d-c*o*y+t*h*y)*I,e[8]=T*I,e[9]=(E*g*a-m*M*a-E*r*y+t*M*y+m*r*S-t*g*S)*I,e[10]=(c*M*a-E*u*a+E*r*d-t*M*d-c*r*S+t*u*S)*I,e[11]=(m*u*a-c*g*a-m*r*d+t*g*d+c*r*y-t*u*y)*I,e[12]=U*I,e[13]=(m*M*o-E*g*o+E*r*v-t*M*v-m*r*x+t*g*x)*I,e[14]=(E*u*o-c*M*o-E*r*h+t*M*h+c*r*x-t*u*x)*I,e[15]=(c*g*o-m*u*o+m*r*h-t*g*h-c*r*v+t*u*v)*I,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,h=e.z,d=a*c,m=a*u;return this.set(d*c+r,d*u-o*h,d*h+o*u,0,d*u+o*h,m*u+r,m*h-o*c,0,d*h-o*u,m*h+o*c,a*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,m=c+c,g=u+u,v=a*d,y=a*m,E=a*g,M=c*m,x=c*g,S=u*g,N=h*d,C=h*m,T=h*g,U=r.x,O=r.y,I=r.z;return o[0]=(1-(M+S))*U,o[1]=(y+T)*U,o[2]=(E-C)*U,o[3]=0,o[4]=(y-T)*O,o[5]=(1-(v+S))*O,o[6]=(x+N)*O,o[7]=0,o[8]=(E+C)*I,o[9]=(x-N)*I,o[10]=(1-(v+M))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let a=Qs.set(o[0],o[1],o[2]).length();const c=Qs.set(o[4],o[5],o[6]).length(),u=Qs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],pi.copy(this);const d=1/a,m=1/c,g=1/u;return pi.elements[0]*=d,pi.elements[1]*=d,pi.elements[2]*=d,pi.elements[4]*=m,pi.elements[5]*=m,pi.elements[6]*=m,pi.elements[8]*=g,pi.elements[9]*=g,pi.elements[10]*=g,t.setFromRotationMatrix(pi),r.x=a,r.y=c,r.z=u,this}makePerspective(e,t,r,o,a,c,u=Ri,h=!1){const d=this.elements,m=2*a/(t-e),g=2*a/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let E,M;if(h)E=a/(c-a),M=c*a/(c-a);else if(u===Ri)E=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Dc)E=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=Ri,h=!1){const d=this.elements,m=2/(t-e),g=2/(r-o),v=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,M;if(h)E=1/(c-a),M=c/(c-a);else if(u===Ri)E=-2/(c-a),M=-(c+a)/(c-a);else if(u===Dc)E=-1/(c-a),M=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Qs=new ne,pi=new en,i1=new ne(0,0,0),r1=new ne(1,1,1),Lr=new ne,Ql=new ne,jn=new ne,pv=new en,mv=new Ia;class or{constructor(e=0,t=0,r=0,o=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],h=o[1],d=o[5],m=o[9],g=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class $x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s1=0;const gv=new ne,eo=new Ia,qi=new en,ec=new ne,ha=new ne,o1=new ne,a1=new Ia,vv=new ne(1,0,0),xv=new ne(0,1,0),_v=new ne(0,0,1),yv={type:"added"},l1={type:"removed"},to={type:"childadded",child:null},ed={type:"childremoved",child:null};class qn extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ne,t=new or,r=new Ia,o=new ne(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new _t}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,t){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ec.copy(e):ec.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ha,ec,this.up):qi.lookAt(ec,ha,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(qi),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l1),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const g=h[d];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),y=c(e.animations),E=c(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qn.DEFAULT_UP=new ne(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new ne,Ki=new ne,td=new ne,Zi=new ne,no=new ne,io=new ne,Sv=new ne,nd=new ne,id=new ne,rd=new ne,sd=new Zt,od=new Zt,ad=new Zt;class gi{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),mi.subVectors(e,t),o.cross(mi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){mi.subVectors(o,t),Ki.subVectors(r,t),td.subVectors(e,t);const c=mi.dot(mi),u=mi.dot(Ki),h=mi.dot(td),d=Ki.dot(Ki),m=Ki.dot(td),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,y=(d*h-u*m)*v,E=(c*m-u*h)*v;return a.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,o,a,c,u,h){return this.getBarycoord(e,t,r,o,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Zi.x),h.addScaledVector(c,Zi.y),h.addScaledVector(u,Zi.z),h)}static getInterpolatedAttribute(e,t,r,o,a,c){return sd.setScalar(0),od.setScalar(0),ad.setScalar(0),sd.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(sd,a.x),c.addScaledVector(od,a.y),c.addScaledVector(ad,a.z),c}static isFrontFacing(e,t,r,o){return mi.subVectors(r,t),Ki.subVectors(e,t),mi.cross(Ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;no.subVectors(o,r),io.subVectors(a,r),nd.subVectors(e,r);const h=no.dot(nd),d=io.dot(nd);if(h<=0&&d<=0)return t.copy(r);id.subVectors(e,o);const m=no.dot(id),g=io.dot(id);if(m>=0&&g<=m)return t.copy(o);const v=h*g-m*d;if(v<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(r).addScaledVector(no,c);rd.subVectors(e,a);const y=no.dot(rd),E=io.dot(rd);if(E>=0&&y<=E)return t.copy(a);const M=y*d-h*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(r).addScaledVector(io,u);const x=m*E-y*g;if(x<=0&&g-m>=0&&y-E>=0)return Sv.subVectors(a,o),u=(g-m)/(g-m+(y-E)),t.copy(o).addScaledVector(Sv,u);const S=1/(x+M+v);return c=M*S,u=v*S,t.copy(r).addScaledVector(no,c).addScaledVector(io,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=XT(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=ld(c,a,e+1/3),this.g=ld(c,a,e),this.b=ld(c,a,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=ri){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const r=Yx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Pt.workingToColorSpace(En.copy(this),e),Math.round(wt(En.r*255,0,255))*65536+Math.round(wt(En.g*255,0,255))*256+Math.round(wt(En.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(En.copy(this),t);const r=En.r,o=En.g,a=En.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let h,d;const m=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=m<=.5?g/(c+u):g/(2-c-u),c){case r:h=(o-a)/g+(o<a?6:0);break;case o:h=(a-r)/g+2;break;case a:h=(r-o)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ri){Pt.workingToColorSpace(En.copy(this),e);const t=En.r,r=En.g,o=En.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(tc);const r=Wf(Dr.h,tc.h,t),o=Wf(Dr.s,tc.s,t),a=Wf(Dr.l,tc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ot;Ot.NAMES=Yx;let c1=0;class $c extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=ho,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Ld,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ld&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yc extends $c{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ne,nc=new Xe;let u1=0;class Li{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=lv,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lv&&(e.usage=this.usage),e}}class qx extends Li{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Kx extends Li{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class nr extends Li{constructor(e,t,r){super(new Float32Array(e),t,r)}}let f1=0;const ii=new en,cd=new qn,ro=new ne,Xn=new Ua,pa=new Ua,fn=new ne;class jr extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jx(e)?Kx:qx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new _t().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,r){return ii.makeTranslation(e,t,r),this.applyMatrix4(ii),this}scale(e,t,r){return ii.makeScale(e,t,r),this.applyMatrix4(ii),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new nr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xn.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];pa.setFromBufferAttribute(u),this.morphTargetsRelative?(fn.addVectors(Xn.min,pa.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,pa.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(pa.min),Xn.expandByPoint(pa.max))}Xn.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)fn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)fn.fromBufferAttribute(u,d),h&&(ro.fromBufferAttribute(e,d),fn.add(ro)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let G=0;G<r.count;G++)u[G]=new ne,h[G]=new ne;const d=new ne,m=new ne,g=new ne,v=new Xe,y=new Xe,E=new Xe,M=new ne,x=new ne;function S(G,P,b){d.fromBufferAttribute(r,G),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,b),v.fromBufferAttribute(a,G),y.fromBufferAttribute(a,P),E.fromBufferAttribute(a,b),m.sub(d),g.sub(d),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(V),x.copy(g).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(V),u[G].add(M),u[P].add(M),u[b].add(M),h[G].add(x),h[P].add(x),h[b].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,P=N.length;G<P;++G){const b=N[G],V=b.start,X=b.count;for(let J=V,q=V+X;J<q;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const C=new ne,T=new ne,U=new ne,O=new ne;function I(G){U.fromBufferAttribute(o,G),O.copy(U);const P=u[G];C.copy(P),C.sub(U.multiplyScalar(U.dot(P))).normalize(),T.crossVectors(O,P);const V=T.dot(h[G])<0?-1:1;c.setXYZW(G,C.x,C.y,C.z,V)}for(let G=0,P=N.length;G<P;++G){const b=N[G],V=b.start,X=b.count;for(let J=V,q=V+X;J<q;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new ne,a=new ne,c=new ne,u=new ne,h=new ne,d=new ne,m=new ne,g=new ne;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),M=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),u.fromBufferAttribute(r,E),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,x),u.add(m),h.add(m),d.add(m),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(u,h){const d=u.array,m=u.itemSize,g=u.normalized,v=new d.constructor(h.length*m);let y=0,E=0;for(let M=0,x=h.length;M<x;M++){u.isInterleavedBufferAttribute?y=h[M]*u.data.stride+u.offset:y=h[M]*m;for(let S=0;S<m;S++)v[E++]=d[y++]}return new Li(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jr,r=this.index.array,o=this.attributes;for(const u in o){const h=o[u],d=e(h,r);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let m=0,g=d.length;m<g;m++){const v=d[m],y=e(v,r);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];m.push(y.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],g=a[d];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new en,cs=new n1,ic=new qh,Mv=new ne,rc=new ne,sc=new ne,oc=new ne,ud=new ne,ac=new ne,wv=new ne,lc=new ne;class Pi extends qn{constructor(e=new jr,t=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){ac.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const m=u[h],g=a[h];m!==0&&(ud.fromBufferAttribute(g,e),c?ac.addScaledVector(ud,m):ac.addScaledVector(ud.sub(t),m))}t.add(ac)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(a),cs.copy(e.ray).recast(e.near),!(ic.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ic,Mv)===null||cs.origin.distanceToSquared(Mv)>(e.far-e.near)**2))&&(Ev.copy(a).invert(),cs.copy(e.ray).applyMatrix4(Ev),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,v=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const x=v[E],S=c[x.materialIndex],N=Math.max(x.start,y.start),C=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let T=N,U=C;T<U;T+=3){const O=u.getX(T),I=u.getX(T+1),G=u.getX(T+2);o=cc(this,S,e,r,d,m,g,O,I,G),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let x=E,S=M;x<S;x+=3){const N=u.getX(x),C=u.getX(x+1),T=u.getX(x+2);o=cc(this,c,e,r,d,m,g,N,C,T),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const x=v[E],S=c[x.materialIndex],N=Math.max(x.start,y.start),C=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let T=N,U=C;T<U;T+=3){const O=T,I=T+1,G=T+2;o=cc(this,S,e,r,d,m,g,O,I,G),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let x=E,S=M;x<S;x+=3){const N=x,C=x+1,T=x+2;o=cc(this,c,e,r,d,m,g,N,C,T),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function d1(i,e,t,r,o,a,c,u){let h;if(e.side===On?h=r.intersectTriangle(c,a,o,!0,u):h=r.intersectTriangle(o,a,c,e.side===Gr,u),h===null)return null;lc.copy(u),lc.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(lc);return d<t.near||d>t.far?null:{distance:d,point:lc.clone(),object:i}}function cc(i,e,t,r,o,a,c,u,h,d){i.getVertexPosition(u,rc),i.getVertexPosition(h,sc),i.getVertexPosition(d,oc);const m=d1(i,e,t,r,rc,sc,oc,wv);if(m){const g=new ne;gi.getBarycoord(wv,rc,sc,oc,g),o&&(m.uv=gi.getInterpolatedAttribute(o,u,h,d,g,new Xe)),a&&(m.uv1=gi.getInterpolatedAttribute(a,u,h,d,g,new Xe)),c&&(m.normal=gi.getInterpolatedAttribute(c,u,h,d,g,new ne),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:u,b:h,c:d,normal:new ne,materialIndex:0};gi.getNormal(rc,sc,oc,v.normal),m.face=v,m.barycoord=g}return m}class Oa extends jr{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],m=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,r,t,e,c,a,0),E("z","y","x",1,-1,r,t,-e,c,a,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,a,4),E("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(h),this.setAttribute("position",new nr(d,3)),this.setAttribute("normal",new nr(m,3)),this.setAttribute("uv",new nr(g,2));function E(M,x,S,N,C,T,U,O,I,G,P){const b=T/I,V=U/G,X=T/2,J=U/2,q=O/2,Q=I+1,ee=G+1;let ie=0,z=0;const re=new ne;for(let oe=0;oe<ee;oe++){const F=oe*V-J;for(let ae=0;ae<Q;ae++){const Oe=ae*b-X;re[M]=Oe*N,re[x]=F*C,re[S]=q,d.push(re.x,re.y,re.z),re[M]=0,re[x]=0,re[S]=O>0?1:-1,m.push(re.x,re.y,re.z),g.push(ae/I),g.push(1-oe/G),ie+=1}}for(let oe=0;oe<G;oe++)for(let F=0;F<I;F++){const ae=v+F+Q*oe,Oe=v+F+Q*(oe+1),He=v+(F+1)+Q*(oe+1),$e=v+(F+1)+Q*oe;h.push(ae,Oe,$e),h.push(Oe,He,$e),z+=6}u.addGroup(y,z,P),y+=z,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(i){const e={};for(let t=0;t<i.length;t++){const r=So(i[t]);for(const o in r)e[o]=r[o]}return e}function h1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const p1={clone:So,merge:bn};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends $c{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=h1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Jx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new ne,Tv=new Xe,Av=new Xe;class si extends Jx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Tv,Av),t.subVectors(Av,Tv)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*r/d,o*=c.width/h,r*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class v1 extends qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new si(so,oo,e,t);o.layers=this.layers,this.add(o);const a=new si(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new si(so,oo,e,t);c.layers=this.layers,this.add(c);const u=new si(so,oo,e,t);u.layers=this.layers,this.add(u);const h=new si(so,oo,e,t);h.layers=this.layers,this.add(h);const d=new si(so,oo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,a),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,d),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Qx extends Fn{constructor(e=[],t=xo,r,o,a,c,u,h,d,m){super(e,t,r,o,a,c,u,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x1 extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Qx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Oa(5,5,5),a=new Wr({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Fr});a.uniforms.tEquirect.value=t;const c=new Pi(o,a),u=t.minFilter;return t.minFilter===xs&&(t.minFilter=bi),new v1(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}class uc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _1={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,r),S=this._getHandJoint(d,M);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(_1)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new uc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class y1 extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dd=new ne,S1=new ne,E1=new _t;class hs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(S1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||E1.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new qh,M1=new Xe(.5,.5),fc=new ne;class e_{constructor(e=new hs,t=new hs,r=new hs,o=new hs,a=new hs,c=new hs){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ri,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],h=a[2],d=a[3],m=a[4],g=a[5],v=a[6],y=a[7],E=a[8],M=a[9],x=a[10],S=a[11],N=a[12],C=a[13],T=a[14],U=a[15];if(o[0].setComponents(d-c,y-m,S-E,U-N).normalize(),o[1].setComponents(d+c,y+m,S+E,U+N).normalize(),o[2].setComponents(d+u,y+g,S+M,U+C).normalize(),o[3].setComponents(d-u,y-g,S-M,U-C).normalize(),r)o[4].setComponents(h,v,x,T).normalize(),o[5].setComponents(d-h,y-v,S-x,U-T).normalize();else if(o[4].setComponents(d-h,y-v,S-x,U-T).normalize(),t===Ri)o[5].setComponents(d+h,y+v,S+x,U+T).normalize();else if(t===Dc)o[5].setComponents(h,v,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=M1.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(fc.x=o.normal.x>0?e.max.x:e.min.x,fc.y=o.normal.y>0?e.max.y:e.min.y,fc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t_ extends Fn{constructor(e,t,r=ys,o,a,c,u=xi,h=xi,d,m=Ta,g=1){if(m!==Ta&&m!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,a,c,u,h,m,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class n_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),a+=r.distanceTo(o),t.push(a),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const a=r.length;let c;t?c=t:c=e*r[a-1];let u=0,h=a-1,d;for(;u<=h;)if(o=Math.floor(u+(h-u)/2),d=r[o]-c,d<0)u=o+1;else if(d>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(a-1);const m=r[o],v=r[o+1]-m,y=(c-m)/v;return(o+y)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),u=this.getPoint(a),h=t||(c.isVector2?new Xe:new ne);return h.copy(u).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ne,o=[],a=[],c=[],u=new ne,h=new en;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new ne)}a[0]=new ne,c[0]=new ne;let d=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);m<=d&&(d=m,r.set(1,0,0)),g<=d&&(d=g,r.set(0,1,0)),v<=d&&r.set(0,0,1),u.crossVectors(o[0],r).normalize(),a[0].crossVectors(o[0],u),c[0].crossVectors(o[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),c[y]=c[y-1].clone(),u.crossVectors(o[y-1],o[y]),u.length()>Number.EPSILON){u.normalize();const E=Math.acos(wt(o[y-1].dot(o[y]),-1,1));a[y].applyMatrix4(h.makeRotationAxis(u,E))}c[y].crossVectors(o[y],a[y])}if(t===!0){let y=Math.acos(wt(a[0].dot(a[e]),-1,1));y/=e,o[0].dot(u.crossVectors(a[0],a[e]))>0&&(y=-y);for(let E=1;E<=e;E++)a[E].applyMatrix4(h.makeRotationAxis(o[E],y*E)),c[E].crossVectors(o[E],a[E])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kh extends Ui{constructor(e=0,t=0,r=1,o=1,a=0,c=Math.PI*2,u=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=h}getPoint(e,t=new Xe){const r=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(c?a=0:a=o),this.aClockwise===!0&&!c&&(a===o?a=-o:a=a-o);const u=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(u),d=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=h-this.aX,y=d-this.aY;h=v*m-y*g+this.aX,d=v*g+y*m+this.aY}return r.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class w1 extends Kh{constructor(e,t,r,o,a,c){super(e,t,r,r,o,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Zh(){let i=0,e=0,t=0,r=0;function o(a,c,u,h){i=a,e=u,t=-3*a+3*c-2*u-h,r=2*a-2*c+u+h}return{initCatmullRom:function(a,c,u,h,d){o(c,u,d*(u-a),d*(h-c))},initNonuniformCatmullRom:function(a,c,u,h,d,m,g){let v=(c-a)/d-(u-a)/(d+m)+(u-c)/m,y=(u-c)/m-(h-c)/(m+g)+(h-u)/g;v*=m,y*=m,o(c,u,v,y)},calc:function(a){const c=a*a,u=c*a;return i+e*a+t*c+r*u}}}const dc=new ne,hd=new Zh,pd=new Zh,md=new Zh;class T1 extends Ui{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ne){const r=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),h=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:h===0&&u===a-1&&(u=a-2,h=1);let d,m;this.closed||u>0?d=o[(u-1)%a]:(dc.subVectors(o[0],o[1]).add(o[0]),d=dc);const g=o[u%a],v=o[(u+1)%a];if(this.closed||u+2<a?m=o[(u+2)%a]:(dc.subVectors(o[a-1],o[a-2]).add(o[a-1]),m=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(v),y),x=Math.pow(v.distanceToSquared(m),y);M<1e-4&&(M=1),E<1e-4&&(E=M),x<1e-4&&(x=M),hd.initNonuniformCatmullRom(d.x,g.x,v.x,m.x,E,M,x),pd.initNonuniformCatmullRom(d.y,g.y,v.y,m.y,E,M,x),md.initNonuniformCatmullRom(d.z,g.z,v.z,m.z,E,M,x)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(d.x,g.x,v.x,m.x,this.tension),pd.initCatmullRom(d.y,g.y,v.y,m.y,this.tension),md.initCatmullRom(d.z,g.z,v.z,m.z,this.tension));return r.set(hd.calc(h),pd.calc(h),md.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ne().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cv(i,e,t,r,o){const a=(r-e)*.5,c=(o-t)*.5,u=i*i,h=i*u;return(2*t-2*r+a+c)*h+(-3*t+3*r-2*a-c)*u+a*i+t}function A1(i,e){const t=1-i;return t*t*e}function C1(i,e){return 2*(1-i)*i*e}function b1(i,e){return i*i*e}function xa(i,e,t,r){return A1(i,e)+C1(i,t)+b1(i,r)}function R1(i,e){const t=1-i;return t*t*t*e}function P1(i,e){const t=1-i;return 3*t*t*i*e}function N1(i,e){return 3*(1-i)*i*i*e}function L1(i,e){return i*i*i*e}function _a(i,e,t,r,o){return R1(i,e)+P1(i,t)+N1(i,r)+L1(i,o)}class i_ extends Ui{constructor(e=new Xe,t=new Xe,r=new Xe,o=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Xe){const r=t,o=this.v0,a=this.v1,c=this.v2,u=this.v3;return r.set(_a(e,o.x,a.x,c.x,u.x),_a(e,o.y,a.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D1 extends Ui{constructor(e=new ne,t=new ne,r=new ne,o=new ne){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ne){const r=t,o=this.v0,a=this.v1,c=this.v2,u=this.v3;return r.set(_a(e,o.x,a.x,c.x,u.x),_a(e,o.y,a.y,c.y,u.y),_a(e,o.z,a.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r_ extends Ui{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I1 extends Ui{constructor(e=new ne,t=new ne){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ne){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s_ extends Ui{constructor(e=new Xe,t=new Xe,r=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Xe){const r=t,o=this.v0,a=this.v1,c=this.v2;return r.set(xa(e,o.x,a.x,c.x),xa(e,o.y,a.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U1 extends Ui{constructor(e=new ne,t=new ne,r=new ne){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ne){const r=t,o=this.v0,a=this.v1,c=this.v2;return r.set(xa(e,o.x,a.x,c.x),xa(e,o.y,a.y,c.y),xa(e,o.z,a.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o_ extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const r=t,o=this.points,a=(o.length-1)*e,c=Math.floor(a),u=a-c,h=o[c===0?c:c-1],d=o[c],m=o[c>o.length-2?o.length-1:c+1],g=o[c>o.length-3?o.length-1:c+2];return r.set(Cv(u,h.x,d.x,m.x,g.x),Cv(u,h.y,d.y,m.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Xe().fromArray(o))}return this}}var _h=Object.freeze({__proto__:null,ArcCurve:w1,CatmullRomCurve3:T1,CubicBezierCurve:i_,CubicBezierCurve3:D1,EllipseCurve:Kh,LineCurve:r_,LineCurve3:I1,QuadraticBezierCurve:s_,QuadraticBezierCurve3:U1,SplineCurve:o_});class O1 extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _h[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=r){const c=o[a]-r,u=this.curves[a],h=u.getLength(),d=h===0?0:1-c/h;return u.getPointAt(d,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,a=this.curves;o<a.length;o++){const c=a[o],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(u);for(let d=0;d<h.length;d++){const m=h[d];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new _h[o.type]().fromJSON(o))}return this}}class bv extends O1{constructor(e){super(),this.type="Path",this.currentPoint=new Xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new r_(this.currentPoint.clone(),new Xe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const a=new s_(this.currentPoint.clone(),new Xe(e,t),new Xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,a,c){const u=new i_(this.currentPoint.clone(),new Xe(e,t),new Xe(r,o),new Xe(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new o_(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,a,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+u,t+h,r,o,a,c),this}absarc(e,t,r,o,a,c){return this.absellipse(e,t,r,r,o,a,c),this}ellipse(e,t,r,o,a,c,u,h){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+d,t+m,r,o,a,c,u,h),this}absellipse(e,t,r,o,a,c,u,h){const d=new Kh(e,t,r,o,a,c,u,h);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const m=d.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class a_ extends bv{constructor(e){super(e),this.uuid=Co(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new bv().fromJSON(o))}return this}}function F1(i,e,t=2){const r=e&&e.length,o=r?e[0]*t:i.length;let a=l_(i,0,o,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,h,d;if(r&&(a=H1(i,e,a,t)),i.length>80*t){u=1/0,h=1/0;let m=-1/0,g=-1/0;for(let v=t;v<o;v+=t){const y=i[v],E=i[v+1];y<u&&(u=y),E<h&&(h=E),y>m&&(m=y),E>g&&(g=E)}d=Math.max(m-u,g-h),d=d!==0?32767/d:0}return ba(a,c,t,u,h,d,0),c}function l_(i,e,t,r,o){let a;if(o===Q1(i,e,t,r)>0)for(let c=e;c<t;c+=r)a=Rv(c/r|0,i[c],i[c+1],a);else for(let c=t-r;c>=e;c-=r)a=Rv(c/r|0,i[c],i[c+1],a);return a&&Eo(a,a.next)&&(Pa(a),a=a.next),a}function Es(i,e){if(!i)return i;e||(e=i);let t=i,r;do if(r=!1,!t.steiner&&(Eo(t,t.next)||$t(t.prev,t,t.next)===0)){if(Pa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ba(i,e,t,r,o,a,c){if(!i)return;!c&&a&&$1(i,r,o,a);let u=i;for(;i.prev!==i.next;){const h=i.prev,d=i.next;if(a?z1(i,r,o,a):k1(i)){e.push(h.i,i.i,d.i),Pa(i),i=d.next,u=d.next;continue}if(i=d,i===u){c?c===1?(i=B1(Es(i),e),ba(i,e,t,r,o,a,2)):c===2&&V1(i,e,t,r,o,a):ba(Es(i),e,t,r,o,a,1);break}}}function k1(i){const e=i.prev,t=i,r=i.next;if($t(e,t,r)>=0)return!1;const o=e.x,a=t.x,c=r.x,u=e.y,h=t.y,d=r.y,m=Math.min(o,a,c),g=Math.min(u,h,d),v=Math.max(o,a,c),y=Math.max(u,h,d);let E=r.next;for(;E!==e;){if(E.x>=m&&E.x<=v&&E.y>=g&&E.y<=y&&ma(o,u,a,h,c,d,E.x,E.y)&&$t(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function z1(i,e,t,r){const o=i.prev,a=i,c=i.next;if($t(o,a,c)>=0)return!1;const u=o.x,h=a.x,d=c.x,m=o.y,g=a.y,v=c.y,y=Math.min(u,h,d),E=Math.min(m,g,v),M=Math.max(u,h,d),x=Math.max(m,g,v),S=yh(y,E,e,t,r),N=yh(M,x,e,t,r);let C=i.prevZ,T=i.nextZ;for(;C&&C.z>=S&&T&&T.z<=N;){if(C.x>=y&&C.x<=M&&C.y>=E&&C.y<=x&&C!==o&&C!==c&&ma(u,m,h,g,d,v,C.x,C.y)&&$t(C.prev,C,C.next)>=0||(C=C.prevZ,T.x>=y&&T.x<=M&&T.y>=E&&T.y<=x&&T!==o&&T!==c&&ma(u,m,h,g,d,v,T.x,T.y)&&$t(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;C&&C.z>=S;){if(C.x>=y&&C.x<=M&&C.y>=E&&C.y<=x&&C!==o&&C!==c&&ma(u,m,h,g,d,v,C.x,C.y)&&$t(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;T&&T.z<=N;){if(T.x>=y&&T.x<=M&&T.y>=E&&T.y<=x&&T!==o&&T!==c&&ma(u,m,h,g,d,v,T.x,T.y)&&$t(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function B1(i,e){let t=i;do{const r=t.prev,o=t.next.next;!Eo(r,o)&&u_(r,t,t.next,o)&&Ra(r,o)&&Ra(o,r)&&(e.push(r.i,t.i,o.i),Pa(t),Pa(t.next),t=i=o),t=t.next}while(t!==i);return Es(t)}function V1(i,e,t,r,o,a){let c=i;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&K1(c,u)){let h=f_(c,u);c=Es(c,c.next),h=Es(h,h.next),ba(c,e,t,r,o,a,0),ba(h,e,t,r,o,a,0);return}u=u.next}c=c.next}while(c!==i)}function H1(i,e,t,r){const o=[];for(let a=0,c=e.length;a<c;a++){const u=e[a]*r,h=a<c-1?e[a+1]*r:i.length,d=l_(i,u,h,r,!1);d===d.next&&(d.steiner=!0),o.push(q1(d))}o.sort(G1);for(let a=0;a<o.length;a++)t=W1(o[a],t);return t}function G1(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const r=(i.next.y-i.y)/(i.next.x-i.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function W1(i,e){const t=j1(i,e);if(!t)return e;const r=f_(t,i);return Es(r,r.next),Es(t,t.next)}function j1(i,e){let t=e;const r=i.x,o=i.y;let a=-1/0,c;if(Eo(i,t))return t;do{if(Eo(i,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const g=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=r&&g>a&&(a=g,c=t.x<t.next.x?t:t.next,g===r))return c}t=t.next}while(t!==e);if(!c)return null;const u=c,h=c.x,d=c.y;let m=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&c_(o<d?r:a,o,h,d,o<d?a:r,o,t.x,t.y)){const g=Math.abs(o-t.y)/(r-t.x);Ra(t,i)&&(g<m||g===m&&(t.x>c.x||t.x===c.x&&X1(c,t)))&&(c=t,m=g)}t=t.next}while(t!==u);return c}function X1(i,e){return $t(i.prev,i,e.prev)<0&&$t(e.next,i,i.next)<0}function $1(i,e,t,r){let o=i;do o.z===0&&(o.z=yh(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,Y1(o)}function Y1(i){let e,t=1;do{let r=i,o;i=null;let a=null;for(e=0;r;){e++;let c=r,u=0;for(let d=0;d<t&&(u++,c=c.nextZ,!!c);d++);let h=t;for(;u>0||h>0&&c;)u!==0&&(h===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,u--):(o=c,c=c.nextZ,h--),a?a.nextZ=o:i=o,o.prevZ=a,a=o;r=c}a.nextZ=null,t*=2}while(e>1);return i}function yh(i,e,t,r,o){return i=(i-t)*o|0,e=(e-r)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function q1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function c_(i,e,t,r,o,a,c,u){return(o-c)*(e-u)>=(i-c)*(a-u)&&(i-c)*(r-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(o-c)*(r-u)}function ma(i,e,t,r,o,a,c,u){return!(i===c&&e===u)&&c_(i,e,t,r,o,a,c,u)}function K1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Z1(i,e)&&(Ra(i,e)&&Ra(e,i)&&J1(i,e)&&($t(i.prev,i,e.prev)||$t(i,e.prev,e))||Eo(i,e)&&$t(i.prev,i,i.next)>0&&$t(e.prev,e,e.next)>0)}function $t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Eo(i,e){return i.x===e.x&&i.y===e.y}function u_(i,e,t,r){const o=pc($t(i,e,t)),a=pc($t(i,e,r)),c=pc($t(t,r,i)),u=pc($t(t,r,e));return!!(o!==a&&c!==u||o===0&&hc(i,t,e)||a===0&&hc(i,r,e)||c===0&&hc(t,i,r)||u===0&&hc(t,e,r))}function hc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pc(i){return i>0?1:i<0?-1:0}function Z1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&u_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ra(i,e){return $t(i.prev,i,i.next)<0?$t(i,e,i.next)>=0&&$t(i,i.prev,e)>=0:$t(i,e,i.prev)<0||$t(i,i.next,e)<0}function J1(i,e){let t=i,r=!1;const o=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==i);return r}function f_(i,e){const t=Sh(i.i,i.x,i.y),r=Sh(e.i,e.x,e.y),o=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,r.next=t,t.prev=r,a.next=r,r.prev=a,r}function Rv(i,e,t,r){const o=Sh(i,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q1(i,e,t,r){let o=0;for(let a=e,c=t-r;a<t;a+=r)o+=(i[c]-i[a])*(i[a+1]+i[c+1]),c=a;return o}class eA{static triangulate(e,t,r=2){return F1(e,t,r)}}class lo{static area(e){const t=e.length;let r=0;for(let o=t-1,a=0;a<t;o=a++)r+=e[o].x*e[a].y-e[a].x*e[o].y;return r*.5}static isClockWise(e){return lo.area(e)<0}static triangulateShape(e,t){const r=[],o=[],a=[];Pv(e),Nv(r,e);let c=e.length;t.forEach(Pv);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Nv(r,t[h]);const u=eA.triangulate(r,o);for(let h=0;h<u.length;h+=3)a.push(u.slice(h,h+3));return a}}function Pv(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nv(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Jh extends jr{constructor(e=new a_([new Xe(.5,.5),new Xe(-.5,.5),new Xe(-.5,-.5),new Xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],a=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];c(d)}this.setAttribute("position",new nr(o,3)),this.setAttribute("uv",new nr(a,2)),this.computeVertexNormals();function c(u){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,E=t.bevelSize!==void 0?t.bevelSize:y-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const S=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:tA;let C,T=!1,U,O,I,G;S&&(C=S.getSpacedPoints(m),T=!0,v=!1,U=S.computeFrenetFrames(m,!1),O=new ne,I=new ne,G=new ne),v||(x=0,y=0,E=0,M=0);const P=u.extractPoints(d);let b=P.shape;const V=P.holes;if(!lo.isClockWise(b)){b=b.reverse();for(let _e=0,ve=V.length;_e<ve;_e++){const ge=V[_e];lo.isClockWise(ge)&&(V[_e]=ge.reverse())}}function J(_e){const ge=10000000000000001e-36;let me=_e[0];for(let Ie=1;Ie<=_e.length;Ie++){const Ee=Ie%_e.length,Le=_e[Ee],ct=Le.x-me.x,dt=Le.y-me.y,L=ct*ct+dt*dt,A=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(me.x),Math.abs(me.y)),Z=ge*A*A;if(L<=Z){_e.splice(Ee,1),Ie--;continue}me=Le}}J(b),V.forEach(J);const q=V.length,Q=b;for(let _e=0;_e<q;_e++){const ve=V[_e];b=b.concat(ve)}function ee(_e,ve,ge){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),_e.clone().addScaledVector(ve,ge)}const ie=b.length;function z(_e,ve,ge){let me,Ie,Ee;const Le=_e.x-ve.x,ct=_e.y-ve.y,dt=ge.x-_e.x,L=ge.y-_e.y,A=Le*Le+ct*ct,Z=Le*L-ct*dt;if(Math.abs(Z)>Number.EPSILON){const de=Math.sqrt(A),ye=Math.sqrt(dt*dt+L*L),he=ve.x-ct/de,Qe=ve.y+Le/de,Pe=ge.x-L/ye,Ye=ge.y+dt/ye,et=((Pe-he)*L-(Ye-Qe)*dt)/(Le*L-ct*dt);me=he+Le*et-_e.x,Ie=Qe+ct*et-_e.y;const Ae=me*me+Ie*Ie;if(Ae<=2)return new Xe(me,Ie);Ee=Math.sqrt(Ae/2)}else{let de=!1;Le>Number.EPSILON?dt>Number.EPSILON&&(de=!0):Le<-Number.EPSILON?dt<-Number.EPSILON&&(de=!0):Math.sign(ct)===Math.sign(L)&&(de=!0),de?(me=-ct,Ie=Le,Ee=Math.sqrt(A)):(me=Le,Ie=ct,Ee=Math.sqrt(A/2))}return new Xe(me/Ee,Ie/Ee)}const re=[];for(let _e=0,ve=Q.length,ge=ve-1,me=_e+1;_e<ve;_e++,ge++,me++)ge===ve&&(ge=0),me===ve&&(me=0),re[_e]=z(Q[_e],Q[ge],Q[me]);const oe=[];let F,ae=re.concat();for(let _e=0,ve=q;_e<ve;_e++){const ge=V[_e];F=[];for(let me=0,Ie=ge.length,Ee=Ie-1,Le=me+1;me<Ie;me++,Ee++,Le++)Ee===Ie&&(Ee=0),Le===Ie&&(Le=0),F[me]=z(ge[me],ge[Ee],ge[Le]);oe.push(F),ae=ae.concat(F)}let Oe;if(x===0)Oe=lo.triangulateShape(Q,V);else{const _e=[],ve=[];for(let ge=0;ge<x;ge++){const me=ge/x,Ie=y*Math.cos(me*Math.PI/2),Ee=E*Math.sin(me*Math.PI/2)+M;for(let Le=0,ct=Q.length;Le<ct;Le++){const dt=ee(Q[Le],re[Le],Ee);Ue(dt.x,dt.y,-Ie),me===0&&_e.push(dt)}for(let Le=0,ct=q;Le<ct;Le++){const dt=V[Le];F=oe[Le];const L=[];for(let A=0,Z=dt.length;A<Z;A++){const de=ee(dt[A],F[A],Ee);Ue(de.x,de.y,-Ie),me===0&&L.push(de)}me===0&&ve.push(L)}}Oe=lo.triangulateShape(_e,ve)}const He=Oe.length,$e=E+M;for(let _e=0;_e<ie;_e++){const ve=v?ee(b[_e],ae[_e],$e):b[_e];T?(I.copy(U.normals[0]).multiplyScalar(ve.x),O.copy(U.binormals[0]).multiplyScalar(ve.y),G.copy(C[0]).add(I).add(O),Ue(G.x,G.y,G.z)):Ue(ve.x,ve.y,0)}for(let _e=1;_e<=m;_e++)for(let ve=0;ve<ie;ve++){const ge=v?ee(b[ve],ae[ve],$e):b[ve];T?(I.copy(U.normals[_e]).multiplyScalar(ge.x),O.copy(U.binormals[_e]).multiplyScalar(ge.y),G.copy(C[_e]).add(I).add(O),Ue(G.x,G.y,G.z)):Ue(ge.x,ge.y,g/m*_e)}for(let _e=x-1;_e>=0;_e--){const ve=_e/x,ge=y*Math.cos(ve*Math.PI/2),me=E*Math.sin(ve*Math.PI/2)+M;for(let Ie=0,Ee=Q.length;Ie<Ee;Ie++){const Le=ee(Q[Ie],re[Ie],me);Ue(Le.x,Le.y,g+ge)}for(let Ie=0,Ee=V.length;Ie<Ee;Ie++){const Le=V[Ie];F=oe[Ie];for(let ct=0,dt=Le.length;ct<dt;ct++){const L=ee(Le[ct],F[ct],me);T?Ue(L.x,L.y+C[m-1].y,C[m-1].x+ge):Ue(L.x,L.y,g+ge)}}}le(),pe();function le(){const _e=o.length/3;if(v){let ve=0,ge=ie*ve;for(let me=0;me<He;me++){const Ie=Oe[me];Fe(Ie[2]+ge,Ie[1]+ge,Ie[0]+ge)}ve=m+x*2,ge=ie*ve;for(let me=0;me<He;me++){const Ie=Oe[me];Fe(Ie[0]+ge,Ie[1]+ge,Ie[2]+ge)}}else{for(let ve=0;ve<He;ve++){const ge=Oe[ve];Fe(ge[2],ge[1],ge[0])}for(let ve=0;ve<He;ve++){const ge=Oe[ve];Fe(ge[0]+ie*m,ge[1]+ie*m,ge[2]+ie*m)}}r.addGroup(_e,o.length/3-_e,0)}function pe(){const _e=o.length/3;let ve=0;we(Q,ve),ve+=Q.length;for(let ge=0,me=V.length;ge<me;ge++){const Ie=V[ge];we(Ie,ve),ve+=Ie.length}r.addGroup(_e,o.length/3-_e,1)}function we(_e,ve){let ge=_e.length;for(;--ge>=0;){const me=ge;let Ie=ge-1;Ie<0&&(Ie=_e.length-1);for(let Ee=0,Le=m+x*2;Ee<Le;Ee++){const ct=ie*Ee,dt=ie*(Ee+1),L=ve+me+ct,A=ve+Ie+ct,Z=ve+Ie+dt,de=ve+me+dt;vt(L,A,Z,de)}}}function Ue(_e,ve,ge){h.push(_e),h.push(ve),h.push(ge)}function Fe(_e,ve,ge){bt(_e),bt(ve),bt(ge);const me=o.length/3,Ie=N.generateTopUV(r,o,me-3,me-2,me-1);B(Ie[0]),B(Ie[1]),B(Ie[2])}function vt(_e,ve,ge,me){bt(_e),bt(ve),bt(me),bt(ve),bt(ge),bt(me);const Ie=o.length/3,Ee=N.generateSideWallUV(r,o,Ie-6,Ie-3,Ie-2,Ie-1);B(Ee[0]),B(Ee[1]),B(Ee[3]),B(Ee[1]),B(Ee[2]),B(Ee[3])}function bt(_e){o.push(h[_e*3+0]),o.push(h[_e*3+1]),o.push(h[_e*3+2])}function B(_e){a.push(_e.x),a.push(_e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return nA(t,r,e)}static fromJSON(e,t){const r=[];for(let a=0,c=e.shapes.length;a<c;a++){const u=t[e.shapes[a]];r.push(u)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new _h[o.type]().fromJSON(o)),new Jh(r,e.options)}}const tA={generateTopUV:function(i,e,t,r,o){const a=e[t*3],c=e[t*3+1],u=e[r*3],h=e[r*3+1],d=e[o*3],m=e[o*3+1];return[new Xe(a,c),new Xe(u,h),new Xe(d,m)]},generateSideWallUV:function(i,e,t,r,o,a){const c=e[t*3],u=e[t*3+1],h=e[t*3+2],d=e[r*3],m=e[r*3+1],g=e[r*3+2],v=e[o*3],y=e[o*3+1],E=e[o*3+2],M=e[a*3],x=e[a*3+1],S=e[a*3+2];return Math.abs(u-m)<Math.abs(c-d)?[new Xe(c,1-h),new Xe(d,1-g),new Xe(v,1-E),new Xe(M,1-S)]:[new Xe(u,1-h),new Xe(m,1-g),new Xe(y,1-E),new Xe(x,1-S)]}};function nA(i,e,t){if(t.shapes=[],Array.isArray(i))for(let r=0,o=i.length;r<o;r++){const a=i[r];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qc extends jr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),h=Math.floor(o),d=u+1,m=h+1,g=e/u,v=t/h,y=[],E=[],M=[],x=[];for(let S=0;S<m;S++){const N=S*v-c;for(let C=0;C<d;C++){const T=C*g-a;E.push(T,-N,0),M.push(0,0,1),x.push(C/u),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let N=0;N<u;N++){const C=N+d*S,T=N+d*(S+1),U=N+1+d*(S+1),O=N+1+d*S;y.push(C,T,O),y.push(T,U,O)}this.setIndex(y),this.setAttribute("position",new nr(E,3)),this.setAttribute("normal",new nr(M,3)),this.setAttribute("uv",new nr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class iA extends $c{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rA extends $c{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sA extends Jx{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class oA extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Lv(i,e,t,r){const o=aA(r);switch(t){case Bx:return i*e;case Hx:return i*e/o.components*o.byteLength;case jh:return i*e/o.components*o.byteLength;case Gx:return i*e*2/o.components*o.byteLength;case Xh:return i*e*2/o.components*o.byteLength;case Vx:return i*e*3/o.components*o.byteLength;case vi:return i*e*4/o.components*o.byteLength;case $h:return i*e*4/o.components*o.byteLength;case Sc:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jd:case $d:return Math.max(i,16)*Math.max(e,8)/4;case Wd:case Xd:return Math.max(i,8)*Math.max(e,8)/2;case Yd:case qd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fh:case dh:case hh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ph:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gh:case vh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aA(i){switch(i){case sr:case Ox:return{byteLength:1,components:1};case Ma:case Fx:case Da:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case ys:case Hh:case er:return{byteLength:4,components:1};case kx:case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d_(){let i=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function lA(i){const e=new WeakMap;function t(u,h){const d=u.array,m=u.usage,g=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,m),u.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,h,d){const m=h.array,g=h.updateRanges;if(i.bindBuffer(d,u),g.length===0)i.bufferSubData(d,0,m);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];i.bufferSubData(d,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,h),d.version=u.version}}return{get:o,remove:a,update:c}}var cA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EA=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LA=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,IA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zA="gl_FragColor = linearToOutputTexel( gl_FragColor );",BA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VA=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,HA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
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
#endif`,XA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,tC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_C=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$C=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZC=`#ifdef USE_SKINNING
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
#endif`,JC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,mb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vb=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cb=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Nb=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:cA,alphahash_pars_fragment:uA,alphamap_fragment:fA,alphamap_pars_fragment:dA,alphatest_fragment:hA,alphatest_pars_fragment:pA,aomap_fragment:mA,aomap_pars_fragment:gA,batching_pars_vertex:vA,batching_vertex:xA,begin_vertex:_A,beginnormal_vertex:yA,bsdfs:SA,iridescence_fragment:EA,bumpmap_pars_fragment:MA,clipping_planes_fragment:wA,clipping_planes_pars_fragment:TA,clipping_planes_pars_vertex:AA,clipping_planes_vertex:CA,color_fragment:bA,color_pars_fragment:RA,color_pars_vertex:PA,color_vertex:NA,common:LA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:IA,displacementmap_pars_vertex:UA,displacementmap_vertex:OA,emissivemap_fragment:FA,emissivemap_pars_fragment:kA,colorspace_fragment:zA,colorspace_pars_fragment:BA,envmap_fragment:VA,envmap_common_pars_fragment:HA,envmap_pars_fragment:GA,envmap_pars_vertex:WA,envmap_physical_pars_fragment:tC,envmap_vertex:jA,fog_vertex:XA,fog_pars_vertex:$A,fog_fragment:YA,fog_pars_fragment:qA,gradientmap_pars_fragment:KA,lightmap_pars_fragment:ZA,lights_lambert_fragment:JA,lights_lambert_pars_fragment:QA,lights_pars_begin:eC,lights_toon_fragment:nC,lights_toon_pars_fragment:iC,lights_phong_fragment:rC,lights_phong_pars_fragment:sC,lights_physical_fragment:oC,lights_physical_pars_fragment:aC,lights_fragment_begin:lC,lights_fragment_maps:cC,lights_fragment_end:uC,logdepthbuf_fragment:fC,logdepthbuf_pars_fragment:dC,logdepthbuf_pars_vertex:hC,logdepthbuf_vertex:pC,map_fragment:mC,map_pars_fragment:gC,map_particle_fragment:vC,map_particle_pars_fragment:xC,metalnessmap_fragment:_C,metalnessmap_pars_fragment:yC,morphinstance_vertex:SC,morphcolor_vertex:EC,morphnormal_vertex:MC,morphtarget_pars_vertex:wC,morphtarget_vertex:TC,normal_fragment_begin:AC,normal_fragment_maps:CC,normal_pars_fragment:bC,normal_pars_vertex:RC,normal_vertex:PC,normalmap_pars_fragment:NC,clearcoat_normal_fragment_begin:LC,clearcoat_normal_fragment_maps:DC,clearcoat_pars_fragment:IC,iridescence_pars_fragment:UC,opaque_fragment:OC,packing:FC,premultiplied_alpha_fragment:kC,project_vertex:zC,dithering_fragment:BC,dithering_pars_fragment:VC,roughnessmap_fragment:HC,roughnessmap_pars_fragment:GC,shadowmap_pars_fragment:WC,shadowmap_pars_vertex:jC,shadowmap_vertex:XC,shadowmask_pars_fragment:$C,skinbase_vertex:YC,skinning_pars_vertex:qC,skinning_vertex:KC,skinnormal_vertex:ZC,specularmap_fragment:JC,specularmap_pars_fragment:QC,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ob,worldpos_vertex:ab,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:fb,cube_vert:db,cube_frag:hb,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:vb,equirect_vert:xb,equirect_frag:_b,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:Eb,meshbasic_frag:Mb,meshlambert_vert:wb,meshlambert_frag:Tb,meshmatcap_vert:Ab,meshmatcap_frag:Cb,meshnormal_vert:bb,meshnormal_frag:Rb,meshphong_vert:Pb,meshphong_frag:Nb,meshphysical_vert:Lb,meshphysical_frag:Db,meshtoon_vert:Ib,meshtoon_frag:Ub,points_vert:Ob,points_frag:Fb,shadow_vert:kb,shadow_frag:zb,sprite_vert:Bb,sprite_frag:Vb},Be={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ai={basic:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:bn([Be.points,Be.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:bn([Be.common,Be.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:bn([Be.sprite,Be.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:bn([Be.common,Be.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:bn([Be.lights,Be.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ai.physical={uniforms:bn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const mc={r:0,b:0,g:0},fs=new or,Hb=new en;function Gb(i,e,t,r,o,a,c){const u=new Ot(0);let h=a===!0?0:1,d,m,g=null,v=0,y=null;function E(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function M(C){let T=!1;const U=E(C);U===null?S(u,h):U&&U.isColor&&(S(U,1),T=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(C,T){const U=E(T);U&&(U.isCubeTexture||U.mapping===Xc)?(m===void 0&&(m=new Pi(new Oa(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:So(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),fs.copy(T.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(fs)),m.material.toneMapped=Pt.getTransfer(U.colorSpace)!==Ut,(g!==U||v!==U.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,g=U,v=U.version,y=i.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new Pi(new qc(2,2),new Wr({name:"BackgroundMaterial",uniforms:So(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=Pt.getTransfer(U.colorSpace)!==Ut,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,g=U,v=U.version,y=i.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function S(C,T){C.getRGB(mc,Zx(i)),r.buffers.color.setClear(mc.r,mc.g,mc.b,T,c)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,T=1){u.set(C),h=T,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,S(u,h)},render:M,addToRenderList:x,dispose:N}}function Wb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=v(null);let a=o,c=!1;function u(b,V,X,J,q){let Q=!1;const ee=g(J,X,V);a!==ee&&(a=ee,d(a.object)),Q=y(b,J,X,q),Q&&E(b,J,X,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,T(b,V,X,J),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function h(){return i.createVertexArray()}function d(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function g(b,V,X){const J=X.wireframe===!0;let q=r[b.id];q===void 0&&(q={},r[b.id]=q);let Q=q[V.id];Q===void 0&&(Q={},q[V.id]=Q);let ee=Q[J];return ee===void 0&&(ee=v(h()),Q[J]=ee),ee}function v(b){const V=[],X=[],J=[];for(let q=0;q<t;q++)V[q]=0,X[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:J,object:b,attributes:{},index:null}}function y(b,V,X,J){const q=a.attributes,Q=V.attributes;let ee=0;const ie=X.getAttributes();for(const z in ie)if(ie[z].location>=0){const oe=q[z];let F=Q[z];if(F===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;ee++}return a.attributesNum!==ee||a.index!==J}function E(b,V,X,J){const q={},Q=V.attributes;let ee=0;const ie=X.getAttributes();for(const z in ie)if(ie[z].location>=0){let oe=Q[z];oe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),q[z]=F,ee++}a.attributes=q,a.attributesNum=ee,a.index=J}function M(){const b=a.newAttributes;for(let V=0,X=b.length;V<X;V++)b[V]=0}function x(b){S(b,0)}function S(b,V){const X=a.newAttributes,J=a.enabledAttributes,q=a.attributeDivisors;X[b]=1,J[b]===0&&(i.enableVertexAttribArray(b),J[b]=1),q[b]!==V&&(i.vertexAttribDivisor(b,V),q[b]=V)}function N(){const b=a.newAttributes,V=a.enabledAttributes;for(let X=0,J=V.length;X<J;X++)V[X]!==b[X]&&(i.disableVertexAttribArray(X),V[X]=0)}function C(b,V,X,J,q,Q,ee){ee===!0?i.vertexAttribIPointer(b,V,X,q,Q):i.vertexAttribPointer(b,V,X,J,q,Q)}function T(b,V,X,J){M();const q=J.attributes,Q=X.getAttributes(),ee=V.defaultAttributeValues;for(const ie in Q){const z=Q[ie];if(z.location>=0){let re=q[ie];if(re===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const oe=re.normalized,F=re.itemSize,ae=e.get(re);if(ae===void 0)continue;const Oe=ae.buffer,He=ae.type,$e=ae.bytesPerElement,le=He===i.INT||He===i.UNSIGNED_INT||re.gpuType===Hh;if(re.isInterleavedBufferAttribute){const pe=re.data,we=pe.stride,Ue=re.offset;if(pe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)S(z.location+Fe,pe.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)x(z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Fe=0;Fe<z.locationSize;Fe++)C(z.location+Fe,F/z.locationSize,He,oe,we*$e,(Ue+F/z.locationSize*Fe)*$e,le)}else{if(re.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)S(z.location+pe,re.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let pe=0;pe<z.locationSize;pe++)x(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let pe=0;pe<z.locationSize;pe++)C(z.location+pe,F/z.locationSize,He,oe,F*$e,F/z.locationSize*pe*$e,le)}}else if(ee!==void 0){const oe=ee[ie];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(z.location,oe);break;case 3:i.vertexAttrib3fv(z.location,oe);break;case 4:i.vertexAttrib4fv(z.location,oe);break;default:i.vertexAttrib1fv(z.location,oe)}}}}N()}function U(){G();for(const b in r){const V=r[b];for(const X in V){const J=V[X];for(const q in J)m(J[q].object),delete J[q];delete V[X]}delete r[b]}}function O(b){if(r[b.id]===void 0)return;const V=r[b.id];for(const X in V){const J=V[X];for(const q in J)m(J[q].object),delete J[q];delete V[X]}delete r[b.id]}function I(b){for(const V in r){const X=r[V];if(X[b.id]===void 0)continue;const J=X[b.id];for(const q in J)m(J[q].object),delete J[q];delete X[b.id]}}function G(){P(),c=!0,a!==o&&(a=o,d(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:G,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:N}}function jb(i,e,t){let r;function o(d){r=d}function a(d,m){i.drawArrays(r,d,m),t.update(m,r,1)}function c(d,m,g){g!==0&&(i.drawArraysInstanced(r,d,m,g),t.update(m,r,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,g);let y=0;for(let E=0;E<g;E++)y+=m[E];t.update(y,r,1)}function h(d,m,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],m[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];t.update(E,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xb(i,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(I){return!(I!==vi&&r.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const G=I===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==sr&&r.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==er&&!G)}function h(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:N,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:U,maxSamples:O}}function $b(i){const e=this;let t=null,r=0,o=!1,a=!1;const c=new hs,u=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||o;return o=v,r=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,S=i.get(g);if(!o||E===null||E.length===0||a&&!x)a?m(null):d();else{const N=a?0:r,C=N*4;let T=S.clippingState||null;h.value=T,T=m(E,v,C,y);for(let U=0;U!==C;++U)T[U]=t[U];S.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,y,E){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=h.value,E!==!0||x===null){const S=y+M*4,N=v.matrixWorldInverse;u.getNormalMatrix(N),(x===null||x.length<S)&&(x=new Float32Array(S));for(let C=0,T=y;C!==M;++C,T+=4)c.copy(g[C]).applyMatrix4(N,u),c.normal.toArray(x,T),x[T+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function Yb(i){let e=new WeakMap;function t(c,u){return u===Bd?c.mapping=xo:u===Vd&&(c.mapping=_o),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===Bd||u===Vd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new x1(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",o),t(d.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}const co=4,Dv=[.125,.215,.35,.446,.526,.582],gs=20,gd=new sA,Iv=new Ot;let vd=null,xd=0,_d=0,yd=!1;const ps=(1+Math.sqrt(5))/2,ao=1/ps,Uv=[new ne(-ps,ao,0),new ne(ps,ao,0),new ne(-ao,0,ps),new ne(ao,0,ps),new ne(0,ps,-ao),new ne(0,ps,ao),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],qb=new ne;class Ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=qb}=a;vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,xd,_d),this._renderer.xr.enabled=yd,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Da,format:vi,colorSpace:yo,depthBuffer:!1},o=Fv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fv(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kb(a)),this._blurMaterial=Zb(a,e,t)}return o}_compileMaterial(e){const t=new Pi(this._lodPlanes[0],e);this._renderer.compile(t,gd)}_sceneToCubeUV(e,t,r,o,a){const h=new si(90,1,t,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Iv),g.toneMapping=kr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const M=new Yc({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),x=new Pi(new Oa,M);let S=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,S=!0):(M.color.copy(Iv),S=!0);for(let C=0;C<6;C++){const T=C%3;T===0?(h.up.set(0,d[C],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[C],a.y,a.z)):T===1?(h.up.set(0,0,d[C]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[C],a.z)):(h.up.set(0,d[C],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[C]));const U=this._cubeSize;gc(o,T*U,C>2?U:0,U,U),g.setRenderTarget(o),S&&g.render(x,h),g.render(e,h)}x.geometry.dispose(),x.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===xo||e.mapping===_o;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Pi(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;gc(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,gd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Uv[(o-a-1)%Uv.length];this._blur(e,a-1,a,c,u)}t.autoClear=r}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Pi(this._lodPlanes[o],d),v=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*gs-1),M=a/E,x=isFinite(a)?1+Math.floor(m*M):gs;x>gs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gs}`);const S=[];let N=0;for(let I=0;I<gs;++I){const G=I/M,P=Math.exp(-G*G/2);S.push(P),I===0?N+=P:I<x&&(N+=2*P)}for(let I=0;I<S.length;I++)S[I]=S[I]/N;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-r;const T=this._sizeLods[o],U=3*T*(o>C-co?o-C+co:0),O=4*(this._cubeSize-T);gc(t,U,O,3*T,2*T),h.setRenderTarget(t),h.render(g,gd)}}function Kb(i){const e=[],t=[],r=[];let o=i;const a=i-co+1+Dv.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let h=1/u;c>i-co?h=Dv[c-i+co-1]:c===0&&(h=0),r.push(h);const d=1/(u-2),m=-d,g=1+d,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,E=6,M=3,x=2,S=1,N=new Float32Array(M*E*y),C=new Float32Array(x*E*y),T=new Float32Array(S*E*y);for(let O=0;O<y;O++){const I=O%3*2/3-1,G=O>2?0:-1,P=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];N.set(P,M*E*O),C.set(v,x*E*O);const b=[O,O,O,O,O,O];T.set(b,S*E*O)}const U=new jr;U.setAttribute("position",new Li(N,M)),U.setAttribute("uv",new Li(C,x)),U.setAttribute("faceIndex",new Li(T,S)),e.push(U),o>co&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Fv(i,e,t){const r=new Ss(i,e,t);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gc(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function Zb(i,e,t){const r=new Float32Array(gs),o=new ne(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function kv(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function zv(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function Jb(i){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const h=u.mapping,d=h===Bd||h===Vd,m=h===xo||h===_o;if(d||m){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new Ov(i)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return d&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new Ov(i)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function o(u){let h=0;const d=6;for(let m=0;m<d;m++)u[m]!==void 0&&h++;return h===d}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function Qb(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ca("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function eR(i,e,t,r){const o={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const y in v)e.update(v[y],i.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const N=y.array;M=y.version;for(let C=0,T=N.length;C<T;C+=3){const U=N[C+0],O=N[C+1],I=N[C+2];v.push(U,O,O,I,I,U)}}else if(E!==void 0){const N=E.array;M=E.version;for(let C=0,T=N.length/3-1;C<T;C+=3){const U=C+0,O=C+1,I=C+2;v.push(U,O,O,I,I,U)}}else return;const x=new(jx(v)?Kx:qx)(v,1);x.version=M;const S=a.get(g);S&&e.remove(S),a.set(g,x)}function m(g){const v=a.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:h,getWireframeAttribute:m}}function tR(i,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function h(v,y){i.drawElements(r,y,a,v*c),t.update(y,r,1)}function d(v,y,E){E!==0&&(i.drawElementsInstanced(r,y,a,v*c,E),t.update(y,r,E))}function m(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,a,v,0,E);let x=0;for(let S=0;S<E;S++)x+=y[S];t.update(x,r,1)}function g(v,y,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)d(v[S]/c,y[S],M[S]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,a,v,0,M,0,E);let S=0;for(let N=0;N<E;N++)S+=y[N]*M[N];t.update(S,r,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function nR(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function iR(i,e,t){const r=new WeakMap,o=new Zt;function a(c,u,h){const d=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let b=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let T=0;E===!0&&(T=1),M===!0&&(T=2),x===!0&&(T=3);let U=u.attributes.position.count*T,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*O*4*g),G=new Xx(I,U,O,g);G.type=er,G.needsUpdate=!0;const P=T*4;for(let V=0;V<g;V++){const X=S[V],J=N[V],q=C[V],Q=U*O*4*V;for(let ee=0;ee<X.count;ee++){const ie=ee*P;E===!0&&(o.fromBufferAttribute(X,ee),I[Q+ie+0]=o.x,I[Q+ie+1]=o.y,I[Q+ie+2]=o.z,I[Q+ie+3]=0),M===!0&&(o.fromBufferAttribute(J,ee),I[Q+ie+4]=o.x,I[Q+ie+5]=o.y,I[Q+ie+6]=o.z,I[Q+ie+7]=0),x===!0&&(o.fromBufferAttribute(q,ee),I[Q+ie+8]=o.x,I[Q+ie+9]=o.y,I[Q+ie+10]=o.z,I[Q+ie+11]=q.itemSize===4?o.w:1)}}v={count:g,texture:G,size:new Xe(U,O)},r.set(u,v),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const M=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function rR(i,e,t,r){let o=new WeakMap;function a(h){const d=r.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),o.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function c(){o=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const h_=new Fn,Bv=new t_(1,1),p_=new Xx,m_=new e1,g_=new Qx,Vv=[],Hv=[],Gv=new Float32Array(16),Wv=new Float32Array(9),jv=new Float32Array(4);function bo(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let a=Vv[o];if(a===void 0&&(a=new Float32Array(o),Vv[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(a,u)}return a}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Kc(i,e){let t=Hv[e];t===void 0&&(t=new Int32Array(e),Hv[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function sR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function aR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function lR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function cR(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;jv.set(r),i.uniformMatrix2fv(this.addr,!1,jv),an(t,r)}}function uR(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;Wv.set(r),i.uniformMatrix3fv(this.addr,!1,Wv),an(t,r)}}function fR(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;Gv.set(r),i.uniformMatrix4fv(this.addr,!1,Gv),an(t,r)}}function dR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function pR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function mR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function gR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function xR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function _R(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function yR(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(Bv.compareFunction=Wx,a=Bv):a=h_,t.setTexture2D(e||a,o)}function SR(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||m_,o)}function ER(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||g_,o)}function MR(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||p_,o)}function wR(i){switch(i){case 5126:return sR;case 35664:return oR;case 35665:return aR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return vR;case 36295:return xR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return MR}}function TR(i,e){i.uniform1fv(this.addr,e)}function AR(i,e){const t=bo(e,this.size,2);i.uniform2fv(this.addr,t)}function CR(i,e){const t=bo(e,this.size,3);i.uniform3fv(this.addr,t)}function bR(i,e){const t=bo(e,this.size,4);i.uniform4fv(this.addr,t)}function RR(i,e){const t=bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function PR(i,e){const t=bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function NR(i,e){const t=bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function LR(i,e){i.uniform1iv(this.addr,e)}function DR(i,e){i.uniform2iv(this.addr,e)}function IR(i,e){i.uniform3iv(this.addr,e)}function UR(i,e){i.uniform4iv(this.addr,e)}function OR(i,e){i.uniform1uiv(this.addr,e)}function FR(i,e){i.uniform2uiv(this.addr,e)}function kR(i,e){i.uniform3uiv(this.addr,e)}function zR(i,e){i.uniform4uiv(this.addr,e)}function BR(i,e,t){const r=this.cache,o=e.length,a=Kc(t,o);on(r,a)||(i.uniform1iv(this.addr,a),an(r,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||h_,a[c])}function VR(i,e,t){const r=this.cache,o=e.length,a=Kc(t,o);on(r,a)||(i.uniform1iv(this.addr,a),an(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||m_,a[c])}function HR(i,e,t){const r=this.cache,o=e.length,a=Kc(t,o);on(r,a)||(i.uniform1iv(this.addr,a),an(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||g_,a[c])}function GR(i,e,t){const r=this.cache,o=e.length,a=Kc(t,o);on(r,a)||(i.uniform1iv(this.addr,a),an(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||p_,a[c])}function WR(i){switch(i){case 5126:return TR;case 35664:return AR;case 35665:return CR;case 35666:return bR;case 35674:return RR;case 35675:return PR;case 35676:return NR;case 5124:case 35670:return LR;case 35667:case 35671:return DR;case 35668:case 35672:return IR;case 35669:case 35673:return UR;case 5125:return OR;case 36294:return FR;case 36295:return kR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}class jR{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=wR(t.type)}}class XR{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WR(t.type)}}class $R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Xv(i,e){i.seq.push(e),i.map[e.id]=e}function YR(i,e,t){const r=i.name,o=r.length;for(Sd.lastIndex=0;;){const a=Sd.exec(r),c=Sd.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===o){Xv(t,d===void 0?new jR(u,i,e):new XR(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new $R(u),Xv(t,g)),t=g}}}class Tc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);YR(a,c,this)}}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function $v(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const qR=37297;let KR=0;function ZR(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const Yv=new _t;function JR(i){Pt._getMatrix(Yv,Pt.workingColorSpace,i);const e=`mat3( ${Yv.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case Lc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qv(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+ZR(i.getShaderSource(e),u)}else return a}function QR(i,e){const t=JR(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e2(i,e){let t;switch(e){case CT:t="Linear";break;case bT:t="Reinhard";break;case RT:t="Cineon";break;case PT:t="ACESFilmic";break;case LT:t="AgX";break;case DT:t="Neutral";break;case NT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vc=new ne;function t2(){Pt.getLuminanceCoefficients(vc);const i=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function i2(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function r2(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=i.getActiveAttrib(e,o),c=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function ga(i){return i!==""}function Kv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(s2,a2)}const o2=new Map;function a2(i,e){let t=yt[e];if(t===void 0){const r=o2.get(e);if(r!==void 0)t=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Eh(t)}const l2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(i){return i.replace(l2,c2)}function c2(i,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Qv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oT?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function f2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xo:case _o:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function h2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ix:e="ENVMAP_BLENDING_MULTIPLY";break;case TT:e="ENVMAP_BLENDING_MIX";break;case AT:e="ENVMAP_BLENDING_ADD";break}return e}function p2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function m2(i,e,t,r){const o=i.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=u2(t),d=f2(t),m=d2(t),g=h2(t),v=p2(t),y=n2(t),E=i2(a),M=o.createProgram();let x,S,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ga).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ga).join(`
`),S.length>0&&(S+=`
`)):(x=[Qv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),S=[Qv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?yt.tonemapping_pars_fragment:"",t.toneMapping!==kr?e2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,QR("linearToOutputTexel",t.outputColorSpace),t2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),c=Eh(c),c=Kv(c,t),c=Zv(c,t),u=Eh(u),u=Kv(u,t),u=Zv(u,t),c=Jv(c),u=Jv(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=N+x+c,T=N+S+u,U=$v(o,o.VERTEX_SHADER,C),O=$v(o,o.FRAGMENT_SHADER,T);o.attachShader(M,U),o.attachShader(M,O),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function I(V){if(i.debug.checkShaderErrors){const X=o.getProgramInfoLog(M)||"",J=o.getShaderInfoLog(U)||"",q=o.getShaderInfoLog(O)||"",Q=X.trim(),ee=J.trim(),ie=q.trim();let z=!0,re=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,M,U,O);else{const oe=qv(o,U,"vertex"),F=qv(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+oe+`
`+F)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(ee===""||ie==="")&&(re=!1);re&&(V.diagnostics={runnable:z,programLog:Q,vertexShader:{log:ee,prefix:x},fragmentShader:{log:ie,prefix:S}})}o.deleteShader(U),o.deleteShader(O),G=new Tc(o,M),P=r2(o,M)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(M,qR)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=O,this}let g2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new x2(e),t.set(e,r)),r}}class x2{constructor(e){this.id=g2++,this.code=e,this.usedTimes=0}}function _2(i,e,t,r,o,a,c){const u=new $x,h=new v2,d=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return d.add(P),P===0?"uv":`uv${P}`}function x(P,b,V,X,J){const q=X.fog,Q=J.geometry,ee=P.isMeshStandardMaterial?X.environment:null,ie=(P.isMeshStandardMaterial?t:e).get(P.envMap||ee),z=ie&&ie.mapping===Xc?ie.image.height:null,re=E[P.type];P.precision!==null&&(y=o.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const oe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,F=oe!==void 0?oe.length:0;let ae=0;Q.morphAttributes.position!==void 0&&(ae=1),Q.morphAttributes.normal!==void 0&&(ae=2),Q.morphAttributes.color!==void 0&&(ae=3);let Oe,He,$e,le;if(re){const Tt=Ai[re];Oe=Tt.vertexShader,He=Tt.fragmentShader}else Oe=P.vertexShader,He=P.fragmentShader,h.update(P),$e=h.getVertexShaderID(P),le=h.getFragmentShaderID(P);const pe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ue=J.isInstancedMesh===!0,Fe=J.isBatchedMesh===!0,vt=!!P.map,bt=!!P.matcap,B=!!ie,_e=!!P.aoMap,ve=!!P.lightMap,ge=!!P.bumpMap,me=!!P.normalMap,Ie=!!P.displacementMap,Ee=!!P.emissiveMap,Le=!!P.metalnessMap,ct=!!P.roughnessMap,dt=P.anisotropy>0,L=P.clearcoat>0,A=P.dispersion>0,Z=P.iridescence>0,de=P.sheen>0,ye=P.transmission>0,he=dt&&!!P.anisotropyMap,Qe=L&&!!P.clearcoatMap,Pe=L&&!!P.clearcoatNormalMap,Ye=L&&!!P.clearcoatRoughnessMap,et=Z&&!!P.iridescenceMap,Ae=Z&&!!P.iridescenceThicknessMap,Ve=de&&!!P.sheenColorMap,ut=de&&!!P.sheenRoughnessMap,nt=!!P.specularMap,ke=!!P.specularColorMap,gt=!!P.specularIntensityMap,j=ye&&!!P.transmissionMap,be=ye&&!!P.thicknessMap,De=!!P.gradientMap,Ge=!!P.alphaMap,Ce=P.alphaTest>0,xe=!!P.alphaHash,Je=!!P.extensions;let mt=kr;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Lt={shaderID:re,shaderType:P.type,shaderName:P.name,vertexShader:Oe,fragmentShader:He,defines:P.defines,customVertexShaderID:$e,customFragmentShaderID:le,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Fe,batchingColor:Fe&&J._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,instancingMorph:Ue&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:yo,alphaToCoverage:!!P.alphaToCoverage,map:vt,matcap:bt,envMap:B,envMapMode:B&&ie.mapping,envMapCubeUVHeight:z,aoMap:_e,lightMap:ve,bumpMap:ge,normalMap:me,displacementMap:v&&Ie,emissiveMap:Ee,normalMapObjectSpace:me&&P.normalMapType===kT,normalMapTangentSpace:me&&P.normalMapType===FT,metalnessMap:Le,roughnessMap:ct,anisotropy:dt,anisotropyMap:he,clearcoat:L,clearcoatMap:Qe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ye,dispersion:A,iridescence:Z,iridescenceMap:et,iridescenceThicknessMap:Ae,sheen:de,sheenColorMap:Ve,sheenRoughnessMap:ut,specularMap:nt,specularColorMap:ke,specularIntensityMap:gt,transmission:ye,transmissionMap:j,thicknessMap:be,gradientMap:De,opaque:P.transparent===!1&&P.blending===ho&&P.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ce,alphaHash:xe,combine:P.combine,mapUv:vt&&M(P.map.channel),aoMapUv:_e&&M(P.aoMap.channel),lightMapUv:ve&&M(P.lightMap.channel),bumpMapUv:ge&&M(P.bumpMap.channel),normalMapUv:me&&M(P.normalMap.channel),displacementMapUv:Ie&&M(P.displacementMap.channel),emissiveMapUv:Ee&&M(P.emissiveMap.channel),metalnessMapUv:Le&&M(P.metalnessMap.channel),roughnessMapUv:ct&&M(P.roughnessMap.channel),anisotropyMapUv:he&&M(P.anisotropyMap.channel),clearcoatMapUv:Qe&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:ut&&M(P.sheenRoughnessMap.channel),specularMapUv:nt&&M(P.specularMap.channel),specularColorMapUv:ke&&M(P.specularColorMap.channel),specularIntensityMapUv:gt&&M(P.specularIntensityMap.channel),transmissionMapUv:j&&M(P.transmissionMap.channel),thicknessMapUv:be&&M(P.thicknessMap.channel),alphaMapUv:Ge&&M(P.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(me||dt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Q.attributes.uv&&(vt||Ge),fog:!!q,useFog:P.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:we,skinning:J.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:vt&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ee&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Qi,flipSided:P.side===On,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Je&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&P.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function S(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)b.push(V),b.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(N(b,P),C(b,P),b.push(i.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function N(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function C(P,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),b.gradientMap&&u.enable(22),P.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),P.push(u.mask)}function T(P){const b=E[P.type];let V;if(b){const X=Ai[b];V=p1.clone(X.uniforms)}else V=P.uniforms;return V}function U(P,b){let V;for(let X=0,J=m.length;X<J;X++){const q=m[X];if(q.cacheKey===b){V=q,++V.usedTimes;break}}return V===void 0&&(V=new m2(i,b,P,a),m.push(V)),V}function O(P){if(--P.usedTimes===0){const b=m.indexOf(P);m[b]=m[m.length-1],m.pop(),P.destroy()}}function I(P){h.remove(P)}function G(){h.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:T,acquireProgram:U,releaseProgram:O,releaseShaderCache:I,programs:m,dispose:G}}function y2(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function r(c){i.delete(c)}function o(c,u,h){i.get(c)[u]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function S2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function e0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function t0(){const i=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g,v,y,E,M,x){let S=i[e];return S===void 0?(S={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:x},i[e]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=y,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=M,S.group=x),e++,S}function u(g,v,y,E,M,x){const S=c(g,v,y,E,M,x);y.transmission>0?r.push(S):y.transparent===!0?o.push(S):t.push(S)}function h(g,v,y,E,M,x){const S=c(g,v,y,E,M,x);y.transmission>0?r.unshift(S):y.transparent===!0?o.unshift(S):t.unshift(S)}function d(g,v){t.length>1&&t.sort(g||S2),r.length>1&&r.sort(v||e0),o.length>1&&o.sort(v||e0)}function m(){for(let g=e,v=i.length;g<v;g++){const y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:u,unshift:h,finish:m,sort:d}}function E2(){let i=new WeakMap;function e(r,o){const a=i.get(r);let c;return a===void 0?(c=new t0,i.set(r,[c])):o>=a.length?(c=new t0,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function M2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Ot};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function w2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let T2=0;function A2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C2(i){const e=new M2,t=w2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ne);const o=new ne,a=new en,c=new en;function u(d){let m=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,E=0,M=0,x=0,S=0,N=0,C=0,T=0,U=0,O=0,I=0;d.sort(A2);for(let P=0,b=d.length;P<b;P++){const V=d[P],X=V.color,J=V.intensity,q=V.distance,Q=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=X.r*J,g+=X.g*J,v+=X.b*J;else if(V.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(V.sh.coefficients[ee],J);I++}else if(V.isDirectionalLight){const ee=e.get(V);if(ee.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ie=V.shadow,z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=V.shadow.matrix,N++}r.directional[y]=ee,y++}else if(V.isSpotLight){const ee=e.get(V);ee.position.setFromMatrixPosition(V.matrixWorld),ee.color.copy(X).multiplyScalar(J),ee.distance=q,ee.coneCos=Math.cos(V.angle),ee.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ee.decay=V.decay,r.spot[M]=ee;const ie=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,ie.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[M]=ie.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,r.spotShadow[M]=z,r.spotShadowMap[M]=Q,T++}M++}else if(V.isRectAreaLight){const ee=e.get(V);ee.color.copy(X).multiplyScalar(J),ee.halfWidth.set(V.width*.5,0,0),ee.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=ee,x++}else if(V.isPointLight){const ee=e.get(V);if(ee.color.copy(V.color).multiplyScalar(V.intensity),ee.distance=V.distance,ee.decay=V.decay,V.castShadow){const ie=V.shadow,z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,z.shadowCameraNear=ie.camera.near,z.shadowCameraFar=ie.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=Q,r.pointShadowMatrix[E]=V.shadow.matrix,C++}r.point[E]=ee,E++}else if(V.isHemisphereLight){const ee=e.get(V);ee.skyColor.copy(V.color).multiplyScalar(J),ee.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[S]=ee,S++}}x>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==M||G.rectAreaLength!==x||G.hemiLength!==S||G.numDirectionalShadows!==N||G.numPointShadows!==C||G.numSpotShadows!==T||G.numSpotMaps!==U||G.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=T+U-O,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,G.directionalLength=y,G.pointLength=E,G.spotLength=M,G.rectAreaLength=x,G.hemiLength=S,G.numDirectionalShadows=N,G.numPointShadows=C,G.numSpotShadows=T,G.numSpotMaps=U,G.numLightProbes=I,r.version=T2++)}function h(d,m){let g=0,v=0,y=0,E=0,M=0;const x=m.matrixWorldInverse;for(let S=0,N=d.length;S<N;S++){const C=d[S];if(C.isDirectionalLight){const T=r.directional[g];T.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(x),g++}else if(C.isSpotLight){const T=r.spot[y];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(x),y++}else if(C.isRectAreaLight){const T=r.rectArea[E];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(x),c.identity(),a.copy(C.matrixWorld),a.premultiply(x),c.extractRotation(a),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),E++}else if(C.isPointLight){const T=r.point[v];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(x),v++}else if(C.isHemisphereLight){const T=r.hemi[M];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(x),M++}}}return{setup:u,setupView:h,state:r}}function n0(i){const e=new C2(i),t=[],r=[];function o(m){d.camera=m,t.length=0,r.length=0}function a(m){t.push(m)}function c(m){r.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function b2(i){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new n0(i),e.set(o,[u])):a>=c.length?(u=new n0(i),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const R2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
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
}`;function N2(i,e,t){let r=new e_;const o=new Xe,a=new Xe,c=new Zt,u=new iA({depthPacking:OT}),h=new rA,d={},m=t.maxTextureSize,g={[Gr]:On,[On]:Gr,[Qi]:Qi},v=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:R2,fragmentShader:P2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new jr;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Pi(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dx;let S=this.type;this.render=function(O,I,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const P=i.getRenderTarget(),b=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Fr),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=S!==Ji&&this.type===Ji,q=S===Ji&&this.type!==Ji;for(let Q=0,ee=O.length;Q<ee;Q++){const ie=O[Q],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const re=z.getFrameExtents();if(o.multiply(re),a.copy(z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/re.x),o.x=a.x*re.x,z.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/re.y),o.y=a.y*re.y,z.mapSize.y=a.y)),z.map===null||J===!0||q===!0){const F=this.type!==Ji?{minFilter:xi,magFilter:xi}:{};z.map!==null&&z.map.dispose(),z.map=new Ss(o.x,o.y,F),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const oe=z.getViewportCount();for(let F=0;F<oe;F++){const ae=z.getViewport(F);c.set(a.x*ae.x,a.y*ae.y,a.x*ae.z,a.y*ae.w),X.viewport(c),z.updateMatrices(ie,F),r=z.getFrustum(),T(I,G,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===Ji&&N(z,G),z.needsUpdate=!1}S=this.type,x.needsUpdate=!1,i.setRenderTarget(P,b,V)};function N(O,I){const G=e.update(M);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ss(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(I,null,G,v,M,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(I,null,G,y,M,null)}function C(O,I,G,P){let b=null;const V=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)b=V;else if(b=G.isPointLight===!0?h:u,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=b.uuid,J=I.uuid;let q=d[X];q===void 0&&(q={},d[X]=q);let Q=q[J];Q===void 0&&(Q=b.clone(),q[J]=Q,I.addEventListener("dispose",U)),b=Q}if(b.visible=I.visible,b.wireframe=I.wireframe,P===Ji?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:g[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=i.properties.get(b);X.light=G}return b}function T(O,I,G,P,b){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&b===Ji)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const J=e.update(O),q=O.material;if(Array.isArray(q)){const Q=J.groups;for(let ee=0,ie=Q.length;ee<ie;ee++){const z=Q[ee],re=q[z.materialIndex];if(re&&re.visible){const oe=C(O,re,P,b);O.onBeforeShadow(i,O,I,G,J,oe,z),i.renderBufferDirect(G,null,J,oe,O,z),O.onAfterShadow(i,O,I,G,J,oe,z)}}}else if(q.visible){const Q=C(O,q,P,b);O.onBeforeShadow(i,O,I,G,J,Q,null),i.renderBufferDirect(G,null,J,Q,O,null),O.onAfterShadow(i,O,I,G,J,Q,null)}}const X=O.children;for(let J=0,q=X.length;J<q;J++)T(X[J],I,G,P,b)}function U(O){O.target.removeEventListener("dispose",U);for(const G in d){const P=d[G],b=O.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const L2={[Dd]:Id,[Ud]:kd,[Od]:zd,[vo]:Fd,[Id]:Dd,[kd]:Ud,[zd]:Od,[Fd]:vo};function D2(i,e){function t(){let j=!1;const be=new Zt;let De=null;const Ge=new Zt(0,0,0,0);return{setMask:function(Ce){De!==Ce&&!j&&(i.colorMask(Ce,Ce,Ce,Ce),De=Ce)},setLocked:function(Ce){j=Ce},setClear:function(Ce,xe,Je,mt,Lt){Lt===!0&&(Ce*=mt,xe*=mt,Je*=mt),be.set(Ce,xe,Je,mt),Ge.equals(be)===!1&&(i.clearColor(Ce,xe,Je,mt),Ge.copy(be))},reset:function(){j=!1,De=null,Ge.set(-1,0,0,0)}}}function r(){let j=!1,be=!1,De=null,Ge=null,Ce=null;return{setReversed:function(xe){if(be!==xe){const Je=e.get("EXT_clip_control");xe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),be=xe;const mt=Ce;Ce=null,this.setClear(mt)}},getReversed:function(){return be},setTest:function(xe){xe?pe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(xe){De!==xe&&!j&&(i.depthMask(xe),De=xe)},setFunc:function(xe){if(be&&(xe=L2[xe]),Ge!==xe){switch(xe){case Dd:i.depthFunc(i.NEVER);break;case Id:i.depthFunc(i.ALWAYS);break;case Ud:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case Od:i.depthFunc(i.EQUAL);break;case Fd:i.depthFunc(i.GEQUAL);break;case kd:i.depthFunc(i.GREATER);break;case zd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ge=xe}},setLocked:function(xe){j=xe},setClear:function(xe){Ce!==xe&&(be&&(xe=1-xe),i.clearDepth(xe),Ce=xe)},reset:function(){j=!1,De=null,Ge=null,Ce=null,be=!1}}}function o(){let j=!1,be=null,De=null,Ge=null,Ce=null,xe=null,Je=null,mt=null,Lt=null;return{setTest:function(Tt){j||(Tt?pe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Tt){be!==Tt&&!j&&(i.stencilMask(Tt),be=Tt)},setFunc:function(Tt,Kn,pn){(De!==Tt||Ge!==Kn||Ce!==pn)&&(i.stencilFunc(Tt,Kn,pn),De=Tt,Ge=Kn,Ce=pn)},setOp:function(Tt,Kn,pn){(xe!==Tt||Je!==Kn||mt!==pn)&&(i.stencilOp(Tt,Kn,pn),xe=Tt,Je=Kn,mt=pn)},setLocked:function(Tt){j=Tt},setClear:function(Tt){Lt!==Tt&&(i.clearStencil(Tt),Lt=Tt)},reset:function(){j=!1,be=null,De=null,Ge=null,Ce=null,xe=null,Je=null,mt=null,Lt=null}}}const a=new t,c=new r,u=new o,h=new WeakMap,d=new WeakMap;let m={},g={},v=new WeakMap,y=[],E=null,M=!1,x=null,S=null,N=null,C=null,T=null,U=null,O=null,I=new Ot(0,0,0),G=0,P=!1,b=null,V=null,X=null,J=null,q=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ie=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(z)[1]),ee=ie>=1):z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ee=ie>=2);let re=null,oe={};const F=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Oe=new Zt().fromArray(F),He=new Zt().fromArray(ae);function $e(j,be,De,Ge){const Ce=new Uint8Array(4),xe=i.createTexture();i.bindTexture(j,xe),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<De;Je++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Ge,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(be+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return xe}const le={};le[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(i.DEPTH_TEST),c.setFunc(vo),ge(!1),me(iv),pe(i.CULL_FACE),_e(Fr);function pe(j){m[j]!==!0&&(i.enable(j),m[j]=!0)}function we(j){m[j]!==!1&&(i.disable(j),m[j]=!1)}function Ue(j,be){return g[j]!==be?(i.bindFramebuffer(j,be),g[j]=be,j===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=be),j===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Fe(j,be){let De=y,Ge=!1;if(j){De=v.get(be),De===void 0&&(De=[],v.set(be,De));const Ce=j.textures;if(De.length!==Ce.length||De[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Je=Ce.length;xe<Je;xe++)De[xe]=i.COLOR_ATTACHMENT0+xe;De.length=Ce.length,Ge=!0}}else De[0]!==i.BACK&&(De[0]=i.BACK,Ge=!0);Ge&&i.drawBuffers(De)}function vt(j){return E!==j?(i.useProgram(j),E=j,!0):!1}const bt={[ms]:i.FUNC_ADD,[lT]:i.FUNC_SUBTRACT,[cT]:i.FUNC_REVERSE_SUBTRACT};bt[uT]=i.MIN,bt[fT]=i.MAX;const B={[dT]:i.ZERO,[hT]:i.ONE,[pT]:i.SRC_COLOR,[Nd]:i.SRC_ALPHA,[yT]:i.SRC_ALPHA_SATURATE,[xT]:i.DST_COLOR,[gT]:i.DST_ALPHA,[mT]:i.ONE_MINUS_SRC_COLOR,[Ld]:i.ONE_MINUS_SRC_ALPHA,[_T]:i.ONE_MINUS_DST_COLOR,[vT]:i.ONE_MINUS_DST_ALPHA,[ST]:i.CONSTANT_COLOR,[ET]:i.ONE_MINUS_CONSTANT_COLOR,[MT]:i.CONSTANT_ALPHA,[wT]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(j,be,De,Ge,Ce,xe,Je,mt,Lt,Tt){if(j===Fr){M===!0&&(we(i.BLEND),M=!1);return}if(M===!1&&(pe(i.BLEND),M=!0),j!==aT){if(j!==x||Tt!==P){if((S!==ms||T!==ms)&&(i.blendEquation(i.FUNC_ADD),S=ms,T=ms),Tt)switch(j){case ho:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rv:i.blendFunc(i.ONE,i.ONE);break;case sv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ov:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rv:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}N=null,C=null,U=null,O=null,I.set(0,0,0),G=0,x=j,P=Tt}return}Ce=Ce||be,xe=xe||De,Je=Je||Ge,(be!==S||Ce!==T)&&(i.blendEquationSeparate(bt[be],bt[Ce]),S=be,T=Ce),(De!==N||Ge!==C||xe!==U||Je!==O)&&(i.blendFuncSeparate(B[De],B[Ge],B[xe],B[Je]),N=De,C=Ge,U=xe,O=Je),(mt.equals(I)===!1||Lt!==G)&&(i.blendColor(mt.r,mt.g,mt.b,Lt),I.copy(mt),G=Lt),x=j,P=!1}function ve(j,be){j.side===Qi?we(i.CULL_FACE):pe(i.CULL_FACE);let De=j.side===On;be&&(De=!De),ge(De),j.blending===ho&&j.transparent===!1?_e(Fr):_e(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),a.setMask(j.colorWrite);const Ge=j.stencilWrite;u.setTest(Ge),Ge&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ee(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(j){b!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),b=j)}function me(j){j!==rT?(pe(i.CULL_FACE),j!==V&&(j===iv?i.cullFace(i.BACK):j===sT?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),V=j}function Ie(j){j!==X&&(ee&&i.lineWidth(j),X=j)}function Ee(j,be,De){j?(pe(i.POLYGON_OFFSET_FILL),(J!==be||q!==De)&&(i.polygonOffset(be,De),J=be,q=De)):we(i.POLYGON_OFFSET_FILL)}function Le(j){j?pe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function ct(j){j===void 0&&(j=i.TEXTURE0+Q-1),re!==j&&(i.activeTexture(j),re=j)}function dt(j,be,De){De===void 0&&(re===null?De=i.TEXTURE0+Q-1:De=re);let Ge=oe[De];Ge===void 0&&(Ge={type:void 0,texture:void 0},oe[De]=Ge),(Ge.type!==j||Ge.texture!==be)&&(re!==De&&(i.activeTexture(De),re=De),i.bindTexture(j,be||le[j]),Ge.type=j,Ge.texture=be)}function L(){const j=oe[re];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(j){Oe.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Oe.copy(j))}function ut(j){He.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),He.copy(j))}function nt(j,be){let De=d.get(be);De===void 0&&(De=new WeakMap,d.set(be,De));let Ge=De.get(j);Ge===void 0&&(Ge=i.getUniformBlockIndex(be,j.name),De.set(j,Ge))}function ke(j,be){const Ge=d.get(be).get(j);h.get(be)!==Ge&&(i.uniformBlockBinding(be,Ge,j.__bindingPointIndex),h.set(be,Ge))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},re=null,oe={},g={},v=new WeakMap,y=[],E=null,M=!1,x=null,S=null,N=null,C=null,T=null,U=null,O=null,I=new Ot(0,0,0),G=0,P=!1,b=null,V=null,X=null,J=null,q=null,Oe.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:pe,disable:we,bindFramebuffer:Ue,drawBuffers:Fe,useProgram:vt,setBlending:_e,setMaterial:ve,setFlipSided:ge,setCullFace:me,setLineWidth:Ie,setPolygonOffset:Ee,setScissorTest:Le,activeTexture:ct,bindTexture:dt,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:Z,texImage2D:et,texImage3D:Ae,updateUBOMapping:nt,uniformBlockBinding:ke,texStorage2D:Pe,texStorage3D:Ye,texSubImage2D:de,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Qe,scissor:Ve,viewport:ut,reset:gt}}function I2(i,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return y?new OffscreenCanvas(L,A):Ic("canvas")}function M(L,A,Z){let de=1;const ye=dt(L);if((ye.width>Z||ye.height>Z)&&(de=Z/Math.max(ye.width,ye.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(de*ye.width),Qe=Math.floor(de*ye.height);g===void 0&&(g=E(he,Qe));const Pe=A?E(he,Qe):g;return Pe.width=he,Pe.height=Qe,Pe.getContext("2d").drawImage(L,0,0,he,Qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Qe+")."),Pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function x(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(L,A,Z,de,ye=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=A;if(A===i.RED&&(Z===i.FLOAT&&(he=i.R32F),Z===i.HALF_FLOAT&&(he=i.R16F),Z===i.UNSIGNED_BYTE&&(he=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(he=i.R8UI),Z===i.UNSIGNED_SHORT&&(he=i.R16UI),Z===i.UNSIGNED_INT&&(he=i.R32UI),Z===i.BYTE&&(he=i.R8I),Z===i.SHORT&&(he=i.R16I),Z===i.INT&&(he=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(he=i.RG32F),Z===i.HALF_FLOAT&&(he=i.RG16F),Z===i.UNSIGNED_BYTE&&(he=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(he=i.RG8UI),Z===i.UNSIGNED_SHORT&&(he=i.RG16UI),Z===i.UNSIGNED_INT&&(he=i.RG32UI),Z===i.BYTE&&(he=i.RG8I),Z===i.SHORT&&(he=i.RG16I),Z===i.INT&&(he=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(he=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(he=i.RGB16UI),Z===i.UNSIGNED_INT&&(he=i.RGB32UI),Z===i.BYTE&&(he=i.RGB8I),Z===i.SHORT&&(he=i.RGB16I),Z===i.INT&&(he=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),Z===i.UNSIGNED_INT&&(he=i.RGBA32UI),Z===i.BYTE&&(he=i.RGBA8I),Z===i.SHORT&&(he=i.RGBA16I),Z===i.INT&&(he=i.RGBA32I)),A===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),A===i.RGBA){const Qe=ye?Lc:Pt.getTransfer(de);Z===i.FLOAT&&(he=i.RGBA32F),Z===i.HALF_FLOAT&&(he=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(he=Qe===Ut?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(L,A){let Z;return L?A===null||A===ys||A===wa?Z=i.DEPTH24_STENCIL8:A===er?Z=i.DEPTH32F_STENCIL8:A===Ma&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ys||A===wa?Z=i.DEPTH_COMPONENT24:A===er?Z=i.DEPTH_COMPONENT32F:A===Ma&&(Z=i.DEPTH_COMPONENT16),Z}function U(L,A){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==xi&&L.minFilter!==bi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),G(A),A.isVideoTexture&&m.delete(A)}function I(L){const A=L.target;A.removeEventListener("dispose",I),b(A)}function G(L){const A=r.get(L);if(A.__webglInit===void 0)return;const Z=L.source,de=v.get(Z);if(de){const ye=de[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(L),Object.keys(de).length===0&&v.delete(Z)}r.remove(L)}function P(L){const A=r.get(L);i.deleteTexture(A.__webglTexture);const Z=L.source,de=v.get(Z);delete de[A.__cacheKey],c.memory.textures--}function b(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let ye=0;ye<A.__webglFramebuffer[de].length;ye++)i.deleteFramebuffer(A.__webglFramebuffer[de][ye]);else i.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)i.deleteFramebuffer(A.__webglFramebuffer[de]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=L.textures;for(let de=0,ye=Z.length;de<ye;de++){const he=r.get(Z[de]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(Z[de])}r.remove(L)}let V=0;function X(){V=0}function J(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function q(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function Q(L,A){const Z=r.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(Z,L,A);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function ee(L,A){const Z=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){le(Z,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function ie(L,A){const Z=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){le(Z,L,A);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function z(L,A){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){pe(Z,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const re={[Hd]:i.REPEAT,[vs]:i.CLAMP_TO_EDGE,[Gd]:i.MIRRORED_REPEAT},oe={[xi]:i.NEAREST,[IT]:i.NEAREST_MIPMAP_NEAREST,[$l]:i.NEAREST_MIPMAP_LINEAR,[bi]:i.LINEAR,[Hf]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},F={[zT]:i.NEVER,[jT]:i.ALWAYS,[BT]:i.LESS,[Wx]:i.LEQUAL,[VT]:i.EQUAL,[WT]:i.GEQUAL,[HT]:i.GREATER,[GT]:i.NOTEQUAL};function ae(L,A){if(A.type===er&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===bi||A.magFilter===Hf||A.magFilter===$l||A.magFilter===xs||A.minFilter===bi||A.minFilter===Hf||A.minFilter===$l||A.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,re[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,re[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,re[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xi||A.minFilter!==$l&&A.minFilter!==xs||A.type===er&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Oe(L,A){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const de=A.source;let ye=v.get(de);ye===void 0&&(ye={},v.set(de,ye));const he=q(A);if(he!==L.__cacheKey){ye[he]===void 0&&(ye[he]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ye[he].usedTimes++;const Qe=ye[L.__cacheKey];Qe!==void 0&&(ye[L.__cacheKey].usedTimes--,Qe.usedTimes===0&&P(A)),L.__cacheKey=he,L.__webglTexture=ye[he].texture}return Z}function He(L,A,Z){return Math.floor(Math.floor(L/Z)/A)}function $e(L,A,Z,de){const he=L.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Z,de,A.data);else{he.sort((Ae,Ve)=>Ae.start-Ve.start);let Qe=0;for(let Ae=1;Ae<he.length;Ae++){const Ve=he[Qe],ut=he[Ae],nt=Ve.start+Ve.count,ke=He(ut.start,A.width,4),gt=He(Ve.start,A.width,4);ut.start<=nt+1&&ke===gt&&He(ut.start+ut.count-1,A.width,4)===ke?Ve.count=Math.max(Ve.count,ut.start+ut.count-Ve.start):(++Qe,he[Qe]=ut)}he.length=Qe+1;const Pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ye=i.getParameter(i.UNPACK_SKIP_PIXELS),et=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ae=0,Ve=he.length;Ae<Ve;Ae++){const ut=he[Ae],nt=Math.floor(ut.start/4),ke=Math.ceil(ut.count/4),gt=nt%A.width,j=Math.floor(nt/A.width),be=ke,De=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,gt,j,be,De,Z,de,A.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,et)}}function le(L,A,Z){let de=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=i.TEXTURE_3D);const ye=Oe(L,A),he=A.source;t.bindTexture(de,L.__webglTexture,i.TEXTURE0+Z);const Qe=r.get(he);if(he.version!==Qe.__version||ye===!0){t.activeTexture(i.TEXTURE0+Z);const Pe=Pt.getPrimaries(Pt.workingColorSpace),Ye=A.colorSpace===Or?null:Pt.getPrimaries(A.colorSpace),et=A.colorSpace===Or||Pe===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ae=M(A.image,!1,o.maxTextureSize);Ae=ct(A,Ae);const Ve=a.convert(A.format,A.colorSpace),ut=a.convert(A.type);let nt=C(A.internalFormat,Ve,ut,A.colorSpace,A.isVideoTexture);ae(de,A);let ke;const gt=A.mipmaps,j=A.isVideoTexture!==!0,be=Qe.__version===void 0||ye===!0,De=he.dataReady,Ge=U(A,Ae);if(A.isDepthTexture)nt=T(A.format===Aa,A.type),be&&(j?t.texStorage2D(i.TEXTURE_2D,1,nt,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,nt,Ae.width,Ae.height,0,Ve,ut,null));else if(A.isDataTexture)if(gt.length>0){j&&be&&t.texStorage2D(i.TEXTURE_2D,Ge,nt,gt[0].width,gt[0].height);for(let Ce=0,xe=gt.length;Ce<xe;Ce++)ke=gt[Ce],j?De&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ke.width,ke.height,Ve,ut,ke.data):t.texImage2D(i.TEXTURE_2D,Ce,nt,ke.width,ke.height,0,Ve,ut,ke.data);A.generateMipmaps=!1}else j?(be&&t.texStorage2D(i.TEXTURE_2D,Ge,nt,Ae.width,Ae.height),De&&$e(A,Ae,Ve,ut)):t.texImage2D(i.TEXTURE_2D,0,nt,Ae.width,Ae.height,0,Ve,ut,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,nt,gt[0].width,gt[0].height,Ae.depth);for(let Ce=0,xe=gt.length;Ce<xe;Ce++)if(ke=gt[Ce],A.format!==vi)if(Ve!==null)if(j){if(De)if(A.layerUpdates.size>0){const Je=Lv(ke.width,ke.height,A.format,A.type);for(const mt of A.layerUpdates){const Lt=ke.data.subarray(mt*Je/ke.data.BYTES_PER_ELEMENT,(mt+1)*Je/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,mt,ke.width,ke.height,1,Ve,Lt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ke.width,ke.height,Ae.depth,Ve,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,nt,ke.width,ke.height,Ae.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ke.width,ke.height,Ae.depth,Ve,ut,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,nt,ke.width,ke.height,Ae.depth,0,Ve,ut,ke.data)}else{j&&be&&t.texStorage2D(i.TEXTURE_2D,Ge,nt,gt[0].width,gt[0].height);for(let Ce=0,xe=gt.length;Ce<xe;Ce++)ke=gt[Ce],A.format!==vi?Ve!==null?j?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,ke.width,ke.height,Ve,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?De&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ke.width,ke.height,Ve,ut,ke.data):t.texImage2D(i.TEXTURE_2D,Ce,nt,ke.width,ke.height,0,Ve,ut,ke.data)}else if(A.isDataArrayTexture)if(j){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,nt,Ae.width,Ae.height,Ae.depth),De)if(A.layerUpdates.size>0){const Ce=Lv(Ae.width,Ae.height,A.format,A.type);for(const xe of A.layerUpdates){const Je=Ae.data.subarray(xe*Ce/Ae.data.BYTES_PER_ELEMENT,(xe+1)*Ce/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,Ve,ut,Je)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,ut,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,Ae.width,Ae.height,Ae.depth,0,Ve,ut,Ae.data);else if(A.isData3DTexture)j?(be&&t.texStorage3D(i.TEXTURE_3D,Ge,nt,Ae.width,Ae.height,Ae.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,ut,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,nt,Ae.width,Ae.height,Ae.depth,0,Ve,ut,Ae.data);else if(A.isFramebufferTexture){if(be)if(j)t.texStorage2D(i.TEXTURE_2D,Ge,nt,Ae.width,Ae.height);else{let Ce=Ae.width,xe=Ae.height;for(let Je=0;Je<Ge;Je++)t.texImage2D(i.TEXTURE_2D,Je,nt,Ce,xe,0,Ve,ut,null),Ce>>=1,xe>>=1}}else if(gt.length>0){if(j&&be){const Ce=dt(gt[0]);t.texStorage2D(i.TEXTURE_2D,Ge,nt,Ce.width,Ce.height)}for(let Ce=0,xe=gt.length;Ce<xe;Ce++)ke=gt[Ce],j?De&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ve,ut,ke):t.texImage2D(i.TEXTURE_2D,Ce,nt,Ve,ut,ke);A.generateMipmaps=!1}else if(j){if(be){const Ce=dt(Ae);t.texStorage2D(i.TEXTURE_2D,Ge,nt,Ce.width,Ce.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,ut,Ae)}else t.texImage2D(i.TEXTURE_2D,0,nt,Ve,ut,Ae);x(A)&&S(de),Qe.__version=he.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pe(L,A,Z){if(A.image.length!==6)return;const de=Oe(L,A),ye=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);const he=r.get(ye);if(ye.version!==he.__version||de===!0){t.activeTexture(i.TEXTURE0+Z);const Qe=Pt.getPrimaries(Pt.workingColorSpace),Pe=A.colorSpace===Or?null:Pt.getPrimaries(A.colorSpace),Ye=A.colorSpace===Or||Qe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const et=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Ve=[];for(let xe=0;xe<6;xe++)!et&&!Ae?Ve[xe]=M(A.image[xe],!0,o.maxCubemapSize):Ve[xe]=Ae?A.image[xe].image:A.image[xe],Ve[xe]=ct(A,Ve[xe]);const ut=Ve[0],nt=a.convert(A.format,A.colorSpace),ke=a.convert(A.type),gt=C(A.internalFormat,nt,ke,A.colorSpace),j=A.isVideoTexture!==!0,be=he.__version===void 0||de===!0,De=ye.dataReady;let Ge=U(A,ut);ae(i.TEXTURE_CUBE_MAP,A);let Ce;if(et){j&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,gt,ut.width,ut.height);for(let xe=0;xe<6;xe++){Ce=Ve[xe].mipmaps;for(let Je=0;Je<Ce.length;Je++){const mt=Ce[Je];A.format!==vi?nt!==null?j?De&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,0,0,mt.width,mt.height,nt,mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,0,0,mt.width,mt.height,nt,ke,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,gt,mt.width,mt.height,0,nt,ke,mt.data)}}}else{if(Ce=A.mipmaps,j&&be){Ce.length>0&&Ge++;const xe=dt(Ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,gt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){j?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve[xe].width,Ve[xe].height,nt,ke,Ve[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,gt,Ve[xe].width,Ve[xe].height,0,nt,ke,Ve[xe].data);for(let Je=0;Je<Ce.length;Je++){const Lt=Ce[Je].image[xe].image;j?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,0,0,Lt.width,Lt.height,nt,ke,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,gt,Lt.width,Lt.height,0,nt,ke,Lt.data)}}else{j?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,nt,ke,Ve[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,gt,nt,ke,Ve[xe]);for(let Je=0;Je<Ce.length;Je++){const mt=Ce[Je];j?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,0,0,nt,ke,mt.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,gt,nt,ke,mt.image[xe])}}}x(A)&&S(i.TEXTURE_CUBE_MAP),he.__version=ye.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function we(L,A,Z,de,ye,he){const Qe=a.convert(Z.format,Z.colorSpace),Pe=a.convert(Z.type),Ye=C(Z.internalFormat,Qe,Pe,Z.colorSpace),et=r.get(A),Ae=r.get(Z);if(Ae.__renderTarget=A,!et.__hasExternalTextures){const Ve=Math.max(1,A.width>>he),ut=Math.max(1,A.height>>he);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,he,Ye,Ve,ut,A.depth,0,Qe,Pe,null):t.texImage2D(ye,he,Ye,Ve,ut,0,Qe,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Ee(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ye,Ae.__webglTexture,0,Ie(A)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ye,Ae.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(L,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){const de=A.depthTexture,ye=de&&de.isDepthTexture?de.type:null,he=T(A.stencilBuffer,ye),Qe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=Ie(A);Ee(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,he,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,he,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Qe,i.RENDERBUFFER,L)}else{const de=A.textures;for(let ye=0;ye<de.length;ye++){const he=de[ye],Qe=a.convert(he.format,he.colorSpace),Pe=a.convert(he.type),Ye=C(he.internalFormat,Qe,Pe,he.colorSpace),et=Ie(A);Z&&Ee(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ye,A.width,A.height):Ee(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ye,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ye,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);const ye=de.__webglTexture,he=Ie(A);if(A.depthTexture.format===Ta)Ee(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(A.depthTexture.format===Aa)Ee(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function vt(L){const A=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",ye)};de.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=de}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const de=L.texture.mipmaps;de&&de.length>0?Fe(A.__webglFramebuffer[0],L):Fe(A.__webglFramebuffer,L)}else if(Z){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=i.createRenderbuffer(),Ue(A.__webglDepthbuffer[de],L,!1);else{const ye=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,he)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ue(A.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(L,A,Z){const de=r.get(L);A!==void 0&&we(de.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&vt(L)}function B(L){const A=L.texture,Z=r.get(L),de=r.get(A);L.addEventListener("dispose",I);const ye=L.textures,he=L.isWebGLCubeRenderTarget===!0,Qe=ye.length>1;if(Qe||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=A.version,c.memory.textures++),he){Z.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Pe]=[];for(let Ye=0;Ye<A.mipmaps.length;Ye++)Z.__webglFramebuffer[Pe][Ye]=i.createFramebuffer()}else Z.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)Z.__webglFramebuffer[Pe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Qe)for(let Pe=0,Ye=ye.length;Pe<Ye;Pe++){const et=r.get(ye[Pe]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&Ee(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ye.length;Pe++){const Ye=ye[Pe];Z.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);const et=a.convert(Ye.format,Ye.colorSpace),Ae=a.convert(Ye.type),Ve=C(Ye.internalFormat,et,Ae,Ye.colorSpace,L.isXRRenderTarget===!0),ut=Ie(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Ve,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),ae(i.TEXTURE_CUBE_MAP,A);for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)we(Z.__webglFramebuffer[Pe][Ye],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye);else we(Z.__webglFramebuffer[Pe],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(A)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Qe){for(let Pe=0,Ye=ye.length;Pe<Ye;Pe++){const et=ye[Pe],Ae=r.get(et);let Ve=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ve=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ve,Ae.__webglTexture),ae(Ve,et),we(Z.__webglFramebuffer,L,et,i.COLOR_ATTACHMENT0+Pe,Ve,0),x(et)&&S(Ve)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,de.__webglTexture),ae(Pe,A),A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)we(Z.__webglFramebuffer[Ye],L,A,i.COLOR_ATTACHMENT0,Pe,Ye);else we(Z.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,Pe,0);x(A)&&S(Pe),t.unbindTexture()}L.depthBuffer&&vt(L)}function _e(L){const A=L.textures;for(let Z=0,de=A.length;Z<de;Z++){const ye=A[Z];if(x(ye)){const he=N(L),Qe=r.get(ye).__webglTexture;t.bindTexture(he,Qe),S(he),t.unbindTexture()}}}const ve=[],ge=[];function me(L){if(L.samples>0){if(Ee(L)===!1){const A=L.textures,Z=L.width,de=L.height;let ye=i.COLOR_BUFFER_BIT;const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Qe=r.get(L),Pe=A.length>1;if(Pe)for(let et=0;et<A.length;et++)t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const Ye=L.texture.mipmaps;Ye&&Ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let et=0;et<A.length;et++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Qe.__webglColorRenderbuffer[et]);const Ae=r.get(A[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,Z,de,0,0,Z,de,ye,i.NEAREST),h===!0&&(ve.length=0,ge.length=0,ve.push(i.COLOR_ATTACHMENT0+et),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ve.push(he),ge.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let et=0;et<A.length;et++){t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,Qe.__webglColorRenderbuffer[et]);const Ae=r.get(A[et]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ie(L){return Math.min(o.maxSamples,L.samples)}function Ee(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Le(L){const A=c.render.frame;m.get(L)!==A&&(m.set(L,A),L.update())}function ct(L,A){const Z=L.colorSpace,de=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==yo&&Z!==Or&&(Pt.getTransfer(Z)===Ut?(de!==vi||ye!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function dt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=bt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ee}function U2(i,e){function t(r,o=Or){let a;const c=Pt.getTransfer(o);if(r===sr)return i.UNSIGNED_BYTE;if(r===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kx)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===zx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ox)return i.BYTE;if(r===Fx)return i.SHORT;if(r===Ma)return i.UNSIGNED_SHORT;if(r===Hh)return i.INT;if(r===ys)return i.UNSIGNED_INT;if(r===er)return i.FLOAT;if(r===Da)return i.HALF_FLOAT;if(r===Bx)return i.ALPHA;if(r===Vx)return i.RGB;if(r===vi)return i.RGBA;if(r===Ta)return i.DEPTH_COMPONENT;if(r===Aa)return i.DEPTH_STENCIL;if(r===Hx)return i.RED;if(r===jh)return i.RED_INTEGER;if(r===Gx)return i.RG;if(r===Xh)return i.RG_INTEGER;if(r===$h)return i.RGBA_INTEGER;if(r===Sc||r===Ec||r===Mc||r===wc)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wd||r===jd||r===Xd||r===$d)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yd||r===qd||r===Kd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yd||r===qd)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Kd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zd||r===Jd||r===Qd||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ih)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uh)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fh||r===dh||r===hh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fh)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ph||r===mh||r===gh||r===vh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ph)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wa?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const O2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new n_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wr({vertexShader:O2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pi(new qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z2 extends Ao{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",h=1,d=null,m=null,g=null,v=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",x=new k2,S={},N=t.getContextAttributes();let C=null,T=null;const U=[],O=[],I=new Xe;let G=null;const P=new si;P.viewport=new Zt;const b=new si;b.viewport=new Zt;const V=[P,b],X=new oA;let J=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let pe=U[le];return pe===void 0&&(pe=new fd,U[le]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(le){let pe=U[le];return pe===void 0&&(pe=new fd,U[le]=pe),pe.getGripSpace()},this.getHand=function(le){let pe=U[le];return pe===void 0&&(pe=new fd,U[le]=pe),pe.getHandSpace()};function Q(le){const pe=O.indexOf(le.inputSource);if(pe===-1)return;const we=U[pe];we!==void 0&&(we.update(le.inputSource,le.frame,d||c),we.dispatchEvent({type:le.type,data:le.inputSource}))}function ee(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",ie);for(let le=0;le<U.length;le++){const pe=O[le];pe!==null&&(O[le]=null,U[le].disconnect(pe))}J=null,q=null,x.reset();for(const le in S)delete S[le];e.setRenderTarget(C),y=null,v=null,g=null,o=null,T=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(le){d=le},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",ie),N.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ue=null,Fe=null;N.depth&&(Fe=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=N.stencil?Aa:Ta,Ue=N.stencil?wa:ys);const vt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:a};g=this.getBinding(),v=g.createProjectionLayer(vt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),T=new Ss(v.textureWidth,v.textureHeight,{format:vi,type:sr,depthTexture:new t_(v.textureWidth,v.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),T=new Ss(y.framebufferWidth,y.framebufferHeight,{format:vi,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(u),$e.setContext(o),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(le){for(let pe=0;pe<le.removed.length;pe++){const we=le.removed[pe],Ue=O.indexOf(we);Ue>=0&&(O[Ue]=null,U[Ue].disconnect(we))}for(let pe=0;pe<le.added.length;pe++){const we=le.added[pe];let Ue=O.indexOf(we);if(Ue===-1){for(let vt=0;vt<U.length;vt++)if(vt>=O.length){O.push(we),Ue=vt;break}else if(O[vt]===null){O[vt]=we,Ue=vt;break}if(Ue===-1)break}const Fe=U[Ue];Fe&&Fe.connect(we)}}const z=new ne,re=new ne;function oe(le,pe,we){z.setFromMatrixPosition(pe.matrixWorld),re.setFromMatrixPosition(we.matrixWorld);const Ue=z.distanceTo(re),Fe=pe.projectionMatrix.elements,vt=we.projectionMatrix.elements,bt=Fe[14]/(Fe[10]-1),B=Fe[14]/(Fe[10]+1),_e=(Fe[9]+1)/Fe[5],ve=(Fe[9]-1)/Fe[5],ge=(Fe[8]-1)/Fe[0],me=(vt[8]+1)/vt[0],Ie=bt*ge,Ee=bt*me,Le=Ue/(-ge+me),ct=Le*-ge;if(pe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(ct),le.translateZ(Le),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Fe[10]===-1)le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const dt=bt+Le,L=B+Le,A=Ie-ct,Z=Ee+(Ue-ct),de=_e*B/L*dt,ye=ve*B/L*dt;le.projectionMatrix.makePerspective(A,Z,de,ye,dt,L),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function F(le,pe){pe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(pe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let pe=le.near,we=le.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(we=x.depthFar)),X.near=b.near=P.near=pe,X.far=b.far=P.far=we,(J!==X.near||q!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),J=X.near,q=X.far),X.layers.mask=le.layers.mask|6,P.layers.mask=X.layers.mask&3,b.layers.mask=X.layers.mask&5;const Ue=le.parent,Fe=X.cameras;F(X,Ue);for(let vt=0;vt<Fe.length;vt++)F(Fe[vt],Ue);Fe.length===2?oe(X,P,b):X.projectionMatrix.copy(P.projectionMatrix),ae(le,X,Ue)};function ae(le,pe,we){we===null?le.matrix.copy(pe.matrixWorld):(le.matrix.copy(we.matrixWorld),le.matrix.invert(),le.matrix.multiply(pe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=xh*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&y===null))return h},this.setFoveation=function(le){h=le,v!==null&&(v.fixedFoveation=le),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(le){return S[le]};let Oe=null;function He(le,pe){if(m=pe.getViewerPose(d||c),E=pe,m!==null){const we=m.views;y!==null&&(e.setRenderTargetFramebuffer(T,y.framebuffer),e.setRenderTarget(T));let Ue=!1;we.length!==X.cameras.length&&(X.cameras.length=0,Ue=!0);for(let B=0;B<we.length;B++){const _e=we[B];let ve=null;if(y!==null)ve=y.getViewport(_e);else{const me=g.getViewSubImage(v,_e);ve=me.viewport,B===0&&(e.setRenderTargetTextures(T,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(T))}let ge=V[B];ge===void 0&&(ge=new si,ge.layers.enable(B),ge.viewport=new Zt,V[B]=ge),ge.matrix.fromArray(_e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(_e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ve.x,ve.y,ve.width,ve.height),B===0&&(X.matrix.copy(ge.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ue===!0&&X.cameras.push(ge)}const Fe=o.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){g=r.getBinding();const B=g.getDepthInformation(we[0]);B&&B.isValid&&B.texture&&x.init(B,o.renderState)}if(Fe&&Fe.includes("camera-access")&&M){e.state.unbindTexture(),g=r.getBinding();for(let B=0;B<we.length;B++){const _e=we[B].camera;if(_e){let ve=S[_e];ve||(ve=new n_,S[_e]=ve);const ge=g.getCameraImage(_e);ve.sourceTexture=ge}}}}for(let we=0;we<U.length;we++){const Ue=O[we],Fe=U[we];Ue!==null&&Fe!==void 0&&Fe.update(Ue,pe,d||c)}Oe&&Oe(le,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),E=null}const $e=new d_;$e.setAnimationLoop(He),this.setAnimationLoop=function(le){Oe=le},this.dispose=function(){}}}const ds=new or,B2=new en;function V2(i,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,Zx(i)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,N,C,T){S.isMeshBasicMaterial||S.isMeshLambertMaterial?a(x,S):S.isMeshToonMaterial?(a(x,S),g(x,S)):S.isMeshPhongMaterial?(a(x,S),m(x,S)):S.isMeshStandardMaterial?(a(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,T)):S.isMeshMatcapMaterial?(a(x,S),E(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),M(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&u(x,S)):S.isPointsMaterial?h(x,S,N,C):S.isSpriteMaterial?d(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===On&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===On&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const N=e.get(S),C=N.envMap,T=N.envMapRotation;C&&(x.envMap.value=C,ds.copy(T),ds.x*=-1,ds.y*=-1,ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),x.envMapRotation.value.setFromMatrix4(B2.makeRotationFromEuler(ds)),x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function u(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,N,C){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*N,x.scale.value=C*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function g(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,N){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===On&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function M(x,S){const N=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function H2(i,e,t,r){let o={},a={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,C){const T=C.program;r.uniformBlockBinding(N,T)}function d(N,C){let T=o[N.id];T===void 0&&(E(N),T=m(N),o[N.id]=T,N.addEventListener("dispose",x));const U=C.program;r.updateUBOMapping(N,U);const O=e.render.frame;a[N.id]!==O&&(v(N),a[N.id]=O)}function m(N){const C=g();N.__bindingPointIndex=C;const T=i.createBuffer(),U=N.__size,O=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,T),T}function g(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const C=o[N.id],T=N.uniforms,U=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let O=0,I=T.length;O<I;O++){const G=Array.isArray(T[O])?T[O]:[T[O]];for(let P=0,b=G.length;P<b;P++){const V=G[P];if(y(V,O,P,U)===!0){const X=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let q=0;for(let Q=0;Q<J.length;Q++){const ee=J[Q],ie=M(ee);typeof ee=="number"||typeof ee=="boolean"?(V.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,X+q,V.__data)):ee.isMatrix3?(V.__data[0]=ee.elements[0],V.__data[1]=ee.elements[1],V.__data[2]=ee.elements[2],V.__data[3]=0,V.__data[4]=ee.elements[3],V.__data[5]=ee.elements[4],V.__data[6]=ee.elements[5],V.__data[7]=0,V.__data[8]=ee.elements[6],V.__data[9]=ee.elements[7],V.__data[10]=ee.elements[8],V.__data[11]=0):(ee.toArray(V.__data,q),q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,C,T,U){const O=N.value,I=C+"_"+T;if(U[I]===void 0)return typeof O=="number"||typeof O=="boolean"?U[I]=O:U[I]=O.clone(),!0;{const G=U[I];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return U[I]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function E(N){const C=N.uniforms;let T=0;const U=16;for(let I=0,G=C.length;I<G;I++){const P=Array.isArray(C[I])?C[I]:[C[I]];for(let b=0,V=P.length;b<V;b++){const X=P[b],J=Array.isArray(X.value)?X.value:[X.value];for(let q=0,Q=J.length;q<Q;q++){const ee=J[q],ie=M(ee),z=T%U,re=z%ie.boundary,oe=z+re;T+=re,oe!==0&&U-oe<ie.storage&&(T+=U-oe),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=ie.storage}}}const O=T%U;return O>0&&(T+=U-O),N.__size=T,N.__cache={},this}function M(N){const C={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=48,C.storage=48):N.isMatrix4?(C.boundary=64,C.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),C}function x(N){const C=N.target;C.removeEventListener("dispose",x);const T=c.indexOf(C.__bindingPointIndex);c.splice(T,1),i.deleteBuffer(o[C.id]),delete o[C.id],delete a[C.id]}function S(){for(const N in o)i.deleteBuffer(o[N]);c=[],o={},a={}}return{bind:h,update:d,dispose:S}}class G2{constructor(e={}){const{canvas:t=$T(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,S=null;const N=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=ri;let O=0,I=0,G=null,P=-1,b=null;const V=new Zt,X=new Zt;let J=null;const q=new Ot(0);let Q=0,ee=t.width,ie=t.height,z=1,re=null,oe=null;const F=new Zt(0,0,ee,ie),ae=new Zt(0,0,ee,ie);let Oe=!1;const He=new e_;let $e=!1,le=!1;const pe=new en,we=new ne,Ue=new Zt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function bt(){return G===null?z:1}let B=r;function _e(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),B===null){const K="webgl2";if(B=_e(K,R),B===null)throw _e(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,ge,me,Ie,Ee,Le,ct,dt,L,A,Z,de,ye,he,Qe,Pe,Ye,et,Ae,Ve,ut,nt,ke,gt;function j(){ve=new Qb(B),ve.init(),nt=new U2(B,ve),ge=new Xb(B,ve,e,nt),me=new D2(B,ve),ge.reversedDepthBuffer&&v&&me.buffers.depth.setReversed(!0),Ie=new nR(B),Ee=new y2,Le=new I2(B,ve,me,Ee,ge,nt,Ie),ct=new Yb(T),dt=new Jb(T),L=new lA(B),ke=new Wb(B,L),A=new eR(B,L,Ie,ke),Z=new rR(B,A,L,Ie),Ae=new iR(B,ge,Le),Pe=new $b(Ee),de=new _2(T,ct,dt,ve,ge,ke,Pe),ye=new V2(T,Ee),he=new E2,Qe=new b2(ve),et=new Gb(T,ct,dt,me,Z,y,h),Ye=new N2(T,Z,ge),gt=new H2(B,Ie,ge,me),Ve=new jb(B,ve,Ie),ut=new tR(B,ve,Ie),Ie.programs=de.programs,T.capabilities=ge,T.extensions=ve,T.properties=Ee,T.renderLists=he,T.shadowMap=Ye,T.state=me,T.info=Ie}j();const be=new z2(T,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ee,ie,!1))},this.getSize=function(R){return R.set(ee,ie)},this.setSize=function(R,K,ue=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,ie=K,t.width=Math.floor(R*z),t.height=Math.floor(K*z),ue===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(ee*z,ie*z).floor()},this.setDrawingBufferSize=function(R,K,ue){ee=R,ie=K,z=ue,t.width=Math.floor(R*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,K,ue,fe){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,K,ue,fe),me.viewport(V.copy(F).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,K,ue,fe){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,K,ue,fe),me.scissor(X.copy(ae).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){me.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ue=!0){let fe=0;if(R){let Y=!1;if(G!==null){const Re=G.texture.format;Y=Re===$h||Re===Xh||Re===jh}if(Y){const Re=G.texture.type,ze=Re===sr||Re===ys||Re===Ma||Re===wa||Re===Gh||Re===Wh,Ke=et.getClearColor(),We=et.getClearAlpha(),lt=Ke.r,ft=Ke.g,rt=Ke.b;ze?(E[0]=lt,E[1]=ft,E[2]=rt,E[3]=We,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=lt,M[1]=ft,M[2]=rt,M[3]=We,B.clearBufferiv(B.COLOR,0,M))}else fe|=B.COLOR_BUFFER_BIT}K&&(fe|=B.DEPTH_BUFFER_BIT),ue&&(fe|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),et.dispose(),he.dispose(),Qe.dispose(),Ee.dispose(),ct.dispose(),dt.dispose(),Z.dispose(),ke.dispose(),gt.dispose(),de.dispose(),be.dispose(),be.removeEventListener("sessionstart",pn),be.removeEventListener("sessionend",Ms),Bn.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=Ie.autoReset,K=Ye.enabled,ue=Ye.autoUpdate,fe=Ye.needsUpdate,Y=Ye.type;j(),Ie.autoReset=R,Ye.enabled=K,Ye.autoUpdate=ue,Ye.needsUpdate=fe,Ye.type=Y}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const K=R.target;K.removeEventListener("dispose",xe),Je(K)}function Je(R){mt(R),Ee.remove(R)}function mt(R){const K=Ee.get(R).programs;K!==void 0&&(K.forEach(function(ue){de.releaseProgram(ue)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ue,fe,Y,Re){K===null&&(K=Fe);const ze=Y.isMesh&&Y.matrixWorld.determinant()<0,Ke=Fi(R,K,ue,fe,Y);me.setMaterial(fe,ze);let We=ue.index,lt=1;if(fe.wireframe===!0){if(We=A.getWireframeAttribute(ue),We===void 0)return;lt=2}const ft=ue.drawRange,rt=ue.attributes.position;let ht=ft.start*lt,Nt=(ft.start+ft.count)*lt;Re!==null&&(ht=Math.max(ht,Re.start*lt),Nt=Math.min(Nt,(Re.start+Re.count)*lt)),We!==null?(ht=Math.max(ht,0),Nt=Math.min(Nt,We.count)):rt!=null&&(ht=Math.max(ht,0),Nt=Math.min(Nt,rt.count));const At=Nt-ht;if(At<0||At===1/0)return;ke.setup(Y,fe,Ke,ue,We);let Ft,Dt=Ve;if(We!==null&&(Ft=L.get(We),Dt=ut,Dt.setIndex(Ft)),Y.isMesh)fe.wireframe===!0?(me.setLineWidth(fe.wireframeLinewidth*bt()),Dt.setMode(B.LINES)):Dt.setMode(B.TRIANGLES);else if(Y.isLine){let st=fe.linewidth;st===void 0&&(st=1),me.setLineWidth(st*bt()),Y.isLineSegments?Dt.setMode(B.LINES):Y.isLineLoop?Dt.setMode(B.LINE_LOOP):Dt.setMode(B.LINE_STRIP)}else Y.isPoints?Dt.setMode(B.POINTS):Y.isSprite&&Dt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const st=Y._multiDrawStarts,It=Y._multiDrawCounts,Et=Y._multiDrawCount,tn=We?L.get(We).bytesPerElement:1,oi=Ee.get(fe).currentProgram.getUniforms();for(let wn=0;wn<Et;wn++)oi.setValue(B,"_gl_DrawID",wn),Dt.render(st[wn]/tn,It[wn])}else if(Y.isInstancedMesh)Dt.renderInstances(ht,At,Y.count);else if(ue.isInstancedBufferGeometry){const st=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,It=Math.min(ue.instanceCount,st);Dt.renderInstances(ht,At,It)}else Dt.render(ht,At)};function Lt(R,K,ue){R.transparent===!0&&R.side===Qi&&R.forceSinglePass===!1?(R.side=On,R.needsUpdate=!0,Ts(R,K,ue),R.side=Gr,R.needsUpdate=!0,Ts(R,K,ue),R.side=Qi):Ts(R,K,ue)}this.compile=function(R,K,ue=null){ue===null&&(ue=R),S=Qe.get(ue),S.init(K),C.push(S),ue.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),R!==ue&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();const fe=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){const Ke=Re[ze];Lt(Ke,ue,Y),fe.add(Ke)}else Lt(Re,ue,Y),fe.add(Re)}),S=C.pop(),fe},this.compileAsync=function(R,K,ue=null){const fe=this.compile(R,K,ue);return new Promise(Y=>{function Re(){if(fe.forEach(function(ze){Ee.get(ze).currentProgram.isReady()&&fe.delete(ze)}),fe.size===0){Y(R);return}setTimeout(Re,10)}ve.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Tt=null;function Kn(R){Tt&&Tt(R)}function pn(){Bn.stop()}function Ms(){Bn.start()}const Bn=new d_;Bn.setAnimationLoop(Kn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){Tt=R,be.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},be.addEventListener("sessionstart",pn),be.addEventListener("sessionend",Ms),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(K),K=be.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,K,G),S=Qe.get(R,C.length),S.init(K),C.push(S),pe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),He.setFromProjectionMatrix(pe,Ri,K.reversedDepth),le=this.localClippingEnabled,$e=Pe.init(this.clippingPlanes,le),x=he.get(R,N.length),x.init(),N.push(x),be.enabled===!0&&be.isPresenting===!0){const Re=T.xr.getDepthSensingMesh();Re!==null&&Ro(Re,K,-1/0,T.sortObjects)}Ro(R,K,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(re,oe),vt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,vt&&et.addToRenderList(x,R),this.info.render.frame++,$e===!0&&Pe.beginShadows();const ue=S.state.shadowsArray;Ye.render(ue,R,K),$e===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=x.opaque,Y=x.transmissive;if(S.setupLights(),K.isArrayCamera){const Re=K.cameras;if(Y.length>0)for(let ze=0,Ke=Re.length;ze<Ke;ze++){const We=Re[ze];Xr(fe,Y,R,We)}vt&&et.render(R);for(let ze=0,Ke=Re.length;ze<Ke;ze++){const We=Re[ze];ar(x,R,We,We.viewport)}}else Y.length>0&&Xr(fe,Y,R,K),vt&&et.render(R),ar(x,R,K);G!==null&&I===0&&(Le.updateMultisampleRenderTarget(G),Le.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(T,R,K),ke.resetDefaultState(),P=-1,b=null,C.pop(),C.length>0?(S=C[C.length-1],$e===!0&&Pe.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Ro(R,K,ue,fe){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){fe&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const ze=Z.update(R),Ke=R.material;Ke.visible&&x.push(R,ze,Ke,ue,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){const ze=Z.update(R),Ke=R.material;if(fe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ue.copy(ze.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(Ke)){const We=ze.groups;for(let lt=0,ft=We.length;lt<ft;lt++){const rt=We[lt],ht=Ke[rt.materialIndex];ht&&ht.visible&&x.push(R,ze,ht,ue,Ue.z,rt)}}else Ke.visible&&x.push(R,ze,Ke,ue,Ue.z,null)}}const Re=R.children;for(let ze=0,Ke=Re.length;ze<Ke;ze++)Ro(Re[ze],K,ue,fe)}function ar(R,K,ue,fe){const Y=R.opaque,Re=R.transmissive,ze=R.transparent;S.setupLightsView(ue),$e===!0&&Pe.setGlobalState(T.clippingPlanes,ue),fe&&me.viewport(V.copy(fe)),Y.length>0&&Oi(Y,K,ue),Re.length>0&&Oi(Re,K,ue),ze.length>0&&Oi(ze,K,ue),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Xr(R,K,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[fe.id]===void 0&&(S.state.transmissionRenderTarget[fe.id]=new Ss(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Da:sr,minFilter:xs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Re=S.state.transmissionRenderTarget[fe.id],ze=fe.viewport||V;Re.setSize(ze.z*T.transmissionResolutionScale,ze.w*T.transmissionResolutionScale);const Ke=T.getRenderTarget(),We=T.getActiveCubeFace(),lt=T.getActiveMipmapLevel();T.setRenderTarget(Re),T.getClearColor(q),Q=T.getClearAlpha(),Q<1&&T.setClearColor(16777215,.5),T.clear(),vt&&et.render(ue);const ft=T.toneMapping;T.toneMapping=kr;const rt=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),S.setupLightsView(fe),$e===!0&&Pe.setGlobalState(T.clippingPlanes,fe),Oi(R,ue,fe),Le.updateMultisampleRenderTarget(Re),Le.updateRenderTargetMipmap(Re),ve.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Nt=0,At=K.length;Nt<At;Nt++){const Ft=K[Nt],Dt=Ft.object,st=Ft.geometry,It=Ft.material,Et=Ft.group;if(It.side===Qi&&Dt.layers.test(fe.layers)){const tn=It.side;It.side=On,It.needsUpdate=!0,ws(Dt,ue,fe,st,It,Et),It.side=tn,It.needsUpdate=!0,ht=!0}}ht===!0&&(Le.updateMultisampleRenderTarget(Re),Le.updateRenderTargetMipmap(Re))}T.setRenderTarget(Ke,We,lt),T.setClearColor(q,Q),rt!==void 0&&(fe.viewport=rt),T.toneMapping=ft}function Oi(R,K,ue){const fe=K.isScene===!0?K.overrideMaterial:null;for(let Y=0,Re=R.length;Y<Re;Y++){const ze=R[Y],Ke=ze.object,We=ze.geometry,lt=ze.group;let ft=ze.material;ft.allowOverride===!0&&fe!==null&&(ft=fe),Ke.layers.test(ue.layers)&&ws(Ke,K,ue,We,ft,lt)}}function ws(R,K,ue,fe,Y,Re){R.onBeforeRender(T,K,ue,fe,Y,Re),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(T,K,ue,fe,R,Re),Y.transparent===!0&&Y.side===Qi&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,T.renderBufferDirect(ue,K,fe,Y,R,Re),Y.side=Gr,Y.needsUpdate=!0,T.renderBufferDirect(ue,K,fe,Y,R,Re),Y.side=Qi):T.renderBufferDirect(ue,K,fe,Y,R,Re),R.onAfterRender(T,K,ue,fe,Y,Re)}function Ts(R,K,ue){K.isScene!==!0&&(K=Fe);const fe=Ee.get(R),Y=S.state.lights,Re=S.state.shadowsArray,ze=Y.state.version,Ke=de.getParameters(R,Y.state,Re,K,ue),We=de.getProgramCacheKey(Ke);let lt=fe.programs;fe.environment=R.isMeshStandardMaterial?K.environment:null,fe.fog=K.fog,fe.envMap=(R.isMeshStandardMaterial?dt:ct).get(R.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",xe),lt=new Map,fe.programs=lt);let ft=lt.get(We);if(ft!==void 0){if(fe.currentProgram===ft&&fe.lightsStateVersion===ze)return ka(R,Ke),ft}else Ke.uniforms=de.getUniforms(R),R.onBeforeCompile(Ke,T),ft=de.acquireProgram(Ke,We),lt.set(We,ft),fe.uniforms=Ke.uniforms;const rt=fe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=Pe.uniform),ka(R,Ke),fe.needsLights=Ba(R),fe.lightsStateVersion=ze,fe.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),fe.currentProgram=ft,fe.uniformsList=null,ft}function Fa(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function ka(R,K){const ue=Ee.get(R);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Fi(R,K,ue,fe,Y){K.isScene!==!0&&(K=Fe),Le.resetTextureUnits();const Re=K.fog,ze=fe.isMeshStandardMaterial?K.environment:null,Ke=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:yo,We=(fe.isMeshStandardMaterial?dt:ct).get(fe.envMap||ze),lt=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),rt=!!ue.morphAttributes.position,ht=!!ue.morphAttributes.normal,Nt=!!ue.morphAttributes.color;let At=kr;fe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(At=T.toneMapping);const Ft=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Dt=Ft!==void 0?Ft.length:0,st=Ee.get(fe),It=S.state.lights;if($e===!0&&(le===!0||R!==b)){const qt=R===b&&fe.id===P;Pe.setState(fe,R,qt)}let Et=!1;fe.version===st.__version?(st.needsLights&&st.lightsStateVersion!==It.state.version||st.outputColorSpace!==Ke||Y.isBatchedMesh&&st.batching===!1||!Y.isBatchedMesh&&st.batching===!0||Y.isBatchedMesh&&st.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&st.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&st.instancing===!1||!Y.isInstancedMesh&&st.instancing===!0||Y.isSkinnedMesh&&st.skinning===!1||!Y.isSkinnedMesh&&st.skinning===!0||Y.isInstancedMesh&&st.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&st.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&st.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&st.instancingMorph===!1&&Y.morphTexture!==null||st.envMap!==We||fe.fog===!0&&st.fog!==Re||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Pe.numPlanes||st.numIntersection!==Pe.numIntersection)||st.vertexAlphas!==lt||st.vertexTangents!==ft||st.morphTargets!==rt||st.morphNormals!==ht||st.morphColors!==Nt||st.toneMapping!==At||st.morphTargetsCount!==Dt)&&(Et=!0):(Et=!0,st.__version=fe.version);let tn=st.currentProgram;Et===!0&&(tn=Ts(fe,K,Y));let oi=!1,wn=!1,$r=!1;const kt=tn.getUniforms(),Tn=st.uniforms;if(me.useProgram(tn.program)&&(oi=!0,wn=!0,$r=!0),fe.id!==P&&(P=fe.id,wn=!0),oi||b!==R){me.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(B,"projectionMatrix",R.projectionMatrix),kt.setValue(B,"viewMatrix",R.matrixWorldInverse);const gn=kt.map.cameraPosition;gn!==void 0&&gn.setValue(B,we.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&kt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,wn=!0,$r=!0)}if(Y.isSkinnedMesh){kt.setOptional(B,Y,"bindMatrix"),kt.setOptional(B,Y,"bindMatrixInverse");const qt=Y.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),kt.setValue(B,"boneTexture",qt.boneTexture,Le))}Y.isBatchedMesh&&(kt.setOptional(B,Y,"batchingTexture"),kt.setValue(B,"batchingTexture",Y._matricesTexture,Le),kt.setOptional(B,Y,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",Y._indirectTexture,Le),kt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",Y._colorsTexture,Le));const mn=ue.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ae.update(Y,ue,tn),(wn||st.receiveShadow!==Y.receiveShadow)&&(st.receiveShadow=Y.receiveShadow,kt.setValue(B,"receiveShadow",Y.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Tn.envMap.value=We,Tn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&K.environment!==null&&(Tn.envMapIntensity.value=K.environmentIntensity),wn&&(kt.setValue(B,"toneMappingExposure",T.toneMappingExposure),st.needsLights&&za(Tn,$r),Re&&fe.fog===!0&&ye.refreshFogUniforms(Tn,Re),ye.refreshMaterialUniforms(Tn,fe,z,ie,S.state.transmissionRenderTarget[R.id]),Tc.upload(B,Fa(st),Tn,Le)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Tc.upload(B,Fa(st),Tn,Le),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&kt.setValue(B,"center",Y.center),kt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(B,"normalMatrix",Y.normalMatrix),kt.setValue(B,"modelMatrix",Y.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const qt=fe.uniformsGroups;for(let gn=0,Yr=qt.length;gn<Yr;gn++){const Mt=qt[gn];gt.update(Mt,tn),gt.bind(Mt,tn)}}return tn}function za(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ba(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,K,ue){const fe=Ee.get(R);fe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),Ee.get(R.texture).__webglTexture=K,Ee.get(R.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:ue,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ue=Ee.get(R);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0};const Zc=B.createFramebuffer();this.setRenderTarget=function(R,K=0,ue=0){G=R,O=K,I=ue;let fe=!0,Y=null,Re=!1,ze=!1;if(R){const We=Ee.get(R);if(We.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(B.FRAMEBUFFER,null),fe=!1;else if(We.__webglFramebuffer===void 0)Le.setupRenderTarget(R);else if(We.__hasExternalTextures)Le.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(We.__boundDepthTexture!==rt){if(rt!==null&&Ee.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(R)}}const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(ze=!0);const ft=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ft[K])?Y=ft[K][ue]:Y=ft[K],Re=!0):R.samples>0&&Le.useMultisampledRTT(R)===!1?Y=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(ft)?Y=ft[ue]:Y=ft,V.copy(R.viewport),X.copy(R.scissor),J=R.scissorTest}else V.copy(F).multiplyScalar(z).floor(),X.copy(ae).multiplyScalar(z).floor(),J=Oe;if(ue!==0&&(Y=Zc),me.bindFramebuffer(B.FRAMEBUFFER,Y)&&fe&&me.drawBuffers(R,Y),me.viewport(V),me.scissor(X),me.setScissorTest(J),Re){const We=Ee.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,We.__webglTexture,ue)}else if(ze){const We=K;for(let lt=0;lt<R.textures.length;lt++){const ft=Ee.get(R.textures[lt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+lt,ft.__webglTexture,ue,We)}}else if(R!==null&&ue!==0){const We=Ee.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,We.__webglTexture,ue)}P=-1},this.readRenderTargetPixels=function(R,K,ue,fe,Y,Re,ze,Ke=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){me.bindFramebuffer(B.FRAMEBUFFER,We);try{const lt=R.textures[Ke],ft=lt.format,rt=lt.type;if(!ge.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-fe&&ue>=0&&ue<=R.height-Y&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ke),B.readPixels(K,ue,fe,Y,nt.convert(ft),nt.convert(rt),Re))}finally{const lt=G!==null?Ee.get(G).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(R,K,ue,fe,Y,Re,ze,Ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We)if(K>=0&&K<=R.width-fe&&ue>=0&&ue<=R.height-Y){me.bindFramebuffer(B.FRAMEBUFFER,We);const lt=R.textures[Ke],ft=lt.format,rt=lt.type;if(!ge.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ke),B.readPixels(K,ue,fe,Y,nt.convert(ft),nt.convert(rt),0);const Nt=G!==null?Ee.get(G).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Nt);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await YT(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.deleteBuffer(ht),B.deleteSync(At),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ue=0){const fe=Math.pow(2,-ue),Y=Math.floor(R.image.width*fe),Re=Math.floor(R.image.height*fe),ze=K!==null?K.x:0,Ke=K!==null?K.y:0;Le.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,ze,Ke,Y,Re),me.unbindTexture()};const Va=B.createFramebuffer(),Ha=B.createFramebuffer();this.copyTextureToTexture=function(R,K,ue=null,fe=null,Y=0,Re=null){Re===null&&(Y!==0?(Ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Y,Y=0):Re=0);let ze,Ke,We,lt,ft,rt,ht,Nt,At;const Ft=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(ue!==null)ze=ue.max.x-ue.min.x,Ke=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,lt=ue.min.x,ft=ue.min.y,rt=ue.isBox3?ue.min.z:0;else{const mn=Math.pow(2,-Y);ze=Math.floor(Ft.width*mn),Ke=Math.floor(Ft.height*mn),R.isDataArrayTexture?We=Ft.depth:R.isData3DTexture?We=Math.floor(Ft.depth*mn):We=1,lt=0,ft=0,rt=0}fe!==null?(ht=fe.x,Nt=fe.y,At=fe.z):(ht=0,Nt=0,At=0);const Dt=nt.convert(K.format),st=nt.convert(K.type);let It;K.isData3DTexture?(Le.setTexture3D(K,0),It=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Le.setTexture2DArray(K,0),It=B.TEXTURE_2D_ARRAY):(Le.setTexture2D(K,0),It=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=B.getParameter(B.UNPACK_ROW_LENGTH),tn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oi=B.getParameter(B.UNPACK_SKIP_PIXELS),wn=B.getParameter(B.UNPACK_SKIP_ROWS),$r=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const kt=R.isDataArrayTexture||R.isData3DTexture,Tn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const mn=Ee.get(R),qt=Ee.get(K),gn=Ee.get(mn.__renderTarget),Yr=Ee.get(qt.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let Mt=0;Mt<We;Mt++)kt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(R).__webglTexture,Y,rt+Mt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(K).__webglTexture,Re,At+Mt)),B.blitFramebuffer(lt,ft,ze,Ke,ht,Nt,ze,Ke,B.DEPTH_BUFFER_BIT,B.NEAREST);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Ee.has(R)){const mn=Ee.get(R),qt=Ee.get(K);me.bindFramebuffer(B.READ_FRAMEBUFFER,Va),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ha);for(let gn=0;gn<We;gn++)kt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Y,rt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Y),Tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,Re,At+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qt.__webglTexture,Re),Y!==0?B.blitFramebuffer(lt,ft,ze,Ke,ht,Nt,ze,Ke,B.COLOR_BUFFER_BIT,B.NEAREST):Tn?B.copyTexSubImage3D(It,Re,ht,Nt,At+gn,lt,ft,ze,Ke):B.copyTexSubImage2D(It,Re,ht,Nt,lt,ft,ze,Ke);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(It,Re,ht,Nt,At,ze,Ke,We,Dt,st,Ft.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(It,Re,ht,Nt,At,ze,Ke,We,Dt,Ft.data):B.texSubImage3D(It,Re,ht,Nt,At,ze,Ke,We,Dt,st,Ft):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Re,ht,Nt,ze,Ke,Dt,st,Ft.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Re,ht,Nt,Ft.width,Ft.height,Dt,Ft.data):B.texSubImage2D(B.TEXTURE_2D,Re,ht,Nt,ze,Ke,Dt,st,Ft);B.pixelStorei(B.UNPACK_ROW_LENGTH,Et),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oi),B.pixelStorei(B.UNPACK_SKIP_ROWS,wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$r),Re===0&&K.generateMipmaps&&B.generateMipmap(It),me.unbindTexture()},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&Le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Le.setTextureCube(R,0):R.isData3DTexture?Le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Le.setTexture2DArray(R,0):Le.setTexture2D(R,0),me.unbindTexture()},this.resetState=function(){O=0,I=0,G=null,me.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function W2(){const i=W.useRef(null),e=W.useRef();return W.useEffect(()=>{if(!i.current)return;const t=new y1,r=new si(75,window.innerWidth/window.innerHeight,.1,1e3),o=new G2({alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(0,0),i.current.appendChild(o.domElement),r.position.set(0,0,5),r.lookAt(0,0,0);const a=X2(t),c=()=>{e.current=requestAnimationFrame(c);const h=j2("home");q2(a,h),Y2(r,h),o.render(t,r)};c();const u=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),e.current&&cancelAnimationFrame(e.current),i.current&&o.domElement&&i.current.removeChild(o.domElement),o.dispose()}},[]),D.jsx("div",{ref:i,className:"absolute inset-0 pointer-events-none",style:{zIndex:1}})}function j2(i){const e=document.getElementById(i);if(!e)return 0;const t=e.getBoundingClientRect(),r=window.innerHeight,o=t.top,a=t.bottom;if(a<0||o>r)return 0;const c=Math.min(a,r)-Math.max(o,0),u=t.height;return Math.max(0,Math.min(1,c/u))}function X2(i){const e=$2(),t=new Yc({color:16777215,transparent:!0,opacity:.7}),r=[],o=5,a=16;for(let c=0;c<o;c++){const u=2+c*1.5,h=a+c*2;for(let d=0;d<h;d++){const m=new Pi(e,t.clone()),g=d/h*Math.PI*2,v=(Math.random()-.5)*.3,y={radius:u+(Math.random()-.5)*.5,speed:.1+c*.05+Math.random()*.15,angle:g+v,verticalOffset:(Math.random()-.5)*3};m.position.set(Math.cos(y.angle)*y.radius,y.verticalOffset,Math.sin(y.angle)*y.radius);const E=.2+Math.random()*.4;m.scale.setScalar(E),m.baseScale=E,i.add(m),r.push({mesh:m,orbitData:y})}}return r}function $2(){const i=new a_,e=.03,t=.015,r=5;for(let a=0;a<r*2;a++){const c=a*Math.PI/r,u=a%2===0?e:t,h=Math.cos(c)*u,d=Math.sin(c)*u;a===0?i.moveTo(h,d):i.lineTo(h,d)}i.closePath();const o={depth:.02,bevelEnabled:!1};return new Jh(i,o)}function Y2(i,e){const t=Math.PI*.5,r=-e*t,o=5;i.position.x=Math.sin(r)*o,i.position.z=Math.cos(r)*o,i.lookAt(0,0,0)}function q2(i,e){const t=Date.now()*.001;i.forEach((r,o)=>{const{mesh:a,orbitData:c}=r;c.angle+=c.speed*.01,a.position.x=Math.cos(c.angle)*c.radius,a.position.z=Math.sin(c.angle)*c.radius,a.position.y=c.verticalOffset+Math.sin(t*.5+o)*.1,a.rotation.z+=.02,a.rotation.y+=.01,a.material instanceof Yc&&(a.material.opacity=.4+e*.5);const h=(a.baseScale||.5)+Math.sin(t*2+o)*.1;a.scale.setScalar(h)})}function K2(){const i=()=>{const t=document.getElementById("contact");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},e=()=>{const t=document.createElement("a");t.href="/resume.pdf",t.download="Rujiwat_Pithaksiripan_Resume.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)};return D.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[D.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"}),D.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"}),D.jsx(W2,{}),D.jsxs("div",{className:"relative z-10 text-center text-white px-6 animate-fade-in-up",children:[D.jsx("div",{className:"mb-8",children:D.jsx("div",{className:"w-32 h-32 mx-auto rounded-full shadow-elegant mb-6 overflow-hidden border-4 border-white/20",children:D.jsx("img",{src:iT,alt:`${zt.personal.name} ${zt.personal.surname}`,className:"w-full h-full object-cover"})})}),D.jsxs("h1",{className:"text-5xl md:text-7xl font-bold mb-4 tracking-tight",children:[D.jsx("span",{children:zt.personal.name}),D.jsx("br",{}),D.jsx("span",{className:"text-gray-300",children:zt.personal.surname})]}),D.jsx("p",{className:"text-xl md:text-2xl font-light mb-2 text-gray-200",children:zt.personal.title}),D.jsx("p",{className:"text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed",children:zt.personal.profile}),D.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[D.jsx(Ea,{onClick:i,className:"bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-elegant",children:"Get In Touch"}),D.jsxs(Ea,{onClick:e,variant:"outline",className:"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 bg-transparent",children:[D.jsx(Cc,{className:"w-4 h-4 mr-2"}),"Download Resume"]})]}),D.jsxs("div",{className:"flex justify-center space-x-6 mt-12",children:[D.jsx("a",{href:zt.personal.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300",children:D.jsx(j0,{className:"w-8 h-8"})}),D.jsx("a",{href:zt.personal.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300",children:D.jsx(X0,{className:"w-8 h-8"})}),D.jsx("a",{href:`mailto:${zt.personal.email}`,className:"text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300",children:D.jsx(Cc,{className:"w-8 h-8"})})]})]}),D.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-pulse-subtle",children:D.jsx(DE,{className:"w-6 h-6"})})]})}function Z2(){return D.jsx("section",{id:"about",className:"py-20 bg-white",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[D.jsxs("div",{className:"text-center mb-16 animate-fade-in-up",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-black mb-6",children:"About Me"}),D.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"})]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[D.jsx("div",{className:"animate-fade-in-left",children:D.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-elegant",children:[D.jsx("h3",{className:"text-2xl font-semibold text-black mb-6",children:"Professional Profile"}),D.jsx("p",{className:"text-lg leading-relaxed text-gray-600 mb-6",children:"An Ex-Veterinarian turn web developer. I'm an active learner, good listener and team worker with a passion for backend development and system architecture."}),D.jsx("div",{className:"grid grid-cols-1 gap-6",children:D.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner-elegant",children:[D.jsx("h4",{className:"font-semibold text-black mb-2",children:"Experience"}),D.jsx("p",{className:"text-gray-600",children:"3+ Years in Backend Development"})]})})]})}),D.jsx("div",{className:"animate-fade-in-right",children:D.jsxs("div",{className:"bg-gradient-to-br from-black to-gray-800 p-8 rounded-2xl shadow-elegant text-white",children:[D.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Quick Facts"}),D.jsxs("ul",{className:"space-y-3",children:[D.jsxs("li",{className:"flex items-center",children:[D.jsx("div",{className:"w-2 h-2 bg-gray-300 rounded-full mr-3"}),D.jsx("span",{children:zt.personal.location})]}),D.jsxs("li",{className:"flex items-center",children:[D.jsx("div",{className:"w-2 h-2 bg-gray-300 rounded-full mr-3"}),D.jsx("span",{children:"Backend Specialist"})]}),D.jsxs("li",{className:"flex items-center",children:[D.jsx("div",{className:"w-2 h-2 bg-gray-300 rounded-full mr-3"}),D.jsx("span",{children:"B.Sc. Information Technology"})]}),D.jsxs("li",{className:"flex items-center",children:[D.jsx("div",{className:"w-2 h-2 bg-gray-300 rounded-full mr-3"}),D.jsx("span",{children:"Senior Associate Engineer"})]})]})]})})]})]})})}function J2(){const i=[{title:"Backend",icon:HE,skills:zt.skills.backend},{title:"Database",icon:UE,skills:zt.skills.database},{title:"Frontend",icon:BE,skills:zt.skills.frontend},{title:"Tools & Testing",icon:GE,skills:zt.skills.tools}];return D.jsx("section",{id:"skills",className:"py-20 bg-gray-50",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[D.jsxs("div",{className:"text-center mb-16 animate-fade-in-up",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-black mb-6",children:"Technical Skills"}),D.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"}),D.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Specialized in backend development with expertise in modern frameworks and databases"})]}),D.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:i.map((e,t)=>{const r=e.icon;return D.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up",style:{animationDelay:`${t*.1}s`},children:[D.jsxs("div",{className:"text-center mb-4",children:[D.jsx(r,{className:"w-8 h-8 text-black mb-3 mx-auto"}),D.jsx("h3",{className:"text-xl font-semibold text-black",children:e.title})]}),D.jsx("ul",{className:"text-gray-600 space-y-2",children:e.skills.map((o,a)=>D.jsx("li",{className:"text-sm",children:o},a))})]},e.title)})})]})})}function Q2(){return D.jsx("section",{id:"experience",className:"py-20 bg-white",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[D.jsxs("div",{className:"text-center mb-16 animate-fade-in-up",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-black mb-6",children:"Work Experience"}),D.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"})]}),D.jsxs("div",{className:"relative",children:[D.jsx("div",{className:"absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-black to-gray-600"}),zt.experience.map((i,e)=>D.jsxs("div",{className:`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${e%2===0?"animate-fade-in-right":"animate-fade-in-left"}`,children:[D.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-black rounded-full border-4 border-white shadow-lg absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"}),D.jsx("div",{className:`ml-12 md:ml-0 ${e%2===0?"md:w-1/2 md:pl-8 md:ml-auto":"md:w-1/2 md:pr-8 md:text-right"}`,children:D.jsxs("div",{className:"bg-gray-50 p-6 rounded-xl shadow-elegant",children:[D.jsx("h3",{className:"text-xl font-semibold text-black mb-2",children:i.title}),D.jsx("p",{className:"text-gray-600 font-medium mb-2",children:i.company}),D.jsx("p",{className:"text-sm text-gray-500 mb-4",children:i.duration}),D.jsx("ul",{className:"text-gray-600 space-y-2",children:i.responsibilities.map((t,r)=>D.jsxs("li",{className:"text-sm",children:["• ",t]},r))})]})})]},e))]})]})})}function eP(){return D.jsx("section",{id:"education",className:"py-20 bg-gray-50",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[D.jsxs("div",{className:"text-center mb-16 animate-fade-in-up",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-black mb-6",children:"Education & Learning"}),D.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"})]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[D.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-left",children:[D.jsxs("div",{className:"flex items-center mb-6",children:[D.jsx(FE,{className:"w-8 h-8 text-black mr-4"}),D.jsx("h3",{className:"text-2xl font-semibold text-black",children:"Formal Education"})]}),D.jsx("div",{className:"space-y-6",children:zt.education.map((i,e)=>D.jsxs("div",{className:"border-l-4 border-black pl-4",children:[D.jsx("h4",{className:"font-semibold text-black",children:i.degree}),D.jsx("p",{className:"text-gray-600",children:i.field}),i.major&&D.jsxs("p",{className:"text-gray-600",children:["Major: ",i.major]}),D.jsx("p",{className:"text-sm text-gray-500",children:i.school}),D.jsx("p",{className:"text-sm text-gray-500",children:i.duration})]},e))})]}),D.jsxs("div",{className:"bg-gradient-to-br from-black to-gray-800 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 text-white animate-fade-in-right",children:[D.jsxs("div",{className:"flex items-center mb-6",children:[D.jsx(LE,{className:"w-8 h-8 mr-4"}),D.jsx("h3",{className:"text-2xl font-semibold",children:"Continuous Learning"})]}),D.jsxs("div",{className:"space-y-4",children:[zt.learning.map((i,e)=>D.jsxs("div",{children:[D.jsx("h4",{className:"font-semibold mb-2",children:i.title}),D.jsxs("p",{className:"text-gray-300 text-sm",children:["By ",i.instructor," • ",i.platform]})]},e)),D.jsxs("div",{className:"mt-6",children:[D.jsx("h4",{className:"font-semibold mb-3",children:"Professional Development Focus:"}),D.jsxs("ul",{className:"text-gray-300 space-y-2",children:[D.jsx("li",{children:"• Backend Architecture & Scalability"}),D.jsx("li",{children:"• API Design & Integration"}),D.jsx("li",{children:"• Database Optimization"}),D.jsx("li",{children:"• Testing & Quality Assurance"})]})]})]})]})]})]})})}function tP(){return D.jsx("section",{id:"contact",className:"py-20 bg-white",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[D.jsxs("div",{className:"text-center mb-16 animate-fade-in-up",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-black mb-6",children:"Get In Touch"}),D.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"}),D.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"I'm always interested in hearing about new opportunities and connecting with fellow developers."})]}),D.jsxs("div",{className:"grid md:grid-cols-3 gap-8 max-w-4xl mx-auto",children:[D.jsxs("div",{className:"text-center bg-gray-50 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up",children:[D.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4",children:D.jsx(Cc,{className:"w-6 h-6 text-white"})}),D.jsx("h3",{className:"text-lg font-semibold text-black mb-2",children:"Email"}),D.jsx("a",{href:`mailto:${zt.personal.email}`,className:"text-gray-600 hover:text-black transition-colors duration-300",children:zt.personal.email})]}),D.jsxs("div",{className:"text-center bg-gray-50 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up",style:{animationDelay:"0.1s"},children:[D.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4",children:D.jsx(VE,{className:"w-6 h-6 text-white"})}),D.jsx("h3",{className:"text-lg font-semibold text-black mb-2",children:"Phone"}),D.jsx("a",{href:`tel:${zt.personal.phone.replace(/-/g,"")}`,className:"text-gray-600 hover:text-black transition-colors duration-300",children:zt.personal.phone})]}),D.jsxs("div",{className:"text-center bg-gray-50 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up",style:{animationDelay:"0.2s"},children:[D.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4",children:D.jsx(kE,{className:"w-6 h-6 text-white"})}),D.jsx("h3",{className:"text-lg font-semibold text-black mb-2",children:"Location"}),D.jsx("p",{className:"text-gray-600",children:zt.personal.location})]})]}),D.jsxs("div",{className:"flex justify-center space-x-6 mt-12",children:[D.jsx("a",{href:zt.personal.github,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-elegant",children:D.jsx(j0,{className:"w-6 h-6"})}),D.jsx("a",{href:zt.personal.linkedin,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-elegant",children:D.jsx(X0,{className:"w-6 h-6"})}),D.jsx("a",{href:`mailto:${zt.personal.email}`,className:"w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-elegant",children:D.jsx(Cc,{className:"w-6 h-6"})})]})]})})}function nP(){const i=()=>{const e=document.createElement("a");e.href="/resume.pdf",e.download="Rujiwat_Pithaksiripan_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)};return D.jsxs("div",{className:"min-h-screen bg-white",children:[D.jsx(tT,{}),D.jsxs("main",{children:[D.jsx(K2,{}),D.jsx(Z2,{}),D.jsx(J2,{}),D.jsx(Q2,{}),D.jsx(eP,{}),D.jsx(tP,{})]}),D.jsx("footer",{className:"bg-black text-white py-8",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6 text-center",children:[D.jsx("p",{className:"text-gray-300",children:"© 2025 Rujiwat Pithaksiripan. All rights reserved."}),D.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Built with passion for clean code and elegant design."})]})}),D.jsx("div",{className:"fixed bottom-8 right-8 z-50",children:D.jsx(Ea,{onClick:i,className:"bg-gradient-to-br from-black to-gray-800 text-white p-4 rounded-full shadow-elegant hover:shadow-elegant-hover transform hover:scale-110 transition-all duration-300 w-14 h-14",title:"Download Resume",children:D.jsx(OE,{className:"w-5 h-5"})})})]})}const v_=W.forwardRef(({className:i,...e},t)=>D.jsx("div",{ref:t,className:zn("rounded-lg border bg-card text-card-foreground shadow-sm",i),...e}));v_.displayName="Card";const iP=W.forwardRef(({className:i,...e},t)=>D.jsx("div",{ref:t,className:zn("flex flex-col space-y-1.5 p-6",i),...e}));iP.displayName="CardHeader";const rP=W.forwardRef(({className:i,...e},t)=>D.jsx("div",{ref:t,className:zn("text-2xl font-semibold leading-none tracking-tight",i),...e}));rP.displayName="CardTitle";const sP=W.forwardRef(({className:i,...e},t)=>D.jsx("div",{ref:t,className:zn("text-sm text-muted-foreground",i),...e}));sP.displayName="CardDescription";const x_=W.forwardRef(({className:i,...e},t)=>D.jsx("div",{ref:t,className:zn("p-6 pt-0",i),...e}));x_.displayName="CardContent";const oP=W.forwardRef(({className:i,...e},t)=>D.jsx("div",{ref:t,className:zn("flex items-center p-6 pt-0",i),...e}));oP.displayName="CardFooter";function aP(){const i=()=>{window.location.href="/"};return D.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:D.jsx(v_,{className:"w-full max-w-md mx-4",children:D.jsxs(x_,{className:"pt-6",children:[D.jsxs("div",{className:"flex mb-4 gap-2",children:[D.jsx(IE,{className:"h-8 w-8 text-red-500"}),D.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),D.jsx(Ea,{onClick:i,className:"mt-6 w-full",children:"Go to Home Page"})]})})})}function lP(){return D.jsxs(bS,{children:[D.jsx(kg,{path:"/",component:nP}),D.jsx(kg,{component:aP})]})}function cP(){return D.jsxs(Qw,{children:[D.jsx(TM,{}),D.jsx(lP,{})]})}sS.createRoot(document.getElementById("root")).render(D.jsx(cP,{}));
