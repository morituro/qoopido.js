(function(e,t,r,n,o){"use strict";function c(e,c,i,u){var p,d=e.split("/");return f[e]?f[e]:(p=function(){if(i){var p,g,y,j=d.slice(0,-1).join("/");for(p=0;(g=i[p])!==o;p++)y=l.test(g),y&&(g=s(j+"/"+g)),!f[g]&&arguments[p]&&(f[g]=arguments[p]),y&&!f[g]&&"undefined"!=typeof console&&console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",g))}return f[e]=c(f,a,d,t,r,n,o),u&&u(f[e]),f[e]},"function"==typeof define&&define.amd?i?define(i,p):define(p):p(),o)}function i(e,t,r){c(e,t,r,function(t){f[e]=t.create()})}function s(e){for(var t;(t=e.replace(g,""))!==e;)e=t;return e.replace(y,"")}var u="qoopido",p=r[u]=r[u]||{},a=p.shared=p.shared||{},f=p.modules=p.modules||{},d=[],l=RegExp("^\\.+\\/"),g=RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),y=RegExp("(^\\/)|\\.\\/","g");p.register=c,p.registerSingleton=i,Object.create||d.push("./polyfill/object/create"),Object.getOwnPropertyNames||d.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||d.push("./polyfill/object/getownpropertydescriptor"),c("base",e,d)})(function(e,t,r,n,o,c,i){"use strict";function s(e){var t,r,n={},o=Object.getOwnPropertyNames(e);for(t=0;(r=o[t])!==i;t++)n[r]=Object.getOwnPropertyDescriptor(e,r);return n}return{create:function(){var e,t=Object.create(this,s(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=i,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,s(e))}}},navigator,window,document);