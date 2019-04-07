import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-tickets',
  templateUrl: './history-tickets.component.html',
  styleUrls: ['./history-tickets.component.sass']
})
export class HistoryTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ticketHistory= [
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',
      status: 'Closed',

    },
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',
      status: 'Closed',

    },
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',
      status: 'Deleted',

    },
    {
      userName: 'Dharani Muli',
      LPNumber: 'q23623623',
      createdDate: '20/04/2019',
      fine: '$50',
      reason: 'Parked in wrong location',
      status: 'Deleted',

    },
  ]
}
