import { Usuario } from './../../../login/usuario';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../../../../node_modules/angularfire2/auth';
import { AngularFireDatabase } from '../../../../../../node_modules/angularfire2/database';
import { AuthService } from '../../../login/auth.service';
import { Observable } from '../../../../../../node_modules/rxjs';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['../../../index.component.css']
})
export class LoginUserComponent implements OnInit {
  
  
  user: Observable<firebase.User>;
  authState: any = null;

  emailUser:string;
  senhaUser;
  nomeUser: string;
  cpfUser;
  pisUser;
  empresaUser:string;
  UsuarioEmail;

  constructor(public afAuth: AngularFireAuth,
    public db1 : AngularFireDatabase,
    public auth: AuthService) {
      
      auth.user$.subscribe( user => this.UsuarioEmail = user)
      
      this.user= this.afAuth.authState;
}



  CadastrarUser(){
    
      firebase.auth().createUserWithEmailAndPassword(this.emailUser,this.senhaUser).then((res)=>{
      alert("Administrador cadastrado com sucesso!");
      let usuario= firebase.auth().currentUser;
      
      this.afAuth.authState.subscribe((auth) => 
      {
        this.UsuarioEmail = auth.uid
        this.db1.database.ref('/LoginUser/' + this.UsuarioEmail )
        
      .push({
        Nome: this.nomeUser,
        emailAdm: this.emailUser,
        CPF: this.cpfUser,
        PIS: this.pisUser,
        Empresa: this.emailUser,
        
      })
      console.log(this.UsuarioEmail)
      
      })
      
      alert("falha ao cadastrar administrador");
    });
        
    
        }
    
  
  
  ngOnInit() {
  }

}
