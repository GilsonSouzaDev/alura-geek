import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Product } from 'src/app/interfaces/Products';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{

  public categories: string[] = ['Diversos', 'Console', 'Star Wars'];
  private id: number;
  private delay: number = 2000;

  modelo = {
    id: 0,
    url: '',
    name: '',
    price: 0,
    category: '',
    description: ''
  }
  
 

  constructor(private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private bar: MatSnackBar,
    private fb: FormBuilder


  ) 
  {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(
      product => {
        this.modelo.id = product.id;
        this.modelo.url = product.url;
        this.modelo.name = product.name;
        this.modelo.price = product.price;
        this.modelo.category = product.category;
        this.modelo.description = product.description;
      }
    );
      
  }
  
  ngOnInit(): void {
   
  }

  update(form: NgForm) {
    if (form.invalid) {
      this.bar.open('Existem campos que não foram corretamente preenchidos .', 'Fechar');
    } else {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: 'Deseja realmente alterar este produto?'
      });
      console.log(form.value);
      dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      const produtoData: Product = form.value;
      console.log(produtoData);
      console.log(this.id)
      this.productService.editProduct(produtoData, this.id).subscribe(
        (sucess) => {
          this.dialog.closeAll();
          this.bar.open('Produto editado com sucesso!', 'Fechar', { duration: 5000 });
          this.home();
      },
        (error) => {
          this.onError();
          if (error && error.errors) {
            const produtoError = error.errors;
            this.bar.open('Erro ao atualizar produto. Tente novamente mais tarde.', 'Fechar');
            }
          }
        );
      }
    });

  }
}

  home() {
    setTimeout(() => {
      const routeToNavigate = '/home';
      this.router.navigate([routeToNavigate])
    }, this.delay);
  }

  onError() {
    this.bar.open('Erro ao atualizar produto', '' , {duration: 5000})
  };

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: this.delay,
      panelClass: ['snackbar-style'], // Estilo personalizado, se necessário
    });
  }

  



}
