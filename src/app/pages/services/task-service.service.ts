import { Injectable } from '@angular/core';
import { OptionTaskInterface, Task } from '../interfaces/Task.interface';
import { v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
  
  constructor() { }
  public _options:OptionTaskInterface[]=[
    OptionTaskInterface.Todas,
    OptionTaskInterface.Completada,
    OptionTaskInterface.Pendiente
  ]
  
  get options():OptionTaskInterface[]{
    return [...this._options]
  }
  
  getOptions(option:OptionTaskInterface):Task[]{
    if (!option) return []
    return []
  }

  public tasks:Task[]=[{
    id:uuid(),
    task:"Learn Angular",
    selectTask:"Completada"
  },
  {
    id:uuid(),
    task:"Learn React",
    selectTask:"Pendiente"
  }]

  addTask(task:Task):void{
    const newTask:Task={id:uuid(),...task}
    this.tasks.push(newTask)
  }

  deleteTaskService(id:string){
    this.tasks=this.tasks.filter(task=>task.id!==id)
  }

  getTaskByOption(option:string){
    console.log('Enviando opcion para filtrar',option)
    this.tasks=this.tasks.filter(task=>task.selectTask===option)
    console.log(this.tasks)
  }
}

