import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
private images=[];
  constructor() { }

  ngOnInit() {
    let image1 = ""
    this.images.push("") ;
  }

}
