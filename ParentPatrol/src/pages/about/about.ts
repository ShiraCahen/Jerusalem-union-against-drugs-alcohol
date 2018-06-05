import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import firebase from 'firebase';
import { AngularFireObject, AngularFireList } from "angularfire2/database"
import { AngularFirestore } from 'angularfire2/firestore';


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
  d: string;

  constructor(public navCtrl: NavController,private afDatabase : AngularFirestore) {
  //  this.hsdata=this.afDatabase.list('hotSpot');
   // console.log(this.hsdata.auth().child);
  /*  for (var i=0; i<this.hsdata.length; i++){
      this.reports[i]=this.hsdata.auth().child;
    }
    this.displayData(this.reports[0]);*/
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
  }

 getData(){
 this.data = this.afDatabase.collection('Moadonit').valueChanges();
    this.data.subscribe(d=>{
      console.log(d)
      this.moadonitData = d// hold the array of all Moadonit reports
  });
  this.data = this.afDatabase.collection('HotSpot').valueChanges();
  this.data.subscribe(d=>{
    console.log(d)
    this.hotSpotData = d// hold the array of all hot spot reports
});
  
}

  

   
   

}
