import { NgModule } from '@angular/core';
import { Reducers } from './app.state';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  imports: [
      StoreModule.forRoot(Reducers),
      !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ]
})
export class CoreStoreModule {}
