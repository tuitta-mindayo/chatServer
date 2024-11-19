let fs = require('fs');
let http = require('http');
let server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'UTF-8', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

server.listen(3000);
console.log('Start Server!');
