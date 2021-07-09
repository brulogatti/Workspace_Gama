//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) 
//e o valor total a ser pago.

function conta(valor){
    console.log("Gorjeta: R$" + 0.1*valor);
    console.log("Valor total: R$" + 1.1*valor);
}

var valor = 187.10
conta(valor);