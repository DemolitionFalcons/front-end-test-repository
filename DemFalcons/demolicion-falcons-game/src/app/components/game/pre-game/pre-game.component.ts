import { Component, OnInit } from '@angular/core';
import { GameInitInfoService } from '../../../core/services/game-services/game-init-info.service';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.css']
})
export class PreGameComponent implements OnInit {

  public gameInfo;

  constructor(
    private gameInitInfoService: GameInitInfoService
  ) {
    
    this.gameInitInfoService.gameInitialInfoRecieved$.subscribe(data => {
      this.gameInfo = data;
    })

   }

  ngOnInit() {
  }

}
