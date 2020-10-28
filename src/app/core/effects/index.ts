import { EffectsModule } from '@ngrx/effects';
import { RecordsEffects } from './records.effects';

export const AppEffectsModules = EffectsModule.forRoot([
  RecordsEffects,
]);
