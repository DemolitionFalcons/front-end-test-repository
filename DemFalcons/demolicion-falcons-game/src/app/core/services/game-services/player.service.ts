import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';

@Injectable()
export class PlayerService {
    private playerPath;
    public players;
    private currentPlayerIndex;
    constructor(

    ) {
        this.players = this.getPlayers();
        this.playerPath = this.getPlayerPath();
    }

    drawPlayers(paper) {
        for (let p in this.players) {
            let player = this.players[p];
            player.imageRight = paper.image("../../../../assets/img/heroes/" + player.hero + '-right.png', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 60, 100);
            player.imageLeft = paper.image("../../../../assets/img/heroes/" + player.hero + '-left.png', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 60, 100);
            player.moveRight = paper.image("../../../../assets/img/heroes/" + player.hero + '-move-right.gif', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 60, 100);
            player.moveLeft = paper.image("../../../../assets/img/heroes/" + player.hero + '-move-left.gif', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 60, 100);

            player.moveRight.hide();
            player.moveLeft.hide();
            player.imageLeft.hide();
        }



    }

    getPlayerPath(): Array<Object> {
        //http request

        let playerPath = [
            { x: 69, y: 186 },
            { x: 144, y: 229 },
            { x: 219, y: 186 },
            { x: 294, y: 143 },
            { x: 369, y: 186 },
            { x: 444, y: 229 },
            { x: 444, y: 315 },
            { x: 519, y: 358 },
            { x: 594, y: 315 },
            { x: 669, y: 272 },
            { x: 744, y: 229 },
            { x: 819, y: 186 },
            { x: 894, y: 229 },
            { x: 969, y: 272 },
            { x: 969, y: 358 },
            { x: 894, y: 401 },
            { x: 894, y: 487 },
            { x: 819, y: 530 },
            { x: 744, y: 573 },
            { x: 669, y: 530 },
            { x: 594, y: 487 },
            { x: 519, y: 530 },
            { x: 444, y: 573 },
            { x: 369, y: 616 },
            { x: 294, y: 573 },
            { x: 219, y: 616 },
            { x: 144, y: 659 },
            { x: 144, y: 745 },
            { x: 219, y: 788 },
            { x: 294, y: 831 },
            { x: 369, y: 788 },
            { x: 444, y: 745 },
            { x: 519, y: 788 },
            { x: 594, y: 745 },
            { x: 669, y: 788 },
            { x: 744, y: 831 },
            { x: 819, y: 874 },
            { x: 894, y: 917 },
            { x: 969, y: 960 },
            { x: 1044, y: 917 },
            { x: 1044, y: 1003 },
            { x: 1044, y: 1089 },
            { x: 969, y: 1132 },
            { x: 894, y: 1175 },
            { x: 819, y: 1132 },
            { x: 744, y: 1089 },
            { x: 669, y: 1132 },
            { x: 594, y: 1089 },
            { x: 669, y: 1046 },
            { x: 669, y: 960 },
            { x: 594, y: 917 },
            { x: 519, y: 960 },
            { x: 444, y: 1003 },
            { x: 369, y: 960 },
            { x: 294, y: 1003 },
            { x: 294, y: 1089 },
            { x: 219, y: 1132 },
            { x: 144, y: 1089 },
            { x: 69, y: 1132 },
            { x: 69, y: 1218 },
            { x: 144, y: 1261 },
            { x: 219, y: 1304 },
            { x: 219, y: 1390 },
            { x: 294, y: 1433 },
            { x: 369, y: 1390 },
            { x: 444, y: 1347 },
            { x: 444, y: 1261 },
            { x: 519, y: 1218 },
            //{ x: 594, y: 1261 },
            //{ x: 669, y: 1304 },
            //{ x: 744, y: 1261 },
            //{ x: 819, y: 1304 },
            { x: 894, y: 1347 },
            { x: 969, y: 1390 },
            { x: 1044, y: 1433 },
            { x: 969, y: 1476 },
            { x: 894, y: 1519 },
            { x: 819, y: 1476 },
            { x: 744, y: 1433 },
            { x: 669, y: 1476 },
            { x: 594, y: 1433 },
            { x: 519, y: 1476 },
            { x: 444, y: 1519 },
            { x: 444, y: 1605 },
            { x: 519, y: 1648 },
            { x: 594, y: 1605 },
            { x: 669, y: 1648 },
            { x: 744, y: 1605 },
            { x: 819, y: 1648 },
            { x: 894, y: 1605 },
            { x: 969, y: 1648 },
            { x: 1044, y: 1605 },

        ];

        return playerPath;
    }

