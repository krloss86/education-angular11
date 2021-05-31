import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEcontradoComponent } from './no-econtrado/no-econtrado.component';

//configuramos las rutas de la aplicacion
const routes: Routes = [
  {
    path: '',   pathMatch: 'full', redirectTo: '/home'
  },  
  {
    path: '**', component:  NoEcontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
