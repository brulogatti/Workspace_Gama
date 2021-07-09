//Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(numero){
    for(var i = 0; i < 11; i++){
        console.log(numero+"x"+i+"="+numero*i)
    }
}

tabuada(10);