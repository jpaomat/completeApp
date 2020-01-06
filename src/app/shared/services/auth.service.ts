import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//ESTE SERVICIO SIMULA SI UN USUARIO ESTA LOGUEADO O NO
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ISLOGGEDKEY = 'islogged';
  public urlUserTryAccess = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login() {
    localStorage.setItem(this.ISLOGGEDKEY, 'true');//Almacena en el local storage si el usuario esta logueado
    this.changeLoginStatusSubject.next(true);//atraves de un observable emite un valor de verdadero si esta logueado
  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);//atraves de un observable emite un valor de falso sino esta logueado
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);//se verifica que el usuario esta logeado
    if (!isLogged) {//sino esta logueado se guarda la url a la cual estaba intentando enttrar
      this.urlUserTryAccess = url;
      return false;
    }
    return true;
  }
}
