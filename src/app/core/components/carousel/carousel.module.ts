import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { AppMaterialModule } from '../../../app-material.module';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    AppMaterialModule,
    RouterModule,
    LoaderModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
