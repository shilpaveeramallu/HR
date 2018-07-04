import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HrService } from '../Services/hr.service';
import { OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _loginForm: FormGroup;
 

  constructor(private router:Router,private hr:HrService) { }

  ngOnInit() {
  }
  SubmitLogin(e){
    e.preventDefault();
    console.log(e);
    var email=e.target.elements[0].value;
    var password=e.target.elements[1].value;
   // console.log(email,password);
   // return false;
   if(email=="hr@proximquestit.com" &&password=="admin"){
    this.hr.setUserLoggedIn();
     this.router.navigate(['dashboard']);
   }

  }

}
