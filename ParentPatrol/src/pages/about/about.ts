import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import firebase from 'firebase';
import { AngularFireObject, AngularFireList } from "angularfire2/database"
import { AngularFirestore } from 'angularfire2/firestore';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'
import * as moment from 'moment';
//import { Clipboard } from '@ionic-native/clipboard';
import { AlertController,Platform } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;
  hsdata : any;
  reports: any[];
  team: Text;
  data:  any;
  moadonitData:any[] = [];
  hotSpotData:any[] = [];
  coldSpotData:any[] = [];
  d: string;
  startDate;
  endDate;
  jsonStr="";

  constructor(private platform:Platform,private alertCtrl:AlertController,public navCtrl: NavController,private afDatabase : AngularFirestore,private loading: LoadingController, private lp:LocationsProvider) {
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
  }

 getData(){
  let load = this.loading.create();
  load.present();
 this.data = this.afDatabase.collection('Moadonit').valueChanges();
    this.data.subscribe(d=>{
        console.log("moadonit"+d)
         this.moadonitData = d// hold the array of all Moadonit reports
         this.data = this.afDatabase.collection('HotSpot').valueChanges();
            this.data.subscribe(d=>{
             console.log("hot spot: "+d)
             this.hotSpotData = d// hold the array of all hot spot reports
             this.data = this.afDatabase.collection('ColdSpot').valueChanges();
              this.data.subscribe(d=>{
                     console.log("cold spot: "+ d)
                      this.coldSpotData = d// hold the array of all cold spot reports
                      load.dismiss();
               console.log(this.moadonitData[0]);//try
                    });
              });
              
         });

}


  
async dataJson(){
  this.jsonStr="";
  var a = moment(this.startDate);
  var b = moment(this.endDate);
  let load = this.loading.create();
  load.present()
  for (var m = moment(a); m.isSameOrBefore(b); m.add(1,'days')) {
    let successData = await this.lp.dataJson(m.format('YYYY-MM-DD'));
     this.lp.dataJson(m.format('YYYY-MM-DD')).then(res =>{
      this.jsonStr=this.jsonStr+res;
    }).catch(err=>{
      console.log("Error")
      load.dismiss()
    })
    
  }

  load.dismiss()

  }

  
 
}




/*
  if(this.platform.is('core')){ 
    console.log("this json"+this.jsonStr);
   // Clipboard.copy("bla");
  }
  else{
    /*
    this.clipboard.copy(this.jsonStr)
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'הועתק',
      buttons: ['אישור']
    });
    alert.present();
    */
