import {Tarefa} from './createTask.js'

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[]
    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTop = document.createElement('li')
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`

    dataTop.innerHTML = conteudo

    tarefas.forEach((tarefa, id) => {
        const dia = moment(tarefa.dataFormat, 'DD/MM/YYYY')
        
        const diff = dataMoment.diff(dia)
        if(diff === 0){
            dataTop.appendChild(Tarefa(tarefa, id))        
        }
    })

    return dataTop
}