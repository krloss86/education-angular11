import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LoginService } from '../../../login/services/login.service';
import { InformacionCliente } from '../../model/informacion-cliente';
import { CanComponenetDeactivate } from '../../services/can-exit-guard.service';
import { ClienteDataService } from '../../services/cliente-data.service';
//declarar la funcion
declare function initJsFromTs(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements CanComponenetDeactivate, OnInit {

  unSaved: boolean = true;

  canDeactivate(): Observable<boolean> | boolean {
    if(this.unSaved) {
      const result = window.confirm('¿Hay cambios sin guardar, confirma salir?');
      return result;
      //return of(result);
    }

    return true;
  }

  ngOnInit() {
    //cargar el js que controla los efectos de menu
    initJsFromTs();
  }

  informacionCliente: InformacionCliente;

  constructor(
    private clienteDataService: ClienteDataService,
    private authenticationService: LoginService,
    private router: Router
  ) {
    this.clienteDataService.getInformacionCliente().subscribe(
      data => {
        this.informacionCliente = data;
      },error => {
        console.log(error);
      }
    );
  }

  executeLogout(): void {
    //usar el servicio 
    this.authenticationService.logout();
    //router para navegar login
    this.router.navigate(['/login']);
  }
}
