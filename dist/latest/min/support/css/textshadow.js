(function(t,e){"use strict";function n(){return e.qoopido.initialize("support/css/textshadow",t,arguments)}"function"==typeof define&&define.amd?define(["../../support"],n):n()})(function(t){"use strict";return t.support.addTest("/css/textshadow",function(e){t.support.supportsCssProperty("text-shadow")?e.resolve(t.support.getCssProperty("text-shadow")):e.reject()})},window);