function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome,
        sobrenome,

        get nomeCompleto(){ //Quando eu aplico o gat, ele deixa de ser uma fução e vira um parametro.
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter

        set nomeCompleto(valor) { // Quanto aplico Set pega os valores , faz quase a mesma coisa que Get
            valor = valor.split(' '); // Coloca os valores dentro de uma array
            this.nome = valor.shift();// Pega o primeiro valor do arrray
            this.sobrenome = valor.join(' ') //Pega o resto dos valores e coloca espaço entre eles.
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a ,
        peso: p,
        get imc(){ //Quando eu aplico o gat, ele deixa de ser uma fução e vira um parametro.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // toFixed -- Andar apenas duas casas decimais.
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 72);
p1.nomeCompleto = 'Diogo belo dos santos';
console.log(p1.nomeCompleto) // Não preciso colocar '()' por que ele é um gatter, virou um atributo agora.

