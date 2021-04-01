import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileResolveService } from './services/profile-resolve.service';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { ClienteDataService } from './services/cliente-data.service';
import { ClienteService } from './services/cliente.service';


@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    TopbarComponent,
    SaldoComponent,
    DatosEquipoComponent,
    ContactoComponent,
    RecomendacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardRoutingModule
  ],exports:[
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    TopbarComponent,
    SaldoComponent,
    DatosEquipoComponent,
    ContactoComponent,
    RecomendacionComponent
  ],providers:[
    ClienteDataService,
    ClienteService,
    ProfileResolveService
  ]
})
export class DashboardModule { }
