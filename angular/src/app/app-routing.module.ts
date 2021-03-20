import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuardService } from './login-guard.service';
import { LoginComponent } from './login/login.component';
import { HomeGuardService } from './home-guard.service';

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
    path: 'home', component:  HomeComponent, canActivate: [HomeGuardService] 
  },
  {
    path: '**', component:  LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
