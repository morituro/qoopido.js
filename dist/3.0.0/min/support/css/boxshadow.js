(function(e,t){"use strict";function n(){return t.qoopido.shared.module.initialize("support/css/boxshadow",e,arguments)}"function"==typeof define&&define.amd?define(["../../support"],n):n(t.qoopido.support)})(function(e){"use strict";return e.addTest("/css/boxshadow",function(t){e.supportsProperty("box-shadow")?t.resolve(e.getProperty("box-shadow")):t.reject()})},window);