import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController, Platform} from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from "angularfire2/auth"
import { isEmpty } from 'rxjs/operator/isEmpty';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database"
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user1 = {} as User;
 profile1 = {} as Profile;
  @ViewChild('user') user;
  @ViewChild('password') password;
  home = HomePage;//כניסה זמנית
  browserSize;

  profileDeta: AngularFireObject<Profile>


  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams , public platform: Platform, private afAuth: AngularFireAuth, private alertCtrl: AlertController,private toastCtrl: ToastController,private afDatabase : AngularFireDatabase) {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
    else{
      this.browserSize = "mobile-card"
    }
  }

  async login(user1: User){
    this.storage.set('mail',"");
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
    /*this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        let toast = this.toastCtrl.create({
        message: `Wellcome to our app ${data.email}`,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.profileDeta = this.afDatabase.object(`profile/${data.uid}`);
    }
    })*/
    
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