import { Component, OnInit } from '@angular/core';
import { CreateGameService } from '../../../core/services/game-services/create-game.service';

import { CreateSinglePlayersModel } from '../../../core/models/createSinglePlayer.model';

@Component({
  selector: 'app-create-single-player',
  templateUrl: './create-single-player.component.html',
  styleUrls: ['./create-single-player.component.css']
})

export class CreateSinglePlayerComponent implements OnInit {

  public opponents = 0;
  public model: CreateSinglePlayersModel;
  public opponentsArr: Array<number>;
  constructor(private createGameService: CreateGameService) {
    this.model = new CreateSinglePlayersModel('', '', 0);
  }

  ngOnInit() {
    console.log(this.model.opponents);
  }

  updateOpps() {
    console.log(this.opponentsArr);
    this.opponentsArr = new Array(Number(this.model.opponents));

  }

  createGame(form) {
    //this.createGameService.createGamePost(this.model);
    console.log(form.value);

  }

}
