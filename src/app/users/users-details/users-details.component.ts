import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/shared/interfaces/users';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  baseUrlUsers= environment.apiURL+'users'
  user: Users;
  constructor(
    private routerActive: ActivatedRoute,
    private httpRequestService: HttpRequestService
  ) { }

  ngOnInit() {
    this.userDetails();
  };
  userDetails(){
    this.routerActive.paramMap.subscribe((parametros)=>{
      if(parametros.has('id')){
        this.httpRequestService.getDetailsUser(this.baseUrlUsers, parametros.get('id')).subscribe((apiUser: Users)=>{
          this.user=apiUser;
        })
      }
    })
  };
}
