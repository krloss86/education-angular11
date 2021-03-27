import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDrivenComponent } from './formulario-driven/formulario-driven.component';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive.component';
import { LoginService } from './login.service';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { Masterv1Component } from './masterv1/masterv1.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SaldoComponent } from './saldo/saldo.component';
import { DatosEquipoComponent } from './datos-equipo/datos-equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';

//decorator
@NgModule(
  { //agrupa componentes
    declarations: [
      AppComponent,
      FormularioDrivenComponent,
      FormularioReactiveComponent,
      MasterComponent,
      DetailComponent,
      Masterv1Component,
      LoginComponent,
      FooterComponent,
      HomeComponent,
      NavbarComponent,
      TopbarComponent,
      SaldoComponent,
      DatosEquipoComponent,
      ContactoComponent,
      RecomendacionComponent
    ],
    imports: [//para módulos
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [//@Injectales
      LoginService
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
