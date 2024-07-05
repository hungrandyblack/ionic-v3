import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../../app/_models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: Observable<User | null>;
  validation_message: any;
  public pagePrevious: string;


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder) {
      this.pagePrevious = navParams.get('pagePrevious');
      if (JSON.parse(localStorage.getItem('user')!)) {
        this.navCtrl.push(ProfilePage);
      }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 async  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    await this.login(this.loginForm.value.username, this.loginForm.value.password).pipe(first()).toPromise();
    // await this.accountService.login(this.loginForm.value.username, this.loginForm.value.password).pipe(first()).toPromise();
    console.log("this.loginForm: ", this.loginForm.value)

    this.showAlert();

    this.navCtrl.push(ProfilePage);

  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/wp-json/jwt-auth/v1/token`, { username, password })
      .pipe(
        map(response => {
          // Store user details and JWT token in local storage to keep the user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(response));
          return response;
        })
      );
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Login Successful!',
      subTitle: 'You have successfully logged in!',
      buttons: ['OK']
    });
    alert.present();
  } 

  goBack() {
    this.navCtrl.pop();
  }

  redirectRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
}
