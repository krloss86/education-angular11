import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InformacionCliente } from './informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {

  public datosVacios: InformacionCliente = {
    saldos: {datosSaldos:[]},
    equipo: {datosEquipo: []},
    cliente: {contactos: []},
    recomendaciones: { recomendaciones:[]}
  };

  //subjet
  private informacionClienteSubject = new BehaviorSubject<InformacionCliente>(null);
  private currentInformacionCliente: Observable<InformacionCliente>  = this.informacionClienteSubject.asObservable();

  //observable

  constructor() { }

  getInformacionCliente(): Observable<InformacionCliente> {
    return this.currentInformacionCliente;
  }

  public updateCliente(nuevaInformacionCliente: InformacionCliente) : void {
    this.informacionClienteSubject.next(nuevaInformacionCliente);
  }

  public clear(): void {
    this.informacionClienteSubject.next(this.datosVacios);
  }
}
