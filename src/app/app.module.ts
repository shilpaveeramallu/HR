import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddComponent } from './home/add/add.component';
import { ViewComponent } from './home/view/view.component';
//import { EmployeeService } from './home/employee.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { Component } from '@angular/core';
//import { NgDatepickerModule } from 'ng2-datepicker';
import { routes } from '../app/app.routings';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './Home/forgotpassword/forgotpassword.component';
import { IndexComponent } from './Home/index/index.component';
import { HrService } from 'src/app/Services/hr.service';
import { AuthguardGuard } from 'src/app/authguard.guard';
//import { OnInit, Input, OnChanges, SimpleChanges, ElementRef, HostListener, forwardRef } from '@angular/core';
//import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SideNavComponent,
    AddComponent,
    ViewComponent,
    DashboardComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    IndexComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMultiSelectModule,
    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [HrService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
