(function(e,t){"use strict";function n(){return t.qoopido.initialize("support/element/canvas/todataurl",e,arguments)}"function"==typeof define&&define.amd?define(["../../../support","../canvas","../../../pool/dom"],n):n()})(function(e,t,n,r,i,o){"use strict";return e.support.addTest("/element/canvas/todataurl",function(t){e["support/element/canvas"]().then(function(){var e=r.qoopido.shared.pool.dom.obtain("canvas");e.toDataURL!==o?t.resolve():t.reject(),e.dispose()}).fail(function(){t.reject()})})},window);