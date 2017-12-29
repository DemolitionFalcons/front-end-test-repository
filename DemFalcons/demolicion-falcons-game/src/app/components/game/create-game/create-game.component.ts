import { Component, OnInit } from '@angular/core';
import { CreateGameService } from '../../../core/services/game-services/create-game.service';

import { CreateGameModel } from '../../../core/models/createGame.model';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  public model: CreateGameModel;
  constructor(private createGameService: CreateGameService) {

    this.model = new CreateGameModel('', '', 2);
  }

  ngOnInit() {
  }


  createGame() {
    this.createGameService.createGamePost(this.model);
  }

}
