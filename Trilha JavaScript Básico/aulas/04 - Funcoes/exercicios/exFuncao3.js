
(function verificarIdade(idade){
    let dataAtual = new Date()
    let ano = dataAtual.getFullYear()
    let anoNascimento = 2001
    const somaIdade = ano - anoNascimento

    if(anoNascimento > ano){
        return ('ERRO, a data de nascimento tem que ser menor que a data atual')
    }
    else if(somaIdade >= 18){
        return ('Você é de maior')
    }
    else if(somaIdade >= 12){
        return ('Você é de adolescente')
    }
    else{
        return ('Você é criança')
    }

   
})()




console.log(verificarIdade(idade))



function EscrevaMeuNome(nome){
   return (`Meu nome é ${nome}`);
}



function verificar(idade){
    if(idade >= 18){
        console.log( EscrevaMeuNome('Diogo') + ', sou Maior de Idade')
    }
    else{
        console.log('Menor')
    }

}

verificar(18);

