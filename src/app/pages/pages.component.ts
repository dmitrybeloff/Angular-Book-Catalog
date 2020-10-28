import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { Router } from '@angular/router';
import { Unsubscribe, untilDestroyed } from 'src/app/core/decorators/unsubscribe';
import * as RecordsActions from '../core/store/records/records.actions';
import * as RecordsStore from '../core/store/records';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

@Unsubscribe()
export class PagesComponent implements OnInit, OnDestroy {

  public isLargeScreen = true;

  public searchAutoComplete$ = this.store.pipe(select(RecordsStore.getSearchAutoCompleteValues));
  public taxonomies$ = this.store.pipe(select(RecordsStore.getTaxonomies));

  constructor(
    private store: Store<AppState>,
    private router: Router,
    breakpointObserver: BreakpointObserver
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

  public onSearchTextChanged(input: string): void {
    this.store.dispatch(new RecordsActions.SearchAutoCompeleteAction(input));
  }

  public ngOnInit() {
    this.store.dispatch(new RecordsActions.GetTaxonomiesAction());
  }

  public ngOnDestroy() {}
}
