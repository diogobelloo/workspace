/*

1 - Crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso


*/

class Carro{
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoPercurso(percurso, valor){
        return percurso * this.gastoMedioKm * valor
    }
}

const polo = new Carro('volks', 'Preto', 1/10)


console.log(polo.calcularGastoPercurso(140, 5.7))