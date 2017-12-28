import { Component, OnInit } from '@angular/core';
import * as Raphael from 'raphael/raphael.js';
import { MapService } from '../../core/services/game-services/map.service';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public paper;

  constructor(
    private mapService: MapService
  ) {
   this.paper = Raphael('map',0, 1500, 2000);    
   this.setVisibleProperty();
  }

  ngOnInit() {
    this.mapService.drawMap(this.paper);
  }

  private setVisibleProperty(){
    Raphael.el.isVisible = function () {
      return (this.node.style.display !== "none");
    }
  }

}


