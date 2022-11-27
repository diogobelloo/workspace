function calcularImc(peso, altura){
    return  peso / (altura * altura)
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'abaixo do peso'
    }
    else if(imc >= 18.5 && imc < 25){
        return 'peso normal'
    }
    else if(imc >= 25 && imc < 30){
       return 'acima do peso'
    }
    else if(imc >= 30 && imc <=   40){
        return 'acima do peso'
    }
    else{
        return 'obesidade grave'
    }
}

(function main(){

    const peso = 64
    const altura = 1.75

    const imc = peso / calcularImc(peso, altura) //altura ao quadrado
    console.log(classificarImc(imc))
    
})();





