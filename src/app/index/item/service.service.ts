



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject, } from 'angularfire2/database';
import { Injectable, Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


import * as firebase from 'firebase/app';

@Injectable()
 
 


export class ItemService {

  updatetext: string
  newitem : string


itemsRef: AngularFireList<any>;
items: Observable<any[]>;
itemfilhos : AngularFireDatabase;



  
    
    constructor(db: AngularFireDatabase) {
      this.itemsRef = db.list('TimeCard')
     
     
     
    
      // Use snapshotChanges().map() to store the key
      
}



    addItem(newName) {
      this.itemsRef.push({ text: newName });
    }
    updateItem(key: string, newText: string) {
      this.itemsRef.update(key, { text: newText });
    }
    deleteItem(key: string) {    
      this.itemsRef.remove(key); 
    }
    deleteEverything() {
      this.itemsRef.remove();
    }
  }


  export class ItemService2 { 
    
    user: Observable<firebase.User>;
    constructor(public afAuth: AngularFireAuth) {
      this.user= this.afAuth.authState;
    
      
       
    }
  }


  