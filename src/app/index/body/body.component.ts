import { ItemService } from './../item/service.service';
import { ItemService2 } from '../item/service.service';
import { Item } from './../item/item';
import { IndexComponent } from './../index.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./../index.component.css']
})
export class BodyComponent extends ItemService  implements OnInit {

  
  nome:string;
  email:string;
  senha:string;
  urlImagem:string;

  user: Observable<firebase.User>;

  

  ngOnInit() {
  }

  addItem() {
    this.itemsRef.push({ nome: this.nome })
    this.itemsRef.push({ email: this.email })
    this.itemsRef.push({ senha: this.senha })
    this.itemsRef.push({ urlImagem: this.urlImagem })
    
    alert("Cadastro de funcionário com sucesso")

  }

  cadastroEmail() {
    //console.log(this.email,this.senha);
    firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((res:any)=>{
      console.log(res);
      let usuario = firebase.auth().currentUser;
      usuario.updateProfile({
        displayName:this.nome,
        photoURL:this.urlImagem
      });
    }).catch((erro:any)=>{
      console.log(erro);
    });

}}