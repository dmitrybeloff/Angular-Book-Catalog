import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmcaComponent } from './dmca.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ContactFormModule } from '../../core/components/contact-form/contact-form.module';

@NgModule({
  declarations: [
    DmcaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ContactFormModule,
  ],
  providers: [
    Title,
  ]
})
export class DmcaModule { }
