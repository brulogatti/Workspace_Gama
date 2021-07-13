class Data{
    public dia: number;
    private mes: number;
    private ano: number;

    constructor(dia:number, mes:number, ano:number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(12,7,2021);
console.log(data.dia);
//console.log(data.mes); -> Não permite o acesso por ser uma classe privada, só aceita acesso dentro da classe

const data2 = new Data(12,7);

//Escrita exclusiva para TypeScript
class Aniversario{
    constructor(public dia:number, public mes:number, public ano:number = 1970){}
}

class Carro{

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){}

    private alterarvelocidade(){
        //método é privado e não consegue ser acessado fora da classe
    }

    acelerar(){
        const aceleracao = 5;
        if(this.velocidadeAtual+aceleracao<=this.velocidadeMaxima){
            this.velocidadeAtual+=aceleracao;
        }
    }

    frear(){
        const freio = 5;
        this.velocidadeAtual-=freio;
    }


}

const carro = new Carro('Toyota','Yaris',150);
//carro.velocidadeMaxima = 400;
carro.acelerar();


