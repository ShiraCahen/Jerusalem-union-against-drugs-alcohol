
import { Injectable } from '@angular/core';


@Injectable()
export class ReproviderProvider {
  posts: any =[];
  constructor() {
    //console.log('Hello ReproviderProvider Provider');
  }
  load(){
    this.posts=[
      {title:'הר חומה',english:'HarHoma'},
      {title:'פסגת זאב',english:'PisgatZeev'},
      {title:'קריית יובל',english:'KiryatYuvalim'},
      {title:'קטמונים',english:'Katamonim'},
      {title:'שיכוני תלפיות',english:'Talpiot'},
      {title:'בית הכרם',english:'BeitHakerem'},
      {title:'גילה',english:'Gilo'},
      {title:'שמואל הנביא',english:'ShmuelHanavi'},
      {title:'מרכז העיר',english:'CityCenter'},
      {title:'עיר גנים',english:'IrGanim'},
      {title:'קריית מנחם',english:'KiryatMenachem'},
      {title:'מלחה' ,english:'Malcha'}
    ]
  }
}
