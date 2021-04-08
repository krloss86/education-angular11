import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoginRoutingModule } from './login-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from '../commons/services/error-interceptor.service';
import { JwtinterceptorService } from '../commons/services/jwtinterceptor.service';


@NgModule({
    declarations: [
      LoginComponent,
      //RegisterComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      LoginRoutingModule,
      ReactiveFormsModule,
    ],exports:[
        LoginComponent
    ] ,
    providers: [
        LoginService,
        {
            provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true
        }
    ]
})
export class LoginModule { }