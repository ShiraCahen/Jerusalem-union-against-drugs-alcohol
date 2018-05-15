import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController, Platform} from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user1 = {} as User;
  @ViewChild('user') user;
  @ViewChild('password') password;
  //home= HomePage;
  browserSize;

  constructor(public navCtrl: NavController, public navParams: NavParams , public platform: Platform, private afAuth: AngularFireAuth, private alertCtrl: AlertController,private toastCtrl: ToastController) {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
<<<<<<< HEAD
    else{
=======
    else {
>>>>>>> 1bd89b835a26bfdb5acd8e5310c0a4e9b76e3b63
      this.browserSize = "mobile-card"
    }
  }

  async login(user1: User){
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