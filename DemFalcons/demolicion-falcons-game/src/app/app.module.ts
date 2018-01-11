import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './core/services/services.module';
import { HeroesModule } from './components/heroes/heroes.module';


//Components
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/gameplay/game.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CreateGameComponent } from './components/game/create-game/create-game.component';
import { CreateSinglePlayerComponent } from './components/game/create-single-player/create-single-player.component';
import { PreGameComponent } from './components/game/pre-game/pre-game.component';




import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartScreenComponent,
    LoginFormComponent,
    HomeComponent,
    RegisterFormComponent,
    HeaderComponent,
    CreateGameComponent,
    CreateSinglePlayerComponent,
    PreGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ServiceModule,
    HeroesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
