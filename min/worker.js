(function(t,e,n,r){"use strict";function o(){return[].push.apply(arguments,[e,n,r]),e[s]=e[s]||{},e[s][u]=t.apply(null,arguments)}var s="qoopido",u="worker";"function"==typeof define&&define.amd?define(["./base","./support","q"],o):o(e[s].base,e[s].support,e.Q)})(function(t,e,n){"use strict";var r=e.supportsMethod("Worker");return t.extend({execute:function(t,e,o){var s=n.defer();if(o=o||[],r===!0){var u=new Worker(t);u.addEventListener("message",function(t){switch(t.data.type){case"progress":s.notify(t.data.progress);break;case"result":s.resolve(t.data.result)}},!1),u.addEventListener("error",function(t){s.reject(t)},!1),u.postMessage({func:""+e,args:o})}else setTimeout(function(){try{s.resolve(e.apply(null,o))}catch(t){s.reject()}},0);return s.promise}})},window,document);