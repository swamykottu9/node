const fs = require('fs');
const url = require('url');

const requesthandler = (req, res) => {
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
        const body = [];
        req.on('data', (chunk) => {
           body.push(chunk);
           console.log(chunk);
        });
        req.on("end", ()=> {
          const message = Buffer.concat(body).toString();
          console.log(message);
          fs.readFile('./home/home.html', (err, data) => {
            if(err)
            {
                console.log("UUUU");
            }
            else 
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
            });
        });
    }
}

module.exports = requesthandler;