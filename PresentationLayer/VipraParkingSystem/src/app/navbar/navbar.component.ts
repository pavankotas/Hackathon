import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  /*AppOwner ={};*/
  AccountAdmin = {};
  constructor() { }

  ngOnInit() {
    const userType = localStorage.getItem('userType');
    /*if(userType == 'Application Owner'){
      this.AppOwner = {
        addAccount : 'Add Accounts',
        viewAllAccounts: 'ViewAllAccounts'
      }
    }*/
    if (userType == 'Organization Admin'){
      console.log(userType);
      this.AccountAdmin = {
        dashboard : 'DashBoard',
        addUser: 'Add User',
        addPermit: 'Add Permit',
        viewTickets: 'ViewTickets'
      }
    }
  }

}
