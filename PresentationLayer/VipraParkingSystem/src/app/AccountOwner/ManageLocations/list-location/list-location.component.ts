import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) { }

  addLocation() {
    this.router.navigate(['./addLocation']);
  }

  ngOnInit() {
  }

}
