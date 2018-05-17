import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController, Platform} from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"
import { isEmpty } from 'rxjs/operator/isEmpty';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user1 = {} as User;
  @ViewChild('user') user;
  @ViewChild('password') password;
  home = HomePage;//כניסה זמנית
  browserSize;

  constructor(public navCtrl: NavController, public navParams: NavParams , public platform: Platform, private afAuth: AngularFireAuth, private alertCtrl: AlertController,private toastCtrl: ToastController) {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
    else{
      this.browserSize = "mobile-card"
    }
  }

  async login(user1: User){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(user1.email==undefined || user1.password==undefined || !re.test(user1.email) && user1.password==undefined ){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'נא להזין שם משתמש וסיסמה תקינים',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
      await this.afAuth.auth.signInWithEmailAndPassword(user1.email, user1.password)
      .then(
        () => { this.presentAlert() }).catch((error) => this.displayErrorAlert(error)
      )
    }
  
  presentAlert() {
    /*let toast = this.toastCtrl.create({
      message: 'Wellcome to our app :)',
      duration: 3000,
      position: 'top'
    });
    toast.present();*/
    this.navCtrl.push(HomePage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn() {
  }

}