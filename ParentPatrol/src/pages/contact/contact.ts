import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  startTime: String;
 myDate: String;
 endTime: String;
  constructor(public navCtrl: NavController) {

  }

}