import { FormularioComponent } from './../despesa/formulario/formulario.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { TabelaComponent } from './cadastrar-colaborador/tabela/tabela.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'zupper/:cpf', component: FormularioComponent },
  { path: 'listar/zupper', component: TabelaComponent },
  { path: 'cadastrar', component: CadastrarColaboradorComponent},
];

export const AutenticacaoRoutes = RouterModule.forChild(routes);
