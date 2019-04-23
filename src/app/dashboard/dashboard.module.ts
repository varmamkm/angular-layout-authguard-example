import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuard } from '../auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { StartupComponent } from './startup/startup.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    ProfileComponent, 
    LogoutComponent, 
    StartupComponent
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }