
function Minhanota (nota) {

var resultadoprova;

switch(true){
    case (nota >=0 && nota <= 4): 
        resultadoprova = "voce foi reprovado"
        console.log("Você foi reprovado")
    break;
    case (nota >= 5 && nota <=6) : 
        resultadoprova = "voce está de recuperação"
        console.log("recuperação")
    break;
    case (nota >=7 && nota <= 10) : 
        resultadoprova = "voce foi aprovado"
        console.log("Aprovado")
    break;
    default:
        console.log("Error")
    break;
    }
     return resultadoprova;
}

console.log(Minhanota(4))