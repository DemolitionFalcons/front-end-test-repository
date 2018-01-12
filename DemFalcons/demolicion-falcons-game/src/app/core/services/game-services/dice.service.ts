import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';
import { PlayerService } from './player.service';

@Injectable()
export class DiceService {

    private diceGif;
    private diceImage;
    private diceHero;

    constructor(
        private playerService: PlayerService
    ) { }

    drawDice(paper) {

        this.diceGif = paper.image("../../../../assets/img/rolling-dice-gif-3.gif", 1300, 50, 100, 100).attr({'z-index': '100'});
        this.diceImage = paper.image('../../../../assets/img/dice-image.png', 1100, 300, 100, 100).attr({'z-index': "100"});
        this.diceHero = paper.image('../../../../assets/img/dice-hero.png', 1300, 50, 100, 100 ).attr({'z-index': "100"});

        this.diceImage.hide();
        this.diceGif.hide();
        this.diceHero.hide();

    }

    rollDice() {

        this.diceImage.hide();

        this.diceHero.show().animate({x: 1600, y: 50}, 2000, () => {
            this.diceHero.animate({x: 1000, y: 50}, 2000, () => {
                this.diceHero.hide();
            })
            this.diceGif.show().animate({ x: 1100, y: 300 }, 2000, () => {
                this.diceGif.hide().animate({ x: 1300, y: 50 });
                this.diceImage.show();
                this.playerService.movePlayer();

            });
        })

    }
}