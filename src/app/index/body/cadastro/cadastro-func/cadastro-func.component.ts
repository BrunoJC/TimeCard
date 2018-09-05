import { ItemService } from './../../../item/service.service';
import { ItemService2 } from '../../../item/service.service';
import { Item } from './../../../item/item';
import { IndexComponent } from './../../../index.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { create } from 'domain';



@Component({
  selector: 'app-cadastro-func',
  templateUrl: './cadastro-func.component.html',
  styleUrls: ['./../../../index.component.css']
})
export class CadastroFuncComponent  implements OnInit {

 user: Observable<firebase.User>;
  
 nome :string
email:string
senha:string
urlImagem:string

 constructor (){ 
  

  }
 
  

  addItem1 () {

    var data = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      urlImagem: this.urlImagem
  };

      
    const _dbRefObject = firebase.database().ref('Empresas');
    const dbRefList = _dbRefObject.child('Abb').push(data);
   
}
    
   
   
  
  
  
 
 ngOnInit() {};

  
}

  
