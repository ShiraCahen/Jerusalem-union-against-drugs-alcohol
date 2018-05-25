import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;
  hsdata : any;
  reports: any[];
  team: Text;


  constructor(public navCtrl: NavController,private db:AngularFireDatabase) {
    this.hsdata=this.db.list('hotSpot');
   // console.log(this.hsdata.auth().child);
  /*  for (var i=0; i<this.hsdata.length; i++){
      this.reports[i]=this.hsdata.auth().child;
    }
    this.displayData(this.reports[0]);*/
  }

  getData(reportId: any){
   this.db.list('hotSpot/').valueChanges().subscribe(
     data=>{
       console.log(data)
       this.items=data
     }
   )
  
  }
  
 /* displayData(reportId){
    var that=this;
    this.getData(reportId).then(snapshot =>{
      that.team=snapshot.val().team;
    });
    console.log(that.team);
  }*/

}