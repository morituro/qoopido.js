/*
 * Qoopido promise/defer
 *
 * Borrowed from:
 * https://github.com/jakearchibald/es6-promise
 *
 * Copyright (c) 2014 Dirk Lueth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lueth <info@qoopido.com>
 *
 * @polyfill ../polyfill/window/promise
 */
;(function(definition) {
	var dependencies = [];

	if(!window.Promise) {
		dependencies.push('../polyfill/window/promise');
	}

	window.qoopido.register('promise/defer', definition, dependencies);
}(function(modules, shared, namespace, navigator, window, document, undefined) {
	'use strict';

	return function defer() {
		var self = this;

		self.promise = new window.Promise(function(resolve, reject) {
			self.resolve = resolve;
			self.reject  = reject;
		});
	};
}));