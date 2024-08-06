prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let horas = parseInt(prompt("quantas horas você trabalha por semana?  "));
let valHora = parseFloat(prompt("quanto que você ganha por hora? "));
let valSemana = horas * valHora;
let valMes = valSemana * 4;

console.log(nome+" você ganha "+valSemana+" R$ por semana, e "+valMes+" R$ por mês" );