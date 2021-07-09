//Vamos criar uma conta bancária com as 3 operações básicas? rs
//a) A conta deverá iniciar com o saldo de 100
//b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
//c) Deverá ser possível passar 1 valor para a operação escolhida
//d) Deverá retornar o resultado e imprimir no console o saldo atual|

function depositar(deposito,saldo){
    return saldo+deposito;
}

function sacar(saque,saldo){
    return saldo-saque;
}

function consultarsaldo(saldo){
    console.log("Seu saldo é: " + saldo);
}

var saldo=100;
var deposito = 45.50;
var saque = 89.99;
var operacao='consultar saldo';

switch (operacao){
    case "depositar":
        saldo = depositar(deposito,saldo);
        consultarsaldo(saldo);
        break;
    
    case "sacar":
        saldo = sacar(saque,saldo);
        consultarsaldo(saldo);
        break;

    case "consultar saldo":
        consultarsaldo(saldo);
        break;
    default:
        console.log('Opção inválida!')
}