var spdy = require('spdy'),
    fs = require('fs'),
	keysDir = '/root/node_modules/spdy/keys';

var options = {
  key: fs.readFileSync(keysDir + '/spdy-key.pem'),
  cert: fs.readFileSync(keysDir + '/spdy-cert.pem'),
  ca: fs.readFileSync(keysDir + '/spdy-csr.pem')
};

var server = spdy.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world!');
});

server.listen(443);
