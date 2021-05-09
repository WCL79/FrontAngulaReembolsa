import { TabelaComponent } from './tabela/tabela.component';
import { FormularioComponent } from './formulario/formulario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: 'despesa', component: FormularioComponent},
  { path: 'despesa/:codigo', component: FormularioComponent },
  { path: 'listar/despesa', component: TabelaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaRoutingModule { }
