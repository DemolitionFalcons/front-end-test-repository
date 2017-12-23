import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
