function tipoDeDados(dados){
    if(typeof dados === 'string'){console.log('String')}
    else if(typeof dados === 'boolean'){console.log('Boolean')}
    else if(typeof dados === 'number'){console.log('Number')}
}

tipoDeDados('diogo');