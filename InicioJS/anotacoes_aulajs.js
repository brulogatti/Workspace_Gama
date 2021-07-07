// var myName = "Bruna";

// let language = "JavaScript";

// const pattern = "ECMAScript";

// console.log(myName)


// {
//     let numero = 32;

//     console.log(numero)
// }


//Tipos de dados

//var myName = "Bruna" //string

// var age = 26 //number

// var altura = 1.63 //number

// null
// undefined

// var isStudent = true

// var person = {
//     "nome" : "Bruna",
//     "idade": 32
// }

// var students = ["Bruna", "Vinicius", "Walter"]

// function sum(a,b){
//     return a+b
// }

//Operadores matemáticos
// + -> soma 
// - -> subtração
// * -> multiplicação
// / -> divisão
// % -> resto 
// Incremento -> ++
// Decremento -> --

// var num = 1;
// console.log(++num)
// console.log(--num)

//Operadores de atribuição
//= atribuição
//x+=y -> soma -> x = x + y
//x-=y -> subtração -> x = x - y
//x*=y -> multiplicação x = x * y
//x/=y -> divisão x = x / y
//x%=y -> resto x = x % y

//Operadores de comparação
//== -> valor igual
//=== -> valor e tipo iguais
//> ou >= 
//< ou <=
//!=

//Operadores lógicos
//AND &&
//OR ||
//NOT !


//Condicionais
//SE...SENÃO
// var num = -10;

// if(num>0){
//     console.log("Número é positivo")
// }else if(num<0){
//     console.log("Número é negativo")
// }else{
//     console.log("Número é zero")
// }

// //SWITCH CASE
// var mes = "julho";

// switch(mes){
//     case "janeiro":
//         console.log("Mês 1");
//         break;
//     case "fevereiro":
//         console.log("Mês 2");
//         break;
//     case "março":
//         console.log("Mês 3");
//         break;
//     case "abril":
//         console.log("Mês 4");
//         break;
//     case "maio":
//         console.log("Mês 5");
//         break;
//     case "junho":
//         console.log("Mês 6");
//         break;
//     case "julho":
//         console.log("Mês 7");
//         break;
//     case "agosto":
//         console.log("Mês 8");
//         break;
//     case "setembro":
//         console.log("Mês 9");
//         break;
//     case "outubro":
//         console.log("Mês 10");
//         break;
//     case "novembro":
//         console.log("Mês 11");
//         break;
//     case "dezembro":
//         console.log("Mês 12");
//         break;
//     default:
//         console.log("Digite um mês válido!");
// }

//Estruturas de repetição

// var cores = ['black', 'blue', 'pink', 'white', 'yellow'];

//Para
// for (var i=0;i<cores.length;i++){
//     console.log(cores[i]);
// }

// var i = 0;
// //Enquanto
// // while (i<5){
// //     console.log(cores[i]);
// //     ++i;
// // }

// //Faça...enquanto
// do{
//     console.log(cores[i]);
//     ++i;
// }while(i<5);

//Funções
// var nome = "Bruna";

// function sayhello(name){
//     console.log("Hello " + name);
// }

// sayhello(nome);

// function soma(a,b){
//     return a+b;
// }

// console.log(soma(5,8));

//Classes
// class Book{
//     constructor(title, author, pages){
//         this.title=title;
//         this.author=author;
//         this.pages=pages;
//     }

//     read(){
//         return 'Estou lendo ' + this.title;
//     }
// }

// let book = new Book('O Diário de Anne Frank', 'Anne Frank', 200);
// let newbook = new Book('Eu sou Malala', 'Malala Yousafzai', 350);

// console.log(book.read());
// console.log(newbook.read());
// console.log(book, newbook);

// class ITBook extends Book{
//     constructor(title,author,pages,technology){
//         super(title,author,pages);
//         this.technology=technology;
//     }
// }

// let itbook = new ITBook('C++ para leigos', 'Stephen Randy', 450, 'C++');

// console.log(itbook);
// console.log(itbook.title);

// class Pessoa{
//     constructor(name){
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         this._name=value;
//     }
// }

// let person = new Pessoa('Bruna');
// person.name = 'Flavia';
// console.log(person.name);


