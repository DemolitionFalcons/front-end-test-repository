import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterModel } from '../../../core/models/register.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public model: RegisterModel;
  public registeredUser: string;
  @Output() loginFormShow: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.model = new RegisterModel("", "", "", "", "");
  }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  goToLogin() {
    this.loginFormShow.emit(true);
  }
}
