
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J guerra';
vitor.idade = 25;


const renan = new Pessoa();
renan.nome = 'Renan de paulo';
renan.idade = 30;

console.log(vitor)