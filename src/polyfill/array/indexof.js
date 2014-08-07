/*
 * Qoopido polyfill/array/indexof
 *
 * Borrowed from:
 * https://github.com/jonathantneal/polyfill
 *
 * Copyright (c) 2014 Dirk Lueth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lueth <info@qoopido.com>
 */
/* global Window, HTMLDocument, Element */
;(function(definition) {
	window.qoopido.register('polyfill/array/indexof', definition);
}(function(modules, shared, namespace, navigator, window, document, undefined) {
	'use strict';

	if(!Array.prototype.indexOf) {
		Array.prototype.indexOf = function indexOf(element) {
			var array = this,
				i = 0;

			for(; array[i] !== undefined; ++i) {
				if(array[i] === element) {
					return i;
				}
			}

			return -1;
		};
	}

	return Array.prototype.indexOf;
}));