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

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
  { path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: 'calls', component:CallsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'team', component:TeamComponent},
  {path: 'setting', component:SettingComponent},
  {
    path: "login",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
