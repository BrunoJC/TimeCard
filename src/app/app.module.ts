import { environment } from './../environments/environment';
import { ItemService, ItemService2 } from './index/item/service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './index/app.routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from './../environments/firebaseconfig';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { RodapeComponent } from './index/rodape/rodape.component';
import { BodyComponent } from './index/body/body.component';
import { FormsModule } from '@angular/forms';
import { CadastroAdmComponent } from './index/body/cadastro/cadastro-adm/cadastro-adm.component';
import { Lista1Component } from './index/body/ListaFunci/lista1/lista1.component';
import { CadastroFuncComponent } from './index/body/cadastro/cadastro-func/cadastro-func.component';
import { LoginComponent } from './index/login/login.component';
import { AuthService } from './index/login/auth.service';
import { EditorComponent } from './index/body/ListaFunci/lista1/editor/editor.component';
import { LixeiraComponent } from './index/body/ListaFunci/lista1/lixeira/lixeira.component';
import { VisualizadorComponent } from './index/body/ListaFunci/lista1/visualizador/visualizador.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FunciDialogComponent } from './index/body/ListaFunci/lista1/funci-dialog/funci-dialog.component';

import { 
  
  MatDialogModule, 
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatListModule,
  MatSnackBarModule,
  

} from '@angular/material';
import { EventEmitter } from 'events';
import { LoginUserComponent } from './index/body/cadastro/login-user/login-user.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    RodapeComponent,
    BodyComponent,
    CadastroAdmComponent,
    Lista1Component,
    CadastroFuncComponent,
    LoginComponent,
    EditorComponent,
    LixeiraComponent,
    VisualizadorComponent,
    FunciDialogComponent,
    LoginUserComponent,
    
   
  ], 
  
  entryComponents: [

    FunciDialogComponent

  ],


  imports: [
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule
    
   
    
  ],
  providers: [ItemService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
