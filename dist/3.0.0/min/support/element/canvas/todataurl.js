(function(e,t){"use strict";function n(){return t.qoopido.shared.module.initialize("support/element/canvas/todataurl",e,arguments)}"function"==typeof define&&define.amd?define(["../../../support","../canvas"],n):n()})(function(e,t,n,r,i,o){"use strict";return e.support.addTest("/element/canvas/todataurl",function(t){e.support.element.canvas().then(function(){e.support.getElement("canvas").toDataURL!==o?t.resolve():t.reject()}).fail(function(){t.reject()})})},window);