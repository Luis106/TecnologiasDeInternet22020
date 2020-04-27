var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var q = url.parse(req.url, true).query;

  var n1 = q.n1;
  var n2 = q.n2;
  var n3 = q.n3;

  sum = parseInt(n1) +parseInt(n2) + parseInt(n3);

  res.end("Suma: "+ sum);
}).listen(3000);