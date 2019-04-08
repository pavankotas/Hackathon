import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-tickets',
  templateUrl: './open-tickets.component.html',
  styleUrls: ['./open-tickets.component.sass']
})
export class OpenTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ticketDetails= [
    {
      userName: 'Lisa',
      LPNumber: 'DYA008',
      createdDate: '04/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',
      status: 'Open'

    },
    {
      userName: 'Goerge',
      LPNumber: 'RK071',
      createdDate: '04/01/2019',
      fine: '$20',
      reason: 'Not Authorized User',
      status: 'Open'

    },
    {
      userName: 'Briyana',
      LPNumber: 'ADDY104',
      createdDate: '03/24/2019',
      fine: '$100',
      reason: 'Having no permit to park in this location',
      status: 'Closed'

    },
    {
      userName: 'Ashok',
      LPNumber: 'BCEXHA',
      createdDate: '03/21/2019',
      fine: '$10',
      reason: 'Given time exceeded',
      status: 'Closed'

    },
  ]
}
