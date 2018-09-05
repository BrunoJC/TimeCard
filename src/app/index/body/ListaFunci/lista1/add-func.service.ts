
import { Usuario } from './../../../../../../../TimeCard/src/app/index/login/usuario';
import { AuthService } from './../../../login/auth.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { create } from 'domain';
import { Injectable, enableProdMode } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '../../../../../../node_modules/angularfire2/firestore';
import { Funci } from './Models/funcio.model';
import { promise } from '../../../../../../node_modules/protractor';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { auth } from '../../../../../../node_modules/firebase';
import { LoginComponent } from '../../../login/login.component';
import { Lista1Component } from './lista1.component';
import { FunciDialogComponent } from './funci-dialog/funci-dialog.component';
import { tokenKey } from '@angular/core/src/view';
import { CadastroAdmComponent } from 'src/app/index/body/cadastro/cadastro-adm/cadastro-adm.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/*import { Usuario } from '../../../login/usuario';*/


@Injectable({
  providedIn: 'root'
})
export class AddFuncService {

  funcionario: AngularFirestoreCollection<Funci>;
  funci: Funci;
  itemsRef: AngularFireList<Funci>;
  items ;
  UsuarioEmail;
  empresa5: FunciDialogComponent;
  authState: any = null;
  usuario;
  criaUsuario;

name : Funci = {name:'', uid :'', turno:'', empresa:'', profissao:'',cpf:'', rg:'', senha:'' , emailUser:''}

  

  constructor(
    public db: AngularFirestore,
    public db1: AngularFireDatabase,
    public auth: AuthService,
    public afAuth : AngularFireAuth
   
    
    
    
  ) { auth.user$.subscribe( user => this.UsuarioEmail = user)
    this.setFuncio();
   }
    private setFuncio(): void {
    this.funcionario = this.db.collection<Funci>('/empresas');
  }

   

  
criar(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.name.emailUser ,this.name.senha)
    .catch(error => console.log(error)).then(()=> this.afAuth.authState.subscribe((auth) => {
      alert("Administrador cadastrado com sucesso!");
      console.log(auth);

      this.criaUsuario(auth);
      this.usuario = auth.uid;

    }))
      
  }
    
    creat(auth) { 
      
     
      this.db1.object('/usuario/' + auth.uid)
    .set({
      nome : this.name.name,
      uid: this.name.uid,
      turno: this.name.turno,
      empresa: this.name.empresa,
      email: this.name.emailUser,
      senha: this.name.senha,
      profissão: this.name.profissao,
      cfp: this.name.cpf,
      rg:this.name.rg
    });

        
}
      

  



    istAll (){
      try{
        
        this.itemsRef = this.db1.list('/usuarios/');
        this.items = this.db1.list('/usuarios/' + this.UsuarioEmail).valueChanges();
        return this.items;
        
      }catch (error){
        console.log(error);
      }
    }


    deleteDialog(funci : Funci): Promise <void>{
        return this.itemsRef.remove();
      };


      
    
  
     
  


  

update (funci :Funci): Promise<void>{
  return this.funcionario.doc<Funci>(funci.uid)
  .update(funci);
}

delete (funci : Funci): Promise <void>{
  return this.funcionario.doc<Funci>(funci.uid)
  .delete();
}

get (uid : string) : Observable <Funci>{
  return this.funcionario.doc<Funci>(uid).valueChanges();

}



}
