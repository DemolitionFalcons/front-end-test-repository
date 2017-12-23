import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../core/models/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model: LoginModel;
  public loginFail: boolean;
  public username: string;

  constructor() {
    this.model = new LoginModel('', '');
    this.username = '';
  }

  ngOnInit() {
  }

  login() {
    console.log('logedIn');
  }

}
