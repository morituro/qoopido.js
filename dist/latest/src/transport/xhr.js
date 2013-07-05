/*
 * Qoopido transport xhr
 *
 * Provides basic XHR (AJAX) functionality
 *
 * Copyright (c) 2013 Dirk Lüth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lüth <info@qoopido.com>
 * @require ../base
 * @require ../url
 * @require ../unique
 * @require q
 */
;(function(pDefinition, window) {
	'use strict';

	var definition = function definition() {
			return window.qoopido.shared.module.initialize('transport/xhr', pDefinition, arguments, true);
		};

	if(typeof define === 'function' && define.amd) {
		define([ '../base', '../url', '../unique', 'q' ], definition);
	} else {
		definition(window.qoopido.base, window.qoopido.url, window.qoopido.unique, window.Q);
	}
}(function(mPrototype, mUrl, mUnique, mQ, namespace, window, document, undefined) {
	'use strict';

	var prototype,
		settings = {
			accept:      '*/*',
			timeout:     5000,
			async:       true,
			cache:       false,
			header:      {},
			username:    null,
			password:    null,
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8 ',
			xhrOptions:  {}
		},
		getXhr = (typeof window.XMLHttpRequest !== 'undefined') ?
			function(url) {
				if(mUrl.isLocal(url)) {
					return new window.XMLHttpRequest();
				} else {
					return window.XDomainRequest ? new window.XDomainRequest() : new window.XMLHttpRequest();
				}
			}
			: function() {
				try {
					return new ActiveXObject('MSXML2.XMLHTTP.3.0');
				} catch(exception) {
					return null;
				}
			};

	function setupGlobal(options) {
		if(typeof options === 'object') {
			var option;

			for(option in options) {
				if(typeof settings[option] !== 'undefined') {
					settings[option] = options[option];
				}
			}
		}
	}

	function setupLocal(options) {
		var self = this,
			option;

		options = (typeof options === 'object') ? options : {};

		for(option in settings) {
			self.settings[option] = options[option] || settings[option];
		}
	}

	function sendRequest(method, url, content) {
		var self     = this,
			xhr      = self.xhr,
			settings = self.settings,
			id;

		content = (typeof content === 'object') ? serialize(content) : content;
		url     = (settings.cache === false) ? ''.concat(url, (url.indexOf('?') > -1) ? '&' : '?', '_=' + new Date().getTime()) : url;
		url     = (content && method === 'GET') ? ''.concat(url, (url.indexOf('?') > -1) ? '&' : '?', content) : url;

		for(id in settings.xhrOptions) {
			xhr[id] = settings.xhrOptions[id];
		}

		xhr.open(method, url, settings.async, settings.username, settings.password);

		xhr.setRequestHeader('Accept', settings.accept);
		if(content && method !== 'GET') {
			xhr.setRequestHeader('Content-Type', settings.contentType);
		}
		for(id in settings.header) {
			xhr.setRequestHeader(id, settings.header[id]);
		}
		xhr.timeout            = settings.timeout;
		xhr.onprogress         = function(event) { onProgress.call(self, event); };
		xhr.onreadystatechange = function() { onReadyStateChange.call(self); };
		xhr.onerror            = function() { onError.call(self); };
		xhr.send(content || null);

		self.timeout = setTimeout(function() { timeout(xhr); }, settings.timeout);
	}

	function timeout(xhr) {
		xhr.abort();
	}

	function onProgress(event) {
		this.dfd.notify(event.loaded / event.total);
	}

	function onReadyStateChange() {
		var self = this,
			xhr  = self.xhr,
			dfd  = self.dfd;

		if(xhr.readyState === 4) {
			clearTimeout(self.timeout);

			if(xhr.status === 200) {
				dfd.resolve({ data: xhr.responseText, xhr: xhr });
			} else {
				dfd.reject({ status: xhr.status, xhr: xhr });
			}
		}
	}

	function onError() {
		var self = this;

		clearTimeout(self.timeout);
		self.dfd.reject();
	}

	function serialize(obj, prefix) {
		var parameter = [], id, key, value;

		for(id in obj) {
			key   = prefix ? ''.concat(prefix, '[', id, ']') : id;
			value = obj[id];

			parameter.push((typeof value === 'object') ? serialize(value, key) : ''.concat(encodeURIComponent(key), '=', encodeURIComponent(value)));
		}

		return parameter.join('&');
	}

	prototype = mPrototype.extend({
		setup: function setup(options) {
			setupGlobal(options);

			return this;
		},
		load: function(method, url, data, options) {
			var self = {};

			url = mUrl.resolve(url);

			self.id       = mUnique.string();
			self.dfd      = mQ.defer();
			self.xhr      = getXhr(url);
			self.timeout  = null;
			self.settings = {};

			setupLocal.apply(self, [ options ]);
			sendRequest.apply(self, [ method.toUpperCase(), url, data ]);

			return self.dfd.promise;
		},
		get: function(url, data, options) {
			return this.load('GET', url, data, options);
		},
		post: function(url, data, options) {
			return this.load('POST', url, data, options);
		},
		put: function(url, data, options) {
			return this.load('PUT', url, data, options);
		},
		'delete': function(url, data, options) {
			return this.load('DELETE', url, data, options);
		},
		head: function(url, data, options) {
			return this.load('HEAD', url, data, options);
		}
	});

	return prototype;
}, window, document));