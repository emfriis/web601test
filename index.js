const http = require('http'); // require - 
// contst test = require('./test');
const routes = require('./routes'); // routes

const server = http.createServer(routes.handler);

server.listen(3000);