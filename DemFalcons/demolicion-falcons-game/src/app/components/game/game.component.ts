import { Component, OnInit } from '@angular/core';
import * as Raphael from 'raphael/raphael.js';
import { MapService } from '../../core/services/game-services/map.service';
import { PlayerService } from '../../core/services/game-services/player.service';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public paper;
  public players;

  constructor(
    private mapService: MapService,
    private playerService: PlayerService
  ) {
   this.paper = Raphael('map',0, 1500, 2000);    
   this.setVisibleProperty();
  }

  ngOnInit() {
    this.players = this.getPlayers();
    this.mapService.drawMap(this.paper);
    this.playerService.drawPlayers(this.paper, this.players);
  }

  private setVisibleProperty(){
    Raphael.el.isVisible = function () {
      return (this.node.style.display !== "none");
    }
  }

  private getPlayers(){
    //http for players

    // offsetX и offsetY са за да може картинките на героя да се нареждат на различни места върхуквадратчето, а не да излизат една върху друга и да се закриват
    return {
      player1: {
        hero: 'cloudy',
        offsetX: 50,
        offsetY: 110
      },
      player2: {
        hero: 'eagle',
        offsetX: 0,
        offsetY: 110
      }
    }
  }

}


