// O método every() testa se todos os elementos do array passam na condiçção e retorna um valor Boolean. True ou false

//Exemplo de array de idades 

const ages = [18, 30, 39, 29];

// Verificar se todas as idades seja igual ou maior do que 18

const result = ages.every(age => age >= 18)

console.log(result)