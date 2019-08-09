const http = require('http');
const path = require('path');

const rootDir = require('./util/path');

//We import the third dependencies of the express
const express = require('express');
const bodyParser = require('body-parser');
const express_hbs = require('./node_modules/express-handlebars');

const PORT = 3000;

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');

//We create the constant app that will receive the instance
//of the exported function from express
const app = express();

//app.engine('hbs',express_hbs({
//    layoutsDir:'views/layouts',
//    defaultLayout: 'main-layout'
//}));
app.set('view engine','ejs');
app.set('views','views');
//Before create the server itself, we have to create the middlewares
//that will control the server
//app.use((req,res,next) => {
//    console.log('In the middleware');
//    next();
//});

//app.use((req,res,next) => {
//    console.log('In another middleware');
//    res.send('<h1>Hello from Express!</h1>');
//});

//Then we can create the server by passing app as argument
//to the function createServer()
//const server = http.createServer(app);

//server.listen(PORT);

//Or we can, instead of to do all this, only use the function listen()

//app.use('/',(req,res,next) => {
//  console.log('This aways runs!');
//    next();
//});


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(shopRoutes);
app.use('/admin',adminData.routes);

app.use((req,res,next) => {
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
});


app.listen(PORT);
