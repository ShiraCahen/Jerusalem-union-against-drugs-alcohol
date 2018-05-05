import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class MoadonitPage {
  startTime: String;
 myDate: String;
 endTime: String;

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider ) {

  }
  ionViewDidLoad(){
    this.postsProvider.load();
  }
 
}
