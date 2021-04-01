import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacionCliente } from '../model/informacion-cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private urlSearch = environment.apiUrl;
  private endPoint = '/assets/datos.json';
  constructor(private httpClient: HttpClient) {

  }

  search(numeroTelefono: string): Observable<InformacionCliente> {
    return this.httpClient.get<InformacionCliente>(this.endPoint);
  }
}
