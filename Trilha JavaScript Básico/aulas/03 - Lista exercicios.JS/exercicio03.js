const nota1 = 4;
const nota2 = 5;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;


console.log(media);

if(media < 5 ){
    console.log('reprovado');
}
else if(media >= 5 || media <= 7){
    console.log('recuperação');
}
else{
    console.log('Aprovado');
}