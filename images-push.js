var url = require('url');
var $ = require('jquery');

exports.header = null;

exports.get = function(request, response, content) {
	if(exports.header === null) {
		exports.header = [];

		$('img', $(content)).each(function() {
			var urlParts = url.parse($(this).attr('src'));
			exports.header.push('https://me2-dev3.pocci.cxo.name/' + urlParts.path);
		});
	}
	
	for(var i in exports.header) {
		response.push(exports.header[i], {'content-type': 'image/jpeg'}, function(error, stream) {
			if(error) {
				console.log(error.stack);
			}

			stream.end('alert("hello from push stream!");');
		});
	}
}
