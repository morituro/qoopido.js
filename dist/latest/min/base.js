(function(e,t,r,n){"use strict";function c(e,c,o,i){var u=e.split("/");return s[e]?s[e]:(o=o?[].slice.call(o,0):[],s[e]=function(){return i===!0?c.call(null,s,o,u,t,r,n).create():c.call(null,s,o,u,t,r,n)}())}function o(){return c("base",e)}var i="qoopido",u=t[i]=t[i]||{initialize:c},s=(u.shared={},u.modules={});if("function"==typeof define&&define.amd){var a=[];Object.create||a.push("../polyfill/object/create"),Object.getOwnPropertyNames||a.push("../polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor||a.push("../polyfill/object/getownpropertydescriptor"),define(a,o)}else o()})(function(e,t,r,n,c,o){"use strict";function i(e){var t,r,n={},c=Object.getOwnPropertyNames(e);for(t=0;(r=c[t])!==o;t++)n[r]=Object.getOwnPropertyDescriptor(e,r);return n}return{create:function(){var e,t=Object.create(this,i(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=o,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,i(e))}}},window,document);