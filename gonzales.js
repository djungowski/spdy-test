var spdy = require('spdy'),
    fs = require('fs'),
	imagesJs = require('./images.js'),
	cssJs = require('./css.js'),
	url = require('url');
	keysDir = '/root/node_modules/spdy/keys';

var options = {
  key: fs.readFileSync(keysDir + '/spdy-key.pem'),
  cert: fs.readFileSync(keysDir + '/spdy-cert.pem'),
  ca: fs.readFileSync(keysDir + '/spdy-csr.pem')
};

var server = spdy.createServer(options, function(req, res) {
  var urlInfo = url.parse(req.url);

  var imgRegex = /!(index\.html)$/;
  if (urlInfo.pathname.search(imgRegex) && urlInfo.pathname != '/') {
	res.writeHead(200);
	try {
		var resource = fs.readFileSync(__dirname + '/www.chip.de/' + urlInfo.path);
	} catch (e) {
		var resource = '';
	}
	res.end(resource);
  }	else {
	  res.writeHead(200);
	  var content = fs.readFileSync(__dirname + '/www.chip.de/index.html');
	  var css = cssJs.get(req, res, content);
	  var images = imagesJs.get(req, res, content);
	  res.end(content);
  }
});

server.listen(443);
