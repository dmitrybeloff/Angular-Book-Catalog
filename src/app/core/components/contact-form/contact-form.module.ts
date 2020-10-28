import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { AppMaterialModule } from '../../../app-material.module';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    LoaderModule
  ],
  exports: [
    ContactFormComponent,
  ]
})
export class ContactFormModule { }
