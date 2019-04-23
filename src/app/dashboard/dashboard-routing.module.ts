import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const homeRoutes: Routes = [
  { path: '', component:DashboardComponent,
    children:[
      {path: '', component:ProfileComponent},
      {path: 'profile', component:ProfileComponent},
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

export class DashboardRoutingModule {}