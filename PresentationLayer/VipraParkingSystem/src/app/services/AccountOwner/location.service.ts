import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  uri = 'http://localhost:3000/addLocation';

  constructor(private http: HttpClient) { }

  addLocation(location){
    return this.http.post(`${this.uri}`+'/add', location);
  }

  getLocation(){
    return this.http.get(`${this.uri}`+'/getall');
  }
}
