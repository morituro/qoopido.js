/*!
* Qoopido.js library v3.2.7, 2014-5-19
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.registerSingleton("component/remux",t,["../emitter"])}(function(t,e,n,o,a,i){"use strict";function l(t,e){var n=this;return d.fontsize=t||parseInt(a.getComputedStyle(s).getPropertyValue("font-size"),10),d.layout=e||a.getComputedStyle(s,":after").getPropertyValue("content")||null,null!==d.layout&&(d.layout=d.layout.replace(m,"")),(d.fontsize!==f.fontsize||d.layout!==f.layout)&&(f.fontsize=d.fontsize,f.layout=d.layout,d.ratio.device=a.devicePixelRatio||1,d.ratio.fontsize=d.fontsize/c,d.ratio.total=d.ratio.device*d.ratio.fontsize,n.emit("statechange",d)),n}var r,u,s=i.getElementsByTagName("html")[0],c=16,d={fontsize:null,layout:null,ratio:{}},f={fontsize:null,layout:null},y=null,m=new RegExp("[\"']","g");return r=t.emitter.extend({_constructor:function(){var t=this,e=parseInt(s.getAttribute("data-base"),10),n=function(){null!==y&&a.clearTimeout(y),y=a.setTimeout(function(){l.call(t)},20)};r._parent._constructor.call(t),isNaN(e)===!1&&(c=e),u=i.createElement("style"),u.type="text/css",i.getElementsByTagName("head")[0].appendChild(u),a.addEventListener("resize",n,!1),a.addEventListener("orientationchange",n,!1),l.call(t)},getState:function(){return d},getLayout:function(){return d.layout},forceLayout:function(t,e){var n=this;return l.call(n,t,e),n},addLayout:function(t,e){var n,o,a,r,s,d,f=this;arguments.length>1?(n={},n[t]=e):n=arguments[0];for(o in n)for(a=n[o],r=a.min;r<=a.max;r++)s=Math.round(a.width*(r/c)),d="@media screen and (min-width: "+s+"px) { html { font-size: "+r+'px; } html:after { content: "'+o+'"; display: none; } }',u.styleSheet?u.styleSheet.cssText+=d:u.appendChild(i.createTextNode(d));return l.call(f),f}})});