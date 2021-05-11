import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './despesa/formulario/formulario.component';
import { TabelaComponent } from './despesa/tabela/tabela.component';

const routes: Routes = [
  { path: 'despesa', component: FormularioComponent },
  { path: 'despesa/:codigo', component: FormularioComponent },
  { path: 'listar/despesa', component: TabelaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
