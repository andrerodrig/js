const fs = require('fs');

const stream = fs.createReadStream('./resource.json')

stream.on('data',function(chunk){
	console.log(chunk);
});

stream.on('end',function(){
	console.log('finished');
});
