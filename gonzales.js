var spdyMethod = 'hint';

var spdy = require('spdy'),
    fs = require('fs'),
	imagesJs = require('./images-' + spdyMethod + '.js'),
	cssJs = require('./css-' + spdyMethod + '.js'),
	jsJs = require('./js-' + spdyMethod + '.js'),
	url = require('url');
	keysDir = '/root/node_modules/spdy/keys';

var options = {
  key: fs.readFileSync(keysDir + '/spdy-key.pem'),
  cert: fs.readFileSync(keysDir + '/spdy-cert.pem'),
  ca: fs.readFileSync(keysDir + '/spdy-csr.pem')
};

var server = spdy.createServer(options, function(request, response) {
  var urlInfo = url.parse(request.url);

  var imgRegex = /!(index\.html)$/;
  if (urlInfo.pathname.search(imgRegex) && urlInfo.pathname != '/') {
	response.writeHead(200);
	try {
		var responseource = fs.readFileSync(__dirname + '/www.chip.de/' + urlInfo.path);
	} catch (e) {
		var responseource = '';
	}
	response.end(responseource);
  }	else {
	  var content = fs.readFileSync(__dirname + '/www.chip.de/index.html', 'utf8');
	  jsJs.get(request, response, content);
	  cssJs.get(request, response, content);
	  imagesJs.get(request, response, content);
	  response.writeHead(200);
	  response.end(content);
  }
});

server.listen(443);
