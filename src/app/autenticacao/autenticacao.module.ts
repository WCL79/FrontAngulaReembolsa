import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { AutenticacaoRoutes } from './autenticacao.routing';
import { LoginComponent } from './login/login.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './cadastrar-colaborador/tabela/tabela.component';


@NgModule({
  imports: [CommonModule,
    AutenticacaoRoutes,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputMaskModule,
    FileUploadModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],


  declarations: [LoginComponent, CadastrarColaboradorComponent, TabelaComponent],
})
export class AutenticacaoModule { }
