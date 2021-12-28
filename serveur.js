var http = require('http');
var tl = require('./todolist');
//var url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write("action en cours: " + tl.mytodolist());

  
  let cle = req.url.substring(1);

  //if ( cle == "all") {
  //res.write(tl.showall());
  //}
  //else {
  res.write("A faire: " + tl.searchtask(cle));
  //}
}).listen(8080);
