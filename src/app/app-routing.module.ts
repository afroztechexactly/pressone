import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';

// Auth
import { AuthGuard } from './core/guards/auth.guard';
import { CallsComponent } from './calls/calls.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './pages/dashboards/dashboard/dashboard.component';
import { CallComComponent } from './call-com/call-com.component';

const routes: Routes = [

   { path: '', redirectTo : 'call', pathMatch:'full'},
  // { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
  { path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: 'call', component:CallsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'team', component:TeamComponent},
  {path: 'setting', component:SettingComponent},
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "call-list",
    component: CallComComponent
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
