(function(e,t){"use strict";function n(){return t.qoopido.initialize("transport",e,arguments)}"function"==typeof define&&define.amd?define(["./base","./function/merge"],n):n()})(function(e){"use strict";var t;return t=e.base.extend({setup:function(t){var n=this;return n._settings=e["function/merge"]({},n._settings,t),n},serialize:function(e,t){var n,o,i,r=[];for(n in e)o=t?"".concat(t,"[",n,"]"):n,i=e[n],r.push("object"==typeof i?this.serialize(i,o):"".concat(encodeURIComponent(o),"=",encodeURIComponent(i)));return r.join("&")}})},window,document);