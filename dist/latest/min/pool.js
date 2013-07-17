(function(t,e){"use strict";function n(){return e.qoopido.shared.module.initialize("pool",t,arguments)}"function"==typeof define&&define.amd?define(["./base","./unique"],n):n()})(function(t){"use strict";function e(){var t,e,n,r,i,o=this,u=o.metrics,a=o._settings,s=o._queue,l=o._variables,c=1;if(s.length>0&&(l.durationAverage>0&&(c=~~(1>(c=a.frameBudget/l.durationAverage)?1:c)),(t=(e=s.splice(0,c)).length)>0))if(u.inPool+t<=a.maxPoolsize){for(i=(new Date).getTime(),n=0,r=e[n];t>n;n++)o._getPool.call(o,r).push(o._dispose(r));u.inPool+=t,u.inQueue-=t,l.durationSamples+=t,l.durationTotal+=(new Date).getTime()-i,l.durationAverage=l.durationTotal/l.durationSamples}else e=s.splice(0,~~(s.length*a.queueFactor)),u.inQueue-=t+e.length,u.destroyed+=t+e.length,e.length=0}var n,r={interval:15,frameBudget:.5,maxPoolsize:1e3,queueFactor:.2};return n=t.base.extend({metrics:{total:0,inPool:0,inUse:0,inQueue:0,recycled:0,destroyed:0},_settings:null,_pool:null,_queue:[],_variables:{durationSamples:0,durationTotal:0,durationAverage:0},_constructor:function(n,i){var o=this;o._settings=t.function.merge({},r,i),o._pool=o._initPool(),setInterval(function(){e.call(o)},o._settings.interval)},_initPool:function(){return[]},_getPool:function(){return this._pool},obtain:function(){var e=this,n=e._getPool.apply(e,arguments).pop();return n?(e.metrics.inPool--,e.metrics.recycled++):(n=e._obtain.apply(e,arguments),e.metrics.total++),e.metrics.inUse++,n._uuid=t.unique.uuid(),n},dispose:function(e){var n=this,r=n._queue;return e._uuid||(e._uuid=t.unique.uuid(),n.metrics.total++,n.metrics.inUse++),r.length<n._settings.maxPoolsize?(r.push(e),n.metrics.inUse--,n.metrics.inQueue++):(n.metrics.inUse--,n.metrics.destroyed++),null}})},window);