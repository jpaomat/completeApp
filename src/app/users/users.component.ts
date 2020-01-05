import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private routerModule: Router) { }
  title="Users";
  ngOnInit() {
  };
  goToPosts(){
    this.routerModule.navigate(['/posts']);
  }

}
