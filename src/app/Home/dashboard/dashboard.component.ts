import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/Services/hr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email="hr@proximquestit.com";

  constructor(private hr:HrService) { }

  ngOnInit() {

  //  console.log ('Is Hr Logged In?', this.hr.getUserLoggedIn())
  this.email=this.hr.email;
  }

}
