import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from "angularfire2"
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
=======
import { TabsPage } from '../pages/tabs/tabs';
import { ColdPage } from '../pages/cold/cold';
>>>>>>> 9c382df44ae0c36ce5450cfffbad789138a83242
import { AngularFireAuthModule } from "angularfire2/auth";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
=======
import { EmailComposer } from '@ionic-native/email-composer';

>>>>>>> 9c382df44ae0c36ce5450cfffbad789138a83242
import { AddUserPageModule } from '../pages/add-user/add-user.module';
import { ReproviderProvider } from '../providers/reprovider/reprovider';
import { LoginPageModule } from '../pages/login/login.module';
import { MoadonitPageModule } from '../pages/moadonit/moadonit.module';
import { ColdPage } from '../pages/cold/cold';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
    ColdPage,
=======
    TabsPage,
    ColdPage,
   
>>>>>>> 9c382df44ae0c36ce5450cfffbad789138a83242
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AddUserPageModule,
    LoginPageModule,
    MoadonitPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
<<<<<<< HEAD
    HomePage, 
    ColdPage
=======
    HomePage,
    TabsPage,
    ColdPage,

>>>>>>> 9c382df44ae0c36ce5450cfffbad789138a83242
  ],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReproviderProvider
  ]
})
export class AppModule {}