import { Product } from './../../interfaces/Products';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent {

  categories: string[] = ['Diversos', 'Consoles', 'Star Wars'];

  delay: number = 2000;

  constructor(private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) { }

  register(form: NgForm) {
    if (form.valid) {
      const newProduct: Product = {
        url: form.value.url,
        name: form.value.nomeProduto,
        price: form.value.price,
        category: form.value.categorie,
        description: form.value.description,
        id: 0
      };

      this.productService.saveProduct(newProduct).subscribe({
        next: product => {
          console.log('Saved with success', product);
          // Adicione uma mensagem de sucesso ou redirecionamento aqui, se necessário.
          this.openSnackBar('Produto cadastrado com sucesso');
          this.router.navigateByUrl('/sucessoCadastro');
          this.home();
        },
        error: err => {
          console.log('Error', err);
          this.openSnackBar('Erro ao cadastrar produto');
          // Adicione uma mensagem de erro aqui, se necessário.
        }
      });
    } else {
      this.openSnackBar('Preencha todos os campos');
    }

  }

  home() {
    setTimeout(() => {
      const routeToNavigate = '/home';
      this.router.navigate([routeToNavigate])
    }, this.delay);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: this.delay,
      panelClass: ['snackbar-style'], // Estilo personalizado, se necessário
    });
  }

}
