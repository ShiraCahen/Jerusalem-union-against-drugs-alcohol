import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import {locationItem} from '../../models/locationItem.interface'

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public lp:LocationsProvider) {
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

/*  
  printList(){
    this.lp.getList(this.locName)

  }
  */
}
