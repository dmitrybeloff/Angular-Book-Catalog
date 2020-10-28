import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { DmcaComponent } from './pages/dmca/dmca.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { TaxonomiesComponent } from './pages/taxonomies/taxonomies.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component:  PagesComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'politica-sulla-resirvatezza', component: PrivacyComponent },
    { path: 'dmca', component: DmcaComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'accedi', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'libri/page/:page', component: TaxonomiesComponent },
    { path: 'libri/:category/:slug', component: BookComponent },
    { path: 'libri', component: TaxonomiesComponent },
    { path: 'libri/:category', component: TaxonomiesComponent },
    { path: 'libri/:category/page/:page', component: TaxonomiesComponent },
    { path: ':taxonomy/:slug', component: TaxonomiesComponent },
    { path: ':taxonomy/:slug/page/:page', component: TaxonomiesComponent },
    { path: '**', redirectTo: ''}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
