import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxonomiesComponent } from './taxonomies.component';
import { RecordsListModule } from '../../core/components/records-list/records-list.module';
import { LoaderModule } from '../../core/components/loader/loader.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { PaginationModule } from 'src/app/core/components/pagination/pagination.module';


@NgModule({
  declarations: [TaxonomiesComponent],
  imports: [
    CommonModule,
    RecordsListModule,
    LoaderModule,
    BrowserModule,
    PaginationModule,
  ],
  providers: [
    Title,
  ]
})
export class TaxonomiesModule { }
