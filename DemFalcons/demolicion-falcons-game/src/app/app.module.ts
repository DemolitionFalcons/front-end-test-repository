import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './core/services/services.module';


//Components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StartScreenComponent,
    LoginFormComponent,
    HomeComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
