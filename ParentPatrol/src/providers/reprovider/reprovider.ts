
import { Injectable } from '@angular/core';


@Injectable()
export class ReproviderProvider {
  posts: any =[];
  constructor() {
    //console.log('Hello ReproviderProvider Provider');
  }
  load(){
    this.posts=[
      {title:'הר חומה',type:'false'},
      {title:'פסגת זאב',type:'false'},
      {title:'יובלים',type:'false'},
      {title:'קטמונים',type:'false'},
      {title:'שיכוני תלפיות',type:'false'},
      {title:'בית הכרם',type:'false'},
      {title:'גילה',type:'false'},
      {title:'שמואל הנביא',type:'false'},
      {title:'מרכז העיר',type:'false'},
      {title:'עיר גנים',type:'false'}
    ]
  }
}
