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
import {locationItem} from '../../models/locationItem.interface';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';


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
  mail:string;
  browserSize;
  keys: any[] = []
  x=0;
  dataObj: Object;
  currentImage =null;
  constructor(public navCtrl: NavController, 
              private storage:Storage,
              public postsProvider: ReproviderProvider,
               private lp:LocationsProvider,
               private dataProvider:DataProvider,
               private alertCtrl: AlertController,
               private loading:LoadingController,
              private db:AngularFireDatabase,
              private camera : Camera,
               public platform: Platform,public emailComposer:EmailComposer) {

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
      console.log(this.lp.objData)
}

  ionViewDidLoad() {

  }
/*
  updateState(i) {
    console.log('Cucumbers new state:' + this.selected[i] +" "+i);
  }
*/
 hotClicked() {
 
  if(this.x==1){
    this.dataObj=this.lp.objData;
  }
 
  console.log(this.dataObj)
  this.navCtrl.push(ContactPage,this.dataObj);
 }
 
captureImage(){
  const option: CameraOptions ={
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.FILE_URI
  }
  this.camera.getPicture(option).then((imageData) => {
 
    this.currentImage= imageData;
  },err =>{
    console.log('Image error:',err);
  });
}
coldClicked() {
 
  if(this.x==1){
    this.dataObj=this.lp.objData;
  }


  this.navCtrl.push(ColdPage,this.dataObj);
}

sendEmail() {
  console.log("in send mail"+this.mail);
  let email = {
    to: 'parentspatroljer@gmail.com',
    cc: '',
    attachments: [
      this.currentImage
    ],
    subject: 'דו"ח סיור',
    body: this.mail,
    isHtml: true
  };

  this.emailComposer.open(email);
}

rem(){
  if( this.rates==undefined||this.myDate==undefined || this.myDate==""){
    let alert = this.alertCtrl.create({
      title: 'שגיאה',
      subTitle: 'נא למלא תאריך ושכונה',
      buttons: ['אישור']
    });
    alert.present();
    return
  }
  
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
  this.mail="סיירת : "+this.rates+   "\r\nתאריך: "+this.myDate+"\r\n שעת התחלת הסיור: "+this.startTime+"\r\n שעת סיום הסיור: "+this.endTime+ "\r\n שמות משתתפי הסיור: "+this.volenteersName+"\r\n";

}
function() {//when send file was pushed
  this.storage.get('mail').then((val) =>{
    if(val != null){
      this.mail+=val;     
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'נא למלא לפחות נקודה אחת',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    this.x=0;
    this.storage.set('mail',"");
     this.sendEmail();   
   
  }).catch((error) => {
    console.log('Promise error');
  }); 
 
  

}
delrem(){
  this.x=0;
}


}