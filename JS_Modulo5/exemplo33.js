//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro
function classificanum(numero){
    var retorno = "";
    if(numero==0){
        retorno = "Nem par nem ímpar";
    }else{
        if(numero%2==0){
            retorno = "Número par";
        }else{
            retorno = "Número ímpar";
        }
    }
    return retorno;
}

console.log(classificanum(0));