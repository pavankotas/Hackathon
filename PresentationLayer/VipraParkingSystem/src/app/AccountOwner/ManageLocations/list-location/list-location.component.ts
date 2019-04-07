import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.sass']
})
export class ListLocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  locationDetails= [
    {
      locationName: 'Miller Nichols Library',
      address: 'Address',
      latitude: '39.0350° N',
      longitude: '94.5765° W',
      generalSlots: '50',
      specialSlots: '20',
      cost: '$100',

    },
    {
      locationName: 'Miller Nichols Library',
      address: 'Address',
      latitude: '39.0350° N',
      longitude: '94.5765° W',
      generalSlots: '50',
      specialSlots: '20',
      cost: '$100',

    },
    {
      locationName: 'Miller Nichols Library',
      address: 'Address',
      latitude: '39.0350° N',
      longitude: '94.5765° W',
      generalSlots: '50',
      specialSlots: '20',
      cost: '$100',

    },
    {
      locationName: 'Miller Nichols Library',
      address: 'Address',
      latitude: '39.0350° N',
      longitude: '94.5765° W',
      generalSlots: '50',
      specialSlots: '20',
      cost: '$100',

    },
    {
      locationName: 'Miller Nichols Library',
      address: 'Address',
      latitude: '39.0350° N',
      longitude: '94.5765° W',
      generalSlots: '50',
      specialSlots: '20',
      cost: '$100',

    },

  ];
}
