const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end('Hellow world');
})

server.listen('3000', () => {
    console.log("servidor corriendo en el peurto 5000");
});