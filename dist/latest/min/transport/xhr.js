/*!
* Qoopido.js library v3.4.3, 2014-6-11
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*//*!
* Qoopido.js library
*
* version: 3.4.3
* date:    2014-6-11
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2014 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
!function(t){window.qoopido.registerSingleton("transport/xhr",t,["../transport","../function/merge","../function/unique/string","../url","q"])}(function(t,e,n,r,o,i,u){"use strict";function s(t,e,n){var r,o=this,i=o.xhr,u=o.settings;n=n&&"object"==typeof n?o.serialize(n):n,e=u.cache===!1?"".concat(e,e.indexOf("?")>-1?"&":"?","_="+(new Date).getTime()):e,e=n&&"GET"===t?"".concat(e,e.indexOf("?")>-1?"&":"?",n):e;for(r in u.xhrOptions)i[r]=u.xhrOptions[r];if(i.open(t,e,u.async,u.username,u.password),i.setRequestHeader){i.setRequestHeader("Accept",u.accept),n&&"GET"!==t&&i.setRequestHeader("Content-Type",u.contentType);for(r in u.header)i.setRequestHeader(r,u.header[r])}i.timeout=u.timeout,i.onprogress=function(t){a.call(o,t)},i.onreadystatechange=i.onload=function(){c.call(o)},i.onerror=function(){l.call(o)},i.send(n||null),o.timeout=setTimeout(function(){d.call(o)},u.timeout)}function a(t){var e=this;e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){d.call(e)},e.settings.timeout),e.dfd.notify(t)}function c(){var t=this,e=t.xhr,n=t.dfd;(e.readyState===u||4===e.readyState)&&(f.call(t),e.status===u||200===e.status?n.resolve({data:e.responseText,xhr:e}):n.reject({status:e.status,xhr:e}))}function l(){var t=this;f.call(t),t.dfd.reject()}function d(){var t=this;t.xhr.abort(),f.call(t),t.dfd.reject()}function f(){var t=this,e=t.xhr;t.timeout&&clearTimeout(t.timeout),e.onprogress=e.onreadystatechange=e.onerror=null}var h,p=t.q||o.Q,m="undefined"!=typeof o.XMLHttpRequest?function(e){return t.url.isLocal(e)?new o.XMLHttpRequest:o.XDomainRequest?new o.XDomainRequest:new o.XMLHttpRequest}:function(){try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(t){return null}};return h=t.transport.extend({_settings:{accept:"*/*",timeout:5e3,async:!0,cache:!1,header:{},username:null,password:null,contentType:"application/x-www-form-urlencoded; charset=UTF-8 ",xhrOptions:{}},load:function(e,n,r,o){var i={};return n=t.url.resolve(n),i.url=n,i.id="".concat("xhr-",t["function/unique/string"]()),i.dfd=p.defer(),i.xhr=m(n),i.settings=t["function/merge"]({},this._settings,o),i.timeout=null,s.call(i,e.toUpperCase(),n,r),i.dfd.promise},get:function(t,e,n){return this.load("GET",t,e,n)},post:function(t,e,n){return this.load("POST",t,e,n)},put:function(t,e,n){return this.load("PUT",t,e,n)},"delete":function(t,e,n){return this.load("DELETE",t,e,n)},head:function(t,e,n){return this.load("HEAD",t,e,n)}})},window,document);