import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './guards/auth-guard';
import { CadProdutos } from './pages/produtos/cad-produtos/cad-produtos';

export const routes: Routes = [
  { path: '', component: Login }, // Rota inicial (Pública)
  { path: 'login', component: Login }, // (Pública)
  { path: 'cadastro', component: Cadastro }, // (Pública)
  
  // O AuthGuard protege esta rota. Só entra se retornar true!
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] }, 
  
  // Redireciona qualquer URL não mapeada para a Home

  //Rotas de produtos
  { path: 'cadastro_produto', component: CadProdutos, canActivate: [AuthGuard] },
  { path: 'pesquisa_produto', component: CadProdutos, canActivate: [AuthGuard] },

  //Rotas de orçamentos
  {path: 'cadastro_orcamento', component: CadProdutos, canActivate: [AuthGuard]},
  {path: 'pesquisa_orcamento', component: CadProdutos, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '' } 
];
