
class Carro2{

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){}

    private alterarvelocidade(delta:number){
        const novaVelocidade = this.velocidadeAtual+delta;

        if(delta>=0 && novaVelocidade<=this.velocidadeMaxima){
            this.velocidadeAtual=novaVelocidade;
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima: 0
        }
    }

    acelerar(){
        this.alterarvelocidade(5);
    }

    frear(){
        this.alterarvelocidade(-5);
    }


}

const automovel = new Carro2('Toyota','Yaris',150);
carro.acelerar();

class Mustang extends Carro2{

    private turbo = false;
    
    constructor(){
        super('Ford','Mustang', 320);
    }

    ligarturbo(){
        this.turbo=true;
    }
}

const mustang = new Mustang();
mustang.acelerar();
mustang.frear();
mustang.ligarturbo();