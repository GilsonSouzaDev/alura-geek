import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Alura-Geek';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll para o topo da página, considerando a altura do seu header fixo
        window.scrollTo(0, this.getHeaderHeight());
      }
    });
  }

  private getHeaderHeight(): number {
    const headerElement = document.getElementById('seuHeaderId'); // Substitua 'seuHeaderId' pelo ID do seu header
    return headerElement ? headerElement.offsetHeight : 0;
  }



}
