import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { MoadonitPage } from '../moadonit/moadonit';
import { ColdPage } from '../cold/cold';
import { Profile } from '../../models/profile';
import {AboutPage} from '../about/about'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database"
import { AngularFireAuth } from "angularfire2/auth"/* */
import { DetailPage } from '../detail/detail';
import {CounterPage} from '../counter/counter';
import { Pedometer } from '@ionic-native/pedometer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addUser = AddUserPage;
  moadonit = MoadonitPage;
  counter = CounterPage;
  about=AboutPage;
  userKind: string;
  profileData:  any;
  detail = DetailPage;
  browserSize;
  isCordova;

  constructor(public navCtrl: NavController,public platform: Platform,private afDatabase : AngularFireDatabase, private afAuth: AngularFireAuth) {
    if(this.afAuth.auth.currentUser){
      this.profileData = this.afDatabase.object('/profile/' + this.afAuth.auth.currentUser.uid).valueChanges();
      this.profileData.subscribe(user=>{
        this.userKind = user.kind
        console.log(user.kind)
      })

      if(this.platform.is('core')){ 
        //if it's from computer web browser, not a mobile web/native.
        this.browserSize = "desktop-card"
      }
      else{
        this.browserSize = "mobile-card"
      }
      if(this.platform.is('cordova')){ 
        this.isCordova = 1
      }
    }
  }
    
  changePage(){
    this.navCtrl.setRoot(CounterPage);
  }


  exitApp(){
  //  ionic.Platform.exitApp();
  
  }


}
