import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private appConfig: AppConfig,
  ) { }

  public ngOnInit() {
    this.titleService.setTitle('Politica Sulla Riservatezza - ' + this.appConfig.title);
  }
}
