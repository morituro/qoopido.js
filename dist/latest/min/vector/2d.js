/*!
* Qoopido.js library v3.5.2, 2014-8-12
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.register("vector/2d",t,["../base"])}(function(t,i){"use strict";var s,h=180/Math.PI,e=Math.PI/180,n=i.pool&&i.pool.object;return s=t.base.extend({_temp:null,x:null,y:null,_constructor:function(t,i){this._temp=n?n.obtain():{},this._temp.x=0,this._temp.y=0,this.x=t||0,this.y=i||0},_obtain:function(t,i){this.x=t||0,this.y=i||0},_destroy:function(){this._temp=this._temp.dispose&&this._temp.dispose()},getAngle:function(t){return t?Math.atan2(this.y,this.x):Math.atan2(this.y,this.x)*h%360},getLength:function(t){return t?this.x*this.x+this.y*this.y:Math.sqrt(this.x*this.x+this.y*this.y)},rotate:function(t,i){var s=Math.cos(t*(i?1:e)),h=Math.sin(t*(i?1:e));return this._temp.x=this.x,this._temp.y=this.y,this.x=this._temp.x*s-this._temp.y*h,this.y=this._temp.x*h+this._temp.y*s,this},invert:function(){return this.x=-this.x,this.y=-this.y,this},add:function(t){return this.x+="object"==typeof t?t.x:t,this.y+="object"==typeof t?t.y:t,this},subtract:function(t){return this.x-="object"==typeof t?t.x:t,this.y-="object"==typeof t?t.y:t,this},multiply:function(t){return this.x*="object"==typeof t?t.x:t,this.y*="object"==typeof t?t.y:t,this},divide:function(t){return this.x/="object"==typeof t?t.x:t,this.y/="object"==typeof t?t.y:t,this}})});