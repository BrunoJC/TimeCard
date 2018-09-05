import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


import { Component, OnInit, Input } from '@angular/core';
import { CadastroAdmComponent } from './body/cadastro/cadastro-adm/cadastro-adm.component';
import { Lista1Component } from './body/ListaFunci/lista1/lista1.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
 styleUrls: ['./index.component.css','./Small.css','Medium.css','Large.css']
})
export class IndexComponent implements OnInit {

  @Input() login : LoginComponent
  constructor() { }

  ngOnInit() {
  }



}
