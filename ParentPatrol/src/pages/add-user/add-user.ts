import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from "angularfire2/auth"
import { AngularFireDatabase } from "angularfire2/database"


@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  user = {} as User;
  profile = {} as Profile;
  home = HomePage;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, 
    private afAuth: AngularFireAuth, private afDatabase : AngularFireDatabase) {
      
  }

  presentAlert() {
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile);
    })
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
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(user.email==undefined || user.password==undefined || !re.test(user.email)){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'נא להזין אימייל תקין וסיסמה',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    if(this.profile.kind==undefined ){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'נא לבחור את סוג המשתמש',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
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




