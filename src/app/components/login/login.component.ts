import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: string = 'admin';
  password: string =  'admin';

  delay: number = 2000;
  

  constructor(
      private router: Router, 
      private loginService: LoginService
  )
  {  
   
  }

 
  logar(formLogin: NgForm)
  {
    if (formLogin.value.user === this.usuario && formLogin.value.password === this.password) {
        this.loginService.isLoginSet(true);
        this.router.navigate(['/sucessoLogin']);
        this.home();      
    }else{
        alert('usuario ou senha incorretos');
        formLogin.resetForm();
    }    
  }

  home(){
    setTimeout(() => {
      const routeToNavigate = '/home';
      this.router.navigate([routeToNavigate])
    }, this.delay);
  }
  

}



