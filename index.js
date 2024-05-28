"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
//
// get input from the user.
//
let num1 = prompt("Please insert first number:");
let arth = prompt("Please insert desired function:");
let num2 = prompt("Please insert second number:");
if (arth == "+") {
    let add = num1 + num2;
    console.log(add);
}
else if (arth == "-") {
    let minus = num1 - num2;
    console.log(minus);
}
else if (arth == "*") {
    let multiply = num1 * num2;
    console.log(multiply);
}
else if (arth == "/") {
    let divide = num1 / num2;
    console.log(divide);
}
