import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin() {
    // Para ver os dados no Firefox: inspecionar -> armazenamento -> armazenamento local -> localhost
    // Para ver os dados no Chrome: inspecionar -> aplicativo -> armazenamento -> armazenamento local -> localhost
    localStorage.setItem('token', '123456789')
  }

  doLogout() {
    localStorage.clear()
  }
}
