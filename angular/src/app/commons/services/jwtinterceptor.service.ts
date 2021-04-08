import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class JwtinterceptorService implements HttpInterceptor {

  constructor(
    private loginService : LoginService
  ) { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //tomar el usuario logueado
    
    //const currentUSer = localStorage.getItem('currentUser');
    const currentUSer = this.loginService.currentUser();
    if(currentUSer) {
      //clonar el req
      req  = req.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${currentUSer.token}`,
            Token2: 'blabla'
          }
        }        
      );
    }
    
    return next.handle(req);
  }
}
