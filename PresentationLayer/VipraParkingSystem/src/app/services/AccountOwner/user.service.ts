import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  /*Sending account Inputted data bankend services and returning the response to Login ts*/
  createPatrolUser(patrolUser) {
    console.log('In the service call', patrolUser);
    return this.http.post(`${this.uri}`+'/register', patrolUser);
  }
  getAllPatrolUsers(){
    console.log('in service page');
    return this.http.get(`${this.uri}/getallPatrolUsers`, httpOptions);
  }
}
