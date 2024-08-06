prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let total = parseFloat(prompt("qual é o valor total do protuto?  "));
let parc = parseInt(prompt("fez em quantas parcelas? "));
let valorParc = total/parc;

console.log(nome+", você comprou um produto de "+total+ " R$, fez em "+parc+" parcelas no valor de "+valorParc+" cada" );