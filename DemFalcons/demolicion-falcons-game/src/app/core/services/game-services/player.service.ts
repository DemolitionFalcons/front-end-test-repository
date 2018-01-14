import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';
import { CreateGameService } from './create-game.service';
import { DiceService } from './dice.service';
import 'rxjs/add/observable/of';

@Injectable()
export class PlayerService {
    private gameObject;
    private playerPath;
    public players;
    private currentPlayerIndex;
    constructor(
        private createGameService: CreateGameService,
        private diceService: DiceService
    ) {
        this.createGameService.gameObgectRecieved$.subscribe(data => {
            this.gameObject = data;
            this.players = this.getPlayers();

        })
        this.playerPath = this.getPlayerPath();
        this.currentPlayerIndex = 0;
        this.movePlayer = this.movePlayer.bind(this);
        this.drawPlayers = this.drawPlayers.bind(this);


    }

    drawPlayers(paper) {
        for (let player of this.players) {
            player.imageRight = paper.image("../../../../assets/img/heroes/" + player.hero + '-right.png', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 100, 150);
            player.imageLeft = paper.image("../../../../assets/img/heroes/" + player.hero + '-left.png', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 100, 150);
            player.moveRight = paper.image("../../../../assets/img/heroes/" + player.hero + '-move-right.gif', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 100, 150);
            player.moveLeft = paper.image("../../../../assets/img/heroes/" + player.hero + '-move-left.gif', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 100, 150);

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
            { x: 594, y: 1261 },
            { x: 669, y: 1304 },
            { x: 744, y: 1261 },
            { x: 819, y: 1304 },
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

    getPlayerPathSize() {
        return this.playerPath.length;
    }

    movePlayer(num): Observable<any> {
        const player = this.players[this.currentPlayerIndex];
        if (player.imageRight.isVisible) {
            if (this.playerPath[player.currentIndex + num].x < this.playerPath[player.currentIndex].x) {
                player.imageRight.animate({ y: this.playerPath[player.currentIndex].y - player.offsetY - 20, opacity: 0 }, 500, function () { this.hide() })

                player.moveLeft.show().animate({ opacity: 1 }, 500, () => {
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000);
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000);
                    player.moveRight.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000)
                    this.move(player, player.currentIndex + num, 'Left');
                });
            } else {
                player.imageRight.animate({ y: this.playerPath[player.currentIndex].y - player.offsetY - 20, opacity: 0 }, 500, function () { this.hide() })

                player.moveRight.show().animate({ opacity: 1 }, 500, () => {
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 100);
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 100);
                    player.moveLeft.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 100)
                    this.move(player, player.currentIndex + num, 'Right');

                });
            }
        } else {
            if (this.playerPath[player.currentIndex + num].x < this.playerPath[player.currentIndex].x) {
                player.imageLeft.animate({ y: this.playerPath[player.currentIndex].y - player.offsetY - 20, opacity: 0 }, 500, function () { this.hide() })

                player.moveLeft.show().animate({ opacity: 1 }, 500, () => {
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000);
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000);

                    player.moveRight.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000)
                    this.move(player, player.currentIndex + num, 'Left');
                });
            } else {
                player.imageLeft.animate({ y: this.playerPath[player.currentIndex].y - player.offsetY - 20, opacity: 0 }, 500, function () { this.hide() })
                player.moveRight.show().animate({ opacity: 1 }, 500, () => {
                    player.imageLeft.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000);
                    player.imageRight.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000);
                    player.moveLeft.animate({ x: this.playerPath[player.currentIndex + num].x - player.offsetX, y: this.playerPath[player.currentIndex + num].y - player.offsetY }, 2000)
                    this.move(player, player.currentIndex + num, 'Right');
                });
            }
        }

        return Observable.of(this.players[this.currentPlayerIndex]);

    }

    hideRight(player, end) {
        player.currentIndex = end;
        if (this.playerPath[player.currentIndex].x > this.playerPath[player.currentIndex + 1].x) {
            player.imageLeft.show().animate({ y: this.playerPath[player.currentIndex].y - player.offsetY, opacity: 1 }, 500);
            player.imageRight.isVisible = false;
        } else {
            player.imageRight.show().animate({ y: this.playerPath[player.currentIndex].y - player.offsetY, opacity: 1 }, 500);
            player.imageRight.isVisible = true;
        }
        player.moveRight.animate({ opacity: 0 }, 500, () => {
            player.moveRight.hide();
            //this.currentPlayerIndex = this.currentPlayerIndex % this.players.length;
            if (this.currentPlayerIndex === this.players.length - 1) {
                this.currentPlayerIndex = 0;
            } else {
                this.currentPlayerIndex = this.currentPlayerIndex + 1;
            }

            this.diceService.setIsDiceRolled(false);
        })
    }

    hideLeft(player, end) {
        player.currentIndex = end;
        if (this.playerPath[player.currentIndex].x > this.playerPath[player.currentIndex + 1].x) {
            player.imageLeft.show().animate({ y: this.playerPath[player.currentIndex].y - player.offsetY, opacity: 1 }, 500);
            player.imageRight.isVisible = false;
        } else {
            player.imageRight.show().animate({ y: this.playerPath[player.currentIndex].y - player.offsetY, opacity: 1 }, 500);
            player.imageRight.isVisible = true;
        }

        player.moveLeft.animate({ opacity: 0 }, 500, () => {
            player.moveLeft.hide();
            //this.currentPlayerIndex = this.currentPlayerIndex % this.players.length;
            if (this.currentPlayerIndex === this.players.length - 1) {
                this.currentPlayerIndex = 0;
            } else {
                this.currentPlayerIndex = this.currentPlayerIndex + 1;
            }

            this.diceService.setIsDiceRolled(false);
        })


    }

    move(player, end, direction) {
        player['move' + direction].animate({ x: this.playerPath[player.currentIndex + 1].x - player.offsetX, y: this.playerPath[player.currentIndex + 1].y - player.offsetY }, 1000, () => {


            if (player.currentIndex === end - 1) {
                if (direction === 'Right') {
                    this.hideRight(player, end);
                } else {
                    this.hideLeft(player, end);
                }
                return;
            } else {
                player.currentIndex = player.currentIndex + 1;
                return this.move(player, end, direction);
            }
        });
        // if(direction === 'right'){
        //     player.moveRight.animate({ x: this.playerPath[player.currentIndex + 1].x - player.offsetX, y: this.playerPath[player.currentIndex + 1].y - player.offsetY }, 1000, () => {
        //         console.log('PLAYEER ' + player.currentIndex);
        //         console.log('END - ' + end);

        //         if (player.currentIndex === end - 1) { 
        //             console.log('PLAYER! = '+ player)  
        //             this.hideRight(player, end);
        //             return;
        //         } else {
        //             player.currentIndex = player.currentIndex + 1;
        //             return this.move(player, end, direction);
        //         }
        //     });
        // }else{
        //     player.moveLeft.animate({ x: this.playerPath[player.currentIndex + 1].x - player.offsetX, y: this.playerPath[player.currentIndex + 1].y - player.offsetY }, 1000, () => {
        //         console.log('PLAYEER ' + player.currentIndex);
        //         console.log('END - ' + end);

        //         if (player.currentIndex === end - 1) { 
        //             console.log('PLAYER! = '+ player)  
        //             this.hideRight(player, end);
        //             return;
        //         } else {
        //             player.currentIndex = player.currentIndex + 1;
        //             return this.move(player, end, direction);
        //         }
        //     });
        // }

    }

    getPlayers() {
        //http for players

        let players = Array.from(Object.keys(this.gameObject)).filter(k => k.startsWith('player')).map(e => e = this.gameObject[e])

        let gamePLayers: Array<{}> = [];
        for (let i = 0; i < players.length; i++) {
            let playerOffsets = getOffset(i, players.length);

            gamePLayers[i] = {
                nickname: players[i].nickname,
                hero: players[i].hero.toLowerCase(),
                currentIndex: 0,
                offsetX: playerOffsets.offsetX,
                offsetY: playerOffsets.offsetY
            };
        }

        function getOffset(i, playersCount) {
            switch (playersCount) {
                case 1:
                    return { offsetX: 40, offsetY: 130 }
                case 2:
                    switch (i) {
                        case 0:
                            return { offsetX: 75, offsetY: 160 };
                        case 1:
                            return { offsetX: 20, offsetY: 130 };
                    };
                case 3:
                    switch (i) {
                        case 0:
                            return { offsetX: 75, offsetY: 160 };
                        case 1:
                            return { offsetX: 20, offsetY: 160 };
                        case 2:
                            return { offsetX: 40, offsetY: 132 };
                    }
                case 4:
                    switch (i) {
                        case 0:
                            return { offsetX: 75, offsetY: 160 };
                        case 1:
                            return { offsetX: 20, offsetY: 160 };
                        case 2:
                            return { offsetX: 60, offsetY: 132 };
                        case 3:
                            return { offsetX: 20, offsetY: 130 };
                    }
            }
        }

        return gamePLayers;
        // offsetX и offsetY са за да може картинките на героя да се нареждат на различни места върхуквадратчето, а не да излизат една върху друга и да се закриват
        // return [
        //     {
        //         hero: 'edward',
        //         currentIndex: 0,
        //         offsetX: 75,
        //         offsetY: 160
        //     }, {
        //         hero: 'cloudy',
        //         currentIndex: 0,
        //         offsetX: 20,
        //         offsetY: 160
        //     },
        //     {
        //         hero: 'eagle',
        //         currentIndex: 0,
        //         offsetX: 60,
        //         offsetY: 132
        //     }, {
        //         hero: 'stephano',
        //         currentIndex: 0,
        //         offsetX: 20,
        //         offsetY: 130
        //     }
        // ]
    }

    
}