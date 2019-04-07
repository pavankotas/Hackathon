import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import {User} from 'src/Model/users';
import { AlertController } from '@ionic/angular';
import {LoginUserService} from '../login-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user = {} as User;
  users;
  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

}
