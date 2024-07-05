  import { NgModule } from '@angular/core';
  import { IonicPageModule } from 'ionic-angular';
  import { LoginPage } from './login';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';

  @NgModule({
    declarations: [
      LoginPage,
    ],
    imports: [
      IonicPageModule.forChild(LoginPage),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ]
  })
  export class LoginPageModule {}
