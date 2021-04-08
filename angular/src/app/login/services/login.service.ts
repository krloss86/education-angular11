import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  private currentUSer: Observable<User>;

  constructor(
    private httpClient: HttpClient
  ) { 
    //parsear el valor que tenga localStorage
    //podriamos usar enum para las claves
    let userInLocalStorage = localStorage.getItem('currentUser');
    let userParsed = JSON.parse(userInLocalStorage);
    this.currentUserSubject = new BehaviorSubject<User>(userParsed);
    
    this.currentUSer = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<User> {
    
    return this.httpClient.post<any>(
      `${environment.url}/api/login?email=${username}&password=${password}`,
      {username, password })
      .pipe( //encadenar funciones          
        map((user: User) => { //funcion conversión o mapeo
          //guardar en el localStorage el objeto que me envia el api
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
      ));
  }

  logout(): void {
    //limpiar el localStorage
    localStorage.removeItem('currentUser');

    //vaciar el usuario al subjet
    this.currentUserSubject.next(null);
  }

  public currentUser(): User {
    return this.currentUserSubject.value;
    // return JSON.parse(localStorage.getItem('currentUser'));
  }
}
