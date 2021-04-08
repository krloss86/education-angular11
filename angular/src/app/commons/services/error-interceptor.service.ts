import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/login/services/login.service';
import { AlertService } from './alert.service';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(
    private alertService: AlertService,
    private loginService: LoginService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('ErrorInterceptor');

    return next.handle(req)
      .pipe(
        catchError(
          err => {
            if(err.status == 401) {
              //logout porque no está autorizado
              this.loginService.logout();
              location.reload();
            }

            //evaluar otros codigos de error!
            const error = err.error.error || err.statusText;
            this.alertService.error(error);
            return throwError(error);
          }
        )
      );
  }
  
}
