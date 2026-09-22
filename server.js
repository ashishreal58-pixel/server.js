// server.js
// Basic HTTP Server using the built-in http module

const http = require("http");

const PORT = 3000; // custom port

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to the Home Page!");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page: This server was built using Node's http module.");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page: You can reach us at contact@example.com");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Page Not Found");
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
