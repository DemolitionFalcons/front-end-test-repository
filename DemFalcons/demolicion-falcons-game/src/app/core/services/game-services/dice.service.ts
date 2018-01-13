import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Raphael from 'raphael/raphael.js';
import { PlayerService } from './player.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DiceService {

    private isDiceRolledSource = new BehaviorSubject<any>({});
    public isDiceRolledRecieved$ = this.isDiceRolledSource.asObservable();

    constructor() { }


    setIsDiceRolled(bool) {
        this.isDiceRolledSource.next(bool);
    }
}