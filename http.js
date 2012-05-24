
var spdy = require('http'),
    fs = require('fs'),
	url = require('url');
	keysDir = '/root/node_modules/spdy/keys';

var server = spdy.createServer(function(request, response) {
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
	  response.writeHead(200);
	  response.end(content);
  }
});

server.listen(80);