    movePlayer() {
        let num = Math.floor(Math.random() * 6) + 1
        let player = this.players[this.currentPlayerIndex];

        if (player.imageRight.isVisible) {
            if (this.playerPath[player.currentIndex + num].x < this.playerPath[player.currentIndex].x) {
                player.imageRight.animate({ y: this.playerPath[player.currentIndex].y - 120, opacity: 0 }, 500, function () { this.hide() })

                player.moveLeft.show().animate({ opacity: 1 }, 500, function () {
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);

                    player.moveRight.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 2000)
                    player.moveLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 3000, hideLeft);
                });
            } else {
                player.imageRight.animate({ y: this.playerPath[player.currentIndex].y - 120, opacity: 0 }, 500, function () { this.hide() })
                player.moveRight.show().animate({ opacity: 1 }, 500, function () {
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);
                    player.moveLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 2000)
                    player.moveRight.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 3000, hideRight);
                });
            }
        } else {
            if (this.playerPath[player.currentIndex + num].x < this.playerPath[player.currentIndex].x) {
                player.imageLeft.animate({ y: this.playerPath[player.currentIndex].y - 120, opacity: 0 }, 500, function () { this.hide() })

                player.moveLeft.show().animate({ opacity: 1 }, 500, function () {
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);

                    player.moveRight.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 2000)
                    player.moveLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 3000, hideLeft);
                });
            } else {
                player.imageLeft.animate({ y: this.playerPath[player.currentIndex].y - 120, opacity: 0 }, 500, function () { this.hide() })
                player.moveRight.show().animate({ opacity: 1 }, 500, function () {
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - 50, y: this.playerPath[player.currentIndex + num].y - 130 }, 2000);
                    player.moveLeft.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 2000)
                    player.moveRight.animate({ x: this.playerPath[player.currentIndex + num].x - 100, y: this.playerPath[player.currentIndex + num].y - 150 }, 3000, hideRight);
                });
            }
        }

        function hideLeft() {
            player.currentIndex = player.currentIndex + num;
            if (this.playerPath[player.currentIndex].x > this.playerPath[player.currentIndex + 1].x) {
                player.imageLeft.show().animate({ y: this.playerPath[player.currentIndex].y - 110, opacity: 1 }, 500);
                player.imageRight.isVisible = false;
            } else {
                player.imageRight.show().animate({ y: this.playerPath[player.currentIndex].y - 110, opacity: 1 }, 500);
                player.imageRight.isVisible = true;
            }

            player.moveLeft.animate({ opacity: 0 }, 500, function () {
                this.hide();
                //this.currentPlayerIndex = this.currentPlayerIndex % this.players.length;
                if(this.currentPlayerIndex === this.players.length - 1){
                    this.currentPlayerIndex = 0;
                }else {
                    this.currentPlayerIndex = this.currentPlayerIndex + 1;
                }
            })


        }
        function hideRight() {
            player.currentIndex = player.currentIndex + num;

            if (this.playerPath[player.currentIndex].x > this.playerPath[player.currentIndex + 1].x) {
                player.imageLeft.show().animate({ y: this.playerPath[player.currentIndex].y - 110, opacity: 1 }, 500);
                player.imageRight.isVisible = false;
            } else {
                player.imageRight.show().animate({ y: this.playerPath[player.currentIndex].y - 110, opacity: 1 }, 500);
                player.imageRight.isVisible = true;
            }
            player.moveRight.animate({ opacity: 0 }, 500, function () {
                this.hide();
                //this.currentPlayerIndex = this.currentPlayerIndex % this.players.length;
                if(this.currentPlayerIndex === this.players.length - 1){
                    this.currentPlayerIndex = 0;
                }else {
                    this.currentPlayerIndex = this.currentPlayerIndex + 1;
                }
            })
        }
    }

    private getPlayers() {
        //http for players

        // offsetX и offsetY са за да може картинките на героя да се нареждат на различни места върхуквадратчето, а не да излизат една върху друга и да се закриват
        return {
            player1: {
                hero: 'cloudy',
                currentIndex: 0,
                offsetX: 50,
                offsetY: 110
            },
            player2: {
                hero: 'eagle',
                currentIndex: 0,
                offsetX: 0,
                offsetY: 110
            }
        }
    }
}