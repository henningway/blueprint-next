function t(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function n(n){return function e(r){return 0===arguments.length||t(r)?e:n.apply(this,arguments)}}function e(e){return function r(u,i){switch(arguments.length){case 0:return r;case 1:return t(u)?r:n((function(t){return e(u,t)}));default:return t(u)&&t(i)?r:t(u)?n((function(t){return e(t,i)})):t(i)?n((function(t){return e(u,t)})):e(u,i)}}}function r(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,u){return n.apply(this,arguments)};case 5:return function(t,e,r,u,i){return n.apply(this,arguments)};case 6:return function(t,e,r,u,i,a){return n.apply(this,arguments)};case 7:return function(t,e,r,u,i,a,o){return n.apply(this,arguments)};case 8:return function(t,e,r,u,i,a,o,c){return n.apply(this,arguments)};case 9:return function(t,e,r,u,i,a,o,c,f){return n.apply(this,arguments)};case 10:return function(t,e,r,u,i,a,o,c,f,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function u(n,e,i){return function(){for(var a=[],o=0,c=n,f=0;f<e.length||o<arguments.length;){var s;f<e.length&&(!t(e[f])||o>=arguments.length)?s=e[f]:(s=arguments[o],o+=1),a[f]=s,t(s)||(c-=1),f+=1}return c<=0?i.apply(this,a):r(c,u(n,a,i))}}var i=e((function(t,e){return 1===t?n(e):r(t,u(t,[],e))}));function a(r){return function u(i,a,o){switch(arguments.length){case 0:return u;case 1:return t(i)?u:e((function(t,n){return r(i,t,n)}));case 2:return t(i)&&t(a)?u:t(i)?e((function(t,n){return r(t,a,n)})):t(a)?e((function(t,n){return r(i,t,n)})):n((function(t){return r(i,a,t)}));default:return t(i)&&t(a)&&t(o)?u:t(i)&&t(a)?e((function(t,n){return r(t,n,o)})):t(i)&&t(o)?e((function(t,n){return r(t,a,n)})):t(a)&&t(o)?e((function(t,n){return r(i,t,n)})):t(i)?n((function(t){return r(t,a,o)})):t(a)?n((function(t){return r(i,t,o)})):t(o)?n((function(t){return r(i,a,t)})):r(i,a,o)}}}var o=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function c(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function f(t,n,e){return function(){if(0===arguments.length)return e();var r=Array.prototype.slice.call(arguments,0),u=r.pop();if(!o(u)){for(var i=0;i<t.length;){if("function"==typeof u[t[i]])return u[t[i]].apply(u,r);i+=1}if(c(u)){var a=n.apply(null,r);return a(u)}}return e.apply(this,arguments)}}var s=function(){return this.xf["@@transducer/init"]()},l=function(t){return this.xf["@@transducer/result"](t)};function p(t){return"[object String]"===Object.prototype.toString.call(t)}var y=n((function(t){return!!o(t)||!!t&&("object"==typeof t&&(!p(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),h=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var d=e((function(t,n){return r(t.length,(function(){return t.apply(n,arguments)}))}));function g(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function v(t,n,e,r){return t["@@transducer/result"](e[r](d(t["@@transducer/step"],t),n))}var m="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function b(t,n,e){if("function"==typeof t&&(t=function(t){return new h(t)}(t)),y(e))return function(t,n,e){for(var r=0,u=e.length;r<u;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return v(t,n,e,"fantasy-land/reduce");if(null!=e[m])return g(t,n,e[m]());if("function"==typeof e.next)return g(t,n,e);if("function"==typeof e.reduce)return v(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var O=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=s,t.prototype["@@transducer/result"]=l,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),j=e((function(t,n){return new O(t,n)}));function _(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var S=Object.prototype.toString,w=function(){return"[object Arguments]"===S.call(arguments)?function(t){return"[object Arguments]"===S.call(t)}:function(t){return _("callee",t)}}(),A=!{toString:null}.propertyIsEnumerable("toString"),x=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],E=function(){return arguments.propertyIsEnumerable("length")}(),k=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},q="function"!=typeof Object.keys||E?n((function(t){if(Object(t)!==t)return[];var n,e,r=[],u=E&&w(t);for(n in t)!_(n,t)||u&&"length"===n||(r[r.length]=n);if(A)for(e=x.length-1;e>=0;)_(n=x[e],t)&&!k(r,n)&&(r[r.length]=n),e-=1;return r})):n((function(t){return Object(t)!==t?[]:Object.keys(t)})),M=e(f(["fantasy-land/map","map"],j,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return i(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return b((function(e,r){return e[r]=t(n[r]),e}),{},q(n));default:return function(t,n){for(var e=0,r=n.length,u=Array(r);e<r;)u[e]=t(n[e]),e+=1;return u}(t,n)}}))),T=Number.isInteger||function(t){return t<<0===t},z=e((function(t,n){var e=t<0?n.length+t:t;return p(n)?n.charAt(e):n[e]})),P=e((function(t,n){return t.map((function(t){for(var e,r=n,u=0;u<t.length;){if(null==r)return;e=t[u],r=T(e)?z(e,r):r[e],u+=1}return r}))})),I=e((function(t,n){return P([t],n)[0]})),N=e((function(t,n){return I([t],n)})),K=e((function(t,n){return M(N(t),n)})),U=a(b),F=e((function(t,n){return function(t,n){var e;n=n||[];var r=(t=t||[]).length,u=n.length,i=[];for(e=0;e<r;)i[i.length]=t[e],e+=1;for(e=0;e<u;)i[i.length]=n[e],e+=1;return i}(n,[t])}));function B(t){return function n(e){for(var r,u,i,a=[],o=0,c=e.length;o<c;){if(y(e[o]))for(i=0,u=(r=t?n(e[o]):e[o]).length;i<u;)a[a.length]=r[i],i+=1;else a[a.length]=e[o];o+=1}return a}}var C=n((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function D(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function R(t,n){return function(){var e=arguments.length;if(0===e)return n();var r=arguments[e-1];return o(r)||"function"!=typeof r[t]?n.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,e-1))}}var L=n(R("tail",a(R("slice",(function(t,n,e){return Array.prototype.slice.call(e,t,n)})))(1,1/0)));function W(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}function X(t,n,e){for(var r=0,u=e.length;r<u;){if(t(n,e[r]))return!0;r+=1}return!1}var G="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};function H(t,n,e,r){var u=W(t);function i(t,n){return J(t,n,e.slice(),r.slice())}return!X((function(t,n){return!X(i,n,t)}),W(n),u)}function J(t,n,e,r){if(G(t,n))return!0;var u,i,a=C(t);if(a!==C(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(a){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(i=String(u).match(/^function (\w*)/))?"":i[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!G(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!G(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var o=e.length-1;o>=0;){if(e[o]===t)return r[o]===n;o-=1}switch(a){case"Map":return t.size===n.size&&H(t.entries(),n.entries(),e.concat([t]),r.concat([n]));case"Set":return t.size===n.size&&H(t.values(),n.values(),e.concat([t]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=q(t);if(c.length!==q(n).length)return!1;var f=e.concat([t]),s=r.concat([n]);for(o=c.length-1;o>=0;){var l=c[o];if(!_(l,n)||!J(n[l],t[l],f,s))return!1;o-=1}return!0}var Q=e((function(t,n){return J(t,n,[],[])}));function V(t,n){return function(t,n,e){var r,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(r=1/n;e<t.length;){if(0===(u=t[e])&&1/u===r)return e;e+=1}return-1}if(n!=n){for(;e<t.length;){if("number"==typeof(u=t[e])&&u!=u)return e;e+=1}return-1}return t.indexOf(n,e);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,e);case"object":if(null===n)return t.indexOf(n,e)}for(;e<t.length;){if(Q(t[e],n))return e;e+=1}return-1}(n,t,0)>=0}function Y(t){return"[object Object]"===Object.prototype.toString.call(t)}var Z=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=s,t.prototype["@@transducer/result"]=l,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),$=e(f(["filter"],e((function(t,n){return new Z(t,n)})),(function(t,n){return Y(n)?b((function(e,r){return t(n[r])&&(e[r]=n[r]),e}),{},q(n)):function(t,n){for(var e=0,r=n.length,u=[];e<r;)t(n[e])&&(u[u.length]=n[e]),e+=1;return u}(t,n)})));function tt(t,n,e){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!e._items["-0"]||(n&&(e._items["-0"]=!0),!1):null!==e._nativeSet?n?(r=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===r):e._nativeSet.has(t):u in e._items?t in e._items[u]||(n&&(e._items[u][t]=!0),!1):(n&&(e._items[u]={},e._items[u][t]=!0),!1);case"boolean":if(u in e._items){var i=t?1:0;return!!e._items[u][i]||(n&&(e._items[u][i]=!0),!1)}return n&&(e._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==e._nativeSet?n?(r=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===r):e._nativeSet.has(t):u in e._items?!!V(t,e._items[u])||(n&&e._items[u].push(t),!1):(n&&(e._items[u]=[t]),!1);case"undefined":return!!e._items[u]||(n&&(e._items[u]=!0),!1);case"object":if(null===t)return!!e._items.null||(n&&(e._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in e._items?!!V(t,e._items[u])||(n&&e._items[u].push(t),!1):(n&&(e._items[u]=[t]),!1)}}var nt=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!tt(t,!0,this)},t.prototype.has=function(t){return tt(t,!1,this)},t}(),et=e((function(t,n){for(var e=[],r=0,u=t.length,i=n.length,a=new nt,o=0;o<i;o+=1)a.add(n[o]);for(;r<u;)a.add(t[r])&&(e[e.length]=t[r]),r+=1;return e})),rt=n((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():o(t)?[]:p(t)?"":Y(t)?{}:w(t)?function(){return arguments}():void 0})),ut=n(B(!0)),it=n((function(t){return null!=t&&Q(t,rt(t))}));var at=n((function(t){return null!=t&&(n=t.length,"[object Number]"===Object.prototype.toString.call(n))?t.length:NaN;var n})),ot=n((function(t){var n=[];for(var e in t)_(e,t)&&(n[n.length]=[e,t[e]]);return n}));const ct=(t,n)=>$(t,n),ft=t=>ct((t=>!it(t)),t);var st;!function(t){t.TypeMismatch="TypeMismatch",t.MissingKey="MissingKey",t.ExtraKey="ExtraKey"}(st||(st={}));const lt=(t,n,e,r)=>({type:t,schema:n.name,value:e,path:r});function pt(t){return{validate:n=>{const e=ft(t.validate(n,[]));return 0===at(e)},explain:n=>{const e=ft(t.validate(n,[]));return at(e)>0?{schema:t.name,value:n,errors:e}:null}}}var yt={and:(...t)=>({name:"and",validate:(n,e)=>M((t=>t.validate(n,e)),t)}),explain:function(t,n){return pt(t).explain(n)},greaterThan:t=>({name:"greaterThan",validate(n,e){return n>t?[]:[lt(st.TypeMismatch,this,n,e)]}}),number:{name:"number",validate(t,n){return"number"==typeof t?[]:[lt(st.TypeMismatch,this,t,n)]}},object:t=>{let n=!1;const e=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return r(arguments[0].length,U(D,arguments[0],L(arguments)))}(ot,M((t=>({key:t[0],schema:t[1]}))))(t),u=t=>ct((n=>!t.hasOwnProperty(n)),K("key",e)),i=e=>n?et(q(e),q(t)):[];return{name:"object",validate(t,n){return function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;const n=Object.getPrototypeOf(t);return null===n||n===Object.prototype}(t)?[...M((e=>lt(st.MissingKey,this,t,F(e,n))))(u(t)),...M((e=>lt(st.ExtraKey,this,t,F(e,n))))(i(t)),...ut(M((({schema:e,key:r})=>e.validate(t[r],F(r,n))))(e))]:[lt(st.TypeMismatch,this,t,n)]},get closed(){return n=!0,this}}},string:{name:"string",validate(t,n){return"string"==typeof t?[]:[lt(st.TypeMismatch,this,t,n)]}},validate:function(t,n){return pt(t).validate(n)}};export{yt as default};
//# sourceMappingURL=index.esm.js.map