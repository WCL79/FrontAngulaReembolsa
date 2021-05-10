import { TabelaComponent } from './despesa/tabela/tabela.component';
import { FormularioComponent } from './despesa/formulario/formulario.component';
import { LoginComponent } from './autenticacao/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'despesa', component: FormularioComponent},
  { path: 'despesa/:codigo', component: FormularioComponent },
  { path: 'listar/despesa', component: TabelaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
