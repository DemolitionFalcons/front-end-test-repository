import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { HomeComponent } from './components/home/home.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';


const routes: Routes = [
    { path: '', redirectTo: 'startGame', pathMatch: 'full' },
    { path: 'startGame', component: StartScreenComponent },
    { path: 'home', component: HomeComponent },
    {path: 'ChooseHero', component: HeroesListComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }

