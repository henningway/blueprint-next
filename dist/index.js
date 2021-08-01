"use strict";function t(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function n(n){return function r(e){return 0===arguments.length||t(e)?r:n.apply(this,arguments)}}function r(r){return function e(u,i){switch(arguments.length){case 0:return e;case 1:return t(u)?e:n((function(t){return r(u,t)}));default:return t(u)&&t(i)?e:t(u)?n((function(t){return r(t,i)})):t(i)?n((function(t){return r(u,t)})):r(u,i)}}}function e(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,i){return n.apply(this,arguments)};case 6:return function(t,r,e,u,i,a){return n.apply(this,arguments)};case 7:return function(t,r,e,u,i,a,c){return n.apply(this,arguments)};case 8:return function(t,r,e,u,i,a,c,o){return n.apply(this,arguments)};case 9:return function(t,r,e,u,i,a,c,o,s){return n.apply(this,arguments)};case 10:return function(t,r,e,u,i,a,c,o,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function u(n,r,i){return function(){for(var a=[],c=0,o=n,s=0;s<r.length||c<arguments.length;){var f;s<r.length&&(!t(r[s])||c>=arguments.length)?f=r[s]:(f=arguments[c],c+=1),a[s]=f,t(f)||(o-=1),s+=1}return o<=0?i.apply(this,a):e(o,u(n,a,i))}}var i=r((function(t,r){return 1===t?n(r):e(t,u(t,[],r))}));function a(e){return function u(i,a,c){switch(arguments.length){case 0:return u;case 1:return t(i)?u:r((function(t,n){return e(i,t,n)}));case 2:return t(i)&&t(a)?u:t(i)?r((function(t,n){return e(t,a,n)})):t(a)?r((function(t,n){return e(i,t,n)})):n((function(t){return e(i,a,t)}));default:return t(i)&&t(a)&&t(c)?u:t(i)&&t(a)?r((function(t,n){return e(t,n,c)})):t(i)&&t(c)?r((function(t,n){return e(t,a,n)})):t(a)&&t(c)?r((function(t,n){return e(i,t,n)})):t(i)?n((function(t){return e(t,a,c)})):t(a)?n((function(t){return e(i,t,c)})):t(c)?n((function(t){return e(i,a,t)})):e(i,a,c)}}}var c=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function o(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function s(t,n,r){return function(){if(0===arguments.length)return r();var e=Array.prototype.slice.call(arguments,0),u=e.pop();if(!c(u)){for(var i=0;i<t.length;){if("function"==typeof u[t[i]])return u[t[i]].apply(u,e);i+=1}if(o(u)){var a=n.apply(null,e);return a(u)}}return r.apply(this,arguments)}}var f={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};function l(t){return"[object String]"===Object.prototype.toString.call(t)}var p=n((function(t){return!!c(t)||!!t&&("object"==typeof t&&(!l(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),y=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var h=r((function(t,n){return e(t.length,(function(){return t.apply(n,arguments)}))}));function d(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function g(t,n,r,e){return t["@@transducer/result"](r[e](h(t["@@transducer/step"],t),n))}var v="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function m(t,n,r){if("function"==typeof t&&(t=function(t){return new y(t)}(t)),p(r))return function(t,n,r){for(var e=0,u=r.length;e<u;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return g(t,n,r,"fantasy-land/reduce");if(null!=r[v])return d(t,n,r[v]());if("function"==typeof r.next)return d(t,n,r);if("function"==typeof r.reduce)return g(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}var b=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=f.init,t.prototype["@@transducer/result"]=f.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),O=r((function(t,n){return new b(t,n)}));function j(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var _=Object.prototype.toString,S=function(){return"[object Arguments]"===_.call(arguments)?function(t){return"[object Arguments]"===_.call(t)}:function(t){return j("callee",t)}}(),w=!{toString:null}.propertyIsEnumerable("toString"),A=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],x=function(){return arguments.propertyIsEnumerable("length")}(),E=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},k="function"!=typeof Object.keys||x?n((function(t){if(Object(t)!==t)return[];var n,r,e=[],u=x&&S(t);for(n in t)!j(n,t)||u&&"length"===n||(e[e.length]=n);if(w)for(r=A.length-1;r>=0;)j(n=A[r],t)&&!E(e,n)&&(e[e.length]=n),r-=1;return e})):n((function(t){return Object(t)!==t?[]:Object.keys(t)})),q=r(s(["fantasy-land/map","map"],O,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return i(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return m((function(r,e){return r[e]=t(n[e]),r}),{},k(n));default:return function(t,n){for(var r=0,e=n.length,u=Array(e);r<e;)u[r]=t(n[r]),r+=1;return u}(t,n)}}))),T=Number.isInteger||function(t){return t<<0===t},M=r((function(t,n){var r=t<0?n.length+t:t;return l(n)?n.charAt(r):n[r]})),F=r((function(t,n){return t.map((function(t){for(var r,e=n,u=0;u<t.length;){if(null==e)return;r=t[u],e=T(r)?M(r,e):e[r],u+=1}return e}))})),z=r((function(t,n){return F([t],n)[0]})),N=r((function(t,n){return z([t],n)})),P=r((function(t,n){return q(N(t),n)})),I=a(m),K=r((function(t,n){return function(t,n){var r;n=n||[];var e=(t=t||[]).length,u=n.length,i=[];for(r=0;r<e;)i[i.length]=t[r],r+=1;for(r=0;r<u;)i[i.length]=n[r],r+=1;return i}(n,[t])})),U=n((function(t){for(var n=k(t),r=n.length,e=[],u=0;u<r;)e[u]=t[n[u]],u+=1;return e}));var B=function(t){var n=function(t){return{"@@transducer/init":f.init,"@@transducer/result":function(n){return t["@@transducer/result"](n)},"@@transducer/step":function(n,r){var e=t["@@transducer/step"](n,r);return e["@@transducer/reduced"]?{"@@transducer/value":e,"@@transducer/reduced":!0}:e}}}(t);return{"@@transducer/init":f.init,"@@transducer/result":function(t){return n["@@transducer/result"](t)},"@@transducer/step":function(t,r){return p(r)?m(n,t,r):m(n,t,[r])}}},C=r(s(["fantasy-land/chain","chain"],r((function(t,n){return q(t,B(n))})),(function(t,n){return"function"==typeof n?function(r){return t(n(r))(r)}:(r=!1,function t(n){for(var e,u,i,a=[],c=0,o=n.length;c<o;){if(p(n[c]))for(i=0,u=(e=r?t(n[c]):n[c]).length;i<u;)a[a.length]=e[i],i+=1;else a[a.length]=n[c];c+=1}return a})(q(t,n));var r}))),D=n((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function R(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function G(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return c(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}var L=n(G("tail",a(G("slice",(function(t,n,r){return Array.prototype.slice.call(r,t,n)})))(1,1/0)));function W(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}function X(t,n,r){for(var e=0,u=r.length;e<u;){if(t(n,r[e]))return!0;e+=1}return!1}var H="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};function J(t,n,r,e){var u=W(t);function i(t,n){return Q(t,n,r.slice(),e.slice())}return!X((function(t,n){return!X(i,n,t)}),W(n),u)}function Q(t,n,r,e){if(H(t,n))return!0;var u,i,a=D(t);if(a!==D(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(a){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(i=String(u).match(/^function (\w*)/))?"":i[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!H(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!H(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var c=r.length-1;c>=0;){if(r[c]===t)return e[c]===n;c-=1}switch(a){case"Map":return t.size===n.size&&J(t.entries(),n.entries(),r.concat([t]),e.concat([n]));case"Set":return t.size===n.size&&J(t.values(),n.values(),r.concat([t]),e.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=k(t);if(o.length!==k(n).length)return!1;var s=r.concat([t]),f=e.concat([n]);for(c=o.length-1;c>=0;){var l=o[c];if(!j(l,n)||!Q(n[l],t[l],s,f))return!1;c-=1}return!0}var V=r((function(t,n){return Q(t,n,[],[])}));function Y(t,n){return function(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!=n){for(;r<t.length;){if("number"==typeof(u=t[r])&&u!=u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(V(t[r],n))return r;r+=1}return-1}(n,t,0)>=0}function Z(t){return"[object Object]"===Object.prototype.toString.call(t)}var $=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=f.init,t.prototype["@@transducer/result"]=f.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),tt=r(s(["filter"],r((function(t,n){return new $(t,n)})),(function(t,n){return Z(n)?m((function(r,e){return t(n[e])&&(r[e]=n[e]),r}),{},k(n)):function(t,n){for(var r=0,e=n.length,u=[];r<e;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u}(t,n)})));function nt(t,n,r){var e,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!r._items["-0"]||(n&&(r._items["-0"]=!0),!1):null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?t in r._items[u]||(n&&(r._items[u][t]=!0),!1):(n&&(r._items[u]={},r._items[u][t]=!0),!1);case"boolean":if(u in r._items){var i=t?1:0;return!!r._items[u][i]||(n&&(r._items[u][i]=!0),!1)}return n&&(r._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?!!Y(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1);case"undefined":return!!r._items[u]||(n&&(r._items[u]=!0),!1);case"object":if(null===t)return!!r._items.null||(n&&(r._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in r._items?!!Y(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1)}}var rt=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!nt(t,!0,this)},t.prototype.has=function(t){return nt(t,!1,this)},t}(),et=r((function(t,n){for(var r=[],e=0,u=t.length,i=n.length,a=new rt,c=0;c<i;c+=1)a.add(n[c]);for(;e<u;)a.add(t[e])&&(r[r.length]=t[e]),e+=1;return r})),ut=n((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():c(t)?[]:l(t)?"":Z(t)?{}:S(t)?function(){return arguments}():void 0})),it=n((function(t){return null!=t&&V(t,ut(t))}));var at=n((function(t){return null!=t&&(n=t.length,"[object Number]"===Object.prototype.toString.call(n))?t.length:NaN;var n})),ct=n((function(t){var n=[];for(var r in t)j(r,t)&&(n[n.length]=[r,t[r]]);return n}));const ot=(t,n)=>tt(t,n),st=t=>ot((t=>!it(t)),t);var ft;!function(t){t.TypeMismatch="TypeMismatch",t.MissingKey="MissingKey",t.ExtraKey="ExtraKey"}(ft||(ft={}));const lt=(t,n,r,e)=>({type:t,schema:n.name,value:r,path:e});function pt(t){return{validate:n=>{const r=st(t.validate(n,[]));return 0===at(r)},explain:n=>{const r=st(t.validate(n,[]));return at(r)>0?{schema:t.name,value:n,errors:r}:null}}}var yt={and:(...t)=>({name:"and",children:t,accept(t){return t.doForAnd(this)},validate:(n,r)=>q((t=>t.validate(n,r)),t)}),explain:function(t,n){return pt(t).explain(n)},greaterThan:t=>({name:"greaterThan",children:[],accept(t){return t.doForGreaterThan(this)},validate(n,r){return n>t?[]:[lt(ft.TypeMismatch,this,n,r)]}}),number:{name:"number",children:[],accept(t){return t.doForNumber(this)},validate(t,n){return"number"==typeof t?[]:[lt(ft.TypeMismatch,this,t,n)]}},object:t=>{let n=!1;function r(){return function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return e(arguments[0].length,I(R,arguments[0],L(arguments)))}(ct,q((t=>({key:t[0],schema:t[1]}))))(t)}function u(t){return ot((n=>!t.hasOwnProperty(n)),P("key",r()))}function i(r){return n?et(k(r),k(t)):[]}return{name:"object",children:U(t),accept(t){return t.doForObject(this)},validate(t,n){return function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;const n=Object.getPrototypeOf(t);return null===n||n===Object.prototype}(t)?[...q((r=>lt(ft.MissingKey,this,t,K(r,n))))(u(t)),...q((r=>lt(ft.ExtraKey,this,t,K(r,n))))(i(t)),...C((({schema:r,key:e})=>r.validate(t[e],K(e,n))))(r())]:[lt(ft.TypeMismatch,this,t,n)]},get closed(){return n=!0,this}}},string:{name:"string",children:[],accept(t){return t.doForString(this)},validate(t,n){return"string"==typeof t?[]:[lt(ft.TypeMismatch,this,t,n)]}},traverse:function t(n,r){const e=q((r=>t(n,r)),r.children);return[n(r),...e]},validate:function(t,n){return pt(t).validate(n)}};module.exports=yt;
//# sourceMappingURL=index.js.map
