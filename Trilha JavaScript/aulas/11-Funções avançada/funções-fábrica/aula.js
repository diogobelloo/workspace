function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome,
        sobrenome,

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura: a ,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 72)
console.log(p1.nome)

