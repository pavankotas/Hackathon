import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from "../../../services/AccountOwner/location.service";
declare const google: any;

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.sass']
})
export class ListLocationComponent implements OnInit {

  center: any = {
    lat: 39.034527,
    lng: -94.575721
  };

  locations;
  rectangle;

  constructor(private router: Router, private locationService: LocationService) { }

  addLocation() {
    this.router.navigate(['./addLocation']);
  }

    north;
    south;
    east;
    west;

  ngOnInit() {
    this.locationService.getLocation().subscribe(data => {
      this.locations = data;
      this.locations.forEach(function(data){
          this.north = data.coordinates[0];
          this.south = data.coordinates[1];
          this.east = data.coordinates[2];
          this.west = data.coordinates[3];
      });
    });
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
