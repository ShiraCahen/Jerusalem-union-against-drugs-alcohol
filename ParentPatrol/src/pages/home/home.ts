import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { ContactPage } from '../contact/contact';
import { MoadonitPage } from '../moadonit/moadonit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addUser = AddUserPage;
  contact = ContactPage;
  moadonit = MoadonitPage;

  constructor(public navCtrl: NavController) {
      
  }

}
