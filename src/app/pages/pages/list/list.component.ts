import { Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../interfaces/Task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnChanges {
  @Output()
  public onDeleteTask: EventEmitter<string> = new EventEmitter();

  @Input()
  public listTask: Task[] = [
    { id: "", task: "", selectTask: "" }
  ];

  public filteredTasks: Task[] = [];

  public selectTask: string[] = ['Completadas', 'Pendientes'];

  ngOnInit(): void {
    this.filteredTasks = [...this.listTask]; // Mostrar todas las tareas por defecto
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listTask']) {
      this.filteredTasks = [...this.listTask];
    }
  }

  deleteTask(id?: string): void {
    if (!id) return;
    this.onDeleteTask.emit(id);
  }

  onFilterTask(event: Event): void {
    const target = event.target as HTMLSelectElement | null;

    if (target && target.value) {
      const taskTitle = target.value;

      if (taskTitle === 'Completadas') {
        this.filteredTasks = this.listTask.filter(task => task.selectTask === 'Completadas');
      } else if (taskTitle === 'Pendientes') {
        this.filteredTasks = this.listTask.filter(task => task.selectTask === 'Pendientes');
      } else {
        this.filteredTasks = [...this.listTask]; // Mostrar todas las tareas
      }
    }
  }
}
