import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { MoadonitPage } from '../moadonit/moadonit';
import {AboutPage} from '../about/about';
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
  detail = DetailPage;
  browserSize;
  isCordova;

  constructor(public navCtrl: NavController,public platform: Platform) {
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


  changePage(){
    this.navCtrl.setRoot(CounterPage);
  }


}
