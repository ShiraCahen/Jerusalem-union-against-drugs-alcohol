import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { AngularFireModule } from "angularfire2"
import { AngularFireDatabaseModule } from "angularfire2/database"
import { AngularFireStorageModule } from "angularfire2/storage"
import { AngularFirestoreModule } from "angularfire2/firestore"
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ColdPage } from '../pages/cold/cold';
import { DetailPage } from '../pages/detail/detail';
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
import { LocationsProvider } from '../providers/locations/locations';
import {LocationsPage} from '../pages/locations/locations';
import {AddAreasPage} from '../pages/add-areas/add-areas';
import {DelAreasPage} from '../pages/del-areas/del-areas';
import { isMoment } from 'moment';
import { Storage } from '@ionic/storage';
<<<<<<< HEAD
import { NativeStorage } from '@ionic-native/native-storage';
=======
import firebase from 'firebase/app'
>>>>>>> 6b7f52a03b98b5929ce985734f05c3da498b3b32
//import { Clipboard } from '@ionic-native/clipboard';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ColdPage,
    SettingsPage,
   CounterPage,
   DetailPage,
   LocationsPage,
   AddAreasPage,
   DelAreasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AddUserPageModule,
    LoginPageModule,
    MoadonitPageModule,
    IonicStorageModule.forRoot()

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
   DetailPage,
   LocationsPage,
   AddAreasPage,
   DelAreasPage,
  ],
  providers: [
    StatusBar,
    EmailComposer,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReproviderProvider,
    DataProvider,
    Pedometer,    
    SettingsProvider,
    NativeStorage,
    LocationsProvider,
  ]
})
export class AppModule {}