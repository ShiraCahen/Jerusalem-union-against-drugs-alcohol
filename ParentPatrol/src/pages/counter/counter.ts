import { Component,ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Pedometer } from '@ionic-native/pedometer';
import { Platform, ModalController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { SettingsPage } from '../../pages/settings/settings';
import { isEmpty } from 'rxjs/operator/isEmpty';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
})
export class CounterPage {
  steps: number = 0;
  goal: number;
  percentage: number;
  resetNum: number;
 
  constructor(private ref: ChangeDetectorRef, public platform: Platform,public modalCtrl: ModalController, public settings: SettingsProvider,
  private alertCtrl: AlertController) {
    /*this.pedometer.startPedometerUpdates()
      .subscribe((data) => {
          this.steps = data.numberOfSteps;
          this.setPercentage();
          this.ref.detectChanges();
        });
 
    this.goal = this.settings.getGoal();
    this.setPercentage();
  }
 
  setPercentage() {
    this.percentage = (this.steps / this.goal) * 100;
  }
 
  showOptions() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.onDidDismiss((result) => {
      if (result) {
        this.goal = result;
      }
    })
    modal.present();
  }

  resetSteps(){
    let alert = this.alertCtrl.create({
      title: 'איפוס צעדים',
      message: 'האם לאפס?',
      buttons: [
        {
          text: 'כן',
          handler: () => {
            this.steps=0;
             this.percentage=0;
          }
        },
        {
          text: 'לא',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }*/
}
}