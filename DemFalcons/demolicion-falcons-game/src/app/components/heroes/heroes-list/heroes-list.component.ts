import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../../core/models/hero.model';
import { CreateGameService } from '../../../core/services/game-services/create-game.service';
import { RemoteService } from '../../../core/services/remote.service';
import { GameInitInfoService } from '../../../core/services/game-services/game-init-info.service';

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
  constructor(
    private createGameService: CreateGameService,
    private remoteService: RemoteService,
    private gameInitInfoService: GameInitInfoService
  ) {
    this.heroes = [{
      name: 'Falcon',
      hp: 400,
      armor: 10,
      image: '../../../../assets/img/heroes/eagle-right.png',
      description: 'It comes from a distant unknown land, it has a weak defense, but it is very quick and subtle'
    },
    {
      name: 'Cloudy',
      hp: 500,
      armor: 20,
      image: '../../../../assets/img/heroes/cloudy-right.png',
      description: 'It comes from a Cloudysland,drives skate and has a strange hairstyle'
    }];

    this.createGameService.gameObgectRecieved$.subscribe(obj => {
      this.gameObject = obj;

      console.log('OBJECTTTTT')
      console.log(obj)
      let playersObj = {}
      for (let key in obj) {
        if (key.startsWith('player')) {
          playersObj[key] = obj[key];
        }
      }
      this.playersArr = Array.from(Object.keys(playersObj))

      console.log('LPAYERRSSS')
      console.log(this.playersArr)
      this.className = 'col-sm-' + 12 / this.gameObject.numberOfPlayers;

      console.log('GAME OBJECT');
      console.log(this.gameObject)

    })
  }

  ngOnInit() {
  }

  sendGameObjectToServer() {
    this.remoteService.sendGameObject(this.gameObject).subscribe(data => {
      this.gameInitInfoService.updateGameInitialInfot(data);
    })
  }

  submit(form) {
    console.log(this.gameObject)
    console.log(form.value)
  }
}
