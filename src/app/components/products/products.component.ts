import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Products';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements  OnInit{

  showAllProducts: boolean  = true;
  temProduto: number = 0;
  
  products?: Product[];
  starWarsProducts?: Product[];
  consoleProducts?: Product[];
  diversosProducts?: Product[];

  constructor(
    private productService: ProductService
  )
  {
    this.productService.displayProducts().subscribe((products) => {
      this.products = products;
      
    this.starWarsProducts = this.products?.filter(p => p.category === 'Star Wars');
    this.consoleProducts = this.products?.filter(p => p.category === 'Console');
    this.diversosProducts = this.products?.filter(p => p.category === 'Diversos');

    this.starWarsProducts = this.starWarsProducts?.slice(0, this.starWarsProducts.length).sort(() => Math.random() - 0.5);
    this.consoleProducts = this.consoleProducts?.slice(0, this.consoleProducts.length).sort(() => Math.random() - 0.5);
    this.diversosProducts = this.diversosProducts?.slice(0, this.diversosProducts.length).sort(() => Math.random() - 0.5);

    this.temProduto = this.products.length;

 
    });

  }
  ngOnInit(): void {

  }

  
  

  

  

}
