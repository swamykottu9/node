const http = require('http');

const handler = require('./routing/route')



const server = http.createServer(handler);

server.listen(4000);