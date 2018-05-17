import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { ContactPage } from '../contact/contact';
import { MoadonitPage } from '../moadonit/moadonit';
import { ColdPage } from '../cold/cold';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addUser = AddUserPage;
  contact = ContactPage;
  moadonit = MoadonitPage;
  cold = ColdPage;
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
