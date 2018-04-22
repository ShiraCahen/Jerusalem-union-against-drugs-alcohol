import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { HeaderComponent } from './admin-screen/header/header.component';
import { TeamScreenComponent } from './team-screen/team-screen.component';
import { CoordinetorScreenComponent } from './coordinetor-screen/coordinetor-screen.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminScreenComponent,
    HeaderComponent,
    TeamScreenComponent,
    CoordinetorScreenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
