import { Component, OnInit } from '@angular/core';
import { AccountService} from "../../services/AppOwner/account.service";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.sass']
})
export class AddAccountComponent implements OnInit {

  firstName = '';
  lastName = '';
  emailID = '';
  address = '';
  userName = '';
  password = '';
  userType = '';
  orgName = '';
  private accountDetails;
  InvalidUser = false;
  constructor(private AccountService:AccountService) {
  }

  ngOnInit() {
    this.AccountService.getAllAccounts().subscribe(res => {
      console.log('return call from db', res);
      this.accountDetails=res;
    });
  }
  createAccount() {
    const accounts = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailID: this.emailID,
      password: this.password,
      address: this.address,
      userType: this.userType,
      organizationName: this.orgName,
    };
    /*Checking if users exists in DB by calling LoginServices*/
    console.log('before service call: ', accounts);
    this.AccountService.createAccount(accounts).subscribe( (data) => {
      /*Receives success message if user exists and with correct credentails*/
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
        this.AccountService.getAllAccounts().subscribe(res => {
          console.log('return call from db', res);
          this.accountDetails=res;
        });
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });

  }
}
