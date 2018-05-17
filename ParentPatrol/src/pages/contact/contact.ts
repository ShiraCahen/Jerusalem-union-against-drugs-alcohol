import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'

})
export class ContactPage {
  selected : any[] = [];
  checked : boolean = false;
  msg: String;
  str: String = "";
  team: String ="";
  myDate: String ="";
  startTime: String ="";
  endTime: String ="";
  teamNumber: Number = 0;
  volenteersName: String ="";
  description: String ="";
  alcoholOrDrugs: String ="";
  exeptions: String ="";
  details: String ="";
  handle: string ="";
  notes: String ="";

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider ) {

  }
  makeMessage() {
      for(var i = 0 ; i < this.postsProvider.posts.length ; i++) {
        if(this.selected[i].checked == true) {
            this.str += this.postsProvider.posts[i];
        }
      }

      this.msg = "דוח נקודה חמה \r\n צוות: " + this.team + " \r\n שמות המתנדבים: " + this.volenteersName
      + "\r\n תאריך: " + this.myDate + "\r\n מיקום: " + this.str + "\r\n תיאור כללי: " + this.description 
      + "\r\n במידה והייתה היתקלות עם אלכוהול וסמים - כמה? " + this.alcoholOrDrugs
      + "\r\n אירועים חריגים: " + this.exeptions + "\r\n פרטי הנער או הנערה: " + this.details
      + "\r\n דרכי טיפול: " + this.handle + "\r\n הערות: " + this.notes;

      console.log(this.msg);
      return this.msg;
    }
  
  ionViewDidLoad(){
    this.postsProvider.load();
  }
 
}
