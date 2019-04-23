import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { StartupComponent } from './startup/startup.component';

const homeRoutes: Routes = [
  { path: '', component:HomeComponent,
    children:[
      {path: '', component:StartupComponent},
      {path: 'home', component:StartupComponent},
      {path: 'aboutus', component:AboutusComponent},
      {path: 'login', component:LoginComponent},
      {path: 'registration', component:RegistrationComponent},
    ]
   },  
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {}