import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/Services/hr.service';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../../shared/Model/user.model';
import { UserDetailsForm } from '../../shared/Model/user.model';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private hrs:HrService) { }

  ngOnInit() {
  }

}
