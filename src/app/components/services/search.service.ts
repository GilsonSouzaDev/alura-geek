import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, first, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API = 'https://api-fake-product.onrender.com/products';

  private productsSearchSubject = new BehaviorSubject<Product[]>([]);
  public productsSearch$ = this.productsSearchSubject.asObservable();

  emitirEvento = new EventEmitter<Product[]>();

  constructor
    (
      private httpClient: HttpClient,
      private router: Router
    ) {


  }

  searchProducts(valor: string): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.API + '?name_like=' + valor)
      .pipe(
        tap(products => {
          this.productsSearchSubject.next(products);
          console.log(products);
          // Redireciona para a rota /search se houver resultados
          if (products.length > 0) {
            // Importante: Certifique-se de injetar Router no serviço ou encontrar uma maneira adequada de realizar o redirecionamento aqui.
            this.router.navigate(['/search']);
          }
        })
      );
  }


}
