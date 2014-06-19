/*!
* Qoopido.js library v3.2.7, 2014-5-19
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e,t,r,n,o,c){"use strict";function i(e){for(var t;(t=e.replace(l,""))!==e;)e=t;return e.replace(g,"")}var s,u,p=t.shared=t.shared||{},a=t.modules=t.modules||{},d=[],f=new RegExp("^\\.+\\/"),l=new RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),g=new RegExp("(^\\/)|\\.\\/","g");s=t.register=function(e,t,s,u){var d,l=e.split("/");return a[e]?a[e]:(d=function(){if(s){var d,g,w,y=l.slice(0,-1).join("/");for(d=0;(g=s[d])!==c;d++)w=f.test(g),w&&(g=i(y+"/"+g)),!a[g]&&arguments[d]&&(a[g]=arguments[d]),w&&!a[g]&&"undefined"!=typeof console&&console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",g))}return a[e]=t(a,p,l,r,n,o,c),u&&u(a[e]),a[e]},"function"==typeof define&&define.amd?s?define(s,d):define(d):d(),void 0)},u=t.registerSingleton=function(e,t,r){s(e,t,r,function(t){a[e]=t.create()})},Object.create||d.push("./polyfill/object/create"),Object.getOwnPropertyNames||d.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||d.push("./polyfill/object/getownpropertydescriptor"),s("base",e,d)}(function(e,t,r,n,o,c,i){"use strict";function s(e){var t,r,n={},o=Object.getOwnPropertyNames(e);for(t=0;(r=o[t])!==i;t++)n[r]=Object.getOwnPropertyDescriptor(e,r);return n}function u(){"undefined"!=typeof console&&console.error("[Qoopido.js] Operation prohibited on an actual instance")}return{create:function(){var e,t=Object.create(this,s(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=u,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,s(e))}}},window.qoopido=window.qoopido||{},navigator,window,document);