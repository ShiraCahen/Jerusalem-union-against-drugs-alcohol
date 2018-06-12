import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import firebase from 'firebase';
import { AngularFireObject, AngularFireList } from "angularfire2/database"
import { AngularFirestore } from 'angularfire2/firestore';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'

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

  constructor(public navCtrl: NavController,private afDatabase : AngularFirestore,private loading: LoadingController, private lp:LocationsProvider) {
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

  
dataJson(){

//console.log(check > from && check < to)
  //console.log(this.startDate,this.endDate)
  this.jsonStr=this.lp.dataJson(this.startDate,this.endDate);
  console.log(this.jsonStr);
}

}
