import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {locationItem} from '../../models/locationItem.interface'
import * as firebase from 'firebase';
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {
  locitem={} as locationItem;
  locListRef: AngularFirestoreCollection<any>;
  locRef;
  db = firebase.firestore();
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
    this.locListRef = afs.collection('Locations');
    
  }


  addLoc(locName:string){
    this.afs.collection('Locations').doc(locName).set(this.locitem);//שכונה חדשה
  }

  
  addSubLocs(locName: string,subName: string) {
    this.afs.collection('Locations').doc(locName).update({[subName]:subName})
    /*
    */
  }

  deleteLoc(locName: string,subName: string){
    const userRef = this.afs.collection('Locations').doc(locName);
    var removeCapital = userRef.update({
    [subName]: firebase.firestore.FieldValue.delete()
    });
  }

  deleteDoc(locName: string){
    var deleteDoc = this.afs.collection('Locations').doc(locName).delete();
  }

  getList(locName: string){
    
    var docRef = this.db.collection('Locations').doc('תלפיות');
    var getDoc = docRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
    
  }

  /*
 
  */
}
