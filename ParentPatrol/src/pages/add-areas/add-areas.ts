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
    if(this.locName===undefined){
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
  }

  addLocSub(){
    if(this.locName===undefined || this.subLocName===undefined){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'שכונה/גן ריקים',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    this.lp.addSubLocs(this.locName2,this.subLocName);
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
}
