const deleteButton = function () {
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Deletar';
    buttonDelete.addEventListener('click', deleteTask); 

    return buttonDelete;
}

const deleteTask = function (evento) {
    const buttonDelete = evento.target;
    const taskComplete = buttonDelete.parentElement;
    taskComplete.remove();
    
    return buttonDelete;
}

export default deleteButton;