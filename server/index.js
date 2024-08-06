const http = require("http");
const fs = require("fs");
const os = require("os");

const myServer = http.createServer((req, res) => {
  let userName = os.hostname;
  console.log(userName);
  const log = `${Date.now()}:New Req Received from ${userName}\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    res.end("Hello From Server.");
  });
});

const PORT = 8000;
myServer.listen(PORT, () => {
  console.log(`Server Started On ${PORT}`);
});
