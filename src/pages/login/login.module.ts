import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginPage,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    HttpClientModule,
  ],
  providers: [
    HttpClientModule
  ]
})
export class LoginPageModule {}
