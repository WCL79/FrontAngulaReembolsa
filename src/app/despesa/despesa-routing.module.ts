import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesaFormularioComponent } from './formulario/formulario.component';
import { DespesaTabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', component: DespesaFormularioComponent },
  { path: 'lista', component: DespesaTabelaComponent },
  { path: ':codigo', component: DespesaFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaRoutingModule {}
