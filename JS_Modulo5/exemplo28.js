//Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.
function promocao(valor, percentual){
    var desconto = valor*(percentual/100);
    console.log("Desconto: R$" + desconto);
    console.log("Valor: R$" + (valor-desconto));
}

var valor = 200;
var desconto = 10;
promocao(valor,desconto);