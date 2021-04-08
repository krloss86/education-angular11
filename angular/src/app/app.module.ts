import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonsModule } from './commons/commons.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NoEcontradoComponent } from './no-econtrado/no-econtrado.component';
import { LoginModule } from './login/login.module';

//decorator
@NgModule(
  { //agrupa componentes
    declarations: [
      AppComponent,
      NoEcontradoComponent,
    ],
    imports: [//para módulos
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CommonsModule,
      DashboardModule,
      LoginModule,
      AppRoutingModule
    ],
    providers: [//@Injectales
      
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
