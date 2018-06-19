import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddAreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-areas',
  templateUrl: 'add-areas.html',
})
export class AddAreasPage {
  locitem={} as locationItem;
  locName: string
  locName2: string
  subLocName: string
  keys: any[] = []
  addareas = AddAreasPage;
  place;


  constructor(public lp:LocationsProvider, public loading:LoadingController,private alertCtrl: AlertController) {
    this.loadlist();
  }

  loadlist(){
    let load = this.loading.create();
    load.present()
    this.lp.getNList().then(res => {
      this.keys = res;
      load.dismiss()
    }).catch(err => {
      load.dismiss()
    })
  }
  addLoc(){
   
   if(this.strErr(this.locName)==1){
     return
   }

    let i=0,x=0;
    this.keys.forEach(key => {
        if(this.keys[i]===this.locName){
          x=1;
        }
          i++;
    });
    if(x==1){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'שכונה זו כבר קיימת',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    if(this.locName===undefined||this.locName===""){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'שכונה ריקה',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    this.lp.addLoc(this.locName);
    this.loadlist();
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'שכונה נוספה בהצלחה',
      buttons: ['אישור']
    });
    alert.present();
  }

  addLocSub(){
    if(this.strErr(this.subLocName)==1){
      return
    }
    if(this.locName2==""||this.subLocName==""){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'שכונה/גן ריקים',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    this.lp.addSubLocs(this.locName2,this.subLocName);

    this.loadlist();
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'גן התווסף בהצלחה',
      buttons: ['אישור']
    });
    alert.present();
  }

  deleteLoc(){
   this.lp.deleteLoc(this.locName,this.subLocName);
  }


  printList(){
    let load = this.loading.create();
    load.present()
    this.lp.getList(this.locName)
    this.lp.getList(this.locName).then(res => {
      this.keys = res;
      load.dismiss()
    }).catch(err => {
      load.dismiss()
    })
  }

  strErr(name){
    if(name.indexOf('*') >-1 ||
    name.indexOf('~') > -1 ||
    name.indexOf('/') > -1 ||
    name.indexOf('[') >-1 ||
    name.indexOf(']') >-1 ){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'שגיאה, תווים לא חוקיים (*,~,/,],[)',
        buttons: ['אישור']
      });
      alert.present();
      return 1
    }
    return 0
  }
}
