import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { StartupComponent } from './startup/startup.component';

const homeRoutes: Routes = [
  { path: '', canActivate : [AuthGuard], component:DashboardComponent,
    children:[
      {path: '',  component:StartupComponent},
      {path: 'startup',  component:StartupComponent},
      {path: 'profile',  component:ProfileComponent},      
    ]
   },  
   {path: 'logout',  component:LogoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule {}