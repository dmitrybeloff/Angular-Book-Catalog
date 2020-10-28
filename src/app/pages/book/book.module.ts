import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../core/components/loader/loader.module';
import { AppMaterialModule } from '../../app-material.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '../../core/components/carousel/carousel.module';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoaderModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [
    Title,
  ]
})
export class BookModule { }
