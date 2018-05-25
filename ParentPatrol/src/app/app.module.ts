import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from "angularfire2"
import { AngularFireDatabaseModule } from "angularfire2/database"
import { AngularFireStorageModule } from "angularfire2/storage"

import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ColdPage } from '../pages/cold/cold';
import { AngularFireAuthModule } from "angularfire2/auth";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailComposer } from '@ionic-native/email-composer';
import { AddUserPageModule } from '../pages/add-user/add-user.module';
import { ReproviderProvider } from '../providers/reprovider/reprovider';
import { DataProvider } from '../providers/data/data';
import { LoginPageModule } from '../pages/login/login.module';
import { MoadonitPageModule } from '../pages/moadonit/moadonit.module';
import { Pedometer } from '@ionic-native/pedometer';
import { SettingsProvider } from '../providers/settings/settings';
import { SettingsPage } from '../pages/settings/settings';
import { CounterPage } from '../pages/counter/counter';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ColdPage,
    SettingsPage,
    CounterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AddUserPageModule,
    LoginPageModule,
    MoadonitPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ColdPage,
    SettingsPage,
    CounterPage,
  ],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReproviderProvider,
    DataProvider,
<<<<<<< HEAD
    DataProvider
=======
    Pedometer,
    SettingsProvider
>>>>>>> ba327bc35aa1a15e9476ddf1907a3be3cb22f19c
  ]
})
export class AppModule {}