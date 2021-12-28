var http = require('http');
const tl = require('./user.json');
//var url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   
}).listen(8080);
