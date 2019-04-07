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

  rectanglesCoordinate: any;

  constructor(private router: Router, private locationService: LocationService) { }

  addLocation() {
    this.router.navigate(['./addLocation']);
  }


  ngOnInit() {
    this.locationService.getLocation().subscribe(data => {
      this.locations = data;
       const rectangles = [];
      // console.log(this.locations);
      // this.rectangle = new google.maps.Rectangle({
      //   strokeColor: '#FF0000',
      //   strokeOpacity: 0.8,
      //   strokeWeight: 2,
      //   fillColor: '#FF0000',
      //   fillOpacity: 0.35,
      //   bounds: {
      //     north: 33.685,
      //     south: 33.671,
      //     east: -116.234,
      //     west: -116.251
      //   }
      // });
      // this.rectangle.setMap();
      this.locations.forEach(function(data){
       const rectangle = {
          north: data.coordinates[2],
          south: data.coordinates[0],
          east: data.coordinates[1],
          west: data.coordinates[3]
        };

       rectangles.push(rectangle);
      });

      this.rectanglesCoordinate = rectangles;
      console.log(this.rectanglesCoordinate);

    });
  }
  // locationDetails= [
  //   {
  //     locationName: 'Miller Nichols Library',
  //     address: 'Address',
  //     latitude: '39.0350° N',
  //     longitude: '94.5765° W',
  //     generalSlots: '50',
  //     specialSlots: '20',
  //     cost: '$100',
  //
  //   },
  //   {
  //     locationName: 'Miller Nichols Library',
  //     address: 'Address',
  //     latitude: '39.0350° N',
  //     longitude: '94.5765° W',
  //     generalSlots: '50',
  //     specialSlots: '20',
  //     cost: '$100',
  //
  //   },
  //   {
  //     locationName: 'Miller Nichols Library',
  //     address: 'Address',
  //     latitude: '39.0350° N',
  //     longitude: '94.5765° W',
  //     generalSlots: '50',
  //     specialSlots: '20',
  //     cost: '$100',
  //
  //   },
  //   {
  //     locationName: 'Miller Nichols Library',
  //     address: 'Address',
  //     latitude: '39.0350° N',
  //     longitude: '94.5765° W',
  //     generalSlots: '50',
  //     specialSlots: '20',
  //     cost: '$100',
  //
  //   },
  //   {
  //     locationName: 'Miller Nichols Library',
  //     address: 'Address',
  //     latitude: '39.0350° N',
  //     longitude: '94.5765° W',
  //     generalSlots: '50',
  //     specialSlots: '20',
  //     cost: '$100',
  //
  //   },
  //
  // ];
}
