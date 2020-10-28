import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.scss']
})
export class DmcaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private appConfig: AppConfig,
  ) { }

  public ngOnInit() {
    this.titleService.setTitle('DMCA - ' + this.appConfig.title);
  }

}
