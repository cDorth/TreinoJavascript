prompt = require("prompt-sync")();

let num = parseInt(prompt("digite um numero:  "));
if(num%2==0){
   console.log(num+" é par ")
}else{
    console.log(num+" é ímpar ")
}