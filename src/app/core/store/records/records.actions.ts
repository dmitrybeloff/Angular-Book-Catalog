import { Action } from '@ngrx/store';

export const GETFULLRECORD = '[records] get full record';
export const UPDATEFULLRECORD = '[records] update full record';
export const GETTAXONOMIES = '[records] get taxonomies';
export const UPDATETAXONOMIES = '[records] update taxonomies';
export const SEARCHAUTOCOMPLETE = '[records] search autocomplete';
export const UPDATEAUTOCOMPLETE = '[records] update autocomplete';
export const RECORDSERROR = '[records] error';
export const RESETRECORDSERROR = '[records] reset error';
export const GETSIMPLERECORDS = '[records] get simple records';
export const UPDATESIMPLERECORDS = '[records] update simple records';
export const GETTAXONOMIESLIST = '[records] get taxonomies list';
export const UPDATETAXONOMIESLIST = '[records] update taxonomies list';
export const GETRANDOMSIMPLERECORDS = '[records] get random simple records';
export const UPDATERANDOMSIMPLERECORDS = '[records] update random simple records';
export const RESETRELATEDRECORDS = '[records] reset related records';
export const RESETFULLRECORD = '[records] reset full record';
export const RESETTAXONOMIES = '[records] reset taxonomies';
export const GETTAXONOMYCOUNT = '[records] get taxonomy count';
export const UPDATETAXONOMYCOUNT = '[records] update taxonomy count';
export const SENDEMAIL = '[records] send email';
export const SENDEMAILSUCCESS = '[records] send email success';
export const RESETEMAILINFO = '[records] reset email info';

export class GetFullRecordAction implements Action {
  readonly type = GETFULLRECORD;

  constructor(public payload: string) {}
}

export class UpdateFullRecordAction implements Action {
  readonly type = UPDATEFULLRECORD;

  constructor(public payload: FullRecord) {}
}

export class GetTaxonomiesAction implements Action {
  readonly type = GETTAXONOMIES;

  constructor(public payload?: any) {}
}

export class UpdateTaxonomiesAction implements Action {
  readonly type = UPDATETAXONOMIES;

  constructor(public payload: Taxonomy[]) {}
}

export class SearchAutoCompeleteAction implements Action {
  readonly type = SEARCHAUTOCOMPLETE;

  constructor(public payload: string) {}
}

export class UpdateAutoCompleteAction implements Action {
  readonly type = UPDATEAUTOCOMPLETE;

  constructor(public payload: SimpleRecord[]) {}
}

export class RecordsErrorAction implements Action {
  readonly type = RECORDSERROR;

  constructor(public payload?: any) {}
}

export class ResetRecordsErrorAction implements Action {
  readonly type = RESETRECORDSERROR;

  constructor(public payload?: any) {}
}

export class GetSimpleRecordsAction implements Action {
  readonly type = GETSIMPLERECORDS;

  constructor(public payload: SimpleRecordsRequestPayload) {}
}

export class UpdateSimpleRecordsAction implements Action {
  readonly type = UPDATESIMPLERECORDS;

  constructor(public payload: SimpleRecordsResponsePayload) {}
}

export class GetTaxonomiesListAction implements Action {
  readonly type = GETTAXONOMIESLIST;

  constructor(public payload: SimpleRecordsRequestPayload) {}
}

export class UpdateTaxonomiesListAction implements Action {
  readonly type = UPDATETAXONOMIESLIST;

  constructor(public payload: SimpleRecordsResponsePayload) {}
}

export class GetRandomSimpleRecordsAction implements Action {
  readonly type = GETRANDOMSIMPLERECORDS;

  constructor(public payload: RandomSimpleRecordsRequestPayload) {}
}

export class UpdateRandomSimpleRecordsAction implements Action {
  readonly type = UPDATERANDOMSIMPLERECORDS;

  constructor(public payload: SimpleRecordsResponsePayload) {}
}

export class ResetRelatedRecordsAction implements Action {
  readonly type = RESETRELATEDRECORDS;

  constructor(public payload?: any) {}
}

export class ResetFullRecordAction implements Action {
  readonly type = RESETFULLRECORD;

  constructor(public payload?: any) {}
}

export class ResetTaxonomiesAction implements Action {
  readonly type = RESETTAXONOMIES;

  constructor(public payload?: any) {}
}

export class GetTaxonomyCountAction implements Action {
  readonly type = GETTAXONOMYCOUNT;

  constructor(public payload: any) {}
}

export class UpdateTaxonomyCountAction implements Action {
  readonly type = UPDATETAXONOMYCOUNT;

  constructor(public payload: number) {}
}

export class SendEmailAction implements Action {
  readonly type = SENDEMAIL;

  constructor(public payload: Email) {}
}

export class SendEmailSuccessAction implements Action {
  readonly type = SENDEMAILSUCCESS;

  constructor(public payload: string) {}
}

export class ResetEmailInfoAction implements Action {
  readonly type = RESETEMAILINFO;

  constructor(public payload?: any) {}
}

export type Actions = GetTaxonomiesAction
  | UpdateTaxonomiesAction
  | SearchAutoCompeleteAction
  | UpdateAutoCompleteAction
  | RecordsErrorAction
  | ResetRecordsErrorAction
  | GetSimpleRecordsAction
  | UpdateSimpleRecordsAction
  | GetFullRecordAction
  | UpdateFullRecordAction
  | GetRandomSimpleRecordsAction
  | UpdateRandomSimpleRecordsAction
  | ResetRelatedRecordsAction
  | ResetFullRecordAction
  | GetTaxonomiesListAction
  | UpdateTaxonomiesListAction
  | ResetTaxonomiesAction
  | GetTaxonomyCountAction
  | UpdateTaxonomyCountAction
  | SendEmailAction
  | SendEmailSuccessAction
  | ResetEmailInfoAction;
