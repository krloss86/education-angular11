import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioDrivenComponent } from './components/formulario-driven/formulario-driven.component';
import { FormularioReactiveComponent } from './components/formulario-reactive/formulario-reactive.component';
import { Masterv1Component } from './components/masterv1/masterv1.component';
import { DetailComponent } from './components/detail/detail.component';
import { MasterComponent } from './components/master/master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';



@NgModule({
  declarations: [
    FormularioDrivenComponent,
    FormularioReactiveComponent,
    MasterComponent,
    DetailComponent,
    Masterv1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    LoginService
  ], exports:[
    // 
  ]
})
export class EjemplosModule { }
