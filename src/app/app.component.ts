import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { Task } from './pages/interfaces/task.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public tasks:Task[]=[{
    task:"Learn Angular",
    selectTask:"Completada"
  },
  {
    task:"Learn React",
    selectTask:"Pendiente"
  }]

  newtask(task:Task):void{
    this.tasks.push(task)
    console.log(this.tasks)
  }
}
