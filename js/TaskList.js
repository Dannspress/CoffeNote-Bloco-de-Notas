import doneButton from './taskComplete.js';
import deleteButton from './taskDelete.js';

    const createTask = function (evento) {
        evento.preventDefault(); //previne refresh desnecessário da página
        
        const list = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;
        
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content">${valor}</p>`
        
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(doneButton());
        tarefa.appendChild(deleteButton());
        list.appendChild(tarefa);
        input.value = "";
    }

    const newTask = document.querySelector('[data-form-button]');
    newTask.addEventListener('click', createTask); //ao clicar a tarefa é criada