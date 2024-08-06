prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let item = prompt("que item você comprou?  ");
let valor = parseFloat(prompt("qual é o valor do produto?  "));
let quant = parseFloat(prompt("qual é a porcentagem de desconto do produto?"));
let desconto = (quant/100)*valor;
let vtotal = valor - desconto

console.log(nome+", você quer "+item+ ", no valor de "+valor+" R$, possuindo um desconto de "+desconto+" R$, fica com o valor "+ vtotal+"R$" );