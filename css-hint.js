var $ = require('jquery');
var url = require('url');

exports.header = null;

exports.get = function(request, response, content) {
	if (exports.header === null) {
		exports.header = [];

		var currentHeader = response.getHeader('Link') || [];
		exports.header = $.merge(currentHeader, exports.header); 
		$('link[rel="stylesheet"]', $(content)).each(function() {
			var href = $(this).attr('href');
			var urlInfo = url.parse(href);
			if (typeof urlInfo.hostname !== 'undefined') {
				var host = '';
			} else { 
				var host = 'https://me2-dev3.pocci.cxo.name/';
			}
			var link = host + $(this).attr('href') + '>; rel=prefetch';
			exports.header.push(link);
		});
	}
	response.setHeader('Link', exports.header);
}
