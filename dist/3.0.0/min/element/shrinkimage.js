(function(t,e){"use strict";function n(){return e.qoopido.shared.module.initialize("element/shrinkimage",t,arguments)}"function"==typeof define&&define.amd?(e.JSON&&JSON.parse&&define("json",function(){return e.JSON}),define(["../element","../function/merge","../url","../support","../support/capability/datauri","../support/element/canvas/todataurl/png"],n)):n(e.qoopido.element,e.qoopido.function.merge,e.qoopido.url,e.qoopido.support,null,null)})(function(t,e,n,r,i,o,l,u,a){"use strict";function c(t,i){t=n.resolve(O.exec(t)[1]),i=i?!0:!1;var o=this,l=e({},o._settings,n.getParameter(t)),u=l.target||(t=t.split("?")[0]).replace(j,"".concat(".q",l.quality,".shrunk"));i||o.removeAttribute(o._settings.attribute).hide(),r.testMultiple("/capability/datauri","/element/canvas/todataurl/png").then(l.debug).then(function(){switch(typeof y[u]){case"object":y[u].one(A,function(t){s.call(o,t.data,i)}),o.emit(S);break;case"string":s.call(o,y[u],i);break;default:y[u]=m.create(u,i?null:o._element).one(x,function(e){e.type===A?(y[u]=e.data,o.emit(q),s.call(o,e.data,i)):(y[u]=t,s.call(o,t,i))},!1),o.emit(E)}}).fail(function(){y[u]=t,s.call(o,t,i)}).done()}function s(t,e){var n=this;e?n.setStyle("background-image","url("+t+")"):n.setAttribute("src",t).show(),n.emit(A),n.off()}function f(t){var e=this;t.get(e._url).then(function(t){try{var n=JSON.parse(t.data);n.width=parseInt(n.width,10),n.height=parseInt(n.height,10),p.call(e,n)}catch(r){e.emit(P)}},function(){e.emit(P)}).done()}function p(t){var e,n,r=this,i=function(i){return e=b.pop()||a.createElement("canvas"),e.style.display="none",e.width=t.width,e.height=t.height,n=e.getContext("2d"),n.clearRect(0,0,t.width,t.height),n.drawImage(r.element,0,0,t.width,t.height),r.one(k,o).setAttribute("src",t.alpha),d(i)},o=function(i){var o;return n.globalCompositeOperation="xor",n.drawImage(r.element,0,0,t.width,t.height),o=e.toDataURL("image/png"),l(),r.emit(A,o),d(i)},l=function(){e&&b.push(e),r.element.stash&&_.push(r.removeAttribute("src").element)};r.one(T,function(t){t.type===k?i.call(this,t):(l(),r.emit(P))},!1).setAttribute("src",t.main)}function d(t){return t.preventDefault(),t.stopPropagation(),!1}var h,m,g=l.pop(),v={attribute:"data-"+g,quality:80,debug:!1},y={},b=[],_=[],w=RegExp('^url\\x28"{0,1}data:image/shrink,(.+?)"{0,1}\\x29$',"i"),O=RegExp('^(?:url\\x28"{0,1}|)(?:data:image/shrink,|)(.+?)(?:"{0,1}\\x29|)$',"i"),j=RegExp("\\.png$","i"),E="requested",S="queued",q="cached",A="loaded",P="failed",x="".concat(A," ",P),k="load",C="error",T="".concat(k," ",C);return h=t.extend({_constructor:function(t,n){var r,i,o=this;h._parent._constructor.call(o,t),o._settings=n=e({},v,n),r=o.getAttribute(n.attribute),i=o.getStyle("background-image"),"IMG"===o.type&&c.call(o,r),"none"!==i&&w.test(i)&&c.call(o,i,!0)},hide:function(){this.setStyles({visibility:"hidden",opacity:0})},show:function(){this.setStyles({visibility:"",opacity:""})}}),m=t.extend({_url:null,_constructor:function(t,e){var n=this;e||(e=_.pop()||a.createElement("img"),e.stash=!0),h._parent._constructor.call(n,e),n._url=t,"function"==typeof define&&define.amd?require(["../../transport/xhr","json"],function(t){f.call(n,t)}):f.call(n,u.qoopido.transport.xhr)}}),h},window);