import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 //options:DatepickerOptions={
 // displayFormat: 'MMM DD YYYY',
  //barTitleFormat: 'MMMM YYYY',
  //dayNamesFormat: 'dd',
 // firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
 // minDate: new Date(Date.now()), // Minimal selectable date
 // maxDate: new Date(Date.now()),  // Maximal selectable date
 // barTitleIfEmpty: 'Click to select a date'
  //}

  

 //private variables goes here
 private _employeeAddForm: FormGroup;

 private deslist: string[];
 private bandlist: string[];
 private primarylist: string[];

 private secondarySkills = [];
 private selectedItems = [];
 private dropdownSettings = {};

 constructor(protected _fb: FormBuilder,
 private _router: Router) {  
 }

ngOnInit() {

   this.deslist = [ 'Software Engineer', 'Sr Software Engineer', 'Business Analyst', 'Marketing', 'Software Test Enginner', 'Sr Software Test Enginner', 'Designer', 'Sr Designer' ];
   this.bandlist = [ 'Band - I', 'Band - II'];
   this.primarylist = [ 'Core Java', 'Android', 'Manual Testing', '.Net', 'PHP'];
   // this.secondarylist = [ 'HTML', 'CSS', 'Automation Testing', 'PHP' ];

   // Multi-Select DropDown Start
   this.secondarySkills = [
       {"id":1,"itemName":"HTML"},
       {"id":2,"itemName":"CSS"},
       {"id":3,"itemName":"Automation Testing"},
       {"id":4,"itemName":"PHP"},
       {"id":5,"itemName":"Python"},
       {"id":6,"itemName":"React.js"},
       {"id":7,"itemName":"Hadoop"},
       {"id":8,"itemName":"Javascript"},
       {"id":9,"itemName":"jQuey"},
       {"id":10,"itemName":"Vue.js"}
     ];

    
     
     this.dropdownSettings = { 
       text:"Select Secondary Skills",
       selectAllText:'Select All',
       unSelectAllText:'UnSelect All',
       classes:"myclass custom-class"
     }; 
      // Multi-Select DropDown End
 
   this._employeeAddForm = this._fb.group({
   
     firstName: ['', [Validators.required,Validators.minLength(3)]],
     lastName: ['', [Validators.required,Validators.minLength(3)]],
     fullName: ['', [Validators.required,Validators.minLength(3)]],
     employeeId: ['', Validators.required],
     dateofJoin: ['', Validators.required],
     dateofBirth: ['', Validators.required],
     gender:'',
     maritalStatus:'',
     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     mobile: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]], 
     emergencyNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
     pancardNumber: ['', Validators.required],
     uploadProfileImage: ['', Validators.required],
     aboutEmployee: ['', [Validators.required,Validators.minLength(10)]],
     profileSummary: ['', [Validators.required,Validators.minLength(10)]],
     designation:['', Validators.required],
     bandName: ['', Validators.required],
     primarySkills: ['', Validators.required],
     secondarySkills:['', Validators.required],
     presentAddress: ['', Validators.required],
     permanentAddress: ['', Validators.required] 
   });
}

showRequiredFieldError(control: string) {
 let formcontrol: AbstractControl = this._employeeAddForm.get(control);
 if (formcontrol.touched && !formcontrol.valid) {
   return true;
 }
}

redirect() {
 this._router.navigate(['/view']);
}

// Multi-Select DropDown 
onItemSelect(item:any) {
   console.log(item);
  console.log(this.selectedItems);
}
OnItemDeSelect(item:any) {
   console.log(item);
   console.log(this.selectedItems);
}
onSelectAll(items: any) {
   console.log(items);
}
onDeSelectAll(items: any) {
   console.log(items);
}


onSave(){
  let formValues = this._employeeAddForm.value;
  console.log("formValues",formValues);
  console.log("primarySkills",formValues.primarySkills);
  console.log("secondarySkills",formValues.secondarySkills);
  console.log("bandName",formValues.bandName);
  console.log("designation",formValues.designation);
}

}