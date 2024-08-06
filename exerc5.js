prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let item = prompt("que item você comprou?  ");
let valor = parseFloat(prompt("qual é o valor do produto?  "));
let quant = parseFloat(prompt("quantos você quer?"));
let carrinho = valor * quant;
let imposto = 0.18 * carrinho;
// console.log(imposto); verificando se o imposto esta sendo aplicado de maneira correta
let total = carrinho + imposto;
console.log(nome+", você comprou "+quant+" "+item+ ", no valor de "+valor+" R$ cada, tendo um valor total de "+carrinho+" R$ mais o imposto de "+imposto+" R$ o total da compra fica de "+ total+" R$" );