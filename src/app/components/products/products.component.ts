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

    this.starWarsProducts = this.shuffleArray(this.starWarsProducts).slice(0,6);
    this.consoleProducts = this.shuffleArray(this.consoleProducts).slice(0,6);
    this.diversosProducts = this.shuffleArray(this.diversosProducts).slice(0,6);

    this.temProduto = this.products.length;

    });

  }
  ngOnInit(): void {

  }

  shuffleArray(array: Product[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  

  

}
