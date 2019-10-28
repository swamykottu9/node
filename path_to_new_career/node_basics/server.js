const http = require("http");
var url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
   console.log(req);
    var baseUrl = req.url.replace(/\/$/, '');
    console.log('Web server listening at: %s', req.url);
    var q = url.parse(req.url, true);

    console.log(q.host); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/default.htm'
    if(q.pathname === '/'){
       fs.readFile('./login/login.html', (err, data) => {
              if(err) {
              }else {
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.write(data);
                  res.end();
              }
       });
    }

    if(q.pathname === '/message' && req.method === "POST")
    {
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<html>');
        // res.write('<head><title>Submitted</title></head>');
        // res.write('<body><h1>Saved successfully</h1></body>')
        // res.write('</html>')
        res.redirect('./home/home.html');
        res.end();
    }   
});

server.listen(4000);