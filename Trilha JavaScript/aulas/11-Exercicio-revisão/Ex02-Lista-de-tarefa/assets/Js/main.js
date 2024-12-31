
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefa= document.querySelector('.btn-add-tarefa');
    const Tarefas = document.querySelector('.tarefas');

    function botaoApagar(li){
        li.innerHTML += ' '
        const button = document.createElement('button')
        button.innerText = 'Apagar'
        button.setAttribute('class', 'apagar')
        button.setAttribute('title', 'botao apagar')
        li.appendChild(button)
    }

    function criaLi(){
        const li = document.createElement('li')
        return li
    }

    function criaTarefa(textoInput){
        const li = criaLi();
        li.innerHTML = inputTarefa.value
        li.style.listStyle = 'number'
        Tarefas.appendChild(li)
        botaoApagar(li);

        inputTarefa.value = ''
        inputTarefa.focus()  
    }


    btnTarefa.addEventListener('click', () => {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    })

    document.addEventListener('click', (e) => {
        const el = e.target
        if(el.classList.contains('apagar')){
            el.parentElement.remove()
        }
    })
    inputTarefa.addEventListener('keypress', (e) => {
        if(e.keyCode === 13){
            if(!inputTarefa.value) return;
             criaTarefa(inputTarefa.value);
        }
    })