(function(t,e){"use strict";function n(){return e.qoopido.shared.module.initialize("support/element/canvas/todataurl/jpeg",t,arguments)}"function"==typeof define&&define.amd?define(["../../../../support","../todataurl"],n):n(e.qoopido.support,e.qoopido.support.element.canvas.todataurl)})(function(t,e){"use strict";return t.addTest("/element/canvas/todataurl/jpeg",function(n){e().then(function(){0===t.getElement("canvas").toDataURL("image/jpeg").indexOf("data:image/jpeg")?n.resolve():n.reject()}).fail(function(){n.reject()})})},window);