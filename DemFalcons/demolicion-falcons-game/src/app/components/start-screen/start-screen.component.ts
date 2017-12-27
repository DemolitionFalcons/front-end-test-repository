import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../core/services/nav-bar.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  loginFormShow: boolean;
  registerFormShow: boolean;
  backgroungImgPath: String;
  logoPath: String;
  constructor(private nav: NavBarService) {
    this.backgroungImgPath = '../../../assets/img/desert-canyon.jpg';
    this.logoPath = '../../../assets/img/FirstLogo1TR.png';
    this.loginFormShow = false;
    this.registerFormShow = false;
    this.nav.hide();
  }

  ngOnInit() {

  }

  goToLogin() {
    this.loginFormShow = true;
    this.registerFormShow = false;
  }
  goToRegister() {
    this.registerFormShow = true;
    this.loginFormShow = false;
  }
}
