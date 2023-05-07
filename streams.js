const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) {
  //       console.log("Could not read file");
  //     }
  //     res.end(data);
  //   });
  //SOLUTION 2 STREAMS
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => res.end());
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not FOUND");
  //   });
  //SOLUTION 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //readableSource.pipe(writableDestination)
});
server.listen(8000, "127.0.0.1", () => {
  console.log("server running");
});
