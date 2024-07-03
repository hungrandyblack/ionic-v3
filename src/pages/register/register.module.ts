import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterPage,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    HttpClientModule,
  ],
})
export class RegisterPageModule {}
