import { Component } from '@angular/core';
import { NavController ,LoadingController,NavParams} from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-cold',
  templateUrl: 'cold.html',
})
export class ColdPage {
  selected= [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  home = HomePage;
  data = DataProvider;
  notes: String ="";
  msg;
  select: any;
  insidePlaces: string[];

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, 
              public navParams: NavParams,private alertCtrl: AlertController,
              private db:AngularFirestore,public emailComposer:EmailComposer,private afs: AngularFirestore, private loadCtrl: LoadingController) {
                this.select = navParams.get('data');
                console.log(this.select)

                const settings = { timestampsInSnapshots: true };
                afs.firestore.settings(settings);

                let loading = loadCtrl.create();
                loading.present()

                this.getPlace(this.select).then(locations => {
                  this.insidePlaces = locations
                  loading.dismiss()
      }, err => {
        console.log(this.insidePlaces)
                  loading.dismiss()
                }).catch(err => {
                  console.log(err)
                  loading.dismiss()
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
      TwentyThree: this.selected[22]   
    }
    this.presentAlert();
    return this.db.collection('ColdSpot').add(toSave);
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




sendEmail() {
  this.msg = "הערות: " + this.notes;
  let email = {
    to: 'parentspatroljer@gmail.com',
    cc: '',
    attachments: [
      //this.currentImage
    ],
    subject: 'Test',
    body: this.msg+ '' ,
    isHtml: true
  };

  this.emailComposer.open(email);
}

}
