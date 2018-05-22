import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';


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

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private db:AngularFireDatabase) {
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

}
