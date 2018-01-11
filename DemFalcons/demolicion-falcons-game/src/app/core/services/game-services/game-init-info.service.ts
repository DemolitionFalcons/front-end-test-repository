import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GameInitInfoService {

    private gameInitialInfoSource = new BehaviorSubject<any>({});
    public gameInitialInfoRecieved$ = this.gameInitialInfoSource.asObservable();


    constructor(
    ) { }

    updateGameInitialInfot(data){
        this.gameInitialInfoSource.next(data);
    }

}


