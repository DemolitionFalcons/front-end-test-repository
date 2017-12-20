import { Component, OnInit } from '@angular/core';
import * as Raphael from 'raphael/raphael.js';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public paper;

  constructor() { }

  ngOnInit() {


    this.paper = Raphael('map', 0, 0, 500, 500);

    this.paper.path(this.NGon(40, 40, 6, 30));
    this.paper.path(this.NGon(130, 60, 9, 40));
    this.paper.path(this.NGon(240, 160, 25, 80));
  }

  NGon(x, y, N, side) {
    // draw a dot at the center point for visual reference
    this.paper.circle(x, y, 3).attr("fill", "black");

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


}


