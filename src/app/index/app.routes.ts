import { LixeiraComponent } from './body/ListaFunci/lista1/lixeira/lixeira.component';
import { CadastroFuncComponent } from './body/cadastro/cadastro-func/cadastro-func.component';
import { Lista1Component } from './body/ListaFunci/lista1/lista1.component';
import { CadastroAdmComponent } from './body/cadastro/cadastro-adm/cadastro-adm.component';
import { IndexComponent } from './index.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './body/ListaFunci/lista1/editor/editor.component';
import { VisualizadorComponent } from './body/ListaFunci/lista1/visualizador/visualizador.component';
import { LoginUserComponent } from './body/cadastro/login-user/login-user.component';

export const ROUTES: Routes = [
    {path:'index', component: IndexComponent},
    {path:'header',component:HeaderComponent},
    {path:'rodape',component:RodapeComponent},
    {path:'body',component:BodyComponent},
    {path:'cadastroadm',component:CadastroAdmComponent},
    {path:'cadastrofunc',component:CadastroFuncComponent},
    {path:'lista1',component:Lista1Component},
    {path:'',component:LoginComponent},
    {path:'editor',component:EditorComponent},
    {path:'excluir',component:LixeiraComponent},
    {path:'loginUser',component: LoginUserComponent},
    {path:'visualizar',component:VisualizadorComponent}
]