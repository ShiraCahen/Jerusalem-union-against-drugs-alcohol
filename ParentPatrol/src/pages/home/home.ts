import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { ContactPage } from '../contact/contact';
import { MoadonitPage } from '../moadonit/moadonit';
import { ColdPage } from '../cold/cold';
import {AboutPage} from '../about/about'
import {CounterPage} from '../counter/counter'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addUser = AddUserPage;
  contact = ContactPage;
  moadonit = MoadonitPage;
  counter = CounterPage;
  cold = ColdPage;
  about=AboutPage;
<<<<<<< HEAD
  browserSize;
  
=======
  isCordova:number =0 
>>>>>>> ba327bc35aa1a15e9476ddf1907a3be3cb22f19c
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

}
