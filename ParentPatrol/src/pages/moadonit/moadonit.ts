import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFirestore } from 'angularfire2/firestore';


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
  team:String ="";
  currentImage =null;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private db:AngularFirestore,public emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoadonitPage');
  }

  storeInfoToDatabase(){
    let toSave= {
      Team: this.team,
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
        Dilemmas: this.dilemmas,
    }

    this.presentAlert();
    
    return this.db.collection('Moadonit').add(toSave);
  
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
  this.msg = "דוח מועדונית  "+this.team+ "\r\nתאריך : "+this.myDate+"\r\n המועדון פעל מהשעה- " +this.startTime+
  "\r\n עד-"+this.endTime+"\r\nשמות המתנדבים :"+this.volenteersName+"\r\nמספר הנערים שהגיעו "+this.numOfYoungsters
  + "\r\n במידה והייתה היתקלות עם אלכוהול וסמים - כמה? " + this.alcoholOrDrugs
  + "\r\n אירועים חריגים: " + this.exeptions + "\r\n פרטי הנער או הנערה: "+this.youngsterName
  + "\r\n דרכי טיפול: " + this.handle + "\r\n הערות: " + this.notes+"\r\n\r\n";
  let email = {
    to: 'parentspatroljer@gmail.com',
    cc: '',
    attachments: [
      this.currentImage
    ],
    subject: 'Test',
    body: this.msg+ '' ,
    isHtml: true
  };

  this.emailComposer.open(email);
}
}
