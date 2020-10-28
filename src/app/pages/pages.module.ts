import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { BookModule } from './book/book.module';
import { TaxonomiesModule } from './taxonomies/taxonomies.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ContactModule } from './contact/contact.module';
import { DmcaModule } from './dmca/dmca.module';
import { PrivacyModule } from './privacy/privacy.module';


@NgModule({
    declarations: [
      PagesComponent,
    ],
    imports: [
      CommonModule,
      AppRoutingModule,
      AppMaterialModule,
      FormsModule,
      HomeModule,
      BookModule,
      LoginModule,
      TaxonomiesModule,
      RegisterModule,
      ContactModule,
      DmcaModule,
      PrivacyModule,
    ],
    exports: [
    ]
})
export class PagesModule { }
