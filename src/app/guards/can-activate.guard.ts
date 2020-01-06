import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(
    private routerService: Router,
    private authService: AuthService //servicio q simula el logeo
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn(state.url)){//a la funcion se le pasa la url que estaba intentando acceder el usuario
        return true; //si esta logueado se devuelve true
      }
      this.routerService.navigate(['/login']); //sino se redirecciona a la ventana de login
      return false;
  }
  
}
