import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CounterPage } from './counter';

@NgModule({
  declarations: [
    CounterPage,
  ],
  imports: [
    IonicPageModule.forChild(CounterPage),
  ],
})
export class CounterPageModule {}
