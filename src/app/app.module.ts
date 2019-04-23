import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HomeModule, 
    DashboardModule,
    AppRoutingModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    PagenotfoundComponent ],
  bootstrap:    [ 
    AppComponent 
    ]
})

export class AppModule { }
