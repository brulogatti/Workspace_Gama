//Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 
//que irão ser substituidos pela palavra "PULOU".

var numero = 10;
do{
    if(numero==35||numero==45){
        console.log("Pulou");
    }else{
        console.log(numero);
    }
    numero+=5;
}while(numero<=60)