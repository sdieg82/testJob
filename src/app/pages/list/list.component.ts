import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Task } from '../interfaces/Task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteTask:EventEmitter<number>=new EventEmitter()

  @Input()
  public listTask:Task[]=[{
    task:"",
    selectTask:""
  }]

  deleteTask(id:number):void{
    this.onDeleteTask.emit(id)
  }

 
}
