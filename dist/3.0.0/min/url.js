(function(e,t){"use strict";function n(){return t.qoopido.initialize("url",e,arguments,!0)}"function"==typeof define&&define.amd?define(["./base"],n):n()})(function(e,t,n,r,o){"use strict";function i(e){var t=o.createElement("a");return t.href=e||"",t}var u,s,a=RegExp("[?&]?([^=]+)=([^&]*)","g");try{u=location}catch(c){u=i()}return s=RegExp("".concat("^",u.protocol,"//",u.hostname),"i"),e.base.extend({resolve:function(e){return i(e).href},redirect:function(e,t){t=t||r,t.location.href=this.resolve(e)},getParameter:function(e){for(var t,n={},r=i(e).search.split("+").join(" ");t=a.exec(r);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},isLocal:function(e){return s.test(this.resolve(e))}})},window);