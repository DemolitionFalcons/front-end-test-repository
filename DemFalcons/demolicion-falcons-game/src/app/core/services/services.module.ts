import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StartScreenService } from './start-screen.service';
import { NavBarService } from "./nav-bar.service";
import { MapService } from './game-services/map.service';
import { PlayerService } from './game-services/player.service';
import { CreateGameService } from "./game-services/create-game.service";


@NgModule({
    providers: [
        StartScreenService,
        NavBarService,
        MapService,
        PlayerService,
        CreateGameService
    ],
    imports: [
        CommonModule
    ]
})
export class ServiceModule { }

