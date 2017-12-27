import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StartScreenService } from './start-screen.service';
import { NavBarService } from "./nav-bar.service";

@NgModule({
    providers: [
        StartScreenService,
        NavBarService
    ],
    imports: [
        CommonModule
    ]
})
export class ServiceModule { }

