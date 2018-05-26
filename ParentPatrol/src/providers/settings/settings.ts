import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SettingsProvider {
  goal: number = 100;
 
  constructor() {
  }
 
  setGoal(goal: number) {
    if (goal && goal > 0) {
      this.goal = goal;
    }
  }
 
  getGoal() {
    return this.goal;
  }
 
}