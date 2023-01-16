
const livro = {
    nome :"React Native",
    editor: "Casa do código",
    paginas: 185, 
    anunciar : function(){
        console.log("A Alura indica o livro" + this.nome+ "!")
    }
    
}

livro.anunciar()


///////////////////////////

class Livro {
    
    constructor(nome, editora, paginas){
        
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;

    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

const nodeJs = new Livro('Diogo', 'Leda', 200);

nodeJs.anunciarTitulo()
nodeJs.descreverTitulo()


class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)       //Só estou pegando o this.nome da minha outra class
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`O livro ${this.nome}, faz parte da coleção ${this.nomeColecao}.`)
    }
}

var LogicaDeProgramacao = new LivroColecao('Diogo', 'Nova era')
LogicaDeProgramacao.descreverColecao()