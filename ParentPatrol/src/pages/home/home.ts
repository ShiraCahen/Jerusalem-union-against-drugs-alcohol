import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { ContactPage } from '../contact/contact';
import { MoadonitPage } from '../moadonit/moadonit';
<<<<<<< HEAD
import {ColdPage } from '../cold/cold';
=======
import { ColdPage } from '../cold/cold';

>>>>>>> 4bb2f060b2111fe7ce0dc2bd425aed98751ab50d
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addUser = AddUserPage;
  contact = ContactPage;
  moadonit = MoadonitPage;
  cold = ColdPage;
<<<<<<< HEAD
  
=======
>>>>>>> 4bb2f060b2111fe7ce0dc2bd425aed98751ab50d
  browserSize;
  constructor(public navCtrl: NavController,public platform: Platform) {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
    else{
      this.browserSize = "mobile-card"
    }
  }

}
