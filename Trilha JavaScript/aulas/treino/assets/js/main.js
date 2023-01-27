const inputTarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');
const adicionarTarefa = document.querySelector('.btn-tarefa');

function criaTarefa(textoInput){
    const li = document.createElement('li');
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaTarefa();
    botaoApagar(li)
}

function limpaTarefa(){
    inputTarefa.value = ' ';
    inputTarefa.focus();
}

function botaoApagar(li){
    li.innerHTML += '  '
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.innerHTML = ' Botão'
    li.appendChild(botaoApagar)
}


adicionarTarefa.addEventListener('click', () =>{
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});


document.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('apagar'))
    el.parentElement.remove()
})
