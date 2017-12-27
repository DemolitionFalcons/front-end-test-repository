import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StartScreenService {

    registerFormShow: boolean;
    constructor() {
        this.registerFormShow = false;
    }

    goToRegisterForm() {

    }
}
