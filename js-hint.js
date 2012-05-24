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

	if (exports.js.length == 11) {
		var currentHeader = response.getHeader('Link') || [];
	    exports.js = $.merge(currentHeader, exports.js);
	}

	response.setHeader('Link', exports.js);
}
