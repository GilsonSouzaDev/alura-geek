import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Products';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private readonly API = 'https://api-fake-product.onrender.com/products';
  http: any;

  constructor(private httpClient: HttpClient) { }

  displayProducts() {
    return this.httpClient.get<Product[]>(this.API)
    .pipe(
      first(),
      tap(products => console.log(products))
    );
  }

  getProduct(id: number){
      return this.httpClient.get<Product>(`${this.API}/${id}`)
      .pipe(
        first(),
        tap(products => console.log(products))
      );

  }


  editProduct(product: Product, id: number): Observable<Product> {
    const url = `${this.API}/${id}`;
    return this.httpClient.put<Product>(url, product).
    pipe(
      tap(updatedProduct => console.log(`Product atualizado: ${updatedProduct.id}`))
    );
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<void>(url).pipe(
      tap(() => console.log(`Product deleted: ${id}`))
    );
  }

  saveProduct(product: Product): Observable<Product> {
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Product>(this.API, product);
  }



}
