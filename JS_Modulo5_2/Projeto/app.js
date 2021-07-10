const musicas = require('./database')

const readline = require('readline-sync')

const entradainicial = readline.question("Deseja buscar uma musica?(S/N)")

if(entradainicial.toLocaleUpperCase() === 'S'){
    console.log('Esses são os generos disponiveis: ')
    console.log('rock','/pop','/bossa nova','/k-pop','/disco')

    const entradagenero = readline.question("Qual genero voce escolhe?")

    const retorno = musicas.filter(musica => musica.genero === entradagenero.toLocaleLowerCase())

    console.table(retorno)
}else{
    const musicasordenadas = musicas.sort((a,b)=>a.duracao - b.duracao)
    console.log("Essas sao todas as musicas disponiveis: ")
    console.table(musicasordenadas)
}

//Bibliotecas a serem importadas pelo terminal
//Entrar na pasta do projeto pelo terminal e digitar os comandos:
//npm init -y
//npm i readline-sync
//Em seguida criar um arquivo .gitignore e adicionar a pasta: node_modules

//Para executar o projeto acesse a pasta do projeto pelo terminal e digite:
//npm start
