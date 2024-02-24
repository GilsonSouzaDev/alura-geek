import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { LoginComponent } from './components/login/login.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SucessoLoginComponent } from './components/sucesso-login/sucesso-login.component';
import { AuthGuard } from './guard/auth.guard';
import { SucessoLogoutComponent } from './components/sucesso-logout/sucesso-logout.component';
import { SucessoCadastroComponent } from './components/sucesso-cadastro/sucesso-cadastro.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},  
  {path: 'cadastro', component: RegisterProductComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'allproducts', component: AllProductsComponent},
  {path: 'oneproduct/:id', component: OneProductComponent},
  {path: 'search', component: SearchComponent},
  {path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard]},
  {path: 'sucessoLogin', component: SucessoLoginComponent},
  {path: 'sucessoLogout', component: SucessoLogoutComponent},
  {path: 'sucessoCadastro', component: SucessoCadastroComponent}

  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
