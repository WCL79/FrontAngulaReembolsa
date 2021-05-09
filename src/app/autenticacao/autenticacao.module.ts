import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { AutenticacaoRoutes } from './autenticacao.routing';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, AutenticacaoRoutes, FormsModule, PasswordModule],
  declarations: [LoginComponent, CadastrarColaboradorComponent],
})
export class AutenticacaoModule { }
