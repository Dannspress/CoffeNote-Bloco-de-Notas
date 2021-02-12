import { handleNewItem } from './createTask.js'
import { loadTask } from './loadTask.js'

const newTask = document.querySelector('[data-form-button]')
newTask.addEventListener('click', handleNewItem) //ao clicar a tarefa é criada

loadTask()