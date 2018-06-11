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
import { IonicPage,LoadingController  } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'

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
  volenteersName:String="";
  str:string;
  rates:string;
  browserSize;
  keys: any[] = []
  x=0;
  dataObj: Object;
  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, private lp:LocationsProvider,
               private dataProvider:DataProvider,private alertCtrl: AlertController,private loading:LoadingController,
              private db:AngularFireDatabase, public platform: Platform,public emailComposer:EmailComposer) {

      if(this.platform.is('core')){ 
        this.browserSize = "desktop-card"
      }
      else{
        this.browserSize = "mobile-card"
      }
      this.postsProvider.load();
      let load = this.loading.create();
      load.present()
      this.lp.getNList().then(res => {
        this.keys = res;
        load.dismiss()
      }).catch(err => {
        load.dismiss()
      })
      if(this.lp.objData!==undefined){
        this.x=1;
        
      }
      //console.log(this.lp.objData)
}

  ionViewDidLoad() {

  }

  updateState(i) {
    console.log('Cucumbers new state:' + this.selected[i] +" "+i);
  }

 hotClicked() {
 
  if(this.x==1){
    this.dataObj=this.lp.objData;
  }
 
  console.log(this.dataObj)
  this.navCtrl.push(ContactPage,this.dataObj);
 }
coldClicked() {
 
  if(this.x==1){
    this.dataObj=this.lp.objData;
  }


  this.navCtrl.push(ColdPage,this.dataObj);
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

rem(){
  if(this.checking()==1)
    return;
  this.dataObj={
    data: this.rates,
    myDate: this.myDate,
    startTime: this.startTime,
    endTime:this.endTime,
    teamNumber:this.teamNumber,
    volenteersName:this.volenteersName
  }
  this.x=1;
  this.lp.saveData(this.dataObj);
}

delrem(){
  this.x=0;
}

checking(){
  if( this.rates==undefined||this.myDate==undefined||this.teamNumber==undefined||this.volenteersName==undefined){
    let alert = this.alertCtrl.create({
      title: 'שגיאה',
      subTitle: 'נא למלא את כל הפרטים המסומנים בכוכבית',
      buttons: ['אישור']
    });
    alert.present();
    return 1;
  }

}

}
