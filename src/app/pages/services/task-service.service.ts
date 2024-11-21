import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  public tasks:Task[]=[{
    task:"Learn Angular",
    selectTask:"Completada"
  },
  {
    task:"Learn React",
    selectTask:"Pendiente"
  }]

  addTask(task:Task):void{
    const newTask:Task={id:undefined,...task}
    this.tasks.push(newTask)
  }

  deleteTaskService(id:number){
    this.tasks=this.tasks.filter(task=>task.id!==id)
    this.tasks.splice(id,1)
  }
}
