import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesaFormularioComponent } from './formulario/formulario.component';
import { DespesaTabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: 'novo', component: DespesaFormularioComponent },
  { path: 'lista', component: DespesaTabelaComponent },
  { path: 'editar/:codigo', component: DespesaFormularioComponent },
  { path: '', redirectTo: 'lista' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaRoutingModule {}
