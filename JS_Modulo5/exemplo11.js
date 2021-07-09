//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
var altura = 1.63
var massa = 34
var imc = massa/(altura*altura)

console.log("Seu IMC: " + imc);

if(imc<18.5){
    console.log("Classificação: Magreza");
}else if (imc<24.9){
    console.log("Classificação: Normal");
}else if (imc<30){
    console.log("Classificação: Sobrepeso");
}else{
    console.log("Classificação: Obesidade");
}