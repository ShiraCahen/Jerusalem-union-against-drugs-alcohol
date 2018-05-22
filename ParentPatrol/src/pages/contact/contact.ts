import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReproviderProvider } from '../../providers/reprovider/reprovider';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'

})
export class ContactPage {
  data = DataProvider;
  selected= [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];  
  checked : boolean = false;
  msg: String;
  str: String = "";
  team: String ="";
  myDate: String ="";
  startTime: String ="";
  endTime: String ="";
  teamNumber: Number = 0;
  volenteersNum: Number = 0;
  volenteersName: String ="";
  morePlaces: string="";
  description: String ="";
  groupsNum: Number=0;
  membersInGroup: Number=0;
  averageAge: string="";
  alcoholOrDrugs: String ="";
  exeptions: String ="";
  details: String ="";
  handle: string ="";
  notes: String ="";

  

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public postsProvider: ReproviderProvider, public emailComposer:EmailComposer,private db:AngularFireDatabase) {
  }

  makeMessage() {
      for(var i = 0 ; i < this.postsProvider.posts.length ; i++) {
        if(this.selected[i] == true) {
            this.str +="\r\n"+ this.postsProvider.posts[i].title;
        }
      }

      this.msg = "דוח נקודה חמה \r\n צוות: " + this.team + " \r\n שמות המתנדבים: " + this.volenteersName
      + "\r\n תאריך: " + this.myDate + "\r\n מיקום: "+this.str+ "\r\n תיאור כללי: " + this.description 
      + "\r\n במידה והייתה היתקלות עם אלכוהול וסמים - כמה? " + this.alcoholOrDrugs
      + "\r\n אירועים חריגים: " + this.exeptions + "\r\n פרטי הנער או הנערה: " + this.details
      + "\r\n דרכי טיפול: " + this.handle + "\r\n הערות: " + this.notes;

      console.log(this.msg);
      return this.msg;
    }
  send(){
    this.str= this.makeMessage();
    console.log (this.str);
    let email = {
      to:"parentspatroljer@gmail.com",
      subject: "",
      body:""+this.str,
      isHtml:true,
    //  app:"Gmail"

  }
  this.emailComposer.open(email);
}



  ionViewDidLoad(){
    this.postsProvider.load();
  }

  updateState(i) {
    console.log('Cucumbers new state:' + this.selected[i] +" "+i);
  }

  storeInfoToDatabase(){
    this.send();
    let toSave= {
        Team: this.team,
        MyDate: this.myDate,
        StartTime: this.startTime,
        EndTime: this.endTime,
        TeamNumbe: this.teamNumber,
        VolenteersName: this.volenteersName,
        MorePlaces: this.morePlaces,
        Description: this.description,
        GroupNum: this.groupsNum,
        MembersInGroup: this.membersInGroup,
        AverageAge: this.averageAge,
        AlcoholOrDrugs: this.alcoholOrDrugs,
        Exeptions: this.exeptions,
        Handle: this.handle,
        Notes: this.notes,
        One: this.selected[0],
        Two: this.selected[1],
        Three: this.selected[2],
        Four: this.selected[3],
        Five: this.selected[4],
        Six: this.selected[5],
        Seven: this.selected[6],
        Eight: this.selected[7],
        Nine: this.selected[8],
        Ten: this.selected[9],
        Eleven: this.selected[10],
        Twelve: this.selected[11],
        Thirteen: this.selected[12],
        Fourteen: this.selected[13],
        Fifteen: this.selected[14],
        Sixteen: this.selected[15],
        Seventeen: this.selected[16],
        Eighteen: this.selected[17],
        Nineteen:this.selected[18],
        Twenty: this.selected[19],
        TwentyOne: this.selected[20],
        TwentyTwo: this.selected[21],
        TwentyThree: this.selected[22],
        TwentyFour: this.selected[23],
        TwentyFive: this.selected[24],
        TwentySix: this.selected[25],

        
    }
    this.presentAlert();
    return this.db.list('hotSpot:').push(toSave);
}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'דוח נקודה חמה',
    subTitle: 'נשלח בהצלחה',
    buttons: [
      {
        text: "OK",
        handler: () => {
          this.navCtrl.pop();
        }
      }
    ]
  });
  alert.present();
}
 
}
