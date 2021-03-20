import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  nombre: string = '';
  alumnos:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addAlumno() {
    if(this.nombre)
      this.alumnos.push(this.nombre);
    this.nombre = '';
  }

  removeAlumno(alumnoToDelete: string) {
    let alumnos = this.alumnos.filter(unAlumno=>  unAlumno !== alumnoToDelete );
    this.alumnos = alumnos;
  }

  eliminarAlumno(alumnoToDelete: string) {
    let alumnos = this.alumnos.filter(unAlumno=>  unAlumno !== alumnoToDelete );
    this.alumnos = alumnos;
  }
}
