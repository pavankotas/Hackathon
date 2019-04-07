import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.sass']
})
export class AddLocationComponent implements OnInit {

  constructor() { }
  map;
  coordinates;

  ngOnInit() {
  }

  rectangle: any;
  center: any = {
    lat: 39.034527,
    lng: -94.575721
  };

  addLocation() {
    this.initDrawingManager(this.map);
  }

  saveLocation() {}

  onMapReady(map) {
    this.initDrawingManager(map);
    this.map = map;
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
        const rectangle = new google.maps.Rectangle({
          bounds: map.getBounds()
        });
        const bounds = rectangle.getBounds();
        const neLat = bounds.getNorthEast().lat();
        const neLng = bounds.getNorthEast().lng();
        const swLat = bounds.getSouthWest().lat();
        const swLng = bounds.getSouthWest().lng();
        // console.log(neLat);
        // console.log(neLng);
        // console.log(swLat);
        // console.log(swLng);
        this.coordinates = neLat;
        // this.coordinates.push(neLng);
        // this.coordinates.push(swLat);
        // this.coordinates.push(swLng);
        console.log(this.coordinates);
      }
    });
  }

  getPaths() {
    console.log('get path');
    if (this.rectangle) {
      const vertices = this.rectangle.getPaths().getArray()[0];
      const paths = [];
      vertices.getArray().forEach(function (xy, i) {
        // console.log(xy);
        const latLng = {
          lat: xy.lat(),
          lng: xy.lng()
        };
        paths.push(JSON.stringify(latLng));
      });
      return paths;
    }
    return [];
  }

}
