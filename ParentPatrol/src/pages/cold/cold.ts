import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cold',
  templateUrl: 'cold.html',
})
export class ColdPage {
  data = DataProvider;
  selected= [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
  checked : boolean = false;
  team: String ="";
  myDate: String ="";
  startTime: String ="";
  teamNumber: Number = 0;
  notes: String ="";
  

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, private dataProvider:DataProvider,private alertCtrl: AlertController,private db:AngularFireDatabase) {

  }
   
  ionViewDidLoad(){
    this.postsProvider.load();
  }
  updateState(i) {
    console.log('Cucumbers new state:' + this.selected[i] +" "+i);
  }

  storeInfoToDatabase(){
    let toSave= {
      Team: this.team,
      MyDate: this.myDate,
      StartTime: this.startTime,
      TeamNumbe: this.teamNumber,
      Notes: this.notes,
      One: this.selected[0],
      Two: this.selected[1],
      Three: this.selected[2],
      Four: this.selected[3],
      Five: this.selected[4],
      Six: this.selected[5],
      Seven: this.selected[6],
      Eight: this.selected[7],
      Nine: this.selected[8],
      Ten: this.selected[9],
      Eleven: this.selected[10],
      Twelve: this.selected[11],
      Thirteen: this.selected[12],
      Fourteen: this.selected[13],
      Fifteen: this.selected[14],
      Sixteen: this.selected[15],
      Seventeen: this.selected[16],
      Eighteen: this.selected[17],
      Nineteen:this.selected[18],
      Twenty: this.selected[19],
      TwentyOne: this.selected[20],
      TwentyTwo: this.selected[21],
      TwentyThree: this.selected[22],
      TwentyFour: this.selected[23],
      TwentyFive: this.selected[24],
      TwentySix: this.selected[25],


    }
    this.presentAlert();
    return this.db.list('coldPoint').push(toSave);
}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'דוח נקודה קרה',
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
