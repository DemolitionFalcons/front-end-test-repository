import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginModel } from '../../../core/models/login.model';
import { Router } from '@angular/router';
import { NavBarService } from '../../../core/services/nav-bar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model: LoginModel;
  public loginFail: boolean;
  public username: string;
  @Output() registerFormShow: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private nav: NavBarService) {
    this.model = new LoginModel('', '');
    this.username = '';
  }

  ngOnInit() {
  }

  login(): void {
    console.log(this.model);
    this.router.navigate(['/home']);
    localStorage.setItem('userName', this.model.username);
    this.nav.show();
  }

  goToRegister() {
    this.registerFormShow.emit(true);
  }
}
