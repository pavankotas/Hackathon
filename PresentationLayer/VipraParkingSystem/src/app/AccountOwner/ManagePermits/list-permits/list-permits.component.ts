import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-permits',
  templateUrl: './list-permits.component.html',
  styleUrls: ['./list-permits.component.sass']
})
export class ListPermitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  permitDetails= [
    {
      userName: 'Dharani Muli',
      emailID: 'dharani@gmail.com',
      viNumber: 'q23623623',
      lipNumber: '213712387',
      type: 'General',
      location: 'MNL, Student Union',
      cost: '$ 50',
      validFrom: '20/04/2019',
      validTo: '20/05/2019',
      address: 'Address',
      phoneNumber: '8166944973',
    },
    {
      userName: 'Dharani Muli',
      emailID: 'dharani@gmail.com',
      viNumber: 'q23623623',
      lipNumber: '213712387',
      type: 'General',
      location: 'MNL, Student Union',
      cost: '$ 50',
      validFrom: '20/04/2019',
      validTo: '20/05/2019',
      address: 'Address',
      phoneNumber: '8166944973',

    },
    {
      userName: 'Dharani Muli',
      emailID: 'dharani@gmail.com',
      viNumber: 'q23623623',
      lipNumber: '213712387',
      type: 'General',
      location: 'MNL, Student Union',
      cost: '$ 50',
      validFrom: '20/04/2019',
      validTo: '20/05/2019',
      address: 'Address',
      phoneNumber: '8166944973',

    },
    {
      userName: 'Dharani Muli',
      emailID: 'dharani@gmail.com',
      viNumber: 'q23623623',
      lipNumber: '213712387',
      type: 'General',
      location: 'MNL, Student Union',
      cost: '$ 50',
      validFrom: '20/04/2019',
      validTo: '20/05/2019',
      address: 'Address',
      phoneNumber: '8166944973',

    }
  ]
}
