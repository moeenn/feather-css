const static = require("node-static");
const http = require("http");

const port = 8000;
const fileserver = new static.Server("./public");

const server = http.createServer((request, response) => {
	fileserver.serve(request, response);
});

server.listen(port, () => {
	console.log(`Visit Demo Page at http:://localhost:${port}/`);
});