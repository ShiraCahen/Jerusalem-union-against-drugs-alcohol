
import { Injectable } from '@angular/core';

@Injectable()
export class ReproviderProvider {
  posts: any =[];
  constructor() {
    //console.log('Hello ReproviderProvider Provider');
  }
  load(){
    this.posts=[
      {title:'מתחם המתנ"ס- מתחת למדרגות של טיפת חלב ובצד המתנ"ס',type:'checkbox'},
      {title:'המגרשים האחוריים של ביה"ס ממ"ד תורני ברחוב שאול אביגור.',type:'checkbox'},
      {title:'המרכזון ברחוב שאול אביגור11- בחנייה ובגג.',type:'checkbox'},
      {title:'הגן הציבורי של אביגור וסול ליפצין, הגנים בסול ליפצין.',type:'checkbox'},
      {title:'שביל האופנים והפארק מתחת לרחוב הרב יצחק ניסים.',type:'checkbox'},
      {title:'מגדל המים ובטיילת הסמוכה לו.',type:'checkbox'},
      {title:'מגרש החנייה מתחת למרכז המסחרי ברחוב ליכטנשטיין.',type:'checkbox'},
      {title:'הגן בסוף רחוב ליכטנשטיין ובבר לביא.',type:'checkbox'},
      {title:'גן המשחקים שבסוף רחוב זאב פלק אפשר לרדת אליו במדרגות שבתחילת רחוב שלמה באום',type:'checkbox'},
      {title:'שלב ג- אתרי בנייה- להסתכל מבחוץ- אסור לנו להיכנס!',type:'checkbox'},
      {title:'חניות של מבנים חדשים.',type:'checkbox'},
      {title:'החנייה של המרכז באליהו קורן- חצר עמיטל.',type:'checkbox'},
      {title:'החנייה מתחת לרחוב הבאבא סלה- רחוב המהרל סמפארג.',type:'checkbox'},
      {title:'הפארק ומגרשי הספורט ברחוב ברש רועי.',type:'checkbox'},
      {title:' רחוב גרלנטר.',type:'checkbox'},
      {title:'החנייה של אוטובוסי אגד.',type:'checkbox'},
      {title:'הפארק מתחת לרחוב הרב אריה בינה והטיילת.',type:'checkbox'},
      {title:'הגן הציבורי בסוף מנחם ברש רועי ושבילי הטיילת.',type:'checkbox'},
      {title:'לאורך השביל שמוביל למנזר מר אליאס.',type:'checkbox'},
      {title:'בכניסה לשכונה, ברחבה של תחנת האוטובוס.',type:'checkbox'},
      {title:'הגן בסוף רחוב נחמה.',type:'checkbox'},
      {title:'גן ברחוב אריה ורשבסקי.',type:'checkbox'},
      {title:'נקודת הגיחון.',type:'checkbox'},
      {title:' ביה"ס אילן רמון- טריבונות, מתחת לסלים, מאחורי היוטה הירוקה : שלושת בתי הספר- להיכנס פנימה:',type:'checkbox'},
    
      {title:'פארק ברחוב נתן זך',type:'checkbox'},
      {title:'פארק ברחוב זלץ',type:'checkbox'}
    ]
  }
}
