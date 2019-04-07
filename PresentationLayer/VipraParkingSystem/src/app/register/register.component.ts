import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  firstName = '';
  lastName = '';
  userName = '';
  emailID = '';
  password = '';
  userType = '';
  organizationName = '';
  startDate = '';
  endDate = '';
  address = '';
  InvalidUser = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      userType: this.userType,
      emailID: this.emailID,
      password: this.password,
      /*passwordConf: this.password,*/
     /* organizationName: this.organizationName,
      startDate: this.startDate,
      endDate: this.endDate*/
    };
    /*Checking if users exists in DB by calling LoginServices*/
    this.loginService.register(user).subscribe( (data) => {
      /*Receives success message if user exists and with correct credentails*/
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
        // const userInfo = this.loggedInUserInfo.getUsers();
        // console.log(userInfo);
        this.router.navigate(['/login']);
        // @ts-ignore
        console.log(data.message);
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });
  }
}
