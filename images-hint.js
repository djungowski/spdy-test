var url = require('url');
var $ = require('jquery');

exports.header = null;

exports.get = function(request, response, content) {
	if(exports.header === null) {
		exports.header = [];
		var currentHeader = response.getHeader('Link') || [];
		exports.header = $.merge(currentHeader, exports.header);

		$('img', $(content)).each(function() {
			var urlParts = url.parse($(this).attr('src'));
			exports.header.push('<' + urlParts.path + '>; rel=prefetch');
		});
	}
	
	response.setHeader('Link', exports.header);

	/*
	exports.images.each(function() {
		var urlParts = url.parse();
		response.push('https://me2-dev3.pocci.cxo.name' + urlParts.pathname, {'content-type': 'image/jpeg'}, function(error, stream) {
			if(error) {
				console.log(error.stack);
			}

			stream.end('alert("hello from push stream!");');
		});
	});
	*/
}