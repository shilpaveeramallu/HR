import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/Services/hr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 

  constructor(private myawesomeservice:HrService) { }

  ngOnInit() {
  console.log ('Is Hr Logged In?', this.myawesomeservice.getUserLoggedIn())
 
  }

}
