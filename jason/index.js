var http = require('http');// Requiring users file
const data = require("./user");
const string = JSON.stringify(data);
console.log(data);

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Welcome to jurassic park " + string);
    res.end();
}).listen(1234);
