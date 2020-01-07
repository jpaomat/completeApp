import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { CanActivateGuard } from '../guards/can-activate.guard';


const routes: Routes = [
  {path:'users', component:UsersComponent, canActivateChild:[CanActivateGuard],
    children:[
      {path:"", component:UsersListComponent},
      {path:":id", component:UsersDetailsComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
