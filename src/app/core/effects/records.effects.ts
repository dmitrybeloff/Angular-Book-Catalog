import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { map, switchMap, exhaustMap, mergeMap, catchError, filter, share } from 'rxjs/operators';
import * as RecordsActions from '../store/records/records.actions';
import { HttpService } from '../services/http.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';
import { getTaxonomyNumber } from '../store/records';

@Injectable()
export class RecordsEffects {
  constructor(
    public actions$: Actions,
    private httpService: HttpService,
  ) {}

  @Effect()
  public searchAutoComplete$ = this.actions$
    .pipe(
      ofType(RecordsActions.SEARCHAUTOCOMPLETE),
      switchMap(({ payload }: RecordsActions.SearchAutoCompeleteAction) =>
        this.httpService.getSearchAutoComplete(payload)
          .pipe(
            map((items: SimpleRecord[]) => {
              return new RecordsActions.UpdateAutoCompleteAction(items);
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      ),
      share()
    );

  @Effect()
  public getTaxonomies$ = this.actions$
    .pipe(
      ofType(RecordsActions.GETTAXONOMIES),
      switchMap(() =>
        this.httpService.getTaxonomies()
          .pipe(
            map((items: Taxonomy[]) => {
              return new RecordsActions.UpdateTaxonomiesAction(items);
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      ),
      share()
    );

  @Effect()
  public getSimpleRecords$ = this.actions$
    .pipe(
      ofType(RecordsActions.GETSIMPLERECORDS),
      mergeMap(({ payload }: RecordsActions.GetSimpleRecordsAction) =>
        this.httpService.getSimpleRecordsByTaxonomy(payload)
          .pipe(
            map((items: SimpleRecord[]) => {
              return new RecordsActions.UpdateSimpleRecordsAction({
                taxonomyName: null,
                taxonomyValue: payload.taxonomyValue,
                simpleRecords: items,
              });
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      ),
      share()
    );

  @Effect()
  public getTaxonomiesList$ = this.actions$
    .pipe(
      ofType(RecordsActions.GETTAXONOMIESLIST),
      mergeMap(({ payload }: RecordsActions.GetSimpleRecordsAction) =>
        this.httpService.getSimpleRecordsByTaxonomy(payload)
          .pipe(
            map((items: SimpleRecord[]) => {
              return new RecordsActions.UpdateTaxonomiesListAction({
                taxonomyName: null,
                taxonomyValue: null,
                simpleRecords: items,
              });
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      ),
      share()
    );

  @Effect()
  public getTaxonomyNumber$ = this.actions$
    .pipe(
      ofType(RecordsActions.GETTAXONOMYCOUNT),
      exhaustMap(({ payload }: RecordsActions.GetTaxonomyCountAction) => (
        this.httpService.getTaxonomyNumber(payload)
          .pipe(
            map(({ count }: TaxonomyCount) => {
              return new RecordsActions.UpdateTaxonomyCountAction(count);
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      )),
      share()
    );

  @Effect()
  public getFullRecord$ = this.actions$
    .pipe(
      ofType(RecordsActions.GETFULLRECORD),
      mergeMap(({ payload }: RecordsActions.GetFullRecordAction) =>
        this.httpService.getFullRecord(payload)
          .pipe(
            map((record: FullRecord) => {
              return new RecordsActions.UpdateFullRecordAction(record);
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      ),
      share()
    );

  @Effect()
  public sendEmail$ = this.actions$
    .pipe(
      ofType(RecordsActions.SENDEMAIL),
      exhaustMap(({ payload }: RecordsActions.SendEmailAction) =>
        this.httpService.sendEmail(payload)
          .pipe(
            map(({ info }: EmailInfo) => {
              return new RecordsActions.SendEmailSuccessAction(info);
            }),
            catchError(({ error: { message } }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(message))
            )
          )
      ),
      share()
    );

  @Effect()
  public getRandomSimpleRecords$ = this.actions$
    .pipe(
      ofType(RecordsActions.GETRANDOMSIMPLERECORDS),
      mergeMap(({ payload }: RecordsActions.GetRandomSimpleRecordsAction) =>
        this.httpService.getRandomSimpleRecordsByTaxonomy(payload)
          .pipe(
            map((items: SimpleRecord[]) => {
              return new RecordsActions.UpdateSimpleRecordsAction({
                taxonomyName: payload.taxonomyName,
                taxonomyValue: null,
                simpleRecords: items,
              });
            }),
            catchError(({ error }: HttpErrorResponse) =>
              of(new RecordsActions.RecordsErrorAction(error))
            )
          )
      ),
      share()
    );
}
