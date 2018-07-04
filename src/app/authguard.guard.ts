import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HrService } from 'src/app/Services/hr.service';
//import { Router } from '@angular/router/src/router';
import { Router } from '@angular/router';

//@Injectable({
 // providedIn: 'root'
//})
@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private hr:HrService,router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //  this.router.navigate(['/'])
    return this.hr.getUserLoggedIn();
  }
}
