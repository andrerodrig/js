const express = require('express');
const body_parser = require('body-parser');

const feedRoutes = require('./routes/feed');

const port = 8080;

const app = express();
//app.use(body_parser.urlencoded({extended: false})); // x-www-form-urlencoded <form>
app.use(body_parser.json()); // application/json

app.use((req,res,next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
	res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
	next();

});
app.use('/feed',feedRoutes);

app.listen(port, () => {
	console.log(`Backend running at port ${port}` );
});
