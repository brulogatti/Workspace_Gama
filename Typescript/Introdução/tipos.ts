// //Boolean
// const contaPaga: boolean = false;

// //Number
// const idade: number = 26;

// //String
// const nome: string = "Bruna";

// //Array
// const idades: number[] = [45,23,96];
// const idades2: Array<number> = [45,23,96];

// //Tupla
// let jogadores: [string, string, string];
// jogadores = ["Sheila", "Paula Pequeno", "Thaisa"];

// //Enum
// enum StatusAprovacao{
//     Aprovado, 
//     Pendente,
//     Rejeitado
// }
// const estado: StatusAprovacao = StatusAprovacao.Aprovado;

// //Any
// const retornoAPI:any[] = [123, "Bruna", true]

// //Void
// function teste(msg: string): void{
//     console.log(msg);
// }

// //Null Undefined
// const u: undefined = undefined;
// const n: null = null;

// //Object
// function criar(objeto:object){
// }
// criar({
//     propriedade: 1,
// });

// //Never
// function loopinfinito(): never{
//     while(true){}
// }

// function erro(mensagem:string): never{
//     throw new Error(mensagem);
// }

// function falha(){
//     return erro("Erro!");
// }

// //Union Types-> para um parâmetro mais de um tipo
// function mostrarnota(nota:number | string){
//     console.log('A nota é: ' + nota);
// }

// //Alias
// type Funcionario = Array<string>;
// const funcionarios: Funcionario = ['Victor','Vinicius','Dagoberto']

// function mostrarFuncionario(funcionario: Funcionario){
//     console.log(`O nome do funcionário é ${funcionario}`)
// }

// type Empregado{
//     nome: string;
//     sobrenome: string;
//     data: Date;
// }
// //type Empregados = Array<Empregado>;
// const empregados: Empregado[] = [
//     {nome = 'Mateus',
//     sobrenome = 'da Silva',
//     data = new Date()
// },{
//     nome='Flávia',
//     sobrenome = 'Mara',
//     data = new Date()
// }];

// function tratarEmpregado(empregado: Empregado[]){
//     for (let empregado of empregados){
//         console.log("Nome do empregado: " + empregado.nome);
//     }
// }

// //Valores nulos ou opcionais
// let altura: number|null = 1.63;
// altura = null;

// type Contato{
//     nome: string;
//     telefone1: string;
//     telefone2?: string|null;
// }

// const contato:Contato = {
//     nome='Bruna',
//     telefone1 = '12345',
// }

// //Type Assertion
// const minhaIdade: any = 23;
// (minhaIdade as number).toString(); 
// (<number>minhaIdade).toString(); 

// //const input = document.getElementById("numero1") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("numero1");
// console.log(input.value);

