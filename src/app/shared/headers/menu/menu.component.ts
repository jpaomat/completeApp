import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userLogin= false;
  constructor(public authService: AuthService) { }
  title="Consult";
  ngOnInit() {
    this.userLogin = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean) => {
      this.userLogin = loggedStatus;
    })
  }
  userLogout() {
    this.authService.logout();
  }


}
