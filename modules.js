// console.log(arguments);
// console.log(require("module").wrapper);

const Calculator = require("./test-module-1");

const calc1 = new Calculator();

console.log(calc1.add(2, 5));
