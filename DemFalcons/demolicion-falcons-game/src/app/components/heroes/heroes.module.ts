import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './hero-card/heroe-card.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeroeCardComponent,
        HeroesListComponent
    ],
    imports: [
        CommonModule,
        FormsModule

    ],
    exports: [
        HeroeCardComponent,
        HeroesListComponent
    ]
})

export class HeroesModule { }
