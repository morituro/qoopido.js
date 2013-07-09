/*
 * Qoopido url
 *
 * Provides methods to centrally deal with URLs
 *
 * Copyright (c) 2013 Dirk Lüth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lüth <info@qoopido.com>
 * @require ./base
 */
;(function(pDefinition, window) {
	'use strict';

	function definition() {
		return window.qoopido.shared.module.initialize('url', pDefinition, arguments, true);
	}

	if(typeof define === 'function' && define.amd) {
		define([ './base' ], definition);
	} else {
		definition(window.qoopido.base);
	}
}(function(mPrototype, namespace, window, document, undefined) {
	'use strict';

	var urlCurrent, regexLocal,
		regexParameter = new RegExp('[?&]?([^=]+)=([^&]*)', 'g');

	try {
		urlCurrent = location;
	} catch(exception) {
		urlCurrent = getResolver();
	}

	regexLocal = new RegExp(''.concat('^', urlCurrent.protocol, '//', urlCurrent.hostname), 'i');

	function getResolver(url) {
		var resolver = document.createElement('a');

		resolver.href = url || '';

		return resolver;
	}

	return mPrototype.extend({
		resolve: function(url) {
			return getResolver(url).href;
		},
		redirect: function redirect(url, target) {
			target = target || window;

			target.location.href = this.resolve(url);
		},
		getParameter: function(url) {
			var params      = {},
				querystring = getResolver(url).search.split('+').join(' '),
				tokens;

			while(tokens = regexParameter.exec(querystring)) {
				params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
			}

			return params;
		},
		isLocal: function(url) {
			return regexLocal.test(this.resolve(url));
		}
	});
}, window));