/*!
* Qoopido.js library v3.2.1, 2014-0-10
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){var e=["../proxy"];window.getComputedStyle||e.push("../polyfill/window/getcomputedstyle"),window.qoopido.register("dom/element",t,e)}(function(t,e,n,r,i,l,o){"use strict";function s(t){return t.target||(t.target=t.srcElement||l),3===t.target.nodeType&&(t.target=t.target.parentNode),!t.relatedTarget&&t.fromElement&&(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t}var a,u,f,c="object",v="string";return a=i.addEventListener?function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r[i]=function(t){e.call(this,s(t))},r.addEventListener(t,r[i],!1)}:function(t,e){var n,r=this,l=r.element;l["on"+t]!==o?(n="".concat("listener[",t,"][",e._quid||e,"]"),l[n]=function(){e.call(this,s(i.event))},l.attachEvent("on"+t,l[n])):(t="".concat("fake[",t,"]"),l[t]=null,l.attachEvent("onpropertychange",function(n){n.propertyName===t&&e.call(this,s(l[t]))}))},u=i.removeEventListener?function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r.removeEventListener(t,r[i],!1),delete r[i]}:function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r.detachEvent("on"+t,r[i]),delete r[i]},f=l.createEvent?function(t,e){var n=this,r=n.element,i=l.createEvent("HTMLEvents");i.initEvent(t,!0,!0),i.data=e,r.dispatchEvent(i)}:function(t,e){var n=this,r=n.element,i=l.createEventObject();i.type=i.eventType=t,i.data=e;try{r.fireEvent("on"+i.eventType,i)}catch(s){var a="".concat("fake[",t,"]");r[a]!==o&&(r[a]=i)}},t.base.extend({type:null,element:null,listener:null,_constructor:function(t){var e=this;if(!t)throw new Error("Missing element argument");e.type=t.tagName,e.element=t,e.listener={}},getAttribute:function(t){if(t&&typeof t===v){var e=this;return t=t.split(" "),1===t.length?e.element.getAttribute(t[0]):e.getAttributes(t)}},getAttributes:function(t){var e=this,n={};if(t&&(t=typeof t===v?t.split(" "):t,typeof t===c&&t.length)){var r,i;for(r=0;(i=t[r])!==o;r++)n[i]=e.element.getAttributes(i)}return n},setAttribute:function(t,e){var n=this;return t&&typeof t===v&&n.element.setAttribute(t,e),n},setAttributes:function(t){var e=this;if(t&&typeof t===c&&!t.length){var n;for(n in t)e.element.setAttribute(n,t[n])}return e},removeAttribute:function(t){var e=this;return t&&typeof t===v&&(t=t.split(" "),1===t.length?e.element.removeAttribute(t[0]):e.removeAttributes(t)),e},removeAttributes:function(t){var e=this;if(t&&(t=typeof t===v?t.split(" "):t,typeof t===c&&t.length)){var n,r;for(n=0;(r=t[n])!==o;n++)e.element.removeAttribute(r)}return e},getStyle:function(t){if(t&&typeof t===v){var e=this;return t=t.split(" "),1===t.length?i.getComputedStyle(e.element,null).getPropertyValue(t[0]):e.getStyles(t)}},getStyles:function(t){var e=this,n={};if(t&&(t=typeof t===v?t.split(" "):t,typeof t===c&&t.length)){var r,l;for(r=0;(l=t[r])!==o;r++)n[l]=i.getComputedStyle(e.element,null).getPropertyValue(l)}return n},setStyle:function(t,e){var n=this;return t&&typeof t===v&&(n.element.style[t]=e),n},setStyles:function(t){var e=this;if(t&&typeof t===c&&!t.length){var n;for(n in t)e.element.style[n]=t[n]}return e},isVisible:function(){var t=this.element;return!(t.offsetWidth<=0&&t.offsetHeight<=0)},on:function(t,e){var n,r,i=this;for(t=t.split(" "),n=0;(r=t[n])!==o;n++)(i.listener[r]=i.listener[r]||[]).push(e),a.call(i,r,e);return i},one:function(e,n,r){r=r!==!1;var i=this,l=t.proxy.create(i,function(t){i.off(r===!0?t.type:e,l),n.call(i,t)});return i.on(e,l),i},off:function(t,e){var n,r,i,l,s=this;if(t)for(t=t.split(" "),n=0;(r=t[n])!==o;n++)if(s.listener[r]=s.listener[r]||[],e)for(i=0;(l=s.listener[r][i])!==o;i++)l===e&&(s.listener[r].splice(i,1),u.call(s,r,l),i--);else for(;s.listener[r].length>0;)u.call(s,r,s.listener[r].pop());else for(r in s.listener)for(;s.listener[r].length>0;)u.call(s,r,s.listener[r].pop());return s},emit:function(t,e){var n=this;return f.call(n,t,e),n}})});