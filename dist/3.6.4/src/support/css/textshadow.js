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
    window.qoopido.register("support/css/textshadow", definition, [ "../../support" ]);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    return modules["support"].addTest("/css/textshadow", function(deferred) {
        modules["support"].supportsCssProperty("text-shadow") ? deferred.resolve(modules["support"].getCssProperty("text-shadow")) : deferred.reject();
    });
});