import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.sass']
})
export class AddLocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rectangle: any;
  center: any = {
    lat: 39.034527,
    lng: -94.575721
  };

  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['rectangle']
      },
      rectangleOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.RECTANGLE
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
      if (event.type === google.maps.drawing.OverlayType.RECTANGLE) {
        console.log(event.overlay.bounds.ga);
        console.log(event.overlay.bounds.ma);
      }
    });
  }

}
