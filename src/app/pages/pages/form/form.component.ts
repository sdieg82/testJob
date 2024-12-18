import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Task } from '../../interfaces/Task.interface';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private fb=inject(FormBuilder)
  
  @Output()
  public newTask:EventEmitter<Task>=new EventEmitter();
  public myForm:FormGroup=this.fb.group({
    task:['',[Validators.required,Validators.minLength(6)]],
    selectTask:['',[Validators.required,Validators.minLength(6)]],
  })

  submit():void{
    this.newTask.emit(this.myForm.value)
    Swal.fire({
      title: 'Correcto!',
      text: 'Tarea registrada exitosamente !',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.myForm.reset({task:'',selectTask:''})
  }
}
