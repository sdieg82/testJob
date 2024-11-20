import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public listTask:Task[]=[{
    task:"",
    selectTask:""
  }]
}
