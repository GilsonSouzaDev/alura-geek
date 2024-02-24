import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  dataAtual = new Date();

  mesAtual = this.dataAtual.toLocaleString('pt-BR', { month: 'long' });  
  
  constructor(
  ) 
  {
    console.log(this.mesAtual.charAt(0).toUpperCase() + this.mesAtual.slice(1));
  } 

}
