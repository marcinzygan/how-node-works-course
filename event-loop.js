const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
setTimeout(() => {
  console.log("timer1 finished");
}, 0);
setImmediate(() => {
  console.log("Immediate1 finished");
});
fs.readFile("test-file.txt", () => {
  console.log("file read I/O finished");
  setTimeout(() => {
    console.log("timer1 finished");
  }, 0);
  setTimeout(() => {
    console.log("timer2 finished");
  }, 3000);
  setImmediate(() => {
    console.log("Immediate2 finished");
  });
  process.nextTick(() => console.log("next tick"));
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});
console.log("helo from top lvl code");
