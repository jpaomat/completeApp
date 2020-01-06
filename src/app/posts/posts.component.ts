import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from '../shared/services/http-request.service';
import { Post } from '../shared/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  baseUrlPosts= environment.apiURL+'posts';
  title="Posts";
  posts: Post[];
  constructor(
    private routerModule: Router,//modulo de ruteo, para navegar mediante un evento
    private routerActiveService: ActivatedRoute,//este servicio permite acceder a la ruta activada
    private httpRequestService: HttpRequestService
    ) { }
  
  ngOnInit() {
    this.showPosts();
  };
  goToUsers(){
    this.routerModule.navigate(['/users']);
  };
  showPosts(){
    //se usa un observable para acceder al id de la ruta
    this.routerActiveService.paramMap.subscribe((parametros)=>{
      if(parametros.has('id')){ //se verfifica si el id esta en la url
        this.httpRequestService.getPostFromUser(this.baseUrlPosts ,parametros.get('id')).subscribe((apiPosts: Post[])=>{
          this.posts=apiPosts;
        })
      }else{
        this.httpRequestService.getListPosts(this.baseUrlPosts).subscribe((apiPosts: Post[])=>{
          this.posts=apiPosts;
        })
      }
    })
  }
}
