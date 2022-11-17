function AdicionandoDesconto(valor, desconto){
    return valor - valor * (desconto / 100)   
}

function adicionandoJuros(valor, juros){
return valor + valor * (juros /100) 
}

let precoEtiqueta = 100
let quantidadeParcelas = 4

// Se for a dividir até duas vezes %
if(quantidadeParcelas === 1){
    console.log(AdicionandoDesconto(precoEtiqueta, 10))
}
//Se for a vista desconto de 15%
else if(quantidadeParcelas === 2){
    console.log(AdicionandoDesconto(precoEtiqueta, 15))
}

//se for passar cartão Débito sem acrescimo.
else if(quantidadeParcelas === 3 ){
    console.log(precoEtiqueta)
}

//Se for dividir até 12 vezes, juros 10%
else if(quantidadeParcelas === 4 ){
    console.log(adicionandoJuros(precoEtiqueta, 10))
}
