import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"


@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  user = {} as User;
  home = HomePage;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, 
    private afAuth: AngularFireAuth) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'הוספת משתמש',
      subTitle: 'המשתמש הוסף בהצלחה',
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  async register(user: User){
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(
        () => { this.presentAlert() }).catch((error) => this.displayErrorAlert(error)
      )
 }

 displayErrorAlert(error){
        var errorMessage: string = error.message;
        let alert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
  }
}



