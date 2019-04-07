import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, public alertController: AlertController) {
  }

  ngOnInit() {
  }

}
