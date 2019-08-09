const http = require('http');
const PORT = 3000;

//http.createServer(function(request,response){
	//response.writeHead(200,{'Content-Type':'text/plain'});
	//response.end('Hello World\n');
//}).listen(PORT);

//Even more explicit way to create a HTTP server 
const server = http.createServer();
server.on('request',function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World\n');
});

server.listen(PORT);

console.log('Server running at http://localhost:3000/');
