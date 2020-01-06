import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/shared/interfaces/users';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
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
