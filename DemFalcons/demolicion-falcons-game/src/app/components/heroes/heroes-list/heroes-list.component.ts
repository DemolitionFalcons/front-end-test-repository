import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../../core/models/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  public heroes: HeroModel[];
  constructor() {
    this.heroes = [{
      name: 'Falcon',
      hp: 400,
      armor: 10,
      image: '../../../../assets/img/Heroes/Falcon.png',
      description: 'It comes from a distant unknown land, it has a weak defense, but it is very quick and subtle'
    },
    {
      name: 'Cloudy',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/Heroes/Cloudy.png',
      description: 'It comes from a Cloudysland,drives skate and has a strange hairstyle'
    }];
  }

  ngOnInit() {
  }

}
