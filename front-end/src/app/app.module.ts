import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    RegistrationComponent,
    PlayerCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
