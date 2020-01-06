import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'posts', component:PostsComponent},
  {path:'users/:id/posts', component:PostsComponent},
  {path:'', redirectTo:'/users', pathMatch:'full'},//con el patchMatch full el path debe coindicir tal cual pero si se usa prefix desde que este de primeras la parte del path lo redirige exitosamente
 // {path:'**', component: NotFoundComponent} //ESTE SE PONE CUANDO LA URL ESTA MAL ENTONCES SE REDIRIGE A UN COMPONENTE NOTFOUND Q SE DEBE CREAR 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
