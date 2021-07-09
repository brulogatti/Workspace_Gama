//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diasemana(valor){
    var retorno = "";
    switch (valor){
        case 1:
            retorno = "Domingo";
            break;
        case 2:
            retorno = "Segunda-feira";
            break;
        case 3:
            retorno = "Terça-feira";
            break;
        case 4:
            retorno = "Quarta-feira";
            break;
        case 5:
            retorno = "Quinta-feira";
            break;
        case 6:
            retorno = "Sexta-Feira";
            break;
        case 7:
            retorno = "Sábado";
            break;
        default:
            retorno = "Dia inexiste!";
    }
    return retorno;
}

var dia = 5;
console.log(diasemana(dia));