import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task.interface';
import { v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

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
}
