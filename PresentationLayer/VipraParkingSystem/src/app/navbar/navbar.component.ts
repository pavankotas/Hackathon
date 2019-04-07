import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  AppOwner ={};
  constructor() { }

  ngOnInit() {
    const userType = localStorage.getItem('userType');
    if(userType == 'Application Owner'){
      console.log(userType);
      this.AppOwner = {
        addAccount : 'Add Accounts',
        viewAllAccounts: 'ViewAllAccounts'
      }
      console.log(this.AppOwner);
    }
  }

}
