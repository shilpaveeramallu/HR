import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  private show: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public toggle() {
    this.show = !this.show;
  }


  // public redirectToAdd() {
  //   this._router.navigate(["/add"]);
  //   //this._showAddComponent = !this._showAddComponent;
  // }

  // public redirectToView() {
  //   this._showAddComponent = false;
  //   this._showViewComponent = true;
  // }

  // public toggle(){
  //   this._showAddComponent = false;
  //   this._showViewComponent = false;
  // }

  // public closeAddComponent(){
  //   this._showAddComponent = false;
  // }

  // public closeviewComponent(){
  //   this._showViewComponent = false;
  // }

}
