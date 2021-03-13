import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDrivenComponent } from './formulario-driven/formulario-driven.component';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive.component';
import { LoginService } from './login.service';

//decorator
@NgModule(
  { //agrupa componentes
    declarations: [
      AppComponent,
      FormularioDrivenComponent,
      FormularioReactiveComponent
    ],
    imports: [//para módulos
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [//@Injectales
      LoginService
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
