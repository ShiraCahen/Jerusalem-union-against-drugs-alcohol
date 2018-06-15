import { Component } from '@angular/core';
import { NavController ,LoadingController,NavParams} from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFirestore } from 'angularfire2/firestore';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-cold',
  templateUrl: 'cold.html',
})
export class ColdPage {
  selected= [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  home = HomePage;
  place: string="";
  data = DataProvider;
  notes: String ="";
  msg: String ="";
  select: any;
  insidePlaces: string[];
  keys: any[] = [];
  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, 
              public navParams: NavParams,private alertCtrl: AlertController,private lp: LocationsProvider,
              private db:AngularFirestore,private storage: Storage,public emailComposer:EmailComposer,private afs: AngularFirestore, private loading: LoadingController) {
                this.select = navParams.get('data');
                console.log(this.select)

                const settings = { timestampsInSnapshots: true };
                afs.firestore.settings(settings);

                let load = this.loading.create();
                load.present()
                this.lp.getList(this.select)
                this.lp.getList(this.select).then(res => {
                  this.keys = res;
                  load.dismiss()
                }).catch(err => {
                  load.dismiss()
                })
                
               
  }

  getPlace(name: string): Promise<string[]>{
    return new Promise<any>((resolve, reject) => {
      this.afs.collection<any>(name).valueChanges().subscribe(res => {
        console.log(res)
        resolve(res[0].location)
      }, err => {
        reject(err)
      })
    })
  }
 
   
  ionViewDidLoad(){
    this.postsProvider.load();
  }
  updateState(i) {
    console.log('Cucumbers new state:');
  }

  storeInfoToDatabase(){
    
    let toSave= {
      MyDate: this.navParams.get('myDate'),
      StartTime: this.navParams.get('startTime'),
      EndTime: this.navParams.get('endTime'),
      TeamNumbe: this.navParams.get('teamNumber'),
      VolenteersName: this.navParams.get('volenteersName'),
      Place:this.place,
      Notes: this.notes,
    }
    this.storage.get('mail').then((val) =>{
      if(val != null){
        this.msg+=val;         
      }
      else{
      console.log(" nul"+ this.msg);
      }
      this.sendEmail();
     
      this.storage.set('mail',this.msg);
       this.presentAlert();
       return this.db.collection('ColdSpot').add(toSave);
    });

    
}
sendEmail() { 
  this.msg += "דוח נקודה קרה  " + this.place
 "\r\n הערות: " + this.notes+"\r\n\r\n";

}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'דו"ח נקודה קרה',
    subTitle: 'נשלח בהצלחה',
    buttons: [
      {
        text: "אישור",
        handler: () => {
          this.navCtrl.pop();
        }
      }
    ]
  });
  alert.present();

}






}
