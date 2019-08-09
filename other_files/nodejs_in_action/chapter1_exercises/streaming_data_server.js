const http = require('http');
const fs = require('fs');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'image.jpg'});
	fs.createReadStream('./andromeda.jpg').pipe(response);
}).listen(3000);

console.log('Server running at http://localhost:3000/');
