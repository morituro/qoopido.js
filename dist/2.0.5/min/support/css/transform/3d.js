(function(t,e,r,n){"use strict";function o(){return[].push.apply(arguments,[e,r,n]),e[s]=e[s]||{},e[s][i]=t.apply(null,arguments)}var s="qoopido",i="support/css/transform/3d";"function"==typeof define&&define.amd?define(["../../../support","../transform"],o):o(e[s].support,e[s]["support/css/transform"])})(function(t,e){"use strict";return t.addTest("/css/transform/3d",function(r){e().then(function(){var e=t.getElement("div",!0);e.style.property="translate3d(0,0,0)",/translate3d/.test(e.style.property)?r.resolve():r.reject()}).fail(function(){r.reject()})})},window,document);