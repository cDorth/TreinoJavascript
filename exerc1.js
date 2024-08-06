prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("digite um numero:  "));
let num2 = parseFloat(prompt("digite outro numero:  "));
let resp = num1+num2;
console.log("A soma dos numeros é: "+ resp );
