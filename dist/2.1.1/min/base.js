(function(e,t,r,o,n){"use strict";t();var i="qoopido/base",c=function c(){return r.qoopido.shared.prepareModule(i,e,arguments)};r.qoopido=r.qoopido||{},r.qoopido.modules=r.qoopido.modules||{},r.qoopido.shared=r.qoopido.shared||{},r.qoopido.shared.prepareModule=function(e,t,c,p){for(var u=(i=e.split("/")).splice(i.length-1,1)[0],a=r,d=r.qoopido.modules,s=0;i[s]!==n;s++)a[i[s]]=a[i[s]]||{},a=a[i[s]];return[].push.apply(c,[r,o,n]),a[u]=d[e]=p===!0?t.apply(null,c).create():t.apply(null,c)},"function"==typeof define&&define.amd?define(c):c()})(function(e,t,r){"use strict";return{create:function(){var e=Object.create(this,Object.getOwnPropertyDescriptors(this));return e._constructor&&e._constructor.apply(e,arguments),e.create=e.extend=r,e},extend:function(e){return e=e||{},e._parent=Object.create(this,Object.getOwnPropertyDescriptors(this)),Object.create(this,Object.getOwnPropertyDescriptors(e))}}},function(){"use strict";var e,t,r,o,n,i,c,p,u,a,d,s=function s(){},f=null,l="function",y="object",_="undefined",b=Function.prototype.call,O=Object.prototype,j=O.__proto__===f;if(void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t,r=this,o=[].slice.call(arguments,1);if(typeof r!==l)throw new TypeError("Function.prototype.bind called on incompatible "+r);return t=function(){if(this instanceof t){var n=r.apply(this,o.concat([].slice.call(arguments,0)));return Object(n)===n?n:this}return r.apply(e,o.concat([].slice.call(arguments,0)))},r.prototype&&(s.prototype=r.prototype,t.prototype=new s,s.prototype=f),t}),e=b.bind(O.hasOwnProperty),t=function t(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel"in e}catch(t){}},r=function r(e){try{return e.sentinel=0,0===Object.getOwnPropertyDescriptor(e,"sentinel").value}catch(t){}},void 0===Object.keys){var v,w=!0,h=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];for(v in{toString:f})w=!1;Object.keys=function(t){var r,o=[];if(typeof t!==y&&typeof t!==l||t===f)throw new TypeError("Object.keys called on a non-object");for(r in t)e(t,r)&&o.push(r);if(w===!0){var n;for(n=0;void 0!==(r=h[n]);n++)e(t,r)&&o.push(r)}return o}}if((o=e(O,"__defineGetter__"))===!0&&(n=b.bind(O.__defineGetter__),i=b.bind(O.__defineSetter__),c=b.bind(O.__lookupGetter__),p=b.bind(O.__lookupSetter__)),Object.defineProperty&&((!t({})||"undefined"!=typeof document&&!t(document.createElement("div")))&&(u=Object.defineProperty,a=Object.defineProperties),(!r({})||"undefined"!=typeof document&&!r(document.createElement("div")))&&(d=Object.getOwnPropertyDescriptor)),(void 0===Object.defineProperty||u!==f)&&(Object.defineProperty=function(t,r,a){if(typeof t!==y&&typeof t!==l||t===f)throw new TypeError("Object.defineProperty called on non-object: "+t);if(typeof a!==y&&typeof a!==l||a===f)throw new TypeError("Property description must be an object: "+a);if(u!==f)try{return u.call(Object,t,r,a)}catch(d){}if(e(a,"value"))if(o&&(c(t,r)||p(t,r))){var s=t.__proto__;t.__proto__=O,delete t[r],t[r]=a.value,t.__proto__=s}else t[r]=a.value;else{if(o===!1)throw new TypeError("getters & setters can not be defined on this javascript engine");e(a,"get")&&n(t,r,a.get),e(a,"set")&&i(t,r,a.set)}return t}),(void 0===Object.defineProperties||a!==f)&&(Object.defineProperties=function(t,r){var o;if(a)try{return a.call(Object,t,r)}catch(n){}for(o in r)e(r,o)&&"__proto__"!==o&&Object.defineProperty(t,o,r[o]);return t}),(void 0===Object.getOwnPropertyDescriptor||d!==f)&&(Object.getOwnPropertyDescriptor=function(t,r){var n={enumerable:!0,configurable:!0};if(typeof t!==y&&typeof t!==l||t===f)throw new TypeError("Object.getOwnPropertyDescriptor called on non-object: "+t);if(d!==f)try{return d.call(Object,t,r)}catch(i){}if(e(t,r)){if(o===!0){var u,a,s=t.__proto__;if(t.__proto__=O,u=c(t,r),a=p(t,r),t.__proto__=s,u||a)return u&&(n.get=u),a&&(n.set=a),n}return n.value=t[r],n.writable=!0,n}}),void 0===Object.getOwnPropertyDescriptors&&(Object.getOwnPropertyDescriptors=function(e){var t,r,o={},n=Object.getOwnPropertyNames(e);for(t=0;void 0!==(r=n[t]);t++)o[r]=Object.getOwnPropertyDescriptor(e,r);return o}),void 0===Object.getOwnPropertyNames&&(Object.getOwnPropertyNames=function(e){return Object.keys(e)}),void 0===Object.create){var m;m=j||typeof document===_?function(){return{__proto__:f}}:function(){var e,t=document.createElement("iframe"),r=document.body||document.documentElement;return t.style.display="none",r.appendChild(t),t.src="javascript:",e=t.contentWindow.pointerObjectPrototype,delete e.constructor,delete e.hasOwnProperty,delete e.propertyIsEnumerable,delete e.isPrototypeOf,delete e.toLocaleString,delete e.toString,delete e.valueOf,e.__proto__=f,r.removeChild(t),t=f,s.prototype=e,m=function(){return new s},new s},Object.create=function(e,t){function r(){}var o;if(e===f)o=m();else{if(typeof e!==y&&typeof e!==l)throw new TypeError("Object prototype may only be an Object or null");r.prototype=e,o=new r,o.__proto__=e}return void 0!==t&&Object.defineProperties(o,t),o}}},window,document);