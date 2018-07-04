import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IUser } from "../shared/Model/user.model";
import { Http, Headers, Response } from '@angular/http';
//import 'rxjs/add/operator/map'
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable()
export class HrService {
 private isHrLoggedIn;
 public email;


 constructor(){
   this.isHrLoggedIn=false;
 }
 setUserLoggedIn(){
   this.isHrLoggedIn=true;
   this.email='hr@proximquestit.com';
 }
 getUserLoggedIn(){
   return this.isHrLoggedIn;
 }



}

 