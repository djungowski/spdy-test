var $ = require('jquery');
var url = require('url');

exports.css = null;

exports.get = function(request, response, content) {
	if (exports.css === null) {
		exports.css = $('link[rel="stylesheet"]', $(content));
	}

	var headers = { 'content-type': 'text/css' };

	exports.css.each(function() {

		var href = $(this).attr('href');
		var urlInfo = url.parse(href);
		if (typeof urlInfo.hostname !== 'undefined') {
			var host = '';
		} else {
			var host = 'https://me2-dev3.pocci.cxo.name/';
		}

		var resource = host + href;
		response.push(resource, headers, function(err, stream) {
			if (err) {
				console.info(err.stack);
			}
			stream.end();
		});
	});
}
