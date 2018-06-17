import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';


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
  kind: string="moadonit";
  currentImage =null;

  constructor(private storage: Storage,public navCtrl: NavController, private alertCtrl: AlertController, private db:AngularFirestore,public emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoadonitPage');
  }

  captureImage(){}

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
  this.msg = "דוח מועדונית  "+this.team+ "<br/>תאריך : "+this.myDate+"<br/> המועדון פעל מהשעה- " +this.startTime+
  "<br/> עד-"+this.endTime+"<br/> שמות המתנדבים :"+this.volenteersName+"<br/>מספר הנערים שהגיעו "+this.numOfYoungsters
  + "<br/> במידה והייתה היתקלות עם אלכוהול וסמים - כמה? " + this.alcoholOrDrugs
  + "<br/> אירועים חריגים: " + this.exeptions + "<br/> פרטי הנער או הנערה: "+this.youngsterName
  + "<br/> דרכי טיפול: " + this.handle + "<br/> הערות: " + this.notes+"<br/><br/>";
  let email = {
    to: 'parentspatroljer@gmail.com',
    cc: '',
    attachments: [
      this.currentImage
    ],
    subject: 'Moadonit',
    body: this.msg+ '' ,
    isHtml: true
  };

  this.emailComposer.open(email);
}

  storeInfoToDatabase(){
    if(this.myDate==undefined || this.myDate==""|| this.team==undefined || this.team==""){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'נא למלא תאריך וסיירת',
        buttons: ['אישור']
      });
      alert.present();
      return
    }
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
        Kind:this.kind
    }

    this.storage.get('mail').then((val) =>{
      if(val != null){
        this.msg+=val;         
      }
      else{
      console.log(" nul"+ this.msg);
      }
      this.sendEmail();
     
      this.storage.set('mail',this.msg);
       this.presentAlert();
       return this.db.collection('Reports').add(toSave);
    });
  
}

}
