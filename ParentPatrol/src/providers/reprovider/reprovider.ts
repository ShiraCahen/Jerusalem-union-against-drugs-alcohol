
import { Injectable } from '@angular/core';


@Injectable()
export class ReproviderProvider {
  posts: any =[];
  constructor() {
    //console.log('Hello ReproviderProvider Provider');
  }
  load(){
    this.posts=[
      {title:'הר חומה',type:'checkbox'},
      {title:'פסגת זאב',type:'checkbox'},
      {title:'יובלים',type:'checkbox'},
      {title:'קטמונים',type:'checkbox'},
      {title:'שיכוני תלפיות',type:'checkbox'},
      {title:'בית הכרם',type:'checkbox'},
      {title:'גילה',type:'checkbox'},
      {title:'שמואל הנביא',type:'checkbox'},
      {title:'מרכז העיר',type:'checkbox'},
      {title:'עיר גנים',type:'checkbox'},
    ]
  }
}
