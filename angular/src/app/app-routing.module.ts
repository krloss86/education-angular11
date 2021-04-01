import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './login-guard.service';
import { LoginComponent } from './login/login.component';

//configuramos las rutas de la aplicacion
const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'login', component: LoginComponent, canActivate: [LoginGuardService] 
  },  
  {
    path: '**', component:  LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
