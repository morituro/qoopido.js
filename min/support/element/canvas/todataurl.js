(function(t,e,r,n){"use strict";function o(){return[].push.apply(arguments,[e,r,n]),e[s]=e[s]||{},e[s][i]=t.apply(null,arguments)}var s="qoopido",i="support/element/canvas/todataurl";"function"==typeof define&&define.amd?define(["../../../support","../canvas"],o):o(e[s].support,e[s]["support/element/canvas"])})(function(t,e,r,n,o){"use strict";return t.addTest("/element/canvas/todataurl",function(r){e().then(function(){t.getElement("canvas").toDataURL!==o?r.resolve():r.reject()}).fail(function(){r.reject()})})},window,document);