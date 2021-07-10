//Interpolação
//Atenção, é crase não aspas!
// var bruna = "Bruna";
// console.log(`${bruna} é legal`);

//Operador ternário
// if(idade>=18){
//     return "Maior de idade"
// }else{
//     return "Menor de idade"
// }
// function demaior(idade){
//     return idade>=18 ? "Maior de idade":"Menor de idade";
// }
// console.log(demaior(21))

//Arrow-functions
// function soma(a,b){
//     return a+b;
// }
// const soma = (a,b) => a+b
// const sayhello = nome => `Olá ${nome}!`

// console.log(soma(5,8));
// console.log(sayhello('Bruna'));

//Arrays
// const alunasGama = ['Bruna', 'Sílvia', 'Valéria', 'Flávia']
// Acessar informações de um array
// console.log(alunasGama[3])

// Operador spread(...)
// const alunasXP = [...alunasGama, 'Marina']
// console.log(alunasXP)

// Métodos de iteração
// Map
// alunasXP.map(aluna => console.log(aluna))

//Filter
// const numeros = [45, 71, 10, 91, 17, 95]
// const numerosimpares = numeros.filter(numero => numero%2!=0)
// console.log(numerosimpares)
// const numeropares = numeros.filter(numero => numero%2==0)
// console.log(numeropares)

// Sort
// const numeroscrescente = numeros.sort()
// console.log(numeroscrescente)
// const numeroscrescente = numeros.sort((a,b)=>b-a)
// console.log(numeroscrescente)

//Reduce -> reduz o array a um resultado de uma operação matemática
// const numbers = [1,45,24]
// const soma = numbers.reduce((valorAnterior,valorAtual) => {
//     return valorAnterior+valorAtual
// },10)
// console.log(soma)

//Objetos
// const pessoa = {
//     nome: "Bruna",
//     idade: 22,
//     altura: 1.63
// }

//Notação de ponto -> acessar informações do objeto
// console.log(pessoa.nome);
//Notação de colchetes -> acessar informações do objeto por meio de colchetes
// console.log(pessoa['altura']);
//Como desestruturar objetos
// const {nome, idade, altura} = pessoa
// console.log(nome);
// console.log(idade);

//Array de objetos
// const filmes = [
//     {
//         id: 1,
//         titulo: "De Volta para o Futuro",
//         descricao: "Filme de Ficção-Científica",
//         duracao: 120
//     },
//     {
//         id: 2,
//         titulo: "Toy Story",
//         descricao: "Filme de Animação",
//         duracao: 90
//     },
//     {
//         id: 3,
//         titulo: "De repente 30",
//         descricao: "Filme de Romance",
//         duracao: 120
//     }
// ]

//Acessar elementos
// const [{id, titulo, descricao, duracao}] = filmes
// console.log(titulo)
// filmes.map(filme => console.log(filme.descricao))


