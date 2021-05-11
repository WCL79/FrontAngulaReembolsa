import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './../despesa/formulario/formulario.component';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { TabelaComponent } from './cadastrar-colaborador/tabela/tabela.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'zupper/:cpf', component: FormularioComponent },
  { path: 'listar/zupper', component: TabelaComponent },
  { path: 'cadastrar', component: CadastrarColaboradorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AutenticacaoRoutingModule {}
