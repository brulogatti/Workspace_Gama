//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
function demaior(ano){
    var atual = 2021;
    if((atual-ano)>=18){
        console.log("Maior de idade!");
    }else{
        console.log("Menor de idade!");
    }
}

var ano = 2004;
demaior(ano);