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
  x=0;

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
  if(this.startDate==undefined || this.endDate==undefined){
   let alert = this.alertCtrl.create({
    title: 'שגיאה',
    subTitle: 'נא להזין תאריכים',
    buttons: ['אישור']
    });
    alert.present();
    return
  }
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
  this.x=1;
 

  }

  download(){
    if(this.jsonStr==""){
      let alert = this.alertCtrl.create({
       title: 'שגיאה',
       subTitle: 'לא קיימים נתונים לתאריכים אלו',
       buttons: ['אישור']
       });
       alert.present();
       this.x=0;
       return
     }
    let title:string[];
    title=[ 
    "Alcohol",
    "Ambulance",
    "AverageAge",
    "Drugs",
    "EndTime",
    "Exeptions",
    "GroupNum",
    "Handle",
    "Kind",
    "MembersInGroup",
    "MorePlaces",
    "MyDate",
    "Notes",
    "Place",
    "Police",
    "StartTime",
    "Team",
    "Vandalism",
    "Violence",
    "VolenteersName",
    "underAlcoho",
    "underDrugs",
    "Dilemmas",
    "NumOfYoungsters",
    "YoungsterName"
    ]

    
    let row = "";
    let row2= "";
    let obj:Object
    let kind;
    for (let key in title){
      row += title[key] + ","
    }
    let j=0,i=0
    let data=this.jsonStr.split('%');
    for(let i=0;i<data.length-1;i++){
        obj = JSON.parse(data[i]);
        kind=this.kind(obj);

        if(kind=="hot spot"){
          for(let key in obj){
            if(key!="TeamNumbe")
              row2 += obj[key] + ","
          }
          row2+='\r\n'
        }

        if(kind=="cold spot"){
          
          row2+=",,,,"+this.getVal(obj,"EndTime")+",,,,"+this.getVal(obj,"Kind")+",,,"+this.getVal(obj,"MyDate")+
          ","+this.getVal(obj,"Notes")+",,,"+this.getVal(obj,"StartTime")+",,"+",,,"+this.getVal(obj,"VolenteersName")+",,"
          row2+='\r\n'
        }

        
        if(kind=="moadonit"){
          row2+=this.getVal(obj,"AlcoholOrDrugs")+",,"+this.getVal(obj,"AverageAge")+",,"+this.getVal(obj,"EndTime")+","+this.getVal(obj,"Exeptions")+",,"+this.getVal(obj,"Handle")+","+this.getVal(obj,"Kind")+
          ",,,"+this.getVal(obj,"MyDate")+","+this.getVal(obj,"Notes")+",,,"+this.getVal(obj,"StartTime")+","+this.getVal(obj,"Team")+","
          +",,,"+this.getVal(obj,"VolenteersName")+",,,"+this.getVal(obj,"Dilemmas")+","+this.getVal(obj,"NumOfYoungsters")+","+this.getVal(obj,"YoungsterName")
          row2+='\r\n'
        }

        
       
    }  

 
    let csvContent = row + "\r\n" + row2 + "\n\r"
    var link = window.document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent));
    link.setAttribute("download", this.startDate+"-"+this.endDate+".csv");
    link.click();
    this.x=0;

  }

  getVal(obj,string){
    for(let key in obj){
      if(key==string)
      return obj[key]
    }
  }
  kind(obj){
    for(let key in obj){
      if(key=="Kind"){
        return obj[key]
      }
    }

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
