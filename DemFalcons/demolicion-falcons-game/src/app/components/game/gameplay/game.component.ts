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
  public isDiceRolled;
  public rolledDice;

  public currentPlayerInfo;
  public allPlayers;
  public yourTurnMark = "Your turn";
  public heroLocation;

  public diseStart = false;
  public diseThrown = false;
  public diseImage = true;
  public disethrownHide = true;
  public hide1 = true;
  public dise: number;
  public indexOfPlWhoturn = 0;

  private playerPathSize;

  constructor(
    private mapService: MapService,
    private playerService: PlayerService,
    private diceService: DiceService
  ) {
    // window.addEventListener('resize', this.windowResizing);
    let width = window.document.body.clientWidth;

    this.paper = Raphael('map', 50, '100%', '250%');
    this.paper.setViewBox(0, 0, width + 200, 1900, true);
    this.paper.canvas.setAttribute('preserveAspectRatio', 'xMinYMin');
    this.paper.image("../../../../assets/img/map1background.jpg", 0, 20, 1100, 1900);
    this.setVisibleProperty();

    this.diceService.isDiceRolledRecieved$.subscribe(data => {
      this.isDiceRolled = data;
      this.rolledDice = data;
    });

    this.isDiceRolled = false;
    this.rolledDice = false;
  }


  ngOnInit() {
    this.mapService.drawMap(this.paper);
    this.playerService.drawPlayers(this.paper);
    this.allPlayers = this.playerService.getPlayers();
    this.playerPathSize = this.playerService.getPlayerPathSize();

    console.log(this.allPlayers);
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


    if (!this.isDiceRolled) {
      this.isDiceRolled = true;
      this.dise = Math.floor(Math.random() * 6) + 1;
      this.diseStart = true;
      this.hide1 = true;
      setTimeout(() => {
        this.diseStart = false;
        this.diseThrown = true;
        this.disethrownHide = false;
      }, 1000, );
      setTimeout(() => {
        this.rolledDice = true;
        this.disethrownHide = true;
        this.hide1 = false;
        this.playerService.movePlayer(this.dise).subscribe(data => {

          this.currentPlayerInfo = data;
          this.heroLocation = Math.ceil(this.currentPlayerInfo.currentIndex + this.dise * 100 / this.playerPathSize);
        })
      }, 2000, );
    }

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

