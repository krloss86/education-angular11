import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonsModule } from './commons/commons.module';
import { DashboardModule } from './dashboard/dashboard.module';

//decorator
@NgModule(
  { //agrupa componentes
    declarations: [
      AppComponent,
      LoginComponent,
    ],
    imports: [//para módulos
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CommonsModule,
      DashboardModule,
      AppRoutingModule
    ],
    providers: [//@Injectales
      LoginService
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
