import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'


import { environment } from '../../../environments/environment';

@Injectable()
export class RemoteService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    sendGameObject(gameObj): Observable<any> {
        return this.http.post<any>(environment.apiBaseUrl + `...`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: gameObj
        })
    }


    getHeroList(): Observable<any> {
        return this.http.get(
            "https://locallhost:53429/api/hero",
        );
    }

}


