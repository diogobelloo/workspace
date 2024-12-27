
function contar() {
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo= document.getElementById("passo");
    let lista = document.getElementById("lista");
    var button = document.getElementById("button");

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    for (let i = inicio; i <= fim; i+=passo) {
       lista.innerHTML += `${i}` 
    }
}



