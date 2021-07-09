//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6
function fatorial(numero){
    var resultado=1;
    if(numero==0){
        resultado=1;
    }else{
        for(var i = numero; i>0; i--){
            resultado=resultado*i;
        }
    }
    return resultado;
}

console.log(fatorial(0))