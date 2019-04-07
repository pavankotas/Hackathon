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
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',

    },
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',

    },
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',

    },
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',

    },
  ]
}
