import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPanicComponent } from './shared/components/button-panic/button-panic.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';


const routes: Routes = [
  {path:'panic', component:ButtonPanicComponent, outlet:'buttonPanic'},
  {path:'contact', component: ContactComponent, canDeactivate:[CanDeactivateGuard]},
  {path:'', redirectTo:'/users', pathMatch:'full'},//con el patchMatch full el path debe coindicir tal cual pero si se usa prefix desde que este de primeras la parte del path lo redirige exitosamente
 // {path:'**', component: NotFoundComponent} //ESTE SE PONE CUANDO LA URL ESTA MAL ENTONCES SE REDIRIGE A UN COMPONENTE NOTFOUND Q SE DEBE CREAR 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
