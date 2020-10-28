import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import * as RecordsActions from '../../core/store/records/records.actions';
import * as RecordsStore from '../../core/store/records';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { untilDestroyed, Unsubscribe } from 'src/app/core/decorators/unsubscribe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Title, Meta } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  animations: [
    trigger('minMax', [
      state('minimized', style({
        minHeight: '60px',
        maxHeight: '200px'
      })),
      state('maximized', style({
        maxHeight: '4000px',
        paddingBottom: '3rem',
      })),
      transition('maximized => minimized', [
        animate('0.5s cubic-bezier(0, 1, 0, 1)')
      ]),
      transition('minimized => maximized', [
        animate('0.5s ease-in-out')
      ]),
    ])
  ]
})

@Unsubscribe()
export class BookComponent implements OnInit, OnDestroy {

  public record: FullRecord = null;
  public pages = '-';
  public minMaxHours = '-';
  public words = '-';
  public isLargeScreen = true;
  public rightOverlay = false;

  public isMinimized = true;

  public record$ = this.store.pipe(select(RecordsStore.getRecord));
  public relatedAuthor$ = this.store.pipe(select(RecordsStore.getRelatedAuthorRecords));
  public relatedCategory$ = this.store.pipe(select(RecordsStore.getRelatedCategoryRecords));
  public relatedEditore$ = this.store.pipe(select(RecordsStore.getRelatedEditoreRecords));

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private titleService: Title,
    private breakpointObserver: BreakpointObserver,
    private appConfig: AppConfig,
    private metaService: Meta,
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        this.isLargeScreen = false;
      } else {
        this.isLargeScreen = true;
      }
    });
  }

  public ngOnInit() {
    this.route.paramMap.pipe(untilDestroyed(this)).subscribe((params: ParamMap) => {
      this.store.dispatch(
        new RecordsActions.ResetFullRecordAction()
      );
      this.store.dispatch(
        new RecordsActions.ResetRelatedRecordsAction()
      );
      this.store.dispatch(
        new RecordsActions.GetFullRecordAction(
          params.get('slug')
        )
      );
    });

    this.record$.pipe(untilDestroyed(this)).subscribe(
      (record) => {
        this.record = record;
        if (record && record.title) {
          let title = record.title;
          const descriptionArray: string[] = [];
          let description = '';
          if (record.autore_name && record.autore_name.length > 0) {
            title += ' di ' + record.autore_name;
            descriptionArray.push('Autore: ' + record.autore_name);
          }
          title += ' - ' + this.appConfig.title;
          this.titleService.setTitle(title);

          if (record.editore_name && record.editore_name.length > 0) {
            descriptionArray.push('Editore: ' + record.editore_name);
          }

          if (record.collana_name && record.collana_name.length > 0) {
            descriptionArray.push('Collana: ' + record.collana_name);
          }

          if (record.annoedizione_name && record.annoedizione_name.length > 0) {
            descriptionArray.push('Anno Edizione: ' + record.annoedizione_name);
          }

          if (record.traduttore_name && record.traduttore_name.length > 0) {
            descriptionArray.push('Traduttore: ' + record.traduttore_name);
          }

          if (record.pagine && record.pagine.length > 0) {
            descriptionArray.push('Pagine: ' + record.pagine);
          }

          if (descriptionArray.length === 0 && record.descrizione && record.descrizione.length > 0) {
            if (record.descrizione.length > 150) {
              description += record.descrizione.slice(0, 147) + '...';
            } else {
              description += record.descrizione;
            }
          } else {
            description = descriptionArray.join('; ');
            if (description[description.length - 1] !== '.') {
              description += '.';
            }
          }

          this.metaService.updateTag({name: 'description', content: description});
        }
        if (record && record.pagine && record.pagine.length > 0) {
          const pages = record.pagine.match(/\d+/);
          const titleLength = record.title.length;
          if (pages && pages[0].length > 0) {
            this.pages = pages[0];
            const minHours = +pages[0] / 50;
            const maxHours = minHours + 1;
            this.minMaxHours = minHours.toFixed(0) + '-' + maxHours.toFixed(0);
            this.words = (+pages[0] * 300 / 1000).toString() + 'k';
          }
        }
        if (record && record.editore_name && record.editore_name.length > 0) {
          this.store.dispatch(new RecordsActions.GetRandomSimpleRecordsAction({
            title: this.record.title,
            taxonomyName: 'editore',
            taxonomyValue: record.editore_name,
            limit: 10
          }));
        }
        if (record && record.autore_name && record.autore_name.length > 0) {
          this.store.dispatch(new RecordsActions.GetRandomSimpleRecordsAction({
            title: this.record.title,
            taxonomyName: 'autore',
            taxonomyValue: record.autore_name,
            limit: 10
          }));
        }
        if (record && record.categorie_name && record.categorie_name.length > 0) {
          this.store.dispatch(new RecordsActions.GetRandomSimpleRecordsAction({
            title: this.record.title,
            taxonomyName: 'categorie',
            taxonomyValue: record.categorie_name,
            limit: 10
          }));
        }
      });
  }

  public toggleMinMax() {
    this.isMinimized = !this.isMinimized;
  }

  public ngOnDestroy() {}
}
