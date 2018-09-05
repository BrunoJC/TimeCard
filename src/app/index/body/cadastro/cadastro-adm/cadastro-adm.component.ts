import { AngularFireDatabase } from 'angularfire2/database';
import { Cadasempresas } from './Cadasempresas.1';
import { ItemService } from './../../../item/service.service';
import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../../../index.component';
import { ItemService2 } from '../../../item/service.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AddFuncService } from '../../ListaFunci/lista1/add-func.service';
import { AuthService } from '../../../login/auth.service';




@Component({
  selector: 'app-cadastro-adm',
  templateUrl: './cadastro-adm.component.html',
  styleUrls: ['../../../index.component.css']
})
export class CadastroAdmComponent implements OnInit {
  
  
  
  
  
  user: Observable<firebase.User>;
  
  razaosocial: string;
  emailAdm: string;
  qtfuncionario: string;
  cnpj: string;
  segmento: string;
  senha: string;
  
  authState: any = null;
  
  empresa: Cadasempresas;
 
  
  constructor(public afAuth: AngularFireAuth,
              public db1 : AngularFireDatabase,
              public auth: AuthService) {
    this.user= this.afAuth.authState;
    
  
    
     
  }
  ngOnInit() {
  }
  
 
Cadastrar(){
  firebase.auth().createUserWithEmailAndPassword(this.emailAdm,this.senha).then((res)=>{
    alert("Administrador cadastrado com sucesso!");
    let usuario= firebase.auth().currentUser;
    
    console.log(this.razaosocial);
    
    this.afAuth.authState.subscribe((auth) => 
    {
    
      this.db1.database.ref('/empresas/' + this.razaosocial + '/registro/')
    .push({
      razaoSocial: this.razaosocial,
      emailAdm: this.emailAdm,
      qtfuncionario: this.qtfuncionario,
      cnpj: this.cnpj,
      segmento: this.segmento,
      senha: this.senha
    })
        this.authState = auth;
       console.log(this.authState);
       this.db1.object(auth.uid).update({
        name: auth.displayName,
          empresa: auth.email
      
      
  }).catch(function (error){
    console.log(error.code);
    console.log(error.message);
    
    alert("falha ao cadastrar administrador");
  });
      
  
      })
  
})}}
