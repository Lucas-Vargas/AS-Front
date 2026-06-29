import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './guards/auth-guard';
import { CadProdutos } from './pages/produtos/cad-produtos/cad-produtos';
import { PesqProdutos } from './pages/produtos/pesq-produtos/pesq-produtos';

export const routes: Routes = [
  { path: '', component: Login }, // Rota inicial (Pública)
  { path: 'login', component: Login }, // (Pública)
  { path: 'cadastro', component: Cadastro }, // (Pública)
  { path: 'home', component: Home},
  
  // O AuthGuard protege esta rota. Só entra se retornar true!
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] }, 
  
  // Redireciona qualquer URL não mapeada para a Home

  //Rotas de produtos
  { path: 'pesquisa_produto', component: PesqProdutos, canActivate: [AuthGuard] },

  //Rotas de orçamentos

  { path: '**', redirectTo: '' } 
];
