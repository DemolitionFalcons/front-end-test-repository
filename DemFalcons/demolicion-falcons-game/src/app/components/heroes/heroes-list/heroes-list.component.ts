import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../../core/models/hero.model';
import { CreateGameService } from '../../../core/services/game-services/create-game.service';
import { RemoteService } from '../../../core/services/remote.service';
import { GameInitInfoService } from '../../../core/services/game-services/game-init-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {


  public gameObject;
  public heroes: HeroModel[];
  public playersArr;
  public playersObj: {};
  public className: string;
  public heroesObjects;
  constructor(
    private createGameService: CreateGameService,
    private remoteService: RemoteService,
    private gameInitInfoService: GameInitInfoService,

    private router: Router
  ) {
 
    this.heroes = [{
      name: 'Falcon',
      hp: 400,
      armor: 10,
      image: '../../../../assets/img/heroes/hero-list/eagle.png',
      description: 'It comes from a distant unknown land, it has a weak defense, but it is very quick and subtle'
    },
    {
      name: 'Cloudy',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/heroes/hero-list/cloudy.png',
      description: 'It comes from a Cloudysland,drives skate and has a strange hairstyle'
    },{
      name: 'Edward',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/heroes/hero-list/edward.png',
      description: 'It comes from nowhere,wears jacket and rocks'
    },{
      name: 'Stephano',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/heroes/hero-list/stephano.png',
      description: 'It comes from a Scary place, eats brains and frightens children'
    },{
      name: 'Darcus',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/heroes/hero-list/darcus.png',
      description: 'It comes from an Island far far away, and burns everything on its way'
    },{
      name: 'Leonardo',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/heroes/hero-list/leonardo.png',
      description: 'It comes from the Savanah , fallen king looking for revange'
    }];

    this.heroesObjects = {};
    for(let hero of this.heroes){
      this.heroesObjects[hero.name] = hero;
    }
    this.createGameService.gameObgectRecieved$.subscribe(obj => {
      this.gameObject = obj;

      let playersObj = {}

      for (let key in obj) {
        if (key.startsWith('player')) {
          playersObj[key] = obj[key];
        }
      }

      this.playersArr = Array.from(Object.keys(playersObj))

      this.className = 'col-sm-' + 12 / this.gameObject.numberOfPlayers;
    })
  }

  ngOnInit() {

  }

  sendGameObjectToServer() {
    this.remoteService.sendGameObject(this.gameObject).subscribe(data => { 
    // this.createGameService.updateGameObject(this.gameObject) 
      this.gameInitInfoService.updateGameInitialInfot(data);
    })
  }

  startGame() {
    this.createGameService.updateGameObject(this.gameObject);
   this.router.navigate(['/play']);
  }

}
