import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';
import { PlayerService } from './player.service';

@Injectable()
export class MapService {

    private stoneIndex;
    private xOne;
    private xTwo;
    private y;
    private yIndex;
    private playerPath;
    private blackHoles = [
        { x: 594, y: 1261 },
        { x: 669, y: 1304 },
        { x: 744, y: 1261 },
        { x: 819, y: 1304 },
    ];
    private mapObjects;

    constructor(
        private playerService: PlayerService
    ) {
        this.stoneIndex = 0;
        this.playerPath = this.playerService.getPlayerPath();
        this.mapObjects = this.getMapObjects();
        this.xOne = 69;
        this.xTwo = 144
        this.y = [186, 143, 229]
        this.yIndex = 0;
    }
   
    drawMap(paper): void {
        for (let row = 0; row < 12; row++) {
            if (row % 2 == 0) {
                this.drawEvenLines(paper);
                this.xOne = 144;
                this.xTwo = 69
                let y0 = this.y[0] + 129;
                let y1 = this.y[1] + 129;
                let y2 = this.y[2] + 129
                this.y = [y0, y1, y2];
            } else {
                this.drawOddLines(paper)
                this.xOne = 69;
                this.xTwo = 144;
                let y0 = this.y[0] + 129;
                let y1 = this.y[1] + 129;
                let y2 = this.y[2] + 129
                this.y = [y0, y1, y2];
            }
        }

        this.drawMapObjects(paper);
    }

    private NGon(x, y, N, side) {
        var path = "", n, temp_x, temp_y, angle;

        for (n = 0; n <= N; n += 1) {
            // the angle (in radians) as an nth fraction of the whole circle
            angle = n / N * 2 * Math.PI;

            // The starting x value of the point adjusted by the angle
            temp_x = x + Math.cos(angle) * side;
            // The starting y value of the point adjusted by the angle
            temp_y = y + Math.sin(angle) * side;

            // Start with "M" if it's the first point, otherwise L
            path += (n === 0 ? "M" : "L") + temp_x + "," + temp_y;
        }
        return path;
    }

    private drawOddLines(paper) {
        while (this.xOne <= 1106) {
            this.drawLine(paper);

            this.yIndex = 0;
            this.xOne += 150;
            this.xTwo += 150
        }
    }

    private drawEvenLines(paper) {

        while (this.xTwo <= 1106) {
            this.drawLine(paper);
            this.yIndex = 0;
            this.xOne += 150;
            this.xTwo += 150;
        }
    }

    private drawLine(paper) {
        let fill = '';
        let elText = '';
        fill = this.playerPath.filter(e => e.x === this.xOne && e.y === this.y[this.yIndex]).length > 0 ? 'stone' : 'url(../../assets/img/grass.png)'
        if (this.blackHoles.filter(e => e.x === this.xOne && e.y === this.y[this.yIndex]).length > 0) {
            // fill = '#EF3D39';
        }


        this.yIndex = 0;
        if (fill === 'stone') {
            // paper.path(this.NGon(this.xOne, this.y[this.yIndex], 6, 50)).attr({
            //     // fill: 'url(../../assets/img/grass.png)',
            //     stroke: '#000000',
            //     // text: elText,
            //     'stroke-width': '0',
            //     'stroke-opacity': '0',
            // });
            this.drawStone(this.xOne,paper);

        } else {
            // paper.path(this.NGon(this.xOne, this.y[this.yIndex], 6, 50)).attr({
            //     // fill: fill,
            //     stroke: '#000000',
            //     'stroke-width': '0',
            //     'stroke-opacity': '0'
            // });
        }


        // elText = this.paper.text(this.xOne, this.y[this.yIndex], this.xOne + ':' + this.y[this.yIndex]).attr({ opacity: 2, 'font-size': 12 }).toFront();;
        // elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


        this.yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = this.playerPath.filter(e => e.x === this.xTwo && e.y === this.y[this.yIndex]).length > 0 ? 'stone' : 'url(../../assets/img/grass.png)'
            if (this.blackHoles.filter(e => e.x === this.xTwo && e.y === this.y[this.yIndex]).length > 0) {
                // fill = '#EF3D39';
            }
            if (fill === 'stone') {
                // paper.path(this.NGon(this.xTwo, this.y[this.yIndex], 6, 50)).attr({
                //     // fill: 'url(../../assets/img/grass.png)',
                //     stroke: '#000000',
                //     // text: elText,
                //     'stroke-width': '0',
                //     'stroke-opacity': '0'
                // });
                this.drawStone(this.xTwo,paper);

            } else {
                // paper.path(this.NGon(this.xTwo, this.y[this.yIndex], 6, 50)).attr({
                //     // fill: fill,
                //     stroke: '#000000',
                //     'stroke-width': '0',
                //     'stroke-opacity': '0'
                // });
            }

            // elText = this.paper.text(this.xTwo, this.y[this.yIndex], this.xTwo + ':' + this.y[this.yIndex]).attr({ opacity: 2, 'font-size': 12 }).toFront();


            this.yIndex = 2;
        }


    }

    private drawStone(x,paper) {
        paper.image("../../assets/img/stone-path.png", x - 50, this.y[this.yIndex] - 50, 100, 100);
    }

    private getMapObjects(): Array<Object> {
        //http request for array with objects for trees, ala bala kvoto ima
        let objects = [
            // {
            //     image: 'trees2.png',
            //     x: 135,
            //     y: 229,
            //     width: 300,
            //     height: 300
            // }, {
            //     image: 'bridge.png',
            //     x: 200,
            //     y: 1050,
            //     width: 270,
            //     height: 270
            // }
        ];

        return objects;
    }

    private drawMapObjects(paper) {
        for (const object of this.mapObjects) {
          paper.image("../../assets/img/map-objects/" + object.image, object.x, object.y, object.width, object.height);
        }
    }
}
