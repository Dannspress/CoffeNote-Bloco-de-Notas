const createTask = function (evento) {
    evento.preventDefault(); //previne refresh desnecessário da página
    
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const task = document.createElement('li');
    task.classList.add('tarefa');
    const conteudo = `<p class="content">${valor}</p>`
    
    task.innerHTML = conteudo;
    list.appendChild(task);
    input.value = '';
}

const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask); //ao clicar a tarefa é criada