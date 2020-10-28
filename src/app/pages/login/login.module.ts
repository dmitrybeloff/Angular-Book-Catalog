import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    Title,
  ]
})
export class LoginModule { }
