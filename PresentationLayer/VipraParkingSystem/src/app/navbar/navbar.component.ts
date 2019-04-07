import { Component, OnInit } from '@angular/core';
import { ListAccountsComponent} from "../AppOwner/list-accounts/list-accounts.component";
import {AddAccountComponent} from "../AppOwner/add-account/add-account.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
