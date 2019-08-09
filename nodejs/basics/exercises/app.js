/**
 * 1 - [DONE] Spin up a Node.js driven Server (on port 3000)
 * 2 - [DONE] Handle two routes: '/' and '/users'
 *          [DONE] Return some greeting text on '/'
 *          [DONE] Return a list of dummy users
 * 3 - [DONE] Add a form with a "username" <input> to the "/" page
 *        and submit a POST request to "/create" upon a button click
 * 4 - []
 */

 const http = require('http');
 const PORT = '3000';

 const routes = require('./routes');

 const server = http.createServer(routes);

 server.listen(PORT);