import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./pages/pages/form/form.component";
import { ListComponent } from "./pages/pages/list/list.component";
import { Task } from './pages/interfaces/Task.interface';
import { TaskServiceService } from './pages/services/task-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private taskService:TaskServiceService
  )
    {}
  
  get tasks():Task[]{
    return [...this.taskService.tasks]
  }

  newTask(tasks:Task):void{
    this.taskService.addTask(tasks)
  }

  deleteTask(id:string):void{
    this.taskService.deleteTaskService(id)
  }

  getTaskByOption(option:string):void{
    console.log('Llega asi la optcion',option)
    this.taskService.getTaskByOption(option)
  }
}
