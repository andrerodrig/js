//module for Manipulating paths
const path = require('path');

//module for express
const express = require('express');

//express.Router() is used to manipulating  the Routes
const router = express.Router();

// method to handle HTTP -> GET to access by url
router.get('/add-product',(request, response, next) => {
    response.sendFile(path.join(__dirname,'..','views','add-product.html'));
});

// method to handle HTTP -> POST to add a product
router.post('/add-product',(request,response,next) => {
	console.log(request.body);
	response.redirect('/');
});

module.exports = router;
