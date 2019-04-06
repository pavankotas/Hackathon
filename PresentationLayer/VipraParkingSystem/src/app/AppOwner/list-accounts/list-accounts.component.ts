import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.sass']
})
export class ListAccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  account= [
    {
      organizationName: 'UMKC',
      address: 'Address',
      phoneNumber: '8166944857',
      adminUser: 'Dharani Muli',

    },
    {
      organizationName: 'UMKC',
      address: 'Address',
      phoneNumber: '8166944857',
      adminUser: 'Dharani Muli',

    },
    {
      organizationName: 'UMKC',
      address: 'Address',
      phoneNumber: '8166944857',
      adminUser: 'Dharani Muli',

    }
  ];

}
