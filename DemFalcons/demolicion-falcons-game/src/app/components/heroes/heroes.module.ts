import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './hero-card/heroe-card.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
    declarations: [
        HeroeCardComponent,
        HeroesListComponent
    ],
    imports: [
        CommonModule,

    ],
    exports: [
        HeroeCardComponent,
        HeroesListComponent
    ]
})

export class HeroesModule { }
