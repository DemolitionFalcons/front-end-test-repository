import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StartScreenService } from './start-screen.service';
import { NavBarService } from "./nav-bar.service";
import { MapService } from './game-services/map.service';
import { PlayerService } from './game-services/player.service';


@NgModule({
    providers: [
        StartScreenService,
        NavBarService,
        MapService,
        PlayerService
    ],
    imports: [
        CommonModule
    ]
})
export class ServiceModule { }

