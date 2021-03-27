import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CanComponenetDeactivate } from '../can-exit-guard.service';
import { ClienteDataService } from '../cliente-data.service';
import { InformacionCliente } from '../informacion-cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements CanComponenetDeactivate {

  unSaved: boolean = true;

  
  canDeactivate(): Observable<boolean> | boolean {
    if(this.unSaved) {
      const result = window.confirm('¿Hay cambios sin guardar, confirma salir?');
      return result;
      //return of(result);
    }

    return true;
  }

  informacionCliente: InformacionCliente;

  constructor(
    private clienteDataService: ClienteDataService
  ) {
    this.clienteDataService.getInformacionCliente().subscribe(
      data => {
        this.informacionCliente = data;
      },error => {
        console.log(error);
      }

    );
  }

}
