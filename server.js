//start server from here
//this will be deployed using heroku PaaS

var http = require("http");

http.createServer(function(request, response) {
	console.log('request received....');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("It's alive!");
  response.end();
}).listen(process.env.PORT || 3000);

console.log('server started at post : 3000');
