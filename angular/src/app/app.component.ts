import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  email = 'alguien@email.com'

  //atributo lista de nombres
  alumnos: string[] = [];

  ngOnInit() {
    this.alumnos.push('Asprela Critian');
    this.alumnos.push('Carlos Barros');
    this.alumnos.push('Viviana Bernardo');
    this.alumnos.push('Federica Pavese');
  }

  cambiarValor() {
    this.email = 'otroEmail';
  }

  eliminarAlumno(alumno: string): void {
    if(alumno) {
      let alumnosFiltrados = this.alumnos.filter( alumnoEnLista => alumnoEnLista !== alumno);
      this.alumnos = alumnosFiltrados;
    }
  }

}
