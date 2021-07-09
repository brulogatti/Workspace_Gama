// 	Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 
//imprima a palavra "CONTINUE".
var numero = 0;

do{
    if (numero<20){
        numero++;
    }else{
        if(numero==60 || numero==90){
            console.log("Continue");
        }else{
        console.log(numero);
        }
        numero+=10;
    }

}while(numero<=100);