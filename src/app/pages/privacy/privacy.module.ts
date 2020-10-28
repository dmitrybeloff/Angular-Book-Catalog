import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy.component';
import { BrowserModule, Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PrivacyComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    Title,
  ]
})
export class PrivacyModule { }
