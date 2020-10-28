import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {

  constructor(
    private readonly http: HttpClient
  ) {}

  public host: string = null;
  public title: string;

  public async init(): Promise<void> {
    await this.load();
  }

  private async load(): Promise<void> {
    const configFile: any = await this.http.get('assets/config.json').toPromise();
    Object.assign(this, configFile);
  }
}
