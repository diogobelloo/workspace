const pessoa = {
    nome: "Diogo belo dos santos",     //ex: nome => chave   ---- "Diogo belo dos santos" => Valor
    idade: 21,
    altura: 1.70,
    sexo: "masculino",
    interesses: ["musica", "futebol"],

    descrever: function (){
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, gosto de ${this.interesses[1]} e meu sexo é ${this.sexo}`)

    }
}

pessoa['nome'] = 'teste'

pessoa.nome = 'teste'


pessoa.descrever();
