import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogin: boolean = false;

  constructor() { }


  isLoginGet(): boolean {
    return this.isLogin;
  }

  isLoginSet(novoValor: boolean): void {
    this.isLogin = novoValor;
  }





}
