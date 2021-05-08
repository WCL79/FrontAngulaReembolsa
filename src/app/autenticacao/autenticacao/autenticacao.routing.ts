import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastrar', component: CadastroClienteComponent }
];

export const AutenticacaoRoutes = RouterModule.forChild(routes);
