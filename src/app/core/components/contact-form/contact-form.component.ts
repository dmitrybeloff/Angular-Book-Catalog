import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import * as RecordsActions from '../../store/records/records.actions';
import * as RecordsStore from '../../store/records/';
import * as utils from '../../utilities/functions';
import { untilDestroyed, Unsubscribe } from '../../decorators/unsubscribe';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

@Unsubscribe()
export class ContactFormComponent implements OnInit, OnDestroy {

  public info$ = this.store.pipe(select(RecordsStore.getEmailInfo));
  public error$ = this.store.pipe(select(RecordsStore.getError));

  @Input() eMail: string;
  @Input() subject: string;

  public captchaFirst: number;
  public captchaSecond: number;
  public product: number;
  public content: string;
  public error: string;
  public info: string;
  public loading = false;

  constructor(
    private store: Store<AppState>,
  ) { }

  public generateMinMax(): void {
    this.captchaFirst = utils.randomIntFromInterval(1, 9);
    this.captchaSecond = utils.randomIntFromInterval(1, 9);
  }

  public sendEmail(): void {
    if (this.product
        && this.eMail
        && this.subject
        && this.content) {
      if (+this.product === this.captchaFirst * this.captchaSecond) {
        this.store.dispatch(new RecordsActions.SendEmailAction({
          eMail: this.eMail,
          subject: this.subject,
          content: this.content
        }));
        this.store.dispatch(new RecordsActions.ResetRecordsErrorAction());
        this.loading = true;
      } else {
        this.generateMinMax();
        this.store.dispatch(new RecordsActions.RecordsErrorAction('Bad multiplication result'));
      }
    } else {
      this.store.dispatch(new RecordsActions.RecordsErrorAction('All fields must be filled'));
    }
  }

  public ngOnInit() {
    this.error$.pipe(untilDestroyed(this)).subscribe((error: string) => {
      this.loading = false;
      this.error = error;
    });
    this.generateMinMax();
  }

  public clearInfo() {
    this.loading = false;
    this.store.dispatch(new RecordsActions.ResetEmailInfoAction());
    this.generateMinMax();
    this.content = null;
    this.product = null;
  }

  public ngOnDestroy() {}

}
