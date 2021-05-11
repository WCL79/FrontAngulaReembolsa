import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AutenticacaoRoutingModule } from './autenticacao.routing';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { TabelaComponent } from './cadastrar-colaborador/tabela/tabela.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputMaskModule,
    FileUploadModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ],

  declarations: [
    LoginComponent,
    CadastrarColaboradorComponent,
    TabelaComponent,
  ],
})
export class AutenticacaoModule {}
