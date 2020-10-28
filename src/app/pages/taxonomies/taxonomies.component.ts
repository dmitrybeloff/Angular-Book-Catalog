import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Unsubscribe, untilDestroyed } from 'src/app/core/decorators/unsubscribe';
import { AppState } from 'src/app/core/store/app.state';
import * as RecordsStore from '../../core/store/records';
import * as RecordsActions from '../../core/store/records/records.actions';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-taxonomies',
  templateUrl: './taxonomies.component.html',
  styleUrls: ['./taxonomies.component.scss']
})

@Unsubscribe()
export class TaxonomiesComponent implements OnInit, OnDestroy {

  public taxonomiesList$ = this.store.pipe(select(RecordsStore.getTaxonomiesList));
  public taxonomyNumber$ = this.store.pipe(select(RecordsStore.getTaxonomyNumber));

  public startLimit: RecordsStartLimit;

  public taxonomyName: string;
  public taxonomyValue: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private titleService: Title,
    private appConfig: AppConfig,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.route.paramMap.pipe(untilDestroyed(this)).subscribe((params: ParamMap) => {
      this.store.dispatch(new RecordsActions.ResetTaxonomiesAction());
      this.store.dispatch(new RecordsActions.UpdateTaxonomyCountAction(null));
      this.startLimit = { start: 0, limit: 10 };
      if (params.get('page')) {
        const page = parseInt(params.get('page'), 10);
        if (page) {
          this.startLimit = {
            ...this.startLimit,
            start: (page - 1) * this.startLimit.limit,
          };
        }
      }
      let titleValue: string;
      if (params.get('category')) {
        titleValue = this.route.snapshot.paramMap.get('category');
        this.taxonomyName = 'categorie';
        this.taxonomyValue = this.route.snapshot.paramMap.get('category');
        this.store.dispatch(new RecordsActions.GetTaxonomyCountAction({
          taxonomyName: this.taxonomyName,
          taxonomyValue: this.taxonomyValue,
        }));
        this.store.dispatch(
          new RecordsActions.GetTaxonomiesListAction({
            taxonomyName: this.taxonomyName,
          taxonomyValue: this.taxonomyValue,
            startLimit: this.startLimit
          })
        );
      } else if (params.get('taxonomy')) {
        titleValue = this.route.snapshot.paramMap.get('slug');
        this.taxonomyName = this.route.snapshot.paramMap.get('taxonomy');
        this.taxonomyValue = this.route.snapshot.paramMap.get('slug');
        this.store.dispatch(new RecordsActions.GetTaxonomyCountAction({
          taxonomyName: this.taxonomyName,
          taxonomyValue: this.taxonomyValue,
        }));
        this.store.dispatch(
          new RecordsActions.GetTaxonomiesListAction({
            taxonomyName: this.taxonomyName,
            taxonomyValue: this.taxonomyValue,
            startLimit: this.startLimit
          })
        );
      } else {
        titleValue = 'Libri';
        this.taxonomyName = 'all';
        this.taxonomyValue = 'all';
        this.store.dispatch(new RecordsActions.GetTaxonomyCountAction({
          taxonomyName: this.taxonomyName,
          taxonomyValue: this.taxonomyValue,
        }));
        this.store.dispatch(
          new RecordsActions.GetTaxonomiesListAction({
            taxonomyName: this.taxonomyName,
            taxonomyValue: this.taxonomyValue,
            startLimit: this.startLimit
          })
        );
      }
      this.titleService.setTitle(titleValue + ' - ' + this.appConfig.title);
    });
  }

  public onPageChange(page: number) {
    if (this.taxonomyName !== 'all') {
      this.router.navigate(['/' + this.taxonomyName, this.taxonomyValue, 'page', page]);
    } else {
      this.router.navigate(['/libri', 'page', page]);
    }
  }

  public ngOnDestroy() {}
}
