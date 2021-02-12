const deleteTask = function (update, id) {
    const index = id
    const taskCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    taskCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(taskCadastradas))
    update()
}

const deleteButton = function (update, id) {
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-button');
    buttonDelete.innerText = 'Deletar';
    buttonDelete.addEventListener('click', () => deleteTask(update, id)); 

    return buttonDelete;
}


export default deleteButton;