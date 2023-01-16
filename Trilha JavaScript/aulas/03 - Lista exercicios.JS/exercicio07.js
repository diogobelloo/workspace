function ePaisagem(largura, altura){
    return largura > altura ? true : false
}

console.log(ePaisagem(1080, 1920))

//Código melhorado

function eePaisagem(largura, altura){
    return largura > altura 
}

console.log(eePaisagem(1080, 1920))

//Arrow function

const erPaisagem = (largura, altura) =>  largura > altura


console.log(erPaisagem(1920, 1080))