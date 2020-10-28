import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list.component';
import { AppMaterialModule } from '../../../app-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecordsListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
  ],
  exports: [
    RecordsListComponent,
  ]
})
export class RecordsListModule { }
