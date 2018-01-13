import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Raphael from 'raphael/raphael.js';
import { MapService } from '../../../core/services/game-services/map.service';
import { PlayerService } from '../../../core/services/game-services/player.service';
import { DiceService } from '../../../core/services/game-services/dice.service';
import { setTimeout } from 'timers';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  public paper;
  public isDiceRolled = false;

  public diseStart = false;
  public diseThrown = false;
  public diseImage = true;
  public disethrownHide = true;
  public hide1 = true;
  public dise: number;

  constructor(
    private mapService: MapService,
    private playerService: PlayerService,
    // private diceService: DiceService
  ) {

    // window.addEventListener('resize', this.windowResizing);
    let width = window.document.body.clientWidth;

    this.paper = Raphael('map', 50, '100%', '250%');
    this.paper.setViewBox(0, 0, width + 200, 1900, true);
    this.paper.canvas.setAttribute('preserveAspectRatio', 'xMinYMin');
    this.paper.image("../../../../assets/img/map1background.jpg", 0, 20, 1100, 1900);
    this.setVisibleProperty();

  }


  ngOnInit() {
    this.mapService.drawMap(this.paper);
    this.playerService.drawPlayers(this.paper);
    // this.diceService.drawDice(this.paper);
  }

  ngOnDestroy() {

    this.paper.remove();
  }

  private setVisibleProperty() {
    Raphael.el.isVisible = function () {
      return (this.node.style.display !== "none");
    }
  }

  rollDice() {
    // this.diceService.rollDice();
    console.log('in roll dice');
    this.dise = Math.floor(Math.random() * 6) + 1;
    this.diseStart = true;
    this.hide1 = true;
    setTimeout(() => {
      this.diseStart = false;
      this.diseThrown = true;
      this.disethrownHide = false;
    }, 1000, );
    setTimeout(() => {
      this.disethrownHide = true;
      this.hide1 = false;
      this.playerService.movePlayer(this.dise);
    }, 2000, );





    // if (this.isDiceRolled === false) {
    //   this.isDiceRolled = true;
    //   //request for dice?
    //   this.playerService.movePlayer();
    //   this.isDiceRolled = false;
    // } else {
    //   return;
    // }
  }

  windowResizing() {

    //   let width = window.document.body.clientWidth;
    //   if (width <= 500) {
    //     this.paper ? this.paper.remove() : console.log('none');

    //     console.log('under500px');
    //     this.paper = Raphael('map', 50, '100%', '250%');
    //     this.paper.setViewBox(0, 0, width + 200, 1700, true);
    //     this.paper.canvas.setAttribute('preserveAspectRatio', 'xMinYMin');
    //     this.paper ? this.paper.image("../../../../assets/img/map1background.jpg", 0, 20, '70%', '110%') : console.log('none');
    //     Raphael.el.isVisible = function () {
    //       return (this.node.style.display !== "none");
    //     }
    //     this.mapService.drawMap(this.paper);
    //     this.playerService.drawPlayers(this.paper);
    //     this.diceService.drawDice(this.paper);
    //   } else{
    //     this.paper = Raphael('map', 50, '100%', '250%');
    //     this.paper.setViewBox(0, 0, width + 200, 1700, true);
    //     this.paper.canvas.setAttribute('preserveAspectRatio', 'xMinYMin');
    //     this.paper.image("../../../../assets/img/map1background.jpg", 0, 20, '70%', '110%');
    //     this.setVisibleProperty();
    //   }
    // }

  }
}

