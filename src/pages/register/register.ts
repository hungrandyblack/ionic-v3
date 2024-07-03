import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/_models/user';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  RegisterForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
  });

  loading = false;
  submitted = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      return;
    }
    await this.register(this.RegisterForm.value as User).pipe(first()).toPromise();
    // await this.accountService.login(this.loginForm.value.username, this.loginForm.value.password).pipe(first()).toPromise();
    console.log("this.loginForm: ", this.RegisterForm.value)

    this.showAlert();

    this.navCtrl.push(LoginPage);

  }

  register(user: User | null | undefined) {
    return this.http.post(`${environment.apiUrl}/wp-json/wp/v2/users`, user);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Register Successful!',
      subTitle: 'You have successfully Register!',
      buttons: ['OK']
    });
    alert.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
  

}
