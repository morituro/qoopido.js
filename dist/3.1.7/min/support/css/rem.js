(function(t){window.qoopido.register("support/css/rem",t,["../../support","../../pool/dom"])})(function(t,e){"use strict";return t.support.addTest("/css/rem",function(t){var r=e.pool.dom.obtain("div");try{r.style.fontSize="3rem"}catch(n){}/rem/.test(r.style.fontSize)?t.resolve():t.reject(),r.dispose()})});