import { ActionReducerMap } from '@ngrx/store';
import { RecordsState, recordsReducer } from './records';

export interface AppState {
  recordsState: RecordsState;
}

export const Reducers: ActionReducerMap<any> = {
  recordsState: recordsReducer,
};
