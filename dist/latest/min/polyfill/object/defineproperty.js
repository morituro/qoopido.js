/*!
* Qoopido.js library v3.4.4, 2014-6-15
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*//*!
* Qoopido.js library
*
* version: 3.4.4
* date:    2014-6-15
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2014 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
!function(e,t){t.register?t.register("polyfill/object/defineproperty",e):(t.modules=t.modules||{})["polyfill/object/defineproperty"]=e()}(function(){"use strict";if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var e=Object.defineProperty,t=Object.prototype.__defineGetter__,r=Object.prototype.__defineSetter__;Object.defineProperty=function(o,n,i){if(e)try{return e(o,n,i)}catch(c){}if(o!==Object(o))throw new TypeError("Object.defineProperty called on non-object");return t&&"get"in i&&t.call(o,n,i.get),r&&"set"in i&&r.call(o,n,i.set),"value"in i&&(o[n]=i.value),o}}return Object.defineProperty},window.qoopido=window.qoopido||{});