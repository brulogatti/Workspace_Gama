//Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
//a) Deverá ser possível escolher uma operação aritimética em forma de string: 
//'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function soma(a,b){
    return a+b;
}

function multiplicacao(a,b){
    return a*b;
}

function subtracao(a,b){
    return a-b;
}

function divisao(a,b){
    return a/b;
}

var operacao = "a";
var a = 12;
var b = 6;

switch (operacao){
    case "soma":
        console.log(soma(a,b));
        break;
    case "subtração":
        console.log(subtracao(a,b));
        break;
    case "multiplicação":
        console.log(multiplicacao(a,b));
        break;
    case "divisão":
        console.log(divisao(a,b));
        break;
    default:
        console.log("Operação inválida!");
}
