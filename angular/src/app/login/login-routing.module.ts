import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { LoginGuardService } from './services/login-guard.service';

//las ruras de este modulo
const routes: Routes = [
    {
        path: 'login', component: LoginComponent, canActivate: [LoginGuardService] 
    },
 /*{
   path: 'register', component: RegisterComponent
 },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
