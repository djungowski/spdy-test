var $ = require('jquery');
var url = require('url');

exports.js = [
	'https://me2-dev3.pocci.cxo.name/js/_merged/efws.js?t=48766',
	'https://me2-dev3.pocci.cxo.name/js/_merged/jQuery.js',
	'https://me2-dev3.pocci.cxo.name/js/_merged/jQueryUI.js',
	'https://me2-dev3.pocci.cxo.name/js/_merged/mvt.js',
	'https://me2-dev3.pocci.cxo.name/js/_merged/mvtSzenarios.js',
	'https://me2-dev3.pocci.cxo.name/js/_merged/global.js',
	'https://me2-dev3.pocci.cxo.name/js/_merged/navseiten.js',
	'https://me2-dev3.pocci.cxo.name/js/_merged/prototypen.js',
	'https://me2-dev3.pocci.cxo.name/js/mobileredirect.js?v=2',
	'https://me2-dev3.pocci.cxo.name/js/omniture_somtr_code_vH.23.4.js?version=H.23.4.20110808',
	'https://me2-dev3.pocci.cxo.name/js/cxo_adtech-57959-min.js'
];

exports.get = function(request, response, content) {
	var headers = { 'content-type': 'application/javascript' };
	exports.js.forEach(function(item) {
		response.push(item, headers, function(err, stream) {
			if (err) {
				console.info(err.stack);
			}
			stream.end();
		});
	});
}
