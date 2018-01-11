import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Raphael from 'raphael/raphael.js';
import { MapService } from '../../../core/services/game-services/map.service';
import { PlayerService } from '../../../core/services/game-services/player.service';
import { DiceService } from '../../../core/services/game-services/dice.service';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  public paper;
  public isDiceRolled = false;
  constructor(
    private mapService: MapService,
    private playerService: PlayerService,
    private diceService: DiceService
  ) {
    this.paper = Raphael('map', 100, 1500, 2000);
    this.setVisibleProperty();
  }

  ngOnInit() {
    this.mapService.drawMap(this.paper);
    this.playerService.drawPlayers(this.paper);
    this.diceService.drawDice(this.paper);
  }

  ngOnDestroy() {

    this.mapService.removePaper();
  }

  private setVisibleProperty() {
    Raphael.el.isVisible = function () {
      return (this.node.style.display !== "none");
    }
  }

  rollDice() {
    this.diceService.rollDice();
    console.log('in roll dice');
    if (this.isDiceRolled === false) {
      this.isDiceRolled = true;
      //request for dice?
      this.playerService.movePlayer();
      this.isDiceRolled = false;
    } else {
      return;
    }
  }

}


