(function(t,e){"use strict";function n(){return e.qoopido.initialize("support/capability/datauri",t,arguments)}"function"==typeof define&&define.amd?define(["../../support","../../dom/element","../../pool/dom"],n):n()})(function(t,e,n,i){"use strict";return t.support.addTest("/capability/datauri",function(e){var n=t["dom/element"].create(i.qoopido.shared.pool.dom.obtain("img"));n.one("error load",function(t){"load"===t.type&&1===n.element.width&&1===n.element.height?e.resolve():e.reject(),n.element.dispose()},!1).setAttribute("src","data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")})},window);