import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/interfaces/Products';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  allproduct?: Product[] = [];

  constructor(
    private productService: ProductService,
    private loginService: LoginService
  ) 
  {
    this.productService.displayProducts().subscribe((products) => {
      this.allproduct = products;

  });

  }

  estaLogado(){
    return this.loginService.isLoginGet();
  }

}
