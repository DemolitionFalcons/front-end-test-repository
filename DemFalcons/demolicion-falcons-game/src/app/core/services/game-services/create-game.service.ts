import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()

export class CreateGameService {
    private gameObjectSource = new BehaviorSubject<any>({});
    public gameObgectRecieved$ = this.gameObjectSource.asObservable();
    constructor(private router: Router) { }

    createGamePost(gameModel): void {
        //http request POST пращаме модела, по който създаваме игра
        console.log(gameModel);
    }

    updateGameObject(data){
        this.gameObjectSource.next(data);
    }
}
