import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  uri = 'http://localhost:4000/login';

  constructor() { }
}
