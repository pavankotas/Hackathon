import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  uri = 'http://localhost:3000/addLocation';

  constructor(private http: HttpClient) { }

  addLocation(location){
    return this.http.post(`${this.uri}`, location);
  }

  getLocation(){
    return this.http.get(`${this.uri}`+'/getall');
  }

  updateSlotAvailability(id: string, data){
    console.log(data);
    return this.http.put(`${this.uri}/${id}`, data);
  }
}
