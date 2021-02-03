const doneButton = function () {
    const buttonDone = document.createElement('button');

    buttonDone.classList.add('check-button');
    buttonDone.innerText = 'Concluir';
    buttonDone.addEventListener('click', taskDone);
    
    return buttonDone;
}

const taskDone = function (evento) {
    const buttonDo = evento.target;
    const taskComplete = buttonDo.parentElement;

    taskComplete.classList.toggle('done');
}

export default doneButton;