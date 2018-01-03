import { Component, OnInit } from '@angular/core';
import { CreateGameService } from '../../../core/services/game-services/create-game.service';

import { CreateSinglePlayersModel } from '../../../core/models/createSinglePlayer.model';

@Component({
  selector: 'app-create-single-player',
  templateUrl: './create-single-player.component.html',
  styleUrls: ['./create-single-player.component.css']
})
export class CreateSinglePlayerComponent implements OnInit {

  public model: CreateSinglePlayersModel;
  constructor(private createGameService: CreateGameService) {
    this.model = new CreateSinglePlayersModel('', '', 1);
  }

  ngOnInit() {
  }

  createGame() {
    this.createGameService.createGamePost(this.model);
  }

}
