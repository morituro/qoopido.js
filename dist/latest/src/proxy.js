/*!
* Qoopido.js library
*
* version: 3.6.4
* date:    2015-4-29
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2015 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
(function(definition) {
    window.qoopido.register("proxy", definition, [ "./base", "./function/unique/uuid" ]);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    return modules["base"].extend({
        _constructor: function(context, fn) {
            var args = Array.prototype.splice.call(arguments, 2), proxy = function() {
                return fn.apply(context, Array.prototype.slice.call(arguments).concat(args));
            };
            proxy._quid = modules["function/unique/uuid"]();
            return proxy;
        }
    });
});