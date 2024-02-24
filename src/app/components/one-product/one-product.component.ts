import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { LoginService } from '../services/login.service';
import {
  MatSnackBar
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent {

  public product: any;
  private id: number;
  teste!: any[];
  delay: number = 5000;

  constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private loginService: LoginService,
        private router: Router,
        private snackBar: MatSnackBar
  )
  {
    
    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id).subscribe(
      (response) => {
        this.product = response;
        console.log(this.product);
      },
      (error) => {
        console.log(error);
      }
    );

    this.productService.displayProducts()
    .subscribe((products) => {
      this.teste = products;  
    });

  }
  
  estaLogado(){
    return this.loginService.isLoginGet();
  }

  excluirProduto(){
    if(this.teste.length <= 18 ){
      this.openSnackBar('Não foi possivel excluir produto, (Limite minimo 18 produtos)');
    }else{
      this.productService.deleteProduct(this.id).subscribe(
        (response) => {
          this.openSnackBar('Produto excluido com sucesso');
          this.router.navigateByUrl('/home');
        },
        (error) => {
          console.log(error);
          this.openSnackBar('Erro ao excluir produto');
        }
        );
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: this.delay,
      panelClass: ['snackbar-style'], // Estilo personalizado, se necessário
    });
  }


}
