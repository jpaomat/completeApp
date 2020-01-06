import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from '../shared/services/http-request.service';
import { Users } from '../shared/interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  baseUrlUsers= environment.apiURL+'users';
  users:Users[];
  constructor(
    private routerModule: Router,
    private httRequestService: HttpRequestService
    ) { }
  title="Users";
  ngOnInit() {
    this.getListUsers();
  };
  goToPosts(){
    this.routerModule.navigate(['/posts']);
  }
  getListUsers(){
    this.httRequestService.getListUsers(this.baseUrlUsers).subscribe((apiUsers: Users[])=>{
      this.users=apiUsers;
    },err=> console.error(err)
    )
  };
  viewPost(id:string){
    this.routerModule.navigate(['/users',id,'posts'])
  }

}
