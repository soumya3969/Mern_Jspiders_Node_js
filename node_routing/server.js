const http = require("http");
const path = require("path");
const fs = require("fs");
let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let homePath = path.join(__dirname, "./public/home.html");
    fs.readFile222(homePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("something wrong while reading");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/home.css") {
    let homeCss = path.join(__dirname, "public/css/home.css");
    fs.readFile(homeCss, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("something wrong while reading");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } else if (req.url == "/about") {
    let aboutPath = path.join(__dirname, "public/about.html");
    fs.readFile(aboutPath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("something wrong while reading");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/contact") {
    let contactPath = path.join(__dirname, "public/contact.html");
    fs.readFile(contactPath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("something wrong while reading");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});
const PORT = 5173;
server.listen(PORT, () => {
  console.log("server Started at", PORT);
});
