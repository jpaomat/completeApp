import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface allowDeactivate{ //se crea la interfaz que define una funcion la cual debe retornar un observable de booleano, una promesa de booleano o un booleano
  allowLeaveRoute:()=>Observable<boolean> | Promise<boolean>| boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<allowDeactivate> {
  //el componente que quiera usar este route guard debe implementar la interfaz allowDeactivate, por lo que debe implementar una funcion (allowLeaveRoute)que retorne un verdadero si desea que el usuario se quiere retirar sin problemas o falso sino se desea retirar 
  canDeactivate(component: allowDeactivate){ //la funcion recibe el componente del que desea o no salir
    return component.allowLeaveRoute?component.allowLeaveRoute():true;
  } 
}

