import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';

@Injectable()
export class PlayerService {
    private playerPath;
    constructor(

    ) {
        this.playerPath = this.getPlayerPath();
    }

    drawPlayers(paper, players) {
        for(let p in players){
            let player = players[p];
            let imageRight = paper.image("../../../../assets/img/heroes/" + player.hero + '-right.png', this.playerPath[0].x - player.offsetX, this.playerPath[0].y - player.offsetY, 60, 100);
        }
        // var falcon = paper.image("heroes 250x222/eagle-right.png", playerPath[0].x - 50, playerPath[0].y - 110, 60, 100);
        // var falconLeft = paper.image("heroes 250x222/eagle-left.png", playerPath[0].x - 50, playerPath[0].y - 110, 60, 100);
        // falconLeft.hide()

        // var cloudy = paper.image("heroes 250x222/cloudy-right.png", playerPath[0].x, playerPath[0].y - 110, 60, 100);
        // var cloudyLeft = paper.image("heroes 250x222/cloudy-left.png", playerPath[0].x, playerPath[0].y - 110, 60, 100);
        // cloudyLeft.hide();


        // var fly = paper.image("heroes 250x222/eagle-move-right.gif", playerPath[0].x - 50, playerPath[0].y - 110, 60, 100);
        // var flyleft = paper.image("heroes 250x222/eagle-move-left.gif", playerPath[0].x - 50, playerPath[0].y - 110, 60, 100);

        // var skate = paper.image("heroes 250x222/cloudy-move-right.gif", playerPath[0].x, playerPath[0].y - 110, 60, 100);
        // var skateLeft = paper.image("heroes 250x222/cloudy-move-left.gif", playerPath[0].x, playerPath[0].y - 110, 60, 100);


        // fly.hide();
        // flyleft.hide();
        // skate.hide();
        // skateLeft.hide();
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
}