(function(t){window.qoopido.register("pool/object",t,["../pool"])})(function(t,e,n,r,o,i){"use strict";var l,s=null===Object.prototype.__proto__,u=s?"__proto__":"prototype",a=s?null:function(){var t=i.createElement("iframe"),e=i.body||i.documentElement;t.style.display="none",e.appendChild(t),t.src="javascript:";var n=t.contentWindow.Object.prototype;return e.removeChild(t),t=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf,n.__proto__=null,n}();return l=t.pool.extend({getModel:function(){return a},_dispose:function(t){var e;t[u]=a;for(e in t)delete t[e];return t},_obtain:function(){return{}}}),o.qoopido.shared.pool=o.qoopido.shared.pool||{},o.qoopido.shared.pool.object=l.create(),l});