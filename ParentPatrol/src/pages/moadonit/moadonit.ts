import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-moadonit',
  templateUrl: 'moadonit.html',
})
export class MoadonitPage {
  data = DataProvider;
  myDate: String ="";
  startTime: String ="";
  endTime: String ="";
  teamNumber: Number = 0;
  volenteersName: String ="";
  numOfYoungsters: Number=0;
  averageAge: string="";
  alcoholOrDrugs: String ="";
  exeptions: String ="";
  youngsterName: String ="";
  dilemmas: String ="";
  handle: string ="";
  notes: String ="";
  msg: String;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private db:AngularFireDatabase,public emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoadonitPage');
  }

  storeInfoToDatabase(){
    let toSave= {
        MyDate: this.myDate,
        StartTime: this.startTime,
        EndTime: this.endTime,
        TeamNumbe: this.teamNumber,
        VolenteersName: this.volenteersName,
        NumOfYoungsters: this.numOfYoungsters,
        AverageAge: this.averageAge,
        AlcoholOrDrugs: this.alcoholOrDrugs,
        Exeptions: this.exeptions,
        YoungsterName: this.youngsterName,
        Handle: this.handle,
        Notes: this.notes,
        Dilemmas: this.dilemmas

    }
    this.presentAlert();
    return this.db.list('Moadonit:').push(toSave);
}




  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'דוח מועדונית',
      subTitle: 'נשלח בהצלחה',
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

  
sendEmail() {
  this.msg = "דוח נקודה חמה \r\n צוות: " + " \r\n שמות המתנדבים: " + this.volenteersName
  + "\r\n תאריך: " + this.myDate + "\r\n מיקום: "+ "\r\n תיאור כללי: " 
  + "\r\n במידה והייתה היתקלות עם אלכוהול וסמים - כמה? " + this.alcoholOrDrugs
  + "\r\n אירועים חריגים: " + this.exeptions + "\r\n פרטי הנער או הנערה: "
  + "\r\n דרכי טיפול: " + this.handle + "\r\n הערות: " + this.notes;
  let email = {
    to: 'parentspatroljer@gmail.com',
    cc: '',
    attachments: [
      //this.currentImage
    ],
    subject: 'Test',
    body: this.msg+ '' ,
    isHtml: true
  };

  this.emailComposer.open(email);
}
}
