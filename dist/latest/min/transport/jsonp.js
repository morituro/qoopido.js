(function(e,t){"use strict";function n(){return t.qoopido.shared.module.initialize("transport/jsonp",e,arguments,!0)}"function"==typeof define&&define.amd?define(["../transport","../function/merge","../url","../unique","q"],n):n(t.qoopido.transport,t.qoopido.function.merge,t.qoopido.url,t.qoopido.unique,t.Q)})(function(e,t,n,r,o,i,s,u){"use strict";function a(e,t){var n=this,r=n.dfd,o=n.script,i=n.settings;t="object"==typeof t?n.serialize(t):t,e="".concat(e,e.indexOf("?")>-1?"&":"?","".concat(i.callback,"=",n.id)),e=i.cache===!1?"".concat(e,e.indexOf("?")>-1?"&":"?","".concat("_=",""+(new Date).getTime())):e,e=t?"".concat(e,e.indexOf("?")>-1?"&":"?",t):e,s[n.id]=function(e){r.resolve(e);try{delete s[n.id]}catch(t){s[n.id]=null}},o.onprogress=function(e){c.call(n,e)},o.onload=o.onreadystatechange=function(){l.call(n,event)},o.onerror=function(){f.call(n)},o.setAttribute("src",e),p.appendChild(o)}function c(e){this.dfd.notify(e.readyState)}function l(e){var t=this,n=t.script;!e.readyState||e.readyState&&"loaded"!==e.readyState&&"complete"!==e.readyState||(n.off("progress error load readystatechange"),n.parentNode.removeChild(n))}function f(){this.dfd.reject()}var d,p=u.getElementsByTagName("head")[0];return d=e.extend({_settings:{callback:"callback",cache:!1},load:function(e,i,s){var c={};return e=n.resolve(e),c.id="".concat("jsonp-",r.string()),c.dfd=o.defer(),c.script=u.createElement("script"),c.settings=t({},this._settings,s),c.script.setAttribute("async",!0),a.call(c,e,i),c.dfd.promise}})},window,document);