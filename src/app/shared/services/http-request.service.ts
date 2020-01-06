import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Users } from 'src/app/shared/interfaces/users';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  //baseUrlUsers= environment.apiURL+'users';
  //baseUrlPosts= environment.apiURL+'posts';
  constructor(private httpService: HttpClient) { }
  getListUsers(baseUrlUsers: string):Observable<Users[]>{
    return this.httpService.get<Users[]>(baseUrlUsers);
  };
  getListPosts(baseUrlPosts:string):Observable<Post[]>{
    return this.httpService.get<Post[]>(baseUrlPosts);
  }
  getPostFromUser(baseUrlPosts: string, userId: string):Observable<Post[]>{
    const url= `${baseUrlPosts}?userId=${userId}`; 
    return this.httpService.get<Post[]>(url);
  }
}
