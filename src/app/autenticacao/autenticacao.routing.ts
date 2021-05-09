
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarColaboradorComponent }
];

export const AutenticacaoRoutes = RouterModule.forChild(routes);
