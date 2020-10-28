import { Component, OnInit, ViewChild } from '@angular/core';
import { AppState } from 'src/app/core/store/app.state';
import { Store, select } from '@ngrx/store';
import * as RecordsActions from '../../core/store/records/records.actions';
import * as RecordsStore from '../../core/store/records';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public societaCategory$ = this.store.pipe(select(RecordsStore.getSocietaCategory));
  public narrativaItalianaCategory$ = this.store.pipe(select(RecordsStore.getNarrativaItalianaCategory));
  public classiciCategory$ = this.store.pipe(select(RecordsStore.getClassiciCategory));
  public simpleRecords$ = this.store.pipe(select(RecordsStore.getSimpleRecords));

  constructor(
    private store: Store<AppState>,
    private titleService: Title,
    private appConfig: AppConfig,
  ) {}

  public ngOnInit() {
    this.titleService.setTitle('Home - ' + this.appConfig.title);

    this.store.dispatch(new RecordsActions.GetSimpleRecordsAction({
      taxonomyName: 'categorie',
      taxonomyValue: 'Classici, poesia, teatro e critica',
      startLimit: {
        start: 0,
        limit: 10,
      }
    }));

    this.store.dispatch(new RecordsActions.GetSimpleRecordsAction({
      taxonomyName: 'categorie',
      taxonomyValue: 'Narrativa italiana',
      startLimit: {
        start: 0,
        limit: 10,
      }
    }));

    this.store.dispatch(new RecordsActions.GetSimpleRecordsAction({
      taxonomyName: 'categorie',
      taxonomyValue: 'Cinema, musica, tv, spettacolo',
      startLimit: {
        start: 0,
        limit: 10,
      }
    }));

    this.store.dispatch(new RecordsActions.GetSimpleRecordsAction({
      taxonomyName: 'all',
      taxonomyValue: 'all',
      startLimit: {
        start: 0,
        limit: 10,
      }
    }));
  }
}
