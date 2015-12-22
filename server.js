//start server from here

var http = require("http");

http.createServer(function(request, response) {
	console.log('request received....');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("It's alive!");
  response.end();
}).listen(3000);

console.log('server started at post : 3000');
