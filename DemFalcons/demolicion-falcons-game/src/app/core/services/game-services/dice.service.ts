import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';
import { PlayerService } from './player.service';

@Injectable()
export class DiceService {

    private diceGif;
    private diceOne;
    private diceTwo;
    private diceThree;
    private diceFour;
    private diceFive;
    private diceSix;

    private diceHero;
    private diceHeroGif;

    constructor(
        private playerService: PlayerService
    ) { }

    drawDice(paper) {

        this.diceGif = paper.image("../../../../assets/img/rolling-dice-gif-3.gif", 1300, 50, 100, 100).attr({ 'z-index': '100' });
        this.diceOne = paper.image('../../../../assets/img/dices/dice-one.jpg', 1150, 150, 70, 70).attr({ 'z-index': "100" });
        this.diceTwo = paper.image('../../../../assets/img/dices/dice-two.jpg', 1150, 150, 70, 70).attr({ 'z-index': "100" });
        this.diceThree = paper.image('../../../../assets/img/dices/dice-three.jpg', 1150, 150, 70, 70).attr({ 'z-index': "100" });
        this.diceFour = paper.image('../../../../assets/img/dices/dice-four.jpg', 1150, 150, 70, 70).attr({ 'z-index': "100" });
        this.diceFive = paper.image('../../../../assets/img/dices/dice-five.jpg', 1150, 150, 70, 70).attr({ 'z-index': "100" });
        this.diceSix = paper.image('../../../../assets/img/dices/dice-six.jpg', 1150, 150, 70, 70).attr({ 'z-index': "100" });


        this.diceHero = paper.image('../../../../assets/img/dices/dice-hero-rotated.png', 1300, 50, 150, 100).attr({ 'z-index': "100" });
        this.diceHero.node.setAttribute('class', 'diceHero');
        this.diceHeroGif = paper.image('../../../../assets/img/dices/dice-hero.gif', 1330, 30, 100, 150);


        this.diceHero.x = 1200;
        this.diceHero.y = 50;
        this.diceHeroGif.hide();

        this.diceOne.hide();
        this.diceTwo.hide();
        this.diceThree.hide();
        this.diceFour.hide();
        this.diceFive.hide();
        this.diceSix.hide();

        this.diceGif.hide();
        // this.diceHero.hide();
        let previousPosition = window.pageYOffset || document.documentElement.scrollTop;

        // window.addEventListener('scroll', () => {
        //     let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        //     if (previousPosition > currentPosition) {
        //         this.diceHero.animate({ x: 1300, y: this.diceHero.y - 10 });
        //         this.diceHeroGif.animate({ x: 1330, y: this.diceHero.y + 10 });                
        //         this.diceHero.y = this.diceHero.y - 10;
        //         this.diceHeroGif.y = this.diceHero.y - 10;
                
        //     } else {
        //         this.diceHero.animate({ x: 1300, y: this.diceHero.y + 10 });
        //         this.diceHeroGif.animate({ x: 1330, y: this.diceHero.y + 10 });
        //         this.diceHero.y = this.diceHero.y + 10;
        //     }

        //     previousPosition = currentPosition;
        // })


        // window.addEventListener('scroll', () => {
        //     console.log('inside')
        //     this.diceHero.animate({ x: 1200, y: this.diceHero.y + 10 });
        //     this.diceHero.y = this.diceHero.y + 10;
        // })

        this.diceHeroGif.node.onclick = () => {
            this.rollDice();
        }

        this.diceHero.node.onmouseover = ()=>{
            this.diceHero.hide();
            this.diceHeroGif.show();
        }

        this.diceHeroGif.node.onmouseout = ()=>{
            this.diceHeroGif.hide();
            this.diceHero.show();
        }


    }

    rollDice() {
        this.diceOne.hide();
        this.diceTwo.hide();
        this.diceThree.hide();
        this.diceFour.hide();
        this.diceFive.hide();
        this.diceSix.hide();

        // this.diceHero.show().animate({x: 1600, y: 50}, 2000, () => {
        // this.diceHero.animate({x: 1000, y: 50}, 2000, () => {
        // this.diceHero.hide();
        // })
        this.diceGif.show().animate({ x: 1150, y: 150 }, 1000, () => {
            this.diceGif.hide().animate({ x: 1300, y: 50 });

            let num = Math.floor(Math.random() * 6) + 1;
            switch (num) {
                case 1:
                    this.diceOne.show();
                    break;
                case 2:
                    this.diceTwo.show();
                    break;
                case 3:
                    this.diceThree.show();
                    break;
                case 4:
                    this.diceFour.show();
                    break;
                case 5:
                    this.diceFive.show();
                    break;
                case 6:
                    this.diceSix.show();
                    break;
            }
            this.playerService.movePlayer(num);
        });
        
    }
}