//Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e 
//saídas quando tentarmos recuperar.

var variavel_global = 2.75
//Permite a troca de valores em qualquer ponto da função principal

const constante = 3
//Não permite a troca

console.log("VAR: " + variavel_global)
console.log("CONST: " + constante)

{
    let variavel_local = 2.75
    //Permite a troca de valores somente dentro da função onde foi criada
    console.log("LET: " + variavel_local)
    variavel_local = 3
    console.log("LET: " + variavel_local)
}

//variavel_local = 4 -> impossível a execução
variavel_global = 3
//constante = 5 -> impossível a execução

console.log("VAR: " + variavel_global)
//console.log("LET: " + variavel_local) -> impossível a impressão, fora da função onde foi criada
console.log("CONST: " + constante)
//Valor da contante não muda