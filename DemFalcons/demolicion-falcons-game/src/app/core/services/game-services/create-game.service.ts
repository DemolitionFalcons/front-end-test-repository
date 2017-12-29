import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()

export class CreateGameService {

    constructor(private router: Router) { }

    createGamePost(gameModel): void {
        //http request POST пращаме модела, по който създаваме игра
        console.log(gameModel);
    }
}
