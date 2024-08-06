prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let num1 = parseFloat(prompt("digite um numero:  "));
let num2 = parseFloat(prompt("digite outro numero:  "));

if(num1 > num2){
    resp = num1-num2;
    console.log(nome + ", a diferença é de : "+ resp);
}
else{
    resp = num2-num1;
    console.log(nome + ", a diferença é de : "+ resp);
}


