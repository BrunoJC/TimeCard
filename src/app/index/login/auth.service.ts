import { LoginComponent } from './login.component';
import { ROUTES } from './../app.routes';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { tokenKey } from '@angular/core/src/view';
import { logging, EventEmitter } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';






@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  user$: Observable<firebase.User>
  email: string;
  senha: string;
  nameEmpresa :Usuario = {emailEmpresa:'', senha:'' }
  
  authState: any = null;
  constructor(public afAuth:AngularFireAuth,
               private router: Router,
                private route: ActivatedRoute,
                private  db1 : AngularFireDatabase,){
   
                this.user$ = afAuth.authState;
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

  }