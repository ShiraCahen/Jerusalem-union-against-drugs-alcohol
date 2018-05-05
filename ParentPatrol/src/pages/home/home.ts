import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addUser = AddUserPage;
  constructor(public navCtrl: NavController) {
      
  }

}
