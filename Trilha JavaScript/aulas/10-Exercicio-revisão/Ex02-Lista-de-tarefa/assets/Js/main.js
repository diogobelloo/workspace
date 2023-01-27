
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefa= document.querySelector('.btn-add-tarefa');
    const Tarefas = document.querySelector('.tarefas');

    function criaTarefa(textoInput){
        const li = document.createElement('li');
        li.innerHTML = textoInput;
        Tarefas.appendChild(li)
        botaoApagar(li)
    }

    function botaoApagar(li){
        li.innerHTML += ' '
        const apagar = document.createElement('button');
        apagar.innerHTML = 'apagar'
        apagar.setAttribute('class', 'apagado');
        li.appendChild(apagar)
    }

    btnTarefa.addEventListener('click', () => {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    })

    document.addEventListener('click', (e) => {
        const el = e.target
        if(el.classList.contains('apagado')){
            el.parentElement.remove()
        }
    })














