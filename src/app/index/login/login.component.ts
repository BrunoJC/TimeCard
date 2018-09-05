


import { IndexComponent } from './../index.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import * as firebase from "firebase/app";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { single } from 'rxjs/operators';
import { logging, EventEmitter } from 'protractor';
import { resolve } from 'path';
import { reject } from '../../../../node_modules/@types/q';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Funci } from '../body/ListaFunci/lista1/Models/funcio.model';
import { Usuario } from './usuario';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  user: Observable<firebase.User>
 
  nameEmpresa :Usuario = {emailEmpresa:'', senha:'' }
  
  

  authState: any = null;

  itemsRef: AngularFireList<Funci>;
  items;
  
  
  constructor(public afAuth:AngularFireAuth, private router: Router,
              public auth: AuthService,
              private db1: AngularFireDatabase,
  ){
    this.user = afAuth.authState;
    
  }

  login (login : Usuario) {
        
    this.afAuth.auth.signInWithEmailAndPassword(this.nameEmpresa.emailEmpresa , this.nameEmpresa.senha).catch(error => 
    console.log(error));
    this.afAuth.authState.subscribe((auth) => 
  {
    this.router.navigate(['/index']);
    this.authState = auth;

     console.log(this.authState);
    this.db1.object( auth.uid).update({
     name: auth.displayName,
       empresa: auth.email
  })
    
    })}

  
        
         
 ngOnInit() {
  }
  

  
    
} 
  