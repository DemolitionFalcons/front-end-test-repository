import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()

export class NavBarService {
    visible: boolean;

    constructor(private router: Router) {
        this.visible = true;
    }

    show() {
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
    toggle() {
        this.visible = !this.visible;
    }
}
