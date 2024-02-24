import { Component, OnInit, Renderer2 } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit{

searchControl = new FormControl(); 
exibirAbaPesquisa: boolean = false;

screenSize!: { width: number, height: number };
delay: number = 4000;

displaySearch = '';
displayPosition = '';
maxSearch = '';

  constructor(private loginService: LoginService,
              private router: Router,
              private searchService: SearchService,
              private renderer: Renderer2
             
             )
  {
    this.getScreenSize();
      this.renderer.listen('window', 'resize', (event) => {
      this.getScreenSize();
      });
    

    this.searchService.productsSearch$ = this.searchControl.valueChanges
    .pipe(
      map(value => value.trim()),
      tap(value => console.log(value)),
      distinctUntilChanged(),
      debounceTime(200),
      filter(value => value.length > 1),
      switchMap(value => this.searchService.searchProducts(value))
    );
    
    
      
  }

  ngOnInit(): void {
      
    
      this.searchControl.valueChanges
        .subscribe(value => {
          if(value.length > 0){
            this.router.navigate(['/search']);
          }});
         
  }
  
  logOut(){
    this.loginService.isLoginSet(false);
    this.router.navigate(['/sucessoLogout']);
    this.home();
  }

 
  estaLogado(){
    return this.loginService.isLoginGet();
  }


  home(){
    setTimeout(() => {
      const routeToNavigate = '/home';
      this.router.navigate([routeToNavigate])
    }, this.delay);
  }

  toggleAbaPesquisa() {
    this.exibirAbaPesquisa = !this.exibirAbaPesquisa;
    if(this.screenSize.width > 760)
    {
      this.displaySearch = 'block'
      this.maxSearch = 'none'
      
    }
    else if(this.screenSize.width <= 760 && this.exibirAbaPesquisa == true)
    { 
          
      this.displaySearch = 'block'
      this.displayPosition = 'absolute'
      this.maxSearch = 'none'     
    }
    else
    {
      this.displaySearch = 'none'
      this.displayPosition = 'relative'
      this.maxSearch = '40px'
      
    }
  }

  getScreenSize() {
    this.screenSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

 
  

}
