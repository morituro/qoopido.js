/*!
* Qoopido.js library
*
* version: 3.5.3
* date:    2014-8-14
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2014 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
(function(definition) {
    window.qoopido.register("support/css/transform/2d", definition, [ "../../../support", "../transform" ]);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    var support = modules["support"];
    return support.addTest("/css/transform/2d", function(deferred) {
        modules["support/css/transform"]().then(function() {
            var sample = support.pool ? support.pool.obtain("div") : document.createElement("div"), property = modules["support"].getCssProperty("transform");
            try {
                sample.style[property] = "rotate(30deg)";
            } catch (exception) {}
            /rotate/.test(sample.style[property]) ? deferred.resolve() : deferred.reject();
            sample.dispose && sample.dispose();
        }, function() {
            deferred.reject();
        });
    });
});