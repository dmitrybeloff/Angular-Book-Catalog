import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginError: string;
  public username: any;
  public password: any;
  public hide: any;

  constructor(
    private titleService: Title,
    private appConfig: AppConfig,
  ) { }

  public doLogin() {
    this.loginError = 'Not implemented.';
  }

  public ngOnInit() {
    this.titleService.setTitle('Accedi - ' + this.appConfig.title);
  }

}
