import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddComponent } from './home/add/add.component';
import { ViewComponent } from './home/view/view.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './Home/forgotpassword/forgotpassword.component';

import {  IndexComponent } from './Home/index/index.component';
import { AuthguardGuard } from './authguard.guard';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'dashboard',component:DashboardComponent},
  { path: 'register',component:RegisterComponent },
  { path: 'forgotpassword',component:ForgotpasswordComponent},
  { path: 'index',component:IndexComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }