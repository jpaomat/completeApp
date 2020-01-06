import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  routeRedirect='';
  constructor(
    private authService: AuthService,
    private routerService: Router
  ) { }

  ngOnInit() {
  };
  login(){
    this.authService.login();
    this.routeRedirect=this.authService.urlUserTryAccess;
    //console.log(this.routeRedirect);
    this.authService.urlUserTryAccess='';
    this.routerService.navigate([this.routeRedirect]);
  }

}
