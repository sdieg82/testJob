import { Injectable } from '@angular/core';
import { OptionTaskInterface, Task } from '../interfaces/Task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {
    this.readLocalStorage(); // Leer datos desde localStorage al inicializar el servicio
  }

  public _options: OptionTaskInterface[] = [
    OptionTaskInterface.Todas,
    OptionTaskInterface.Completada,
    OptionTaskInterface.Pendiente,
  ];

  get options(): OptionTaskInterface[] {
    return [...this._options];
  }

  // Lista principal de tareas
  public tasks: Task[] = [
    {
      id: uuid(),
      task: 'Learn Angular',
      selectTask: 'Completada',
    },
    {
      id: uuid(),
      task: 'Learn React',
      selectTask: 'Pendiente',
    },
    {
      id: uuid(),
      task: 'Learn Remix',
      selectTask: 'Pendiente',
    },
    {
      id: uuid(),
      task: 'Learn React',
      selectTask: 'Pendiente',
    },
  ];

  // Lista filtrada
  public filteredTasks: Task[] = [...this.tasks];

  // Agregar una tarea
  addTask(task: Task): void {
    const newTask: Task = { id: uuid(), ...task };
    this.tasks.push(newTask);
    this.saveToLocalStorage(); // Guardar cambios
  }

  // Eliminar una tarea
  deleteTaskService(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.filteredTasks = this.filteredTasks.filter((task) => task.id !== id); // Sincronizar tareas filtradas
    this.saveToLocalStorage(); // Guardar cambios
  }

  // Filtrar tareas según la opción seleccionada
  getTaskByOption(option: string): Task[] {
    if (option === 'Todas') {
      this.filteredTasks = this.tasks
    } else {
      this.filteredTasks = this.tasks.filter((task) => task.selectTask === option);
    }
    this.saveToLocalStorage(); // Guardar cambios
    return this.filteredTasks;
  }

  // Guardar tareas en localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Guardar tareas completas
  }

  // Leer tareas desde localStorage
  private readLocalStorage(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.filteredTasks = [...this.tasks]; // Sincronizar lista filtrada
    }
  }
}
