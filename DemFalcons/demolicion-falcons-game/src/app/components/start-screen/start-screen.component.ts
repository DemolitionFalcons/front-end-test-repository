import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  backgroungImgPath: String;
  constructor() {
    this.backgroungImgPath = '../../../assets/img/desert-canyon.jpg';
  }

  ngOnInit() {
  }

}
