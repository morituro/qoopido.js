(function(t,e){"use strict";function n(){return e.qoopido.shared.module.initialize("support/element/canvas/todataurl/jpeg",t)}"function"==typeof define&&define.amd?define(["../../../../support","../todataurl"],n):n()})(function(t){"use strict";return t.support.addTest("/element/canvas/todataurl/jpeg",function(e){t.support.element.canvas.todataurl().then(function(){0===t.support.getElement("canvas").toDataURL("image/jpeg").indexOf("data:image/jpeg")?e.resolve():e.reject()}).fail(function(){e.reject()})})},window);