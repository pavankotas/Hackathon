import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 /* public userInfo = {
    'emailID': '',
    'userType': ''
  };*/

  uri = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

/*Sending User Inputted data bankend services and returning the response to Login ts*/
  authenticate(user) {
    return this.http.post(`${this.uri}`, user);
  }
  register(user) {
    console.log(user);
    return this.http.post(`${this.uri}`+'/register', user);
  }
 /* setLoggedInUserInfo(data){
    this.userInfo.emailID = data.emailID;
    this.userInfo.userType = data.userType;

  }
  getLoggedInUserInfo() {
    return this.userInfo;
  }*/

  /*Sending account Inputted data bankend services and returning the response to Login ts*/

}
