class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addiitem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd
            }
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd
    }

}

let carrinho = new Carrinho([
    {
        id:01,
        nome:"camisa",
        qtd:1, 
        preco:20
    },
    {
        id:01,
        nome:"calça",
        qtd:2,
        preco:50
    }
], 3, 120);

console.log(carrinho)

carrinho.addiitem({id:02,nome:'bermuda', qtd:2, preco:20});

console.log(carrinho)
