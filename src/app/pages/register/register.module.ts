import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    Title,
  ]
})
export class RegisterModule { }
