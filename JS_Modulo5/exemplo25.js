//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, 
//se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisaoehpar(a,b){
    var divisao = a/b;
    if(a%b==0){
        console.log("O valor da divisão é: " + divisao);
        console.log("É par!");
    }
    return divisao;
}

var a = 10;
var b = 2;
divisaoehpar(10,2);