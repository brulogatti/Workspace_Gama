//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.
var mensagem ="";
var sinal ="Vermelho";

switch (sinal){
    case "Verde":
        mensagem = "Siga!";
        break;
    case "Amarelo":
        mensagem = "Atenção!";
        break;
    case "Vermelho":
        mensagem = "Pare!"
        break;
    default:
        mensagem = "Amarelo piscante - MUITA ATENÇÃO!"
        break;
}

console.log(mensagem);
