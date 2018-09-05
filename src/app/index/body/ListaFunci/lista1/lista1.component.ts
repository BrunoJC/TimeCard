import { LoginComponent } from './../../../login/login.component';
import { Usuario } from './../../../login/usuario';
import { FunciDialogComponent } from './funci-dialog/funci-dialog.component';
import { CadastroFuncComponent } from './../../cadastro/cadastro-func/cadastro-func.component';
import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../../../index.component';
import * as firebase from 'firebase/app';
import { Http } from '@angular/http';
import { tokenKey } from '@angular/core/src/view';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from '../../../../../../node_modules/rxjs';
import { AngularFirestore } from '../../../../../../node_modules/angularfire2/firestore';
import { Funci } from './Models/funcio.model';
import { AddFuncService } from './add-func.service';
import { MatDialog, MatDialogConfig, MatMenuContent, MatMenuTrigger } from '../../../../../../node_modules/@angular/material';
import { AuthService } from '../../../login/auth.service';
import { AngularFireAuth } from '../../../../../../node_modules/angularfire2/auth';



@Component({
  selector: 'app-lista1',
  templateUrl: './lista1.component.html',
  styleUrls: ['./../../../index.component.css','./lista1.component.css']
})
export class Lista1Component implements OnInit {

  funcionario$ : Observable<any[]>;
  UsuarioEmail;
  authState: any = null;

  constructor( 
    private  db1 : AngularFireDatabase,
    private dialog: MatDialog,
    private AddFuncService : AddFuncService,
    public auth: AuthService,
    public afAuth: AngularFireAuth
  ) {
    
    auth.user$.subscribe( user => this.UsuarioEmail = user)

    
  }
    
      ngOnInit():void {

        this.afAuth.authState.subscribe((auth) => 
        {
          this.authState = auth;
      
      this.funcionario$ = this.db1.list("/usuarios/" + auth.uid).valueChanges();
      console.log(this.UsuarioEmail);
       }) }

      

      showDialog(task?: Funci): void {
    
    const config : MatDialogConfig<any> = (task) ? {data: {task}} : null;
    this.dialog.open(FunciDialogComponent, config);
    console.log(task);
  }


  delete(){

    this.AddFuncService.deleteDialog(this.AddFuncService.UsuarioEmail);
  }

}
