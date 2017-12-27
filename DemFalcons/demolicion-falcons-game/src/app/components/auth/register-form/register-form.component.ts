import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterModel } from '../../../core/models/register.model';
import { Router } from '@angular/router';
import { NavBarService } from '../../../core/services/nav-bar.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public model: RegisterModel;
  public registeredUser: string;
  @Output() loginFormShow: EventEmitter<any> = new EventEmitter();
  constructor( private router: Router, private nav: NavBarService) {
    this.model = new RegisterModel("", "", "", "", "");
  }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.router.navigate(['/home']);
    this.nav.show();
  }

  goToLogin() {
    this.loginFormShow.emit(true);
  }
}
