import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  home = HomePage;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Add User',
      subTitle: 'User successfully added',
      buttons: ['OK']
    });
    alert.present();
  }

}
