(function(t){window.qoopido.register("support/css/rgba",t,["../../support"])})(function(t,e,r,n,o,i){"use strict";var s=t.support;return s.addTest("/css/rgba",function(t){var e=s.pool?s.pool.obtain("div"):i.createElement("div");try{e.style.backgroundColor="rgba(0,0,0,.5)"}catch(r){}/rgba/.test(e.style.backgroundColor)?t.resolve():t.reject(),e.dispose&&e.dispose()})});