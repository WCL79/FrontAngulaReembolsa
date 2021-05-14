import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./autenticacao/autenticacao.module').then(
        (m) => m.AutenticacaoModule
      ),
  },
  {
    path: 'despesa',
    loadChildren: () =>
      import('./despesa/despesa.module').then((m) => m.DespesaModule),
  },
  {
    path: 'categoria',
    loadChildren: () =>
      import('./categoria/categoria.module').then((m) => m.CategoriaModule),
  },
  {
    path: 'zupper',
    loadChildren: () =>
      import('./zupper/zupper.module').then((m) => m.ZupperModule),
  },
  {
    path: '**',
    redirectTo: 'despesa',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
