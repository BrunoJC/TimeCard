
import { Component, OnInit, Inject } from '@angular/core';
import { Funci } from '../Models/funcio.model';
import { AddFuncService } from '../add-func.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { create } from 'domain';

@Component({
  selector: 'app-funci-dialog',
  templateUrl: './funci-dialog.component.html',
  styleUrls: ['./funci-dialog.component.css']
})
export class FunciDialogComponent implements OnInit {

  dialogTitle = 'new task';
  name : Funci = {name:'', uid :'', turno:'', empresa:'', profissao:'',cpf:'', rg:'', senha:'' , emailUser:''}

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    //Para fechar o Dialog depois de salvo
    private dialogref: MatDialogRef<FunciDialogComponent>,
    private AddFuncService:AddFuncService
  ) { }

  ngOnInit(): void {

      if (this.data){
        this.dialogTitle = 'Update task';
        this.name = this.data.task;
      }
  }

  Onsave(){
    this.AddFuncService.creat(this.name);
    this.dialogref.close();
    
  }

  

}
