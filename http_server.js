const http = require('http');

function http_handler(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello World \n');
}

http.createServer(http_handler)
  .listen(2222, '127.0.0.1');

console.log('HTTP Server running at http://127.0.0.1.2222');
