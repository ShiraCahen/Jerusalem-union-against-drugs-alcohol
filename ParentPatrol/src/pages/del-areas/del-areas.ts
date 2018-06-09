import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DelAreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-del-areas',
  templateUrl: 'del-areas.html',
})
export class DelAreasPage {
  locitem={} as locationItem;
  locName: string
  locName2: string
  subLocName: string
  keys: any[] = []
  keys2: any[] = []
  place;
  x=0;
  showlocname: string;

  constructor(public lp:LocationsProvider, public loading:LoadingController,private alertCtrl: AlertController) {
    this.loadlist();

      
  }
  
  equals(x: string){
    if(this.locName2!=this.showlocname)
      this.show();
  }
  show(){
  
    if(this.locName2!=undefined){
      this.showlocname=this.locName2
      this.x=1;
      this.loadsublist()
    }

  }
  loadsublist(){
    let load = this.loading.create();
    load.present()
    this.lp.getList(this.locName2)
    this.lp.getList(this.locName2).then(res => {
      this.keys2 = res;
      load.dismiss()
    }).catch(err => {
      load.dismiss()
    })
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

    this.lp.addLoc(this.locName);
    
  }

  addLocSub(){
    this.lp.addSubLocs(this.locName2,this.subLocName);
  }

  deleteLoc(){
   this.lp.deleteLoc(this.locName2,this.subLocName);
   let alert = this.alertCtrl.create({
    title: 'שגיאה',
    subTitle: 'גן נמחק בהצלחה',
    buttons: ['אישור']
  });
  alert.present();
  }

  deleteDoc(){
    if(this.locName===undefined){
      let alert = this.alertCtrl.create({
        title: 'שגיאה',
        subTitle: 'שכונה ריקה',
        buttons: ['אישור']
      });
      alert.present();
      return;
    }
    let alert = this.alertCtrl.create({
      title: 'מחיקה',
      message: 'האם למחוק?',
      buttons: [
        {
          text: 'ביטול',
          role: 'ביטול',
          handler: () => {
            return;
          }
        },
        {
          text: 'אישור',
          handler: () => {
            this.lp.deleteDoc(this.locName);
            this.locName="";
            this.loadlist();
          }
        }
      ]
    });
    alert.present();
    
   
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
