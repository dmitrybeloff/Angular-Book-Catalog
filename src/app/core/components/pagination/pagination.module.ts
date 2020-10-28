import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
