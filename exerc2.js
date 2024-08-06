prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let nasc = parseFloat(prompt("digite sua data de nascimento:  "));
let anoatual = new Date().getFullYear();
idade = anoatual-nasc;
console.log(nome + ", Sua idade é de: "+ idade + " anos." );

