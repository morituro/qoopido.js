(function(e,t){"use strict";var n=function n(){return t.qoopido.shared.module.initialize("support/element/canvas/todataurl/png",e,arguments)};"function"==typeof define&&define.amd?define(["../../../../support","../todataurl"],n):n(t.qoopido.support,t.qoopido.support.element.canvas.todataurl)})(function(e,t){"use strict";return e.addTest("/element/canvas/todataurl/png",function(n){t().then(function(){0===e.getElement("canvas").toDataURL("image/png").indexOf("data:image/png")?n.resolve():n.reject()}).fail(function(){n.reject()})})},window);