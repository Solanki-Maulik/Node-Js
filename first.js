
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server running at port 3000");
});

server.listen(3000);