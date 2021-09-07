const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcomte to our home page");
	}
	if (req.url === "/about") {
		res.end("Here ir our short history");
	}
	res.end(`
	<h1>Oopss</h1>
	<p>We can't seem to find the page you are looking for</p>
	<a href="/">Go to home</a>
	`);
});

server.listen(5000);
