import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { LoginComponent } from './components/login/login.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { SucessoLoginComponent } from './components/sucesso-login/sucesso-login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from './guard/auth.guard';
import { SucessoCadastroComponent } from './components/sucesso-cadastro/sucesso-cadastro.component';
import { SucessoLogoutComponent } from './components/sucesso-logout/sucesso-logout.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { SearchComponent } from './components/search/search.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { UpdateComponent } from './components/update/update.component';
import { DialogErroComponent } from './components/dialog-erro/dialog-erro.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    ContentAreaComponent,
    FooterComponent,
    HomeComponent,
    RegisterProductComponent,
    LoginComponent,
    AllProductsComponent,
    MensagemComponent,
    SucessoLoginComponent,
    SucessoCadastroComponent,
    SucessoLogoutComponent,
    OneProductComponent,
    SearchComponent,
    DialogComponent,
    UpdateComponent,
    DialogErroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
