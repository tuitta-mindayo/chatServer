let fs = require('fs');
let http = require('http');
const log = require('electron-log');
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
const make = document.querySelector('.make');

//EventListeners
button.addEventListener('click', function (clickEvent) {
    //log.info("ボタン押された");
    alert("test2(index.jsから)");
})

function makeFile()
{
  alert("test2(index.jsから)");
}
