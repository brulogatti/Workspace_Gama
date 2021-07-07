//Exercícios

//Exercício 1: FizzBuzz
// function fizzbuzz(entrada){
//     if(typeof entrada !== 'number'){
//         retorno = 'Não é um número';
//     }else{
//         if(entrada%3===0){
//             if(entrada%5===0){
//                 retorno = 'FizzBuzz';
//             }
//             else{
//                 retorno = 'Fizz';
//             }
//         }else if(entrada%5===0){
//             retorno = 'Buzz';
//         }
//         else{
//             retorno = entrada;
//         }
//     }

//     return retorno;
// }

// var valor = 'hello';
// var resultado = fizzbuzz(valor);
// console.log(resultado)

//Exercício 2: Reverse String
// function reverseString(word){
//     var retorno=" ";
//     for (i=word.length;i>0;i--){
//         retorno = retorno+word[i-1];
//     }
//     return retorno;
// }

// var palavra="Hoje é terça-feira";
// var resultado = reverseString(palavra);
// console.log(resultado);

//Exercício 3: Converter Celsius Farenheit
function converterFarenheit(temperature){
    return ((temperature*9)/5 + 32);
}

let temperatura = 1;
resultado = converterFarenheit(temperatura);
console.log("O valor em Farenheit é: "+ resultado);