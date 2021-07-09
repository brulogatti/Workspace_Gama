//Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.
function tempoviagem(velocidade,distancia){
    return distancia/velocidade;
}

var distancia = 200
var velocidade = 100
console.log(tempoviagem(velocidade,distancia))