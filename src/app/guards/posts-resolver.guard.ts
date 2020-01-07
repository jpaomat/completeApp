import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router, ActivatedRoute } from '@angular/router';
import { Observable, from, empty } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Post } from '../shared/interfaces/post';
import { HttpRequestService } from '../shared/services/http-request.service';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverGuard implements Resolve<Post[]> {
  baseUrlPosts= environment.apiURL+'posts';
  posts: Post[];
  constructor(
    private httpRequestService: HttpRequestService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    if(route.paramMap.has('id')){
      return this.httpRequestService.getPostFromUser(this.baseUrlPosts, route.paramMap.get('id')).pipe(catchError(err=>{
        this.routerService.navigate(['/users']);
        return empty;
      }))
    }else{
      this.httpRequestService.getListPosts(this.baseUrlPosts);
    }
  }
  
  
}
