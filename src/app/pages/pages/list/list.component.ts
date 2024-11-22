import { Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { OptionTaskInterface, Task } from '../../interfaces/Task.interface';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 
  constructor(private taskService:TaskServiceService){}
  
 
  @Output()
  public onDeleteTask: EventEmitter<string> = new EventEmitter();

  @Output()
  public selectTask: EventEmitter<string> = new EventEmitter();


  @Input()
  public listTask: Task[] = [
    { id: "", task: "", selectTask: "" }
  ];

  get options():OptionTaskInterface[]{
    return this.taskService.options
  }

  deleteTask(id?: string): void {
    if (!id) return;
    this.onDeleteTask.emit(id);
  }

  getTaskByOption(event:Event):void{
    const selectedValue = (event.target as HTMLSelectElement).value; // Obtiene el valor seleccionado
    this.selectTask.emit(selectedValue)
   
  }

  
}
