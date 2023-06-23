let pessoa = {
    "nome": "Diogo",
    "idade": 24,
    "Profissão": "Programador",
    "Hobbies": ["Futebool", "Video Game", "Netflix"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);



let pessoaJSON= JSON.parse(pessoaTexto);
console.log(pessoaJSON);