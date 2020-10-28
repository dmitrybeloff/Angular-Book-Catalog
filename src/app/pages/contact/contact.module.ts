import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ContactFormModule } from 'src/app/core/components/contact-form/contact-form.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ContactFormModule
  ],
  providers: [
    Title,
  ]
})
export class ContactModule { }
