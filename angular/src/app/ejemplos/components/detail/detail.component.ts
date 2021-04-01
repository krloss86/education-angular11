import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() alumnos : string[];

  @Output() aliminarAlumnoPadre = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  removeAlumno(alumnoToDelete: string) {
    this.aliminarAlumnoPadre.emit(alumnoToDelete);
  }
}
