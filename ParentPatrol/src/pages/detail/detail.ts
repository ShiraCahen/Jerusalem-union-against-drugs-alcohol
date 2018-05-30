import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ColdPage } from '../cold/cold';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController,Platform  } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  contact = ContactPage;
  cold = ColdPage;
  data = DataProvider;
  selected= [false,false,false,false,false,false,false,false,false,false];
  checked : boolean = false;
  team: String ="";
  myDate: String ="";
  startTime: String ="";
  teamNumber: Number = 0;
  notes: String ="";
  endTime: String ="";
  volenteersNum: Number = 0;
  str:any;
  rates:any;
  browserSize;

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, 
               private dataProvider:DataProvider,private alertCtrl: AlertController,
              private db:AngularFireDatabase, public platform: Platform,public emailComposer:EmailComposer) {

      if(this.platform.is('core')){ 
        this.browserSize = "desktop-card"
      }
      else{
        this.browserSize = "mobile-card"
      }
}

  ionViewDidLoad() {
    this.postsProvider.load();
  }

  updateState(i) {
    console.log('Cucumbers new state:' + this.selected[i] +" "+i);
  }

 hotClicked() {
   this.str= this.rates;
  if(this.str==undefined){   
    this.str=this.postsProvider.posts[0].english;
  }
 
 this.navCtrl.push(ContactPage, {
    data: this.str
  });
 }
/*  storeInfoToDatabase(){
    let toSave= {
        Team: this.team,
        MyDate: this.myDate,
        StartTime: this.startTime,
        EndTime: this.endTime,
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
    }

    return this.db.list('details:').push(toSave);
}*/

sendEmail() {
  let email = {
    to: 'parentspatroljer@gmail.com',
    cc: '',
    attachments: [
      //this.currentImage
    ],
    subject: 'Test',
    body: 'testing',
    isHtml: true
  };

  this.emailComposer.open(email);
}



}
