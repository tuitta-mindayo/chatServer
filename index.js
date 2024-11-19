let fs = require('fs');
let http = require('http');
let server = http.createServer((req, res) => {
    fs.readFile('/index.html', 'UTF-8', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

server.listen(3000);
console.log('Start Server!');

//getElements
const name = document.getElementById('name');
const description = document.getElementById('description');
const addonType = document.getElementById('addonType');
const minVersion = document.getElementById('minVersion');
const make = document.getElementById('make');

//EventListeners
make.addEventListener('click', makeFile);

function makeFile()
{
  alert("test");
}
