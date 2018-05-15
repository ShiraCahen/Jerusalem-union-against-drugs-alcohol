import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'

})
export class ContactPage {
  selected : any[] = [];
  checked : boolean = false;
  msg: String;
  str: String = "";
  team: String;
  myDate: String;
  startTime: String;
  endTime: String;
  teamNumber: Number;
  volenteersName: String;
  description: String;
  alcoholOrDrugs: String;
  exeptions: String;
  details: String;
  handle: string;
  notes: String;

  constructor(public navCtrl: NavController, public postsProvider: ReproviderProvider, public emailComposer:EmailComposer ) {

  }


   makeMessage() {
    /*  for(var i = 0 ; i < this.postsProvider.posts.length ; i++) {
        if(this.selected[i].checked == true) {
            this.str += this.postsProvider.posts[i];
        }
      }*/

      this.msg = "דוח נקודה חמה \r\n צוות: " + this.team + " \r\n שמות המתנדבים: " + this.volenteersName
      + "\r\n תאריך: " + this.myDate + "\r\n מיקום: "+ "\r\n תיאור כללי: " + this.description 
      + "\r\n במידה והייתה היתקלות עם אלכוהול וסמים - כמה? " + this.alcoholOrDrugs
      + "\r\n אירועים חריגים: " + this.exeptions + "\r\n פרטי הנער או הנערה: " + this.details
      + "\r\n דרכי טיפול: " + this.handle + "\r\n הערות: " + this.notes;
      return this.msg;
    }
  send(){
    this.str= this.makeMessage();
    console.log (this.str);
    let email = {
      to:"parentspatroljer@gmail.com",
      cc:[],
      bcc:[],
      attachmemt:[],
      subject: "",
      body:""+ this.str,
      isHtml:true,
      app:"Gmail"

  }
this.emailComposer.open(email);
}
  ionViewDidLoad(){
    this.postsProvider.load();
  }
 
}
