const taskDone = (update, id) => {
    const taskCadastradas = JSON.parse(localStorage.getItem("tarefas"))

    taskCadastradas[id].concluida = !taskCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(taskCadastradas))

    update()
}

const doneButton = (update, id) => {
    const buttonDone = document.createElement('button');

    buttonDone.classList.add('check-button')
    buttonDone.innerText = 'Concluir'
    buttonDone.addEventListener('click', () => taskDone(update, id))
    
    return buttonDone
}

export default doneButton