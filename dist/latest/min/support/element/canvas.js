(function(e,t){"use strict";function n(){return t.qoopido.shared.module.initialize("support/element/canvas",e,arguments)}"function"==typeof define&&define.amd?define(["../../support"],n):n()})(function(e){"use strict";return e.support.addTest("/element/canvas",function(t){var n=e.support.getElement("canvas");n.getContext&&n.getContext("2d")?t.resolve():t.reject()})},window);