import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  firstName = '';
  lastName = '';
  userName = '';
  emailID = '';
  password = '';
  // userType = '';
  organizationName = '';
  startDate = '';
  endDate = '';
  address = '';
  InvalidUser = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  userLogin() {
      const user = {
          emailID: this.emailID,
          password: this.password
      };
      /*Checking if users exists in DB by calling LoginServices*/
      this.loginService.authenticate(user).subscribe( (data) => {
        /*Receives success message if user exists and with correct credentails*/
        // @ts-ignore
        if (data.message === 'success') {
          console.log(data);
          // const userInfo = this.loggedInUserInfo.getUsers();
          // console.log(userInfo);
          this.router.navigate(['/addAccount']);
          // @ts-ignore
          console.log(data.message);
          // localStorage.setItem('userType', data.userType);
        } else {
          // @ts-ignore
          console.log(data.message);
          this.InvalidUser = true;
        }
      });
  }
}
