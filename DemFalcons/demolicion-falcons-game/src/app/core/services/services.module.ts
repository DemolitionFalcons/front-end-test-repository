import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { StartScreenService } from './start-screen.service';
import { NavBarService } from "./nav-bar.service";
import { MapService } from './game-services/map.service';
import { PlayerService } from './game-services/player.service';
import { CreateGameService } from "./game-services/create-game.service";
import { RemoteService } from './remote.service';
import { GameInitInfoService } from './game-services/game-init-info.service';
import { DiceService } from './game-services/dice.service';



@NgModule({
    providers: [
        StartScreenService,
        NavBarService,
        MapService,
        PlayerService,
        CreateGameService,
        RemoteService,
        GameInitInfoService,
        DiceService,
    ],
    imports: [
        CommonModule
    ]
})
export class ServiceModule { }

