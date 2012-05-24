var spdyMethod = 'push';

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
		var resource = fs.readFileSync(__dirname + '/www.chip.de/' + urlInfo.path);
	} catch (e) {
		var resource = '';
	}
	response.end(resource);
  }	else {
	  var content = fs.readFileSync(__dirname + '/www.chip.de/index.html', 'utf8');
	  imagesJs.get(request, response, content);
	  jsJs.get(request, response, content);
	  cssJs.get(request, response, content);
	  response.writeHead(200);
	  response.end(content);
  }
});

server.listen(443);
