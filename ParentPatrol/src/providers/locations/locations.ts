import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {locationItem} from '../../models/locationItem.interface'
import * as firebase from 'firebase';
//import firebase from 'firebase/app'

@Injectable()
export class LocationsProvider {
  locitem={} as locationItem;
  locListRef: AngularFirestoreCollection<any>;
  locRef;
  objData;
  obj;
  db = firebase.firestore();
  
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
    this.locListRef = afs.collection('Locations');
    
  }

  saveData(objData:Object){
    this.objData=objData
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

  getNList():Promise<any>{
    let arr1: string[] = [];
    var locRef = this.db.collection('Locations');
    var i=0;
        return new Promise<any>((resolve, reject) => {
          locRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            //console.log(doc.id, '=>', doc.data());
            arr1[i]=doc.id
            i++;
          });
          resolve(arr1);
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        })  
}

  getList(locName: string):Promise<any>{
    var i=0;
    var docRef = this.db.collection('Locations').doc(locName);
    let  arr2: string[] = [];
    return new Promise<any>((resolve, reject) => {
      docRef.get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              Object.keys(doc.data()).forEach(key => {
                arr2[i] = doc.data()[key];
                i++;
              });
              resolve(arr2);
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
            resolve(err);
          });
    }) 
     
  
  }
  

  dataJson(date):Promise<any>{
    let jsonArr="";
    return new Promise<any>((resolve, reject) => {
      this.db.collection("Reports").where("MyDate", "==",date)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                jsonArr=jsonArr+JSON.stringify(doc.data())+ "%split%";
              });
              resolve(jsonArr);
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
              resolve(error);
          });
    })  
         
       
        
        
       
  }

}
/*
  ConvertToCSV = function(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
      var str = '';
        for (var i = 0; i < array.length; i++) {
          var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','
            line += array[i][index];
        }
          str += line + '\r\n';
      }
      return str;
    }
    */

/* LIST OF DOCS
getList(locName: string):Promise<any>{
      var citiesRef = this.db.collection('Locations');
      var i=0;
          return new Promise<any>((resolve, reject) => {
            citiesRef.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              //console.log(doc.id, '=>', doc.data());
              this.arr1[i]=doc.id
              i++;
            });
            resolve(this.arr1);
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
          })  
}
*/