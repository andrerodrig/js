const path = require('path');
const express = require('express');
const body_parser = require('body-parser');
const app = express();

const shop_routes = require('./routes/shop');
const admin_routes = require('./routes/admin');

const port = 4000;

app.use(body_parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(shop_routes);

app.use('/admin',admin_routes);

app.use('/*',(request,response,next) =>{
    response.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(port, () => {console.log(`server running at port ${port}`)});

