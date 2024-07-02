import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginRoot = LoginPage;
  RegisterRoot = RegisterPage;

  constructor(public navCtrl: NavController) {

  }

  openPage(root){
    this.navCtrl.push(root);
  }
}
