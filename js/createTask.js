import { loadTask } from './loadTask.js'
import doneButton from './taskComplete.js'
import deleteButton from './taskDelete.js'

export const handleNewItem = function(evento) {
    evento.preventDefault() //previne refresh desnecessário da página
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[]
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
        
    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)
    const horario = date.format('HH:mm')

    const dataFormat = date.format("DD/MM/YYYY")
    const concluida = false

    const dados = {
        valor,
        dataFormat,
        horario,
        concluida
    }

    const tarefasAtualizadas = [ ... tarefas, dados] 

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
    input.value = ""

    loadTask()
}

export const Tarefa = ({valor, horario, concluida}, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${horario} || ${valor}</p>`
    
    if(concluida) {
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')   
    tarefa.innerHTML = conteudo

    tarefa.appendChild(doneButton(loadTask, id))
    tarefa.appendChild(deleteButton(loadTask, id))

    return tarefa
}