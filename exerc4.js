prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let C = parseFloat(prompt("digite uma temperatura em graus celcius :  "));
let F = C * 9/5 + 32;
console.log(nome + ", a temperatura é de : "+ F +" s°F");