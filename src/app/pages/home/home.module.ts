import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../../app-material.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '../../core/components/carousel/carousel.module';
import { BrowserModule, Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    CarouselModule,
    BrowserModule,
  ],
  providers: [
    Title,
  ]
})
export class HomeModule { }
