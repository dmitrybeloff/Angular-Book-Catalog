import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app.config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private appConfig: AppConfig,
    private titleService: Title
  ) {}

  public ngOnInit() {
    this.titleService.setTitle(this.appConfig.title);
  }
}
