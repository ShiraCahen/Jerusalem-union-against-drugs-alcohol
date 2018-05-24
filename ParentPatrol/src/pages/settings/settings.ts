import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
 
import { SettingsProvider } from '../../providers/settings/settings';
 
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  goal: number;
 
  constructor(public viewCtrl: ViewController, public settings: SettingsProvider) {
    this.goal = this.settings.getGoal();
  }
 
  update() {
    let value = Math.trunc(this.goal);
    this.settings.setGoal(value);
    this.viewCtrl.dismiss(value);
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }
}