(function(t,e){"use strict";function n(){return e.qoopido.initialize("pool/module",t,arguments)}"function"==typeof define&&define.amd?define(["../pool"],n):n()})(function(t){"use strict";var e;return e=t.pool.extend({_module:null,_constructor:function(t,n){var i=this;i._module=t,e._parent._constructor.call(i,n)},_dispose:function(t){return t},_obtain:function(){return this._module.create.apply(this._module,arguments)}})},window);