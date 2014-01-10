/*!
* Qoopido.js library v3.2.2, 2014-0-10
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e,t){t.register?t.register("polyfill/object/defineproperty",e):(t.modules=t.modules||{})["polyfill/object/defineproperty"]=e()}(function(){"use strict";if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var e=Object.defineProperty,t=Object.prototype.__defineGetter__,r=Object.prototype.__defineSetter__;Object.defineProperty=function(n,o,i){if(e)try{return e(n,o,i)}catch(l){}if(n!==Object(n))throw new TypeError("Object.defineProperty called on non-object");return t&&"get"in i&&t.call(n,o,i.get),r&&"set"in i&&r.call(n,o,i.set),"value"in i&&(n[o]=i.value),n}}return!0},window.qoopido=window.qoopido||{}),function(e,t){if(t.register){var r=[];Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()||r.push("./defineproperty"),t.register("polyfill/object/defineproperties",e,r)}else(t.modules=t.modules||{})["polyfill/object/defineproperties"]=e()}(function(){"use strict";return Object.defineProperties||(Object.defineProperties=function(e,t){if(e!==Object(e))throw new TypeError("Object.defineProperties called on non-object");var r;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&Object.defineProperty(e,r,t[r]);return e}),!0},window.qoopido=window.qoopido||{}),function(e,t){if(t.register){var r=[];Object.defineProperties||r.push("./defineproperties"),t.register("polyfill/object/create",e,r)}else(t.modules=t.modules||{})["polyfill/object/create"]=e()}(function(){"use strict";return Object.create||(Object.create=function(e,t){function r(){}if("object"!=typeof e)throw new TypeError;r.prototype=e;var n=new r;if(e&&(n.constructor=r),arguments.length>1){if(t!==Object(t))throw new TypeError;Object.defineProperties(n,t)}return n}),!0},window.qoopido=window.qoopido||{}),function(e,t){t.register?t.register("polyfill/object/getownpropertydescriptor",e):(t.modules=t.modules||{})["polyfill/object/getownpropertydescriptor"]=e()}(function(){"use strict";if(!Object.getOwnPropertyDescriptor||!function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()){var e=Object.getOwnPropertyDescriptor;Object.getOwnPropertyDescriptor=function(t,r){if(t!==Object(t))throw new TypeError;try{return e.call(Object,t,r)}catch(n){}return Object.prototype.hasOwnProperty.call(t,r)?{value:t[r],enumerable:!0,writable:!0,configurable:!0}:void 0}}return!0},window.qoopido=window.qoopido||{}),function(e,t,r,n,o,i){"use strict";function l(e){for(var t;(t=e.replace(d,""))!==e;)e=t;return e.replace(m,"")}var c,s,u=t.shared=t.shared||{},a=t.modules=t.modules||{},f=[],p=new RegExp("^\\.+\\/"),d=new RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),m=new RegExp("(^\\/)|\\.\\/","g");c=t.register=function(e,t,c,s){var f,d=e.split("/");return a[e]?a[e]:(f=function(){if(c){var f,m,h,g=d.slice(0,-1).join("/");for(f=0;(m=c[f])!==i;f++)h=p.test(m),h&&(m=l(g+"/"+m)),!a[m]&&arguments[f]&&(a[m]=arguments[f]),h&&!a[m]&&"undefined"!=typeof console&&console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",m))}return a[e]=t(a,u,d,r,n,o,i),s&&s(a[e]),a[e]},"function"==typeof define&&define.amd?c?define(c,f):define(f):f(),void 0)},s=t.registerSingleton=function(e,t,r){c(e,t,r,function(t){a[e]=t.create()})},Object.create||f.push("./polyfill/object/create"),Object.getOwnPropertyNames||f.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||f.push("./polyfill/object/getownpropertydescriptor"),c("base",e,f)}(function(e,t,r,n,o,i,l){"use strict";function c(e){var t,r,n={},o=Object.getOwnPropertyNames(e);for(t=0;(r=o[t])!==l;t++)n[r]=Object.getOwnPropertyDescriptor(e,r);return n}function s(){"undefined"!=typeof console&&console.error("[Qoopido.js] Operation prohibited on an actual instance")}return{create:function(){var e,t=Object.create(this,c(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=s,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,c(e))}}},window.qoopido=window.qoopido||{},navigator,window,document),function(e){window.qoopido.register("proxy",e,["./function/unique/uuid"])}(function(e){"use strict";return e.base.extend({_constructor:function(t,r){var n=Array.prototype.splice.call(arguments,2),o=function(){return r.apply(t,Array.prototype.slice.call(arguments,0).concat(n))};return o._quid=e["function/unique/uuid"](),o}})}),function(e){var t=["../proxy"];window.getComputedStyle||t.push("../polyfill/window/getcomputedstyle"),window.qoopido.register("dom/element",e,t)}(function(e,t,r,n,o,i,l){"use strict";function c(e){return e.target||(e.target=e.srcElement||i),3===e.target.nodeType&&(e.target=e.target.parentNode),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement),e}var s,u,a,f="object",p="string";return s=o.addEventListener?function(e,t){var r=this,n=r.element,o="".concat("listener[",e,"][",t._quid||t,"]");n[o]=function(e){t.call(this,c(e))},n.addEventListener(e,n[o],!1)}:function(e,t){var r,n=this,i=n.element;i["on"+e]!==l?(r="".concat("listener[",e,"][",t._quid||t,"]"),i[r]=function(){t.call(this,c(o.event))},i.attachEvent("on"+e,i[r])):(e="".concat("fake[",e,"]"),i[e]=null,i.attachEvent("onpropertychange",function(r){r.propertyName===e&&t.call(this,c(i[e]))}))},u=o.removeEventListener?function(e,t){var r=this,n=r.element,o="".concat("listener[",e,"][",t._quid||t,"]");n.removeEventListener(e,n[o],!1),delete n[o]}:function(e,t){var r=this,n=r.element,o="".concat("listener[",e,"][",t._quid||t,"]");n.detachEvent("on"+e,n[o]),delete n[o]},a=i.createEvent?function(e,t){var r=this,n=r.element,o=i.createEvent("HTMLEvents");o.initEvent(e,!0,!0),o.data=t,n.dispatchEvent(o)}:function(e,t){var r=this,n=r.element,o=i.createEventObject();o.type=o.eventType=e,o.data=t;try{n.fireEvent("on"+o.eventType,o)}catch(c){var s="".concat("fake[",e,"]");n[s]!==l&&(n[s]=o)}},e.base.extend({type:null,element:null,listener:null,_constructor:function(e){var t=this;if(!e)throw new Error("Missing element argument");t.type=e.tagName,t.element=e,t.listener={}},getAttribute:function(e){if(e&&typeof e===p){var t=this;return e=e.split(" "),1===e.length?t.element.getAttribute(e[0]):t.getAttributes(e)}},getAttributes:function(e){var t=this,r={};if(e&&(e=typeof e===p?e.split(" "):e,typeof e===f&&e.length)){var n,o;for(n=0;(o=e[n])!==l;n++)r[o]=t.element.getAttributes(o)}return r},setAttribute:function(e,t){var r=this;return e&&typeof e===p&&r.element.setAttribute(e,t),r},setAttributes:function(e){var t=this;if(e&&typeof e===f&&!e.length){var r;for(r in e)t.element.setAttribute(r,e[r])}return t},removeAttribute:function(e){var t=this;return e&&typeof e===p&&(e=e.split(" "),1===e.length?t.element.removeAttribute(e[0]):t.removeAttributes(e)),t},removeAttributes:function(e){var t=this;if(e&&(e=typeof e===p?e.split(" "):e,typeof e===f&&e.length)){var r,n;for(r=0;(n=e[r])!==l;r++)t.element.removeAttribute(n)}return t},getStyle:function(e){if(e&&typeof e===p){var t=this;return e=e.split(" "),1===e.length?o.getComputedStyle(t.element,null).getPropertyValue(e[0]):t.getStyles(e)}},getStyles:function(e){var t=this,r={};if(e&&(e=typeof e===p?e.split(" "):e,typeof e===f&&e.length)){var n,i;for(n=0;(i=e[n])!==l;n++)r[i]=o.getComputedStyle(t.element,null).getPropertyValue(i)}return r},setStyle:function(e,t){var r=this;return e&&typeof e===p&&(r.element.style[e]=t),r},setStyles:function(e){var t=this;if(e&&typeof e===f&&!e.length){var r;for(r in e)t.element.style[r]=e[r]}return t},isVisible:function(){var e=this.element;return!(e.offsetWidth<=0&&e.offsetHeight<=0)},hasClass:function(e){return new RegExp("(?:^|\\s)"+e+"(?:\\s|$)").test(this.element.className)},addClass:function(e){var t,r=this;return r.hasClass(e)||(t=r.element.className.split(" "),t.push(e),r.element.className=t.join(" ")),r},removeClass:function(e){var t=this;return t.hasClass(e)&&(t.element.className=t.element.className.replace(new RegExp("(?:^|\\s)"+e+"(?!\\S)"),"")),t},toggleClass:function(e){var t=this;return t.hasClass(e)?t.removeClass(e):t.addClass(e),t},prepend:function(e){var t=this,r=t.element;return e=e.element||e,r.firstChild?r.insertBefore(e,r.firstChild):t.append(e),t},append:function(e){var t=this;return t.element.appendChild(e.element||e),t},replaceWith:function(e){var t=this,r=t.element;return e=e.element||e,r.parentNode.replaceChild(e,r),t},prependTo:function(e){var t=this,r=t.element;return(e=e.element||e).firstChild?e.insertBefore(r,e.firstChild):t.appendTo(e),t},appendTo:function(e){var t=this;return(e.element||e).appendChild(t.element),t},insertBefore:function(e){var t=this,r=t.element;return(e=e.element||e).parentNode.insertBefore(r,e),t},insertAfter:function(e){var t=this,r=t.element;return(e=e.element||e).nextSibling?e.parentNode.insertBefore(r,e.nextSibling):t.appendTo(e.parentNode),t},replace:function(e){var t=this,r=t.element;return(e=e.element||e).parentNode.replaceChild(r,e),t},remove:function(){var e=this,t=e.element;return t.parentNode.removeChild(t),e},on:function(e,t){var r,n,o=this;for(e=e.split(" "),r=0;(n=e[r])!==l;r++)(o.listener[n]=o.listener[n]||[]).push(t),s.call(o,n,t);return o},one:function(t,r,n){n=n!==!1;var o=this,i=e.proxy.create(o,function(e){o.off(n===!0?e.type:t,i),r.call(o,e)});return o.on(t,i),o},off:function(e,t){var r,n,o,i,c=this;if(e)for(e=e.split(" "),r=0;(n=e[r])!==l;r++)if(c.listener[n]=c.listener[n]||[],t)for(o=0;(i=c.listener[n][o])!==l;o++)i===t&&(c.listener[n].splice(o,1),u.call(c,n,i),o--);else for(;c.listener[n].length>0;)u.call(c,n,c.listener[n].pop());else for(n in c.listener)for(;c.listener[n].length>0;)u.call(c,n,c.listener[n].pop());return c},emit:function(e,t){var r=this;return a.call(r,e,t),r}})}),function(e){window.qoopido.register("function/merge",e)}(function(e,t,r,n,o,i,l){"use strict";return function c(){var e,t,r,n,o,i=arguments[0];for(e=1;(t=arguments[e])!==l;e++)for(r in t)n=i[r],o=t[r],o!==l&&(null!==o&&"object"==typeof o?(n=o.length!==l?n&&"object"==typeof n&&n.length!==l?n:[]:n&&"object"==typeof n&&n.length===l?n:{},i[r]=c(n,o)):i[r]=o);return i}}),function(e){window.qoopido.register("function/unique/uuid",e)}(function(){"use strict";function e(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(r,function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)})}var t={},r=new RegExp("[xy]","g");return function(){var r;do r=e();while("undefined"!=typeof t[r]);return t[r]=!0,r}}),function(e){window.qoopido.register("dom/element/emerge",e,["../element","../../function/merge","../../function/unique/uuid"])}(function(e,t,r,n,o,i,l){"use strict";function c(e){var t,r=v[e];for(t in r)"length"!==t&&a.call(r[t]);0===r.length&&(o.element.clearInterval(g[e]),delete g[e])}function s(){h.left=0,h.top=0,h.right=m.clientWidth,h.bottom=m.clientHeight}function u(){var e=this,t=e._settings.threshold||m.clientWidth*e._settings.auto,r=e._settings.threshold||m.clientHeight*e._settings.auto;e._viewport.left=h.left-t,e._viewport.top=h.top-r,e._viewport.right=h.right+t,e._viewport.bottom=h.bottom+r}function a(){var e,t=this,r=!1,n=2;!t.isVisible()||"hidden"===t.getStyle("visibility")&&t._settings.visibility!==!1||(e=t.element.getBoundingClientRect(),(e.left>=t._viewport.left&&e.top>=t._viewport.top&&e.left<=t._viewport.right&&e.top<=t._viewport.bottom||e.right>=t._viewport.left&&e.bottom>=t._viewport.top&&e.right<=t._viewport.right&&e.bottom<=t._viewport.bottom)&&((e.left>=h.left&&e.top>=h.top&&e.left<=h.right&&e.top<=h.bottom||e.right>=h.left&&e.bottom>=h.top&&e.right<=h.right&&e.bottom<=h.bottom)&&(n=1),r=!0)),(r!==t._state||r===!0&&n!==t._priority)&&f.call(t,r,n)}function f(e,t){var r=this;r._state=e,r._priority=t,r._settings.recur!==!0&&r.remove(),e===!0?r.emit(y,t):r.emit(b)}var p,d={interval:50,threshold:"auto",recur:!0,auto:.5,visibility:!0},m=o.document.documentElement,h={},g={},v={},y="emerged",b="demerged",w="resize orientationchange";if(o=e["dom/element"].create(o),"CSS1Compat"!==i.compatMode)throw"This script requires your browser to work in standards mode";return p=e["dom/element"].extend({_quid:null,_viewport:null,_element:null,_settings:null,_state:null,_priority:null,_constructor:function(t,r){var n=this;p._parent._constructor.call(n,t),r=e["function/merge"]({},d,r||{}),"auto"===r.threshold&&delete r.threshold,g[r.interval]===l&&(v[r.interval]=v[r.interval]||{length:0},g[r.interval]=o.element.setInterval(function(){c(r.interval)},r.interval)),n._quid=e["function/unique/uuid"](),n._viewport={},n._settings=r,n._state=!1,n._priority=2,v[r.interval][n._quid]=n,v[r.interval].length++,o.on(w,function(){u.call(n)}),u.call(n)},remove:function(){var e=this;delete v[e._settings.interval][e._quid],v[e._settings.interval].length--}}),o.on(w,s),s(),p}),function(e){window.qoopido.register("dom/element/lazyimage",e,["./emerge","../../function/merge"])}(function(e){"use strict";function t(){var e=this,t=e._settings.attribute;o+=1,e.emit(i).one(f,function(t){t.type===u?e.emit(l):e.emit(c),o-=1},!1).setAttribute("src",e.getAttribute(t)).removeAttribute(t)}var r,n={interval:50,threshold:"auto",attribute:"data-lazyimage"},o=0,i="requested",l="loaded",c="failed",s="emerged",u="load",a="error",f="".concat(u," ",a);return r=e["dom/element/emerge"].extend({_constructor:function(i,l){var c=this;r._parent._constructor.call(c,i,e["function/merge"]({},n,l||{})),c.on(s,function u(e){(0===o||1===e.data)&&(c.remove(),c.off(s,u),t.call(c))})}})});