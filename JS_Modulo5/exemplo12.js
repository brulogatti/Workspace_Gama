//Crie uma função que determina se um número é par ou impar.

function parimpar(numero){
    var retorno;
    if(numero%2==0){
        retorno = "Par";
    }else{
        retorno = "Ímpar";
    }
    return retorno
}

console.log(parimpar(11));