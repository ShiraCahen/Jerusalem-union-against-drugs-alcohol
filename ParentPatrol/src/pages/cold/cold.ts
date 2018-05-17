import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';

@Component({
  selector: 'page-cold',
  templateUrl: 'cold.html',
})
export class ColdPage {

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider) {

  }
   
  ionViewDidLoad(){
    this.postsProvider.load();
  }

}
