import { Component } from '@angular/core';
import { NavController ,LoadingController,NavParams} from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-cold',
  templateUrl: 'cold.html',
})
export class ColdPage {
  home = HomePage;
  data = DataProvider;
  notes: String ="";
  msg;
  select: any;
  insidePlaces: string[];

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, 
              private dataProvider:DataProvider,public navParams: NavParams,private alertCtrl: AlertController,
              private db:AngularFireDatabase,public emailComposer:EmailComposer,private afs: AngularFirestore, private loadCtrl: LoadingController) {
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
      Notes: this.notes,
    }
    this.presentAlert();
    return this.db.list('coldPoint').push(toSave);
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
