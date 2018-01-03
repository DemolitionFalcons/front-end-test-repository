import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { HomeComponent } from './components/home/home.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { GameComponent } from './components/game/gameplay/game.component';
import { CreateGameComponent } from './components/game/create-game/create-game.component';
import { CreateSinglePlayerComponent } from './components/game/create-single-player/create-single-player.component';



const routes: Routes = [
    { path: '', redirectTo: 'startGame', pathMatch: 'full' },
    { path: 'startGame', component: StartScreenComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ChooseHero', component: HeroesListComponent },
    { path: 'play', component: GameComponent },
    {path: 'createGame', component: CreateGameComponent},
    {path: 'createSinglePlayer', component: CreateSinglePlayerComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }

