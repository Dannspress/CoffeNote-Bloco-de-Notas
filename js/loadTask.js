import { ordenaDatas, removeDatasRepetidas } from "./data.js"
import { criaData } from './criaData.js'

export const loadTask = () => {
    const lista = document.querySelector('[data-list]')

    const taskCadastradas = JSON.parse(localStorage.getItem('tarefas'))||[]

    lista.innerHTML = " "
    const dataUnicas = removeDatasRepetidas(taskCadastradas)
    ordenaDatas(dataUnicas)
    dataUnicas.forEach((dia) => {
        
        lista.appendChild(criaData(dia))
    })
}