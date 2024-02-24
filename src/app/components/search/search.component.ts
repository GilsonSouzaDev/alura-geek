import { Component,  OnInit} from '@angular/core';
import { Product } from 'src/app/interfaces/Products';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  
  result$: Observable<Product[]> | any;
  valor: string = '';

  menuOpen: boolean = false;
  delay: number = 4000;

  constructor(
        private router: Router,
        private search: SearchService,
        private loginService: LoginService 
  ) 
  { 
   
     
  }
  ngOnInit(): void {
    this.search.productsSearch$.subscribe(
      (products: Product[]) => {
        this.result$ = products;
        console.log(products);
      },
      
    );
    
  }

  

  toggleUserMenu(){
    this.menuOpen = !this.menuOpen; 
  }

  estaLogado(){
    return this.loginService.isLoginGet();
  }
  //

  logOut(){
    this.loginService.isLoginSet(false);
    this.router.navigate(['/sucessoLogout']);
    this.home();
  }

  home(){
    setTimeout(() => {
      const routeToNavigate = '/home';
      this.router.navigate([routeToNavigate])
    }, this.delay);
  }

  haveProduct(): boolean {
    // Certifique-se de que this.result$ está definido antes de acessar length
    return this.result$ && this.result$.length > 0;
  }
  
  
    
}

 
  


