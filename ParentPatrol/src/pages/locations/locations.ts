import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'
import {AddAreasPage} from '../add-areas/add-areas';
import {DelAreasPage} from '../del-areas/del-areas';

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {
  locitem={} as locationItem;
  locName: string
  subLocName: string
  keys: any[] = []
  addareas = AddAreasPage;
  delareas = DelAreasPage;
  constructor(public lp:LocationsProvider, public loading:LoadingController) {
  }

  addLoc(){
    this.lp.addLoc(this.locName);
  }

  addLocSub(){
    this.lp.addSubLocs(this.locName,this.subLocName);
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
