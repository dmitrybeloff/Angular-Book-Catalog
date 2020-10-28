import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public register = false;

  constructor(
    private titleService: Title,
    private appConfig: AppConfig,
  ) { }

  public doRegister() {
    this.register = true;
  }

  public ngOnInit() {
    this.titleService.setTitle('Registro - ' + this.appConfig.title);
  }

}
