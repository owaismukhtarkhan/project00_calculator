var prompt = require("prompt-sync")();
//
// get input from the user.
//
let num1: number = parseInt(prompt("Please insert first number:"));
let arth: string = prompt("Please insert desired function (+, -, /, *):");
let num2: number = parseInt(prompt("Please insert second number:"));

if (arth == "-") {
  let minus = num1 - num2;
  console.log(minus);
} else if (arth === "+") {
  let adds = num1 + num2;
  console.log(adds);
} else if (arth == "*") {
  let multiply = num1 * num2;
  console.log(multiply);
} else if (arth == "/") {
  let divide = num1 / num2;
  console.log(divide);
} else {
  console.log("Please select the correct function (+, -, /, *)");
}

export {};
