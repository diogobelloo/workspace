let vetor = [1,2,3,4,5,6] 
console.log(vetor)

/*for(let pos =0; pos <= vetor.length; pos++){
    console.log(vetor[pos])
}*/


for (let pos in vetor) {
    console.log(`Á posição ${pos} tem o valor ${vetor[pos]}`)
}

