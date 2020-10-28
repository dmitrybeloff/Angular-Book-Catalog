import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title,
    private appConfig: AppConfig,
  ) { }

  public ngOnInit() {
    this.titleService.setTitle('Contattaci - ' + this.appConfig.title);
  }

}
