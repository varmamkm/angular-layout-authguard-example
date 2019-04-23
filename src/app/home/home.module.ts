import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomefooterComponent } from './layout/homefooter/homefooter.component';
import { HomeheaderComponent } from './layout/homeheader/homeheader.component';
import { StartupComponent } from './startup/startup.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [    
    HomeComponent,
    AboutusComponent,
    HomeheaderComponent,
    HomefooterComponent,
    LoginComponent,
    RegistrationComponent,
    StartupComponent
  ]
})

export class HomeModule { }