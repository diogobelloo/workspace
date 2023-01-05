const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function limparInput (){
    inputTarefa.value = ' '
    inputTarefa.focus()
}

function criarTarefa (textoInput) {
    const li = document.createElement('li');
    tarefas.appendChild(li);
    li.innerHTML = textoInput
    limparInput()
    botaoApagar (li)

}

function botaoApagar (li){
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)

    
}


btnTarefa.addEventListener('click', () => {
    if(! inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    
});

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        if(! inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
})

document.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})