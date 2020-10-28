import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {}

  public getFullRecord(slug: string): Observable<FullRecord> {
    return this.http.post<FullRecord>(this.appConfig.host + 'book/', { slug });
  }

  public getTaxonomies(): Observable<Taxonomy[]> {
    return this.http.get<Taxonomy[]>(this.appConfig.host + 'taxonomies/');
  }

  public getSearchAutoComplete(payload: string): Observable<SimpleRecord[]> {
    return this.http.post<SimpleRecord[]>(this.appConfig.host + 'search/', { payload });
  }

  public getSimpleRecordsByTaxonomy(payload: SimpleRecordsRequestPayload): Observable<SimpleRecord[]> {
    return this.http.post<SimpleRecord[]>(this.appConfig.host + 'tax/', payload);
  }

  public getRandomSimpleRecordsByTaxonomy(payload: RandomSimpleRecordsRequestPayload): Observable<SimpleRecord[]> {
    return this.http.post<SimpleRecord[]>(this.appConfig.host + 'tax/', payload);
  }

  public getTaxonomyNumber(payload: any): Observable<TaxonomyCount> {
    return this.http.post<TaxonomyCount>(this.appConfig.host + 'count/', payload);
  }

  public sendEmail(eMail: Email): Observable<EmailInfo> {
    return this.http.post<EmailInfo>(this.appConfig.host + 'mail/', eMail);
  }
}
