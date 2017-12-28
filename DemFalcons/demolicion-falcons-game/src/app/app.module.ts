import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './core/services/services.module';
import { HeroesModule } from './components/heroes/heroes.module';


//Components
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HeaderComponent } from './components/shared/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartScreenComponent,
    LoginFormComponent,
    HomeComponent,
    RegisterFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ServiceModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
