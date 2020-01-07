import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CanActivateGuard } from '../guards/can-activate.guard';
import { PostsResolverGuard } from '../guards/posts-resolver.guard';


const routes: Routes = [
  {path:'posts',component:PostsComponent,canActivate: [CanActivateGuard], resolve: {posts: PostsResolverGuard}},
  {path:'users/:id/posts',component:PostsComponent, canActivate: [CanActivateGuard], resolve: {posts: PostsResolverGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
