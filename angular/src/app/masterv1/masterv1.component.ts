import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-masterv1',
  templateUrl: './masterv1.component.html',
  styleUrls: ['./masterv1.component.css']
})
export class Masterv1Component implements OnInit {

  //recibir la lista de alumnos
  @Input() alumnos : string[];
  alumnosLocal: string[] = [];
  
  @Output() eliminarEnPadre = new EventEmitter<string>();

  //formulario
  formulario: FormGroup;

  //formbuilder
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.formulario = this.formBuilder.group(
      {
        nuevoAlumno: ['',[Validators.required]]
      }
    );
  }

  ngOnInit(): void {
    //en este lugar esta disponible la lista
    this.alumnosLocal = this.alumnos;
  }

  submitForm(): void {
   console.log(this.formulario.controls); 
   const nuevoAlumno = this.formulario.get('nuevoAlumno').value;
   this.alumnosLocal.push(nuevoAlumno);
  }

  eliminarAlumnoHijo(alumno: string) {
    debugger;
    //invocar al emmiter -> ejecuta la funcion del padre!!!
    this.eliminarEnPadre.emit(alumno);
  }
}
