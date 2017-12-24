var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('mama love zihan FFF\n  ');
}).listen(1338,'127.0.0.1');
console.log('server running at http://127.0.0.1:1334/');