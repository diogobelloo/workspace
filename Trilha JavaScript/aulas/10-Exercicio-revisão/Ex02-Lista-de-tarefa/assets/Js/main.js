<<<<<<< HEAD

=======
function listTodo(){
>>>>>>> ff1ae0d66b5fe0bf95b47e071270b3b95e2565c9
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefa= document.querySelector('.btn-add-tarefa');
    const Tarefas = document.querySelector('.tarefas');

<<<<<<< HEAD
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
=======
    //function

    inputTarefa.addEventListener('keypress', (e) => {   /*Keypress = ao prescionar da tecla é a ação de click com teclado*/
    if(e.keyCode === 13){           //keyCode é o codigo do meu button enter.
        if(! inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
    })

    function criaLi(){
        const li = document.createElement('li'); //Criando uma taglist <li> .
        return li;
    }

    function limpaImput(){
        inputTarefa.value = '';    //limpar meu input quanto eu clicar em enter ou click com mouse no button
        inputTarefa.focus();      //o ponteiro continuar no iput ao limpar.
    }

    function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar' //botaoApagar.classList.add('apagar').
    botaoApagar.setAttribute('class', 'apagar');  //Adiciono uma classe para meu button com nome apagar
    botaoApagar.setAttribute('title', 'Apagar essa tarefa'); //Crio um title para minha button
    li.appendChild(botaoApagar);

    }


    function criaTarefa(textoInput){          //01
    const li = criaLi();  //Usando minha função que criei a <li>
    li.innerText = textoInput;   //Criando um innetHTML com minha li e colocando o que tiver dentro do input na tela.
    Tarefas.appendChild(li);//Adicionanndo minha li criada na minha dentro da minha tag <ul> com a class = tarefas.
    limpaImput();
    criaBotaoApagar(li);
    salvarTarefas();
    }

    function salvarTarefas(){                             //02
        const liTarefas = Tarefas.querySelectorAll('li');
        const listaDeTarefas = []

        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();// aqui estou apagando meu button apagar e colocandoo nada '' (trim é para não ter espaço)
            console.log(tarefaTexto);
            listaDeTarefas.push(tarefaTexto);
        }

        
        const tarefasJSON = JSON.stringify(listaDeTarefas); // tranformando minha JSON em uma string.
        localStorage.setItem('tarefas', tarefasJSON)  // Como se fosse um bando de dados do própio navegador
    }

    function adicionaTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas); // Conertendo de volta para um objeto javascript

        for(let tarefa of listaDeTarefas){
            criaTarefa(tarefa)
        }
    }
    adicionaTarefasSalvas()

    //Event 

    btnTarefa.addEventListener('click' , () => {
        if(! inputTarefa.value) return;   //se for diferente de inputTarefa.value e não tiver valor retorna ele mesmo.
        criaTarefa(inputTarefa.value); //Se tiver algum valor roda essa função
    })


    document.addEventListener('click', function(e){
        const el = e.target;    // esse e.target me mostra onde eu clico, e qual elemento está sendo clicado.

        if(el.classList.contains('apagar')){
            console.log(el.parentElement) //Vê quem é o pai dele, no caso o meu button com a class apagar.
            el.parentElement.remove();   //Remover o meu elemento pai do meu apagar, quenop caso é minha <li>
            salvarTarefas();
>>>>>>> ff1ae0d66b5fe0bf95b47e071270b3b95e2565c9
        }
    })


<<<<<<< HEAD












=======
}
listTodo();
>>>>>>> ff1ae0d66b5fe0bf95b47e071270b3b95e2565c9
