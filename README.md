Requirements
=========
In order to run this SPDY test you need nodejs and a SPDY compatible browser (Recent Chrome or Firefox. If you have a Firefox Version < 13 you need to enable spdy in about:config)

Installation
=========
1. Clone git repo: git clone git@github.com:djungowski/spdy-test.git
2. Initialize submodules (node-spdy module): git submodule update --init
3. Start node server: node gonzales.js
4. Access from web browser: https://&lt;yourdomain&gt;/

Different implementations
=========
You can try and benchmark different implementations

1. HTTP
===
This is totally simple HTTP implementation
node http.js (Port 80)

2. HTTPS
===
This is totally simple HTTPS implementation
node https.js (Port 443)

3. SPDY
===
This is exactly like the HTTPS implementation, only it uses SPDY protocol instead of HTTPS
node spdy.js (Port 443)

4. SPDY + Hinting
===
This implementation uses SPDY protocol with hinting
4.1 Make sure first line of gonzales js is __var spdyMethod = 'hint';__
4.2 node gonzales.js

5. SPDY + Push
===
This implementation uses SPDY protocol with push
5.1 Make sure first line of gonzales js is __var spdyMethod = 'push';__
5.2 node gonzales.js
