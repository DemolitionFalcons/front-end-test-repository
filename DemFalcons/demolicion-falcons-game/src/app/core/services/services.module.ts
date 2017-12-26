import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StartScreenService } from './start-screen.service';

@NgModule({
    providers: [
        StartScreenService
    ],
    imports: [
        CommonModule
    ]
})
export class ServiceModule { }

