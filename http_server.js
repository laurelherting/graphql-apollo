const http = require('http');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const port = argv.port;

function http_handler(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello World \nI am running at ${port}');
}

http.createServer(http_handler)
  .listen(port, '127.0.0.1');

console.log('HTTP Server running at http://127.0.0.1:{port}');

