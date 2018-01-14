import { Component, OnInit } from '@angular/core';
import { CreateGameService } from '../../../core/services/game-services/create-game.service';

import { CreateSinglePlayersModel } from '../../../core/models/createSinglePlayer.model';
import { RemoteService } from '../../../core/services/remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-single-player',
  templateUrl: './create-single-player.component.html',
  styleUrls: ['./create-single-player.component.css']
})

export class CreateSinglePlayerComponent implements OnInit {

  public model: CreateSinglePlayersModel;
  public opponentsArr: Array<number>;
  public maps: Array<number>;
  constructor(
    private remoteService: RemoteService,
    private createGameService: CreateGameService,
    private router: Router
  ) {
    this.model = new CreateSinglePlayersModel('', '', 0);
    this.maps = new Array(3);
  }

  ngOnInit() {
  }

  updateOpps() {
    this.opponentsArr = new Array(Number(this.model.numberOfOpponents));
  }

  chooseHeroes(form) {

    this.remoteService.getHeroList().subscribe(data => {
      console.log(data);
    });

    //this.createGameService.createGamePost(this.model);
    let gameObj = {
      map: this.model.map,
      name: this.model.name,
      numberOfPlayers: Number(this.model.numberOfOpponents) + 1,
      'player1': {
        type: 'human',
        nickname: '',
        hero: ''
      }
    };

    for (let key in form.value) {
      if (key.startsWith('player')) {
        gameObj[key] = { type: form.value[key], nickname: '', hero: '' }
      }
    }

    this.createGameService.updateGameObject(gameObj);
    this.router.navigate(['/ChooseHero']);
  }
}