import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
//se creo un modulo para el componente q ya estaba creado --module app importa el modulo al modulo raiz
//ng g m posts/posts --module app --flat --routing

@NgModule({
  declarations: [ 
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
