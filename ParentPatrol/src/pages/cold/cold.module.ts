import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColdPage } from './cold';

@NgModule({
  declarations: [
    ColdPage,
  ],
  imports: [
    IonicPageModule.forChild(ColdPage),
  ],
})
export class ColdPageModule {}
