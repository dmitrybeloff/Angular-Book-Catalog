import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppConfig } from './app.config';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppEffectsModules } from './core/effects';
import { CoreModule } from './core/core.module';
import { CoreStoreModule } from './core/store/store.module';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';

import { AuthGuardService } from './core/guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function onInitApp(config: AppConfig): Function {
  return async () => await config.init();
}

export function tokenGetter() {
  return localStorage.getItem('jwt');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    CoreStoreModule,
    AppEffectsModules,
    PapaParseModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44300']
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AuthGuardService,
    {
      provide: APP_INITIALIZER,
      useFactory: onInitApp,
      deps: [AppConfig],
      multi: true
    },
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
