import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginRoot = LoginPage;
  RegisterRoot = RegisterPage;

  constructor(public navCtrl: NavController) {
    if (JSON.parse(localStorage.getItem('user')!)) {
      this.navCtrl.push(ProfilePage);
  }
  }

  openPage(root){
    this.navCtrl.push(root, {pagePrevious: "homePage"});
  }
}
