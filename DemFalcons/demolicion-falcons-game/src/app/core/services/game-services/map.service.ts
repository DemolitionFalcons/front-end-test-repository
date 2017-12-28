import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';

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
    private paper;

    constructor() {
        this.stoneIndex = 0;
        this.mapObjects = this.getMapObjects();
        this.playerPath = this.getPlayerPath();
        this.xOne = 69;
        this.xTwo = 144
        this.y = [186, 143, 229]
        this.yIndex = 0;
    }

    drawMap(paper): void {
        this.paper = paper;
        for (let row = 0; row < 12; row++) {
            if (row % 2 == 0) {
                this.drawEvenLines();
                this.xOne = 144;
                this.xTwo = 69
                let y0 = this.y[0] + 129;
                let y1 = this.y[1] + 129;
                let y2 = this.y[2] + 129
                this.y = [y0, y1, y2];
            } else {
                this.drawOddLines()
                this.xOne = 69;
                this.xTwo = 144;
                let y0 = this.y[0] + 129;
                let y1 = this.y[1] + 129;
                let y2 = this.y[2] + 129
                this.y = [y0, y1, y2];
            }

        }

        this.drawMapObjects();
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

    private getPlayerPath(): Array<Object> {
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

    private drawOddLines() {
        while (this.xOne <= 1106) {
            this.drawLine();

            this.yIndex = 0;
            this.xOne += 150;
            this.xTwo += 150
        }
    }

    private drawEvenLines() {

        while (this.xTwo <= 1106) {
            this.drawLine();
            this.yIndex = 0;
            this.xOne += 150;
            this.xTwo += 150;
        }
    }

    private drawLine() {
        let fill = '';
        let elText = '';
        fill = this.playerPath.filter(e => e.x === this.xOne && e.y === this.y[this.yIndex]).length > 0 ? 'stone' : 'url(../../assets/img/grass.png)'
        if (this.blackHoles.filter(e => e.x === this.xOne && e.y === this.y[this.yIndex]).length > 0) {
            fill = '#EF3D39';
        }


        this.yIndex = 0;
        if (fill === 'stone') {
            this.paper.path(this.NGon(this.xOne, this.y[this.yIndex], 6, 50)).attr({
                fill: 'url(../../assets/img/grass.png)',
                stroke: '#000000',
                text: elText,
                'stroke-width': '0',
                'stroke-opacity': '0'
            });
            this.drawStone(this.xOne);

        } else {
            this.paper.path(this.NGon(this.xOne, this.y[this.yIndex], 6, 50)).attr({
                fill: fill,
                stroke: '#000000',
                'stroke-width': '0',
                'stroke-opacity': '0'
            });
        }


        elText = this.paper.text(this.xOne, this.y[this.yIndex], this.xOne + ':' + this.y[this.yIndex]).attr({ opacity: 2, 'font-size': 12 }).toFront();;
        // elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


        this.yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = this.playerPath.filter(e => e.x === this.xTwo && e.y === this.y[this.yIndex]).length > 0 ? 'stone' : 'url(../../assets/img/grass.png)'
            if (this.blackHoles.filter(e => e.x === this.xTwo && e.y === this.y[this.yIndex]).length > 0) {
                fill = '#EF3D39';
            }
            if (fill === 'stone') {
                this.paper.path(this.NGon(this.xTwo, this.y[this.yIndex], 6, 50)).attr({
                    fill: 'url(../../assets/img/grass.png)',
                    stroke: '#000000',
                    text: elText,
                    'stroke-width': '0',
                    'stroke-opacity': '0'
                });
                this.drawStone(this.xTwo);

            } else {
                this.paper.path(this.NGon(this.xTwo, this.y[this.yIndex], 6, 50)).attr({
                    fill: fill,
                    stroke: '#000000',
                    'stroke-width': '0',
                    'stroke-opacity': '0'
                });
            }

            elText = this.paper.text(this.xTwo, this.y[this.yIndex], this.xTwo + ':' + this.y[this.yIndex]).attr({ opacity: 2, 'font-size': 12 }).toFront();


            this.yIndex = 2;
        }


    }

    private drawStone(x) {
        this.paper.image("../../assets/img/stone-path.png", x - 50, this.y[this.yIndex] - 50, 100, 100);
    }

    private getMapObjects(): Array<Object> {
        //http request for array with objects for trees, ala bala kvoto ima
        let objects = [{
            image: 'trees2.png',
            x: 135,
            y: 229,
            width: 300,
            height: 300
        },{
            image: 'bridge.png',
            x: 200,
            y: 1050,
            width: 270,
            height: 270
        }
        ];

        return objects;
    }

    private drawMapObjects(){
        for (const object of this.mapObjects) {
            this.paper.image("../../assets/img/map-objects/" + object.image, object.x, object.y, object.width, object.height);
        }
    }
}
