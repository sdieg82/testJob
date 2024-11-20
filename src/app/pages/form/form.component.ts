import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Task } from '../interfaces/task.interface';

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
  public newtask:EventEmitter<Task>=new EventEmitter();

  public task:Task={
      task:'',
      selectTask:''
  }
  public myForm:FormGroup=this.fb.group({
    task:['',[Validators.required,Validators.minLength(6)]],
    selectTask:['',[Validators.required]]
  })

  submit():void{
    this.newtask.emit(this.task)
    Swal.fire({
      title: 'Correcto!',
      text: 'Tarea registrada correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    console.log(this.myForm.value)
  }

 


}
