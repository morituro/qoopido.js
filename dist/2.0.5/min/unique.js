(function(t,e,n,r){"use strict";function o(){return[].push.apply(arguments,[e,n,r]),e[s]=e[s]||{},e[s][u]=t.apply(null,arguments)}var s="qoopido",u="unique";"function"==typeof define&&define.amd?define(["./base"],o):o(e[s].base)})(function(t){"use strict";function e(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=0|16*Math.random(),n="x"===t?e:8|3&e;return n.toString(16)})}function n(t){for(t=parseInt(t,10)||12,r="",o=0;t>o;o++)r+=u[parseInt(Math.random()*(u.length-1),10)];return r}var r,o,s={uuid:{},string:{}},u="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");return t.extend({uuid:function(){do r=e();while(s.uuid[r]!==undefined);return s.uuid[r]=!0,r},string:function(t){do r=n(t);while(s.string[r]!==undefined);return s.string[r]=!0,r}})},window,document);