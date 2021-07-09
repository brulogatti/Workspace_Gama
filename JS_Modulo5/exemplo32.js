//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, 
//mostre uma mensagem no console "Os números são iguais".

function maior(a,b){
    if(a>b){
        console.log("O maior número é " + a);
    }else if(a<b){
        console.log("O maior número é " + b);
    }else{
        console.log("Os dois são iguais!");
    }
}

var a = 20;
var b = 10;
maior(a,b);
